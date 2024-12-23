import admin from "../conf/firebase-admin-config.js";

// Middleware to verify Firebase ID Token
export async function verifyToken(req, res, next) {
  const idToken = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!idToken) {
    console.log("Unauthorized: No token provided");
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    // console.log("Verifying token...");
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken; // Store decoded token in request for further use
    // console.log("Token verified, user authenticated");
    next();
  } catch (error) {
    console.log("Unauthorized: Invalid token", error);
    return res.status(401).send("Unauthorized: Invalid token");
  }
}
