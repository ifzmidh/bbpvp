import filterCarsPromise from "./promise.js";

//filterCarsPromise(color, year)
const helper = (x, y) =>
  filterCarsPromise(x, y)
    .then(console.log)
    .catch((err) => console.log(err.message));

//mobil berwarna hitam tahun 2019
helper("black", 2019);

//mobil berwarna silver tahun 2017
helper("silver", 2017);

const run = async () => {
  //mobil berwarna abu-abu tahun 2019 (async/await)
  await helper("grey", 2019);

  //mobil berwarna abu-abu tahun 2018 (async/await)
  await helper("grey", 2018);

  //mobil berwarna hitam tahun 2020 (async/await)
  await helper("black", 2020);
};
run();
