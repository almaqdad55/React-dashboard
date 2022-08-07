import React from 'react';

import {
  SparkLineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, data, color, type, currentColor }) => {
  return (
    <SparkLineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparkLineComponent>
  );
};

export default SparkLine;
