//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()
  const msg = document.querySelector('#placeToSee')

  if (day === "tuesday" || day === "thursday") {
    console.log("YOU HAVE CLASS")
    msg.innerText = "You have class!"
  } else if ( day === "saturday" || day === "sunday") {
    console.log("It's the Weekend")
    msg.innerText = "It's the Weekend!"
  } else if (day === "wednesday") {
    console.log("HAPPY HUMP DAY!")
    msg.innerText = "Happy Hump Day!"
  } else {
    console.log("BORING")
    msg.innerText = "Nothing going on today."
  }
}