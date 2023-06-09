import React from "react";
import TextCard from "../components/card/TextCard";
import { BarLineChart } from "../components/chart/BarLineChart";

export default function DashBoard() {
  const totalMoney = 185000;
  const title = "오늘 매출";
  const comparedToYesterday = "+₩28000(+16%)";
  const comparedToLastWeek = "+₩36000(+20%)";
  return (
    <div className="py-2">
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        <TextCard
          title={title}
          totalMoney={totalMoney}
          comparedToYesterday={comparedToYesterday}
          comparedToLastWeek={comparedToLastWeek}
        />
        <TextCard
          title={title}
          totalMoney={totalMoney}
          comparedToYesterday={comparedToYesterday}
          comparedToLastWeek={comparedToLastWeek}
        />
        <TextCard
          title={title}
          totalMoney={totalMoney}
          comparedToYesterday={comparedToYesterday}
          comparedToLastWeek={comparedToLastWeek}
        />
      </section>
      <section className="pt-10 p-16">
        <p className="text-center py-4 text-xl">최근 7일 매출/주문 라인 차트</p>
        <BarLineChart />
      </section>
    </div>
  );
}
