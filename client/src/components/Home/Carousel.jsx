import { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden mt-16 md:mt-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 px-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 px-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
        onClick={handleNext}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
