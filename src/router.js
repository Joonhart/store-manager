import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/DashBoard";
import CostManage from "./pages/manage/CostManage";
import RevenueManage from "./pages/manage/RevenueManage";
import MenuManage from "./pages/manage/MenuManage";
import Stat from "./pages/stat/Stat";
import RevenueStat from "./pages/stat/RevenueStat";
import CostStat from "./pages/stat/CostStat";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <DashBoard />
            },
            {
                path: "manage",
                children: [
                    {
                        index: true,
                        element: <RevenueManage />
                    },
                    {
                        path: "revenu",
                        element: <RevenueManage />
                    },
                    {
                        path: "cost",
                        element: <CostManage />
                    },
                    {
                        path: "menu",
                        element: <MenuManage />
                    },
                ]
            },
            {
                path: "stat",
                children: [
                    {
                        index: true,
                        element: <Stat />
                    },
                    {
                        path: "all",
                        element: <Stat />
                    },
                    {
                        path: "revenu",
                        element: <RevenueStat />
                    },
                    {
                        path: "cost",
                        element: <CostStat />
                    },
                ]
            },
        ]
    }
])