import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay
} from 'date-fns';

const Calendar = ({ currentDate, setCurrentDate, onDateClick, data }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={() => {
          const prevMonth = new Date(currentDate);
          prevMonth.setMonth(prevMonth.getMonth() - 1);
          if (prevMonth.getFullYear() === new Date().getFullYear()) {
            setCurrentDate(prevMonth);
          }
        }}
        className="px-3 py-1 text-white bg-blue2 rounded hover:bg-blue4 disabled:opacity-50"
        disabled={currentDate.getMonth() === 0}
      >
        Prev
      </button>

      <h2 className="text-xl font-bold">{format(currentDate, 'MMMM yyyy')}</h2>
      <button
        onClick={() => {
          const nextMonth = new Date(currentDate);
          nextMonth.setMonth(nextMonth.getMonth() + 1);
          if (nextMonth.getFullYear() === new Date().getFullYear()) {
            setCurrentDate(nextMonth);
          }
        }}
        className="px-3 py-1 text-white bg-blue2 rounded hover:bg-blue4 disabled:opacity-50"
        disabled={currentDate.getMonth() === 11}
      >
        Next
      </button>

    </div>
  );

  const renderDays = () => {
    const days = [];
    const dateFormat = "EEE";
    const start = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-semibold" key={i}>
          {format(addDays(start, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formatted = format(day, 'yyyy-MM-dd');
        const isEvent = data[formatted];
        const isCurrent = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, new Date());

        days.push(
          <div
            key={day}
            className={`p-2 text-center border rounded h-20 flex items-center justify-center cursor-pointer
              ${!isCurrent ? 'text-gray-400' : ''}
              ${isEvent ? 'bg-blue4 hover:bg-blue3' : ''}
              ${isToday ? ' border-4  border-green-600 bg-blue4 ' : ''}
            `}
            onClick={() => isEvent && onDateClick(formatted, data[formatted])}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }

      rows.push(<div className="grid grid-cols-7 gap-1 mb-1" key={day}>{days}</div>);
      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="p-4 rounded shadow-[0_0_200px_40px_rgba(0,180,216,0.5)] bg-white">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
