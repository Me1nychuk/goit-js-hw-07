const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
  if (e.currentTarget.value.trim() === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = e.currentTarget.value;
    }
})
console.log("/////TASK_3/////");

console.log("/////////////////");