export interface GuidanceSection {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  points: {
    title: string;
    description: string;
    details: string[];
    tips?: string;
  }[];
}

export const GUIDANCE_SECTIONS: GuidanceSection[] = [
  {
    id: 'credit_system',
    title: '고교학점제 이수 체계 및 졸업 요건',
    category: '제도 개요',
    badge: '3년간 총 192학점',
    description: '학생이 기초 소양과 기본 학력을 바탕으로 진로·적성에 따라 과목을 선택하고, 이수 기준에 도달한 과목에 대해 학점을 취득·누적하여 졸업하는 교육과정 운영 제도입니다.',
    points: [
      {
        title: '1. 졸업 요건 및 학점 배당 기준',
        description: '3년간 총 192학점(교과 174학점 + 창의적 체험활동 18학점) 취득이 필수입니다.',
        details: [
          '1학점 = 50분을 기준으로 16회를 이수하는 수업량 (기존 1단위 17회에서 16회로 전환되어 수업 유연성 확보)',
          '교과 총 이수 학점: 174학점 (기초·탐구·체육예술·생활교양 교과군 필수 이수 84학점 + 자율 이수 90학점)',
          '창의적 체험활동: 18학점 (288시간) - 자율·자치활동, 동아리활동, 진로활동'
        ],
        tips: '과도한 특정 교과목 쏠림을 방지하기 위해 기초 교과(국어, 수학, 영어, 한국사) 이수 학점의 총합은 교과 총 이수 학점(174학점)의 50%(87학점)를 초과할 수 없습니다.'
      },
      {
        title: '2. 과목 이수 기준 및 최소 성취수준 보장 지도',
        description: '과목별 출석률과 학업성취율 두 가지 기준을 모두 충족해야 학점이 인정됩니다.',
        details: [
          '과목 출석률: 해당 과목 수업 횟수의 2/3 이상 출석',
          '학업 성취율: 해당 과목 평가 기준의 40% 이상 성취 (미달 시 성취도 I 부여)',
          '미이수(I) 예방 및 보충지도: 학기 중 사전 예방 지도 및 방학 중 보충 이수 프로그램(과제 수행, 별도 보충수업 등)을 통해 최소 성취수준 도달 지원'
        ],
        tips: '미이수는 낙제가 아닌 학생의 배움을 끝까지 책임지는 공교육 안전망입니다.'
      },
      {
        title: '3. 2022 개정 성취평가제 및 내신 평가 방식',
        description: '공통과목 및 선택과목의 성취도(A~E) 산출 및 대입 반영 방식',
        details: [
          '보통교과 공통과목: 5단계 성취도(A, B, C, D, E)와 5등급 상대평가(석차등급) 병기',
          '일반선택 및 진로선택과목: 성취도(A~E) 중심 평가 및 과목별 세부능력 및 특기사항 충실 기록',
          '융합선택과목: 융합적 사고와 실생활 문제 해결 중심의 성취평가',
          '체육·예술·교양: 3단계 성취도(A, B, C) 또는 이수(P) 여부 기재'
        ]
      }
    ]
  },
  {
    id: 'curriculum_structure',
    title: '2022 개정 보통교과 구조 및 위계성',
    category: '교육과정',
    badge: '공통 / 일반선택 / 진로선택 / 융합선택',
    description: '학생 맞춤형 진로 설계를 위해 교과목 구조가 세분화되고, 학문 간 융합과 실생활 연계 과목이 대폭 신설되었습니다.',
    points: [
      {
        title: '1. 보통교과 4대 과목군 분류',
        description: '위계와 성격에 따라 단계별로 과목을 선택합니다.',
        details: [
          '[공통과목]: 고등학교 단계에서 배워야 할 필수 기초 소양 함양 (공통국어, 공통수학, 공통영어, 한국사, 통합사회, 통합과학, 과학탐구실험)',
          '[일반선택과목]: 교과별 학문 영역의 기본 원리를 이해하고 일반적인 교양을 쌓는 과목 (대수, 미적분Ⅰ, 확률과통계, 물리학, 화학, 사회·문화 등)',
          '[진로선택과목]: 자신의 적성과 희망 진로(전공)에 따라 심화된 학업 역량을 기르는 과목 (미적분Ⅱ, 기하, 인공지능수학, 역학과에너지, 세포와물질대사, 사회문제탐구 등)',
          '[융합선택과목]: 교과 내·교과 간 주제를 융합하여 실생활 문제 해결 능력을 기르는 과목 (기후변화와환경생태, 로봇과미래기술, 실용통계, 독서토론과글쓰기 등)'
        ]
      },
      {
        title: '2. 수학·과학·사회 교과의 위계성(Prerequisite) 준수',
        description: '선수 과목을 먼저 이수해야 후속 심화 과목의 학업 성취가 가능합니다.',
        details: [
          '수학 위계: 공통수학 1·2 → 대수 / 미적분Ⅰ → 미적분Ⅱ / 기하 / 인공지능수학',
          '과학 위계: 통합과학 → 물리학/화학/생명과학/지구과학 → 고급물리/고급화학/고급생명과학/지구시스템',
          '선수 학습 결손 방지: 위계를 건너뛰어 상위 진로선택 과목을 먼저 수강할 경우 학습 결손 및 학업 부담이 가중될 수 있으므로 정규 위계 준수 권장'
        ],
        tips: '대학 학생부종합전형 평가관들도 과목 이수의 위계성과 단계적 심화 과정을 매우 중요하게 평가합니다.'
      }
    ]
  },
  {
    id: 'five_step_design',
    title: '대구 진로·학업 설계 5단계 프로세스',
    category: '진로학업 코칭',
    badge: '질문이 진로가 되는 5단계',
    description: '대구광역시교육청 진로교육 모델로, 학생이 주도적으로 질문하고 탐구하며 자신만의 3개년 학업 로드맵을 완성해 나가는 과정입니다.',
    points: [
      {
        title: '1단계: [진로 지도] - 자기 이해와 진로 목표 가설 설정',
        description: '나의 흥미, 적성, 가치관을 탐색하고 관심 분야의 질문을 만듭니다.',
        details: [
          '표준화 검사(커리어넷 심리검사, 워크넷 적성검사) 및 간이 진단 실시',
          '관심 있는 직업 세계와 대학 전공의 최신 변화 트렌드 탐색',
          '단 하나의 고정된 직업이 아닌 유연한 1~2개의 "진로 목표 가설" 설정'
        ]
      },
      {
        title: '2단계: [과목 선택 지도] - 대학 권장과목 및 학과 요구역량 분석',
        description: '희망 전공에서 요구하는 핵심 역량과 고교 선택과목을 매칭합니다.',
        details: [
          '주요 대학(서울대, 경북대 등)의 전공별 "핵심 권장이수과목" 및 "권장이수과목" 확인',
          '과목 안내서 및 교과별 교육과정 편제표를 분석하여 필수 선수과목 파악',
          '담임교사 및 교과 교사와의 1:1 진로학업 상담'
        ]
      },
      {
        title: '3단계: [학업 이수 설계 지도] - 3개년 학업계획서 수립',
        description: '1~3학년 학기별 이수 과목을 배치하고 192학점 충족 여부를 시뮬레이션합니다.',
        details: [
          '학기별 수강 과목 편성표(기초, 탐구, 체육예술, 생활교양) 작성',
          '필수 이수 학점(84학점) 및 기초 교과 50% 초과 금지 규정 충족 검증',
          '과목 간 선수 관계 및 위계성 적합도 점검'
        ]
      },
      {
        title: '4단계: [학업 관리 지도] - 성공적인 이수와 자기주도 탐구',
        description: '선택한 과목에서 질문 중심의 깊이 있는 탐구와 최소 성취수준을 관리합니다.',
        details: [
          '교과 수업 내 모둠 활동, 토론, 실험, 보고서 작성을 통한 "질문이 진로가 되는 세특" 창출',
          '학업 성취 모니터링을 통한 미이수(I) 예방 및 학업 코칭',
          '학교 밖 교육과정 및 공동교육과정(온·오프라인 클러스터) 연계 참여'
        ]
      },
      {
        title: '5단계: [진로 변경 및 학업 재설계 지도] - 유연한 진로 전환',
        description: '진로가 바뀌더라도 실패가 아닌 새로운 가능성으로 학업 계획을 재조정합니다.',
        details: [
          '진로 변경 사유와 새로운 흥미 분야의 연관성 분석',
          '기존 이수한 과목들의 전이 가능한 융합 역량(Core Transferable Skills) 도출',
          '남은 학기의 선택과목 재배치 및 대학 전공자율선택제(무전공) 전형 대비'
        ],
        tips: '고교 시절 진로 변경은 지극히 자연스러운 성장 과정입니다. 변화의 계기와 탐구 과정을 학생부에 진솔하게 담아내는 것이 더 큰 강점이 됩니다.'
      }
    ]
  },
  {
    id: 'admissions_and_unmajor',
    title: '2025~2028 대입 전형 & 대학 무전공(전공자율선택제)',
    category: '대입 전략',
    badge: '무전공 1유형 vs 2유형',
    description: '대학의 전공자율선택제 확대와 2028 대입 개편안에 따른 전략적 고교 과목 선택법을 안내합니다.',
    points: [
      {
        title: '1. 전공자율선택제(무전공) 2가지 선발 유형',
        description: '대학 입학 후 전공을 자유롭게 선택하는 신입생 선발 방식',
        details: [
          '[유형 1 - 완전 자율선택형]: 보건·의료·사범 등 국가 자격 특수학과를 제외하고 대학 내 모든 전공을 100% 자율 선택 (예: 서울대 자유전공학부, 경북대 자율전공부 등)',
          '[유형 2 - 계열·단과대별 선택형]: 인문사회계열, 공학계열, 자연과학계열 등 광역 단위로 모집한 후 해당 단과대 내 세부 학과를 자율 선택'
        ],
        tips: '무전공을 희망하는 학생일수록 국어·수학·영어의 탄탄한 기초 학업 역량과 함께 융합적 탐구 역량을 보여주는 것이 유리합니다.'
      },
      {
        title: '2. 학생부종합전형에서의 교과 이수 평가 3단계',
        description: '입학사정관은 지원자가 어떤 과목을 어떻게 공부했는지를 다각도로 평가합니다.',
        details: [
          '[1단계 - 학업 기초]: 전공 연계 핵심 권장과목 이수 여부와 성취도',
          '[2단계 - 탐구 과정]: 교과 세부능력 및 특기사항에 드러난 자기주도적 호기심과 질문의 깊이',
          '[3단계 - 공동체 및 융합]: 학교 밖 교육, 공동교육과정, 융합선택 과목을 통한 도전정신'
        ]
      }
    ]
  },
  {
    id: 'out_school_curriculum',
    title: '학교 밖 교육과정 & 공동교육과정',
    category: '지역사회 연계',
    badge: '최대 34학점 인정',
    description: '단위 학교에서 개설하기 어려운 심화·전문 과목을 지역사회 기관 및 대학과 연계하여 이수할 수 있습니다.',
    points: [
      {
        title: '1. 학교 밖 교육과정 운영 원칙',
        description: '시·도 교육감의 사전 승인을 받은 기관의 프로그램을 학교 수업으로 인정합니다.',
        details: [
          '대상: 단위 학교 내 미개설 과목 중 학생의 진로 희망에 꼭 필요한 심화·전공 과목',
          '학점 인정 상한: 3년간 최대 34학점(교과 18학점 + 창체 16학점) 이내',
          '학생부 기재: 교과 영역에 [학교 밖 교육]으로 과목명과 이수 학점을 기록'
        ]
      },
      {
        title: '2. 대구-대학 연계 학점선이수제 (Dual Enrollment)',
        description: '경북대, 영남대, 계명대, 대구대 등 지역 거점 대학의 교수진 및 연구실 인프라를 활용',
        details: [
          '고교 단계에서 대학 수준의 기초 전공 과목(예: 인공지능 알고리즘 실습, 반도체 물성 기초 등) 수강',
          '고교 졸업 학점 인정과 동시에 향후 해당 대학 진학 시 대학 학점으로도 인정 연계 추진'
        ]
      }
    ]
  }
];

