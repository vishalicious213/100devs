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


// 6. Create an extendable calculator
// The task consists of two parts.
// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function(str) {
        let calculation = str.split(" ")
        let a = Number(calculation[0])
        let func = calculation[1]
        let b = Number(calculation[2])

        return this.methods[func](a, b)
    }
}

let calc = new Calculator
console.log(calc.calculate("1 + 1"))


// 7. Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = [users.map(user => user.name)]

console.log( names )


// 8. Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let juan = { name: "Juan", surname: "Smith", id: 1 }
let pele = { name: "Pele", surname: "Hunt", id: 2 }
let mari = { name: "Mari", surname: "Key", id: 3 }

let peeps = [ juan, pele, mari ]

let usersMapped = peeps.map(peep => ({
    id: peep.id, 
    fullName: `${peep.name} ${peep.surname}`
}))

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // Juan Smith


// 9. Sort users by age
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let vish = { name: "Vish", age: 49 }
let ella = { name: "Ella", age: 12 }
let kara = { name: "Kara", age: 7 }

let aged = [ ella, vish, kara ]

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age)
}

sortByAge(aged)

// now: [kara, ella, vish]
console.log(aged[0].name) // Kara
console.log(aged[1].name) // Ella
console.log(aged[2].name) // Vish


// 11. Get average age
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

let mika = { name: "Mika", age: 4 }
let miko = { name: "Miko", age: 7 }
let z = { name: "Z", age: 9 };

let ageArr = [ mika, miko, z ]

function getAverageAge(users) {
    let average = 0

    users.forEach(user => average += user.age)
    return average / users.length
}

console.log( getAverageAge(ageArr) )


// 12. Filter unique array members
//  Let arr be an array.
//  Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    return arr.filter((item, i) => arr.indexOf(item) === i)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]

console.log( unique(strings) ) // Hare, Krishna, :-O


// 13. Create keyed object from array
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let usersToGroup = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
]

function groupById(arr) {
    let group = arr.reduce((key, value) => {
        key[value.id] = value
        return key
    }, {})

    return group
}

let usersById = groupById(usersToGroup)

console.log(usersById)
/*
after the call we should have:

usersById = {
john: {id: 'john', name: "John Smith", age: 20},
ann: {id: 'ann', name: "Ann Smith", age: 24},
pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/