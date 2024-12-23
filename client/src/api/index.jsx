import { LoginUser } from "./authApi.jsx";
import { fetchUserProfile, updateUserProfile } from "./userApi.jsx";
import { createPaymentIntent } from "./stripeApi.jsx";
import { registerCall } from "./retellAi.jsx";
import {
  createPatient,
  getPatientsByDoctor,
  //   getPatientById,
  updatePatient,
  deletePatient,
} from "./doctorsApi";

export {
  LoginUser,
  fetchUserProfile,
  updateUserProfile,
  createPaymentIntent,
  registerCall,
  createPatient,
  getPatientsByDoctor,
  //   getPatientById,
  updatePatient,
  deletePatient,
};
