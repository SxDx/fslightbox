(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_FsLightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/FsLightbox */ \"./src/js/FsLightbox.js\");\n\nwindow.fsLightboxInstances = {};\nvar a = document.getElementsByTagName('a');\n\nvar _loop = function _loop(i) {\n  if (!a[i].hasAttribute('data-fslightbox')) {\n    return \"continue\";\n  }\n\n  var instanceName = a[i].getAttribute('data-fslightbox');\n  var href = a[i].getAttribute('href');\n\n  if (!fsLightboxInstances[instanceName]) {\n    fsLightboxInstances[instanceName] = new FsLightbox();\n  }\n\n  var source = null;\n  href.charAt(0) === '#' ? source = document.getElementById(href.substring(1)) : source = href;\n  fsLightboxInstances[instanceName].props.sources.push(source);\n  fsLightboxInstances[instanceName].elements.a.push(a[i]);\n  var currentIndex = fsLightboxInstances[instanceName].props.sources.length - 1;\n\n  a[i].onclick = function () {\n    return fsLightboxInstances[instanceName].open(currentIndex);\n  };\n\n  setUpProp('types', 'data-type');\n  setUpProp('videosPosters', 'data-video-poster');\n  setUpProp('maxWidths', 'data-max-width');\n  setUpProp('maxHeights', 'data-max-height');\n\n  function setUpProp(propName, attributeName) {\n    if (a[i].hasAttribute(attributeName)) {\n      fsLightboxInstances[instanceName].props[propName][currentIndex] = a[i].getAttribute(attributeName);\n    }\n  }\n};\n\nfor (var i = 0; i < a.length; i++) {\n  var _ret = _loop(i);\n\n  if (_ret === \"continue\") continue;\n}\n\nvar fsLightboxKeys = Object.keys(fsLightboxInstances);\nwindow.fsLightbox = fsLightboxInstances[fsLightboxKeys[fsLightboxKeys.length - 1]];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/FsLightbox.js":
/*!******************************!*\
  !*** ./src/js/FsLightbox.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_setUpCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/setUpCore */ \"./src/js/core/setUpCore.js\");\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\nwindow.FsLightbox = function () {\n  var _this = this;\n\n  /**\n   * @property { Array } sources\n   *\n   * @property { Array } maxDimensions\n   * @property { Object } globalMaxDimensions\n   *\n   * @property { Function } onOpen\n   * @property { Function } onClose\n   * @property { Function } onInit\n   * @property { Function } onShow\n   *\n   * @property { Boolean } disableLocalStorage\n   * @property { Array } types\n   * @property { String } type\n   *\n   * @property { Array } videosPosters\n   * @property { Number } slideDistance\n   * @property { Boolean } openOnMount\n   */\n  this.props = {\n    sources: [],\n    maxWidths: [],\n    maxHeights: [],\n    types: [],\n    videosPosters: []\n  };\n  this.data = {\n    isInitialized: false,\n    maxSourceWidth: 0,\n    maxSourceHeight: 0,\n    scrollbarWidth: 0,\n    slideDistance: this.props.slideDistance ? this.props.slideDistance : 0.3,\n    isFullscreenOpen: false\n  };\n  this.slideSwipingProps = {\n    isSwiping: false,\n    downClientX: null,\n    isSourceDownEventTarget: false,\n    swipedX: 0\n  };\n  /**\n   * @property { Number } previous\n   * @property { Number } current\n   * @property { Number } next\n   */\n\n  this.stageIndexes = {};\n  this.elements = {\n    // array of <a> tags lightbox was created from\n    a: [],\n    container: null,\n    sourcesOutersWrapper: null,\n    sources: [],\n    sourcesOuters: [],\n    sourcesInners: [],\n    sourcesComponents: []\n  };\n  this.componentsServices = {\n    setSlideNumber: null,\n    enterFullscreen: null,\n    exitFullscreen: null\n  };\n\n  this.resolve = function (dependency) {\n    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    params.unshift(_this);\n    return _construct(dependency, _toConsumableArray(params));\n  };\n\n  this.collections = {\n    sourcesOutersTransformers: [],\n    sourcesLoadsHandlers: [],\n    // after source load its size adjuster will be stored in this array so it may be later resized\n    sourcesStylers: [],\n    // if lightbox is unmounted pending xhrs need to be aborted\n    xhrs: []\n  };\n  this.core = {\n    classFacade: {},\n    eventsDispatcher: {},\n    fullscreenToggler: {},\n    globalEventsController: {},\n    lightboxCloser: {},\n    lightboxOpener: {},\n    lightboxUpdater: {},\n    scrollbarRecompensor: {},\n    slideChangeFacade: {},\n    slideIndexChanger: {},\n    slideSwipingDown: {},\n    sourceLoadActioner: {},\n    stageManager: {},\n    windowResizeActioner: {}\n  };\n  Object(_core_setUpCore__WEBPACK_IMPORTED_MODULE_0__[\"setUpCore\"])(this);\n  this.open = this.core.lightboxOpener.open;\n\n  this.close = function () {};\n};\n\n//# sourceURL=webpack:///./src/js/FsLightbox.js?");

/***/ }),

/***/ "./src/js/components/helpers/renderSvg.js":
/*!************************************************!*\
  !*** ./src/js/components/helpers/renderSvg.js ***!
  \************************************************/
/*! exports provided: renderAndGetSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAndGetSvg\", function() { return renderAndGetSvg; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\nfunction renderAndGetSvg(parent, size, viewBox, d) {\n  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');\n  svg.setAttributeNS(null, 'width', size);\n  svg.setAttributeNS(null, 'height', size);\n  svg.setAttributeNS(null, 'viewBox', viewBox);\n  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');\n  path.setAttributeNS(null, 'class', \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"PREFIX\"], \"svg-path\"));\n  path.setAttributeNS(null, 'd', d);\n  svg.appendChild(path);\n  parent.appendChild(svg);\n  return svg;\n}\n\n//# sourceURL=webpack:///./src/js/components/helpers/renderSvg.js?");

/***/ }),

/***/ "./src/js/components/nav/renderAndGetToolbarButton.js":
/*!************************************************************!*\
  !*** ./src/js/components/nav/renderAndGetToolbarButton.js ***!
  \************************************************************/
/*! exports provided: renderAndGetToolbarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderAndGetToolbarButton\", function() { return renderAndGetToolbarButton; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\nfunction renderAndGetToolbarButton(parent) {\n  var toolbarButton = document.createElement('div');\n  toolbarButton.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"PREFIX\"], \"toolbar-button \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FLEX_CENTERED_CLASS_NAME\"]);\n  parent.appendChild(toolbarButton);\n  return toolbarButton;\n}\n\n//# sourceURL=webpack:///./src/js/components/nav/renderAndGetToolbarButton.js?");

/***/ }),

/***/ "./src/js/components/nav/renderCloseButton.js":
/*!****************************************************!*\
  !*** ./src/js/components/nav/renderCloseButton.js ***!
  \****************************************************/
/*! exports provided: renderCloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCloseButton\", function() { return renderCloseButton; });\n/* harmony import */ var _renderAndGetToolbarButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderAndGetToolbarButton */ \"./src/js/components/nav/renderAndGetToolbarButton.js\");\n/* harmony import */ var _helpers_renderSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/renderSvg */ \"./src/js/components/helpers/renderSvg.js\");\n\n\nfunction renderCloseButton(fsLightbox, parent) {\n  var closeButton = Object(_renderAndGetToolbarButton__WEBPACK_IMPORTED_MODULE_0__[\"renderAndGetToolbarButton\"])(parent);\n  closeButton.onclick = fsLightbox.core.lightboxCloser.close;\n  Object(_helpers_renderSvg__WEBPACK_IMPORTED_MODULE_1__[\"renderAndGetSvg\"])(closeButton, '20px', '0 0 24 24', 'M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z');\n}\n\n//# sourceURL=webpack:///./src/js/components/nav/renderCloseButton.js?");

/***/ }),

/***/ "./src/js/components/nav/renderFullscreenButton.js":
/*!*********************************************************!*\
  !*** ./src/js/components/nav/renderFullscreenButton.js ***!
  \*********************************************************/
/*! exports provided: renderFullscreenButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFullscreenButton\", function() { return renderFullscreenButton; });\n/* harmony import */ var _helpers_renderSvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/renderSvg */ \"./src/js/components/helpers/renderSvg.js\");\n/* harmony import */ var _renderAndGetToolbarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderAndGetToolbarButton */ \"./src/js/components/nav/renderAndGetToolbarButton.js\");\n\n\nfunction renderFullscreenButton(_ref, parent) {\n  var fullscreenToggler = _ref.core.fullscreenToggler,\n      componentsServices = _ref.componentsServices,\n      data = _ref.data;\n  var enterSize = '20px';\n  var enterViewBox = '0 0 18 18';\n  var enterD = 'M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z';\n  var exitSize = '24px';\n  var exitViewBox = '0 0 950 1024';\n  var exitD = 'M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z';\n  var fullscreenButton = Object(_renderAndGetToolbarButton__WEBPACK_IMPORTED_MODULE_1__[\"renderAndGetToolbarButton\"])(parent);\n  data.isFullscreenOpen = !!document.fullscreenElement;\n  var svg = data.isFullscreenOpen ? Object(_helpers_renderSvg__WEBPACK_IMPORTED_MODULE_0__[\"renderAndGetSvg\"])(fullscreenButton, exitSize, exitViewBox, exitD) : Object(_helpers_renderSvg__WEBPACK_IMPORTED_MODULE_0__[\"renderAndGetSvg\"])(fullscreenButton, enterSize, enterViewBox, enterD);\n\n  componentsServices.enterFullscreen = function () {\n    data.isFullscreenOpen = true;\n    svg.setAttributeNS(null, 'width', exitSize);\n    svg.setAttributeNS(null, 'height', exitSize);\n    svg.setAttributeNS(null, 'viewBox', exitViewBox);\n    svg.firstChild.setAttributeNS(null, 'd', exitD);\n  };\n\n  componentsServices.exitFullscreen = function () {\n    data.isFullscreenOpen = false;\n    svg.setAttributeNS(null, 'width', enterSize);\n    svg.setAttributeNS(null, 'height', enterSize);\n    svg.setAttributeNS(null, 'viewBox', enterViewBox);\n    svg.firstChild.setAttributeNS(null, 'd', enterD);\n  };\n\n  fullscreenButton.onclick = function () {\n    if (data.isFullscreenOpen) {\n      componentsServices.exitFullscreen();\n      fullscreenToggler.exitFullscreen();\n    } else {\n      componentsServices.enterFullscreen();\n      fullscreenToggler.enterFullscreen();\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/components/nav/renderFullscreenButton.js?");

