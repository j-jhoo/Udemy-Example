import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} //label마다 고유의 값을 가지게 된다.
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
