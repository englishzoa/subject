import React, { useState, useMemo } from 'react';
import { Subject, SubjectGroup, SubjectType } from '../types';
import { SUBJECTS_DATA } from '../data/curriculumData';
import { Search, Filter, BookOpen, Layers, ArrowRight, CheckCircle, Info, Sparkles, X, Compass, ExternalLink } from 'lucide-react';

interface SubjectExplorerProps {
  initialSearchQuery?: string;
  onSelectSubjectForPlan?: (subjectId: string) => void;
  onNavigateToMajor?: (majorName: string) => void;
}

export const SubjectExplorer: React.FC<SubjectExplorerProps> = ({
  initialSearchQuery = '',
  onSelectSubjectForPlan,
  onNavigateToMajor
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeSubject, setActiveSubject] = useState<Subject | null>(null);

  const groups: Array<{ id: string; label: string }> = [
    { id: 'all', label: '교과군 전체' },
    { id: '국어', label: '국어' },
    { id: '수학', label: '수학' },
    { id: '영어', label: '영어' },
    { id: '사회', label: '사회' },
    { id: '과학', label: '과학' },
    { id: '기술·가정/정보', label: '기술·정보' },
    { id: '한국사', label: '한국사' },
  ];

  const types: Array<{ id: string; label: string }> = [
    { id: 'all', label: '전체 선택구분' },
    { id: '공통과목', label: '공통과목' },
    { id: '일반선택', label: '일반선택' },
    { id: '진로선택', label: '진로선택' },
    { id: '융합선택', label: '융합선택' },
  ];

  const filteredSubjects = useMemo(() => {
    return SUBJECTS_DATA.filter((sub) => {
      const matchGroup = selectedGroup === 'all' || sub.group === selectedGroup;
      const matchType = selectedType === 'all' || sub.type === selectedType;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        sub.name.toLowerCase().includes(q) ||
        sub.desc.toLowerCase().includes(q) ||
        sub.coreConcepts.some((c) => c.toLowerCase().includes(q)) ||
        sub.relatedFields.some((f) => f.toLowerCase().includes(q));

      return matchGroup && matchType && matchQuery;
    });
  }, [searchQuery, selectedGroup, selectedType]);

  const getTypeBadge = (type: SubjectType) => {
    switch (type) {
      case '공통과목':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case '일반선택':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case '진로선택':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case '융합선택':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getSubjectById = (id: string) => SUBJECTS_DATA.find((s) => s.id === id);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Filter Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                2022 개정 교육과정
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                보통교과 과목 탐색 & 위계도
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              공통·일반·진로·융합 선택과목의 성격과 선이수 위계성, 대학 학과 연계 정보를 확인하세요.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="과목명, 핵심 개념, 관련 계열..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="space-y-3 pt-2 border-t border-slate-100">
          {/* Group Chips */}
          <div className="flex items-center flex-wrap gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-1.5 flex items-center">
              <Filter className="w-3 h-3 mr-1" /> 교과군:
            </span>
            {groups.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGroup(g.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedGroup === g.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Type Chips */}
          <div className="flex items-center flex-wrap gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-1.5">선택구분:</span>
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedType === t.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & Grid */}
      <div className="flex justify-between items-center px-1 text-xs text-slate-500 font-medium">
        <span>총 <strong>{filteredSubjects.length}</strong>개의 과목이 검색되었습니다.</span>
        <span>카드 클릭 시 상세 위계도 및 탐구 팁 확인</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredSubjects.map((subject) => {
          return (
            <div
              key={subject.id}
              onClick={() => setActiveSubject(subject)}
              className="group bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {subject.group}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${getTypeBadge(subject.type)}`}>
                      {subject.type}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
                    {subject.credits}학점
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {subject.desc}
                  </p>
                </div>

                {/* Core concepts */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {subject.coreConcepts.slice(0, 3).map((concept, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100/90 text-slate-600 font-medium"
                    >
                      #{concept}
                    </span>
                  ))}
                  {subject.coreConcepts.length > 3 && (
                    <span className="text-[11px] px-1.5 py-0.5 text-slate-400">
                      +{subject.coreConcepts.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] truncate max-w-[170px]">
                  연계: {subject.relatedFields.slice(0, 3).join(', ')}
                </span>
                <span className="font-bold text-indigo-600 group-hover:translate-x-1 transition flex items-center">
                  상세보기 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-700">검색된 과목이 없습니다.</h3>
          <p className="text-xs text-slate-500">검색어를 변경하거나 필터를 초기화해보세요.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedGroup('all');
              setSelectedType('all');
            }}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition"
          >
            필터 초기화
          </button>
        </div>
      )}

      {/* Subject Detail Modal */}
      {activeSubject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-800 space-y-6">
            <button
              onClick={() => setActiveSubject(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header in Modal */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  {activeSubject.group} 교과군
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${getTypeBadge(activeSubject.type)}`}>
                  {activeSubject.type}
                </span>
                <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md">
                  표준 {activeSubject.credits}학점
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeSubject.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeSubject.desc}
              </p>
            </div>

            {/* Core Concepts */}
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
              <div className="text-xs font-bold text-slate-700 uppercase">핵심 개념 및 탐구 주제</div>
              <div className="flex flex-wrap gap-1.5">
                {activeSubject.coreConcepts.map((c, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    #{c}
                  </span>
                ))}
              </div>
            </div>

            {/* Prerequisites & Hierarchy Tree */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-slate-50 border border-indigo-100 space-y-3">
              <div className="flex items-center space-x-2 text-indigo-900 font-bold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>과목 이수 위계도 (Prerequisites)</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                {/* Pre */}
                <div className="w-full sm:w-1/3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs text-center space-y-1">
                  <div className="text-[11px] text-slate-400 font-semibold">선이수 권장 과목</div>
                  <div className="font-bold text-slate-800">
                    {activeSubject.prerequisites && activeSubject.prerequisites.length > 0 ? (
                      activeSubject.prerequisites.map((pid) => {
                        const preSub = getSubjectById(pid);
                        return <div key={pid} className="text-indigo-600">{preSub?.name || pid}</div>;
                      })
                    ) : (
                      <span className="text-slate-400">선수 과목 없음</span>
                    )}
                  </div>
                </div>

                <div className="text-slate-400 font-bold hidden sm:block">➔</div>

                {/* Current */}
                <div className="w-full sm:w-1/3 p-3 bg-indigo-600 text-white rounded-xl shadow-md text-center space-y-1">
                  <div className="text-[11px] text-indigo-200 font-semibold">현재 선택 과목</div>
                  <div className="font-extrabold text-sm">{activeSubject.name}</div>
                </div>

                <div className="text-slate-400 font-bold hidden sm:block">➔</div>

                {/* Post */}
                <div className="w-full sm:w-1/3 p-3 bg-white rounded-xl border border-slate-200 shadow-2xs text-center space-y-1">
                  <div className="text-[11px] text-slate-400 font-semibold">후속 심화 과목</div>
                  <div className="font-bold text-slate-800">
                    {activeSubject.followUpSubjects && activeSubject.followUpSubjects.length > 0 ? (
                      activeSubject.followUpSubjects.map((fid) => {
                        const folSub = getSubjectById(fid);
                        return <div key={fid} className="text-indigo-600">{folSub?.name || fid}</div>;
                      })
                    ) : (
                      <span className="text-slate-400">후속 과목 자율</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Study Tips & Evaluation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-800 flex items-center">
                  <Info className="w-3.5 h-3.5 text-indigo-600 mr-1.5" />
                  내신 평가 방식
                </div>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {activeSubject.evaluationType}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <div className="font-bold text-slate-800 flex items-center">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 mr-1.5" />
                  학습 & 세특 탐구 조언
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {activeSubject.studyTips}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  if (onSelectSubjectForPlan) {
                    onSelectSubjectForPlan(activeSubject.id);
                  }
                  setActiveSubject(null);
                }}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm shadow-md shadow-indigo-600/30 flex items-center justify-center space-x-2 transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>나의 3개년 학업계획서에 담기</span>
              </button>

              <button
                onClick={() => setActiveSubject(null)}
                className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold text-sm transition"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
