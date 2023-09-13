export const CardWithTitleTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <h3 className="text-xl m-4 text-center">{title}</h3>
      <img src={imgSrc} alt={imgAlt} className="mb-4 w-full object-cover" />
      <p className="m-4">{text}</p>
    </div>
  );
};

export const CardWithImageTop = ({ title, imgSrc, imgAlt, text }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white text-black">
      <img src={imgSrc} alt={imgAlt} className="w-full object-cover h-48" />
      <div className="p-4">
        <h3 className="text-xl mb-4">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
