import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

//define an export a function that renders the details off a single ticket
//when it is clicked on
export const Ticket = () => {
    const [ticket, assignTicket] = useState({})
    //use object restructuring to capture the exact name of what named in the 
    //route in ApplicationViews
    //now that we've got the primary key of the ticket, go to the api and get the entire
    //data in order to populate the JSX with the description and all the other info
    const { ticketId } = useParams()

    //want the function in useEffect to run the value of the ticketId variable has changed
    //SO THE ARRAY IS NOT EMPTY
    useEffect(
        //as soon as the ticketId has a value, meaning it has been captured from the url, means we now
        //want to take it and go get it from the api.  Now we can interpolate it inside of the fetch url
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(response => response.json())
                
                //REMEMBER that data parameter is what is being returned after fetching the data, then converting 
                //the json string back into a javaScript Object...it is the INDIVIDUAL ticket
                .then((data) => {
                    //now update the STATE variable with assignTicket...now the state of this component will be
                    //populated with what we got from the API
                    assignTicket(data)
                })
        },
        //when we get this from the api, we need to store it in the component so we can use it in the JSX
        //so, WE NEED A STATE VARIABLE...create a useState variable to hold an individual ticket...
        //just under Ticket function definition

        [ ticketId ]
    )
    
    return (
        <>
            <h2>Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to {ticket.employee?.name}</div>
            </section>
        </>
    )
}

//the ? in the above interpolation means "display the name" ONLY if the customer, or employee property 
//exist on the ticket, display the name property
