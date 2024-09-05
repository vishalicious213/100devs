// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bool = true
// alert(bool)


// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = "red"
favColor = "black"

console.log(favColor)


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function maths(num1, num2, num3, num4) {
    return (num1 + num2 + num3) / num4
}

console.log(maths(2, 3, 4, 5))


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function mathPower(num1, num2) {
    console.log(Math.pow(num1, num2))
}

mathPower(3, 5)


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function logAlert(isTrue, line) {
    if (isTrue) {
        alert(line)
    } else {
        console.log(line)
    }

    // Can also do this with a ternary
    // isTrue ? alert(line) : console.log(line)
}
    // Entire function can be a ternary
    // const alertOrLog = (isTrue, line) => isTrue ? alert(line) : console.log(line)

// logAlert(true, "Don't go into your day like an accident")
// logAlert(false, "Don't repeat yourself")


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(30)