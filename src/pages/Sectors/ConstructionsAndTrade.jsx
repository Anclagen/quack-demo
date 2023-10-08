import BannerHalf from "../../components/Banner/BannerHalf";
import Head from "../../components/Head";
import TradeImage from "../../assets/pexels-movidagrafica-barcelona-1474993.jpg";
import { Link } from "react-router-dom";

const ConstructionAndTrade = () => {
  return (
    <>
      <Head
        title="Construction & Trade"
        description="Our Engineering & Construction team possesses a wealth of experience in the industry, specializing in recruiting highly skilled professionals in niche trades. From Tekla Draughtsmen to Welders and General Labourers, we have a proven track record of identifying and placing top talent within the Engineering & Construction sector."
      />
      <BannerHalf title="Meat & Food Processing" slogan="" imgSrc={TradeImage} imgAlt="Building Construction Site" links={[]} />
      <div className="max-w-screen-md mx-auto my-20">
        <p className="my-5">
          {
            "Our skilled Consultants have worked within the construction & trade sector. We are positive that we have everything you need to succeed in your recruitment, whether you're a seasoned professional in the construction sector or starting your construction company we can assist you."
          }
        </p>
        <p className="my-5">Our team have supplied site managers, Builders, Carpenters, Plumbers, Roofers, skilled Labours and many more positions.</p>
        <p className="my-5">Our services and candidates take us all over the UK from daily bookings for a dumper driver to six months project management.</p>
        <p className="my-5">
          At QS we are more than an online platform for our candidates to apply, but also understanding both client and candidate needs and wants ensuring the right person is matched to each client.
        </p>
        <p className="my-5">
          Our onboarding process from client and candidate provides location, skill set required and obtained references from last position, we complete a job spec and person spec to ensure not only
          do we get the right skill set but the right person fits for your company as they represent us both.
        </p>
        <p className="my-5">
          QS encourage a diverse range of genders across all its operations and promote those underrepresented especially within the construction sector as predominantly dominated by male workers. The
          increase in female workers into the construction sector has been rising over the last several years. This promotes a positive diversity which will continue to grow as we see more female
          graduates entering into a niche industry.
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

export default ConstructionAndTrade;
