import { useQuery } from '@tanstack/react-query';
import { getAllProblems } from '../../api/problem';
import { ProblemType } from '../../types';

const Problem = () => {
  const { isLoading, isError, data, error } = useQuery<ProblemType[]>({
    queryKey: ['problem'],
    queryFn: getAllProblems,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return (
    <>
      {Array.isArray(data) &&
        data.map((p) => (
          <div key={p.id}>
            <div>{p.category}</div>
            <div>{p.question}</div>
            <div>{p.answer}</div>
          </div>
        ))}
    </>
  );
};

export default Problem;
