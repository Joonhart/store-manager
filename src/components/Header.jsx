import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import {HiMoon, HiSun} from 'react-icons/hi'

export default function Header() {
    const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className='h-16 sticky top-0'>
        <button onClick={toggleDarkMode}>
            {!darkMode && <HiMoon />}
            {darkMode && <HiSun />}
        </button>
      Header
    </header>
  )
}
