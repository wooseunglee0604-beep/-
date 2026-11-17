import {
  PartCategory,
  PartItem,
  CuratedPreset,
  CompatibilityReport,
  CompatibilityIssue,
  GameOptimizationGuide,
  BenchmarkRankItem,
} from '../types/hardware';

export const CATEGORY_LABELS: Record<PartCategory, { label: string; icon: string }> = {
  cpu: { label: 'CPU (프로세서)', icon: 'Cpu' },
  cooler: { label: '쿨러 (CPU 쿨링)', icon: 'Fan' },
  motherboard: { label: '메인보드 (M/B)', icon: 'CircuitBoard' },
  ram: { label: '메모리 (RAM)', icon: 'Layers' },
  gpu: { label: '그래픽카드 (VGA)', icon: 'MonitorPlay' },
  ssd: { label: 'SSD (스토리지)', icon: 'HardDrive' },
  case: { label: '케이스 (PC CASE)', icon: 'Box' },
  power: { label: '파워서플라이 (PSU)', icon: 'Zap' },
};

export const CATEGORY_DEFAULT_IMAGES: Record<PartCategory, string> = {
  cpu: '/src/assets/images/cpu_motherboard_chip_1794287140710.jpg',
  cooler: '/src/assets/images/cooler_hardware_1794377687105.jpg',
  motherboard: '/src/assets/images/motherboard_hardware_1794377687785.jpg',
  ram: '/src/assets/images/ram_memory_hardware_1794377689344.jpg',
  gpu: '/src/assets/images/gpu_graphics_card_1794287139669.jpg',
  ssd: '/src/assets/images/ssd_storage_hardware_1794377691186.jpg',
  case: '/src/assets/images/pc_desktop_build_1794287140056.jpg',
  power: '/src/assets/images/power_supply_hardware_1794377688817.jpg',
};

