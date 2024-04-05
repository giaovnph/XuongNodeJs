import { Router } from "express";
import { createCategory, getCategories, getCategoryById, removeCategoryById, softRemoveCategoryById, updateCategoryById } from "../controllers/category.js";
import validBodyRequest from "../middlewares/validRequestBody.js";
import { validatorCategory } from "../validations/category.js";
import { checkAuth } from "../middlewares/CheckAuth.js";
import { checkIsAdmin } from "../middlewares/CheckIsAdmin.js";

const categoryRoute = Router()

categoryRoute.get('/', getCategories);
categoryRoute.get('/:id', getCategoryById);

categoryRoute.use(checkAuth, checkIsAdmin);
categoryRoute.put('/hide/:id', softRemoveCategoryById);
categoryRoute.delete('/:id', removeCategoryById);


categoryRoute.use(validBodyRequest(validatorCategory))
categoryRoute.post('/', createCategory);
categoryRoute.put('/product/:id', updateCategoryById);

export default categoryRoute