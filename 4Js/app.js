// if (1 + 1 === 2) {
//   console.log("pertanyaan benar");
// }

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("angka lebih besar dari 0.5");
// }
// if (angka <= 0.5) {
//   console.log("angka lebih kecil dari 0.5");
// }

// const iniHari = prompt("isikan hari").toLowerCase();

// if (iniHari === "senin") {
//   console.log("selamat bekerja");
// } else if (iniHari === "sabtu") {
//   console.log("smoga jangan cepat berlalu");
// }

const password = prompt("buat password");

//Password harus sepanjang 6 karakter
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("password valid");
  } else {
    console.log("password tidak boleh ada spasi");
  }
} else {
  console.log("password miniml 6 karakter");
}
