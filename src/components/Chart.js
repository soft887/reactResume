import React from "react";
import Count from "./Count";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_exporting from "highcharts/modules/exporting";
HC_exporting(Highcharts);

const Chart = (props) => {
  const { categories, skills } = props;
  const chartOptions = {
    chart: {
      type: "bar",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: categories,
   },
    yAxis: {
      title: {
        text: "",
        align: "",
      },
      labels: {
        enabled: true,
      },
    },

    plotOptions: {
      series: {
        pointWidth: 12,
      },
    },
    series: [
      {
        name: "Skills",
        data: skills,
        legend: false,
        borderWidth: 0,
        borderRadius: 5,
        color: "green",
        dataLabels: {
          enabled: true,
          rotation: 360,
          color: "#000",
          align: "center",
          y: -20,
          x: -30,
          style: {
            fontSize: "10px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
  };

  return (
    <div className="Chart">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default Chart;
