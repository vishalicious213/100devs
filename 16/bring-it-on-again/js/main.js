// *Variables*
// Declare a variable, assign it a value, and alert the value
const alertThis = "Alert this value"
alert(alertThis)

// Create a variable, divide it by 10, and console log the value
const divideThis = 1440
console.log(1440 / 10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplyThreeNums(num1, num2, num3) {
    alert (num1 * num2 * num3)
}
multiplyThreeNums(517, 1227, 213)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function mathThing(num1, num2, num3, num4) {
    console.log(num1 + num2 - num3 - num4)
}
mathThing(517, 1227, 213, 144)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
function anotherMathThing(num1, num2, num3) {
    if ((100 + num1 - num2) / num3 > 25) {
        console.log("WE HAVE A WINNA")
    } else {
        console.log("NOT A WINNNA")
    }
}

anotherMathThing(4, 5, 6)
anotherMathThing(1227, 517, 2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function dayOfTheWeek(day) {
    if (["saturday", "sunday"].includes(day.toLowerCase())) {
        alert("Weekend")
    } else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day.toLowerCase())) {
        alert("Weekday")
    } else {
        alert("Try again!")
    }
}

dayOfTheWeek("Sunday")
dayOfTheWeek("Monday")
dayOfTheWeek("Splatterday")


function dayOfTheWeek2(day) {
    let weekend = ["saturday", "sunday"]
    let weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"]
    day = day.toLowerCase()

    if (weekend.includes(day)) {
        alert("Weekend")
    } else if (weekday.includes(day)) {
        alert("Weekday")
    } else {
        alert("Try again!")
    }
}

dayOfTheWeek2("Sunday")
dayOfTheWeek2("Monday")
dayOfTheWeek2("Splatterday")

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function countByThree(num) {
    for (i = 1; i <= num; i+= 3) {
        console.log(i)
    }
}

countByThree(31)