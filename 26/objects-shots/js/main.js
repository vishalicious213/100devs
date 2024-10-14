const menu = document.getElementById("menu")
const renderSection = document.getElementById("render-area")

// ⬇️ EVENT LISTENERS ⬇️

menu.addEventListener("click", menuClick)

// ⬇️ EVENT HANDLERS ⬇️

function menuClick(e) {
    // console.log(e.target.id)
    if (e.target.id === "name-btn") {
        console.log("name")
        getDrink("s")
    }

    if (e.target.id === "spirit-btn") {
        console.log("spirit")
        getDrink("i")
    }
}

function getDrink(btn) {
    let cocktail = ""

    if (btn === "s") {
        cocktail = document.getElementById("search-name").value
    }

    if (btn === "i") {
        cocktail = document.getElementById("search-spirit").value
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${btn}=${cocktail}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderDrinks(data.drinks)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

// ⬇️ RENDER FUNCTIONS ⬇️

function renderDrinks(arr) {
    renderSection.innerHTML = ""
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

    renderSection.innerHTML = drinksToRender
}