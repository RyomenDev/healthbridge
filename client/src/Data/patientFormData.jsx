export const patientFormData = [
  {
    name: "name",
    label: "Name",
    type: "text",
    validation: { required: "Name is required" },
  },
  {
    name: "diagnosedWith",
    label: "Diagnosed With",
    type: "text",
    validation: { required: "Diagnosis is required" },
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    validation: { required: "Address is required" },
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    validation: {
      required: "Age is required",
      min: { value: 0, message: "Age cannot be negative" },
    },
  },
  {
    name: "bloodGroup",
    label: "Blood Group",
    type: "select",
    options: [
      { label: "Select Blood Group", value: "" },
      { label: "A+", value: "A+" },
      { label: "A-", value: "A-" },
      { label: "B+", value: "B+" },
      { label: "B-", value: "B-" },
      { label: "AB+", value: "AB+" },
      { label: "AB-", value: "AB-" },
      { label: "O+", value: "O+" },
      { label: "O-", value: "O-" },
    ],
    validation: { required: "Blood group is required" },
  },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: [
      { label: "Male", value: "Male" },
      { label: "Female", value: "Female" },
      { label: "Other", value: "Other" },
      { label: "Prefer not to say", value: "Prefer not to say" },
    ],
    validation: { required: "Gender is required" },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    validation: {
      pattern: {
        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: "Please enter a valid email address",
      },
    },
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    validation: {
      required: "Phone number is required",
      pattern: { value: /^\d{10}$/, message: "Phone number must be 10 digits" },
    },
  },
  {
    name: "emergencyContact.phone",
    label: "Emergency Contact Phone",
    type: "text",
    validation: {
      required: "Emergency contact phone is required",
      pattern: {
        value: /^\d{10}$/,
        message: "Emergency contact phone must be 10 digits",
      },
    },
  },
  {
    name: "hasChronicDiseases",
    label: "Has Chronic Diseases",
    type: "checkbox",
    validation: {},
  },
];
