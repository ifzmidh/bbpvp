import { Response } from "express";
import { PrismaClientKnownRequestError } from "../../prisma/generated/internal/prismaNamespace";

const handleError = (res: Response, err: unknown) => {
  console.error(err);

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
    return res.status(404).json({ message: "Movie Not Found" });
  }

  if (err instanceof PrismaClientKnownRequestError && err.code === "P2003") {
    return res.status(400).json({ message: "Invalid categoryId" });
  }

  const message = err instanceof Error ? err.message : "Internal Server Error";
  return res.status(500).json({ message });
};

export default handleError;
