function addElementAsChild(element, id, elementTextNode, parent, cssClasses) {
  // Create a new element
  const newElement = document.createElement(element);
  newElement.id = id
  //Add the classes to the element
  cssClasses.forEach((cssClasses, i) => {
    newElement.classList.add(cssClasses)
  });
  // Add content to the element
  const newContent = document.createTextNode(elementTextNode);
  newElement.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentElement = document.querySelector(parent);
  currentElement.appendChild(newElement);
  return newElement
}


function addElementAsSibling(element, id, elementTextNode, sibling, cssClasses, after = false) {
  // Create a new element
  const newElement = document.createElement(element);
  newElement.id = id
  //Add the classes to the element
  cssClasses.forEach((cssClasses, i) => {
    newElement.classList.add(cssClasses)
  });
  // Add content to the element
  const newContent = document.createTextNode(elementTextNode);
  newElement.appendChild(newContent);

  const siblingElement = document.querySelector(sibling);
  // add the newly created element and its content into the DOM
  if (!after) {
    (siblingElement.parentNode).insertBefore(newElement, siblingElement);
  } else {
    (siblingElement.parentNode).insertBefore(newElement, siblingElement.nextSibling);
  }

  return newElement
}


function addUl(id, parent, listItems, ulCssClasses, liCssClasses) {
  // Create a new element
  const newUl = document.createElement('ul');
  newUl.id = id
  //Add the classes to the element
  ulCssClasses.forEach((cssClass, i) => {
    newUl.classList.add(cssClass)
  });
  // Add list items to the ul
  listItems.forEach((listItemText, i) => {
    const listViewItem=document.createElement('li');
    listViewItem.appendChild(createAnchor(listItemText, i==0 ? ['nav-link'] : ['nav-link', 'link-dark']));
    //Add classes to the li
    liCssClasses.forEach((cssClass, i) => {
      listViewItem.classList.add(cssClass)
    });
    newUl.appendChild(listViewItem);
});


// add the newly created element and its content into the DOM
const currentElement = document.querySelector(parent);
currentElement.appendChild(newUl);

  return newUl
}

function createAnchor(anchorText, cssClasses) {
  const newAnchor = document.createElement('a');
  //Add the classes to the element
  cssClasses.forEach((cssClass, i) => {
    newAnchor.classList.add(cssClass)
  });
  // Add content to the element
  const newContent = document.createTextNode(anchorText);
  newAnchor.appendChild(newContent);
  newAnchor.setAttribute("href", "#");
  return newAnchor
}


export {addElementAsChild, addElementAsSibling, addUl}
