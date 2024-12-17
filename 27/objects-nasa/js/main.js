//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getFetch)

function getFetch() {
    const choice = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=Lea6kv8YlTX0NdR7fxQaRmRUWbKp04jdw0CPZB8X&date=${choice}`

    console.log(choice)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector("img").src = data.hdurl
            document.querySelector("h3").innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}