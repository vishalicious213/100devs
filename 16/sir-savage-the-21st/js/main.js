//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function twentyOne() {
    const savageSays = document.getElementById("savageSays")

    for (let x=1; x <= 21; x++) {
        savageSays.innerText += " 21"
        console.log("21")
    }
}

twentyOne()