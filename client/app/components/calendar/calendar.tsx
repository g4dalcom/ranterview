import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useCalendarQuery from '@/app/hooks/api/useCalendarQuery';
import { CalendarType } from '@/app/types';

const Calendar = () => {
  const data: CalendarType[] | any = useCalendarQuery();

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={
          Array.isArray(data)
            ? data.map((d: CalendarType) => ({
                title: `${d.dateInfo.solvedCount}개 해결`,
                date: d.dateInfo.completionDate,
              }))
            : ''
        }
      />
    </>
  );
};

export default Calendar;
