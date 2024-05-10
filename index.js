//to get the diplay value
const display = document.getElementById("display");

//to get value in display
function getToDisplay(input){
    display.value += input;
}

//for calculation 
function calc(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

//to clear the display
function clearDis(){
    display.value = "";
}