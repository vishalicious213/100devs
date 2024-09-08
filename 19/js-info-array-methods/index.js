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


// 5. Copy and sort array
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.

let stringArr = ["HTML", "JavaScript", "CSS"]

function copySorted(arr) {
    return [...arr].sort()
}

let sorted = copySorted(stringArr)

console.log( sorted ) // CSS, HTML, JavaScript
console.log( stringArr ) // HTML, JavaScript, CSS (no changes)


// 7. Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = [users.map(user => user.name)]

console.log( names )

// 8. Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let juan = { name: "Juan", surname: "Smith", id: 1 };
let pele = { name: "Pele", surname: "Hunt", id: 2 };
let mari = { name: "Mari", surname: "Key", id: 3 };

let peeps = [ juan, pele, mari ];

let usersMapped = peeps.map(peep => ({
    id: peep.id, 
    fullName: `${peep.name} ${peep.surname}`
}))

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Juan Smith