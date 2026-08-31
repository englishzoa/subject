export interface GuidanceSection {
  id: string;
  title: string;
  category: string;
  description: string;
  badge: string;
  iconName?: string;
  points: {
    title: string;
    description: string;
    details: string[];
    tips?: string;
  }[];
}

// 1. hscredit.kr Before vs After Comparison Data
export interface BeforeAfterItem {
  category: string;
  before: string;
  after: string;
  highlight: string;
}

export const HSCREDIT_BEFORE_AFTER: BeforeAfterItem[] = [
  {
    category: '수업 및 교실 체제',
    before: '교사가 교실을 찾아가는 강의식 수업, 학급(반) 중심의 동일한 수업 참여',
    after: '학생이 자신의 시간표에 따라 교과 교실로 이동하여 참여하는 학생 주도형 수업',
    highlight: '교과교실제 및 학생 맞춤형 이동 수업'
  },
  {
    category: '교육과정 편성',
    before: '학교가 일괄적으로 지정해 준 공급자 중심의 획일적인 시간표',
    after: '학생이 자신의 진로·적성에 맞춰 과목을 선택하고 스스로 설계한 개별 시간표',
    highlight: '학생의 과목 선택권 전면 확대'
  },
  {
    category: '평가 및 성적 산출',
    before: '지필평가 중심, 9등급 상대평가(석차 등급)에 따른 치열한 성적 줄세우기',
    after: '교과별 성취수준에 따른 성취평가제(A~E) 및 수업 밀착형 과정 중심 평가 (5등급 병기)',
    highlight: '경쟁 중심에서 학생 개인의 성장 중심 평가'
  },
  {
    category: '과목 이수 및 졸업 요건',
    before: '해당 학년 수업일수의 2/3 이상 출석만 하면 성적과 무관하게 자동 졸업',
    after: '과목별 출석률(2/3 이상)과 학업성취율(40% 이상) 충족 시 학점 인정, 3년간 192학점 누적 졸업',
    highlight: '이수 기준 충족 + 192학점 누적'
  },
  {
    category: '학습 부진 및 미도달 지원',
    before: '성적이 낮아도 별도 의무 보충 없이 진급/졸업 (형식적 이수)',
    after: '최소 성취수준 미도달 시 예방 지도 및 방학 중 보충 이수 프로그램을 통한 공교육 책임지도',
    highlight: '최소 성취수준 보장지도 안전망'
  },
  {
    category: '학교 밖 학습 인정',
    before: '단위 학교 내에서 개설된 과목만 인정 (외부 기관 학습 불인정)',
    after: '학교 간 공동교육과정(온·오프라인) 및 지역사회·대학 연계 학교 밖 교육을 정규 학점으로 인정',
    highlight: '지역사회 및 대학 연계(최대 34학점)'
  }
];

// 2. hscredit.kr 7-Step Operating Cycle
export interface OperatingStep {
  stepNumber: number;
  title: string;
  period: string;
  summary: string;
  coreActivities: string[];
  studentRole: string;
  schoolRole: string;
  badgeColor: string;
}

