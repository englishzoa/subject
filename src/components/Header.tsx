import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'majors', label: '학과 정보' },
    { id: 'subjects', label: '과목 정보' },
    { id: 'jobs', label: '직업 정보' },
    { id: 'recommendations', label: '권장이수과목' },
    { id: 'planner', label: '학업설계' },
    { id: 'ai_consultant', label: 'AI 진로 멘토' },
    { id: 'diagnosis', label: '진로심리검사' },
    { id: 'guide', label: '고교학점제 안내' },
  ];

  const isCurrentTab = (tabId: string) => {
    if (tabId === 'home') return activeTab === 'home' || !activeTab;
    if (tabId === 'guide') return activeTab === 'guide' || activeTab === 'guidance';
    return activeTab === tabId;
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Single Line Title */}
          <div
            className="flex items-center cursor-pointer group select-none flex-shrink-0 mr-4 lg:mr-8"
            onClick={() => setActiveTab('home')}
          >
            <span className="font-extrabold text-xl lg:text-2xl tracking-tight text-white group-hover:text-indigo-300 transition-colors whitespace-nowrap">
              대구 진로교육
            </span>
          </div>

          {/* Desktop Nav - Single Line */}
          <nav className="hidden xl:flex items-center space-x-1 flex-1 justify-end overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const active = isCurrentTab(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-150 ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Nav for Medium-Large screens with compact spacing */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-0.5 flex-1 justify-end overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const active = isCurrentTab(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-150 ${
                    active
                      ? 'bg-indigo-600 text-white shadow-sm ring-1 ring-indigo-400/50'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-5 space-y-1 animate-fadeIn">
          {navItems.map((item) => {
            const active = isCurrentTab(item.id);
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
                  active
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

