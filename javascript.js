const container = document.getElementById("container");

const grid = document.createElement("div");
grid.classList.add("grid");

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}
container.appendChild(grid);

const cells = document.querySelectorAll(".cell");
// const cells = [...cellsNodelist];

// console.log(cells);

// cells.forEach((cell) =>
//   cell.addEventListener(
//     "mouseenter",
//     () => (cell.style.backgroundColor = "grey")
//   )
// );

cells.forEach((cell) =>
  cell.addEventListener("mouseenter", () => cell.classList.add("hover"))
);
