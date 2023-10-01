import { Link } from "react-router-dom";

export const BannerLink = ({ to, initailColor, hoverColor }) => {
  return (
    <Link to={to} className="draw-outline draw-outline--tandem text-white font-semibold p-2 rounded-xl">
      Meat & Food Processing
    </Link>
  );
};