export const PARTS_DATABASE: Record<PartCategory, PartItem[]> = {
  cpu: [
    {
      id: 'cpu-7500f',
      category: 'cpu',
      name: 'AMD 라이젠5 7500F (라파엘)',
      manufacturer: 'AMD',
      price: 215000,
      specs: '6코어 12스레드 / 기본 3.7GHz(최대 5.0GHz) / L3 32MB',
      tdp: 65,
      socket: 'AM5',
      benchmarkScore: 26800,
      badge: '가성비 1위',
      description: '국민 FHD/QHD 게이밍 최강 가성비 CPU. 내장그래픽 제외로 뛰어난 가격 대비 성능 제공.',
    },
    {
      id: 'cpu-7800x3d',
      category: 'cpu',
      name: 'AMD 라이젠7 7800X3D (라파엘)',
      manufacturer: 'AMD',
      price: 598000,
      specs: '8코어 16스레드 / 기본 4.2GHz(최대 5.0GHz) / 3D V-Cache 96MB',
      tdp: 120,
      socket: 'AM5',
      benchmarkScore: 34500,
      badge: '게이밍 종결',
      description: '배그/로아 1% Low 프레임 방어 최강자. 대용량 3D 캐시로 현존 최고의 게임 성능.',
    },
    {
      id: 'cpu-9800x3d',
      category: 'cpu',
      name: 'AMD 라이젠7 9800X3D (그래니트 릿지)',
      manufacturer: 'AMD',
      price: 765000,
      specs: '8코어 16스레드 / 기본 4.7GHz(최대 5.2GHz) / 2세대 3D V-Cache 96MB',
      tdp: 120,
      socket: 'AM5',
      benchmarkScore: 39200,
      badge: '차세대 플래그십',
      description: '언더 캐시 구조로 발열과 클럭을 모두 잡은 최신 초하이엔드 게이밍 프로세서.',
    },
    {
      id: 'cpu-12100f',
      category: 'cpu',
      name: '인텔 코어i3-12세대 12100F (엘더레이크)',
      manufacturer: 'Intel',
      price: 98000,
      specs: '4코어 8스레드 / 기본 3.3GHz(최대 4.3GHz) / L3 12MB',
      tdp: 58,
      socket: 'LGA1700',
      benchmarkScore: 14200,
      badge: '입문 가성비',
      description: '50~70만원대 엔트리 롤/발로란트/사무용 견적의 압도적 가성비 왕좌.',
    },
    {
      id: 'cpu-14400f',
      category: 'cpu',
      name: '인텔 코어i5-14세대 14400F (랩터레이크R)',
      manufacturer: 'Intel',
      price: 245000,
      specs: '10코어(6P+4E) 16스레드 / 최대 4.7GHz / L3 20MB',
      tdp: 65,
      socket: 'LGA1700',
      benchmarkScore: 27100,
      badge: '인텔 스테디셀러',
      description: '인텔 기반 다중작업 및 안정적인 스트리밍 방송 동시 송출용 추천 CPU.',
    },
    {
      id: 'cpu-14700k',
      category: 'cpu',
      name: '인텔 코어i7-14세대 14700K (랩터레이크R)',
      manufacturer: 'Intel',
      price: 565000,
      specs: '20코어(8P+12E) 28스레드 / 최대 5.6GHz / L3 33MB',
      tdp: 253,
      socket: 'LGA1700',
      benchmarkScore: 53200,
      badge: '작업/게임 겸용',
      description: '프리미어 영상 편집, 3D 렌더링과 AAA급 고사양 게임을 모두 만족하는 고성능 CPU.',
    },
  ],
  cooler: [
    {
      id: 'cooler-pa120se',
      category: 'cooler',
      name: 'Thermalright Peerless Assassin 120 SE 서린',
      manufacturer: 'Thermalright',
      price: 38500,
      specs: '듀얼타워 공랭 / 120mm 팬 2개 / 6개 히트파이프 / TDP 245W 대응',
      heightMm: 155,
      tdp: 5,
      badge: '공랭 원탑',
      description: '가성비 공랭의 전설. 7500F부터 7800X3D까지 정숙하고 확실하게 냉각.',
    },
    {
      id: 'cooler-ag400',
      category: 'cooler',
      name: 'DEEPCOOL AG400 DIGITAL',
      manufacturer: 'DEEPCOOL',
      price: 28000,
      specs: '싱글타워 공랭 / 120mm 팬 / 실시간 온도 디스플레이 탑재',
      heightMm: 150,
      tdp: 4,
      badge: '디지털 온도표시',
      description: '콤팩트한 150mm 높이로 거의 모든 미들타워/미니타워 케이스와 호환 가능.',
    },
    {
      id: 'cooler-kraken360',
      category: 'cooler',
      name: 'NZXT KRAKEN 360 RGB (Black)',
      manufacturer: 'NZXT',
      price: 289000,
      specs: '3열 360mm 일체형 수랭 / 1.54인치 LCD 디스플레이 / Asetek 7세대 펌프',
      heightMm: 53,
      tdp: 15,
      badge: '하이엔드 수랭',
      description: '최고급 감성과 극강의 쿨링 성능. i7 14700K 및 하이엔드 오버클럭 권장.',
    },
    {
      id: 'cooler-wraith',
      category: 'cooler',
      name: 'AMD Wraith Stealth 기본 쿨러',
      manufacturer: 'AMD',
      price: 0,
      specs: '초슬림 번들 공랭 / 플라워형 / 높이 54mm',
      heightMm: 54,
      tdp: 2,
      badge: '기본 번들',
      description: '추가 지출 없는 번들 쿨러. 저발열 보급형 CPU에 기본 사용 가능.',
    },
  ],
  motherboard: [
    {
      id: 'mb-b650m-pro-rs',
      category: 'motherboard',
      name: 'ASRock B650M Pro RS',
      manufacturer: 'ASRock',
      price: 168000,
      specs: 'AMD B650 칩셋 / AM5 / M-ATX / DDR5 슬롯 4개 / M.2 3개',
      socket: 'AM5',
      memoryType: 'DDR5',
      formFactor: 'M-ATX',
      tdp: 20,
      badge: 'AM5 표준 추천',
      description: '화이트 실버 방열판과 튼튼한 전원부(8+2+1 페이즈), M.2 3개 슬롯의 알찬 구성.',
    },
    {
      id: 'mb-b650-tomahawk',
      category: 'motherboard',
      name: 'MSI MAG B650 토마호크 WIFI',
      manufacturer: 'MSI',
      price: 279000,
      specs: 'AMD B650 / AM5 / ATX / DDR5 / Wi-Fi 6E + 블루투스 5.3',
      socket: 'AM5',
      memoryType: 'DDR5',
      formFactor: 'ATX',
      tdp: 25,
      badge: '고급형 게이밍',
      description: '14+2+1 페이즈 대형 방열판 탑재. 7800X3D/9800X3D의 잠재력을 안정적으로 서포트.',
    },
    {
      id: 'mb-h610m-hdv',
      category: 'motherboard',
      name: 'ASRock H610M-HDV/M.2+ D4',
      manufacturer: 'ASRock',
      price: 79000,
      specs: '인텔 H610 / LGA1700 / M-ATX / DDR4 슬롯 2개',
      socket: 'LGA1700',
      memoryType: 'DDR4',
      formFactor: 'M-ATX',
      tdp: 15,
      badge: '극가성비 인텔',
      description: 'i3 12100F와의 최적의 조합. 저렴한 비용으로 탄탄한 기본기 구축.',
    },
    {
      id: 'mb-b760m-aorus-elite',
      category: 'motherboard',
      name: 'GIGABYTE B760M AORUS ELITE X AX',
      manufacturer: 'GIGABYTE',
      price: 224000,
      specs: '인텔 B760 / LGA1700 / M-ATX / DDR5 / Wi-Fi 6E 지원',
      socket: 'LGA1700',
      memoryType: 'DDR5',
      formFactor: 'M-ATX',
      tdp: 20,
      badge: '인텔 준종결',
      description: '12+1+1 페이즈 디지털 전원부와 올 화이트 PCB. 14400F~14700에 이상적.',
    },
  ],
  ram: [
    {
      id: 'ram-ddr5-32gb-team',
      category: 'ram',
      name: 'TeamGroup DDR5-5600 CL46 Elite 서린 (16GB x 2 = 32GB)',
      manufacturer: 'TeamGroup',
      price: 112000,
      specs: '32GB(16GBx2) / DDR5-5600MHz / PC5-44800 / CL46-46-46-90',
      memoryType: 'DDR5',
      tdp: 8,
      badge: '국민 게이밍 규격',
      description: '배틀그라운드 및 최신 스팀 게임 원활한 플레이를 위한 넉넉한 32GB 듀얼채널.',
    },
    {
      id: 'ram-ddr5-64gb-corsair',
      category: 'ram',
      name: '커세어 DDR5-6000 CL30 VENGEANCE RGB (32GB x 2 = 64GB)',
      manufacturer: 'Corsair',
      price: 298000,
      specs: '64GB(32GBx2) / DDR5-6000MHz / EXPO&XMP / 저지연 CL30',
      memoryType: 'DDR5',
      tdp: 12,
      badge: '하이엔드 튜닝',
      description: '낮은 타이밍(CL30)과 고클럭으로 0.1% 최저 프레임 방어 및 영상 렌더링에 탁월.',
    },
    {
      id: 'ram-ddr4-16gb-samsung',
      category: 'ram',
      name: '삼성전자 DDR4-3200 (8GB x 2 = 16GB)',
      manufacturer: 'Samsung',
      price: 49000,
      specs: '16GB(8GBx2) / DDR4-3200MHz / PC4-25600',
      memoryType: 'DDR4',
      tdp: 6,
      badge: '가성비 DDR4',
      description: '인텔 보급형 H610 시스템 및 사무/롤/발로란트용 기본 표준 메모리.',
    },
  ],
  gpu: [
    {
      id: 'gpu-rtx4060',
      category: 'gpu',
      name: '이엠텍 지포스 RTX 4060 MIRACLE WHITE D6 8GB',
      manufacturer: '이엠텍',
      price: 435000,
      specs: '부스트클럭 2460MHz / 8GB GDDR6 / 3072 쿠다 / DLSS 3 지원',
      lengthMm: 249,
      tdp: 115,
      benchmarkScore: 10450,
      badge: 'FHD 풀옵션 종결',
      description: '압도적인 저전력(115W)과 DLSS 3 프레임 생성 기술로 배그/오버워치2 정복.',
    },
    {
      id: 'gpu-rtx4070super',
      category: 'gpu',
      name: 'GIGABYTE 지포스 RTX 4070 SUPER WINDFORCE OC D6X 12GB',
      manufacturer: 'GIGABYTE',
      price: 849000,
      specs: '부스트클럭 2505MHz / 12GB GDDR6X / 7168 쿠다 / 192bit',
      lengthMm: 261,
      tdp: 220,
      benchmarkScore: 21100,
      badge: 'QHD 게이밍의 제왕',
      description: 'QHD 144Hz~165Hz 고주사율 모니터를 완벽하게 방어하는 가장 합리적인 고성능 카드.',
    },
    {
      id: 'gpu-rtx4070tis',
      category: 'gpu',
      name: 'MSI 지포스 RTX 4070 Ti SUPER 게이밍 X 슬림 D6X 16GB 트라이프로져3',
      manufacturer: 'MSI',
      price: 1198000,
      specs: '부스트 2670MHz / 16GB GDDR6X / 8448 쿠다 / 256bit 대역폭',
      lengthMm: 307,
      tdp: 285,
      benchmarkScore: 24800,
      badge: 'VRAM 16GB QHD/4K',
      description: '256비트 16GB 대용량 비디오 메모리로 고해상도 텍스처 팩과 AI 생성 작업 완벽 대응.',
    },
    {
      id: 'gpu-rtx4080super',
      category: 'gpu',
      name: 'ZOTAC GAMING 지포스 RTX 4080 SUPER Trinity Black Edition D6X 16GB',
      manufacturer: 'ZOTAC',
      price: 1489000,
      specs: '부스트 2550MHz / 16GB GDDR6X / 10240 쿠다 / 아이스스톰 2.0 쿨링',
      lengthMm: 356,
      tdp: 320,
      benchmarkScore: 28900,
      badge: '4K 하이엔드',
      description: '사이버펑크 풀옵션 패스트레이싱과 4K 120Hz 게이밍을 실현하는 최상위 그래픽카드.',
    },
    {
      id: 'gpu-gtx1660s',
      category: 'gpu',
      name: 'ASUS TUF Gaming 지포스 GTX 1660 SUPER O6G EVO D6 6GB',
      manufacturer: 'ASUS',
      price: 268000,
      specs: '부스트 1845MHz / 6GB GDDR6 / 1408 쿠다',
      lengthMm: 206,
      tdp: 125,
      benchmarkScore: 6100,
      badge: '초저예산 추천',
      description: '리그오브레전드, 발로란트, FC온라인, 메이플스토리 부드러운 플레이 가능.',
    },
  ],
  ssd: [
    {
      id: 'ssd-p41-1tb',
      category: 'ssd',
      name: 'SK하이닉스 Platinum P41 M.2 NVMe (1TB)',
      manufacturer: 'SK hynix',
      price: 132000,
      specs: 'PCIe 4.0x4 / 읽기 7,000MB/s / 쓰기 6,500MB/s / DRAM 탑재',
      tdp: 6,
      badge: '국내 선호도 1위',
      description: '자체 컨트롤러와 DRAM 탑재로 검증된 안정성과 최고 수준의 실사용 반응 속도.',
    },
    {
      id: 'ssd-990pro-2tb',
      category: 'ssd',
      name: '삼성전자 990 PRO M.2 NVMe (2TB)',
      manufacturer: 'Samsung',
      price: 249000,
      specs: 'PCIe 4.0x4 / 읽기 7,450MB/s / 쓰기 6,900MB/s / DRAM 2GB',
      tdp: 8,
      badge: '대용량 끝판왕',
      description: 'AAA 게임 여러 개와 고용량 영상 소스를 넉넉하게 보관할 수 있는 2TB 초고속 SSD.',
    },
    {
      id: 'ssd-sn580-1tb',
      category: 'ssd',
      name: 'Western Digital WD Blue SN580 M.2 NVMe (1TB)',
      manufacturer: 'WD',
      price: 89000,
      specs: 'PCIe 4.0x4 / 읽기 4,150MB/s / 디램리스 nCache 4.0',
      tdp: 5,
      badge: '가성비 1TB',
      description: '부담 없는 가격에 1TB 용량을 확보할 수 있는 합리적인 스토리지.',
    },
  ],
  case: [
    {
      id: 'case-g40',
      category: 'case',
      name: '앱코 G40 시그니처 블랙 (미들타워)',
      manufacturer: '앱코',
      price: 57000,
      specs: '미들타워 / 140mm 고풍량 팬 4개 기본장착 / 메쉬 베젤 / 스윙도어',
      maxCoolerHeightMm: 175,
      maxGpuLengthMm: 340,
      formFactor: 'ATX',
      badge: '국민 쿨링 케이스',
      description: '140mm 번들팬 4개로 흡배기 성능 탁월. 175mm 타워형 쿨러까지 거뜬히 수용.',
    },
    {
      id: 'case-dlx21',
      category: 'case',
      name: 'darkFlash DLX21 RGB MESH 강화유리 블랙 (미들타워)',
      manufacturer: 'darkFlash',
      price: 93000,
      specs: '고급형 미들타워 / 140mm 오로라팬 4개 / 그래픽카드 지지대 기본제공',
      maxCoolerHeightMm: 180,
      maxGpuLengthMm: 400,
      formFactor: 'ATX',
      badge: '대형 하이엔드 규격',
      description: '400mm 그래픽카드도 여유롭게 장착되는 광활한 내부 공간과 기본 번들 지지대.',
    },
    {
      id: 'case-dk110',
      category: 'case',
      name: '다크플래쉬 DK110 블랙 (미니타워)',
      manufacturer: 'darkFlash',
      price: 32000,
      specs: '미니타워 / 120mm 팬 1개 / M-ATX 보드 전용 / 콤팩트 데스크탑',
      maxCoolerHeightMm: 151,
      maxGpuLengthMm: 290,
      formFactor: 'M-ATX',
      badge: '콤팩트 미니타워',
      description: '작은 책상에 최적화된 아담한 사이즈. 쿨러 높이 151mm 제한에 유의 필요.',
    },
  ],
  power: [
    {
      id: 'power-classic-750',
      category: 'power',
      name: '마이크로닉스 Classic II 750W 80PLUS GOLD 230V EU 풀모듈러',
      manufacturer: '마이크로닉스',
      price: 104000,
      specs: '정격 750W / 80PLUS 골드 인증 / 풀모듈러 / 애프터쿨링 / 무상 10년',
      wattage: 750,
      efficiencyRating: '80PLUS GOLD',
      badge: '국민 파워 750W',
      description: 'RTX 4070 SUPER 시스템에 가장 권장되는 골드 등급 안정성과 10년 무상 보증.',
    },
    {
      id: 'power-classic-850',
      category: 'power',
      name: '마이크로닉스 Classic II 850W 80PLUS GOLD 230V EU 풀모듈러 ATX 3.1',
      manufacturer: '마이크로닉스',
      price: 139000,
      specs: '정격 850W / PCIe 5.1(12V-2x6) 전용 단자 지원 / 80PLUS 골드',
      wattage: 850,
      efficiencyRating: '80PLUS GOLD',
      badge: 'RTX 4070TiS/4080S용',
      description: '최신 ATX 3.1 규격 탑재로 최신 엔비디아 그래픽카드 16핀 케이블 직결 지원.',
    },
    {
      id: 'power-fsp-600',
      category: 'power',
      name: 'FSP HYPER K PRO 600W 80PLUS Standard 230V EU',
      manufacturer: 'FSP',
      price: 63000,
      specs: '정격 600W / 80PLUS 스탠다드 / 싱글레일 12V / 플랫 케이블',
      wattage: 600,
      efficiencyRating: '80PLUS Standard',
      badge: '보급형 정격 600W',
      description: 'RTX 4060 및 GTX 1660S에 딱 맞는 가성비 높은 고품질 정격 파워.',
    },
    {
      id: 'power-seasonic-1000',
      category: 'power',
      name: '시소닉 NEW FOCUS GX-1000 GOLD Full Modular ATX 3.0',
      manufacturer: '시소닉',
      price: 248000,
      specs: '정격 1000W / 80PLUS 골드 / 풀모듈러 / 하이브리드 무소음 모드',
      wattage: 1000,
      efficiencyRating: '80PLUS GOLD',
      badge: '1000W 끝판왕',
      description: '파워의 명가 시소닉의 1000W 대용량 파워. i7/i9 및 4080S 완벽 지원.',
    },
  ],
};

