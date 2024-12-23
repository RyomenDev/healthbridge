import axios from "axios";
import conf from "../conf/conf.jsx";
import { handleApiError } from "../utils/handleApiError";
import { getHeaders } from "../utils/authUtils";

const SERVER_API_URL = conf.SERVER_API_URL;
const API_URL = `${SERVER_API_URL}/records`;

// Create a new patient
export const createPatient = async (patientData, navigate) => {
  //   console.log(patientData);
  try {
    const headers = await getHeaders();
    const response = await axios.post(`${API_URL}/patients`, patientData, {
      headers,
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    handleApiError(error, navigate);
  }
};

// Get all patients for a specific doctor
export const getPatientsByDoctor = async (navigate) => {
  //   console.log("FETCHING Patient");
  try {
    const headers = await getHeaders();
    const response = await axios.get(`${API_URL}/patients`, {
      headers,
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    handleApiError(error, navigate);
  }
};

// Update a specific patient's details
export const updatePatient = async (patientId, updatedData, navigate) => {
  //   console.log("updating-patient");
  try {
    const headers = await getHeaders();
    const response = await axios.put(
      `${API_URL}/patients/${patientId}`,
      updatedData,
      { headers }
    );
    return response.data;
  } catch (error) {
    handleApiError(error, navigate);
  }
};

// Delete a specific patient
export const deletePatient = async (patientId, navigate) => {
  try {
    const headers = await getHeaders();
    const response = await axios.delete(`${API_URL}/patients/${patientId}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    handleApiError(error, navigate);
  }
};

// Get a specific patient's details by ID
// export const getPatientById = async (patientId) => {
//   console.log("particular patient");
//   try {
//     const headers = await getHeaders();
//     const response = await axios.get(`${API_URL}/patients/${patientId}`, {
//       headers,
//     });
//     return response.data;
//   } catch (error) {
//     handleApiError(error);
//   }
// };
