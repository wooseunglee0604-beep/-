export type PartCategory =
  | 'cpu'
  | 'cooler'
  | 'motherboard'
  | 'ram'
  | 'gpu'
  | 'ssd'
  | 'case'
  | 'power';

export interface PartItem {
  id: string;
  category: PartCategory;
  name: string;
  manufacturer: string;
  price: number;
  specs: string;
  tdp?: number; // CPU or GPU TDP / consumption in Watts
  socket?: string; // AM5, AM4, LGA1700, LGA1851
  memoryType?: 'DDR4' | 'DDR5';
  heightMm?: number; // Cooler height in mm
  maxCoolerHeightMm?: number; // Case max cooler clearance
  lengthMm?: number; // GPU length in mm
  maxGpuLengthMm?: number; // Case max GPU clearance
  wattage?: number; // PSU rated wattage (e.g. 750)
  formFactor?: 'ATX' | 'M-ATX' | 'ITX';
  efficiencyRating?: string; // 80PLUS Bronze, Gold, etc.
  benchmarkScore?: number;
  badge?: string;
  description?: string;
  imageUrl?: string;
}

export interface CuratedPreset {
  id: string;
  title: string;
  tagline: string;
  tier: 'budget' | 'standard' | 'high' | 'ultra';
  targetBudget: string;
  totalPrice: number;
  recommendedGames: string[];
  targetResolution: string;
  parts: { [key in PartCategory]: string }; // Map category to PartItem.id
  description: string;
}

export interface CompatibilityIssue {
  type: 'error' | 'warning' | 'success';
  title: string;
  message: string;
  affectedCategories: PartCategory[];
}

export interface CompatibilityReport {
  isCompatible: boolean;
  issues: CompatibilityIssue[];
  totalPrice: number;
  estimatedWattage: number;
  recommendedWattage: number;
  selectedWattage: number;
  wattageAdequacy: 'sufficient' | 'tight' | 'insufficient' | 'no_power';
}

export interface GameOptimizationGuide {
  id: string;
  gameTitle: string;
  genre: string;
  iconName: string;
  recommendedSpecs: string;
  inGameSettings: {
    category: string;
    setting: string;
    recommended: string;
    reason: string;
  }[];
  nvidiaDriverSettings: {
    setting: string;
    value: string;
    reason: string;
  }[];
  proTip: string;
}

export interface BenchmarkRankItem {
  rank: number;
  name: string;
  category: 'cpu' | 'gpu';
  score: number;
  gameFpsAverage: number;
  price: number;
  costPerPoint: number;
  badge?: string;
}
