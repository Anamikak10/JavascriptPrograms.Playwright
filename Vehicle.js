class Vehicle //class syntax 
{
    startEngine()
    {
        console.log("start engine function invoked")
    }
    constructor(brand,colour)// non parameter constructor 
    {
        console.log("construstor invoked")
        this.brand  = brand 
        this.colour = colour 
    }
    displayCarDetails()
    {
        console.log(this.brand)
        console.log(this.colour)

    }
}
const vehicleobject= new Vehicle("KIA","JetBlack") //object creation 
vehicleobject.startEngine()
vehicleobject.displayCarDetails()

const vehicleobject1= new Vehicle("BULLET","JetBlack")
vehicleobject1.startEngine()
vehicleobject1.displayCarDetails()


