import { ProblemCountType } from '@/app/types';
import dynamic from 'next/dynamic';
import { XAxis, Tooltip, Bar } from 'recharts';

const BarChart = dynamic(
  () => import('recharts').then((recharts) => recharts.BarChart),
  { ssr: false },
);

interface Props {
  data: ProblemCountType | any;
}

const CustomBarChart = ({ data }: Props) => {
  return (
    <BarChart width={700} height={200} data={data.categoryCount}>
      <XAxis dataKey="category" />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default CustomBarChart;
