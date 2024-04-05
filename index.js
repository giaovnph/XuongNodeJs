import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";
import { errorHandler, errorHandlerNotFound } from "./utils/erroHandler.js";
import connect from "./utils/connect.js";
import { PORT, URI_DB } from "./utils/env.js";

const app = express();
app.use(cors());
app.use(express.json());

connect(URI_DB);

router(app)

app.use(errorHandlerNotFound, errorHandler);

app.listen(PORT || 8000, () => {
  console.log(`Server is running successfully ${PORT} ! `);
});
