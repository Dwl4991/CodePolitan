const form = document.querySelector("#form");
const input = document.querySelector("input");
const list = document.querySelector("#notes");

input.addEventListener("change", (e) => {
  console.log("nilai berubah");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = "";
});

// const lis = document.querySelector("li");
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }

list.addEventListener("click", (e) => {
  e.target.nodeName === "LI" && e.target.remove();
});
