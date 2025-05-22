//object = a collection of related properties and/or methodes
//         can represent real world objects(people, products, places) 
//         object ={key:value,
//         function()} 
const person1 = {
    firstName:"Spongebob",
    lastName:"squarepants",
    age: 30,
    isEmployed:true,
    sayHello: function(){console.log("hi! i am spongebob!")},
    eat: function(){console.log("i am eating a krebby patty")},
}
const person2 = {
    firstName:"patrick",
    lastName:"star",
    age: 42,
    isEmployed:false,
    sayHello: ()=>{console.log("hi! i am patrick...")},
    eat: ()=>console.log("i am eating sand"),
}

person1.eat();
person2.sayHello();