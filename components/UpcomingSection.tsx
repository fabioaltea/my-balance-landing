import React from 'react';
import { Bot, MessageCircle, FileText } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';

const UpcomingSection: React.FC = () => {
  const { t } = useLocale();
  const s = t.home.upcomingSection;

  const items = [
    { icon: Bot, ...s.items.ai },
    { icon: MessageCircle, ...s.items.whatsapp },
    { icon: FileText, ...s.items.statements },
  ];

  return (
    <section className="mt-32 md:mt-44 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-muted mb-3">
          {s.eyebrow}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent mb-4">
          {s.title}
        </h2>
        <p className="text-muted text-lg">{s.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
        {items.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="p-8 rounded-panel bg-surface border border-dashed border-line/25"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-ctl bg-control flex items-center justify-center text-accent">
                <Icon size={24} />
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-control text-[11px] font-semibold text-muted">
                {s.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-accent mb-3">{title}</h3>
            <p className="text-muted leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSection;
