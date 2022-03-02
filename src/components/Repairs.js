//Following the Single Responsibility Principle, this component's responsibility is to 
//determine in which order components should be displayed and general layout (like a main.js)

//it is a CONTAINER component. It renders no HTML itself, but contains other 
//components that are responsible for the presentation and behavior of the application

import React from "react"
//import {CustomerList} and display under h1
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import "./Repairs.css"

//(in react components, the HTML we write is called JSX)
export const Repairs = () => {

  //render CustomerList under h1
    return (
        <> 
            <NavBar />
            <h1>Honey Rae's Repair Shop</h1>
            
            <ApplicationViews />
    
        </>
    )
} 

//NavBar is a Presentation Component. Directly expresses HTML.
//ApplicationViews Controller Component. Its only responsibility to to control the 
//behavior of the system and maps URLs to components.
 

//JSX only returns ONE element, so all headings need to be put in a single element 
//using <> </>  (a fragment) and that makes the siblings of h1 and h2 into children
//under that single fragment