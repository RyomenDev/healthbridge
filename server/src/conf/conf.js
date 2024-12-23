import dotenv from "dotenv";
dotenv.config();

const conf = {
  MONGODB_URI: String(process.env.MONGO_DB_URL),
  STRIPE_SECRET_KEY: String(process.env.STRIPE_SECRET_KEY),
  PORT: String(process.env.PORT),
  CORS_ORIGIN: String(process.env.CORS_ORIGIN),
};

export default conf;
