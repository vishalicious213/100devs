document.querySelector('#check').addEventListener('click', check)

function check() {
  let day = document.querySelector('#day').value
  day = day.toUpperCase()

  if (day === "TUESDAY" || day === "FRIDAY") {
    console.log('class')
  } else if (day === "SATURDAY" || day === "SUNDAY") {
    console.log('weekend')
  } else {
    console.log('weekday')
  }
}
