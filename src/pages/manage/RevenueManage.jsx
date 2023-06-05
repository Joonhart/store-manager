import moment from "moment";
import { useRecoilState } from "recoil";
import { recoilMenuState, recoilRevenuState } from "../../recoil/atom";
import { useState } from "react";

export default function RevenueManage() {
  const [menus] = useRecoilState(recoilMenuState);
  const [revenue, setRevenue] = useRecoilState(recoilRevenuState);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  console.log(menus);
  console.log(revenue);
  console.log(date);

  return (
    <div className="flex flex-col">
      {
        <div className="overflow-x-auto">
          <div className="p-3 w-full inline-block align-middle">
            <h2 className="p-5">날짜 선택</h2>
            <select className="bg-transparent mb-5">
              {revenue.data.map((r) => (
                <option key={r.date}>{r.date}</option>
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
                  {menus.data.map((menu) => (
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
                        {menu.deliverySoldRevenue
                          ? menu.deliverySoldRevenue
                          : 0}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