/***/ }),

/***/ "./src/js/components/nav/renderNav.js":
/*!********************************************!*\
  !*** ./src/js/components/nav/renderNav.js ***!
  \********************************************/
/*! exports provided: renderNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderNav\", function() { return renderNav; });\n/* harmony import */ var _renderToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderToolbar */ \"./src/js/components/nav/renderToolbar.js\");\n/* harmony import */ var _renderSlideNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSlideNumber */ \"./src/js/components/nav/renderSlideNumber.js\");\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\n\n\nfunction renderNav(fsLightbox) {\n  var sources = fsLightbox.props.sources,\n      container = fsLightbox.elements.container;\n  var nav = document.createElement('div');\n  nav.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_2__[\"PREFIX\"], \"nav\");\n  container.appendChild(nav);\n  Object(_renderToolbar__WEBPACK_IMPORTED_MODULE_0__[\"renderToolbar\"])(fsLightbox, nav);\n\n  if (sources.length > 1) {\n    Object(_renderSlideNumber__WEBPACK_IMPORTED_MODULE_1__[\"renderSlideNumber\"])(fsLightbox, nav);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/components/nav/renderNav.js?");

/***/ }),

/***/ "./src/js/components/nav/renderSlideNumber.js":
/*!****************************************************!*\
  !*** ./src/js/components/nav/renderSlideNumber.js ***!
  \****************************************************/
/*! exports provided: renderSlideNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlideNumber\", function() { return renderSlideNumber; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\nfunction renderSlideNumber(_ref, parent) {\n  var componentsServices = _ref.componentsServices,\n      sources = _ref.props.sources,\n      stageIndexes = _ref.stageIndexes;\n  var slideNumber = document.createElement('div');\n  slideNumber.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"PREFIX\"], \"slide-number-container \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FLEX_CENTERED_CLASS_NAME\"]);\n  var currentNumber = document.createElement('div');\n  currentNumber.innerHTML = stageIndexes.current + 1;\n\n  componentsServices.setSlideNumber = function (number) {\n    return currentNumber.innerHTML = number;\n  };\n\n  var slash = document.createElement('div');\n  slash.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"PREFIX\"], \"slash\");\n  slash.innerHTML = '/';\n  var totalNumber = document.createElement('div');\n  totalNumber.innerHTML = sources.length;\n  slideNumber.appendChild(currentNumber);\n  slideNumber.appendChild(slash);\n  slideNumber.appendChild(totalNumber);\n  parent.appendChild(slideNumber);\n}\n\n//# sourceURL=webpack:///./src/js/components/nav/renderSlideNumber.js?");

/***/ }),

/***/ "./src/js/components/nav/renderToolbar.js":
/*!************************************************!*\
  !*** ./src/js/components/nav/renderToolbar.js ***!
  \************************************************/
/*! exports provided: renderToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderToolbar\", function() { return renderToolbar; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _renderFullscreenButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFullscreenButton */ \"./src/js/components/nav/renderFullscreenButton.js\");\n/* harmony import */ var _renderCloseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderCloseButton */ \"./src/js/components/nav/renderCloseButton.js\");\n\n\n\nfunction renderToolbar(fsLightbox, parent) {\n  var toolbar = document.createElement('div');\n  toolbar.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"PREFIX\"], \"toolbar\");\n  parent.appendChild(toolbar);\n  Object(_renderFullscreenButton__WEBPACK_IMPORTED_MODULE_1__[\"renderFullscreenButton\"])(fsLightbox, toolbar);\n  Object(_renderCloseButton__WEBPACK_IMPORTED_MODULE_2__[\"renderCloseButton\"])(fsLightbox, toolbar);\n}\n\n//# sourceURL=webpack:///./src/js/components/nav/renderToolbar.js?");

/***/ }),

/***/ "./src/js/components/renderSlideButton.js":
/*!************************************************!*\
  !*** ./src/js/components/renderSlideButton.js ***!
  \************************************************/
/*! exports provided: renderSlideButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlideButton\", function() { return renderSlideButton; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _helpers_renderSvg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/renderSvg */ \"./src/js/components/helpers/renderSvg.js\");\n\n\nfunction renderSlideButton(parent, d) {\n  var button = document.createElement('div');\n  button.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"SLIDE_BTN\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FLEX_CENTERED_CLASS_NAME\"]);\n  Object(_helpers_renderSvg__WEBPACK_IMPORTED_MODULE_1__[\"renderAndGetSvg\"])(button, '20px', '0 0 20 20', d);\n  parent.appendChild(button);\n}\n\n//# sourceURL=webpack:///./src/js/components/renderSlideButton.js?");

/***/ }),

/***/ "./src/js/components/renderSlideButtonContainer.js":
/*!*********************************************************!*\
  !*** ./src/js/components/renderSlideButtonContainer.js ***!
  \*********************************************************/
/*! exports provided: renderSlideButtonContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlideButtonContainer\", function() { return renderSlideButtonContainer; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _renderSlideButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSlideButton */ \"./src/js/components/renderSlideButton.js\");\n\n\nfunction renderSlideButtonContainer(_ref, onClick, name, d) {\n  var container = _ref.elements.container;\n  var titleName = name.charAt(0).toUpperCase() + name.slice(1);\n  var slideBtnContainer = document.createElement('div');\n  slideBtnContainer.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"SLIDE_BTN_CONTAINER\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"SLIDE_BTN_CONTAINER\"], \"-\").concat(name);\n  slideBtnContainer.title = \"\".concat(titleName, \" slide\");\n  slideBtnContainer.onclick = onClick;\n  Object(_renderSlideButton__WEBPACK_IMPORTED_MODULE_1__[\"renderSlideButton\"])(slideBtnContainer, d);\n  container.appendChild(slideBtnContainer);\n}\n\n//# sourceURL=webpack:///./src/js/components/renderSlideButtonContainer.js?");

/***/ }),

/***/ "./src/js/components/renderSlideButtons.js":
/*!*************************************************!*\
  !*** ./src/js/components/renderSlideButtons.js ***!
  \*************************************************/
/*! exports provided: renderSlideButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSlideButtons\", function() { return renderSlideButtons; });\n/* harmony import */ var _renderSlideButtonContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSlideButtonContainer */ \"./src/js/components/renderSlideButtonContainer.js\");\n\nfunction renderSlideButtons(fsLightbox) {\n  var slideChangeFacade = fsLightbox.core.slideChangeFacade;\n  Object(_renderSlideButtonContainer__WEBPACK_IMPORTED_MODULE_0__[\"renderSlideButtonContainer\"])(fsLightbox, slideChangeFacade.changeToPrevious, 'previous', 'M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z');\n  Object(_renderSlideButtonContainer__WEBPACK_IMPORTED_MODULE_0__[\"renderSlideButtonContainer\"])(fsLightbox, slideChangeFacade.changeToNext, 'next', 'M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z');\n}\n\n//# sourceURL=webpack:///./src/js/components/renderSlideButtons.js?");

/***/ }),

/***/ "./src/js/components/sources/proper-sources/renderCustom.js":
/*!******************************************************************!*\
  !*** ./src/js/components/sources/proper-sources/renderCustom.js ***!
  \******************************************************************/
/*! exports provided: renderCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCustom\", function() { return renderCustom; });\nfunction renderCustom() {}\n\n//# sourceURL=webpack:///./src/js/components/sources/proper-sources/renderCustom.js?");

/***/ }),

/***/ "./src/js/components/sources/proper-sources/renderImage.js":
/*!*****************************************************************!*\
  !*** ./src/js/components/sources/proper-sources/renderImage.js ***!
  \*****************************************************************/
/*! exports provided: renderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderImage\", function() { return renderImage; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\nfunction renderImage(_ref, i) {\n  var sourcesLoadsHandlers = _ref.collections.sourcesLoadsHandlers,\n      _ref$elements = _ref.elements,\n      sourcesElements = _ref$elements.sources,\n      sourcesInners = _ref$elements.sourcesInners,\n      sources = _ref.props.sources;\n  sourcesElements[i] = document.createElement('img');\n  sourcesElements[i].className = _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"SOURCE_CLASS_NAME\"];\n  sourcesElements[i].src = sources[i];\n  sourcesElements[i].onload = sourcesLoadsHandlers[i].handleImageLoad;\n  sourcesInners[i].appendChild(sourcesElements[i]);\n}\n\n//# sourceURL=webpack:///./src/js/components/sources/proper-sources/renderImage.js?");

/***/ }),

/***/ "./src/js/components/sources/proper-sources/renderInvalid.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/sources/proper-sources/renderInvalid.js ***!
  \*******************************************************************/
/*! exports provided: renderInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderInvalid\", function() { return renderInvalid; });\nfunction renderInvalid() {}\n\n//# sourceURL=webpack:///./src/js/components/sources/proper-sources/renderInvalid.js?");

/***/ }),

