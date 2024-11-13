const personIcon = document.querySelector(".bi-person-bounding-box");
const maleIcon = document.querySelector(".bi-gender-male");
const femaleIcon = document.querySelector(".bi-gender-female");
const reset = document.querySelector(".bi-box-arrow-left");

const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const male = document.getElementById("male");
const female = document.getElementById("female");

const calculate = document.getElementById("calculate");

const BMIAnswer = document.getElementById("bmi-ans");
const result = document.getElementById("health");

male.addEventListener("click", () => {
  maleIcon.style.display = 'block';
  femaleIcon.style.display = 'none';
  personIcon.style.display = 'none';

  male.style.backgroundColor = "#299cfb";
  female.style.backgroundColor = "#ebebeb";
});

female.addEventListener("click", () => {
  maleIcon.style.display = 'none';
  femaleIcon.style.display = 'block';
  personIcon.style.display = 'none';

  female.style.backgroundColor = "#299cfb";
  male.style.backgroundColor = "#ebebeb";
});

const emptyError = () => {
  return "Please input Value";
};

const runCalculations = () => {
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);

  if (weightValue === "" || heightValue === "") {
    emptyError();
  }

  if (isNaN(weightValue) || isNaN(heightValue)) {
    return "Please enter valid Number";
  }

  if (weightValue && heightValue) {
    const heightInM = heightValue / 100;

    const bmi = weightValue / (heightInM * heightInM);

    return bmi;

    BMIAnswer.textContent = "Your BMI is: " + bmi.toFixed(2);
  }
};

calculate.addEventListener("click".runCalculations());
