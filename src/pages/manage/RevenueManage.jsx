import moment from "moment";
import { useRecoilState } from "recoil";
import { recoilMenuState, recoilRevenuState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import SelectCalendar from "../../components/SelectCalendar";

export default function RevenueManage() {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [menus] = useRecoilState(recoilMenuState);
  const [revenue] = useRecoilState(recoilRevenuState);
  const [dateRevenue, setDateRevenue] = useState([]);
  const [dateList, setDateList] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const changeDateHandler = (changedDate) => {
    console.log("useCallback 으로 중복 호출 해결 필요");
    setDate(changedDate);
  };

  useEffect(() => {
    setShowCalendar(false);
  }, [date]);

  useEffect(() => {
    const dateRevenueHistory = revenue.data.filter(
      (data) => data.date === date
    )[0]
      ? revenue.data.filter((data) => data.date === date)[0].menuList
      : [];
    const newDateRevenue = [];
    menus.data.forEach((menu) => {
      const revenue = dateRevenueHistory.find(
        (revenue) => revenue.menu === menu.menu
      );
      if (revenue) {
        newDateRevenue.push(Object.assign({}, menu, revenue));
      } else {
        newDateRevenue.push({ ...menu });
      }
    });
    setDateRevenue(newDateRevenue);
  }, [date, menus, revenue]);

  useEffect(() => {
    setDateList(revenue.data.map((r) => r.date).reverse());
  }, [revenue.data]);

  console.log(dateList);

  return (
    <div className="flex flex-col">
      {
        <div className="overflow-x-auto">
          <div className="p-3 w-full inline-block align-middle">
            <h2 className="p-5" onClick={() => setShowCalendar(!showCalendar)}>
              날짜 : {date}
            </h2>
            {showCalendar && (
              <SelectCalendar changeDate={changeDateHandler} date={date} />
            )}
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
                  {dateRevenue.map((menu) => (
                    <tr key={menu.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {menu.menu}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        <input
                          className="bg-transparent border-none"
                          type="number"
                          value={menu.shopSoldCount ? menu.shopSoldCount : 0}
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        <input
                          className="bg-transparent border-none"
                          type="number"
                          value={
                            menu.shopSoldRevenue ? menu.shopSoldRevenue : 0
                          }
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        <input
                          className="bg-transparent border-none"
                          type="number"
                          value={
                            menu.deliverySoldCount ? menu.deliverySoldCount : 0
                          }
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        <input
                          className="bg-transparent border-none"
                          type="number"
                          value={
                            menu.deliverySoldRevenue
                              ? menu.deliverySoldRevenue
                              : 0
                          }
                        />
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
