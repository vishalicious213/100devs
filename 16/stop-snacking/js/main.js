//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const button = document.getElementById("help")
const stop = document.getElementById("stops")

button.addEventListener("click", stopSnacking)

function stopSnacking() {
    const input = Number(document.querySelector("input").value)
    stop.innerText = ""

    for (let i = 1; i <= input; i++) {
        console.log("STOP!")
        stop.innerText += " STOP!"
    }
}