/***/ "./src/js/components/sources/proper-sources/renderVideo.js":
/*!*****************************************************************!*\
  !*** ./src/js/components/sources/proper-sources/renderVideo.js ***!
  \*****************************************************************/
/*! exports provided: renderVideo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderVideo\", function() { return renderVideo; });\nfunction renderVideo() {}\n\n//# sourceURL=webpack:///./src/js/components/sources/proper-sources/renderVideo.js?");

/***/ }),

/***/ "./src/js/components/sources/proper-sources/renderYoutube.js":
/*!*******************************************************************!*\
  !*** ./src/js/components/sources/proper-sources/renderYoutube.js ***!
  \*******************************************************************/
/*! exports provided: renderYoutube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderYoutube\", function() { return renderYoutube; });\nfunction renderYoutube() {}\n\n//# sourceURL=webpack:///./src/js/components/sources/proper-sources/renderYoutube.js?");

/***/ }),

/***/ "./src/js/components/sources/renderSourceInner.js":
/*!********************************************************!*\
  !*** ./src/js/components/sources/renderSourceInner.js ***!
  \********************************************************/
/*! exports provided: renderSourceInner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSourceInner\", function() { return renderSourceInner; });\nfunction renderSourceInner(_ref, i) {\n  var _ref$elements = _ref.elements,\n      sourcesOuters = _ref$elements.sourcesOuters,\n      sourcesInners = _ref$elements.sourcesInners;\n  sourcesInners[i] = document.createElement('div');\n  sourcesOuters[i].appendChild(sourcesInners[i]);\n}\n\n//# sourceURL=webpack:///./src/js/components/sources/renderSourceInner.js?");

/***/ }),

/***/ "./src/js/components/sources/renderSourceOuter.js":
/*!********************************************************!*\
  !*** ./src/js/components/sources/renderSourceOuter.js ***!
  \********************************************************/
/*! exports provided: renderSourceOuter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSourceOuter\", function() { return renderSourceOuter; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _renderSourceInner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSourceInner */ \"./src/js/components/sources/renderSourceInner.js\");\n\n\nfunction renderSourceOuter(fsLightbox, i) {\n  var _fsLightbox$elements = fsLightbox.elements,\n      sourcesOutersWrapper = _fsLightbox$elements.sourcesOutersWrapper,\n      sourcesOuters = _fsLightbox$elements.sourcesOuters;\n  sourcesOuters[i] = document.createElement('div');\n  sourcesOuters[i].className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"SOURCE_OUTER_CLASS_NAME\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"ABSOLUTED_CLASS_NAME\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FULL_DIMENSION_CLASS_NAME\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FLEX_CENTERED_CLASS_NAME\"]);\n  sourcesOuters[i].innerHTML = '<div class=\"fslightbox-loader\"><div></div><div></div><div></div><div></div></div>';\n  sourcesOutersWrapper.appendChild(sourcesOuters[i]);\n  Object(_renderSourceInner__WEBPACK_IMPORTED_MODULE_1__[\"renderSourceInner\"])(fsLightbox, i);\n}\n\n//# sourceURL=webpack:///./src/js/components/sources/renderSourceOuter.js?");

/***/ }),

/***/ "./src/js/components/sources/renderSourcesOutersWrapper.js":
/*!*****************************************************************!*\
  !*** ./src/js/components/sources/renderSourcesOutersWrapper.js ***!
  \*****************************************************************/
/*! exports provided: renderSourcesOutersWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderSourcesOutersWrapper\", function() { return renderSourcesOutersWrapper; });\n/* harmony import */ var _renderSourceOuter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSourceOuter */ \"./src/js/components/sources/renderSourceOuter.js\");\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\n\nfunction renderSourcesOutersWrapper(fsLightbox) {\n  var elements = fsLightbox.elements,\n      sources = fsLightbox.props.sources;\n  elements.sourcesOutersWrapper = document.createElement('div');\n  elements.sourcesOutersWrapper.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_1__[\"ABSOLUTED_CLASS_NAME\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_1__[\"FULL_DIMENSION_CLASS_NAME\"]);\n  elements.container.appendChild(elements.sourcesOutersWrapper);\n\n  for (var i = 0; i < sources.length; i++) {\n    Object(_renderSourceOuter__WEBPACK_IMPORTED_MODULE_0__[\"renderSourceOuter\"])(fsLightbox, i);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/components/sources/renderSourcesOutersWrapper.js?");

/***/ }),

/***/ "./src/js/constants/classes-names.js":
/*!*******************************************!*\
  !*** ./src/js/constants/classes-names.js ***!
  \*******************************************/
/*! exports provided: PREFIX, FSLIGHTBOX_STYLES, CURSOR_GRABBING_CLASS_NAME, FULL_DIMENSION_CLASS_NAME, FLEX_CENTERED_CLASS_NAME, OPEN_CLASS_NAME, TRANSFORM_TRANSITION_CLASS_NAME, ABSOLUTED_CLASS_NAME, SLIDE_BTN, SLIDE_BTN_CONTAINER, FADE_IN_CLASS_NAME, FADE_OUT_CLASS_NAME, FADE_IN_STRONG_CLASS_NAME, FADE_OUT_STRONG_CLASS_NAME, OPACITY_0_CLASS_NAME, OPACITY_1_CLASS_NAME, SOURCE_CLASS_NAME, SOURCE_OUTER_CLASS_NAME, SOURCES_OUTERS_WRAPPER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PREFIX\", function() { return PREFIX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FSLIGHTBOX_STYLES\", function() { return FSLIGHTBOX_STYLES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURSOR_GRABBING_CLASS_NAME\", function() { return CURSOR_GRABBING_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FULL_DIMENSION_CLASS_NAME\", function() { return FULL_DIMENSION_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLEX_CENTERED_CLASS_NAME\", function() { return FLEX_CENTERED_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OPEN_CLASS_NAME\", function() { return OPEN_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRANSFORM_TRANSITION_CLASS_NAME\", function() { return TRANSFORM_TRANSITION_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ABSOLUTED_CLASS_NAME\", function() { return ABSOLUTED_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SLIDE_BTN\", function() { return SLIDE_BTN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SLIDE_BTN_CONTAINER\", function() { return SLIDE_BTN_CONTAINER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FADE_IN_CLASS_NAME\", function() { return FADE_IN_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FADE_OUT_CLASS_NAME\", function() { return FADE_OUT_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FADE_IN_STRONG_CLASS_NAME\", function() { return FADE_IN_STRONG_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FADE_OUT_STRONG_CLASS_NAME\", function() { return FADE_OUT_STRONG_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OPACITY_0_CLASS_NAME\", function() { return OPACITY_0_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OPACITY_1_CLASS_NAME\", function() { return OPACITY_1_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOURCE_CLASS_NAME\", function() { return SOURCE_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOURCE_OUTER_CLASS_NAME\", function() { return SOURCE_OUTER_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOURCES_OUTERS_WRAPPER\", function() { return SOURCES_OUTERS_WRAPPER; });\nvar PREFIX = 'fslightbox-'; // single classes names\n\nvar FSLIGHTBOX_STYLES = \"\".concat(PREFIX, \"styles\");\nvar CURSOR_GRABBING_CLASS_NAME = \"\".concat(PREFIX, \"cursor-grabbing\");\nvar FULL_DIMENSION_CLASS_NAME = \"\".concat(PREFIX, \"full-dimension\");\nvar FLEX_CENTERED_CLASS_NAME = \"\".concat(PREFIX, \"flex-centered\");\nvar OPEN_CLASS_NAME = \"\".concat(PREFIX, \"open\");\nvar TRANSFORM_TRANSITION_CLASS_NAME = \"\".concat(PREFIX, \"transform-transition\");\nvar ABSOLUTED_CLASS_NAME = \"\".concat(PREFIX, \"absoluted\"); // slide buttons\n\nvar SLIDE_BTN = \"\".concat(PREFIX, \"slide-btn\");\nvar SLIDE_BTN_CONTAINER = \"\".concat(SLIDE_BTN, \"-container\"); // animations\n\nvar FADE_IN_CLASS_NAME = \"\".concat(PREFIX, \"fade-in\");\nvar FADE_OUT_CLASS_NAME = \"\".concat(PREFIX, \"fade-out\");\nvar FADE_IN_STRONG_CLASS_NAME = FADE_IN_CLASS_NAME + '-strong';\nvar FADE_OUT_STRONG_CLASS_NAME = FADE_OUT_CLASS_NAME + '-strong'; // opacity\n\nvar opacityBaseClassName = \"\".concat(PREFIX, \"opacity-\");\nvar OPACITY_0_CLASS_NAME = \"\".concat(opacityBaseClassName, \"0\");\nvar OPACITY_1_CLASS_NAME = \"\".concat(opacityBaseClassName, \"1\"); // sources\n\nvar SOURCE_CLASS_NAME = \"\".concat(PREFIX, \"source\");\nvar SOURCE_OUTER_CLASS_NAME = \"\".concat(SOURCE_CLASS_NAME, \"-outer\");\nvar SOURCES_OUTERS_WRAPPER = \"\".concat(SOURCE_OUTER_CLASS_NAME, \"s-outers-wrapper\");\n\n//# sourceURL=webpack:///./src/js/constants/classes-names.js?");

/***/ }),

/***/ "./src/js/constants/core-constants.js":
/*!********************************************!*\
  !*** ./src/js/constants/core-constants.js ***!
  \********************************************/
