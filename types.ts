
export interface Feature {
  text: string;
  isPremium?: boolean;
  highlight?: boolean;
}

export interface PlanPricing {
  price: string;
  note: string;
  previousPrice?: string;
  buttonText: string;
}

export interface PlanColors {
  accent: string;
  border: string;
  bg: string;
  badge: string;
  button: string;
}

export interface PricingPlan {
  id: string;
  badge: string;
  title: string;
  description: string;
  monthly: PlanPricing;
  annual: PlanPricing;
  features: {
    monthly: Feature[];
    annual: Feature[];
  };
  colors: PlanColors;
  borderStyle?: 'solid' | 'dashed' | 'glow';
  isStandalone?: boolean;
}

export type BillingCycle = 'monthly' | 'annual';
