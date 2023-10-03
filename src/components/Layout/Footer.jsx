import { Link } from "react-router-dom";
import facebookIcon from "../../assets/interface/Facebook_Logo_Primary.png";
import linkedinIcon from "../../assets/interface/LI-In-Bug.png";
import logoImage from "../../assets/interface/qs-logo-transparent.png";
import icoLogo from "../../assets/footer/ICO_Logo_WhiteOnBlue.jpg";
import diabilityCommittedLogo from "../../assets/footer/disability-confident-committed.jpg";
import ALPLogo from "../../assets/footer/ALP.jpg";
import SedexLogo from "../../assets/footer/Sedex-Logo.png";
import FSBLogo from "../../assets/footer/fsb-member-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 mt-auto">
      <div className="container mx-auto max-w-screen-2xl">
        <div>
          <div className="flex flex-wrap justify-center gap-10 mb-5">
            <img src={icoLogo} alt="Information Commissioner's Office || https://ico.org.uk/" className="h-24" />
            <img src={diabilityCommittedLogo} alt="Disability Committed Logo" className="h-24" />
            <img src={ALPLogo} alt="ALP member logo || https://www.labourproviders.org.uk/" className="h-24" />
            <img src={SedexLogo} alt="Sedex logo || https://www.sedex.com/" className="h-24" />
            <img src={FSBLogo} alt="FSB member logo || https://www.fsb.org.uk/" className="h-24" />
          </div>
          {/* <p className="text-center mb-6">(Logos: Stronger Together / Crown Commercial Supplier)</p> */}
        </div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 border-t border-violet-300 pt-6">
          {/* Logo and Description */}
          <div className="text-center col-span-full lg:col-span-1">
            <img src={logoImage} alt="Company Logo" className="mb-2 w-full max-w-lg mx-auto" />
          </div>

          {/* Useful Links */}
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold">Useful Links</h3>
            <ul>
              {[
                { path: "/", label: "Home" },
                { path: "/jobs", label: "Jobs" },
                { path: "/employers", label: "Employers" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((route) => (
                <li key={route.path}>
                  <Link to={route.path} className={`${location.pathname === route.path ? "underline" : ""} hover:underline hover:text-white text-white text-lg`}>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div className="px-2">
            <h3 className="mb-3 text-xl font-bold">Office Hours</h3>
            <p className="my-2">Monday to Friday: 8am - 5.30pm</p>
            <p className="my-2">24/7 Availability</p>
            <h3 className="mb-3 text-xl font-bold">Socials</h3>
            <div className="flex justify-start my-2">
              <a href="#" className=" w-10">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className="mx-6 w-12">
                <img src={linkedinIcon} alt="Linkedin" />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-violet-300 pt-6">
          {/* Copyright */}
          <div className="text-lg font-semibold text-center">
            <p>Quack Specialists Ltd. © 2023</p>
            <p>Eastway Enterprise Centre, 7 Paynes Park, Hitchin, England, SG5 1EH </p>
            <p>
              Company number:{" "}
              <a href="https://find-and-update.company-information.service.gov.uk/company/14920616" className="text-violet-300">
                14920616
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
