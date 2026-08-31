import React, { useState, useMemo } from 'react';
import { 
  Search, MapPin, GraduationCap, Building2, CheckCircle2, XCircle, 
  Info, BookOpen, Target, FileText, Lightbulb, ExternalLink, Calculator, Globe,
  Landmark, AlertTriangle, Users, Menu, X, ChevronRight, Bookmark, Compass, Briefcase, School,
  Sparkles, Layers, Award, BarChart3, Clock, Calendar, HelpCircle, Check, ArrowRight, ShieldCheck, Flame
} from 'lucide-react';

export type Region = '서울권' | '경기/인천권' | '국립대/제2캠' | '기타';
export type AdmissionType = '학생부교과' | '학생부종합' | '논술' | '정시';

export interface UniversityAdmission {
  id: string;
  university: string;
  region: Region;
  type: AdmissionType;
  name: string;
  recruitmentCount: number | string;
  hasKsatMinimum: boolean;
  ksatDetails: string;
  evaluationMethod: string;
  interviewInfo?: string;
  note?: string;
}

export const UNIVERSITY_ADMISSIONS: UniversityAdmission[] = [
  {
    id: 'snu_1',
    university: '서울대',
    region: '서울권',
    type: '학생부종합',
    name: '지역균형',
    recruitmentCount: 728,
    hasKsatMinimum: true,
    ksatDetails: '국수영탐(2) 3개 합 7',
    evaluationMethod: '1단계: 서류 100% (3배수)\n2단계: 1단계 70% + 면접 30%',
    interviewInfo: '제출서류 기반 면접 및 의학계열 MMI',
    note: '고교별 추천인원 3명'
  },
  {
    id: 'snu_2',
    university: '서울대',
    region: '서울권',
    type: '학생부종합',
    name: '일반전형',
    recruitmentCount: 1585,
    hasKsatMinimum: false,
    ksatDetails: '수능 최저학력기준 미적용 (단, 디자인/체육 등 일부 적용)',
    evaluationMethod: '1단계: 서류 100% (2배수)\n2단계: 1단계 50% + 면접 50%',
    interviewInfo: '제시문 활용 면접 (전공적성 및 학업능력 평가)',
  },
  {
    id: 'yonsei_1',
    university: '연세대',
    region: '서울권',
    type: '학생부교과',
    name: '추천형',
    recruitmentCount: 564,
    hasKsatMinimum: true,
    ksatDetails: '인문: 국수사과 2합 4\n자연: 국수사과 2합 5 (수학 필수)',
    evaluationMethod: '1단계: 교과 100% (5배수)\n2단계: 1단계 80% + 서류평가 20%',
    note: '고교별 추천인원 10명'
  },
  {
    id: 'korea_1',
    university: '고려대',
    region: '서울권',
    type: '학생부교과',
    name: '학교추천',
    recruitmentCount: 672,
    hasKsatMinimum: true,
    ksatDetails: '국수영탐(1) 4개 합 8 (인문/자연 통합)',
    evaluationMethod: '교과 80% + 서류 20% (일괄합산)',
    note: '재학생만 지원 가능'
  },
  {
    id: 'skku_1',
    university: '성균관대',
    region: '서울권',
    type: '학생부교과',
    name: '추천인재',
    recruitmentCount: 415,
    hasKsatMinimum: true,
    ksatDetails: '국수영사과 3개 합 7 또는 6 (모집단위별 상이)',
    evaluationMethod: '교과 100% (정량 100%)',
    note: '추천인원 제한 없음'
  },
  {
    id: 'konkuk_1',
    university: '건국대',
    region: '서울권',
    type: '학생부교과',
    name: 'KU지역균형',
    recruitmentCount: 348,
    hasKsatMinimum: true,
    ksatDetails: '인문/자연: 국수영탐(1) 한국사 3개 합 8',
    evaluationMethod: '교과 70% + 교과정성평가 30% (일괄합산)',
    note: '추천인원 제한 없음. 2028 수능최저 신설'
  },
  {
    id: 'knu_1',
    university: '경북대',
    region: '국립대/제2캠',
    type: '학생부교과',
    name: '교과우수자',
    recruitmentCount: 1395,
    hasKsatMinimum: true,
    ksatDetails: '국수영탐(1) 2개 합 5~6 (모집단위별 상이)',
    evaluationMethod: '교과 80% + 교과이수충실도 20%',
    note: '등급제 개편에 따른 환산 방식 변경'
  },
  {
    id: 'hanyang_1',
    university: '한양대',
    region: '서울권',
    type: '학생부교과',
    name: '지역균형발전',
    recruitmentCount: 338,
    hasKsatMinimum: true,
    ksatDetails: '국수영탐(1) 3개 합 7 이내',
    evaluationMethod: '교과 90% + 교과정성 10%',
    note: '고교별 3학년 재적 11% 이내 추천'
  },
  {
    id: 'cau_1',
    university: '중앙대',
    region: '서울권',
    type: '학생부교과',
    name: '지역균형',
    recruitmentCount: 502,
    hasKsatMinimum: true,
    ksatDetails: '국수영탐(1) 3개 등급 합 7 이내 (안성 2개 합 6)',
    evaluationMethod: '교과 70% + 서류 30%',
    note: '고교별 최대 20명 추천 가능'
  },
  {
    id: 'pnu_1',
    university: '부산대',
    region: '국립대/제2캠',
    type: '학생부교과',
    name: '학생부교과',
    recruitmentCount: 1120,
    hasKsatMinimum: true,
    ksatDetails: '국수영탐(1) 2개 등급 합 5~6 이내',
    evaluationMethod: '교과 100%',
    note: '지역 거점 국립대'
  }
];

