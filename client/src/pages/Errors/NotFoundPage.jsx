import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-gray-100 to-gray-200">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-500 mb-6 animate-pulse">
          404
        </h1>
        <p className="text-2xl text-gray-700 mb-4">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <p className="text-gray-600 mb-8">
          It might have been moved, deleted, or the URL might be incorrect.
        </p>
        <div className="">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
