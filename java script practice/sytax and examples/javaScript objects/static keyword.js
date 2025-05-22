// static = keyword that defines properties or methods that belong
//          to a class itself rather then the object created
//          from that class (class owns anything static, not the objects)
class User{
    static userCount = 0;
    constructor(username){
        this.username=username;
        username.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} user online`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}
const user1 = new User("spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");
user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();