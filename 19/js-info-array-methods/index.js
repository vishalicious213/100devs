// https://javascript.info/array-methods

// 1. Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
    // make array of words, split on the dashes
    let words = str.split("-")

    // if first word is a dash, remove it
    if (words[0] === "") words.shift()

    // capitalize words starting from 2nd word
    words.forEach((word, i) => words[i] = word.charAt(0).toUpperCase() + word.slice(1))

    // join words back into string
    console.log(words.join(""))
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")


// 2. Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b)
}

console.log(filterRange([5, 3, 8, 1], 1, 4))


// 3. Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
    arr.forEach((num, i) => {
        if (num < a || num > b) {
            arr.splice(i, 1)
        }
    })

    console.log(arr)
}

filterRangeInPlace([5, 3, 8, 1], 1, 4)


// 4. Sort in decreasing order

let arrToSort = [5, 2, 1, -10, 8]

console.log(arrToSort.sort((a, b) => b - a))