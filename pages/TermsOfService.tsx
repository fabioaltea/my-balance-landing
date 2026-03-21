import React from "react";
import { useLocale } from "../hooks/useLocale";

const TermsOfService: React.FC = () => {
  const { t } = useLocale();
  const s = t.legal.termsOfService.sections;

  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#2f4f3f] dark:text-white mb-2">
        {t.legal.termsOfService.title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
        {t.legal.termsOfService.lastUpdated}
      </p>

      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.acceptance.title}</h2>
          <p className="whitespace-pre-line">{s.acceptance.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.description.title}</h2>
          <p className="whitespace-pre-line">{s.description.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.googleAccount.title}</h2>
          <p className="whitespace-pre-line">{s.googleAccount.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.userObligations.title}</h2>
          <p className="mb-3">{s.userObligations.intro}</p>
          <ul className="list-disc pl-6 space-y-1">
            {s.userObligations.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.dataOwnership.title}</h2>
          <p className="whitespace-pre-line">{s.dataOwnership.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.dataWeStore.title}</h2>
          <p className="mb-3">{s.dataWeStore.text}</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            {s.dataWeStore.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="italic">{s.dataWeStore.deletion}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.intellectualProperty.title}</h2>
          <p className="whitespace-pre-line">{s.intellectualProperty.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.disclaimer.title}</h2>
          <p className="whitespace-pre-line text-sm">{s.disclaimer.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.limitation.title}</h2>
          <p className="whitespace-pre-line text-sm">{s.limitation.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.termination.title}</h2>
          <p className="whitespace-pre-line">{s.termination.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.changes.title}</h2>
          <p className="whitespace-pre-line">{s.changes.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.governingLaw.title}</h2>
          <p className="whitespace-pre-line">{s.governingLaw.text}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.contact.title}</h2>
          <p className="mb-2">{s.contact.text}</p>
          <a
            href={`mailto:${s.contact.email}`}
            className="text-[#2f4f3f] dark:text-emerald-400 underline font-medium"
          >
            {s.contact.email}
          </a>
        </section>

      </div>
    </div>
  );
};

export default TermsOfService;
