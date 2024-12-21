import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
// import Login from "./components/Login";

// import axios from "axios";
// const handleTesting = async () => {
//   console.log("Testing COrs");

//   try {
//     const response = await axios.post("http://localhost:3001/testing");
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error during testing:", error);
//   }
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      {/* <button onClick={handleTesting}>handleTesting</button>
      <Login /> */}
    </Provider>
  </StrictMode>
);
