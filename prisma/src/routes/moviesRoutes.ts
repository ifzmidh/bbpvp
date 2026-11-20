import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/moviesController";
import { validationBodyMovies } from "../validations/validation";

const router = express.Router({ caseSensitive: true, strict: true });

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", validationBodyMovies, createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
