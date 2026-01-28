import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "../types";
import { Sun, Moon, Languages } from "lucide-react";
import { useLocale } from "../hooks/useLocale";
import { Locale, localeNames } from "../locales";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const { locale, setLocale, t } = useLocale();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const navItems: NavItem[] = [
    { label: t.nav.myBalance, path: "/" },
    { label: t.nav.howItWorks, path: "/how-it-works" },
    { label: t.nav.techStack, path: "/tech-stack" },
  ];

  return (
    <>
      {/* Desktop Navigation - Top Center */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4 pointer-events-none">
        <nav
          className="
          pointer-events-auto
          flex items-center gap-1 p-1.5
          backdrop-blur-xl bg-white/30 dark:bg-black/30 
          border border-white/40 dark:border-white/10 
          rounded-full shadow-lg shadow-black/5
          transition-all duration-300
        "
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap
                ${
                  isActive
                    ? "bg-white/80 dark:bg-white/10 text-[#2f4f3f] dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-[#2f4f3f] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5"
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation - Bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe pointer-events-none will-change-transform">
        <div className="pb-4">
          <nav
            className="
            pointer-events-auto
            flex items-center justify-around gap-1 p-1.5 w-full
            backdrop-blur-xl bg-white/40 dark:bg-black/40 
            border border-white/40 dark:border-white/10 
            rounded-full shadow-xl shadow-black/10
            transition-all duration-300
            will-change-transform
          "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex-1 text-center px-4 py-3 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap
                  ${
                    isActive
                      ? "bg-white/80 dark:bg-white/10 text-[#2f4f3f] dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 active:bg-white/40 dark:active:bg-white/5"
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Language and Theme Toggle - Top Right (all screens) */}
      <div className="fixed top-6 right-6 z-50 pointer-events-none flex gap-2">
        {/* Language Selector */}
        <div className="relative pointer-events-auto">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="
              p-3 rounded-full 
              backdrop-blur-xl bg-white/30 dark:bg-black/30 
              border border-white/40 dark:border-white/10 
              shadow-lg shadow-black/5
              text-[#2f4f3f] dark:text-gray-200
              hover:scale-110 active:scale-95 transition-all duration-300
              flex items-center justify-center
            "
            aria-label="Change Language"
          >
            <Languages size={20} />
          </button>

          {showLangMenu && (
            <>
              {/* Backdrop to close menu */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowLangMenu(false)}
              />
              {/* Menu */}
              <div className="absolute right-0 top-14 z-50 min-w-[140px] rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/40 dark:border-white/10 shadow-xl overflow-hidden">
                {(Object.keys(localeNames) as Locale[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLocale(lang);
                      setShowLangMenu(false);
                    }}
                    className={`
                      w-full px-4 py-3 text-left text-sm font-semibold transition-all duration-200
                      ${
                        locale === lang
                          ? "bg-white/80 dark:bg-white/10 text-[#2f4f3f] dark:text-white"
                          : "text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/5"
                      }
                    `}
                  >
                    {localeNames[lang]}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            pointer-events-auto
            p-3 rounded-full 
            backdrop-blur-xl bg-white/30 dark:bg-black/30 
            border border-white/40 dark:border-white/10 
            shadow-lg shadow-black/5
            text-[#2f4f3f] dark:text-gray-200
            hover:scale-110 active:scale-95 transition-all duration-300
            flex items-center justify-center
          "
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
