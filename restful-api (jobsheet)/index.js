import express from "express";
import { router as productRouters } from "./routes/products.js";
const app = express();

app.use(express.json());
app.use("/products", productRouters);

const port = 3000;
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);
