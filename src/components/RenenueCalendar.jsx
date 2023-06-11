import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function RenenueCalendar({changeDate}) {
  const [value, onChange] = useState(new Date());
  
  useEffect(() => {
    console.log(value);
    changeDate(moment(value).format('YYYY-MM-DD'))
  }, [value])

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  )
}