/*! exports provided: IMAGE_TYPE, VIDEO_TYPE, YOUTUBE_TYPE, CUSTOM_TYPE, INVALID_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMAGE_TYPE\", function() { return IMAGE_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIDEO_TYPE\", function() { return VIDEO_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"YOUTUBE_TYPE\", function() { return YOUTUBE_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CUSTOM_TYPE\", function() { return CUSTOM_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INVALID_TYPE\", function() { return INVALID_TYPE; });\n// sources types\nvar IMAGE_TYPE = 'image';\nvar VIDEO_TYPE = 'video';\nvar YOUTUBE_TYPE = 'youtube';\nvar CUSTOM_TYPE = 'custom';\nvar INVALID_TYPE = 'invalid';\n\n//# sourceURL=webpack:///./src/js/constants/core-constants.js?");

/***/ }),

/***/ "./src/js/constants/css-constants.js":
/*!*******************************************!*\
  !*** ./src/js/constants/css-constants.js ***!
  \*******************************************/
/*! exports provided: ANIMATION_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ANIMATION_TIME\", function() { return ANIMATION_TIME; });\nvar ANIMATION_TIME = 250;\n\n//# sourceURL=webpack:///./src/js/constants/css-constants.js?");

/***/ }),

/***/ "./src/js/constants/local-storage-constants.js":
/*!*****************************************************!*\
  !*** ./src/js/constants/local-storage-constants.js ***!
  \*****************************************************/
/*! exports provided: SOURCES_TYPES_KEY, SCROLLBAR_WIDTH_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SOURCES_TYPES_KEY\", function() { return SOURCES_TYPES_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCROLLBAR_WIDTH_KEY\", function() { return SCROLLBAR_WIDTH_KEY; });\nvar SOURCES_TYPES_KEY = 'fslightbox-types';\nvar SCROLLBAR_WIDTH_KEY = 'fslightbox-scrollbar-width';\n\n//# sourceURL=webpack:///./src/js/constants/local-storage-constants.js?");

/***/ }),

/***/ "./src/js/core/collections/fillSourcesOutersTransformersCollection.js":
/*!****************************************************************************!*\
  !*** ./src/js/core/collections/fillSourcesOutersTransformersCollection.js ***!
  \****************************************************************************/
/*! exports provided: fillSourcesOutersTransformersCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillSourcesOutersTransformersCollection\", function() { return fillSourcesOutersTransformersCollection; });\n/* harmony import */ var _transforms_SourceOuterTransformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transforms/SourceOuterTransformer */ \"./src/js/core/transforms/SourceOuterTransformer.js\");\n\nfunction fillSourcesOutersTransformersCollection(_ref) {\n  var sourcesOutersTransformers = _ref.collections.sourcesOutersTransformers,\n      sources = _ref.props.sources,\n      resolve = _ref.resolve;\n\n  for (var i = 0; i < sources.length; i++) {\n    sourcesOutersTransformers[i] = resolve(_transforms_SourceOuterTransformer__WEBPACK_IMPORTED_MODULE_0__[\"SourceOuterTransformer\"], [i]);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/core/collections/fillSourcesOutersTransformersCollection.js?");

/***/ }),

/***/ "./src/js/core/elements/setUpClassFacade.js":
/*!**************************************************!*\
  !*** ./src/js/core/elements/setUpClassFacade.js ***!
  \**************************************************/
/*! exports provided: setUpClassFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpClassFacade\", function() { return setUpClassFacade; });\n/* harmony import */ var _helpers_elements_removeFromElementClassIfContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/elements/removeFromElementClassIfContains */ \"./src/js/helpers/elements/removeFromElementClassIfContains.js\");\n\nfunction setUpClassFacade(_ref) {\n  var self = _ref.core.classFacade,\n      elements = _ref.elements;\n\n  self.removeFromEachElementClassIfContains = function (elementsArrayName, className) {\n    for (var i = 0; i < elements[elementsArrayName].length; i++) {\n      Object(_helpers_elements_removeFromElementClassIfContains__WEBPACK_IMPORTED_MODULE_0__[\"removeFromElementClassIfContains\"])(elements[elementsArrayName][i], className);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/elements/setUpClassFacade.js?");

/***/ }),

/***/ "./src/js/core/events/setUpEventsDispatcher.js":
/*!*****************************************************!*\
  !*** ./src/js/core/events/setUpEventsDispatcher.js ***!
  \*****************************************************/
/*! exports provided: setUpEventsDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpEventsDispatcher\", function() { return setUpEventsDispatcher; });\nfunction setUpEventsDispatcher(_ref) {\n  var self = _ref.core.eventsDispatcher,\n      props = _ref.props;\n\n  self.dispatch = function (eventName) {\n    if (props[eventName]) {\n      props[eventName]();\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/events/setUpEventsDispatcher.js?");

/***/ }),

/***/ "./src/js/core/fullscreen/setUpFullscreenToggler.js":
/*!**********************************************************!*\
  !*** ./src/js/core/fullscreen/setUpFullscreenToggler.js ***!
  \**********************************************************/
/*! exports provided: setUpFullscreenToggler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpFullscreenToggler\", function() { return setUpFullscreenToggler; });\nfunction setUpFullscreenToggler(_ref) {\n  var self = _ref.core.fullscreenToggler;\n\n  self.enterFullscreen = function () {\n    var documentElement = document.documentElement;\n\n    if (documentElement.requestFullscreen) {\n      documentElement.requestFullscreen();\n    } else if (documentElement.mozRequestFullScreen) {\n      documentElement.mozRequestFullScreen();\n    } else if (documentElement.webkitRequestFullscreen) {\n      documentElement.webkitRequestFullscreen();\n    } else if (documentElement.msRequestFullscreen) {\n      documentElement.msRequestFullscreen();\n    }\n  };\n\n  self.exitFullscreen = function () {\n    if (document.exitFullscreen) {\n      document.exitFullscreen();\n    } else if (document.mozCancelFullScreen) {\n      document.mozCancelFullScreen();\n    } else if (document.webkitExitFullscreen) {\n      document.webkitExitFullscreen();\n    } else if (document.msExitFullscreen) {\n      document.msExitFullscreen();\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/fullscreen/setUpFullscreenToggler.js?");

/***/ }),

/***/ "./src/js/core/main-component/closing/LightboxCloseActioner.js":
/*!*********************************************************************!*\
  !*** ./src/js/core/main-component/closing/LightboxCloseActioner.js ***!
  \*********************************************************************/
/*! exports provided: LightboxCloseActioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LightboxCloseActioner\", function() { return LightboxCloseActioner; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _constants_css_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/css-constants */ \"./src/js/constants/css-constants.js\");\n\n\nfunction LightboxCloseActioner(_ref) {\n  var _this = this;\n\n  var _ref$core = _ref.core,\n      eventsDispatcher = _ref$core.eventsDispatcher,\n      fullscreenToggler = _ref$core.fullscreenToggler,\n      globalEventsController = _ref$core.globalEventsController,\n      scrollbarRecompensor = _ref$core.scrollbarRecompensor,\n      data = _ref.data,\n      lightboxContainer = _ref.elements.container,\n      setMainComponentState = _ref.setMainComponentState,\n      slideSwipingProps = _ref.slideSwipingProps;\n  this.isLightboxFadingOut = false;\n\n  this.runActions = function () {\n    _this.isLightboxFadingOut = true;\n    lightboxContainer.current.classList.add(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FADE_OUT_STRONG_CLASS_NAME\"]);\n    globalEventsController.removeListeners();\n\n    if (data.isFullscreenOpen) {\n      fullscreenToggler.enterFullscreen();\n    }\n\n    setTimeout(function () {\n      _this.isLightboxFadingOut = false;\n      slideSwipingProps.isSwiping = false;\n      lightboxContainer.current.classList.remove(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FADE_OUT_STRONG_CLASS_NAME\"]);\n      document.documentElement.classList.remove(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"OPEN_CLASS_NAME\"]);\n      scrollbarRecompensor.removeRecompense();\n      setMainComponentState({\n        isOpen: false\n      }, function () {\n        eventsDispatcher.dispatch('onClose');\n      });\n    }, _constants_css_constants__WEBPACK_IMPORTED_MODULE_1__[\"ANIMATION_TIME\"] - 30);\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/main-component/closing/LightboxCloseActioner.js?");

/***/ }),

/***/ "./src/js/core/main-component/closing/setUpLightboxCloser.js":
/*!*******************************************************************!*\
  !*** ./src/js/core/main-component/closing/setUpLightboxCloser.js ***!
  \*******************************************************************/
/*! exports provided: setUpLightboxCloser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpLightboxCloser\", function() { return setUpLightboxCloser; });\n/* harmony import */ var _LightboxCloseActioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightboxCloseActioner */ \"./src/js/core/main-component/closing/LightboxCloseActioner.js\");\n\nfunction setUpLightboxCloser(_ref) {\n  var self = _ref.core.lightboxCloser,\n      resolve = _ref.resolve;\n  var lightboxCloseActioner = resolve(_LightboxCloseActioner__WEBPACK_IMPORTED_MODULE_0__[\"LightboxCloseActioner\"]);\n\n  self.close = function () {\n    if (!lightboxCloseActioner.isLightboxFadingOut) {\n      lightboxCloseActioner.runActions();\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/main-component/closing/setUpLightboxCloser.js?");

/***/ }),

/***/ "./src/js/core/main-component/initializing/initializeLightbox.js":
/*!***********************************************************************!*\
  !*** ./src/js/core/main-component/initializing/initializeLightbox.js ***!
  \***********************************************************************/
