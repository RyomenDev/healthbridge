import { auth, googleProvider } from "../FireBase/firebase-config.jsx";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoginUser } from "../api/index.jsx";
import { login as authLogin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import hospitalImage from "../assets/HospitalImage.png";
import { handleApiError } from "../utils/handleApiError";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    try {
      // Initiate the sign-in popup
      const result = await signInWithPopup(auth, googleProvider);

      // Retrieve token from Firebase User
      const token = await result.user.getIdToken();
      localStorage.setItem("firebase_token", token);
      sessionStorage.setItem("firebase_token", token);

      // Call API to login the user
      const userData = await LoginUser(token, navigate);
      dispatch(authLogin(userData));

      // Navigate to the homepage
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error);
      handleApiError(error, navigate); // Handle API error with custom logic
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section: Hospital Image (Visible on md and larger screens only) */}
      <div
        className="w-1/2 bg-cover bg-center relative hidden md:block"
        style={{ backgroundImage: `url(${hospitalImage})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-semibold text-center px-4">
            Welcome to HealthBridge
          </h1>
        </div>
      </div>

      {/* Right Section: Google Sign In */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <div className="text-center p-10 space-y-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-800">
            Sign In to Continue
          </h2>
          <p className="text-lg text-gray-600">
            Access your health records and more!
          </p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
