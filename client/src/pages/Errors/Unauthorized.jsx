import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">403</h1>
      <p className="text-xl text-gray-600 mb-8">
        You don't have permission to access this page.
      </p>
      <Link
        to="/login"
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
      >
        Login
      </Link>
      <Link
        to="/"
        className="mt-4 px-6 py-3 bg-gray-500 text-white font-medium rounded-lg shadow hover:bg-gray-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Unauthorized;
