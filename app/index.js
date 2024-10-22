import express from "express";
import products from "./routes/products.js";
import parser from "./middlewares/multer.js";
const app = express();

app.use(parser);
app.use("/api/products", products);

export default app;
