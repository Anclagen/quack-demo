import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
const Jobs = () => {
  return (
    <>
      <Banner title="Jobs" slogan="Discover Your Next Opportunity, Let's Shape Your Career Path" imgSrc="/src/assets/pexels-edmond-dantès-4344878.jpg" imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="black bg-opacity-80">
        <h2>Our Listings</h2>
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
