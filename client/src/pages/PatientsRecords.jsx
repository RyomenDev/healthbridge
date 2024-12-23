import PatientList from "../components/PatientsRecords/PatientList.jsx";

const DoctorDashboard = () => {
  const doctorId = "64c0f91b1a234567890abcde";

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Doctor Dashboard</h1>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Patient Records
        </h2>
        <PatientList doctorId={doctorId} />
      </section>
    </div>
  );
};

export default DoctorDashboard;
