//synchronous = Executes line by line consecutively in a sequential
//              manner Code that waits for an operation to complete.

//asynchronous = Allows multiple operations to be performed concurrently without waiting
//               Doesn't block the execution flow and allows the program to continue
//               (I/O operations, network request, fetching data)
//               handled with :callback, promises , Async/await
function func1(callback){
    setTimeout(()=>{console.log("Task 1");
        callback()},3000);
}
function func2(){
    console.log("task2");
    console.log("task3");
    console.log("task4");
}
func1(func2);