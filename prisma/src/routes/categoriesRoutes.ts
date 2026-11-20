import express from "express";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoriesController";
import { validationBodyCategories } from "../validations/validation";

const router = express.Router({ caseSensitive: true, strict: true });

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", validationBodyCategories, createCategory);
router.put("/:id", updateCategory);
router.post("/:id", deleteCategory);

export default router;