export const HSCREDIT_7_STEPS: OperatingStep[] = [
  {
    stepNumber: 1,
    title: '교육과정 편성 및 안내',
    period: '1학기 초 (3~4월)',
    summary: '학교는 학생 수요를 반영한 다채로운 선택과목 개설 계획을 수립하고 과목 안내서를 제공합니다.',
    coreActivities: [
      '학교 교육과정 박람회 및 교과목 설명회 개최',
      '2022 개정 보통교과(공통·일반·진로·융합) 안내 책자 및 온라인 카탈로그 배부',
      '대학 전공별 권장이수과목 및 직업 연계성 사전 안내'
    ],
    studentRole: '과목별 교육 목표, 학습 내용 체계, 평가 방식, 대학 전공 연계성을 탐독하고 관심 과목 후보군 정리',
    schoolRole: '교과 협의회를 통해 다양한 선택과목 개설 요건을 마련하고 학생·학부모 대상 설명회 진행',
    badgeColor: 'bg-blue-600'
  },
  {
    stepNumber: 2,
    title: '학생 진로·학업설계 지도',
    period: '4~5월',
    summary: '학생의 적성과 흥미를 심층 진단하고 교사와의 1:1 상담을 통해 3개년 학업계획서를 수립합니다.',
    coreActivities: [
      '커리어넷·워크넷 표준화 심리검사 및 간이 적성 진단 실시',
      '담임교사 및 진로전담교사, 교과교사 1:1 맞춤형 진로학업 상담',
      '3개년 192학점 개인별 학업계획서(Academic Roadmap) 초안 작성'
    ],
    studentRole: '자신의 질문과 강점을 바탕으로 진로 목표 가설을 세우고 학기별 수강 희망 과목 로드맵을 설계',
    schoolRole: '진로 진학 데이터베이스를 기반으로 과목 위계성 및 졸업 요건(192학점, 기초교과 50% 이하) 점검 및 피드백',
    badgeColor: 'bg-indigo-600'
  },
  {
    stepNumber: 3,
    title: '수강신청 (가신청 & 본신청)',
    period: '5~7월',
    summary: '학생의 수강 희망 수요 조사를 바탕으로 개설 과목을 확정하고 온라인 수강신청을 완료합니다.',
    coreActivities: [
      '1차 수강 희망 수요 조사(가신청)를 통한 과목별 개설 가능 여부 확인',
      '소인수 과목, 학교 간 공동교육과정 및 학교 밖 교육 수요 파악',
      'hscredit.net 포털 또는 학교 시스템을 통한 최종 2차 수강신청(본신청)'
    ],
    studentRole: '선수과목 이수 여부를 점검하고 자신의 진로와 학업 역량에 최적화된 과목을 신중히 확정 및 신청',
    schoolRole: '수강 신청 결과를 분석하여 교원 배정, 교실 인프라(교과교실) 구축 및 공동교육과정 개설 협의',
    badgeColor: 'bg-violet-600'
  },
  {
    stepNumber: 4,
    title: '개인별 시간표 작성 및 배정',
    period: '8~12월 (차기 학기 준비)',
    summary: '학생들의 선택 과목 조합을 최대한 수용하는 지능형 맞춤 시간표를 편성합니다.',
    coreActivities: [
      '수강신청 데이터를 기반으로 이동 수업 블록 타임테이블(Block Timetable) 생성',
      '동일 시간대 과목 중복(공강/중복) 최소화 및 교실 배정',
      '학생별 개인 시간표 확정 통보 및 교재·수업 준비'
    ],
    studentRole: '자신만의 고유한 주간 시간표와 교과 교실 위치를 확인하고 학기 시작 전 학습 준비',
    schoolRole: '개인 시간표 프로그램 운영, 공강 발생 시 자율 학습 및 홈베이스 휴게 공간 등 학습 환경 구축',
    badgeColor: 'bg-purple-600'
  },
  {
    stepNumber: 5,
    title: '학생 맞춤형 수업 및 과정 중심 평가',
    period: '학기 중 (3~7월 / 8~12월)',
    summary: '배움 중심의 참여형 수업과 성취평가제 기반의 다면적 과정 중심 평가를 운영합니다.',
    coreActivities: [
      '토론, 협동 프로젝트, 실험·실습, 탐구 보고서 등 학생 주도 수업 전개',
      '지필평가와 수행평가를 유기적으로 결합한 성취기준별 평가',
      '학생부 교과 세부능력 및 특기사항(세특)에 개인별 질문과 탐구 역량 상세 기록'
    ],
    studentRole: '수업에 능동적으로 참여하며 질문 중심의 과제 탐구를 수행하고 포트폴리오 축적',
    schoolRole: '성취수준 도달도를 지속적으로 관찰·피드백하며 성취기준에 기반한 공정한 평가 실시',
    badgeColor: 'bg-teal-600'
  },
  {
    stepNumber: 6,
    title: '이수/미이수 판정 및 최소 성취수준 보장지도',
    period: '학기 말 ~ 방학 중',
    summary: '과목별 이수 기준 도달 여부를 확인하고 미도달 학생에게 예방 및 보충 지도를 제공합니다.',
    coreActivities: [
      '과목별 출석률(2/3 이상) 및 학업성취율(40% 이상) 산출 및 판정',
      '학기 중 결손 예방 지도(멘토링, 맞춤 피드백) 및 학기 말 보충 이수 프로그램 운영',
      '보충 과제 수행 또는 별도 보충수업 이수 시 최종 학점 부여(성취도 E 인정)'
    ],
    studentRole: '최소 성취수준에 미달하지 않도록 성실히 참여하고 필요 시 보충 프로그램에 참여하여 배움 완성',
    schoolRole: '단 한 명의 학생도 배움에서 소외되지 않도록 최소 성취수준 보장 지도 계획 수립 및 공교육 안전망 가동',
    badgeColor: 'bg-amber-600'
  },
  {
    stepNumber: 7,
    title: '학점 누적 및 졸업 인정',
    period: '3학년 2학기 말 (1~2월)',
    summary: '3년간 누적 취득한 학점을 최종 사정하여 192학점 요건을 충족한 학생의 졸업을 승인합니다.',
    coreActivities: [
      '교과 174학점 + 창의적 체험활동 18학점 = 총 192학점 이수 여부 전수 검증',
      '기초교과 50%(87학점) 이하 편성 및 교과군별 필수 이수학점 충족 확인',
      '학교 졸업사정위원회를 거쳐 졸업장 수여 및 대학 진학·사회 진출 지원'
    ],
    studentRole: '3년간 완성한 자신만의 진로 로드맵과 192학점 이수 결과를 바탕으로 진학 및 진로 실현',
    schoolRole: '학점 누적 관리 시스템을 통한 졸업 사정 완료 및 교육과정 이수 증명 발급',
    badgeColor: 'bg-emerald-600'
  }
];

