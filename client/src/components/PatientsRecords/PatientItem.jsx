const PatientItem = ({ patient, onViewDetails, onEditClick, onDelete }) => {
  return (
    <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition">
      <span className="text-lg font-medium text-gray-800">
        {patient.name} - {patient.diagnosedWith}
      </span>
      <div className="flex space-x-4">
        <button
          onClick={() => onViewDetails(patient)}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          View Details
        </button>
        <button
          onClick={onEditClick}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(patient._id)}
          className="text-red-600 hover:text-red-800 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default PatientItem;
