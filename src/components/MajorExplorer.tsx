import React, { useState, useEffect } from 'react';
import { 
  Search, GraduationCap, ArrowRight, BookOpen, Sparkles, 
  CheckCircle2, RefreshCw, ExternalLink, Bookmark, PlusCircle, AlertCircle,
  Layers, Database, Building2, Briefcase, School, Filter, X
} from 'lucide-react';
import { DEPARTMENTS_DATA } from '../data/curriculumData';

interface MajorExplorerProps {
  careernetKey?: string;
  onOpenApiModal?: () => void;
  onSelectMajorForPlan?: (majorName: string, category: string) => void;
  onNavigateToSubject?: (subjectName: string) => void;
  onNavigateToJob?: (jobIdOrName: string) => void;
}

// 2022 Curriculum & High School Subject Mapping for CareerNet Majors
const inferCurriculumAndDetailsForMajor = (majorName: string, lClass: string = '') => {
  const cleanName = (majorName || '').replace(/\s+/g, '');
  const cleanL = (lClass || '').toLowerCase();

  // 1. Direct match in local curriculum knowledge
  const exact = DEPARTMENTS_DATA.find(d => 
    d.name.includes(cleanName) || cleanName.includes(d.name.replace(/\s+/g, '')) ||
    d.similarDepartments?.some(s => s.replace(/\s+/g, '').includes(cleanName) || cleanName.includes(s.replace(/\s+/g, '')))
  );

  if (exact) {
    return {
      category: exact.category,
      desc: exact.desc,
      coreSubjects: exact.coreRecommendedSubjects,
      recSubjects: exact.recommendedSubjects,
      mainCurriculum: exact.mainCurriculum,
      relatedJobs: exact.relatedJobs || [],
      certifications: exact.certifications || [],
      careerProspects: exact.careerProspects || '',
      topUniversities: exact.topUniversities || [],
      isMatched: true
    };
  }

  // 2. Domain rule mapping based on academic field keywords
  let category = '융합미래분야 계열';
  let coreSubjects: string[] = ['대수', '독서와 작문'];
  let recSubjects: string[] = ['주제 탐구 독서', '세계시민과 지리'];
  let mainCurriculum: string[] = ['전공기초개론', '학제간 융합세미나', '현장실습 및 프로젝트', '응용데이터분석'];
  let relatedJobs: string[] = ['전문연구원', '기업체 실무기획자', '공공기관 전문가'];
  let certifications: string[] = ['국가공인 전문자격증', '정보처리기사', '직무관련 공인자격'];

  if (cleanName.includes('컴퓨터') || cleanName.includes('소프트웨어') || cleanName.includes('인공지능') || cleanName.includes('AI') || cleanName.includes('정보보안') || cleanName.includes('데이터')) {
    category = '공학 계열 (SW·AI)';
    coreSubjects = ['미적분Ⅱ', '기하', '정보'];
    recSubjects = ['인공지능 수학', '확률과 통계', '물리학', '정보과학'];
    mainCurriculum = ['자료구조', '알고리즘', '인공지능개론', '컴퓨터시스템', '데이터베이스', '네트워크보안'];
    relatedJobs = ['AI 머신러닝 엔지니어', '소프트웨어 개발자', '데이터 사이언티스트', '정보보안 전문가'];
    certifications = ['정보처리기사', 'SQLD/SQLP', 'AWS/GCP 클라우드 자격증', '빅데이터분석기사'];
  } else if (cleanName.includes('전자') || cleanName.includes('전기') || cleanName.includes('반도체') || cleanName.includes('제어')) {
    category = '공학 계열 (전기·전자)';
    coreSubjects = ['물리학', '미적분Ⅱ'];
    recSubjects = ['기하', '전자기와 양자', '화학', '정보'];
    mainCurriculum = ['회로이론', '전자기학', '반도체소자공학', '신호 및 시스템', '제어공학'];
    relatedJobs = ['반도체 연구원', '임베디드 엔지니어', '회로설계 연구원', '전기설비 기술자'];
    certifications = ['전기기사', '전자기사', '무선설비기사'];
  } else if (cleanName.includes('기계') || cleanName.includes('항공') || cleanName.includes('우주') || cleanName.includes('로봇') || cleanName.includes('모빌리티') || cleanName.includes('자동차')) {
    category = '공학 계열 (기계·로봇)';
    coreSubjects = ['물리학', '미적분Ⅱ'];
    recSubjects = ['기하', '역학과 에너지', '정보', '화학'];
    mainCurriculum = ['고체역학', '열역학', '유체역학', '동역학', '로봇공학', '기계요소설계'];
    relatedJobs = ['로봇공학 연구원', '항공우주 엔지니어', '자동차 설계원', '스마트팩토리 기획자'];
    certifications = ['일반기계기사', '기계설계기사', '항공기사'];
  } else if (cleanName.includes('화학') || cleanName.includes('생명') || cleanName.includes('바이오') || cleanName.includes('신소재') || cleanName.includes('재료') || cleanName.includes('환경')) {
    category = '공학 / 자연과학 계열';
    coreSubjects = ['화학', '생명과학', '미적분Ⅰ'];
    recSubjects = ['미적분Ⅱ', '세포와 물질대사', '물질과 에너지', '기하'];
    mainCurriculum = ['유기화학', '생화학', '분자생물학', '재료열역학', '환경공학개론'];
    relatedJobs = ['바이오 연구원', '제약 연구원', '신소재 개발원', '배터리소재 엔지니어'];
    certifications = ['화학분석기사', '생물공학기사', '폐기물처리기사'];
  } else if (cleanName.includes('의예') || cleanName.includes('의학') || cleanName.includes('치의') || cleanName.includes('한의') || cleanName.includes('수의') || cleanName.includes('약학') || cleanName.includes('간호') || cleanName.includes('물리치료') || cleanName.includes('방사선') || cleanName.includes('보건') || cleanName.includes('임상')) {
    category = '의료보건 계열';
    coreSubjects = ['생명과학', '화학', '미적분Ⅰ'];
    recSubjects = ['세포와 물질대사', '생물의 유전', '물질과 에너지', '확률과 통계'];
    mainCurriculum = ['인체해부학', '생리학', '약리학', '병리학', '의료윤리', '임상실습'];
    relatedJobs = ['의사', '약사', '수의사', '간호사', '임상병리사', '보건의료 연구원'];
    certifications = ['의사/약사/간호사 국가면허', '보건의료정보관리사', '응급구조사'];
  } else if (cleanName.includes('경영') || cleanName.includes('경제') || cleanName.includes('회계') || cleanName.includes('금융') || cleanName.includes('무역') || cleanName.includes('마케팅')) {
    category = '경상 계열';
    coreSubjects = ['확률과 통계', '미적분Ⅰ', '대수'];
    recSubjects = ['경제 수학', '경제', '실용 통계', '독서와 작문', '사회와 문화'];
    mainCurriculum = ['재무회계', '마케팅관리', '미시경제학', '거시경제학', '경영정보시스템', '투자론'];
    relatedJobs = ['공인회계사(CPA)', '금융자산운용가', '경영컨설턴트', '마케터', '무역전문가'];
    certifications = ['공인회계사(CPA)', '세무사', 'CFA', '투자자산운용사', '전산세무'];
  } else if (cleanName.includes('미디어') || cleanName.includes('신문') || cleanName.includes('방송') || cleanName.includes('광고') || cleanName.includes('커뮤니케이션') || cleanName.includes('언론')) {
    category = '사회 계열 (언론·미디어)';
    coreSubjects = ['독서와 작문', '화법과 언어', '사회와 문화'];
    recSubjects = ['매체 의사소통', '문학과 영상', '현대 사회와 윤리', '정치와 법'];
    mainCurriculum = ['미디어이론', '취재보도론', '방송영상제작', '디지털스토리텔링', '광고기획론'];
    relatedJobs = ['PD/방송연출가', '기자', '콘텐츠크리에이터', '광고기획자(AE)', '홍보전문가'];
    certifications = ['사회조사분석사', '멀티미디어콘텐츠제작전문가', '무대예술전문인'];
  } else if (cleanName.includes('법') || cleanName.includes('행정') || cleanName.includes('정치') || cleanName.includes('외교') || cleanName.includes('경찰') || cleanName.includes('공공')) {
    category = '사회 계열 (법·행정)';
    coreSubjects = ['정치와 법', '독서와 작문', '사회와 문화'];
    recSubjects = ['법과 사회', '현대 사회와 윤리', '세계사', '영어 독해와 작문'];
    mainCurriculum = ['헌법학', '민법학', '행정학원론', '국제관계학', '정책학', '형법총론'];
    relatedJobs = ['변호사/법조인', '5급/7급 공무원', '경찰간부', '외교관', '공공기관 행정관'];
    certifications = ['변호사시험', '법무사', '감정평가사', '공인노무사'];
  } else if (cleanName.includes('교육') || cleanName.includes('사범') || cleanName.includes('교대') || cleanName.includes('유아') || cleanName.includes('특수교육')) {
    category = '사범 계열';
    coreSubjects = ['독서와 작문', '화법과 언어', '해당교과 심화과목'];
    recSubjects = ['교육학', '심리학', '현대 사회와 윤리', '인간 발달과 교육'];
    mainCurriculum = ['교육학개론', '교육심리학', '교육과정및교육평가', '교과교재연구및지도법', '교육실습'];
    relatedJobs = ['초·중·고 교사', '교육연구원', '학습지 및 에듀테크 기획자', '장학사'];
    certifications = ['초·중등 정교사 2급 자격증', '평생교육사', '청소년상담사'];
  } else if (cleanName.includes('디자인') || cleanName.includes('미술') || cleanName.includes('음악') || cleanName.includes('체육') || cleanName.includes('연기') || cleanName.includes('애니') || cleanName.includes('영상') || cleanName.includes('무용') || cleanName.includes('공예')) {
    category = '예체능 계열';
    coreSubjects = ['미술/음악/체육', '독서와 작문'];
    recSubjects = ['문학과 영상', '매체 의사소통', '미술 창작', '체육 탐구'];
    mainCurriculum = ['기초조형실기', '디자인사', '시각영상디자인', '공간디자인', '포트폴리오실습'];
    relatedJobs = ['UX/UI 디자이너', '게임그래픽디자이너', '음악프로듀서', '스포츠에이전트', '감독'];
    certifications = ['시각디자인기사', '컬러리스트기사', '생활스포츠지도사'];
  } else if (cleanName.includes('국어') || cleanName.includes('영어') || cleanName.includes('역사') || cleanName.includes('철학') || cleanName.includes('문학') || cleanName.includes('어문') || cleanName.includes('독어') || cleanName.includes('불어') || cleanName.includes('중어') || cleanName.includes('일어')) {
    category = '인문학 계열';
    coreSubjects = ['문학', '독서와 작문', '화법과 언어'];
    recSubjects = ['주제 탐구 독서', '세계사', '한문', '언어생활 탐구'];
    mainCurriculum = ['인문학원론', '고전문학사', '비판적사고와글쓰기', '사상사', '문화콘텐츠연구'];
    relatedJobs = ['출판편집자', '작가/스토리텔러', '인문학연구원', '문화기획자'];
    certifications = ['KBS한국어능력시험', '국어능력인증(ToKL)', '한자급수인증'];
  } else if (cleanL.includes('공학') || cleanL.includes('공과')) {
    category = '공학 계열';
    coreSubjects = ['물리학', '미적분Ⅰ', '대수'];
    recSubjects = ['미적분Ⅱ', '기하', '화학', '정보'];
  } else if (cleanL.includes('자연') || cleanL.includes('이과')) {
    category = '자연과학 계열';
    coreSubjects = ['화학', '생명과학', '물리학', '미적분Ⅰ'];
    recSubjects = ['미적분Ⅱ', '확률과 통계', '기하'];
  } else if (cleanL.includes('사회')) {
    category = '사회과학 계열';
    coreSubjects = ['사회와 문화', '정치와 법', '독서와 작문'];
    recSubjects = ['확률과 통계', '경제', '현대 사회와 윤리'];
  } else if (cleanL.includes('인문')) {
    category = '인문학 계열';
    coreSubjects = ['문학', '독서와 작문', '화법과 언어'];
    recSubjects = ['세계사', '한문', '주제 탐구 독서'];
  } else if (cleanL.includes('의학') || cleanL.includes('약학') || cleanL.includes('보건')) {
    category = '의료보건 계열';
    coreSubjects = ['생명과학', '화학', '미적분Ⅰ'];
    recSubjects = ['세포와 물질대사', '생물의 유전', '확률과 통계'];
  } else if (cleanL.includes('교육') || cleanL.includes('사범')) {
    category = '사범·교육 계열';
    coreSubjects = ['독서와 작문', '화법과 언어'];
    recSubjects = ['교육학', '심리학', '현대 사회와 윤리'];
  } else if (cleanL.includes('예체능') || cleanL.includes('예술') || cleanL.includes('체육')) {
    category = '예체능 계열';
    coreSubjects = ['음악/미술/체육', '독서와 작문'];
    recSubjects = ['문학과 영상', '매체 의사소통'];
  }

  return {
    category,
    desc: `${majorName}은(는) 2022 개정 교육과정에 맞추어 ${coreSubjects.join(', ')} 등의 탄탄한 기초 역량을 토대로 전공 심화 지식과 실무 역량을 함양하는 대한민국 대학교 전공입니다.`,
    coreSubjects,
    recSubjects,
    mainCurriculum,
    relatedJobs,
    certifications,
    careerProspects: `${relatedJobs.slice(0, 3).join(', ')} 등 첨단 산업계, 기업 연구소, 전문직 및 공공기관으로의 활발한 진출이 가능합니다.`,
    topUniversities: ['전국 주요 국공립 및 사립 4년제/전문 대학교'],
    isMatched: false
  };
};

