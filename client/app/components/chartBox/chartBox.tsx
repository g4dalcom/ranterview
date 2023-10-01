interface Props {
  title: string;
}

const ChartBox = ({ title }: Props) => {
  return (
    <div>
      <h2
        style={{ textAlign: 'start', fontSize: '2.8rem', marginBottom: '10px' }}
      >
        {title}
      </h2>
    </div>
  );
};

export default ChartBox;
