import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const FadeInSection = ({ title, imageSrc, imageAlt, text = [], linkText, linkHref }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-300px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div ref={ref} className={` transition-opacity duration-1000 transition-transform duration-1500 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-50"}`}>
      <h2 className="text-2xl mb-12 text-center">{title}</h2>
      <div className="md:flex space-x-6 p-5">
        <div className="md:w-1/2 mb-5">
          <img src={imageSrc} alt={imageAlt} className="rounded-3xl" />
        </div>
        <div className="md:w-1/2 p-3 md:p-5 flex flex-col items-center">
          {text &&
            text.map((paragraph, index) => (
              <p key={index} className="mb-5">
                {paragraph}
              </p>
            ))}
          {linkText && linkHref && (
            <Link to={linkHref} className="bg-purple-900 hover:bg-purple-600 hover:text-white text-white py-2 px-4 rounded mx-5 mt-auto">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FadeInSection;
