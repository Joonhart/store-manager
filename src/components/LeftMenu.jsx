import React from "react";
import { Link } from "react-router-dom";
import ProfileCard from "./card/ProfileCard";

const ulClass = "pl-4 text-lg pt-1";

export default function LeftMenu() {
  return (
    <div className="w-3/12 bg-blue-100 h-screen p-4 pt-10 text-2xl text-black dark:bg-blue-950 dark:text-slate-300">
      <ProfileCard />
      <hr className="my-8 h-1 bg-black dark:bg-blue-300" />
      <Link to="/">DashBoard</Link>
      <hr className="my-8 h-1 bg-black dark:bg-blue-300" />
      <p>관리</p>
      <ul className={ulClass}>
        <li>
          <Link to="/manage/revenu">매출 관리</Link>
        </li>
        <li>
          <Link to="/manage/cost">지출 관리</Link>
        </li>
        <li>
          <Link to="/manage/menu">메뉴 관리</Link>
        </li>
      </ul>
      <hr className="my-8 h-1 bg-black dark:bg-blue-300" />
      <p>통계</p>
      <ul className={ulClass}>
        <li>
          <Link to="/stat/all">전체</Link>
        </li>
        <li>
          <Link to="/stat/revenu">매출 통계</Link>
        </li>
        <li>
          <Link to="/stat/cost">지출 통계</Link>
        </li>
      </ul>
    </div>
  );
}
