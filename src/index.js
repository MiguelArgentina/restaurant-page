// const addElements = import('add-elements');
// console.log('Bienvenido a mi página')
// addElements.addElement('div','Test text', 'content')

import './style.css';
import onLoadActions from './onLoadActions';
import ourSpaceTabContent from './tabHome'
import clearContainer from './clearContainer'
import ourMenuTabContent from './tabMenu'

document.body.addEventListener( 'click', function ( event ) {
  if( event.target.innerText == 'Our home' ) {
    console.log(event.target.innerText)
    clearContainer('#content', ['main-nav-bar'])
    ourSpaceTabContent()
  }
  else if( event.target.innerText == 'Menu' ) {
    console.log(event.target.innerText)
    clearContainer('#content', ['main-nav-bar'])
    ourMenuTabContent()
  }
  else if( event.target.innerText == 'Reservations' ) {
console.log(event.target.innerText)
  }
  else if( event.target.innerText == 'Contact Us' ) {
console.log(event.target.innerText)
  };
} );


console.log('Bienvenido a mi página');
onLoadActions()
ourSpaceTabContent()


//ourSpaceTabContent()