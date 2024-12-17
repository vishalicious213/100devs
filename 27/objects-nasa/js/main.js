//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

require("dotenv").config()
document.querySelector("button").addEventListener("click", getFetch)

function getFetch() {
    const choice = document.querySelector("input").value.toLowerCase()
    const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}