import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import useCalendarQuery from '@/app/hooks/api/useCalendarQuery';
import { CalendarType } from '@/app/types';
import styled from '@emotion/styled';

const Calendar = () => {
  const data: CalendarType[] | any = useCalendarQuery();

  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventClassNames="click-event"
        events={
          Array.isArray(data)
            ? data.map((d: CalendarType) => ({
                title: `${d.dateInfo.solvedCount}개 해결`,
                date: d.dateInfo.completionDate,
              }))
            : ''
        }
      />
    </Container>
  );
};

export default Calendar;

const Container = styled.article`
  & .click-event {
    &:hover {
      cursor: pointer;
    }
  }
`;
