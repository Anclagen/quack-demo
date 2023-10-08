import BannerHalf from "../../components/Banner/BannerHalf";
import Head from "../../components/Head";
import MeatImage from "../../assets/pexels-mark-stebnicki-7163991.jpg";
import { Link } from "react-router-dom";

const MeatAndFood = () => {
  return (
    <>
      <Head
        title="Meat & Food Processing"
        description="We specialize in supplying a diverse range of workers for the Meat Processing industry, catering to roles ranging from Junior Boners and Trimmers to Management positions. With our extensive experience, we ensure the right individuals are placed in roles where they can thrive and find fulfillment, creating a positive experience for everyone involved."
      />
      <BannerHalf title="Meat & Food Processing" slogan="" imgSrc={MeatImage} imgAlt="Workers processing meat." links={[]} />
      <div className="max-w-screen-md mx-auto my-20">
        <p className="my-5">
          At QS Specialists Recruitment we consider all aspects of the supply chain and the functions of all skill sets involved and the potential issues our customers could encounter without them;
          This is why we look from Hygienist right through to the Boardroom on Temporary, Contract or Permanent placements.
        </p>
        <p className="my-5">Our knowledge on delivering services on singular remote placements or large volumes on daily uplifts is what we specialise in with onsite support where needed.</p>
        <p className="my-5">
          Our recruitment process is based on our clients needs and relevant skill set required for: Butcher, Slaughterman, Trimmer etc we look at previous employment and gain references, complete a
          pre-employment right to work and skills check to ensure our clients get the right candidate with the right ethos and ethics to match their own core workforce; we also encourage a Block test
          to establish salary bandings ensuring they can deliver expectations and ability to grow in skill set and increase salary expectations.
        </p>
        <p className="my-5">
          The Hygienist and production workers keep the process running smoothly and are vital parts of any organisation where ability to perform at the highest Food Hygiene is priority to ensure
          quality is the best in the marketplace, we ensure all our workers are either food safety accredited or completes our clients own Food Safety Awareness before going into the production area.
        </p>
        <div className="mt-12">
          <h3 className="text-xl font-semibold mt-12 mb-10">Need To Fill A Position</h3>
          <Link
            to="/register-employer"
            className="py-4 px-6  bg-violet-900 hover:bg-violet-600 focus:ring-violet-500 focus:ring-offset-violet-200 text-white w-full transition ease-in duration-200  text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
          >
            Make An Enquiry
          </Link>
        </div>
      </div>
    </>
  );
};

export default MeatAndFood;
