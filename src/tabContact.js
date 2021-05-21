import {
  addElementAsSibling, navBarClassesUpdater,
} from './addElements';

export default function contactTabContent() {
  addElementAsSibling('div', 'contactTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'], true);
  document.querySelector('#contactTabContent').style.backgroundImage = 'url(\'../assets/images/spices.jpg\')';
  document.querySelector('#contactTabContent').style.backgroundSize = 'cover';
  document.querySelector('#contactTabContent').style.backgroundRepeat = 'no-repeat';
  navBarClassesUpdater('Contact Us');

  const f = document.createElement('form');
  f.setAttribute('method', 'post');
  f.setAttribute('action', 'index.html');
  f.classList.add('pt-5');
  f.classList.add('ps-5');

  let i = document.createElement('label');
  i.setAttribute('type', 'label');
  i.setAttribute('name', 'title');
  i.innerHTML = 'Contact us';
  i.classList.add('text-body');
  i.classList.add('form-label');
  i.classList.add('w-50');
  i.classList.add('mb-5');
  f.appendChild(i);

  i = document.createElement('input');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'username');
  i.setAttribute('placeholder', 'username');
  i.classList.add('form-control');
  i.classList.add('w-50');
  i.classList.add('mb-3');
  f.appendChild(i);

  i = document.createElement('input');
  i.setAttribute('type', 'email');
  i.setAttribute('name', 'email');
  i.setAttribute('placeholder', 'email');
  i.classList.add('form-control');
  i.classList.add('w-50');
  i.classList.add('mb-3');
  f.appendChild(i);

  i = document.createElement('textarea');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'message');
  i.setAttribute('placeholder', 'Your message');
  i.classList.add('form-control');
  i.classList.add('w-50');
  i.classList.add('mb-3');
  f.appendChild(i);

  const s = document.createElement('input');
  s.setAttribute('type', 'submit');
  s.setAttribute('value', 'Submit');
  s.classList.add('btn');
  s.classList.add('btn-secondary');
  f.appendChild(s);

  const currentElement = document.querySelector('#contactTabContent');
  currentElement.appendChild(f);
}
