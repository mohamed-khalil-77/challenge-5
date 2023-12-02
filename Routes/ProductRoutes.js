import express from "express";
import {addProduct,getAll,editProduct,deletProduct} from "../Controllers/ProductController.js";

const ProductRoutes = express.Router();
ProductRoutes.get("/",getAll);
ProductRoutes.post("/add",addProduct);
ProductRoutes.post("/edit/:id",editProduct);
ProductRoutes.get("/delete/:id",deletProduct);

export default ProductRoutes;