import { Outlet } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
    <div className="flex bg-white dark:bg-slate-800 dark:text-slate-300">
      <LeftMenu />
      <main>
      <Header />
      <Outlet />
      </main>
    </div>
    </DarkModeProvider>
  );
}

export default App;
