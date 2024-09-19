//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const nums = [5, 17, 75, 12, 27, 67]
let sum = nums.reduce((total, num) => total += num, 0)
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function square(arr) {
    return arr.map(num => num * num)
}

console.log(square(nums))

//Create a function that takes string
//Print the reverse of that string to the console

function rev(str) {
    return str.split("").reverse().join("")
}

console.log(rev("Tsu"))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
