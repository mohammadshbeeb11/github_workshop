class Animal{
    constructor(age,name){
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}kmph`)
    }
}
class Rabbit extends animal{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed=runspeed
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}
class Fish extends animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=this.swimSpeed
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed
    }
    fly(){
        console.log(`This ${this.name} can run`);
        super.move(this.flySpeed);
    }
}
const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish(" fish",2,12);
const hawk = new Hawk("hawk",1,50);
hawk.fly();
fish.swim();
rabbit.run();