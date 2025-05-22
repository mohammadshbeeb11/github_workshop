//NodeList = static collection of HTML elements by (id,class,element)
//           Can be created by using querySelectionAll()
//           Similar to an array, but no (map, filter, reduce)
//           NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

//1.................ADD HTML/CSS PROPERTIES:

/*buttons.forEach(button=>{
button.style.backgroundColor = "green";
button.textContent +="😁";
});*/

//2................Click even listener:

/*buttons.forEach(button=>{
    button.addEventListener("click", event=>{
        event.target.style.backgroundColor = "tomato";
    })
});*/

//3..................MOUSEOVER + MOUSEOUT event listener:

/*buttons.forEach(button=>{
    button.addEventListener("mouseover", event=>{
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    })
});

buttons.forEach(button=>{
    button.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    })
});*/

//4....................ADD AN ELEMENT
/*const newButton = document.createElement("button")//step1
newButton.textContent = "Button 5";//step
newButton.classList = "myButtons";//to add css properties of the other buttons
document.body.appendChild(newButton);//step 3

buttons = document.querySelectorAll(".myButtons");//to update the node list*/

///4................ REMOVE AN ELEMENT

buttons.forEach(button=>{
    button.addEventListener("click", event=>{
        event.target.remove();
        buttons=document.querySelectorAll(".myButtons");//to update the node list
    });
});