/*! exports provided: initializeLightbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeLightbox\", function() { return initializeLightbox; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _sources_creating_createSources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sources/creating/createSources */ \"./src/js/core/sources/creating/createSources.js\");\n/* harmony import */ var _components_sources_renderSourcesOutersWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sources/renderSourcesOutersWrapper */ \"./src/js/components/sources/renderSourcesOutersWrapper.js\");\n/* harmony import */ var _components_nav_renderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/nav/renderNav */ \"./src/js/components/nav/renderNav.js\");\n/* harmony import */ var _collections_fillSourcesOutersTransformersCollection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../collections/fillSourcesOutersTransformersCollection */ \"./src/js/core/collections/fillSourcesOutersTransformersCollection.js\");\n/* harmony import */ var _components_renderSlideButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/renderSlideButtons */ \"./src/js/components/renderSlideButtons.js\");\n/* harmony import */ var _slide_setUpSlideChangeFacade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../slide/setUpSlideChangeFacade */ \"./src/js/core/slide/setUpSlideChangeFacade.js\");\n/* harmony import */ var _stage_setUpStageManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../stage/setUpStageManager */ \"./src/js/core/stage/setUpStageManager.js\");\n\n\n\n\n\n\n\n\nfunction initializeLightbox(fsLightbox) {\n  var eventsDispatcher = fsLightbox.core.eventsDispatcher,\n      data = fsLightbox.data,\n      elements = fsLightbox.elements,\n      sources = fsLightbox.props.sources;\n  data.isInitialized = true;\n  Object(_collections_fillSourcesOutersTransformersCollection__WEBPACK_IMPORTED_MODULE_4__[\"fillSourcesOutersTransformersCollection\"])(fsLightbox);\n  Object(_stage_setUpStageManager__WEBPACK_IMPORTED_MODULE_7__[\"setUpStageManager\"])(fsLightbox);\n  Object(_slide_setUpSlideChangeFacade__WEBPACK_IMPORTED_MODULE_6__[\"setUpSlideChangeFacade\"])(fsLightbox);\n  elements.container = document.createElement('div');\n  elements.container.className = \"\".concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"PREFIX\"], \"container \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FULL_DIMENSION_CLASS_NAME\"], \" \").concat(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"FADE_IN_STRONG_CLASS_NAME\"]);\n  document.body.appendChild(elements.container);\n  Object(_components_nav_renderNav__WEBPACK_IMPORTED_MODULE_3__[\"renderNav\"])(fsLightbox);\n  Object(_components_sources_renderSourcesOutersWrapper__WEBPACK_IMPORTED_MODULE_2__[\"renderSourcesOutersWrapper\"])(fsLightbox);\n\n  if (sources.length > 1) {\n    Object(_components_renderSlideButtons__WEBPACK_IMPORTED_MODULE_5__[\"renderSlideButtons\"])(fsLightbox);\n  }\n\n  Object(_sources_creating_createSources__WEBPACK_IMPORTED_MODULE_1__[\"createSources\"])(fsLightbox);\n  eventsDispatcher.dispatch('onInit');\n}\n\n//# sourceURL=webpack:///./src/js/core/main-component/initializing/initializeLightbox.js?");

/***/ }),

/***/ "./src/js/core/main-component/opening/setUpLightboxOpener.js":
/*!*******************************************************************!*\
  !*** ./src/js/core/main-component/opening/setUpLightboxOpener.js ***!
  \*******************************************************************/
/*! exports provided: setUpLightboxOpener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpLightboxOpener\", function() { return setUpLightboxOpener; });\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n/* harmony import */ var _initializing_initializeLightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../initializing/initializeLightbox */ \"./src/js/core/main-component/initializing/initializeLightbox.js\");\n\n\nfunction setUpLightboxOpener(fsLightbox) {\n  var sourcesOutersTransformers = fsLightbox.collections.sourcesOutersTransformers,\n      _fsLightbox$core = fsLightbox.core,\n      eventsDispatcher = _fsLightbox$core.eventsDispatcher,\n      self = _fsLightbox$core.lightboxOpener,\n      globalEventsController = _fsLightbox$core.globalEventsController,\n      scrollbarRecompensor = _fsLightbox$core.scrollbarRecompensor,\n      stageManager = _fsLightbox$core.stageManager,\n      windowResizeActioner = _fsLightbox$core.windowResizeActioner,\n      data = fsLightbox.data,\n      stageIndexes = fsLightbox.stageIndexes;\n\n  self.open = function () {\n    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    stageIndexes.current = index;\n    data.isInitialized ? eventsDispatcher.dispatch('onShow') : Object(_initializing_initializeLightbox__WEBPACK_IMPORTED_MODULE_1__[\"initializeLightbox\"])(fsLightbox);\n    stageManager.updateStageIndexes();\n    document.documentElement.classList.add(_constants_classes_names__WEBPACK_IMPORTED_MODULE_0__[\"OPEN_CLASS_NAME\"]);\n    scrollbarRecompensor.addRecompense(); // globalEventsController.attachListeners();\n\n    eventsDispatcher.dispatch('onOpen');\n    sourcesOutersTransformers[stageIndexes.current].zero();\n    windowResizeActioner.runActions();\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/main-component/opening/setUpLightboxOpener.js?");

/***/ }),

/***/ "./src/js/core/scrollbar/setUpScrollbarRecompensor.js":
/*!************************************************************!*\
  !*** ./src/js/core/scrollbar/setUpScrollbarRecompensor.js ***!
  \************************************************************/
/*! exports provided: setUpScrollbarRecompensor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpScrollbarRecompensor\", function() { return setUpScrollbarRecompensor; });\nfunction setUpScrollbarRecompensor(_ref) {\n  var data = _ref.data,\n      self = _ref.core.scrollbarRecompensor;\n\n  self.addRecompense = function () {\n    document.readyState === \"complete\" ? ifBodyIsHigherThanWindowAddRecompenseToScrollbar() : window.addEventListener('load', function () {\n      ifBodyIsHigherThanWindowAddRecompenseToScrollbar();\n      self.addRecompense = ifBodyIsHigherThanWindowAddRecompenseToScrollbar;\n    });\n  };\n\n  var ifBodyIsHigherThanWindowAddRecompenseToScrollbar = function ifBodyIsHigherThanWindowAddRecompenseToScrollbar() {\n    if (document.body.offsetHeight > window.innerHeight) {\n      document.body.style.marginRight = data.scrollbarWidth + 'px';\n    }\n  };\n\n  self.removeRecompense = function () {\n    document.body.style.removeProperty('margin-right');\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/scrollbar/setUpScrollbarRecompensor.js?");

/***/ }),

/***/ "./src/js/core/setUpCore.js":
/*!**********************************!*\
  !*** ./src/js/core/setUpCore.js ***!
  \**********************************/
/*! exports provided: setUpCore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpCore\", function() { return setUpCore; });\n/* harmony import */ var _main_component_opening_setUpLightboxOpener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-component/opening/setUpLightboxOpener */ \"./src/js/core/main-component/opening/setUpLightboxOpener.js\");\n/* harmony import */ var _elements_setUpClassFacade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/setUpClassFacade */ \"./src/js/core/elements/setUpClassFacade.js\");\n/* harmony import */ var _events_setUpEventsDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/setUpEventsDispatcher */ \"./src/js/core/events/setUpEventsDispatcher.js\");\n/* harmony import */ var _fullscreen_setUpFullscreenToggler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullscreen/setUpFullscreenToggler */ \"./src/js/core/fullscreen/setUpFullscreenToggler.js\");\n/* harmony import */ var _main_component_closing_setUpLightboxCloser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-component/closing/setUpLightboxCloser */ \"./src/js/core/main-component/closing/setUpLightboxCloser.js\");\n/* harmony import */ var _sizes_setUpWindowResizeActioner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sizes/setUpWindowResizeActioner */ \"./src/js/core/sizes/setUpWindowResizeActioner.js\");\n/* harmony import */ var _scrollbar_setUpScrollbarRecompensor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scrollbar/setUpScrollbarRecompensor */ \"./src/js/core/scrollbar/setUpScrollbarRecompensor.js\");\n\n\n\n\n\n\n\nfunction setUpCore(fsLightbox) {\n  Object(_elements_setUpClassFacade__WEBPACK_IMPORTED_MODULE_1__[\"setUpClassFacade\"])(fsLightbox);\n  Object(_events_setUpEventsDispatcher__WEBPACK_IMPORTED_MODULE_2__[\"setUpEventsDispatcher\"])(fsLightbox);\n  Object(_fullscreen_setUpFullscreenToggler__WEBPACK_IMPORTED_MODULE_3__[\"setUpFullscreenToggler\"])(fsLightbox); // setUpGlobalEventsController(fsLightbox);\n\n  Object(_main_component_closing_setUpLightboxCloser__WEBPACK_IMPORTED_MODULE_4__[\"setUpLightboxCloser\"])(fsLightbox);\n  Object(_main_component_opening_setUpLightboxOpener__WEBPACK_IMPORTED_MODULE_0__[\"setUpLightboxOpener\"])(fsLightbox); // setUpLightboxUpdater(fsLightbox);\n\n  Object(_scrollbar_setUpScrollbarRecompensor__WEBPACK_IMPORTED_MODULE_6__[\"setUpScrollbarRecompensor\"])(fsLightbox); // setUpSlideIndexChanger(fsLightbox);\n  // setUpSlideSwipingDown(fsLightbox);\n\n  Object(_sizes_setUpWindowResizeActioner__WEBPACK_IMPORTED_MODULE_5__[\"setUpWindowResizeActioner\"])(fsLightbox);\n}\n\n//# sourceURL=webpack:///./src/js/core/setUpCore.js?");

/***/ }),

/***/ "./src/js/core/sizes/setUpWindowResizeActioner.js":
/*!********************************************************!*\
  !*** ./src/js/core/sizes/setUpWindowResizeActioner.js ***!
  \********************************************************/
