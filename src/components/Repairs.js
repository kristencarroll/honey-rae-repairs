//Following the Single Responsibility Principle, this component's responsibility is to 
//determine in which order components should be displayed and general layout (like a main.js)

//it is a CONTAINER component. It renders no HTML itself, but contains other 
//components that are responsible for the presentation and behavior of the application

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Repairs.css";


//every route has a custom rendering function that can be specified if it needs to be.
//if you need to have some logic about which component should be rendered,
//use custom render function to determine which component should be rendered
//therefor if there is currently something in local storage (user has logged in),
//then render navBar and ApplicationViews, otherwise redirect to the login 
export const Repairs = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("honey_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          ); 
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);


//NavBar is a Presentation Component. Directly expresses HTML.
//ApplicationViews Controller Component. Its only responsibility to to control the 
//behavior of the system and maps URLs to components.
 

//JSX only returns ONE element, so all headings need to be put in a single element 
//using <> </>  (a fragment) and that makes the siblings of h1 and h2 into children
//under that single fragment