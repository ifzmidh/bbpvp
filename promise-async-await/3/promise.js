export default function filterCarsPromise(colorful, amoutOfPage) {
  return new Promise((resolve, reject) => {
    let books = [
      { name: "shincan", totalPage: 50, isColorful: true },
      { name: "Kalkulus", totalPage: 250, isColorful: false },
      { name: "Doraemon", totalPage: 50, isColorful: true },
      { name: "Algoritma", totalPage: 250, isColorful: false },
    ];

    amoutOfPage >= 40
      ? resolve(
          books.filter(
            (x) => x.totalPage == amoutOfPage && x.isColorful == colorful,
          ),
        )
      : reject(new Error("Maaf buku di bawah 40 halaman tidak tersedia"));
  });
}
