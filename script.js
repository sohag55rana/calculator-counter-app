let count = 0;

const updateDisplay = () => {
    document.getElementById("count").innerText = count;
}

const increase = () => {
    count++;
    updateDisplay()

}
const decrease = () => {
    count--;
    if (count < 0) {
        count = 0
    }
    updateDisplay()
}
const reset = () => {
    count = 0;
    updateDisplay();
}


// calculator related JS here

const calculate = (operator) => {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid number'
    }
    else {
        if (operator === '+') {
            result = num1 + num2
        }
        else if (operator === '-') {
            result = num1 - num2
        }
        else if (operator === '*') {
            result = num1 * num2
        }
        else if (operator === '/') {
            result = num2 !== 0 ? (num1 / num2) : "cant divided by 0"
        }
        else if (operator === "") {
            result = 0;
        }
    }
    document.getElementById('result').innerText = result;
}

const resetbtn = () => {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('result').innerText = 0;
}


