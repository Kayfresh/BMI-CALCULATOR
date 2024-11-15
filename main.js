const personIcon = document.querySelector(".bi-person-bounding-box");
const maleIcon = document.querySelector(".bi-gender-male");
const femaleIcon = document.querySelector(".bi-gender-female");
const reset = document.querySelector(".bi-arrow-counterclockwise");

const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");

const male = document.getElementById("male");
const female = document.getElementById("female");

const calculate = document.getElementById("calculate");

const BMIAnswer = document.getElementById("bmi-ans");
const result = document.getElementById("health");
const recommendation = document.getElementById("recommend");

let maleselected = false;
let femaleselected = false;

const resetGender = () => {
  maleIcon.style.display = "none";
  femaleIcon.style.display = "none";
  personIcon.style.display = "block";
  male.style.backgroundColor = "#dceffe";
  female.style.backgroundColor = "#dceffe";
  maleselected = false;
 femaleselected = false;
};

male.addEventListener("click", () => {
  if (maleselected === false) {
    resetGender();

    maleIcon.style.display = "block";
    femaleIcon.style.display = "none";
    personIcon.style.display = "none";

    male.style.backgroundColor = "#299cfb";
    female.style.backgroundColor = "#ebebeb";

    maleselected = true;
    femaleselected = false;
  } else {
    resetGender();
  }
});

female.addEventListener("click", () => {
  if (femaleselected === false) {

    maleIcon.style.display = "none";
    femaleIcon.style.display = "block";
    personIcon.style.display = "none";

    female.style.backgroundColor = "#299cfb";
    male.style.backgroundColor = "#ebebeb";

    femaleselected = true;
    maleselected = false;
  } else {
    resetGender();
  }
});

const emptyError = () => {
  alert("Please input Value(s)");
};

const NanError = () => {
  alert("Please input Number(s)");
};

const runCalculations = () => {
  const ageValue = parseInt(age.value);
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);

  
  if (weight.Value === "" || height.Value === "" || age.value === "") {
    emptyError();
    calculate.style.backgroundColor = "#299cfb";
    calculate.style.color = "#fff";
    return;
  }
  
  if (isNaN(weightValue) || isNaN(heightValue) || isNaN(ageValue)) {
    NanError();
    calculate.style.backgroundColor = "#299cfb";
    calculate.style.color = "#fff";
    return;
  }
  
  if (!maleselected && !femaleselected ) {
    alert ("Please select a Gender");
    return;
  }

  if (weightValue && heightValue) {
    const bmi = weightValue / (heightValue / 100) ** 2;

    BMIAnswer.textContent = "Your BMI is: " + bmi.toFixed(2);

    // Determine health status based on BMI
    if (bmi < 18.5) {
      result.textContent = "Underweight";
      result.style.color = "blue";
      recommendation.textContent = "Eat more and exercise more.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.textContent = "Normal weight";
      result.style.color = "green";
      recommendation.textContent = "Well done, Maintain a healthy lifestyle";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.textContent = "Overweight but not Obese";
      result.style.color = "lime";
      recommendation.textContent = "Reduce food amount and work out more";
    } else if (bmi >= 30 && bmi <= 34.9) {
      result.textContent = "Obese Class I";
      reset.style.color = "yellow";
      recommendation.textContent =
        "Work out even more and reduce fatty foods and amount of food eaten daily";
    } else if (bmi >= 35 && bmi <= 39.9) {
      result.textContent = "Obese Class II";
      reset.style.color = "Orange";
      recommendation.textContent =
        "You are on a dangerous path, get a gym membership and eat healthy food";
    } else {
      result.textContent = "Obese Class III (Severe Obesity)";
      result.style.color = "red";
      recommendation.textContent =
        "You are at a risk of having a Heart attack, stop fatty foods and see a Physician";
    }
  }
};

calculate.addEventListener("click", (event) => {
  // calculate.style.backgroundColor = "#fff";
  // calculate.style.color = "#299cfb";
  event.preventDefault();
  runCalculations();
});

reset.addEventListener("click", () => {
  age.value = "";
  personIcon.style.display = "block";
  maleIcon.style.display = "none";
  femaleIcon.style.display = "none";
  female.style.backgroundColor = "#dceffe";
  male.style.backgroundColor = "#dceffe";
  weight.value = "";
  height.value = "";
  BMIAnswer.textContent = "0.00";
  result.textContent = "-----";
  result.style.color = "#000";
  recommendation.textContent = ""
});
