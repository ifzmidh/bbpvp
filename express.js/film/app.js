import express from "express";
const app = express();
const port = 3000;

import { router as moviesRouter } from "./movies.js";

app.use(express.json());

app.get("/", (req, res) => res.send("Hello world dari Express kelas PBL 123"));

app.use("/api/movies", moviesRouter);

app.listen(port, () =>
  console.log(`Server berjalan di http://localhost:${port}`),
);
