import { useEffect, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";
import conf from "../conf/retellAi-conf.jsx";
import { registerCall } from "../api/index.jsx";
import { FaPhoneAlt } from "react-icons/fa";

const RETELL_AI_AGENT_ID = conf.RETELL_AI_AGENT_ID;
const retellWebClient = new RetellWebClient();

const RetellAi = () => {
  const [isCalling, setIsCalling] = useState(false);

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
      // OTHER EFFECTS
      retellWebClient.stopCall();
    });
  }, []);

  const toggleConversation = async () => {
    if (isCalling) {
      retellWebClient.stopCall();
    } else {
      const registerCallResponse = await registerCall(RETELL_AI_AGENT_ID);
      if (registerCallResponse.access_token) {
        retellWebClient
          .startCall({
            accessToken: registerCallResponse.access_token,
          })
          .catch(console.error);
        setIsCalling(true);
      }
    }
  };

  return (
    <>
      {/* Button styled to be positioned at the bottom-right */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={toggleConversation}
          className={`py-3 px-6 flex items-center justify-center gap-2 rounded-lg text-white font-semibold transition-all duration-300 ${
            isCalling
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } shadow-lg transform hover:scale-105`}
        >
          <FaPhoneAlt className="text-lg" />
          <span>{isCalling ? "Stop" : "Contact us"}</span>
        </button>
      </div>
    </>
  );
};

export default RetellAi;
