import { auth } from "../FireBase/firebase-config.jsx";
import { getIdToken } from "firebase/auth";

// Function to get the Firebase token
export const getFirebaseToken = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      // Try to fetch the Firebase token
      const token = await getIdToken(user);

      // Store token in localStorage/sessionStorage for future use
      //   localStorage.setItem("firebase_token", token);
      //   sessionStorage.setItem("firebase_token", token);

      return token;
    } catch (error) {
      console.error("Error retrieving Firebase token:", error);
      throw error;
    }
  }
  throw new Error("User is not authenticated");
};

// Helper function to attach headers with the Bearer token
export const getHeaders = async () => {
  const token = await getFirebaseToken();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
