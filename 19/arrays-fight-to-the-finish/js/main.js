//Create an array of movie titles. Loop through the array and each element to the h2.
const h2 = document.querySelector("h2")

const movies = [
    "Fist of the North Star",
    "Blade Runner",
    "Terminator 2"
]

movies.forEach(movie => h2.innerHTML += `<p>${movie}</p>`)

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.forEach((num, i) => {nums[i] = num + 3})
console.log(nums)

//Find the average of all the numbers from question three

function average(arr) {
    let total = 0
    arr.forEach(num => total += num)
    return total / arr.length
}

console.log(average(nums)) // remember, the previous question updated the values of nums by +3