import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./card/ProfileCard";

const ulClass = "pl-4 text-lg pt-1";

export default function LeftMenu({setCurMenu}) {
  const changeMenuHandler = (e) => {
    setCurMenu(e.target.innerHTML);
  }
  return (
    <div className="w-3/12 bg-blue-100 h-screen p-4 pt-10 text-lg md:text-xl lg:text-2xl text-black dark:bg-blue-950 dark:text-slate-300">
      <ProfileCard />
      <hr className="my-8 h-1 bg-black dark:bg-blue-300" />
      <Link to="/" onClick={changeMenuHandler}><h2>DASHBOARD</h2></Link>
      <hr className="my-8 h-1 bg-black dark:bg-blue-300" />
      <h2>관리</h2>
      <ul className={ulClass}>
        <li>
          <Link to="/manage/revenu" onClick={changeMenuHandler}>매출 관리</Link>
        </li>
        <li>
          <Link to="/manage/cost" onClick={changeMenuHandler}>지출 관리</Link>
        </li>
        <li>
          <Link to="/manage/menu" onClick={changeMenuHandler}>메뉴 관리</Link>
        </li>
      </ul>
      <hr className="my-8 h-1 bg-black dark:bg-blue-300" />
      <h2>통계</h2>
      <ul className={ulClass}>
        <li>
          <Link to="/stat/all" onClick={changeMenuHandler}>전체 통계</Link>
        </li>
        <li>
          <Link to="/stat/revenu" onClick={changeMenuHandler}>매출 통계</Link>
        </li>
        <li>
          <Link to="/stat/cost" onClick={changeMenuHandler}>지출 통계</Link>
        </li>
      </ul>
    </div>
  );
}
