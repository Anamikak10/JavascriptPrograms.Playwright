//how declare array

let fruits=["Orange","Rambootan","Pinapple",] //index= element position - index starting from 0. orage(index is 0). length is 3 index is 2.
console.log(fruits[1])// result is rambootan
console.log(fruits.length)// finding array length 
fruits.push("Apple")//adding elements in to array using method push  
console.log(fruits)
fruits.pop()//remove last element in array using method pop
console.log(fruits) 
fruits.shift()//remove the first element in the array - method is shift 
console.log(fruits)
fruits.unshift("kiwi")//adding element in the array of front 
console.log(fruits)
console.log(fruits.includes("orange")) //checking the array in the  elements is exist
console.log(fruits.indexOf("Rambootan"))//find the index of element 
fruits.push("Grapes","bannana","Orange")
console.log(fruits)
const slicedArray =fruits.slice(1,4)//slice method - takig elements from an array without changing the original array
console.log(slicedArray)  //original arry changing method
console.log(fruits)
//splice method used to delete the array 
fruits.splice(2,1)
console.log(fruits)
fruits.splice(3,0,"mango","apple","cherry,")  //between adding an element into the array 
console.log(fruits)
fruits.splice(3,1,"guava")
console.log(fruits)

