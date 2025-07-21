import React, { useState } from 'react';
import { Calendar,EventPopup } from '../../components/index.js';
import calendarData from '../../data/calendarData.json';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleDateClick = (date, info) => {
    setSelectedDate(date);
    setSelectedInfo(info);
  };

  const closePopup = () => {
    setSelectedDate(null);
    setSelectedInfo(null);
  };

  return (
    <div className="min-h-[60vh] sm:min-h-screen p-8 mt-25">
      <h1 className="text-3xl font-bold mb-6 text-center">Event Calendar</h1>
      <div className="max-w-4xl mx-auto">
        <Calendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          onDateClick={handleDateClick}
          data={calendarData}
        />
      </div>
      {selectedInfo && (
        <EventPopup date={selectedDate} info={selectedInfo} onClose={closePopup} />
      )}
    </div>
  );
};

export default CalendarPage;
