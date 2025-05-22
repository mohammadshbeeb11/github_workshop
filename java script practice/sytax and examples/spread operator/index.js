// spread operator = ... allows an iterable
// such as an array or string to be expanded into seperate elements
//(unpacks the elements)
/*let fruits =["apple","orange","banana"];
let vegetables=["carrots","celery","potatoes"];
let foods=[...fruits,...vegetables,"eggs","milk"];//the spread operators allows the joining of arrays
console.log(foods);*/
//rest parameters = (...rest) allow a function work with a variable 
//number of arguments by bundling them into an array 
//so basically the opposite function of spread
function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}
const food1="pizza";
const food2="hamburger";
const food3="hotdog";
const food4="sushi";
const food5="ramen";
openFridge(food1,food2,food3,food4,food5)
const foods= getFood(food1,food2,food3,food4,food5)
console.log(foods);
//example 3:
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number;//enhanced for loop
    }
    return result;
}
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number;//enhanced for loop
    }
    return result/numbers.length;
}
const total= sum(24,12);
const average = getAverage(12,14,15,16);
console.log(total);
console.log(average);
//example 4
function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.","Spongebob","Squarepants","III");
console.log(fullName);