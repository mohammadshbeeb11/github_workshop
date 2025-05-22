// .map() = accepts callback and applies that function
//          to each element of an array , then return a new array
//          it is similar to the forEach method difference is it creates a new array
const dates=["2024-1-10","2025-2-20","2026-3-30"]
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    const parts =element.split("-");
    return`${parts[2]}/${parts[1]}/${parts[0]}`;
}