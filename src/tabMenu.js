import {
  addElementAsSibling, navBarClassesUpdater,
} from './addElements';

export default function ourMenuTabContent() {
  addElementAsSibling('div', 'ourMenuTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'], true);
  document.querySelector('#ourMenuTabContent').style.backgroundImage = 'url(\'../assets/images/empanadas.jpeg\')';
  document.querySelector('#ourMenuTabContent').style.backgroundSize = 'cover';
  document.querySelector('#ourMenuTabContent').style.backgroundRepeat = 'no-repeat';
  navBarClassesUpdater('menu');

  const listItems = ['Asado', 'Locro', 'Choripan', 'Empanadas', 'Dulce de leche', 'Milanesa a la Napolitana', 'Pollo al disco'];
  const ulCssClasses = ['dummy'];
  const liCssClasses = ['text-light', 'fs-4', 'fw-normal'];

  const newUl = document.createElement('ul');
  newUl.id = 'menuUl';

  ulCssClasses.forEach((cssClass) => {
    newUl.classList.add(cssClass);
  });

  listItems.forEach((listItemText) => {
    const listViewItem = document.createElement('li');
    listViewItem.innerHTML = listItemText;

    liCssClasses.forEach((cssClass) => {
      listViewItem.classList.add(cssClass);
    });
    newUl.appendChild(listViewItem);
  });
  newUl.classList.add('mt-5');

  const parentElement = document.querySelector('#ourMenuTabContent');
  parentElement.appendChild(newUl);
  parentElement.classList.add('d-flex');
  parentElement.classList.add('align-items-start');
}
