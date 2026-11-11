import {Animal}from "./Animal.js"
class dog extends Animal
{
    constructor(name,bread)
{
    super(name) //parent class ref
    //this.name=name
    this.bread = bread
}
bark()
{
    console.log("child class method-bark()")
}
}

const dogobject = new dog("Maggie","Lab")
dogobject.bark()
dogobject.eat()


const Animalobject =new Animal("maggie")
Animalobject.eat()



