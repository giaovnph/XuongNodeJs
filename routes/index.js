import productRouter from "./product.js";
import authRouter from "./auth.js";
import categoryRoute from "./category.js";


export  function router(app) {
    app.use("/api/products", productRouter);
    app.use("/api/auth", authRouter);
    app.use("/api/category", categoryRoute)
}


