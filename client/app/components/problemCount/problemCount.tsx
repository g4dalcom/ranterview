import useProblemCountQuery from '@/app/hooks/api/useProblemCountQuery';
import CustomBarChart from '../charts/customBarChart';

const ProblemCount = () => {
  const countingData = useProblemCountQuery();

  return (
    <>
      <CustomBarChart data={countingData} />
    </>
  );
};

export default ProblemCount;
