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
  maleIcon.style.display = "block";
  femaleIcon.style.display = "none";
  personIcon.style.display = "none";

  male.style.backgroundColor = "#299cfb";
  female.style.backgroundColor = "#ebebeb";
});

female.addEventListener("click", () => {
  maleIcon.style.display = "none";
  femaleIcon.style.display = "block";
  personIcon.style.display = "none";

  female.style.backgroundColor = "#299cfb";
  male.style.backgroundColor = "#ebebeb";
});

const emptyError = () => {
  alert("Please input Value");
};

const NanError = () => {
  alert("Please input a Number");
};

const runCalculations = () => {
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);

  if (weight.Value === "" || height.Value === "") {
    emptyError();
    return;
  }

  if (isNaN(weightValue) || isNaN(heightValue)) {
    NanError();
    return;
  }

  if (weightValue && heightValue) {
    const bmi = weightValue / (heightValue / 100) ** 2;

    BMIAnswer.textContent = "Your BMI is: " + bmi.toFixed(2);

    // Determine health status based on BMI
    if (bmi < 18.5) {
      result.textContent = "Underweight";
      result.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      result.textContent = "Normal weight";
      result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
      result.textContent = "Overweight";
      result.style.color = "orange";
    } else {
      result.textContent = "Obesity";
      result.style.color = "red";
    }
  }
};

calculate.addEventListener("click", (event) => {
  event.preventDefault();
  runCalculations();
});

reset.addEventListener("click", () => {
  weight.value = "";
  height.value = "";
  BMIAnswer.textContent = "";
  result.textContent = "";
});
