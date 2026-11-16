import readBooks from "./callback.js";

const books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];

//readBooks(time, book, callback)

const run = (sisaWaktu, i = 0) =>
  //same as = if (books[i]) ...
  books[i] && readBooks(sisaWaktu, books[i], (x) => run(x, i + 1));

run(10000);
