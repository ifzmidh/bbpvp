export default function filterCarsPromise(color, year) {
  return new Promise((res, rej) => {
    const cars = [
      { brand: "toyota", name: "avanza", year: 2019, color: "black" },
      { brand: "daihatsu", name: "xenia", year: 2017, color: "silver" },
      { brand: "lamborgini", name: "gallardo", year: 2018, color: "gery" },
      { brand: "honda", name: "brio", year: 2019, color: "black" },
      { brand: "toyota", name: "agya", year: 2020, color: "black" },
      { brand: "honda", name: "jazz", year: 2018, color: "grey" },
      { brand: "suzuki", name: "ertiga", year: 2017, color: "silver" },
    ];

    var filteredCars = cars.filter((x) => x.color === color && x.year === year);
    filteredCars.length > 0
      ? res(filteredCars)
      : rej(new Error("Maaf data mobil tersebut tidak ditemukan."));
  });
}
