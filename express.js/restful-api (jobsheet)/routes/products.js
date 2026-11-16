import express from "express";
export const router = express.Router();

import {
  getAllProducts,
  getAllProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.get("/", getAllProducts);
router.get("/:id", getAllProductsId);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
