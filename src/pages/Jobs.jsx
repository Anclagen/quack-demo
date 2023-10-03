import Banner from "../components/Banner/Banner";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-edmond-dantès-4344878.jpg";
import Head from "../components/Head";

const Jobs = () => {
  return (
    <>
      <Head title="Jobs" description="Discover Your Next Opportunity, Let's Shape Your Career Path" />
      <Banner title="Jobs" slogan="Discover Your Next Opportunity, Let's Shape Your Career Path" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-zinc-200">
        <h2 className="text-3xl text-center mb-10 font-semibold">Our Listings</h2>

        <p className="mx-auto max-w-screen-md text-lg my-5 flex">
          <span className="inline-block">Check out are current listings on</span>
          <a
            href="https://www.cv-library.co.uk/list-jobs/309161/Quack-Recruitment#profile-list-jobs"
            target="_blank"
            rel="noreferrer"
            className="flex text-violet-900 hover:text-violet-600 inline-block w-fit ps-1"
          >
            <span className=" hover:underline inline-block">CV Library </span>
            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full ps-3 !no-underline">
              <span className="material-symbols-outlined">arrow_circle_right</span>
            </span>
          </a>
        </p>
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
