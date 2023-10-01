import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            title: '1개 해결',
            date: '2023-10-01',
            backgroundColor: '#82ca9d',
            editable: true,
          },
        ]}
      />
    </>
  );
};

export default Calendar;
