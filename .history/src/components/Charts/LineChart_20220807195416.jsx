import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from '@syncfusion/ej2-react-charts';

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../../data/dummy';

const LineChart = () => {
  return (
    <ChartComponent>
      <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
    </ChartComponent>
  );
};

export default LineChart;
