//element selectors = Methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    from the DOM(Document Object Model)

//1. document.getElementById()       //ELEMENT OR NULL
//2. document.getElementsClassName   //HTML COLLECTION
//3. document.getElementsByTagName   //HTML COLLECTION
//4. document.querySelector()        //ELEment or null
//5. document.querySelectorAll()     //NODELIST

const fruits = document.getElementsByClassName("fruits");
for(let fruit of fruits ){
    fruit.style.backgroundColor = "yellow";
}
//HTML collection is similar to arrays you can select elements like an array
//by calling the name of the collection fruits[0]=apple
//but they don't have the methodes
//that apply to arrays like th foreach() methode
//hence you need to typecast them into an array to use said methodes
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});
const h4Elements = document.getElementsByTagName("h4");
//now this form an HTML collection based on the tag not the class name or ID
//in this example it will form a collection from(Root Vegtables,Non-Root Vegtables)
//and it acts similarly to the getElementsByClassName() for they are 
//collection not an array
const element = document.querySelector("h4");
const elemen1 = document.querySelector(".fruits");
//returns the first occurence of an element of a tag name or a class
//note: you call a class by using .classname
const foods = document.querySelectorAll("li");

foods.forEach(food => {food.style.backgroundColor="yellow";});
//querySelectorAll() returns a nodelist that is similar to a collection
//but it has built in methodes like an array ,
//but it is static and doesn't update like when we use 
// document.getElementsClassName