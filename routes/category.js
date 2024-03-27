import { Router } from "express";
import CategoryController from "../controllers/category.js";

const categoryRoute = Router()

categoryRoute.get('/',CategoryController.getCategory);
categoryRoute.get('/:id',CategoryController.getCategoryById);
categoryRoute.post('/',CategoryController.postCategory);
categoryRoute.put('/product/:id',CategoryController.updateCategory);
categoryRoute.put('/hide/:id',CategoryController.softRemoveCategory);
categoryRoute.delete('/:id',CategoryController.removeCategory);

export default categoryRoute