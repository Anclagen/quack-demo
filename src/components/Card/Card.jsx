import { useInView } from "react-intersection-observer";

export const CardWithTitleTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <h3 className="text-2xl m-4 text-center font-bold">{title}</h3>
      <img src={imgSrc} alt={imgAlt} className="mb-4 w-full object-cover" />
      <p className="m-4 text-lg">{text}</p>
    </div>
  );
};

export const CardWithImageTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <img src={imgSrc} alt={imgAlt} className="w-full object-cover h-48" />
      <div className="p-4">
        <h3 className="text-2xl mb-4 font-bold">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export const CardMinimalIconTop = ({ title, icon, color, text, textColor = "text-black" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-300px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div
      ref={ref}
      className={`rounded-lg shadow-md overflow-hidden ${textColor} transition-all duration-1500 transform ${inView ? "scale-100 opacity-100" : "opacity-0 scale-50"}`}
      style={{ transitionDuration: "2500ms" }}
    >
      <div className="w-100 text-center">
        <span className={`material-symbols-outlined ${color}`}>{icon} </span>
      </div>
      <div className="p-4">
        <h3 className="text-2xl mb-4 font-bold">{title}</h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export const TestimonialCard = ({ userImage, testimonialText, userName, userPosition }) => {
  return (
    <div className="relative bg-gray-400 rounded-lg p-5 shadow-md text-black mt-20">
      <img src={userImage} alt="User" className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-1/3 rounded-full border-4 border-white" />
      <div className="mt-16 mb-4">
        <span className="text-violet-900 text-3xl font-bold">“</span>
        {testimonialText}
        <span className="text-violet-900 text-3xl font-bold">”</span>
      </div>
      <p className="text-violet-900 text-xl font-bold">{userName}</p>
      <p className="text-black text-md">{userPosition}</p>
    </div>
  );
};
