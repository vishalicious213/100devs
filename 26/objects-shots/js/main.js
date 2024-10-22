const menu = document.getElementById("menu")
const renderSection = document.getElementById("render-area")

// ⬇️ EVENT LISTENERS ⬇️

menu.addEventListener("click", menuClick)

// ⬇️ EVENT HANDLERS ⬇️

function menuClick(e) {
    // console.log(e.target.id)
    if (e.target.id === "menu-cocktail") {
        renderMenu("cocktail")
    }

    if (e.target.id === "menu-ingredient") {
        renderMenu("ingredient")
    }

    if (e.target.id === "name-btn") {
        getData("s")
    }

    if (e.target.id === "ingredient-btn") {
        getData("i")
    }
}

function getData(btn) {
    let searchTerm = ""

    if (btn === "s") {
        searchTerm = document.getElementById("search-name").value
    }

    if (btn === "i") {
        searchTerm = document.getElementById("search-ingredient").value
    }

    if (!searchTerm) {
        return
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?${btn}=${searchTerm}`)
    .then(res => res.json())
    .then(data => {
        if (btn === "s") {
            renderDrinks(data.drinks)
        }
    
        if (btn === "i") {
            renderIngredient(data.ingredients[0])
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

// ⬇️ RENDER FUNCTIONS ⬇️

function renderMenu(item) {
    const menuCocktail = document.getElementById("search-name-container")
    const menuIngredient = document.getElementById("search-ingredient-container")

    if (item === "cocktail") {
        menuCocktail.classList.remove("hidden")
        menuIngredient.classList.add("hidden")
    }

    if (item === "ingredient") {
        menuCocktail.classList.add("hidden")
        menuIngredient.classList.remove("hidden")
    }

    renderSection.innerHTML = ""
}

function renderDrinks(arr) {
    renderSection.innerHTML = ""
    let drinksToRender = []

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

        drinksToRender.push(`
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
        `)
    }).join("")

    renderSection.innerHTML = drinksToRender
    document.getElementById("search-name").value = ""
}

function renderIngredient(ingredient) {
    renderSection.innerHTML = ""
    let descArr = []
    let desc = `<p>No description available</p>`

    if (ingredient.strDescription) {
        descArr = ingredient.strDescription.split(/\r?\n/).filter(line => line.trim() !== "")
        desc = descArr.map(line => `<p>${line}</p>`).join("")
    }

    const ingredientToRender = `
        <section class="ingredient">
            <h1>${ingredient.strIngredient}</h1>
            <p class="detail">${ingredient.strType}</p>
            <p class="detail">Average ABV: ${ingredient.strABV ? `${ingredient.strABV}%` : "Unknown"}</p>
            <section class="ingredient-desc">${desc}</section>
        </section>
    `

    renderSection.innerHTML = ingredientToRender
    document.getElementById("search-ingredient").value = ""
}