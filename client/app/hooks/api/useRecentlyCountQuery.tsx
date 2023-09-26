import { getRecentlySolvedCount } from '@/app/api/problem';
import { RecentlyCountType } from '@/app/types';
import { useQuery } from '@tanstack/react-query';

const useRecentlyCountQuery = () => {
  const { isLoading, isError, data, error } = useQuery<RecentlyCountType>({
    queryKey: ['recentlySolvedCount'],
    queryFn: getRecentlySolvedCount,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return data;
};

export default useRecentlyCountQuery;
