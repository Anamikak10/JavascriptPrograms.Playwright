export class Animal 
{
    constructor(name)
    {
        this.name=name 
    }
    eat()
    {
        console.log('${this.name}can eat')
    }
}
const Animalobject1 =new Animal("maggie")
Animalobject1.eat()