export interface KsatTimetableItem {
  period: string;
  subject: string;
  timeRange: string;
  duration: number; // minutes
  questionCount: string;
  totalScore: number;
  questionType: string;
  scope: string;
  evalMethod: '상대평가 (9등급)' | '절대평가 (9등급)';
  isBreak?: boolean;
}

export const KSAT_2028_SCHEDULE: KsatTimetableItem[] = [
  {
    period: '입실 완료',
    subject: '수험생 입실 완료',
    timeRange: '08:10까지',
    duration: 0,
    questionCount: '-',
    totalScore: 0,
    questionType: '본인 확인 및 유의사항 안내',
    scope: '수험표 및 신분증 지참',
    evalMethod: '절대평가 (9등급)',
    isBreak: true
  },
  {
    period: '1교시',
    subject: '국어 (통합공통)',
    timeRange: '08:40 ~ 10:00',
    duration: 80,
    questionCount: '45문항',
    totalScore: 100,
    questionType: '5지선다형',
    scope: '공통 [화법과 언어, 독서와 작문, 문학] (선택과목 폐지)',
    evalMethod: '상대평가 (9등급)'
  },
  {
    period: '휴식',
    subject: '휴식 시간',
    timeRange: '10:00 ~ 10:20',
    duration: 20,
    questionCount: '-',
    totalScore: 0,
    questionType: '휴식 및 2교시 준비',
    scope: '-',
    evalMethod: '절대평가 (9등급)',
    isBreak: true
  },
  {
    period: '2교시',
    subject: '수학 (통합공통)',
    timeRange: '10:30 ~ 12:10',
    duration: 100,
    questionCount: '30문항',
    totalScore: 100,
    questionType: '5지선다형 + 단답형(30%, 9문항)',
    scope: '공통 [대수, 미적분Ⅰ, 확률과 통계] (심화수학 미포함)',
    evalMethod: '상대평가 (9등급)'
  },
  {
    period: '점심시간',
    subject: '점심 및 휴식',
    timeRange: '12:10 ~ 13:00',
    duration: 50,
    questionCount: '-',
    totalScore: 0,
    questionType: '점심 식사 (13:00까지 3교시 입실)',
    scope: '-',
    evalMethod: '절대평가 (9등급)',
    isBreak: true
  },
  {
    period: '3교시',
    subject: '영어 (절대평가)',
    timeRange: '13:10 ~ 14:20',
    duration: 70,
    questionCount: '45문항',
    totalScore: 100,
    questionType: '5지선다형 (듣기 17문항 포함, 약 25분)',
    scope: '공통 [영어Ⅰ, 영어Ⅱ]',
    evalMethod: '절대평가 (9등급)'
  },
  {
    period: '휴식',
    subject: '휴식 시간',
    timeRange: '14:20 ~ 14:40',
    duration: 20,
    questionCount: '-',
    totalScore: 0,
    questionType: '휴식 및 4교시 준비',
    scope: '-',
    evalMethod: '절대평가 (9등급)',
    isBreak: true
  },
  {
    period: '4교시 (필수)',
    subject: '한국사 (절대평가)',
    timeRange: '14:50 ~ 15:20',
    duration: 30,
    questionCount: '20문항',
    totalScore: 50,
    questionType: '5지선다형 (필수 응시 영역)',
    scope: '공통 [한국사 1, 한국사 2]',
    evalMethod: '절대평가 (9등급)'
  },
  {
    period: '4교시 (탐구1)',
    subject: '통합사회 (공통응시)',
    timeRange: '15:35 ~ 16:05',
    duration: 30,
    questionCount: '20문항',
    totalScore: 50,
    questionType: '5지선다형',
    scope: '공통 [통합사회 1, 통합사회 2] (모든 수험생 필수)',
    evalMethod: '상대평가 (9등급)'
  },
  {
    period: '4교시 (탐구2)',
    subject: '통합과학 (공통응시)',
    timeRange: '16:07 ~ 16:37',
    duration: 30,
    questionCount: '20문항',
    totalScore: 50,
    questionType: '5지선다형',
    scope: '공통 [통합과학 1, 통합과학 2, 과학탐구실험] (모든 수험생 필수)',
    evalMethod: '상대평가 (9등급)'
  },
  {
    period: '휴식',
    subject: '휴식 시간',
    timeRange: '16:37 ~ 17:05',
    duration: 28,
    questionCount: '-',
    totalScore: 0,
    questionType: '미응시자 귀가 / 응시자 대기',
    scope: '-',
    evalMethod: '절대평가 (9등급)',
    isBreak: true
  },
  {
    period: '5교시',
    subject: '제2외국어 / 한문 (선택)',
    timeRange: '17:05 ~ 17:45',
    duration: 40,
    questionCount: '30문항',
    totalScore: 50,
    questionType: '5지선다형 (9개 과목 중 택1)',
    scope: '독일어, 프랑스어, 스페인어, 중국어, 일본어, 러시아어, 아랍어, 베트남어, 한문',
    evalMethod: '절대평가 (9등급)'
  }
];

