
import React from 'react';

const OfferBanner: React.FC = () => {
  return (
    <div className="w-[96%] mx-auto mb-16 special-offer-gradient rounded-2xl py-4 px-6 md:py-5 md:px-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 shadow-2xl relative overflow-hidden border border-white/5">
      {/* Decorative light overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />
      
      <div className="text-center md:text-left z-10">
        <p className="text-white text-xs sm:text-sm md:text-lg font-medium leading-tight whitespace-nowrap">
          <span className="text-orange-400 font-black italic drop-shadow-[0_0_8px_rgba(251,146,60,0.4)] mr-1">EXCLUSIVE!</span> Add <span className="font-black text-white font-montserrat tracking-tight text-xs sm:text-sm md:text-lg">MAX: Your Virtual Oracle Gateway™</span>
        </p>
      </div>

      <div className="hidden md:block h-6 w-[1px] bg-white/20 z-10" />

      <div className="text-center md:text-right z-10 shrink-0">
        <div className="flex items-center justify-center md:justify-end gap-2 whitespace-nowrap">
          <p className="text-white text-xs md:text-base font-medium">Get a</p>
          <span className="text-orange-400 font-black text-xl md:text-3xl tracking-tighter drop-shadow-lg leading-none">42% DISCOUNT</span>
        </div>
        <p className="text-white/60 text-[8px] font-black uppercase tracking-[0.2em] mt-0.5">
          Locked for 12 months
        </p>
      </div>

      {/* Subtle animated shine effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-[shimmer_5s_infinite]" />
      </div>
    </div>
  );
};

export default OfferBanner;
