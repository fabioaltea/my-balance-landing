import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import {
  Layers,
  Shield,
  Zap,
  BarChart3,
  Table2,
  Lock,
  Settings2,
  Lightbulb,
  X,
  ArrowRight,
  Infinity,
  Github,
  ShieldCheck,
} from 'lucide-react';
import appScreenshot from '../assets/IMG_2051.PNG';
import chartsScreenshot1 from '../assets/IMG_2052.PNG';
import chartsScreenshot2 from '../assets/IMG_2053.PNG';
import movementScreenshot from '../assets/IMG_2054.PNG';
import recurringScreenshot1 from '../assets/IMG_2185.PNG';
import recurringScreenshot2 from '../assets/IMG_2197.PNG';
import mapScreenshot from '../assets/IMG_2187.PNG';
import { useLocale } from '../hooks/useLocale';

const Home: React.FC = () => {
  const { t } = useLocale();

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
                <img src={appScreenshot} alt="MyBalance App" className="w-full h-auto" />
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
                  <img src={appScreenshot} alt="MyBalance App" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.home.trackSection.title}</h3>
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
                    <img src={chartsScreenshot1} alt="Balance History" className="w-full h-auto" />
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
                  {t.home.transactionsSection.example.title}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t.home.transactionsSection.example.description}
                </p>
              </div>

              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  {t.home.transactionsSection.example.cash}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  {t.home.transactionsSection.example.intesa}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  {t.home.transactionsSection.example.trade}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  {t.home.transactionsSection.example.net}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why MyBalance Section */}
      <section className="mt-32 px-4 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4f3f]">
            {t.home.whySection.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Intro + Origin */}
          <div className="space-y-8">
            {/* Intro Card */}
            {/* <div className="rounded-[2.5rem] p-8 bg-gradient-to-br from-[#2f4f3f] to-[#1a3025] text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {t.home.whySection.intro.title}
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                {t.home.whySection.intro.description}
              </p>
            </div> */}

            {/* Origin Card */}
            <div className="rounded-[2.5rem] p-8 bg-white border border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6 space-between">
                <h3 className="text-xl font-semibold text-[#2f4f3f]">
                  {t.home.whySection.origin.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-[#2f4f3f]/10 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-[#2f4f3f]" />
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{t.home.whySection.origin.intro}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-700">
                    {t.home.whySection.origin.items.proprietary}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-700">
                    {t.home.whySection.origin.items.superficial}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-700">
                    {t.home.whySection.origin.items.subscriptions}
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-medium">
                {t.home.whySection.origin.conclusion}
              </p>
            </div>
          </div>

          {/* Right: For Who */}
          <div className="rounded-[2.5rem] p-8 bg-gradient-to-br from-[#2f4f3f] to-[#1a3025] text-white">
            <h3 className="text-xl font-semibold mb-2">{t.home.whySection.forWho.subtitle}</h3>
            {/* <p className="text-white/70 mb-6">
              {t.home.whySection.forWho.subtitle}
            </p> */}
            <ul className="space-y-4 mt-6 mb-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-white/90 pt-2">{t.home.whySection.forWho.items.dataLovers}</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Table2 className="w-5 h-5 text-blue-400" />
                </div>
                <p className="text-white/90 pt-2">
                  {t.home.whySection.forWho.items.spreadsheetUsers}
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-purple-400" />
                </div>
                <p className="text-white/90 pt-2">
                  {t.home.whySection.forWho.items.privacyConscious}
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Settings2 className="w-5 h-5 text-orange-400" />
                </div>
                <p className="text-white/90 pt-2">{t.home.whySection.forWho.items.controlFreaks}</p>
              </li>
            </ul>
            {/* <p className="text-white/80 text-sm italic border-t border-white/20 pt-4">
              {t.home.whySection.forWho.conclusion}
            </p> */}
          </div>
        </div>
      </section>

      {/* Recurring Transactions Section */}
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
                    src={recurringScreenshot1}
                    alt="Recurring Transactions"
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
                    src={recurringScreenshot2}
                    alt="Recurring Scheduling"
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
                      src={recurringScreenshot1}
                      alt="Recurring Transactions"
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
                      src={recurringScreenshot2}
                      alt="Recurring Scheduling"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#2f4f3f]">
                {t.home.recurringSection.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t.home.recurringSection.description}
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {t.home.recurringSection.features.schedule}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {t.home.recurringSection.features.status}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  {t.home.recurringSection.features.notifications}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
                <img src={mapScreenshot} alt="Transaction Map" className="w-full h-auto" />
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
                  <img src={mapScreenshot} alt="Transaction Map" className="w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.home.mapSection.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {t.home.mapSection.description}
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  {t.home.mapSection.features.pinpoint}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  {t.home.mapSection.features.clusters}
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  {t.home.mapSection.features.optional}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-48 mb-8 px-4 text-center">
        <div className="w-16 h-px bg-gray-200 dark:bg-white/10 mx-auto mb-16" />

        <h2 className="text-4xl md:text-6xl font-black text-[#2f4f3f] dark:text-white tracking-tight mb-6">
          {t.home.ctaSection.tagline}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg mx-auto mb-12">
          {t.home.ctaSection.description}
        </p>

        <a
          href="https://app.mybalance.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-10 py-4 rounded-full
            bg-[#2f4f3f] text-white font-semibold text-lg
            hover:bg-[#3d6652] hover:scale-105 active:scale-95
            transition-all duration-300 shadow-xl shadow-[#2f4f3f]/20
          "
        >
          {t.home.ctaSection.openApp}
          <ArrowRight size={20} />
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 dark:text-gray-500 text-sm mt-12">
          <span className="flex items-center gap-2">
            <Infinity size={15} className="text-[#2f4f3f] dark:text-emerald-400" />
            {t.home.ctaSection.badges.free}
          </span>
          <span className="hidden sm:block w-px h-3 bg-gray-200 dark:bg-white/10" />
          <span className="flex items-center gap-2">
            <Github size={15} className="text-[#2f4f3f] dark:text-emerald-400" />
            {t.home.ctaSection.badges.openSource}
          </span>
          <span className="hidden sm:block w-px h-3 bg-gray-200 dark:bg-white/10" />
          <span className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-[#2f4f3f] dark:text-emerald-400" />
            {t.home.ctaSection.badges.privacyFirst}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
