
import './style.css';
import onLoadActions from './onLoadActions';
import ourSpaceTabContent from './tabHome'
import clearContainer from './clearContainer'
import ourMenuTabContent from './tabMenu'
import reservationsTabContent from './tabReservations'
import contactTabContent from './tabContact'


document.body.addEventListener( 'click', function ( event ) {
  if( event.target.innerText == 'Our home' ) {
    clearContainer('#content', ['main-nav-bar', 'footer'])
    ourSpaceTabContent()
  }
  else if( event.target.innerText == 'Menu' ) {
    clearContainer('#content', ['main-nav-bar', 'footer'])
    ourMenuTabContent()
  }
  else if( event.target.innerText == 'Reservations' ) {
    clearContainer('#content', ['main-nav-bar', 'footer'])
    reservationsTabContent()
  }
  else if( event.target.innerText == 'Contact Us' ) {
    clearContainer('#content', ['main-nav-bar', 'footer'])
    contactTabContent()
  };
} );


onLoadActions()
ourSpaceTabContent()
