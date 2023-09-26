import useProblemCountQuery from '@/app/hooks/api/useProblemCountQuery';
import CustomBarChart from '../charts/customBarChart';
import styled from '@emotion/styled';
import { ProblemCountType } from '@/app/types';
import ChartBox from './../chartBox/chartBox';

const ProblemCount = () => {
  const countingData: ProblemCountType | any = useProblemCountQuery();

  return (
    <>
      <ChartBox title={'Problem Info'} />
      <ChartLayout>
        <DataInfo>
          <DataBox>
            <div className="data_count">
              {countingData.solved} / {countingData.total}
            </div>
            <div className="percent">
              {Math.ceil((countingData.solved / countingData.total) * 100)} %
            </div>
          </DataBox>
        </DataInfo>
        <Chart>
          <CustomBarChart data={countingData} />
        </Chart>
      </ChartLayout>
    </>
  );
};

export default ProblemCount;

const ChartLayout = styled.article`
  display: flex;
  gap: 20px;
  padding: 10px;
`;

const DataInfo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & .data_count {
    font-size: 2rem;
    font-weight: 500;
  }

  & .percent {
    font-size: 2.8rem;
    font-weight: 600;
    color: #8884d8;
  }
`;

const Chart = styled.div`
  display: flex;
  flex: 4;
  justify-content: center;
`;
