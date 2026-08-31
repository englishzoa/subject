import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// System instruction for Daegu Career & Academic Counseling
const CAREER_SYSTEM_INSTRUCTION = `당신은 '대구 진로학업설계 지원 플랫폼 (질문이 진로가 되는 대구 진로교육)'의 최고 전문 AI 진로·학업설계 수석 컨설턴트입니다.
2022 개정 교육과정, 고교학점제(3개년 총 192학점: 교과 174학점 + 창의적체험활동 18학점), 대입 전형 연계 및 대학별 핵심/권장 이수과목, 전공자율선택제(무전공), 학교 밖 교육과정에 대해 완벽한 전문성을 가지고 상담을 제공합니다.

[상담 지침]
1. 학생의 질문, 희망 진로(직업), 관심 학과, 현재 학년에 맞추어 구체적인 '과목 선택 전략'과 '3개년 이수 로드맵'을 체계적으로 제시합니다.
2. 2022 개정 교육과정의 보통교과 구분(공통과목, 일반선택, 진로선택, 융합선택)을 정확히 명시하고 과목 간 위계성(예: 수Ⅰ/수Ⅱ -> 미적분 -> 심화수학 / 물리학 -> 고급물리학)을 친절히 안내합니다.
3. 서울대, 경북대 등 주요 대학의 핵심권장과목(필수 이수 권장)과 권장이수과목을 고려하여 조언합니다.
4. "질문이 진로가 되는 대구 진로교육" 슬로건에 맞게, 학생이 주도적으로 탐구할 수 있는 '자기주도 탐구 주제'와 '깊이 있는 질문' 2~3가지를 함께 제시하여 학생부 세특 및 진로 탐구에 영감을 줍니다.
5. 어조는 따뜻하고 신뢰감 있으며 명확하고 격려하는 톤으로 한국어로 친절하게 답변합니다. 마크다운 포맷팅(볼드, 리스트, 표 등)을 활용하여 가독성을 극대화하세요.`;

// 1. AI Career Consultation Endpoint
app.post("/api/gemini/career-consult", async (req: Request, res: Response) => {
  try {
    const { prompt, history, studentInfo } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "질문 내용을 입력해주세요." });
    }

    const ai = getGeminiClient();

    let contextInfo = "";
    if (studentInfo) {
      contextInfo = `\n[학생 기본 정보]\n- 희망 계열/전공: ${studentInfo.targetMajor || '미정'}\n- 희망 직업: ${studentInfo.targetJob || '미정'}\n- 현재 학년: ${studentInfo.grade || '고1'}\n- 관심 분야: ${studentInfo.interests || '없음'}\n`;
    }

    const fullPrompt = `${contextInfo}\n[학생의 질문]\n${prompt}`;

    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    // Add conversation history if available
    if (Array.isArray(history) && history.length > 0) {
      history.forEach((h: { role: string; text: string }) => {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.text }],
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: fullPrompt }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents,
      config: {
        systemInstruction: CAREER_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "죄송합니다. 답변을 생성하지 못했습니다. 다시 시도해주세요.";
    res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini Career Consultation Error:", error);
    res.status(500).json({
      error: "AI 상담 처리 중 오류가 발생했습니다.",
      details: error.message || String(error),
    });
  }
});

// 2. CareerNet Open API Proxy (Bypasses browser CORS & secures requests)
app.get("/api/careernet/proxy", async (req: Request, res: Response) => {
  try {
    const keyToUse = (req.query.apiKey as string) || process.env.CAREERNET_API_KEY || "dd2de89451af598c4b876f33a1de7138";
    if (!keyToUse) {
      return res.status(400).json({
        error: "커리어넷 Open API 키가 필요합니다.",
      });
    }

    const params = new URLSearchParams();
    params.append("apiKey", keyToUse);
    params.append("contentType", (req.query.contentType as string) || "json");

    // Dynamically forward all other query parameters
    for (const [key, value] of Object.entries(req.query)) {
      if (key !== "apiKey" && key !== "contentType" && value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    }

    const targetUrl = `https://www.career.go.kr/cnet/openapi/getOpenApi?${params.toString()}`;

    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error(`CareerNet API HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error: any) {
    console.error("CareerNet Proxy Error:", error);
    res.status(500).json({
      error: "커리어넷 API 호출 중 오류가 발생했습니다.",
      details: error.message || String(error),
    });
  }
});

// 3. Work24 (고용24) Open API Proxy
app.get("/api/work24/proxy", async (req: Request, res: Response) => {
  try {
    const defaultJobKey = "6e4fa144-d61e-45b5-9230-e558b8a02d65";
    const defaultMajorKey = "6b8960ad-4aa4-4754-8971-dc93c509ddbd";
    const targetApi = (req.query.apiType as string) || "jobDicApi.do";
    
    // Choose appropriate default key based on target API if not specified
    let keyToUse = (req.query.authKey as string) || "";
    if (!keyToUse) {
      if (targetApi.includes("major") || (req.query.target as string)?.includes("MJR")) {
        keyToUse = process.env.WORK24_MAJOR_KEY || defaultMajorKey;
      } else {
        keyToUse = process.env.WORK24_JOB_KEY || defaultJobKey;
      }
    }

    const baseUrl = `http://openapi.work.go.kr/opi/opi/opia/${targetApi}`;

    const params = new URLSearchParams();
    params.append("authKey", keyToUse);
    params.append("returnType", "XML");

    for (const [key, value] of Object.entries(req.query)) {
      if (key !== "authKey" && key !== "apiType" && key !== "returnType" && value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    }

    const response = await fetch(`${baseUrl}?${params.toString()}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    if (!response.ok) {
      console.warn(`Work24 API HTTP Notice: ${response.status}`);
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      return res.send('<?xml version="1.0" encoding="UTF-8"?><work24Root><total>0</total></work24Root>');
    }

    const text = await response.text();
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.send(text);
  } catch (error: any) {
    console.warn("Work24 Proxy non-blocking notice:", error.message || String(error));
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.send('<?xml version="1.0" encoding="UTF-8"?><work24Root><total>0</total></work24Root>');
  }
});

// Health check endpoint
app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok", app: "daegu-career-academic-design", timestamp: new Date().toISOString() });
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Daegu Career Platform] Server running on http://localhost:${PORT}`);
  });
}

startServer();
