const PatientItem = ({ patient, onViewDetails, onEditClick, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg hover:bg-gray-50 transition duration-200 ease-in-out">
      <div className="flex flex-col space-y-2">
        <span className="text-xl font-semibold text-gray-800">
          {patient.name}
        </span>
        <span className="text-sm text-gray-600">{patient.diagnosedWith}</span>
      </div>
      <div className="flex space-x-6">
        <button
          onClick={() => onViewDetails(patient)}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out"
        >
          View Details
        </button>
        <button
          onClick={onEditClick}
          className="px-4 py-2 text-yellow-600 border border-yellow-600 rounded-md hover:bg-yellow-600 hover:text-white transition duration-200 ease-in-out"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(patient._id)}
          className="px-4 py-2 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition duration-200 ease-in-out"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default PatientItem;
