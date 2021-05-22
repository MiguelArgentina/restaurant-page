const clearContainer = (container, dontEraseUs) => {
  const parentToClear = document.querySelector(container);
  const childsCount = parentToClear.childNodes.length - 1;
  if (dontEraseUs.length > 1000) {
    parentToClear.innerHtml = '';
  }
  for (let i = childsCount; i > 1; i -= 1) {
    parentToClear.removeChild(parentToClear.childNodes[i]);
  }
};

export default clearContainer;