import BannerHome from "../components/Banner/BannerHome";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-olga-lioncat-7245326.jpg";
import TwoColSection from "../components/Sections/StandardSection/twoColSection";
import FadeInSection from "../components/Sections/FadeInSection/FadeInSection";
import fadeinImage from "../assets/pexels-yan-krukau-8867482.jpg";
import uglyMugImage from "../assets/pexels-andrea-piacquadio-3778603.jpg";
import CardSection from "../components/Sections/CardSection/CardSection";
import { CardWithLargerImageTop, ProfileCard } from "../components/Card/Card";
import Head from "../components/Head";
import JamieImage from "../assets/jamie-croall.jpg";
import LeeImage from "../assets/lee-inskip.jpg";

const About = () => {
  return (
    <>
      <Head title="About" description="A Dedicated & Experienced Team Of Experts" />
      <BannerHome title="About" slogan="A Dedicated & Experienced Team Of Experts" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-zinc-950 text-white">
        <FadeInSection
          title="Who We Are"
          imageSrc={fadeinImage}
          imageAlt="Description"
          text={[
            "Quack Specialists Recruitment are an independently owned niche agency, operating throughout the Midlands, Home Counties, the North, Scotland, Wales, and the South West.",
            "We focus on five industries that meet the skillset of our team. These industries are: Engineering, Construction & Trade, Warehousing and Logistics, Meat & Food Processing, Overseas Sponsorships.",
            "All of the candidates who register with us are treated as individuals, each with their own unique requirements and goals that we help them to fulfill.We provide comprehensive feedback to each candidate for any applications they make, so you are never left in the lurch.",
            "For our clients our team work collectively to ensure that every step of the process is seamless from on boarding to candidate attrition management.",
            "Each client has a dedicated Account Manager who looks after the field their clients operate within, and allows a rapport to be developed, as well as a consistent experience!",
            "We are a GLAA License holder and our insurance levels are setup to support our clients needs as follows:",
            "Public Liability - £10m",
            "Employers' Liability - £10m",
            "Professional Indemnity - £10m",
            "To find out if we can help, get in touch with us today.",
          ]}
          linkText="Get In Touch"
          linkHref="/contact"
          reverse={false}
          dark={true}
        />
      </Section>
      <Section bgColor="bg-zinc-200">
        <FadeInSection
          title="Meet The Team"
          imageSrc={fadeinImage}
          imageAlt="Description"
          text={[
            "At Quack Specialists Ltd, the backbone of our operations rests with our Senior Team. These dedicated professionals are often the driving force, working diligently behind the scenes, ensuring the seamless functioning of our business. Their responsibilities don't just end at overseeing daily operations. They're also proactive in addressing any queries, concerns, or challenges that arise, guaranteeing that our partners, clients, and candidates receive top-notch service at all times. ",
            "We believe in transparency and fostering trust, so we invite you to 'virtually meet' and get acquainted with some of the key members of our Senior Team below. Get to know the minds and faces that are committed to your success!",
          ]}
          reverse={true}
        />
        <h3 className="text-2xl font-semibold text-center mt-16 mb-10">Leadership Team</h3>
        <p className="mb-32 text-xl font-normal text-center text-gray-500 max-w-screen-lg px-10 mx-auto">
          We have selected our team not only based on industry knowledge but based on passion for success and wanting to go that extra mile to develop themselves, our clients & candidates.
        </p>
        <CardSection>
          <ProfileCard
            userImage={LeeImage}
            userName="Lee Inskip"
            userPosition="Chief Operations Officer"
            userDescription="Lee trained as a butcher in the '80s and worked in the hospitality trade before moving into recruitment. He has managed sites with up to 1200 workers across multiple locations, specializing in sectors like Industrial, Grounds Maintenance, Engineering, and Construction. Boasting a wealth of sector experience even before the recruitment industry gained its prominence, is deeply involved in the day-to-day operations of the business. With a background in operational roles at top global recruitment agencies, Lee effortlessly liaises with clients. His expertise ensures that our consultants are always aligned with client needs, facilitating successful placements."
            linkedin={"https://www.linkedin.com/in/lee-inskip-4b80bb59/"}
          />
          <ProfileCard
            userImage={JamieImage}
            userName="Jamie Croall"
            userPosition="Chief Financial Officer"
            userDescription="Jamie plays a pivotal role in the meticulous planning and management of our financial affairs, encompassing everything from ledgers and forecasts to projections. He leads a dedicated team focused on the critical aspects of our financial operations. This includes ensuring timely payments from our customers, settling accounts with our suppliers punctually, and most importantly, guaranteeing that our workers receive accurate and timely compensation."
            linkedin={"https://www.linkedin.com/in/jamie-croall-92459987/"}
          />
          {/* <ProfileCard
            userImage={uglyMugImage}
            userName="Carl Underwood"
            userPosition="Recruitment Consultant"
            userDescription="Carl worked in the Finance and Foreign Currency industry for 18 years before transitioning to recruitment. He has been specializing in industrial positions for the past 2 years, leveraging his extensive experience in the finance sector to provide top-notch recruitment services."
            linkedin={"#"}
            facebook={"#"}
          /> */}
        </CardSection>
      </Section>
    </>
  );
};

export default About;
