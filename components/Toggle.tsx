
import React from 'react';
import { BillingCycle } from '../types';

interface ToggleProps {
  current: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
}

const Toggle: React.FC<ToggleProps> = ({ current, onChange }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-[#0f061a] p-1.5 rounded-2xl flex items-center border border-white/5 shadow-2xl backdrop-blur-md">
        <button
          onClick={() => onChange('monthly')}
          className={`px-10 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
            current === 'monthly' 
              ? 'text-white bg-[#7c3aed] shadow-[0_0_20px_rgba(124,58,237,0.3)]' 
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => onChange('annual')}
          className={`relative px-10 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center gap-3 ${
            current === 'annual' 
              ? 'bg-[#7c3aed] text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]' 
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          Annual
          <span className={`bg-[#22c55e] text-[#0d0415] text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest shadow-sm transition-transform duration-300 ${current === 'annual' ? 'scale-100' : 'scale-90 opacity-70'}`}>
            Best Value
          </span>
        </button>
      </div>
    </div>
  );
};

export default Toggle;
