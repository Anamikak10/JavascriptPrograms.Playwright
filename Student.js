class Student //class syntax
{
    displayMarks()
    {
        console.log(this.name)
        console.log(this.mark1)
        console.log(this.mark2)
        console.log(this.mark3)
    }
    constructor(name, mark1, mark2, mark3)
    {
        console.log("constructor invoked")
        this.name = name
        this.mark1 = mark1
        this.mark2 = mark2
        this.mark3 = mark3
    }
    displayAverage()
    {
        let average = (this.mark1 + this.mark2 + this.mark3) / 3
        console.log("Average:", average)
    }
}
const studentobject = new Student("Anu", 80, 90, 70) //object creation
studentobject.displayMarks()
studentobject.displayAverage()

const studentobject2 = new Student("Akku", 60, 90, 70) //object creation
studentobject2.displayMarks()
studentobject2.displayAverage()

