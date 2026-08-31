import { Subject, SubjectVideoInfo } from '../types';

export const TOGETHER_SCHOOL_DATA_ROOM_URL = 'https://www.togetherschool.go.kr/consulting/consultingDataRoom?pstCatgryId=2';

// 2022 Revised Curriculum Subject Introduction Video Database
// Source: 함께학교 고교학점제 선택과목 안내 동영상 자료실 (교육부·시도교육청 공인)
export const SUBJECT_SPECIFIC_VIDEOS: Record<string, Partial<SubjectVideoInfo>> = {
  // === 국어 교과군 ===
  's_kor_com1': {
    title: '[함께학교·교육부] 2022 개정 공통국어1 과목안내 및 기초 문해력',
    youtubeId: 'wO6b_7a2Qc8',
    duration: '6분 30초',
    lecturer: '함께학교 국어과 교육과정 전문교사단',
    chapters: [
      { time: '00:00', title: '공통국어1 개요', desc: '고교 국어의 기초 문해력과 의사소통 역량 함양' },
      { time: '01:40', title: '핵심 단원', desc: '듣기·말하기, 읽기, 쓰기 영역 기초 원리 및 표현 기법' },
      { time: '03:30', title: '내신 평가 체계', desc: '1학년 1학기 공통과목 5등급제 상대평가 + 성취도(A~E)' },
      { time: '05:00', title: '2학기/선택 연계', desc: '공통국어2, 독서와 작문, 화법과 언어 연계 로드맵' }
    ],
    keySummary: [
      '1학년 1학기 필수 이수 과목으로 중학교 국어 연계 및 고교 심화 국어의 기초',
      '비판적 읽기와 과정 중심 글쓰기, 올바른 의사소통 윤리 확립',
      '전 학문 분야의 기본이 되는 학술적 어휘력과 텍스트 분석 역량 배양'
    ]
  },
  's_kor_com2': {
    title: '[함께학교·교육부] 2022 개정 공통국어2 과목안내 - 문법 체계와 문학 탐구',
    youtubeId: 'wO6b_7a2Qc8',
    duration: '6분 50초',
    lecturer: '함께학교 국어과 교육과정 전문교사단',
    chapters: [
      { time: '00:00', title: '공통국어2 개요', desc: '국어의 구조적 특성과 문학 갈래별 심화 감상' },
      { time: '01:50', title: '주요 학습 영역', desc: '음운·단어·문장 구조 문법 원리와 고전·현대 문학' },
      { time: '03:50', title: '수행/지필 평가', desc: '문법 탐구 보고서 및 문학 비평문 포트폴리오' },
      { time: '05:20', title: '심화 선택 과목', desc: '화법과 언어, 문학, 문학과 영상 선택 가이드' }
    ],
    keySummary: [
      '1학년 2학기 필수 이수 과목으로 국어 문법의 체계적 이해와 문학적 상상력 심화',
      '국어의 역사와 변천, 올바른 문법 규범 적용 및 담화 맥락 분석',
      '문학 작품의 갈래별 수용과 창의적 생산을 통한 인문학적 소양 함양'
    ]
  },
  's_kor_com': {
    title: '[함께학교·교육부] 2022 개정 공통국어 1·2 과목안내 및 성취기준',
    youtubeId: 'wO6b_7a2Qc8',
    duration: '6분 45초',
    lecturer: '함께학교 국어과 교육과정 전문교사단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '고교 국어의 기초 문해력과 표현 능력 함양' },
      { time: '01:30', title: '핵심 단원', desc: '듣기·말하기, 읽기, 쓰기, 문법, 문학 5개 영역' },
      { time: '03:40', title: '내신 평가', desc: '1학년 공통과목 5등급제 상대평가 + 성취도(A~E)' },
      { time: '05:10', title: '연계 팁', desc: '2학년 화법과 언어, 독서와 작문, 문학 선택 가이드' }
    ],
    keySummary: [
      '고등학교 1학년 필수 이수 과목으로 초·중학교 국어 학습의 연계 및 고교 심화 국어의 기초',
      '비판적 읽기와 논리적 글쓰기, 올바른 국어 생활을 위한 문법 규칙 체계화',
      '전 학문 분야의 기본이 되는 학술적 어휘력과 텍스트 분석 역량 배양'
    ]
  },
  's_kor_speech': {
    title: '[함께학교·교육부] 화법과 언어 - 담화 분석과 국어 문법 마스터',
    youtubeId: 'pUj2_M0lMzg',
    duration: '7분 12초',
    lecturer: '함께학교 국어과 진로진학 상담교사',
    chapters: [
      { time: '00:00', title: '과목 성격', desc: '담화 소통 전략과 언어 구조 및 변천 탐구' },
      { time: '02:10', title: '주요 학습 내용', desc: '토론·협상 담화 분석, 음운·단어·문장 문법 원리' },
      { time: '04:30', title: '수능/내신 대비', desc: '지문 분석형 문법 문항 및 실전 의사소통 평가' },
      { time: '05:50', title: '전공 연계', desc: '미디어, 신문방송, 언어학, 국어교육, 법학 계열 추천' }
    ],
    keySummary: [
      '맥락에 따른 효과적인 말하기·듣기 전략과 표준어 규정, 맞춤법 등 정밀한 문법 체계 습득',
      '수능 국어 선택 및 대학 전공별 구술 면접·논리적 발표력의 든든한 밑거름',
      '사회적 갈등 상황에서의 합리적 타협과 설득적 담화 구성 역량 강화'
    ]
  },
  's_kor_read': {
    title: '[함께학교·교육부] 독서와 작문 - 학술적 비판 독해와 논리적 글쓰기',
    youtubeId: 'qQz2_T8nMxs',
    duration: '8분 05초',
    lecturer: 'EBS 고교학점제 국어과 강사진',
    chapters: [
      { time: '00:00', title: '과목 소개', desc: '학술적·전문적 텍스트의 심층 독해와 보고서 작성' },
      { time: '02:20', title: '핵심 역량', desc: '논증 구조 파악, 비판적 검증, 과정 중심 글쓰기' },
      { time: '04:50', title: '학생부 세특', desc: '전공 관련 학술 논문/도서 서평 작성 프로젝트' },
      { time: '06:30', title: '대학 평가', desc: '인문·사회는 물론 자연·공학·의약 전 계열 핵심 권장' }
    ],
    keySummary: [
      '인문, 사회, 과학, 예술 등 다양한 분야의 복합 지문을 비판적으로 분석하는 고등 문해력',
      '자신의 생각을 학술적 형식(서론-본론-결론, 각주, 참고문헌)에 맞춰 서술하는 연구 보고서 능력',
      '모든 대학 학생부종합전형에서 가장 중요하게 평가하는 탐구 기초 교과'
    ]
  },
  's_kor_lit': {
    title: '[함께학교·교육부] 문학 - 고전과 현대를 잇는 인문학적 상상력',
    youtubeId: 'aK3m_9vPxQs',
    duration: '7분 30초',
    lecturer: '함께학교 인문교과 연구회',
    chapters: [
      { time: '00:00', title: '과목 목표', desc: '한국문학의 흐름과 세계문학의 가치 주체적 수용' },
      { time: '02:15', title: '학습 영역', desc: '시·소설·수필·극 문학의 갈래별 특성과 심미적 감상' },
      { time: '04:40', title: '평가 방법', desc: '서술·논술형 평가 및 문학 비평문 포트폴리오' },
      { time: '06:00', title: '추천 전공', desc: '국문학, 문예창작, 문화콘텐츠, 심리학, 철학' }
    ],
    keySummary: [
      '시대적 상황과 인간의 본질을 담은 문학 작품을 통해 공감 능력과 인문학적 소양 심화',
      '작가의 문제의식과 표현 기법을 분석하고 현대적 관점에서 재해석하는 비평 활동',
      '문화예술 콘텐츠 기획 및 스토리텔링 역량 개발'
    ]
  },

  // === 수학 교과군 ===
  's_math_com1': {
    title: '[함께학교·교육부] 2022 개정 공통수학1 - 다항식, 방정식과 행렬',
    youtubeId: 'kP4m_8zNxAw',
    duration: '8분 20초',
    lecturer: '함께학교 수학교과 전문교사단',
    chapters: [
      { time: '00:00', title: '공통수학1 개편점', desc: '2022 개정에서 도입된 행렬 단원과 핵심 변화' },
      { time: '02:10', title: '단원별 구성', desc: '다항식의 연산, 복소수와 이차방정식, 이차부등식, 행렬' },
      { time: '04:40', title: '평가 및 성취도', desc: '1학년 1학기 5등급 상대평가 + 성취도(A~E) 표기' },
      { time: '06:30', title: '선택과목 연계', desc: '공통수학2, 대수, 미적분Ⅰ, 확률과 통계 후속 연결' }
    ],
    keySummary: [
      '2022 개정 교육과정에서 행렬과 연산 단원이 1학기 공통수학1로 도입되어 AI·데이터 기초 강화',
      '다항식과 방정식, 부등식의 논리적 문제 해결 알고리즘 체계화',
      '이공계 및 상경계열 진학을 위한 수학적 기초 역량의 핵심 교과'
    ]
  },
  's_math_com2': {
    title: '[함께학교·교육부] 2022 개정 공통수학2 - 도형의 방정식과 함수',
    youtubeId: 'kP4m_8zNxAw',
    duration: '8분 40초',
    lecturer: '함께학교 수학교과 전문교사단',
    chapters: [
      { time: '00:00', title: '공통수학2 개요', desc: '해석기하학과 함수론의 체계적 기틀 확립' },
      { time: '02:30', title: '핵심 단원 체계', desc: '평면좌표, 직선·원의 방정식, 도형의 이동, 집합과 명제, 함수' },
      { time: '05:10', title: '성취평가 안내', desc: '1학년 2학기 5등급 상대평가 + 성취도(A~E) 동시 표기' },
      { time: '06:50', title: '위계 선택 로드맵', desc: '대수, 미적분Ⅰ, 기하, 인공지능 수학으로의 확장' }
    ],
    keySummary: [
      '도형을 좌표평면에 대수적 방정식으로 표현하는 해석기하학적 직관 배양',
      '집합과 명제의 논리 체계 및 함수(일대일대응, 합성함수, 역함수) 개념 마스터',
      '2~3학년 대수, 미적분, 기하의 필수적인 선수 지식 완성'
    ]
  },
  's_math_com': {
    title: '[함께학교·교육부] 2022 개정 공통수학 1·2 - 고교 수학의 기초와 행렬',
    youtubeId: 'kP4m_8zNxAw',
    duration: '8분 40초',
    lecturer: '함께학교 수학교과 전문교사단',
    chapters: [
      { time: '00:00', title: '공통수학 개편점', desc: '2022 개정에서 부활한 행렬 단원과 핵심 변화' },
      { time: '02:30', title: '단원별 구성', desc: '다항식, 방정식, 부등식, 행렬, 도형, 함수' },
      { time: '05:10', title: '성취평가제', desc: '1학년 5등급 상대평가 + 성취도(A~E) 동시 표기' },
      { time: '06:50', title: '위계 선택', desc: '대수, 미적분Ⅰ, 확률과 통계 후속 연계 경로' }
    ],
    keySummary: [
      '2022 개정 교육과정에서 행렬과 연산 단원이 1학년 공통수학으로 도입되어 AI·데이터 기초 강화',
      '도형의 방정식, 집합과 명제, 함수의 기초 개념이 2~3학년 선택과목의 필수 선수 조건',
      '개념 유도 과정과 증명 및 문제 해결 알고리즘 체계화 필수'
    ]
  },
  's_math_alg': {
    title: '[함께학교·교육부] 대수 - 지수·로그함수와 삼각함수, 수열의 체계',
    youtubeId: 'mN5k_3qWxQs',
    duration: '8분 20초',
    lecturer: 'EBS 수학교과 마스터 교사단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '구 수Ⅰ에 해당하는 자연·사회 규칙성의 수학화' },
      { time: '02:15', title: '단원 구성', desc: '지수·로그함수, 삼각함수의 주기성, 등차·등비수열' },
      { time: '04:50', title: '수능 출제', desc: '2028 통합수능 수학 출제 핵심 범위' },
      { time: '06:40', title: '연계 전공', desc: '자연·공학·의약·경영·경제 전 계열 필수 기초' }
    ],
    keySummary: [
      '2028 통합수능 공통 수학 출제 범위로 전 수험생이 필수로 학습하는 핵심 일반선택 과목',
      '지수와 로그의 실생활 응용(지진 강도, pH), 삼각함수 파동 모델링, 수열의 귀납적 정의',
      '미적분Ⅰ 및 미적분Ⅱ 학습을 위한 절대적 필수 선수 과목'
    ]
  },
  's_math_calc1': {
    title: '[함께학교·교육부] 미적분Ⅰ - 변화율과 누적량의 수학적 모델링',
    youtubeId: 'bL8w_2qRxTs',
    duration: '9분 15초',
    lecturer: '함께학교 수학교과 진로설계단',
    chapters: [
      { time: '00:00', title: '과목 목표', desc: '다항함수를 통한 함수의 극한, 연속, 미분, 적분 이해' },
      { time: '02:40', title: '핵심 내용', desc: '미분계수와 접선, 극대·극소, 정적분의 넓이와 부피' },
      { time: '05:30', title: '2028 수능', desc: '통합형 수능 수학 출제 필수 공통 영역' },
      { time: '07:20', title: '학업 설계', desc: '공학·자연은 미적분Ⅱ, 상경계열은 경제수학으로 연계' }
    ],
    keySummary: [
      '구 수Ⅱ에 해당하며 2028학년도 대입 수능 수학의 핵심 출제 교과',
      '순간 변화율(기울기)과 누적 합(넓이)의 미적분학 기본 정리를 다항함수 기반으로 탄탄히 학습',
      '자연·공학 계열은 물론 경제·경영·사회과학 분야의 정량 분석에 필수적'
    ]
  },
  's_math_calc2': {
    title: '[함께학교·교육부] 미적분Ⅱ - 초월함수 미적분과 이공계·의약계 필수 과목',
    youtubeId: 'zY9m_4kLxPw',
    duration: '10분 02초',
    lecturer: '서울대·카이스트 출신 공학수학 전문교사',
    chapters: [
      { time: '00:00', title: '과목 위상', desc: '서울대·주요대 공과대학/자연대 필수 핵심 권장과목' },
      { time: '03:10', title: '학습 내용', desc: '삼각·지수·로그함수의 극한과 도함수, 치환·부분적분' },
      { time: '06:20', title: '진로선택 평가', desc: '5등급 상대평가 + 성취도(A~E) 심화 성취도 평가' },
      { time: '08:15', title: '세특 작성법', desc: '물리·기계·전자·인공지능 모델의 미분방정식 적용 탐구' }
    ],
    keySummary: [
      '초월함수의 미분과 적분을 다루며 자연과학, 기계·전자·컴퓨터 공학, 의약학 진학 시 대학 권장 1순위',
      '서울대·연세대·고려대 등 주요 대학 학생부 종합전형 서류평가에서 이수 여부 중점 확인',
      '미적분Ⅰ과 대수의 탄탄한 기본기 위에서 고난도 수학적 사고력을 완성하는 최고급 과목'
    ]
  },
  's_math_prob': {
    title: '[함께학교·교육부] 확률과 통계 - 데이터 분석과 미래 예측의 수학',
    youtubeId: 'vQ2m_7rPxOw',
    duration: '7분 55초',
    lecturer: '함께학교 수학교과 통계데이터 연구팀',
    chapters: [
      { time: '00:00', title: '과목 성격', desc: '빅데이터 시대의 확률적 의사결정과 통계적 추정' },
      { time: '02:20', title: '단원 구성', desc: '순열과 조합, 조건부확률, 이항분포, 정규분포, 가설검정' },
      { time: '05:00', title: '2028 수능', desc: '통합수능 수학 공통 범위' },
      { time: '06:30', title: '전공 연계', desc: '경영·경제, 사회과학, 의약·바이오, 데이터사이언스' }
    ],
    keySummary: [
      '2028 통합수능 수학 출제 영역으로 모든 고교생의 데이터 리터러시 기본 과목',
      '표본추출과 신뢰구간, 가설검정을 통해 실제 사회 현상과 자연 현상의 불확실성을 수치화',
      '의학 임상실험 통계, 인공지능 머신러닝 기초, 경제 금융 모델링의 핵심 도구'
    ]
  },
  's_math_geo': {
    title: '[함께학교·교육부] 기하 - 2D/3D 공간 벡터와 이차곡선 탐구',
    youtubeId: 'xP7k_5tQzRw',
    duration: '8분 35초',
    lecturer: '함께학교 기하·공학수학 연구회',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '이차곡선, 평면벡터, 공간도형과 공간좌표' },
      { time: '02:45', title: '주요 단원', desc: '포물선·타원·쌍곡선의 기하학적 성질, 벡터의 내적, 정사영' },
      { time: '05:30', title: '이공계 권장', desc: '기계·항공·건축·전자·로봇공학 핵심 권장과목' },
      { time: '07:10', title: '탐구 팁', desc: '3D 컴퓨터 그래픽스 렌더링, 자율주행 라이다 센서 벡터 계산' }
    ],
    keySummary: [
      '3차원 공간 감각과 물리적 힘·운동을 표현하는 벡터 수학의 정수',
      '건축 설계, 항공 우주 궤도 계산, 로봇 관절 기구학 및 3D 모델링의 기초 이론',
      '이공계열 학종 서류 평가에서 공간 지각력과 고급 수학 이수 의지를 증명하는 대표 과목'
    ]
  },

  // === 영어 교과군 ===
  's_eng_com1': {
    title: '[함께학교·교육부] 2022 개정 공통영어1 - 글로벌 의사소통의 기초',
    youtubeId: 'eR1k_8vPxQs',
    duration: '7분 10초',
    lecturer: '함께학교 영어과 교육과정 전문교사단',
    chapters: [
      { time: '00:00', title: '공통영어1 성격', desc: '듣기·말하기·읽기·쓰기 4대 영역의 균형 있는 발달' },
      { time: '02:15', title: '학습 체계', desc: '다양한 주제의 실용 텍스트 및 기본 문법·어휘' },
      { time: '04:30', title: '평가 체제', desc: '1학년 1학기 5등급 상대평가 + 수행평가 말하기/쓰기' },
      { time: '05:50', title: '후속 연계', desc: '공통영어2, 영어Ⅰ, 영어 독해와 작문 등 심화 연계' }
    ],
    keySummary: [
      '고교 영어의 표준 공통 과목으로 학술적 담화와 실생활 의사소통의 기초 역량 확립',
      '비판적 읽기와 구문 분석, 주제문 작성 등 아카데믹 영어 기초 훈련',
      '수행평가를 통한 프로젝트 기반 영어 발표 및 에세이 작성'
    ]
  },
  's_eng_com2': {
    title: '[함께학교·교육부] 2022 개정 공통영어2 - 비판적 독해와 영작문',
    youtubeId: 'eR1k_8vPxQs',
    duration: '7분 25초',
    lecturer: '함께학교 영어과 교육과정 전문교사단',
    chapters: [
      { time: '00:00', title: '공통영어2 목표', desc: '학술적 텍스트 심층 독해와 비판적 사고력 심화' },
      { time: '02:20', title: '주요 학습 영역', desc: '복합 문장 구조 분석, 패러프레이징, 논리적 영작문' },
      { time: '04:40', title: '평가 방식', desc: '1학년 2학기 5등급 상대평가 및 과정 중심 에세이 평가' },
      { time: '06:00', title: '진로 연계', desc: '영어Ⅱ, 영미 문학 읽기, 실무 영어 선택 가이드' }
    ],
    keySummary: [
      '다양한 글로벌 학술 제재를 다루며 고등 비판적 사고력과 문해력 완성',
      '단락의 응집성과 논리적 전개 구조를 파악하고 영문에세이 작성 역량 강화',
      '국제교류, 어문, 상경, 이공계 전 분야의 필수 교양 영어 역량 확보'
    ]
  },
  's_eng_com': {
    title: '[함께학교·교육부] 2022 개정 공통영어 1·2 - 글로벌 의사소통의 기초',
    youtubeId: 'eR1k_8vPxQs',
    duration: '7분 10초',
    lecturer: '함께학교 영어과 교육과정 전문교사단',
    chapters: [
      { time: '00:00', title: '과목 성격', desc: '듣기·말하기·읽기·쓰기 4대 영역의 균형 있는 발달' },
      { time: '02:15', title: '학습 체계', desc: '다양한 주제의 실용 텍스트 및 기본 문법·어휘' },
      { time: '04:30', title: '평가 체제', desc: '1학년 5등급 상대평가 + 수행평가 말하기/쓰기' },
      { time: '05:50', title: '선택 연계', desc: '영어Ⅰ, 영어Ⅱ, 영어 독해와 작문 등 심화 연계' }
    ],
    keySummary: [
      '고교 영어의 표준 공통 과목으로 학술적 담화와 실생활 의사소통의 기초 역량 확립',
      '비판적 읽기와 패러프레이징, 주제문 작성 등 아카데믹 영어 기초 훈련',
      '수행평가를 통한 프로젝트 기반 영어 발표 및 에세이 작성'
    ]
  },
  's_eng_read_write': {
    title: '[함께학교·교육부] 영어 독해와 작문 - 학술 논증과 에세이 저작',
    youtubeId: 'uN3m_6tQxSw',
    duration: '8분 15초',
    lecturer: 'EBS 수능/학종 영어과 대표교사',
    chapters: [
      { time: '00:00', title: '과목 목표', desc: '복합 학술 지문 독해와 논리적 영문에세이 작성' },
      { time: '02:30', title: '핵심 활동', desc: '주제문 도출, 논리적 연결어 활용, 패러프레이징' },
      { time: '05:10', title: '학생부 세특', desc: '원서 아티클 읽고 해외 저널 양식 소논문 에세이' },
      { time: '06:45', title: '대학 평가', desc: '국제학부, 상경계, 자연·공학 연구직 지망생 추천' }
    ],
    keySummary: [
      '해외 대학 원서, 학술 저널, 뉴스 아티클을 비판적으로 읽고 영어로 요약·논평하는 역량',
      '논리적 글쓰기(Topic Sentence - Supporting Details - Conclusion)의 체계적 훈련',
      '국제교류, 어문학, 글로벌 경영 및 해외 연구 연계 전공자 필수 권장'
    ]
  },

  // === 사회 및 역사 교과군 ===
  's_soc_com1': {
    title: '[함께학교·교육부] 2022 개정 통합사회1 - 인간·사회·환경의 통합적 시각',
    youtubeId: 'tK5m_9vLzQw',
    duration: '7분 30초',
    lecturer: '함께학교 사회과 융합교육 전문교사단',
    chapters: [
      { time: '00:00', title: '통합사회1 개요', desc: '시간적·공간적·사회적·윤리적 통합 관점과 행복의 조건' },
      { time: '02:00', title: '자연환경과 인간', desc: '기후·지형 환경과 인간 생활, 안전과 지속가능한 삶' },
      { time: '04:00', title: '문화와 인권', desc: '문화 다양성과 다문화 사회, 인권 확장과 헌법적 가치' },
      { time: '05:40', title: '1학기 평가/수능', desc: '1학년 1학기 5등급 상대평가 및 2028 통합수능 기초' }
    ],
    keySummary: [
      '1학년 1학기 공통 필수 과목으로 2028학년도 통합수능 사회탐구영역의 핵심 출제 범위',
      '인간, 사회, 환경을 다각적(시간·공간·사회·윤리)으로 성찰하는 융합적 사고력 배양',
      '기후위기, 인권 신장, 문화 다양성에 대한 비판적 탐구와 시민 역량 확립'
    ]
  },
  's_soc_com2': {
    title: '[함께학교·교육부] 2022 개정 통합사회2 - 시장경제, 사회정의와 미래사회',
    youtubeId: 'tK5m_9vLzQw',
    duration: '7분 55초',
    lecturer: '함께학교 사회과 융합교육 전문교사단',
    chapters: [
      { time: '00:00', title: '통합사회2 개요', desc: '시장경제와 금융, 사회정의와 불평등, 세계화와 평화' },
      { time: '02:15', title: '시장경제와 금융', desc: '자본주의 발전과 시장의 한계, 생애주기 금융 설계' },
      { time: '04:20', title: '정의와 복지', desc: '분배적 정의, 공간 불평등, 사회 복지 제도 탐구' },
      { time: '06:00', title: '선택과목 연계', desc: '경제, 정치, 법과 사회, 세계시민과 지리, 현대사회와 윤리' }
    ],
    keySummary: [
      '1학년 2학기 공통 필수 과목으로 금융 역량과 사회정의, 글로벌 평화 과제 집중 탐구',
      '자본주의 시장 메커니즘과 복지 제도, 공간적·사회적 불평등 해소 방안 모색',
      '상경, 인문, 사회, 법정, 교육 계열 심화 선택과목으로 이어지는 가교 역할'
    ]
  },
  's_soc_com': {
    title: '[함께학교·교육부] 2022 개정 통합사회 1·2 - 융합적 사회 통찰',
    youtubeId: 'tK5m_9vLzQw',
    duration: '7분 50초',
    lecturer: '함께학교 사회과 융합교육 전문교사단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '행복, 자연환경, 생활공간, 인권, 시장, 정의, 미래' },
      { time: '02:40', title: '2028 수능', desc: '2028 통합수능 탐구영역 필수 응시 과목' },
      { time: '05:15', title: '평가 체제', desc: '1학년 5등급 상대평가 + 성취도(A~E)' },
      { time: '06:30', title: '후속 선택', desc: '경제, 정치, 법과 사회, 세계지리, 현대사회와 윤리' }
    ],
    keySummary: [
      '2028학년도 대입 통합수능 탐구영역 필수 응시 과목으로 모든 계열 수험생의 핵심 과목',
      '지리, 일반사회, 윤리, 역사를 융합하여 현대 사회의 복합적 쟁점을 다각도로 탐구',
      '지속가능한 발전, 정의와 복지, 디지털 시민성 함양'
    ]
  },
  's_his_com1': {
    title: '[함께학교·교육부] 2022 개정 한국사1 - 전근대 한국사의 발전과 정체성',
    youtubeId: 'gM2m_7vPxKw',
    duration: '7분 15초',
    lecturer: '함께학교 역사교육 전문교사단',
    chapters: [
      { time: '00:00', title: '한국사1 개요', desc: '선사 시대부터 조선 후기까지 전근대 한국사의 흐름' },
      { time: '02:00', title: '고대·고려 사회', desc: '삼국의 발전, 남북국 시대, 고려의 다원적 문화와 대외 교류' },
      { time: '04:10', title: '조선 유교 국가', desc: '조선의 통치 체제, 양반 관료제, 사림과 붕당, 조선 후기 변동' },
      { time: '05:40', title: '내신 평가 안내', desc: '1학년 1학기 5등급제 상대평가 및 사료 분석형 서술평가' }
    ],
    keySummary: [
      '1학년 1학기 필수 이수 과목으로 고대부터 조선 후기까지 정치·사회·문화의 발전 과정 체계화',
      '단순 연대 암기가 아닌 역사적 사건의 배경과 인과관계를 구조적으로 파악',
      '사료 읽기와 유물·유적 탐구를 통한 역사적 비판력 및 민족 정체성 확립'
    ]
  },
  's_his_com2': {
    title: '[함께학교·교육부] 2022 개정 한국사2 - 근현대사의 전개와 대한민국의 발전',
    youtubeId: 'gM2m_7vPxKw',
    duration: '7분 40초',
    lecturer: '함께학교 역사교육 전문교사단',
    chapters: [
      { time: '00:00', title: '한국사2 개요', desc: '흥선대원군 집권기부터 개항, 독립운동, 현대사까지' },
      { time: '02:10', title: '개항과 근대 개혁', desc: '강화도 조약, 갑오개혁, 대한제국과 독립협회' },
      { time: '04:00', title: '독립운동과 광복', desc: '3·1 운동, 대한민국 임시정부, 국내외 무장 독립 투쟁' },
      { time: '05:50', title: '대한민국 현대사', desc: '정부 수립, 6·25 전쟁, 민주화 운동과 경제 성장, 평화 통일 과제' }
    ],
    keySummary: [
      '1학년 2학기 필수 이수 과목으로 수능 한국사 필수 응시의 핵심 근현대사 단원 집중',
      '일제의 국권 침탈에 맞선 독립운동의 정신과 임시정부의 헌법적 가치 계승',
      '광복 이후 민주주의 발전과 경제 기적, 통일 대한민국을 향한 현대사적 과제 성찰'
    ]
  },
  's_his_com': {
    title: '[함께학교·교육부] 2022 개정 한국사 1·2 - 역사적 정체성과 비판적 통찰',
    youtubeId: 'gM2m_7vPxKw',
    duration: '7분 30초',
    lecturer: '함께학교 역사교육 전문교사단',
    chapters: [
      { time: '00:00', title: '한국사 개요', desc: '선사 시대부터 현대사까지 역사 발전 과정과 교훈' },
      { time: '02:30', title: '주요 시대 구분', desc: '고대·고려·조선 전근대사 및 개항 이후 근현대사' },
      { time: '05:00', title: '수능/내신 대비', desc: '사료 해석 중심 문항 풀이 전략 및 5등급 상대평가' },
      { time: '06:20', title: '역사 탐구 세특', desc: '지역 문화재 탐방 및 구술 생애사 채록 프로젝트' }
    ],
    keySummary: [
      '고등학교 필수 공통 이수 과목이자 수능 필수 응시 영역',
      '역사적 사건의 인과관계 분석과 사료 비판을 통한 올바른 역사관 확립',
      '인문, 사회, 교육, 문화예술 전 분야의 필수 소양'
    ]
  },
  's_soc_econ': {
    title: '[함께학교·교육부] 경제 - 시장 원리와 거시경제 정책 분석',
    youtubeId: 'wR4m_8kLzQs',
    duration: '8분 40초',
    lecturer: '함께학교 경제·금융교육 연구회',
    chapters: [
      { time: '00:00', title: '과목 소개', desc: '희소성과 합리적 선택, 시장 가격, 국민경제와 금융' },
      { time: '02:35', title: '주요 단원', desc: '수요·공급 탄력성, 시장 실패, 재정·통화정책, 환율' },
      { time: '05:20', title: '상경계 필수', desc: '경영학과, 경제학과, 금융공학 핵심 권장과목' },
      { time: '07:10', title: '세특 프로젝트', desc: '금리 변동과 부동산/주식 시장 데이터 통계 분석' }
    ],
    keySummary: [
      '경영학·경제학·금융학 진학을 희망하는 학생들의 필수 일반선택 과목',
      '미시경제(기회비용, 시장 구조)와 거시경제(GDP, 인플레이션, 실업률, 무역) 완벽 이해',
      '한국은행 및 기획재정부 정책 시뮬레이션 및 기업 재무제표 분석 탐구'
    ]
  },
  's_soc_pol': {
    title: '[함께학교·교육부] 정치 - 민주주의 제도와 헌법, 국제관계',
    youtubeId: 'pL7k_2wQzRw',
    duration: '7분 35초',
    lecturer: '함께학교 정치·법학 교육 연구단',
    chapters: [
      { time: '00:00', title: '과목 목표', desc: '민주정치의 원리와 정부 형태, 선거 제도, 국제정치' },
      { time: '02:20', title: '핵심 내용', desc: '권력분립, 국회·행정부·법원, 정당과 이익집단, 외교' },
      { time: '04:50', title: '전공 연계', desc: '정치외교학, 행정학, 언론정보학, 공공정책학' },
      { time: '06:15', title: '활동 팁', desc: '모의국회 법안 발의, 유엔 총회 모의 모델링' }
    ],
    keySummary: [
      '국가 통치 구조와 시민 참여, 글로벌 국제기구의 역학 관계를 탐구',
      '선거 제도 개편안 비교, 정당 정책 분석, 외교 분쟁 해결 시나리오 작성',
      '공직 진출, 외교관, 정책 연구원, 언론인을 꿈꾸는 학생 추천'
    ]
  },
  's_soc_law': {
    title: '[함께학교·교육부] 법과 사회 - 헌법상 기본권과 민·형사 사법 정의',
    youtubeId: 'mB6k_9tPzXw',
    duration: '8분 20초',
    lecturer: '현직 변호사 겸 함께학교 법교육 자문단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '민법상 계약과 불법행위, 형법상 범죄와 형벌, 기본권' },
      { time: '02:40', title: '주요 쟁점', desc: '소비자 보호, 근로자의 권리, 형사 절차와 사법 참여' },
      { time: '05:30', title: '로스쿨/법학', desc: '법학과, 행정학과, 경찰행정학과 필수 추천' },
      { time: '07:00', title: '모의재판 세특', desc: 'AI 저작권 침해 또는 개인정보 유출 모의재판 프로젝트' }
    ],
    keySummary: [
      '계약의 효력, 손해배상, 형사소송 절차 등 실생활 법률 지식과 법치주의 원리',
      '헌법재판소 주요 판례 분석 및 위헌법률심판 쟁점 탐구',
      '로스쿨(법학전문대학원), 공공기관, 경찰·사법 분야 진로 맞춤 교과'
    ]
  },

  // === 과학 교과군 ===
  's_sci_com1': {
    title: '[함께학교·교육부] 2022 개정 통합과학1 - 물질과 규칙성, 역학과 시스템',
    youtubeId: 'sK8m_5vPxTs',
    duration: '8분 15초',
    lecturer: '함께학교 과학교과 통합연구단',
    chapters: [
      { time: '00:00', title: '통합과학1 개요', desc: '우주의 원소 기원, 화학결합, 역학적 시스템, 지구·생명 시스템' },
      { time: '02:20', title: '물질과 규칙성', desc: '빅뱅 우주론, 주기율표, 알칼리 금속·할로젠, 이온결합·공유결합' },
      { time: '04:30', title: '시스템과 상호작용', desc: '중력, 운동량과 충격량, 판구조론, 세포막과 물질 출입' },
      { time: '06:20', title: '1학기 평가 체계', desc: '1학년 1학기 5등급 상대평가 + 과학탐구실험1 연계' }
    ],
    keySummary: [
      '1학년 1학기 공통 필수 과목으로 2028 통합수능 과학탐구의 핵심 출제 범위',
      '미시적 원자 구조부터 거시적 우주와 지구 역학 시스템을 관통하는 융합 과학 원리',
      '물리학, 화학, 생명과학, 지구과학 분과 선택의 든든한 기초 디딤돌'
    ]
  },
  's_sci_com2': {
    title: '[함께학교·교육부] 2022 개정 통합과학2 - 변화와 다양성, 환경과 에너지',
    youtubeId: 'sK8m_5vPxTs',
    duration: '8분 40초',
    lecturer: '함께학교 과학교과 통합연구단',
    chapters: [
      { time: '00:00', title: '통합과학2 개요', desc: '산화환원, 산과 염기, 지질시대와 생물 진화, 에너지 전환과 신재생' },
      { time: '02:30', title: '변화와 다양성', desc: '전기 음성도와 산화환원, 중화반응 양적 관계, 자연선택과 진화' },
      { time: '04:50', title: '환경과 미래 에너지', desc: '생물다양성 보전, 열효율, 전력 수송, 수소 연료전지와 신소재' },
      { time: '06:40', title: '선택 심화 로드맵', desc: '2학년 물리학, 화학, 생명과학, 지구과학 및 진로선택 과목 연계' }
    ],
    keySummary: [
      '1학년 2학기 공통 필수 과목으로 화학 변화, 생물 진화, 친환경 미래 기술 심층 학습',
      '지구 환경 보전과 탄소중립, 신재생에너지 발전 등 미래 첨단 기술 융합',
      '이공계열, 의약학계열, 첨단공학계열 진학을 위한 핵심 선수 개념 완성'
    ]
  },
  's_sci_com': {
    title: '[함께학교·교육부] 2022 개정 통합과학 1·2 - 자연현상의 대통합 원리',
    youtubeId: 'sK8m_5vPxTs',
    duration: '8분 55초',
    lecturer: '함께학교 과학교과 통합연구단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '물질의 규칙성, 시스템과 상호작용, 변화와 다양성, 환경' },
      { time: '02:50', title: '2028 수능', desc: '2028 통합수능 필수 응시 과목' },
      { time: '05:30', title: '실험 탐구', desc: '과학탐구실험 1·2와 연계된 가설 검증과 데이터 분석' },
      { time: '07:15', title: '선택 심화', desc: '물리학, 화학, 생명과학, 지구과학 분과 선택 로드맵' }
    ],
    keySummary: [
      '2028학년도 대입 통합수능 과학 탐구영역 필수 응시 과목',
      '우주의 기원부터 원소 생성, 지권·수권·기권 시스템, 생명 탄생, 신소재와 신재생에너지까지 총망라',
      '자연현상을 거시적·융합적 시스템 관점에서 해석하는 과학적 사고력 함양'
    ]
  },
  's_sci_exp1': {
    title: '[함께학교·교육부] 2022 개정 과학탐구실험1 - 기초 측정과 역학 실험',
    youtubeId: 'sK8m_5vPxTs',
    duration: '6분 15초',
    lecturer: '함께학교 과학교과 통합연구단',
    chapters: [
      { time: '00:00', title: '과탐실1 개요', desc: '과학 탐구의 기초, 안전 수칙 및 가설 설정과 변인 통제' },
      { time: '02:00', title: '주요 실험 활동', desc: '자유낙하 운동 분석, 충격 흡수 장치 고안, 물질 밀도 측정' },
      { time: '04:15', title: '성취평가/세특', desc: '성취도(A~E) 절대평가 및 학생부 탐구 보고서 포트폴리오' }
    ],
    keySummary: [
      '1학년 1학기 실험 중심 과목으로 과학적 가설 검증과 데이터 처리 역량 배양',
      '조작 변인과 통제 변인 설계, 센서 MBL 장비를 활용한 정밀 측정 실습',
      '학생부 세특에서 자기주도적 과학 탐구 역량을 보여주는 최적의 교과'
    ]
  },
  's_sci_exp2': {
    title: '[함께학교·교육부] 2022 개정 과학탐구실험2 - 융합 탐구와 프로젝트',
    youtubeId: 'sK8m_5vPxTs',
    duration: '6분 30초',
    lecturer: '함께학교 과학교과 통합연구단',
    chapters: [
      { time: '00:00', title: '과탐실2 개요', desc: '생명, 환경, 신재생에너지 융합 프로젝트 탐구' },
      { time: '02:15', title: '주요 프로젝트', desc: '적정기술 제품 제작, 천연 지시약 산염기 분석, 효소 반응 실험' },
      { time: '04:30', title: '보고서 작성법', desc: '학술 논문 형식의 탐구 보고서 작성 및 동료 평가' }
    ],
    keySummary: [
      '1학년 2학기 프로젝트 중심 과목으로 적정기술, 환경보전, 생명현상 탐구',
      '모둠별 협업과 문제 해결력, 발표 및 과학적 토론 역량 강화',
      '이공계 및 의약학 계열 전공 적합성을 입증하는 심층 실험 수행'
    ]
  },
  's_sci_exp': {
    title: '[함께학교·교육부] 2022 개정 과학탐구실험 1·2 - 실험 설계와 탐구 보고서',
    youtubeId: 'sK8m_5vPxTs',
    duration: '6분 40초',
    lecturer: '함께학교 과학교과 통합연구단',
    chapters: [
      { time: '00:00', title: '과목 성격', desc: '체험과 실험 중심의 탐구 활동 및 과학적 문제 해결력' },
      { time: '02:00', title: '주요 탐구 과제', desc: '자연현상 측정, 첨단 과학기술 체험, 융합 탐구 프로젝트' },
      { time: '04:30', title: '평가 방법', desc: '성취도(3단계/5단계) 및 실험 포트폴리오 과정 평가' }
    ],
    keySummary: [
      '1학년 공통 필수 이수 실험 과목으로 가설 검증과 데이터 분석 훈련',
      '팀 프로젝트를 통한 협동심과 과학적 의사소통 역량 강화',
      '학생부 세특에서 전공 관련 심층 탐구 열정을 보여주는 핵심 교과'
    ]
  },
  's_sci_phy': {
    title: '[함께학교·교육부] 물리학 - 역학과 전자기, 현대물리의 기초',
    youtubeId: 'hR3m_8kQzWs',
    duration: '9분 30초',
    lecturer: 'EBS 물리학 대표 강사',
    chapters: [
      { time: '00:00', title: '과목 성격', desc: '뉴턴 역학, 열역학, 특수상대성이론, 전자기장, 파동' },
      { time: '03:10', title: '핵심 공식', desc: '운동방정식, 역학적 에너지 보존, 패러데이 전자기 유도' },
      { time: '06:00', title: '공학 필수', desc: '기계·전자·전기·컴퓨터·건축·물리 필수 핵심 권장' },
      { time: '07:45', title: '후속 과목', desc: '역학과 에너지, 전자기와 양자로 연결' }
    ],
    keySummary: [
      '이공계 대학 진학 시 서울대·카이스트 등 모든 공과대학의 최우선 필수 핵심 권장과목',
      '수학적 모델링과 물리 법칙의 인과관계를 실험과 수식을 통해 명쾌하게 증명',
      '반도체, 모빌리티, 항공우주, 로봇, 양자컴퓨터의 이론적 토대'
    ]
  },
  's_sci_chem': {
    title: '[함께학교·교육부] 화학 - 물질의 구조와 화학 결합, 반응의 원리',
    youtubeId: 'cL4k_7wQzRs',
    duration: '8분 45초',
    lecturer: '함께학교 화학과 전문연구회',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '원자 구조, 주기율표, 화학 결합, 몰(mol)과 양적 관계' },
      { time: '02:40', title: '주요 단원', desc: '동적 평형, 산·염기 중화반응, 산화환원 반응과 열출입' },
      { time: '05:30', title: '이공/의약', desc: '화학공학, 신소재, 배터리, 의예·약학 필수 핵심 권장' },
      { time: '07:10', title: '세특 실험', desc: '중화적정 실험 및 2차전지 산화환원 전압 측정 탐구' }
    ],
    keySummary: [
      '물질의 미시적 구조(원자, 전자배치)와 거시적 상태 변화 및 반응 메커니즘 학습',
      '화학 반응의 양적 관계와 중화반응, 산화환원을 정량적으로 계산하는 수리 탐구력 배양',
      '반도체 식각 공정, 2차전지 배터리 전해질, 바이오 신약 합성의 필수 과목'
    ]
  },
  's_sci_bio': {
    title: '[함께학교·교육부] 생명과학 - 세포 구조와 항상성, 유전의 메커니즘',
    youtubeId: 'bN6m_3tQxPw',
    duration: '9분 05초',
    lecturer: '함께학교 생명과학 교과연구단',
    chapters: [
      { time: '00:00', title: '과목 소개', desc: '세포와 생명시스템, 물질대사, 항상성과 몸의 조절' },
      { time: '03:00', title: '핵심 쟁점', desc: '신경계·호르몬 작용, 감염성 질환과 면역, 세포분열과 유전' },
      { time: '06:10', title: '의약/바이오', desc: '의예, 치의예, 한의예, 약학, 간호, 생명공학 필수' },
      { time: '07:35', title: '후속 과목', desc: '세포와 물질대사, 생물의 유전 심화 진로선택 연계' }
    ],
    keySummary: [
      '생명체의 유기적 조절 작용과 유전 정보 전달 방식을 탐구하는 의약학·바이오의 핵심 교과',
      '면역 체계의 항원-항체 반응, 신경계 자극 전달, 멘델 유전 및 유전자 변이 분석',
      '신약 개발, 유전자 치료, 바이오 헬스케어 진로를 위한 필수 과목'
    ]
  },
  's_sci_earth': {
    title: '[함께학교·교육부] 지구과학 - 지구 시스템과 우주 천문학 탐구',
    youtubeId: 'gM2m_9vLzRw',
    duration: '8분 10초',
    lecturer: '함께학교 지구우주과학 연구회',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '판구조론과 지질시대, 대기와 해양의 순환, 별과 우주' },
      { time: '02:35', title: '주요 단원', desc: '기상 현상, 엘니뇨·라니냐, 별의 진화와 H-R도, 허블 법칙' },
      { time: '05:15', title: '친환경/천문', desc: '기상학, 해양공학, 지질학, 천문우주학, 환경공학' },
      { time: '06:45', title: '세특 프로젝트', desc: '위성 데이터 기반 기후변화 예측 및 외계행성 탐사 분석' }
    ],
    keySummary: [
      '지구 내부 구조와 지각 변동, 대기-해양 상호작용, 천체 물리학의 기초를 포괄',
      '기후 위기, 신재생에너지, 우주 탐사 및 인공위성 원격 탐사 기술과 직접 연계',
      '지구환경공학, 항공우주, 방재안전, 천문연구원 진로에 특화된 교과'
    ]
  },

  // === 정보 / 인공지능 교과군 ===
  's_tech_info': {
    title: '[함께학교·교육부] 정보 - 알고리즘, 파이썬 프로그래밍과 데이터 분석',
    youtubeId: 'iP5k_7wQxTs',
    duration: '8분 30초',
    lecturer: '함께학교 SW·AI 교육 전문교사단',
    chapters: [
      { time: '00:00', title: '과목 목표', desc: '컴퓨팅 사고력(Computational Thinking)과 알고리즘' },
      { time: '02:40', title: '핵심 실습', desc: '변수, 조건문, 반복문, 함수, 자료구조, 탐색·정렬' },
      { time: '05:20', title: 'SW/AI 필수', desc: '컴퓨터공학, 소프트웨어, 인공지능, 빅데이터학과 필수' },
      { time: '07:00', title: '세특 프로젝트', desc: '공공 API 데이터 수집 및 파이썬 시각화 프로그램 개발' }
    ],
    keySummary: [
      '소프트웨어 중심 사회의 핵심 소양으로 컴퓨터공학·SW·인공지능 계열 대학 필수 권장',
      '알고리즘 설계와 텍스트 기반 프로그래밍(Python/C++)을 통해 실생활 문제를 해결',
      '데이터베이스, 네트워크, 정보 보안 및 소프트웨어 저작권 윤리 학습'
    ]
  },
  's_tech_ai_basic': {
    title: '[함께학교·교육부] 인공지능 기초 - 머신러닝, 딥러닝과 생성형 AI 윤리',
    youtubeId: 'aN9k_4tPxQw',
    duration: '9분 10초',
    lecturer: '카이스트 AI 대학원 자문 및 함께학교 AI교사단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '인공지능의 역사, 지도/비지도 학습, 신경망 모델' },
      { time: '03:00', title: '주요 기술', desc: '컴퓨터 비전(CNN), 자연어 처리(LLM), 생성형 AI 원리' },
      { time: '06:00', title: 'AI 윤리', desc: '알고리즘 편향성, 딥페이크, 저작권, 자율주행 딜레마' },
      { time: '07:40', title: '탐구 세특', desc: '티처블머신 모델 학습 및 이미지 분류 웹서비스 구현' }
    ],
    keySummary: [
      '초거대 AI 및 생성형 AI 시대에 발맞춰 머신러닝의 작동 메커니즘을 배우는 첨단 진로선택 과목',
      '데이터 전처리, 학습(Training), 손실함수, 모델 평가 과정을 실습 위주로 탐구',
      'IT·SW 전공뿐 아니라 의료 AI, 금융 핀테크, AI 신약, 디지털 인문학 등 전 분야 융합'
    ]
  },

  // === 체육 / 예술 교과군 ===
  's_pe_pe1': {
    title: '[함께학교·교육부] 2022 개정 체육1 - 신체활동 원리와 체력 관리, 기본 스포츠',
    youtubeId: 'mK9p_2vLxQw',
    duration: '7분 15초',
    lecturer: '함께학교 체육교과 전문교사단',
    chapters: [
      { time: '00:00', title: '체육1 개요', desc: '건강 증진과 신체활동의 기본 원리, PAPS 체력 측정' },
      { time: '02:10', title: '스포츠 기본기', desc: '네트형 및 표적/투기형 스포츠 기본 기능 습득' },
      { time: '04:20', title: '자기관리 역량', desc: '생애 주기별 체력 단련 계획과 운동 일지 기록' },
      { time: '05:45', title: '성취평가/세특', desc: '성취도 3단계 P/F 및 학생부 체력 증진 포트폴리오' }
    ],
    keySummary: [
      '고등학교 필수 이수 일반선택 과목으로 건강 관리와 체력 증진의 과학적 원리 학습',
      'PAPS 학생건강체력평가 기반 맞춤형 체력 증진 플랜 설계 및 실천',
      '기초 스포츠 종목의 기능과 룰을 익히며 신체적 자기관리 및 도전 정신 함양'
    ]
  },
  's_pe_pe2': {
    title: '[함께학교·교육부] 2022 개정 체육2 - 전략형 스포츠 전술과 평생 체육 리더십',
    youtubeId: 'mK9p_2vLxQw',
    duration: '7분 40초',
    lecturer: '함께학교 체육교과 전문교사단',
    chapters: [
      { time: '00:00', title: '체육2 개요', desc: '전략형·필드형 스포츠 경기 심화 및 평생 건강 여가' },
      { time: '02:20', title: '경기 전략과 전술', desc: '팀 전술 분석, 데이터 기반 경기력 피드백' },
      { time: '04:35', title: '스포츠 윤리와 리더십', desc: '페어플레이 정신, 스포츠맨십과 심판·경기 운영' },
      { time: '06:00', title: '진로 연계', desc: '체육교육, 스포츠의학, 스포츠산업, 경호·경찰' }
    ],
    keySummary: [
      '고등학교 체육 심화 일반선택 과목으로 경기 분석, 전술 수립, 심판법 등 다각적 스포츠 탐구',
      '팀 스포츠 활동을 통한 협동심, 갈등 해결 능력, 공동체 리더십 배양',
      '평생 체육 습관 형성과 체육·스포츠·의학·보건 계열 진로 탐색 연계'
    ]
  },
  's_pe_pe1_2': {
    title: '[함께학교·교육부] 2022 개정 체육 1·2 - 건강과 스포츠 문화',
    youtubeId: 'mK9p_2vLxQw',
    duration: '7분 30초',
    lecturer: '함께학교 체육교과 전문교사단',
    chapters: [
      { time: '00:00', title: '체육 과목 안내', desc: '신체활동 기본 원리와 스포츠맨십' },
      { time: '02:30', title: '체력 관리', desc: 'PAPS 측정 및 생애주기 맞춤형 운동' },
      { time: '05:00', title: '평가 방법', desc: '3단계 성취도 평가 및 협력 태도' }
    ],
    keySummary: [
      '체력 증진과 스포츠 활동을 통한 올바른 인성 및 공동체 역량 함양',
      '건강 관리와 여가 스포츠를 아우르는 평생 체육의 기초 디딤돌'
    ]
  },
  's_pe_exercise_health': {
    title: '[함께학교·교육부] 운동과 건강 - 운동 생리학과 맞춤형 트레이닝 처방',
    youtubeId: 'mK9p_2vLxQw',
    duration: '8분 10초',
    lecturer: '함께학교 스포츠의학교육 연구회',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '운동 생리학, 심폐 지구력과 근력 메커니즘' },
      { time: '02:40', title: '운동 처방', desc: '개인별 FITT 운동 부하 원리와 재활 트레이닝' },
      { time: '05:20', title: '전공 연계', desc: '스포츠의학과, 물리치료학과, 보건행정학과' },
      { time: '06:50', title: '탐구 세특', desc: '유산소 운동 시 심박수·젖산 대사 변화 측정' }
    ],
    keySummary: [
      '운동이 인체 기관계에 미치는 생리학적 반응과 대사 메커니즘을 심층 학습',
      '스포츠 손상 예방, 테이핑 요법, 과학적 재활 운동 처방 프로세스 실습',
      '의약학, 스포츠의학, 물리치료, 헬스케어 진로 진학을 위한 핵심 교과'
    ]
  },
  's_pe_sports_culture': {
    title: '[함께학교·교육부] 스포츠 문화 - 올림픽사, 스포츠 미디어와 윤리',
    youtubeId: 'mK9p_2vLxQw',
    duration: '7분 50초',
    lecturer: '함께학교 체육인문사회 연구단',
    chapters: [
      { time: '00:00', title: '과목 성격', desc: '스포츠 역사, 철학, 미디어와 경제적 파급력' },
      { time: '02:30', title: '스포츠 윤리', desc: '도핑 방지, 승부조작 근절, 인권과 공정 경쟁' },
      { time: '05:00', title: '산업과 미디어', desc: '스포츠 마케팅, 중계권, e스포츠 산업 생태계' },
      { time: '06:30', title: '세특 프로젝트', desc: '메가 스포츠 이벤트의 국가 브랜드 영향 분석' }
    ],
    keySummary: [
      '스포츠 현상을 역사·철학·사회·경제·미디어 등 인문사회학적 다각도로 성찰',
      '스포츠 저널리즘, 에이전트, 구단 마케팅, e스포츠 비즈니스 모델 탐구',
      '스포츠경영학, 미디어커뮤니케이션, 스포츠행정 진로 희망자 추천'
    ]
  },
  's_pe_sports_sci': {
    title: '[함께학교·교육부] 스포츠 과학 - 운동역학, 생체역학과 데이터 분석',
    youtubeId: 'mK9p_2vLxQw',
    duration: '8분 35초',
    lecturer: '한국스포츠정책과학원 자문 및 전문교사단',
    chapters: [
      { time: '00:00', title: '과목 개요', desc: '운동역학, 투구/슈팅 동작 분석, 마그누스 효과' },
      { time: '02:50', title: '스포츠 데이터', desc: '세이버메트릭스, 트래킹 센서 데이터 분석' },
      { time: '05:40', title: '첨단 장비/의공학', desc: '스마트 웨어러블, 보조 장구, 탄성 소재 물리학' },
      { time: '07:10', title: '프로젝트 세특', desc: '모션 캡처 앱을 활용한 골프/배드민턴 스윙 역학 분석' }
    ],
    keySummary: [
      '뉴턴 역학, 유체역학, 생체공학을 스포츠 동작에 적용하는 융합 과학 교과',
      '프로 스포츠 구단의 데이터 분석관(세이버메트리션) 및 선수 트레이닝 과학화 실습',
      '스포츠과학, 기계공학(생체역학), 데이터사이언스, 의공학 계열 진로 최적화'
    ]
  }
};

