import React, { useState } from 'react';
import { Crosshair, Target, Shield, Cpu, CheckSquare, Square, Zap, Info } from 'lucide-react';
import { GAME_OPTIMIZATION_GUIDES } from '../data/hardwareData';

interface GameOptimizationSectionProps {
  searchFilter?: string;
}

const GAME_LOGOS: Record<string, { logoSrc: string; alt: string; accentBorder: string; bgStyle: string }> = {
  'guide-pubg': {
    logoSrc: '/assets/aistudio/image_ba071ae0.png',
    alt: '배틀그라운드 공식 로고',
    accentBorder: 'border-amber-500/40',
    bgStyle: 'bg-white p-1.5',
  },
  'guide-valorant': {
    logoSrc: '/assets/aistudio/image_848bc0f7.png',
    alt: '발로란트 공식 로고',
    accentBorder: 'border-rose-500/40',
    bgStyle: 'bg-white p-1.5',
  },
  'guide-overwatch': {
    logoSrc: '/assets/aistudio/image_608134ba.png',
    alt: '오버워치 2 공식 로고',
    accentBorder: 'border-orange-500/40',
    bgStyle: 'bg-white p-1.5',
  },
  'guide-windows': {
    logoSrc: '/src/assets/images/windows_os_logo_1794459834055.jpg',
    alt: '윈도우 11 공식 로고',
    accentBorder: 'border-blue-500/40',
    bgStyle: 'bg-slate-900',
  },
};

export const GameOptimizationSection: React.FC<GameOptimizationSectionProps> = ({
  searchFilter = '',
}) => {
  const [selectedGameId, setSelectedGameId] = useState<string>('guide-pubg');
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectedGuide =
    GAME_OPTIMIZATION_GUIDES.find((g) => g.id === selectedGameId) || GAME_OPTIMIZATION_GUIDES[0];

  const getGameIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-amber-500" />;
      case 'Target':
        return <Target className="w-5 h-5 text-rose-500" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-blue-500" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Title */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            게임별 실전 프레임 최적화 & 인풋랙 가이드
          </h2>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 font-semibold">
            Input Lag 0ms 지향
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          눈쟁이 스타일의 철저한 인게임 옵션 다이어트, 엔비디아 제어판 최적 세팅, 윈도우 인풋랙 절감
          체크리스트입니다.
        </p>
      </div>

      {/* Game Selector Buttons with Uploaded Official Game Logos & Increased Vertical Height */}
      <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-3 scrollbar-none">
        {GAME_OPTIMIZATION_GUIDES.map((guide) => {
          const isActive = guide.id === selectedGuide.id;
          const logoInfo = GAME_LOGOS[guide.id];

          return (
            <button
              key={guide.id}
              onClick={() => setSelectedGameId(guide.id)}
              className={`flex items-center gap-3.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl font-extrabold text-sm sm:text-base whitespace-nowrap border transition-all cursor-pointer min-h-[64px] sm:min-h-[72px] ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/30 scale-[1.02]'
                  : 'bg-white dark:bg-[#141c2e] text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/60 shadow-xs'
              }`}
            >
              {logoInfo ? (
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border ${
                    isActive
                      ? 'border-white/60 shadow-sm'
                      : 'border-slate-200 dark:border-slate-700'
                  } ${logoInfo.bgStyle} flex items-center justify-center`}
                >
                  <img
                    src={logoInfo.logoSrc}
                    alt={logoInfo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              ) : (
                getGameIcon(guide.iconName)
              )}
              <span className="tracking-tight">{guide.gameTitle.split('(')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Guide Content Card */}
      <div className="rounded-2xl bg-white dark:bg-[#141c2e] border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
        {/* Game Header with Official Logo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-4">
            {GAME_LOGOS[selectedGuide.id] && (
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700 shadow-md ${
                  GAME_LOGOS[selectedGuide.id].bgStyle
                } flex items-center justify-center`}
              >
                <img
                  src={GAME_LOGOS[selectedGuide.id].logoSrc}
                  alt={GAME_LOGOS[selectedGuide.id].alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            )}
            <div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {selectedGuide.genre}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                {selectedGuide.gameTitle}
              </h3>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 max-w-sm">
            <span className="font-bold text-slate-700 dark:text-slate-300">권장 사양 지표: </span>
            {selectedGuide.recommendedSpecs}
          </div>
        </div>

        {/* In-Game Graphic Settings Table */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-blue-500" />
              1. 인게임 그래픽 & 화면 필수 세팅
            </h4>
            <span className="text-[11px] text-slate-400">항목을 클릭하여 적용 완료 체크</span>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
            {selectedGuide.inGameSettings.map((item, idx) => {
              const checkId = `${selectedGuide.id}-ingame-${idx}`;
              const isChecked = !!completedItems[checkId];

              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(checkId)}
                  className={`p-3.5 flex items-start gap-3 cursor-pointer transition-colors ${
                    isChecked
                      ? 'bg-blue-50/40 dark:bg-blue-950/20'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-900/40'
                  }`}
                >
                  <button className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {item.category} • {item.setting}
                      </span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded w-fit">
                        {item.recommended}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NVIDIA Control Panel Settings Table */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-emerald-500" />
            2. NVIDIA 드라이버 제어판 3D 설정
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedGuide.nvidiaDriverSettings.map((item, idx) => {
              const checkId = `${selectedGuide.id}-nvidia-${idx}`;
              const isChecked = !!completedItems[checkId];

              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(checkId)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isChecked
                      ? 'border-emerald-500/50 bg-emerald-50/30 dark:bg-emerald-950/20'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40'
                  }`}
                >
                  <button className="mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {item.setting}
                    </p>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      권장값: {item.value}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{item.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pro Tip Box */}
        <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3 text-xs leading-relaxed text-amber-900 dark:text-amber-200">
          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">눈쟁이 프로 팁: </span>
            <span>{selectedGuide.proTip}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
