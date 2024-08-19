let num = document.getElementById("num")
let exp = document.getElementById("pow")
let answer = document.getElementById("result")
let button = document.getElementById("button")

button.addEventListener("click", () => pow(num.value, exp.value))

function pow(x, n) {
    if (n < 1) {
        answer.innerText = "Exponent should be an integer and a positive number"
    } else {
        answer.innerText = (x ** n)
    }

}