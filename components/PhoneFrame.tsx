import React from 'react';

type PhoneSize = 'lg' | 'md' | 'sm';

interface PhoneFrameProps {
  src: string;
  alt: string;
  size?: PhoneSize;
}

const frame: Record<PhoneSize, { shell: string; notch: string; screen: string }> = {
  lg: {
    shell: 'rounded-[2.5rem] p-2',
    notch: 'w-24 h-6 rounded-b-xl',
    screen: 'rounded-[2rem]',
  },
  md: {
    shell: 'rounded-[2.5rem] p-2',
    notch: 'w-20 h-5 rounded-b-xl',
    screen: 'rounded-[2rem]',
  },
  sm: {
    shell: 'rounded-[2rem] p-1.5',
    notch: 'w-16 h-4 rounded-b-lg',
    screen: 'rounded-[1.5rem]',
  },
};

const PhoneFrame: React.FC<PhoneFrameProps> = ({ src, alt, size = 'lg' }) => {
  const f = frame[size];
  return (
    <div className={`relative bg-[#0f1311] shadow-float ring-1 ring-white/10 ${f.shell}`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-[#0f1311] z-10 ${f.notch}`} />
      <div className={`overflow-hidden bg-black ${f.screen}`}>
        <img src={src} alt={alt} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default PhoneFrame;
