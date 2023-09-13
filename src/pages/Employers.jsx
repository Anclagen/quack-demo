import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
const Employers = () => {
  return (
    <>
      <Banner
        title="Employers"
        slogan="Partnering Success, Attracting the Right Talent for Your Business"
        imgSrc="//public/assets/pexels-andrea-piacquadio-840996.jpg"
        imgAlt="Descriptive Image Alt Text"
      />
      <Section bgColor="black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Our Services</h2>
      </Section>
      <Section bgColor="gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Got A Position To Fill</h2>
      </Section>
    </>
  );
};

export default Employers;
