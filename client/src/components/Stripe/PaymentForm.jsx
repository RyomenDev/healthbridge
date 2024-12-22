import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "../../api";

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
      const response = await createPaymentIntent(10000);
      const { url } = response.data;

      // Redirect to Stripe Checkout
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg border border-gray-300 p-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Become a Premium Member
        </h2>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Unlock exclusive features tailored for doctors to make your practice
          more efficient and seamless.
        </p>
        <ul className="list-disc space-y-3 pl-6 text-gray-700 mb-6">
          <li>Unlimited access to save and manage patient data securely.</li>
          <li>
            Advanced search tools for medicines, prescriptions, and patient
            history.
          </li>
          <li>Customizable patient treatment plans and reminders.</li>
          <li>Seamless integration with top medical tools and platforms.</li>
          <li>Priority customer support for all your queries and issues.</li>
        </ul>
        <p className="text-lg font-semibold text-center text-gray-800 mb-6">
          Invest in the tools you need to deliver exceptional care and grow your
          practice.
        </p>

        <form onSubmit={handleSubmit} className="text-center">
          <button
            type="submit"
            disabled={!stripe || loading}
            className={`w-full py-3 px-6 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Become a Premium Member Now"}
          </button>
        </form>

        {paymentStatus && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Payment Status:{" "}
              <span
                className={`${
                  paymentStatus === "Success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {paymentStatus}
              </span>
            </h3>
            {paymentStatus === "Failed" && (
              <p className="text-red-500">{error}</p>
            )}
            {paymentStatus === "Success" && (
              <>
                <p className="text-green-500 font-medium mb-2">
                  Payment Successful! Welcome to Premium Membership.
                </p>
                <div className="p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-700">
                    Invoice #: INV-{Math.floor(Math.random() * 100000)}
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;
