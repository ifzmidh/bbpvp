// src/middleware/validation.ts
import { type Request, type Response, type NextFunction } from "express";

const validationBodyMovies = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, year } = req.body ?? {};

  if (name === undefined || year === undefined) {
    return res.status(400).json({ message: "Wajib ada body Name & Year" });
  }

  return next();
};

const validationBodyCategories = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name } = req.body ?? {};

  if (name === undefined) {
    return res.status(400).json({ message: "Wajib ada body name" });
  }

  return next();
};

export { validationBodyMovies, validationBodyCategories };
