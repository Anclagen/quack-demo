import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import FadeInSection from "../components/Sections/FadeInSection/FadeInSection";
import { CardWithImageTop, CardWithTitleTop, CardMinimalIconTop, TestimonialCard } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import { Link } from "react-router-dom";
import bannerImage from "../assets/pexels-olga-lioncat-7245326.jpg";
import fadeinImage from "../assets/pexels-yan-krukau-8867482.jpg";
import meatImage from "../assets/pexels-mark-stebnicki-7163991.jpg";
import engineeringImage from "../assets/pexels-pixabay-159358.jpg";
import warehouseImage from "../assets/pexels-tiger-lily-4487365.jpg";
import avatarImage from "../assets/pexels-andrea-piacquadio-3778603.jpg";

const Home = () => {
  return (
    <main>
      <Banner
        title="Quack Specialists Ltd"
        slogan="Your Local Recruitment Specialists"
        imgSrc={bannerImage}
        imgAlt="Descriptive Image Alt Text"
        links={[
          { label: "Jobs", path: "/jobs" },
          { label: "Employers", path: "/employers" },
        ]}
      />
      <Section bgColor="bg-zinc-950 text-white">
        <FadeInSection
          title="Who We Are"
          imageSrc={fadeinImage}
          imageAlt="Description"
          text={[
            "Quack Specialists are a dedicated team of expert consultants with specialisms in your sector, as opposed to a typical generic high street generalist recruiter, jack of all trades (master of none!)",
            "We focus on three very specific industries as this has become our niche, these industries are; Meat, Engineering & Construction and Warehouse & Logistics. Our team work collectively in making sure that every step of the process is seamless from on boarding to candidate attrition management.",
          ]}
          linkText="Learn More"
          linkHref="/about"
        />
      </Section>
      <Section bgColor="bg-zinc-200">
        <h2 className="text-3xl text-center mb-10 text-black font-semibold">Our Areas of Expertise</h2>
        <CardSection>
          <CardWithTitleTop
            title="Meat Processing Personnel"
            imgSrc={meatImage}
            imgAlt="Image 1 Description"
            text="We specialize in supplying a diverse range of workers for the Meat Processing industry, catering to roles ranging from Junior Boners and Trimmers to Management positions. With our extensive experience, we ensure the right individuals are placed in roles where they can thrive and find fulfillment, creating a positive experience for everyone involved."
          />
          <CardWithTitleTop
            title="Engineering & Construction"
            imgSrc={engineeringImage}
            imgAlt="Image 1 Description"
            text="Our Engineering & Construction team possesses a wealth of experience in the industry, specializing in recruiting highly skilled professionals in niche trades. From Tekla Draughtsmen to Welders and General Labourers, we have a proven track record of identifying and placing top talent within the Engineering & Construction sector.."
          />
          <CardWithTitleTop
            title="Warehouse & Logistics"
            imgSrc={warehouseImage}
            imgAlt="Image 1 Description"
            text="Having originated in the Warehouse & Logistics industry, our Group has established a remarkable reputation as a leading recruitment agency. We have successfully recruited for prestigious blue chip companies, high street cosmetic brands, and luxury chocolate manufacturers. With thousands of satisfied workers and clients, we take pride in our ability to match the right candidates with rewarding opportunities in Warehouse & Logistics."
          />
          {/* ... more cards */}
        </CardSection>
        <div className="text-center mt-12">
          <Link to="/jobs" className="bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded mx-5 mt-auto">
            View All Jobs
          </Link>
          <Link to="/employers" className="bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded mx-5 mt-auto">
            View All Employers
          </Link>
        </div>
      </Section>
      <Section bgColor="bg-zinc-950 text-white">
        <h2 className="text-3xl text-center mb-10 font-semibold">Why Choose Us</h2>
        <CardSection>
          <CardMinimalIconTop
            title="Over 50 Years Combined Experience"
            icon="groups"
            color="text-violet-900 text-8xl"
            textColor="text-white"
            text="You can rest assured that your in capable hands as we have a team of consultants and support staff to make sure you have a seamless experience from the start. Our job is to make sure you love your job!"
          />
          <CardMinimalIconTop
            title="24/7 Reliable Service"
            icon="verified_user"
            color="text-green-900 text-8xl"
            textColor="text-white"
            text="We strongly believe that we should offer a service that fits around your needs whether that be as a customer or as a candidate, our customer service representatives are there to answer any of your queries at a time that suits you."
          />
          <CardMinimalIconTop
            title="Tailored Employment Services"
            icon="business_center"
            color="text-blue-900 text-8xl"
            textColor="text-white"
            text="Quack Specialists offer customized employment services for your sector, including permanent, contract, and temporary recruitment. Our dedicated team also provides SMS solutions through our group of companies, with an experienced team dedicated to just this."
          />
        </CardSection>
      </Section>
      <Section bgColor="bg-zinc-200">
        <h2 className="text-3xl text-center mb-10 font-semibold text-black">Testimonials</h2>
        <CardSection>
          <TestimonialCard
            userImage={avatarImage}
            testimonialText="Working with Quack Specialists was an enlightening experience. They took the time to understand our company culture and delivered candidates that were not only skilled but also aligned with our values. Their thorough approach ensured we found the right fit every time."
            userName="Sarah Mitchell"
            userPosition="HR Manager, TechSolutions Inc."
          />
          <TestimonialCard
            userImage={avatarImage}
            testimonialText="I've partnered with many recruitment agencies over the years, but the professionalism and precision of Quack Specialists stand out. They consistently matched us with top-tier talent, saving us countless hours in the hiring process."
            userName="David Alvarez"
            userPosition="COO, Innovate Enterprises"
          />
          <TestimonialCard
            userImage={avatarImage}
            testimonialText="The team at Quack Specialists are truly recruitment experts. Their insights into the job market and understanding of our industry ensured that we got candidates who were ready to hit the ground running. A truly commendable service!"
            userName="Maya Lindstrom"
            userPosition="Director of Talent Acquisition, Nexus Group"
          />
        </CardSection>
      </Section>
      {/* <Section bgColor="bg-zinc-950">
        <h2 className="text-3xl text-center mb-10 font-semibold">Are Clients</h2>
      </Section> */}
    </main>
  );
};

export default Home;
