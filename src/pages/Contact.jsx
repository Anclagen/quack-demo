import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-yan-krukau-8867434.jpg";
import RecruitmentForm from "../components/ContactForms/RecruitmentForm/RecruitmentForm";

const Contact = () => {
  return (
    <main>
      <Banner title="Contact Us" slogan="Employer Or Job Seeker Were Here To Help" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" links={[]} />
      <Section bgColor="bg-zinc-950">
        <h2 className="text-3xl text-center mb-10">Need To Get In Touch</h2>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Jt4IhkKUr8cE6T5kf97Rs3f8TqFwoMA&ehbc=2E312F&noprof=1" className="w-full h-80vh "></iframe>
      </Section>
      <Section bgColor="bg-zinc-200">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl text-center text-black mb-10">Register With Us</h2>
          <RecruitmentForm />
        </div>
      </Section>
    </main>
  );
};

export default Contact;
