function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector('.widget');
const changeColorBtn = document.querySelector('.change-color')
const colorValue = document.querySelector('.color');
changeColorBtn.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    widget.style.backgroundColor = newColor;
    colorValue.textContent = newColor;
})
