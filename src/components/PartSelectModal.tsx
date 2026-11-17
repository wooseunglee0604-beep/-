import React, { useState } from 'react';
import { X, Search, Check, Sparkles, AlertCircle } from 'lucide-react';
import { PartCategory, PartItem } from '../types/hardware';
import { CATEGORY_LABELS, PARTS_DATABASE, CATEGORY_DEFAULT_IMAGES } from '../data/hardwareData';

interface PartSelectModalProps {
  category: PartCategory;
  currentSelectedId?: string;
  onSelectPart: (part: PartItem) => void;
  onClose: () => void;
}

export const PartSelectModal: React.FC<PartSelectModalProps> = ({
  category,
  currentSelectedId,
  onSelectPart,
  onClose,
}) => {
  const [modalSearch, setModalSearch] = useState('');
  const parts = PARTS_DATABASE[category] || [];
  const categoryInfo = CATEGORY_LABELS[category];

  const filteredParts = parts.filter((part) => {
    if (!modalSearch.trim()) return true;
    const query = modalSearch.toLowerCase();
    return (
      part.name.toLowerCase().includes(query) ||
      part.manufacturer.toLowerCase().includes(query) ||
      part.specs.toLowerCase().includes(query) ||
      (part.socket && part.socket.toLowerCase().includes(query)) ||
      (part.badge && part.badge.toLowerCase().includes(query))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#141c2e] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-slate-900 dark:text-white">
                {categoryInfo.label} 부품 선택
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium">
                {parts.length}개 모델
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              원하는 부품을 선택하면 실시간 호환성 및 예상 견적에 즉시 반영됩니다.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Search Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#141c2e]">
          <div className="relative">
            <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
              placeholder="모델명, 제조사, 규격 검색..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>
        </div>

        {/* Parts List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {filteredParts.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-60" />
              <p className="text-sm">검색 결과와 일치하는 부품이 없습니다.</p>
            </div>
          ) : (
            filteredParts.map((part) => {
              const isSelected = part.id === currentSelectedId;
              return (
                <div
                  key={part.id}
                  onClick={() => {
                    onSelectPart(part);
                    onClose();
                  }}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 ring-1 ring-blue-500'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
                    {/* Left: Product Thumbnail Photo */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800">
                      <img
                        src={part.imageUrl || CATEGORY_DEFAULT_IMAGES[category]}
                        alt={part.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex-1 space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-slate-900 dark:text-slate-100">
                          {part.name}
                        </span>
                        {part.badge && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
                            <Sparkles className="w-3 h-3" />
                            {part.badge}
                          </span>
                        )}
                        {part.socket && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {part.socket}
                          </span>
                        )}
                        {part.wattage && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                            {part.wattage}W
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{part.specs}</p>
                      {part.description && (
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                          💡 {part.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                    <div className="text-right">
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {part.price === 0 ? '기본 포함 (0원)' : `${part.price.toLocaleString()} 원`}
                      </span>
                    </div>
                    <button
                      type="button"
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>장착됨</span>
                        </>
                      ) : (
                        <span>선택</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
