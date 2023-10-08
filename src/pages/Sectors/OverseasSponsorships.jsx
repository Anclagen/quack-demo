import BannerHalf from "../../components/Banner/BannerHalf";
import Head from "../../components/Head";
import WarehouseImage from "../../assets/pexels-tiger-lily-4487365.jpg";

const OverseasSponsorships = () => {
  return (
    <>
      <Head
        title="Overseas Sponsorships"
        description="Having originated in the Warehouse & Logistics industry, our Group has established a remarkable reputation as a leading recruitment agency. We have successfully recruited for prestigious blue chip companies, high street cosmetic brands, and luxury chocolate manufacturers. With thousands of satisfied workers and clients, we take pride in our ability to match the right candidates with rewarding opportunities in Warehouse & Logistics."
      />
      <BannerHalf title="Warehouse & Logistics" slogan="" imgSrc={WarehouseImage} imgAlt="Workers in a warehouse" links={[]} />
      <div className="max-w-screen-md mx-auto my-20">
        <p className="my-5">
          Over the last 30 years there have been significant changes to the way we recruited and where we could recruit from. The changes when we joined the EU back in the early 70s were significant
          and opened other member states providing freedom of movement between all EU members, whilst countries outside the EU would need to go through various visa processes.
        </p>
        <p className="my-5">
          {
            "During the early period of the 2020's the UK voted to leave the EU and become more independent to make choices this was known as Brexit; where freedom of movement from inside the EU became significantly different with additional immigration control from the UK."
          }
        </p>
        <p className="my-5">
          Relocation to the UK has significantly decreased over the last several years from the EU due to various factors; exchange rates, opportunities within their own country, more local options
          within the EU to name a few. This has had a significant impact on the available workforce in the UK for skilled and non-skilled workforce so where does the solution lie?
        </p>
        <p className="my-5">
          Over the last year we have seen a significant amount of people relocating from outside the EU to the UK for skilled positions by means of sponsorship, this process has allowed SME employers
          to fill those outstanding positions on a 2-5 year visa while providing a stable workforce along side equality and diversity.
        </p>
        <p className="my-5">
          The options of relocating workers from Outside the UK/EU have significant differences including costs and processes. Each Country outside the EU will have slightly different variations, some
          will require an IELTS certificate to prove their level of English at a reasonable standard whilst the UK will allow other countries to supply candidates to the UK if they have a higher level
          of education partly completed in English.
        </p>
        <p className="my-5">
          Relocating potential employees to the UK depends on each companies starting point and can be from 6 weeks to 3 months. The investment required verses productivity and reliability alone has
          significantly changed previous clients supplied and abled to spend time on developing employees rather than replacing overworked but loyal employees.
        </p>
        <p className="my-5">
          If you would like to discuss potential options on relocation of skilled workforce to the UK please contact us for an initial enquiry at{" "}
          <a href="mailto:sales@quackspecialists.co.uk?subject=Overseas%20Sponsorships%20Inquiry" className="text-violet-900 hover:text-violet-600 hover:underline">
            sales@quackspecialists.co.uk
          </a>
        </p>
        <h3 className="text-2xl font-semibold mt-16 mb-6">Related Links</h3>
        <a
          className="text-violet-900 hover:text-violet-600 flex mb-3"
          target="_blank"
          rel="noreferrer"
          href="https://www.gov.uk/government/publications/skilled-worker-visa-shortage-occupations/skilled-worker-visa-shortage-occupations"
        >
          <span className="font-medium leading-6 font-semibold hover:underline">Skilled Worker Shortages</span>
          <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 rounded-full ps-3 !no-underline">
            <span className="material-symbols-outlined">arrow_circle_right</span>
          </span>
        </a>
      </div>
    </>
  );
};

export default OverseasSponsorships;
