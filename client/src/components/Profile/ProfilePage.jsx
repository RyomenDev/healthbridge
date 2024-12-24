import { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../../api/index";
import ProfileForm from "./ProfileForm";
import ProfileDetails from "./ProfileDetails";
import { useNavigate } from "react-router-dom";
import { handleApiError } from "../../utils/handleApiError";

const ProfilePageMain = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    picture: "", // Profile picture if available
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Fetch user data on component mount
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const data = await fetchUserProfile(navigate);
        setUserData(data);
      } catch (error) {
          console.error("Error fetching user profile", error);
          handleApiError(error, navigate);
      }
    };
    getUserProfile();
  }, [navigate]);

  // Validate input fields
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        }
        break;
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = "Please enter a valid email address.";
        }
        break;
      case "age":
        if (value && (isNaN(value) || value < 0)) {
          error = "Age must be a positive number.";
        }
        break;
      case "gender":
        if (value && !["male", "female", "other"].includes(value)) {
          error = "Please select a valid gender.";
        }
        break;
      case "phone":
        if (value && !/^\d{10}$/.test(value)) {
          error = "Please enter a valid 10-digit phone number.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Handle field changes
  const handleFieldChange = (name, value) => {
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    const newErrors = {};
    Object.keys(userData).forEach((field) => {
      const error = validateField(field, userData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const updatedData = await updateUserProfile(userData, navigate);
      console.log("Profile updated successfully:", updatedData);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/the%20state%20of%20customer%20care%20in%202022/the%20state%20of%20customer%20care%20in%202022_1132839148_thumb_1536x1536.jpg)",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl w-full max-w-4xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          User Profile
        </h1>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Personal Information
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsEditing((prev) => !prev)}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
              {userData.picture && (
                <img
                  src={userData.picture}
                  alt="Profile"
                  className="w-20 h-20 rounded-full shadow-lg border-2 border-gray-300"
                />
              )}
            </div>
          </div>
          {isEditing ? (
            <ProfileForm
              userData={userData}
              errors={errors}
              handleFieldChange={handleFieldChange}
              handleSubmit={handleSubmit}
            />
          ) : (
            <ProfileDetails userData={userData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageMain;
