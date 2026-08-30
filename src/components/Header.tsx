import React, { useState } from 'react';
import { Compass, BookOpen, GraduationCap, Calendar, Sparkles, HelpCircle, Key, CheckCircle2, Search, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isApiKeySaved?: boolean;
  isKeySaved?: boolean;
  onOpenApiConfig?: () => void;
  onOpenApiModal?: () => void;
  onSearch?: (query: string) => void;
  onQuickSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isApiKeySaved,
  isKeySaved,
  onOpenApiConfig,
  onOpenApiModal,
  onSearch,
  onQuickSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const apiKeyActive = isApiKeySaved ?? isKeySaved ?? false;
  const openModal = onOpenApiConfig || onOpenApiModal || (() => {});
  const handleSearch = onSearch || onQuickSearch || (() => {});

  const navItems = [
    { id: 'home', label: '메인 홈', icon: Compass, tag: '종합' },
    { id: 'majors', label: '학과 정보', icon: GraduationCap, tag: '전공' },
    { id: 'subjects', label: '과목 정보', icon: BookOpen, tag: '교과' },
    { id: 'jobs', label: '직업 정보', icon: Compass, tag: '진로' },
    { id: 'recommendations', label: '권장이수과목', icon: CheckCircle2, tag: '대입' },
    { id: 'planner', label: '학업설계(시뮬레이터)', icon: Calendar, tag: '192학점' },
    { id: 'ai_consultant', label: 'AI 진로 멘토', icon: Sparkles, tag: 'AI상담' },
    { id: 'diagnosis', label: '커리어넷 진로검사', icon: HelpCircle, tag: '심리검사' },
    { id: 'guide', label: '고교학점제 안내', icon: BookOpen, tag: '가이드' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      handleSearch(searchInput.trim());
      setActiveTab('subjects');
      setSearchInput('');
      setMobileMenuOpen(false);
    }
  };

  const isCurrentTab = (tabId: string) => {
    if (tabId === 'home') return activeTab === 'home' || !activeTab;
    if (tabId === 'guide') return activeTab === 'guide' || activeTab === 'guidance';
    return activeTab === tabId;
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      {/* Top Bar with Slogan & API Badge */}
      <div className="bg-slate-950/90 border-b border-slate-800/80 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="font-semibold text-indigo-300">질문이 진로가 되는 대구 진로교육</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">2022 개정 교육과정 & 고교학점제 192학점 맞춤 지원</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={openModal}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold transition ${
                apiKeyActive
                  ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900'
                  : 'bg-indigo-950/90 text-indigo-300 border border-indigo-700/60 hover:bg-indigo-900'
              }`}
            >
              <Key className="w-3 h-3 text-indigo-400" />
              <span>{apiKeyActive ? '커리어넷 API 연동 완료' : '커리어넷 API 연동'}</span>
              {apiKeyActive && <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group select-none"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-md shadow-indigo-950/50 group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg lg:text-xl tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  대구 진로·학업설계
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-1.5 py-0.5 rounded">
                  2022 개정
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                대구광역시교육청 고교학점제 맞춤 지원 시스템
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isCurrentTab(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Search Input Box */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="교과목 / 학과 검색..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-slate-800/90 text-sm text-white placeholder-slate-400 pl-9 pr-4 py-2 rounded-xl border border-slate-700/80 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-48 focus:w-60 transition-all duration-200"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
          </form>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="mb-3 relative">
            <input
              type="text"
              placeholder="교과목, 학과, 직업 검색..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full bg-slate-800 text-sm text-white placeholder-slate-400 pl-9 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-indigo-500"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </form>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isCurrentTab(item.id);
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition ${
                  active
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                  {item.tag}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
