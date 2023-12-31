import { useParams } from "react-router-dom";
import BannerHalf from "../../components/Banner/BannerHalf";
import { sectors } from "../../components/data/sectors";
import Head from "../../components/Head";

const Sector = () => {
  const { name } = useParams(); // name corresponds to the :name in your route definition
  const sector = sectors.find((sector) => sector.slug === name);

  if (!sector) {
    return (
      <div className="pt-20 min-h-screen">
        <h1 className="text-2xl text-center">Sorry, we couldn't find that sector.</h1>
      </div>
    );
  }

  return (
    <>
      <Head title={sector.name} description={sector.summary} />
      <BannerHalf title={sector.name} slogan="" imgSrc={sector.imageSrc} imgAlt="Descriptive Image Alt Text" links={[]} />
      <div className="max-w-screen-md mx-auto my-20">
        {sector.paragraphs &&
          sector.paragraphs.map((paragraph, index) => (
            <p key={index} className="my-5">
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

export default Sector;
