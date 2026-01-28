import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LiquidBackground from "./components/LiquidBackground";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import TechStack from "./pages/TechStack";
import { LocaleProvider, useLocale } from "./hooks/useLocale";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const { t } = useLocale();

  // Initialize theme based on preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }
  }, []);

  // Update DOM class for Tailwind Dark Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <HashRouter>
      <ScrollToTop />
      <div
        className={`min-h-screen overflow-x-hidden transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"}`}
      >
        <LiquidBackground />
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        <main className="container mx-auto pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/tech-stack" element={<TechStack />} />
          </Routes>
        </main>

        <footer className="py-8 mb-20 md:mb-0 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </footer>
      </div>
    </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
};

export default App;
