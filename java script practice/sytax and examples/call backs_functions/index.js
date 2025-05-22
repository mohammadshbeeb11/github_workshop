//callback=a function that is passed as an argument to another function
sum (displayPage,1,2);
function sum(callback,x,y){
    let result =x+y;
    callback(result);
    // this is akin to writing displayConsole(result) or displayPage(result)
    // yet not exclussive to either of them
    //but can accept any other function with different arguments and type
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("MyH1").textContent=result;
}