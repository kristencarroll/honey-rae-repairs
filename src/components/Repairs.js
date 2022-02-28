import React, { useEffect, useState }from "react"

//WHAT STATE DO I WANT THIS COMPONENT TO RENDER--customers

//whatever this component returns will be the HTML that gets
//generated in the browser

//instead of defining applicationState as an object with keys and values...

//(in react components, the HTML we write is called JSX)
export const Repairs = () => {
    //...declare and deconstruct and array and use this function called a HOOK--
    //this is how you define State in react 
    //useState takes ONE argument and returns an ARRAY...the INITIAL value is an empty array
        //first: [customers, ] catches initial value
        //second: [ , setCustomers] gives a function to set value of customers later on (just holds the function that modifies the State)
    const [customers, setCustomers] = useState([])

    //next use another built-in function of react, another HOOK (because starts with "use")
    //sole purpose of useEffect is to run code when the STATE changes-it's an event listener
    //useEffect takes TWO arguments...
    useEffect(
        //first: is a function
        () => {
            //get data from api, and pull into applicationState of "customers".use fetch
            fetch("http://localhost:8088/customers")
            //convert json encoded string into javascript
                .then(res => res.json())
                //now invoke setCustomers to set the value of customers
                //customerArray is what came back from the API
                .then((customerArray) => {
                    //cannot directly modify STATE in react--use the function it provided you
                    //when you established the state variable to change the value
                    //therefore invoke setCustomers, and its single argument is what you want the STATE
                    //to be, which is the STATE you get from the API
                    setCustomers(customerArray)

                })
        },
        //second is always an array
        []
    )

                /*Pulled state from the API, now have it in State variable
                 which lives inside of this component.  Ready to iterate and 
                 generate html*/



    //for any component inside React that you want to generate HTML in has to have
    //a return statement with parenthesis
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
        
            {
                customers.map(
                    (customerObject) => {
                        return <h2>{customerObject.name}</h2>
                    }
                ) 
            }
        </>
    )
} 