import { getProblemCount } from '@/app/api/problem';
import { ProblemCountType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

const useProblemCountQuery = () => {
  const { isLoading, isError, data, error } = useQuery<ProblemCountType>({
    queryKey: ['problemCount'],
    queryFn: getProblemCount,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return data;
};

export default useProblemCountQuery;
