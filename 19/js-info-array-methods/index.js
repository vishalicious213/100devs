// https://javascript.info/array-methods

// 1. Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
    // make array of words, split on the dashes
    let words = str.split("-")
    console.log(words)

    // capitalize words starting from 2nd word
    // nums.forEach((num, i) => {nums[i] = num + 3})
    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    })
    console.log(words)

    // join words back into string
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")