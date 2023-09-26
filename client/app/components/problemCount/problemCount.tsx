import useProblemCountQuery from '@/app/hooks/api/useProblemCountQuery';
import CustomBarChart from '../charts/customBarChart';

const ProblemCount = () => {
  const countingData = useProblemCountQuery();

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'start' }}>Problem Info</h2>
      </div>
      <div>
        <CustomBarChart data={countingData} />
      </div>
    </>
  );
};

export default ProblemCount;
