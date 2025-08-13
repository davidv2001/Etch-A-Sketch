// Get the original container
const container = document.getElementById("container");

// Create the grid container
const grid = document.createElement("div");
grid.classList.add("grid");

// Generate 16x16 cells (256 total)
for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}

// Append the grid container to the original frame
container.appendChild(grid);
