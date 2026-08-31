import React from 'react';
import { CareerInterviewItem } from '../data/careerInterviewsData';
import { 
  Quote, Sparkles, BookOpen, Award, CheckCircle2, 
  ExternalLink, Heart, Compass, GraduationCap, Building2, User
} from 'lucide-react';

interface CareerInterviewModalProps {
  interview: CareerInterviewItem | null;
  onClose: () => void;
  onNavigateToSubject?: (subjectName: string) => void;
  onNavigateToMajor?: (majorName: string) => void;
}

export const CareerInterviewModal: React.FC<CareerInterviewModalProps> = ({
  interview,
  onClose,
  onNavigateToSubject,
  onNavigateToMajor
}) => {
  if (!interview) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-xs font-black bg-amber-50 text-amber-900 border border-amber-200/80 flex items-center">
                <span className="mr-1">🎤</span> 커리어넷 공식 직업인 인터뷰
              </span>
              <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                {interview.category}
              </span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2 pt-1">
              <span>{interview.jobName}</span>
              <span className="text-sm font-bold text-slate-500 font-normal">직업인과의 생생한 만남</span>
            </h2>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-600">
              <span className="flex items-center"><User className="w-3.5 h-3.5 mr-1 text-indigo-600" />{interview.interviewee}</span>
              <span>•</span>
              <span className="flex items-center"><Building2 className="w-3.5 h-3.5 mr-1 text-slate-500" />{interview.organization}</span>
              <span>•</span>
              <span className="text-indigo-700 font-semibold">{interview.roleTitle}</span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-700 p-2 rounded-xl text-xl font-black transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Mentor Quote Card */}
        <div className="p-5 bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-amber-100/40 rounded-3xl border border-amber-200/90 shadow-2xs relative overflow-hidden">
          <Quote className="w-8 h-8 text-amber-300/80 absolute top-3 right-3" />
          <p className="text-sm sm:text-base font-extrabold text-amber-950 italic leading-relaxed relative z-10">
            {interview.quote}
          </p>
          <div className="mt-3 pt-2 border-t border-amber-200/60 flex items-center justify-between text-xs font-bold text-amber-900">
            <span>현직 선배 멘토의 한마디</span>
            <span className="text-[11px] text-amber-800/80">한국직업능력연구원 커리어넷 제공</span>
          </div>
        </div>

        {/* Core Content Sections */}
        <div className="space-y-5 text-sm">
          {/* 1. What does this job do? */}
          <div>
            <h4 className="font-extrabold text-slate-900 mb-2 flex items-center text-sm">
              <Compass className="w-4 h-4 text-indigo-600 mr-1.5" /> 어떤 일을 하나요? (직무 개요)
            </h4>
            <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100 font-medium">
              {interview.summary}
            </p>
          </div>

          {/* 2. Key Responsibilities */}
          {interview.keyResponsibilities && interview.keyResponsibilities.length > 0 && (
            <div>
              <h4 className="font-extrabold text-slate-900 mb-2 flex items-center text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" /> 주요 일과 및 핵심 업무
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {interview.keyResponsibilities.map((resp, idx) => (
                  <div key={idx} className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl text-xs font-bold text-emerald-950 flex items-start space-x-2">
                    <span className="text-emerald-600 shrink-0 font-black">0{idx + 1}.</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Core Competency & How to become */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/70 space-y-2">
              <div className="text-xs font-bold text-amber-900 flex items-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 mr-1.5" /> 필요 역량 및 자질
              </div>
              <div className="flex flex-wrap gap-1.5">
                {interview.coreCompetency.map((comp, idx) => (
                  <span key={idx} className="px-2.5 py-1 bg-white border border-amber-200 rounded-xl text-[11px] font-extrabold text-amber-900 shadow-2xs">
                    ✓ {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1.5">
              <div className="text-xs font-bold text-indigo-900 flex items-center">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600 mr-1.5" /> 진출 경로 & 자격 준비
              </div>
              <p className="text-xs font-medium text-indigo-950 leading-relaxed">
                {interview.howToBecome}
              </p>
            </div>
          </div>

          {/* 4. 2022 High School Credit Tips */}
          <div className="p-4 bg-indigo-50/80 rounded-2xl border border-indigo-200/80 space-y-1.5">
            <div className="text-xs font-black text-indigo-900 flex items-center">
              <BookOpen className="w-4 h-4 text-indigo-600 mr-1.5" /> 2022 개정 고교학점제 & 세특 준비 조언
            </div>
            <p className="text-xs font-semibold text-indigo-950 leading-relaxed">
              {interview.highSchoolTips}
            </p>
          </div>

          {/* 5. Rewards and Challenges */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
            <div className="text-xs font-bold text-slate-800 flex items-center">
              <Award className="w-4 h-4 text-amber-600 mr-1.5" /> 직업의 보람과 도전 과제
            </div>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              {interview.rewardsAndChallenges}
            </p>
          </div>

          {/* 6. Advice for Students */}
          <div className="p-4.5 bg-rose-50/70 rounded-2xl border border-rose-200/80 space-y-1.5">
            <div className="text-xs font-black text-rose-900 flex items-center">
              <Heart className="w-4 h-4 text-rose-600 mr-1.5" /> 청소년·수험생을 향한 따뜻한 응원의 메시지
            </div>
            <p className="text-xs sm:text-sm font-bold text-rose-950 leading-relaxed">
              "{interview.adviceForStudents}"
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <a
            href={interview.careerNetUrl || "https://www.career.go.kr/cloud/w/interview/job?listType=2"}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
          >
            <span>커리어넷 전국 직업인 인터뷰 포털 바로가기</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-500" />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 transition cursor-pointer"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
