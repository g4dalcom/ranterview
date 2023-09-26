import useRecentlyCountQuery from '@/app/hooks/api/useRecentlyCountQuery';
import ChartBox from '../chartBox/chartBox';
import CustomLineChart from '../charts/customLineChart';
import styled from '@emotion/styled';
import { RecentlyCountType } from '@/app/types';

const RecentlySolvedInfo = () => {
  const recentlyCountData: RecentlyCountType | any = useRecentlyCountQuery();

  return (
    <>
      <ChartBox title={'Weekly Info'} />
      <ChartLayout>
        <CustomLineChart data={recentlyCountData} />
      </ChartLayout>
    </>
  );
};

export default RecentlySolvedInfo;

const ChartLayout = styled.article`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
