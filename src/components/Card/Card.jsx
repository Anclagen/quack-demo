import { useInView } from "react-intersection-observer";

export const CardWithTitleTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black shadow-lg shadow-violet-300 ">
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

export const CardWithLargerImageTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <img src={imgSrc} alt={imgAlt} className="w-full object-cover h-64" />
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
    rootMargin: "-50px 0px", // Start the animation slightly before the element is in view
  });

  return (
    <div
      ref={ref}
      className={`rounded-lg shadow-lg overflow-hidden text-center ${textColor} transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`}
      style={{ transitionDuration: "2500ms" }}
    >
      <div className="w-100">
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
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the fade in animation once
    rootMargin: "-80px 0px", // Start the animation slightly before the element is in view
  });
  return (
    <div className={`relative bg-zinc-200 rounded-lg p-5 shadow-lg shadow-violet-700 text-black mt-20 transition-all duration-2000 transform ${inView ? "" : "opacity-0 mt-20"}`} ref={ref}>
      <img src={userImage} alt="User" className="absolute shadow-md -top-20 left-1/2 transform -translate-x-1/2 w-1/3 rounded-full border-4 border-white w-36" />
      <div className="mt-16 mb-4 text-lg">
        <span className="text-violet-900  font-extrabold">“</span>
        {testimonialText}
        <span className="text-violet-900 font-extrabold">”</span>
      </div>
      <p className="text-violet-900 text-xl font-bold">{userName}</p>
      <p className="text-black text-md">{userPosition}</p>
    </div>
  );
};
