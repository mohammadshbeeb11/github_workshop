//function expression = a way to define functions as a values or variable
const numbers = [1,2,3,4,5,6];
const squares = number.map(function(element){
    return Math.pow(element,2);
});
const cubes = neumber.map(function(element){
    return Math.pow(element,3);
});
const evenNums= number.filter(function(element){
    return element % 2 ===0;
});
const oddNums= number.filter(function(element){
    return element % 2 !==0;
});
const total = numbers.reduce(function (accumulator,element){
    return accumulator + element;
    // accumulator is built in it acts like sum+=element
})
console.log(oddNums);
//this helps to save on the global naming library of function
// if said fundtion is being uses once