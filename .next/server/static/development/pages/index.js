module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cheerio */ \"cheerio\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/usestack/trungDev/project/Scrape/pages/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n // client side\n\nfunction Page({\n  data\n}) {\n  console.log(data);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, data.map((el, idx) => {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, el));\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page); // server side\n\nasync function getServerSideProps() {\n  const URL = 'https://www.freelancer.com/jobs/2/';\n  const resFromUrl = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(URL);\n  const $ = cheerio__WEBPACK_IMPORTED_MODULE_0___default.a.load(resFromUrl.data);\n  const data = []; // đống code để lấy dữ liệu\n\n  $('.JobSearchCard-list').each((i, el) => {\n    $(el).find('a.JobSearchCard-primary-heading-link').each((i, el) => data.push($(el).text()));\n  });\n  return {\n    props: {\n      data: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJQYWdlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlbCIsImlkeCIsImdldFNlcnZlclNpZGVQcm9wcyIsIlVSTCIsInJlc0Zyb21VcmwiLCJheGlvcyIsImdldCIsIiQiLCJjaGVlcmlvIiwibG9hZCIsImVhY2giLCJpIiwiZmluZCIsInB1c2giLCJ0ZXh0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUF3QjtBQUN0QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsSUFBSSxDQUFDRyxHQUFMLENBQVMsQ0FBQ0MsRUFBRCxFQUFLQyxHQUFMLEtBQWE7QUFDckIsV0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELEVBQUwsQ0FERixDQURGO0FBS0QsR0FOQSxDQURILENBREY7QUFXRDs7QUFFY0wsbUVBQWYsRSxDQUNBOztBQUNPLGVBQWVPLGtCQUFmLEdBQW9DO0FBQ3pDLFFBQU1DLEdBQUcsR0FBRyxvQ0FBWjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsQ0FBekI7QUFDQSxRQUFNSSxDQUFDLEdBQUdDLDhDQUFPLENBQUNDLElBQVIsQ0FBYUwsVUFBVSxDQUFDUixJQUF4QixDQUFWO0FBQ0EsUUFBTUEsSUFBSSxHQUFHLEVBQWIsQ0FKeUMsQ0FLekM7O0FBRUFXLEdBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxJQUF6QixDQUE4QixDQUFDQyxDQUFELEVBQUlYLEVBQUosS0FBVztBQUN2Q08sS0FBQyxDQUFDUCxFQUFELENBQUQsQ0FDR1ksSUFESCxDQUNRLHNDQURSLEVBRUdGLElBRkgsQ0FFUSxDQUFDQyxDQUFELEVBQUlYLEVBQUosS0FBV0osSUFBSSxDQUFDaUIsSUFBTCxDQUFVTixDQUFDLENBQUNQLEVBQUQsQ0FBRCxDQUFNYyxJQUFOLEVBQVYsQ0FGbkI7QUFHRCxHQUpEO0FBTUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTG5CLFVBQUksRUFBRUE7QUFERDtBQURGLEdBQVA7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vIGNsaWVudCBzaWRlXG5mdW5jdGlvbiBQYWdlKHsgZGF0YSB9KSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2RhdGEubWFwKChlbCwgaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT57ZWx9PC9oMT5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuLy8gc2VydmVyIHNpZGVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IFVSTCA9ICdodHRwczovL3d3dy5mcmVlbGFuY2VyLmNvbS9qb2JzLzIvJ1xuICBjb25zdCByZXNGcm9tVXJsID0gYXdhaXQgYXhpb3MuZ2V0KFVSTClcbiAgY29uc3QgJCA9IGNoZWVyaW8ubG9hZChyZXNGcm9tVXJsLmRhdGEpXG4gIGNvbnN0IGRhdGEgPSBbXVxuICAvLyDEkeG7kW5nIGNvZGUgxJHhu4MgbOG6pXkgZOG7ryBsaeG7h3VcblxuICAkKCcuSm9iU2VhcmNoQ2FyZC1saXN0JykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAkKGVsKVxuICAgICAgLmZpbmQoJ2EuSm9iU2VhcmNoQ2FyZC1wcmltYXJ5LWhlYWRpbmctbGluaycpXG4gICAgICAuZWFjaCgoaSwgZWwpID0+IGRhdGEucHVzaCgkKGVsKS50ZXh0KCkpKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/usestack/trungDev/project/Scrape/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGVlcmlvXCI/MTRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjaGVlcmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cheerio\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });