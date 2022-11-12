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

let checkedAmount = 0;
let passwordStrength = 0;

function isChecked() {
  if (upperCaseElement.checked){
    upperCaseChecked = true;
    checkedAmount++;
  }else{
    upperCaseChecked = false;
  }

  if (lowerCaseElement.checked){
    lowerCaseChecked = true;
    checkedAmount++;
  }else{
  lowerCaseChecked = false;
  }

  if (numbersElement.checked){
    numbersChecked = true;
    checkedAmount++;
  }else{
    numbersChecked = false;
  }

  if (symbolsElement.checked){
    symbolsChecked = true;
    checkedAmount++;
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

//Calculate Strength

function calculateStrength() {

  checkedAmount = 0;
  isChecked();
  if (slider.value > 11 && checkedAmount > 3) {
    passwordStrength = 4;
  } else if (slider.value > 17 && checkedAmount > 2) {
    passwordStrength = 4;
  } else if (slider. value > 8 && checkedAmount > 3){
    passwordStrength = 3;
  } else if (slider. value > 10 && checkedAmount > 2){
    passwordStrength = 3;
  } else if (slider. value > 20 && checkedAmount > 1){
    passwordStrength = 3;
  } else if (slider. value > 24 && checkedAmount >= 1){
    passwordStrength = 2;
  } else if (slider. value > 6 && checkedAmount > 3){
    passwordStrength = 2;
  } else if (slider. value > 6 && checkedAmount > 2){
    passwordStrength = 2;
  } else if (slider. value > 5 && checkedAmount > 1){
    passwordStrength = 2;
  } else if (slider. value > 5 && checkedAmount >= 1){
    passwordStrength = 1;
  } else if (slider. value > 4 && checkedAmount >= 2){
    passwordStrength = 1;
  } else {
    passwordStrength = 0;
  }

  console.log(passwordStrength);
  if (passwordStrength >= 3) {
    document.getElementById('strength-icon').style.color = "var(--clr-strength-four)";
    document.getElementById('strength-text').innerHTML = "Strong!"
    document.getElementById('strength-text').style.color = "var(--clr-strength-four)";
  } else if(passwordStrength >= 2) {
    document.getElementById('strength-icon').style.color = "var(--clr-strength-three)";
    document.getElementById('strength-text').innerHTML = "Good!"
    document.getElementById('strength-text').style.color = "var(--clr-strength-three)";
  } else if(passwordStrength >= 1) {
    document.getElementById('strength-icon').style.color = "var(--clr-strength-two)";
    document.getElementById('strength-text').innerHTML = "Okay!"
    document.getElementById('strength-text').style.color = "var(--clr-strength-two)";
  } else if(passwordStrength >= 0) {
    document.getElementById('strength-icon').style.color = "var(--clr-strength-one)";
    document.getElementById('strength-text').innerHTML = "Bad!"
    document.getElementById('strength-text').style.color = "var(--clr-strength-one)";
  } else{
    document.getElementById('strength-icon').style.color = "var(--clr-preset)";
    document.getElementById('strength-text').innerHTML = " "
    document.getElementById('strength-text').style.color = "var(--clr-preset)";
  }
}

//Copy text

function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }

  let elementText = htmlElement.innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);

  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}

document.querySelector("#copy-icon").onclick =
function() {
  copyText(document.querySelector("#final-password"));
}


//Main Generation

function generatePassword(){
  password = "";
  isChecked();
  for (let i = 0; i < slider.value; i++) {
    random();
  }
  passwordOutput.innerHTML = password;
  document.getElementById("final-password").style.color = "rgb(255, 255, 255)";
  calculateStrength();
  checkedAmount = 0;
}

//Initial Code

function initial(){
  let sliderX = (slider.value * 4);
  let sliderColor = "linear-gradient(90deg, rgb(164, 255, 175)" + sliderX + "%, rgb(17, 16, 22)" + sliderX + "%)";
  slider.style.background = sliderColor;
}

initial();
isChecked();
