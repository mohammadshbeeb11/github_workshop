//.filter() = creates a new array by filtering out elements
let numbers = [1,2,3,4,5,6,7];
let evenNumbers = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);
console.log(evenNumbers);
console.log(oddNums);
function isEven(element){
    return element % 2===0;
}
function isOdd(element){
    return element %2 !==0 ;
}