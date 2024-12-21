import { app } from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";

// Load environment variables from .env file
dotenv.config({ path: "./env" });

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
