import React, { useState } from 'react';
import { UniversityRequirement } from '../types';
import { UNI_RECOMMENDATIONS, DEPARTMENTS_DATA, SUBJECTS_DATA } from '../data/curriculumData';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  School, 
  Search, 
  Filter, 
  HelpCircle, 
  ArrowRight, 
  Layers, 
  AlertCircle,
  PlusCircle
} from 'lucide-react';

interface RecommendedSubjectsViewProps {
  onNavigateToSubject?: (subjectName: string) => void;
  onNavigateToMajor?: (majorName: string) => void;
  onNavigateToPlanner?: () => void;
}

export const RecommendedSubjectsView: React.FC<RecommendedSubjectsViewProps> = ({
  onNavigateToSubject,
  onNavigateToMajor,
  onNavigateToPlanner
}) => {
  const [selectedUni, setSelectedUni] = useState<string>('all');
  const [selectedCollege, setSelectedCollege] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAllAtOnce, setShowAllAtOnce] = useState<boolean>(true);
  const [displayCount, setDisplayCount] = useState<number>(20);

  const universities = ['all', '서울대학교', '경북대학교', '고려대학교', '연세대학교', '성균관대학교', '한양대학교'];
  const colleges = [
    { id: 'all', label: '전체 단과대/계열' },
    { id: '공과대학', label: '공과대학/IT' },
    { id: '의과대학', label: '의과/약학대학' },
    { id: '자연과학대학', label: '자연과학대학' },
    { id: '경영대학', label: '경영/경상대학' },
    { id: '사회과학대학', label: '사회/인문대학' },
  ];

  const filteredUniRecs = UNI_RECOMMENDATIONS.filter((req) => {
    const matchUni = selectedUni === 'all' || req.uniName === selectedUni;
    const matchCollege =
      selectedCollege === 'all' ||
      req.college.includes(selectedCollege) ||
      (selectedCollege === '공과대학' && (req.college.includes('공과') || req.college.includes('IT') || req.college.includes('정보') || req.college.includes('융합'))) ||
      (selectedCollege === '의과대학' && (req.college.includes('의과') || req.college.includes('약학'))) ||
      (selectedCollege === '경영대학' && (req.college.includes('경영') || req.college.includes('경상')));
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      req.uniName.toLowerCase().includes(q) ||
      req.deptName.toLowerCase().includes(q) ||
      req.college.toLowerCase().includes(q) ||
      req.coreSubjects.some((s) => s.toLowerCase().includes(q)) ||
      req.recSubjects.some((s) => s.toLowerCase().includes(q));

    return matchUni && matchCollege && matchQuery;
  });

  const displayedUniRecs = showAllAtOnce ? filteredUniRecs : filteredUniRecs.slice(0, displayCount);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>2028 대입 & 2022 개정 교육과정 기준</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            주요 대학 전공별 핵심·권장 이수과목 안내
          </h1>
          <p className="text-indigo-100/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            대학 입학처 및 2028 대입 개편안에서 제시하는 전공별 필수 이수과목 가이드라인입니다. 고등학교 3개년 동안 진로에 부합하는 교과목을 전략적으로 선택해 보세요.
          </p>

          {/* Search */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setDisplayCount(10);
                }}
                placeholder="대학명, 학과명, 필수 과목명 검색 (예: 서울대, 경북대, 컴퓨터, 미적분Ⅱ, 화학)..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Concept Clarification Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-rose-50/80 border border-rose-200/80 rounded-3xl p-6 space-y-2">
          <div className="flex items-center space-x-2 text-rose-800">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
            <h3 className="font-extrabold text-base">핵심 권장이수과목이란?</h3>
          </div>
          <p className="text-xs sm:text-sm text-rose-900/80 leading-relaxed">
            해당 학과/전공에서 학업을 수행하기 위해 <span className="font-bold underline decoration-rose-400">반드시 고등학교에서 이수할 것을 강력히 권장</span>하는 과목입니다. 학생부종합전형 및 정시 교과평가에서 미이수 시 평가에 직접적인 감점 요인이 될 수 있습니다.
          </p>
        </div>

        <div className="bg-indigo-50/80 border border-indigo-200/80 rounded-3xl p-6 space-y-2">
          <div className="flex items-center space-x-2 text-indigo-800">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <h3 className="font-extrabold text-base">권장 이수과목이란?</h3>
          </div>
          <p className="text-xs sm:text-sm text-indigo-900/80 leading-relaxed">
            해당 학과/전공의 기본 소양을 갖추기 위해 <span className="font-bold underline decoration-indigo-400">이수를 권장</span>하는 과목입니다. 학교 교육과정 개설 여건상 이수하지 못했더라도 다른 관련 교과 탐구 활동으로 연계할 수 있습니다.
          </p>
        </div>
      </div>

      {/* University & College Filter Tabs */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">대학별 필터</h3>
            <p className="text-xs text-slate-500">원하는 대학을 선택하여 전공별 권장과목을 비교해보세요.</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {universities.map((uni) => (
              <button
                key={uni}
                onClick={() => {
                  setSelectedUni(uni);
                  setDisplayCount(10);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedUni === uni
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {uni === 'all' ? '전체 대학' : uni}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
          {colleges.map((col) => (
            <button
              key={col.id}
              onClick={() => {
                setSelectedCollege(col.id);
                setDisplayCount(10);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedCollege === col.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {col.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations Matrix Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <School className="w-5 h-5 text-indigo-600" />
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              전공별 권장이수과목 일람표 ({filteredUniRecs.length}개 전공)
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs">
            <label className="flex items-center space-x-1.5 cursor-pointer text-slate-700 font-bold">
              <input
                type="checkbox"
                checked={showAllAtOnce}
                onChange={(e) => setShowAllAtOnce(e.target.checked)}
                className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
              />
              <span>전체 목록 한 번에 보기</span>
            </label>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
              {displayedUniRecs.length}개 표시
            </span>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {displayedUniRecs.map((req) => (
            <div
              key={req.id}
              className="p-6 hover:bg-slate-50/70 transition space-y-4 sm:space-y-0 sm:grid sm:grid-cols-12 sm:gap-6 sm:items-center"
            >
              {/* College & Dept */}
              <div className="sm:col-span-4 space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-extrabold bg-slate-100 text-slate-800 border border-slate-200">
                    {req.uniName}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {req.college}
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-base">
                  {req.deptName}
                </h4>
                {req.note && (
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    * {req.note}
                  </p>
                )}
              </div>

              {/* Core Subjects */}
              <div className="sm:col-span-4 space-y-1.5">
                <div className="text-[11px] font-bold text-rose-700 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mr-1" />
                  <span>핵심 권장이수과목</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {req.coreSubjects.length > 0 ? (
                    req.coreSubjects.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => onNavigateToSubject?.(sub)}
                        className="px-2.5 py-1 bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold rounded-xl hover:bg-rose-600 hover:text-white transition shadow-xs"
                      >
                        {sub}
                      </button>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400">해당 없음 (자율 선택)</span>
                  )}
                </div>
              </div>

              {/* Recommended Subjects */}
              <div className="sm:col-span-4 space-y-1.5">
                <div className="text-[11px] font-bold text-indigo-700 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500 mr-1" />
                  <span>권장 이수과목</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {req.recSubjects.length > 0 ? (
                    req.recSubjects.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => onNavigateToSubject?.(sub)}
                        className="px-2.5 py-1 bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition shadow-xs"
                      >
                        {sub}
                      </button>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400">해당 없음</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button for University Requirements */}
        {filteredUniRecs.length > displayCount && (
          <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setDisplayCount((prev) => prev + 10)}
              className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-extrabold text-sm shadow-xs flex items-center justify-center space-x-2 transition"
            >
              <PlusCircle className="w-4 h-4 text-indigo-600" />
              <span>전공 10개 더보기 ({displayedUniRecs.length} / {filteredUniRecs.length}개)</span>
            </button>
            <button
              onClick={() => setDisplayCount(filteredUniRecs.length)}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 font-bold text-sm transition"
            >
              전체 전공 펼치기 ({filteredUniRecs.length}개)
            </button>
          </div>
        )}
      </div>

      {/* Major Field Roadmaps Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">
            계열별 과목 이수 권장 로드맵 (수학·과학·사회)
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            2022 개정 교육과정 위계에 따른 1학년 공통 ➔ 2학년 일반/진로선택 ➔ 3학년 진로/융합선택 과목 이수 흐름도입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Engineering / Natural Sciences */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <h4 className="font-extrabold text-slate-900 text-sm">자연·공학·IT 계열</h4>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-blue-700 block">1학년:</strong> 공통수학1,2 / 통합과학1,2, 과학탐구실험
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-blue-700 block">2학년:</strong> 대수, 미적분Ⅰ, 확률과 통계 / 물리학, 화학, 생명과학
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-blue-700 block">3학년:</strong> 미적분Ⅱ, 기하, 인공지능수학 / 고급물리학, 고급화학, 융합과학탐구
              </div>
            </div>
          </div>

          {/* Medical / Bio */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-600" />
              <h4 className="font-extrabold text-slate-900 text-sm">의학·약학·바이오 계열</h4>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-rose-700 block">1학년:</strong> 공통수학1,2 / 통합과학1,2, 과학탐구실험
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-rose-700 block">2학년:</strong> 대수, 미적분Ⅰ, 확률과 통계 / 화학, 생명과학
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-rose-700 block">3학년:</strong> 미적분Ⅱ, 기하 / 고급생명과학, 고급화학, 의학일반, 생명과학탐구
              </div>
            </div>
          </div>

          {/* Humanities / Social Sciences */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-3">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-amber-600" />
              <h4 className="font-extrabold text-slate-900 text-sm">인문·사회·경영·경제 계열</h4>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-amber-700 block">1학년:</strong> 공통수학1,2 / 공통국어, 공통영어, 통합사회1,2
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-amber-700 block">2학년:</strong> 대수, 확률과 통계 / 세계지리, 사회·문화, 정치와 법, 경제
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <strong className="text-amber-700 block">3학년:</strong> 경제수학, 미적분Ⅰ / 현대사회와 철학, 국제관계와 국제기구, 사회과제연구
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
