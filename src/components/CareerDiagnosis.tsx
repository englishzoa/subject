import React, { useState } from 'react';
import { DIAGNOSIS_QUESTIONS } from '../data/curriculumData';
import { HelpCircle, Sparkles, ArrowRight, RotateCcw, CheckCircle2, Compass, BookOpen, Layers, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CareerDiagnosisProps {
  onApplyDiagnosisToPlanner: (majorCategory: string, recommendedSubjects: string[]) => void;
}

export const CareerDiagnosis: React.FC<CareerDiagnosisProps> = ({ onApplyDiagnosisToPlanner }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { field: string; score: number }>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = DIAGNOSIS_QUESTIONS[currentQIndex];

  const handleSelectOption = (field: string, score: number) => {
    const nextAnswers = {
      ...answers,
      [currentQ.id]: { field, score }
    };
    setAnswers(nextAnswers);

    if (currentQIndex < DIAGNOSIS_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setIsFinished(true);
      confetti({ particleCount: 80, spread: 60 });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQIndex(0);
    setIsFinished(false);
  };

  // Compute final diagnosis outcome
  const computeResult = () => {
    const fieldScores: Record<string, number> = {
      engineering: 0,
      science: 0,
      medicine: 0,
      social: 0,
      education: 0
    };

    (Object.values(answers) as Array<{ field: string; score: number }>).forEach((ans) => {
      if (fieldScores[ans.field] !== undefined) {
        fieldScores[ans.field] += ans.score;
      }
    });

    let topFieldKey = 'engineering';
    let maxScore = -1;

    Object.entries(fieldScores).forEach(([k, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topFieldKey = k;
      }
    });

    const fieldMeta: Record<string, {
      title: string;
      desc: string;
      majors: string[];
      jobs: string[];
      subjects: string[];
      templateId: string;
    }> = {
      engineering: {
        title: '첨단 공학 & 소프트웨어·AI 혁신가형',
        desc: '논리적 문제 해결력과 시스템 설계 능력이 뛰어납니다. 기술을 통해 인류의 삶을 혁신하는 분야에 최적의 적성을 보입니다.',
        majors: ['컴퓨터공학과', '인공지능학과', '전자전기공학부', '로봇공학과', '반도체시스템공학'],
        jobs: ['AI 엔지니어', '소프트웨어 개발자', '반도체 공정 연구원', '로봇 제어 전문가'],
        subjects: ['미적분Ⅰ·Ⅱ', '기하', '정보', '인공지능 수학', '물리학', '로봇과 미래기술'],
        templateId: 'tmpl_cs'
      },
      science: {
        title: '기초 과학 & 친환경 바이오 탐구자형',
        desc: '자연현상의 근본 법칙을 밝히고 실험과 가설 검증을 즐기는 탐구형 인재입니다.',
        majors: ['화학생명공학과', '생명과학과', '지구환경과학과', '물리학과', '신소재공학'],
        jobs: ['바이오 연구원', '신소재 개발자', '기후변화 분석가', '환경 컨설턴트'],
        subjects: ['화학', '생명과학', '물질과 에너지', '세포와 물질대사', '기후변화와 환경생태'],
        templateId: 'tmpl_med'
      },
      medicine: {
        title: '생명 존중 & 정밀 의료·보건 힐러형',
        desc: '인간에 대한 깊은 공감과 엄밀한 과학적 분석을 바탕으로 질병 극복과 생명 구호에 열정을 지닙니다.',
        majors: ['의예과', '약학과', '치의예과', '한의예과', '간호학과', '의과학전공'],
        jobs: ['의사', '약사', '의과학 연구원', '임상 시험 전문가'],
        subjects: ['생명과학', '화학', '세포와 물질대사', '물질과 에너지', '확률과 통계', '미적분Ⅰ'],
        templateId: 'tmpl_med'
      },
      social: {
        title: '사회 혁신 & 데이터 기반 경영·정책 전략가형',
        desc: '사회 트렌드와 경제 현상을 날카롭게 분석하고 공정한 정책과 창의적인 비즈니스 모델을 기획합니다.',
        majors: ['경영학과', '경제학부', '미디어커뮤니케이션학과', '행정학과', '통계학과'],
        jobs: ['금융 애널리스트', '경영 컨설턴트', '데이터 마케터', '정책 기획관'],
        subjects: ['확률과 통계', '대수', '실용 통계', '사회·문화', '사회문제 탐구', '독서와 작문'],
        templateId: 'tmpl_biz'
      },
      education: {
        title: '미래 교육 & 인재 양성 에듀테크 멘토형',
        desc: '타인의 성장을 돕고 지식을 알기 쉽게 전달하며 미래 학습 환경을 설계하는 소명을 가집니다.',
        majors: ['사범대학(각 교과)', '교육학과', '초등교육과', '에듀테크융합학과'],
        jobs: ['중·고등학교 교사', '교육 연구원', '에듀테크 기획자', '장학사'],
        subjects: ['독서와 작문', '화법과 언어', '사회문제 탐구', '정보', '사회·문화'],
        templateId: 'tmpl_edu'
      }
    };

    return {
      topFieldKey,
      meta: fieldMeta[topFieldKey] || fieldMeta.engineering,
      fieldScores
    };
  };

  const result = isFinished ? computeResult() : null;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-2">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
            3분 진로 간이진단
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            질문으로 찾는 나의 진로 흥미 & 과목 로드맵
          </h2>
        </div>
        <p className="text-sm text-slate-500">
          5가지 상황별 질문을 통해 나의 주된 진로 성향을 파악하고, 고등학교 3년간 꼭 이수해야 할 맞춤형 과목을 추천받으세요.
        </p>
      </div>

      {!isFinished ? (
        /* Quiz Question Screen */
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-500">
              <span>질문 {currentQIndex + 1} / {DIAGNOSIS_QUESTIONS.length}</span>
              <span>{Math.round(((currentQIndex + 1) / DIAGNOSIS_QUESTIONS.length) * 100)}% 진행</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentQIndex + 1) / DIAGNOSIS_QUESTIONS.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Question 0{currentQIndex + 1}</div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options.map((opt, oIdx) => (
              <button
                key={oIdx}
                onClick={() => handleSelectOption(opt.field, opt.score)}
                className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200/80 hover:border-indigo-500 hover:bg-indigo-50/50 transition group flex items-start space-x-3"
              >
                <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-xs font-bold text-slate-500 shrink-0 mt-0.5 transition">
                  {String.fromCharCode(65 + oIdx)}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-indigo-950 leading-relaxed">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>

          {/* Back button */}
          {currentQIndex > 0 && (
            <button
              onClick={() => setCurrentQIndex(currentQIndex - 1)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600"
            >
              ← 이전 질문으로 돌아가기
            </button>
          )}
        </div>
      ) : (
        /* Result Screen */
        result && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 animate-fadeIn max-w-4xl mx-auto">
            {/* Header Result */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>진단 완료! 나의 진로 성향 결과</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {result.meta.title}
              </h2>
              <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                {result.meta.desc}
              </p>
            </div>

            {/* Recommended Majors & Jobs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center">
                  <Compass className="w-4 h-4 text-indigo-600 mr-2" />
                  추천 대학 전공·학과
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.meta.majors.map((m, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-indigo-700 shadow-2xs">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center">
                  <Award className="w-4 h-4 text-indigo-600 mr-2" />
                  추천 미래 직업
                </h4>
                <div className="flex flex-wrap gap-2">
                  {result.meta.jobs.map((j, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-indigo-700 shadow-2xs">
                      {j}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Subjects */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-slate-50 border border-indigo-100 space-y-3">
              <h4 className="font-extrabold text-sm text-indigo-950 flex items-center">
                <BookOpen className="w-4 h-4 text-indigo-600 mr-2" />
                2022 개정 교육과정 필수 권장 이수과목
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.meta.subjects.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl bg-white border border-indigo-200 text-xs font-extrabold text-slate-800 shadow-2xs">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  onApplyDiagnosisToPlanner(result.meta.title, result.meta.subjects);
                }}
                className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-2 transition"
              >
                <span>이 결과로 3개년 학업계획서 시작하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="py-3.5 px-6 bg-slate-100/90 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm transition flex items-center justify-center space-x-1.5 border border-slate-200/80"
              >
                <RotateCcw className="w-4 h-4" />
                <span>다시 진단하기</span>
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
