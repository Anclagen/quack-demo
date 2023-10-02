import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const FadeInSection = ({ title, imageSrc, imageAlt, text = [], linkText, linkHref, reverse = false, dark = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div ref={ref} className={`transition-all duration-2000 transform ${inView ? "scale-100" : "opacity-0 mt-20"}`} style={{ transitionDuration: "1750ms" }}>
      <h2 className="text-3xl mb-12 text-center font-bold">{title}</h2>
      <div className="md:flex md:space-x-6 lg:gap-10 xl:gap-16">
        <div className={`md:w-1/2 mb-5 p-5 ${reverse ? "md:order-2" : "md:order-1"}`}>
          <img src={imageSrc} alt={imageAlt} className="rounded-3xl shadow-lg shadow-gray-500" />
        </div>
        <div className={`md:w-1/2 p-5 md:p-5 flex flex-col text-lg ${dark ? "text-white" : "text-gray-700"} ${reverse ? "md:order-1" : "md:order-2"}`}>
          {text &&
            text.map((paragraph, index) => (
              <p key={index} className="mb-5">
                {paragraph}
              </p>
            ))}
          <div className="text-center my-10">
            {linkText && linkHref && (
              <Link to={linkHref} className="bg-violet-900 hover:bg-violet-600 hover:text-white text-white py-2 px-4 rounded mx-5 w-fit">
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadeInSection;
