class coffeeMachine /*for hide or private  #using */
{
    #boilwater()
    {
        console.log("boiled water")
    }
    #addmilk()
    {
        console.log("add milk")
    }
    #addsugar()
    {
        console.log("add sugar")
    }
    #addcoffeepowder()
    {
        console.log("add coffee powder")
    }
     #addTeapowder()
    {
        console.log("add tea powder")
    }
    makecoffee()
    {
        this.#boilwater()
        this.#addmilk()
        this.#addsugar()
        this.#addcoffeepowder()
        console.log("COFFEE IS READY")
    }
    maketea()
    {
         this.#boilwater()
        this.#addsugar()
        this.#addTeapowder()
        console.log("TEA IS READY")
    }
}
const coffeeobj= new coffeeMachine()
coffeeobj.makecoffee()
coffeeobj.maketea()