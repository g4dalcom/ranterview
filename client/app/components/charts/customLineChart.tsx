import { WeeklyCountType } from '@/app/types';
import dynamic from 'next/dynamic';
import { Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = dynamic(
  () => import('recharts').then((recharts) => recharts.LineChart),
  { ssr: false },
);

interface Props {
  data: WeeklyCountType | any;
}

const CustomLineChart = ({ data }: Props) => {
  return (
    <LineChart
      width={700}
      height={200}
      data={data.weeklySolvedCount}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="completionDate" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="solvedCount" stroke="#8884d8" />
    </LineChart>
  );
};

export default CustomLineChart;
