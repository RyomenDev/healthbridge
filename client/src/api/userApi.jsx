import axios from "axios";
import { auth } from "../FireBase/firebase-config.jsx";
import { getIdToken } from "firebase/auth";

// Base URL of your backend API
const API_URL = "http://localhost:3001/api/user";

// Function to get the Firebase token (this can be from the user's session or Firebase Auth)
const getFirebaseToken = async () => {
  const user = auth.currentUser;
  if (user) {
    return (
      (await getIdToken(user)) ||
      localStorage.getItem("firebase_token") ||
      sessionStorage.setItem("firebase_token")
    );
  }
  throw new Error("User is not authenticated");
};

// Function to fetch user profile data
export const fetchUserProfile = async () => {
  try {
    const token = await getFirebaseToken(); // Get Firebase token
    const response = await axios.get(`${API_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include Firebase token in the Authorization header
      },
    });
    // console.log(response.data.user);

    return response.data.user;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

// Function to update user profile data
// export const updateUserProfile = async (userData) => {
//   console.log("updating profile");

//   try {
//     const token = await getFirebaseToken(); // Get Firebase token
//     const response = await axios.patch(`${API_URL}/update-profile`, userData, {
//       headers: {
//         Authorization: `Bearer ${token}`, // Include Firebase token in the Authorization header
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error updating user profile:", error);
//     throw error;
//   }
// };

export const updateUserProfile = async (userData) => {
//   console.log("Updating profile with data:", userData);

  try {
    const token = await getFirebaseToken(); // Get Firebase token
    const response = await axios.put(`${API_URL}/update-profile`, userData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include Firebase token in the Authorization header
        "Content-Type": "application/json", // Explicitly set the content type
      },
    });

    // console.log("Profile updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating user profile:",
      error.response?.data || error.message
    );
    throw error;
  }
};

