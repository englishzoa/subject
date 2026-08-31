import React, { useState, useEffect, useMemo } from 'react';
import { AcademicPlan, Subject, SubjectGroup } from '../types';
import { SUBJECTS_DATA } from '../data/curriculumData';
import { ROADMAP_TEMPLATES } from '../data/guidanceData';
import confetti from 'canvas-confetti';
import {
  Calendar, CheckCircle2, AlertTriangle, Sparkles, Download, Printer,
  RotateCcw, Plus, Trash2, BookOpen, Layers, User, Award, Info, Save, FileSpreadsheet
} from 'lucide-react';

interface AcademicPlannerProps {
  initialMajorTarget?: string;
  initialCategory?: string;
  onNavigateToAiConsult?: (context: any) => void;
}

type SemesterKey = 'g1s1' | 'g1s2' | 'g2s1' | 'g2s2' | 'g3s1' | 'g3s2';

const SEMESTERS: { key: SemesterKey; label: string; grade: number; term: number }[] = [
  { key: 'g1s1', label: '1학년 1학기', grade: 1, term: 1 },
  { key: 'g1s2', label: '1학년 2학기', grade: 1, term: 2 },
  { key: 'g2s1', label: '2학년 1학기', grade: 2, term: 1 },
  { key: 'g2s2', label: '2학년 2학기', grade: 2, term: 2 },
  { key: 'g3s1', label: '3학년 1학기', grade: 3, term: 1 },
  { key: 'g3s2', label: '3학년 2학기', grade: 3, term: 2 },
];

