const display = document.getElementById("display");

function appendToDisplay(input)
{
display.value += input;
}

function clearDisplay()
{
display.value = "";
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }
    
}

document.addEventListener("keydown", (event) => {
    const key = event.key; // Get the key pressed

    // Check if the key is a number or a valid operator
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        calculate(); // Calculate result on Enter
    } else if (key === "Backspace") {
        // Remove the last character on Backspace
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay(); // Clear the display on Escape
    }
});

