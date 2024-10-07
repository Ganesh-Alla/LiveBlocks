"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@stablelib";
exports.ids = ["vendor-chunks/@stablelib"];
exports.modules = {

/***/ "(rsc)/./node_modules/@stablelib/base64/lib/base64.js":
/*!******************************************************!*\
  !*** ./node_modules/@stablelib/base64/lib/base64.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\n// Copyright (C) 2016 Dmitry Chestnykh\n// MIT License. See LICENSE file for details.\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * Package base64 implements Base64 encoding and decoding.\n */\n// Invalid character used in decoding to indicate\n// that the character to decode is out of range of\n// alphabet and cannot be decoded.\nvar INVALID_BYTE = 256;\n/**\n * Implements standard Base64 encoding.\n *\n * Operates in constant time.\n */\nvar Coder = /** @class */ (function () {\n    // TODO(dchest): methods to encode chunk-by-chunk.\n    function Coder(_paddingCharacter) {\n        if (_paddingCharacter === void 0) { _paddingCharacter = \"=\"; }\n        this._paddingCharacter = _paddingCharacter;\n    }\n    Coder.prototype.encodedLength = function (length) {\n        if (!this._paddingCharacter) {\n            return (length * 8 + 5) / 6 | 0;\n        }\n        return (length + 2) / 3 * 4 | 0;\n    };\n    Coder.prototype.encode = function (data) {\n        var out = \"\";\n        var i = 0;\n        for (; i < data.length - 2; i += 3) {\n            var c = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);\n            out += this._encodeByte((c >>> 3 * 6) & 63);\n            out += this._encodeByte((c >>> 2 * 6) & 63);\n            out += this._encodeByte((c >>> 1 * 6) & 63);\n            out += this._encodeByte((c >>> 0 * 6) & 63);\n        }\n        var left = data.length - i;\n        if (left > 0) {\n            var c = (data[i] << 16) | (left === 2 ? data[i + 1] << 8 : 0);\n            out += this._encodeByte((c >>> 3 * 6) & 63);\n            out += this._encodeByte((c >>> 2 * 6) & 63);\n            if (left === 2) {\n                out += this._encodeByte((c >>> 1 * 6) & 63);\n            }\n            else {\n                out += this._paddingCharacter || \"\";\n            }\n            out += this._paddingCharacter || \"\";\n        }\n        return out;\n    };\n    Coder.prototype.maxDecodedLength = function (length) {\n        if (!this._paddingCharacter) {\n            return (length * 6 + 7) / 8 | 0;\n        }\n        return length / 4 * 3 | 0;\n    };\n    Coder.prototype.decodedLength = function (s) {\n        return this.maxDecodedLength(s.length - this._getPaddingLength(s));\n    };\n    Coder.prototype.decode = function (s) {\n        if (s.length === 0) {\n            return new Uint8Array(0);\n        }\n        var paddingLength = this._getPaddingLength(s);\n        var length = s.length - paddingLength;\n        var out = new Uint8Array(this.maxDecodedLength(length));\n        var op = 0;\n        var i = 0;\n        var haveBad = 0;\n        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;\n        for (; i < length - 4; i += 4) {\n            v0 = this._decodeChar(s.charCodeAt(i + 0));\n            v1 = this._decodeChar(s.charCodeAt(i + 1));\n            v2 = this._decodeChar(s.charCodeAt(i + 2));\n            v3 = this._decodeChar(s.charCodeAt(i + 3));\n            out[op++] = (v0 << 2) | (v1 >>> 4);\n            out[op++] = (v1 << 4) | (v2 >>> 2);\n            out[op++] = (v2 << 6) | v3;\n            haveBad |= v0 & INVALID_BYTE;\n            haveBad |= v1 & INVALID_BYTE;\n            haveBad |= v2 & INVALID_BYTE;\n            haveBad |= v3 & INVALID_BYTE;\n        }\n        if (i < length - 1) {\n            v0 = this._decodeChar(s.charCodeAt(i));\n            v1 = this._decodeChar(s.charCodeAt(i + 1));\n            out[op++] = (v0 << 2) | (v1 >>> 4);\n            haveBad |= v0 & INVALID_BYTE;\n            haveBad |= v1 & INVALID_BYTE;\n        }\n        if (i < length - 2) {\n            v2 = this._decodeChar(s.charCodeAt(i + 2));\n            out[op++] = (v1 << 4) | (v2 >>> 2);\n            haveBad |= v2 & INVALID_BYTE;\n        }\n        if (i < length - 3) {\n            v3 = this._decodeChar(s.charCodeAt(i + 3));\n            out[op++] = (v2 << 6) | v3;\n            haveBad |= v3 & INVALID_BYTE;\n        }\n        if (haveBad !== 0) {\n            throw new Error(\"Base64Coder: incorrect characters for decoding\");\n        }\n        return out;\n    };\n    // Standard encoding have the following encoded/decoded ranges,\n    // which we need to convert between.\n    //\n    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /\n    // Index:   0 - 25                    26 - 51              52 - 61   62  63\n    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47\n    //\n    // Encode 6 bits in b into a new character.\n    Coder.prototype._encodeByte = function (b) {\n        // Encoding uses constant time operations as follows:\n        //\n        // 1. Define comparison of A with B using (A - B) >>> 8:\n        //          if A > B, then result is positive integer\n        //          if A <= B, then result is 0\n        //\n        // 2. Define selection of C or 0 using bitwise AND: X & C:\n        //          if X == 0, then result is 0\n        //          if X != 0, then result is C\n        //\n        // 3. Start with the smallest comparison (b >= 0), which is always\n        //    true, so set the result to the starting ASCII value (65).\n        //\n        // 4. Continue comparing b to higher ASCII values, and selecting\n        //    zero if comparison isn't true, otherwise selecting a value\n        //    to add to result, which:\n        //\n        //          a) undoes the previous addition\n        //          b) provides new value to add\n        //\n        var result = b;\n        // b >= 0\n        result += 65;\n        // b > 25\n        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);\n        // b > 51\n        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);\n        // b > 61\n        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 43);\n        // b > 62\n        result += ((62 - b) >>> 8) & ((62 - 43) - 63 + 47);\n        return String.fromCharCode(result);\n    };\n    // Decode a character code into a byte.\n    // Must return 256 if character is out of alphabet range.\n    Coder.prototype._decodeChar = function (c) {\n        // Decoding works similar to encoding: using the same comparison\n        // function, but now it works on ranges: result is always incremented\n        // by value, but this value becomes zero if the range is not\n        // satisfied.\n        //\n        // Decoding starts with invalid value, 256, which is then\n        // subtracted when the range is satisfied. If none of the ranges\n        // apply, the function returns 256, which is then checked by\n        // the caller to throw error.\n        var result = INVALID_BYTE; // start with invalid character\n        // c == 43 (c > 42 and c < 44)\n        result += (((42 - c) & (c - 44)) >>> 8) & (-INVALID_BYTE + c - 43 + 62);\n        // c == 47 (c > 46 and c < 48)\n        result += (((46 - c) & (c - 48)) >>> 8) & (-INVALID_BYTE + c - 47 + 63);\n        // c > 47 and c < 58\n        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);\n        // c > 64 and c < 91\n        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);\n        // c > 96 and c < 123\n        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);\n        return result;\n    };\n    Coder.prototype._getPaddingLength = function (s) {\n        var paddingLength = 0;\n        if (this._paddingCharacter) {\n            for (var i = s.length - 1; i >= 0; i--) {\n                if (s[i] !== this._paddingCharacter) {\n                    break;\n                }\n                paddingLength++;\n            }\n            if (s.length < 4 || paddingLength > 2) {\n                throw new Error(\"Base64Coder: incorrect padding\");\n            }\n        }\n        return paddingLength;\n    };\n    return Coder;\n}());\nexports.Coder = Coder;\nvar stdCoder = new Coder();\nfunction encode(data) {\n    return stdCoder.encode(data);\n}\nexports.encode = encode;\nfunction decode(s) {\n    return stdCoder.decode(s);\n}\nexports.decode = decode;\n/**\n * Implements URL-safe Base64 encoding.\n * (Same as Base64, but '+' is replaced with '-', and '/' with '_').\n *\n * Operates in constant time.\n */\nvar URLSafeCoder = /** @class */ (function (_super) {\n    __extends(URLSafeCoder, _super);\n    function URLSafeCoder() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    // URL-safe encoding have the following encoded/decoded ranges:\n    //\n    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _\n    // Index:   0 - 25                    26 - 51              52 - 61   62  63\n    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95\n    //\n    URLSafeCoder.prototype._encodeByte = function (b) {\n        var result = b;\n        // b >= 0\n        result += 65;\n        // b > 25\n        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);\n        // b > 51\n        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);\n        // b > 61\n        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 45);\n        // b > 62\n        result += ((62 - b) >>> 8) & ((62 - 45) - 63 + 95);\n        return String.fromCharCode(result);\n    };\n    URLSafeCoder.prototype._decodeChar = function (c) {\n        var result = INVALID_BYTE;\n        // c == 45 (c > 44 and c < 46)\n        result += (((44 - c) & (c - 46)) >>> 8) & (-INVALID_BYTE + c - 45 + 62);\n        // c == 95 (c > 94 and c < 96)\n        result += (((94 - c) & (c - 96)) >>> 8) & (-INVALID_BYTE + c - 95 + 63);\n        // c > 47 and c < 58\n        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);\n        // c > 64 and c < 91\n        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);\n        // c > 96 and c < 123\n        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);\n        return result;\n    };\n    return URLSafeCoder;\n}(Coder));\nexports.URLSafeCoder = URLSafeCoder;\nvar urlSafeCoder = new URLSafeCoder();\nfunction encodeURLSafe(data) {\n    return urlSafeCoder.encode(data);\n}\nexports.encodeURLSafe = encodeURLSafe;\nfunction decodeURLSafe(s) {\n    return urlSafeCoder.decode(s);\n}\nexports.decodeURLSafe = decodeURLSafe;\nexports.encodedLength = function (length) {\n    return stdCoder.encodedLength(length);\n};\nexports.maxDecodedLength = function (length) {\n    return stdCoder.maxDecodedLength(length);\n};\nexports.decodedLength = function (s) {\n    return stdCoder.decodedLength(s);\n};\n//# sourceMappingURL=base64.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHN0YWJsZWxpYi9iYXNlNjQvbGliL2Jhc2U2NC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQixzQ0FBc0Msa0JBQWtCO0FBQ3ZGLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsQ0FBQztBQUNELDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxpdmVibG9ja3MtZXhhbXBsZXMvbmV4dGpzLXlqcy1ibG9ja25vdGUtYWR2YW5jZWQvLi9ub2RlX21vZHVsZXMvQHN0YWJsZWxpYi9iYXNlNjQvbGliL2Jhc2U2NC5qcz8xZDU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFBhY2thZ2UgYmFzZTY0IGltcGxlbWVudHMgQmFzZTY0IGVuY29kaW5nIGFuZCBkZWNvZGluZy5cbiAqL1xuLy8gSW52YWxpZCBjaGFyYWN0ZXIgdXNlZCBpbiBkZWNvZGluZyB0byBpbmRpY2F0ZVxuLy8gdGhhdCB0aGUgY2hhcmFjdGVyIHRvIGRlY29kZSBpcyBvdXQgb2YgcmFuZ2Ugb2Zcbi8vIGFscGhhYmV0IGFuZCBjYW5ub3QgYmUgZGVjb2RlZC5cbnZhciBJTlZBTElEX0JZVEUgPSAyNTY7XG4vKipcbiAqIEltcGxlbWVudHMgc3RhbmRhcmQgQmFzZTY0IGVuY29kaW5nLlxuICpcbiAqIE9wZXJhdGVzIGluIGNvbnN0YW50IHRpbWUuXG4gKi9cbnZhciBDb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPKGRjaGVzdCk6IG1ldGhvZHMgdG8gZW5jb2RlIGNodW5rLWJ5LWNodW5rLlxuICAgIGZ1bmN0aW9uIENvZGVyKF9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgIGlmIChfcGFkZGluZ0NoYXJhY3RlciA9PT0gdm9pZCAwKSB7IF9wYWRkaW5nQ2hhcmFjdGVyID0gXCI9XCI7IH1cbiAgICAgICAgdGhpcy5fcGFkZGluZ0NoYXJhY3RlciA9IF9wYWRkaW5nQ2hhcmFjdGVyO1xuICAgIH1cbiAgICBDb2Rlci5wcm90b3R5cGUuZW5jb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKGxlbmd0aCAqIDggKyA1KSAvIDYgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobGVuZ3RoICsgMikgLyAzICogNCB8IDA7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIG91dCA9IFwiXCI7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBkYXRhLmxlbmd0aCAtIDI7IGkgKz0gMykge1xuICAgICAgICAgICAgdmFyIGMgPSAoZGF0YVtpXSA8PCAxNikgfCAoZGF0YVtpICsgMV0gPDwgOCkgfCAoZGF0YVtpICsgMl0pO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDMgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAyICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMSAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDAgKiA2KSAmIDYzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVmdCA9IGRhdGEubGVuZ3RoIC0gaTtcbiAgICAgICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYyA9IChkYXRhW2ldIDw8IDE2KSB8IChsZWZ0ID09PSAyID8gZGF0YVtpICsgMV0gPDwgOCA6IDApO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDMgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAyICogNikgJiA2Myk7XG4gICAgICAgICAgICBpZiAobGVmdCA9PT0gMikge1xuICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAxICogNikgJiA2Myk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5fcGFkZGluZ0NoYXJhY3RlciB8fCBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLm1heERlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIChsZW5ndGggKiA2ICsgNykgLyA4IHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoIC8gNCAqIDMgfCAwO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmRlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhEZWNvZGVkTGVuZ3RoKHMubGVuZ3RoIC0gdGhpcy5fZ2V0UGFkZGluZ0xlbmd0aChzKSk7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZGRpbmdMZW5ndGggPSB0aGlzLl9nZXRQYWRkaW5nTGVuZ3RoKHMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gcy5sZW5ndGggLSBwYWRkaW5nTGVuZ3RoO1xuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5tYXhEZWNvZGVkTGVuZ3RoKGxlbmd0aCkpO1xuICAgICAgICB2YXIgb3AgPSAwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBoYXZlQmFkID0gMDtcbiAgICAgICAgdmFyIHYwID0gMCwgdjEgPSAwLCB2MiA9IDAsIHYzID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGggLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIHYwID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDApKTtcbiAgICAgICAgICAgIHYxID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDEpKTtcbiAgICAgICAgICAgIHYyID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDIpKTtcbiAgICAgICAgICAgIHYzID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDMpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MCA8PCAyKSB8ICh2MSA+Pj4gNCk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjEgPDwgNCkgfCAodjIgPj4+IDIpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYyIDw8IDYpIHwgdjM7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYwICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MSAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjIgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYzICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdjAgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpKSk7XG4gICAgICAgICAgICB2MSA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAxKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjAgPDwgMikgfCAodjEgPj4+IDQpO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MCAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjEgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgICB2MiA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjEgPDwgNCkgfCAodjIgPj4+IDIpO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MiAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDMpIHtcbiAgICAgICAgICAgIHYzID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDMpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MiA8PCA2KSB8IHYzO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MyAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGF2ZUJhZCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0Q29kZXI6IGluY29ycmVjdCBjaGFyYWN0ZXJzIGZvciBkZWNvZGluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgLy8gU3RhbmRhcmQgZW5jb2RpbmcgaGF2ZSB0aGUgZm9sbG93aW5nIGVuY29kZWQvZGVjb2RlZCByYW5nZXMsXG4gICAgLy8gd2hpY2ggd2UgbmVlZCB0byBjb252ZXJ0IGJldHdlZW4uXG4gICAgLy9cbiAgICAvLyBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiAwMTIzNDU2Nzg5ICArICAgL1xuICAgIC8vIEluZGV4OiAgIDAgLSAyNSAgICAgICAgICAgICAgICAgICAgMjYgLSA1MSAgICAgICAgICAgICAgNTIgLSA2MSAgIDYyICA2M1xuICAgIC8vIEFTQ0lJOiAgNjUgLSA5MCAgICAgICAgICAgICAgICAgICAgOTcgLSAxMjIgICAgICAgICAgICAgNDggLSA1NyAgIDQzICA0N1xuICAgIC8vXG4gICAgLy8gRW5jb2RlIDYgYml0cyBpbiBiIGludG8gYSBuZXcgY2hhcmFjdGVyLlxuICAgIENvZGVyLnByb3RvdHlwZS5fZW5jb2RlQnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIC8vIEVuY29kaW5nIHVzZXMgY29uc3RhbnQgdGltZSBvcGVyYXRpb25zIGFzIGZvbGxvd3M6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDEuIERlZmluZSBjb21wYXJpc29uIG9mIEEgd2l0aCBCIHVzaW5nIChBIC0gQikgPj4+IDg6XG4gICAgICAgIC8vICAgICAgICAgIGlmIEEgPiBCLCB0aGVuIHJlc3VsdCBpcyBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAgICAgIC8vICAgICAgICAgIGlmIEEgPD0gQiwgdGhlbiByZXN1bHQgaXMgMFxuICAgICAgICAvL1xuICAgICAgICAvLyAyLiBEZWZpbmUgc2VsZWN0aW9uIG9mIEMgb3IgMCB1c2luZyBiaXR3aXNlIEFORDogWCAmIEM6XG4gICAgICAgIC8vICAgICAgICAgIGlmIFggPT0gMCwgdGhlbiByZXN1bHQgaXMgMFxuICAgICAgICAvLyAgICAgICAgICBpZiBYICE9IDAsIHRoZW4gcmVzdWx0IGlzIENcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMy4gU3RhcnQgd2l0aCB0aGUgc21hbGxlc3QgY29tcGFyaXNvbiAoYiA+PSAwKSwgd2hpY2ggaXMgYWx3YXlzXG4gICAgICAgIC8vICAgIHRydWUsIHNvIHNldCB0aGUgcmVzdWx0IHRvIHRoZSBzdGFydGluZyBBU0NJSSB2YWx1ZSAoNjUpLlxuICAgICAgICAvL1xuICAgICAgICAvLyA0LiBDb250aW51ZSBjb21wYXJpbmcgYiB0byBoaWdoZXIgQVNDSUkgdmFsdWVzLCBhbmQgc2VsZWN0aW5nXG4gICAgICAgIC8vICAgIHplcm8gaWYgY29tcGFyaXNvbiBpc24ndCB0cnVlLCBvdGhlcndpc2Ugc2VsZWN0aW5nIGEgdmFsdWVcbiAgICAgICAgLy8gICAgdG8gYWRkIHRvIHJlc3VsdCwgd2hpY2g6XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgIGEpIHVuZG9lcyB0aGUgcHJldmlvdXMgYWRkaXRpb25cbiAgICAgICAgLy8gICAgICAgICAgYikgcHJvdmlkZXMgbmV3IHZhbHVlIHRvIGFkZFxuICAgICAgICAvL1xuICAgICAgICB2YXIgcmVzdWx0ID0gYjtcbiAgICAgICAgLy8gYiA+PSAwXG4gICAgICAgIHJlc3VsdCArPSA2NTtcbiAgICAgICAgLy8gYiA+IDI1XG4gICAgICAgIHJlc3VsdCArPSAoKDI1IC0gYikgPj4+IDgpICYgKCgwIC0gNjUpIC0gMjYgKyA5Nyk7XG4gICAgICAgIC8vIGIgPiA1MVxuICAgICAgICByZXN1bHQgKz0gKCg1MSAtIGIpID4+PiA4KSAmICgoMjYgLSA5NykgLSA1MiArIDQ4KTtcbiAgICAgICAgLy8gYiA+IDYxXG4gICAgICAgIHJlc3VsdCArPSAoKDYxIC0gYikgPj4+IDgpICYgKCg1MiAtIDQ4KSAtIDYyICsgNDMpO1xuICAgICAgICAvLyBiID4gNjJcbiAgICAgICAgcmVzdWx0ICs9ICgoNjIgLSBiKSA+Pj4gOCkgJiAoKDYyIC0gNDMpIC0gNjMgKyA0Nyk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc3VsdCk7XG4gICAgfTtcbiAgICAvLyBEZWNvZGUgYSBjaGFyYWN0ZXIgY29kZSBpbnRvIGEgYnl0ZS5cbiAgICAvLyBNdXN0IHJldHVybiAyNTYgaWYgY2hhcmFjdGVyIGlzIG91dCBvZiBhbHBoYWJldCByYW5nZS5cbiAgICBDb2Rlci5wcm90b3R5cGUuX2RlY29kZUNoYXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAvLyBEZWNvZGluZyB3b3JrcyBzaW1pbGFyIHRvIGVuY29kaW5nOiB1c2luZyB0aGUgc2FtZSBjb21wYXJpc29uXG4gICAgICAgIC8vIGZ1bmN0aW9uLCBidXQgbm93IGl0IHdvcmtzIG9uIHJhbmdlczogcmVzdWx0IGlzIGFsd2F5cyBpbmNyZW1lbnRlZFxuICAgICAgICAvLyBieSB2YWx1ZSwgYnV0IHRoaXMgdmFsdWUgYmVjb21lcyB6ZXJvIGlmIHRoZSByYW5nZSBpcyBub3RcbiAgICAgICAgLy8gc2F0aXNmaWVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBEZWNvZGluZyBzdGFydHMgd2l0aCBpbnZhbGlkIHZhbHVlLCAyNTYsIHdoaWNoIGlzIHRoZW5cbiAgICAgICAgLy8gc3VidHJhY3RlZCB3aGVuIHRoZSByYW5nZSBpcyBzYXRpc2ZpZWQuIElmIG5vbmUgb2YgdGhlIHJhbmdlc1xuICAgICAgICAvLyBhcHBseSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgMjU2LCB3aGljaCBpcyB0aGVuIGNoZWNrZWQgYnlcbiAgICAgICAgLy8gdGhlIGNhbGxlciB0byB0aHJvdyBlcnJvci5cbiAgICAgICAgdmFyIHJlc3VsdCA9IElOVkFMSURfQllURTsgLy8gc3RhcnQgd2l0aCBpbnZhbGlkIGNoYXJhY3RlclxuICAgICAgICAvLyBjID09IDQzIChjID4gNDIgYW5kIGMgPCA0NClcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQyIC0gYykgJiAoYyAtIDQ0KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDMgKyA2Mik7XG4gICAgICAgIC8vIGMgPT0gNDcgKGMgPiA0NiBhbmQgYyA8IDQ4KVxuICAgICAgICByZXN1bHQgKz0gKCgoNDYgLSBjKSAmIChjIC0gNDgpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0NyArIDYzKTtcbiAgICAgICAgLy8gYyA+IDQ3IGFuZCBjIDwgNThcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ3IC0gYykgJiAoYyAtIDU4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDggKyA1Mik7XG4gICAgICAgIC8vIGMgPiA2NCBhbmQgYyA8IDkxXG4gICAgICAgIHJlc3VsdCArPSAoKCg2NCAtIGMpICYgKGMgLSA5MSkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDY1ICsgMCk7XG4gICAgICAgIC8vIGMgPiA5NiBhbmQgYyA8IDEyM1xuICAgICAgICByZXN1bHQgKz0gKCgoOTYgLSBjKSAmIChjIC0gMTIzKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTcgKyAyNik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuX2dldFBhZGRpbmdMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgICAgICB2YXIgcGFkZGluZ0xlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChzW2ldICE9PSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPCA0IHx8IHBhZGRpbmdMZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0Q29kZXI6IGluY29ycmVjdCBwYWRkaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWRkaW5nTGVuZ3RoO1xuICAgIH07XG4gICAgcmV0dXJuIENvZGVyO1xufSgpKTtcbmV4cG9ydHMuQ29kZXIgPSBDb2RlcjtcbnZhciBzdGRDb2RlciA9IG5ldyBDb2RlcigpO1xuZnVuY3Rpb24gZW5jb2RlKGRhdGEpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZW5jb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5mdW5jdGlvbiBkZWNvZGUocykge1xuICAgIHJldHVybiBzdGRDb2Rlci5kZWNvZGUocyk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8qKlxuICogSW1wbGVtZW50cyBVUkwtc2FmZSBCYXNlNjQgZW5jb2RpbmcuXG4gKiAoU2FtZSBhcyBCYXNlNjQsIGJ1dCAnKycgaXMgcmVwbGFjZWQgd2l0aCAnLScsIGFuZCAnLycgd2l0aCAnXycpLlxuICpcbiAqIE9wZXJhdGVzIGluIGNvbnN0YW50IHRpbWUuXG4gKi9cbnZhciBVUkxTYWZlQ29kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVSTFNhZmVDb2RlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVUkxTYWZlQ29kZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLy8gVVJMLXNhZmUgZW5jb2RpbmcgaGF2ZSB0aGUgZm9sbG93aW5nIGVuY29kZWQvZGVjb2RlZCByYW5nZXM6XG4gICAgLy9cbiAgICAvLyBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiAwMTIzNDU2Nzg5ICAtICAgX1xuICAgIC8vIEluZGV4OiAgIDAgLSAyNSAgICAgICAgICAgICAgICAgICAgMjYgLSA1MSAgICAgICAgICAgICAgNTIgLSA2MSAgIDYyICA2M1xuICAgIC8vIEFTQ0lJOiAgNjUgLSA5MCAgICAgICAgICAgICAgICAgICAgOTcgLSAxMjIgICAgICAgICAgICAgNDggLSA1NyAgIDQ1ICA5NVxuICAgIC8vXG4gICAgVVJMU2FmZUNvZGVyLnByb3RvdHlwZS5fZW5jb2RlQnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBiO1xuICAgICAgICAvLyBiID49IDBcbiAgICAgICAgcmVzdWx0ICs9IDY1O1xuICAgICAgICAvLyBiID4gMjVcbiAgICAgICAgcmVzdWx0ICs9ICgoMjUgLSBiKSA+Pj4gOCkgJiAoKDAgLSA2NSkgLSAyNiArIDk3KTtcbiAgICAgICAgLy8gYiA+IDUxXG4gICAgICAgIHJlc3VsdCArPSAoKDUxIC0gYikgPj4+IDgpICYgKCgyNiAtIDk3KSAtIDUyICsgNDgpO1xuICAgICAgICAvLyBiID4gNjFcbiAgICAgICAgcmVzdWx0ICs9ICgoNjEgLSBiKSA+Pj4gOCkgJiAoKDUyIC0gNDgpIC0gNjIgKyA0NSk7XG4gICAgICAgIC8vIGIgPiA2MlxuICAgICAgICByZXN1bHQgKz0gKCg2MiAtIGIpID4+PiA4KSAmICgoNjIgLSA0NSkgLSA2MyArIDk1KTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocmVzdWx0KTtcbiAgICB9O1xuICAgIFVSTFNhZmVDb2Rlci5wcm90b3R5cGUuX2RlY29kZUNoYXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gSU5WQUxJRF9CWVRFO1xuICAgICAgICAvLyBjID09IDQ1IChjID4gNDQgYW5kIGMgPCA0NilcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ0IC0gYykgJiAoYyAtIDQ2KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDUgKyA2Mik7XG4gICAgICAgIC8vIGMgPT0gOTUgKGMgPiA5NCBhbmQgYyA8IDk2KVxuICAgICAgICByZXN1bHQgKz0gKCgoOTQgLSBjKSAmIChjIC0gOTYpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA5NSArIDYzKTtcbiAgICAgICAgLy8gYyA+IDQ3IGFuZCBjIDwgNThcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ3IC0gYykgJiAoYyAtIDU4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDggKyA1Mik7XG4gICAgICAgIC8vIGMgPiA2NCBhbmQgYyA8IDkxXG4gICAgICAgIHJlc3VsdCArPSAoKCg2NCAtIGMpICYgKGMgLSA5MSkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDY1ICsgMCk7XG4gICAgICAgIC8vIGMgPiA5NiBhbmQgYyA8IDEyM1xuICAgICAgICByZXN1bHQgKz0gKCgoOTYgLSBjKSAmIChjIC0gMTIzKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTcgKyAyNik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gVVJMU2FmZUNvZGVyO1xufShDb2RlcikpO1xuZXhwb3J0cy5VUkxTYWZlQ29kZXIgPSBVUkxTYWZlQ29kZXI7XG52YXIgdXJsU2FmZUNvZGVyID0gbmV3IFVSTFNhZmVDb2RlcigpO1xuZnVuY3Rpb24gZW5jb2RlVVJMU2FmZShkYXRhKSB7XG4gICAgcmV0dXJuIHVybFNhZmVDb2Rlci5lbmNvZGUoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZVVSTFNhZmUgPSBlbmNvZGVVUkxTYWZlO1xuZnVuY3Rpb24gZGVjb2RlVVJMU2FmZShzKSB7XG4gICAgcmV0dXJuIHVybFNhZmVDb2Rlci5kZWNvZGUocyk7XG59XG5leHBvcnRzLmRlY29kZVVSTFNhZmUgPSBkZWNvZGVVUkxTYWZlO1xuZXhwb3J0cy5lbmNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBzdGRDb2Rlci5lbmNvZGVkTGVuZ3RoKGxlbmd0aCk7XG59O1xuZXhwb3J0cy5tYXhEZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBzdGRDb2Rlci5tYXhEZWNvZGVkTGVuZ3RoKGxlbmd0aCk7XG59O1xuZXhwb3J0cy5kZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZGVjb2RlZExlbmd0aChzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjQuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@stablelib/base64/lib/base64.js\n");

/***/ })

};
;