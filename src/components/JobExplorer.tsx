import React, { useState, useEffect } from 'react';
import { Job } from '../types';
import { JOBS_DATA, DEPARTMENTS_DATA } from '../data/curriculumData';
import { 
  Search, Briefcase, TrendingUp, Sparkles, BookOpen, GraduationCap, 
  ArrowRight, ExternalLink, RefreshCw, PlusCircle, AlertCircle, Bookmark,
  Database, Layers
} from 'lucide-react';

interface JobExplorerProps {
  careernetKey?: string;
  work24Key?: string;
  onOpenApiModal?: () => void;
  onNavigateToMajor?: (majorName: string) => void;
  onNavigateToSubject?: (subjectName: string) => void;
  onSelectJobForPlan?: (jobName: string) => void;
}

export const JobExplorer: React.FC<JobExplorerProps> = ({
  careernetKey = '',
  work24Key = '',
  onNavigateToMajor,
  onNavigateToSubject,
  onSelectJobForPlan
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [activeLiveJob, setActiveLiveJob] = useState<any | null>(null);

  // Live Integrated API state
  const [liveResults, setLiveResults] = useState<any[]>([]);
  const [isLoadingLive, setIsLoadingLive] = useState(false);
  const [liveError, setLiveError] = useState('');
  const [livePage, setLivePage] = useState(1);
  const [hasMoreLive, setHasMoreLive] = useState(false);

  // Pagination for Local Jobs
  const [localDisplayCount, setLocalDisplayCount] = useState<number>(12);
  const [showAllLocal, setShowAllLocal] = useState<boolean>(false);

  // Exact categories derived from JOBS_DATA with accurate item counts
  const jobCategories = [
    { id: 'all', label: '전체 직업', count: JOBS_DATA.length },
    { id: 'IT·인공지능', label: 'IT·인공지능', count: JOBS_DATA.filter(j => j.category === 'IT·인공지능').length },
    { id: '전자·반도체·제조', label: '반도체·전자', count: JOBS_DATA.filter(j => j.category === '전자·반도체·제조').length },
    { id: '로봇·모빌리티', label: '로봇·모빌리티', count: JOBS_DATA.filter(j => j.category === '로봇·모빌리티').length },
    { id: '환경·에너지·신소재', label: '에너지·신소재', count: JOBS_DATA.filter(j => j.category === '환경·에너지·신소재').length },
    { id: '의료·보건·약학', label: '의료·보건·약학', count: JOBS_DATA.filter(j => j.category === '의료·보건·약학').length },
    { id: '바이오·신약', label: '바이오·신약', count: JOBS_DATA.filter(j => j.category === '바이오·신약').length },
    { id: '경영·금융·컨설팅', label: '경영·금융', count: JOBS_DATA.filter(j => j.category === '경영·금융·컨설팅').length },
    { id: '법률·공공·외교', label: '법률·공공', count: JOBS_DATA.filter(j => j.category === '법률·공공·외교').length },
    { id: '교육·학술·연구', label: '교육·연구', count: JOBS_DATA.filter(j => j.category === '교육·학술·연구').length },
    { id: '미디어·콘텐츠', label: '미디어·콘텐츠', count: JOBS_DATA.filter(j => j.category === '미디어·콘텐츠').length },
    { id: '디자인·공간', label: '디자인·공간', count: JOBS_DATA.filter(j => j.category === '디자인·공간').length },
  ];

  const handleLiveSearch = async (query: string, page: number = 1, append: boolean = false) => {
    if (!append) {
      setIsLoadingLive(true);
      setLiveResults([]);
      setLivePage(1);
    } else {
      setIsLoadingLive(true);
    }
    setLiveError('');

    try {
      let combinedResults: any[] = [];
      let fetchedItemsCount = 0;

      // 1. Fetch CareerNet (JOB)
      try {
        const qParam = query.trim() ? `&searchJobNm=${encodeURIComponent(query.trim())}` : '';
        const keyParam = careernetKey ? `apiKey=${encodeURIComponent(careernetKey)}&` : '';
        const res = await fetch(
          `/api/careernet/proxy?${keyParam}svcType=api&svcCode=JOB${qParam}&thisPage=${page}&perPage=100`
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
        console.warn('CareerNet job fetch failed', cErr);
      }

      // 2. Fetch Work24 (Job Dictionary)
      try {
        const qParam = query.trim() ? `&srchWord=${encodeURIComponent(query.trim())}` : '';
        const keyParam = work24Key ? `authKey=${encodeURIComponent(work24Key)}&` : '';
        const res = await fetch(`/api/work24/proxy?${keyParam}apiType=jobDicApi.do&srchType=A${qParam}&startPage=${page}&display=100`);
        if (res.ok) {
          const text = await res.text();
          const parser = new DOMParser();
          const xml = parser.parseFromString(text, "text/xml");
          const jobs = Array.from(xml.getElementsByTagName("jobDic"));
          
          const work24Jobs = jobs.map(j => ({
            job_nm: j.getElementsByTagName("jobNm")[0]?.textContent,
            summary: j.getElementsByTagName("jobDef")[0]?.textContent,
            salery: j.getElementsByTagName("salway")[0]?.textContent, 
            job_cate: '고용24 직업사전',
            source: 'work24',
            link: 'https://www.work24.go.kr'
          }));
          fetchedItemsCount += work24Jobs.length;
          combinedResults = [...combinedResults, ...work24Jobs];
        }
      } catch (wErr) {
        console.warn('Work24 job fetch failed', wErr);
      }

      setHasMoreLive(fetchedItemsCount > 0);

      if (append) {
        setLiveResults(prev => [...prev, ...combinedResults]);
      } else {
        setLiveResults(combinedResults);
      }
    } catch (err: any) {
      console.error('Live API Error:', err);
      setLiveError('통합 실시간 데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setIsLoadingLive(false);
    }
  };

  // Auto trigger initial load on mount
  useEffect(() => {
    if (liveResults.length === 0 && !isLoadingLive) {
      handleLiveSearch('', 1, false);
    }
  }, []);

  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchCategory =
      selectedCategory === 'all' ||
      job.category === selectedCategory ||
      job.category.includes(selectedCategory);
    const q = searchQuery.toLowerCase().trim();
    const matchQuery =
      !q ||
      job.name.toLowerCase().includes(q) ||
      job.desc.toLowerCase().includes(q) ||
      job.category.toLowerCase().includes(q) ||
      job.coreCompetencies.some((c) => c.toLowerCase().includes(q)) ||
      job.relatedSubjects.some((s) => s.toLowerCase().includes(q)) ||
      job.relatedDepartments.some((m) => m.toLowerCase().includes(q));

    return matchCategory && matchQuery;
  });

  const displayedJobs = showAllLocal
    ? filteredJobs
    : filteredJobs.slice(0, localDisplayCount);

  const getDeptName = (deptIdOrName: string) => {
    const d = DEPARTMENTS_DATA.find((item) => item.id === deptIdOrName || item.name.includes(deptIdOrName));
    return d ? d.name : deptIdOrName;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>미래 유망 직업 백과 (국가 표준 직업 DB)</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            미래를 선도할 유망 직업과 필요 역량을 탐색하세요
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            각 직업의 상세 업무, 핵심 역량과 고등학교 권장이수과목을 확인하고, 방대한 미래 직업 데이터베이스를 실시간 검색과 '더보기'로 편리하게 확장 조회하세요.
          </p>

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
                placeholder="직업명, 핵심 역량, 고교 과목 검색 (예: 인공지능, 반도체, 의사, 퀀트, 로봇)..."
                className="w-full bg-slate-800/90 text-white placeholder-slate-400 text-sm pl-11 pr-4 py-3 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-inner"
              />
            </div>
            <button
              onClick={() => handleLiveSearch(searchQuery, 1, false)}
              disabled={isLoadingLive}
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-bold flex items-center justify-center space-x-2 transition shadow-md shadow-indigo-600/30 shrink-0"
            >
              {isLoadingLive ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
              <span>전국 직업 정보 실시간 검색</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs with Item Counts */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
            <Layers className="w-3.5 h-3.5 mr-1.5 text-indigo-600" />
            산업·직군별 직업 분류 ({jobCategories.length}개 직군 분석)
          </span>
          <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
            {selectedCategory === 'all' ? `전체 ${JOBS_DATA.length}개 직업` : `${selectedCategory} (${filteredJobs.length}개)`}
          </span>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          {jobCategories.map((cat) => {
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
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20'
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
          <div className="text-[11px] font-bold text-slate-500">총 미래 유망 직업 DB</div>
          <div className="text-lg font-black text-slate-900">{JOBS_DATA.length}개 직업</div>
        </div>
        <div className="p-3 bg-indigo-50/60 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-indigo-700">현재 조건 검색결과</div>
          <div className="text-lg font-black text-indigo-950">{filteredJobs.length}개 직업</div>
        </div>
        <div className="p-3 bg-emerald-50/60 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-emerald-700">직무 역량 DB</div>
          <div className="text-lg font-black text-emerald-950">실시간 연계 ✓</div>
        </div>
        <div className="p-3 bg-amber-50/60 rounded-xl space-y-1">
          <div className="text-[11px] font-bold text-amber-700">고교 추천과목 연계</div>
          <div className="text-lg font-black text-amber-950">100% 매핑 완료</div>
        </div>
      </div>

      {/* Local Curated Jobs Section */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            2022 개정 추천 미래 유망 직업 일람
          </h3>
          <p className="text-xs text-slate-500">
            신산업·디지털·바이오 등 전체 {filteredJobs.length}개 직업 중 {displayedJobs.length}개 표시
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedJobs.map((job) => (
          <div
            key={job.id}
            onClick={() => setActiveJob(job)}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-indigo-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                  {job.category}
                </span>
                <span className="inline-flex items-center text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  전망: {job.futureProspects}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {job.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {job.desc}
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-bold text-slate-700 flex items-center">
                  <Sparkles className="w-3 h-3 text-amber-500 mr-1" />
                  <span>핵심 요구 역량:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {job.coreCompetencies.slice(0, 3).map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-amber-50 border border-amber-200/60 text-amber-800 text-[11px] font-bold rounded-lg"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-bold text-slate-700 flex items-center">
                  <BookOpen className="w-3 h-3 text-indigo-500 mr-1" />
                  <span>고교 추천 과목:</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {job.relatedSubjects.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold rounded-lg"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 group-hover:text-indigo-600 transition-colors flex items-center">
                상세보기 <ArrowRight className="w-3 h-3 ml-1" />
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectJobForPlan?.(job.name);
                }}
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-xl transition"
              >
                + 희망직업 등록
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
              <span>직업 열람 진행률:</span>
              <strong className="ml-1.5 text-slate-900 font-extrabold">{displayedJobs.length} / {filteredJobs.length}개</strong>
              <span className="ml-2 text-[11px] text-slate-400 font-normal">
                ({Math.round((displayedJobs.length / (filteredJobs.length || 1)) * 100)}% 열람 완료)
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full sm:w-64 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-slate-900 rounded-full transition-all duration-300"
                style={{ width: `${(displayedJobs.length / (filteredJobs.length || 1)) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {filteredJobs.length > displayedJobs.length && (
              <button
                onClick={() => setLocalDisplayCount(prev => prev + 12)}
                className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-slate-900/20 transition flex items-center space-x-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>+ 12개 더보기</span>
              </button>
            )}

            <button
              onClick={() => {
                setShowAllLocal(!showAllLocal);
                if (!showAllLocal) {
                  setLocalDisplayCount(filteredJobs.length);
                } else {
                  setLocalDisplayCount(12);
                }
              }}
              className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm shadow-2xs transition flex items-center space-x-1.5"
            >
              <Briefcase className="w-4 h-4 text-slate-500" />
              <span>{showAllLocal ? '12개씩 기본 보기' : `전체 직업 한 번에 펼치기 (${filteredJobs.length}개)`}</span>
            </button>
          </div>
        </div>
      </div>

      
{/* Live Results Section (Continuous Load More) */}
      {liveResults.length > 0 && (
        <div className="bg-slate-100/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-emerald-700" /> 전국 직업 정보 실시간 검색 결과
                </h3>
                <p className="text-xs text-slate-600 font-medium">
                  현재 누적 <strong className="text-slate-900 font-bold">{liveResults.length}개</strong> 직업 로드 완료 (더보기를 눌러 전체 직업을 계속 조회할 수 있습니다)
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleLiveSearch(searchQuery, 1, false)}
                disabled={isLoadingLive}
                className="text-xs text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-bold transition flex items-center"
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
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3 hover:border-indigo-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-lg">
                      {item.job_cate || item.job_cl || '직업 정보'}
                    </span>
                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 uppercase font-semibold">{item.source}</span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-base">
                    {item.job_nm || item.job_name || item.jobNm}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.summary || item.job_summary || item.jobDef || '상세 직무 내용과 전망 정보는 공식 포털에서 확인할 수 있습니다.'}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {item.salery && (
                    <div className="text-[11px] text-slate-500 font-medium">
                      평균 연봉: <span className="text-emerald-700 font-bold">{item.salery}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveLiveJob(item)}
                      className="text-xs text-slate-600 hover:text-indigo-600 font-bold"
                    >
                      상세보기 ↗
                    </button>
                    <button
                      onClick={() => onSelectJobForPlan?.(item.job_nm || item.job_name || item.jobNm)}
                      className="text-xs font-bold text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 px-3 py-1.5 rounded-xl border border-indigo-200 transition"
                    >
                      + 희망직업 등록
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
                className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-slate-900/30 transition flex items-center space-x-2"
              >
                {isLoadingLive ? (
                  <RefreshCw className="w-4 h-4 animate-spin mr-2 text-indigo-400" />
                ) : (
                  <PlusCircle className="w-4 h-4 mr-2 text-indigo-400" />
                )}
                <span>직업 정보 100개 더 불러오기 (현재 {liveResults.length}개)</span>
              </button>
            </div>
          )}
        </div>
      )}

      
{/* Local Job Detail Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700">
                    {activeJob.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-xl text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    미래 전망: {activeJob.futureProspects}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {activeJob.name}
                </h2>
              </div>
              <button onClick={() => setActiveJob(null)} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl text-lg font-bold">✕</button>
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 text-indigo-600 mr-1.5" /> 직업 개요 및 하는 일
                </h4>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  {activeJob.desc}
                </p>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" /> 필요 핵심 역량
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeJob.coreCompetencies.map((comp, idx) => (
                    <div key={idx} className="px-3 py-1.5 bg-amber-50 border border-amber-200/80 rounded-xl text-xs font-bold text-amber-900">
                      ✓ {comp}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" /> 고등학교 연계 권장 과목
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeJob.relatedSubjects.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveJob(null);
                        onNavigateToSubject?.(sub);
                      }}
                      className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold text-indigo-700 hover:bg-indigo-600 hover:text-white transition"
                    >
                      {sub} ↗
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-extrabold text-slate-900 mb-2 flex items-center">
                  <GraduationCap className="w-4 h-4 text-indigo-600 mr-1.5" /> 관련 대학 학과
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeJob.relatedDepartments.map((deptId, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveJob(null);
                        onNavigateToMajor?.(getDeptName(deptId));
                      }}
                      className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-800 hover:text-white transition"
                    >
                      {getDeptName(deptId)} ↗
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button onClick={() => setActiveJob(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm">닫기</button>
              <button
                onClick={() => {
                  onSelectJobForPlan?.(activeJob.name);
                  setActiveJob(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center"
              >
                <Bookmark className="w-4 h-4 mr-2" /> 희망 직업으로 등록
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Live API Job Detail Modal */}
      {activeLiveJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {activeLiveJob.job_cate || activeLiveJob.job_cl || '직업 정보'}
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {activeLiveJob.job_nm || activeLiveJob.job_name || activeLiveJob.jobNm}
                </h2>
              </div>
              <button onClick={() => setActiveLiveJob(null)} className="text-slate-400 p-2 rounded-xl text-lg font-bold">✕</button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="font-bold text-slate-700 block text-xs">직무 정의 및 개요</span>
                <p className="text-slate-600 leading-relaxed">
                  {activeLiveJob.summary || activeLiveJob.job_summary || activeLiveJob.jobDef || '상세 정보는 포털에서 확인할 수 있습니다.'}
                </p>
              </div>

              {activeLiveJob.salery && (
                <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-1 text-xs">
                  <span className="font-bold text-emerald-900 block">임금 및 보수 수준</span>
                  <p className="text-emerald-800 font-bold">{activeLiveJob.salery}</p>
                </div>
              )}

              {activeLiveJob.link && (
                <div className="pt-2">
                  <a href={activeLiveJob.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs text-indigo-600 font-bold hover:underline">
                    공식 포털에서 상세 열람하기 <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button onClick={() => setActiveLiveJob(null)} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm">닫기</button>
              <button
                onClick={() => {
                  onSelectJobForPlan?.(activeLiveJob.job_nm || activeLiveJob.job_name || activeLiveJob.jobNm);
                  setActiveLiveJob(null);
                }}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center"
              >
                <Bookmark className="w-4 h-4 mr-2" /> 희망 직업으로 등록
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
