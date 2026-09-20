let Display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);
let string = '';
function updateDisplay() {
    Display.value = string;
    Display.scrollLeft = Display.scrollWidth;
}
buttonsArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            updateDisplay()
        } else if (e.target.innerHTML == "AC") {
            string = "";
            updateDisplay()
        } else if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                updateDisplay()
            } catch {
                Display.value = "Error";
                string = "";
            }
        } else {
            string += e.target.innerHTML;
           updateDisplay()
        }


    })
})