export const AcademicPlanner: React.FC<AcademicPlannerProps> = ({
  initialMajorTarget = '',
  initialCategory = '',
  onNavigateToAiConsult
}) => {
  // Default academic plan
  const [plan, setPlan] = useState<AcademicPlan>(() => {
    const saved = localStorage.getItem('daegu_academic_plan');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      studentName: '홍길동',
      grade: 1,
      targetCareer: '인공지능 및 소프트웨어 개발자',
      targetMajor: initialMajorTarget || '컴퓨터·소프트웨어·인공지능학부',
      targetJob: 'AI 모델링 엔지니어',
      semesters: {
        g1s1: ['s_kor_com1', 's_math_com1', 's_eng_com1', 's_soc_com1', 's_sci_com1', 's_sci_exp1', 's_his_com1'],
        g1s2: ['s_kor_com2', 's_math_com2', 's_eng_com2', 's_soc_com2', 's_sci_com2', 's_sci_exp2', 's_his_com2'],
        g2s1: ['s_kor_read', 's_math_alg', 's_eng_eng1', 's_sci_phy', 's_tech_info', 's_soc_world_geo'],
        g2s2: ['s_kor_speech', 's_math_calc1', 's_eng_eng2', 's_math_prob', 's_tech_ai_basic', 's_sci_chem'],
        g3s1: ['s_math_calc2', 's_math_geo', 's_math_ai', 's_sci_em', 's_tech_robot'],
        g3s2: ['s_math_stat_app', 's_soc_problem', 's_sci_climate', 's_kor_lit']
      },
      selfReflection: '질문이 진로가 되는 탐구: 인공지능 윤리와 수학적 최적화 원리를 깊이 있게 학습하여 인간 중심의 AI 기술을 설계하고 싶습니다.',
      updatedAt: new Date().toISOString()
    };
  });

  // Modal State for Adding Subject
  const [addModalSemester, setAddModalSemester] = useState<SemesterKey | null>(null);
  const [modalSearch, setModalSearch] = useState('');
  const [modalGroupFilter, setModalGroupFilter] = useState('all');

  // Save to localStorage whenever plan changes
  useEffect(() => {
    localStorage.setItem('daegu_academic_plan', JSON.stringify(plan));
  }, [plan]);

  const getSubjectById = (id: string): Subject | undefined => {
    return SUBJECTS_DATA.find((s) => s.id === id);
  };

  // Calculations
  const stats = useMemo(() => {
    let totalCourseCredits = 0;
    let basicCredits = 0; // 국어, 수학, 영어, 한국사
    let groupCredits: Record<string, number> = {
      국어: 0,
      수학: 0,
      영어: 0,
      한국사: 0,
      사회: 0,
      과학: 0,
      '기술·가정/정보': 0,
      기타: 0
    };

    const allSubjectIds: string[] = (Object.values(plan.semesters) as string[][]).flat();

    allSubjectIds.forEach((id: string) => {
      const sub = getSubjectById(id);
      if (sub) {
        // In semester view, standard course semester credit (usually sub.credits / 2 or 3~4)
        const cred = sub.credits >= 6 ? sub.credits / 2 : sub.credits;
        totalCourseCredits += cred;

        if (['국어', '수학', '영어', '한국사'].includes(sub.group)) {
          basicCredits += cred;
        }

        if (groupCredits[sub.group] !== undefined) {
          groupCredits[sub.group] += cred;
        } else {
          groupCredits['기타'] += cred;
        }
      }
    });

    const creativeExperientialCredits = 18; // Fixed 창의적체험활동
    const grandTotalCredits = totalCourseCredits + creativeExperientialCredits;

    // Checks
    const isTotalSatisfied = grandTotalCredits >= 192;
    const isBasicUnder50Percent = basicCredits <= 87; // Basic subject cap 50% of 174

    // Hierarchy Warning Checks
    const hierarchyWarnings: string[] = [];

    // Let's trace semester order
    const semesterOrder: SemesterKey[] = ['g1s1', 'g1s2', 'g2s1', 'g2s2', 'g3s1', 'g3s2'];
    const takenBeforeSoFar: Set<string> = new Set();

    semesterOrder.forEach((semKey, semIdx) => {
      const currentList = plan.semesters[semKey];
      currentList.forEach((subId) => {
        const sub = getSubjectById(subId);
        if (sub && sub.prerequisites && sub.prerequisites.length > 0) {
          sub.prerequisites.forEach((preId) => {
            if (!takenBeforeSoFar.has(preId) && !currentList.includes(preId)) {
              const preSub = getSubjectById(preId);
              hierarchyWarnings.push(
                `[${SEMESTERS[semIdx].label}] '${sub.name}' 과목을 수강하기 전에 선이수 과목 '${preSub?.name || preId}'을(를) 먼저 이수해야 합니다.`
              );
            }
          });
        }
      });
      currentList.forEach((subId) => takenBeforeSoFar.add(subId));
    });

    return {
      totalCourseCredits,
      creativeExperientialCredits,
      grandTotalCredits,
      basicCredits,
      isTotalSatisfied,
      isBasicUnder50Percent,
      groupCredits,
      hierarchyWarnings
    };
  }, [plan]);

  // Load Template
  const handleLoadTemplate = (templateId: string) => {
    const tmpl = ROADMAP_TEMPLATES.find((t) => t.id === templateId);
    if (!tmpl) return;

    if (window.confirm(`'${tmpl.title}' 3개년 추천 이수 로드맵으로 변경하시겠습니까? (기존 작성 내용은 대체됩니다.)`)) {
      setPlan((prev) => ({
        ...prev,
        targetMajor: tmpl.title,
        semesters: tmpl.plan,
        updatedAt: new Date().toISOString()
      }));
    }
  };

  // Add Subject to a Semester
  const handleAddSubject = (semKey: SemesterKey, subjectId: string) => {
    if (plan.semesters[semKey].includes(subjectId)) {
      alert('이미 해당 학기에 담긴 과목입니다.');
      return;
    }
    setPlan((prev) => ({
      ...prev,
      semesters: {
        ...prev.semesters,
        [semKey]: [...prev.semesters[semKey], subjectId]
      },
      updatedAt: new Date().toISOString()
    }));
    setAddModalSemester(null);
  };

  // Remove Subject
  const handleRemoveSubject = (semKey: SemesterKey, subjectId: string) => {
    setPlan((prev) => ({
      ...prev,
      semesters: {
        ...prev.semesters,
        [semKey]: prev.semesters[semKey].filter((id) => id !== subjectId)
      },
      updatedAt: new Date().toISOString()
    }));
  };

  // Trigger celebration confetti when 192 credits are met without errors
  const handleCelebrate = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Controls Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                192학점 시뮬레이터
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                3개년 맞춤형 학업계획서 설계
              </h2>
            </div>
            <p className="text-sm text-slate-500 mt-1">
              고교 3년간 이수할 과목을 학기별로 배치하고, 192학점 졸업 요건 및 기초교과 이수 기준, 위계성을 실시간으로 검증합니다.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2.5 rounded-xl bg-slate-100/90 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center space-x-1.5 transition border border-slate-200/80"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>계획서 인쇄 / PDF</span>
            </button>

            <button
              onClick={() => {
                if (onNavigateToAiConsult) {
                  onNavigateToAiConsult({
                    plan,
                    stats
                  });
                }
              }}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center space-x-1.5 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI 계획서 진단 및 피드백</span>
            </button>
          </div>
        </div>

        {/* Template Quick Selection Bar */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase flex items-center">
              <Layers className="w-3.5 h-3.5 text-indigo-600 mr-1.5" />
              계열별 표준 3개년 추천 로드맵 불러오기:
            </span>
            <span className="text-[11px] text-slate-400">클릭 시 192학점 최적 편제가 적용됩니다.</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {ROADMAP_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => handleLoadTemplate(tmpl.id)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 border border-slate-200 hover:border-indigo-300 shadow-2xs transition flex items-center space-x-1.5"
              >
                <span>{tmpl.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Student Profile Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500">학생 성명</label>
            <input
              type="text"
              value={plan.studentName}
              onChange={(e) => setPlan({ ...plan, studentName: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500">현재 학년</label>
            <select
              value={plan.grade}
              onChange={(e) => setPlan({ ...plan, grade: Number(e.target.value) })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
            >
              <option value={1}>고등학교 1학년</option>
              <option value={2}>고등학교 2학년</option>
              <option value={3}>고등학교 3학년</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500">희망 진로 계열 / 전공</label>
            <input
              type="text"
              value={plan.targetMajor}
              onChange={(e) => setPlan({ ...plan, targetMajor: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-slate-500">희망 직업</label>
            <input
              type="text"
              value={plan.targetJob}
              onChange={(e) => setPlan({ ...plan, targetJob: e.target.value })}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
            />
          </div>
        </div>
      </div>

      {/* Real-time 192-Credits Health Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Credits Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-500 uppercase">총 취득 학점 (목표 192)</span>
            <span
              className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                stats.isTotalSatisfied
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}
            >
              {stats.isTotalSatisfied ? '졸업 기준 충족' : `${192 - stats.grandTotalCredits}학점 부족`}
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900">
              {stats.grandTotalCredits}
            </span>
            <span className="text-sm font-bold text-slate-400">/ 192 학점</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                stats.isTotalSatisfied ? 'bg-emerald-500' : 'bg-indigo-600'
              }`}
              style={{ width: `${Math.min(100, (stats.grandTotalCredits / 192) * 100)}%` }}
            ></div>
          </div>

          <div className="text-[11px] text-slate-500 flex justify-between">
            <span>교과: <strong>{stats.totalCourseCredits}학점</strong></span>
            <span>창체: <strong>{stats.creativeExperientialCredits}학점</strong></span>
          </div>
        </div>

        {/* Basic Subjects 50% Rule Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-500 uppercase">기초교과 50% 이내 편성</span>
            <span
              className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                stats.isBasicUnder50Percent
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {stats.isBasicUnder50Percent ? '규정 준수' : '87학점 초과 경고'}
            </span>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl sm:text-4xl font-black text-slate-900">
              {stats.basicCredits}
            </span>
            <span className="text-sm font-bold text-slate-400">/ 최대 87 학점</span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                stats.isBasicUnder50Percent ? 'bg-indigo-600' : 'bg-rose-500'
              }`}
              style={{ width: `${Math.min(100, (stats.basicCredits / 87) * 100)}%` }}
            ></div>
          </div>

          <div className="text-[11px] text-slate-500">
            국·수·영·한국사 합계 (교과 174학점의 50% 이내 유지)
          </div>
        </div>

        {/* Hierarchy & Prerequisites Check */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-slate-500 uppercase">선수과목 위계성 진단</span>
              <span
                className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                  stats.hierarchyWarnings.length === 0
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-800 border border-amber-200'
                }`}
              >
                {stats.hierarchyWarnings.length === 0 ? '위계성 적합' : `${stats.hierarchyWarnings.length}건 점검필요`}
              </span>
            </div>

            <div className="text-sm text-slate-700 font-medium mt-2">
              {stats.hierarchyWarnings.length === 0 ? (
                <div className="flex items-center space-x-2 text-emerald-700 text-xs bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>모든 수학·과학 과목의 선이수 위계가 올바르게 편성되었습니다.</span>
                </div>
              ) : (
                <div className="space-y-1.5 max-h-24 overflow-y-auto">
                  {stats.hierarchyWarnings.map((warn, wIdx) => (
                    <div key={wIdx} className="text-xs text-amber-900 bg-amber-50 p-2 rounded-lg border border-amber-200 flex items-start space-x-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{warn}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {stats.isTotalSatisfied && stats.isBasicUnder50Percent && stats.hierarchyWarnings.length === 0 && (
            <button
              onClick={handleCelebrate}
              className="w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 transition flex items-center justify-center space-x-1.5"
            >
              <Award className="w-4 h-4" />
              <span>완벽한 이수 계획 축하하기 🎉</span>
            </button>
          )}
        </div>
      </div>

      {/* 6-Semester Interactive Academic Plan Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
            3개년 학기별 과목 편성표
          </h3>
          <span className="text-xs text-slate-400">과목 클릭 시 삭제, [+ 과목 추가]로 과목 담기</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SEMESTERS.map((sem) => {
            const currentSubjectIds = plan.semesters[sem.key] || [];
            let semCreditSum = 0;
            currentSubjectIds.forEach((id) => {
              const s = getSubjectById(id);
              if (s) {
                semCreditSum += s.credits >= 6 ? s.credits / 2 : s.credits;
              }
            });

            return (
              <div
                key={sem.key}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Semester Header */}
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                      <span className="font-extrabold text-slate-900 text-sm">
                        {sem.label}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md">
                      {semCreditSum}학점
                    </span>
                  </div>

                  {/* Subject List */}
                  <div className="space-y-2 min-h-[160px]">
                    {currentSubjectIds.map((subId) => {
                      const subject = getSubjectById(subId);
                      if (!subject) return null;

                      const cred = subject.credits >= 6 ? subject.credits / 2 : subject.credits;

                      return (
                        <div
                          key={subId}
                          className="group p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50/70 border border-slate-200/80 hover:border-rose-300 transition flex items-center justify-between text-xs"
                        >
                          <div className="space-y-0.5 truncate pr-2">
                            <div className="font-bold text-slate-800 group-hover:text-rose-900 truncate">
                              {subject.name}
                            </div>
                            <div className="text-[10px] text-slate-400 flex items-center space-x-1.5">
                              <span>{subject.group}</span>
                              <span>•</span>
                              <span>{subject.type}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 shrink-0">
                            <span className="font-extrabold text-[11px] text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                              {cred}학점
                            </span>
                            <button
                              onClick={() => handleRemoveSubject(sem.key, subId)}
                              title="과목 삭제"
                              className="text-slate-300 group-hover:text-rose-600 p-1 hover:bg-rose-100 rounded-md transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    {currentSubjectIds.length === 0 && (
                      <div className="h-32 flex flex-col items-center justify-center text-xs text-slate-400 border-2 border-dashed border-slate-200 rounded-2xl">
                        <span>편성된 과목이 없습니다.</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Add Course Button */}
                <button
                  onClick={() => setAddModalSemester(sem.key)}
                  className="w-full py-2.5 rounded-xl bg-slate-100/80 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-bold text-xs border border-slate-200/80 hover:border-indigo-300 transition flex items-center justify-center space-x-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>과목 추가하기</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Student Self-Reflection & Inquiry Note */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 text-slate-900 font-extrabold text-base">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span>질문이 진로가 되는 자기성찰 & 탐구 메모</span>
        </div>
        <p className="text-xs text-slate-500">
          이수 계획을 세우며 생긴 나만의 핵심 질문과 고등학교 3년간 집중하고 싶은 탐구 주제를 자유롭게 기록하세요.
        </p>
        <textarea
          rows={3}
          value={plan.selfReflection}
          onChange={(e) => setPlan({ ...plan, selfReflection: e.target.value })}
          placeholder="예: 인공지능 기술이 발전함에 따라 미적분학과 통계학이 알고리즘 최적화에 어떻게 쓰이는지 탐구하고 싶습니다."
          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs leading-relaxed focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
        ></textarea>
      </div>

      {/* Add Subject Modal */}
      {addModalSemester && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-800 space-y-5">
            <button
              onClick={() => setAddModalSemester(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
            >
              ✕
            </button>

            <div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">
                {SEMESTERS.find((s) => s.key === addModalSemester)?.label}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1.5">
                이수할 과목 선택
              </h3>
              <p className="text-xs text-slate-500">
                2022 개정 보통교과 목록에서 추가할 과목을 선택하세요.
              </p>
            </div>

            {/* Filter in Modal */}
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="과목명, 핵심 개념 검색..."
                value={modalSearch}
                onChange={(e) => setModalSearch(e.target.value)}
                className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
              />
              <select
                value={modalGroupFilter}
                onChange={(e) => setModalGroupFilter(e.target.value)}
                className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-1 focus:ring-indigo-600 transition"
              >
                <option value="all">전체 교과군</option>
                <option value="국어">국어</option>
                <option value="수학">수학</option>
                <option value="영어">영어</option>
                <option value="사회">사회</option>
                <option value="과학">과학</option>
                <option value="기술·가정/정보">기술·정보</option>
              </select>
            </div>

            {/* Subject Choices List */}
            <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
              {SUBJECTS_DATA.filter((sub) => {
                const matchG = modalGroupFilter === 'all' || sub.group === modalGroupFilter;
                const matchS =
                  !modalSearch ||
                  sub.name.includes(modalSearch) ||
                  sub.desc.includes(modalSearch);
                return matchG && matchS;
              }).map((sub) => {
                const isAlreadyInSem = plan.semesters[addModalSemester]?.includes(sub.id);
                const cred = sub.credits >= 6 ? sub.credits / 2 : sub.credits;

                return (
                  <div
                    key={sub.id}
                    className={`p-3.5 rounded-2xl border transition flex items-center justify-between ${
                      isAlreadyInSem
                        ? 'bg-slate-100 border-slate-200 opacity-60'
                        : 'bg-white hover:bg-indigo-50/70 border-slate-200/80 hover:border-indigo-300'
                    }`}
                  >
                    <div className="space-y-1 pr-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-sm text-slate-900">{sub.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-600">
                          {sub.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{sub.desc}</p>
                    </div>

                    <button
                      onClick={() => handleAddSubject(addModalSemester, sub.id)}
                      disabled={isAlreadyInSem}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 ${
                        isAlreadyInSem
                          ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
                      }`}
                    >
                      {isAlreadyInSem ? '이미 추가됨' : `+ 담기 (${cred}학점)`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
