import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, assignEmployee] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    //after JSX is rendering, we need a useEffect
    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(response => response.json())
                .then((data) => {
                    assignEmployee(data)
                })
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>  
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="ticket__customer">{employee.specialty}</div>
            </section>
        </>
    )
}
//does not seem to need the ? optional chaining that is in the Ticket component, because
//there are no foreign keys of embedded objects (no embedded objects)