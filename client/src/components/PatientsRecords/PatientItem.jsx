const PatientItem = ({ patient, onViewDetails, onEditClick, onDelete }) => {
  return (
    <li className="flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-lg shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out space-y-4 md:space-y-0">
      <div className="flex flex-col space-y-2 w-full md:w-auto">
        <span className="text-lg md:text-xl font-semibold text-gray-800 text-center md:text-left">
          {patient.name}
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
          {patient.diagnosedWith}
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full md:w-auto">
        <button
          onClick={() => onViewDetails(patient)}
          className="w-full md:w-auto px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out"
          aria-label={`View details of ${patient.name}`}
        >
          View Details
        </button>
        <button
          onClick={() => onEditClick(patient)}
          className="w-full md:w-auto px-4 py-2 text-yellow-600 border border-yellow-600 rounded-md hover:bg-yellow-600 hover:text-white transition duration-200 ease-in-out"
          aria-label={`Edit ${patient.name}'s details`}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(patient._id)}
          className="w-full md:w-auto px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-200 ease-in-out"
          aria-label={`Delete ${patient.name}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default PatientItem;
