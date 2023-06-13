import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { recoilIngredientState } from '../../recoil/atom'
import moment from 'moment'
import SelectCalendar from '../../components/SelectCalendar'

export default function CostManage() {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
  const [ingredients, setIngredients] = useRecoilState(recoilIngredientState)
  // const [dateList, setDateList] = useState([])
  const [showCalendar, setShowCalendar] = useState(false)

  const changeDateHandler = (changedDate) => {
    console.log('useCallback 으로 중복 호출 해결 필요');
    setDate(changedDate)
  }

  useEffect(() => {
    setShowCalendar(false)
  }, [date])

  const addCost = () => {
    console.log("지출 항목 추가하기");
    const newCostId = ingredients.data.length + 1
    const newCostName = document.getElementById("addCostName").value
    const newCostPlace = document.getElementById("addCostPlace").value
    const newCostPrice = document.getElementById("addCostPrice").value
    setIngredients({
      ...ingredients,
      data: [
        ...ingredients.data,
        { id: newCostId, menu: newCostName, where:newCostPlace, price: newCostPrice },
      ],
    })
  }

  console.log(ingredients);

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
                  {ingredients.data.map((ingredient) => (
                    <tr key={ingredient.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {ingredient.menu}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      {ingredient.where}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      {ingredient.price}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      2
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        24000
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="p-5">메뉴 추가</h2>
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      구매 항목 명
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
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      선택
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      <input
                        className="bg-transparent border-none"
                        type="text"
                        name="addCostName"
                        id="addCostName"
                        placeholder="구매 항목 명"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      <input
                        className="bg-transparent border-none"
                        type="text"
                        name="addCostPlace"
                        id="addCostPlace"
                        placeholder="구매 경로"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      <input
                        className="bg-transparent border-none"
                        type="number"
                        name="addCostPrice"
                        id="addCostPrice"
                        placeholder="구매 단가"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button onClick={addCost}>지출 항목 추가</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
