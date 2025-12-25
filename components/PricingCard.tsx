
import React from 'react';
import { PricingPlan, BillingCycle } from '../types';
import { CheckIcon, CrownIcon, StarIcon } from '../constants';

interface PricingCardProps {
  plan: PricingPlan;
  billingCycle: BillingCycle;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle }) => {
  const isMaxPlan = plan.id === 'expansion';
  const isFoundation = plan.id === 'foundation';
  const isStandalone = plan.id === 'standalone';
  const data = billingCycle === 'annual' ? plan.annual : plan.monthly;
  const features = billingCycle === 'annual' ? plan.features.annual : plan.features.monthly;

  // Greatly Awakened monthly shown as current plan
  const isCurrentlyActive = isFoundation && billingCycle === 'monthly';

  const getBorderClasses = () => {
    const base = plan.borderStyle === 'dashed' ? 'border-dashed' : 'border-solid';
    const activeRing = isCurrentlyActive ? 'ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-[#0d0415]' : '';
    const glowEffect = plan.borderStyle === 'glow' ? 'shadow-[0_0_50px_rgba(168,85,247,0.15)]' : '';
    
    return `border ${base} ${activeRing} ${glowEffect}`;
  };

  const getButtonGradient = () => {
    if (isCurrentlyActive) return 'none';
    if (isFoundation) return 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
    if (isMaxPlan) return 'linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)';
    if (isStandalone) return 'linear-gradient(135deg, #ea580c 0%, #facc15 100%)';
    return plan.colors.button;
  };

  const getCardBackground = () => {
    if (isFoundation) return 'linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, #05110d 100%)';
    if (isMaxPlan) return 'linear-gradient(145deg, rgba(168, 85, 247, 0.1) 0%, #0f061a 100%)';
    if (isStandalone) return 'linear-gradient(145deg, rgba(249, 115, 22, 0.07) 0%, #160b05 100%)';
    return plan.colors.bg;
  };

  return (
    <div 
      className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] group ${getBorderClasses()}`}
      style={{ 
        borderColor: plan.colors.border, 
        background: getCardBackground()
      }}
    >
      {/* Current Plan Indicator Overlay */}
      {isCurrentlyActive && (
        <div className="absolute top-9 right-6">
          <span className="text-[9px] font-black text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20 uppercase tracking-widest">
            Active
          </span>
        </div>
      )}

      {/* Badge */}
      <div className="flex justify-center -mt-11 mb-8">
        <span 
          className="border text-[10px] font-black tracking-widest px-5 py-1.5 rounded-full uppercase shadow-xl"
          style={{ 
            backgroundColor: plan.colors.bg, 
            borderColor: plan.colors.border, 
            color: 'white',
            opacity: 0.9
          }}
        >
          {plan.badge}
        </span>
      </div>

      {/* Content Header */}
      <div className="mb-6 h-[110px]">
        <h3 className="text-2xl font-bold font-montserrat mb-3 leading-tight text-white group-hover:text-white transition-colors">
          {plan.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {plan.description}
        </p>
      </div>

      {/* Pricing Section */}
      <div className="flex items-center gap-3 mb-10 h-[48px]">
        {data.previousPrice && (
          <span className="text-gray-400 line-through text-[1.5rem] font-black opacity-80 decoration-2">
            {data.previousPrice}
          </span>
        )}
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black text-white tracking-tight">
            {data.price}
          </span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            {data.note}
          </span>
        </div>
      </div>

      {/* Feature Section */}
      <div className="flex-grow">
        <div className="text-[10px] font-black text-gray-500 tracking-[0.2em] mb-6 uppercase flex items-center gap-3">
          <div className="h-[1px] w-4 opacity-10 bg-white" />
          FEATURES
          <div className="h-[1px] w-full opacity-10 bg-white" />
        </div>
        <ul className="space-y-4 mb-10">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {isMaxPlan ? (
                <StarIcon color={plan.colors.accent} />
              ) : (
                feature.isPremium ? <CrownIcon /> : <CheckIcon color={plan.colors.accent} />
              )}
              <span className={`text-sm leading-snug text-gray-300 ${
                feature.highlight ? 'font-bold text-orange-200 bg-orange-500/10 rounded px-1' : ''
              }`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button 
          disabled={isCurrentlyActive}
          className={`w-full py-4 px-6 rounded-xl font-bold text-base shadow-2xl uppercase tracking-wider transition-all active:scale-[0.98] border border-white/10 ${
            isCurrentlyActive ? 'cursor-default' : 'hover:brightness-110 brightness-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]'
          }`}
          style={{ 
            backgroundImage: getButtonGradient(),
            backgroundColor: isCurrentlyActive ? 'rgba(255,255,255,0.05)' : 'transparent',
            color: isCurrentlyActive ? '#9ca3af' : 'white',
            border: isCurrentlyActive ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.2)'
          }}
        >
          {isCurrentlyActive ? 'Current Plan' : data.buttonText}
        </button>

        {/* Subtext Logic */}
        <div className="h-6 flex items-center justify-center mt-2">
          {isFoundation && (
            <p className="text-[10px] text-emerald-500/60 font-bold uppercase tracking-widest">
              Essential Foundation
            </p>
          )}
          {isMaxPlan && (
            <p className="text-[10px] text-purple-400 font-bold uppercase tracking-widest opacity-80">
              Layered Capability
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
