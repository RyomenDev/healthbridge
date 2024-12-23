import { useState, useEffect } from "react";
import { getPatientsByDoctor, deletePatient } from "../../api/index";
import PatientItem from "./PatientItem";
import { handleApiError } from "../../utils/handleApiError";
import PatientDetails from "./PatientDetails";
import PatientForm from "./PatientForm";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  // Fetch patients for the doctor
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatientsByDoctor();
        setPatients(patientsData);
      } catch (error) {
        handleApiError(error);
      }
    };

    fetchPatients();
  }, []);

  // Handle patient delete
  const handleDelete = async (patientId) => {
    try {
      await deletePatient(patientId);
      setPatients(patients.filter((patient) => patient._id !== patientId));
      if (isFormVisible) setIsFormVisible(false);
    } catch (error) {
      handleApiError(error);
    }
  };

  // Callback to refresh patient list after save
  const handlePatientSave = () => {
    const fetchPatients = async () => {
      try {
        const patientsData = await getPatientsByDoctor();
        setPatients(patientsData);
        setIsFormVisible(false);
      } catch (error) {
        handleApiError(error);
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
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Patients</h1>

      {!isDetailsVisible && !isFormVisible && (
        <>
          <button
            onClick={handleAddClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Patient
          </button>

          <h2 className="text-2xl font-semibold text-gray-700 mt-8">
            Patients List
          </h2>
          <ul className="mt-4 space-y-4">
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

      {/* Patient Details View */}
      {isDetailsVisible && selectedPatient && (
        <PatientDetails
          patient={selectedPatient}
          onEditClick={() => {
            setIsFormVisible(true);
            setIsDetailsVisible(false);
          }}
          onDelete={handleDelete}
          onBack={handleBackToList}
        />
      )}

      {/* Patient Form for Adding or Editing */}
      {isFormVisible && (
        <PatientForm
          selectedPatient={selectedPatient}
          onPatientSave={handlePatientSave}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default PatientsList;
