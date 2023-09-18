import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-edmond-dantès-4344878.jpg";
import Head from "../components/Head";

const Jobs = () => {
  return (
    <>
      <Head title="Jobs" description="Discover Your Next Opportunity, Let's Shape Your Career Path" />
      <Banner title="Jobs" slogan="Discover Your Next Opportunity, Let's Shape Your Career Path" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-black bg-opacity-80">
        <h2 className="text-3xl text-center mb-10 text-white font-semibold">Our Listings</h2>
        <div className="relative h-screen max-w-3xl mx-auto">
          <iframe
            src="https://www.cv-library.co.uk/cgi-bin/yourjobs.cgi?agency=309161"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              height: "100%",
              width: "100%",
              border: "none",
            }}
            title="Full Page Iframe"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default Jobs;
