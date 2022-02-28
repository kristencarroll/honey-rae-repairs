//WHAT STATE DO I WANT THIS COMPONENT TO RENDER--employees
//whatever this component returns will be the HTML that gets
//generated in the browser, SO THIS COMPONENT SHOULD ONLY DISPLAY EMPLOYEES List
import React, { useEffect, useState }from "react"

//define and export a function that pulls state from api and renders the html
//for the employee list

export const EmployeeList = () => {

    //define state with useState Hook
    const [employees, setEmployees] = useState([])

    //use the useEffect HOOK to run the code when the State changes 
    //remember it take two arguments an function and an array
    useEffect(
        () => {
            //fetch data from api
            fetch("http://localhost:8088/employees")
            //convert json encoded string into javascript
                .then(res => res.json())
            //invoke setEmployees to set the value of employees
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })
        },
        
        []
    )
    return (
        <> 
            <h2>Employee List</h2>
           
           {
                employees.map(
                    (employeeObject) => {
                        return <h3 key={`employee--${employeeObject.id}`}>{employeeObject.name}</h3>
                    }
                ) 
            }
        </>
    )
}