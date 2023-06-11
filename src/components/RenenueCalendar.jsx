import React, { useState } from 'react'
import Calendar from 'react-calendar'

export default function RenenueCalendar() {
  const [value, onChange] = useState(new Date());
  console.log(value);

  return (
    <div>
      <Calendar />
    </div>
  )
}
