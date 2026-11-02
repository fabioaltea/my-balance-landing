import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, MonitorSmartphone } from 'lucide-react';
import logoImage from '../assets/logo.png';
import { useLocale } from '../hooks/useLocale';

const Hero: React.FC = () => {
  const { t } = useLocale();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the title/logo block
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });

      // Animate the text/buttons block with a slight delay
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Animate the phone mockup
      gsap.from(phoneRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 "
    >
      {/* Name and Logo Block */}
      <div ref={titleRef} className="flex flex-col items-center justify-center mb-10">
        <div className="mb-6">
          <img src={logoImage} alt="MyBalance Logo" className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.05em] text-accent">MyBalance</h1>
      </div>

      <div ref={textRef} className="max-w-2xl space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-ink">{t.hero.tagline}</h2>

        <p className="text-lg md:text-xl text-muted max-w-lg mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a
            href="https://app.mybalance.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex items-center gap-2 px-8 py-4 rounded-ctl
            bg-accent text-on-accent font-semibold text-lg shadow-control
            hover:opacity-90 active:scale-[0.98]
            transition-all duration-200
          "
          >
            {t.hero.getStarted}
            <ArrowRight size={20} />
          </a>

          <button
            onClick={() => navigate('/how-it-works')}
            className="
            flex items-center gap-2 px-8 py-4 rounded-ctl
            bg-control border border-line/10
            text-accent font-semibold text-lg
            hover:border-line/25 active:scale-[0.98] transition-all duration-200
          "
          >
            {t.nav.howItWorks}
            <ArrowRight size={20} />
          </button>
        </div>

        <p className="flex items-center justify-center gap-2 text-sm text-muted">
          <MonitorSmartphone size={16} className="text-accent" />
          {t.hero.platforms}
        </p>
      </div>
    </section>
  );
};

export default Hero;
