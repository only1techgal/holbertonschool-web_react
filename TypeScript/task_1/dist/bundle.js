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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Create 'teacher' variable\nvar teacher1 = {\n    firstName: \"Francoise\",\n    lastName: \"Piere\",\n    fullTimeEmployee: true,\n    yearsOfExperience: 15,\n    location: \"Paris\",\n    contract: true, // Extra attribute\n};\n// Logs the 'teacher' variable\nconsole.log(teacher1);\n// Create director object\nvar director1 = {\n    firstName: \"Paul\",\n    lastName: \"Rooberts\",\n    location: \"Nashville\",\n    fullTimeEmployee: true,\n    numberOfReports: 60, // The required peroperty for Director\n};\n// Logs the director object\nconsole.log(director1);\n// Implement the printTeacher function based on the interface\nvar printTeacher = function (firstName, lastName) {\n    return \"\".concat(firstName[0], \". \").concat(lastName);\n};\nconsole.log(printTeacher(\"Francoise\", \"Piere\")); // Output: F. Piere\n\n\n//# sourceURL=webpack://typescript_dependencies/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;