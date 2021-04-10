const Badge = ({ num, type }) => {
  return <span className={`badge badge-${type}`}>{num}</span>;
};

export default Badge;
