import React from 'react';
import { Search, X, Tag } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeTag: string;
  onTagSelect: (tag: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  activeTag,
  onTagSelect,
}) => {
  const quickTags = [
    { label: '전체', value: '' },
    { label: '🔥 라이젠 7500F', value: '7500F' },
    { label: '👑 7800X3D', value: '7800X3D' },
    { label: '⚡ RTX 4070 SUPER', value: '4070' },
    { label: '🎯 RTX 4060', value: '4060' },
    { label: 'AM5 소켓', value: 'AM5' },
    { label: 'DDR5 32GB', value: 'DDR5' },
    { label: '🎮 배틀그라운드', value: '배틀그라운드' },
    { label: '🎯 발로란트', value: '발로란트' },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Search input field */}
        <div className="relative flex items-center">
          <Search className="absolute left-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="부품명, 그래픽카드, 규격, 게임명 검색 (예: 7500F, RTX 4070, AM5, 배그, 쿨러)..."
            className="w-full pl-11 pr-10 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
              title="검색어 지우기"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Tag Badges */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="flex items-center gap-1 text-slate-400 dark:text-slate-500 font-medium shrink-0">
            <Tag className="w-3.5 h-3.5" />
            <span>추천 태그:</span>
          </span>
          {quickTags.map((t) => {
            const isSelected = activeTag === t.value;
            return (
              <button
                key={t.label}
                onClick={() => {
                  onTagSelect(t.value);
                  onSearchChange(t.value);
                }}
                className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors border font-medium ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
