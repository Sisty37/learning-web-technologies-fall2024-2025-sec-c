let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        let expression = display.value.replace(/%/g, '/100'); // Convert % into division by 100
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
