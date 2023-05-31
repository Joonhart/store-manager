import React, { useEffect, useState } from "react";
import { useManager } from "../../context/ManageApiContext";
import { useQueries } from "@tanstack/react-query";

export default function RevenueManage() {
  const { manager } = useManager();
  const [menus, setMenus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const date = '2023-05-29'

  const result = useQueries({
    queries: [
      {
        queryKey: ["menu"],
        queryFn: () => manager.getMenu(),
      },
      {
        queryKey: ["revenue"],
        queryFn: () => manager.getDateRevenue(date),
      },
    ],
  });

  useEffect(() => {
    console.log(result);
    const loadingFinishAll = result.some((result) => result.isLoading);
    console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
    setIsLoading(loadingFinishAll);
    !loadingFinishAll && setMenus(addRevenue(result[0].data.data, result[1].data[0].menuList));
  }, [result]);

  const addRevenue = (menu, revenue) => {
    console.log(menu);
    console.log(revenue);
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
                      판매수량
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      판매금액
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      주문방법
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {menus.map((menu) => (
                      <tr key={menu.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.price}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                          {menu.soldType}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          Edit
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
