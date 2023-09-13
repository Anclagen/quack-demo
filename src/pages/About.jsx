import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";

const About = () => {
  return (
    <>
      <Banner title="About" slogan="A Dedicated & Experienced Team Of Experts" imgSrc="//public/assets/pexels-olga-lioncat-7245326.jpg" imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Who Are We</h2>
      </Section>
      <Section bgColor="gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Meet The Team</h2>
      </Section>
    </>
  );
};

export default About;
