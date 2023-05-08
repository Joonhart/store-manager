import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: '최근 7일 매출/주문 현황',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: '주문 건수',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [7,25,18,32,12,11,20],
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: '매출 금액',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [70000,250000,200000,450000,150000,125000,225000],
      borderColor: 'white',
      borderWidth: 2,
      yAxisID: 'y',
    },
  ],
};

export function BarLineChart() {
  return <Chart type='bar' options={options} data={data} />;
}