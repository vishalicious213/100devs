//Write your pseduo code first! 
// Get temperature in C
// Convert temperature
// Render it in the DOM

const toFButton = document.getElementById("to-fahrenheit")
const celciusInput = document.getElementById("temp-celcius")

toFButton.addEventListener("click", () => {
    const converted = celciusInput.value * 9/5 + 32
    console.log(converted)
})