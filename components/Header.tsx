
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-10 px-4">
      <h1 className="text-3xl md:text-5xl font-black font-montserrat tracking-tight mb-3">
        UPGRADE YOUR <span className="gradient-text">MEMBERSHIP</span>
      </h1>
      <p className="text-base md:text-lg text-gray-400 italic font-medium">
        Unlock more features and enhance your spiritual journey
      </p>
    </div>
  );
};

export default Header;
