"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Icon from "@mdi/react";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then system preference
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button
        isIconOnly
        variant="light"
        aria-label="Toggle theme"
        className="min-w-10"
      />
    );
  }

  return (
    <Button
      isIconOnly
      variant="light"
      onPress={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="min-w-10"
    >
      <Icon 
        path={isDark ? mdiWeatherSunny : mdiWeatherNight} 
        className="w-5 h-5" 
      />
    </Button>
  );
}

