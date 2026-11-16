function periksaDokter(nomorAntrian, callback) {
  nomorAntrian > 10 ? callback(false) : callback(true);
}

periksaDokter(20, function (cek) {
  cek
    ? console.log("Saya menunggu di klinik saja")
    : console.log("Saya pergi dulu sebentar");
});
