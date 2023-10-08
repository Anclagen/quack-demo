import BannerHome from "../components/Banner/BannerHome";
import Section from "../components/Sections/Section";
import bannerImage from "../assets/pexels-andrea-piacquadio-840996.jpg";
import { CardWithTitleTop } from "../components/Card/Card";
import CardSection from "../components/Sections/CardSection/CardSection";
import FadeInSection from "../components/Sections/FadeInSection/FadeInSection";
import permenantImage from "../assets/pexels-edmond-dantès-4344878.jpg";
import contractImage from "../assets/pexels-karolina-grabowska-5387261.jpg";
import warehouseImage from "../assets/pexels-tiger-lily-4480796.jpg";
import Head from "../components/Head";
import CTASection from "../components/Sections/CTASection/CTASection";
import hardHatImage from "../assets/hardhat.png";
import FourImageStretch from "../components/Sections/FourImageFeature/FourImageStretch";
import image2 from "../assets/pexels-edmond-dantès-4343030.jpg";
import image3 from "../assets/pexels-edmond-dantès-4344860.jpg";
import image4 from "../assets/pexels-pavel-danilyuk-8112196.jpg";

const Employers = () => {
  return (
    <>
      <Head title="Employers" description="Partnering Success, Attracting the Right Talent for Your Business" />
      <BannerHome title="Employers" slogan="Partnering Success, Attracting the Right Talent for Your Business" imgSrc={bannerImage} imgAlt="Descriptive Image Alt Text" />
      <Section bgColor="bg-zinc-950">
        <FadeInSection
          title="Temporary"
          imageSrc={warehouseImage}
          imgAlt="Image 1 Description"
          text={[
            "Quack Specialists are ideally positioned to address immediate surges in work loads. These can occur at any point, from unexpected departures, short-term surges required in productivity, to new projects coming in and specific skill sets being required. With a variety of solutions, let Quack Recruitment take the headache out of hiring temporary staff for you.",
          ]}
          dark={true}
          reverse={true}
        />
      </Section>
      <Section bgColor="bg-zinc-200">
        <FourImageStretch title="Contract and SE" images={[contractImage, image2, image3, image4]} dark={true}>
          <div className="text-gray-700 px-6 lg:p-0">
            <p className="mt-4 text-lg leading-6">
              To maintain the enthusiasm and commitment of our workers from their first day to day 720 and beyond, it's crucial to address several factors irrespective of their employment model:
            </p>
            <ul className="mt-1 ms-4 list-disc">
              <li className="">Contracted Work: Ensure clear terms and conditions, regular reviews, and opportunities for growth to keep employees engaged and informed.</li>
              <li className="">PAYE (Pay As You Earn): It's essential to uphold pay parity to ensure that employees feel valued and treated fairly in comparison with their peers.</li>
              <li className="">
                Self-Employed (SE): For those who are self-employed, having evidence of a UTR (Unique Tax Reference) is vital for tax and legitimacy purposes. It also reassures the workers and clients
                that their financial and contractual matters are handled professionally
              </li>
            </ul>
            <p className="mt-4 text-lg leading-6">
              As QS deliver each of the options to current workers and clients, we need to ensure that the method of engagement is the correct one, considering the following:
            </p>
            <ul className="mt-1 ms-4 list-disc">
              <li className="">Inside or outside IR35</li>
              <li className="">Current methods of employment / contracts on site</li>
              <li className="">Length of contract</li>
              <li className="">Responsibility for HMRC deductions</li>
            </ul>
            <p className="mt-4 text-lg leading-6">
              Those employees engaged on a PAYE or Contracted are paid weekly in line with KID Document directly into their own bank account removing an element of control from a third party. Self
              Employed (SE) workers are paid upon receipt of invoice and confirmation of hours worked by our client, all workers who are SE basis have been vetted and in receipt of their UTR number
              prior to engagement with our clients as this removes any legal implications to any unpaid personal Tax as the end user."
            </p>
          </div>
        </FourImageStretch>
      </Section>
      <Section bgColor="bg-zinc-950">
        <FadeInSection
          title="Permanent Recruitment"
          imageSrc={permenantImage}
          imgAlt="Persons siting at a table."
          text={[
            "Regardless of where on the 'ladder' your role falls, trainee right though to Senior Management you can rest assured you are in the best possible hands when it comes to finding your next permanent role, you will get that real family feel whatever the stage, whether that be initial interview nerves or check ins once you've got your feet well and truly under the table.",
          ]}
          dark={true}
          reverse={true}
        />
      </Section>
      <Section bgColor="bg-zinc-200">
        <CTASection
          titleBlack="Got a position to fill ?"
          titlePurple="Get the skilled staff you need."
          text="QS Recruitment ensures you get the talent you require. We manage all aspects, granting you peace of mind that your roles are expertly filled."
          linkText="Enquire Today"
          linkHref="/register-employer"
          image={hardHatImage}
        />
      </Section>
    </>
  );
};

export default Employers;
