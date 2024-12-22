import axios from "axios";
import conf from "../conf/conf.jsx";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/auth`;

// Function to call the protected API
export const LoginUser = async (token) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Use Bearer token
        },
      }
    );
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error during API call:", error);
    throw error; // Rethrow error if you want to handle it in the calling component
  }
};
