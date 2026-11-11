const car =
{
    colour :"Blue",
    brand :"BMW",
    price:"5000000",
    isautomate: true, //boolean type 
    features:["X5","AUTOMATIC"],//array
    engine: //nested object
    {
        type:"Petrol",
        Seats:5
    },
    details:function()
    {
        console.log(this.colour)
        console.log(this.brand)
    }
}
console.log(car.colour)
console.log(car.features[1])
console.log(car.engine.Seats)
car.details()
import data from "./Data.json" with {type:'json'}
const datastring = JSON.stringify(data)
const datajs=JSON.parse(datastring)
console.log(datajs.brand)

