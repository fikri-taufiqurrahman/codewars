// Definisikan string
let kata = "contoh";

// Ubah karakter pada indeks tertentu
let indeks = 2;
let karakterBaru = "j";
let kataBaru = kata.substring(0, indeks) + karakterBaru + kata.substring(indeks + 1);

// Tampilkan hasilnya
console.log(kataBaru); // Out