import express from "express";
import { createProducts, GetAllPrducts, GetAllProductsById } from "../Controller/ShoppingCartController.js";
const router=express.Router();

router.get("/",GetAllPrducts);

router.post("/",createProducts);

router.get("/:id",GetAllProductsById);

export default router;