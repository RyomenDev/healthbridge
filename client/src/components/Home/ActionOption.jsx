
const ActionOption = ({ title, imgSrc, link }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out">
      <a href={link}>
        <img src={imgSrc} alt={title} className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </a>
    </div>
  );
};

export default ActionOption;
