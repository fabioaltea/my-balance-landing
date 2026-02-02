import React, { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import {
  Github,
  Server,
  Layout,
  Database,
  Shield,
  Key,
  Cloud,
  Smartphone,
} from "lucide-react";
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
        ease: "power3.out",
      });

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
      });

      // Animate cards with stagger
      gsap.from('.tech-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.4,
        ease: "power3.out",
      });

      // Animate CTA section
      gsap.from('.cta-section', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={containerRef} className="pt-20 md:pt-32 pb-32 md:pb-20 px-4 max-w-full md:max-w-5xl mx-auto min-h-screen">
      <h1 ref={titleRef} className="text-3xl md:text-5xl font-bold text-[#2f4f3f] dark:text-white mb-4 md:mb-6 text-center">
        {t.techStack.title}
      </h1>
      <p ref={subtitleRef} className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
        {t.techStack.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mobile App */}
        <div className="tech-card p-8 rounded-[2.5rem] bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <Smartphone
              className="text-blue-600 dark:text-blue-400"
              size={32}
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t.techStack.sections.mobileApp.title}
            </h2>
          </div>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.reactNative}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.typescript}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.reanimated}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></span>
              <div>{t.techStack.sections.mobileApp.items.context}</div>
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="tech-card p-8 rounded-[2.5rem] bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <Cloud className="text-purple-600 dark:text-purple-400" size={32} />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t.techStack.sections.backend.title}
            </h2>
          </div>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0"></span>
              <div>{t.techStack.sections.backend.items.node}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0"></span>
              <div>{t.techStack.sections.backend.items.vercel}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0"></span>
              <div>{t.techStack.sections.backend.items.typescript}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 shrink-0"></span>
              <div>{t.techStack.sections.backend.items.postgresql}</div>
            </li>
          </ul>
        </div>

        {/* Data Storage */}
        <div className="tech-card p-8 rounded-[2.5rem] bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <Database
              className="text-green-600 dark:text-green-400"
              size={32}
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t.techStack.sections.dataStorage.title}
            </h2>
          </div>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.googleSheets}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.oauth}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.noCloud}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></span>
              <div>{t.techStack.sections.dataStorage.items.export}</div>
            </li>
          </ul>
        </div>

        {/* Authentication */}
        <div className="tech-card p-8 rounded-[2.5rem] bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/20">
          <div className="flex items-center gap-4 mb-6">
            <Shield
              className="text-orange-600 dark:text-orange-400"
              size={32}
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t.techStack.sections.security.title}
            </h2>
          </div>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
              <div>{t.techStack.sections.security.items.webauthn}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
              <div>{t.techStack.sections.security.items.passkey}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
              <div>{t.techStack.sections.security.items.tokenRefresh}</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></span>
              <div>{t.techStack.sections.security.items.encrypted}</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Architecture Diagram */}
      <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#2f4f3f]/10 to-[#2f4f3f]/5 dark:from-white/10 dark:to-white/5 backdrop-blur-lg border border-[#2f4f3f]/20 dark:border-white/10">
        <h2 className="text-2xl font-bold text-[#2f4f3f] dark:text-white mb-6 text-center">
          {t.techStack.architecture.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Smartphone
                className="text-blue-600 dark:text-blue-400"
                size={28}
              />
            </div>
            <span className="font-semibold text-gray-800 dark:text-white">
              {t.techStack.architecture.mobileApp}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.techStack.architecture.reactNative}
            </span>
          </div>

          <div className="text-2xl text-gray-400 dark:text-gray-500 rotate-90 md:rotate-0">
            →
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Cloud
                className="text-purple-600 dark:text-purple-400"
                size={28}
              />
            </div>
            <span className="font-semibold text-gray-800 dark:text-white">
              {t.techStack.architecture.backendApi}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.techStack.architecture.expressVercel}
            </span>
          </div>

          <div className="text-2xl text-gray-400 dark:text-gray-500 rotate-90 md:rotate-0">
            →
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Database
                className="text-green-600 dark:text-green-400"
                size={28}
              />
            </div>
            <span className="font-semibold text-gray-800 dark:text-white">
              {t.techStack.architecture.yourData}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t.techStack.architecture.googleSheets}
            </span>
          </div>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-8 max-w-2xl mx-auto">
          {t.techStack.architecture.description}
        </p>
      </div>

      {/* What We Store vs What You Own */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-[2.5rem] bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
          <h3 className="font-bold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
            <Key size={20} />
            {t.techStack.whatWeStore.title}
          </h3>
          <ul className="space-y-2 text-red-700 dark:text-red-300 text-sm">
            <li>• {t.techStack.whatWeStore.items.email}</li>
            <li>• {t.techStack.whatWeStore.items.spreadsheetId}</li>
            <li>• {t.techStack.whatWeStore.items.tokens}</li>
            <li>• {t.techStack.whatWeStore.items.session}</li>
            <li>• {t.techStack.whatWeStore.items.pushTokens}</li>
          </ul>
        </div>

        <div className="p-8 rounded-[2.5rem] bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30">
          <h3 className="font-bold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
            <Shield size={20} />
            {t.techStack.whatYouOwn.title}
          </h3>
          <ul className="space-y-2 text-green-700 dark:text-green-300 text-sm">
            <li>• {t.techStack.whatYouOwn.items.transactions}</li>
            <li>• {t.techStack.whatYouOwn.items.accounts}</li>
            <li>• {t.techStack.whatYouOwn.items.categories}</li>
            <li>• {t.techStack.whatYouOwn.items.history}</li>
            <li>• {t.techStack.whatYouOwn.items.export}</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#2f4f3f]/10 to-[#2f4f3f]/5 dark:from-white/10 dark:to-white/5 backdrop-blur-lg border border-[#2f4f3f]/20 dark:border-white/10 text-center cta-section">
        <h2 className="text-2xl font-bold text-[#2f4f3f] dark:text-white mb-4">
          {t.techStack.cta.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t.techStack.cta.description}
        </p>
        <a
          href="https://github.com/fabioaltea/mybalance"
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-3 px-8 py-4 rounded-full
            bg-black text-white dark:bg-white dark:text-black
            font-bold text-lg hover:scale-105 transition-transform
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
