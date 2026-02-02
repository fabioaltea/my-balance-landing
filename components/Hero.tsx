import React, { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
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
        ease: "power4.out",
      });

      // Animate the text/buttons block with a slight delay
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3
      });

      // Animate the phone mockup
      gsap.from(phoneRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 ">
      
      {/* Name and Logo Block */}
      <div ref={titleRef} className="flex flex-col items-center justify-center mb-10">
        <div className="mb-6">
          <img src={logoImage} alt="MyBalance Logo" className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-[#2f4f3f] dark:text-white drop-shadow-sm">
          MyBalance
        </h1>
      </div>

      <div ref={textRef} className="max-w-2xl space-y-8">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2f4f3f] to-[#5a9c7d] dark:from-green-300 dark:to-emerald-600">
            {t.hero.tagline}
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => {
              document.getElementById('coming-soon')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="
            flex items-center gap-2 px-8 py-4 rounded-full
            bg-[#2f4f3f] text-white font-semibold text-lg
            hover:bg-[#3d6652] hover:scale-105 active:scale-95
            transition-all duration-300 shadow-xl shadow-[#2f4f3f]/20
          ">
            {t.hero.getStarted}
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => navigate('/how-it-works')}
            className="
            flex items-center gap-2 px-8 py-4 rounded-full
            bg-white/50 dark:bg-black/50 backdrop-blur-md
            border border-white/20 dark:border-white/10
            text-[#2f4f3f] dark:text-white font-semibold text-lg
            hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300
          ">
            {t.nav.howItWorks}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;