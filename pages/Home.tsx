import React from 'react';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import ShowcaseSection from '../components/ShowcaseSection';
import UpcomingSection from '../components/UpcomingSection';
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

const GREEN = 'bg-income';
const RED = 'bg-expense';
const BLUE = 'bg-[#5B8DB8]';
const AMBER = 'bg-[#C9A24A]';
const PLUM = 'bg-[#8E7CB3]';

const Home: React.FC = () => {
  const { t } = useLocale();
  const { trackSection, chartsSection, transactionsSection, recurringSection, mapSection } = t.home;

  const originItems = [
    t.home.whySection.origin.items.proprietary,
    t.home.whySection.origin.items.superficial,
    t.home.whySection.origin.items.subscriptions,
  ];

  const audience = [
    { icon: BarChart3, text: t.home.whySection.forWho.items.dataLovers },
    { icon: Table2, text: t.home.whySection.forWho.items.spreadsheetUsers },
    { icon: Lock, text: t.home.whySection.forWho.items.privacyConscious },
    { icon: Settings2, text: t.home.whySection.forWho.items.controlFreaks },
  ];

  const badges = [
    { icon: Infinity, text: t.home.ctaSection.badges.free },
    { icon: Github, text: t.home.ctaSection.badges.openSource },
    { icon: ShieldCheck, text: t.home.ctaSection.badges.privacyFirst },
  ];

  return (
    <div className="pb-20">
      <Hero />

      <ShowcaseSection
        tone="deep"
        phones={[{ src: appScreenshot, alt: 'MyBalance App' }]}
        title={trackSection.title}
        description={trackSection.description}
        items={[
          { dot: GREEN, text: trackSection.features.realtime },
          { dot: BLUE, text: trackSection.features.breakdown },
          { dot: PLUM, text: trackSection.features.recurring },
        ]}
      />

      <section className="px-4 max-w-6xl mx-auto mt-32 md:mt-44">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <FeatureCard
            icon={<Layers size={26} />}
            title={t.features.multiAccount.title}
            description={t.features.multiAccount.description}
          />
          <FeatureCard
            icon={<Shield size={26} />}
            title={t.features.privacy.title}
            description={t.features.privacy.description}
          />
          <FeatureCard
            icon={<Zap size={26} />}
            title={t.features.automation.title}
            description={t.features.automation.description}
          />
        </div>
      </section>

      <ShowcaseSection
        tone="surface"
        phones={[
          { src: chartsScreenshot1, alt: 'Balance History Charts' },
          { src: chartsScreenshot2, alt: 'Expenses Breakdown Charts' },
        ]}
        title={chartsSection.title}
        description={chartsSection.description}
        items={[
          { dot: GREEN, text: chartsSection.features.trends },
          { dot: RED, text: chartsSection.features.categories },
          { dot: AMBER, text: chartsSection.features.forecasting },
        ]}
      />

      <ShowcaseSection
        tone="deep"
        phones={[{ src: movementScreenshot, alt: 'Multi-Transaction Movement' }]}
        title={transactionsSection.title}
        description={transactionsSection.description}
        items={[
          { dot: RED, text: transactionsSection.example.cash },
          { dot: GREEN, text: transactionsSection.example.intesa },
          { dot: GREEN, text: transactionsSection.example.trade },
          { dot: AMBER, text: transactionsSection.example.net },
        ]}
      >
        <div className="bg-white/10 rounded-2xl p-5 mb-6">
          <p className="text-white/90 font-medium mb-3">{transactionsSection.example.title}</p>
          <p className="text-white/70 text-sm leading-relaxed">
            {transactionsSection.example.description}
          </p>
        </div>
      </ShowcaseSection>

      {/* Why MyBalance Section */}
      <section className="mt-32 md:mt-44 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent">
            {t.home.whySection.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-panel p-8 bg-surface border border-line/10 shadow-panel">
            <div className="flex items-center justify-between gap-3 mb-6">
              <h3 className="text-xl font-bold tracking-tight text-accent">
                {t.home.whySection.origin.title}
              </h3>
              <div className="w-10 h-10 rounded-ctl bg-control flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-accent" />
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-4">{t.home.whySection.origin.intro}</p>
            <ul className="space-y-3 mb-6">
              {originItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-expense/15 flex items-center justify-center shrink-0">
                    <X className="w-3 h-3 text-expense" />
                  </div>
                  <span className="text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-ink leading-relaxed font-semibold">
              {t.home.whySection.origin.conclusion}
            </p>
          </div>

          <div className="rounded-panel p-8 bg-deep text-white border border-white/10 shadow-panel">
            <h3 className="text-xl font-bold tracking-tight mb-2">
              {t.home.whySection.forWho.subtitle}
            </h3>
            <ul className="space-y-4 mt-6">
              {audience.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-ctl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#D6E8DE]" />
                  </div>
                  <p className="text-white/85 pt-2">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ShowcaseSection
        tone="surface"
        phones={[
          { src: recurringScreenshot1, alt: 'Recurring Transactions' },
          { src: recurringScreenshot2, alt: 'Recurring Scheduling' },
        ]}
        title={recurringSection.title}
        description={recurringSection.description}
        items={[
          { dot: GREEN, text: recurringSection.features.schedule },
          { dot: BLUE, text: recurringSection.features.status },
          { dot: AMBER, text: recurringSection.features.notifications },
        ]}
      />

      <ShowcaseSection
        tone="deep"
        phones={[{ src: mapScreenshot, alt: 'Transaction Map' }]}
        title={mapSection.title}
        description={mapSection.description}
        items={[
          { dot: GREEN, text: mapSection.features.pinpoint },
          { dot: BLUE, text: mapSection.features.clusters },
          { dot: PLUM, text: mapSection.features.optional },
        ]}
      />

      <UpcomingSection />

      {/* Final CTA Section */}
      <section className="mt-32 md:mt-44 mb-8 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-accent tracking-[-0.04em] mb-6">
          {t.home.ctaSection.tagline}
        </h2>
        <p className="text-muted text-lg max-w-lg mx-auto mb-10">{t.home.ctaSection.description}</p>

        <a
          href="https://app.mybalance.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 px-8 py-4 rounded-ctl
            bg-accent text-on-accent font-semibold text-lg shadow-control
            hover:opacity-90 active:scale-[0.98]
            transition-all duration-200
          "
        >
          {t.home.ctaSection.openApp}
          <ArrowRight size={20} />
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted text-sm mt-12">
          {badges.map(({ icon: Icon, text }, i) => (
            <React.Fragment key={text}>
              {i > 0 && <span className="hidden sm:block w-px h-3 bg-line/15" />}
              <span className="flex items-center gap-2">
                <Icon size={15} className="text-accent" />
                {text}
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
