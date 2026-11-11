export class employee
{
    constructor(empID, empName)
    {
        this.empID = empID
        this.empName = empName
    }

    responsibility()
    {
        console.log("Employee")
    }

    printdetails()
    {
        console.log(this.empID)
        console.log(this.empName)
    }
}