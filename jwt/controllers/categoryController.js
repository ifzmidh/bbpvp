// controllers/categoryController.js
import { pool } from "../config/db.js";

// GET /api/categories
const getAllCategories = async (req, res, next) => {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM categories ORDER BY id DESC",
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

// GET /api/categories/:id
const getByIdCategory = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const [rows] = await pool.execute("SELECT * FROM categories WHERE id = ?", [
      id,
    ]);
    if (rows.length === 0)
      return res.status(404).json({ message: "Category tidak ditemukan" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

// POST /api/categories (protected)
const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const userId = req.user ? req.user.id : null; // siapa yang membuat (opsional)

    const [result] = await pool.execute(
      "INSERT INTO categories (name, description, userId) VALUES (?, ?, ?)",
      [name, description || null, userId],
    );
    res
      .status(201)
      .json({ id: result.insertId, name, description: description || null });
  } catch (err) {
    next(err);
  }
};

// PUT /api/categories/:id (protected)
const updateCategory = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, description } = req.body;

    const fields = [];
    const values = [];
    if (name !== undefined) {
      fields.push("name = ?");
      values.push(name);
    }
    if (description !== undefined) {
      fields.push("description = ?");
      values.push(description);
    }

    if (fields.length === 0)
      return res.status(400).json({ message: "Nothing to update" });

    values.push(id);
    const sql = `UPDATE categories SET ${fields.join(", ")} WHERE id = ?`;
    const [result] = await pool.execute(sql, values);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Category tidak ditemukan" });
    res.json({ message: "Category diperbarui" });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/categories/:id (protected)
const deleteCategory = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const [result] = await pool.execute("DELETE FROM categories WHERE id = ?", [
      id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Category tidak ditemukan" });
    res.json({ message: "Category dihapus" });
  } catch (err) {
    next(err);
  }
};

export {
  getAllCategories,
  getByIdCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
