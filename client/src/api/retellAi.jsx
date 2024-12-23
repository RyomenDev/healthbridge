import axios from "axios";
import conf from "../conf/conf.jsx";
import { handleApiError } from "../utils/handleApiError";
import { getHeaders } from "../utils/authUtils";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/retellai`;

export const registerCall = async (RETELL_AI_AGENT_ID) => {
  try {
    const headers = await getHeaders();

    const response = await axios.post(
      `${API_URL}/connect-retellai`,
      {
        agent_id: RETELL_AI_AGENT_ID,
      },
      {
        headers,
      }
    );

    // Axios response data is automatically parsed
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
