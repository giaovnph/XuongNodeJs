import { Router } from "express";
import productController from "../controllers/product.js";

const productRouter = Router();

productRouter.get("/", productController.getProducts);
productRouter.post("/", productController.createProduct);
productRouter.get("/:id", productController.getProductById);
productRouter.put("/update/:id", productController.updateProductById);
productRouter.put("/hide/:id", productController.softRemoveProductById);
productRouter.delete("/:id", productController.removeProductById);

export default productRouter;