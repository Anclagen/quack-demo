const CardSection = ({ children }) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center justify-center">{children}</div>;
};

export default CardSection;
