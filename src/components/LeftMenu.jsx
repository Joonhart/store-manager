import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftMenu() {
  return (
    <div className="w-2/12 bg-blue-100 h-full text-black dark:bg-blue-950 dark:text-white">
      레프트메뉴인데영
      <p>네임카드</p>
      <Link to="/">
        DashBoard
      </Link>
      <p>관리</p>
      <Link to="/manage/revenu">
        매출 관리
      </Link>
      <Link to="/manage/cost">
        지출 관리
      </Link>
      <Link to="/manage/menu">
        메뉴 관리
      </Link>
      <p>통계</p>
      <Link to="/stat/all">
        전체
      </Link>
      <Link to="/stat/revenu">
        매출 통계
      </Link>
      <Link to="/stat/cost">
        지출 통계
      </Link>
    </div>
  )
}
