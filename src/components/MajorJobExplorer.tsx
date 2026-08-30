import React, { useState, useEffect } from 'react';
import { Department, Job } from '../types';
import { DEPARTMENTS_DATA, JOBS_DATA, SUBJECTS_DATA, UNI_RECOMMENDATIONS } from '../data/curriculumData';
import { 
  Search, 
  GraduationCap, 
  Briefcase, 
  Key, 
  RefreshCw, 
  ExternalLink, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  TrendingUp,
  PlusCircle,
  AlertCircle,
  Bookmark
} from 'lucide-react';

interface MajorJobExplorerProps {
  apiKey: string;
  isKeySaved: boolean;
  onOpenApiModal: () => void;
  onSelectMajorForPlan?: (majorName: string, category: string) => void;
  onNavigateToSubject?: (subjectName: string) => void;
}

export const MajorJobExplorer: React.FC<MajorJobExplorerProps> = ({
  apiKey,
  isKeySaved,
  onOpenApiModal,
  onSelectMajorForPlan,
  onNavigateToSubject
}) => {
  const [activeTab, setActiveTab] = useState<'departments' | 'jobs'>('departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDept, setActiveDept] = useState<Department | null>(null);
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  // Live CareerNet API state
  const [liveResults, setLiveResults] = useState<any[]>([]);
  const [liveTotalCount, setLiveTotalCount] = useState<number>(0);
  const [livePage, setLivePage] = useState<number>(1);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [isLoadingMoreLive, setIsLoadingMoreLive] = useState(false);
  const [liveError, setLiveError] = useState('');
  const [lastSearchedQuery, setLastSearchedQuery] = useState('');

  // Local card pagination
  const [deptDisplayCount, setDeptDisplayCount] = useState<number>(12);
  const [jobDisplayCount, setJobDisplayCount] = useState<number>(12);

  const deptCategories = [
    { id: 'all', label: '전체 계열' },
    { id: '공학계열', label: '공학계열' },
    { id: '자연계열', label: '자연계열' },
    { id: '의약계열', label: '의약계열' },
    { id: '경영·경제계열', label: '경영·경제' },
    { id: '사회과학계열', label: '사회과학' },
    { id: '인문사회계열', label: '인문사회' },
    { id: '교육계열', label: '교육계열' },
  ];

  // Fetch live from CareerNet if API key exists and query is entered
  const handleLiveSearch = async (query: string, page: number = 1, append: boolean = false) => {
    if (!apiKey) {
      onOpenApiModal();
      return;
    }

    if (append) {
      setIsLoadingMoreLive(true);
    } else {
      setIsLoadingLive(true);
      setLiveResults([]);
      setLiveTotalCount(0);
    }
    setLiveError('');
    setLastSearchedQuery(query.trim());

    try {
      if (activeTab === 'departments') {
        const qParam = query.trim() ? `&searchTitle=${encodeURIComponent(query.trim())}` : '';
        const res = await fetch(
          `/api/careernet/proxy?apiKey=${encodeURIComponent(apiKey)}&svcType=api&svcCode=MAJOR&gubun=univ_list${qParam}&thisPage=${page}&perPage=12`
        );
        const data = await res.json();
        if (data?.dataSearch?.content) {
          const rawContent = data.dataSearch.content;
          const items = Array.isArray(rawContent) ? rawContent : [rawContent];
          const total = parseInt(data.dataSearch.totalCount || '0', 10) || items.length;
          setLiveTotalCount(total);
          setLivePage(page);
          if (append) {
            setLiveResults((prev) => [...prev, ...items]);
          } else {
            setLiveResults(items);
          }
        } else {
          if (!append) {
            setLiveResults([]);
            setLiveTotalCount(0);
          }
        }
      } else {
        const qParam = query.trim() ? `&searchJobNm=${encodeURIComponent(query.trim())}` : '';
        const res = await fetch(
          `/api/careernet/proxy?apiKey=${encodeURIComponent(apiKey)}&svcType=api&svcCode=JOB${qParam}&thisPage=${page}&perPage=12`
        );
        const data = await res.json();
        if (data?.dataSearch?.content) {
          const rawContent = data.dataSearch.content;
          const items = Array.isArray(rawContent) ? rawContent : [rawContent];
          const total = parseInt(data.dataSearch.totalCount || '0', 10) || items.length;
          setLiveTotalCount(total);
          setLivePage(page);
          if (append) {
            setLiveResults((prev) => [...prev, ...items]);
          } else {
            setLiveResults(items);
          }
        } else {
          if (!append) {
            setLiveResults([]);
            setLiveTotalCount(0);
          }
        }
      }
    } catch (err: any) {
      console.error('Live API fetch error:', err);
      setLiveError('실시간 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoadingLive(false);
      setIsLoadingMoreLive(false);
    }
  };

  const handleLoadMoreLive = () => {
    const nextPage = livePage + 1;
    handleLiveSearch(lastSearchedQuery, nextPage, true);
  };

  const filteredDepartments = DEPARTMENTS_DATA.filter((dept) => {
    const matchCategory = selectedCategory === 'all' || dept.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      dept.name.toLowerCase().includes(q) ||
      dept.desc.toLowerCase().includes(q) ||
      dept.mainCurriculum.some((m) => m.toLowerCase().includes(q)) ||
      dept.coreRecommendedSubjects.some((s) => s.toLowerCase().includes(q));

    return matchCategory && matchQuery;
  });

  const displayedDepartments = filteredDepartments.slice(0, deptDisplayCount);

  const filteredJobs = JOBS_DATA.filter((job) => {
    const q = searchQuery.toLowerCase().trim();
    return (
      !q ||
      job.name.toLowerCase().includes(q) ||
      job.desc.toLowerCase().includes(q) ||
      job.coreCompetencies.some((c) => c.toLowerCase().includes(q))
    );
  });

  const displayedJobs = filteredJobs.slice(0, jobDisplayCount);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Search & Top Controls Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                진로 탐색 & 권장과목
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                전공 학과 & 미래 직업 탐색
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              학과별 <strong>대학 핵심 권장이수과목</strong>과 직업 세계의 요구 역량을 비교하고 나만의 학업 경로를 찾으세요.
            </p>
          </div>

          {/* Main Tab Toggle */}
          <div className="flex bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 shrink-0">
            <button
              onClick={() => {
                setActiveTab('departments');
                setLiveResults([]);
                setDeptDisplayCount(12);
              }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'departments'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>전공·학과 탐색 ({DEPARTMENTS_DATA.length})</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('jobs');
                setLiveResults([]);
                setJobDisplayCount(12);
              }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                activeTab === 'jobs'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>미래 직업 탐색 ({JOBS_DATA.length})</span>
            </button>
          </div>
        </div>

        {/* Search Bar with Live CareerNet query button */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={
                activeTab === 'departments'
                  ? '학과명, 전공 교과, 권장이수과목 검색 (예: 컴퓨터, 의예, 반도체)...'
                  : '직업명, 핵심 역량 검색 (예: 인공지능, 개발자, 연구원)...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLiveSearch(searchQuery, 1, false);
                }
              }}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
          </div>

          <button
            onClick={() => handleLiveSearch(searchQuery, 1, false)}
            disabled={isLoadingLive}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition shadow-sm shrink-0"
          >
            {isLoadingLive ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <ExternalLink className="w-3.5 h-3.5" />
            )}
            <span>커리어넷 실시간 검색</span>
          </button>
        </div>

        {/* Category Filters for Departments */}
        {activeTab === 'departments' && (
          <div className="flex items-center flex-wrap gap-1.5 pt-1">
            <span className="text-xs font-bold text-slate-400 mr-1.5">계열별 필터:</span>
            {deptCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setDeptDisplayCount(12);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Live CareerNet Search Results (with Load More / 더보기) */}
      {liveResults.length > 0 && (
        <div className="bg-indigo-50/80 rounded-3xl p-6 sm:p-8 border border-indigo-200 shadow-sm space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-indigo-900 font-extrabold text-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>
                커리어넷 Open API 실시간 검색 결과 (현재 {liveResults.length}건 / 전체 약 {liveTotalCount}건)
              </span>
            </div>
            <button
              onClick={() => setLiveResults([])}
              className="text-xs text-indigo-600 hover:underline font-bold"
            >
              닫기
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveResults.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-indigo-100 shadow-xs space-y-2">
                <div className="font-extrabold text-sm text-slate-900">
                  {item.mClass || item.mMajor || item.job_nm || item.major || item.job || item.facilName}
                </div>
                <div className="text-xs text-slate-500 line-clamp-2">
                  {item.summary || item.description || item.job_summary || '커리어넷 등록 상세 정보'}
                </div>
                {item.department && (
                  <div className="text-[11px] text-slate-500 font-medium">
                    개설대학: {item.department}
                  </div>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] text-indigo-600 font-bold hover:underline pt-1"
                  >
                    <span>커리어넷 바로가기</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Load More for Live API */}
          {liveResults.length < liveTotalCount && (
            <div className="pt-2 flex justify-center">
              <button
                onClick={handleLoadMoreLive}
                disabled={isLoadingMoreLive}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-xs shadow-sm flex items-center space-x-2 transition disabled:opacity-50"
              >
                {isLoadingMoreLive ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <PlusCircle className="w-3.5 h-3.5" />}
                <span>12개 더 불러오기 ({liveResults.length} / {liveTotalCount}건)</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Department List Grid */}
      {activeTab === 'departments' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center px-1 text-xs text-slate-500 font-medium">
            <span>
              총 <strong>{filteredDepartments.length}</strong>개 학과 중 <strong>{displayedDepartments.length}</strong>개 표시
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedDepartments.map((dept) => (
              <div
                key={dept.id}
                onClick={() => setActiveDept(dept)}
                className="group bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {dept.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">상세보기 ➔</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {dept.summary}
                    </p>
                  </div>

                  {/* Core Prerequisites Badge Callout */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 space-y-1.5">
                    <div className="text-[11px] font-bold text-amber-900 flex items-center">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 mr-1" />
                      핵심 권장이수과목:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {dept.coreRecommendedSubjects.map((sub, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-xs font-extrabold px-2 py-0.5 rounded bg-white text-amber-900 border border-amber-200 shadow-2xs"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Subjects */}
                  <div className="text-xs text-slate-500 flex items-center space-x-1.5">
                    <span className="font-semibold text-slate-700">기타 권장:</span>
                    <span className="truncate">{dept.recommendedSubjects.join(', ')}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] text-slate-400">
                    주요 대학: {dept.topUniversities?.slice(0, 3).join(', ')}
                  </span>
                  <span className="font-bold text-indigo-600 group-hover:translate-x-1 transition flex items-center">
                    전공 가이드 확인 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Department Load More */}
          {filteredDepartments.length > deptDisplayCount && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setDeptDisplayCount((prev) => prev + 12)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-extrabold text-sm shadow-xs flex items-center justify-center space-x-2 transition"
              >
                <PlusCircle className="w-4 h-4 text-indigo-600" />
                <span>학과 12개 더보기 ({displayedDepartments.length} / {filteredDepartments.length}개)</span>
              </button>
              <button
                onClick={() => setDeptDisplayCount(filteredDepartments.length)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition"
              >
                전체 학과 한 번에 보기 ({filteredDepartments.length}개)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Main Job List Grid */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center px-1 text-xs text-slate-500 font-medium">
            <span>
              총 <strong>{filteredJobs.length}</strong>개 직업 중 <strong>{displayedJobs.length}</strong>개 표시
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setActiveJob(job)}
                className="group bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {job.category}
                    </span>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      전망 {job.futureProspects}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                      {job.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-3 leading-relaxed">
                      {job.desc}
                    </p>
                  </div>

                  {/* Core Competencies */}
                  <div className="space-y-1">
                    <div className="text-[11px] font-bold text-slate-400">요구 핵심 역량:</div>
                    <div className="flex flex-wrap gap-1">
                      {job.coreCompetencies.slice(0, 3).map((comp, cIdx) => (
                        <span key={cIdx} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                          #{comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-[11px] text-slate-400 truncate max-w-[170px]">
                    추천과목: {job.relatedSubjects.slice(0, 2).join(', ')}
                  </span>
                  <span className="font-bold text-indigo-600 group-hover:translate-x-1 transition flex items-center">
                    직무 상세 <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Job Load More */}
          {filteredJobs.length > jobDisplayCount && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setJobDisplayCount((prev) => prev + 12)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-extrabold text-sm shadow-xs flex items-center justify-center space-x-2 transition"
              >
                <PlusCircle className="w-4 h-4 text-indigo-600" />
                <span>직업 12개 더보기 ({displayedJobs.length} / {filteredJobs.length}개)</span>
              </button>
              <button
                onClick={() => setJobDisplayCount(filteredJobs.length)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition"
              >
                전체 직업 한 번에 보기 ({filteredJobs.length}개)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Department Detail Modal */}
      {activeDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-800 space-y-6">
            <button
              onClick={() => setActiveDept(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
            >
              ✕
            </button>

            {/* Header */}
            <div className="space-y-2 pr-8">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800">
                {activeDept.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeDept.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeDept.desc}
              </p>
            </div>

            {/* Prerequisites Callout Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 space-y-4">
              <div className="flex items-center space-x-2 text-amber-900 font-extrabold text-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>2022 개정 교육과정 대학 권장이수과목 안내</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2">
                  <div className="font-extrabold text-rose-700 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mr-1.5"></span>
                    핵심 권장이수과목 (필수 이수 권장)
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeDept.coreRecommendedSubjects.map((sub, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-rose-50 text-rose-900 border border-rose-200 font-bold">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-amber-200 shadow-2xs space-y-2">
                  <div className="font-extrabold text-indigo-700 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mr-1.5"></span>
                    권장 이수과목 (선택 시 유리)
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeDept.recommendedSubjects.map((sub, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-900 border border-indigo-200 font-bold">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* University Curriculum */}
            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center">
                <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" />
                대학 주요 전공 교과목
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDept.mainCurriculum.map((curr, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold">
                    {curr}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Prospects */}
            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center">
                <Briefcase className="w-4 h-4 text-indigo-600 mr-1.5" />
                졸업 후 주요 진로 및 진출 분야
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {activeDept.careerProspects}
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveDept(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-bold text-sm"
              >
                닫기
              </button>
              {onSelectMajorForPlan && (
                <button
                  onClick={() => {
                    onSelectMajorForPlan(activeDept.name, activeDept.category);
                    setActiveDept(null);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30"
                >
                  3개년 학업계획서에 목표 학과로 담기
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Job Detail Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-800 space-y-6">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
            >
              ✕
            </button>

            <div className="space-y-2 pr-8">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  {activeJob.category}
                </span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  미래 전망: {activeJob.futureProspects}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {activeJob.name}
              </h2>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900">직무 개요 & 하는 일</h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                {activeJob.desc}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900">핵심 요구 역량</h4>
              <div className="flex flex-wrap gap-2">
                {activeJob.coreCompetencies.map((comp, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg text-xs font-bold">
                    ✓ {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-extrabold text-slate-900">고등학교 추천 이수과목</h4>
              <div className="flex flex-wrap gap-2">
                {activeJob.relatedSubjects.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveJob(null);
                      onNavigateToSubject?.(sub);
                    }}
                    className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    {sub} ↗
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
