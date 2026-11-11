//Loopingstatements  using forof loop(only for arrays)
let numarray =[1,2,3,4,5]
for(let num of numarray)
{
    console.log(num)
}
console.log("using for loop")
let sum= 0
for(let i=0; i<numarray.length;i++)
{
    //console.log(numarray[i])
    sum+=numarray[i] //sum=sum +num of i
}
console.log(sum)
//sum of array elemence reduse using reduce  method 
console.log("method-reduce")
let total=numarray.reduce((p,c)=>p+c,10)   //=> arrowfuction c value numofarray 
console.log(total)

//filter array- filter elements from an array based on a condition 
let filterarray=numarray.filter(n=>n%2==0)
console.log(filterarray)


console.log("map method")
let doublearray= numarray.map(n=>n*2)
console.log(doublearray)

let narray = [5, 10, 15, 20, 25, 30];
const result = narray.filter(num => num % 5 === 0).map(num => num * 5).reduce((p,c) => p+c);
console.log(result);


