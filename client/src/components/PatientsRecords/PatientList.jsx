import { useState, useEffect } from "react";
import { getPatientsByDoctor, deletePatient } from "../../api/index";
import PatientItem from "./PatientItem";
import { handleApiError } from "../../utils/handleApiError";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";
import { useNavigate } from "react-router-dom";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const navigate = useNavigate();

  // Fetch patients for the doctor
  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true); // Set loading true when fetching
      setError(null); // Clear previous errors
      try {
        const patientsData = await getPatientsByDoctor(navigate);
        setPatients(patientsData);
      } catch (error) {
        setError("Failed to load patients. Please try again later.");
        handleApiError(error, navigate);
      } finally {
        setLoading(false); // Set loading false after fetching
      }
    };

    fetchPatients();
  }, [navigate]);

  // Handle patient delete
  const handleDelete = async (patientId) => {
    try {
      await deletePatient(patientId, navigate);
      setPatients(patients.filter((patient) => patient._id !== patientId));
      if (isFormVisible) setIsFormVisible(false);
    } catch (error) {
      handleApiError(error, navigate);
    }
  };

  // Callback to refresh patient list after save
  const handlePatientSave = () => {
    const fetchPatients = async () => {
      setLoading(true); // Set loading true when fetching
      try {
        const patientsData = await getPatientsByDoctor(navigate);
        setPatients(patientsData);
        setIsFormVisible(false);
      } catch (error) {
        handleApiError(error, navigate);
      } finally {
        setLoading(false); // Set loading false after fetching
      }
    };
    fetchPatients();
  };

  // Handle Add or Edit button click
  const handleAddClick = () => {
    setSelectedPatient(null);
    setIsFormVisible(true);
    setIsDetailsVisible(false);
  };

  // Show patient details
  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setIsDetailsVisible(true);
    setIsFormVisible(false);
  };

  // Go back to the list of patients
  const handleBackToList = () => {
    setIsDetailsVisible(false);
    setSelectedPatient(null);
    if (isFormVisible) setIsFormVisible(false);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 text-center tracking-tight">
        Patients Management
      </h1>

      {/* Add Button */}
      {!isDetailsVisible && !isFormVisible && (
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={handleAddClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            + Add Patient
          </button>
        </div>
      )}

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center text-xl font-semibold text-gray-700">
          Loading patients...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center text-xl font-semibold text-red-600 mb-6">
          {error}
        </div>
      )}

      {/* Patients List */}
      {!isDetailsVisible &&
        !isFormVisible &&
        !loading &&
        patients.length > 0 && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">
              Patients List
            </h2>
            <ul className="space-y-4 sm:space-y-6">
              {patients.map((patient) => (
                <PatientItem
                  key={patient._id}
                  patient={patient}
                  onViewDetails={handleViewDetails}
                  onEditClick={() => {
                    setSelectedPatient(patient);
                    setIsFormVisible(true);
                    setIsDetailsVisible(false);
                  }}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          </>
        )}

      {/* No Patients Found */}
      {!isDetailsVisible &&
        !isFormVisible &&
        !loading &&
        patients.length === 0 && (
          <div className="text-center text-xl font-semibold text-gray-700">
            No patients found.
          </div>
        )}

      {/* Patient Details View */}
      {isDetailsVisible && selectedPatient && (
        <div className="max-w-full md:max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mb-6">
          <PatientDetails
            patient={selectedPatient}
            onEditClick={() => {
              setIsFormVisible(true);
              setIsDetailsVisible(false);
            }}
            onDelete={handleDelete}
            onBack={handleBackToList}
          />
        </div>
      )}

      {/* Patient Form for Adding or Editing */}
      {isFormVisible && (
        <div className="max-w-full md:max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg mb-6">
          <PatientForm
            selectedPatient={selectedPatient}
            onPatientSave={handlePatientSave}
            onCancel={() => setIsFormVisible(false)}
          />
        </div>
      )}
    </div>
  );
};

export default PatientsList;
