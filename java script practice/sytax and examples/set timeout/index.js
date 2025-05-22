//setTimeout() = function in javaScript that allows you to schedule
//               the execution of a function after an amount of time (milliseconds)
//               Times are approximate
//               (execution time may vary based on the workload Javascript runtime env.)

//                setTimeout(callback, delay);
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(()=> window.alert("hello"),3000);
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}