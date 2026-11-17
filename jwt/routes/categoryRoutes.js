// routes/categoryRoutes.js
import express from "express";
import {
  getAllCategories,
  getByIdCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
import { auth } from "../middlewares/auth.js";
import {
  validateCreateCategory,
  validateUpdateCategory,
} from "../middlewares/validation.js";

const router = express.Router();

router.get("/", getAllCategories); // public
router.get("/:id", getByIdCategory); // public
router.post("/", auth, validateCreateCategory, createCategory); // protected
router.put("/:id", auth, validateUpdateCategory, updateCategory); // protected
router.delete("/:id", auth, deleteCategory); // protected

export default router;