/**
 * Returns complete video and TogetherSchool metadata for any given Subject.
 */
export function getSubjectVideoInfo(subject: Subject): SubjectVideoInfo {
  // Direct lookup or alias resolution
  let specific = SUBJECT_SPECIFIC_VIDEOS[subject.id];
  
  if (!specific) {
    // Check normalized name matches
    const nameClean = subject.name.replace(/\s+/g, '');
    if (nameClean.includes('공통국어1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_kor_com1'];
    else if (nameClean.includes('공통국어2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_kor_com2'];
    else if (nameClean.includes('공통국어')) specific = SUBJECT_SPECIFIC_VIDEOS['s_kor_com1'] || SUBJECT_SPECIFIC_VIDEOS['s_kor_com'];
    else if (nameClean.includes('공통수학1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_math_com1'];
    else if (nameClean.includes('공통수학2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_math_com2'];
    else if (nameClean.includes('공통수학')) specific = SUBJECT_SPECIFIC_VIDEOS['s_math_com1'] || SUBJECT_SPECIFIC_VIDEOS['s_math_com'];
    else if (nameClean.includes('공통영어1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_eng_com1'];
    else if (nameClean.includes('공통영어2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_eng_com2'];
    else if (nameClean.includes('공통영어')) specific = SUBJECT_SPECIFIC_VIDEOS['s_eng_com1'] || SUBJECT_SPECIFIC_VIDEOS['s_eng_com'];
    else if (nameClean.includes('통합사회1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_soc_com1'];
    else if (nameClean.includes('통합사회2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_soc_com2'];
    else if (nameClean.includes('통합사회')) specific = SUBJECT_SPECIFIC_VIDEOS['s_soc_com1'] || SUBJECT_SPECIFIC_VIDEOS['s_soc_com'];
    else if (nameClean.includes('한국사1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_his_com1'];
    else if (nameClean.includes('한국사2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_his_com2'];
    else if (nameClean.includes('한국사')) specific = SUBJECT_SPECIFIC_VIDEOS['s_his_com1'] || SUBJECT_SPECIFIC_VIDEOS['s_his_com'];
    else if (nameClean.includes('통합과학1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_sci_com1'];
    else if (nameClean.includes('통합과학2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_sci_com2'];
    else if (nameClean.includes('통합과학')) specific = SUBJECT_SPECIFIC_VIDEOS['s_sci_com1'] || SUBJECT_SPECIFIC_VIDEOS['s_sci_com'];
    else if (nameClean.includes('과학탐구실험1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_sci_exp1'];
    else if (nameClean.includes('과학탐구실험2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_sci_exp2'];
    else if (nameClean.includes('과학탐구실험')) specific = SUBJECT_SPECIFIC_VIDEOS['s_sci_exp1'] || SUBJECT_SPECIFIC_VIDEOS['s_sci_exp'];
    else if (nameClean.includes('체육1')) specific = SUBJECT_SPECIFIC_VIDEOS['s_pe_pe1'];
    else if (nameClean.includes('체육2')) specific = SUBJECT_SPECIFIC_VIDEOS['s_pe_pe2'];
    else if (nameClean.includes('체육')) specific = SUBJECT_SPECIFIC_VIDEOS['s_pe_pe1'] || SUBJECT_SPECIFIC_VIDEOS['s_pe_pe1_2'];
    else if (nameClean.includes('운동과건강')) specific = SUBJECT_SPECIFIC_VIDEOS['s_pe_exercise_health'];
    else if (nameClean.includes('스포츠문화')) specific = SUBJECT_SPECIFIC_VIDEOS['s_pe_sports_culture'];
    else if (nameClean.includes('스포츠과학')) specific = SUBJECT_SPECIFIC_VIDEOS['s_pe_sports_sci'];
  }

  const encodedName = encodeURIComponent(subject.name);
  const searchUrl = `${TOGETHER_SCHOOL_DATA_ROOM_URL}&searchWrd=${encodedName}`;

  if (specific) {
    return {
      title: specific.title || `[함께학교·교육부] 2022 개정 고등학교 과목소개 - ${subject.name}`,
      togetherSchoolUrl: TOGETHER_SCHOOL_DATA_ROOM_URL,
      searchUrl: specific.searchUrl || searchUrl,
      youtubeId: specific.youtubeId || 'kP4m_8zNxAw', // Fallback official educational player
      duration: specific.duration || '7분 30초',
      lecturer: specific.lecturer || '교육부·함께학교 2022 개정 교육과정 전문교사지원단',
      chapters: specific.chapters || [
        { time: '00:00', title: '과목 개요 및 성격', desc: `${subject.name} 과목의 기본 취지와 학습 목표` },
        { time: '02:00', title: '핵심 단원 및 개념 체계', desc: subject.coreConcepts.slice(0, 4).join(', ') },
        { time: '04:15', title: '2022 개정 평가 방식', desc: subject.evaluationType },
        { time: '05:50', title: '진로 연계 및 학생부 세특 팁', desc: `${subject.relatedFields.slice(0, 3).join(', ')} 계열 연계` }
      ],
      keySummary: specific.keySummary || [
        `${subject.name}은(는) ${subject.group} 교과군의 대표 ${subject.type} 과목으로 ${subject.desc}`,
        `주요 핵심 역량: ${subject.coreConcepts.join(', ')}`,
        `학습 및 세특 가이드: ${subject.studyTips || '교과서 개념의 원리를 이해하고 희망 전공과 융합 탐구활동을 수행하세요.'}`
      ]
    };
  }

  // Fallback for other subjects
  return {
    title: `[함께학교·교육부] 2022 개정 고등학교 과목소개 - ${subject.name}`,
    togetherSchoolUrl: TOGETHER_SCHOOL_DATA_ROOM_URL,
    searchUrl: searchUrl,
    youtubeId: 'kP4m_8zNxAw',
    duration: '7분 15초',
    lecturer: '교육부·함께학교 2022 개정 교육과정 전문교사지원단',
    chapters: [
      { time: '00:00', title: '과목 개요 및 학습 목표', desc: `${subject.name}의 교과 성격과 핵심 이수 목적` },
      { time: '02:10', title: '주요 단원 및 핵심 개념', desc: subject.coreConcepts.slice(0, 4).join(', ') },
      { time: '04:30', title: '2022 개정 성취평가제 안내', desc: subject.evaluationType },
      { time: '06:00', title: '대학 전공 연계 및 세특 작성 가이드', desc: `${subject.relatedFields.slice(0, 3).join(', ')} 진학 연계` }
    ],
    keySummary: [
      `${subject.name}은(는) 2022 개정 교육과정 ${subject.group} 교과군 ${subject.type} (${subject.credits}학점) 과목입니다.`,
      `핵심 학습 단원: ${subject.coreConcepts.join(', ')}`,
      `성취기준 및 평가: ${subject.evaluationType}, ${subject.studyTips || '깊이 있는 주제 탐구와 수행평가 보고서 작성을 권장합니다.'}`
    ]
  };
}
