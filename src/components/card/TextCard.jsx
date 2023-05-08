import React from "react";

export default function TextCard({
  title,
  totalMoney,
  comparedToYesterday,
  comparedToLastWeek,
}) {
  return (
    <div className="w-full align-middle flex flex-col justify-around bg-blue-50 dark:bg-slate-700 h-52 xl:h-72 hover:bg-blue-200 dark:hover:bg-slate-600 rounded-xl p-4 my-2 text-center">
      <div className="font-bold text-2xl py-4">{title}</div>
      <div className="text-2xl">
        ₩{totalMoney}
      </div>
      <div className="flex justify-around">
        <div>
          <table className="text-left">
            <tr>
              <th>어제보다</th>
              <td className="pl-2">{comparedToYesterday}</td>
            </tr>
            <tr>
              <th>지난주보다</th>
              <td className="pl-2">{comparedToLastWeek}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
