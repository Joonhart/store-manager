import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useManager } from "../../context/ManageApiContext";

export default function MenuManage() {
  const { manager } = useManager();
  const { isLoading, error, data: menus } = useQuery(["menu"], () => manager.getMenu());
  return (
    <div className="flex flex-col">
      {isLoading && <p>Loading...</p>}
      {error && <p>error!!</p>}
      {menus && (
        <div className="overflow-x-auto">
          <div className="p-3 w-full inline-block align-middle">
            <h2 className="p-5">메뉴 현황</h2>
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      메뉴명
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      가격
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      수정
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      삭제
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {menus.data.map((menu) => (
                    <tr key={menu.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {menu.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {menu.menu}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {menu.price}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        Edit
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        Delete
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
                      메뉴명
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      가격
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
                        <input className="bg-transparent border-none" type="text" name="addMenuName" id="addMenuName" placeholder="메뉴 이름"/>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        <input className="bg-transparent border-none" type="number" name="addMenuPrice" id="addMenuPrice" placeholder="메뉴 가격"/>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        메뉴 추가
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
