import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-yan-krukau-8867434.jpg";

const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" slogan="Employer Or Job Seeker Were Here To Help" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" links={[]} />
      <Section bgColor="black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Need To Get In Touch</h2>
      </Section>
      <Section bgColor="gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Register With Us</h2>
      </Section>
    </>
  );
};

export default Contact;
