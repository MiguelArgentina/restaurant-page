import './style.css';
import { addUl } from './addElements';

export default function onLoadActions() {
  document.querySelector('body').style.backgroundImage = 'url(\'../assets/images/bg-main.jpg\')';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.backgroundRepeat = 'repeat-y';

  addUl('main-nav-bar', '#content', ['Our home', 'Menu', 'Reservations', 'Contact Us'], ['nav', 'nav-tabs'], ['nav-item']);
}
