function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount){
    const placeForBoxes = document.getElementById('boxes');
    let size = 30;
    destroyBoxes();
    for (let index = 0; index < amount; index++) {
        const newBox = document.createElement('div');
        newBox.style.width = `${size}px`;
        newBox.style.height = `${size}px`;
        newBox.style.backgroundColor = getRandomHexColor();
        placeForBoxes.appendChild(newBox);
        size += 10;
    }
}
document.querySelector('[data-create]').addEventListener('click', () => {
    const inputValue = document.querySelector('#controls input');
    const amountBoxes = parseInt(inputValue.value);
    if (isNaN(amountBoxes) || amountBoxes > 100 || amountBoxes < 1) {
        alert('Please enter a number between 1 and 100.')
        return;
    }
    
    createBoxes(amountBoxes);
   
    inputValue.innerHTML = "";
});
function destroyBoxes(){
    const placeForBoxes = document.getElementById('boxes');
    placeForBoxes.innerHTML = "";
}
document.querySelector('[data-destroy]').addEventListener("click", destroyBoxes);
