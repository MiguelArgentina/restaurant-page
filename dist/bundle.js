/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/images/spices.jpg":
/*!**********************************!*\
  !*** ./assets/images/spices.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2b4ffaa9f0dcd537dc0.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/images/spices.jpg?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".body {\\n  height: 100vh;\\n}\\n\\n#content {\\n  position: fixed;\\n  top: 0px;\\n  bottom: 0px;\\n  left: 0px;\\n  right: 0px;\\n  height: 100vh;\\n}\\n\\n.bg-image-container {\\n  height: 100%;\\n}\\n\\n.height-60vh {\\n  height: 60vh;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/addElements.js":
/*!****************************!*\
  !*** ./src/addElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addElementAsChild\": () => (/* binding */ addElementAsChild),\n/* harmony export */   \"addElementAsSibling\": () => (/* binding */ addElementAsSibling),\n/* harmony export */   \"addUl\": () => (/* binding */ addUl),\n/* harmony export */   \"navBarClassesUpdater\": () => (/* binding */ navBarClassesUpdater)\n/* harmony export */ });\nfunction addElementAsChild(element, id, elementTextNode, parent, cssClasses) {\n  // Create a new element\n  const newElement = document.createElement(element);\n  newElement.id = id\n  //Add the classes to the element\n  cssClasses.forEach((cssClasses, i) => {\n    newElement.classList.add(cssClasses)\n  });\n  // Add content to the element\n  const newContent = document.createTextNode(elementTextNode);\n  newElement.appendChild(newContent);\n\n  // add the newly created element and its content into the DOM\n  const currentElement = document.querySelector(parent);\n  currentElement.appendChild(newElement);\n  return newElement\n}\n\n\nfunction addElementAsSibling(element, id, elementTextNode, sibling, cssClasses, after = false) {\n  // Create a new element\n  const newElement = document.createElement(element);\n  newElement.id = id\n  //Add the classes to the element\n  cssClasses.forEach((cssClasses, i) => {\n    newElement.classList.add(cssClasses)\n  });\n  // Add content to the element\n  const newContent = document.createTextNode(elementTextNode);\n  newElement.appendChild(newContent);\n\n  const siblingElement = document.querySelector(sibling);\n  // add the newly created element and its content into the DOM\n  if (!after) {\n    (siblingElement.parentNode).insertBefore(newElement, siblingElement);\n  } else {\n    (siblingElement.parentNode).insertBefore(newElement, siblingElement.nextSibling);\n  }\n\n  return newElement\n}\n\n\nfunction addUl(id, parent, listItems, ulCssClasses, liCssClasses) {\n  // Create a new element\n  const newUl = document.createElement('ul');\n  newUl.id = id\n  //Add the classes to the element\n  ulCssClasses.forEach((cssClass, i) => {\n    newUl.classList.add(cssClass)\n  });\n  // Add list items to the ul\n  listItems.forEach((listItemText, i) => {\n    const listViewItem=document.createElement('li');\n    listViewItem.appendChild(createAnchor(listItemText, i==0 ? ['nav-link'] : ['nav-link', 'link-dark']));\n    //Add classes to the li\n    liCssClasses.forEach((cssClass, i) => {\n      listViewItem.classList.add(cssClass)\n    });\n    newUl.appendChild(listViewItem);\n});\n\n\n// add the newly created element and its content into the DOM\nconst currentElement = document.querySelector(parent);\ncurrentElement.appendChild(newUl);\n\n  return newUl\n}\n\nfunction createAnchor(anchorText, cssClasses) {\n  const newAnchor = document.createElement('a');\n  newAnchor.id = anchorText.toLowerCase().replace(' ', '-');\n  //Add the classes to the element\n  cssClasses.forEach((cssClass, i) => {\n    newAnchor.classList.add(cssClass)\n  });\n  // Add content to the element\n  const newContent = document.createTextNode(anchorText);\n  newAnchor.appendChild(newContent);\n  newAnchor.setAttribute(\"href\", \"#\");\n  return newAnchor\n}\n\nfunction navBarClassesUpdater(activeAnchor) {\nconst idsArr = ['our-home', 'menu', 'contact-us', 'reservations']\nidsArr.forEach(element => {\n  const tempElement = document.querySelector('#' + element);\n  if (element == activeAnchor.toLowerCase().replace(' ', '-')) {\n  tempElement.classList.remove('link-dark');\n  }\n  else {\n    tempElement.classList.add('link-dark');\n  }  \n});\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/addElements.js?");