export const CURATED_PRESETS: CuratedPreset[] = [
  {
    id: 'preset-budget',
    title: 'e스포츠 입문 & 가성비 세팅',
    tagline: '롤 / 발로란트 / FC온라인 / 메이플을 쾌적하게 즐기는 알짜배기 구성',
    tier: 'budget',
    targetBudget: '60 ~ 70만원대',
    totalPrice: 651000,
    recommendedGames: ['리그 오브 레전드', '발로란트', 'FC 온라인', '오버워치2'],
    targetResolution: 'FHD (1080p) 144Hz',
    description: '적은 예산으로 최대의 만족감을 주는 검증된 엔트리 구성입니다. 쿨러 번들 활용과 가성비 부품의 조합으로 지출을 최소화했습니다.',
    parts: {
      cpu: 'cpu-12100f',
      cooler: 'cooler-wraith',
      motherboard: 'mb-h610m-hdv',
      ram: 'ram-ddr4-16gb-samsung',
      gpu: 'gpu-gtx1660s',
      ssd: 'ssd-sn580-1tb',
      case: 'case-dk110',
      power: 'power-fsp-600',
    },
  },
  {
    id: 'preset-standard',
    title: '국민 FHD 풀옵션 게이밍',
    tagline: '배그 144Hz 방어 & 최신 스팀 패키지 게임을 부드럽게 정복하는 표준 견적',
    tier: 'standard',
    targetBudget: '110 ~ 130만원대',
    totalPrice: 1217500,
    recommendedGames: ['배틀그라운드', '오버워치2', '로스트아크', '디아블로4'],
    targetResolution: 'FHD (1080p) 165Hz ~ 240Hz',
    description: '눈쟁이가 가장 강력 추천하는 현시점 최고 가성비 조합! 7500F와 RTX 4060의 저발열·고효율로 쾌적한 게이밍을 선사합니다.',
    parts: {
      cpu: 'cpu-7500f',
      cooler: 'cooler-pa120se',
      motherboard: 'mb-b650m-pro-rs',
      ram: 'ram-ddr5-32gb-team',
      gpu: 'gpu-rtx4060',
      ssd: 'ssd-p41-1tb',
      case: 'case-g40',
      power: 'power-fsp-600',
    },
  },
  {
    id: 'preset-high',
    title: 'QHD 고주사율 게이머 종결',
    tagline: 'QHD 해상도에서 풀옵션 144Hz+ 완벽 방어! 3D V-캐시의 1% Low 방어력',
    tier: 'high',
    targetBudget: '180 ~ 210만원대',
    totalPrice: 1943500,
    recommendedGames: ['배틀그라운드 3보급', '사이버펑크 2077', '헬다이버즈2', '몬스터헌터'],
    targetResolution: 'QHD (1440p) 165Hz 이상',
    description: '현존 게이밍 최강 CPU인 라이젠 7800X3D와 RTX 4070 SUPER의 조합으로 프레임 드랍 없는 궁극의 부드러움을 구현합니다.',
    parts: {
      cpu: 'cpu-7800x3d',
      cooler: 'cooler-pa120se',
      motherboard: 'mb-b650m-pro-rs',
      ram: 'ram-ddr5-32gb-team',
      gpu: 'gpu-rtx4070super',
      ssd: 'ssd-p41-1tb',
      case: 'case-g40',
      power: 'power-classic-750',
    },
  },
  {
    id: 'preset-ultra',
    title: '4K 울트라 익스트림 플래그십',
    tagline: '4K 레이트레이싱 풀옵션과 8K 영상 편집을 위한 타협 없는 최상위 빌드',
    tier: 'ultra',
    targetBudget: '320 ~ 360만원대',
    totalPrice: 3374000,
    recommendedGames: ['사이버펑크 2077 패스트레이싱', '검은 신화 오공', '스타필드', '앨런 웨이크 2'],
    targetResolution: '4K UHD (2160p) 120Hz ~ 144Hz',
    description: '차세대 9800X3D 프로세서와 RTX 4080 SUPER, 3열 수랭 쿨러와 시소닉 1000W 파워로 완성된 극한의 퍼포먼스 머신입니다.',
    parts: {
      cpu: 'cpu-9800x3d',
      cooler: 'cooler-kraken360',
      motherboard: 'mb-b650-tomahawk',
      ram: 'ram-ddr5-64gb-corsair',
      gpu: 'gpu-rtx4080super',
      ssd: 'ssd-990pro-2tb',
      case: 'case-dlx21',
      power: 'power-seasonic-1000',
    },
  },
];

