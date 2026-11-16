function panggilNamaPasien(nomer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nomer < 10
        ? resolve(`Pasien nomer ${nomer}, silahkan masuk ke ruangan`)
        : reject(`Pasien nomer ${nomer} tidak terdaftar`);
    }, 1000);
  });
}

// panggilNamaPasien(11)
//   .then((pesan) => console.log(`Success ${pesan}`))
//   .catch((err) => console.error(err));

const periksaDataPasien = (id) => {
  const dataPasien = [{ id: 1, name: "John", gender: "Laki-Laki" }];

  return new Promise((resolve, reject) => {
    const pasien = dataPasien.find((x) => x.id === id);
    pasien === undefined ? reject("data pasien tidak ada") : resolve(pasien);
  });
};

periksaDataPasien(5)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
