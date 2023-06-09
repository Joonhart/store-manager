import { useRecoilState } from "recoil";
import { recoilMenuState } from "../../recoil/atom";

export default function MenuManage() {
  const [menus, setMenus] = useRecoilState(recoilMenuState);

  const addMenu = () => {
    const newMenuName = document.getElementById("addMenuName").value;
    const newMenuPrice = document.getElementById("addMenuPrice").value;
    const newMenuId = menus.data.length + 1;

    setMenus({
      ...menus,
      data: [
        ...menus.data,
        { id: newMenuId, menu: newMenuName, price: newMenuPrice },
      ],
    });

    document.getElementById("addMenuName").value = "";
    document.getElementById("addMenuPrice").value = "";
  };

  const editEventHandler = (t) => {
    console.log(t);
  };

  const deleteEventHandler = (deleteMenu) => {
    const newData = menus.data.filter((menu) => menu.id !== deleteMenu.id);
    const reIndexData = newData.map((data, idx) =>  ({...data, id: idx+1}))
    setMenus({
      ...menus,
      data: reIndexData,
    });
  };

  return (
    <div className="flex flex-col">
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
                    <tr key={menu.id} id={menu.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {menu.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        <input
                          className="bg-transparent border-none"
                          type="text"
                          value={menu.menu}
                          readOnly
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                        {menu.price}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            editEventHandler({ ...menu });
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            deleteEventHandler({ ...menu });
                          }}
                        >
                          Delete
                        </button>
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
                      <input
                        className="bg-transparent border-none"
                        type="text"
                        name="addMenuName"
                        id="addMenuName"
                        placeholder="메뉴 이름"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 dark:text-gray-500 whitespace-nowrap">
                      <input
                        className="bg-transparent border-none"
                        type="number"
                        name="addMenuPrice"
                        id="addMenuPrice"
                        placeholder="메뉴 가격"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button onClick={addMenu}>메뉴 추가</button>
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
