import { type Request, type Response } from "express";
import prisma from "../config/utils";
import {
  CategoriesUncheckedCreateInput,
  CategoriesUncheckedUpdateInput,
} from "../../prisma/generated/models";
import handleError from "../config/helper";

const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.categories.findMany();

    if (!categories)
      res.json({ message: "Data not found at categories", data: [] });

    return res.json({
      message: "Get All Categories Success",
      data: categories,
    });
  } catch (err) {
    console.error(err);
    return handleError(res, err);
  }
};

const getCategoryById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = req.params.id;
    const category = await prisma.categories.findUnique({
      where: { id },
    });
    if (!category) res.status(404).json({ message: "Category Not Found" });

    res
      .status(200)
      .json({ message: "Get Category By Id Success", data: category });
  } catch (err) {
    console.error(err);
    return handleError(res, err);
  }
};

const createCategory = async (
  req: Request<{}, {}, CategoriesUncheckedCreateInput>,
  res: Response,
) => {
  try {
    const { name, description } = req.body;

    const data = { name, description };

    const Category = await prisma.categories.create({
      data: {
        name,
        description: description,
      },
    });

    res
      .status(200)
      .json({ message: "Create Category Success", data: Category });
  } catch (err) {
    console.error(err);
    return handleError(res, err);
  }
};

const updateCategory = async (
  req: Request<{ id: string }, {}, CategoriesUncheckedUpdateInput>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const category = await prisma.categories.update({
      where: { id },
      data: req.body,
    });
    res
      .status(200)
      .json({ message: "Update Category Success", data: category });

    if (!category) res.status(404).json({ message: "Category Not Found" });
  } catch (err) {
    console.error(err);
    return handleError(res, err);
  }
};

const deleteCategory = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const { id } = req.params;
    const category = await prisma.categories.delete({
      where: { id },
    });
    res
      .status(200)
      .json({ message: "Delete Category Success", data: category });

    if (!category) res.status(404).json({ message: "Category Not Found" });
  } catch (err) {
    console.error(err);
    return handleError(res, err);
  }
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
