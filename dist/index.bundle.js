/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitMealPlan": () => (/* binding */ submitMealPlan)
/* harmony export */ });
/* harmony import */ var _mealplanmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealplanmanager */ "./src/modules/mealplanmanager.js");


const submitMealPlan = (() => {
  const newMealPlanManager = new _mealplanmanager__WEBPACK_IMPORTED_MODULE_0__.MealPlanManager();
  const selectSubmitFormButton = document.querySelector("#submitFormButton");
  const date = document.querySelector("#date");
  const checkboxes = document.querySelectorAll(".checkbox");
  let mealArray = [];

  selectSubmitFormButton.addEventListener("click", (e) => {
    e.preventDefault();

    checkboxes.forEach((checkbox) => {
      if (checkbox.checked === true) {
        mealArray.push(checkbox.value);
      } else if (checkbox.checked === false) {
        mealArray.push("");
      }
    });

    newMealPlanManager.pushToArray(
      date.value,
      mealArray[0],
      mealArray[1],
      mealArray[2]
    );
    console.log(
      `${date.value} ${mealArray[0]} ${mealArray[1]} ${mealArray[2]}`
    );
    mealArray = [];
    console.log(newMealPlanManager.mealPlanArray);
  });
})();




/***/ }),

/***/ "./src/modules/mealplanmanager.js":
/*!****************************************!*\
  !*** ./src/modules/mealplanmanager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPlanManager": () => (/* binding */ MealPlanManager)
/* harmony export */ });
/* harmony import */ var _mealplans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealplans */ "./src/modules/mealplans.js");


class MealPlanManager {
  mealPlanArray = [];

  pushToArray(date, breakfast, lunch, dinner) {
    this.mealPlanArray.push(new _mealplans__WEBPACK_IMPORTED_MODULE_0__.MealPlan(date, breakfast, lunch, dinner));
  }
}




/***/ }),

/***/ "./src/modules/mealplans.js":
/*!**********************************!*\
  !*** ./src/modules/mealplans.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MealPlan": () => (/* binding */ MealPlan)
/* harmony export */ });
class MealPlan {
  constructor(date, breakfast, lunch, dinner) {
    this.date = date;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
  }
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvRDs7QUFFcEQ7QUFDQSxpQ0FBaUMsNkRBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFlBQVksRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWE7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENhOztBQUV2QztBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLGdEQUFRO0FBQ3hDO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7QUNWM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7OztVQ1JwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL21vZHVsZXMvbWVhbHBsYW5tYW5hZ2VyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvbW9kdWxlcy9tZWFscGxhbnMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVhbFBsYW5NYW5hZ2VyIH0gZnJvbSBcIi4vbWVhbHBsYW5tYW5hZ2VyXCI7XG5cbmNvbnN0IHN1Ym1pdE1lYWxQbGFuID0gKCgpID0+IHtcbiAgY29uc3QgbmV3TWVhbFBsYW5NYW5hZ2VyID0gbmV3IE1lYWxQbGFuTWFuYWdlcigpO1xuICBjb25zdCBzZWxlY3RTdWJtaXRGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRGb3JtQnV0dG9uXCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcbiAgbGV0IG1lYWxBcnJheSA9IFtdO1xuXG4gIHNlbGVjdFN1Ym1pdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgbWVhbEFycmF5LnB1c2goY2hlY2tib3gudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChjaGVja2JveC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBtZWFsQXJyYXkucHVzaChcIlwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG5ld01lYWxQbGFuTWFuYWdlci5wdXNoVG9BcnJheShcbiAgICAgIGRhdGUudmFsdWUsXG4gICAgICBtZWFsQXJyYXlbMF0sXG4gICAgICBtZWFsQXJyYXlbMV0sXG4gICAgICBtZWFsQXJyYXlbMl1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYCR7ZGF0ZS52YWx1ZX0gJHttZWFsQXJyYXlbMF19ICR7bWVhbEFycmF5WzFdfSAke21lYWxBcnJheVsyXX1gXG4gICAgKTtcbiAgICBtZWFsQXJyYXkgPSBbXTtcbiAgICBjb25zb2xlLmxvZyhuZXdNZWFsUGxhbk1hbmFnZXIubWVhbFBsYW5BcnJheSk7XG4gIH0pO1xufSkoKTtcblxuZXhwb3J0IHsgc3VibWl0TWVhbFBsYW4gfTtcbiIsImltcG9ydCB7IE1lYWxQbGFuIH0gZnJvbSBcIi4vbWVhbHBsYW5zXCI7XG5cbmNsYXNzIE1lYWxQbGFuTWFuYWdlciB7XG4gIG1lYWxQbGFuQXJyYXkgPSBbXTtcblxuICBwdXNoVG9BcnJheShkYXRlLCBicmVha2Zhc3QsIGx1bmNoLCBkaW5uZXIpIHtcbiAgICB0aGlzLm1lYWxQbGFuQXJyYXkucHVzaChuZXcgTWVhbFBsYW4oZGF0ZSwgYnJlYWtmYXN0LCBsdW5jaCwgZGlubmVyKSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgTWVhbFBsYW5NYW5hZ2VyIH07XG4iLCJjbGFzcyBNZWFsUGxhbiB7XG4gIGNvbnN0cnVjdG9yKGRhdGUsIGJyZWFrZmFzdCwgbHVuY2gsIGRpbm5lcikge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5icmVha2Zhc3QgPSBicmVha2Zhc3Q7XG4gICAgdGhpcy5sdW5jaCA9IGx1bmNoO1xuICAgIHRoaXMuZGlubmVyID0gZGlubmVyO1xuICB9XG59XG5leHBvcnQgeyBNZWFsUGxhbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL21vZHVsZXMvZG9tXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=