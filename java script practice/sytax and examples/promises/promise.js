//Promise = an Object that manages asychronous operations.
//          wrap a Promise Object around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => {asynchronous code})

//DO THESE CHORES IN ORDER

//1. WALK THE DOG
//2. CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog🐕");
            }
            else{
                reject("you DIDN'T walk the dog")
            }
        },1500);
    });
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You cleaned the kitchen🧹");
            }
            else{
                reject("you DIDN'T clean the kitchen")
            }
        },2500);
    });
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trashTakenOut = true;
            if(trashTakenOut){
                resolve("You take out the trash♻");
            }
            else{
                reject("you DIDN'T take out the trash ")
            }
        },500);
    });
}

walkDog().then(value=>{console.log(value); return cleanKitchen()})
          .then(value=>{console.log(value); return takeOutTrash()})
          .then(value=>{console.log(value); console.log("You finished all the chores!")})
          .catch(error =>console.error(error));
//value represent the code or instruction returned by the reslove
//reject is what is caught by the error