"use client";

import { useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Load AOS CSS asynchronously
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/aos@next/dist/aos.css";
    document.head.appendChild(link);

    // Initialize AOS after a short delay to avoid blocking initial render
    const timer = setTimeout(() => {
      import("aos").then((AOS) => {
        AOS.default.init({
          duration: 1000,
          easing: "ease-in-out",
          mirror: true,
          once: true,
        });
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup: remove the link if component unmounts
      const existingLink = document.querySelector('link[href="https://unpkg.com/aos@next/dist/aos.css"]');
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  return <>{children}</>;
}
