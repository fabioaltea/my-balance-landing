import React from 'react';
import PhoneFrame from './PhoneFrame';

export interface ShowcasePhone {
  src: string;
  alt: string;
}

export interface ShowcaseItem {
  dot: string;
  text: React.ReactNode;
}

interface ShowcaseSectionProps {
  phones: ShowcasePhone[];
  tone: 'deep' | 'surface';
  title: string;
  description: string;
  items: ShowcaseItem[];
  children?: React.ReactNode;
}

// One phone sits on the left edge of the panel, two phones on the right edge (desktop);
// on mobile the phones are stacked inside the panel above the text.
const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  phones,
  tone,
  title,
  description,
  items,
  children,
}) => {
  const single = phones.length === 1;
  const deep = tone === 'deep';

  const panel = deep
    ? 'bg-deep text-white border border-white/10 shadow-panel'
    : 'bg-surface text-ink border border-line/10 shadow-panel';
  const padding = single ? 'md:pl-72 lg:pl-80' : 'md:pr-[460px] lg:pr-[500px]';

  return (
    <section className="mt-32 md:mt-44 px-4 overflow-hidden md:overflow-visible max-w-6xl mx-auto">
      <div className="relative">
        <div
          className={`hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 gap-4 ${
            single ? 'left-4 lg:left-6 w-[240px] lg:w-[260px]' : 'right-4 lg:right-6'
          }`}
        >
          {phones.map((phone, i) => (
            <div
              key={phone.alt}
              className={single ? 'w-full' : `w-[200px] lg:w-[220px] ${i % 2 === 1 ? 'mt-8' : ''}`}
            >
              <PhoneFrame src={phone.src} alt={phone.alt} size={single ? 'lg' : 'md'} />
            </div>
          ))}
        </div>

        <div className={`rounded-panel p-8 md:p-12 ${padding} ${panel}`}>
          <div
            className={`md:hidden mb-8 ${
              single ? 'w-[220px] mx-auto' : 'flex gap-3 justify-center'
            }`}
          >
            {phones.map((phone, i) => (
              <div
                key={phone.alt}
                className={single ? '' : `w-[140px] ${i % 2 === 1 ? 'mt-4' : ''}`}
              >
                <PhoneFrame src={phone.src} alt={phone.alt} size={single ? 'lg' : 'sm'} />
              </div>
            ))}
          </div>

          <div className="text-center md:text-left">
            <h3
              className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 ${
                deep ? 'text-white' : 'text-accent'
              }`}
            >
              {title}
            </h3>
            <p className={`text-lg leading-relaxed mb-6 ${deep ? 'text-white/70' : 'text-muted'}`}>
              {description}
            </p>
            {children}
            <ul className={`space-y-3 ${deep ? 'text-white/85' : 'text-ink/80'}`}>
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 justify-center md:justify-start">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`}></span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
