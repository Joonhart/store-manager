import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilIngredientState } from '../../recoil/atom'
import moment from 'moment'
import SelectCalendar from '../../components/SelectCalendar'

export default function CostManage() {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [intredients] = useRecoilState(recoilIngredientState)
  const [dateRevenue, setDateRevenue] = useState([])
  const [dateList, setDateList] = useState([])
  const [showCalendar, setShowCalendar] = useState(false)

  const changeDateHandler = (changedDate) => {
    console.log('useCallback 으로 중복 호출 해결 필요');
    setDate(changedDate)
  }

  useEffect(() => {
    setShowCalendar(false)
  }, [date])

  // useEffect(() => {
  //   const dateRevenueHistory = revenue.data.filter(data => data.date === date)[0] ? revenue.data.filter(data => data.date === date)[0].menuList : []
  //   const newDateRevenue = []
  //   menus.data.forEach(menu => {
  //     const revenue = dateRevenueHistory.find(revenue => revenue.menu === menu.menu)
  //     if (revenue) {
  //       newDateRevenue.push(Object.assign({}, menu, revenue))
  //     } else {
  //       newDateRevenue.push({...menu})
  //     }
  //   })
  //   setDateRevenue(newDateRevenue)
  // }, [date, menus, revenue])

  // useEffect(() => {
  //   setDateList(revenue.data.map(r => r.date).reverse())
  // }, [revenue.data])

  console.log(dateList);

  return (
    <div className="flex flex-col">
      {
        <div className="overflow-x-auto">
          <div className="p-3 w-full inline-block align-middle">
            <h2 className="p-5" onClick={()=>setShowCalendar(!showCalendar)}>날짜 : {date}</h2> 
            {showCalendar && <SelectCalendar changeDate={changeDateHandler} date={date}/>}
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      구매 항목
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      구매 경로
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      구매 단가
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      구매 수량
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      구매 비용
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* {dateRevenue.map((menu) => ( */}
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        햄버거빵
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        코스트코
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        8000
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        3
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        24000
                      </td>
                    </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
