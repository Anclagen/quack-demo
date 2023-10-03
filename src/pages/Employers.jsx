import BannerHome from "../components/Banner/BannerHome";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-andrea-piacquadio-840996.jpg";
import { CardWithTitleTop } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import permenantImage from "../assets/pexels-edmond-dantès-4344878.jpg";
import contractImage from "../assets/pexels-matthias-zomer-618158.jpg";
import warehouseImage from "../assets/pexels-tiger-lily-4487365.jpg";
import Head from "../components/Head";
import CTASection from "../components/Sections/CTASection/CTASection";
import hardHatImage from "../assets/hardhat.png";

const Employers = () => {
  return (
    <>
      <Head title="Employers" description="Partnering Success, Attracting the Right Talent for Your Business" />
      <BannerHome title="Employers" slogan="Partnering Success, Attracting the Right Talent for Your Business" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
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
            title="Contract and SE"
            imgSrc={contractImage}
            imgAlt="Signing a contract."
            text="Whilst QS can offer various options of employment PAYE- Contract – SE there are things we need to consider ensuring our workers are as enthusiastic on day 720 as they were on day 1"
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
      <Section bgColor="bg-zinc-200">
        <CTASection
          titleBlack="Got a position to fill ?"
          titlePurple="Get the skilled staff you need."
          text="QS Recruitment ensures you get the talent you require. We manage all aspects, granting you peace of mind that your roles are expertly filled."
          linkText="Enquire Today"
          linkHref="/register-employer"
          image={hardHatImage}
        />
      </Section>
    </>
  );
};

export default Employers;
