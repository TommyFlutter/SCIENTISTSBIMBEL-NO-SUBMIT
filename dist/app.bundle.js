/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

/* General */
body {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}

/* Search */
#movie-search-container {
  margin: 20px auto;
  padding: 15px;
  max-width: 600px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#movie-search-container input {
  width: 100%;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 15px;
  transition: border-color 0.3s ease-in-out;
}

#movie-search-container input:focus {
  border-color: #db0000;
  box-shadow: 0 0 5px rgba(219, 0, 0, 0.5);
}

.movie-result-container {
  padding: 10px;
  border-top: 1px solid #ddd;
  max-height: 300px;
  overflow-y: auto;
}

.movie-result-container ul {
  list-style: none;
}

.movie-result-container ul li {
  padding: 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.2s;
}

.movie-result-container ul li:hover {
  background-color: #f3f3f3;
}

/*
  AppBar
*/

.app-bar {
  padding: 8px 16px;
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.app-bar .app-bar__menu {
  display: flex;
  align-items: center;
}

.app-bar .app-bar__menu button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
}

.app-bar .app-bar__brand {
  display: flex;
  align-items: center;
}

.app-bar .app-bar__brand h1 {
  color: #ac1693;
  text-transform: uppercase;
  font-size: 22px;
  user-select: none;
}

.app-bar .app-bar__navigation {
  position: absolute;
  top: 50px;
  left: -180px;
  width: 150px;
  transition: all 0.3s;
  padding: 8px;
  background-color: white;
  overflow: hidden;
}

.app-bar .app-bar__navigation.open {
  left: 0;
}

.app-bar .app-bar__navigation ul li a {
  display: inline-block;
  text-decoration: none;
  color: rgb(182, 11, 156);
  padding: 15px;
  margin-bottom: 5px;
  width: 100%;
}


/* Skip to Content */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 10px;
  background-color: #bf1722;
  color: white;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}

a:focus, button:focus {
  outline: 2px dashed #333;
}


/* Hero Element Styling */
.hero {
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/*
  Main Content
*/

main {
  padding: 32px;
  flex: 1;
}

.content {
  margin: 0 auto;
  min-height: 100%;
}

.content .content__heading {
  font-weight: normal;
}

/* Restaurant List */
.restaurant-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 32px 0;
}

/* Restaurant Item */

.restaurant-item {
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.restaurant-item__header {
  position: relative;
}

.restaurant-item .restaurant-item__header .restaurant-item__header__poster{
  width: 100%;
}

.restaurant-item .restaurant-item__header .restaurant-item__header__rating{
  position: absolute;
  padding: 8px;
  bottom: 20px;
  left: 0;
  display: inline-block;
  background-color: black;
  color: white;
}

.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating{
  margin-left: 10px;
}

.restaurant-item .restaurant-item__content{
  padding: 16px;
}

.restaurant-item .restaurant-item__content h3 {
  margin: 0 0 10px 0;
}

.restaurant-item .restaurant-item__content h3 a {
  color: #db0000;
  text-decoration: none;
  padding: 16px;
}

.restaurant-item .restaurant-item__content p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;  
}

/* Restaurant */
.restaurant {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px 16px;
}

.restaurant .restaurant__poster {
  width: 100%;
  max-width: 400px;
}

.restaurant__info-item h4 {
  margin: 8px;
}

.restaurant__overview {
  margin-bottom: 20px;
}


.restaurant__menu {
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.restaurant__menu:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.menu__section {
  margin-bottom: 20px;
}

.menu__section h4 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #333;
  text-transform: uppercase;
  border-bottom: 2px solid #ff9800;
  display: inline-block;
  padding-bottom: 5px;
}

.menu__section ul {
  list-style-type: square; 
  margin: 0 0 0 50px; 
  padding: 0 0 0 25px;
  font-size: 1rem; 
  color: #555; 
}

.menu__section ul li {
  margin-bottom: 8px; 
  padding: 5px 0; 
  transition: background-color 0.3s, padding-left 0.3s;
}

.menu__section ul li:hover {
  background-color: #f5f5f5;
  padding-left: 15px; 
}

/*
  Review
*/

#reviewFormContainer {
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#reviewForm h3 {
  margin-bottom: 15px;
  font-size: 1.5rem;
  text-align: center;
}

#reviewForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#reviewForm input,
#reviewForm textarea {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
}

#reviewForm button {
  padding: 15px;
  background-color: #dd14b1;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}
#reviewForm button:hover {
  background-color: #DB0000BB;
}

#reviewForm button:focus-visible {
  outline: 3px solid #DB000055;
}


#reviewsContainer {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#reviewsContainer h3 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;
}

#reviewsList .review-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}

#reviewsList .review-item:last-child {
  border-bottom: none;
}

#reviewsList .review-item p {
  margin: 5px 0;
}

/*
  Footer
*/

footer {
  padding: 16px;
}
 
footer #footerTools {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}
 
footer p {
  margin-top: 16px;
 
  text-align: center;
  color: #3a022c;
}
 
footer p a {
  color: #db0000;
  text-decoration: none;
}
 


/*
   Like
*/

.like {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db0000;
  
  position: fixed;
  bottom: 70px;
  right: 70px;
  border-radius: 50%;
  border: 0;
  
  font-size: 18px;
  color: white;
  cursor: pointer;
}
/*
  Button
*/
 
.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #DB0000;
  border: 1px solid #770000;
  border-radius: 4px;
 
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
 
  cursor: pointer;
  transition: .15s ease-in-out;
}
 
.btn:hover {
  background-color: #DB0000BB;
}
.btn:active {
  background-color: #DB0000DD;
}
.btn:focus-visible {
  outline: 3px solid #DB000055;
}


