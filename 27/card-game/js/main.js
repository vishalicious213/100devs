let deckId = ""

document.querySelector('button').addEventListener('click', drawTwo)

function getDeckId() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    deckId = data.deck_id
  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}

function drawTwo(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

getDeckId()