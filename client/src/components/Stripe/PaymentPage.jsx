import { useState, useEffect } from "react";
import { useCartContext } from "./CartProvider";
import { loadStripe } from "@stripe/stripe-js";
import { jwtDecode } from "jwt-decode";
import { createCheckoutSession } from "../../../../api/PaymentApi";

// Load Stripe.js
const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(`${STRIPE_PUBLISHABLE_KEY}`);

function PaymentPage() {
  const { cart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [shippingDetails, setShippingDetails] = useState(null);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem("shippingDetails"));
    if (details) {
      setShippingDetails(details);
    } else {
      // Redirect to shipping details if not found
      window.location.href = "/shop/user/checkOut/shipping";
    }
  }, []);

  const getUserId = () => {
    const token = localStorage.getItem("token");
    let userId;
    if (token) {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.id;
    }
    return userId;
  };

  const handleCheckout = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const userId = getUserId();

    try {
      // Prepare order info with product ID, quantity, and shipping details
      const orderInfo = {
        cartItems: cart.map((item) => ({
          productId: item._id,
          qty: item.qty,
          name: item.name,
          price: item.price,
          image: item.image,
        })),
        shippingDetails,
        userId,
      };

      // Send cart items and shipping details to backend to create a checkout session
      const response = await createCheckoutSession(orderInfo);

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      } else {
        throw new Error("Failed to get checkout URL");
      }
    } catch (error) {
      console.error("Checkout failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!shippingDetails) return null; // or a loading state

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Payment</h2>

      {/* Order Summary */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
        <ul className="grid grid-cols-1 gap-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 border-b"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>
                  {item.name} (x{item.qty})
                </span>
              </div>
              <span className="font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold mt-2">
          <span>Total Amount:</span>
          <span>
            $
            {cart
              .reduce((total, item) => total + item.price * item.qty, 0)
              .toFixed(2)}
          </span>
        </div>
      </div>

      {/* Payment Button */}
      <button
        className={`w-full bg-blue-500 text-white p-3 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
    </div>
  );
}

export default PaymentPage;
