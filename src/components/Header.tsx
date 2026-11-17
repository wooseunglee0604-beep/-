import React from 'react';
import { Sun, Moon, Cpu, ShieldCheck, Layers } from 'lucide-react';

export type ActiveTab = 'curated' | 'builder' | 'optimization' | 'benchmarks';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  selectedPartsCount: number;
  totalCompatibilityStatus: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  isDarkMode,
  onToggleTheme,
  selectedPartsCount,
  totalCompatibilityStatus,
}) => {
  const tabs = [
    { id: 'curated' as ActiveTab, label: '추천 견적 큐레이션', icon: '🖥️' },
    { id: 'builder' as ActiveTab, label: '실시간 견적 & 호환성 진단', icon: '🛠️' },
    { id: 'optimization' as ActiveTab, label: '게임별 최적화 가이드', icon: '⚡' },
    { id: 'benchmarks' as ActiveTab, label: '부품 벤치 랭킹', icon: '📊' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#0b1329] text-white shadow-md backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with brand & theme toggle */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-black text-xl shadow-md shadow-blue-500/30">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  눈쟁DB
                </span>
                <span className="text-xs px-2 py-0.5 font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  v1.0 Pro
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                PC Hardware & Real-time Compatibility Archive
              </p>
            </div>
          </div>

          {/* Quick status & Theme toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-300 bg-slate-800/90 px-3 py-1.5 rounded-lg border border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>실시간 부품 호환성 엔진 가동</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">DB 2026.11 기준</span>
            </div>

            {/* Quick builder badge */}
            <button
              onClick={() => onTabChange('builder')}
              className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-slate-700 bg-slate-800/80 hover:border-blue-400 text-slate-200 transition-colors"
              title="현재 견적 빌더 상태"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>장착 {selectedPartsCount}/8</span>
              <span
                className={`w-2 h-2 rounded-full ${
                  totalCompatibilityStatus ? 'bg-emerald-400' : 'bg-rose-400'
                }`}
              />
            </button>

            {/* Dark / Light Mode Switch */}
            <button
              onClick={onToggleTheme}
              aria-label="테마 전환"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
              title={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-400" />
              )}
            </button>
          </div>
        </div>

        {/* Tab navigation row */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.id === 'builder' && selectedPartsCount > 0 && (
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[11px] ${
                      isActive
                        ? 'bg-blue-800 text-white'
                        : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    {selectedPartsCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