// 3. hscredit.kr Minimum Achievement Level Guarantee Process
export interface MinAchievementStep {
  phase: string;
  title: string;
  period: string;
  actionList: string[];
  systemRole: string;
}

export const MIN_ACHIEVEMENT_PROCESS: MinAchievementStep[] = [
  {
    phase: '1단계',
    title: '사전 예방 지도 (Prevention)',
    period: '학기 초 ~ 학기 중',
    actionList: [
      '진단평가 및 수업 중 관찰을 통한 학습 결손 위험군 학생 조기 파악',
      '성취기준별 형성평가 및 맞춤형 피드백을 통해 학습 부진 누적 사전 차단',
      '교과 도우미, 또래 멘토링 및 방과 후 개별 클리닉 지원'
    ],
    systemRole: '단순한 시험 결과 통보가 아닌, 수업 과정에서 학생의 이해도를 실시간 점검하여 미이수 위험을 선제적으로 예방합니다.'
  },
  {
    phase: '2단계',
    title: '미이수(I) 예방 및 집중 보충 지도 (Intervention)',
    period: '학기 말 (기말고사 직후)',
    actionList: [
      '학업성취율 40% 미만 위험 학생을 대상으로 사전 보충 지도 안내 및 동의',
      '단원별 핵심 개념 재학습 온라인 콘텐츠 수강 및 서술형 과제물 부과',
      '교과 교사와의 1:1 보충 지도 및 핵심 성취기준 도달 점검'
    ],
    systemRole: '낙제가 아닌 학습 기회의 보장입니다. 학생이 성취기준에 도달할 수 있도록 맞춤형 학습 자료를 제공합니다.'
  },
  {
    phase: '3단계',
    title: '보충 이수 및 최종 학점 인정 (Remediation & Credit Grant)',
    period: '방학 중 ~ 학기 종료 전',
    actionList: [
      '방학 중 집중 보충 프로그램(온·오프라인) 이수 및 과제물 최종 평가',
      '최소 성취수준 도달 시 해당 과목 학점 공식 취득 인정',
      '학교생활기록부 교과학습발달상황에 성취도 "E" 및 이수 학점 기재'
    ],
    systemRole: '보충 과정을 성실히 완료한 모든 학생에게 공정한 학점 취득을 보장하여 192학점 누적 및 정상 졸업을 지원합니다.'
  }
];

// 4. hscredit.kr Frequently Asked Questions (FAQ)
export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  keyPoints: string[];
}

