import React, { useState } from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import { Layers, Shield, Zap, Apple, Smartphone, Globe, Send, Check, AlertCircle } from "lucide-react";
import appScreenshot from "../assets/IMG_2051.PNG";
import chartsScreenshot1 from "../assets/IMG_2052.PNG";
import chartsScreenshot2 from "../assets/IMG_2053.PNG";
import movementScreenshot from "../assets/IMG_2054.PNG";
import { useLocale } from "../hooks/useLocale";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const Home: React.FC = () => {
  const { t } = useLocale();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage(t.home.comingSoonSection.form.invalid);
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch(`${API_URL}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(t.home.comingSoonSection.form.error);
      }
    } catch {
      setStatus('error');
      setErrorMessage(t.home.comingSoonSection.form.error);
    }
  };
  return (
    <div className="pb-20">
      <Hero />

      <section className=" px-4 overflow-hidden md:overflow-visible max-w-6xl mx-auto mt-32">
        <div className="relative">
          {/* Phone Mockup - Overflow */}
          <div
            className="
            hidden md:block absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10
            w-[240px] lg:w-[260px]
          "
          >
            <div className="relative rounded-[2.5rem] p-2 bg-gray-900 shadow-2xl shadow-black/40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />
              <div className="rounded-[2rem] overflow-hidden bg-black">
                <img
                  src={appScreenshot}
                  alt="MyBalance App"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#2f4f3f]/30 rounded-[3rem] -z-10 blur-2xl" />
          </div>

          {/* Card */}
          <div
            className="
            rounded-[2.5rem] p-8 md:p-12 md:pl-72 lg:pl-80
            bg-gradient-to-tr from-[#2f4f3f] to-[#1a3025]
            shadow-2xl shadow-[#2f4f3f]/30
            border border-white/10
          "
          >
            {/* Mobile Phone - inside card */}
            <div className="md:hidden relative w-[220px] mx-auto mb-8">
              <div className="relative rounded-[2.5rem] p-2 bg-gray-900 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-black">
                  <img
                    src={appScreenshot}
                    alt="MyBalance App"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t.home.trackSection.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {t.home.trackSection.description}
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  {t.home.trackSection.features.realtime}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  {t.home.trackSection.features.breakdown}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  {t.home.trackSection.features.recurring}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 max-w-6xl mx-auto -mt-10 mt-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <FeatureCard
            icon={<Layers size={28} />}
            title={t.features.multiAccount.title}
            description={t.features.multiAccount.description}
          />
          <FeatureCard
            icon={<Shield size={28} />}
            title={t.features.privacy.title}
            description={t.features.privacy.description}
          />
          <FeatureCard
            icon={<Zap size={28} />}
            title={t.features.automation.title}
            description={t.features.automation.description}
          />
        </div>
      </section>

      {/* Charts Section */}
      <section className="mt-48 px-4 overflow-hidden md:overflow-visible max-w-6xl mx-auto">
        <div className="relative">
          {/* Phone Mockups - Overflow Right */}
          <div
            className="
            hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10
            gap-4
          "
          >
            <div className="w-[200px] lg:w-[220px]">
              <div className="relative rounded-[2.5rem] p-2 bg-gray-900 shadow-2xl shadow-black/40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-black">
                  <img
                    src={chartsScreenshot1}
                    alt="Balance History Charts"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="w-[200px] lg:w-[220px] mt-8">
              <div className="relative rounded-[2.5rem] p-2 bg-gray-900 shadow-2xl shadow-black/40">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-black">
                  <img
                    src={chartsScreenshot2}
                    alt="Expenses Breakdown Charts"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#2f4f3f]/20 rounded-[3rem] -z-10 blur-2xl" />
          </div>

          {/* Card */}
          <div
            className="
            rounded-[2.5rem] p-8 md:p-12 md:pr-[460px] lg:pr-[500px]
            bg-white
            shadow-2xl shadow-black/10
            border border-gray-200
          "
          >
            {/* Mobile Phones - inside card */}
            <div className="md:hidden flex gap-3 justify-center mb-8">
              <div className="relative w-[140px]">
                <div className="relative rounded-[2rem] p-1.5 bg-gray-900 shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-10" />
                  <div className="rounded-[1.5rem] overflow-hidden bg-black">
                    <img
                      src={chartsScreenshot1}
                      alt="Balance History"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-[140px] mt-4">
                <div className="relative rounded-[2rem] p-1.5 bg-gray-900 shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-lg z-10" />
                  <div className="rounded-[1.5rem] overflow-hidden bg-black">
                    <img
                      src={chartsScreenshot2}
                      alt="Expenses Breakdown"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2f4f3f]">
                {t.home.chartsSection.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.home.chartsSection.description}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {t.home.chartsSection.features.trends}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  {t.home.chartsSection.features.categories}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  {t.home.chartsSection.features.forecasting}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Transaction Movement Section */}
      <section className="mt-48 px-4 overflow-hidden md:overflow-visible max-w-6xl mx-auto">
        <div className="relative">
          {/* Phone Mockup - Overflow Left */}
          <div
            className="
            hidden md:block absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10
            w-[240px] lg:w-[260px]
          "
          >
            <div className="relative rounded-[2.5rem] p-2 bg-gray-900 shadow-2xl shadow-black/40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />
              <div className="rounded-[2rem] overflow-hidden bg-black">
                <img
                  src={movementScreenshot}
                  alt="Multi-Transaction Movement"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#2f4f3f]/30 rounded-[3rem] -z-10 blur-2xl" />
          </div>

          {/* Card */}
          <div
            className="
            rounded-[2.5rem] p-8 md:p-12 md:pl-72 lg:pl-80
            bg-gradient-to-tr from-[#2f4f3f] to-[#1a3025]
            shadow-2xl shadow-[#2f4f3f]/30
            border border-white/10
          "
          >
            {/* Mobile Phone - inside card */}
            <div className="md:hidden relative w-[220px] mx-auto mb-8">
              <div className="relative rounded-[2.5rem] p-2 bg-gray-900 shadow-xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />
                <div className="rounded-[2rem] overflow-hidden bg-black">
                  <img
                    src={movementScreenshot}
                    alt="Multi-Transaction Movement"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t.home.transactionsSection.title}
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {t.home.transactionsSection.description}
              </p>

              <div className="bg-white/10 rounded-2xl p-5 mb-6">
                <p className="text-white/90 font-medium mb-3">
                  Example: Pizza night with friends
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  You pay €48 in cash for everyone at the pizzeria. Your friends
                  pay you back: €25 via bank transfer to Intesa San Paolo, €10
                  to Trade Republic. Total expense for you? Just €13. One
                  movement captures it all.
                </p>
              </div>

              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  Cash: -€48,00 (you paid the bill)
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Intesa San Paolo: +€25,00 (friend 1 paid back)
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Trade Republic: +€10,00 (friend 2 paid back)
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  Net expense: -€13,00 (your share)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="mt-48 px-4 max-w-4xl mx-auto text-center">
        <div className="rounded-[2.5rem] p-10 md:p-16 bg-gradient-to-br from-[#2f4f3f] to-[#1a3025] shadow-2xl shadow-[#2f4f3f]/30 border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t.home.comingSoonSection.title}
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-4 max-w-2xl mx-auto">
            {t.home.comingSoonSection.subtitle}
          </p>
          <p className="text-white/60 text-base mb-8">
            {t.home.comingSoonSection.description}
          </p>

          {/* Email Form */}
          <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-10">
            {status === 'success' ? (
              <div className="flex items-center justify-center gap-2 p-4 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
                <Check size={20} />
                <span>{t.home.comingSoonSection.form.success}</span>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder={t.home.comingSoonSection.form.placeholder}
                    className="
                      flex-1 px-6 py-4 rounded-full
                      bg-white/10 text-white placeholder-white/50
                      border border-white/20 focus:border-white/40
                      outline-none transition-all duration-300
                    "
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="
                      flex items-center justify-center gap-2 px-8 py-4 rounded-full
                      bg-white text-[#2f4f3f] font-semibold
                      hover:bg-white/90 active:scale-95
                      transition-all duration-300
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {status === 'loading' ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        {t.home.comingSoonSection.form.submit}
                      </>
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 mt-3 text-red-300 text-sm">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </>
            )}
          </form>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              disabled
              className="
                flex items-center justify-center gap-2 px-6 py-4 rounded-full w-full sm:w-auto
                bg-white/10 text-white/50 font-semibold
                border border-white/20 cursor-not-allowed
              "
            >
              <Apple size={20} />
              {t.home.comingSoonSection.buttons.ios}
            </button>

            <button
              disabled
              className="
                flex items-center justify-center gap-2 px-6 py-4 rounded-full w-full sm:w-auto
                bg-white/10 text-white/50 font-semibold
                border border-white/20 cursor-not-allowed
              "
            >
              <Smartphone size={20} />
              {t.home.comingSoonSection.buttons.android}
            </button>

            <button
              disabled
              className="
                flex items-center justify-center gap-2 px-6 py-4 rounded-full w-full sm:w-auto
                bg-white/10 text-white/50 font-semibold
                border border-white/20 cursor-not-allowed
              "
            >
              <Globe size={20} />
              {t.home.comingSoonSection.buttons.web}
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Home;
