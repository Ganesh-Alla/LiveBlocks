"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-parse5";
exports.ids = ["vendor-chunks/hast-util-from-parse5"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-from-parse5/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/hast-util-from-parse5/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromParse5: () => (/* binding */ fromParse5)\n/* harmony export */ });\n/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hastscript */ \"(ssr)/./node_modules/hastscript/lib/svg.js\");\n/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hastscript */ \"(ssr)/./node_modules/hastscript/lib/html.js\");\n/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-information */ \"(ssr)/./node_modules/property-information/index.js\");\n/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! property-information */ \"(ssr)/./node_modules/property-information/lib/find.js\");\n/* harmony import */ var vfile_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vfile-location */ \"(ssr)/./node_modules/vfile-location/lib/index.js\");\n/* harmony import */ var web_namespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web-namespaces */ \"(ssr)/./node_modules/web-namespaces/index.js\");\n/**\n * @typedef {import('vfile').VFile} VFile\n * @typedef {import('property-information').Schema} Schema\n * @typedef {import('unist').Position} Position\n * @typedef {import('unist').Point} Point\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast').Content} Content\n * @typedef {import('parse5').DefaultTreeAdapterMap} DefaultTreeAdapterMap\n * @typedef {import('parse5').Token.ElementLocation} P5ElementLocation\n * @typedef {import('parse5').Token.Location} P5Location\n */\n\n/**\n * @typedef {Content | Root} Node\n * @typedef {DefaultTreeAdapterMap['document']} P5Document\n * @typedef {DefaultTreeAdapterMap['documentFragment']} P5DocumentFragment\n * @typedef {DefaultTreeAdapterMap['documentType']} P5DocumentType\n * @typedef {DefaultTreeAdapterMap['commentNode']} P5Comment\n * @typedef {DefaultTreeAdapterMap['textNode']} P5Text\n * @typedef {DefaultTreeAdapterMap['element']} P5Element\n * @typedef {DefaultTreeAdapterMap['node']} P5Node\n * @typedef {DefaultTreeAdapterMap['template']} P5Template\n *\n * @typedef {'html' | 'svg'} Space\n *   Namespace.\n *\n * @typedef Options\n *   Configuration.\n * @property {Space | null | undefined} [space='html']\n *   Which space the document is in.\n *\n *   When an `<svg>` element is found in the HTML space, this package already\n *   automatically switches to and from the SVG space when entering and exiting\n *   it.\n * @property {VFile | null | undefined} [file]\n *   File used to add positional info to nodes.\n *\n *   If given, the file should represent the original HTML source.\n * @property {boolean} [verbose=false]\n *   Whether to add extra positional info about starting tags, closing tags,\n *   and attributes to elements.\n *\n *   > 👉 **Note**: only used when `file` is given.\n *\n * @typedef State\n *   Info passed around about the current state.\n * @property {Schema} schema\n *   Current schema.\n * @property {VFile | undefined} file\n *   Corresponding file.\n * @property {boolean | undefined} verbose\n *   Add extra positional info.\n * @property {boolean} location\n *   Whether location info was found.\n */\n\n\n\n\n\n\nconst own = {}.hasOwnProperty\n/** @type {unknown} */\n// type-coverage:ignore-next-line\nconst proto = Object.prototype\n\n/**\n * Transform a `parse5` AST to hast.\n *\n * @param {P5Node} tree\n *   `parse5` tree to transform.\n * @param {Options | VFile | null | undefined} [options]\n *   Configuration.\n * @returns {Node}\n *   hast tree.\n */\nfunction fromParse5(tree, options) {\n  const options_ = options || {}\n  /** @type {Options} */\n  let settings\n  /** @type {VFile | undefined} */\n  let file\n\n  if (isFile(options_)) {\n    file = options_\n    settings = {}\n  } else {\n    file = options_.file || undefined\n    settings = options_\n  }\n\n  return one(\n    {\n      schema: settings.space === 'svg' ? property_information__WEBPACK_IMPORTED_MODULE_0__.svg : property_information__WEBPACK_IMPORTED_MODULE_0__.html,\n      file,\n      verbose: settings.verbose,\n      location: false\n    },\n    tree\n  )\n}\n\n/**\n * Transform a node.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {P5Node} node\n *   p5 node.\n * @returns {Node}\n *   hast node.\n */\nfunction one(state, node) {\n  /** @type {Node} */\n  let result\n\n  switch (node.nodeName) {\n    case '#comment': {\n      const reference = /** @type {P5Comment} */ (node)\n      result = {type: 'comment', value: reference.data}\n      patch(state, reference, result)\n      return result\n    }\n\n    case '#document':\n    case '#document-fragment': {\n      const reference = /** @type {P5Document | P5DocumentFragment} */ (node)\n      const quirksMode =\n        'mode' in reference\n          ? reference.mode === 'quirks' || reference.mode === 'limited-quirks'\n          : false\n\n      result = {\n        type: 'root',\n        children: all(state, node.childNodes),\n        data: {quirksMode}\n      }\n\n      if (state.file && state.location) {\n        const doc = String(state.file)\n        const loc = (0,vfile_location__WEBPACK_IMPORTED_MODULE_1__.location)(doc)\n        const start = loc.toPoint(0)\n        const end = loc.toPoint(doc.length)\n        // @ts-expect-error: always defined as we give valid input.\n        result.position = {start, end}\n      }\n\n      return result\n    }\n\n    case '#documentType': {\n      const reference = /** @type {P5DocumentType} */ (node)\n      // @ts-expect-error Types are out of date.\n      result = {type: 'doctype'}\n      patch(state, reference, result)\n      return result\n    }\n\n    case '#text': {\n      const reference = /** @type {P5Text} */ (node)\n      result = {type: 'text', value: reference.value}\n      patch(state, reference, result)\n      return result\n    }\n\n    // Element.\n    default: {\n      const reference = /** @type {P5Element} */ (node)\n      result = element(state, reference)\n      return result\n    }\n  }\n}\n\n/**\n * Transform children.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {Array<P5Node>} nodes\n *   Nodes.\n * @returns {Array<Content>}\n *   hast nodes.\n */\nfunction all(state, nodes) {\n  let index = -1\n  /** @type {Array<Content>} */\n  const result = []\n\n  while (++index < nodes.length) {\n    // @ts-expect-error Assume no roots in `nodes`.\n    result[index] = one(state, nodes[index])\n  }\n\n  return result\n}\n\n/**\n * Transform an element.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {P5Element} node\n *   `parse5` node to transform.\n * @returns {Element}\n *   hast node.\n */\nfunction element(state, node) {\n  const schema = state.schema\n\n  state.schema = node.namespaceURI === web_namespaces__WEBPACK_IMPORTED_MODULE_2__.webNamespaces.svg ? property_information__WEBPACK_IMPORTED_MODULE_0__.svg : property_information__WEBPACK_IMPORTED_MODULE_0__.html\n\n  // Props.\n  let index = -1\n  /** @type {Record<string, string>} */\n  const props = {}\n\n  while (++index < node.attrs.length) {\n    const attribute = node.attrs[index]\n    const name =\n      (attribute.prefix ? attribute.prefix + ':' : '') + attribute.name\n    if (!own.call(proto, name)) {\n      props[name] = attribute.value\n    }\n  }\n\n  // Build.\n  const fn = state.schema.space === 'svg' ? hastscript__WEBPACK_IMPORTED_MODULE_3__.s : hastscript__WEBPACK_IMPORTED_MODULE_4__.h\n  const result = fn(node.tagName, props, all(state, node.childNodes))\n  patch(state, node, result)\n\n  // Switch content.\n  if (result.tagName === 'template') {\n    const reference = /** @type {P5Template} */ (node)\n    const pos = reference.sourceCodeLocation\n    const startTag = pos && pos.startTag && position(pos.startTag)\n    const endTag = pos && pos.endTag && position(pos.endTag)\n\n    /** @type {Root} */\n    // @ts-expect-error Types are wrong.\n    const content = one(state, reference.content)\n\n    if (startTag && endTag && state.file) {\n      content.position = {start: startTag.end, end: endTag.start}\n    }\n\n    result.content = content\n  }\n\n  state.schema = schema\n\n  return result\n}\n\n/**\n * Patch positional info from `from` onto `to`.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {P5Node} from\n *   p5 node.\n * @param {Node} to\n *   hast node.\n * @returns {void}\n *   Nothing.\n */\nfunction patch(state, from, to) {\n  if ('sourceCodeLocation' in from && from.sourceCodeLocation && state.file) {\n    const position = createLocation(state, to, from.sourceCodeLocation)\n\n    if (position) {\n      state.location = true\n      to.position = position\n    }\n  }\n}\n\n/**\n * Create clean positional information.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {Node} node\n *   hast node.\n * @param {P5ElementLocation} location\n *   p5 location info.\n * @returns {Position | undefined}\n *   Position, or nothing.\n */\nfunction createLocation(state, node, location) {\n  const result = position(location)\n\n  if (node.type === 'element') {\n    const tail = node.children[node.children.length - 1]\n\n    // Bug for unclosed with children.\n    // See: <https://github.com/inikulin/parse5/issues/109>.\n    if (\n      result &&\n      !location.endTag &&\n      tail &&\n      tail.position &&\n      tail.position.end\n    ) {\n      result.end = Object.assign({}, tail.position.end)\n    }\n\n    if (state.verbose) {\n      /** @type {Record<string, Position | undefined>} */\n      const props = {}\n      /** @type {string} */\n      let key\n\n      if (location.attrs) {\n        for (key in location.attrs) {\n          if (own.call(location.attrs, key)) {\n            props[(0,property_information__WEBPACK_IMPORTED_MODULE_5__.find)(state.schema, key).property] = position(\n              location.attrs[key]\n            )\n          }\n        }\n      }\n\n      node.data = {\n        position: {\n          // @ts-expect-error: assume not `undefined`.\n          opening: position(location.startTag),\n          closing: location.endTag ? position(location.endTag) : null,\n          properties: props\n        }\n      }\n    }\n  }\n\n  return result\n}\n\n/**\n * Turn a p5 location into a position.\n *\n * @param {P5Location} loc\n *   Location.\n * @returns {Position | undefined}\n *   Position or nothing.\n */\nfunction position(loc) {\n  const start = point({\n    line: loc.startLine,\n    column: loc.startCol,\n    offset: loc.startOffset\n  })\n  const end = point({\n    line: loc.endLine,\n    column: loc.endCol,\n    offset: loc.endOffset\n  })\n  // @ts-expect-error `undefined` is fine.\n  return start || end ? {start, end} : undefined\n}\n\n/**\n * Filter out invalid points.\n *\n * @param {Point} point\n *   Point with potentially `undefined` values.\n * @returns {Point | undefined}\n *   Point or nothing.\n */\nfunction point(point) {\n  return point.line && point.column ? point : undefined\n}\n\n/**\n * Check if something is a file.\n *\n * @param {VFile | Options} value\n *   File or options.\n * @returns {value is VFile}\n *   Whether `value` is a file.\n */\nfunction isFile(value) {\n  return 'messages' in value\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20tcGFyc2U1L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHVDQUF1QztBQUNwRCxhQUFhLDBCQUEwQjtBQUN2QyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLGlDQUFpQztBQUM5Qzs7QUFFQTtBQUNBLGFBQWEsZ0JBQWdCO0FBQzdCLGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsdUNBQXVDO0FBQ3BELGFBQWEsc0NBQXNDO0FBQ25ELGFBQWEsbUNBQW1DO0FBQ2hELGFBQWEsa0NBQWtDO0FBQy9DLGFBQWEsK0JBQStCO0FBQzVDLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0EsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQkFBMEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxtQkFBbUI7QUFDakM7QUFDQSxjQUFjLHFCQUFxQjtBQUNuQztBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUUrQjtBQUNxQjtBQUNiO0FBQ0s7O0FBRTVDLGNBQWM7QUFDZCxXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLG9DQUFvQztBQUMvQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBLGFB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QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BsaXZlYmxvY2tzLWV4YW1wbGVzL25leHRqcy15anMtYmxvY2tub3RlLWFkdmFuY2VkLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1mcm9tLXBhcnNlNS9saWIvaW5kZXguanM/OTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3ZmaWxlJykuVkZpbGV9IFZGaWxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdwcm9wZXJ0eS1pbmZvcm1hdGlvbicpLlNjaGVtYX0gU2NoZW1hXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBvc2l0aW9ufSBQb3NpdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb2ludH0gUG9pbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5FbGVtZW50fSBFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkNvbnRlbnR9IENvbnRlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3BhcnNlNScpLkRlZmF1bHRUcmVlQWRhcHRlck1hcH0gRGVmYXVsdFRyZWVBZGFwdGVyTWFwXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdwYXJzZTUnKS5Ub2tlbi5FbGVtZW50TG9jYXRpb259IFA1RWxlbWVudExvY2F0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdwYXJzZTUnKS5Ub2tlbi5Mb2NhdGlvbn0gUDVMb2NhdGlvblxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0NvbnRlbnQgfCBSb290fSBOb2RlXG4gKiBAdHlwZWRlZiB7RGVmYXVsdFRyZWVBZGFwdGVyTWFwWydkb2N1bWVudCddfSBQNURvY3VtZW50XG4gKiBAdHlwZWRlZiB7RGVmYXVsdFRyZWVBZGFwdGVyTWFwWydkb2N1bWVudEZyYWdtZW50J119IFA1RG9jdW1lbnRGcmFnbWVudFxuICogQHR5cGVkZWYge0RlZmF1bHRUcmVlQWRhcHRlck1hcFsnZG9jdW1lbnRUeXBlJ119IFA1RG9jdW1lbnRUeXBlXG4gKiBAdHlwZWRlZiB7RGVmYXVsdFRyZWVBZGFwdGVyTWFwWydjb21tZW50Tm9kZSddfSBQNUNvbW1lbnRcbiAqIEB0eXBlZGVmIHtEZWZhdWx0VHJlZUFkYXB0ZXJNYXBbJ3RleHROb2RlJ119IFA1VGV4dFxuICogQHR5cGVkZWYge0RlZmF1bHRUcmVlQWRhcHRlck1hcFsnZWxlbWVudCddfSBQNUVsZW1lbnRcbiAqIEB0eXBlZGVmIHtEZWZhdWx0VHJlZUFkYXB0ZXJNYXBbJ25vZGUnXX0gUDVOb2RlXG4gKiBAdHlwZWRlZiB7RGVmYXVsdFRyZWVBZGFwdGVyTWFwWyd0ZW1wbGF0ZSddfSBQNVRlbXBsYXRlXG4gKlxuICogQHR5cGVkZWYgeydodG1sJyB8ICdzdmcnfSBTcGFjZVxuICogICBOYW1lc3BhY2UuXG4gKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtTcGFjZSB8IG51bGwgfCB1bmRlZmluZWR9IFtzcGFjZT0naHRtbCddXG4gKiAgIFdoaWNoIHNwYWNlIHRoZSBkb2N1bWVudCBpcyBpbi5cbiAqXG4gKiAgIFdoZW4gYW4gYDxzdmc+YCBlbGVtZW50IGlzIGZvdW5kIGluIHRoZSBIVE1MIHNwYWNlLCB0aGlzIHBhY2thZ2UgYWxyZWFkeVxuICogICBhdXRvbWF0aWNhbGx5IHN3aXRjaGVzIHRvIGFuZCBmcm9tIHRoZSBTVkcgc3BhY2Ugd2hlbiBlbnRlcmluZyBhbmQgZXhpdGluZ1xuICogICBpdC5cbiAqIEBwcm9wZXJ0eSB7VkZpbGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbZmlsZV1cbiAqICAgRmlsZSB1c2VkIHRvIGFkZCBwb3NpdGlvbmFsIGluZm8gdG8gbm9kZXMuXG4gKlxuICogICBJZiBnaXZlbiwgdGhlIGZpbGUgc2hvdWxkIHJlcHJlc2VudCB0aGUgb3JpZ2luYWwgSFRNTCBzb3VyY2UuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IFt2ZXJib3NlPWZhbHNlXVxuICogICBXaGV0aGVyIHRvIGFkZCBleHRyYSBwb3NpdGlvbmFsIGluZm8gYWJvdXQgc3RhcnRpbmcgdGFncywgY2xvc2luZyB0YWdzLFxuICogICBhbmQgYXR0cmlidXRlcyB0byBlbGVtZW50cy5cbiAqXG4gKiAgID4g8J+RiSAqKk5vdGUqKjogb25seSB1c2VkIHdoZW4gYGZpbGVgIGlzIGdpdmVuLlxuICpcbiAqIEB0eXBlZGVmIFN0YXRlXG4gKiAgIEluZm8gcGFzc2VkIGFyb3VuZCBhYm91dCB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBwcm9wZXJ0eSB7U2NoZW1hfSBzY2hlbWFcbiAqICAgQ3VycmVudCBzY2hlbWEuXG4gKiBAcHJvcGVydHkge1ZGaWxlIHwgdW5kZWZpbmVkfSBmaWxlXG4gKiAgIENvcnJlc3BvbmRpbmcgZmlsZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IHVuZGVmaW5lZH0gdmVyYm9zZVxuICogICBBZGQgZXh0cmEgcG9zaXRpb25hbCBpbmZvLlxuICogQHByb3BlcnR5IHtib29sZWFufSBsb2NhdGlvblxuICogICBXaGV0aGVyIGxvY2F0aW9uIGluZm8gd2FzIGZvdW5kLlxuICovXG5cbmltcG9ydCB7aCwgc30gZnJvbSAnaGFzdHNjcmlwdCdcbmltcG9ydCB7aHRtbCwgc3ZnLCBmaW5kfSBmcm9tICdwcm9wZXJ0eS1pbmZvcm1hdGlvbidcbmltcG9ydCB7bG9jYXRpb259IGZyb20gJ3ZmaWxlLWxvY2F0aW9uJ1xuaW1wb3J0IHt3ZWJOYW1lc3BhY2VzfSBmcm9tICd3ZWItbmFtZXNwYWNlcydcblxuY29uc3Qgb3duID0ge30uaGFzT3duUHJvcGVydHlcbi8qKiBAdHlwZSB7dW5rbm93bn0gKi9cbi8vIHR5cGUtY292ZXJhZ2U6aWdub3JlLW5leHQtbGluZVxuY29uc3QgcHJvdG8gPSBPYmplY3QucHJvdG90eXBlXG5cbi8qKlxuICogVHJhbnNmb3JtIGEgYHBhcnNlNWAgQVNUIHRvIGhhc3QuXG4gKlxuICogQHBhcmFtIHtQNU5vZGV9IHRyZWVcbiAqICAgYHBhcnNlNWAgdHJlZSB0byB0cmFuc2Zvcm0uXG4gKiBAcGFyYW0ge09wdGlvbnMgfCBWRmlsZSB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge05vZGV9XG4gKiAgIGhhc3QgdHJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21QYXJzZTUodHJlZSwgb3B0aW9ucykge1xuICBjb25zdCBvcHRpb25zXyA9IG9wdGlvbnMgfHwge31cbiAgLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuICBsZXQgc2V0dGluZ3NcbiAgLyoqIEB0eXBlIHtWRmlsZSB8IHVuZGVmaW5lZH0gKi9cbiAgbGV0IGZpbGVcblxuICBpZiAoaXNGaWxlKG9wdGlvbnNfKSkge1xuICAgIGZpbGUgPSBvcHRpb25zX1xuICAgIHNldHRpbmdzID0ge31cbiAgfSBlbHNlIHtcbiAgICBmaWxlID0gb3B0aW9uc18uZmlsZSB8fCB1bmRlZmluZWRcbiAgICBzZXR0aW5ncyA9IG9wdGlvbnNfXG4gIH1cblxuICByZXR1cm4gb25lKFxuICAgIHtcbiAgICAgIHNjaGVtYTogc2V0dGluZ3Muc3BhY2UgPT09ICdzdmcnID8gc3ZnIDogaHRtbCxcbiAgICAgIGZpbGUsXG4gICAgICB2ZXJib3NlOiBzZXR0aW5ncy52ZXJib3NlLFxuICAgICAgbG9jYXRpb246IGZhbHNlXG4gICAgfSxcbiAgICB0cmVlXG4gIClcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlXG4gKiAgIEluZm8gcGFzc2VkIGFyb3VuZCBhYm91dCB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7UDVOb2RlfSBub2RlXG4gKiAgIHA1IG5vZGUuXG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqICAgaGFzdCBub2RlLlxuICovXG5mdW5jdGlvbiBvbmUoc3RhdGUsIG5vZGUpIHtcbiAgLyoqIEB0eXBlIHtOb2RlfSAqL1xuICBsZXQgcmVzdWx0XG5cbiAgc3dpdGNoIChub2RlLm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnI2NvbW1lbnQnOiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1Q29tbWVudH0gKi8gKG5vZGUpXG4gICAgICByZXN1bHQgPSB7dHlwZTogJ2NvbW1lbnQnLCB2YWx1ZTogcmVmZXJlbmNlLmRhdGF9XG4gICAgICBwYXRjaChzdGF0ZSwgcmVmZXJlbmNlLCByZXN1bHQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICBjYXNlICcjZG9jdW1lbnQtZnJhZ21lbnQnOiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1RG9jdW1lbnQgfCBQNURvY3VtZW50RnJhZ21lbnR9ICovIChub2RlKVxuICAgICAgY29uc3QgcXVpcmtzTW9kZSA9XG4gICAgICAgICdtb2RlJyBpbiByZWZlcmVuY2VcbiAgICAgICAgICA/IHJlZmVyZW5jZS5tb2RlID09PSAncXVpcmtzJyB8fCByZWZlcmVuY2UubW9kZSA9PT0gJ2xpbWl0ZWQtcXVpcmtzJ1xuICAgICAgICAgIDogZmFsc2VcblxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiAncm9vdCcsXG4gICAgICAgIGNoaWxkcmVuOiBhbGwoc3RhdGUsIG5vZGUuY2hpbGROb2RlcyksXG4gICAgICAgIGRhdGE6IHtxdWlya3NNb2RlfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuZmlsZSAmJiBzdGF0ZS5sb2NhdGlvbikge1xuICAgICAgICBjb25zdCBkb2MgPSBTdHJpbmcoc3RhdGUuZmlsZSlcbiAgICAgICAgY29uc3QgbG9jID0gbG9jYXRpb24oZG9jKVxuICAgICAgICBjb25zdCBzdGFydCA9IGxvYy50b1BvaW50KDApXG4gICAgICAgIGNvbnN0IGVuZCA9IGxvYy50b1BvaW50KGRvYy5sZW5ndGgpXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGFsd2F5cyBkZWZpbmVkIGFzIHdlIGdpdmUgdmFsaWQgaW5wdXQuXG4gICAgICAgIHJlc3VsdC5wb3NpdGlvbiA9IHtzdGFydCwgZW5kfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY2FzZSAnI2RvY3VtZW50VHlwZSc6IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IC8qKiBAdHlwZSB7UDVEb2N1bWVudFR5cGV9ICovIChub2RlKVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBUeXBlcyBhcmUgb3V0IG9mIGRhdGUuXG4gICAgICByZXN1bHQgPSB7dHlwZTogJ2RvY3R5cGUnfVxuICAgICAgcGF0Y2goc3RhdGUsIHJlZmVyZW5jZSwgcmVzdWx0KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGNhc2UgJyN0ZXh0Jzoge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gLyoqIEB0eXBlIHtQNVRleHR9ICovIChub2RlKVxuICAgICAgcmVzdWx0ID0ge3R5cGU6ICd0ZXh0JywgdmFsdWU6IHJlZmVyZW5jZS52YWx1ZX1cbiAgICAgIHBhdGNoKHN0YXRlLCByZWZlcmVuY2UsIHJlc3VsdClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBFbGVtZW50LlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IC8qKiBAdHlwZSB7UDVFbGVtZW50fSAqLyAobm9kZSlcbiAgICAgIHJlc3VsdCA9IGVsZW1lbnQoc3RhdGUsIHJlZmVyZW5jZSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGVcbiAqICAgSW5mbyBwYXNzZWQgYXJvdW5kIGFib3V0IHRoZSBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHtBcnJheTxQNU5vZGU+fSBub2Rlc1xuICogICBOb2Rlcy5cbiAqIEByZXR1cm5zIHtBcnJheTxDb250ZW50Pn1cbiAqICAgaGFzdCBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gYWxsKHN0YXRlLCBub2Rlcykge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5PENvbnRlbnQ+fSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbm9kZXMubGVuZ3RoKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciBBc3N1bWUgbm8gcm9vdHMgaW4gYG5vZGVzYC5cbiAgICByZXN1bHRbaW5kZXhdID0gb25lKHN0YXRlLCBub2Rlc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGVcbiAqICAgSW5mbyBwYXNzZWQgYXJvdW5kIGFib3V0IHRoZSBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHtQNUVsZW1lbnR9IG5vZGVcbiAqICAgYHBhcnNlNWAgbm9kZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RWxlbWVudH1cbiAqICAgaGFzdCBub2RlLlxuICovXG5mdW5jdGlvbiBlbGVtZW50KHN0YXRlLCBub2RlKSB7XG4gIGNvbnN0IHNjaGVtYSA9IHN0YXRlLnNjaGVtYVxuXG4gIHN0YXRlLnNjaGVtYSA9IG5vZGUubmFtZXNwYWNlVVJJID09PSB3ZWJOYW1lc3BhY2VzLnN2ZyA/IHN2ZyA6IGh0bWxcblxuICAvLyBQcm9wcy5cbiAgbGV0IGluZGV4ID0gLTFcbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICBjb25zdCBwcm9wcyA9IHt9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBub2RlLmF0dHJzLmxlbmd0aCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cnNbaW5kZXhdXG4gICAgY29uc3QgbmFtZSA9XG4gICAgICAoYXR0cmlidXRlLnByZWZpeCA/IGF0dHJpYnV0ZS5wcmVmaXggKyAnOicgOiAnJykgKyBhdHRyaWJ1dGUubmFtZVxuICAgIGlmICghb3duLmNhbGwocHJvdG8sIG5hbWUpKSB7XG4gICAgICBwcm9wc1tuYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIC8vIEJ1aWxkLlxuICBjb25zdCBmbiA9IHN0YXRlLnNjaGVtYS5zcGFjZSA9PT0gJ3N2ZycgPyBzIDogaFxuICBjb25zdCByZXN1bHQgPSBmbihub2RlLnRhZ05hbWUsIHByb3BzLCBhbGwoc3RhdGUsIG5vZGUuY2hpbGROb2RlcykpXG4gIHBhdGNoKHN0YXRlLCBub2RlLCByZXN1bHQpXG5cbiAgLy8gU3dpdGNoIGNvbnRlbnQuXG4gIGlmIChyZXN1bHQudGFnTmFtZSA9PT0gJ3RlbXBsYXRlJykge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IC8qKiBAdHlwZSB7UDVUZW1wbGF0ZX0gKi8gKG5vZGUpXG4gICAgY29uc3QgcG9zID0gcmVmZXJlbmNlLnNvdXJjZUNvZGVMb2NhdGlvblxuICAgIGNvbnN0IHN0YXJ0VGFnID0gcG9zICYmIHBvcy5zdGFydFRhZyAmJiBwb3NpdGlvbihwb3Muc3RhcnRUYWcpXG4gICAgY29uc3QgZW5kVGFnID0gcG9zICYmIHBvcy5lbmRUYWcgJiYgcG9zaXRpb24ocG9zLmVuZFRhZylcblxuICAgIC8qKiBAdHlwZSB7Um9vdH0gKi9cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGVzIGFyZSB3cm9uZy5cbiAgICBjb25zdCBjb250ZW50ID0gb25lKHN0YXRlLCByZWZlcmVuY2UuY29udGVudClcblxuICAgIGlmIChzdGFydFRhZyAmJiBlbmRUYWcgJiYgc3RhdGUuZmlsZSkge1xuICAgICAgY29udGVudC5wb3NpdGlvbiA9IHtzdGFydDogc3RhcnRUYWcuZW5kLCBlbmQ6IGVuZFRhZy5zdGFydH1cbiAgICB9XG5cbiAgICByZXN1bHQuY29udGVudCA9IGNvbnRlbnRcbiAgfVxuXG4gIHN0YXRlLnNjaGVtYSA9IHNjaGVtYVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBQYXRjaCBwb3NpdGlvbmFsIGluZm8gZnJvbSBgZnJvbWAgb250byBgdG9gLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlXG4gKiAgIEluZm8gcGFzc2VkIGFyb3VuZCBhYm91dCB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7UDVOb2RlfSBmcm9tXG4gKiAgIHA1IG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IHRvXG4gKiAgIGhhc3Qgbm9kZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICogICBOb3RoaW5nLlxuICovXG5mdW5jdGlvbiBwYXRjaChzdGF0ZSwgZnJvbSwgdG8pIHtcbiAgaWYgKCdzb3VyY2VDb2RlTG9jYXRpb24nIGluIGZyb20gJiYgZnJvbS5zb3VyY2VDb2RlTG9jYXRpb24gJiYgc3RhdGUuZmlsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhdGUsIHRvLCBmcm9tLnNvdXJjZUNvZGVMb2NhdGlvbilcblxuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgc3RhdGUubG9jYXRpb24gPSB0cnVlXG4gICAgICB0by5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGNsZWFuIHBvc2l0aW9uYWwgaW5mb3JtYXRpb24uXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGVcbiAqICAgSW5mbyBwYXNzZWQgYXJvdW5kIGFib3V0IHRoZSBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiAgIGhhc3Qgbm9kZS5cbiAqIEBwYXJhbSB7UDVFbGVtZW50TG9jYXRpb259IGxvY2F0aW9uXG4gKiAgIHA1IGxvY2F0aW9uIGluZm8uXG4gKiBAcmV0dXJucyB7UG9zaXRpb24gfCB1bmRlZmluZWR9XG4gKiAgIFBvc2l0aW9uLCBvciBub3RoaW5nLlxuICovXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihzdGF0ZSwgbm9kZSwgbG9jYXRpb24pIHtcbiAgY29uc3QgcmVzdWx0ID0gcG9zaXRpb24obG9jYXRpb24pXG5cbiAgaWYgKG5vZGUudHlwZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgY29uc3QgdGFpbCA9IG5vZGUuY2hpbGRyZW5bbm9kZS5jaGlsZHJlbi5sZW5ndGggLSAxXVxuXG4gICAgLy8gQnVnIGZvciB1bmNsb3NlZCB3aXRoIGNoaWxkcmVuLlxuICAgIC8vIFNlZTogPGh0dHBzOi8vZ2l0aHViLmNvbS9pbmlrdWxpbi9wYXJzZTUvaXNzdWVzLzEwOT4uXG4gICAgaWYgKFxuICAgICAgcmVzdWx0ICYmXG4gICAgICAhbG9jYXRpb24uZW5kVGFnICYmXG4gICAgICB0YWlsICYmXG4gICAgICB0YWlsLnBvc2l0aW9uICYmXG4gICAgICB0YWlsLnBvc2l0aW9uLmVuZFxuICAgICkge1xuICAgICAgcmVzdWx0LmVuZCA9IE9iamVjdC5hc3NpZ24oe30sIHRhaWwucG9zaXRpb24uZW5kKVxuICAgIH1cblxuICAgIGlmIChzdGF0ZS52ZXJib3NlKSB7XG4gICAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFBvc2l0aW9uIHwgdW5kZWZpbmVkPn0gKi9cbiAgICAgIGNvbnN0IHByb3BzID0ge31cbiAgICAgIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICAgICAgbGV0IGtleVxuXG4gICAgICBpZiAobG9jYXRpb24uYXR0cnMpIHtcbiAgICAgICAgZm9yIChrZXkgaW4gbG9jYXRpb24uYXR0cnMpIHtcbiAgICAgICAgICBpZiAob3duLmNhbGwobG9jYXRpb24uYXR0cnMsIGtleSkpIHtcbiAgICAgICAgICAgIHByb3BzW2ZpbmQoc3RhdGUuc2NoZW1hLCBrZXkpLnByb3BlcnR5XSA9IHBvc2l0aW9uKFxuICAgICAgICAgICAgICBsb2NhdGlvbi5hdHRyc1trZXldXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUuZGF0YSA9IHtcbiAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBhc3N1bWUgbm90IGB1bmRlZmluZWRgLlxuICAgICAgICAgIG9wZW5pbmc6IHBvc2l0aW9uKGxvY2F0aW9uLnN0YXJ0VGFnKSxcbiAgICAgICAgICBjbG9zaW5nOiBsb2NhdGlvbi5lbmRUYWcgPyBwb3NpdGlvbihsb2NhdGlvbi5lbmRUYWcpIDogbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vKipcbiAqIFR1cm4gYSBwNSBsb2NhdGlvbiBpbnRvIGEgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtQNUxvY2F0aW9ufSBsb2NcbiAqICAgTG9jYXRpb24uXG4gKiBAcmV0dXJucyB7UG9zaXRpb24gfCB1bmRlZmluZWR9XG4gKiAgIFBvc2l0aW9uIG9yIG5vdGhpbmcuXG4gKi9cbmZ1bmN0aW9uIHBvc2l0aW9uKGxvYykge1xuICBjb25zdCBzdGFydCA9IHBvaW50KHtcbiAgICBsaW5lOiBsb2Muc3RhcnRMaW5lLFxuICAgIGNvbHVtbjogbG9jLnN0YXJ0Q29sLFxuICAgIG9mZnNldDogbG9jLnN0YXJ0T2Zmc2V0XG4gIH0pXG4gIGNvbnN0IGVuZCA9IHBvaW50KHtcbiAgICBsaW5lOiBsb2MuZW5kTGluZSxcbiAgICBjb2x1bW46IGxvYy5lbmRDb2wsXG4gICAgb2Zmc2V0OiBsb2MuZW5kT2Zmc2V0XG4gIH0pXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgYHVuZGVmaW5lZGAgaXMgZmluZS5cbiAgcmV0dXJuIHN0YXJ0IHx8IGVuZCA/IHtzdGFydCwgZW5kfSA6IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgaW52YWxpZCBwb2ludHMuXG4gKlxuICogQHBhcmFtIHtQb2ludH0gcG9pbnRcbiAqICAgUG9pbnQgd2l0aCBwb3RlbnRpYWxseSBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7UG9pbnQgfCB1bmRlZmluZWR9XG4gKiAgIFBvaW50IG9yIG5vdGhpbmcuXG4gKi9cbmZ1bmN0aW9uIHBvaW50KHBvaW50KSB7XG4gIHJldHVybiBwb2ludC5saW5lICYmIHBvaW50LmNvbHVtbiA/IHBvaW50IDogdW5kZWZpbmVkXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgc29tZXRoaW5nIGlzIGEgZmlsZS5cbiAqXG4gKiBAcGFyYW0ge1ZGaWxlIHwgT3B0aW9uc30gdmFsdWVcbiAqICAgRmlsZSBvciBvcHRpb25zLlxuICogQHJldHVybnMge3ZhbHVlIGlzIFZGaWxlfVxuICogICBXaGV0aGVyIGB2YWx1ZWAgaXMgYSBmaWxlLlxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsdWUpIHtcbiAgcmV0dXJuICdtZXNzYWdlcycgaW4gdmFsdWVcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-from-parse5/lib/index.js\n");

/***/ })

};
;