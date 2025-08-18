// const container = document.getElementById("container");

// const grid = document.createElement("div");
// grid.classList.add("grid");

// for (let i = 0; i < 16 * 16; i++) {
//   const cell = document.createElement("div");
//   cell.classList.add("cell");
//   grid.appendChild(cell);
// }
// container.appendChild(grid);

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// const cells = document.querySelectorAll(".cell");
// cells.forEach((cell) => {
//   cell.dataset.darkLevel = 0; // initialize dark level
//   cell.dataset.baseColor = ""; // store base color
//   cell.addEventListener("mouseenter", () => {
//     cell.classList.add("hover");
//     let level = Number(cell.dataset.darkLevel);
//     if (level < 10) {
//       level += 1;
//       cell.dataset.darkLevel = level;

//       // calculate color: random base RGB darkened progressively
//       const baseColor = getRandomColor();
//       // apply darkening by multiplying each RGB channel by (1 - 0.1*level)
//       const rgb = baseColor.match(/\d+/g).map(Number); // [r,g,b]
//       const darkened = rgb.map((c) => Math.floor(c * (1 - 0.1 * level)));
//       cell.style.backgroundColor = `rgb(${darkened[0]}, ${darkened[1]}, ${darkened[2]})`;
//     }
//   });
// });
// const cells = [...cellsNodelist];

// console.log(cells);

// cells.forEach((cell) =>
//   cell.addEventListener(
//     "mouseenter",
//     () => (cell.style.backgroundColor = "grey")
//   )
// );

// const button = document.querySelector(".grid-size-button");
// console.log(button);

// const changeGridSize = function () {
//   let input = prompt("What should be the number of squares per side?");
//   if (input === null) return alert("Please enter a value");
//   let size = Number(input);
//   if (size > 99)
//     return alert("Enter the number of squares per side (maximum 100):");
//   grid.innerHTML = "";
//   for (let i = 0; i < size * size; i++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.style.width = `calc(100% / ${size})`;
//     cell.style.height = `calc(100% / ${size})`;
//     grid.appendChild(cell);
//   }
//   container.appendChild(grid);

//   const cells = document.querySelectorAll(".cell");
//   cells.forEach((cell) =>
//     cell.addEventListener("mouseenter", () => {
//       cell.classList.add("hover");
//       cell.style.backgroundColor = getRandomColor();
//     })
//   );
// };
// button.addEventListener("click", changeGridSize);

////////////////////////
const container = document.getElementById("container");
const grid = document.createElement("div");
const button = document.querySelector(".grid-size-button");
grid.classList.add("grid");
container.appendChild(grid);

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(rgbString, level) {
  const rgb = rgbString.match(/\d+/g).map(Number);
  const darkened = rgb.map((c) => Math.floor(c * (1 - 0.1 * level)));
  return `rgb(${darkened[0]}, ${darkened[1]}, ${darkened[2]})`;
}

function createCell(size) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.width = `calc(100% / ${size})`;
  cell.style.height = `calc(100% / ${size})`;

  cell.dataset.darkLevel = 0;
  cell.dataset.baseColor = getRandomColor();

  cell.addEventListener("mouseenter", () => {
    let level = Number(cell.dataset.darkLevel);
    if (level < 10) {
      level += 1;
      cell.dataset.darkLevel = level;
      cell.style.backgroundColor = darkenColor(cell.dataset.baseColor, level);
      cell.classList.add("hover");
    }
  });

  return cell;
}

function generateGrid(size) {
  grid.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    grid.appendChild(createCell(size));
  }
}

function changeGridSize() {
  const input = prompt("What should be the number of squares per side?");
  if (input === null) return;
  const size = Number(input);
  if (isNaN(size) || size <= 0 || size > 100) {
    return alert("Please enter a valid number (1-100).");
  }
  generateGrid(size);
}

button.addEventListener("click", changeGridSize);
generateGrid(16);
