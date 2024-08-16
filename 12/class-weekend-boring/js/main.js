document.querySelector('#check').addEventListener('click', check)

function check() {
  let day = document.querySelector('#day').value
  day = day.toUpperCase()

  if (day === "TUESDAY" || day === "FRIDAY") {
    document.getElementById("placeToSee").innerText = "Class Day!"
  } else if (day === "SATURDAY" || day === "SUNDAY") {
    document.getElementById("placeToSee").innerText = "Weekend!"
  } else {
    document.getElementById("placeToSee").innerText = "Boring Day"
  }
}
