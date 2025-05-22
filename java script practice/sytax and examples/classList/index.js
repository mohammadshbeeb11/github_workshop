//classList = Element property is javaScript used in interact
//            with an element's list of classes (CSS classes)
//            Allows you to make reusable classes for many elements
//            across you webpage.

//add()
//remove()
//toggle(remove if present, add if not)
//replacs(oldClass,newClass)
//contains() this returns true if the CSS class is present in the element
let buttons = document.querySelectorAll(".myButtons1");

buttons.forEach(button =>{
     button.classList.add("enabled");
});

buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button=>{
    button.addEventListener("mouseout",event=>{
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent +="🤬";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
         
    });
});