/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeDashboard } from './components/HomeDashboard';
import { GuidanceView } from './components/GuidanceView';
import { SubjectExplorer } from './components/SubjectExplorer';
import { MajorExplorer } from './components/MajorExplorer';
import { JobExplorer } from './components/JobExplorer';
import { RecommendedSubjectsView } from './components/RecommendedSubjectsView';
import { AcademicPlanner } from './components/AcademicPlanner';
import { AiConsultant } from './components/AiConsultant';
import { CareerNetTest } from './components/CareerNetTest';
import { ApiSettingsModal } from './components/ApiSettingsModal';
import { GraduationCap, Sparkles, BookOpen, Compass, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [subjectSearchQuery, setSubjectSearchQuery] = useState<string>('');
  const [plannerInitialMajor, setPlannerInitialMajor] = useState<string>('');
  const [plannerInitialCategory, setPlannerInitialCategory] = useState<string>('');
  const [aiStudentContext, setAiStudentContext] = useState<any>(null);

  // CareerNet & Work24 Open API key management (Provided by user)
  const DEFAULT_WORK24_JOB_KEY = '6e4fa144-d61e-45b5-9230-e558b8a02d65';
  const DEFAULT_WORK24_MAJOR_KEY = '6b8960ad-4aa4-4754-8971-dc93c509ddbd';

  const [careernetKey, setCareernetKey] = useState<string>(() => {
    return localStorage.getItem('careernet_api_key') || '';
  });
  const [work24JobKey, setWork24JobKey] = useState<string>(() => {
    return localStorage.getItem('work24_job_key') || DEFAULT_WORK24_JOB_KEY;
  });
  const [work24MajorKey, setWork24MajorKey] = useState<string>(() => {
    return localStorage.getItem('work24_major_key') || DEFAULT_WORK24_MAJOR_KEY;
  });
  const [isApiModalOpen, setIsApiModalOpen] = useState<boolean>(false);

  const handleSaveKeys = (cKey: string, wJobKey: string, wMajorKey: string) => {
    localStorage.setItem('careernet_api_key', cKey);
    localStorage.setItem('work24_job_key', wJobKey);
    localStorage.setItem('work24_major_key', wMajorKey);
    setCareernetKey(cKey);
    setWork24JobKey(wJobKey);
    setWork24MajorKey(wMajorKey);
  };

  const handleResetKeys = () => {
    localStorage.removeItem('careernet_api_key');
    localStorage.removeItem('work24_job_key');
    localStorage.removeItem('work24_major_key');
    setCareernetKey('');
    setWork24JobKey(DEFAULT_WORK24_JOB_KEY);
    setWork24MajorKey(DEFAULT_WORK24_MAJOR_KEY);
  };

  // Header quick search router
  const handleGlobalSearch = (query: string) => {
    setSubjectSearchQuery(query);
    setActiveTab('subjects');
  };

  // Navigation callbacks
  const handleSelectMajorForPlan = (majorName: string, category: string) => {
    setPlannerInitialMajor(majorName);
    setPlannerInitialCategory(category);
    setActiveTab('planner');
  };

  const handleSelectJobForPlan = (jobName: string) => {
    setActiveTab('planner');
  };

  const handleApplyDiagnosisToPlanner = (majorTitle: string, recommendedSubjects: string[]) => {
    setPlannerInitialMajor(majorTitle);
    setActiveTab('planner');
  };

  const handleNavigateToAiConsult = (context: any) => {
    setAiStudentContext(context);
    setActiveTab('ai_consultant');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleGlobalSearch}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {(activeTab === 'home' || !activeTab) && (
          <HomeDashboard
            onNavigate={(tabId) => setActiveTab(tabId)}
            onSearchSubject={(subName) => {
              setSubjectSearchQuery(subName);
              setActiveTab('subjects');
            }}
            onSelectMajorForPlan={handleSelectMajorForPlan}
          />
        )}

        {activeTab === 'majors' && (
          <MajorExplorer
            careernetKey={careernetKey}
            work24Key={work24MajorKey}
            onSelectMajorForPlan={handleSelectMajorForPlan}
            onNavigateToSubject={(subName) => {
              setSubjectSearchQuery(subName);
              setActiveTab('subjects');
            }}
            onNavigateToJob={(jobName) => {
              setActiveTab('jobs');
            }}
          />
        )}

        {activeTab === 'subjects' && (
          <SubjectExplorer
            initialSearchQuery={subjectSearchQuery}
            onSelectSubjectForPlan={(subId) => {
              setActiveTab('planner');
            }}
            onNavigateToMajor={(majorName) => {
              setActiveTab('majors');
            }}
          />
        )}

        {activeTab === 'jobs' && (
          <JobExplorer
            careernetKey={careernetKey}
            work24Key={work24JobKey}
            onNavigateToMajor={(majorName) => {
              setActiveTab('majors');
            }}
            onNavigateToSubject={(subName) => {
              setSubjectSearchQuery(subName);
              setActiveTab('subjects');
            }}
            onSelectJobForPlan={handleSelectJobForPlan}
          />
        )}

        {activeTab === 'recommendations' && (
          <RecommendedSubjectsView
            onNavigateToSubject={(subName) => {
              setSubjectSearchQuery(subName);
              setActiveTab('subjects');
            }}
            onNavigateToMajor={(majorName) => {
              setActiveTab('majors');
            }}
            onNavigateToPlanner={() => setActiveTab('planner')}
          />
        )}

        {activeTab === 'planner' && (
          <AcademicPlanner
            initialMajorTarget={plannerInitialMajor}
            initialCategory={plannerInitialCategory}
            onNavigateToAiConsult={handleNavigateToAiConsult}
          />
        )}

        {activeTab === 'ai_consultant' && (
          <AiConsultant
            initialStudentContext={aiStudentContext}
          />
        )}

        {activeTab === 'diagnosis' && (
          <CareerNetTest
            onApplyDiagnosisToPlanner={handleApplyDiagnosisToPlanner}
            onNavigateToMajor={(majorName) => {
              setActiveTab('majors');
            }}
            onNavigateToSubject={(subName) => {
              setSubjectSearchQuery(subName);
              setActiveTab('subjects');
            }}
          />
        )}

        {activeTab === 'guide' && (
          <GuidanceView onNavigate={(tab) => setActiveTab(tab)} />
        )}
      </main>

      {/* API Settings Modal */}
      <ApiSettingsModal
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
        careernetKey={careernetKey}
        work24JobKey={work24JobKey}
        work24MajorKey={work24MajorKey}
        onSaveKeys={handleSaveKeys}
        onResetKeys={handleResetKeys}
      />

      {/* Platform Footer */}
      <footer className="bg-white border-t border-slate-200/80 mt-12 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black shadow-md shadow-indigo-600/20">
                D
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">
                  대구광역시교육청 진로·학업설계 종합 플랫폼
                </div>
                <div className="text-xs text-slate-500">
                  질문이 진로가 되는 대구 진로교육 • 대구광역시교육청 중등교육과 장학사 박태영
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
              <a
                href="https://www.dge.go.kr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition flex items-center"
              >
                대구광역시교육청 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a
                href="https://www.career.go.kr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition flex items-center"
              >
                커리어넷 (CareerNet) <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a
                href="https://www.work24.go.kr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition flex items-center"
              >
                고용24 (워크넷) <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a
                href="https://www.edunet.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition flex items-center"
              >
                에듀넷 티-클리어 <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              © 2026 Daegu Metropolitan Office of Education. All Rights Reserved.
            </div>
            <div className="flex items-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1" />
              <span>고교학점제 192학점 이수 기준 및 2022 개정 보통교과 교육과정 데이터 탑재</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