export const GAME_OPTIMIZATION_GUIDES: GameOptimizationGuide[] = [
  {
    id: 'guide-pubg',
    gameTitle: '배틀그라운드 (PUBG: BATTLEGROUNDS)',
    genre: '배틀로얄 FPS',
    iconName: 'Crosshair',
    recommendedSpecs: 'i5 / 라이젠5 5600 이상, RTX 3060 / 4060 이상, RAM 32GB 권장',
    inGameSettings: [
      {
        category: '화면 모드',
        setting: '전체 화면 (Fullscreen)',
        recommended: '전체 화면 필수',
        reason: '창 모드나 테두리 없음 모드는 윈도우 DWM 레이턴시로 인해 인풋랙 5~10ms가 증가합니다.',
      },
      {
        category: '그래픽 옵션 (국민옵)',
        setting: '안티 / 텍스처 / 거리보기',
        recommended: '안티(울트라), 텍스처(울트라), 거리보기(중간~울트라), 나머지 전부(매우 낮음)',
        reason: '적 식별에 직결되는 안티앨리어싱과 텍스처만 높이고 그림자/식생 등 프레임 갉아먹는 요소를 제거하여 1% Low 방어율 35% 향상.',
      },
      {
        category: '다이렉트X 버전',
        setting: 'DirectX 11 향상 (Enhanced)',
        recommended: 'DirectX 11 향상 선택',
        reason: 'DirectX 12 대비 배틀그라운드 엔진에서 스터터링(화면 멈칫거림)이 현저히 적습니다.',
      },
      {
        category: '화면 스케일',
        setting: '렌더링 크기',
        recommended: '100% ~ 103%',
        reason: '100 미만으로 낮추면 화면이 뭉개져 원거리 적을 포착하기 어려우며, 100%가 가장 선명합니다.',
      },
    ],
    nvidiaDriverSettings: [
      {
        setting: '저지연 모드 (Low Latency Mode)',
        value: '울트라 (Ultra)',
        reason: 'GPU 프레임 대기열을 0으로 강제하여 마우스 반응성을 즉각적으로 높여줍니다.',
      },
      {
        setting: '전원 관리 모드',
        value: '최고 성능 선호',
        reason: '게임 중 GPU 클럭이 유휴 상태로 떨어지는 클럭 다운 현상을 방지합니다.',
      },
      {
        setting: '수직동기 (V-Sync)',
        value: '끄기 (Off)',
        reason: '수직동기는 화면 찢김을 막지만 치명적인 인풋랙을 유발하므로 FPS 게임에서는 필히 해제합니다.',
      },
    ],
    proTip: '배틀그라운드는 메모리 클럭과 타이밍(램오버)에 민감하므로 듀얼 채널(16GBx2) 구성과 XMP/EXPO 활성화가 필수입니다.',
  },
  {
    id: 'guide-valorant',
    gameTitle: '발로란트 (VALORANT)',
    genre: '전술 FPS',
    iconName: 'Target',
    recommendedSpecs: 'i3-12100F 또는 라이젠 5600 이상, GTX 1660S 이상',
    inGameSettings: [
      {
        category: 'CPU 처리',
        setting: '다중 스레드 렌더링',
        recommended: '켬 (On)',
        reason: '멀티코어 CPU의 연산 성능을 최대로 끌어올려 고주사율(240Hz/360Hz) 환경을 안정화합니다.',
      },
      {
        category: '디테일 옵션',
        setting: '재질 / 텍스처 / 디테일 / UI 품질',
        recommended: '모두 낮음 (Low)',
        reason: '시각적 방해 요소를 최소화하고 교전 시 순간 프레임 드랍을 원천 차단합니다.',
      },
      {
        category: '레이턴시 기술',
        setting: 'NVIDIA Reflex Low Latency',
        recommended: '켜짐 + 부스트 (On + Boost)',
        reason: 'GPU 병목 상황에서도 CPU-GPU 파이프라인을 동기화하여 클릭 반응 속도를 10ms 이하로 단축합니다.',
      },
    ],
    nvidiaDriverSettings: [
      {
        setting: '이방성 필터링',
        value: '응용 프로그램 제어',
        reason: '엔진 내 최적화 옵션과 충돌하지 않도록 게임 클라이언트에 위임합니다.',
      },
      {
        setting: '스레드 최적화',
        value: '자동 또는 켜기',
        reason: 'CPU의 모든 논리 프로세서를 풀가동하여 프레임 타임을 균일하게 유지합니다.',
      },
    ],
    proTip: '발로란트는 순수 CPU 단일 코어 성능 및 L3 캐시에 좌우됩니다. 그래픽카드보다 CPU와 모니터 주사율에 투자하는 것이 승률에 직결됩니다.',
  },
  {
    id: 'guide-overwatch',
    gameTitle: '오버워치 2 (Overwatch 2)',
    genre: '하이퍼 FPS',
    iconName: 'Shield',
    recommendedSpecs: 'i5 12400F / 라이젠 7500F, RTX 4060 이상',
    inGameSettings: [
      {
        category: '렌더링',
        setting: '렌더링 배율',
        recommended: '사용자 지정 100%',
        reason: '자동(Auto) 설정 시 동적 해상도 스케일링이 작동해 원거리 에임 흔들림의 원인이 됩니다.',
      },
      {
        category: '프레임 제한',
        setting: '최대 프레임 레이트',
        recommended: '사용자 지정 (모니터 주사율 + 10 FPS)',
        reason: '불필요한 GPU 100% 로드를 억제하여 발열을 낮추고 지속적인 인풋랙을 일정하게 유지합니다.',
      },
      {
        category: '텍스처 & 그림자',
        setting: '그림자 세부 묘사 / 반사 품질',
        recommended: '낮음 또는 끔',
        reason: '한타 교전 시 궁극기 연출이 쏟아져도 프레임 요동을 방지합니다.',
      },
    ],
    nvidiaDriverSettings: [
      {
        setting: '울트라 저지연',
        value: '게임 내 Reflex 지원되므로 드라이버는 켜기(On)',
        reason: '게임 내 Reflex와 중복 시 시스템 부하가 생길 수 있으므로 On으로 세팅 권장.',
      },
    ],
    proTip: '오버워치 2는 하이퍼 FPS 특성상 화면 전환이 빠르므로 마우스 폴링레이트 1000Hz~2000Hz 설정을 권장합니다.',
  },
  {
    id: 'guide-windows',
    gameTitle: '윈도우 11/10 인풋랙 & 시스템 최적화 가이드',
    genre: 'OS & 시스템 세팅',
    iconName: 'Cpu',
    recommendedSpecs: '모든 게이밍 PC 공통 적용',
    inGameSettings: [
      {
        category: '윈도우 설정',
        setting: '게임 모드 (Game Mode)',
        recommended: '켬 (On)',
        reason: '백그라운드 프로세스의 CPU 우선순위를 게임 실행 파일로 자동 몰아줍니다.',
      },
      {
        category: '캡처 기능',
        setting: 'Xbox Game Bar / 백그라운드 녹화',
        recommended: '전부 끔 (Off)',
        reason: '상시 실행되는 윈도우 내장 녹화 서비스는 프레임 드랍과 미세 스터터링의 주범입니다.',
      },
      {
        category: '마우스 설정',
        setting: '포인터 정확도 향상 (Mouse Acceleration)',
        recommended: '체크 해제 필수 (Off)',
        reason: '마우스 가속이 켜지면 손의 이동 속도에 따라 커서 이동 거리가 왜곡되어 에임 기억을 방해합니다.',
      },
      {
        category: '그래픽 설정',
        setting: '하드웨어 가속 GPU 일정 예약 (HAGS)',
        recommended: '켬 (On, RTX 시리즈 권장)',
        reason: 'GPU가 자체 메모리를 직접 관리하여 VRAM 접근 지연 시간을 획기적으로 낮춥니다.',
      },
    ],
    nvidiaDriverSettings: [
      {
        setting: 'DSR - 요소',
        value: 'Off',
        reason: '가상 초고해상도 다운스케일링은 불필요한 GPU 연산 부하를 초래합니다.',
      },
      {
        setting: '셰이더 캐시 크기',
        value: '10GB 또는 드라이버 기본값 이상',
        reason: '컴파일된 셰이더를 넉넉히 캐싱하여 첫 게임 로딩이나 교전 시 끊김을 예방합니다.',
      },
    ],
    proTip: '윈도우 전원 관리 옵션을 "고성능" 또는 "최고의 성능"으로 변경하여 CPU 코어가 유휴 절전 모드로 진입하지 못하게 고정하세요.',
  },
];

