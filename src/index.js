import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repairs } from './components/Repairs';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


//Line 11 is invoking that function, even though we are using HTML tags
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  
      <Repairs />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
//Wrapping Repairs in BrowserRouter has made Repairs a child component 
// of BrowserRouter and we have enabled routing for the entire application
//also defines where the routes are placed...in the Repairs component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
