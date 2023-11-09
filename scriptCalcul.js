function calculateRectangle() {
  const lengthInput = document.getElementById("length");
  const widthInput = document.getElementById("width");
  const perimeterResult = document.getElementById("perimeterResult");
  const areaResult = document.getElementById("areaResult");
  const diagonalResult = document.getElementById("diagonalResult");
  const perimeterTypeResult = document.getElementById("perimeterTypeResult");

  const length = parseFloat(lengthInput.value);
  const width = parseFloat(widthInput.value);

  if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) { // Змінили умову тут
    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(length ** 2 + width ** 2);

    perimeterResult.textContent = perimeter.toFixed(2);

    let perimeterType = "";
    if (perimeter >= 1 && perimeter <= 50) {
      perimeterType = "sweet hut of branches";
    } else if (perimeter > 50 && perimeter <= 90) {
      perimeterType = "little joy";
    } else if (perimeter > 100 && perimeter <= 260) {
      perimeterType = "average comfort";
    } else if (perimeter > 270 && perimeter <= 500) {
      perimeterType = "great wealth";
    }

    perimeterTypeResult.textContent = `${perimeterType}`;

    areaResult.textContent = area.toFixed(2);
    diagonalResult.textContent = diagonal.toFixed(2);

    lengthInput.classList.remove("input-error");
    widthInput.classList.remove("input-error");
  } else {
    lengthInput.classList.add("input-error");
    widthInput.classList.add("input-error");

    perimeterResult.textContent = "Please check the correctness of the data";
    areaResult.textContent = "Please check the correctness of the data";
    diagonalResult.textContent = "Please check the correctness of the data";
    perimeterTypeResult.textContent = "Joker";
  }
}

document.getElementById("length").addEventListener("input", calculateRectangle);
document.getElementById("width").addEventListener("input", calculateRectangle);

