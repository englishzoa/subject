import { Department } from '../types';
import { ADDITIONAL_DEPARTMENTS_DATA } from './additionalDepartments';

const BASE_DEPARTMENTS_DATA: Department[] = [
  // ==========================================
  // [1] 인문학 계열 (01)
  // ==========================================
  {
    id: 'dept_hum_korean',
    name: '국어국문학과',
    category: '인문학 계열',
    summary: '한국어와 한국문학의 역사와 구조를 깊이 있게 탐구하고 우리말의 올바른 활용과 창의적 문화콘텐츠를 연구합니다.',
    desc: '국어학과 고전문학, 현대문학을 종합적으로 연구하여 한국 문화의 정체성을 규명하고 언어 및 문학 역량을 바탕으로 창의적 콘텐츠 기획과 인문학적 소양을 기릅니다.',
    mainCurriculum: ['국어음운론', '국어문법론', '한국고전문학사', '한국현대문학사', '한국어교육론', '스토리텔링창작'],
    coreRecommendedSubjects: ['문학', '독서와 작문', '화법과 언어'],
    recommendedSubjects: ['주제 탐구 독서', '문학과 영상', '언어생활 탐구', '동아시아 역사 기행', '한문', '한문 고전 읽기'],
    highSchoolSubjects: {
      general: ['문학', '독서와 작문', '화법과 언어', '세계사', '한문'],
      career: ['주제 탐구 독서', '문학과 영상', '동아시아 역사 기행', '한문 고전 읽기', '인문학과 윤리'],
      convergence: ['독서 토론과 글쓰기', '매체 의사소통', '언어생활 탐구', '역사로 탐구하는 현대 세계']
    },
    similarDepartments: ['한국어문학과', '국어교육과', '문예창작학과', '미디어문예창작과', '한국학전공'],
    certifications: ['국어능력인증시험(ToKL)', 'KBS한국어능력시험', '한국어교원 자격증 2급', '중등학교 2급 정교사(교직)'],
    relatedJobs: ['작가·소설가', '방송기자·PD', '출판기획자', '카피라이터', '한국어교사', '시나리오작가', '콘텐츠에디터'],
    relatedSubjectIds: ['s_kor_lit', 's_kor_read', 's_kor_speech', 's_kor_theme', 's_kor_media_lit', 's_lang_hanmun'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '한양대', '이화여대'],
    careerProspects: '언론사(방송·신문), 출판계, OTT·드라마 콘텐츠 제작사, 광고대행사, 교육계 및 공공기관 진출이 활발합니다.'
  },
  {
    id: 'dept_hum_english',
    name: '영어영문학과',
    category: '인문학 계열',
    summary: '영어학과 영미문학을 연구하여 글로벌 의사소통 능력과 영미권 문화 및 인문학적 통찰력을 기릅니다.',
    desc: '영어의 통사론, 음운론, 의미론 등 언어학적 지식과 영미 명작 문학을 심층 독해하며 국제적 감각과 비판적 사고를 배양합니다.',
    mainCurriculum: ['영어학개론', '영미시/영미소설강독', '영문학사', '영미희곡', '통번역연습', '영어음성학'],
    coreRecommendedSubjects: ['영어Ⅰ', '영어Ⅱ', '영어 독해와 작문'],
    recommendedSubjects: ['영미 문학 읽기', '영어 발표와 토론', '심화 영어', '세계 문화와 영어', '세계사'],
    highSchoolSubjects: {
      general: ['영어Ⅰ', '영어Ⅱ', '영어 독해와 작문', '세계사', '독서와 작문'],
      career: ['영미 문학 읽기', '영어 발표와 토론', '심화 영어', '심화 영어 독해와 작문', '직무 영어'],
      convergence: ['실생활 영어 회화', '미디어 영어', '세계 문화와 영어', '독서 토론과 글쓰기']
    },
    similarDepartments: ['영미언어문화학과', '영어학과', '국제학부', '영어교육과', '통번역학과'],
    certifications: ['TOEIC', 'TOEFL', 'IELTS', '관광통역안내사', '번역능력인정시험(TCT)', '중등정교사'],
    relatedJobs: ['통번역사', '외교관', '해외영업원', '국제기구 종사자', '영어교사', '항공사 객실승무원', '외신 기자'],
    relatedSubjectIds: ['s_eng_eng1', 's_eng_eng2', 's_eng_read_write', 's_eng_lit', 's_eng_disc', 's_eng_adv'],
    topUniversities: ['서울대', '연세대', '고려대', '한국외대', '서강대', '성균관대', '이화여대'],
    careerProspects: '다국적 기업, 무역 상사, 외교부 및 국제기구, 금융권 해외사업부, 외국계 IT 기업 등 진출 범위가 매우 넓습니다.'
  },
  {
    id: 'dept_hum_history',
    name: '사학과 (역사학과)',
    category: '인문학 계열',
    summary: '한국사, 동양사, 서양사 등 인류의 과거 역사를 사료를 바탕으로 비판적으로 분석하고 현대 사회의 맥락을 성찰합니다.',
    desc: '역사적 사건의 인과관계를 규명하고 사료 비판 능력을 기르며, 문화유산 보존 및 디지털 역사 콘텐츠 개발 역량을 기릅니다.',
    mainCurriculum: ['한국고대/중세사', '동양근현대사', '서양문명사', '역사학개론', '사료강독', '디지털역사학'],
    coreRecommendedSubjects: ['한국사 1·2', '세계사'],
    recommendedSubjects: ['동아시아 역사 기행', '역사로 탐구하는 현대 세계', '한문', '한문 고전 읽기', '주제 탐구 독서'],
    highSchoolSubjects: {
      general: ['세계사', '독서와 작문', '화법과 언어', '한문', '세계시민과 지리'],
      career: ['동아시아 역사 기행', '인문학과 윤리', '한문 고전 읽기', '주제 탐구 독서'],
      convergence: ['역사로 탐구하는 현대 세계', '여행지리', '독서 토론과 글쓰기']
    },
    similarDepartments: ['한국사학과', '동양사학과', '서양사학과', '고고미술사학과', '역사문화학과', '역사교육과'],
    certifications: ['한국사능력검정시험(심화)', '학예사(준학예사/정학예사)', '문화재수리기술자', '관광통역안내사'],
    relatedJobs: ['학예연구사(큐레이터)', '역사교사', '문화재보존원', '역사작가', '기록물관리전문요원(아키비스트)', '언론인'],
    relatedSubjectIds: ['s_his_com', 's_soc_world_hist', 's_soc_east_asia', 's_soc_modern_world', 's_lang_hanmun'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '중앙대', '경희대'],
    careerProspects: '국공립 박물관, 문화재청, 역사문화콘텐츠 기획사, 방송사 다큐멘터리 제작국, 학계 연구소 등으로 진출합니다.'
  },
  {
    id: 'dept_hum_philosophy',
    name: '철학과',
    category: '인문학 계열',
    summary: '인간과 세계의 근본적인 문제(존재, 인식, 가치, 윤리)를 비판적 논리와 사유를 통해 탐구합니다.',
    desc: '동서양 고대부터 현대에 이르는 철학 사상을 탐구하고 AI 시대의 윤리적 쟁점, 비판적 사고력과 논증 능력을 집중 배양합니다.',
    mainCurriculum: ['인식론', '존재론', '서양고대/중세/근대철학', '동양철학사', '기호논리학', '현대응용윤리학', 'AI철학'],
    coreRecommendedSubjects: ['현대사회와 윤리', '윤리와 사상'],
    recommendedSubjects: ['인간과 철학', '논리와 사고', '인문학과 윤리', '독서와 작문', '윤리문제 탐구'],
    highSchoolSubjects: {
      general: ['현대사회와 윤리', '독서와 작문', '세계사'],
      career: ['윤리와 사상', '인문학과 윤리', '인간과 철학', '논리와 사고', '주제 탐구 독서'],
      convergence: ['윤리문제 탐구', '독서 토론과 글쓰기', '언어생활 탐구']
    },
    similarDepartments: ['종교학과', '응용윤리학과', '윤리교육과', '문화철학전공'],
    certifications: ['로스쿨(LEET) 준비', '논술지도사', '철학상담치료사'],
    relatedJobs: ['변호사·법조인(로스쿨 진출)', '인공지능 윤리연구원', '철학상담가', '대학교수', '출판기획자', '언론기자'],
    relatedSubjectIds: ['s_soc_ethics', 's_soc_ethics_thought', 's_soc_humanities_ethics', 's_gen_philosophy', 's_gen_logic'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '이화여대', '중앙대'],
    careerProspects: 'LEET를 통한 로스쿨(법학전문대학원) 진학률이 매우 높으며, AI 테크기업의 AI 윤리팀, 언론사, 학계로 진출합니다.'
  },
  {
    id: 'dept_hum_chinese',
    name: '중어중문학과',
    category: '인문학 계열',
    summary: '중국어학과 중국 고전 및 현대문학, 중국의 정치·경제·사회 문화를 종합적으로 연구합니다.',
    desc: '글로벌 G2 국가인 중국과의 교류에 필요한 고급 중국어 구사력과 중국의 문화적 맥락을 깊이 이해하는 전문가를 양성합니다.',
    mainCurriculum: ['중국어음운학', '고급중국어회화', '중국현대문학선독', '중국고전문학사', '비즈니스중국어', '중국현대사회론'],
    coreRecommendedSubjects: ['제2외국어(중국어)', '세계사'],
    recommendedSubjects: ['중국어 회화', '중국 문화', '동아시아 역사 기행', '한문', '한문 고전 읽기'],
    highSchoolSubjects: {
      general: ['제2외국어(중국어)', '세계사', '독서와 작문'],
      career: ['중국어 회화', '동아시아 역사 기행', '한문', '한문 고전 읽기', '직무 영어'],
      convergence: ['중국 문화', '독서 토론과 글쓰기', '여행지리']
    },
    similarDepartments: ['중국학과', '중국언어문화학과', '중국통상학과', '동양어문학부'],
    certifications: ['HSK 6급', 'HSKK(고급)', '관광통역안내사(중국어)', '번역사자격증'],
    relatedJobs: ['대중국 해외영업원', '무역상사 전문가', '중국 통번역사', '외교관', '항공사 승무원', '면세점 바이어'],
    relatedSubjectIds: ['s_lang_foreign_gen', 's_lang_foreign_convo', 's_lang_foreign_culture', 's_soc_east_asia', 's_lang_hanmun'],
    topUniversities: ['서울대', '연세대', '고려대', '한국외대', '성균관대', '이화여대'],
    careerProspects: '대중국 무역 및 투자 기업, IT·이커머스 기업(알리바바, 텐센트 제휴 등), 외교부, 항공사, 물류기업에 진출합니다.'
  },
  {
    id: 'dept_hum_french',
    name: '불어불문학과 (프랑스어문학과)',
    category: '인문학 계열',
    summary: '프랑스어와 프랑스 및 프랑코포니(불어권) 국가의 문학, 예술, 문화를 연구합니다.',
    desc: '프랑스의 철학, 예술, 문화적 자산을 바탕으로 유창한 프랑스어 구사력과 인문학적 소양을 함양합니다.',
    mainCurriculum: ['프랑스어학개론', '프랑스문학사', '프랑스현대소설', '고급프랑스어작문', '프랑스문화예술론'],
    coreRecommendedSubjects: ['제2외국어(프랑스어)', '세계사'],
    recommendedSubjects: ['프랑스어 회화', '프랑스어권 문화', '영미 문학 읽기', '세계 문화와 영어'],
    highSchoolSubjects: {
      general: ['제2외국어(프랑스어)', '세계사', '영어Ⅱ'],
      career: ['프랑스어 회화', '영미 문학 읽기', '심화 영어'],
      convergence: ['프랑스어권 문화', '세계 문화와 영어', '미술과 매체']
    },
    similarDepartments: ['프랑스언어문화학과', '유럽문화학과', '불어교육과', '서양어문학부'],
    certifications: ['DELF/DALF(B2/C1)', '관광통역안내사(불어)', '번역능력인정시험'],
    relatedJobs: ['외교관', '유럽 패션·뷰티 바이어', '문화예술 기획자', '국제기구(UNESCO) 연구원', '통번역가'],
    relatedSubjectIds: ['s_lang_foreign_gen', 's_lang_foreign_convo', 's_lang_foreign_culture', 's_soc_world_hist'],
    topUniversities: ['서울대', '연세대', '고려대', '한국외대', '서강대', '성균관대', '이화여대'],
    careerProspects: '유럽계 럭셔리·패션 기업, 주한 프랑스 대사관 및 문화원, 유네스코 등 국제기구, 항공사, 호텔 리조트 진출이 활발합니다.'
  },
  {
    id: 'dept_hum_lib_info',
    name: '문헌정보학과',
    category: '인문학 계열',
    summary: '도서관과 정보센터에서 지식정보 자원을 수집, 분류, 조직, 검색, 보존하고 빅데이터 및 디지털 아카이빙을 연구합니다.',
    desc: '전통적인 문헌 관리뿐만 아니라 디지털 도서관 시스템, 데이터베이스 관리, 온톨로지, 메타데이터 구축 등 인포메이션 사이언스를 다룹니다.',
    mainCurriculum: ['정보조직론(분류·목록)', '정보검색론', '도서관경영론', '디지털도서관구축', '데이터베이스관리', '빅데이터분석'],
    coreRecommendedSubjects: ['독서와 작문', '정보'],
    recommendedSubjects: ['데이터 과학', '주제 탐구 독서', '확률과 통계', '실용 통계', '소프트웨어와 생활'],
    highSchoolSubjects: {
      general: ['독서와 작문', '정보', '확률과 통계', '사회와 문화'],
      career: ['데이터 과학', '주제 탐구 독서', '인공지능 기초'],
      convergence: ['실용 통계', '소프트웨어와 생활', '독서 토론과 글쓰기']
    },
    similarDepartments: ['정보관리학과', '기록관리학과', '디지털인문정보학과'],
    certifications: ['정사서 2급 자격증(무시험 검정)', '데이터분석준전문가(ADsP)', 'SQL개발자(SQLD)', '사서교사 2급'],
    relatedJobs: ['국립중앙도서관 사서', '대학도서관 사서', '기업 정보분석가(Data Analyst)', '기록연구사', '지식관리시스템(KMS) 기획자'],
    relatedSubjectIds: ['s_kor_read', 's_info_info', 's_info_data_sci', 's_math_prob', 's_math_stat_app'],
    topUniversities: ['연세대', '성균관대', '이화여대', '중앙대', '경희대', '부산대', '경북대'],
    careerProspects: '국공립 도서관, 정부출연연구기관, 대기업 정보자료실, IT 포털 지식검색 기획팀 등으로 진출합니다.'
  },
  {
    id: 'dept_hum_anthro',
    name: '문화인류학과',
    category: '인문학 계열',
    summary: '전 세계 다양한 인간 집단의 문화, 관습, 종교, 친족, 언어, 생활양식을 현지 조사(에스노그래피)를 통해 비교 연구합니다.',
    desc: '다문화주의, 글로벌 이주, 원주민 문화, 대중문화 현상을 심층 연구하며 인간에 대한 다양성과 포용적 시각을 배양합니다.',
    mainCurriculum: ['문화인류학개론', '현지조사방법론', '종교인류학', '경제인류학', '영상인류학', '다문화사회와 포용'],
    coreRecommendedSubjects: ['사회와 문화', '세계사'],
    recommendedSubjects: ['세계시민과 지리', '세계 문화와 영어', '여행지리', '주제 탐구 독서'],
    highSchoolSubjects: {
      general: ['사회와 문화', '세계사', '세계시민과 지리', '영어Ⅱ'],
      career: ['주제 탐구 독서', '인문학과 윤리', '국제 관계의 이해'],
      convergence: ['세계 문화와 영어', '여행지리', '사회문제 탐구']
    },
    similarDepartments: ['인류학과', '문화콘텐츠학과', '민속학과', '국제지역학과'],
    certifications: ['사회조사분석사 2급', '다문화사회전문가'],
    relatedJobs: ['다문화 정책연구원', 'UX/사용자 경험 리서처', '국제개발협력 전문가', '방송 다큐멘터리 작가', '문화재연구원'],
    relatedSubjectIds: ['s_soc_culture', 's_soc_world_hist', 's_soc_geo_cit', 's_eng_world_culture', 's_soc_travel_geo'],
    topUniversities: ['서울대', '연세대', '한양대', '덕성여대', '전남대', '강원대'],
    careerProspects: '국제기구, 유니세프, NGO, 빅테크 기업의 글로벌 시장 리서처 및 UX 리서처, 문화체육관광부 등으로 진출합니다.'
  },

  // ==========================================
  // [2] 사회 계열 (02)
  // ==========================================
  {
    id: 'dept_soc_politics',
    name: '정치외교학과',
    category: '사회 계열',
    summary: '국가 권력의 발생과 배분, 통치 구조, 선거, 의회 및 국가 간 외교 안보와 국제 질서를 과학적으로 연구합니다.',
    desc: '정치철학, 비교정치, 한국정치, 국제정치학을 아우르며 합리적 의사결정과 정책 분석, 외교 협상 역량을 배양합니다.',
    mainCurriculum: ['정치학개론', '국제정치학개론', '한국정치론', '비교정치론', '외교정책론', '국제기구론', '선거와 여론'],
    coreRecommendedSubjects: ['정치', '국제 관계의 이해'],
    recommendedSubjects: ['사회와 문화', '세계사', '영어 발표와 토론', '역사로 탐구하는 현대 세계', '법과 사회'],
    highSchoolSubjects: {
      general: ['사회와 문화', '세계사', '현대사회와 윤리', '독서와 작문'],
      career: ['정치', '국제 관계의 이해', '법과 사회', '영어 발표와 토론'],
      convergence: ['역사로 탐구하는 현대 세계', '독서 토론과 글쓰기', '사회문제 탐구']
    },
    similarDepartments: ['외교학과', '국제관계학과', '글로벌정치안보학부', '정치행정학과'],
    certifications: ['외교관후보자 선발시험', '5급 행정고시(일반행정)', '사회조사분석사 2급'],
    relatedJobs: ['외교관', '국회의원 및 보좌관', '정당 당직자', '정치부 기자', '국제기구 직원', '여론조사전문가', '정책연구원'],
    relatedSubjectIds: ['s_soc_politics', 's_soc_intl_rel', 's_soc_culture', 's_eng_disc', 's_soc_modern_world'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '한양대', '중앙대'],
    careerProspects: '외교부, 통일부, 국회, 언론사, 싱크탱크(아산정책연구원, 세종연구소 등), 다국적 기업 대외협력팀 진출이 활발합니다.'
  },
  {
    id: 'dept_soc_admin',
    name: '행정학과',
    category: '사회 계열',
    summary: '정부와 공공기관의 정책 형성, 집행, 평가 과정과 공공조직, 인사, 재무 관리 및 공공서비스 혁신을 연구합니다.',
    desc: '공익 추구와 효율성을 동시에 달성하기 위한 공공 부문의 경영학으로, 국가 기획과 사회문제 해결의 실천적 대안을 모색합니다.',
    mainCurriculum: ['행정학개론', '정책학원론', '조직행태론', '인사행정론', '재무행정론', '지방자치론', '공공빅데이터분석'],
    coreRecommendedSubjects: ['정치', '사회와 문화'],
    recommendedSubjects: ['법과 사회', '경제', '사회문제 탐구', '실용 통계', '독서와 작문'],
    highSchoolSubjects: {
      general: ['사회와 문화', '독서와 작문', '확률과 통계', '현대사회와 윤리'],
      career: ['정치', '법과 사회', '경제', '주제 탐구 독서'],
      convergence: ['사회문제 탐구', '실용 통계', '독서 토론과 글쓰기']
    },
    similarDepartments: ['공공인재학부', '정책학과', '도시행정학과', '경찰행정학과', '소방행정학과'],
    certifications: ['5급 행정고시', '7·9급 공무원', '사회조사분석사 2급', '공인노무사', '정책분석평가사'],
    relatedJobs: ['중앙부처 공무원', '공기업 임직원', '정책분석관', '도시기획가', '공공컨설턴트', '시민단체 활동가'],
    relatedSubjectIds: ['s_soc_politics', 's_soc_culture', 's_soc_law', 's_soc_econ', 's_soc_problem', 's_math_stat_app'],
    topUniversities: ['서울대', '고려대', '연세대', '성균관대', '한양대', '중앙대', '시립대'],
    careerProspects: '중앙행정기관, 지방자치단체, 한국전력·LH 등 공기업, KDI 등 국책연구원, 대기업 대관업무(CR)팀 진출이 두드러집니다.'
  },
  {
    id: 'dept_soc_law',
    name: '법학과 (공공법학부)',
    category: '사회 계열',
    summary: '헌법, 민법, 형법, 상법, 행정법 등 법체계의 기본 원리를 이해하고 사회 정의와 인권을 수호하는 법률 전문가를 양성합니다.',
    desc: '법률 조문의 해석과 판례 분석, 논리적 법적 추론(Legal Mind)을 훈련하여 복잡한 법적 분쟁을 합리적으로 해결하는 역량을 기릅니다.',
    mainCurriculum: ['헌법학', '민법총칙/물권법/채권법', '형법총론/각론', '행정법', '상법', '형사소송법', '민사소송법', '인권과 법'],
    coreRecommendedSubjects: ['법과 사회', '정치'],
    recommendedSubjects: ['현대사회와 윤리', '윤리와 사상', '논리와 사고', '독서와 작문', '사회문제 탐구'],
    highSchoolSubjects: {
      general: ['현대사회와 윤리', '사회와 문화', '독서와 작문'],
      career: ['법과 사회', '정치', '윤리와 사상', '논리와 사고', '주제 탐구 독서'],
      convergence: ['사회문제 탐구', '독서 토론과 글쓰기', '언어생활과 한자']
    },
    similarDepartments: ['공공법학부', '자율전공학부(로스쿨트랙)', '경찰법학과', '지식재산학과'],
    certifications: ['로스쿨(LEET) 후 변호사 자격', '법무사', '공인노무사', '감정평가사', '손해사정사', '변리사'],
    relatedJobs: ['판사·검사·변호사(로스쿨 거쳐 취득)', '기업 법무팀 변호사/자문역', '공인노무사', '법원 사무관', '법제처 연구원'],
    relatedSubjectIds: ['s_soc_law', 's_soc_politics', 's_soc_ethics', 's_gen_logic', 's_kor_read', 's_lang_hanmun_life'],
    topUniversities: ['경희대', '동국대', '국민대', '홍익대', '숭실대', '단국대', '인하대'],
    careerProspects: '로스쿨 진학률이 압도적이며, 4대 대형 로펌, 대기업 사내 법무팀, 금융감독원 및 금융공기업, 공직으로 진출합니다.'
  },
  {
    id: 'dept_soc_media',
    name: '신문방송학과 (미디어커뮤니케이션학과)',
    category: '사회 계열',
    summary: '저널리즘, 방송영상, 디지털 인터랙티브 미디어, 광고PR, 대중문화의 메커니즘을 분석하고 창의적 미디어 콘텐츠를 제작합니다.',
    desc: '뉴미디어 환경에서의 여론 형성, 알고리즘 플랫폼, 미디어 리터러시, 영상 연출 및 스토리텔링 제작 능력을 융합 교육합니다.',
    mainCurriculum: ['커뮤니케이션이론', '취재보도론', '방송영상제작실습', '디지털미디어론', '광고기획론', '미디어빅데이터분석'],
    coreRecommendedSubjects: ['화법과 언어', '사회와 문화'],
    recommendedSubjects: ['매체 의사소통', '문학과 영상', '미디어 영어', '사회문제 탐구', '정보'],
    highSchoolSubjects: {
      general: ['화법과 언어', '사회와 문화', '독서와 작문', '영어Ⅱ'],
      career: ['문학과 영상', '주제 탐구 독서', '정치', '데이터 과학'],
      convergence: ['매체 의사소통', '미디어 영어', '사회문제 탐구', '음악과 미디어']
    },
    similarDepartments: ['언론정보학과', '방송영상학과', '미디어학부', '광고홍보학과', '디지털미디어학과'],
    certifications: ['무대예술전문인', '사회조사분석사 2급', '디지털영상편집 1급', '컴퓨터그래픽스운용기능사'],
    relatedJobs: ['방송기자·PD', '유튜브/OTT 크리에이터', '콘텐츠 기획자', '광고 AE', '홍보(PR) 전문가', '미디어 데이터 분석가'],
    relatedSubjectIds: ['s_kor_speech', 's_soc_culture', 's_kor_media_comm', 's_kor_media_lit', 's_eng_media'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '한양대', '중앙대'],
    careerProspects: '지상파·종편 방송국, CJ ENM, 넷플릭스 등 OTT 플랫폼, 제일기획 등 대형 광고기획사, 포털(네이버/카카오)로 진출합니다.'
  },
  {
    id: 'dept_soc_psychology',
    name: '심리학과',
    category: '사회 계열',
    summary: '인간의 마음과 뇌인지 메커니즘, 성격, 행동, 감정을 과학적 실험과 통계적 데이터 분석을 통해 탐구합니다.',
    desc: '임상/상담심리뿐만 아니라 인지심리, 뇌과학, 산업/조직심리, UX(사용자경험), 소비자심리 등 폭넓은 응용 분야를 가집니다.',
    mainCurriculum: ['심리학개론', '심리통계 및 실험설계', '인지심리학', '발달심리학', '이상심리학', '상담심리학', '소비자행동론'],
    coreRecommendedSubjects: ['사회와 문화', '확률과 통계'],
    recommendedSubjects: ['인간과 심리', '생명과학', '실용 통계', '데이터 과학', '인공지능 기초'],
    highSchoolSubjects: {
      general: ['사회와 문화', '확률과 통계', '생명과학', '독서와 작문'],
      career: ['인간과 심리', '세포와 물질대사', '데이터 과학', '주제 탐구 독서'],
      convergence: ['실용 통계', '사회문제 탐구', '소프트웨어와 생활']
    },
    similarDepartments: ['상담심리학과', '임상심리학과', '인지과학전공', '아동심리학과'],
    certifications: ['임상심리사 1·2급(산업인력공단)', '정신건강임상심리사(보건복지부)', '전문상담교사 2급', '청소년상담사 2급'],
    relatedJobs: ['임상심리전문가(병원)', '전문상담교사', 'UX/UI 리서처', '기업 인사(HRD) 전문가', '광고기획 소비자행동분석가'],
    relatedSubjectIds: ['s_soc_culture', 's_math_prob', 's_gen_psychology', 's_sci_bio', 's_math_stat_app'],
    topUniversities: ['서울대', '연세대', '고려대', '성균관대', '서강대', '중앙대', '이화여대'],
    careerProspects: '종합병원 정신건강의학과, 교육청 및 청소년상담복지센터, IT 빅테크 기업의 UX 디자인팀, 대기업 인사팀에 진출합니다.'
  },
  {
    id: 'dept_soc_welfare',
    name: '사회복지학과',
    category: '사회 계열',
    summary: '인간의 존엄성과 사회적 정의를 실현하기 위해 아동, 노인, 장애인, 다문화 등 사회적 취약계층의 복지 증진과 사회보장 정책을 연구합니다.',
    desc: '사회복지 실천기술과 사회보장론, 지역사회복지, 사회복지 정책 및 행정을 학습하여 따뜻한 공동체 구축에 기여합니다.',
    mainCurriculum: ['사회복지개론', '인간행동과사회환경', '사회복지실천론', '지역사회복지론', '사회보장론', '사회복지정책론'],
    coreRecommendedSubjects: ['사회와 문화', '현대사회와 윤리'],
    recommendedSubjects: ['사회문제 탐구', '인간과 심리', '생애 설계와 자립', '정치', '법과 사회'],
    highSchoolSubjects: {
      general: ['사회와 문화', '현대사회와 윤리', '독서와 작문'],
      career: ['정치', '법과 사회', '인간과 심리', '주제 탐구 독서'],
      convergence: ['사회문제 탐구', '생애 설계와 자립', '독서 토론과 글쓰기']
    },
    similarDepartments: ['사회복지학부', '아동복지학과', '노인복지학과', '가족복지학과', '재활복지학과'],
    certifications: ['사회복지사 1급(국가전문자격)', '정신건강사회복지사', '의료사회복지사', '학교사회복지사'],
    relatedJobs: ['사회복지관 사회복지사', '의료사회복지사(종합병원)', '사회복지 전담 공무원', '국민연금·건강보험공단 직원', 'NGO 기획자'],
    relatedSubjectIds: ['s_soc_culture', 's_soc_ethics', 's_soc_problem', 's_gen_psychology', 's_tech_life_design'],
    topUniversities: ['서울대', '연세대', '중앙대', '이화여대', '숭실대', '서울시립대', '가톨릭대'],
    careerProspects: '보건복지부, 지자체 사회복지직, 종합사회복지관, 국민연금공단, 국제구호단체(월드비전, 굿네이버스) 진출이 활발합니다.'
  },
  {
    id: 'dept_soc_police',
    name: '경찰행정학과',
    category: '사회 계열',
    summary: '국민의 생명과 재산을 보호하고 범죄 예방, 범죄 심리 분석(프로파일링), 경찰 수사 및 치안 행정을 전문적으로 연구합니다.',
    desc: '형법, 형사소송법, 범죄학, 경찰학, 무도 실기 등을 체계적으로 교육하여 법질서 확립과 사회 안전을 책임지는 정예 경찰을 양성합니다.',
    mainCurriculum: ['경찰학개론', '범죄학', '형법총론/각론', '형사소송법', '범죄심리학', '과학수사론', '경찰행정법', '체포술'],
    coreRecommendedSubjects: ['법과 사회', '정치'],
    recommendedSubjects: ['체육 1·2', '운동과 건강', '인간과 심리', '현대사회와 윤리', '정보'],
    highSchoolSubjects: {
      general: ['법과 사회', '체육 1·2', '사회와 문화', '현대사회와 윤리'],
      career: ['정치', '인간과 심리', '운동과 건강', '정보과학'],
      convergence: ['사회문제 탐구', '스포츠 생활', '소프트웨어와 생활']
    },
    similarDepartments: ['경찰학과', '자치경찰학과', '경찰경호학과', '해양경찰학과', '사이버보안경찰학과'],
    certifications: ['경찰간부후보생 시험', '순경 공채', '경비지도사', '신변보호사', '무도 단증'],
    relatedJobs: ['경찰관(경위/순경)', '해양경찰관', '국가정보원 요원', '범죄심리분석관(프로파일러)', '대통령경호처 요원', '기업 보안책임자'],
    relatedSubjectIds: ['s_soc_law', 's_soc_politics', 's_pe_pe1_2', 's_pe_exercise_health', 's_gen_psychology'],
    topUniversities: ['경찰대학', '동국대', '경기대', '용인대', '계명대', '순천향대', '원광대'],
    careerProspects: '경찰청, 해양경찰청, 대통령경호처, 교정본부, 대기업 보안실, 사이버수사대 등으로 진출합니다.'
  },

  // ==========================================
  // [3] 경상 계열 (03)
  // ==========================================
  {
    id: 'dept_biz_management',
    name: '경영학과',
    category: '경상 계열',
    summary: '기업 조직의 효율적 운영을 위해 마케팅, 재무, 회계, 인사조직, 생산관리, 경영정보(MIS), 벤처창업을 종합적으로 연구합니다.',
    desc: '글로벌 비즈니스 환경에서 데이터를 기반으로 한 전략적 의사결정과 ESG 지속가능경영, 혁신적 비즈니스 모델을 창출하는 리더를 양성합니다.',
    mainCurriculum: ['경영학원론', '마케팅원론', '재무관리', '회계원리', '조직행동론', '경영정보시스템', '전략경영', '경영과학'],
    coreRecommendedSubjects: ['대수', '확률과 통계'],
    recommendedSubjects: ['경제 수학', '경제', '금융과 경제생활', '영어 독해와 작문', '데이터 과학'],
    highSchoolSubjects: {
      general: ['대수', '확률과 통계', '독서와 작문', '영어Ⅱ'],
      career: ['경제 수학', '경제', '데이터 과학', '직무 영어', '주제 탐구 독서'],
      convergence: ['금융과 경제생활', '실용 통계', '소프트웨어와 생활']
    },
    similarDepartments: ['글로벌경영학과', '경영정보학과(MIS)', '기술경영학과', '벤처창업학과', '마케팅학과'],
    certifications: ['공인회계사(KICPA/AICPA)', '경영지도사', '국제재무분석사(CFA)', '데이터분석전문가', '물류관리사'],
    relatedJobs: ['경영컨설턴트', '투자금융(IB) 전문가', '마케터·브랜드매니저', '기업 재무/기획 담당자', '스타트업 창업가'],
    relatedSubjectIds: ['s_math_alg', 's_math_prob', 's_math_econ', 's_soc_econ', 's_soc_finance', 's_info_data_sci'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '한양대', '중앙대'],
    careerProspects: '국내외 대기업 기획/마케팅/재무팀, 외국계 컨설팅사(MBB), 투자은행, 회계법인, 유니콘 스타트업 진출이 활발합니다.'
  },
  {
    id: 'dept_biz_economics',
    name: '경제학과',
    category: '경상 계열',
    summary: '희소한 자원의 효율적 배분, 시장 가격 기구, 거시경제 성장, 금리, 환율, 통화정책 및 계량경제 모델을 엄밀히 분석합니다.',
    desc: '수학적·통계적 모델링을 통해 가계, 기업, 정부의 경제 행위를 분석하고 국가 경제 정책과 금융 시장의 파급 효과를 예측합니다.',
    mainCurriculum: ['미시경제학', '거시경제학', '계량경제학', '화폐금융론', '재정학', '국제무역론', '게임이론과 응용'],
    coreRecommendedSubjects: ['미적분Ⅰ', '확률과 통계', '경제'],
    recommendedSubjects: ['경제 수학', '미적분Ⅱ', '금융과 경제생활', '실용 통계', '데이터 과학'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '확률과 통계', '사회와 문화'],
      career: ['경제', '경제 수학', '미적분Ⅱ', '데이터 과학', '인간과 경제활동'],
      convergence: ['금융과 경제생활', '실용 통계', '독서 토론과 글쓰기']
    },
    similarDepartments: ['글로벌경제학과', '응용경제학과', '농업경제학과', '금융경제학과'],
    certifications: ['한국은행 및 금융공기업 필기시험', 'CFA', 'FRM(국제재무위험관리사)', '공인회계사', '감정평가사'],
    relatedJobs: ['한국은행/금융감독원 조사역', '거시경제 이코노미스트', '채권/파생상품 퀀트 애널리스트', '기획재정부 정책관'],
    relatedSubjectIds: ['s_math_calc1', 's_math_prob', 's_soc_econ', 's_math_econ', 's_soc_finance', 's_math_stat_app'],
    topUniversities: ['서울대', '연세대', '고려대', '서강대', '성균관대', '한양대', '중앙대'],
    careerProspects: '한국은행, 산업은행, 수출입은행 등 A매치 금융공기업, 증권사 리서치센터, KDI, 국회예산정책처 등으로 진출합니다.'
  },
  {
    id: 'dept_biz_trade',
    name: '국제통상학과 (무역학과)',
    category: '경상 계열',
    summary: '글로벌 국가 간 상품, 서비스, 자본의 이동과 통상 규범(WTO, FTA), 글로벌 공급망, 외환 및 해외 시장 개척을 연구합니다.',
    desc: '국제무역계약, 해상운송보험, 무역결제, 다국적기업 경영전략, 글로벌 통상 분쟁 해결 역량을 갖춘 무역 실무 전문가를 양성합니다.',
    mainCurriculum: ['국제통상론', '무역실무계약론', '국제마케팅', '해상보험론', '국제금융론', '통상법규론', '비즈니스외국어'],
    coreRecommendedSubjects: ['경제', '영어Ⅱ'],
    recommendedSubjects: ['직무 영어', '국제 관계의 이해', '세계 문화와 영어', '세계시민과 지리', '금융과 경제생활'],
    highSchoolSubjects: {
      general: ['영어Ⅰ', '영어Ⅱ', '세계시민과 지리', '대수'],
      career: ['경제', '직무 영어', '국제 관계의 이해', '경제 수학'],
      convergence: ['세계 문화와 영어', '금융과 경제생활', '여행지리']
    },
    similarDepartments: ['무역학과', '국제경영학과', '글로벌비즈니스학과', '통상무역전공'],
    certifications: ['관세사(전문자격시험)', '국제무역사 1급', '무역영어 1급', '외환전문역', '물류관리사'],
    relatedJobs: ['관세사', '해외영업 전문가', '무역상사 바이어', '글로벌 SCM/물류관리자', 'KOTRA/무역협회 연구원'],
    relatedSubjectIds: ['s_soc_econ', 's_eng_eng2', 's_eng_job', 's_soc_intl_rel', 's_eng_world_culture', 's_soc_finance'],
    topUniversities: ['한국외대', '고려대', '성균관대', '경희대', '중앙대', '부산대'],
    careerProspects: '종합상사(포스코인터내셔널, 현대코퍼레이션 등), KOTRA, 관세법인, 해운물류 대기업(HMM, 현대글로비스)에 진출합니다.'
  },
  {
    id: 'dept_biz_accounting',
    name: '회계세무학과',
    category: '경상 계열',
    summary: '기업의 재무 상태와 경영 성과를 측정·보고하는 재무회계, 관리회계, 세법 및 세무조정, 회계감사를 정밀하게 다룹니다.',
    desc: '자본시장의 투명성을 확보하고 기업의 세무 리스크를 관리하며 합리적인 내부 원가 통제 시스템을 설계하는 회계 전문 인력을 양성합니다.',
    mainCurriculum: ['중급재무회계', '고급회계', '원가관리회계', '세법개론(법인세/소득세/부가세)', '회계감사론', '회계정보시스템'],
    coreRecommendedSubjects: ['대수', '확률과 통계'],
    recommendedSubjects: ['경제 수학', '경제', '금융과 경제생활', '실용 통계', '법과 사회'],
    highSchoolSubjects: {
      general: ['대수', '확률과 통계', '독서와 작문'],
      career: ['경제 수학', '경제', '법과 사회', '직무 수학'],
      convergence: ['금융과 경제생활', '실용 통계', '소프트웨어와 생활']
    },
    similarDepartments: ['회계학과', '세무학과', '재무금융회계학부', '경영회계학부'],
    certifications: ['공인회계사(CPA)', '세무사(CTA)', '재경관리사', '전산세무 1급', '미국공인회계사(AICPA)'],
    relatedJobs: ['공인회계사(회계법인 감사/M&A)', '세무사', '국세청 세무공무원', '대기업 재경팀/세무팀장', '내부감사관'],
    relatedSubjectIds: ['s_math_alg', 's_math_prob', 's_math_econ', 's_soc_econ', 's_soc_finance', 's_soc_law'],
    topUniversities: ['서울시립대(세무학과)', '성균관대', '중앙대', '경희대', '숭실대', '홍익대'],
    careerProspects: '4대 메이저 회계법인(삼일, 삼정, 안진, 한영), 대형 세무법인, 국세청, 대기업 재무본부로 100%에 가까운 높은 취업률을 자랑합니다.'
  },

  // ==========================================
  // [4] 사범 계열 (04)
  // ==========================================
  {
    id: 'dept_edu_korean',
    name: '국어교육과',
    category: '사범 계열',
    summary: '중·고등학교 국어 교과를 효과적으로 가르치기 위한 국어학, 국문학, 국어과 교육과정 및 교수학습법을 연구합니다.',
    desc: '미래 인재들의 올바른 언어 소통 능력과 비판적 문해력, 심미적 감수성을 길러줄 전문 중등 국어교사를 양성합니다.',
    mainCurriculum: ['국어교육론', '국어교재연구및지도법', '국어음운교육론', '고전문학교육론', '현대문학교육론', '작문교육론'],
    coreRecommendedSubjects: ['문학', '독서와 작문', '화법과 언어'],
    recommendedSubjects: ['교육의 이해', '주제 탐구 독서', '언어생활 탐구', '문학과 영상', '인간과 심리'],
    highSchoolSubjects: {
      general: ['문학', '독서와 작문', '화법과 언어', '세계사'],
      career: ['교육의 이해', '주제 탐구 독서', '인간과 심리', '문학과 영상'],
      convergence: ['독서 토론과 글쓰기', '매체 의사소통', '언어생활 탐구']
    },
    similarDepartments: ['교육학과', '초등교육과', '한국어교육과', '문예창작학과'],
    certifications: ['중등학교 2급 정교사(국어) 자격증', '한국어교원 자격증'],
    relatedJobs: ['중·고등학교 국어교사', 'EBS 국어강사', '교육출판 교재기획자', '교육청 장학사', '한국어 교육 전문가'],
    relatedSubjectIds: ['s_kor_lit', 's_kor_read', 's_kor_speech', 's_gen_education', 's_kor_theme', 's_gen_psychology'],
    topUniversities: ['서울대', '고려대', '한국교원대', '이화여대', '공주대', '경북대', '부산대'],
    careerProspects: '국공립·사립 중고등학교 교원 임용시험 합격, 천재교육·비상 등 교육출판사, 에듀테크 기업으로 진출합니다.'
  },
  {
    id: 'dept_edu_math',
    name: '수학교육과',
    category: '사범 계열',
    summary: '중·고등학교 수학 교육과정 운영, 해석학, 대수학, 기하학, 위상수학 및 수학교구와 공학적 도구 활용 수업을 연구합니다.',
    desc: '학생들의 수학적 사고력과 논리적 문제 해결 능력을 신장시키고 수포자 없는 흥미로운 수업을 이끄는 전문 수학교사를 양성합니다.',
    mainCurriculum: ['수학교육론', '수학교재연구및지도법', '해석학', '현대대수학', '미분기하학', '위상수학', '수학사'],
    coreRecommendedSubjects: ['대수', '미적분Ⅰ', '기하', '확률과 통계'],
    recommendedSubjects: ['미적분Ⅱ', '교육의 이해', '인공지능 수학', '수학과 문화', '수학과제 탐구'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '확률과 통계'],
      career: ['기하', '미적분Ⅱ', '교육의 이해', '인공지능 수학'],
      convergence: ['수학과 문화', '수학과제 탐구', '실용 통계']
    },
    similarDepartments: ['수학과', '교육학과', '정보통계학과'],
    certifications: ['중등학교 2급 정교사(수학) 자격증'],
    relatedJobs: ['중·고등학교 수학교사', '수학 교재 개발자', '교육공학 연구원', '학습분석 AI 엔지니어'],
    relatedSubjectIds: ['s_math_alg', 's_math_calc1', 's_math_geo', 's_math_prob', 's_math_calc2', 's_gen_education'],
    topUniversities: ['서울대', '고려대', '한양대', '한국교원대', '이화여대', '공주대', '경북대'],
    careerProspects: '공립 중등교사 임용시험, 유명 입시학원 및 인강 강사, 수학 전문 출판사, 교육과정평가원 연구원으로 진출합니다.'
  },
  {
    id: 'dept_edu_science',
    name: '물리/화학/생물/지구과학교육과',
    category: '사범 계열',
    summary: '자연현상에 대한 과학적 탐구 실험 지도법, 과학철학 및 물·화·생·지 심화 전공 지식을 갖춘 중등 과학교사를 양성합니다.',
    desc: '학생들의 과학적 호기심을 자극하고 창의융합 실험 및 디지털 과학 탐구 수업을 주도하는 과학교육 전문가를 육성합니다.',
    mainCurriculum: ['과학교육론', '물리/화학/생물/지구과학교재연구', '일반물리학/화학/생물학/지구과학실험', '양자물리/유기화학/유전학/천문학'],
    coreRecommendedSubjects: ['물리학', '화학', '생명과학', '지구과학', '미적분Ⅰ'],
    recommendedSubjects: ['역학과 에너지', '물질과 에너지', '세포와 물질대사', '지구시스템과학', '교육의 이해', '융합과학 탐구'],
    highSchoolSubjects: {
      general: ['물리학', '화학', '생명과학', '지구과학', '미적분Ⅰ'],
      career: ['역학과 에너지', '물질과 에너지', '세포와 물질대사', '지구시스템과학', '교육의 이해'],
      convergence: ['융합과학 탐구', '과학의 역사와 문화', '기후변화와 환경생태']
    },
    similarDepartments: ['과학교육학부', '물리학과', '화학과', '생명과학과', '지구환경과학과'],
    certifications: ['중등학교 2급 정교사(물리/화학/생물/지구과학) 자격증'],
    relatedJobs: ['중·고등학교 과학교사', '국립과학관 큐레이터/해설사', '과학문화재단 연구원', '과학 교구재 개발자'],
    relatedSubjectIds: ['s_sci_phy', 's_sci_chem', 's_sci_bio', 's_sci_earth', 's_gen_education', 's_sci_convergence_exp'],
    topUniversities: ['서울대', '한국교원대', '공주대', '경북대', '부산대', '전남대', '충남대'],
    careerProspects: '전국 시도교육청 중등교사 임용, 국립중앙과학관, 한국창의재단, EBS 과학교육 콘텐츠 개발팀에 진출합니다.'
  },
  {
    id: 'dept_edu_elementary',
    name: '초등교육과',
    category: '사범 계열',
    summary: '초등학교 전 과목(국·영·수·사·과·음·미·체·실과 등)을 포괄적으로 지도하고 아동의 전인적 발달을 돕는 초등교사를 양성합니다.',
    desc: '아동발달심리, 학급경영, 융합 수업 설계, 기초학력 지도 및 생활지도 역량을 균형 있게 기르는 특수 목적 학과입니다.',
    mainCurriculum: ['초등교육학개론', '아동발달과교육', '초등국어/수학/사회/과학/음악/미술/체육과교육론', '학급경영론', '수업실습'],
    coreRecommendedSubjects: ['독서와 작문', '대수', '통합사회 1·2', '통합과학 1·2'],
    recommendedSubjects: ['교육의 이해', '아동발달과 부모', '인간과 심리', '음악 연주와 창작', '미술 창작', '운동과 건강'],
    highSchoolSubjects: {
      general: ['독서와 작문', '대수', '영어Ⅰ', '음악', '미술', '체육1'],
      career: ['교육의 이해', '아동발달과 부모', '인간과 심리', '음악 연주와 창작', '미술 창작'],
      convergence: ['독서 토론과 글쓰기', '소프트웨어와 생활', '음악과 미디어']
    },
    similarDepartments: ['교육대학교(전국 10개 교대)', '유아교육과', '특수교육과'],
    certifications: ['초등학교 2급 정교사 자격증'],
    relatedJobs: ['국·공립 및 사립 초등학교 교사', '교육전문직(장학사/장학관)', '아동학습교재 기획자', '교육청 연구원'],
    relatedSubjectIds: ['s_gen_education', 's_tech_child_parent', 's_gen_psychology', 's_art_music', 's_art_art', 's_pe_pe1_2'],
    topUniversities: ['서울교대', '경인교대', '한국교원대(초등교육)', '이화여대(초등교육)', '공주교대', '부산교대', '대구교대'],
    careerProspects: '초등교원 임용시험 합격률이 매우 높으며 교장·교감, 교육부 및 교육청 장학관으로 성장합니다.'
  },

  // ==========================================
  // [5] 자연과학 계열 (05)
  // ==========================================
  {
    id: 'dept_sci_physics',
    name: '물리학과',
    category: '자연과학 계열',
    summary: '시공간, 소립자, 고체물리, 광학, 양자역학 등 우주와 자연계의 근본 법칙을 수학적 모델과 정밀한 실험으로 규명합니다.',
    desc: '반도체, 나노소자, 양자컴퓨팅 등 차세대 첨단 산업 기술의 기초가 되는 이론 물리학과 응용 물리학을 심도 있게 탐구합니다.',
    mainCurriculum: ['고전역학', '전자기학Ⅰ·Ⅱ', '양자역학Ⅰ·Ⅱ', '열및통계물리학', '고체물리학', '현대물리실험', '광학'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하'],
    recommendedSubjects: ['역학과 에너지', '전자기와 양자', '인공지능 수학', '화학', '정보'],
    highSchoolSubjects: {
      general: ['물리학', '화학', '미적분Ⅰ', '대수'],
      career: ['역학과 에너지', '전자기와 양자', '미적분Ⅱ', '기하', '정보과학'],
      convergence: ['융합과학 탐구', '수학과제 탐구', '과학의 역사와 문화']
    },
    similarDepartments: ['응용물리학과', '반도체물리학과', '나노물리학과', '천문우주학과'],
    certifications: ['방사선동위원소취급자일반면허(RI)', '광학기사', '반도체설계기사'],
    relatedJobs: ['물리학 연구원', '반도체 소자 연구원(삼성/SK)', '양자컴퓨팅 알고리즘 개발자', '광학렌즈 설계원', '국방과학연구원'],
    relatedSubjectIds: ['s_sci_phy', 's_math_calc1', 's_math_calc2', 's_math_geo', 's_sci_dyn_energy', 's_sci_em_quantum'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '연세대', '고려대', '성균관대', 'UNIST'],
    careerProspects: '한국표준과학연구원, 기초과학연구원(IBS), 삼성전자·SK하이닉스 반도체 연구소, 해외 석박사 진학이 매우 활발합니다.'
  },
  {
    id: 'dept_sci_chemistry',
    name: '화학과',
    category: '자연과학 계열',
    summary: '원자와 분자 수준에서 물질의 합성, 구조, 반응성, 촉매, 에너지 변환을 분자 오비탈과 양자화학적 원리로 탐구합니다.',
    desc: '신약 개발, 2차전지 배터리 전해질, 유기발광다이오드(OLED), 친환경 촉매 등 첨단 정밀화학 및 바이오화학을 선도합니다.',
    mainCurriculum: ['유기화학Ⅰ·Ⅱ', '물리화학Ⅰ·Ⅱ', '무기화학Ⅰ·Ⅱ', '분석화학 및 기기분석', '생화학', '고분자화학'],
    coreRecommendedSubjects: ['화학', '미적분Ⅰ'],
    recommendedSubjects: ['화학 반응의 세계', '물질과 에너지', '생명과학', '미적분Ⅱ', '물리학'],
    highSchoolSubjects: {
      general: ['화학', '물리학', '생명과학', '미적분Ⅰ'],
      career: ['화학 반응의 세계', '물질과 에너지', '세포와 물질대사', '미적분Ⅱ'],
      convergence: ['융합과학 탐구', '화학 실험', '기후변화와 환경생태']
    },
    similarDepartments: ['응용화학과', '나노화학과', '생화학과', '화학공학과', '고분자공학과'],
    certifications: ['화학분석기사', '위험물산업기사', '대기환경기사', '수질환경기사'],
    relatedJobs: ['신약 합성 연구원', '배터리 소재 개발원', '화장품 소재 연구원', '국립과학수사연구원(국과수) 감정관', '정밀화학 연구원'],
    relatedSubjectIds: ['s_sci_chem', 's_math_calc1', 's_sci_chem_rxn', 's_sci_matter_energy', 's_sci_bio'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '연세대', '고려대', '성균관대', '한양대'],
    careerProspects: 'LG화학, 삼성SDI, SK이노베이션, 한미약품, 유한양행, 국과수, 한국화학연구원 등으로 진출합니다.'
  },
  {
    id: 'dept_sci_biology',
    name: '생명과학과',
    category: '자연과학 계열',
    summary: '세포 생물학, 분자유전학, 면역학, 뇌신경과학, 생태학 등 생명체의 기본 메커니즘과 유전체 정보(DNA)를 분석합니다.',
    desc: '바이오 헬스케어, CRISPR 유전자 교정, 면역 항암 치료제, 합성생물학 등 21세기 바이오 혁명의 핵심 인재를 양성합니다.',
    mainCurriculum: ['분자생물학', '세포생물학', '유전학', '생화학', '면역학', '발생생물학', '미생물학', '생물정보학'],
    coreRecommendedSubjects: ['생명과학', '화학'],
    recommendedSubjects: ['생물의 유전', '세포와 물질대사', '확률과 통계', '데이터 과학', '화학 반응의 세계'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '확률과 통계', '독서와 작문'],
      career: ['생물의 유전', '세포와 물질대사', '화학 반응의 세계', '데이터 과학'],
      convergence: ['융합과학 탐구', '생명과학 실험', '실용 통계']
    },
    similarDepartments: ['생화학과', '분자생명공학과', '미생물학과', '생명정보학과', '뇌인지과학과'],
    certifications: ['생물공학기사', '임상병리사', '데이터분석준전문가(ADsP)'],
    relatedJobs: ['바이오 신약 연구원', '유전자 치료제 개발자', '생물정보학(Bioinformatics) 분석가', '식약처 연구관', '의학전문대학원 진학'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_sci_genetics', 's_sci_cell_metabolism', 's_math_prob', 's_info_data_sci'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '연세대', '고려대', '성균관대', '한양대'],
    careerProspects: '삼성바이오로직스, 셀트리온, SK바이오팜, 국립보건연구원, 한국생명공학연구원, 국내외 의약학 대학원으로 진출합니다.'
  },
  {
    id: 'dept_sci_math',
    name: '수학과',
    category: '자연과학 계열',
    summary: '수와 공간, 변화와 구조의 순수 논리 체계를 구축하고 암호학, 금융수학, 인공지능 알고리즘의 기초 이론을 연구합니다.',
    desc: '엄밀한 수학적 증명 능력을 바탕으로 양자암호, 빅데이터 최적화, 딥러닝 손실함수 해석 등 첨단 산업의 핵심 솔루션을 제공합니다.',
    mainCurriculum: ['해석학Ⅰ·Ⅱ', '선형대수학Ⅰ·Ⅱ', '현대대수학', '위상수학', '미분방정식', '복소함수론', '암호수학', '수치해석학'],
    coreRecommendedSubjects: ['대수', '미적분Ⅰ', '미적분Ⅱ', '기하', '확률과 통계'],
    recommendedSubjects: ['인공지능 수학', '정보', '데이터 과학', '수학과제 탐구', '물리학'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '확률과 통계', '물리학'],
      career: ['기하', '미적분Ⅱ', '인공지능 수학', '정보과학', '데이터 과학'],
      convergence: ['수학과제 탐구', '수학과 문화', '실용 통계']
    },
    similarDepartments: ['응용수학과', '정보수학과', '금융수학과', '수리과학부', '전산수학과'],
    certifications: ['보험계리사(1·2차)', '빅데이터분석기사', 'SQL개발자(SQLD)', '정보처리기사'],
    relatedJobs: ['AI/딥러닝 수학 알고리즘 연구원', '금융공학 퀀트(Quant)', '보험계리사', '블록체인 양자암호 연구원', '데이터사이언티스트'],
    relatedSubjectIds: ['s_math_alg', 's_math_calc1', 's_math_calc2', 's_math_geo', 's_math_prob', 's_math_ai', 's_info_info'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '연세대', '고려대', '서강대', '성균관대'],
    careerProspects: '금융사 퀀트 트레이더, 국내외 AI 연구소, 암호보안 스타트업, 한국고등과학원(KIAS), 글로벌 빅테크 기업에 진출합니다.'
  },
  {
    id: 'dept_sci_astronomy',
    name: '천문우주학과',
    category: '자연과학 계열',
    summary: '태양계 행성, 외계 행성 탐색, 별과 은하의 진화, 블랙홀, 우주론 및 우주망원경 관측 데이터를 분석합니다.',
    desc: '누리호와 다누리호 등 대한민국 우주 개발 시대에 발맞추어 인공위성 궤도 계산, 우주 쓰레기 감시, 심우주 탐사를 연구합니다.',
    mainCurriculum: ['기초천문학', '천체물리학', '항성구조및진화론', '은하와우주론', '관측천문학실험', '우주비행역학', '위성원격탐사'],
    coreRecommendedSubjects: ['물리학', '지구과학', '미적분Ⅰ', '미적분Ⅱ'],
    recommendedSubjects: ['행성우주과학', '기하', '역학과 에너지', '정보', '전자기와 양자'],
    highSchoolSubjects: {
      general: ['물리학', '지구과학', '미적분Ⅰ', '대수'],
      career: ['행성우주과학', '미적분Ⅱ', '기하', '역학과 에너지', '정보과학'],
      convergence: ['융합과학 탐구', '지구과학 실험', '과학의 역사와 문화']
    },
    similarDepartments: ['우주과학과', '항공우주공학과', '지구천문학부', '우주탐사학과'],
    certifications: ['전파전자통신기사', '정보처리기사', '기상기사'],
    relatedJobs: ['한국항공우주연구원(KARI) 연구원', '한국천문연구원(KASI) 천문학자', '인공위성 관제원', '우주환경 예보관'],
    relatedSubjectIds: ['s_sci_phy', 's_sci_earth', 's_math_calc1', 's_math_calc2', 's_sci_space', 's_math_geo'],
    topUniversities: ['서울대', '연세대', '경희대', '세종대', '충남대', '충북대'],
    careerProspects: '우주항공청(KASA), 한국천문연구원, 한국항공우주연구원, 한화에어로스페이스, LIG넥스원 등 뉴스페이스 기업에 진출합니다.'
  },

  // ==========================================
  // [6] 공학 계열 (06)
  // ==========================================
  {
    id: 'dept_eng_computer',
    name: '컴퓨터공학과 (소프트웨어학부)',
    category: '공학 계열',
    summary: '운영체제, 컴퓨터 구조, 자료구조, 알고리즘, 분산 시스템, 인공지능, 클라우드, 네트워크 및 보안 소프트웨어를 설계하고 개발합니다.',
    desc: '하드웨어와 소프트웨어를 유기적으로 결합하여 대규모 트래픽을 처리하는 분산 서버 시스템과 풀스택 애플리케이션을 구축합니다.',
    mainCurriculum: ['자료구조', '알고리즘', '컴퓨터구조', '운영체제', '시스템프로그래밍', '데이터베이스', '컴퓨터네트워크', '소프트웨어공학'],
    coreRecommendedSubjects: ['미적분Ⅰ', '미적분Ⅱ', '기하', '정보'],
    recommendedSubjects: ['인공지능 수학', '확률과 통계', '데이터 과학', '인공지능 기초', '물리학'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '확률과 통계', '정보', '물리학'],
      career: ['미적분Ⅱ', '기하', '인공지능 수학', '인공지능 기초', '데이터 과학'],
      convergence: ['소프트웨어와 생활', '실용 통계', '수학과제 탐구']
    },
    similarDepartments: ['소프트웨어학과', '인공지능공학과', '정보통신공학과', '사이버보안학과', '데이터사이언스학과'],
    certifications: ['정보처리기사', 'AWS Certified Solutions Architect', 'SQLD', '리눅스마스터 1급', '정보보안기사'],
    relatedJobs: ['백엔드/프론트엔드 소프트웨어 엔지니어', 'AI 머신러닝 엔지니어', '클라우드 아키텍트', '시스템 소프트웨어 개발자'],
    relatedSubjectIds: ['s_math_calc1', 's_math_calc2', 's_math_geo', 's_info_info', 's_math_ai', 's_info_data_sci', 's_info_ai_base'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '고려대', '연세대', '성균관대', '한양대'],
    careerProspects: '네이버, 카카오, 라인, 쿠팡, 배달의민족, 구글, 마이크로소프트, 삼성전자, 유망 AI 테크 스타트업에 최고 대우로 진출합니다.'
  },
  {
    id: 'dept_eng_electronic',
    name: '전자전기공학과',
    category: '공학 계열',
    summary: '반도체 소자, 집적회로(VLSI) 설계, 전력망(스마트그리드), 통신 신호처리, 로봇 제어 및 전자기파 시스템을 연구합니다.',
    desc: '현대 산업의 쌀인 반도체 칩 설계부터 자율주행 센서, 6G 통신, 친환경 전기차 구동 시스템까지 하드웨어 기술을 총망라합니다.',
    mainCurriculum: ['회로이론Ⅰ·Ⅱ', '전자회로Ⅰ·Ⅱ', '전자기학Ⅰ·Ⅱ', '신호및시스템', '반도체공학', '집적회로설계', '디지털시스템', '제어공학'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하'],
    recommendedSubjects: ['전자기와 양자', '역학과 에너지', '정보', '인공지능 수학', '화학'],
    highSchoolSubjects: {
      general: ['물리학', '화학', '미적분Ⅰ', '대수', '정보'],
      career: ['전자기와 양자', '역학과 에너지', '미적분Ⅱ', '기하', '로봇과 공학세계'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '소프트웨어와 생활']
    },
    similarDepartments: ['전기전자공학부', '반도체시스템공학과', '제어계측공학과', '정보통신공학과', '나노전자공학과'],
    certifications: ['전기기사', '전기공사기사', '반도체설계기사', '전자기사', '정보통신기사'],
    relatedJobs: ['반도체 회로(IC) 설계 엔지니어', '스마트폰 하드웨어 개발자', '배터리 BMS 전력제어 엔지니어', '한국전력 연구원'],
    relatedSubjectIds: ['s_sci_phy', 's_math_calc1', 's_math_calc2', 's_math_geo', 's_sci_em_quantum', 's_tech_robot'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '고려대', '연세대', '성균관대', '한양대'],
    careerProspects: '삼성전자 DS부문, SK하이닉스, LG전자, 현대모비스, 한국전력공사, ASML, 퀄컴 등으로 대거 진출합니다.'
  },
  {
    id: 'dept_eng_mechanical',
    name: '기계공학과',
    category: '공학 계열',
    summary: '4대 역학(고체, 열, 유체, 동역학)을 기반으로 로봇, 자동차, 항공기, 에너지 플랜트, 정밀 기계 시스템을 설계하고 제조합니다.',
    desc: '하드웨어 역학 해석과 3D CAD/CAE 시뮬레이션, 스마트 모빌리티 및 휴머노이드 로봇 메커니즘을 융합적으로 개발합니다.',
    mainCurriculum: ['고체역학', '열역학', '유체역학', '동역학', '기계설계', '기계공작법', 'CAD/CAM', '로봇공학', '메카트로닉스'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하'],
    recommendedSubjects: ['역학과 에너지', '창의 공학 설계', '로봇과 공학세계', '정보', '화학'],
    highSchoolSubjects: {
      general: ['물리학', '화학', '미적분Ⅰ', '대수'],
      career: ['역학과 에너지', '미적분Ⅱ', '기하', '로봇과 공학세계', '정보과학'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '지식 재산 일반']
    },
    similarDepartments: ['기계항공공학부', '미래자동차공학과', '로봇공학과', '메카트로닉스공학과', '원자력공학과'],
    certifications: ['일반기계기사', '기계설계기사', '공조냉동기계기사', '건설기계설비기사'],
    relatedJobs: ['현대차 자동차 설계 연구원', '로봇 기구 개발자', '항공우주 구조 해석원', '조선해양 플랜트 엔지니어', '공조설비 엔지니어'],
    relatedSubjectIds: ['s_sci_phy', 's_math_calc1', 's_math_calc2', 's_math_geo', 's_sci_dyn_energy', 's_tech_robot', 's_tech_eng_design'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '연세대', '고려대', '한양대', '성균관대'],
    careerProspects: '현대자동차, 기아, 한화에어로스페이스, 두산에너빌리티, HD현대중공업, 삼성중공업 등에 매우 높은 취업률을 보입니다.'
  },
  {
    id: 'dept_eng_chemical',
    name: '화학공학과 (신소재공학과)',
    category: '공학 계열',
    summary: '화학 반응을 대량 생산 공정으로 구현하고 2차전지 배터리 양극재, 반도체 화학소재, 바이오 플라스틱, 수소 에너지를 개발합니다.',
    desc: '열 및 물질 전달, 반응공학, 분리공정, 공정제어를 통해 석유화학, 첨단 소재, 청정 에너지 생산 시스템을 최적화합니다.',
    mainCurriculum: ['화공양론', '화공열역학', '유체유동', '열및물질전달', '화학반응공학', '공정제어', '고분자재료공학', '에너지공학'],
    coreRecommendedSubjects: ['화학', '물리학', '미적분Ⅰ', '미적분Ⅱ'],
    recommendedSubjects: ['물질과 에너지', '화학 반응의 세계', '기하', '창의 공학 설계', '확률과 통계'],
    highSchoolSubjects: {
      general: ['화학', '물리학', '미적분Ⅰ', '대수'],
      career: ['물질과 에너지', '화학 반응의 세계', '미적분Ⅱ', '기하', '역학과 에너지'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '기후변화와 환경생태']
    },
    similarDepartments: ['화학생명공학부', '신소재공학과', '에너지공학과', '나노신소재공학과', '고분자공학과'],
    certifications: ['화공기사', '가스기사', '화학분석기사', '대기환경기사', '산업안전기사'],
    relatedJobs: ['배터리 소재 공정 엔지니어(LG엔솔/SK온/에코프로)', '반도체 케미컬 개발원', '석유화학 플랜트 공정설계사', '신재생에너지 연구원'],
    relatedSubjectIds: ['s_sci_chem', 's_sci_phy', 's_math_calc1', 's_math_calc2', 's_sci_matter_energy', 's_sci_chem_rxn', 's_math_geo'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '연세대', '고려대', '성균관대', '한양대'],
    careerProspects: 'LG에너지솔루션, 삼성SDI, SK온, LG화학, 에쓰오일, GS칼텍스, 포스코퓨처엠 등으로 폭넓게 진출합니다.'
  },
  {
    id: 'dept_eng_architecture',
    name: '건축학과 / 건축공학과',
    category: '공학 계열',
    summary: '인간의 삶을 담는 공간을 예술적·기능적으로 디자인(5년제 건축학)하고, 건물의 구조 역학, 시공, 설비, 친환경 기술(4년제 공학)을 연구합니다.',
    desc: '도시 경관과 주거 환경을 혁신하는 건축 설계 및 BIM 디지털 모델링, 제로에너지 빌딩(ZEB), 스마트 건설 자동화를 다룹니다.',
    mainCurriculum: ['건축설계스튜디오Ⅰ~Ⅹ', '건축사', '건축구조역학', '건축시공학', '건축환경설비', 'BIM디지털설계', '도시설계론'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '기하'],
    recommendedSubjects: ['미술 창작', '역학과 에너지', '창의 공학 설계', '도시의 미래 탐구', '정보'],
    highSchoolSubjects: {
      general: ['물리학', '미적분Ⅰ', '대수', '미술'],
      career: ['기하', '역학과 에너지', '미술 창작', '도시의 미래 탐구'],
      convergence: ['창의 공학 설계', '미술과 매체', '여행지리']
    },
    similarDepartments: ['건축사회환경공학부', '실내건축디자인학과', '도시공학과', '조경학과'],
    certifications: ['건축사(5년제 인증 졸업 후 실무)', '건축기사', '건설안전기사', '실내건축기사'],
    relatedJobs: ['건축설계사(아키텍트)', '대형 건설사 시공/공무 소장', '친환경 건축 컨설턴트', 'BIM 엔지니어', '인테리어 디자이너'],
    relatedSubjectIds: ['s_sci_phy', 's_math_calc1', 's_math_geo', 's_art_art_creation', 's_sci_dyn_energy', 's_soc_city_future', 's_tech_eng_design'],
    topUniversities: ['서울대', '한양대', '홍익대', '고려대', '연세대', '성균관대', '국민대'],
    careerProspects: '삼우·희림·간삼 등 대형 건축사사무소, 삼성물산·현대건설 등 1군 시공사, 한국토지주택공사(LH)에 진출합니다.'
  },
  {
    id: 'dept_eng_bio',
    name: '생명공학과 (바이오공학부)',
    category: '공학 계열',
    summary: '생물학적 원리와 공학적 기술을 융합하여 바이오 의약품(항체·백신), 유전자 가위, 바이오 식품, 친환경 바이오 연료를 양산합니다.',
    desc: '세포 배양 공정, 유전자 재조합, 단백질 정제, 생물반응기 설계 및 나노바이오 융합 기술을 학습합니다.',
    mainCurriculum: ['생명공학개론', '미생물생명공학', '단백질공학', '세포배양공학', '생물분리공정', '바이오의약품학', '합성생물학'],
    coreRecommendedSubjects: ['생명과학', '화학', '미적분Ⅰ'],
    recommendedSubjects: ['세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅱ', '확률과 통계'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '미적분Ⅰ', '대수'],
      career: ['세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅱ'],
      convergence: ['융합과학 탐구', '생명과학 실험', '창의 공학 설계']
    },
    similarDepartments: ['바이오시스템공학과', '의공학과', '식품생명공학과', '시스템생물학과'],
    certifications: ['생물공학기사', '바이오화학제품제조기사', '품질관리기사'],
    relatedJobs: ['바이오의약품 생산공정 엔지니어', '세포유전자 치료제 연구원', '바이오 인허가(RA) 전문가', '발효공정 연구원'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_math_calc1', 's_sci_cell_metabolism', 's_sci_genetics', 's_sci_chem_rxn'],
    topUniversities: ['서울대', 'KAIST', '고려대', '연세대', '성균관대', '한양대', '중앙대'],
    careerProspects: '삼성바이오에피스, 셀트리온, SK바이오사이언스, GC녹십자, 국립암센터 등 바이오헬스 대기업으로 진출합니다.'
  },
  {
    id: 'dept_eng_aerospace',
    name: '항공우주공학과',
    category: '공학 계열',
    summary: '비행기, 전투기, 헬리콥터, 우주로켓(발사체), 인공위성, 드론(UAM)의 공기역학, 구조, 추진체, 유도제어 시스템을 연구합니다.',
    desc: '초음속 공기역학 해석, 위성 궤도 제어, 로켓 엔진 연소 해석 및 도심항공모빌리티(UAM) 기체 개발을 주도합니다.',
    mainCurriculum: ['항공우주역학', '공기역학Ⅰ·Ⅱ', '항공우주구조역학', '추진기관공학(로켓/제트)', '비행역학및제어', '위성시스템공학'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하'],
    recommendedSubjects: ['역학과 에너지', '행성우주과학', '정보', '전자기와 양자', '창의 공학 설계'],
    highSchoolSubjects: {
      general: ['물리학', '미적분Ⅰ', '대수', '정보'],
      career: ['역학과 에너지', '미적분Ⅱ', '기하', '행성우주과학', '로봇과 공학세계'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '수학과제 탐구']
    },
    similarDepartments: ['기계항공우주학부', '항공운항학과', '드론로봇공학과', '우주시스템공학과'],
    certifications: ['항공기사', '초경량비행장치(드론) 조종자', '일반기계기사'],
    relatedJobs: ['발사체 로켓 연소 연구원', '전투기·UAM 기체 설계원', '인공위성 조립시험 엔지니어', '항공안전기술원 연구관'],
    relatedSubjectIds: ['s_sci_phy', 's_math_calc1', 's_math_calc2', 's_math_geo', 's_sci_dyn_energy', 's_sci_space', 's_tech_eng_design'],
    topUniversities: ['서울대', 'KAIST', '한국항공대', '인하대', '부산대', '경상국립대', '전북대'],
    careerProspects: '한국항공우주연구원, 한국항공우주산업(KAI), 한화에어로스페이스, LIG넥스원, 대한항공 항공우주사업본부에 진출합니다.'
  },

  // ==========================================
  // [7] 농생명과학 계열 (07)
  // ==========================================
  {
    id: 'dept_agr_food_nutri',
    name: '식품영양학과',
    category: '농생명과학 계열',
    summary: '인간의 건강 증진을 위해 식품의 영양성분, 조리과학, 인체 대사 작용, 임상영양 치료 및 단체급식 위생 관리를 연구합니다.',
    desc: '맞춤형 기능성 식품 개발, 만성질환 식이요법, 메디푸드(환자식), 영양상담 및 푸드테크(대체육) 분야의 전문 인력을 양성합니다.',
    mainCurriculum: ['식품학', '조리과학및실험', '영양학', '인체생리학', '생화학', '임상영양학', '식품위생학', '단체급식관리'],
    coreRecommendedSubjects: ['화학', '생명과학'],
    recommendedSubjects: ['생활과학 탐구', '세포와 물질대사', '화학 반응의 세계', '보건', '확률과 통계'],
    highSchoolSubjects: {
      general: ['화학', '생명과학', '독서와 작문', '확률과 통계'],
      career: ['생활과학 탐구', '세포와 물질대사', '화학 반응의 세계', '보건'],
      convergence: ['융합과학 탐구', '기후변화와 환경생태', '실용 통계']
    },
    similarDepartments: ['식품공학과', '외식경영학과', '바이오식품공학과', '임상영양대학원'],
    certifications: ['영양사 면허증(국가시험)', '위생사', '식품기사', '영양교사 2급 자격증'],
    relatedJobs: ['종합병원 임상영양사', '초·중·고 영양교사', '식품 대기업(CJ/농심) 연구원', '건강기능식품 기획자', '식약처 식품위생연구관'],
    relatedSubjectIds: ['s_sci_chem', 's_sci_bio', 's_tech_living_sci', 's_sci_cell_metabolism', 's_gen_health', 's_sci_chem_rxn'],
    topUniversities: ['서울대', '연세대', '고려대', '이화여대', '경희대', '숙명여대', '한양대'],
    careerProspects: '대학병원, 교육청 영양교사 임용, CJ제일제당, 아워홈, 대상, 식약처 및 한국식품연구원 등으로 안정적 진출을 보입니다.'
  },
  {
    id: 'dept_agr_horticulture',
    name: '스마트팜원예학과 (식물자원학과)',
    category: '농생명과학 계열',
    summary: 'ICT 사물인터넷(IoT) 센서, 인공지능 온실 제어, 식물공장, 조직배양, 작물 육종을 통해 미래 첨단 농업을 혁신합니다.',
    desc: '기후위기 대응 지속가능한 식량 안보를 위해 스마트팜 환경 제어 알고리즘과 유용 식물 천연물 소재를 개발합니다.',
    mainCurriculum: ['스마트팜원예학', '식물생리학', '시설원예환경제어', '원예작물육종학', '식물조직배양', '스마트농업ICT융합'],
    coreRecommendedSubjects: ['생명과학', '화학'],
    recommendedSubjects: ['정보', '로봇과 공학세계', '생태와 환경', '기후변화와 지속가능한 세계', '미적분Ⅰ'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '정보', '생태와 환경'],
      career: ['생물의 유전', '로봇과 공학세계', '인공지능 기초'],
      convergence: ['기후변화와 지속가능한 세계', '창의 공학 설계', '융합과학 탐구']
    },
    similarDepartments: ['스마트농업학과', '식물생명공학과', '원예생명과학과', '응용생물자원학과'],
    certifications: ['스마트팜산업기사', '종자기사', '식물보호기사', '유기농업기사'],
    relatedJobs: ['스마트팜 온실 환경설계 엔지니어', '종자 육종 연구원', '농촌진흥청 농업연구사', '식물공장 재배 총괄자'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_info_info', 's_tech_robot', 's_gen_eco_env', 's_soc_climate_world'],
    topUniversities: ['서울대(식물생산과학부)', '강원대', '전남대', '경북대', '충남대', '부산대'],
    careerProspects: '농촌진흥청, 스마트팜 벤처기업, 팜에이트, 농협중앙회, 글로벌 종자기업(몬산토, 흥농종묘) 등으로 진출합니다.'
  },
  {
    id: 'dept_agr_animal',
    name: '동물생명공학과 (축산·반려동물학)',
    category: '농생명과학 계열',
    summary: '반려동물 및 산업동물의 번식, 유전체 개량, 영양사료, 동물 복지, 동물 바이오 의약품 소재를 연구합니다.',
    desc: '반려동물 헬스케어 및 수의학 기초, 줄기세포 동물 복제, 배양육(대체단백질) 생산 기술을 다룹니다.',
    mainCurriculum: ['동물영양학', '동물번식생리학', '동물유전체학', '반려동물행동교정학', '줄기세포생물학', '동물사료학'],
    coreRecommendedSubjects: ['생명과학', '화학'],
    recommendedSubjects: ['생물의 유전', '세포와 물질대사', '인간과 심리', '생태와 환경', '보건'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '생태와 환경'],
      career: ['생물의 유전', '세포와 물질대사', '인간과 심리', '보건'],
      convergence: ['융합과학 탐구', '사회문제 탐구', '기후변화와 지속가능한 세계']
    },
    similarDepartments: ['반려동물산업학과', '축산생명공학과', '동물자원과학과', '실험동물의학과'],
    certifications: ['축산기사', '반려동물행동지도사(국가자격)', '실험동물기술원', '사료제조기사'],
    relatedJobs: ['반도체·의약계열 실험동물 전임상 연구원', '사료 영양설계 연구원', '동물원 큐레이터/사육사', '반려동물 행동치료사'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_sci_genetics', 's_sci_cell_metabolism', 's_gen_psychology'],
    topUniversities: ['서울대', '건국대(동물생명과학대학)', '강원대', '전북대', '충남대', '경북대'],
    careerProspects: '하림, 카길, CJ제일제당 사료사업부, 바이오 전임상 CRO 기업, 국립축산과학원 등으로 활발히 진출합니다.'
  },

  // ==========================================
  // [8] 예체능 계열 (08)
  // ==========================================
  {
    id: 'dept_art_design',
    name: '디자인학과 (시각·산업·UX/UI)',
    category: '예체능 계열',
    summary: '인간의 경험과 감성을 극대화하는 시각 커뮤니케이션, 제품·모빌리티 산업 디자인, 디지털 모바일 인터페이스(UX/UI)를 디자인합니다.',
    desc: '조형 감각과 사용자 중심 문제 해결 디자인 싱킹, 3D 렌더링, 제너레이티브 AI 디자인 툴을 융합하여 혁신적 가치를 창출합니다.',
    mainCurriculum: ['기초디자인', '타이포그래피', 'UX/UI디자인', '3D모델링및렌더링', '인터랙션디자인', '브랜드아이덴티티(BX)', '디자인씽킹'],
    coreRecommendedSubjects: ['미술', '미술 창작'],
    recommendedSubjects: ['미술과 매체', '창의 공학 설계', '정보', '사회와 문화', '문학과 영상'],
    highSchoolSubjects: {
      general: ['미술', '독서와 작문', '사회와 문화', '정보'],
      career: ['미술 창작', '미술 감상과 비평', '문학과 영상', '데이터 과학'],
      convergence: ['미술과 매체', '창의 공학 설계', '소프트웨어와 생활']
    },
    similarDepartments: ['시각디자인학과', '산업디자인학과', '디지털미디어디자인학과', '인터랙션디자인과'],
    certifications: ['시각디자인기사', '컬러리스트기사', '컴퓨터그래픽스운용기능사', '제품디자인기사'],
    relatedJobs: ['IT 빅테크 UX/UI 프로덕트 디자이너', '브랜드 디자이너', '현대차 자동차 익스테리어 디자이너', '모션그래픽 아티스트'],
    relatedSubjectIds: ['s_art_art', 's_art_art_creation', 's_art_art_media', 's_tech_eng_design', 's_info_info', 's_kor_media_lit'],
    topUniversities: ['서울대', '홍익대', '국민대', '이화여대', '고려대(디자인조형)', '성균관대', '한국예술종합학교'],
    careerProspects: '네이버, 카카오, 토스, 당근, 삼성전자 무선사업부 디자인센터, 현대차 디자인센터, 대형 에이전시로 진출합니다.'
  },
  {
    id: 'dept_art_music',
    name: '음악학과 (작곡·기악·성악·실용음악)',
    category: '예체능 계열',
    summary: '클래식 및 실용음악의 고도의 연주 테크닉, 화성학, 대위법, 컴퓨터 음악 작곡, 사운드 엔지니어링을 심도 있게 연마합니다.',
    desc: '전문 독주자·성악가 양성부터 영화·게임·드라마 OST 사운드트랙 작곡, 음악 프로듀싱, 공연기획을 이끕니다.',
    mainCurriculum: ['전공실기Ⅰ~Ⅷ', '화성학Ⅰ·Ⅱ', '대위법', '서양음악사', '컴퓨터음악(MIDI)', '관현악기법', '무대공연실습'],
    coreRecommendedSubjects: ['음악', '음악 연주와 창작'],
    recommendedSubjects: ['음악 감상과 비평', '음악과 미디어', '문학과 영상', '세계 문화와 영어'],
    highSchoolSubjects: {
      general: ['음악', '독서와 작문', '영어Ⅰ'],
      career: ['음악 연주와 창작', '음악 감상과 비평', '문학과 영상'],
      convergence: ['음악과 미디어', '세계 문화와 영어', '연극과 삶']
    },
    similarDepartments: ['실용음악과', '작곡과', '기악과(피아노/관현악)', '성악과', '국악과', '뮤지컬학과'],
    certifications: ['무대예술전문인(음향)', '음악치료사', '피아노어드벤처 전문지도사', '중등교원자격증'],
    relatedJobs: ['전문 연주자/오케스트라 단원', '영화/게임 음악 작곡가', 'K-POP 음반 프로듀서', '사운드 디자이너', '음악교사/강사'],
    relatedSubjectIds: ['s_art_music', 's_art_music_creation', 's_art_music_critique', 's_art_music_media', 's_kor_media_lit'],
    topUniversities: ['서울대', '한국예술종합학교', '연세대', '한양대', '이화여대', '경희대', '서울예대'],
    careerProspects: '국공립 교향악단, 하이브·SM·JYP 등 엔터테인먼트사, 넥슨·엔씨소프트 사운드팀, 방송사 음악감독으로 진출합니다.'
  },
  {
    id: 'dept_art_film',
    name: '연극영화영상학과',
    category: '예체능 계열',
    summary: '영화 연출, 시나리오 각본, 연기, 촬영 조명, 사운드 믹싱, 편집, OTT 콘텐츠 제작을 종합 실습합니다.',
    desc: '글로벌 K-콘텐츠 열풍을 이끄는 영화감독, 시나리오 작가, 전문 배우, 드라마 프로듀서를 육성합니다.',
    mainCurriculum: ['영화사', '시나리오작법', '영화연출실습', '촬영및조명', '디지털색보정(DI)', '기초연기', '공연제작워크숍'],
    coreRecommendedSubjects: ['연극', '문학과 영상'],
    recommendedSubjects: ['화법과 언어', '문학', '매체 의사소통', '미디어 영어', '미술 창작'],
    highSchoolSubjects: {
      general: ['연극', '문학', '화법과 언어', '사회와 문화'],
      career: ['문학과 영상', '주제 탐구 독서', '연극 제작 실습'],
      convergence: ['매체 의사소통', '미디어 영어', '영화와 삶']
    },
    similarDepartments: ['영화영상학과', '연극영화과', '방송연예과', '공연예술학과', '애니메이션학과'],
    certifications: ['무대예술전문인(조명/무대/음향)', '디지털영상편집 1급', '멀티미디어콘텐츠제작전문가'],
    relatedJobs: ['영화감독·조감독', '드라마 작가/시나리오작가', '배우·뮤지컬배우', '촬영감독', 'OTT 콘텐츠 PD', '영화제 프로그래머'],
    relatedSubjectIds: ['s_art_theatre', 's_kor_media_lit', 's_kor_speech', 's_kor_lit', 's_kor_media_comm', 's_eng_media'],
    topUniversities: ['한국예술종합학교', '중앙대', '동국대', '한양대', '성균관대', '서울예대', '세종대'],
    careerProspects: '쇼박스, CJ ENM, 스튜디오드래곤, 영화 제작사, 방송국 드라마국, 기획사 전속 배우로 활약합니다.'
  },
  {
    id: 'dept_pe_sports',
    name: '체육학과 (스포츠과학과)',
    category: '예체능 계열',
    summary: '운동역학, 운동생리학, 스포츠 심리학, 스포츠 마케팅, 재활 트레이닝 및 전문 경기 실기를 체계적으로 연구합니다.',
    desc: '엘리트 스포츠 지도자, 전문 체육교사, 프로구단 전력분석관, 스포츠 에이전트, 메디컬 피트니스 트레이너를 양성합니다.',
    mainCurriculum: ['운동생리학', '운동역학', '스포츠심리학', '스포츠사회학', '트레이닝방법론', '스포츠마케팅', '전공실기(구기/육상/수영)'],
    coreRecommendedSubjects: ['체육 1·2', '운동과 건강', '스포츠 과학'],
    recommendedSubjects: ['생명과학', '스포츠 문화', '물리학', '확률과 통계', '교육의 이해'],
    highSchoolSubjects: {
      general: ['체육 1·2', '생명과학', '물리학', '독서와 작문'],
      career: ['운동과 건강', '스포츠 과학', '스포츠 문화', '교육의 이해'],
      convergence: ['스포츠 생활', '실용 통계', '사회문제 탐구']
    },
    similarDepartments: ['체육교육과', '스포츠의학과', '스포츠산업학과', '생활체육학과', '경호보안학과'],
    certifications: ['전문/생활스포츠지도사 1·2급', '건강운동관리사(국가전문)', '선수트레이너(AT)', '중등정교사(체육)'],
    relatedJobs: ['체육교사', '프로스포츠 구단 AT(선수 트레이너)', '스포츠 데이터 분석관', '스포츠 에이전트', '국민체육진흥공단 연구원'],
    relatedSubjectIds: ['s_pe_pe1_2', 's_pe_exercise_health', 's_pe_sports_sci', 's_sci_bio', 's_pe_sports_culture', 's_gen_education'],
    topUniversities: ['서울대', '한국체육대', '연세대', '고려대', '경희대', '한양대', '중앙대'],
    careerProspects: '국공립 중등체육교사, 프로야구/축구 구단 전력분석팀, 대한체육회, 선수촌 의무트레이닝센터에 진출합니다.'
  },

  // ==========================================
  // [9] 융합미래분야 계열 (09)
  // ==========================================
  {
    id: 'dept_fut_ai',
    name: '인공지능공학과 (AI학부)',
    category: '융합미래분야 계열',
    summary: '딥러닝, 생성형 AI(LLM), 컴퓨터 비전, 자연어 처리(NLP), 강화학습 및 AI 반도체 가속기 시스템을 총체적으로 연구합니다.',
    desc: '수학적 최적화 이론과 최신 트랜스포머 아키텍처, 거대언어모델을 실생활과 산업에 적용하는 차세대 AI 핵심 연구 인력을 양성합니다.',
    mainCurriculum: ['선형대수및최적화', '머신러닝', '딥러닝기초및실습', '컴퓨터비전', '자연어처리', '강화학습', '생성형AI모델링', 'AI윤리'],
    coreRecommendedSubjects: ['미적분Ⅰ', '미적분Ⅱ', '기하', '인공지능 수학', '정보'],
    recommendedSubjects: ['인공지능 기초', '데이터 과학', '확률과 통계', '물리학', '소프트웨어와 생활'],
    highSchoolSubjects: {
      general: ['대수', '미적분Ⅰ', '확률과 통계', '정보', '물리학'],
      career: ['미적분Ⅱ', '기하', '인공지능 수학', '인공지능 기초', '데이터 과학'],
      convergence: ['소프트웨어와 생활', '수학과제 탐구', '윤리문제 탐구']
    },
    similarDepartments: ['데이터사이언스학부', '스마트융합학부', '소프트웨어AI학부', '로봇인공지능학과'],
    certifications: ['TensorFlow Developer Certificate', '빅데이터분석기사', 'SQLD', '정보처리기사'],
    relatedJobs: ['AI 연구원(AI Scientist)', 'LLM 프롬프트/파인튜닝 엔지니어', '컴퓨터 비전 개발자', '자율주행 인지 알고리즘 엔지니어'],
    relatedSubjectIds: ['s_math_calc1', 's_math_calc2', 's_math_geo', 's_math_ai', 's_info_info', 's_info_ai_base', 's_info_data_sci'],
    topUniversities: ['서울대', 'KAIST', '포항공대', '고려대', '성균관대', '연세대', '한양대'],
    careerProspects: '네이버 클로바, 오픈AI, 구글 딥마인드, 카카오엔터프라이즈, 엔씨소프트 AI랩 등 국내외 최고 AI 연구소로 진출합니다.'
  },
  {
    id: 'dept_fut_mobility',
    name: '미래자동차공학과 (스마트모빌리티학부)',
    category: '융합미래분야 계열',
    summary: '전기차·수소차 배터리 파워트레인, 자율주행 라이다 센서 융합, 차량용 임베디드 OS 및 V2X 무선통신 네트워크를 연구합니다.',
    desc: 'SDV(소프트웨어 중심 자동차), 도심항공교통(UAM), 로보택시를 이끄는 융합 모빌리티 엔지니어를 육성합니다.',
    mainCurriculum: ['미래자동차공학개론', '자율주행센서및인지공학', '전기차배터리및모터제어', '차량임베디드시스템', '차량동역학', 'V2X통신'],
    coreRecommendedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하', '정보'],
    recommendedSubjects: ['전자기와 양자', '역학과 에너지', '로봇과 공학세계', '인공지능 수학', '창의 공학 설계'],
    highSchoolSubjects: {
      general: ['물리학', '미적분Ⅰ', '대수', '정보'],
      career: ['미적분Ⅱ', '기하', '전자기와 양자', '역학과 에너지', '로봇과 공학세계'],
      convergence: ['창의 공학 설계', '융합과학 탐구', '소프트웨어와 생활']
    },
    similarDepartments: ['지능형모빌리티학과', '자율주행시스템공학과', '전기전자모빌리티전공'],
    certifications: ['임베디드기사', '일반기계기사', '전기기사', '정보처리기사'],
    relatedJobs: ['현대차 자율주행 연구원', '차량용 반도체 개발자', '전기차 구동모터 엔지니어', '모빌리티 플랫폼 기획자'],
    relatedSubjectIds: ['s_sci_phy', 's_math_calc1', 's_math_calc2', 's_math_geo', 's_info_info', 's_sci_em_quantum', 's_tech_robot'],
    topUniversities: ['한양대(미래모빌리티)', '고려대(스마트모빌리티)', '서울대', 'KAIST', '인하대', '국민대(자동차공학)'],
    careerProspects: '현대자동차 연구개발본부(계약학과 채용 연계), 현대모비스, LG전자 VS사업본부, 테슬라 코리아 등으로 진출합니다.'
  },
  {
    id: 'dept_fut_security',
    name: '정보보안학과 (사이버국방학과)',
    category: '융합미래분야 계열',
    summary: '화이트해킹 모의침투, 악성코드 역공학(리버싱), 암호학, 네트워크 보안, 클라우드 및 스마트 인프라 보안을 연구합니다.',
    desc: '국가 기반 시설과 기업의 핵심 기밀을 사이버 위협으로부터 지키는 국가 최고 수준의 사이버 보안 정예 요원을 양성합니다.',
    mainCurriculum: ['네트워크보안', '시스템보안', '현대암호학', '악성코드분석', '모의해킹실습', '디지털포렌식', '클라우드보안'],
    coreRecommendedSubjects: ['정보', '대수', '미적분Ⅰ'],
    recommendedSubjects: ['인공지능 수학', '기하', '법과 사회', '소프트웨어와 생활', '물리학'],
    highSchoolSubjects: {
      general: ['정보', '대수', '미적분Ⅰ', '독서와 작문'],
      career: ['정보과학', '인공지능 수학', '기하', '법과 사회'],
      convergence: ['소프트웨어와 생활', '수학과제 탐구', '윤리문제 탐구']
    },
    similarDepartments: ['사이버보안학과', '정보통신보안학과', '융합보안학과', '사이버국방학과'],
    certifications: ['정보보안기사', 'CISSP', 'CISA', 'CEH(공인윤리적해커)', '디지털포렌식전문가 2급'],
    relatedJobs: ['화이트해커(보안침해대응원)', '악성코드 분석관', '국가정보원/군 사이버작전사령관', '금융보안원 분석원', 'CISO(최고정보보호책임자)'],
    relatedSubjectIds: ['s_info_info', 's_math_alg', 's_math_calc1', 's_math_ai', 's_soc_law', 's_info_software_life'],
    topUniversities: ['고려대(사이버국방)', '세종대(국방시스템/사이버보안)', '성균관대', '한양대', '아주대', '단국대'],
    careerProspects: '국방부 사이버작전사령부(장교 임관), 국가정보원, 한국인터넷진흥원(KISA), 금융보안원, 안랩, SK쉴더스로 진출합니다.'
  },

  // ==========================================
  // [10] 의료보건 계열 (10)
  // ==========================================
  {
    id: 'dept_med_medicine',
    name: '의예과 (의학과)',
    category: '의료보건 계열',
    summary: '인체의 구조와 기능, 질병의 병태생리 메커니즘을 규명하고 환자를 진단·치료하며 생명을 살리는 의사를 양성합니다.',
    desc: '기초의학(해부학, 생리학, 약리학)부터 임상의학(내과, 외과, 소아과, 산부인과 등)과 최신 정밀 정밀의료, 유전자 치료, 의료 AI를 학습합니다.',
    mainCurriculum: ['인체해부학실습', '의학생리학', '의학약리학', '병리학', '내과학', '외과학', '임상실습(병원)', '의료윤리학'],
    coreRecommendedSubjects: ['생명과학', '화학', '미적분Ⅰ'],
    recommendedSubjects: ['세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅱ', '현대사회와 윤리', '보건'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '미적분Ⅰ', '현대사회와 윤리'],
      career: ['세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅱ', '보건'],
      convergence: ['융합과학 탐구', '생명과학 실험', '윤리문제 탐구']
    },
    similarDepartments: ['치의예과', '한의예과', '약학과', '수의예과', '의과학과'],
    certifications: ['의사 면허증(의사국가고시)', '전문의 자격증(인턴/레지던트 과정 수료)'],
    relatedJobs: ['대학병원 교수/임상의사', '개원의사', '의과학 연구원(MD-PhD)', '식약처 의학연구관', '글로벌 제약사 메디컬 디렉터'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_math_calc1', 's_sci_cell_metabolism', 's_sci_genetics', 's_sci_chem_rxn', 's_soc_ethics', 's_gen_health'],
    topUniversities: ['서울대', '연세대', '가톨릭대', '성균관대', '울산대', '고려대', '한양대', '전국 의과대학'],
    careerProspects: '대학병원 전문의, 개인병원 개원, 보건복지부, 국립암센터, 존슨앤드존슨 등 글로벌 헬스케어 기업으로 진출합니다.'
  },
  {
    id: 'dept_med_pharmacy',
    name: '약학과',
    category: '의료보건 계열',
    summary: '의약품의 화학적 합성, 작용 기전, 약동학(인체 내 흡수·분포·대사·배설), 신약 표적 발굴 및 임상 복약지도를 연구합니다.',
    desc: '6년제 통합 교육과정을 통해 환자 맞춤형 복약 상담과 바이오 신약 임상시험, 첨단 제약 기술을 선도하는 전문 약사를 양성합니다.',
    mainCurriculum: ['약품유기화학', '약리화학', '약제학', '약물동태학', '임상약학', '생약학', '약사법규', '병원/약국실무실습'],
    coreRecommendedSubjects: ['화학', '생명과학', '미적분Ⅰ'],
    recommendedSubjects: ['화학 반응의 세계', '물질과 에너지', '세포와 물질대사', '생물의 유전', '미적분Ⅱ', '보건'],
    highSchoolSubjects: {
      general: ['화학', '생명과학', '미적분Ⅰ', '독서와 작문'],
      career: ['화학 반응의 세계', '물질과 에너지', '세포와 물질대사', '생물의 유전', '보건'],
      convergence: ['융합과학 탐구', '화학 실험', '생명과학 실험']
    },
    similarDepartments: ['제약학과', '한약학과', '제약공학과', '바이오의약학과'],
    certifications: ['약사 면허증(약사국가시험)', '한약조제사'],
    relatedJobs: ['개업 약국 약사', '대학병원 임상약사', '제약사 신약개발 연구원', '식품의약품안전처 심사관', 'CRA(임상시험모니터요원)'],
    relatedSubjectIds: ['s_sci_chem', 's_sci_bio', 's_math_calc1', 's_sci_chem_rxn', 's_sci_matter_energy', 's_sci_cell_metabolism', 's_gen_health'],
    topUniversities: ['서울대', '성균관대', '중앙대', '연세대', '이화여대', '경희대', '가톨릭대'],
    careerProspects: '대형병원 약제부, 로컬 약국 개국, 유한양행·녹십자 등 제약사 중앙연구소, 국립보건연구원으로 진출합니다.'
  },
  {
    id: 'dept_med_nursing',
    name: '간호학과',
    category: '의료보건 계열',
    summary: '환자의 질병 회복과 고통 경감, 건강 증진을 위해 전문 간호 지식과 임상 실무 술기, 인간 존중의 돌봄 윤리를 체계화합니다.',
    desc: '성인, 아동, 모성, 정신, 지역사회 간호학 및 응급간호, 시뮬레이션 실습을 통해 위급 환자를 침착하게 케어하는 전문 간호사를 양성합니다.',
    mainCurriculum: ['기본간호학및실습', '성인간호학', '모성간호학', '아동간호학', '정신간호학', '지역사회간호학', '약리학', '간호관리학'],
    coreRecommendedSubjects: ['생명과학', '화학'],
    recommendedSubjects: ['보건', '인간과 심리', '세포와 물질대사', '현대사회와 윤리', '독서와 작문'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '독서와 작문', '현대사회와 윤리'],
      career: ['보건', '인간과 심리', '세포와 물질대사', '인간과 철학'],
      convergence: ['생명과학 실험', '사회문제 탐구', '독서 토론과 글쓰기']
    },
    similarDepartments: ['간호학부', '응급구조학과', '임상병리학과', '보건행정학과'],
    certifications: ['간호사 면허증(간호사국가고시)', '전문간호사(중환자/마취/응급 등)', '보건교사 2급 자격증'],
    relatedJobs: ['대학병원 임상간호사', '초·중·고 보건교사', '보건소 간호직 공무원', '국민건강보험공단 심사인력', '항공사 항공간호사'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_gen_health', 's_gen_psychology', 's_sci_cell_metabolism', 's_soc_ethics'],
    topUniversities: ['서울대', '연세대', '고려대', '가톨릭대', '중앙대', '이화여대', '경희대'],
    careerProspects: '빅5 대형병원(서울대, 아산, 삼성, 성모, 세브란스) 100% 취업, 보건교사 임용, 미국 간호사(NCLEX) 진출이 활발합니다.'
  },
  {
    id: 'dept_med_vet',
    name: '수의예과 (수의학과)',
    category: '의료보건 계열',
    summary: '반려동물, 가축, 야생동물의 질병을 진단·외과수술하고 인수공통감염병 예방 및 공중위생 보건을 연구합니다.',
    desc: '반려동물 임상의료뿐만 아니라 바이오 신약의 전임상 동물실험, 가축 방역, 백신 개발 등 원헬스(One Health) 전문가를 양성합니다.',
    mainCurriculum: ['수의해부학', '수의생리학', '수의병리학', '수의약리학', '수의내과학', '수의외과학', '조류질병학', '야생동물의학'],
    coreRecommendedSubjects: ['생명과학', '화학', '미적분Ⅰ'],
    recommendedSubjects: ['생물의 유전', '세포와 물질대사', '화학 반응의 세계', '생태와 환경', '보건'],
    highSchoolSubjects: {
      general: ['생명과학', '화학', '미적분Ⅰ', '생태와 환경'],
      career: ['생물의 유전', '세포와 물질대사', '화학 반응의 세계', '보건'],
      convergence: ['생명과학 실험', '융합과학 탐구', '기후변화와 지속가능한 세계']
    },
    similarDepartments: ['수의예과(전국 10개 대학)', '동물생명공학과', '축산학과'],
    certifications: ['수의사 면허증(수의사국가시험)'],
    relatedJobs: ['동물병원 수의사(원장)', '야생동물구조센터 수의관', '농림축산검역본부 가축방역관', '신약 비임상 CRO 책임연구원'],
    relatedSubjectIds: ['s_sci_bio', 's_sci_chem', 's_math_calc1', 's_sci_genetics', 's_sci_cell_metabolism', 's_gen_eco_env'],
    topUniversities: ['서울대', '건국대', '경북대', '강원대', '충남대', '전북대', '전남대'],
    careerProspects: '로컬 2차 동물병원 개원, 농림축산식품부 검역관, 한국마사회 경주마 수의사, 제약사 안전성연구소에 진출합니다.'
  },

  // ==========================================
  // [11] 자율전공 및 첨단 융합 (11)
  // ==========================================
  {
    id: 'dept_adv_autonomous',
    name: '자율전공학부 (무전공·첨단융합학부)',
    category: '자율전공·첨단 계열',
    summary: '전공 구분 없이 입학하여 1~2학년 동안 폭넓은 융합 기초 소양을 쌓은 후 3학년에 인문·사회·이공계열 전공을 자유롭게 선택합니다.',
    desc: '학문 간 경계를 넘어 융복합적 문제 해결 역량과 창의적 리더십을 기르며, 로스쿨 트랙이나 AI 첨단 융합 트랙을 자율 설계합니다.',
    mainCurriculum: ['융합인문학', '컴퓨팅사고와코딩', '빅데이터와사회', '창의적문제해결세미나', '융합전공설계', '진로자기주도연구'],
    coreRecommendedSubjects: ['독서와 작문', '대수', '미적분Ⅰ', '사회와 문화'],
    recommendedSubjects: ['주제 탐구 독서', '인공지능 기초', '데이터 과학', '영어 발표와 토론', '융합과학 탐구'],
    highSchoolSubjects: {
      general: ['독서와 작문', '대수', '미적분Ⅰ', '사회와 문화', '정보'],
      career: ['주제 탐구 독서', '인공지능 기초', '데이터 과학', '영어 발표와 토론'],
      convergence: ['독서 토론과 글쓰기', '융합과학 탐구', '창의 공학 설계']
    },
    similarDepartments: ['자유전공학부', '첨단융합학부', '글로벌리더학부', '인문사회/자연과학 자율전공'],
    certifications: ['로스쿨(LEET) 준비', 'CPA', '빅데이터분석기사', '다중전공 학위'],
    relatedJobs: ['로스쿨 진학 후 법조인', '융합 테크기업 기획자', '전략 컨설턴트', '데이터 사이언티스트', '정책 기획관'],
    relatedSubjectIds: ['s_kor_read', 's_math_alg', 's_math_calc1', 's_soc_culture', 's_info_info', 's_kor_theme', 's_info_ai_base'],
    topUniversities: ['서울대(자유전공학부/첨단융합학부)', '고려대(자유전공)', '연세대(언더우드/HASS)', '성균관대', '한양대', '서강대'],
    careerProspects: '원하는 전공(경영, 컴공, 경제, 통계 등) 100% 선택권 보장 및 로스쿨, 컨설팅펌, 빅테크 기업으로 광범위하게 진출합니다.'
  }
];

export const DEPARTMENTS_DATA: Department[] = [
  ...BASE_DEPARTMENTS_DATA,
  ...ADDITIONAL_DEPARTMENTS_DATA
];

