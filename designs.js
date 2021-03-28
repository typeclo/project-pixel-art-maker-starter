// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const sizePicker = document.getElementById("sizePicker");
const pixelCanvas = document.getElementById("pixelCanvas");
const colorPicker = document.getElementById("colorPicker")

sizePicker.onsubmit = makeGrid;

function makeGrid(event) {
  event.preventDefault();
  pixelCanvas.innerHTML = "";

  const height = event.target.inputHeight.value;
  const width = event.target.inputWidth.value;

  for (i = 0; i < height; i++) {
    const row = document.createElement("tr");
    for (j = 0; j < width; j++) {
      const cell = document.createElement("td");
      cell.onclick = setCellColor
      row.appendChild(cell);
    }
    pixelCanvas.appendChild(row);
  }
}

function setCellColor() {
    this.style.backgroundColor = colorPicker.value
}