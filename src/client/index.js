//const _ = require('lodash');

function component() {
    let element = document.createElement('div');
    element.innerHTML = '<strong>Hello human...</strong>';
    return element;
}

document.body.appendChild(component());
