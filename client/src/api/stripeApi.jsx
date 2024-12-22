import axios from "axios";
import conf from "../conf/conf.jsx";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/premier`;


const createPaymentIntent = async (amount) => {
  try {
    // console.log("backent-intent");

    const response = await axios.post(`${API_URL}/create-payment-intent`, {
      amount,
    });
    // console.log("Stripe-response", response);
    if (response) return response;
    throw new Error("Failed to create payment intent");
  } catch (error) {
    console.error("Error creating payment intent:", error);
    throw error;
  }
};

export { createPaymentIntent };
