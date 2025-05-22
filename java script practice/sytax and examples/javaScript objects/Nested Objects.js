//nested objects = Objects inside of other Objects.
//                 Allows you to represent more complex data structures
//                 Childe Object is enclosed by a parent object
class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address= new Address(...address);
    }
}
class Address{
    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country= country;
    }
}
const person1 = new Person("Spongebob",30,
                                            "124 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters");
const person2 = new Person("Patrick",37,
                                            "128 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters");
const person3 = new Person("Squidward",45,
                                            "126 Conch St.",
                                            "Bikini Bottom",
                                            "Int. Waters");
console.log(person1.address.country);//we can access the elements within the nested object using (nested object.element)
console.log(person1.address);//or we can access all elements at once