/***/ }),

/***/ "./src/clearContainer.js":
/*!*******************************!*\
  !*** ./src/clearContainer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearContainer)\n/* harmony export */ });\nfunction clearContainer(container, dontEraseUs) {\n    const parentToClear = document.querySelector(container);\n    let childsCount = parentToClear.childNodes.length - 1;\n    \n    for(let i = childsCount; i > 1; --i) {\n        \n        parentToClear.removeChild(parentToClear.childNodes[i])\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/clearContainer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _onLoadActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onLoadActions */ \"./src/onLoadActions.js\");\n/* harmony import */ var _tabHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabHome */ \"./src/tabHome.js\");\n/* harmony import */ var _clearContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearContainer */ \"./src/clearContainer.js\");\n/* harmony import */ var _tabMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabMenu */ \"./src/tabMenu.js\");\n/* harmony import */ var _tabReservations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabReservations */ \"./src/tabReservations.js\");\n/* harmony import */ var _tabContact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabContact */ \"./src/tabContact.js\");\n// const addElements = import('add-elements');\n// console.log('Bienvenido a mi página')\n// addElements.addElement('div','Test text', 'content')\n\n\n\n\n\n\n\n\n\n\ndocument.body.addEventListener( 'click', function ( event ) {\n  if( event.target.innerText == 'Our home' ) {\n    (0,_clearContainer__WEBPACK_IMPORTED_MODULE_3__.default)('#content', ['main-nav-bar', 'footer'])\n    ;(0,_tabHome__WEBPACK_IMPORTED_MODULE_2__.default)()\n  }\n  else if( event.target.innerText == 'Menu' ) {\n    (0,_clearContainer__WEBPACK_IMPORTED_MODULE_3__.default)('#content', ['main-nav-bar', 'footer'])\n    ;(0,_tabMenu__WEBPACK_IMPORTED_MODULE_4__.default)()\n  }\n  else if( event.target.innerText == 'Reservations' ) {\n    (0,_clearContainer__WEBPACK_IMPORTED_MODULE_3__.default)('#content', ['main-nav-bar', 'footer'])\n    ;(0,_tabReservations__WEBPACK_IMPORTED_MODULE_5__.default)()\n  }\n  else if( event.target.innerText == 'Contact Us' ) {\n    (0,_clearContainer__WEBPACK_IMPORTED_MODULE_3__.default)('#content', ['main-nav-bar', 'footer'])\n    ;(0,_tabContact__WEBPACK_IMPORTED_MODULE_6__.default)()\n  };\n} );\n\n\n(0,_onLoadActions__WEBPACK_IMPORTED_MODULE_1__.default)()\n;(0,_tabHome__WEBPACK_IMPORTED_MODULE_2__.default)()\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/onLoadActions.js":
/*!******************************!*\
  !*** ./src/onLoadActions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onLoadActions)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_images_spices_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/spices.jpg */ \"./assets/images/spices.jpg\");\n/* harmony import */ var _addElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addElements.js */ \"./src/addElements.js\");\n\n\n\n\n\nfunction onLoadActions() {\n\n\ndocument.querySelector('body').style.backgroundImage = `url('../assets/images/bg-main.jpg')`;\ndocument.querySelector('body').style.backgroundSize = 'cover';\ndocument.querySelector('body').style.backgroundRepeat = 'repeat-y';\n\n\n\nconst mainNavBar = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_2__.addUl)('main-nav-bar', '#content', ['Our home', 'Menu', 'Reservations', 'Contact Us'], ['nav', 'nav-tabs'], ['nav-item'])\n\n\nconst newElement = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_2__.addElementAsChild)('div', 'main-bg-container','parent', '#content', ['container-fluid', 'bg-image-container']);\nconst newElement2 = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_2__.addElementAsChild)('div', 'first-child','first-child', '#main-bg-container', ['container-fluid']);\nconst newElement3 = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_2__.addElementAsSibling)('div', 'first-sibling','first-sibling', '#first-child', ['container-fluid']);\nconst newElement4 = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_2__.addElementAsSibling)('div', 'second-sibling','second-sibling', '#first-child', ['container-fluid'],true);\n\n\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/onLoadActions.js?");

/***/ }),

