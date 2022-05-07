import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// the below method to put root into a const does not work - add this function into the ReactDOM.render function
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
   document.getElementById('root')
  //  is this the old React version?  This is from Module
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
