import { Link } from "react-router-dom";

function PaymentCancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg border border-gray-300 p-8 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Premium Membership Payment Canceled
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          It seems your payment process for upgrading to a Premium Membership
          was not completed. If you still wish to enjoy the exclusive benefits,
          you can try again.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Premium Membership unlocks powerful features such as unlimited data
          storage, advanced search capabilities, priority support, and much
          more!
        </p>

        <div className="flex justify-center gap-4">
          {/* <Link
            to="/premier"
            className="py-3 px-6 text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Membership Benefits
          </Link> */}
          <Link
            to="/premier"
            className="py-3 px-6 text-lg font-semibold rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Try Again
          </Link>
        </div>

        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Go Premium?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
            <li>Access exclusive features like unlimited data storage.</li>
            <li>Get advanced search capabilities for efficient browsing.</li>
            <li>Enjoy priority support for quick issue resolution.</li>
            <li>Experience a completely ad-free platform.</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="py-2 px-4 text-lg font-semibold rounded-lg text-gray-700 border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancel;
