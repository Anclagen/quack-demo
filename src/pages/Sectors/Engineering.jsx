import BannerHalf from "../../components/Banner/BannerHalf";
import Head from "../../components/Head";
import ConstructionImage from "../../assets/pexels-pixabay-159358.jpg";
import { Link } from "react-router-dom";

const Engineering = () => {
  return (
    <>
      <Head title="Meat & Food Processing" description="TBD" />
      <BannerHalf title="Meat & Food Processing" slogan="" imgSrc={ConstructionImage} imgAlt="Building Construction Site" links={[]} />
      <div className="max-w-screen-md mx-auto my-20">
        <p className="my-5">
          At QS Specialist Recruitment we have a diverse clients base in the Engineering sector looking for Mechanical, Electrical Engineers, Planning Co-ordinators, Laboratory Engineers, and
          Graduates with 1 -3 years who have taken their first steps into this diverse sector. Our clients work within some of the following fields but not limited to: Aerospace, development,
          Utilities, and the public and private sector.
        </p>
        <p className="my-5">
          As the skills shortage increases significantly faster in this sector potential clients are reaching out more to the private sector to support recruitment needs; A lot of focus within this
          sector is on retention and retraining and Graduate schemes.
        </p>
        <p className="my-5">
          {
            "Graduates from colleges and working professionals in the STEM fields are the first to suffer from a talent shortage. Although STEM training affects many different industries, it poses a serious challenge for semiconductor and equipment manufacturers. While a company's regular operations won't be affected by a scarcity of STEM professionals, they may find it more difficult to recruit critical positions, replace an ageing workforce, and create new products and technology. Long-term, it may slow the rate of industry growth and have an effect on the competitiveness of whole nations or regions."
          }
        </p>
        <p className="my-5">
          The lack of skill is not a recent occurrence. The IC sector has always struggled with a lack of different engineering types, but as businesses ramps up employment is getting worse. Staff and
          talent shortages overtook privacy/regulation and rate of change as the top risk issue enterprises face globally, according to a new Gartner report. According to the report, a lack of talent
          is a problem in many industries, including Engineering.
        </p>
        <p className="my-5">
          The semiconductor sector is experiencing similar problems. A recent survey found that 82% of executives felt there was a lack of competent technical job candidates. According to the survey,
          60% of businesses claim that it is hardest to fill positions in electrical engineering, which is followed by those in computer sciences/software engineering (35%), mechanical engineering
          (35%), computer systems/engineering (30%), and materials sciences/chemical engineering (30%).
        </p>
        <p className="my-5">
          {
            "An increase in automation and new technology is aggravating the shortages. For instance, machine learning demands novel talents, yet there aren't many professionals in this field. Additionally, as manufacturing becomes more automated, businesses will either need to retrain their workforce or replace them."
          }
        </p>
        <p className="my-5">
          {
            "This is a challenging topic with many facets, but it's unquestionably important, there were 10,000 job opportunities in the semiconductor business last year that couldn't be filled quickly enough."
          }
        </p>
        <p className="my-5">
          The shortage has a number of causes. The phenomenal expansion of well-known consumer-facing corporations like Facebook, Amazon, Google, and Netflix, according to Manocha, has contributed to
          the decline in education enrolment and the rise in demand for highly trained IT workers. These businesses have attracted the interest of college and high school students and diverted focus
          from the semiconductor industry.
        </p>
        <h3 className="text-2xl font-semibold mt-16 mb-10">Competing for Talent</h3>
        <p className="my-5">
          But the work is getting increasingly difficult and specialised. At each node, chip scaling becomes more challenging and expensive. At the same time, new chip architectures and increased
          dependability are needed for 5G, AI, and driverless vehicles.
        </p>
        <p className="my-5">
          The UK Brexit ended a free movement from Europe and is now sourcing from outside this area and has been a success partly due to the trainability and lack in language barrier required to
          obtain a skilled working visa, this also allows each business to continue to grow with a diverse work force and mixed skill base.
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

export default Engineering;
