import React from 'react';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import {
  areaCustomSeries,
  AreaPrimaryXAxis,
  AreaPrimaryYAxis,
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={AreaPrimaryXAxis}
      primaryYAxis={AreaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
    >
      <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Area;
