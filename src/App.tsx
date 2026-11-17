import React, { useState, useEffect, useMemo } from 'react';
import { Header, ActiveTab } from './components/Header';
import { AutoSlideHeader } from './components/AutoSlideHeader';
import { SearchBar } from './components/SearchBar';
import { QuotationBuilder } from './components/QuotationBuilder';
import { CuratedPresetsSection } from './components/CuratedPresetsSection';
import { GameOptimizationSection } from './components/GameOptimizationSection';
import { BenchmarkRankingsSection } from './components/BenchmarkRankingsSection';
import { PartSelectModal } from './components/PartSelectModal';
import { Toast, ToastMessage } from './components/Toast';
import { PartCategory, PartItem, CuratedPreset } from './types/hardware';
import {
  PARTS_DATABASE,
  CURATED_PRESETS,
  checkCompatibility,
  formatQuotationForClipboard,
} from './data/hardwareData';

export default function App() {
  // 1. Dark / Light Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('noonjang_theme');
    if (saved) return saved === 'dark';
    return true; // Default dark for gaming/tech DB
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('noonjang_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('noonjang_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // 2. Active Tab State
  const [activeTab, setActiveTab] = useState<ActiveTab>('builder');

  // 3. Global Search & Tag State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTag, setActiveTag] = useState<string>('');

  // 4. Quotation Builder Selected Parts State (Defaults to 국민 표준 견적)
  const [selectedParts, setSelectedParts] = useState<Partial<Record<PartCategory, PartItem>>>(() => {
    const standardPreset = CURATED_PRESETS[1]; // preset-standard (국민 FHD 풀옵션)
    const initialParts: Partial<Record<PartCategory, PartItem>> = {};
    (Object.keys(standardPreset.parts) as PartCategory[]).forEach((cat) => {
      const partId = standardPreset.parts[cat];
      const found = PARTS_DATABASE[cat]?.find((p) => p.id === partId);
      if (found) {
        initialParts[cat] = found;
      }
    });
    return initialParts;
  });

  // 5. Part Select Modal State
  const [modalCategory, setModalCategory] = useState<PartCategory | null>(null);

  // 6. Toast Notification State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', message: string) => {
    const id = Date.now().toString() + Math.random().toString().slice(2, 6);
    setToasts((prev) => [...prev, { id, type, message }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // 7. Real-time Compatibility Calculation
  const compatibilityReport = useMemo(() => {
    return checkCompatibility(selectedParts);
  }, [selectedParts]);

  const selectedCount = Object.values(selectedParts).filter(Boolean).length;

  // 8. Handlers
  const handleSelectPart = (part: PartItem) => {
    setSelectedParts((prev) => ({
      ...prev,
      [part.category]: part,
    }));
    addToast('success', `${part.name} 부품이 장착되었습니다.`);
  };

  const handleRemovePart = (category: PartCategory) => {
    setSelectedParts((prev) => {
      const next = { ...prev };
      delete next[category];
      return next;
    });
    addToast('info', '부품이 견적에서 제거되었습니다.');
  };

  const handleResetQuotation = () => {
    setSelectedParts({});
    addToast('info', '견적이 초기화되었습니다.');
  };

  const handleLoadPreset = (preset: CuratedPreset) => {
    const newParts: Partial<Record<PartCategory, PartItem>> = {};
    (Object.keys(preset.parts) as PartCategory[]).forEach((cat) => {
      const partId = preset.parts[cat];
      const found = PARTS_DATABASE[cat]?.find((p) => p.id === partId);
      if (found) {
        newParts[cat] = found;
      }
    });
    setSelectedParts(newParts);
    setActiveTab('builder');
    addToast('success', `[${preset.title}] 구성이 견적 빌더에 채워졌습니다!`);
  };

  const handleLoadStandardPreset = () => {
    handleLoadPreset(CURATED_PRESETS[1]);
  };

  const handleCopyQuotation = async () => {
    try {
      const formattedText = formatQuotationForClipboard(selectedParts, compatibilityReport);
      await navigator.clipboard.writeText(formattedText);
      addToast('success', '📋 견적서가 클립보드에 복사되었습니다! 커뮤니티에 붙여넣기 하세요.');
    } catch {
      addToast('error', '클립보드 복사에 실패했습니다. 브라우저 권한을 확인해 주세요.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors">
      {/* 1. Global Header */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        selectedPartsCount={selectedCount}
        totalCompatibilityStatus={compatibilityReport.isCompatible}
      />

      {/* 2. Auto-sliding Rotating Header Banner */}
      <AutoSlideHeader
        onNavigateTab={(tab) => {
          setActiveTab(tab);
        }}
        onLoadStandardPreset={handleLoadStandardPreset}
      />

      {/* 3. Global Search & Tag Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeTag={activeTag}
        onTagSelect={setActiveTag}
      />

      {/* 3. Main Dynamic Content based on Active Tab */}
      <main className="flex-1 pb-16">
        {activeTab === 'curated' && (
          <CuratedPresetsSection
            onLoadPreset={handleLoadPreset}
            searchFilter={searchQuery}
          />
        )}

        {activeTab === 'builder' && (
          <QuotationBuilder
            selectedParts={selectedParts}
            compatibilityReport={compatibilityReport}
            onOpenSelectModal={(cat) => setModalCategory(cat)}
            onRemovePart={handleRemovePart}
            onResetQuotation={handleResetQuotation}
            onLoadStandardPreset={handleLoadStandardPreset}
            onCopyQuotation={handleCopyQuotation}
          />
        )}

        {activeTab === 'optimization' && (
          <GameOptimizationSection searchFilter={searchQuery} />
        )}

        {activeTab === 'benchmarks' && (
          <BenchmarkRankingsSection searchFilter={searchQuery} />
        )}
      </main>

      {/* 4. Part Selection Modal */}
      {modalCategory && (
        <PartSelectModal
          category={modalCategory}
          currentSelectedId={selectedParts[modalCategory]?.id}
          onSelectPart={handleSelectPart}
          onClose={() => setModalCategory(null)}
        />
      )}

      {/* 5. Toast Notification System */}
      <Toast toasts={toasts} onDismiss={dismissToast} />

      {/* 6. Minimal Clean Studio Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1220] py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">⚡ 눈쟁DB</span>
            <span>•</span>
            <span>게이머와 PC 빌더를 위한 초경량 하드웨어 & 세팅 아카이브</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <span>실시간 호환성 알고리즘 v1.0</span>
            <span>•</span>
            <span>데이터 출처: 공인 벤치마크 및 주요 유통사 DB</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
