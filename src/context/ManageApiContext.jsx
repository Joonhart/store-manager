import { createContext, useContext } from "react";
import MenuClient from "../api/menuClient";
import Manager from "../api/manager";
import RevenueClient from "../api/revenueClient";

export const ManageApiContext = createContext();

const menuClient = new MenuClient();

const revenueClient = new RevenueClient()
const manager = new Manager(revenueClient, menuClient);


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
