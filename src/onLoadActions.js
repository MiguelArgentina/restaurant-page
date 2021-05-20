
import './style.css';
import bgImage from '../assets/images/spices.jpg'
import {addElementAsChild, addElementAsSibling, addUl} from './addElements.js';
//import addElementAsSibling from './addElements.js';
export default function onLoadActions() {
console.log('onLoadActions');

document.querySelector('body').style.backgroundImage = `url('../assets/images/bg-main.jpg')`;
document.querySelector('body').style.backgroundSize = 'cover';
document.querySelector('body').style.backgroundRepeat = 'repeat-y';



document.body.addEventListener( 'click', function ( event ) {
  if( event.target.innerText == 'Our home' ) {
    console.log(event.target.innerText)
  }
  else if( event.target.innerText == 'Menu' ) {
    console.log(event.target.innerText)
  }
  else if( event.target.innerText == 'Reservations' ) {
console.log(event.target.innerText)
  }
  else if( event.target.innerText == 'Contact Us' ) {
console.log(event.target.innerText)
  };
} );

const mainNavBar = addUl('main-nav-bar', '#content', ['Our home', 'Menu', 'Reservations', 'Contact Us'], ['nav', 'nav-tabs'], ['nav-item'])


const newElement = addElementAsChild('div', 'main-bg-container','parent', '#content', ['container-fluid', 'bg-image-container']);
const newElement2 = addElementAsChild('div', 'first-child','first-child', '#main-bg-container', ['container-fluid']);
const newElement3 = addElementAsSibling('div', 'first-sibling','first-sibling', '#first-child', ['container-fluid']);
const newElement4 = addElementAsSibling('div', 'second-sibling','second-sibling', '#first-child', ['container-fluid'],true);





// Add the image to our existing div.
// const myImage = new Image();
// myImage.src = bgImage;
// myImage.style.width = "100%";
//newElement.appendChild(myImage);





}
