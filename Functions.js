//code reusable block of code is function(function declaration)
function printHello()
{
    console.log("Hello World")
}
printHello()
//function with parameter 
function addition(a,b)
{
    let result =a+b
    console.log(result)
}
addition(5,10)
addition(6,4)

function subtraction(a,b)
{
    let result =a-b
    console.log(result)
}
subtraction(10,5)
subtraction(6,4)

//function with return 

function subtraction(a,b)
{
    let result =a-b
    return (result)
}
const output = subtraction(10,5)
console.log(output)
console.log(subtraction(20,10))//only console 

//anonymous function 
const greet =function()
{
    console.log("Welcome to ootty")
}
greet()

//arrow function 
const display = ()=>{console.log("My name is Anu")}
display()

const add= (a,b,c)=>a+b+c
const sum=add(2,4,6)
console.log(sum)