import React from 'react';
import {
  Cpu,
  Fan,
  CircuitBoard,
  Layers,
  MonitorPlay,
  HardDrive,
  Box,
  Zap,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Copy,
  RotateCcw,
  Plus,
  RefreshCw,
  Trash2,
  Check,
  ShieldCheck,
  Sparkles,
  Info,
} from 'lucide-react';
import { PartCategory, PartItem, CompatibilityReport } from '../types/hardware';
import { CATEGORY_LABELS, CATEGORY_DEFAULT_IMAGES } from '../data/hardwareData';

interface QuotationBuilderProps {
  selectedParts: Partial<Record<PartCategory, PartItem>>;
  compatibilityReport: CompatibilityReport;
  onOpenSelectModal: (category: PartCategory) => void;
  onRemovePart: (category: PartCategory) => void;
  onResetQuotation: () => void;
  onLoadStandardPreset: () => void;
  onCopyQuotation: () => void;
}

const CATEGORY_ICONS: Record<PartCategory, React.ReactNode> = {
  cpu: <Cpu className="w-5 h-5 text-blue-500" />,
  cooler: <Fan className="w-5 h-5 text-cyan-500" />,
  motherboard: <CircuitBoard className="w-5 h-5 text-indigo-500" />,
  ram: <Layers className="w-5 h-5 text-purple-500" />,
  gpu: <MonitorPlay className="w-5 h-5 text-emerald-500" />,
  ssd: <HardDrive className="w-5 h-5 text-amber-500" />,
  case: <Box className="w-5 h-5 text-slate-500" />,
  power: <Zap className="w-5 h-5 text-yellow-500" />,
};

const CATEGORIES_ORDER: PartCategory[] = [
  'cpu',
  'cooler',
  'motherboard',
  'ram',
  'gpu',
  'ssd',
  'case',
  'power',
];

