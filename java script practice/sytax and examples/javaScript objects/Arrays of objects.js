const fruits = [{name: "apples",color: "red",calories: 95},
                {name: "orange",color: "orange",calories: 45},
                {name: "banana",color: "yellow",calories: 105},
                {name: "coconut",color: "white",calories: 159},
                {name: "pineapple",color: "yellow",calories: 37}];
console.log(fruits[3].calories);//to access any of the objects and their 
                                //properties we use array[index].property
//we can add new objects to the array via push()
//and remove using pop()
//and use splice() to remove any number of objects at specific indecies

//---------- forEach() ----------
fruits.forEach(fruit => console.log(fruit.calories));
//---------- map() ----------
const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitNames);
console.log(fruitColors);
//---------- filter() ----------
const yellowFruits = fruits.filter(fruit => fruit.color ==="yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories <100);
const highCalFruits = fruits.filter(fruit => fruit.calories>=100);
console.log(highCalFruits);
console.log(yellowFruits);
//---------- reduce() ----------
const maxFruit = fruits.reduce((max,fruit)=>
                                fruit.calories > max.calories?
                                fruit:max);
 const minFruit = fruits.reduce((min,fruit)=>
                                    fruit.calories < min.calories?
                                    fruit:min);
console.log(maxFruit);
console.log(minFruit);