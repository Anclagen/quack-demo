import Banner from "../../components/Banner/Banner";
import Section from "../../components/Sections/Section";
import bannerImage from "../../assets/pexels-yan-krukau-8867434.jpg";
import constructionImage from "../../assets/undraw_under_construction_46pa.png";

const Contact = () => {
  return (
    <main>
      <Banner title="Contact Us" slogan="Employer Or Job Seeker Were Here To Help" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" links={[]} />
      <Section bgColor="bg-zinc-950">
        <h2 className="text-3xl text-center mb-10">Need To Get In Touch</h2>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Jt4IhkKUr8cE6T5kf97Rs3f8TqFwoMA&ehbc=2E312F&noprof=1" className="w-full h-80vh "></iframe>
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
    </main>
  );
};

export default Contact;
