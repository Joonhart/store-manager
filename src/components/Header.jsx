import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ curMenu }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const loginHandler = () => {
    alert('서비스 준비 중 입니다.');
  }
  return (
    <header className="h-12 p-4 py-10 w-full top-0 flex justify-between items-center text-lg lg:text-xl">
      <div className="text-2xl lg:text-4xl font-bold">리즈델리의 {curMenu}</div>
      <div className="text-2xl text-center">
        <button onClick={toggleDarkMode} className="pr-4">
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
        <button onClick={loginHandler}>
            LOGIN
        </button>
      </div>
    </header>
  );
}