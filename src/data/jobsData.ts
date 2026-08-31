import { Job } from '../types';
import { ADDITIONAL_JOBS_DATA } from './additionalJobs';

const BASE_JOBS_DATA: Job[] = [
  // =================================================================
  // [1] IT·인공지능·소프트웨어 분야
  // =================================================================
  {
    id: 'job_ai_engineer',
    name: 'AI·머신러닝 엔지니어',
    category: 'IT·인공지능',
    desc: '대규모 데이터셋을 기반으로 생성형 AI(LLM), 컴퓨터 비전, 자연어 처리 딥러닝 모델을 설계하고 실시간 서비스를 위해 모델을 최적화·경량화하여 배포합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['수학적 최적화 및 선형대수', 'PyTorch/TensorFlow 딥러닝 프레임워크', 'LLM 파인튜닝 & RAG 파이프라인', '분산 컴퓨팅'],
    relatedDepartments: ['인공지능공학과 (AI학부)', '컴퓨터공학과 (소프트웨어학부)', '수학과', '데이터사이언스학과'],
    relatedSubjects: ['인공지능 수학', '미적분Ⅰ', '미적분Ⅱ', '기하', '정보', '데이터 과학', '확률과 통계'],
    educationLevel: '대학교 졸업 이상 (석·박사 우대)'
  },
  {
    id: 'job_data_scientist',
    name: '빅데이터 사이언티스트',
    category: 'IT·인공지능',
    desc: '정형·비정형 대용량 데이터를 수집·전처리하고 고급 통계 분석 및 머신러닝 예측 알고리즘을 적용하여 기업의 전략적 비즈니스 의사결정을 도출합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['통계적 가설검정 및 회귀분석', 'SQL & 대용량 데이터 파이프라인', '머신러닝 알고리즘 모델링', '데이터 시각화(Tableau, Python)'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '데이터사이언스학과', '통계학과', '경영학과'],
    relatedSubjects: ['확률과 통계', '실용 통계', '미적분Ⅰ', '정보', '데이터 과학', '대수'],
    educationLevel: '대학교 졸업 이상 (석사 우대)'
  },
  {
    id: 'job_cloud_architect',
    name: '클라우드 시스템 아키텍트 (DevOps)',
    category: 'IT·인공지능',
    desc: 'AWS, GCP, Azure 등 글로벌 클라우드 환경에서 대규모 트래픽을 견디는 확장 가능한 서버 인프라를 설계하고 CI/CD 자동화 배포 환경을 구축합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['클라우드 아키텍처 설계', '쿠버네티스 & 도커 컨테이너 오케스트레이션', 'CI/CD 파이프라인 자동화', '네트워크 보안'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '정보보안학과', '전자전기공학과'],
    relatedSubjects: ['정보', '정보과제연구', '네트워크 통신', '미적분Ⅰ', '확률과 통계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_cyber_security',
    name: '정보보안 전문가·화이트해커',
    category: 'IT·인공지능',
    desc: '네트워크 침해 사고를 방어하고 모의 해킹(Penetration Testing)을 통해 시스템 취약점을 분석하며 암호화 프로토콜 및 보안 관제 정책을 수립합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['네트워크 보안 프로토콜', '취약점 진단 및 리버스 엔지니어링', '보안 관제 및 악성코드 분석', '암호학 기초'],
    relatedDepartments: ['정보보안학과 (사이버보안학부)', '컴퓨터공학과 (소프트웨어학부)', '수학과'],
    relatedSubjects: ['정보', '인공지능 수학', '대수', '이산수학', '윤리와 사상', '현대사회와 윤리'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_fullstack_dev',
    name: '풀스택 웹·앱 개발자',
    category: 'IT·인공지능',
    desc: '사용자 인터페이스(프론트엔드)와 서버 로직 및 데이터베이스(백엔드)를 모두 설계·구현하며 현대적인 웹/모바일 소프트웨어 서비스를 개발합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['TypeScript/JavaScript & React', 'RESTful API & 백엔드 아키텍처', '관계형/비관계형 DB 설계', 'Git 협업 및 성능 최적화'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '디지털미디어학과', '소프트웨어응용학부'],
    relatedSubjects: ['정보', '프로그래밍', '데이터 과학', '미적분Ⅰ', '독서와 작문'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_blockchain_dev',
    name: '블록체인·스마트 컨트랙트 개발자',
    category: 'IT·인공지능',
    desc: '탈중앙화 금융(DeFi), 디지털 자산 및 보안 인증을 위한 스마트 컨트랙트와 분산 원장 네트워크 합의 알고리즘을 개발합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['Solidity 및 스마트 컨트랙트 보안', '합의 메커니즘 분석', '암호학 기초', 'Web3 생태계 이해'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '정보보안학과', '수학과', '금융공학전공'],
    relatedSubjects: ['정보', '대수', '확률과 통계', '경제', '인공지능 수학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_game_client_dev',
    name: '메타버스·게임 엔진 개발자',
    category: 'IT·인공지능',
    desc: 'Unreal 및 Unity 3D 게임 엔진을 기반으로 실시간 3D 렌더링 파이프라인, 물리 시뮬레이션, VR/AR 가상공간 인터랙션을 구현합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['C++/C# 코딩', '3D 그래픽스 및 셰이더 프로그래밍', '물리 엔진 및 선형대수학', '게임 최적화'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '게임미디어학과', '소프트웨어학과'],
    relatedSubjects: ['기하', '물리학', '역학과 에너지', '정보', '미적분Ⅰ', '미술'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_nlp_researcher',
    name: '언어지능·음성인식 AI 연구원',
    category: 'IT·인공지능',
    desc: '자연어 이해(NLU), 기계 번역, 음성 합성(TTS/STT), 다국어 거대 언어모델을 연구하고 사람과 자연스럽게 대화하는 AI 모델을 고도화합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['Transformer 아키텍처 이해', '음성 신호 처리 및 자연어 형태소 분석', 'Python/PyTorch', '코퍼스 데이터 엔지니어링'],
    relatedDepartments: ['인공지능공학과 (AI학부)', '언어학과', '컴퓨터공학과 (소프트웨어학부)', '국어국문학과'],
    relatedSubjects: ['인공지능 수학', '언어생활 탐구', '화법과 언어', '정보', '영어 독해와 작문'],
    educationLevel: '대학원 석·박사 이상'
  },

  // =================================================================
  // [2] 전자·반도체·제조 분야
  // =================================================================
  {
    id: 'job_semiconductor_eng',
    name: '반도체 소자·공정 설계 엔지니어',
    category: '전자·반도체·제조',
    desc: '나노 단위의 초미세 반도체 회로(IC)를 설계하고 8대 제조 공정 수율 개선 및 차세대 첨단 패키징을 연구합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['양자역학 및 고체물리학', '반도체 8대 공정 이해', '회로 시뮬레이션(SPICE)', '데이터 분석'],
    relatedDepartments: ['전자전기공학과', '물리학과', '화학공학과 (신소재공학과)', '기계공학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '미적분Ⅰ', '미적분Ⅱ', '기하', '화학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_vlsi_designer',
    name: '시스템반도체(SoC) 로직 설계자',
    category: '전자·반도체·제조',
    desc: '스마트폰 AP, 인공지능 NPU, 차량용 반도체 등 대규모 집적회로(VLSI)를 Verilog/VHDL 하드웨어 기술 언어로 설계하고 검증합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['Verilog/SystemVerilog RTL 설계', '디지털 논리회로 및 컴퓨터 구조', 'FPGA 프로토타이핑', '타이밍 검증'],
    relatedDepartments: ['전자전기공학과', '반도체공학과', '컴퓨터공학과 (소프트웨어학부)'],
    relatedSubjects: ['물리학', '전자기와 양자', '정보', '대수', '미적분Ⅰ', '미적분Ⅱ'],
    educationLevel: '대학교 졸업 이상 (석사 우대)'
  },
  {
    id: 'job_display_eng',
    name: '차세대 디스플레이(OLED·MicroLED) 연구원',
    category: '전자·반도체·제조',
    desc: '폴더블 스마트폰, 차량용 곡면 디스플레이, 마이크로 LED 및 홀로그램 광학 소자를 연구하고 유기 박막 증착 공정을 최적화합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['광학 및 유기발광 재료 지식', '박막 트랜지스터(TFT) 공정', '화질 및 광학 측정', '소재 물성 분석'],
    relatedDepartments: ['전자전기공학과', '신소재공학과', '화학공학과', '물리학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '화학', '물질과 에너지', '미적분Ⅰ', '기하'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_embedded_engineer',
    name: '임베디드 하드웨어·펌웨어 엔지니어',
    category: '전자·반도체·제조',
    desc: '스마트 가전, 산업용 제어기, 드론 및 의료기기의 마이크로컨트롤러(MCU) 펌웨어를 코딩하고 전자 회로 기판(PCB)을 설계합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['C/C++ 임베디드 프로그래밍', '회로도 아트워크(OrCAD/Altium)', '센서 및 통신 프로토콜(CAN, SPI, I2C)', '오실로스코프 계측'],
    relatedDepartments: ['전자전기공학과', '제어계측공학과', '정보통신공학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '정보', '미적분Ⅰ', '로봇과 공학세계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_precision_machining',
    name: '스마트팩토리·초정밀 가공 엔지니어',
    category: '전자·반도체·제조',
    desc: 'IoT 센서와 산업용 로봇이 연결된 지능형 자동화 제조 라인을 설계하고 5축 CNC 가공 및 공정 이상 감지 시스템을 구축합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['PLC 제어 및 스마트팩토리 프로토콜', 'CAD/CAM 정밀 3D 모델링', '열유체 및 구조 역학 해석', '통계적 공정 관리(SPC)'],
    relatedDepartments: ['기계공학과', '산업공학과', '메카트로닉스공학과'],
    relatedSubjects: ['물리학', '역학과 에너지', '기하', '미적분Ⅰ', '창의 공학 설계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_aerospace_propulsion',
    name: '항공우주 발사체·추진체 연구원',
    category: '전자·반도체·제조',
    desc: '우주 발사체 로켓 엔진의 액체 추진 시스템, 위성 궤도 제어 시스템 및 항공기 가스터빈 연소 메커니즘을 시뮬레이션하고 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['유체역학 및 열역학', '초음속 공기역학 해석', '구조 진동 및 충격 해석', '궤도역학 계산'],
    relatedDepartments: ['항공우주공학과', '기계공학과', '물리학과'],
    relatedSubjects: ['물리학', '역학과 에너지', '미적분Ⅰ', '미적분Ⅱ', '기하', '화학'],
    educationLevel: '대학교 졸업 이상 (석·박사 중심)'
  },

  // =================================================================
  // [3] 로봇·모빌리티 분야
  // =================================================================
  {
    id: 'job_robot_eng',
    name: '지능형 로봇·자율주행 시스템 연구원',
    category: '로봇·모빌리티',
    desc: '휴머노이드 로봇의 보행 동역학, 자율주행 차량의 센서 융합(라이다/카메라) 및 모터 정밀 제어 알고리즘을 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['ROS(로봇 운영체제)', 'SLAM 및 경로 계획 알고리즘', '동역학 해석', 'C++/Python 코딩', '임베디드 제어'],
    relatedDepartments: ['기계공학과', '전자전기공학과', '미래자동차공학과 (스마트모빌리티학부)', '컴퓨터공학과 (소프트웨어학부)'],
    relatedSubjects: ['물리학', '역학과 에너지', '기하', '미적분Ⅰ', '미적분Ⅱ', '로봇과 공학세계', '창의 공학 설계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_ev_powertrain',
    name: '전기차(EV) 구동모터·인버터 설계자',
    category: '로봇·모빌리티',
    desc: '친환경 전기자동차의 핵심인 고효율 구동 모터 전자기장 설계, 전력 변환 인버터 및 에너지 회생제동 시스템을 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['전자기장 해석(Maxwell/Ansys)', '전력전자(Power Electronics)', '모터 제어(벡터 제어)', '방열 설계'],
    relatedDepartments: ['미래자동차공학과 (스마트모빌리티학부)', '전자전기공학과', '기계공학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '역학과 에너지', '미적분Ⅰ', '기하'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_uam_designer',
    name: '도심항공교통(UAM)·드론 기체 설계자',
    category: '로봇·모빌리티',
    desc: '미래 에어택시인 수직이착륙(eVTOL) 기체의 경량 복합재 구조, 로터 블레이드 공력 성능 및 충돌 회피 항법 시스템을 연구합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['비행체 공력 해석', '탄소섬유 복합소재 설계', '비행 제어 법칙(Flight Control Laws)', '자율비행 항법'],
    relatedDepartments: ['항공우주공학과', '기계공학과', '신소재공학과'],
    relatedSubjects: ['물리학', '역학과 에너지', '기하', '미적분Ⅰ', '미적분Ⅱ', '정보'],
    educationLevel: '대학교 졸업 이상 (석사 우대)'
  },
  {
    id: 'job_autonomous_vision',
    name: '자율주행 인지·센서 퓨전 엔지니어',
    category: '로봇·모빌리티',
    desc: '차량 주변의 360도 카메라 영상, 라이다 포인트 클라우드, 레이더 신호를 결합하여 실시간으로 보행자와 장애물을 인식하는 AI를 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['3D 컴퓨터 비전', 'Point Cloud 처리', '딥러닝 객체 검출/트래킹', '임베디드 엣지 컴퓨팅'],
    relatedDepartments: ['인공지능공학과 (AI학부)', '컴퓨터공학과 (소프트웨어학부)', '전자전기공학과'],
    relatedSubjects: ['인공지능 수학', '기하', '미적분Ⅰ', '정보', '데이터 과학', '물리학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_rehab_robotics',
    name: '의료·웨어러블 재활 로봇 엔지니어',
    category: '로봇·모빌리티',
    desc: '보행 장애 환자나 근력 보조가 필요한 작업자를 위해 착용형 엑소스켈레톤(외골격) 로봇 기구학 및 생체 신호(EMG) 감응 제어를 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['생체역학(Biomechanics)', '근전도 신호 분석', '인체공학적 기구 설계', '순응 제어(Impedance Control)'],
    relatedDepartments: ['바이오의공학과', '기계공학과', '전자전기공학과', '물리치료학과'],
    relatedSubjects: ['물리학', '역학과 에너지', '생명과학', '미적분Ⅰ', '로봇과 공학세계'],
    educationLevel: '대학교 졸업 이상'
  },

  // =================================================================
  // [4] 환경·에너지·신소재 분야
  // =================================================================
  {
    id: 'job_battery_researcher',
    name: '이차전지·차세대 배터리 연구원',
    category: '환경·에너지·신소재',
    desc: '전기차 및 에너지 저장장치(ESS)를 위한 고에너지 밀도 전고체 배터리, 하이니켈 양극재·실리콘 음극재 신물질을 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['전기화학 반응 분석', '신소재 결정 구조 분석(XRD, SEM)', '배터리 열화 메커니즘 해석', '실험 설계'],
    relatedDepartments: ['화학공학과 (신소재공학과)', '화학과', '기계공학과', '신소재공학과'],
    relatedSubjects: ['화학', '물질과 에너지', '화학 반응의 세계', '물리학', '미적분Ⅰ', '기후변화와 지속가능한 세계'],
    educationLevel: '대학교 졸업 이상 (석·박사 중심)'
  },
  {
    id: 'job_hydrogen_energy',
    name: '수소 에너지·연료전지 시스템 연구원',
    category: '환경·에너지·신소재',
    desc: '친환경 그린수소 수전해 생산 기술, 연료전지 스택의 백금 저감 촉매 및 수소 고압 저장·운송 인프라를 연구합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['열화학 및 촉매 반응 공학', '연료전지 막전극접합체(MEA) 개발', '수소 안전 공학', '유체 해석'],
    relatedDepartments: ['화학공학과 (신소재공학과)', '에너지자원공학과', '기계공학과'],
    relatedSubjects: ['화학', '화학 반응의 세계', '물리학', '역학과 에너지', '미적분Ⅰ', '생태와 환경'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_carbon_neutral',
    name: '탄소포집(CCUS) & 기후변화 컨설턴트',
    category: '환경·에너지·신소재',
    desc: '산업 시설에서 배출되는 이산화탄소를 포집·활용·저장(CCUS)하는 화학 공정을 설계하고 기업의 ESG 탄소배출권 평가를 수행합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['분리공정 및 흡수제 개발', '온실가스 인벤토리 산정', 'ESG 규제 및 탄소배출권 메커니즘', '공정 전주기 평가(LCA)'],
    relatedDepartments: ['환경공학과', '화학공학과 (신소재공학과)', '지구환경과학과'],
    relatedSubjects: ['화학', '지구과학', '기후변화와 환경생태', '지구시스템과학', '경제', '확률과 통계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_semiconductor_materials',
    name: '첨단 전자소재·나노 신소재 개발자',
    category: '환경·에너지·신소재',
    desc: '그래핀, 2차원 반도체 소재, 초전도체, 열전 변환 재료 등 차세대 전자·소자에 적용될 나노 스케일의 혁신 재료를 합성합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['나노 물질 합성(CVD, Sol-Gel)', '전자현미경 분석', '양자 물성 계산', '소재 물성 특성평가'],
    relatedDepartments: ['신소재공학과', '화학과', '물리학과', '나노공학과'],
    relatedSubjects: ['화학', '물질과 에너지', '물리학', '전자기와 양자', '미적분Ⅰ', '기하'],
    educationLevel: '대학교 졸업 이상 (석·박사 우대)'
  },
  {
    id: 'job_renewable_grid',
    name: '신재생에너지 그리드·스마트 전력망 엔지니어',
    category: '환경·에너지·신소재',
    desc: '태양광, 풍력 발전의 간헐성을 보완하는 대규모 에너지 저장(ESS) 및 AI 기반 전력 수요 예측 가상발전소(VPP)를 운영합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['전력 계통 해석', '전력 변환 및 송배전 제어', '시계열 전력 수요 예측 AI', '스마트그리드 통신 규격'],
    relatedDepartments: ['전기공학과 (전자전기공학부)', '에너지공학과', '시스템경영공학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '미적분Ⅰ', '확률과 통계', '정보', '지구과학'],
    educationLevel: '대학교 졸업 이상'
  },

  // =================================================================
  // [5] 의료·보건·약학 분야
  // =================================================================
  {
    id: 'job_doctor',
    name: '의사 및 의과학 연구원(MD-PhD)',
    category: '의료·보건·약학',
    desc: '환자의 질병을 진단·치료하고 첨단 정밀 의료, 유전자 치료, 의료 AI 진단 기기를 연구합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['생명과학 및 인체 해부생리 지식', '환자 공감 및 의사소통', '임상 의사결정력', '생명 윤리의식'],
    relatedDepartments: ['의예과 (의학과)', '약학과', '간호학과'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅰ', '보건'],
    educationLevel: '의과대학 졸업 및 의사면허 취득'
  },
  {
    id: 'job_pharmacist',
    name: '전문 약사 & 의약품 인허가(RA) 전문가',
    category: '의료·보건·약학',
    desc: '환자별 맞춤형 복약 지도 및 약물 상호작용 검토, 신약 임상시험 프로토콜 심사 및 의약품 허가 규제를 담당합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['약물 기전 분석', '임상 약학 지식', '환자 커뮤니케이션', '식약처 인허가 가이드라인 이해'],
    relatedDepartments: ['약학과', '화학과', '생명과학과'],
    relatedSubjects: ['화학', '생명과학', '화학 반응의 세계', '물질과 에너지', '세포와 물질대사', '확률과 통계', '보건'],
    educationLevel: '약학대학(6년제) 졸업 및 약사면허 취득'
  },
  {
    id: 'job_dentist',
    name: '치과의사 & 디지털 임플란트 전문의',
    category: '의료·보건·약학',
    desc: '구강 질환을 치료하고 3D 구강 스캐너와 CAD/CAM 기반의 디지털 맞춤형 임플란트 및 치아 교정 치료를 시술합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['정밀한 미세 수술 및 수기 능력', '구강 해부생리학', '3D 디지털 보철 설계', '환자 안심 소통'],
    relatedDepartments: ['치의예과 (치의학과)', '치위생학과', '의공학과'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '물리학', '미술', '보건'],
    educationLevel: '치과대학 또는 치의학전문대학원 졸업 및 치과의사면허'
  },
  {
    id: 'job_korean_med_doctor',
    name: '한의사 & 통합의학 연구원',
    category: '의료·보건·약학',
    desc: '전통 한의학의 진맥, 침구치료, 맞춤 한약 처방과 현대 생화학적 분석을 융합하여 만성 질환 및 면역 질환을 다스립니다.',
    futureProspects: '보통',
    coreCompetencies: ['한의학 원전 독해 및 진맥', '침구 수기 치료', '본초학 및 방제학 지식', '현대 한방 신약 연구'],
    relatedDepartments: ['한의예과 (한의학과)', '한약학과', '생명과학과'],
    relatedSubjects: ['한문', '생명과학', '화학', '한문 고전 읽기', '세포와 물질대사', '보건'],
    educationLevel: '한의과대학 졸업 및 한의사면허 취득'
  },
  {
    id: 'job_clinical_nurse_specialist',
    name: '전문 간호사(중환자·감염관리·마취)',
    category: '의료·보건·약학',
    desc: '병원 중환자실, 수술실, 응급실에서 환자의 생체 활력 징후를 모니터링하고 응급 투약 및 종합적인 간호 중재를 수행합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['해부학·약리학 지식', '신속한 응급 처치 역량', '공감적 소통 및 간호 리더십', '감염 관리 프로토콜'],
    relatedDepartments: ['간호학과', '보건관리학과', '응급구조학과'],
    relatedSubjects: ['생명과학', '화학', '보건', '인간과 심리', '세포와 물질대사', '독서와 작문'],
    educationLevel: '간호대학 졸업 및 간호사면허 취득'
  },
  {
    id: 'job_physical_therapist',
    name: '물리치료사·도수운동재활 전문가',
    category: '의료·보건·약학',
    desc: '근골격계 및 신경계 손상 환자의 신체 기능을 회복시키기 위해 도수치료, 운동치료, 첨단 보행 분석 장비를 활용합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['근골격계 기능해부학', '자세 분석 및 도수치료 기법', '치료적 운동 프로그램 처방', '환자 라포 형성'],
    relatedDepartments: ['물리치료학과', '작업치료학과', '스포츠의학과'],
    relatedSubjects: ['생명과학', '물리학', '역학과 에너지', '체육', '운동과 건강', '인간과 심리'],
    educationLevel: '물리치료학과 졸업 및 물리치료사면허 취득'
  },
  {
    id: 'job_radiologist_tech',
    name: '방사선사·의료영상 AI 판독 전문가',
    category: '의료·보건·약학',
    desc: 'MRI, CT, 초음파, PET-CT 등 첨단 방사선 의료 영상 장비를 조작하여 정밀 영상을 획득하고 의료 AI 판독을 보조합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['방사선 영상물리학', '단층촬영(CT/MRI) 스캔 기법', '방사선 피폭 안전 관리', '디지털 의료영상 처리(DICOM)'],
    relatedDepartments: ['방사선학과', '바이오의공학과', '물리학과'],
    relatedSubjects: ['물리학', '전자기와 양자', '생명과학', '정보', '미적분Ⅰ'],
    educationLevel: '방사선학과 졸업 및 방사선사면허 취득'
  },
  {
    id: 'job_med_ai_specialist',
    name: '의료 빅데이터·의료 AI 연구원',
    category: '의료·보건·약학',
    desc: '전자의무기록(EMR), 유전체 데이터, 병리 슬라이드 영상을 분석하여 암 조기 진단 및 환자 맞춤형 치료법을 예측하는 AI를 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['의료 도메인 데이터 지식', '딥러닝 비전/시계열 모델링', '임상 통계학(Survival Analysis)', '생명윤리 및 의료법'],
    relatedDepartments: ['인공지능공학과 (AI학부)', '의예과 (의학과)', '통계학과', '컴퓨터공학과'],
    relatedSubjects: ['인공지능 수학', '확률과 통계', '생명과학', '정보', '세포와 물질대사'],
    educationLevel: '대학교 졸업 이상 (석·박사 우대)'
  },

  // =================================================================
  // [6] 바이오·생명과학 분야
  // =================================================================
  {
    id: 'job_bio_researcher',
    name: '바이오 신약·항체의약품 연구원',
    category: '바이오·신약',
    desc: '난치병 치료를 위한 표적 항암제, 항체-약물 접합체(ADC), 세포유전자 치료제(CGT)를 개발하고 전임상 데이터를 분석합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['분자생물학 실험 기법', '단백질 공학 및 세포 배양', '약동학/약력학 모델링', '논문 독해 및 작성'],
    relatedDepartments: ['생명공학과 (바이오공학부)', '생명과학과', '약학과', '화학과'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '생물의 유전', '화학 반응의 세계', '미적분Ⅰ'],
    educationLevel: '대학원 석·박사 이상'
  },
  {
    id: 'job_genomics_scientist',
    name: '유전체 분석가 & 바이오인포매틱스 전문가',
    category: '바이오·신약',
    desc: '차세대 염기서열 분석(NGS) 대용량 유전체 빅데이터를 파이썬과 R로 마이닝하여 희귀 유전 질환의 원인 변이를 규명합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['NGS 파이프라인 구축', '생물정보학 알고리즘', 'Python/R 생물통계', '유전체 데이터베이스(NCBI) 활용'],
    relatedDepartments: ['생명과학과', '생물정보학과', '컴퓨터공학과', '통계학과'],
    relatedSubjects: ['생명과학', '생물의 유전', '확률과 통계', '정보', '데이터 과학', '미적분Ⅰ'],
    educationLevel: '대학교 졸업 이상 (석사 중심)'
  },
  {
    id: 'job_crispr_engineer',
    name: '유전자 교정(CRISPR) 연구원',
    category: '바이오·신약',
    desc: '3세대 크리스퍼 유전자 가위(CRISPR-Cas9)를 활용하여 동식물 및 인체 세포의 특정 염기서열을 정밀 교정하는 연구를 수행합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['유전자 재조합 기술', '가이드 RNA 설계', '세포 형질전환', '오프타겟 부작용 검증'],
    relatedDepartments: ['생명공학과 (바이오공학부)', '유전공학과', '농생명과학과'],
    relatedSubjects: ['생명과학', '세포와 물질대사', '생물의 유전', '화학', '현대사회와 윤리'],
    educationLevel: '대학원 석·박사 이상'
  },
  {
    id: 'job_stem_cell_researcher',
    name: '줄기세포·오가노이드(장기유사체) 연구원',
    category: '바이오·신약',
    desc: '역분화 줄기세포(iPSC)로부터 인간 미니 장기(오가노이드)를 배양하여 동물 실험을 대체하고 환자 맞춤 약물 스크리닝을 진행합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['줄기세포 분화 유도 기술', '3D 오가노이드 배양', '공초점 형광현미경 분석', '조직공학적 생체 지지체 제작'],
    relatedDepartments: ['생명과학과', '바이오의공학과', '의예과'],
    relatedSubjects: ['생명과학', '세포와 물질대사', '화학', '화학 반응의 세계', '보건'],
    educationLevel: '대학원 석·박사 이상'
  },
  {
    id: 'job_food_biotech',
    name: '배양육·대체단백질 바이오 식품 연구원',
    category: '바이오·신약',
    desc: '축산업의 탄소 배출을 줄이기 위해 가축 세포를 대량 증식하는 세포 배양육과 미세조류 기반 기능성 미래 식품을 개발합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['식품 미생물 발효 공학', '세포 대량 배양 바이오리액터 운용', '식품 물성 및 풍미 분석', '식품 안전 규제(HACCP)'],
    relatedDepartments: ['식품생명공학과', '바이오시스템공학과', '농생명과학과'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '생태와 환경', '기후변화와 환경생태'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_cosmetic_formulator',
    name: '바이오 코스메틱·기능성 화장품 연구원',
    category: '바이오·신약',
    desc: '천연물 추출 펩타이드, 마이크로바이옴 유래 성분을 활용하여 피부 장벽 강화 및 주름 개선 고기능성 화장품 제형을 연구합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['유화 제형 기술(Emulsion)', '피부 흡수율 증진 나노 전달체', '피부 자극성 임상 평가', '화장품 전성분 처방 설계'],
    relatedDepartments: ['화학공학과', '화장품공학과', '생명공학과', '약학과'],
    relatedSubjects: ['화학', '물질과 에너지', '생명과학', '화학 반응의 세계', '인간과 심리'],
    educationLevel: '대학교 졸업 이상'
  },

  // =================================================================
  // [7] 경영·금융·컨설팅 분야
  // =================================================================
  {
    id: 'job_fin_analyst',
    name: '금융 애널리스트 & 퀀트 트레이더',
    category: '경영·금융·컨설팅',
    desc: '기업 펀더멘털 가치 평가, 거시 경제 지표 분석, 수학적 파생상품 프라이싱 및 퀀트 알고리즘 트레이딩 전략을 수립합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['재무제표 및 기업 가치 평가', '통계학 및 계량 모델링', '파이썬 퀀트 코딩', '글로벌 경제 감각'],
    relatedDepartments: ['경제학과', '경영학과', '수학과', '회계세무학과'],
    relatedSubjects: ['확률과 통계', '대수', '미적분Ⅰ', '경제', '경제 수학', '금융과 경제생활', '실용 통계'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_cpa',
    name: '공인회계사(CPA) & 세무전문가',
    category: '경영·금융·컨설팅',
    desc: '기업 재무제표의 회계 감사, 세무 조정, M&A 기업 실사(FDD), 내부 회계 관리 제도 구축 자문을 제공합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['K-IFRS 회계 기준 해석', '세법 및 조세 전략 수립', '재무 분석 및 위험 관리', '데이터 기반 감사 기법'],
    relatedDepartments: ['경영학과', '회계세무학과', '경제학과'],
    relatedSubjects: ['경제', '경제 수학', '확률과 통계', '금융과 경제생활', '법과 사회', '실용 통계'],
    educationLevel: '대학교 졸업 및 공인회계사(CPA) 자격증 취득'
  },
  {
    id: 'job_mgmt_consultant',
    name: '경영 전략 컨설턴트 (Management Consultant)',
    category: '경영·금융·컨설팅',
    desc: '국내외 대기업 및 정부 기관의 신사업 진출, 디지털 전환(DX), 조직 구조 개편, M&A 전략 프로젝트를 수행합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['논리적 문제 분해(MECE/Logic Tree)', '산업 리서치 및 벤치마킹', '경영진 대상 설득 프레젠테이션', '재무 모델링'],
    relatedDepartments: ['경영학과', '경제학과', '산업공학과', '자율전공학부'],
    relatedSubjects: ['경제', '독서와 작문', '화법과 언어', '확률과 통계', '사회문제 탐구', '영어 발표와 토론'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_vc_investor',
    name: '벤처캐피털리스트(VC) & 스타트업 투자심사역',
    category: '경영·금융·컨설팅',
    desc: '혁신적인 기술 스타트업을 발굴하고 기술성·시장성을 심사하여 지분 투자를 집행하며 포트폴리오 기업의 스케일업을 지원합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['기술 트렌드 분석력', '스타트업 밸류에이션', '투자 계약서 검토', '네트워킹 및 멘토링'],
    relatedDepartments: ['경영학과', '컴퓨터공학과', '전자전기공학과', '바이오공학과'],
    relatedSubjects: ['경제', '금융과 경제생활', '정보', '창의 공학 설계', '독서와 작문'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_brand_marketer',
    name: '그로스 마케터 & 브랜드 디렉터',
    category: '경영·금융·컨설팅',
    desc: '디지털 광고 퍼포먼스 데이터(CAC, LTV, 전환율)를 분석하여 고객 유입을 극대화하고 독창적인 브랜드 아이덴티티를 기획합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['Google Analytics/데이터 기반 A/B 테스트', '소비자 심리 분석', '크리에이티브 카피라이팅', '캠페인 ROI 분석'],
    relatedDepartments: ['경영학과', '신문방송학과 (미디어커뮤니케이션학과)', '심리학과'],
    relatedSubjects: ['경제', '독서와 작문', '인간과 심리', '확률과 통계', '매체 의사소통'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_supply_chain_expert',
    name: '글로벌 공급망(SCM) & 물류 최적화 전문가',
    category: '경영·금융·컨설팅',
    desc: '글로벌 무역 원자재 조달, 물류 거점 배치, 재고 최적화 알고리즘을 운영하여 전 세계 배송 리드타임과 비용을 절감합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['선형계획법 및 정수계획법(OR)', '글로벌 통관 및 국제무역 규칙(Incoterms)', 'ERP 시스템 운용', '재고 예측'],
    relatedDepartments: ['산업공학과', '국제통상학과', '경영학과', '물류유통학과'],
    relatedSubjects: ['경제', '확률과 통계', '수학적 모델링', '세계시민과 지리', '정보'],
    educationLevel: '대학교 졸업 이상'
  },

  // =================================================================
  // [8] 법률·공공·외교 분야
  // =================================================================
  {
    id: 'job_lawyer',
    name: '변호사·기업 법무자문역',
    category: '법률·공공·외교',
    desc: '민사, 형사, 기업 M&A, 지식재산권(IP), AI 윤리 분쟁 등 법률 사건을 대리하고 전문 법률 자문을 제공합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['논리적 법리 해석(Legal Mind)', '서면 작성 및 변론 능력', '판례 분석력', '협상 및 중재력'],
    relatedDepartments: ['법학과 (공공법학부)', '정치외교학과', '행정학과', '자율전공학부 (무전공·첨단융합학부)'],
    relatedSubjects: ['법과 사회', '정치', '현대사회와 윤리', '독서와 작문', '논리와 사고', '사회문제 탐구'],
    educationLevel: '법학전문대학원(로스쿨) 졸업 및 변호사시험 합격'
  },
  {
    id: 'job_diplomat',
    name: '외교관 & 국제기구 전문가',
    category: '법률·공공·외교',
    desc: '국가를 대표하여 외국 정부 및 UN, OECD 등 국제기구와 조약 협상, 통상 외교, 재외국민 보호 업무를 총괄합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['다국어 의사소통(영어/제2외국어)', '국제정치 및 국제법 지식', '다자간 협상 기술', '문화적 다원주의 감각'],
    relatedDepartments: ['정치외교학과', '국제학부', '영어영문학과', '행정학과'],
    relatedSubjects: ['정치', '세계사', '세계시민과 지리', '국제 관계의 이해', '영어 발표와 토론', '프랑스어/중국어'],
    educationLevel: '대학교 졸업 이상 (외교관후보자 선발시험 합격)'
  },
  {
    id: 'job_patent_attorney',
    name: '변리사 (특허 및 지식재산권 대리인)',
    category: '법률·공공·외교',
    desc: '인공지능, 반도체, 바이오 등 신기술 특허를 특허청에 출원하고 특허 침해 소송 및 기술 가치 평가를 대리합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['이공계 첨단 기술 메커니즘 이해', '특허법 및 상표법 지식', '특허 명세서 청구항 작성', '선행기술 조사'],
    relatedDepartments: ['전자전기공학과', '화학공학과', '생명공학과', '법학과'],
    relatedSubjects: ['물리학', '화학', '법과 사회', '독서와 작문', '미적분Ⅰ', '정보'],
    educationLevel: '대학교(이공계 우대) 졸업 및 변리사시험 합격'
  },
  {
    id: 'job_public_administrator',
    name: '공공정책 기획관 (5급 사무관·행정고시)',
    category: '법률·공공·외교',
    desc: '중앙부처(기획재정부, 교육부, 과기부 등)에서 국가 예산 편성, 교육 및 복지 정책, 신산업 육성 법령을 제·개정합니다.',
    futureProspects: '보통',
    coreCompetencies: ['정책 분석 및 비용편익(B/C) 분석', '행정법 및 공공경제학', '대국민 소통 및 부처 간 조율', '보고서 기획력'],
    relatedDepartments: ['행정학과', '정책학과', '경제학과', '정치외교학과'],
    relatedSubjects: ['행정학개론', '정치', '경제', '법과 사회', '사회문제 탐구', '독서와 작문'],
    educationLevel: '대학교 졸업 및 5급 행정고시(공채) 합격'
  },
  {
    id: 'job_customs_broker',
    name: '관세사 & 국제무역 통관 전문가',
    category: '법률·공공·외교',
    desc: '수출입 물품의 품목 분류(HS Code), 관세율 적용, FTA 원산지 증명서 발급 및 관세 환급 업무를 전문적으로 수행합니다.',
    futureProspects: '보통',
    coreCompetencies: ['관세법 및 무역실무', 'HS 품목분류 지식', 'FTA 원산지 판정', '외환거래법 이해'],
    relatedDepartments: ['무역학과', '국제통상학과', '경영학과', '경제학과'],
    relatedSubjects: ['경제', '세계시민과 지리', '법과 사회', '실무 영어', '금융과 경제생활'],
    educationLevel: '대학교 졸업 및 관세사시험 합격'
  },

  // =================================================================
  // [9] 교육·학술·연구 분야
  // =================================================================
  {
    id: 'job_teacher',
    name: '중·고등학교 교사 및 진로진학 전문교사',
    category: '교육·학술·연구',
    desc: '학생들의 학업 성취와 인성을 지도하며 고교학점제 맞춤형 진로 과목 선택 상담 및 에듀테크 융합 수업을 진행합니다.',
    futureProspects: '보통',
    coreCompetencies: ['교과 전문 지식', '학생 상담 및 학급 경영', '교수학습 지도안 설계', '에듀테크 활용력'],
    relatedDepartments: ['국어교육과', '수학교육과', '물리/화학/생물/지구과학교육과', '초등교육과'],
    relatedSubjects: ['교육의 이해', '인간과 심리', '독서와 작문', '전공 교과목', '아동발달과 부모'],
    educationLevel: '사범대학 또는 교육대학원 졸업 및 정교사 2급 취득'
  },
  {
    id: 'job_professor_researcher',
    name: '대학교수 & 국책연구기관 선임연구원',
    category: '교육·학술·연구',
    desc: '해당 학문 분야의 첨단 이론을 연구하여 국제 저명 학술지(SCI)에 논문을 게재하고 학부·대학원 인재를 양성합니다.',
    futureProspects: '보통',
    coreCompetencies: ['독창적인 연구 가설 설정 및 검증', '연구비 수주 및 프로젝트 관리', '학술 논문 집필', '강의 및 멘토링'],
    relatedDepartments: ['해당 전공 모든 학과 (자연과학, 공학, 인문사회, 의학)'],
    relatedSubjects: ['심화 전공 과목', '독서와 작문', '확률과 통계', '영어 학술 발표'],
    educationLevel: '박사 학위(Ph.D.) 소지자'
  },
  {
    id: 'job_edutech_curator',
    name: '에듀테크·AI 학습 콘텐츠 기획자',
    category: '교육·학술·연구',
    desc: '학생 개인별 맞춤형 취약점 진단 및 적응형 학습(Adaptive Learning)을 제공하는 AI 코스웨어와 인터랙티브 교육 앱을 기획합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['교육과정(커리큘럼) 체계 이해', '학습자 경험(LX) 설계', 'AI 기반 학습 데이터 분석', '멀티미디어 교육 콘텐츠 기획'],
    relatedDepartments: ['교육공학과', '컴퓨터교육과', '교육학과', '디지털미디어학과'],
    relatedSubjects: ['교육의 이해', '정보', '인간과 심리', '독서와 작문', '데이터 과학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_psychological_counselor',
    name: '임상심리전문가 & 전문상담교사',
    category: '교육·학술·연구',
    desc: '심리검사(MMPI, 지능검사)를 실시하여 정서 및 인지 문제를 평가하고 인지행동치료(CBT) 등 전문 심리상담을 진행합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['심리 진단 및 심리검사 해석', '경청 및 공감적 상담 기법', '인지행동치료 프로토콜', '위기 개입 능력'],
    relatedDepartments: ['심리학과', '상담심리학과', '교육학과'],
    relatedSubjects: ['인간과 심리', '생명과학', '독서와 작문', '사회문화', '확률과 통계'],
    educationLevel: '대학원 석사 이상 및 임상심리전문가 자격'
  },
  {
    id: 'job_curator_archivist',
    name: '박물관 학예사(큐레이터) & 기록연구사',
    category: '교육·학술·연구',
    desc: '역사 유물, 미술품 및 국가 주요 디지털 기록물을 보존·복원하고 대중을 위한 기획 전시회와 학술 도록을 발간합니다.',
    futureProspects: '보통',
    coreCompetencies: ['역사 및 미술사 사료 비판', '전시 공간 연출 및 스토리텔링', '유물 보존 처리 과학', '디지털 아카이빙'],
    relatedDepartments: ['사학과', '고고미술사학과', '문화재보존학과', '문헌정보학과'],
    relatedSubjects: ['한국사', '세계사', '동아시아 역사 기행', '미술사', '한문 고전 읽기'],
    educationLevel: '대학교 졸업 및 정학예사 자격'
  },

  // =================================================================
  // [10] 미디어·콘텐츠·예술 분야
  // =================================================================
  {
    id: 'job_ott_producer',
    name: 'OTT·방송 드라마 총괄 프로듀서(PD)',
    category: '미디어·콘텐츠',
    desc: '글로벌 OTT 및 방송 플랫폼을 위한 드라마·예능 프로그램을 기획하고 대본 개발, 캐스팅, 촬영 및 제작 예산을 총괄합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['스토리텔링 및 대본 분석력', '연출 및 영상 미장센 감각', '제작팀 리더십 및 예산 운용', '트렌드 포착력'],
    relatedDepartments: ['신문방송학과 (미디어커뮤니케이션학과)', '연극영화과', '문예창작학과'],
    relatedSubjects: ['문학과 영상', '매체 의사소통', '독서와 작문', '연극', '음악/미술'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_webtoon_writer',
    name: '웹툰 작가 & IP 스토리 총괄 기획자',
    category: '미디어·콘텐츠',
    desc: '글로벌 플랫폼에 연재되는 웹툰의 콘티, 작화, 세계관을 창작하며 드라마·영화·게임으로 확장되는 원천 IP를 개발합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['디지털 드로잉(클립스튜디오)', '흡입력 있는 연출 및 데생력', '캐릭터 및 서사 구조 설계', '마감 관리력'],
    relatedDepartments: ['만화애니메이션학과', '웹툰학과', '시각디자인학과', '문예창작학과'],
    relatedSubjects: ['미술 창작', '문학과 영상', '독서와 작문', '스토리텔링', '세계 문화'],
    educationLevel: '학력 무관 (포트폴리오 중심)'
  },
  {
    id: 'job_news_journalist',
    name: '데이터 저널리스트 & 탐사보도 기자',
    category: '미디어·콘텐츠',
    desc: '공공 데이터와 AI 팩트체크 기법을 활용하여 사회적 부조리를 심층 취재하고 인터랙티브 뉴스 기사를 발행합니다.',
    futureProspects: '보통',
    coreCompetencies: ['심층 취재 및 인터뷰 스킬', '데이터 크롤링 및 시각화', '신속 정확한 기사 작문력', '언론 윤리의식'],
    relatedDepartments: ['신문방송학과 (미디어커뮤니케이션학과)', '정치외교학과', '사회학과', '국어국문학과'],
    relatedSubjects: ['화법과 언어', '독서와 작문', '매체 의사소통', '사회문제 탐구', '데이터 과학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_ad_creative_director',
    name: '광고 크리에이티브 디렉터(CD)',
    category: '미디어·콘텐츠',
    desc: '소비자의 뇌리에 각인되는 브랜드 슬로건과 감동적인 영상 광고 캠페인을 총괄 기획하고 제작 방향을 디렉팅합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['독창적인 카피라이팅', '비주얼 콘셉트 도출', '클라이언트 경쟁 프레젠테이션', '대중문화 인사이트'],
    relatedDepartments: ['광고홍보학과', '시각디자인학과', '국어국문학과', '심리학과'],
    relatedSubjects: ['매체 의사소통', '문학과 영상', '독서와 작문', '인간과 심리', '미술'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_game_director',
    name: '게임 기획자 (Game Designer & Director)',
    category: '미디어·콘텐츠',
    desc: '게임의 핵심 플레이 메커니즘, 밸런싱 수치 공식, 퀘스트 스토리라인 및 BM(수익모델)을 체계적으로 설계합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['게임 시스템 기획 및 수치 밸런싱', '스토리텔링 및 세계관 구축', '개발팀/아트팀과의 기술적 커뮤니케이션', '유저 데이터 분석'],
    relatedDepartments: ['게임공학과', '컴퓨터공학과', '문예창작학과', '경영학과'],
    relatedSubjects: ['확률과 통계', '정보', '독서와 작문', '문학과 영상', '경제 수학'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_sound_designer',
    name: '사운드 디자이너 & 오디오 엔지니어',
    category: '미디어·콘텐츠',
    desc: '영화, 게임, 모빌리티의 실감형 입체 음향(Spatial Audio) 효과음을 합성하고 보컬 믹싱 및 마스터링을 진행합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['DAW(ProTools, Logic) 마스터링', '신디사이저 음향 합성', '공간 음향(Dolby Atmos) 믹싱', '폴리 사운드 녹음'],
    relatedDepartments: ['실용음악학과', '음향공학과', '디지털미디어학과'],
    relatedSubjects: ['음악', '음악 감상과 비평', '물리학', '전자기와 양자', '정보'],
    educationLevel: '대학교 졸업 이상'
  },

  // =================================================================
  // [11] 디자인·공간·건축 분야
  // =================================================================
  {
    id: 'job_ux_designer',
    name: 'UX/UI 프로덕트 디자이너',
    category: '디자인·공간',
    desc: '사용자의 행동 패턴과 심리를 분석하여 직관적이고 아름다운 모바일 앱·웹 인터페이스 및 인터랙션을 디자인합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['Figma/디자인 시스템', 'UX 리서치 및 사용자 인터뷰', '프로토타이핑', '디자인 씽킹'],
    relatedDepartments: ['디자인학과 (시각·산업·UX/UI)', '심리학과', '신문방송학과 (미디어커뮤니케이션학과)'],
    relatedSubjects: ['미술', '미술 창작', '미술과 매체', '창의 공학 설계', '정보', '인간과 심리'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_architect',
    name: '친환경 건축가 (Architect)',
    category: '디자인·공간',
    desc: '사람과 자연이 조화를 이루는 제로에너지 건축물을 설계하고 3D BIM(Building Information Modeling) 모델링 및 인허가를 총괄합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['건축 계획 및 3D BIM 설계(Revit/Rhino)', '건축 구조 역학 및 단열 에너지 시뮬레이션', '공간 조형 감각', '건축법규 이해'],
    relatedDepartments: ['건축학과 (5년제)', '건축공학과', '도시공학과', '실내건축디자인학과'],
    relatedSubjects: ['기하', '물리학', '역학과 에너지', '미술', '창의 공학 설계', '기후변화와 환경생태'],
    educationLevel: '건축학인증(KAAB) 5년제 대학 졸업 및 건축사 자격'
  },
  {
    id: 'job_industrial_designer',
    name: '산업·제품 디자이너 (Industrial Designer)',
    category: '디자인·공간',
    desc: '스마트폰, 전기차 외관, 가전제품의 심미적 형태와 인체공학적 조작성을 융합하여 혁신적인 양산 제품을 디자인합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['3D 넙스 서피스 모델링(Rhino/Alias)', 'CMF(Color, Material, Finish) 설계', '스케칭 및 렌더링(KeyShot)', '양산 사출 공정 이해'],
    relatedDepartments: ['산업디자인학과', '기계공학과', '디자인학부'],
    relatedSubjects: ['미술 창작', '기하', '물리학', '창의 공학 설계', '인간과 심리'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_interior_spatial_designer',
    name: '공간·인테리어 브랜딩 디자이너',
    category: '디자인·공간',
    desc: '플래그십 스토어, 복합문화공간, 호텔의 브랜드 정체성을 담은 독창적인 공간 배치, 조명 및 가구 인테리어를 연출합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['공간 동선 기획', '3D 투시도 렌더링(3ds Max/SketchUp)', '마감재 및 가구 디테일 설계', '현장 감리 및 조명 연출'],
    relatedDepartments: ['실내건축디자인학과', '공간디자인학과', '건축학과'],
    relatedSubjects: ['미술', '미술 감상과 비평', '기하', '인간과 심리', '세계 문화'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_smart_city_planner',
    name: '스마트시티·도시계획 엔지니어',
    category: '디자인·공간',
    desc: 'IoT 센서망, 지능형 교통 시스템(ITS), 자율주행 도로망을 결합한 지속 가능한 미래형 스마트 신도시 인프라를 설계합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['GIS(지리정보시스템) 공간 데이터 분석', '도시 계획 법령 및 토지 이용 계획', '교통 수요 예측 모델링', '환경 영향 평가'],
    relatedDepartments: ['도시공학과', '건설환경공학과', '지리학과', '교통공학과'],
    relatedSubjects: ['세계시민과 지리', '확률과 통계', '기하', '정보', '사회문제 탐구', '환경'],
    educationLevel: '대학교 졸업 이상'
  }
];

export const JOBS_DATA: Job[] = Array.from(
  new Map([...BASE_JOBS_DATA, ...ADDITIONAL_JOBS_DATA].map((j) => [j.id, j])).values()
);

