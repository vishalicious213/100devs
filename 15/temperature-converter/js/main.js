//Write your pseduo code first! 
// Get temperature in C
// Convert temperature
// Render it in the DOM

const toFButton = document.getElementById("to-fahrenheit")
const celciusInput = document.getElementById("temp-celcius")
const converted = document.getElementById("converted-temp")

toFButton.addEventListener("click", () => {
    const cToF = celciusInput.value * 9/5 + 32
    converted.innerText = cToF
})