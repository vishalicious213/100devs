const menu = document.getElementById("menu")
const renderSection = document.getElementById("render-area")

// ⬇️ EVENT LISTENERS ⬇️

menu.addEventListener("click", menuClick)

// ⬇️ EVENT HANDLERS ⬇️

function menuClick(e) {
    // console.log(e.target.id)
    if (e.target.id === "name-btn") {
        getData("s")
    }

    if (e.target.id === "spirit-btn") {
        getData("i")
    }
}

function getData(btn) {
    let searchTerm = ""

    if (btn === "s") {
        searchTerm = document.getElementById("search-name").value
    }

    if (btn === "i") {
        searchTerm = document.getElementById("search-spirit").value
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
            renderSpirit(data.ingredients[0])
        }
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
    document.getElementById("search-name").value = ""
}

function renderSpirit(spirit) {
    console.log(spirit)
    renderSection.innerHTML = ""
    let descArr = []
    let desc = `<p>No description available</p>`

    if (spirit.strDescription) {
        descArr = spirit.strDescription.split(/\r?\n/).filter(line => line.trim() !== "")
        desc = descArr.map(line => `<p>${line}</p>`)
    }

    const spiritToRender = `
        <section class="spirit">
            <h1>${spirit.strIngredient}</h1>
            <p class="detail">${spirit.strType}</p>
            <p class="detail">Average ABV: ${spirit.strABV ? `${spirit.strABV}%` : "Unknown"}</p>
            <section class="spirit-desc">${desc}</section>
        </section>
    `

    renderSection.innerHTML = spiritToRender
    document.getElementById("search-spirit").value = ""
}