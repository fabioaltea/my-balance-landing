import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown,
  LogIn,
  Sheet,
  Wallet,
  PlusCircle,
  PieChart,
  RefreshCw,
  TrendingUp,
} from 'lucide-react';
import { useLocale } from '../hooks/useLocale';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  const steps = [
    {
      number: 1,
      title: t.howItWorks.steps[1].title,
      description: t.howItWorks.steps[1].description,
      icon: LogIn,
      color: 'blue',
    },
    {
      number: 2,
      title: t.howItWorks.steps[2].title,
      description: t.howItWorks.steps[2].description,
      icon: Wallet,
      color: 'purple',
    },
    {
      number: 3,
      title: t.howItWorks.steps[3].title,
      description: t.howItWorks.steps[3].description,
      icon: PlusCircle,
      color: 'green',
    },
    {
      number: 4,
      title: t.howItWorks.steps[4].title,
      description: t.howItWorks.steps[4].description,
      icon: RefreshCw,
      color: 'orange',
    },
    {
      number: 5,
      title: t.howItWorks.steps[5].title,
      description: t.howItWorks.steps[5].description,
      icon: PieChart,
      color: 'pink',
    },
    {
      number: 6,
      title: t.howItWorks.steps[6].title,
      description: t.howItWorks.steps[6].description,
      icon: TrendingUp,
      color: 'teal',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string }> = {
    blue: { bg: 'bg-[#5B8DB8]/15', text: 'text-[#5B8DB8]' },
    purple: { bg: 'bg-[#8E7CB3]/15', text: 'text-[#8E7CB3]' },
    green: { bg: 'bg-income/15', text: 'text-income' },
    orange: { bg: 'bg-expense/15', text: 'text-expense' },
    pink: { bg: 'bg-[#C9A24A]/15', text: 'text-[#C9A24A]' },
    teal: { bg: 'bg-control', text: 'text-accent' },
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each step card
      const stepCards = gsap.utils.toArray<HTMLElement>('.step-card');
      stepCards.forEach((card, index) => {
        // Alternate animation direction
        const fromX = index % 2 === 0 ? -60 : 60;

        gsap.from(card, {
          x: fromX,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        // Animate the icon separately with a slight delay
        const icon = card.querySelector('.step-icon');
        if (icon) {
          gsap.from(icon, {
            scale: 0,
            rotation: -90,
            duration: 0.5,
            delay: 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
      });

      // Animate arrows
      const arrows = gsap.utils.toArray<HTMLElement>('.step-arrow');
      arrows.forEach((arrow) => {
        gsap.from(arrow, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: arrow,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Animate final card
      gsap.from('.final-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.final-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-20 md:pt-32 pb-32 md:pb-20 px-4 max-w-full md:max-w-4xl mx-auto min-h-screen"
    >
      <h1 className="text-3xl md:text-5xl font-bold tracking-[-0.04em] text-accent mb-4 md:mb-6 text-center">
        {t.howItWorks.title}
      </h1>
      <p className="text-base md:text-lg text-muted text-center mb-8 md:mb-12 max-w-2xl mx-auto">
        {t.howItWorks.subtitle}
      </p>

      <div className="space-y-4 md:space-y-6">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div
              className="
              step-card
              p-6 md:p-8 rounded-panel bg-surface border border-line/10 shadow-panel
              flex flex-col md:flex-row items-center gap-4 md:gap-6
            "
            >
              <div
                className={`
                step-icon
                w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl flex items-center justify-center
                ${colorClasses[step.color].bg} ${colorClasses[step.color].text}
              `}
              >
                <step.icon size={28} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-1 md:mb-2">
                  <span
                    className={`text-xs md:text-sm font-semibold ${colorClasses[step.color].text}`}
                  >
                    {t.howItWorks.stepLabel} {step.number}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-accent mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted">{step.description}</p>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="step-arrow flex justify-center text-accent/30">
                <ArrowDown size={32} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Data Ownership Highlight */}
      <div className="final-card mt-8 md:mt-16 p-6 md:p-8 rounded-panel bg-deep border border-white/10 shadow-panel">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center">
            <Sheet className="text-white" size={24} />
          </div>
          <div className="text-center md:text-left text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
              {t.howItWorks.finalCard.title}
            </h3>
            <p className="text-sm md:text-base text-white/70">
              {t.howItWorks.finalCard.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
