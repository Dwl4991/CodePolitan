document.querySelector("button").addEventListener("click", (e) => {
  console.log(e);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("tombol arah atas");
      break;

    case "ArrowDown":
      console.log("tombol arah bawah");
      break;

    case "ArrowLeft":
      console.log("tombol arah Kiri");
      break;

    case "ArrowRight":
      console.log("tombol arah Kanan");
      break;
    default:
      console.log("diabaikan");
  }
});
// input.addEventListener("keyup", () => {
//   console.log("tombol di lepas");
// });
