import React, { useState, useEffect, useMemo } from 'react';
import { Job } from '../types';
import { JOBS_DATA, DEPARTMENTS_DATA } from '../data/curriculumData';
import { findCareerInterview, CAREERNET_INTERVIEW_LIST, CareerInterviewItem } from '../data/careerInterviewsData';
import { CareerInterviewModal } from './CareerInterviewModal';
import { 
  Search, Briefcase, TrendingUp, Sparkles, BookOpen, GraduationCap, 
  ArrowRight, ExternalLink, RefreshCw, PlusCircle, AlertCircle, Bookmark,
  Database, Layers, Award, Compass, CheckCircle2, ShieldCheck, ShieldAlert,
  Mic, User, MessageSquare, Quote
} from 'lucide-react';

interface JobExplorerProps {
  careernetKey?: string;
  work24Key?: string;
  onOpenApiModal?: () => void;
  onNavigateToMajor?: (majorName: string) => void;
  onNavigateToSubject?: (subjectName: string) => void;
  onSelectJobForPlan?: (jobName: string) => void;
}

// Smart Curriculum & Details Inference Engine for CareerNet / External Jobs
export const inferCurriculumAndDetailsForJob = (jobName: string, rawCategory: string = '', rawSummary: string = '') => {
  const cleanName = (jobName || '').replace(/\s+/g, '');
  const cleanSummary = (rawSummary || '').toLowerCase();
  const cleanCat = (rawCategory || '').toLowerCase();

  // 0. Non-Degree / Vocational Care, Skilled Craft, Manual & Construction Jobs Identification
  // 가구조립, 검사원(현장/부품), 구두미화, 수선, 미장원, 바닥재시공원, 가구제조수리원, 도배공, 타일공, 배관공, 단순노무, 간병인 등 대학 학위 및 고교 권장과목 비대상 직무 감지
  const isNonDegreeManualOrCare = 
    // 1) 가구제조·조립·검사·목공·기능 수리 및 정비
    cleanName.includes('가구') || cleanName.includes('목공') || cleanName.includes('목재') ||
    cleanName.includes('조립') || (cleanName.includes('검사원') && !cleanName.includes('특허') && !cleanName.includes('임상')) ||
    cleanName.includes('수리원') || cleanName.includes('정비원') || cleanName.includes('용접') || cleanName.includes('판금') ||
    cleanName.includes('단순조립') || cleanName.includes('조립원') || cleanName.includes('재단') || cleanName.includes('재봉') ||
    cleanName.includes('봉제') || cleanName.includes('구두') || cleanName.includes('신발수선') || cleanName.includes('수선원') ||
    cleanName.includes('가죽가공') || cleanName.includes('열처리') || cleanName.includes('주물') || cleanName.includes('단조') ||
    cleanName.includes('제책') || cleanName.includes('인쇄보조') || cleanName.includes('품질검사원') ||
    
    // 2) 건설·시공·인테리어 기능 및 단순노무
    cleanName.includes('미장') || cleanName.includes('바닥재') || cleanName.includes('도배') || cleanName.includes('장판') ||
    cleanName.includes('타일') || cleanName.includes('배관') || cleanName.includes('방수') || cleanName.includes('조적') ||
    cleanName.includes('비계') || cleanName.includes('철근') || cleanName.includes('형틀') || cleanName.includes('석공') ||
    cleanName.includes('도장') || cleanName.includes('페인트') || cleanName.includes('단열') || cleanName.includes('창호') ||
    cleanName.includes('유리공') || cleanName.includes('새시') || cleanName.includes('보일러시공') || cleanName.includes('설비시공') ||
    
    // 3) 생활돌봄·위생·보안 및 단순노무
    cleanName.includes('가사도우미') || cleanName.includes('가사관리') || cleanName.includes('간병인') || cleanName.includes('베이비시터') ||
    cleanName.includes('산후조리') || cleanName.includes('산후관리') || cleanName.includes('요양보호') || cleanName.includes('돌봄') ||
    cleanName.includes('청소') || cleanName.includes('환경미화') || cleanName.includes('미화원') || cleanName.includes('경비원') ||
    cleanName.includes('주차관리') || cleanName.includes('주차안내') || cleanName.includes('주유원') || cleanName.includes('건물관리') ||
    cleanName.includes('경비') || cleanName.includes('배달원') || cleanName.includes('택배기사') || cleanName.includes('세탁원') ||
    cleanName.includes('매표원') || cleanName.includes('주방보조') || cleanName.includes('조리보조') || cleanName.includes('식기세척') ||
    cleanName.includes('단순노무') || cleanName.includes('포장원') || cleanName.includes('하역원') || cleanName.includes('물류보조') ||
    cleanName.includes('선별원') || cleanName.includes('세차원') || cleanName.includes('룸메이드') || cleanName.includes('객실정리');

  if (isNonDegreeManualOrCare) {
    let specificCert = '국가기술자격(기능사) 또는 공인 직무연수 이수';
    let roleNature = '현장 기능 및 실무 서비스';

    if (cleanName.includes('가구') || cleanName.includes('목공') || cleanName.includes('조립') || cleanName.includes('검사원')) {
      specificCert = '가구제작기능사, 목공예기능사, 조립가공기능사, 품질경영기능사';
      roleNature = '가구 부품 정밀 조립·가공 및 완제품 품질·안전 검사';
    } else if (cleanName.includes('구두') || cleanName.includes('신발') || cleanName.includes('수선') || cleanName.includes('미화')) {
      specificCert = '제화기능사, 가죽공예기능사, 신발수선 실무 수료증';
      roleNature = '구두 및 가죽 신발 세척·광택 미화, 밑창 굽 수선 및 복원';
    } else if (cleanName.includes('미장') || cleanName.includes('바닥재') || cleanName.includes('도배') || cleanName.includes('타일') || cleanName.includes('배관') || cleanName.includes('방수')) {
      specificCert = '타일기능사, 미장기능사, 도배기능사, 배관기능사, 방수기능사';
      roleNature = '건축 및 인테리어 시공·마감 현장 실무';
    } else if (cleanName.includes('용접') || cleanName.includes('판금') || cleanName.includes('정비') || cleanName.includes('수리')) {
      specificCert = '용접기능사, 자동차정비기능사, 기계정비기능사, 전기기능사';
      roleNature = '기계 설비 제작 및 유지보수 수리';
    } else if (cleanName.includes('간병인') || cleanName.includes('요양보호')) {
      specificCert = '요양보호사 자격증, 간병인 직무교육 이수증';
      roleNature = '환자 및 어르신 일상생활 돌봄 지원';
    } else if (cleanName.includes('가사') || cleanName.includes('베이비시터') || cleanName.includes('산후조리')) {
      specificCert = '산후관리사/베이비시터 양성과정, 가사관리 직무교육 이수';
      roleNature = '가정 내 가사 및 영유아 돌봄 서비스';
    } else if (cleanName.includes('경비') || cleanName.includes('건물관리')) {
      specificCert = '일반경비원 신임교육 이수증, 시설관리 기능사';
      roleNature = '시설 안전 및 방범 관리';
    } else if (cleanName.includes('주방보조') || cleanName.includes('조리보조')) {
      specificCert = '위생교육 이수증, 조리기능사';
      roleNature = '주방 조리 지원 및 위생 관리';
    }

    const generatedDesc = rawSummary && rawSummary.trim().length > 10 
      ? rawSummary.trim()
      : `${jobName}은(는) ${roleNature}를 수행하는 전문 현장 실무 직무로, 대입을 위한 고교 교과 이수나 대학 학위보다는 국가기술자격(기능사), 직업훈련 실습 및 현장 숙련도가 핵심인 직업입니다.`;

    return {
      category: '기능직',
      futureProspects: '수요 지속 (88/100 · 현장 숙련기술 및 전문 기능 실무)',
      desc: generatedDesc,
      isNonDegree: true,
      nonDegreeNotice: '본 직업은 대학교 학위 취득 및 고교 권장이수과목 이수 대상이 아닌 [국가기술자격(기능사) 취득 및 현장 직무훈련 중심의 기능직] 직무입니다.',
      coreCompetencies: ['현장 실무 숙련도', '안전·품질 관리 의식', '성실성 및 책임감', '도구 및 장비 활용력'],
      relatedSubjects: [] as string[],
      relatedDepartments: [] as string[],
      educationLevel: '학력 무관 (국가기술자격 기능사 취득 및 직업훈련 이수 중심)',
      certifications: [specificCert, '산업안전보건교육 이수'],
      careerTips: '대입을 위한 일반계 고교 교과목 이수보다는 폴리텍/특성화고/직업전문학교 실무 훈련 및 국가공인 기능사 자격 취득을 추천합니다.',
      isMatched: false
    };
  }

  // 1. Direct match in local curated JOBS_DATA (80+ jobs)
  const exact = JOBS_DATA.find(j => 
    j.name.replace(/\s+/g, '') === cleanName ||
    cleanName.includes(j.name.replace(/\s+/g, '')) ||
    j.name.replace(/\s+/g, '').includes(cleanName)
  );

  if (exact) {
    return {
      category: exact.category,
      futureProspects: exact.futureProspects || '매우 밝음 (98/100 · 미래 신산업)',
      desc: rawSummary && rawSummary.length > exact.desc.length ? rawSummary : exact.desc,
      isNonDegree: false,
      coreCompetencies: exact.coreCompetencies,
      relatedSubjects: exact.relatedSubjects,
      relatedDepartments: exact.relatedDepartments,
      educationLevel: exact.educationLevel || '대학교 졸업 이상',
      certifications: exact.certifications || ['국가공인 전문자격', '기사 자격증'],
      careerTips: `2022 개정 교육과정에 맞추어 ${exact.relatedSubjects.slice(0, 3).join(', ')} 과목의 교과 세특과 연계하여 깊이 있는 진로 탐구 역량을 보여주세요.`,
      isMatched: true
    };
  }

  // 2. Comprehensive Domain Rule Mapping based on keywords
  // A. Agriculture, Forestry, Bio-Resources & Animal Care
  if (
    cleanName.includes('농업') || cleanName.includes('원예') || cleanName.includes('스마트팜') ||
    cleanName.includes('조경') || cleanName.includes('산림') || cleanName.includes('임업') ||
    cleanName.includes('축산') || cleanName.includes('종자') || cleanName.includes('작물') ||
    cleanName.includes('식물') || cleanName.includes('반려동물') || cleanName.includes('동물보건') ||
    cleanCat.includes('농림') || cleanCat.includes('어업')
  ) {
    return {
      category: '농림·스마트팜·바이오자원',
      futureProspects: '유망 신성장 (92/100 · 스마트농업 및 녹색생태계)',
      desc: rawSummary && rawSummary.trim().length > 10 ? rawSummary : `${jobName}은(는) 첨단 ICT 스마트기술, 생명자원 및 친환경 바이오 기술을 농축산·산림 환경에 융합하는 미래 농생명 전문가입니다.`,
      isNonDegree: false,
      coreCompetencies: ['생명자원 이해도', '스마트 ICT 제어기술', '친환경 생태 마인드', '자연과학 탐구력'],
      relatedSubjects: ['생명과학Ⅰ', '생명과학Ⅱ', '화학Ⅰ', '인공지능 기초', '생태와 환경'],
      relatedDepartments: ['농생명공학과', '스마트팜학과', '산림자원학과', '원예생명공학과', '동물자원학과'],
      educationLevel: '학사/석사 이상 (농생명공학, 스마트팜학, 산림자원학 등)',
      certifications: ['종자기사', '식물보호기사', '조경기사', '산림기사', '동물보건사'],
      careerTips: '생명과학 및 환경 교과를 바탕으로 스마트팜 센서 제어, 생명공학 융합 탐구활동을 추천합니다.',
      isMatched: false
    };
  }

  // B. Culinary, Hospitality, Tourism & Beauty Service Specialists
  if (
    cleanName.includes('조리사') || cleanName.includes('요리사') || cleanName.includes('쉐프') ||
    cleanName.includes('바리스타') || cleanName.includes('제과') || cleanName.includes('제빵') ||
    cleanName.includes('소믈리에') || cleanName.includes('호텔리어') || cleanName.includes('컨시어지') ||
    cleanName.includes('승무원') || cleanName.includes('항공서비스') || cleanName.includes('관광통역') ||
    cleanName.includes('여행안내') || cleanName.includes('투어가이드') || cleanName.includes('미용사') ||
    cleanName.includes('헤어디자이너') || cleanName.includes('메이크업') || cleanName.includes('네일아티스트') ||
    cleanName.includes('피부관리사') || cleanName.includes('웨딩플래너') || cleanName.includes('플로리스트') ||
    cleanCat.includes('조리') || cleanCat.includes('숙박') || cleanCat.includes('여행') || cleanCat.includes('미용')
  ) {
    let subList = ['사회·문화', '생활과 과학', '기술·가정', '외국어(영어/제2외국어)'];
    let deptList = ['외식조리영양학부', '호텔관광경영학과', '항공서비스학과', '뷰티디자인학과'];

    if (cleanName.includes('조리') || cleanName.includes('제과') || cleanName.includes('제빵') || cleanName.includes('요리')) {
      subList = ['식품과 영양', '생활과 과학', '화학', '기술·가정'];
      deptList = ['외식조리영양학부', '식품영양학과', '조리과학과'];
    } else if (cleanName.includes('승무원') || cleanName.includes('호텔') || cleanName.includes('관광') || cleanName.includes('여행')) {
      subList = ['심화영어', '사회·문화', '세계지리', '제2외국어'];
      deptList = ['호텔경영학과', '관광경영학과', '항공서비스학과', '국제관광학부'];
    } else if (cleanName.includes('미용') || cleanName.includes('헤어') || cleanName.includes('메이크업') || cleanName.includes('피부')) {
      subList = ['생활과 과학', '미술', '화학', '인체 구조와 기능'];
      deptList = ['뷰티아트디자인학과', '헤어미용학과', '피부미용학과'];
    }

    return {
      category: '외식·호텔·뷰티·서비스',
      futureProspects: '안정적 성장 (88/100 · K-뷰티/푸드 및 글로벌 라이프스타일)',
      desc: rawSummary && rawSummary.trim().length > 10 ? rawSummary : `${jobName}은(는) 고객 서비스, 감성 연출 및 전문 기술을 통해 고부가가치 라이프스타일 서비스를 제공하는 전문가입니다.`,
      isNonDegree: false,
      coreCompetencies: ['고객 소통 및 서비스 감각', '전문 조리/뷰티 실무 기술', '위생 및 안전관리', '창의적 연출력'],
      relatedSubjects: subList,
      relatedDepartments: deptList,
      educationLevel: '전문학사/학사 (관련 학과 및 공인 자격증)',
      certifications: ['조리기능사/산업기사', '미용사 면허증', '관광통역안내사', '바리스타 자격증', '호텔관리사'],
      careerTips: '전문 실무 역량과 함께 고객 커뮤니케이션, 글로벌 어학 역량, 융합 선택과목을 균형 있게 이수하세요.',
      isMatched: false
    };
  }

  // C. IT & AI
  let category = '인문사회·지식서비스';
  let futureProspects = '밝음 (89/100 · 인력 수요 확대)';
  let coreCompetencies = ['전문 직무 지식', '창의적 문제 해결력', '데이터 분석 및 문서화', '협업 및 커뮤니케이션'];
  let relatedSubjects = ['대수', '독서와 작문', '확률과 통계', '사회와 문화', '영어 독해와 작문'];
  let relatedDepartments = ['경영학과', '미디어커뮤니케이션학과', '자율전공학부'];
  let educationLevel = '대학교 졸업 이상';
  let certifications = ['국가공인 전문자격', '정보처리기사', '직무관련 공인자격'];
  let careerTips = '진로와 연계된 일반선택 및 진로선택 과목을 균형 있게 이수하고, 학생부 세특에 직무 관련 탐구 프로젝트를 구체적으로 기록하세요.';

  // Check categories by keyword in title/summary
  if (
    cleanName.includes('AI') || cleanName.includes('인공지능') || cleanName.includes('머신러닝') || 
    cleanName.includes('소프트웨어') || cleanName.includes('개발자') || cleanName.includes('프로그래머') || 
    cleanName.includes('데이터') || cleanName.includes('보안') || cleanName.includes('클라우드') || 
    cleanName.includes('컴퓨터') || cleanName.includes('해커') || cleanName.includes('코딩') ||
    cleanName.includes('알고리즘') || cleanName.includes('앱') || cleanName.includes('웹')
  ) {
    category = 'IT·인공지능';
    futureProspects = '매우 밝음 (98/100 · 디지털 신성장)';
    coreCompetencies = ['알고리즘 및 자료구조', '파이썬/C++/Java 프로그래밍', '머신러닝·데이터 모델링', '시스템 아키텍처 설계'];
    relatedSubjects = ['인공지능 수학', '미적분Ⅰ', '미적분Ⅱ', '기하', '정보', '데이터 과학', '확률과 통계'];
    relatedDepartments = ['인공지능공학과', '컴퓨터공학과', '소프트웨어학부', '데이터사이언스학과', '정보보안학과'];
    educationLevel = '대학교 졸업 이상 (석사 우대)';
    certifications = ['정보처리기사', 'SQLD/SQLP', 'AWS/GCP 공인 클라우드 자격', '빅데이터분석기사'];
    careerTips = '정보 교과와 인공지능 수학을 필수로 이수하고, 깃허브(GitHub)나 프로그래밍 프로젝트를 교과 세특 및 자율 동아리와 연계하세요.';
  } else if (
    cleanName.includes('반도체') || cleanName.includes('전자') || cleanName.includes('전기') || 
    cleanName.includes('회로') || cleanName.includes('디스플레이') || cleanName.includes('센서') || cleanName.includes('통신')
  ) {
    category = '전자·반도체·제조';
    futureProspects = '매우 밝음 (96/100 · 국가 첨단전략산업)';
    coreCompetencies = ['회로 설계 및 시뮬레이션', '반도체 공정 및 소자 물리학', '신호 및 시스템 분석', '실험 데이터 분석'];
    relatedSubjects = ['물리학', '미적분Ⅱ', '기하', '전자기와 양자', '화학', '정보'];
    relatedDepartments = ['반도체공학과', '전자전기공학부', '신소재공학과', '나노공학과'];
    educationLevel = '대학교 졸업 이상 (석사 우대)';
    certifications = ['전기기사', '전자기사', '반도체설계기사', '무선설비기사'];
    careerTips = '물리학과 미적분Ⅱ를 중심으로 전자기학 및 양자물리 기본 개념을 깊이 있게 탐구하고 소자 원리 보고서를 작성해보세요.';
  } else if (
    cleanName.includes('로봇') || cleanName.includes('기계') || cleanName.includes('자율주행') || 
    cleanName.includes('모빌리티') || cleanName.includes('자동차') || cleanName.includes('항공') || 
    cleanName.includes('우주') || cleanName.includes('드론') || cleanName.includes('스마트팩토리')
  ) {
    category = '로봇·모빌리티';
    futureProspects = '매우 밝음 (95/100 · 미래 이동체 혁신)';
    coreCompetencies = ['동역학 및 제어 알고리즘', 'ROS 및 로봇 임베디드 코딩', 'CAD/3D 기계 설계', '센서 융합 기술'];
    relatedSubjects = ['물리학', '미적분Ⅱ', '역학과 에너지', '기하', '정보', '기계 일반'];
    relatedDepartments = ['로봇공학과', '기계공학부', '항공우주공학과', '미래모빌리티학과', '스마트팩토리학과'];
    educationLevel = '대학교 졸업 이상';
    certifications = ['일반기계기사', '메카트로닉스기사', '기계설계기사', '항공기사'];
    careerTips = '물리 역학 단원과 미적분을 연결하여 자율주행 차량의 경로 계획이나 로봇 관절 모터 제어 원리를 탐구하세요.';
  } else if (
    cleanName.includes('의사') || cleanName.includes('의예') || cleanName.includes('약사') || 
    cleanName.includes('치과') || cleanName.includes('한의') || cleanName.includes('간호') || 
    cleanName.includes('물리치료') || cleanName.includes('임상') || cleanName.includes('방사선') || 
    cleanName.includes('보건') || cleanName.includes('병원') || cleanName.includes('의료')
  ) {
    category = '의료·보건·약학';
    futureProspects = '매우 밝음 (97/100 · 초고령화 및 정밀의료)';
    coreCompetencies = ['생명과학 및 인체생리학 심화 이해', '임상 의사소통 및 환자 공감', '약리작용 분석', '의료 윤리 및 생명존중'];
    relatedSubjects = ['생명과학', '세포와 물질대사', '화학', '물질과 에너지', '생물의 유전', '미적분Ⅰ', '확률과 통계'];
    relatedDepartments = ['의예과 (의학부)', '약학과', '치의예과', '간호학과', '한의예과', '물리치료학과'];
    educationLevel = '대학교/전문대학 졸업 이상 (국가고시 면허 필수)';
    certifications = ['의사/치과의사/한의사 국가면허', '약사 면허', '간호사 면허', '보건의료정보관리사'];
    careerTips = '생명과학과 화학 과목을 최고 수준으로 이수하고, 유전자 가위 기술이나 신약 작용 기전에 대한 주제 탐구 보고서를 추천합니다.';
  } else if (
    cleanName.includes('바이오') || cleanName.includes('신약') || cleanName.includes('유전') || 
    cleanName.includes('생명공학') || cleanName.includes('줄기세포') || cleanName.includes('면역')
  ) {
    category = '바이오·신약';
    futureProspects = '매우 밝음 (94/100 · 바이오헬스 신성장)';
    coreCompetencies = ['유전공학 및 분자생물학 분석', '세포 배양 및 정제 기술', '바이오 인포매틱스', '신약 후보물질 스크리닝'];
    relatedSubjects = ['생명과학', '화학', '세포와 물질대사', '생물의 유전', '데이터 과학', '미적분Ⅰ'];
    relatedDepartments = ['생명공학과', '바이오신약학과', '유전공학과', '응용생물화학부'];
    educationLevel = '대학교 졸업 이상 (석·박사 우대)';
    certifications = ['생물공학기사', '화학분석기사', '바이오화학제품제조기사'];
    careerTips = '생명과학 실험 및 분자 유전학적 메커니즘을 탐구하고 데이터 분석 도구를 활용한 프로젝트를 기록하세요.';
  } else if (
    cleanName.includes('화학') || cleanName.includes('신소재') || cleanName.includes('에너지') || 
    cleanName.includes('배터리') || cleanName.includes('이차전지') || cleanName.includes('환경') || 
    cleanName.includes('탄소') || cleanName.includes('재료') || cleanName.includes('태양광')
  ) {
    category = '환경·에너지·신소재';
    futureProspects = '밝음 (92/100 · 탄소중립 및 에너지전환)';
    coreCompetencies = ['재료 열역학 및 계면과학', '신재생에너지 시스템 설계', '환경영향평가', '배터리 전구체 합성 기술'];
    relatedSubjects = ['화학', '물리학', '물질과 에너지', '지구시스템과학', '미적분Ⅰ', '기하'];
    relatedDepartments = ['화학공학과', '신소재공학부', '에너지공학과', '환경시스템공학과'];
    educationLevel = '대학교 졸업 이상';
    certifications = ['화공기사', '대기/수질환경기사', '신재생에너지발전설비기사'];
    careerTips = '이차전지, 수소에너지, 친환경 생분해 플라스틱 등의 소재 혁신을 주제로 화학 교과 탐구를 진행하세요.';
  } else if (
    cleanName.includes('경영') || cleanName.includes('경제') || cleanName.includes('금융') || 
    cleanName.includes('투자') || cleanName.includes('회계') || cleanName.includes('컨설턴트') || 
    cleanName.includes('마케터') || cleanName.includes('애널리스트') || cleanName.includes('무역')
  ) {
    category = '경영·금융·컨설팅';
    futureProspects = '안정·확장 (89/100 · 데이터 기반 비즈니스)';
    coreCompetencies = ['재무제표 및 기업가치 평가', '통계적 시장 조사 및 데이터 분석', '비즈니스 전략 기획', '글로벌 무역 실무'];
    relatedSubjects = ['확률과 통계', '경제 수학', '경제', '실용 통계', '사회와 문화', '영어 독해와 작문'];
    relatedDepartments = ['경영학과', '경제학과', '금융공학과', '회계학과', '국제통상학과'];
    educationLevel = '대학교 졸업 이상';
    certifications = ['공인회계사(CPA)', '세무사', 'CFA/FRM', '투자자산운용사', '경영지도사'];
    careerTips = '경제 수학과 통계 과목에서 기업 재무 모델링 또는 행동경제학 기반 소비자 분석을 탐구하세요.';
  } else if (
    cleanName.includes('변호사') || cleanName.includes('판사') || 
    ((cleanName === '검사' || cleanName.includes('부장검사') || cleanName.includes('검찰') || cleanName.includes('검사(법조') || cleanName.includes('검사관')) && !cleanName.includes('검사원') && !cleanName.includes('조립') && !cleanName.includes('품질') && !cleanName.includes('가구') && !cleanName.includes('비파괴') && !cleanName.includes('안전검사')) ||
    cleanName.includes('법률') || cleanName.includes('행정') || cleanName.includes('경찰') || 
    cleanName.includes('외교') || cleanName.includes('공무원') || cleanName.includes('공공')
  ) {
    category = '법률·공공·외교';
    futureProspects = '안정·지속 (87/100 · 공공 가치 및 법치)';
    coreCompetencies = ['논리적 법리 해석 및 비판적 사고', '정책 수립 및 공공 갈등 조정', '국제 정세 분석', '공공 윤리 의식'];
    relatedSubjects = ['정치와 법', '독서와 작문', '현대 사회와 윤리', '사회와 문화', '세계사', '영어 의사소통'];
    relatedDepartments = ['법학과 (공공인재학부)', '행정학과', '정치외교학과', '경찰행정학과'];
    educationLevel = '대학교 졸업 이상 (로스쿨 진학 우대)';
    certifications = ['변호사시험', '공인노무사', '법무사', '감정평가사', '5급/7급 공채'];
    careerTips = '정치와 법, 현대 사회와 윤리 교과에서 인공지능 윤리 법안, 기본권 보장 관련 모의재판 탐구를 추천합니다.';
  } else if (
    cleanName.includes('기자') || cleanName.includes('PD') || cleanName.includes('방송') || 
    cleanName.includes('콘텐츠') || cleanName.includes('크리에이터') || cleanName.includes('광고') || 
    cleanName.includes('작가') || cleanName.includes('출판') || cleanName.includes('미디어')
  ) {
    category = '미디어·콘텐츠';
    futureProspects = '밝음 (90/100 · K-콘텐츠 및 디지털 크리에이티브)';
    coreCompetencies = ['디지털 영상 기획 및 연출', '스토리텔링 및 카피라이팅', '미디어 데이터 분석', '콘텐츠 제작 소프트웨어 활용'];
    relatedSubjects = ['독서와 작문', '매체 의사소통', '문학과 영상', '사회와 문화', '화법과 언어'];
    relatedDepartments = ['미디어커뮤니케이션학과', '신문방송학과', '디지털콘텐츠학과', '광고홍보학과'];
    educationLevel = '대학교 졸업 이상';
    certifications = ['사회조사분석사', '멀티미디어콘텐츠제작전문가', '무대예술전문인'];
    careerTips = '매체 의사소통 및 영상 제작 동아리 활동을 통해 자신만의 포트폴리오와 스토리텔링 역량을 입증하세요.';
  } else if (
    cleanName.includes('디자이너') || cleanName.includes('디자인') || cleanName.includes('건축') || 
    cleanName.includes('일러스트') || cleanName.includes('인테리어') || cleanName.includes('웹툰') || 
    cleanName.includes('애니') || cleanName.includes('패션') || cleanName.includes('게임그래픽')
  ) {
    category = '디자인·공간';
    futureProspects = '밝음 (91/100 · 사용자 경험(UX) 및 공간 혁신)';
    coreCompetencies = ['사용자 중심 디자인 리서치(UX)', 'Figma/3D 모델링 툴 마스터리', '공간 조형 감각', '인간공학적 시각화'];
    relatedSubjects = ['미술 창작', '조형 탐구', '문학과 영상', '기하', '정보', '인공지능 기초'];
    relatedDepartments = ['시각디자인학과', '산업디자인학과', '실내건축디자인학과', 'UX/UI디자인학과'];
    educationLevel = '대학교 졸업 이상';
    certifications = ['시각디자인기사', '컬러리스트기사', '실내건축기사', '컴퓨터그래픽스운용기능사'];
    careerTips = '미술 실기 및 디자인 씽킹(Design Thinking) 프로젝트를 진행하고 디지털 포트폴리오를 제작하세요.';
  } else if (
    cleanName.includes('교사') || cleanName.includes('교수') || cleanName.includes('연구원') || 
    cleanName.includes('상담사') || cleanName.includes('심리') || cleanName.includes('교육') || 
    cleanName.includes('강사') || cleanName.includes('장학사')
  ) {
    category = '교육·학술·연구';
    futureProspects = '안정·진화 (88/100 · 맞춤형 에듀테크 및 심리케어)';
    coreCompetencies = ['교수학습 지도 및 교육과정 설계', '심리 진단 및 공감적 상담', '학술 연구 및 논문 작성', '에듀테크 도구 활용'];
    relatedSubjects = ['교육학', '심리학', '독서와 작문', '화법과 언어', '현대 사회와 윤리', '해당교과 심화'];
    relatedDepartments = ['사범대학 각 학과', '교육학과', '심리학과', '청소년상담학과'];
    educationLevel = '대학교/대학원 졸업 이상 (정교사/상담사 면허)';
    certifications = ['초·중등 정교사 2급 자격증', '전문상담교사', '청소년상담사', '임상심리사'];
    careerTips = '교육학 및 심리학 교과를 선택하고 또래 상담이나 학습 멘토링 활동을 학생부에 체계적으로 기록하세요.';
  }

  const generatedDesc = rawSummary && rawSummary.trim().length > 10 
    ? rawSummary.trim()
    : `${jobName}은(는) 현대 사회 및 미래 산업 현장에서 ${coreCompetencies.slice(0, 2).join(', ')} 등의 전문 역량을 발휘하여 핵심 가치를 창출하는 전문 직업입니다.`;

  return {
    category,
    futureProspects,
    desc: generatedDesc,
    coreCompetencies,
    relatedSubjects,
    relatedDepartments,
    educationLevel,
    certifications,
    careerTips,
    isMatched: false
  };
};

