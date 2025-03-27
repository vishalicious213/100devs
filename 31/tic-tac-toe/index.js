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

    // horizontal
    if (board[0] === "x" && board[1] === "x" && board[2] === "x") {
        console.log("X wins!")
    } else if (board[3] === "x" && board[4] === "x" && board[5] === "x") {
        console.log("X wins!")
    } else if (board[6] === "x" && board[7] === "x" && board[8] === "x") {
        console.log("X wins!")
    }

    // horizontal
    if (board[0] === "o" && board[1] === "o" && board[2] === "o") {
        console.log("O wins!")
    } else if (board[3] === "o" && board[4] === "o" && board[5] === "o") {
        console.log("O wins!")
    } else if (board[6] === "o" && board[7] === "o" && board[8] === "o") {
        console.log("O wins!")
    }

}