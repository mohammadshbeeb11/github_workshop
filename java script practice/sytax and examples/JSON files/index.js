//JSON = (JavaScript Object Notation) data-interchange format
//       used for exchanging data between a server and a web application
//       JSON files {key:value} OR [value1, value2, value3]

//       JSON.stringify() = converts a JS object to a JSON string.
//       JSON.parse() = converts a JSON string to a JS object
const Person = {
    "name": "Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","Karate","Cooking"]
};
const stringifyPerson = JSON.stringify(Person);// this will be turned to string

const parseNames = `["Spongebob","Patrick","Squidward","Sandy"]`;

console.log(parseNames);//this will turn the string into a JS object

fetch("people.json")//fetch returns a promise
.then(response => response.json()/*returns a promise */)
.then(values=> values.forEch(value=>console.log(value.isEmployed)));
//value.isEmployed return the isEmploed value for each object