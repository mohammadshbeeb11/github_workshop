//DOM navigation = the process of navigating through the structure
//                 of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement:it is self explanatory it gives the parent of an element
// .children:it gives the children of an element in the form of a collection

// ----------------------.firstElementChild ---------------------
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement=>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
// .lastElementChild():act in similar way to .firstElementChild() 
//  just choses last element
// ----------------------.nextElementChild ---------------------

const ulElements1 = document.getElementById("carrots");


    const nextChild = ulElements1.nextElementSibling;
    nextChild.style.backgroundColor = "red";
// .previousElementSibling(): act in similar way to .nextElementSibling()
//  only that it choses the previous sibling

// ----------------------.children ---------------------
const element = document.getElementById("desserts");
const children = element.children;
Array.from(children).forEach(child=>{
child.style.backgroundColor = "cyan";
});
