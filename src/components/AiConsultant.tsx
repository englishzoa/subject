import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, RefreshCw, Lightbulb, Compass, BookOpen, Layers, CheckCircle2, Copy } from 'lucide-react';

interface AiConsultantProps {
  initialStudentContext?: any;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export const AiConsultant: React.FC<AiConsultantProps> = ({ initialStudentContext }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `안녕하세요! **대구 진로학업설계 지원 AI 수석 컨설턴트**입니다. 🎓\n\n'**질문이 진로가 되는 대구 진로교육**'의 철학에 맞춰, 2022 개정 교육과정 고교학점제(192학점), 전공별 핵심 권장이수과목, 3개년 과목 선택 및 깊이 있는 자기주도 탐구 주제에 대해 무엇이든 친절하게 상담해 드립니다.\n\n궁금한 진로 질문이나 과목 선택 고민을 편하게 입력해주세요!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Deep Inquiry Question Generator Tool State
  const [genSubject, setGenSubject] = useState('인공지능 수학');
  const [genTopic, setGenTopic] = useState('자율주행 영상 인식');
  const [isGeneratingInquiry, setIsGeneratingInquiry] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sampleQuestions = [
    '소프트웨어/AI 개발자가 목표인데 미적분Ⅱ와 인공지능수학 중 무엇을 선택해야 하나요?',
    '경영·경제학과를 희망할 때 추천하는 수학·사회 융합 선택과목과 탐구 주제를 알려줘.',
    '경북대, 서울대 의예과 지원 시 꼭 이수해야 하는 핵심 권장이수과목은 무엇인가요?',
    '고2 때 진로가 공학에서 교육학으로 바뀌었을 때 과목 재설계와 세특 연계 전략은?',
    '2022 개정 교육과정 보통교과에서 진로선택과 융합선택 과목의 평가 차이점은 무엇인가요?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputPrompt;
    if (!query.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const studentInfo = initialStudentContext?.plan ? {
        targetMajor: initialStudentContext.plan.targetMajor,
        targetJob: initialStudentContext.plan.targetJob,
        grade: `${initialStudentContext.plan.grade}학년`,
        interests: initialStudentContext.plan.selfReflection
      } : undefined;

      const historyForApi = messages.slice(-6).map((m) => ({
        role: m.role === 'user' ? 'user' : 'model',
        text: m.content
      }));

      const res = await fetch('/api/gemini/career-consult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query.trim(),
          history: historyForApi,
          studentInfo
        })
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || '답변을 불러오지 못했습니다.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `상담 처리 중 오류가 발생했습니다: ${err.message || '다시 시도해주세요.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Quick Inquiry Generator for 세특
  const handleGenerateInquiryTopics = () => {
    const prompt = `'${genSubject}' 과목과 '${genTopic}' 관심 키워드를 융합하여, 2022 개정 교육과정 학생부 세특에 기록할 수 있는 [질문이 진로가 되는 심층 탐구 질문 3가지]와 [구체적인 단계별 탐구 활동 계획]을 작성해주세요.`;
    handleSendMessage(prompt);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Header */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 border border-indigo-800/50 shadow-xl space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
              Gemini 3.7 AI Career Engine
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              질문이 진로가 되는 AI 맞춤 컨설턴트
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          희망 대학 및 전공별 핵심 권장이수과목 안내, 3개년 과목 선택 위계성 점검, 학생부 세특을 위한 심층 질문 도출까지 전문 AI 수석 컨설턴트가 1:1로 코칭합니다.
        </p>

        {/* Inquiry Generator Quick Box */}
        <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-indigo-800/60 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-indigo-300 uppercase">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>원클릭 세특 탐구 질문 생성기</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <input
              type="text"
              value={genSubject}
              onChange={(e) => setGenSubject(e.target.value)}
              placeholder="과목명 (예: 미적분Ⅰ, 화학)"
              className="px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
            <input
              type="text"
              value={genTopic}
              onChange={(e) => setGenTopic(e.target.value)}
              placeholder="관심 키워드 (예: 신약 개발, 자율주행)"
              className="px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
            <button
              onClick={handleGenerateInquiryTopics}
              disabled={isLoading}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 transition flex items-center justify-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>탐구 질문 3가지 생성</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[650px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-slate-50/50">
          {messages.map((msg) => {
            const isBot = msg.role === 'assistant';
            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${isBot ? '' : 'flex-row-reverse space-x-reverse'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${
                    isBot
                      ? 'bg-gradient-to-br from-indigo-600 to-blue-600 text-white'
                      : 'bg-slate-900 text-white'
                  }`}
                >
                  {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] rounded-3xl p-5 shadow-2xs space-y-2 relative group text-xs sm:text-sm leading-relaxed ${
                    isBot
                      ? 'bg-white border border-slate-200/80 text-slate-800'
                      : 'bg-indigo-600 text-white rounded-tr-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">
                    {msg.content}
                  </div>

                  <div
                    className={`flex items-center justify-between pt-1 text-[10px] ${
                      isBot ? 'text-slate-400' : 'text-indigo-200'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {isBot && (
                      <button
                        onClick={() => copyToClipboard(msg.content, msg.id)}
                        className="opacity-0 group-hover:opacity-100 transition p-1 hover:bg-slate-100 rounded-lg text-slate-500"
                        title="답변 복사"
                      >
                        {copiedId === msg.id ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-2xs flex items-center space-x-2 text-xs text-slate-500">
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                <span>대구 진로학업설계 AI가 최적의 진로 로드맵을 분석 중입니다...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Suggested Quick Questions Bar */}
        <div className="p-3 bg-white border-t border-slate-100 overflow-x-auto flex items-center space-x-2 scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 shrink-0 px-2 flex items-center">
            <Compass className="w-3.5 h-3.5 mr-1" /> 추천 질문:
          </span>
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 text-xs font-semibold shrink-0 transition border border-slate-200"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center space-x-2">
          <textarea
            rows={1}
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder="과목 선택 고민, 희망 학과 권장과목, 세특 탐구 질문을 입력하세요..."
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-indigo-600 focus:bg-white resize-none"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputPrompt.trim() || isLoading}
            className={`p-3.5 rounded-2xl text-white font-bold transition shrink-0 ${
              !inputPrompt.trim() || isLoading
                ? 'bg-slate-300 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
