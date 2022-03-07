import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"

//define an export a function that renders the details off a single ticket
//when it is clicked on
export const Ticket = () => {
    const [ticket, assignTicket] = useState({})
    const [employees, setEmployees] = useState([])
    //use object restructuring to capture the exact name of what named in the 
    //route in ApplicationViews
    //now that we've got the primary key of the ticket, go to the api and get the entire
    //data in order to populate the JSX with the description and all the other info
    const { ticketId } = useParams()
    //set the history variable to use the history hook as the last step in this component
    const history = useHistory()

//Chap 14, NOW instead of just displaying the user, create a dropdown of the employees.
//First, have to GET all the employees since you need them to populate the dropdown 
//with all of them.  NEED ANOTHER useEffect() (the other one only works when the route changes)

//Want to render all the employees as JSX, so need STATE, because everything in JSX
//gets rendered from state..therefore define another state variable above to hold the array of
//employees
useEffect(
    () => {
        return fetch("http://localhost:8088/employees")
        .then(response => response.json())
        .then((data) => {
            setEmployees(data)
        })
    },
    [] //only runs when initial JSX rendering is complete
)
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
    //define a function that will construct a new Object with all the proper keys and values
    //when the employeeId is changed. It will be responding to the change event of changing the employee,
    //therefore it is basically an event listener and will take the change as its parameter (prop?)
    const assignEmployee = (changeEvent) => {
        //still getting the ticketId from the url and it is the exact one we are modifying, so it is used down here
        //BUT we need options for this one, so we need an object where we can specify the options...
        //which the method on it is not a GET...it's a PUT
        //json always wants a specific header or meta data, and 
        //in the body is the new object we're going to create...must be built in the stringify()
        //to replace  whatever service ticket is being edited (the changeEvent)
        //this is the function that is used to do the PUT request
        //MAKE SURE IT IS INVOKED WHEN THEY CHANGE THE ACTIVE OPTION IN THE SELECT ELEMENT
        //PASS the function to the onChange below to do that
        const newServiceTicketObject = {
            //remember the currently authenticated user is in local storage
            customerId: ticket.customerId,//parseInt(localStorage.getItem("honey-customer")),
            //employeeId will come from one of the options that were chosen down below...it has the 
            //employee.name but each option now needs a VALUE so that it can be snagged when the user changes the 
            //select element
            employeeId: parseInt(changeEvent.target.value), //coming from the DOM as a string, so parseInt
            //description can come from the existing ticket, because we are not modifying that
            description: ticket.description,
            //same for emergency as it is also not being modified
            emergency: ticket.emergency,
            //and same for dateCompleted
            dateCompleted: ticket.dateCompleted
            //this newly created object will replace the one that is up there^^^...needs to be turned into a
            //string to return it to the API.

            //LASTLY use the history Hook to take the customer back to the list of service
            //tickets
        }
        return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newServiceTicketObject)
        })
        .then(response => response.json())
        .then(() => {
            history.push("/tickets")
        })
        //REMEMBER json does not send anything back on a PUT request^^^
    }
    
    return (
        <>
            <h2>Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.name}</div>
                <div className="ticket__employee">Assigned to
                    <select id="employee" onChange={assignEmployee}> 
                        {
                            employees.map(
                                (employee) => {
                                    return <option value={employee.id} key={`employee--${employee.id}`}>
                                        {employee.name}
                                    </option>
                                }
                            )
                        }
                    </select>
                </div>
            </section>
        </>
    )
}

//the ? in the above interpolation means "display the name" ONLY if the customer, or employee property 
//exist on the ticket, display the name property
