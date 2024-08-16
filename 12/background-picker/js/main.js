const ul = document.querySelector("ul")

ul.addEventListener("click", (e) => {
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

  if (e.target.id === "green") {
    document.querySelector('body').style.backgroundColor = "green"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "blue") {
    document.querySelector('body').style.backgroundColor = "blue"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "indigo") {
    document.querySelector('body').style.backgroundColor = "indigo"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "violet") {
    document.querySelector('body').style.backgroundColor = "violet"
    document.querySelector('body').style.color = 'white'
  }

  if (e.target.id === "white") {
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('body').style.color = 'black'
  }
})