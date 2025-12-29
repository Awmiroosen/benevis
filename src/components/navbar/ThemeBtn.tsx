"use client";

import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";

const ThemeBtn = ({ classes }: { classes: string }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`${classes} cursor-pointer`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <SunMoon />
    </button>
  );
};

export default ThemeBtn;
