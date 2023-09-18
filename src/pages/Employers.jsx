import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-andrea-piacquadio-840996.jpg";
import { CardWithTitleTop } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import permenantImage from "../assets/pexels-edmond-dantès-4344878.jpg";
import contractImage from "../assets/pexels-matthias-zomer-618158.jpg";
import warehouseImage from "../assets/pexels-tiger-lily-4487365.jpg";
import constructionImage from "../assets/undraw_under_construction_46pa.png";
import Head from "../components/Head";

const Employers = () => {
  return (
    <>
      <Head title="Employers" description="Partnering Success, Attracting the Right Talent for Your Business" />
      <Banner title="Employers" slogan="Partnering Success, Attracting the Right Talent for Your Business" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-zinc-950">
        <h2 className="text-3xl text-center mb-10 text-white font-semibold">Our Services</h2>
        <CardSection>
          <CardWithTitleTop
            title="Permanent Recruitment"
            imgSrc={permenantImage}
            imgAlt="Persons siting at a table."
            text="Regardless of where on the 'ladder' your role falls, trainee right though to Senior Management you can rest assured you are in the best possible hands when it comes to finding your next permanent role, you will get that real family feel whatever the stage, whether that be initial interview nerves or check ins once you've got your feet well and truly under the table."
          />
          <CardWithTitleTop
            title="Contract"
            imgSrc={contractImage}
            imgAlt="Signing a contract."
            text="Given the nature of Quack Specialists, we tend to find most of our custom comes from Contract work - we know where our strengths lie and its in making sure our long term Contractors are still as enthusiastic on day as they are on day 720, as without them we wouldn't have a job!"
          />
          <CardWithTitleTop
            title="Temporary"
            imgSrc={warehouseImage}
            imgAlt="Image 1 Description"
            text="Quack Specialists are ideally positioned to address immediate surges in work loads. These can occur at any point, from unexpected departures, short-term surges required in productivity, to new projects coming in and specific skill sets being required. With a variety of solutions, let Quack Recruitment take the headache out of hiring temporary staff for you."
          />
          {/* ... more cards */}
        </CardSection>
      </Section>
      <Section bgColor="bg-gray bg-opacity-10 text-center">
        <h2 className="text-3xl mb-10">Got A Position To Fill</h2>
        <div className="p-3 mx-auto max-w-2xl text-lg">
          <p className="my-5">This site is currently under construction. Contact form coming soon!</p>
          <p>
            If you need to get in touch send a mail to{" "}
            <a href="mailto:sales@quackspecialists.co.uk" className="text-violet-900">
              sales@quackspecialists.co.uk
            </a>
            .
          </p>
          <img src={constructionImage} alt="under construction" className="" />
        </div>
      </Section>
    </>
  );
};

export default Employers;
