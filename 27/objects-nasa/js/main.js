//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const displayArea = document.querySelector("section")
document.querySelector("button").addEventListener("click", getFetch)

displayArea.innerHTML = ""

function getFetch() {
    const choice = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=Lea6kv8YlTX0NdR7fxQaRmRUWbKp04jdw0CPZB8X&date=${choice}`

    console.log(choice)

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.media_type === "image") {
                displayArea.innerHTML = `<img src=${data.url} alt=${data.title}>`
            } else if (data.media_type === "video") {
                displayArea.innerHTML = `<iframe src=${data.url} frameborder="0"></iframe>`
            }
            document.querySelector("h3").innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}