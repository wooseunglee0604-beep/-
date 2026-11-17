import React, { useState } from 'react';
import { Sparkles, Gamepad2, ArrowRight, Check, Monitor, Cpu } from 'lucide-react';
import { CuratedPreset, PartItem } from '../types/hardware';
import { CURATED_PRESETS, PARTS_DATABASE } from '../data/hardwareData';

interface CuratedPresetsSectionProps {
  onLoadPreset: (preset: CuratedPreset) => void;
  searchFilter?: string;
}

export const CuratedPresetsSection: React.FC<CuratedPresetsSectionProps> = ({
  onLoadPreset,
  searchFilter = '',
}) => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const tiers = [
    { id: 'all', label: '전체 추천 견적' },
    { id: 'budget', label: '💡 60~70만 입문/사무' },
    { id: 'standard', label: '🎯 110~130만 FHD 종결' },
    { id: 'high', label: '🔥 180~210만 QHD 종결' },
    { id: 'ultra', label: '👑 320만+ 4K 하이엔드' },
  ];

  const filteredPresets = CURATED_PRESETS.filter((preset) => {
    // Tier filter
    if (selectedTier !== 'all' && preset.tier !== selectedTier) {
      return false;
    }
    // Search query filter
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const matchTitle = preset.title.toLowerCase().includes(q);
      const matchTagline = preset.tagline.toLowerCase().includes(q);
      const matchGames = preset.recommendedGames.some((g) => g.toLowerCase().includes(q));
      if (!matchTitle && !matchTagline && !matchGames) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Title & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              월간 추천 견적 큐레이션
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold">
              테크 연구소 공인
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            호환성과 가성비, 실사용 프레임을 완벽히 검증한 티어별 추천 빌드입니다. 원클릭으로 빌더에
            불러와 자유롭게 수정할 수 있습니다.
          </p>
        </div>

        {/* Tier filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {tiers.map((t) => {
            const active = selectedTier === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Preset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPresets.map((preset) => {
          // Resolve part names for quick summary
          const cpuPart = PARTS_DATABASE.cpu.find((p) => p.id === preset.parts.cpu);
          const gpuPart = PARTS_DATABASE.gpu.find((p) => p.id === preset.parts.gpu);
          const ramPart = PARTS_DATABASE.ram.find((p) => p.id === preset.parts.ram);
          const ssdPart = PARTS_DATABASE.ssd.find((p) => p.id === preset.parts.ssd);

          return (
            <div
              key={preset.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-[#141c2e] border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
            >
              <div className="space-y-4">
                {/* Card Top: Target budget badge & Title */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {preset.targetBudget}
                    </span>
                  </div>
                  <h3 className="font-black text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                    {preset.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {preset.tagline}
                  </p>
                </div>

                {/* Target Price */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80">
                  <span className="text-[11px] text-slate-400 block font-medium">총 견적 합계</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">
                    {preset.totalPrice.toLocaleString()} 원
                  </span>
                </div>

                {/* Key specs breakdown with monitor resolution */}
                <div className="space-y-2 text-xs">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">
                    주요 핵심 구성
                  </span>
                  <div className="space-y-1.5 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-slate-400 font-medium shrink-0">• CPU:</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {cpuPart?.name || 'CPU'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-slate-400 font-medium shrink-0">• VGA:</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {gpuPart?.name || 'VGA'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-slate-400 font-medium shrink-0">• RAM:</span>
                      <span className="truncate">{ramPart?.name || 'RAM'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-slate-400 font-medium shrink-0">• SSD:</span>
                      <span className="truncate">{ssdPart?.name || 'SSD'}</span>
                    </div>
                    <div className="flex items-center gap-1.5 truncate text-blue-600 dark:text-blue-400 font-medium pt-0.5">
                      <span className="text-slate-400 font-medium shrink-0">• 모니터 권장:</span>
                      <span className="font-bold truncate">{preset.targetResolution}</span>
                    </div>
                  </div>
                </div>

                {/* Recommended Games tags */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-medium text-slate-400 block mb-1.5">
                    추천 타겟 게임
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {preset.recommendedGames.map((game, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Load into builder button */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onLoadPreset(preset)}
                  className="w-full py-2.5 px-3 text-xs font-bold rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>이 견적으로 빌더 채우기</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
