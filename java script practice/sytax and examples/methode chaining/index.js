let username = window.prompt("enter your username:");
//-------NO METHODE CHAINING---------
username= username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();
let extraChars= username.slice(1);
extraChars=extraChars.toLocaleLowerCase();
username= letter+extraChars;
console.log(username);
//------- METHODE CHAINING---------
username =username.trim().charAt(0).toLocaleUpperCase + username.trim().slice(1).toLocaleLowerCase();
console.log(username);