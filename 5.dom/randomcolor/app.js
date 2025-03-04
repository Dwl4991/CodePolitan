const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
  const newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", colorrize);
}

const headings = document.querySelectorAll("h1");

for (let heading of headings) {
  heading.addEventListener("click", colorrize);
}

function colorrize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}
