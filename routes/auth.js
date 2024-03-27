import { Router } from "express";
import { lognin, register } from "../controllers/auth.js";
const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/lognin", lognin);


export default authRouter;