import express from "express";

export const app = express();

app.get("/lingkaran-tabung{/:jarijari}{/:tinggiTabung}", (req, res) => {
  const circleRadius = parseInt(req.params.jarijari);
  const heightTube = parseInt(req.params.tinggiTabung);

  (!circleRadius || !heightTube) &&
    res.status(400).send("Wajib memakai params jarijari & tinggiTabung");

  const pi = 3.14;
  //volume tabung
  const volume = () => pi * circleRadius ** 2 * heightTube;

  //luas alas tabung
  const baseArea = () => pi * circleRadius ** 2;

  //keliling alas tabung
  const circumference = () => 2 * (pi * circleRadius);

  res.status(200).json({
    "Jari Jari": circleRadius,
    Tinggi: heightTube,
    "Volume Tabung": volume(),
    "Luas Alas Tabung": baseArea(),
    "Keliling Alas Tabung": circumference(),
  });
});

const dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  {
    id: 4,
    name: "Benzema",
    umur: 34,
    pekerjaan: "Pemain Bola",
    jenisKelamin: "L",
  },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  {
    id: 9,
    name: "Shohei Ohtani",
    umur: 28,
    pekerjaan: "Pemain Baseball",
    jenisKelamin: "L",
  },
  {
    id: 11,
    name: "Maria Sharapova",
    umur: 35,
    pekerjaan: "Petenis",
    jenisKelamin: "P",
  },
];

app.get("/data-orang", (req, res) => {
  const age = parseInt(req.query.umur);
  const gender = req.query.gender;

  (!age || !gender) &&
    res.status(400).send("Wajib memakai params umur & gender");

  const result = dataOrang
    .filter(
      (x) =>
        x.umur >= age && x.jenisKelamin.toUpperCase() === gender.toUpperCase(),
    )
    .map(
      (x, index) =>
        `${index + 1}. ${x.name} - Pekerjaan: ${x.pekerjaan} - Umur: ${x.umur} Tahun`,
    );

  !result && res.status(400).send("Maaf Data Tidak Ditemukan");

  res.status(200).send(result);
});

app.get("/data-orang{/:id}", (req, res) => {
  const id = parseInt(req.params.id);

  !id && res.status(400).send("Wajib memakai params id");

  const result = dataOrang.find((x) => x.id === id);

  !result && res.status(400).send("Maaf Data Tidak Ditemukan");

  res
    .status(200)
    .send(
      `${result.jenisKelamin === "P" ? "Ibu" : "Pak"} ${result.name} adalah seorang ${result.pekerjaan} yang berusia ${result.umur} tahun`,
    );
});

app.listen(3000);
