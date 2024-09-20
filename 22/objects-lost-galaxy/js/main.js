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

const mouse2 = {}
mouse2.brand = "Logitech"
mouse2.color = "black"
mouse2.model = "Pro Wireless"
mouse2.wireless = true
mouse2.leftClick = function() {
    console.log("Left click")
}
mouse2.rightClick = function() {
    console.log("Right click")
}
mouse2.scroll = function() {
    console.log("Jump")
}

const mouse3 = {}
mouse3.brand = "Apple"
mouse3.color = "silver"
mouse3.model = "MAgic Trackpad 2"
mouse3.wireless = true
mouse3.leftClick = function() {
    console.log("Left click")
}
mouse3.rightClick = function() {
    console.log("Right click")
}
mouse3.scroll = function() {
    console.log("Slide two fingers")
}