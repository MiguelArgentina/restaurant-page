import {addElementAsChild, addElementAsSibling, addUl, navBarClassesUpdater} from './addElements.js';


export default function ourSpaceTabContent() {
const ourSpaceTabContent = addElementAsSibling('div', 'ourSpaceTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);
document.querySelector('#ourSpaceTabContent').style.backgroundImage = `url('../assets/images/locro.jpeg')`;
document.querySelector('#ourSpaceTabContent').style.backgroundSize = 'cover';
navBarClassesUpdater('Our home')

const parentElement = document.querySelector('#ourSpaceTabContent');
parentElement.classList.add('d-flex')
parentElement.classList.add('align-items-end')
const pElement = document.createElement('p');
const greetingText = document.createTextNode("Welcome to our restaurant, where you'll find the most exquisite Argentinian traditional food, in a comfortable environment and accompanied by the best folclore, the argentinian country music");
pElement.appendChild(greetingText);
pElement.classList.add('text-light')
pElement.classList.add('fs-3')
pElement.classList.add('text-start')

parentElement.appendChild(pElement);



}
