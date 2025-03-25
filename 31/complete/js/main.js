class Animal{
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name
    }

    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }

    get breed(){
        return this._breed
    }

    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}

class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }

    get breed(){
        return this._breed
    }

    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}

class Cow extends Animal{
    constructor(name) {
        super(name)
    }

    speak() {
        super.speak()
        console.log(`${this.name} moos`)
    }
}

let simba = new Dog('Simba', 'Shepard')
let machi = new Dog('The Machine', 'Pitbull')
let salem = new Cat('Salem', 'American Shorthair')
let bella = new Cow('Bella')

let farm = [simba, machi, salem, bella]

for( a of farm ){
    a.speak()
}