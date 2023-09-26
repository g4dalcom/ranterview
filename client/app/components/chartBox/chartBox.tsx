interface Props {
  title: string;
}

const ChartBox = ({ title }: Props) => {
  return (
    <div>
      <h2 style={{ textAlign: 'start' }}>{title}</h2>
    </div>
  );
};

export default ChartBox;