/*! exports provided: setUpWindowResizeActioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpWindowResizeActioner\", function() { return setUpWindowResizeActioner; });\n/* harmony import */ var _helpers_elements_removeFromElementClassIfContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/elements/removeFromElementClassIfContains */ \"./src/js/helpers/elements/removeFromElementClassIfContains.js\");\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\n\nfunction setUpWindowResizeActioner(_ref) {\n  var _ref$collections = _ref.collections,\n      sourcesOutersTransformers = _ref$collections.sourcesOutersTransformers,\n      sourcesStylers = _ref$collections.sourcesStylers,\n      self = _ref.core.windowResizeActioner,\n      componentsServices = _ref.componentsServices,\n      data = _ref.data,\n      sourcesOuters = _ref.elements.sourcesOuters,\n      props = _ref.props,\n      stageIndexes = _ref.stageIndexes;\n\n  self.runActions = function () {\n    // decreasing max source dimensions for better UX\n    innerWidth < 992 ? data.maxSourceWidth = innerWidth : data.maxSourceWidth = 0.9 * innerWidth;\n    data.maxSourceHeight = 0.9 * innerHeight;\n\n    if (data.isFullscreenOpen && screen.height !== innerHeight) {\n      componentsServices.exitFullscreen();\n    }\n\n    for (var i = 0; i < props.sources.length; i++) {\n      Object(_helpers_elements_removeFromElementClassIfContains__WEBPACK_IMPORTED_MODULE_0__[\"removeFromElementClassIfContains\"])(sourcesOuters[i], _constants_classes_names__WEBPACK_IMPORTED_MODULE_1__[\"TRANSFORM_TRANSITION_CLASS_NAME\"]);\n\n      if (i !== stageIndexes.current) {\n        sourcesOutersTransformers[i].negative();\n      } // if source is Invalid or if lightbox is initialized there are no sourcesStylers\n      // so we need to check if it exists\n\n\n      if (sourcesStylers[i]) {\n        sourcesStylers[i].styleSize();\n      }\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sizes/setUpWindowResizeActioner.js?");

/***/ }),

/***/ "./src/js/core/slide/setUpSlideChangeFacade.js":
/*!*****************************************************!*\
  !*** ./src/js/core/slide/setUpSlideChangeFacade.js ***!
  \*****************************************************/
/*! exports provided: setUpSlideChangeFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpSlideChangeFacade\", function() { return setUpSlideChangeFacade; });\nfunction setUpSlideChangeFacade(_ref) {\n  var _ref$core = _ref.core,\n      self = _ref$core.slideChangeFacade,\n      slideIndexChanger = _ref$core.slideIndexChanger,\n      stageManager = _ref$core.stageManager,\n      sources = _ref.props.sources;\n\n  if (sources.length > 1) {\n    self.changeToPrevious = function () {\n      slideIndexChanger.jumpTo(stageManager.getPreviousSlideIndex());\n    };\n\n    self.changeToNext = function () {\n      slideIndexChanger.jumpTo(stageManager.getNextSlideIndex());\n    };\n  } else {\n    self.changeToPrevious = function () {};\n\n    self.changeToNext = function () {};\n  }\n}\n\n//# sourceURL=webpack:///./src/js/core/slide/setUpSlideChangeFacade.js?");

/***/ }),

/***/ "./src/js/core/sources/SourceLoadActioner.js":
/*!***************************************************!*\
  !*** ./src/js/core/sources/SourceLoadActioner.js ***!
  \***************************************************/
/*! exports provided: SourceLoadActioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SourceLoadActioner\", function() { return SourceLoadActioner; });\n/* harmony import */ var _SourceStyler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SourceStyler */ \"./src/js/core/sources/SourceStyler.js\");\n/* harmony import */ var _constants_classes_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/classes-names */ \"./src/js/constants/classes-names.js\");\n\n\nfunction SourceLoadActioner(_ref, i, defaultWidth, defaultHeight) {\n  var _this = this;\n\n  var sourcesStylers = _ref.collections.sourcesStylers,\n      _ref$elements = _ref.elements,\n      sources = _ref$elements.sources,\n      sourcesInners = _ref$elements.sourcesInners,\n      sourcesOuters = _ref$elements.sourcesOuters,\n      resolve = _ref.resolve;\n\n  this.runNormalLoadActions = function () {\n    sources[i].classList.add(_constants_classes_names__WEBPACK_IMPORTED_MODULE_1__[\"OPACITY_1_CLASS_NAME\"]);\n    sourcesInners[i].classList.add(_constants_classes_names__WEBPACK_IMPORTED_MODULE_1__[\"FADE_IN_STRONG_CLASS_NAME\"]);\n    sourcesOuters[i].removeChild(sourcesOuters[i].firstChild);\n  };\n\n  this.runInitialLoadActions = function () {\n    _this.runNormalLoadActions();\n\n    var sourceStyler = resolve(_SourceStyler__WEBPACK_IMPORTED_MODULE_0__[\"SourceStyler\"], [i, defaultWidth, defaultHeight]);\n    sourceStyler.styleSize();\n    sourcesStylers[i] = sourceStyler;\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/SourceLoadActioner.js?");

/***/ }),

/***/ "./src/js/core/sources/SourceLoadHandler.js":
/*!**************************************************!*\
  !*** ./src/js/core/sources/SourceLoadHandler.js ***!
  \**************************************************/
/*! exports provided: SourceLoadHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SourceLoadHandler\", function() { return SourceLoadHandler; });\n/* harmony import */ var _SourceLoadActioner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SourceLoadActioner */ \"./src/js/core/sources/SourceLoadActioner.js\");\n\nfunction SourceLoadHandler(_ref, i) {\n  var _this = this;\n\n  var props = _ref.props,\n      resolve = _ref.resolve;\n\n  this.handleImageLoad = function (_ref2) {\n    var _ref2$target = _ref2.target,\n        width = _ref2$target.width,\n        height = _ref2$target.height;\n    _this.handleImageLoad = loadInitiallyAndGetNormalLoad(width, height);\n  };\n\n  this.handleVideoLoad = function (_ref3) {\n    var _ref3$target = _ref3.target,\n        videoWidth = _ref3$target.videoWidth,\n        videoHeight = _ref3$target.videoHeight;\n    _this.handleVideoLoad = loadInitiallyAndGetNormalLoad(videoWidth, videoHeight);\n  };\n\n  this.handleMaxDimensionsSourceLoad = function () {\n    var width = 1920;\n    var height = 1080;\n\n    if (props.maxDimensions && props.maxDimensions[i]) {\n      width = props.maxDimensions[i].width;\n      height = props.maxDimensions[i].height;\n    } else if (props.globalMaxDimensions) {\n      width = props.globalMaxDimensions.width;\n      height = props.globalMaxDimensions.height;\n    }\n\n    _this.handleMaxDimensionsSourceLoad = loadInitiallyAndGetNormalLoad(width, height);\n  };\n\n  var loadInitiallyAndGetNormalLoad = function loadInitiallyAndGetNormalLoad(defaultWidth, defaultHeight) {\n    var sourceLoadActioner = resolve(_SourceLoadActioner__WEBPACK_IMPORTED_MODULE_0__[\"SourceLoadActioner\"], [i, defaultWidth, defaultHeight]);\n    sourceLoadActioner.runInitialLoadActions();\n    return sourceLoadActioner.runNormalLoadActions;\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/SourceLoadHandler.js?");

/***/ }),

/***/ "./src/js/core/sources/SourceStyler.js":
/*!*********************************************!*\
  !*** ./src/js/core/sources/SourceStyler.js ***!
  \*********************************************/
/*! exports provided: SourceStyler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SourceStyler\", function() { return SourceStyler; });\nfunction SourceStyler(_ref, i, defaultWidth, defaultHeight) {\n  var data = _ref.data,\n      sources = _ref.elements.sources;\n  var ratio = defaultWidth / defaultHeight;\n  var newHeight = 0;\n  /**\n   * This method takes care of setting sources dimensions.\n   * Unfortunately wa cannot only set max width and max height and allow the sources to scale themselves,\n   * due tu Youtube source which dimensions needs to be set in advance.\n   * In this case we are calculating dimensions mathematically.\n   */\n\n  this.styleSize = function () {\n    newHeight = data.maxSourceWidth / ratio; // wider than higher\n\n    if (newHeight < data.maxSourceHeight) {\n      if (defaultWidth < data.maxSourceWidth) {\n        newHeight = defaultHeight;\n      }\n\n      return updateDimensions();\n    } // higher than wider\n\n\n    if (defaultHeight > data.maxSourceHeight) {\n      newHeight = data.maxSourceHeight;\n    } else {\n      newHeight = defaultHeight;\n    }\n\n    updateDimensions();\n  };\n\n  var updateDimensions = function updateDimensions() {\n    sources[i].style.width = newHeight * ratio + 'px';\n    sources[i].style.height = newHeight + 'px';\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/SourceStyler.js?");

/***/ }),

/***/ "./src/js/core/sources/creating/CreatingSourcesBucket.js":
/*!***************************************************************!*\
  !*** ./src/js/core/sources/creating/CreatingSourcesBucket.js ***!
  \***************************************************************/
