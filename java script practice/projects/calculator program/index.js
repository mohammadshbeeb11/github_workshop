const display=document.getElementById("display");


function appendToDisplay(input){
display.value+=input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
   try{
    display.value = eval(display.value);
   }
   catch(error){
    display.value = "Error";
   }
}

/*warning: executing JavaScript from a string is an enormous security
risk. it is far too easy for a bas actor to run arbitrary code when you use 
eval(). */