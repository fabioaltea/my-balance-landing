import React from "react";
import { useLocale } from "../hooks/useLocale";

const CookiePolicy: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#2f4f3f] mb-8">
        {t.legal.cookiePolicy.title}
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
        <p className="mb-6">
This site uses technical cookies only.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
