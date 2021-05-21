function addElementAsChild(element, id, elementTextNode, parent, cssClasses) {
  const newElement = document.createElement(element);
  newElement.id = id;

  cssClasses.forEach((cssClasses) => {
    newElement.classList.add(cssClasses);
  });

  const newContent = document.createTextNode(elementTextNode);
  newElement.appendChild(newContent);

  const currentElement = document.querySelector(parent);
  currentElement.appendChild(newElement);
  return newElement;
}

function addElementAsSibling(element, id, elementTextNode, sibling, cssClasses, after = false) {
  const newElement = document.createElement(element);
  newElement.id = id;

  cssClasses.forEach((cssClasses) => {
    newElement.classList.add(cssClasses);
  });

  const newContent = document.createTextNode(elementTextNode);
  newElement.appendChild(newContent);

  const siblingElement = document.querySelector(sibling);

  if (!after) {
    (siblingElement.parentNode).insertBefore(newElement, siblingElement);
  } else {
    (siblingElement.parentNode).insertBefore(newElement, siblingElement.nextSibling);
  }

  return newElement;
}

function createAnchor(anchorText, cssClasses) {
  const newAnchor = document.createElement('a');
  newAnchor.id = anchorText.toLowerCase().replace(' ', '-');

  cssClasses.forEach((cssClass) => {
    newAnchor.classList.add(cssClass);
  });

  const newContent = document.createTextNode(anchorText);
  newAnchor.appendChild(newContent);
  newAnchor.setAttribute('href', '#');
  return newAnchor;
}

function addUl(id, parent, listItems, ulCssClasses, liCssClasses) {
  const newUl = document.createElement('ul');
  newUl.id = id;

  ulCssClasses.forEach((cssClass) => {
    newUl.classList.add(cssClass);
  });

  listItems.forEach((listItemText, i) => {
    const listViewItem = document.createElement('li');
    listViewItem.appendChild(createAnchor(listItemText, i === 0 ? ['nav-link'] : ['nav-link', 'link-dark']));

    liCssClasses.forEach((cssClass) => {
      listViewItem.classList.add(cssClass);
    });
    newUl.appendChild(listViewItem);
  });

  const currentElement = document.querySelector(parent);
  currentElement.appendChild(newUl);

  return newUl;
}

function navBarClassesUpdater(activeAnchor) {
  const idsArr = ['our-home', 'menu', 'contact-us', 'reservations'];
  idsArr.forEach((element) => {
    const tempElement = document.querySelector(`#${element}`);
    if (element === activeAnchor.toLowerCase().replace(' ', '-')) {
      tempElement.classList.remove('link-dark');
    } else {
      tempElement.classList.add('link-dark');
    }
  });
}

export {
  addElementAsChild, addElementAsSibling, addUl, navBarClassesUpdater,
};
