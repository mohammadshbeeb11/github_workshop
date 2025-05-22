//Asynch/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a synchronous manner
//               Asynch doesn't have resolve or reject parameters
//               Everything after Await is placed in an event queue
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
async function doChores() {
    try{const walkDogResult = await walkdDog();
    console.log(walkDogResult);

    const cleanKirchenResult = await cleanKitchen();
    console.log(cleanKirchenResult);

    const takeOutTrashResult = await takeOutTrashResult();
    console.log(takeOutTrashResult);

    console .log("you finished all the chores!");
    }
    catch(error){
        console.error(error);
    }
}
doChores();
// the await waits for the result to be given by the function the proceeds with execution