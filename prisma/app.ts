import express, { Request, Response, type Express } from "express";
import moviesRouter from "./src/routes/moviesRoutes";
import categoriesRouter from "./src/routes/categoriesRoutes";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/categories", categoriesRouter);
app.get("/", (req: Request, res: Response) => {
  res.json("This is root endpoint");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