export const BENCHMARK_RANKINGS: BenchmarkRankItem[] = [
  { rank: 1, name: 'AMD 라이젠7 9800X3D', category: 'cpu', score: 39200, gameFpsAverage: 288, price: 765000, costPerPoint: 19.5, badge: '차세대 1위' },
  { rank: 2, name: 'AMD 라이젠7 7800X3D', category: 'cpu', score: 34500, gameFpsAverage: 274, price: 598000, costPerPoint: 17.3, badge: '게이밍 원탑' },
  { rank: 3, name: '인텔 코어i7-14세대 14700K', category: 'cpu', score: 53200, gameFpsAverage: 258, price: 565000, costPerPoint: 10.6, badge: '작업/게임' },
  { rank: 4, name: 'AMD 라이젠5 7500F', category: 'cpu', score: 26800, gameFpsAverage: 228, price: 215000, costPerPoint: 8.0, badge: '가성비 1위' },
  { rank: 5, name: '인텔 코어i5-14세대 14400F', category: 'cpu', score: 27100, gameFpsAverage: 216, price: 245000, costPerPoint: 9.0 },
  { rank: 6, name: '인텔 코어i3-12세대 12100F', category: 'cpu', score: 14200, gameFpsAverage: 154, price: 98000, costPerPoint: 6.9, badge: '보급형 최강' },

  { rank: 1, name: '지포스 RTX 4080 SUPER 16GB', category: 'gpu', score: 28900, gameFpsAverage: 185, price: 1489000, costPerPoint: 51.5, badge: '4K 하이엔드' },
  { rank: 2, name: '지포스 RTX 4070 Ti SUPER 16GB', category: 'gpu', score: 24800, gameFpsAverage: 162, price: 1198000, costPerPoint: 48.3, badge: 'VRAM 16GB' },
  { rank: 3, name: '지포스 RTX 4070 SUPER 12GB', category: 'gpu', score: 21100, gameFpsAverage: 144, price: 849000, costPerPoint: 40.2, badge: 'QHD 종결픽' },
  { rank: 4, name: '지포스 RTX 4060 8GB', category: 'gpu', score: 10450, gameFpsAverage: 96, price: 435000, costPerPoint: 41.6, badge: 'FHD 국민픽' },
  { rank: 5, name: '지포스 GTX 1660 SUPER 6GB', category: 'gpu', score: 6100, gameFpsAverage: 62, price: 268000, costPerPoint: 43.9, badge: '가성비 입문' },
];

