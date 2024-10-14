//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getDrink)
let drinksSection = document.getElementById("drinks")

function getDrink() {
    let cocktail = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        let drinks = data.drinks
        drinksSection.innerHTML = ""

        let renderDrinks = drinks.map(drink => `
            <h2>${drink.strDrink}</h2>
            <p>${drink.strGlass}</p>
            <p>${drink.strInstructions}</p>
            <img src=${drink.strDrinkThumb} alt=${drink.strDrink}>
        `)

        drinksSection.innerHTML = renderDrinks
        // document.querySelector("h2").innerText = data.drinks[0].strDrink
        // document.querySelector("img").src = data.drinks[0].strDrinkThumb
        // document.querySelector("h3").innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}