import { getDailyProblems } from '@/app/api/problem';
import { ProblemType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

const useDailyQuery = () => {
  const { isLoading, isError, data, error } = useQuery<ProblemType[]>({
    queryKey: ['daily'],
    queryFn: getDailyProblems,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return data;
};

export default useDailyQuery;
