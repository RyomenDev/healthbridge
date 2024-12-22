import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";

import conf from "./src/conf/conf.js";

const PORT = conf.PORT || 5000;
// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
  }
};

startServer();
