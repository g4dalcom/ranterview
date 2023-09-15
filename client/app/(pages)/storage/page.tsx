'use client';

import DataTable from '@/app/components/dataTable/dataTable';
import { Section } from '../daily/style';
import { useQuery } from '@tanstack/react-query';
import { ProblemType } from './../../types/index';
import { getAllProblems } from '@/app/api/problem';

const Storage = () => {
  const { isLoading, isError, data, error } = useQuery<ProblemType[]>({
    queryKey: ['allProblems'],
    queryFn: getAllProblems,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error instanceof Error && isError)
    return <div>Error: {error.message}</div>;

  return (
    <Section>
      <h1>Storage Page</h1>
      {Array.isArray(data) && <DataTable problems={data} />}
    </Section>
  );
};

export default Storage;
