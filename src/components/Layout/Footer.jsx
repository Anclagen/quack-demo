import { Link } from "react-router-dom";
import twitterIcon from "../../assets/294709_circle_twitter_icon.png";
import facebookIcon from "../../assets/5296499_fb_facebook_facebook logo_icon.png";
import instagramIcon from "../../assets/3225191_app_instagram_logo_media_popular_icon.png";
import linkedinIcon from "../../assets/317750_linkedin_icon.png";
import logoImage from "../../assets/quack-small-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Logo and Description */}
          <div className="text-center">
            <img src={logoImage} alt="Company Logo" className="mb-2 mx-auto" />
            <p className="font-semibold text-xl">Quack Specialists</p>
          </div>

          {/* Useful Links */}
          <div>
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
          <div>
            <h3 className="mb-3 text-xl font-bold">Business Hours</h3>
            <p>Monday - Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 2pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Copyright */}
          <div>
            <p className="text-lg font-semibold">Quack Technical Ltd. © 2023</p>
          </div>

          {/* Empty Middle Column */}
          <div></div>

          {/* Social Links */}
          <div className="flex justify-start">
            <a href="#" className="mx-2 w-16">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="mx-2 w-16">
              <img src={instagramIcon} alt="instagram" />
            </a>
            <a href="#" className="mx-2 w-16">
              <img src={linkedinIcon} alt="Linkedin" />
            </a>
            <a href="#" className="mx-2 w-16">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