export const ROADMAP_TEMPLATES = [
  {
    id: 'tmpl_cs',
    title: '컴퓨터·소프트웨어·AI 계열',
    icon: 'Terminal',
    category: '공학',
    desc: 'SW 개발자, 인공지능 연구원, 데이터 사이언티스트를 위한 3개년 최적화 이수 모델',
    plan: {
      g1s1: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g1s2: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_phy', 's_tech_info', 's_soc_culture'],
      g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_tech_ai_basic', 's_sci_chem'],
      g3s1: ['s_math_calc2', 's_math_geo', 's_math_ai', 's_sci_phy_adv', 's_tech_robot'],
      g3s2: ['s_math_stat_app', 's_soc_problem', 's_sci_climate', 's_kor_lit']
    },
    keySubjects: ['미적분Ⅰ·Ⅱ', '기하', '정보', '인공지능 수학', '물리학'],
    recommendedReading: '컴퓨터 구조와 알고리즘, 인공지능 윤리, 선형대수학 기초'
  },
  {
    id: 'tmpl_elec',
    title: '전자전기·반도체공학 계열',
    icon: 'Cpu',
    category: '공학',
    desc: '반도체 소자, 지능형 회로, 차세대 무선 통신 엔지니어를 위한 3개년 이수 모델',
    plan: {
      g1s1: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g1s2: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_phy', 's_sci_chem', 's_tech_info'],
      g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_sci_phy_adv', 's_soc_culture'],
      g3s1: ['s_math_calc2', 's_math_geo', 's_sci_chem_adv', 's_tech_robot'],
      g3s2: ['s_math_ai', 's_sci_climate', 's_soc_problem', 's_kor_lit']
    },
    keySubjects: ['미적분Ⅰ·Ⅱ', '기하', '물리학', '역학과 에너지(고급물리)', '화학'],
    recommendedReading: '반도체 8대 공정의 원리, 전자기학과 현대 문명'
  },
  {
    id: 'tmpl_med',
    title: '의예·치의예·약학·바이오 계열',
    icon: 'HeartPulse',
    category: '의약/자연',
    desc: '의사, 약사, 생명과학자, 신약개발 연구원을 위한 생명·화학 심화 3개년 이수 모델',
    plan: {
      g1s1: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g1s2: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_bio', 's_sci_chem', 's_soc_culture'],
      g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_sci_phy', 's_sci_climate'],
      g3s1: ['s_sci_bio_adv', 's_sci_chem_adv', 's_math_calc2', 's_soc_problem'],
      g3s2: ['s_math_stat_app', 's_kor_lit', 's_soc_geo', 's_tech_info']
    },
    keySubjects: ['생명과학', '화학', '세포와 물질대사', '물질과 에너지', '확률과 통계', '미적분Ⅰ'],
    recommendedReading: '인체의 생리 항상성, 바이오 의약품과 유전자 치료'
  },
  {
    id: 'tmpl_biz',
    title: '경영·경제·빅데이터금융 계열',
    icon: 'TrendingUp',
    category: '상경/사회',
    desc: '기업가, 금융 애널리스트, 데이터 마케터, 정책 분석가를 위한 통계·수학·사회 융합 모델',
    plan: {
      g1s1: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g1s2: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_soc_culture', 's_soc_geo', 's_tech_info'],
      g2s2: ['s_kor_speech', 's_math_prob', 's_eng_eng2', 's_math_calc1', 's_soc_problem'],
      g3s1: ['s_math_stat_app', 's_soc_media', 's_math_ai', 's_kor_lit'],
      g3s2: ['s_sci_climate', 's_math_calc2', 's_eng_eng2']
    },
    keySubjects: ['확률과 통계', '대수', '미적분Ⅰ', '실용 통계', '사회·문화', '독서와 작문'],
    recommendedReading: '행동경제학, 빅데이터를 활용한 비즈니스 의사결정'
  },
  {
    id: 'tmpl_edu',
    title: '사범대학·교육학·에듀테크 계열',
    icon: 'GraduationCap',
    category: '교육',
    desc: '초·중등 교사, 장학사, 에듀테크 기획자를 위한 교수학습 및 인문·정보 융합 모델',
    plan: {
      g1s1: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g1s2: ['s_kor_com', 's_math_com', 's_eng_com', 's_soc_com', 's_sci_com', 's_sci_exp', 's_his_com'],
      g2s1: ['s_kor_read', 's_kor_speech', 's_eng_eng1', 's_soc_culture', 's_tech_info'],
      g2s2: ['s_kor_lit', 's_math_alg', 's_eng_eng2', 's_math_prob', 's_soc_problem'],
      g3s1: ['s_soc_media', 's_tech_ai_basic', 's_sci_climate', 's_math_stat_app'],
      g3s2: ['s_math_calc1', 's_soc_geo']
    },
    keySubjects: ['독서와 작문', '화법과 언어', '사회문제 탐구', '정보', '사회·문화'],
    recommendedReading: '2022 개정 교육과정 총론, IB 교육과정 탐구, 미래 교육과 에듀테크'
  }
];
