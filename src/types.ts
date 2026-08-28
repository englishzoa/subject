export type SubjectType = '공통과목' | '일반선택' | '진로선택' | '융합선택' | '교양' | '체육·예술';

export type SubjectGroup = '국어' | '수학' | '영어' | '한국사' | '사회' | '과학' | '기술·가정/정보' | '제2외국어/한문' | '체육/예술' | '교양';

export interface Subject {
  id: string;
  name: string;
  group: SubjectGroup;
  type: SubjectType;
  credits: number; // 표준 이수 학점 (보통 4학점 or 3~5학점)
  desc: string;
  coreConcepts: string[];
  prerequisites?: string[]; // 선이수 과목 (위계성)
  followUpSubjects?: string[]; // 후속 권장 과목
  relatedFields: string[]; // 관련 계열 (공학, 자연, 의약, 인문, 사회, 교육 등)
  evaluationType: '석차등급+성취도' | '성취도(A~E)만' | '성취도(3단계 P/F 등)';
  studyTips: string;
}

export interface Department {
  id: string;
  name: string;
  category: '공학계열' | '자연계열' | '의약계열' | '인문사회계열' | '사회과학계열' | '경영·경제계열' | '교육계열' | '예체능계열';
  summary: string;
  desc: string;
  mainCurriculum: string[];
  coreRecommendedSubjects: string[]; // 핵심 권장과목 (미이수 시 불이익 가능)
  recommendedSubjects: string[]; // 권장과목
  relatedJobs: string[]; // 관련 직업 ID 또는 명칭
  relatedSubjectIds: string[]; // 교과목 ID 목록
  topUniversities?: string[];
  careerProspects: string;
}

export interface Job {
  id: string;
  name: string;
  category: string;
  desc: string;
  futureProspects: '매우 밝음' | '밝음' | '보통';
  coreCompetencies: string[];
  relatedDepartments: string[]; // 관련 학과 ID 또는 명칭
  relatedSubjects: string[]; // 추천 고교 과목
  educationLevel: string;
}

export interface UniversityRequirement {
  id: string;
  uniName: string;
  college: string;
  deptName: string;
  coreSubjects: string[]; // 핵심 권장과목
  recSubjects: string[]; // 권장이수과목
  guideUrl?: string;
  note?: string;
}

export interface SemesterPlan {
  grade: 1 | 2 | 3;
  semester: 1 | 2;
  subjectIds: string[];
}

export interface AcademicPlan {
  id?: string;
  studentName: string;
  grade: number;
  targetCareer: string;
  targetMajor: string;
  targetJob: string;
  semesters: {
    g1s1: string[];
    g1s2: string[];
    g2s1: string[];
    g2s2: string[];
    g3s1: string[];
    g3s2: string[];
  };
  selfReflection: string;
  updatedAt: string;
}

export interface CareerDiagnosisQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    field: 'engineering' | 'science' | 'medicine' | 'humanities' | 'social' | 'education' | 'arts';
    score: number;
  }[];
}

export interface DiagnosisResult {
  topField: string;
  fieldTitle: string;
  fieldDesc: string;
  recommendedMajors: string[];
  recommendedJobs: string[];
  recommendedSubjects: string[];
  scoreBreakdown: Record<string, number>;
}
