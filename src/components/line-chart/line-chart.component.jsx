import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ txs }) => {
  const dates = [];
  const balance = [];
  txs.map(tx => {
    dates.push(tx.Date);
    balance.push(tx["Balance AMT"]);
    return 1;
  });

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: dates
    }
  };
  const series = [
    {
      name: "Balance",
      data: balance
    }
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="line" width="800" />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
