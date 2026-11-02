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
        p-8 md:p-10 rounded-panel
        bg-surface border border-line/10 shadow-panel
        transition-all duration-200 hover:-translate-y-0.5
      "
    >
      <div className="w-12 h-12 rounded-ctl bg-control flex items-center justify-center text-accent mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-accent mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
