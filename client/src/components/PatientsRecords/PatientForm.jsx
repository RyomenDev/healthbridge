import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPatient, updatePatient } from "../../api/index";
import { handleApiError } from "../../utils/handleApiError";
import { patientFormData } from "../../Data/patientFormData";

const PatientForm = ({ selectedPatient, onPatientSave, onCancel }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  // Initialize the form with selected patient data if it's for editing
  useEffect(() => {
    if (selectedPatient) {
      setIsEditing(true);
      // Loop through form data and set values
      patientFormData.forEach((field) => {
        if (selectedPatient[field.name]) {
          setValue(field.name, selectedPatient[field.name]);
        }
      });
    } else {
      reset();
    }
  }, [selectedPatient, reset, setValue]);

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      if (isEditing) {
        await updatePatient(selectedPatient._id, data);
      } else {
        await createPatient(data);
      }
      onPatientSave(); // Callback to refresh the patient list
      reset(); // Clear form
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg"
    >
      {patientFormData.map((field) => (
        <div className="form-group" key={field.name}>
          <label className="block text-lg font-medium text-gray-700">
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              {...register(field.name, field.validation)}
              className="input-field"
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "checkbox" ? (
            <input
              type="checkbox"
              {...register(field.name)}
              className="checkbox-field"
            />
          ) : (
            <input
              {...register(field.name, field.validation)}
              type={field.type}
              className="input-field"
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <div className="flex justify-between">
        <button
          type="submit"
          className="submit-button w-1/2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {isEditing ? "Update Patient" : "Create Patient"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="cancel-button w-1/2 py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PatientForm;
