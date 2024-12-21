

const Motive = (data) => {
  const { title, description, points, imageSrc } = data;

  return (
    <div className="bg-blue-50 py-10 px-6">
      <div className="text-4xl md:text-6xl font-bold text-center mb-8">
        {title}
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Left Section */}
        <div className="lg:w-1/2 space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">{description}</p>

          {/* Points List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-md"
              >
                <img
                  src={point.imgSrc}
                  alt={point.title}
                  className="w-16 h-16 rounded-full shadow"
                />
                <div className="ml-4">
                  <h4 className="text-xl text-blue-600 font-semibold">
                    {point.count}
                  </h4>
                  <p className="text-gray-600">{point.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={imageSrc}
            alt="Why Choose HealthBridge"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Motive;
