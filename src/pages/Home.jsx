import BannerHome from "../components/Banner/BannerHome";
import Section from "../components/Sections/Section";
import FadeInSection from "../components/Sections/FadeInSection/FadeInSection";
import { CardMinimalIconTop, TestimonialCard } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import { Link } from "react-router-dom";
import bannerImage from "../assets/pexels-olga-lioncat-7245326.jpg";
import fadeinImage from "../assets/pexels-yan-krukau-8867482.jpg";
import avatarImage from "../assets/pexels-andrea-piacquadio-3778603.jpg";
import Head from "../components/Head";
import { keywords } from "../components/data/keywords";
import { whyChooseUs } from "../components/data/home-data";
import { sectors } from "../components/data/sectors";
import FourImageFeature from "../components/Sections/FourImageFeature/FourImageFeature";

const Home = () => {
  return (
    <>
      <div className="hidden bg-teal-900 bg-gray-900 bg-sky-900 bg-indigo-900 bg-red-900 bg-blue-900 bg-green-900 bg-sky-400 text-teal-900 text-gray-900 text-sky-900 text-indigo-900 text-red-900 text-blue-900 text-green-900 text-sky-400"></div>
      <Head title="Home" description="Welcome to Quack Specialists, your local recruitment specialist." keywords={keywords} />
      <main>
        {/* <BannerHome
          title="QS Recruitment"
          slogan="Specialists part of the Quack Group"
          imgSrc="https://media.istockphoto.com/id/1394879058/photo/global-business-structure-of-networking-analysis-and-data-exchange-customer-connection-hr.webp?s=2048x2048&w=is&k=20&c=_UscHKBjyS6KoFPPUFGBa7CwqrrGFDPUoLYnzJ0dN34="
          imgAlt="Descriptive Image Alt Text"
          links={[
            { label: "For Job Seekers", path: "/jobs", color: "violet" },
            { label: "For Employers", path: "/employers", color: "violet" },
          ]}
        /> */}
        <BannerHome
          title="QS Recruitment"
          slogan="Specialists part of the Quack Group"
          imgSrc={bannerImage}
          imgAlt="Descriptive Image Alt Text"
          links={[
            { label: "For Job Seekers", path: "/jobs", color: "violet" },
            { label: "For Employers", path: "/employers", color: "violet" },
          ]}
        />
        <Section bgColor="bg-zinc-200">
          <FourImageFeature
            title="Our Sectors"
            details="QS Recruiters specializes in staffing solutions for Meat & Food Processing, Engineering & Construction, and Warehousing & Logistics sectors. With our rich experience, we expertly match candidates from entry to management levels across various specialized fields. Having originated in the Warehousing & Logistics sector, we've established a stellar reputation, recruiting for prestigious brands and ensuring rewarding partnerships between clients and candidates through our specialized recruitment approach."
            linkDetails={sectors}
          />
        </Section>
        <Section bgColor="bg-zinc-950 text-white">
          <h2 className="text-3xl text-center mb-10 font-semibold">Why Choose QS Recruitment?</h2>
          <CardSection>
            <CardMinimalIconTop title={whyChooseUs[0].title} icon={whyChooseUs[0].icon.name} color={`text-${whyChooseUs[0].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[0].text} />
            <CardMinimalIconTop title={whyChooseUs[1].title} icon={whyChooseUs[1].icon.name} color={`text-${whyChooseUs[1].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[1].text} />
            <CardMinimalIconTop title={whyChooseUs[2].title} icon={whyChooseUs[2].icon.name} color={`text-${whyChooseUs[2].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[2].text} />
            <CardMinimalIconTop title={whyChooseUs[3].title} icon={whyChooseUs[3].icon.name} color={`text-${whyChooseUs[3].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[3].text} />
            <CardMinimalIconTop title={whyChooseUs[4].title} icon={whyChooseUs[4].icon.name} color={`text-${whyChooseUs[4].icon.color} text-8xl`} textColor="text-white" text={whyChooseUs[4].text} />
          </CardSection>
          <div className="text-center mt-10">
            <Link to="/employers" className="bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded mx-5 mt-auto">
              Our Services
            </Link>
          </div>
        </Section>
        <Section bgColor="bg-zinc-200 text-black">
          <FadeInSection
            title="Who We Are"
            imageSrc={fadeinImage}
            imageAlt="Description"
            text={[
              "Quack Specialists are a dedicated team of expert consultants with specialisms in your sector, as opposed to a typical generic high street generalist recruiter, jack of all trades (master of none!)",
              "We focus on three very specific industries as this has become our niche, these industries are; Meat, Engineering & Construction and Warehouse & Logistics. Our team work collectively in making sure that every step of the process is seamless from on boarding to candidate attrition management.",
            ]}
            linkText="Learn About Us"
            linkHref="/about"
          />
        </Section>
        <Section bgColor="bg-zinc-950 text-white">
          <h2 className="text-3xl text-center mb-10 font-semibold">What Our Clients Say</h2>
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
      </main>
    </>
  );
};

export default Home;
