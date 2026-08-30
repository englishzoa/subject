import React, { useState, useMemo } from 'react';
import { Subject, SubjectGroup, SubjectType } from '../types';
import { SUBJECTS_DATA } from '../data/curriculumData';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Info, 
  Sparkles, 
  X, 
  Compass, 
  ExternalLink,
  PlusCircle,
  Eye,
  CheckCircle2,
  GraduationCap,
  Network,
  TableProperties,
  ArrowDown,
  ChevronRight,
  ShieldCheck,
  Award,
  Calendar
} from 'lucide-react';

interface SubjectExplorerProps {
  initialSearchQuery?: string;
  onSelectSubjectForPlan?: (subjectId: string) => void;
  onNavigateToMajor?: (majorName: string) => void;
}

// Curriculum Hierarchy Structure for Key Subject Groups (hscredit.kr standard)
interface SubjectNode {
  id: string;
  name: string;
  type: SubjectType;
  credits: number;
  gradeLevel: '1학년' | '2~3학년' | '3학년 심화';
  desc: string;
  evalType: string;
  prereqNames?: string[];
}

interface SubjectHierarchyGroup {
  groupName: string;
  desc: string;
  iconName: string;
  common: SubjectNode[];
  general: SubjectNode[];
  career: SubjectNode[];
  convergence: SubjectNode[];
}

