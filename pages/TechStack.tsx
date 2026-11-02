import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Database, Shield, Key, Cloud, Smartphone } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';

const TechStack: React.FC = () => {
  const { t } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Animate cards with stagger
      gsap.from('.tech-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Animate CTA section
      gsap.from('.cta-section', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="pt-20 md:pt-32 pb-32 md:pb-20 px-4 max-w-full md:max-w-5xl mx-auto min-h-screen"
    >
      <h1
        ref={titleRef}
        className="text-3xl md:text-5xl font-bold tracking-[-0.04em] text-accent mb-4 md:mb-6 text-center"
      >
        {t.techStack.title}
      </h1>
      <p ref={subtitleRef} className="text-center text-muted max-w-2xl mx-auto mb-16">
        {t.techStack.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mobile App */}
        <div className="tech-card p-8 rounded-panel bg-surface border border-line/10 shadow-panel">
          <div className="flex items-center gap-4 mb-6">
            <Smartphone className="text-accent" size={32} />
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              {t.techStack.sections.mobileApp.title}
            </h2>
          </div>
          <ul className="space-y-4 text-ink/80">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.reactNative}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.router}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.query}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.maps}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.typescript}</div>
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="tech-card p-8 rounded-panel bg-surface border border-line/10 shadow-panel">
          <div className="flex items-center gap-4 mb-6">
            <Cloud className="text-accent" size={32} />
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              {t.techStack.sections.backend.title}
            </h2>
          </div>
          <ul className="space-y-4 text-ink/80">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.backend.items.node}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.backend.items.vercel}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.backend.items.typescript}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.backend.items.postgresql}</div>
            </li>
          </ul>
        </div>

        {/* Data Storage */}
        <div className="tech-card p-8 rounded-panel bg-surface border border-line/10 shadow-panel">
          <div className="flex items-center gap-4 mb-6">
            <Database className="text-accent" size={32} />
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              {t.techStack.sections.dataStorage.title}
            </h2>
          </div>
          <ul className="space-y-4 text-ink/80">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.googleSheets}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.oauth}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.noCloud}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.export}</div>
            </li>
          </ul>
        </div>

        {/* Authentication */}
        <div className="tech-card p-8 rounded-panel bg-surface border border-line/10 shadow-panel">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="text-accent" size={32} />
            <h2 className="text-2xl font-bold tracking-tight text-ink">
              {t.techStack.sections.security.title}
            </h2>
          </div>
          <ul className="space-y-4 text-ink/80">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.security.items.webauthn}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.security.items.passkey}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.security.items.tokenRefresh}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-accent shrink-0"></span>
              <div>{t.techStack.sections.security.items.encrypted}</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="mt-16 p-8 rounded-panel bg-surface border border-line/10 shadow-panel">
        <h2 className="text-2xl font-bold tracking-tight text-accent mb-6 text-center">
          {t.techStack.architecture.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-control flex items-center justify-center">
              <Smartphone className="text-accent" size={28} />
            </div>
            <span className="font-semibold text-ink">{t.techStack.architecture.mobileApp}</span>
            <span className="text-sm text-muted">{t.techStack.architecture.reactNative}</span>
          </div>

          <div className="text-2xl text-muted/60 rotate-90 md:rotate-0">→</div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-control flex items-center justify-center">
              <Cloud className="text-accent" size={28} />
            </div>
            <span className="font-semibold text-ink">{t.techStack.architecture.backendApi}</span>
            <span className="text-sm text-muted">{t.techStack.architecture.expressVercel}</span>
          </div>

          <div className="text-2xl text-muted/60 rotate-90 md:rotate-0">→</div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-income/15 flex items-center justify-center">
              <Database className="text-income" size={28} />
            </div>
            <span className="font-semibold text-ink">{t.techStack.architecture.yourData}</span>
            <span className="text-sm text-muted">{t.techStack.architecture.googleSheets}</span>
          </div>
        </div>

        <p className="text-center text-muted mt-8 max-w-2xl mx-auto">
          {t.techStack.architecture.description}
        </p>
      </div>

      {/* What We Store vs What You Own */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-panel bg-expense/10 border border-expense/25">
          <h3 className="font-bold text-expense mb-4 flex items-center gap-2">
            <Key size={20} />
            {t.techStack.whatWeStore.title}
          </h3>
          <ul className="space-y-2 text-ink/80 text-sm">
            <li>• {t.techStack.whatWeStore.items.email}</li>
            <li>• {t.techStack.whatWeStore.items.spreadsheetId}</li>
            <li>• {t.techStack.whatWeStore.items.tokens}</li>
            <li>• {t.techStack.whatWeStore.items.session}</li>
            <li>• {t.techStack.whatWeStore.items.pushTokens}</li>
          </ul>
        </div>

        <div className="p-8 rounded-panel bg-income/10 border border-income/25">
          <h3 className="font-bold text-income mb-4 flex items-center gap-2">
            <Shield size={20} />
            {t.techStack.whatYouOwn.title}
          </h3>
          <ul className="space-y-2 text-ink/80 text-sm">
            <li>• {t.techStack.whatYouOwn.items.transactions}</li>
            <li>• {t.techStack.whatYouOwn.items.accounts}</li>
            <li>• {t.techStack.whatYouOwn.items.categories}</li>
            <li>• {t.techStack.whatYouOwn.items.history}</li>
            <li>• {t.techStack.whatYouOwn.items.export}</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 p-8 rounded-panel bg-deep border border-white/10 shadow-panel text-center cta-section">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
          {t.techStack.cta.title}
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">{t.techStack.cta.description}</p>
        <a
          href="https://github.com/fabioaltea/my-balance-landing"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-3 px-8 py-4 rounded-ctl
            bg-white text-deep
            font-semibold text-lg hover:opacity-90 active:scale-[0.98] transition-all
          "
        >
          <Github size={24} />
          {t.techStack.cta.button}
        </a>
      </div>
    </div>
  );
};

export default TechStack;
