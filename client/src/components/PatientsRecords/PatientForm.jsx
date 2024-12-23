import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPatient, updatePatient } from "../../api/index";
import { handleApiError } from "../../utils/handleApiError";
import { patientFormData } from "../../Data/patientFormData";
import { useNavigate } from "react-router-dom";

const PatientForm = ({ selectedPatient, onPatientSave, onCancel }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const [formError, setFormError] = useState(""); // State to manage error messages
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPatient) {
      setIsEditing(true);
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
    setIsLoading(true); // Set loading to true on submit
    setFormError(""); // Reset any previous errors
    try {
      if (isEditing) {
        await updatePatient(selectedPatient._id, data, navigate);
      } else {
        await createPatient(data, navigate);
      }
      onPatientSave();
      reset(); // Reset form after successful submission
    } catch (error) {
      setFormError(
        "An error occurred while saving the patient details. Please try again."
      );
      handleApiError(error);
    } finally {
      setIsLoading(false); // Set loading to false after API call
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 max-w-3xl mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-xl transition-all duration-300"
    >
      {patientFormData.map((field) => (
        <div className="form-group" key={field.name}>
          <label className="block text-base sm:text-lg font-medium text-gray-800 mb-2">
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              {...register(field.name, field.validation)}
              className="input-field w-full px-3 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="checkbox-field mt-2 rounded-sm border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <input
              {...register(field.name, field.validation)}
              type={field.type}
              className="input-field w-full px-3 py-2 sm:py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {errors[field.name] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      {formError && (
        <div className="text-red-600 text-sm mt-4">{formError}</div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-between mt-6">
        <button
          type="submit"
          className="submit-button w-full sm:w-1/2 py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
          disabled={isLoading} // Disable button during loading
        >
          {isLoading ? (
            <span className="spinner-border animate-spin">Submitting...</span>
          ) : isEditing ? (
            "Update Patient"
          ) : (
            "Create Patient"
          )}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="cancel-button w-full sm:w-1/2 py-3 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PatientForm;
