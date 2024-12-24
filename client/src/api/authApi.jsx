import axios from "axios";
import conf from "../conf/conf.jsx";
import { handleApiError } from "../utils/handleApiError";
import { getHeaders } from "../utils/authUtils";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/auth`;

// Function to call the protected API
export const LoginUser = async (navigate) => {
  try {
    const headers = await getHeaders();
    const response = await axios.post(
      `${API_URL}/login`,
      {},
      {
        headers,
      }
    );
    return response.data; // Return the response data
  } catch (error) {
    handleApiError(error, navigate);
  }
};
