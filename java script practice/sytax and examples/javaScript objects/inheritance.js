//inheritance = allows a new class to inherit properties and methods
//              from an existing class (parent -> child)
//              helps with code reusability
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this .name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name="Rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name="fish";
    swimming(){
        console.log(`This ${this.name} is  swimming`);
    }
}
class Hawk extends Animal{
    name="hawk";
    flying(){
        console.log(`This ${this.name} is flying`);
    }
}
fish.alive=false;
const rabbit = new Rabbit()
const fish = new Fish()
const hawk = new Hawk()
console.log(fish.alive);
console.log(hawk.alive);
rabbit.run();
rabbit.eat();
rabbit.sleep();