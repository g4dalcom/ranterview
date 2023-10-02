import { ProblemCountType } from '@/app/types';
import dynamic from 'next/dynamic';
import { XAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts';

const BarChart = dynamic(
  () => import('recharts').then((recharts) => recharts.BarChart),
  { ssr: false },
);

interface Props {
  data: ProblemCountType | any;
}

const CustomBarChart = ({ data }: Props) => {
  return (
    <ResponsiveContainer>
      <BarChart
        width={700}
        height={200}
        margin={{ top: 10, right: 10, left: 10 }}
        data={data.problemCount}
      >
        <XAxis dataKey="category" hide={true} />
        <Tooltip contentStyle={{ background: 'transparent', border: 'none' }} />
        <Bar dataKey="count" fill="#8884d8" barSize={20} />
        <Bar dataKey="solved" fill="#82ca9d" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
