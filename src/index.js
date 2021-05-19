// const addElements = import('add-elements');
// console.log('Bienvenido a mi página')
// addElements.addElement('div','Test text', 'content')

import './style.css';
import mainImage from '../assets/images/main-picture.jpeg'
import addElement from './addElements.js';
console.log('Bienvenido a mi página');

const element = document.querySelector('#content');
addElement('div','Test text', 'content');

// Add the image to our existing div.
const myImage = new Image();
myImage.src = mainImage;

element.appendChild(myImage);
