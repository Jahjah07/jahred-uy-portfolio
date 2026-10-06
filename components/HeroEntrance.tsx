"use client";

import { useLayoutEffect } from "react";

export default function HeroEntrance() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("portfolio-hero-drawn")) return;
      sessionStorage.setItem("portfolio-hero-drawn", "true");
    } catch {
      // Storage can be disabled; the entrance still works without persistence.
    }
    document.getElementById("hero")?.setAttribute("data-draw", "true");
  }, []);

  return null;
}
