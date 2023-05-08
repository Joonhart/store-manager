import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ curMenu }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className="h-12 p-4 w-full top-0 flex justify-between items-center text-lg lg:text-xl">
      <div>리즈델리 의 {curMenu}</div>
      <div className="text-2xl text-center">
        <button onClick={toggleDarkMode} className="pr-4">
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
        <button>
            LOGIN
        </button>
      </div>
    </header>
  );
}
