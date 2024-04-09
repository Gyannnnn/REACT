import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chai from './chai'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Chai/>
    <h1> Render line</h1>
    <App />
    <h1>Under The Appp</h1>
    </>
  
);


reportWebVitals();
