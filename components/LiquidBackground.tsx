import React from 'react';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Light/Dark Base */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500" />
      
      {/* Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#2f4f3f] opacity-20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#3d6652] opacity-15 dark:opacity-20 blur-[130px]" />
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-[#8fb3a1] opacity-10 dark:opacity-5 blur-[100px] animate-bounce" style={{ animationDuration: '10s' }} />
    </div>
  );
};

export default LiquidBackground;