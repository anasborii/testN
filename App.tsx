
import React, { useState } from 'react';
import Header from './components/Header';
import Toggle from './components/Toggle';
import OfferBanner from './components/OfferBanner';
import PricingCard from './components/PricingCard';
import { PLANS } from './constants';
import { BillingCycle } from './types';

const App: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual');

  return (
    <div className="min-h-screen pb-24 pt-12 selection:bg-purple-500/30 overflow-x-hidden">
      {/* Updated Background Decorative Elements with new palette */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#065f46]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-[#4338ca]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[30%] h-[30%] bg-[#9a3412]/5 rounded-full blur-[100px]" />
      </div>

      <main className="container mx-auto px-4 max-w-6xl">
        <Header />
        
        <Toggle current={billingCycle} onChange={setBillingCycle} />

        <div className="flex flex-col items-center">
            <OfferBanner />
            
            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch w-full">
              {PLANS.map((plan) => (
                <PricingCard 
                  key={plan.id} 
                  plan={plan} 
                  billingCycle={billingCycle}
                />
              ))}
            </div>
        </div>
      </main>
    </div>
  );
};

export default App;
