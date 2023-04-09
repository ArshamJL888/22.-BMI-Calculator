let weightInputElem = document.getElementById('weightRange');
let heightInputElem = document.getElementById('heightRange');
let bmiNumber = document.getElementById('bmi-number');
let bmiStatus = document.getElementById('bmi-status');
let userHeight = document.querySelector('.userHeight');
let userWeight = document.querySelector('.userWeight');
let bmiRate;

weightInputElem.addEventListener('input', bmiCalcHandler);
heightInputElem.addEventListener('input', bmiCalcHandler);

function bmiCalcHandler() {
    
    bmiRate = ((weightInputElem.value) / ((heightInputElem.value / 100) ** 2)).toFixed(2);
    userHeight.innerHTML = heightInputElem.value;
    userWeight.innerHTML = weightInputElem.value;
    bmiNumber.textContent = bmiRate;

    if(bmiRate < 18.5) {
        bmiNumber.style.color = '#FDD835'
        bmiStatus.textContent = 'Under Weight'
    }
    else if (bmiRate < 24.9) {
        bmiNumber.style.color = '#4CAF50'
        bmiStatus.textContent = 'Normal Weight'
    }
    else if (bmiRate < 24.9) {
        bmiNumber.style.color = '#4CAF50'
        bmiStatus.textContent = 'Normal Weight'
    }
    else if (bmiRate < 29.9) {
        bmiNumber.style.color = '#EF6C00' 
        bmiStatus.textContent = 'Over weight'
    }
    else if (bmiRate < 39.9) {
        bmiNumber.style.color = '#EF5350'
        bmiStatus.textContent = 'Obese'
    }
    else {
        bmiNumber.style.color = '#C62828'
        bmiStatus.textContent = 'Morbidly Obese'
    }
}

