// Utility function to handle API errors
// handleApiError.js
// export const handleApiError = (error, navigate) => {
//   if (error === "User is not authenticated") {
//     console.log("ERROR", error);
//     navigate("/protected");
//   }
//   console.error(
//     "API Error:",
//     error.response?.data?.message || error.message || "Unknown error"
//   );
//   throw error.response?.data || error.message || error;
// };

export const handleApiError = (error) => {
  console.error(
    "API Error:",
    error.response?.data?.message || error.message || "Unknown error"
  );
  throw error.response?.data || error.message || error;
};
