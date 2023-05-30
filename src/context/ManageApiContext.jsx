import { createContext, useContext } from "react";
import MenuClient from "../api/menuClient";
import Manager from "../api/manager";

export const ManageApiContext = createContext();

const menuClient = new MenuClient();

const manager = new Manager(menuClient);

export function ManageApiProvider({ children }) {
  return (
    <ManageApiContext.Provider value={{ manager }}>
      {children}
    </ManageApiContext.Provider>
  );
}

export function useManager() {
    return useContext(ManageApiContext);
}
