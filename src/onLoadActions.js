import './style.css';
import { addUl } from './addElements';

const onLoadActions = () => {
  addUl('main-nav-bar', '#content', ['Our home', 'Menu', 'Reservations', 'Contact Us'], ['nav', 'nav-tabs'], ['nav-item']);
};

export default onLoadActions;