import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import FadeInSection from "../components/Sections/FadeInSection/FadeInSection";
import { CardWithImageTop, CardWithTitleTop } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner
        title="Quack Specialists Ltd"
        slogan="Your Local Recruitment Specialists"
        imgSrc="/src/assets/pexels-olga-lioncat-7245326.jpg"
        imgAlt="Descriptive Image Alt Text"
        links={[
          { label: "Jobs", path: "/jobs" },
          { label: "Employers", path: "/employers" },
        ]}
      />
      <Section bgColor="black bg-opacity-80">
        <FadeInSection
          title="Who We Are"
          imageSrc="/src/assets/pexels-yan-krukau-8867482.jpg"
          imageAlt="Description"
          text={[
            "Quack Specialists are a dedicated team of expert consultants with specialisms in your sector, as opposed to a typical generic high street generalist recruiter, jack of all trades (master of none!)",
            "We focus on three very specific industries as this has become our niche, these industries are; Meat, Engineering & Construction and Warehouse & Logistics. Our team work collectively in making sure that every step of the process is seamless from on boarding to candidate attrition management.",
          ]}
          linkText="Learn More"
          linkHref="/about"
        />
      </Section>
      <Section bgColor="gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Our Areas of Expertise</h2>
        <CardSection>
          <CardWithTitleTop
            title="Meat Processing Personnel"
            imgSrc="/src/assets/pexels-mark-stebnicki-7163991.jpg"
            imgAlt="Image 1 Description"
            text="We specialize in supplying a diverse range of workers for the Meat Processing industry, catering to roles ranging from Junior Boners and Trimmers to Management positions. With our extensive experience, we ensure the right individuals are placed in roles where they can thrive and find fulfillment, creating a positive experience for everyone involved."
          />
          <CardWithTitleTop
            title="Engineering & Construction"
            imgSrc="/src/assets/pexels-pixabay-159358.jpg"
            imgAlt="Image 1 Description"
            text="Our Engineering & Construction team possesses a wealth of experience in the industry, specializing in recruiting highly skilled professionals in niche trades. From Tekla Draughtsmen to Welders and General Labourers, we have a proven track record of identifying and placing top talent within the Engineering & Construction sector.."
          />
          <CardWithTitleTop
            title="Warehouse & Logistics"
            imgSrc="/src/assets/pexels-tiger-lily-4487365.jpg"
            imgAlt="Image 1 Description"
            text="Having originated in the Warehouse & Logistics industry, our Group has established a remarkable reputation as a leading recruitment agency. We have successfully recruited for prestigious blue chip companies, high street cosmetic brands, and luxury chocolate manufacturers. With thousands of satisfied workers and clients, we take pride in our ability to match the right candidates with rewarding opportunities in Warehouse & Logistics."
          />
          {/* ... more cards */}
        </CardSection>
        <div className="text-center mt-12">
          <Link to="/jobs" className="bg-purple-900 hover:bg-purple-600 hover:text-white text-white py-2 px-4 rounded mx-5 mt-auto">
            View All Jobs
          </Link>
          <Link to="/employers" className="bg-purple-900 hover:bg-purple-600 hover:text-white text-white py-2 px-4 rounded mx-5 mt-auto">
            View All Employers
          </Link>
        </div>
      </Section>
      <Section bgColor="black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Why Choose Us</h2>
      </Section>
      <Section bgColor="gray bg-opacity-10">
        <h2 className="text-3xl text-center mb-10">Testimonials</h2>
      </Section>
      <Section bgColor="black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10">Are Clients</h2>
      </Section>
    </>
  );
};

export default Home;
