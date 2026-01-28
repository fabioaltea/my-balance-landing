import React from "react";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import { Layers, Shield, Zap } from "lucide-react";
import appScreenshot from "../assets/IMG_2051.PNG";
import chartsScreenshot1 from "../assets/IMG_2052.PNG";
import chartsScreenshot2 from "../assets/IMG_2053.PNG";
import movementScreenshot from "../assets/IMG_2054.PNG";
import { useLocale } from "../hooks/useLocale";

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
    </div>
  );
};

export default Home;
