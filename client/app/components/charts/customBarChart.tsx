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
  console.log(data);
  return (
    <BarChart
      width={700}
      height={200}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      data={data.problemCount}
    >
      <XAxis dataKey="category" />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
      <Bar dataKey="solved" fill="#82ca9d" />
    </BarChart>
  );
};

export default CustomBarChart;
