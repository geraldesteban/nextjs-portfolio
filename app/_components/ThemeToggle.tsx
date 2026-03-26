"use client";

import { useTheme } from "next-themes";

import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <button
      className="hover:bg-[#424242] p-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <MdDarkMode className="text-2xl dark:text-[#1A1A1A] text-[#D9D9D9] hover:dark:text-[#D9D9D9]" />
      ) : (
        <IoSunny className="text-2xl dark:text-[#1A1A1A] text-[#D9D9D9]" />
      )}
    </button>
  );
}
