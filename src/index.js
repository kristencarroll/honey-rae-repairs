import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Repairs } from './components/Repairs';
import reportWebVitals from './reportWebVitals';


//Line 11 is invoking that function, even though we are using HTML tags
ReactDOM.render(
  <React.StrictMode>
    <Repairs />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
