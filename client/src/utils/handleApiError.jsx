// Utility function to handle API errors
export const handleApiError = (error) => {
  console.error(
    "API Error:",
    error.response?.data?.message || error.message || "Unknown error"
  );
  throw error.response?.data || error.message || error;
};
