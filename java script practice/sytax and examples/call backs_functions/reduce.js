//.reduce() = reduce the elements of an array to a single value
const prices = [5,30,10,25,15,20];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);
function sum(accumulator,element){
    return accumulator + element;
    // accumulator is built in it acts like sum+=element
}
const grades = [75,50,90,80,65,95];

const maximumu=grades.reduce(getMax);
const minimum= grades.reduces(getMin);
console.log(maximumu);
console.log(minimum);
function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator,element){
    return Math.min(accumulator,element);
}