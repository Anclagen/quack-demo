import { Link } from "react-router-dom";

const TwoColSection = ({ title, imageSrc, imageAlt, text = [], linkText, linkHref, reverse = false }) => {
  return (
    <div>
      <h2 className="text-2xl mb-12 text-center font-bold">{title}</h2>
      <div className="md:flex space-x-6 p-5 items-center">
        <div className={`md:w-1/2 mb-5 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <img src={imageSrc} alt={imageAlt} className="rounded-3xl mx-auto" />
        </div>
        <div className={`md:w-1/2 p-3 md:p-5 flex flex-col text-lg ${reverse ? "md:order-1" : "md:order-2"}`}>
          {text &&
            text.map((paragraph, index) => (
              <p key={index} className="mb-5">
                {paragraph}
              </p>
            ))}
          <div className="flex justify-center mt-auto">
            {linkText && linkHref && (
              <Link to={linkHref} className="bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded">
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColSection;
