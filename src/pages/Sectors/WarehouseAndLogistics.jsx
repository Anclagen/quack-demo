import BannerHalf from "../../components/Banner/BannerHalf";
import Head from "../../components/Head";
import WarehouseImage from "../../assets/pexels-tiger-lily-4487365.jpg";
import { Link } from "react-router-dom";

const WarehouseAndLogistics = () => {
  return (
    <>
      <Head
        title="Warehouse & Logistics"
        description="Having originated in the Warehouse & Logistics industry, our Group has established a remarkable reputation as a leading recruitment agency. We have successfully recruited for prestigious blue chip companies, high street cosmetic brands, and luxury chocolate manufacturers. With thousands of satisfied workers and clients, we take pride in our ability to match the right candidates with rewarding opportunities in Warehouse & Logistics."
      />
      <BannerHalf title="Warehouse & Logistics" slogan="" imgSrc={WarehouseImage} imgAlt="Workers in a warehouse" links={[]} />
      <div className="max-w-screen-md mx-auto my-20">
        <p className="my-5">
          {
            "Our team at QS Specialist Recruitment have delivered recruitment solutions for clients in the warehouse sector with over 30 years’ experience. QS has delivered bespoke recruitment intake programs to ensure our clients products are picked and despatched 100% accurately to ensure an excellent shopping experience is received by its customers."
          }
        </p>
        <p className="my-5">
          QS have placed workers to support picking and packing including MHE workers into this sector; along with VNA, Bendi, Reach, CB, Llop and high pick voice delivery systems.
        </p>
        <p className="my-5">
          Recruiting the right candidate is paramount and we believe the personal touch in speaking to each candidate via video link, or in person to ensure we are happy to represent them and put our
          reputation in your organisation.
        </p>
        <p className="my-5">
          QS works with clients that have all year-round requirements with the seasonal peak and clients that join our portfolio for the festive period. If you need the support from 5 to 100 workers,
          we have the experience and the ability to react quickly to your needs.
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

export default WarehouseAndLogistics;
