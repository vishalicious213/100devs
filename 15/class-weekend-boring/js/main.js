//Handle Capital Letters, Place result in DOM, add a check for humpday (Wed)

document.querySelector('#check').addEventListener('click', check)

function check() {
  const day = document.querySelector('#day').value.toLowerCase()

  if (day === "tuesday" || day === "thursday") {
    console.log("YOU HAVE CLASS")
  } else if ( day === "saturday" || day === "sunday") {
    console.log("It's the Weekend")
  } else if (day === "wednesday") {
    console.log("HAPPY HUMP DAY!")
  } else {
    console.log("BORING")
  }
}
