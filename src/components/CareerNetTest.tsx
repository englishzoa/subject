import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Layers, 
  Flame, 
  Info, 
  HelpCircle,
  BarChart3,
  Bookmark,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CareerNetTestProps {
  onApplyDiagnosisToPlanner: (majorCategory: string, recommendedSubjects: string[]) => void;
  onNavigateToMajor?: (majorName: string) => void;
  onNavigateToSubject?: (subjectName: string) => void;
}

export const CareerNetTest: React.FC<CareerNetTestProps> = ({
  onApplyDiagnosisToPlanner,
  onNavigateToMajor,
  onNavigateToSubject
}) => {
  const [selectedHolland1, setSelectedHolland1] = useState<string>('I');
  const [selectedHolland2, setSelectedHolland2] = useState<string>('R');
  const [selectedAptitude, setSelectedAptitude] = useState<string>('수리·논리력');
  const [selectedValue, setSelectedValue] = useState<string>('능력발휘');
  const [simResult, setSimResult] = useState<any | null>(null);

  // 커리어넷 5대 진로심리검사 안내 데이터
  const testList = [
    {
      id: 'interest_k',
      title: '직업흥미검사(K)',
      target: '고등학생',
      time: '약 25분 (96문항)',
      tag: '홀랜드 흥미유형',
      badge: '가장 추천',
      color: 'from-blue-600 to-indigo-700',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      desc: '자신이 어떤 활동, 학문, 직업 분야에 흥미와 호기심을 느끼는지 홀랜드 6개 성향(RIASEC)으로 정밀 진단합니다.',
      benefits: ['현실(R)·탐구(I)·예술(A)·사회(S)·진취(E)·관습(C) 도출', '흥미 유형별 맞춤 학과 및 직업군 매칭', '2022 개정 과목 선택의 가장 기본이 되는 지표'],
      url: 'https://www.career.go.kr/cnet/front/exam/inspctIntro.do'
    },
    {
      id: 'aptitude',
      title: '직업적성검사',
      target: '고등학생',
      time: '약 35분 (8개 영역)',
      tag: '잠재능력 & 강점',
      badge: '핵심 역량',
      color: 'from-indigo-600 to-violet-700',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      desc: '언어, 수리, 공간지각, 사물지각, 논리추리, 창의력, 손재능, 대인관계능력 등 8개 적성 영역별 나의 상대적 강점 능력을 측정합니다.',
      benefits: ['내가 남들보다 쉽고 뛰어난 성과를 낼 수 있는 적성 영역 확인', '대학 전공 수업 및 이수 교과목(수학/과학/어문 등) 적합도 판단', '고교학점제 진로선택·융합선택 과목 결정 가이드'],
      url: 'https://www.career.go.kr/cnet/front/exam/inspctIntro.do'
    },
    {
      id: 'values',
      title: '직업가치관검사',
      target: '고등학생',
      time: '약 20분 (50문항)',
      tag: '직업적 의미 & 보람',
      badge: '동기 부여',
      color: 'from-emerald-600 to-teal-700',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      desc: '능력발휘, 자율성, 보수, 안정성, 사회적 인정, 사회봉사, 자기계발 등 직업 생활에서 내가 가장 중요하게 여기는 가치관을 탐색합니다.',
      benefits: ['내가 일할 때 가장 행복과 만족감을 느끼는 기준 발견', '장기적인 진로 목표 및 대학 졸업 후 진로 경로 설정', '직업 선택 시 후회 없는 가치관 우선순위 확립'],
      url: 'https://www.career.go.kr/cnet/front/exam/inspctIntro.do'
    },
    {
      id: 'major_fit',
      title: '학과(전공) 적합도 검사',
      target: '고등학생',
      time: '약 25분 (인문/자연)',
      tag: '대학 전공 매칭',
      badge: '대입 특화',
      color: 'from-amber-600 to-orange-700',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      desc: '고등학교 주요 교과 성향 및 학문적 선호도를 바탕으로 인문사회, 어문, 공학, 자연과학, 의약, 예체능 등 최적의 대학 학과를 추천합니다.',
      benefits: ['계열 및 세부 학과별 적합도 백분위 제공', '대학 전공별 핵심 권장이수과목 확인 연계', '수시 학생부종합전형 및 전공자율선택제 대비'],
      url: 'https://www.career.go.kr/cnet/front/exam/inspctIntro.do'
    },
    {
      id: 'readiness',
      title: '진로개발준비도검사',
      target: '고등학생',
      time: '약 15분 (40문항)',
      tag: '진로 준비도 점검',
      badge: '자가 점검',
      color: 'from-purple-600 to-fuchsia-700',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      desc: '자신의 진로 계획이 얼마나 구체적인지, 진로 탐색 행동을 적극적으로 하고 있는지 진로성숙도와 준비 상태를 점검합니다.',
      benefits: ['진로 결정 확신도 및 자기효능감 수준 파악', '부족한 진로 정보 및 보완해야 할 탐구 활동 확인', '진로교사 및 AI 멘토와의 맞춤 상담 기초자료'],
      url: 'https://www.career.go.kr/cnet/front/exam/inspctIntro.do'
    }
  ];

  // 홀랜드 유형 정의
  const hollandTypes: Record<string, { name: string; tag: string; desc: string; keywords: string; icon: string }> = {
    R: { name: '현실형 (Realistic)', tag: '손재능·기술·도구', desc: '기계, 도구, 사물 다루기를 좋아하고 활동적이며 구체적인 결과물을 만드는 것을 선호합니다.', keywords: '공학, 기계, 컴퓨터, 건축, 농림', icon: '🔧' },
    I: { name: '탐구형 (Investigative)', tag: '논리·분석·학문', desc: '관찰하고 탐구하며 새로운 지식을 분석하고 이론적으로 문제 해결하는 것을 좋아합니다.', keywords: '자연과학, 수학, 의약, 연구, IT', icon: '🔬' },
    A: { name: '예술형 (Artistic)', tag: '창의·표현·독창성', desc: '자유롭고 창의적이며 틀에 얽매이지 않고 자신의 감정과 아이디어를 예술적으로 표현합니다.', keywords: '디자인, 미디어, 음악, 문학, 영상', icon: '🎨' },
    S: { name: '사회형 (Social)', tag: '공감·소통·교육', desc: '사람들과 어울리고 타인을 돕고 가르치며 상담하고 치료하는 이타적 활동을 선호합니다.', keywords: '교육, 사회복지, 보건, 심리, 상담', icon: '🤝' },
    E: { name: '진취형 (Enterprising)', tag: '리더십·경영·기획', desc: '조직 목표를 위해 타인을 이끌고 설득하며 경제적 부가가치와 혁신을 추구합니다.', keywords: '경영, 경제, 창업, 마케팅, 정책', icon: '🚀' },
    C: { name: '관습형 (Conventional)', tag: '정확·체계·자료정리', desc: '체계적인 규칙과 시스템을 바탕으로 자료를 꼼꼼히 정리하고 계산하며 관리하는 것을 좋아합니다.', keywords: '금융, 회계, 통계, 행정, 데이터관리', icon: '📊' }
  };

  const handleRunSimulation = () => {
    // 홀랜드 코드 조합 (예: IR, IE, SE, AS 등)에 따른 최적화 로드맵 계산
    const code = `${selectedHolland1}${selectedHolland2}`;
    
    let resultMeta = {
      typeName: '첨단 미래기술 & 데이터 과학 융합형',
      summary: '지적 호기심과 분석적 사고를 바탕으로 첨단 기술을 구현하고 사회 문제를 해결하는 인재상입니다.',
      majorCategory: '공학계열',
      recommendedMajors: ['컴퓨터공학과', '인공지능학과', '데이터사이언스학과', '전자전기공학부'],
      recommendedJobs: ['AI 알고리즘 엔지니어', '빅데이터 분석가', '소프트웨어 아키텍트', '로봇 제어 연구원'],
      subjects: {
        general: ['미적분Ⅰ', '확률과 통계', '독서와 작문', '물리학', '화학'],
        career: ['미적분Ⅱ', '기하', '인공지능 수학', '정보', '고급물리학'],
        fusion: ['수학과제 탐구', '로봇과 미래기술', '사회문제 탐구']
      },
      advice: '수학과 과학 교과의 깊이 있는 이수가 필수적이며, 정보 및 인공지능 관련 진로선택 과목을 적극 수강하세요.'
    };

    if (selectedHolland1 === 'I' || selectedHolland2 === 'I') {
      if (selectedHolland1 === 'S' || selectedHolland2 === 'S') {
        resultMeta = {
          typeName: '생명존중 & 보건·의약 융합 탐구형',
          summary: '자연과학적 엄밀함과 인간에 대한 깊은 공감 능력을 결합하여 인류 건강과 생명을 지키는 인재입니다.',
          majorCategory: '의약계열',
          recommendedMajors: ['의예과', '약학과', '치의예과', '생명과학과', '간호학과'],
          recommendedJobs: ['의사', '약사', '의과학 연구원', '임상시험 전문가', '바이오헬스 컨설턴트'],
          subjects: {
            general: ['화학', '생명과학', '미적분Ⅰ', '확률과 통계', '독서와 작문'],
            career: ['세포와 물질대사', '물질과 에너지', '생명공학기술', '고급화학'],
            fusion: ['과학과제 탐구', '기후변화와 환경생태', '사회문제 탐구']
          },
          advice: '화학 및 생명과학 중심의 심화 이수와 함께, 윤리적 판단력과 생명 존중 가치관을 드러내는 탐구 활동을 추천합니다.'
        };
      } else if (selectedHolland1 === 'R' || selectedHolland2 === 'R') {
        resultMeta = {
          typeName: '지능형 시스템 & 첨단 공학 혁신형',
          summary: '논리적 문제 해결력과 실질적 시스템 제작 능력을 통해 첨단 산업을 선도하는 엔지니어 인재입니다.',
          majorCategory: '공학계열',
          recommendedMajors: ['반도체시스템공학', '전자공학과', '기계공학부', '로봇공학과', '컴퓨터공학과'],
          recommendedJobs: ['반도체 설계 연구원', '자율주행 시스템 개발자', '로봇 메카트로닉스 전문가'],
          subjects: {
            general: ['물리학', '화학', '미적분Ⅰ', '확률과 통계'],
            career: ['미적분Ⅱ', '기하', '정보', '고급물리학', '전자기와 양자'],
            fusion: ['로봇과 미래기술', '수학과제 탐구', '융합과학 탐구']
          },
          advice: '물리학과 미적분Ⅱ, 기하는 주요 대학 공대의 필수 핵심 권장 과목입니다. 2~3학년에 반드시 이수 계획을 반영하세요.'
        };
      }
    } else if (selectedHolland1 === 'E' || selectedHolland2 === 'E') {
      if (selectedHolland1 === 'S' || selectedHolland2 === 'S') {
        resultMeta = {
          typeName: '사회 혁신 리더 & 미래 교육·정책 기획형',
          summary: '뛰어난 소통 능력과 리더십으로 사람들의 긍정적 변화를 이끌고 교육 및 공공 정책을 기획하는 인재입니다.',
          majorCategory: '사회과학계열',
          recommendedMajors: ['교육학과', '사범대학(각 교과)', '행정학과', '미디어커뮤니케이션학과', '경영학과'],
          recommendedJobs: ['중등교사', '에듀테크 기획자', '공공정책 연구원', '조직개발 컨설턴트'],
          subjects: {
            general: ['사회·문화', '독서와 작문', '화법과 언어', '확률과 통계', '정치와 법'],
            career: ['사회문제 탐구', '교육학', '심리학', '현대사회와 철학'],
            fusion: ['사회과제 연구', '미디어 커뮤니케이션', '인문학적 상상력']
          },
          advice: '인문사회 교과의 균형 있는 이수와 토론, 프로젝트형 융합과목(사회과제 연구, 미디어 커뮤니케이션) 수강이 매우 유리합니다.'
        };
      } else {
        resultMeta = {
          typeName: '글로벌 비즈니스 & 데이터 경영 전략가형',
          summary: '시장과 경제 흐름을 통찰하고 정량적 데이터를 바탕으로 창의적 사업 전략을 수립하는 리더형입니다.',
          majorCategory: '경영·경제계열',
          recommendedMajors: ['경영학부', '경제학과', '글로벌금융학과', '빅데이터경영학과', '통계학과'],
          recommendedJobs: ['금융 애널리스트', '경영 전략 컨설턴트', '핀테크 서비스 기획자', '데이터 마케터'],
          subjects: {
            general: ['경제', '확률과 통계', '대수', '사회·문화', '독서와 작문'],
            career: ['경제 수학', '실용 통계', '국제 관계의 이해', '정보'],
            fusion: ['사회문제 탐구', '금융과 경제생활', '사회과제 연구']
          },
          advice: '경영·경제계열은 수학(확률과 통계, 경제수학) 및 사회(경제, 사회·문화) 이수 실적을 대입에서 매우 높게 평가합니다.'
        };
      }
    } else if (selectedHolland1 === 'A' || selectedHolland2 === 'A') {
      resultMeta = {
        typeName: '디지털 크리에이티브 & 문화콘텐츠 기획형',
        summary: '독창적인 예술적 감수성과 디지털 미디어 기술을 융합하여 새로운 사용자 경험과 콘텐츠를 창조합니다.',
        majorCategory: '예체능계열',
        recommendedMajors: ['디지털미디어학과', '시각영상디자인과', '문화콘텐츠학과', '게임인터랙션학과'],
        recommendedJobs: ['UI/UX 인터랙션 디자이너', '디지털 콘텐츠 디렉터', '게임 컨셉 아티스트', '영상 크리에이터'],
        subjects: {
          general: ['미술', '음악', '독서와 작문', '화법과 언어', '사회·문화'],
          career: ['미술 창작', '영상 문화의 이해', '정보', '매체 미술'],
          fusion: ['융합 예술 탐구', '미디어 커뮤니케이션', '디자인과 미래기술']
        },
        advice: '창의적 표현 과목과 함께 정보 및 미디어 융합 과목을 함께 이수하여 디지털 콘텐츠 역량을 극대화하세요.'
      };
    }

    setSimResult(resultMeta);
    confetti({ particleCount: 70, spread: 50 });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>교육부 & 한국직업능력연구원 공식 표준화 검사 연계</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            커리어넷(CareerNet) 진로심리검사 & 과목 매칭
          </h1>
          <p className="text-indigo-100/80 text-sm sm:text-base leading-relaxed">
            나의 흥미, 적성, 가치관을 과학적으로 분석하는 커리어넷 표준화 심리검사를 실시하고, <br className="hidden sm:inline" />
            검사 결과 코드를 바탕으로 2022 개정 맞춤형 과목 로드맵과 추천 학과를 즉시 도출해보세요.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="https://www.career.go.kr/cnet/front/exam/inspctIntro.do"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center space-x-2 transition shadow-md shadow-indigo-600/30"
            >
              <span>커리어넷 공식 심리검사 바로가기 (무료)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-xs text-indigo-300">
              * 별도 회원가입 없이 비회원 간편검사도 즉시 가능합니다.
            </span>
          </div>
        </div>
      </div>

      {/* 5 Core CareerNet Psychological Tests Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center">
              <Compass className="w-6 h-6 text-indigo-600 mr-2" /> 커리어넷 고등학생 표준 진로심리검사 체계
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              검사 목적과 학년에 맞는 심리검사를 선택하여 무료로 응시할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testList.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${test.badgeColor}`}>
                    {test.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {test.time}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {test.desc}
                  </p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 space-y-1.5 text-xs text-slate-700">
                  <div className="font-bold text-slate-900 text-[11px] flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1" /> 주요 진단 혜택:
                  </div>
                  <ul className="space-y-1 pl-1">
                    {test.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="text-[11px] text-slate-600 flex items-start">
                        <span className="text-indigo-500 mr-1.5">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                  {test.target}
                </span>
                <a
                  href={test.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center group-hover:translate-x-1 transition-transform"
                >
                  검사 실시 ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Simulator: "나의 커리어넷 검사 결과 입력 & 맞춤 과목 매칭" */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs border border-indigo-200">
              결과 연계 시뮬레이터
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              나의 커리어넷 검사 결과 입력 & 2022 맞춤 과목 로드맵 도출
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            커리어넷에서 실시한 직업흥미검사(RIASEC), 적성, 직업가치관 상위 결과를 선택하면 2022 개정 최적 과목과 학과를 추천합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Holland Type 1 & 2 */}
          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
            <label className="text-xs font-extrabold text-slate-800 block">
              1. 직업흥미검사(K) 상위 흥미유형 2가지 (RIASEC)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[11px] text-slate-500 font-semibold block mb-1">1순위 흥미유형</span>
                <select
                  value={selectedHolland1}
                  onChange={(e) => setSelectedHolland1(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500"
                >
                  {Object.entries(hollandTypes).map(([k, v]) => (
                    <option key={k} value={k}>{v.icon} {v.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-semibold block mb-1">2순위 흥미유형</span>
                <select
                  value={selectedHolland2}
                  onChange={(e) => setSelectedHolland2(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500"
                >
                  {Object.entries(hollandTypes).map(([k, v]) => (
                    <option key={k} value={k}>{v.icon} {v.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-200">
              <span className="font-bold text-indigo-700">{hollandTypes[selectedHolland1]?.name}</span>: {hollandTypes[selectedHolland1]?.desc}
            </div>
          </div>

          {/* 2. Primary Aptitude */}
          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
            <label className="text-xs font-extrabold text-slate-800 block">
              2. 직업적성검사 최고 적성 영역
            </label>
            <select
              value={selectedAptitude}
              onChange={(e) => setSelectedAptitude(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="수리·논리력">🔢 수리·논리력 (수학적 계산 및 논리적 추론)</option>
              <option value="공간지각력">📐 공간지각력 (3차원 구조 이해 및 도면 설계)</option>
              <option value="언어능력">📖 언어능력 (글 이해 및 의사표현, 토론)</option>
              <option value="창의·발상력">💡 창의·발상력 (독창적인 아이디어 창출)</option>
              <option value="사물·세부지각력">🔍 사물·세부지각력 (정밀 관찰 및 오류 검증)</option>
              <option value="대인관계능력">🤝 대인관계능력 (타인 공감 및 설득, 협업)</option>
              <option value="신체·손재능">🛠️ 신체·손재능 (정교한 손동작 및 도구 제어)</option>
            </select>
            <div className="text-[11px] text-slate-500 leading-relaxed">
              * 적성 영역은 고교 학업에서 성취도가 높게 나올 가능성이 큰 과목군(자연과학, 인문학 등)과 직결됩니다.
            </div>
          </div>

          {/* 3. Core Value */}
          <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
            <label className="text-xs font-extrabold text-slate-800 block">
              3. 직업가치관 1순위 핵심 가치
            </label>
            <select
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-xs font-bold text-slate-800 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="능력발휘">✨ 능력발휘 (자신의 잠재력과 전문성을 극대화)</option>
              <option value="자율성">🕊️ 자율성 (독립적으로 주도하여 업무 수행)</option>
              <option value="사회봉사">❤️ 사회봉사 (타인의 행복과 공공의 이익 증진)</option>
              <option value="안정성">🛡️ 안정성 (지속 가능하고 예측 가능한 환경)</option>
              <option value="보수·경제적보상">💰 보수·경제적 보상 (높은 소득과 부가가치)</option>
              <option value="사회적인정">🎖️ 사회적 인정 (명예와 전문가로서의 위상)</option>
              <option value="자기계발">📚 자기계발 (지속적인 학습과 성장 기회)</option>
            </select>
            <button
              onClick={handleRunSimulation}
              className="w-full mt-2 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-extrabold text-xs shadow-md shadow-indigo-600/30 transition flex items-center justify-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>맞춤 과목 & 학과 로드맵 도출하기</span>
            </button>
          </div>
        </div>

        {/* Simulation Output Card */}
        {simResult && (
          <div className="mt-8 bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/50 rounded-3xl p-6 sm:p-8 border-2 border-indigo-300 shadow-xl space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100 pb-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-indigo-600 text-white shadow-sm">
                  진로 성향 분석 결과: {simResult.typeName}
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                  {simResult.summary}
                </h4>
              </div>
              <button
                onClick={() => onApplyDiagnosisToPlanner(simResult.recommendedMajors[0], [
                  ...simResult.subjects.general,
                  ...simResult.subjects.career,
                  ...simResult.subjects.fusion
                ])}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md flex items-center space-x-1.5 shrink-0"
              >
                <Bookmark className="w-4 h-4" />
                <span>3개년 학업계획서에 바로 담기</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              {/* Majors & Jobs */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm space-y-2">
                  <div className="text-xs font-extrabold text-indigo-900 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-1 text-indigo-600" /> 추천 대학 학과
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {simResult.recommendedMajors.map((m: string, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => onNavigateToMajor?.(m)}
                        className="px-2.5 py-1 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-600 hover:text-white transition"
                      >
                        {m} ↗
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-sm space-y-2">
                  <div className="text-xs font-extrabold text-slate-900 flex items-center">
                    <Briefcase className="w-4 h-4 mr-1 text-emerald-600" /> 미래 유망 직업군
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {simResult.recommendedJobs.map((j: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold"
                      >
                        {j}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2022 Curriculum Recommended Subjects */}
              <div className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-sm space-y-3">
                <div className="text-xs font-extrabold text-slate-900 flex items-center justify-between">
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1 text-indigo-600" /> 2022 개정 최적 추천 교과목
                  </span>
                  <span className="text-[11px] text-slate-400">보통교과 기준</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-600 block mb-1 text-[11px]">일반선택 (기초 체력)</span>
                    <div className="flex flex-wrap gap-1">
                      {simResult.subjects.general.map((sub: string, sIdx: number) => (
                        <button
                          key={sIdx}
                          onClick={() => onNavigateToSubject?.(sub)}
                          className="px-2 py-0.5 bg-slate-100 hover:bg-indigo-100 text-slate-700 hover:text-indigo-800 font-bold rounded-lg transition"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-indigo-800 block mb-1 text-[11px]">진로선택 (전공 심화)</span>
                    <div className="flex flex-wrap gap-1">
                      {simResult.subjects.career.map((sub: string, sIdx: number) => (
                        <button
                          key={sIdx}
                          onClick={() => onNavigateToSubject?.(sub)}
                          className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 hover:bg-indigo-600 hover:text-white text-indigo-700 font-bold rounded-lg transition"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-amber-800 block mb-1 text-[11px]">융합선택 (역량 확장)</span>
                    <div className="flex flex-wrap gap-1">
                      {simResult.subjects.fusion.map((sub: string, sIdx: number) => (
                        <button
                          key={sIdx}
                          onClick={() => onNavigateToSubject?.(sub)}
                          className="px-2 py-0.5 bg-amber-50 border border-amber-200 hover:bg-amber-600 hover:text-white text-amber-800 font-bold rounded-lg transition"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 bg-indigo-50/70 rounded-xl text-xs text-indigo-950 leading-relaxed font-medium">
                  💡 <strong className="font-bold">과목 선택 조언:</strong> {simResult.advice}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grade-by-Grade Career Test Strategy Guide */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <h3 className="text-xl font-extrabold">
            고등학교 3개년 학년별 진로심리검사 활용 전략
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            시기에 맞추어 커리어넷 심리검사를 체계적으로 응시하고 학생부 및 과목 선택에 연계하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
                1학년 (탐색기)
              </span>
              <span className="text-xs text-slate-400">1학기 초</span>
            </div>
            <h4 className="text-base font-extrabold text-white">직업흥미검사 & 가치관검사</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              자신의 성향과 가치관을 탐색하여 문·이과 및 희망 전공 계열(공학, 자연, 의약, 인문 등)의 큰 방향을 잡고 2학년 선택과목 수요조사에 대비합니다.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30">
                2학년 (심화기)
              </span>
              <span className="text-xs text-slate-400">수시 준비</span>
            </div>
            <h4 className="text-base font-extrabold text-white">직업적성검사 & 전공적합도</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              나의 강점 능력(수리, 공간, 언어 등)을 검증하여 3학년 진로선택·융합선택 과목을 확정하고, 학생부 세특 탐구 주제의 전문성을 높입니다.
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                3학년 (완성기)
              </span>
              <span className="text-xs text-slate-400">입시 파이널</span>
            </div>
            <h4 className="text-base font-extrabold text-white">진로개발준비도검사</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              목표 대학 및 학과에 대한 진로 확신도를 점검하고, 대입 수시 지원 전략 및 대학 입학 후 학업계획을 구체화합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