/***/ "./src/tabContact.js":
/*!***************************!*\
  !*** ./src/tabContact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactTabContent)\n/* harmony export */ });\n/* harmony import */ var _addElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElements.js */ \"./src/addElements.js\");\n\n\n\nfunction contactTabContent() {\nconst contactTabContent = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.addElementAsSibling)('div', 'contactTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);\ndocument.querySelector('#contactTabContent').style.backgroundImage = `url('../assets/images/spices.jpg')`;\ndocument.querySelector('#contactTabContent').style.backgroundSize = 'cover';\ndocument.querySelector('#contactTabContent').style.backgroundRepeat = 'no-repeat';\n(0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.navBarClassesUpdater)('Contact Us')\n\n\nvar f = document.createElement(\"form\");\nf.setAttribute('method',\"post\");\nf.setAttribute('action',\"index.html\");\nf.classList.add('pt-5');\nf.classList.add('ps-5');\n\nvar i = document.createElement(\"label\"); //input element, text\ni.setAttribute('type',\"label\");\ni.setAttribute('name',\"title\");\ni.innerHTML = \"Contact us\";\ni.classList.add('text-body');\ni.classList.add('form-label');\ni.classList.add('w-50');\ni.classList.add('mb-5');\nf.appendChild(i);\n\nvar i = document.createElement(\"input\"); //input element, text\ni.setAttribute('type',\"text\");\ni.setAttribute('name',\"username\");\ni.setAttribute('placeholder',\"username\");\ni.classList.add('form-control');\ni.classList.add('w-50');\ni.classList.add('mb-3');\nf.appendChild(i);\n\nvar i = document.createElement(\"input\"); //input element, text\ni.setAttribute('type',\"email\");\ni.setAttribute('name',\"email\");\ni.setAttribute('placeholder',\"email\");\ni.classList.add('form-control');\ni.classList.add('w-50');\ni.classList.add('mb-3');\nf.appendChild(i);\n\nvar i = document.createElement(\"textarea\"); //input element, text\ni.setAttribute('type',\"text\");\ni.setAttribute('name',\"message\");\ni.setAttribute('placeholder',\"Your message\");\ni.classList.add('form-control');\ni.classList.add('w-50');\ni.classList.add('mb-3');\nf.appendChild(i);\n\nvar s = document.createElement(\"input\"); //input element, Submit button\ns.setAttribute('type',\"submit\");\ns.setAttribute('value',\"Submit\");\ns.classList.add('btn');\ns.classList.add('btn-secondary');\nf.appendChild(s);\n\n// add the newly created element and its content into the DOM\n  const currentElement = document.querySelector('#contactTabContent');\n  currentElement.appendChild(f);\n\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabContact.js?");

/***/ }),

/***/ "./src/tabHome.js":
/*!************************!*\
  !*** ./src/tabHome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ourSpaceTabContent)\n/* harmony export */ });\n/* harmony import */ var _addElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElements.js */ \"./src/addElements.js\");\n\n\n\nfunction ourSpaceTabContent() {\nconst ourSpaceTabContent = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.addElementAsSibling)('div', 'ourSpaceTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);\ndocument.querySelector('#ourSpaceTabContent').style.backgroundImage = `url('../assets/images/locro.jpeg')`;\ndocument.querySelector('#ourSpaceTabContent').style.backgroundSize = 'cover';\n(0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.navBarClassesUpdater)('Our home')\n\nconst parentElement = document.querySelector('#ourSpaceTabContent');\nparentElement.classList.add('d-flex')\nparentElement.classList.add('align-items-end')\nconst pElement = document.createElement('p');\nconst greetingText = document.createTextNode(\"Welcome to our restaurant, where you'll find the most exquisite Argentinian traditional food, in a comfortable environment and accompanied by the best folclore, the argentinian country music\");\npElement.appendChild(greetingText);\npElement.classList.add('text-light')\npElement.classList.add('fs-3')\npElement.classList.add('text-start')\n\nparentElement.appendChild(pElement);\n\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabHome.js?");

/***/ }),

