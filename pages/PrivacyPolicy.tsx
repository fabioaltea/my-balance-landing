import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../hooks/useLocale";

const PrivacyPolicy: React.FC = () => {
  const { t } = useLocale();
  const s = t.legal.privacyPolicy.sections;

  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-[#2f4f3f] dark:text-white mb-8">
        {t.legal.privacyPolicy.title}
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-8">

        {/* Titolare */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.dataController.title}</h2>
          <p>{s.dataController.email} <a href="mailto:fabio.f2001@gmail.com" className="text-[#2f4f3f] dark:text-emerald-400 underline">fabio.f2001@gmail.com</a></p>
        </section>

        {/* Tipo di Dati */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.dataTypes.title}</h2>
          <p className="mb-4">{s.dataTypes.intro}</p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            {s.dataTypes.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mb-4 whitespace-pre-line">{s.dataTypes.details}</p>
          <p className="mb-4 whitespace-pre-line">{s.dataTypes.provided}</p>
          <p className="mb-4 whitespace-pre-line">{s.dataTypes.required}</p>
          <p className="mb-4 whitespace-pre-line">{s.dataTypes.doubts}</p>
          <p className="mb-4 whitespace-pre-line">
            {s.dataTypes.cookies} <Link to="/cookie-policy" className="text-[#2f4f3f] dark:text-emerald-400 underline">{s.dataTypes.cookiePolicy}</Link>.
          </p>
          <p className="whitespace-pre-line">{s.dataTypes.responsibility}</p>
        </section>

        {/* Modalità e luogo */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.processing.title}</h2>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.processing.methods.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.processing.methods.security}</p>
          <p className="mb-4 whitespace-pre-line">{s.processing.methods.details}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.processing.location.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.processing.location.text}</p>
          <p className="mb-4 whitespace-pre-line">{s.processing.location.transfer}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.processing.retention.title}</h3>
          <p className="whitespace-pre-line">{s.processing.retention.text}</p>
        </section>

        {/* Finalità */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.purposes.title}</h2>
          <p className="mb-4 whitespace-pre-line">{s.purposes.intro}</p>
          <ul className="list-disc pl-6 space-y-1">
            {s.purposes.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Dettagli sul trattamento */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.processingDetails.title}</h2>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.processingDetails.hosting.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.processingDetails.hosting.description}</p>
          <p className="mb-4 whitespace-pre-line">{s.processingDetails.hosting.distributed}</p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-4">
            <p className="font-semibold">{s.processingDetails.hosting.vercel.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.processingDetails.hosting.vercel.company}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.processingDetails.hosting.vercel.location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.processingDetails.hosting.vercel.data}</p>
          </div>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.processingDetails.externalContent.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.processingDetails.externalContent.description}</p>
          <p className="mb-4 whitespace-pre-line">{s.processingDetails.externalContent.traffic}</p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
            <p className="font-semibold">{s.processingDetails.externalContent.googleFonts.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.processingDetails.externalContent.googleFonts.company}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.processingDetails.externalContent.googleFonts.location}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.processingDetails.externalContent.googleFonts.data}</p>
          </div>
        </section>

        {/* Cookie Policy */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.cookiePolicySection.title}</h2>
          <p className="whitespace-pre-line">{s.cookiePolicySection.text} <Link to="/cookie-policy" className="text-[#2f4f3f] dark:text-emerald-400 underline">{s.dataTypes.cookiePolicy}</Link>.</p>
        </section>

        {/* Ulteriori informazioni UE */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.euInfo.title}</h2>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.euInfo.legalBasis.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.euInfo.legalBasis.intro}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {s.euInfo.legalBasis.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mb-4 whitespace-pre-line">{s.euInfo.legalBasis.clarification}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.euInfo.retention.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.euInfo.retention.intro}</p>
          <p className="mb-4">{s.euInfo.retention.therefore}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {s.euInfo.retention.items.map((item, i) => (
              <li key={i} className="whitespace-pre-line">{item}</li>
            ))}
          </ul>
          <p className="whitespace-pre-line">{s.euInfo.retention.expiration}</p>
        </section>

        {/* Diritti GDPR */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.gdprRights.title}</h2>
          <p className="mb-4 whitespace-pre-line">{s.gdprRights.intro}</p>
          <p className="mb-4 whitespace-pre-line">{s.gdprRights.inParticular}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {s.gdprRights.rights.map((right, i) => (
              <li key={i}><strong>{right.strong}</strong> {right.text}</li>
            ))}
          </ul>
          <p className="mb-4 whitespace-pre-line">{s.gdprRights.transferInfo}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.gdprRights.opposition.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.gdprRights.opposition.public}</p>
          <p className="mb-4 whitespace-pre-line">{s.gdprRights.opposition.marketing}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.gdprRights.howTo.title}</h3>
          <p className="whitespace-pre-line">{s.gdprRights.howTo.text}</p>
        </section>

        {/* Ulteriori informazioni */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.additionalInfo.title}</h2>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.additionalInfo.defense.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.additionalInfo.defense.text1}</p>
          <p className="mb-4 whitespace-pre-line">{s.additionalInfo.defense.text2}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.additionalInfo.specificNotices.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.additionalInfo.specificNotices.text}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.additionalInfo.systemLogs.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.additionalInfo.systemLogs.text}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.additionalInfo.notIncluded.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.additionalInfo.notIncluded.text}</p>

          <h3 className="text-xl font-semibold text-[#2f4f3f] dark:text-white mt-6 mb-3">{s.additionalInfo.changes.title}</h3>
          <p className="whitespace-pre-line">{s.additionalInfo.changes.text1}</p>
          <p className="mt-4 whitespace-pre-line">{s.additionalInfo.changes.text2}</p>
        </section>

        {/* Definizioni */}
        <section>
          <h2 className="text-2xl font-semibold text-[#2f4f3f] dark:text-white mt-8 mb-4">{s.definitions.title}</h2>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.personalData.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.personalData.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.usageData.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.usageData.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.user.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.user.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.dataSubject.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.dataSubject.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.dataProcessor.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.dataProcessor.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.dataController.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.dataController.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.application.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.application.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.service.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.service.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.eu.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.eu.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.cookie.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.cookie.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.trackingTool.title}</h3>
          <p className="mb-4 whitespace-pre-line">{s.definitions.items.trackingTool.text}</p>

          <h3 className="text-lg font-semibold text-[#2f4f3f] dark:text-white mt-4 mb-2">{s.definitions.items.legalReferences.title}</h3>
          <p className="whitespace-pre-line">{s.definitions.items.legalReferences.text}</p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
