import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../api/index.jsx";
import PremiumData from "../Data/PremiumData.jsx";

const { IMAGES, FEATURES } = PremiumData;

function PaymentPage() {
  const stripe = useStripe();
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await createPaymentIntent(100);
      const { url } = response.data;

      if (url) {
        window.location.href = url;
      } else {
        throw new Error("Failed to get checkout URL");
      }
    } catch (error) {
      setPaymentStatus("Failed");
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="relative w-full h-64 md:h-96">
        <img
          src={IMAGES.background}
          alt="Premium Membership"
          className="w-full h-full object-cover rounded-b-3xl shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent flex items-center justify-center text-center text-blue-900">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Unlock Premium Membership
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-medium">
            Elevate your practice with exclusive tools and features.
          </p>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-6 md:px-12 py-8">
        <div className="bg-slate-100 rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-blue-900">
            Exclusive Features You’ll Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 bg-blue-100">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-center"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="h-32 w-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                disabled={!stripe || loading}
                className={`py-4 px-10 rounded-full text-lg font-semibold text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Processing..." : "Become a Premium Member Now"}
              </button>
            </form>

            {paymentStatus && (
              <div className="mt-8">
                <h3
                  className={`text-2xl font-bold ${
                    paymentStatus === "Success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Payment Status: {paymentStatus}
                </h3>
                {paymentStatus === "Failed" && (
                  <p className="text-red-500 mt-4">{error}</p>
                )}
                {paymentStatus === "Success" && (
                  <div className="p-4 mt-4 bg-gray-100 rounded-lg text-gray-700">
                    <p className="font-semibold">Payment Successful!</p>
                    <p>Invoice #: INV-{Math.floor(Math.random() * 100000)}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
