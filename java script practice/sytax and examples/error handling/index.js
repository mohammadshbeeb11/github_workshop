//Error = An object that is created to represent a problem that occurs
//        Occur often with user input or establishing a connection

//try{} = Enclose code that might potentially cause am error
//catch{} = Catch and handle any thrown errors from try{ }
//finally() = (optional)always executes.used mostly for clean up
//            ex. close files, close connections, release resources

//example 1:

/*try{
    console.log(x);
    //NETWORK ERRORS
    //PROMISE REJECTION
    //SECURITY
}   
catch(error){
    console.error(error);
}
finally{
    //CLOSE FILES
    //CLOSE CONNECTIONS
    //RELEASE RESOURCES
    console.log("This always executes");
}
console.log("you have reached the end!");*/


//example 2:
try{
    const dividend = Number(window.prompt("Enter a dividend:"));
    const diviisor = Number(window.prompt("Enter a divisor:"));

    if(diviisor == 0){
        throw new Error("you can't divide by zero!");
    }
    if(isNaN(dividend)||isNaN(diviisor)){
        throw new Error("values must be a number");
    }
    const result = dividend/diviisor;
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("you have reached the end!");