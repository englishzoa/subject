// CareerNet (커리어넷) 직업인 인터뷰 (https://www.career.go.kr/cloud/w/interview/job?listType=2) 데이터베이스 및 스마트 매칭 엔진

export interface CareerInterviewItem {
  id: string;
  jobName: string;
  aliases: string[];
  category: string;
  interviewee: string;
  organization: string;
  roleTitle: string;
  quote: string;
  summary: string;
  keyResponsibilities: string[];
  howToBecome: string;
  coreCompetency: string[];
  highSchoolTips: string;
  rewardsAndChallenges: string;
  adviceForStudents: string;
  careerNetUrl: string;
  videoDuration?: string;
  videoHighlight?: string;
}

export const CAREERNET_INTERVIEW_LIST: CareerInterviewItem[] = [
  {
    id: 'int_ai_engineer',
    jobName: 'AI·머신러닝 엔지니어',
    aliases: ['AI엔지니어', '머신러닝엔지니어', '인공지능전문가', '인공지능엔지니어', '딥러닝전문가', '인공지능연구원', 'AI개발자', '프롬프트엔지니어'],
    category: 'IT·인공지능',
    interviewee: '이진원 마스터',
    organization: '네이버 클라우드 AI 이노베이션 센터',
    roleTitle: '초거대 생성형 AI(LLM) 모델 최적화 연구원',
    quote: '"인공지능은 단순히 코딩하는 것이 아니라, 수학적 원리와 인간의 사고방식을 연결하는 종합 예술입니다."',
    summary: '대규모 언어 모델(LLM)과 멀티모달 AI를 학습시키고, 이를 실제 사용자가 지연 없이 쓸 수 있도록 모델 경량화 및 분산 추론 파이프라인을 구축합니다.',
    keyResponsibilities: [
      '대규모 데이터셋 수집·정제 및 토크나이저 설계',
      'PyTorch 기반 Transformer 및 Diffusion 딥러닝 모델 학습',
      'ONNX, TensorRT를 활용한 추론 속도 및 GPU 메모리 최적화',
      'RAG(검색 증강 생성) 기반 지식 연동 서비스 아키텍처 구축'
    ],
    howToBecome: '컴퓨터공학, 인공지능학, 수학, 통계학 전공 후 깃허브 오픈소스 기여 및 캐글(Kaggle) 경진대회 경험',
    coreCompetency: ['수학적 모델링(선형대수/미적분)', 'Python/C++ 알고리즘 구현력', '최신 AI 논문 분석력', '호기심과 끈기'],
    highSchoolTips: '2022 개정 교육과정에서 [인공지능 수학], [미적분Ⅱ], [정보], [데이터 과학]을 깊이 있게 이수하고, 코딩 동아리에서 문제를 직접 해결해보는 프로젝트를 추천합니다.',
    rewardsAndChallenges: '내가 만든 모델이 수백만 명의 일상을 편리하게 바꿀 때 큰 보람을 느끼며, 매주 쏟아지는 최신 논문을 꾸준히 학습해야 하는 점이 도전 과제입니다.',
    adviceForStudents: '수학을 포기하지 마세요. 공식 암기보다 "왜 이 공식이 유도되었는지" 원리를 파고드는 습관이 미래 최고 AI 엔지니어의 핵심 무기입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_data_scientist',
    jobName: '빅데이터 사이언티스트',
    aliases: ['데이터사이언티스트', '빅데이터전문가', '데이터분석가', '데이터엔지니어', '빅데이터분석가'],
    category: 'IT·인공지능',
    interviewee: '박성현 수석분석관',
    organization: 'SK텔레콤 데이터인사이트랩',
    roleTitle: '빅데이터 전략 분석 및 예측 모델링 전문가',
    quote: '"데이터 속에 숨겨진 사람들의 행동 패턴과 사회적 신호를 읽어내는 현대의 디지털 탐정입니다."',
    summary: '기업과 사회의 방대한 로그 데이터를 정제하여 통계적 가설 검정과 머신러닝 예측 알고리즘을 적용하고, 경영진과 개발팀이 즉각 실행할 수 있는 비즈니스 인사이트를 도출합니다.',
    keyResponsibilities: [
      '대용량 분산 DB(Spark, SQL) 쿼리 및 데이터 전처리',
      '머신러닝 기반 고객 이탈 예측 및 추천 알고리즘 설계',
      'A/B 테스트 설계 및 통계적 유의성 검증',
      'Tableau 및 Python 대시보드 시각화 및 전략 제안'
    ],
    howToBecome: '통계학, 산업공학, 컴퓨터공학, 경영정보학 전공 및 데이터 분석 포트폴리오 구축',
    coreCompetency: ['통계적 추론 능력', 'SQL 및 Python 데이터 가공력', '비즈니스 도메인 이해력', '시각화 커뮤니케이션'],
    highSchoolTips: '[확률과 통계], [실용 통계], [대수], [정보] 과목을 중심으로 공공데이터포털의 실생활 데이터를 활용한 탐구 보고서를 작성해보세요.',
    rewardsAndChallenges: '모호했던 의사결정이 데이터 분석을 통해 명쾌한 해결책으로 입증될 때 희열을 느낍니다.',
    adviceForStudents: '숫자 뒤에 사람이 있다는 점을 잊지 마세요. 인문학적 상상력과 통계적 엄밀함이 만날 때 훌륭한 데이터 사이언티스트가 됩니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_sw_developer',
    jobName: '소프트웨어 개발자 & 클라우드 아키텍트',
    aliases: ['소프트웨어개발자', '프로그래머', '백엔드개발자', '프론트엔드개발자', '웹개발자', '앱개발자', '시스템엔지니어'],
    category: 'IT·인공지능',
    interviewee: '김현우 수석엔지니어',
    organization: '카카오 플랫폼 개발본부',
    roleTitle: '대용량 트래픽 분산 서버 시스템 및 마이크로서비스 설계자',
    quote: '"보이지 않는 백엔드 서버의 0.01초 단축이 전 국민의 원활한 소통을 지탱합니다."',
    summary: '수천만 명이 동시 접속하는 클라우드 인프라를 설계하고, 안정적인 API 서버와 데이터베이스 아키텍처를 구현합니다.',
    keyResponsibilities: [
      'Spring Boot/Node.js/Go 기반 분산 API 마이크로서비스 개발',
      'Kubernetes 및 AWS/GCP 클라우드 무중단 배포 파이프라인 구축',
      'Redis 캐싱 및 MySQL/PostgreSQL 쿼리 성능 튜닝',
      'CI/CD 자동화 및 시스템 모니터링 경보 체계 구축'
    ],
    howToBecome: '컴퓨터공학, 소프트웨어학 전공 및 오픈소스 프로젝트, 알고리즘 코딩 테스트 준비',
    coreCompetency: ['자료구조 및 분산 알고리즘', '클라우드 인프라 이해도', '클린 코드 및 리팩토링', '디버깅 끈기'],
    highSchoolTips: '[정보], [인공지능 수학], [대수], [미적분Ⅰ]을 통해 컴퓨터의 연산 구조와 효율적 알고리즘 설계를 학습하세요.',
    rewardsAndChallenges: '내가 짠 코드가 전 국민의 일상 속에서 장애 없이 안정적으로 작동할 때 최고의 성취감을 맛봅니다.',
    adviceForStudents: '직접 동작하는 작은 웹사이트나 앱을 처음부터 끝까지 만들어보는 경험이 백 권의 책보다 값집니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_semiconductor_engineer',
    jobName: '반도체 소자·공정 설계 엔지니어',
    aliases: ['반도체엔지니어', '반도체공정기술자', '반도체설계사', '반도체공학자', '반도체연구원', '메모리반도체개발자'],
    category: '전자·반도체·제조',
    interviewee: '최원석 책임연구원',
    organization: '삼성전자 반도체연구소 (메모리 사업부)',
    roleTitle: '차세대 3nm 나노 공정 및 수율 최적화 연구원',
    quote: '"머리카락 굵기의 수만 분의 일인 원자 단위의 세계에서 국가 산업의 미래를 설계합니다."',
    summary: '극자외선(EUV) 노광, 식각, 박막 증착 등 나노미터 단위의 반도체 8대 공정을 설계하고 트랜지스터 소자의 전기적 특성과 양산 수율을 극한으로 끌어올립니다.',
    keyResponsibilities: [
      'GAA(Gate-All-Around) 3차원 트랜지스터 구조 시뮬레이션',
      'EUV 노광 및 원자층 증착(ALD) 공정 파라미터 최적화',
      '웨이퍼 불량 원인 분석 및 수율(Yield) 개선 알고리즘 개발',
      '신소재 절연막 및 금속 배선 신뢰성 평가'
    ],
    howToBecome: '전자전기공학, 반도체공학, 신소재공학, 물리학 전공 (석·박사 학위 우대)',
    coreCompetency: ['고체물리학 및 전자기학 지식', '반도체 TCAD 시뮬레이션', '데이터 기반 결함 분석력', '실험 집념'],
    highSchoolTips: '[물리학], [전자기와 양자], [미적분Ⅱ], [화학], [물질과 에너지] 과목을 탄탄히 학습하고 반도체 동작 원리를 탐구하세요.',
    rewardsAndChallenges: '전 세계 스마트폰과 슈퍼컴퓨터의 심장부에 내가 설계한 공정 기술이 들어갈 때 자부심을 느낍니다.',
    adviceForStudents: '기초 물리학과 수학이 반도체의 모든 것입니다. 기초가 튼튼한 사람이 첨단 나노 기술을 선도할 수 있습니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_renewable_energy',
    jobName: '신재생에너지 전문가 & 그리드 엔지니어',
    aliases: ['신재생에너지전문가', '태양광발전연구원', '풍력발전기술자', '수소에너지연구원', '에너지공학자', '이차전지연구원', '배터리엔지니어'],
    category: '환경·에너지·신소재',
    interviewee: '정유진 박사',
    organization: '한국에너지기술연구원 재생에너지연구단',
    roleTitle: '그린 수소 및 해상풍력·태양광 발전 시스템 연구원',
    quote: '"지구 온난화를 멈추고 미래 세대에게 맑은 하늘과 지속가능한 청정에너지를 선물합니다."',
    summary: '태양광 페로브스카이트 소재, 대형 해상풍력 터빈, 수전해 그린 수소 생산 시스템을 개발하고 분산 에너지를 지능형 스마트 전력망(Smart Grid)에 안정적으로 연계합니다.',
    keyResponsibilities: [
      '차세대 고효율 탠덤 태양전지 소자 합성 및 효율 측정',
      '수전해 촉매 개발을 통한 그린수소 생산 단가 저감 연구',
      '신재생에너지 발전량 예측 AI 알고리즘 및 전력망 연계',
      'RE100 및 탄소중립 글로벌 환경 규제 대응 전략 수립'
    ],
    howToBecome: '에너지공학, 화학공학, 전기공학, 환경공학 전공 및 신재생에너지발전설비기사 자격',
    coreCompetency: ['전기화학 및 열역학 지식', '전력계통 해석', '친환경 가치관', '글로벌 정책 분석력'],
    highSchoolTips: '[화학], [물리학], [지구시스템과학], [생태와 환경], [미적분Ⅰ]을 통해 탄소중립과 에너지 변환 원리를 탐구하세요.',
    rewardsAndChallenges: '연구실의 작은 촉매 반응 하나가 지구의 탄소 배출량을 수만 톤 줄일 수 있다는 사명감이 가장 큰 원동력입니다.',
    adviceForStudents: '환경을 사랑하는 따뜻한 마음과 공학적인 냉철한 머리를 함께 키워 미래 그린 경제의 주인공이 되어주세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_doctor',
    jobName: '의사 및 의과학 연구원 (MD-PhD)',
    aliases: ['의사', '전문의', '외과의사', '내과의사', '소아과의사', '의학연구원', '전공의', '치과의사', '한의사'],
    category: '의료·보건·약학',
    interviewee: '강민수 교수',
    organization: '서울대학교병원 첨단재생의학센터',
    roleTitle: '임상 전문의 및 암 정밀의료 융합 연구원',
    quote: '"한 손에는 청진기를, 다른 한 손에는 유전자 분석기를 들고 생명의 존엄성을 지킵니다."',
    summary: '환자의 질병을 정확히 진단하고 수술·약물 치료를 시행함과 동시에, 난치성 질환의 분자 메커니즘을 규명하고 맞춤형 표적 면역치료제를 연구합니다.',
    keyResponsibilities: [
      '외래 진료, 회진 및 중환자 치료 프로토콜 수립',
      '복강경·로봇 정밀 수술 집도 및 응급 시술',
      '환자 맞춤형 유전체 변이 분석 및 표적 항암 치료 처방',
      '줄기세포 및 재생의학 관련 임상시험 논문 작성'
    ],
    howToBecome: '의과대학 6년 졸업 후 의사국가고시 면허 취득, 인턴 및 전공의 수련, 전문의 자격 취득',
    coreCompetency: ['생명과학 및 인체 해부생리학 지식', '신속 정확한 임상 판단력', '환자 공감 및 의료 윤리', '체력과 헌신'],
    highSchoolTips: '[생명과학], [세포와 물질대사], [화학], [물질과 에너지], [생물의 유전], [독서와 작문]에서 깊이 있는 생명윤리와 과학적 탐구를 보여주세요.',
    rewardsAndChallenges: '절망하던 환자가 건강을 되찾고 가족의 품으로 돌아갈 때 형언할 수 없는 감동을 느낍니다.',
    adviceForStudents: '성적보다 중요한 것은 사람에 대한 깊은 애정입니다. 타인의 아픔에 진심으로 귀 기울일 수 있는 의사가 되어주세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_pharmacist',
    jobName: '전문 약사 & 바이오 신약 개발자',
    aliases: ['약사', '임상약사', '신약개발연구원', '제약연구원', '병원약사', '바이오의약품연구원'],
    category: '의료·보건·약학',
    interviewee: '한지수 팀장',
    organization: '유한양행 중앙연구소 바이오신약본부',
    roleTitle: '표적 단백질 분해(PROTAC) 신약 파이프라인 개발자',
    quote: '"한 알의 약으로 수억 명의 고통을 덜어주는 마법 같은 생명화학을 만듭니다."',
    summary: '의약품의 안전한 조제 및 복약 지도를 수행하거나, 바이오 제약사에서 난치병 치료를 위한 후보물질을 합성하고 전임상·임상 약리 시험을 총괄합니다.',
    keyResponsibilities: [
      '신약 표적 단백질 결합 구조 모델링 및 유도체 합성',
      '약물 동태학(PK/PD) 및 독성 스크리닝 분석',
      '글로벌 FDA/식약처 신약 허가(IND/NDA) 문서 작성',
      '병원 임상 약물 용량 계산 및 환자 맞춤 복약 상담'
    ],
    howToBecome: '약학대학 6년제 졸업 후 약사국가시험 합격 및 면허 취득',
    coreCompetency: ['유기화학 및 약리학 심화 지식', '정밀 분자 구조 분석력', '복약 소통 능력', '철저한 규정 준수'],
    highSchoolTips: '[화학], [물질과 에너지], [생명과학], [세포와 물질대사], [미적분Ⅰ] 과목을 통해 분자 결합과 약리 메커니즘을 탐구하세요.',
    rewardsAndChallenges: '수년간의 실패 끝에 신약 후보물질이 임상 1상에 진입했을 때의 전율은 무엇과도 바꿀 수 없습니다.',
    adviceForStudents: '약학은 화학과 생명과학의 가장 아름다운 교집합입니다. 호기심을 갖고 자연의 분자 세계를 탐험해보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_nurse',
    jobName: '전문 간호사 (중환자·감염관리)',
    aliases: ['간호사', '전문간호사', '중환자실간호사', '수술실간호사', '보건교사', '마취전문간호사'],
    category: '의료·보건·약학',
    interviewee: '윤서연 수간호사',
    organization: '국립중앙의료원 감염격리병동',
    roleTitle: '중증 감염병 환자 전담 집중치료 전문간호사',
    quote: '"가장 위급한 순간 환자의 곁을 24시간 지키는 생명의 수호천사입니다."',
    summary: '환자의 생체 징후(Vital Signs)를 실시간 모니터링하고 투약, 응급 처치, 심폐소생술 및 감염 관리 프로토콜을 철저히 집행하여 환자의 빠른 회복을 돕습니다.',
    keyResponsibilities: [
      '중환자 인공호흡기, ECMO, 지속적 신대체요법(CRRT) 기기 관리',
      '정밀 투약 용량 계산 및 정맥 주사·혈액 투석 간호',
      '환자 및 보호자 정서적 지지 및 퇴원 후 건강 교육',
      '병원 내 다제내성균 감염 확산 차단 및 감시 체계 운영'
    ],
    howToBecome: '간호대학(4년제) 졸업 후 간호사국가시험 합격 및 면허 취득',
    coreCompetency: ['임상 간호학 지식', '위기 대처 순발력', '따뜻한 소통과 공감력', '투철한 직업 사명감'],
    highSchoolTips: '[생명과학], [화학], [인체 구조와 기능], [심리학], [화법과 언어]를 이수하며 인간에 대한 이해를 넓히세요.',
    rewardsAndChallenges: '호흡 곤란으로 의식이 없던 환자가 건강하게 걸어서 퇴원할 때 삶의 가장 큰 보람을 느낍니다.',
    adviceForStudents: '지식도 중요하지만 환자의 손을 따뜻하게 잡아줄 수 있는 용기와 공감 능력을 가진 간호사가 되어주세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_autonomous_robot',
    jobName: '지능형 로봇·자율주행 시스템 연구원',
    aliases: ['로봇공학자', '로봇엔지니어', '자율주행전문가', '로봇연구원', '모빌리티개발자', '드론전문가', '스마트팩토리엔지니어'],
    category: '로봇·모빌리티',
    interviewee: '오동훈 수석연구원',
    organization: '현대자동차그룹 로보틱스랩',
    roleTitle: '서비스 로봇 자율보행 및 센서퓨전 알고리즘 개발자',
    quote: '"기계에 지능을 불어넣어 인간의 든든한 동반자가 되는 로봇을 만듭니다."',
    summary: 'LiDAR, 카메라, 레이더 센서 데이터를 융합하는 SLAM 기술과 강화학습 기반의 모터 제어 알고리즘을 통해 복잡한 실내외 환경에서 자율 이동하는 로봇을 개발합니다.',
    keyResponsibilities: [
      'ROS2(로봇 운영체제) 기반 분산 통신 노드 및 제어기 설계',
      'LiDAR 3D 포인트 클라우드 기반 실시간 위치 추정 및 지도 작성(SLAM)',
      '동적 장애물 회피 경로 계획(Path Planning) 알고리즘 구현',
      '4족 보행 및 다관절 로봇 역기구학(Kinematics) 모터 토크 제어'
    ],
    howToBecome: '기계공학, 전자공학, 로봇공학, 컴퓨터공학 전공 및 로봇 경진대회 참가',
    coreCompetency: ['선형대수 및 강체동역학', 'C++/Python 프로그래밍', '임베디드 제어', '시스템 융합력'],
    highSchoolTips: '[물리학], [역학과 에너지], [기하], [미적분Ⅱ], [정보], [인공지능 기초] 과목을 통해 3차원 공간 제어를 탐구하세요.',
    rewardsAndChallenges: '수많은 시뮬레이션 끝에 로봇이 험난한 계단을 스스로 인식하고 안정적으로 올라설 때 짜릿한 성취감을 맛봅니다.',
    adviceForStudents: '로봇은 SW와 HW가 만나는 융합의 결정체입니다. 아두이노나 라즈베리파이로 작은 움직임을 직접 만들어보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_aerospace_engineer',
    jobName: '항공우주 발사체·위성 시스템 연구원',
    aliases: ['우주항공공학자', '항공우주연구원', '인공위성연구원', '로켓엔지니어', '우주과학자', '천문학연구원'],
    category: '로봇·모빌리티',
    interviewee: '임태호 박사',
    organization: '한국항공우주연구원 (KARI) 누리호 고도화사업단',
    roleTitle: '액체 로켓 엔진 연소기 및 위성 궤도 제어 연구원',
    quote: '"대한민국의 꿈을 싣고 끝없는 우주를 향해 타오르는 불꽃을 쏩니다."',
    summary: '초고온·초고압을 견디는 액체 로켓 엔진, 발사체 구조체 경량화 및 정지궤도 위성의 열제어·항법 유도 시스템을 연구·개발합니다.',
    keyResponsibilities: [
      '액체산소/케로신 극저온 추진제 공급 밸브 및 인젝터 설계',
      '초음속 공기역학 CFD 시뮬레이션 및 공력 가열 해석',
      '발사체 비행 자세 제어 짐벌링(Gimbaling) 알고리즘 검증',
      '우주 환경(극저온·고진공) 열진공 챔버 시험 수행'
    ],
    howToBecome: '항공우주공학, 기계공학, 물리천문학 전공 (석·박사 학위 필수적)',
    coreCompetency: ['유체역학 및 열역학 심화', '유도항법제어(G&C)', '초정밀 구조역학', '극한의 안전의식'],
    highSchoolTips: '[물리학], [역학과 에너지], [미적분Ⅱ], [기하], [지구시스템과학]을 충실히 이수하고 로켓 추진 원리를 탐구하세요.',
    rewardsAndChallenges: '우주센터 카운트다운 후 발사체가 지축을 흔들며 구름을 뚫고 우주 궤도에 무사히 안착할 때 모든 연구진이 눈물을 흘립니다.',
    adviceForStudents: '우주를 꿈꾸는 것은 인류의 가장 위대한 모험입니다. 높은 꿈을 품고 수학과 물리라는 튼튼한 날개를 만드세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_webtoon_writer',
    jobName: '웹툰 작가 & IP 스토리 총괄 기획자',
    aliases: ['웹툰작가', '만화가', '스토리작가', '웹소설작가', '콘텐츠크리에이터', '애니메이터', '일러스트레이터'],
    category: '미디어·콘텐츠',
    interviewee: '김수아 작가',
    organization: '네이버웹툰 인기 연재 스튜디오',
    roleTitle: '글로벌 10개국 번역 연재 오리지널 판타지 웹툰 작가',
    quote: '"하얀 캔버스 위에 독자들의 마음을 울리고 웃게 만드는 생생한 우주를 그립니다."',
    summary: '흡입력 있는 세계관과 캐릭터를 창작하고 콘티, 데생, 펜선, 채색, 식자 전 과정을 지휘하여 매주 글로벌 독자들에게 감동을 선사합니다.',
    keyResponsibilities: [
      '시놉시스 및 에피소드별 기승전결 스토리보드 기획',
      '클립스튜디오(Clip Studio) 기반 캐릭터 연출 및 배경 3D 배치',
      '독자 몰입감을 극대화하는 컷 연출 및 스크롤 시선 유도',
      '드라마·영화·게임 2차 저작권(IP) 확장을 위한 협업'
    ],
    howToBecome: '만화애니메이션학, 시각디자인학, 문예창작학 전공 또는 웹툰 공모전 당선',
    coreCompetency: ['스토리텔링 및 대사 전달력', '인체 드로잉 및 연출력', '주간 마감 준수 성실성', '트렌드 민감도'],
    highSchoolTips: '[문학과 영상], [독서와 작문], [미술 창작], [사회와 문화] 과목을 통해 탄탄한 인문학적 교양과 시각적 표현력을 기르세요.',
    rewardsAndChallenges: '전 세계 독자들의 수천 개 댓글과 팬아트에서 살아있는 캐릭터들이 사랑받는 것을 볼 때 창작의 고통이 모두 잊혀집니다.',
    adviceForStudents: '매일 한 장이라도 꾸준히 그리는 습관과 인간에 대한 애정이 최고의 작가를 만듭니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_game_planner',
    jobName: '게임 기획자 (Game Designer & Director)',
    aliases: ['게임기획자', '게임디렉터', '게임디자이너', '게임개발기획', '게임프로듀서'],
    category: '미디어·콘텐츠',
    interviewee: '조성훈 디렉터',
    organization: '넥슨 코리아 라이브본부',
    roleTitle: 'MMORPG 시스템 밸런스 및 던전 레이드 총괄 기획자',
    quote: '"플레이어가 주인공이 되어 잊지 못할 서사와 모험을 경험하는 가상 세계를 설계합니다."',
    summary: '게임의 세계관, 전투 시스템, 캐릭터 성장 공식, 경제 생태계를 수학적으로 설계하고 개발자·아티스트와 협업하여 유기적인 게임플레이를 완성합니다.',
    keyResponsibilities: [
      '전투 공식(대미지, 방어력, 크리티컬) 수식 모델링 및 밸런싱',
      '퀘스트 트리 및 NPC 대사, 컷신 연출 시나리오 작성',
      'UX 와이어프레임 설계 및 개발 구현 사양서(GDD) 작성',
      '유저 플레이 로그 분석을 통한 라이브 업데이트 기획'
    ],
    howToBecome: '게임공학, 소프트웨어학, 컴퓨터공학, 심리학, 경영학 등 전공 및 게임 역기획 포트폴리오',
    coreCompetency: ['수리적 시스템 설계력', '논리적 문서 작성력', '유저 심리 분석력', '타 직군과의 소통 협업'],
    highSchoolTips: '[대수], [확률과 통계], [정보], [문학과 영상], [사회와 문화] 과목을 연결하여 게임 속 경제와 규칙을 분석해보세요.',
    rewardsAndChallenges: '내가 고안한 보스 레이드 기믹을 수많은 유저들이 밤을 새워 공략하고 환호할 때 짜릿한 쾌감을 느낍니다.',
    adviceForStudents: '게임을 그냥 플레이하는 데서 멈추지 말고, "왜 이 시스템이 재미있을까?"를 역으로 뜯어보는 습관을 길러보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_lawyer',
    jobName: '변호사·기업 법무자문역',
    aliases: ['변호사', '법조인', '기업법무팀장', '로펌변호사', '공익변호사', '노무사', '법무사'],
    category: '법률·공공·외교',
    interviewee: '정다혜 파트너변호사',
    organization: '법무법인(유한) 태평양 신산업·IP팀',
    roleTitle: '인공지능 윤리 및 기술 스타트업 지식재산권 전문 변호사',
    quote: '"법은 굳어있는 문자가 아니라, 억울한 사람을 돕고 사회의 공정한 규칙을 세우는 방패입니다."',
    summary: '민·형사 소송 대리 및 법정 변론을 수행하며, 인공지능, 자율주행, 저작권 등 첨단 신산업 분야의 법률 리스크를 사전 검토하고 분쟁을 해결합니다.',
    keyResponsibilities: [
      '소송 서면(소장, 준비서면, 변론요지서) 작성 및 법정 구술 변론',
      '투자 계약서, 기술 이전 계약서 조항 검토 및 협상 대리',
      '신기술 법제도 규제 샌드박스 자문 및 법률 의견서 작성',
      '의뢰인 심층 인터뷰 및 증거 자료 수집·검증'
    ],
    howToBecome: '4년제 대학교 졸업 후 법학전문대학원(로스쿨 3년) 진학 및 변호사시험 합격',
    coreCompetency: ['논리적 비판 사고력', '치밀한 법리 해석 및 작문력', '의뢰인 공감 및 설득력', '철저한 직업 윤리'],
    highSchoolTips: '[정치와 법], [독서와 작문], [현대 사회와 윤리], [사회와 문화], [세계사]에서 논리적 주장과 근거를 구성하는 글쓰기를 훈련하세요.',
    rewardsAndChallenges: '절박한 위기에 처했던 의뢰인이 공정한 판결을 받고 다시 일어설 때 법조인으로서의 깊은 소명을 느낍니다.',
    adviceForStudents: '어려운 단어를 쓰는 것보다 복잡한 사실관계를 명쾌하고 쉬운 논리로 정리할 수 있는 글쓰기 능력을 기르세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_police_officer',
    jobName: '경찰관 & 과학수사관 (CSI)',
    aliases: ['경찰관', '경찰', '과학수사관', '형사', '사이버수사관', '프로파일러', '해양경찰'],
    category: '법률·공공·외교',
    interviewee: '문진우 경감',
    organization: '서울경찰청 과학수사과 범죄분석팀',
    roleTitle: '지문·혈흔 및 디지털 포렌식 정밀 감식 수사관',
    quote: '"범죄 현장에 남겨진 침묵의 증거를 과학으로 밝혀내어 억울함 없는 정의를 구현합니다."',
    summary: '사건 현장의 미세 증거물과 디지털 데이터를 정밀 분석하고 범죄 패턴을 프로파일링하여 시민의 생명과 안전을 수호합니다.',
    keyResponsibilities: [
      '사건 현장 보존, 잠재 지문 채취 및 루미놀 혈흔 반응 감식',
      '스마트폰 및 PC 디지털 포렌식 복구 및 악성코드 분석',
      'CCTV 영상 분석 및 용의자 동선 역추적',
      '피해자 신변 보호 및 신속한 112 현장 출동 대응'
    ],
    howToBecome: '경찰대학 졸업 또는 경찰공무원 공채 시험 합격, 경찰행정학과/법학과/컴퓨터공학과 전공',
    coreCompetency: ['관찰력 및 과학적 분석력', '투철한 준법정신과 사명감', '체력과 호신술', '비판적 추리력'],
    highSchoolTips: '[정치와 법], [화학], [생명과학], [정보], [체육], [현대 사회와 윤리]를 충실히 학습하세요.',
    rewardsAndChallenges: '결정적인 증거를 찾아내어 미제 사건을 해결하고 피해자의 눈물을 닦아줄 때 경찰관으로서의 무한한 긍지를 느낍니다.',
    adviceForStudents: '강인한 체력과 함께 따뜻한 정의감을 지닌 사람이 훌륭한 경찰관이 될 수 있습니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_firefighter',
    jobName: '소방관 & 119 인명구조대원',
    aliases: ['소방관', '소방공무원', '119구조대원', '응급구조사', '화재조사관'],
    category: '법률·공공·외교',
    interviewee: '장동혁 소방위',
    organization: '중앙119구조본부 특수구조대',
    roleTitle: '특수 재난 및 초고층 화재 인명구조 전문 소방관',
    quote: '"가장 어둡고 뜨거운 불길 속으로, 시민의 생명을 구하기 위해 가장 먼저 뛰어듭니다."',
    summary: '화재 진압, 붕괴 및 침수 재난 현장 인명 구조, 응급 환자 이송 및 화재 원인 감식을 전담하여 국민의 안전을 지킵니다.',
    keyResponsibilities: [
      '화재 현장 진입 및 농연 속 조난자 열화상 탐색·구출',
      '교통사고 및 산업재해 유압 장비 인명 구조 작업',
      '중증 응급환자 심폐소생술(CPR) 및 기도 확보 응급처치',
      '소방 시설 특별 점검 및 대국민 소방안전 교육'
    ],
    howToBecome: '소방공무원 채용시험 합격(공채/경채), 소방방재학과, 응급구조학과 전공',
    coreCompetency: ['강인한 체력과 담력', '침착한 위기 판단력', '팀워크 및 희생정신', '응급처치 숙련도'],
    highSchoolTips: '[체육1], [체육2], [물리학], [화학], [인체 구조와 기능], [현대 사회와 윤리] 과목을 통해 기초 체력과 재난 과학을 탐구하세요.',
    rewardsAndChallenges: '위험에 처했던 소중한 생명을 무사히 가족의 품으로 인계할 때의 안도감과 벅찬 감동이 가장 큽니다.',
    adviceForStudents: '평소 꾸준한 운동으로 건강한 신체를 만들고, 타인을 돕는 봉사활동에 기쁨을 느껴보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_diplomat',
    jobName: '외교관 & 국제기구 전문가',
    aliases: ['외교관', '외무영사직', '국제기구공무원', '외교통상전문가', '통상교섭관'],
    category: '법률·공공·외교',
    interviewee: '김서영 1등서기관',
    organization: '대한민국 외교부 다자경제외교국',
    roleTitle: '기후변화 협약 및 글로벌 공급망 다자외교 협상관',
    quote: '"총성 없는 전쟁터인 외교 테이블에서 대한민국의 국익과 세계 평화를 위해 협상합니다."',
    summary: '국제 조약 체결, 통상 교섭, 재외국민 보호, 공공외교 활동을 수행하며 다자간 국제회의에서 국가의 입장을 대변합니다.',
    keyResponsibilities: [
      'UN, OECD 등 다자회의 의제 분석 및 정부 대표단 교섭안 작성',
      '주요국 외교관과의 고위급 회담 의전 및 조약 문안 협상',
      '해외 체류 국민 사건사고 긴급 영사 조력 및 보호',
      'K-컬처 및 국가 브랜드를 알리는 현지 공공외교 행사 기획'
    ],
    howToBecome: '외교관후보자 선발시험 합격 후 국립외교원 1년 수련, 정치외교학, 국제학, 법학 전공',
    coreCompetency: ['외국어(영어/제2외국어) 협상력', '국제정치 및 경제 통찰력', '순발력과 설득력', '애국심과 문화적 개방성'],
    highSchoolTips: '[정치와 법], [세계사], [국제 관계와 국제기구], [심화영어], [제2외국어]를 통해 글로벌 시각을 넓히세요.',
    rewardsAndChallenges: '치열한 밤샘 협상 끝에 국익을 수호하는 문구를 국제 협약에 최종 반영시켰을 때의 성취감은 이루 말할 수 없습니다.',
    adviceForStudents: '세계 뉴스에 관심을 기울이고, 나와 다른 의견을 가진 사람을 경청하고 설득하는 토론 능력을 기르세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_furniture_craft',
    jobName: '가구 디자이너 & 목공 명장',
    aliases: ['가구디자이너', '가구제작자', '목공예가', '가구제조원', '목공원', '인테리어가구기획자'],
    category: '생활돌봄·현장실무',
    interviewee: '유진우 대표',
    organization: '우드스튜디오 결 (전통원목가구공방)',
    roleTitle: '친환경 원목 맞춤 가구 설계 및 수공예 마감 명장',
    quote: '"나무의 자연스러운 결을 살려 백 년을 쓸 수 있는 따뜻한 생활 가구를 짓습니다."',
    summary: '인간공학적인 가구 도면을 설계하고, 원목의 수종별 특성에 맞는 전통 짜맞춤 기법과 친환경 천연 오일 마감으로 최고 품질의 가구를 제작합니다.',
    keyResponsibilities: [
      '3D CAD/SketchUp을 활용한 수납 및 공간 맞춤 가구 설계',
      '수종별(월넛, 오크, 애쉬) 목재 선별, 건조 상태 및 수분율 측정',
      '테이블쏘, 루터, 대패 등 수공구 및 전동 목공 장비를 활용한 정밀 가공',
      '짜맞춤 조립, 샌딩 연마 및 천연 식물성 하드오일 마감 도장'
    ],
    howToBecome: '가구디자인학, 목조형가구학 전공 또는 직업훈련원 목공 실무 수료 및 가구제작기능사/목공예기능사 취득',
    coreCompetency: ['목재 재질 이해도', '목공 기계 안전 운용력', '정밀 치수 가공 숙련도', '공간 조형 감각'],
    highSchoolTips: '고교 과정에서 [미술], [기술·가정], [조형 탐구] 및 국가기술자격(가구제작기능사) 취득을 준비하세요.',
    rewardsAndChallenges: '거친 나무 원목이 수만 번의 손길을 거쳐 매끄럽고 편안한 식탁과 의자로 완성되어 고객의 거실을 빛낼 때 큰 보람을 느낍니다.',
    adviceForStudents: '손으로 무언가를 직접 만들고 다듬는 것의 정직한 가치를 느껴보세요. 현장 숙련기술은 인공지능 시대에도 대체될 수 없는 강력한 힘입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_shoe_craft',
    jobName: '수제화 명장 & 슈즈 디자이너',
    aliases: ['수제화제작원', '구두디자이너', '구두수선원', '신발디자이너', '가죽공예가', '구두장인'],
    category: '생활돌봄·현장실무',
    interviewee: '송철호 장인',
    organization: '성수동 수제화거리 장인협동조합',
    roleTitle: '맞춤형 오더메이드 수제화 제작 및 가죽 복원 명장',
    quote: '"사람마다 다른 발의 모양을 가장 편안하게 감싸주는 단 하나의 구두를 빚어냅니다."',
    summary: '고객의 발 둘레와 아치 치수를 정밀 측정하여 맞춤 구두골(Last)을 깎고, 고급 천연 가죽 재단, 갑피 봉제 및 웰트 제법으로 편안한 수제화를 만듭니다.',
    keyResponsibilities: [
      '발바닥 족압 및 뼈 돌출 부위 치수 측정(채촌)',
      '목형(Last) 커스텀 깎기 및 구두 패턴 도면 제도',
      '소가죽/양가죽 정밀 재단, 피할(스키), 미싱 재봉 및 창붙임',
      '손상된 명품 구두의 굽 교체, 밑창 비브람 보강 및 가죽 광택 복원'
    ],
    howToBecome: '가죽공예 및 제화 기능 전수, 성수동 수제화 아카데미 수료, 제화기능사 자격증',
    coreCompetency: ['가죽 소재 물성 파악', '족부 해부학적 이해', '바느질 및 망치질 손기술', '정성과 끈기'],
    highSchoolTips: '[기술·가정], [미술], [생활과 과학] 과목을 통해 가죽 재료와 인체 발 구조의 역학을 탐구해보세요.',
    rewardsAndChallenges: '발이 아파서 걷기 힘들었던 분이 맞춤 수제화를 신고 "날아갈 것 같다"며 활짝 웃으실 때 명장으로서의 긍지를 느낍니다.',
    adviceForStudents: '장인 정신은 사소한 1mm의 오차도 타협하지 않는 태도에서 나옵니다. 자신의 손재주를 믿고 도전해보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_landscape_architect',
    jobName: '친환경 조경원 및 도시생태 디자이너',
    aliases: ['조경원', '조경기술자', '조경사', '조경디자이너', '도시숲전문가', '원예사', '산림치유지도사'],
    category: '농림·스마트팜·바이오자원',
    interviewee: '송민재 소장',
    organization: '녹색도시생태연구소',
    roleTitle: '도심 속 바람길 숲 및 옥상 비오톱 생태 조경 전문가',
    quote: '"회색빛 콘크리트 도시 사이에 푸른 생명의 숨구멍을 틔워 사람과 자연을 잇습니다."',
    summary: '도시 공원, 수목원, 아파트 단지 생태 숲, 옥상 정원을 설계하고 기후변화에 강한 자생 수종을 선정하여 식재 및 생태계를 관리합니다.',
    keyResponsibilities: [
      '도시 열섬 현상 완화를 위한 바람길 숲 3D 조경 설계',
      '토양 성분 분석, 배수 시스템 설계 및 친환경 자재 선정',
      '수목 병충해 예방 방제 및 계절별 수목 전정·생육 관리',
      '시민 참여형 커뮤니티 가든 및 치유 숲 프로그램 기획'
    ],
    howToBecome: '조경학과, 산림자원학과, 환경원예학과 전공 및 조경기사/식물보호기사 자격',
    coreCompetency: ['수목 및 식물 생태학 지식', 'AutoCAD/SketchUp 조경 설계력', '공간 미학 감각', '자연 사랑'],
    highSchoolTips: '[생태와 환경], [생명과학], [미술], [한국지리], [생활과 과학]을 통해 자연과 인간의 공존을 탐구하세요.',
    rewardsAndChallenges: '내가 심은 작은 묘목들이 몇 년 뒤 울창한 숲이 되어 새들이 찾아오고 아이들이 뛰어노는 모습을 볼 때 가장 행복합니다.',
    adviceForStudents: '자연의 사계절 변화를 애정 어린 눈으로 관찰해보세요. 자연이 가장 위대한 디자인 스승입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_education_welfare',
    jobName: '교육복지사 & 청소년 상담전문가',
    aliases: ['교육복지사', '전문상담교사', '청소년상담사', '학교사회복지사', '진로상담사', '임상심리사'],
    category: '교육·학술·연구',
    interviewee: '배은경 팀장',
    organization: '대구광역시교육청 교육복지안전망센터',
    roleTitle: '취약계층 청소년 맞춤형 학습·정서 통합 지원 전문가',
    quote: '"한 아이의 마음에 켜진 작은 희망의 등불이 온 세상을 밝힐 수 있습니다."',
    summary: '경제적·정서적으로 어려움을 겪는 학생들을 조기 발굴하여 학습 지원, 심리 상담, 가족 기능 강화 및 지역사회 복지 자원을 연계합니다.',
    keyResponsibilities: [
      '위기 청소년 일대일 심층 면담 및 심리 정서 상태 진단',
      '방과후 학습 멘토링 및 문화 체험 성장 프로그램 운영',
      '가정 방문을 통한 부모 상담 및 긴급 생계·의료비 지원 연계',
      '학교-지자체-지역아동센터 간 복지 네트워크 협의체 운영'
    ],
    howToBecome: '사회복지학, 교육학, 청소년학, 심리학 전공 및 사회복지사 1급, 청소년상담사 자격',
    coreCompetency: ['무조건적 수용과 공감적 경청', '위기 개입 및 갈등 중재력', '지역사회 자원 동원력', '끈기와 인내'],
    highSchoolTips: '[교육학], [심리학], [사회와 문화], [현대 사회와 윤리], [화법과 언어] 과목을 통해 또래 멘토링 활동을 경험해보세요.',
    rewardsAndChallenges: '마음의 문을 닫았던 학생이 진심 어린 상담을 통해 스스로 꿈을 찾고 밝은 미소를 되찾을 때 깊은 감동을 느낍니다.',
    adviceForStudents: '상대방의 입장에서 생각해보는 역지사지의 마음을 연습하세요. 따뜻한 경청이 최고의 상담입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_ad_planner',
    jobName: '광고 크리에이티브 디렉터 (CD) & 캠페인 기획자',
    aliases: ['광고기획자', 'AE', '카피라이터', '브랜드마케터', '광고디렉터', '마케팅디렉터'],
    category: '미디어·콘텐츠',
    interviewee: '장현우 디렉터',
    organization: '제일기획 크리에이티브본부',
    roleTitle: '글로벌 브랜드 캠페인 및 디지털 바이럴 영상 총괄 디렉터',
    quote: '"15초의 짧은 울림 속에 사람들의 가치관을 바꾸고 세상을 움직이는 메시지를 담습니다."',
    summary: '소비자의 무의식적 니즈를 파악하는 인사이트를 발굴하고, 강렬한 카피와 비주얼 스토리텔링을 결합하여 브랜드 가치를 극대화하는 종합 광고 캠페인을 지휘합니다.',
    keyResponsibilities: [
      '타깃 소비자 트렌드 조사 및 브랜드 포지셔닝 전략 수립',
      '킬러 카피라이팅 및 영상 광고 스토리보드 기획',
      'CF 감독, 모델, 아트디렉터와의 프로덕션 촬영 및 편집 감수',
      '유튜브, 인스타그램, 틱톡 옴니채널 디지털 성과 측정'
    ],
    howToBecome: '광고홍보학, 미디어커뮤니케이션학, 경영학(마케팅), 심리학 전공 및 공모전 수상',
    coreCompetency: ['소비자 심리 꿰뚫는 통찰력', '독창적 아이디어 발상력', 'PT 설득력 및 프레젠테이션', '트렌드 센스'],
    highSchoolTips: '[매체 의사소통], [사회와 문화], [심리학], [문학과 영상], [독서와 작문] 과목을 통해 광고 카피와 비평 활동을 해보세요.',
    rewardsAndChallenges: '우리가 기획한 캠페인 카피가 전 국민의 유행어가 되고 브랜드 이미지를 획기적으로 개선했을 때 짜릿한 보람을 느낍니다.',
    adviceForStudents: '세상 모든 일에 호기심을 가지세요. 엉뚱한 상상이 시대를 앞서가는 최고의 크리에이티브가 됩니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_sports_data_analyst',
    jobName: '스포츠 데이터 분석관 & 전력분석팀장',
    aliases: ['스포츠데이터분석관', '전력분석관', '스포츠에이전트', '스포츠과학자', '운동생리학자', '스포츠트레이너'],
    category: '체육·스포츠·헬스케어',
    interviewee: '김태형 팀장',
    organization: '프로야구단 전력분석 데이터사이언스팀',
    roleTitle: '트랙맨(Trackman) 초고속 카메라 투구·타구 궤적 분석 전문가',
    quote: '"선수의 땀방울 하나하나를 정밀한 숫자로 해석하여 승리의 공식을 완성합니다."',
    summary: '선수들의 투구 회전수, 릴리스 포인트, 타구 발사각, 수비 위치 데이터를 AI와 통계학으로 분석하여 승리 확률을 높이는 맞춤형 전술 전략을 수립합니다.',
    keyResponsibilities: [
      '트랙맨 레이더 및 호크아이(Hawk-Eye) 광학 데이터 추출·정제',
      '상대 팀 투수/타자의 구종별 볼 배합 및 핫/콜드 존 확률 모델링',
      '선수 부상 위험도 사전 감지 및 투구 폼 바이오메카닉스 분석',
      '감독 및 코칭스태프 대상 1페이지 인포그래픽 전술 브리핑'
    ],
    howToBecome: '체육학, 스포츠과학, 통계학, 컴퓨터공학 전공 및 세이버메트릭스 분석 프로젝트',
    coreCompetency: ['스포츠 종목 이해도', 'R/Python 데이터 통계 분석', '선수단과의 원활한 소통', '승부 집념'],
    highSchoolTips: '[체육1], [체육2], [스포츠 과학], [확률과 통계], [물리학], [정보]를 연계하여 스포츠 데이터 탐구 보고서를 작성하세요.',
    rewardsAndChallenges: '우리가 분석한 전술 시프트가 경기 9회말 결정적인 아웃카운트를 잡아내며 팀이 우승했을 때 전율을 느낍니다.',
    adviceForStudents: '스포츠를 좋아하는 열정에 통계적 사고력을 더해보세요. 미래 스포츠 산업의 핵심 리더가 될 수 있습니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_cosmetic_researcher',
    jobName: '바이오 코스메틱 & 기능성 화장품 연구원',
    aliases: ['화장품연구원', '코스메틱연구원', '화장품제형연구원', '기능성화장품연구원', '뷰티사이언티스트', '조향사'],
    category: '바이오·신약',
    interviewee: '이지은 수석연구원',
    organization: '아모레퍼시픽 기술연구원 스킨케어랩',
    roleTitle: '천연 유래 항노화 펩타이드 나노 캡슐화 제형 연구원',
    quote: '"자연의 생명 에너지를 피부 깊숙이 전달하는 K-뷰티의 과학적 혁신을 만듭니다."',
    summary: '피부 장벽 개선과 미백·주름 개선을 돕는 유효 펩타이드 및 식물 줄기세포 성분을 추출하고, 피부에 부드럽게 흡수되는 최적의 유화 제형을 설계합니다.',
    keyResponsibilities: [
      '천연 식물 자원 추출물 스크리닝 및 항산화 효능 평가',
      '에멀전, 리포좀, 나노캡슐 등 안정적인 화장품 제형 처방 개발',
      '인체 피부 적용 안전성 및 알레르기 유발성 임상 시험',
      '친환경 생분해 용기 적합성 및 글로벌 비건 인증 획득'
    ],
    howToBecome: '화학과, 생명공학과, 화장품공학과, 응용화학부 전공 (석사 학위 우대)',
    coreCompetency: ['콜로이드 및 계면화학 지식', '피부 생리학', '섬세한 감각 평가력', '글로벌 규제 이해도'],
    highSchoolTips: '[화학], [생명과학], [세포와 물질대사], [생활과 과학], [미술]을 통해 화장품 원료와 유화 원리를 탐구하세요.',
    rewardsAndChallenges: '수백 번의 실패 끝에 끈적임 없이 촉촉한 제형을 완성하여 글로벌 히트 상품이 되었을 때 보람이 큽니다.',
    adviceForStudents: '화장품은 화학과 감성의 만남입니다. 일상에서 쓰는 제품의 성분표를 유심히 살펴보는 것부터 시작해보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_flight_pilot',
    jobName: '항공기 조종사 (민간 항공사 캡틴)',
    aliases: ['항공기조종사', '비행기조종사', '파일럿', '항공기기장', '부기장', '운항승무원'],
    category: '로봇·모빌리티',
    interviewee: '서정우 기장',
    organization: '대한항공 운항승무부',
    roleTitle: 'B787 드림라이너 미주·유럽 장거리 국제선 기장',
    quote: '"수백 명 승객의 소중한 생명과 여행의 설렘을 싣고 푸른 하늘을 날아오릅니다."',
    summary: '비행 전 기상 상황과 항로를 면밀히 분석하고, 이착륙 및 비행 중 첨단 항법 시스템을 운용하며 악천후 등 비상 상황에서 최고의 안전 결정을 내립니다.',
    keyResponsibilities: [
      '비행 계획서 검토, 연료량 산출 및 기상 차트(NOTAM) 브리핑',
      '항공기 외부 점검 및 계기판 전자 시스템 작동 테스트',
      '관제탑과의 영어 무선 교신 및 정밀 계기 착륙(ILS) 수행',
      '기내 비상사태 대응 및 승무원·승객 안전 총괄 지휘'
    ],
    howToBecome: '항공운항학과 졸업 또는 공군 조종장학생/비행교육원 수료 후 사업용조종사(CPL) 면허 취득 및 비행시간 1,000시간 이상 확보',
    coreCompetency: ['항공역학 및 기상학 지식', '침착한 상황 판단력', '영어 항공무선통신 유창성', '철저한 자기관리와 체력'],
    highSchoolTips: '[물리학], [역학과 에너지], [지구시스템과학], [심화영어], [수학]을 탄탄히 다지고 공간 지각력을 기르세요.',
    rewardsAndChallenges: '태풍과 난기류를 안전하게 뚫고 승객들이 무사히 목적지에 도착하여 보내는 박수 소리를 들을 때 가장 자랑스럽습니다.',
    adviceForStudents: '조종사에게 가장 중요한 것은 철저한 규칙 준수와 겸손함입니다. 꾸준한 체력 관리와 영어 습득에 힘쓰세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_elementary_teacher',
    jobName: '초등학교 교사 & 미래 인재 육성 교육자',
    aliases: ['초등학교교사', '초등교사', '교사', '초등학교선생님', '특수교사', '중등학교교사'],
    category: '교육·학술·연구',
    interviewee: '김지원 교사',
    organization: '대구교육대학교 부설초등학교',
    roleTitle: '2022 개정 교육과정 기반 에듀테크 융합 수업 연구교사',
    quote: '"아이들의 반짝이는 눈망울 속에서 대한민국의 밝은 미래를 만납니다."',
    summary: '초등학생들의 전인적 성장과 기초 학력을 책임지며, 창의적인 융합 수업과 인성 교육, 학급 경영을 통해 아이들이 자신만의 꿈을 키우도록 돕습니다.',
    keyResponsibilities: [
      '국어·수학·사회·과학·예체능 전 교과 교육과정 재구성 및 수업 진행',
      '디지털 온보딩 태블릿을 활용한 학생 맞춤형 형성평가 피드백',
      '학급 자치활동 및 또래 관계 형성을 위한 생활지도 및 학부모 상담',
      '기초학력 부진 학생 일대일 맞춤 멘토링 프로그램 운영'
    ],
    howToBecome: '전국 10개 교육대학교 또는 한국교원대/이화여대 초등교육과 졸업 후 초등교원 임용시험 합격',
    coreCompetency: ['전 교과 교수법 지식', '어린이에 대한 깊은 사랑과 인내심', '공감적 의사소통', '에듀테크 활용력'],
    highSchoolTips: '[교육의 이해], [심리학], [국어], [사회와 문화], [체육], [음악/미술] 등 전 교과를 균형 있게 이수하고 교육 봉사활동을 경험하세요.',
    rewardsAndChallenges: '자신감이 없던 아이가 선생님의 격려 한마디에 용기를 얻고 친구들과 밝게 웃을 때 교사로서 가장 큰 행복을 느낍니다.',
    adviceForStudents: '아이들의 눈높이에서 세상을 바라볼 수 있는 따뜻한 마음과 경청하는 태도를 길러주세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2'
  },
  {
    id: 'int_hotel_gm',
    jobName: '호텔 총지배인 (General Manager) & 호스피탈리티 디렉터',
    aliases: ['호텔총지배인', '호텔리어', '호텔매니저', '컨시어지', 'MICE기획자', '관광통역안내사'],
    category: '외식·호텔·뷰티·서비스',
    interviewee: '마이클 조 총지배인',
    organization: '파르나스호텔 5성급 럭셔리 지점',
    roleTitle: 'VIP 의전 및 글로벌 호스피탈리티 서비스 총괄 총지배인',
    quote: '"보이지 않는 곳에서의 완벽한 디테일이 고객에게 평생 잊지 못할 품격 있는 감동을 선사합니다."',
    summary: '호텔의 객실, 식음료(F&B), 연회, 마케팅, 인사, 재무 전 부서의 운영을 총괄하고 글로벌 정상 및 VIP 고객을 맞이하는 최고 책임자입니다.',
    keyResponsibilities: [
      '호텔 전 부서 서비스 스탠더드 수립 및 품질 모니터링',
      '국제 콘퍼런스 및 대형 MICE 행사 유치 기획',
      '고객 피드백 분석을 통한 맞춤형 VIP 서비스 프로토콜 개선',
      '글로벌 호텔 체인 브랜드 전략 및 연간 매출 목표 관리'
    ],
    howToBecome: '호텔경영학과, 관광경영학과, 국제학부 전공 후 호텔 현장 실무 경험을 거쳐 승진',
    coreCompetency: ['글로벌 비즈니스 매너', '다국어 유창성(영어/제2외국어)', '위기 관리 리더십', '고객 중심 사고'],
    highSchoolTips: '[심화영어], [제2외국어], [사회와 문화], [경제], [생활과 과학]을 이수하며 글로벌 문화와 환대 정신을 익히세요.',
    rewardsAndChallenges: '세계 각국에서 찾아온 고객들이 "인생 최고의 머무름이었다"며 따뜻한 감사의 편지를 남겨줄 때 자부심을 느낍니다.',
    adviceForStudents: '타인을 배려하고 기쁘게 만드는 것에서 보람을 느끼는 사람이라면 호스피탈리티 산업에서 최고의 리더가 될 수 있습니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 15초',
    videoHighlight: '특급 호텔의 24시간 VIP 의전과 서비스 철학'
  },
  {
    id: 'int_security_expert',
    jobName: '정보보안 전문가 & 사이버 화이트해커',
    aliases: ['정보보안전문가', '화이트해커', '사이버보안전문가', '정보보호전문가', '보안관제사', '모의해킹전문가', '보안컨설턴트', '디지털포렌식전문가', '악성코드분석가', 'ciso'],
    category: 'IT·인공지능',
    interviewee: '박도현 수석보안관',
    organization: '안랩(AhnLab) 보안위협대응센터',
    roleTitle: '국가 기반시설 및 클라우드 지능형 침해사고 대응 총괄',
    quote: '"보이지 않는 디지털 전장에서 국민의 소중한 개인정보와 국가 안보를 지키는 파수꾼입니다."',
    summary: '사이버 공격을 사전에 탐지 및 차단하고, 모의 해킹을 통해 소프트웨어와 인프라의 취약점을 보완하며 최신 랜섬웨어 및 APT 공격을 분석합니다.',
    keyResponsibilities: [
      '웹·모바일 애플리케이션 및 클라우드 침투 모의해킹 수행',
      'SIEM 및 AI 기반 이상 징후 실시간 보안관제 및 트래픽 분석',
      '신종 악성코드 역공학(Reverse Engineering) 분석 및 백신 엔진 반영',
      '기업 보안 아키텍처 및 ISO 27001 등 보안 규정 수립'
    ],
    howToBecome: '정보보호학과, 컴퓨터공학과 전공 및 정보보안기사, CISSP, CEH 자격증 취득',
    coreCompetency: ['네트워크 및 운영체제 심화 지식', '리버스 엔지니어링 및 취약점 분석력', '윤리적 책임감', '신속한 위기대응력'],
    highSchoolTips: '[정보], [인공지능 수학], [수학과제 탐구], [현대 사회와 윤리]를 이수하고 교내 코딩 및 보안 알고리즘 동아리 활동을 추천합니다.',
    rewardsAndChallenges: '대규모 해킹 위협을 선제 차단하여 수천만 사용자의 데이터 피해를 막아냈을 때 큰 자부심을 느낍니다.',
    adviceForStudents: '해킹 기술보다 더 중요한 것은 정직한 윤리의식입니다. 세상을 지키는 선한 영향력을 꿈꾸세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 45초',
    videoHighlight: '화이트해커의 하루와 실시간 사이버 침해대응 현장'
  },
  {
    id: 'int_architect',
    jobName: '건축가 & 친환경 스마트 공간설계사',
    aliases: ['건축가', '건축사', '건축설계사', '실내건축디자이너', '도시계획가', 'BIM설계사', '친환경건축전문가', '공간디자이너', '건축공학자'],
    category: '건설·건축·부동산',
    interviewee: '이승민 소장',
    organization: '삼우종합건축사사무소 하이테크설계본부',
    roleTitle: '제로에너지 빌딩 및 미래 스마트시티 총괄 건축사',
    quote: '"단순한 건물이 아니라, 그 안에서 살아갈 사람들의 삶과 온기를 담는 공간을 짓습니다."',
    summary: '인간의 삶과 도시 환경을 고려하여 기능적이고 예술적인 건축물을 설계하며, 3D BIM과 탄소중립 제로에너지 공법을 적용합니다.',
    keyResponsibilities: [
      '건축 대지 분석 및 친환경 공간 콘셉트 기획',
      'BIM 및 3D 모델링을 활용한 정밀 기본·실시설계 도면 작성',
      '일조량·에너지 소비 시뮬레이션 및 친환경 자재 선정',
      '시공 현장 감리 및 인테리어 구조 적합성 검토'
    ],
    howToBecome: '건축학과(5년제 인증) 졸업 후 실무수련 3년 거쳐 건축사 자격시험 합격',
    coreCompetency: ['공간 지각 및 조형 미학', '건축 구조 및 친환경 설비 이해', '도면 작성 및 3D 툴 활용력', '의뢰인 소통력'],
    highSchoolTips: '[기하], [물리학], [미술], [한국지리], [사회와 문화]를 통해 공간에 대한 과학적·인문학적 이해를 쌓으세요.',
    rewardsAndChallenges: '모니터 속 3D 도면이었던 공간이 실제로 지어져 수많은 사람들이 감탄하며 이용할 때 형언할 수 없는 감동을 느낍니다.',
    adviceForStudents: '평소 주변의 다양한 건축물과 도시의 골목길을 유심히 관찰하고 스케치해보는 습관을 길러보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '7분 10초',
    videoHighlight: '건축가의 스케치북부터 완공까지의 여정'
  },
  {
    id: 'int_cpa_finance',
    jobName: '공인회계사 (CPA) & 금융투자 애널리스트',
    aliases: ['공인회계사', '회계사', '세무사', '애널리스트', '펀드매니저', '금융자산운용가', '투자심사역', '은행원', '외환딜러', '증권분석사', '재무분석가'],
    category: '경영·금융·회계',
    interviewee: '정우성 회계사',
    organization: '삼일PwC회계법인 감사본부 & 딜(Deal)부문',
    roleTitle: '기업 재무제표 감사 및 M&A 가치평가 파트너',
    quote: '"숫자는 기업의 가장 진실한 언어입니다. 투명하고 건강한 경제 생태계를 세웁니다."',
    summary: '기업의 회계 투명성을 검증하는 회계감사, 기업 인수합병(M&A) 가치평가, 세무 자문 및 주식·채권 시장의 투자 수익률 분석을 총괄합니다.',
    keyResponsibilities: [
      '상장사 재무제표 정밀 회계감사 및 내부회계관리제도 평가',
      'M&A 기업 실사(FDD) 및 미래 현금흐름 할인(DCF) 가치평가',
      '법인세 절세 전략 및 조세 불복 자문',
      '산업별 시장 동향 리서치 보고서 발간 및 투자 포트폴리오 운용'
    ],
    howToBecome: '경영학, 경제학, 회계학 전공 및 공인회계사(KICPA/USCPA) 또는 세무사 시험 합격',
    coreCompetency: ['재무회계 및 세법 전문성', '수리적 분석력과 논리력', '치밀한 꼼꼼함', '투철한 직업윤리'],
    highSchoolTips: '[경제], [수학과제 탐구], [확률과 통계], [정치와 법], [사회와 문화]를 통해 경제 원리와 데이터 분석을 학습하세요.',
    rewardsAndChallenges: '나의 정밀한 감사와 조언 덕분에 기업이 경영 위기를 극복하고 투명한 우량 기업으로 성장할 때 큰 보람을 느낍니다.',
    adviceForStudents: '숫자에 밝은 것뿐만 아니라, 비즈니스의 큰 흐름을 읽는 인문사회적 통찰력을 함께 키우세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 30초',
    videoHighlight: '회계법인 파트너의 일과와 기업 가치평가의 비밀'
  },
  {
    id: 'int_veterinarian',
    jobName: '수의사 (반려동물·야생동물 전문 수의학 박사)',
    aliases: ['수의사', '반려동물수의사', '동물병원장', '야생동물수의사', '동물보건사', '가축방역관', '수의연구원'],
    category: '의료·보건·약학',
    interviewee: '한지원 원장',
    organization: '서울대 동물병원 협력 메디컬센터',
    roleTitle: '반려동물 정밀 외과 수술 및 난치성 질환 전문 수의사',
    quote: '"말하지 못하는 생명의 작은 신호를 읽어내어 따뜻한 온기로 아픔을 치유합니다."',
    summary: '반려동물 및 가축, 야생동물의 질병을 진단하고 수술 및 약물 치료를 시행하며 인수공통전염병 예방과 동물 복지를 실천합니다.',
    keyResponsibilities: [
      '초음파, CT, 혈액 검사를 통한 정밀 영상 진단',
      '정형외과 관절 수술 및 연부조직 외과 수술 집도',
      '예방접종, 영양 상담 및 행동의학 처방',
      '가축 전염병 방역 및 야생동물 구조·재활 치료'
    ],
    howToBecome: '수의과대학(예과 2년+본과 4년) 졸업 후 수의사국가고시 합격 및 면허 취득',
    coreCompetency: ['동물 해부생리학 지식', '섬세한 임상 손기술', '보호자와의 공감 소통력', '생명 존중관'],
    highSchoolTips: '[생명과학], [세포와 물질대사], [화학], [생태와 환경], [심리학]을 충실히 학습하고 동물 복지 봉사를 경험하세요.',
    rewardsAndChallenges: '죽음의 문턱에 있던 강아지와 고양이가 건강을 회복해 보호자의 품에서 꼬리를 흔들 때 최고의 감동을 받습니다.',
    adviceForStudents: '동물을 귀여워하는 마음을 넘어 생명에 대한 막중한 책임감을 가질 때 진정한 수의사가 됩니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 50초',
    videoHighlight: '동물병원 24시 응급 수술과 수의사의 사명감'
  },
  {
    id: 'int_mechanical_engineer',
    jobName: '기계공학자 & 미래 모빌리티·로보틱스 설계자',
    aliases: ['기계공학자', '기계엔지니어', '자동차공학자', '플랜트엔지니어', '공조냉동기술자', '유체기계설계사', '메카트로닉스엔지니어', '구조해석엔지니어'],
    category: '전자·반도체·제조',
    interviewee: '최동현 책임연구원',
    organization: '현대위아 친환경 모빌리티 연구소',
    roleTitle: '전기차 열관리 시스템 및 통합 열교환 모듈 설계자',
    quote: '"움직이는 모든 기계의 뼈대와 심장을 설계하여 인류의 삶을 더 안전하고 효율적으로 만듭니다."',
    summary: '전기차 파워트레인, 로봇 액추에이터, 스마트 플랜트 등의 기계 구조를 3D CAD와 유한요소해석(FEA)으로 설계하고 내구성을 검증합니다.',
    keyResponsibilities: [
      '3D CAD(CATIA, SolidWorks) 기구 설계 및 공차 해석',
      '열유체 시뮬레이션(CFD) 및 구조 강도·진동 해석',
      '시제품 제작 및 가혹 환경 신뢰성 실차 테스트',
      '경량 신소재 적용을 통한 에너지 효율 극대화'
    ],
    howToBecome: '기계공학과, 자동차공학과, 메카트로닉스공학과 전공 및 일반기계기사 자격 취득',
    coreCompetency: ['4대 역학(고체/열/유체/동역학)', '3D CAD 및 시뮬레이션', '문제 해결 집념', '팀 협업 능력'],
    highSchoolTips: '[물리학], [역학과 에너지], [미적분Ⅱ], [기하], [공학 일반] 과목을 통해 힘의 전달과 운동 원리를 깊이 탐구하세요.',
    rewardsAndChallenges: '직접 설계한 부품이 탑재된 친환경 차량이 전 세계 도로를 누비는 모습을 볼 때 가슴 벅찬 자부심을 느낍니다.',
    adviceForStudents: '수학과 물리는 공학자의 날개입니다. 일상 속 기계 장치의 작동 원리를 분해해보는 호기심을 가지세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 00초',
    videoHighlight: '차세대 모빌리티 기계 설계 및 풍동 시험 현장'
  },
  {
    id: 'int_broadcast_pd',
    jobName: '방송 연출가 (PD) & 미디어 콘텐츠 총괄 프로듀서',
    aliases: ['방송PD', '영화감독', '다큐멘터리감독', '영상편집자', '유튜브PD', '콘텐츠프로듀서', '미디어디렉터', '예능PD', '드라마PD'],
    category: '미디어·콘텐츠',
    interviewee: '신혜린 총괄PD',
    organization: 'CJ ENM 스튜디오 드래곤',
    roleTitle: '글로벌 OTT K-드라마 및 프리미엄 다큐멘터리 연출가',
    quote: '"한 편의 영상으로 시청자의 심장을 뛰게 하고, 세상을 더 따뜻한 시선으로 바라보게 만듭니다."',
    summary: '기획부터 대본 각색, 캐스팅, 촬영, 편집, 음악 선정까지 영상 콘텐츠 제작의 전 과정을 지휘하여 대중의 공감을 이끌어냅니다.',
    keyResponsibilities: [
      '참신한 기획안 작성 및 작가진과의 대본·스토리보드 개발',
      '배우 캐스팅 및 촬영 현장 연기·카메라 앵글 디렉팅',
      '프리미어/다빈치 리졸브를 활용한 컷 편집 및 색보정 감수',
      'BGM, 효과음, 자막 연출을 통한 몰입도 극대화'
    ],
    howToBecome: '신문방송학, 미디어커뮤니케이션학, 연극영화학 전공 또는 방송사 공채/외주 프로덕션 입문',
    coreCompetency: ['스토리텔링 통찰력', '현장 리더십 및 소통력', '시각·청각적 연출 감각', '위기 대처 순발력'],
    highSchoolTips: '[문학과 영상], [매체 의사소통], [사회와 문화], [음악/미술], [독서와 작문]을 통해 문화 콘텐츠 비평력을 기르세요.',
    rewardsAndChallenges: '내가 연출한 프로그램이 실시간 검색어 1위에 오르고 전 세계 시청자들에게 감동의 눈물을 전할 때 모든 피로가 씻겨 나갑니다.',
    adviceForStudents: '많은 영화와 다큐멘터리를 보고, 사람들의 이야기에 깊은 관심을 가지세요. 좋은 인간이 좋은 콘텐츠를 만듭니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 40초',
    videoHighlight: '드라마 촬영 현장 24시간 연출 비하인드'
  },
  {
    id: 'int_chef_culinary',
    jobName: '스타 셰프 & 외식 푸드테크 디렉터',
    aliases: ['조리사', '셰프', '요리사', '한식조리사', '양식조리사', '제과제빵사', '파티시에', '바리스타', '소믈리에', '푸드스타일리스트', '메뉴개발자'],
    category: '외식·호텔·뷰티·서비스',
    interviewee: '안성민 총괄셰프',
    organization: '미쉐린 가이드 2스타 레스토랑 & F&B 이노베이션랩',
    roleTitle: '한식 퀴진 현대화 및 분자요리 푸드테크 총괄 셰프',
    quote: '"접시 위에 제철 식재료의 영혼과 요리사의 진심을 담아 가장 행복한 미식 경험을 선물합니다."',
    summary: '최상의 식자재를 선별하고 창의적인 조리법과 예술적인 플레이팅으로 고객의 오감을 만족시키는 시그니처 메뉴를 개발합니다.',
    keyResponsibilities: [
      '계절별 제철 식재료 수급 및 분자 가스트로노미 조리기법 적용',
      '오감을 자극하는 코스 메뉴 구성 및 플레이팅 디자인',
      '주방 위생(HACCP) 관리, 원가 계산 및 조리팀 지휘',
      'HMR(가정간편식) 푸드테크 R&D 및 레시피 표준화'
    ],
    howToBecome: '조리학과, 호텔외식조리학과, 식품영양학과 전공 및 한식/양식/일식 조리기능사 자격',
    coreCompetency: ['절대 미각과 후각', '섬세한 칼질 및 불 조절 손기술', '지치지 않는 체력', '창의적 메뉴 기획력'],
    highSchoolTips: '[기술·가정], [화학], [생활과 과학], [미술], [세계사]를 이수하며 음식 문화와 조리 과학의 원리를 익히세요.',
    rewardsAndChallenges: '첫 입을 맛본 고객이 환한 미소를 지으며 "인생 최고의 요리였습니다"라고 찬사를 보낼 때 셰프로서의 삶에 감사합니다.',
    adviceForStudents: '좋은 요리는 화려한 기교가 아니라 식재료에 대한 정성과 먹는 사람을 위하는 배려에서 시작됩니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 35초',
    videoHighlight: '미쉐린 스타 주방의 긴박한 디너 서비스와 플레이팅'
  },
  {
    id: 'int_physical_therapist',
    jobName: '물리치료사 & 첨단 재활운동치료 전문가',
    aliases: ['물리치료사', '작업치료사', '재활치료사', '임상병리사', '방사선사', '치과위생사', '치위생사', '언어재활사', '언어치료사', '보건의료인'],
    category: '의료·보건·약학',
    interviewee: '임소연 수석물리치료사',
    organization: '국립재활원 뇌신경재활센터',
    roleTitle: '로봇 보행 재활 및 신경계 도수치료 전문 물리치료사',
    quote: '"다시 걷고 싶은 환자의 간절한 꿈에 튼튼한 다리가 되어 일상의 기적을 함께 만듭니다."',
    summary: '중추신경계 손상, 근골격계 질환, 스포츠 부상 환자의 신체 기능을 평가하고 도수치료, 전기치료 및 첨단 재활로봇을 통해 일상 복귀를 돕습니다.',
    keyResponsibilities: [
      '환자의 관절 가동범위, 근력, 균형 감각 정밀 평가',
      '도수치료(Manual Therapy) 및 슬링·필라테스 재활 운동 지도',
      '외골격 로봇 보행 훈련 파라미터 조절 및 보행 패턴 교정',
      '보호자 대상 가정 내 보조 운동 및 낙상 예방 교육'
    ],
    howToBecome: '물리치료학과(3/4년제) 졸업 후 물리치료사 국가고시 합격 및 보건복지부 면허 취득',
    coreCompetency: ['인체 해부학 및 운동역학 지식', '정확한 촉진 및 도수 손기술', '환자 공감과 격려', '체력과 인내'],
    highSchoolTips: '[생명과학], [인체 구조와 기능], [물리학], [체육], [심리학]을 통해 인체의 움직임과 근육 시스템을 탐구하세요.',
    rewardsAndChallenges: '휠체어에만 의지하던 환자가 수개월의 재활 끝에 두 발로 일어나 스스로 걸어나갈 때 함께 눈물을 흘립니다.',
    adviceForStudents: '환자의 아픔에 진심으로 공감하고 매일 1%의 회복을 함께 기뻐할 수 있는 따뜻한 치료사가 되어주세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 20초',
    videoHighlight: '로봇 재활치료와 환자의 감동적인 첫 걸음'
  },
  {
    id: 'int_dentist',
    jobName: '치과의사 & 디지털 임플란트 구강 전문의',
    aliases: ['치과의사', '치과전문의', '구강외과의사', '교정치과의사', '치과기공사', '치과임상의'],
    category: '의료·보건·약학',
    interviewee: '서민준 원장',
    organization: '연세스마트치과병원 구강외과',
    roleTitle: '3D 구강 스캐너 및 무절개 디지털 임플란트 수술 전문의',
    quote: '"환한 미소와 씹는 즐거움을 되찾아주어 삶의 질을 가장 극적으로 높여드립니다."',
    summary: '충치, 치주질환, 부정교합을 치료하고 3D 디지털 기술을 활용한 정밀 네비게이션 임플란트 및 턱관절 수술을 집도합니다.',
    keyResponsibilities: [
      '3D CBCT 및 구강 스캔 데이터를 통한 턱뼈 구조 분석',
      '무통 마취 하 충치 신경치료, 라미네이트 및 레진 수복',
      '컴퓨터 가이드 임플란트 식립 수술 및 매복 사랑니 발치',
      '투명교정 장치 설계 및 치아 교합 관계 개선'
    ],
    howToBecome: '치과대학(6년) 또는 치의학전문대학원 졸업 후 치과의사 국가고시 합격 및 면허 취득',
    coreCompetency: ['구강악안면 해부학 지식', '마이크로미터 단위 초정밀 손기술', '공간 감각', '환자 불안 완화력'],
    highSchoolTips: '[생명과학], [화학], [물리학], [미술], [보건] 과목을 통해 치아 구조와 재료학을 탐구하세요.',
    rewardsAndChallenges: '치통으로 밤잠을 설치던 환자가 편안하게 식사하고 자신감 있게 웃는 모습을 볼 때 큰 보람을 느낍니다.',
    adviceForStudents: '손재주도 중요하지만 환자의 공포심을 부드럽게 감싸주는 따뜻한 태도가 명의의 첫걸음입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 15초',
    videoHighlight: '3D 디지털 구강 스캔과 정밀 치과 진료실'
  },
  {
    id: 'int_fashion_designer',
    jobName: '패션 디자이너 & 글로벌 스타일 디렉터',
    aliases: ['패션디자이너', '의상디자이너', '스타일리스트', '의류디자이너', '텍스타일디자이너', '패션MD', '패션모델', '패션코디네이터'],
    category: '미디어·콘텐츠',
    interviewee: '김채원 디렉터',
    organization: '파리 패션위크 참가 K-컨템포러리 브랜드',
    roleTitle: '글로벌 컬렉션 런웨이 총괄 패션 디자이너',
    quote: '"옷은 단순한 천 조각이 아니라, 자신을 세상에 표현하는 가장 아름다운 예술적 갑옷입니다."',
    summary: '새로운 패션 트렌드를 선도하며 시즌별 콘셉트 기획, 원단 개발, 패턴 제도, 샘플 제작 및 런웨이 컬렉션을 총괄합니다.',
    keyResponsibilities: [
      '글로벌 트렌드 리서치 및 시즌 무드보드 기획',
      '패션 일러스트레이션 스케치 및 3D 클로(CLO) 가상 착의',
      '친환경 오가닉 원단 및 부자재 소싱, 패턴 재단 감수',
      '패션쇼 런웨이 스타일링, 룩북 촬영 및 바이어 수주회 진행'
    ],
    howToBecome: '패션디자인학과, 의류학과, 섬유공학과 전공 및 패션 포트폴리오 구축',
    coreCompetency: ['창의적 색채 및 조형 감각', '원단 물성 및 봉제 패턴 이해', '트렌드 예측력', '브랜드 비즈니스 감각'],
    highSchoolTips: '[미술 창작], [기술·가정], [사회와 문화], [세계사], [영어]를 통해 글로벌 패션 사조를 탐구하세요.',
    rewardsAndChallenges: '내가 디자인한 의상을 입은 모델이 런웨이를 걸어 나오고 관객들의 환호가 터질 때 형언할 수 없는 희열을 느낍니다.',
    adviceForStudents: '자신만의 개성과 스토리를 두려움 없이 표현해보세요. 독창적인 시선이 K-패션의 미래를 만듭니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 10초',
    videoHighlight: '패션위크 백스테이지 런웨이 준비 현장'
  },
  {
    id: 'int_flight_attendant',
    jobName: '항공승무원 & 인플라이트 안전·서비스 매니저',
    aliases: ['항공승무원', '객실승무원', '스튜어디스', '스튜어드', '항공기승무원', '공항지상직', '항공서비스전문가'],
    category: '외식·호텔·뷰티·서비스',
    interviewee: '이지민 캐빈매니저',
    organization: '아시아나항공 국제선 객실승무본부',
    roleTitle: '국제선 비상탈출 안전지휘 및 VIP 기내 서비스 사무장',
    quote: '"비행기 안에서 승객의 가장 안전한 방패이자 가장 편안한 휴식을 지키는 하늘의 미소입니다."',
    summary: '비행 전후 기내 비상장비 점검, 이착륙 시 안전 브리핑, 비상사태 시 승객 탈출 지휘 및 품격 있는 기내 식음료 서비스를 제공합니다.',
    keyResponsibilities: [
      '비행 전 도어(Door), 산소마스크, 소화기 등 객실 안전 보안 점검',
      '비상착륙·화재·감압 등 위기 상황 시 신속 탈출 지휘',
      '기내 응급환자 발생 시 심폐소생술(CPR) 및 응급처치',
      '국가별 승객 맞춤형 기내식 서빙 및 다국어 안내'
    ],
    howToBecome: '항공서비스학과, 어문계열, 인문사회계열 전공 및 어학 능력(토익/토스), 객실승무원 공채 합격',
    coreCompetency: ['위기대처 안전의식', '글로벌 매너 및 유창한 외국어', '공감적 서비스 마인드', '철저한 체력 관리'],
    highSchoolTips: '[심화영어], [제2외국어], [체육], [세계지리], [화법과 언어]를 통해 글로벌 의사소통 능력을 다지세요.',
    rewardsAndChallenges: '긴 비행 끝에 승객들이 "덕분에 너무 편안하고 안전하게 여행했습니다"라며 감사 인사를 건넬 때 가슴이 뭉클합니다.',
    adviceForStudents: '승무원의 본질은 화려함보다 승객의 안전을 지키는 책임감입니다. 건강한 신체와 밝은 배려심을 기르세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 40초',
    videoHighlight: '항공사 모의 비행 비상탈출 훈련과 기내 서비스'
  },
  {
    id: 'int_middle_high_teacher',
    jobName: '중·고등학교 교사 (교과별 전문 교육자)',
    aliases: ['중학교교사', '고등학교교사', '중등교사', '중고등학교교사', '국어교사', '수학교사', '영어교사', '과학교사', '사회교사', '역사교사', '물리교사', '화학교사', '생물교사'],
    category: '교육·학술·연구',
    interviewee: '박서현 수석교사',
    organization: '서울사범대학 부설여자고등학교',
    roleTitle: '2022 개정 교육과정 학생 선택중심 교과 지도 및 진로진학 총괄',
    quote: '"학생들이 스스로 생각하고 탐구하며 자신만의 삶의 궤적을 그리도록 돕는 길잡이입니다."',
    summary: '중·고등학생을 대상으로 심도 있는 교과 지식 전달, 학생 참여형 프로젝트 수업, 과정중심 수행평가 및 진로·진학 상담을 총괄합니다.',
    keyResponsibilities: [
      '교과별 탐구 중심 교수학습 지도안 설계 및 수업 시연',
      '고교학점제 선택과목 개설 및 학생 맞춤형 진로 이수 경로 지도',
      '서·논술형 평가 및 과정중심 수행평가 피드백 제공',
      '학급 담임으로서 생활지도, 정서 케어 및 대입 상담'
    ],
    howToBecome: '사범대학 해당 학과 졸업 또는 교직이수 후 중등학교 정교사 2급 자격 취득 및 중등교원 임용시험 합격',
    coreCompetency: ['교과 전공 심화 지식', '청소년 심리 이해 및 공감력', '수업 설계 및 의사전달력', '공정한 평가관'],
    highSchoolTips: '[교육학], [심리학], [화법과 언어], [해당 전공 교과]를 깊이 있게 탐구하고 교내 또래 멘토링 활동을 추천합니다.',
    rewardsAndChallenges: '진로를 고민하던 제자가 꿈을 찾아 원하는 분야로 당당히 진학하고 감사 인사를 전해올 때 가장 큰 보람을 느낍니다.',
    adviceForStudents: '교사는 지식을 전달하는 사람을 넘어 청소년의 삶에 긍정적인 변화를 일으키는 사람입니다. 따뜻한 사명감을 품어보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 20초',
    videoHighlight: '고등학교 교사의 하루와 학생 참여형 수업 현장'
  },
  {
    id: 'int_civil_engineer',
    jobName: '토목공학자 & 도시 인프라 엔지니어',
    aliases: ['토목공학자', '토목엔지니어', '토목설계사', '토목기사', '교량설계사', '구조기술사', '지반공학자', '수자원설계사', '도로엔지니어'],
    category: '건설·건축·부동산',
    interviewee: '김동혁 수석연구원',
    organization: '한국도로공사 스마트인프라연구원',
    roleTitle: '초장대 교량 및 스마트 지하 고속도로 지반·구조 설계 총괄',
    quote: '"세상과 세상을 연결하고, 자연재해로부터 국민의 생명을 지키는 안전한 대지를 만듭니다."',
    summary: '도로, 교량, 터널, 댐, 철도, 항만 등 국가 기반 인프라를 계획하고, 지반 안정성 및 구조 계산을 통해 100년을 견디는 인프라를 건설합니다.',
    keyResponsibilities: [
      '3D 지형 분석 및 도로·교량 노선 정밀 설계',
      '지반 조사 데이터 기반 터널 굴착 및 연약지반 개량 공법 선정',
      '지진·풍하중 등 극한 하중 구조 안전성 시뮬레이션',
      '스마트 건설 BIM 기반 현장 안전 및 시공 관리'
    ],
    howToBecome: '토목공학과, 건설환경공학과, 인프라시스템공학과 전공 및 토목기사, 토목구조기술사 취득',
    coreCompetency: ['응용역학 및 지반역학', '구조해석 및 CAD/BIM', '현장 안전의식', '대형 프로젝트 협업능력'],
    highSchoolTips: '[물리학], [역학과 에너지], [미적분Ⅱ], [기하], [지구시스템과학]을 통해 구조물의 힘의 평형과 지질 구조를 학습하세요.',
    rewardsAndChallenges: '수 킬로미터에 달하는 거대한 바다 위 다리가 완공되어 수많은 차량이 안전하게 오갈 때 공학자로서 형언할 수 없는 긍지를 느낍니다.',
    adviceForStudents: '토목은 인류 문명의 기초를 놓는 웅장한 학문입니다. 큰 그림을 보고 세상을 변화시키고 싶은 학생에게 추천합니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 55초',
    videoHighlight: '스마트 인프라 토목 현장과 안전 진단 점검'
  },
  {
    id: 'int_clinical_pathologist',
    jobName: '임상병리사 & 정밀 진단검사 전문가',
    aliases: ['임상병리사', '진단검사의학기술자', '병리검사원', '유전자검사원', '세포병리사', '임상병리기사'],
    category: '의료·보건·약학',
    interviewee: '최윤정 팀장',
    organization: '연세의료원 세브란스병원 진단검사의학과',
    roleTitle: '혈액 종양 유전자 정밀 분석 및 감염병 신속 분자진단 전문가',
    quote: '"보이지 않는 세포와 혈액 속 단서를 찾아내어 질병의 조기 진단과 치료 방향을 밝힙니다."',
    summary: '환자에게서 채취한 혈액, 체액, 조직 등의 검체를 정밀 분석하여 질병의 원인을 규명하고 의사의 정확한 진단을 뒷받침합니다.',
    keyResponsibilities: [
      '자동 혈액 분석기 및 생화학 분석기를 통한 정밀 검사',
      '실시간 PCR 및 차세대 유전체 염기서열(NGS) 분석',
      '수혈용 혈액제제 교차시험 및 수혈 안전성 검증',
      '조직 절편 제작 및 세포 병리 염색 검경'
    ],
    howToBecome: '임상병리학과(3년/4년제) 졸업 후 임상병리사 국가고시 합격 및 면허 취득',
    coreCompetency: ['진단검사의학 지식', '초정밀 피펫팅 손기술', '데이터 이상치 판독력', '철저한 위생 안전의식'],
    highSchoolTips: '[생명과학], [세포와 물질대사], [화학], [보건], [정보] 과목을 통해 분자생물학적 진단 원리를 탐구하세요.',
    rewardsAndChallenges: '미세한 혈액 이상 신호를 조기에 발견하여 환자가 치명적인 질환을 초기에 치료받을 수 있게 도왔을 때 큰 자부심을 느낍니다.',
    adviceForStudents: '정밀하고 세심한 관찰력을 가진 학생이라면 현대 의학의 눈 역할을 하는 임상병리 분야에서 빛을 발할 것입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 20초',
    videoHighlight: '대학병원 진단검사의학실 24시간 검사 프로세스'
  },
  {
    id: 'int_radiologist',
    jobName: '방사선사 & 영상의학기술 전문가',
    aliases: ['방사선사', 'MRI방사선사', 'CT검사기사', '초음파검사사', '영상의학기술자', '방사선치료사'],
    category: '의료·보건·약학',
    interviewee: '황준호 수석방사선사',
    organization: '아산병원 영상의학팀 & 중입자치료센터',
    roleTitle: '3.0T MRI 및 초정밀 방사선 암 치료 장비 운용 총괄',
    quote: '"빛과 전자기파를 통해 몸속 숨은 아픔을 가장 선명하게 시각화합니다."',
    summary: 'X선 촬영, CT, MRI, 초음파, 핵의학 영상 장비를 조작하여 정밀 의료 영상을 획득하고, 방사선 치료 장비로 암 병변을 정밀 타격합니다.',
    keyResponsibilities: [
      'CT 및 3D 혈관조영술(Angiography) 스캔 프로토콜 운용',
      'MRI 조영제 투여 및 고해상도 연부조직 영상 획득',
      '방사선 피폭 최소화(ALARA 원칙) 안전 차폐 관리',
      '중입자 및 양성자 암 치료기 환자 정자세 고정 및 정밀 조사'
    ],
    howToBecome: '방사선학과(3년/4년제) 졸업 후 방사선사 국가시험 합격 및 면허 취득',
    coreCompetency: ['방사선 물리학 및 해부학 지식', '영상 장비 정밀 조작력', '환자 안전 관리력', '응급 대처력'],
    highSchoolTips: '[물리학], [전자기와 양자], [생명과학], [인체 구조와 기능], [화학]을 이수하고 의료 영상의 물리적 원리를 탐구하세요.',
    rewardsAndChallenges: '신속하고 선명한 응급 뇌 CT 영상 덕분에 골든타임 내에 혈전 제거 수술이 성공했을 때 깊은 보람을 느낍니다.',
    adviceForStudents: '의학과 물리학, IT 기술이 융합된 첨단 의료 분야입니다. 기계와 기술에 대한 호기심을 키워보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 35초',
    videoHighlight: '최첨단 3.0T MRI 검사 현장과 방사선사의 안전 수칙'
  },
  {
    id: 'int_curator',
    jobName: '박물관·미술관 학예연구사 (큐레이터)',
    aliases: ['학예사', '큐레이터', '학예연구사', '미술관큐레이터', '박물관학예사', '전시기획자', '문화재보존원', '예술감독'],
    category: '미디어·콘텐츠',
    interviewee: '윤소희 학예연구관',
    organization: '국립현대미술관 전시학예본부',
    roleTitle: '동시대 글로벌 현대미술 특별전 및 소장품 연구 총괄 큐레이터',
    quote: '"과거와 현재의 예술 작품을 엮어 관객에게 새로운 시각적 영감과 사유의 장을 엽니다."',
    summary: '미술품 및 역사 유물의 수집, 보존, 학술 연구를 수행하고 시대의 메시지를 담은 독창적인 전시를 기획·연출합니다.',
    keyResponsibilities: [
      '전시 주제 기획 및 국내외 작가·소장처 협의 섭외',
      '소장품 학술 고증 및 전시 도록(Catalog) 연구 논문 집필',
      '전시 공간 공간 연출 디자인 및 조명·동선 디렉팅',
      '도슨트 교육 및 대중 대상 문화예술 아카데미 프로그램 기획'
    ],
    howToBecome: '미술사학, 고고미술사학, 예술학, 큐레이터학 전공 (석사 이상 우대) 및 정학예사 자격 취득',
    coreCompetency: ['미술사 및 예술철학 전문성', '전시 기획 및 공간 연출력', '외국어(영어/불어/독어 등) 소통력', '학술 작문력'],
    highSchoolTips: '[미술 창작], [미술 감상과 비평], [세계사], [한국사], [독서와 작문], [심화영어] 과목을 통해 인문예술적 소양을 기르세요.',
    rewardsAndChallenges: '수년간 준비한 전시가 열려 수많은 관람객이 작품 앞에서 깊은 위로와 감동을 받는 모습을 볼 때 최고의 행복을 느낍니다.',
    adviceForStudents: '다양한 전시를 많이 찾아보고, "왜 작가가 이 작품을 만들었을까?"를 스스로 질문해보는 비판적 감상 태도를 길러보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 05초',
    videoHighlight: '국립미술관 전시 개막 전야 큐레이터의 동선 연출'
  },
  {
    id: 'int_social_worker',
    jobName: '사회복지사 (복지관 및 의료·정신건강 전문가)',
    aliases: ['사회복지사', '사회복지전담공무원', '복지관사회복지사', '의료사회복지사', '정신건강사회복지사', '노인복지사', '장애인복지사', '아동복지상담사'],
    category: '교육·학술·연구',
    interviewee: '한상우 관장',
    organization: '종합사회복지관 지역돌봄네트워크본부',
    roleTitle: '복지 사각지대 발굴 및 민관 협력 지역사회 보장체계 총괄',
    quote: '"모든 사람이 존엄성을 지키며 살아갈 수 있도록 따뜻한 안전망을 촘촘히 엮습니다."',
    summary: '취약계층의 사회적·경제적 문제를 진단하고, 맞춤형 복지 서비스를 계획·제공하며 지역사회 자원을 연계하여 자립을 돕습니다.',
    keyResponsibilities: [
      '위기가구 사례관리(Intake-사정-개입-평가) 및 심층 상담',
      '독거노인, 장애인, 한부모가정 맞춤 복지 프로그램 기획',
      '기업 사회공헌(CSR) 펀딩 유치 및 후원자 관리',
      '지역사회보장협의체 연계를 통한 복지 안전망 구축'
    ],
    howToBecome: '사회복지학과 전공 및 사회복지사 1급 국가자격 취득',
    coreCompetency: ['인간 존중 및 공감 능력', '사례관리 및 문제해결력', '프로그램 기획 및 예산 관리력', '자원 동원력'],
    highSchoolTips: '[사회와 문화], [현대 사회와 윤리], [심리학], [사회문제 탐구]를 이수하고 지속적인 지역사회 봉사를 실천하세요.',
    rewardsAndChallenges: '절망 속에 고립되어 있던 이웃이 우리 팀의 지원으로 다시 건강하게 사회의 일원으로 복귀할 때 가장 큰 긍지를 느낍니다.',
    adviceForStudents: '사람에 대한 진심 어린 관심과 더불어 사는 사회를 향한 따뜻한 가슴을 지닌 분들에게 최고의 직업입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 50초',
    videoHighlight: '사회복지사의 밀착 가정 방문 및 복지 솔루션 회의'
  },
  {
    id: 'int_patent_attorney',
    jobName: '변리사 & 지식재산권(IP) 특허 전문가',
    aliases: ['변리사', '특허변리사', '상표변리사', '지식재산전문가', '특허전략전문가', 'ip컨설턴트'],
    category: '법률·공공·외교',
    interviewee: '이승준 대표변리사',
    organization: '특허법인 K-Intellect 첨단기술본부',
    roleTitle: '반도체·AI 원천기술 글로벌 특허 포트폴리오 구축 및 분쟁 대리',
    quote: '"연구자의 밤샘 연구로 탄생한 혁신 기술을 법적 독점권이라는 강력한 자산으로 보호합니다."',
    summary: '새로운 발명과 상표, 디자인의 특허 출원·등록을 대리하고, 국내외 특허 분쟁 및 침해 소송에서 기술적·법리적 대리를 수행합니다.',
    keyResponsibilities: [
      '발명자와의 미팅을 통한 기술 명세서 및 특허 청구항(Claim) 작성',
      '특허청 심사관 의견제출통지서(OA)에 대한 의견서 및 보정서 작성',
      '국내외 선행기술조사(Prior Art Search) 및 특허성 분석',
      '특허 무효심판 및 침해 경고장 대응, 라이선스 계약 자문'
    ],
    howToBecome: '이공계열(전자, 기계, 화학, 바이오 등) 전공 후 변리사 국가자격시험 합격',
    coreCompetency: ['첨단 기술의 원리 파악력', '치밀한 법리 논리력과 명세서 작문력', '특허 제도 이해도', '외국어(영어 등) 소통력'],
    highSchoolTips: '[물리학], [화학], [정치와 법], [독서와 작문], [미적분], [정보] 과목을 통해 과학 기술과 논리적 글쓰기를 함께 다지세요.',
    rewardsAndChallenges: '우리가 작성한 특허 덕분에 국내 스타트업이 글로벌 대기업과의 기술 분쟁에서 승리하고 유니콘 기업으로 도약할 때 큰 희열을 느낍니다.',
    adviceForStudents: '이공계 지식과 법학의 논리가 만나는 최고의 전문직입니다. 복잡한 기술을 명쾌한 문장으로 풀어내는 훈련을 해보세요.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '6분 15초',
    videoHighlight: '변리사의 발명자 기술 인터뷰와 특허 명세서 작성 현장'
  },
  {
    id: 'int_kindergarten_teacher',
    jobName: '유치원 교사 & 유아 발달 교육전문가',
    aliases: ['유치원교사', '유아교사', '유치원선생님', '어린이집교사', '보육교사', '유아발달전문가'],
    category: '교육·학술·연구',
    interviewee: '정민아 교사',
    organization: '공립 단설유치원 놀이중심교육연구회',
    roleTitle: '2019 개정 누리과정 기반 유아 놀이중심 배움 연구교사',
    quote: '"아이들의 무한한 호기심과 놀이가 곧 가장 위대한 첫 배움의 시작입니다."',
    summary: '만 3~5세 유아의 신체, 언어, 인지, 정서 발달을 지원하며 놀이 중심 교육과정을 운영하고 기본 생활 습관과 창의성을 길러줍니다.',
    keyResponsibilities: [
      '놀이 중심 환경 구성 및 유아 주도형 일과 계획·운영',
      '유아 발달 관찰 기록 및 개별 맞춤형 성장 지원',
      '학부모 상담 및 가정 연계 긍정적 양육 지원',
      '유치원 안전 점검, 위생 및 급간식 영양 관리'
    ],
    howToBecome: '유아교육과 졸업 후 유치원 정교사 2급 자격 취득 및 공립 유치원교원 임용시험 합격(공립) 또는 사립유치원 임용',
    coreCompetency: ['유아 발달 심리학 지식', '풍부한 공감과 무한한 인내심', '놀이 기획 및 상호작용력', '안전 민감성'],
    highSchoolTips: '[유아교육], [심리학], [음악/미술], [문학], [체육] 과목을 이수하며 아동에 대한 애정과 예술적 표현력을 키우세요.',
    rewardsAndChallenges: '처음 입학해 낯설어 울던 아이가 교사를 믿고 밝게 웃으며 매일 새로운 놀이를 주도해 나갈 때 이루 말할 수 없는 감동을 받습니다.',
    adviceForStudents: '아이들의 순수한 눈높이를 존중하고 따뜻한 미소로 품어줄 수 있는 마음가짐이 가장 소중한 자질입니다.',
    careerNetUrl: 'https://www.career.go.kr/cloud/w/interview/job?listType=2',
    videoDuration: '5분 30초',
    videoHighlight: '유치원 교사의 하루와 유아 주도 놀이수업 현장'
  }
];

