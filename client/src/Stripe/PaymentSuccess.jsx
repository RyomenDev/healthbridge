import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentSuccessData from "../Data/PaymentSuccessData";

function PaymentSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Perform any post-payment actions here if needed
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: PaymentSuccessData.backgroundImage }}
    >
      <div className="w-full bg-white bg-opacity-60 shadow-2xl rounded-xl p-10">
        <div className="text-center mb-8">
          <img
            src={PaymentSuccessData.successIcon}
            alt="Success Icon"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h2 className="text-4xl font-extrabold text-green-500 mb-4">
            Congratulations! 🎉
          </h2>
          <p className="text-lg text-gray-700">
            You are now a <span className="font-bold">Premium Member</span>!
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Unlock exclusive benefits designed to make your experience seamless
            and efficient.
          </p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Premium Membership Perks
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PaymentSuccessData.perks.map((perk, index) => (
              <li
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={perk.icon}
                  alt={`Perk ${index + 1}`}
                  className="w-12 h-12 mr-4"
                />
                <span className="text-gray-700 font-medium">
                  {perk.description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center py-3 bg-gray-50">
          <button
            onClick={() => navigate("/")}
            className="py-3 px-6 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