`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n}\n\n/* General */\nbody {\n  font-family: 'Poppins', sans-serif;\n  min-height: 100vh;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Search */\n#movie-search-container {\n  margin: 20px auto;\n  padding: 15px;\n  max-width: 600px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n#movie-search-container input {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  margin-bottom: 15px;\n  transition: border-color 0.3s ease-in-out;\n}\n\n#movie-search-container input:focus {\n  border-color: #db0000;\n  box-shadow: 0 0 5px rgba(219, 0, 0, 0.5);\n}\n\n.movie-result-container {\n  padding: 10px;\n  border-top: 1px solid #ddd;\n  max-height: 300px;\n  overflow-y: auto;\n}\n\n.movie-result-container ul {\n  list-style: none;\n}\n\n.movie-result-container ul li {\n  padding: 10px;\n  border-bottom: 1px solid #eee;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.movie-result-container ul li:hover {\n  background-color: #f3f3f3;\n}\n\n/*\n  AppBar\n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 15px;\n  cursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n  color: #ac1693;\n  text-transform: uppercase;\n  font-size: 22px;\n  user-select: none;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: white;\n  overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: rgb(182, 11, 156);\n  padding: 15px;\n  margin-bottom: 5px;\n  width: 100%;\n}\n\n\n/* Skip to Content */\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 10px;\n  background-color: #bf1722;\n  color: white;\n  z-index: 100;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\na:focus, button:focus {\n  outline: 2px dashed #333;\n}\n\n\n/* Hero Element Styling */\n.hero {\n  width: 100%;\n  height: 400px;\n  background-color: #f0f0f0;\n}\n\n.hero-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n/*\n  Main Content\n*/\n\nmain {\n  padding: 32px;\n  flex: 1;\n}\n\n.content {\n  margin: 0 auto;\n  min-height: 100%;\n}\n\n.content .content__heading {\n  font-weight: normal;\n}\n\n/* Restaurant List */\n.restaurant-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n\n/* Restaurant Item */\n\n.restaurant-item {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.restaurant-item__header {\n  position: relative;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster{\n  width: 100%;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating{\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating{\n  margin-left: 10px;\n}\n\n.restaurant-item .restaurant-item__content{\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content h3 {\n  margin: 0 0 10px 0;\n}\n\n.restaurant-item .restaurant-item__content h3 a {\n  color: #db0000;\n  text-decoration: none;\n  padding: 16px;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;  \n}\n\n/* Restaurant */\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n}\n\n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n}\n\n.restaurant__info-item h4 {\n  margin: 8px;\n}\n\n.restaurant__overview {\n  margin-bottom: 20px;\n}\n\n\n.restaurant__menu {\n  border: 1px solid #e0e0e0;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.restaurant__menu:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n\n.menu__section {\n  margin-bottom: 20px;\n}\n\n.menu__section h4 {\n  margin-bottom: 10px;\n  font-size: 1.2rem;\n  color: #333;\n  text-transform: uppercase;\n  border-bottom: 2px solid #ff9800;\n  display: inline-block;\n  padding-bottom: 5px;\n}\n\n.menu__section ul {\n  list-style-type: square; \n  margin: 0 0 0 50px; \n  padding: 0 0 0 25px;\n  font-size: 1rem; \n  color: #555; \n}\n\n.menu__section ul li {\n  margin-bottom: 8px; \n  padding: 5px 0; \n  transition: background-color 0.3s, padding-left 0.3s;\n}\n\n.menu__section ul li:hover {\n  background-color: #f5f5f5;\n  padding-left: 15px; \n}\n\n/*\n  Review\n*/\n\n#reviewFormContainer {\n  margin: 20px 0;\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n#reviewForm h3 {\n  margin-bottom: 15px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#reviewForm {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n#reviewForm input,\n#reviewForm textarea {\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-size: 1rem;\n  width: 100%;\n}\n\n#reviewForm button {\n  padding: 15px;\n  background-color: #dd14b1;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  cursor: pointer;\n}\n#reviewForm button:hover {\n  background-color: #DB0000BB;\n}\n\n#reviewForm button:focus-visible {\n  outline: 3px solid #DB000055;\n}\n\n\n#reviewsContainer {\n  margin-top: 20px;\n  padding: 15px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n#reviewsContainer h3 {\n  margin-bottom: 10px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#reviewsList .review-item {\n  border-bottom: 1px solid #eee;\n  padding: 10px 0;\n}\n\n#reviewsList .review-item:last-child {\n  border-bottom: none;\n}\n\n#reviewsList .review-item p {\n  margin: 5px 0;\n}\n\n/*\n  Footer\n*/\n\nfooter {\n  padding: 16px;\n}\n \nfooter #footerTools {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 8px;\n}\n \nfooter p {\n  margin-top: 16px;\n \n  text-align: center;\n  color: #3a022c;\n}\n \nfooter p a {\n  color: #db0000;\n  text-decoration: none;\n}\n \n\n\n/*\n   Like\n*/\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 70px;\n  right: 70px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n/*\n  Button\n*/\n \n.btn {\n  display: inline-block;\n  padding: 12px 24px;\n  background-color: #DB0000;\n  border: 1px solid #770000;\n  border-radius: 4px;\n \n  font-weight: 500;\n  font-size: 16px;\n  color: #ffffff;\n \n  cursor: pointer;\n  transition: .15s ease-in-out;\n}\n \n.btn:hover {\n  background-color: #DB0000BB;\n}\n.btn:active {\n  background-color: #DB0000DD;\n}\n.btn:focus-visible {\n  outline: 3px solid #DB000055;\n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 650px) {
  .app-bar {
    grid-template-columns: 1fr auto;
    padding: 8px 32px;
  }
  .app-bar .app-bar__brand h1 {
    font-size: 1.5em;
  }
  .app-bar .app-bar__menu {
    display: none;
  }
  .app-bar .app-bar__navigation {
    position: static;
    width: 100%;
  }
  .app-bar .app-bar__navigation ul li {
    display: inline-block;
  }
  .app-bar .app-bar__navigation ul li a {
    display: inline-block;
    width: 120px;
    text-align: center;
    margin: 0;
  }
     
  .restaurant-list {
    grid-template-columns: 1fr 1fr;
  }
 
  .restaurant {
    grid-template-columns: auto 1fr;
  }
 
  .restaurant .restaurant__title {
    grid-column-start: 1;
    grid-column-end: 3;
  }
 
  .restaurant .restaurant__overview {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  footer #footerTools {
    flex-direction: row;
  }

}

@media screen and (min-width: 800px) {
  .app-bar .app-bar__brand h1 {
    font-size: 2em;
  }
}
 
@media screen and (min-width: 850px) {
  .restaurant-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
   
@media screen and (min-width: 1200px) {
  .restaurant-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
 
@media screen and (min-width: 1600px) {
  .restaurant-list {
      grid-template-columns: repeat(5, 1fr);
  }
}

@media (max-width: 768px) {
  #movie-search-container {
    padding: 10px;
    max-width: 90%;
  }

  #movie-search-container input {
    font-size: 0.9rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA;EACE;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,aAAa;EACf;EACA;IACE,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;AAEF;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;MACI,qCAAqC;EACzC;AACF;;AAEA;EACE;IACE,aAAa;IACb,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@media screen and (min-width: 650px) {\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n  .app-bar .app-bar__brand h1 {\n    font-size: 1.5em;\n  }\n  .app-bar .app-bar__menu {\n    display: none;\n  }\n  .app-bar .app-bar__navigation {\n    position: static;\n    width: 100%;\n  }\n  .app-bar .app-bar__navigation ul li {\n    display: inline-block;\n  }\n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n  }\n     \n  .restaurant-list {\n    grid-template-columns: 1fr 1fr;\n  }\n \n  .restaurant {\n    grid-template-columns: auto 1fr;\n  }\n \n  .restaurant .restaurant__title {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n \n  .restaurant .restaurant__overview {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  footer #footerTools {\n    flex-direction: row;\n  }\n\n}\n\n@media screen and (min-width: 800px) {\n  .app-bar .app-bar__brand h1 {\n    font-size: 2em;\n  }\n}\n \n@media screen and (min-width: 850px) {\n  .restaurant-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n   \n@media screen and (min-width: 1200px) {\n  .restaurant-list {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n \n@media screen and (min-width: 1600px) {\n  .restaurant-list {\n      grid-template-columns: repeat(5, 1fr);\n  }\n}\n\n@media (max-width: 768px) {\n  #movie-search-container {\n    padding: 10px;\n    max-width: 90%;\n  }\n\n  #movie-search-container input {\n    font-size: 0.9rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/responsive.css":
/*!***********************************!*\
  !*** ./src/styles/responsive.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scripts/data/favorite-resto-idb.js":
/*!************************************************!*\
  !*** ./src/scripts/data/favorite-resto-idb.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/config */ "./src/scripts/globals/config.js");



const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = _globals_config__WEBPACK_IMPORTED_MODULE_1__["default"];

const dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database){
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getRestaurantList() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')){
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantIdb);

/***/ }),

/***/ "./src/scripts/globals/config.js":
/*!***************************************!*\
  !*** ./src/scripts/globals/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONFIG = {
  KEY: '12345', // Ganti dengan API Key jika dibutuhkan
  BASE_URL: 'https://restaurant-api.dicoding.dev/',

  BASE_IMAGE_URL: 'https://raw.githubusercontent.com/TommyFlutter/picture/refs/heads/master/gambar-',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'bunda-resto-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',

};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_responsive_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/responsive.css */ "./src/styles/responsive.css");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _views_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/app */ "./src/scripts/views/app.js");
/* harmony import */ var _scripts_utils_sw_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/utils/sw-register */ "./src/scripts/utils/sw-register.js");
 /* for async await transpile */







const app = new _views_app__WEBPACK_IMPORTED_MODULE_5__["default"]({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  (0,_scripts_utils_sw_register__WEBPACK_IMPORTED_MODULE_6__["default"])();
});



/***/ }),

/***/ "./src/scripts/routes/routes.js":
/*!**************************************!*\
  !*** ./src/scripts/routes/routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_daftar_resto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/pages/daftar-resto */ "./src/scripts/views/pages/daftar-resto.js");
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/pages/detail */ "./src/scripts/views/pages/detail.js");
/* harmony import */ var _views_pages_like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/pages/like */ "./src/scripts/views/pages/like.js");




const routes = {
  '/': _views_pages_daftar_resto__WEBPACK_IMPORTED_MODULE_0__["default"], // default page
  '/daftar-resto': _views_pages_daftar_resto__WEBPACK_IMPORTED_MODULE_0__["default"],
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__["default"],
  '/like': _views_pages_like__WEBPACK_IMPORTED_MODULE_2__["default"],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/scripts/routes/url-parser.js":
/*!******************************************!*\
  !*** ./src/scripts/routes/url-parser.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id ? '/:id' : '')
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);

/***/ }),

/***/ "./src/scripts/utils/drawer-initiator.js":
/*!***********************************************!*\
  !*** ./src/scripts/utils/drawer-initiator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);

/***/ }),

/***/ "./src/scripts/utils/sw-register.js":
/*!******************************************!*\
  !*** ./src/scripts/utils/sw-register.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ "./node_modules/workbox-window/build/workbox-window.prod.es5.mjs");

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }
  const wb = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('./sw.bundle.js');
  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swRegister);


/***/ }),

/***/ "./src/scripts/views/app.js":
/*!**********************************!*\
  !*** ./src/scripts/views/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/drawer-initiator */ "./src/scripts/utils/drawer-initiator.js");
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes/routes */ "./src/scripts/routes/routes.js");




class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    _utils_drawer_initiator__WEBPACK_IMPORTED_MODULE_0__["default"].init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }
  async renderPage() {
    const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_1__["default"].parseActiveUrlWithCombiner();
    const page = _routes_routes__WEBPACK_IMPORTED_MODULE_2__["default"][url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });

  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/scripts/views/pages/daftar-resto.js":
/*!*************************************************!*\
  !*** ./src/scripts/views/pages/daftar-resto.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* harmony import */ var _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DATA.json */ "./src/scripts/data/DATA.json");
//* eslint-disable linebreak-style */




const DaftarResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Daftar Produk Bimbel Ayo Daftar di BIMBEL SCIENTISTS WA 0858 8652 8913 </h2>
        <h3>Pada Peta di bawah ini Bimbel Scientists tepat 4 Ruko di sebelah kanan Indomaret.MBJ</h2>
       <iframe width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Indomaret.MBJ%20Bekasi+(Indomaret.MBJ)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://mapseinbinden.org'>google map einbinden</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=5010edb6be0de404a8a688adb338d3bbe218f252'></script>


        
        <div id="restaurant-list" class="restaurant-list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      console.log('API Response:', _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__); // Check the structure of `data`
      const restaurantListContainer = document.querySelector('#restaurant-list');
      for (let i=0; i<_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books.length; i++){
        restaurantListContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createRestaurantItemTemplate)(_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books[i]);  // panggil method dari template
      }
      const restaurants = _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.restaurants || []; // Adjust this based on the actual key
      if (Array.isArray(restaurants)) {
        restaurants.forEach((restaurant) => {
          restaurantListContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__.createRestaurantItemTemplate)(restaurant);
        });
      } else {
        throw new Error('Invalid data format: expected an array');
      }
    } catch (error) {
      console.error('Error in afterRender:', error);
      document.querySelector('#restaurant-list').innerHTML = '<p>Failed to load restaurants.</p>';
    }
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DaftarResto);


/***/ }),

/***/ "./src/scripts/views/pages/detail.js":
/*!*******************************************!*\
  !*** ./src/scripts/views/pages/detail.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../routes/url-parser */ "./src/scripts/routes/url-parser.js");
/* harmony import */ var _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/DATA.json */ "./src/scripts/data/DATA.json");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");
/* harmony import */ var _like_button_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./like-button-presenter */ "./src/scripts/views/pages/like-button-presenter.js");





const Detail = {
  async render() {
    return `
      <div id="book-list" class="book"></div>
      <div id="likeButtonContainer"></div>
      

      
      </div>
    `;
  },

  async afterRender() {
    try {
      let book = null;
      const url = _routes_url_parser__WEBPACK_IMPORTED_MODULE_0__["default"].parseActiveUrlWithoutCombiner();
	      const restaurantListContainer = document.querySelector('#book-list');
	      for (let i=0; i<_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books.length; i++){
	        if (_data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books[i].id == url.id){
	          book = _data_DATA_json__WEBPACK_IMPORTED_MODULE_1__.books[i];
	          restaurantListContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_2__.createRestaurantDetailTemplate)(book);
	        }
	      }
      const restaurantForLike = this._createRestaurantForLike(book);
	      const likeButtonContainer = document.querySelector('#likeButtonContainer');
	      await _like_button_presenter__WEBPACK_IMPORTED_MODULE_3__["default"].init({
	        likeButtonContainer,
        restaurant: restaurantForLike,
	      });

      // Render existing reviews


      // Handle review submission

    } catch (error) {
      console.error(error);
      const restaurantListContainer = document.querySelector('#book-list');
      restaurantListContainer.innerHTML = '<p>Gagal memuat detail buku.</p>';
    }
  },
  _createRestaurantForLike(book) {
    return {
      id: book.id,
      name: book.name,
      description: book.description,
      pictureId: book.pictureId,
      kurikulum: book.kurikulum,
      rating: book.rating,
      soal: book.soal,
      jawab: book.jawab
    };
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detail);


/***/ }),

/***/ "./src/scripts/views/pages/like-button-presenter.js":
/*!**********************************************************!*\
  !*** ./src/scripts/views/pages/like-button-presenter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/favorite-resto-idb */ "./src/scripts/data/favorite-resto-idb.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");



const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__["default"];
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)){
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createLikeButtonTemplate)();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createLikedButtonTemplate)();

    const unlikeButton = document.querySelector('#likeButton');
    unlikeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButtonPresenter);

/***/ }),

/***/ "./src/scripts/views/pages/like.js":
/*!*****************************************!*\
  !*** ./src/scripts/views/pages/like.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/favorite-resto-idb */ "./src/scripts/data/favorite-resto-idb.js");
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/template-creator */ "./src/scripts/views/templates/template-creator.js");



const Like = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading">Your Favorite Lesson</h2>
          <div id="restaurant-list" class="restaurant-list">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const restaurant = await _data_favorite_resto_idb__WEBPACK_IMPORTED_MODULE_0__["default"].getRestaurantList();
    const restaurantListContainer = document.querySelector('#restaurant-list');
    restaurant.forEach((restaurant) => {
      restaurantListContainer.innerHTML += (0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_1__.createRestaurantItemTemplate)(restaurant);
    });
  },

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Like);

/***/ }),

/***/ "./src/scripts/views/templates/template-creator.js":
/*!*********************************************************!*\
  !*** ./src/scripts/views/templates/template-creator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLikeButtonTemplate: () => (/* binding */ createLikeButtonTemplate),
/* harmony export */   createLikedButtonTemplate: () => (/* binding */ createLikedButtonTemplate),
/* harmony export */   createRestaurantDetailTemplate: () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   createRestaurantItemTemplate: () => (/* binding */ createRestaurantItemTemplate)
/* harmony export */ });
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals/config */ "./src/scripts/globals/config.js");


const createRestaurantDetailTemplate = (book) => {

  return `
    <h2 class="restaurant__title">${book.name}</h2>
    <img class="restaurant__poster" src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + book.pictureId}">
    <div class="restaurant__info">
      <h3>Information</h3>
      
      <h4>Kurikulum</h4>
      <p>${book.kurikulum || 'Kurikulum Merdeka'}, ${book.kurikulum || 'Kurikulum Merdeka'}</p>
      <h4>Rating</h4>
      <p>⭐️ ${book.rating || 'No rating available'}</p>
      <h4>Categories</h4>
      <p>${book.name}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Description</h3>
      <p>${book.description || 'No description available'}</p>
    </div>
    <div class="restaurant__menu">
      <h3>Contoh soal</h3>
      <div class="menu__food">
        <h4>Soal</h4>
        <ul>${book.soal}</ul>
      </div>
      <div class="menu__drink">
        <h4>Pembahasan</h4>
        <ul>${book.jawab}</ul>
      </div>
    </div>
  `;
};


const createRestaurantItemTemplate = (book) => `
  <div class="restaurant-item">
    <div class ="restaurant-item__header">
      <img class="lazyload restaurant-item__header__poster" alt="${book.name}"
           data-src="${_globals_config__WEBPACK_IMPORTED_MODULE_0__["default"].BASE_IMAGE_URL + book.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${book.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${book.id}">${book.name}</a></h3>
      <p>${book.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;




/***/ }),

