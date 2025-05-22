//----------EXAMPLE <li> ----------

//STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

//STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.fontSize = "2rem";
newListItem.style.backgroundColor = "lightgreen";

//STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);//this will be added under box as the last element
// document.body.prepend(newListItem);//this will be added as the first element above the box 
// document.getElementById("fruits").append(newListItem);// this will append this item as last element in the box
// document.getElementById("fruits").prepend(newListItem);// this will append this item as first element in the box  

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem,orange);
//this will insert the element before orange
// in the case that said elements have no IDs we use the following

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem,listItems[1]);

// const listItems = document.querySelectorAll("#fruits li");
// listItems[1].replaceWith(newListItem); 

//REMOVE HTML ELEMENT
//document.getElementById("fruits").removeChild(newListItem);