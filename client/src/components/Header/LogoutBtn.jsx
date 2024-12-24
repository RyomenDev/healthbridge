import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { auth } from "../../FireBase/firebase-config.jsx";
import { signOut } from "firebase/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth);

      // Clear localStorage, sessionStorage, and any other tokens
      localStorage.removeItem("user");
      localStorage.removeItem("firebase_token");
      sessionStorage.removeItem("firebase_token");

      // Dispatch Redux logout action
      dispatch(logout());

      // Redirect to login page after logout
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out from Firebase:", error);
    }
  };

  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogoutBtn;
