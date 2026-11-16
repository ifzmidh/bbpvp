import readBooksPromise from "./promise.js";

const books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

//readBooksPromise(time, book)

let time = 10000;

for (const x of books) {
  time = await readBooksPromise(time, x);
}