/**
 * 실시간 부품 호환성 정밀 진단 알고리즘
 */
export function checkCompatibility(
  selectedParts: Partial<Record<PartCategory, PartItem>>
): CompatibilityReport {
  const issues: CompatibilityIssue[] = [];

  const cpu = selectedParts.cpu;
  const cooler = selectedParts.cooler;
  const motherboard = selectedParts.motherboard;
  const ram = selectedParts.ram;
  const gpu = selectedParts.gpu;
  const ssd = selectedParts.ssd;
  const pcCase = selectedParts.case;
  const power = selectedParts.power;

  // 1. CPU <-> 메인보드 소켓 호환성 검사
  if (cpu && motherboard) {
    if (cpu.socket && motherboard.socket) {
      if (cpu.socket === motherboard.socket) {
        issues.push({
          type: 'success',
          title: `소켓 규격 정상 일치 (${cpu.socket})`,
          message: `선택하신 CPU(${cpu.name})와 메인보드(${motherboard.name})가 모두 ${cpu.socket} 소켓으로 완벽히 호환됩니다.`,
          affectedCategories: ['cpu', 'motherboard'],
        });
      } else {
        issues.push({
          type: 'error',
          title: `소켓 규격 불일치로 조립 불가!`,
          message: `CPU는 [${cpu.socket}] 규격이나 메인보드는 [${motherboard.socket}] 규격입니다. 물리적으로 장착할 수 없으니 같은 규격의 메인보드로 변경하세요.`,
          affectedCategories: ['cpu', 'motherboard'],
        });
      }
    }
  }

  // 2. 메모리(RAM) 세대 호환성 검사
  if (motherboard && ram) {
    if (motherboard.memoryType && ram.memoryType) {
      if (motherboard.memoryType === ram.memoryType) {
        issues.push({
          type: 'success',
          title: `메모리 세대 규격 정상 (${ram.memoryType})`,
          message: `메인보드가 ${motherboard.memoryType} 슬롯을 지원하며 선택하신 메모리(${ram.memoryType})와 완벽히 호환됩니다.`,
          affectedCategories: ['motherboard', 'ram'],
        });
      } else {
        issues.push({
          type: 'error',
          title: `메모리 세대 규격 불일치!`,
          message: `메인보드는 [${motherboard.memoryType}]를 지원하지만 선택하신 메모리는 [${ram.memoryType}]입니다. 핀 배열이 달라 장착할 수 없습니다.`,
          affectedCategories: ['motherboard', 'ram'],
        });
      }
    }
  }

  // 3. 쿨러 높이 <-> 케이스 최대 허용 높이 검사
  if (cooler && pcCase) {
    if (cooler.heightMm && pcCase.maxCoolerHeightMm) {
      if (cooler.heightMm <= pcCase.maxCoolerHeightMm) {
        const margin = pcCase.maxCoolerHeightMm - cooler.heightMm;
        issues.push({
          type: 'success',
          title: `쿨러 높이 정상 수용 (여유: ${margin}mm)`,
          message: `쿨러 높이 ${cooler.heightMm}mm가 케이스 허용 한계(${pcCase.maxCoolerHeightMm}mm) 내에 안전하게 장착됩니다.`,
          affectedCategories: ['cooler', 'case'],
        });
      } else {
        const overflow = cooler.heightMm - pcCase.maxCoolerHeightMm;
        issues.push({
          type: 'error',
          title: `쿨러 높이 초과로 케이스 옆판 닫힘 불가!`,
          message: `쿨러 높이(${cooler.heightMm}mm)가 케이스 허용 높이(${pcCase.maxCoolerHeightMm}mm)보다 ${overflow}mm 더 높아 측면 강화유리가 닫히지 않습니다.`,
          affectedCategories: ['cooler', 'case'],
        });
      }
    }
  }

  // 4. 그래픽카드 길이 <-> 케이스 최대 허용 길이 검사
  if (gpu && pcCase) {
    if (gpu.lengthMm && pcCase.maxGpuLengthMm) {
      if (gpu.lengthMm <= pcCase.maxGpuLengthMm) {
        const margin = pcCase.maxGpuLengthMm - gpu.lengthMm;
        issues.push({
          type: 'success',
          title: `그래픽카드 장착 공간 충분 (여유: ${margin}mm)`,
          message: `GPU 길이 ${gpu.lengthMm}mm가 케이스 한계(${pcCase.maxGpuLengthMm}mm) 내에 문제없이 들어갑니다.`,
          affectedCategories: ['gpu', 'case'],
        });
      } else {
        const overflow = gpu.lengthMm - pcCase.maxGpuLengthMm;
        issues.push({
          type: 'error',
          title: `그래픽카드 길이 초과 간섭 발생!`,
          message: `GPU 길이(${gpu.lengthMm}mm)가 케이스 최대 장착 길이(${pcCase.maxGpuLengthMm}mm)보다 ${overflow}mm 길어 전면 팬에 걸립니다.`,
          affectedCategories: ['gpu', 'case'],
        });
      }
    }
  }

  // 5. 소비 전력 계산 및 파워 정격 용량 진단
  const cpuTdp = cpu?.tdp ?? 65;
  const gpuTdp = gpu?.tdp ?? (gpu ? 150 : 0);
  const coolerTdp = cooler?.tdp ?? 5;
  const mbTdp = motherboard?.tdp ?? 20;
  const ramTdp = ram?.tdp ?? 8;
  const ssdTdp = ssd?.tdp ?? 6;
  const systemBase = 60; // 팬, LED, 칩셋 등 기본 마진

  const estimatedWattage = cpuTdp + gpuTdp + coolerTdp + mbTdp + ramTdp + ssdTdp + systemBase;
  // 권장 파워: 피크 전력 및 파워 수명/효율 고려 (약 1.3배 이상 또는 최소 500W)
  const recommendedWattage = Math.max(500, Math.ceil((estimatedWattage * 1.35) / 50) * 50);

  let wattageAdequacy: 'sufficient' | 'tight' | 'insufficient' | 'no_power' = 'no_power';
  const selectedWattage = power?.wattage ?? 0;

  if (power && power.wattage) {
    if (power.wattage >= recommendedWattage) {
      wattageAdequacy = 'sufficient';
      issues.push({
        type: 'success',
        title: `파워 용량 안정성 충분 (선택: ${power.wattage}W)`,
        message: `시스템 예상 소비전력 ${estimatedWattage}W에 대한 권장 파워(${recommendedWattage}W)보다 넉넉하여 최대 효율 구간(50~70% 로드)에서 조용하고 안정적으로 작동합니다.`,
        affectedCategories: ['power'],
      });
    } else if (power.wattage >= estimatedWattage + 50) {
      wattageAdequacy = 'tight';
      issues.push({
        type: 'warning',
        title: `파워 용량 다소 타이트함 (${power.wattage}W)`,
        message: `부팅 및 일반 동작은 가능하지만, 게임 풀로드 시 파워 팬 소음이 커지고 장기적인 안정성이 저하될 수 있어 ${recommendedWattage}W 이상을 권장합니다.`,
        affectedCategories: ['power'],
      });
    } else {
      wattageAdequacy = 'insufficient';
      issues.push({
        type: 'error',
        title: `파워 용량 부족으로 전원 셧다운 위험!`,
        message: `시스템 최대 예상 전력(${estimatedWattage}W) 대비 파워(${power.wattage}W)가 부족합니다. 고사양 게임 실행 시 블랙스크린이나 강제 재부팅이 발생합니다. 최소 ${recommendedWattage}W 파워로 교체하세요.`,
        affectedCategories: ['power'],
      });
    }
  }

  // 6. 메인보드 크기와 케이스 규격 검사
  if (motherboard && pcCase) {
    if (pcCase.formFactor === 'M-ATX' && motherboard.formFactor === 'ATX') {
      issues.push({
        type: 'error',
        title: `메인보드 규격(ATX)이 미니타워 케이스보다 큼!`,
        message: `선택하신 케이스는 M-ATX까지만 장착 가능하며, 표준 ATX 메인보드는 물리적으로 나사 홀이 맞지 않아 장착할 수 없습니다.`,
        affectedCategories: ['motherboard', 'case'],
      });
    }
  }

  // 총 견적 금액 계산
  const totalPrice = Object.values(selectedParts).reduce((sum, item) => sum + (item?.price ?? 0), 0);
  const hasErrors = issues.some((issue) => issue.type === 'error');

  return {
    isCompatible: !hasErrors,
    issues,
    totalPrice,
    estimatedWattage,
    recommendedWattage,
    selectedWattage,
    wattageAdequacy,
  };
}

