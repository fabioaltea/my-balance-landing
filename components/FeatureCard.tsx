import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <div 
      className="
        p-10 rounded-[2.5rem] 
        bg-white/40 dark:bg-black/40 
        backdrop-blur-xl 
        border border-white/60 dark:border-white/5 
        shadow-lg hover:shadow-xl transition-all duration-300
        hover:-translate-y-1
      "
    >
      <div className="w-14 h-14 rounded-2xl bg-[#2f4f3f]/10 dark:bg-green-500/20 flex items-center justify-center text-[#2f4f3f] dark:text-green-400 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#2f4f3f] dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;