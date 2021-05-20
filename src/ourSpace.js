import {addElementAsChild, addElementAsSibling, addUl} from './addElements.js';


export default function ourSpaceTabContent() {
  console.log('onLoadActions');
const ourSpaceTabContent = addElementAsSibling('div', 'ourSpaceTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);
document.querySelector('#ourSpaceTabContent').style.backgroundImage = `url('../assets/images/locro.jpeg')`;
document.querySelector('#ourSpaceTabContent').style.backgroundSize = 'cover';
}
