const codeDisplay = document.getElementById('codeDisplay');
const buttons = document.querySelectorAll('.keypad button');

let userInput = '';
const correctPin = '0708';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (userInput.length < 4) {
      userInput += button.textContent;
      codeDisplay.textContent = userInput;
    }

    if (userInput.length === 4) {
      if (userInput === correctPin) {
        alert('Correct! Redirecting...');
        window.location.href = 'index.html';
      } else {
        codeDisplay.textContent = 'oops, try again';
        userInput = '';
      }
    }
  });
});
