import filterCarsPromise from "./promise.js";

const helper = (x, y) =>
  filterCarsPromise(x, y)
    .then(console.log)
    .catch((err) => console.log(err.message));

//filterCarsPromise(color, page)

// Buku berwarna dengan 50 halaman.
helper(true, 50);

const run = async () => {
  // Buku tidak berwarna dengan 250 halaman.
  await helper(false, 250);

  // Buku berwarna dengan 30 halaman.
  await helper(true, 30);
};

run();
