import { Router } from "express";
import { productControllers } from "../controllers/products.js";
const products = Router();

products.get("/", productControllers.getAllProducts);
products.get("/:id", productControllers.getProduct);
products.post("/", productControllers.createProduct);
products.patch("/:id", productControllers.updateProduct);
products.put("/:id", productControllers.updateProduct);
products.delete("/:id", productControllers.deleteProduct);

export default products;
