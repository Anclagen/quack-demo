import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-andrea-piacquadio-840996.jpg";
const Employers = () => {
  return (
    <>
      <Banner title="Employers" slogan="Partnering Success, Attracting the Right Talent for Your Business" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Our Services</h2>
      </Section>
      <Section bgColor="bg-gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Got A Position To Fill</h2>
      </Section>
    </>
  );
};

export default Employers;