const HIERARCHY_DATA: SubjectHierarchyGroup[] = [
  {
    groupName: '수학 교과군',
    desc: '수학적 사고력과 문제 해결력, 공학·자연·AI 분야 핵심 기초를 단계적으로 학습하는 위계 체계',
    iconName: 'math',
    common: [
      { id: 's_math_com', name: '공통수학 1·2', type: '공통과목', credits: 8, gradeLevel: '1학년', desc: '다항식, 방정식과 부등식, 도형의 방정식, 집합과 명제, 함수', evalType: '5등급+성취도' }
    ],
    general: [
      { id: 's_math_alg', name: '대수', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '지수와 로그, 지수·로그함수, 삼각함수, 수열', evalType: '5등급+성취도', prereqNames: ['공통수학 1·2'] },
      { id: 's_math_calc1', name: '미적분Ⅰ', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '함수의 극한과 연속, 다항함수의 미분법과 적분법', evalType: '5등급+성취도', prereqNames: ['대수'] },
      { id: 's_math_prob', name: '확률과 통계', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '경우의 수, 순열과 조합, 확률의 뜻과 활용, 통계적 추정', evalType: '5등급+성취도', prereqNames: ['공통수학 1·2'] }
    ],
    career: [
      { id: 's_math_calc2', name: '미적분Ⅱ', type: '진로선택', credits: 4, gradeLevel: '3학년 심화', desc: '초월함수의 미분과 적분, 여러 가지 적분법 (자연·공학·의약 필수)', evalType: '5등급+성취도', prereqNames: ['미적분Ⅰ', '대수'] },
      { id: 's_math_geo', name: '기하', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '이차곡선, 평면벡터, 공간도형과 공간좌표', evalType: '5등급+성취도', prereqNames: ['공통수학 1·2'] },
      { id: 's_math_eco', name: '경제 수학', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '이자, 환율, 연금, 세금, 미분과 경제 현상 분석 (상경계열 추천)', evalType: '5등급+성취도', prereqNames: ['대수'] },
      { id: 's_math_ai', name: '인공지능 수학', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '벡터와 행렬, 텍스트 데이터의 수치화, 손실함수 최적화 (AI·SW 추천)', evalType: '5등급+성취도', prereqNames: ['공통수학 1·2'] }
    ],
    convergence: [
      { id: 's_math_stat', name: '실용 통계', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '공공 빅데이터 수집 및 통계 소프트웨어 활용 탐구', evalType: '성취도(A~E) 절대평가', prereqNames: ['확률과 통계'] },
      { id: 's_math_inq', name: '수학과제 탐구', type: '융합선택', credits: 4, gradeLevel: '3학년 심화', desc: '희망 전공과 연계된 수학적 모델링 소논문 및 연구 보고서', evalType: '성취도(A~E) 절대평가', prereqNames: ['대수', '미적분Ⅰ'] },
      { id: 's_math_cult', name: '수학과 문화', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '수학의 역사적 발전, 예술·건축·음악 속의 수학적 원리', evalType: '성취도(A~E) 절대평가' }
    ]
  },
  {
    groupName: '과학 교과군',
    desc: '기초 자연현상 탐구부터 분과별 심화 이론(물·화·생·지) 및 첨단 융합 과학 기술로 이어지는 위계 체계',
    iconName: 'science',
    common: [
      { id: 's_sci_com', name: '통합과학 1·2', type: '공통과목', credits: 8, gradeLevel: '1학년', desc: '물질의 규칙성, 시스템과 상호작용, 변화와 다양성, 환경과 에너지', evalType: '5등급+성취도' },
      { id: 's_sci_exp', name: '과학탐구실험 1·2', type: '공통과목', credits: 2, gradeLevel: '1학년', desc: '실험 설계, 관찰 및 측정, 데이터 분석 및 협동 탐구', evalType: '성취도(3단계 P/F)' }
    ],
    general: [
      { id: 's_sci_phy', name: '물리학', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '역학과 에너지, 물질과 전자기장, 파동과 정보 통신', evalType: '5등급+성취도', prereqNames: ['통합과학'] },
      { id: 's_sci_chem', name: '화학', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '물질의 세 가지 상태, 원자 구조와 주기율, 화학 결합, 화학 반응', evalType: '5등급+성취도', prereqNames: ['통합과학'] },
      { id: 's_sci_bio', name: '생명과학', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '생명체의 특성, 항상성과 몸의 조절, 물질대사, 세포분열과 유전', evalType: '5등급+성취도', prereqNames: ['통합과학'] },
      { id: 's_sci_earth', name: '지구과학', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '고체 지구의 변화, 대기와 해양의 상호작용, 우주의 기원과 진화', evalType: '5등급+성취도', prereqNames: ['통합과학'] }
    ],
    career: [
      { id: 's_sci_mech', name: '역학과 에너지', type: '진로선택', credits: 4, gradeLevel: '3학년 심화', desc: '뉴턴 역학 심화, 열역학 법칙, 시공간과 상대성 이론 (기계·항공·물리)', evalType: '5등급+성취도', prereqNames: ['물리학'] },
      { id: 's_sci_em', name: '전자기와 양자', type: '진로선택', credits: 4, gradeLevel: '3학년 심화', desc: '전기장과 자기장, 반도체 물성, 광전효과와 양자역학 (전자·반도체)', evalType: '5등급+성취도', prereqNames: ['물리학'] },
      { id: 's_sci_chem_rx', name: '화학 반응의 세계', type: '진로선택', credits: 4, gradeLevel: '3학년 심화', desc: '화학 평형, 산-염기 반응, 전기화학과 배터리 반응 (화공·배터리)', evalType: '5등급+성취도', prereqNames: ['화학'] },
      { id: 's_sci_cell', name: '세포와 물질대사', type: '진로선택', credits: 4, gradeLevel: '3학년 심화', desc: '효소 메커니즘, 광합성과 세포호흡, 유전자 발현 조절 (의예·바이오)', evalType: '5등급+성취도', prereqNames: ['생명과학'] },
      { id: 's_sci_gene', name: '생물의 유전', type: '진로선택', credits: 4, gradeLevel: '3학년 심화', desc: 'DNA 복제와 전사, 멘델 유전 심화, 유전자 편집 크리스퍼 (의약·생명)', evalType: '5등급+성취도', prereqNames: ['생명과학'] }
    ],
    convergence: [
      { id: 's_sci_inq', name: '과학과제 연구', type: '융합선택', credits: 4, gradeLevel: '3학년 심화', desc: '자연·공학·의약 주제 실험 설계 및 연구 논문 작성', evalType: '성취도(A~E) 절대평가' },
      { id: 's_sci_climate', name: '기후변화와 환경생태', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '탄소중립, 신재생에너지 시스템, 생태계 보전 융합 탐구', evalType: '성취도(A~E) 절대평가' },
      { id: 's_sci_hist', name: '과학사 및 과학철학', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '과학 혁명과 인류 문명의 패러다임 변화 탐구', evalType: '성취도(A~E) 절대평가' }
    ]
  },
  {
    groupName: '국어 교과군',
    desc: '기초 의사소통 및 문해력에서 학술적 비판적 독해와 논리적 글쓰기, 전문 직무 의사소통으로 심화',
    iconName: 'korean',
    common: [
      { id: 's_kor_com', name: '공통국어 1·2', type: '공통과목', credits: 8, gradeLevel: '1학년', desc: '듣기·말하기, 읽기, 쓰기, 문법, 문학의 기초 소양', evalType: '5등급+성취도' }
    ],
    general: [
      { id: 's_kor_speech', name: '화법과 언어', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '담화 구성, 설득과 협상, 국어 문법 체계 탐구', evalType: '5등급+성취도', prereqNames: ['공통국어 1·2'] },
      { id: 's_kor_read', name: '독서와 작문', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '학술적 비판적 독해, 논증 분석, 논리적 보고서 글쓰기', evalType: '5등급+성취도', prereqNames: ['공통국어 1·2'] },
      { id: 's_kor_lit', name: '문학', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '고전·현대 문학 감상, 서사 분석 및 창의적 비평', evalType: '5등급+성취도', prereqNames: ['공통국어 1·2'] }
    ],
    career: [
      { id: 's_kor_theme', name: '주제 탐구 독서', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '희망 전공별 전문 학술 텍스트 심층 탐독 및 분석', evalType: '5등급+성취도', prereqNames: ['독서와 작문'] },
      { id: 's_kor_media_lit', name: '문학과 영상', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '소설·희곡의 영상 각색, 미디어 스토리텔링 분석', evalType: '5등급+성취도', prereqNames: ['문학'] },
      { id: 's_kor_job_comm', name: '직무 의사소통', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '비즈니스 공문서 작성, 기획서 프레젠테이션', evalType: '5등급+성취도' }
    ],
    convergence: [
      { id: 's_kor_debate', name: '독서 토론과 글쓰기', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '쟁점 도서 중심 패널 토론 및 에세이 저작', evalType: '성취도(A~E) 절대평가' },
      { id: 's_kor_media_comm', name: '매체 의사소통', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '디지털 미디어 리터러시, 콘텐츠 큐레이션 및 팩트체크', evalType: '성취도(A~E) 절대평가' }
    ]
  },
  {
    groupName: '사회(역사/도덕) 교과군',
    desc: '통합사회와 한국사 기초를 토대로 인문·사회과학적 통찰과 글로벌 시민 역량을 기르는 체계',
    iconName: 'social',
    common: [
      { id: 's_soc_com', name: '통합사회 1·2', type: '공통과목', credits: 8, gradeLevel: '1학년', desc: '인간·사회·환경·행복, 정의와 인권, 시장과 금융, 지속가능성', evalType: '5등급+성취도' },
      { id: 's_his_com', name: '한국사 1·2', type: '공통과목', credits: 6, gradeLevel: '1학년', desc: '선사부터 현대까지 한국사의 핵심 흐름과 역사적 정체성', evalType: '5등급+성취도' }
    ],
    general: [
      { id: 's_soc_world_geo', name: '세계지리', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '지구적 기후·문화권, 자원 갈등과 글로벌 네트워크', evalType: '5등급+성취도' },
      { id: 's_soc_world_his', name: '세계사', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '문명의 발생, 동서 교류사, 근현대 세계 질서의 재편', evalType: '5등급+성취도' },
      { id: 's_soc_econ', name: '경제', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '시장 가격 결정, 거시경제 지표, 무역과 금융 정책', evalType: '5등급+성취도' },
      { id: 's_soc_pol', name: '정치', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '민주주의 제도, 헌법 기관, 선거와 국제정치 역학', evalType: '5등급+성취도' },
      { id: 's_soc_law', name: '법과 사회', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '민법·형법 기본 원리, 권리 구제 절차와 사법 정의', evalType: '5등급+성취도' },
      { id: 's_soc_eth', name: '현대사회와 윤리', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '응용윤리, 생명·환경 윤리, 과학기술 및 AI 윤리', evalType: '5등급+성취도' }
    ],
    career: [
      { id: 's_soc_soc_inq', name: '사회문제 탐구', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '사회 양극화, 저출생·고령화 등 현안 프로젝트 조사 연구', evalType: '5등급+성취도' },
      { id: 's_soc_fin', name: '금융과 경제생활', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '자산 관리, 신용과 부채, 생애주기별 재무 설계', evalType: '5등급+성취도', prereqNames: ['경제'] },
      { id: 's_soc_global_eth', name: '윤리문제 탐구', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '글로벌 분쟁, 인공지능 자율주행 알고리즘 딜레마', evalType: '5등급+성취도' }
    ],
    convergence: [
      { id: 's_soc_travel_geo', name: '여행지리', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '지리적 경관과 생태관광, 지역 재생 스토리텔링', evalType: '성취도(A~E) 절대평가' },
      { id: 's_soc_hist_media', name: '역사로 탐구하는 현대 세계', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '현대 국제 분쟁의 역사적 맥락과 평화 구축 방안', evalType: '성취도(A~E) 절대평가' }
    ]
  },
  {
    groupName: '기술·가정 / 정보 교과군',
    desc: '소프트웨어, 인공지능, 공학 설계 및 로봇 시스템으로 이어지는 미래 디지털 신기술 이수 체계',
    iconName: 'tech',
    common: [],
    general: [
      { id: 's_inf_info', name: '정보', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '컴퓨팅 사고력, 알고리즘과 파이썬 프로그래밍, 데이터 표현', evalType: '5등급+성취도' },
      { id: 's_tech_tg', name: '기술·가정', type: '일반선택', credits: 4, gradeLevel: '2~3학년', desc: '기술 시스템과 발명, 가족생활과 소비생활', evalType: '5등급+성취도' }
    ],
    career: [
      { id: 's_inf_ai', name: '인공지능 기초', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '머신러닝·딥러닝 모델 실습, 지도·비지도학습, AI 사회적 영향', evalType: '5등급+성취도', prereqNames: ['정보'] },
      { id: 's_inf_data', name: '데이터 과학', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '데이터 수집(크롤링), EDA 시각화, 통계 예측 모델링', evalType: '5등급+성취도', prereqNames: ['정보'] },
      { id: 's_tech_eng_design', name: '창의 공학 설계', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '3D 모델링, 아두이노/임베디드 시제품 제작 프로젝트', evalType: '5등급+성취도' },
      { id: 's_tech_robot', name: '로봇과 공학세계', type: '진로선택', credits: 4, gradeLevel: '2~3학년', desc: '로봇 센서 제어, 자율주행 모빌리티 구동 메커니즘', evalType: '5등급+성취도' }
    ],
    convergence: [
      { id: 's_inf_sw_prj', name: '소프트웨어와 생활', type: '융합선택', credits: 4, gradeLevel: '2~3학년', desc: '사회 문제 해결형 앱·웹 프로토타입 소프트웨어 개발', evalType: '성취도(A~E) 절대평가', prereqNames: ['정보'] }
    ]
  }
];

