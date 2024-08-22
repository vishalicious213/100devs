//--- Easy
//create a variable and assign it a number
let num = 15

//minus 10 from that number
num = num - 10

//print that number to the console
console.log(num)


//--- Medium
//create a variable that holds a value from the input

//add 25 to that number
// ddrValue += 25

//alert that number
// alert(ddrValue)

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector("h1")

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener("click", () => {
    let ddrValue = document.getElementById("danceDanceRevolution").value
    console.log(Number(ddrValue) + num)
})