/**
 * 견적서 클립보드 복사용 깔끔한 텍스트 포맷 생성 함수
 */
export function formatQuotationForClipboard(
  selectedParts: Partial<Record<PartCategory, PartItem>>,
  report: CompatibilityReport
): string {
  const dateStr = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const categories: PartCategory[] = ['cpu', 'cooler', 'motherboard', 'ram', 'gpu', 'ssd', 'case', 'power'];

  let text = `=========================================\n`;
  text += `⚡ [눈쟁DB] 맞춤 PC 견적서 (${dateStr})\n`;
  text += `=========================================\n\n`;

  categories.forEach((cat) => {
    const part = selectedParts[cat];
    const catLabel = CATEGORY_LABELS[cat].label;
    if (part) {
      text += `[${catLabel}]\n`;
      text += `  • 모델명: ${part.name}\n`;
      text += `  • 주요스펙: ${part.specs}\n`;
      text += `  • 금액: ${part.price.toLocaleString()} 원\n\n`;
    } else {
      text += `[${catLabel}]\n  • 미선택\n\n`;
    }
  });

  text += `-----------------------------------------\n`;
  text += `총 예상 견적 금액: ${report.totalPrice.toLocaleString()} 원\n`;
  text += `시스템 예상 소비전력: 약 ${report.estimatedWattage}W (권장 파워: ${report.recommendedWattage}W 이상)\n`;
  text += `호환성 진단 결과: ${report.isCompatible ? '✓ 완벽 호환 (조립 가능)' : '⚠️ 부품 간 간섭/호환 주의 필요'}\n`;
  text += `=========================================\n`;
  text += `* 생성 출처: 눈쟁DB (PC Hardware & Optimization Archive)\n`;

  return text;
}
