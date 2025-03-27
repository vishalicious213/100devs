console.log("Tic Tac Toe")

let move = 0

function makeMove(event) {
    console.log(event.target.id, move)
    console.log(event.target.innerText)

    if (event.target.innerText === "") {
        move++

        if (move % 2 === 0) {
            event.target.innerText = "o"
        } else {
            event.target.innerText = "x"
        }
    }
}