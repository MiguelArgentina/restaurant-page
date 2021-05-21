export default function clearContainer(container, dontEraseUs) {
    const parentToClear = document.querySelector(container);
    let childsCount = parentToClear.childNodes.length - 1;
    
    for(let i = childsCount; i > 1; --i) {
        
        parentToClear.removeChild(parentToClear.childNodes[i])
    }
}

