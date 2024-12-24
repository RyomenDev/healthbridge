import {
  PencilIcon,
  TrashIcon,
  ArrowLeftIcon,
  PhoneIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const PatientDetails = ({ patient, onEditClick, onDelete, onBack }) => {
  return (
    <div className="mt-6 sm:mt-8 max-w-4xl mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 text-center tracking-tight">
        Patient Details
      </h2>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <UsersIcon className="h-5 w-5 text-gray-600 mr-2" />
            <strong className="font-medium text-gray-600">Name:</strong>{" "}
            {patient.name}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <HeartIcon className="h-5 w-5 text-gray-600 mr-2" />
            <strong className="font-medium text-gray-600">
              Diagnosed With:
            </strong>{" "}
            {patient.diagnosedWith}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <UsersIcon className="h-5 w-5 text-gray-600 mr-2" />
            <strong className="font-medium text-gray-600">
              Has Chronic Diseases:
            </strong>{" "}
            {patient.hasChronicDiseases ? "Yes" : "No"}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <strong className="font-medium text-gray-600">Age:</strong>{" "}
            {patient.age}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <strong className="font-medium text-gray-600">Blood Group:</strong>{" "}
            {patient.bloodGroup}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <strong className="font-medium text-gray-600">Gender:</strong>{" "}
            {patient.gender}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <strong className="font-medium text-gray-600">Address:</strong>{" "}
            {patient.address}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <PhoneIcon className="h-5 w-5 text-gray-600 mr-2" />
            <strong className="font-medium text-gray-600">Contact:</strong>{" "}
            {patient.phone}
          </p>
          <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
            <PhoneIcon className="h-5 w-5 text-gray-600 mr-2" />
            <strong className="font-medium text-gray-600">
              Emergency Contact:
            </strong>{" "}
            {patient.emergencyContact.phone}
          </p>
          {patient.email && (
            <p className="text-base sm:text-lg flex items-center hover:text-blue-600 transition-colors duration-300">
              <strong className="font-medium text-gray-600">Email:</strong>{" "}
              {patient.email}
            </p>
          )}
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => onEditClick(patient)}
            className="bg-yellow-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <PencilIcon className="h-5 w-5" />
            <span>Edit</span>
          </button>
          <button
            onClick={() => onDelete(patient._id)}
            className="bg-red-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-red-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <TrashIcon className="h-5 w-5" />
            <span>Delete</span>
          </button>
          <button
            onClick={onBack}
            className="bg-gray-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-gray-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            <span>Back to List</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
