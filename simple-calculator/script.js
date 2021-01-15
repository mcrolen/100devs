const buttons = document.querySelectorAll('.math')
const result = document.querySelector('#answerField');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    computeAnswer(button.id);
  });
});

function computeAnswer(mode) {
  const num1 = Number(document.querySelector('#num1').value);
  const num2 = Number(document.querySelector('#num2').value);
  
  if (mode === 'add') {
    result.innerText = num1 + num2;
  } else if (mode === 'subtract') {
    result.innerText = num1 - num2;
  } else if (mode === 'multiply') {
    result.innerText = num1 * num2;
  } else if (mode === 'divide') {
    result.innerText = num1 / num2;
  } else if (mode === 'modulo') {
    result.innerText = num1 % num2;
  } else {
    result.innerText = 'Error!';
  }
}