export const JobExplorer: React.FC<JobExplorerProps> = ({
  careernetKey = '',
  work24Key = '',
  onNavigateToMajor,
  onNavigateToSubject,
  onSelectJobForPlan
}) => {
  // Option 1 Tab Mode: 'curated' (2022 미래 유망 직업 81선) vs 'careernet' (커리어넷 1,000+ 국가표준 직업사전)
  const [activeTabMode, setActiveTabMode] = useState<'curated' | 'careernet'>('curated');

  const [searchQuery, setSearchQuery] = useState('');
  const [liveSearchQuery, setLiveSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [activeLiveJob, setActiveLiveJob] = useState<any | null>(null);
  const [activeInterview, setActiveInterview] = useState<CareerInterviewItem | null>(null);
  const [filterInterviewOnly, setFilterInterviewOnly] = useState<boolean>(false);

  // Live Integrated API state
  const [liveResults, setLiveResults] = useState<any[]>([]);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [liveError, setLiveError] = useState('');
  const [livePage, setLivePage] = useState(1);
  const [hasMoreLive, setHasMoreLive] = useState(false);
  const [isUsingFallbackData, setIsUsingFallbackData] = useState(false);

  // Pagination for Local Jobs
  const [localDisplayCount, setLocalDisplayCount] = useState<number>(12);
  const [showAllLocal, setShowAllLocal] = useState<boolean>(false);

  // CareerNet category filter state for live results
  const [liveCategoryFilter, setLiveCategoryFilter] = useState<string>('all');
  const [liveViewMode, setLiveViewMode] = useState<'all' | 'grouped'>('all');

  // Exact categories derived from JOBS_DATA and CareerNet clusters
  const jobCategories = [
    { id: 'all', label: '전체 직업', count: JOBS_DATA.length, keyword: '', icon: '🌟' },
    { id: 'IT·인공지능', label: 'IT·인공지능·SW', count: JOBS_DATA.filter(j => j.category === 'IT·인공지능').length, keyword: '인공지능', icon: '💻' },
    { id: '전자·반도체·제조', label: '반도체·전자·전기', count: JOBS_DATA.filter(j => j.category === '전자·반도체·제조').length, keyword: '반도체', icon: '⚡' },
    { id: '로봇·모빌리티', label: '로봇·자율주행·기계', count: JOBS_DATA.filter(j => j.category === '로봇·모빌리티').length, keyword: '로봇', icon: '🤖' },
    { id: '의료·보건·약학', label: '의료·보건·약학', count: JOBS_DATA.filter(j => j.category === '의료·보건·약학').length, keyword: '의사', icon: '🩺' },
    { id: '바이오·신약', label: '바이오·신약·생명공학', count: JOBS_DATA.filter(j => j.category === '바이오·신약').length, keyword: '바이오', icon: '🧬' },
    { id: '환경·에너지·신소재', label: '에너지·신소재·배터리', count: JOBS_DATA.filter(j => j.category === '환경·에너지·신소재').length, keyword: '배터리', icon: '🔋' },
    { id: '농림·스마트팜·바이오자원', label: '스마트팜·농림생태', count: JOBS_DATA.filter(j => j.category === '농림·스마트팜·바이오자원').length, keyword: '농업', icon: '🌱' },
    { id: '경영·금융·컨설팅', label: '경영·금융·빅데이터', count: JOBS_DATA.filter(j => j.category === '경영·금융·컨설팅').length, keyword: '금융', icon: '📊' },
    { id: '법률·공공·외교', label: '법률·행정·외교·공공', count: JOBS_DATA.filter(j => j.category === '법률·공공·외교').length, keyword: '법률', icon: '⚖️' },
    { id: '교육·학술·연구', label: '교육·연구·상담·심리', count: JOBS_DATA.filter(j => j.category === '교육·학술·연구').length, keyword: '교육', icon: '🎓' },
    { id: '미디어·콘텐츠', label: '미디어·영상·콘텐츠', count: JOBS_DATA.filter(j => j.category === '미디어·콘텐츠').length, keyword: '미디어', icon: '🎬' },
    { id: '디자인·공간', label: '디자인·건축·UX', count: JOBS_DATA.filter(j => j.category === '디자인·공간').length, keyword: '디자인', icon: '🎨' },
    { id: '기능직', label: '기능직·현장기술 (비학위)', count: JOBS_DATA.filter(j => j.category === '기능직').length, keyword: '기능직', icon: '🛠️' },
    { id: '외식·호텔·뷰티·서비스', label: '외식·호텔·뷰티·관광', count: JOBS_DATA.filter(j => j.category === '외식·호텔·뷰티·서비스').length, keyword: '조리', icon: '☕' },
    { id: '인문사회·지식서비스', label: '인문사회·지식서비스', count: JOBS_DATA.filter(j => j.category === '인문사회·지식서비스').length, keyword: '서비스', icon: '📑' },
  ];

  // Dynamic categorization of loaded Live Results
  const enrichedLiveResults = useMemo(() => {
    return liveResults.map(item => {
      const jobTitle = item.job_nm || item.job || item.job_name || item.jobNm || item.name || '직업 정보';
      const inferred = item.inferred || inferCurriculumAndDetailsForJob(
        jobTitle, 
        item.job_cate || item.job_cl || '', 
        item.summary || item.job_summary || item.jobDef || item.description || ''
      );
      return {
        ...item,
        jobTitle,
        inferred
      };
    });
  }, [liveResults]);

  // Compute category counts for loaded CareerNet jobs
  const liveCategoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: enrichedLiveResults.length };
    
    jobCategories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = 0;
      }
    });

    enrichedLiveResults.forEach(item => {
      const cat = item.inferred?.category || '전문신산업·지식서비스';
      if (counts[cat] !== undefined) {
        counts[cat] = (counts[cat] || 0) + 1;
      } else {
        counts[cat] = (counts[cat] || 0) + 1;
      }
    });

    return counts;
  }, [enrichedLiveResults, jobCategories]);

  // Filtered live results according to liveCategoryFilter
  const filteredLiveResults = useMemo(() => {
    let list = enrichedLiveResults;
    if (liveCategoryFilter !== 'all') {
      list = list.filter(item => item.inferred?.category === liveCategoryFilter);
    }
    if (filterInterviewOnly) {
      list = list.filter(item => findCareerInterview(item.jobTitle) !== null);
    }
    return list;
  }, [enrichedLiveResults, liveCategoryFilter, filterInterviewOnly]);

  // Grouped live results for grouped view
  const groupedLiveResults = useMemo(() => {
    const groups: { category: string; icon: string; items: typeof enrichedLiveResults }[] = [];
    let baseList = enrichedLiveResults;
    if (filterInterviewOnly) {
      baseList = baseList.filter(item => findCareerInterview(item.jobTitle) !== null);
    }
    
    jobCategories.forEach(cat => {
      if (cat.id === 'all') return;
      const itemsInCat = baseList.filter(item => item.inferred?.category === cat.id);
      if (itemsInCat.length > 0) {
        groups.push({
          category: cat.id,
          icon: cat.icon,
          items: itemsInCat
        });
      }
    });

    // Catch-all for uncategorized
    const handledCats = new Set(jobCategories.map(c => c.id));
    const others = baseList.filter(item => !handledCats.has(item.inferred?.category));
    if (others.length > 0) {
      groups.push({
        category: '기타 융합 직무',
        icon: '💼',
        items: others
      });
    }

    return groups;
  }, [enrichedLiveResults, jobCategories, filterInterviewOnly]);

  const handleLiveSearch = async (query: string, page: number = 1, append: boolean = false, categoryFilter: string = 'all') => {
    if (!append) {
      setIsLoadingLive(true);
      setLiveResults([]);
      setLivePage(1);
    } else {
      setIsLoadingLive(true);
    }
    setLiveError('');

    try {
      let combinedResults: any[] = [];
      let fetchedItemsCount = 0;

      // Effective query for CareerNet: search text or category keyword if empty
      let effectiveQuery = query.trim();
      if (!effectiveQuery && categoryFilter !== 'all') {
        const foundCat = jobCategories.find(c => c.id === categoryFilter);
        if (foundCat && foundCat.keyword) {
          effectiveQuery = foundCat.keyword;
        }
      }

      // 1. Fetch CareerNet (JOB API)
      try {
        const qParam = effectiveQuery ? `&searchJobNm=${encodeURIComponent(effectiveQuery)}` : '';
        const keyParam = careernetKey ? `apiKey=${encodeURIComponent(careernetKey)}&` : '';
        const res = await fetch(
          `/api/careernet/proxy?${keyParam}svcType=api&svcCode=JOB${qParam}&thisPage=${page}&perPage=100`
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.dataSearch?.content) {
            const rawContent = data.dataSearch.content;
            const items = Array.isArray(rawContent) ? rawContent : [rawContent];
            fetchedItemsCount += items.length;
            const mapped = items.map((i: any) => ({
              ...i,
              job_nm: i.job || i.job_nm || i.job_name || i.jobNm || i.job_title || i.name || '',
              summary: i.summary || i.job_summary || i.jobDef || i.description || i.job_intro || '',
              job_cate: i.job_cate || i.job_cl || i.category || '커리어넷 직업',
              salery: i.salery || i.salary || i.wage || i.salway || '',
              source: '커리어넷',
              link: i.jobSeq ? `https://www.career.go.kr/cnet/front/base/job/jobView.do?seq=${i.jobSeq}` : 'https://www.career.go.kr'
            }));
            combinedResults = [...combinedResults, ...mapped];
          }
        }
      } catch (cErr) {
        console.warn('CareerNet job fetch failed (expected on static hosts like GitHub Pages)', cErr);
      }

      // 2. Fetch Work24 fallback if CareerNet is empty on query
      if (combinedResults.length === 0 && effectiveQuery) {
        try {
          const qParam = `&srchWord=${encodeURIComponent(effectiveQuery)}`;
          const keyParam = work24Key ? `authKey=${encodeURIComponent(work24Key)}&` : '';
          const res = await fetch(`/api/work24/proxy?${keyParam}apiType=jobDicApi.do&srchType=A${qParam}&startPage=${page}&display=60`);
          if (res.ok) {
            const text = await res.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "text/xml");
            const jobs = Array.from(xml.getElementsByTagName("jobDic"));
            
            const work24Jobs = jobs.map(j => ({
              job_nm: j.getElementsByTagName("jobNm")[0]?.textContent || '',
              summary: j.getElementsByTagName("jobDef")[0]?.textContent || '',
              salery: j.getElementsByTagName("salway")[0]?.textContent || '', 
              job_cate: '직업사전',
              source: '고용24',
              link: 'https://www.work24.go.kr'
            }));
            fetchedItemsCount += work24Jobs.length;
            combinedResults = [...combinedResults, ...work24Jobs];
          }
        } catch (wErr) {
          console.warn('Work24 job fetch failed', wErr);
        }
      }

      // 3. Fallback for Static Hosting (e.g., GitHub Pages 404 proxy)
      if (combinedResults.length === 0) {
        setIsUsingFallbackData(true);
        // Build fallback list based on JOBS_DATA and CareerNet interview mappings
        let fallbackList = JOBS_DATA.map(j => ({
          job_nm: j.name,
          summary: j.desc,
          job_cate: j.category,
          salery: '상위 25% 평균 연봉 우수',
          source: '국가표준 직업 DB (오프라인/정적 모드)',
          link: `https://www.career.go.kr/cnet/front/base/job/jobList.do`,
          inferred: {
            category: j.category,
            futureProspects: j.futureProspects,
            desc: j.desc,
            coreCompetencies: j.coreCompetencies,
            relatedSubjects: j.relatedSubjects,
            relatedDepartments: j.relatedDepartments,
            educationLevel: '대학교 졸업 이상',
            certifications: ['관련 국가기술자격 및 공인 전문자격'],
            careerTips: '희망 전공 계열의 핵심 권장이수과목을 이수하고 학생부 교과 세특에 탐구 경험을 누적하세요.',
            isMatched: true
          }
        }));

        if (effectiveQuery) {
          fallbackList = fallbackList.filter(item => 
            item.job_nm.toLowerCase().includes(effectiveQuery.toLowerCase()) ||
            item.summary.toLowerCase().includes(effectiveQuery.toLowerCase()) ||
            item.job_cate.toLowerCase().includes(effectiveQuery.toLowerCase())
          );
        }
        combinedResults = fallbackList;
        fetchedItemsCount = fallbackList.length;
      } else {
        setIsUsingFallbackData(false);
      }

      setHasMoreLive(fetchedItemsCount >= 100);

      if (append) {
        setLiveResults(prev => [...prev, ...combinedResults]);
      } else {
        setLiveResults(combinedResults);
      }
    } catch (err: any) {
      console.error('Live API Error:', err);
      setLiveError('커리어넷 실시간 직업 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoadingLive(false);
    }
  };

  // Auto trigger initial load on mount
  useEffect(() => {
    if (liveResults.length === 0 && !isLoadingLive) {
      handleLiveSearch('', 1, false);
    }
  }, []);

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchCategory =
      selectedCategory === 'all' ||
      job.category === selectedCategory ||
      job.category.includes(selectedCategory);
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      job.name.toLowerCase().includes(q) ||
      job.desc.toLowerCase().includes(q) ||
      job.category.toLowerCase().includes(q) ||
      job.coreCompetencies.some((c) => c.toLowerCase().includes(q)) ||
      job.relatedSubjects.some((s) => s.toLowerCase().includes(q)) ||
      job.relatedDepartments.some((m) => m.toLowerCase().includes(q));

    const matchInterview = !filterInterviewOnly || findCareerInterview(job.name) !== null;

    return matchCategory && matchQuery && matchInterview;
  });

  const displayedJobs = showAllLocal
    ? filteredJobs
    : filteredJobs.slice(0, localDisplayCount);

  const getDeptName = (deptIdOrName: string) => {
    const d = DEPARTMENTS_DATA.find((item) => item.id === deptIdOrName || item.name.includes(deptIdOrName));
    return d ? d.name : deptIdOrName;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Option 1: Top Sub-Segment Navigation Tab Selector */}
      <div className="bg-slate-200/80 p-1.5 rounded-3xl border border-slate-300 shadow-inner flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
        <div className="flex items-center space-x-1.5 sm:space-x-2 flex-1">
          {/* Tab 1: Curated 2022 Future Jobs */}
          <button
            onClick={() => setActiveTabMode('curated')}
            className={`flex-1 sm:flex-initial px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center space-x-3 cursor-pointer ${
              activeTabMode === 'curated'
                ? 'bg-white text-slate-900 shadow-lg shadow-slate-900/10 border border-slate-200/90 scale-[1.01]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
            }`}
          >
            <span className="text-xl">🌟</span>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="font-black text-slate-900 text-sm sm:text-base">2022 미래 유망 직업</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-indigo-100 text-indigo-800">
                  {JOBS_DATA.length}선 정밀 매핑
                </span>
              </div>
              <div className="text-[11px] font-medium text-slate-500 hidden sm:block">
                신산업·AI·디지털 직군별 2022 권장과목 & 직업인 인터뷰
              </div>
            </div>
          </button>

          {/* Tab 2: National Job Dictionary */}
          <button
            onClick={() => {
              setActiveTabMode('careernet');
              if (liveResults.length === 0 && !isLoadingLive) {
                handleLiveSearch(liveSearchQuery, 1, false);
              }
            }}
            className={`flex-1 sm:flex-initial px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center space-x-3 cursor-pointer ${
              activeTabMode === 'careernet'
                ? 'bg-white text-slate-900 shadow-lg shadow-slate-900/10 border border-slate-200/90 scale-[1.01]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-300/50'
            }`}
          >
            <span className="text-xl">🌐</span>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="font-black text-slate-900 text-sm sm:text-base">국가표준 직업사전</span>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800">
                  500+ 전체탐색
                </span>
              </div>
              <div className="text-[11px] font-medium text-slate-500 hidden sm:block">
                교육부 한국직업능력연구원 데이터
              </div>
            </div>
          </button>
        </div>

        {/* Badges */}
        <div className="hidden lg:flex items-center space-x-2 pr-3 text-xs font-bold">
          {activeTabMode === 'curated' ? (
            <span className="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center shadow-2xs">
              <Mic className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
              직업인 멘토 인터뷰 {CAREERNET_INTERVIEW_LIST.length}건 탑재
            </span>
          ) : (
            <span className="bg-indigo-50 text-indigo-900 border border-indigo-200 px-3 py-1.5 rounded-xl flex items-center shadow-2xs">
              <Database className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
              직업 DB {liveResults.length}개 로드됨
            </span>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: 2022 미래 유망 직업 81선 (CURATED VIEW)                             */}
      {/* ========================================================================= */}
      {activeTabMode === 'curated' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Hero Header for Curated Jobs */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>2022 개정 고교학점제 추천 미래 유망 직업 81선</span>
                </div>
                <button
                  onClick={() => {
                    setActiveTabMode('careernet');
                    if (liveResults.length === 0 && !isLoadingLive) {
                      handleLiveSearch('', 1, false);
                    }
                  }}
                  className="inline-flex items-center space-x-1.5 text-xs text-indigo-200 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/80 px-3 py-1.5 rounded-xl border border-indigo-400/40 transition cursor-pointer font-bold"
                >
                  <span>🌐 국가표준 직업사전 500+ 전체탐색 ↗</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                미래를 선도할 81개 유망 직업과 고교 권장과목을 탐색하세요
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                인공지능·반도체·바이오·로봇 등 16개 핵심 산업 분야의 유망 직업과 2022 개정 교육과정 연계 고교 권장이수과목, 필요 핵심 역량 및 커리어넷 공식 직업인 멘토 인터뷰를 확인하세요.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="유망 직업명, 핵심 역량, 고교 권장과목 검색 (예: 인공지능, 반도체, 의사, 퀀트, 로봇, 심리학)..."
                    className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3.5 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white bg-slate-700/80 px-2 py-1 rounded-lg"
                    >
                      지우기
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs with Item Counts */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
                산업·직군별 직업 분류 ({jobCategories.length}개 직군 분석)
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setFilterInterviewOnly(!filterInterviewOnly)}
                  className={`px-3 py-1 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-1.5 cursor-pointer shadow-2xs border ${
                    filterInterviewOnly
                      ? 'bg-amber-500 text-white border-amber-600 ring-2 ring-amber-400/50'
                      : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5 text-amber-700" />
                  <span>🎤 직업인 인터뷰 있는 직업만 ({CAREERNET_INTERVIEW_LIST.length}건 등록)</span>
                  {filterInterviewOnly && <span className="bg-white/25 px-1.5 py-0.2 rounded-full text-[10px]">ON</span>}
                </button>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  {selectedCategory === 'all' ? `전체 ${filteredJobs.length}개 직업` : `${selectedCategory} (${filteredJobs.length}개)`}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
              {jobCategories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setLocalDisplayCount(12);
                      setShowAllLocal(false);
                    }}
                    className={`px-3 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between space-x-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                        : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center space-x-1.5 min-w-0 truncate">
                      <span className="text-sm shrink-0">{cat.icon}</span>
                      <span className="truncate">{cat.label}</span>
                    </div>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[11px] font-extrabold shrink-0 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Analytics Summary Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="p-3 bg-slate-50 rounded-xl space-y-1">
              <div className="text-[11px] font-bold text-slate-500">총 미래 유망 직업 DB</div>
              <div className="text-lg font-black text-slate-900">{JOBS_DATA.length}개 직업</div>
            </div>
            <div className="p-3 bg-indigo-50/60 rounded-xl space-y-1">
              <div className="text-[11px] font-bold text-indigo-700">현재 조건 검색결과</div>
              <div className="text-lg font-black text-indigo-950">{filteredJobs.length}개 직업</div>
            </div>
            <div className="p-3 bg-amber-50/60 rounded-xl space-y-1">
              <div className="text-[11px] font-bold text-amber-700">커리어넷 직업인 인터뷰</div>
              <div className="text-lg font-black text-amber-950">공식 매핑 ✓</div>
            </div>
            <div className="p-3 bg-emerald-50/60 rounded-xl space-y-1">
              <div className="text-[11px] font-bold text-emerald-700">2022 고교 과목 매핑</div>
              <div className="text-lg font-black text-emerald-950">100% 매핑 완료</div>
            </div>
          </div>

          {/* Local Curated Jobs Section Header */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                2022 개정 추천 미래 유망 직업 일람
              </h3>
              <p className="text-xs text-slate-500">
                신산업·디지털·바이오 등 전체 {filteredJobs.length}개 직업 중 {displayedJobs.length}개 표시
              </p>
            </div>
          </div>

          {/* Curated Jobs Grid */}
          {displayedJobs.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
              <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-sm font-bold text-slate-700">
                선택하신 조건에 일치하는 유망 직업이 없습니다.
              </p>
              <p className="text-xs text-slate-500">
                검색어를 수정하시거나, '국가표준 직업사전 500+ 전체탐색' 탭에서 검색해 보세요.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setFilterInterviewOnly(false);
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                >
                  필터 초기화
                </button>
                <button
                  onClick={() => {
                    setActiveTabMode('careernet');
                    setLiveSearchQuery(searchQuery);
                    handleLiveSearch(searchQuery, 1, false);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold"
                >
                  국가표준 직업사전 500+에서 검색하기 ↗
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedJobs.map((job) => {
                const interview = findCareerInterview(job.name);

                return (
                  <div
                    key={job.id}
                    onClick={() => setActiveJob(job)}
                    className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group relative"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-1 flex-wrap">
                        <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                          {job.category}
                        </span>
                        <div className="flex items-center space-x-1.5">
                          {interview && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveInterview(interview);
                              }}
                              className="inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-black bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition shadow-2xs cursor-pointer"
                              title={`커리어넷 공식 직업인 인터뷰 열람 (${interview.interviewee} 멘토)`}
                            >
                              <span className="mr-1">🎤</span>
                              <span>직업인 인터뷰</span>
                            </button>
                          )}
                          <span className="inline-flex items-center text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            전망: {job.futureProspects}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {job.name}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {job.desc}
                        </p>
                      </div>

                      {/* Interview teaser snippet if available */}
                      {interview && (
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveInterview(interview);
                          }}
                          className="p-3 bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl border border-amber-200/80 hover:border-amber-400 transition cursor-pointer space-y-1"
                        >
                          <div className="flex items-center justify-between text-[11px] font-extrabold text-amber-900">
                            <span className="flex items-center">
                              <Mic className="w-3.5 h-3.5 mr-1 text-amber-600" />
                              현직자 멘토: {interview.interviewee} ({interview.organization})
                            </span>
                            <span className="text-amber-700 font-bold hover:underline">인터뷰 보기 ↗</span>
                          </div>
                          <p className="text-[11px] text-amber-800 line-clamp-1 italic">
                            "{interview.quote}"
                          </p>
                        </div>
                      )}

                      <div className="space-y-1.5 pt-1">
                        <div className="text-[11px] font-bold text-slate-700 flex items-center">
                          <Sparkles className="w-3 h-3 text-amber-500 mr-1" />
                          <span>핵심 요구 역량:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {job.coreCompetencies.slice(0, 3).map((comp, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-bold rounded-lg"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="text-[11px] font-bold text-slate-700 flex items-center">
                          <BookOpen className="w-3 h-3 text-indigo-500 mr-1" />
                          <span>고교 추천 과목:</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {job.relatedSubjects.map((sub, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold rounded-lg"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors flex items-center">
                        상세보기 <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectJobForPlan?.(job.name);
                        }}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition"
                      >
                        + 희망직업 등록
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Load More & View All Controls for Local Data */}
          {filteredJobs.length > 0 && (
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-600 flex items-center">
                    <span>직업 열람 진행률:</span>
                    <strong className="ml-1.5 text-slate-900 font-extrabold">{displayedJobs.length} / {filteredJobs.length}개</strong>
                    <span className="ml-2 text-[11px] text-slate-400 font-normal">
                      ({Math.round((displayedJobs.length / (filteredJobs.length || 1)) * 100)}% 열람 완료)
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full sm:w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-slate-900 rounded-full transition-all duration-300"
                      style={{ width: `${(displayedJobs.length / (filteredJobs.length || 1)) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  {filteredJobs.length > displayedJobs.length && (
                    <button
                      onClick={() => setLocalDisplayCount(prev => prev + 12)}
                      className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-slate-900/20 transition flex items-center space-x-1.5 cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>+ 12개 더보기</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setShowAllLocal(!showAllLocal);
                      if (!showAllLocal) {
                        setLocalDisplayCount(filteredJobs.length);
                      } else {
                        setLocalDisplayCount(12);
                      }
                    }}
                    className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm shadow-2xs transition flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Briefcase className="w-4 h-4 text-slate-500" />
                    <span>{showAllLocal ? '12개씩 기본 보기' : `전체 직업 한 번에 펼치기 (${filteredJobs.length}개)`}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Switch Banner */}
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 border border-indigo-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-600 text-white rounded-2xl text-xl shadow-md shadow-indigo-600/20">
                🌐
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">
                  더 많은 국가표준 직업(500+개)을 찾고 계신가요?
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  교육부 한국직업능력연구원 데이터 기반 국가표준 직업사전 탭에서 대한민국 전체 직업과 현장 실무 직무까지 모두 검색할 수 있습니다.
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setActiveTabMode('careernet');
                if (liveResults.length === 0 && !isLoadingLive) {
                  handleLiveSearch('', 1, false);
                }
              }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-xs sm:text-sm font-extrabold transition shadow-md shadow-indigo-600/20 flex items-center space-x-2 shrink-0 cursor-pointer"
            >
              <span>국가표준 직업사전 500+ 전체탐색 바로가기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: 국가표준 직업사전 500+ 전체탐색                                      */}
      {/* ========================================================================= */}
      {activeTabMode === 'careernet' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Hero Header for CareerNet Live Database */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold">
                  <Database className="w-3.5 h-3.5" />
                  <span>교육부 한국직업능력연구원 데이터 (국가표준 직업사전)</span>
                </div>
                <button
                  onClick={() => setActiveTabMode('curated')}
                  className="inline-flex items-center space-x-1.5 text-xs text-emerald-200 hover:text-white bg-slate-900/60 hover:bg-slate-900/90 px-3 py-1.5 rounded-xl border border-emerald-400/40 transition cursor-pointer font-bold"
                >
                  <span>🌟 2022 미래 유망 직업 81선 탭으로 이동 ↗</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                국가표준 직업사전 500+ 전체탐색
              </h1>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                교육부 한국직업능력연구원 데이터를 기반으로 대한민국 공인 직업을 탐색하고, 2022 개정 고교 권장과목·연계 학과 지능형 추론 정보 및 직업인 인터뷰를 확인하세요.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={liveSearchQuery}
                    onChange={(e) => setLiveSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleLiveSearch(liveSearchQuery, 1, false);
                      }
                    }}
                    placeholder="검색할 직업명을 입력하세요 (예: 변리사, 임상병리사, 웹툰작가, 데이터분석가, 바리스타, 도배사)..."
                    className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3.5 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-inner"
                  />
                  {liveSearchQuery && (
                    <button
                      onClick={() => {
                        setLiveSearchQuery('');
                        handleLiveSearch('', 1, false);
                      }}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white bg-slate-700/80 px-2 py-1 rounded-lg"
                    >
                      초기화
                    </button>
                  )}
                </div>
                <button
                  onClick={() => handleLiveSearch(liveSearchQuery, 1, false)}
                  disabled={isLoadingLive}
                  className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-sm font-bold flex items-center justify-center space-x-2 transition shadow-md shadow-emerald-600/30 shrink-0 cursor-pointer"
                >
                  {isLoadingLive ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  <span>직업 검색</span>
                </button>
              </div>
            </div>
          </div>

          {/* Notice for GitHub Pages Fallback if active */}
          {isUsingFallbackData && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start space-x-3 text-xs text-amber-900">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-extrabold text-amber-950">정적 호스팅(GitHub Pages) 환경 안내</div>
                <div className="leading-relaxed">
                  GitHub Pages와 같은 순수 정적 웹 호스팅 환경에서는 백엔드 Node.js 프록시 서버가 지원되지 않아 실시간 API 대신 <strong>내장된 표준 직업 데이터베이스 및 인터뷰 연계 DB</strong>로 자동 전환되어 안전하게 서비스됩니다.
                </div>
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping shrink-0" />
              <span className="text-xs font-extrabold text-slate-800">
                로드된 직업: <strong className="text-emerald-700 font-black">{liveResults.length}개</strong>
              </span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs text-slate-500">
                {filteredLiveResults.length}개 표시 중
              </span>
            </div>

            <div className="flex items-center space-x-2 flex-wrap gap-2">
              {/* View Mode Toggle */}
              <div className="bg-slate-100 p-0.5 rounded-xl border border-slate-200 flex items-center text-xs font-bold">
                <button
                  onClick={() => setLiveViewMode('all')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    liveViewMode === 'all' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  카테고리 필터 뷰
                </button>
                <button
                  onClick={() => setLiveViewMode('grouped')}
                  className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                    liveViewMode === 'grouped' ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  계열별 묶어보기
                </button>
              </div>

              <button
                onClick={() => handleLiveSearch(liveSearchQuery, 1, false)}
                disabled={isLoadingLive}
                className="text-xs text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 font-bold transition flex items-center cursor-pointer"
              >
                <RefreshCw className={`w-3 h-3 mr-1.5 ${isLoadingLive ? 'animate-spin' : ''}`} /> 새로고침
              </button>
            </div>
          </div>

          {/* CareerNet Live Category Filter Tabs with Item Counts */}
          {liveViewMode === 'all' && (
            <div className="space-y-2.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center">
                  <Layers className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                  국가표준 직업 계열·직군 분류 (클릭 시 해당 계열만 필터링)
                </span>
                {liveCategoryFilter !== 'all' && (
                  <button
                    onClick={() => setLiveCategoryFilter('all')}
                    className="text-emerald-700 hover:underline font-bold text-[11px] cursor-pointer"
                  >
                    전체 보기로 초기화
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
                {/* All tab */}
                <button
                  onClick={() => setLiveCategoryFilter('all')}
                  className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-between space-x-1.5 cursor-pointer ${
                    liveCategoryFilter === 'all'
                      ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center space-x-1.5 min-w-0 truncate">
                    <span className="shrink-0">🌟</span>
                    <span className="truncate">전체</span>
                  </div>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-black shrink-0 ${
                      liveCategoryFilter === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {liveCategoryCounts['all'] || 0}
                  </span>
                </button>

                {/* Categories with counts */}
                {jobCategories
                  .filter((cat) => cat.id !== 'all')
                  .map((cat) => {
                    const count = liveCategoryCounts[cat.id] || 0;
                    const isSelected = liveCategoryFilter === cat.id;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setLiveCategoryFilter(isSelected ? 'all' : cat.id)}
                        className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-between space-x-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                            : count > 0
                            ? 'bg-white text-slate-700 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-200'
                            : 'bg-slate-50/70 text-slate-400 border border-slate-100'
                        }`}
                      >
                        <div className="flex items-center space-x-1.5 min-w-0 truncate">
                          <span className="text-xs shrink-0">{cat.icon}</span>
                          <span className="truncate">{cat.label}</span>
                        </div>
                        <span
                          className={`px-1.5 py-0.5 rounded-full text-[10px] font-black shrink-0 ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : count > 0
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </div>
          )}

          {liveError && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 font-bold flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {liveError}
            </div>
          )}

          {/* Grouped View Mode */}
          {liveViewMode === 'grouped' && (
            <div className="space-y-8">
              {groupedLiveResults.map((group) => (
                <div key={group.category} className="space-y-4">
                  <div className="flex items-center justify-between bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs">
                    <h4 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
                      <span className="text-lg">{group.icon}</span>
                      <span>{group.category}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                        {group.items.length}개 직업
                      </span>
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">국가표준 직업 분류</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((item, idx) => {
                      const jobTitle = item.jobTitle;
                      const inferred = item.inferred;
                      const interview = findCareerInterview(jobTitle, inferred.category, inferred.desc);

                      return (
                        <div
                          key={idx}
                          onClick={() => setActiveLiveJob({ ...item, inferred })}
                          className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group relative"
                        >
                          <div className="space-y-4">
                            <div className="flex items-center justify-between gap-1 flex-wrap">
                              <span className={`px-2.5 py-1 rounded-xl text-xs font-bold ${
                                inferred.isNonDegree 
                                  ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                                  : 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                              }`}>
                                {inferred.isNonDegree ? '🛠️ 기능직·현장기술' : inferred.category}
                              </span>
                              <div className="flex items-center space-x-1.5">
                                {interview && (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveInterview(interview);
                                    }}
                                    className="inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-black bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition shadow-2xs cursor-pointer"
                                    title={`커리어넷 공식 직업인 인터뷰 열람 (${interview.interviewee} 멘토)`}
                                  >
                                    <span className="mr-1">🎤</span>
                                    <span>직업인 인터뷰</span>
                                  </button>
                                )}
                                <span className="inline-flex items-center text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  {inferred.isNonDegree ? '수요 지속' : `전망: ${inferred.futureProspects.split(' ')[0]}`}
                                </span>
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                {jobTitle}
                              </h3>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                {inferred.desc}
                              </p>
                            </div>

                            {/* Interview snippet if found */}
                            {interview && (
                              <div 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveInterview(interview);
                                }}
                                className="p-3 bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl border border-amber-200/80 hover:border-amber-400 transition cursor-pointer space-y-1"
                              >
                                <div className="flex items-center justify-between text-[11px] font-extrabold text-amber-900">
                                  <span className="flex items-center">
                                    <Mic className="w-3.5 h-3.5 mr-1 text-amber-600" />
                                    현직자 멘토: {interview.interviewee} ({interview.organization})
                                  </span>
                                  <span className="text-amber-700 font-bold hover:underline">인터뷰 보기 ↗</span>
                                </div>
                                <p className="text-[11px] text-amber-800 line-clamp-1 italic">
                                  "{interview.quote}"
                                </p>
                              </div>
                            )}

                            {/* Non-degree branch alert */}
                            {inferred.isNonDegree ? (
                              <div className="p-3 bg-amber-50/90 rounded-2xl border border-amber-200/80 space-y-2">
                                <div className="text-[11px] font-bold text-amber-900 flex items-center">
                                  <ShieldAlert className="w-3.5 h-3.5 mr-1 text-amber-600 shrink-0" />
                                  <span>학위 비대상 직무 (고교 권장과목 없음)</span>
                                </div>
                                <p className="text-[11px] text-amber-800 leading-snug">
                                  대학 학위나 고교 교과 이수 대신 <strong>국가 자격증 취득 및 실무 직무 교육</strong> 중심의 진로 경로입니다.
                                </p>
                                <div className="text-[11px] font-semibold text-slate-700 pt-1 border-t border-amber-200/60">
                                  📋 자격 요건: <span className="text-amber-950 font-bold">{inferred.certifications[0]}</span>
                                </div>
                              </div>
                            ) : (
                              <>
                                {/* Core Competencies */}
                                <div className="space-y-1.5 pt-1">
                                  <div className="text-[11px] font-bold text-slate-700 flex items-center">
                                    <Sparkles className="w-3 h-3 text-amber-500 mr-1" />
                                    <span>핵심 요구 역량:</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {inferred.coreCompetencies.slice(0, 3).map((comp: string, cIdx: number) => (
                                      <span
                                        key={cIdx}
                                        className="px-2 py-0.5 bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-bold rounded-lg"
                                      >
                                        {comp}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* 2022 Recommended Subjects */}
                                <div className="space-y-1.5 pt-1">
                                  <div className="text-[11px] font-bold text-slate-700 flex items-center">
                                    <BookOpen className="w-3 h-3 text-emerald-600 mr-1" />
                                    <span>2022 권장 과목:</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {inferred.relatedSubjects.slice(0, 4).map((sub: string, sIdx: number) => (
                                      <span
                                        key={sIdx}
                                        className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] font-bold rounded-lg"
                                      >
                                        {sub}
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Related Departments */}
                                <div className="space-y-1.5 pt-1">
                                  <div className="text-[11px] font-bold text-slate-700 flex items-center">
                                    <GraduationCap className="w-3 h-3 text-slate-500 mr-1" />
                                    <span>연계 추천 학과:</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                    {inferred.relatedDepartments.slice(0, 2).map((dept: string, dIdx: number) => (
                                      <span
                                        key={dIdx}
                                        className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-lg"
                                      >
                                        {getDeptName(dept)}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </>
                            )}
                          </div>

                          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-700 transition-colors flex items-center">
                              상세보기 <ArrowRight className="w-3 h-3 ml-1" />
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectJobForPlan?.(jobTitle);
                              }}
                              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition"
                            >
                              + 희망직업 등록
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Filtered Grid View */}
          {liveViewMode === 'all' && (
            <>
              {filteredLiveResults.length === 0 ? (
                <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
                  <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-sm font-bold text-slate-700">
                    현재 조건에 부합하는 커리어넷 직업이 없습니다.
                  </p>
                  <p className="text-xs text-slate-500">
                    검색어를 변경하시거나, 아래 '직업 정보 더 불러오기'를 클릭해 보세요.
                  </p>
                  <button
                    onClick={() => {
                      setLiveCategoryFilter('all');
                      setLiveSearchQuery('');
                      handleLiveSearch('', 1, false);
                    }}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm"
                  >
                    전체 직업 보기
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredLiveResults.map((item, idx) => {
                    const jobTitle = item.jobTitle;
                    const inferred = item.inferred;
                    const interview = findCareerInterview(jobTitle, inferred.category, inferred.desc);

                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveLiveJob({ ...item, inferred })}
                        className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group relative"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className={`px-2.5 py-1 rounded-xl text-xs font-bold ${
                              inferred.isNonDegree 
                                ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                                : 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                            }`}>
                              {inferred.isNonDegree ? '🛠️ 기능직·현장기술' : inferred.category}
                            </span>
                            <div className="flex items-center space-x-1.5">
                              {interview && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveInterview(interview);
                                  }}
                                  className="inline-flex items-center px-2 py-0.5 rounded-lg text-[11px] font-black bg-amber-100 text-amber-900 hover:bg-amber-200 border border-amber-300 transition shadow-2xs cursor-pointer"
                                  title={`커리어넷 공식 직업인 인터뷰 열람 (${interview.interviewee} 멘토)`}
                                >
                                  <span className="mr-1">🎤</span>
                                  <span>직업인 인터뷰</span>
                                </button>
                              )}
                              <span className="inline-flex items-center text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                {inferred.isNonDegree ? '수요 지속' : `전망: ${inferred.futureProspects.split(' ')[0]}`}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {jobTitle}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {inferred.desc}
                            </p>
                          </div>

                          {/* Interview snippet if found */}
                          {interview && (
                            <div 
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveInterview(interview);
                              }}
                              className="p-3 bg-gradient-to-r from-amber-50 to-orange-50/60 rounded-2xl border border-amber-200/80 hover:border-amber-400 transition cursor-pointer space-y-1"
                            >
                              <div className="flex items-center justify-between text-[11px] font-extrabold text-amber-900">
                                <span className="flex items-center">
                                  <Mic className="w-3.5 h-3.5 mr-1 text-amber-600" />
                                  현직자 멘토: {interview.interviewee} ({interview.organization})
                                </span>
                                <span className="text-amber-700 font-bold hover:underline">인터뷰 보기 ↗</span>
                              </div>
                              <p className="text-[11px] text-amber-800 line-clamp-1 italic">
                                "{interview.quote}"
                              </p>
                            </div>
                          )}

                          {/* Non-degree branch alert */}
                          {inferred.isNonDegree ? (
                            <div className="p-3 bg-amber-50/90 rounded-2xl border border-amber-200/80 space-y-2">
                              <div className="text-[11px] font-bold text-amber-900 flex items-center">
                                <ShieldAlert className="w-3.5 h-3.5 mr-1 text-amber-600 shrink-0" />
                                <span>학위 비대상 직무 (고교 권장과목 없음)</span>
                              </div>
                              <p className="text-[11px] text-amber-800 leading-snug">
                                대학 학위나 고교 교과 이수 대신 <strong>국가 자격증 취득 및 실무 직무 교육</strong> 중심의 진로 경로입니다.
                              </p>
                              <div className="text-[11px] font-semibold text-slate-700 pt-1 border-t border-amber-200/60">
                                📋 자격 요건: <span className="text-amber-950 font-bold">{inferred.certifications[0]}</span>
                              </div>
                            </div>
                          ) : (
                            <>
                              {/* Core Competencies */}
                              <div className="space-y-1.5 pt-1">
                                <div className="text-[11px] font-bold text-slate-700 flex items-center">
                                  <Sparkles className="w-3 h-3 text-amber-500 mr-1" />
                                  <span>핵심 요구 역량:</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {inferred.coreCompetencies.slice(0, 3).map((comp: string, cIdx: number) => (
                                    <span
                                      key={cIdx}
                                      className="px-2 py-0.5 bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-bold rounded-lg"
                                    >
                                      {comp}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* 2022 Recommended Subjects */}
                              <div className="space-y-1.5 pt-1">
                                <div className="text-[11px] font-bold text-slate-700 flex items-center">
                                  <BookOpen className="w-3 h-3 text-emerald-600 mr-1" />
                                  <span>2022 권장 과목:</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {inferred.relatedSubjects.slice(0, 4).map((sub: string, sIdx: number) => (
                                    <span
                                      key={sIdx}
                                      className="px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-800 text-[11px] font-bold rounded-lg"
                                    >
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Related Departments */}
                              <div className="space-y-1.5 pt-1">
                                <div className="text-[11px] font-bold text-slate-700 flex items-center">
                                  <GraduationCap className="w-3 h-3 text-slate-500 mr-1" />
                                  <span>연계 추천 학과:</span>
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {inferred.relatedDepartments.slice(0, 2).map((dept: string, dIdx: number) => (
                                    <span
                                      key={dIdx}
                                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-lg"
                                    >
                                      {getDeptName(dept)}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-700 transition-colors flex items-center">
                            상세보기 <ArrowRight className="w-3 h-3 ml-1" />
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectJobForPlan?.(jobTitle);
                            }}
                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl transition"
                          >
                            + 희망직업 등록
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* Continuous Infinite '더보기' Button for Live Results */}
          {hasMoreLive && (
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  const next = livePage + 1;
                  setLivePage(next);
                  handleLiveSearch(liveSearchQuery, next, true);
                }}
                disabled={isLoadingLive}
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-slate-900/30 transition flex items-center space-x-2 cursor-pointer"
              >
                {isLoadingLive ? (
                  <RefreshCw className="w-4 h-4 animate-spin mr-2 text-emerald-400" />
                ) : (
                  <PlusCircle className="w-4 h-4 mr-2 text-emerald-400" />
                )}
                <span>국가표준 직업 정보 100개 더 불러오기 (현재 {liveResults.length}개 로드됨)</span>
              </button>
            </div>
          )}
        </div>
      )}

      
      {/* Local Job Detail Modal */}
      {activeJob && (() => {
        const interview = findCareerInterview(activeJob.name, activeJob.category, activeJob.desc);

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center space-x-2 flex-wrap gap-1">
                    <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                      {activeJob.category}
                    </span>
                    {interview && (
                      <button
                        type="button"
                        onClick={() => setActiveInterview(interview)}
                        className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 transition shadow-2xs"
                      >
                        <span className="mr-1">🎤</span> 커리어넷 직업인 인터뷰 연계됨
                      </button>
                    )}
                    <span className="px-2.5 py-1 rounded-xl text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      미래 전망: {activeJob.futureProspects}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                    {activeJob.name}
                  </h2>
                </div>
                <button onClick={() => setActiveJob(null)} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl text-lg font-bold">✕</button>
              </div>

              <div className="space-y-5 text-sm">
                {/* CareerNet Official Interview Card if available */}
                {interview && (
                  <div className="p-4 bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-amber-50/90 rounded-2xl border-2 border-amber-300/80 shadow-xs space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="p-1.5 bg-amber-200 text-amber-900 rounded-xl text-sm font-black">🎤</span>
                        <div>
                          <span className="text-xs font-black text-amber-900 tracking-wide uppercase">커리어넷 공식 직업인 멘토 인터뷰</span>
                          <div className="text-sm font-extrabold text-slate-900">
                            {interview.interviewee} 멘토 <span className="text-xs font-medium text-slate-600">({interview.organization})</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setActiveInterview(interview)}
                          className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-extrabold shadow-sm transition flex items-center space-x-1"
                        >
                          <BookOpen className="w-3.5 h-3.5 mr-1" />
                          <span>인터뷰 전문 열람 ↗</span>
                        </button>
                        {interview.careerNetUrl && (
                          <a
                            href={interview.careerNetUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-amber-800 hover:text-amber-950 bg-amber-100/70 hover:bg-amber-200 rounded-xl transition"
                            title="커리어넷 공식 인터뷰 페이지 바로가기"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-amber-950 font-semibold bg-white/80 p-3 rounded-xl border border-amber-200/80 italic leading-relaxed">
                      "{interview.quote}"
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 text-indigo-600 mr-1.5" /> 직업 개요 및 하는 일
                  </h4>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {activeJob.desc}
                  </p>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" /> 필요 핵심 역량
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeJob.coreCompetencies.map((comp, idx) => (
                      <div key={idx} className="px-3 py-1.5 bg-amber-50 border border-amber-200/80 rounded-xl text-xs font-bold text-amber-900">
                        ✓ {comp}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" /> 고등학교 연계 권장 과목
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeJob.relatedSubjects.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveJob(null);
                          onNavigateToSubject?.(sub);
                        }}
                        className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
                      >
                        {sub} ↗
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                    <GraduationCap className="w-4 h-4 text-indigo-600 mr-1.5" /> 관련 대학 학과
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeJob.relatedDepartments.map((deptId, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveJob(null);
                          onNavigateToMajor?.(getDeptName(deptId));
                        }}
                        className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-800 hover:text-white transition"
                      >
                        {getDeptName(deptId)} ↗
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button onClick={() => setActiveJob(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm">닫기</button>
                <button
                  onClick={() => {
                    onSelectJobForPlan?.(activeJob.name);
                    setActiveJob(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center"
                >
                  <Bookmark className="w-4 h-4 mr-2" /> 희망 직업으로 등록
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Live API Job Detail Modal */}
      {activeLiveJob && (() => {
        const jobTitle = activeLiveJob.job_nm || activeLiveJob.job || activeLiveJob.job_name || activeLiveJob.jobNm || activeLiveJob.name || '직업 상세';
        const inferred = activeLiveJob.inferred || inferCurriculumAndDetailsForJob(
          jobTitle, 
          activeLiveJob.job_cate || activeLiveJob.job_cl || '', 
          activeLiveJob.summary || activeLiveJob.job_summary || activeLiveJob.jobDef || activeLiveJob.description || ''
        );
        const interview = findCareerInterview(jobTitle, inferred.category, inferred.desc);

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center space-x-2 flex-wrap gap-1">
                    <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {inferred.category}
                    </span>
                    {interview && (
                      <button
                        type="button"
                        onClick={() => setActiveInterview(interview)}
                        className="inline-flex items-center px-2.5 py-1 rounded-xl text-xs font-black bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 transition shadow-2xs"
                      >
                        <span className="mr-1">🎤</span> 커리어넷 직업인 인터뷰 연계됨
                      </button>
                    )}
                    <span className="px-2.5 py-1 rounded-xl text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      미래 전망: {inferred.futureProspects}
                    </span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                    {jobTitle}
                  </h2>
                </div>
                <button onClick={() => setActiveLiveJob(null)} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl text-lg font-bold">✕</button>
              </div>

              <div className="space-y-5 text-sm">
                {/* CareerNet Official Interview Card if available */}
                {interview && (
                  <div className="p-4 bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-amber-50/90 rounded-2xl border-2 border-amber-300/80 shadow-xs space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center space-x-2">
                        <span className="p-1.5 bg-amber-200 text-amber-900 rounded-xl text-sm font-black">🎤</span>
                        <div>
                          <span className="text-xs font-black text-amber-900 tracking-wide uppercase">커리어넷 공식 직업인 멘토 인터뷰</span>
                          <div className="text-sm font-extrabold text-slate-900">
                            {interview.interviewee} 멘토 <span className="text-xs font-medium text-slate-600">({interview.organization})</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setActiveInterview(interview)}
                          className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-extrabold shadow-sm transition flex items-center space-x-1"
                        >
                          <BookOpen className="w-3.5 h-3.5 mr-1" />
                          <span>인터뷰 전문 열람 ↗</span>
                        </button>
                        {interview.careerNetUrl && (
                          <a
                            href={interview.careerNetUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-amber-800 hover:text-amber-950 bg-amber-100/70 hover:bg-amber-200 rounded-xl transition"
                            title="커리어넷 공식 인터뷰 페이지 바로가기"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-amber-950 font-semibold bg-white/80 p-3 rounded-xl border border-amber-200/80 italic leading-relaxed">
                      "{interview.quote}"
                    </p>
                  </div>
                )}

                {/* Non-Degree Job Guidance Alert */}
                {inferred.isNonDegree && (
                  <div className="p-4 bg-amber-50 border border-amber-200/90 rounded-2xl space-y-2">
                    <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-sm">
                      <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
                      <span>학위 비대상 직무 안내 (대학 학위 및 고교 권장과목 비연계)</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed font-medium">
                      본 직업(가사도우미, 간병인, 요양보호사, 단순노무직 등)은 대입을 위한 고등학교 선택과목 이수나 대학 학위 취득이 필수 요건이 아닙니다. 
                      대신 <strong>국가공인 자격증(요양보호사, 산후관리사, 경비신임 등) 취득 및 전문 직무 교육/실습 과정 이수</strong>가 핵심 진로 경로입니다.
                    </p>
                  </div>
                )}

                {/* 1. Job Summary */}
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                    <Briefcase className="w-4 h-4 text-indigo-600 mr-1.5" /> 직업 개요 및 하는 일
                  </h4>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {inferred.desc}
                  </p>
                </div>

                {/* 2. Core Competencies */}
                <div>
                  <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" /> {inferred.isNonDegree ? '핵심 직무 실무 역량' : '필요 핵심 역량'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {inferred.coreCompetencies.map((comp: string, idx: number) => (
                      <div key={idx} className="px-3 py-1.5 bg-amber-50 border border-amber-200/80 rounded-xl text-xs font-bold text-amber-900">
                        ✓ {comp}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. 2022 Recommended Subjects (Only for Degree/Academic paths) */}
                {!inferred.isNonDegree && inferred.relatedSubjects.length > 0 && (
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" /> 2022 개정 고등학교 연계 권장 과목
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {inferred.relatedSubjects.map((sub: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveLiveJob(null);
                            onNavigateToSubject?.(sub);
                          }}
                          className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
                        >
                          {sub} ↗
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 4. Related Departments (Only for Academic paths) */}
                {!inferred.isNonDegree && inferred.relatedDepartments.length > 0 && (
                  <div>
                    <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                      <GraduationCap className="w-4 h-4 text-indigo-600 mr-1.5" /> 관련 대학 학과
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {inferred.relatedDepartments.map((deptId: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveLiveJob(null);
                            onNavigateToMajor?.(getDeptName(deptId));
                          }}
                          className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-800 hover:text-white transition"
                        >
                          {getDeptName(deptId)} ↗
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Certifications & Education Level */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-700 flex items-center">
                      <Award className="w-4 h-4 text-indigo-600 mr-1.5" /> 필수·우대 자격증 및 교육과정
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {inferred.certifications.join(', ')}
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                    <div className="text-xs font-bold text-slate-700 flex items-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" /> 요구 학력 수준
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {inferred.educationLevel}
                    </div>
                  </div>
                </div>

                {/* 6. Career Planning Tips */}
                <div className={`p-4 rounded-2xl border space-y-1 text-xs ${
                  inferred.isNonDegree 
                    ? 'bg-amber-50/70 border-amber-200/80 text-amber-950' 
                    : 'bg-indigo-50/70 border-indigo-100 text-indigo-950'
                }`}>
                  <span className={`font-bold flex items-center ${
                    inferred.isNonDegree ? 'text-amber-900' : 'text-indigo-900'
                  }`}>
                    <Compass className={`w-4 h-4 mr-1.5 ${
                      inferred.isNonDegree ? 'text-amber-600' : 'text-indigo-600'
                    }`} /> 
                    {inferred.isNonDegree ? '현장 취업 및 직무 준비 가이드' : '2022 고교학점제 학업계획서 & 세특 준비 조언'}
                  </span>
                  <p className="font-medium leading-relaxed">
                    {inferred.careerTips}
                  </p>
                </div>

                {/* 7. Salary & Portal Link */}
                {(activeLiveJob.salery || activeLiveJob.link) && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-emerald-50/60 rounded-2xl border border-emerald-100 text-xs">
                    {activeLiveJob.salery && (
                      <div className="text-emerald-900 font-medium">
                        임금 및 보수 수준: <strong className="font-bold text-emerald-950">{activeLiveJob.salery}</strong>
                      </div>
                    )}
                    {activeLiveJob.link && (
                      <a href={activeLiveJob.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-indigo-600 font-bold hover:underline">
                        공식 포털에서 원문 상세 열람 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button onClick={() => setActiveLiveJob(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm">닫기</button>
                <button
                  onClick={() => {
                    onSelectJobForPlan?.(jobTitle);
                    setActiveLiveJob(null);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center"
                >
                  <Bookmark className="w-4 h-4 mr-2" /> 희망 직업으로 등록
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* CareerNet Official Interview Detail Modal */}
      {activeInterview && (
        <CareerInterviewModal
          interview={activeInterview}
          onClose={() => setActiveInterview(null)}
          onNavigateToSubject={onNavigateToSubject}
          onNavigateToMajor={onNavigateToMajor}
        />
      )}
    </div>
  );
};
