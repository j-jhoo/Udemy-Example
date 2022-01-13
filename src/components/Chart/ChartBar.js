import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100);
  }
  return (
    <div className="Chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}>
          <div className="chart-bar__label"></div>
        </div>
      </div>
    </div>
  );
};

export default ChartBar;
