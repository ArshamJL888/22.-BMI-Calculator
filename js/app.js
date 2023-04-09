
// import
let weightRange = document.getElementById('weightRange');
let heightRange = document.getElementById('heightRange');
let userWeight = document.querySelector('.userWeight');
let userHeight = document.querySelector('.userHeight');
let bmiNumber = document.getElementById('bmi-number');
let bmiStatus = document.getElementById('bmi-status');
let weight = 70;
let height = 170;
let bmi = 24.2;


// Events
weightRange.addEventListener('input', weightHandler);
heightRange.addEventListener('input', heightHandler);


// Functions 
function weightHandler() {
    weight = weightRange.value
    userWeight.textContent = weight;
    bmiHandler();
}

function heightHandler() {
    height = heightRange.value;
    userHeight.textContent = height;
    bmiHandler();
}
function bmiHandler() {
    bmi = weight / ((height / 100) ** 2);
    bmiNumber.textContent = bmi.toFixed(1);
    if (bmi < 18.5) {
        bmiNumber.style.color = '#FDD835'
        bmiStatus.textContent = 'Under Weight'
    }
    else if (bmi < 24.9) {
        bmiNumber.style.color = '#4CAF50'
        bmiStatus.textContent = 'Normal Weight'
    }
    else if (bmi < 29.9){
        bmiNumber.style.color = '#EF6C00' 
        bmiStatus.textContent = 'Over weight'
    }
    else if (bmi < 39.9) {
        bmiNumber.style.color = '#EF5350'
        bmiStatus.textContent = 'Obese'
    }
    else {
        bmiNumber.style.color = '#C62828'
        bmiStatus.textContent = 'Morbidly Obese'
    }
}