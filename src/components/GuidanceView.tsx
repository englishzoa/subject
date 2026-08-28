import React, { useState } from 'react';
import { GUIDANCE_SECTIONS } from '../data/guidanceData';
import { BookOpen, Target, CheckCircle2, ChevronRight, GraduationCap, Sparkles, Layers, ShieldCheck, MapPin, ArrowRight, Lightbulb, FileText } from 'lucide-react';

interface GuidanceViewProps {
  onNavigate: (tab: string) => void;
}

export const GuidanceView: React.FC<GuidanceViewProps> = ({ onNavigate }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('five_step_design');
  const [activeStep, setActiveStep] = useState<number>(0);

  const selectedSection = GUIDANCE_SECTIONS.find((s) => s.id === selectedSectionId) || GUIDANCE_SECTIONS[0];

  const stepsList = [
    {
      step: '1단계',
      title: '진로 지도 (자기 이해)',
      desc: '흥미·적성 파악, 진로정보 수집 및 가설 설정',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      numColor: 'bg-indigo-600',
      actionTitle: '진로적성 간이진단 해보기',
      actionTab: 'diagnosis',
      bullets: [
        '표준화 심리검사(커리어넷·워크넷) 및 간이 적성 진단',
        '나만의 강점과 가치관 질문 목록 도출',
        '유연하고 개방적인 1~2개 진로 목표 가설 수립'
      ]
    },
    {
      step: '2단계',
      title: '과목 선택 지도 (요구역량 분석)',
      desc: '대학 권장이수과목 및 학과별 선수교과 매핑',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      numColor: 'bg-blue-600',
      actionTitle: '2022 개정 교과목 탐색하기',
      actionTab: 'subjects',
      bullets: [
        '주요 대학 전공별 핵심 권장이수과목 확인',
        '일반선택 vs 진로선택 vs 융합선택 과목 편제 분석',
        '교과 담임교사와의 1:1 진로학업 상담'
      ]
    },
    {
      step: '3단계',
      title: '학업 이수 설계 (3개년 계획서)',
      desc: '192학점 이수 배치 및 위계성 점검',
      badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      numColor: 'bg-violet-600',
      actionTitle: '3개년 학업계획서 작성하기',
      actionTab: 'planner',
      bullets: [
        '학기별 192학점(교과 174학점 + 창체 18학점) 편성',
        '기초 교과 50%(87학점) 초과 금지 룰 준수 확인',
        '수학·과학 과목 간 선수과목 위계성 자동 검증'
      ]
    },
    {
      step: '4단계',
      title: '학업 관리 지도 (탐구 & 성취)',
      desc: '질문 중심 세특 탐구 및 최소성취수준 관리',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
      numColor: 'bg-teal-600',
      actionTitle: 'AI 탐구 질문 생성하기',
      actionTab: 'ai_consultant',
      bullets: [
        '수업 내 토론·실험을 통한 자기주도적 질문 확장',
        '최소 성취수준(출석률 2/3 + 성취율 40%) 모니터링',
        '학교 밖 교육과정 및 공동교육과정 연계 수강'
      ]
    },
    {
      step: '5단계',
      title: '진로 변경 지도 (학업 재설계)',
      desc: '진로 변화 시 유연한 과목 재배치 및 무전공 대비',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      numColor: 'bg-amber-600',
      actionTitle: 'AI 진로 재설계 상담받기',
      actionTab: 'ai_consultant',
      bullets: [
        '기존 이수 과목의 융합 역량(Transferable Skills) 도출',
        '대학 전공자율선택제(무전공 1·2유형) 연계 전략',
        '남은 학기 선택과목 유연 재배치'
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner with Slogan */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 md:p-12 shadow-xl border border-slate-800">
        {/* Subtle Ambient Light Accents */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-10 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>질문이 진로가 되는 대구 진로교육</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            고교학점제 & 2022 개정 교육과정<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-blue-300">
              맞춤형 진로·학업설계 가이드
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            학생 스스로 자신의 질문과 꿈을 발견하고, 3년간 192학점의 학업 경로를 체계적으로 설계할 수 있도록 돕는 대구광역시교육청 진로·학업설계 지원 플랫폼입니다.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNavigate('planner')}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md shadow-indigo-600/30 flex items-center space-x-2 transition-all duration-150 hover:scale-[1.02]"
            >
              <span>3개년 학업계획서 시작</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('diagnosis')}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-slate-200 border border-slate-700 font-semibold text-sm transition"
            >
              <span>진로 적성 간이진단 (3분)</span>
            </button>
            <button
              onClick={() => onNavigate('ai_consultant')}
              className="px-5 py-3 rounded-xl bg-indigo-950/70 hover:bg-indigo-900 text-indigo-200 border border-indigo-700/50 font-semibold text-sm transition flex items-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>AI 진로 컨설팅</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5-Step Process Interactive Visual Map */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-2">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                핵심 프로세스
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                진로·학업 설계 5단계 지도 모델
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              단계별 카드를 클릭하여 구체적인 지도 내용과 학생 실천 항목을 확인하세요.
            </p>
          </div>
          <div className="text-xs text-slate-400 font-medium">
            대구광역시교육청 진로·학업설계 표준 모델
          </div>
        </div>

        {/* Step Tabs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
          {stepsList.map((st, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden ${
                  isCurrent
                    ? 'border-indigo-500 bg-indigo-50/60 shadow-md ring-2 ring-indigo-500/20'
                    : 'border-slate-200/90 bg-slate-50/60 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg ${st.numColor} text-white flex items-center justify-center text-xs font-bold mb-2.5 shadow-sm`}>
                  0{idx + 1}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase">{st.step}</div>
                <div className="text-sm font-extrabold text-slate-900 mt-0.5">{st.title}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{st.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        {stepsList[activeStep] && (
          <div className="mt-6 p-6 sm:p-7 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-800 space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${stepsList[activeStep].badgeColor}`}>
                  {stepsList[activeStep].step} 상세 실천 가이드
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2">
                  {stepsList[activeStep].title}
                </h3>
              </div>

              <button
                onClick={() => onNavigate(stepsList[activeStep].actionTab)}
                className="self-start sm:self-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center space-x-1.5 transition"
              >
                <span>{stepsList[activeStep].actionTitle}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
              {stepsList[activeStep].bullets.map((b, i) => (
                <div key={i} className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/70">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-200 leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Guide Detail Topic Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation Sidebar of Topics */}
        <div className="lg:col-span-1 space-y-4">
          <div className="p-4 bg-slate-100/70 rounded-2xl border border-slate-200/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
              주요 핵심 가이드 주제
            </h3>
            <div className="space-y-1.5">
              {GUIDANCE_SECTIONS.map((sec) => {
                const isSelected = sec.id === selectedSectionId;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`w-full text-left p-3.5 rounded-xl transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-600/20'
                        : 'text-slate-700 hover:bg-white hover:text-indigo-600 font-medium'
                    }`}
                  >
                    <div>
                      <div className="text-sm">{sec.title}</div>
                      <div className={`text-xs mt-0.5 ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                        {sec.badge}
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Info Callout Card */}
          <div className="bg-gradient-to-br from-indigo-50/90 to-slate-50 p-5 rounded-2xl border border-indigo-100 space-y-3">
            <div className="flex items-center space-x-2 text-indigo-900 font-bold text-sm">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <span>고교학점제 핵심 팁</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>192학점</strong>을 채우는 것만큼이나 중요한 것은 <strong>전공 연계 과목의 위계성</strong>입니다. 수학과 과학 과목은 반드시 선이수 과목을 먼저 이수해야 대학 종합전형에서 긍정적인 학업 역량 평가를 받을 수 있습니다.
            </p>
            <button
              onClick={() => onNavigate('planner')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center"
            >
              내 192학점 시뮬레이션 해보기 →
            </button>
          </div>
        </div>

        {/* Main Content Pane */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
            <div className="border-b border-slate-100 pb-5">
              <div className="flex items-center space-x-2 mb-1.5">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {selectedSection.category}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {selectedSection.badge}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                {selectedSection.title}
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {selectedSection.description}
              </p>
            </div>

            {/* Sub-sections */}
            <div className="space-y-5">
              {selectedSection.points.map((point, pIdx) => (
                <div key={pIdx} className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-3">
                  <h4 className="text-base font-extrabold text-slate-900 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                    {point.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-600">
                    {point.description}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {point.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start text-xs text-slate-700 leading-relaxed">
                        <span className="text-indigo-500 font-bold mr-2">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {point.tips && (
                    <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200/70 text-xs text-amber-900 flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{point.tips}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
