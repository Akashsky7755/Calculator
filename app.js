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

document.addEventListener("keydown",(e)=>{
    if (e.key >= "0" && e.key <= "9"){
        string += e.key;
        updateDisplay()
    }
    
    else if(["+","-","*","/","%"].includes(e.key)){
        string += e.key;
        updateDisplay();
    }

    else if(e.key === "."){
        string  += e.key;
        updateDisplay();
    }

     else if (e.key === "Enter" || e.key === "=") {
        try {
            string = eval(string);
            updateDisplay();
        } catch {
            string = "";
            Display.value = "Error";
        }
    }

     else if (e.key === "Backspace") {
        string = string.substring(0, string.length - 1);
        updateDisplay();
    }

    else if (e.key === "Escape" || e.key === "Delete") {
        string = "";
        updateDisplay();
    }
})