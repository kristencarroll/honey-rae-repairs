import React, { useState } from "react"
import { useHistory } from "react-router-dom"

//sole responsibility of this component is to create a 
//ticket form for users to submit repair request tickets

//remember that as user is typing in information it is 
//transient state UNTIL they click the submit button to send
//it to the API and make it permanent state
//check notes in chap 10
        //the initial state in useState is an OBJECT,
        //therefore give it some initial properties for each
        //of the form fields

        
export const TicketForm = () => {
            
    const [ticket, updateTicket] = useState({
        description: "",
        emergency: false
    })
     //set the value of the history variable to be used in the fetch that is POSTing
    // the fetchOption 
    const history = useHistory()
            
    //define the function that is needed to perform the POST operation
    //when the submit ticket button is clicked

    //to prevent the default behavior of the browser, capture the event as a 
    //argument to submitTickets
    const submitTicket = (event) => {
        event.preventDefault()        
        //useState variable to create an object to POST to the API
        const newTicket = {
        //first two properties we get from state
            description: ticket.description,
            emergency: ticket.emergency,
            //the customerId needs to be pulled from local storage
            //and added to this new object
            customerId: parseInt(localStorage.getItem("honey_customer")),
            
            //originally we hard-coded 1 to the employeeId, but that employee is not always
            //going to be working on that ticket, so we need to change the employee that is 
            //assigned to the ticket
            employeeId: 1, //so we are going to create a dropdown IN the Ticket component itself...
            dateCompleted: ""
        }
         ///^^^this is the object that gets sent to the API, so now there needs
            //to be a fetch operation
            //first, set up the options that need to be specified when we do a POST...
            //notes chap 10
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(newTicket)
        }
                
        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/tickets")
            })
    }
            
        //put an onChange event listener on the text field
        //to update to update just the description property
        //in State
    return (
                <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...ticket}
                                copy.description = event.target.value
                                updateTicket(copy)
                            }
                        }
                        required autoFocus
                        type="text" id="description"
                        className="form-control"
                        placeholder="Brief description of problem"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...ticket}
                                copy.emergency = event.target.checked
                                updateTicket(copy)
                            }
                        }
                        type="checkbox" />
                </div>
            </fieldset>
            <button onClick={submitTicket} className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}
//when SUBMIT is clicked, another function is needed to perform the
//POST operation..
//write it ABOVE the returned JSX

//add onClick to button to invoke submitTicket function when button
//is clicked