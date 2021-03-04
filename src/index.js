import _ from 'lodash';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode!');  
}

const myContainer = document.createElement('section');
myContainer.id = 'sct';
document.body.appendChild(myContainer);

{/* const app = React.createElement("main", null, App()); 

ReactDOM.render(app, document.getElementById('sct')); */}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    myContainer
)