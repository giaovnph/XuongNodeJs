import { Router } from "express";
import productRouter from "./product.js";
import authRouter from "./auth.js";
import categoryRoute from "./category.js";

const router = Router();

router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/category", categoryRoute)

export default router;