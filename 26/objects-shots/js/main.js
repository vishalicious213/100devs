//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getDrink)
let drinksSection = document.getElementById("drinks")

function getDrink() {
    let cocktail = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.drinks)
        renderDrinks(data.drinks)
        
        // document.querySelector("h2").innerText = data.drinks[0].strDrink
        // document.querySelector("img").src = data.drinks[0].strDrinkThumb
        // document.querySelector("h3").innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

function renderDrinks(arr) {
    drinksSection.innerHTML = ""
    let drinksToRender = ""

    arr.map(drink => {
        let ingredients = ""

        for (let i = 1; i <= 15; i++) {
            if (drink[`strIngredient${i}`] !== null) {
                console.log(drink[`strMeasure${i}`], drink[`strIngredient${i}`])
                ingredients += `
                <p>${drink[`strMeasure${i}`]} ${drink[`strIngredient${i}`]}</p>
                `
            }
        }

        drinksToRender += `
            <section class="drink">
                <h1>${drink.strDrink}</h1>
                <p>${drink.strGlass}</p>
                <h2>Ingredients:</h2>
                ${ingredients}
                <p>${drink.strInstructions}</p>
                <img src=${drink.strDrinkThumb} alt=${drink.strDrink}>
            </section>
        `
    })

    drinksSection.innerHTML = drinksToRender
}