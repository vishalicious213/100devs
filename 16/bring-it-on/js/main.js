// *Variables*
// Create a variable and console log the value
const variable = "Variable"
console.log(variable)

// Create a variable, add 10 to it, and alert the value
let num = 213
// alert(num + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}

// subtractFour(10, 9, 8, 7)

// Create a function that divides one number by another and returns the remainder
function divvy(num1, num2) {
    return num1 % num2
}

console.log(divvy(10, 2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(num1, num2) {
    if (num1 + num2 > 50) {
        alert("Jumanji")
    }
}

// addTwo(1, 1)
// addTwo(51, 1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThree(num1, num2, num3) {
    if ((num1 * num2 * num3) % 3 === 0) {
        alert("ZEBRA")
    }
}

multiplyThree(5, 2, 2)
multiplyThree(5, 2, 3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
