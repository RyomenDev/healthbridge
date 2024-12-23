// src/Login.jsx
import { auth, googleProvider } from "../FireBase/firebase-config.jsx";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoginUser } from "../api/index.jsx";
import { login as authLogin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import hospitalImage from "../assets/HospitalImage.png";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      //   console.log(result);

      const token = await result.user.getIdToken();
      localStorage.setItem("firebase_token", token);
      sessionStorage.setItem("firebase_token", token);

      // Use the LoginUser function to make the API call
      const userData = await LoginUser(token);
      //   console.log("User Data:", userData, token);
      dispatch(authLogin(userData));
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="w-auto h-screen flex">
      {/* Left Section: Hospital Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${hospitalImage})` }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black opacity-40">
          <h1 className="text-white text-4xl font-semibold">
            Welcome to Our HealthBridge
          </h1>
        </div>
      </div>

      {/* Right Section: Google Sign In */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-700">
            Sign In to Continue
          </h2>
          <p className="text-gray-500 text-lg">
            Access your health records and more!
          </p>

          <button
            onClick={handleGoogleSignIn}
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
