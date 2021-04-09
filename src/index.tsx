import * as _ from 'lodash';
import './style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';


if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode!');  
}

const myContainer: any = document.createElement('section');
myContainer.id = 'sct';
document.body.appendChild(myContainer);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    myContainer
)