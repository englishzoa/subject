import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Calendar, 
  Sparkles, 
  HelpCircle, 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Award, 
  Layers, 
  School, 
  FileText, 
  Lightbulb, 
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Flame,
  Info,
  Landmark
} from 'lucide-react';
import { DEPARTMENTS_DATA, SUBJECTS_DATA, JOBS_DATA, UNI_RECOMMENDATIONS } from '../data/curriculumData';

interface HomeDashboardProps {
  onNavigate: (tabId: string) => void;
  onSearchSubject: (subjectName: string) => void;
  onSelectMajorForPlan: (majorName: string, category: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  onSearchSubject,
  onSelectMajorForPlan
}) => {
  const [quickSearch, setQuickSearch] = useState('');

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickSearch.trim()) return;
    onSearchSubject(quickSearch.trim());
    onNavigate('subjects');
  };

  const featureCards = [
    {
      id: 'majors',
      title: '대학 학과 정보',
      subtitle: '계열별 전공 & 배우는 내용',
      desc: '공학, 자연과학, 의약, 인문사회 등 8개 계열별 대표 학과와 대학 주요 교육과정, 졸업 후 진로 분야를 확인하세요.',
      icon: GraduationCap,
      badge: '전공 탐색',
      color: 'from-blue-600 to-indigo-700',
      bgLight: 'bg-blue-50/70 border-blue-100 hover:border-blue-300',
      iconColor: 'text-blue-600',
      stats: '8개 계열 · 주요 전공',
    },
    {
      id: 'subjects',
      title: '2022 교과목 백과',
      subtitle: '공통·일반·진로·융합선택',
      desc: '2022 개정 보통교과의 성격, 평가 방식(5등급제 등), 선수과목 위계도 및 관련 추천 학과를 탐색하세요.',
      icon: BookOpen,
      badge: '과목 선택',
      color: 'from-indigo-600 to-violet-700',
      bgLight: 'bg-indigo-50/70 border-indigo-100 hover:border-indigo-300',
      iconColor: 'text-indigo-600',
      stats: '2022 개정 교과목',
    },
    {
      id: 'jobs',
      title: '미래 유망 직업',
      subtitle: '신기술 & 필요 핵심 역량',
      desc: 'AI, 반도체, 바이오, 로봇 등 미래 신산업 유망 직업군과 고등학교에서 미리 이수해야 할 교과목을 안내합니다.',
      icon: Compass,
      badge: '진로 설계',
      color: 'from-emerald-600 to-teal-700',
      bgLight: 'bg-emerald-50/70 border-emerald-100 hover:border-emerald-300',
      iconColor: 'text-emerald-600',
      stats: '유망 직업군 가이드',
    },
    {
      id: 'recommendations',
      title: '대학별 권장이수과목',
      subtitle: '2028 대입 주요 대학 가이드',
      desc: '서울대, 경북대, 고려대 등 주요 대학의 전공별 필수·권장 이수과목 매트릭스를 한눈에 비교하고 대비하세요.',
      icon: CheckCircle2,
      badge: '대입 전략',
      color: 'from-rose-600 to-pink-700',
      bgLight: 'bg-rose-50/70 border-rose-100 hover:border-rose-300',
      iconColor: 'text-rose-600',
      stats: '주요 대학 전공 매트릭스',
    },
    {
      id: 'planner',
      title: '3개년 학업계획서',
      subtitle: '고교학점제 192학점 시뮬레이터',
      desc: '1학년부터 3학년까지 나의 6개 학기 이수 계획을 세우고, 졸업 필수 이수학점 충족 여부를 실시간 검증하세요.',
      icon: Calendar,
      badge: '학업 설계',
      color: 'from-amber-600 to-orange-700',
      bgLight: 'bg-amber-50/70 border-amber-100 hover:border-amber-300',
      iconColor: 'text-amber-600',
      stats: '192학점 실시간 검증',
    },
    {
      id: 'admission_2028',
      title: '2028 대입정보',
      subtitle: '2028학년도 대학입학전형 개편안',
      desc: '2028학년도 수능 및 내신 개편 방안, 수시/정시 주요 변경 사항 등을 확인하고 입시 전략을 세우세요.',
      icon: Landmark,
      badge: '대입 정보',
      color: 'from-pink-600 to-red-700',
      bgLight: 'bg-pink-50/70 border-pink-100 hover:border-pink-300',
      iconColor: 'text-pink-600',
      stats: '수능 및 내신 개편 안내',
    },
    {
      id: 'ai_consultant',
      title: 'AI 진로·학업 멘토',
      subtitle: 'Gemini AI 맞춤형 1:1 컨설팅',
      desc: '내 희망 진로, 성적, 관심 과목을 입력하면 최적의 3개년 이수 과목과 탐구 활동 주제를 AI가 맞춤 제안합니다.',
      icon: Sparkles,
      badge: 'AI 멘토링',
      color: 'from-purple-600 to-fuchsia-700',
      bgLight: 'bg-purple-50/70 border-purple-100 hover:border-purple-300',
      iconColor: 'text-purple-600',
      stats: '실시간 AI 맞춤 답변',
    },
    {
      id: 'diagnosis',
      title: '커리어넷 진로심리검사',
      subtitle: '공식 5대 표준화 검사 & 연계',
      desc: '직업흥미, 적성, 가치관, 전공적합도 검사 가이드 및 검사 결과별 2022 개정 권장과목을 확인하세요.',
      icon: HelpCircle,
      badge: '공식 검사',
      color: 'from-cyan-600 to-blue-700',
      bgLight: 'bg-cyan-50/70 border-cyan-100 hover:border-cyan-300',
      iconColor: 'text-cyan-600',
      stats: '커리어넷 5대 표준화 검사',
    }
  ];

  const popularMajors = [
    { name: '컴퓨터공학과', category: '공학계열', keySubject: '미적분Ⅱ, 정보, 기하' },
    { name: '의예과 / 약학과', category: '의약계열', keySubject: '화학, 생명과학, 미적분Ⅰ' },
    { name: '인공지능(AI)학과', category: '공학계열', keySubject: '인공지능 수학, 정보, 대수' },
    { name: '반도체시스템공학과', category: '공학계열', keySubject: '물리학, 미적분Ⅱ, 기하' },
    { name: '경영학부 / 경제학과', category: '경영·경제계열', keySubject: '확률과 통계, 경제, 대수' },
    { name: '바이오헬스/생명공학', category: '자연계열', keySubject: '생명과학, 세포와 물질대사' }
  ];

  const creditRules = [
    { title: '총 이수 학점', value: '192학점', note: '교과 174학점 + 창체 18학점' },
    { title: '기초 교과군 상한', value: '50% 이내', note: '국어, 수학, 영어 합계 87학점 이하' },
    { title: '필수 이수 학점', value: '84학점 이상', note: '공통 및 필수 교과군 기준' },
    { title: '학기별 이수 학점', value: '28~34학점', note: '균형 있는 학기별 수강 권장' }
  ];

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Banner with Integrated Search */}
      <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-2xl overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="space-y-4">
            {/* Catchphrase Highlight Card */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500/25 via-orange-500/20 to-rose-500/25 border-2 border-amber-400/50 shadow-lg shadow-amber-950/40">
              <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-white drop-shadow-sm">
                질문이{' '}
                <span className="text-amber-300 font-black">
                  진로
                </span>
                가 되는 대구{' '}
                <span className="text-amber-300 font-black">
                  진로
                </span>
                교육
              </span>
            </div>

            {/* Platform Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-tight text-white">
              대구광역시교육청{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-100">
                진로·학업설계 플랫폼
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              어떤 학과를 갈지, 어떤 과목을 선택해야 할지 고민인가요? <br className="hidden sm:inline" />
              학과 정보부터 2022 개정 과목, 대학별 권장이수과목, 192학점 이수 시뮬레이터까지 스스로 설계해보세요.
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleQuickSearchSubmit} className="pt-2">
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={quickSearch}
                onChange={(e) => setQuickSearch(e.target.value)}
                placeholder="관심 과목, 대학 학과, 직업을 검색해보세요 (예: 인공지능, 미적분, 약학, 반도체)..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm sm:text-base pl-12 pr-28 py-3.5 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-md shadow-indigo-600/30"
              >
                검색
              </button>
            </div>
          </form>

          {/* Quick Action Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
            <span className="font-semibold text-slate-400 flex items-center">
              <Flame className="w-3.5 h-3.5 text-rose-400 mr-1" /> 인기 검색:
            </span>
            {['컴퓨터공학과', '미적분Ⅱ', '의예과', '인공지능 수학', '생명과학', '경영학'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  onSearchSubject(tag);
                  onNavigate('subjects');
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 6 Core Functional Hub Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              진로·학업설계 핵심 메뉴 탐색
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              원하는 메뉴를 선택하여 전공, 과목, 직업을 탐색하고 나만의 3개년 학업계획을 완성해보세요.
            </p>
          </div>
          <button
            onClick={() => onNavigate('guide')}
            className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            고교학점제 이용 가이드 <ChevronRight className="w-4 h-4 ml-0.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className={`rounded-3xl p-6 border transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg flex flex-col justify-between group bg-white ${card.bgLight}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm border border-slate-100 ${card.iconColor}`}>
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white border border-slate-200 text-slate-700 shadow-2xs">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {card.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400">
                    {card.stats}
                  </span>
                  <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center">
                    바로가기 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3-Step Guided Journey for Students */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center space-x-2 text-indigo-400 text-xs font-bold">
                <Zap className="w-4 h-4" />
                <span>학생 맞춤형 이용 순서</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
                고교학점제 성공을 위한 3단계 진로·학업설계 로드맵
              </h3>
            </div>
            <button
              onClick={() => onNavigate('diagnosis')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold self-start sm:self-auto transition shadow-md"
            >
              진로적성 간이진단 해보기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 font-extrabold flex items-center justify-center text-sm border border-indigo-400/30">
                  1
                </span>
                <span className="text-[11px] font-bold text-slate-400">진로 & 전공 탐색</span>
              </div>
              <h4 className="font-extrabold text-base text-white">
                나의 흥미와 목표 학과 찾기
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                진로적성 간이진단을 실시하고, 8개 계열별 주요 학과와 미래 유망 직업의 역할 및 요구 역량을 탐색합니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('majors')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center"
                >
                  학과 정보 살펴보기 <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 font-extrabold flex items-center justify-center text-sm border border-indigo-400/30">
                  2
                </span>
                <span className="text-[11px] font-bold text-slate-400">과목 & 권장과목 매칭</span>
              </div>
              <h4 className="font-extrabold text-base text-white">
                2022 개정 과목 및 대학별 권장과목 확인
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                희망 학과에서 요구하는 <strong>핵심 권장이수과목</strong>과 2022 개정 교육과정 선택과목(일반/진로/융합)의 성격을 분석합니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('recommendations')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center"
                >
                  대학별 권장과목 보기 <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 font-extrabold flex items-center justify-center text-sm border border-indigo-400/30">
                  3
                </span>
                <span className="text-[11px] font-bold text-slate-400">시뮬레이션 & AI 피드백</span>
              </div>
              <h4 className="font-extrabold text-base text-white">
                3개년 192학점 이수계획서 완성
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                6개 학기에 과목을 직접 배치하여 192학점 요건을 실시간 검증하고, AI 진로 멘토에게 학업계획 피드백을 받습니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('planner')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center"
                >
                  학업계획서 작성하기 <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Section: Popular Majors & High School Credit System Essentials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Popular Majors Quick Picker */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-indigo-600">
                <GraduationCap className="w-4 h-4" />
                <span>학생 선호도 높은 대표 전공</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                인기 학과별 필수 권장과목 한눈에 보기
              </h3>
            </div>
            <button
              onClick={() => onNavigate('majors')}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              전체 학과 보기 →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {popularMajors.map((major, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200/80 hover:border-indigo-400 hover:shadow-xs transition bg-slate-50/50 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    {major.category}
                  </span>
                  <button
                    onClick={() => {
                      onSelectMajorForPlan(major.name, major.category);
                      onNavigate('planner');
                    }}
                    className="text-[11px] font-bold text-indigo-600 hover:underline"
                  >
                    + 계획서 담기
                  </button>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm">
                  {major.name}
                </h4>
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-rose-700">권장:</span> {major.keySubject}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* High School Credit System Standard Summary */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 rounded-3xl p-6 sm:p-8 shadow-sm border border-indigo-100 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-1.5 text-xs font-bold text-indigo-700">
              <Award className="w-4 h-4" />
              <span>고교학점제 핵심 이수 기준</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
              3개년 192학점 졸업 요건
            </h3>
            <p className="text-xs text-slate-500">
              2025학년도 고등학교 입학생(2022 개정 교육과정)부터 적용
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {creditRules.map((rule, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-2xl border border-indigo-100/80 shadow-2xs space-y-1">
                <span className="text-[11px] font-bold text-slate-500 block">{rule.title}</span>
                <span className="text-base font-extrabold text-indigo-900 block">{rule.value}</span>
                <span className="text-[10px] text-slate-400 leading-tight block">{rule.note}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-white/90 rounded-2xl border border-indigo-200/70 text-xs text-slate-700 space-y-2">
            <div className="flex items-center text-indigo-900 font-bold">
              <Info className="w-3.5 h-3.5 text-indigo-600 mr-1.5 shrink-0" />
              <span>내신 5등급제 & 과목 성취도 평가</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              공통과목 및 선택과목은 5등급제(1~5등급) 상대평가 석차등급과 성취도(A~E)가 병기되며, 융합선택 과목 등 일부 과목은 성취도 중심 평가가 이뤄집니다.
            </p>
          </div>

          <div>
            <button
              onClick={() => onNavigate('planner')}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center space-x-1.5 transition"
            >
              <span>192학점 시뮬레이터로 내 학업계획 세우기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* External Resources & Quick Links Footer Info */}
      <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 text-slate-600 text-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <span className="font-extrabold text-slate-800 text-sm">
            공식 진로·진학 포털 바로가기 연계
          </span>
          <span className="text-slate-500">
            대구광역시교육청 및 교육부 공식 진로 정보망
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <a
            href="https://www.career.go.kr"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center justify-between font-bold"
          >
            <span>커리어넷 (CareerNet)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="https://www.hscredit.kr"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center justify-between font-bold"
          >
            <span>고교학점제 종합지원</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="https://www.adiga.kr"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center justify-between font-bold"
          >
            <span>대입정보포털 어디가</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="https://www.ebsi.co.kr"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center justify-between font-bold"
          >
            <span>EBSi 수능·입시포털</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="https://www.moe.go.kr"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center justify-between font-bold"
          >
            <span>교육부 (MOE)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
          <a
            href="https://www.dge.go.kr"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition flex items-center justify-between font-bold"
          >
            <span>대구광역시교육청</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
