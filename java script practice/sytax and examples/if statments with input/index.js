const myText= document.getElementById("myText")
const mySubmit= document.getElementById("mySubmit")
const resultElement= document.getElementById("resultElement")
let age ;
mySubmit.onclick = function() {
    age=myText.value;
    age= Number(age);
if(age >=100){
     
    resultElement.textContent = "you are TOO old to enter this site";
}
else if(age ==0){
     
    resultElement.textContent = "you can't enter you were just born";
}
else if(age >=18){
     
    resultElement.textContent = "you are old enough to enter this site";
}
else if(age<0){
     
    resultElement.textContent = "your age can't be below zero";
    
}
else{
    
    resultElement.textContent = "you must be 18+ to enter this site";
}
}
/*ternary operator = a shortcut to if{} and else{} statments
it helps to assign a variable based on a condition 
condition ? codeIfTrue : codeIfFalse */
// let purchaseAmount =99;
//let discount = purchaseAmount >= 100 ? 10 : 0;
//console.log(' your total is $${purchaseAmount - purchaseAmount* (discount/100) });