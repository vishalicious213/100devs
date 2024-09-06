// https://javascript.info/array-methods

// 1. Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
    // make array of words, split on the dashes
    let words = str.split("-")

    // if first word is a dash, remove it
    if (words[0] === "") {
        words.shift()
    }

    // capitalize words starting from 2nd word
    words.forEach((word, i) => {
        words[i] = word.charAt(0).toUpperCase() + word.slice(1)
    })

    // join words back into string
    console.log(words.join(""))
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")