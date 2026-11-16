export default function readBooks(time, book, callback) {
  console.log(`Saya membaca ${book.name}`);

  setTimeout(() => {
    let sisaWaktu = time;

    if (time >= book.timeSpent) {
      sisaWaktu = time - book.timeSpent;
      console.log(
        `Saya sudah membaca ${book.name}, Sisa waktu saya ${sisaWaktu}`,
      );
      callback(sisaWaktu);
    } else {
      console.log("waktu saya habis");
      callback(time);
    }
  }, book.timeSpent);
}
