import { useParams } from "react-router-dom";

const Sector = () => {
  const { name } = useParams(); // name corresponds to the :name in your route definition

  return (
    <div>
      <h1>Sector: {name}</h1>
      {/* Rest of your component logic and rendering */}
    </div>
  );
};

export default Sector;
