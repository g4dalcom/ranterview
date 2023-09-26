import useWeeklyCountQuery from '@/app/hooks/api/useWeeklyCountQuery';
import ChartBox from '../chartBox/chartBox';
import CustomLineChart from '../charts/customLineChart';
import styled from '@emotion/styled';
import { WeeklyCountType } from '@/app/types';

const WeeklyInfo = () => {
  const weeklyCountData: WeeklyCountType | any = useWeeklyCountQuery();
  console.log(weeklyCountData);

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
