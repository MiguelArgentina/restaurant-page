import {
  addElementAsSibling, navBarClassesUpdater,
} from './addElements';

const reservationsTabContent = () => {
  addElementAsSibling('div', 'reservationsTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'], true);
  navBarClassesUpdater('Reservations');

  const f = document.createElement('form');
  f.setAttribute('method', 'post');
  f.setAttribute('action', 'index.html');
  f.classList.add('pt-5');
  f.classList.add('ps-5');

  let i = document.createElement('label');
  i.setAttribute('type', 'label');
  i.setAttribute('name', 'title');
  i.innerHTML = 'Please make a reservation';
  i.classList.add('text-white');
  i.classList.add('form-label');
  i.classList.add('w-50');
  i.classList.add('mb-5');
  f.appendChild(i);

  i = document.createElement('input');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'username');
  i.setAttribute('placeholder', 'Your name');
  i.classList.add('form-control');
  i.classList.add('w-50');
  i.classList.add('mb-3');
  f.appendChild(i);

  i = document.createElement('input');
  i.setAttribute('type', 'date');
  i.setAttribute('name', 'date');
  i.classList.add('form-control');
  i.classList.add('w-50');
  i.classList.add('mb-3');
  f.appendChild(i);

  i = document.createElement('input');
  i.setAttribute('type', 'number');
  i.setAttribute('name', 'number');
  i.setAttribute('placeholder', 'Nº of guests');
  i.classList.add('form-control');
  i.classList.add('w-50');
  i.classList.add('mb-3');
  f.appendChild(i);

  const s = document.createElement('input');
  s.setAttribute('type', 'submit');
  s.setAttribute('value', 'Submit');
  s.classList.add('btn');
  s.classList.add('btn-light');
  f.appendChild(s);

  const currentElement = document.querySelector('#reservationsTabContent');
  currentElement.appendChild(f);
};

export default reservationsTabContent;