

export default function addElement (element, elementTextNode, parentId)     {
    // create a new div element
    const newDiv = document.createElement(element);

    // and give it some content
    const newContent = document.createTextNode(elementTextNode);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById(parentId);
    document.body.insertBefore(newDiv, currentDiv);
}

