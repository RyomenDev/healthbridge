const PatientDetails = ({ patient, onEditClick, onDelete, onBack }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-700">Patient Details</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>
          <strong>Name:</strong> {patient.name}
        </p>
        <p>
          <strong>Diagnosed With:</strong> {patient.diagnosedWith}
        </p>
        <p>
          <strong>HasChronicDiseases:</strong> {patient.hasChronicDiseases}
        </p>
        <p>
          <strong>Age:</strong> {patient.age}
        </p>
        <p>
          <strong>BloodGroup:</strong> {patient.bloodGroup}
        </p>
        <p>
          <strong>Gender:</strong> {patient.gender}
        </p>
        <p>
          <strong>Address:</strong> {patient.address}
        </p>
        <p>
          <strong>Contact:</strong> {patient.phone}
        </p>
        <p>
          <strong>EmergencyContact:</strong> {patient.emergencyContact.phone}
        </p>
        <p>
          <strong>Email:</strong> {patient.email}
        </p>
        {/* Add more patient details here */}
        <div className="mt-4">
          <button
            onClick={() => onEditClick(patient)}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(patient._id)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition ml-2"
          >
            Delete
          </button>
          <button
            onClick={onBack}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition ml-2"
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