// =========================================================================
// Strict High-Precision Matcher for CareerNet Interviews (Zero False Positives)
// =========================================================================

// Canonical strict mapping dictionary: explicit terms that definitively map to an interview
const STRICT_KEYWORD_MAP: Array<{ keywords: string[]; interviewId: string }> = [
  {
    interviewId: 'int_security_expert',
    keywords: ['정보보안', '사이버보안', '화이트해커', '모의해킹', '악성코드분석', '보안관제사', '디지털포렌식', 'ciso']
  },
  {
    interviewId: 'int_ai_engineer',
    keywords: ['인공지능엔지니어', '인공지능연구원', 'ai엔지니어', 'ai개발자', 'ai연구원', '머신러닝엔지니어', '딥러닝엔지니어', '프롬프트엔지니어', '거대언어모델']
  },
  {
    interviewId: 'int_data_scientist',
    keywords: ['데이터사이언티스트', '빅데이터전문가', '데이터분석가', '빅데이터분석가', '데이터엔지니어', '비즈니스인텔리전스', '세이버메트리션']
  },
  {
    interviewId: 'int_sw_developer',
    keywords: ['소프트웨어개발자', '소프트웨어엔지니어', '웹개발자', '앱개발자', '모바일개발자', '백엔드개발자', '프론트엔드개발자', '풀스택개발자', '클라우드아키텍트', '클라우드엔지니어', '임베디드개발자', '시스템개발자', '서버개발자']
  },
  {
    interviewId: 'int_semiconductor_engineer',
    keywords: ['반도체공정', '반도체설계', '반도체소자', '반도체엔지니어', '반도체연구원', '메모리반도체', '웨이퍼공정', '집적회로설계', 'fab엔지니어']
  },
  {
    interviewId: 'int_renewable_energy',
    keywords: ['신재생에너지', '태양광발전', '풍력발전', '수소에너지', '이차전지연구원', '배터리엔지니어', '배터리연구원', '재생에너지']
  },
  {
    interviewId: 'int_doctor',
    keywords: ['외과의사', '내과의사', '소아과의사', '정형외과의사', '신경외과의사', '가정의학과의사', '이비인후과의사', '안과의사', '피부과의사', '정신건강의학과의사', '영상의학과의사', '마취통증의학과의사', '산부인과의사', '흉부외과의사', '응급의학과의사', '일반외과의사', '의과학자']
  },
  {
    interviewId: 'int_dentist',
    keywords: ['치과의사', '치과전문의', '구강악안면외과', '치과교정과', '치주과전문의']
  },
  {
    interviewId: 'int_veterinarian',
    keywords: ['수의사', '반려동물수의사', '야생동물수의사', '동물병원장', '가축방역관']
  },
  {
    interviewId: 'int_pharmacist',
    keywords: ['약사', '병원약사', '임상약사', '조제약사', '신약개발연구원', '제약연구원', '바이오의약연구원']
  },
  {
    interviewId: 'int_nurse',
    keywords: ['간호사', '전문간호사', '수술실간호사', '중환자실간호사', '병동간호사', '마취전문간호사', '감염관리간호사']
  },
  {
    interviewId: 'int_physical_therapist',
    keywords: ['물리치료사', '작업치료사', '도수치료사', '재활운동치료사', '스포츠물리치료사']
  },
  {
    interviewId: 'int_clinical_pathologist',
    keywords: ['임상병리사', '진단검사의학기술자', '병리검사원', '유전자검사원']
  },
  {
    interviewId: 'int_radiologist',
    keywords: ['방사선사', 'mri방사선사', 'ct검사기사', '초음파검사사', '영상의학기술자', '방사선치료사']
  },
  {
    interviewId: 'int_speech_therapist',
    keywords: ['언어치료사', '언어재활사', '의사소통발달치료사']
  },
  {
    interviewId: 'int_autonomous_robot',
    keywords: ['로봇공학자', '로봇엔지니어', '자율주행전문가', '로봇연구원', '로봇제어공학자', '드론전문가', '무인기엔지니어']
  },
  {
    interviewId: 'int_aerospace_engineer',
    keywords: ['항공우주공학자', '항공우주연구원', '인공위성연구원', '로켓엔지니어', '발사체연구원', '우주비행체']
  },
  {
    interviewId: 'int_mechanical_engineer',
    keywords: ['기계공학자', '기계엔지니어', '기계설계사', '자동차공학자', '자동차설계엔지니어', '메카트로닉스엔지니어', '플랜트기계', '공조냉동기술자']
  },
  {
    interviewId: 'int_civil_engineer',
    keywords: ['토목공학자', '토목엔지니어', '토목설계사', '토목기사', '교량설계사', '토목구조기술사', '지반공학자']
  },
  {
    interviewId: 'int_architect',
    keywords: ['건축사', '건축가', '건축설계사', '건축공학자', 'bim설계사', '친환경건축전문가', '실내건축디자이너', '공간디자이너']
  },
  {
    interviewId: 'int_cpa_finance',
    keywords: ['공인회계사', '회계사', '세무사', '금융투자애널리스트', '펀드매니저', '투자심사역', '자산운용가', '외환딜러', '재무분석가']
  },
  {
    interviewId: 'int_lawyer',
    keywords: ['변호사', '로펌변호사', '기업법무팀장', '법률자문역', '공익변호사', '변호사시험']
  },
  {
    interviewId: 'int_patent_attorney',
    keywords: ['변리사', '특허변리사', '지식재산권전문가', '특허전략전문가']
  },
  {
    interviewId: 'int_police_officer',
    keywords: ['경찰관', '과학수사관', '형사', '사이버수사관', '프로파일러', '해양경찰관', '경찰공무원']
  },
  {
    interviewId: 'int_firefighter',
    keywords: ['소방관', '소방공무원', '119구조대원', '응급구조사', '화재조사관', '소방방재기술자']
  },
  {
    interviewId: 'int_diplomat',
    keywords: ['외교관', '외무영사직', '국제기구공무원', '외교관후보자', '통상교섭관']
  },
  {
    interviewId: 'int_kindergarten_teacher',
    keywords: ['유치원교사', '유아교사', '유치원선생님', '어린이집교사', '보육교사']
  },
  {
    interviewId: 'int_elementary_teacher',
    keywords: ['초등학교교사', '초등교사', '초등학교선생님']
  },
  {
    interviewId: 'int_middle_high_teacher',
    keywords: ['중학교교사', '고등학교교사', '중등교사', '중고등학교교사', '국어교사', '수학교사', '영어교사', '과학교사', '사회교사', '역사교사', '물리교사', '화학교사', '생물교사']
  },
  {
    interviewId: 'int_education_welfare',
    keywords: ['교육복지사', '전문상담교사', '청소년상담사', '학교사회복지사', '진로상담사', '진로진학상담교사']
  },
  {
    interviewId: 'int_social_worker',
    keywords: ['사회복지사', '사회복지전담공무원', '복지관사회복지사', '의료사회복지사', '정신건강사회복지사', '노인복지사', '장애인복지사']
  },
  {
    interviewId: 'int_curator',
    keywords: ['학예사', '큐레이터', '학예연구사', '박물관학예사', '미술관큐레이터', '전시기획자']
  },
  {
    interviewId: 'int_webtoon_writer',
    keywords: ['웹툰작가', '만화가', '웹툰콘티작가', '웹소설작가']
  },
  {
    interviewId: 'int_game_planner',
    keywords: ['게임기획자', '게임디렉터', '게임디자이너', '게임시나리오라이터', '게임시스템기획자']
  },
  {
    interviewId: 'int_broadcast_pd',
    keywords: ['방송pd', '드라마pd', '예능pd', '다큐멘터리감독', '영화감독', '영상프로듀서', '방송연출가', '방송디렉터']
  },
  {
    interviewId: 'int_ad_planner',
    keywords: ['광고기획자', '광고ae', '카피라이터', '브랜드마케터', '크리에이티브디렉터']
  },
  {
    interviewId: 'int_sports_data_analyst',
    keywords: ['스포츠데이터분석관', '스포츠전력분석관', '스포츠에이전트', '스포츠과학자']
  },
  {
    interviewId: 'int_cosmetic_researcher',
    keywords: ['화장품연구원', '코스메틱연구원', '화장품제형연구원', '기능성화장품연구원', '조향사']
  },
  {
    interviewId: 'int_fashion_designer',
    keywords: ['패션디자이너', '의상디자이너', '의류디자이너', '패션스타일리스트', '텍스타일디자이너']
  },
  {
    interviewId: 'int_chef_culinary',
    keywords: ['셰프', '조리사', '호텔조리사', '한식조리사', '양식조리사', '일식조리사', '중식조리사', '제과제빵사', '파티시에', '메뉴개발자']
  },
  {
    interviewId: 'int_flight_pilot',
    keywords: ['항공기조종사', '비행기조종사', '민간항공기기장', '파일럿', '항공기부기장']
  },
  {
    interviewId: 'int_flight_attendant',
    keywords: ['항공승무원', '객실승무원', '스튜어디스', '스튜어드', '캐빈크루']
  },
  {
    interviewId: 'int_hotel_gm',
    keywords: ['호텔총지배인', '호텔리어', '호텔매니저', '컨시어지', '호스피탈리티디렉터']
  },
  {
    interviewId: 'int_furniture_craft',
    keywords: ['가구디자이너', '가구제작자', '목공예가', '목공명장', '원목가구제작원']
  },
  {
    interviewId: 'int_shoe_craft',
    keywords: ['수제화제작원', '구두장인', '구두수선명장', '신발디자이너', '제화명장']
  },
  {
    interviewId: 'int_landscape_architect',
    keywords: ['친환경조경원', '조경사', '조경기술자', '조경디자이너', '도시숲전문가', '산림치유지도사']
  }
];

