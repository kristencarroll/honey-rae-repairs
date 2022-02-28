//Following the Single Responsibility Principle, this component's responsibility is to 
//determine in which order components should be displayed and general layout (like a main.js)



import React from "react"
//import {CustomerList} and display under h1
import { CustomerList } from "./customers/CustomerList";
//import {EmployeeList} and display under h1
import { EmployeeList } from "./employees/EmployeeList";


//(in react components, the HTML we write is called JSX)
export const Repairs = () => {

  //render CustomerList under h1
    return (
        <> 
            <h1>Honey Rae's Repair Shop</h1>
            
            <h2>CustomerList</h2>
            <CustomerList />
            
            <h2>Employee List</h2>
            <EmployeeList />
    
        </>
    )
} 
 

//JSX only returns ONE element, so all headings need to be put in a single element 
//using <> </>  (a fragment) and that makes the siblings of h1 and h2 into children
//under that single fragment