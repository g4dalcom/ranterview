'use client';

import DataTable from '@/app/components/dataTable/dataTable';
import { Button, Section } from '../daily/style';
import styled from '@emotion/styled';
import AddProblem from '@/app/components/addProblem/addProblem';
import useAllProblemsQuery from '@/app/hooks/api/useAllProblemsQuery';

const Storage = () => {
  const data = useAllProblemsQuery();

  return (
    <Section>
      <h1>Storage Page</h1>
      <ButtonBox>
        <Button size="md" variant="outline">
          등록
        </Button>
      </ButtonBox>
      {Array.isArray(data) && <DataTable problems={data} />}
      <AddProblem />
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