export const Ksat2028GuideView: React.FC = () => {
  const [selectedSubjectTab, setSelectedSubjectTab] = useState<string>('all');

  const subjectCards = [
    {
      id: 'korean',
      name: '국어 영역',
      badge: '선택과목 폐지·공통출제',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      time: '80분 (08:40 ~ 10:00)',
      questions: '45문항 / 100점 만점',
      type: '5지선다형 (상대평가 9등급)',
      scope: '화법과 언어, 독서와 작문, 문학',
      points: [
        '기존 [화법과 작문], [언어와 매체] 선택과목 구분이 완전히 폐지되었습니다.',
        '모든 수험생이 동일한 문항으로 시험을 치르므로 선택과목 유불리가 발생하지 않습니다.',
        '독서 지문 및 문학 감상 역량과 함께 화법/언어의 통합적 사고력이 요구됩니다.'
      ]
    },
    {
      id: 'math',
      name: '수학 영역',
      badge: '문·이과 공통출제 (대수·미적Ⅰ·확통)',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      time: '100분 (10:30 ~ 12:10)',
      questions: '30문항 (단답형 30%) / 100점 만점',
      type: '5지선다형 + 단답형 9문항 (상대평가 9등급)',
      scope: '대수, 미적분Ⅰ, 확률과 통계',
      points: [
        '기존 [확률과 통계], [미적분], [기하] 선택 구조 폐지 → 공통 출제 체제로 전환.',
        '심화수학(미적분Ⅱ·기하)은 국가교육위원회 의결로 수능 출제 범위에서 제외되었습니다.',
        '자연계/공학계열 진학을 희망하는 학생은 수능 부담은 줄었으나 학생부에서 미적분Ⅱ, 기하 이수가 권장됩니다.'
      ]
    },
    {
      id: 'english',
      name: '영어 영역',
      badge: '절대평가 유지',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      time: '70분 (13:10 ~ 14:20)',
      questions: '45문항 (듣기 17문항) / 100점 만점',
      type: '5지선다형 (절대평가 9등급, 10점 간격)',
      scope: '영어Ⅰ, 영어Ⅱ (듣기평가 약 25분 포함)',
      points: [
        '현행 9등급 절대평가 체제가 그대로 유지됩니다.',
        '90점 이상 1등급, 80점 이상 2등급, 70점 이상 3등급 등 10점 단위로 등급이 분할됩니다.',
        '대학별 수능최저 충족의 핵심 전략 과목으로 활용됩니다.'
      ]
    },
    {
      id: 'history',
      name: '한국사 영역',
      badge: '필수 응시 · 절대평가',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      time: '30분 (14:50 ~ 15:20)',
      questions: '20문항 / 50점 만점',
      type: '5지선다형 (절대평가 9등급, 5점 간격)',
      scope: '한국사 1, 한국사 2',
      points: [
        '모든 수험생이 반드시 응시해야 하는 필수 영역입니다. (미응시 시 전체 수능 성적 무효 처리)',
        '40점 이상 1등급, 35점 이상 2등급으로 5점 단위 절대평가 등급이 산출됩니다.'
      ]
    },
    {
      id: 'inquiry',
      name: '탐구 영역 (사회·과학)',
      badge: '통합사회 & 통합과학 전원 공통응시',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      time: '총 62분 (통합사회 30분 + 통합과학 30분, 교체 2분)',
      questions: '통합사회 20문항 + 통합과학 20문항 / 각 50점 만점',
      type: '5지선다형 (과목별 각각 상대평가 9등급)',
      scope: '통합사회 1·2, 통합과학 1·2 (과학탐구실험 포함)',
      points: [
        '기존 사탐 9과목 + 과탐 8과목 중 2과목 택1 방식이 완전히 폐지되었습니다.',
        '모든 인문계/자연계 수험생이 [통합사회]와 [통합과학]을 모두 동일하게 응시합니다.',
        '고등학교 1학년 공통과목 중심이므로 고1 시기 기초 개념 완성이 수능 점수의 기반이 됩니다.',
        '개별 과목별로 9등급 상대평가(표준점수, 백분위)가 각각 독립 산출됩니다.'
      ]
    },
    {
      id: 'second_lang',
      name: '제2외국어 / 한문',
      badge: '선택 응시 · 절대평가',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      time: '40분 (17:05 ~ 17:45)',
      questions: '30문항 / 50점 만점',
      type: '5지선다형 (절대평가 9등급, 5점 간격)',
      scope: '독일어, 프랑스어, 스페인어, 중국어, 일본어, 러시아어, 아랍어, 베트남어, 한문 (9개 과목 택1)',
      points: [
        '절대평가(45점 이상 1등급) 체제 유지로 특정 언어 쏠림(아랍어 등 로또 현상)이 방지됩니다.'
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 px-3 py-1 rounded-full text-xs font-bold">
            <Calendar className="w-3.5 h-3.5" />
            <span>2022 개정 교육과정 적용 첫 수능</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            2028학년도 대학수학능력시험(수능) 시행 안내
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
            2028학년도 수능은 선택과목 간 유불리를 원천 차단하고 융합적 사고력을 평가하기 위해 
            <strong className="text-amber-300 font-bold ml-1">국어·수학·탐구(사회·과학) 전 영역 통합형 공통 시험</strong>
            으로 전면 개편됩니다.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
              <span className="text-[11px] text-indigo-200 block font-medium">시행 시기</span>
              <span className="text-base font-extrabold text-white">2027년 11월 (예정)</span>
              <span className="text-[10px] text-slate-300 block mt-0.5">매년 11월 3번째 목요일</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
              <span className="text-[11px] text-indigo-200 block font-medium">적용 대상</span>
              <span className="text-base font-extrabold text-white">2025년 고1 입학생~</span>
              <span className="text-[10px] text-slate-300 block mt-0.5">2028 대입 응시 전원</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
              <span className="text-[11px] text-indigo-200 block font-medium">탐구 영역</span>
              <span className="text-base font-extrabold text-amber-300">통사·통과 공통</span>
              <span className="text-[10px] text-slate-300 block mt-0.5">문·이과 전원 동일 응시</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
              <span className="text-[11px] text-indigo-200 block font-medium">평가 체제</span>
              <span className="text-base font-extrabold text-white">수능 9등급 유지</span>
              <span className="text-[10px] text-slate-300 block mt-0.5">내신(5등급)과 별개</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timetable Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">2028 수능 시험 당일 시간표 & 교시별 세부 현황</h2>
              <p className="text-xs text-slate-500">한국교육과정평가원 수능 시행 기본 계획 기준</p>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold">
            <AlertTriangle className="w-3.5 h-3.5 mr-1" /> 08:10까지 시험실 입실 완료
          </span>
        </div>

        {/* Timetable Desktop Table & Mobile Cards */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700 font-extrabold border-y border-slate-200">
                <th className="py-3 px-3.5 rounded-l-xl">교시</th>
                <th className="py-3 px-3.5">시험 영역 및 과목</th>
                <th className="py-3 px-3.5">시험 시간 (분)</th>
                <th className="py-3 px-3.5">문항 수 / 배점</th>
                <th className="py-3 px-3.5">출제 범위 및 특징</th>
                <th className="py-3 px-3.5 rounded-r-xl">평가 방식</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {KSAT_2028_SCHEDULE.map((item, idx) => (
                <tr 
                  key={idx} 
                  className={item.isBreak ? 'bg-slate-50/60 text-slate-500 font-medium' : 'hover:bg-indigo-50/30 transition-colors'}
                >
                  <td className="py-3.5 px-3.5 font-bold">
                    <span className={`px-2 py-1 rounded-md text-[11px] ${
                      item.isBreak 
                        ? 'bg-slate-200/60 text-slate-600' 
                        : 'bg-indigo-100 text-indigo-800 font-extrabold'
                    }`}>
                      {item.period}
                    </span>
                  </td>
                  <td className="py-3.5 px-3.5 font-extrabold text-slate-900">
                    {item.subject}
                  </td>
                  <td className="py-3.5 px-3.5">
                    <span className="font-bold text-slate-800 block">{item.timeRange}</span>
                    {item.duration > 0 && <span className="text-[11px] text-slate-500 font-medium">({item.duration}분)</span>}
                  </td>
                  <td className="py-3.5 px-3.5">
                    {item.questionCount !== '-' ? (
                      <div>
                        <span className="font-bold text-slate-800">{item.questionCount}</span>
                        <span className="text-slate-500 text-[11px] ml-1">({item.totalScore}점)</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">{item.questionType}</span>
                      </div>
                    ) : (
                      <span className="text-slate-400">-</span>
                    )}
                  </td>
                  <td className="py-3.5 px-3.5 text-slate-700 max-w-xs leading-relaxed">
                    {item.scope}
                  </td>
                  <td className="py-3.5 px-3.5">
                    {!item.isBreak && (
                      <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold ${
                        item.evalMethod.includes('상대') 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {item.evalMethod}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Subject Detailed Breakdown */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-black text-slate-900 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
              <span>2028 수능 영역별 문항 구성 및 출제 범위 상세 분석</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">각 영역별 핵심 변경 사항과 수험 대비 가이드</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {subjectCards.map((subj) => (
            <div key={subj.id} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border mb-2 ${subj.badgeColor}`}>
                    {subj.badge}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">{subj.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">시험 시간</span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">{subj.time}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block">문항 수 및 배점</span>
                  <span className="font-bold text-slate-800">{subj.questions}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block">평가 방식</span>
                  <span className="font-bold text-slate-800">{subj.type}</span>
                </div>
                <div className="col-span-2 pt-1 border-t border-slate-200/60">
                  <span className="text-slate-400 text-[10px] block">출제 범위 (2022 개정)</span>
                  <span className="font-extrabold text-indigo-950">{subj.scope}</span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-xs font-bold text-slate-800 flex items-center">
                  <Lightbulb className="w-3.5 h-3.5 mr-1 text-amber-500" /> 핵심 특징 및 학습 전략
                </span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {subj.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-3.5 h-3.5 text-indigo-600 mr-1.5 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Comparison: 2028 수능 vs 현행 수능 */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-slate-900 flex items-center">
            <Flame className="w-5 h-5 mr-2 text-rose-500" />
            <span>2028 수능 핵심 변경 포인트 4가지 요약</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">현행 수능 체제와의 결정적 차이점 비교</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-indigo-50/70 to-blue-50/70 rounded-2xl border border-indigo-100 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-black">1</div>
              <h4 className="text-sm font-extrabold text-indigo-950">선택과목 유불리 완전 해소</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              기존 국어(화작/언매), 수학(확통/미적/기하)에서 선택과목별 표준점수 최고점 격차(최대 5~11점)로 인한 불공정 논란이 완전히 사라집니다.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-rose-50/70 to-orange-50/70 rounded-2xl border border-rose-100 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-black">2</div>
              <h4 className="text-sm font-extrabold text-rose-950">문·이과 융합형 탐구 (통사·통과 동시 응시)</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              자연계열 학생도 통합사회를, 인문계열 학생도 통합과학을 반드시 응시해야 합니다. 편식 없는 고1 공통 기본 소양이 수능 고득점의 열쇠입니다.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-emerald-50/70 to-teal-50/70 rounded-2xl border border-emerald-100 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black">3</div>
              <h4 className="text-sm font-extrabold text-emerald-950">수능 상대평가 9등급제 유지</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              고교 내신은 5등급제(1등급 10%)로 완화되지만, 수능은 정시 변별력을 확보하기 위해 9등급제(1등급 4%, 2등급 7%...) 상대평가 체제가 그대로 유지됩니다.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-amber-50/70 to-yellow-50/70 rounded-2xl border border-amber-100 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-black">4</div>
              <h4 className="text-sm font-extrabold text-amber-950">심화수학 미출제 & 학생부 연계 심화</h4>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              수능에서 미적분Ⅱ, 기하가 제외되면서 최상위권 의치한약수 및 명문 이공계열은 정시/수시 모두 학생부 진로선택과목(미적분Ⅱ, 기하, 고급수학) 이수 여부를 중점 반영합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UniversityExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | '전체'>('전체');
  const [selectedType, setSelectedType] = useState<AdmissionType | '전체'>('전체');
  const [ksatFilter, setKsatFilter] = useState<'전체' | '적용' | '미적용'>('전체');

  const regions: Array<Region | '전체'> = ['전체', '서울권', '경기/인천권', '국립대/제2캠'];
  const types: Array<AdmissionType | '전체'> = ['전체', '학생부교과', '학생부종합', '논술', '정시'];

  const filteredAdmissions = useMemo(() => {
    return UNIVERSITY_ADMISSIONS.filter((adm) => {
      const matchRegion = selectedRegion === '전체' || adm.region === selectedRegion;
      const matchType = selectedType === '전체' || adm.type === selectedType;
      
      let matchKsat = true;
      if (ksatFilter === '적용') matchKsat = adm.hasKsatMinimum;
      if (ksatFilter === '미적용') matchKsat = !adm.hasKsatMinimum;

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        adm.university.toLowerCase().includes(q) ||
        adm.name.toLowerCase().includes(q) ||
        adm.ksatDetails.toLowerCase().includes(q) ||
        (adm.note && adm.note.toLowerCase().includes(q));

      return matchRegion && matchType && matchKsat && matchQuery;
    });
  }, [searchQuery, selectedRegion, selectedType, ksatFilter]);

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-br from-indigo-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-indigo-500/30 text-indigo-100 border border-indigo-400/50 px-3 py-1 rounded-full text-xs font-bold">
            <Building2 className="w-3.5 h-3.5" />
            <span>2028 대입전형시행계획 요약 분석 (쎈진학 프리뷰 기반)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">전국 주요 대학 전형 & 수능최저 검색</h1>
          <p className="text-indigo-100/90 text-sm max-w-2xl leading-relaxed">
            서울특별시교육청 쎈(SEN)진학 프리뷰 데이터를 바탕으로 구성된 2028학년도 대입 주요 대학의 핵심 전형 방법과 수능최저학력기준 변화를 확인하세요.
          </p>
          <div className="pt-2">
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="대학명, 전형명 키워드 검색 (예: 서울대, 추천형, 면접, 건국대)..."
                className="w-full bg-white/10 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3.5 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2 font-extrabold text-slate-800 min-w-[120px]">
            <MapPin className="w-4 h-4 text-indigo-600" /><span>지역 필터</span>
          </div>
          <div className="flex flex-wrap gap-2 flex-1">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedRegion === region ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >{region}</button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2 font-extrabold text-slate-800 min-w-[120px]">
            <GraduationCap className="w-4 h-4 text-indigo-600" /><span>전형 유형</span>
          </div>
          <div className="flex flex-wrap gap-2 flex-1">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${selectedType === type ? 'bg-indigo-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >{type}</button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center space-x-2 font-extrabold text-slate-800 min-w-[120px]">
            <Target className="w-4 h-4 text-rose-600" /><span>수능최저 기준</span>
          </div>
          <div className="flex flex-wrap gap-2 flex-1">
            {(['전체', '적용', '미적용'] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setKsatFilter(opt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${ksatFilter === opt ? 'bg-rose-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >{opt === '전체' ? '전체 보기' : opt === '적용' ? '수능최저 적용' : '수능최저 미적용'}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold text-slate-500">
          검색 결과 <strong className="text-indigo-600 font-extrabold">{filteredAdmissions.length}</strong>개 전형
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredAdmissions.map((adm) => (
          <div key={adm.id} className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-1.5">
                  <span className="text-xs font-bold text-slate-500">{adm.region}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">{adm.type}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 flex items-center">
                  <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-lg text-sm mr-2 border border-slate-200">{adm.university}</span>
                  <span>{adm.name}</span>
                </h3>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] text-slate-400 block mb-0.5">모집인원</span>
                <span className="text-sm font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">{adm.recruitmentCount}명</span>
              </div>
            </div>
            
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <div className={`p-3.5 rounded-2xl flex items-start space-x-2.5 ${adm.hasKsatMinimum ? 'bg-rose-50/70 border border-rose-100' : 'bg-slate-50 border border-slate-200'}`}>
                {adm.hasKsatMinimum ? <CheckCircle2 className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" /> : <XCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />}
                <div>
                  <span className={`text-xs font-extrabold block mb-1 ${adm.hasKsatMinimum ? 'text-rose-900' : 'text-slate-600'}`}>
                    {adm.hasKsatMinimum ? '수능최저학력기준 적용' : '수능최저학력기준 미적용'}
                  </span>
                  <p className="text-xs leading-relaxed text-slate-700 whitespace-pre-wrap">{adm.ksatDetails}</p>
                </div>
              </div>
              
              <div className="bg-indigo-50/50 p-3.5 rounded-2xl border border-indigo-100/50 space-y-2">
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-extrabold text-indigo-900 block mb-0.5">전형 방법</span>
                    <p className="text-xs text-indigo-800/80 leading-relaxed whitespace-pre-wrap">{adm.evaluationMethod}</p>
                  </div>
                </div>
              </div>

              {adm.interviewInfo && (
                <div className="bg-amber-50/50 p-3 rounded-2xl border border-amber-200/50 text-xs text-amber-900 flex items-start space-x-2">
                  <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold block mb-0.5">면접 정보</span>
                    <span>{adm.interviewInfo}</span>
                  </div>
                </div>
              )}

              {adm.note && (
                <div className="text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-600 mr-1">참고사항:</span>
                  {adm.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Admission2028View: React.FC<{ initialSubTab?: 'ksat_guide' | 'explorer' | 'overview' }> = ({ initialSubTab = 'ksat_guide' }) => {
  const [subTab, setSubTab] = useState<'ksat_guide' | 'explorer' | 'overview'>(initialSubTab);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Sub Navigation Bar */}
      <div className="flex items-center space-x-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm max-w-2xl overflow-x-auto">
        <button
          onClick={() => setSubTab('ksat_guide')}
          className={`flex-1 min-w-[140px] flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
            subTab === 'ksat_guide' 
              ? 'bg-indigo-600 text-white shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Clock className="w-4 h-4 shrink-0" />
          <span>2028수능 시행 안내</span>
        </button>

        <button
          onClick={() => setSubTab('explorer')}
          className={`flex-1 min-w-[140px] flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
            subTab === 'explorer' 
              ? 'bg-indigo-600 text-white shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Building2 className="w-4 h-4 shrink-0" />
          <span>대학·전형·수능최저 검색</span>
        </button>

        <button
          onClick={() => setSubTab('overview')}
          className={`flex-1 min-w-[140px] flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
            subTab === 'overview' 
              ? 'bg-indigo-600 text-white shadow-sm' 
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Landmark className="w-4 h-4 shrink-0" />
          <span>2028 개편안 핵심 안내</span>
        </button>
      </div>

      {subTab === 'ksat_guide' && <Ksat2028GuideView />}
      {subTab === 'explorer' && <UniversityExplorer />}
      {subTab === 'overview' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-900 via-rose-800 to-red-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl">
            <div className="inline-flex items-center space-x-2 bg-rose-500/30 text-rose-100 border border-rose-400/50 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <Landmark className="w-3.5 h-3.5" />
              <span>미리 보는 2028 대입 개편안</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">통합형 수능과 5등급제 내신 개편안</h1>
            <p className="text-rose-100 text-sm mt-2 max-w-2xl leading-relaxed">
              현재 중3(2025년 고1 신입생)부터 적용되는 2028학년도 대입 제도 개편안의 핵심 요약과 변화 사항입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <Target className="w-6 h-6 text-indigo-600"/>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">1. 통합형 수능</h3>
              <p className="text-sm text-slate-600 leading-relaxed">국어, 수학, 탐구 영역 선택과목 폐지 및 공통 출제로 문·이과 구분 없는 유불리 해소</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center">
                <FileText className="w-6 h-6 text-rose-600"/>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">2. 고교 내신 5등급제</h3>
              <p className="text-sm text-slate-600 leading-relaxed">기존 9등급제에서 5등급제(1등급 10%)로 완화 및 절대평가(A~E)와 상대평가 병기</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600"/>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">3. 정성평가 강화</h3>
              <p className="text-sm text-slate-600 leading-relaxed">내신 변별력 보완을 위해 과목 이수 충실도(진로/융합선택)와 세특 정성평가 비중 증대</p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-black text-slate-900">2028 대입 변화 핵심 포인트 비교</h3>
              <p className="text-xs text-slate-500 mt-1">기존 2015 개정 교육과정 체제와 2022 개정 고교학점제(2028 대입) 비교</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-500 block">수능 시험 체제</span>
                <p className="text-sm font-extrabold text-slate-800">통합사회·통합과학 전원 응시</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  사회와 과학을 모두 응시하며 특정 선택과목에 따른 표준점수 유불리가 완전히 사라집니다.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-slate-500 block">대학별 전형 평가</span>
                <p className="text-sm font-extrabold text-slate-800">교과 정성평가 및 수능최저 신설 확대</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  학생부교과 전형에서도 교과 이수 충실도 서류평가가 추가되고, 수능최저학력기준이 강화되는 추세입니다.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a 
                href="https://www.moe.go.kr/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
              >
                교육부 공식 발표 자료 <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="https://www.adiga.kr/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl text-xs font-bold transition-colors"
              >
                대입정보포털 어디가 바로가기 <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
