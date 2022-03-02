import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

//Link component imported from react-router-dom has one job to generate 
//anchor tags
//"to" attribute is the href attribute of the anchor tag the Link component
//creates

//when someone clicks on a link, it will change the browser url
export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tickets">Service Tickets</Link>
            </li>

        </ul>
    )
}