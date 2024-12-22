import axios from "axios";
import conf from "../conf/conf.jsx";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/retellai`;

export const registerCall = async (RETELL_AI_AGENT_ID) => {
  //   console.log("connecting Retail-ai");
  try {
    const response = await axios.post(
      `${API_URL}/connect-retellai`,
      {
        agent_id: RETELL_AI_AGENT_ID,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Axios response data is automatically parsed
    return response.data;
  } catch (err) {
    console.error("API call failed", err);
    throw new Error(err.response ? err.response.data : err.message);
  }
};
