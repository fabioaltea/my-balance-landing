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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <h2 className="text-2xl font-semibold text-[#2f4f3f] mt-8 mb-4">1. Lorem Ipsum</h2>
        <p className="mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2 className="text-2xl font-semibold text-[#2f4f3f] mt-8 mb-4">2. Dolor Sit Amet</h2>
        <p className="mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <h2 className="text-2xl font-semibold text-[#2f4f3f] mt-8 mb-4">3. Consectetur Adipiscing</h2>
        <p className="mb-6">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
        </p>

        <h2 className="text-2xl font-semibold text-[#2f4f3f] mt-8 mb-4">4. Elit Sed Do</h2>
        <p className="mb-6">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
