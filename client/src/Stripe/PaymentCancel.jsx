import { Link } from "react-router-dom";
import { paymentCancelData } from "../Data/PaymentCancelData";

function PaymentCancel() {
  const { title, message, subMessage, reasonsTitle, reasons, backgroundImage } =
    paymentCancelData;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full min-h-screen bg-white bg-opacity-75 flex flex-col items-center justify-center shadow-xl">
        <div className="max-w-3xl w-full p-8 text-center">
          <h2 className="text-4xl font-extrabold text-red-600 mb-6">{title}</h2>
          <p className="text-lg text-gray-800 mb-4">{message}</p>
          <p className="text-md text-gray-600 mb-8">{subMessage}</p>

          <div className="flex justify-center gap-4 mb-8">
            <Link
              to="/premier"
              className="py-3 px-8 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
            >
              Try Again
            </Link>
            <Link
              to="/"
              className="py-3 px-8 text-lg font-semibold rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
            >
              Return Home
            </Link>
          </div>

          <div className="bg-gray-100 bg-opacity-90 p-6 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {reasonsTitle}
            </h3>
            <ul className="list-disc list-inside space-y-3 text-left text-gray-700">
              {reasons.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancel;
