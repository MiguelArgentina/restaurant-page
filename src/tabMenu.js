import {addElementAsChild, addElementAsSibling, addUl, navBarClassesUpdater} from './addElements.js';


export default function ourMenuTabContent() {
  console.log('ourMenu');
const ourMenuTabContent = addElementAsSibling('div', 'ourMenuTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);
document.querySelector('#ourMenuTabContent').style.backgroundImage = `url('../assets/images/empanadas.jpeg')`;
document.querySelector('#ourMenuTabContent').style.backgroundSize = 'cover';
document.querySelector('#ourMenuTabContent').style.backgroundRepeat = 'no-repeat';
navBarClassesUpdater('menu')
}

