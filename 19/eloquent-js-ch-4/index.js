console.log("Eloquent JavaScript")

// 1. The sum of a range
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function range(start, end, step = 1) {
    let nums = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            nums.push(i)
            console.log(nums)
        }
    } else {
        for (let i = start; i >= end; i += step) {
            nums.push(i)
            console.log(nums)
        }
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

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// console.log(sum(range(1, 10)))
// console.log(sum(range(1, 10, 2)))
// console.log(sum(range(5, 2, -1)))


// 2. Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. Neither may use the standard reverse method.

function reverseArray(arr) {
    const reversed = []
    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }

    return reversed
}

function reverseArrayInPlace(arr) {
    let temp

    for (let i = 0; i < arr.length / 2; i++) { // loop through 1/2 of the arr
        temp = arr[i] // temp = position 0 and then moves up
        arr[i] = arr[arr.length - 1 - i] // left position = right position
        arr[arr.length - 1 - i] = temp // right position = temp (left position)
    }

    return arr
}

let myArray = ["A", "B", "C"]
let numsArray = [1, 2, 3, 4, 5]

console.log(reverseArray(myArray))
console.log(myArray)

console.log(reverseArrayInPlace(numsArray))
console.log(numsArray)


// 3. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function arrayToList(arr) {
    let newList = arr.map((item, index) => {
        return {
            [item]: {
                "value": item,
                "rest": {
                    "value": index < arr.length -1 ? item + 1 : null
                }
            }
        }
    })

    return newList
}

function listToArray(list) {
    return list.map((item, index) => item[index + 1].value)
}

let arrForList = [1, 2, 3]
let listForArr = arrayToList(arrForList)
let arrFromList = listToArray(listForArr)

console.log(listForArr)
console.log(arrFromList)