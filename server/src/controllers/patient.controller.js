import { Patient } from "../models/patient.models.js";
import { User } from "../models/user.model.js";

const findUserByUid = async (uid) => {
  try {
    const user = await User.findOne({ uid });
    if (!user) {
      console.log("user not found");
      return res.status(404).json({ message: "User not found" });
    }
    return user; // If found, return user, else return null
  } catch (error) {
    throw new Error("Error fetching user");
  }
};

// Create a new patient
export const createPatient = async (req, res) => {
  //   console.log("createPatient", req.body);

  try {
    const user = await findUserByUid(req.user.uid);
    // console.log(user._id);
    // Add the doctorID to the patient data
    const patientData = {
      ...req.body,
      doctorId: user._id,
    };
    // console.log(patientData);
    const patient = new Patient(patientData);
    // console.log(patient);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    // console.log(error);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      //   console.log(validationErrors);
      return res.status(400).json({ error: validationErrors });
    }
    res.status(400).json({ error: error.message });
  }
};

// Get all patients for a specific doctor
export const getPatientsByDoctor = async (req, res) => {
  //   console.log("sending patient");
  try {
    const user = await findUserByUid(req.user.uid);
    const patients = await Patient.find({ doctorId: user._id });
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a specific patient's details
export const updatePatient = async (req, res) => {
  //   console.log("updating");
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.patientId,
      req.body,
      { new: true }
    );
    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a specific patient
export const deletePatient = async (req, res) => {
  //   console.log("deleting");

  try {
    const deletedPatient = await Patient.findByIdAndDelete(
      req.params.patientId
    );
    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific patient by ID
// export const getPatientById = async (req, res) => {
//   try {
//     const patient = await Patient.findById(req.params.patientId);
//     if (!patient) {
//       return res.status(404).json({ message: "Patient not found" });
//     }
//     res.status(200).json(patient);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
