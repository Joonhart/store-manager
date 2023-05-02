import { Outlet } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
    <div className="flex">
      <LeftMenu />
      <Header />
      <Outlet />
    </div>
    </DarkModeProvider>
  );
}

export default App;