export const findCareerInterview = (
  jobName: string, 
  rawCategory: string = '', 
  rawSummary: string = ''
): CareerInterviewItem | null => {
  if (!jobName || typeof jobName !== 'string') return null;

  const clean = jobName.replace(/[\s\(\)·\-\/\[\]_]/g, '').toLowerCase();
  if (!clean || clean.length === 0) return null;

  // 1. Direct Exact Matching against item names and full aliases
  for (const item of CAREERNET_INTERVIEW_LIST) {
    const cleanItemName = item.jobName.replace(/[\s\(\)·\-\/\[\]_]/g, '').toLowerCase();
    if (clean === cleanItemName) {
      return item;
    }
    for (const alias of item.aliases) {
      const cleanAlias = alias.replace(/[\s\(\)·\-\/\[\]_]/g, '').toLowerCase();
      if (clean === cleanAlias) {
        return item;
      }
    }
  }

  // 2. Strict Specific Keyword Term Matching (Only explicit, unambiguous compound terms)
  for (const group of STRICT_KEYWORD_MAP) {
    for (const kw of group.keywords) {
      const cleanKw = kw.replace(/[\s\(\)·\-\/\[\]_]/g, '').toLowerCase();
      // Match if clean job title equals the keyword, or starts/ends with the keyword
      if (clean === cleanKw || clean.startsWith(cleanKw) || clean.endsWith(cleanKw) || clean.includes(cleanKw)) {
        // Special safety check for doctor vs dentist/vet
        if (group.interviewId === 'int_doctor') {
          if (clean.includes('치과') || clean.includes('수의') || clean.includes('한의')) {
            continue;
          }
        }
        // Special safety check for elementary teacher vs middle/high or kindergarten
        if (group.interviewId === 'int_elementary_teacher') {
          if (clean.includes('중학교') || clean.includes('고등학교') || clean.includes('중등') || clean.includes('유치원') || clean.includes('어린이집') || clean.includes('교수') || clean.includes('강사')) {
            continue;
          }
        }
        // Special safety check for nurse vs nursing assistant (간호조무사)
        if (group.interviewId === 'int_nurse') {
          if (clean.includes('조무사') || clean.includes('간병인')) {
            continue;
          }
        }
        // Special safety check for SW developer vs simple office clerk
        if (group.interviewId === 'int_sw_developer') {
          if (clean.includes('사무원') || clean.includes('단순') || clean.includes('수리기사') || clean.includes('설치기사')) {
            continue;
          }
        }

        const found = CAREERNET_INTERVIEW_LIST.find(i => i.id === group.interviewId);
        if (found) return found;
      }
    }
  }

  // 3. Exact Substring Match on multi-syllable aliases (length >= 4) with safety guards
  for (const item of CAREERNET_INTERVIEW_LIST) {
    for (const alias of item.aliases) {
      const cleanAlias = alias.replace(/[\s\(\)·\-\/\[\]_]/g, '').toLowerCase();
      if (cleanAlias.length >= 4 && clean.includes(cleanAlias)) {
        // Guard against false positives
        if (item.id === 'int_doctor' && (clean.includes('치과') || clean.includes('수의') || clean.includes('한의'))) continue;
        if (item.id === 'int_elementary_teacher' && (clean.includes('중학교') || clean.includes('고등학교') || clean.includes('유치원') || clean.includes('교수'))) continue;
        return item;
      }
    }
  }

  // If no strict, authentic match is found, return null (DO NOT FALL BACK TO UNRELATED MENTORS!)
  return null;
};

