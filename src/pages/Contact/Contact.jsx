import Head from "../../components/Head";
import Banner from "../../components/Banner/Banner";
import Section from "../../components/Sections/Section";
import bannerImage from "../../assets/pexels-yan-krukau-8867434.jpg";
import constructionImage from "../../assets/undraw_under_construction_46pa.png";
import ClientForm from "../../components/ContactForms/ClientForm/ClientForm";

const Contact = () => {
  return (
    <main>
      <Head title="Contact" description="Contact Quack Specialists" />
      <Banner title="Contact Us" slogan="Employer Or Job Seeker Were Here To Help" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" links={[]} />
      <Section bgColor="bg-zinc-950">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="px-6 rounded-lg text-white flex-none md:w-1/3">
            <h2 className="text-3xl font-semibold mb-6">Contact Details</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">E-mail</h3>
              <p className="mt-2 text-lg">
                <a href="mailto:sales@quackspecialists.co.uk" className="text-violet-400 hover:underline">
                  sales@quackspecialists.co.uk
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Phone</h3>
              <p className="mt-2 text-lg">+44 333 577 0036</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Legal / Head office</h3>
              <address className="mt-2 text-lg leading-relaxed">
                Quack Specialists,
                <br />
                Eastway Enterprises Centre,
                <br />
                7 Paynes Park,
                <br />
                Hitchin,
                <br />
                England,
                <br />
                SG5 1EH
              </address>
            </div>
          </div>

          <div className="flex-1 md:w-2/3">
            <h2 className="text-3xl text-white font-semibold mb-10 text-center">Serviced Locations & Offices</h2>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Jt4IhkKUr8cE6T5kf97Rs3f8TqFwoMA&ehbc=2E312F&noprof=1" className="w-full" height={"500px"}></iframe>
          </div>
        </div>
      </Section>
      <Section bgColor="bg-gray bg-opacity-10 text-center">
        <h2 className="text-3xl mb-10">Got A Position To Fill</h2>
        <ClientForm />
        {/* <div className="p-3 mx-auto max-w-2xl text-lg">
          <p className="my-5">This site is currently under construction. Contact form coming soon!</p>
          <p>
            If you need to get in touch send a mail to{" "}
            <a href="mailto:sales@quackspecialists.co.uk" className="text-violet-900 hover:underline">
              sales@quackspecialists.co.uk
            </a>
            .
          </p>
          <img src={constructionImage} alt="under construction" className="" />
        </div> */}
      </Section>
    </main>
  );
};

export default Contact;
