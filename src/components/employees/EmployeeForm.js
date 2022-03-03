import React, { useState } from "react"
import { useHistory } from "react-router-dom"

//define and export a function that creates a new employee 
//hiring form
export const EmployeeForm = () => {
    //initialize state utilizing useState
    const [employee, setEmployee] = useState({
        name: "",
        specialty: "",
    })
    
    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty
        }
        
    
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })


    }
    
        //return the JSX that populates the form...it should have a 
        //form className, title, two fieldsets with text inputs
        //for name and specialty, and a Hire Employee button 
    return (
                <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                setEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="name"
                        className="form-control"
                        placeholder="Full Name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.specialty = event.target.value
                                setEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="specialty"
                        className="form-control"
                        placeholder="Technical Specialty"
                        />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Hire Employee
            </button>
        </form>
    )
}        
