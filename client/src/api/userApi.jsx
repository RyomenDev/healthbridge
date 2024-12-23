import axios from "axios";
import conf from "../conf/conf.jsx";
import { handleApiError } from "../utils/handleApiError";
import { getHeaders } from "../utils/authUtils";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/user`;

// Function to fetch user profile data
export const fetchUserProfile = async () => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(`${API_URL}/profile`, {
      headers,
    });
    return response.data.user;
  } catch (error) {
    handleApiError(error);
  }
};

// Function to update user profile
export const updateUserProfile = async (userData) => {
  try {
    const headers = await getHeaders();
    const response = await axios.put(`${API_URL}/update-profile`, userData, {
      headers,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
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
