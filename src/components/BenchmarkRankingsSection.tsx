import React, { useState } from 'react';
import { Trophy, TrendingUp, Cpu, MonitorPlay, Sparkles } from 'lucide-react';
import { BENCHMARK_RANKINGS } from '../data/hardwareData';

interface BenchmarkRankingsSectionProps {
  searchFilter?: string;
}

export const BenchmarkRankingsSection: React.FC<BenchmarkRankingsSectionProps> = ({
  searchFilter = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<'cpu' | 'gpu'>('cpu');

  const filteredRankings = BENCHMARK_RANKINGS.filter((item) => {
    if (item.category !== activeCategory) return false;
    if (searchFilter.trim()) {
      return item.name.toLowerCase().includes(searchFilter.toLowerCase());
    }
    return true;
  });

  const maxScore = Math.max(...filteredRankings.map((r) => r.score), 1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 sm:space-y-10">
      {/* Title & Category Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-2">
        <div className="space-y-1.5">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              부품 벤치마크 & 실사용 게임 프레임 랭킹
            </h2>
            <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800/60 shadow-2xs">
              실측 벤치 DB
            </span>
          </div>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            단순 스펙 숫자가 아닌, 실제 주요 게임(배그/로아/스팀 AAA) 평균 프레임과 가성비 지수를
            비교합니다.
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex p-1.5 bg-slate-100 dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 w-fit gap-1.5 shadow-2xs shrink-0">
          <button
            onClick={() => setActiveCategory('cpu')}
            className={`flex items-center gap-2.5 px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer ${
              activeCategory === 'cpu'
                ? 'bg-white dark:bg-[#141c2e] text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>CPU 게이밍 랭킹</span>
          </button>
          <button
            onClick={() => setActiveCategory('gpu')}
            className={`flex items-center gap-2.5 px-5 py-2.5 text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer ${
              activeCategory === 'gpu'
                ? 'bg-white dark:bg-[#141c2e] text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <MonitorPlay className="w-4 h-4" />
            <span>GPU 3DMark / 그래픽 랭킹</span>
          </button>
        </div>
      </div>

      {/* Rankings Table Card */}
      <div className="rounded-3xl bg-white dark:bg-[#141c2e] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm uppercase tracking-wider">
              <tr>
                <th className="py-5 px-6 sm:px-8 w-24 text-center">순위</th>
                <th className="py-5 px-6 sm:px-8 min-w-[240px]">모델명</th>
                <th className="py-5 px-6 sm:px-8 min-w-[220px]">벤치마크 점수</th>
                <th className="py-5 px-6 sm:px-8 text-center min-w-[130px]">평균 FPS</th>
                <th className="py-5 px-6 sm:px-8 text-right min-w-[150px]">출시/실판매가</th>
                <th className="py-5 px-6 sm:px-8 text-right min-w-[130px]">가성비 지수</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {filteredRankings.map((item) => {
                const percentage = Math.round((item.score / maxScore) * 100);

                return (
                  <tr
                    key={item.name}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    {/* Rank number */}
                    <td className="py-5 sm:py-6 px-6 sm:px-8 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full font-black text-xs sm:text-sm shadow-xs ${
                          item.rank === 1
                            ? 'bg-amber-400 text-slate-900 shadow-sm ring-2 ring-amber-300/40'
                            : item.rank === 2
                            ? 'bg-slate-300 text-slate-800 ring-2 ring-slate-200/40'
                            : item.rank === 3
                            ? 'bg-amber-700/70 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {item.rank}
                      </span>
                    </td>

                    {/* Name & Badge */}
                    <td className="py-5 sm:py-6 px-6 sm:px-8">
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Score Bar */}
                    <td className="py-5 sm:py-6 px-6 sm:px-8 min-w-[220px]">
                      <div className="space-y-1.5">
                        <div className="flex justify-between font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <span>{item.score.toLocaleString()} 점</span>
                          <span className="text-slate-400 font-semibold">{percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Game FPS Average */}
                    <td className="py-5 sm:py-6 px-6 sm:px-8 text-center">
                      <span className="font-black text-base sm:text-lg text-emerald-600 dark:text-emerald-400">
                        {item.gameFpsAverage} FPS
                      </span>
                    </td>

                    {/* Price */}
                    <td className="py-5 sm:py-6 px-6 sm:px-8 text-right font-black text-sm sm:text-base text-slate-900 dark:text-white">
                      {item.price.toLocaleString()} 원
                    </td>

                    {/* Cost efficiency */}
                    <td className="py-5 sm:py-6 px-6 sm:px-8 text-right">
                      <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold">
                        점당 {item.costPerPoint}원
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
