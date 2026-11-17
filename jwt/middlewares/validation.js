// middlewares/validation.js
const validateCreateCategory = (req, res, next) => {
  const { name } = req.body;
  const errors = [];
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("name wajib minimal 2 karakter");
  }

  if (errors.length) return res.status(400).json({ errors });
  next();
};

const validateUpdateCategory = (req, res, next) => {
  const { name } = req.body;
  const errors = [];
  if (
    name !== undefined &&
    (typeof name !== "string" || name.trim().length < 2)
  ) {
    errors.push("name wajib minimal 2 karakter");
  }

  if (errors.length) return res.status(400).json({ errors });
  next();
};

const validateCreateMovie = (req, res, next) => {
  const { title, year } = req.body;
  const errors = [];
  if (!title || typeof title !== "string" || title.trim().length < 1) {
    errors.push("title wajib");
  }

  if (
    year !== undefined &&
    (!Number.isInteger(year) || year < 1980 || year > 2026)
  ) {
    errors.push("year harus integer antara tahun 1980 - 2026");
  }

  if (errors.length) return res.status(400).json({ errors });
  next();
};

const validateUpdateMovie = (req, res, next) => {
  const { title, year } = req.body;
  const errors = [];
  if (
    title !== undefined &&
    (typeof title !== "string" || title.trim().length < 1)
  ) {
    errors.push("title tidak boleh kosong");
  }

  if (
    year !== undefined &&
    (!Number.isInteger(year) || year < 1980 || year > 2026)
  ) {
    errors.push("year harus integer antara tahun 1980 - 2026");
  }

  if (errors.length) return res.status(400).json({ errors });
  next();
};

export {
  validateCreateCategory,
  validateUpdateCategory,
  validateCreateMovie,
  validateUpdateMovie,
};