export const HSCREDIT_FAQS: FaqItem[] = [
  {
    id: 'faq_1',
    category: '제도 및 개념',
    question: '고교학점제는 기존 교육과정과 무엇이 가장 크게 다른가요?',
    answer: '가장 큰 차이는 "선택권의 주체"와 "졸업 기준"입니다. 기존에는 학교가 지정해 준 획일적인 시간표에 따라 출석 일수(수업일수의 2/3 이상)만 채우면 성적과 무관하게 자동 졸업했으나, 고교학점제에서는 학생이 자신의 진로에 맞춰 과목을 스스로 선택하고, 각 과목의 이수 기준(출석률 2/3 이상 + 학업성취율 40% 이상)을 충족하여 3년간 총 192학점을 취득해야 졸업하게 됩니다.',
    keyPoints: [
      '학생 개별 맞춤 시간표 (교과교실제 이동수업)',
      '192학점 누적 졸업 (교과 174학점 + 창체 18학점)',
      '성취평가제 및 최소 성취수준 보장지도'
    ]
  },
  {
    id: 'faq_2',
    category: '이수 기준 및 미이수',
    question: '과목에서 "미이수(I)"가 발생하면 유급되거나 졸업을 못 하게 되나요?',
    answer: '미이수가 발생한다고 해서 곧바로 유급되거나 졸업이 불가능해지는 것은 아닙니다. 학교에서는 학기 중 사전 예방 지도와 학기 말 및 방학 중 "보충 이수 프로그램"(온라인 콘텐츠 수강, 교사 멘토링, 과제 수행 등)을 반드시 운영하여 학생이 최소 성취수준(학업성취율 40%)에 도달하도록 돕습니다. 보충 과정을 이수하면 성취도 E와 함께 정규 학점이 부여되어 정상적으로 졸업할 수 있습니다.',
    keyPoints: [
      '미이수는 낙제가 아닌 학생의 배움을 끝까지 책임지는 공교육 안전망',
      '방학 중 보충 이수 프로그램을 통해 학점 취득 가능',
      '3년간 총 192학점만 채우면 정상 졸업'
    ]
  },
  {
    id: 'faq_3',
    category: '과목 선택 및 개설',
    question: '희망하는 진로 과목이 우리 학교에 개설되지 않으면 어떻게 하나요?',
    answer: '단위 학교에서 수강 희망 인원이 적거나 교원 수급 문제로 개설되지 못한 과목은 "학교 간 공동교육과정(거점학교형 오프라인 / 실시간 온라인 공동교육과정)" 또는 지자체·대학과 연계한 "학교 밖 교육과정"을 통해 수강할 수 있습니다. 이를 통해 취득한 학점은 3년간 최대 34학점까지 정규 고교 졸업 학점으로 인정되며 학교생활기록부에도 정식 기재됩니다.',
    keyPoints: [
      '학교 간 온·오프라인 공동교육과정 신청',
      '대구 거점 대학 연계 학점선이수제(Dual Enrollment)',
      '정규 학점 인정 및 학생부 세특 기록'
    ]
  },
  {
    id: 'faq_4',
    category: '대입 전략 및 무전공',
    question: '대학 입시에서 어떤 과목을 선택하는 것이 가장 유리한가요?',
    answer: '단순히 "내신 성적을 잘 받기 쉬운 과목"보다 "자신의 희망 전공과 직결된 핵심 권장이수과목 및 위계에 맞춘 심화 과목"을 도전적으로 수강하는 것이 2028 대입 학생부종합전형에서 훨씬 높은 평가를 받습니다. 대학 입학사정관들은 지원자가 전공 관련 과목을 위계에 맞추어 이수했는지, 어려운 진로선택 과목에 도전하여 어떤 지적 호기심을 발휘했는지를 정성적으로 평가합니다.',
    keyPoints: [
      '주요 대학 전공별 핵심 권장이수과목 확인 필수',
      '수학·과학 과목 간 선수과목 위계성 엄수',
      '수업 중 질문 중심의 깊이 있는 세특 탐구'
    ]
  },
  {
    id: 'faq_5',
    category: '진로 변경',
    question: '1학년이나 2학년 때 정했던 진로가 바뀌면 불이익이 있나요?',
    answer: '전혀 불이익이 없습니다. 청소년기에 진로가 구체화되거나 바뀌는 것은 지극히 자연스러운 성장 과정입니다. 대학 학생부종합전형에서도 진로 변경 자체를 감점하지 않습니다. 오히려 이전 과목에서 배운 기초 역량을 새로운 진로 분야와 어떻게 융합하고 확장했는지(Transferable Skills)를 세특과 면접에서 설득력 있게 보여주면 차별화된 융합 인재로 인정받을 수 있습니다.',
    keyPoints: [
      '진로 변경은 자연스러운 성장이며 감점 요인이 아님',
      '기존 과목 이수 역량을 새로운 분야로 연결하는 융합 탐구 전개',
      '남은 학기 선택과목 유연 재배치 및 무전공 전형 활용'
    ]
  },
  {
    id: 'faq_6',
    category: '성적 및 평가',
    question: '2028 대입 개편에 따른 내신 5등급제와 융합선택 과목 평가는 어떻게 이루어지나요?',
    answer: '2028 대입부터 고등학교 전 학년 전 과목의 내신이 기존 9등급에서 5등급 상대평가(1등급 10%, 2등급 24%, 3등급 32%, 4등급 24%, 5등급 10%)로 개편되며, 5단계 성취도(A, B, C, D, E)가 함께 병기됩니다. 특히 실생활 연계 및 창의적 융합 탐구를 목적으로 신설된 "융합선택과목"은 상대평가 석차등급을 산출하지 않고 순수 성취도(A~E) 절대평가만 적용되어 학생들의 학업 부담을 덜고 깊이 있는 탐구를 장려합니다.',
    keyPoints: [
      '전 학년 5등급 상대평가(1~5등급) + 5단계 성취도(A~E) 병기',
      '융합선택과목: 석차등급 미산출, 순수 성취도(A~E) 절대평가',
      '수능 통합사회·통합과학 공통 개편으로 내신 이수과목의 서류평가 영향력 확대'
    ]
  }
];

