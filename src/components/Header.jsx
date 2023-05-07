import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import {HiMoon, HiSun} from 'react-icons/hi'

export default function Header({curMenu}) {
    const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className='h-12 top-0 flex items-center text-xl'>
        <div>
          리즈델리 의 {curMenu}
        </div>
        <div className='text-2xl'>
        <button onClick={toggleDarkMode}>
            {!darkMode && <HiMoon />}
            {darkMode && <HiSun />}
        </button>
        </div>
    </header>
  )
}
