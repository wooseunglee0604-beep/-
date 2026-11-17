import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  MonitorPlay,
  CheckCircle2,
} from 'lucide-react';
import { ActiveTab } from './Header';

interface AutoSlideHeaderProps {
  onNavigateTab: (tab: ActiveTab) => void;
  onLoadStandardPreset?: () => void;
}

interface ProductSlideItem {
  id: number;
  badge: string;
  badgeColor: string;
  productName: string;
  priceTag: string;
  tagline: string;
  description: string;
  specsHighlight: string[];
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  targetTab: ActiveTab;
  accentColor: 'blue' | 'emerald' | 'amber' | 'indigo';
}

export const AutoSlideHeader: React.FC<AutoSlideHeaderProps> = ({
  onNavigateTab,
  onLoadStandardPreset,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const isHoveredRef = useRef(false);

  const SLIDE_DURATION = 4800; // 4.8 seconds per slide
  const PROGRESS_INTERVAL = 50;

  const slides: ProductSlideItem[] = [
    {
      id: 1,
      badge: '눈쟁이 공인 11월 추천 PC',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      productName: '눈쟁DB QHD 게이밍 종결 익스트림 데스크탑',
      priceTag: '1,943,500 원',
      tagline: '배틀그라운드 · 스팀 AAA 풀옵션 165Hz+ 방어 완제품 구성',
      description:
        '라이젠 7800X3D와 지포스 RTX 4070 SUPER의 검증된 황금 조합. 파워 용량 여유율 125%와 듀얼타워 쿨러로 무결점 쿨링을 선사합니다.',
      specsHighlight: [
        'CPU: AMD 라이젠7 7800X3D',
        'VGA: RTX 4070 SUPER 12GB',
        'RAM: DDR5-5600 32GB (16x2)',
        'PSU: 마이크로닉스 750W 골드',
      ],
      imageSrc: '/src/assets/images/pc_desktop_build_1794287140056.jpg',
      imageAlt: '눈쟁DB 추천 게이밍 데스크탑 PC 본체',
      ctaText: '이 구성 견적 빌더로 불러오기',
      targetTab: 'builder',
      accentColor: 'blue',
    },
    {
      id: 2,
      badge: '그래픽카드 특가 & 벤치 1위',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      productName: '지포스 RTX 4070 SUPER WINDFORCE OC 12GB',
      priceTag: '849,000 원',
      tagline: 'QHD 144Hz 게이밍의 절대 제왕 · DLSS 3 프레임 생성 지원',
      description:
        '7,168개의 쿠다 코어와 강력한 트리플 쿨링팬 탑재. 최신 3D 게임에서도 발열 60도 초반 유지 및 저전력 고효율을 자랑합니다.',
      specsHighlight: [
        '쿠다 코어: 7,168개',
        '메모리: 12GB GDDR6X 192bit',
        '권장 파워: 정격 650W 이상',
        '실측 벤치: 타임스파이 21,100점',
      ],
      imageSrc: '/src/assets/images/gpu_graphics_card_1794287139669.jpg',
      imageAlt: '지포스 RTX 4070 SUPER 그래픽카드',
      ctaText: 'GPU 벤치마크 랭킹 보기',
      targetTab: 'benchmarks',
      accentColor: 'emerald',
    },
    {
      id: 3,
      badge: '게이밍 원탑 CPU 프로세서',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      productName: 'AMD 라이젠7 7800X3D (라파엘 AM5)',
      priceTag: '598,000 원',
      tagline: '대용량 3D V-Cache 96MB 탑재 · 최저 1% Low 프레임 완벽 방어',
      description:
        '대규모 난전, 연막탄 투척, 교전 시에도 프레임 요동 없는 궁극의 게임 전용 프로세서. 공랭 쿨러 하나로도 완벽히 냉각됩니다.',
      specsHighlight: [
        '코어/스레드: 8코어 16스레드',
        '캐시 메모리: 3D V-Cache 96MB',
        '소켓: AM5 (DDR5 전용)',
        'TDP: 저발열 120W 대응',
      ],
      imageSrc: '/src/assets/images/cpu_motherboard_chip_1794287140710.jpg',
      imageAlt: 'AMD 라이젠7 7800X3D CPU 프로세서',
      ctaText: '실시간 호환 보드·쿨러 매칭하기',
      targetTab: 'builder',
      accentColor: 'amber',
    },
    {
      id: 4,
      badge: '게이밍 환경 & 인풋랙 0ms',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      productName: '초고주사율 e스포츠 모니터 & 데스크 세팅 솔루션',
      priceTag: '눈쟁이 프로 프리셋',
      tagline: '240Hz 고주사율 디스플레이 · 윈도우 인풋랙 다이어트 가이드',
      description:
        '단 1ms의 반응 속도도 놓치지 않는 배틀그라운드 & 발로란트 최적화 프로 세팅! 엔비디아 저지연 울트라 모드 및 화면 설정 완벽 정리.',
      specsHighlight: [
        '주사율 타겟: 144Hz ~ 240Hz',
        '레이턴시: 0ms 저지연 Reflex',
        '화면 옵션: 배그 안/텍/거 국민옵',
        '시스템: HAGS 및 고성능 전원',
      ],
      imageSrc: '/src/assets/images/gaming_gear_setup_1794287141115.jpg',
      imageAlt: '고주사율 게이밍 모니터와 데스크 세팅',
      ctaText: '인풋랙 최적화 가이드 확인',
      targetTab: 'optimization',
      accentColor: 'indigo',
    },
  ];

  // Dynamic theme background styles per product
  const themeBackgrounds: Record<
    'blue' | 'emerald' | 'amber' | 'indigo',
    { bgContainer: string; glowGradient: string; ctaBg: string }
  > = {
    blue: {
      bgContainer:
        'bg-gradient-to-r from-[#0b1b3d] via-[#0f244c] to-[#09152e] border-b border-blue-900/50',
      glowGradient:
        'bg-gradient-to-tr from-blue-500/25 via-cyan-400/15 to-transparent',
      ctaBg: 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30',
    },
    emerald: {
      bgContainer:
        'bg-gradient-to-r from-[#06241c] via-[#083327] to-[#041a14] border-b border-emerald-900/50',
      glowGradient:
        'bg-gradient-to-tr from-emerald-500/25 via-teal-400/15 to-transparent',
      ctaBg: 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30',
    },
    amber: {
      bgContainer:
        'bg-gradient-to-r from-[#291705] via-[#3a2008] to-[#1f1103] border-b border-amber-900/50',
      glowGradient:
        'bg-gradient-to-tr from-amber-500/25 via-orange-400/15 to-transparent',
      ctaBg: 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/30',
    },
    indigo: {
      bgContainer:
        'bg-gradient-to-r from-[#170e38] via-[#22144f] to-[#110a29] border-b border-indigo-900/50',
      glowGradient:
        'bg-gradient-to-tr from-indigo-500/25 via-purple-400/15 to-transparent',
      ctaBg: 'bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30',
    },
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      if (isHoveredRef.current) return;

      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + (PROGRESS_INTERVAL / SLIDE_DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const current = slides[currentSlide];
  const currentTheme = themeBackgrounds[current.accentColor];

  const handleCtaClick = () => {
    if (current.id === 1 && onLoadStandardPreset) {
      onLoadStandardPreset();
    }
    onNavigateTab(current.targetTab);
  };

  return (
    <div
      className={`relative w-full ${currentTheme.bgContainer} text-white select-none transition-all duration-700 overflow-hidden shadow-inner`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
    >
      {/* Dynamic Ambient Glow Backdrop */}
      <div
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none ${currentTheme.glowGradient} transition-all duration-700`}
      />
      <div
        className={`absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none ${currentTheme.glowGradient} transition-all duration-700`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 relative z-10">
        {/* Main Grid: Left Details & Right Product Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Product Info & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5 z-10">
            {/* Top Badge & Live Indicator */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${current.badgeColor}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </span>
              <span className="text-xs font-semibold text-slate-300/90">
                제품 프로모션 #{currentSlide + 1}
              </span>
            </div>

            {/* Product Title & Price */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-sm">
                {current.productName}
              </h1>
              <div className="flex items-baseline gap-3 mt-1.5 flex-wrap">
                <span className="text-xl sm:text-2xl font-black text-amber-400 drop-shadow-sm">
                  {current.priceTag}
                </span>
                <span className="text-xs font-semibold text-slate-300">
                  {current.tagline}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-2xl line-clamp-2">
              {current.description}
            </p>

            {/* Hardware Specs Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 pt-1 max-w-xl">
              {current.specsHighlight.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-100 bg-white/10 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-white/15"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{spec}</span>
                </div>
              ))}
            </div>

            {/* CTA Action & Slide Controllers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleCtaClick}
                className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl text-white flex items-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer ${currentTheme.ctaBg}`}
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Slider Controls */}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0 bg-black/40 backdrop-blur-md p-1 rounded-xl border border-white/15 text-xs">
                <button
                  onClick={handlePrev}
                  aria-label="이전 제품"
                  className="p-1.5 rounded-lg hover:bg-white/20 text-slate-200 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? '자동 슬라이드 일시정지' : '자동 슬라이드 재생'}
                  className="p-1.5 rounded-lg hover:bg-white/20 text-slate-200 transition-colors"
                  title={isPlaying ? '일시 정지' : '자동 재생'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleNext}
                  aria-label="다음 제품"
                  className="p-1.5 rounded-lg hover:bg-white/20 text-slate-200 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="px-2 font-mono font-bold text-white">
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Promotional Product Image Card (5 cols) */}
          <div className="lg:col-span-5 relative group">
            <div
              onClick={handleCtaClick}
              className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/80 shadow-2xl cursor-pointer transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/40 aspect-16/10"
            >
              <img
                src={current.imageSrc}
                alt={current.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Subtle Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <span className="text-[10px] text-blue-400 font-bold block uppercase tracking-wider">
                    Official Product
                  </span>
                  <p className="text-xs font-bold truncate">{current.productName}</p>
                </div>
                <span className="text-xs font-black text-amber-400 shrink-0">
                  {current.priceTag}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Bar & Progress Indicator */}
        <div className="mt-6 pt-4 border-t border-white/15">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
            {slides.map((slide, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 backdrop-blur-md min-h-[76px] sm:min-h-[84px] ${
                    isSelected
                      ? 'border-white/60 bg-white/20 shadow-lg ring-1 ring-white/40 scale-[1.01]'
                      : 'border-white/10 hover:border-white/25 bg-black/35 hover:bg-black/50 text-slate-300'
                  }`}
                >
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/25 shadow-sm bg-slate-900">
                    <img
                      src={slide.imageSrc}
                      alt={slide.productName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <span
                      className={`text-xs sm:text-sm font-bold block truncate tracking-tight ${
                        isSelected
                          ? 'text-white'
                          : 'text-slate-200'
                      }`}
                    >
                      {slide.badge}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-300/90 block truncate leading-tight">
                      {slide.productName}
                    </span>
                    {/* Progress Bar inside Active Thumbnail */}
                    {isSelected && (
                      <div className="w-full h-1.5 bg-black/50 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className="h-full bg-blue-400 rounded-full transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
