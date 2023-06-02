import React, { useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { useManager } from "../../context/ManageApiContext";

export default function RevenueManage() {
  const { manager } = useManager();
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState('2023-05-29');

  // const date = '2023-05-29'

  const result = useQueries({
    queries: [
      {
        queryKey: ["menu"],
        queryFn: () => manager.getMenu(),
      },
      {
        queryKey: ["revenue", date],
        queryFn: () => manager.getDateRevenue(date),
      },
    ],
  });

  useEffect(() => {
    const loadingFinishAll = result.some((result) => result.isLoading);
    console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
    setIsLoading(loadingFinishAll);
    !loadingFinishAll && addRevenue(result[0].data.data, result[1].data[0].menuList);
    console.log(menus);
  }, [date]);

  const addRevenue = (menu, revenue) => {
    const newMenu = menu.map(m => {
      const neww = revenue.filter(r => r.menu === m.menu)[0];
      return {...m, ...neww}
    })
    setMenus(newMenu)
    return menu;
  }

  return (
    <div className="flex flex-col">
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        // <p>rendering...</p>
        <div className="overflow-x-auto">
          <div className="p-3 w-full inline-block align-middle">
            <h2 className="p-5">날짜 선택</h2>
            <select className="bg-transparent mb-5">
              {menus.map((revenue) => (
                <option>{revenue.date}</option>
              ))}
            </select>
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      메뉴
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      매장판매수량
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      매장판매금액
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      배달판매수량
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      배달판매금액
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {menus.map((menu) => (
                      <tr key={menu.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.menu}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.shopSoldCount ? menu.shopSoldCount : 0}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.shopSoldRevenue ? menu.shopSoldRevenue : 0}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.soldType ? menu.soldType : 0}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.deliverySoldRevenue ? menu.deliverySoldRevenue : 0}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
