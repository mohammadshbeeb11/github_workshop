let username;
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById('h1').textContent=`welcome ${username}`
}