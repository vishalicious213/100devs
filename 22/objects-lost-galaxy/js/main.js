//Create a mouse object that has four properties and three methods

const mouse = {}

mouse.brand = "Logitech"
mouse.color = "black"
mouse.model = "MX Ergo"
mouse.wireless = true

mouse.leftClick = function() {
    console.log("Left click")
}

mouse.rightClick = function() {
    console.log("Right click")
}

mouse.scroll = function() {
    console.log("Jump")
}