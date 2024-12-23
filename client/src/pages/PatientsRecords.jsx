import PatientList from "../components/PatientsRecords/PatientList.jsx";

const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-12">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:text-blue-900 transition-all duration-300">
          Dashboard
        </h1>
      </header>

      <section className="bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Patient Records
        </h2>
        <PatientList />
      </section>
    </div>
  );
};

export default DoctorDashboard;
