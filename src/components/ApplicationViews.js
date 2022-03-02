//The responsibility of this component is to determine which view
//of the application should be rendered depending on what the url on the 
//browser is
import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { TicketList } from "./serviceTickets/TicketList"

//this works in tandem with our navbar... the routes are listening for 
//th event when someone clicks on the link in navbar
// when the url matches it will display the corresponding component
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/tickets">
                <TicketList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>


        </>
    )
}
//once again, this component is only listening for the url change
//and will render the one that is the matching component