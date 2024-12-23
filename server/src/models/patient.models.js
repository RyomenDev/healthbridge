import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: [0, "Age cannot be negative"],
    },
    bloodGroup: {
      type: String,
      required: true,
      match: /^(A|B|AB|O)[+-]$/,
      uppercase: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other", "Prefer not to say"],
      required: true,
    },
    EmailAddress: {
      type: String,
      //   unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
      required: false,
      default: null,
    },
    phone: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    emergencyContact: {
      //   name: { type: String, required: true },
      phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Invalid number"],
      },
    },
    medicalHistory: {
      type: [String],
      default: [],
    },
    hasChronicDiseases: {
      type: Boolean,
      default: false,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);

//  admittedIn: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Hospital",
//     },