// CareerNet Major Category Filters with preset counts
const CAREERNET_CATEGORIES = [
  { id: 'all', label: '전체 계열', count: 501 },
  { id: '공학', label: '공학계열', count: 135 },
  { id: '자연', label: '자연과학계열', count: 82 },
  { id: '의약', label: '의약·보건계열', count: 48 },
  { id: '인문', label: '인문계열', count: 64 },
  { id: '사회', label: '사회과학계열', count: 89 },
  { id: '교육', label: '교육·사범계열', count: 36 },
  { id: '예체능', label: '예체능계열', count: 47 },
];

export const MajorExplorer: React.FC<MajorExplorerProps> = ({
  careernetKey = 'dd2de89451af598c4b876f33a1de7138',
  onSelectMajorForPlan,
  onNavigateToSubject,
  onNavigateToJob
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLiveItem, setActiveLiveItem] = useState<any | null>(null);

  // Live Integrated API state (CareerNet)
  const [liveResults, setLiveResults] = useState<any[]>([]);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [liveError, setLiveError] = useState('');
  const [livePage, setLivePage] = useState(1);
  const [hasMoreLive, setHasMoreLive] = useState(false);

  // Helper to parse CareerNet raw items
  const parseCareerNetItems = (rawContent: any) => {
    if (!rawContent) return [];
    const items = Array.isArray(rawContent) ? rawContent : [rawContent];
    return items.map((i: any) => ({
      ...i,
      major: i.mClass || i.major || i.facilName || i.title || '',
      mClass: i.mClass || i.major || i.facilName || i.title || '',
      lClass: i.lClass || i.category || '대학교 학과',
      department: i.department || i.univ || i.university || '',
      summary: i.summary || i.description || '',
      source: '교육부 진로정보망',
      link: i.link || (i.majorSeq ? `https://www.career.go.kr/cnet/front/base/major/FunivMajorView.do?seq=${i.majorSeq}` : 'https://www.career.go.kr')
    }));
  };

  // Fetch Open API from CareerNet (MAJOR openAPI univ_list)
  const handleLiveSearch = async (query: string, page: number = 1, append: boolean = false) => {
    if (!append) {
      setIsLoadingLive(true);
      if (page === 1 && !query.trim()) {
        // Keep existing results during background refresh if available
      } else {
        setLiveResults([]);
      }
      setLivePage(1);
    } else {
      setIsLoadingLive(true);
    }
    setLiveError('');

    try {
      const keyParam = careernetKey ? `apiKey=${encodeURIComponent(careernetKey)}&` : '';
      
      if (!query.trim() && !append && page === 1) {
        // Initial load: Fetch all pages (1~6) in parallel to retrieve the full 501 departments at once
        const pagesToFetch = [1, 2, 3, 4, 5, 6];
        const responses = await Promise.all(
          pagesToFetch.map(p =>
            fetch(`/api/careernet/proxy?${keyParam}svcType=api&svcCode=MAJOR&gubun=univ_list&thisPage=${p}&perPage=100`)
              .then(r => (r.ok ? r.json() : null))
              .catch(() => null)
          )
        );

        let allFetched: any[] = [];
        for (const data of responses) {
          if (data?.dataSearch?.content) {
            allFetched = [...allFetched, ...parseCareerNetItems(data.dataSearch.content)];
          }
        }

        if (allFetched.length > 0) {
          // Deduplicate by majorSeq or mClass
          const seen = new Set();
          const uniqueItems = allFetched.filter(item => {
            const id = item.majorSeq || `${item.mClass}_${item.department}`;
            if (seen.has(id)) return false;
            seen.add(id);
            return true;
          });
          setLiveResults(uniqueItems);
          setHasMoreLive(false);
        } else {
          throw new Error('데이터 응답 없음');
        }
      } else {
        // Query search or specific page pagination
        const qParam = query.trim() ? `&searchTitle=${encodeURIComponent(query.trim())}` : '';
        const res = await fetch(
          `/api/careernet/proxy?${keyParam}svcType=api&svcCode=MAJOR&gubun=univ_list${qParam}&thisPage=${page}&perPage=100`
        );
        
        if (res.ok) {
          const data = await res.json();
          if (data?.dataSearch?.content) {
            const fetchedItems = parseCareerNetItems(data.dataSearch.content);
            setHasMoreLive(fetchedItems.length >= 100);
            if (append) {
              setLiveResults(prev => [...prev, ...fetchedItems]);
            } else {
              setLiveResults(fetchedItems);
            }
          }
        } else {
          throw new Error('커리어넷 API 응답 오류');
        }
      }
    } catch (err: any) {
      console.error('Live API fetch error:', err);
      setLiveError('전국 대학 학과 데이터를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoadingLive(false);
    }
  };

  // Auto trigger initial load on mount
  useEffect(() => {
    handleLiveSearch('', 1, false);
  }, []);

  // Filter live results by selected category tab
  const filteredResults = liveResults.filter(item => {
    if (selectedCategory === 'all') return true;
    const lClass = (item.lClass || '').toLowerCase();
    const mClass = (item.mClass || item.major || '').toLowerCase();
    const cat = selectedCategory.toLowerCase();

    if (cat === '공학') return lClass.includes('공학') || mClass.includes('공학') || mClass.includes('컴퓨터') || mClass.includes('소프트웨어') || mClass.includes('전자') || mClass.includes('기계') || mClass.includes('화학공학') || mClass.includes('신소재');
    if (cat === '자연') return lClass.includes('자연') || lClass.includes('이과') || mClass.includes('수학') || mClass.includes('물리') || mClass.includes('화학') || mClass.includes('생명') || mClass.includes('지구');
    if (cat === '의약') return lClass.includes('의약') || lClass.includes('의학') || lClass.includes('보건') || mClass.includes('의예') || mClass.includes('의학') || mClass.includes('간호') || mClass.includes('약학') || mClass.includes('치의') || mClass.includes('한의') || mClass.includes('수의') || mClass.includes('물리치료') || mClass.includes('임상');
    if (cat === '인문') return lClass.includes('인문') || mClass.includes('국어') || mClass.includes('영어') || mClass.includes('역사') || mClass.includes('철학') || mClass.includes('문학') || mClass.includes('언어') || mClass.includes('사학');
    if (cat === '사회') return lClass.includes('사회') || lClass.includes('상경') || lClass.includes('경영') || mClass.includes('경영') || mClass.includes('경제') || mClass.includes('행정') || mClass.includes('정치') || mClass.includes('법학') || mClass.includes('미디어') || mClass.includes('심리') || mClass.includes('사회');
    if (cat === '교육') return lClass.includes('교육') || lClass.includes('사범') || mClass.includes('교육') || mClass.includes('사범') || mClass.includes('교대');
    if (cat === '예체능') return lClass.includes('예체능') || lClass.includes('예술') || lClass.includes('체육') || mClass.includes('디자인') || mClass.includes('미술') || mClass.includes('음악') || mClass.includes('체육') || mClass.includes('무용') || mClass.includes('연기');
    
    return lClass.includes(cat) || mClass.includes(cat);
  });

  const openLiveItemModal = (item: any) => {
    const name = item.mClass || item.major || item.facilName || '전공 학과';
    const lClass = item.lClass || item.department || '';
    const inferred = inferCurriculumAndDetailsForMajor(name, lClass);
    setActiveLiveItem({ ...item, inferred });
  };

  const currentCategoryObj = CAREERNET_CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner with Education Ministry Career Net Base */}
      <div className="relative bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white overflow-hidden shadow-xl border border-indigo-800/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
            <Database className="w-3.5 h-3.5 text-indigo-300" />
            <span>교육부 진로정보망 기반 전국 대학교 학과 정보</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            전국 대학 학과 & 2022 개정 권장이수과목 탐색
          </h1>
          <p className="text-indigo-100/80 text-sm sm:text-base leading-relaxed">
            교육부 진로정보망 커리어넷 전국 대학교 501개 학과 데이터베이스를 기반으로, 희망 학과별 <strong>2022 개정 핵심 권장이수과목·대학 전공 커리큘럼·진출 직업</strong>을 확인하세요.
          </p>

          {/* Search Trigger */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLiveSearch(searchQuery, 1, false);
                  }
                }}
                placeholder="전국 학과명, 키워드 검색 (예: 컴퓨터, 반도체, 의예, 미디어, 인공지능, 경영, 간호)..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-10 py-3.5 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    handleLiveSearch('', 1, false);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <button
              onClick={() => handleLiveSearch(searchQuery, 1, false)}
              disabled={isLoadingLive}
              className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-bold flex items-center justify-center space-x-2 transition shadow-md shadow-indigo-600/30 shrink-0 cursor-pointer"
            >
              {isLoadingLive ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              <span>학과 검색</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs with Fixed Preset Counts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
            학문 계열별 학과 필터
          </span>
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
            {selectedCategory === 'all'
              ? (searchQuery ? `검색 결과 ${filteredResults.length}개 (전체 501개)` : '전체 501개 학과 표시')
              : `${currentCategoryObj?.label} (${currentCategoryObj?.count}개)`}
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          {CAREERNET_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span>{cat.label} ({cat.count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Analytics Summary Banner with '교육부 진로정보망 기반' */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="p-3.5 bg-indigo-50/70 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-indigo-700 flex items-center">
            <Database className="w-3.5 h-3.5 mr-1" /> 학과 데이터 출처
          </div>
          <div className="text-base font-black text-indigo-950">교육부 진로정보망 기반</div>
        </div>
        <div className="p-3.5 bg-emerald-50/70 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-emerald-700 flex items-center">
            <GraduationCap className="w-3.5 h-3.5 mr-1" /> 전국 대학교 학과
          </div>
          <div className="text-base font-black text-emerald-950">
            {searchQuery || selectedCategory !== 'all'
              ? `${filteredResults.length}개 표시 (전체 501개)`
              : '총 501개 학과 데이터베이스'}
          </div>
        </div>
        <div className="p-3.5 bg-amber-50/70 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-amber-700 flex items-center">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> 2022 고교학점제 과목 매핑
          </div>
          <div className="text-base font-black text-amber-950">핵심 및 일반 권장과목 자동 연계</div>
        </div>
      </div>

      {/* Main Departments Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center">
                <School className="w-5 h-5 mr-2 text-indigo-600" />
                <span>
                  {searchQuery
                    ? `전국 대학교 학과 목록 (${filteredResults.length}개 / 전체 501개)`
                    : selectedCategory !== 'all'
                    ? `전국 대학교 학과 목록 (${currentCategoryObj?.label} ${currentCategoryObj?.count}개)`
                    : `전국 대학교 학과 목록 (501개)`}
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                원하는 학과 카드를 클릭하시면 <strong>2022 핵심 권장이수과목, 대학 전공 교과목, 진출 직업, 개설 대학 목록</strong>이 상세히 안내됩니다.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleLiveSearch(searchQuery, 1, false)}
            disabled={isLoadingLive}
            className="text-xs text-indigo-700 hover:text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100 px-3.5 py-2 rounded-xl border border-indigo-200 font-bold transition flex items-center shadow-2xs self-start sm:self-auto cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isLoadingLive ? 'animate-spin' : ''}`} /> 새로고침
          </button>
        </div>

        {liveError && (
          <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 font-bold flex items-center">
            <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
            <span>{liveError}</span>
          </div>
        )}

        {isLoadingLive && liveResults.length === 0 ? (
          <div className="py-20 text-center space-y-3 bg-white rounded-3xl border border-slate-200/80">
            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
            <p className="text-sm font-bold text-slate-700">교육부 진로정보망 전국 501개 대학 학과 데이터를 동기화하고 있습니다...</p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="py-16 text-center space-y-3 bg-white rounded-3xl border border-slate-200/80 p-6">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-sm font-bold text-slate-700">조건에 맞는 학과 검색 결과가 없습니다.</p>
            <p className="text-xs text-slate-500">다른 검색어를 입력하시거나 '전체 계열 (501)' 필터를 선택해보세요.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                handleLiveSearch('', 1, false);
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-500 transition cursor-pointer"
            >
              전체 501개 학과 다시 불러오기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredResults.map((item, idx) => {
              const name = item.mClass || item.major || item.facilName || '전공 학과';
              const lClass = item.lClass || item.department || '';
              const inferred = inferCurriculumAndDetailsForMajor(name, lClass);

              return (
                <div
                  key={idx}
                  onClick={() => openLiveItemModal(item)}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-4 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-xl">
                        {item.lClass || inferred.category}
                      </span>
                      <span className="text-xs font-semibold text-indigo-600 flex items-center group-hover:translate-x-1 transition-transform">
                        상세보기 <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                        {name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {item.summary || item.description || inferred.desc}
                      </p>
                    </div>

                    {/* Quick Recommended Subject Chips */}
                    <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1.5">
                      <div className="text-[11px] font-bold text-amber-900 flex items-center">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 mr-1" />
                        2022 핵심 권장이수과목:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {inferred.coreSubjects.slice(0, 3).map((sub, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-extrabold px-2 py-0.5 rounded-lg bg-white text-amber-900 border border-amber-200 shadow-2xs"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    {item.department && (
                      <div className="text-[11px] text-slate-500 font-medium line-clamp-1 flex items-center">
                        <School className="w-3.5 h-3.5 mr-1.5 text-slate-400 shrink-0" />
                        <span className="truncate">개설: {item.department}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between gap-2 pt-1">
                      <span className="text-xs text-indigo-600 font-bold flex items-center group-hover:underline">
                        과목 이수 로드맵 열기 ↗
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectMajorForPlan?.(name, item.lClass || inferred.category);
                        }}
                        className="text-xs font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 px-3.5 py-1.5 rounded-xl border border-indigo-200 transition cursor-pointer"
                      >
                        + 계획서 담기
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Continuous '더보기' Button for CareerNet Results if needed */}
        {hasMoreLive && (
          <div className="pt-4 pb-4 flex justify-center">
            <button
              onClick={() => {
                const next = livePage + 1;
                setLivePage(next);
                handleLiveSearch(searchQuery, next, true);
              }}
              disabled={isLoadingLive}
              className="px-8 py-3.5 rounded-2xl bg-white hover:bg-indigo-50 border border-slate-300 hover:border-indigo-400 text-indigo-900 font-extrabold text-sm shadow-sm transition flex items-center space-x-2 cursor-pointer"
            >
              {isLoadingLive ? <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" /> : <PlusCircle className="w-4 h-4 text-indigo-600" />}
              <span>전국 대학교 학과 더 불러오기 (현재 {liveResults.length}개 로드됨)</span>
            </button>
          </div>
        )}
      </div>

      {/* Active Live Item Modal (Full Details with 2022 Subjects & Roadmap) */}
      {activeLiveItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {activeLiveItem.inferred?.category || activeLiveItem.lClass || '대학교 전공'}
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    교육부 진로정보망 기반
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {activeLiveItem.title || activeLiveItem.mClass || activeLiveItem.major}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  2022 개정 교육과정 고교학점제 이수 로드맵 및 대학 전공 정보
                </p>
              </div>
              <button onClick={() => setActiveLiveItem(null)} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl text-lg font-bold cursor-pointer">✕</button>
            </div>

            <div className="space-y-5 text-sm">
              {/* Major Summary */}
              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <GraduationCap className="w-4 h-4 text-indigo-600 mr-1.5" /> 학과 개요 & 소개
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {activeLiveItem.summary || activeLiveItem.description || activeLiveItem.inferred?.desc}
                </p>
              </div>

              {/* 2022 Recommended Subjects Mapping */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 space-y-2">
                  <div className="flex items-center text-xs font-extrabold text-rose-900">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mr-1.5" /> 2022 핵심 권장이수과목
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLiveItem.inferred?.coreSubjects.map((sub: string, i: number) => (
                      <button 
                        key={i} 
                        onClick={() => { 
                          setActiveLiveItem(null); 
                          onNavigateToSubject?.(sub); 
                        }} 
                        className="px-2.5 py-1 bg-white border border-rose-300 text-rose-700 text-xs font-bold rounded-xl hover:bg-rose-600 hover:text-white transition cursor-pointer shadow-2xs"
                      >
                        {sub} ↗
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-rose-700/80 mt-1">대학 입학처 및 학생부 종합평가에서 가장 중요하게 평가하는 핵심 과목입니다.</p>
                </div>

                <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100 space-y-2">
                  <div className="flex items-center text-xs font-extrabold text-indigo-900">
                    <Sparkles className="w-4 h-4 text-indigo-600 mr-1.5" /> 2022 일반 권장이수과목
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLiveItem.inferred?.recSubjects.map((sub: string, i: number) => (
                      <button 
                        key={i} 
                        onClick={() => { 
                          setActiveLiveItem(null); 
                          onNavigateToSubject?.(sub); 
                        }} 
                        className="px-2.5 py-1 bg-white border border-indigo-300 text-indigo-700 text-xs font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition cursor-pointer shadow-2xs"
                      >
                        {sub} ↗
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-indigo-700/80 mt-1">학업 역량과 지적 호기심을 넓혀주는 전공 심화 탐구 과목입니다.</p>
                </div>
              </div>

              {/* College Main Curriculum */}
              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" /> 대학 입학 후 배우는 주요 전공 교과목
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {activeLiveItem.inferred?.mainCurriculum.map((curr: string, idx: number) => (
                    <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-800 text-center">
                      {curr}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Jobs */}
              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 text-indigo-600 mr-1.5" /> 졸업 후 주요 진출 직업군
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeLiveItem.inferred?.relatedJobs.map((job: string, jIdx: number) => (
                    <button
                      key={jIdx}
                      onClick={() => {
                        setActiveLiveItem(null);
                        onNavigateToJob?.(job);
                      }}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-indigo-100 hover:text-indigo-700 text-slate-700 rounded-xl text-xs font-bold transition cursor-pointer flex items-center"
                    >
                      <span>{job}</span>
                      <ArrowRight className="w-3 h-3 ml-1 text-slate-400" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Universities info if available */}
              {activeLiveItem.department && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-xs">
                  <span className="font-bold text-slate-800 flex items-center">
                    <Building2 className="w-4 h-4 mr-1 text-indigo-600" /> 개설 대학 정보
                  </span>
                  <p className="text-slate-600 leading-relaxed">{activeLiveItem.department}</p>
                </div>
              )}

              {activeLiveItem.link && (
                <div className="pt-1">
                  <a href={activeLiveItem.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-indigo-600 font-bold hover:underline">
                    커리어넷(CareerNet) 공식 포털에서 실시간 상세 정보 더보기 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button onClick={() => setActiveLiveItem(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm cursor-pointer">닫기</button>
              <button onClick={() => { 
                onSelectMajorForPlan?.(activeLiveItem.title || activeLiveItem.mClass || activeLiveItem.major, activeLiveItem.inferred?.category || activeLiveItem.lClass || '기타'); 
                setActiveLiveItem(null); 
              }} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center cursor-pointer shadow-md shadow-indigo-600/20">
                <Bookmark className="w-4 h-4 mr-2" /> 3개년 학업계획서 담기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
