import { type Request, type Response } from "express";
import prisma from "../config/utils";
import {
  MoviesCreateManyInput,
  MoviesUncheckedUpdateInput,
} from "../../prisma/generated/models";

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movies.findMany({
      include: {
        category: true, // Includes the related Categories object
      },
    });
    if (!movies) res.json({ message: "Data not found at Movies", data: [] });

    return res.json({ message: "Get All Movie Sucess", data: movies });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

const getMovieById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;
    const movie = await prisma.movies.findUnique({
      where: { id },
    });
    if (!movie) res.status(404).json({ message: "Movie Not Found" });

    res.status(200).json({ message: "Get Movie By Id Success", data: movie });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

const createMovie = async (
  req: Request<{}, {}, MoviesCreateManyInput>,
  res: Response,
) => {
  try {
    const { name, year, categoryId } = req.body;

    const data = { name, year, categoryId };

    if (categoryId !== undefined && categoryId !== null) {
      data.categoryId = categoryId;
    }

    const movie = await prisma.movies.create({
      data: {
        name,
        year: year,
        categoryId: categoryId,
      },
      include: {
        category: true,
      },
    });

    res.status(200).json({ message: "Create Movie Success", data: movie });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

const updateMovie = async (
  req: Request<{ id: string }, {}, MoviesUncheckedUpdateInput>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const movie = await prisma.movies.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json({ message: "Update Movie Success", data: movie });

    if (!movie) res.status(404).json({ message: "Movie Not Found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

const deleteMovie = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const movie = await prisma.movies.delete({
      where: { id },
    });
    res.status(200).json({ message: "Delete Movie Success", data: movie });

    if (!movie) res.status(404).json({ message: "Movie Not Found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
};

export { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie };
