import Carousel from "../components/Home/Carousel";
import ActionOption from "../components/Home/ActionOption";
import Motive from "../components/Home/Motive";

import HomeData from "../Data/MainData";

const HomePage = () => {
  const { images, actionOptions, motive } = HomeData;

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-blue-100 ">
        <div className="text-5xl font-extrabold mb-4">
          Health<span className="text-yellow-300">Bridge</span>
        </div>
        <p className="text-lg font-medium max-w-md text-center">
          A <span className="italic">bridge</span> between patients and
          hospitals for better healthcare.
        </p>
      </div>

      <Carousel images={images} />
      {/* Action Options Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {actionOptions.map((option, index) => (
            <ActionOption
              key={index}
              title={option.title}
              imgSrc={option.imgSrc}
              link={option.link}
            />
          ))}
        </div>
      </div>
      {/* Motive Section */}
      <Motive
        title={motive.title}
        description={motive.description}
        points={motive.points}
        imageSrc={motive.imageSrc}
      />
    </div>
  );
};

export default HomePage;