// Main Guidance Sections (Detailed Content Modules)
export const GUIDANCE_SECTIONS: GuidanceSection[] = [
  {
    id: 'intro_concept',
    title: '1. 고교학점제 개념 & 핵심 가치',
    category: '제도 정의',
    badge: 'KEDI hscredit.kr 공식 정의',
    description: '고교학점제는 학생이 기초 소양과 기본 학력을 바탕으로 진로·적성에 따라 과목을 선택하고, 이수 기준에 도달한 과목에 대해 학점을 취득·누적하여 졸업하는 교육과정 운영 제도입니다.',
    points: [
      {
        title: '3대 핵심 가치: 포용성 · 자율성 · 다양성',
        description: '단 한 명의 학생도 포기하지 않고 스스로 미래를 개척하는 포용적 책임교육을 지향합니다.',
        details: [
          '포용성(Inclusiveness): 최소 성취수준 보장지도를 통해 모든 학생의 기초 학력을 공교육이 끝까지 책임집니다.',
          '자율성(Autonomy): 학생이 자신의 진로와 질문에 맞춰 스스로 3개년 학업 경로를 설계하고 주도적으로 학습합니다.',
          '다양성(Diversity): 학교 안팎의 경계를 넘어 보통교과 100여 개 과목, 공동교육과정, 지역사회 연계 학습을 제공합니다.'
        ],
        tips: '고교학점제는 수동적 지식 수용자에서 능동적 진로 설계자로 학습자의 정체성을 혁신합니다.'
      },
      {
        title: '고교학점제 단계별 전면 도입 로드맵',
        description: '2020년 마이스터고 시범 적용부터 2025년 고1 전면 도입, 2028 대입 개편안까지의 단계적 전환 과정',
        details: [
          '2020~2021년: 마이스터고(직업계고) 고교학점제 우선 도입 및 학점제 연구·선도학교 전국 확대',
          '2022~2024년: 특성화고 전면 도입 및 일반계 고등학교 192학점 체제 단계적 시범 적용',
          '2025년: 전국 고등학교 1학년 신입생부터 2022 개정 교육과정 기반 고교학점제 전면 시행',
          '2028년: 2028 대입 개편안(내신 5등급제 + 통합형 수능) 첫 졸업생 전면 적용'
        ]
      }
    ]
  },
  {
    id: 'background_and_need',
    title: '2. 도입 배경 및 기대 효과',
    category: '추진 배경',
    badge: '미래 사회 역량 중심',
    description: '4차 산업혁명과 인공지능 시대의 도래, 학령인구 급감 및 초개인화 사회로의 전환에 대응하기 위해 교육 패러다임의 혁신이 필수적입니다.',
    points: [
      {
        title: '도입 배경 1: 4차 산업혁명과 지식 융복합 시대',
        description: '단순 암기 위주의 정답 찾기 교육에서 문제 해결력과 비판적 사고력을 갖춘 창의·융합 인재 양성으로 전환',
        details: [
          '급변하는 직업 세계와 신기술(AI, 바이오, 로봇)에 유연하게 적응할 수 있는 자기주도적 학습 역량 필요',
          '획일적인 표준화 교육으로는 미래 사회가 요구하는 다채로운 개성과 전문성을 키울 수 없음'
        ]
      },
      {
        title: '도입 배경 2: 학령인구 급감과 단 한 명도 놓치지 않는 맞춤형 책임교육',
        description: '학생 한 명 한 명의 잠재력과 역량을 극대화하는 학생 중심 교육체계 구축',
        details: [
          '출산율 저하로 학령인구가 급감함에 따라 모든 학생을 사회의 핵심 동량으로 키워내는 책임교육 필수',
          '과거의 서열화된 상대평가 줄세우기에서 벗어나 개인의 배움과 성장을 지원하는 성취평가제 안착'
        ]
      },
      {
        title: '교육 주체별 기대 효과 (학생 · 교사 · 학교)',
        description: '고교학점제가 실현하는 미래 지향적 학교 문화',
        details: [
          '학생: 학습 흥미와 동기 부여, 자신의 질문에 따른 맞춤형 학업 역량 개발, 책임감 있는 시간 관리',
          '교사: 학생 참여 중심의 수업 설계 및 과정 중심 평가의 자율성·전문성 강화, 깊이 있는 1:1 상담',
          '학교: 학교 간 벽을 허무는 공동교육과정 활성화, 지역사회 인프라와 결합한 개방형 교육 생태계 실현'
        ]
      }
    ]
  },
  {
    id: 'operating_system_7steps',
    title: '3. 고교학점제 운영 체제 & 7단계 절차',
    category: '운영 프로세스',
    badge: '교육과정 편성부터 졸업까지',
    description: '고등학교 3년 동안 진행되는 고교학점제의 표준 운영 주기를 7단계로 나누어 체계적으로 지원합니다.',
    points: [
      {
        title: '1~3단계: [교육과정 안내] ➔ [진로학업설계] ➔ [수강신청]',
        description: '학교는 선택과목을 개설하고 학생은 1:1 상담을 거쳐 자신만의 과목을 신청합니다.',
        details: [
          '1단계 (3~4월): 학교 교육과정 박람회, 선택과목 안내서 배부, 교과별 설명회',
          '2단계 (4~5월): 커리어넷 적성검사, 담임·교과교사 상담, 3개년 192학점 학업계획서 작성',
          '3단계 (5~7월): 1차 수요조사(가신청) ➔ 개설 과목 확정 ➔ hscredit.net 최종 수강신청(본신청)'
        ]
      },
      {
        title: '4~5단계: [시간표 편성] ➔ [맞춤형 수업 & 과정평가]',
        description: '개인별 맞춤 시간표에 따라 교과교실로 이동하여 참여 중심의 깊이 있는 탐구를 진행합니다.',
        details: [
          '4단계 (8~12월): 수강신청 기반 블록 타임테이블 작성, 학생별 개인 시간표 부여',
          '5단계 (학기 중): 토론·프로젝트·실험 중심 수업, 성취평가제 및 과정 중심 평가, 세특 충실 기록'
        ]
      },
      {
        title: '6~7단계: [최소성취수준 보장] ➔ [192학점 누적 & 졸업]',
        description: '모든 학생이 성취기준에 도달할 수 있도록 보충지도를 제공하고 192학점 충족 시 졸업합니다.',
        details: [
          '6단계 (학기 말): 출석률(2/3) + 학업성취율(40%) 확인, 미이수자 예방 및 방학 중 보충과정 운영',
          '7단계 (3학년 말): 교과 174학점 + 창체 18학점 = 총 192학점 최종 이수 사정 후 졸업'
        ]
      }
    ]
  },
  {
    id: 'standards_and_credits',
    title: '4. 이수 기준 & 졸업 요건 (192학점)',
    category: '학점 규정',
    badge: '교과 174학점 + 창체 18학점',
    description: '고등학교 졸업을 위해 3년간 반드시 취득해야 하는 192학점의 구조와 세부 이수 기준을 명확히 규정합니다.',
    points: [
      {
        title: '192학점 구성 및 수업량 정의',
        description: '기존 204단위에서 192학점으로 적정화되어 자율 탐구 및 보충수업 시간을 확보했습니다.',
        details: [
          '1학점의 정의: 50분을 기준으로 16회를 이수하는 수업량 (기존 1단위 17회에서 16회로 전환)',
          '교과 총 이수학점: 174학점 (기초·탐구·체육예술·생활교양 교과군 필수 이수 84학점 + 자율 이수 90학점)',
          '창의적 체험활동: 18학점 (288시간) - 자율·자치활동, 동아리활동, 진로활동',
          '3년간 총 수업 시간: 3,072시간 (192학점 × 16회 × 50분)'
        ]
      },
      {
        title: '기초 교과 영역 50%(87학점) 편성 제한 규정',
        description: '국어, 수학, 영어, 한국사 과목으로의 과도한 편중을 방지하고 균형 잡힌 전인교육을 보장합니다.',
        details: [
          '기초 교과 영역(국어, 수학, 영어, 한국사) 이수 학점의 총합은 교과 총 이수학점(174학점)의 50%인 87학점을 초과할 수 없음',
          '이를 초과하여 편성된 학업계획서는 졸업 사정에서 인정되지 않으므로 시뮬레이터에서 자동 검증 필수'
        ],
        tips: '탐구(사회·과학), 기술·가정/정보, 제2외국어, 예술·체육 등 균형 있는 과목 배치가 매우 중요합니다.'
      },
      {
        title: '과목별 이수 요건: 출석률 2/3 + 학업성취율 40%',
        description: '학점을 취득하기 위해 학생이 충족해야 하는 2대 필수 기준',
        details: [
          '과목 출석률: 해당 과목 기준 수업 횟수의 2/3 이상 출석',
          '학업 성취율: 해당 과목 평가 기준의 40% 이상 성취 (미달 시 성취도 I 부여 및 보충지도 연계)'
        ]
      }
    ]
  },
  {
    id: 'joint_and_outschool',
    title: '5. 학교 간 공동교육과정 & 학교 밖 교육',
    category: '개방형 학습',
    badge: '온·오프라인 클러스터 및 최대 34학점',
    description: '단위 학교의 울타리를 넘어 인근 고등학교, 지역 거점 대학, 전문 연구기관과의 연계를 통해 심화 과목을 수강할 수 있습니다.',
    points: [
      {
        title: '학교 간 공동교육과정 (오프라인 거점형 & 온라인형)',
        description: '인근 학교들과 협력하여 소인수 희망 과목 및 심화 전공 과목을 공동으로 개설·운영합니다.',
        details: [
          '거점학교형(오프라인): 방과 후 또는 주말을 활용하여 인근 거점 고등학교 교실에서 대면 수업 참여',
          '온라인 공동교육과정: 시·도 교육청 실시간 쌍방향 원격 플랫폼을 통해 공간의 제약 없이 수강',
          '평가 및 기록: 참여 학교 간 공동 평가 기준을 적용하며 학생부 교과학습발달상황에 정규 과목으로 기재'
        ]
      },
      {
        title: '학교 밖 교육과정 & 대학 연계 학점선이수제(Dual Enrollment)',
        description: '시·도 교육감의 사전 승인을 받은 지역 연구소, 기업체, 예술기관 및 대학 프로그램을 학점으로 인정',
        details: [
          '학점 인정 범위: 3년간 최대 34학점(교과 18학점 + 창체 16학점) 이내',
          '대구-대학 연계 학점선이수제: 경북대, 영남대, 계명대, 대구대 등 지역 대학의 첨단 실험실 및 교수진과 연계하여 고교 단계에서 대학 수준의 기초 전공 과목 수강',
          '진학 시 연계: 고교 졸업 학점으로 인정받는 동시에 향후 해당 대학 진학 시 대학 학점으로도 인정 연계 추진'
        ]
      }
    ]
  },
  {
    id: 'evaluation_and_2028',
    title: '6. 2022 개정 성취평가제 & 2028 대입 연계',
    category: '대입 및 평가',
    badge: '내신 5등급제 + 융합선택 절대평가',
    description: '2028 대입 개편안과 연계하여 변화된 고교 내신 성적 산출 방식과 학생부종합전형 평가 요소를 분석합니다.',
    points: [
      {
        title: '2028 대입 내신 5등급제 개편',
        description: '기존 9등급제의 과도한 내신 경쟁을 완화하기 위해 5등급 체제로 전환',
        details: [
          '등급 비율: 1등급(상위 10%), 2등급(누적 34%), 3등급(누적 66%), 4등급(누적 90%), 5등급(누적 100%)',
          '공통과목, 일반선택, 진로선택: 5단계 성취도(A, B, C, D, E)와 5등급 상대평가(석차등급) 병기',
          '체육·예술·교양: 3단계 성취도(A, B, C) 또는 이수(P) 여부 기재'
        ]
      },
      {
        title: '융합선택과목의 성취도(A~E) 절대평가 원칙',
        description: '석차등급을 산출하지 않아 학생들의 학업 부담을 덜고 창의적 융합 탐구를 보장',
        details: [
          '융합선택과목(실용 통계, 기후변화와 환경생태, 과학과제 연구 등)은 상대평가 석차등급을 미산출하고 성취도(A~E) 절대평가만 적용',
          '내신 등급 산출 부담 없이 희망 전공과 관련된 융합 과목에 도전할 수 있는 환경 조성'
        ]
      },
      {
        title: '2028 수능 통합형 개편에 따른 학생부 이수과목의 중요성',
        description: '수능 선택과목 폐지로 대학 서류평가에서 고교 이수과목의 위계성과 세특의 중요성이 결정적 변수로 부상',
        details: [
          '2028 수능은 국어, 수학, 통합사회, 통합과학을 모든 수험생이 동일하게 응시',
          '대학 입학사정관은 지원자가 고교 3년간 어떤 진로선택·융합선택 과목을 이수했는지, 수학·과학 위계를 지켰는지를 정성 평가의 핵심 지표로 활용'
        ]
      }
    ]
  },
  {
    id: 'five_step_design',
    title: '7. 대구 진로·학업설계 5단계 지도 모델',
    category: '진로 코칭',
    badge: '질문이 진로가 되는 5단계',
    description: '대구광역시교육청 특화 모델로, 학생이 주도적으로 질문하고 탐구하며 자신만의 3개년 학업 로드맵을 완성해 나가는 과정입니다.',
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
  }
];

