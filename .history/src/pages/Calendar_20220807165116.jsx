import React from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Date,
  Week,
  WorkWeek,
  Month,
  Agendam,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"></div>
  );
};

export default Calendar;
