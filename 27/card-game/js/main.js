let deckId = ""

document.querySelector('button').addEventListener('click', getFetch)

function getDeckId() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
      console.log(`error ${err}`)
  })
}

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

getDeckId()