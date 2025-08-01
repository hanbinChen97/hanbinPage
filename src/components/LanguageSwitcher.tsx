"use client";

import {useParams, usePathname, useRouter} from "next/navigation";
import {FC, memo} from "react";

import {getTranslations} from "../i18n/translations";

const LanguageSwitcher: FC = memo(() => {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = (params?.locale as string) || "en";
  const t = getTranslations(currentLocale);

  const languages = [
    {code: "en", name: t.languages.english, flag: "🇺🇸"},
    {code: "de", name: t.languages.german, flag: "🇩🇪"},
    {code: "zh", name: t.languages.chinese, flag: "🇨🇳"},
  ];

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${currentLocale}`, "") || "/";
    const newPath = `/${newLocale}${currentPath}`;

    // Set cookie to remember language preference
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`; // 1 year

    router.push(newPath);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <span className="mr-2 text-lg">🌐</span>
        <select
          className="bg-transparent text-white border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 hover:border-orange-400 cursor-pointer appearance-none bg-gray-800/50 backdrop-blur-sm"
          onChange={(e) => handleLanguageChange(e.target.value)}
          value={currentLocale}
        >
          {languages.map((lang) => (
            <option
              className="bg-gray-800 text-white py-2"
              key={lang.code}
              value={lang.code}
            >
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 9l-7 7-7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
    </div>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";
export default LanguageSwitcher;
