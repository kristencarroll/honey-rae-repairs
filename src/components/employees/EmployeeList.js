import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    //chap.6-create a New state variable
    const [totalEmployeeSpecialties, setSpecialty] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployee(employeeArray)
                })
        },
        []
    )

    useEffect(() => {
        
            //1. Use .map() to get the specialty of each employee
            const employeeSpecialties = employees.map(employee => employee.specialty) 
           
            //2. Then update a state variable to be a comma-separated string
                //(e.g. "iPhone, Printers, ...")
            setSpecialty(employeeSpecialties.join(", "))
            
    }, [employees])

    //invoke {totalEmployeeSpecialties} interpolated behind the colon in the <div> tag

    return (
        <>
            <div>
                Specialties: {totalEmployeeSpecialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.name}</p>
                    }
                )
            }
        </>
    )
}