/***/ "./src/tabMenu.js":
/*!************************!*\
  !*** ./src/tabMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ourMenuTabContent)\n/* harmony export */ });\n/* harmony import */ var _addElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElements.js */ \"./src/addElements.js\");\n\n\n\nfunction ourMenuTabContent() {\nconst ourMenuTabContent = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.addElementAsSibling)('div', 'ourMenuTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);\ndocument.querySelector('#ourMenuTabContent').style.backgroundImage = `url('../assets/images/empanadas.jpeg')`;\ndocument.querySelector('#ourMenuTabContent').style.backgroundSize = 'cover';\ndocument.querySelector('#ourMenuTabContent').style.backgroundRepeat = 'no-repeat';\n(0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.navBarClassesUpdater)('menu')\n\nconst listItems = ['Asado', 'Locro', 'Choripan', 'Empanadas', 'Dulce de leche', 'Milanesa a la Napolitana', 'Pollo al disco'];\nconst ulCssClasses = ['dummy'];\nconst liCssClasses = ['text-light', 'fs-4', 'fw-normal'];\n\nconst newUl = document.createElement('ul');\n  newUl.id = 'menuUl'\n  //Add the classes to the element\n  ulCssClasses.forEach((cssClass, i) => {\n    newUl.classList.add(cssClass)\n  });\n  // Add list items to the ul\n  listItems.forEach((listItemText, i) => {\n    const listViewItem=document.createElement('li');\n    listViewItem.innerHTML = listItemText;\n    //Add classes to the li\n    liCssClasses.forEach((cssClass, i) => {\n      listViewItem.classList.add(cssClass)\n    });\n    newUl.appendChild(listViewItem);\n});\nnewUl.classList.add('mt-5')\n\n\n// add the newly created element and its content into the DOM\nconst parentElement = document.querySelector('#ourMenuTabContent');\nparentElement.appendChild(newUl);\nparentElement.classList.add('d-flex')\nparentElement.classList.add('align-items-start')\n\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabMenu.js?");

/***/ }),

/***/ "./src/tabReservations.js":
/*!********************************!*\
  !*** ./src/tabReservations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reservationsTabContent)\n/* harmony export */ });\n/* harmony import */ var _addElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addElements.js */ \"./src/addElements.js\");\n\n\n\nfunction reservationsTabContent() {\nconst reservationsTabContent = (0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.addElementAsSibling)('div', 'reservationsTabContent', '', '#main-nav-bar', ['container-fluid', 'height-60vh'],true);\ndocument.querySelector('#reservationsTabContent').style.backgroundImage = `url('../assets/images/humitas.jpeg')`;\ndocument.querySelector('#reservationsTabContent').style.backgroundSize = 'cover';\ndocument.querySelector('#reservationsTabContent').style.backgroundRepeat = 'no-repeat';\n(0,_addElements_js__WEBPACK_IMPORTED_MODULE_0__.navBarClassesUpdater)('Reservations')\n\nvar f = document.createElement(\"form\");\nf.setAttribute('method',\"post\");\nf.setAttribute('action',\"index.html\");\nf.classList.add('pt-5');\nf.classList.add('ps-5');\n\nvar i = document.createElement(\"label\"); //input element, text\ni.setAttribute('type',\"label\");\ni.setAttribute('name',\"title\");\ni.innerHTML = \"Please make a reservation\";\ni.classList.add('text-white');\ni.classList.add('form-label');\ni.classList.add('w-50');\ni.classList.add('mb-5');\nf.appendChild(i);\n\nvar i = document.createElement(\"input\"); //input element, text\ni.setAttribute('type',\"text\");\ni.setAttribute('name',\"username\");\ni.setAttribute('placeholder',\"Your name\");\ni.classList.add('form-control');\ni.classList.add('w-50');\ni.classList.add('mb-3');\nf.appendChild(i);\n\nvar i = document.createElement(\"input\"); //input element, text\ni.setAttribute('type',\"date\");\ni.setAttribute('name',\"date\");\ni.classList.add('form-control');\ni.classList.add('w-50');\ni.classList.add('mb-3');\nf.appendChild(i);\n\nvar i = document.createElement(\"input\"); //input element, text\ni.setAttribute('type',\"number\");\ni.setAttribute('name',\"number\");\ni.setAttribute('placeholder',\"Nº of guests\");\ni.classList.add('form-control');\ni.classList.add('w-50');\ni.classList.add('mb-3');\nf.appendChild(i);\n\nvar s = document.createElement(\"input\"); //input element, Submit button\ns.setAttribute('type',\"submit\");\ns.setAttribute('value',\"Submit\");\ns.classList.add('btn');\ns.classList.add('btn-light');\nf.appendChild(s);\n\n// add the newly created element and its content into the DOM\n  const currentElement = document.querySelector('#reservationsTabContent');\n  currentElement.appendChild(f);\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabReservations.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;