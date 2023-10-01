import { CalendarType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import { getSolvedDateAndCountAndProblems } from './../../api/problem';

const useCalendarQuery = () => {
  const { isLoading, isError, data, error } = useQuery<CalendarType>({
    queryKey: ['caldendarData'],
    queryFn: getSolvedDateAndCountAndProblems,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return data;
};

export default useCalendarQuery;
