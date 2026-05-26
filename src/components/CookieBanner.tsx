"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "opsdeck-cookie-notice-dismissed";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 rounded-lg shadow-lg text-white p-4 md:p-5"
      style={{ backgroundColor: "#1F3A6E" }}
    >
      <p className="text-sm leading-relaxed">
        This site uses essential cookies only. No tracking or advertising cookies are used.
      </p>
      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={dismiss}
          className="bg-white text-[#1F3A6E] font-semibold px-5 py-2 rounded-md text-sm hover:bg-white/90 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
