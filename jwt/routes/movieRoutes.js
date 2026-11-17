// routes/movieRoutes.js
import express from "express";
import {
  getAllMovies,
  getByIdMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js";
import { auth } from "../middlewares/auth.js";
import {
  validateCreateMovie,
  validateUpdateMovie,
} from "../middlewares/validation.js";

const router = express.Router();

router.get("/", getAllMovies); // public
router.get("/:id", getByIdMovie); // public
router.post("/", auth, validateCreateMovie, createMovie); // protected
router.put("/:id", auth, validateUpdateMovie, updateMovie); // protected
router.delete("/:id", auth, deleteMovie); // protected

export default router;
