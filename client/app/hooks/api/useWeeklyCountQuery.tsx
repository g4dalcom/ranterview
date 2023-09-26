import { getWeeklySolvedCount } from '@/app/api/problem';
import { WeeklyCountType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

const useWeeklyCountQuery = () => {
  const { isLoading, isError, data, error } = useQuery<WeeklyCountType>({
    queryKey: ['weeklySolvedCount'],
    queryFn: getWeeklySolvedCount,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return data;
};

export default useWeeklyCountQuery;
