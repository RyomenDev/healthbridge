import axios from "axios";
import conf from "../conf/conf.jsx";
import { handleApiError } from "../utils/handleApiError";
import { getHeaders } from "../utils/authUtils";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/premier`;

const createPaymentIntent = async (amount) => {
  try {
    const headers = await getHeaders();

    const response = await axios.post(
      `${API_URL}/create-payment-intent`,
      { amount },
      {
        headers,
      }
    );
    // console.log("Stripe-response", response);
    if (response) return response;
    throw new Error("Failed to create payment intent");
  } catch (error) {
    handleApiError(error); // Handle any API errors
  }
};

export { createPaymentIntent };
