import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Perform any post-payment actions here if needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg border border-gray-300 p-8 text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-6">
          Congratulations! 🎉
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          You are now a <span className="font-semibold">Premium Member</span>!
        </p>
        <p className="text-lg text-gray-600 mb-6">
          As a premium member, you unlock exclusive benefits designed to make
          your experience seamless and efficient.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-inner mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Premium Membership Perks:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
            <li>Unlimited access to save and manage patient data securely.</li>
            <li>
              Advanced search for medicines, prescriptions, and patient history.
            </li>
            <li>Customizable treatment plans and notifications.</li>
            <li>Exclusive priority customer support.</li>
            <li>Integration with top medical tools and platforms.</li>
          </ul>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 px-6 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
