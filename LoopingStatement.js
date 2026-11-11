//for,while,do-while

//syntax - for loop
/*for(initialize;condition;updation){
//code
}*/

for(let i=1 ;i<=5 ; i++) 
{
 console.log(i)
}

//i=1 1<=5 true print 1
//1=2 2<=5 true print 2
//i=3 3<=5 true print 3
//1=4 4<=5 true print 4
//i=5 5<=5 true print 5
//i=6 6<=5 false 

//print 10 -20 
for(let i=10; i<=20; i++)
{
 console.log(i)
}

//vowels

let vowelChar ="a"
switch (vowelChar)
{
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    console.log("vowel")
    break 

    default:
        console.log("not vowel")
}

//while loop

/*initialize;
while(condition){
//updation
}*/

let a=5;
while(a<=10)
{
    console.log(a)
    a++
}


//print 10-1 using while loop 

    let c=10
    while(c>-1)
    {
        console.log(c)
        c--
    }



//do while 
/*do{
}whole(condition)*/ 

let b=5
do
{
   console.log(b)
b++
}
while(b>10) 


