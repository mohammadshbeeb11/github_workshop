//destructuring = extract values from array and object,
//                then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring     

//-----------------EXAMPLE 1 ---------------------
//SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;
[a,b] = [b,a];
console.log(a);
console.log(b);
//-----------------EXAMPLE 2 ---------------------
//SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);
//-----------------EXAMPLE 3 ---------------------
//ASSIGN ARRAY ELEMENTS TO VARIABLES
const colors1 = ["red","green","blue","black","white"];
const [firstColor,secondColor,thirdColor, ...extraColors]=colors1;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);//rest of the elements form a new a array
//-----------------EXAMPLE 4 ---------------------
//EXTRACT VALUES FROM OBJECTS
const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job:"Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,    
}
const{firstName,lastName,age,job="unemployed"} = person1;//you can set a default value example in job
console.log(firstName);
//-----------------EXAMPLE 5 ---------------------
//DESTRUCTURE IN FUNCTION PARAMETERS
function displayPerson({firstName,lastName,age,job= "unemployed"}){
console.log(`name: ${firstName} ${lastName}`);
console.log(`age: ${age}`);
console.log(`job: ${job}`);
}
const person3 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job:"Fry Cook",
}
const person4 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,    
}
displayPerson(person3);