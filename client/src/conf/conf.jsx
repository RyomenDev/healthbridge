const conf = {
  MONGODB_URI: String(import.meta.env.VITE_APPWRITE_URL),
  SERVER_API_URL: String(import.meta.env.VITE_SERVER_API_URL),
};

export default conf;
