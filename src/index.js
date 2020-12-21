import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode!');
}

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello,', 'webpack!', 'My', 'name', 'is', 'Denis '], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    btn.innerHTML = 'Click me and check what you did!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());