export const SubjectExplorer: React.FC<SubjectExplorerProps> = ({
  initialSearchQuery = '',
  onSelectSubjectForPlan,
  onNavigateToMajor
}) => {
  const [activeTabMode, setActiveTabMode] = useState<'cards' | 'hierarchy' | 'standards'>('cards');
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeHierarchyGroup, setActiveHierarchyGroup] = useState<string>('수학 교과군');
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(12);

  const groups: Array<{ id: string; label: string }> = [
    { id: 'all', label: '교과군 전체' },
    { id: '국어', label: '국어' },
    { id: '수학', label: '수학' },
    { id: '영어', label: '영어' },
    { id: '한국사', label: '한국사' },
    { id: '사회', label: '사회' },
    { id: '과학', label: '과학' },
    { id: '기술·가정/정보', label: '기술·가정/정보' },
    { id: '제2외국어/한문', label: '제2외국어/한문' },
    { id: '체육/예술', label: '체육/예술' },
    { id: '교양', label: '교양' },
  ];

  const types: Array<{ id: string; label: string }> = [
    { id: 'all', label: '전체 선택구분' },
    { id: '공통과목', label: '공통과목' },
    { id: '일반선택', label: '일반선택' },
    { id: '진로선택', label: '진로선택' },
    { id: '융합선택', label: '융합선택' },
  ];

  const filteredSubjects = useMemo(() => {
    return SUBJECTS_DATA.filter((sub) => {
      const matchGroup = selectedGroup === 'all' || sub.group === selectedGroup;
      const matchType = selectedType === 'all' || sub.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        sub.name.toLowerCase().includes(q) ||
        sub.desc.toLowerCase().includes(q) ||
        sub.coreConcepts.some((c) => c.toLowerCase().includes(q)) ||
        sub.relatedFields.some((f) => f.toLowerCase().includes(q));

      return matchGroup && matchType && matchQuery;
    });
  }, [searchQuery, selectedGroup, selectedType]);

  const displayedSubjects = filteredSubjects.slice(0, displayCount);

  const getTypeBadge = (type: SubjectType) => {
    switch (type) {
      case '공통과목':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case '일반선택':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case '진로선택':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case '융합선택':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getSubjectById = (id: string) => SUBJECTS_DATA.find((s) => s.id === id);

  const openSubjectModalByNameOrId = (nameOrId: string) => {
    const found = SUBJECTS_DATA.find(s => s.id === nameOrId || s.name === nameOrId || s.name.includes(nameOrId));
    if (found) {
      setActiveSubject(found);
    }
  };

  const currentHierarchy = HIERARCHY_DATA.find(h => h.groupName === activeHierarchyGroup) || HIERARCHY_DATA[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner with KEDI hscredit.kr Integration */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" />
                2022 개정 교육과정 · 2028 대입 개편 고교학점제
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                한국교육개발원(hscredit.kr) 보통교과 연계
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              고교학점제 과목 선택 백과 & 위계도
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              공통과목부터 일반선택, 진로선택, 융합선택까지 <strong>총 {SUBJECTS_DATA.length}개 보통교과</strong>의 내용 체계, 
              평가 방식(5등급 상대평가 / 융합선택 절대평가), 과목 간 선수과목 위계도 및 대학 전공 연계성을 한눈에 탐색하세요.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
            <a
              href="https://www.hscredit.kr/curriculum/subjects"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white border border-indigo-300/30 text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-sm"
            >
              <span>고교학점제 포털(hscredit.kr) 원문</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setActiveTabMode('hierarchy')}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center justify-center space-x-1.5 shadow-md shadow-indigo-600/30"
            >
              <Network className="w-3.5 h-3.5" />
              <span>과목 이수 계통도(위계도) 보기</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main View Mode Selector */}
      <div className="flex items-center justify-between bg-white rounded-2xl p-2 border border-slate-200/80 shadow-sm overflow-x-auto">
        <div className="flex items-center space-x-2 min-w-max">
          <button
            onClick={() => setActiveTabMode('cards')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
              activeTabMode === 'cards'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>전체 과목 사전 탐색 ({filteredSubjects.length})</span>
          </button>
          <button
            onClick={() => setActiveTabMode('hierarchy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
              activeTabMode === 'hierarchy'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>교과군별 과목 위계도 & 계통도 Map</span>
          </button>
          <button
            onClick={() => setActiveTabMode('standards')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
              activeTabMode === 'standards'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TableProperties className="w-4 h-4" />
            <span>2022 개정 192학점 이수 편성 기준표</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: CARDS SEARCH VIEW */}
      {activeTabMode === 'cards' && (
        <div className="space-y-6">
          {/* Filter Controls */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">
                  교과목 맞춤 검색 및 필터
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  교과군(국·수·영·사·과 등) 및 선택구분(공통·일반·진로·융합)별로 과목을 신속하게 조회하세요.
                </p>
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="과목명, 핵심 개념, 전공 계열 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filter Chips */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              {/* Group Chips */}
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="text-xs font-bold text-slate-400 mr-1 flex items-center">
                  <Filter className="w-3 h-3 mr-1" /> 교과군 ({groups.length - 1}개):
                </span>
                {groups.map((g) => {
                  const count = g.id === 'all' 
                    ? SUBJECTS_DATA.length 
                    : SUBJECTS_DATA.filter(s => s.group === g.id).length;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setSelectedGroup(g.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1 ${
                        selectedGroup === g.id
                          ? 'bg-slate-900 text-white shadow-sm'
                          : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                      }`}
                    >
                      <span>{g.label}</span>
                      <span className={`text-[10px] ml-1 px-1.5 py-0.2 rounded-full ${selectedGroup === g.id ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Type Chips */}
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="text-xs font-bold text-slate-400 mr-1">선택구분:</span>
                {types.map((t) => {
                  const count = t.id === 'all' 
                    ? SUBJECTS_DATA.length 
                    : SUBJECTS_DATA.filter(s => s.type === t.id).length;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedType(t.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1 ${
                        selectedType === t.id
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                      }`}
                    >
                      <span>{t.label}</span>
                      <span className={`text-[10px] ml-1 px-1.5 py-0.2 rounded-full ${selectedType === t.id ? 'bg-indigo-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center px-1 text-xs text-slate-500 font-medium">
            <span className="text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
              검색된 전체 과목: {filteredSubjects.length}개 중 {displayedSubjects.length}개 표시
            </span>
            <span>카드 클릭 시 성취평가제, 위계도 및 세특 탐구 팁 확인</span>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedSubjects.map((subject) => {
              return (
                <div
                  key={subject.id}
                  onClick={() => setActiveSubject(subject)}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          {subject.group}
                        </span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${getTypeBadge(subject.type)}`}>
                          {subject.type}
                        </span>
                      </div>
                      <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
                        {subject.credits}학점
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                        {subject.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {subject.desc}
                      </p>
                    </div>

                    {/* Core concepts */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {subject.coreConcepts.slice(0, 3).map((concept, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-600 font-medium"
                        >
                          #{concept}
                        </span>
                      ))}
                      {subject.coreConcepts.length > 3 && (
                        <span className="text-[11px] px-1.5 py-0.5 text-slate-400 font-medium">
                          +{subject.coreConcepts.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[11px] truncate max-w-[170px]">
                      연계: {subject.relatedFields.slice(0, 2).join(', ')}
                    </span>
                    <span className="font-bold text-indigo-600 group-hover:translate-x-1 transition flex items-center">
                      상세보기 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {filteredSubjects.length > displayCount && (
            <div className="flex justify-center pt-4 pb-2">
              <button
                onClick={() => setDisplayCount((prev) => prev + 12)}
                className="px-6 py-3 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-extrabold text-xs shadow-sm transition"
              >
                과목 12개 더보기 ({displayedSubjects.length} / {filteredSubjects.length})
              </button>
            </div>
          )}

          {filteredSubjects.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-base font-bold text-slate-700">검색된 과목이 없습니다.</h3>
              <p className="text-xs text-slate-500">검색어를 변경하거나 필터를 초기화해보세요.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGroup('all');
                  setSelectedType('all');
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
              >
                필터 초기화
              </button>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: HIERARCHY & FLOWCHART MAP */}
      {activeTabMode === 'hierarchy' && (
        <div className="space-y-6">
          {/* Group Tab Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {HIERARCHY_DATA.map((h) => (
              <button
                key={h.groupName}
                onClick={() => setActiveHierarchyGroup(h.groupName)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition flex items-center space-x-2 shrink-0 ${
                  activeHierarchyGroup === h.groupName
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>{h.groupName}</span>
              </button>
            ))}
          </div>

          {/* Group Overview Banner */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                2022 개정 과목 이수 위계도 (KEDI 표준)
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentHierarchy.groupName} 계통도
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentHierarchy.desc}
            </p>
          </div>

          {/* 4-Step Interactive Hierarchy Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
            {/* Step 1: 공통과목 */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">1단계 (1학년)</span>
                  <h3 className="text-sm font-extrabold text-slate-900">공통과목 (기초)</h3>
                </div>
                <span className="text-xs font-extrabold px-2 py-0.5 bg-blue-100 text-blue-800 rounded-lg">
                  필수 이수
                </span>
              </div>

              <div className="space-y-3">
                {currentHierarchy.common.length > 0 ? (
                  currentHierarchy.common.map((node) => (
                    <div
                      key={node.id}
                      onClick={() => openSubjectModalByNameOrId(node.name)}
                      className="bg-white p-4 rounded-2xl border border-blue-200 shadow-sm hover:border-blue-500 hover:shadow-md transition cursor-pointer space-y-2"
                    >
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-extrabold text-slate-900">{node.name}</h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                          {node.credits}학점
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {node.desc}
                      </p>
                      <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500">
                        <span>평가: {node.evalType}</span>
                        <span className="text-indigo-600 font-bold flex items-center">
                          상세보기 <ArrowRight className="w-3 h-3 ml-0.5" />
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                    해당 교과군은 1학년 공통과목 없이 2~3학년 선택과목으로 개설됩니다.
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: 일반선택 */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">2단계 (2~3학년)</span>
                  <h3 className="text-sm font-extrabold text-slate-900">일반선택 (기본소양)</h3>
                </div>
                <span className="text-xs font-extrabold px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-lg">
                  수능/내신
                </span>
              </div>

              <div className="space-y-3">
                {currentHierarchy.general.map((node) => (
                  <div
                    key={node.id}
                    onClick={() => openSubjectModalByNameOrId(node.name)}
                    className="bg-white p-4 rounded-2xl border border-indigo-200 shadow-sm hover:border-indigo-500 hover:shadow-md transition cursor-pointer space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-extrabold text-slate-900">{node.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-200">
                        {node.credits}학점
                      </span>
                    </div>
                    {node.prereqNames && (
                      <div className="flex items-center text-[10px] text-rose-600 font-bold">
                        <span>선수: {node.prereqNames.join(', ')}</span>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {node.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500">
                      <span>{node.evalType}</span>
                      <span className="text-indigo-600 font-bold flex items-center">
                        상세 <ArrowRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: 진로선택 */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider block">3단계 (2~3학년)</span>
                  <h3 className="text-sm font-extrabold text-slate-900">진로선택 (전공심화)</h3>
                </div>
                <span className="text-xs font-extrabold px-2 py-0.5 bg-purple-100 text-purple-800 rounded-lg">
                  전공연계
                </span>
              </div>

              <div className="space-y-3">
                {currentHierarchy.career.map((node) => (
                  <div
                    key={node.id}
                    onClick={() => openSubjectModalByNameOrId(node.name)}
                    className="bg-white p-4 rounded-2xl border border-purple-200 shadow-sm hover:border-purple-500 hover:shadow-md transition cursor-pointer space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-extrabold text-slate-900">{node.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-700 rounded-md border border-purple-200">
                        {node.credits}학점
                      </span>
                    </div>
                    {node.prereqNames && (
                      <div className="flex items-center text-[10px] text-rose-600 font-bold">
                        <span>선수: {node.prereqNames.join(', ')}</span>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {node.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500">
                      <span>{node.evalType}</span>
                      <span className="text-purple-600 font-bold flex items-center">
                        상세 <ArrowRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: 융합선택 */}
            <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">4단계 (2~3학년)</span>
                  <h3 className="text-sm font-extrabold text-slate-900">융합선택 (탐구·실생활)</h3>
                </div>
                <span className="text-xs font-extrabold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-lg">
                  절대평가(A~E)
                </span>
              </div>

              <div className="space-y-3">
                {currentHierarchy.convergence.map((node) => (
                  <div
                    key={node.id}
                    onClick={() => openSubjectModalByNameOrId(node.name)}
                    className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-2"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-extrabold text-slate-900">{node.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200">
                        {node.credits}학점
                      </span>
                    </div>
                    {node.prereqNames && (
                      <div className="flex items-center text-[10px] text-rose-600 font-bold">
                        <span>선수: {node.prereqNames.join(', ')}</span>
                      </div>
                    )}
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {node.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500">
                      <span className="text-emerald-700 font-bold">{node.evalType}</span>
                      <span className="text-emerald-600 font-bold flex items-center">
                        상세 <ArrowRight className="w-3 h-3 ml-0.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: 192 CREDIT CURRICULUM STANDARDS TABLE (hscredit.kr) */}
      {activeTabMode === 'standards' && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                  교육부 고시 제2022-33호 & KEDI 고교학점제 기준
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                  2022 개정 교육과정 고등학교 192학점 이수 배당 기준표
                </h2>
              </div>
              <a
                href="https://www.hscredit.kr/curriculum/subjects"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-indigo-600 hover:underline flex items-center font-bold"
              >
                hscredit.kr 원문 확인 <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Standards Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-extrabold">
                    <th className="p-3.5 rounded-tl-xl">교과 영역</th>
                    <th className="p-3.5">교과(군)</th>
                    <th className="p-3.5 text-center">공통 과목</th>
                    <th className="p-3.5 text-center">기본 학점</th>
                    <th className="p-3.5 text-center">필수 이수학점</th>
                    <th className="p-3.5 rounded-tr-xl">비고 및 편성 지침</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  <tr className="bg-indigo-50/40">
                    <td rowSpan={4} className="p-3.5 font-bold text-indigo-950 bg-indigo-50/70 border-r border-indigo-100">
                      기초 교과 영역 <br />
                      <span className="text-[10px] text-indigo-700 font-normal">(총 이수학점의 50%인 87학점 이하 편성)</span>
                    </td>
                    <td className="p-3.5 font-bold">국어</td>
                    <td className="p-3.5 text-center">공통국어 1·2 (8학점)</td>
                    <td className="p-3.5 text-center">4학점 (±1 증감)</td>
                    <td className="p-3.5 text-center font-bold text-indigo-700">10학점</td>
                    <td className="p-3.5 text-slate-500">기본 이수 후 화법과 언어, 독서와 작문, 문학 등 선택</td>
                  </tr>
                  <tr className="bg-indigo-50/40">
                    <td className="p-3.5 font-bold">수학</td>
                    <td className="p-3.5 text-center">공통수학 1·2 (8학점)</td>
                    <td className="p-3.5 text-center">4학점 (±1 증감)</td>
                    <td className="p-3.5 text-center font-bold text-indigo-700">10학점</td>
                    <td className="p-3.5 text-slate-500">기본 이수 후 대수, 미적분Ⅰ, 확률과 통계 등 선택</td>
                  </tr>
                  <tr className="bg-indigo-50/40">
                    <td className="p-3.5 font-bold">영어</td>
                    <td className="p-3.5 text-center">공통영어 1·2 (8학점)</td>
                    <td className="p-3.5 text-center">4학점 (±1 증감)</td>
                    <td className="p-3.5 text-center font-bold text-indigo-700">10학점</td>
                    <td className="p-3.5 text-slate-500">영어Ⅰ, 영어Ⅱ, 영어 독해와 작문 등 선택 연계</td>
                  </tr>
                  <tr className="bg-indigo-50/40">
                    <td className="p-3.5 font-bold">한국사</td>
                    <td className="p-3.5 text-center">한국사 1·2 (6학점)</td>
                    <td className="p-3.5 text-center">3학점 (감축 불가)</td>
                    <td className="p-3.5 text-center font-bold text-indigo-700">6학점</td>
                    <td className="p-3.5 text-slate-500">필수 이수 (한국사 1·2 총 6학점 완수 필수)</td>
                  </tr>

                  <tr className="bg-blue-50/30">
                    <td rowSpan={2} className="p-3.5 font-bold text-blue-950 bg-blue-50/60 border-r border-blue-100">
                      탐구 교과 영역
                    </td>
                    <td className="p-3.5 font-bold">사회 (역사/도덕)</td>
                    <td className="p-3.5 text-center">통합사회 1·2 (8학점)</td>
                    <td className="p-3.5 text-center">4학점 (±1 증감)</td>
                    <td className="p-3.5 text-center font-bold text-blue-700">14학점</td>
                    <td className="p-3.5 text-slate-500">세계지리, 세계사, 경제, 정치, 법과 사회, 현대사회와 윤리 등</td>
                  </tr>
                  <tr className="bg-blue-50/30">
                    <td className="p-3.5 font-bold">과학</td>
                    <td className="p-3.5 text-center">통합과학 1·2 (8학점), 과학탐구실험 1·2 (2학점)</td>
                    <td className="p-3.5 text-center">4학점 (실험 1)</td>
                    <td className="p-3.5 text-center font-bold text-blue-700">12학점</td>
                    <td className="p-3.5 text-slate-500">물리학, 화학, 생명과학, 지구과학 및 진로/융합선택 연계</td>
                  </tr>

                  <tr className="bg-amber-50/30">
                    <td rowSpan={2} className="p-3.5 font-bold text-amber-950 bg-amber-50/60 border-r border-amber-100">
                      체육·예술 교과 영역
                    </td>
                    <td className="p-3.5 font-bold">체육</td>
                    <td className="p-3.5 text-center">-</td>
                    <td className="p-3.5 text-center">3학점</td>
                    <td className="p-3.5 text-center font-bold text-amber-800">10학점</td>
                    <td className="p-3.5 text-slate-500">체육 1·2, 운동과 건강, 스포츠 생활 등 매 학기 균형 편성</td>
                  </tr>
                  <tr className="bg-amber-50/30">
                    <td className="p-3.5 font-bold">예술</td>
                    <td className="p-3.5 text-center">-</td>
                    <td className="p-3.5 text-center">3학점</td>
                    <td className="p-3.5 text-center font-bold text-amber-800">10학점</td>
                    <td className="p-3.5 text-slate-500">음악, 미술, 연극 등 문화예술 감수성 함양</td>
                  </tr>

                  <tr className="bg-emerald-50/30">
                    <td className="p-3.5 font-bold text-emerald-950 bg-emerald-50/60 border-r border-emerald-100">
                      생활·교양 교과 영역
                    </td>
                    <td className="p-3.5 font-bold">기술·가정, 정보, 제2외국어, 한문, 교양</td>
                    <td className="p-3.5 text-center">-</td>
                    <td className="p-3.5 text-center">4 / 3학점</td>
                    <td className="p-3.5 text-center font-bold text-emerald-800">16학점</td>
                    <td className="p-3.5 text-slate-500">정보, 인공지능 기초, 독일어·일본어·중국어, 한문, 심리학, 철학 등</td>
                  </tr>

                  <tr className="bg-slate-900 text-white font-extrabold">
                    <td colSpan={4} className="p-3.5 text-right font-extrabold">
                      교과 필수 이수학점 합계 / 자율 편성 학점 / 교과 총 이수학점
                    </td>
                    <td className="p-3.5 text-center font-extrabold text-amber-300">
                      필수 94학점 <br />
                      자율 80학점
                    </td>
                    <td className="p-3.5 font-extrabold text-emerald-300">
                      교과 174학점 + 창의적 체험활동 18학점 = 총 192학점
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3 Key Policies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-indigo-900 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  <span>내신 5등급제 상대평가</span>
                </div>
                <p className="text-[11px] text-indigo-950/80 leading-relaxed">
                  1등급(10%), 2등급(24%), 3등급(32%), 4등급(24%), 5등급(10%) 체제로 과도한 내신 경쟁을 완화하고 전공 적합성 평가를 강화합니다.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-emerald-900 text-xs font-bold">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>융합선택 과목 성취도 절대평가</span>
                </div>
                <p className="text-[11px] text-emerald-950/80 leading-relaxed">
                  사회 및 과학 융합선택 과목은 석차등급 산출 없이 성취도(A~E) 절대평가만 적용하여 학생의 과감한 학문적 도전과 융합 탐구를 보장합니다.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-100 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-purple-900 text-xs font-bold">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <span>최소 성취수준 보장지도</span>
                </div>
                <p className="text-[11px] text-purple-950/80 leading-relaxed">
                  과목별 수업 출석률(2/3 이상)과 학업성취율(40% 이상)을 충족해야 학점이 취득되며, 미도달 시 예방·보충 지도가 운영됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subject Detail Modal */}
      {activeSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-800 space-y-6">
            <button
              onClick={() => setActiveSubject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header in Modal */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  {activeSubject.group} 교과군
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${getTypeBadge(activeSubject.type)}`}>
                  {activeSubject.type}
                </span>
                <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md">
                  표준 {activeSubject.credits}학점
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeSubject.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeSubject.desc}
              </p>
            </div>

            {/* Evaluation & Grading info for 2022 revised */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 block">2022 개정 성취평가제 및 내신 체제</span>
                <span className="text-sm font-extrabold text-indigo-900">
                  {activeSubject.evaluationType || '석차등급(5등급) + 성취도(A~E)'}
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-bold text-slate-700">
                {activeSubject.type === '융합선택' ? '성취도(A~E) 절대평가' : '5등급제 + 성취도'}
              </span>
            </div>

            {/* Hierarchy & Prerequisites */}
            <div className="space-y-3">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center">
                <Layers className="w-4 h-4 text-indigo-600 mr-1.5" />
                이수 위계 및 선수 과목
              </h4>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                {activeSubject.prerequisites && activeSubject.prerequisites.length > 0 ? (
                  <div>
                    <span className="text-xs font-bold text-rose-600 block mb-1.5">선수 이수 권장 과목:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSubject.prerequisites.map((preId) => {
                        const pre = getSubjectById(preId);
                        return (
                          <span
                            key={preId}
                            className="px-2.5 py-1 bg-white border border-rose-200 text-rose-800 text-xs font-bold rounded-lg"
                          >
                            {pre ? pre.name : preId}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mr-1.5" />
                    선수 이수 과목 제한 없음 (공통 교육과정 이수 후 누구나 선택 가능)
                  </div>
                )}

                {activeSubject.followUpSubjects && activeSubject.followUpSubjects.length > 0 && (
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-xs font-bold text-indigo-600 block mb-1.5">후속 심화/융합 연계 과목:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSubject.followUpSubjects.map((nxtId) => {
                        const nxt = getSubjectById(nxtId);
                        return (
                          <span
                            key={nxtId}
                            className="px-2.5 py-1 bg-white border border-indigo-200 text-indigo-800 text-xs font-bold rounded-lg"
                          >
                            {nxt ? nxt.name : nxtId}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center">
                <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" />
                단원별 핵심 개념 & 성취 기준 키워드
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeSubject.coreConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold rounded-lg"
                  >
                    #{concept}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Fields */}
            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center">
                <Compass className="w-4 h-4 text-indigo-600 mr-1.5" />
                연계 추천 대학 전공 및 학과
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeSubject.relatedFields.map((field, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSubject(null);
                      onNavigateToMajor?.(field);
                    }}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg transition"
                  >
                    {field} ↗
                  </button>
                ))}
              </div>
            </div>

            {/* Student Record Inquiry Tip */}
            {activeSubject.studyTips && (
              <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-indigo-900 text-xs font-extrabold">
                  <Info className="w-4 h-4 text-indigo-600" />
                  <span>진로·학업설계 탐구 연계 팁 (학생부 세특 가이드)</span>
                </div>
                <p className="text-xs text-indigo-950/80 leading-relaxed">
                  {activeSubject.studyTips}
                </p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <a
                href="https://www.hscredit.kr/curriculum/subjects"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-500 hover:text-indigo-600 flex items-center font-medium"
              >
                hscredit.kr 과목 표준 안내 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveSubject(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-xs"
                >
                  닫기
                </button>
                {onSelectSubjectForPlan && (
                  <button
                    onClick={() => {
                      onSelectSubjectForPlan(activeSubject.id);
                      setActiveSubject(null);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-1"
                  >
                    <PlusCircle className="w-4 h-4 mr-1" />
                    <span>3개년 학업계획서에 담기</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
