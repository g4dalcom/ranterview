import dynamic from 'next/dynamic';
import { XAxis, YAxis, Tooltip, Bar } from 'recharts';

const BarChart = dynamic(
  () => import('recharts').then((recharts) => recharts.BarChart),
  { ssr: false },
);

interface Props {
  data: { category: string; count: number | unknown }[];
}

const CustomBarChart = (data: Props) => {
  return (
    <BarChart width={700} height={200} data={data.data}>
      <XAxis dataKey="category" />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

export default CustomBarChart;
