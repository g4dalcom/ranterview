'use client';

import DataTable from '@/app/components/dataTable/dataTable';
import { Button, Section } from '../daily/style';
import { useQuery } from '@tanstack/react-query';
import { ProblemType } from './../../types/index';
import { getAllProblems } from '@/app/api/problem';
import styled from '@emotion/styled';

const Storage = () => {
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

  return (
    <Section>
      <h1>Storage Page</h1>
      <ButtonBox>
        <Button size="md" variant="outline">
          등록
        </Button>
      </ButtonBox>
      {Array.isArray(data) && <DataTable problems={data} />}
    </Section>
  );
};

export default Storage;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  max-width: var(--size-xl);
  width: 100%;
  margin: 0 auto;
`;
