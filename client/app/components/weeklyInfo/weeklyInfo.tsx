import ChartBox from '../chartBox/chartBox';
import CustomLineChart from '../charts/customLineChart';
import styled from '@emotion/styled';

const WeeklyInfo = () => {
  return (
    <>
      <ChartBox title={'Weekly Info'} />
      <ChartLayout>
        <CustomLineChart />
      </ChartLayout>
    </>
  );
};

export default WeeklyInfo;

const ChartLayout = styled.article`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