/***/ "./src/scripts/data/DATA.json":
/*!************************************!*\
  !*** ./src/scripts/data/DATA.json ***!
  \************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"books":[{"id":"6c7bqjgi84kcowlqdz","name":"Bimbel Kls 4 MTK","description":"Buku ini disajikan atas 6 bab yakni (1) bilangan cacah sampai 10.000 (2) pecahan (3) pola gambar dan pola bilangan (4) pengukuran luas dan volume (5) bangun datar dan (6) piktogram dan diagram batang.","pictureId":"01.png","Kurikulum":"Merdeka","rating":4.6,"soal":"Suatu sekolah memilih 30 siswa dari 100 orang siswa yang akan diikutkan lomba berlari. Tentukan berapa persen siswa yang terpilih lomba lari tersebut!","jawab":"Jawab 30/100 x 100 % = 30 %"},{"id":"ljx8i0qu2uckcowlqdz","name":"Bimbel Kls 5 MTK","description":"Buku ini disajikan dalam sembilan bab, yakni (1) Bilangan Cacah Sampai 100.000, (2) KPK dan FPB, (3) Bilangan Pecahan, (4) Keliling Bangun Datar, (5) Luas Daerah Bangun Datar, (6) Sudut, (7) Membandingkan Ciri-Ciri Bangun Datar, (8) Data, dan (9) Bilangan Cacah Sampai 1.000.000 yang disajikan dengan cara yang mudah dipahami.","pictureId":"02.png","Kurikulum":"Merdeka","rating":4.6,"soal":"Beni memiliki 1 1/8 bagian bika Ambon. Sebanyak 1/8 bagian bika Ambon diberikan kepada neneknya. Berapa bagian sisa bika Ambon yang masih dimiliki Beni?","jawab":"jawab1 1/8 - 1/8 = 1 bagian  "},{"id":"fe8bbxoazddkcowlqdz","name":"Bimbel Kls 6 MTK","description":"Buku ini disajikan dalam empat bab, yakni Bab 1 Pecahan dan Desimal Bab 2 Rasio Bab 3 Kubus dan Balok Bab 4 Peluang . ","pictureId":"03.png","Kurikulum":"Merdeka","rating":4.8,"soal":"Banyu dapat menempuh jarak sepanjang 1 km dalam waktu 30 menit. Jawablah pertanyaan berikut. a. Berapakah jarak yang ditempuh Banyu dalam waktu 1 jam? b. Dengan kecepatan yang sama, berapa waktu yang diperlukan Banyu jika menempuh jarak sejauh 9 km? c. Jika Banyu berjalan selama 3,5 jam, berapa jarak yang ia tempuh?","jawab":"jawab a. 2 km b. 4,5 jam c. 7 km"},{"id":"ik1zljmlf68kcowlqdz","name":"Bimbel Kls 7 MTK","description":"Buku ini disajikan dalam enam bab, yakni Bab 1 Bilangan Bulat Bab 2 Bilangan Rasional Bab 3 Rasio Bab 4 Bentuk Aljabar Bab 5 Kesebangunan Bab 6 Data dan Diagram","pictureId":"04.png","Kurikulum":"Merdeka","rating":4.7,"soal":"Umur Tono kali umur ayah. Umur kakek saat ini 2,25 kali umur ayah. Umur ayah sekarang adalah 28 tahun. a. Berapakah umur Tono saat ini? b. Berapakah umur kakek saat ini? c. Berapakah umur ayah saat Tono lahir?","jawab":"jawab a.1/7 x 28 = 4 ; Umur Tono adalah 4 tahun     b. 2,25 x 28 = 63 ; Umur kakek adalah 63 tahun     c. 28 - 4 = 24 ; Umur ayah saat Tono lahir adalah 24 tahun "},{"id":"9jpuzkm6n6jkcowlqdz","name":"Bimbel kls 8 MTK","description":"Buku ini disajikan dalam enam bab, yakni Bab 1 Bilangan Berpangkat Bab 2 Teorema Pythagoras Bab 3 Persamaan Linier dan Pertidaksamaan Linier Satu Variabel Bab 4 Relasi Dan Fungsi Bab 5 Persamaan Garis Lurus Bab 6 Statistika","pictureId":"05.png","Kurikulum":"Merdeka","rating":3.8,"soal":"Berikut ini adalah ketentuan tarif yang diberlakukan oleh perusahaan taksi: 1. Biaya tarif awal sebesar Rp7.500,00 dan tarif per kilometer sebesar Rp3.000,00. 2. Berapa besar tarif yang dibutuhkan untuk perjalanan sejauh 20 km, 25 km, 30 km? 3. Dapatkah kalian menetapkan tarif untuk perjalanan sejauh 36 km?","jawab":"jawab masalah awal penentuan rumus fungsi untuk masalah tarif taksi yang dibahas di atas. Beberapa harga sewa taksi telah disampaikan sebelumnya, selanjutnya akan ditunjukkan lebih rinci seperti uraian berikut ini. Besar biaya untuk 20 km = Rp7.500,00 + 20 x Rp3.000,00 = Rp67.500,00 Besar biaya untuk 25 km = Rp7.500,00 + 25 x Rp3.000,00 = Rp82.500,00 Besar biaya untuk 30 km = Rp7.500,00 + 30 x Rp3.000,00 = Rp97.500,00 Cobalah perhatikan dengan cermat terhadap angka yang muncul di setiap persamaan berikut: Besar biaya untuk 20 km = Rp7.500,00 + 20 x Rp3.000,00 Besar biaya untuk 25 km = Rp7.500,00 + 25 x Rp3.000,00 Besar biaya untuk 30 km = Rp7.500,00 + 30 x Rp3.000,00 Jika B(x) adalah tarif naik taksi untuk x kilometer, maka B(x) dapat dinyatakan sebagai persamaan B(x)= 7500 + 3000 x"},{"id":"cpl5jpsnuqkkcowlqdz","name":"Bimbel kls 9 MTK","description":"Buku ini disajikan dalam empat bab, yakni Bab 1 Sistem Persamaan Linear Dua Variabel Bab 2 Bangun Ruang Bab 3 Transformasi Geometri Bab 4 Peluang dan Pemilihan Sampel","pictureId":"06.png","Kurikulum":"Merdeka","rating":4.6,"soal":"Tissa pergi ke toko alat tulis. Ia membeli 3 buku tulis dan 5 bolpoin dengan membayar Rp19.000,00. Buatlah model matematika dari permasalahan tersebut. Misalkan m menyatakan harga 1 buku tulis dan n menyatakan harga 1 bolpoin. Dengan demikian, harga 3 buku tulis adalah 3m, harga 5 bolpoin 5n dan total harga adalah Rp19.000,00. Persamaan linear dua variabel dapat dituliskan sebagai berikut. 3m + 5n = 19.000","jawab":"jawab Perhatikan kasus pada Contoh 1.1. Dapatkah kalian menentukan harga 1 buku tulis dan harga 1 bolpoin? Persamaan pada kasus tersebut adalah 3m + 5n = 19.000. Untuk mengetahui harga buku tulis dan bolpoin kita harus menentukan penyelesaian dari persamaan tersebut. Jika kita mengganti m dengan bilangan bulat positif (ingat bahwa m menyatakan harga 1 buku tulis), maka nilai n dapat diperoleh sebagai berikut. Misalkan m = 3.000 maka diperoleh: 3(3.000) + 5n = 19.000 9.000 + 5n = 19.000 5n = 19.000 - 9.000 5n = 10.000 n = 2.000 Apabila harga 1 buku tulis Rp3.000,00 maka harga 1 bolpoin Rp2.000,00. Pasangan berurutan (3.000, 2.000) merupakah salah satu penyelesaian dari persamaan 3m + 5n = 19.000. Apakah hanya (3.000, 2.000) penyelesaian dari persamaan tersebut? Tentu saja tidak. Apabila nilai m berubah maka nilai n bergantung pada nilai m, begitu pun sebaliknya."},{"id":"iqtf9hmdzvbkcowlqdz","name":"Bimbel kls 10 MTK","description":"Buku ini disajikan dalam delapan bab, yakni Bab 1 Eksponen dan Logaritma Bab 2 Barisan dan DeretBab 3 Vektor dan Operasinya Bab 4. Trigonometri Bab 5. Sistem Persamaan dan Pertidaksamaan Linear Bab 6. Fungsi Kuadrat Bab 7. Statistika Bab 8. Peluang","pictureId":"07.png","Kurikulum":"Merdeka","rating":3.6,"soal":"Dalam ujian Fisika, rata-rata nilai dari delapan siswa adalah 65. Rata-rata grup kedua yang berjumlah 12 siswa adalah 72. Hitunglah rata-rata gabungan dari kedua kelompok ini yang berjumlah 20 siswa. ","jawab":"jawab 8 x 65 =520  dan 12 x 72 = 864 jumlah 520 + 864 = 1.384 Rata rata gabungan = 1.384 : 20 = 69,2 "},{"id":"8i06gqcc2dpkcowlqdz","name":"Bimbel kls 11 MTK","description":"Buku ini disajikan dalam tiga bab, yakni Bab 1 Komposisi Fungsi dan Fungsi Invers Bab 2 Lingkaran Bab 3 Statistika  ","pictureId":"08.png","Kurikulum":"Merdeka","rating":4,"soal":"Hubungan antara keuntungan yang diperoleh dengan harga barang yang dijual diberikan sebagai U (x) = −75x 2 + 300x − 140, di mana x adalah harga barang dalam kelipatan Rp10.000,00. a. Apakah U(x) merupakan suatu fungsi? Jelaskan. b. Jika U(x) merupakan suatu fungsi, tentukan domain dan range-nya. c. Jika diinginkan keuntungan tertentu dapatkah diketahui harga barang? d. Jika U(x) merupakan suatu fungsi, apakah fungsi ini mempunyai invers? Jelaskan.","jawab":"jawab Berikut jawaban untuk nomor 1 secara berurutan: a) Iya b) Domain:  {x |  0,539 <=  x  <= 3,461}, Range: { y|  0<= y  ,= 160 } . c) Tentu  d) Iya, karena domainnya sudah dibatasi yakni semua bilangan kelipatan 10000"},{"id":"wf5o19xhxxkcowlqdz","name":"Bimbel Kls 11 MTK Lanjutan","description":"Buku ini disajikan dalam lima bab, yakni Bab 1 Bilangan Kompleks Bab 2 Polinomial Bab 3 Matriks Bab 4 Transformasi Geometri Bab 5 Fungsi dan Pemodelannya .","pictureId":"09.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Sebuah mobil mempunyai massa 1.200 kg. Mobil tersebut berpindah sejauh 30 m dari keadaan diam. Jika x adalah waktu (detik), untuk melihat pengaruh waktu terhadap besarnya gaya yang dilakukan terhadap mobil tersebut adalah sebagai berikut.   a). Tentukan fungsi f yang merupakan fungsi besar gaya. Ingat rumus gaya: F =ma, dengan a= v/ t dan v= s/ t  Keterangan F = gaya  a = percepatan  v = kecepatan  t = waktu  m = massa  s = jarak perpindahan","jawab":"jawab Rumus gaya adalah sebagai berikut. F = ma  m = v/t  m= s/txt  Karena m = 1200 kg,  s = 30m dan x menyatakan waktu, maka fungsi besar gaya adalah f (x) =   36000/x.x "},{"id":"wf5o20xhxxkcowlqdz","name":"Bimbel Kls 12 MTK","description":"Buku ini disajikan dalam tiga bab, yakni Bab 1 Transformasi Fungsi Bab 2 Busur dan Juring Lingkaran Bab 3 Kombinatorik ","pictureId":"10.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Diketahui fungsi linear f(x) = 2x + 3y + 4. Jika f(x) mengalami pergeseran ke bawah sejauh 4 satuan, maka tentukan hasil translasi f(x). ","jawab":"jawab Diketahui: f(x) = 2x + 3y + 4      y = 2x + 3y + 4       y - 3y = 2x + 4        -2y = 2x + 4       y = - x -2    Karena bergeser 4 satuan ke bawah maka   y = f(x) + b untuk b < 0, hal ini berarti     y = -x - 2 - 4     y = -x - 6 Jadi, hasil   translasinya adalah     y = -x - 6 Pada translasi   y = f(x - a),     berlaku:   untuk a > 0, maka grafik bergeser ke kanan    untuk a < 0, maka grafik bergeser ke kiri sehingga translasi    y = f(x - a)     disebut sebagai bentuk Translasi Horizontal"},{"id":"wf5o21xhxxkcowlqdz","name":"Bimbel Kls 12 MTK Lanjutan","description":"Buku ini disajikan dalam lima bab, yakni Bab 1 Geometri Analitik Bab 2 Limit Bab 3 Turunan Fungsi Bab 4 Integral Bab 5 Analisis Data Dan Peluang ","pictureId":"11.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Sebuah peluru ditembakkan vertikal ke atas dengan kecepatan awal 50 m/detik. Ketinggian peluru dalam h meter terhadap titik asal setelah t detik yang ditentukan oleh persamaan h(t) = 50t - 5tkuadrat .          a. Tentukan nilai h pada waktu t = 0 detik, t = 5 detik, dan t =10 detik!     b. Tentukan kecepatan peluru pada waktu t = 3 detik, t = 5 detik, dan t = 7 detik! ","jawab":"jawab Bagian a) Untuk menentukan nilai h atau nilai ketinggian, kalian dapat menyubstitusikan t pada persamaan h(t) = 50t - 5tkuadrat sehingga untuk t= 0, maka h(0) = 50t - 5tkuadrat = 0. untuk t = 5, maka h(5) = 50(5) - 5(5)kuadrat = 125 meter. untuk t = 10, maka h(10) = ............................................................ = ............ meter. Bagian b) Untuk menentukan nilai kecepatan suatu benda, kalian dapat menggunakan konsep turunan pertama suatu fungsi, sedangkan untuk percepatan kalian dapat menggunakan konsep turunan kedua suatu fungsi, sehingga dari persamaan h(t) = 50t - 5tkuadrat , maka persamaan kecepatan adalah v = dh/dt = d/dt (50t - 5tkuadrat ) = 50 - 10t,   sehingga,   Kecepatan pada t = 3 detik adalah 50 - 10(3) = 80 m/detik. Kecepatan pada t = 5 detik adalah 50 - 10(5) = 0 m/detik.   Kecepatan pada t = 7 detik adalah 50 - 10(7) = -20 m/detik."},{"id":"wf5o22xhxxkcowlqdz","name":"Bimbel B.Inggris kls 4","description":" CONTENTS 1. What Are You Doing? 2. There Are 67 English Books 3. My Living Room is Beside The Kitchen 4. Cici Cooks in The Kitchen 5.Where is My Pencil? 6. The Stove is in The Kitchen 7. I Can Make Fried Egg in The Kitchen 8. Be On Time! 9. I Go to School after Having Breakfeast 10. He Alwasys Gets Up at 5 O\'clock 11. How Do You Go to School? 12. He Goes to School by Bike ","pictureId":"12.png","Kurikulum":"Merdeka","rating":3.9,"soal":"kls 4","jawab":"jawab"},{"id":"wf5o23xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 5","description":"CONTENTS 1. What delicious bakso! 2. I want an ice cream cone 3. How much is it? 4. I have a stomachache 5. What a nice skirt! 6. Parts of our body that work together 7. How tall are you? 8. The giraffe is taller than the deer 9. The elephant is the biggest 10. I like playing “balap karung”","pictureId":"13.png","Kurikulum":"Merdeka","rating":3.9,"soal":"kls 4","jawab":"jawab"},{"id":"wf5o24xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 7","description":"CONTENTS Chapter 0. The Beginning Chapter 1. About Me Chapter 2. Culinary and Me Chapter 3. Home Sweet Home Chapter 4. My School Activities Chapter 5. This is My School","pictureId":"14.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Think about your hobby. Describe what you need for your hobby, how many times you do your hobby, and the reason why you like to do your hobby. To describe your hobby, you may use the sentences below.","jawab":" My hobby is __________ I like __________ To do __________ I need __________ I often play __________ I usually play __________ I like to __________ because __________"},{"id":"wf5o25xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 8","description":"CONTENT Chapter 0 The Beginning Chapter 1 Celebrating Independence Day Chapter 2 Kindness Begins with Me Chapter 3 Love Our World Chapter 4 No Littering Chapter 5 Embrace Yourself ","pictureId":"15.png","Kurikulum":"Merdeka","rating":3.9,"soal":"What happened last weekend? Make ‘Yes/No’ questions with the Simple Past tense. Use ‘Did’ for numbers 1 to 5, and use ‘Was’ or ‘Were’ for numbers 6 to 10.    1. you/ stay home __________________________ ?    2.  you/ help/ parents/ at home ___________________________?    3.  you/ play/ games ___________________________?      4.  you/ clean/ bedroom ___________________________?      5. you/ go out with friends ___________________________ ?       6. your best friend/ with you ___________________________ ?    7. there/ many people in your house ___________________________ ?    8. Your brothers or sisters/ at home ___________________________?    9. they/ nice to you? ___________________________?    10. you/ happy? ___________________________? ","jawab":"1. Did you stay home?    2. Did you help your parents at home?    3. Did you play (any) games?    4. Did you clean your bedroom?    5. Did you go out with friends?    6. Was your best friend with you?    7. Were there many people in your house?    8. Were your brothers or sisters at home?    9. Were they nice to you?    10. Were you happy?"},{"id":"wf5o26xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 9","description":"CONTENT Chapter 0 The Beginning Chapter 1 Exploring Fauna of Indonesia Chapter 2 Taking Trips Chapter 3 Journey to Fantasy Worlds Chapter 4 Upcycling Used Materials Chapter 5 Digital Life","pictureId":"16.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Internet Safety Rules and What to Do Online Internet safety is the practice of following actionable guidelines, understanding modern technology, and protecting your digital devices. There are six behavior ideas to be safe online:    1. Verify someone’s identity What to do: always check someone’s identity. If someone seems very into themselves but doesn’t have online friends to show for it, that person may be an imposter!    2. Verify a link is safe What to do: First, always understand web addresses. They should begin with HTTPS. Second, know about hovering. Hovering is when you place your mouse cursor over a link (without clicking it) to see the link embedded in the text. If the link shows a different web when hovering with your mouse cursor, never click it!    3. Identify an online scam Online scams often take the form of unsolicited emails, instant messages, or text messages and they tell the recipient to do something, like click a link. What to do: Never click the link! If you do, it will cause your digital device trouble.    4. Protect your privacy How: • Always hide your phone numbers. • Always keep your addresses and contact information secret, even from social networks that ask for them.   5. Create passwords How: • Always create strong passwords that should be: • 10+ characters long • Including letters, numbers, and other characters • Unrelated to personal information • Easy to remember • Hard to guess • Unique 6. Become a good digital citizen What to do: • Always make safe choices when using the Internet. • Know how the Internet works, and warning signs that something may have gone wrong. (Source: https://www.aeseducation.com/computer-applications/what-is-internet-safety) Questions           1. What does “Internet safety” mean? The practice of following actionable guidelines, understanding modern technology, and protecting your digital devices.                                                           2. How do you know if someone is actually not him/herself? ______________________________________________________________________                                 3. How do you know when a link is safe? ______________________________________________________________________                               4. What does the word “it” in the “..., don’t click it!” refer to? ______________________________________________________________________                                      5. What do online scams usually ask you to do? ______________________________________________________________________                                6. Create one strong password according to point number 5 in the text. ______________________________________________________________________    ","jawab":"1. The practice of following actionable guidelines, understanding modern technology, and protecting your digital devices.      2. By checking his/her online identity.      3. When the web address begins with http.     4. A link.     5. To click on a link they send.     6. Accept any possible answer."},{"id":"wf5o27xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 10","description":"CONTENT Chapter 1 Great Athletes Chapter 2 Sports Events Chapter 3 Sports and Health Chapter 4 Healthy Foods Chapter 5 Graiti Chapter 6 Fractured Stories","pictureId":"17.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Little Red Riding Hood (Traditional Version) One day, Little Red Riding Hood\'s mother gave her a basket with some cake inside and told her to walk through the forest to the other side where her grandmother lay sick in bed. “Remember not to talk to strangers!” Little Red Riding Hood’s mother said. On the way to her grandmother’s house, Little Red Riding Hood met the Big Bad Wolf. “Where are you going little girl?” he asked with his biggest smile. “To my grandmother’s house on the other side of the forest,” said Little Red Riding Hood who had forgotten what her mother told her.The wolf took a shortcut and ran ahead to Grandmother’s house. When he got there, he went inside and swallowed Grandmother whole! Then he put on her cap and nightgown and climbed into her bed. When Little Red Riding Hood got there, she walked right up to the bed. “Grandmother! What big ears you have,” she said. “All the better to hear you with my dear,” said the wolf. “And what big eyes you have,” she said. “All the better to see you with my dear,” said the wolf. “And what big teeth you have,” said Little Red Riding Hood. “All the better to eat you with!” said the wolf and he jumped out of bed and started chasing Little Red Riding Hood. A man who was chopping wood in the forest heard Little Red Riding Hood. He came inside and hit the wolf over the head with his axe. The wolf fell to the ground, and Grandmother popped out of his mouth. Then the woodsman, Little Red Riding Hood, and Grandmother all had cake and tea. Source: http://interactives.readwritethink.org/fractured-fairytale (Retrieved: March 23 2022)      1. Why did Little Red Riding Hood walk through the forest?      2. What rule did Little Red Riding Hood break when she talked to the wolf?      3. Why did the wolf ask Little Red Riding Hood where her grandmother lived?      4. What might happen if the woodsman were not there?","jawab":"1. To visit her sick grandmother      2. Not to talk to stranger      3. So that he could go to the grandmother’s house and ate her     4. Both the girl and the grandmother might be eaten by the wolf or any possible answer is accepted."},{"id":"wf5o28xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 11","description":"CONTENT Unit 1 Digital Literacies and My Identities Unit 2 Love Your Environment Unit 3 Healthy Life for a Healthy Future Unit 4 Indonesian Environmental Figures Unit 5 Personal Money Management","pictureId":"18.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Indonesia is the second-biggest marine polluter in the world. It alone contributes to 10% of global marine pollution. Kuta Beach is Bali’s most popular and most visited destination and that clearly is visible since there are huge mounds of garbage on the beach that are collected on a daily basis. Especially during the rainy season, there is garbage awash on the shores. Authorities declared an emergency after they realized the volume of plastic thrown on the beach was turning into an endangering tourist trade. 100 tons of junk was being cleaned by workers on a daily basis. Source: Gurtoo, May 6, 2019  ","jawab":"Question Based on your previous knowledge about  the  picture  and  the  text,  answer  the  following questions. 1. What is the condition of the place?   2. What makes the situation occur?    3. What can we do to overcome the problem?   4. What would happen if the government put more attention to the condition?   5. What are the moral values related to the condition?  "},{"id":"wf5o29xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 12","description":"CONTENT Unit 1 Narrative Text: The Story of a Friendly Future Unit 2 Argumentative Text: E-Money Unit 3 Hortatory Exposition: Netiquette Unit 4 Discussion Text: Carbon Footprints ","pictureId":"19.png","Kurikulum":"Merdeka","rating":3.9,"soal":"1.What do you know about e-money ?    2.Beside debit and credit cards what other examples of e-money that you know ?","jawab":"1. E-money is a type of money which is stored in a user\'s account which can be accessed using a card or an electronic device, such as a mobile phone.   2. Ovo, Gopay, Dana, etc. "},{"id":"wf5o30xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 11 Lanjutan","description":"CONTENT Unit 1 Legend Unit 2 Fairy Tale Unit 3 Fantasy Unit 4 Analytical Exposition Text Unit 5 Hortatory Exposition Text ","pictureId":"20.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Direct speech    1.“You will go away for seconds, not hours,” Edmund said.   2. “You go away for seconds, not hours,” Edmund said. 3. “You are going away for seconds, not hours,” Edmund said. 4. “You went away for seconds, not hours,” Edmund said.  5. “You were going away for seconds, not hours,” Edmund said. 6. “You have gone away for seconds, not hours,” Edmund said.","jawab":"Indirect Speech   1. Edmund said that I would go away for seconds, not hours.   2. Edmund said that I went away for seconds, not hours.   3. Edmund said that I was going away for seconds, not hours.    4. Edmund said that I had gone away for seconds, not hours.    5. Edmund said that I had been going away for seconds, not hours.   6. Edmund said that I had gone away for seconds, not hours."},{"id":"wf5o31xhxxkcowlqdz","name":"Bimbel B.Inggris Kls 12 Lanjutan","description":"CONTENT 1. Digging the Hidden Gem of Borneo (Kalimantan) 2. Connected to Social Media 3. Get in Touch With Nature 4. Future Method of Payment 5. Today\'s Life ","pictureId":"21.png","Kurikulum":"Merdeka","rating":3.9,"soal":"Shall Financial Literacy Be Taught at School? Have you ever heard of the term financial literacy? It is the ability to apply knowledge and skills to successfully manage financial resources, preferably for lifetime financial well-being. In fact, it is something that most people need to work on a daily basis, and is an important component of our ongoing education. The presence of online transactions may trigger people to spend money easily. In addition, the offer of saving accounts, student loans, mortgages, health insurance, and investment have all become increasingly important. Inserting financial literacy as a part of the school curriculum will teach students effective financial management. Whether it is taught as a mandatory or additional subject, it ought to contain sufficient material for students to cover the basics to help them understand how to manage their monthly budgeting and prepare for their future financial planning. Early enrollment in a financial literacy course gives students the most opportunity to put their knowledge to use. While still in high school, many students who study financial literacy put what they learn into practice straight away. By learning from theory and practical tasks given by the teachers, they might avoid poor spending decisions which lead to unpaid debts, poor credits, housing or vehicle foreclosure, and even bankruptcy. They develop positive behaviors that eventually spread to their families, friends, and communities. Likewise, critics argue that teaching financial literacy in the classroom is unrealistic and ineffective. The school curriculum has been already overflowing with required subjects therefore it could be challenging to fit in an additional subject. Furthermore, teachers will be required to learn about this subject while in fact perhaps teachers are even financially illiterate themselves to deliver about this. Considering it might influence future financial safety, the experts in this field need to assign specifically what requires essential changes in the structure of the current curriculum. On the other hand, others believe that the knowledge about managing money is the responsibility of parents at home, not school. Parents can teach their kids starting from daily pocket money and monthly budget. Living in this era in which financial products and services have been more widely available in society, the necessity of managing money is inevitably urgent. Unlike previous generations, who may have purchased items primarily with cash, today’s consumers have more options of payments to use credit or debit cards, as well as electronic transfers. As a result, having the knowledge of financial literacy will improve the awareness in making decisions of choosing types of financial products that fit their budget. Therefore, it is suggested that students ought to learn and improve their financial literacy whether it is pursued formally at school or simply learned from their parents.      1. The government has launched a reading program to reduce the number of … students.      2. There was a high increase of … on health due to COVID-19 pandemic.      3. My parents always remind me to manage my money to ensure my future … success.      4. Most workers take out a … to buy a house.      5. The doctor spent 10 years completing his education, and he has worked hard to pay his student’s ….      6. The campaign hopes to raise … of financial literacy. 7. She has a long term … in consequence of opening the café.      8. Buying buildings in an elite district could be considered as a/ an …      9. The … of the employees has become the top priority here.      10. The island lacks … to compete with the other areas around. ","jawab":"1. illiterate      2. spending      3. financial      4. mortgage      5. loan      6. awareness      7. Debt      8. investment      9. Safety      10. resources"}]}');

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
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6ff1cdebc467ab3fbc33")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-apps:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdaterestaurant_apps"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2","defaultVendors-node_modules_html-entities_lib_named-references_js","defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0","defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1","defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2","defaultVendors-node_modules_html-entities_lib_named-references_js","defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0","defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1","defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["defaultVendors-node_modules_ansi-html-community_index_js-node_modules_css-loader_dist_runtime-5370d2","defaultVendors-node_modules_html-entities_lib_named-references_js","defaultVendors-node_modules_lazysizes_plugins_parent-fit_ls_parent-fit_js-node_modules_regene-8ac0d0","defaultVendors-node_modules_style-loader_dist_runtime_injectStylesIntoStyleTag_js-node_module-355fe1","defaultVendors-node_modules_webpack-dev-server_client_socket_js-node_modules_webpack-dev-serv-b7b0e9"], () => (__webpack_require__("./src/scripts/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTyxzRkFBc0YsVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlB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V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxRQUFRO1dBQ1I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0N0aEJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc3R5bGVzL3Jlc3BvbnNpdmUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc3R5bGVzL3Jlc3BvbnNpdmUuY3NzPzdkNzUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZGF0YS9mYXZvcml0ZS1yZXN0by1pZGIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvZ2xvYmFscy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvcm91dGVzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy9yb3V0ZXMvdXJsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy91dGlscy9kcmF3ZXItaW5pdGlhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3V0aWxzL3N3LXJlZ2lzdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2FwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9kYWZ0YXItcmVzdG8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3NjcmlwdHMvdmlld3MvcGFnZXMvZGV0YWlsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3BhZ2VzL2xpa2UtYnV0dG9uLXByZXNlbnRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvLi9zcmMvc2NyaXB0cy92aWV3cy9wYWdlcy9saWtlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL3ZpZXdzL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBHZW5lcmFsICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBTZWFyY2ggKi9cbiNtb3ZpZS1zZWFyY2gtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuI21vdmllLXNlYXJjaC1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNtb3ZpZS1zZWFyY2gtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGIwMDAwO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMjE5LCAwLCAwLCAwLjUpO1xufVxuXG4ubW92aWUtcmVzdWx0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vdmllLXJlc3VsdC1jb250YWluZXIgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4ubW92aWUtcmVzdWx0LWNvbnRhaW5lciB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLm1vdmllLXJlc3VsdC1jb250YWluZXIgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG4vKlxuICBBcHBCYXJcbiovXG5cbi5hcHAtYmFyIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XG4gIGdhcDogMTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA5OTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uYXBwLWJhciAuYXBwLWJhcl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hcHAtYmFyIC5hcHAtYmFyX19tZW51IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQgaDEge1xuICBjb2xvcjogI2FjMTY5MztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogLTE4MHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbi5vcGVuIHtcbiAgbGVmdDogMDtcbn1cblxuLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24gdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiKDE4MiwgMTEsIDE1Nik7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxuLyogU2tpcCB0byBDb250ZW50ICovXG4uc2tpcC1saW5rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MHB4O1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYxNzIyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnNraXAtbGluazpmb2N1cyB7XG4gIHRvcDogMDtcbn1cblxuYTpmb2N1cywgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjMzMzO1xufVxuXG5cbi8qIEhlcm8gRWxlbWVudCBTdHlsaW5nICovXG4uaGVybyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuXG4uaGVyby1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi8qXG4gIE1haW4gQ29udGVudFxuKi9cblxubWFpbiB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGZsZXg6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW50IC5jb250ZW50X19oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLyogUmVzdGF1cmFudCBMaXN0ICovXG4ucmVzdGF1cmFudC1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luOiAzMnB4IDA7XG59XG5cbi8qIFJlc3RhdXJhbnQgSXRlbSAqL1xuXG4ucmVzdGF1cmFudC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5yZXN0YXVyYW50LWl0ZW1fX2hlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJlc3RhdXJhbnQtaXRlbSAucmVzdGF1cmFudC1pdGVtX19oZWFkZXIgLnJlc3RhdXJhbnQtaXRlbV9faGVhZGVyX19wb3N0ZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVzdGF1cmFudC1pdGVtIC5yZXN0YXVyYW50LWl0ZW1fX2hlYWRlciAucmVzdGF1cmFudC1pdGVtX19oZWFkZXJfX3JhdGluZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucmVzdGF1cmFudC1pdGVtIC5yZXN0YXVyYW50LWl0ZW1fX2hlYWRlciAucmVzdGF1cmFudC1pdGVtX19oZWFkZXJfX3JhdGluZyAucmVzdGF1cmFudC1pdGVtX19oZWFkZXJfX3JhdGluZ3tcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5yZXN0YXVyYW50LWl0ZW0gLnJlc3RhdXJhbnQtaXRlbV9fY29udGVudHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLnJlc3RhdXJhbnQtaXRlbSAucmVzdGF1cmFudC1pdGVtX19jb250ZW50IGgzIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4ucmVzdGF1cmFudC1pdGVtIC5yZXN0YXVyYW50LWl0ZW1fX2NvbnRlbnQgaDMgYSB7XG4gIGNvbG9yOiAjZGIwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5yZXN0YXVyYW50LWl0ZW0gLnJlc3RhdXJhbnQtaXRlbV9fY29udGVudCBwIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICBcbn1cblxuLyogUmVzdGF1cmFudCAqL1xuLnJlc3RhdXJhbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBnYXA6IDE4cHggMTZweDtcbn1cblxuLnJlc3RhdXJhbnQgLnJlc3RhdXJhbnRfX3Bvc3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4ucmVzdGF1cmFudF9faW5mby1pdGVtIGg0IHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5yZXN0YXVyYW50X19vdmVydmlldyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cblxuLnJlc3RhdXJhbnRfX21lbnUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcbn1cblxuLnJlc3RhdXJhbnRfX21lbnU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubWVudV9fc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tZW51X19zZWN0aW9uIGg0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmOTgwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ubWVudV9fc2VjdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlOyBcbiAgbWFyZ2luOiAwIDAgMCA1MHB4OyBcbiAgcGFkZGluZzogMCAwIDAgMjVweDtcbiAgZm9udC1zaXplOiAxcmVtOyBcbiAgY29sb3I6ICM1NTU7IFxufVxuXG4ubWVudV9fc2VjdGlvbiB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDsgXG4gIHBhZGRpbmc6IDVweCAwOyBcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzLCBwYWRkaW5nLWxlZnQgMC4zcztcbn1cblxuLm1lbnVfX3NlY3Rpb24gdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7IFxufVxuXG4vKlxuICBSZXZpZXdcbiovXG5cbiNyZXZpZXdGb3JtQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuI3Jldmlld0Zvcm0gaDMge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcmV2aWV3Rm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuI3Jldmlld0Zvcm0gaW5wdXQsXG4jcmV2aWV3Rm9ybSB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Jldmlld0Zvcm0gYnV0dG9uIHtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkMTRiMTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNyZXZpZXdGb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDBCQjtcbn1cblxuI3Jldmlld0Zvcm0gYnV0dG9uOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgI0RCMDAwMDU1O1xufVxuXG5cbiNyZXZpZXdzQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4jcmV2aWV3c0NvbnRhaW5lciBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNyZXZpZXdzTGlzdCAucmV2aWV3LWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4jcmV2aWV3c0xpc3QgLnJldmlldy1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4jcmV2aWV3c0xpc3QgLnJldmlldy1pdGVtIHAge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4vKlxuICBGb290ZXJcbiovXG5cbmZvb3RlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4gXG5mb290ZXIgI2Zvb3RlclRvb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuIFxuZm9vdGVyIHAge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuIFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjM2EwMjJjO1xufVxuIFxuZm9vdGVyIHAgYSB7XG4gIGNvbG9yOiAjZGIwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4gXG5cblxuLypcbiAgIExpa2VcbiovXG5cbi5saWtlIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjAwMDA7XG4gIFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNzBweDtcbiAgcmlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAwO1xuICBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8qXG4gIEJ1dHRvblxuKi9cbiBcbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDAwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc3MDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuIFxuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuIFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IC4xNXMgZWFzZS1pbi1vdXQ7XG59XG4gXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCMDAwMEJCO1xufVxuLmJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIwMDAwREQ7XG59XG4uYnRuOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgI0RCMDAwMDU1O1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlC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RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5Qjs7RUFFekIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7O0VBRVQsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7O0NBRUM7O0FBRUQ7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCOztFQUVsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7O0VBRWQsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBHZW5lcmFsICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBTZWFyY2ggKi9cXG4jbW92aWUtc2VhcmNoLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbiNtb3ZpZS1zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNtb3ZpZS1zZWFyY2gtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2RiMDAwMDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgyMTksIDAsIDAsIDAuNSk7XFxufVxcblxcbi5tb3ZpZS1yZXN1bHQtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm1vdmllLXJlc3VsdC1jb250YWluZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1vdmllLXJlc3VsdC1jb250YWluZXIgdWwgbGkge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbn1cXG5cXG4ubW92aWUtcmVzdWx0LWNvbnRhaW5lciB1bCBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbn1cXG5cXG4vKlxcbiAgQXBwQmFyXFxuKi9cXG5cXG4uYXBwLWJhciB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcXG4gIGdhcDogMTBweDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmFwcC1iYXIgLmFwcC1iYXJfX21lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtYmFyIC5hcHAtYmFyX19tZW51IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcHAtYmFyIC5hcHAtYmFyX19icmFuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIGgxIHtcXG4gIGNvbG9yOiAjYWMxNjkzO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwcHg7XFxuICBsZWZ0OiAtMTgwcHg7XFxuICB3aWR0aDogMTUwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24ub3BlbiB7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uYXBwLWJhciAuYXBwLWJhcl9fbmF2aWdhdGlvbiB1bCBsaSBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2IoMTgyLCAxMSwgMTU2KTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuLyogU2tpcCB0byBDb250ZW50ICovXFxuLnNraXAtbGluayB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC00MHB4O1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYxNzIyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4uc2tpcC1saW5rOmZvY3VzIHtcXG4gIHRvcDogMDtcXG59XFxuXFxuYTpmb2N1cywgYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzMzMztcXG59XFxuXFxuXFxuLyogSGVybyBFbGVtZW50IFN0eWxpbmcgKi9cXG4uaGVybyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4uaGVyby1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLypcXG4gIE1haW4gQ29udGVudFxcbiovXFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCAuY29udGVudF9faGVhZGluZyB7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4vKiBSZXN0YXVyYW50IExpc3QgKi9cXG4ucmVzdGF1cmFudC1saXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdhcDogMTZweDtcXG4gIG1hcmdpbjogMzJweCAwO1xcbn1cXG5cXG4vKiBSZXN0YXVyYW50IEl0ZW0gKi9cXG5cXG4ucmVzdGF1cmFudC1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbV9faGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSAucmVzdGF1cmFudC1pdGVtX19oZWFkZXIgLnJlc3RhdXJhbnQtaXRlbV9faGVhZGVyX19wb3N0ZXJ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSAucmVzdGF1cmFudC1pdGVtX19oZWFkZXIgLnJlc3RhdXJhbnQtaXRlbV9faGVhZGVyX19yYXRpbmd7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3R0b206IDIwcHg7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gLnJlc3RhdXJhbnQtaXRlbV9faGVhZGVyIC5yZXN0YXVyYW50LWl0ZW1fX2hlYWRlcl9fcmF0aW5nIC5yZXN0YXVyYW50LWl0ZW1fX2hlYWRlcl9fcmF0aW5ne1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gLnJlc3RhdXJhbnQtaXRlbV9fY29udGVudHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gLnJlc3RhdXJhbnQtaXRlbV9fY29udGVudCBoMyB7XFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gLnJlc3RhdXJhbnQtaXRlbV9fY29udGVudCBoMyBhIHtcXG4gIGNvbG9yOiAjZGIwMDAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSAucmVzdGF1cmFudC1pdGVtX19jb250ZW50IHAge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXFxufVxcblxcbi8qIFJlc3RhdXJhbnQgKi9cXG4ucmVzdGF1cmFudCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdhcDogMThweCAxNnB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudCAucmVzdGF1cmFudF9fcG9zdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX2luZm8taXRlbSBoNCB7XFxuICBtYXJnaW46IDhweDtcXG59XFxuXFxuLnJlc3RhdXJhbnRfX292ZXJ2aWV3IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcblxcbi5yZXN0YXVyYW50X19tZW51IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBib3gtc2hhZG93IDAuM3M7XFxufVxcblxcbi5yZXN0YXVyYW50X19tZW51OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubWVudV9fc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWVudV9fc2VjdGlvbiBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogIzMzMztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmOTgwMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi5tZW51X19zZWN0aW9uIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogc3F1YXJlOyBcXG4gIG1hcmdpbjogMCAwIDAgNTBweDsgXFxuICBwYWRkaW5nOiAwIDAgMCAyNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtOyBcXG4gIGNvbG9yOiAjNTU1OyBcXG59XFxuXFxuLm1lbnVfX3NlY3Rpb24gdWwgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4OyBcXG4gIHBhZGRpbmc6IDVweCAwOyBcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgcGFkZGluZy1sZWZ0IDAuM3M7XFxufVxcblxcbi5tZW51X19zZWN0aW9uIHVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7IFxcbn1cXG5cXG4vKlxcbiAgUmV2aWV3XFxuKi9cXG5cXG4jcmV2aWV3Rm9ybUNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuI3Jldmlld0Zvcm0gaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcmV2aWV3Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3Jldmlld0Zvcm0gaW5wdXQsXFxuI3Jldmlld0Zvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Jldmlld0Zvcm0gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQxNGIxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNyZXZpZXdGb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIwMDAwQkI7XFxufVxcblxcbiNyZXZpZXdGb3JtIGJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCAjREIwMDAwNTU7XFxufVxcblxcblxcbiNyZXZpZXdzQ29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbiNyZXZpZXdzQ29udGFpbmVyIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Jldmlld3NMaXN0IC5yZXZpZXctaXRlbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuI3Jldmlld3NMaXN0IC5yZXZpZXctaXRlbTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbiNyZXZpZXdzTGlzdCAucmV2aWV3LWl0ZW0gcCB7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG4vKlxcbiAgRm9vdGVyXFxuKi9cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuIFxcbmZvb3RlciAjZm9vdGVyVG9vbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG4gXFxuZm9vdGVyIHAge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzNhMDIyYztcXG59XFxuIFxcbmZvb3RlciBwIGEge1xcbiAgY29sb3I6ICNkYjAwMDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbiBcXG5cXG5cXG4vKlxcbiAgIExpa2VcXG4qL1xcblxcbi5saWtlIHtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjAwMDA7XFxuICBcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogNzBweDtcXG4gIHJpZ2h0OiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAwO1xcbiAgXFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qXFxuICBCdXR0b25cXG4qL1xcbiBcXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEycHggMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzcwMDAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiBcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG4gXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIwMDAwQkI7XFxufVxcbi5idG46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjAwMDBERDtcXG59XFxuLmJ0bjpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCAjREIwMDAwNTU7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcbiAgLmFwcC1iYXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XG4gICAgcGFkZGluZzogOHB4IDMycHg7XG4gIH1cbiAgLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIGgxIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG4gIC5hcHAtYmFyIC5hcHAtYmFyX19tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hcHAtYmFyIC5hcHAtYmFyX19uYXZpZ2F0aW9uIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hcHAtYmFyIC5hcHAtYmFyX19uYXZpZ2F0aW9uIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24gdWwgbGkgYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICAgIFxuICAucmVzdGF1cmFudC1saXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cbiBcbiAgLnJlc3RhdXJhbnQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XG4gIH1cbiBcbiAgLnJlc3RhdXJhbnQgLnJlc3RhdXJhbnRfX3RpdGxlIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIH1cbiBcbiAgLnJlc3RhdXJhbnQgLnJlc3RhdXJhbnRfX292ZXJ2aWV3IHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIH1cblxuICBmb290ZXIgI2Zvb3RlclRvb2xzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmFwcC1iYXIgLmFwcC1iYXJfX2JyYW5kIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuIFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpIHtcbiAgLnJlc3RhdXJhbnQtbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxufVxuICAgXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnJlc3RhdXJhbnQtbGlzdCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgfVxufVxuIFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5yZXN0YXVyYW50LWxpc3Qge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI21vdmllLXNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gIH1cblxuICAjbW92aWUtc2VhcmNoLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQ0FBcUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFO01BQ0kscUNBQXFDO0VBQ3pDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjUwcHgpIHtcXG4gIC5hcHAtYmFyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcXG4gICAgcGFkZGluZzogOHB4IDMycHg7XFxuICB9XFxuICAuYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQgaDEge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcbiAgLmFwcC1iYXIgLmFwcC1iYXJfX21lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24ge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG4gIC5hcHAtYmFyIC5hcHAtYmFyX19uYXZpZ2F0aW9uIHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgfVxcbiAgLmFwcC1iYXIgLmFwcC1iYXJfX25hdmlnYXRpb24gdWwgbGkgYSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gICAgIFxcbiAgLnJlc3RhdXJhbnQtbGlzdCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG4gXFxuICAucmVzdGF1cmFudCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICB9XFxuIFxcbiAgLnJlc3RhdXJhbnQgLnJlc3RhdXJhbnRfX3RpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gIH1cXG4gXFxuICAucmVzdGF1cmFudCAucmVzdGF1cmFudF9fb3ZlcnZpZXcge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgfVxcblxcbiAgZm9vdGVyICNmb290ZXJUb29scyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XFxuICAuYXBwLWJhciAuYXBwLWJhcl9fYnJhbmQgaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gIH1cXG59XFxuIFxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KSB7XFxuICAucmVzdGF1cmFudC1saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuICAgXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAucmVzdGF1cmFudC1saXN0IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIH1cXG59XFxuIFxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xcbiAgLnJlc3RhdXJhbnQtbGlzdCB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAjbW92aWUtc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1heC13aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgI21vdmllLXNlYXJjaC1jb250YWluZXIgaW5wdXQge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzcG9uc2l2ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzcG9uc2l2ZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3BvbnNpdmUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgb3BlbkRCIH0gZnJvbSAnaWRiJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi4vZ2xvYmFscy9jb25maWcnO1xuXG5jb25zdCB7IERBVEFCQVNFX05BTUUsIERBVEFCQVNFX1ZFUlNJT04sIE9CSkVDVF9TVE9SRV9OQU1FIH0gPSBDT05GSUc7XG5cbmNvbnN0IGRiUHJvbWlzZSA9IG9wZW5EQihEQVRBQkFTRV9OQU1FLCBEQVRBQkFTRV9WRVJTSU9OLCB7XG4gIHVwZ3JhZGUoZGF0YWJhc2Upe1xuICAgIGRhdGFiYXNlLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FLCB7IGtleVBhdGg6ICdpZCcgfSk7XG4gIH0sXG59KTtcblxuY29uc3QgRmF2b3JpdGVSZXN0YXVyYW50SWRiID0ge1xuICBhc3luYyBnZXRSZXN0YXVyYW50KGlkKSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IGRiUHJvbWlzZSkuZ2V0KE9CSkVDVF9TVE9SRV9OQU1FLCBpZCk7XG4gIH0sXG5cbiAgYXN5bmMgZ2V0UmVzdGF1cmFudExpc3QoKSB7XG4gICAgcmV0dXJuIChhd2FpdCBkYlByb21pc2UpLmdldEFsbChPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gIH0sXG5cbiAgYXN5bmMgcHV0UmVzdGF1cmFudChyZXN0YXVyYW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIGlmICghcmVzdGF1cmFudC5oYXNPd25Qcm9wZXJ0eSgnaWQnKSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiAoYXdhaXQgZGJQcm9taXNlKS5wdXQoT0JKRUNUX1NUT1JFX05BTUUsIHJlc3RhdXJhbnQpO1xuICB9LFxuXG4gIGFzeW5jIGRlbGV0ZVJlc3RhdXJhbnQoaWQpIHtcbiAgICByZXR1cm4gKGF3YWl0IGRiUHJvbWlzZSkuZGVsZXRlKE9CSkVDVF9TVE9SRV9OQU1FLCBpZCk7XG4gIH0sXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlUmVzdGF1cmFudElkYjsiLCJjb25zdCBDT05GSUcgPSB7XG4gIEtFWTogJzEyMzQ1JywgLy8gR2FudGkgZGVuZ2FuIEFQSSBLZXkgamlrYSBkaWJ1dHVoa2FuXG4gIEJBU0VfVVJMOiAnaHR0cHM6Ly9yZXN0YXVyYW50LWFwaS5kaWNvZGluZy5kZXYvJyxcblxuICBCQVNFX0lNQUdFX1VSTDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Ub21teUZsdXR0ZXIvcGljdHVyZS9yZWZzL2hlYWRzL21hc3Rlci9nYW1iYXItJyxcbiAgREVGQVVMVF9MQU5HVUFHRTogJ2VuLXVzJyxcbiAgQ0FDSEVfTkFNRTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICBEQVRBQkFTRV9OQU1FOiAnYnVuZGEtcmVzdG8tZGF0YWJhc2UnLFxuICBEQVRBQkFTRV9WRVJTSU9OOiAxLFxuICBPQkpFQ1RfU1RPUkVfTkFNRTogJ3Jlc3RhdXJhbnRzJyxcblxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDT05GSUc7XG5cbiIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7IC8qIGZvciBhc3luYyBhd2FpdCB0cmFuc3BpbGUgKi9cbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3Jlc3BvbnNpdmUuY3NzJztcbmltcG9ydCAnbGF6eXNpemVzJztcbmltcG9ydCAnbGF6eXNpemVzL3BsdWdpbnMvcGFyZW50LWZpdC9scy5wYXJlbnQtZml0JztcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3cy9hcHAnO1xuaW1wb3J0IHN3UmVnaXN0ZXIgZnJvbSAnLi4vc2NyaXB0cy91dGlscy9zdy1yZWdpc3Rlcic7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoe1xuICBidXR0b246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXJCdXR0b24nKSxcbiAgZHJhd2VyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbkRyYXdlcicpLFxuICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbkNvbnRlbnQnKSxcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgYXBwLnJlbmRlclBhZ2UoKTtcbiAgc3dSZWdpc3RlcigpO1xufSk7XG5cbiIsImltcG9ydCBEYWZ0YXJSZXN0byBmcm9tICcuLi92aWV3cy9wYWdlcy9kYWZ0YXItcmVzdG8nO1xuaW1wb3J0IERldGFpbCBmcm9tICcuLi92aWV3cy9wYWdlcy9kZXRhaWwnO1xuaW1wb3J0IExpa2UgZnJvbSAnLi4vdmlld3MvcGFnZXMvbGlrZSc7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgJy8nOiBEYWZ0YXJSZXN0bywgLy8gZGVmYXVsdCBwYWdlXG4gICcvZGFmdGFyLXJlc3RvJzogRGFmdGFyUmVzdG8sXG4gICcvZGV0YWlsLzppZCc6IERldGFpbCxcbiAgJy9saWtlJzogTGlrZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlczsiLCJjb25zdCBVcmxQYXJzZXIgPSB7XG4gIHBhcnNlQWN0aXZlVXJsV2l0aENvbWJpbmVyKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3Qgc3BsaXRlZFVybCA9IHRoaXMuX3VybFNwbGl0dGVyKHVybCk7XG4gICAgcmV0dXJuIHRoaXMuX3VybENvbWJpbmVyKHNwbGl0ZWRVcmwpO1xuICB9LFxuXG4gIHBhcnNlQWN0aXZlVXJsV2l0aG91dENvbWJpbmVyKCkge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRoaXMuX3VybFNwbGl0dGVyKHVybCk7XG4gIH0sXG5cbiAgX3VybFNwbGl0dGVyKHVybCkge1xuICAgIGNvbnN0IHVybHNTcGxpdHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzb3VyY2U6IHVybHNTcGxpdHNbMV0gfHwgbnVsbCxcbiAgICAgIGlkOiB1cmxzU3BsaXRzWzJdIHx8IG51bGwsXG4gICAgICB2ZXJiOiB1cmxzU3BsaXRzWzNdIHx8IG51bGwsXG4gICAgfTtcbiAgfSxcblxuICBfdXJsQ29tYmluZXIoc3BsaXRlZFVybCkge1xuICAgIHJldHVybiAoc3BsaXRlZFVybC5yZXNvdXJjZSA/IGAvJHtzcGxpdGVkVXJsLnJlc291cmNlfWAgOiAnLycpXG4gICAgICArIChzcGxpdGVkVXJsLmlkID8gJy86aWQnIDogJycpXG4gICAgICArIChzcGxpdGVkVXJsLnZlcmIgPyBgLyR7c3BsaXRlZFVybC52ZXJifWAgOiAnJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcmxQYXJzZXI7IiwiY29uc3QgRHJhd2VySW5pdGlhdG9yID0ge1xuICBpbml0KHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdG9nZ2xlRHJhd2VyKGV2ZW50LCBkcmF3ZXIpO1xuICAgIH0pO1xuXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcik7XG4gICAgfSk7XG4gIH0sXG5cbiAgX3RvZ2dsZURyYXdlcihldmVudCwgZHJhd2VyKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJhd2VyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgfSxcblxuICBfY2xvc2VEcmF3ZXIoZXZlbnQsIGRyYXdlcikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRyYXdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJJbml0aWF0b3I7IiwiaW1wb3J0IHsgV29ya2JveCB9IGZyb20gJ3dvcmtib3gtd2luZG93JztcbmNvbnN0IHN3UmVnaXN0ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGlmICghKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpKSB7XG4gICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIG5vdCBzdXBwb3J0ZWQgaW4gdGhlIGJyb3dzZXInKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgd2IgPSBuZXcgV29ya2JveCgnLi9zdy5idW5kbGUuanMnKTtcbiAgdHJ5IHtcbiAgICBhd2FpdCB3Yi5yZWdpc3RlcigpO1xuICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHdvcmtlciByZWdpc3RlcmVkJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byByZWdpc3RlciBzZXJ2aWNlIHdvcmtlcicsIGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3dSZWdpc3RlcjtcbiIsImltcG9ydCBEcmF3ZXJJbml0aWF0b3IgZnJvbSAnLi4vdXRpbHMvZHJhd2VyLWluaXRpYXRvcic7XG5pbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uL3JvdXRlcy91cmwtcGFyc2VyJztcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzL3JvdXRlcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKHsgYnV0dG9uLCBkcmF3ZXIsIGNvbnRlbnQgfSkge1xuICAgIHRoaXMuX2J1dHRvbiA9IGJ1dHRvbjtcbiAgICB0aGlzLl9kcmF3ZXIgPSBkcmF3ZXI7XG4gICAgdGhpcy5fY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICB0aGlzLl9pbml0aWFsQXBwU2hlbGwoKTtcbiAgfVxuXG4gIF9pbml0aWFsQXBwU2hlbGwoKSB7XG4gICAgRHJhd2VySW5pdGlhdG9yLmluaXQoe1xuICAgICAgYnV0dG9uOiB0aGlzLl9idXR0b24sXG4gICAgICBkcmF3ZXI6IHRoaXMuX2RyYXdlcixcbiAgICAgIGNvbnRlbnQ6IHRoaXMuX2NvbnRlbnQsXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgcmVuZGVyUGFnZSgpIHtcbiAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRoQ29tYmluZXIoKTtcbiAgICBjb25zdCBwYWdlID0gcm91dGVzW3VybF07XG4gICAgdGhpcy5fY29udGVudC5pbm5lckhUTUwgPSBhd2FpdCBwYWdlLnJlbmRlcigpO1xuICAgIGF3YWl0IHBhZ2UuYWZ0ZXJSZW5kZXIoKTtcbiAgICBjb25zdCBza2lwTGlua0VsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpcC1saW5rJyk7XG4gICAgc2tpcExpbmtFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5Db250ZW50JykuZm9jdXMoKTtcbiAgICB9KTtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXG5cbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9kYXRhL0RBVEEuanNvbic7XG5cbmNvbnN0IERhZnRhclJlc3RvID0ge1xuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRpbmdcIj5EYWZ0YXIgUHJvZHVrIEJpbWJlbCBBeW8gRGFmdGFyIGRpIEJJTUJFTCBTQ0lFTlRJU1RTIFdBIDA4NTggODY1MiA4OTEzIDwvaDI+XG4gICAgICAgIDxoMz5QYWRhIFBldGEgZGkgYmF3YWggaW5pIEJpbWJlbCBTY2llbnRpc3RzIHRlcGF0IDQgUnVrbyBkaSBzZWJlbGFoIGthbmFuIEluZG9tYXJldC5NQko8L2gyPlxuICAgICAgIDxpZnJhbWUgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiBmcmFtZWJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJub1wiIG1hcmdpbmhlaWdodD1cIjBcIiBtYXJnaW53aWR0aD1cIjBcIiBpZD1cImdtYXBfY2FudmFzXCIgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD01MjAmYW1wO2hlaWdodD00MDAmYW1wO2hsPWVuJmFtcDtxPUluZG9tYXJldC5NQkolMjBCZWthc2krKEluZG9tYXJldC5NQkopJmFtcDt0PSZhbXA7ej0xMiZhbXA7aWU9VVRGOCZhbXA7aXdsb2M9QiZhbXA7b3V0cHV0PWVtYmVkXCI+PC9pZnJhbWU+IDxhIGhyZWY9J2h0dHA6Ly9tYXBzZWluYmluZGVuLm9yZyc+Z29vZ2xlIG1hcCBlaW5iaW5kZW48L2E+IDxzY3JpcHQgdHlwZT0ndGV4dC9qYXZhc2NyaXB0JyBzcmM9J2h0dHBzOi8vZW1iZWRtYXBzLmNvbS9nb29nbGUtbWFwcy1hdXRob3JpemF0aW9uL3NjcmlwdC5qcz9pZD01MDEwZWRiNmJlMGRlNDA0YThhNjg4YWRiMzM4ZDNiYmUyMThmMjUyJz48L3NjcmlwdD5cblxuXG4gICAgICAgIFxuICAgICAgICA8ZGl2IGlkPVwicmVzdGF1cmFudC1saXN0XCIgY2xhc3M9XCJyZXN0YXVyYW50LWxpc3RcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnQVBJIFJlc3BvbnNlOicsIGRhdGEpOyAvLyBDaGVjayB0aGUgc3RydWN0dXJlIG9mIGBkYXRhYFxuICAgICAgY29uc3QgcmVzdGF1cmFudExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudC1saXN0Jyk7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5ib29rcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJlc3RhdXJhbnRMaXN0Q29udGFpbmVyLmlubmVySFRNTCArPSBjcmVhdGVSZXN0YXVyYW50SXRlbVRlbXBsYXRlKGRhdGEuYm9va3NbaV0pOyAgLy8gcGFuZ2dpbCBtZXRob2QgZGFyaSB0ZW1wbGF0ZVxuICAgICAgfVxuICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBkYXRhLnJlc3RhdXJhbnRzIHx8IFtdOyAvLyBBZGp1c3QgdGhpcyBiYXNlZCBvbiB0aGUgYWN0dWFsIGtleVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdGF1cmFudHMpKSB7XG4gICAgICAgIHJlc3RhdXJhbnRzLmZvckVhY2goKHJlc3RhdXJhbnQpID0+IHtcbiAgICAgICAgICByZXN0YXVyYW50TGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gY3JlYXRlUmVzdGF1cmFudEl0ZW1UZW1wbGF0ZShyZXN0YXVyYW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZGF0YSBmb3JtYXQ6IGV4cGVjdGVkIGFuIGFycmF5Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFmdGVyUmVuZGVyOicsIGVycm9yKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXVyYW50LWxpc3QnKS5pbm5lckhUTUwgPSAnPHA+RmFpbGVkIHRvIGxvYWQgcmVzdGF1cmFudHMuPC9wPic7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFmdGFyUmVzdG87XG4iLCJpbXBvcnQgVXJsUGFyc2VyIGZyb20gJy4uLy4uL3JvdXRlcy91cmwtcGFyc2VyJztcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2RhdGEvREFUQS5qc29uJztcbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy90ZW1wbGF0ZS1jcmVhdG9yJztcbmltcG9ydCBMaWtlQnV0dG9uUHJlc2VudGVyIGZyb20gJy4vbGlrZS1idXR0b24tcHJlc2VudGVyJztcblxuY29uc3QgRGV0YWlsID0ge1xuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgaWQ9XCJib29rLWxpc3RcIiBjbGFzcz1cImJvb2tcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJsaWtlQnV0dG9uQ29udGFpbmVyXCI+PC9kaXY+XG4gICAgICBcblxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9LFxuXG4gIGFzeW5jIGFmdGVyUmVuZGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgYm9vayA9IG51bGw7XG4gICAgICBjb25zdCB1cmwgPSBVcmxQYXJzZXIucGFyc2VBY3RpdmVVcmxXaXRob3V0Q29tYmluZXIoKTtcblx0ICAgICAgY29uc3QgcmVzdGF1cmFudExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay1saXN0Jyk7XG5cdCAgICAgIGZvciAobGV0IGk9MDsgaTxkYXRhLmJvb2tzLmxlbmd0aDsgaSsrKXtcblx0ICAgICAgICBpZiAoZGF0YS5ib29rc1tpXS5pZCA9PSB1cmwuaWQpe1xuXHQgICAgICAgICAgYm9vayA9IGRhdGEuYm9va3NbaV07XG5cdCAgICAgICAgICByZXN0YXVyYW50TGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBjcmVhdGVSZXN0YXVyYW50RGV0YWlsVGVtcGxhdGUoYm9vayk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG4gICAgICBjb25zdCByZXN0YXVyYW50Rm9yTGlrZSA9IHRoaXMuX2NyZWF0ZVJlc3RhdXJhbnRGb3JMaWtlKGJvb2spO1xuXHQgICAgICBjb25zdCBsaWtlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpa2VCdXR0b25Db250YWluZXInKTtcblx0ICAgICAgYXdhaXQgTGlrZUJ1dHRvblByZXNlbnRlci5pbml0KHtcblx0ICAgICAgICBsaWtlQnV0dG9uQ29udGFpbmVyLFxuICAgICAgICByZXN0YXVyYW50OiByZXN0YXVyYW50Rm9yTGlrZSxcblx0ICAgICAgfSk7XG5cbiAgICAgIC8vIFJlbmRlciBleGlzdGluZyByZXZpZXdzXG5cblxuICAgICAgLy8gSGFuZGxlIHJldmlldyBzdWJtaXNzaW9uXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBjb25zdCByZXN0YXVyYW50TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLWxpc3QnKTtcbiAgICAgIHJlc3RhdXJhbnRMaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICc8cD5HYWdhbCBtZW11YXQgZGV0YWlsIGJ1a3UuPC9wPic7XG4gICAgfVxuICB9LFxuICBfY3JlYXRlUmVzdGF1cmFudEZvckxpa2UoYm9vaykge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogYm9vay5pZCxcbiAgICAgIG5hbWU6IGJvb2submFtZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBib29rLmRlc2NyaXB0aW9uLFxuICAgICAgcGljdHVyZUlkOiBib29rLnBpY3R1cmVJZCxcbiAgICAgIGt1cmlrdWx1bTogYm9vay5rdXJpa3VsdW0sXG4gICAgICByYXRpbmc6IGJvb2sucmF0aW5nLFxuICAgICAgc29hbDogYm9vay5zb2FsLFxuICAgICAgamF3YWI6IGJvb2suamF3YWJcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsO1xuIiwiaW1wb3J0IEZhdm9yaXRlUmVzdGF1cmFudElkYiBmcm9tICcuLi8uLi9kYXRhL2Zhdm9yaXRlLXJlc3RvLWlkYic7XG5pbXBvcnQgeyBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGUsIGNyZWF0ZUxpa2VkQnV0dG9uVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XG5cbmNvbnN0IExpa2VCdXR0b25QcmVzZW50ZXIgPSB7XG4gIGFzeW5jIGluaXQoeyBsaWtlQnV0dG9uQ29udGFpbmVyLCByZXN0YXVyYW50IH0pIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uQ29udGFpbmVyID0gbGlrZUJ1dHRvbkNvbnRhaW5lcjtcbiAgICB0aGlzLl9yZXN0YXVyYW50ID0gcmVzdGF1cmFudDtcbiAgICB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnQgPSBGYXZvcml0ZVJlc3RhdXJhbnRJZGI7XG4gICAgYXdhaXQgdGhpcy5fcmVuZGVyQnV0dG9uKCk7XG4gIH0sXG5cbiAgYXN5bmMgX3JlbmRlckJ1dHRvbigpIHtcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLl9yZXN0YXVyYW50O1xuXG4gICAgaWYgKGF3YWl0IHRoaXMuX2lzUmVzdGF1cmFudEV4aXN0KGlkKSl7XG4gICAgICB0aGlzLl9yZW5kZXJMaWtlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJMaWtlKCk7XG4gICAgfVxuICB9LFxuXG4gIGFzeW5jIF9pc1Jlc3RhdXJhbnRFeGlzdChpZCkge1xuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnQuZ2V0UmVzdGF1cmFudChpZCk7XG4gICAgcmV0dXJuICEhcmVzdGF1cmFudDtcbiAgfSxcblxuICBfcmVuZGVyTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uQ29udGFpbmVyLmlubmVySFRNTCA9IGNyZWF0ZUxpa2VCdXR0b25UZW1wbGF0ZSgpO1xuXG4gICAgY29uc3QgbGlrZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWtlQnV0dG9uJyk7XG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHRoaXMuX2Zhdm9yaXRlUmVzdGF1cmFudC5wdXRSZXN0YXVyYW50KHRoaXMuX3Jlc3RhdXJhbnQpO1xuICAgICAgdGhpcy5fcmVuZGVyQnV0dG9uKCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX3JlbmRlckxpa2VkKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b25Db250YWluZXIuaW5uZXJIVE1MID0gY3JlYXRlTGlrZWRCdXR0b25UZW1wbGF0ZSgpO1xuXG4gICAgY29uc3QgdW5saWtlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpa2VCdXR0b24nKTtcbiAgICB1bmxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLl9mYXZvcml0ZVJlc3RhdXJhbnQuZGVsZXRlUmVzdGF1cmFudCh0aGlzLl9yZXN0YXVyYW50LmlkKTtcbiAgICAgIHRoaXMuX3JlbmRlckJ1dHRvbigpO1xuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlrZUJ1dHRvblByZXNlbnRlcjsiLCJpbXBvcnQgRmF2b3JpdGVSZXN0YXVyYW50SWRiIGZyb20gJy4uLy4uL2RhdGEvZmF2b3JpdGUtcmVzdG8taWRiJztcbmltcG9ydCB7IGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZXMvdGVtcGxhdGUtY3JlYXRvcic7XG5cbmNvbnN0IExpa2UgPSB7XG4gIGFzeW5jIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoMiBjbGFzcz1cImNvbnRlbnRfX2hlYWRpbmdcIj5Zb3VyIEZhdm9yaXRlIExlc3NvbjwvaDI+XG4gICAgICAgICAgPGRpdiBpZD1cInJlc3RhdXJhbnQtbGlzdFwiIGNsYXNzPVwicmVzdGF1cmFudC1saXN0XCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgfSxcblxuICBhc3luYyBhZnRlclJlbmRlcigpIHtcbiAgICBjb25zdCByZXN0YXVyYW50ID0gYXdhaXQgRmF2b3JpdGVSZXN0YXVyYW50SWRiLmdldFJlc3RhdXJhbnRMaXN0KCk7XG4gICAgY29uc3QgcmVzdGF1cmFudExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGF1cmFudC1saXN0Jyk7XG4gICAgcmVzdGF1cmFudC5mb3JFYWNoKChyZXN0YXVyYW50KSA9PiB7XG4gICAgICByZXN0YXVyYW50TGlzdENvbnRhaW5lci5pbm5lckhUTUwgKz0gY3JlYXRlUmVzdGF1cmFudEl0ZW1UZW1wbGF0ZShyZXN0YXVyYW50KTtcbiAgICB9KTtcbiAgfSxcblxufTtcbmV4cG9ydCBkZWZhdWx0IExpa2U7IiwiaW1wb3J0IENPTkZJRyBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZyc7XG5cbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSA9IChib29rKSA9PiB7XG5cbiAgcmV0dXJuIGBcbiAgICA8aDIgY2xhc3M9XCJyZXN0YXVyYW50X190aXRsZVwiPiR7Ym9vay5uYW1lfTwvaDI+XG4gICAgPGltZyBjbGFzcz1cInJlc3RhdXJhbnRfX3Bvc3RlclwiIHNyYz1cIiR7Q09ORklHLkJBU0VfSU1BR0VfVVJMICsgYm9vay5waWN0dXJlSWR9XCI+XG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnRfX2luZm9cIj5cbiAgICAgIDxoMz5JbmZvcm1hdGlvbjwvaDM+XG4gICAgICBcbiAgICAgIDxoND5LdXJpa3VsdW08L2g0PlxuICAgICAgPHA+JHtib29rLmt1cmlrdWx1bSB8fCAnS3VyaWt1bHVtIE1lcmRla2EnfSwgJHtib29rLmt1cmlrdWx1bSB8fCAnS3VyaWt1bHVtIE1lcmRla2EnfTwvcD5cbiAgICAgIDxoND5SYXRpbmc8L2g0PlxuICAgICAgPHA+4q2Q77iPICR7Ym9vay5yYXRpbmcgfHwgJ05vIHJhdGluZyBhdmFpbGFibGUnfTwvcD5cbiAgICAgIDxoND5DYXRlZ29yaWVzPC9oND5cbiAgICAgIDxwPiR7Ym9vay5uYW1lfTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudF9fb3ZlcnZpZXdcIj5cbiAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XG4gICAgICA8cD4ke2Jvb2suZGVzY3JpcHRpb24gfHwgJ05vIGRlc2NyaXB0aW9uIGF2YWlsYWJsZSd9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXN0YXVyYW50X19tZW51XCI+XG4gICAgICA8aDM+Q29udG9oIHNvYWw8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVfX2Zvb2RcIj5cbiAgICAgICAgPGg0PlNvYWw8L2g0PlxuICAgICAgICA8dWw+JHtib29rLnNvYWx9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1lbnVfX2RyaW5rXCI+XG4gICAgICAgIDxoND5QZW1iYWhhc2FuPC9oND5cbiAgICAgICAgPHVsPiR7Ym9vay5qYXdhYn08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUgPSAoYm9vaykgPT4gYFxuICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtXCI+XG4gICAgPGRpdiBjbGFzcyA9XCJyZXN0YXVyYW50LWl0ZW1fX2hlYWRlclwiPlxuICAgICAgPGltZyBjbGFzcz1cImxhenlsb2FkIHJlc3RhdXJhbnQtaXRlbV9faGVhZGVyX19wb3N0ZXJcIiBhbHQ9XCIke2Jvb2submFtZX1cIlxuICAgICAgICAgICBkYXRhLXNyYz1cIiR7Q09ORklHLkJBU0VfSU1BR0VfVVJMICsgYm9vay5waWN0dXJlSWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzdGF1cmFudC1pdGVtX19oZWFkZXJfX3JhdGluZ1wiPlxuICAgICAgICA8cD7irZDvuI88c3BhbiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbV9faGVhZGVyX19yYXRpbmdfX3Njb3JlXCI+JHtib29rLnJhdGluZ308L3NwYW4+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc3RhdXJhbnQtaXRlbV9fY29udGVudFwiPlxuICAgICAgPGgzPjxhIGhyZWY9XCIvIy9kZXRhaWwvJHtib29rLmlkfVwiPiR7Ym9vay5uYW1lfTwvYT48L2gzPlxuICAgICAgPHA+JHtib29rLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuXG5jb25zdCBjcmVhdGVMaWtlQnV0dG9uVGVtcGxhdGUgPSAoKSA9PiBgXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cImxpa2UgdGhpcyByZXN0YXVyYW50XCIgaWQ9XCJsaWtlQnV0dG9uXCIgY2xhc3M9XCJsaWtlXCI+XG4gICAgPGkgY2xhc3M9XCJmYSBmYS1oZWFydC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICA8L2J1dHRvbj5cbmA7XG5cbmNvbnN0IGNyZWF0ZUxpa2VkQnV0dG9uVGVtcGxhdGUgPSAoKSA9PiBgXG4gIDxidXR0b24gYXJpYS1sYWJlbD1cInVubGlrZSB0aGlzIHJlc3RhdXJhbnRcIiBpZD1cImxpa2VCdXR0b25cIiBjbGFzcz1cImxpa2VcIj5cbiAgICA8aSBjbGFzcz1cImZhIGZhLWhlYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZVJlc3RhdXJhbnRJdGVtVGVtcGxhdGUsXG4gIGNyZWF0ZVJlc3RhdXJhbnREZXRhaWxUZW1wbGF0ZSxcbiAgY3JlYXRlTGlrZUJ1dHRvblRlbXBsYXRlLFxuICBjcmVhdGVMaWtlZEJ1dHRvblRlbXBsYXRlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckYgPSAoKSA9PiAoXCJhcHAuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZmYxY2RlYmM0NjdhYjNmYmMzM1wiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInJlc3RhdXJhbnQtYXBwczpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vIGluaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sIFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVyZXN0YXVyYW50X2FwcHNcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxudmFyIGN1cnJlbnRVcGRhdGVDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZTtcbnZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbnZhciBjdXJyZW50VXBkYXRlUnVudGltZTtcbmZ1bmN0aW9uIGFwcGx5SGFuZGxlcihvcHRpb25zKSB7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIGRlbGV0ZSBfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXI7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB1bmRlZmluZWQ7XG5cdGZ1bmN0aW9uIGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyh1cGRhdGVNb2R1bGVJZCkge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG5cdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbiAoaWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGNoYWluOiBbaWRdLFxuXHRcdFx0XHRpZDogaWRcblx0XHRcdH07XG5cdFx0fSk7XG5cdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcblx0XHRcdHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcblx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlSXRlbS5pZDtcblx0XHRcdHZhciBjaGFpbiA9IHF1ZXVlSXRlbS5jaGFpbjtcblx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWRdO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhbW9kdWxlIHx8XG5cdFx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgJiYgIW1vZHVsZS5ob3QuX3NlbGZJbnZhbGlkYXRlZClcblx0XHRcdClcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuXHRcdFx0XHR2YXIgcGFyZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW3BhcmVudElkXTtcblx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcblx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuXHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG5cdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG5cdFx0XHRcdHF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG5cdFx0XHRcdFx0aWQ6IHBhcmVudElkXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG5cdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG5cdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcblx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGJbaV07XG5cdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG5cdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cblx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcblx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuXHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKG1vZHVsZSkge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgbW9kdWxlLmlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG5cdFx0KTtcblx0fTtcblxuXHRmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRcdHZhciBuZXdNb2R1bGVGYWN0b3J5ID0gY3VycmVudFVwZGF0ZVttb2R1bGVJZF07XG5cdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG5cdFx0XHR2YXIgcmVzdWx0ID0gbmV3TW9kdWxlRmFjdG9yeVxuXHRcdFx0XHQ/IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZClcblx0XHRcdFx0OiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG5cdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0XHR9O1xuXHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cblx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG5cdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuXHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG5cdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG5cdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG5cdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcblx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcblx0XHRcdH1cblx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0ZXJyb3I6IGFib3J0RXJyb3Jcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChkb0FwcGx5KSB7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gbmV3TW9kdWxlRmFjdG9yeTtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcblx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcblx0XHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG5cdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuXHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuXHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcblx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN1cnJlbnRVcGRhdGUgPSB1bmRlZmluZWQ7XG5cblx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuXHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG5cdGZvciAodmFyIGogPSAwOyBqIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG5cdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRpZiAoXG5cdFx0XHRtb2R1bGUgJiZcblx0XHRcdChtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQgfHwgbW9kdWxlLmhvdC5fbWFpbikgJiZcblx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcblx0XHRcdGFwcGxpZWRVcGRhdGVbb3V0ZGF0ZWRNb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZSAmJlxuXHRcdFx0Ly8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcblx0XHRcdCFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWRcblx0XHQpIHtcblx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcblx0XHRcdFx0bW9kdWxlOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRyZXF1aXJlOiBtb2R1bGUuaG90Ll9yZXF1aXJlU2VsZixcblx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcblxuXHRyZXR1cm4ge1xuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzLmZvckVhY2goZnVuY3Rpb24gKGNodW5rSWQpIHtcblx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdH0pO1xuXHRcdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSB1bmRlZmluZWQ7XG5cblx0XHRcdHZhciBpZHg7XG5cdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcblx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdHZhciBkYXRhID0ge307XG5cblx0XHRcdFx0Ly8gQ2FsbCBkaXNwb3NlIGhhbmRsZXJzXG5cdFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRkaXNwb3NlSGFuZGxlcnNbal0uY2FsbChudWxsLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWRdID0gZGF0YTtcblxuXHRcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuXHRcdFx0XHRtb2R1bGUuaG90LmFjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuXHRcdFx0XHRkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblxuXHRcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cblx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdHZhciBjaGlsZCA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuXHRcdFx0XHRcdGlmICghY2hpbGQpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG5cdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG5cdFx0XHRcdFx0XHRjaGlsZC5wYXJlbnRzLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuXHRcdFx0dmFyIGRlcGVuZGVuY3k7XG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0bW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdGlmIChtb2R1bGUpIHtcblx0XHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID1cblx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuXHRcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBtb2R1bGUuY2hpbGRyZW4uc3BsaWNlKGlkeCwgMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhcHBseTogZnVuY3Rpb24gKHJlcG9ydEVycm9yKSB7XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0Zm9yICh2YXIgbyA9IDA7IG8gPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBvKyspIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG5cdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGl0ZW0ucmVxdWlyZShtb2R1bGVJZCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycjEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIxKTtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdH1cblx0fTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgYXBwbHlIYW5kbGVycykge1xuXHRpZiAoIWN1cnJlbnRVcGRhdGUpIHtcblx0XHRjdXJyZW50VXBkYXRlID0ge307XG5cdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IFtdO1xuXHRcdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHR9XG5cdGlmICghX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcblx0fVxufTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uIChcblx0Y2h1bmtJZHMsXG5cdHJlbW92ZWRDaHVua3MsXG5cdHJlbW92ZWRNb2R1bGVzLFxuXHRwcm9taXNlcyxcblx0YXBwbHlIYW5kbGVycyxcblx0dXBkYXRlZE1vZHVsZXNMaXN0XG4pIHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcblx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSByZW1vdmVkQ2h1bmtzO1xuXHRjdXJyZW50VXBkYXRlID0gcmVtb3ZlZE1vZHVsZXMucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuXHRcdG9ialtrZXldID0gZmFsc2U7XG5cdFx0cmV0dXJuIG9iajtcblx0fSwge30pO1xuXHRjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuXHRjaHVua0lkcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0aWYgKFxuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdW5kZWZpbmVkXG5cdFx0KSB7XG5cdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpKTtcblx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gZmFsc2U7XG5cdFx0fVxuXHR9KTtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uIChjaHVua0lkLCBwcm9taXNlcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzICYmXG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlQ2h1bmtzLCBjaHVua0lkKSAmJlxuXHRcdFx0XHQhY3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXVxuXHRcdFx0KSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNID0gKCkgPT4ge1xuXHRpZiAodHlwZW9mIGZldGNoID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnQ6IG5lZWQgZmV0Y2ggQVBJXCIpO1xuXHRyZXR1cm4gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0aWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHJldHVybjsgLy8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuXHRcdGlmKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHVwZGF0ZSBtYW5pZmVzdCBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuXHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdH0pO1xufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcmVzdGF1cmFudF9hcHBzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3Jlc3RhdXJhbnRfYXBwc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2Fuc2ktaHRtbC1jb21tdW5pdHlfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lLTUzNzBkMlwiLFwiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2h0bWwtZW50aXRpZXNfbGliX25hbWVkLXJlZmVyZW5jZXNfanNcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19sYXp5c2l6ZXNfcGx1Z2luc19wYXJlbnQtZml0X2xzX3BhcmVudC1maXRfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZS04YWMwZDBcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19zdHlsZS1sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qcy1ub2RlX21vZHVsZS0zNTVmZTFcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc193ZWJwYWNrLWRldi1zZXJ2ZXJfY2xpZW50X3NvY2tldF9qcy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2Vydi1iN2IwZTlcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9wcm90b2NvbD13cyUzQSZob3N0bmFtZT0wLjAuMC4wJnBvcnQ9ODA4MCZwYXRobmFtZT0lMkZ3cyZsb2dnaW5nPWluZm8mb3ZlcmxheT0lN0IlMjJlcnJvcnMlMjIlM0F0cnVlJTJDJTIyd2FybmluZ3MlMjIlM0FmYWxzZSU3RCZyZWNvbm5lY3Q9MTAmaG90PXRydWUmbGl2ZS1yZWxvYWQ9dHJ1ZVwiKSkpXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfYW5zaS1odG1sLWNvbW11bml0eV9pbmRleF9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWUtNTM3MGQyXCIsXCJkZWZhdWx0VmVuZG9ycy1ub2RlX21vZHVsZXNfaHRtbC1lbnRpdGllc19saWJfbmFtZWQtcmVmZXJlbmNlc19qc1wiLFwiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2xhenlzaXplc19wbHVnaW5zX3BhcmVudC1maXRfbHNfcGFyZW50LWZpdF9qcy1ub2RlX21vZHVsZXNfcmVnZW5lLThhYzBkMFwiLFwiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX3N0eWxlLWxvYWRlcl9kaXN0X3J1bnRpbWVfaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnX2pzLW5vZGVfbW9kdWxlLTM1NWZlMVwiLFwiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX3dlYnBhY2stZGV2LXNlcnZlcl9jbGllbnRfc29ja2V0X2pzLW5vZGVfbW9kdWxlc193ZWJwYWNrLWRldi1zZXJ2LWI3YjBlOVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzXCIpKSlcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2Fuc2ktaHRtbC1jb21tdW5pdHlfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lLTUzNzBkMlwiLFwiZGVmYXVsdFZlbmRvcnMtbm9kZV9tb2R1bGVzX2h0bWwtZW50aXRpZXNfbGliX25hbWVkLXJlZmVyZW5jZXNfanNcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19sYXp5c2l6ZXNfcGx1Z2luc19wYXJlbnQtZml0X2xzX3BhcmVudC1maXRfanMtbm9kZV9tb2R1bGVzX3JlZ2VuZS04YWMwZDBcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc19zdHlsZS1sb2FkZXJfZGlzdF9ydW50aW1lX2luamVjdFN0eWxlc0ludG9TdHlsZVRhZ19qcy1ub2RlX21vZHVsZS0zNTVmZTFcIixcImRlZmF1bHRWZW5kb3JzLW5vZGVfbW9kdWxlc193ZWJwYWNrLWRldi1zZXJ2ZXJfY2xpZW50X3NvY2tldF9qcy1ub2RlX21vZHVsZXNfd2VicGFjay1kZXYtc2Vydi1iN2IwZTlcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9