export const QuotationBuilder: React.FC<QuotationBuilderProps> = ({
  selectedParts,
  compatibilityReport,
  onOpenSelectModal,
  onRemovePart,
  onResetQuotation,
  onLoadStandardPreset,
  onCopyQuotation,
}) => {
  const selectedCount = Object.values(selectedParts).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              실시간 견적 빌더 & 부품 호환성 진단
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold">
              Live Engine
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            부품을 교체할 때마다 소켓 규격, 쿨러/그래픽카드 간섭, 파워 용량 여유율을 100% 실시간으로
            계산합니다.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onLoadStandardPreset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>국민 추천 견적 채우기</span>
          </button>
          <button
            onClick={onResetQuotation}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:text-rose-600 dark:hover:text-rose-400 hover:border-rose-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>초기화</span>
          </button>
        </div>
      </div>

      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 8 Part Slots (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
            <span>필수 부품 슬롯 ({selectedCount}/8 장착 완료)</span>
            <span>최신 다나와/컴퓨존 기준 실시간 연동</span>
          </div>

          {CATEGORIES_ORDER.map((category) => {
            const part = selectedParts[category];
            const catInfo = CATEGORY_LABELS[category];

            return (
              <div
                key={category}
                className={`p-4 rounded-xl border transition-all ${
                  part
                    ? 'bg-white dark:bg-[#141c2e] border-slate-200 dark:border-slate-800 shadow-sm'
                    : 'bg-slate-50/70 dark:bg-slate-900/30 border-dashed border-slate-300 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <div className="flex items-start sm:items-center justify-between gap-4">
                  {/* Category photo & label */}
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    {/* Left: Product Thumbnail Photo or Empty Category Slot */}
                    <div
                      onClick={() => onOpenSelectModal(category)}
                      className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 flex items-center justify-center cursor-pointer group/thumb shadow-xs"
                      title="클릭하여 부품 변경/선택"
                    >
                      {part ? (
                        <>
                          <img
                            src={part.imageUrl || CATEGORY_DEFAULT_IMAGES[category]}
                            alt={part.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-center group-hover/thumb:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/30 transition-colors flex items-center justify-center">
                            <RefreshCw className="w-4 h-4 text-white opacity-0 group-hover/thumb:opacity-100 transition-opacity drop-shadow-md" />
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 group-hover/thumb:text-blue-500 transition-colors">
                          {CATEGORY_ICONS[category]}
                          <span className="text-[9px] font-semibold mt-0.5">+추가</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {catInfo.label}
                        </span>
                        {part?.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300">
                            {part.badge}
                          </span>
                        )}
                        {part?.socket && (
                          <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            소켓: {part.socket}
                          </span>
                        )}
                      </div>

                      {part ? (
                        <div className="mt-0.5">
                          <p className="font-semibold text-sm text-slate-900 dark:text-white truncate">
                            {part.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {part.specs}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 italic">
                          선택된 부품이 없습니다. 부품을 추가해 주세요.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    {part ? (
                      <>
                        <div className="text-right mr-2 hidden sm:block">
                          <span className="font-bold text-sm text-slate-900 dark:text-white">
                            {part.price === 0 ? '0원' : `${part.price.toLocaleString()} 원`}
                          </span>
                        </div>
                        <button
                          onClick={() => onOpenSelectModal(category)}
                          className="px-2.5 py-1.5 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                          title="부품 변경"
                        >
                          <RefreshCw className="w-3.5 h-3.5 inline mr-1" />
                          <span>변경</span>
                        </button>
                        <button
                          onClick={() => onRemovePart(category)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                          title="부품 제거"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => onOpenSelectModal(category)}
                        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>부품 선택</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Summary & Real-time Compatibility Panel (lg:col-span-5) */}
        <div className="lg:col-span-5 sticky top-24 space-y-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#141c2e] border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
            {/* Header: Total Price & Specs */}
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                총 예상 견적 금액
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  {compatibilityReport.totalPrice.toLocaleString()}
                  <span className="text-sm font-semibold ml-1 text-slate-600 dark:text-slate-400">
                    원
                  </span>
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {selectedCount} / 8 부품
                </span>
              </div>
            </div>

            {/* Wattage Calculation Meter */}
            <div className="space-y-2 bg-slate-50 dark:bg-slate-900/60 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  시스템 예상 최대 소비전력
                </span>
                <span className="font-bold text-slate-900 dark:text-white">
                  약 {compatibilityReport.estimatedWattage} W
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  안정성 권장 파워 정격
                </span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  최소 {compatibilityReport.recommendedWattage} W 이상
                </span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  현재 선택된 파워
                </span>
                <span
                  className={`font-bold ${
                    compatibilityReport.wattageAdequacy === 'sufficient'
                      ? 'text-emerald-500'
                      : compatibilityReport.wattageAdequacy === 'tight'
                      ? 'text-amber-500'
                      : compatibilityReport.wattageAdequacy === 'insufficient'
                      ? 'text-rose-500'
                      : 'text-slate-400'
                  }`}
                >
                  {compatibilityReport.selectedWattage > 0
                    ? `${compatibilityReport.selectedWattage} W (${
                        compatibilityReport.wattageAdequacy === 'sufficient'
                          ? '여유로움'
                          : compatibilityReport.wattageAdequacy === 'tight'
                          ? '다소 타이트'
                          : '용량 부족'
                      })`
                    : '파워 미선택'}
                </span>
              </div>
            </div>

            {/* Real-time Compatibility Diagnosis List */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  실시간 호환성 정밀 진단
                </span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    compatibilityReport.isCompatible
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                      : 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                  }`}
                >
                  {compatibilityReport.isCompatible ? '✓ 조립 안전' : '⚠️ 호환성 주의'}
                </span>
              </div>

              {compatibilityReport.issues.length === 0 ? (
                <div className="p-3 text-xs text-slate-400 bg-slate-50 dark:bg-slate-900/40 rounded-xl text-center">
                  부품을 선택하시면 실시간으로 소켓 및 크기 호환성을 점검합니다.
                </div>
              ) : (
                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {compatibilityReport.issues.map((issue, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                        issue.type === 'success'
                          ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200'
                          : issue.type === 'warning'
                          ? 'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40 text-amber-900 dark:text-amber-200'
                          : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 text-rose-900 dark:text-rose-200'
                      }`}
                    >
                      {issue.type === 'success' && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                      {issue.type === 'warning' && (
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      )}
                      {issue.type === 'error' && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold">{issue.title}</p>
                        <p className="opacity-90 mt-0.5 text-[11px]">{issue.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons: Clipboard Copy & Reset */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={onCopyQuotation}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>📋 견적서 원클릭 클립보드 복사</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 dark:text-slate-500">
                다나와, 퀘이사존, 디시인사이드 커뮤니티에 즉시 붙여넣을 수 있는 포맷으로 복사됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
