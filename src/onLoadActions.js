
import './style.css';
import bgImage from '../assets/images/spices.jpg'
import {addElementAsChild, addElementAsSibling, addUl} from './addElements.js';

export default function onLoadActions() {


document.querySelector('body').style.backgroundImage = `url('../assets/images/bg-main.jpg')`;
document.querySelector('body').style.backgroundSize = 'cover';
document.querySelector('body').style.backgroundRepeat = 'repeat-y';



const mainNavBar = addUl('main-nav-bar', '#content', ['Our home', 'Menu', 'Reservations', 'Contact Us'], ['nav', 'nav-tabs'], ['nav-item'])



}
