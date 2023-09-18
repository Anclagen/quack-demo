import React from "react";

const CardSection = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {React.Children.map(children, (child) => (
        <div className="w-full sm:w-1/2 lg:w-1/3 p-5">{child}</div>
      ))}
    </div>
  );
};

export default CardSection;
