import { Outlet } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ManageApiProvider } from "./context/ManageApiContext";

const queryClint = new QueryClient();

function App() {
  const [curMenu, setCurMenu] = useState("DASHBOARD");
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClint}>
        <ManageApiProvider>
          <div className="flex w-full h-full bg-white dark:bg-slate-800 dark:text-slate-300">
            <LeftMenu setCurMenu={setCurMenu} />
            <main className="w-full p-2">
              <Header curMenu={curMenu} />
              <Outlet />
            </main>
          </div>
        </ManageApiProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
