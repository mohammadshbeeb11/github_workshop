function updateClock(){
    const now1 =new Date();
    let hours = now1.getHours();
    const meridiem = hours >= 12 ? "PM":"AM";
    hours= hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);//the pad start is used to set the first 2 elements as 0
    const minutes = now1.getMinutes().toString().padStart(2, 0);
    const seconds = now1.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent=timeString;
}
updateClock();
setInterval(updateClock,1000);
 //we use the set interval method to call on the update clock function
 // every 1000 milliseconds = 1 second