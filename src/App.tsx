/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GuidanceView } from './components/GuidanceView';
import { SubjectExplorer } from './components/SubjectExplorer';
import { MajorJobExplorer } from './components/MajorJobExplorer';
import { AcademicPlanner } from './components/AcademicPlanner';
import { AiConsultant } from './components/AiConsultant';
import { CareerDiagnosis } from './components/CareerDiagnosis';
import { CareerNetApiConfig } from './components/CareerNetApiConfig';
import { GraduationCap, Sparkles, BookOpen, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('guide');
  const [subjectSearchQuery, setSubjectSearchQuery] = useState<string>('');
  const [plannerInitialMajor, setPlannerInitialMajor] = useState<string>('');
  const [plannerInitialCategory, setPlannerInitialCategory] = useState<string>('');
  const [aiStudentContext, setAiStudentContext] = useState<any>(null);

  // CareerNet Open API key management
  const [careernetKey, setCareernetKey] = useState<string>(() => {
    return localStorage.getItem('careernet_api_key') || '';
  });
  const [isApiModalOpen, setIsApiModalOpen] = useState<boolean>(false);

  const handleSaveCareernetKey = (key: string) => {
    localStorage.setItem('careernet_api_key', key);
    setCareernetKey(key);
  };

  const handleResetCareernetKey = () => {
    localStorage.removeItem('careernet_api_key');
    setCareernetKey('');
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
        onOpenApiConfig={() => setIsApiModalOpen(true)}
        isApiKeySaved={!!careernetKey}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'guide' && (
          <GuidanceView onNavigate={(tab) => setActiveTab(tab)} />
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

        {activeTab === 'majors' && (
          <MajorJobExplorer
            apiKey={careernetKey}
            isKeySaved={!!careernetKey}
            onOpenApiModal={() => setIsApiModalOpen(true)}
            onSelectMajorForPlan={handleSelectMajorForPlan}
            onNavigateToSubject={(subName) => {
              setSubjectSearchQuery(subName);
              setActiveTab('subjects');
            }}
          />
        )}

        {activeTab === 'planner' && (
          <AcademicPlanner
            initialMajorTarget={plannerInitialMajor}
            initialCategory={plannerInitialCategory}
            onNavigateToAiConsult={handleNavigateToAiConsult}
          />
        )}

        {activeTab === 'diagnosis' && (
          <CareerDiagnosis
            onApplyDiagnosisToPlanner={handleApplyDiagnosisToPlanner}
          />
        )}

        {activeTab === 'ai_consultant' && (
          <AiConsultant
            initialStudentContext={aiStudentContext}
          />
        )}
      </main>

      {/* CareerNet API Settings Modal */}
      <CareerNetApiConfig
        isOpen={isApiModalOpen}
        onClose={() => setIsApiModalOpen(false)}
        apiKey={careernetKey}
        isKeySaved={!!careernetKey}
        onSaveKey={handleSaveCareernetKey}
        onResetKey={handleResetCareernetKey}
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
                  대구광역시교육청 진로·학업설계 지원 플랫폼
                </div>
                <div className="text-xs text-slate-500">
                  질문이 진로가 되는 대구 진로교육 • 2022 개정 교육과정 고교학점제 지원 시스템
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
              © 2025 Daegu Metropolitan Office of Education. All Rights Reserved.
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
