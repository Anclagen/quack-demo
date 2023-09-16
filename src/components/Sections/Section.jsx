const Section = ({ bgColor, children }) => {
  return (
    <section className={`w-full overflow-hidden px-4 py-24 ${bgColor}`}>
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
