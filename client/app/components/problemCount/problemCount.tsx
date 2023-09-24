import useProblemCountQuery from '@/app/hooks/api/useProblemCountQuery';
import CustomBarChart from '../charts/customBarChart';

const ProblemCount = () => {
  const countingData = useProblemCountQuery();
  const data: { category: string; count: number | unknown }[] = [];

  const tmp = Object.values(countingData!);
  Object.entries(tmp[0]).map((p) => data.push({ category: p[0], count: p[1] }));
  console.log('main = ', data);
  return (
    <>
      <CustomBarChart data={data} />
    </>
  );
};

export default ProblemCount;
