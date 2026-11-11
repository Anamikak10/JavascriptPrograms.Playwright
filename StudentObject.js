//key value- property value pairs.
//object is a datatype to store the multiple values 

const student=
{
    name:"ANAMIKA", //key value
    age:"25",
    city:"Kannur",
}
console.log(student.name) //dotnotation way
console.log(student["age"]) //bracket notation way 

//add gender 

student.gender="female"
console.log(student) //object complete run

//update the existing value in the object 
student.age="22"
console.log(student.age)

delete student.gender //delete method
console.log(student.gender)

//for in loop

for(let key in student)
{
    console.log(key +":" +student[key])
}

