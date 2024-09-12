console.log("Eloquent JavaScript")

// 1. The Sum of a Range
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function range(start, end, step = 1) {
    let nums = []

    for (let i = start; i <= end; i += step) {
        nums.push(i)
    }

    return nums
}

function sum(arr) {
    let total = 0

    for (let num of arr) {
        total += num
    }
    
    return total
}

console.log(sum(range(1, 10)))
console.log(sum(range(1, 10, 2)))