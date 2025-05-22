//closure = A function defined inside of another function,
//          the inner function has access to the variables
//          and scope of the outer function.
//          Allowes for private cvariables and state maintenance
//          Used frequently in JS frameworks:React ,vue, angular
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment,getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);