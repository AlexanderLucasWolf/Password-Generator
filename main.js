let slider = document.getElementById('range');
let sliderOutput = document.getElementById('character-length');
let passwordOutput = document.getElementById('final-password');

//Slider + Slider Value

sliderOutput.innerHTML = slider.value;
slider.oninput = function() {
  sliderOutput.innerHTML = this.value;
  let currentLength = slider.value
  console.log(currentLength)
}

slider.addEventListener("mousemove", function() {
  let sliderX = (slider.value * 4);
  let sliderColor = "linear-gradient(90deg, rgb(164, 255, 175)" + sliderX + "%, rgb(17, 16, 22)" + sliderX + "%)";
  slider.style.background = sliderColor;
})

//Values for password
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "$", "%", "&", "?", "-", "_", "€", "+", "#"];

//Check Checkbox

let upperCaseElement = document.getElementById("uppercaseCheck");
let lowerCaseElement = document.getElementById("lowercaseCheck");
let numbersElement = document.getElementById("numbersCheck");
let symbolsElement = document.getElementById("symbolsCheck");

let upperCaseChecked = false;
let lowerCaseChecked = false;
let numbersChecked = false;
let symbolsChecked = false;

function isChecked() {
  if (upperCaseElement.checked){
    upperCaseChecked = true;
  }else{
    upperCaseChecked = false;
  }

  if (lowerCaseElement.checked){
    lowerCaseChecked = true;
  }else{
  lowerCaseChecked = false;
  }

  if (numbersElement.checked){
    numbersChecked = true;
  }else{
    numbersChecked = false;
  }

  if (symbolsElement.checked){
    symbolsChecked = true;
  }else{
    symbolsChecked = false;
  }
}


//Generate password

let password = ""

function random() {
  randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {

    case 0:
      if (upperCaseChecked == true) {
        randomNumber = Math.floor(Math.random() * (uppercase.length - 1));
        password += uppercase[randomNumber];
      } else{
        random()
      }
      break;

    case 1:
    if (lowerCaseChecked == true) {
      randomNumber = Math.floor(Math.random() * (lowercase.length - 1));
      password += lowercase[randomNumber];
    } else{
      random()
    }
      break;

    case 2:
    if (numbersChecked == true) {
      randomNumber = Math.floor(Math.random() * (numbers.length - 1));
      password += numbers[randomNumber];
    } else{
      random()
    }
    break;

    case 3:
    if (symbolsChecked == true) {
      randomNumber = Math.floor(Math.random() * (symbols.length - 1));
      password += symbols[randomNumber];
    } else{
      random()
    }
    break;
  }
}

function generatePassword(){
  password = "";
  isChecked();
  for (let i = 0; i < slider.value; i++) {
    random();
  }
  console.log(password);
  passwordOutput.innerHTML = password;
}

//Initial Code

function initial(){
  let sliderX = (slider.value * 4);
  let sliderColor = "linear-gradient(90deg, rgb(164, 255, 175)" + sliderX + "%, rgb(17, 16, 22)" + sliderX + "%)";
  slider.style.background = sliderColor;
}

initial();
isChecked();
