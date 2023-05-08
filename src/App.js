import { Outlet } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useState } from "react";

function App() {
  const [curMenu, setCurMenu] = useState("DASHBOARD");
  return (
    <DarkModeProvider>
    <div className="flex bg-white dark:bg-slate-800 dark:text-slate-300">
      <LeftMenu setCurMenu={setCurMenu}/>
      <main className="w-full p-2">
      <Header curMenu={curMenu}/>
      <Outlet/>
      </main>
    </div>
    </DarkModeProvider>
  );
}

export default App;