/*! exports provided: CreatingSourcesBucket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreatingSourcesBucket\", function() { return CreatingSourcesBucket; });\n/* harmony import */ var _types_AutomaticTypeDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/AutomaticTypeDetector */ \"./src/js/core/sources/types/AutomaticTypeDetector.js\");\n\nfunction CreatingSourcesBucket(_ref, localStorageManager, detectedTypeActioner) {\n  var _ref$props = _ref.props,\n      types = _ref$props.types,\n      type = _ref$props.type,\n      sources = _ref$props.sources,\n      resolve = _ref.resolve;\n\n  this.getTypeSetByClientForIndex = function (i) {\n    var typeSetManuallyByClient;\n\n    if (types && types[i]) {\n      typeSetManuallyByClient = types[i];\n    } else if (type) {\n      typeSetManuallyByClient = type;\n    }\n\n    return typeSetManuallyByClient;\n  };\n\n  this.retrieveTypeWithXhrForIndex = function (i) {\n    // we need to copy index because xhr will for sure come later than next loop iteration\n    var automaticTypeDetector = resolve(_types_AutomaticTypeDetector__WEBPACK_IMPORTED_MODULE_0__[\"AutomaticTypeDetector\"]);\n    automaticTypeDetector.setUrlToCheck(sources[i]);\n    automaticTypeDetector.getSourceType(function (sourceType) {\n      localStorageManager.handleReceivedSourceTypeForUrl(sourceType, sources[i]);\n      detectedTypeActioner.runActionsForSourceTypeAndIndex(sourceType, i);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/creating/CreatingSourcesBucket.js?");

/***/ }),

/***/ "./src/js/core/sources/creating/CreatingSourcesLocalStorageManager.js":
/*!****************************************************************************!*\
  !*** ./src/js/core/sources/creating/CreatingSourcesLocalStorageManager.js ***!
  \****************************************************************************/
/*! exports provided: CreatingSourcesLocalStorageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreatingSourcesLocalStorageManager\", function() { return CreatingSourcesLocalStorageManager; });\n/* harmony import */ var _constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/local-storage-constants */ \"./src/js/constants/local-storage-constants.js\");\n/* harmony import */ var _helpers_objects_assignToObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/objects/assignToObject */ \"./src/js/helpers/objects/assignToObject.js\");\n\n\nfunction CreatingSourcesLocalStorageManager(_ref) {\n  var disableLocalStorage = _ref.props.disableLocalStorage;\n  var NOT_YET_DETECTED = false;\n  var decodedSourceTypes;\n  var newSourceTypesToDetect = 0;\n  var newTypes = {};\n\n  this.getSourceTypeFromLocalStorageByUrl = function (url) {\n    if (!decodedSourceTypes[url]) {\n      return addNewUrlToDetect(url);\n    }\n\n    return decodedSourceTypes[url];\n  };\n\n  this.handleReceivedSourceTypeForUrl = function (sourceType, url) {\n    if (newTypes[url] !== undefined) {\n      newSourceTypesToDetect--;\n      newTypes[url] = sourceType;\n      ifAllNewTypesAreDetectedStoreAllTypesToLocalStorage();\n    }\n  };\n\n  var addNewUrlToDetect = function addNewUrlToDetect(url) {\n    newSourceTypesToDetect++;\n    newTypes[url] = NOT_YET_DETECTED;\n  };\n\n  var ifAllNewTypesAreDetectedStoreAllTypesToLocalStorage = function ifAllNewTypesAreDetectedStoreAllTypesToLocalStorage() {\n    if (newSourceTypesToDetect === 0) {\n      Object(_helpers_objects_assignToObject__WEBPACK_IMPORTED_MODULE_1__[\"assignToObject\"])(decodedSourceTypes, newTypes);\n      localStorage.setItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__[\"SOURCES_TYPES_KEY\"], JSON.stringify(decodedSourceTypes));\n    }\n  };\n\n  if (!disableLocalStorage) {\n    decodedSourceTypes = JSON.parse(localStorage.getItem(_constants_local_storage_constants__WEBPACK_IMPORTED_MODULE_0__[\"SOURCES_TYPES_KEY\"])); // we are checking if detected source types contains at certain key source type\n    // when localStorage will be empty we can overwrite this method because we are sure\n    // that at every index will be no source type\n\n    if (!decodedSourceTypes) {\n      // in ifAllNewTypesAreDetectedStoreAllTypesToLocalStorage we are assigning to\n      // decodedSourceTypes new Types so we need to make it an object to avoid errors\n      decodedSourceTypes = {};\n      this.getSourceTypeFromLocalStorageByUrl = addNewUrlToDetect;\n    }\n  } else {\n    this.getSourceTypeFromLocalStorageByUrl = function () {};\n\n    this.handleReceivedSourceTypeForUrl = function () {};\n  }\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/creating/CreatingSourcesLocalStorageManager.js?");

/***/ }),

/***/ "./src/js/core/sources/creating/createSources.js":
/*!*******************************************************!*\
  !*** ./src/js/core/sources/creating/createSources.js ***!
  \*******************************************************/
/*! exports provided: createSources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSources\", function() { return createSources; });\n/* harmony import */ var _CreatingSourcesLocalStorageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatingSourcesLocalStorageManager */ \"./src/js/core/sources/creating/CreatingSourcesLocalStorageManager.js\");\n/* harmony import */ var _types_DetectedTypeActioner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/DetectedTypeActioner */ \"./src/js/core/sources/types/DetectedTypeActioner.js\");\n/* harmony import */ var _CreatingSourcesBucket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreatingSourcesBucket */ \"./src/js/core/sources/creating/CreatingSourcesBucket.js\");\n/* harmony import */ var _constants_core_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/core-constants */ \"./src/js/constants/core-constants.js\");\n\n\n\n\nfunction createSources(_ref) {\n  var sources = _ref.props.sources,\n      resolve = _ref.resolve;\n  var localStorageManager = resolve(_CreatingSourcesLocalStorageManager__WEBPACK_IMPORTED_MODULE_0__[\"CreatingSourcesLocalStorageManager\"]);\n  var detectedTypeActioner = resolve(_types_DetectedTypeActioner__WEBPACK_IMPORTED_MODULE_1__[\"DetectedTypeActioner\"]);\n  var creatingSourcesBucket = resolve(_CreatingSourcesBucket__WEBPACK_IMPORTED_MODULE_2__[\"CreatingSourcesBucket\"], [localStorageManager, detectedTypeActioner]);\n\n  for (var i = 0; i < sources.length; i++) {\n    if (typeof sources[i] !== \"string\") {\n      detectedTypeActioner.runActionsForSourceTypeAndIndex(_constants_core_constants__WEBPACK_IMPORTED_MODULE_3__[\"CUSTOM_TYPE\"], i);\n      continue;\n    }\n\n    var typeSetManuallyByClient = creatingSourcesBucket.getTypeSetByClientForIndex(i);\n\n    if (typeSetManuallyByClient) {\n      detectedTypeActioner.runActionsForSourceTypeAndIndex(typeSetManuallyByClient, i);\n      continue;\n    }\n\n    var sourceTypeRetrievedWithoutXhr = localStorageManager.getSourceTypeFromLocalStorageByUrl(sources[i]);\n    sourceTypeRetrievedWithoutXhr ? detectedTypeActioner.runActionsForSourceTypeAndIndex(sourceTypeRetrievedWithoutXhr, i) : creatingSourcesBucket.retrieveTypeWithXhrForIndex(i);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/creating/createSources.js?");

/***/ }),

/***/ "./src/js/core/sources/types/AutomaticTypeDetector.js":
/*!************************************************************!*\
  !*** ./src/js/core/sources/types/AutomaticTypeDetector.js ***!
  \************************************************************/
/*! exports provided: AutomaticTypeDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AutomaticTypeDetector\", function() { return AutomaticTypeDetector; });\n/* harmony import */ var _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/core-constants */ \"./src/js/constants/core-constants.js\");\n/* harmony import */ var _getAutomaticTypeDetectorBucket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getAutomaticTypeDetectorBucket */ \"./src/js/core/sources/types/getAutomaticTypeDetectorBucket.js\");\n\n\nfunction AutomaticTypeDetector(_ref) {\n  var xhrs = _ref.collections.xhrs;\n  var automaticTypeDetectorBucket = Object(_getAutomaticTypeDetectorBucket__WEBPACK_IMPORTED_MODULE_1__[\"getAutomaticTypeDetectorBucket\"])();\n  var url;\n  var sourceType;\n  var resolveSourceType;\n  var xhr;\n  var isResolved;\n\n  this.setUrlToCheck = function (urlToCheck) {\n    url = urlToCheck;\n  };\n  /**\n   * Asynchronous method takes callback which will be called after source type is received with source type as param.\n   * @param { Function } callback\n   */\n\n\n  this.getSourceType = function (callback) {\n    if (automaticTypeDetectorBucket.isUrlYoutubeOne(url)) {\n      return callback(_constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"YOUTUBE_TYPE\"]);\n    }\n\n    resolveSourceType = callback;\n    xhr = new XMLHttpRequest();\n    xhrs.push(xhr);\n    xhr.open('GET', url, true);\n    xhr.onreadystatechange = onRequestStateChange;\n    xhr.send();\n  };\n\n  var onRequestStateChange = function onRequestStateChange() {\n    // we need to use isResolved helper because logic after readyState 2 is complex enough that readyState 4 is called\n    // before request is aborted\n    if (xhr.readyState === 4 && xhr.status === 0 && !isResolved) {\n      return resolveInvalidType();\n    }\n\n    if (xhr.readyState !== 2) {\n      return;\n    }\n\n    if (xhr.status !== 200 && xhr.status !== 206) {\n      // we are setting isResolved to true so readyState 4 won't be called before forwarding logic\n      isResolved = true;\n      return resolveInvalidType();\n    } // we are setting isResolved to true so readyState 4 won't be called before forwarding logic\n\n\n    isResolved = true;\n    setSourceTypeDependingOnResponseContentType(automaticTypeDetectorBucket.getTypeFromResponseContentType(xhr.getResponseHeader('content-type')));\n    abortRequestAndResolvePromise();\n  };\n\n  var resolveInvalidType = function resolveInvalidType() {\n    sourceType = _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"INVALID_TYPE\"];\n    abortRequestAndResolvePromise();\n  };\n\n  var abortRequestAndResolvePromise = function abortRequestAndResolvePromise() {\n    xhr.abort();\n    resolveSourceType(sourceType);\n  };\n\n  var setSourceTypeDependingOnResponseContentType = function setSourceTypeDependingOnResponseContentType(type) {\n    switch (type) {\n      case 'image':\n        sourceType = _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGE_TYPE\"];\n        break;\n\n      case 'video':\n        sourceType = _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"VIDEO_TYPE\"];\n        break;\n\n      default:\n        sourceType = _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"INVALID_TYPE\"];\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/types/AutomaticTypeDetector.js?");

