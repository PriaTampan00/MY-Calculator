function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(character) {
  let display = document.getElementById('display');
  display.value += character;
}

function calculate() {
  let display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function factorial() {
  let display = document.getElementById('display');
  let number = parseInt(display.value);
  
  if (isNaN(number) || number < 0) {
      display.value = 'Error';  // Menangani input yang tidak valid
      return;
  }
  
  let result = 1;
  for (let i = 1; i <= number; i++) {
      result *= i;
  }
    
  display.value = result;
}

window.alert("Situs ini hanyalah sebuah uji coba dan masih dalam pengembangan")
