import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

    const history = useHistory()
    
   

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((ticketArray) => {
                    updateTickets(ticketArray)
                })
        },
        []
    )

        //you can put a ternary operator within a className, as seen below
    return (
        
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`ticket ${ticket.emergency ? `emergency`:""}`}>
                                {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                            </div>
                    }
                )
            }
        </>
    )
}