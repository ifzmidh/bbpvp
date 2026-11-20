import dotenv from "dotenv";
dotenv.config(); // Or dotenv.config({ path: "prisma/.env" }) if .env is inside prisma/

import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
