import axios from "axios";
import conf from "../conf/retellAi-conf.js";

const API_URL = conf.RETELL_AI_MAIN_API_URL;
const RETELL_AI_API_KEY = conf.RETELL_AI_API_KEY;

const RetellAiController = async (req, res) => {
  //   console.log("retell-AI");
  const { agent_id, metadata, retell_llm_dynamic_variables } = req.body;

  // Prepare the payload for the API request
  const payload = { agent_id };

  // Conditionally add optional fields if they are provided
  if (metadata) {
    payload.metadata = metadata;
  }
  //
  if (retell_llm_dynamic_variables) {
    payload.retell_llm_dynamic_variables = retell_llm_dynamic_variables;
  }

  try {
    const response = await axios.post(`${API_URL}`, payload, {
      headers: {
        Authorization: `Bearer ${RETELL_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    res.status(201).json(response.data);
  } catch (error) {
    console.error(
      "Error creating web call:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to create web call" });
  }
};

export { RetellAiController };
