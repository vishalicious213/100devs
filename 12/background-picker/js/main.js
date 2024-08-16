// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue


// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }

const ul = document.querySelector("ul")

ul.addEventListener("click", (e) => {
  console.log(e.target.id)

  if (e.target.id === "black") {
    document.querySelector('body').style.backgroundColor = "black"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "red") {
    document.querySelector('body').style.backgroundColor = "red"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "orange") {
    document.querySelector('body').style.backgroundColor = "orange"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "yellow") {
    document.querySelector('body').style.backgroundColor = "yellow"
    document.querySelector('body').style.color = 'black'
  }
})