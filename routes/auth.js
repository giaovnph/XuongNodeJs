import { Router } from "express";
import { login, register } from "../controllers/auth.js";
import { validatorLogin, validatorRegister } from "../validations/auth.js";
import validBodyRequest from "../middlewares/validRequestBody.js";
const authRouter = Router();

authRouter.post("/register", validBodyRequest(validatorRegister), register);
authRouter.post("/login", validBodyRequest(validatorLogin), login);

export default authRouter;