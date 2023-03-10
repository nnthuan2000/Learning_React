import CharBar from './ChartBar';

import { IDataPoint } from '../../types/DataPoints';

import './Chart.css';

interface ChartProps {
  dataPoints: IDataPoint[];
}

function Chart({ dataPoints }: ChartProps) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <CharBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
