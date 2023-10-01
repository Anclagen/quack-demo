import ConstructionImage from "../../assets/pexels-pixabay-159358.jpg";
import WarehouseImage from "../../assets/pexels-tiger-lily-4487365.jpg";
import MeatImage from "../../assets/pexels-mark-stebnicki-7163991.jpg";
import TradeImage from "../../assets/pexels-movidagrafica-barcelona-1474993.jpg";

export const sectors = [
  {
    id: 0,
    name: "Meat & Food Processing",
    slug: "meat-food-processing",
    color: "text-red-700",
    imageSrc: MeatImage,
    summary:
      "We specialize in supplying a diverse range of workers for the Meat Processing industry, catering to roles ranging from Junior Boners and Trimmers to Management positions. With our extensive experience, we ensure the right individuals are placed in roles where they can thrive and find fulfillment, creating a positive experience for everyone involved.",
  },
  { id: 1, name: "Engineering ", slug: "engineering", color: "text-indigo-700", imageSrc: ConstructionImage, summary: "TBD" },
  {
    id: 2,
    name: "Construction & Trade",
    slug: "construction-and-trade",
    color: "text-gray-700",
    imageSrc: TradeImage,
    summary:
      "Our Engineering & Construction team possesses a wealth of experience in the industry, specializing in recruiting highly skilled professionals in niche trades. From Tekla Draughtsmen to Welders and General Labourers, we have a proven track record of identifying and placing top talent within the Engineering & Construction sector.",
  },
  {
    id: 3,
    name: "Warehousing & Logistics",
    slug: "warehousing-logistics",
    color: "text-teal-700",
    imageSrc: WarehouseImage,
    summary:
      "Having originated in the Warehouse & Logistics industry, our Group has established a remarkable reputation as a leading recruitment agency. We have successfully recruited for prestigious blue chip companies, high street cosmetic brands, and luxury chocolate manufacturers. With thousands of satisfied workers and clients, we take pride in our ability to match the right candidates with rewarding opportunities in Warehouse & Logistics.",
  },
  {
    id: 4,
    name: "Overseas Sponsorships",
    slug: "overseas-sponsorships",
    color: "text-sky-700",
    imageSrc: WarehouseImage,
    summary: "TBD",
    paragraphs: [
      "Over the last 30 years there have been significant changes to the way we recruited and where we could recruit from. The changes when we joined the EU back in the early 70s were significant and opened other member states providing freedom of movement between all EU members, whilst countries outside the EU would need to go through various visa processes.",
      "During the early period of the 2020’s the UK voted to leave the EU and become more independent to make choices this was known as Brexit; where freedom of movement from inside the EU became significantly different with additional immigration control from the UK.",
      "Relocation to the UK has significantly decreased over the last several years from the EU due to various factors; exchange rates, opportunities within their own country, more local options within the EU to name a few. This has had a significant impact on the available workforce in the UK for skilled and non-skilled workforce so where does the solution lie? ",
      "Over the last year we have seen a significant amount of people relocating from outside the EU to the UK for skilled positions by means of sponsorship, this process has allowed SME employers to fill those outstanding positions on a 2-5 year visa while providing a stable workforce along side equality and diversity.",
      "The options of relocating workers from Outside the UK/EU have significant differences including costs and processes. Each Country outside the EU will have slightly different variations, some will require an IELTS certificate to prove their level of English at a reasonable standard whilst the UK will allow other countries to supply candidates to the UK if they have a higher level of education partly completed in English.",
      "Relocating potential employees to the UK depends on each companies starting point and can be from 6 weeks to 3 months. The investment required verses productivity and reliability alone has significantly changed previous clients supplied and abled to spend time on developing employees rather than replacing overworked but loyal employees.",
      "If you would like to discuss potential options on relocation of skilled workforce to the UK please contact for an initial enquiry.",
    ],
    relatedLinks: [{ name: "Skilled Worker Shortages", url: "https://www.gov.uk/government/publications/skilled-worker-visa-shortage-occupations/skilled-worker-visa-shortage-occupations " }],
  },
];
