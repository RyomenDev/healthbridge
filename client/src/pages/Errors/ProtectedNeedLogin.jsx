import { Link } from "react-router-dom";

const ProtectedNeedLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Required</h1>
      <p className="text-gray-700 mb-8">
        You need to log in to access this feature. Please log in or sign up to
        continue.
      </p>
      <Link
        to="/login" // Replace with your authentication route
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default ProtectedNeedLogin;
