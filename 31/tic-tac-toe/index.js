console.log("Tic Tac Toe")

let move = 0
let board = ["","","","","","","","",""]

function makeMove(event) {
    console.log(event.target.id, move)
    console.log(event.target.innerText)

    if (event.target.innerText === "") {
        move++

        if (move % 2 === 0) {
            event.target.innerText = "o"
            board[event.target.id - 1] = "o"
        } else {
            event.target.innerText = "x"
            board[event.target.id - 1] = "x"
        }
    }
    
    score()
}

function score() {
    console.log(board)
}