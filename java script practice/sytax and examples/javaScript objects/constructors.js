//constructor = special method for defining the
//              properties and methods of objects
function Car(make, model, year, color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.drive= function(){console.log(`you drive the ${this.model}`)}
}
const car1 = new Car("ford","Mustang",2024,"red");
const car2 = new Car("BMW","X5",2006,"black");
console.log(car1.make);
console.log(car2.make);
car1.drive();
car2.drive();