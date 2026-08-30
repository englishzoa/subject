import { Job, UniversityRequirement, CareerDiagnosisQuestion } from '../types';

export { SUBJECTS_DATA } from './subjectsData';
export { DEPARTMENTS_DATA } from './departmentsData';

export const JOBS_DATA: Job[] = [
  {
    id: 'job_ai_engineer',
    name: 'AI·머신러닝 엔지니어',
    category: 'IT/인공지능',
    desc: '대규모 데이터셋을 기반으로 딥러닝 모델(LLM, 컴퓨터 비전, 자연어 처리)을 설계하고 실시간 서비스를 위해 모델을 최적화·배포합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['수학적 최적화 및 선형대수', '파이썬 및 딥러닝 프레임워크(PyTorch/TensorFlow)', '분산 컴퓨팅', '알고리즘 분석'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '인공지능공학과 (AI학부)', '수학과'],
    relatedSubjects: ['인공지능 수학', '미적분Ⅰ', '미적분Ⅱ', '기하', '정보', '데이터 과학', '확률과 통계'],
    educationLevel: '대학교 졸업 이상 (석·박사 우대)'
  },
  {
    id: 'job_data_scientist',
    name: '빅데이터 사이언티스트',
    category: '데이터/통계',
    desc: '정형·비정형 대용량 데이터를 수집·가공하여 패턴을 찾아내고 비즈니스 의사결정을 위한 예측 머신러닝 모델과 통계 대시보드를 구축합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['통계적 가설 검정 및 회귀분석', 'SQL 및 데이터 전처리', '머신러닝 모델링', '데이터 시각화(Tableau, Python)'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '인공지능공학과 (AI학부)', '경영학과', '경제학과'],
    relatedSubjects: ['확률과 통계', '실용 통계', '미적분Ⅰ', '정보', '데이터 과학', '대수'],
    educationLevel: '대학교 졸업 이상 (석사 우대)'
  },
  {
    id: 'job_semiconductor_eng',
    name: '반도체 소자·공정 설계 엔지니어',
    category: '전자/반도체',
    desc: '나노 단위의 초미세 반도체 회로(IC)를 설계하고 8대 제조 공정 수율 개선 및 차세대 첨단 패키징을 연구합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['양자역학 및 고체물리학', '반도체 8대 공정 이해', '회로 시뮬레이션(SPICE)', '데이터 분석'],
    relatedDepartments: ['전자전기공학과', '물리학과', '화학공학과 (신소재공학과)', '기계공학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '미적분Ⅰ', '미적분Ⅱ', '기하', '화학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_battery_researcher',
    name: '이차전지·차세대 배터리 연구원',
    category: '신소재/에너지',
    desc: '전기차 및 에너지 저장장치(ESS)를 위한 고에너지 밀도 전고체 배터리, 양극재·음극재 신물질을 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['전기화학 반응 분석', '신소재 결정 구조 분석', '배터리 열화 메커니즘 해석', '실험 설계'],
    relatedDepartments: ['화학공학과 (신소재공학과)', '화학과', '기계공학과'],
    relatedSubjects: ['화학', '물질과 에너지', '화학 반응의 세계', '물리학', '미적분Ⅰ', '기후변화와 지속가능한 세계'],
    educationLevel: '대학교 졸업 이상 (석·박사 중심)'
  },
  {
    id: 'job_robot_eng',
    name: '지능형 로봇·자율주행 시스템 연구원',
    category: '로봇/모빌리티',
    desc: '휴머노이드 로봇의 보행 역학, 자율주행 차량의 센서 융합(라이다/카메라) 및 모터 제어 알고리즘을 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['ROS(로봇 운영체제)', '센서 융합', '동역학 해석', 'C++/Python 코딩', '임베디드 제어'],
    relatedDepartments: ['기계공학과', '전자전기공학과', '미래자동차공학과 (스마트모빌리티학부)', '컴퓨터공학과 (소프트웨어학부)'],
    relatedSubjects: ['물리학', '역학과 에너지', '기하', '미적분Ⅰ', '미적분Ⅱ', '로봇과 공학세계', '창의 공학 설계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_doctor',
    name: '의사 및 의과학 연구원(MD-PhD)',
    category: '의료/보건',
    desc: '환자의 질병을 진단·치료하고 첨단 정밀 의료, 유전자 치료, 의료 AI 진단 기기를 연구합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['생명과학 및 인체 해부생리 지식', '환자 공감 및 의사소통', '임상 의사결정력', '생명 윤리의식'],
    relatedDepartments: ['의예과 (의학과)', '약학과', '간호학과'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅰ', '보건'],
    educationLevel: '의과대학 졸업 및 의사면허 취득'
  },
  {
    id: 'job_bio_researcher',
    name: '바이오 신약·백신 연구원',
    category: '생명/바이오',
    desc: '난치병 치료를 위한 표적 항암제, 항체 의약품, 세포유전자 치료제를 개발하고 임상 전임상 데이터를 분석합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['분자생물학 실험 기법', '단백질 공학 및 구조 분석', '약동학/약력학', '논문 독해 및 작성'],
    relatedDepartments: ['생명공학과 (바이오공학부)', '생명과학과', '약학과', '화학과'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅰ'],
    educationLevel: '대학원 석사 이상'
  },
  {
    id: 'job_pharmacist',
    name: '전문 약사 & 의약품 인허가(RA) 전문가',
    category: '의료/보건',
    desc: '환자별 맞춤형 복약 지도 및 약물 상호작용 검토, 신약 임상시험 프로토콜 심사 및 의약품 허가 규제를 담당합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['약물 기전 분석', '임상 약학 지식', '환자 커뮤니케이션', '식약처 인허가 가이드라인 이해'],
    relatedDepartments: ['약학과', '화학과', '생명과학과'],
    relatedSubjects: ['화학', '생명과학', '화학 반응의 세계', '물질과 에너지', '세포와 물질대사', '확률과 통계', '보건'],
    educationLevel: '약학대학(6년제) 졸업 및 약사면허 취득'
  },
  {
    id: 'job_fin_analyst',
    name: '금융 애널리스트 & 퀀트 매니저',
    category: '금융/경영',
    desc: '기업 펀더멘털 가치 평가, 거시 경제 지표 분석, 수학적 파생상품 프라이싱 및 퀀트 알고리즘 트레이딩 전략을 수립합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['재무제표 및 기업 가치 평가', '통계학 및 계량 모델링', '파이썬 퀀트 코딩', '글로벌 경제 감각'],
    relatedDepartments: ['경제학과', '경영학과', '수학과', '회계세무학과'],
    relatedSubjects: ['확률과 통계', '대수', '미적분Ⅰ', '경제', '경제 수학', '금융과 경제생활', '실용 통계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_lawyer',
    name: '변호사·기업 법무자문역',
    category: '법률/공공',
    desc: '민사, 형사, 기업 M&A, 지식재산권(IP), AI 윤리 분쟁 등 법률 사건을 대리하고 전문 법률 자문을 제공합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['논리적 법리 해석(Legal Mind)', '서면 작성 및 변론 능력', '판례 분석력', '협상 및 중재력'],
    relatedDepartments: ['법학과 (공공법학부)', '정치외교학과', '행정학과', '자율전공학부 (무전공·첨단융합학부)'],
    relatedSubjects: ['법과 사회', '정치', '현대사회와 윤리', '독서와 작문', '논리와 사고', '사회문제 탐구'],
    educationLevel: '법학전문대학원(로스쿨) 졸업 및 변호사시험 합격'
  },
  {
    id: 'job_ux_designer',
    name: 'UX/UI 프로덕트 디자이너',
    category: '디자인/IT',
    desc: '사용자의 행동 패턴과 심리를 분석하여 직관적이고 아름다운 모바일 앱·웹 인터페이스 및 인터랙션을 디자인합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['Figma/디자인 시스템', 'UX 리서치 및 사용자 인터뷰', '프로토타이핑', '디자인 씽킹'],
    relatedDepartments: ['디자인학과 (시각·산업·UX/UI)', '심리학과', '신문방송학과 (미디어커뮤니케이션학과)'],
    relatedSubjects: ['미술', '미술 창작', '미술과 매체', '창의 공학 설계', '정보', '인간과 심리'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_teacher',
    name: '중·고등학교 교사 및 교육 콘텐츠 기획자',
    category: '교육/연구',
    desc: '학생들의 전인적 성장과 학업 역량을 지도하며 에듀테크 기반의 혁신적인 융합 수업을 기획·운영합니다.',
    futureProspects: '보통',
    coreCompetencies: ['교과 전문 지식', '학생 상담 및 학급 경영', '교수학습 지도안 설계', '에듀테크 활용력'],
    relatedDepartments: ['국어교육과', '수학교육과', '물리/화학/생물/지구과학교육과', '초등교육과'],
    relatedSubjects: ['교육의 이해', '인간과 심리', '독서와 작문', '전공 교과목', '아동발달과 부모'],
    educationLevel: '사범대학 또는 교육대학원 졸업 및 정교사 2급 취득'
  }
];

export const UNIVERSITY_REQUIREMENTS: UniversityRequirement[] = [
  {
    id: 'uni_snu_cs',
    uniName: '서울대학교',
    college: '공과대학',
    deptName: '컴퓨터공학부',
    coreSubjects: ['미적분Ⅱ', '기하', '정보'],
    recSubjects: ['확률과 통계', '인공지능 수학', '물리학'],
    note: '수학·정보 심화 교과목 이수 충실도와 알고리즘적 사고 역량을 중점 평가합니다.'
  },
  {
    id: 'uni_snu_elec',
    uniName: '서울대학교',
    college: '공과대학',
    deptName: '전기·정보공학부',
    coreSubjects: ['미적분Ⅱ', '물리학'],
    recSubjects: ['기하', '전자기와 양자', '화학', '정보'],
    note: '물리학과 미적분의 탄탄한 기초 역량을 필수 핵심 권장 과목으로 제시합니다.'
  },
  {
    id: 'uni_snu_mech',
    uniName: '서울대학교',
    college: '공과대학',
    deptName: '기계공학부',
    coreSubjects: ['물리학', '미적분Ⅱ'],
    recSubjects: ['기하', '역학과 에너지', '화학'],
    note: '역학 기반 물리 법칙의 이해와 3D 공간 수학적 응용력을 종합 평가합니다.'
  },
  {
    id: 'uni_snu_chem_bio',
    uniName: '서울대학교',
    college: '공과대학',
    deptName: '화학생물공학부',
    coreSubjects: ['미적분Ⅱ', '화학', '물리학'],
    recSubjects: ['기하', '생명과학', '물질과 에너지'],
    note: '화학과 물리학, 미적분의 유기적 융합 탐구 역량을 강조합니다.'
  },
  {
    id: 'uni_snu_med',
    uniName: '서울대학교',
    college: '의과대학',
    deptName: '의예과',
    coreSubjects: ['생명과학', '화학', '미적분Ⅰ'],
    recSubjects: ['세포와 물질대사', '물질과 에너지', '생물의 유전', '확률과 통계', '미적분Ⅱ'],
    note: '생명현상에 대한 과학적 호기심과 생명 윤리의식이 종합 평가됩니다.'
  },
  {
    id: 'uni_snu_biz',
    uniName: '서울대학교',
    college: '경영대학',
    deptName: '경영학과',
    coreSubjects: ['확률과 통계', '미적분Ⅰ', '대수'],
    recSubjects: ['경제 수학', '경제', '실용 통계', '독서와 작문'],
    note: '정량적 수리 통계 역량과 비판적 사회학적 통찰력을 균형 있게 평가합니다.'
  },
  {
    id: 'uni_snu_econ',
    uniName: '서울대학교',
    college: '사회과학대학',
    deptName: '경제학부',
    coreSubjects: ['미적분Ⅰ', '확률과 통계', '경제'],
    recSubjects: ['미적분Ⅱ', '경제 수학', '대수', '실용 통계'],
    note: '경제 수리 모형 이해를 위한 미적분 및 통계적 사고력을 높이 평가합니다.'
  },
  {
    id: 'uni_snu_autonomous',
    uniName: '서울대학교',
    college: '자유전공학부 / 첨단융합학부',
    deptName: '자유전공학부 / 첨단융합학부',
    coreSubjects: ['독서와 작문', '대수', '미적분Ⅰ'],
    recSubjects: ['확률과 통계', '사회와 문화', '물리학', '정보'],
    note: '문·이과를 넘나드는 폭넓은 융합적 학업 열정과 자기주도적 진로 개척 역량을 평가합니다.'
  },
  {
    id: 'uni_yonsei_sys_semi',
    uniName: '연세대학교',
    college: '인공지능융합대학',
    deptName: '시스템반도체공학과 / 인공지능학과',
    coreSubjects: ['미적분Ⅱ', '기하', '물리학', '정보'],
    recSubjects: ['전자기와 양자', '인공지능 수학', '화학'],
    note: '삼성전자 계약학과로 반도체 회로 및 AI 수학 기초가 중요합니다.'
  },
  {
    id: 'uni_yonsei_med',
    uniName: '연세대학교',
    college: '의과대학',
    deptName: '의예과 / 치의예과',
    coreSubjects: ['생명과학', '화학', '미적분Ⅰ'],
    recSubjects: ['세포와 물질대사', '물질과 에너지', '생물의 유전', '미적분Ⅱ'],
    note: '최고 수준의 자연과학적 탐구 역량과 인간 존중의 인성을 다각도로 검증합니다.'
  },
  {
    id: 'uni_yonsei_biz',
    uniName: '연세대학교',
    college: '경영대학',
    deptName: '경영학과',
    coreSubjects: ['확률과 통계', '미적분Ⅰ'],
    recSubjects: ['대수', '경제', '독서와 작문', '실용 통계'],
    note: '글로벌 경영 리더십과 융합적 데이터 분석 역량을 종합 평가합니다.'
  },
  {
    id: 'uni_ku_cs',
    uniName: '고려대학교',
    college: '정보대학',
    deptName: '컴퓨터학과 / 데이터과학과 / 스마트보안학부',
    coreSubjects: ['미적분Ⅰ', '미적분Ⅱ', '정보'],
    recSubjects: ['기하', '확률과 통계', '인공지능 수학'],
    note: '알고리즘 구현력 및 데이터 통계 처리 역량을 중점 평가합니다.'
  },
  {
    id: 'uni_ku_bio',
    uniName: '고려대학교',
    college: '생명과학대학',
    deptName: '생명공학부 / 바이오의공학부',
    coreSubjects: ['생명과학', '화학'],
    recSubjects: ['세포와 물질대사', '물질과 에너지', '물리학', '미적분Ⅰ'],
    note: '바이오 융합 신산업 연구 역량과 실험 설계 능력을 평가합니다.'
  },
  {
    id: 'uni_skku_semi',
    uniName: '성균관대학교',
    college: '공과대학',
    deptName: '반도체시스템공학과',
    coreSubjects: ['미적분Ⅱ', '물리학'],
    recSubjects: ['기하', '전자기와 양자', '화학', '정보'],
    note: '수학·물리 기본기가 탄탄한 차세대 반도체 인재를 선발합니다.'
  },
  {
    id: 'uni_skku_sw',
    uniName: '성균관대학교',
    college: '소프트웨어융합대학',
    deptName: '소프트웨어학과 / 인공지능융합전공',
    coreSubjects: ['미적분Ⅰ', '정보'],
    recSubjects: ['미적분Ⅱ', '기하', '인공지능 수학', '확률과 통계'],
    note: '실전 코딩 경험 및 창의적 문제해결 프로세스를 우대합니다.'
  },
  {
    id: 'uni_skku_pharm',
    uniName: '성균관대학교',
    college: '약학대학',
    deptName: '약학과',
    coreSubjects: ['화학', '생명과학'],
    recSubjects: ['물질과 에너지', '세포와 물질대사', '화학 반응의 세계', '미적분Ⅰ'],
    note: '신약 제약 바이오 연구 역량과 실험 수행 능력을 중점 평가합니다.'
  },
  {
    id: 'uni_hanyang_mobility',
    uniName: '한양대학교',
    college: '공과대학',
    deptName: '미래자동차공학과 / 컴퓨터소프트웨어학부',
    coreSubjects: ['미적분Ⅱ', '물리학', '정보'],
    recSubjects: ['기하', '역학과 에너지', '전자기와 양자', '인공지능 수학'],
    note: '현대자동차 채용조건형 계약 트랙과 연계된 융합 모빌리티 핵심 역량을 평가합니다.'
  },
  {
    id: 'uni_knu_cs',
    uniName: '경북대학교',
    college: 'IT대학',
    deptName: '컴퓨터학부 / 인공지능전공',
    coreSubjects: ['미적분Ⅰ', '미적분Ⅱ', '정보'],
    recSubjects: ['기하', '인공지능 수학', '확률과 통계'],
    note: 'SW 중심대학으로서 실무 프로그래밍 기초 및 수학적 분석 역량을 권장합니다.'
  },
  {
    id: 'uni_knu_elec',
    uniName: '경북대학교',
    college: 'IT대학',
    deptName: '전자공학부 (모바일·반도체)',
    coreSubjects: ['미적분Ⅰ', '미적분Ⅱ', '물리학'],
    recSubjects: ['기하', '역학과 에너지', '전자기와 양자', '화학'],
    note: '국내 최대 전자공학부로 반도체/통신 관련 교과목 연계 이수를 강조합니다.'
  },
  {
    id: 'uni_knu_med',
    uniName: '경북대학교',
    college: '의과대학',
    deptName: '의예과 / 치의예과',
    coreSubjects: ['생명과학', '화학'],
    recSubjects: ['미적분Ⅰ', '세포와 물질대사', '물질과 에너지', '생물의 유전'],
    note: '대구경북 지역인재 전형 및 학생부 종합에서 교과 이수 충실도가 중요합니다.'
  },
  {
    id: 'uni_knu_pharm',
    uniName: '경북대학교',
    college: '약학대학',
    deptName: '약학과',
    coreSubjects: ['화학', '생명과학'],
    recSubjects: ['물질과 에너지', '세포와 물질대사', '확률과 통계', '미적분Ⅰ'],
    note: '의약품 합성 및 생화학적 반응 탐구 경험을 긍정적으로 평가합니다.'
  },
  {
    id: 'uni_knu_biz',
    uniName: '경북대학교',
    college: '경상대학',
    deptName: '경영학부 / 경제통상학부',
    coreSubjects: ['확률과 통계', '대수'],
    recSubjects: ['미적분Ⅰ', '실용 통계', '사회와 문화', '경제'],
    note: '데이터 분석 기초 및 경제/경영 탐구 활동을 권장합니다.'
  }
];

export const DIAGNOSIS_QUESTIONS: CareerDiagnosisQuestion[] = [
  {
    id: 1,
    question: '주말이나 자유 시간에 가장 흥미를 느끼고 몰입하는 활동은 무엇인가요?',
    options: [
      { text: '새로운 전자기기를 분해해보거나 코딩, 3D 프린팅, 알고리즘 퍼즐 풀기', field: 'engineering', score: 3 },
      { text: '우주 다큐멘터리나 자연 생태계, 유전자 신약 개발 뉴스 찾아보기', field: 'science', score: 3 },
      { text: '질병 예방법을 찾아보거나 아픈 사람을 돌보고 인체 구조 탐구하기', field: 'medicine', score: 3 },
      { text: '최신 시사 이슈, 사회 불평등, 법과 제도, 마케팅 트렌드 분석하기', field: 'social', score: 3 },
      { text: '친구에게 어려운 개념을 알기 쉽게 설명해주거나 멘토링 활동하기', field: 'education', score: 3 },
    ]
  },
  {
    id: 2,
    question: '어려운 문제에 부딪혔을 때 당신이 가장 선호하는 해결 방식은?',
    options: [
      { text: '수학적 수식이나 논리적 구조를 코딩하여 시스템적으로 해결한다.', field: 'engineering', score: 3 },
      { text: '실험과 가설 검증을 통해 현상의 근본적인 자연 법칙을 증명한다.', field: 'science', score: 3 },
      { text: '정확한 데이터와 임상적 사례를 분석하여 환자 맞춤형 해결책을 찾는다.', field: 'medicine', score: 3 },
      { text: '다양한 이해관계자의 의견을 듣고 설문조사를 통해 정책/전략을 기획한다.', field: 'social', score: 3 },
      { text: '상대방의 눈높이에 맞춰 대화하고 학습 동기를 부여하며 함께 해결한다.', field: 'education', score: 3 },
    ]
  },
  {
    id: 3,
    question: '학교 축제나 동아리 활동을 기획한다면 맡고 싶은 역할은?',
    options: [
      { text: '축제 웹사이트나 모바일 예약 시스템, 무대 조명 제어 장치 제작', field: 'engineering', score: 3 },
      { text: '친환경 제로웨이스트 부스 운영 및 과학 실험 시연 코너 기획', field: 'science', score: 3 },
      { text: '응급처치 CPR 체험 부스 및 학생 건강 증진 캠페인 운영', field: 'medicine', score: 3 },
      { text: '축제 홍보 영상 제작, 예산 집행 관리 및 스폰서십 유치', field: 'social', score: 3 },
      { text: '후배들을 위한 퀴즈 멘토링 부스 및 진로 상담 프로그램 진행', field: 'education', score: 3 },
    ]
  },
  {
    id: 4,
    question: '고등학교 수업 중 가장 매력적으로 느껴지는 탐구 형태는?',
    options: [
      { text: '프로그래밍 실습을 통한 스마트 로봇 제어나 인공지능 모델 훈련', field: 'engineering', score: 3 },
      { text: '과학실에서 시약을 조절하고 현미경으로 세포 분열을 관찰하는 실험', field: 'science', score: 3 },
      { text: '생체 항상성 조절과 약물이 인체 수용체에 결합하는 메커니즘 탐구', field: 'medicine', score: 3 },
      { text: '통계청 공공데이터를 시각화하여 지역사회 문제점을 파악하는 보고서 작성', field: 'social', score: 3 },
      { text: '학습자의 인지 발달 단계에 맞춘 효과적인 수업 지도안 설계 및 모의수업', field: 'education', score: 3 },
    ]
  },
  {
    id: 5,
    question: '미래에 내가 세상에 기여하고 싶은 가장 큰 목표는?',
    options: [
      { text: '인류의 삶을 혁신하는 편리한 AI 기술과 자율주행·반도체 시스템 개발', field: 'engineering', score: 3 },
      { text: '기후위기를 해결하는 친환경 신소재와 기초 과학의 신기원 발견', field: 'science', score: 3 },
      { text: '불치병 환자에게 새로운 희망을 주는 신약 개발과 따뜻한 인술 실천', field: 'medicine', score: 3 },
      { text: '공정하고 정의로운 사회 정책을 수립하고 혁신적인 경제적 가치 창출', field: 'social', score: 3 },
      { text: '모든 학생이 자신의 잠재력을 꽃피울 수 있는 미래 교육 환경 구축', field: 'education', score: 3 },
    ]
  }
];

export const UNI_RECOMMENDATIONS = UNIVERSITY_REQUIREMENTS;
