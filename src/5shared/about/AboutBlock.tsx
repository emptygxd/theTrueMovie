type Props = {
  title: string;
  value: string;
};

const AboutBlock = ({ title, value }: Props) => {
  return (
    <div className="movie__about-block">
      <p className="movie__about-title">{title}</p>
      <p className="movie__about-value">{value}</p>
    </div>
  );
};

export default AboutBlock;
