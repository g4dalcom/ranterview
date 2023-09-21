import { getAllProblems } from '@/app/api/problem';
import { ProblemType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

const useAllProblemsQuery = () => {
  const { isLoading, isError, data, error } = useQuery<ProblemType[]>({
    queryKey: ['allProblems'],
    queryFn: getAllProblems,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return data;
};

export default useAllProblemsQuery;
