import React, { useState } from 'react';
import { 
  GUIDANCE_SECTIONS, 
  HSCREDIT_BEFORE_AFTER, 
  HSCREDIT_7_STEPS, 
  MIN_ACHIEVEMENT_PROCESS, 
  HSCREDIT_FAQS 
} from '../data/guidanceData';
import { 
  BookOpen, 
  Target, 
  CheckCircle2, 
  ChevronRight, 
  GraduationCap, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Lightbulb, 
  FileText,
  ExternalLink,
  HelpCircle,
  Clock,
  Compass,
  Check,
  ChevronDown,
  Info,
  Calendar,
  Award,
  ArrowDown,
  RefreshCw,
  Building2,
  Users,
  Search
} from 'lucide-react';

interface GuidanceViewProps {
  onNavigate: (tab: string) => void;
}

type SubMenuType = 
  | 'intro' 
  | 'background' 
  | 'operating_process' 
  | 'standards' 
  | 'min_achievement' 
  | 'joint_outschool' 
  | 'evaluation_2028' 
  | 'guidance_5steps' 
  | 'faq';

export const GuidanceView: React.FC<GuidanceViewProps> = ({ onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState<SubMenuType>('intro');
  const [activeStep7, setActiveStep7] = useState<number>(0);
  const [activeStep5, setActiveStep5] = useState<number>(0);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq_1');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');

  const menuItems: { id: SubMenuType; label: string; subLabel: string; icon: any }[] = [
    { id: 'intro', label: '1. 고교학점제란?', subLabel: '개념 및 Before/After 비교', icon: Compass },
    { id: 'background', label: '2. 도입 배경 및 기대효과', subLabel: '미래 사회 역량 & 주체별 효과', icon: Sparkles },
    { id: 'operating_process', label: '3. 7단계 운영 절차', subLabel: '편성·신청부터 졸업까지', icon: Layers },
    { id: 'standards', label: '4. 192학점 이수 & 졸업 요건', subLabel: '이수 기준 및 50% 제한 규칙', icon: GraduationCap },
    { id: 'min_achievement', label: '5. 최소 성취수준 보장지도', subLabel: '예방 - 보충 - 학점 인정 안전망', icon: ShieldCheck },
    { id: 'joint_outschool', label: '6. 공동교육 & 학교 밖 교육', subLabel: '온·오프라인 및 대학 연계(최대 34학점)', icon: Building2 },
    { id: 'evaluation_2028', label: '7. 성적 처리 & 2028 대입', subLabel: '내신 5등급제 & 융합선택 절대평가', icon: Award },
    { id: 'guidance_5steps', label: '8. 대구 5단계 지도 모델', subLabel: '질문이 진로가 되는 5단계', icon: BookOpen },
    { id: 'faq', label: '9. 자주 묻는 질문 (FAQ)', subLabel: '오해와 진실 10문 10답', icon: HelpCircle },
  ];

  const filteredFaqs = HSCREDIT_FAQS.filter((f) => {
    if (!faqSearchQuery.trim()) return true;
    const q = faqSearchQuery.toLowerCase();
    return (
      f.question.toLowerCase().includes(q) ||
      f.answer.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      f.keyPoints.some((k) => k.toLowerCase().includes(q))
    );
  });

  const stepsList5 = [
    {
      step: '1단계',
      title: '진로 지도 (자기 이해)',
      desc: '흥미·적성 파악, 진로정보 수집 및 가설 설정',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      numColor: 'bg-indigo-600',
      actionTitle: '진로적성 간이진단',
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
      actionTitle: '2022 개정 과목 탐색',
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
      actionTitle: '3개년 학업계획서 작성',
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
      actionTitle: 'AI 탐구 질문 생성',
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
      actionTitle: 'AI 진로 재설계 상담',
      actionTab: 'ai_consultant',
      bullets: [
        '기존 이수 과목의 융합 역량(Transferable Skills) 도출',
        '대학 전공자율선택제(무전공 1·2유형) 연계 전략',
        '남은 학기 선택과목 유연 재배치'
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner with KEDI hscredit.kr Official Integration */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-10 w-80 h-80 bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>한국교육개발원(KEDI) 고교학점제 종합 추진 지원센터 연계</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                2022 개정 교육과정 · 2028 대입 개편
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              고교학점제 완벽 안내 & 진로·학업설계 백과
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              <strong>hscredit.kr(고교학점제 포털)</strong>의 핵심 세부 지침을 바탕으로, 
              고교학점제의 정의·배경, 7단계 운영 절차, 192학점 이수 기준, 최소 성취수준 보장지도 및 2028 대입 성취평가제까지 
              한눈에 이해하고 나만의 학업 경로를 주도적으로 완성하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <a
              href="https://www.hscredit.kr/about/intro"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white border border-indigo-300/30 text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>hscredit.kr/about/intro 원문</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onNavigate('planner')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-md shadow-indigo-600/30"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>3개년 192학점 시뮬레이터</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Multi-Submenu Navigation Tab Bar */}
      <div className="bg-white rounded-2xl p-2 border border-slate-200/80 shadow-sm overflow-x-auto">
        <div className="flex items-center space-x-1.5 min-w-max">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isSelected = activeMenu === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center space-x-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SUBMENU 1: INTRO (고교학점제란? & Before/After) */}
      {activeMenu === 'intro' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Concept Header */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  KEDI 표준 정의
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
                  고교학점제(High School Credit System)란?
                </h2>
              </div>
              <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                2025 고1 전면 도입 · 3개년 192학점
              </span>
            </div>

            <div className="p-5 bg-gradient-to-r from-indigo-50/70 to-sky-50/50 rounded-2xl border border-indigo-100/80 space-y-2">
              <p className="text-sm sm:text-base font-bold text-indigo-950 leading-relaxed">
                "고교학점제는 학생이 기초 소양과 기본 학력을 바탕으로 진로·적성에 따라 과목을 선택하고, 
                이수 기준에 도달한 과목에 대해 학점을 취득·누적하여 졸업하는 교육과정 운영 제도입니다."
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                모든 학생이 정해진 동일한 시간표를 따르던 과거의 공급자 중심 교육에서 벗어나, 
                학생 개개인의 진로 희망과 지적 호기심에 맞춰 과목을 선택하고 교과 교실로 이동하여 능동적으로 수업에 참여합니다.
              </p>
            </div>

            {/* 3 Core Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xs">
                  01
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">포용성 (Inclusiveness)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  모든 학생의 기초 학력을 공교육이 끝까지 책임지는 <strong>최소 성취수준 보장지도 안전망</strong>을 구축하여 단 한 명의 배움도 놓치지 않습니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black text-xs">
                  02
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">자율성 (Autonomy)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  학생이 자신의 진로 질문에 따라 스스로 3개년 192학점 로드맵을 설계하고, 자기주도적으로 학습을 실천하며 미래를 개척합니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs">
                  03
                </div>
                <h3 className="text-sm font-extrabold text-slate-900">다양성 (Diversity)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  보통교과 100여 개 과목, 학교 간 공동교육과정, 지역사회 및 대학 연계 학교 밖 교육을 통해 학생의 다채로운 진로를 폭넓게 지원합니다.
                </p>
              </div>
            </div>
          </div>

          {/* Before vs After Interactive Comparison Matrix */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  패러다임의 혁신
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                  기존 교육과정 vs 2022 개정 고교학점제 비교표
                </h3>
              </div>
              <span className="text-xs text-slate-400">hscredit.kr 표준 대조표</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold">
                    <th className="p-3.5 rounded-tl-xl w-1/5">구분 항목</th>
                    <th className="p-3.5 w-2/5 bg-slate-800">기존 교육과정 (2015 개정 이전)</th>
                    <th className="p-3.5 w-2/5 bg-indigo-700 rounded-tr-xl">고교학점제 (2022 개정)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {HSCREDIT_BEFORE_AFTER.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                      <td className="p-3.5 font-bold text-slate-900 bg-slate-100/60 border-r border-slate-200/70">
                        {item.category}
                        <span className="block text-[10px] text-indigo-600 font-semibold mt-0.5">
                          #{item.highlight}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-500 border-r border-slate-200/70 leading-relaxed">
                        {item.before}
                      </td>
                      <td className="p-3.5 text-indigo-950 font-semibold bg-indigo-50/30 leading-relaxed">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-600 mr-1.5"></span>
                        {item.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUBMENU 2: BACKGROUND & EXPECTED EFFECTS */}
      {activeMenu === 'background' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                추진 배경 및 필요성
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                왜 지금 고교학점제가 필요한가요?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                디지털 대전환, 인공지능 시대의 도래, 학령인구 급감 및 초개인화 사회로의 전환에 대응하기 위한 공교육의 근본적 혁신입니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/40 border border-slate-200/80 space-y-3">
                <div className="flex items-center space-x-2 text-indigo-900 font-extrabold text-sm">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>1. 4차 산업혁명과 지식 융복합 시대의 도래</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  단순 지식 암기와 정형화된 문제 풀이 중심의 교육으로는 AI 시대가 요구하는 <strong>창의적 문제해결력, 비판적 사고력, 협업 역량</strong>을 기를 수 없습니다. 
                  학생 스스로 탐구하고 싶은 주제를 질문하고 관련 학문을 융합하여 공부하는 경험이 필수적입니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200/80 space-y-3">
                <div className="flex items-center space-x-2 text-blue-900 font-extrabold text-sm">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>2. 학령인구 급감과 단 한 명도 놓치지 않는 맞춤형 책임교육</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  학령인구가 급감하는 인구 구조 변화 속에서, 모든 학생 한 명 한 명의 잠재력을 극대화하여 사회의 핵심 인재로 육성하는 
                  <strong>공교육의 개별화 책임 교육</strong>이 국가적 과제로 대두되었습니다.
                </p>
              </div>
            </div>

            {/* 3 Stakeholders Expected Effects */}
            <div className="pt-4 border-t border-slate-100 space-y-4">
              <h3 className="text-base font-extrabold text-slate-900">
                교육 3대 주체별 기대 효과
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-2">
                  <div className="flex items-center space-x-2 text-blue-900 font-extrabold text-xs">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span>학생 (Student)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• 흥미와 적성에 부합하는 능동적 과목 선택</li>
                    <li>• 학습 동기 증진 및 자기주도적 학업 역량 신장</li>
                    <li>• 희망 대학 전공 및 미래 직업과의 밀접한 연계</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                  <div className="flex items-center space-x-2 text-indigo-900 font-extrabold text-xs">
                    <BookOpen className="w-4 h-4 text-indigo-600" />
                    <span>교사 (Teacher)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• 참여형 수업 설계 및 평가의 전문성 강화</li>
                    <li>• 획일적 지필평가에서 과정 중심 평가로의 전환</li>
                    <li>• 1:1 맞춤형 진로·학업 상담 활성화</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                  <div className="flex items-center space-x-2 text-emerald-900 font-extrabold text-xs">
                    <Building2 className="w-4 h-4 text-emerald-600" />
                    <span>학교 (School)</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• 학교 간 공동교육과정을 통한 과목 개설 한계 극복</li>
                    <li>• 지역사회 및 대학 연계 열린 학습 생태계 구축</li>
                    <li>• 교과교실제 및 미래형 학습 공간 혁신</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMENU 3: 7-STEP OPERATING PROCESS */}
      {activeMenu === 'operating_process' && (
        <div className="space-y-6 animate-fadeIn">
          {/* 7-Step Navigation Cards */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  hscredit.kr 표준 프로세스
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
                  고교학점제 7단계 운영 절차 (Lifecycle)
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">카드를 클릭하여 단계별 학생·학교 역할을 확인하세요</span>
            </div>

            {/* 7 Steps Horizontal/Grid Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {HSCREDIT_7_STEPS.map((st, idx) => {
                const isSelected = activeStep7 === idx;
                return (
                  <button
                    key={st.stepNumber}
                    onClick={() => setActiveStep7(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md border-indigo-600 ring-2 ring-indigo-500/20'
                        : 'bg-slate-50/70 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-indigo-100 text-indigo-700'} flex items-center justify-center text-xs font-black mb-1.5`}>
                      {st.stepNumber}
                    </div>
                    <div className="text-[11px] font-extrabold truncate">{st.title}</div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {st.period}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Card */}
            {HSCREDIT_7_STEPS[activeStep7] && (
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white shadow-lg border border-slate-800 space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                      {HSCREDIT_7_STEPS[activeStep7].stepNumber}단계 · {HSCREDIT_7_STEPS[activeStep7].period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2">
                      {HSCREDIT_7_STEPS[activeStep7].title}
                    </h3>
                  </div>
                  <span className="text-xs text-slate-400">
                    진행 단계 ({activeStep7 + 1} / 7)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                  {HSCREDIT_7_STEPS[activeStep7].summary}
                </p>

                {/* Core Activities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">주요 핵심 활동</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {HSCREDIT_7_STEPS[activeStep7].coreActivities.map((act, aIdx) => (
                      <div key={aIdx} className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-xs text-slate-200 flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student vs School Roles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
                  <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/50 space-y-1">
                    <span className="text-xs font-bold text-indigo-300 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1" /> 학생의 실천 활동
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {HSCREDIT_7_STEPS[activeStep7].studentRole}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-800/50 space-y-1">
                    <span className="text-xs font-bold text-sky-300 flex items-center">
                      <Building2 className="w-3.5 h-3.5 mr-1" /> 학교의 지원 역할
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {HSCREDIT_7_STEPS[activeStep7].schoolRole}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBMENU 4: 192 CREDITS & GRADUATION STANDARDS */}
      {activeMenu === 'standards' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  교육부 고시 제2022-33호 기준
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
                  192학점 이수 배당 & 졸업 요건 총정리
                </h2>
              </div>
              <button
                onClick={() => onNavigate('planner')}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center space-x-1 self-start sm:self-auto"
              >
                <span>내 192학점 점검하기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3 Key Metrics of 192 Credits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2">
                <span className="text-xs font-bold text-indigo-600 block">교과 총 이수학점</span>
                <div className="text-3xl font-black text-indigo-950">174학점</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  필수 이수학점(84학점) + 자율 이수학점(90학점)으로 구성되며, 기초교과 50%(87학점) 이하 제한 규정이 적용됩니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-2">
                <span className="text-xs font-bold text-sky-600 block">창의적 체험활동</span>
                <div className="text-3xl font-black text-sky-950">18학점</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  총 288시간으로 자율·자치활동, 동아리활동, 진로활동 3대 영역으로 개편되어 실천 중심의 역량을 함양합니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
                <span className="text-xs font-bold text-emerald-600 block">1학점 기준 수업량</span>
                <div className="text-3xl font-black text-emerald-950">16회 (50분)</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  기존 17회에서 16회로 적정화되어 3년간 총 3,072시간 수업을 이수하며, 1회분의 여유 시간을 진로학업설계 및 보충수업 주간으로 활용합니다.
                </p>
              </div>
            </div>

            {/* Two Golden Rules */}
            <div className="space-y-4 pt-2">
              <h3 className="text-base font-extrabold text-slate-900">
                192학점 이수 2대 필수 검증 규칙 (시뮬레이터 자동 판정)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center space-x-2 text-rose-700 font-extrabold text-sm">
                    <ShieldCheck className="w-4 h-4 text-rose-600" />
                    <span>규칙 1: 기초 교과 50%(87학점) 초과 편성 금지</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    국어, 수학, 영어, 한국사 교과의 총 이수학점 합계는 교과 총 이수학점(174학점)의 50%인 <strong>87학점을 초과할 수 없습니다.</strong> 
                    특정 교과 쏠림을 막고 사회·과학·정보·예술 등 균형 잡힌 학업을 보장합니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <div className="flex items-center space-x-2 text-indigo-700 font-extrabold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>규칙 2: 과목별 이수 요건 (출석률 2/3 + 성취율 40%)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    단순히 수업에 출석하는 것뿐만 아니라, 해당 과목의 학업 성취율이 40% 이상이어야 학점이 인정됩니다. 
                    미달 시 성취도 'I(미이수)'가 부여되며 보충 지도를 통해 학점을 최종 취득해야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMENU 5: MINIMUM ACHIEVEMENT GUARANTEE */}
      {activeMenu === 'min_achievement' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                공교육 책임지도 안전망
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                최소 성취수준 보장지도 3단계 시스템
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                "미이수는 낙제가 아닌 학생의 배움을 끝까지 책임지는 공교육 안전망입니다."
              </p>
            </div>

            {/* 3 Step Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {MIN_ACHIEVEMENT_PROCESS.map((step, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                        {step.phase} ({step.period})
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900">{step.title}</h3>
                    <ul className="space-y-1.5 pt-1">
                      {step.actionList.map((act, aIdx) => (
                        <li key={aIdx} className="text-xs text-slate-600 flex items-start space-x-1.5 leading-relaxed">
                          <span className="text-indigo-500 font-bold">•</span>
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/80 text-[11px] text-slate-500 italic bg-white p-2.5 rounded-xl">
                    💡 {step.systemRole}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SUBMENU 6: JOINT CURRICULUM & OUT-OF-SCHOOL */}
      {activeMenu === 'joint_outschool' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                학교의 경계를 넘는 열린 배움터
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                학교 간 공동교육과정 & 학교 밖 교육과정
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                단위 학교에서 개설하기 어려운 소인수 심화 과목을 인근 학교, 지역사회 기관 및 대학과 연계하여 수강하고 정규 학점으로 인정받습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Joint Curriculum */}
              <div className="p-6 rounded-2xl bg-indigo-50/40 border border-indigo-100 space-y-3">
                <div className="flex items-center space-x-2 text-indigo-900 font-extrabold text-sm">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  <span>1. 학교 간 공동교육과정 (온·오프라인 클러스터)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  인근 지역 고등학교들이 협력하여 거점학교에 모여 수업하는 <strong>오프라인 거점형</strong>과 
                  시·도 교육청 원격 화상 플랫폼을 활용한 <strong>실시간 쌍방향 온라인 공동교육과정</strong>으로 운영됩니다.
                </p>
                <div className="p-3 bg-white rounded-xl border border-indigo-100 text-xs text-slate-700 space-y-1">
                  <div><strong>• 개설 과목 예시:</strong> 고급 물리학, 프로그래밍 심화, 국제정치, 고급 생명과학 등</div>
                  <div><strong>• 성적 처리:</strong> 공동 평가 기준에 따라 성취평가제 적용 및 학생부 기재</div>
                </div>
              </div>

              {/* Out of School / Dual Enrollment */}
              <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100 space-y-3">
                <div className="flex items-center space-x-2 text-sky-900 font-extrabold text-sm">
                  <Building2 className="w-4 h-4 text-sky-600" />
                  <span>2. 학교 밖 교육 & 대구-대학 연계 학점선이수제 (최대 34학점)</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  교육감의 사전 승인을 받은 지역 연구소, 기업, 예술기관 및 경북대·영남대·계명대 등 지역 거점 대학의 첨단 연구실 인프라를 활용합니다.
                </p>
                <div className="p-3 bg-white rounded-xl border border-sky-100 text-xs text-slate-700 space-y-1">
                  <div><strong>• 인정 상한:</strong> 3년간 최대 34학점(교과 18학점 + 창체 16학점) 이내</div>
                  <div><strong>• Dual Enrollment:</strong> 고교 졸업 학점 인정과 동시에 향후 대학 진학 시 학점 인정 연계</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMENU 7: 2022 EVALUATION & 2028 ADMISSIONS */}
      {activeMenu === 'evaluation_2028' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                2028 대입 개편안 완벽 분석
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                2022 개정 성취평가제 & 2028 대입 연계 전략
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                내신 5등급제 개편과 융합선택 과목 절대평가 원칙에 따른 고교 과목 선택의 전략적 중요성을 확인하세요.
              </p>
            </div>

            {/* 5 Tier Grade Distribution Table */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center justify-between">
                <span>내신 5등급 체제 등급 비율표</span>
                <span className="text-xs font-medium text-slate-500">기존 9등급제 ➔ 5등급제 전환</span>
              </h3>
              <div className="grid grid-cols-5 gap-2 text-center text-xs">
                <div className="p-3 bg-indigo-600 text-white rounded-xl">
                  <div className="font-extrabold text-sm">1등급</div>
                  <div className="text-[11px] opacity-90 mt-1">상위 10%</div>
                </div>
                <div className="p-3 bg-indigo-500 text-white rounded-xl">
                  <div className="font-extrabold text-sm">2등급</div>
                  <div className="text-[11px] opacity-90 mt-1">누적 34% (+24%)</div>
                </div>
                <div className="p-3 bg-indigo-400 text-white rounded-xl">
                  <div className="font-extrabold text-sm">3등급</div>
                  <div className="text-[11px] opacity-90 mt-1">누적 66% (+32%)</div>
                </div>
                <div className="p-3 bg-slate-300 text-slate-800 rounded-xl">
                  <div className="font-extrabold text-sm">4등급</div>
                  <div className="text-[11px] mt-1">누적 90% (+24%)</div>
                </div>
                <div className="p-3 bg-slate-200 text-slate-700 rounded-xl">
                  <div className="font-extrabold text-sm">5등급</div>
                  <div className="text-[11px] mt-1">누적 100% (+10%)</div>
                </div>
              </div>
            </div>

            {/* Strategic Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  융합선택과목 절대평가(A~E) 활용법
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  융합선택과목은 석차등급을 산출하지 않고 순수 성취도(A~E)만 산출되므로, 
                  내신 등급 하락 걱정 없이 자신의 희망 전공과 관련된 깊이 있는 융합 탐구(실용 통계, 기후변화와 환경생태 등)에 과감히 도전할 수 있습니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-2">
                <h4 className="text-xs font-bold text-indigo-800 uppercase tracking-wider">
                  2028 통합형 수능과 학생부 세특의 중요성
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  2028 수능에서 심화수학(미적분Ⅱ·기하)이 제외되고 문·이과 통합형으로 출제됨에 따라, 
                  서울대·연세대·고려대 등 주요 대학은 학생부 서류평가에서 <strong>고교 이수과목 위계성과 과목별 세부능력 및 특기사항(세특)</strong>을 결정적 변수로 반영합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBMENU 8: DAEGU 5-STEP MODEL */}
      {activeMenu === 'guidance_5steps' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  대구광역시교육청 특화 모델
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
                  진로·학업 설계 5단계 지도 모델 (질문이 진로가 되는 길)
                </h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">단계별 카드를 클릭하여 세부 실천 가이드를 확인하세요</span>
            </div>

            {/* 5 Step Tab Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {stepsList5.map((st, idx) => {
                const isCurrent = activeStep5 === idx;
                return (
                  <button
                    key={st.step}
                    onClick={() => setActiveStep5(idx)}
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

            {/* Active Step Showcase */}
            {stepsList5[activeStep5] && (
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 text-white shadow-md border border-slate-800 space-y-4 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${stepsList5[activeStep5].badgeColor}`}>
                      {stepsList5[activeStep5].step} 상세 실천 가이드
                    </span>
                    <h3 className="text-xl font-extrabold text-white mt-2">
                      {stepsList5[activeStep5].title}
                    </h3>
                  </div>

                  <button
                    onClick={() => onNavigate(stepsList5[activeStep5].actionTab)}
                    className="self-start sm:self-auto px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center space-x-1.5 transition"
                  >
                    <span>{stepsList5[activeStep5].actionTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                  {stepsList5[activeStep5].bullets.map((b, i) => (
                    <div key={i} className="flex items-start space-x-2.5 p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/70">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-slate-200 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBMENU 9: FAQ */}
      {activeMenu === 'faq' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  자주 묻는 질문 (FAQ)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1.5">
                  고교학점제 궁금증 10문 10답
                </h2>
              </div>

              {/* FAQ Search */}
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="질문 검색 (예: 미이수, 무전공, 위계)..."
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:bg-white transition"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition ${
                      isOpen
                        ? 'bg-indigo-50/40 border-indigo-300 shadow-sm'
                        : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                          Q
                        </span>
                        <div>
                          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                            [{faq.category}]
                          </span>
                          <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">
                            {faq.question}
                          </h3>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-indigo-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-indigo-100/80 space-y-3 text-xs text-slate-700 animate-fadeIn">
                        <p className="leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {faq.keyPoints.map((k, kIdx) => (
                            <span
                              key={kIdx}
                              className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200/80 text-indigo-900 font-bold text-[11px]"
                            >
                              ✓ {k}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Quick Action Navigation Bar */}
      <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <h3 className="text-lg font-black text-white">
            직접 나의 3개년 192학점 학업 경로를 설계해보세요!
          </h3>
          <p className="text-xs text-slate-300">
            시뮬레이터에서 192학점 이수 요건, 기초 교과 50% 제한 규칙, 수학·과학 위계성 검증을 실시간으로 확인하고 엑셀/PDF로 저장할 수 있습니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 shrink-0">
          <button
            onClick={() => onNavigate('planner')}
            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/30 transition flex items-center space-x-1.5"
          >
            <Calendar className="w-4 h-4" />
            <span>3개년 학업계획서 열기</span>
          </button>
          <button
            onClick={() => onNavigate('subjects')}
            className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition flex items-center space-x-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>과목 사전 & 위계도</span>
          </button>
        </div>
      </div>
    </div>
  );
};
