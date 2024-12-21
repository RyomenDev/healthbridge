import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

// Ensure that all necessary environment variables are present
if (
  !process.env.FIREBASE_PROJECT_ID ||
  !process.env.FIREBASE_PRIVATE_KEY_ID ||
  !process.env.FIREBASE_PRIVATE_KEY
) {
  console.error("Missing Firebase environment variables!");
  process.exit(1); // Exit the process if critical env vars are missing
}

const serviceAccount = {
  type: "service_account",
  project_id: String(process.env.FIREBASE_PROJECT_ID),
  private_key_id: String(process.env.FIREBASE_PRIVATE_KEY_ID),
  private_key: String(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, "\n"),
  client_email: String(process.env.FIREBASE_CLIENT_EMAIL),
  client_id: String(process.env.FIREBASE_CLIENT_ID),
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: String(process.env.FIREBASE_CLIENT_CERT_URL),
};

// console.log("serviceAccount", serviceAccount);

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
