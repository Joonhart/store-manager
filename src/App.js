import { Outlet } from "react-router-dom";
import LeftMenu from "./components/LeftMenu";

function App() {
  return (
    <div className="flex">
      <LeftMenu />
      <Outlet />
    </div>
  );
}

export default App;
