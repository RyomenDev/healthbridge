// Utility function to handle API errors
export const handleApiError = (error, navigate) => {
  const defaultErrorMessage =
    "An unknown error occurred. Please try again later.";

  // Handle unauthenticated user case
  if (
    error === "User is not authenticated" ||
    error.message.includes("not authenticated") ||
    error.includes("not authenticated") ||
    error.response?.status === 401
  ) {
    console.warn("User is not authenticated. Redirecting to login...");
    alert("Your session has expired. Please log in again.");
    navigate("/login");
    return;
  }

  // Handle forbidden access case
  if (error.response?.status === 403) {
    console.warn("Forbidden access. Redirecting to unauthorized page...");
    alert("You do not have permission to access this resource.");
    navigate("/unauthorized");
    return;
  }

  // Handle resource not found case
  if (error.response?.status === 404) {
    console.warn("Resource not found. Redirecting to not-found page...");
    alert("The requested resource could not be found.");
    navigate("/not-found");
    return;
  }

  // Handle server errors (5xx)
  if (error.response?.status >= 500) {
    console.error("Server error encountered:", error.response?.data);
    alert("There is a problem with the server. Please try again later.");
    return;
  }

  // Handle validation errors (e.g., bad request)
  if (error.response?.status === 400) {
    console.error(
      "Validation error:",
      error.response?.data?.message || error.message
    );
    alert(
      error.response?.data?.message ||
        "Invalid request. Please check your input."
    );
    return;
  }

  // Handle network errors or timeout
  if (error.message === "Network Error" || error.code === "ECONNABORTED") {
    console.error("Network error or timeout:", error.message);
    alert(
      "Network error or timeout. Please check your internet connection and try again."
    );
    return;
  }

  // Handle other cases and fallback
  const errorMessage =
    error.response?.data?.message || error.message || defaultErrorMessage;

  console.error("Unhandled API Error:", errorMessage, error.response);
  alert(errorMessage);

  // Re-throw the error for further processing if needed
  throw error.response?.data || error.message || error;
};

// export const handleApiError = (error, navigate) => {
//   if (error === "User is not authenticated") {
//     console.log("ERROR & Navigate", error);
//     navigate("/protected");
//   }
//   console.error(
//     "API Error:",
//     error.response?.data?.message || error.message || "Unknown error"
//   );
//   throw error.response?.data || error.message || error;
// };

// export const handleApiError = (error) => {
//   console.error(
//     "API Error:",
//     error.response?.data?.message || error.message || "Unknown error"
//   );
//   throw error.response?.data || error.message || error;
// };