/***/ }),

/***/ "./src/js/core/sources/types/DetectedTypeActioner.js":
/*!***********************************************************!*\
  !*** ./src/js/core/sources/types/DetectedTypeActioner.js ***!
  \***********************************************************/
/*! exports provided: DetectedTypeActioner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DetectedTypeActioner\", function() { return DetectedTypeActioner; });\n/* harmony import */ var _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/core-constants */ \"./src/js/constants/core-constants.js\");\n/* harmony import */ var _SourceLoadHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SourceLoadHandler */ \"./src/js/core/sources/SourceLoadHandler.js\");\n/* harmony import */ var _components_sources_proper_sources_renderImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/sources/proper-sources/renderImage */ \"./src/js/components/sources/proper-sources/renderImage.js\");\n/* harmony import */ var _components_sources_proper_sources_renderVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/sources/proper-sources/renderVideo */ \"./src/js/components/sources/proper-sources/renderVideo.js\");\n/* harmony import */ var _components_sources_proper_sources_renderYoutube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/sources/proper-sources/renderYoutube */ \"./src/js/components/sources/proper-sources/renderYoutube.js\");\n/* harmony import */ var _components_sources_proper_sources_renderCustom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/sources/proper-sources/renderCustom */ \"./src/js/components/sources/proper-sources/renderCustom.js\");\n/* harmony import */ var _components_sources_proper_sources_renderInvalid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/sources/proper-sources/renderInvalid */ \"./src/js/components/sources/proper-sources/renderInvalid.js\");\n\n\n\n\n\n\n\nfunction DetectedTypeActioner(fsLightbox) {\n  var sourcesLoadsHandlers = fsLightbox.collections.sourcesLoadsHandlers,\n      resolve = fsLightbox.resolve;\n\n  this.runActionsForSourceTypeAndIndex = function (type, i) {\n    if (type !== _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"INVALID_TYPE\"]) {\n      sourcesLoadsHandlers[i] = resolve(_SourceLoadHandler__WEBPACK_IMPORTED_MODULE_1__[\"SourceLoadHandler\"], [i]);\n    }\n\n    switch (type) {\n      case _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"IMAGE_TYPE\"]:\n        Object(_components_sources_proper_sources_renderImage__WEBPACK_IMPORTED_MODULE_2__[\"renderImage\"])(fsLightbox, i);\n        break;\n\n      case _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"VIDEO_TYPE\"]:\n        Object(_components_sources_proper_sources_renderVideo__WEBPACK_IMPORTED_MODULE_3__[\"renderVideo\"])(fsLightbox, i);\n        break;\n\n      case _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"YOUTUBE_TYPE\"]:\n        Object(_components_sources_proper_sources_renderYoutube__WEBPACK_IMPORTED_MODULE_4__[\"renderYoutube\"])(fsLightbox, i);\n        break;\n\n      case _constants_core_constants__WEBPACK_IMPORTED_MODULE_0__[\"CUSTOM_TYPE\"]:\n        Object(_components_sources_proper_sources_renderCustom__WEBPACK_IMPORTED_MODULE_5__[\"renderCustom\"])(fsLightbox, i);\n        break;\n\n      default:\n        Object(_components_sources_proper_sources_renderInvalid__WEBPACK_IMPORTED_MODULE_6__[\"renderInvalid\"])(fsLightbox, i);\n        break;\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/types/DetectedTypeActioner.js?");

/***/ }),

/***/ "./src/js/core/sources/types/getAutomaticTypeDetectorBucket.js":
/*!*********************************************************************!*\
  !*** ./src/js/core/sources/types/getAutomaticTypeDetectorBucket.js ***!
  \*********************************************************************/
/*! exports provided: getAutomaticTypeDetectorBucket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAutomaticTypeDetectorBucket\", function() { return getAutomaticTypeDetectorBucket; });\nfunction getAutomaticTypeDetectorBucket() {\n  return {\n    isUrlYoutubeOne: function isUrlYoutubeOne(url) {\n      var parser = document.createElement('a');\n      parser.href = url;\n      return parser.hostname === 'www.youtube.com';\n    },\n    getTypeFromResponseContentType: function getTypeFromResponseContentType(responseContentType) {\n      return responseContentType.slice(0, responseContentType.indexOf('/'));\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/sources/types/getAutomaticTypeDetectorBucket.js?");

/***/ }),

/***/ "./src/js/core/stage/setUpStageManager.js":
/*!************************************************!*\
  !*** ./src/js/core/stage/setUpStageManager.js ***!
  \************************************************/
/*! exports provided: setUpStageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUpStageManager\", function() { return setUpStageManager; });\nfunction setUpStageManager(_ref) {\n  var stageIndexes = _ref.stageIndexes,\n      self = _ref.core.stageManager,\n      sourcesCount = _ref.data.sourcesCount;\n  var lastSourceIndex = sourcesCount - 1;\n\n  self.getPreviousSlideIndex = function () {\n    return stageIndexes.current === 0 ? lastSourceIndex : stageIndexes.current - 1;\n  };\n\n  self.getNextSlideIndex = function () {\n    return stageIndexes.current === lastSourceIndex ? 0 : stageIndexes.current + 1;\n  }; // set up updateStageIndexes\n\n\n  if (lastSourceIndex === 0) {\n    self.updateStageIndexes = function () {};\n  } else if (lastSourceIndex === 1) {\n    self.updateStageIndexes = function () {\n      if (stageIndexes.current === 0) {\n        stageIndexes.next = 1;\n        delete stageIndexes.previous;\n      } else {\n        stageIndexes.previous = 0;\n        delete stageIndexes.next;\n      }\n    };\n  } else {\n    self.updateStageIndexes = function () {\n      stageIndexes.previous = self.getPreviousSlideIndex();\n      stageIndexes.next = self.getNextSlideIndex();\n    };\n  } // set up isSourceInStage\n  // if there are 3, 2, 1 slides all sources will be always in stage\n\n\n  lastSourceIndex <= 2 ? self.isSourceInStage = function () {\n    return true;\n  } : self.isSourceInStage = function (index) {\n    var currentIndex = stageIndexes.current;\n    if (currentIndex === 0 && index === lastSourceIndex || currentIndex === lastSourceIndex && index === 0) return true;\n    var difference = currentIndex - index;\n    return difference === -1 || difference === 0 || difference === 1;\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/stage/setUpStageManager.js?");

/***/ }),

/***/ "./src/js/core/transforms/SourceOuterTransformer.js":
/*!**********************************************************!*\
  !*** ./src/js/core/transforms/SourceOuterTransformer.js ***!
  \**********************************************************/
/*! exports provided: SourceOuterTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SourceOuterTransformer\", function() { return SourceOuterTransformer; });\nfunction SourceOuterTransformer(_ref, i) {\n  var _this = this;\n\n  var slideDistance = _ref.data.slideDistance,\n      sourcesOuters = _ref.elements.sourcesOuters;\n  var realSlideDistance = slideDistance + 1;\n  var additionalTransformValue = 0;\n\n  this.byValue = function (value) {\n    additionalTransformValue = value;\n    return _this;\n  };\n\n  this.negative = function () {\n    setFinalTransformAndCleanTransformer(-getDefaultTransformDistance());\n  };\n\n  this.zero = function () {\n    setFinalTransformAndCleanTransformer(0);\n  };\n\n  this.positive = function () {\n    setFinalTransformAndCleanTransformer(getDefaultTransformDistance());\n  };\n\n  var setFinalTransformAndCleanTransformer = function setFinalTransformAndCleanTransformer(value) {\n    sourcesOuters[i].style.transform = \"translateX(\".concat(value + additionalTransformValue, \"px)\");\n    additionalTransformValue = 0;\n  };\n\n  var getDefaultTransformDistance = function getDefaultTransformDistance() {\n    return realSlideDistance * innerWidth;\n  };\n}\n\n//# sourceURL=webpack:///./src/js/core/transforms/SourceOuterTransformer.js?");

/***/ }),

/***/ "./src/js/helpers/elements/removeFromElementClassIfContains.js":
/*!*********************************************************************!*\
  !*** ./src/js/helpers/elements/removeFromElementClassIfContains.js ***!
  \*********************************************************************/
/*! exports provided: removeFromElementClassIfContains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromElementClassIfContains\", function() { return removeFromElementClassIfContains; });\nfunction removeFromElementClassIfContains(element, className) {\n  var classList = element.classList;\n\n  if (classList.contains(className)) {\n    classList.remove(className);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/helpers/elements/removeFromElementClassIfContains.js?");

/***/ }),

/***/ "./src/js/helpers/objects/assignToObject.js":
/*!**************************************************!*\
  !*** ./src/js/helpers/objects/assignToObject.js ***!
  \**************************************************/
/*! exports provided: assignToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"assignToObject\", function() { return assignToObject; });\n/**\n * This function assigns to object properties from second one\n * @param { Object } object\n * @param { Object } toAssign\n */\nfunction assignToObject(object, toAssign) {\n  for (var toAssignPropertyName in toAssign) {\n    object[toAssignPropertyName] = toAssign[toAssignPropertyName];\n  }\n}\n\n//# sourceURL=webpack:///./src/js/helpers/objects/assignToObject.js?");

/***/ })

/******/ });
});