import { employee } from "./employee.js"

class manager extends employee
{
    constructor (task)
        {
            super(345,"anu")
            this.task=task
        }
responsibility()
{
    console.log(`${this.task}is managing`)
}
    displaydetails()
        {
            console.log("inside displaydetails")
        }
}
const managerobj=new manager("task")
managerobj.responsibility()

managerobj.displaydetails()
managerobj.printdetails()

const employeeobj=new employee(346,"laya")
employeeobj.printdetails()
employeeobj.responsibility()
console.log(employeeobj.empID)
console.log(employeeobj.empName)


