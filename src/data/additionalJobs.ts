import { Job } from '../types';

export const ADDITIONAL_JOBS_DATA: Job[] = [
  // ==========================================
  // [1] IT·소프트웨어 & 디지털 첨단 분야
  // ==========================================
  {
    id: 'job_app_developer',
    name: '모바일 앱 개발자 (iOS/Android/Flutter)',
    category: 'IT·인공지능',
    desc: '스마트폰과 태블릿 환경에서 부드럽고 직관적으로 작동하는 네이티브 및 크로스플랫폼 모바일 애플리케이션을 개발하고 사용자 경험을 최적화합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['Swift/Kotlin 네이티브 프로그래밍', 'Flutter/React Native 프레임워크', '모바일 비동기 네트워킹', '앱 성능 및 배터리 최적화'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '소프트웨어학과 (SW응용학부)', '정보통신공학과'],
    relatedSubjects: ['정보', '프로그래밍', '데이터 과학', '미적분Ⅰ', '독서와 작문'],
    educationLevel: '전문대 또는 대학교 졸업'
  },
  {
    id: 'job_qa_engineer',
    name: '소프트웨어 품질 엔지니어 (QA / SDET)',
    category: 'IT·인공지능',
    desc: '대규모 소프트웨어 배포 전 기능적 오류(Bug)와 성능 병목을 사전에 감지하기 위해 자동화 테스트 스크립트와 부하 테스트 환경을 구축합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['테스트 자동화 도구(Selenium, Cypress, Jest)', 'CI/CD 통합 테스트 파이프라인', '소프트웨어 결함 분석', 'API 단위/통합 테스트'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '소프트웨어학과 (SW응용학부)', '산업경영공학과'],
    relatedSubjects: ['정보', '대수', '확률과 통계', '실용 통계', '독서와 작문'],
    educationLevel: '대학교 졸업'
  },
  {
    id: 'job_blockchain_contract_dev',
    name: '블록체인·스마트컨트랙트 개발자',
    category: 'IT·인공지능',
    desc: '탈중앙화 금융(DeFi), 토큰증권(STO), 분산원장 네트워크와 Solidity 기반 스마트 컨트랙트를 보안 결함 없이 설계·검증합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['Solidity & Rust 스마트컨트랙트 개발', '합의 알고리즘(PoS/PBFT)', '암호학 및 영지식증명', 'Web3 DApp 연동'],
    relatedDepartments: ['컴퓨터공학과 (소프트웨어학부)', '사이버보안학과 (정보보호학부)', '수학과', 'e-비즈니스학과 (디지털경영·핀테크)'],
    relatedSubjects: ['정보', '대수', '이산수학', '경제', '확률과 통계'],
    educationLevel: '대학교 졸업'
  },
  {
    id: 'job_vr_ar_developer',
    name: 'XR·메타버스 공간 인터랙션 개발자',
    category: 'IT·인공지능',
    desc: '가상현실(VR), 증강현실(AR), 공간 컴퓨팅 기기(Vision Pro 등)에서 현실감 넘치는 3D 인터랙션과 디지털 트윈 환경을 프로그래밍합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['Unity & Unreal Engine C#/C++', '3D 공간 수학 및 물리 시뮬레이션', '공간 오디오 및 햅틱 인터랙션', '셰이더 최적화'],
    relatedDepartments: ['게임·애니메이션학과 (디지털영상콘텐츠)', '컴퓨터공학과 (소프트웨어학부)', '디지털미디어학과'],
    relatedSubjects: ['기하', '물리학', '미적분Ⅰ', '정보', '미술'],
    educationLevel: '대학교 졸업'
  },

  // ==========================================
  // [2] 첨단 제조·로봇 & 스마트 인프라
  // ==========================================
  {
    id: 'job_smart_city_digital_twin',
    name: '스마트시티·디지털트윈 기획자',
    category: '로봇·모빌리티',
    desc: '도시의 교통, 에너지, 방범 데이터를 3D 디지털 가상공간에 실시간 복제(Digital Twin)하여 도시 문제 해결 시뮬레이션 정책을 수립합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['GIS 공간정보 분석', '스마트시티 플랫폼 아키텍처', '디지털 트윈 3D 모델링', '도시 데이터 시각화'],
    relatedDepartments: ['스마트시티공학과 (도시공학·교통시스템)', '건설환경공학과', '컴퓨터공학과'],
    relatedSubjects: ['한국지리', '세계시민과 지리', '확률과 통계', '데이터 과학', '미적분Ⅰ'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_drone_system_eng',
    name: '도심항공교통(UAM)·드론 제어 엔지니어',
    category: '로봇·모빌리티',
    desc: '차세대 미래 항공 모빌리티(UAM)와 산업용 드론의 자율비행 제어 소프트웨어, 모터 구동계, 항법 센서를 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['비행제어 알고리즘(PID/LQR)', '임베디드 RTOS', '항법센서(GPS/IMU) 융합', '항공역학 해석'],
    relatedDepartments: ['항공우주공학과', '지능형로봇공학과 (자율주행·메카트로닉스)', '기계공학과', '전자전기공학과'],
    relatedSubjects: ['물리학', '미적분Ⅰ', '미적분Ⅱ', '기하', '정보'],
    educationLevel: '대학교 졸업 이상'
  },
  {
    id: 'job_semiconductor_packaging',
    name: '첨단 반도체 패키징·수율 공정 엔지니어',
    category: '반도체·전자',
    desc: 'HBM(고대역폭메모리) 및 2.5D/3D 첨단 패키징 공정에서 신호 지연을 최소화하고 열 방출 및 수율(Yield) 문제를 해결합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['TSV(실리콘관통전극) 패키징 공정', '열/응력 유한요소해석(FEA)', '반도체 수율 통계 분석(SPC)', '마이크로 솔더링'],
    relatedDepartments: ['시스템반도체공학과 (반도체트랙)', '신소재공학과', '전자전기공학과', '기계공학과'],
    relatedSubjects: ['물리학', '화학', '미적분Ⅰ', '확률과 통계', '물질과 에너지'],
    educationLevel: '대학교 졸업'
  },

  // ==========================================
  // [3] 바이오·의료 & 재활 헬스케어
  // ==========================================
  {
    id: 'job_rehab_physical_therapist',
    name: '전문 물리치료사·재활운동 전문가',
    category: '의료·보건·약학',
    desc: '중추신경계 손상 환자나 척추·관절 통증 환자, 운동선수에게 맞춤 도수치료 및 재활 운동 프로그램을 적용하여 일상 복귀를 돕습니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['인체 근골격계 도수교정 술기', '신경계 보바스/PNF 재활기법', '운동기능 평가 및 자세분석', '환자 중심 라포 형성'],
    relatedDepartments: ['물리치료학과 (재활헬스사이언스)', '스포츠의학과', '재활치료학과'],
    relatedSubjects: ['생명과학', '물리학', '보건', '운동과 건강', '인간과 심리'],
    educationLevel: '전문대 또는 대학교 졸업 (국가면허 필수)'
  },
  {
    id: 'job_clinical_pathologist',
    name: '임상병리사·분자유전 진단검사원',
    category: '의료·보건·약학',
    desc: '환자의 검체(혈액, 조직, DNA)를 최첨단 자동화 분석기와 유전자 증폭기(NGS/PCR)를 통해 검사하여 의사의 정확한 질병 진단을 지원합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['혈액 및 생화학 자동분석기 운용', '분자진단 PCR/NGS 유전자 분석', '임상미생물 배양 동정', '진단 정도관리(QC)'],
    relatedDepartments: ['임상병리학과 (의생명진단과학)', '생명과학과', '바이오메디컬공학과 (의공학과)'],
    relatedSubjects: ['생명과학', '화학', '세포와 물질대사', '생물의 유전', '보건'],
    educationLevel: '전문대 또는 대학교 졸업 (국가면허 필수)'
  },
  {
    id: 'job_radiologic_technologist',
    name: '방사선사·영상의학 스페셜리스트',
    category: '의료·보건·약학',
    desc: 'CT, MRI, 초음파, PET-CT 등의 고도화된 의료영상 장비를 안전하게 조작하여 인체 내부의 미세 병변을 선명하게 촬영합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['MRI RF 펄스 시퀀스 파라미터 조절', 'CT 3D 다면 재구성', '방사선 피폭 선량 최적화', '응급 영상 검사 신속성'],
    relatedDepartments: ['방사선학과 (의료영상시스템학)', '바이오메디컬공학과 (의공학과)', '물리학과'],
    relatedSubjects: ['물리학', '생명과학', '미적분Ⅰ', '보건', '전기와 자기'],
    educationLevel: '전문대 또는 대학교 졸업 (국가면허 필수)'
  },
  {
    id: 'job_digital_therapeutics_pm',
    name: '디지털 치료제(DTx)·웰니스 앱 기획자',
    category: '바이오·신약',
    desc: '불면증, ADHD, 당뇨, 우울증 등 만성 질환을 소프트웨어 앱과 인지행동치료(CBT) 알고리즘으로 개선하는 식약처 공인 디지털 치료제를 개발합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['임상시험 프로토콜 설계', '의료기기 GMP 및 식약처 인허가', '인지행동치료(CBT) 로직 설계', '의료 데이터 통계 분석'],
    relatedDepartments: ['바이오메디컬공학과 (의공학과)', '심리학과', '컴퓨터공학과', '약학과'],
    relatedSubjects: ['생명과학', '인간과 심리', '정보', '확률과 통계', '보건'],
    educationLevel: '대학교 졸업 이상'
  },

  // ==========================================
  // [4] 경영·플랫폼 & 미래 금융
  // ==========================================
  {
    id: 'job_growth_hacker',
    name: '그로스해커·디지털 프로덕트 매니저 (PM)',
    category: '경영·금융',
    desc: '웹·앱 서비스의 유입, 전환, 이탈 데이터를 코호트 분석하여 기능 개선 A/B 테스트를 실행하고 사용자 성장 지표를 폭발적으로 끌어올립니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['A/B 테스트 가설 검증 및 통계', 'SQL & 구글 애널리틱스(GA4)', '사용자 여정(Funnel) 데이터 분석', '애자일 스프린트 리딩'],
    relatedDepartments: ['e-비즈니스학과 (디지털경영·핀테크)', '경영학과', '통계학과', '소프트웨어학과'],
    relatedSubjects: ['경제', '확률과 통계', '정보', '실용 통계', '사회와 문화'],
    educationLevel: '대학교 졸업'
  },
  {
    id: 'job_hotel_general_manager',
    name: '호스피탈리티 총지배인 & MICE 컨벤션 디렉터',
    category: '경영·금융',
    desc: '국제회의(G20, APEC 등), 글로벌 메가 이벤트, 특급 호텔과 복합리조트의 전체 운영과 식음료(F&B), VIP 의전, 수익 관리를 총괄합니다.',
    futureProspects: '밝음',
    coreCompetencies: ['다국어 능통 비즈니스 협상', '수익 경영(Revenue Management)', '국제 MICE 행사 기획 및 유치', '고객 경험(CX) 디자인'],
    relatedDepartments: ['호텔외식관광경영학과', '국제학부', '영어영문학과', '경영학과'],
    relatedSubjects: ['영어Ⅰ', '영어Ⅱ', '세계시민과 지리', '경제', '세계 문화와 영어'],
    educationLevel: '대학교 졸업'
  },

  // ==========================================
  // [5] 미디어·콘텐츠 & 문화예술 창작
  // ==========================================
  {
    id: 'job_webnovel_author',
    name: '웹소설 작가 & 스토리 IP 총괄 디렉터',
    category: '미디어·콘텐츠',
    desc: '카카오페이지, 네이버시리즈 등 글로벌 웹 플랫폼에서 주 5회 연재를 진행하며, 웹툰화 및 드라마·영화 영상화 원작 IP를 창작합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['독창적인 세계관 및 캐릭터 구축', '빠른 호흡의 사이다 전개 서사력', '트렌드 분석 및 연재 규율', '2차 판권(OSMU) 사업화 감각'],
    relatedDepartments: ['문예창작학과 (웹소설·스토리텔링)', '국어국문학과', '미디어커뮤니케이션학과 (신문방송학)'],
    relatedSubjects: ['문학', '독서와 작문', '문학과 영상', '주제 탐구 독서', '세계사'],
    educationLevel: '학력 무관 (창작 실무 역량 중심)'
  },
  {
    id: 'job_game_animator_3d',
    name: '3D 게임 그래픽 모델러 & 애니메이터',
    category: '디자인·공간',
    desc: 'ZBrush, Maya, Blender 등을 활용하여 게임과 영화 속 캐릭터를 입체 조형하고 생동감 넘치는 뼈대(Rigging) 및 물리 모션을 부여합니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['3D 디지털 하이폴리곤 스컬프팅', '인체 해부학적 관절 리깅(Rigging)', '물리 기반 렌더링(PBR) 텍스처링', '언리얼/유니티 엔진 최적화'],
    relatedDepartments: ['게임·애니메이션학과 (디지털영상콘텐츠)', '시각디자인학과', '영상애니메이션학과'],
    relatedSubjects: ['미술', '미술 창작', '입체 조형', '정보', '물리학'],
    educationLevel: '전문대 또는 대학교 졸업'
  },

  // ==========================================
  // [6] 교육 & 전문 지원
  // ==========================================
  {
    id: 'job_special_education_teacher',
    name: '특수교사 (개별화 통합교육 전문가)',
    category: '교육·연구',
    desc: '장애 학생의 특성과 학습 속도에 맞추어 개별화 교육계획(IEP)을 수립하고, 일상 자립과 사회 통합을 지원하는 헌신적인 공교육 교사입니다.',
    futureProspects: '매우 밝음',
    coreCompetencies: ['장애 영역별 맞춤 교수법', '행동 지원 및 심리 상담', '특수교육 보조공학기기 운용', '학부모·통합학급 교사 협업'],
    relatedDepartments: ['특수교육과 (초등/중등 특수교육)', '유아특수교육과', '심리학과'],
    relatedSubjects: ['독서와 작문', '교육학', '인간과 심리', '보건', '사회와 문화'],
    educationLevel: '대학교 졸업 (특수학교 2급 정교사 자격증 필수)'
  }
];
