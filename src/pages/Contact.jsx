import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-yan-krukau-8867434.jpg";
import ContactForm from "../components/ContactForms/Contact";

const Contact = () => {
  return (
    <main>
      <Banner title="Contact Us" slogan="Employer Or Job Seeker Were Here To Help" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" links={[]} />
      <Section bgColor="bg-zinc-950">
        <h2 className="text-3xl text-center mb-10">Need To Get In Touch</h2>
      </Section>
      <Section bgColor="bg-zinc-200">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center text-black mb-10">Register With Us</h2>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
};

export default Contact;
