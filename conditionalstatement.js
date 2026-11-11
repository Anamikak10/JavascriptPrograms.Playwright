/*if(condition){
}*/


let age=30
let hasLicense=false //"false= sorry" "true= congrates"
if(age>=18)
{
    console.log("you can drive")
}
if(hasLicense)
{
    console.log("congarts")
}
else
{
    console.log("sorry")
}

//multiple conditions 
/*if(condion1){
}
else if(condition2){
}
else{
}*/

let marks = 2
if(marks>=50)
{

        console.log("grade= A+")
}
    else if (marks>=70)
{
        console.log("grade=A")
}
else if (marks>=60)
{
        console.log("grade=B+")

}
else if (marks>=50)
{
        console.log("grade=B")
}
else{
    console.log("Failed")
}

//ternary operator
//condition ? exprnTrue :exprnFalse;

const result = age>=18? "you can drive" : "sorry"
console.log(result)



//Switchstatement multiple cases checking 

/*switch(exprn)
{
case value
case value2
case value 3
case value n
default
}*/

let day =8
switch(day)
{
    case 1:
        console.log("today is  monday")
        break//exit immidiately jumping loop
    case 2:
        console.log("today is  Tuesday")
        break
    case 3:
        console.log("today is  Wednesday")
        break
    case 4:
        console.log("today is  Thursday")
        break
    case 5:
        console.log("today is  Friday")
        break
    case 6:
        console.log("today is  Saturday")
        break
    case 7:
        console.log("today is  Sunday")
        break
        default:
            console.log("Invalid")
}


