//Write your pseduo code first! 
// Get temperature in C
// Convert temperature
// Render it in the DOM

const toFButton = document.getElementById("to-fahrenheit")
const celciusInput = document.getElementById("temp-celcius")
const toCButton = document.getElementById("to-celcius")
const fahrenInput = document.getElementById("temp-fahren")
const converted = document.getElementById("converted-temp")

toFButton.addEventListener("click", () => {
    const cToF = celciusInput.value * 9/5 + 32
    converted.innerText = cToF
})

toCButton.addEventListener("click", () => {
    const fToC = fahrenInput.value - 32 * 5/9
    converted.innerText = fToC
})