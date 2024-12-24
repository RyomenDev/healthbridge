import { auth } from "../FireBase/firebase-config.jsx";
import { getIdToken } from "firebase/auth";

// Function to get the Firebase token
export const getFirebaseToken = async () => {
  try {
    // Check if the token exists in localStorage or sessionStorage
    const localStorageToken = localStorage.getItem("firebase_token");
    const sessionStorageToken = sessionStorage.getItem("firebase_token");

    // console.log("TOKEN-localStorage", sessionStorageToken);
    // console.log("TOKEN-sessionStorage", localStorageToken);

    // Return token from storage if it exists
    if (localStorageToken) {
      return localStorageToken;
    }
    if (sessionStorageToken) {
      return sessionStorageToken;
    }

    // If no token is found in storage, fetch from Firebase
    const user = auth.currentUser;
    if (user) {
      const token = await getIdToken(user);

      // Store the token in both localStorage and sessionStorage for future use
      localStorage.setItem("firebase_token", token);
      sessionStorage.setItem("firebase_token", token);

      return token;
    }
    throw new Error("User is not authenticated");
  } catch (error) {
    console.error("Error retrieving Firebase token:", error);
    throw error;
  }
};

// Helper function to attach headers with the Bearer token
export const getHeaders = async () => {
  const token = await getFirebaseToken();
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
