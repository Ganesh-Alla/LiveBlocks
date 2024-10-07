"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-decode-numeric-character-reference";
exports.ids = ["vendor-chunks/micromark-util-decode-numeric-character-reference"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decodeNumericCharacterReference: () => (/* binding */ decodeNumericCharacterReference)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/codes.js */ \"(ssr)/./node_modules/micromark-util-symbol/codes.js\");\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"(ssr)/./node_modules/micromark-util-symbol/values.js\");\n\n\n\n/**\n * Turn the number (in string form as either hexa- or plain decimal) coming from\n * a numeric character reference into a character.\n *\n * Sort of like `String.fromCharCode(Number.parseInt(value, base))`, but makes\n * non-characters and control characters safe.\n *\n * @param {string} value\n *   Value to decode.\n * @param {number} base\n *   Numeric base.\n * @returns {string}\n *   Character.\n */\nfunction decodeNumericCharacterReference(value, base) {\n  const code = Number.parseInt(value, base)\n\n  if (\n    // C0 except for HT, LF, FF, CR, space.\n    code < micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.ht ||\n    code === micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.vt ||\n    (code > micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.cr && code < micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.space) ||\n    // Control character (DEL) of C0, and C1 controls.\n    (code > micromark_util_symbol_codes_js__WEBPACK_IMPORTED_MODULE_0__.codes.tilde && code < 160) ||\n    // Lone high surrogates and low surrogates.\n    (code > 55295 && code < 57344) ||\n    // Noncharacters.\n    (code > 64975 && code < 65008) ||\n    /* eslint-disable no-bitwise */\n    (code & 65535) === 65535 ||\n    (code & 65535) === 65534 ||\n    /* eslint-enable no-bitwise */\n    // Out of range\n    code > 1114111\n  ) {\n    return micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_1__.values.replacementCharacter\n  }\n\n  return String.fromCharCode(code)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBQ0U7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlFQUFLO0FBQ2hCLGFBQWEsaUVBQUs7QUFDbEIsWUFBWSxpRUFBSyxjQUFjLGlFQUFLO0FBQ3BDO0FBQ0EsWUFBWSxpRUFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtRUFBTTtBQUNqQjs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUtYWR2YW5jZWQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtZGVjb2RlLW51bWVyaWMtY2hhcmFjdGVyLXJlZmVyZW5jZS9kZXYvaW5kZXguanM/YmVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvZGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvY29kZXMuanMnXG5pbXBvcnQge3ZhbHVlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sL3ZhbHVlcy5qcydcblxuLyoqXG4gKiBUdXJuIHRoZSBudW1iZXIgKGluIHN0cmluZyBmb3JtIGFzIGVpdGhlciBoZXhhLSBvciBwbGFpbiBkZWNpbWFsKSBjb21pbmcgZnJvbVxuICogYSBudW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2UgaW50byBhIGNoYXJhY3Rlci5cbiAqXG4gKiBTb3J0IG9mIGxpa2UgYFN0cmluZy5mcm9tQ2hhckNvZGUoTnVtYmVyLnBhcnNlSW50KHZhbHVlLCBiYXNlKSlgLCBidXQgbWFrZXNcbiAqIG5vbi1jaGFyYWN0ZXJzIGFuZCBjb250cm9sIGNoYXJhY3RlcnMgc2FmZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgVmFsdWUgdG8gZGVjb2RlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJhc2VcbiAqICAgTnVtZXJpYyBiYXNlLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgQ2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlTnVtZXJpY0NoYXJhY3RlclJlZmVyZW5jZSh2YWx1ZSwgYmFzZSkge1xuICBjb25zdCBjb2RlID0gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCBiYXNlKVxuXG4gIGlmIChcbiAgICAvLyBDMCBleGNlcHQgZm9yIEhULCBMRiwgRkYsIENSLCBzcGFjZS5cbiAgICBjb2RlIDwgY29kZXMuaHQgfHxcbiAgICBjb2RlID09PSBjb2Rlcy52dCB8fFxuICAgIChjb2RlID4gY29kZXMuY3IgJiYgY29kZSA8IGNvZGVzLnNwYWNlKSB8fFxuICAgIC8vIENvbnRyb2wgY2hhcmFjdGVyIChERUwpIG9mIEMwLCBhbmQgQzEgY29udHJvbHMuXG4gICAgKGNvZGUgPiBjb2Rlcy50aWxkZSAmJiBjb2RlIDwgMTYwKSB8fFxuICAgIC8vIExvbmUgaGlnaCBzdXJyb2dhdGVzIGFuZCBsb3cgc3Vycm9nYXRlcy5cbiAgICAoY29kZSA+IDU1Mjk1ICYmIGNvZGUgPCA1NzM0NCkgfHxcbiAgICAvLyBOb25jaGFyYWN0ZXJzLlxuICAgIChjb2RlID4gNjQ5NzUgJiYgY29kZSA8IDY1MDA4KSB8fFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAoY29kZSAmIDY1NTM1KSA9PT0gNjU1MzUgfHxcbiAgICAoY29kZSAmIDY1NTM1KSA9PT0gNjU1MzQgfHxcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWJpdHdpc2UgKi9cbiAgICAvLyBPdXQgb2YgcmFuZ2VcbiAgICBjb2RlID4gMTExNDExMVxuICApIHtcbiAgICByZXR1cm4gdmFsdWVzLnJlcGxhY2VtZW50Q2hhcmFjdGVyXG4gIH1cblxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-decode-numeric-character-reference/dev/index.js\n");

/***/ })

};
;