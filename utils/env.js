import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

const { PORT, URI_DB, JWT_SECRET } = process.env;

export { PORT, URI_DB, JWT_SECRET };