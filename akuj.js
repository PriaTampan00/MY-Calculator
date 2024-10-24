// all clear
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  // delete
  function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  // input
  function appendToDisplay(character) {
    let display = document.getElementById('display');
    display.value += character;
  }
  
  // calc
  function calculate() {
    let display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  // fact
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

document.querySelectorAll('input[type="number]').forEach(input =>{
  input.oninput = () =>{
    if(input.value.lenght > input.maxLenght) input.value = input.value.slice(0, input.maxLenght);
  };
});

window.alert("Situs ini hanyalah sebuah uji coba dan masih dalam pengembangan")