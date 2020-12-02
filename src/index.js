import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'my', 'name', 'is', 'Denis'], ' ');

    return element;
}

document.body.appendChild(component());