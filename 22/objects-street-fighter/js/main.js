//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(SFCountry, SFHeight, SFWeight, SFGender) {
    this.country = SFCountry
    this.height = SFHeight
    this.weight = SFWeight
    this.gender = SFGender

    this.roundhouse = function() {
        console.log("Roundhouse kick")
    }

    this.fierce = function() {
        console.log("Fierce punch")
    }

    this.throw = function() {
        console.log("Throw")
    }
}