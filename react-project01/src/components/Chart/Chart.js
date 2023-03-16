import React from "react";
import { useSelector} from "react-redux";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const togglevalue=useSelector((state)=>state.shoingYearChart)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  const yeardataPointValues = props.yearDatapoint.map(
    (dataPoint) => dataPoint.value
  );
  const yeartotalMaximum = Math.max(...yeardataPointValues);
  
  return (
    <div>
      {togglevalue&&<div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>}
      {!togglevalue&&<div className="chart">
        {props.yearDatapoint.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={yeartotalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>}
    </div>
  );
};

export default Chart;
