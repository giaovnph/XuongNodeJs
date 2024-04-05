import { Router } from "express";
import { createProduct, getProductById, getProducts, removeProductById, softRemoveProductById, updateProductById } from "../controllers/product.js"
import validBodyRequest from "../middlewares/validRequestBody.js";
import { validatorProduct } from "../validations/product.js";
import { checkAuth } from "../middlewares/CheckAuth.js";
import { checkIsAdmin } from "../middlewares/CheckIsAdmin.js";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);

productRouter.use(checkAuth, checkIsAdmin);
productRouter.put("/hide/:id", softRemoveProductById);
productRouter.delete("/:id", removeProductById);


productRouter.use(validBodyRequest(validatorProduct))
productRouter.post("/", createProduct);
productRouter.put("/update/:id", updateProductById);

export default productRouter;