// Pre-defined Roadmap Templates for Academic Planner
export const ROADMAP_TEMPLATES = [
  {
    id: 'tmpl_cs',
    title: '컴퓨터·소프트웨어·AI 계열',
    icon: 'Terminal',
    category: '공학',
    desc: 'SW 개발자, 인공지능 연구원, 데이터 사이언티스트를 위한 3개년 최적화 이수 모델',
    plan: {
      g1s1: ['s_kor_com1', 's_math_com1', 's_eng_com1', 's_soc_com1', 's_sci_com1', 's_sci_exp1', 's_his_com1'],
      g1s2: ['s_kor_com2', 's_math_com2', 's_eng_com2', 's_soc_com2', 's_sci_com2', 's_sci_exp2', 's_his_com2'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_phy', 's_tech_info', 's_soc_world_geo'],
      g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_tech_ai_basic', 's_sci_chem'],
      g3s1: ['s_math_calc2', 's_math_geo', 's_math_ai', 's_sci_em', 's_tech_robot'],
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
      g1s1: ['s_kor_com1', 's_math_com1', 's_eng_com1', 's_soc_com1', 's_sci_com1', 's_sci_exp1', 's_his_com1'],
      g1s2: ['s_kor_com2', 's_math_com2', 's_eng_com2', 's_soc_com2', 's_sci_com2', 's_sci_exp2', 's_his_com2'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_phy', 's_sci_chem', 's_tech_info'],
      g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_sci_mech', 's_soc_world_geo'],
      g3s1: ['s_math_calc2', 's_math_geo', 's_sci_em', 's_tech_robot'],
      g3s2: ['s_math_ai', 's_sci_climate', 's_soc_problem', 's_kor_lit']
    },
    keySubjects: ['미적분Ⅰ·Ⅱ', '기하', '물리학', '전자기와 양자', '화학'],
    recommendedReading: '반도체 8대 공정의 원리, 전자기학과 현대 문명'
  },
  {
    id: 'tmpl_med',
    title: '의예·치의예·약학·바이오 계열',
    icon: 'HeartPulse',
    category: '의약/자연',
    desc: '의사, 약사, 생명과학자, 신약개발 연구원을 위한 생명·화학 심화 3개년 이수 모델',
    plan: {
      g1s1: ['s_kor_com1', 's_math_com1', 's_eng_com1', 's_soc_com1', 's_sci_com1', 's_sci_exp1', 's_his_com1'],
      g1s2: ['s_kor_com2', 's_math_com2', 's_eng_com2', 's_soc_com2', 's_sci_com2', 's_sci_exp2', 's_his_com2'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_bio', 's_sci_chem', 's_soc_world_geo'],
      g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_sci_phy', 's_sci_climate'],
      g3s1: ['s_sci_cell', 's_sci_chem_rx', 's_math_calc2', 's_soc_problem'],
      g3s2: ['s_math_stat_app', 's_kor_lit', 's_soc_geo', 's_tech_info']
    },
    keySubjects: ['생명과학', '화학', '세포와 물질대사', '화학 반응의 세계', '확률과 통계', '미적분Ⅰ'],
    recommendedReading: '인체의 생리 항상성, 바이오 의약품과 유전자 치료'
  },
  {
    id: 'tmpl_biz',
    title: '경영·경제·빅데이터금융 계열',
    icon: 'TrendingUp',
    category: '상경/사회',
    desc: '기업가, 금융 애널리스트, 데이터 마케터, 정책 분석가를 위한 통계·수학·사회 융합 모델',
    plan: {
      g1s1: ['s_kor_com1', 's_math_com1', 's_eng_com1', 's_soc_com1', 's_sci_com1', 's_sci_exp1', 's_his_com1'],
      g1s2: ['s_kor_com2', 's_math_com2', 's_eng_com2', 's_soc_com2', 's_sci_com2', 's_sci_exp2', 's_his_com2'],
      g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_soc_econ', 's_soc_world_geo', 's_tech_info'],
      g2s2: ['s_kor_speech', 's_math_prob', 's_eng_eng2', 's_math_calc1', 's_soc_problem'],
      g3s1: ['s_math_stat_app', 's_soc_fin', 's_math_ai', 's_kor_lit'],
      g3s2: ['s_sci_climate', 's_math_calc2', 's_eng_eng2']
    },
    keySubjects: ['확률과 통계', '대수', '미적분Ⅰ', '실용 통계', '경제', '금융과 경제생활'],
    recommendedReading: '행동경제학, 빅데이터를 활용한 비즈니스 의사결정'
  },
  {
    id: 'tmpl_edu',
    title: '사범대학·교육학·에듀테크 계열',
    icon: 'GraduationCap',
    category: '교육',
    desc: '초·중등 교사, 장학사, 에듀테크 기획자를 위한 교수학습 및 인문·정보 융합 모델',
    plan: {
      g1s1: ['s_kor_com1', 's_math_com1', 's_eng_com1', 's_soc_com1', 's_sci_com1', 's_sci_exp1', 's_his_com1'],
      g1s2: ['s_kor_com2', 's_math_com2', 's_eng_com2', 's_soc_com2', 's_sci_com2', 's_sci_exp2', 's_his_com2'],
      g2s1: ['s_kor_read', 's_kor_speech', 's_eng_eng1', 's_soc_world_geo', 's_tech_info'],
      g2s2: ['s_kor_lit', 's_math_alg', 's_eng_eng2', 's_math_prob', 's_soc_problem'],
      g3s1: ['s_soc_media', 's_tech_ai_basic', 's_sci_climate', 's_math_stat_app'],
      g3s2: ['s_math_calc1', 's_soc_geo']
    },
    keySubjects: ['독서와 작문', '화법과 언어', '사회문제 탐구', '정보', '현대사회와 윤리'],
    recommendedReading: '2022 개정 교육과정 총론, IB 교육과정 탐구, 미래 교육과 에듀테크'
  }
];
