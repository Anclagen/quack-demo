import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-olga-lioncat-7245326.jpg";

const About = () => {
  return (
    <>
      <Banner title="About" slogan="A Dedicated & Experienced Team Of Experts" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Who Are We</h2>
      </Section>
      <Section bgColor="bg-gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Meet The Team</h2>
      </Section>
    </>
  );
};

export default About;
