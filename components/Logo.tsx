import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-end gap-1.5 h-12 ${className}`} role="img" aria-label="MyBalance Logo">
      {/* Static Bar 1 */}
      <div className="w-3 rounded-full bg-[#2f4f3f] dark:bg-[#4a7a63] h-[50%] opacity-60"></div>
      {/* Static Bar 2 */}
      <div className="w-3 rounded-full bg-[#2f4f3f] dark:bg-[#4a7a63] h-[75%] opacity-80"></div>
      {/* Static Bar 3 - Primary */}
      <div className="w-3 rounded-full bg-[#2f4f3f] dark:bg-[#4a7a63] h-[100%] shadow-lg shadow-[#2f4f3f]/20 dark:shadow-green-900/40"></div>
      {/* Static Bar 4 */}
      <div className="w-3 rounded-full bg-[#2f4f3f] dark:bg-[#4a7a63] h-[65%] opacity-70"></div>
    </div>
  );
};

export default Logo;