import React, { useState, useEffect } from 'react';
import { Department } from '../types';
import { DEPARTMENTS_DATA } from '../data/curriculumData';
import { 
  Search, GraduationCap, ArrowRight, BookOpen, Sparkles, 
  CheckCircle2, RefreshCw, ExternalLink, Bookmark, PlusCircle, AlertCircle,
  Layers, Database, Building2
} from 'lucide-react';

interface MajorExplorerProps {
  careernetKey?: string;
  work24Key?: string;
  onOpenApiModal?: () => void;
  onSelectMajorForPlan?: (majorName: string, category: string) => void;
  onNavigateToSubject?: (subjectName: string) => void;
  onNavigateToJob?: (jobIdOrName: string) => void;
}

export const MajorExplorer: React.FC<MajorExplorerProps> = ({
  careernetKey = '',
  work24Key = '',
  onSelectMajorForPlan,
  onNavigateToSubject,
  onNavigateToJob
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'all' | 'curriculum' | 'openapi'>('all');
  const [activeDept, setActiveDept] = useState<Department | null>(null);
  const [activeLiveItem, setActiveLiveItem] = useState<any | null>(null);

  // Live Integrated API state
  const [liveResults, setLiveResults] = useState<any[]>([]);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [liveError, setLiveError] = useState('');
  const [livePage, setLivePage] = useState(1);
  const [hasMoreLive, setHasMoreLive] = useState(false);
  const [totalApiLoadedCount, setTotalApiLoadedCount] = useState(0);

  // Pagination for Local Departments
  const [localDisplayCount, setLocalDisplayCount] = useState<number>(12);
  const [showAllLocal, setShowAllLocal] = useState<boolean>(false);

  // Exact categories derived from DEPARTMENTS_DATA with accurate item counts
  const deptCategories = [
    { id: 'all', label: '전체 계열', count: DEPARTMENTS_DATA.length },
    { id: '공학 계열', label: '공학 계열', count: DEPARTMENTS_DATA.filter(d => d.category === '공학 계열').length },
    { id: '자연과학 계열', label: '자연과학', count: DEPARTMENTS_DATA.filter(d => d.category === '자연과학 계열').length },
    { id: '의료보건 계열', label: '의료·보건', count: DEPARTMENTS_DATA.filter(d => d.category === '의료보건 계열').length },
    { id: '인문학 계열', label: '인문학', count: DEPARTMENTS_DATA.filter(d => d.category === '인문학 계열').length },
    { id: '사회 계열', label: '사회과학', count: DEPARTMENTS_DATA.filter(d => d.category === '사회 계열').length },
    { id: '경상 계열', label: '경상·경영', count: DEPARTMENTS_DATA.filter(d => d.category === '경상 계열').length },
    { id: '사범 계열', label: '사범·교육', count: DEPARTMENTS_DATA.filter(d => d.category === '사범 계열').length },
    { id: '융합미래분야 계열', label: '융합·미래', count: DEPARTMENTS_DATA.filter(d => d.category === '융합미래분야 계열').length },
    { id: '농생명과학 계열', label: '농생명과학', count: DEPARTMENTS_DATA.filter(d => d.category === '농생명과학 계열').length },
    { id: '예체능 계열', label: '예체능', count: DEPARTMENTS_DATA.filter(d => d.category === '예체능 계열').length },
    { id: '자율전공·첨단 계열', label: '자율전공·무전공', count: DEPARTMENTS_DATA.filter(d => d.category === '자율전공·첨단 계열').length },
  ];

  // Fetch Open API with continuous pagination
  const handleLiveSearch = async (query: string, page: number = 1, append: boolean = false) => {
    if (!append) {
      setIsLoadingLive(true);
      setLiveResults([]);
      setLivePage(1);
      setTotalApiLoadedCount(0);
    } else {
      setIsLoadingLive(true);
    }
    setLiveError('');

    try {
      let combinedResults: any[] = [];
      let fetchedItemsCount = 0;

      // 1. Fetch CareerNet (Major)
      try {
        const qParam = query.trim() ? `&searchTitle=${encodeURIComponent(query.trim())}` : '';
        const keyParam = careernetKey ? `apiKey=${encodeURIComponent(careernetKey)}&` : '';
        const res = await fetch(
          `/api/careernet/proxy?${keyParam}svcType=api&svcCode=MAJOR&gubun=univ_list${qParam}&thisPage=${page}&perPage=100`
        );
        if (res.ok) {
          const data = await res.json();
          if (data?.dataSearch?.content) {
            const rawContent = data.dataSearch.content;
            const items = Array.isArray(rawContent) ? rawContent : [rawContent];
            fetchedItemsCount += items.length;
            combinedResults = [...combinedResults, ...items.map((i: any) => ({ ...i, source: 'careernet' }))];
          }
        }
      } catch (cErr) {
        console.warn('CareerNet fetch failed, trying Work24', cErr);
      }

      // 2. Fetch Work24 (Major Dictionary)
      try {
        const qParam = query.trim() ? `&srchWord=${encodeURIComponent(query.trim())}` : '';
        const keyParam = work24Key ? `authKey=${encodeURIComponent(work24Key)}&` : '';
        const res = await fetch(`/api/work24/proxy?${keyParam}apiType=majorApi.do&srchType=A${qParam}&display=100&startPage=${page}`);
        if (res.ok) {
          const text = await res.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, "text/xml");
          const majors = Array.from(xml.getElementsByTagName("major"));
          
          const work24Items = majors.map(m => ({
            major: m.getElementsByTagName("majorNm")[0]?.textContent || m.getElementsByTagName("mClass")[0]?.textContent,
            summary: m.getElementsByTagName("summary")[0]?.textContent || '상세 정보는 워크넷 공식 홈페이지에서 확인하세요.',
            lClass: '고용24 학과정보',
            source: 'work24',
            link: 'https://www.work24.go.kr'
          }));
          fetchedItemsCount += work24Items.length;
          combinedResults = [...combinedResults, ...work24Items];
        }
      } catch (wErr) {
        console.warn('Work24 fetch failed', wErr);
      }

      setHasMoreLive(fetchedItemsCount > 0);

      if (append) {
        setLiveResults(prev => {
          const updated = [...prev, ...combinedResults];
          setTotalApiLoadedCount(updated.length);
          return updated;
        });
      } else {
        setLiveResults(combinedResults);
        setTotalApiLoadedCount(combinedResults.length);
      }
    } catch (err: any) {
      console.error('Live API fetch error:', err);
      setLiveError('통합 실시간 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoadingLive(false);
    }
  };

  // Auto trigger initial load on mount to immediately show extensive nationwide majors
  useEffect(() => {
    if (liveResults.length === 0 && !isLoadingLive) {
      handleLiveSearch('', 1, false);
    }
  }, []);

  const filteredDepartments = DEPARTMENTS_DATA.filter((dept) => {
    const matchCategory = selectedCategory === 'all' || dept.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      dept.name.toLowerCase().includes(q) ||
      dept.desc.toLowerCase().includes(q) ||
      dept.category.toLowerCase().includes(q) ||
      dept.mainCurriculum.some((m) => m.toLowerCase().includes(q)) ||
      dept.coreRecommendedSubjects.some((s) => s.toLowerCase().includes(q)) ||
      dept.relatedJobs?.some((j) => j.toLowerCase().includes(q));

    return matchCategory && matchQuery;
  });

  const displayedDepartments = showAllLocal
    ? filteredDepartments
    : filteredDepartments.slice(0, localDisplayCount);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>대학 학과 & 전공 백과 (전국 대학 DB)</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            내 꿈에 맞는 대학 학과와 전공을 탐색해보세요
          </h1>
          <p className="text-indigo-100/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            2022 개정 권장과목이 탑재된 핵심 학과 백과부터 전국 대학 학과 데이터베이스까지 실시간 검색과 '더보기'로 편리하게 확장 탐색할 수 있습니다.
          </p>

          {/* Search Trigger */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleLiveSearch(searchQuery, 1, false);
                  }
                }}
                placeholder="학과명, 배우는 내용, 권장과목 검색 (예: 컴퓨터, 인공지능, 약학, 반도체)..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner"
              />
            </div>
            <button
              onClick={() => handleLiveSearch(searchQuery, 1, false)}
              disabled={isLoadingLive}
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-bold flex items-center justify-center space-x-2 transition shadow-md shadow-indigo-600/30 shrink-0"
            >
              {isLoadingLive ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
              <span>전국 대학 학과 실시간 검색</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs with Item Counts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
            학문 계열별 학과 분류 ({deptCategories.length}개 계열 분석)
          </span>
          <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
            {selectedCategory === 'all' ? `전체 ${DEPARTMENTS_DATA.length}개 전공` : `${selectedCategory} (${filteredDepartments.length}개)`}
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          {deptCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setLocalDisplayCount(12);
                  setShowAllLocal(false);
                }}
                className={`px-3.5 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Analytics Summary Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div className="p-3 bg-slate-50 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-slate-500">총 핵심 전공 DB</div>
          <div className="text-lg font-black text-slate-900">{DEPARTMENTS_DATA.length}개 학과</div>
        </div>
        <div className="p-3 bg-indigo-50/60 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-indigo-700">현재 조건 검색결과</div>
          <div className="text-lg font-black text-indigo-950">{filteredDepartments.length}개 학과</div>
        </div>
        <div className="p-3 bg-emerald-50/60 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-emerald-700">전국 전공 DB</div>
          <div className="text-lg font-black text-emerald-950">실시간 연계 ✓</div>
        </div>
        <div className="p-3 bg-amber-50/60 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-amber-700">2022 과목 매핑</div>
          <div className="text-lg font-black text-amber-950">100% 완전 연계</div>
        </div>
      </div>

      {/* Local 2022 Curriculum Recommended Departments Section */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            2022 개정 핵심 추천 학과 일람
          </h3>
          <p className="text-xs text-slate-500">
            고교학점제 핵심 권장이수과목이 연계된 {filteredDepartments.length}개 학과 중 {displayedDepartments.length}개 표시
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedDepartments.map((dept) => (
          <div
            key={dept.id}
            onClick={() => setActiveDept(dept)}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {dept.category}
                </span>
                <span className="text-xs font-semibold text-indigo-600 flex items-center group-hover:translate-x-1 transition-transform">
                  상세보기 <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {dept.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {dept.summary}
                </p>
              </div>

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

              <div className="text-xs text-slate-500 flex items-center space-x-1.5">
                <span className="font-semibold text-slate-700">기타 권장:</span>
                <span className="truncate">{dept.recommendedSubjects.join(', ')}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                주요 대학: {dept.topUniversities?.slice(0, 2).join(', ')}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectMajorForPlan?.(dept.name, dept.category);
                }}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition"
              >
                + 계획서 담기
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Load More & View All Controls for Local Data */}
      <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-600 flex items-center">
              <span>학과 열람 진행률:</span>
              <strong className="ml-1.5 text-indigo-700 font-extrabold">{displayedDepartments.length} / {filteredDepartments.length}개</strong>
              <span className="ml-2 text-[11px] text-slate-400 font-normal">
                ({Math.round((displayedDepartments.length / (filteredDepartments.length || 1)) * 100)}% 열람 완료)
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full sm:w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                style={{ width: `${(displayedDepartments.length / (filteredDepartments.length || 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {filteredDepartments.length > displayedDepartments.length && (
              <button
                onClick={() => setLocalDisplayCount(prev => prev + 12)}
                className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition flex items-center space-x-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ 12개 더보기</span>
              </button>
            )}

            <button
              onClick={() => {
                setShowAllLocal(!showAllLocal);
                if (!showAllLocal) {
                  setLocalDisplayCount(filteredDepartments.length);
                } else {
                  setLocalDisplayCount(12);
                }
              }}
              className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm shadow-2xs transition flex items-center space-x-1.5"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>{showAllLocal ? '12개씩 기본 보기' : `전체 학과 한 번에 펼치기 (${filteredDepartments.length}개)`}</span>
            </button>
          </div>
        </div>
      </div>

      
{/* Live Results Section (Continuous Load More) */}
      {liveResults.length > 0 && (
        <div className="bg-indigo-50/90 rounded-3xl p-6 sm:p-8 border border-indigo-200/80 shadow-sm space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-200/60 pb-4">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-indigo-600 animate-ping" />
              <div>
                <h3 className="text-lg font-extrabold text-indigo-950 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-indigo-700" /> 전국 대학 학과 실시간 검색 결과
                </h3>
                <p className="text-xs text-indigo-800 font-medium">
                  현재 누적 <strong className="text-indigo-950 font-bold">{liveResults.length}개</strong> 학과 로드 완료 (더보기를 눌러 전체 학과를 계속 조회할 수 있습니다)
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLiveSearch(searchQuery, 1, false)}
                disabled={isLoadingLive}
                className="text-xs text-indigo-700 hover:text-indigo-900 bg-white px-3 py-1.5 rounded-xl border border-indigo-200 font-bold transition flex items-center"
              >
                <RefreshCw className={`w-3 h-3 mr-1 ${isLoadingLive ? 'animate-spin' : ''}`} /> 새로고침
              </button>
              <button
                onClick={() => setLiveResults([])}
                className="text-xs text-slate-600 hover:text-slate-900 bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-bold transition"
              >
                결과 접기
              </button>
            </div>
          </div>

          {liveError && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700 font-bold flex items-center">
              <AlertCircle className="w-4 h-4 mr-2" />
              {liveError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveResults.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-indigo-100 shadow-sm space-y-3 hover:border-indigo-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-lg">
                      {item.lClass || '대학교 전공'}
                    </span>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase font-semibold">{item.source}</span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-base">
                    {item.mClass || item.major || item.facilName}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary || item.description || '상세 교육과정 및 진로 정보는 공식 포털에서 제공됩니다.'}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {item.department && (
                    <div className="text-[11px] text-slate-500 font-medium line-clamp-1">
                      개설대학: <span className="text-slate-700 font-semibold">{item.department}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveLiveItem(item)}
                      className="text-xs text-slate-600 hover:text-indigo-600 font-bold"
                    >
                      상세보기 ↗
                    </button>
                    <button
                      onClick={() => onSelectMajorForPlan?.(item.mClass || item.major || item.facilName, item.lClass || '기타')}
                      className="text-xs font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 px-3 py-1.5 rounded-xl border border-indigo-200 transition"
                    >
                      + 계획서 담기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Continuous Infinite '더보기' Button for Live Results */}
          {hasMoreLive && (
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => {
                  const next = livePage + 1;
                  setLivePage(next);
                  handleLiveSearch(searchQuery, next, true);
                }}
                disabled={isLoadingLive}
                className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-indigo-600/30 transition flex items-center space-x-2"
              >
                {isLoadingLive ? (
                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <PlusCircle className="w-4 h-4 mr-2" />
                )}
                <span>대학 학과 100개 더 불러오기 (현재 {liveResults.length}개)</span>
              </button>
            </div>
          )}
        </div>
      )}

      
{/* Active Local Dept Modal */}
      {activeDept && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {activeDept.category}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {activeDept.name}
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {activeDept.summary}
                </p>
              </div>
              <button onClick={() => setActiveDept(null)} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl text-lg font-bold">✕</button>
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <GraduationCap className="w-4 h-4 text-indigo-600 mr-1.5" /> 학과 상세 개요
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {activeDept.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-100 space-y-2">
                  <div className="flex items-center text-xs font-extrabold text-rose-900">
                    <CheckCircle2 className="w-4 h-4 text-rose-600 mr-1.5" /> 핵심 권장이수과목
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDept.coreRecommendedSubjects.map((sub, i) => (
                      <button key={i} onClick={() => { setActiveDept(null); onNavigateToSubject?.(sub); }} className="px-2.5 py-1 bg-white border border-rose-300 text-rose-700 text-xs font-bold rounded-xl hover:bg-rose-600 hover:text-white transition">
                        {sub} ↗
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100 space-y-2">
                  <div className="flex items-center text-xs font-extrabold text-indigo-900">
                    <Sparkles className="w-4 h-4 text-indigo-600 mr-1.5" /> 권장 이수과목
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDept.recommendedSubjects.map((sub, i) => (
                      <button key={i} onClick={() => { setActiveDept(null); onNavigateToSubject?.(sub); }} className="px-2.5 py-1 bg-white border border-indigo-300 text-indigo-700 text-xs font-bold rounded-xl hover:bg-indigo-600 hover:text-white transition">
                        {sub} ↗
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" /> 대학 주요 전공 교과목
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {activeDept.mainCurriculum.map((curr, idx) => (
                    <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-800 text-center">
                      {curr}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button onClick={() => setActiveDept(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm">닫기</button>
              {onSelectMajorForPlan && (
                <button onClick={() => { onSelectMajorForPlan(activeDept.name, activeDept.category); setActiveDept(null); }} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center">
                  <Bookmark className="w-4 h-4 mr-2" /> 3개년 학업계획서 담기
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Active Live Item Modal */}
      {activeLiveItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {activeLiveItem.lClass || '대학교 전공'}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {activeLiveItem.mClass || activeLiveItem.major || activeLiveItem.facilName}
                </h2>
              </div>
              <button onClick={() => setActiveLiveItem(null)} className="text-slate-400 p-2 rounded-xl text-lg font-bold">✕</button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="font-bold text-slate-700 block text-xs">학과 소개 & 개요</span>
                <p className="text-slate-600 leading-relaxed">{activeLiveItem.summary || activeLiveItem.description}</p>
              </div>

              {activeLiveItem.department && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-xs">
                  <span className="font-bold text-slate-700 block">개설 대학 정보</span>
                  <p className="text-slate-600">{activeLiveItem.department}</p>
                </div>
              )}

              {activeLiveItem.link && (
                <div className="pt-2">
                  <a href={activeLiveItem.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-indigo-600 font-bold hover:underline">
                    공식 포털에서 상세 열람하기 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button onClick={() => setActiveLiveItem(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm">닫기</button>
              <button onClick={() => { onSelectMajorForPlan?.(activeLiveItem.mClass || activeLiveItem.major || activeLiveItem.facilName, activeLiveItem.lClass || '기타'); setActiveLiveItem(null); }} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center">
                <Bookmark className="w-4 h-4 mr-2" /> 내 3개년 계획서 담기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
