import express from "express";
export const router = express.Router();

let movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
  },
];

//READ - http.method(get)
router.get("/", (req, res) => res.json(movies));

router.get("/:id", (req, res) => {
  const movie = movies.find((x) => x.id === parseInt(req.params.id));

  movie
    ? res.status(200).json(movie)
    : res.status(404).json({ message: "Movie not found" });
});

//CREATE - http.method(post)
router.post("/", (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    title: req.body.title,
    year: req.body.year,
  };

  const { title, year } = req.body;
  (!title && !year) ||
    (typeof year !== "number" &&
      res.status(400).json({ message: "Input tidak valid" }));

  movies.push(newMovie);

  res.status(201).json(newMovie);
});

//UPDATE - http.method(put)
router.put("/:id", (req, res) => {
  const movie = movies.find((x) => x.id === parseInt(req.params.id));

  !movie && res.status(404).json({ message: "Id not found" });

  const { title, year } = req.body;
  (!title && !year) ||
    (typeof year !== "number" &&
      res.status(400).json({ message: "Input tidak valid" }));

  movie.title = title;
  movie.year = year;
  res.status(201).json(movie);
});

//DELETE - http.method(delete)
router.delete("/:id", (req, res) => {
  const movie = movies.find((x) => x.id === parseInt(req.params.id));

  !movie && res.status(404).json({ message: "Id not found" });

  res.status(204).json({ message: "Delete successful" });
});
