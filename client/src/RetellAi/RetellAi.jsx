import { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import conf from "../conf/retellAi-conf.jsx";
import { registerCall } from "../api/index.jsx";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { handleApiError } from "../utils/handleApiError";

import activeBot from "../assets/activeBot.png";
import inActiveBot from "../assets/inActiveBot.png";

const RETELL_AI_AGENT_ID = conf.RETELL_AI_AGENT_ID;
const retellWebClient = new RetellWebClient();

const RetellAi = () => {
  const [isCalling, setIsCalling] = useState(false);
  const navigate = useNavigate();

  // Initialize the SDK
  useEffect(() => {
    retellWebClient.on("call_started", () => {
      //   console.log("call started");
      // OTHER EFFECTS
    });

    retellWebClient.on("call_ended", () => {
      //   console.log("call ended");
      // OTHER EFFECTS
      setIsCalling(false);
    });

    retellWebClient.on("agent_start_talking", () => {
      //   console.log("agent_start_talking");
      // OTHER EFFETCS
    });

    retellWebClient.on("agent_stop_talking", () => {
      //   console.log("agent_stop_talking");
      // OTHER EFFETCS
    });

    retellWebClient.on("audio", (audio) => {
      console.log("audio", audio);
    });

    // message from agent and caller
    retellWebClient.on("update", (update) => {
      //   console.log(update);
      //   console.log(
      //     // "update",
      //     update.transcript[0].role,
      //     ":",
      //     update.transcript[0].content
      //   );
    });

    retellWebClient.on("metadata", (metadata) => {
      console.log("metadata", metadata);
    });

    retellWebClient.on("error", (error) => {
      console.error("An error occurred:", error);
      // Handle errors with custom handler
      handleApiError(error, navigate);
      // Stop call in case of error
      retellWebClient.stopCall();
    });
  }, []);

  const toggleConversation = async () => {
    if (isCalling) {
      // Stop the call if it is active
      retellWebClient.stopCall();
      setIsCalling(false);
    } else {
      try {
        // Register the call and get the access token
        const registerCallResponse = await registerCall(
          RETELL_AI_AGENT_ID,
          navigate
        );

        if (registerCallResponse.access_token) {
          // Start the call with the access token
          await retellWebClient
            .startCall({
              accessToken: registerCallResponse.access_token,
            })
            .catch((error) => {
              // Handle errors related to starting the call
              handleApiError(error, navigate);
            });

          setIsCalling(true);
        }
      } catch (error) {
        // Handle API errors during call registration
        handleApiError(error, navigate);
      }
    }
  };

  return (
    <>
      {/* Button styled to be positioned at the bottom-right */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={toggleConversation}
          className={`py-3 px-6 flex items-center justify-center gap-4 rounded-lg text-white font-semibold transition-all duration-300 transform shadow-lg hover:scale-105 ${
            isCalling
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {/* Icon */}
          <FaPhoneAlt className="text-lg" />

          {/* Image Indicator */}
          <span
            className="w-10 h-10 border border-gray-200 rounded-full overflow-hidden"
            title={isCalling ? "Active Bot" : "Inactive Bot"}
          >
            <img
              src={isCalling ? activeBot : inActiveBot}
              alt={isCalling ? "Active Bot" : "Inactive Bot"}
              className="w-full h-full object-cover"
            />
          </span>
        </button>
      </div>
    </>
  );
};

export default RetellAi;
