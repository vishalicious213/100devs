//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector("button").addEventListener("click", getDrink)
let drinksSection = document.getElementById("drinks")

function getDrink() {
    let cocktail = document.querySelector("input").value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        renderDrinks(data.drinks)
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
                if (drink[`strMeasure${i}`] === null) {
                    drink[`strMeasure${i}`] = ""
                }
                ingredients += `
                <p>▹ ${drink[`strMeasure${i}`]} ${drink[`strIngredient${i}`]}</p>
                `
            }
        }

        drinksToRender += `
            <section class="drink">
                <div class="container">
                    <h1>${drink.strDrink}</h1>
                    <p class="detail">${drink.strCategory}</p>
                    <p class="detail">${drink.strAlcoholic}</p>
                    <p class="detail">${drink.strGlass}</p>
                    <h2>Ingredients:</h2>
                    <section class="ingredients">${ingredients}</section>
                    <p>${drink.strInstructions}</p>
                </div>
                <img src=${drink.strDrinkThumb} alt=${drink.strDrink}>
            </section>
        `
    })

    drinksSection.innerHTML = drinksToRender
}