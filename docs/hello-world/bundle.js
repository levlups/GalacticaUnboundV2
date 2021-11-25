/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./index.js","babylon~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@jpweeks/typedarray-pool/node_modules/is-buffer/index.js":
/*!********************************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/@jpweeks/typedarray-pool/node_modules/is-buffer/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "../../node_modules/@jpweeks/typedarray-pool/pool.js":
/*!********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/@jpweeks/typedarray-pool/pool.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var bits = __webpack_require__(/*! bit-twiddle */ "../../node_modules/bit-twiddle/twiddle.js")
var dup = __webpack_require__(/*! dup */ "../../node_modules/dup/dup.js")
var isBuffer = __webpack_require__(/*! is-buffer */ "../../node_modules/@jpweeks/typedarray-pool/node_modules/is-buffer/index.js")

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8   : dup([32, 0])
    , UINT16  : dup([32, 0])
    , UINT32  : dup([32, 0])
    , INT8    : dup([32, 0])
    , INT16   : dup([32, 0])
    , INT32   : dup([32, 0])
    , FLOAT   : dup([32, 0])
    , DOUBLE  : dup([32, 0])
    , DATA    : dup([32, 0])
    , UINT8C  : dup([32, 0])
    , BUFFER  : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'buffer':
        throw 'Buffer not supported'
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/aabb-3d/index.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/aabb-3d/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = AABB

var vec3 = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js")

function AABB(pos, vec) {

  if(!(this instanceof AABB)) {
    return new AABB(pos, vec)
  }

  var pos2 = vec3.create()
  vec3.add(pos2, pos, vec)
 
  this.base = vec3.min(vec3.create(), pos, pos2)
  this.vec = vec3.clone(vec)
  this.max = vec3.max(vec3.create(), pos, pos2)

  this.mag = vec3.length(this.vec)

}

var cons = AABB
  , proto = cons.prototype

proto.width = function() {
  return this.vec[0]
}

proto.height = function() {
  return this.vec[1]
}

proto.depth = function() {
  return this.vec[2]
}

proto.x0 = function() {
  return this.base[0]
}

proto.y0 = function() {
  return this.base[1]
}

proto.z0 = function() {
  return this.base[2]
}

proto.x1 = function() {
  return this.max[0]
}

proto.y1 = function() {
  return this.max[1]
}

proto.z1 = function() {
  return this.max[2]
}

proto.translate = function(by) {
  vec3.add(this.max, this.max, by)
  vec3.add(this.base, this.base, by)
  return this
}

proto.setPosition = function(pos) {
  vec3.add(this.max, pos, this.vec)
  vec3.copy(this.base, pos)
  return this
}

proto.expand = function(aabb) {
  var max = vec3.create()
    , min = vec3.create()

  vec3.max(max, aabb.max, this.max)
  vec3.min(min, aabb.base, this.base)
  vec3.subtract(max, max, min)

  return new AABB(min, max)
}

proto.intersects = function(aabb) {
  if(aabb.base[0] > this.max[0]) return false
  if(aabb.base[1] > this.max[1]) return false
  if(aabb.base[2] > this.max[2]) return false
  if(aabb.max[0] < this.base[0]) return false
  if(aabb.max[1] < this.base[1]) return false
  if(aabb.max[2] < this.base[2]) return false

  return true
}

proto.touches = function(aabb) {

  var intersection = this.union(aabb);

  return (intersection !== null) &&
         ((intersection.width() == 0) ||
         (intersection.height() == 0) || 
         (intersection.depth() == 0))

}

proto.union = function(aabb) {
  if(!this.intersects(aabb)) return null

  var base_x = Math.max(aabb.base[0], this.base[0])
    , base_y = Math.max(aabb.base[1], this.base[1])
    , base_z = Math.max(aabb.base[2], this.base[2])
    , max_x = Math.min(aabb.max[0], this.max[0])
    , max_y = Math.min(aabb.max[1], this.max[1])
    , max_z = Math.min(aabb.max[2], this.max[2])

  return new AABB([base_x, base_y, base_z], [max_x - base_x, max_y - base_y, max_z - base_z])
}






/***/ }),

/***/ "../../node_modules/bit-twiddle/twiddle.js":
/*!**********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/bit-twiddle/twiddle.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

 "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}



/***/ }),

/***/ "../../node_modules/box-intersect/index.js":
/*!**********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = boxIntersectWrapper

var pool = __webpack_require__(/*! @jpweeks/typedarray-pool */ "../../node_modules/@jpweeks/typedarray-pool/pool.js")
var sweep = __webpack_require__(/*! ./lib/sweep */ "../../node_modules/box-intersect/lib/sweep.js")
var boxIntersectIter = __webpack_require__(/*! ./lib/intersect */ "../../node_modules/box-intersect/lib/intersect.js")

function boxEmpty(d, box) {
  for(var j=0; j<d; ++j) {
    if(!(box[j] <= box[j+d])) {
      return true
    }
  }
  return false
}

//Unpack boxes into a flat typed array, remove empty boxes
function convertBoxes(boxes, d, data, ids) {
  var ptr = 0
  var count = 0
  for(var i=0, n=boxes.length; i<n; ++i) {
    var b = boxes[i]
    if(boxEmpty(d, b)) {
      continue
    }
    for(var j=0; j<2*d; ++j) {
      data[ptr++] = b[j]
    }
    ids[count++] = i
  }
  return count
}

//Perform type conversions, check bounds
function boxIntersect(red, blue, visit, full) {
  var n = red.length
  var m = blue.length

  //If either array is empty, then we can skip this whole thing
  if(n <= 0 || m <= 0) {
    return
  }

  //Compute dimension, if it is 0 then we skip
  var d = (red[0].length)>>>1
  if(d <= 0) {
    return
  }

  var retval

  //Convert red boxes
  var redList  = pool.mallocDouble(2*d*n)
  var redIds   = pool.mallocInt32(n)
  n = convertBoxes(red, d, redList, redIds)

  if(n > 0) {
    if(d === 1 && full) {
      //Special case: 1d complete
      sweep.init(n)
      retval = sweep.sweepComplete(
        d, visit, 
        0, n, redList, redIds,
        0, n, redList, redIds)
    } else {

      //Convert blue boxes
      var blueList = pool.mallocDouble(2*d*m)
      var blueIds  = pool.mallocInt32(m)
      m = convertBoxes(blue, d, blueList, blueIds)

      if(m > 0) {
        sweep.init(n+m)

        if(d === 1) {
          //Special case: 1d bipartite
          retval = sweep.sweepBipartite(
            d, visit, 
            0, n, redList,  redIds,
            0, m, blueList, blueIds)
        } else {
          //General case:  d>1
          retval = boxIntersectIter(
            d, visit,    full,
            n, redList,  redIds,
            m, blueList, blueIds)
        }

        pool.free(blueList)
        pool.free(blueIds)
      }
    }

    pool.free(redList)
    pool.free(redIds)
  }

  return retval
}


var RESULT

function appendItem(i,j) {
  RESULT.push([i,j])
}

function intersectFullArray(x) {
  RESULT = []
  boxIntersect(x, x, appendItem, true)
  return RESULT
}

function intersectBipartiteArray(x, y) {
  RESULT = []
  boxIntersect(x, y, appendItem, false)
  return RESULT
}

//User-friendly wrapper, handle full input and no-visitor cases
function boxIntersectWrapper(arg0, arg1, arg2) {
  var result
  switch(arguments.length) {
    case 1:
      return intersectFullArray(arg0)
    case 2:
      if(typeof arg1 === 'function') {
        return boxIntersect(arg0, arg0, arg1, true)
      } else {
        return intersectBipartiteArray(arg0, arg1)
      }
    case 3:
      return boxIntersect(arg0, arg1, arg2, false)
    default:
      throw new Error('box-intersect: Invalid arguments')
  }
}

/***/ }),

/***/ "../../node_modules/box-intersect/lib/brute.js":
/*!**************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/lib/brute.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DIMENSION   = 'd'
var AXIS        = 'ax'
var VISIT       = 'vv'
var FLIP        = 'fp'

var ELEM_SIZE   = 'es'

var RED_START   = 'rs'
var RED_END     = 're'
var RED_BOXES   = 'rb'
var RED_INDEX   = 'ri'
var RED_PTR     = 'rp'

var BLUE_START  = 'bs'
var BLUE_END    = 'be'
var BLUE_BOXES  = 'bb'
var BLUE_INDEX  = 'bi'
var BLUE_PTR    = 'bp'

var RETVAL      = 'rv'

var INNER_LABEL = 'Q'

var ARGS = [
  DIMENSION,
  AXIS,
  VISIT,
  RED_START,
  RED_END,
  RED_BOXES,
  RED_INDEX,
  BLUE_START,
  BLUE_END,
  BLUE_BOXES,
  BLUE_INDEX
]

function generateBruteForce(redMajor, flip, full) {
  var funcName = 'bruteForce' + 
    (redMajor ? 'Red' : 'Blue') + 
    (flip ? 'Flip' : '') +
    (full ? 'Full' : '')

  var code = ['function ', funcName, '(', ARGS.join(), '){',
    'var ', ELEM_SIZE, '=2*', DIMENSION, ';']

  var redLoop = 
    'for(var i=' + RED_START + ',' + RED_PTR + '=' + ELEM_SIZE + '*' + RED_START + ';' +
        'i<' + RED_END +';' +
        '++i,' + RED_PTR + '+=' + ELEM_SIZE + '){' +
        'var x0=' + RED_BOXES + '[' + AXIS + '+' + RED_PTR + '],' +
            'x1=' + RED_BOXES + '[' + AXIS + '+' + RED_PTR + '+' + DIMENSION + '],' +
            'xi=' + RED_INDEX + '[i];'

  var blueLoop = 
    'for(var j=' + BLUE_START + ',' + BLUE_PTR + '=' + ELEM_SIZE + '*' + BLUE_START + ';' +
        'j<' + BLUE_END + ';' +
        '++j,' + BLUE_PTR + '+=' + ELEM_SIZE + '){' +
        'var y0=' + BLUE_BOXES + '[' + AXIS + '+' + BLUE_PTR + '],' +
            (full ? 'y1=' + BLUE_BOXES + '[' + AXIS + '+' + BLUE_PTR + '+' + DIMENSION + '],' : '') +
            'yi=' + BLUE_INDEX + '[j];'

  if(redMajor) {
    code.push(redLoop, INNER_LABEL, ':', blueLoop)
  } else {
    code.push(blueLoop, INNER_LABEL, ':', redLoop)
  }

  if(full) {
    code.push('if(y1<x0||x1<y0)continue;')
  } else if(flip) {
    code.push('if(y0<=x0||x1<y0)continue;')
  } else {
    code.push('if(y0<x0||x1<y0)continue;')
  }

  code.push('for(var k='+AXIS+'+1;k<'+DIMENSION+';++k){'+
    'var r0='+RED_BOXES+'[k+'+RED_PTR+'],'+
        'r1='+RED_BOXES+'[k+'+DIMENSION+'+'+RED_PTR+'],'+
        'b0='+BLUE_BOXES+'[k+'+BLUE_PTR+'],'+
        'b1='+BLUE_BOXES+'[k+'+DIMENSION+'+'+BLUE_PTR+'];'+
      'if(r1<b0||b1<r0)continue ' + INNER_LABEL + ';}' +
      'var ' + RETVAL + '=' + VISIT + '(')

  if(flip) {
    code.push('yi,xi')
  } else {
    code.push('xi,yi')
  }

  code.push(');if(' + RETVAL + '!==void 0)return ' + RETVAL + ';}}}')

  return {
    name: funcName, 
    code: code.join('')
  }
}

function bruteForcePlanner(full) {
  var funcName = 'bruteForce' + (full ? 'Full' : 'Partial')
  var prefix = []
  var fargs = ARGS.slice()
  if(!full) {
    fargs.splice(3, 0, FLIP)
  }

  var code = ['function ' + funcName + '(' + fargs.join() + '){']

  function invoke(redMajor, flip) {
    var res = generateBruteForce(redMajor, flip, full)
    prefix.push(res.code)
    code.push('return ' + res.name + '(' + ARGS.join() + ');')
  }

  code.push('if(' + RED_END + '-' + RED_START + '>' +
                    BLUE_END + '-' + BLUE_START + '){')

  if(full) {
    invoke(true, false)
    code.push('}else{')
    invoke(false, false)
  } else {
    code.push('if(' + FLIP + '){')
    invoke(true, true)
    code.push('}else{')
    invoke(true, false)
    code.push('}}else{if(' + FLIP + '){')
    invoke(false, true)
    code.push('}else{')
    invoke(false, false)
    code.push('}')
  }
  code.push('}}return ' + funcName)

  var codeStr = prefix.join('') + code.join('')
  var proc = new Function(codeStr)
  return proc()
}


exports.partial = bruteForcePlanner(false)
exports.full    = bruteForcePlanner(true)

/***/ }),

/***/ "../../node_modules/box-intersect/lib/intersect.js":
/*!******************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/lib/intersect.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = boxIntersectIter

var pool = __webpack_require__(/*! @jpweeks/typedarray-pool */ "../../node_modules/@jpweeks/typedarray-pool/pool.js")
var bits = __webpack_require__(/*! bit-twiddle */ "../../node_modules/bit-twiddle/twiddle.js")
var bruteForce = __webpack_require__(/*! ./brute */ "../../node_modules/box-intersect/lib/brute.js")
var bruteForcePartial = bruteForce.partial
var bruteForceFull = bruteForce.full
var sweep = __webpack_require__(/*! ./sweep */ "../../node_modules/box-intersect/lib/sweep.js")
var findMedian = __webpack_require__(/*! ./median */ "../../node_modules/box-intersect/lib/median.js")
var genPartition = __webpack_require__(/*! ./partition */ "../../node_modules/box-intersect/lib/partition.js")

//Twiddle parameters
var BRUTE_FORCE_CUTOFF    = 128       //Cut off for brute force search
var SCAN_CUTOFF           = (1<<22)   //Cut off for two way scan
var SCAN_COMPLETE_CUTOFF  = (1<<22)  

//Partition functions
var partitionInteriorContainsInterval = genPartition(
  '!(lo>=p0)&&!(p1>=hi)', 
  ['p0', 'p1'])

var partitionStartEqual = genPartition(
  'lo===p0',
  ['p0'])

var partitionStartLessThan = genPartition(
  'lo<p0',
  ['p0'])

var partitionEndLessThanEqual = genPartition(
  'hi<=p0',
  ['p0'])

var partitionContainsPoint = genPartition(
  'lo<=p0&&p0<=hi',
  ['p0'])

var partitionContainsPointProper = genPartition(
  'lo<p0&&p0<=hi',
  ['p0'])

//Frame size for iterative loop
var IFRAME_SIZE = 6
var DFRAME_SIZE = 2

//Data for box statck
var INIT_CAPACITY = 1024
var BOX_ISTACK  = pool.mallocInt32(INIT_CAPACITY)
var BOX_DSTACK  = pool.mallocDouble(INIT_CAPACITY)

//Initialize iterative loop queue
function iterInit(d, count) {
  var levels = (8 * bits.log2(count+1) * (d+1))|0
  var maxInts = bits.nextPow2(IFRAME_SIZE*levels)
  if(BOX_ISTACK.length < maxInts) {
    pool.free(BOX_ISTACK)
    BOX_ISTACK = pool.mallocInt32(maxInts)
  }
  var maxDoubles = bits.nextPow2(DFRAME_SIZE*levels)
  if(BOX_DSTACK.length < maxDoubles) {
    pool.free(BOX_DSTACK)
    BOX_DSTACK = pool.mallocDouble(maxDoubles)
  }
}

//Append item to queue
function iterPush(ptr,
  axis, 
  redStart, redEnd, 
  blueStart, blueEnd, 
  state, 
  lo, hi) {

  var iptr = IFRAME_SIZE * ptr
  BOX_ISTACK[iptr]   = axis
  BOX_ISTACK[iptr+1] = redStart
  BOX_ISTACK[iptr+2] = redEnd
  BOX_ISTACK[iptr+3] = blueStart
  BOX_ISTACK[iptr+4] = blueEnd
  BOX_ISTACK[iptr+5] = state

  var dptr = DFRAME_SIZE * ptr
  BOX_DSTACK[dptr]   = lo
  BOX_DSTACK[dptr+1] = hi
}

//Special case:  Intersect single point with list of intervals
function onePointPartial(
  d, axis, visit, flip,
  redStart, redEnd, red, redIndex,
  blueOffset, blue, blueId) {

  var elemSize = 2 * d
  var bluePtr  = blueOffset * elemSize
  var blueX    = blue[bluePtr + axis]

red_loop:
  for(var i=redStart, redPtr=redStart*elemSize; i<redEnd; ++i, redPtr+=elemSize) {
    var r0 = red[redPtr+axis]
    var r1 = red[redPtr+axis+d]
    if(blueX < r0 || r1 < blueX) {
      continue
    }
    if(flip && blueX === r0) {
      continue
    }
    var redId = redIndex[i]
    for(var j=axis+1; j<d; ++j) {
      var r0 = red[redPtr+j]
      var r1 = red[redPtr+j+d]
      var b0 = blue[bluePtr+j]
      var b1 = blue[bluePtr+j+d]
      if(r1 < b0 || b1 < r0) {
        continue red_loop
      }
    }
    var retval
    if(flip) {
      retval = visit(blueId, redId)
    } else {
      retval = visit(redId, blueId)
    }
    if(retval !== void 0) {
      return retval
    }
  }
}

//Special case:  Intersect one point with list of intervals
function onePointFull(
  d, axis, visit,
  redStart, redEnd, red, redIndex,
  blueOffset, blue, blueId) {

  var elemSize = 2 * d
  var bluePtr  = blueOffset * elemSize
  var blueX    = blue[bluePtr + axis]

red_loop:
  for(var i=redStart, redPtr=redStart*elemSize; i<redEnd; ++i, redPtr+=elemSize) {
    var redId = redIndex[i]
    if(redId === blueId) {
      continue
    }
    var r0 = red[redPtr+axis]
    var r1 = red[redPtr+axis+d]
    if(blueX < r0 || r1 < blueX) {
      continue
    }
    for(var j=axis+1; j<d; ++j) {
      var r0 = red[redPtr+j]
      var r1 = red[redPtr+j+d]
      var b0 = blue[bluePtr+j]
      var b1 = blue[bluePtr+j+d]
      if(r1 < b0 || b1 < r0) {
        continue red_loop
      }
    }
    var retval = visit(redId, blueId)
    if(retval !== void 0) {
      return retval
    }
  }
}

//The main box intersection routine
function boxIntersectIter(
  d, visit, initFull,
  xSize, xBoxes, xIndex,
  ySize, yBoxes, yIndex) {

  //Reserve memory for stack
  iterInit(d, xSize + ySize)

  var top  = 0
  var elemSize = 2 * d
  var retval

  iterPush(top++,
      0,
      0, xSize,
      0, ySize,
      initFull ? 16 : 0, 
      -Infinity, Infinity)
  if(!initFull) {
    iterPush(top++,
      0,
      0, ySize,
      0, xSize,
      1, 
      -Infinity, Infinity)
  }

  while(top > 0) {
    top  -= 1

    var iptr = top * IFRAME_SIZE
    var axis      = BOX_ISTACK[iptr]
    var redStart  = BOX_ISTACK[iptr+1]
    var redEnd    = BOX_ISTACK[iptr+2]
    var blueStart = BOX_ISTACK[iptr+3]
    var blueEnd   = BOX_ISTACK[iptr+4]
    var state     = BOX_ISTACK[iptr+5]

    var dptr = top * DFRAME_SIZE
    var lo        = BOX_DSTACK[dptr]
    var hi        = BOX_DSTACK[dptr+1]

    //Unpack state info
    var flip      = (state & 1)
    var full      = !!(state & 16)

    //Unpack indices
    var red       = xBoxes
    var redIndex  = xIndex
    var blue      = yBoxes
    var blueIndex = yIndex
    if(flip) {
      red         = yBoxes
      redIndex    = yIndex
      blue        = xBoxes
      blueIndex   = xIndex
    }

    if(state & 2) {
      redEnd = partitionStartLessThan(
        d, axis,
        redStart, redEnd, red, redIndex,
        hi)
      if(redStart >= redEnd) {
        continue
      }
    }
    if(state & 4) {
      redStart = partitionEndLessThanEqual(
        d, axis,
        redStart, redEnd, red, redIndex,
        lo)
      if(redStart >= redEnd) {
        continue
      }
    }
    
    var redCount  = redEnd  - redStart
    var blueCount = blueEnd - blueStart

    if(full) {
      if(d * redCount * (redCount + blueCount) < SCAN_COMPLETE_CUTOFF) {
        retval = sweep.scanComplete(
          d, axis, visit, 
          redStart, redEnd, red, redIndex,
          blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
        continue
      }
    } else {
      if(d * Math.min(redCount, blueCount) < BRUTE_FORCE_CUTOFF) {
        //If input small, then use brute force
        retval = bruteForcePartial(
            d, axis, visit, flip,
            redStart,  redEnd,  red,  redIndex,
            blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
        continue
      } else if(d * redCount * blueCount < SCAN_CUTOFF) {
        //If input medium sized, then use sweep and prune
        retval = sweep.scanBipartite(
          d, axis, visit, flip, 
          redStart, redEnd, red, redIndex,
          blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
        continue
      }
    }
    
    //First, find all red intervals whose interior contains (lo,hi)
    var red0 = partitionInteriorContainsInterval(
      d, axis, 
      redStart, redEnd, red, redIndex,
      lo, hi)

    //Lower dimensional case
    if(redStart < red0) {

      if(d * (red0 - redStart) < BRUTE_FORCE_CUTOFF) {
        //Special case for small inputs: use brute force
        retval = bruteForceFull(
          d, axis+1, visit,
          redStart, red0, red, redIndex,
          blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
      } else if(axis === d-2) {
        if(flip) {
          retval = sweep.sweepBipartite(
            d, visit,
            blueStart, blueEnd, blue, blueIndex,
            redStart, red0, red, redIndex)
        } else {
          retval = sweep.sweepBipartite(
            d, visit,
            redStart, red0, red, redIndex,
            blueStart, blueEnd, blue, blueIndex)
        }
        if(retval !== void 0) {
          return retval
        }
      } else {
        iterPush(top++,
          axis+1,
          redStart, red0,
          blueStart, blueEnd,
          flip,
          -Infinity, Infinity)
        iterPush(top++,
          axis+1,
          blueStart, blueEnd,
          redStart, red0,
          flip^1,
          -Infinity, Infinity)
      }
    }

    //Divide and conquer phase
    if(red0 < redEnd) {

      //Cut blue into 3 parts:
      //
      //  Points < mid point
      //  Points = mid point
      //  Points > mid point
      //
      var blue0 = findMedian(
        d, axis, 
        blueStart, blueEnd, blue, blueIndex)
      var mid = blue[elemSize * blue0 + axis]
      var blue1 = partitionStartEqual(
        d, axis,
        blue0, blueEnd, blue, blueIndex,
        mid)

      //Right case
      if(blue1 < blueEnd) {
        iterPush(top++,
          axis,
          red0, redEnd,
          blue1, blueEnd,
          (flip|4) + (full ? 16 : 0),
          mid, hi)
      }

      //Left case
      if(blueStart < blue0) {
        iterPush(top++,
          axis,
          red0, redEnd,
          blueStart, blue0,
          (flip|2) + (full ? 16 : 0),
          lo, mid)
      }

      //Center case (the hard part)
      if(blue0 + 1 === blue1) {
        //Optimization: Range with exactly 1 point, use a brute force scan
        if(full) {
          retval = onePointFull(
            d, axis, visit,
            red0, redEnd, red, redIndex,
            blue0, blue, blueIndex[blue0])
        } else {
          retval = onePointPartial(
            d, axis, visit, flip,
            red0, redEnd, red, redIndex,
            blue0, blue, blueIndex[blue0])
        }
        if(retval !== void 0) {
          return retval
        }
      } else if(blue0 < blue1) {
        var red1
        if(full) {
          //If full intersection, need to handle special case
          red1 = partitionContainsPoint(
            d, axis,
            red0, redEnd, red, redIndex,
            mid)
          if(red0 < red1) {
            var redX = partitionStartEqual(
              d, axis,
              red0, red1, red, redIndex,
              mid)
            if(axis === d-2) {
              //Degenerate sweep intersection:
              //  [red0, redX] with [blue0, blue1]
              if(red0 < redX) {
                retval = sweep.sweepComplete(
                  d, visit,
                  red0, redX, red, redIndex,
                  blue0, blue1, blue, blueIndex)
                if(retval !== void 0) {
                  return retval
                }
              }

              //Normal sweep intersection:
              //  [redX, red1] with [blue0, blue1]
              if(redX < red1) {
                retval = sweep.sweepBipartite(
                  d, visit,
                  redX, red1, red, redIndex,
                  blue0, blue1, blue, blueIndex)
                if(retval !== void 0) {
                  return retval
                }
              }
            } else {
              if(red0 < redX) {
                iterPush(top++,
                  axis+1,
                  red0, redX,
                  blue0, blue1,
                  16,
                  -Infinity, Infinity)
              }
              if(redX < red1) {
                iterPush(top++,
                  axis+1,
                  redX, red1,
                  blue0, blue1,
                  0,
                  -Infinity, Infinity)
                iterPush(top++,
                  axis+1,
                  blue0, blue1,
                  redX, red1,
                  1,
                  -Infinity, Infinity)
              }
            }
          }
        } else {
          if(flip) {
            red1 = partitionContainsPointProper(
              d, axis,
              red0, redEnd, red, redIndex,
              mid)
          } else {
            red1 = partitionContainsPoint(
              d, axis,
              red0, redEnd, red, redIndex,
              mid)
          }
          if(red0 < red1) {
            if(axis === d-2) {
              if(flip) {
                retval = sweep.sweepBipartite(
                  d, visit,
                  blue0, blue1, blue, blueIndex,
                  red0, red1, red, redIndex)
              } else {
                retval = sweep.sweepBipartite(
                  d, visit,
                  red0, red1, red, redIndex,
                  blue0, blue1, blue, blueIndex)
              }
            } else {
              iterPush(top++,
                axis+1,
                red0, red1,
                blue0, blue1,
                flip,
                -Infinity, Infinity)
              iterPush(top++,
                axis+1,
                blue0, blue1,
                red0, red1,
                flip^1,
                -Infinity, Infinity)
            }
          }
        }
      }
    }
  }
}

/***/ }),

/***/ "../../node_modules/box-intersect/lib/median.js":
/*!***************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/lib/median.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = findMedian

var genPartition = __webpack_require__(/*! ./partition */ "../../node_modules/box-intersect/lib/partition.js")

var partitionStartLessThan = genPartition('lo<p0', ['p0'])

var PARTITION_THRESHOLD = 8   //Cut off for using insertion sort in findMedian

//Base case for median finding:  Use insertion sort
function insertionSort(d, axis, start, end, boxes, ids) {
  var elemSize = 2 * d
  var boxPtr = elemSize * (start+1) + axis
  for(var i=start+1; i<end; ++i, boxPtr+=elemSize) {
    var x = boxes[boxPtr]
    for(var j=i, ptr=elemSize*(i-1); 
        j>start && boxes[ptr+axis] > x; 
        --j, ptr-=elemSize) {
      //Swap
      var aPtr = ptr
      var bPtr = ptr+elemSize
      for(var k=0; k<elemSize; ++k, ++aPtr, ++bPtr) {
        var y = boxes[aPtr]
        boxes[aPtr] = boxes[bPtr]
        boxes[bPtr] = y
      }
      var tmp = ids[j]
      ids[j] = ids[j-1]
      ids[j-1] = tmp
    }
  }
}

//Find median using quick select algorithm
//  takes O(n) time with high probability
function findMedian(d, axis, start, end, boxes, ids) {
  if(end <= start+1) {
    return start
  }

  var lo       = start
  var hi       = end
  var mid      = ((end + start) >>> 1)
  var elemSize = 2*d
  var pivot    = mid
  var value    = boxes[elemSize*mid+axis]
  
  while(lo < hi) {
    if(hi - lo < PARTITION_THRESHOLD) {
      insertionSort(d, axis, lo, hi, boxes, ids)
      value = boxes[elemSize*mid+axis]
      break
    }
    
    //Select pivot using median-of-3
    var count  = hi - lo
    var pivot0 = (Math.random()*count+lo)|0
    var value0 = boxes[elemSize*pivot0 + axis]
    var pivot1 = (Math.random()*count+lo)|0
    var value1 = boxes[elemSize*pivot1 + axis]
    var pivot2 = (Math.random()*count+lo)|0
    var value2 = boxes[elemSize*pivot2 + axis]
    if(value0 <= value1) {
      if(value2 >= value1) {
        pivot = pivot1
        value = value1
      } else if(value0 >= value2) {
        pivot = pivot0
        value = value0
      } else {
        pivot = pivot2
        value = value2
      }
    } else {
      if(value1 >= value2) {
        pivot = pivot1
        value = value1
      } else if(value2 >= value0) {
        pivot = pivot0
        value = value0
      } else {
        pivot = pivot2
        value = value2
      }
    }

    //Swap pivot to end of array
    var aPtr = elemSize * (hi-1)
    var bPtr = elemSize * pivot
    for(var i=0; i<elemSize; ++i, ++aPtr, ++bPtr) {
      var x = boxes[aPtr]
      boxes[aPtr] = boxes[bPtr]
      boxes[bPtr] = x
    }
    var y = ids[hi-1]
    ids[hi-1] = ids[pivot]
    ids[pivot] = y

    //Partition using pivot
    pivot = partitionStartLessThan(
      d, axis, 
      lo, hi-1, boxes, ids,
      value)

    //Swap pivot back
    var aPtr = elemSize * (hi-1)
    var bPtr = elemSize * pivot
    for(var i=0; i<elemSize; ++i, ++aPtr, ++bPtr) {
      var x = boxes[aPtr]
      boxes[aPtr] = boxes[bPtr]
      boxes[bPtr] = x
    }
    var y = ids[hi-1]
    ids[hi-1] = ids[pivot]
    ids[pivot] = y

    //Swap pivot to last pivot
    if(mid < pivot) {
      hi = pivot-1
      while(lo < hi && 
        boxes[elemSize*(hi-1)+axis] === value) {
        hi -= 1
      }
      hi += 1
    } else if(pivot < mid) {
      lo = pivot + 1
      while(lo < hi &&
        boxes[elemSize*lo+axis] === value) {
        lo += 1
      }
    } else {
      break
    }
  }

  //Make sure pivot is at start
  return partitionStartLessThan(
    d, axis, 
    start, mid, boxes, ids,
    boxes[elemSize*mid+axis])
}

/***/ }),

/***/ "../../node_modules/box-intersect/lib/partition.js":
/*!******************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/lib/partition.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = genPartition

var code = 'for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m'

function genPartition(predicate, args) {
  var fargs ='abcdef'.split('').concat(args)
  var reads = []
  if(predicate.indexOf('lo') >= 0) {
    reads.push('lo=e[k+n]')
  }
  if(predicate.indexOf('hi') >= 0) {
    reads.push('hi=e[k+o]')
  }
  fargs.push(
    code.replace('_', reads.join())
        .replace('$', predicate))
  return Function.apply(void 0, fargs)
}

/***/ }),

/***/ "../../node_modules/box-intersect/lib/sort.js":
/*!*************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/lib/sort.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This code is extracted from ndarray-sort
//It is inlined here as a temporary workaround

module.exports = wrapper;

var INSERT_SORT_CUTOFF = 32

function wrapper(data, n0) {
  if (n0 <= 4*INSERT_SORT_CUTOFF) {
    insertionSort(0, n0 - 1, data);
  } else {
    quickSort(0, n0 - 1, data);
  }
}

function insertionSort(left, right, data) {
  var ptr = 2*(left+1)
  for(var i=left+1; i<=right; ++i) {
    var a = data[ptr++]
    var b = data[ptr++]
    var j = i
    var jptr = ptr-2
    while(j-- > left) {
      var x = data[jptr-2]
      var y = data[jptr-1]
      if(x < a) {
        break
      } else if(x === a && y < b) {
        break
      }
      data[jptr]   = x
      data[jptr+1] = y
      jptr -= 2
    }
    data[jptr]   = a
    data[jptr+1] = b
  }
}

function swap(i, j, data) {
  i *= 2
  j *= 2
  var x = data[i]
  var y = data[i+1]
  data[i] = data[j]
  data[i+1] = data[j+1]
  data[j] = x
  data[j+1] = y
}

function move(i, j, data) {
  i *= 2
  j *= 2
  data[i] = data[j]
  data[i+1] = data[j+1]
}

function rotate(i, j, k, data) {
  i *= 2
  j *= 2
  k *= 2
  var x = data[i]
  var y = data[i+1]
  data[i] = data[j]
  data[i+1] = data[j+1]
  data[j] = data[k]
  data[j+1] = data[k+1]
  data[k] = x
  data[k+1] = y
}

function shufflePivot(i, j, px, py, data) {
  i *= 2
  j *= 2
  data[i] = data[j]
  data[j] = px
  data[i+1] = data[j+1]
  data[j+1] = py
}

function compare(i, j, data) {
  i *= 2
  j *= 2
  var x = data[i],
      y = data[j]
  if(x < y) {
    return false
  } else if(x === y) {
    return data[i+1] > data[j+1]
  }
  return true
}

function comparePivot(i, y, b, data) {
  i *= 2
  var x = data[i]
  if(x < y) {
    return true
  } else if(x === y) {
    return data[i+1] < b
  }
  return false
}

function quickSort(left, right, data) {
  var sixth = (right - left + 1) / 6 | 0, 
      index1 = left + sixth, 
      index5 = right - sixth, 
      index3 = left + right >> 1, 
      index2 = index3 - sixth, 
      index4 = index3 + sixth, 
      el1 = index1, 
      el2 = index2, 
      el3 = index3, 
      el4 = index4, 
      el5 = index5, 
      less = left + 1, 
      great = right - 1, 
      tmp = 0
  if(compare(el1, el2, data)) {
    tmp = el1
    el1 = el2
    el2 = tmp
  }
  if(compare(el4, el5, data)) {
    tmp = el4
    el4 = el5
    el5 = tmp
  }
  if(compare(el1, el3, data)) {
    tmp = el1
    el1 = el3
    el3 = tmp
  }
  if(compare(el2, el3, data)) {
    tmp = el2
    el2 = el3
    el3 = tmp
  }
  if(compare(el1, el4, data)) {
    tmp = el1
    el1 = el4
    el4 = tmp
  }
  if(compare(el3, el4, data)) {
    tmp = el3
    el3 = el4
    el4 = tmp
  }
  if(compare(el2, el5, data)) {
    tmp = el2
    el2 = el5
    el5 = tmp
  }
  if(compare(el2, el3, data)) {
    tmp = el2
    el2 = el3
    el3 = tmp
  }
  if(compare(el4, el5, data)) {
    tmp = el4
    el4 = el5
    el5 = tmp
  }

  var pivot1X = data[2*el2]
  var pivot1Y = data[2*el2+1]
  var pivot2X = data[2*el4]
  var pivot2Y = data[2*el4+1]

  var ptr0 = 2 * el1;
  var ptr2 = 2 * el3;
  var ptr4 = 2 * el5;
  var ptr5 = 2 * index1;
  var ptr6 = 2 * index3;
  var ptr7 = 2 * index5;
  for (var i1 = 0; i1 < 2; ++i1) {
    var x = data[ptr0+i1];
    var y = data[ptr2+i1];
    var z = data[ptr4+i1];
    data[ptr5+i1] = x;
    data[ptr6+i1] = y;
    data[ptr7+i1] = z;
  }

  move(index2, left, data)
  move(index4, right, data)
  for (var k = less; k <= great; ++k) {
    if (comparePivot(k, pivot1X, pivot1Y, data)) {
      if (k !== less) {
        swap(k, less, data)
      }
      ++less;
    } else {
      if (!comparePivot(k, pivot2X, pivot2Y, data)) {
        while (true) {
          if (!comparePivot(great, pivot2X, pivot2Y, data)) {
            if (--great < k) {
              break;
            }
            continue;
          } else {
            if (comparePivot(great, pivot1X, pivot1Y, data)) {
              rotate(k, less, great, data)
              ++less;
              --great;
            } else {
              swap(k, great, data)
              --great;
            }
            break;
          }
        }
      }
    }
  }
  shufflePivot(left, less-1, pivot1X, pivot1Y, data)
  shufflePivot(right, great+1, pivot2X, pivot2Y, data)
  if (less - 2 - left <= INSERT_SORT_CUTOFF) {
    insertionSort(left, less - 2, data);
  } else {
    quickSort(left, less - 2, data);
  }
  if (right - (great + 2) <= INSERT_SORT_CUTOFF) {
    insertionSort(great + 2, right, data);
  } else {
    quickSort(great + 2, right, data);
  }
  if (great - less <= INSERT_SORT_CUTOFF) {
    insertionSort(less, great, data);
  } else {
    quickSort(less, great, data);
  }
}

/***/ }),

/***/ "../../node_modules/box-intersect/lib/sweep.js":
/*!**************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/box-intersect/lib/sweep.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  init:           sqInit,
  sweepBipartite: sweepBipartite,
  sweepComplete:  sweepComplete,
  scanBipartite:  scanBipartite,
  scanComplete:   scanComplete
}

var pool  = __webpack_require__(/*! @jpweeks/typedarray-pool */ "../../node_modules/@jpweeks/typedarray-pool/pool.js")
var bits  = __webpack_require__(/*! bit-twiddle */ "../../node_modules/bit-twiddle/twiddle.js")
var isort = __webpack_require__(/*! ./sort */ "../../node_modules/box-intersect/lib/sort.js")

//Flag for blue
var BLUE_FLAG = (1<<28)

//1D sweep event queue stuff (use pool to save space)
var INIT_CAPACITY      = 1024
var RED_SWEEP_QUEUE    = pool.mallocInt32(INIT_CAPACITY)
var RED_SWEEP_INDEX    = pool.mallocInt32(INIT_CAPACITY)
var BLUE_SWEEP_QUEUE   = pool.mallocInt32(INIT_CAPACITY)
var BLUE_SWEEP_INDEX   = pool.mallocInt32(INIT_CAPACITY)
var COMMON_SWEEP_QUEUE = pool.mallocInt32(INIT_CAPACITY)
var COMMON_SWEEP_INDEX = pool.mallocInt32(INIT_CAPACITY)
var SWEEP_EVENTS       = pool.mallocDouble(INIT_CAPACITY * 8)

//Reserves memory for the 1D sweep data structures
function sqInit(count) {
  var rcount = bits.nextPow2(count)
  if(RED_SWEEP_QUEUE.length < rcount) {
    pool.free(RED_SWEEP_QUEUE)
    RED_SWEEP_QUEUE = pool.mallocInt32(rcount)
  }
  if(RED_SWEEP_INDEX.length < rcount) {
    pool.free(RED_SWEEP_INDEX)
    RED_SWEEP_INDEX = pool.mallocInt32(rcount)
  }
  if(BLUE_SWEEP_QUEUE.length < rcount) {
    pool.free(BLUE_SWEEP_QUEUE)
    BLUE_SWEEP_QUEUE = pool.mallocInt32(rcount)
  }
  if(BLUE_SWEEP_INDEX.length < rcount) {
    pool.free(BLUE_SWEEP_INDEX)
    BLUE_SWEEP_INDEX = pool.mallocInt32(rcount)
  }
  if(COMMON_SWEEP_QUEUE.length < rcount) {
    pool.free(COMMON_SWEEP_QUEUE)
    COMMON_SWEEP_QUEUE = pool.mallocInt32(rcount)
  }
  if(COMMON_SWEEP_INDEX.length < rcount) {
    pool.free(COMMON_SWEEP_INDEX)
    COMMON_SWEEP_INDEX = pool.mallocInt32(rcount)
  }
  var eventLength = 8 * rcount
  if(SWEEP_EVENTS.length < eventLength) {
    pool.free(SWEEP_EVENTS)
    SWEEP_EVENTS = pool.mallocDouble(eventLength)
  }
}

//Remove an item from the active queue in O(1)
function sqPop(queue, index, count, item) {
  var idx = index[item]
  var top = queue[count-1]
  queue[idx] = top
  index[top] = idx
}

//Insert an item into the active queue in O(1)
function sqPush(queue, index, count, item) {
  queue[count] = item
  index[item]  = count
}

//Recursion base case: use 1D sweep algorithm
function sweepBipartite(
    d, visit,
    redStart,  redEnd, red, redIndex,
    blueStart, blueEnd, blue, blueIndex) {

  //store events as pairs [coordinate, idx]
  //
  //  red create:  -(idx+1)
  //  red destroy: idx
  //  blue create: -(idx+BLUE_FLAG)
  //  blue destroy: idx+BLUE_FLAG
  //
  var ptr      = 0
  var elemSize = 2*d
  var istart   = d-1
  var iend     = elemSize-1

  for(var i=redStart; i<redEnd; ++i) {
    var idx = redIndex[i]
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -(idx+1)
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }

  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = blueIndex[i]+BLUE_FLAG
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = blue[blueOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive  = 0
  var blueActive = 0
  for(var i=0; i<n; ++i) {
    var e = SWEEP_EVENTS[2*i+1]|0
    if(e >= BLUE_FLAG) {
      //blue destroy event
      e = (e-BLUE_FLAG)|0
      sqPop(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive--, e)
    } else if(e >= 0) {
      //red destroy event
      sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, e)
    } else if(e <= -BLUE_FLAG) {
      //blue create event
      e = (-e-BLUE_FLAG)|0
      for(var j=0; j<redActive; ++j) {
        var retval = visit(RED_SWEEP_QUEUE[j], e)
        if(retval !== void 0) {
          return retval
        }
      }
      sqPush(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive++, e)
    } else {
      //red create event
      e = (-e-1)|0
      for(var j=0; j<blueActive; ++j) {
        var retval = visit(e, BLUE_SWEEP_QUEUE[j])
        if(retval !== void 0) {
          return retval
        }
      }
      sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, e)
    }
  }
}

//Complete sweep
function sweepComplete(d, visit, 
  redStart, redEnd, red, redIndex,
  blueStart, blueEnd, blue, blueIndex) {

  var ptr      = 0
  var elemSize = 2*d
  var istart   = d-1
  var iend     = elemSize-1

  for(var i=redStart; i<redEnd; ++i) {
    var idx = (redIndex[i]+1)<<1
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }

  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = (blueIndex[i]+1)<<1
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = (-idx)|1
    SWEEP_EVENTS[ptr++] = blue[blueOffset+iend]
    SWEEP_EVENTS[ptr++] = idx|1
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive    = 0
  var blueActive   = 0
  var commonActive = 0
  for(var i=0; i<n; ++i) {
    var e     = SWEEP_EVENTS[2*i+1]|0
    var color = e&1
    if(i < n-1 && (e>>1) === (SWEEP_EVENTS[2*i+3]>>1)) {
      color = 2
      i += 1
    }
    
    if(e < 0) {
      //Create event
      var id = -(e>>1) - 1

      //Intersect with common
      for(var j=0; j<commonActive; ++j) {
        var retval = visit(COMMON_SWEEP_QUEUE[j], id)
        if(retval !== void 0) {
          return retval
        }
      }

      if(color !== 0) {
        //Intersect with red
        for(var j=0; j<redActive; ++j) {
          var retval = visit(RED_SWEEP_QUEUE[j], id)
          if(retval !== void 0) {
            return retval
          }
        }
      }

      if(color !== 1) {
        //Intersect with blue
        for(var j=0; j<blueActive; ++j) {
          var retval = visit(BLUE_SWEEP_QUEUE[j], id)
          if(retval !== void 0) {
            return retval
          }
        }
      }

      if(color === 0) {
        //Red
        sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, id)
      } else if(color === 1) {
        //Blue
        sqPush(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive++, id)
      } else if(color === 2) {
        //Both
        sqPush(COMMON_SWEEP_QUEUE, COMMON_SWEEP_INDEX, commonActive++, id)
      }
    } else {
      //Destroy event
      var id = (e>>1) - 1
      if(color === 0) {
        //Red
        sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, id)
      } else if(color === 1) {
        //Blue
        sqPop(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive--, id)
      } else if(color === 2) {
        //Both
        sqPop(COMMON_SWEEP_QUEUE, COMMON_SWEEP_INDEX, commonActive--, id)
      }
    }
  }
}

//Sweep and prune/scanline algorithm:
//  Scan along axis, detect intersections
//  Brute force all boxes along axis
function scanBipartite(
  d, axis, visit, flip,
  redStart,  redEnd, red, redIndex,
  blueStart, blueEnd, blue, blueIndex) {
  
  var ptr      = 0
  var elemSize = 2*d
  var istart   = axis
  var iend     = axis+d

  var redShift  = 1
  var blueShift = 1
  if(flip) {
    blueShift = BLUE_FLAG
  } else {
    redShift  = BLUE_FLAG
  }

  for(var i=redStart; i<redEnd; ++i) {
    var idx = i + redShift
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }
  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = i + blueShift
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive    = 0
  for(var i=0; i<n; ++i) {
    var e = SWEEP_EVENTS[2*i+1]|0
    if(e < 0) {
      var idx   = -e
      var isRed = false
      if(idx >= BLUE_FLAG) {
        isRed = !flip
        idx -= BLUE_FLAG 
      } else {
        isRed = !!flip
        idx -= 1
      }
      if(isRed) {
        sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, idx)
      } else {
        var blueId  = blueIndex[idx]
        var bluePtr = elemSize * idx
        
        var b0 = blue[bluePtr+axis+1]
        var b1 = blue[bluePtr+axis+1+d]

red_loop:
        for(var j=0; j<redActive; ++j) {
          var oidx   = RED_SWEEP_QUEUE[j]
          var redPtr = elemSize * oidx

          if(b1 < red[redPtr+axis+1] || 
             red[redPtr+axis+1+d] < b0) {
            continue
          }

          for(var k=axis+2; k<d; ++k) {
            if(blue[bluePtr + k + d] < red[redPtr + k] || 
               red[redPtr + k + d] < blue[bluePtr + k]) {
              continue red_loop
            }
          }

          var redId  = redIndex[oidx]
          var retval
          if(flip) {
            retval = visit(blueId, redId)
          } else {
            retval = visit(redId, blueId)
          }
          if(retval !== void 0) {
            return retval 
          }
        }
      }
    } else {
      sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, e - redShift)
    }
  }
}

function scanComplete(
  d, axis, visit,
  redStart,  redEnd, red, redIndex,
  blueStart, blueEnd, blue, blueIndex) {

  var ptr      = 0
  var elemSize = 2*d
  var istart   = axis
  var iend     = axis+d

  for(var i=redStart; i<redEnd; ++i) {
    var idx = i + BLUE_FLAG
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }
  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = i + 1
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive    = 0
  for(var i=0; i<n; ++i) {
    var e = SWEEP_EVENTS[2*i+1]|0
    if(e < 0) {
      var idx   = -e
      if(idx >= BLUE_FLAG) {
        RED_SWEEP_QUEUE[redActive++] = idx - BLUE_FLAG
      } else {
        idx -= 1
        var blueId  = blueIndex[idx]
        var bluePtr = elemSize * idx

        var b0 = blue[bluePtr+axis+1]
        var b1 = blue[bluePtr+axis+1+d]

red_loop:
        for(var j=0; j<redActive; ++j) {
          var oidx   = RED_SWEEP_QUEUE[j]
          var redId  = redIndex[oidx]

          if(redId === blueId) {
            break
          }

          var redPtr = elemSize * oidx
          if(b1 < red[redPtr+axis+1] || 
            red[redPtr+axis+1+d] < b0) {
            continue
          }
          for(var k=axis+2; k<d; ++k) {
            if(blue[bluePtr + k + d] < red[redPtr + k] || 
               red[redPtr + k + d]   < blue[bluePtr + k]) {
              continue red_loop
            }
          }

          var retval = visit(redId, blueId)
          if(retval !== void 0) {
            return retval 
          }
        }
      }
    } else {
      var idx = e - BLUE_FLAG
      for(var j=redActive-1; j>=0; --j) {
        if(RED_SWEEP_QUEUE[j] === idx) {
          for(var k=j+1; k<redActive; ++k) {
            RED_SWEEP_QUEUE[k-1] = RED_SWEEP_QUEUE[k]
          }
          break
        }
      }
      --redActive
    }
  }
}

/***/ }),

/***/ "../../node_modules/canvas-screenshot/index.js":
/*!**************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/canvas-screenshot/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fileExtension = __webpack_require__(/*! file-extension */ "../../node_modules/file-extension/file-extension.js");

let link = null;

function getType(filename) {
  const ext = fileExtension(filename);
  return ["jpg", "jpeg"].includes(ext) ? "image/jpeg" : "image/png";
}

function takeCanvasScreenshot(canvas, options = {}) {
  const date = new Date();

  const {
    filename = `Screen Shot ${date.toISOString().slice(0, 10)} at ${date
      .toTimeString()
      .slice(0, 8)
      .replace(/:/g, ".")}.png`,
    quality = 1,
    useBlob,
    download = true
  } = {
    ...options
  };

  if (download) {
    link = link || document.createElement("a");
    link.download = filename;
  }

  if (useBlob) {
    return new Promise(resolve => {
      canvas.toBlob(
        blob => {
          if (download) {
            const url = URL.createObjectURL(blob);
            link.href = url;
            const event = new MouseEvent("click");
            link.dispatchEvent(event);

            setTimeout(() => {
              URL.revokeObjectURL(url);
            }, 1);
          }

          resolve(blob);
        },
        getType(filename),
        quality
      );
    });
  }

  const dataURL = canvas.toDataURL(`${getType(filename)};base64`, quality);

  if (download) {
    link.href = dataURL;
    const event = new MouseEvent("click");
    link.dispatchEvent(event);
  }

  return dataURL;
}

module.exports = takeCanvasScreenshot;


/***/ }),

/***/ "../../node_modules/dup/dup.js":
/*!**********************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/dup/dup.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe

/***/ }),

/***/ "../../node_modules/ent-comp/src/ECS.js":
/*!*******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/ent-comp/src/ECS.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


module.exports = ECS
var DataStore = __webpack_require__(/*! ./dataStore */ "../../node_modules/ent-comp/src/dataStore.js")



/*!
 * ent-comp: a light, *fast* Entity Component System in JS
 * @url      github.com/andyhall/ent-comp
 * @author   Andy Hall <andy@fenomas.com>
 * @license  MIT
*/



/**
 * Constructor for a new entity-component-system manager.
 * 
 * ```js
 * var ECS = require('ent-comp')
 * var ecs = new ECS()
 * ```
 * @class
 * @constructor
 * @exports ECS
 * @typicalname ecs
*/

function ECS() {
	var self = this

	/** 
	 * Hash of component definitions. Also aliased to `comps`.
	 * 
	 * ```js
	 * var comp = { name: 'foo' }
	 * ecs.createComponent(comp)
	 * ecs.components['foo'] === comp  // true
	 * ecs.comps['foo']                // same
	 * ```
	*/
	this.components = {}
	this.comps = this.components



	/*
	 * 
	 * 		internal properties:
	 * 
	*/

	var components = this.components

	// counter for entity IDs
	var UID = 1

	// Storage for all component state data:
	// storage['component-name'] = DataStore instance
	var storage = {}

	// flat arrays of names of components with systems
	var systems = []
	var renderSystems = []

	// flags and arrays for deferred cleanup of removed stuff
	var deferrals = {
		timeout: false,
		removals: [],
		multiComps: [],
	}

	// expose references to internals for debugging or hacking
	this._storage = storage
	this._systems = systems
	this._renderSystems = renderSystems





	/*
	 * 
	 * 
	 * 				Public API
	 * 
	 * 
	*/




	/**
	 * Creates a new entity id (currently just an incrementing integer).
	 * 
	 * Optionally takes a list of component names to add to the entity (with default state data).
	 * 
	 * ```js
	 * var id1 = ecs.createEntity()
	 * var id2 = ecs.createEntity([ 'some-component', 'other-component' ])
	 * ```
	*/
	this.createEntity = function (compList) {
		var id = UID++
		if (Array.isArray(compList)) {
			compList.forEach(compName => self.addComponent(id, compName))
		}
		return id
	}



	/**
	 * Deletes an entity, which in practice means removing all its components.
	 * 
	 * ```js
	 * ecs.deleteEntity(id)
	 * ```
	*/
	this.deleteEntity = function (entID) {
		// loop over all components and maybe remove them
		// this avoids needing to keep a list of components-per-entity
		Object.keys(storage).forEach(compName => {
			var data = storage[compName]
			if (data.hash[entID]) {
				removeComponent(entID, compName)
			}
		})
		return self
	}







	/**
	 * Creates a new component from a definition object. 
	 * The definition must have a `name`; all other properties are optional.
	 * 
	 * Returns the component name, to make it easy to grab when the component
	 * is being `require`d from a module.
	 * 
	 * ```js
	 * var comp = {
	 * 	 name: 'some-unique-string',
	 * 	 state: {},
	 * 	 order: 99,
	 * 	 multi: false,
	 * 	 onAdd:        (id, state) => { },
	 * 	 onRemove:     (id, state) => { },
	 * 	 system:       (dt, states) => { },
	 * 	 renderSystem: (dt, states) => { },
	 * }
	 * 
	 * var name = ecs.createComponent( comp )
	 * // name == 'some-unique-string'
	 * ```
	 * 
	 * Note the `multi` flag - for components where this is true, a given 
	 * entity can have multiple state objects for that component.
	 * For multi-components, APIs that would normally return a state object 
	 * (like `getState`) will instead return an array of them.
	*/
	this.createComponent = function (compDefn) {
		if (!compDefn) throw 'Missing component definition'
		var name = compDefn.name
		if (!name) throw 'Component definition must have a name property.'
		if (typeof name !== 'string') throw 'Component name must be a string.'
		if (name === '') throw 'Component name must be a non-empty string.'
		if (storage[name]) throw `Component ${name} already exists.`

		// rebuild definition object for monomorphism
		var internalDef = {}
		internalDef.name = name
		internalDef.multi = !!compDefn.multi
		internalDef.order = isNaN(compDefn.order) ? 99 : compDefn.order
		internalDef.state = compDefn.state || {}
		internalDef.onAdd = compDefn.onAdd || null
		internalDef.onRemove = compDefn.onRemove || null
		internalDef.system = compDefn.system || null
		internalDef.renderSystem = compDefn.renderSystem || null

		components[name] = internalDef
		storage[name] = new DataStore()
		storage[name]._pendingMultiCleanup = false
		storage[name]._multiCleanupIDs = (internalDef.multi) ? [] : null

		if (internalDef.system) {
			systems.push(name)
			systems.sort((a, b) => components[a].order - components[b].order)
		}
		if (internalDef.renderSystem) {
			renderSystems.push(name)
			renderSystems.sort((a, b) => components[a].order - components[b].order)
		}

		return name
	}





	/**
	 * Deletes the component definition with the given name. 
	 * First removes the component from all entities that have it.
	 * 
	 * **Note:** This API shouldn't be necessary in most real-world usage - 
	 * you should set up all your components during init and then leave them be.
	 * But it's useful if, say, you receive an ECS from another library and 
	 * you need to replace its components.
	 * 
	 * ```js
	 * ecs.deleteComponent( 'some-component' )
	 * ```
	*/
	this.deleteComponent = function (compName) {
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}`

		data.flush()
		data.list.forEach(obj => {
			if (!obj) return
			var id = obj.__id || obj[0].__id
			removeComponent(id, compName)
		})

		var i = systems.indexOf(compName)
		var j = renderSystems.indexOf(compName)
		if (i > -1) systems.splice(i, 1)
		if (j > -1) renderSystems.splice(j, 1)

		storage[compName].dispose()
		delete storage[compName]
		delete components[compName]

		return self
	}




	/**
	 * Adds a component to an entity, optionally initializing the state object.
	 * 
	 * ```js
	 * ecs.createComponent({
	 * 	name: 'foo',
	 * 	state: { val: 1 }
	 * })
	 * ecs.addComponent(id1, 'foo')             // use default state
	 * ecs.addComponent(id2, 'foo', { val:2 })  // pass in state data
	 * ```
	*/
	this.addComponent = function (entID, compName, state) {
		var def = components[compName]
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}.`

		// treat adding an existing (non-multi-) component as an error
		if (data.hash[entID] && !def.multi) {
			throw `Entity ${entID} already has component: ${compName}.`
		}

		// create new component state object for this entity
		var newState = Object.assign({}, { __id: entID }, def.state, state)

		// just in case passed-in state object had an __id property
		newState.__id = entID

		// add to data store - for multi components, may already be present
		if (def.multi) {
			var statesArr = data.hash[entID]
			if (!statesArr) {
				statesArr = []
				data.add(entID, statesArr)
			}
			statesArr.push(newState)
		} else {
			data.add(entID, newState)
		}

		// call handler and return
		if (def.onAdd) def.onAdd(entID, newState)

		return this
	}



	/**
	 * Checks if an entity has a component.
	 * 
	 * ```js
	 * ecs.addComponent(id, 'foo')
	 * ecs.hasComponent(id, 'foo')       // true
	 * ```
	*/

	this.hasComponent = function (entID, compName) {
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}.`
		return !!data.hash[entID]
	}





	/**
	 * Removes a component from an entity, triggering the component's 
	 * `onRemove` handler, and then deleting any state data.
	 * 
	 * ```js
	 * ecs.removeComponent(id, 'foo')
	 * ecs.hasComponent(id, 'foo')     	 // false
	 * ```
	*/
	this.removeComponent = function (entID, compName) {
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}.`

		// removal implementations at end
		removeComponent(entID, compName)

		return self
	}





	/**
	 * Get the component state for a given entity.
	 * It will automatically have an `__id` property for the entity id.
	 * 
	 * ```js
	 * ecs.createComponent({
	 * 	name: 'foo',
	 * 	state: { val: 0 }
	 * })
	 * ecs.addComponent(id, 'foo')
	 * ecs.getState(id, 'foo').val       // 0
	 * ecs.getState(id, 'foo').__id      // equals id
	 * ```
	*/

	this.getState = function (entID, compName) {
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}.`
		return data.hash[entID]
	}




	/**
	 * Get an array of state objects for every entity with the given component. 
	 * Each one will have an `__id` property for the entity id it refers to.
	 * Don't add or remove elements from the returned list!
	 * 
	 * ```js
	 * var arr = ecs.getStatesList('foo')
	 * // returns something shaped like:
	 * //   [
	 * //     {__id:0, x:1},
	 * //     {__id:7, x:2},
	 * //   ]
	 * ```  
	*/

	this.getStatesList = function (compName) {
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}.`
		doDeferredCleanup(data)
		return data.list
	}




	/**
	 * Makes a `getState`-like accessor bound to a given component. 
	 * The accessor is faster than `getState`, so you may want to create 
	 * an accessor for any component you'll be accessing a lot.
	 * 
	 * ```js
	 * ecs.createComponent({
	 * 	name: 'size',
	 * 	state: { val: 0 }
	 * })
	 * var getEntitySize = ecs.getStateAccessor('size')
	 * // ...
	 * ecs.addComponent(id, 'size', { val:123 })
	 * getEntitySize(id).val      // 123
	 * ```  
	*/

	this.getStateAccessor = function (compName) {
		if (!storage[compName]) throw `Unknown component: ${compName}.`
		var hash = storage[compName].hash
		return (id) => hash[id]
	}




	/**
	 * Makes a `hasComponent`-like accessor function bound to a given component. 
	 * The accessor is much faster than `hasComponent`.
	 * 
	 * ```js
	 * ecs.createComponent({
	 * 	name: 'foo',
	 * })
	 * var hasFoo = ecs.getComponentAccessor('foo')
	 * // ...
	 * ecs.addComponent(id, 'foo')
	 * hasFoo(id) // true
	 * ```  
	*/

	this.getComponentAccessor = function (compName) {
		if (!storage[compName]) throw `Unknown component: ${compName}.`
		var hash = storage[compName].hash
		return (id) => !!hash[id]
	}





	/**
	 * Tells the ECS that a game tick has occurred, causing component 
	 * `system` functions to get called.
	 * 
	 * The optional parameter simply gets passed to the system functions. 
	 * It's meant to be a timestep, but can be used (or not used) as you like.    
	 * 
	 * If components have an `order` property, they'll get called in that order
	 * (lowest to highest). Component order defaults to `99`.
	 * ```js
	 * ecs.createComponent({
	 * 	name: foo,
	 * 	order: 1,
	 * 	system: function(dt, states) {
	 * 		// states is the same array you'd get from #getStatesList()
	 * 		states.forEach(state => {
	 * 			console.log('Entity ID: ', state.__id)
	 * 		})
	 * 	}
	 * })
	 * ecs.tick(30) // triggers log statements
	 * ```
	*/

	this.tick = function (dt) {
		doDeferredCleanup()
		for (var i = 0; i < systems.length; i++) {
			var compName = systems[i]
			var comp = components[compName]
			var data = storage[compName]
			comp.system(dt, data.list)
			doDeferredCleanup()
		}
		return self
	}



	/**
	 * Functions exactly like `tick`, but calls `renderSystem` functions.
	 * this effectively gives you a second set of systems that are 
	 * called with separate timing, in case you want to 
	 * [tick and render in separate loops](http://gafferongames.com/game-physics/fix-your-timestep/)
	 * (which you should!).
	 * 
	 * ```js
	 * ecs.createComponent({
	 * 	name: foo,
	 * 	order: 5,
	 * 	renderSystem: function(dt, states) {
	 * 		// states is the same array you'd get from #getStatesList()
	 * 	}
	 * })
	 * ecs.render(1000/60)
	 * ```
	*/

	this.render = function (dt) {
		doDeferredCleanup()
		for (var i = 0; i < renderSystems.length; i++) {
			var compName = renderSystems[i]
			var comp = components[compName]
			var data = storage[compName]
			comp.renderSystem(dt, data.list)
			doDeferredCleanup()
		}
		return self
	}




	/**
	 * Removes one particular instance of a multi-component.
	 * To avoid breaking loops, the relevant state object will get nulled
	 * immediately, and spliced from the states array later when safe 
	 * (after the current tick/render/animationFrame).
	 * 
	 * ```js
	 * // where component 'foo' is a multi-component
	 * ecs.getState(id, 'foo')   // [ state1, state2, state3 ]
	 * ecs.removeMultiComponent(id, 'foo', 1)
	 * ecs.getState(id, 'foo')   // [ state1, null, state3 ]
	 * // one JS event loop later...
	 * ecs.getState(id, 'foo')   // [ state1, state3 ]
	 * ```
	 */
	this.removeMultiComponent = function (entID, compName, index) {
		var def = components[compName]
		var data = storage[compName]
		if (!data) throw `Unknown component: ${compName}.`
		if (!def.multi) throw 'removeMultiComponent called on non-multi component'

		// removal implementations at end
		removeMultiCompElement(entID, def, data, index)

		return self
	}













	/*
	 * 
	 * 
	 *		internal implementations of remove/delete operations
	 * 		a bit hairy due to deferred cleanup, etc.
	 * 
	 * 
	*/


	// remove given component from an entity
	function removeComponent(entID, compName) {
		var def = components[compName]
		var data = storage[compName]

		// fail silently on all cases where removal target isn't present,
		// since multiple pieces of logic often remove/delete simultaneously
		var state = data.hash[entID]
		if (!state) return

		// null out data now, so overlapped remove events won't fire
		data.remove(entID)

		// call onRemove handler - on each instance for multi components
		if (def.onRemove) {
			if (def.multi) {
				state.forEach(state => {
					if (state) def.onRemove(entID, state)
				})
				state.length = 0
			} else {
				def.onRemove(entID, state)
			}
		}

		deferrals.removals.push(data)
		pingDeferrals()
	}


	// remove one state from a multi component
	function removeMultiCompElement(entID, def, data, index) {
		// if statesArr isn't present there's no work or cleanup to do
		var statesArr = data.hash[entID]
		if (!statesArr) return

		// as above, ignore cases where removal target doesn't exist
		var state = statesArr[index]
		if (!state) return

		// null out element and fire event
		statesArr[index] = null
		if (def.onRemove) def.onRemove(entID, state)

		deferrals.multiComps.push({ entID, data })
		pingDeferrals()
	}







	// rigging
	function pingDeferrals() {
		if (deferrals.timeout) return
		deferrals.timeout = true
		setTimeout(deferralHandler, 1)
	}

	function deferralHandler() {
		deferrals.timeout = false
		doDeferredCleanup()
	}


	/*
	 * 
	 *		general handling for deferred data cleanup
	 * 			- removes null states if component is multi
	 * 			- removes null entries from component dataStore
	 * 		should be called at safe times - not during state loops
	 * 
	*/

	function doDeferredCleanup() {
		if (deferrals.multiComps.length) {
			deferredMultiCompCleanup(deferrals.multiComps)
		}
		if (deferrals.removals.length) {
			deferredComponentCleanup(deferrals.removals)
		}
	}

	// removes null elements from multi-comp state arrays
	function deferredMultiCompCleanup(list) {
		for (var i = 0; i < list.length; i++) {
			var { entID, data } = list[i]
			var statesArr = data.hash[entID]
			if (!statesArr) continue
			for (var j = 0; j < statesArr.length; j++) {
				if (statesArr[j]) continue
				statesArr.splice(j, 1)
				j--
			}
			// if this leaves the states list empty, remove the whole component
			if (statesArr.length === 0) {
				data.remove(entID)
				deferrals.removals.push(data)
			}
		}
		list.length = 0
	}

	// flushes dataStore after components have been removed
	function deferredComponentCleanup(list) {
		for (var i = 0; i < list.length; i++) {
			var data = list[i]
			data.flush()
		}
		list.length = 0
	}



}



/***/ }),

/***/ "../../node_modules/ent-comp/src/dataStore.js":
/*!*************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/ent-comp/src/dataStore.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/*
 * 
 *      Encapsulates (mostly) a collection of objects, 
 *      exposed both as a hash and as an array
 *      _map maps hash id to list index
 * 
 *      Note this is a dumb store, it doesn't check any inputs at all.
 *      It also assumes every stored data object is stored like:
 *          dataStore.add(37, {__id:37} )
 * 
*/


module.exports = class DataStore {

    constructor() {
        this.list = []
        this.hash = {}
        this._map = {}
        this._pendingRemovals = []
    }


    // add a new state object
    add(id, stateObject) {
        if (typeof this._map[id] === 'number') {
            // this happens if id is removed/readded without flushing
            var index = this._map[id]
            this.hash[id] = stateObject
            this.list[index] = stateObject
        } else {
            this._map[id] = this.list.length
            this.hash[id] = stateObject
            this.list.push(stateObject)
        }
    }


    // remove - nulls the state object, actual removal comes later
    remove(id) {
        var index = this._map[id]
        this.hash[id] = null
        this.list[index] = null
        this._pendingRemovals.push(id)
    }


    // just sever references
    dispose() {
        this.list = null
        this.hash = null
        this._map = null
        this._pendingRemovals.length = 0
    }


    // deletes removed objects from data structures
    flush() {
        for (var i = 0; i < this._pendingRemovals.length; i++) {
            var id = this._pendingRemovals[i]
            // removal might have been reversed, or already handled
            if (this.hash[id] !== null) continue
            removeElement(this, id)
        }
        this._pendingRemovals.length = 0
    }

}


/*
 * 
 *      actual remove / cleanup logic, fixes up data structures after removal
 * 
 * 
*/


function removeElement(data, id) {
    // current location of this element in the list
    var index = data._map[id]
    // for hash and map, just delete by id
    delete data.hash[id]
    delete data._map[id]
    // now splice - either by popping or by swapping with final element
    if (index === data.list.length - 1) {
        data.list.pop()
    } else {
        // swap last item with the one we're removing
        var swapped = data.list.pop()
        data.list[index] = swapped
        // need to fix _map for swapped item
        if (swapped === null || swapped[0] === null) {
            // slowest but rarest case - swapped item is ALSO pending removal
            var prevIndex = data.list.length
            for (var swapID in data._map) {
                if (data._map[swapID] === prevIndex) {
                    data._map[swapID] = index
                    return
                }
            }
        } else {
            var swappedID = swapped.__id || swapped[0].__id
            data._map[swappedID] = index
        }
    }
}




/***/ }),

/***/ "../../node_modules/events/events.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/events/events.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "../../node_modules/fast-voxel-raycast/index.js":
/*!***************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/fast-voxel-raycast/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function traceRay_impl( getVoxel,
	px, py, pz,
	dx, dy, dz,
	max_d, hit_pos, hit_norm) {
	
	// consider raycast vector to be parametrized by t
	//   vec = [px,py,pz] + t * [dx,dy,dz]
	
	// algo below is as described by this paper:
	// http://www.cse.chalmers.se/edu/year/2010/course/TDA361/grid.pdf
	
	var t = 0.0
		, floor = Math.floor
		, ix = floor(px) | 0
		, iy = floor(py) | 0
		, iz = floor(pz) | 0

		, stepx = (dx > 0) ? 1 : -1
		, stepy = (dy > 0) ? 1 : -1
		, stepz = (dz > 0) ? 1 : -1
		
	// dx,dy,dz are already normalized
		, txDelta = Math.abs(1 / dx)
		, tyDelta = Math.abs(1 / dy)
		, tzDelta = Math.abs(1 / dz)

		, xdist = (stepx > 0) ? (ix + 1 - px) : (px - ix)
		, ydist = (stepy > 0) ? (iy + 1 - py) : (py - iy)
		, zdist = (stepz > 0) ? (iz + 1 - pz) : (pz - iz)
		
	// location of nearest voxel boundary, in units of t 
		, txMax = (txDelta < Infinity) ? txDelta * xdist : Infinity
		, tyMax = (tyDelta < Infinity) ? tyDelta * ydist : Infinity
		, tzMax = (tzDelta < Infinity) ? tzDelta * zdist : Infinity

		, steppedIndex = -1
	
	// main loop along raycast vector
	while (t <= max_d) {
		
		// exit check
		var b = getVoxel(ix, iy, iz)
		if (b) {
			if (hit_pos) {
				hit_pos[0] = px + t * dx
				hit_pos[1] = py + t * dy
				hit_pos[2] = pz + t * dz
			}
			if (hit_norm) {
				hit_norm[0] = hit_norm[1] = hit_norm[2] = 0
				if (steppedIndex === 0) hit_norm[0] = -stepx
				if (steppedIndex === 1) hit_norm[1] = -stepy
				if (steppedIndex === 2) hit_norm[2] = -stepz
			}
			return b
		}
		
		// advance t to next nearest voxel boundary
		if (txMax < tyMax) {
			if (txMax < tzMax) {
				ix += stepx
				t = txMax
				txMax += txDelta
				steppedIndex = 0
			} else {
				iz += stepz
				t = tzMax
				tzMax += tzDelta
				steppedIndex = 2
			}
		} else {
			if (tyMax < tzMax) {
				iy += stepy
				t = tyMax
				tyMax += tyDelta
				steppedIndex = 1
			} else {
				iz += stepz
				t = tzMax
				tzMax += tzDelta
				steppedIndex = 2
			}
		}

	}
	
	// no voxel hit found
	if (hit_pos) {
		hit_pos[0] = px + t * dx
		hit_pos[1] = py + t * dy
		hit_pos[2] = pz + t * dz
	}
	if (hit_norm) {
		hit_norm[0] = hit_norm[1] = hit_norm[2] = 0
	}

	return 0

}


// conform inputs

function traceRay(getVoxel, origin, direction, max_d, hit_pos, hit_norm) {
	var px = +origin[0]
		, py = +origin[1]
		, pz = +origin[2]
		, dx = +direction[0]
		, dy = +direction[1]
		, dz = +direction[2]
		, ds = Math.sqrt(dx * dx + dy * dy + dz * dz)

	if (ds === 0) {
		throw new Error("Can't raycast along a zero vector")
	}

	dx /= ds
	dy /= ds
	dz /= ds
	if (typeof (max_d) === "undefined") {
		max_d = 64.0
	} else {
		max_d = +max_d
	}
	return traceRay_impl(getVoxel, px, py, pz, dx, dy, dz, max_d, hit_pos, hit_norm)
}

module.exports = traceRay

/***/ }),

/***/ "../../node_modules/file-extension/file-extension.js":
/*!********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/file-extension/file-extension.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! file-extension v4.0.5 | (c) silverwind | BSD license */


(function(m) {
  if (true) {
    module.exports = m();
  } else {}
})(function() {
  return function fileExtension(filename, opts) {
    if (!opts) opts = {};
    if (!filename) return "";
    var ext = (/[^./\\]*$/.exec(filename) || [""])[0];
    return opts.preserveCase ? ext : ext.toLowerCase();
  };
});


/***/ }),

/***/ "../../node_modules/game-inputs/inputs.js":
/*!*********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/game-inputs/inputs.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var vkey = __webpack_require__(/*! vkey */ "../../node_modules/vkey/index.js")
var EventEmitter = __webpack_require__(/*! events */ "../../node_modules/events/events.js").EventEmitter
// mousewheel polyfill borrowed directly from game-shell
var addMouseWheel = __webpack_require__(/*! ./lib/mousewheel-polyfill.js */ "../../node_modules/game-inputs/lib/mousewheel-polyfill.js")

module.exports = function (domElement, options) {
    return new Inputs(domElement, options)
}
module.exports.Inputs = Inputs

/*
 *   Simple inputs manager to abstract key/mouse inputs.
 *        Inspired by (and where applicable stealing code from) 
 *        game-shell: https://github.com/mikolalysenko/game-shell
 *  
 *  inputs.bind( 'move-right', 'D', '<right>' )
 *  inputs.bind( 'move-left',  'A' )
 *  inputs.unbind( 'move-left' )
 *  
 *  inputs.down.on( 'move-right',  function( binding, event ) {})
 *  inputs.up.on(   'move-right',  function( binding, event ) {})
 *
 *  inputs.state['move-right']  // true when corresponding keys are down
 *  inputs.state.dx             // mouse x movement since tick() was last called
 *  inputs.getBindings()        // [ 'move-right', 'move-left', ... ]
*/


function Inputs(element, opts) {

    // settings
    this.element = element || document
    opts = opts || {}
    this.preventDefaults = !!opts.preventDefaults
    this.stopPropagation = !!opts.stopPropagation
    this.allowContextMenu = !!opts.allowContextMenu
    this.disabled = !!opts.disabled

    // emitters
    this.down = new EventEmitter()
    this.up = new EventEmitter()

    // state object to be queried
    this.state = {
        dx: 0, dy: 0,
        scrollx: 0, scrolly: 0, scrollz: 0
    }

    // internal state
    this._keybindmap = {}       // { 'vkeycode' : [ 'binding', 'binding2' ] }
    this._keyStates = {}        // { 'vkeycode' : boolean }
    this._bindPressCounts = {}  // { 'binding' : int }

    // needed to work around a bug in Mac Chrome 75
    // https://bugs.chromium.org/p/chromium/issues/detail?id=977093
    this._ignoreMousemoveOnce = false

    // register for dom events
    this.initEvents()
}


/*
 *
 *   PUBLIC API 
 *
*/

Inputs.prototype.initEvents = function () {
    // keys
    window.addEventListener('keydown', onKeyEvent.bind(undefined, this, true), false)
    window.addEventListener('keyup', onKeyEvent.bind(undefined, this, false), false)
    // mouse buttons
    this.element.addEventListener("mousedown", onMouseEvent.bind(undefined, this, true), false)
    this.element.addEventListener("mouseup", onMouseEvent.bind(undefined, this, false), false)
    this.element.oncontextmenu = onContextMenu.bind(undefined, this)
    // treat dragstart like mouseup - idiotically, mouseup doesn't fire after a drag starts (!)
    this.element.addEventListener("dragstart", onMouseEvent.bind(undefined, this, false), false)
    // touch/mouse movement
    this.element.addEventListener("mousemove", onMouseMove.bind(undefined, this), false)
    this.element.addEventListener("touchmove", onMouseMove.bind(undefined, this), false)
    this.element.addEventListener("touchstart", onTouchStart.bind(undefined, this), false)
    this.element.addEventListener("touchend", onTouchEnd.bind(undefined, this), false)
    // scroll/mousewheel
    addMouseWheel(this.element, onMouseWheel.bind(undefined, this), false)
    // temp bug workaround, see above
    document.addEventListener("pointerlockchange", onLockChange.bind(undefined, this), false)
    document.addEventListener("mozpointerlockchange", onLockChange.bind(undefined, this), false)
}


// Usage:  bind( bindingName, vkeyCode, vkeyCode.. )
//    Note that inputs._keybindmap maps vkey codes to binding names
//    e.g. this._keybindmap['a'] = 'move-left'
Inputs.prototype.bind = function (binding) {
    for (var i = 1; i < arguments.length; ++i) {
        var vkeyCode = arguments[i]
        var arr = this._keybindmap[vkeyCode] || []
        if (arr.indexOf(binding) == -1) {
            arr.push(binding)
        }
        this._keybindmap[vkeyCode] = arr
    }
    this.state[binding] = !!this.state[binding]
}

// search out and remove all keycodes bound to a given binding
Inputs.prototype.unbind = function (binding) {
    for (var b in this._keybindmap) {
        var arr = this._keybindmap[b]
        var i = arr.indexOf(binding)
        if (i > -1) { arr.splice(i, 1) }
    }
}

// tick function - clears out cumulative mouse movement state variables
Inputs.prototype.tick = function () {
    this.state.dx = this.state.dy = 0
    this.state.scrollx = this.state.scrolly = this.state.scrollz = 0
}



Inputs.prototype.getBoundKeys = function () {
    var arr = []
    for (var b in this._keybindmap) { arr.push(b) }
    return arr
}



/*
 *
 *
 *      INTERNALS - DOM EVENT HANDLERS
 *
 *
*/


function onKeyEvent(inputs, wasDown, ev) {
    handleKeyEvent(ev.keyCode, vkey[ev.keyCode], wasDown, inputs, ev)
}

function onMouseEvent(inputs, wasDown, ev) {
    // simulate a code out of range of vkey
    var keycode = -1 - ev.button
    var vkeycode = '<mouse ' + (ev.button + 1) + '>'
    handleKeyEvent(keycode, vkeycode, wasDown, inputs, ev)
    return false
}

function onContextMenu(inputs) {
    if (!inputs.allowContextMenu) return false
}

function onMouseMove(inputs, ev) {
    // bug workaround, see top of file
    if (inputs._ignoreMousemoveOnce) {
        inputs._ignoreMousemoveOnce = false
        return
    }
    // for now, just populate the state object with mouse movement
    var dx = ev.movementX || ev.mozMovementX || 0,
        dy = ev.movementY || ev.mozMovementY || 0
    // ad-hoc experimental touch support
    if (ev.touches && (dx | dy) === 0) {
        var xy = getTouchMovement(ev)
        dx = xy[0]
        dy = xy[1]
    }
    inputs.state.dx += dx
    inputs.state.dy += dy
}

// experimental - for touch events, extract useful dx/dy
var lastTouchX = 0
var lastTouchY = 0
var lastTouchID = null

function onTouchStart(inputs, ev) {
    // Only start a new touch if there isn't one ongoing
    if (lastTouchID === null) {
        var touch = ev.changedTouches[0]
        lastTouchX = touch.clientX
        lastTouchY = touch.clientY
        lastTouchID = touch.identifier
    }
}

function onTouchEnd(inputs, ev) {
    // For the touchend event, changedTouches is a list of the touch points that have been removed from the surface
    var touches = ev.changedTouches
    for (var i = 0; i < touches.length; ++i) {
        if (touches[i].identifier === lastTouchID) {
            lastTouchID = null
        }
    }
}

function getTouchMovement(ev) {
    var touch
    var touches = ev.changedTouches
    for (var i = 0; i < touches.length; ++i) {
        if (touches[i].identifier == lastTouchID) touch = touches[i]
    }
    if (!touch) return [0, 0]
    var res = [touch.clientX - lastTouchX, touch.clientY - lastTouchY]
    lastTouchX = touch.clientX
    lastTouchY = touch.clientY
    return res
}

function onMouseWheel(inputs, ev) {
    // basically borrowed from game-shell
    var scale = 1
    switch (ev.deltaMode) {
        case 0: scale = 1; break  // Pixel
        case 1: scale = 12; break  // Line
        case 2:  // page
            // TODO: investigate when this happens, what correct handling is
            scale = inputs.element.clientHeight || window.innerHeight
            break
    }
    // accumulate state
    inputs.state.scrollx += ev.deltaX * scale
    inputs.state.scrolly += ev.deltaY * scale
    inputs.state.scrollz += (ev.deltaZ * scale) || 0
    return false
}

function onLockChange(inputs, ev) {
    var locked = document.pointerLockElement
        || document.mozPointerLockElement
        || null
    if (locked) inputs._ignoreMousemoveOnce = true
}




/*
 *
 *
 *   KEY BIND HANDLING
 *
 *
*/


function handleKeyEvent(keycode, vcode, wasDown, inputs, ev) {
    var arr = inputs._keybindmap[vcode]
    // don't prevent defaults if there's no binding
    if (!arr) { return }
    if (inputs.preventDefaults) ev.preventDefault()
    if (inputs.stopPropagation) ev.stopPropagation()

    // if the key's state has changed, handle an event for all bindings
    var currstate = inputs._keyStates[keycode]
    if (XOR(currstate, wasDown)) {
        // for each binding: emit an event, and update cached state information
        for (var i = 0; i < arr.length; ++i) {
            handleBindingEvent(arr[i], wasDown, inputs, ev)
        }
    }
    inputs._keyStates[keycode] = wasDown
}


function handleBindingEvent(binding, wasDown, inputs, ev) {
    // keep count of presses mapped by binding
    // (to handle two keys with the same binding pressed at once)
    var ct = inputs._bindPressCounts[binding] || 0
    ct += wasDown ? 1 : -1
    if (ct < 0) { ct = 0 } // shouldn't happen
    inputs._bindPressCounts[binding] = ct

    // emit event if binding's state has changed
    var currstate = inputs.state[binding]
    if (XOR(currstate, ct)) {
        var emitter = wasDown ? inputs.down : inputs.up
        if (!inputs.disabled) emitter.emit(binding, ev)
    }
    inputs.state[binding] = !!ct
}




/*
 *
 *
 *    HELPERS
 *
 *
*/


// how is this not part of Javascript?
function XOR(a, b) {
    return a ? !b : b
}






/***/ }),

/***/ "../../node_modules/game-inputs/lib/mousewheel-polyfill.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/game-inputs/lib/mousewheel-polyfill.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Adapted from here: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel?redirectlocale=en-US&redirectslug=DOM%2FMozilla_event_reference%2Fwheel
///@ts-nocheck

var prefix = "", _addEventListener, onwheel, support;

// detect event model
if ( window.addEventListener ) {
  _addEventListener = "addEventListener";
} else {
  _addEventListener = "attachEvent";
  prefix = "on";
}

// detect available wheel event
support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
          document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
          "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox

function _addWheelListener( elem, eventName, callback, useCapture ) {
  elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
    !originalEvent && ( originalEvent = window.event );

    // create a normalized event object
    var event = {
      // keep a ref to the original event object
      originalEvent: originalEvent,
      target: originalEvent.target || originalEvent.srcElement,
      type: "wheel",
      deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
      deltaX: 0,
      delatZ: 0,
      preventDefault: function() {
        originalEvent.preventDefault ?
          originalEvent.preventDefault() :
          originalEvent.returnValue = false;
      }
    };
    
    // calculate deltaY (and deltaX) according to the event
    if ( support == "mousewheel" ) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
      // Webkit also support wheelDeltaX
      originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
    } else {
      event.deltaY = originalEvent.detail;
    }

    // it's time to fire the callback
    return callback( event );
  }, useCapture || false );
}

module.exports = function( elem, callback, useCapture ) {
  _addWheelListener( elem, support, callback, useCapture );

  // handle MozMousePixelScroll in older Firefox
  if( support == "DOMMouseScroll" ) {
    _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
  }
};


/***/ }),

/***/ "../../node_modules/gl-vec3/add.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/add.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = add;

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0]
    out[1] = a[1] + b[1]
    out[2] = a[2] + b[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/angle.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/angle.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = angle

var fromValues = __webpack_require__(/*! ./fromValues */ "../../node_modules/gl-vec3/fromValues.js")
var normalize = __webpack_require__(/*! ./normalize */ "../../node_modules/gl-vec3/normalize.js")
var dot = __webpack_require__(/*! ./dot */ "../../node_modules/gl-vec3/dot.js")

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues(a[0], a[1], a[2])
    var tempB = fromValues(b[0], b[1], b[2])
 
    normalize(tempA, tempA)
    normalize(tempB, tempB)
 
    var cosine = dot(tempA, tempB)

    if(cosine > 1.0){
        return 0
    } else {
        return Math.acos(cosine)
    }     
}


/***/ }),

/***/ "../../node_modules/gl-vec3/ceil.js":
/*!***************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/ceil.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ceil

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0])
  out[1] = Math.ceil(a[1])
  out[2] = Math.ceil(a[2])
  return out
}


/***/ }),

/***/ "../../node_modules/gl-vec3/clone.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/clone.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = clone;

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new Float32Array(3)
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/copy.js":
/*!***************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/copy.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = copy;

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0]
    out[1] = a[1]
    out[2] = a[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/create.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/create.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = create;

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
    var out = new Float32Array(3)
    out[0] = 0
    out[1] = 0
    out[2] = 0
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/cross.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/cross.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = cross;

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2]

    out[0] = ay * bz - az * by
    out[1] = az * bx - ax * bz
    out[2] = ax * by - ay * bx
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/dist.js":
/*!***************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/dist.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./distance */ "../../node_modules/gl-vec3/distance.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/distance.js":
/*!*******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/distance.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = distance;

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),

/***/ "../../node_modules/gl-vec3/div.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/div.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./divide */ "../../node_modules/gl-vec3/divide.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/divide.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/divide.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = divide;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0]
    out[1] = a[1] / b[1]
    out[2] = a[2] / b[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/dot.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/dot.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dot;

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
}

/***/ }),

/***/ "../../node_modules/gl-vec3/epsilon.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/epsilon.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = 0.000001


/***/ }),

/***/ "../../node_modules/gl-vec3/equals.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/equals.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = equals

var EPSILON = __webpack_require__(/*! ./epsilon */ "../../node_modules/gl-vec3/epsilon.js")

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0]
  var a1 = a[1]
  var a2 = a[2]
  var b0 = b[0]
  var b1 = b[1]
  var b2 = b[2]
  return (Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)))
}


/***/ }),

/***/ "../../node_modules/gl-vec3/exactEquals.js":
/*!**********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/exactEquals.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = exactEquals

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2]
}


/***/ }),

/***/ "../../node_modules/gl-vec3/floor.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/floor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = floor

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0])
  out[1] = Math.floor(a[1])
  out[2] = Math.floor(a[2])
  return out
}


/***/ }),

/***/ "../../node_modules/gl-vec3/forEach.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/forEach.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = forEach;

var vec = __webpack_require__(/*! ./create */ "../../node_modules/gl-vec3/create.js")()

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
function forEach(a, stride, offset, count, fn, arg) {
        var i, l
        if(!stride) {
            stride = 3
        }

        if(!offset) {
            offset = 0
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length)
        } else {
            l = a.length
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i] 
            vec[1] = a[i+1] 
            vec[2] = a[i+2]
            fn(vec, vec, arg)
            a[i] = vec[0] 
            a[i+1] = vec[1] 
            a[i+2] = vec[2]
        }
        
        return a
}

/***/ }),

/***/ "../../node_modules/gl-vec3/fromValues.js":
/*!*********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/fromValues.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = fromValues;

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new Float32Array(3)
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/index.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  EPSILON: __webpack_require__(/*! ./epsilon */ "../../node_modules/gl-vec3/epsilon.js")
  , create: __webpack_require__(/*! ./create */ "../../node_modules/gl-vec3/create.js")
  , clone: __webpack_require__(/*! ./clone */ "../../node_modules/gl-vec3/clone.js")
  , angle: __webpack_require__(/*! ./angle */ "../../node_modules/gl-vec3/angle.js")
  , fromValues: __webpack_require__(/*! ./fromValues */ "../../node_modules/gl-vec3/fromValues.js")
  , copy: __webpack_require__(/*! ./copy */ "../../node_modules/gl-vec3/copy.js")
  , set: __webpack_require__(/*! ./set */ "../../node_modules/gl-vec3/set.js")
  , equals: __webpack_require__(/*! ./equals */ "../../node_modules/gl-vec3/equals.js")
  , exactEquals: __webpack_require__(/*! ./exactEquals */ "../../node_modules/gl-vec3/exactEquals.js")
  , add: __webpack_require__(/*! ./add */ "../../node_modules/gl-vec3/add.js")
  , subtract: __webpack_require__(/*! ./subtract */ "../../node_modules/gl-vec3/subtract.js")
  , sub: __webpack_require__(/*! ./sub */ "../../node_modules/gl-vec3/sub.js")
  , multiply: __webpack_require__(/*! ./multiply */ "../../node_modules/gl-vec3/multiply.js")
  , mul: __webpack_require__(/*! ./mul */ "../../node_modules/gl-vec3/mul.js")
  , divide: __webpack_require__(/*! ./divide */ "../../node_modules/gl-vec3/divide.js")
  , div: __webpack_require__(/*! ./div */ "../../node_modules/gl-vec3/div.js")
  , min: __webpack_require__(/*! ./min */ "../../node_modules/gl-vec3/min.js")
  , max: __webpack_require__(/*! ./max */ "../../node_modules/gl-vec3/max.js")
  , floor: __webpack_require__(/*! ./floor */ "../../node_modules/gl-vec3/floor.js")
  , ceil: __webpack_require__(/*! ./ceil */ "../../node_modules/gl-vec3/ceil.js")
  , round: __webpack_require__(/*! ./round */ "../../node_modules/gl-vec3/round.js")
  , scale: __webpack_require__(/*! ./scale */ "../../node_modules/gl-vec3/scale.js")
  , scaleAndAdd: __webpack_require__(/*! ./scaleAndAdd */ "../../node_modules/gl-vec3/scaleAndAdd.js")
  , distance: __webpack_require__(/*! ./distance */ "../../node_modules/gl-vec3/distance.js")
  , dist: __webpack_require__(/*! ./dist */ "../../node_modules/gl-vec3/dist.js")
  , squaredDistance: __webpack_require__(/*! ./squaredDistance */ "../../node_modules/gl-vec3/squaredDistance.js")
  , sqrDist: __webpack_require__(/*! ./sqrDist */ "../../node_modules/gl-vec3/sqrDist.js")
  , length: __webpack_require__(/*! ./length */ "../../node_modules/gl-vec3/length.js")
  , len: __webpack_require__(/*! ./len */ "../../node_modules/gl-vec3/len.js")
  , squaredLength: __webpack_require__(/*! ./squaredLength */ "../../node_modules/gl-vec3/squaredLength.js")
  , sqrLen: __webpack_require__(/*! ./sqrLen */ "../../node_modules/gl-vec3/sqrLen.js")
  , negate: __webpack_require__(/*! ./negate */ "../../node_modules/gl-vec3/negate.js")
  , inverse: __webpack_require__(/*! ./inverse */ "../../node_modules/gl-vec3/inverse.js")
  , normalize: __webpack_require__(/*! ./normalize */ "../../node_modules/gl-vec3/normalize.js")
  , dot: __webpack_require__(/*! ./dot */ "../../node_modules/gl-vec3/dot.js")
  , cross: __webpack_require__(/*! ./cross */ "../../node_modules/gl-vec3/cross.js")
  , lerp: __webpack_require__(/*! ./lerp */ "../../node_modules/gl-vec3/lerp.js")
  , random: __webpack_require__(/*! ./random */ "../../node_modules/gl-vec3/random.js")
  , transformMat4: __webpack_require__(/*! ./transformMat4 */ "../../node_modules/gl-vec3/transformMat4.js")
  , transformMat3: __webpack_require__(/*! ./transformMat3 */ "../../node_modules/gl-vec3/transformMat3.js")
  , transformQuat: __webpack_require__(/*! ./transformQuat */ "../../node_modules/gl-vec3/transformQuat.js")
  , rotateX: __webpack_require__(/*! ./rotateX */ "../../node_modules/gl-vec3/rotateX.js")
  , rotateY: __webpack_require__(/*! ./rotateY */ "../../node_modules/gl-vec3/rotateY.js")
  , rotateZ: __webpack_require__(/*! ./rotateZ */ "../../node_modules/gl-vec3/rotateZ.js")
  , forEach: __webpack_require__(/*! ./forEach */ "../../node_modules/gl-vec3/forEach.js")
}


/***/ }),

/***/ "../../node_modules/gl-vec3/inverse.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/inverse.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = inverse;

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0]
  out[1] = 1.0 / a[1]
  out[2] = 1.0 / a[2]
  return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/len.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/len.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./length */ "../../node_modules/gl-vec3/length.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/length.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/length.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = length;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),

/***/ "../../node_modules/gl-vec3/lerp.js":
/*!***************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/lerp.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = lerp;

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2]
    out[0] = ax + t * (b[0] - ax)
    out[1] = ay + t * (b[1] - ay)
    out[2] = az + t * (b[2] - az)
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/max.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/max.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = max;

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0])
    out[1] = Math.max(a[1], b[1])
    out[2] = Math.max(a[2], b[2])
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/min.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = min;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0])
    out[1] = Math.min(a[1], b[1])
    out[2] = Math.min(a[2], b[2])
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/mul.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/mul.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./multiply */ "../../node_modules/gl-vec3/multiply.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/multiply.js":
/*!*******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/multiply.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = multiply;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0]
    out[1] = a[1] * b[1]
    out[2] = a[2] * b[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/negate.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/negate.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = negate;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0]
    out[1] = -a[1]
    out[2] = -a[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/normalize.js":
/*!********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/normalize.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalize;

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    var len = x*x + y*y + z*z
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len)
        out[0] = a[0] * len
        out[1] = a[1] * len
        out[2] = a[2] * len
    }
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/random.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/random.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = random;

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
    scale = scale || 1.0

    var r = Math.random() * 2.0 * Math.PI
    var z = (Math.random() * 2.0) - 1.0
    var zScale = Math.sqrt(1.0-z*z) * scale

    out[0] = Math.cos(r) * zScale
    out[1] = Math.sin(r) * zScale
    out[2] = z * scale
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/rotateX.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/rotateX.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateX;

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c){
    var by = b[1]
    var bz = b[2]

    // Translate point to the origin
    var py = a[1] - by
    var pz = a[2] - bz

    var sc = Math.sin(c)
    var cc = Math.cos(c)

    // perform rotation and translate to correct position
    out[0] = a[0]
    out[1] = by + py * cc - pz * sc
    out[2] = bz + py * sc + pz * cc

    return out
}


/***/ }),

/***/ "../../node_modules/gl-vec3/rotateY.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/rotateY.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateY;

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c){
    var bx = b[0]
    var bz = b[2]

    // translate point to the origin
    var px = a[0] - bx
    var pz = a[2] - bz
    
    var sc = Math.sin(c)
    var cc = Math.cos(c)
  
    // perform rotation and translate to correct position
    out[0] = bx + pz * sc + px * cc
    out[1] = a[1]
    out[2] = bz + pz * cc - px * sc
  
    return out
}


/***/ }),

/***/ "../../node_modules/gl-vec3/rotateZ.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/rotateZ.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = rotateZ;

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c){
    var bx = b[0]
    var by = b[1]

    //Translate point to the origin
    var px = a[0] - bx
    var py = a[1] - by
  
    var sc = Math.sin(c)
    var cc = Math.cos(c)

    // perform rotation and translate to correct position
    out[0] = bx + px * cc - py * sc
    out[1] = by + px * sc + py * cc
    out[2] = a[2]
  
    return out
}


/***/ }),

/***/ "../../node_modules/gl-vec3/round.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/round.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = round

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0])
  out[1] = Math.round(a[1])
  out[2] = Math.round(a[2])
  return out
}


/***/ }),

/***/ "../../node_modules/gl-vec3/scale.js":
/*!****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/scale.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scale;

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b
    out[1] = a[1] * b
    out[2] = a[2] * b
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/scaleAndAdd.js":
/*!**********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/scaleAndAdd.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = scaleAndAdd;

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale)
    out[1] = a[1] + (b[1] * scale)
    out[2] = a[2] + (b[2] * scale)
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/set.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/set.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = set;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/sqrDist.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/sqrDist.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./squaredDistance */ "../../node_modules/gl-vec3/squaredDistance.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/sqrLen.js":
/*!*****************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/sqrLen.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./squaredLength */ "../../node_modules/gl-vec3/squaredLength.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/squaredDistance.js":
/*!**************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/squaredDistance.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = squaredDistance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2]
    return x*x + y*y + z*z
}

/***/ }),

/***/ "../../node_modules/gl-vec3/squaredLength.js":
/*!************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/squaredLength.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = squaredLength;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1],
        z = a[2]
    return x*x + y*y + z*z
}

/***/ }),

/***/ "../../node_modules/gl-vec3/sub.js":
/*!**************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/sub.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./subtract */ "../../node_modules/gl-vec3/subtract.js")


/***/ }),

/***/ "../../node_modules/gl-vec3/subtract.js":
/*!*******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/subtract.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = subtract;

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0]
    out[1] = a[1] - b[1]
    out[2] = a[2] - b[2]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/transformMat3.js":
/*!************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/transformMat3.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transformMat3;

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2]
    out[0] = x * m[0] + y * m[3] + z * m[6]
    out[1] = x * m[1] + y * m[4] + z * m[7]
    out[2] = x * m[2] + y * m[5] + z * m[8]
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/transformMat4.js":
/*!************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/transformMat4.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transformMat4;

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2],
        w = m[3] * x + m[7] * y + m[11] * z + m[15]
    w = w || 1.0
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w
    return out
}

/***/ }),

/***/ "../../node_modules/gl-vec3/transformQuat.js":
/*!************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/gl-vec3/transformQuat.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = transformQuat;

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx
    return out
}

/***/ }),

/***/ "../../node_modules/iota-array/iota.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/iota-array/iota.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota

/***/ }),

/***/ "../../node_modules/is-buffer/index.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/is-buffer/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "../../node_modules/micro-game-shell/src/micro-game-shell.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/micro-game-shell/src/micro-game-shell.js ***!
  \****************************************************************************************************/
/*! exports provided: MicroGameShell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MicroGameShell", function() { return MicroGameShell; });



/*
 * 
 * 
 *      base class and API
 * 
 * 
*/

class MicroGameShell {

    constructor(domElement, pollTime = 10) {
        // settings
        this.stickyPointerLock = false
        this.stickyFullscreen = false

        this.tickRate = 30
        this.maxRenderRate = 0

        // API
        this.pointerLock = false
        this.fullscreen = false

        // for client to override
        this.onTick = function (dt) { }
        this.onRender = function () { }

        this.onInit = function () { }
        this.onResize = function () { }
        this.onPointerLockChanged = function (hasPL) { }
        this.onFullscreenChanged = function (hasFS) { }

        // init
        domReady(() => {
            setupTimers(this, pollTime)
            setupDomElement(this, domElement)
            this.onInit()
        })
    }
}





/*
 * 
 *      tick- and render events
 * 
*/

function setupTimers(shell, pollTime) {
    shell._nowObject = performance || Date
    shell._lastTick = 0
    shell._renderAccum = 0
    shell._rt = 0

    shell._frameCB = frameHandler.bind(null, shell)
    requestAnimationFrame(shell._frameCB)
    if (pollTime > 0) {
        shell._intervalCB = intervalHandler.bind(null, shell)
        shell._interval = setInterval(shell._intervalCB, pollTime)
    }
}


function intervalHandler(shell) {
    var now = shell._nowObject.now()
    var tickDur = 1000 / shell.tickRate
    var nextTick = shell._lastTick + tickDur
    if (now < nextTick) return
    // never fall more than one tick behind
    shell._lastTick = Math.max(now - tickDur, nextTick)
    shell.onTick(tickDur)
}

function frameHandler(shell) {
    requestAnimationFrame(shell._frameCB)
    intervalHandler(shell)
    var now = shell._nowObject.now()
    var dt = now - shell._rt
    shell._rt = now
    if (shell.maxRenderRate > 0) {
        shell._renderAccum += dt
        var frameDur = 1000 / shell.maxRenderRate
        if (shell._renderAccum < frameDur) return
        shell._renderAccum = Math.min(shell._renderAccum - frameDur, frameDur)
    }
    var tickDur = 1000 / shell.tickRate
    var framePart = (now - shell._lastTick) / tickDur
    shell.onRender(dt, framePart, tickDur)
}






/*
 * 
 *      DOM element and sticky fullscreen/pointerlock
 * 
*/

function setupDomElement(shell, el) {
    if (!el) return

    var hasPL = false
    var hasFS = false

    // track whether we actually have PL/FS, and send events
    document.addEventListener('pointerlockchange', ev => {
        hasPL = (document.pointerLockElement === el)
        shell.onPointerLockChanged(hasPL)
    })
    document.addEventListener('fullscreenchange', ev => {
        hasFS = (document.fullscreenElement === el)
        shell.onFullscreenChanged(hasFS)
    })


    // decorate shell with getter/setters that request FS/PL
    Object.defineProperty(shell, 'pointerLock', {
        get: () => hasPL,
        set: (want) => {
            if (want && !hasPL) {
                el.requestPointerLock()
            } else if (hasPL && !want) {
                document.exitPointerLock()
            }
        }
    })
    Object.defineProperty(shell, 'fullscreen', {
        get: () => hasFS,
        set: (want) => {
            if (want && !hasFS) {
                el.requestFullscreen()
            } else if (hasFS && !want) {
                document.exitFullscreen()
            }
        }
    })


    // stickiness via click handler
    el.addEventListener('click', ev => {
        if (shell.stickyPointerLock && !hasPL) {
            el.requestPointerLock()
        }
        if (shell.stickyFullscreen && !hasFS) {
            el.requestFullscreen()
        }
    })


    // resize events via ResizeObserver
    var resizeHandler = () => shell.onResize()
    if (window.ResizeObserver) {
        var observer = new ResizeObserver(resizeHandler)
        observer.observe(el)
    } else {
        window.addEventListener('resize', resizeHandler)
    }
}





/*
 * 
 *      util 
 * 
*/

var domReady = (fn) => {
    if (document.readyState === 'loading') {
        var handler = () => {
            document.removeEventListener('readystatechange', handler)
            fn()
        }
        document.addEventListener('readystatechange', handler)
    } else {
        setTimeout(fn, 1)
    }
}


/***/ }),

/***/ "../../node_modules/murmur-numbers/index.js":
/*!***********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/murmur-numbers/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = makeMurmur()


function makeMurmur() {

    var seed = 123
    var c1 = 0xcc9e2d51
    var c2 = 0x1b873593
    var maxInt = Math.pow(2, 32)

    return function murmur32() {

        var numargs = arguments.length
        var h1 = seed

        for (var i = 0; i < numargs; i++) {
            var k1 = arguments[i] | 0

            k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff
            k1 = (k1 << 15) | (k1 >>> 17)
            k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff

            h1 ^= k1
            h1 = (h1 << 13) | (h1 >>> 19)
            var h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff
            h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16))
        }

        h1 ^= numargs

        h1 ^= h1 >>> 16
        h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff
        h1 ^= h1 >>> 13
        h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff
        h1 ^= h1 >>> 16

        return (h1 >>> 0) / maxInt
    }
}




/***/ }),

/***/ "../../node_modules/ndarray/ndarray.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/ndarray/ndarray.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var iota = __webpack_require__(/*! iota-array */ "../../node_modules/iota-array/iota.js")
var isBuffer = __webpack_require__(/*! is-buffer */ "../../node_modules/is-buffer/index.js")

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")

  if(dimension === -1) {
    //Special case for trivial arrays
    var code =
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]

  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")

  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")

  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")

  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")

  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(isBuffer(data)) {
    return "buffer"
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
      case "[object BigInt64Array]":
        return "bigint64"
      case "[object BigUint64Array]":
        return "biguint64"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "bigint64": [],
  "biguint64": [],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor


/***/ }),

/***/ "../../node_modules/noa-engine/package.json":
/*!***********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/package.json ***!
  \***********************************************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, dependencies, deprecated, description, devDependencies, files, homepage, keywords, license, main, name, peerDependencies, repository, scripts, typings, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"noa-engine\",\"_id\":\"noa-engine@0.30.0\",\"_inBundle\":false,\"_integrity\":\"sha512-CaopwdFJdLLixQ2sle6/9HXfcqnJD5QYN73zsA1/+LoVAWb3bEHduqSj8u6VR1ayNh+6UD5i1KxHsUZWbFNXRQ==\",\"_location\":\"/noa-engine\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"noa-engine\",\"name\":\"noa-engine\",\"escapedName\":\"noa-engine\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/noa-engine/-/noa-engine-0.30.0.tgz\",\"_shasum\":\"e94d8de14621d751a00ecbb3454414300c90d8f4\",\"_spec\":\"noa-engine\",\"_where\":\"C:\\\\Users\\\\nabil\\\\OneDrive\\\\Bureau\\\\NEWGAME\",\"author\":{\"name\":\"Andy Hall\",\"url\":\"https://fenomas.com\"},\"bugs\":{\"url\":\"https://github.com/andyhall/noa/issues\"},\"bundleDependencies\":false,\"dependencies\":{\"aabb-3d\":\"github:andyhall/aabb-3d\",\"box-intersect\":\"github:andyhall/box-intersect\",\"ent-comp\":\"^0.10.1\",\"events\":\"^3.3.0\",\"fast-voxel-raycast\":\"^0.1.1\",\"game-inputs\":\"^0.4.0\",\"gl-vec3\":\"^1.1.3\",\"micro-game-shell\":\"^0.2.0\",\"ndarray\":\"^1.0.19\",\"voxel-aabb-sweep\":\"^0.5.0\",\"voxel-physics-engine\":\"^0.11.0\"},\"deprecated\":false,\"description\":\"Experimental voxel game engine\",\"devDependencies\":{\"eslint\":\"^7.26.0\",\"js-beautify\":\"^1.13.13\",\"typedoc\":\"^0.20.36\",\"typedoc-neo-theme\":\"^1.1.1\",\"typescript\":\"4.2\"},\"files\":[\"/src\",\"/dist\"],\"homepage\":\"https://github.com/andyhall/noa#readme\",\"keywords\":[\"voxel\",\"voxels\",\"game\",\"engine\",\"game-engine\"],\"license\":\"MIT\",\"main\":\"src/index.js\",\"name\":\"noa-engine\",\"peerDependencies\":{\"@babylonjs/core\":\"^4.2.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/andyhall/noa.git\"},\"scripts\":{\"build\":\"tsc; typedoc\",\"docs\":\"typedoc\",\"types\":\"tsc\"},\"typings\":\"dist/src/index.d.ts\",\"version\":\"0.30.0\"}");

/***/ }),

/***/ "../../node_modules/noa-engine/src/components sync \\.js$":
/*!*************************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components sync nonrecursive \.js$ ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./aPlus.js": "../../node_modules/noa-engine/src/components/aPlus.js",
	"./collideEntities.js": "../../node_modules/noa-engine/src/components/collideEntities.js",
	"./collideTerrain.js": "../../node_modules/noa-engine/src/components/collideTerrain.js",
	"./entLook.js": "../../node_modules/noa-engine/src/components/entLook.js",
	"./entMove.js": "../../node_modules/noa-engine/src/components/entMove.js",
	"./fadeOnZoom.js": "../../node_modules/noa-engine/src/components/fadeOnZoom.js",
	"./followsEntity.js": "../../node_modules/noa-engine/src/components/followsEntity.js",
	"./info.js": "../../node_modules/noa-engine/src/components/info.js",
	"./mesh.js": "../../node_modules/noa-engine/src/components/mesh.js",
	"./movement.js": "../../node_modules/noa-engine/src/components/movement.js",
	"./physics.js": "../../node_modules/noa-engine/src/components/physics.js",
	"./position.js": "../../node_modules/noa-engine/src/components/position.js",
	"./receivesInputs.js": "../../node_modules/noa-engine/src/components/receivesInputs.js",
	"./rtcMove.js": "../../node_modules/noa-engine/src/components/rtcMove.js",
	"./shadow.js": "../../node_modules/noa-engine/src/components/shadow.js",
	"./smoothCamera.js": "../../node_modules/noa-engine/src/components/smoothCamera.js",
	"./testaPlus.js": "../../node_modules/noa-engine/src/components/testaPlus.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../node_modules/noa-engine/src/components sync \\.js$";

/***/ }),

/***/ "../../node_modules/noa-engine/src/components/aPlus.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/aPlus.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'aPlus',

        order: 100,

        state: {
            mesh: null,
			dist:0,
			entpos:null,
			body:null,
			walkcycle:0,
			wildcard:{},
			num: 0,
			target:[3,1,1],
			init:false,
			startPos:null,
			finaldist:0,
			again:false,
			speed:4,
            check:null,
			clearnum:0,
			fight:false,
			plbody:null,
			simpAngle:0,
			reseting:false
        },





        onAdd: function (eid, state) {
            state.entpos=noa.ents.getState(eid, 'position').position
		    state.body = noa.ents.getPhysicsBody(eid)
			state.plbody=	noa.ents.getPhysicsBody(noa.playerEntity)
			
			
				state.body.friction=0
				state.body.mass=0
				setTimeout(function(){	
				console.log(state.startPos)
			     state.target=noa.ents.getState(noa.playerEntity, 'position').position
			     state.startPos=[Math.round(state.entpos[0]),Math.round(state.entpos[1]),Math.round(state.entpos[2])]
				 state.check(state.startPos[0],state.startPos[1],state.startPos[2])

					}, 5000);
				
			function diff (a, b){
				if(a > b){
                 return a - b;
				}else{
                 return  b - a;

                }					
			
			}
						
			function getHighestBlock(x,t,z) {
	for (var y = t+10; y >= -100; y --) {
		var val = noa.world.getBlockID(x, y, z)
		if (val != 0 && val != blocks['path']) return {level: Math.round(y), block: val}
	}
	return null
}
					
					
					state.check=function check(e,t,i){
						
						
						
						if(state.body.resting[1]!==-1){
							
							//console.log('error error ')
							
							return;
						}
						 //noa.setBlock(0,e, t, i)
						state.startPos=[e,t,i]
					
						var result=null
						
						if(state.init){
							return;
						}
							if(state.clearnum>25){
							state.init=true
							
							
						}
						
						if(JSON.stringify([e,t,i])==JSON.stringify(state.target)){
							state.init=true
							//console.log(state.wildcard)
							
						}
					
						var num=1000
						
						   var r = noa.world.getBlockID(e - 1, t, i),
						       
							
                                  o = noa.world.getBlockID(e + 1, t, i),
								 
								    
                                a = noa.world.getBlockID(e, t, i + 1),
								
								
								
                                s = noa.world.getBlockID(e, t, i - 1),
								 
								 
								 
								 rz=noa.world.getBlockID(e - 1, t, i+1),
								 
								
								 oz=noa.world.getBlockID(e + 1, t, i+1),
								
								 az=noa.world.getBlockID(e - 1, t, i-1),
								 sz=noa.world.getBlockID(e + 1, t, i-1);
								 
								 
								
									 
									 
									 
									 if(rz==0 || rz!==0 ){
									 
									 var k=getHighestBlock(e -1, t, i+1)
									 
									
												 var squid=getdistance(state.startPos,[e -1, k.level+1, i+1])
												 var squid2=getdistance(state.target,[e -1, k.level+1, i+1])
												 
												 
												 
												  if((squid+squid2)<num){
													 num=squid+squid2
													 
													 result=[Math.round(e -1), k.level+1, Math.round(i+1)]
													 //noa.setBlock(blocks['stone'],result[0], result[1], result[2])
													
												 }
												 
									 
									 
										
									 
								 }
								 
								
								 
								 if(oz==0 || oz!==0 ){
									 
									 	 var k=getHighestBlock(e +1, t, i+1)
										 
								
												 var squid=getdistance(state.startPos,[e +1, k.level+1, i+1])
												 var squid2=getdistance(state.target,[e +1,k.level+1, i+1])
												 
												  if((squid+squid2)<num){
													 num=squid+squid2
													 
													 result=[Math.round(e +1), k.level+1, Math.round(i+1)]
													 //noa.setBlock(blocks['stone'],result[0], result[1], result[2])
													
												 }
										 
									 
										
									 
								 }
								 
							
								 
								 if(az==0 || az!==0  ){
									 
									   var k=getHighestBlock(e -1, t, i-1)
									   
									   
									   
												 var squid=getdistance(state.startPos,[e -1, k.level+1, i-1])
												 var squid2=getdistance(state.target,[e -1, k.level+1, i-1])
												 
												  if((squid+squid2)<num){
													 num=squid+squid2
													 
													 result=[Math.round(e-1), k.level+1, Math.round(i-1)]
													// noa.setBlock(blocks['stone'],result[0], result[1], result[2])
												 }
												 
									   
									 
									
									 
								 }
								 
								  if(sz==0 || sz!==0){
									  
									  var k=getHighestBlock(e +1, t, i-1)
									  
									  
									  
									  
									 var squid=getdistance(state.startPos,[e +1, k.level+1, i-1])
									 var squid2=getdistance(state.target,[e +1,k.level+1, i-1])
									 
									  if((squid+squid2)<num){
										 num=squid+squid2
										 
										 result=[Math.round(e+1), k.level+1, Math.round(i-1)]
										 
										 // noa.setBlock(blocks['stone'],result[0], result[1], result[2])
										
									 }
									 
									  
									 
								  }
									 
								 
								
								
                           
							
							   if(r==0 || r!==0 ){
								var k=getHighestBlock(e -1, t, i)
								 
								
							
								
								
										var squid=getdistance(state.startPos,[e -1, k.level+1, i])
										 var squid2=getdistance(state.target,[e -1, k.level+1, i])
										 
										 if((squid+squid2)<num){
											 num=squid+squid2
											 
											 result=[Math.round(e -1), k.level+1, Math.round(i)]
											
										 }
								 
								
								 
								
								
							}
							
								
								 
								 
						
							
						
                            if (o == 0 || o!==0 ) {
								
								var k=getHighestBlock(e + 1, t, i)
								
							
									var squid=getdistance(state.startPos,[e + 1, k.level+1, i])
									 var squid2=getdistance(state.target,[e + 1, k.level+1, i])
									 
									 if((squid+squid2)<num){
										 num=squid+squid2
										 
										 result=[Math.round(e + 1), k.level+1,Math.round( i)]
										
									 }
								 
								
								 
								
                            }
							
						
					
							
							
							
						
                            if (a == 0 || a!==0) {
								
								var k=getHighestBlock(e , t+3, i+1)
									
							
								
								 var squid=getdistance(state.startPos,[e ,k.level+1, i+1])
								 var squid2=getdistance(state.target,[e ,  k.level+1, i+1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[Math.round(e) ,  k.level+1, Math.round(i+1)]
									 
							
								 }
								 
							
								 
								

                            }
							
							
							
							
							
                            if (s == 0 || s!==0) {
								
								
								var k=getHighestBlock(e , t+2, i-1)
								
										 var squid=getdistance(state.startPos,[e , k.level+1, i-1])
										 var squid2=getdistance(state.target,[e , k.level+1, i-1])
										 
										 if((squid+squid2)<num){
											 num=squid+squid2
											 
											 result=[Math.round(e) , k.level+1,Math.round( i-1)]
											
										 }
										 
								
								 
								
									
								}
								
								
								
									
                      
							
								
								if(result!==null){
								
								if (!Object.values(state.wildcard).includes(state.clearnum)) {
                                 //   noa.setBlock(blocks['path'],result[0], result[1], result[2])
									
								   if(JSON.stringify(result)!==JSON.stringify(state.startPos)){
										
										
										//if(state.clearnum>1){
										//	if(diff(result[1],state.wildcard[state.clearnum][1])<=1){
												state.wildcard[state.clearnum]=result
											//}
										
								
								state.clearnum++
									
								
							
									}
								}
								
								 var end=getdistance(state.target,result)
								if(end<1){
									//state.init=true
								//	console.log(state.wildcard)
								}
								
								
									 check(result[0],result[1],result[2])
								}else{
									//
									///state.init=true
									//console.log(state.wildcard)
								}
								
						
						
					}
				
				  function getdistance (playerMesh,target){
                                        var dblDistanceX = playerMesh[0] - target[0];
										var dblDistanceY = playerMesh[1] - target[1];
										var dblDistanceZ = playerMesh[2] - target[2];
										
								var realDistance=Math.sqrt((dblDistanceX * dblDistanceX) + (dblDistanceY * dblDistanceY) + (dblDistanceZ * dblDistanceZ));
								return  realDistance;
							}
							
							
				
				
        },


        onRemove: function (eid, state) {
           
		   
        },



        renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
				
				 state.finaldist=getdistance(state.target,state.entpos)
				 
				 state.simpAngle=lookat(state.target,state.entpos)
				 if(state.body.resting[1]==-1){
					 state.body.mass=0
					 
				 }
				 if(state.body.mass==0){
					 state.init=true
					 
				 }
				 if(noa.world.getBlockSolidity(Math.round(state.entpos[0]), Math.round(state.entpos[1]-1), Math.round(state.entpos[2]))==false){
					 /*state.body.mass=1
					state.init=false
					
					  for (const key in state.wildcard){
								if(noa.world.getBlockID(state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])==blocks['path']){
									noa.setBlock(0,state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])
								}
					  }
					
					//setTimeout(function(){ 
						state.num=0
						state.wildcard={}
						state.clearnum=0
						state.check(state.entpos[0],state.entpos[1],state.entpos[2])*/
					 
				 }
				  if(noa.world.getBlockSolidity(Math.round(state.entpos[0]), Math.round(state.entpos[1]), Math.round(state.entpos[2]))==true){
					// state.body.mass=1
					 
					 //if(state.body.resting[1]==-1){
					 state.body.applyImpulse([0,1,0])
					// }
					 
				 }
				 
				 if(state.finaldist>15){
					 if(!state.reseting){
					  state.body.mass=1
					
					
					  for (const key in state.wildcard){
								if(noa.world.getBlockID(state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])==blocks['path']){
									noa.setBlock(0,state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])
								}
					  }
					
					//setTimeout(function(){ 
					state.init=false
						state.num=0
						state.wildcard={}
						state.clearnum=0
						state.target=[state.entpos[0]+(Math.random()*20)-10,state.entpos[1],state.entpos[2]+(Math.random()*20)-10]
						state.check(state.entpos[0],state.entpos[1],state.entpos[2])
						state.reseting=true
						
					}
					 
				 }{
					state.reseting=false 
				 }
				 
	
				 
			    	if(state.finaldist<2){
						/*state.fight=true
						console.log('coolio dude')
						state.speed=0
						
						if(state.plbody.resting[1]==-1){
					state.plbody.applyImpulse([-Math.sin(state.angle),3,-Math.cos(state.angle)])
						}*/
					
						
						
						
						
					}else{
					
						state.fight=false
					}
		        
				if(!state.init){
					
					
					return;
				}
					move()
					
				if(state.wildcard[state.num]==undefined){
					
					if(state.body.resting[1]==-1){
					
					state.init=false
					
					//setTimeout(function(){ 
					 if(state.finaldist>15){
					state.target=[state.entpos[0]+(Math.random()*20)-10,state.entpos[1],state.entpos[2]+(Math.random()*20)-10]
					 }else{
						 state.target=noa.ents.getState(noa.playerEntity, 'position').position
					 }
						state.num=0
						state.wildcard={}
						state.clearnum=0
						state.check(state.entpos[0],state.entpos[1],state.entpos[2])
						
						//}, 3000);
					}
					
					return;
				}
			    
				 state.dist=getdistance([state.wildcard[state.num][0]+0.5,state.wildcard[state.num][1],state.wildcard[state.num][2]+0.5],state.entpos)
				 
				 state.angle=lookat([state.wildcard[state.num][0]+0.5,state.wildcard[state.num][1],state.wildcard[state.num][2]+0.5],state.entpos)
				 
				 state.mesh.rotation.y=state.angle+Math.PI
				 
		
				// if(state.dist>0.5){
					
					 if(state.dist>0.02){
					 if(/*diff(state.entpos[1],state.wildcard[state.num][1])>0.5 &&*/ state.entpos[1]-state.wildcard[state.num][1]<-0.5){
						
								var pos=noa.ents.getState(id,'position').position
							  var newPos=[state.wildcard[state.num][0]+0.5,state.wildcard[state.num][1]+1,state.wildcard[state.num][2]+0.5]
								var mover = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()	
								gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.lerp(mover, pos, newPos, 0.02)
							  noa.entities.setPosition(id,mover);
							  
					 }	
					 else{
								var pos=noa.ents.getState(id,'position').position
							  var newPos=[state.wildcard[state.num][0]+0.5,state.wildcard[state.num][1],state.wildcard[state.num][2]+0.5]
								 var mover = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()	
								gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.lerp(mover, pos, newPos, 0.02)
							  noa.entities.setPosition(id,mover);
				  
					 }
						 
					 }
				   
				 
				 
				  if(diff(state.entpos[1],state.wildcard[state.num][1])>1.2){
					// state.body.mass=1
					  for (const key in state.wildcard){
								if(noa.world.getBlockID(state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])==blocks['path']){
									noa.setBlock(0,state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])
								}
					  }
					  state.init=false
							state.num=0
						state.wildcard={}
						state.clearnum=0
						state.check(state.entpos[0],state.entpos[1],state.entpos[2])
				  }
						
				/* if(state.dist <1.5){
					
					 
					
					 	var a =   clamp(- Math.sin(state.angle), -0.05, 0.05),
						     c =   clamp(- Math.cos(state.angle), -0.05, 0.05)
                      // clamp(- Math.sin(state.angle), -0.35, 0.35)
					 state.body.applyForce([a,0,c])
			
					
					
				 }*/
				 
             
			   function getdistance (playerMesh,target){
                                        var dblDistanceX = playerMesh[0] - target[0];
										var dblDistanceY = playerMesh[1] - target[1];
										var dblDistanceZ = playerMesh[2] - target[2];
										
								var realDistance=Math.sqrt((dblDistanceX * dblDistanceX) + (dblDistanceY * dblDistanceY) + (dblDistanceZ * dblDistanceZ));
								return  realDistance;
							}
					
			
					   function lookat(objecttarget,objectlooker){
	
						var direction=Math.atan2(objectlooker[0]-objecttarget[0],objectlooker[2]-objecttarget[2])
						return direction;
					}
					
					if(state.dist<1){
					
						//var pos=noa.ents.getState(id,'position').position
						if(noa.world.getBlockSolidity(state.wildcard[state.num][0],state.wildcard[state.num][1],state.wildcard[state.num][2])==true){
						
				
								for (const key in state.wildcard){
								if(noa.world.getBlockID(state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])==blocks['path']){
									noa.setBlock(0,state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])
								}
							}
							state.init=false
							state.num=0
						state.wildcard={}
						state.clearnum=0
						state.check(state.entpos[0],state.entpos[1],state.entpos[2])
							
							
								return;
						}
					
						
						
						else{
						
						noa.setBlock(0,state.wildcard[state.num][0],state.wildcard[state.num][1],state.wildcard[state.num][2])
						}
						
						
						
						state.num++
						
				
						
					}
					
					
									 function clamp(val, min, max) {
					return val > max ? max : val < min ? min : val;
				}
					
					
						function diff (a, b){
				if(a > b){
                 return a - b;
				}else{
                 return  b - a;

                }					
			
			}
					
					
					
					
					
					function move(){
						 state.walkcycle++
						 if(!state.fight){
					  state.mesh._children[1].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));	
                       state.mesh._children[1].rotation.z=0					  
								 }else {
									 
								  state.mesh._children[1].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI))+Math.PI/2;
				  state.mesh._children[1].rotation.z= 1.0* Math.sin((0.32 * state.walkcycle) + (0.25 * Math.PI))-0.1;
								 }

                                					  
		              state.mesh._children[2].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
					  state.mesh._children[3].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));
		              state.mesh._children[4].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
						
					}
					
				
					
					
					
					
					
					
            }
        }


    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/collideEntities.js":
/*!********************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/collideEntities.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

var boxIntersect = __webpack_require__(/*! box-intersect */ "../../node_modules/box-intersect/index.js")



/*
 * 	Every frame, entities with this component will get mutually checked for colliions
 * 
 *   * cylinder: flag for checking collisions as a vertical cylindar (rather than AABB)
 *   * collideBits: category for this entity
 *   * collideMask: categories this entity collides with
 *   * callback: function(other_id) - called when `own.collideBits & other.collideMask` is true
 * 
 * 
 * 		Notes:
 * 	Set collideBits=0 for entities like bullets, which can collide with things 
 * 		but are never the target of a collision.
 * 	Set collideMask=0 for things with no callback - things that get collided with,
 * 		but don't themselves instigate collisions.
 * 
 */



/* harmony default export */ __webpack_exports__["default"] = (function (noa) {

    var intervals = []

    return {

        name: 'collideEntities',

        order: 70,

        state: {
            cylinder: false,
            collideBits: 1 | 0,
            collideMask: 1 | 0,
            callback: null,
        },

        onAdd: null,

        onRemove: null,


        system: function entityCollider(dt, states) {
            var ents = noa.ents

            // data struct that boxIntersect looks for
            // - array of [lo, lo, lo, hi, hi, hi] extents
            for (var i = 0; i < states.length; i++) {
                var id = states[i].__id
                var dat = ents.getPositionData(id)
                intervals[i] = dat._extents
            }
            intervals.length = states.length

            // run the intersect library
            boxIntersect(intervals, function (a, b) {
                var stateA = states[a]
                var stateB = states[b]
                if (!stateA || !stateB) return
                var intervalA = intervals[a]
                var intervalB = intervals[b]
                if (cylindricalHitTest(stateA, stateB, intervalA, intervalB)) {
                    handleCollision(noa, stateA, stateB)
                }
            })

        }
    }



    /*
     * 
     * 		IMPLEMENTATION
     * 
     */


    function handleCollision(noa, stateA, stateB) {
        var idA = stateA.__id
        var idB = stateB.__id

        // entities really do overlap, so check masks and call event handlers
        if (stateA.collideMask & stateB.collideBits) {
            if (stateA.callback) stateA.callback(idB)
        }
        if (stateB.collideMask & stateA.collideBits) {
            if (stateB.callback) stateB.callback(idA)
        }

        // general pairwise handler
        noa.ents.onPairwiseEntityCollision(idA, idB)
    }



    // For entities whose extents overlap, 
    // test if collision still happens when taking cylinder flags into account

    function cylindricalHitTest(stateA, stateB, intervalA, intervalB) {
        if (stateA.cylinder) {
            if (stateB.cylinder) {
                return cylinderCylinderTest(intervalA, intervalB)
            } else {
                return cylinderBoxTest(intervalA, intervalB)
            }
        } else if (stateB.cylinder) {
            return cylinderBoxTest(intervalB, intervalA)
        }
        return true
    }




    // Cylinder-cylinder hit test (AABBs are known to overlap)
    // given their extent arrays [lo, lo, lo, hi, hi, hi]

    function cylinderCylinderTest(a, b) {
        // distance between cylinder centers
        var rada = (a[3] - a[0]) / 2
        var radb = (b[3] - b[0]) / 2
        var dx = a[0] + rada - (b[0] + radb)
        var dz = a[2] + rada - (b[2] + radb)
        // collide if dist <= sum of radii
        var distsq = dx * dx + dz * dz
        var radsum = rada + radb
        return (distsq <= radsum * radsum)
    }




    // Cylinder-Box hit test (AABBs are known to overlap)
    // given their extent arrays [lo, lo, lo, hi, hi, hi]

    function cylinderBoxTest(cyl, cube) {
        // X-z center of cylinder
        var rad = (cyl[3] - cyl[0]) / 2
        var cx = cyl[0] + rad
        var cz = cyl[2] + rad
        // point in X-Z square closest to cylinder
        var px = clamp(cx, cube[0], cube[3])
        var pz = clamp(cz, cube[2], cube[5])
        // collision if distance from that point to circle <= cylinder radius
        var dx = px - cx
        var dz = pz - cz
        var distsq = dx * dx + dz * dz
        return (distsq <= rad * rad)
    }

    function clamp(val, lo, hi) {
        return (val < lo) ? lo : (val > hi) ? hi : val
    }




});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/collideTerrain.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/collideTerrain.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'collideTerrain',

        order: 0,

        state: {
            callback: null
        },

        onAdd: function (eid, state) {
            // add collide handler for physics engine to call
            var ents = noa.entities
            if (ents.hasPhysics(eid)) {
                var body = ents.getPhysics(eid).body
                body.onCollide = function bodyOnCollide(impulse) {
                    var cb = noa.ents.getCollideTerrain(eid).callback
                    if (cb) cb(impulse, eid)
                }
            }
        },

        onRemove: function (eid, state) {
            var ents = noa.entities
            if (ents.hasPhysics(eid)) {
                ents.getPhysics(eid).body.onCollide = null
            }
        },



    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/entLook.js":
/*!************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/entLook.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'entLook',

        order: 100,

        state: {
            mesh: null,
            offset: null,
			entpos: [0,0,0],
			playerpos:[0,0,0],
			delay:0,
			angle:0,
			height:1.8,
			playerheight:1.6
			
        },





        onAdd: function (eid, state) {
           state.entpos=noa.ents.getState(eid, 'position').position
					
        },


        onRemove: function (eid, state) {
           
		   
        },



        renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
		         state.delay++
             
			  state.angle=lookat(pos,state.entpos)
			state.mesh._children[0].rotation.x=lerp(state.mesh._children[0].rotation.x,clamp((state.entpos[1]+state.height)-(pos[1]+state.playerheight), -0.35, 0.35),1)
			
			
			function clamp(val, min, max) {
					return val > max ? max : val < min ? min : val;
				}
				//state.mesh._children[0].rotation.y=lerp(state.mesh._children[0].rotation.y,state.angle-state.mesh.rotation.y,1)//lookat(pos,state.entpos)-state.mesh.rotation.y+Math.PI
				if(state.delay>50){
					state.mesh.rotation.y=lerp(state.mesh.rotation.y,state.angle+Math.PI,1)
				state.delay=0
				}
			   function lookat(objecttarget,objectlooker){
	
						var direction=Math.atan2(objectlooker[0]-objecttarget[0],objectlooker[2]-objecttarget[2])
						return direction;
					}
					
			
					
					
					
							function lerp(start, end, amt){
								return (1-amt)*start+amt*end
							}
					
					
					
					
            }
        }


    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/entMove.js":
/*!************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/entMove.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'entMove',

        order: 100,

        state: {
            mesh: null,
			dist:0,
			entpos:null,
			body:null,
			walkcycle:0,
			moving:false
         
        },





        onAdd: function (eid, state) {
           state.entpos=noa.ents.getState(eid, 'position').position
		   state.body = noa.ents.getPhysicsBody(eid)
				
				state.body.autoStep=true
				
				
        },


        onRemove: function (eid, state) {
           
		   
        },



        renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
		        
				 state.dist=getdistance(pos,state.entpos)
				 
				 
				 if(state.dist < 30  && state.dist> 2 ){
					
					 
					  state.walkcycle++
					 	 var a = -7 * Math.sin(state.mesh.rotation.y+Math.PI),
						     c = -7 * Math.cos(state.mesh.rotation.y+Math.PI);
								 
								 state.body.applyForce([a,0.1,c])
								 
					  state.mesh._children[1].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));					
		              state.mesh._children[2].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
					  state.mesh._children[3].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));
		              state.mesh._children[4].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
					   state.moving=true
				 }else{
					 
					 state.mesh._children[1].rotation.x= 0;					
		              state.mesh._children[2].rotation.x= 0;
					  state.mesh._children[3].rotation.x= 0;
		              state.mesh._children[4].rotation.x= 0;
					  state.moving=false
					 
				 }
             
			   function getdistance (playerMesh,target){
                                        var dblDistanceX = playerMesh[0] - target[0];
										var dblDistanceY = playerMesh[1] - target[1];
										var dblDistanceZ = playerMesh[2] - target[2];
										
								var realDistance=Math.sqrt((dblDistanceX * dblDistanceX) + (dblDistanceY * dblDistanceY) + (dblDistanceZ * dblDistanceZ));
								return  realDistance;
							}
					
			
					
					
					
					
					
					
            }
        }


    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/fadeOnZoom.js":
/*!***************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/fadeOnZoom.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/**
 * Component for the player entity, when active hides the player's mesh 
 * when camera zoom is less than a certain amount
 */

/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'fadeOnZoom',

        order: 99,

        state: {
            cutoff: 1.5,
            _showing: null,
        },

        onAdd: null,

        onRemove: null,

        system: function fadeOnZoomProc(dt, states) {
            var zoom = noa.camera.currentZoom
            var ents = noa.entities
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                checkZoom(state, zoom, ents)
            }
        }
    }
});


function checkZoom(state, zoom, ents) {
    if (!ents.hasMesh(state.__id)) return

    var shouldShow = (zoom > state.cutoff)
    if (state._showing !== shouldShow) {
        ents.getMeshData(state.__id).mesh.visibility = shouldShow
        state._showing = shouldShow
    }
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/followsEntity.js":
/*!******************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/followsEntity.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/*
 * Indicates that an entity should be moved to another entity's position each tick,
 * possibly by a fixed offset, and the same for renderPositions each render
 */

/* harmony default export */ __webpack_exports__["default"] = (function (noa) {

    return {

        name: 'followsEntity',

        order: 50,

        state: {
            entity: 0 | 0,
            offset: null,
            onTargetMissing: null,
        },

        onAdd: function (eid, state) {
            var off = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
            state.offset = (state.offset) ? gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(off, state.offset) : off
            updatePosition(state)
            updateRenderPosition(state)
        },

        onRemove: null,


        // on tick, copy over regular positions
        system: function followEntity(dt, states) {
            for (var i = 0; i < states.length; i++) {
                updatePosition(states[i])
            }
        },


        // on render, copy over render positions
        renderSystem: function followEntityMesh(dt, states) {
            for (var i = 0; i < states.length; i++) {
                updateRenderPosition(states[i])
            }
        }
    }



    function updatePosition(state) {
        var id = state.__id
        var self = noa.ents.getPositionData(id)
        var other = noa.ents.getPositionData(state.entity)
        if (!other) {
            if (state.onTargetMissing) state.onTargetMissing(id)
            noa.ents.removeComponent(id, noa.ents.names.followsEntity)
        } else {
            gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(self._localPosition, other._localPosition, state.offset)
        }
    }

    function updateRenderPosition(state) {
        var id = state.__id
        var self = noa.ents.getPositionData(id)
        var other = noa.ents.getPositionData(state.entity)
        if (other) {
            gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(self._renderPosition, other._renderPosition, state.offset)
        }
    }

});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/info.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/info.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'info',

        order: 100,

        state: {
            nameinfo:null,
			idinfo:null,
			health:0
        },





        onAdd: function (eid, state) {
          
        },


        onRemove: function (eid, state) {
            
        },
		
		renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
				
				
				if(state.health<1){
					
					noa.ents.deleteEntity(id)
					console.log('im dying')
					return;
				}
		if(state.idinfo==null){
			return;
		}
		
		if(dominator){
			
			if(channel==null){
				return;
			}
        var c=noa.ents.getState(listofmobs[state.idinfo], 'position').position
		var k=noa.ents.getState(listofmobs[state.idinfo], 'mesh').mesh
		var l=noa.ents.getState(listofmobs[state.idinfo], 'entMove').moving
		var entname=noa.ents.getState(listofmobs[state.idinfo], 'info').nameinfo
	    entdatablock.entcontent=[state.idinfo,c,k.rotation.y,l,entname]
		
		 const youString = JSON.stringify(entdatablock)
		if(l==true){
		 channel.send(youString);
		}
	
		}
					
			
					
					
					
            }
        }




    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/mesh.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/mesh.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'mesh',

        order: 100,

        state: {
            mesh: null,
            offset: null
        },


        onAdd: function (eid, state) {
            // implicitly assume there's already a position component
            var posDat = noa.ents.getPositionData(eid)
            if (state.mesh) {
                noa.rendering.addMeshToScene(state.mesh, false, posDat.position)
				
				for (var i=0;i<state.mesh.getChildren().length;i++){
					 noa.rendering.addMeshToScene(state.mesh._children[i], false, posDat.position)
				}
	
            } else {
                throw new Error('Mesh component added without a mesh - probably a bug!')
            }
            if (!state.offset) state.offset = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()

            // set mesh to correct position
            var rpos = posDat._renderPosition
            state.mesh.position.copyFromFloats(
                rpos[0] + state.offset[0],
                rpos[1] + state.offset[1],
                rpos[2] + state.offset[2])
        },


        onRemove: function (eid, state) {
            state.mesh.dispose()
        },



        renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id

                var rpos = noa.ents.getPositionData(id)._renderPosition
                state.mesh.position.copyFromFloats(
                    rpos[0] + state.offset[0],
                    rpos[1] + state.offset[1],
                    rpos[2] + state.offset[2])
            }
        }


    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/movement.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/movement.js ***!
  \*************************************************************************************************/
/*! exports provided: MovementState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovementState", function() { return MovementState; });
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);







/** 
 * State object of the `movement` component
 * @class
*/
function MovementState() {
    this.heading = 0 // radians
    this.running = false
    this.jumping = false

    // options
    this.maxSpeed = 10
    this.moveForce = 30
    this.responsiveness = 15
    this.runningFriction = 0
    this.standingFriction = 2

    // jumps
    this.airMoveMult = 0.5
    this.jumpImpulse = 10
    this.jumpForce = 12
    this.jumpTime = 500 // ms
    this.airJumps = 1

    // internal state
    this._jumpCount = 0
    this._currjumptime = 0
    this._isJumping = false
}





/**
 * Movement component. State stores settings like jump height, etc.,
 * as well as current state (running, jumping, heading angle).
 * Processor checks state and applies movement/friction/jump forces
 * to the entity's physics body. 
 * @param {import('..').Engine} noa
 * @internal
*/

/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'movement',

        order: 30,

        state: new MovementState(),

        onAdd: null,

        onRemove: null,


        system: function movementProcessor(dt, states) {
            var ents = noa.entities
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var phys = ents.getPhysics(state.__id)
                if (phys) applyMovementPhysics(dt, state, phys.body)
            }
        }


    }
});


var tempvec = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
var tempvec2 = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
var zeroVec = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()


/**
 * @internal
 * @param {number} dt 
 * @param {MovementState} state 
 * @param {*} body 
*/

function applyMovementPhysics(dt, state, body) {
    // move implementation originally written as external module
    //   see https://github.com/andyhall/voxel-fps-controller
    //   for original code

    // jumping
    var onGround = (body.atRestY() < 0)
    var canjump = (onGround || state._jumpCount < state.airJumps)
    if (onGround) {
        state._isJumping = false
        state._jumpCount = 0
    }

    // process jump input
    if (state.jumping) {
        if (state._isJumping) { // continue previous jump
            if (state._currjumptime > 0) {
                var jf = state.jumpForce
                if (state._currjumptime < dt) jf *= state._currjumptime / dt
                body.applyForce([0, jf, 0])
                state._currjumptime -= dt
            }
        } else if (canjump) { // start new jump
            state._isJumping = true
            if (!onGround) state._jumpCount++
            state._currjumptime = state.jumpTime
            body.applyImpulse([0, state.jumpImpulse, 0])
            // clear downward velocity on airjump
            if (!onGround && body.velocity[1] < 0) body.velocity[1] = 0
        }
    } else {
        state._isJumping = false
    }

    // apply movement forces if entity is moving, otherwise just friction
    var m = tempvec
    var push = tempvec2
    if (state.running) {

        var speed = state.maxSpeed
        // todo: add crouch/sprint modifiers if needed
        // if (state.sprint) speed *= state.sprintMoveMult
        // if (state.crouch) speed *= state.crouchMoveMult
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.set(m, 0, 0, speed)

        // rotate move vector to entity's heading
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.rotateY(m, m, zeroVec, state.heading)

        // push vector to achieve desired speed & dir
        // following code to adjust 2D velocity to desired amount is patterned on Quake: 
        // https://github.com/id-Software/Quake-III-Arena/blob/master/code/game/bg_pmove.c#L275
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.subtract(push, m, body.velocity)
        push[1] = 0
        var pushLen = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.length(push)
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.normalize(push, push)

        if (pushLen > 0) {
            // pushing force vector
            var canPush = state.moveForce
            if (!onGround) canPush *= state.airMoveMult

            // apply final force
            var pushAmt = state.responsiveness * pushLen
            if (canPush > pushAmt) canPush = pushAmt

            gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.scale(push, push, canPush)
            body.applyForce(push)
        }

        // different friction when not moving
        // idea from Sonic: http://info.sonicretro.org/SPG:Running
        body.friction = state.runningFriction
    } else {
        body.friction = state.standingFriction
    }
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/physics.js":
/*!************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/physics.js ***!
  \************************************************************************************************/
/*! exports provided: default, setPhysicsFromPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPhysicsFromPosition", function() { return setPhysicsFromPosition; });
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {


    return {

        name: 'physics',

        order: 40,

        state: {
            body: null,
        },


        onAdd: function (entID, state) {
            state.body = noa.physics.addBody()
            // implicitly assume body has a position component, to get size
            var posDat = noa.ents.getPositionData(state.__id)
            setPhysicsFromPosition(state, posDat)
        },


        onRemove: function (entID, state) {
            // update position before removing
            // this lets entity wind up at e.g. the result of a collision
            // even if physics component is removed in collision handler
            if (noa.ents.hasPosition(state.__id)) {
                var pdat = noa.ents.getPositionData(state.__id)
                setPositionFromPhysics(state, pdat)
                backtrackRenderPos(state, pdat, 0, false)
            }
            noa.physics.removeBody(state.body)
        },


        system: function (dt, states) {
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var pdat = noa.ents.getPositionData(state.__id)
                setPositionFromPhysics(state, pdat)
            }
        },


        renderSystem: function (dt, states) {

            var tickPos = noa.positionInCurrentTick
            var tickTime = 1000 / noa.container._shell.tickRate
            var tickMS = tickPos * tickTime

            // tickMS is time since last physics engine tick
            // to avoid temporal aliasing, render the state as if lerping between
            // the last position and the next one 
            // since the entity data is the "next" position this amounts to 
            // offsetting each entity into the past by tickRate - dt
            // http://gafferongames.com/game-physics/fix-your-timestep/

            var backtrackAmt = (tickMS - tickTime) / 1000
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
                var pdat = noa.ents.getPositionData(id)
                var smoothed = noa.ents.cameraSmoothed(id)
                backtrackRenderPos(state, pdat, backtrackAmt, smoothed)
            }
        }

    }

});



// var offset = vec3.create()
var local = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()

function setPhysicsFromPosition(physState, posState) {
    var box = physState.body.aabb
    var ext = posState._extents
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(box.base, ext)
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.set(box.vec, posState.width, posState.height, posState.width)
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(box.max, box.base, box.vec)
}


function setPositionFromPhysics(physState, posState) {
    var base = physState.body.aabb.base
    var hw = posState.width / 2
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.set(posState._localPosition, base[0] + hw, base[1], base[2] + hw)
}


function backtrackRenderPos(physState, posState, backtrackAmt, smoothed) {
    // pos = pos + backtrack * body.velocity
    var vel = physState.body.velocity
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.scaleAndAdd(local, posState._localPosition, vel, backtrackAmt)

    // smooth out update if component is present
    // (this is set after sudden movements like auto-stepping)
    if (smoothed) gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.lerp(local, posState._renderPosition, local, 0.3)

    // copy values over to renderPosition, 
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(posState._renderPosition, local)
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/position.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/position.js ***!
  \*************************************************************************************************/
/*! exports provided: default, updatePositionExtents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePositionExtents", function() { return updatePositionExtents; });
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {

    /**
     * 
     * 	Component holding entity's position, width, and height.
     *  By convention, entity's "position" is the bottom center of its AABB
     * 
     *  Of the various properties, _localPosition is the "real", 
     *  single-source-of-truth position. Others are derived.
     *  Local coords are relative to `noa.worldOriginOffset`.
     * 
     *  Props:
     *      position: pos in global coords (may be low precision)
     *      _localPosition: precise pos in local coords
     *      _renderPosition: [x,y,z] in LOCAL COORDS
     *      _extents: array [lo, lo, lo, hi, hi, hi] in LOCAL COORDS
     * 
     */



    return {

        name: 'position',

        order: 60,

        state: {
            position: null,
            width: 0.8,
            height: 0.8,
            _localPosition: null,
            _renderPosition: null,
            _extents: null,
        },


        onAdd: function (eid, state) {
            // copy position into a plain array
            var pos = [0, 0, 0]
            if (state.position) gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(pos, state.position)
            state.position = pos

            state._localPosition = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
            state._renderPosition = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
            state._extents = new Float32Array(6)

            // on init only, set local from global
            noa.globalToLocal(state.position, null, state._localPosition)
            gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(state._renderPosition, state._localPosition)
            updatePositionExtents(state)
        },

        onRemove: null,



        system: function (dt, states) {
            var off = noa.worldOriginOffset
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(state.position, state._localPosition, off)
                updatePositionExtents(state)
            }
        },


    }
});



// update an entity's position state `_extents` 
function updatePositionExtents(state) {
    var hw = state.width / 2
    var lpos = state._localPosition
    var ext = state._extents
    ext[0] = lpos[0] - hw
    ext[1] = lpos[1]
    ext[2] = lpos[2] - hw
    ext[3] = lpos[0] + hw
    ext[4] = lpos[1] + state.height
    ext[5] = lpos[2] + hw
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/receivesInputs.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/receivesInputs.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/**
 * 
 * Input processing component - gets (key) input state and  
 * applies it to receiving entities by updating their movement 
 * component state (heading, movespeed, jumping, etc.)
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'receivesInputs',

        order: 20,

        state: {},

        onAdd: null,

        onRemove: null,

        system: function inputProcessor(dt, states) {
            var ents = noa.entities
            var inputState = noa.inputs.state
            var camHeading = noa.camera.heading

            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var moveState = ents.getMovement(state.__id)
                setMovementState(moveState, inputState, camHeading)
            }
        }

    }
});



/**
 * @param {import('../components/movement').MovementState} state 
 * @param {Object<string, boolean>} inputs 
 * @param {number} camHeading 
 * @internal
*/

function setMovementState(state, inputs, camHeading) {
    state.jumping = !!inputs.jump

    var fb = inputs.forward ? (inputs.backward ? 0 : 1) : (inputs.backward ? -1 : 0)
    var rl = inputs.right ? (inputs.left ? 0 : 1) : (inputs.left ? -1 : 0)

    if ((fb | rl) === 0) {
        state.running = false
    } else {
        state.running = true
        if (fb) {
            if (fb == -1) camHeading += Math.PI
            if (rl) {
                camHeading += Math.PI / 4 * fb * rl // didn't plan this but it works!
            }
        } else {
            camHeading += rl * Math.PI / 2
        }
        state.heading = camHeading
    }

}


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/rtcMove.js":
/*!************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/rtcMove.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'rtcMove',

        order: 100,

        state: {
            mesh: null,
			dist:0,
			entpos:null,
			body:null,
			walkcycle:0,
			moving:false
         
        },





        onAdd: function (eid, state) {
          
		  
				
				
        },


        onRemove: function (eid, state) {
           
		   
        },



        renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
		        
				 if(state.moving){
					 
					
					  state.walkcycle++
					 
					  state.mesh._children[1].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));					
		              state.mesh._children[2].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
					  state.mesh._children[3].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));
		              state.mesh._children[4].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
				 }else{
					 
					 state.mesh._children[1].rotation.x= 0;					
		              state.mesh._children[2].rotation.x= 0;
					  state.mesh._children[3].rotation.x= 0;
		              state.mesh._children[4].rotation.x= 0;
					 
				 }
             
			
					
			
					
					
					
					
					
					
            }
        }


    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/shadow.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/shadow.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Maths/math.color */ "../../node_modules/@babylonjs/core/Maths/math.color.js");
/* harmony import */ var _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "../../node_modules/@babylonjs/core/Meshes/mesh.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_discBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/discBuilder */ "../../node_modules/@babylonjs/core/Meshes/Builders/discBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Meshes/instancedMesh */ "../../node_modules/@babylonjs/core/Meshes/instancedMesh.js");









/* harmony default export */ __webpack_exports__["default"] = (function (noa, dist) {

    var shadowDist = dist

    // create a mesh to re-use for shadows
    var scene = noa.rendering.getScene()
    var disc = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"].CreateDisc('shadow', 0.75, 30, scene)
    disc.rotation.x = Math.PI / 2
    var mat = noa.rendering.makeStandardMaterial('shadowMat')
    mat.diffuseColor = _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__["Color3"].Black()
    mat.ambientColor = _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_1__["Color3"].Black()
    mat.alpha = 0.5
    disc.material = mat
    disc.setEnabled(false)

    // source mesh needn't be in the scene graph
    scene.removeMesh(disc)


    return {

        name: 'shadow',

        order: 80,

        state: {
            size: 0.5,
            _mesh: null,
			offset:[0,0,0]
        },


        onAdd: function (eid, state) {
            var mesh = disc.createInstance('shadow_instance')
            noa.rendering.addMeshToScene(mesh)
            mesh.setEnabled(false)
            state._mesh = mesh
			
			state._mesh.checkCollisions=false
        },


        onRemove: function (eid, state) {
            state._mesh.dispose()
        },


        system: function shadowSystem(dt, states) {
            var cpos = noa.camera._localGetPosition()
            var dist = shadowDist
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var posState = noa.ents.getPositionData(state.__id)
                var physState = noa.ents.getPhysics(state.__id)
                updateShadowHeight(noa, posState, physState, state._mesh, state.size, dist, cpos,state.offset)
            }
        },


        renderSystem: function (dt, states) {
            // before render adjust shadow x/z to render positions
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var rpos = noa.ents.getPositionData(state.__id)._renderPosition
                var spos = state._mesh.position
                spos.x = rpos[0]
                spos.z = rpos[2]
            }
        }




    }
});

var shadowPos = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.fromValues(0, 0, 0)
var down = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.fromValues(0, -1, 0)

function updateShadowHeight(noa, posDat, physDat, mesh, size, shadowDist, camPos,affset) {

    // local Y ground position - from physics or raycast
    var localY
    if (physDat && physDat.body.resting[1] < 0) {
        localY = posDat._localPosition[1]
    } else {
        var res = noa._localPick(posDat._localPosition, down, shadowDist)
        if (!res) {
            mesh.setEnabled(false)
            return
        }
        localY = res.position[1] - noa.worldOriginOffset[1]
    }

    // round Y pos and offset upwards slightly to avoid z-fighting
    localY = Math.round(localY)
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(shadowPos, posDat._localPosition)
    shadowPos[1] = localY
    var sqdist = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.squaredDistance(camPos, shadowPos)
    // offset ~ 0.01 for nearby shadows, up to 0.1 at distance of ~40
    var offset = 0.01 + 0.1 * (sqdist / 1600)
    if (offset > 0.1) offset = 0.1
    mesh.position.y = localY + offset+affset[1]
    // set shadow scale
    var dist = posDat._localPosition[1] - localY
    var scale = size * 0.7 * (1 - dist / shadowDist)
    mesh.scaling.copyFromFloats(scale, scale, scale)
    mesh.setEnabled(true)
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/smoothCamera.js":
/*!*****************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/smoothCamera.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'smooth-camera',

        order: 99,

        state: {
            time: 100.1
        },

        onAdd: null,

        onRemove: null,

        system: function (dt, states) {
            // remove self after time elapses
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                state.time -= dt
                if (state.time < 0) noa.ents.removeComponent(state.__id, 'smooth-camera')
            }
        },

    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/components/testaPlus.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/components/testaPlus.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ __webpack_exports__["default"] = (function (noa) {
    return {

        name: 'testaPlus',

        order: 100,

        state: {
            mesh: null,
			dist:0,
			entpos:null,
			body:null,
			walkcycle:0,
			wildcard:{},
			num: 0,
			target:[3,1,1],
			init:false,
			startPos:null,
			finaldist:0,
			again:false,
			speed:4,
            check:null,
			clearnum:0,
			fight:false,
			plbody:null,
			roam:false,
			simpAngle:0,
			ready:false
        },





        onAdd: function (eid, state) {
           state.entpos=noa.ents.getState(eid, 'position').position
		   state.body = noa.ents.getPhysicsBody(eid)
			state.plbody=	noa.ents.getPhysicsBody(noa.playerEntity)
			
			//state.body.airDrag=2
				state.body.friction=0
				
				
	
				
				setTimeout(function(){	
				console.log(state.startPos)
			     state.target=noa.ents.getState(noa.playerEntity, 'position').position
				 
				 //if(state.target[1]-state.entpos[1]<0.2){
				state.startPos=[Math.round(state.entpos[0]),Math.round(state.entpos[1]),Math.round(state.entpos[2])]
				state.check(state.startPos[0],state.startPos[1],state.startPos[2])
				
				 //}
				
				
				
				
				
				
					}, 5000);
				
		
						
			
					
					
					state.check=function check(e,t,i){
						
						
						state.body.velocity[0]=0
						state.body.velocity[2]=0
						if(Math.round(state.entpos[1])!==Math.round(state.target[1])){
							
							console.log('error error ')
							//return;
						}
						 //noa.setBlock(0,e, t, i)
						state.startPos=[e,t,i]
					
						var result=null
						
						if(state.init){
							return;
						}
						
						
						if(JSON.stringify([e,t,i])==JSON.stringify(state.target)){
							state.init=true
							console.log(state.wildcard)
							
						}
					
						var num=1000
						
						   var r = noa.world.getBlockID(e - 1, t, i),
                                o = noa.world.getBlockID(e + 1, t, i),
                                a = noa.world.getBlockID(e, t, i + 1),
                                s = noa.world.getBlockID(e, t, i - 1),
								
								kr = noa.world.getBlockID(e - 1, t+1, i),
                                ko = noa.world.getBlockID(e + 1, t+1, i),
                                ka = noa.world.getBlockID(e, t+1, i + 1),
                                ks = noa.world.getBlockID(e, t+1, i - 1),
								
								z= noa.world.getBlockID(e+1, t, i + 1),
								x= noa.world.getBlockID(e+1, t, i - 1),
								k= noa.world.getBlockID(e-1, t, i - 1),
								l= noa.world.getBlockID(e-1, t, i + 1);
								
									
							
								
								
									if (kr == 0 && noa.world.getBlockID(e - 1, t-1, i)!==0 && noa.world.getBlockID(e - 1, t-1, i)!==blocks['poppy'] && noa.world.getBlockID(e - 1, t+2, i)==0) {
								
								
								
								
								 var squid=getdistance(state.startPos,[e - 1, t+1, i])
								 var squid2=getdistance(state.target,[e - 1, t+1, i])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e - 1, t+1, i]
									
									 
								  
								 
								 }
								 
								 
								
                            }
							
							
							
								if (ko == 0 && noa.world.getBlockID(e +1, t-1, i)!==0 && noa.world.getBlockID(e + 1, t-1, i)!==blocks['poppy'] && noa.world.getBlockID(e +1 , t+2, i)==0) {
								
								
								
								
								 var squid=getdistance(state.startPos,[e + 1, t+1, i])
								 var squid2=getdistance(state.target,[e + 1, t+1, i])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e + 1, t+1, i]
									
									 
								  
								 
								 }
								 
								 
								
                            }
							
							
							if (ka == 0 && noa.world.getBlockID(e , t-1, i+1)!==0 && noa.world.getBlockID(e , t-1, i+1)!==blocks['poppy'] && noa.world.getBlockID(e , t+2, i+1)==0) {
								
								
								
								
								 var squid=getdistance(state.startPos,[e , t+1, i+1])
								 var squid2=getdistance(state.target,[e , t+1, i+1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e , t+1, i+1]
									
									 
								  
								 
								 }
								 
								 
								
                            }
								
						
							
								
								
								
								
								if (r == 0 && noa.world.getBlockID(e - 1, t-1, i)!==0 && noa.world.getBlockID(e - 1, t+1, i)==0) {
								
								
								
								
								 var squid=getdistance(state.startPos,[e - 1, t, i])
								 var squid2=getdistance(state.target,[e - 1, t, i])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e - 1, t, i]
									
									 
								  
								 
								 }
								 
								 
								
                            }
							
							
								if (k == 0 && noa.world.getBlockID(e - 1, t-1, i-1)!==0 && noa.world.getBlockID(e - 1, t+1, i-1)==0 ) {
								
								 var squid=getdistance(state.startPos,[e-1, t, i - 1])
								 var squid2=getdistance(state.target,[e-1, t, i - 1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e-1, t, i - 1]
									
									 
								  
								 
								 }
								
                            }
							
							if (l == 0  && noa.world.getBlockID(e - 1, t-1, i+1)!==0 && noa.world.getBlockID(e - 1, t+1, i+1)==0) {
								
								 var squid=getdistance(state.startPos,[e-1, t, i + 1])
								 var squid2=getdistance(state.target,[e-1, t, i + 1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e-1, t, i + 1]
									
									 
								  
								 
								 }
								
                            }
							
							
								
							
                            if (o == 0 && noa.world.getBlockID(e+1 , t-1, i)!==0 && noa.world.getBlockID(e+1 , t+1, i)==0) {
								
                                var squid=getdistance(state.startPos,[e + 1, t, i])
								 var squid2=getdistance(state.target,[e + 1, t, i])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e + 1, t, i]
									
								 }
                            }
							
							
							
							if (z == 0 && noa.world.getBlockID(e+1 , t-1, i+1)!==0 && noa.world.getBlockID(e+1 , t+1, i+1)==0) {
								
								 var squid=getdistance(state.startPos,[e + 1, t, i+1])
								 var squid2=getdistance(state.target,[e + 1, t, i+1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e + 1, t, i+1]
									 
									 
								  
								 
								 }
								
                            }
							
							if (x == 0 && noa.world.getBlockID(e+1 , t-1, i-1)!==0  && noa.world.getBlockID(e+1 , t+1, i-1)==0) {
								
								 var squid=getdistance(state.startPos,[e+1, t, i - 1])
								 var squid2=getdistance(state.target,[e+1, t, i - 1])
								
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e+1, t, i - 1]
									
									 
								  
								 
								 }
								
                            }
							
							
							
							
							
							
                            if (a == 0 && noa.world.getBlockID(e , t-1, i+1)!==0 && noa.world.getBlockID(e , t+1, i+1)==0) {
								
								 var squid=getdistance(state.startPos,[e , t, i+1])
								 var squid2=getdistance(state.target,[e , t, i+1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e , t, i+1]
									 
							
								 }
								
								
								
                            }
                            if (s == 0 && noa.world.getBlockID(e , t-1, i-1)!==0  && noa.world.getBlockID(e , t+1, i-1)==0) {
								
								 var squid=getdistance(state.startPos,[e , t, i-1])
								 var squid2=getdistance(state.target,[e , t, i-1])
								 
								 if((squid+squid2)<num){
									 num=squid+squid2
									 
									 result=[e , t, i-1]
									
								 }
									
								}
							
								
								if(result!==null){
								
								if (!Object.values(state.wildcard).includes(state.clearnum)) {
                                    noa.setBlock(blocks['poppy'],result[0], result[1], result[2])
									
								   if(JSON.stringify(result)!==JSON.stringify(state.startPos)){
										
								state.wildcard[state.clearnum]=result
								
								state.clearnum++
									
								
							
									}
								}
								
								 var end=getdistance(state.target,result)
								if(end<2){
									state.init=true
								}
								
								
									 check(result[0],result[1],result[2])
								}else{
									state.init=true
									console.log(state.wildcard)
								}
								
								
						
					}
				
				  function getdistance (playerMesh,target){
                                        var dblDistanceX = playerMesh[0] - target[0];
										var dblDistanceY = playerMesh[1] - target[1];
										var dblDistanceZ = playerMesh[2] - target[2];
										
								var realDistance=Math.sqrt((dblDistanceX * dblDistanceX) + (dblDistanceY * dblDistanceY) + (dblDistanceZ * dblDistanceZ));
								return  realDistance;
							}
							
							
				
				
        },


        onRemove: function (eid, state) {
           
		   
        },



        renderSystem: function (dt, states) {
            // before render move each mesh to its render position, 
            // set by the physics engine or driving logic
            for (var i = 0; i < states.length; i++) {
                var state = states[i]
                var id = state.__id
				
				 state.finaldist=getdistance(state.target,state.entpos)
				 
				 state.simpAngle=lookat(state.target,state.entpos)
				 
				 
				  if(!state.init){
					  
					 move()
					  if(state.finaldist>3){
						  
						  if(!state.roam){
							  state.body.velocity[0]=0
							   state.body.velocity[2]=0
							   state.roam=true
						  }
						var a =   clamp(- Math.sin(state.simpAngle), -0.15, 0.15),
						     c =   clamp(- Math.cos(state.simpAngle), -0.15, 0.15)
						  state.mesh.rotation.y=state.simpAngle
						  
						  state.body.applyForce([a,0.1,c])
						  
					  }else{
						  
						  if(state.roam){
							  state.roam=false
						  }
					  state.speed=1
					var a =   clamp(- Math.sin(state.simpAngle), -0.35, 0.35),
						     c =   clamp(- Math.cos(state.simpAngle), -0.35, 0.35)
					 
					 
					
					 	 	
							 
							
								 state.mesh.rotation.y=state.simpAngle
								state.body.applyForce([a,0.1,c])
					  }
								
					  
					  
					  
				 }
				 
			    	if(state.finaldist<2){
						state.fight=true
						console.log('coolio dude')
						state.speed=0
						
						if(state.plbody.resting[1]==-1){
					state.plbody.applyImpulse([-Math.sin(state.angle),3,-Math.cos(state.angle)])
						}
					
						
						
						
						
					}else{
					
						state.fight=false
					}
		        
				if(!state.init){
					
					
					return;
				}
					move()
				if(state.wildcard[state.num]==undefined){
					console.log('wathhh')
					state.init=false
					
					//setTimeout(function(){ 
						state.num=0
						state.wildcard={}
						state.clearnum=0
						state.check(state.entpos[0],state.entpos[1],state.entpos[2])
						
						//}, 3000);
					
					
					return;
				}
			    
				 state.dist=getdistance(state.wildcard[state.num],state.entpos)
				 
				 state.angle=lookat([state.wildcard[state.num][0]+0.5,state.wildcard[state.num][1],state.wildcard[state.num][2]],state.entpos)
				 
				 state.mesh.rotation.y=state.angle
				 
				 
				 if(state.dist>1){
					 
					    	var pos=noa.ents.getState(id,'position').position
                  var newPos=[state.wildcard[state.num][0],state.wildcard[state.num][1],state.wildcard[state.num][2]]
	                     var mover = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()	
						gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.lerp(mover, pos, newPos, 0.02)
	              noa.entities.setPosition(id,mover);
				 }
				 
				  if(state.dist <1){
					  
					   	var a =   clamp(- Math.sin(state.angle), -0.05, 0.05),
						     c =   clamp(- Math.cos(state.angle), -0.05, 0.05)
                      // clamp(- Math.sin(state.angle), -0.35, 0.35)
					 state.body.applyForce([a,0.1,c])
				  }
						
				 if(state.dist <1.5){
					
					 
					
					 	var a =   clamp(- Math.sin(state.angle), -0.05, 0.05),
						     c =   clamp(- Math.cos(state.angle), -0.05, 0.05)
                      // clamp(- Math.sin(state.angle), -0.35, 0.35)
					 state.body.applyForce([a,0.1,c])
				
								
								/*var pos=noa.ents.getState(id,'position').position
var newPos=[state.wildcard[state.num][0],state.wildcard[state.num][1],state.wildcard[state.num][2]]
	var move = vec3.create()	
						vec3.lerp(move, pos, newPos, 0.02)
	noa.entities.setPosition(id,move);*/
					
					
				 }else{
					
					var a=clamp(- Math.sin(state.angle), -0.05, 0.05),
					  
						 c=clamp(- Math.cos(state.angle), -0.05, 0.05)
						 state.body.applyForce([a,0.1,c])
					  
					 
				 }
				 
             
			   function getdistance (playerMesh,target){
                                        var dblDistanceX = playerMesh[0] - target[0];
										var dblDistanceY = playerMesh[1] - target[1];
										var dblDistanceZ = playerMesh[2] - target[2];
										
								var realDistance=Math.sqrt((dblDistanceX * dblDistanceX) + (dblDistanceY * dblDistanceY) + (dblDistanceZ * dblDistanceZ));
								return  realDistance;
							}
					
			
					   function lookat(objecttarget,objectlooker){
	
						var direction=Math.atan2(objectlooker[0]-objecttarget[0],objectlooker[2]-objecttarget[2])
						return direction;
					}
					
					if(state.dist<1){
					
						var pos=noa.ents.getState(id,'position').position
						if(noa.world.getBlockID(state.wildcard[state.num][0],state.wildcard[state.num][1],state.wildcard[state.num][2])!==blocks['poppy']){
						
				
								for (const key in state.wildcard){
								if(noa.world.getBlockID(state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])==blocks['poppy']){
									noa.setBlock(0,state.wildcard[key][0],state.wildcard[key][1],state.wildcard[key][2])
								}
							}
							state.init=false
							
								return;
						}
					
						
						
						else{
						//state.body.velocity[0]=0
						//state.body.velocity[2]=0
						noa.setBlock(0,state.wildcard[state.num][0],state.wildcard[state.num][1],state.wildcard[state.num][2])
						}
						
						
						
						state.num++
						
				
						
					}
					
					
									 function clamp(val, min, max) {
					return val > max ? max : val < min ? min : val;
				}
					
					
					
					
					
					
					
					
					function move(){
						 state.walkcycle++
						 if(!state.fight){
					  state.mesh._children[1].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));	
                       state.mesh._children[1].rotation.z=0					  
								 }else {
									 
								  state.mesh._children[1].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI))+Math.PI/2;
				  state.mesh._children[1].rotation.z= 1.0* Math.sin((0.32 * state.walkcycle) + (0.25 * Math.PI))-0.1;
								 }

                                					  
		              state.mesh._children[2].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
					  state.mesh._children[3].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (0.5 * Math.PI));
		              state.mesh._children[4].rotation.x= 1.0* Math.cos((0.32 * state.walkcycle) + (1.5 * Math.PI));
						
					}
					
				
					
					
					
					
					
					
            }
        }


    }
});


/***/ }),

/***/ "../../node_modules/noa-engine/src/index.js":
/*!***********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/index.js ***!
  \***********************************************************************************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine; });
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ndarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ndarray */ "../../node_modules/ndarray/ndarray.js");
/* harmony import */ var ndarray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ndarray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fast_voxel_raycast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-voxel-raycast */ "../../node_modules/fast-voxel-raycast/index.js");
/* harmony import */ var fast_voxel_raycast__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_voxel_raycast__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/inputs */ "../../node_modules/noa-engine/src/lib/inputs.js");
/* harmony import */ var _lib_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/container */ "../../node_modules/noa-engine/src/lib/container.js");
/* harmony import */ var _lib_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/camera */ "../../node_modules/noa-engine/src/lib/camera.js");
/* harmony import */ var _lib_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/entities */ "../../node_modules/noa-engine/src/lib/entities.js");
/* harmony import */ var _lib_objectMesher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/objectMesher */ "../../node_modules/noa-engine/src/lib/objectMesher.js");
/* harmony import */ var _lib_terrainMesher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/terrainMesher */ "../../node_modules/noa-engine/src/lib/terrainMesher.js");
/* harmony import */ var _lib_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/registry */ "../../node_modules/noa-engine/src/lib/registry.js");
/* harmony import */ var _lib_rendering__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/rendering */ "../../node_modules/noa-engine/src/lib/rendering.js");
/* harmony import */ var _lib_physics__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/physics */ "../../node_modules/noa-engine/src/lib/physics.js");
/* harmony import */ var _lib_world__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/world */ "../../node_modules/noa-engine/src/lib/world.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/util */ "../../node_modules/noa-engine/src/lib/util.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../package.json */ "../../node_modules/noa-engine/package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "../../node_modules/noa-engine/package.json", 1);
/*!
 * noa: an experimental voxel game engine.
 * @url      github.com/andyhall/noa
 * @author   Andy Hall <andy@fenomas.com>
 * @license  MIT
 */




















var version = _package_json__WEBPACK_IMPORTED_MODULE_15__.version



// profile every N ticks/renders
var PROFILE = 0
var PROFILE_RENDER = 0


var defaultOptions = {
    debug: false,
    silent: false,
    playerHeight: 1.8,
    playerWidth: 0.6,
    playerStart: [0, 10, 0],
    playerAutoStep: false,
    tickRate: 30,           // ticks per second
    maxRenderRate: 0,       // max FPS, 0 for uncapped 
    blockTestDistance: 10,
    stickyPointerLock: true,
    dragCameraOutsidePointerLock: true,
    stickyFullscreen: false,
    skipDefaultHighlighting: false,
    originRebaseDistance: 25,
}


/**
 * Main engine class.  
 * Takes an object full of optional settings as a parameter.
 * 
 * ```js
 * import { Engine } from 'noa-engine'
 * var noa = new Engine({
 *    debug: false,
 * })
 * ```
 * 
 * Note that the options object is also passed to noa's 
 * child modules ({@link Rendering}, {@link Container}, etc).
 * See docs for each module for their options.
 * 
 * @emits tick(dt)
 * @emits beforeRender(dt)
 * @emits afterRender(dt)
 * @emits targetBlockChanged(blockDesc)
*/

class Engine extends events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"] {

    /*
     *
     *
     *
     *
     *              PROPERTY DOCS
     * 
     *      tsdoc requires these to be commented here, 
     *      outside the constructor
     *
     *
     *
     *
     *
    */

    /** Version string, e.g. `"0.25.4"` 
     * @prop version
    */

    /** The game's tick rate (ticks per second) 
     * @prop tickRate
    */

    /** The game's max framerate (use `0` for uncapped) 
     * @prop maxRenderRate
    */

    /**  String identifier for the current world. It's safe to ignore this if your game has only one level/world. 
     * @prop worldName
    */

    /** How far to check for a solid voxel the player is currently looking at 
     * @prop blockTestDistance
    */

    /** Callback to determine which voxels can be targeted. Defaults to a solidity check, but can be overridden
     * @type {(id: number) => boolean} 
     * @prop blockTargetIdCheck
    */

    /**
     * @typedef {Object} TargetedBlock - value of `noa.targetedBlock`, updated each tick
     * @prop {number} blockID the ID of the targeted voxel
     * @prop {number[]} position position of the (solid) block being targeted
     * @prop {number[]} adjacent the (non-solid) block adjacent to the targeted one
     * @prop {number[]} normal - e.g. `[0,1,0]` when player is targting the **top** face of a voxel
    */

    /** 
     * Dynamically updated object describing the currently targeted block.
     * @prop targetedBlock
     * @type {null | TargetedBlock} 
    */

    /**
     * Child module for managing the game's container, canvas, etc.
     * @prop container
     * @type {Container}
     */

    /**
     * Manages the game's camera, view angle, etc.
     * @prop camera
     * @type {Camera}
     */

    /**
     * inputs manager - abstracts key/mouse input
     * @prop inputs
     * @type {import('./lib/inputs').Inputs}
    */

    /** Entity manager / Entity Component System (ECS) 
     * Aliased to `noa.ents` for convenience.
     * @prop entities
     * @type {Entities}
    */

    /** 
     * @prop ents
     * @type {Entities} 
    */

    /**
     * physics engine - solves collisions, properties, etc.
     * @prop physics
     * @type {Physics}
    */

    /**
     * A registry where voxel/material properties are managed
     * @prop registry
     * @type {Registry}
    */

    /**
     * Rendering manager
     * @prop rendering
     * @type {Rendering}
    */

    /**
     * Manages the world, chunks, and all voxel data
     * @prop world
     * @type {World}
    */


    // these get ignored for now 
    // TODO: revisit after typedoc v21

    /** @internal @prop _paused */
    /** @internal @prop _dragOutsideLock */
    /** @internal @prop _originRebaseDistance */
    /** @internal @prop positionInCurrentTick */
    /** @internal @prop worldOriginOffset */
    /** @internal @prop _terrainMesher */
    /** @internal @prop _objectMesher */
    /** @internal @prop _targetedBlockDat */
    /** @internal @prop _prevTargetHash */
    /** @internal @prop makeTargetHash */
    /** @internal @prop _pickPos */
    /** @internal @prop _pickResult */


    /** `vec3` class used throughout the engine
     * @type {vec3}
     * @prop vec3 */
    /** `ndarray` class used internally throughout the engine
     * @type {ndarray} 
     * @prop ndarray */

    /**
     * @typedef {Object} PickResult
     * @prop {number[]} position position of the picked voxel
     * @prop {number[]} normal specifying which face of the voxel was hit
     * @prop {number[]} _localPosition position in local coordinates
    */




    /**
     * The core Engine constructor uses the following options:
     * 
     * ```js
     * var defaultOptions = {
     *    debug: false,
     *    silent: false,
     *    playerHeight: 1.8,
     *    playerWidth: 0.6,
     *    playerStart: [0, 10, 0],
     *    playerAutoStep: false,
     *    tickRate: 30,           // ticks per second
     *    maxRenderRate: 0,       // max FPS, 0 for uncapped 
     *    blockTestDistance: 10,
     *    stickyPointerLock: true,
     *    dragCameraOutsidePointerLock: true,
     *    stickyFullscreen: false,
     *    skipDefaultHighlighting: false,
     *    originRebaseDistance: 25,
     * }
     * ```
    */
    constructor(opts = {}) {
        super()
        opts = Object.assign({}, defaultOptions, opts)

        this.version = version
        if (!opts.silent) {
            var debugstr = (opts.debug) ? ' (debug)' : ''
            console.log(`noa-engine v${this.version}${debugstr}`)
        }

        // some basic setup
        this._paused = false
        this._dragOutsideLock = opts.dragCameraOutsidePointerLock
        // world origin offset, used throughout engine for origin rebasing
        this.worldOriginOffset = [0, 0, 0]
        this._originRebaseDistance = opts.originRebaseDistance
        // how far engine is into the current tick. Updated each render.
        this.positionInCurrentTick = 0

        this.worldName = 'default'

        this.container = new _lib_container__WEBPACK_IMPORTED_MODULE_5__["Container"](this, opts)

        this.tickRate = this.container._shell.tickRate
        Object.defineProperty(this, 'tickRate', {
            get: () => this.container._shell.tickRate
        })

        this.maxRenderRate = this.container._shell.maxRenderRate
        Object.defineProperty(this, 'maxRenderRate', {
            get: () => this.container._shell.maxRenderRate,
            set: (v) => { this.container._shell.maxRenderRate = v || 0 },
        })

        // core libraries!
        this.inputs = Object(_lib_inputs__WEBPACK_IMPORTED_MODULE_4__["createInputs"])(this, opts, this.container.element)
        this.registry = new _lib_registry__WEBPACK_IMPORTED_MODULE_10__["Registry"](this, opts)
        this.world = new _lib_world__WEBPACK_IMPORTED_MODULE_13__["World"](this, opts)
        this.rendering = new _lib_rendering__WEBPACK_IMPORTED_MODULE_11__["Rendering"](this, opts, this.container.canvas)
        this.physics = new _lib_physics__WEBPACK_IMPORTED_MODULE_12__["Physics"](this, opts)
        this.entities = new _lib_entities__WEBPACK_IMPORTED_MODULE_7__["Entities"](this, opts)
        this.ents = this.entities
        var ents = this.entities

        /** Entity id for the player entity */
        this.playerEntity = ents.add(
            opts.playerStart, // starting location
            opts.playerWidth, opts.playerHeight,
            null, null, // no mesh for now, no meshOffset, 
            true, true
        )

        // make player entity it collide with terrain and other entities
        var ents = this.ents
        ents.addComponent(this.playerEntity, ents.names.collideTerrain)
        ents.addComponent(this.playerEntity, ents.names.collideEntities)

        // adjust default physics parameters
        var body = ents.getPhysics(this.playerEntity).body
        body.gravityMultiplier = 2 // less floaty
        body.autoStep = opts.playerAutoStep // auto step onto blocks

        // input component - sets entity's movement state from key inputs
        ents.addComponent(this.playerEntity, ents.names.receivesInputs)

        // add a component to make player mesh fade out when zooming in
        ents.addComponent(this.playerEntity, ents.names.fadeOnZoom)

        // movement component - applies movement forces
        ents.addComponent(this.playerEntity, ents.names.movement, {
            airJumps: 0
        })


        this.camera = new _lib_camera__WEBPACK_IMPORTED_MODULE_6__["Camera"](this, opts)


        this.blockTestDistance = opts.blockTestDistance
        this.blockTargetIdCheck = this.registry.getBlockSolidity
        this.targetedBlock = null


        // add a default block highlighting function
        if (!opts.skipDefaultHighlighting) {
            // the default listener, defined onto noa in case people want to remove it later
            this.defaultBlockHighlightFunction = (tgt) => {
                if (tgt) {
                    this.rendering.highlightBlockFace(true, tgt.position, tgt.normal)
                } else {
                    this.rendering.highlightBlockFace(false)
                }
            }
            this.on('targetBlockChanged', this.defaultBlockHighlightFunction)
        }

        // various internals
        this._terrainMesher = new _lib_terrainMesher__WEBPACK_IMPORTED_MODULE_9__["default"](this)
        this._objectMesher = new _lib_objectMesher__WEBPACK_IMPORTED_MODULE_8__["default"](this)


        // several reusable structs for returning data about picks
        this._targetedBlockDat = {
            blockID: 0,
            position: gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
            normal: gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
            adjacent: gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
        }
        this._prevTargetHash = 0
        this.makeTargetHash = (pos, norm, id) => {
            var N = Object(_lib_util__WEBPACK_IMPORTED_MODULE_14__["locationHasher"])(pos[0] + id, pos[1], pos[2])
            return N ^ Object(_lib_util__WEBPACK_IMPORTED_MODULE_14__["locationHasher"])(norm[0], norm[1] + id, norm[2])
        }

        this._pickPos = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()

        this._pickResult = {
            _localPosition: gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
            position: [0, 0, 0],
            normal: [0, 0, 0],
        }





        // temp hacks for development
        if (opts.debug) {

            // expose often-used classes
            this.vec3 = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a
            this.ndarray = ndarray__WEBPACK_IMPORTED_MODULE_1___default.a
            // gameplay tweaks
            ents.getMovement(1).airJumps = 999
            // decorate window while making TS happy
            var win = /** @type {any} */ (window)
            win.noa = this
            win.vec3 = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a
            win.ndarray = ndarray__WEBPACK_IMPORTED_MODULE_1___default.a
            win.scene = this.rendering._scene
        }

        // add hooks to throw helpful errors when using deprecated methods
        deprecateStuff(this)
    }



    /*
     *
     *
     *              Core Engine APIs
     *
     *
    */

    /**
     * Tick function, called by container module at a fixed timestep. 
     * Clients should not normally need to call this manually.
     * @internal
    */

    tick(dt) {
        // note dt is a fixed value, not an observed delay
        if (this._paused) {
            if (this.world.worldGenWhilePaused) this.world.tick()
            return
        }
        profile_hook('start')
        checkWorldOffset(this)
        this.world.tick() // chunk creation/removal
        profile_hook('world')
        if (!this.world.playerChunkLoaded) {
            // when waiting on worldgen, just tick the meshing queue and exit
            this.rendering.tick(dt)
            return
        }
        this.physics.tick(dt) // iterates physics
        profile_hook('physics')
        this._objectMesher.tick() // rebuild objects if needed
        this.rendering.tick(dt) // does deferred chunk meshing
        profile_hook('rendering')
        updateBlockTargets(this) // finds targeted blocks, and highlights one if needed
        profile_hook('targets')
        this.entities.tick(dt) // runs all entity systems
        profile_hook('entities')
        this.emit('tick', dt)
        profile_hook('tick event')
        profile_hook('end')
        // clear accumulated scroll inputs (mouseMove is cleared on render)
        var st = this.inputs.state
        st.scrollx = st.scrolly = st.scrollz = 0
    }




    /**
     * Render function, called every animation frame. Emits #beforeRender(dt), #afterRender(dt) 
     * where dt is the time in ms *since the last tick*.
     * Clients should not normally need to call this manually.
     * @internal
    */
    render(dt, framePart) {
        // note: framePart is how far we are into the current tick
        // dt is the *actual* time (ms) since last render, for
        // animating things that aren't tied to game tick rate

        // frame position - for rendering movement between ticks
        this.positionInCurrentTick = framePart

        // when paused, just optionally ping worldgen, then exit
        if (this._paused) {
            if (this.world.worldGenWhilePaused) this.world.render()
            return
        }

        profile_hook_render('start')

        // only move camera during pointerlock or mousedown, or if pointerlock is unsupported
        if (this.container.hasPointerLock ||
            !this.container.supportsPointerLock ||
            (this._dragOutsideLock && this.inputs.state.fire)) {
            this.camera.applyInputsToCamera()
        }
        profile_hook_render('init')

        // brief run through meshing queue
        this.world.render()
        profile_hook_render('meshing')

        // entity render systems
        this.camera.updateBeforeEntityRenderSystems()
        this.entities.render(dt)
        this.camera.updateAfterEntityRenderSystems()
        profile_hook_render('entities')

        // events and render
        this.emit('beforeRender', dt)
        profile_hook_render('before render')

        this.rendering.render()
        this.rendering.postRender()
        profile_hook_render('render')

        this.emit('afterRender', dt)
        profile_hook_render('after render')
        profile_hook_render('end')

        // clear accumulated mouseMove inputs (scroll inputs cleared on render)
        this.inputs.state.dx = this.inputs.state.dy = 0
    }




    /** Pausing the engine will also stop render/tick events, etc. */
    setPaused(paused = false) {
        this._paused = !!paused
        // when unpausing, clear any built-up mouse inputs
        if (!paused) {
            this.inputs.state.dx = this.inputs.state.dy = 0
        }
    }

    /** 
     * Get the voxel ID at the specified position
    */
    getBlock(x, y = 0, z = 0) {
        if (x.length) return this.world.getBlockID(x[0], x[1], x[2])
        return this.world.getBlockID(x, y, z)
    }

    /** 
     * Sets the voxel ID at the specified position. 
     * Does not check whether any entities are in the way! 
     */
    setBlock(id, x, y = 0, z = 0) {
        if (x.length) return this.world.setBlockID(x[0], x[1], x[2])
        return this.world.setBlockID(id, x, y, z)
    }

    /**
     * Adds a block, unless there's an entity in the way.
    */
    addBlock(id, x, y = 0, z = 0) {
        // add a new terrain block, if nothing blocks the terrain there
        if (x.length) {
            if (this.entities.isTerrainBlocked(x[0], x[1], x[2])) return
            this.world.setBlockID(id, x[0], x[1], x[2])
            return id
        } else {
            if (this.entities.isTerrainBlocked(x, y, z)) return
            this.world.setBlockID(id, x, y, z)
            return id
        }
    }








    /*
     *   Rebasing local <-> global coords
    */


    /** 
     * Precisely converts a world position to the current internal 
     * local frame of reference.
     * 
     * See `/docs/positions.md` for more info.
     * 
     * Params: 
     *  * `global`: input position in global coords
     *  * `globalPrecise`: (optional) sub-voxel offset to the global position
     *  * `local`: output array which will receive the result
     */
    globalToLocal(global, globalPrecise, local) {
        var off = this.worldOriginOffset
        if (globalPrecise) {
            for (var i = 0; i < 3; i++) {
                var coord = global[i] - off[i]
                coord += globalPrecise[i]
                local[i] = coord
            }
            return local
        } else {
            return gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.subtract(local, global, off)
        }
    }

    /** 
     * Precisely converts a world position to the current internal 
     * local frame of reference.
     * 
     * See `/docs/positions.md` for more info.
     * 
     * Params: 
     *  * `local`: input array of local coords
     *  * `global`: output array which receives the result
     *  * `globalPrecise`: (optional) sub-voxel offset to the output global position
     * 
     * If both output arrays are passed in, `global` will get int values and 
     * `globalPrecise` will get fractional parts. If only one array is passed in,
     * `global` will get the whole output position.
    */
    localToGlobal(local, global, globalPrecise = null) {
        var off = this.worldOriginOffset
        if (globalPrecise) {
            for (var i = 0; i < 3; i++) {
                var floored = Math.floor(local[i])
                global[i] = floored + off[i]
                globalPrecise[i] = local[i] - floored
            }
            return global
        } else {
            return gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(global, local, off)
        }
    }







    /**
     * Raycast through the world, returning a result object for any non-air block
     * 
     * See `/docs/positions.md` for info on working with precise positions.
     * 
     * @param {number[]} pos where to pick from (default: player's eye pos)
     * @param {number[]} dir direction to pick along (default: camera vector)
     * @param {number} dist pick distance (default: `noa.blockTestDistance`)
     * @param {(id:number) => boolean} blockTestFunction which voxel IDs can be picked (default: any solid voxel)
     * @returns {PickResult}
    */
    pick(pos = null, dir = null, dist = -1, blockTestFunction = null) {
        if (dist === 0) return null
        // input position to local coords, if any
        var pickPos = this._pickPos
        if (pos) {
            this.globalToLocal(pos, null, pickPos)
            pos = pickPos
        }
        return this._localPick(pos, dir, dist, blockTestFunction)
    }





    /**
     * Do a raycast in local coords. 
     * See `/docs/positions.md` for more info.
     * @param {number[]} pos where to pick from (default: player's eye pos)
     * @param {number[]} dir direction to pick along (default: camera vector)
     * @param {number} dist pick distance (default: `noa.blockTestDistance`)
     * @param {(id:number) => boolean} blockTestFunction which voxel IDs can be picked (default: any solid voxel)
     * @returns {PickResult}
     */

    _localPick(pos = null, dir = null, dist = -1, blockTestFunction = null) {
        // do a raycast in local coords - result obj will be in global coords
        if (dist === 0) return null
        var testFn = blockTestFunction || this.registry.getBlockSolidity
        var world = this.world
        var off = this.worldOriginOffset
        var testVoxel = function (x, y, z) {
            var id = world.getBlockID(x + off[0], y + off[1], z + off[2])
            return testFn(id)
        }
        if (!pos) pos = this.camera._localGetTargetPosition()
        dir = dir || this.camera.getDirection()
        dist = dist || -1
        if (dist < 0) dist = this.blockTestDistance
        var result = this._pickResult
        var rpos = result._localPosition
        var rnorm = result.normal
        var hit = fast_voxel_raycast__WEBPACK_IMPORTED_MODULE_3___default()(testVoxel, pos, dir, dist, rpos, rnorm)
        if (!hit) return null
        // position is right on a voxel border - adjust it so that flooring works reliably
        // adjust along normal direction, i.e. away from the block struck
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.scaleAndAdd(rpos, rpos, rnorm, 0.01)
        // add global result
        this.localToGlobal(rpos, result.position)
        return result
    }

}



/*
 * 
 * 
 * 
 *                  INTERNAL HELPERS
 * 
 * 
 * 
 * 
*/




/*
 *
 *      rebase world origin offset around the player if necessary
 *
*/
function checkWorldOffset(noa) {
    var lpos = noa.ents.getPositionData(noa.playerEntity)._localPosition
    var cutoff = noa._originRebaseDistance
    if (gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.sqrLen(lpos) < cutoff * cutoff) return
    var delta = []
    for (var i = 0; i < 3; i++) {
        delta[i] = Math.floor(lpos[i])
        noa.worldOriginOffset[i] += delta[i]
    }
    noa.rendering._rebaseOrigin(delta)
    noa.entities._rebaseOrigin(delta)
    noa._objectMesher._rebaseOrigin(delta)
}





// Each frame, by default pick along the player's view vector 
// and tell rendering to highlight the struck block face
function updateBlockTargets(noa) {
    var newhash = 0
    var blockIdFn = noa.blockTargetIdCheck || noa.registry.getBlockSolidity
    var result = noa._localPick(null, null, null, blockIdFn)
    if (result) {
        var dat = noa._targetedBlockDat
        // pick stops just shy of voxel boundary, so floored pos is the adjacent voxel
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.floor(dat.adjacent, result.position)
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(dat.normal, result.normal)
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.subtract(dat.position, dat.adjacent, dat.normal)
        dat.blockID = noa.world.getBlockID(dat.position[0], dat.position[1], dat.position[2])
        noa.targetedBlock = dat
        newhash = noa.makeTargetHash(dat.position, dat.normal, dat.blockID, _lib_util__WEBPACK_IMPORTED_MODULE_14__["locationHasher"])
    } else {
        noa.targetedBlock = null
    }
    if (newhash != noa._prevTargetHash) {
        noa.emit('targetBlockChanged', noa.targetedBlock)
        noa._prevTargetHash = newhash
    }
}



/*
 * 
 *  add some hooks for guidance on removed APIs
 * 
 */

function deprecateStuff(noa) {
    var ver = `0.27`
    var dep = (loc, name, msg) => {
        var throwFn = () => { throw `This property changed in ${ver} - ${msg}` }
        Object.defineProperty(loc, name, { get: throwFn, set: throwFn })
    }
    dep(noa, 'getPlayerEyePosition', 'to get the camera/player offset see API docs for `noa.camera.cameraTarget`')
    dep(noa, 'setPlayerEyePosition', 'to set the camera/player offset see API docs for `noa.camera.cameraTarget`')
    dep(noa, 'getPlayerPosition', 'use `noa.ents.getPosition(noa.playerEntity)` or similar')
    dep(noa, 'getCameraVector', 'use `noa.camera.getDirection`')
    dep(noa, 'getPlayerMesh', 'use `noa.ents.getMeshData(noa.playerEntity).mesh` or similar')
    dep(noa, 'playerBody', 'use `noa.ents.getPhysicsBody(noa.playerEntity)`')
    dep(noa.rendering, 'zoomDistance', 'use `noa.camera.zoomDistance`')
    dep(noa.rendering, '_currentZoom', 'use `noa.camera.currentZoom`')
    dep(noa.rendering, '_cameraZoomSpeed', 'use `noa.camera.zoomSpeed`')
    dep(noa.rendering, 'getCameraVector', 'use `noa.camera.getDirection`')
    dep(noa.rendering, 'getCameraPosition', 'use `noa.camera.getLocalPosition`')
    dep(noa.rendering, 'getCameraRotation', 'use `noa.camera.heading` and `noa.camera.pitch`')
    dep(noa.rendering, 'setCameraRotation', 'to customize camera behavior see API docs for `noa.camera`')
    ver = '0.28'
    dep(noa.rendering, 'makeMeshInstance', 'removed, use Babylon\'s `mesh.createInstance`')
    dep(noa.world, '_maxChunksPendingCreation', 'use `maxChunksPendingCreation` (no "_")')
    dep(noa.world, '_maxChunksPendingMeshing', 'use `maxChunksPendingMeshing` (no "_")')
    dep(noa.world, '_maxProcessingPerTick', 'use `maxProcessingPerTick` (no "_")')
    dep(noa.world, '_maxProcessingPerRender', 'use `maxProcessingPerRender` (no "_")')
    ver = '0.29'
    dep(noa, '_constants', 'removed, voxel IDs are no longer packed with bit flags')
    ver = '0.30'
    dep(noa, '_tickRate', 'tickRate is now at `noa.tickRate`')
    dep(noa.container, '_tickRate', 'tickRate is now at `noa.tickRate`')
}





var makeProfileHook = __webpack_require__(/*! ./lib/util */ "../../node_modules/noa-engine/src/lib/util.js").makeProfileHook
var profile_hook = (PROFILE > 0) ?
    makeProfileHook(PROFILE, 'tick   ') : () => { }
var profile_hook_render = (PROFILE_RENDER > 0) ?
    makeProfileHook(PROFILE_RENDER, 'render ') : () => { }


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/camera.js":
/*!****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/camera.js ***!
  \****************************************************************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aabb_3d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aabb-3d */ "../../node_modules/aabb-3d/index.js");
/* harmony import */ var aabb_3d__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aabb_3d__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var voxel_aabb_sweep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! voxel-aabb-sweep */ "../../node_modules/voxel-aabb-sweep/index.js");
/* harmony import */ var voxel_aabb_sweep__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(voxel_aabb_sweep__WEBPACK_IMPORTED_MODULE_2__);
//@ts-check






// default options
var defaults = {
    inverseX: false,
    inverseY: false,
    sensitivityX: 10,
    sensitivityY: 10,
    initialZoom: 0,
    zoomSpeed: 0.2,
}


// locals
var tempVectors = [
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create(),
]
var originVector = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()


/**
 * `noa.camera` - manages the camera, its position and direction, 
 * mouse sensitivity, and so on.
 * 
 * This module uses the following default options (from the options
 * object passed to the [[Engine]]):
 * ```js
 * var defaults = {
 *     inverseX: false,
 *     inverseY: false,
 *     sensitivityX: 10,
 *     sensitivityY: 10,
 *     initialZoom: 0,
 *     zoomSpeed: 0.2,
 * }
 * ```
*/

class Camera {


    /** Horizontal mouse sensitivity. Same scale as Overwatch (typical values around `5..10`)
     * @prop sensitivityX
    */

    /** Vertical mouse sensitivity. Same scale as Overwatch (typical values around `5..10`)
     * @prop sensitivityY
    */

    /** Mouse look inverse (horizontal)
     * @prop inverseX
    */

    /** Mouse look inverse (vertical)
     * @prop inverseY
    */

    /** 
     * Camera yaw angle. 
     * Returns the camera's rotation angle around the vertical axis. 
     * Range: `0..2π`  
     * This value is writeable, but it's managed by the engine and 
     * will be overwritten each frame.
     * @prop heading
    */

    /** Camera pitch angle. 
     * Returns the camera's up/down rotation angle. The pitch angle is 
     * clamped by a small epsilon, such that the camera never quite 
     * points perfectly up or down.  
     * Range: `-π/2..π/2`.  
     * This value is writeable, but it's managed by the engine and 
     * will be overwritten each frame.
     * @prop pitch
    */

    /** 
     * Entity ID of a special entity that exists for the camera to point at.
     * 
     * By default this entity follows the player entity, so you can 
     * change the player's eye height by changing the `follow` component's offset:
     * ```js
     * var followState = noa.ents.getState(noa.camera.cameraTarget, 'followsEntity')
     * followState.offset[1] = 0.9 * myPlayerHeight
     * ```
     * 
     * For customized camera controls you can change the follow 
     * target to some other entity, or override the behavior entirely:
     * ```js
     * // make cameraTarget stop following the player
     * noa.ents.removeComponent(noa.camera.cameraTarget, 'followsEntity')
     * // control cameraTarget position directly (or whatever..)
     * noa.ents.setPosition(noa.camera.cameraTarget, [x,y,z])
     * ```
     * @prop cameraTarget
    */

    /** How far back the camera should be from the player's eye position
     * @prop zoomDistance
     */

    /** How quickly the camera moves to its `zoomDistance` (0..1)
     * @prop zoomSpeed
     */

    /** Current actual zoom distance. This differs from `zoomDistance` when
     * the camera is in the process of moving towards the desired distance, 
     * or when it's obstructed by solid terrain behind the player.
     * @readonly
     * @prop currentZoom 
    */

    /** @internal @prop _currentZoom */
    /** @internal @prop _dirVector */

    /** 
     * @internal 
     * @type {import('../index').Engine}
     * @prop noa
    */

    /** @internal */
    constructor(noa, opts) {
        this.noa = noa
        opts = Object.assign({}, defaults, opts)

        // initial settings
        this.sensitivityX = +opts.sensitivityX
        this.sensitivityY = +opts.sensitivityY
        this.inverseX = !!opts.inverseX
        this.inverseY = !!opts.inverseY

        // local state
        this.heading = 0
        this.pitch = 0
        this.zoomDistance = opts.initialZoom
        this.zoomSpeed = opts.zoomSpeed

        // entity to follow, and vertical offset to eye position
        this.cameraTarget = this.noa.ents.createEntity(['position'])

        var eyeOffset = 0.9 * noa.ents.getPositionData(noa.playerEntity).height
        noa.ents.addComponent(this.cameraTarget, 'followsEntity', {
            entity: noa.playerEntity,
            offset: [0, eyeOffset, 0],
        })


        this.currentZoom = opts.initialZoom
        this._currentZoom = this.currentZoom
        Object.defineProperty(this, 'currentZoom', { get: () => this._currentZoom })

        this._dirVector = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.fromValues(0, 0, 1)
    }




    /*
     * 
     * 
     *          API
     * 
     * 
    */


    /*
     *      Local position functions for high precision
    */
    /** @internal */
    _localGetTargetPosition() {
        var pdat = this.noa.ents.getPositionData(this.cameraTarget)
        var pos = tempVectors[0]
        return gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(pos, pdat._renderPosition)
    }
    /** @internal */
    _localGetPosition() {
        var loc = this._localGetTargetPosition()
        if (this._currentZoom === 0) return loc
        return gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.scaleAndAdd(loc, loc, this._dirVector, -this._currentZoom)
    }



    /**
     * Returns the camera's current target position - i.e. the player's 
     * eye position. When the camera is zoomed all the way in, 
     * this returns the same location as `camera.getPosition()`.
    */
    getTargetPosition() {
        var loc = this._localGetTargetPosition()
        var globalCamPos = tempVectors[1]
        return this.noa.localToGlobal(loc, globalCamPos)
    }


    /**
     * Returns the current camera position (read only)
    */
    getPosition() {
        var loc = this._localGetPosition()
        var globalCamPos = tempVectors[2]
        return this.noa.localToGlobal(loc, globalCamPos)
    }


    /**
     * Returns the camera direction vector (read only)
    */
    getDirection() {
        return this._dirVector
    }




    /*
     * 
     * 
     * 
     *          internals below
     * 
     * 
     * 
    */



    /**
     * Called before render, if mouseLock etc. is applicable.
     * Consumes input mouse events x/y, updates camera angle and zoom
     * @internal
    */

    applyInputsToCamera() {
        // dx/dy from input state
        var state = this.noa.inputs.state
        bugFix(state) // TODO: REMOVE EVENTUALLY    

        // convert to rads, using (sens * 0.0066 deg/pixel), like Overwatch
        var conv = 0.0066 * Math.PI / 180
        var dy = state.dy * this.sensitivityY * conv
        var dx = state.dx * this.sensitivityX * conv
        if (this.inverseY) dy = -dy
        if (this.inverseX) dx = -dx

        // normalize/clamp angles, update direction vector
        var twopi = 2 * Math.PI
        this.heading += (dx < 0) ? dx + twopi : dx
        if (this.heading > twopi) this.heading -= twopi
        var maxPitch = Math.PI / 2 - 0.001
        this.pitch = Math.max(-maxPitch, Math.min(maxPitch, this.pitch + dy))

        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.set(this._dirVector, 0, 0, 1)
        console.log
        var dir = this._dirVector
        var origin = originVector
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.rotateX(dir, dir, origin, this.pitch)
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.rotateY(dir, dir, origin, this.heading)
    }



    /**
     *  Called before all renders, pre- and post- entity render systems
     * @internal
    */
    updateBeforeEntityRenderSystems() {
        // zoom update
        this._currentZoom += (this.zoomDistance - this._currentZoom) * this.zoomSpeed
    }

    /** @internal */
    updateAfterEntityRenderSystems() {
        // clamp camera zoom not to clip into solid terrain
        var maxZoom = cameraObstructionDistance(this)
        if (this._currentZoom > maxZoom) this._currentZoom = maxZoom
    }

}




/*
 *  check for obstructions behind camera by sweeping back an AABB
*/

function cameraObstructionDistance(self) {
    if (!self._sweepBox) {
        self._sweepBox = new aabb_3d__WEBPACK_IMPORTED_MODULE_1___default.a([0, 0, 0], [0.2, 0.2, 0.2])
        self._sweepGetVoxel = self.noa.world.getBlockSolidity.bind(self.noa.world)
        self._sweepVec = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
        self._sweepHit = () => true
    }
    var pos = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(self._sweepVec, self._localGetTargetPosition())
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(pos, pos, self.noa.worldOriginOffset)
    for (var i = 0; i < 3; i++) pos[i] -= 0.1
    self._sweepBox.setPosition(pos)
    var dist = Math.max(self.zoomDistance, self.currentZoom) + 0.1
    gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.scale(self._sweepVec, self.getDirection(), -dist)
    return voxel_aabb_sweep__WEBPACK_IMPORTED_MODULE_2___default()(self._sweepGetVoxel, self._sweepBox, self._sweepVec, self._sweepHit, true)
}






// workaround for this Chrome 63 + Win10 bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=781182
// later updated to also address: https://github.com/andyhall/noa/issues/153
function bugFix(state) {
    var dx = state.dx
    var dy = state.dy
    var badx = (Math.abs(dx) > 400 && Math.abs(dx / lastx) > 4)
    var bady = (Math.abs(dy) > 400 && Math.abs(dy / lasty) > 4)
    if (badx || bady) {
        state.dx = lastx
        state.dy = lasty
        lastx = (lastx + dx) / 2
        lasty = (lasty + dy) / 2
    } else {
        lastx = dx || 1
        lasty = dy || 1
    }
}

var lastx = 0
var lasty = 0


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/chunk.js":
/*!***************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/chunk.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** @internal */ /** works around typedoc bug #842 */

var ndarray = __webpack_require__(/*! ndarray */ "../../node_modules/ndarray/ndarray.js")

/* harmony default export */ __webpack_exports__["default"] = (Chunk);


/* 
 * 
 *   Chunk
 * 
 *  Stores and manages voxel ids and flags for each voxel within chunk
 * 
 */





/*
 *
 *    Chunk constructor
 *
 */

function Chunk(noa, requestID, ci, cj, ck, size, dataArray) {
    this.noa = noa
    this.isDisposed = false

    // voxel data and properties
    this.requestID = requestID     // id sent to game client
    this.voxels = dataArray
    this.i = ci
    this.j = cj
    this.k = ck
    this.size = size
    this.x = ci * size
    this.y = cj * size
    this.z = ck * size
    this.pos = [this.x, this.y, this.z]

    // flags to track if things need re-meshing
    this._terrainDirty = false
    this._objectsDirty = false

    // inits state of terrain / object meshing
    noa._terrainMesher.initChunk(this)
    noa._objectMesher.initChunk(this)

    this.isFull = false
    this.isEmpty = false

    // references to neighboring chunks, if they exist (filled in by `world`)
    var narr = Array.from(Array(27), () => null)
    this._neighbors = ndarray(narr, [3, 3, 3]).lo(1, 1, 1)
    this._neighbors.set(0, 0, 0, this)
    this._neighborCount = 0
    this._timesMeshed = 0

    // passes through voxel contents, calling block handlers etc.
    scanVoxelData(this)
}


// expose logic internally to create and update the voxel data array
Chunk._createVoxelArray = function (size) {
    var arr = new Uint16Array(size * size * size)
    return ndarray(arr, [size, size, size])
}

Chunk.prototype._updateVoxelArray = function (dataArray) {
    // dispose current object blocks
    callAllBlockHandlers(this, 'onUnload')
    this.noa._objectMesher.disposeChunk(this)
    this.noa._terrainMesher.disposeChunk(this)
    this.voxels = dataArray
    this._terrainDirty = false
    this._objectsDirty = false
    this.noa._objectMesher.initChunk(this)
    this.noa._terrainMesher.initChunk(this)
    scanVoxelData(this)
}








/*
 *
 *    Chunk API
 *
 */

// get/set deal with block IDs, so that this class acts like an ndarray

Chunk.prototype.get = function (i, j, k) {
    return this.voxels.get(i, j, k)
}

Chunk.prototype.getSolidityAt = function (i, j, k) {
    var solidLookup = this.noa.registry._solidityLookup
    return solidLookup[this.voxels.get(i, j, k)]
}

Chunk.prototype.set = function (i, j, k, newID) {
    var oldID = this.voxels.get(i, j, k)
    if (newID === oldID) return

    // update voxel data
    this.voxels.set(i, j, k, newID)

    // lookup tables from registry, etc
    var solidLookup = this.noa.registry._solidityLookup
    var objectLookup = this.noa.registry._objectLookup
    var opaqueLookup = this.noa.registry._opacityLookup
    var handlerLookup = this.noa.registry._blockHandlerLookup

    // voxel lifecycle handling
    var hold = handlerLookup[oldID]
    var hnew = handlerLookup[newID]
    if (hold) callBlockHandler(this, hold, 'onUnset', i, j, k)
    if (hnew) callBlockHandler(this, hnew, 'onSet', i, j, k)

    // track object block states
    var objMesher = this.noa._objectMesher
    var objOld = objectLookup[oldID]
    var objNew = objectLookup[newID]
    if (objOld) objMesher.setObjectBlock(this, 0, i, j, k)
    if (objNew) objMesher.setObjectBlock(this, newID, i, j, k)

    // track full/emptiness and dirty flags for the chunk
    if (!opaqueLookup[newID]) this.isFull = false
    if (newID !== 0) this.isEmpty = false

    var solidityChanged = (solidLookup[oldID] !== solidLookup[newID])
    var opacityChanged = (opaqueLookup[oldID] !== opaqueLookup[newID])

    if (objOld || objNew) this._objectsDirty = true
    if (solidityChanged || opacityChanged
        || (!objNew && (newID !== 0))) this._terrainDirty = true

    if (this._terrainDirty || this._objectsDirty) {
        this.noa.world._queueChunkForRemesh(this)
    }

    // neighbors only affected if solidity or opacity changed on an edge
    if (solidityChanged || opacityChanged) {
        var edge = this.size - 1
        var imin = (i === 0) ? -1 : 0
        var jmin = (j === 0) ? -1 : 0
        var kmin = (k === 0) ? -1 : 0
        var imax = (i === edge) ? 1 : 0
        var jmax = (j === edge) ? 1 : 0
        var kmax = (k === edge) ? 1 : 0
        for (var ni = imin; ni <= imax; ni++) {
            for (var nj = jmin; nj <= jmax; nj++) {
                for (var nk = kmin; nk <= kmax; nk++) {
                    if ((ni | nj | nk) === 0) continue
                    var nab = this._neighbors.get(ni, nj, nk)
                    if (!nab) return
                    nab._terrainDirty = true
                    this.noa.world._queueChunkForRemesh(nab)
                }
            }
        }
    }
}



// helper to call handler of a given type at a particular xyz
function callBlockHandler(chunk, handlers, type, i, j, k) {
    var handler = handlers[type]
    if (!handler) return
    handler(chunk.x + i, chunk.y + j, chunk.z + k)
}


// gets called by World when this chunk has been queued for remeshing
Chunk.prototype.updateMeshes = function () {
    if (this._terrainDirty) {
        this.noa._terrainMesher.meshChunk(this)
        this._timesMeshed++
        this._terrainDirty = false
    }
    if (this._objectsDirty) {
        this.noa._objectMesher.buildObjectMeshes()
        this._objectsDirty = false
    }
}












/*
 * 
 *      Init
 * 
 *  Scans voxel data, processing object blocks and setting chunk flags
 * 
*/

function scanVoxelData(chunk) {
    // flags for tracking if chunk is entirely opaque or transparent
    var fullyOpaque = true
    var fullyAir = true

    var voxels = chunk.voxels
    var data = voxels.data
    var len = voxels.shape[0]
    var opaqueLookup = chunk.noa.registry._opacityLookup
    var handlerLookup = chunk.noa.registry._blockHandlerLookup
    var objectLookup = chunk.noa.registry._objectLookup
    var objMesher = chunk.noa._objectMesher
    for (var i = 0; i < len; ++i) {
        for (var j = 0; j < len; ++j) {
            var index = voxels.index(i, j, 0)
            for (var k = 0; k < len; ++k, ++index) {
                var id = data[index]
                // skip air blocks
                if (id === 0) {
                    fullyOpaque = false
                    continue
                }
                fullyOpaque = fullyOpaque && opaqueLookup[id]
                fullyAir = false
                // handle object blocks and handlers
                if (objectLookup[id]) {
                    objMesher.setObjectBlock(chunk, id, i, j, k)
                    chunk._objectsDirty = true
                }
                var handlers = handlerLookup[id]
                if (handlers) {
                    callBlockHandler(chunk, handlers, 'onLoad', i, j, k)
                }
            }
        }
    }

    chunk.isFull = fullyOpaque
    chunk.isEmpty = fullyAir
    chunk._terrainDirty = !chunk.isEmpty
}











// dispose function - just clears properties and references

Chunk.prototype.dispose = function () {
    // look through the data for onUnload handlers
    callAllBlockHandlers(this, 'onUnload')

    // let meshers dispose their stuff
    this.noa._objectMesher.disposeChunk(this)
    this.noa._terrainMesher.disposeChunk(this)

    // apparently there's no way to dispose typed arrays, so just null everything
    this.voxels.data = null
    this.voxels = null
    this._neighbors.data = null
    this._neighbors = null

    this.isDisposed = true
}


// helper to call a given handler for all blocks in the chunk
function callAllBlockHandlers(chunk, type) {
    var voxels = chunk.voxels
    var data = voxels.data
    var handlerLookup = chunk.noa.registry._blockHandlerLookup
    var len = voxels.shape[0]
    for (var i = 0; i < len; ++i) {
        for (var j = 0; j < len; ++j) {
            var index = voxels.index(i, j, 0)
            for (var k = 0; k < len; ++k, ++index) {
                var id = data[index]
                if (id > 0 && handlerLookup[id]) {
                    callBlockHandler(chunk, handlerLookup[id], type, i, j, k)
                }
            }
        }
    }
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/container.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/container.js ***!
  \*******************************************************************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var micro_game_shell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micro-game-shell */ "../../node_modules/micro-game-shell/src/micro-game-shell.js");



// import { MicroGameShell } from '/Users/andy/dev/npm-modules/micro-game-shell'




/**
 * `noa.container` - manages the game's HTML container element, canvas, 
 * fullscreen, pointerLock, and so on.
 * 
 * This module wraps `micro-game-shell`, which does most of the implementation.
 * 
 * @emits DOMready
 * @emits gainedPointerLock
 * @emits lostPointerLock
 */

class Container extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {

    /** @internal @prop _noa */
    /** @internal @prop _shell */

    /** The game's DOM element container
     * @prop element
    */

    /** The `canvas` element that the game will draw into
     * @prop canvas
    */

    /** Whether the browser supports pointerLock. Read-only!
     * @prop supportsPointerLock
    */

    /** Whether the user's pointer is within the game area. Read-only!
     * @prop pointerInGame
    */

    /** Whether the game is focused. Read-only!
     * @prop isFocused
    */

    /** Gets the current state of pointerLock. Read-only!
     * @prop hasPointerLock
    */



    /** @internal */
    constructor(noa, opts) {
        super()

        opts = opts || {}
        this._noa = noa

        this.element = opts.domElement || createContainerDiv()
        this.canvas = getOrCreateCanvas(this.element)

        // shell manages tick/render rates, and pointerlock/fullscreen
        var pollTime = 10
        this._shell = new micro_game_shell__WEBPACK_IMPORTED_MODULE_1__["MicroGameShell"](this.element, pollTime)
        this._shell.tickRate = opts.tickRate
        this._shell.maxRenderRate = opts.maxRenderRate
        this._shell.stickyPointerLock = opts.stickyPointerLock
        this._shell.stickyFullscreen = opts.stickyFullscreen


        // mouse state and feature detection
        this.supportsPointerLock = false
        this.pointerInGame = false
        this.isFocused = !!document.hasFocus()
        this.hasPointerLock = false

        // core timing events
        this._shell.onTick = noa.tick.bind(noa)
        this._shell.onRender = noa.render.bind(noa)

        // shell listeners
        this._shell.onPointerLockChanged = (hasPL) => {
            this.hasPointerLock = hasPL
            this.emit((hasPL) ? 'gainedPointerLock' : 'lostPointerLock')
            // this works around a Firefox bug where no mouse-in event 
            // gets issued after starting pointerlock
            if (hasPL) this.pointerInGame = true
        }

        // catch and relay domReady event
        this._shell.onInit = () => {
            this._shell.onResize = noa.rendering.resize.bind(noa.rendering)
            // listeners to track when game has focus / pointer
            detectPointerLock(this)
            this.element.addEventListener('mouseenter', () => { this.pointerInGame = true })
            this.element.addEventListener('mouseleave', () => { this.pointerInGame = false })
            window.addEventListener('focus', () => { this.isFocused = true })
            window.addEventListener('blur', () => { this.isFocused = false })
            // catch edge cases for initial states
            var onFirstMousedown = () => {
                this.pointerInGame = true
                this.isFocused = true
                this.element.removeEventListener('mousedown', onFirstMousedown)
            }
            this.element.addEventListener('mousedown', onFirstMousedown)
            // emit for engine core
            this.emit('DOMready')
            // done and remove listener
            this._shell.onInit = null
        }
    }


    /*
     *
     *
     *              PUBLIC API 
     *
     *
    */

    /** @internal */
    appendTo(htmlElement) {
        this.element.appendChild(htmlElement)
    }

    /** 
     * Sets whether `noa` should try to acquire or release pointerLock
    */
    setPointerLock(lock = false) {
        // not sure if this will work robustly
        this._shell.pointerLock = !!lock
    }
}



/*
 *
 *
 *              INTERNALS
 *
 *
*/


function createContainerDiv() {
    // based on github.com/mikolalysenko/game-shell - makeDefaultContainer()
    var container = document.createElement("div")
    container.tabIndex = 1
    container.style.position = "fixed"
    container.style.left = "0px"
    container.style.right = "0px"
    container.style.top = "0px"
    container.style.bottom = "0px"
    container.style.height = "100%"
    container.style.overflow = "hidden"
    document.body.appendChild(container)
    document.body.style.overflow = "hidden" //Prevent bounce
    document.body.style.height = "100%"
    container.id = 'noa-container'
    return container
}


function getOrCreateCanvas(el) {
    // based on github.com/stackgl/gl-now - default canvas
    var canvas = el.querySelector('canvas')
    if (!canvas) {
        canvas = document.createElement('canvas')
        canvas.style.position = "absolute"
        canvas.style.left = "0px"
        canvas.style.top = "0px"
        canvas.style.height = "100%"
        canvas.style.width = "100%"
        canvas.id = 'noa-canvas'
        el.insertBefore(canvas, el.firstChild)
    }
    return canvas
}


// set up stuff to detect pointer lock support.
// Needlessly complex because Chrome/Android claims to support but doesn't.
// For now, just feature detect, but assume no support if a touch event occurs
// TODO: see if this makes sense on hybrid touch/mouse devices
function detectPointerLock(self) {
    var lockElementExists =
        ('pointerLockElement' in document) ||
        ('mozPointerLockElement' in document) ||
        ('webkitPointerLockElement' in document)
    if (lockElementExists) {
        self.supportsPointerLock = true
        var listener = function (e) {
            self.supportsPointerLock = false
            document.removeEventListener(e.type, listener)
        }
        document.addEventListener('touchmove', listener)
    }
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/entities.js":
/*!******************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/entities.js ***!
  \******************************************************************************************/
/*! exports provided: Entities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entities", function() { return Entities; });
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js");
/* harmony import */ var gl_vec3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gl_vec3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ent_comp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ent-comp */ "../../node_modules/ent-comp/src/ECS.js");
/* harmony import */ var ent_comp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ent_comp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/position */ "../../node_modules/noa-engine/src/components/position.js");
/* harmony import */ var _components_physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/physics */ "../../node_modules/noa-engine/src/components/physics.js");



// var ECS = require('../../../../npm-modules/ent-comp')






var defaultOptions = {
    shadowDistance: 10,
}


/**
 * `noa.entities` - manages entities and components.
 * 
 * This class extends [ent-comp](https://github.com/andyhall/ent-comp), 
 * a general-purpose ECS. It's also decorated with noa-specific helpers and 
 * accessor functions for querying entity positions, etc.
 * 
 * Expects entity definitions in a specific format - see source `components` 
 * folder for examples.
 * 
 * This module uses the following default options (from the options
 * object passed to the [[Engine]]):
 * 
 * ```js
 * var defaults = {
 *     shadowDistance: 10,
 * }
 * ```
*/

class Entities extends ent_comp__WEBPACK_IMPORTED_MODULE_1___default.a {

    /** @internal @prop noa */
    /** @internal @prop cameraSmoothed */

    // declare some accessors that will get made later

    /**
     * Returns whether the entity has a physics body
     * @type {(id:number) => boolean}
     * @prop hasPhysics
    */

    /**
     * Returns whether the entity has a mesh
     * @type {(id:number) => boolean}
     * @prop hasMesh
    */

    /**
     * Returns whether the entity has a position
     * @type {(id:number) => boolean}
     * @prop hasPosition
    */

    /**
     * Returns the entity's position component state
     * @type {(id:number) => {
     *      position: number[], width: number, height: number,
     *      _localPosition: any, _renderPosition: any, _extents: any,
     * }}
     * @prop getPositionData
    */

    /**
     * Returns the entity's position vector.
     * Note, will throw if the entity doesn't have the position component!
     * @type {(id:number) => number[]}
     * @prop getPosition
    */

    /**
     * Returns the entity's `physics` component state.
     * @type {(id:number) => { body:any }}
     * @prop getPhysics
    */

    /**
     * Returns the entity's physics body
     * Note, will throw if the entity doesn't have the position component!
     * @type {(id:number) => { any }}
     * @prop getPhysicsBody
    */

    /**
     * Returns the entity's `mesh` component state
     * @type {(id:number) => {mesh:any, offset:number[]}}
     * @prop getMeshData
    */

    /**
     * Returns the entity's `movement` component state
     * @type {(id:number) => import('../components/movement').MovementState}
     * @prop getMovement
    */

    /**
     * Returns the entity's `collideTerrain` component state
     * @type {(id:number) => {callback: function}}
     * @prop etCollideTerrain
    */

    /**
     * Returns the entity's `collideEntities` component state
     * @type {(id:number) => {
     *      cylinder:boolean, collideBits:number, 
     *      collideMask:number, callback: function}}
     * @prop getCollideEntities
    */

    /** 
     * A hash of the names of all registered components.
     * @type {Object<string, string>}
     * @prop names
    */


    /** @internal */
    constructor(noa, opts) {
        super()

        this.noa = noa
        opts = Object.assign({}, defaultOptions, opts)

        // properties
        /** Hash containing the component names of built-in components. */
        this.names = {}

        // optional arguments to supply to component creation functions
        var componentArgs = {
            'shadow': opts.shadowDistance,
        }

        // Bundler magic to import everything in the ../components directory
        // each component module exports a default function: (noa) => compDefinition
        //@ts-expect-error
        var reqContext = __webpack_require__("../../node_modules/noa-engine/src/components sync \\.js$")
        for (var name of reqContext.keys()) {
            // convert name ('./foo.js') to bare name ('foo')
            var bareName = /\.\/(.*)\.js/.exec(name)[1]
            var arg = componentArgs[bareName] || undefined
            var compFn = reqContext(name)
            if (compFn.default) compFn = compFn.default
            var compDef = compFn(noa, arg)
            var comp = this.createComponent(compDef)
            this.names[bareName] = comp
        }

        // create some ECS state accessors
        // (these are moderately faster than the general case APIs)

        // general
        this.hasPhysics = this.getComponentAccessor(this.names.physics)
        this.cameraSmoothed = this.getComponentAccessor(this.names.smoothCamera)
        this.hasPosition = this.getComponentAccessor(this.names.position)
        this.hasMesh = this.getComponentAccessor(this.names.mesh)
        this.getMeshData = this.getStateAccessor(this.names.mesh)

        // position
        var getPos = this.getStateAccessor(this.names.position)
        this.getPositionData = getPos
        this.getPosition = (id) => getPos(id).position

        // physics
        var getPhys = this.getStateAccessor(this.names.physics)
        this.getPhysics = getPhys
        this.getPhysicsBody = (id) => getPhys(id).body

        // misc
        this.getMovement = this.getStateAccessor(this.names.movement)
        this.getCollideTerrain = this.getStateAccessor(this.names.collideTerrain)
        this.getCollideEntities = this.getStateAccessor(this.names.collideEntities)

        // pairwise collideEntities event - this is for client to override
        this.onPairwiseEntityCollision = function (id1, id2) { }
    }




    /*
     * 
     * 
     *      PUBLIC ENTITY STATE ACCESSORS
     * 
     * 
    */


    /** Set an entity's position, and update all derived state.
     * 
     * In general, always use this to set an entity's position unless
     * you're familiar with engine internals.
     * 
     * ```js
     * noa.ents.setPosition(playerEntity, [5, 6, 7])
     * noa.ents.setPosition(playerEntity, 5, 6, 7)  // also works
     * ```
     * 
     * @param {number} id
     */
    setPosition(id, pos, y = 0, z = 0) {
        if (typeof pos === 'number') pos = [pos, y, z]
        // convert to local and defer impl
        var loc = this.noa.globalToLocal(pos, null, [])
        this._localSetPosition(id, loc)
    }

    /** Set an entity's size 
     * @param {number} xs
     * @param {number} ys
     * @param {number} zs
    */
    setEntitySize(id, xs, ys, zs) {
        var posDat = this.getPositionData(id)
        posDat.width = (xs + zs) / 2
        posDat.height = ys
        this._updateDerivedPositionData(id, posDat)
    }




    /**
     * called when engine rebases its local coords
     * @internal
     */
    _rebaseOrigin(delta) {
        for (var state of this.getStatesList(this.names.position)) {
            var locPos = state._localPosition
            var hw = state.width / 2
            nudgePosition(locPos, 0, -hw, hw, state.__id)
            nudgePosition(locPos, 1, 0, state.height, state.__id)
            nudgePosition(locPos, 2, -hw, hw, state.__id)
            gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.subtract(locPos, locPos, delta)
            this._updateDerivedPositionData(state.__id, state)
        }
    }

    /** @internal */
    _localGetPosition(id) {
        return this.getPositionData(id)._localPosition
    }

    /** @internal */
    _localSetPosition(id, pos) {
        var posDat = this.getPositionData(id)
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(posDat._localPosition, pos)
        this._updateDerivedPositionData(id, posDat)
    }


    /** 
     * helper to update everything derived from `_localPosition`
     * @internal 
    */
    _updateDerivedPositionData(id, posDat) {
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.copy(posDat._renderPosition, posDat._localPosition)
        var offset = this.noa.worldOriginOffset
        gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.add(posDat.position, posDat._localPosition, offset)
        Object(_components_position__WEBPACK_IMPORTED_MODULE_2__["updatePositionExtents"])(posDat)
        var physDat = this.getPhysics(id)
        if (physDat) Object(_components_physics__WEBPACK_IMPORTED_MODULE_3__["setPhysicsFromPosition"])(physDat, posDat)
    }





    /*
     *
     *
     *      OTHER ENTITY MANAGEMENT APIs
     * 
     *      note most APIs are on the original ECS module (ent-comp)
     *      these are some overlaid extras for noa
     *
     *
    */


    /** 
     * Safely add a component - if the entity already had the 
     * component, this will remove and re-add it.
    */
    addComponentAgain(id, name, state) {
        // removes component first if necessary
        if (this.hasComponent(id, name)) this.removeComponent(id, name)
        this.addComponent(id, name, state)
    }


    /** 
     * Checks whether a voxel is obstructed by any entity (with the 
     * `collidesTerrain` component)
    */
    isTerrainBlocked(x, y, z) {
        // checks if terrain location is blocked by entities
        var off = this.noa.worldOriginOffset
        var xlocal = Math.floor(x - off[0])
        var ylocal = Math.floor(y - off[1])
        var zlocal = Math.floor(z - off[2])
        var blockExt = [
            xlocal + 0.001, ylocal + 0.001, zlocal + 0.001,
            xlocal + 0.999, ylocal + 0.999, zlocal + 0.999,
        ]
        var list = this.getStatesList(this.names.collideTerrain)
        for (var i = 0; i < list.length; i++) {
            var id = list[i].__id
            var ext = this.getPositionData(id)._extents
            if (extentsOverlap(blockExt, ext)) return true
        }
        return false
    }



    /** 
     * Gets an array of all entities overlapping the given AABB
    */
    getEntitiesInAABB(box, withComponent) {
        // extents to test against
        var off = this.noa.worldOriginOffset
        var testExtents = [
            box.base[0] + off[0], box.base[1] + off[1], box.base[2] + off[2],
            box.max[0] + off[0], box.max[1] + off[1], box.max[2] + off[2],
        ]
        // entity position state list
        var entStates
        if (withComponent) {
            entStates = []
            for (var compState of this.getStatesList(withComponent)) {
                var pdat = this.getPositionData(compState.__id)
                if (pdat) entStates.push(pdat)
            }
        } else {
            entStates = this.getStatesList(this.names.position)
        }

        // run each test
        var hits = []
        for (var i = 0; i < entStates.length; i++) {
            var state = entStates[i]
            if (extentsOverlap(testExtents, state._extents)) {
                hits.push(state.__id)
            }
        }
        return hits
    }



    /** 
     * Helper to set up a general entity, and populate with some common components depending on arguments.
    */
    add(position, width, height, // required
        mesh, meshOffset, doPhysics, shadow) {

        var self = this

        // new entity
        var eid = this.createEntity()

        // position component
        this.addComponent(eid, this.names.position, {
            position: position || [0, 0, 0],
            width: width,
            height: height
        })

        // rigid body in physics simulator
        if (doPhysics) {
            // body = this.noa.physics.addBody(box)
            this.addComponent(eid, this.names.physics)
            var body = this.getPhysics(eid).body

            // handler for physics engine to call on auto-step
            var smoothName = this.names.smoothCamera
            body.onStep = function () {
                self.addComponentAgain(eid, smoothName)
            }
        }

        // mesh for the entity
        if (mesh) {
            if (!meshOffset) meshOffset = gl_vec3__WEBPACK_IMPORTED_MODULE_0___default.a.create()
            this.addComponent(eid, this.names.mesh, {
                mesh: mesh,
                offset: meshOffset
            })
        }

        // add shadow-drawing component
        if (shadow) {
            this.addComponent(eid, this.names.shadow, { size: width })
        }

        return eid
    }
}


/*
 * 
 * 
 * 
 *          HELPERS
 * 
 * 
 * 
*/

// safety helper - when rebasing, nudge extent away from 
// voxel boudaries, so floating point error doesn't carry us accross
function nudgePosition(pos, index, dmin, dmax, id) {
    var min = pos[index] + dmin
    var max = pos[index] + dmax
    if (Math.abs(min - Math.round(min)) < 0.002) pos[index] += 0.002
    if (Math.abs(max - Math.round(max)) < 0.001) pos[index] -= 0.001
}

// compare extent arrays
function extentsOverlap(extA, extB) {
    if (extA[0] > extB[3]) return false
    if (extA[1] > extB[4]) return false
    if (extA[2] > extB[5]) return false
    if (extA[3] < extB[0]) return false
    if (extA[4] < extB[1]) return false
    if (extA[5] < extB[2]) return false
    return true
}



/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/inputs.js":
/*!****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/inputs.js ***!
  \****************************************************************************************/
/*! exports provided: createInputs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInputs", function() { return createInputs; });
/* harmony import */ var game_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-inputs */ "../../node_modules/game-inputs/inputs.js");
/* harmony import */ var game_inputs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(game_inputs__WEBPACK_IMPORTED_MODULE_0__);


// import { Inputs as GameInputs } from '../../../../npm-modules/game-inputs'



var defaultOptions = {
    preventDefaults: false,
    stopPropagation: false,
    allowContextMenu: false,
}

var defaultBindings = {
    "forward": ["W", "<up>"],
    "left": ["A", "<left>"],
    "backward": ["S", "<down>"],
    "right": ["D", "<right>"],
    "fire": "<mouse 1>",
    "mid-fire": ["<mouse 2>", "Q"],
   // "alt-fire": ["<mouse 3>", "E"],
   "alt-fire": "<mouse 3>",
    "jump": "<space>",
    "sprint": "<shift>",
    "crouch": "<control>",
	"menu":"<escape>"
}

/**
 * @internal
 * @returns {Inputs}
 */
function createInputs(noa, opts, element) {
    opts = Object.assign({}, defaultOptions, opts)
    var inputs = game_inputs__WEBPACK_IMPORTED_MODULE_0___default()(element, opts)
    var b = opts.bindings || defaultBindings
    for (var name in b) {
        var arr = (Array.isArray(b[name])) ? b[name] : [b[name]]
        arr.unshift(name)
        inputs.bind.apply(inputs, arr)
    }
    return inputs
}







/**
 * `noa.inputs` - manages keybinds and mouse input.
 *
 * Extends [andyhall/game-inputs](https://github.com/andyhall/game-inputs),
 * see there for implementation and docs.
 * 
 * By default, the following bindings will be made automatically. 
 * You can undo bindings with `unbind`, or specify your own with a 
 * `bindings` property on the options object passed to the [[Engine]].
 * 
 * ```js
 * var defaultBindings = {
 *     "forward": ["W", "<up>"],
 *     "left": ["A", "<left>"],
 *     "backward": ["S", "<down>"],
 *     "right": ["D", "<right>"],
 *     "fire": "<mouse 1>",
 *     "mid-fire": ["<mouse 2>", "Q"],
 *     "alt-fire": ["<mouse 3>", "E"],
 *     "jump": "<space>",
 *     "sprint": "<shift>",
 *     "crouch": "<control>",
 * }
 * ```
 *
 * @typedef {Object} Inputs
 * @prop {boolean} disabled
 * @prop {Object} state Maps key binding names to input states.
 * @prop {(binding:string, ...keyCodes:string[]) => void} bind Binds one or more keycodes to a binding.
 * @prop {(binding:string) => void} unbind Unbinds all keyCodes from a binding.
 * @prop {import('events').EventEmitter} down Emits input start events (i.e. keyDown).
 * @prop {import('events').EventEmitter} up Emits input end events (i.e. keyUp).
*/




/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/objectMesher.js":
/*!**********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/objectMesher.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../../node_modules/noa-engine/src/lib/util.js");
/* harmony import */ var _babylonjs_core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Meshes/transformNode */ "../../node_modules/@babylonjs/core/Meshes/transformNode.js");
/* harmony import */ var _babylonjs_core_Meshes_thinInstanceMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Meshes/thinInstanceMesh */ "../../node_modules/@babylonjs/core/Meshes/thinInstanceMesh.js");
/** @internal */ /** works around typedoc bug #842 */





/* harmony default export */ __webpack_exports__["default"] = (ObjectMesher);

var PROFILE = 0





/*
 *
 *          Object meshing
 * 
 *      Per-chunk handling of the creation/disposal of static meshes
 *      associated with particular voxel IDs
 * 
 * 
*/


function ObjectMesher(noa) {

    // transform node for all instance meshes to be parented to
    this.rootNode = new _babylonjs_core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_1__["TransformNode"]('objectMeshRoot', noa.rendering._scene)

    // tracking rebase amount inside matrix data
    var rebaseOffset = [0, 0, 0]

    // flag to trigger a rebuild after a chunk is disposed
    var rebuildNextTick = false

    // mock object to pass to customMesh handler, to get transforms
    var transformObj = new _babylonjs_core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_1__["TransformNode"]('')

    // internal storage of instance managers, keyed by ID
    // has check to dedupe by mesh, since babylon chokes on
    // separate sets of instances for the same mesh/clone/geometry
    var managers = {}
    var getManager = (id) => {
        if (managers[id]) return managers[id]
        var mesh = noa.registry._blockMeshLookup[id]
        for (var id2 in managers) {
            var prev = managers[id2].mesh
            if (prev === mesh || (prev.geometry === mesh.geometry)) {
                return managers[id] = managers[id2]
            }
        }
        return managers[id] = new InstanceManager(noa, mesh)
    }




    /*
     * 
     *      public API
     * 
    */


    // add any properties that will get used for meshing
    this.initChunk = function (chunk) {
        chunk._objectBlocks = {}
    }


    // called by world when an object block is set or cleared
    this.setObjectBlock = function (chunk, blockID, i, j, k) {
        var x = chunk.x + i
        var y = chunk.y + j
        var z = chunk.z + k
        var key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["locationHasher"])(x, y, z)

        var oldID = chunk._objectBlocks[key] || 0
        if (oldID === blockID) return // should be impossible
        if (oldID > 0) {
            var oldMgr = getManager(oldID)
            oldMgr.removeInstance(chunk, key)
        }

        if (blockID > 0) {
            // if there's a block event handler, call it with
            // a mock object so client can add transforms
            var handlers = noa.registry._blockHandlerLookup[blockID]
            var onCreate = handlers && handlers.onCustomMeshCreate
            if (onCreate) {
                transformObj.position.copyFromFloats(0.5, 0, 0.5)
                transformObj.scaling.setAll(1)
                transformObj.rotation.setAll(0)
                onCreate(transformObj, x, y, z)
            }
            var mgr = getManager(blockID)
            var xform = (onCreate) ? transformObj : null
            mgr.addInstance(chunk, key, i, j, k, xform, rebaseOffset)
        }

        if (oldID > 0 && !blockID) delete chunk._objectBlocks[key]
        if (blockID > 0) chunk._objectBlocks[key] = blockID
    }



    // called by world when it knows that objects have been updated
    this.buildObjectMeshes = function () {
        profile_hook('start')

        for (var id in managers) {
            var mgr = managers[id]
            mgr.updateMatrix()
            if (mgr.count === 0) mgr.dispose()
            if (mgr.disposed) delete managers[id]
        }

        profile_hook('rebuilt')
        profile_hook('end')
    }



    // called by world at end of chunk lifecycle
    this.disposeChunk = function (chunk) {
        for (var key in chunk._objectBlocks) {
            var id = chunk._objectBlocks[key]
            if (id > 0) {
                var mgr = getManager(id)
                mgr.removeInstance(chunk, key)
            }
        }
        chunk._objectBlocks = null

        // since some instance managers will have been updated
        rebuildNextTick = true
    }



    // tick handler catches case where objects are dirty due to disposal
    this.tick = function () {
        if (rebuildNextTick) {
            this.buildObjectMeshes()
            rebuildNextTick = false
        }
    }



    // world rebase handler
    this._rebaseOrigin = function (delta) {
        rebaseOffset[0] += delta[0]
        rebaseOffset[1] += delta[1]
        rebaseOffset[2] += delta[2]

        for (var id1 in managers) managers[id1].rebased = false
        for (var id2 in managers) {
            var mgr = managers[id2]
            if (mgr.rebased) continue
            for (var i = 0; i < mgr.count; i++) {
                var ix = i << 4
                mgr.buffer[ix + 12] -= delta[0]
                mgr.buffer[ix + 13] -= delta[1]
                mgr.buffer[ix + 14] -= delta[2]
            }
            mgr.rebased = true
            mgr.dirty = true
        }
        rebuildNextTick = true
    }

}















/*
 * 
 * 
 *      manager class for thin instances of a given object block ID 
 * 
 * 
*/

function InstanceManager(noa, mesh) {
    this.mesh = mesh
    this.buffer = null
    this.capacity = 0
    this.count = 0
    this.dirty = false
    this.rebased = true
    this.disposed = false
    // dual struct to map keys (locations) to buffer locations, and back
    this.keyToIndex = {}
    this.locToKey = []
    // prepare mesh for rendering
    this.mesh.position.setAll(0)
    this.mesh.parent = noa._objectMesher.rootNode
    noa.rendering.addMeshToScene(this.mesh, false)

    this.mesh.doNotSyncBoundingInfo = true
    this.mesh.alwaysSelectAsActiveMesh = true
}



InstanceManager.prototype.dispose = function () {
    if (this.disposed) return
    this.mesh.thinInstanceCount = 0
    this.setCapacity(0)
    this.mesh.isVisible = false
    this.mesh = null
    this.keyToIndex = null
    this.locToKey = null
    this.disposed = true
}


InstanceManager.prototype.addInstance = function (chunk, key, i, j, k, transform, rebaseVec) {
    if (this.count === this.capacity) expandBuffer(this)
    var ix = this.count << 4
    this.locToKey[this.count] = key
    this.keyToIndex[key] = ix
    if (transform) {
        transform.position.x += (chunk.x - rebaseVec[0]) + i
        transform.position.y += (chunk.y - rebaseVec[1]) + j
        transform.position.z += (chunk.z - rebaseVec[2]) + k
        transform.resetLocalMatrix()
        var xformArr = transform._localMatrix._m
        copyMatrixData(xformArr, 0, this.buffer, ix)
    } else {
        var matArray = tempMatrixArray
        matArray[12] = (chunk.x - rebaseVec[0]) + i + 0.5
        matArray[13] = (chunk.y - rebaseVec[1]) + j
        matArray[14] = (chunk.z - rebaseVec[2]) + k + 0.5
        copyMatrixData(matArray, 0, this.buffer, ix)
    }
    this.count++
    this.dirty = true
}


InstanceManager.prototype.removeInstance = function (chunk, key) {
    var remIndex = this.keyToIndex[key]
    if (!(remIndex >= 0)) throw 'tried to remove object instance not in storage'
    delete this.keyToIndex[key]
    var remLoc = remIndex >> 4
    // copy tail instance's data to location of one we're removing
    var tailLoc = this.count - 1
    if (remLoc !== tailLoc) {
        var tailIndex = tailLoc << 4
        copyMatrixData(this.buffer, tailIndex, this.buffer, remIndex)
        // update key/location structs
        var tailKey = this.locToKey[tailLoc]
        this.keyToIndex[tailKey] = remIndex
        this.locToKey[remLoc] = tailKey
    }
    this.count--
    this.dirty = true
    if (this.count < this.capacity * 0.4) contractBuffer(this)
}


InstanceManager.prototype.updateMatrix = function () {
    if (!this.dirty) return
    this.mesh.thinInstanceCount = this.count
    this.mesh.thinInstanceBufferUpdated('matrix')
    this.mesh.isVisible = (this.count > 0)
    this.dirty = false
}



InstanceManager.prototype.setCapacity = function (size) {
    this.capacity = size || 0
    if (!size) {
        this.buffer = null
    } else {
        var prev = this.buffer
        this.buffer = new Float32Array(this.capacity * 16)
        if (prev) {
            var len = Math.min(prev.length, this.buffer.length)
            for (var i = 0; i < len; i++) this.buffer[i] = prev[i]
        }
    }
    this.mesh.thinInstanceSetBuffer('matrix', this.buffer)
    this.dirty = false
}


function expandBuffer(mgr) {
    var size = (mgr.capacity < 16) ? 16 : mgr.capacity * 2
    mgr.setCapacity(size)
}

function contractBuffer(mgr) {
    var size = (mgr.capacity / 2) | 0
    if (size < 100) return
    mgr.setCapacity(size)
    mgr.locToKey.length = Math.max(mgr.locToKey.length, mgr.capacity)
}






// helpers

var tempMatrixArray = [
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0,
]

function copyMatrixData(src, srcOff, dest, destOff) {
    for (var i = 0; i < 16; i++) dest[destOff + i] = src[srcOff + i]
}













var profile_hook = (PROFILE) ?
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["makeProfileHook"])(PROFILE, 'Object meshing') : () => { }


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/physics.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/physics.js ***!
  \*****************************************************************************************/
/*! exports provided: Physics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Physics", function() { return Physics; });
/* harmony import */ var voxel_physics_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! voxel-physics-engine */ "../../node_modules/voxel-physics-engine/src/index.js");


// import { Physics } from '../../../../npm-modules/voxel-physics-engine'



var defaultOptions = {
    gravity: [0, -10, 0],
    airDrag: 0.1,
}

/**
 * `noa.physics` - Wrapper module for the physics engine.
 * 
 * This module extends 
 * [voxel-physics-engine](https://github.com/andyhall/voxel-physics-engine),
 * so turn on "Inherited" to see its APIs here, or view the base module 
 * for full docs.
 * 
 * This module uses the following default options (from the options
 * object passed to the [[Engine]]):
 * 
 * ```js
 * {
 *     gravity: [0, -10, 0],
 *     airDrag: 0.1,
 *     fluidDrag: 0.4,
 *     fluidDensity: 2.0,
 *     minBounceImpulse: .5,      // cutoff for a bounce to occur
 * }
 * ```
*/

class Physics extends voxel_physics_engine__WEBPACK_IMPORTED_MODULE_0__["Physics"] {

    /** @internal */
    constructor(noa, opts) {
        opts = Object.assign({}, defaultOptions, opts)
        var world = noa.world
        var solidLookup = noa.registry._solidityLookup
        var fluidLookup = noa.registry._fluidityLookup

        // physics engine runs in offset coords, so voxel getters need to match
        var offset = noa.worldOriginOffset

        var blockGetter = (x, y, z) => {
            var id = world.getBlockID(x + offset[0], y + offset[1], z + offset[2])
            return solidLookup[id]
        }
        var isFluidGetter = (x, y, z) => {
            var id = world.getBlockID(x + offset[0], y + offset[1], z + offset[2])
            return fluidLookup[id]
        }

        super(opts, blockGetter, isFluidGetter)
    }

}





/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/registry.js":
/*!******************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/registry.js ***!
  \******************************************************************************************/
/*! exports provided: Registry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });


/*
 *  data structs in the registry:
 *  registry 
 *      blockSolidity:     id -> boolean
 *      blockOpacity:      id -> boolean
 *      blockIsFluid:      id -> boolean
 *      blockMats:         id -> 6x matID  [-x, +x, -y, +y, -z, +z]
 *      blockProps         id -> obj of less-often accessed properties
 *      blockMeshes:       id -> obj/null (custom mesh to instantiate)
 *      blockHandlers      id -> instance of `BlockCallbackHolder` or null 
 *      matIDs             matName -> matID (int)
 *      matData            matID -> { color, alpha, texture, textureAlpha }
*/


var defaults = {
    texturePath: ''
}

var blockDefaults = {
    solid: true,
    opaque: true,
    fluidDensity: 1.0,
    viscosity: 0.5,
}


// voxel ID now uses the whole Uint16Array element
var MAX_BLOCK_ID = (1 << 16) - 1




/* 
 * 
 *      data structures
 *      TODO: move these inside class
 * 
*/

// lookup arrays for block props and flags - all keyed by blockID
// fill in first value for id=0, empty space
var blockSolidity = [false]
var blockOpacity = [false]
var blockIsFluid = [false]
var blockIsObject = [false]
var blockMats = [0, 0, 0, 0, 0, 0]
var blockProps = [null]
var blockMeshes = [null]
var blockHandlers = [null]

// material data structs
var matIDs = {} // mat name -> id
var matData = [null] // mat id -> { color, alpha, texture, textureAlpha }




/**
 * `noa.registry` - Where you register your voxel types, 
 * materials, properties, and events.
 * 
 * This module uses the following default options (from the options
 * object passed to the [[Engine]]):
 * 
 * ```js
 * var defaults = {
 *     texturePath: ''
 * }
 * ```
*/

class Registry {

    /** @internal @prop noa */
    /** @internal @prop _texturePath */


    /** @internal */
    constructor(noa, opts) {
        this.noa = noa
        opts = Object.assign({}, defaults, opts)

        this._texturePath = opts.texturePath


        /* 
         * 
         *      Block registration methods
         * 
         */



        /**
         * Register (by integer ID) a block type and its parameters.
         * 
         *  `id` param: integer, currently 1..255. This needs to be passed in by the 
         *    client because it goes into the chunk data, which someday will get serialized.
         * 
         *  `options` param: Recognized fields for the options object:
         * 
         *  * material: can be:
         *      * one (String) material name
         *      * array of 2 names: [top/bottom, sides]
         *      * array of 3 names: [top, bottom, sides]
         *      * array of 6 names: [-x, +x, -y, +y, -z, +z]
         *    If not specified, terrain won't be meshed for the block type
         *  * solid: (true) solidity for physics purposes
         *  * opaque: (true) fully obscures neighboring blocks
         *  * fluid: (false) whether nonsolid block is a fluid (buoyant, viscous..)
         *  * blockMesh: (null) if specified, noa will create a copy this mesh in the voxel
         *  * fluidDensity: (1.0) for fluid blocks
         *  * viscosity: (0.5) for fluid blocks
         *  * onLoad(): block event handler
         *  * onUnload(): block event handler
         *  * onSet(): block event handler
         *  * onUnset(): block event handler
         *  * onCustomMeshCreate(): block event handler
         */

        this.registerBlock = function (id, options = null) {
            if (!options) options = {}
            blockDefaults.solid = !options.fluid
            blockDefaults.opaque = !options.fluid
            var opts = Object.assign({}, blockDefaults, options)

            // console.log('register block: ', id, opts)
            if (id < 1 || id > MAX_BLOCK_ID) throw 'Block id out of range: ' + id

            // if block ID is greater than current highest ID, 
            // register fake blocks to avoid holes in lookup arrays
            while (id > blockSolidity.length) {
                this.registerBlock(blockSolidity.length, {})
            }

            // flags default to solid, opaque, nonfluid
            blockSolidity[id] = !!opts.solid
            blockOpacity[id] = !!opts.opaque
            blockIsFluid[id] = !!opts.fluid

            // store any custom mesh
            blockIsObject[id] = !!opts.blockMesh
            blockMeshes[id] = opts.blockMesh || null

            // parse out material parameter
            // always store 6 material IDs per blockID, so material lookup is monomorphic
            var mat = opts.material || null
            var mats
            if (!mat) {
                mats = [null, null, null, null, null, null]
            } else if (typeof mat == 'string') {
                mats = [mat, mat, mat, mat, mat, mat]
            } else if (mat.length && mat.length == 2) {
                // interpret as [top/bottom, sides]
                mats = [mat[1], mat[1], mat[0], mat[0], mat[1], mat[1]]
            } else if (mat.length && mat.length == 3) {
                // interpret as [top, bottom, sides]
                mats = [mat[2], mat[2], mat[0], mat[1], mat[2], mat[2]]
            } else if (mat.length && mat.length == 6) {
                // interpret as [-x, +x, -y, +y, -z, +z]
                mats = mat
            } else throw 'Invalid material parameter: ' + mat

            // argument is material name, but store as material id, allocating one if needed
            for (var i = 0; i < 6; ++i) {
                blockMats[id * 6 + i] = getMaterialId(this, matIDs, mats[i], true)
            }

            // props data object - currently only used for fluid properties
            blockProps[id] = {}

            // if block is fluid, initialize properties if needed
            if (blockIsFluid[id]) {
                blockProps[id].fluidDensity = opts.fluidDensity
                blockProps[id].viscosity = opts.viscosity
            }

            // event callbacks
            var hasHandler = opts.onLoad || opts.onUnload || opts.onSet || opts.onUnset || opts.onCustomMeshCreate
            blockHandlers[id] = (hasHandler) ? new BlockCallbackHolder(opts) : null

            return id
        }




        /**
         * Register (by name) a material and its parameters.
         * 
         * @param name
         * @param color
         * @param textureURL
         * @param texHasAlpha
         * @param renderMaterial an optional BABYLON material to be used for block faces with this block material
         */

        this.registerMaterial = function (name, color = [1, 1, 1], textureURL = '', texHasAlpha = false, renderMaterial = null) {
            // console.log('register mat: ', name, color, textureURL)
            var id = matIDs[name] || matData.length
            matIDs[name] = id
            var alpha = 1
            if (color && color.length == 4) {
                alpha = color.pop()
            }
            matData[id] = {
                color: color || [1, 1, 1],
                alpha: alpha,
                texture: textureURL ? this._texturePath + textureURL : '',
                textureAlpha: !!texHasAlpha,
                renderMat: renderMaterial || null,
            }
            return id
        }



        /*
         *      quick accessors for querying block ID stuff
         */

        /** 
         * block solidity (as in physics) 
         * @param id
         */
        this.getBlockSolidity = function (id) {
            return blockSolidity[id]
        }

        /**
         * block opacity - whether it obscures the whole voxel (dirt) or 
         * can be partially seen through (like a fencepost, etc)
         * @param id
         */
        this.getBlockOpacity = function (id) {
            return blockOpacity[id]
        }

        /** 
         * block is fluid or not
         * @param id
         */
        this.getBlockFluidity = function (id) {
            return blockIsFluid[id]
        }

        /** 
         * Get block property object passed in at registration
         * @param id
         */
        this.getBlockProps = function (id) {
            return blockProps[id]
        }

        // look up a block ID's face material
        // dir is a value 0..5: [ +x, -x, +y, -y, +z, -z ]
        this.getBlockFaceMaterial = function (blockId, dir) {
            return blockMats[blockId * 6 + dir]
        }





        // look up material color given ID
        this.getMaterialColor = function (matID) {
            return matData[matID].color
        }

        // look up material texture given ID
        this.getMaterialTexture = function (matID) {
            return matData[matID].texture
        }

        // look up material's properties: color, alpha, texture, textureAlpha
        this.getMaterialData = function (matID) {
            return matData[matID]
        }





        /*
         * 
         *   Meant for internal use within the engine
         * 
         */


        // internal access to lookup arrays
        this._solidityLookup = blockSolidity
        this._opacityLookup = blockOpacity
        this._fluidityLookup = blockIsFluid
        this._objectLookup = blockIsObject
        this._blockMeshLookup = blockMeshes
        this._blockHandlerLookup = blockHandlers






        // look up color used for vertices of blocks of given material
        // - i.e. white if it has a texture, color otherwise
        this._getMaterialVertexColor = function (matID) {
            if (matData[matID].texture) return white
            return matData[matID].color
        }
        var white = [1,1,1]


          this._setMaterialVertexColor = function (matID,num) {
             matData[matID].color=num
        }


        /*
         * 
         *      default initialization
         * 
         */

        // add a default material and set ID=1 to it
        // note that registering new block data overwrites the old
        this.registerMaterial('dirt', [0.4, 0.3, 0], null)
        this.registerBlock(1, { material: 'dirt' })



    }

}

/*
 * 
 *          helpers
 * 
*/



// look up material ID given its name
// if lazy is set, pre-register the name and return an ID
function getMaterialId(reg, matIDs, name, lazyInit) {
    if (!name) return 0
    var id = matIDs[name]
    if (id === undefined && lazyInit) id = reg.registerMaterial(name)
    return id
}



// data class for holding block callback references
function BlockCallbackHolder(opts) {
    this.onLoad = opts.onLoad || null
    this.onUnload = opts.onUnload || null
    this.onSet = opts.onSet || null
    this.onUnset = opts.onUnset || null
    this.onCustomMeshCreate = opts.onCustomMeshCreate || null
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/rendering.js":
/*!*******************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/rendering.js ***!
  \*******************************************************************************************/
/*! exports provided: Rendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rendering", function() { return Rendering; });
/* harmony import */ var _sceneOctreeManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sceneOctreeManager */ "../../node_modules/noa-engine/src/lib/sceneOctreeManager.js");
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/scene */ "../../node_modules/@babylonjs/core/scene.js");
/* harmony import */ var _babylonjs_core_Cameras_freeCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Cameras/freeCamera */ "../../node_modules/@babylonjs/core/Cameras/freeCamera.js");
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Engines/engine */ "../../node_modules/@babylonjs/core/Engines/engine.js");
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Lights/hemisphericLight */ "../../node_modules/@babylonjs/core/Lights/hemisphericLight.js");
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Materials/standardMaterial */ "../../node_modules/@babylonjs/core/Materials/standardMaterial.js");
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babylonjs/core/Maths/math.color */ "../../node_modules/@babylonjs/core/Maths/math.color.js");
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babylonjs/core/Maths/math.vector */ "../../node_modules/@babylonjs/core/Maths/math.vector.js");
/* harmony import */ var _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "../../node_modules/@babylonjs/core/Meshes/mesh.js");
/* harmony import */ var _babylonjs_core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babylonjs/core/Meshes/transformNode */ "../../node_modules/@babylonjs/core/Meshes/transformNode.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/planeBuilder */ "../../node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js");
/* harmony import */ var _babylonjs_core_Meshes_Builders_linesBuilder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babylonjs/core/Meshes/Builders/linesBuilder */ "../../node_modules/@babylonjs/core/Meshes/Builders/linesBuilder.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "../../node_modules/noa-engine/src/lib/util.js");

var glvec3 = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js")



















// profiling flag
var PROFILE = 0



var defaults = {
    showFPS: false,
    antiAlias: true,
    clearColor: [0.8, 0.9, 1],
    ambientColor: [1, 1, 1],
    lightDiffuse: [1, 1, 1],
    lightSpecular: [1, 1, 1],
    groundLightColor: [0.5, 0.5, 0.5],
    useAO: true,
    AOmultipliers: [0.93, 0.8, 0.5],
    reverseAOmultiplier: 1.0,
    preserveDrawingBuffer: true,
    octreeBlockSize: 2,
    renderOnResize: true,
}



/**
 * `noa.rendering` - 
 * Manages all rendering, and the BABYLON scene, materials, etc.
 * 
 * This module uses the following default options (from the options
 * object passed to the [[Engine]]):
 * ```js
 * {
 *     showFPS: false,
 *     antiAlias: true,
 *     clearColor: [0.8, 0.9, 1],
 *     ambientColor: [1, 1, 1],
 *     lightDiffuse: [1, 1, 1],
 *     lightSpecular: [1, 1, 1],
 *     groundLightColor: [0.5, 0.5, 0.5],
 *     useAO: true,
 *     AOmultipliers: [0.93, 0.8, 0.5],
 *     reverseAOmultiplier: 1.0,
 *     preserveDrawingBuffer: true,
 *     octreeBlockSize: 2,
 *     renderOnResize: true,
 * }
 * ```
*/

class Rendering {

    /** @internal @prop _scene */
    /** @internal @prop _engine */
    /** @internal @prop _octree */
    /** @internal @prop _octreeManager */

    /** @internal */
    constructor(noa, opts, canvas) {

        this.noa = noa
        opts = Object.assign({}, defaults, opts)

        // settings
        this.renderOnResize = !!opts.renderOnResize

        // internals
        this.useAO = !!opts.useAO
        this.aoVals = opts.AOmultipliers
        this.revAoVal = opts.reverseAOmultiplier
        this.meshingCutoffTime = 6 // ms

        // set up babylon scene
        this._scene = null
        this._engine = null
        this._octree = null
        this._octreeManager = null
        initScene(this, canvas, opts)

        // for debugging
        if (opts.showFPS) setUpFPS()
    }
}

// Constructor helper - set up the Babylon.js scene and basic components
function initScene(self, canvas, opts) {

    // init internal properties
    self._engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_3__["Engine"](canvas, opts.antiAlias, {
        preserveDrawingBuffer: opts.preserveDrawingBuffer,
    })
    self._scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_1__["Scene"](self._engine)
    var scene = self._scene
    // remove built-in listeners
    scene.detachControl()

    // octree manager class
    var blockSize = Math.round(opts.octreeBlockSize)
    self._octreeManager = new _sceneOctreeManager__WEBPACK_IMPORTED_MODULE_0__["SceneOctreeManager"](self, blockSize)

    // camera, and a node to hold it and accumulate rotations
    self._cameraHolder = new _babylonjs_core_Meshes_transformNode__WEBPACK_IMPORTED_MODULE_9__["TransformNode"]('camHolder', scene)
    self._camera = new _babylonjs_core_Cameras_freeCamera__WEBPACK_IMPORTED_MODULE_2__["FreeCamera"]('camera', new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](0, 0, 0), scene)
    self._camera.parent = self._cameraHolder
    self._camera.minZ = .01
    self._cameraHolder.visibility = false

    // plane obscuring the camera - for overlaying an effect on the whole view
    self._camScreen = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__["Mesh"].CreatePlane('camScreen', 10, scene)
    self.addMeshToScene(self._camScreen)
    self._camScreen.position.z = .1
    self._camScreen.parent = self._camera
    self._camScreenMat = self.makeStandardMaterial('camscreenmat')
    self._camScreen.material = self._camScreenMat
    self._camScreen.setEnabled(false)
    self._camLocBlock = 0

    // apply some defaults
    var lightVec = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](0.1, 1, 0.3)
    self._light = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_4__["HemisphericLight"]('light', lightVec, scene)

    function arrToColor(a) { return new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_6__["Color3"](a[0], a[1], a[2]) }
    scene.clearColor = arrToColor(opts.clearColor)
    scene.ambientColor = arrToColor(opts.ambientColor)
    self._light.diffuse = arrToColor(opts.lightDiffuse)
    self._light.specular = arrToColor(opts.lightSpecular)
    self._light.groundColor = arrToColor(opts.groundLightColor)

    // make a default flat material (used or clone by terrain, etc)
    self.flatMaterial = self.makeStandardMaterial('flatmat')

}



/*
 *   PUBLIC API 
 */


/**
 * The Babylon `scene` object representing the game world.
 * @member
 */
Rendering.prototype.getScene = function () {
    return this._scene
}

// per-tick listener for rendering-related stuff
Rendering.prototype.tick = function (dt) {
    // nothing here at the moment
}





Rendering.prototype.render = function () {
    profile_hook('start')
    updateCameraForRender(this)
    profile_hook('updateCamera')
    this._engine.beginFrame()
    profile_hook('beginFrame')
    this._scene.render()
    profile_hook('render')
    fps_hook()
    this._engine.endFrame()
    profile_hook('endFrame')
    profile_hook('end')
}


Rendering.prototype.postRender = function () {
    // nothing currently
}



Rendering.prototype.resize = function () {
    this._engine.resize()
    if (this.noa._paused && this.renderOnResize) {
        this._scene.render()
    }
}



Rendering.prototype.highlightBlockFace = function (show, posArr, normArr) {
    global.m = getHighlightMesh(this)
    if (show) {
        // floored local coords for highlight mesh
        this.noa.globalToLocal(posArr, null, hlpos)
        // offset to avoid z-fighting, bigger when camera is far away
        var dist = glvec3.dist(this.noa.camera._localGetPosition(), hlpos)
        var slop = 0.001 + 0.001 * dist
        for (var i = 0; i < 3; i++) {
            if (normArr[i] === 0) {
                hlpos[i] += 0.5
            } else {
                hlpos[i] += (normArr[i] > 0) ? 1 + slop : -slop
            }
        }
        m.position.copyFromFloats(hlpos[0], hlpos[1], hlpos[2])
        m.rotation.x = (normArr[1]) ? Math.PI / 2 : 0
        m.rotation.y = (normArr[0]) ? Math.PI / 2 : 0
    }
    m.setEnabled(show)
}
var hlpos = []




/**
 * Add a mesh to the scene's octree setup so that it renders. 
 * 
 * @param mesh the mesh to add to the scene
 * @param isStatic pass in true if mesh never moves (i.e. change octree blocks)
 * @param pos (optional) global position where the mesh should be
 * @param containingChunk (optional) chunk to which the mesh is statically bound
 */
Rendering.prototype.addMeshToScene = function (mesh, isStatic = false, pos = null, containingChunk = null) {
    // exit silently if mesh has already been added and not removed
    if (this._octreeManager.includesMesh(mesh)) return

    // find local position for mesh and move it there (unless it's parented)
    if (!mesh.parent) {
        if (!pos) pos = [mesh.position.x, mesh.position.y, mesh.position.z]
        var lpos = []
        this.noa.globalToLocal(pos, null, lpos)
        mesh.position.copyFromFloats(lpos[0], lpos[1], lpos[2])
    }

    // save CPU by freezing terrain meshes
    if (isStatic) {
        mesh.freezeWorldMatrix()
        if (mesh.freezeNormals) mesh.freezeNormals()
    }

    // add to the octree, and add dispose handler to remove it
    this._octreeManager.addMesh(mesh, isStatic, pos, containingChunk)
    mesh.onDisposeObservable.add(() => {
        this._octreeManager.removeMesh(mesh)
    })
}











/**
 * Create a default standardMaterial:      
 * flat, nonspecular, fully reflects diffuse and ambient light
 */
Rendering.prototype.makeStandardMaterial = function (name) {
    var mat = new _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_5__["StandardMaterial"](name, this._scene)
    mat.specularColor.copyFromFloats(0, 0, 0)
    mat.ambientColor.copyFromFloats(1, 1, 1)
    mat.diffuseColor.copyFromFloats(1, 1, 1)
    this.postMaterialCreationHook(mat)
    return mat
}

/** Exposed hook for if the client wants to do something to newly created materials */
Rendering.prototype.postMaterialCreationHook = function (mat) { }







/*
 *
 * 
 *   ACCESSORS FOR CHUNK ADD/REMOVAL/MESHING
 *
 * 
 */

Rendering.prototype.prepareChunkForRendering = function (chunk) {
    // currently no logic needed here, but I may need it again...
}

Rendering.prototype.disposeChunkForRendering = function (chunk) {
    // nothing currently
}









/*
 *
 *   INTERNALS
 *
 */



// change world origin offset, and rebase everything with a position

Rendering.prototype._rebaseOrigin = function (delta) {
    var dvec = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](delta[0], delta[1], delta[2])

    this._scene.meshes.forEach(mesh => {
        // parented meshes don't live in the world coord system
        if (mesh.parent) return

        // move each mesh by delta (even though most are managed by components)
        mesh.position.subtractInPlace(dvec)

        if (mesh._isWorldMatrixFrozen) {
            // paradoxically this unfreezes, then re-freezes the matrix
            mesh.freezeWorldMatrix()
        }
    })

    // updates position of all octree blocks
    this._octreeManager.rebase(dvec)
}





// updates camera position/rotation to match settings from noa.camera

function updateCameraForRender(self) {
    var cam = self.noa.camera
    var tgtLoc = cam._localGetTargetPosition()
    self._cameraHolder.position.copyFromFloats(tgtLoc[0], tgtLoc[1], tgtLoc[2])
    self._cameraHolder.rotation.x = cam.pitch
    self._cameraHolder.rotation.y = cam.heading
    self._camera.position.z = -cam.currentZoom

    // applies screen effect when camera is inside a transparent voxel
    var cloc = cam._localGetPosition()
    var off = self.noa.worldOriginOffset
    var cx = Math.floor(cloc[0] + off[0])
    var cy = Math.floor(cloc[1] + off[1])
    var cz = Math.floor(cloc[2] + off[2])
    var id = self.noa.getBlock(cx, cy, cz)
    checkCameraEffect(self, id)
}



//  If camera's current location block id has alpha color (e.g. water), apply/remove an effect

function checkCameraEffect(self, id) {
    if (id === self._camLocBlock) return
    if (id === 0) {
        self._camScreen.setEnabled(false)
    } else {
        var matId = self.noa.registry.getBlockFaceMaterial(id, 0)
        if (matId) {
            var matData = self.noa.registry.getMaterialData(matId)
            var col = matData.color
            var alpha = matData.alpha
            if (col && alpha && alpha < 1) {
                self._camScreenMat.diffuseColor.set(0, 0, 0)
                self._camScreenMat.ambientColor.set(col[0], col[1], col[2])
                self._camScreenMat.alpha = alpha
                self._camScreen.setEnabled(true)
            }
        }
    }
    self._camLocBlock = id
}






// make or get a mesh for highlighting active voxel
function getHighlightMesh(rendering) {
    var mesh = rendering._highlightMesh
    if (!mesh) {
        mesh = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__["Mesh"].CreatePlane("highlight", 1.0, rendering._scene)
        var hlm = rendering.makeStandardMaterial('highlightMat')
        hlm.backFaceCulling = false
        hlm.emissiveColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_6__["Color3"](1, 1, 1)
        hlm.alpha = 0.2
        mesh.material = hlm

        // outline
        var s = 0.5
        var lines = _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_8__["Mesh"].CreateLines("hightlightLines", [
            new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](s, s, 0),
            new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](s, -s, 0),
            new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](-s, -s, 0),
            new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](-s, s, 0),
            new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_7__["Vector3"](s, s, 0)
        ], rendering._scene)
        lines.color = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_6__["Color3"](1, 1, 1)
        lines.parent = mesh

        rendering.addMeshToScene(mesh)
        rendering.addMeshToScene(lines)
        rendering._highlightMesh = mesh
    }
    return mesh
}










/*
 * 
 *      sanity checks:
 * 
 */

Rendering.prototype.debug_SceneCheck = function () {
    var meshes = this._scene.meshes
    var dyns = this._octree.dynamicContent
    var octs = []
    var numOcts = 0
    var numSubs = 0
    var mats = this._scene.materials
    var allmats = []
    mats.forEach(mat => {
        if (mat.subMaterials) mat.subMaterials.forEach(mat => allmats.push(mat))
        else allmats.push(mat)
    })
    this._octree.blocks.forEach(function (block) {
        numOcts++
        block.entries.forEach(m => octs.push(m))
    })
    meshes.forEach(function (m) {
        if (m._isDisposed) warn(m, 'disposed mesh in scene')
        if (empty(m)) return
        if (missing(m, dyns, octs)) warn(m, 'non-empty mesh missing from octree')
        if (!m.material) { warn(m, 'non-empty scene mesh with no material'); return }
        numSubs += (m.subMeshes) ? m.subMeshes.length : 1
        var mats = m.material.subMaterials || [m.material]
        mats.forEach(function (mat) {
            if (missing(mat, mats)) warn(mat, 'mesh material not in scene')
        })
    })
    var unusedMats = []
    allmats.forEach(mat => {
        var used = false
        meshes.forEach(mesh => {
            if (mesh.material === mat) used = true
            if (!mesh.material || !mesh.material.subMaterials) return
            if (mesh.material.subMaterials.includes(mat)) used = true
        })
        if (!used) unusedMats.push(mat.name)
    })
    if (unusedMats.length) {
        console.warn('Materials unused by any mesh: ', unusedMats.join(', '))
    }
    dyns.forEach(function (m) {
        if (missing(m, meshes)) warn(m, 'octree/dynamic mesh not in scene')
    })
    octs.forEach(function (m) {
        if (missing(m, meshes)) warn(m, 'octree block mesh not in scene')
    })
    var avgPerOct = Math.round(10 * octs.length / numOcts) / 10
    console.log('meshes - octree:', octs.length, '  dynamic:', dyns.length,
        '   subMeshes:', numSubs,
        '   avg meshes/octreeBlock:', avgPerOct)

    function warn(obj, msg) { console.warn(obj.name + ' --- ' + msg) }

    function empty(mesh) { return (mesh.getIndices().length === 0) }

    function missing(obj, list1, list2) {
        if (!obj) return false
        if (list1.includes(obj)) return false
        if (list2 && list2.includes(obj)) return false
        return true
    }
    return 'done.'
}

Rendering.prototype.debug_MeshCount = function () {
    var ct = {}
    this._scene.meshes.forEach(m => {
        var n = m.name || ''
        n = n.replace(/-\d+.*/, '#')
        n = n.replace(/\d+.*/, '#')
        n = n.replace(/(rotHolder|camHolder|camScreen)/, 'rendering use')
        n = n.replace(/atlas sprite .*/, 'atlas sprites')
        ct[n] = ct[n] || 0
        ct[n]++
    })
    for (var s in ct) console.log('   ' + (ct[s] + '       ').substr(0, 7) + s)
}








var profile_hook = (PROFILE) ?
    Object(_util__WEBPACK_IMPORTED_MODULE_12__["makeProfileHook"])(200, 'render internals') : () => { }



var fps_hook = function () { }

function setUpFPS() {
    var div = document.createElement('div')
    div.id = 'noa_fps'
    div.style.position = 'absolute'
    div.style.top = '0'
    div.style.right = '0'
    div.style.zIndex = '0'
    div.style.color = 'white'
    div.style.backgroundColor = 'rgba(0,0,0,0.5)'
    div.style.font = '14px monospace'
    div.style.textAlign = 'center'
    div.style.minWidth = '2em'
    div.style.margin = '4px'
    document.body.appendChild(div)
    var every = 1000
    var ct = 0
    var longest = 0
    var start = performance.now()
    var last = start
    fps_hook = function () {
        ct++
        var nt = performance.now()
        if (nt - last > longest) longest = nt - last
        last = nt
        if (nt - start < every) return
        var fps = Math.round(ct / (nt - start) * 1000)
        var min = Math.round(1 / longest * 1000)
        div.innerHTML = fps + '<br>' + min
        ct = 0
        longest = 0
        start = nt
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/sceneOctreeManager.js":
/*!****************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/sceneOctreeManager.js ***!
  \****************************************************************************************************/
/*! exports provided: SceneOctreeManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneOctreeManager", function() { return SceneOctreeManager; });
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babylonjs/core/Maths/math.vector */ "../../node_modules/@babylonjs/core/Maths/math.vector.js");
/* harmony import */ var _babylonjs_core_Culling_Octrees_octree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Culling/Octrees/octree */ "../../node_modules/@babylonjs/core/Culling/Octrees/octree.js");
/* harmony import */ var _babylonjs_core_Culling_Octrees_octreeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Culling/Octrees/octreeBlock */ "../../node_modules/@babylonjs/core/Culling/Octrees/octreeBlock.js");
/* harmony import */ var _babylonjs_core_Culling_Octrees___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Culling/Octrees/ */ "../../node_modules/@babylonjs/core/Culling/Octrees/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../../node_modules/noa-engine/src/lib/util.js");
/** @internal */ /** works around typedoc bug #842 */









/*
 * 
 * 
 * 
 *          simple class to manage scene octree and octreeBlocks
 * 
 * 
 * 
*/

class SceneOctreeManager {

    /** @internal */
    constructor(rendering, blockSize) {
        var scene = rendering._scene
        scene._addComponent(new _babylonjs_core_Culling_Octrees___WEBPACK_IMPORTED_MODULE_3__["OctreeSceneComponent"](scene))

        // the root octree object
        var octree = new _babylonjs_core_Culling_Octrees_octree__WEBPACK_IMPORTED_MODULE_1__["Octree"](NOP)
        scene._selectionOctree = octree
        octree.blocks = []
        var octBlocksHash = {}


        /*
         * 
         *          public API
         * 
        */

        this.rebase = (offset) => { recurseRebaseBlocks(octree, offset) }
        this.includesMesh = (mesh) => {
            return (mesh._noaContainingBlock || mesh._noaIsDynamicContent)
        }

        this.addMesh = (mesh, isStatic, pos, chunk) => {
            if (!isStatic) {
                mesh._noaIsDynamicContent = true
                octree.dynamicContent.push(mesh)
                return
            }
            // octreeBlock-space integer coords of mesh position, and hashed key
            var ci = Math.floor(pos[0] / bs)
            var cj = Math.floor(pos[1] / bs)
            var ck = Math.floor(pos[2] / bs)
            var mapKey = Object(_util__WEBPACK_IMPORTED_MODULE_4__["locationHasher"])(ci, cj, ck)

            // get or create octreeBlock
            var block = octBlocksHash[mapKey]
            if (!block) {
                // lower corner of new octree block position, in global/local
                var gloc = [ci * bs, cj * bs, ck * bs]
                var loc = [0, 0, 0]
                rendering.noa.globalToLocal(gloc, null, loc)
                // make the new octree block and store it
                block = makeOctreeBlock(loc, bs)
                octree.blocks.push(block)
                octBlocksHash[mapKey] = block
                block._noaMapKey = mapKey
            }

            // do the actual adding logic
            block.entries.push(mesh)
            mesh._noaContainingBlock = block

            // rely on octrees for selection, skipping bounds checks
            mesh.alwaysSelectAsActiveMesh = true
        }

        this.removeMesh = (mesh) => {
            if (mesh._noaIsDynamicContent) {
                mesh._noaIsDynamicContent = null
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeUnorderedListItem"])(octree.dynamicContent, mesh)
            }
            if (mesh._noaContainingBlock) {
                mesh._noaContainingChunk = null
                var block = mesh._noaContainingBlock
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeUnorderedListItem"])(block.entries, mesh)
                if (block.entries.length === 0) {
                    delete octBlocksHash[block._noaMapKey]
                    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeUnorderedListItem"])(octree.blocks, block)
                }
            }
        }

        /*
         * 
         *          internals
         * 
        */

        var NOP = () => { }
        var bs = blockSize * rendering.noa.world.chunkSize

        var recurseRebaseBlocks = (parent, offset) => {
            parent.blocks.forEach(child => {
                child.minPoint.subtractInPlace(offset)
                child.maxPoint.subtractInPlace(offset)
                child._boundingVectors.forEach(v => v.subtractInPlace(offset))
                if (child.blocks) recurseRebaseBlocks(child, offset)
            })
        }

        var makeOctreeBlock = (minPt, size) => {
            var min = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__["Vector3"](minPt[0], minPt[1], minPt[2])
            var max = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__["Vector3"](minPt[0] + size, minPt[1] + size, minPt[2] + size)
            return new _babylonjs_core_Culling_Octrees_octreeBlock__WEBPACK_IMPORTED_MODULE_2__["OctreeBlock"](min, max, undefined, undefined, undefined, NOP)
        }

    }

}


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/terrainMesher.js":
/*!***********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/terrainMesher.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ndarray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ndarray */ "../../node_modules/ndarray/ndarray.js");
/* harmony import */ var ndarray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ndarray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh */ "../../node_modules/@babylonjs/core/Meshes/mesh.js");
/* harmony import */ var _babylonjs_core_Meshes_subMesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babylonjs/core/Meshes/subMesh */ "../../node_modules/@babylonjs/core/Meshes/subMesh.js");
/* harmony import */ var _babylonjs_core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babylonjs/core/Meshes/mesh.vertexData */ "../../node_modules/@babylonjs/core/Meshes/mesh.vertexData.js");
/* harmony import */ var _babylonjs_core_Materials_multiMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babylonjs/core/Materials/multiMaterial */ "../../node_modules/@babylonjs/core/Materials/multiMaterial.js");
/* harmony import */ var _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babylonjs/core/Materials/Textures/texture */ "../../node_modules/@babylonjs/core/Materials/Textures/texture.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "../../node_modules/noa-engine/src/lib/util.js");
/** @internal */ /** works around typedoc bug #842 */










/* harmony default export */ __webpack_exports__["default"] = (TerrainMesher);




// enable for profiling..
var PROFILE_EVERY = 0




/*
 * 
 *          TERRAIN MESHER!!
 * 
*/


function TerrainMesher(noa) {

    var greedyMesher = new GreedyMesher(noa)
    var meshBuilder = new MeshBuilder(noa)


    /*
     * 
     *      public API
     * 
    */


    // add any properties that will get used for meshing
    this.initChunk = function (chunk) {
        chunk._terrainMeshes = []
    }


    // meshing entry point and high-level flow
    this.meshChunk = function (chunk, matGetter, colGetter, ignoreMaterials, useAO, aoVals, revAoVal) {

        profile_hook('start')

        // dispose any previously existing mesh
        chunk._terrainMeshes.forEach(m => m.dispose())
        chunk._terrainMeshes.length = 0
        profile_hook('cleanup')

        // args
        var mats = matGetter || noa.registry.getBlockFaceMaterial
        var cols = colGetter || noa.registry._getMaterialVertexColor
        var ao = (useAO === undefined) ? noa.rendering.useAO : useAO
        var vals = aoVals || noa.rendering.aoVals
        var rev = isNaN(revAoVal) ? noa.rendering.revAoVal : revAoVal

        // copy voxel data into array padded with neighbor values
        var voxels = buildPaddedVoxelArray(chunk)
        profile_hook('copy')

        // greedy mesher creates big arrays of geometry data
        var edgesOnly = chunk.isFull || chunk.isEmpty
	
        var geomData = greedyMesher.mesh(voxels, mats, cols, ao, vals, rev, edgesOnly,chunk.requestID)
        profile_hook('geom')

        // builds the babylon mesh that will be added to the scene
        var mesh = (geomData.numQuads === 0) ? null :
            meshBuilder.build(chunk, geomData, ignoreMaterials)
        profile_hook('build')

        profile_hook('end')

        // add to scene and finish
        if (mesh && mesh.getIndices().length > 0) {
            noa.rendering.addMeshToScene(mesh, true, chunk.pos, this)
            chunk._terrainMeshes.push(mesh)
        }
    }


    // nothing to do on dispose except remove the previous mesh
    this.disposeChunk = function (chunk) {
        chunk._terrainMeshes.forEach(m => m.dispose())
        chunk._terrainMeshes.length = 0
    }



}









/*
 * 
 *      Padded voxel data assembler
 * 
 * Takes the chunk of size n, and copies its data into center of an (n+2) ndarray
 * Then copies in edge data from neighbors, or if not available zeroes it out
 * Actual mesher will then run on the padded ndarray
 * 
*/

function buildPaddedVoxelArray(chunk) {
    var src = chunk.voxels
    var cs = src.shape[0]
    var tgt = cachedPadded

    // embiggen cached target array
    if (cs + 2 !== tgt.shape[0]) {
        var s2 = cs + 2
        tgt = new ndarray__WEBPACK_IMPORTED_MODULE_0___default.a(new Uint16Array(s2 * s2 * s2), [s2, s2, s2])
        cachedPadded = tgt
    }

    // loop through neighbors (neighbor(0,0,0) is the chunk itself)
    // copying or zeroing voxel body/edge data into padded target array
    var loc = _vecs[0]
    var pos = _vecs[1]
    var size = _vecs[2]
    var tgtPos = _vecs[3]
    var posValues = _vecs[4]
    var sizeValues = _vecs[5]
    var tgtPosValues = _vecs[6]
    if (cs !== _cachedVecSize) {
        _cachedVecSize = cs
        allocateVectors(cs, posValues, sizeValues, tgtPosValues)
    }

    for (var i = 0; i < 3; i++) {
        loc[0] = i
        for (var j = 0; j < 3; j++) {
            loc[1] = j
            for (var k = 0; k < 3; k++) {
                loc[2] = k
                for (var n = 0; n < 3; n++) {
                    var coord = loc[n]
                    pos[n] = posValues[coord]
                    size[n] = sizeValues[coord]
                    tgtPos[n] = tgtPosValues[coord]
                }
                var nab = chunk._neighbors.get(i - 1, j - 1, k - 1)
                var nsrc = (nab) ? nab.voxels : null
                Object(_util__WEBPACK_IMPORTED_MODULE_6__["copyNdarrayContents"])(nsrc, tgt, pos, size, tgtPos)
            }
        }
    }
    return tgt
}
var cachedPadded = new ndarray__WEBPACK_IMPORTED_MODULE_0___default.a(new Uint16Array(27), [3, 3, 3])
var _vecs = Array.from(Array(10), () => [0, 0, 0])
var _cachedVecSize
function allocateVectors(size, posValues, sizeValues, tgtPosValues) {
    for (var i = 0; i < 3; i++) {
        posValues[i] = [size - 1, 0, 0][i]
        sizeValues[i] = [1, size, 1][i]
        tgtPosValues[i] = [0, 1, size + 1][i]
    }
}








/*
 * 
 *  A single reusable struct to hold all geometry data for the chunk 
 *  currently being meshed.
 * 
 *  Basically, the greedy mesher builds this and the mesh builder consumes it
 * 
*/

var cachedGeometryData = {
    numQuads: 0,                // how many quads meshed so far
    materialQuadCounts: {},     // how many quads use each material ID
    quadMaterials: [1],         // list of which matID each quad used
    positions: [0.5],           // raw data, 12 positions per quad
    indices: [1],               // raw data, 6 indexes per quad
    normals: [0.5],             // raw data, 12 normals per quad
    colors: [0.5],              // raw data, 16 colors per quad
    uvs: [0.5],                 // raw data, 8 uvs per quad

    reset: function () {
        this.numQuads = 0
        this.materialQuadCounts = {}
    }
}









/*
 * 
 *  Mesh Builder - consumes all the raw data in geomData to build
 *  Babylon.js mesh/submeshes, ready to be added to the scene
 * 
 */

function MeshBuilder(noa) {

    // core
    this.build = function (chunk, geomData, ignoreMaterials) {
        var nq = geomData.numQuads
        var quadCounts = geomData.materialQuadCounts

        // find any used materials that can share the scene default
        // and move their quad counts to matID 0
        var matLookup = { '0': '0' }
        quadCounts['0'] = 0
        for (var matID in quadCounts) {
            if (matID === '0') continue
            if (ignoreMaterials || canUseDefaultMat(matID)) {
                quadCounts['0'] += quadCounts[matID]
                quadCounts[matID] = 0
                matLookup[matID] = '0'
            } else {
                matLookup[matID] = matID
            }
        }

        // arbitrarily choose a starting offset for quads using each material
        var matOffsets = {}
        var currOffset = 0
        for (var matID2 in quadCounts) {
            if (quadCounts[matID2] === 0) continue
            matOffsets[matID2] = currOffset
            currOffset += quadCounts[matID2]
        }

        // allocate the typed data arrays we'll hand off to Babylon
        var pos = new Float32Array(nq * 12)
        var ind = new Uint16Array(nq * 6)
        var nor = new Float32Array(nq * 12)
        var col = new Float32Array(nq * 16)
        var uvs = new Float32Array(nq * 8)

        // copy data from dataGeom into typed arrays, reordering it as we go
        // so that geometry sharing the same material is contiguous
        for (var ix = 0; ix < nq; ix++) {
            var mergedID = matLookup[geomData.quadMaterials[ix]]
            var off = matOffsets[mergedID]
            // note: indices need a flat offset to point to their original data
            var indexAdjust = (off - ix) * 4
            copyArraySubset(geomData.positions, ix, pos, off, 12, 0)
            copyArraySubset(geomData.indices, ix, ind, off, 6, indexAdjust)
            copyArraySubset(geomData.normals, ix, nor, off, 12, 0)
            copyArraySubset(geomData.colors, ix, col, off, 16, 0)
            copyArraySubset(geomData.uvs, ix, uvs, off, 8, 0)
            matOffsets[mergedID]++
        }

        // build the mesh and vertexData object
        var scene = noa.rendering.getScene()
        var name = 'chunk_' + chunk.requestID
        var mesh = new _babylonjs_core_Meshes_mesh__WEBPACK_IMPORTED_MODULE_1__["Mesh"](name, scene)
        var vdat = new _babylonjs_core_Meshes_mesh_vertexData__WEBPACK_IMPORTED_MODULE_3__["VertexData"]()
        vdat.positions = pos
        vdat.indices = ind
        vdat.normals = nor
        vdat.colors = col
        vdat.uvs = uvs
        vdat.applyToMesh(mesh)

        // array of the materialIDs we need, in stable order
        var matIDsUsed = Object.keys(matOffsets).sort((a, b) => (a < b) ? -1 : 1)

        // assign a material or make a multimaterial
        if (matIDsUsed.length === 1) {
            var onlyMatID = matLookup[geomData.quadMaterials[0]]
            mesh.material = getTerrainMaterial(onlyMatID, ignoreMaterials)
        } else {
            // make a multimaterial and define (babylon) submeshes
            mesh.subMeshes = []
            var matNum = 0
            for (var matID4 of matIDsUsed) {
                // note that offsets are currently at END of their respective spans
                var qct = quadCounts[matID4]
                var start = matOffsets[matID4] - qct
                new _babylonjs_core_Meshes_subMesh__WEBPACK_IMPORTED_MODULE_2__["SubMesh"](
                    matNum, // index into multmat
                    start * 12, qct * 12, // vertex start, count - these appear to be used
                    start * 6, qct * 6, // indices start, length
                    mesh)
                matNum++
            }
            mesh.material = getMultiMatForIDs(matIDsUsed, scene)
        }
      //  mesh.checkCollisions=true
		//mesh.metadata="oui"
	
        // done, mesh will be positioned later when added to the scene
        return mesh
    }

    function canUseDefaultMat(matID) {
        if (noa.registry.getMaterialTexture(matID)) return false
        var matData = noa.registry.getMaterialData(matID)
        return (matData.alpha === 1 && !matData.renderMat)
    }

    function copyArraySubset(src, sbase, tgt, tbase, count, addValue) {
        var soff = sbase * count
        var toff = tbase * count
        for (var i = 0; i < count; i++) {
            tgt[toff + i] = src[soff + i] + addValue
        }
    }









    //                         Material wrangling


    function getMultiMatForIDs(matIDs, scene) {
        var name = 'terrain_multi:' + matIDs.join(',')
        var multiMat = new _babylonjs_core_Materials_multiMaterial__WEBPACK_IMPORTED_MODULE_4__["MultiMaterial"]('multimat ' + name, scene)
        multiMat.subMaterials = matIDs.map(matID => getTerrainMaterial(matID, false))
        return multiMat
    }

    // manage materials/textures to avoid duplicating them
    function getTerrainMaterial(matID, ignore) {
        if (ignore || matID == 0) return noa.rendering.flatMaterial
        var name = 'terrain_mat:' + matID
        if (!materialCache[name]) {
            materialCache[name] = makeTerrainMaterial(matID, name)
        }
        return materialCache[name]
    }
    var materialCache = {}


    // canonical function to make a terrain material
    function makeTerrainMaterial(id, name) {
        // if user-specified render material is defined, use it
        var matData = noa.registry.getMaterialData(id)
        if (matData.renderMat) return matData.renderMat
        // otherwise determine which built-in material to use
        var url = noa.registry.getMaterialTexture(id)
        var alpha = matData.alpha
        if (!url && alpha === 1) {
            // base material is fine for non-textured case, if no alpha
            return noa.rendering.flatMaterial
        }
        var mat = noa.rendering.makeStandardMaterial(name)
		
        if (url) {
            var scene = noa.rendering.getScene()
            var tex = new _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_5__["Texture"](url, scene, true, false, _babylonjs_core_Materials_Textures_texture__WEBPACK_IMPORTED_MODULE_5__["Texture"].NEAREST_SAMPLINGMODE)
            if (matData.textureAlpha) tex.hasAlpha = true
            mat.diffuseTexture = tex
        }
        if (matData.alpha < 1) {
            mat.alpha = matData.alpha
        }
		
        return mat
    }
}








/*
 *    Greedy voxel meshing algorithm
 *        based initially on algo by Mikola Lysenko:
 *          http://0fps.net/2012/07/07/meshing-minecraft-part-2/
 *          but evolved quite a bit since then
 *        AO handling by me, stitched together out of cobwebs and dreams
 *    
 *    Arguments:
 *        arr: 3D ndarray of dimensions X,Y,Z
 *             packed with solidity/opacity booleans in higher bits
 *        getMaterial: function( blockID, dir )
 *             returns a material ID based on block id and which cube face it is
 *             (assume for now that each mat ID should get its own mesh)
 *        getColor: function( materialID )
 *             looks up a color (3-array) by material ID
 *             TODO: replace this with a lookup array?
 *        doAO: whether or not to bake ambient occlusion into vertex colors
 *        aoValues: array[3] of color multipliers for AO (least to most occluded)
 *        revAoVal: "reverse ao" - color multiplier for unoccluded exposed edges
 *
 *    Return object: array of mesh objects keyed by material ID
 *        arr[id] = {
 *          id:       material id for mesh
 *          vertices: ints, range 0 .. X/Y/Z
 *          indices:  ints
 *          normals:  ints,   -1 .. 1
 *          colors:   floats,  0 .. 1
 *          uvs:      floats,  0 .. X/Y/Z
 *        }
 */

function GreedyMesher(noa) {

    var maskCache = new Int16Array(16)
    var aomaskCache = new Uint16Array(16)

    var solidLookup = noa.registry._solidityLookup
    var opacityLookup = noa.registry._opacityLookup


    this.mesh = function (voxels, getMaterial, getColor, doAO, aoValues, revAoVal, edgesOnly,id) {
		var l=id.split('|')

		
        solidLookup = noa.registry._solidityLookup
        opacityLookup = noa.registry._opacityLookup

        // collected geometry data for the current mesh
        var geomData = cachedGeometryData
        geomData.reset()

        // how to apply AO packing in first masking function
        var skipReverseAO = (revAoVal === aoValues[0])

        //Sweep over each axis, mapping axes to [d,u,v]
        for (var d = 0; d < 3; ++d) {
            var u = (d + 1) % 3
            var v = (d + 2) % 3

            // make transposed ndarray so index i is the axis we're sweeping
            var shape = voxels.shape
            var arrT = voxels.transpose(d, u, v).lo(1, 1, 1).hi(shape[d] - 2, shape[u] - 2, shape[v] - 2)
			
		
            // shorten len0 by 1 so faces at edges don't get drawn in both chunks
            var len0 = arrT.shape[0] - 1
            var len1 = arrT.shape[1]
            var len2 = arrT.shape[2]

            // embiggen mask arrays as needed
            if (maskCache.length < len1 * len2) {
                maskCache = new Int16Array(len1 * len2)
                aomaskCache = new Uint16Array(len1 * len2)
            }
			
			

            // iterate along current major axis..
           for (var i = 0; i <= len0; ++i) {
		      
					
					
					
					
						   // fills mask and aomask arrays with values
                constructMeshMasks(i, d, arrT, getMaterial, doAO, skipReverseAO,[l[0],l[1],l[2]])

                // parses the masks to do greedy meshing
                constructGeometryFromMasks(i, d, u, v, len1, len2,
                    doAO, geomData, getColor, aoValues, revAoVal,[l[0],l[1],l[2]])

                // process edges only by jumping to other edge
                if (edgesOnly) i += (len0 - 1)
					
					
					
					
					
					
				
					 
					 
					 
					 
					 
					 
					 
				 

            }
			
			
        }
		
		
        // done!
        return geomData
    }







    //      Greedy meshing inner loop one
    //
    // iterating across ith 2d plane, with n being index into masks

    function constructMeshMasks(i, d, arrT, getMaterial, doAO, skipRevAO,id) {
        var len = arrT.shape[1]
        var mask = maskCache
        var aomask = aomaskCache
        // set up for quick array traversals
        var n = 0
        var materialDir = d * 2
        var data = arrT.data
        var dbase = arrT.index(i - 1, 0, 0)
        var istride = arrT.stride[0]
        var jstride = arrT.stride[1]
        var kstride = arrT.stride[2]

        for (var k = 0; k < len; ++k) {
            var d0 = dbase
            dbase += kstride
            for (var j = 0; j < len; j++, n++, d0 += jstride) {
				
			

                // mask[n] will represent the face needed between i-1,j,k and i,j,k
                // for now, assume we never have two faces in both directions

                // note that mesher zeroes out the mask as it goes, so there's 
                // no need to zero it here when no face is needed

                // IDs at i-1,j,k  and  i,j,k
                var id0 = data[d0]
                var id1 = data[d0 + istride]
                 
                // most common case: never a face between same voxel IDs, 
                // so skip out early
                if (id0 === id1) continue

                var faceDir = getFaceDir(id0, id1, getMaterial, materialDir)
                if (faceDir) {
                    // set regular mask value to material ID, sign indicating direction
                    mask[n] = (faceDir > 0) ?
                        getMaterial(id0, materialDir) :
                        -getMaterial(id1, materialDir + 1)

                    // if doing AO, precalculate AO level for each face into second mask
                    if (doAO) {
                        // i values in direction face is/isn't pointing{
                        aomask[n] = (faceDir > 0) ?
                            packAOMask(arrT, i, i - 1, j, k, skipRevAO,id,j) :
                            packAOMask(arrT, i - 1, i, j, k, skipRevAO,id,j)
                    }
                }
            }
        }
    }



    function getFaceDir(id0, id1, getMaterial, materialDir) {
        // no face if both blocks are opaque
        var op0 = opacityLookup[id0]
        var op1 = opacityLookup[id1]
        if (op0 && op1) return 0
        // if either block is opaque draw a face for it
        if (op0) return 1
        if (op1) return -1
        // can't tell from block IDs, so compare block materials of each face
        var m0 = getMaterial(id0, materialDir)
        var m1 = getMaterial(id1, materialDir + 1)
        // if same material, draw no face. If one is missing, draw the other
        if (m0 === m1) { return 0 }
        else if (m0 === 0) { return -1 }
        else if (m1 === 0) { return 1 }
        // remaining case is two different non-opaque block materials
        // facing each other. for now, draw neither..
        return 0
    }






    // 
    //      Greedy meshing inner loop two
    //
    // construct geometry data from the masks
var num=0
    function constructGeometryFromMasks(i, d, u, v, len1, len2,
        doAO, geomData, getColor, aoValues, revAoVal,id) {
        var n = 0
        var mask = maskCache
        var aomask = aomaskCache

        var x = [0, 0, 0]
        var du = [0, 0, 0]
        var dv = [0, 0, 0]
        x[d] = i
        var norms = [0, 0, 0]
		
		

        // some logic is broken into helper functions for AO and non-AO
        // this fixes deopts in Chrome (for reasons unknown)
        var maskCompareFcn = (doAO) ? maskCompare : maskCompare_noAO
        var meshColorFcn = (doAO) ? pushMeshColors : pushMeshColors_noAO

        for (var k = 0; k < len2; ++k) {
			
			
            var w = 1
            var h = 1
            for (var j = 0; j < len1; j += w, n += w) {
				
				
			

                var maskVal = mask[n] | 0
                if (!maskVal) {
                    w = 1
                    continue
                }
                var ao = aomask[n] | 0

                // Compute width and height of area with same mask/aomask values
                for (w = 1; w < len1 - j; ++w) {
                    if (!maskCompareFcn(n + w, mask, maskVal, aomask, ao)) break
                }

                OUTER:
                for (h = 1; h < len2 - k; ++h) {
                    for (var m = 0; m < w; ++m) {
                        var ix = n + m + h * len1
                        if (!maskCompareFcn(ix, mask, maskVal, aomask, ao)) break OUTER
                    }
                }

                // for testing: doing the following will disable greediness
                //w=h=1

                // material and mesh for this face
                var matID = Math.abs(maskVal)

                // we're now ready to push a quad worth of geometry data
                var nq = geomData.numQuads
                geomData.quadMaterials[nq] = matID | 0
                geomData.materialQuadCounts[matID] =
                    (geomData.materialQuadCounts[matID] || 0) + 1

                // add colors into geomData
                // tridir is boolean for which way to split the quad into triangles
                var colorsArr =geomData.colors
                var colorsIndex = nq * 16
				
				
			
				
                var triDir = meshColorFcn(colorsArr, colorsIndex,
                   getColor(matID), ao, aoValues, revAoVal,id)

                //Add quad positions - vertices = x -> x+du -> x+du+dv -> x+dv
                x[u] = j
                x[v] = k
                du[u] = w
                dv[v] = h
                addPositionValues(geomData.positions, nq * 12, x, du, dv)

                // add uv values, with the order and sign depending on 
                // axis and direction so as to avoid mirror-image textures
                var dir = sign(maskVal)
                addUVs(geomData.uvs, nq * 8, d, w, h, dir)

                // add same normals for all vertices, depending on
                // which direction the mask was solid in..
                norms[d] = dir
                addNormalValues(geomData.normals, nq * 12, norms)

                // Add indexes, ordered clockwise for the facing direction;
                var inds = geomData.indices
                var ioff = nq * 6
                var voff = nq * 4
                addIndexValues(inds, ioff, voff, maskVal, triDir)

                // finished adding  quad geometry data
                geomData.numQuads++

                //Zero-out mask
                for (var hx = 0; hx < h; ++hx) {
                    for (var wx = 0; wx < w; ++wx) {
                        mask[n + wx + hx * len1] = 0
                    }
                }

            }
        }
    }


    // small helpers to add values to raw data geometry arrays:

    function addPositionValues(posArr, offset, x, du, dv) {
        for (var i = 0; i < 3; i++) {
            posArr[offset + i] = x[i]
            posArr[offset + 3 + i] = x[i] + du[i]
            posArr[offset + 6 + i] = x[i] + du[i] + dv[i]
            posArr[offset + 9 + i] = x[i] + dv[i]
        }
    }

    function addUVs(uvArr, offset, d, w, h, dir) {
        for (var i = 0; i < 8; i++) uvArr[offset + i] = 0
        if (d === 2) {
            uvArr[offset + 1] = uvArr[offset + 3] = h
            uvArr[offset + 2] = uvArr[offset + 4] = -dir * w
        } else {
            uvArr[offset + 1] = uvArr[offset + 7] = w
            uvArr[offset + 4] = uvArr[offset + 6] = dir * h
        }
    }

    function addNormalValues(normArr, offset, norms) {
        for (var i = 0; i < 12; i++) {
            normArr[offset + i] = norms[i % 3]
        }
    }

    function addIndexValues(indArr, offset, baseIndex, maskVal, triDir) {
        var indexVals = (maskVal < 0) ?
            (triDir ? indexLists.A : indexLists.B) :
            (triDir ? indexLists.C : indexLists.D)
        for (var i = 0; i < 6; i++) {
            indArr[offset + i] = baseIndex + indexVals[i]
        }
    }
    var indexLists = {
        A: [0, 1, 2, 0, 2, 3],
        B: [1, 2, 3, 0, 1, 3],
        C: [0, 2, 1, 0, 3, 2],
        D: [3, 1, 0, 3, 2, 1],
    }




    // Helper functions with AO and non-AO implementations:

    function maskCompare(index, mask, maskVal, aomask, aoVal) {
        if (maskVal !== mask[index]) return false
        if (aoVal !== aomask[index]) return false
        return true
    }

    function maskCompare_noAO(index, mask, maskVal, aomask, aoVal) {
        if (maskVal !== mask[index]) return false
        return true
    }

    function pushMeshColors_noAO(colors, ix, c, ao, aoValues, revAoVal) {
        for (var off = 0; off < 16; off += 4) {
            colors[ix + off] = c[0]
            colors[ix + off + 1] = c[1]
            colors[ix + off + 2] = c[2]
            colors[ix + off + 3] = 1
        }
        return true // triangle direction doesn't matter for non-AO
    }

    function pushMeshColors(colors, ix, c, ao, aoValues, revAoVal,id,l) {
	//console.log(id)console.log(colors)
        var ao00 = unpackAOMask(ao, 0, 0)
        var ao10 = unpackAOMask(ao, 1, 0)
        var ao11 = unpackAOMask(ao, 1, 1)
        var ao01 = unpackAOMask(ao, 0, 1)
        pushAOColor(colors, ix, c, ao00, aoValues, revAoVal,id,l)
        pushAOColor(colors, ix + 4, c, ao10, aoValues, revAoVal,id,l)
        pushAOColor(colors, ix + 8, c, ao11, aoValues, revAoVal,id,l)
        pushAOColor(colors, ix + 12, c, ao01, aoValues, revAoVal,id,l)

        // this bit is pretty magical..
        var triDir = true
        if (ao00 === ao11) {
            triDir = (ao01 === ao10) ? (ao01 === 2) : true
        } else {
            triDir = (ao01 === ao10) ? false : (ao00 + ao11 > ao01 + ao10)
        }
        return triDir
    }

    function sign(num) {
        return (num > 0) ? 1 : -1
    }




    /* 
     *  packAOMask:
     *
     *    For a given face, find occlusion levels for each vertex, then
     *    pack 4 such (2-bit) values into one Uint8 value
     * 
     *  Occlusion levels:
     *    1 is flat ground, 2 is partial occlusion, 3 is max (corners)
     *    0 is "reverse occlusion" - an unoccluded exposed edge 
     *  Packing order var(bit offset):
     *      a01(2)  -   a11(6)   ^  K
     *        -     -            +> J
     *      a00(0)  -   a10(4)
     */

    function packAOMask(data, ipos, ineg, j, k, skipReverse,id,l) {
		//console.log(ipos)
		//console.log(l)
        var a00 = 1
        var a01 = 1
        var a10 = 1
        var a11 = 1

        // inc occlusion of vertex next to obstructed side
		
        if (solidLookup[data.get(ipos, j + 1, k)]) { ++a10; ++a11 }
        if (solidLookup[data.get(ipos, j - 1, k)]) { ++a00; ++a01 }
        if (solidLookup[data.get(ipos, j, k + 1)]) { ++a01; ++a11 }
        if (solidLookup[data.get(ipos, j, k - 1)]) { ++a00; ++a10 }

        // facing into a solid (non-opaque) block?
        var facingSolid = solidLookup[data.get(ipos, j, k)]
        if (facingSolid) {
			
			
				
			
			
			
            // always 2, or 3 in corners
            a11 = (a11 === 3 || solidLookup[data.get(ipos, j + 1, k + 1)]) ? 3 : 2
            a01 = (a01 === 3 || solidLookup[data.get(ipos, j - 1, k + 1)]) ? 3 : 2
            a10 = (a10 === 3 || solidLookup[data.get(ipos, j + 1, k - 1)]) ? 3 : 2
            a00 = (a00 === 3 || solidLookup[data.get(ipos, j - 1, k - 1)]) ? 3 : 2
            return a11 << 6 | a10 << 4 | a01 << 2 | a00
        }

        // simpler logic if skipping reverse AO?
        if (skipReverse) {
            // treat corner as occlusion 3 only if not occluded already
            if (a11 === 1 && (solidLookup[data.get(ipos, j + 1, k + 1)])) { a11 = 2 }
            if (a01 === 1 && (solidLookup[data.get(ipos, j - 1, k + 1)])) { a01 = 2 }
            if (a10 === 1 && (solidLookup[data.get(ipos, j + 1, k - 1)])) { a10 = 2 }
            if (a00 === 1 && (solidLookup[data.get(ipos, j - 1, k - 1)])) { a00 = 2 }
            return a11 << 6 | a10 << 4 | a01 << 2 | a00
        }

        // check each corner, and if not present do reverse AO
        if (a11 === 1) {
            if (solidLookup[data.get(ipos, j + 1, k + 1)]) {
                a11 = 2
            } else if (!(solidLookup[data.get(ineg, j, k + 1)]) ||
                !(solidLookup[data.get(ineg, j + 1, k)]) ||
                !(solidLookup[data.get(ineg, j + 1, k + 1)])) {
                a11 = 0
            }
        }

        if (a10 === 1) {
            if (solidLookup[data.get(ipos, j + 1, k - 1)]) {
                a10 = 2
            } else if (!(solidLookup[data.get(ineg, j, k - 1)]) ||
                !(solidLookup[data.get(ineg, j + 1, k)]) ||
                !(solidLookup[data.get(ineg, j + 1, k - 1)])) {
                a10 = 0
            }
        }

        if (a01 === 1) {
            if (solidLookup[data.get(ipos, j - 1, k + 1)]) {
                a01 = 2
            } else if (!(solidLookup[data.get(ineg, j, k + 1)]) ||
                !(solidLookup[data.get(ineg, j - 1, k)]) ||
                !(solidLookup[data.get(ineg, j - 1, k + 1)])) {
                a01 = 0
            }
        }

        if (a00 === 1) {
            if (solidLookup[data.get(ipos, j - 1, k - 1)]) {
                a00 = 2
            } else if (!(solidLookup[data.get(ineg, j, k - 1)]) ||
                !(solidLookup[data.get(ineg, j - 1, k)]) ||
                !(solidLookup[data.get(ineg, j - 1, k - 1)])) {
                a00 = 0
            }
        }
		
	
		
	/*if(shade[JSON.stringify([id[0],id[1],id[2]])]!==undefined  ){
			var tok=l* parseInt(id[1])
			var tok2=ipos* parseInt(id[0])
			var tok3=k* parseInt(id[0])
			if(shade[JSON.stringify([id[0],id[1],id[2]])][1]==tok+2 && shade[JSON.stringify([id[0],id[1],id[2]])][0]==tok2 && shade[JSON.stringify([id[0],id[1],id[2]])][2]==tok3){
				console.log('yakkkkk')
		a00 = 3
       a01 = 3
        a10 = 3
        a11 = 3
			}
	}*/
		/*if(Math.random()<0.1 && id[1]=='0'){
			a00 = 3
       a01 = 3
        a10 = 3
        a11 = 3
			
		}*/
	
	 /* a00 = 3
       a01 = 3
        a10 = 3
        a11 = 3*/

        return a11 << 6 | a10 << 4 | a01 << 2 | a00
    }



    // unpack (2 bit) ao value from ao mask
    // see above for details
    function unpackAOMask(aomask, jpos, kpos) {
        var offset = jpos ? (kpos ? 6 : 4) : (kpos ? 2 : 0)
        return aomask >> offset & 3
    }


    // premultiply vertex colors by value depending on AO level
    // then push them into color array
	//global.mult=0
    function pushAOColor(colors, ix, baseCol, ao, aoVals, revAoVal,id) {
      var mult = (ao === 0) ? revAoVal : aoVals[ao - 1]
	
		
		/*if(parseInt(id[1])>=0){
		 
			 mult = (ao === 0) ? revAoVal : aoVals[ao - 1] 
		
		}else {
			
			mult = (ao === 0) ? revAoVal : aoVals[ao - 1]
		     mult-=0.2
		}*/
		
		
        colors[ix] = baseCol[0] * mult
        colors[ix + 1] = baseCol[1] * mult
        colors[ix + 2] = baseCol[2] * mult
        colors[ix + 3] = 1
    }

}








var profile_hook = (PROFILE_EVERY) ?
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["makeProfileHook"])(PROFILE_EVERY, 'Terrain meshing') : () => { }


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/util.js":
/*!**************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/util.js ***!
  \**************************************************************************************/
/*! exports provided: removeUnorderedListItem, loopForTime, numberOfVoxelsInSphere, copyNdarrayContents, iterateOverShellAtDistance, locationHasher, ChunkStorage, LocationQueue, makeProfileHook, makeThroughputHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUnorderedListItem", function() { return removeUnorderedListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopForTime", function() { return loopForTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberOfVoxelsInSphere", function() { return numberOfVoxelsInSphere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyNdarrayContents", function() { return copyNdarrayContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateOverShellAtDistance", function() { return iterateOverShellAtDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationHasher", function() { return locationHasher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkStorage", function() { return ChunkStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationQueue", function() { return LocationQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProfileHook", function() { return makeProfileHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeThroughputHook", function() { return makeThroughputHook; });
/** @internal */ /** works around typedoc bug #842 */


// helper to swap item to end and pop(), instead of splice()ing
function removeUnorderedListItem(list, item) {
    var i = list.indexOf(item)
    if (i < 0) return
    if (i === list.length - 1) {
        list.pop()
    } else {
        list[i] = list.pop()
    }
}



// loop over a function for a few ms, or until it returns true
function loopForTime(maxTimeInMS, callback, startTime) {
    var t0 = startTime || performance.now()
    var res = callback()
    if (res) return
    var t1 = performance.now(), dt = t1 - startTime
    // tweak time to make the average delay equal to the desired amt
    var cutoff = t0 + maxTimeInMS - dt / 2
    if (t1 > cutoff) return
    var maxIter = 1000 // sanity check
    for (var i = 0; i < maxIter; i++) {
        if (callback() || performance.now() > cutoff) return
    }
}





// ....
function numberOfVoxelsInSphere(rad) {
    if (rad === prevRad) return prevAnswer
    var ext = Math.ceil(rad), ct = 0, rsq = rad * rad
    for (var i = -ext; i <= ext; ++i) {
        for (var j = -ext; j <= ext; ++j) {
            for (var k = -ext; k <= ext; ++k) {
                var dsq = i * i + j * j + k * k
                if (dsq < rsq) ct++
            }
        }
    }
    prevRad = rad
    prevAnswer = ct
    return ct
}
var prevRad = 0, prevAnswer = 0





// partly "unrolled" loops to copy contents of ndarrays
// when there's no source, zeroes out the array instead
function copyNdarrayContents(src, tgt, pos, size, tgtPos) {
    if (src) {
        doNdarrayCopy(src, tgt, pos[0], pos[1], pos[2],
            size[0], size[1], size[2], tgtPos[0], tgtPos[1], tgtPos[2])
    } else {
        doNdarrayZero(tgt, tgtPos[0], tgtPos[1], tgtPos[2],
            size[0], size[1], size[2])
    }
}
function doNdarrayCopy(src, tgt, i0, j0, k0, si, sj, sk, ti, tj, tk) {
    var sdx = src.stride[2]
    var tdx = tgt.stride[2]
    for (var i = 0; i < si; i++) {
        for (var j = 0; j < sj; j++) {
            var six = src.index(i0 + i, j0 + j, k0)
            var tix = tgt.index(ti + i, tj + j, tk)
            for (var k = 0; k < sk; k++) {
                tgt.data[tix] = src.data[six]
                six += sdx
                tix += tdx
            }
        }
    }
}

function doNdarrayZero(tgt, i0, j0, k0, si, sj, sk) {
    var dx = tgt.stride[2]
    for (var i = 0; i < si; i++) {
        for (var j = 0; j < sj; j++) {
            var ix = tgt.index(i0 + i, j0 + j, k0)
            for (var k = 0; k < sk; k++) {
                tgt.data[ix] = 0
                ix += dx
            }
        }
    }
}




// iterate over 3D locations a fixed area from the origin
// and exiting if the callback returns true
// skips locations beyond a horiz or vertical max distance
function iterateOverShellAtDistance(d, xmax, ymax, cb) {
    if (d === 0) return cb(0, 0, 0)
    // larger top/bottom planes of current shell
    var dx = Math.min(d, xmax)
    var dy = Math.min(d, ymax)
    if (d <= ymax) {
        for (var x = -dx; x <= dx; x++) {
            for (var z = -dx; z <= dx; z++) {
                if (cb(x, d, z)) return true
                if (cb(x, -d, z)) return true
            }
        }
    }
    // smaller side planes of shell
    if (d <= xmax) {
        for (var i = -d; i < d; i++) {
            for (var y = -dy + 1; y < dy; y++) {
                if (cb(i, y, d)) return true
                if (cb(-i, y, -d)) return true
                if (cb(d, y, -i)) return true
                if (cb(-d, y, i)) return true
            }
        }
    }
    return false
}






// function to hash three indexes (i,j,k) into one integer
// note that hash wraps around every 1024 indexes.
//      i.e.:   hash(1, 1, 1) === hash(1025, 1, -1023)
function locationHasher(i, j, k) {
    return (i & 1023)
        | ((j & 1023) << 10)
        | ((k & 1023) << 20)
}



/*
 * 
 *      chunkStorage - a Map-backed abstraction for storing/
 *      retrieving chunk objects by their location indexes
 * 
*/

function ChunkStorage() {
    var hash = {}
    // exposed API - getting and setting
    this.getChunkByIndexes = (i, j, k) => {
        return hash[locationHasher(i, j, k)] || null
    }
    this.storeChunkByIndexes = (i, j, k, chunk) => {
        hash[locationHasher(i, j, k)] = chunk
    }
    this.removeChunkByIndexes = (i, j, k) => {
        delete hash[locationHasher(i, j, k)]
    }
}






/*
 * 
 *      LocationQueue - simple array of [i,j,k] locations, 
 *      backed by a hash for O(1) existence checks.
 *      removals by value are O(n).
 * 
*/

function LocationQueue() {
    this.arr = []
    this.hash = {}
}
LocationQueue.prototype.forEach = function (a, b) { this.arr.forEach(a, b) }
LocationQueue.prototype.includes = function (i, j, k) {
    var id = locationHasher(i, j, k)
    return !!this.hash[id]
}
LocationQueue.prototype.add = function (i, j, k) {
    var id = locationHasher(i, j, k)
    if (this.hash[id]) return
    this.arr.push([i, j, k, id])
    this.hash[id] = true
}
LocationQueue.prototype.removeByIndex = function (ix) {
    var el = this.arr[ix]
    delete this.hash[el[3]]
    this.arr.splice(ix, 1)
}
LocationQueue.prototype.remove = function (i, j, k) {
    var id = locationHasher(i, j, k)
    if (!this.hash[id]) return
    delete this.hash[id]
    for (var ix = 0; ix < this.arr.length; ix++) {
        if (id === this.arr[ix][3]) {
            this.arr.splice(ix, 1)
            return
        }
    }
    throw 'internal bug with location queue - hash value overlapped'
}
LocationQueue.prototype.count = function () { return this.arr.length }
LocationQueue.prototype.isEmpty = function () { return (this.arr.length === 0) }
LocationQueue.prototype.empty = function () {
    this.arr.length = 0
    this.hash = {}
}
LocationQueue.prototype.pop = function () {
    var el = this.arr.pop()
    delete this.hash[el[3]]
    return el
}
LocationQueue.prototype.copyFrom = function (queue) {
    this.arr = queue.arr.slice()
    this.hash = {}
    for (var key in queue.hash) this.hash[key] = true
}
LocationQueue.prototype.sortByDistance = function (locToDist) {
    var hash = {}
    for (var loc of this.arr) hash[loc] = locToDist(loc)
    this.arr.sort((a, b) => hash[b] - hash[a]) // DESCENDING!
    hash = null
}











// simple thing for reporting time split up between several activities
function makeProfileHook(every, title, filter) {
    if (!(every > 0)) return () => { }
    title = title || ''
    var times = []
    var names = []
    var started = 0
    var last = 0
    var iter = 0
    var total = 0
    var clearNext = true

    var start = function () {
        if (clearNext) {
            times.length = names.length = 0
            clearNext = false
        }
        started = last = performance.now()
        iter++
    }
    var add = function (name) {
        var t = performance.now()
        if (names.indexOf(name) < 0) names.push(name)
        var i = names.indexOf(name)
        if (!times[i]) times[i] = 0
        times[i] += t - last
        last = t
    }
    var report = function () {
        total += performance.now() - started
        if (iter === every) {
            var head = title + ' total ' + (total / every).toFixed(2) + 'ms (avg, ' + every + ' runs)    '
            console.log(head, names.map(function (name, i) {
                if (filter && times[i] / total < 0.05) return ''
                return name + ': ' + (times[i] / every).toFixed(2) + 'ms    '
            }).join(''))
            clearNext = true
            iter = 0
            total = 0
        }
    }
    return function profile_hook(state) {
        if (state === 'start') start()
        else if (state === 'end') report()
        else add(state)
    }
}




// simple thing for reporting time actions/sec
function makeThroughputHook(_every, _title, filter) {
    var title = _title || ''
    var every = _every || 1
    var counts = {}
    var started = performance.now()
    var iter = 0
    return function profile_hook(state) {
        if (state === 'start') return
        if (state === 'end') {
            if (++iter < every) return
            var t = performance.now()
            console.log(title + '   ' + Object.keys(counts).map(k => {
                var through = counts[k] / (t - started) * 1000
                counts[k] = 0
                return k + ':' + through.toFixed(2) + '   '
            }).join(''))
            started = t
            iter = 0
        } else {
            if (!counts[state]) counts[state] = 0
            counts[state]++
        }
    }
}


/***/ }),

/***/ "../../node_modules/noa-engine/src/lib/world.js":
/*!***************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/noa-engine/src/lib/world.js ***!
  \***************************************************************************************/
/*! exports provided: World */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk */ "../../node_modules/noa-engine/src/lib/chunk.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../node_modules/noa-engine/src/lib/util.js");






var PROFILE_EVERY = 0               // ticks
var PROFILE_QUEUES_EVERY = 0        // ticks






var defaultOptions = {
    chunkSize: 24,
    chunkAddDistance: [2, 2],           // [horizontal, vertical]
    chunkRemoveDistance: [3, 3],        // [horizontal, vertical]
    worldGenWhilePaused: false,
    manuallyControlChunkLoading: false,
}

/**
 * `noa.world` - manages world data, chunks, voxels.
 * 
 * This module uses the following default options (from the options
 * object passed to the [[Engine]]):
 * ```js
 * var defaultOptions = {
 *   chunkSize: 24,
 *   chunkAddDistance: [2, 2],           // [horizontal, vertical]
 *   chunkRemoveDistance: [3, 3],        // [horizontal, vertical]
 *   worldGenWhilePaused: false,
 *   manuallyControlChunkLoading: false,
 * }
 * ```
*/
class World extends events__WEBPACK_IMPORTED_MODULE_0___default.a {

    /** @internal @prop _chunksKnown */
    /** @internal @prop _chunksPending */
    /** @internal @prop _chunksToRequest */
    /** @internal @prop _chunksToRemove */
    /** @internal @prop _chunksToMesh */
    /** @internal @prop _chunksToMeshFirst */


    /** @internal */
    constructor(noa, opts) {
        super()
        this.noa = noa
        opts = Object.assign({}, defaultOptions, opts)

        this.playerChunkLoaded = false
        this.Chunk = _chunk__WEBPACK_IMPORTED_MODULE_1__["default"] // expose this class for   ..reasons

        // settings
        this.chunkSize = opts.chunkSize
        this.chunkAddDistance = [1, 1]
        this.chunkRemoveDistance = [1, 1]

        // validate add/remove sizes through a setter that clients can use later
        this.setAddRemoveDistance(opts.chunkAddDistance, opts.chunkRemoveDistance)

        // game clients should set this if they need to manually control 
        // which chunks to load and unload.
        // when set, client should call noa.world.manuallyLoadChunk / UnloadChunk
        this.manuallyControlChunkLoading = !!opts.manuallyControlChunkLoading

        // set this higher to cause chunks not to mesh until they have some neighbors
        this.minNeighborsToMesh = 6
        
        // settings for tuning worldgen behavior and throughput
        this.maxChunksPendingCreation = 10
        this.maxChunksPendingMeshing = 10
        this.maxProcessingPerTick = 9           // ms
        this.maxProcessingPerRender = 5         // ms
        this.worldGenWhilePaused = opts.worldGenWhilePaused

        // set up internal state
        this._cachedWorldName = ''
        this._lastPlayerChunkHash = 0
        this._chunkAddSearchDistance = 0
        
        this._chunksKnown = null
        this._chunksPending = null
        this._chunksToRequest = null
        this._chunksToRemove = null
        this._chunksToMesh = null
        this._chunksToMeshFirst = null
        initChunkQueues(this)

        // chunks stored in a data structure for quick lookup
        // note that the hash wraps around every 1024 chunk indexes!!
        // i.e. two chunks that far apart can't be loaded at the same time
        this._storage = new _util__WEBPACK_IMPORTED_MODULE_2__["ChunkStorage"]()

        // coordinate converter functions - default versions first:
        var cs = this.chunkSize
        this._coordsToChunkIndexes = chunkCoordsToIndexesGeneral
        this._coordsToChunkLocals = chunkCoordsToLocalsGeneral

        // when chunk size is a power of two, override with bit-twiddling:
        var powerOfTwo = ((cs & cs - 1) === 0)
        if (powerOfTwo) {
            this._coordShiftBits = Math.log2(cs) | 0
            this._coordMask = (cs - 1) | 0
            this._coordsToChunkIndexes = chunkCoordsToIndexesPowerOfTwo
            this._coordsToChunkLocals = chunkCoordsToLocalsPowerOfTwo
        }
    }
}





/*
 *
 *
 *
 *
 *                  PUBLIC API 
 *
 *
 *
 *
*/

/** @param x,y,z */
World.prototype.getBlockID = function (x, y, z) {
    var [ci, cj, ck] = this._coordsToChunkIndexes(x, y, z)
    var chunk = this._storage.getChunkByIndexes(ci, cj, ck)
    if (!chunk) return 0
    var [i, j, k] = this._coordsToChunkLocals(x, y, z)
    return chunk.voxels.get(i, j, k)
}

/** @param x,y,z */
World.prototype.getBlockSolidity = function (x, y, z) {
    var [ci, cj, ck] = this._coordsToChunkIndexes(x, y, z)
    var chunk = this._storage.getChunkByIndexes(ci, cj, ck)
    if (!chunk) return false
    var [i, j, k] = this._coordsToChunkLocals(x, y, z)
    return !!chunk.getSolidityAt(i, j, k)
}

/** @param x,y,z */
World.prototype.getBlockOpacity = function (x, y, z) {
    var id = this.getBlockID(x, y, z)
    return this.noa.registry.getBlockOpacity(id)
}

/** @param x,y,z */
World.prototype.getBlockFluidity = function (x, y, z) {
    var id = this.getBlockID(x, y, z)
    return this.noa.registry.getBlockFluidity(id)
}

/** @param x,y,z */
World.prototype.getBlockProperties = function (x, y, z) {
    var id = this.getBlockID(x, y, z)
    return this.noa.registry.getBlockProps(id)
}



/** @param val,x,y,z */
World.prototype.setBlockID = function (val, x, y, z) {
    var [ci, cj, ck] = this._coordsToChunkIndexes(x, y, z)
    var chunk = this._storage.getChunkByIndexes(ci, cj, ck)
    if (!chunk) return
    var [i, j, k] = this._coordsToChunkLocals(x, y, z)
    return chunk.set(i, j, k, val, x, y, z)
}


/** @param box */
World.prototype.isBoxUnobstructed = function (box) {
    var base = box.base
    var max = box.max
    for (var i = Math.floor(base[0]); i < max[0] + 1; i++) {
        for (var j = Math.floor(base[1]); j < max[1] + 1; j++) {
            for (var k = Math.floor(base[2]); k < max[2] + 1; k++) {
                if (this.getBlockSolidity(i, j, k)) return false
            }
        }
    }
    return true
}


/** client should call this after creating a chunk's worth of data (as an ndarray)  
 * If userData is passed in it will be attached to the chunk
 * @param id
 * @param array
 * @param userData
 */
World.prototype.setChunkData = function (id, array, userData) {
    setChunkData(this, id, array, userData)
}



/** Sets the distances within which to load new chunks, and beyond which 
 * to unload them. Generally you want the remove distance to be somewhat
 * farther, so that moving back and forth across the same chunk border doesn't
 * keep loading/unloading the same distant chunks.
 * 
 * Both arguments can be numbers (number of voxels), or arrays like:
 * `[horiz, vert]` specifying different horizontal and vertial distances.
 */
World.prototype.setAddRemoveDistance = function (addDist = 2, remDist = 3) {
    var addArr = Array.isArray(addDist) ? addDist : [addDist, addDist]
    var remArr = Array.isArray(remDist) ? remDist : [remDist, remDist]
    var minGap = 1
    if (remArr[0] < addArr[0] + minGap) remArr[0] = addArr[0] + minGap
    if (remArr[1] < addArr[1] + minGap) remArr[1] = addArr[1] + minGap
    this.chunkAddDistance = addArr
    this.chunkRemoveDistance = remArr
    // resets state of nearby chunk search
    this._chunkAddSearchDistance = 0
}



/** Tells noa to discard voxel data within a given `AABB` (e.g. because 
 * the game client received updated data from a server). 
 * The engine will mark all affected chunks for disposal, and will later emit 
 * new `worldDataNeeded` events (if the chunk is still in draw range).
 * Note that chunks invalidated this way will not emit a `chunkBeingRemoved` event 
 * for the client to save data from.
 */
World.prototype.invalidateVoxelsInAABB = function (box) {
    invalidateChunksInBox(this, box)
}


/** When manually controlling chunk loading, tells the engine that the 
 * chunk containing the specified (x,y,z) needs to be created and loaded.
 * > Note: has no effect when `noa.world.manuallyControlChunkLoading` is not set.
 * @param x, y, z
 */
World.prototype.manuallyLoadChunk = function (x, y, z) {
    if (!this.manuallyControlChunkLoading) throw manualErr
    var [i, j, k] = this._coordsToChunkIndexes(x, y, z)
    this._chunksKnown.add(i, j, k)
    this._chunksToRequest.add(i, j, k)
}

/** When manually controlling chunk loading, tells the engine that the 
 * chunk containing the specified (x,y,z) needs to be unloaded and disposed.
 * > Note: has no effect when `noa.world.manuallyControlChunkLoading` is not set.
 * @param x, y, z
 */
World.prototype.manuallyUnloadChunk = function (x, y, z) {
    if (!this.manuallyControlChunkLoading) throw manualErr
    var [i, j, k] = this._coordsToChunkIndexes(x, y, z)
    this._chunksToRemove.add(i, j, k)
    this._chunksToMesh.remove(i, j, k)
    this._chunksToRequest.remove(i, j, k)
    this._chunksToMeshFirst.remove(i, j, k)
}
var manualErr = 'Set `noa.world.manuallyControlChunkLoading` if you need this API'




/*
 * 
 * 
 * 
 *                  internals:
 * 
 *          tick functions that process queues and trigger events
 * 
 * 
 * 
*/


World.prototype.tick = function () {
    var tickStartTime = performance.now()

    // if world has changed, mark everything to be removed and re-requested
    if (this._cachedWorldName !== this.noa.worldName) {
        markAllChunksForRemoval(this)
        this._cachedWorldName = this.noa.worldName
        this._chunkAddSearchDistance = 0
    }

    // base logic around indexes of player's current chunk
    var [ci, cj, ck] = getPlayerChunkIndexes(this)

    // player changed chunks since last tick?
    var chunkLocHash = Object(_util__WEBPACK_IMPORTED_MODULE_2__["locationHasher"])(ci, cj, ck)
    var changedChunks = (chunkLocHash != this._lastPlayerChunkHash)
    if (changedChunks) {
        this.emit('playerEnteredChunk', ci, cj, ck)
        this._lastPlayerChunkHash = chunkLocHash
        this._chunkAddSearchDistance = 0
    }

    profile_hook('start')
    profile_queues_hook('start')

    // scan for chunks to add/remove (unless client handles manually)
    if (!this.manuallyControlChunkLoading) {
        if (changedChunks) {
            findDistantChunksToRemove(this, ci, cj, ck)
            profile_hook('remQueue')
        }
        findNewChunksInRange(this, ci, cj, ck)
        profile_hook('addQueue')
    }

    // process (create or mesh) some chunks, up to max iteration time
    var ptime = Math.max(0.5, this.maxProcessingPerTick)
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["loopForTime"])(ptime, () => {
        var done = processRequestQueue(this)
        profile_hook('requests')
        done = done && processRemoveQueue(this)
        profile_hook('removes')
        done = done && processMeshingQueue(this, false)
        profile_hook('meshes')
        return done
    }, tickStartTime)

    // when time is left over, look for low-priority extra meshing
    var dt = performance.now() - tickStartTime
    ptime -= dt
    if (ptime > 0.5) {
        lookForChunksToMesh(this)
        profile_hook('looking')
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["loopForTime"])(ptime, () => {
            var done = processMeshingQueue(this, false)
            profile_hook('meshes')
            return done
        }, tickStartTime)
    }

    // track whether the player's local chunk is loaded and ready or not
    var pChunk = this._storage.getChunkByIndexes(ci, cj, ck)
    this.playerChunkLoaded = !!pChunk

    profile_queues_hook('end', this)
    profile_hook('end')
}


World.prototype.render = function () {
    // on render, quickly process the high-priority meshing queue
    // to help avoid flashes of background while neighboring chunks update
    var mpr = this.maxProcessingPerRender
    if (mpr > 0) Object(_util__WEBPACK_IMPORTED_MODULE_2__["loopForTime"])(mpr, () => {
        return processMeshingQueue(this, true)
    })
}


World.prototype._getChunkByCoords = function (x, y, z) {
    // let internal modules request a chunk object
    var [i, j, k] = this._coordsToChunkIndexes(x, y, z)
    return this._storage.getChunkByIndexes(i, j, k)
}










/*
 * 
 * 
 * 
 *              chunk queues and queue processing
 * 
 * 
 * 
*/


function initChunkQueues(world) {
    // queue meanings:
    //    Known:        all chunks existing in any queue
    //    ToRequest:    needed but not yet requested from client
    //    Pending:      requested, awaiting creation
    //    ToMesh:       created but not yet meshed
    //    ToMeshFirst:  priority meshing queue
    //    ToRemove:     chunks awaiting disposal
    world._chunksKnown = new _util__WEBPACK_IMPORTED_MODULE_2__["LocationQueue"]()
    world._chunksToMesh = new _util__WEBPACK_IMPORTED_MODULE_2__["LocationQueue"]()
    world._chunksPending = new _util__WEBPACK_IMPORTED_MODULE_2__["LocationQueue"]()
    world._chunksToRemove = new _util__WEBPACK_IMPORTED_MODULE_2__["LocationQueue"]()
    world._chunksToRequest = new _util__WEBPACK_IMPORTED_MODULE_2__["LocationQueue"]()
    world._chunksToMeshFirst = new _util__WEBPACK_IMPORTED_MODULE_2__["LocationQueue"]()
}

// internal accessor chunks to queue themeselves for remeshing
World.prototype._queueChunkForRemesh = function (chunk) {
    possiblyQueueChunkForMeshing(this, chunk)
}



// helper - chunk indexes of where the player is
function getPlayerChunkIndexes(world) {
    var pos = world.noa.entities.getPosition(world.noa.playerEntity)
    return world._coordsToChunkIndexes(pos[0], pos[1], pos[2])
}




// process neighborhood chunks, add missing ones to "toRequest" and "inMemory"
function findNewChunksInRange(world, ci, cj, ck) {
    var toRequest = world._chunksToRequest
    if (toRequest.count() > 50) return
    var addX = Math.ceil(world.chunkAddDistance[0])
    var addY = Math.ceil(world.chunkAddDistance[1])
    var addMax = Math.max(addX, addY)
    if (world._chunkAddSearchDistance > addMax) return

    var addDistSq = 2 * (addX * addX) + addY * addY
    var known = world._chunksKnown
    var toRemove = world._chunksToRemove

    // search all nearby chunk locations
    var dist = Math.max(0, world._chunkAddSearchDistance)
    var removalsFound = false
    var maxCountReached = false
    for (; dist <= addMax; dist++) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["iterateOverShellAtDistance"])(dist, addX, addY, (di, dj, dk) => {
            var i = ci + di
            var j = cj + dj
            var k = ck + dk
            if (known.includes(i, j, k)) {
                if (toRemove.includes(i, j, k)) removalsFound = true
                return false
            }
            var distSq = di * di + dj * dj + dk * dk
            if (distSq > addDistSq) return false
            known.add(i, j, k)
            toRequest.add(i, j, k)
            if (toRequest.count() > 100) {
                maxCountReached = true
                return true
            }
        })
        if (maxCountReached) break
        if (!removalsFound) world._chunkAddSearchDistance = dist + 1
    }
    sortQueueByDistanceFrom(toRequest, ci, cj, ck)
}


// rebuild queue of chunks to be removed from around (ci,cj,ck)
function findDistantChunksToRemove(world, ci, cj, ck) {
    var rx = world.chunkRemoveDistance[0]
    var ry = world.chunkRemoveDistance[1]
    var remDistSqX = 2 * (rx * rx)
    var remDistSq = 2 * (rx * rx) + ry * ry
    var toRemove = world._chunksToRemove
    world._chunksKnown.forEach(loc => {
        if (toRemove.includes(loc[0], loc[1], loc[2])) return
        var di = loc[0] - ci
        var dj = loc[1] - cj
        var dk = loc[2] - ck
        var dx = di * di + dk * dk
        if ((Math.abs(dj) <= ry) &&
            (dx <= remDistSqX) &&
            (dx + dj * dj <= remDistSq)) return
        // flag chunk for removal and remove it from work queues
        world._chunksToRemove.add(loc[0], loc[1], loc[2])
        world._chunksToMesh.remove(loc[0], loc[1], loc[2])
        world._chunksToRequest.remove(loc[0], loc[1], loc[2])
        world._chunksToMeshFirst.remove(loc[0], loc[1], loc[2])
    })
    sortQueueByDistanceFrom(toRemove, ci, cj, ck)
}


// invalidate chunks overlapping the given AABB
function invalidateChunksInBox(world, box) {
    var min = world._coordsToChunkIndexes(box.base[0], box.base[1], box.base[2])
    var max = world._coordsToChunkIndexes(box.max[0], box.max[1], box.max[2])
    for (var i = 0; i < 3; i++) {
        if (!Number.isFinite(box.base[i])) min[i] = box.base[i]
        if (!Number.isFinite(box.max[i])) max[i] = box.max[i]
    }
    world._chunksKnown.forEach(loc => {
        for (var i = 0; i < 3; i++) {
            if (loc[i] < min[i] || loc[i] >= max[i]) return
        }
        world._chunksToRemove.add(loc[0], loc[1], loc[2])
        world._chunksToMesh.remove(loc[0], loc[1], loc[2])
        world._chunksToRequest.remove(loc[0], loc[1], loc[2])
        world._chunksToMeshFirst.remove(loc[0], loc[1], loc[2])
    })
}

// when current world changes - empty work queues and mark all for removal
function markAllChunksForRemoval(world) {
    world._chunksToRemove.copyFrom(world._chunksKnown)
    world._chunksToRequest.empty()
    world._chunksToMesh.empty()
    world._chunksToMeshFirst.empty()
    var loc = getPlayerChunkIndexes(world)
    sortQueueByDistanceFrom(world._chunksToRemove, loc[0], loc[1], loc[2])
}


// incrementally look for chunks that could be re-meshed
function lookForChunksToMesh(world) {
    var limit = 5
    var numQueued = world._chunksToMesh.count() + world._chunksToMeshFirst.count()
    if (numQueued > limit) return
    var knownLocs = world._chunksKnown.arr
    var ct = Math.min(50, knownLocs.length)
    for (var i = 0; i < ct; i++) {
        lookIndex = (lookIndex + 1) % knownLocs.length
        var loc = knownLocs[lookIndex]
        var chunk = world._storage.getChunkByIndexes(loc[0], loc[1], loc[2])
        if (!chunk) continue
        var res = possiblyQueueChunkForMeshing(world, chunk)
        if (res) numQueued++
        if (numQueued > limit) return
    }
}
var lookIndex = -1



// run through chunk tracking queues looking for work to do next
function processRequestQueue(world) {
    var toRequest = world._chunksToRequest
    if (toRequest.isEmpty()) return true
    // skip if too many outstanding requests, or if meshing queue is full
    var pending = world._chunksPending.count()
    var toMesh = world._chunksToMesh.count()
    if (pending >= world.maxChunksPendingCreation) return true
    if (toMesh >= world.maxChunksPendingMeshing) return true
    var loc = toRequest.pop()
    requestNewChunk(world, loc[0], loc[1], loc[2])
    return toRequest.isEmpty()
}


function processRemoveQueue(world) {
    var toRemove = world._chunksToRemove
    if (toRemove.isEmpty()) return true
    var loc = toRemove.pop()
    removeChunk(world, loc[0], loc[1], loc[2])
    return (toRemove.isEmpty())
}


// similar to above but for chunks waiting to be meshed
function processMeshingQueue(world, firstOnly) {
    var queue = world._chunksToMeshFirst
    if (queue.isEmpty() && !firstOnly) queue = world._chunksToMesh
    if (queue.isEmpty()) return true

    var loc = queue.pop()
    if (world._chunksToRemove.includes(loc[0], loc[1], loc[2])) return
    var chunk = world._storage.getChunkByIndexes(loc[0], loc[1], loc[2])

    if (chunk) doChunkRemesh(world, chunk)
}


function possiblyQueueChunkForMeshing(world, chunk) {
    if (!(chunk._terrainDirty || chunk._objectsDirty)) return
    var nc = chunk._neighborCount
    if (nc < chunk.minNeighborsToMesh) return
    var queue = (nc === 26) ?
        world._chunksToMeshFirst : world._chunksToMesh
    queue.add(chunk.i, chunk.j, chunk.k)
    return true
}







/*
 * 
 * 
 * 
 *              chunk lifecycle - create / set / remove / modify
 * 
 * 
 * 
*/


// create chunk object and request voxel data from client
function requestNewChunk(world, i, j, k) {
    var size = world.chunkSize
    var dataArr = _chunk__WEBPACK_IMPORTED_MODULE_1__["default"]._createVoxelArray(world.chunkSize)
    var worldName = world.noa.worldName
    var requestID = [i, j, k, worldName].join('|')
    var x = i * size
    var y = j * size
    var z = k * size
    world._chunksPending.add(i, j, k)
    world.emit('worldDataNeeded', requestID, dataArr, x, y, z, worldName)
    profile_queues_hook('request')
}

// called when client sets a chunk's voxel data
// If userData is passed in it will be attached to the chunk
function setChunkData(world, reqID, array, userData) {
    var arr = reqID.split('|')
    var i = parseInt(arr.shift())
    var j = parseInt(arr.shift())
    var k = parseInt(arr.shift())
    var worldName = arr.join('|')
    world._chunksPending.remove(i, j, k)
    // discard data if it's for a world that's no longer current
    if (worldName !== world.noa.worldName) return
    // discard if chunk is no longer needed
    if (!world._chunksKnown.includes(i, j, k)) return
    if (world._chunksToRemove.includes(i, j, k)) return

    var chunk = world._storage.getChunkByIndexes(i, j, k)
    if (!chunk) {
        // if chunk doesn't exist, create and init
        var size = world.chunkSize
        chunk = new _chunk__WEBPACK_IMPORTED_MODULE_1__["default"](world.noa, reqID, i, j, k, size, array)
        world._storage.storeChunkByIndexes(i, j, k, chunk)
        chunk.userData = userData
        world.noa.rendering.prepareChunkForRendering(chunk)
        world.emit('chunkAdded', chunk)
    } else {
        // else we're updating data for an existing chunk
        chunk._updateVoxelArray(array)
    }
    // chunk can now be meshed, and ping neighbors
    possiblyQueueChunkForMeshing(world, chunk)
    updateNeighborsOfChunk(world, i, j, k, chunk)

    profile_queues_hook('receive')
}



// remove a chunk that wound up in the remove queue
function removeChunk(world, i, j, k) {
    var chunk = world._storage.getChunkByIndexes(i, j, k)

    if (chunk) {
        world.emit('chunkBeingRemoved', chunk.requestID, chunk.voxels, chunk.userData)
        world.noa.rendering.disposeChunkForRendering(chunk)
        chunk.dispose()
        profile_queues_hook('dispose')
        updateNeighborsOfChunk(world, i, j, k, null)
    }

    world._storage.removeChunkByIndexes(i, j, k)
    world._chunksKnown.remove(i, j, k)
    world._chunksToMesh.remove(i, j, k)
    world._chunksToMeshFirst.remove(i, j, k)
}


function doChunkRemesh(world, chunk) {
    world._chunksToMesh.remove(chunk.i, chunk.j, chunk.k)
    world._chunksToMeshFirst.remove(chunk.i, chunk.j, chunk.k)
    chunk.updateMeshes()
    profile_queues_hook('mesh')
}










/*
 * 
 * 
 *          two different versions of logic to convert
 *          chunk coords to chunk indexes or local scope
 * 
 * 
*/

function chunkCoordsToIndexesGeneral(x, y, z) {
    var cs = this.chunkSize
    return [Math.floor(x / cs) | 0, Math.floor(y / cs) | 0, Math.floor(z / cs) | 0]
}
function chunkCoordsToLocalsGeneral(x, y, z) {
    var cs = this.chunkSize
    var i = (x % cs) | 0; if (i < 0) i += cs
    var j = (y % cs) | 0; if (j < 0) j += cs
    var k = (z % cs) | 0; if (k < 0) k += cs
    return [i, j, k]
}
function chunkCoordsToIndexesPowerOfTwo(x, y, z) {
    var shift = this._coordShiftBits
    return [(x >> shift) | 0, (y >> shift) | 0, (z >> shift) | 0]
}
function chunkCoordsToLocalsPowerOfTwo(x, y, z) {
    var mask = this._coordMask
    return [(x & mask) | 0, (y & mask) | 0, (z & mask) | 0]
}







/*
 * 
 * 
 * 
 *          misc helpers and implementation functions
 * 
 * 
 * 
*/


function sortQueueByDistanceFrom(queue, i, j, k) {
    queue.sortByDistance(loc => {
        var dx = loc[0] - i
        var dy = loc[1] - j
        var dz = loc[2] - k
        // bias towards keeping verticals together for now
        return 10 * (dx * dx + dz * dz) + Math.abs(dy)
    })
}


// keep neighbor data updated when chunk is added or removed
function updateNeighborsOfChunk(world, ci, cj, ck, chunk) {
    var terrainChanged = (!chunk) || (chunk && !chunk.isEmpty)
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            for (var k = -1; k <= 1; k++) {
                if ((i | j | k) === 0) continue
                var neighbor = world._storage.getChunkByIndexes(ci + i, cj + j, ck + k)
                if (!neighbor) continue
                // flag neighbor, assume terrain needs remeshing
                if (terrainChanged) neighbor._terrainDirty = true
                // update neighbor counts and references, both ways
                if (chunk && !chunk._neighbors.get(i, j, k)) {
                    chunk._neighborCount++
                    chunk._neighbors.set(i, j, k, neighbor)
                }
                var nabRef = neighbor._neighbors.get(-i, -j, -k)
                if (chunk && !nabRef) {
                    neighbor._neighborCount++
                    neighbor._neighbors.set(-i, -j, -k, chunk)
                    // immediately queue neighbor if it's surrounded
                    if (neighbor._neighborCount === 26) {
                        possiblyQueueChunkForMeshing(world, neighbor)
                    }
                }
                if (!chunk && nabRef) {
                    neighbor._neighborCount--
                    neighbor._neighbors.set(-i, -j, -k, null)
                }
            }
        }
    }
}












/*
 * 
 * 
 * 
 * 
 *                  debugging
 * 
 * 
 * 
 * 
*/

World.prototype.report = function () {
    console.log('World report - playerChunkLoaded: ', this.playerChunkLoaded)
    _report(this, '  known:     ', this._chunksKnown.arr, true)
    _report(this, '  to request:', this._chunksToRequest.arr, 0)
    _report(this, '  to remove: ', this._chunksToRemove.arr, 0)
    _report(this, '  creating:  ', this._chunksPending.arr, 0)
    _report(this, '  to mesh:   ', this._chunksToMesh.arr.concat(this._chunksToMeshFirst.arr), 0)
}

function _report(world, name, arr, ext) {
    var full = 0,
        empty = 0,
        exist = 0,
        surrounded = 0,
        remeshes = []
    arr.forEach(loc => {
        var chunk = world._storage.getChunkByIndexes(loc[0], loc[1], loc[2])
        if (!chunk) return
        exist++
        remeshes.push(chunk._timesMeshed)
        if (chunk.isFull) full++
        if (chunk.isEmpty) empty++
        if (chunk._neighborCount === 26) surrounded++
    })
    var out = arr.length.toString().padEnd(8)
    out += ('exist: ' + exist).padEnd(12)
    out += ('full: ' + full).padEnd(12)
    out += ('empty: ' + empty).padEnd(12)
    out += ('surr: ' + surrounded).padEnd(12)
    if (ext) {
        var sum = remeshes.reduce((acc, val) => acc + val, 0)
        var max = remeshes.reduce((acc, val) => Math.max(acc, val), 0)
        var min = remeshes.reduce((acc, val) => Math.min(acc, val), 0)
        out += 'times meshed: avg ' + (sum / exist).toFixed(2)
        out += '  max ' + max
        out += '  min ' + min
    }
    console.log(name, out)
}



var profile_hook = Object(_util__WEBPACK_IMPORTED_MODULE_2__["makeProfileHook"])(PROFILE_EVERY, 'world ticks:', 1)
var profile_queues_hook = ((every) => {
    if (!(every > 0)) return () => { }
    var iter = 0
    var counts = {}
    var queues = {}
    var started = performance.now()
    return function profile_queues_hook(state, world) {
        if (state === 'start') return
        if (state !== 'end') return counts[state] = (counts[state] || 0) + 1
        queues.toreq = (queues.toreq || 0) + world._chunksToRequest.count()
        queues.toget = (queues.toget || 0) + world._chunksPending.count()
        queues.tomesh = (queues.tomesh || 0) + world._chunksToMesh.count() + world._chunksToMeshFirst.count()
        queues.tomesh1 = (queues.tomesh1 || 0) + world._chunksToMeshFirst.count()
        queues.torem = (queues.torem || 0) + world._chunksToRemove.count()
        if (++iter < every) return
        var t = performance.now(), dt = t - started
        var res = {}
        Object.keys(queues).forEach(k => {
            var num = Math.round((queues[k] || 0) / iter)
            res[k] = `[${num}]`.padStart(5)
        })
        Object.keys(counts).forEach(k => {
            var num = Math.round((counts[k] || 0) * 1000 / dt)
            res[k] = ('' + num).padStart(3)
        })
        console.log('chunk flow: ',
            `${res.toreq}-> ${res.request || 0} req/s  `,
            `${res.toget}-> ${res.receive || 0} got/s  `,
            `${(res.tomesh)}-> ${res.mesh || 0} mesh/s  `,
            `${res.torem}-> ${res.dispose || 0} rem/s  `,
            `(meshFirst: ${res.tomesh1.trim()})`,
        )
        iter = 0
        counts = {}
        queues = {}
        started = performance.now()
    }
})(PROFILE_QUEUES_EVERY)

/***/ }),

/***/ "../../node_modules/open-simplex-noise/lib/2d.js":
/*!****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/open-simplex-noise/lib/2d.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is free and unencumbered software released into the public domain
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNoise2D = void 0;
var shuffle_seed_1 = __webpack_require__(/*! ./shuffle_seed */ "../../node_modules/open-simplex-noise/lib/shuffle_seed.js");
var NORM_2D = 1.0 / 47.0;
var SQUISH_2D = (Math.sqrt(2 + 1) - 1) / 2;
var STRETCH_2D = (1 / Math.sqrt(2 + 1) - 1) / 2;
function contribution2D(multiplier, xsb, ysb) {
    return {
        dx: -xsb - multiplier * SQUISH_2D,
        dy: -ysb - multiplier * SQUISH_2D,
        xsb: xsb,
        ysb: ysb,
    };
}
function makeNoise2D(clientSeed) {
    var contributions = [];
    for (var i = 0; i < p2D.length; i += 4) {
        var baseSet = base2D[p2D[i]];
        var previous = null;
        var current = null;
        for (var k = 0; k < baseSet.length; k += 3) {
            current = contribution2D(baseSet[k], baseSet[k + 1], baseSet[k + 2]);
            if (previous === null)
                contributions[i / 4] = current;
            else
                previous.next = current;
            previous = current;
        }
        current.next = contribution2D(p2D[i + 1], p2D[i + 2], p2D[i + 3]);
    }
    var lookup = [];
    for (var i = 0; i < lookupPairs2D.length; i += 2) {
        lookup[lookupPairs2D[i]] = contributions[lookupPairs2D[i + 1]];
    }
    var perm = new Uint8Array(256);
    var perm2D = new Uint8Array(256);
    var source = new Uint8Array(256);
    for (var i = 0; i < 256; i++)
        source[i] = i;
    var seed = new Uint32Array(1);
    seed[0] = clientSeed;
    seed = shuffle_seed_1.default(shuffle_seed_1.default(shuffle_seed_1.default(seed)));
    for (var i = 255; i >= 0; i--) {
        seed = shuffle_seed_1.default(seed);
        var r = new Uint32Array(1);
        r[0] = (seed[0] + 31) % (i + 1);
        if (r[0] < 0)
            r[0] += i + 1;
        perm[i] = source[r[0]];
        perm2D[i] = perm[i] & 0x0e;
        source[r[0]] = source[i];
    }
    return function (x, y) {
        var stretchOffset = (x + y) * STRETCH_2D;
        var xs = x + stretchOffset;
        var ys = y + stretchOffset;
        var xsb = Math.floor(xs);
        var ysb = Math.floor(ys);
        var squishOffset = (xsb + ysb) * SQUISH_2D;
        var dx0 = x - (xsb + squishOffset);
        var dy0 = y - (ysb + squishOffset);
        var xins = xs - xsb;
        var yins = ys - ysb;
        var inSum = xins + yins;
        var hash = (xins - yins + 1) |
            (inSum << 1) |
            ((inSum + yins) << 2) |
            ((inSum + xins) << 4);
        var value = 0;
        for (var c = lookup[hash]; c !== undefined; c = c.next) {
            var dx = dx0 + c.dx;
            var dy = dy0 + c.dy;
            var attn = 2 - dx * dx - dy * dy;
            if (attn > 0) {
                var px = xsb + c.xsb;
                var py = ysb + c.ysb;
                var indexPartA = perm[px & 0xff];
                var index = perm2D[(indexPartA + py) & 0xff];
                var valuePart = gradients2D[index] * dx + gradients2D[index + 1] * dy;
                value += attn * attn * attn * attn * valuePart;
            }
        }
        return value * NORM_2D;
    };
}
exports.makeNoise2D = makeNoise2D;
var base2D = [
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 2, 1, 1],
];
var gradients2D = [
    5,
    2,
    2,
    5,
    -5,
    2,
    -2,
    5,
    5,
    -2,
    2,
    -5,
    -5,
    -2,
    -2,
    -5,
];
var lookupPairs2D = [
    0,
    1,
    1,
    0,
    4,
    1,
    17,
    0,
    20,
    2,
    21,
    2,
    22,
    5,
    23,
    5,
    26,
    4,
    39,
    3,
    42,
    4,
    43,
    3,
];
var p2D = [
    0,
    0,
    1,
    -1,
    0,
    0,
    -1,
    1,
    0,
    2,
    1,
    1,
    1,
    2,
    2,
    0,
    1,
    2,
    0,
    2,
    1,
    0,
    0,
    0,
];


/***/ }),

/***/ "../../node_modules/open-simplex-noise/lib/3d.js":
/*!****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/open-simplex-noise/lib/3d.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is free and unencumbered software released into the public domain
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNoise3D = void 0;
var shuffle_seed_1 = __webpack_require__(/*! ./shuffle_seed */ "../../node_modules/open-simplex-noise/lib/shuffle_seed.js");
var NORM_3D = 1.0 / 103.0;
var SQUISH_3D = (Math.sqrt(3 + 1) - 1) / 3;
var STRETCH_3D = (1 / Math.sqrt(3 + 1) - 1) / 3;
function contribution3D(multiplier, xsb, ysb, zsb) {
    return {
        dx: -xsb - multiplier * SQUISH_3D,
        dy: -ysb - multiplier * SQUISH_3D,
        dz: -zsb - multiplier * SQUISH_3D,
        xsb: xsb,
        ysb: ysb,
        zsb: zsb,
    };
}
function makeNoise3D(clientSeed) {
    var contributions = [];
    for (var i = 0; i < p3D.length; i += 9) {
        var baseSet = base3D[p3D[i]];
        var previous = null;
        var current = null;
        for (var k = 0; k < baseSet.length; k += 4) {
            current = contribution3D(baseSet[k], baseSet[k + 1], baseSet[k + 2], baseSet[k + 3]);
            if (previous === null)
                contributions[i / 9] = current;
            else
                previous.next = current;
            previous = current;
        }
        current.next = contribution3D(p3D[i + 1], p3D[i + 2], p3D[i + 3], p3D[i + 4]);
        current.next.next = contribution3D(p3D[i + 5], p3D[i + 6], p3D[i + 7], p3D[i + 8]);
    }
    var lookup = [];
    for (var i = 0; i < lookupPairs3D.length; i += 2) {
        lookup[lookupPairs3D[i]] = contributions[lookupPairs3D[i + 1]];
    }
    var perm = new Uint8Array(256);
    var perm3D = new Uint8Array(256);
    var source = new Uint8Array(256);
    for (var i = 0; i < 256; i++)
        source[i] = i;
    var seed = new Uint32Array(1);
    seed[0] = clientSeed;
    seed = shuffle_seed_1.default(shuffle_seed_1.default(shuffle_seed_1.default(seed)));
    for (var i = 255; i >= 0; i--) {
        seed = shuffle_seed_1.default(seed);
        var r = new Uint32Array(1);
        r[0] = (seed[0] + 31) % (i + 1);
        if (r[0] < 0)
            r[0] += i + 1;
        perm[i] = source[r[0]];
        perm3D[i] = (perm[i] % 24) * 3;
        source[r[0]] = source[i];
    }
    return function (x, y, z) {
        var stretchOffset = (x + y + z) * STRETCH_3D;
        var xs = x + stretchOffset;
        var ys = y + stretchOffset;
        var zs = z + stretchOffset;
        var xsb = Math.floor(xs);
        var ysb = Math.floor(ys);
        var zsb = Math.floor(zs);
        var squishOffset = (xsb + ysb + zsb) * SQUISH_3D;
        var dx0 = x - (xsb + squishOffset);
        var dy0 = y - (ysb + squishOffset);
        var dz0 = z - (zsb + squishOffset);
        var xins = xs - xsb;
        var yins = ys - ysb;
        var zins = zs - zsb;
        var inSum = xins + yins + zins;
        var hash = (yins - zins + 1) |
            ((xins - yins + 1) << 1) |
            ((xins - zins + 1) << 2) |
            (inSum << 3) |
            ((inSum + zins) << 5) |
            ((inSum + yins) << 7) |
            ((inSum + xins) << 9);
        var value = 0;
        for (var c = lookup[hash]; c !== undefined; c = c.next) {
            var dx = dx0 + c.dx;
            var dy = dy0 + c.dy;
            var dz = dz0 + c.dz;
            var attn = 2 - dx * dx - dy * dy - dz * dz;
            if (attn > 0) {
                var px = xsb + c.xsb;
                var py = ysb + c.ysb;
                var pz = zsb + c.zsb;
                var indexPartA = perm[px & 0xff];
                var indexPartB = perm[(indexPartA + py) & 0xff];
                var index = perm3D[(indexPartB + pz) & 0xff];
                var valuePart = gradients3D[index] * dx +
                    gradients3D[index + 1] * dy +
                    gradients3D[index + 2] * dz;
                value += attn * attn * attn * attn * valuePart;
            }
        }
        return value * NORM_3D;
    };
}
exports.makeNoise3D = makeNoise3D;
var base3D = [
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1],
    [2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 3, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1],
];
var gradients3D = [
    -11,
    4,
    4,
    -4,
    11,
    4,
    -4,
    4,
    11,
    11,
    4,
    4,
    4,
    11,
    4,
    4,
    4,
    11,
    -11,
    -4,
    4,
    -4,
    -11,
    4,
    -4,
    -4,
    11,
    11,
    -4,
    4,
    4,
    -11,
    4,
    4,
    -4,
    11,
    -11,
    4,
    -4,
    -4,
    11,
    -4,
    -4,
    4,
    -11,
    11,
    4,
    -4,
    4,
    11,
    -4,
    4,
    4,
    -11,
    -11,
    -4,
    -4,
    -4,
    -11,
    -4,
    -4,
    -4,
    -11,
    11,
    -4,
    -4,
    4,
    -11,
    -4,
    4,
    -4,
    -11,
];
var lookupPairs3D = [
    0,
    2,
    1,
    1,
    2,
    2,
    5,
    1,
    6,
    0,
    7,
    0,
    32,
    2,
    34,
    2,
    129,
    1,
    133,
    1,
    160,
    5,
    161,
    5,
    518,
    0,
    519,
    0,
    546,
    4,
    550,
    4,
    645,
    3,
    647,
    3,
    672,
    5,
    673,
    5,
    674,
    4,
    677,
    3,
    678,
    4,
    679,
    3,
    680,
    13,
    681,
    13,
    682,
    12,
    685,
    14,
    686,
    12,
    687,
    14,
    712,
    20,
    714,
    18,
    809,
    21,
    813,
    23,
    840,
    20,
    841,
    21,
    1198,
    19,
    1199,
    22,
    1226,
    18,
    1230,
    19,
    1325,
    23,
    1327,
    22,
    1352,
    15,
    1353,
    17,
    1354,
    15,
    1357,
    17,
    1358,
    16,
    1359,
    16,
    1360,
    11,
    1361,
    10,
    1362,
    11,
    1365,
    10,
    1366,
    9,
    1367,
    9,
    1392,
    11,
    1394,
    11,
    1489,
    10,
    1493,
    10,
    1520,
    8,
    1521,
    8,
    1878,
    9,
    1879,
    9,
    1906,
    7,
    1910,
    7,
    2005,
    6,
    2007,
    6,
    2032,
    8,
    2033,
    8,
    2034,
    7,
    2037,
    6,
    2038,
    7,
    2039,
    6,
];
var p3D = [
    0,
    0,
    1,
    -1,
    0,
    0,
    1,
    0,
    -1,
    0,
    0,
    -1,
    1,
    0,
    0,
    0,
    1,
    -1,
    0,
    0,
    -1,
    0,
    1,
    0,
    0,
    -1,
    1,
    0,
    2,
    1,
    1,
    0,
    1,
    1,
    1,
    -1,
    0,
    2,
    1,
    0,
    1,
    1,
    1,
    -1,
    1,
    0,
    2,
    0,
    1,
    1,
    1,
    -1,
    1,
    1,
    1,
    3,
    2,
    1,
    0,
    3,
    1,
    2,
    0,
    1,
    3,
    2,
    0,
    1,
    3,
    1,
    0,
    2,
    1,
    3,
    0,
    2,
    1,
    3,
    0,
    1,
    2,
    1,
    1,
    1,
    0,
    0,
    2,
    2,
    0,
    0,
    1,
    1,
    0,
    1,
    0,
    2,
    0,
    2,
    0,
    1,
    1,
    0,
    0,
    1,
    2,
    0,
    0,
    2,
    2,
    0,
    0,
    0,
    0,
    1,
    1,
    -1,
    1,
    2,
    0,
    0,
    0,
    0,
    1,
    -1,
    1,
    1,
    2,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    -1,
    2,
    3,
    1,
    1,
    1,
    2,
    0,
    0,
    2,
    2,
    3,
    1,
    1,
    1,
    2,
    2,
    0,
    0,
    2,
    3,
    1,
    1,
    1,
    2,
    0,
    2,
    0,
    2,
    1,
    1,
    -1,
    1,
    2,
    0,
    0,
    2,
    2,
    1,
    1,
    -1,
    1,
    2,
    2,
    0,
    0,
    2,
    1,
    -1,
    1,
    1,
    2,
    0,
    0,
    2,
    2,
    1,
    -1,
    1,
    1,
    2,
    0,
    2,
    0,
    2,
    1,
    1,
    1,
    -1,
    2,
    2,
    0,
    0,
    2,
    1,
    1,
    1,
    -1,
    2,
    0,
    2,
    0,
];


/***/ }),

/***/ "../../node_modules/open-simplex-noise/lib/4d.js":
/*!****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/open-simplex-noise/lib/4d.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is free and unencumbered software released into the public domain
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNoise4D = void 0;
var shuffle_seed_1 = __webpack_require__(/*! ./shuffle_seed */ "../../node_modules/open-simplex-noise/lib/shuffle_seed.js");
var NORM_4D = 1.0 / 30.0;
var SQUISH_4D = (Math.sqrt(4 + 1) - 1) / 4;
var STRETCH_4D = (1 / Math.sqrt(4 + 1) - 1) / 4;
function contribution4D(multiplier, xsb, ysb, zsb, wsb) {
    return {
        dx: -xsb - multiplier * SQUISH_4D,
        dy: -ysb - multiplier * SQUISH_4D,
        dz: -zsb - multiplier * SQUISH_4D,
        dw: -wsb - multiplier * SQUISH_4D,
        xsb: xsb,
        ysb: ysb,
        zsb: zsb,
        wsb: wsb,
    };
}
function makeNoise4D(clientSeed) {
    var contributions = [];
    for (var i = 0; i < p4D.length; i += 16) {
        var baseSet = base4D[p4D[i]];
        var previous = null;
        var current = null;
        for (var k = 0; k < baseSet.length; k += 5) {
            current = contribution4D(baseSet[k], baseSet[k + 1], baseSet[k + 2], baseSet[k + 3], baseSet[k + 4]);
            if (previous === null)
                contributions[i / 16] = current;
            else
                previous.next = current;
            previous = current;
        }
        current.next = contribution4D(p4D[i + 1], p4D[i + 2], p4D[i + 3], p4D[i + 4], p4D[i + 5]);
        current.next.next = contribution4D(p4D[i + 6], p4D[i + 7], p4D[i + 8], p4D[i + 9], p4D[i + 10]);
        current.next.next.next = contribution4D(p4D[i + 11], p4D[i + 12], p4D[i + 13], p4D[i + 14], p4D[i + 15]);
    }
    var lookup = [];
    for (var i = 0; i < lookupPairs4D.length; i += 2) {
        lookup[lookupPairs4D[i]] = contributions[lookupPairs4D[i + 1]];
    }
    var perm = new Uint8Array(256);
    var perm4D = new Uint8Array(256);
    var source = new Uint8Array(256);
    for (var i = 0; i < 256; i++)
        source[i] = i;
    var seed = new Uint32Array(1);
    seed[0] = clientSeed;
    seed = shuffle_seed_1.default(shuffle_seed_1.default(shuffle_seed_1.default(seed)));
    for (var i = 255; i >= 0; i--) {
        seed = shuffle_seed_1.default(seed);
        var r = new Uint32Array(1);
        r[0] = (seed[0] + 31) % (i + 1);
        if (r[0] < 0)
            r[0] += i + 1;
        perm[i] = source[r[0]];
        perm4D[i] = perm[i] & 0xfc;
        source[r[0]] = source[i];
    }
    return function (x, y, z, w) {
        var stretchOffset = (x + y + z + w) * STRETCH_4D;
        var xs = x + stretchOffset;
        var ys = y + stretchOffset;
        var zs = z + stretchOffset;
        var ws = w + stretchOffset;
        var xsb = Math.floor(xs);
        var ysb = Math.floor(ys);
        var zsb = Math.floor(zs);
        var wsb = Math.floor(ws);
        var squishOffset = (xsb + ysb + zsb + wsb) * SQUISH_4D;
        var dx0 = x - (xsb + squishOffset);
        var dy0 = y - (ysb + squishOffset);
        var dz0 = z - (zsb + squishOffset);
        var dw0 = w - (wsb + squishOffset);
        var xins = xs - xsb;
        var yins = ys - ysb;
        var zins = zs - zsb;
        var wins = ws - wsb;
        var inSum = xins + yins + zins + wins;
        var hash = (zins - wins + 1) |
            ((yins - zins + 1) << 1) |
            ((yins - wins + 1) << 2) |
            ((xins - yins + 1) << 3) |
            ((xins - zins + 1) << 4) |
            ((xins - wins + 1) << 5) |
            (inSum << 6) |
            ((inSum + wins) << 8) |
            ((inSum + zins) << 11) |
            ((inSum + yins) << 14) |
            ((inSum + xins) << 17);
        var value = 0;
        for (var c = lookup[hash]; c !== undefined; c = c.next) {
            var dx = dx0 + c.dx;
            var dy = dy0 + c.dy;
            var dz = dz0 + c.dz;
            var dw = dw0 + c.dw;
            var attn = 2 - dx * dx - dy * dy - dz * dz - dw * dw;
            if (attn > 0) {
                var px = xsb + c.xsb;
                var py = ysb + c.ysb;
                var pz = zsb + c.zsb;
                var pw = wsb + c.wsb;
                var indexPartA = perm[px & 0xff];
                var indexPartB = perm[(indexPartA + py) & 0xff];
                var indexPartC = perm[(indexPartB + pz) & 0xff];
                var index = perm4D[(indexPartC + pw) & 0xff];
                var valuePart = gradients4D[index] * dx +
                    gradients4D[index + 1] * dy +
                    gradients4D[index + 2] * dz +
                    gradients4D[index + 3] * dw;
                value += attn * attn * attn * attn * valuePart;
            }
        }
        return value * NORM_4D;
    };
}
exports.makeNoise4D = makeNoise4D;
var base4D = [
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [3, 1, 1, 1, 0, 3, 1, 1, 0, 1, 3, 1, 0, 1, 1, 3, 0, 1, 1, 1, 4, 1, 1, 1, 1],
    [
        1,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        2,
        1,
        1,
        0,
        0,
        2,
        1,
        0,
        1,
        0,
        2,
        1,
        0,
        0,
        1,
        2,
        0,
        1,
        1,
        0,
        2,
        0,
        1,
        0,
        1,
        2,
        0,
        0,
        1,
        1,
    ],
    [
        3,
        1,
        1,
        1,
        0,
        3,
        1,
        1,
        0,
        1,
        3,
        1,
        0,
        1,
        1,
        3,
        0,
        1,
        1,
        1,
        2,
        1,
        1,
        0,
        0,
        2,
        1,
        0,
        1,
        0,
        2,
        1,
        0,
        0,
        1,
        2,
        0,
        1,
        1,
        0,
        2,
        0,
        1,
        0,
        1,
        2,
        0,
        0,
        1,
        1,
    ],
];
var gradients4D = [
    3,
    1,
    1,
    1,
    1,
    3,
    1,
    1,
    1,
    1,
    3,
    1,
    1,
    1,
    1,
    3,
    -3,
    1,
    1,
    1,
    -1,
    3,
    1,
    1,
    -1,
    1,
    3,
    1,
    -1,
    1,
    1,
    3,
    3,
    -1,
    1,
    1,
    1,
    -3,
    1,
    1,
    1,
    -1,
    3,
    1,
    1,
    -1,
    1,
    3,
    -3,
    -1,
    1,
    1,
    -1,
    -3,
    1,
    1,
    -1,
    -1,
    3,
    1,
    -1,
    -1,
    1,
    3,
    3,
    1,
    -1,
    1,
    1,
    3,
    -1,
    1,
    1,
    1,
    -3,
    1,
    1,
    1,
    -1,
    3,
    -3,
    1,
    -1,
    1,
    -1,
    3,
    -1,
    1,
    -1,
    1,
    -3,
    1,
    -1,
    1,
    -1,
    3,
    3,
    -1,
    -1,
    1,
    1,
    -3,
    -1,
    1,
    1,
    -1,
    -3,
    1,
    1,
    -1,
    -1,
    3,
    -3,
    -1,
    -1,
    1,
    -1,
    -3,
    -1,
    1,
    -1,
    -1,
    -3,
    1,
    -1,
    -1,
    -1,
    3,
    3,
    1,
    1,
    -1,
    1,
    3,
    1,
    -1,
    1,
    1,
    3,
    -1,
    1,
    1,
    1,
    -3,
    -3,
    1,
    1,
    -1,
    -1,
    3,
    1,
    -1,
    -1,
    1,
    3,
    -1,
    -1,
    1,
    1,
    -3,
    3,
    -1,
    1,
    -1,
    1,
    -3,
    1,
    -1,
    1,
    -1,
    3,
    -1,
    1,
    -1,
    1,
    -3,
    -3,
    -1,
    1,
    -1,
    -1,
    -3,
    1,
    -1,
    -1,
    -1,
    3,
    -1,
    -1,
    -1,
    1,
    -3,
    3,
    1,
    -1,
    -1,
    1,
    3,
    -1,
    -1,
    1,
    1,
    -3,
    -1,
    1,
    1,
    -1,
    -3,
    -3,
    1,
    -1,
    -1,
    -1,
    3,
    -1,
    -1,
    -1,
    1,
    -3,
    -1,
    -1,
    1,
    -1,
    -3,
    3,
    -1,
    -1,
    -1,
    1,
    -3,
    -1,
    -1,
    1,
    -1,
    -3,
    -1,
    1,
    -1,
    -1,
    -3,
    -3,
    -1,
    -1,
    -1,
    -1,
    -3,
    -1,
    -1,
    -1,
    -1,
    -3,
    -1,
    -1,
    -1,
    -1,
    -3,
];
var lookupPairs4D = [
    0,
    3,
    1,
    2,
    2,
    3,
    5,
    2,
    6,
    1,
    7,
    1,
    8,
    3,
    9,
    2,
    10,
    3,
    13,
    2,
    16,
    3,
    18,
    3,
    22,
    1,
    23,
    1,
    24,
    3,
    26,
    3,
    33,
    2,
    37,
    2,
    38,
    1,
    39,
    1,
    41,
    2,
    45,
    2,
    54,
    1,
    55,
    1,
    56,
    0,
    57,
    0,
    58,
    0,
    59,
    0,
    60,
    0,
    61,
    0,
    62,
    0,
    63,
    0,
    256,
    3,
    258,
    3,
    264,
    3,
    266,
    3,
    272,
    3,
    274,
    3,
    280,
    3,
    282,
    3,
    2049,
    2,
    2053,
    2,
    2057,
    2,
    2061,
    2,
    2081,
    2,
    2085,
    2,
    2089,
    2,
    2093,
    2,
    2304,
    9,
    2305,
    9,
    2312,
    9,
    2313,
    9,
    16390,
    1,
    16391,
    1,
    16406,
    1,
    16407,
    1,
    16422,
    1,
    16423,
    1,
    16438,
    1,
    16439,
    1,
    16642,
    8,
    16646,
    8,
    16658,
    8,
    16662,
    8,
    18437,
    6,
    18439,
    6,
    18469,
    6,
    18471,
    6,
    18688,
    9,
    18689,
    9,
    18690,
    8,
    18693,
    6,
    18694,
    8,
    18695,
    6,
    18696,
    9,
    18697,
    9,
    18706,
    8,
    18710,
    8,
    18725,
    6,
    18727,
    6,
    131128,
    0,
    131129,
    0,
    131130,
    0,
    131131,
    0,
    131132,
    0,
    131133,
    0,
    131134,
    0,
    131135,
    0,
    131352,
    7,
    131354,
    7,
    131384,
    7,
    131386,
    7,
    133161,
    5,
    133165,
    5,
    133177,
    5,
    133181,
    5,
    133376,
    9,
    133377,
    9,
    133384,
    9,
    133385,
    9,
    133400,
    7,
    133402,
    7,
    133417,
    5,
    133421,
    5,
    133432,
    7,
    133433,
    5,
    133434,
    7,
    133437,
    5,
    147510,
    4,
    147511,
    4,
    147518,
    4,
    147519,
    4,
    147714,
    8,
    147718,
    8,
    147730,
    8,
    147734,
    8,
    147736,
    7,
    147738,
    7,
    147766,
    4,
    147767,
    4,
    147768,
    7,
    147770,
    7,
    147774,
    4,
    147775,
    4,
    149509,
    6,
    149511,
    6,
    149541,
    6,
    149543,
    6,
    149545,
    5,
    149549,
    5,
    149558,
    4,
    149559,
    4,
    149561,
    5,
    149565,
    5,
    149566,
    4,
    149567,
    4,
    149760,
    9,
    149761,
    9,
    149762,
    8,
    149765,
    6,
    149766,
    8,
    149767,
    6,
    149768,
    9,
    149769,
    9,
    149778,
    8,
    149782,
    8,
    149784,
    7,
    149786,
    7,
    149797,
    6,
    149799,
    6,
    149801,
    5,
    149805,
    5,
    149814,
    4,
    149815,
    4,
    149816,
    7,
    149817,
    5,
    149818,
    7,
    149821,
    5,
    149822,
    4,
    149823,
    4,
    149824,
    37,
    149825,
    37,
    149826,
    36,
    149829,
    34,
    149830,
    36,
    149831,
    34,
    149832,
    37,
    149833,
    37,
    149842,
    36,
    149846,
    36,
    149848,
    35,
    149850,
    35,
    149861,
    34,
    149863,
    34,
    149865,
    33,
    149869,
    33,
    149878,
    32,
    149879,
    32,
    149880,
    35,
    149881,
    33,
    149882,
    35,
    149885,
    33,
    149886,
    32,
    149887,
    32,
    150080,
    49,
    150082,
    48,
    150088,
    49,
    150098,
    48,
    150104,
    47,
    150106,
    47,
    151873,
    46,
    151877,
    45,
    151881,
    46,
    151909,
    45,
    151913,
    44,
    151917,
    44,
    152128,
    49,
    152129,
    46,
    152136,
    49,
    152137,
    46,
    166214,
    43,
    166215,
    42,
    166230,
    43,
    166247,
    42,
    166262,
    41,
    166263,
    41,
    166466,
    48,
    166470,
    43,
    166482,
    48,
    166486,
    43,
    168261,
    45,
    168263,
    42,
    168293,
    45,
    168295,
    42,
    168512,
    31,
    168513,
    28,
    168514,
    31,
    168517,
    28,
    168518,
    25,
    168519,
    25,
    280952,
    40,
    280953,
    39,
    280954,
    40,
    280957,
    39,
    280958,
    38,
    280959,
    38,
    281176,
    47,
    281178,
    47,
    281208,
    40,
    281210,
    40,
    282985,
    44,
    282989,
    44,
    283001,
    39,
    283005,
    39,
    283208,
    30,
    283209,
    27,
    283224,
    30,
    283241,
    27,
    283256,
    22,
    283257,
    22,
    297334,
    41,
    297335,
    41,
    297342,
    38,
    297343,
    38,
    297554,
    29,
    297558,
    24,
    297562,
    29,
    297590,
    24,
    297594,
    21,
    297598,
    21,
    299365,
    26,
    299367,
    23,
    299373,
    26,
    299383,
    23,
    299389,
    20,
    299391,
    20,
    299584,
    31,
    299585,
    28,
    299586,
    31,
    299589,
    28,
    299590,
    25,
    299591,
    25,
    299592,
    30,
    299593,
    27,
    299602,
    29,
    299606,
    24,
    299608,
    30,
    299610,
    29,
    299621,
    26,
    299623,
    23,
    299625,
    27,
    299629,
    26,
    299638,
    24,
    299639,
    23,
    299640,
    22,
    299641,
    22,
    299642,
    21,
    299645,
    20,
    299646,
    21,
    299647,
    20,
    299648,
    61,
    299649,
    60,
    299650,
    61,
    299653,
    60,
    299654,
    59,
    299655,
    59,
    299656,
    58,
    299657,
    57,
    299666,
    55,
    299670,
    54,
    299672,
    58,
    299674,
    55,
    299685,
    52,
    299687,
    51,
    299689,
    57,
    299693,
    52,
    299702,
    54,
    299703,
    51,
    299704,
    56,
    299705,
    56,
    299706,
    53,
    299709,
    50,
    299710,
    53,
    299711,
    50,
    299904,
    61,
    299906,
    61,
    299912,
    58,
    299922,
    55,
    299928,
    58,
    299930,
    55,
    301697,
    60,
    301701,
    60,
    301705,
    57,
    301733,
    52,
    301737,
    57,
    301741,
    52,
    301952,
    79,
    301953,
    79,
    301960,
    76,
    301961,
    76,
    316038,
    59,
    316039,
    59,
    316054,
    54,
    316071,
    51,
    316086,
    54,
    316087,
    51,
    316290,
    78,
    316294,
    78,
    316306,
    73,
    316310,
    73,
    318085,
    77,
    318087,
    77,
    318117,
    70,
    318119,
    70,
    318336,
    79,
    318337,
    79,
    318338,
    78,
    318341,
    77,
    318342,
    78,
    318343,
    77,
    430776,
    56,
    430777,
    56,
    430778,
    53,
    430781,
    50,
    430782,
    53,
    430783,
    50,
    431000,
    75,
    431002,
    72,
    431032,
    75,
    431034,
    72,
    432809,
    74,
    432813,
    69,
    432825,
    74,
    432829,
    69,
    433032,
    76,
    433033,
    76,
    433048,
    75,
    433065,
    74,
    433080,
    75,
    433081,
    74,
    447158,
    71,
    447159,
    68,
    447166,
    71,
    447167,
    68,
    447378,
    73,
    447382,
    73,
    447386,
    72,
    447414,
    71,
    447418,
    72,
    447422,
    71,
    449189,
    70,
    449191,
    70,
    449197,
    69,
    449207,
    68,
    449213,
    69,
    449215,
    68,
    449408,
    67,
    449409,
    67,
    449410,
    66,
    449413,
    64,
    449414,
    66,
    449415,
    64,
    449416,
    67,
    449417,
    67,
    449426,
    66,
    449430,
    66,
    449432,
    65,
    449434,
    65,
    449445,
    64,
    449447,
    64,
    449449,
    63,
    449453,
    63,
    449462,
    62,
    449463,
    62,
    449464,
    65,
    449465,
    63,
    449466,
    65,
    449469,
    63,
    449470,
    62,
    449471,
    62,
    449472,
    19,
    449473,
    19,
    449474,
    18,
    449477,
    16,
    449478,
    18,
    449479,
    16,
    449480,
    19,
    449481,
    19,
    449490,
    18,
    449494,
    18,
    449496,
    17,
    449498,
    17,
    449509,
    16,
    449511,
    16,
    449513,
    15,
    449517,
    15,
    449526,
    14,
    449527,
    14,
    449528,
    17,
    449529,
    15,
    449530,
    17,
    449533,
    15,
    449534,
    14,
    449535,
    14,
    449728,
    19,
    449729,
    19,
    449730,
    18,
    449734,
    18,
    449736,
    19,
    449737,
    19,
    449746,
    18,
    449750,
    18,
    449752,
    17,
    449754,
    17,
    449784,
    17,
    449786,
    17,
    451520,
    19,
    451521,
    19,
    451525,
    16,
    451527,
    16,
    451528,
    19,
    451529,
    19,
    451557,
    16,
    451559,
    16,
    451561,
    15,
    451565,
    15,
    451577,
    15,
    451581,
    15,
    451776,
    19,
    451777,
    19,
    451784,
    19,
    451785,
    19,
    465858,
    18,
    465861,
    16,
    465862,
    18,
    465863,
    16,
    465874,
    18,
    465878,
    18,
    465893,
    16,
    465895,
    16,
    465910,
    14,
    465911,
    14,
    465918,
    14,
    465919,
    14,
    466114,
    18,
    466118,
    18,
    466130,
    18,
    466134,
    18,
    467909,
    16,
    467911,
    16,
    467941,
    16,
    467943,
    16,
    468160,
    13,
    468161,
    13,
    468162,
    13,
    468163,
    13,
    468164,
    13,
    468165,
    13,
    468166,
    13,
    468167,
    13,
    580568,
    17,
    580570,
    17,
    580585,
    15,
    580589,
    15,
    580598,
    14,
    580599,
    14,
    580600,
    17,
    580601,
    15,
    580602,
    17,
    580605,
    15,
    580606,
    14,
    580607,
    14,
    580824,
    17,
    580826,
    17,
    580856,
    17,
    580858,
    17,
    582633,
    15,
    582637,
    15,
    582649,
    15,
    582653,
    15,
    582856,
    12,
    582857,
    12,
    582872,
    12,
    582873,
    12,
    582888,
    12,
    582889,
    12,
    582904,
    12,
    582905,
    12,
    596982,
    14,
    596983,
    14,
    596990,
    14,
    596991,
    14,
    597202,
    11,
    597206,
    11,
    597210,
    11,
    597214,
    11,
    597234,
    11,
    597238,
    11,
    597242,
    11,
    597246,
    11,
    599013,
    10,
    599015,
    10,
    599021,
    10,
    599023,
    10,
    599029,
    10,
    599031,
    10,
    599037,
    10,
    599039,
    10,
    599232,
    13,
    599233,
    13,
    599234,
    13,
    599235,
    13,
    599236,
    13,
    599237,
    13,
    599238,
    13,
    599239,
    13,
    599240,
    12,
    599241,
    12,
    599250,
    11,
    599254,
    11,
    599256,
    12,
    599257,
    12,
    599258,
    11,
    599262,
    11,
    599269,
    10,
    599271,
    10,
    599272,
    12,
    599273,
    12,
    599277,
    10,
    599279,
    10,
    599282,
    11,
    599285,
    10,
    599286,
    11,
    599287,
    10,
    599288,
    12,
    599289,
    12,
    599290,
    11,
    599293,
    10,
    599294,
    11,
    599295,
    10,
];
var p4D = [
    0,
    0,
    1,
    -1,
    0,
    0,
    0,
    1,
    0,
    -1,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    0,
    -1,
    1,
    0,
    0,
    0,
    0,
    1,
    -1,
    0,
    0,
    0,
    1,
    0,
    -1,
    0,
    0,
    -1,
    0,
    1,
    0,
    0,
    0,
    -1,
    1,
    0,
    0,
    0,
    0,
    1,
    -1,
    0,
    0,
    -1,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    1,
    0,
    0,
    0,
    -1,
    1,
    0,
    2,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    0,
    2,
    1,
    0,
    1,
    0,
    1,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    0,
    2,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    -1,
    0,
    2,
    1,
    0,
    0,
    1,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    0,
    2,
    0,
    1,
    0,
    1,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    0,
    2,
    0,
    0,
    1,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    1,
    1,
    4,
    2,
    1,
    1,
    0,
    4,
    1,
    2,
    1,
    0,
    4,
    1,
    1,
    2,
    0,
    1,
    4,
    2,
    1,
    0,
    1,
    4,
    1,
    2,
    0,
    1,
    4,
    1,
    1,
    0,
    2,
    1,
    4,
    2,
    0,
    1,
    1,
    4,
    1,
    0,
    2,
    1,
    4,
    1,
    0,
    1,
    2,
    1,
    4,
    0,
    2,
    1,
    1,
    4,
    0,
    1,
    2,
    1,
    4,
    0,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    0,
    0,
    3,
    2,
    1,
    0,
    0,
    3,
    1,
    2,
    0,
    0,
    1,
    2,
    1,
    0,
    1,
    0,
    3,
    2,
    0,
    1,
    0,
    3,
    1,
    0,
    2,
    0,
    1,
    2,
    0,
    1,
    1,
    0,
    3,
    0,
    2,
    1,
    0,
    3,
    0,
    1,
    2,
    0,
    1,
    2,
    1,
    0,
    0,
    1,
    3,
    2,
    0,
    0,
    1,
    3,
    1,
    0,
    0,
    2,
    1,
    2,
    0,
    1,
    0,
    1,
    3,
    0,
    2,
    0,
    1,
    3,
    0,
    1,
    0,
    2,
    1,
    2,
    0,
    0,
    1,
    1,
    3,
    0,
    0,
    2,
    1,
    3,
    0,
    0,
    1,
    2,
    2,
    3,
    1,
    1,
    1,
    0,
    2,
    1,
    1,
    1,
    -1,
    2,
    2,
    0,
    0,
    0,
    2,
    3,
    1,
    1,
    0,
    1,
    2,
    1,
    1,
    -1,
    1,
    2,
    2,
    0,
    0,
    0,
    2,
    3,
    1,
    0,
    1,
    1,
    2,
    1,
    -1,
    1,
    1,
    2,
    2,
    0,
    0,
    0,
    2,
    3,
    1,
    1,
    1,
    0,
    2,
    1,
    1,
    1,
    -1,
    2,
    0,
    2,
    0,
    0,
    2,
    3,
    1,
    1,
    0,
    1,
    2,
    1,
    1,
    -1,
    1,
    2,
    0,
    2,
    0,
    0,
    2,
    3,
    0,
    1,
    1,
    1,
    2,
    -1,
    1,
    1,
    1,
    2,
    0,
    2,
    0,
    0,
    2,
    3,
    1,
    1,
    1,
    0,
    2,
    1,
    1,
    1,
    -1,
    2,
    0,
    0,
    2,
    0,
    2,
    3,
    1,
    0,
    1,
    1,
    2,
    1,
    -1,
    1,
    1,
    2,
    0,
    0,
    2,
    0,
    2,
    3,
    0,
    1,
    1,
    1,
    2,
    -1,
    1,
    1,
    1,
    2,
    0,
    0,
    2,
    0,
    2,
    3,
    1,
    1,
    0,
    1,
    2,
    1,
    1,
    -1,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    3,
    1,
    0,
    1,
    1,
    2,
    1,
    -1,
    1,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    3,
    0,
    1,
    1,
    1,
    2,
    -1,
    1,
    1,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    1,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    -1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    -1,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    2,
    2,
    0,
    0,
    0,
    2,
    1,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    2,
    2,
    0,
    0,
    0,
    2,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    2,
    2,
    0,
    0,
    0,
    2,
    1,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    2,
    0,
    2,
    0,
    0,
    2,
    1,
    -1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    -1,
    2,
    0,
    2,
    0,
    0,
    2,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    2,
    0,
    2,
    0,
    0,
    2,
    1,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    2,
    0,
    0,
    2,
    0,
    2,
    1,
    -1,
    1,
    1,
    0,
    1,
    0,
    1,
    1,
    -1,
    2,
    0,
    0,
    2,
    0,
    2,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    1,
    2,
    0,
    0,
    2,
    0,
    2,
    1,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    1,
    -1,
    1,
    0,
    1,
    1,
    0,
    1,
    -1,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    1,
    -1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    1,
    2,
    0,
    0,
    0,
    2,
    3,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    0,
    2,
    1,
    1,
    1,
    -1,
    3,
    1,
    0,
    1,
    0,
    0,
    2,
    0,
    2,
    0,
    0,
    2,
    1,
    1,
    1,
    -1,
    3,
    1,
    0,
    0,
    1,
    0,
    2,
    0,
    0,
    2,
    0,
    2,
    1,
    1,
    1,
    -1,
    3,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    0,
    2,
    1,
    1,
    -1,
    1,
    3,
    1,
    0,
    1,
    0,
    0,
    2,
    0,
    2,
    0,
    0,
    2,
    1,
    1,
    -1,
    1,
    3,
    1,
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    1,
    1,
    -1,
    1,
    3,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    0,
    2,
    1,
    -1,
    1,
    1,
    3,
    1,
    0,
    0,
    1,
    0,
    2,
    0,
    0,
    2,
    0,
    2,
    1,
    -1,
    1,
    1,
    3,
    1,
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    1,
    -1,
    1,
    1,
    3,
    1,
    0,
    1,
    0,
    0,
    2,
    0,
    2,
    0,
    0,
    2,
    -1,
    1,
    1,
    1,
    3,
    1,
    0,
    0,
    1,
    0,
    2,
    0,
    0,
    2,
    0,
    2,
    -1,
    1,
    1,
    1,
    3,
    1,
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    2,
    2,
    -1,
    1,
    1,
    1,
    3,
    3,
    2,
    1,
    0,
    0,
    3,
    1,
    2,
    0,
    0,
    4,
    1,
    1,
    1,
    1,
    3,
    3,
    2,
    0,
    1,
    0,
    3,
    1,
    0,
    2,
    0,
    4,
    1,
    1,
    1,
    1,
    3,
    3,
    0,
    2,
    1,
    0,
    3,
    0,
    1,
    2,
    0,
    4,
    1,
    1,
    1,
    1,
    3,
    3,
    2,
    0,
    0,
    1,
    3,
    1,
    0,
    0,
    2,
    4,
    1,
    1,
    1,
    1,
    3,
    3,
    0,
    2,
    0,
    1,
    3,
    0,
    1,
    0,
    2,
    4,
    1,
    1,
    1,
    1,
    3,
    3,
    0,
    0,
    2,
    1,
    3,
    0,
    0,
    1,
    2,
    4,
    1,
    1,
    1,
    1,
    3,
    3,
    2,
    1,
    0,
    0,
    3,
    1,
    2,
    0,
    0,
    2,
    1,
    1,
    1,
    -1,
    3,
    3,
    2,
    0,
    1,
    0,
    3,
    1,
    0,
    2,
    0,
    2,
    1,
    1,
    1,
    -1,
    3,
    3,
    0,
    2,
    1,
    0,
    3,
    0,
    1,
    2,
    0,
    2,
    1,
    1,
    1,
    -1,
    3,
    3,
    2,
    1,
    0,
    0,
    3,
    1,
    2,
    0,
    0,
    2,
    1,
    1,
    -1,
    1,
    3,
    3,
    2,
    0,
    0,
    1,
    3,
    1,
    0,
    0,
    2,
    2,
    1,
    1,
    -1,
    1,
    3,
    3,
    0,
    2,
    0,
    1,
    3,
    0,
    1,
    0,
    2,
    2,
    1,
    1,
    -1,
    1,
    3,
    3,
    2,
    0,
    1,
    0,
    3,
    1,
    0,
    2,
    0,
    2,
    1,
    -1,
    1,
    1,
    3,
    3,
    2,
    0,
    0,
    1,
    3,
    1,
    0,
    0,
    2,
    2,
    1,
    -1,
    1,
    1,
    3,
    3,
    0,
    0,
    2,
    1,
    3,
    0,
    0,
    1,
    2,
    2,
    1,
    -1,
    1,
    1,
    3,
    3,
    0,
    2,
    1,
    0,
    3,
    0,
    1,
    2,
    0,
    2,
    -1,
    1,
    1,
    1,
    3,
    3,
    0,
    2,
    0,
    1,
    3,
    0,
    1,
    0,
    2,
    2,
    -1,
    1,
    1,
    1,
    3,
    3,
    0,
    0,
    2,
    1,
    3,
    0,
    0,
    1,
    2,
    2,
    -1,
    1,
    1,
    1,
];


/***/ }),

/***/ "../../node_modules/open-simplex-noise/lib/mod.js":
/*!*****************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/open-simplex-noise/lib/mod.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is free and unencumbered software released into the public domain
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNoise4D = exports.makeNoise3D = exports.makeNoise2D = void 0;
var _2d_1 = __webpack_require__(/*! ./2d */ "../../node_modules/open-simplex-noise/lib/2d.js");
Object.defineProperty(exports, "makeNoise2D", { enumerable: true, get: function () { return _2d_1.makeNoise2D; } });
var _3d_1 = __webpack_require__(/*! ./3d */ "../../node_modules/open-simplex-noise/lib/3d.js");
Object.defineProperty(exports, "makeNoise3D", { enumerable: true, get: function () { return _3d_1.makeNoise3D; } });
var _4d_1 = __webpack_require__(/*! ./4d */ "../../node_modules/open-simplex-noise/lib/4d.js");
Object.defineProperty(exports, "makeNoise4D", { enumerable: true, get: function () { return _4d_1.makeNoise4D; } });


/***/ }),

/***/ "../../node_modules/open-simplex-noise/lib/shuffle_seed.js":
/*!**************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/open-simplex-noise/lib/shuffle_seed.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This is free and unencumbered software released into the public domain
Object.defineProperty(exports, "__esModule", { value: true });
function shuffleSeed(seed) {
    var newSeed = new Uint32Array(1);
    newSeed[0] = seed[0] * 1664525 + 1013904223;
    return newSeed;
}
exports.default = shuffleSeed;


/***/ }),

/***/ "../../node_modules/tslib/tslib.es6.js":
/*!******************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../../node_modules/uuid/index.js":
/*!*************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/uuid/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "../../node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "../../node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/bytesToUuid.js":
/*!***********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "../../node_modules/uuid/lib/rng-browser.js":
/*!***********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "../../node_modules/uuid/v1.js":
/*!**********************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/uuid/v1.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "../../node_modules/uuid/v4.js":
/*!**********************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/uuid/v4.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "../../node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "../../node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "../../node_modules/vkey/index.js":
/*!*************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/vkey/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ua = typeof window !== 'undefined' ? window.navigator.userAgent : ''
  , isOSX = /OS X/.test(ua)
  , isOpera = /Opera/.test(ua)
  , maybeFirefox = !/like Gecko/.test(ua) && !isOpera

var i, output = module.exports = {
  0:  isOSX ? '<menu>' : '<UNK>'
, 1:  '<mouse 1>'
, 2:  '<mouse 2>'
, 3:  '<break>'
, 4:  '<mouse 3>'
, 5:  '<mouse 4>'
, 6:  '<mouse 5>'
, 8:  '<backspace>'
, 9:  '<tab>'
, 12: '<clear>'
, 13: '<enter>'
, 16: '<shift>'
, 17: '<control>'
, 18: '<alt>'
, 19: '<pause>'
, 20: '<caps-lock>'
, 21: '<ime-hangul>'
, 23: '<ime-junja>'
, 24: '<ime-final>'
, 25: '<ime-kanji>'
, 27: '<escape>'
, 28: '<ime-convert>'
, 29: '<ime-nonconvert>'
, 30: '<ime-accept>'
, 31: '<ime-mode-change>'
, 32: '<space>'
, 33: '<page-up>'
, 34: '<page-down>'
, 35: '<end>'
, 36: '<home>'
, 37: '<left>'
, 38: '<up>'
, 39: '<right>'
, 40: '<down>'
, 41: '<select>'
, 42: '<print>'
, 43: '<execute>'
, 44: '<snapshot>'
, 45: '<insert>'
, 46: '<delete>'
, 47: '<help>'
, 91: '<meta>'  // meta-left -- no one handles left and right properly, so we coerce into one.
, 92: '<meta>'  // meta-right
, 93: isOSX ? '<meta>' : '<menu>'      // chrome,opera,safari all report this for meta-right (osx mbp).
, 95: '<sleep>'
, 106: '<num-*>'
, 107: '<num-+>'
, 108: '<num-enter>'
, 109: '<num-->'
, 110: '<num-.>'
, 111: '<num-/>'
, 144: '<num-lock>'
, 145: '<scroll-lock>'
, 160: '<shift-left>'
, 161: '<shift-right>'
, 162: '<control-left>'
, 163: '<control-right>'
, 164: '<alt-left>'
, 165: '<alt-right>'
, 166: '<browser-back>'
, 167: '<browser-forward>'
, 168: '<browser-refresh>'
, 169: '<browser-stop>'
, 170: '<browser-search>'
, 171: '<browser-favorites>'
, 172: '<browser-home>'

  // ff/osx reports '<volume-mute>' for '-'
, 173: isOSX && maybeFirefox ? '-' : '<volume-mute>'
, 174: '<volume-down>'
, 175: '<volume-up>'
, 176: '<next-track>'
, 177: '<prev-track>'
, 178: '<stop>'
, 179: '<play-pause>'
, 180: '<launch-mail>'
, 181: '<launch-media-select>'
, 182: '<launch-app 1>'
, 183: '<launch-app 2>'
, 186: ';'
, 187: '='
, 188: ','
, 189: '-'
, 190: '.'
, 191: '/'
, 192: '`'
, 219: '['
, 220: '\\'
, 221: ']'
, 222: "'"
, 223: '<meta>'
, 224: '<meta>'       // firefox reports meta here.
, 226: '<alt-gr>'
, 229: '<ime-process>'
, 231: isOpera ? '`' : '<unicode>'
, 246: '<attention>'
, 247: '<crsel>'
, 248: '<exsel>'
, 249: '<erase-eof>'
, 250: '<play>'
, 251: '<zoom>'
, 252: '<no-name>'
, 253: '<pa-1>'
, 254: '<clear>'
}

for(i = 58; i < 65; ++i) {
  output[i] = String.fromCharCode(i)
}

// 0-9
for(i = 48; i < 58; ++i) {
  output[i] = (i - 48)+''
}

// A-Z
for(i = 65; i < 91; ++i) {
  output[i] = String.fromCharCode(i)
}

// num0-9
for(i = 96; i < 106; ++i) {
  output[i] = '<num-'+(i - 96)+'>'
}

// F1-F24
for(i = 112; i < 136; ++i) {
  output[i] = 'F'+(i-111)
}


/***/ }),

/***/ "../../node_modules/voxel-aabb-sweep/index.js":
/*!*************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/voxel-aabb-sweep/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



// reused array instances

var tr_arr = []
var ldi_arr = []
var tri_arr = []
var step_arr = []
var tDelta_arr = []
var tNext_arr = []
var vec_arr = []
var normed_arr = []
var base_arr = []
var max_arr = []
var left_arr = []
var result_arr = []



// core implementation:

function sweep_impl(getVoxel, callback, vec, base, max, epsilon) {

    // consider algo as a raycast along the AABB's leading corner
    // as raycast enters each new voxel, iterate in 2D over the AABB's 
    // leading face in that axis looking for collisions
    // 
    // original raycast implementation: https://github.com/andyhall/fast-voxel-raycast
    // original raycast paper: http://www.cse.chalmers.se/edu/year/2010/course/TDA361/grid.pdf

    var tr = tr_arr
    var ldi = ldi_arr
    var tri = tri_arr
    var step = step_arr
    var tDelta = tDelta_arr
    var tNext = tNext_arr
    var normed = normed_arr

    var floor = Math.floor
    var cumulative_t = 0.0
    var t = 0.0
    var max_t = 0.0
    var axis = 0
    var i = 0


    // init for the current sweep vector and take first step
    initSweep()
    if (max_t === 0) return 0

    axis = stepForward()

    // loop along raycast vector
    while (t <= max_t) {

        // sweeps over leading face of AABB
        if (checkCollision(axis)) {
            // calls the callback and decides whether to continue
            var done = handleCollision()
            if (done) return cumulative_t
        }

        axis = stepForward()
    }

    // reached the end of the vector unobstructed, finish and exit
    cumulative_t += max_t
    for (i = 0; i < 3; i++) {
        base[i] += vec[i]
        max[i] += vec[i]
    }
    return cumulative_t





    // low-level implementations of each step:
    function initSweep() {

        // parametrization t along raycast
        t = 0.0
        max_t = Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1] + vec[2] * vec[2])
        if (max_t === 0) return
        for (var i = 0; i < 3; i++) {
            var dir = (vec[i] >= 0)
            step[i] = dir ? 1 : -1
            // trailing / trailing edge coords
            var lead = dir ? max[i] : base[i]
            tr[i] = dir ? base[i] : max[i]
            // int values of lead/trail edges
            ldi[i] = leadEdgeToInt(lead, step[i])
            tri[i] = trailEdgeToInt(tr[i], step[i])
            // normed vector
            normed[i] = vec[i] / max_t
            // distance along t required to move one voxel in each axis
            tDelta[i] = Math.abs(1 / normed[i])
            // location of nearest voxel boundary, in units of t 
            var dist = dir ? (ldi[i] + 1 - lead) : (lead - ldi[i])
            tNext[i] = (tDelta[i] < Infinity) ? tDelta[i] * dist : Infinity
        }

    }


    // check for collisions - iterate over the leading face on the advancing axis

    function checkCollision(i_axis) {
        var stepx = step[0]
        var x0 = (i_axis === 0) ? ldi[0] : tri[0]
        var x1 = ldi[0] + stepx

        var stepy = step[1]
        var y0 = (i_axis === 1) ? ldi[1] : tri[1]
        var y1 = ldi[1] + stepy

        var stepz = step[2]
        var z0 = (i_axis === 2) ? ldi[2] : tri[2]
        var z1 = ldi[2] + stepz

        // var j_axis = (i_axis + 1) % 3
        // var k_axis = (i_axis + 2) % 3
        // var s = ['x', 'y', 'z'][i_axis]
        // var js = ['x', 'y', 'z'][j_axis]
        // var ks = ['x', 'y', 'z'][k_axis]
        // var i0 = [x0, y0, z0][i_axis]
        // var j0 = [x0, y0, z0][j_axis]
        // var k0 = [x0, y0, z0][k_axis]
        // var i1 = [x1 - stepx, y1 - stepy, z1 - stepz][i_axis]
        // var j1 = [x1 - stepx, y1 - stepy, z1 - stepz][j_axis]
        // var k1 = [x1 - stepx, y1 - stepy, z1 - stepz][k_axis]
        // console.log('=== step', s, 'to', i0, '   sweep', js, j0 + ',' + j1, '   ', ks, k0 + ',' + k1)

        for (var x = x0; x != x1; x += stepx) {
            for (var y = y0; y != y1; y += stepy) {
                for (var z = z0; z != z1; z += stepz) {
                    if (getVoxel(x, y, z)) return true
                }
            }
        }
        return false
    }


    // on collision - call the callback and return or set up for the next sweep

    function handleCollision() {

        // set up for callback
        cumulative_t += t
        var dir = step[axis]

        // vector moved so far, and left to move
        var done = t / max_t
        var left = left_arr
        for (i = 0; i < 3; i++) {
            var dv = vec[i] * done
            base[i] += dv
            max[i] += dv
            left[i] = vec[i] - dv
        }

        // set leading edge of stepped axis exactly to voxel boundary
        // else we'll sometimes rounding error beyond it
        if (dir > 0) {
            max[axis] = Math.round(max[axis])
        } else {
            base[axis] = Math.round(base[axis])
        }
        
        // call back to let client update the "left to go" vector
        var res = callback(cumulative_t, axis, dir, left)

        // bail out out on truthy response
        if (res) return true

        // init for new sweep along vec
        for (i = 0; i < 3; i++) vec[i] = left[i]
        initSweep()
        if (max_t === 0) return true // no vector left

        return false
    }


    // advance to next voxel boundary, and return which axis was stepped

    function stepForward() {
        var axis = (tNext[0] < tNext[1]) ?
            ((tNext[0] < tNext[2]) ? 0 : 2) :
            ((tNext[1] < tNext[2]) ? 1 : 2)
        var dt = tNext[axis] - t
        t = tNext[axis]
        ldi[axis] += step[axis]
        tNext[axis] += tDelta[axis]
        for (i = 0; i < 3; i++) {
            tr[i] += dt * normed[i]
            tri[i] = trailEdgeToInt(tr[i], step[i])
        }

        return axis
    }



    function leadEdgeToInt(coord, step) {
        return floor(coord - step * epsilon)
    }
    function trailEdgeToInt(coord, step) {
        return floor(coord + step * epsilon)
    }

}





// conform inputs

function sweep(getVoxel, box, dir, callback, noTranslate, epsilon) {

    var vec = vec_arr
    var base = base_arr
    var max = max_arr
    var result = result_arr

    // init parameter float arrays
    for (var i = 0; i < 3; i++) {
        vec[i] = +dir[i]
        max[i] = +box.max[i]
        base[i] = +box.base[i]
    }

    if (!epsilon) epsilon = 1e-10

    // run sweep implementation
    var dist = sweep_impl(getVoxel, callback, vec, base, max, epsilon)

    // translate box by distance needed to updated base value
    if (!noTranslate) {
        for (i = 0; i < 3; i++) {
            result[i] = (dir[i] > 0) ? max[i] - box.max[i] : base[i] - box.base[i]
        }
        box.translate(result)
    }

    // return value is total distance moved (not necessarily magnitude of [end]-[start])
    return dist
}

module.exports = sweep



/***/ }),

/***/ "../../node_modules/voxel-crunch/index.js":
/*!*********************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/voxel-crunch/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bits = __webpack_require__(/*! bit-twiddle */ "../../node_modules/voxel-crunch/node_modules/bit-twiddle/twiddle.js")

function size(chunk) {
  var count = 0
  var chunk_len = chunk.length
  var i = 0, v, l
  while(i<chunk.length) {
    v = chunk[i]
    l = 0
    while(i < chunk_len && chunk[i] === v) {
      ++i
      ++l
    }
    count += (bits.log2(l) / 7)|0
    count += (bits.log2(v>>>0) / 7)|0
    count += 2
  }
  return count
}
exports.size = size

function encode(chunk, runs) {
  if(!runs) {
    runs = new Uint8Array(size(chunk))
  }
  var rptr = 0, nruns = runs.length
  var i = 0, v, l
  while(i<chunk.length) {
    v = chunk[i]
    l = 0
    while(i < chunk.length && chunk[i] === v) {
      ++i
      ++l
    }
    while(rptr < nruns && l >= 128) {
      runs[rptr++] = 128 + (l&0x7f)
      l >>>= 7
    }
    if(rptr >= nruns) {
      throw new Error("RLE buffer overflow")
    }
    runs[rptr++] = l
    v >>>= 0
    while(rptr < nruns && v >= 128) {
      runs[rptr++] = 128 + (v&0x7f)
      v >>>= 7
    }
    if(rptr >= nruns) {
      throw new Error("RLE buffer overflow")
    }
    runs[rptr++] = v
  }
  return runs
}
exports.encode = encode

function decode(runs, chunk) {
  var buf_len = chunk.length
  var nruns = runs.length
  var cptr = 0
  var ptr = 0
  var l, s, v, i
  while(ptr < nruns) {
    l = 0
    s = 0
    while(ptr < nruns && runs[ptr] >= 128) {
      l += (runs[ptr++]&0x7f) << s
      s += 7
    }
    l += runs[ptr++] << s
    if(ptr >= nruns) {
      throw new Error("RLE buffer underrun")
    }
    if(cptr + l > buf_len) {
      throw new Error("Chunk buffer overflow")
    }
    v = 0
    s = 0
    while(ptr < nruns && runs[ptr] >= 128) {
      v += (runs[ptr++]&0x7f) << s
      s += 7
    }
    if(ptr >= nruns) {
      throw new Error("RLE buffer underrun")
    }
    v += runs[ptr++] << s
    for(i=0; i<l; ++i) {
      chunk[cptr++] = v
    }
  }
  return chunk
}
exports.decode = decode


/***/ }),

/***/ "../../node_modules/voxel-crunch/node_modules/bit-twiddle/twiddle.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/voxel-crunch/node_modules/bit-twiddle/twiddle.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

 "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}



/***/ }),

/***/ "../../node_modules/voxel-physics-engine/src/index.js":
/*!*********************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/voxel-physics-engine/src/index.js ***!
  \*********************************************************************************************/
/*! exports provided: Physics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Physics", function() { return Physics; });

var aabb = __webpack_require__(/*! aabb-3d */ "../../node_modules/aabb-3d/index.js")
var vec3 = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js")
var sweep = __webpack_require__(/*! voxel-aabb-sweep */ "../../node_modules/voxel-aabb-sweep/index.js")
var RigidBody = __webpack_require__(/*! ./rigidBody */ "../../node_modules/voxel-physics-engine/src/rigidBody.js")


var DEBUG = 0




var defaults = {
    gravity: [0, -10, 0],
    minBounceImpulse: .5, // lowest collision impulse that bounces
    airDrag: 0.1,
    fluidDrag: 0.4,
    fluidDensity: 2.0,
}




/* 
 *    CONSTRUCTOR - represents a world of rigid bodies.
 * 
 *  Takes testSolid(x,y,z) function to query block solidity
 *  Takes testFluid(x,y,z) function to query if a block is a fluid
*/
function Physics(opts, testSolid, testFluid) {
    opts = Object.assign({}, defaults, opts)

    this.gravity = opts.gravity
    this.airDrag = opts.airDrag
    this.fluidDensity = opts.fluidDensity
    this.fluidDrag = opts.fluidDrag
    this.minBounceImpulse = opts.minBounceImpulse
    this.bodies = []

    // collision function - TODO: abstract this into a setter?
    this.testSolid = testSolid
    this.testFluid = testFluid
}


/*
 *    ADDING AND REMOVING RIGID BODIES
*/

Physics.prototype.addBody = function (_aabb, mass, friction,
    restitution, gravMult, onCollide) {
    _aabb = _aabb || new aabb([0, 0, 0], [1, 1, 1])
    if (typeof mass == 'undefined') mass = 1
    if (typeof friction == 'undefined') friction = 1
    if (typeof restitution == 'undefined') restitution = 0
    if (typeof gravMult == 'undefined') gravMult = 1
    var b = new RigidBody(_aabb, mass, friction, restitution, gravMult, onCollide)
    this.bodies.push(b)
    return b
}

Physics.prototype.removeBody = function (b) {
    var i = this.bodies.indexOf(b)
    if (i < 0) return undefined
    this.bodies.splice(i, 1)
    b.aabb = b.onCollide = null
}




/*
 *    PHYSICS AND COLLISIONS
*/

var a = vec3.create()
var dv = vec3.create()
var dx = vec3.create()
var impacts = vec3.create()
var oldResting = vec3.create()


/*
 *    TICK HANDLER
*/
Physics.prototype.tick = function (dt) {
    // convert dt to seconds
    dt = dt / 1000
    var noGravity = equals(0, vec3.squaredLength(this.gravity))

    this.bodies.forEach(b => iterateBody(this, b, dt, noGravity))
}



/*
 *    PER-BODY MAIN PHYSICS ROUTINE
*/

function iterateBody(self, b, dt, noGravity) {
    vec3.copy(oldResting, b.resting)

    // treat bodies with <= mass as static
    if (b.mass <= 0) {
        vec3.set(b.velocity, 0, 0, 0)
        vec3.set(b._forces, 0, 0, 0)
        vec3.set(b._impulses, 0, 0, 0)
        return
    }

    // skip bodies if static or no velocity/forces/impulses
    var localNoGrav = noGravity || (b.gravityMultiplier === 0)
    if (bodyAsleep(self, b, dt, localNoGrav)) return
    b._sleepFrameCount--

    // check if under water, if so apply buoyancy and drag forces
    applyFluidForces(self, b)

    // debug hooks
    sanityCheck(b._forces)
    sanityCheck(b._impulses)
    sanityCheck(b.velocity)
    sanityCheck(b.resting)

    // semi-implicit Euler integration

    // a = f/m + gravity*gravityMultiplier
    vec3.scale(a, b._forces, 1 / b.mass)
    vec3.scaleAndAdd(a, a, self.gravity, b.gravityMultiplier)

    // dv = i/m + a*dt
    // v1 = v0 + dv
    vec3.scale(dv, b._impulses, 1 / b.mass)
    vec3.scaleAndAdd(dv, dv, a, dt)
    vec3.add(b.velocity, b.velocity, dv)

    // apply friction based on change in velocity this frame
    if (b.friction) {
        applyFrictionByAxis(0, b, dv)
        applyFrictionByAxis(1, b, dv)
        applyFrictionByAxis(2, b, dv)
    }

    // linear air or fluid friction - effectively v *= drag
    // body settings override global settings
    var drag = (b.airDrag >= 0) ? b.airDrag : self.airDrag
    if (b.inFluid) {
        drag = (b.fluidDrag >= 0) ? b.fluidDrag : self.fluidDrag
        drag *= 1 - (1 - b.ratioInFluid) ** 2
    }
    var mult = Math.max(1 - drag * dt / b.mass, 0)
    vec3.scale(b.velocity, b.velocity, mult)

    // x1-x0 = v1*dt
    vec3.scale(dx, b.velocity, dt)

    // clear forces and impulses for next timestep
    vec3.set(b._forces, 0, 0, 0)
    vec3.set(b._impulses, 0, 0, 0)

    // cache old position for use in autostepping
    if (b.autoStep) {
        cloneAABB(tmpBox, b.aabb)
    }

    // sweeps aabb along dx and accounts for collisions
    processCollisions(self, b.aabb, dx, b.resting)

    // if autostep, and on ground, run collisions again with stepped up aabb
    if (b.autoStep) {
        tryAutoStepping(self, b, tmpBox, dx)
    }

    // Collision impacts. b.resting shows which axes had collisions:
    for (var i = 0; i < 3; ++i) {
        impacts[i] = 0
        if (b.resting[i]) {
            // count impact only if wasn't collided last frame
            if (!oldResting[i]) impacts[i] = -b.velocity[i]
            b.velocity[i] = 0
        }
    }
    var mag = vec3.length(impacts)
    if (mag > .001) { // epsilon
        // send collision event - allows client to optionally change
        // body's restitution depending on what terrain it hit
        // event argument is impulse J = m * dv
        vec3.scale(impacts, impacts, b.mass)
        if (b.onCollide) b.onCollide(impacts)

        // bounce depending on restitution and minBounceImpulse
        if (b.restitution > 0 && mag > self.minBounceImpulse) {
            vec3.scale(impacts, impacts, b.restitution)
            b.applyImpulse(impacts)
        }
    }


    // sleep check
    var vsq = vec3.squaredLength(b.velocity)
    if (vsq > 1e-5) b._markActive()
}








/*
 *    FLUIDS
*/

function applyFluidForces(self, body) {
    // First pass at handling fluids. Assumes fluids are settled
    //   thus, only check at corner of body, and only from bottom up
    var box = body.aabb
    var cx = Math.floor(box.base[0])
    var cz = Math.floor(box.base[2])
    var y0 = Math.floor(box.base[1])
    var y1 = Math.floor(box.max[1])

    if (!self.testFluid(cx, y0, cz)) {
        body.inFluid = false
        body.ratioInFluid = 0
        return
    }

    // body is in a fluid - find out how much of body is submerged
    var submerged = 1
    var cy = y0 + 1
    while (cy <= y1 && self.testFluid(cx, cy, cz)) {
        submerged++
        cy++
    }
    var fluidLevel = y0 + submerged
    var heightInFluid = fluidLevel - box.base[1]
    var ratioInFluid = heightInFluid / box.vec[1]
    if (ratioInFluid > 1) ratioInFluid = 1
    var vol = box.vec[0] * box.vec[1] * box.vec[2]
    var displaced = vol * ratioInFluid
    // bouyant force = -gravity * fluidDensity * volumeDisplaced
    var f = _fluidVec
    vec3.scale(f, self.gravity, -self.fluidDensity * displaced)
    body.applyForce(f)

    body.inFluid = true
    body.ratioInFluid = ratioInFluid
}

var _fluidVec = vec3.create()





/*
 *    FRICTION
*/


function applyFrictionByAxis(axis, body, dvel) {
    // friction applies only if moving into a touched surface
    var restDir = body.resting[axis]
    var vNormal = dvel[axis]
    if (restDir === 0) return
    if (restDir * vNormal <= 0) return

    // current vel lateral to friction axis
    vec3.copy(lateralVel, body.velocity)
    lateralVel[axis] = 0
    var vCurr = vec3.length(lateralVel)
    if (equals(vCurr, 0)) return

    // treat current change in velocity as the result of a pseudoforce
    //        Fpseudo = m*dv/dt
    // Base friction force on normal component of the pseudoforce
    //        Ff = u * Fnormal
    //        Ff = u * m * dvnormal / dt
    // change in velocity due to friction force
    //        dvF = dt * Ff / m
    //            = dt * (u * m * dvnormal / dt) / m
    //            = u * dvnormal
    var dvMax = Math.abs(body.friction * vNormal)

    // decrease lateral vel by dvMax (or clamp to zero)
    var scaler = (vCurr > dvMax) ? (vCurr - dvMax) / vCurr : 0
    body.velocity[(axis + 1) % 3] *= scaler
    body.velocity[(axis + 2) % 3] *= scaler
}
var lateralVel = vec3.create()






/*
 *    COLLISION HANDLER
*/

// sweep aabb along velocity vector and set resting vector
function processCollisions(self, box, velocity, resting) {
    vec3.set(resting, 0, 0, 0)
    return sweep(self.testSolid, box, velocity, function (dist, axis, dir, vec) {
        resting[axis] = dir
        vec[axis] = 0
    })
}





/*
 *    AUTO-STEPPING
*/

var tmpBox = new aabb([], [])
var tmpResting = vec3.create()
var targetPos = vec3.create()
var upvec = vec3.create()
var leftover = vec3.create()

function tryAutoStepping(self, b, oldBox, dx) {
    if (b.resting[1] >= 0 && !b.inFluid) return

    // // direction movement was blocked before trying a step
    var xBlocked = (b.resting[0] !== 0)
    var zBlocked = (b.resting[2] !== 0)
    if (!(xBlocked || zBlocked)) return

    // continue autostepping only if headed sufficiently into obstruction
    var ratio = Math.abs(dx[0] / dx[2])
    var cutoff = 4
    if (!xBlocked && ratio > cutoff) return
    if (!zBlocked && ratio < 1 / cutoff) return

    // original target position before being obstructed
    vec3.add(targetPos, oldBox.base, dx)

    // move towards the target until the first X/Z collision
    var getVoxels = self.testSolid
    sweep(getVoxels, oldBox, dx, function (dist, axis, dir, vec) {
        if (axis === 1) vec[axis] = 0
        else return true
    })

    var y = b.aabb.base[1]
    var ydist = Math.floor(y + 1.001) - y
    vec3.set(upvec, 0, ydist, 0)
    var collided = false
    // sweep up, bailing on any obstruction
    sweep(getVoxels, oldBox, upvec, function (dist, axis, dir, vec) {
        collided = true
        return true
    })
    if (collided) return // could't move upwards

    // now move in X/Z however far was left over before hitting the obstruction
    vec3.subtract(leftover, targetPos, oldBox.base)
    leftover[1] = 0
    processCollisions(self, oldBox, leftover, tmpResting)

    // bail if no movement happened in the originally blocked direction
    if (xBlocked && !equals(oldBox.base[0], targetPos[0])) return
    if (zBlocked && !equals(oldBox.base[2], targetPos[2])) return

    // done - oldBox is now at the target autostepped position
    cloneAABB(b.aabb, oldBox)
    b.resting[0] = tmpResting[0]
    b.resting[2] = tmpResting[2]
    if (b.onStep) b.onStep()
}





/*
 *    SLEEP CHECK
*/

function bodyAsleep(self, body, dt, noGravity) {
    if (body._sleepFrameCount > 0) return false
    // without gravity bodies stay asleep until a force/impulse wakes them up
    if (noGravity) return true
    // otherwise check body is resting against something
    // i.e. sweep along by distance d = 1/2 g*t^2
    // and check there's still a collision
    var isResting = false
    var gmult = 0.5 * dt * dt * body.gravityMultiplier
    vec3.scale(sleepVec, self.gravity, gmult)
    sweep(self.testSolid, body.aabb, sleepVec, function () {
        isResting = true
        return true
    }, true)
    return isResting
}
var sleepVec = vec3.create()





function equals(a, b) { return Math.abs(a - b) < 1e-5 }

function cloneAABB(tgt, src) {
    for (var i = 0; i < 3; i++) {
        tgt.base[i] = src.base[i]
        tgt.max[i] = src.max[i]
        tgt.vec[i] = src.vec[i]
    }
}



var sanityCheck = function (v) { }
if (DEBUG) sanityCheck = function (v) {
    if (isNaN(vec3.length(v))) throw 'Vector with NAN: ', v
}


/***/ }),

/***/ "../../node_modules/voxel-physics-engine/src/rigidBody.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/nabil/OneDrive/Bureau/NEWGAME/node_modules/voxel-physics-engine/src/rigidBody.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var aabb = __webpack_require__(/*! aabb-3d */ "../../node_modules/aabb-3d/index.js")
var vec3 = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js")


var DEBUG = 0


module.exports = RigidBody



/*
 *    RIGID BODY - internal data structure
 *  Only AABB bodies right now. Someday will likely need spheres?
*/

function RigidBody(_aabb, mass, friction, restitution, gravMult, onCollide, autoStep) {
    this.aabb = new aabb(_aabb.base, _aabb.vec) // clone
    this.mass = mass
    this.friction = friction
    this.restitution = restitution
    this.gravityMultiplier = gravMult
    this.onCollide = onCollide
    this.autoStep = !!autoStep
    this.airDrag = -1   // overrides global airDrag when >= 0
    this.fluidDrag = -1 // overrides global fluidDrag when >= 0
    this.onStep = null

    // internals
    this.velocity = vec3.create()
    this.resting = [0, 0, 0]
    this.inFluid = false
    this._ratioInFluid = 0
    this._forces = vec3.create()
    this._impulses = vec3.create()
    this._sleepFrameCount = 10 | 0
}

RigidBody.prototype.setPosition = function (p) {
    sanityCheck(p)
    vec3.subtract(p, p, this.aabb.base)
    this.aabb.translate(p)
    this._markActive()
}
RigidBody.prototype.getPosition = function () {
    return vec3.clone(this.aabb.base)
}
RigidBody.prototype.applyForce = function (f) {
    sanityCheck(f)
    vec3.add(this._forces, this._forces, f)
    this._markActive()
}
RigidBody.prototype.applyImpulse = function (i) {
    sanityCheck(i)
    vec3.add(this._impulses, this._impulses, i)
    this._markActive()
}
RigidBody.prototype._markActive = function () {
    this._sleepFrameCount = 10 | 0
}



// temp
RigidBody.prototype.atRestX = function () { return this.resting[0] }
RigidBody.prototype.atRestY = function () { return this.resting[1] }
RigidBody.prototype.atRestZ = function () { return this.resting[2] }





var sanityCheck = function (v) { }
if (DEBUG) sanityCheck = function (v) {
    if (isNaN(vec3.length(v))) throw 'Vector with NAN: ' + v
}


/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./animation.js":
/*!**********************!*\
  !*** ./animation.js ***!
  \**********************/
/*! exports provided: playerAnim, playerKneel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerAnim", function() { return playerAnim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerKneel", function() { return playerKneel; });

var walkcycle=0
global.flyHeadAngle=0//-Math.PI/2
var delay=0
function playerAnim(mp,noa){
	
	if(playermesh==null){
		return;
	}
	
	if(isDead){
					mp.rotation.z=Math.PI/3
					return;
				}
				
	var body=noa.ents.getPhysicsBody(noa.playerEntity)
	
	delay++
	if(!facingF){
				
				//mp.rotation.y=lerp(mp.rotation.y,noa.camera.heading,1)
				//-Math.PI/2 = flying head
				
				if(delay>50){
					
					
					mp.rotation.y=lerp(mp.rotation.y,noa.camera.heading,1)
				delay=0
				}
				mp._children[0].rotation.x=lerp(mp._children[0].rotation.x,noa.camera.pitch+flyHeadAngle,1)
		        mp._children[0].rotation.y=lerp(mp._children[0].rotation.y,noa.camera.heading-mp.rotation.y,1)
				
				}else{
					
					mp.rotation.y=lerp(mp.rotation.y,noa.camera.heading+Math.PI,1)
				
				mp._children[0].rotation.x=lerp(mp._children[0].rotation.x,-noa.camera.pitch+flyHeadAngle,1)
		        mp._children[0].rotation.y=lerp(mp._children[0].rotation.y,noa.camera.heading-mp.rotation.y+Math.PI,1)
					
				}
				
				
				
				
				if(rideName=='minecarft'||rideName=='boat' ){
					mp.rotation.x=0
					  mp._children[3].rotation.x= -20
		              mp._children[4].rotation.x= -20
					  
					  mp._children[3].rotation.z= Math.PI/6
		              mp._children[4].rotation.z= -Math.PI/6
					  
					   mp._children[1].rotation.x= -20
		              mp._children[2].rotation.x= -20
					  
					  mp._children[1].rotation.z= 50
		              mp._children[2].rotation.z= -50
					  return;
					
				}
				
					if(swimming){
						
						walkcycle++
					mp.rotation.x=Math.PI/2
					
							mp._children[0].rotation.x=lerp(mp._children[0].rotation.x,noa.camera.pitch-Math.PI/2,1)
					  mp._children[3].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (0.5 * Math.PI))/10;
		              mp._children[4].rotation.x= 1.0* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI))/10;
					  
					 //mp._children[3].rotation.z= 0.5* Math.cos((0.16 * walkcycle) + (0.5* Math.PI))+Math.PI/6;
		             // mp._children[4].rotation.z= 0.5* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI))-Math.PI/6;
					  
					   mp._children[1].rotation.x= 0
		              mp._children[2].rotation.x= 0
					  
					  mp._children[1].rotation.z= 1.0* Math.cos((0.16 * walkcycle) + (0.5* Math.PI))+Math.PI/3;
		              mp._children[2].rotation.z= 1.0* Math.cos((0.16 * walkcycle) + (1.5 * Math.PI))-Math.PI/3;
					  return true;
					
				}
				
				mp.rotation.x=0
				
				
				
				if(fired){
					
					
                   walkcycle++
                mp._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI))-Math.PI/2;
				mp._children[1].rotation.z= 1.0* Math.sin((0.32 * walkcycle) + (0.25 * Math.PI))-0.1;
				
			

                }else{
                      mp._children[1].rotation.x= 0
		              mp._children[2].rotation.x= 0
					  mp._children[3].rotation.x= 0
		              mp._children[4].rotation.x= 0
					  
					  mp._children[1].rotation.z= 0
		              mp._children[2].rotation.z= 0
					  mp._children[3].rotation.z= 0
		              mp._children[4].rotation.z= 0
				}					
				if(body.velocity[1]!==0 || body.velocity[0]!==0 || body.velocity[2]!==0 ){
					
					walkcycle++
					
					
					
					if(!fired){
					
					mp._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
					}
		              mp._children[2].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  	mp._children[3].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mp._children[4].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
				}else{
					
			
					if(!fired){
					  mp._children[1].rotation.x= 0
					   mp._children[1].rotation.z= 0
				}
		              mp._children[2].rotation.x= 0
					  mp._children[3].rotation.x= 0
		              mp._children[4].rotation.x= 0
					  
					 
		              mp._children[2].rotation.z= 0
					  mp._children[3].rotation.z= 0
		              mp._children[4].rotation.z= 0
					
				}
	
	
}
function lerp (start, end, amt){
				     return (1-amt)*start+amt*end
			        }
					
					
					
					function playerKneel(mp , bool){
						if(bool){
						   mp._children[5].rotation.x=Math.PI/8
							mp._children[5].position.z+=0.25
							mp._children[0].position.z+=0.25
							mp._children[1].position.z+=0.25
							mp._children[2].position.z+=0.25
							
							mp._children[5].position.y-=0.2
							mp._children[0].position.y-=0.2
							mp._children[1].position.y-=0.2
							mp._children[2].position.y-=0.2
							
							mp._children[3].position.y-=0.2
							mp._children[4].position.y-=0.2
							
						}else{
						
						    mp._children[5].rotation.x=0
							mp._children[5].position.z-=0.25
							mp._children[0].position.z-=0.25
							mp._children[1].position.z-=0.25
							mp._children[2].position.z-=0.25
							
							mp._children[5].position.y+=0.2
							mp._children[0].position.y+=0.2
							mp._children[1].position.y+=0.2
							mp._children[2].position.y+=0.2
							
							mp._children[3].position.y+=0.2
							mp._children[4].position.y+=0.2
						}
						
					}
					
					
					
					
	
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./armor.js":
/*!******************!*\
  !*** ./armor.js ***!
  \******************/
/*! exports provided: addHat, addCape, addTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHat", function() { return addHat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCape", function() { return addCape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransport", function() { return addTransport; });
var hat=null
var cape=null
var transport=null
console.log('hat added')
function addHat(noa,mainp,name){
	
	
	

	if(name=='none'){
		if(hat!==null){
			hat.dispose()
			hat=null;
			
			
		
			return;
		}
	 return;
	}
	
	
	var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;


  BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
          
			for (var i=0;i<meshes.length;i++){
	
	hat= meshes[0]
	 hat.material=busmat;
	   hat.scaling=new BABYLON.Vector3(0.8,0.8,0.8)
	  hat.parent=mainp._children[0];
	  
	  noa.rendering.addMeshToScene(hat, false)

 }
 
		hat.position.y+=0.35
		
		
	
	
	})
	
	

	
	
}


function addCape(noa,mainp,name){
	if(name=='none'){
	
		
		
		cape.dispose()
		cape=null;
	
		return;
	
	}
		
		console.log('add cape dude')
		cape = BABYLON.MeshBuilder.CreatePlane('cape', {width: 0.6, height: 1, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
				cape.parent=mainp
				
				var capemat = new BABYLON.StandardMaterial("face0", scene);
					var pop = new BABYLON.Texture("texPack/item/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
					capemat.backFaceCulling=false
capemat.diffuseTexture=pop;
capemat.emissiveColor = BABYLON.Color3.White()
capemat.specularColor = BABYLON.Color3.Black()
cape.material=capemat

noa.rendering.addMeshToScene(cape, false,mainp.position)
					  cape.rotation.x=Math.PI/18
					 
					  cape.position.z-=0.2
					 cape.position.y+=1
	
	
	
}















function addTransport(noa,mainp,name){
	
	
	if(playermesh._children[5].getChildren().length>0){
		playermesh._children[5]._children[0].dispose()
		
	}

	if(name=='none'){
		if(transport!==null){
			transport.dispose()
			transport=null;
			
			
		
			return;
		}
	 return true;
	}
	
	
	var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;


  BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            
			for (var i=0;i<meshes.length;i++){
	
	transport= meshes[0]
	transport.material=busmat;
	  transport.parent=mainp._children[5];
	  
	  noa.rendering.addMeshToScene(transport, false)

 }
 
		transport.position.y-=1
		transport.scaling.x=1.1
		transport.scaling.z=1.1
		
	
	
	})
	
	

	
	
}

/***/ }),

/***/ "./blockActions.js":
/*!*************************!*\
  !*** ./blockActions.js ***!
  \*************************/
/*! exports provided: blockActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockActions", function() { return blockActions; });
var carfacing=null
var offset=false

function blockActions(noa){
	
	riding=false
	swimming=false
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['floor']){
		
		if(!offset){
			
			
			noa.ents.getState(noa.playerEntity,'mesh').offset=[0,-0.5,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,-0.5,0]			
							offset=true
		}
		
		
	}else{
		
		if(onStairs){
		
		noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]
		noa.ents.getState(noa.playerEntity,'shadow').offset=[0,0,0]
		onStairs=false
      
		}				
          //offset=false
	}

	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))!==0){

			if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['ladder']){
		playerbody.velocity[1]=0.65
		
		if(noa.inputs.state.forward){
			
			playerbody.velocity[1]=3
			
		}
		
		if(noa.inputs.state.sprint){
			playerbody.velocity[1]=-3
		}
	}
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['fire']){
		
		playerbody.applyImpulse([0,0.3,0])
		health-=0.1
		
	}

	if(playerbody.inFluid && playerbody.ratioInFluid==1){
			swimming=true
		
	
		return;
	}
	
	if(rideName=='none'){
		return true;
	}
		
		if(playerbody.inFluid && playerbody.ratioInFluid>0.3){
			riding=true
		playerbody.velocity[1]=0.65
	
		return;
	}

	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['rail'] ){
		if(rideName!=='minecart'){
			return;
		}
		if(!onRail){
			
			carfacing=blocklook(noa)
			onRail=true
			noa.entities.removeComponent(noa.playerEntity, noa.entities.names.receivesInputs)
			
		}
		
		switch(carfacing){
	    case "north":	
        playerbody.velocity[0]=0		
		playerbody.velocity[2]=3
		
		break;
		
		 case "south":	
        playerbody.velocity[0]=0		 
		playerbody.velocity[2]=-3
		
		break;
		
			 case "east":
        playerbody.velocity[2]=0				 
		playerbody.velocity[0]=3
		
		break;
		
			 case "west":	
        playerbody.velocity[2]=0			 
		playerbody.velocity[0]=-3
		
		break;
		
		}

	}
	
	if(noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1]),Math.floor(pos[2]))==blocks['railside'] ){
		if(rideName!=='minecart'){
			return;
		}
		if(!onRail){
			
			carfacing=blocklook(noa)
			onRail=true
			noa.entities.removeComponent(noa.playerEntity, noa.entities.names.receivesInputs)
			
		}
		
		switch(carfacing){
	    case "north":	
        playerbody.velocity[0]=0		
		playerbody.velocity[2]=3
		
		break;
		
		 case "south":	
        playerbody.velocity[0]=0		 
		playerbody.velocity[2]=-3
		
		break;
		
			 case "east":
        playerbody.velocity[2]=0				 
		playerbody.velocity[0]=3
		
		break;
		
			 case "west":	
        playerbody.velocity[2]=0			 
		playerbody.velocity[0]=-3
		
		break;
		
		}
	
	}

	return;
	
	}
	
	if(onRail){
		
		
		switch(carfacing){
	    case "north":		
		playerbody.velocity[2]=7
		
		break;
		
		 case "south":		
		playerbody.velocity[2]=-7
		
		break;
		
		 case "east":		
		playerbody.velocity[0]=7
		
		break;
		
		 case "west":		
		playerbody.velocity[0]=-7
		
		break;
		
		}
		noa.entities.addComponent(noa.playerEntity, noa.entities.names.receivesInputs)
		onRail=false
		
	}
	
	
}


/***/ }),

/***/ "./blockDef/bed.js":
/*!*************************!*\
  !*** ./blockDef/bed.js ***!
  \*************************/
/*! exports provided: bed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bed", function() { return bed; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


	var bedjsony=null
function bed(noa,options,id,texture,e){
	
	var scene=noa.rendering.getScene()
	
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	var redtex = new BABYLON.Texture("texPack/"+funpack+"/models/bed/redbed.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/bed/bed.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var bluemat = new BABYLON.StandardMaterial("face0", scene);
						bluemat.diffuseTexture=bustex;
bluemat.backFaceCulling = false;
bluemat.specularColor = BABYLON.Color3.Black()
bluemat.emissiveColor = BABYLON.Color3.White()

var redmat = new BABYLON.StandardMaterial("face0", scene);


redmat.diffuseTexture=redtex;
redmat.backFaceCulling = false;
redmat.specularColor = BABYLON.Color3.Black()
redmat.emissiveColor = BABYLON.Color3.White()

                      
					  
					  var colors={"black":bluemat,"red":redmat}
					
						var mesh=null
					
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/bed/bed.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=bluemat;
							  
							  
							    var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							 
							  
							  
						}
					
			
		
			
			finOpts.onSet= function ( x, y, z) {
			
					var mesh2=mesh.clone('bed')
				var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
			
			var detail="Close"//
			var j="Close"
			var ccolor='red'
			
	/*	var item=itemStack[selected]
		
		if(item=='bed'){
			ccolor='black'
		}
		
		if(item=='bed_red'){
			ccolor='red'
		}*/
		
			
			//	mesh2.material=colors[ccolor]
			
				mesh2.position.x=x+bedjsony[c][j][0]//0.5
				mesh2.position.y=y+bedjsony[c][j][1]
				mesh2.position.z=z+bedjsony[c][j][2]//0.5//
				
					mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
			
				noa.rendering.addMeshToScene(mesh2, false)
				
				mesh2.name='hitbox:bed:'+c+':'+JSON.stringify([x,y,z])
				
				
				offmeshes.push([[x,y,z],mesh2])
				
				//noa.soundy('blop.mp3',1)
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone('bed')
					
			var c=null
			var ccolor='black'
			var detail="Close"//
			var j="Close"
	           
			
					
					mesh2.material=colors[ccolor]
				
			
				mesh2.position.x=x+bedjsony[c][j][0]//0.5
				mesh2.position.y=y+bedjsony[c][j][1]
				mesh2.position.z=z+bedjsony[c][j][2]//0.5//
				
				
				mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
			   
				
				mesh2.name='hitbox:bed:'+c+':'+JSON.stringify([x,y,z])
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
						
				
				
			}
			finOpts.UnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						c.name='lol'
						scene.removeMesh(c, false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						c.name='lol'
						
						scene.removeMesh(c, false)
					}
					
				}
				//noa.soundy('blop.mp3',1)
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
							 
				
						 
						 
						
						 	 
										 });
										 
										  return id;
	
	
}


/***/ }),

/***/ "./blockDef/bell.js":
/*!**************************!*\
  !*** ./blockDef/bell.js ***!
  \**************************/
/*! exports provided: bell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bell", function() { return bell; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


	var bedjsony=null
	var directions={"0":"north","1":"south","2":"east","3":"west"}
	var state={"0":"Close","1":"Open"}
function bell(noa,options,id,name,e){
	
	console.log('bell')
	
	var scene=noa.rendering.getScene()
	
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
	console.log(bedjsony)
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
							var mesh=null
						var mesh1=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/"+name+"/"+name+".babylon", scene, function (meshes) { 
						 mesh1= new BABYLON.Mesh("dummy", scene);
                            
								for (var i=0;i<meshes.length;i++){
							
							
							 
							   meshes[i].material=busmat;
							  	
	                            meshes[i].parent=mesh1;
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							
							  
						}
					
			  mesh=mesh1
		
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=mesh.clone(name)
				
				 
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			     var j='Close'
				 var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
				 mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				//noa.rendering.addMeshToScene(mesh2._children[1], false)
				
				mesh2.name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
					mesh2._children[0].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
						//mesh2._children[1].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
			
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
		
			var mesh2=mesh.clone(name)
			var c='north'
			var j='Close'
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
			//	noa.rendering.addMeshToScene(mesh2._children[1], false)
				
			
			   
			   
			   	mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				
				mesh2.name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				mesh2._children[0].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
			//	mesh2._children[1].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					
				
				
			}
			finOpts.onUnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						//scene.removeMesh(c._children[1], false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					
					if(chestList[JSON.stringify([x,y,z])]!==null){
						delete chestList[JSON.stringify([x,y,z])]
					}
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
					
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						//scene.removeMesh(c._children[1], false)
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}


/***/ }),

/***/ "./blockDef/chest.js":
/*!***************************!*\
  !*** ./blockDef/chest.js ***!
  \***************************/
/*! exports provided: chest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chest", function() { return chest; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


	var bedjsony=null
	var directions={"0":"north","1":"south","2":"east","3":"west"}
	var state={"0":"Close","1":"Open"}
function chest(noa,options,id,name,e){
	
	console.log('yayyyyyyy')
	var scene=noa.rendering.getScene()
	
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/chest/chest.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
							var mesh=null
						var mesh1=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/chest/chest.babylon", scene, function (meshes) { 
						 mesh1= new BABYLON.Mesh("dummy", scene);
                            
								for (var i=0;i<meshes.length;i++){
							
							
							 
							   meshes[i].material=busmat;
							  	
	                            meshes[i].parent=mesh1;
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							
							  
						}
					
			  mesh=mesh1
		
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=mesh.clone(name)
				
				 
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			     var j='Close'
				 var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
				 mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
				mesh2.name='hitbox:chest:north:'+JSON.stringify([x,y,z])
					mesh2._children[0].name='hitbox:chest:north:'+JSON.stringify([x,y,z])
						mesh2._children[1].name='hitbox:lid:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
				if(chestList[JSON.stringify([x,y,z])]==null){
					console.log('sweet')
					itemStack.length=9
					countStack.length=9
					chestList[JSON.stringify([x,y,z])]={items:[jsonItems["bearhat"],jsonItems["bearhat"],jsonItems["arrow"],jsonItems["bed"],null,null,null,null,null,
					null,null,null,null,null,null,null,jsonItems["arrow"],null
					,null,null,null,null,null,null,null,jsonItems["arrow"],null],itemCount:[12,1,3,2,0,0,0,0,0,
					0,0,0,0,0,0,0,1,0,
					0,0,0,0,0,0,0,1,0]}
					var newStack=itemStack.concat(chestList[JSON.stringify([x,y,z])].items)
					var newCount=countStack.concat(chestList[JSON.stringify([x,y,z])].itemCount)
					itemStack=newStack
					countStack=newCount
					console.log(itemStack)
				}
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone(name)
			var c='north'
			var j='Close'
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
					setTimeout(function(){  
					
					
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				c=directions[c]
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   
			   	mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				
				mesh2.name='hitbox:chest:north:'+JSON.stringify([x,y,z])
				mesh2._children[0].name='hitbox:chest:north:'+JSON.stringify([x,y,z])
				mesh2._children[1].name='hitbox:lid:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					
				},300);
				
			}
			finOpts.onUnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					
					if(chestList[JSON.stringify([x,y,z])]!==null){
						delete chestList[JSON.stringify([x,y,z])]
					}
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
					
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}


/***/ }),

/***/ "./blockDef/door.js":
/*!**************************!*\
  !*** ./blockDef/door.js ***!
  \**************************/
/*! exports provided: door */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "door", function() { return door; });

var doorjson=null
var directions={"0":"north","1":"south","2":"east","3":"west"}
var state={"0":"Close","1":"Open"}
function door(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
		doorjson=e
	
			
			var scene=noa.rendering.getScene()
		
			

			
				
				var imageheight=16
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
				
				
				var n=[new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(12+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(12+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(4+num),-pixely*(0)),////right
	new BABYLON.Vector4(pixelx*4,-pixely*(15+num),pixelx*(4+num),-pixely*(0)),////left
	new BABYLON.Vector4(pixelx*4,-pixely*(0+num),pixelx*(12+num),-pixely*(0)),//top 
	new BABYLON.Vector4(pixelx*4,-pixely*(0+num),pixelx*(12+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1.9,
		depth:0.1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
	
			var supermesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
				
			
			var offset = BABYLON.Matrix.Translation(0, 1, 0)
			var mat = noa.rendering.makeStandardMaterial(name)
	        supermesh.bakeTransformIntoVertices(offset)
			supermesh.material=mat
			
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/door.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true
			mat.backFaceCulling=false
			//supermesh.setPivotPoint(new BABYLON.Vector3(0.25, 0, 0))
			var finOpts = options
			
			finOpts.onLoad= function ( x, y, z) {
				
			
				var mesh2=supermesh.clone('door')
				
				//cubes['door']=mesh2
				
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			setTimeout(function(){  
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
		
				mesh2.position.x=x+doorjson[c][j][0]//0.5
				mesh2.position.y=y+doorjson[c][j][1]
				mesh2.position.z=z+doorjson[c][j][2]//0.5//
				
					mesh2.rotation.x=doorjson[c][j+'rotation'][0]
				mesh2.rotation.y=doorjson[c][j+'rotation'][1]
				mesh2.rotation.z=doorjson[c][j+'rotation'][2]//
			
				
			
				
				mesh2.name='hitbox:door:'+c+':'+JSON.stringify([x,y,z])+':'+j
				mesh2.checkCollisions=true
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			},300);
				
			}
			
			finOpts.onSet= function ( x, y, z) {
				console.log('boom')
			var mesh2=supermesh.clone('door')
				var c=blocklook(noa)
			var detail="Close"//
			var j="Close"
			
			
			setTimeout(function(){  
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			      
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   console.log(j)
				mesh2.position.x=x+doorjson[c][j][0]//0.5
				mesh2.position.y=y+doorjson[c][j][1]
				mesh2.position.z=z+doorjson[c][j][2]//0.5//
				
				mesh2.rotation.x=doorjson[c][j+'rotation'][0]
				mesh2.rotation.y=doorjson[c][j+'rotation'][1]
				mesh2.rotation.z=doorjson[c][j+'rotation'][2]//
				
				     
					mesh2.checkCollisions=true
				
					mesh2.name='hitbox:door:'+c+':'+JSON.stringify([x,y,z])+':'+j
				
				
				
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
			}
			
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						c.name='lol'
						scene.removeMesh(c, false)
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						c.name='lol'
						scene.removeMesh(c, false)
					}
				}
			}
		
			
		
				
			noa.registry.registerBlock(id, finOpts)
			return id;
		
}



function blocklook(noa){
	
	
var viewdirection=null
var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)

		 
if(rad>320  || rad <50){
	 viewdirection='north'
	
	
}
if(rad>130 && rad<230){
	viewdirection='south'
	
	
}
if(rad>50 && rad<130){
	viewdirection='east'
	
	
	
}

if(rad>230 && rad<320){
	viewdirection='west'
	
	
}
return viewdirection;

 }


/***/ }),

/***/ "./blockDef/ebutton.js":
/*!*****************************!*\
  !*** ./blockDef/ebutton.js ***!
  \*****************************/
/*! exports provided: ebutton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ebutton", function() { return ebutton; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


	var bedjsony=null
	var directions={"0":"north","1":"south","2":"east","3":"west"}
	var state={"0":"Close","1":"Open"}
function ebutton(noa,options,id,name,e){
	
	console.log('pccc')
	
	var scene=noa.rendering.getScene()
	
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
	console.log(bedjsony)
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
							var mesh=null
						var mesh1=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/"+name+"/"+name+".babylon", scene, function (meshes) { 
						 mesh1= new BABYLON.Mesh("dummy", scene);
                            
								for (var i=0;i<meshes.length;i++){
							
							
							 
							   meshes[i].material=busmat;
							  	
	                            meshes[i].parent=mesh1;
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							
							  
						}
					
			  mesh=mesh1
		
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=mesh.clone(name)
				
				 
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			     var j='Close'
				 var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
				 mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
				mesh2.name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
					mesh2._children[0].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
						mesh2._children[1].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
			
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				rtcblocklist['meeting']=[x,y,z]
			var mesh2=mesh.clone(name)
			var c='north'
			var j='Close'
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
					setTimeout(function(){  
					
					
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				c=directions[c]
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   
			   	mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				
				mesh2.name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				mesh2._children[0].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				mesh2._children[1].name='hitbox:'+name+':north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					
				},300);
				
			}
			finOpts.onUnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					
					if(chestList[JSON.stringify([x,y,z])]!==null){
						delete chestList[JSON.stringify([x,y,z])]
					}
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
					
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}


/***/ }),

/***/ "./blockDef/fence.js":
/*!***************************!*\
  !*** ./blockDef/fence.js ***!
  \***************************/
/*! exports provided: fence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fence", function() { return fence; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


var trapjson=null;
var namer='table'
	var mesh=null
			
			var mesh3=null
			var middlefence=null
			var fencecorner=null
			
			var directions={"0":"north","1":"south","2":"east","3":"west"}
var state={"0":"Close","1":"Open"}
function fence(noa,options,id,texture,e){
	var scene=noa.rendering.getScene()
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	
	trapjson=e
    namer=e.name
	
	var tex = new BABYLON.Texture("./texPack/"+funpack+trapjson.texture, scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	
	
			
				  var mat = noa.rendering.makeStandardMaterial('cool')
		//	/chair/chair
			
			
			
			
			mat.diffuseTexture = tex
			
		
		
		BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/middlefence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  middlefence=meshes[0]
							 middlefence.material=mat
							  
							  
						}
						
						});
						
					/*	BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/fencecorner.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  fencecorner=meshes[0]
							 fencecorner.material=mat
							  
							  
						}
						
						});
			
			BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/oakfence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  mesh3=meshes[0]
							 mesh3.material=mat
							  
							  
						}
						
						});
			
			BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/fence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  mesh=meshes[0]
							 mesh.material=mat
							  
							  
						}
						
						 });*/
			
			var finOpts = options
			
				
		
			
			
			finOpts.onSet= function ( x, y, z) {
				
				
				
			var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
			
			var detail="Close"//
			var j="Close"
			
		
			
			       var mesh2=middlefence.clone('kelp')
				
	           
			
			console.log(c)
				console.log(trapjson)
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]//-1.57
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
					//mesh2.showBoundingBox=true
				mesh2.checkCollisions=true
			    mesh2.name='hitbox:fence:'+c+':'+JSON.stringify([x,y,z])+':'+j
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
					setTimeout(function(){  
				
			     if(noa.world.getBlockID(x,y,z+1)==blocks['fence'] && noa.world.getBlockID(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}	
				
				if(noa.world.getBlockID(x,y,z-1)==blocks['fence'] && noa.world.getBlockID(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}
				
				if(noa.world.getBlockID(x,y,z+1)==blocks['fence'] && noa.world.getBlockID(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}
				if(noa.world.getBlockID(x,y,z-1)==blocks['fence'] && noa.world.getBlockID(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],x,y,z)
				}
				
				}, 1000);
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				//setTimeout(function(){  
		
				
				
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
			
		
					 	setTimeout(function(){  
				var mesh2=middlefence.clone('kelp')
				
			
			console.log(c)
				console.log(trapjson)
				
				
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
			j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
				
				
				
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]//-1.57
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				mesh2.checkCollisions=true
				offmeshes.push([[x,y,z],mesh2])
				
				}, 1000);
				setTimeout(function(){  
				
			     if(noa.getBlock(x,y,z+1)==blocks['fence'] && noa.getBlock(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}	
				
				if(noa.getBlock(x,y,z-1)==blocks['fence'] && noa.getBlock(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}
				
				if(noa.getBlock(x,y,z+1)==blocks['fence'] && noa.getBlock(x+1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}
				if(noa.getBlock(x,y,z-1)==blocks['fence'] && noa.getBlock(x-1,y,z)==blocks['fence'] ){
					noa.setBlock(blocks['fenceside'],[x,y,z])
				}
				
				}, 1000);
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c, false)
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}





/***/ }),

/***/ "./blockDef/fenceside.js":
/*!*******************************!*\
  !*** ./blockDef/fenceside.js ***!
  \*******************************/
/*! exports provided: fenceside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fenceside", function() { return fenceside; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


var trapjson=null;
var namer='table'
	var mesh=null
			
			var mesh3=null
			var middlefence=null
			var fencecorner=null
function fenceside(noa,options,id,texture,e){
	
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	
	trapjson=e
    namer=e.name
			
				  var mat = noa.rendering.makeStandardMaterial('cool')
		//	/chair/chair
			
			var tex = new BABYLON.Texture("./texPack/"+funpack+ trapjson.texture, scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			
			
			mat.diffuseTexture = tex
			
		
		
		BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/middlefence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  middlefence=meshes[0]
							 middlefence.material=mat
							  
							  
						}
						
						});
						
						BABYLON.SceneLoader.ImportMesh("", "","./texPack/"+funpack+"/models/oakfence/fencecorner.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							

							  
							  
							  
							  fencecorner=meshes[0]
							 fencecorner.material=mat
							  
							  
						}
						
						});
			
			/*BABYLON.SceneLoader.ImportMesh("", "",mod+ "models/oakfence/oakfence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=busmat;
							  
							  
							

							  
							  
							  
							  mesh3=meshes[0]
							 mesh3.material=mat
							  
							  
						}
						
						});
			
			BABYLON.SceneLoader.ImportMesh("", "",mod+ "models/oakfence/fence.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=busmat;
							  
							  
							

							  
							  
							  
							  mesh=meshes[0]
							 mesh.material=mat
							  
							  
						}
						
						 });*/
			
			var finOpts = options
			
				
		
			
			
			finOpts.onSet= function ( x, y, z) {
				
				
				
			var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
			
			var detail="Close"//
			var j="Close"
			
			
					
					
					 var mesh2=fencecorner.clone('kelp')
			
			
	           
			
			console.log(c)
				console.log(trapjson)
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]//-1.57
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]+Math.PI
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				setTimeout(function(){  
		
				
				
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
			
			
					 
					 var mesh2=fencecorner.clone('kelp')
				
				
			
			console.log(c)
				console.log(trapjson)
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]//-1.57
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 3000);
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						noa.rendering.removeMesh(c, false)
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						noa.rendering.removeMesh(c, false)
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}





/***/ }),

/***/ "./blockDef/fire.js":
/*!**************************!*\
  !*** ./blockDef/fire.js ***!
  \**************************/
/*! exports provided: fire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return fire; });
function fire(noa,options,id,texture){
		options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	var imageheight=128
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//,//right
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),///left
	new BABYLON.Vector4(pixelx*15,-pixely*(0+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*15,-pixely*(0+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:0.9,
		width:0.9,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/fire.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.backFaceCulling = false;
			setInterval(function(){ 
     tex.vOffset -= 1/8;
     }, 100);
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0.4, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			finOpts.blockMesh = mesh
			
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}


/***/ }),

/***/ "./blockDef/floor.js":
/*!***************************!*\
  !*** ./blockDef/floor.js ***!
  \***************************/
/*! exports provided: floor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
function floor(noa,options,id,texture){
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	var imageheight=16
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0.0625,0.125,0.125,0.375),//right
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0,0.125,0.046,0.375),//left
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 0.5,
		depth:1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('texPack/'+funpack+'/blocks/floor.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			mat.diffuseTexture.Alpha=0.5
			mat.Alpha=0.5
			mat.backFaceCulling=false
		
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0.25, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			
			
			finOpts.blockMesh = mesh
			
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}




/***/ }),

/***/ "./blockDef/flowerpot.js":
/*!*******************************!*\
  !*** ./blockDef/flowerpot.js ***!
  \*******************************/
/*! exports provided: flowerpot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flowerpot", function() { return flowerpot; });


	var bedjsony=null
function flowerpot(noa,options,id,name,e){
	

	var scene=noa.rendering.getScene()
	
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/flowerpot/flowerpot.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
						var mesh=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/flowerpot/flowerpot.babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=busmat;
							  
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							  
						}
					
			
		
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=mesh.clone(name)
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				
				mesh2.name='hitbox:flowerpot:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone(name)
			
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				
				mesh2.name='hitbox:flowerpot:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					//	var k=makeparticle(mod+'textures/particle/bubble.png',mesh2)
						//k.start()
				
				
			}
			finOpts.UnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}


/***/ }),

/***/ "./blockDef/ladder.js":
/*!****************************!*\
  !*** ./blockDef/ladder.js ***!
  \****************************/
/*! exports provided: ladder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ladder", function() { return ladder; });


function ladder(noa,options,id,name,e){
	
		options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
			
			
			var finOpts = options
			
			finOpts.onLoad= function ( x, y, z) {
				
			
				var mesh2=itemList[name].clone(name)
				
		
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			
			
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				setTimeout(function(){  
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				
					c=directions[c]
		
			
				mesh2.position.x=x+e[c][j][0]//0.5
				mesh2.position.y=y+e[c][j][1]
				mesh2.position.z=z+e[c][j][2]//0.5//
				
				mesh2.rotation.x=e[c][j+'rotation'][0]
				mesh2.rotation.y=e[c][j+'rotation'][1]
				mesh2.rotation.z=e[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
				
			}
			
			finOpts.onSet= function ( x, y, z) {
				
			var mesh2=itemList[name].clone(name)
				var c=blocklook(noa)
				var detail="Close"//
			var j="Close"
			
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				setTimeout(function(){  
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				
					c=directions[c]
	
			
				mesh2.position.x=x+e[c][j][0]//0.5
				mesh2.position.y=y+e[c][j][1]
				mesh2.position.z=z+e[c][j][2]//0.5//
				
				mesh2.rotation.x=e[c][j+'rotation'][0]
				mesh2.rotation.y=e[c][j+'rotation'][1]
				mesh2.rotation.z=e[c][j+'rotation'][2]
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
			}
			
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
					}
				}
			}
		
			
		
				
			noa.registry.registerBlock(id, finOpts)
		return id;
}

/*function blocklook(noa){
	
	//var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	viewdirection='north'
	
	//'north'
	
}
if(rad>130 && rad<230){
	viewdirection='south'
	//'south'
	
}
if(rad>50 && rad<130){
	viewdirection='east'//[0,-Math.PI/2,0,[-0.4,0,0]]
	//'left'
	
	
}

if(rad>230 && rad<320){
	viewdirection='west'//[0,Math.PI/2,0,[0.4,0,0]]
	//'right'
	
}
return viewdirection;
	
	
}*/

function blocklook(noa){
	
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
			 viewdirection='north'
	//viewdirection=[0,Math.PI,0,[0,0,-0.40]]
	
	//'north'
	
}
if(rad>130 && rad<230){
	viewdirection='south'
	//viewdirection=[0,0,0,[0,0,0.40]]
	//'south'
	
}
if(rad>50 && rad<130){
	viewdirection='east'
	//viewdirection=[0,-Math.PI/2,0,[-0.4,0,0]]
	//'left'
	
	
}

if(rad>230 && rad<320){
	viewdirection='west'
	//viewdirection=[0,Math.PI/2,0,[0.4,0,0]]
	//'right'
	
}
return viewdirection;

 }


/***/ }),

/***/ "./blockDef/pc.js":
/*!************************!*\
  !*** ./blockDef/pc.js ***!
  \************************/
/*! exports provided: pc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return pc; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");


	var bedjsony=null
	var directions={"0":"north","1":"south","2":"east","3":"west"}
	var state={"0":"Close","1":"Open"}
function pc(noa,options,id,name,e){
	
	console.log('pccc')
	
	var scene=noa.rendering.getScene()
	
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	bedjsony=e
	
	console.log(bedjsony)
	
		var bustex = new BABYLON.Texture("texPack/"+funpack+"/models/pc/pc.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
var busmat = new BABYLON.StandardMaterial("face0", scene);
						busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;
                      
					
							var mesh=null
						var mesh1=null
							var finOpts = options
					
						BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/pc/pc.babylon", scene, function (meshes) { 
						 mesh1= new BABYLON.Mesh("dummy", scene);
                            
								for (var i=0;i<meshes.length;i++){
							
							
							 
							   meshes[i].material=busmat;
							  	
	                            meshes[i].parent=mesh1;
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							
							  
						}
					
			  mesh=mesh1
		
			
			finOpts.onSet= function ( x, y, z) {
				
				var mesh2=mesh.clone(name)
				
				 
				mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			     var j='Close'
				 var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
				 mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
				mesh2.name='hitbox:pc:north:'+JSON.stringify([x,y,z])
					mesh2._children[0].name='hitbox:pc:north:'+JSON.stringify([x,y,z])
						mesh2._children[1].name='hitbox:pc:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
				
				
			
				
				
			}
			
			finOpts.onLoad= function ( x, y, z) {
				
			var mesh2=mesh.clone(name)
			var c='north'
			var j='Close'
			mesh2.position.x=x+0.5
				mesh2.position.y=y+0.01
				mesh2.position.z=z+0.5
			
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				noa.rendering.addMeshToScene(mesh2._children[1], false)
				
					setTimeout(function(){  
					
					
			var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				c=directions[c]
			   j=rtcblocklist[ids][x+'|'+y+'|'+z][5]
			   j=state[j]
			   
			   
			   	mesh2.rotation.x=bedjsony[c][j+'rotation'][0]
				mesh2.rotation.y=bedjsony[c][j+'rotation'][1]
				mesh2.rotation.z=bedjsony[c][j+'rotation'][2]//
				
				mesh2.name='hitbox:pc:north:'+JSON.stringify([x,y,z])
				mesh2._children[0].name='hitbox:pc:north:'+JSON.stringify([x,y,z])
				mesh2._children[1].name='hitbox:pc:north:'+JSON.stringify([x,y,z])
				offmeshes.push([[x,y,z],mesh2])
					
				},300);
				
			}
			finOpts.onUnLoad= function ( x, y, z) {
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
					}
				}
				
						
				
				
			}
			
				finOpts.onUnset= function ( x, y, z) {
					
					if(chestList[JSON.stringify([x,y,z])]!==null){
						delete chestList[JSON.stringify([x,y,z])]
					}
					for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
					
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c, false)
						scene.removeMesh(c._children[0], false)
						scene.removeMesh(c._children[1], false)
					}
				}
				
			}
						
						
						
						
						
						
						  noa.registry.registerBlock(id, finOpts)
							 
							
							 
				
						 
						 
						 
						 	 
										 });
	
	return id;
}


/***/ }),

/***/ "./blockDef/portal.js":
/*!****************************!*\
  !*** ./blockDef/portal.js ***!
  \****************************/
/*! exports provided: portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portal", function() { return portal; });
function portal(noa,options,id,texture){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	/*var imageheight=512
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//,//right
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),///left
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:1,
		width:1,
		//faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreatePlane(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('texPack/'+funpack+'/blocks/minecraft/'+texture+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			mat.diffuseTexture.Alpha=0.5
			mat.Alpha=0.5
			mat.backFaceCulling=false
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.diffuseTexture.vScale = 1/32;
			setInterval(function(){ 
     tex.vOffset -= 1/32;
     }, 100);
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			finOpts.onSet=function(x,y,z){
				checkPortal(x,y,z,noa)
				
			}
			
			finOpts.blockMesh = mesh
			
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}


function checkPortal(e,t,i,k){


                            var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t+1, i ),
                                s = k.world.getBlockID(e, t-1, i );
								
								
                            if (r == 0) {
							
								k.setBlock(blocks['portal'], e-1 , t, i)
							
							
							
							
								
								
                            }
                            if (o ==0) {
								
									k.setBlock(blocks['portal'], e+1 , t, i)
									
									
                               
                            }
                            if (a == 0) {
							
								k.setBlock(blocks['portal'], e , t+1, i)
								
							
								
								
                            }
                            if (s == 0) {
								
									k.setBlock(blocks['portal'], e , t-1, i)
								
								
                              
                            }
								

								
							
	
}




/***/ }),

/***/ "./blockDef/rack.js":
/*!**************************!*\
  !*** ./blockDef/rack.js ***!
  \**************************/
/*! exports provided: rack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rack", function() { return rack; });
function rack(noa,options,id,texture){
	options={solid: true, opaque: true ,material:'rack',onCustomMeshCreate:null}
	/*var imageheight=512
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//,//right
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),///left
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(511+num),pixelx*(15+num),-pixely*(497))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:1,
		width:1,
		//faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreatePlane(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('texPack/'+funpack+'/blocks/minecraft/'+texture+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			mat.diffuseTexture.Alpha=0.5
			mat.Alpha=0.5
			mat.backFaceCulling=false
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.diffuseTexture.vScale = 1/32;
			setInterval(function(){ 
     tex.vOffset -= 1/32;
     }, 100);
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			
			finOpts.onUnset=function(x,y,z){
			checkVoid(x,y,z,noa)
				//checkArea(x,y,z,noa)
			}
			//finOpts.blockMesh = mesh
			
			
			
			noa.registry.registerBlock(id, finOpts)
			
			return id;
	
}




function checkVoid(e,t,i,k){


                            var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t+1, i ),
                                s = k.world.getBlockID(e, t-1, i );
								
								
                            if (r == blocks['portal']) {
							
								k.setBlock(0, e-1 , t, i)
							
							
							checkVoid(e-1 , t, i,k)
							
								
								
                            }
                            if (o ==blocks['portal']){
								
									k.setBlock(0, e+1 , t, i)
									
									checkVoid(e+1, t, i,k)
                               
                            }
                            if (a ==blocks['portal']) {
							
								k.setBlock(0, e , t+1, i)
								
							checkVoid(e, t+1, i,k)
								
								
                            }
                            if (s == blocks['portal']) {
								
									k.setBlock(0, e , t-1, i)
								
								checkVoid(e, t-1, i,k)
                              
                            }
								

								
							
	
}



/***/ }),

/***/ "./blockDef/rail.js":
/*!**************************!*\
  !*** ./blockDef/rail.js ***!
  \**************************/
/*! exports provided: rail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rail", function() { return rail; });
var trapjson=null
var directions={"0":"north","1":"south","2":"east","3":"west"}
function rail(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
			
			var mesh = BABYLON.Mesh.CreatePlane('sprite-' + name, 1, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = new BABYLON.Texture('texPack/'+funpack+'/blocks/rail.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0, 0); mesh.rotation.x = 1.57;

		mesh.bakeTransformIntoVertices(offset)
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
							
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				
				if(noa.getBlock(x,y+1,z-1)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				  else if(noa.getBlock(x,y+1,z+1)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				   else if(noa.getBlock(x-1,y+1,z)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=-Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				    else if(noa.getBlock(x+1,y+1,z)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						   
				 }
				 
				 
				 setTimeout(function(){  
				
			     if(noa.world.getBlockID(x,y,z+1)==id && noa.world.getBlockID(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
					console.log('makkk')
				}	
				
				if(noa.world.getBlockID(x,y,z-1)==id && noa.world.getBlockID(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				
				if(noa.world.getBlockID(x,y,z+1)==id && noa.world.getBlockID(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				if(noa.world.getBlockID(x,y,z-1)==id && noa.world.getBlockID(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				
				}, 1000);
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
	           
		
			
				setTimeout(function(){  
			
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
				//return;
					
			 //c='Close'
			 j='Close'
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]
				
				mesh2.name='hitbox:stairs:'+c+':'+JSON.stringify([x,y,z])
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
				
				
				}, 300);
				
				setTimeout(function(){ 
					if(noa.getBlock(x,y+1,z-1)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				  else if(noa.getBlock(x,y+1,z+1)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				else if(noa.getBlock(x-1,y+1,z)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=-Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				 else if(noa.getBlock(x+1,y+1,z)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				 
				 	setTimeout(function(){  
				
			     if(noa.getBlock(x,y,z+1)==id && noa.getBlock(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}	
				
				if(noa.getBlock(x,y,z-1)==id && noa.getBlock(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				
				if(noa.getBlock(x,y,z+1)==id && noa.getBlock(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				if(noa.getBlock(x,y,z-1)==id && noa.getBlock(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				
				}, 1000);
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
					}, 3000);
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }
 
 function waterytexture(noa){
	
	      /*  var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("lavaTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = !1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 1 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 2 / 16), u = 1.2 * Math.sin(e * Math.PI * 2 / 16), l = e - 1; l <= e + 1; l++)
                                for (var h = a - 1; h <= a + 1; h++) {
                                    var f = l + c & 15,
                                        d = h + u & 15;
                                    s += t[f + 16 * d]
                                }
                          i[e + 16 * a] = s / 10 + (n[(e + 0 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 1 & 15)] + n[(e + 0 & 15) + 16 * (a + 1 & 15)]) / 4 * .8, n[e + 16 * a] += .01 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .06, Math.random() < .005 && (r[e + 16 * a] = 1.5)
                        }
                    var p = i;
                    i = t, t = p;
                    for (var m = 0; m < 256; m++) {
                        var s = 2 * t[m];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var g = s,
                            _ = 100 * g + 155,
                            v = g * g * 255,
                            y = g * g * g * g * 128;
                        o[4 * m + 0] = _, o[4 * m + 1] = v, o[4 * m + 2] = y, o[4 * m + 3] = 255
                    }
                }
            };
            return l;*/
	
	           var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("waterTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = 1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1,a.alpha=0.7;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 0 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
							
                            for (var s = 0, c = e - 1; c <= e + 1; c++) {
                                var u = 15 & c,
                                    l = 15 & a;
                                s += t[u + 16 * l]
                            }
                            i[e + 16 * a] = s / 3.3 + .8 * n[e + 16 * a]
                        }
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) n[e + 16 * a] += .05 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .1, Math.random() < .05 && (r[e + 16 * a] = .5);
                    var h = i;
                    i = t, t = h;
                    for (var f = 0; f < 256; f++) {
                        var s = t[f];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var d = s * s,
                            p = 32 + 32 * d,
                            m = 50 + 64 * d,
                            g = 196 + 50 * d;
                        o[4 * f + 0] = p, o[4 * f + 1] = m, o[4 * f + 2] = 255, o[4 * f + 3] = g
                    }
                }
            };
			return a;
	
	
	
	
}



/***/ }),

/***/ "./blockDef/railside.js":
/*!******************************!*\
  !*** ./blockDef/railside.js ***!
  \******************************/
/*! exports provided: railside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "railside", function() { return railside; });
var trapjson=null

function railside(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
			
			var mesh = BABYLON.Mesh.CreatePlane('sprite-' + name, 1, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = new BABYLON.Texture('texPack/'+funpack+'/blocks/railside.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0, 0); mesh.rotation.x = 1.57;

		mesh.bakeTransformIntoVertices(offset)
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
							
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }



/***/ }),

/***/ "./blockDef/slant.js":
/*!***************************!*\
  !*** ./blockDef/slant.js ***!
  \***************************/
/*! exports provided: slant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slant", function() { return slant; });
var trapjson=null
var mesh=null
function slant(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
	
		var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = waterytexture(noa)
			
				BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/"+name+"/"+name+".babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							  
						}
			
			//mesh.material=mat
			mesh.scaling.x=0.5
			mesh.scaling.z=0.5
	
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
						
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y-0.2//+trapjson[c][j][1]=y-0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				//mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				//mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				//mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				
				            for (var i=0;i<7;i++){
								if(noa.getBlock(x+i,y,z+i)==blocks['watersource'] ){
								console.log('bingooslant')
								mesh2.position.y=y-((i+1)/10)
								 mesh2.rotation.y=Math.PI/2
							}
								
							}
							
							
								for (var i=0;i<7;i++){
								if(noa.getBlock(x-i,y,z-i)==blocks['watersource'] ){
								console.log('bingooslantyyy')
								mesh2.position.y=y-((i+1)/10)
								 mesh2.rotation.y=-Math.PI/2
							}
								
							}
							
									for (var i=0;i<7;i++){
								if(noa.getBlock(x+i,y,z-i)==blocks['watersource'] ){
								console.log('bingooslantyyy')
								mesh2.position.y=y-((i+1)/10)
								 mesh2.rotation.y=-Math.PI
							}
								
							}
				
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
			
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
		
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			});
			
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }
 
 function waterytexture(noa){
	
	      /*  var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("lavaTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = !1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 1 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 2 / 16), u = 1.2 * Math.sin(e * Math.PI * 2 / 16), l = e - 1; l <= e + 1; l++)
                                for (var h = a - 1; h <= a + 1; h++) {
                                    var f = l + c & 15,
                                        d = h + u & 15;
                                    s += t[f + 16 * d]
                                }
                          i[e + 16 * a] = s / 10 + (n[(e + 0 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 1 & 15)] + n[(e + 0 & 15) + 16 * (a + 1 & 15)]) / 4 * .8, n[e + 16 * a] += .01 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .06, Math.random() < .005 && (r[e + 16 * a] = 1.5)
                        }
                    var p = i;
                    i = t, t = p;
                    for (var m = 0; m < 256; m++) {
                        var s = 2 * t[m];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var g = s,
                            _ = 100 * g + 155,
                            v = g * g * 255,
                            y = g * g * g * g * 128;
                        o[4 * m + 0] = _, o[4 * m + 1] = v, o[4 * m + 2] = y, o[4 * m + 3] = 255
                    }
                }
            };
            return l;*/
	
	           var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("waterTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = 1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1,a.alpha=0.7;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 0 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
							
                            for (var s = 0, c = e - 1; c <= e + 1; c++) {
                                var u = 15 & c,
                                    l = 15 & a;
                                s += t[u + 16 * l]
                            }
                            i[e + 16 * a] = s / 3.3 + .8 * n[e + 16 * a]
                        }
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) n[e + 16 * a] += .05 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .1, Math.random() < .05 && (r[e + 16 * a] = .5);
                    var h = i;
                    i = t, t = h;
                    for (var f = 0; f < 256; f++) {
                        var s = t[f];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var d = s * s,
                            p = 32 + 32 * d,
                            m = 50 + 64 * d,
                            g = 196 + 50 * d;
                        o[4 * f + 0] = p, o[4 * f + 1] = m, o[4 * f + 2] = 255, o[4 * f + 3] = g
                    }
                }
            };
			return a;
	
	
	
	
}



/***/ }),

/***/ "./blockDef/stairs.js":
/*!****************************!*\
  !*** ./blockDef/stairs.js ***!
  \****************************/
/*! exports provided: stairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairs", function() { return stairs; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");



var stairjson=null
var directions={"0":"north","1":"south","2":"east","3":"west"}
var namer='table'
global.offmeshes=[]
var boptions=[localStorage.getItem('rotations')]
function stairs(noa,options,id,texture,e){

	var scene=noa.rendering.getScene()
	options={solid: true, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	stairjson=e
	
	
	namer=e.name
	          
			  
			  /*var mat = noa.rendering.makeStandardMaterial('cool')
		
			
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/leaves.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			
			
			mat.diffuseTexture = tex
			
			var mesh=null
			
			BABYLON.SceneLoader.ImportMesh("", "",'texPack/'+funpack+ "/models/"+namer+"/"+namer+".babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							    var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							 mesh.material=mat
							  
							  
						}*/
						
						var imageheight=16
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0.0625,0.125,0.125,0.375),//right
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0,0.125,0.046,0.375),//left
	new BABYLON.Vector4(pixelx*0,-pixely*(8+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 0.5,
		depth:1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('texPack/'+funpack+'/blocks/floor.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
			mat.diffuseTexture.hasAlpha=true;
			mat.diffuseTexture.Alpha=0.5
			mat.Alpha=0.5
			mat.backFaceCulling=false
		
			mesh.material=mat
			
				var topmesh=mesh.clone('top')
			
			topmesh.position.y+=0.5
		    topmesh.rotation.x=Math.PI/2
			topmesh.scaling.x=0.99
			topmesh.scaling.y=0.99
			//topmesh.position.z+=0.25
			//mesh.position.y+=0.5
				var offset = BABYLON.Matrix.Translation(0, 0.25, 0)
	        mesh.bakeTransformIntoVertices(offset)
			topmesh.setParent(mesh)
			
		
		    var finOpts = options
	
			
			finOpts.onLoad= function ( x, y, z) {
			
				
			var mesh2=mesh.clone('kelp')
			
			
		  
				
				//cubes['door']=mesh2
				var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
				var detail="Close"//
			var j="Close"
			
			setTimeout(function(){  
			
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
			
				c=directions[c]
				//return;
					
			 //c='Close'
			 j='Close'
				mesh2.position.x=x+stairjson[c][j][0]//0.5
				mesh2.position.y=y+stairjson[c][j][1]
				mesh2.position.z=z+stairjson[c][j][2]//0.5//
				
				mesh2.rotation.x=stairjson[c][j+'rotation'][0]
				mesh2.rotation.y=stairjson[c][j+'rotation'][1]
				mesh2.rotation.z=stairjson[c][j+'rotation'][2]
				
				mesh2.name='hitbox:stairs:'+c+':'+JSON.stringify([x,y,z])
				
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				offmeshes.push([[x,y,z],mesh2])
				
				
				
				}, 300);
			}
			
			
			
			
			
			
			finOpts.onSet= function ( x, y, z) {
				
		
				var mesh2=mesh.clone('stairs')
				
			
		//console.log(mesh2._children[0])
				
				
				
					var j="Close"
				
				var c=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
				
				var ids=noa.world._getChunkByCoords(x, y, z).requestID
				
				setTimeout(function(){  
				
				c=rtcblocklist[ids][x+'|'+y+'|'+z][4]
				
					c=directions[c]
				
				mesh2.position.x=x+0.5//+stairjson[c][j][0]//0.5
				mesh2.position.y=y//+stairjson[c][j][1]
				mesh2.position.z=z+0.5//+stairjson[c][j][2]//0.5//
				
				mesh2.rotation.x=stairjson[c][j+'rotation'][0]
				mesh2.rotation.y=stairjson[c][j+'rotation'][1]
				mesh2.rotation.z=stairjson[c][j+'rotation'][2]
				
				mesh2.name='hitbox:stairs:'+c+':'+JSON.stringify([x,y,z])
				mesh2.checkCollisions=true
				mesh2._children[0].checkCollisions=true
				console.log(mesh2._children[0].name)
				noa.rendering.addMeshToScene(mesh2, false)
				noa.rendering.addMeshToScene(mesh2._children[0], false)
				offmeshes.push([[x,y,z],mesh2])
				
				}, 300);
				
			}
			
			finOpts.onUnload= function ( x, y, z)  { removemesh(x,y,z)}
			finOpts.onUnset= function ( x, y, z) { removemesh(x,y,z)}
				
			
		
			 function removemesh(x,y,z){
				 for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						c.name='lol'
						scene.removeMesh(c);
						scene.removeMesh(c._children[0]);
						scene.removeMesh(c._children[1]);
						
					}
				}
				 
			 }
			 
			
			noa.registry.registerBlock(id, finOpts)
			
			 //});
			 
			 return id;
	
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./blockDef/waterside.js":
/*!*******************************!*\
  !*** ./blockDef/waterside.js ***!
  \*******************************/
/*! exports provided: waterside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterside", function() { return waterside; });
var trapjson=null
var mesh=null
function waterside(noa,options,id,name,e){
	name='waterside'
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
			
			//var mesh = BABYLON.MeshBuilder.CreatePlane('sprite-' + name, {size:1,updatable:true}, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = waterytexture(noa)//new BABYLON.Texture('texPack/'+funpack+'/blocks/rail.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			
				BABYLON.SceneLoader.ImportMesh("", "","texPack/"+funpack+"/models/"+name+"/"+name+".babylon", scene, function (meshes) { 
						 

								for (var i=0;i<meshes.length;i++){
							
							
							  meshes[i].material=mat;
							  
							  
							   // var offset = BABYLON.Matrix.Translation(0, 0, 0)
	      //  meshes[0].bakeTransformIntoVertices(offset)

							  
							  
							  
							  mesh=meshes[0]
							  
						}
			
			//mesh.material=mat
			mesh.scaling.x=0.5
			mesh.scaling.z=0.5
	
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
							
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				blockPick=22
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y-0.1//+trapjson[c][j][1]//
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
			//	mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				//mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				//mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
							/*if(noa.getBlock(x,y,z-1)==id ){
								console.log('bingo')
							}*/
							
							for (var i=0;i<7;i++){
								if(noa.getBlock(x,y,z+i)==blocks['watersource'] ){
								console.log('bingoo')
								mesh2.position.y=y-((i+1)/10)
								
							}
								
							}
							
								for (var i=0;i<7;i++){
								if(noa.getBlock(x,y,z-i)==blocks['watersource'] ){
								console.log('bingoo')
								mesh2.position.y=y-((i+1)/10)
								mesh2.rotation.y=Math.PI
							}
								
							}
							
							for (var i=0;i<7;i++){
								if(noa.getBlock(x+i,y,z)==blocks['watersource']){
								console.log('bingaa')
								mesh2.position.y=y-((i+1)/10)
								mesh2.rotation.y=Math.PI/2
							}
								
							}
							for (var i=0;i<7;i++){
								if(noa.getBlock(x-i,y,z)==blocks['watersource'] ){
								console.log('bingaa')
								mesh2.position.y=y-((i+1)/10)
								mesh2.rotation.y=-Math.PI/2
							}
								
							}
							/*if(noa.getBlock(x,y,z+1)==id ){
								console.log('bingoo')
								mesh2.position.y=y-0.2
							}
							
							if( noa.getBlock(x,y,z+2)==id ){
								console.log('bingoo')
								mesh2.position.y=y-0.3
							}
							
							if(&& noa.getBlock(x,y,z+3)==id ){
								console.log('bingoo')
								mesh2.position.y=y-0.4
							}
							if( noa.getBlock(x,y,z+4)==id  ){
								console.log('bingoo')
								mesh2.position.y=y-0.5
							}*/
				
				/*if(noa.getBlock(x,y+1,z-1)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				  else if(noa.getBlock(x,y+1,z+1)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				   else if(noa.getBlock(x-1,y+1,z)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=-Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				    else if(noa.getBlock(x+1,y+1,z)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						   
				 }
				 
				 
				 setTimeout(function(){  
				
			     if(noa.world.getBlockID(x,y,z+1)==id && noa.world.getBlockID(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
					console.log('makkk')
				}	
				
				if(noa.world.getBlockID(x,y,z-1)==id && noa.world.getBlockID(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				
				if(noa.world.getBlockID(x,y,z+1)==id && noa.world.getBlockID(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				if(noa.world.getBlockID(x,y,z-1)==id && noa.world.getBlockID(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				
				}, 1000);*/
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				/*setTimeout(function(){ 
					if(noa.getBlock(x,y+1,z-1)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				  else if(noa.getBlock(x,y+1,z+1)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				else if(noa.getBlock(x-1,y+1,z)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=-Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				 else if(noa.getBlock(x+1,y+1,z)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				 
				 	setTimeout(function(){  
				
			     if(noa.getBlock(x,y,z+1)==id && noa.getBlock(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}	
				
				if(noa.getBlock(x,y,z-1)==id && noa.getBlock(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				
				if(noa.getBlock(x,y,z+1)==id && noa.getBlock(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				if(noa.getBlock(x,y,z-1)==id && noa.getBlock(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				
				}, 1000);*/
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
					//}, 3000);
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			 });
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }
 
 function waterytexture(noa){
	
	      /*  var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("lavaTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = !1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 1 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 2 / 16), u = 1.2 * Math.sin(e * Math.PI * 2 / 16), l = e - 1; l <= e + 1; l++)
                                for (var h = a - 1; h <= a + 1; h++) {
                                    var f = l + c & 15,
                                        d = h + u & 15;
                                    s += t[f + 16 * d]
                                }
                          i[e + 16 * a] = s / 10 + (n[(e + 0 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 1 & 15)] + n[(e + 0 & 15) + 16 * (a + 1 & 15)]) / 4 * .8, n[e + 16 * a] += .01 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .06, Math.random() < .005 && (r[e + 16 * a] = 1.5)
                        }
                    var p = i;
                    i = t, t = p;
                    for (var m = 0; m < 256; m++) {
                        var s = 2 * t[m];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var g = s,
                            _ = 100 * g + 155,
                            v = g * g * 255,
                            y = g * g * g * g * 128;
                        o[4 * m + 0] = _, o[4 * m + 1] = v, o[4 * m + 2] = y, o[4 * m + 3] = 255
                    }
                }
            };
            return l;*/
	
	           var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("waterTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = 1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1,a.alpha=0.7;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 0 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
							
                            for (var s = 0, c = e - 1; c <= e + 1; c++) {
                                var u = 15 & c,
                                    l = 15 & a;
                                s += t[u + 16 * l]
                            }
                            i[e + 16 * a] = s / 3.3 + .8 * n[e + 16 * a]
                        }
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) n[e + 16 * a] += .05 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .1, Math.random() < .05 && (r[e + 16 * a] = .5);
                    var h = i;
                    i = t, t = h;
                    for (var f = 0; f < 256; f++) {
                        var s = t[f];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var d = s * s,
                            p = 32 + 32 * d,
                            m = 50 + 64 * d,
                            g = 196 + 50 * d;
                        o[4 * f + 0] = p, o[4 * f + 1] = m, o[4 * f + 2] = 255, o[4 * f + 3] = g
                    }
                }
            };
			return a;
	
	
	
	
}



/***/ }),

/***/ "./blockDef/watersource.js":
/*!*********************************!*\
  !*** ./blockDef/watersource.js ***!
  \*********************************/
/*! exports provided: watersource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watersource", function() { return watersource; });
var trapjson=null

function watersource(noa,options,id,name,e){
	options={solid: false, opaque: false ,material:'stairs',onCustomMeshCreate:null}
	trapjson=e
	//console.log(e)
	var scene=noa.rendering.getScene()
			
			var mesh = BABYLON.Mesh.CreatePlane('sprite-' + name, 1, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat= noa.rendering.makeStandardMaterial(name)
			
			mat.diffuseTexture = waterytexture(noa)//new BABYLON.Texture('texPack/'+funpack+'/blocks/rail.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mesh.material=mat
			var offset = BABYLON.Matrix.Translation(0, 0, 0); mesh.rotation.x = 1.57;

		mesh.bakeTransformIntoVertices(offset)
		
		mat.backFaceCulling=false
		mat.diffuseTexture.hasAlpha=true
	        
			var finOpts = options
					
						
						
							
							
							
							
							
							finOpts.onSet= function ( x, y, z) {
				blockPick=20
				
				var mesh2=mesh.clone('kelp')
			var c=blocklook(noa)
			
			var detail="Close"//
			var j="Close"
			
			
			
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.8
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				
				if(noa.getBlock(x,y+1,z-1)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				  else if(noa.getBlock(x,y+1,z+1)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				   else if(noa.getBlock(x-1,y+1,z)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=-Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				    else if(noa.getBlock(x+1,y+1,z)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						   
				 }
				 
				 
				 setTimeout(function(){  
				
			     if(noa.world.getBlockID(x,y,z+1)==id && noa.world.getBlockID(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
					console.log('makkk')
				}	
				
				if(noa.world.getBlockID(x,y,z-1)==id && noa.world.getBlockID(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				
				if(noa.world.getBlockID(x,y,z+1)==id && noa.world.getBlockID(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				if(noa.world.getBlockID(x,y,z-1)==id && noa.world.getBlockID(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],x,y,z)
				}
				
				}, 1000);
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
				
			
				
			}
			finOpts.onLoad= function ( x, y, z) {
				
			
			
				var mesh2=mesh.clone('kelp')
			var c=null
			
			var detail="Close"//
			var j="Close"
	           
		
			
				mesh2.position.x=x+trapjson[c][j][0]//0.5
				mesh2.position.y=y+trapjson[c][j][1]+0.1
				mesh2.position.z=z+trapjson[c][j][2]//0.5//
				
				mesh2.rotation.x=trapjson[c][j+'rotation'][0]
				mesh2.rotation.y=trapjson[c][j+'rotation'][1]
				mesh2.rotation.z=trapjson[c][j+'rotation'][2]//////
				
				setTimeout(function(){ 
					if(noa.getBlock(x,y+1,z-1)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				  else if(noa.getBlock(x,y+1,z+1)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				else if(noa.getBlock(x-1,y+1,z)==id  ){
					 console.log('cool man')
						  mesh2.rotation.x=0
					    mesh2.rotation.x=-Math.PI/4
						mesh2.scaling.y=Math.hypot(1,1);
						mesh2.position.y+=0.5;
						 
						 
				 }
				 else if(noa.getBlock(x+1,y+1,z)==id  ){
					   console.log('cool mano')
					  mesh2.rotation.x=0
					
						 mesh2.rotation.x=-Math.PI/4
						 mesh2.scaling.y=Math.hypot(1,1);
						 mesh2.position.y+=0.5;
						   
				 }
				 
				 
				 	setTimeout(function(){  
				
			     if(noa.getBlock(x,y,z+1)==id && noa.getBlock(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}	
				
				if(noa.getBlock(x,y,z-1)==id && noa.getBlock(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				
				if(noa.getBlock(x,y,z+1)==id && noa.getBlock(x+1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				if(noa.getBlock(x,y,z-1)==id && noa.getBlock(x-1,y,z)==id ){
					noa.setBlock(blocks['railside'],[x,y,z])
				}
				
				}, 1000);
			
				noa.rendering.addMeshToScene(mesh2, false)
				offmeshes.push([[x,y,z],mesh2])
					}, 3000);
			
				
			}
			finOpts.onUnload= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						
						scene.removeMesh(c);
						
					}
				}
			}
			finOpts.onUnset= function ( x, y, z) {
				
				
				
				for (var i=0;i<offmeshes.length;i++){
					
					if(JSON.stringify(offmeshes[i][0])==JSON.stringify([x,y,z])){
						
						var c=offmeshes[i][1]
						
						scene.removeMesh(c);
						
					}
				}
			}
									
			
			
			noa.registry.registerBlock(id, finOpts)
						
						return id;
			
			
	
}

function blocklook(noa){
	var up=false
	var playerp=noa.ents.getState(noa.playerEntity, noa.entities.names.position).position
	
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)//	// 

		 
		 if(rad>320  || rad <50){
	//viewdirection=[Math.PI/2,Math.PI,0,[0,0,-0.40]]
	
	viewdirection='north'//[Math.PI/2,Math.PI,0,[0,0,0.5]]///
	
	//'north'
	
}
if(rad>130 && rad<230){
	//viewdirection=[Math.PI/2,0,0,[0,0,0.40]]
	viewdirection='south'//[Math.PI/2,0,0,[0,0,-0.5]]
	//'south'
	
}
if(rad>50 && rad<130){
	//viewdirection=[Math.PI/2,-Math.PI/2,0,[-0.4,0,0]]///
	viewdirection='east'//[Math.PI/2,-Math.PI/2,0,[0.5,0,0]]///
	//'left'
	
	
}

if(rad>230 && rad<320){
	//viewdirection=[Math.PI/2,Math.PI/2,0,[0.4,0,0]]
	viewdirection='west'//[Math.PI/2,Math.PI/2,0,[-0.5,0,0]]
	//'right'
	
}
return viewdirection;

 }
 
 function waterytexture(noa){
	
	      /*  var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("lavaTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = !1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 1 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 2 / 16), u = 1.2 * Math.sin(e * Math.PI * 2 / 16), l = e - 1; l <= e + 1; l++)
                                for (var h = a - 1; h <= a + 1; h++) {
                                    var f = l + c & 15,
                                        d = h + u & 15;
                                    s += t[f + 16 * d]
                                }
                          i[e + 16 * a] = s / 10 + (n[(e + 0 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 1 & 15)] + n[(e + 0 & 15) + 16 * (a + 1 & 15)]) / 4 * .8, n[e + 16 * a] += .01 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .06, Math.random() < .005 && (r[e + 16 * a] = 1.5)
                        }
                    var p = i;
                    i = t, t = p;
                    for (var m = 0; m < 256; m++) {
                        var s = 2 * t[m];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var g = s,
                            _ = 100 * g + 155,
                            v = g * g * 255,
                            y = g * g * g * g * 128;
                        o[4 * m + 0] = _, o[4 * m + 1] = v, o[4 * m + 2] = y, o[4 * m + 3] = 255
                    }
                }
            };
            return l;*/
	
	           var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("waterTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = 1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1,a.alpha=0.7;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 0 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
							
                            for (var s = 0, c = e - 1; c <= e + 1; c++) {
                                var u = 15 & c,
                                    l = 15 & a;
                                s += t[u + 16 * l]
                            }
                            i[e + 16 * a] = s / 3.3 + .8 * n[e + 16 * a]
                        }
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) n[e + 16 * a] += .05 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .1, Math.random() < .05 && (r[e + 16 * a] = .5);
                    var h = i;
                    i = t, t = h;
                    for (var f = 0; f < 256; f++) {
                        var s = t[f];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var d = s * s,
                            p = 32 + 32 * d,
                            m = 50 + 64 * d,
                            g = 196 + 50 * d;
                        o[4 * f + 0] = p, o[4 * f + 1] = m, o[4 * f + 2] = 255, o[4 * f + 3] = g
                    }
                }
            };
			return a;
	
	
	
	
}



/***/ }),

/***/ "./blocklook.js":
/*!**********************!*\
  !*** ./blocklook.js ***!
  \**********************/
/*! exports provided: blocklook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blocklook", function() { return blocklook; });
function blocklook(noa){
	
	var viewdirection=null
	 var rad=BABYLON.Tools.ToDegrees(noa.camera.heading)

		 
		 if(rad>320  || rad <50){
	
	
	viewdirection='north'
	
	
	
}
if(rad>130 && rad<230){
	
	viewdirection='south'
	
	
}
if(rad>50 && rad<130){
	
	viewdirection='east'
	
	
	
}

if(rad>230 && rad<320){
	
	viewdirection='west'

	
}
return viewdirection;

 }
 


/***/ }),

/***/ "./builds.js":
/*!*******************!*\
  !*** ./builds.js ***!
  \*******************/
/*! exports provided: builds, createBuild, clearBuild, pasteBuild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "builds", function() { return builds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBuild", function() { return createBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearBuild", function() { return clearBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pasteBuild", function() { return pasteBuild; });
/* harmony import */ var _ent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ent */ "./ent.js");
var config=__webpack_require__(/*! ./builds/castle.json */ "./builds/castle.json")


function getHighestBuildBlock( x, z) {
	for (var y = 120- 1; y >= 0; y = y - 1) {
		var val = noa.world.getBlockID(x, y, z)
		if (val != 0 && val != 9) return {level: y, block: val}
	}
	return null
}



function builds(id){
	
		 
}




var buildnum=0
var build={}
var buildsize=10
function createBuild(){
	
	for (var i=0;i<buildsize;i++){
			
			for (var j=0;j<buildsize;j++){
				
						for (var k=0;k<buildsize;k++){
					var c=noa.world.getBlockID(i,j,k)
					
					
						build[buildnum]=[c,i,j,k]
						buildnum++
					
				}
			
		}
			
		}
		
		console.log(JSON.stringify(build))
	
	
	
}
function clearBuild(){
	
	for (var i=0;i<buildsize;i++){
			
			for (var j=0;j<buildsize;j++){
				
						for (var k=0;k<buildsize;k++){
					var c=noa.world.getBlockID(i,j,k)
					
					if(c!==blocks['grass']){
						noa.setBlock(0,i,j,k)
						//buildnum++
					}
				}
			
		}
			
		}
		
		console.log(JSON.stringify(build))
	
	
	
}

function pasteBuild(x,y,z,facing){
	
		
	if(facing=='north'){
		
		
	for(const key in config){
			//setTimeout(function(){ 
			noa.setBlock(config[key][0],config[key][1]+Math.round(x)-5,config[key][2]+Math.round(y),config[key][3]+Math.round(z)-5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				Object(_ent__WEBPACK_IMPORTED_MODULE_0__["makeEnt"])(noa,'cow',1,[config[key][1]+Math.round(x),config[key][2]+Math.round(y),config[key][3]+Math.round(z)])
			}
			// }, 500);
		}
		
	}
	
	if(facing=='south'){
		
		
	for(const key in config){
			noa.setBlock(config[key][0],-config[key][1]+Math.round(x)+5,config[key][2]+Math.round(y),-config[key][3]+Math.round(z)+5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				Object(_ent__WEBPACK_IMPORTED_MODULE_0__["makeEnt"])(noa,'cow',1,[-config[key][1]+Math.round(x),config[key][2]+Math.round(y),-config[key][3]+Math.round(z)])
			}
		}
		
	}

	if(facing=='east'){
	for(const key in config){
			
			noa.setBlock(config[key][0],config[key][3]+Math.round(x)-5,config[key][2]+Math.round(y),config[key][1]+Math.round(z)-5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				Object(_ent__WEBPACK_IMPORTED_MODULE_0__["makeEnt"])(noa,'cow',1,[config[key][3]+Math.round(x),config[key][2]+Math.round(y),config[key][1]+Math.round(z)-5])
			}
			
		}
		
	}
	
	if(facing=='west'){
		
		
	for(const key in config){
			
			noa.setBlock(config[key][0],-config[key][3]+Math.round(x)+5,config[key][2]+Math.round(y),-config[key][1]+Math.round(z)+5)
			
			if(config[key][1]==5 && config[key][2]==1 && config[key][3]==5){
				
				Object(_ent__WEBPACK_IMPORTED_MODULE_0__["makeEnt"])(noa,'cow',1,[-config[key][3]+Math.round(x),config[key][2]+Math.round(y),-config[key][1]+Math.round(z)])
			}
		}
		
	}
	
	
	
	
	
	
}



/***/ }),

/***/ "./builds/castle.json":
/*!****************************!*\
  !*** ./builds/castle.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":[1,0,0,0],\"1\":[1,0,0,1],\"2\":[1,0,0,2],\"3\":[1,0,0,3],\"4\":[1,0,0,4],\"5\":[1,0,0,5],\"6\":[1,0,0,6],\"7\":[1,0,0,7],\"8\":[1,0,0,8],\"9\":[1,0,0,9],\"10\":[3,0,1,0],\"11\":[3,0,1,1],\"12\":[3,0,1,2],\"13\":[3,0,1,3],\"14\":[3,0,1,4],\"15\":[3,0,1,5],\"16\":[3,0,1,6],\"17\":[3,0,1,7],\"18\":[0,0,1,8],\"19\":[0,0,1,9],\"20\":[3,0,2,0],\"21\":[3,0,2,1],\"22\":[3,0,2,2],\"23\":[3,0,2,3],\"24\":[3,0,2,4],\"25\":[3,0,2,5],\"26\":[3,0,2,6],\"27\":[3,0,2,7],\"28\":[0,0,2,8],\"29\":[0,0,2,9],\"30\":[3,0,3,0],\"31\":[3,0,3,1],\"32\":[0,0,3,2],\"33\":[0,0,3,3],\"34\":[3,0,3,4],\"35\":[3,0,3,5],\"36\":[3,0,3,6],\"37\":[3,0,3,7],\"38\":[0,0,3,8],\"39\":[0,0,3,9],\"40\":[3,0,4,0],\"41\":[3,0,4,1],\"42\":[3,0,4,2],\"43\":[3,0,4,3],\"44\":[3,0,4,4],\"45\":[3,0,4,5],\"46\":[3,0,4,6],\"47\":[3,0,4,7],\"48\":[0,0,4,8],\"49\":[0,0,4,9],\"50\":[3,0,5,0],\"51\":[3,0,5,1],\"52\":[0,0,5,2],\"53\":[0,0,5,3],\"54\":[3,0,5,4],\"55\":[0,0,5,5],\"56\":[0,0,5,6],\"57\":[3,0,5,7],\"58\":[0,0,5,8],\"59\":[0,0,5,9],\"60\":[3,0,6,0],\"61\":[0,0,6,1],\"62\":[0,0,6,2],\"63\":[0,0,6,3],\"64\":[0,0,6,4],\"65\":[0,0,6,5],\"66\":[0,0,6,6],\"67\":[0,0,6,7],\"68\":[0,0,6,8],\"69\":[0,0,6,9],\"70\":[0,0,7,0],\"71\":[0,0,7,1],\"72\":[0,0,7,2],\"73\":[0,0,7,3],\"74\":[0,0,7,4],\"75\":[0,0,7,5],\"76\":[0,0,7,6],\"77\":[0,0,7,7],\"78\":[0,0,7,8],\"79\":[0,0,7,9],\"80\":[0,0,8,0],\"81\":[0,0,8,1],\"82\":[0,0,8,2],\"83\":[0,0,8,3],\"84\":[0,0,8,4],\"85\":[0,0,8,5],\"86\":[0,0,8,6],\"87\":[0,0,8,7],\"88\":[0,0,8,8],\"89\":[0,0,8,9],\"90\":[0,0,9,0],\"91\":[0,0,9,1],\"92\":[0,0,9,2],\"93\":[0,0,9,3],\"94\":[0,0,9,4],\"95\":[0,0,9,5],\"96\":[0,0,9,6],\"97\":[0,0,9,7],\"98\":[0,0,9,8],\"99\":[0,0,9,9],\"100\":[1,1,0,0],\"101\":[1,1,0,1],\"102\":[1,1,0,2],\"103\":[1,1,0,3],\"104\":[1,1,0,4],\"105\":[1,1,0,5],\"106\":[1,1,0,6],\"107\":[1,1,0,7],\"108\":[1,1,0,8],\"109\":[1,1,0,9],\"110\":[3,1,1,0],\"111\":[0,1,1,1],\"112\":[0,1,1,2],\"113\":[0,1,1,3],\"114\":[0,1,1,4],\"115\":[0,1,1,5],\"116\":[26,1,1,6],\"117\":[3,1,1,7],\"118\":[0,1,1,8],\"119\":[0,1,1,9],\"120\":[3,1,2,0],\"121\":[0,1,2,1],\"122\":[0,1,2,2],\"123\":[0,1,2,3],\"124\":[0,1,2,4],\"125\":[0,1,2,5],\"126\":[0,1,2,6],\"127\":[3,1,2,7],\"128\":[0,1,2,8],\"129\":[0,1,2,9],\"130\":[3,1,3,0],\"131\":[0,1,3,1],\"132\":[0,1,3,2],\"133\":[0,1,3,3],\"134\":[0,1,3,4],\"135\":[0,1,3,5],\"136\":[0,1,3,6],\"137\":[3,1,3,7],\"138\":[0,1,3,8],\"139\":[0,1,3,9],\"140\":[3,1,4,0],\"141\":[0,1,4,1],\"142\":[0,1,4,2],\"143\":[0,1,4,3],\"144\":[0,1,4,4],\"145\":[0,1,4,5],\"146\":[0,1,4,6],\"147\":[3,1,4,7],\"148\":[0,1,4,8],\"149\":[0,1,4,9],\"150\":[3,1,5,0],\"151\":[0,1,5,1],\"152\":[0,1,5,2],\"153\":[0,1,5,3],\"154\":[0,1,5,4],\"155\":[0,1,5,5],\"156\":[0,1,5,6],\"157\":[0,1,5,7],\"158\":[0,1,5,8],\"159\":[0,1,5,9],\"160\":[3,1,6,0],\"161\":[0,1,6,1],\"162\":[0,1,6,2],\"163\":[0,1,6,3],\"164\":[0,1,6,4],\"165\":[0,1,6,5],\"166\":[0,1,6,6],\"167\":[0,1,6,7],\"168\":[0,1,6,8],\"169\":[0,1,6,9],\"170\":[0,1,7,0],\"171\":[0,1,7,1],\"172\":[0,1,7,2],\"173\":[0,1,7,3],\"174\":[0,1,7,4],\"175\":[0,1,7,5],\"176\":[0,1,7,6],\"177\":[0,1,7,7],\"178\":[0,1,7,8],\"179\":[0,1,7,9],\"180\":[0,1,8,0],\"181\":[0,1,8,1],\"182\":[0,1,8,2],\"183\":[0,1,8,3],\"184\":[0,1,8,4],\"185\":[0,1,8,5],\"186\":[0,1,8,6],\"187\":[0,1,8,7],\"188\":[0,1,8,8],\"189\":[0,1,8,9],\"190\":[0,1,9,0],\"191\":[0,1,9,1],\"192\":[0,1,9,2],\"193\":[0,1,9,3],\"194\":[0,1,9,4],\"195\":[0,1,9,5],\"196\":[0,1,9,6],\"197\":[0,1,9,7],\"198\":[0,1,9,8],\"199\":[0,1,9,9],\"200\":[1,2,0,0],\"201\":[1,2,0,1],\"202\":[1,2,0,2],\"203\":[1,2,0,3],\"204\":[1,2,0,4],\"205\":[1,2,0,5],\"206\":[0,2,0,6],\"207\":[1,2,0,7],\"208\":[1,2,0,8],\"209\":[1,2,0,9],\"210\":[3,2,1,0],\"211\":[0,2,1,1],\"212\":[0,2,1,2],\"213\":[0,2,1,3],\"214\":[0,2,1,4],\"215\":[0,2,1,5],\"216\":[26,2,1,6],\"217\":[3,2,1,7],\"218\":[0,2,1,8],\"219\":[0,2,1,9],\"220\":[3,2,2,0],\"221\":[0,2,2,1],\"222\":[0,2,2,2],\"223\":[0,2,2,3],\"224\":[0,2,2,4],\"225\":[0,2,2,5],\"226\":[0,2,2,6],\"227\":[0,2,2,7],\"228\":[0,2,2,8],\"229\":[0,2,2,9],\"230\":[3,2,3,0],\"231\":[0,2,3,1],\"232\":[0,2,3,2],\"233\":[0,2,3,3],\"234\":[0,2,3,4],\"235\":[0,2,3,5],\"236\":[0,2,3,6],\"237\":[3,2,3,7],\"238\":[0,2,3,8],\"239\":[0,2,3,9],\"240\":[3,2,4,0],\"241\":[0,2,4,1],\"242\":[0,2,4,2],\"243\":[0,2,4,3],\"244\":[0,2,4,4],\"245\":[0,2,4,5],\"246\":[0,2,4,6],\"247\":[0,2,4,7],\"248\":[0,2,4,8],\"249\":[0,2,4,9],\"250\":[3,2,5,0],\"251\":[0,2,5,1],\"252\":[0,2,5,2],\"253\":[0,2,5,3],\"254\":[0,2,5,4],\"255\":[0,2,5,5],\"256\":[0,2,5,6],\"257\":[0,2,5,7],\"258\":[0,2,5,8],\"259\":[0,2,5,9],\"260\":[0,2,6,0],\"261\":[0,2,6,1],\"262\":[0,2,6,2],\"263\":[0,2,6,3],\"264\":[0,2,6,4],\"265\":[0,2,6,5],\"266\":[0,2,6,6],\"267\":[0,2,6,7],\"268\":[0,2,6,8],\"269\":[0,2,6,9],\"270\":[0,2,7,0],\"271\":[0,2,7,1],\"272\":[0,2,7,2],\"273\":[0,2,7,3],\"274\":[0,2,7,4],\"275\":[0,2,7,5],\"276\":[0,2,7,6],\"277\":[0,2,7,7],\"278\":[0,2,7,8],\"279\":[0,2,7,9],\"280\":[0,2,8,0],\"281\":[0,2,8,1],\"282\":[0,2,8,2],\"283\":[0,2,8,3],\"284\":[0,2,8,4],\"285\":[0,2,8,5],\"286\":[0,2,8,6],\"287\":[0,2,8,7],\"288\":[0,2,8,8],\"289\":[0,2,8,9],\"290\":[0,2,9,0],\"291\":[0,2,9,1],\"292\":[0,2,9,2],\"293\":[0,2,9,3],\"294\":[0,2,9,4],\"295\":[0,2,9,5],\"296\":[0,2,9,6],\"297\":[0,2,9,7],\"298\":[0,2,9,8],\"299\":[0,2,9,9],\"300\":[1,3,0,0],\"301\":[1,3,0,1],\"302\":[1,3,0,2],\"303\":[1,3,0,3],\"304\":[1,3,0,4],\"305\":[1,3,0,5],\"306\":[1,3,0,6],\"307\":[1,3,0,7],\"308\":[1,3,0,8],\"309\":[1,3,0,9],\"310\":[26,3,1,0],\"311\":[0,3,1,1],\"312\":[0,3,1,2],\"313\":[0,3,1,3],\"314\":[0,3,1,4],\"315\":[0,3,1,5],\"316\":[26,3,1,6],\"317\":[3,3,1,7],\"318\":[0,3,1,8],\"319\":[0,3,1,9],\"320\":[0,3,2,0],\"321\":[0,3,2,1],\"322\":[0,3,2,2],\"323\":[0,3,2,3],\"324\":[0,3,2,4],\"325\":[0,3,2,5],\"326\":[0,3,2,6],\"327\":[3,3,2,7],\"328\":[0,3,2,8],\"329\":[0,3,2,9],\"330\":[0,3,3,0],\"331\":[0,3,3,1],\"332\":[0,3,3,2],\"333\":[0,3,3,3],\"334\":[0,3,3,4],\"335\":[0,3,3,5],\"336\":[0,3,3,6],\"337\":[3,3,3,7],\"338\":[0,3,3,8],\"339\":[0,3,3,9],\"340\":[0,3,4,0],\"341\":[0,3,4,1],\"342\":[0,3,4,2],\"343\":[0,3,4,3],\"344\":[0,3,4,4],\"345\":[0,3,4,5],\"346\":[0,3,4,6],\"347\":[3,3,4,7],\"348\":[0,3,4,8],\"349\":[0,3,4,9],\"350\":[3,3,5,0],\"351\":[0,3,5,1],\"352\":[0,3,5,2],\"353\":[0,3,5,3],\"354\":[0,3,5,4],\"355\":[0,3,5,5],\"356\":[0,3,5,6],\"357\":[0,3,5,7],\"358\":[0,3,5,8],\"359\":[0,3,5,9],\"360\":[3,3,6,0],\"361\":[0,3,6,1],\"362\":[0,3,6,2],\"363\":[0,3,6,3],\"364\":[0,3,6,4],\"365\":[0,3,6,5],\"366\":[0,3,6,6],\"367\":[0,3,6,7],\"368\":[0,3,6,8],\"369\":[0,3,6,9],\"370\":[0,3,7,0],\"371\":[0,3,7,1],\"372\":[0,3,7,2],\"373\":[0,3,7,3],\"374\":[0,3,7,4],\"375\":[0,3,7,5],\"376\":[0,3,7,6],\"377\":[0,3,7,7],\"378\":[0,3,7,8],\"379\":[0,3,7,9],\"380\":[0,3,8,0],\"381\":[0,3,8,1],\"382\":[0,3,8,2],\"383\":[0,3,8,3],\"384\":[0,3,8,4],\"385\":[0,3,8,5],\"386\":[0,3,8,6],\"387\":[0,3,8,7],\"388\":[0,3,8,8],\"389\":[0,3,8,9],\"390\":[0,3,9,0],\"391\":[0,3,9,1],\"392\":[0,3,9,2],\"393\":[0,3,9,3],\"394\":[0,3,9,4],\"395\":[0,3,9,5],\"396\":[0,3,9,6],\"397\":[0,3,9,7],\"398\":[0,3,9,8],\"399\":[0,3,9,9],\"400\":[1,4,0,0],\"401\":[1,4,0,1],\"402\":[1,4,0,2],\"403\":[1,4,0,3],\"404\":[1,4,0,4],\"405\":[1,4,0,5],\"406\":[1,4,0,6],\"407\":[1,4,0,7],\"408\":[1,4,0,8],\"409\":[1,4,0,9],\"410\":[26,4,1,0],\"411\":[0,4,1,1],\"412\":[0,4,1,2],\"413\":[0,4,1,3],\"414\":[0,4,1,4],\"415\":[0,4,1,5],\"416\":[26,4,1,6],\"417\":[3,4,1,7],\"418\":[0,4,1,8],\"419\":[0,4,1,9],\"420\":[0,4,2,0],\"421\":[0,4,2,1],\"422\":[0,4,2,2],\"423\":[0,4,2,3],\"424\":[0,4,2,4],\"425\":[0,4,2,5],\"426\":[0,4,2,6],\"427\":[3,4,2,7],\"428\":[0,4,2,8],\"429\":[0,4,2,9],\"430\":[0,4,3,0],\"431\":[0,4,3,1],\"432\":[0,4,3,2],\"433\":[0,4,3,3],\"434\":[0,4,3,4],\"435\":[0,4,3,5],\"436\":[0,4,3,6],\"437\":[3,4,3,7],\"438\":[0,4,3,8],\"439\":[0,4,3,9],\"440\":[0,4,4,0],\"441\":[0,4,4,1],\"442\":[0,4,4,2],\"443\":[0,4,4,3],\"444\":[0,4,4,4],\"445\":[0,4,4,5],\"446\":[0,4,4,6],\"447\":[0,4,4,7],\"448\":[0,4,4,8],\"449\":[0,4,4,9],\"450\":[3,4,5,0],\"451\":[0,4,5,1],\"452\":[0,4,5,2],\"453\":[0,4,5,3],\"454\":[0,4,5,4],\"455\":[0,4,5,5],\"456\":[0,4,5,6],\"457\":[0,4,5,7],\"458\":[0,4,5,8],\"459\":[0,4,5,9],\"460\":[3,4,6,0],\"461\":[0,4,6,1],\"462\":[0,4,6,2],\"463\":[0,4,6,3],\"464\":[0,4,6,4],\"465\":[0,4,6,5],\"466\":[0,4,6,6],\"467\":[0,4,6,7],\"468\":[0,4,6,8],\"469\":[0,4,6,9],\"470\":[0,4,7,0],\"471\":[0,4,7,1],\"472\":[0,4,7,2],\"473\":[0,4,7,3],\"474\":[0,4,7,4],\"475\":[0,4,7,5],\"476\":[0,4,7,6],\"477\":[0,4,7,7],\"478\":[0,4,7,8],\"479\":[0,4,7,9],\"480\":[0,4,8,0],\"481\":[0,4,8,1],\"482\":[0,4,8,2],\"483\":[0,4,8,3],\"484\":[0,4,8,4],\"485\":[0,4,8,5],\"486\":[0,4,8,6],\"487\":[0,4,8,7],\"488\":[0,4,8,8],\"489\":[0,4,8,9],\"490\":[0,4,9,0],\"491\":[0,4,9,1],\"492\":[0,4,9,2],\"493\":[0,4,9,3],\"494\":[0,4,9,4],\"495\":[0,4,9,5],\"496\":[0,4,9,6],\"497\":[0,4,9,7],\"498\":[0,4,9,8],\"499\":[0,4,9,9],\"500\":[1,5,0,0],\"501\":[1,5,0,1],\"502\":[1,5,0,2],\"503\":[1,5,0,3],\"504\":[1,5,0,4],\"505\":[1,5,0,5],\"506\":[1,5,0,6],\"507\":[1,5,0,7],\"508\":[1,5,0,8],\"509\":[1,5,0,9],\"510\":[3,5,1,0],\"511\":[0,5,1,1],\"512\":[0,5,1,2],\"513\":[0,5,1,3],\"514\":[0,5,1,4],\"515\":[0,5,1,5],\"516\":[26,5,1,6],\"517\":[3,5,1,7],\"518\":[0,5,1,8],\"519\":[0,5,1,9],\"520\":[3,5,2,0],\"521\":[0,5,2,1],\"522\":[0,5,2,2],\"523\":[0,5,2,3],\"524\":[0,5,2,4],\"525\":[0,5,2,5],\"526\":[0,5,2,6],\"527\":[0,5,2,7],\"528\":[0,5,2,8],\"529\":[0,5,2,9],\"530\":[3,5,3,0],\"531\":[0,5,3,1],\"532\":[0,5,3,2],\"533\":[0,5,3,3],\"534\":[0,5,3,4],\"535\":[0,5,3,5],\"536\":[0,5,3,6],\"537\":[3,5,3,7],\"538\":[0,5,3,8],\"539\":[0,5,3,9],\"540\":[3,5,4,0],\"541\":[0,5,4,1],\"542\":[0,5,4,2],\"543\":[0,5,4,3],\"544\":[0,5,4,4],\"545\":[0,5,4,5],\"546\":[0,5,4,6],\"547\":[3,5,4,7],\"548\":[0,5,4,8],\"549\":[0,5,4,9],\"550\":[3,5,5,0],\"551\":[0,5,5,1],\"552\":[0,5,5,2],\"553\":[0,5,5,3],\"554\":[0,5,5,4],\"555\":[0,5,5,5],\"556\":[0,5,5,6],\"557\":[0,5,5,7],\"558\":[0,5,5,8],\"559\":[0,5,5,9],\"560\":[0,5,6,0],\"561\":[0,5,6,1],\"562\":[0,5,6,2],\"563\":[0,5,6,3],\"564\":[0,5,6,4],\"565\":[0,5,6,5],\"566\":[0,5,6,6],\"567\":[0,5,6,7],\"568\":[0,5,6,8],\"569\":[0,5,6,9],\"570\":[0,5,7,0],\"571\":[0,5,7,1],\"572\":[0,5,7,2],\"573\":[0,5,7,3],\"574\":[0,5,7,4],\"575\":[0,5,7,5],\"576\":[0,5,7,6],\"577\":[0,5,7,7],\"578\":[0,5,7,8],\"579\":[0,5,7,9],\"580\":[0,5,8,0],\"581\":[0,5,8,1],\"582\":[0,5,8,2],\"583\":[0,5,8,3],\"584\":[0,5,8,4],\"585\":[0,5,8,5],\"586\":[0,5,8,6],\"587\":[0,5,8,7],\"588\":[0,5,8,8],\"589\":[0,5,8,9],\"590\":[0,5,9,0],\"591\":[0,5,9,1],\"592\":[0,5,9,2],\"593\":[0,5,9,3],\"594\":[0,5,9,4],\"595\":[0,5,9,5],\"596\":[0,5,9,6],\"597\":[0,5,9,7],\"598\":[0,5,9,8],\"599\":[0,5,9,9],\"600\":[1,6,0,0],\"601\":[1,6,0,1],\"602\":[1,6,0,2],\"603\":[1,6,0,3],\"604\":[1,6,0,4],\"605\":[1,6,0,5],\"606\":[1,6,0,6],\"607\":[1,6,0,7],\"608\":[1,6,0,8],\"609\":[1,6,0,9],\"610\":[3,6,1,0],\"611\":[0,6,1,1],\"612\":[0,6,1,2],\"613\":[0,6,1,3],\"614\":[0,6,1,4],\"615\":[0,6,1,5],\"616\":[26,6,1,6],\"617\":[3,6,1,7],\"618\":[0,6,1,8],\"619\":[0,6,1,9],\"620\":[3,6,2,0],\"621\":[0,6,2,1],\"622\":[0,6,2,2],\"623\":[0,6,2,3],\"624\":[0,6,2,4],\"625\":[0,6,2,5],\"626\":[0,6,2,6],\"627\":[3,6,2,7],\"628\":[0,6,2,8],\"629\":[0,6,2,9],\"630\":[3,6,3,0],\"631\":[0,6,3,1],\"632\":[0,6,3,2],\"633\":[0,6,3,3],\"634\":[0,6,3,4],\"635\":[0,6,3,5],\"636\":[0,6,3,6],\"637\":[3,6,3,7],\"638\":[0,6,3,8],\"639\":[0,6,3,9],\"640\":[3,6,4,0],\"641\":[0,6,4,1],\"642\":[0,6,4,2],\"643\":[0,6,4,3],\"644\":[0,6,4,4],\"645\":[0,6,4,5],\"646\":[0,6,4,6],\"647\":[0,6,4,7],\"648\":[0,6,4,8],\"649\":[0,6,4,9],\"650\":[3,6,5,0],\"651\":[0,6,5,1],\"652\":[0,6,5,2],\"653\":[0,6,5,3],\"654\":[0,6,5,4],\"655\":[0,6,5,5],\"656\":[0,6,5,6],\"657\":[0,6,5,7],\"658\":[0,6,5,8],\"659\":[0,6,5,9],\"660\":[3,6,6,0],\"661\":[0,6,6,1],\"662\":[0,6,6,2],\"663\":[0,6,6,3],\"664\":[0,6,6,4],\"665\":[0,6,6,5],\"666\":[0,6,6,6],\"667\":[0,6,6,7],\"668\":[0,6,6,8],\"669\":[0,6,6,9],\"670\":[0,6,7,0],\"671\":[0,6,7,1],\"672\":[0,6,7,2],\"673\":[0,6,7,3],\"674\":[0,6,7,4],\"675\":[0,6,7,5],\"676\":[0,6,7,6],\"677\":[0,6,7,7],\"678\":[0,6,7,8],\"679\":[0,6,7,9],\"680\":[0,6,8,0],\"681\":[0,6,8,1],\"682\":[0,6,8,2],\"683\":[0,6,8,3],\"684\":[0,6,8,4],\"685\":[0,6,8,5],\"686\":[0,6,8,6],\"687\":[0,6,8,7],\"688\":[0,6,8,8],\"689\":[0,6,8,9],\"690\":[0,6,9,0],\"691\":[0,6,9,1],\"692\":[0,6,9,2],\"693\":[0,6,9,3],\"694\":[0,6,9,4],\"695\":[0,6,9,5],\"696\":[0,6,9,6],\"697\":[0,6,9,7],\"698\":[0,6,9,8],\"699\":[0,6,9,9],\"700\":[1,7,0,0],\"701\":[1,7,0,1],\"702\":[1,7,0,2],\"703\":[1,7,0,3],\"704\":[1,7,0,4],\"705\":[1,7,0,5],\"706\":[1,7,0,6],\"707\":[1,7,0,7],\"708\":[1,7,0,8],\"709\":[1,7,0,9],\"710\":[3,7,1,0],\"711\":[3,7,1,1],\"712\":[3,7,1,2],\"713\":[3,7,1,3],\"714\":[3,7,1,4],\"715\":[3,7,1,5],\"716\":[3,7,1,6],\"717\":[3,7,1,7],\"718\":[0,7,1,8],\"719\":[0,7,1,9],\"720\":[3,7,2,0],\"721\":[3,7,2,1],\"722\":[3,7,2,2],\"723\":[3,7,2,3],\"724\":[3,7,2,4],\"725\":[3,7,2,5],\"726\":[3,7,2,6],\"727\":[3,7,2,7],\"728\":[0,7,2,8],\"729\":[0,7,2,9],\"730\":[3,7,3,0],\"731\":[3,7,3,1],\"732\":[0,7,3,2],\"733\":[0,7,3,3],\"734\":[3,7,3,4],\"735\":[3,7,3,5],\"736\":[3,7,3,6],\"737\":[3,7,3,7],\"738\":[0,7,3,8],\"739\":[0,7,3,9],\"740\":[3,7,4,0],\"741\":[3,7,4,1],\"742\":[3,7,4,2],\"743\":[3,7,4,3],\"744\":[3,7,4,4],\"745\":[3,7,4,5],\"746\":[3,7,4,6],\"747\":[3,7,4,7],\"748\":[0,7,4,8],\"749\":[0,7,4,9],\"750\":[3,7,5,0],\"751\":[3,7,5,1],\"752\":[0,7,5,2],\"753\":[0,7,5,3],\"754\":[3,7,5,4],\"755\":[0,7,5,5],\"756\":[0,7,5,6],\"757\":[3,7,5,7],\"758\":[0,7,5,8],\"759\":[0,7,5,9],\"760\":[3,7,6,0],\"761\":[0,7,6,1],\"762\":[0,7,6,2],\"763\":[0,7,6,3],\"764\":[0,7,6,4],\"765\":[0,7,6,5],\"766\":[0,7,6,6],\"767\":[0,7,6,7],\"768\":[0,7,6,8],\"769\":[0,7,6,9],\"770\":[0,7,7,0],\"771\":[0,7,7,1],\"772\":[0,7,7,2],\"773\":[0,7,7,3],\"774\":[0,7,7,4],\"775\":[0,7,7,5],\"776\":[0,7,7,6],\"777\":[0,7,7,7],\"778\":[0,7,7,8],\"779\":[0,7,7,9],\"780\":[0,7,8,0],\"781\":[0,7,8,1],\"782\":[0,7,8,2],\"783\":[0,7,8,3],\"784\":[0,7,8,4],\"785\":[0,7,8,5],\"786\":[0,7,8,6],\"787\":[0,7,8,7],\"788\":[0,7,8,8],\"789\":[0,7,8,9],\"790\":[0,7,9,0],\"791\":[0,7,9,1],\"792\":[0,7,9,2],\"793\":[0,7,9,3],\"794\":[0,7,9,4],\"795\":[0,7,9,5],\"796\":[0,7,9,6],\"797\":[0,7,9,7],\"798\":[0,7,9,8],\"799\":[0,7,9,9],\"800\":[1,8,0,0],\"801\":[1,8,0,1],\"802\":[1,8,0,2],\"803\":[1,8,0,3],\"804\":[1,8,0,4],\"805\":[1,8,0,5],\"806\":[1,8,0,6],\"807\":[1,8,0,7],\"808\":[1,8,0,8],\"809\":[1,8,0,9],\"810\":[0,8,1,0],\"811\":[0,8,1,1],\"812\":[0,8,1,2],\"813\":[0,8,1,3],\"814\":[0,8,1,4],\"815\":[0,8,1,5],\"816\":[0,8,1,6],\"817\":[0,8,1,7],\"818\":[0,8,1,8],\"819\":[0,8,1,9],\"820\":[0,8,2,0],\"821\":[0,8,2,1],\"822\":[0,8,2,2],\"823\":[0,8,2,3],\"824\":[0,8,2,4],\"825\":[0,8,2,5],\"826\":[0,8,2,6],\"827\":[0,8,2,7],\"828\":[0,8,2,8],\"829\":[0,8,2,9],\"830\":[0,8,3,0],\"831\":[0,8,3,1],\"832\":[0,8,3,2],\"833\":[0,8,3,3],\"834\":[0,8,3,4],\"835\":[0,8,3,5],\"836\":[0,8,3,6],\"837\":[0,8,3,7],\"838\":[0,8,3,8],\"839\":[0,8,3,9],\"840\":[0,8,4,0],\"841\":[0,8,4,1],\"842\":[0,8,4,2],\"843\":[0,8,4,3],\"844\":[0,8,4,4],\"845\":[0,8,4,5],\"846\":[0,8,4,6],\"847\":[0,8,4,7],\"848\":[0,8,4,8],\"849\":[0,8,4,9],\"850\":[0,8,5,0],\"851\":[0,8,5,1],\"852\":[0,8,5,2],\"853\":[0,8,5,3],\"854\":[0,8,5,4],\"855\":[0,8,5,5],\"856\":[0,8,5,6],\"857\":[0,8,5,7],\"858\":[0,8,5,8],\"859\":[0,8,5,9],\"860\":[0,8,6,0],\"861\":[0,8,6,1],\"862\":[0,8,6,2],\"863\":[0,8,6,3],\"864\":[0,8,6,4],\"865\":[0,8,6,5],\"866\":[0,8,6,6],\"867\":[0,8,6,7],\"868\":[0,8,6,8],\"869\":[0,8,6,9],\"870\":[0,8,7,0],\"871\":[0,8,7,1],\"872\":[0,8,7,2],\"873\":[0,8,7,3],\"874\":[0,8,7,4],\"875\":[0,8,7,5],\"876\":[0,8,7,6],\"877\":[0,8,7,7],\"878\":[0,8,7,8],\"879\":[0,8,7,9],\"880\":[0,8,8,0],\"881\":[0,8,8,1],\"882\":[0,8,8,2],\"883\":[0,8,8,3],\"884\":[0,8,8,4],\"885\":[0,8,8,5],\"886\":[0,8,8,6],\"887\":[0,8,8,7],\"888\":[0,8,8,8],\"889\":[0,8,8,9],\"890\":[0,8,9,0],\"891\":[0,8,9,1],\"892\":[0,8,9,2],\"893\":[0,8,9,3],\"894\":[0,8,9,4],\"895\":[0,8,9,5],\"896\":[0,8,9,6],\"897\":[0,8,9,7],\"898\":[0,8,9,8],\"899\":[0,8,9,9],\"900\":[1,9,0,0],\"901\":[1,9,0,1],\"902\":[1,9,0,2],\"903\":[1,9,0,3],\"904\":[1,9,0,4],\"905\":[1,9,0,5],\"906\":[1,9,0,6],\"907\":[1,9,0,7],\"908\":[1,9,0,8],\"909\":[1,9,0,9],\"910\":[0,9,1,0],\"911\":[0,9,1,1],\"912\":[0,9,1,2],\"913\":[0,9,1,3],\"914\":[0,9,1,4],\"915\":[0,9,1,5],\"916\":[0,9,1,6],\"917\":[0,9,1,7],\"918\":[0,9,1,8],\"919\":[0,9,1,9],\"920\":[0,9,2,0],\"921\":[0,9,2,1],\"922\":[0,9,2,2],\"923\":[0,9,2,3],\"924\":[0,9,2,4],\"925\":[0,9,2,5],\"926\":[0,9,2,6],\"927\":[0,9,2,7],\"928\":[0,9,2,8],\"929\":[0,9,2,9],\"930\":[0,9,3,0],\"931\":[0,9,3,1],\"932\":[0,9,3,2],\"933\":[0,9,3,3],\"934\":[0,9,3,4],\"935\":[0,9,3,5],\"936\":[0,9,3,6],\"937\":[0,9,3,7],\"938\":[0,9,3,8],\"939\":[0,9,3,9],\"940\":[0,9,4,0],\"941\":[0,9,4,1],\"942\":[0,9,4,2],\"943\":[0,9,4,3],\"944\":[0,9,4,4],\"945\":[0,9,4,5],\"946\":[0,9,4,6],\"947\":[0,9,4,7],\"948\":[0,9,4,8],\"949\":[0,9,4,9],\"950\":[0,9,5,0],\"951\":[0,9,5,1],\"952\":[0,9,5,2],\"953\":[0,9,5,3],\"954\":[0,9,5,4],\"955\":[0,9,5,5],\"956\":[0,9,5,6],\"957\":[0,9,5,7],\"958\":[0,9,5,8],\"959\":[0,9,5,9],\"960\":[0,9,6,0],\"961\":[0,9,6,1],\"962\":[0,9,6,2],\"963\":[0,9,6,3],\"964\":[0,9,6,4],\"965\":[0,9,6,5],\"966\":[0,9,6,6],\"967\":[0,9,6,7],\"968\":[0,9,6,8],\"969\":[0,9,6,9],\"970\":[0,9,7,0],\"971\":[0,9,7,1],\"972\":[0,9,7,2],\"973\":[0,9,7,3],\"974\":[0,9,7,4],\"975\":[0,9,7,5],\"976\":[0,9,7,6],\"977\":[0,9,7,7],\"978\":[0,9,7,8],\"979\":[0,9,7,9],\"980\":[0,9,8,0],\"981\":[0,9,8,1],\"982\":[0,9,8,2],\"983\":[0,9,8,3],\"984\":[0,9,8,4],\"985\":[0,9,8,5],\"986\":[0,9,8,6],\"987\":[0,9,8,7],\"988\":[0,9,8,8],\"989\":[0,9,8,9],\"990\":[0,9,9,0],\"991\":[0,9,9,1],\"992\":[0,9,9,2],\"993\":[0,9,9,3],\"994\":[0,9,9,4],\"995\":[0,9,9,5],\"996\":[0,9,9,6],\"997\":[0,9,9,7],\"998\":[0,9,9,8],\"999\":[0,9,9,9]}");

/***/ }),

/***/ "./canvas.js":
/*!*******************!*\
  !*** ./canvas.js ***!
  \*******************/
/*! exports provided: makeCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCanvas", function() { return makeCanvas; });
/* harmony import */ var _gui_multiplayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gui/multiplayer */ "./gui/multiplayer.js");
/* harmony import */ var _gui_worldinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui/worldinfo */ "./gui/worldinfo.js");
/* harmony import */ var _gui_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gui/menu */ "./gui/menu.js");
/* harmony import */ var _gui_hotbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gui/hotbar */ "./gui/hotbar.js");
/* harmony import */ var _gui_inventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gui/inventory */ "./gui/inventory.js");
/* harmony import */ var _gui_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gui/screen */ "./gui/screen.js");
/* harmony import */ var _gui_chest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gui/chest */ "./gui/chest.js");
/* harmony import */ var _gui_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gui/settings */ "./gui/settings.js");
/* harmony import */ var _gui_clickEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gui/clickEvent */ "./gui/clickEvent.js");
/* harmony import */ var _gui_moveEvent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gui/moveEvent */ "./gui/moveEvent.js");
/* harmony import */ var _gui_dragEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gui/dragEvent */ "./gui/dragEvent.js");
/* harmony import */ var _gui_kiosk__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gui/kiosk */ "./gui/kiosk.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./player */ "./player.js");
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocklook */ "./blocklook.js");















global.mouseX=null,global.mouseY=null;

global.chatOn=false,global.uis={}
global.chatMessageOn=false
global.chatMessage=""
global.chatColor="white"
global.resultChatMessage="Welcome to Galactica"
global.c=null
global.currentUI=null
global.imgzoom=2
global.itemStack=[jsonItems["arrow"],jsonItems["bearhat"],jsonItems["arrow"],jsonItems["chest"],jsonItems["door"],jsonItems["ebutton"],jsonItems["bell"],jsonItems["firecracker"],null]
                    
global.countStack=[12,1,3,2,10,1,10,2,0]
                   
global.heldItem=null
global.heldItemCount=0;
global.selected=0
global.ctx=null
global.bigSign=''
global.bigSignTime=0
global.bigSignColor='white'
global.debug=false
global.percent=0
var time=0
var time2=0
function makeCanvas(noa){
	Object(_gui_multiplayer__WEBPACK_IMPORTED_MODULE_0__["multiplayer"])()
	Object(_gui_menu__WEBPACK_IMPORTED_MODULE_2__["menu"])()
	Object(_gui_hotbar__WEBPACK_IMPORTED_MODULE_3__["hotbar"])()
	Object(_gui_inventory__WEBPACK_IMPORTED_MODULE_4__["inventory"])()
	Object(_gui_settings__WEBPACK_IMPORTED_MODULE_7__["settings"])()
	Object(_gui_clickEvent__WEBPACK_IMPORTED_MODULE_8__["clickEvent"])()
	Object(_gui_moveEvent__WEBPACK_IMPORTED_MODULE_9__["moveEvent"])()
	Object(_gui_dragEvent__WEBPACK_IMPORTED_MODULE_10__["dragEvent"])()
	Object(_gui_worldinfo__WEBPACK_IMPORTED_MODULE_1__["worldinfo"])()
	Object(_gui_kiosk__WEBPACK_IMPORTED_MODULE_11__["kiosk"])()
	Object(_gui_chest__WEBPACK_IMPORTED_MODULE_6__["chest"])()
	Object(_gui_screen__WEBPACK_IMPORTED_MODULE_5__["screen"])()

	if(gameStarted=='false'){
    currentUI=uis.worldinfo
	}else{
		 currentUI=uis.hotbar
		 
		localStorage.setItem('gamestarted',gameStarted)
	}
	
	
	var selector =new Image()
	selector.src="./texPack/"+funpack+"/maingui/selector.png"
	var hrtimg=new Image()
   hrtimg.src="./texPack/"+funpack+"/maingui/heart.png"
   
   var ehrtimg=new Image()
   ehrtimg.src="./texPack/"+funpack+"/maingui/eheart.png"
   
   var bblimg=new Image()
   bblimg.src="./texPack/"+funpack+"/maingui/air.png"
   
   
   var ebblimg=new Image()
   ebblimg.src="./texPack/"+funpack+"/maingui/eair.png"  
   
   
  c = document.getElementById("canva");
ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
ctx.imageSmoothingEnabled = false;
c.style.zIndex = "104";
c.style.position = "absolute";
c.style.top = "0";
c.style.left = "0";
c.style.backgroundColor = "rgba(0, 0, 0,0.2)";
  

	
var lol=0
var night=true
var internum=0
	noa.on('beforeRender', function(dt) {
		
		time+=(1/60)
		if(time>15){
			time2+=1
			time=0
			
			air--
			//mult=0
		}
		
		if(time2>60){
			
		}
		

	ctx.clearRect(0, 0,c.width ,c.height);
	lol++
		if (currentUI !== null) {
			
			  if(currentUI==uis.menu){
			   
			   			var j = new Image();
					j.src='./texPack/'+funpack+'/blocks/dirt.png'
						  if(currentUI==uis.menu){
			   
			   
			   var pat = ctx.createPattern(j, "repeat");
ctx.rect(0, 0, c.width, c.height);
ctx.fillStyle = pat;
ctx.fill();
		   }
			
		   }
			
			for (var i of currentUI) {
		var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
           var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
		   
		 	if(night){
																scene.ambientColor.r=0.00//Math.sin(c)+1.01
	scene.ambientColor.g=0.00//Math.sin(c)+1.01
	scene.ambientColor.b=0.00//Math.sin(c)+1.01*/
	scene.lights[0].diffuse.r=0.4
	scene.lights[0].diffuse.g=0.4
	scene.lights[0].diffuse.b=0.4
	
			}
	
			
			switch (i.type) {
			case "image":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					if(currentUI==uis.hotbar){
				    ctx.drawImage(j,x,c.height-62,i.width*imgzoom,i.height*imgzoom);
					
					}else{
						
						  ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					}
					
					
					
					if(i.message){
					ctx.font = 32*Math.sin(dt)+'px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "Yellow";
					ctx.rotate(5 * Math.PI / 180);
					  ctx.fillText(i.message,x+i.width*imgzoom-20,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					  ctx.rotate(-5 * Math.PI /180);
					  
			             }
					
					if(currentUI==uis.hotbar){
					ctx.drawImage(selector,x+(36*selected),c.height-62,16*3,16*3);
					}
					break;
					
					case "imagesp":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					internum+=0.3
				    //ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					ctx.drawImage(j,0,i.framey,16,16,x,y+internum,i.width*imgzoom,i.height*imgzoom);
					
					break;
					
						case "hlight":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					for(var l=-2;l<2;l++){
				    //ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					 ctx.drawImage(j,x+(l*50),y,i.width*imgzoom,i.height*imgzoom);
					
					}
					
					break;
					
						case "light":
			
			
		

					var j = new Image();
					j.src = i.path;
				
					for(var l=-i.num+2;l<i.num-2;l++){
				    //ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					 ctx.drawImage(j,x+(l*50),y,i.width*imgzoom,i.height*imgzoom);
					
					}
					
					break;
					
					
					
					case "button":
			
					var j = new Image();
					j.src = i.path;
				
					
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "white";
					  ctx.fillText(i.textt,x+(i.width*imgzoom)/2,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					/*if(currentUI==uis.hotbar){
						
					ctx.drawImage(selector,x+(36*selected),y,16*3,16*3);
						
					}*/
					break;
					
						case "border":
					var j = new Image();
					j.src = i.path;
				     ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					
					
					  
					
					
					break;
					
					case "lever":
					var j = new Image();
					j.src = i.path;
				     ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					
					
					
					ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "white";
					  ctx.fillText(i.textt,x+(i.width*imgzoom)/2,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					  
					
					
					break;
					
					case "message":
					var j = new Image();
					j.src = i.path;
				
					
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
					ctx.fillStyle = "white";
					  ctx.fillText(i.textt,x+(i.width*imgzoom)/2,y+(i.height*imgzoom)/2,i.width*imgzoom,i.height*imgzoom);
					if(currentUI==uis.hotbar){
						
					ctx.drawImage(selector,x+(36*selected),y,16*3,16*3);
						
					}
					break;

					
					
					case "slot":
					
					if(itemStack[i.slotNum]!==null){
					var j = new Image();
					j.src = "./texPack/"+funpack+"/"+itemStack[i.slotNum].texture//i.path;
				
					
				    ctx.drawImage(j,x,y,i.width*imgzoom,i.height*imgzoom);
					
							if(countStack[i.slotNum]>0){
							ctx.font = '32px myFirstFont';
						
							  ctx.textAlign = "center";
							  
							  ctx.fillStyle = "grey";
							  ctx.fillText(countStack[i.slotNum], x+8,y,i.width*imgzoom,i.height*imgzoom);
								ctx.fillStyle = "white";
							  ctx.fillText(countStack[i.slotNum], x+4,y,i.width*imgzoom,i.height*imgzoom);
							}
							
					
					
					}
					
					break;
		
			 
			}
			
			}
			
		
			
			if(heldItem!==null){
					var j = new Image();
				j.src="./texPack/"+funpack+heldItem.texture
				ctx.drawImage(j, mouseX, mouseY-100, 16*imgzoom, 16*imgzoom);
				ctx.fillText(heldItemCount, mouseX, mouseY-100, 16*imgzoom, 16*imgzoom);
			}

			 
		}
		
		if(currentUI==uis.menu){
			
		
			
			return;
		}
		
					if(currentUI==uis.hotbar){
						
						for (var i=0;i< 12;i++){
						  ctx.drawImage(ehrtimg,c.width/2-( i*20)+80, c.height-118,16,16);//*/
						  
						  }
						for (var i=0;i< health;i++){
						  ctx.drawImage(hrtimg,c.width/2-( i*20)+80, c.height-118,16,16);//*/
						  
						  }
						     for (var i=0;i< 12;i++){
						  ctx.drawImage(ebblimg,c.width/2-( i*20)+80, c.height-136,16,16);//*/
						  
						  }
						  
						  for (var i=0;i< air;i++){
						  ctx.drawImage(bblimg,c.width/2-( i*20)+80, c.height-136,16,16);//*/
						  
						  }
						  
						 
					}
						  
			  if(serverResponse!==null){
				  var j = new Image();
				  j.src=serverResponse.serverImage
				  ctx.drawImage(j,c.width/2, c.height-100,450/2,240/2);//*/
			  }
			  
			  	if(bigSign!==''){
				
				bigSignTime-=1/75
				ctx.font = 'bold 100px  myFirstFont';
				
				
							 
							 	ctx.fillStyle = "grey";
								ctx.fillText(bigSign, c.width/2+4,c.height/2+4);
					ctx.fillStyle = bigSignColor;
					
					
							
							    ctx.fillText(bigSign, c.width/2,c.height/2);
							
							  if(bigSignTime<1){
								  bigSign=''
								  bigSignTime=0
							  }
			}
			
		
			
				if(debug){
				
				      bigSignTime-=1/75
				      ctx.font = '50px myFirstFont';
					  ctx.strokeStyle = "black";
					  ctx.fillStyle = "white";
					
					 ctx.lineWidth   = 5;
					  if (noa.targetedBlock) {

                        var posb = noa.targetedBlock.position
						var btype=noa.world.getBlockID(posb[0],posb[1],posb[2])	 
						var leo=Object.keys(blocks).find(key => blocks[key] === btype)
						var chunk=noa.world._getChunkByCoords(posb[0], posb[1], posb[2]).requestID
						
						
							    ctx.fillText('x:'+posb[0]+' y:'+posb[1]+' z:'+posb[2], 110,c.height/2);
								ctx.fillText('blocktype:'+btype, 110,c.height/2-40);
								ctx.fillText(leo, 110,c.height/2-80);
								ctx.fillText(chunk, 110,c.height/2-120);
								ctx.fillText(Object(_blocklook__WEBPACK_IMPORTED_MODULE_13__["blocklook"])(noa), 110,c.height/2-160);
								ctx.fillText('time:'+time2+':'+Math.round(time)+'pm',110,c.height/2-200);
								ctx.fillText('Daytime', 110,c.height/2-240);
								ctx.fillText(Object.keys(listofplayers).length+1+':player', 110,c.height/2-280);
					  }
					  
					  
							  if(bigSignTime<1){
								  debug=false
								  bigSignTime=0
							  }
			}
			  
			  if(chatOn){
			 ctx.font = '32px myFirstFont';
				
                      ctx.textAlign = "center";
					  
					 ctx.globalAlpha = 0.1;
					  		  ctx.beginPath();
					ctx.lineWidth = "10";
					ctx.fillStyle = "grey";
					ctx.fillRect(0, window.innerHeight-50, window.innerWidth, 100);
					ctx.globalAlpha = 0.2;
					 
					ctx.fillRect(0, window.innerHeight-150, window.innerWidth/2, 80);
                       ctx.globalAlpha = 1;
					 ctx.fillStyle = chatColor;
					  ctx.fillText(chatMessage,chatMessage.length+ 100,window.innerHeight-30,c.width/2,c.height/2);
					  
					  ctx.fillStyle = chatColor;
					  ctx.fillText(resultChatMessage,resultChatMessage.length+ 100,window.innerHeight-120,c.width/2,c.height/2);
			  }else{
				  
				  if(chatMessageOn){
				  ctx.globalAlpha = 0.2;
					 	ctx.fillStyle = "grey";
					ctx.fillRect(0, window.innerHeight-150, window.innerWidth/2, 80);
					ctx.globalAlpha = 1;
					ctx.fillStyle = chatColor;
					  ctx.fillText(resultChatMessage,resultChatMessage.length+ 100,window.innerHeight-120,c.width/2,c.height/2);
				  }
				  
			  }
					  
			
			 
			
	  
	})
	
	
	
	
	
	
}


function getMousePos(event) {
    var rect = c.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}
	
	
	function isInsideRect(pos, x, y, w, h){
	return pos.x > x && pos.x < x + w * 4 && pos.y < y + h * 4 && pos.y > y;
}


window.addEventListener("resize", resizer, false);


function resizer(){
	c.width = window.innerWidth;
c.height = window.innerHeight;
//c.imageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
}


	


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./chestWars.js":
/*!**********************!*\
  !*** ./chestWars.js ***!
  \**********************/
/*! exports provided: chestWars, checkState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chestWars", function() { return chestWars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkState", function() { return checkState; });
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound.js */ "./sound.js");
/* harmony import */ var _keyFunc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyFunc.js */ "./keyFunc.js");


var mycolor=''
var colors=['red','blue']
mycolor=colors[Math.floor(Math.random()*2)]
console.log('mycolor is :'+mycolor)

var score={'red':0,'blue':0};

var teamSpawn={'-48,50,-7':'red','-26,48,48':'blue'}//,'yellow':[-71,62,35],'green':[-7,41,7]}
var num=2
function chestWars(){
	//debug=true
	
	//bigSign=rtcblocklist.worldname//'Game:'+gameState[num]
	//bigSign=''
	//bigSignTime=3000
	//bigSignColor='white'
} 


function checkState(poso){
	
	console.log(poso.toString())
	if(teamSpawn[poso.toString()]!==undefined){
		bigSign=teamSpawn[poso.toString()]+' has lost'//gameState[3]
	   bigSignTime=10
	   
	   
	   score[teamSpawn[poso.toString()]]=1
	   console.log(score)
	   
	   if(teamSpawn[poso.toString()].toString()==mycolor){
		 bigSign='youuuuuuuuuuuuuuuuu lost'
		 bigSignTime=10
		 
		 noa.ents.setPosition(noa.playerEntity,poso[0],poso[1]+100,poso[2])
	   }
		
	}
	
	if(score['red'] ==1 && score['blue']==1){
		bigSign='Game:'+gameState[3]
		
		
	}

 
}	


setInterval(function(){ 

if(pos[1]>60){
	
	bigSign='You Won'
	//bigSign=''
	bigSignTime=3000
		bigSignColor='yellow'
	
}

else if(health<10){
	
	
	
	if(health<1){
			
bigSign='You Died'
	//bigSign=''
	bigSignTime=3000
	bigSignColor='red'
	
	Object(_sound_js__WEBPACK_IMPORTED_MODULE_0__["playsound"])('hurt',0.1)
				health=12
				isDead=true
				playerbody.mass=0
	noa.Died(playermesh)
	
				var i = 0, howManyTimes = itemStack.length;
				
			function f() {
				if(itemStack[i]==null){
					howManyTimes=i-1
					
					reBoot()
				}
				if(itemStack[i]!==null && countStack[i]>0){
			  
			  
			  
				Object(_keyFunc_js__WEBPACK_IMPORTED_MODULE_1__["drop"])(noa,itemStack[i],true)
				countStack[i]--
				}
				
				if(countStack[i]<1){
			  i++;
			 
				}
				
				
			  if (i < howManyTimes) {
				
				setTimeout(f, 30);
				
				
			  }
			}

			f();
		

	
   }
	
}





 }, 1000);
 
 

 
 
 
 
 
 
 
 
 
 
 function reBoot(){
	 
	 	bigSign=''
	
	bigSignTime=0
	bigSignColor='white'
	 
	 playermesh._children[0].material.alpha=1
playermesh._children[0].material.ambientColor=BABYLON.Color3.White()
			playermesh._children[0].material.emissiveColor=BABYLON.Color3.White()
	playermesh._children[0].material.diffuseColor=BABYLON.Color3.White()
	noa.ents.setPosition(noa.playerEntity,0,50,0)
	isDead=false
	playerbody.mass=1
	
	playermesh.rotation.z=0
	 
 }


/***/ }),

/***/ "./cuber.js":
/*!******************!*\
  !*** ./cuber.js ***!
  \******************/
/*! exports provided: makeCube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeCube", function() { return makeCube; });
console.log('were making cubes!')

function makeCube(noa,name){
	
	//return;
	 if(cubes[name]!==undefined){
		 return;
	 }
	var mesh = {}
	var mat = {}
	for (var x = 0; x < 6; x++) {
		var matname = name + '-' + x || 'sprite-mat'
		mesh[x] = BABYLON.Mesh.CreatePlane('sprite-' + matname, 1, scene)
		mat[x] = noa.rendering.makeStandardMaterial(matname + x)
		mat[x].backFaceCulling = false
		
		
		if(url.length>2){
		if(x<4){
			mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[2]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		}else{
			
			if(x==4){
				mat[4].diffuseTexture = new BABYLON.Texture( mod+'textures/'+url[0]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			}
			if(x==5){
			mat[5].diffuseTexture = new BABYLON.Texture( mod+'textures/'+url[1]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			}
			
		}
		}
		else{
			mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[0]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		}
		
		if(url.length>4){
			
					if(x==0){
					//right
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[5]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE) //
				}
				if(x==1){
					//left
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[4]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==2){
					//front
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[0]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==3){
					//back
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[3]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==4){
					//top
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[1]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
				if(x==5){
					//bottom
				mat[x].diffuseTexture = new BABYLON.Texture(mod+'textures/'+ url[2]+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
				}
		}
		/*if ( ( ( (x < 4) ? url[1] : url[0]).startsWith('http://') || ( (x < 4) ? url[1] : url[0]).startsWith('https://') ) && game.allowCustom == true) mat[x].diffuseTexture = new BABYLON.Texture( ((x < 4) ? url[1] : url[0]), scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
		else  mat[x].diffuseTexture = new BABYLON.Texture('textures/' + ((x < 4) ? url[1] : url[0]) + '.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)*/
		
		mat[x].diffuseTexture.hasAlpha = true
		mesh[x].material = mat[x]
		var offset
		if (x == 0) {offset = BABYLON.Matrix.Translation(0, 0.5, 0.5); mesh[x].rotation.y = 1.57}
		else if (x == 1) {offset = BABYLON.Matrix.Translation(0, 0.5, -0.5); mesh[x].rotation.y = 1.57}
		else if (x == 2) {offset = BABYLON.Matrix.Translation(0, 0.5, 0.5);}
		else if (x == 3) {offset = BABYLON.Matrix.Translation(0, 0.5, -0.5);}
		else if (x == 4) {offset = BABYLON.Matrix.Translation(0, 0, -1); mesh[x].rotation.x = 1.57}
		else if (x == 5) {offset = BABYLON.Matrix.Translation(0, 0, 0); mesh[x].rotation.x = 1.57}

		mesh[x].bakeTransformIntoVertices(offset)
	}
	
	var newmesh = BABYLON.Mesh.MergeMeshes(Object.values(mesh), true, true, undefined, false, true)
	
	 newmesh.scaling.y=0.5
  newmesh.scaling.x=0.5
  newmesh.scaling.z=0.5
	
	
	
  if(cubes[name]==undefined){
cubes[name]=newmesh;
  }

	//return newmesh
}


/***/ }),

/***/ "./ent.js":
/*!****************!*\
  !*** ./ent.js ***!
  \****************/
/*! exports provided: makeEntMesh, makeStaticMesh, makeEnt, makeStaticEnt, makeProp, makeSuperEnt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEntMesh", function() { return makeEntMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStaticMesh", function() { return makeStaticMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEnt", function() { return makeEnt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStaticEnt", function() { return makeStaticEnt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProp", function() { return makeProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSuperEnt", function() { return makeSuperEnt; });

var walkcycle=0
function makeEntMesh(noa,name) {


var scene = noa.rendering.getScene()
var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial(name+"mat", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
busmat.diffuseTexture.hasAlpha=true
//var mainent=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            entMeshes[name] = new BABYLON.Mesh(name, scene);
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent= entMeshes[name]//mainent;
			   
			   if(i==1){
				  // meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			    if(i==2){
				  // meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			}
	 



	})

}


function makeStaticMesh(noa,name) {


var scene = noa.rendering.getScene()
var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial(name+"mat", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
//var mainent=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            entMeshes[name] = new BABYLON.Mesh(name, scene);
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent= entMeshes[name]//mainent;
			   
			   
			}
	 



	})

}






function makeEnt(noa,name,heightvar,entpos) {
	

 
 if(entMeshes[name]==undefined){
	 return;
 }
 
  if(dominator){
	 
	  var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( entpos, 1, 2, mainentu, [0,0,0], true, false,true,null )
				 
				    mainentu.rotation.y=Math.PI*(Math.random()*8)
 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:2,
				width: 1,
				depth: 1,
			}, scene)
			
			


			hitboxMesh.setParent(mainentu)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 1, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			noa.rendering.addMeshToScene(hitboxMesh, false)
				   
				  
				  
				  noa.entities.addComponent(listofmobs[id], noa.entities.names.entLook, {
					   mesh:  mainentu,
					   height: heightvar
				   })
				   
				    noa.entities.addComponent(listofmobs[id], noa.entities.names.entMove, {
					   mesh:  mainentu
					
				   })
				   
				   
				   
				  
						
						
						var body=noa.ents.getPhysicsBody(listofmobs[id])
						 body.autoStep=true
						 
						 
						 
						   var onCollideEnt = function(ownID, otherID) {
				  
    snoop(noa, ownID, otherID,item)
						   }
						 
						 
						    noa.entities.addComponent(listofmobs[id], noa.entities.names.collideEntities,{
								
								callback:snoop
							})
							
							
							function snoop(noa, ownID, otherID,item){
								
								 if(otherID==noa.playerEntity){
								 var a = 7 * Math.sin(playermesh.rotation.y),
						     c = 7 * Math.cos(playermesh.rotation.y);
								
								body.applyForce([a,7,c])
								
								  }
								
								if(body.velocity[0]!==0){
									walkcycle++
								    mainentu._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));					
		              mainentu._children[2].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  mainentu._children[3].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mainentu._children[4].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
								
										
								}
									
								
							}
							
						  noa.entities.addComponent(listofmobs[id], noa.entities.names.info, {
					   nameinfo:  name,
					   idinfo: id,
					   health:5
				   })
							var myVar = setInterval(myTimer, 10000);
	
						function myTimer(){ 
						
                             if(noa.ents.getState(listofmobs[id], 'position').position[1]<0){
                            noa.ents.deleteEntity(listofmobs[id])
							console.log('entity died')
							clearInterval(myVar);
							 }

						}
							
							
  }

}

function makeStaticEnt(noa,name,epos) {
	
	



 
	  
	 var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( epos, 0.5, 1, mainentu, [0.2,0,0.2], false, false,false,null )
				   console.log(listofmobs)
				    console.log(mainentu)
 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:0.6,
				width: 1.2,
				depth: 1.7,
			}, scene)
			
			


			hitboxMesh.setParent(mainentu)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5/2, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			noa.rendering.addMeshToScene(hitboxMesh, false)
				   
				  
				  
				   
				   spawnedEnt={name:name,po:[noa.targetedBlock.position[0]+0.5,noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2]+0.5],id:id}
				   
				   
				  
						
						
						
						 
						//    noa.entities.addComponent(listofmobs[id], noa.entities.names.collideEntities)
							

}


function makeProp(noa,name,heightvar,entpos) {
	

  if(dominator){
	  
	               var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( entpos, 1, 2, mainentu, [0,0,0], false, false,false,null )
				   console.log(listofmobs)
				    mainentu.rotation.y=Math.PI*(Math.random()*8)
					
					setInterval(function(){ mainentu.rotation.y+=0.01
                     mainentu.rotation.z+=0.01
					 walkcycle++
								    mainentu._children[1].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));					
		              mainentu._children[2].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					  mainentu._children[3].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (0.5 * Math.PI));
		              mainentu._children[4].rotation.x= 1.0* Math.cos((0.32 * walkcycle) + (1.5 * Math.PI));
					 // mainentu.rotation.x+=0.01
					}, 100);
					
					currentUI=uis.kiosk
  }
 
					

 
		
	
	
	
	
}



function makeSuperEnt(noa,name,heightvar,entpos) {
	

 
 if(entMeshes[name]==undefined){
	 return;
 }
 
  if(!dominator){
	 var scaling=1
	  var mainentu =entMeshes[name].clone(name)
                   var id=uuid()
                   listofmobs[id] = noa.entities.add( entpos, 1*scaling,1.8*scaling, mainentu, [0,0,0], true, false,true,null )
				 
				   
 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:2*scaling,
				width: 1*scaling,
				depth: 1*scaling,
			}, scene)
			
			
mainentu.scaling=new BABYLON.Vector3(scaling,scaling,scaling)

			hitboxMesh.setParent(mainentu)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 1*scaling, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			 hitboxMesh.metadata=id
			noa.rendering.addMeshToScene(hitboxMesh, false)
				   
				   mainentu.rotation.y=Math.PI*(Math.random()*8)
				  
				  /*noa.entities.addComponent(listofmobs[id], noa.entities.names.entLook, {
					   mesh:  mainentu,
					   height: heightvar
				   })
				   
				    noa.entities.addComponent(listofmobs[id], noa.entities.names.entMove, {
					   mesh:  mainentu
					
				   })*/
				   
				 
				   var body=noa.ents.getPhysicsBody(listofmobs[id])
						 body.autoStep=true
				  
						console.log('super')
						
						//var body=noa.ents.getPhysicsBody(listofmobs[id])
						// body.autoStep=true
						 	  noa.entities.addComponent(listofmobs[id], noa.entities.names.info, {
					   nameinfo:  name,
					   idinfo: id,
					   health:5
				   })
						 
					

														noa.entities.addComponent(listofmobs[id], noa.entities.names.aPlus, {
											   mesh:  mainentu
											
										   })
							
						 
					
							
							
  }

}


/***/ }),

/***/ "./fly.js":
/*!****************!*\
  !*** ./fly.js ***!
  \****************/
/*! exports provided: flyState, setupFlying */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyState", function() { return flyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupFlying", function() { return setupFlying; });
/* harmony import */ var _animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.js */ "./animation.js");


function flyState(){
	
	console.log('were flying')
	
	
	
}

var flynum=0
function setupFlying(noa){
	

noa.inputs.up.on('jump', function () {
	//isFlying=true
	
	if(playerbody==null){
		return;
	}
	
	if(rideName!=='none'){
		return;
	}
	
	flynum++
	setTimeout(function(){
		if(flynum==2){
			isFlying=!isFlying
			
		}
	flynum=0
	},500);
	//isFlying=!isFlying
	if(isFlying){
	playermesh.rotation.x=Math.PI/2
	playermesh._children[0].rotation.x=Math.PI/2
 playerbody.gravityMultiplier=0
 playerbody.airDrag = 2
 	playerbody.velocity[1]=0
	flyHeadAngle=-Math.PI/2
	
	}else {
		playerbody.gravityMultiplier=2
		playerbody.airDrag = 0.1
		playermesh.rotation.x=0
		playermesh._children[0].rotation.x=0
		flyHeadAngle=0
	}
})	




	
	
	
}

/***/ }),

/***/ "./fog.js":
/*!****************!*\
  !*** ./fog.js ***!
  \****************/
/*! exports provided: makeFog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeFog", function() { return makeFog; });
var fogheight=0
function makeFog(scene,noa){
	makesky(scene)
	//makeskySphere(scene)
	//makeclouds(noa)
	//makeplafond(noa)
//scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
//scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
scene.fogMode =BABYLON.Scene.FOGMODE_EXP2;
//scene.fogMode = BABYLON.Scene.FOGMODE_EXP;

//scene.fogDensity = 0.001// /.1; //was 0.01 //water = 0.08 // lava=0.2
//scene.fogStart =100//96;//800
//scene.fogEnd =550//150;//1000

scene.fogDensity = 0.1// 
scene.fogStart =1//96;//800
scene.fogEnd =550//150;//1000
//scene.fogColor = new BABYLON.Color3(.9, .9, 1)
scene.fogColor = new BABYLON.Color3(0, 0, 0)
//scene._shadowsEnabled = !0
scene.fogEnabled=false;
	
}

	function makesky(scene){
		
		
		var  uvoptions = {
        height:2e3,
		depth:2e3,
		width:2e3,
		wrap: true,
        updatable: true
    };	
			 
	 var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", uvoptions, scene);
 var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;

skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./texPack/"+funpack+"/skybox/space/skybox", scene);

skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;

skyboxMaterial.diffuseColor = new BABYLON.Color3(1, 1,1);

skyboxMaterial.ambientColor = new BABYLON.Color3(0.6, 0.6, 1,0.5);
skyboxMaterial.disableLighting=true

skybox.material = skyboxMaterial;


noa.rendering.addMeshToScene(skybox,false)
console.log(skyboxMaterial._reflectionTexture)
	setInterval(function(){ 
   skyboxMaterial._reflectionTexture.vOffset -= 1/20;
 //  skyboxMaterial.diffuseTexture.vOffset -= 1/100;
     }, 100);
  return skybox;
	
}


function makeskySphere(scene){
		
		
			var skybox = BABYLON.MeshBuilder.CreateSphere("skyBox", {diameter:500, sideOrientation:2}, scene);
	var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	//skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./texPack/"+funpack+"/skybox/day1/skybox", scene);
	skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	skybox.material = skyboxMaterial;		
    skybox.infiniteDistance = true;	
	    noa.rendering.addMeshToScene(skybox,false)
    
  return skybox;
	
}

function makeclouds(noa){
	      var t = noa.rendering.getScene(),
            i = BABYLON.MeshBuilder.CreatePlane("planeclouds", {
                height: 2e3,
                width: 2e3
            }, t);
			
							setInterval(function(){ 
    i.material.diffuseTexture.uOffset += 1/10000;
     }, 250);
        return i.material = noa.rendering.makeStandardMaterial("cloudMat"), i.material.diffuseTexture = new BABYLON.Texture("./texPack/"+funpack+"/environment/clouds.png", t, !0, !0, BABYLON.Texture.NEAREST_SAMPLINGMODE), i.material.diffuseTexture.anisotropicFilteringLevel = 8, i.material.diffuseTexture.hasAlpha=!0,i.material.useAlphaFromDiffuseTexture = true,/* i.material.alpha=0.5,*/i.material.emissiveColor = new BABYLON.Color3(1,1,1),i.material.ambientColor = new BABYLON.Color3(0.74, 0.63, 0.62),i.material.diffuseColor = new BABYLON.Color3(0.74, 0.63, 0.62), i.material.backFaceCulling = !1, i.material.disableLighting = !0, i.rotation.x = -Math.PI / 2, i.position = new BABYLON.Vector3(0, 88.5-fogheight, 0), noa.rendering.addMeshToScene(i,false), i;
	    
    }
	
	
	function makeplafond(noa){
	      var t = noa.rendering.getScene(),
            i = BABYLON.MeshBuilder.CreatePlane("planecloudsuuu", {
                height: 2e3,
                width: 2e3
            }, t);
			
			
			const skyMat = new BABYLON.StandardMaterial('sky', t);
	skyMat.backFaceCulling = true;
	skyMat.emissiveColor = new BABYLON.Color3(0.4,0.4,1);
	skyMat.diffuseColor = skyMat.emissiveColor;

	i.infiniteDistance = true;
	i.renderingGroupId
	i.material = skyMat;

	i.rotation.x = -Math.PI / 2;

	noa.rendering.addMeshToScene(i, false);

	i.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 95-fogheight));
							//setInterval(function(){ 
    // i.material.diffuseTexture.uOffset += 1/10000;
    // }, 250);
        return i//.material = noa.rendering.makeStandardMaterial("cloudMat"),i.material.diffuseTexture = new BABYLON.Texture(mod+"textures/environment/cloudsy.png", t, !0, !0, BABYLON.Texture.NEAREST_SAMPLINGMODE), i.material.diffuseTexture.anisotropicFilteringLevel = 8/*, i.material.diffuseTexture.hasAlpha=/*, i.material.alpha=0.5*/,i.material.emissiveColor = new BABYLON.Color3(1, 1, 1),i.material.diffuseColor =i.material.emissiveColor ,i.infiniteDistance = true,i.renderingGroupId, i.material.backFaceCulling = !1, i.material.disableLighting = !0, i.rotation.x = -Math.PI / 2, i.position = new BABYLON.Vector3(0,60, 0), noa.rendering.addMeshToScene(i,false), i;
	    
    }

/***/ }),

/***/ "./gameState.js":
/*!**********************!*\
  !*** ./gameState.js ***!
  \**********************/
/*! exports provided: initState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });

global.gameState={1:'gathering',2:'started',3:'ended'}

function initState(){
	
	console.log('states inited')
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./gui/chat.js":
/*!*********************!*\
  !*** ./gui/chat.js ***!
  \*********************/
/*! exports provided: sendChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendChat", function() { return sendChat; });
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands */ "./gui/commands.js");
/* harmony import */ var _builds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../builds */ "./builds.js");
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");




var longstring=""


document.addEventListener('keydown', (event) => {
	if(event.key=="1"){
		debug=!debug
		if(debug){
			bigSignTime=3000
		}
		
	}
	if(!chatOn)
		return;
	
	if (event.key==1){
		//createBuild()
		Object(_builds__WEBPACK_IMPORTED_MODULE_1__["pasteBuild"])(pos[0],pos[1]-1,pos[2],Object(_blocklook__WEBPACK_IMPORTED_MODULE_2__["blocklook"])(noa))
		blockPick=blocks['stone']
	}
	if (event.key==2){
		blockPick=blocks['grass']
		
		Object(_builds__WEBPACK_IMPORTED_MODULE_1__["clearBuild"])()
	}
	//console.log(event.key)
	
	
	chatMessageOn=true
	if(event.key=="Backspace"){
		console.log(longstring.length)
		if(longstring.length<1){
			return;
		}else{
			
			var newstring=longstring.slice(0, -1)
			longstring=newstring
			chatMessage=longstring
		}
		
		return;
	}
	
	if(event.key=="/"){
		longstring="/"
		chatMessage=longstring
		return;
	}
	
	if(event.key=="Escape"){
		longstring=""
		chatMessage=longstring
		chatOn=false
		return;
	}
	
	if(event.key=="Enter"){
		
		if(longstring.startsWith("/tp")){
			
			Object(_commands__WEBPACK_IMPORTED_MODULE_0__["teleportChat"])(longstring)
			return;
		}
		
		if(longstring.startsWith("/give")){
			
			Object(_commands__WEBPACK_IMPORTED_MODULE_0__["giveChat"])(longstring)
		}
		if(longstring.startsWith("/clearall")){
			
			Object(_commands__WEBPACK_IMPORTED_MODULE_0__["clearAll"])()
		}
		chatMessage=""
		
		resultChatMessage=longstring.replace(/ /g,'')
		rtcblocklist.worldname=longstring.replace(/ /g,'')
		
		if(socketo!==null){
		socketo.emit('createworld',rtcblocklist.worldname)
		}
		 uis.multiplayer[0].textt=""
		  uis.worldinfo[0].textt=""
		longstring=""
		chatOn=false
		
		 
		setTimeout(function(){ chatMessageOn=false }, 3000);
		
		return;
	}
	
	if(event.key=="Shift"){
		return;
	}
	var c=event.key.toString()
	longstring=longstring.concat(c)
 
     
	 chatMessage=longstring
	 if(longstring.length>26){
		 return;
	 }
	 uis.multiplayer[0].textt=longstring.replace(/ /g,'')
     uis.worldinfo[0].textt=longstring.replace(/ /g,'')
})


function sendChat(str){
	
}



/***/ }),

/***/ "./gui/chest.js":
/*!**********************!*\
  !*** ./gui/chest.js ***!
  \**********************/
/*! exports provided: chest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chest", function() { return chest; });

global.chestList={}
function chest(){
	
	
	if(localStorage.getItem('chest')!==null){
		chestList=JSON.parse(localStorage.getItem('chest'))
	}
	
	uis['chest']=   [
		{type: "image", path:"./texPack/"+funpack+"/maingui/chest.png", x: 0, y: 0, width: 170, height: 87},//200 was 89
		{type: "slot", x:  0-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 0},
		{type: "slot", x:  (18 * 1)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 1},
		{type: "slot", x:  (18 * 2)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 2},
		{type: "slot", x:  (18 * 3)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 3},
		{type: "slot", x:  (18 * 4)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 4},
		{type: "slot", x:  (18 * 5)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 5},
		{type: "slot", x:  (18 * 6)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 6},
		{type: "slot", x:  (18 * 7)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 7},
		{type: "slot", x:  (18 * 8)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 8},
		
		
			{type: "slot", x:  0-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 9},
		{type: "slot", x:  (18 * 1)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 10},
		{type: "slot", x:  (18 * 2)-72, y: 4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 11},
		{type: "slot", x:  (18 * 3)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 12},
		{type: "slot", x:  (18 * 4)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 13},
		{type: "slot", x:  (18 * 5)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 14},
		{type: "slot", x:  (18 * 6)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 15},
		{type: "slot", x:  (18 * 7)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 16},
		{type: "slot", x:  (18 * 8)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 17},
		
		
		{type: "slot", x:  0-72,        y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 18},
		{type: "slot", x:  (18 * 1)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 19},
		{type: "slot", x:  (18 * 2)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 20},
		{type: "slot", x:  (18 * 3)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 21},
		{type: "slot", x:  (18 * 4)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 22},
		{type: "slot", x:  (18 * 5)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 23},
		{type: "slot", x:  (18 * 6)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 24},
		{type: "slot", x:  (18 * 7)-72, y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 25},
		{type: "slot", x:  (18 * 8)-72, y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 26},
		
		{type: "slot", x:  0-72,        y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 27},
		{type: "slot", x:  (18 * 1)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 28},
		{type: "slot", x:  (18 * 2)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 29},
		{type: "slot", x:  (18 * 3)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 30},
		{type: "slot", x:  (18 * 4)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 31},
		{type: "slot", x:  (18 * 5)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 32},
		{type: "slot", x:  (18 * 6)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 33},
		{type: "slot", x:  (18 * 7)-72, y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 34},
		{type: "slot", x:  (18 * 8)-72, y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 35}
		
		]
		
		
	
	
	
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./gui/clickEvent.js":
/*!***************************!*\
  !*** ./gui/clickEvent.js ***!
  \***************************/
/*! exports provided: clickEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickEvent", function() { return clickEvent; });
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound.js */ "./sound.js");



function clickEvent(){
	
	window.addEventListener("click", click, false);
	
}

	var sev=null
function click(event) {

   
    if (currentUI !== null) {
		
		
		

        var mousePos = getMousePos(event);

        for (var i of currentUI) {

            var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
            var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
            switch (i.type) {

					
					  case "button":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
						
						switch (i.action){
						case "back":
                        i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
					    currentUI=uis.hotbar
						
					    break;
						 
						 
						  case "ventilate":
						  i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
					Object(_sound_js__WEBPACK_IMPORTED_MODULE_0__["playsound"])('ventilate',0.1)
					if(air<12){
						air++
						health++
					}
						break;
						
						  case "garbage":
						  i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
					Object(_sound_js__WEBPACK_IMPORTED_MODULE_0__["playsound"])('garbage',0.1)
					scene.fogEnabled=false
					if(uis.screen[2].num>0){
					uis.screen[2].num-=0.5
					}
					if(uis.screen[3].framey<48){
					uis.screen[3].framey+=16
					}
						break;
						 
						 case "join":
						  i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						if(sev==null){
						// commandator('startserver '+'nabilov');
						 sev='not null'
						 dominator=true
						 //console.log('wow')
						}
						break;
						case "leave":
							 i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						//closeGame()
						break;
						
						case "type":
						   i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						chatOn=true
						
						console.log('lets chat')
							 //i.path="./maingui/button-pressed.png"
						//closeGame()
						break;
						
						case "save":
						   i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						   
							localStorage.setItem('worldData',JSON.stringify(rtcblocklist))
							gameStarted=false
							localStorage.setItem('gamestarted',gameStarted)
							
								currentUI=uis.hotbar
								var pos=noa.ents.getState(noa.playerEntity, 'position').position
						noa.world.invalidateVoxelsInAABB({base:[pos[0]-2000,pos[1]-1000,pos[2]-2000],max:[2000+pos[0],1000+pos[1],2000+pos[2]]})

						bigSign='Saving...'
						setTimeout(function(){  



						localStorage.setItem(rtcblocklist.worldname,JSON.stringify(storage))


						if(socketo!==null){
						for (const key in storage){
							
							var k=JSON.stringify(storage[key])
							
							
							   socketo.emit('chunk',{ids:key,chk:k,name:rtcblocklist.worldname});
						}
						}
						//socketo.emit('chunk',localStorage.getItem('cool'));
						location.reload()

						}, 3000);
						   
						   
						   
						
						break;
						
						case "naming":
						   i.path="./texPack/"+funpack+"/maingui/button-pressed.png"
						//chatOn=true
						
						//console.log('lets chat')
						rtcblocklist.worldname=i.textt
						
						//chacha()
						localStorage.setItem('worldData',JSON.stringify(rtcblocklist))
						currentUI=uis.hotbar
						if(socketo!==null){
							var cleandedtext=i.textt.replace(/ /g,'')
						socketo.emit('createworld',cleandedtext)
						}
						
						    gameStarted=true
							localStorage.setItem('gamestarted',gameStarted)
							location.reload()
						break;
						}
					 
                    }
					
					break;
					
					
					
					case "slot":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
                       if(itemStack[i.slotNum]!==null&& heldItem==null ){
						   heldItemCount=countStack[i.slotNum]
						heldItem=itemStack[i.slotNum]
						itemStack[i.slotNum]=null
						
					   }
					    else if(itemStack[i.slotNum]==null){
							itemStack[i.slotNum]=heldItem
							countStack[i.slotNum]= heldItemCount
							heldItem=null
						}
						
						else if(itemStack[i.slotNum]!==null && heldItem!==null ){
							var st=itemStack[i.slotNum]
							var ct=countStack[i.slotNum]
							itemStack[i.slotNum]=heldItem
							countStack[i.slotNum]= heldItemCount
							heldItem=st
							heldItemCount=ct
							
							
						}
                    }
					
					break;
			}
		}
	}
}


function isInsideRect(pos, x, y, w, h){
	return pos.x > x && pos.x < x + w * 4 && pos.y < y + h * 4 && pos.y > y;
}

function getMousePos(event) {
    var rect = c.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}

/***/ }),

/***/ "./gui/commands.js":
/*!*************************!*\
  !*** ./gui/commands.js ***!
  \*************************/
/*! exports provided: teleportChat, giveChat, clearAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teleportChat", function() { return teleportChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giveChat", function() { return giveChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAll", function() { return clearAll; });
function teleportChat(str){
	
	
		var k=str.split(" ")
			
			if(Number.isInteger(parseInt(k[1]))&&Number.isInteger(parseInt(k[2]))&&Number.isInteger(parseInt(k[3]))){
			noa.entities.setPosition(noa.playerEntity,parseInt(k[1]),parseInt(k[2]),parseInt(k[3]));
		str="player Teleported to "+k[1]+" "+k[2]+" "+k[3]
		chatMessage="player Teleported to "+k[1]+" "+k[2]+" "+k[3]
			}else{
				chatColor="red"
				chatMessage="wrong command"
				return;
			}
		
		datablock['message']=str
		str=""
		chatMessage=str
		return;
	
	
	
}

function giveChat(str){
	
	
		var k=str.split(" ")
		
		
		for (var i=0;i<itemStack.length;i++){
			
			if(itemStack[i]==null){
					itemStack[i]=jsonItems[k[1]]
						if(Number.isInteger(parseInt(k[2]))){
					countStack[i]=parseInt(k[2])
					 break;
						}else{
							chatColor="red"
							chatMessage="wrong command"
							return;
						}
			
			}
			
		}
	
	
	
}

function clearAll(){
	
	
		
		
		
		for (var i=0;i<itemStack.length;i++){
			
			itemStack[i]=null
			countStack[i]=0
					
			
			
		}
	
	
	
}


/***/ }),

/***/ "./gui/dragEvent.js":
/*!**************************!*\
  !*** ./gui/dragEvent.js ***!
  \**************************/
/*! exports provided: dragEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragEvent", function() { return dragEvent; });
function dragEvent(){
	
	document.addEventListener("mousedown", drag,{ passive: true});
	
}

var tt=false
var mousy=null
function drag(e){

	
	 if (currentUI !== null) {
	mouseX=e.screenX
	mouseY=e.screenY
	var mousePos = getMousePos(event);
	for (var i of currentUI) {

            var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
            var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
            switch (i.type) {
				
				  case "button":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
					
					}
					break;
					
					
				
				
				
			}
	}
	 }
	
	
	
}


function isInsideRect(pos, x, y, w, h){
	return pos.x > x && pos.x < x + w * 4 && pos.y < y + h * 4 && pos.y > y;
}

function getMousePos(event) {
    var rect = c.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}

/***/ }),

/***/ "./gui/hotbar.js":
/*!***********************!*\
  !*** ./gui/hotbar.js ***!
  \***********************/
/*! exports provided: hotbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotbar", function() { return hotbar; });

var dif=200
function hotbar(){
	
	uis['hotbar']=  [
		{type: "image", path:"./texPack/"+funpack+"/maingui/item_bar.png", x: 0, y:0, width: 168, height: 24},//200 was 89
		{type: "slot", x:  0-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 0},
		{type: "slot", x:  (18 * 1)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 1},
		{type: "slot", x:  (18 * 2)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 2},
		{type: "slot", x:  (18 * 3)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 3},
		{type: "slot", x:  (18 * 4)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 4},
		{type: "slot", x:  (18 * 5)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 5},
		{type: "slot", x:  (18 * 6)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 6},
		{type: "slot", x:  (18 * 7)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 7},
		{type: "slot", x:  (18 * 8)-72, y:  dif, width: 16, height: 16, slotLoc: "itemBar", slotNum: 8}
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./gui/inventory.js":
/*!**************************!*\
  !*** ./gui/inventory.js ***!
  \**************************/
/*! exports provided: inventory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventory", function() { return inventory; });

global.mainChest={items:[jsonItems["arrow"],null,null,null,null,null,null,null,null,
                          null,null,null,null,null,null,null,null,null,
						  null,null,null,null,null,null,null,null,null,
						  null,null],count:[1,0,0,0,0,0,0,0,0,
						  0,0,0,0,0,0,0,0,0,
						  0,0,0,0,0,0,0,0,0,
						  0,0]}



function inventory(){
	
	if(localStorage.getItem('mainChest')!==null){
		mainChest=JSON.parse(localStorage.getItem('mainChest'))
	}
	
	uis['inventory']=   [
		{type: "image", path:"./texPack/"+funpack+"/maingui/inventory.png", x: 0, y: 0, width: 170, height: 166},//200 was 89
		{type: "slot", x:  0-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 0},
		{type: "slot", x:  (18 * 1)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 1},
		{type: "slot", x:  (18 * 2)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 2},
		{type: "slot", x:  (18 * 3)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 3},
		{type: "slot", x:  (18 * 4)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 4},
		{type: "slot", x:  (18 * 5)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 5},
		{type: "slot", x:  (18 * 6)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 6},
		{type: "slot", x:  (18 * 7)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 7},
		{type: "slot", x:  (18 * 8)-72, y:  65, width: 16, height: 16, slotLoc: "itemBar", slotNum: 8},
		
		
	    {type: "slot", x:          0-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 9},
		{type: "slot", x:  (18 * 1)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 10},
		{type: "slot", x:  (18 * 2)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 11},
		{type: "slot", x:  (18 * 3)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 12},
		{type: "slot", x:  (18 * 4)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 13},
		{type: "slot", x:  (18 * 5)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 14},
		{type: "slot", x:  (18 * 6)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 15},
		{type: "slot", x:  (18 * 7)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 16},
		{type: "slot", x:  (18 * 8)-72, y:  45, width: 16, height: 16, slotLoc: "itemBar", slotNum: 17},
		
		
		{type: "slot", x:         0-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 18},
		{type: "slot", x:  (18 * 1)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 19},
		{type: "slot", x:  (18 * 2)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 20},
		{type: "slot", x:  (18 * 3)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 21},
		{type: "slot", x:  (18 * 4)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 22},
		{type: "slot", x:  (18 * 5)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 23},
		{type: "slot", x:  (18 * 6)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 24},
		{type: "slot", x:  (18 * 7)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 25},
		{type: "slot", x:  (18 * 8)-72, y:  26, width: 16, height: 16, slotLoc: "itemBar", slotNum: 26},
		
		{type: "slot", x:         0-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 27},
		{type: "slot", x:  (18 * 1)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 28},
		{type: "slot", x:  (18 * 2)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 29},
		{type: "slot", x:  (18 * 3)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 30},
		{type: "slot", x:  (18 * 4)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 31},
		{type: "slot", x:  (18 * 5)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 32},
		{type: "slot", x:  (18 * 6)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 33},
		{type: "slot", x:  (18 * 7)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 34},
		{type: "slot", x:  (18 * 8)-72, y:  7, width: 16, height: 16, slotLoc: "itemBar", slotNum: 35},
		
		{type: "slot", x:  0-72,        y:  -15, width: 16, height: 16, slotLoc: "itemBar", slotNum: 36},
		{type: "slot", x:  (18 * 1)-72, y:  -15, width: 16, height: 16, slotLoc: "itemBar", slotNum: 37}
		
		
		
		
		]
		
		
	
	
	
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./gui/kiosk.js":
/*!**********************!*\
  !*** ./gui/kiosk.js ***!
  \**********************/
/*! exports provided: kiosk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kiosk", function() { return kiosk; });
function kiosk(){
	
	uis['kiosk']= [
		   
			{type: "image", path:"./texPack/"+funpack+"/maingui/bokkusu.png",message:"Im cool Dude", x: 0, y:-60, width: 158, height: 53}
	
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./gui/menu.js":
/*!*********************!*\
  !*** ./gui/menu.js ***!
  \*********************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
function menu(){
	
	uis['menu']= [
		    {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:jsonLang[language]["backtogame"],action:"back", x: 0, y:0, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"join a game",action:"join", x: 0, y:30, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Close game",action:"leave", x: 0, y:60, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:jsonLang[language]["saveworld"],action:"save", x: 0, y:90, width: 200, height: 20},
			{type: "image", path:"./texPack/"+funpack+"/maingui/bokkusu.png",message:"Im cool Dude", x: 0, y:-60, width: 158, height: 53}
	
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./gui/moveEvent.js":
/*!**************************!*\
  !*** ./gui/moveEvent.js ***!
  \**************************/
/*! exports provided: moveEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveEvent", function() { return moveEvent; });
function moveEvent(){
	
	document.addEventListener('mousemove', mouseinfo,{ passive: true});
	
}


function mouseinfo(e){

	
	 if (currentUI !== null) {
	mouseX=e.screenX
	mouseY=e.screenY
	var mousePos = getMousePos(event);
	for (var i of currentUI) {

            var x = (c.width / 2) - (i.width * imgzoom / 2) + i.x * imgzoom;
            var y = (c.height / 2) - (i.height * imgzoom / 2) + i.y * imgzoom;
            switch (i.type) {
				
				  case "button":
                    if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
                      i.path="./texPack/"+funpack+"/maingui/button-hover.png"
                    }else{
						i.path="./texPack/"+funpack+"/maingui/button-normal.png"
					}
					break;
					
					case "border":
					
				 if (isInsideRect(mousePos, x, y, i.width /2, i.height/2)) {
						i.textt=(mouseX-c.width/2)+200
				      uis.settings[1].x=i.textt-100
				 
				 
						
						if(i.textt<-180 ){
						
						//i.textt=-100
						uis.settings[1].x=-100
						uis.settings[1].textt=0
						return;
						//uis.settings[1].textt=i.textt
						
					}
					
					if(i.textt>180){
						
						//i.textt=100
						uis.settings[1].x=100
						uis.settings[1].textt=100
						return;
						//uis.settings[1].textt=i.textt
						
					}
			            uis.settings[1].x=i.textt-100
						uis.settings[1].textt=Math.round(i.textt/2)
						rtcblocklist['chunkview']=uis.settings[1].textt
				    }
			         break;
	}
	 }
	
	
	
}
}


function isInsideRect(pos, x, y, w, h){
	return pos.x > x && pos.x < x + w * 4 && pos.y < y + h * 4 && pos.y > y;
}

function getMousePos(event) {
    var rect = c.getBoundingClientRect();
    return {x: event.clientX - rect.left, y: event.clientY - rect.top};
}

/***/ }),

/***/ "./gui/multiplayer.js":
/*!****************************!*\
  !*** ./gui/multiplayer.js ***!
  \****************************/
/*! exports provided: multiplayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplayer", function() { return multiplayer; });
function multiplayer(){
	
	uis['multiplayer']= [
	         {type: "message", path:"./texPack/"+funpack+"/maingui/textbox.png",textt:"",action:"", x: 0, y:-30, width: 200, height: 20},
		    {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"choose worldname",action:"type", x: 105, y:0, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Join game",action:"join", x: 105, y:30, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Stop Game Nabil",action:"leave", x: 105, y:60, width: 200, height: 20},
			    {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Back to Game",action:"back", x: -105, y:0, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Join game",action:"join", x: -105, y:30, width: 200, height: 20},
			{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Stop Game Nabil",action:"leave", x:-105, y:60, width: 200, height: 20},
			{type: "image", path:"./texPack/"+funpack+"/maingui/multiplayer.png", x: 0, y:-60, width: 158, height: 53}
	
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./gui/screen.js":
/*!***********************!*\
  !*** ./gui/screen.js ***!
  \***********************/
/*! exports provided: screen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen", function() { return screen; });

function screen(){
	
	
	
	
	uis['screen']=   [
		{type: "image", path:"./texPack/"+funpack+"/maingui/screen.png", x: 0, y: 0, width: 240, height: 240},//200 was 89
		{type: "hlight", path:"./texPack/"+funpack+"/maingui/hlight.png",textt:"ventilate",action:"ventilate", x: 0, y:-40, width: 20, height: 20},
		{type: "light", path:"./texPack/"+funpack+"/maingui/light.png",textt:"ventilate",action:"ventilate", x: 0, y:-40, width: 20, height: 20 ,num:4},
		{type: "imagesp", path:"./texPack/"+funpack+"/item/cake.png", x: 0, y: -40, width: 50, height: 50,framey:0},//200 was 89
		{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"throw garbage",action:"garbage", x: 0, y:40, width: 200, height: 20},
		{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"ventilate",action:"ventilate", x: 0, y:60, width: 200, height: 20}
		
		
	/*	{type: "slot", x:  0-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 0},
		{type: "slot", x:  (18 * 1)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 1},
		{type: "slot", x:  (18 * 2)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 2},
		{type: "slot", x:  (18 * 3)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 3},
		{type: "slot", x:  (18 * 4)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 4},
		{type: "slot", x:  (18 * 5)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 5},
		{type: "slot", x:  (18 * 6)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 6},
		{type: "slot", x:  (18 * 7)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 7},
		{type: "slot", x:  (18 * 8)-72, y:  27, width: 16, height: 16, slotLoc: "itemBar", slotNum: 8},
		
		
			{type: "slot", x:  0-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 9},
		{type: "slot", x:  (18 * 1)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 10},
		{type: "slot", x:  (18 * 2)-72, y: 4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 11},
		{type: "slot", x:  (18 * 3)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 12},
		{type: "slot", x:  (18 * 4)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 13},
		{type: "slot", x:  (18 * 5)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 14},
		{type: "slot", x:  (18 * 6)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 15},
		{type: "slot", x:  (18 * 7)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 16},
		{type: "slot", x:  (18 * 8)-72, y:  4, width: 16, height: 16, slotLoc: "itemBar", slotNum: 17},
		
		
		{type: "slot", x:  0-72,        y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 18},
		{type: "slot", x:  (18 * 1)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 19},
		{type: "slot", x:  (18 * 2)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 20},
		{type: "slot", x:  (18 * 3)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 21},
		{type: "slot", x:  (18 * 4)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 22},
		{type: "slot", x:  (18 * 5)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 23},
		{type: "slot", x:  (18 * 6)-72, y:   -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 24},
		{type: "slot", x:  (18 * 7)-72, y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 25},
		{type: "slot", x:  (18 * 8)-72, y:  -14, width: 16, height: 16, slotLoc: "itemBar", slotNum: 26},
		
		{type: "slot", x:  0-72,        y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 27},
		{type: "slot", x:  (18 * 1)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 28},
		{type: "slot", x:  (18 * 2)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 29},
		{type: "slot", x:  (18 * 3)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 30},
		{type: "slot", x:  (18 * 4)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 31},
		{type: "slot", x:  (18 * 5)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 32},
		{type: "slot", x:  (18 * 6)-72, y:   -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 33},
		{type: "slot", x:  (18 * 7)-72, y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 34},
		{type: "slot", x:  (18 * 8)-72, y:  -33, width: 16, height: 16, slotLoc: "itemBar", slotNum: 35}*/
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./gui/settings.js":
/*!*************************!*\
  !*** ./gui/settings.js ***!
  \*************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
function settings(){
	
	uis['settings']= [
	         {type: "border", path:"./texPack/"+funpack+"/maingui/textbox.png",textt:"",action:"", x: 0, y:0, width: 200, height: 20},
		    {type: "lever", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"",action:"type", x: 0, y:0, width: 100, height: 20}
			
	
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./gui/worldinfo.js":
/*!**************************!*\
  !*** ./gui/worldinfo.js ***!
  \**************************/
/*! exports provided: worldinfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldinfo", function() { return worldinfo; });
function worldinfo(){
	
	uis['worldinfo']= [
	          {type: "message", path:"./texPack/"+funpack+"/maingui/textag.png",textt:"Choose World",action:"", x: 0, y:-60, width: 200, height: 20},
	         {type: "message", path:"./texPack/"+funpack+"/maingui/textbox.png",textt:"",action:"", x: 0, y:-30, width: 200, height: 20},
		   // {type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"choose worldname",action:"type", x: 0, y:0, width: 200, height: 20},
			//{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Start game",action:"join", x: 0, y:30, width: 200, height: 20},
			//{type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"Stop Game ",action:"leave", x: 0, y:60, width: 200, height: 20},
			
	
		
		]
		
		
	
	
	
}

/***/ }),

/***/ "./hurt.js":
/*!*****************!*\
  !*** ./hurt.js ***!
  \*****************/
/*! exports provided: hurt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hurt", function() { return hurt; });



function  hurt(eng){
	
				 
				eng.prototype.gotHurt=function(mesh){
	 	
					mesh._children[0].material.ambientColor=BABYLON.Color3.Red()
						mesh._children[0].material.emissiveColor=BABYLON.Color3.Red()
				mesh._children[0].material.diffuseColor=BABYLON.Color3.Red()
				
				setTimeout(function(){ 
				noa.gotBetter(mesh)
				}, 500);
	 
 }
 
 
 eng.prototype.gotBetter=function(mesh){
	 
	 
	 mesh._children[0].material.ambientColor=BABYLON.Color3.White()
						mesh._children[0].material.emissiveColor=BABYLON.Color3.White()
				mesh._children[0].material.diffuseColor=BABYLON.Color3.White()
	 
	 
 }
 
eng.prototype.Died=function(mesh){
	 		mesh.rotation.z=Math.PI/3
				
					mesh._children[0].material.ambientColor=BABYLON.Color3.Red()
						mesh._children[0].material.emissiveColor=BABYLON.Color3.Red()
				mesh._children[0].material.diffuseColor=BABYLON.Color3.Red()
				
			
	 
 }
	
	
	
	
	
	
	
	
}


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocklook */ "./blocklook.js");
/* harmony import */ var _babylonjs_core_Legacy_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babylonjs/core/Legacy/legacy */ "../../node_modules/@babylonjs/core/Legacy/legacy.js");
/* harmony import */ var noa_engine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! noa-engine */ "../../node_modules/noa-engine/src/index.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./player.js");
/* harmony import */ var _itemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemList */ "./itemList.js");
/* harmony import */ var _langList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./langList */ "./langList.js");
/* harmony import */ var _worldgen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worldgen */ "./worldgen.js");
/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./registry */ "./registry.js");
/* harmony import */ var _keyFunc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./keyFunc */ "./keyFunc.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation */ "./animation.js");
/* harmony import */ var _ent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ent */ "./ent.js");
/* harmony import */ var _cuber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cuber */ "./cuber.js");
/* harmony import */ var _gui_chat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gui/chat */ "./gui/chat.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./particle */ "./particle.js");
/* harmony import */ var _fog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fog */ "./fog.js");
/* harmony import */ var _xhr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xhr */ "./xhr.js");
/* harmony import */ var _hurt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hurt */ "./hurt.js");
/* harmony import */ var _letterBoards__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./letterBoards */ "./letterBoards.js");
/* harmony import */ var _rtc__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rtc */ "./rtc.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./canvas */ "./canvas.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sound */ "./sound.js");
/* harmony import */ var _mouse_mouseAltFire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mouse/mouseAltFire */ "./mouse/mouseAltFire.js");
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sign */ "./sign.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gameState */ "./gameState.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./light */ "./light.js");
/* harmony import */ var _blockActions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blockActions */ "./blockActions.js");

global.worldtype='normal'
 
global.language="en_us"
//var lz=require("lz-string");
///rtc/////////////////////////////////////////
global.datablock = {};
global.channel=null
global.entdatablock={}
global.dominator=false
global.entMeshes={}
global.playerMeshes={}
global.rtcblocklist={}
global.storage={}
global.rideName='none'
global.rideNameRtc='none'
global.spawnedEnt=null
global.rtcHand=null
global.rtcPart=null
global.rtcName=null
global.entToRemove=null
//rtc ////////////////////////
global.blocks={}
global.clerk={}
global.socketo=null
global.gameStarted=null 

	if(JSON.parse(localStorage.getItem('worldData'))==null){
		rtcblocklist={}
	}else{
	rtcblocklist=JSON.parse(localStorage.getItem('worldData'))
	}
rtcblocklist['armor']=['bearhat','','','']
rtcblocklist['seed']='00000000000'
gameStarted=localStorage.getItem('gamestarted')
gameStarted=true
//player info////////////////////
global.playermesh=null
global.playerbody=null
global.fired=false
global.blockPick=0
global.facingF=false
global.kneeling=false
global.pos=null
global.inWater=false
//player info///////////////
global.scene=null
global.listofplayers={}
global.listofmobs={}
global.dataMoblock = {};
global.hitting=false
global.itemList={}
global.health=12
global.air=12
global.target=null
global.noa2=null
///servers socket io response//
global.serverResponse=null
global.entityList ={}
var entityIgnore=0
//modding
global.funpack="mod1"

if(window.location.href.indexOf("start") > -1){
	dominator=true
}
global.uuid = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js").v4;
global.mainplayerid=uuid()
/*setTimeout(function() {
		fetch('http://localhost:9559').then ( response => response.json())
			.then(function(data) {
				console.log('sweet')
				serverResponse=data
				resultChatMessage=serverResponse.welcome
				console.log(data)
				})
				})*/


// Engine options object, and engine instantiation:
























// or import from local filesystem when hacking locally:
// import { Engine } from '../../../noa'
var opts = {
    debug: true,
    showFPS: true,
    chunkSize: 24,
    chunkAddDistance: 4,
    chunkRemoveDistance: 5,
	playerStart: [0, 100, 0]
    // See `test` example, or noa docs/source, for more options
}
///////////////////noa engine/////////////////
var noa = new noa_engine__WEBPACK_IMPORTED_MODULE_2__["Engine"](opts)
/////////////////////noa engine/////////////////
noa2=noa
Object(_sound__WEBPACK_IMPORTED_MODULE_20__["initSound"])(noa)
Object(_gameState__WEBPACK_IMPORTED_MODULE_23__["initState"])()
Object(_light__WEBPACK_IMPORTED_MODULE_24__["light"])()
Object(_hurt__WEBPACK_IMPORTED_MODULE_16__["hurt"])(noa_engine__WEBPACK_IMPORTED_MODULE_2__["Engine"])
scene=noa.rendering.getScene()
Object(_itemList__WEBPACK_IMPORTED_MODULE_4__["getItemList"])(scene)
Object(_langList__WEBPACK_IMPORTED_MODULE_5__["getLangList"])()
global.k=noa
Object(_fog__WEBPACK_IMPORTED_MODULE_14__["makeFog"])(scene,noa)
Object(_registry__WEBPACK_IMPORTED_MODULE_7__["initBlocks"])(noa)
Object(_ent__WEBPACK_IMPORTED_MODULE_10__["makeStaticMesh"])(noa,'boat')
Object(_ent__WEBPACK_IMPORTED_MODULE_10__["makeEntMesh"])(noa,'squid')
Object(_ent__WEBPACK_IMPORTED_MODULE_10__["makeEntMesh"])(noa,'warden')
Object(_ent__WEBPACK_IMPORTED_MODULE_10__["makeEntMesh"])(noa,'boy')
Object(_ent__WEBPACK_IMPORTED_MODULE_10__["makeEntMesh"])(noa,'cow')
Object(_ent__WEBPACK_IMPORTED_MODULE_10__["makeStaticMesh"])(noa,'minecart')
Object(_sign__WEBPACK_IMPORTED_MODULE_22__["sign"])(noa)
// global position///////////// 
pos = noa.ents.getState(noa.playerEntity, 'position').position
// each tick, consume any scroll events and use them to zoom camera

var optio={
				height:5,
				width:10,
				depth: 1
			}
			
			var scene=noa.rendering.getScene()
			var mat = noa.rendering.makeStandardMaterial('box')
			const box = new _babylonjs_core_Legacy_legacy__WEBPACK_IMPORTED_MODULE_1__["MeshBuilder"].CreateBox("box", optio, scene);
			box.material=mat
			mat.hasAlpha=true
			mat.alpha=0.5
		 noa.rendering.addMeshToScene(box, false,[0,0,0])
		 
noa.on('tick', function (dt) {

	if(playermesh==null){
		
		return;
	}

    var scroll = noa.inputs.state.scrolly
    if (scroll !== 0) {
		
	    selected+= (scroll > 0) ? 1 : -1
		blockPick+= (scroll > 0) ? 1 : -1
		
		if(selected<0 || selected>8){
			selected=0
		}
			Object(_player__WEBPACK_IMPORTED_MODULE_3__["getHand"])(noa,itemStack[selected])
			
	    if(blockPick<0 || blockPick>10){
			blockPick=0
		}
		
		
		
       
    }
	
	
		/*	 if(noa.targetedBlock){
					 
					 if(blocklook(noa)=='north'){
						 
						 box.rotation.y=Math.PI
					 }
					 
					  if(blocklook(noa)=='south'){
						 
						 box.rotation.y=0
					 }
					  if(blocklook(noa)=='east'){
						 
						 box.rotation.y=Math.PI/2
					 }
					 
					  if(blocklook(noa)=='west'){
						 
						 box.rotation.y=-Math.PI/2
					 }
					 
					 pos = noa.ents.getState(noa.playerEntity, 'position').position

					  
					 
					 box.position.copyFromFloats(m.position.x+0.5, m.position.y+2.5, m.position.z)
				
				 
				 }else{
					 	 box.position.y=1000
				 box.position.x=0
				 box.position.z=0
				 }*/
})





global.onRail=false
global.riding=false
global.swimming=false


noa.on('beforeRender', function(dt) {
	
	if(playerbody==null){
		return;
	}
		if(playermesh!==null){
		Object(_animation__WEBPACK_IMPORTED_MODULE_9__["playerAnim"])(playermesh,noa)
	}
	Object(_blockActions__WEBPACK_IMPORTED_MODULE_25__["blockActions"])(noa)
	

	})


////   launching game ////////////////////////////////////////////////
Object(_rtc__WEBPACK_IMPORTED_MODULE_18__["rtc"])()
					
			if(gameStarted){
			 Object(_worldgen__WEBPACK_IMPORTED_MODULE_6__["makeWorld"])(noa)	
			 Object(_player__WEBPACK_IMPORTED_MODULE_3__["makePlayer"])(noa,1 )	
	  
			}			
            Object(_canvas__WEBPACK_IMPORTED_MODULE_19__["makeCanvas"])(noa)
	       
		   
			
					
					var timeout=setTimeout(function(){
					 //   makeSuperEnt(noa,'warden',2,[10,100,10])	
					Object(_keyFunc__WEBPACK_IMPORTED_MODULE_8__["initKeys"])(noa)

		clearTimeout(timeout);
			}, 3000);
			
			
			var timeout1=setTimeout(function(){  
			Object(_letterBoards__WEBPACK_IMPORTED_MODULE_17__["initBoard"])(noa)
			clearTimeout(timeout1);
			}, 10000);
			
			if(socketo==null){
				if(localStorage.getItem(rtcblocklist.worldname)!==null){
					
				storage=JSON.parse(localStorage.getItem(rtcblocklist.worldname))
			
				}
			}
			
				
			 Object(_xhr__WEBPACK_IMPORTED_MODULE_15__["getUuid"])('sing')
			 
			 debug=true
			 bigSignTime=3000
			 
			 
			 
			 
			 

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./itemList.js":
/*!*********************!*\
  !*** ./itemList.js ***!
  \*********************/
/*! exports provided: getItemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemList", function() { return getItemList; });
/* harmony import */ var _itemRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemRegistry */ "./itemRegistry.js");


global.jsonItems={}
	
		var reqContext = __webpack_require__("./json sync \\.json$")
    reqContext.keys().forEach(name => {
        // convert name ('./foo.js') to bare name ('foo')
      var bareName = /\.\/(.*)\.json/.exec(name)[1]
	
		jsonItems[bareName]=reqContext(name)
		
		
      
    })
	
	function getItemList(scene){
		
		
		
	
	
	for (const key in jsonItems){
		//console.log(key)
		 Object(_itemRegistry__WEBPACK_IMPORTED_MODULE_0__["createItems"])(scene,key)
		
	}
	
		
	}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./itemRegistry.js":
/*!*************************!*\
  !*** ./itemRegistry.js ***!
  \*************************/
/*! exports provided: createItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItems", function() { return createItems; });

function  createItems(scene,name){

	 var blendtexture = new BABYLON.DynamicTexture("myCanvas", 100, scene, true,BABYLON.Texture.NEAREST_SAMPLINGMODE);
    var context = blendtexture.getContext();
    //blendtexture.drawText("text", 0, 40, "bold 48px Arial", "black", "white", true);

    /////////////////////////////////////////////////////////
    ///////// Using Canvas 2D directly
    /////////////////////////////////////////////////////////
    var extrudedMeshThickness = 0.1;
    var planeSize = 1;
    var imageObj = new Image();
    var blendMaterial;
    var canvasHeight = 100;
    var canvasWidth = 100;
	var blankmesh=null;
	imageObj.src ="./texPack/"+funpack+"/item/"+name+".png";
	
    imageObj.onload = function () {
        context.imageSmoothingEnabled = false;
        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvasWidth, canvasHeight);
        blendtexture.update();
        var imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
        var data = imageData.data;

        // GetTextureOutline(ImageData, keepOutline, keepOtherPixels)
        var pixels_list = GetTextureOutline(data, true, true);
        var lines = ExtractLinesFromPixelsList(pixels_list, false);

        context.putImageData(imageData, 0, 0);
        blendtexture.update();

        blendMaterial = new BABYLON.StandardMaterial("j", scene);
      //  blendMaterial.emissiveTexture = blendtexture;
		  blendMaterial.diffuseTexture = blendtexture;
		
        blendMaterial.opacityTexture = blendtexture;

        var plane1 = BABYLON.Mesh.CreatePlane("plane1", planeSize, scene, true, BABYLON.Mesh.DOUBLESIDE);
        plane1.material = blendMaterial;

        var plane2 = BABYLON.Mesh.CreatePlane("plane2", planeSize, scene, true, BABYLON.Mesh.DOUBLESIDE);
        plane2.material = blendMaterial;
        plane2.position.z = extrudedMeshThickness;
		
		var glowTexture = new BABYLON.NoiseProceduralTexture("perlin", 32, scene);
		
 
  blendMaterial.backFaceCulling = false;
	 blendMaterial.diffuseTexture = blendtexture;//glowTexture;
	 blendMaterial.emissiveColor =  BABYLON.Color3.White()
	  blendMaterial.diffuseColor =  BABYLON.Color3.White()
	   blendMaterial.ambientColor = BABYLON.Color3.White()//new BABYLON.Color3(200, 200, 200);
	   blendMaterial.specularColor = BABYLON.Color3.White()
	//blendMaterial.emissiveTexture =glowTexture;// blendtexture;
	 blendMaterial.ambientTexture =blendtexture;
	  blendMaterial.specularTexture =blendtexture;
	    blendMaterial.disableLighting = true;
	
	    glowTexture.animationSpeedFactor = 8;
	 
		

        let positions = [];
        let indices = [];
        let normals = [];
        let colorlist = [];

        //console.log(imageObj.width);
        //console.log(imageObj.height);
        let x_ratio = planeSize / blendtexture.getSize().width;
        let y_ratio = planeSize / blendtexture.getSize().height;
        
        let pixels_index = 0;
        // Building the faces around the outlines, given the ordered pixels
        for (var i = 0; i < lines.length; i++) {
            for (var j = 0; j < lines[i].length; j++) {
                var x1_front = lines[i][j].x * x_ratio - planeSize / 2;
                var y1_front = lines[i][j].y * y_ratio - planeSize / 2;
                var z1_front = 0;
                var x2_front;
                var y2_front;
                var z2_front = 0;
                var c1 = lines[i][j].color;
                var a1 = lines[i][j].alpha;
                var c2;
                var a2;

                if (j + 1 == lines[i].length) {
                    x2_front = lines[i][0].x * x_ratio - planeSize / 2;
                    y2_front = lines[i][0].y * y_ratio - planeSize / 2;
                    c2 = lines[i][0].color;
                    a2 = lines[i][0].alpha;
                } else {
                    x2_front = lines[i][j + 1].x * x_ratio - planeSize / 2;
                    y2_front = lines[i][j + 1].y * y_ratio - planeSize / 2;
                    c2 = lines[i][j + 1].color;
                    a2 = lines[i][j + 1].alpha;
                }

                var x1_back = x1_front;
                var y1_back = y1_front;
                var z1_back = extrudedMeshThickness;
                var x2_back = x2_front;
                var y2_back = y2_front;
                var z2_back = extrudedMeshThickness;

                var vec1Front = new BABYLON.Vector3(x1_front, y1_front, z1_front);
                var vec2Front = new BABYLON.Vector3(x2_front, y2_front, z2_front);
                var vec1Back = new BABYLON.Vector3(x1_back, y1_back, z1_back);
                var vec2Back = new BABYLON.Vector3(x2_back, y2_back, z2_back);

                positions.push(vec1Front.x, vec1Front.y, vec1Front.z,
                    vec2Front.x, vec2Front.y, vec2Front.z,
                    vec1Back.x, vec1Back.y, vec1Back.z,
                    vec2Back.x, vec2Back.y, vec2Back.z);
                indices.push(pixels_index, pixels_index + 1, pixels_index + 2);
                indices.push(pixels_index + 3, pixels_index + 2, pixels_index + 1);
                pixels_index += 4;
                colorlist.push(c1.r, c1.g, c1.b, a1);
                colorlist.push(c2.r, c2.g, c2.b, a2);
                colorlist.push(c1.r, c1.g, c1.b, a1);
                colorlist.push(c2.r, c2.g, c2.b, a2);
            }
        }

        BABYLON.VertexData.ComputeNormals(positions, indices, normals);
        let vertexData = new BABYLON.VertexData();

        // stuff its buffers with your stuff
        vertexData.positions = positions;
        vertexData.indices = indices;
        vertexData.normals = normals;
        vertexData.colors = colorlist;

         blankmesh = new BABYLON.Mesh("generated_mesh", scene);
        vertexData.applyToMesh(blankmesh, true);
        blankmesh.scaling.y *= -1;

        var blank_mat = new BABYLON.StandardMaterial('generated_mesh_mat', scene);
		blank_mat.specularColor = BABYLON.Color3.White()
		blank_mat.diffuseColor = BABYLON.Color3.White()
		blank_mat.ambientColor = BABYLON.Color3.White()
        blank_mat.backFaceCulling = false;
        blankmesh.bakeCurrentTransformIntoVertices();
        blankmesh.material = blank_mat;

        plane1.parent = blankmesh;
        plane2.parent = blankmesh;
		
		
		
		 
		
		

       
		
		
		//var hl = new BABYLON.HighlightLayer("hl1", scene);
	//hl.addMesh( blankmesh, BABYLON.Color3.Green());
	//hl.addMesh( plane1, BABYLON.Color3.Green());
      
        //thickDonut.position.y = 3;
		 
		
   };
    //imageObj.src ="./textures/material/item_apple.png";
	
	

    var GetTextureOutline = function (data, keepOutline, keepOtherPixels) {
        var not_outline = [];
        var pixels_list = [];
        for (var j = 0; j < data.length; j = j + 4) {
            var alpha = data[j + 3];
            var current_alpha_index = j + 3;
            // Not Invisible
            if (alpha != 0) {
                var top_alpha = data[current_alpha_index - (canvasWidth * 4)];
                var bottom_alpha = data[current_alpha_index + (canvasWidth * 4)];
                var left_alpha = data[current_alpha_index - 4];
                var right_alpha = data[current_alpha_index + 4];

                if ((top_alpha === undefined || top_alpha == 0) ||
                    (bottom_alpha === undefined || bottom_alpha == 0) ||
                    (left_alpha === undefined || left_alpha == 0) ||
                    (right_alpha === undefined || right_alpha == 0)) {
                    pixels_list.push({
                        x: (j / 4) % canvasWidth,
                        y: parseInt((j / 4) / canvasWidth),
                        color: new BABYLON.Color3(data[j] / 255, data[j + 1] / 255, data[j + 2] / 255),
                        alpha: data[j + 3] / 255
                    });

                    if (!keepOutline) {
                        data[j] = 255;
                        data[j + 1] = 0;
                        data[j + 2] = 255;
                    }
                } else if (!keepOtherPixels) {
                    not_outline.push(j);
                }
            }

        }

        // Remove not-outline pixels
        for (var i = 0; i < not_outline.length; i++) {
            if (!keepOtherPixels) {
                data[not_outline[i]] = 0;
                data[not_outline[i] + 1] = 0;
                data[not_outline[i] + 2] = 0;
                data[not_outline[i] + 3] = 0;
            }
        }


        return pixels_list;
    }

    var ExtractLinesFromPixelsList = function (pixelsList, sortPixels) {
        if (sortPixels) {
            // Sort pixelsList
            function sortY(a, b) {
                if (a.y == b.y) return a.x - b.x;
                return a.y - b.y;
            }
            pixelsList.sort(sortY);
        }

        var lines = [];
        var line = [];
        var pixelAdded = true;
        var skipDiagonals = true;
        line.push(pixelsList[0]);
        pixelsList.splice(0, 1);

        var countPixels = 0;
        while (pixelsList.length != 0) {
            if (!pixelAdded && !skipDiagonals) {
                lines.push(line);
                line = [];
                line.push(pixelsList[0]);
                pixelsList.splice(0, 1);
            } else if (!pixelAdded) {
                skipDiagonals = false;
            }

            pixelAdded = false;
            for (var i = 0; i < pixelsList.length; i++) {
                if ((skipDiagonals && (
                    line[line.length - 1].x + 1 == pixelsList[i].x && line[line.length - 1].y == pixelsList[i].y ||
                    line[line.length - 1].x - 1 == pixelsList[i].x && line[line.length - 1].y == pixelsList[i].y ||
                    line[line.length - 1].x == pixelsList[i].x && line[line.length - 1].y + 1 == pixelsList[i].y ||
                    line[line.length - 1].x == pixelsList[i].x && line[line.length - 1].y - 1 == pixelsList[i].y)) || (!skipDiagonals && (
                        line[line.length - 1].x + 1 == pixelsList[i].x && line[line.length - 1].y + 1 == pixelsList[i].y ||
                        line[line.length - 1].x + 1 == pixelsList[i].x && line[line.length - 1].y - 1 == pixelsList[i].y ||
                        line[line.length - 1].x - 1 == pixelsList[i].x && line[line.length - 1].y + 1 == pixelsList[i].y ||
                        line[line.length - 1].x - 1 == pixelsList[i].x && line[line.length - 1].y - 1 == pixelsList[i].y
                    ))) {
                    line.push(pixelsList[i]);
                    pixelsList.splice(i, 1);
                    i--;
                    pixelAdded = true;
                    skipDiagonals = true;
                }
            }


        }
        lines.push(line);
        return lines;
	}
	
	 setTimeout(function() {
		
	  
	  
	
		//sweet=blankmesh
		itemList[name]=blankmesh
	
		//projectiles['stone_sword']=blankmesh
	return blankmesh;
					 
						}, 1000);
					
					
    };

/***/ }),

/***/ "./json sync \\.json$":
/*!****************************************!*\
  !*** ./json sync nonrecursive \.json$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrow.json": "./json/arrow.json",
	"./bearhat.json": "./json/bearhat.json",
	"./bed.json": "./json/bed.json",
	"./bell.json": "./json/bell.json",
	"./boat.json": "./json/boat.json",
	"./chest.json": "./json/chest.json",
	"./door.json": "./json/door.json",
	"./ebutton.json": "./json/ebutton.json",
	"./firecracker.json": "./json/firecracker.json",
	"./grass_top.json": "./json/grass_top.json",
	"./ladder.json": "./json/ladder.json",
	"./oakfence.json": "./json/oakfence.json",
	"./pc.json": "./json/pc.json",
	"./rail.json": "./json/rail.json",
	"./railside.json": "./json/railside.json",
	"./stairs.json": "./json/stairs.json",
	"./sword.json": "./json/sword.json",
	"./vortex.json": "./json/vortex.json",
	"./waterside.json": "./json/waterside.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./json sync \\.json$";

/***/ }),

/***/ "./json/arrow.json":
/*!*************************!*\
  !*** ./json/arrow.json ***!
  \*************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"arrow\",\"texture\":\"/item/arrow.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/bearhat.json":
/*!***************************!*\
  !*** ./json/bearhat.json ***!
  \***************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"bearhat\",\"texture\":\"/item/bearhat.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/bed.json":
/*!***********************!*\
  !*** ./json/bed.json ***!
  \***********************/
/*! exports provided: name, texture, held, thrown, north, south, east, west, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"bed\",\"texture\":\"/item/bed.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]},\"north\":{\"Close\":[0.5,0,-1],\"Closerotation\":[-1.57,3.14,0]},\"south\":{\"Close\":[0.5,0,2],\"Closerotation\":[-1.57,0,0]},\"east\":{\"Close\":[-1,0,0.5],\"Closerotation\":[-1.57,-1.57,0]},\"west\":{\"Close\":[2,0,0.5],\"Closerotation\":[-1.57,1.57,0]}}");

/***/ }),

/***/ "./json/bell.json":
/*!************************!*\
  !*** ./json/bell.json ***!
  \************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"bell\",\"texture\":\"/item/bell.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/boat.json":
/*!************************!*\
  !*** ./json/boat.json ***!
  \************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"boat\",\"texture\":\"/item/boat.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/chest.json":
/*!*************************!*\
  !*** ./json/chest.json ***!
  \*************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"chest\",\"texture\":\"/item/chest.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/door.json":
/*!************************!*\
  !*** ./json/door.json ***!
  \************************/
/*! exports provided: name, north, south, east, west, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"door\",\"north\":{\"Open\":[0,0,0.5],\"Close\":[0.5,0,0],\"Closerotation\":[0,3.14,0],\"Openrotation\":[0,1.57,0]},\"south\":{\"Open\":[0,0,0.5],\"Close\":[0.5,0,1],\"Closerotation\":[0,0,0],\"Openrotation\":[0,1.57,0]},\"east\":{\"Open\":[0.5,0,0],\"Close\":[0,0,0.5],\"Closerotation\":[0,-1.57,0],\"Openrotation\":[0,0,0]},\"west\":{\"Open\":[0.5,0,0],\"Close\":[1,0,0.5],\"Closerotation\":[0,1.57,0],\"Openrotation\":[0,0,0]},\"texture\":\"/item/door.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/ebutton.json":
/*!***************************!*\
  !*** ./json/ebutton.json ***!
  \***************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ebutton\",\"texture\":\"/item/ebutton.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/firecracker.json":
/*!*******************************!*\
  !*** ./json/firecracker.json ***!
  \*******************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"firecracker\",\"texture\":\"/item/firecracker.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/grass_top.json":
/*!*****************************!*\
  !*** ./json/grass_top.json ***!
  \*****************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"grass_top\",\"texture\":\"/item/grass_top.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/ladder.json":
/*!**************************!*\
  !*** ./json/ladder.json ***!
  \**************************/
/*! exports provided: name, north, south, east, west, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ladder\",\"north\":{\"Open\":[0.5,0,0.9],\"Close\":[0.5,0.5,0.9],\"Closerotation\":[0,3.14,0],\"Openrotation\":[0,0,0]},\"south\":{\"Open\":[0.5,0,0.1],\"Close\":[0.5,0.5,0.1],\"Closerotation\":[0,0,0],\"Openrotation\":[0,0,0]},\"east\":{\"Open\":[0.9,0,0.5],\"Close\":[0.9,0.5,0.5],\"Closerotation\":[0,-1.57,0],\"Openrotation\":[0,-1.57,0]},\"west\":{\"Open\":[0.1,0,0.5],\"Close\":[0.1,0.5,0.5],\"Closerotation\":[0,1.57,0],\"Openrotation\":[0,1.57,0]}}");

/***/ }),

/***/ "./json/oakfence.json":
/*!****************************!*\
  !*** ./json/oakfence.json ***!
  \****************************/
/*! exports provided: name, north, south, east, west, texture, parent, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"oakfence\",\"north\":{\"Open\":[0.5,0,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[0,1.57,0],\"Openrotation\":[0,0,0]},\"south\":{\"Open\":[0.5,0,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[0,-1.57,0],\"Openrotation\":[0,3.14,0]},\"east\":{\"Open\":[0.5,0,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[0,3.14,0],\"Openrotation\":[0,1.57,0]},\"west\":{\"Open\":[0.5,0,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[0,0,0],\"Openrotation\":[0,-1.57,0]},\"texture\":\"/blocks/floor.png\",\"parent\":\"baseitem\"}");

/***/ }),

/***/ "./json/pc.json":
/*!**********************!*\
  !*** ./json/pc.json ***!
  \**********************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"pc\",\"texture\":\"/item/pc.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/rail.json":
/*!************************!*\
  !*** ./json/rail.json ***!
  \************************/
/*! exports provided: name, north, south, east, west, held, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"rail\",\"north\":{\"Open\":[0.5,0.5,1],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,3.14,0],\"Openrotation\":[0,3.14,0]},\"south\":{\"Open\":[0.5,0.5,0],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,3.14,0],\"Openrotation\":[0,3.14,0]},\"east\":{\"Open\":[1,0.5,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,-1.57,0],\"Openrotation\":[0,-1.57,0]},\"west\":{\"Open\":[0,0.5,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,1.57,0],\"Openrotation\":[0,1.57,0]},\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}}}");

/***/ }),

/***/ "./json/railside.json":
/*!****************************!*\
  !*** ./json/railside.json ***!
  \****************************/
/*! exports provided: name, north, south, east, west, held, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"rail\",\"north\":{\"Open\":[0.5,0.5,1],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,3.14,0],\"Openrotation\":[0,3.14,0]},\"south\":{\"Open\":[0.5,0.5,0],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,3.14,0],\"Openrotation\":[0,3.14,0]},\"east\":{\"Open\":[1,0.5,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,-1.57,0],\"Openrotation\":[0,-1.57,0]},\"west\":{\"Open\":[0,0.5,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,1.57,0],\"Openrotation\":[0,1.57,0]},\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}}}");

/***/ }),

/***/ "./json/stairs.json":
/*!**************************!*\
  !*** ./json/stairs.json ***!
  \**************************/
/*! exports provided: name, north, south, east, west, texture, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"stairs\",\"north\":{\"Open\":[0.5,0,0],\"Close\":[0.5,0,0],\"Closerotation\":[0,0,0],\"Openrotation\":[-1.57,3.14,0]},\"south\":{\"Open\":[0.5,0,1],\"Close\":[0.5,0,1],\"Closerotation\":[0,3.14,0],\"Openrotation\":[-1.57,0,0]},\"east\":{\"Open\":[0,0,0.5],\"Close\":[0,0,0.5],\"Closerotation\":[0,1.57,0],\"Openrotation\":[-1.57,-1.57,0]},\"west\":{\"Open\":[1,0,0.5],\"Close\":[1,0,0.5],\"Closerotation\":[0,-1.57,0],\"Openrotation\":[-1.57,1.57,0]},\"texture\":\"textures/block/oak_planks.png\"}");

/***/ }),

/***/ "./json/sword.json":
/*!*************************!*\
  !*** ./json/sword.json ***!
  \*************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"sword\",\"texture\":\"/item/sword.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[0.8,1.45,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/vortex.json":
/*!**************************!*\
  !*** ./json/vortex.json ***!
  \**************************/
/*! exports provided: name, texture, held, thrown, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vortex\",\"texture\":\"/item/vortex.png\",\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}},\"thrown\":{\"x\":0.6,\"y\":0,\"z\":1,\"rotation\":[0,-1.57,-0.78],\"scale\":[1.5,1.5,1.5]}}");

/***/ }),

/***/ "./json/waterside.json":
/*!*****************************!*\
  !*** ./json/waterside.json ***!
  \*****************************/
/*! exports provided: name, north, south, east, west, held, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"waterside\",\"north\":{\"Open\":[0.5,0.5,1],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,3.14,0],\"Openrotation\":[0,3.14,0]},\"south\":{\"Open\":[0.5,0.5,0],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,3.14,0],\"Openrotation\":[0,3.14,0]},\"east\":{\"Open\":[1,0.5,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,-1.57,0],\"Openrotation\":[0,-1.57,0]},\"west\":{\"Open\":[0,0.5,0.5],\"Close\":[0.5,0,0.5],\"Closerotation\":[1.57,1.57,0],\"Openrotation\":[0,1.57,0]},\"held\":{\"hand\":{\"x\":-0.3,\"y\":-2.1,\"z\":0.2,\"rotation\":[1.57,0,0],\"scale\":[0.6,0.6,0.6]},\"third\":{\"x\":0.6,\"y\":-0.2,\"z\":1,\"rotation\":[0,1.3,0],\"scale\":[1.5,1.5,1.5]}}}");

/***/ }),

/***/ "./keyFunc.js":
/*!********************!*\
  !*** ./keyFunc.js ***!
  \********************/
/*! exports provided: initKeys, drop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initKeys", function() { return initKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return drop; });
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound.js */ "./sound.js");
/* harmony import */ var _projectile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectile.js */ "./projectile.js");
/* harmony import */ var _fly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fly.js */ "./fly.js");
/* harmony import */ var _armor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./armor.js */ "./armor.js");
/* harmony import */ var _mouse_mouseFire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mouse/mouseFire.js */ "./mouse/mouseFire.js");
/* harmony import */ var _mouse_mouseAltFire_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mouse/mouseAltFire.js */ "./mouse/mouseAltFire.js");
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocklook */ "./blocklook.js");
/* harmony import */ var _ent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ent */ "./ent.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player */ "./player.js");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animation */ "./animation.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portal */ "./portal.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./light */ "./light.js");
/* harmony import */ var _mouse_chestAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mouse/chestAction */ "./mouse/chestAction.js");













const screenshot = __webpack_require__(/*! canvas-screenshot */ "../../node_modules/canvas-screenshot/index.js")

global.isFlying=false;
	var k=null
	var music=null
	
	
	var directions={"north":0,"south":1,"east":2,"west":3}
		

function  initKeys(noa){
	
	
	
k=noa
noa.camera.zoomDistance=10
var scene=noa.rendering.getScene()



Object(_fly_js__WEBPACK_IMPORTED_MODULE_2__["flyState"])()
// place some grass on right click
noa.inputs.down.on('alt-fire', function () {
	
	if(chatOn){
		return;
	}
	if(currentUI!==uis.hotbar){
		return;
	}
	if(Object(_mouse_mouseAltFire_js__WEBPACK_IMPORTED_MODULE_5__["mouseAltFire"])(noa)=='door'){
		return;
	}
	if(Object(_mouse_mouseAltFire_js__WEBPACK_IMPORTED_MODULE_5__["mouseAltFire"])(noa)=='lid'){
		return;
	}
		fired=true;
    if (noa.targetedBlock) {
		//playsound('blop',0.1)
		if(blockPick!==blocks['rack']){
		//portal(noa,[noa.targetedBlock.position[0],noa.targetedBlock.position[1],noa.targetedBlock.position[2]])
		}
		if(noa.world.getBlockID(noa.targetedBlock.position[0],noa.targetedBlock.position[1]+2,noa.targetedBlock.position[2])==blocks['watertop']){
		
		Object(_ent__WEBPACK_IMPORTED_MODULE_7__["makeStaticEnt"])(noa,'boat',[noa.targetedBlock.position[0],noa.targetedBlock.position[1]+3,noa.targetedBlock.position[2]])
		
		//rideName='none';
		//rideNameRtc=rideName
		return;
		}
		if(noa.world.getBlockID(noa.targetedBlock.position[0],noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2])==blocks['rail']){
		
		Object(_ent__WEBPACK_IMPORTED_MODULE_7__["makeStaticEnt"])(noa,'minecart',[noa.targetedBlock.position[0]+0.5,noa.targetedBlock.position[1]+1,noa.targetedBlock.position[2]+0.5])
		
		//rideName='none';
		//rideNameRtc=rideName
		return;
		}
		
        var pos = noa.targetedBlock.adjacent
		if(itemStack[selected]==null){
			return;
		}
	noa.setBlock(blocks[itemStack[selected].name], pos[0], pos[1], pos[2])
	countStack[selected]--
	if(countStack[selected]<1){
		itemStack[selected]=null
	}
	var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
	Object(_light__WEBPACK_IMPORTED_MODULE_11__["addToShading"])(pos[0],pos[1],pos[2],id)
		var dir=Object(_blocklook__WEBPACK_IMPORTED_MODULE_6__["blocklook"])(noa)
		
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		}
	//	console.log(rtcblocklist)
	
		datablock.content3=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		//console.log(datablock.content3)
		
    }
	
})



noa.inputs.up.on('alt-fire', function () {
	if(chatOn){
		return;
	}
		fired=false;
  
})



noa.inputs.down.on('social', function () {
	
	if(chatOn){
		return;
	}
   facingF=!facingF
})

noa.inputs.up.on('chat', function () {
	
	
		
		
   chatOn=true
})

noa.inputs.up.on('zoom', function () {
	if(chatOn){
		return;
	}
	
	 if (noa.camera.zoomDistance == 10) {noa.camera.zoomDistance = 0;
		for (var i=0;i<playermesh.getChildren().length;i++){
					playermesh._children[i].visibility=false
				}
		}
	
        else if (noa.camera.zoomDistance == 0) {noa.camera.zoomDistance = 10;
		for (var i=0;i<playermesh.getChildren().length;i++){
					playermesh._children[i].visibility=true
				}
		}
	
})

noa.inputs.up.on('inventory', function () {
	
	localStorage.setItem('blockss',JSON.stringify(rtcblocklist))
	localStorage.setItem('chest',JSON.stringify(chestList))
	localStorage.setItem('mainChest',JSON.stringify(mainChest))
	//writeJson('info.json',rtcblocklist)
	if(chatOn){
		return;
	}
	
	if(currentUI==uis.inventory){
		currentUI=uis.hotbar
		
		
			mainChest.items=itemStack.slice(9,38)
		mainChest.count=countStack.slice(9,38)
		//itemStack.length=9
		//countStack.length=9
		//noa.container.canvas.requestPointerLock()
		
		
		//setTimeout(function(){ noa.camera.applyInputsToCamera() }, 100);

	}else if(currentUI==uis.chest){
			   playerbody.mass=1
			   Object(_mouse_chestAction__WEBPACK_IMPORTED_MODULE_12__["chestAction"])(chestmesh)
			   console.log(chestmesh)
			    currentUI=uis.hotbar
			
				 //noa.container.canvas.requestPointerLock();
		   }
		   
		   else if(currentUI==uis.screen){
			  
			currentUI=uis.hotbar
			uis.screen[1].framey=0
			// uis.screen[1].path="./texPack/"+funpack+"/item/cake.png"
			
				 //noa.container.canvas.requestPointerLock();
		   }
	else {
	itemStack=	 itemStack.concat(mainChest.items)
	countStack=  countStack.concat(mainChest.count)
	
      currentUI=uis.inventory
	 //currentUI=uis.screen
	 document.exitPointerLock()
	
	 
	  
	}
})

noa.inputs.up.on('drop', function () {
	
	drop(noa,itemStack[selected])
})
	
	noa.inputs.up.on('menu', function () {
	
	

	
})

noa.inputs.down.on('menu', function () {
		 if(currentUI==uis.hotbar){
              currentUI=uis.menu
		 
		   }
})

	noa.inputs.up.on('screenshot', function () {
		if(chatOn){
			return;
		}
		//if (document.pointerLockElement == noa.container.canvas) {
			screenshot(noa.container.canvas, {filename: 'Squid' + Date.now() + '.png'})
		//}
	})
noa.inputs.down.on('crouch', function () {
	
if(rideName!=='none'){
		Object(_player__WEBPACK_IMPORTED_MODULE_8__["addEquip"])('none',playermesh)

//makeStaticEnt(noa,rideName,[pos[0],pos[1]+0.5,pos[2]])
rideName='none'
rideNameRtc='none'
return true;
}



	if(isFlying){
		playerbody.applyImpulse([0,-7,0])
	}
   kneeling=!kneeling
  
   Object(_animation__WEBPACK_IMPORTED_MODULE_9__["playerKneel"])(playermesh,kneeling)
})

// add a key binding for "E" to do the same as alt-fire

noa.inputs.bind('drop', 'Q')
noa.inputs.bind('inventory', 'E')
noa.inputs.bind('social', 'L')
noa.inputs.bind('zoom', 'Z')
noa.inputs.bind('chat', 'C')
noa.inputs.bind('crouch', '"<shift>"')
noa.inputs.bind('screenshot', 'P')
//setupFlying(noa)
Object(_mouse_mouseFire_js__WEBPACK_IMPORTED_MODULE_4__["mouseFire"])(noa)
}




	
	
	
	

	
	
	
	
	
	function checkaudio(playPromise){
	
	if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
}
	


function drop(noa,item,spin){
	var strength=10
	if(item==null){
		return;
	}
	if(!onRail){
	countStack[selected]--
	if(countStack[selected]<=0){
		itemStack[selected]=null
		
		if(playermesh._children[1].getChildren()>0){
		playermesh._children[1]._children[0].dispose()
		}
	}
	}
		var matrixangle=noa.camera.getDirection()


if(spin){
	strength=6
	matrixangle[0]+=Math.PI/(Math.random()*20-10)
}
	
	var coon=itemList[item.name].clone(item.name)
	
	
	coon.scaling=new BABYLON.Vector3(jsonItems[item.name].held.hand.scale[0], jsonItems[item.name].held.hand.scale[1], jsonItems[item.name].held.hand.scale[2]);
	var id=uuid()
	 listofmobs[id] = noa.entities.add( pos, 0.5, 0.5, coon, [0,0.5,0], true, false,true,null )
	
	 //	var body=noa.ents.getPhysicsBody(cid)
		
		 var vec = matrixangle

			 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec, strength)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(listofmobs[id])//
			  body.applyImpulse(vec);
			   var poso = noa.ents.getState(noa.playerEntity, 'position').position
			  
			   datablock.content4=[poso,vec,strength,item.name,id]
			   
			   
			   
			  body.onCollide=function bodyOnCollide(impulse){
	
	//console.log(impulse)
	 
 }
			  
			  	    var onCollideEnt = function(ownID, otherID) {
				  otherID=listofmobs[id]
    collideEnti(noa, ownID, otherID)
  }
				setTimeout(function(){ 
				   noa.entities.addComponent(listofmobs[id], noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  
			
				
				  

				  
				  }, 500);
				  
			
				  	  function collideEnti(noa, otherID, ownID){
						
					if(otherID==noa.playerEntity && !isDead){
						entToRemove=id
						noa.ents.deleteEntity(ownID)
						for (var i=0;i<itemStack.length;i++){
							 if(itemStack[i]==jsonItems[item.name]){
								countStack[i]+=1
								break;
								
							}else if(itemStack[i]==null){
								itemStack[i]=jsonItems[item.name]
								countStack[i]+=1
								break;
							}
							
							
							
							
						}
					}
						
						
                     }

	
	
	
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./lang sync \\.json$":
/*!****************************************!*\
  !*** ./lang sync nonrecursive \.json$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en_us.json": "./lang/en_us.json",
	"./fr_fr.json": "./lang/fr_fr.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./lang sync \\.json$";

/***/ }),

/***/ "./lang/en_us.json":
/*!*************************!*\
  !*** ./lang/en_us.json ***!
  \*************************/
/*! exports provided: backtogame, saveworld, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"backtogame\":\"back to game\",\"saveworld\":\"save world\"}");

/***/ }),

/***/ "./lang/fr_fr.json":
/*!*************************!*\
  !*** ./lang/fr_fr.json ***!
  \*************************/
/*! exports provided: backtogame, saveworld, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"backtogame\":\"retour au jeu\",\"saveworld\":\"sauveguarder monde\"}");

/***/ }),

/***/ "./langList.js":
/*!*********************!*\
  !*** ./langList.js ***!
  \*********************/
/*! exports provided: getLangList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLangList", function() { return getLangList; });


global.jsonLang={}
	
		var reqContext = __webpack_require__("./lang sync \\.json$")
    reqContext.keys().forEach(name => {
        // convert name ('./foo.js') to bare name ('foo')
      var bareName = /\.\/(.*)\.json/.exec(name)[1]
	
		jsonLang[bareName]=reqContext(name)
		
		
      
    })
	
	function getLangList(){
		
		
		
	
	
	
	
		
	}



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./letterBoards.js":
/*!*************************!*\
  !*** ./letterBoards.js ***!
  \*************************/
/*! exports provided: initBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBoard", function() { return initBoard; });


var noa2=null
var charNums={"0":[0,0],"1":[5,0],"2":[10,0],"3":[15,0],"4":[20,0],"5":[25,0],"6":[30,0],"7":[35,0],"8":[40,0],"9":[45,0],":":[0,32]}

var num=0
function initBoard(noa){
	
	
	noa2=noa
	var time='0'+num.toString()+':00'
	go(time)
	


	
	
}


function go(time){
	
	
		var l= document.createElement('canvas');

	
	var objectContext=l.getContext('2d')
	objectContext.fillStyle = "blue";
	objectContext.fillText(time,0,0,18,18)
	var imaga=new Image();
	
	

		imaga.src='./texPack/'+funpack+'/maingui/letters.png'
		
		setTimeout(function(){  
	objectContext.drawImage(imaga,charNums[time.charAt(0)][0],charNums[time.charAt(0)][1],5,8,0,0,5,8);
	
	objectContext.drawImage(imaga,charNums[time.charAt(1)][0],charNums[time.charAt(1)][1],5,8,6,0,5,8);
	
	objectContext.drawImage(imaga,charNums[time.charAt(2)][0],charNums[time.charAt(2)][1],5,8,12,0,5,8);
	
	objectContext.drawImage(imaga,charNums[time.charAt(3)][0],charNums[time.charAt(3)][1],5,8,18,0,5,8);
	objectContext.drawImage(imaga,charNums[time.charAt(4)][0],charNums[time.charAt(4)][1],5,8,24,0,5,8);
			}, 1000);
	
	setTimeout(function(){  
	var bits=30; // 16 pixels
				for (var intFor1 = 0; intFor1 <bits; intFor1 += 1) {
					for (var intFor2 = 0; intFor2 <8; intFor2 += 1) {
						var intColor = objectContext.getImageData(intFor1, intFor2,1, 1).data
						
						
						
						if (intColor[3] === 0) {
							continue;
						}
						//console.log(new BABYLON.Color3(intColor[0], intColor[1],intColor[2] ))
						noa2.setBlock(3, 0,(-intFor2)+42+18, intFor1)
					}
					
				}
				
				
					setTimeout(function(){  
	var bits=30; // 16 pixels
				for (var intFor1 = 0; intFor1 <bits; intFor1 += 1) {
					for (var intFor2 = 0; intFor2 <8; intFor2 += 1) {
						var intColor = objectContext.getImageData(intFor1, intFor2,1, 1).data
						
						
						
						
						noa2.setBlock(1, 0,(-intFor2)+42+18, intFor1)
					}
					
				}
				num++
				go('0'+num.toString()+':00')
				
				}, 2000);
				
				}, 4000);
	
	
}


/***/ }),

/***/ "./light.js":
/*!******************!*\
  !*** ./light.js ***!
  \******************/
/*! exports provided: light, addToShading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToShading", function() { return addToShading; });

global.shade={}
function light(){
	
	console.log('were shading')
}

function addToShading(x,y,z,id){
	var lol=id.split('|')
	shade[JSON.stringify([lol[0],lol[1],lol[2]])]=[x,y,z]
	//console.log(shade)
	
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mouse/bellAction.js":
/*!*****************************!*\
  !*** ./mouse/bellAction.js ***!
  \*****************************/
/*! exports provided: bellAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bellAction", function() { return bellAction; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");

var directions={"north":0,"south":1,"east":2,"west":3}

var newStack=null
var newCount=null
var goodname=null
global.chestmesh=null
function bellAction(mesh){
	bigSign="Alert!"
	bigSignTime=3
	bigSignColor="red"
	animateOpen(mesh)
	
	console.log(listofplayers)
			datablock['message']="!^!Alert!"
		
	

	
}


	
							
							
							
							
function animateOpen(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: Math.PI/2+10
});

keyFrames.push({
    frame: endFrame,
    value: -Math.PI/2
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, startFrame, endFrame, true);


							}
							
							
							

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mouse/chestAction.js":
/*!******************************!*\
  !*** ./mouse/chestAction.js ***!
  \******************************/
/*! exports provided: chestAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chestAction", function() { return chestAction; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");

var directions={"north":0,"south":1,"east":2,"west":3}

var newStack=null
var newCount=null
var goodname=null
global.chestmesh=null
function chestAction(mesh){
	if(mesh.parent._children[1].rotation.x==0){
	
	animateOpen(mesh.parent._children[1])
	
	setTimeout(function(){ 
        currentUI=uis.chest
		chestmesh=mesh
		goodname=mesh.name.split(':')
		console.log(goodname[3])
			if(chestList[goodname[3]]!==null){
					console.log('word')
					itemStack.length=9
					countStack.length=9
				
					 newStack=itemStack.concat(chestList[goodname[3]].items)
					 newCount=countStack.concat(chestList[goodname[3]].itemCount)
					itemStack=newStack
					countStack=newCount
					console.log(itemStack)
					playerbody.mass=0
					
				}
				
		
		
		
	}, 1000);
	}else{
		playerbody.mass=1
		animateClose(mesh.parent._children[1])
		currentUI=uis.hotbar
		
		if(goodname!==null){
			
		chestList[goodname[3]].items=itemStack.slice(9,36)
		chestList[goodname[3]].itemCount=countStack.slice(9,36)
		
					itemStack.length=9
					countStack.length=9
		newStack=null
		newCount=null
		goodname=null
		
		}
	}

	
}


	
							
							
							
							
function animateOpen(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: 0
});

keyFrames.push({
    frame: endFrame,
    value: -Math.PI/3
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, startFrame, endFrame, false);

	
							}
							
							
							
							function animateClose(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: 0
});

keyFrames.push({
    frame: endFrame,
    value: -Math.PI/3
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, endFrame, startFrame, false);

	
							}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mouse/doorAction.js":
/*!*****************************!*\
  !*** ./mouse/doorAction.js ***!
  \*****************************/
/*! exports provided: doorAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doorAction", function() { return doorAction; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");

var directions={"north":0,"south":1,"east":2,"west":3}
function doorAction(str){
	
	console.log(str)
	//if(str.split(':')[1]=='human')
		//return;
	
	
	var pos=JSON.parse(str.split(':')[3])
	var dir=Object(_blocklook__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
	var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
	
	//console.log(JSON.parse(str.split))
	if(str.split(':')[4]=='Close'){
	
		
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],1]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],1]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],1]
		}
	
	noa.setBlock(0,pos[0],pos[1],pos[2])
	noa.setBlock(blocks['door'],pos[0],pos[1],pos[2])
	
	
	}else{
	
	
	if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[blockPick, pos[0], pos[1], pos[2],directions[dir],0]
		}
	
	noa.setBlock(0,pos[0],pos[1],pos[2])
	noa.setBlock(blocks['door'],pos[0],pos[1],pos[2])
	
	}
	
}


/***/ }),

/***/ "./mouse/ebuttonAction.js":
/*!********************************!*\
  !*** ./mouse/ebuttonAction.js ***!
  \********************************/
/*! exports provided: ebuttonAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ebuttonAction", function() { return ebuttonAction; });
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocklook */ "./blocklook.js");

var directions={"north":0,"south":1,"east":2,"west":3}

var newStack=null
var newCount=null
var goodname=null
global.chestmesh=null
function ebuttonAction(mesh){
	bigSign="Meeting!"
	bigSignTime=3
	bigSignColor="red"
	animateOpen(mesh.parent._children[1])
	
	console.log(listofplayers)
			datablock['message']="!^!Meeting!"
		
	

	
}


	
							
							
							
							
function animateOpen(box){
								
							
								const startFrame = 0;
const endFrame = 10;
const frameRate = 10;

const xSlide = new BABYLON.Animation("xSlide", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

const keyFrames = []; 

keyFrames.push({
    frame: startFrame,
    value: -0.1
});

keyFrames.push({
    frame: endFrame,
    value: 0
});


xSlide.setKeys(keyFrames);

box.animations.push(xSlide);


//backwards animation
scene.beginAnimation(box, startFrame, endFrame, false);


							}
							
							
							

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mouse/mouseAltFire.js":
/*!*******************************!*\
  !*** ./mouse/mouseAltFire.js ***!
  \*******************************/
/*! exports provided: mouseAltFire, castRay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseAltFire", function() { return mouseAltFire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castRay", function() { return castRay; });
/* harmony import */ var _waterAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterAction.js */ "./mouse/waterAction.js");
/* harmony import */ var _doorAction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doorAction.js */ "./mouse/doorAction.js");
/* harmony import */ var _chestAction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chestAction.js */ "./mouse/chestAction.js");
/* harmony import */ var _bellAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bellAction.js */ "./mouse/bellAction.js");
/* harmony import */ var _ebuttonAction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ebuttonAction.js */ "./mouse/ebuttonAction.js");
/* harmony import */ var _blocklook_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocklook.js */ "./blocklook.js");
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sound.js */ "./sound.js");
/* harmony import */ var _shapes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shapes.js */ "./shapes.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../player */ "./player.js");









global.meshname=null
var meshhit=null
function mouseAltFire(noa){
	
	

	//wall(5)
	
	const entClick = castRay();
	
	if (!!entClick){
		
		console.log(entClick[1])
		
		if(entClick[1]=='door'){
				Object(_sound_js__WEBPACK_IMPORTED_MODULE_6__["playsound"])('doorOpen',0.1)
			Object(_doorAction_js__WEBPACK_IMPORTED_MODULE_1__["doorAction"])(meshname)
			return 'door'
			
		}
		if(entClick[1]=='fence'){
			Object(_doorAction_js__WEBPACK_IMPORTED_MODULE_1__["doorAction"])(meshname)
			return 'fence'
			
		}
		if(entClick[1]=='stairs'){
			Object(_doorAction_js__WEBPACK_IMPORTED_MODULE_1__["doorAction"])(meshname)
			return 'stairs'
			
		}
		if(entClick[1]=='lid'){
		
			Object(_chestAction_js__WEBPACK_IMPORTED_MODULE_2__["chestAction"])(meshhit)
			return 'lid'
			
		}
		if(entClick[1]=='chest'){
		Object(_sound_js__WEBPACK_IMPORTED_MODULE_6__["playsound"])('chestOpen',0.1)
			Object(_chestAction_js__WEBPACK_IMPORTED_MODULE_2__["chestAction"])(meshhit)
			return 'chest'
			
		}if(entClick[1]=='pc'){
		
			currentUI=uis.screen
			return 'pc'
			
		}
		if(entClick[1]=='ebutton'){
		
			Object(_sound_js__WEBPACK_IMPORTED_MODULE_6__["playsound"])('click',0.1)
			Object(_ebuttonAction_js__WEBPACK_IMPORTED_MODULE_4__["ebuttonAction"])(meshhit)
			return 'ebuttontop'
			
		}
		if(entClick[1]=='bell'){
		
			Object(_sound_js__WEBPACK_IMPORTED_MODULE_6__["playsound"])('bell',0.1)
			Object(_bellAction_js__WEBPACK_IMPORTED_MODULE_3__["bellAction"])(meshhit)
			return 'bell'
			
		}
	   if(entClick[1]=='boat'){
		noa.ents.getState(listofmobs[entClick[2]], 'position').position
		var entpos=noa.ents.getState(listofmobs[entClick[2]], 'position').position
		
			noa.ents.setPosition(noa.playerEntity,[entpos[0],entpos[1]+1,entpos[2]])
			
			noa.ents.deleteEntity(listofmobs[entClick[2]])
			 spawnedEnt={name:'none',po:[0,0,0],id:entClick[2]}
			Object(_player__WEBPACK_IMPORTED_MODULE_8__["addEquip"])(entClick[1],playermesh)
			rideName=entClick[1]
			rideNameRtc=rideName
			
	   }
			
		if(entClick[2]!==mainplayerid && (entClick[3]-noa.camera.zoomDistance) <3){
			hitting=true
			target=entClick[2]
			
		}
		
		fired=true;
		    return true;
	}
	

}



function castRay() {
	
		let ray = scene.createPickingRay(
			window.innerWidth / 2,
			window.innerHeight / 2,
			BABYLON.Matrix.Identity(),
			noa.rendering.getScene().activeCameras[0]
		);

		const hit = scene.pickWithRay(
			ray,
			(mesh) => {
				
				if(mesh.name=='boyo'){
					return false;
				}else{
				return mesh.name.startsWith('hitbox:');
				}
			},
			true
		);

		if (hit.pickedMesh) {
			meshhit=hit.pickedMesh
			var str=hit.pickedMesh.name.split(':');
			
			meshname=hit.pickedMesh.name
			
			//console.log(hit.pickedMesh.name.substring(7))
			//return [hit.pickedMesh.name.substring(7), hit.distance];
			//console.log('lol')
			//console.log('yo   '+str[2])
		return [str[0], str[1],str[2],str[3],hit.distance];
		} else return null;
	}




/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mouse/mouseFire.js":
/*!****************************!*\
  !*** ./mouse/mouseFire.js ***!
  \****************************/
/*! exports provided: mouseFire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseFire", function() { return mouseFire; });
/* harmony import */ var _waterAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterAction.js */ "./mouse/waterAction.js");
/* harmony import */ var _blocklook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocklook.js */ "./blocklook.js");
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../particle.js */ "./particle.js");
/* harmony import */ var _projectile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projectile.js */ "./projectile.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player */ "./player.js");
/* harmony import */ var _chestWars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chestWars */ "./chestWars.js");






function mouseFire(noa){
	
	Object(_waterAction_js__WEBPACK_IMPORTED_MODULE_0__["setUpWactions"])(noa)
		// clear targeted block on on left click
noa.inputs.down.on('fire', function () {
	
	if(!noa.container.hasPointerLock){
		return;
	}
	
	if(currentUI!==uis.hotbar){
		return;
	}
	if(chatOn){
		return;
	}
	const entClick = castRay();
	
	if (!!entClick){
		
		console.log(entClick[1])
		if(entClick[2]!==mainplayerid && (entClick[3]-noa.camera.zoomDistance) <3){
			hitting=true
			target=entClick[2]
		}
		//console.log(listofmobs[entClick[2]])
		if(listofmobs[entClick[2]]!==undefined){
			var body=noa.ents.getPhysicsBody(listofmobs[entClick[2]])
			body.mass=1
			body.applyImpulse([0,7,0])
			noa.ents.getState(listofmobs[entClick[2]],'info').health--
		}
	}
	if(countStack[selected]>0){
	Object(_projectile_js__WEBPACK_IMPORTED_MODULE_3__["throwproj"])(noa,itemStack[selected])
	countStack[selected]--
	
		if(countStack[selected]<1){
			itemStack[selected]=null
		}
		Object(_player__WEBPACK_IMPORTED_MODULE_4__["getHand"])(noa,itemStack[selected])
	}
	fired=true;
	
    if (noa.targetedBlock) {
		
		
        var pos = noa.targetedBlock.position
		
		Object(_chestWars__WEBPACK_IMPORTED_MODULE_5__["checkState"])(Array.from(pos))
		
        noa.setBlock(0, pos[0], pos[1], pos[2])
		datablock.content3=[0, pos[0], pos[1], pos[2]]
		
		 rtcPart=[pos[0], pos[1], pos[2]]
		//var scene=noa.rendering.getScene()
	Object(_particle_js__WEBPACK_IMPORTED_MODULE_2__["makeparticle"])('lol',pos,scene,11,0.3)
		var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[0, pos[0], pos[1], pos[2]]
		}
		
		
	
		
		
		Object(_waterAction_js__WEBPACK_IMPORTED_MODULE_0__["checkWater"]) (pos[0],pos[1], pos[2])
		Object(_waterAction_js__WEBPACK_IMPORTED_MODULE_0__["checkFlower"])(pos[0],pos[1]+1, pos[2])
		//checkWaterBelowAdd (pos[0],pos[1], pos[2])
		//checkWaterHackBelowDestroy (pos[0],pos[1], pos[2])
		 //noa.setBlock(0, pos[0], pos[1], pos[2])
    }
	
	console.log(Object(_blocklook_js__WEBPACK_IMPORTED_MODULE_1__["blocklook"])(noa))
})

noa.inputs.up.on('fire', function () {
	if(chatOn){
		return;
	}
	
	
	
	if(currentUI==uis.inventory){
		  
		  
		  setTimeout(function(){ document.exitPointerLock() }, 100);
		  return;
	}
	if(currentUI==uis.chest){
		  
		  
		  setTimeout(function(){ document.exitPointerLock() }, 100);
		  return;
	}
	fired=false;
//	var num=Math.floor(Math.random()*2)+1
	//num=JSON.stringify(num)
//sounds['blop'].volume=0.1
	//var playPromise =sounds['blop'].play();

          //  checkaudio(playPromise)


   
})
	
	
}


function castRay() {
	
		let ray = scene.createPickingRay(
			window.innerWidth / 2,
			window.innerHeight / 2,
			BABYLON.Matrix.Identity(),
			noa.rendering.getScene().activeCameras[0]
		);

		const hit = scene.pickWithRay(
			ray,
			(mesh) => {
				
				return mesh.name.startsWith('hitbox:');
			},
			true
		);

		if (hit.pickedMesh) {
			
			var str=hit.pickedMesh.name.split(':');
			
			//raypos=hit.pickedMesh
			
			//console.log(hit.pickedMesh.name.substring(7))
			//return [hit.pickedMesh.name.substring(7), hit.distance];
			//console.log('lol')
			//console.log('yo   '+str[2])
		return [str[0], str[1],str[2],hit.distance];
		} else return null;
	}


/***/ }),

/***/ "./mouse/waterAction.js":
/*!******************************!*\
  !*** ./mouse/waterAction.js ***!
  \******************************/
/*! exports provided: setUpWactions, checkWater, checkFlower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUpWactions", function() { return setUpWactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWater", function() { return checkWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFlower", function() { return checkFlower; });

var k=null
function setUpWactions(noa){
	
	k=noa;
}

function checkWater(e,t,i){

                            var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t, i + 1),
                                s = k.world.getBlockID(e, t, i - 1);
                            if (r == blocks['water'] || r == blocks['watertop']) {
								k.setBlock(r, e , t, i)
								datablock.content3=[r, e , t, i]
								setJson(r,[e , t, i])
								setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
									
								if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[blocks['water'], e , t-1, i]
										setJson(r,[e , t-1, i])
								}
								
								
                            }
                            if (o == blocks['water'] || o == blocks['watertop']) {
									k.setBlock(o, e , t, i)
									datablock.content3=[o, e , t, i]
									setJson(o,[e , t, i])
											setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
									
									
									if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[r, e , t-1, i]
										setJson(r,[e , t-1, i])
								}
                               
                            }
                            if (a == blocks['water'] || a == blocks['watertop']) {
								k.setBlock(a, e , t, i)
								datablock.content3=[a, e , t, i]
								setJson(a,[e , t, i])
									setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
								if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[blocks['water'], e , t-1, i]
									setJson(a,[e , t-1, i])
								}
								
								
                            }
                            if (s == blocks['water'] || s == blocks['watertop']) {
									k.setBlock(s, e , t, i)
									datablock.content3=[s, e , t, i]
									setJson(s,[e , t, i])
										setTimeout(function(){ checkNeighboursAsWater(e , t, i) }, 500);
								
									
									if(k.world.getBlockID(e , t-1, i)==0){
									k.setBlock(blocks['water'], e , t-1, i)
									datablock.content3=[blocks['water'], e , t-1, i]
									setJson(s,[e , t-1, i])
									
								}
								
                              
                            }
	
}

	function checkNeighboursAsWater(e, t, i){
		

		                       var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t, i + 1),
                                s = k.world.getBlockID(e, t, i - 1);
								
								    if (r == 0) {
										
								k.setBlock(blocks['watertop'], e -1, t, i)
								datablock.content3=[blocks['watertop'], e-1 , t, i]
								setJson(blocks['watertop'],[e-1 , t, i])
								setTimeout(function(){ checkNeighboursAsWater(e -1, t, i) }, 500);
								
                            }
                            if (o ==0) {
									k.setBlock(blocks['watertop'], e +1, t, i)
									datablock.content3=[blocks['watertop'], e +1, t, i]
									setJson(blocks['watertop'],[e+1 , t, i])
									setTimeout(function(){ checkNeighboursAsWater(e +1, t, i) }, 500);
								
                            }
                            if (a ==0) {
								k.setBlock(blocks['watertop'], e , t, i+1)
								datablock.content3=[blocks['watertop'], e , t, i+1]
								setJson(blocks['watertop'],[e , t, i+1])
								setTimeout(function(){ checkNeighboursAsWater(e , t, i+1) }, 500);
							
                            }
                            if (s == 0) {
									k.setBlock(blocks['watertop'], e , t, i-1)
									datablock.content3=[blocks['watertop'], e , t, i-1]
									setJson(blocks['watertop'],[e , t, i-1])
									setTimeout(function(){ checkNeighboursAsWater(e , t, i-1) }, 500);
									
									
		
		
	}
	}
	
	
function checkFlower (x, y, z) {
		if(k.world.getBlockID(x, y, z)==0){
			return;
		}
		if(k.world.getBlockID(x, y, z)==6){
						k.setBlock(0, x , y, z)
		datablock.content3=[0, x , y, z]
		}
		
	}
	
	
	
	function setJson(ids,pos){
		
		
		var id=noa.world._getChunkByCoords(pos[0], pos[1], pos[2]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]){
		rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[ids, pos[0], pos[1], pos[2]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[ids, pos[0], pos[1], pos[2]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]=[ids, pos[0], pos[1], pos[2]]
		}
	}

/***/ }),

/***/ "./nametag.js":
/*!********************!*\
  !*** ./nametag.js ***!
  \********************/
/*! exports provided: nametag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nametag", function() { return nametag; });
function nametag(mainMesh, name, height) {
	var scene = noa.rendering.getScene()

	var font_size = 96
	var font = "bold " + font_size + "px 'lato'"
	
	//Set height for plane
    var planeHeight = 0.3
    
    //Set height for dynamic texture
    var DTHeight = 1.5 * font_size //or set as wished
    
    //Calcultae ratio
    var ratio = planeHeight/DTHeight
	
	//Use a temporay dynamic texture to calculate the length of the text on the dynamic texture canvas
    var temp = new BABYLON.DynamicTexture("DynamicTexture", 64, scene)
	var tmpctx = temp.getContext()
	tmpctx.font = font
    var DTWidth = tmpctx.measureText(name).width + 8
    
    //Calculate width the plane has to be 
    var planeWidth = DTWidth * ratio

    //Create dynamic texture and write the text
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", {width:DTWidth, height:DTHeight}, scene, false)
    var mat = noa.rendering.makeStandardMaterial('nametag')
	mat.diffuseTexture = dynamicTexture
	mat.emissiveTexture = mat.diffuseTexture
	mat.diffuseTexture.hasAlpha = true
	mat.opacityTexture = mat.diffuseTexture
    dynamicTexture.drawText(name, null, null, font, "#eeeeee", "#00000066", true)
    
    //Create plane and set dynamic texture as material
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", {width:planeWidth, height:planeHeight}, scene)
    plane.material = mat
plane.setParent(mainMesh._children[0])
	plane.setPositionWithLocalVector(new BABYLON.Vector3(0, height + 0.2, 0))
	plane.opaque = false

	
	noa.rendering.addMeshToScene(plane)

	return plane
}

/***/ }),

/***/ "./onFire.js":
/*!*******************!*\
  !*** ./onFire.js ***!
  \*******************/
/*! exports provided: onFire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFire", function() { return onFire; });

var mesh=null
var mesh2=null

function onFire(m){
	
	if(mesh!=null){
		
		mesh.dispose()
		mesh=null
	}
	if(mesh2!=null){
		
		mesh2.dispose()
		mesh2=null
	}
		var imageheight=128
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),//,//right
	new BABYLON.Vector4(pixelx*0,-pixely*(128+num),pixelx*(15+num),-pixely*(116)),///left
	new BABYLON.Vector4(pixelx*15,-pixely*(0+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*15,-pixely*(0+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:0.9,
		width:0.9,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			 
			 name='cool'
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			 mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/fire.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex
				mat.diffuseColor = BABYLON.Color3.White()
				mat.emissiveColor = BABYLON.Color3.White()
			mat.diffuseTexture.hasAlpha=true;
			//mat.useAlphaFromDiffuseTexture = true
			
			mat.backFaceCulling = false;
			setInterval(function(){ 
     tex.vOffset -= 1/8;
     }, 100);
			mesh.material=mat
			mesh.scaling.y=1.3
			mesh.position.y+=0.5
			 mesh2=mesh.clone('fire')
			mesh2.parent=m
			mesh2.scaling.y=1.5
			mesh2.scaling.x=0.8
			mesh2.scaling.z=0.8
			mesh2.position.y+=1
			
			mesh.parent=m
	
	noa.rendering.addMeshToScene(mesh,false)
	noa.rendering.addMeshToScene(mesh2,false)
	console.log(m.name)
	
	
}

/***/ }),

/***/ "./particle.js":
/*!*********************!*\
  !*** ./particle.js ***!
  \*********************/
/*! exports provided: makeparticle, makeSnow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeparticle", function() { return makeparticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSnow", function() { return makeSnow; });


/*var MPS = require('mesh-particle-system');
export function makeparticle(name,pos,scene,time,size){
var tex = new BABYLON.Texture("./texPack/"+funpack+"/particle/bubble.png", scene);
var capacity = 200;
var rate = 30;           // particles/second
var mps = new MPS(capacity, rate, scene);
mps.setTexture(tex);


}*/



function makeparticle(name,pos,scene,time,size){
	 //audio.volume=0.5
	 //audio.play()
	 
	  var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
	  var c=new BABYLON.Texture("./texPack/"+funpack+"/particle/bubble.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
	  /*c.wrapU = 1, c.wrapV = 1
	 c.uOffset = .5;
c.vOffset = .5;*/
    particleSystem.particleTexture= c//new BABYLON.Texture('/textures/'+name+'.png', scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

    // Position where the particles are emiited from
	//var box=pos
	
	
	
	var partmesh= new BABYLON.Mesh("dummy", scene);//	//partmesh.clone('tot')
	partmesh.position.x=pos[0]+0.5
	partmesh.position.y=pos[1]+1
	partmesh.position.z=pos[2]+0.5
	//partmesh.layerMask = 0x10000000;
		 particleSystem.gravity = new BABYLON.Vector3(0,-10, 0);

	
	
	
	
	/*particleSystem.startSpriteCellID = 0;
                particleSystem.endSpriteCellID = 3;
                particleSystem.spriteCellHeight = 4;
               particleSystem.spriteCellWidth = 4;
                particleSystem.spriteCellLoop = true;
				 particleSystem.spriteCellChangeSpeed=1;
				particleSystem.spriteRandomStartCell=false;*/
	


           particleSystem.emitter= partmesh//pos// new BABYLON.Vector3(pos[0], pos[1], pos[2])//partmesh
	       particleSystem.minSize =size/2
           particleSystem.maxSize =size
		   
		   particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
particleSystem.colorDead = new BABYLON.Color4(1, 1, 1, 1);
		   particleSystem.blendMode =BABYLON.ParticleSystem.BLENDMODE_STANDARD;
	
		//  particleSystem.manualEmitCount=8
		   particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 2;
            particleSystem.updateSpeed = 0.020
		
				noa.rendering.addMeshToScene(partmesh,false)
	function init(p) {
		
		//for (let p = 0; p < particleSystem.nbParticles; p++) {
      p.position.x = Math.random() * 0.8 - 0.4
      p.position.y = Math.random() * 0.8 - 0.4
      p.position.z = Math.random() * 0.8 - 0.4
      p.velocity.x = p.position.x / 2
      p.velocity.y = p.position.y / 2
      p.velocity.z = p.position.z / 2
      p.size =     Math.random()/2 // was 0.5
      p.age = Math.random()/2
      p.lifetime =  10
	  
		//}
	  
    }
		
			 
	particleSystem.start()
	
	setTimeout(function() {
		particleSystem.dispose()
		partmesh.dispose()
			}, time*1000);
		
			 
	return particleSystem;
	
}


function makeSnow(name,pos,scene,time){
	 //audio.volume=0.5
	 //audio.play()
	 
	  var particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
	  var c=new BABYLON.Texture("./texPack/"+funpack+"/particle/star.png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
	
    particleSystem.particleTexture= c
	c.hasAlpha=true
	particleSystem.emitter = pos;
    particleSystem.minEmitBox = new BABYLON.Vector3(10, 10, 10); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(-10, -1, -10); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(1, 1, 1, 1.0);
    particleSystem.color2 = new BABYLON.Color4(1, 1, 1, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(1, 1, 1,1);

    // Size of each particle (random between...
    particleSystem.minSize = 0.05;
    particleSystem.maxSize = 0.1;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;

    // Emission rate
    particleSystem.emitRate = 500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    //particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -1, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-1, 0, 1);
    particleSystem.direction2 = new BABYLON.Vector3(1, 0, -1);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 0;
    particleSystem.updateSpeed = 0.003;

    // Noise
    var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
    noiseTexture.animationSpeedFactor = 5;
    noiseTexture.persistence = 2;
    noiseTexture.brightness = 0.5;
    noiseTexture.octaves = 2;

    particleSystem.noiseTexture = noiseTexture;
    particleSystem.noiseStrength = new BABYLON.Vector3(60, 60, 60);
	
	
		
			 
	particleSystem.start()
	
	setTimeout(function() {
		particleSystem.dispose()
		//partmesh.dispose()
			}, time*1000);
		
			 
	return particleSystem;
	
}

/***/ }),

/***/ "./player.js":
/*!*******************!*\
  !*** ./player.js ***!
  \*******************/
/*! exports provided: makeOtherPlayer, makePlayer, addEquip, getHand, getThirPHand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeOtherPlayer", function() { return makeOtherPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePlayer", function() { return makePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEquip", function() { return addEquip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHand", function() { return getHand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThirPHand", function() { return getThirPHand; });
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound.js */ "./sound.js");
/* harmony import */ var _armor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./armor */ "./armor.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particle */ "./particle.js");
/* harmony import */ var _nametag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nametag */ "./nametag.js");
/* harmony import */ var _blocklook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocklook */ "./blocklook.js");
/* harmony import */ var _onFire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onFire */ "./onFire.js");
global.hand=null







var vec3 = __webpack_require__(/*! gl-vec3 */ "../../node_modules/gl-vec3/index.js")
var hitboxMesh=null
global.isDead=false
global.onStairs=false


function makeOtherPlayer(noa) {
	
		var name='player'
		var scene = noa.rendering.getScene()
		
		var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.diffuseTexture.hasAlpha=true
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
var mainplayer=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            mainplayer = new BABYLON.Mesh("player", scene);
		
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent=mainplayer;
			   meshes[i].isPickable=false
			   if(i==1){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			    if(i==2){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
	 
 }
 
 

	});
	 return mainplayer;
}
function makePlayer(noa) {
	
	var name='player'
	// get the player entity's ID and other info (position, size, ..)
var player = noa.playerEntity
var dat = noa.entities.getPositionData(player)
var w = dat.width
var h = dat.height
	
	
	
	
var scene = noa.rendering.getScene()
var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.diffuseTexture.hasAlpha=true
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
var mainplayer=null;
BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            mainplayer = new BABYLON.Mesh("player", scene);
		
			for (var i=0;i<meshes.length;i++){

	           meshes[i].material=busmat;
	           meshes[i].parent=mainplayer;
			   meshes[i].isPickable=false
			   if(i==1){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
			    if(i==2){
				   meshes[i].setPivotPoint(new BABYLON.Vector3(0, -.125, 0))
			   }
	 
 }
 Object(_nametag__WEBPACK_IMPORTED_MODULE_3__["nametag"])(mainplayer, 'nabilefefeef',1)
 //entityList[id]=noa.playerEntity
 
 hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:human:'+'boy', {
				height:2,
				width: 0.6,
				depth: 1,
			}, scene)
			
			


			hitboxMesh.setParent(mainplayer)
		     hitboxMesh.name='boyo'
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 1, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=false;
            hitboxMesh.isPickable=false
			noa.rendering.addMeshToScene(hitboxMesh, false)
			//onFire(mainplayer)
 Object(_particle__WEBPACK_IMPORTED_MODULE_2__["makeSnow"])('name',mainplayer,scene,100)
 
 //mainplayer=createTemplateModel('john',config)
  //mainplayer.material=busmat;
 // noa.entities.removeComponent(player, noa.entities.names.mesh)

						noa.entities.addComponent(player, noa.entities.names.mesh, {
							mesh: mainplayer,
							offset: [0, 0, 0],
						})
					var scene=noa.rendering.getScene()
						
 playermesh = noa.ents.getState(noa.playerEntity,'mesh').mesh
 
 //hitboxMesh.checkCollisions=true
   //hitboxMesh.isPickable=false
 playermesh.showBoundingBox=true
 hitboxMesh.checkCollisions=true
 
 
 scene.collisionsEnabled = true;

	var alpha=0
	var observer = scene.onBeforeRenderObservable.add(function () {
		//console.log(collidedMesh)
		
		
		
        hitboxMesh.moveWithCollisions(new BABYLON.Vector3(0,alpha, 0));
		
		alpha += 0.001;
		
	});
 // hitboxMesh.onCollideObservable.add(function () {
	//playerbody.mass=0
		//console.log("cube collideObservable work!");
	//});
	

	  hitboxMesh._onCollisionPositionChange = function (collisionId, newPosition, collidedMesh) {
		  
		 	
		if(collidedMesh!==null){
			//console.log(collidedMesh)
			alpha=collidedMesh.ellipsoid._y
			if(playerbody.resting[1]==0){
				//playermesh.position.y=alpha
				playerbody.gravityMultiplier=0
				
				if(!noa.inputs.state.forward && !noa.inputs.state.backward && !noa.inputs.state.right && !noa.inputs.state.left){
					
				  // playerbody._forces=[0,0,0]
					//	playerbody.velocity=[0,0,0]	
					  //  playerbody._impulses=[0,0,0]
							//alpha=1.5
				}
				
				if(noa.inputs.state.jump){
			        // alpha=1.5
				//playerbody.mass=1
				
				         playerbody._forces=[0,7,0]
						playerbody.velocity=[0,7,0]	
					    playerbody._impulses=[0,7,0]
				
			
				
			}
		
				return;
			}
			
			if(collidedMesh.name.includes(':Open')){
				
				
				return;
				}
			
			else if(collidedMesh.name.includes(':stairs')){
				
			
				
				if(!onStairs && noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['stairs']){
			    noa.ents.getState(noa.playerEntity,'mesh').offset=[0,-0.5,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,-0.5,0]	
				onStairs=true
				
			}
				//didit=true
			//}
			return;
		}
			
			if(collidedMesh.name.includes('top')){
				
				
				if(onStairs && noa.getBlock(Math.floor(pos[0]),Math.floor(pos[1])-1,Math.floor(pos[2]))==blocks['stairs']){
				noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]
				noa.ents.getState(noa.playerEntity,'shadow').offset=[0,0,0]	
				onStairs=false
				}
				return;
			}
	

		else if(collidedMesh.name.includes(':north') || collidedMesh.name.includes(':south') ){
			console.log('north')
			//noa.inputs.state.forward=false
		
			var dif=playermesh.position.z-collidedMesh.position.z
	
		var vif=playermesh.position.y-collidedMesh.position.y
			
		
			if(noa.inputs.state.backward && dif<0 && Object(_blocklook__WEBPACK_IMPORTED_MODULE_4__["blocklook"])(noa)=='north'){
				console.log(dif)
				playerbody.mass=1
			}
			
			else if(noa.inputs.state.backward && dif>0 && Object(_blocklook__WEBPACK_IMPORTED_MODULE_4__["blocklook"])(noa)=='south'){
				console.log(dif)
				//console.log('cool')
				playerbody.mass=1
			}else{
				
				//playerbody.mass=0
				     if(playerbody.resting[1]==-1){
			    // playerbody.mass=1
			      playerbody._forces=[Math.sin(playermesh.rotation.y),0,0]
						playerbody.velocity=[Math.sin(playermesh.rotation.y),0,0]	
					    playerbody._impulses=[Math.sin(playermesh.rotation.y),0,0]
				 }
				
			}
		
			
		}
		
		else if(collidedMesh.name.includes(':east') || collidedMesh.name.includes(':west') ){
			
			var dif=playermesh.position.x-collidedMesh.position.x
			//var yif=playermesh.position.y-collidedMesh.position.y
			
			/*if(yif>0 ){
				console.log(yif)
				playerbody.mass=0
				return;
			}
			else*/ if(noa.inputs.state.backward && dif<0 && Object(_blocklook__WEBPACK_IMPORTED_MODULE_4__["blocklook"])(noa)=='east'){
				console.log(dif)
				playerbody.mass=1
			}
			
			else if(noa.inputs.state.backward && dif>0 && Object(_blocklook__WEBPACK_IMPORTED_MODULE_4__["blocklook"])(noa)=='west'){
				console.log(dif)
				//console.log('cool')
				playerbody.mass=1
			}else{
			
			if(playerbody.resting[1]==-1){
			
		          playerbody._forces=[0,0,Math.cos(playermesh.rotation.y)]
						playerbody.velocity=[0,0,Math.cos(playermesh.rotation.y)]
					    playerbody._impulses=[0,0,Math.cos(playermesh.rotation.y)]
						
						
						
				   }
				   
			}
		
		
			
		
			
		}      
		
		
	
		

		 
		
		}
		
		playerbody.gravityMultiplier=2

		
	};
	
	

 playerbody=noa.ents.getPhysicsBody(noa.playerEntity)
playerbody.autoStep=true
//body.gravityMultiplier=2
 /*playerbody.gravityMultiplier=0
 noa.camera.zoomDistance = 0
 noa.camera.pitch=Math.PI/3
 setInterval(function(){ noa.camera.heading+=0.001 }, 30);*/
  noa.camera.pitch=Math.PI/3
 for (var i=0;i<playermesh.getChildren().length;i++){
					//playermesh._children[i].visibility=false
				}
		
		playerbody.onStep=function bodyOnStep(impulse){
			
			//noa.ents.getState(noa.playerEntity,'mesh').offset=[0,0,0]//playerbody.applyImpulse([0,3,0])
		}
playerbody.onCollide=function bodyOnCollide(impulse){
	
	//console.log(playerbody.ratioInFluid)
	 if(playerbody.ratioInFluid==0){
		
		 if((impulse[1])/20 >0.99){
			  Object(_sound_js__WEBPACK_IMPORTED_MODULE_0__["playsound"])('hurt',0.1)
	health-=(impulse[1])/20 *5
	 noa.gotHurt(playermesh)
	
		 }
	 }else{
		 //sounds['splash'].volume=0.5
		 Object(_particle__WEBPACK_IMPORTED_MODULE_2__["makeparticle"])('lol',playermesh._children[5],scene,11,0.3)
		//  rtcPart=pos
	//var playPromise =sounds['splash'].play();
	 }
	 
 }
 
 
	 
	 noa.entities.setPosition(noa.playerEntity,0,45,0);
 //playerbody.gravityMultiplier=0
 noa.camera.zoomDistance = -1
 // setInterval(function(){ noa.camera.heading+=0.001 }, 30);
// playerbody.airDrag=-3
 Object(_armor__WEBPACK_IMPORTED_MODULE_1__["addHat"])(noa,playermesh,/*rtcblocklist['armor'][0]*/'santa_hat')

  //addCape(noa,playermesh,rtcblocklist['armor'][0])
 //setTimeout(function(){ getHand(noa,itemStack[Selected])

//getThirPHand(noa,itemStack[Selected])
 //}, 3000);
		
	})
	
	
	
}


function addEquip(name,mp){
	
	 Object(_armor__WEBPACK_IMPORTED_MODULE_1__["addTransport"])(noa,mp,name)
}

function getHand(noa,item){
	
	
	if(playermesh==null){
		
		return;
	}
	
	if(playermesh._children[1].getChildren().length>0){
		playermesh._children[1]._children[0].dispose()
		
	}
	
	if(item==null){
		rtcHand='none'
		return;
	}

	//var name=item.name
	var c=itemList[item.name].clone(item.name)
	c.parent=playermesh._children[1]
	c.position.x=playermesh._children[1].position._x-0.25
	c.position.y=playermesh._children[1].position._y-2
	c.position.z=playermesh._children[1].position._z+0.2
	
	c.rotation.x=item.held.hand.rotation[0]
	c.rotation.y=item.held.hand.rotation[1]
	c.rotation.z=item.held.hand.rotation[2]
	
	noa.rendering.addMeshToScene(c, false)
	noa.rendering.addMeshToScene(c._children[0], false)
	noa.rendering.addMeshToScene(c._children[1], false)
	c.scaling=new BABYLON.Vector3(0.5,0.5,0.5)
	
	rtcHand=item.name
	
}

function getThirPHand(noa,item){
var scene=noa.rendering.getScene()

    if( hand!==null){
		 hand.dispose()
	}


if(noa.camera.zoomDistance==0){
		
		if(playermesh._children[1].getChildren().length>0){
		playermesh._children[1]._children[0].dispose()
	}
	
}
	
	if(item==null){
		return;
	}

	var name=item.name
hand=itemList[name].clone(name)

	console.log(hand)
var bob= new BABYLON.Mesh("dummy", scene);
				bob.parent=scene.activeCameras[0]
			
				hand.parent = bob
				bob.position.x=playermesh._children[1].position._x-0.25
	bob.position.y=playermesh._children[1].position._y-2
	bob.position.z=playermesh._children[1].position._z+0.2
//lhand.parent=scene.activeCameras[0]
//hand.position = new BABYLON.Vector3(0.4, -0.6, 1)
//hand.rotation.y=Math.PI/2
	noa.rendering.addMeshToScene(hand, false)
	noa.rendering.addMeshToScene(hand._children[0], false)
	noa.rendering.addMeshToScene(hand._children[1], false)
	hand.renderingGroupId = 1;

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./portal.js":
/*!*******************!*\
  !*** ./portal.js ***!
  \*******************/
/*! exports provided: portal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portal", function() { return portal; });
var bAtlas=[]
var num=0
var positions={}
var done=false

function portal(noa,bpos){
	
	num=0

	done=false
	positions={}
	/*if(noa.world.getBlockID(bpos[0],bpos[1]-1,bpos[2])==blocks['rack']){
		startgrid(bpos[0],bpos[1]-1,bpos[2])
		noa.setBlock(blocks['fire'],bpos[0],bpos[1],bpos[2])
	}
	
		else if(noa.world.getBlockID(bpos[0],bpos[1]+1,bpos[2])==blocks['rack']){
		startgrid(bpos[0],bpos[1]+1,bpos[2])
		noa.setBlock(blocks['fire'],bpos[0],bpos[1],bpos[2])
	}*/
	
		setTimeout(function(){  
	console.log(num+'super')
		if(num<25){
	
			noa.setBlock(blocks['portal'],bpos[0],bpos[1]+1,bpos[2])
		}
		}, 1500);
	
	 if(noa.world.getBlockID(bpos[0],bpos[1]+1,bpos[2])==blocks['rack']){
		 console.log('rackkkkkk')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		
		return true;
		
	}
	else if(noa.world.getBlockID(bpos[0],bpos[1]-1,bpos[2])==blocks['rack']){
		console.log('rackkkkkk1')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		return true;
		
	}
	
	else if(noa.world.getBlockID(bpos[0]+1,bpos[1],bpos[2])==blocks['rack']){
		console.log('rackkkkkk2')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		return true;
		
	}
	else if(noa.world.getBlockID(bpos[0]-1,bpos[1],bpos[2])==blocks['rack']){
		console.log('rackkkkkk3')
		
		startgrid(bpos[0],bpos[1],bpos[2])
		return true;
		
	}
	//noa.setBlock(blocks['rack'],bpos[0],bpos[1]+2,bpos[2])
	

	
}





function startgrid(e,t,i){
	num++
		console.log('regular'+num)
	//num++
	//console.log(num+'soviet')
	k=noa
	
	
	if(num>20){
		done=true
	}
	
	
	
	
	
	
	if(!done){
	                          var r = k.world.getBlockID(e - 1, t, i),
                                o = k.world.getBlockID(e + 1, t, i),
                                a = k.world.getBlockID(e, t+1, i ),
                                s = k.world.getBlockID(e, t-1, i );
                            if (r == 0 ) {
									if(positions[e-1+'|'+t+'|'+i]==undefined){
									positions[e-1+'|'+t+'|'+i]='lol'
									
							 
									startgrid(e-1,t,i)
									
									
									
								}
                            }
                            if (o == 0) {
										if(positions[e+1+'|'+t+'|'+i]==undefined){
									positions[e+1+'|'+t+'|'+i]='lol'
									
									startgrid(e+1,t,i)
										
									
									
								}
                            }
                             if (a == 0) {
									if(positions[e+'|'+t+1+'|'+i]==undefined){
									positions[e+'|'+t+1+'|'+i]='lol'
									 
									startgrid(e,t+1,i)
								
									
								}
                            }
                             if (s == 0) {
											if(positions[e+'|'+t-1+'|'+i]==undefined){
									positions[e+'|'+t-1+'|'+i]='lol'
									 
									startgrid(e,t-1,i)
									
									
									
								}
                              
                            }else{
								
								console.log('tfou')
							}
						
						
							
	                        
	}
						
}


/***/ }),

/***/ "./projectile.js":
/*!***********************!*\
  !*** ./projectile.js ***!
  \***********************/
/*! exports provided: throwproj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwproj", function() { return throwproj; });
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound.js */ "./sound.js");
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle.js */ "./particle.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./player.js");
/* harmony import */ var _onFire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onFire */ "./onFire.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes */ "./shapes.js");





global.shapers=null
//import { makePlayer } from './player'
function throwproj(noa,item){
	var matrixangle=noa.camera.getDirection()
	var scene=noa.rendering.getScene()
	
	/*var options={
		height:1,
		width:1,
		depth:1
	}*/
	
		//var mat = new BABYLON.StandardMaterial("coon", noa.scene);
			//var tex = new BABYLON.Texture("./texPack/blocks/stone.png", scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			//mat.diffuseTexture=tex
	var coon=itemList[item.name].clone(item.name)//BABYLON.MeshBuilder.CreateBox("box", options, noa.scene);
	//coon.material=mat
	coon.rotation.y=-Math.PI/2+playermesh.rotation.y
	coon.rotation.z=-Math.PI/3-noa.camera.pitch
	coon.scaling=new BABYLON.Vector3(jsonItems[item.name].held.hand.scale[0], jsonItems[item.name].held.hand.scale[1], jsonItems[item.name].held.hand.scale[2]);
	 var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:arrow', {
				height:0.5,
				width: 0.5,
				depth: 0.5,
			}, scene)
			
			


			hitboxMesh.setParent(coon)
		
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=false;
            hitboxMesh.isPickable=false
			 hitboxMesh.checkCollisions=true
			noa.rendering.addMeshToScene(hitboxMesh, false)
	
	var id=uuid()

	 listofmobs[id] = noa.entities.add( [pos[0],pos[1]+1,pos[2]], 0.1, 0.1, coon, [0.2,0,0.2], true, false,false,null )
	
	 	var body=noa.ents.getPhysicsBody( listofmobs[id])
		   noa.entities.addComponent( listofmobs[id], noa.entities.names.collideTerrain, {
					callback: booya
				  })
				  
				  	  function booya(){
					  console.log('yo man')
					  if(item.name=='vortex'){
						  
						  var posa = noa.ents.getState(  listofmobs[id], 'position').position
						   noa.entities.setPosition(noa.playerEntity,posa[0],posa[1],posa[2]);
						   
					  }
					   if(item.name=='firecracker'){
						  
						  var posa = noa.ents.getState(  listofmobs[id], 'position').position
						  // noa.entities.setPosition(noa.playerEntity,posa[0],posa[1],posa[2]);
						  Object(_shapes__WEBPACK_IMPORTED_MODULE_4__["crater"])(posa[0],posa[1],posa[2],noa,1)
						    noa.ents.deleteEntity(listofmobs[id])
							shapers=[posa[0],posa[1],posa[2],1]
							//datablock.shaper=[posa[0],posa[1],posa[2],noa,1]
					  }
					  
				  }
		
			hitboxMesh.onCollideObservable.add(function (m) {
				//console.log(m.name)
				//return;
				
				
				if(m.metadata!==null){
					
				
					body.mass=0
					var coon2=coon.clone('yo')
					noa.rendering.addMeshToScene(coon2, false)
					noa.rendering.addMeshToScene(coon2._children[0], false)
					var poso=noa.ents.getState(listofmobs[m.metadata], 'position').position
					console.log(poso)
				
					
					var mesh=noa.ents.getState(listofmobs[m.metadata], 'mesh').mesh
					Object(_onFire__WEBPACK_IMPORTED_MODULE_3__["onFire"])(m)
					coon2.parent=m
					//coon2.position.y=mesh._children[4].position._y+(poso[1]% (Math.floor(poso[1])))
					//coon2.position.x=mesh._children[4].position._x+(poso[0]% (Math.floor(poso[0])))
					//coon2.position.z=mesh._children[4].position._z+(poso[2]% (Math.floor(poso[2])))
					noa.ents.getPhysicsBody(listofmobs[m.metadata]).mass=1
					noa.ents.getPhysicsBody(listofmobs[m.metadata]).applyImpulse(0,3,0)
					
					/*c.parent=playermesh._children[1]
	c.position.x=playermesh._children[1].position._x-0.25
	c.position.y=playermesh._children[1].position._y-2
	c.position.z=playermesh._children[1].position._z+0.2*/
					// var cid2 = noa.entities.add( [poso[0],poso[1],poso[2]], 0.1, 0.1, coon2, [0.2,0,0.2], false, false,false,null )
					 
					 
					/*  noa.entities.addComponent(cid2, noa.entities.names.followsEntity, {
					entity: listofmobs[m.metadata],
					offset: [0,pos[1],0]
				  })
				  */
				//  noa.ents.getState(listofmobs[m.metadata], 'info').health-=1//
					//coon2.setParent(m.parent._children[0])
					//coon2.position.y=25
	noa.ents.deleteEntity(cid)
					//coon.setParent(m)
					/*var poso=noa.ents.getState(cid, 'position').position
							noa.ents.deleteEntity(cid)
							
							var coon2=coon.clone(item.name)
							noa.rendering.addMeshToScene(coon2, false)
                        coon2.position.x=poso[0]
						coon2.position.y=poso[1]
						coon2.position.z=poso[2]*/
		
				}
	});
	var alpha=0
		var observer = scene.onBeforeRenderObservable.add(function () {
		//console.log(collidedMesh)
		
		
		
        hitboxMesh.moveWithCollisions(new BABYLON.Vector3(0,alpha, 0));
		
		alpha += 0.001;
		 hitboxMesh.moveWithCollisions(new BABYLON.Vector3(0,-alpha, 0));
	});
	//var collided=false
	
	/* scene.onBeforeRenderObservable.add(() => {
        if(!collided) {
           coon._children[0].moveWithCollisions(new BABYLON.Vector3(-0.01, 0 ,0))
        }
    })*/
		
		 var vec = matrixangle

			 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec, 40)//strength was 40
			  
			  var body = noa.entities.getPhysicsBody( listofmobs[id])
			  body.applyImpulse(vec);
			  var poso = noa.ents.getState(noa.playerEntity, 'position').position
			 //  datablock.content4=[poso,vec,40]
	             datablock.content4=[poso,vec,40,item.name,id]
			
				  
				    var onCollideEnt = function(ownID, otherID) {
				  otherID= listofmobs[id]
    collideEnti(noa, ownID, otherID,item)
  }
				  
				   noa.entities.addComponent( listofmobs[id], noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  		  noa.entities.addComponent( listofmobs[id], noa.entities.names.info, {
					   nameinfo:  'arrow',
					   health:1
				   })
				  
				/*  setTimeout(function(){ 
	var blockp= noa.ents.getState(cid, 'position').position
					
                            crater(blockp[0],blockp[1],blockp[2],noa,blockPick)
				  }, 1000);*/
				
				  
				  

}





				  function collideEnti(noa, otherID, ownID,item){
					  
					  if(otherID==noa.playerEntity){
						  noa.ents.deleteEntity(ownID)
						for (var i=0;i<itemStack.length;i++){
							 if(itemStack[i]==jsonItems[item.name]){
								countStack[i]+=1
								break;
								
							}else if(itemStack[i]==null){
								itemStack[i]=jsonItems[item.name]
								countStack[i]+=1
								break;
							}
							
							
							
							
						}
						Object(_player__WEBPACK_IMPORTED_MODULE_2__["getHand"])(noa,itemStack[selected])
						return;
					  }
						
						if(otherID!==noa.playerEntity){
							//var c=itemList['arrow'].clone('arrow')
							
						//	noa.ents.getState(otherID,'info').health-=1
							
							//if(noa.ents.getState(otherID,'info').health<1){
								//return;
							//}
						var entpos=noa.ents.getState(otherID,'position').position
						
						var body=noa.ents.getPhysicsBody(otherID)
						body.applyImpulse([0,7,0])
						Object(_particle_js__WEBPACK_IMPORTED_MODULE_1__["makeparticle"])('lol',entpos,scene,2,0.3)
							
							
							Object(_sound_js__WEBPACK_IMPORTED_MODULE_0__["playsound"])('blop',0.1)
							
						}
						noa.ents.deleteEntity(ownID)
						
						//console.log(otherID)
						/*for (const key in listofmobs) {
							console.log(listofmobs[key])
							if(ownID==listofmobs[key]){
								var body=noa.ents.getPhysicsBody(otherID)
								console.log('wow')
										body.applyImpulse([0,1,0])
							}
						}*/
						
						
}





/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./punchBreak.js":
/*!***********************!*\
  !*** ./punchBreak.js ***!
  \***********************/
/*! exports provided: punchBreak, checkState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "punchBreak", function() { return punchBreak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkState", function() { return checkState; });

function punchBreak(noa){
	console.log('stooge')
	var x=0
	var y=50
	var z=0
	var radius=6;
	var rad = Math.ceil(radius)

	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+ k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
									if(Math.floor(y)+j>-5){
											
												noa.addBlock(blocks['grass'],Math.floor(x)+i, Math.floor(y), Math.floor(z)+k)
												// socket.emit('block-place', {position: [Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k ],angle:'north',id:1,info:'positionClose'})
									}
								
						}
					}
				}
			}
			
			
		radius=10;
	rad = Math.ceil(radius)
y=60
	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+ k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
									if(Math.floor(y)+j>-5){
											
												noa.addBlock(blocks['grass'],Math.floor(x)+i, Math.floor(y), Math.floor(z)+k)
												// socket.emit('block-place', {position: [Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k ],angle:'north',id:1,info:'positionClose'})
									}
								
						}
					}
				}
			}
	
	
	
} 


function checkState(poso){
	

 
}	


/***/ }),

/***/ "./registry.js":
/*!*********************!*\
  !*** ./registry.js ***!
  \*********************/
/*! exports provided: initBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBlocks", function() { return initBlocks; });
/* harmony import */ var _blockDef_stairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockDef/stairs */ "./blockDef/stairs.js");
/* harmony import */ var _blockDef_ladder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockDef/ladder */ "./blockDef/ladder.js");
/* harmony import */ var _blockDef_rail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockDef/rail */ "./blockDef/rail.js");
/* harmony import */ var _blockDef_railside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blockDef/railside */ "./blockDef/railside.js");
/* harmony import */ var _blockDef_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockDef/fire */ "./blockDef/fire.js");
/* harmony import */ var _blockDef_flowerpot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blockDef/flowerpot */ "./blockDef/flowerpot.js");
/* harmony import */ var _blockDef_chest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blockDef/chest */ "./blockDef/chest.js");
/* harmony import */ var _blockDef_pc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockDef/pc */ "./blockDef/pc.js");
/* harmony import */ var _blockDef_waterside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blockDef/waterside */ "./blockDef/waterside.js");
/* harmony import */ var _blockDef_watersource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blockDef/watersource */ "./blockDef/watersource.js");
/* harmony import */ var _blockDef_slant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blockDef/slant */ "./blockDef/slant.js");
/* harmony import */ var _blockDef_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blockDef/portal */ "./blockDef/portal.js");
/* harmony import */ var _blockDef_rack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blockDef/rack */ "./blockDef/rack.js");
/* harmony import */ var _blockDef_floor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blockDef/floor */ "./blockDef/floor.js");
/* harmony import */ var _blockDef_door__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blockDef/door */ "./blockDef/door.js");
/* harmony import */ var _blockDef_fence__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blockDef/fence */ "./blockDef/fence.js");
/* harmony import */ var _blockDef_bed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blockDef/bed */ "./blockDef/bed.js");
/* harmony import */ var _blockDef_fenceside__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blockDef/fenceside */ "./blockDef/fenceside.js");
/* harmony import */ var _blockDef_bell__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blockDef/bell */ "./blockDef/bell.js");
/* harmony import */ var _blockDef_ebutton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blockDef/ebutton */ "./blockDef/ebutton.js");






















function initBlocks(noa) {
	var blockids=1
	// block materials (just colors for this demo)
var texURL = "./texPack/"+funpack+"/blocks/" // replace that with a filename to specify textures
var brownish = [0.45, 0.36, 0.22]
var greenish = [0.1, 0.8, 0.2]
var white = [1, 1, 1]
noa.registry.registerMaterial('dirt', brownish, texURL +'dirt.png')
noa.registry.registerMaterial('grass', white, texURL +'grass_top.png')
noa.registry.registerMaterial('grasside', greenish, texURL +'grass_side.png')
noa.registry.registerMaterial('water', [0.5, 0.5, 0.8, 0.6],null)
noa.registry.registerMaterial('lava', [1, 0.6, 0, 0.8],null)
noa.registry.registerMaterial('flower', [0.5, 0.5, 0.8, 0],null)
noa.registry.registerMaterial('stone', greenish, texURL +'stone.png')
noa.registry.registerMaterial('leaves', greenish, texURL +'leaves.png')
noa.registry.registerMaterial('log', greenish, texURL +'log.png')
noa.registry.registerMaterial('sand', greenish, texURL +'sand.png')
noa.registry.registerMaterial('bookshelf', greenish, texURL +'bookshelf.png')
noa.registry.registerMaterial('stairs', [0.5, 0.5, 0.8, 0],null)

noa.registry.registerMaterial('rack', greenish, texURL +'/minecraft/frame.png')
noa.registry.registerMaterial('caveair', [0.5, 0.5, 0.8, 0],null)

// block types and their material names
blocks['grass'] = noa.registry.registerBlock(blockids++, { material: ['grass','dirt','grasside'],solid:true})

blocks['water']= noa.registry.registerBlock(blockids++, {
        material: 'lava',
		fluidDensity: 0.5,
	    viscosity: 0,
        fluid: true
    })
blocks['stone'] = noa.registry.registerBlock(blockids++, { material: 'stone' })
blocks['watertop']=makeWater(noa,blockids++);
	
blocks['poppy']=	makePoppy(noa,blockids++);
	blocks['leaves'] = noa.registry.registerBlock(blockids++, { material: 'leaves' })
	blocks['log']  = noa.registry.registerBlock(blockids++, { material: 'log' })
	blocks['sand']  = noa.registry.registerBlock(blockids++, { material: 'sand' })
	                                                           //back,front,top,'bottom,'side',side'
	blocks['bookshelf']  = noa.registry.registerBlock(blockids++, { material: ['stone','bookshelf', 'stone', 'stone','bookshelf', 'bookshelf'] })
	blocks['stairs']  = Object(_blockDef_stairs__WEBPACK_IMPORTED_MODULE_0__["stairs"])(noa,{},blockids++,null,jsonItems['stairs'])
	blocks['lava']=makeLava(noa,blockids++);
	
	var colors = ['blue', 'red', 'green']

	colors.forEach(function(color) {
		
		noa.registry.registerMaterial('sand_'+color, greenish, texURL +color+'_sand.png')
		
		blocks[color+'_sand']  = noa.registry.registerBlock(blockids++, { material: 'sand_'+color })
		//createBlock(_id++, color + '_wool', 0, ['block/' + color + '_wool' ] , {}, {drop: color + '_wool', hardness: 1, tool: 'shears', material: 'cloth'})
	})
	
	blocks['ladder']  = Object(_blockDef_ladder__WEBPACK_IMPORTED_MODULE_1__["ladder"])(noa,{},blockids++,'ladder',jsonItems['ladder'])
	blocks['rail']  = Object(_blockDef_rail__WEBPACK_IMPORTED_MODULE_2__["rail"])(noa,{},blockids++,'rail',jsonItems['rail'])
	blocks['railside']  = Object(_blockDef_railside__WEBPACK_IMPORTED_MODULE_3__["railside"])(noa,{},blockids++,'railside',jsonItems['railside'])
	blocks['fire'] =Object(_blockDef_fire__WEBPACK_IMPORTED_MODULE_4__["fire"])(noa,{},blockids++,'fire')
	blocks['flowerpot']  = Object(_blockDef_flowerpot__WEBPACK_IMPORTED_MODULE_5__["flowerpot"])(noa,{},blockids++,null,jsonItems['stairs'])
	blocks['waterside']  = Object(_blockDef_waterside__WEBPACK_IMPORTED_MODULE_8__["waterside"])(noa,{},blockids++,null,jsonItems['waterside'])
	blocks['watersource']  = Object(_blockDef_watersource__WEBPACK_IMPORTED_MODULE_9__["watersource"])(noa,{},blockids++,'watersource',jsonItems['waterside'])
	blocks['slant']  = Object(_blockDef_slant__WEBPACK_IMPORTED_MODULE_10__["slant"])(noa,{},blockids++,'slant',jsonItems['waterside'])
	blocks['portal'] =Object(_blockDef_portal__WEBPACK_IMPORTED_MODULE_11__["portal"])(noa,{},blockids++,'nether_portal')
    blocks['rack'] = Object(_blockDef_rack__WEBPACK_IMPORTED_MODULE_12__["rack"])(noa,{},blockids++,'nether_portal')
	
	blocks['path'] = path(noa,blockids++)
	blocks['caveair'] = noa.registry.registerBlock(blockids++, { material: 'caveair',solid:false,opaque:false})
	blocks['floor'] = Object(_blockDef_floor__WEBPACK_IMPORTED_MODULE_13__["floor"])(noa,{},blockids++,'nether_portal')
	blocks['door'] = Object(_blockDef_door__WEBPACK_IMPORTED_MODULE_14__["door"])(noa,{},blockids++,'door',jsonItems['door'])
	blocks['fence'] = Object(_blockDef_fence__WEBPACK_IMPORTED_MODULE_15__["fence"])(noa,{},blockids++,'fence',jsonItems['oakfence'])
	blocks['fenceside'] = Object(_blockDef_fenceside__WEBPACK_IMPORTED_MODULE_17__["fenceside"])(noa,{},blockids++,'fenceside',jsonItems['oakfence'])
	blocks['bed'] = Object(_blockDef_bed__WEBPACK_IMPORTED_MODULE_16__["bed"])(noa,{},blockids++,'bed',jsonItems['bed'])
	blocks['chest'] = Object(_blockDef_chest__WEBPACK_IMPORTED_MODULE_6__["chest"])(noa,{},blockids++,'chest',jsonItems['stairs'])
	blocks['pc'] = Object(_blockDef_pc__WEBPACK_IMPORTED_MODULE_7__["pc"])(noa,{},blockids++,'pc',jsonItems['stairs'])
		blocks['ebutton'] = Object(_blockDef_ebutton__WEBPACK_IMPORTED_MODULE_19__["ebutton"])(noa,{},blockids++,'ebutton',jsonItems['stairs'])
		blocks['bell'] = Object(_blockDef_bell__WEBPACK_IMPORTED_MODULE_18__["bell"])(noa,{},blockids++,'bell',jsonItems['stairs'])
	blockPick=blocks['bell']
}

function makePoppy(noa,currentID ) {
	var scene=noa.rendering.getScene()
	var mesh= makePlantSpriteMesh(noa, scene, '/blocks/poppy', 'poppy') 

	scene.removeMesh(mesh);
	
	
	  var flowerID = noa.registry.registerBlock( currentID, { material:'flower',
	
	 opaque:false,
	 solid:false,
	
	 blockMesh:mesh,
	
	 onCustomMeshCreate: function (mesh, x, y, z) {
		
		 	
		 	
	 },
	
	  })
	
		
		return currentID;
}

function path(noa,currentID ) {
	var scene=noa.rendering.getScene()
	var mesh= BABYLON.MeshBuilder.CreateBox("box",{height:0.5,width:0.5,depth:0.5}, scene);
	var mat = new BABYLON.StandardMaterial("mat", scene);
	mat.diffuseTexture=new BABYLON.Texture('texPack/'+funpack+'/blocks/path.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	mesh.material=mat
	scene.removeMesh(mesh);
	
	
	  var pathID = noa.registry.registerBlock( currentID, { material:'flower',
	
	 opaque:false,
	 solid:false,
	
	// blockMesh:null,
	blockMesh:mesh,
	 onCustomMeshCreate: function (mesh, x, y, z) {
		
		 	mesh.position.y+=0.25
		 	
	 },
	
	  })
	
		
		return currentID;
}

function makeWater(noa,currentID ) {
	
	var mesh= BABYLON.MeshBuilder.CreatePlane("plane", { size: 1 }, scene);//waterytexture(noa)
//	mesh.rotation.x=Math.PI/2
	var face0 = new BABYLON.StandardMaterial("face0", scene);
	mesh.material=face0
	face0.diffuseTexture=waterytexture(noa)//new BABYLON.Texture('texPack/'+funpack+'/blocks/water_still.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)//waterytexture(noa)
	face0.diffuseTexture.hasAlpha=true;
	face0.alpha = 0.99;
	
	face0.emissiveColor=BABYLON.Color3.White()
	face0.diffuseColor=BABYLON.Color3.White()
	//face0.diffuseTexture.vScale = 0.0625;
	
	//setInterval(function(){ 
   //face0.diffuseTexture.vOffset -= 0.0625;
   //  }, 500);
	face0.specularColor = BABYLON.Color3.Black()
face0.emissiveColor = BABYLON.Color3.Green()
face0.ambientColor=BABYLON.Color3.Red()
face0.emissiveColor = BABYLON.Color3.White()
	face0.backFaceCulling = false;
	var scene=noa.rendering.getScene()
	scene.removeMesh(mesh);
	//noa.rendering.addMeshToScene(mesh, false)
	
	  var waterID = noa.registry.registerBlock( currentID, { material:'lava'/*[null,null, null, null, null, null]*/,
	 fluid:true,
	 opaque:false,
	
	 fluidDensity: 0.5,
	 viscosity: 0,
	 blockMesh:mesh,
	
	 onCustomMeshCreate: function (mesh, x, y, z) {
		mesh.position.y=0.9;
		 mesh.rotation.x=Math.PI/2
		 
		 	
		 	
	 },
	
	  })
	
		
		return currentID;
}

function makeWaterSide(noa,currentID ) {
	
	var mesh= BABYLON.MeshBuilder.CreatePlane("plane", { width:1,height:Math.hypot(0.9,0.8) }, scene);//waterytexture(noa)
//	mesh.rotation.x=Math.PI/2
	var face0 = new BABYLON.StandardMaterial("face0", scene);
	mesh.material=face0
	face0.diffuseTexture=//waterytexture(noa)
	face0.diffuseTexture.hasAlpha=true;
	face0.alpha = 0.7;
	face0.specularColor = BABYLON.Color3.Black()
face0.emissiveColor = BABYLON.Color3.Green()
face0.ambientColor=BABYLON.Color3.Red()
	face0.backFaceCulling = false;
	var scene=noa.rendering.getScene()
	scene.removeMesh(mesh);
	//noa.rendering.addMeshToScene(mesh, false)
	
	  var waterID = noa.registry.registerBlock( currentID, { material:'water'/*[null,null, null, null, null, null]*/,
	 fluid:true,
	 opaque:false,
	
	 fluidDensity: 0.5,
	 viscosity: 0,
	 blockMesh:mesh,
	
	 onCustomMeshCreate: function (mesh, x, y, z) {
		mesh.position.y=0.8;
		 mesh.rotation.x=Math.PI/2+Math.tan(0.225,0.2)
		 
		 	
		 	
	 },
	
	  })
	
		
		return currentID;
}

function makeLava(noa,id){
	var options={opaque:true,solid:false,fluid:true}
	var imageheight=512
	         var imagewidth=16
	         var pixely=1/imageheight;
	         var pixelx=1/imagewidth;
	         var num=1;
			 
			 
			  var faceUV = new Array(6);
	 
	 
	
	
	var n=[new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//face
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//back 
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0.0625,0.125,0.125,0.375),//right
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//new BABYLON.Vector4(0,0.125,0.046,0.375),//left
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0)),//top head
	new BABYLON.Vector4(pixelx*0,-pixely*(15+num),pixelx*(15+num),-pixely*(0))];//bottom*/
	
	
  var  uvoptions = {
        height: 1,
		depth:1,
		width:1,
		faceUV: n,
		wrap: true,
        updatable: true
    };	
			 
			

  
			 
			 
			//var mesh =BABYLON.MeshBuilder.CreateBox(name, options, noa.rendering.getScene())
			var mesh =BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			
	
			var mat = noa.rendering.makeStandardMaterial('cool')
			var tex = new BABYLON.Texture('./texPack/'+funpack+'/blocks/lava_still.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
			mat.diffuseTexture = tex//waterytexture(noa)//tex
			mat.emissiveColor = BABYLON.Color3.White()
			//tex.hasAlpha=true
			//mat.alpha=1
			//mat.diffuseTexture.uOffset = 1/32;
			mesh.material=mat
			mat.diffuseTexture.hasAlpha=true
			var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	        mesh.bakeTransformIntoVertices(offset)
			var finOpts = options
			finOpts.blockMesh = mesh
		/*	setInterval(function(){ 
     tex.vOffset -= 1/32;
     }, 500);*/
	 
	 
	  /*  blockIDs.waterObject = noa.registry.registerBlock(_id++, {
        blockMesh: mesh,
        opaque: false,
        material: 'water',
        fluid: true,
    })*/
			
			
			
			noa.registry.registerBlock(id, finOpts)
			return id;
}

function waterytexture(noa){
	
	       var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("lavaTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = !1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 1 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
                            for (var s = 0, c = 1.2 * Math.sin(a * Math.PI * 3 / 16), u = 1.2 * Math.sin(e * Math.PI * 3 / 16), l = e - 1; l <= e + 1; l++)
                                for (var h = a - 1; h <= a + 1; h++) {
                                    var f = l + c & 15,
                                        d = h + u & 15;
                                    s += t[f + 16 * d]
                                }
                          i[e + 16 * a] = s / 10 + (n[(e + 0 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 0 & 15)] + n[(e + 1 & 15) + 16 * (a + 1 & 15)] + n[(e + 0 & 15) + 16 * (a + 1 & 15)]) / 4 * .8, n[e + 16 * a] += .01 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .06, Math.random() < .005 && (r[e + 16 * a] = 1.5)
                        }
                    var p = i;
                    i = t, t = p;
                    for (var m = 0; m < 256; m++) {
                        var s = 2 * t[m];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var g = s,
                            _ = 100 * g + 155,
                            v = g * g * 255,
                            y = g * g * g * g * 128;
                        o[4 * m + 0] = _, o[4 * m + 1] = v, o[4 * m + 2] = y, o[4 * m + 3] = 255
                    }
                }
            };
            return a;
	
	       /*    var t = new Float32Array(256),
                i = new Float32Array(256),
                n = new Float32Array(256),
                r = new Float32Array(256),
                o = new Uint8ClampedArray(1024),
                a = new BABYLON.DynamicTexture("waterTexture", {
                    width: 16,
                    height: 16
                }, noa.rendering._scene);
            a.hasAlpha = 1, a.anisotropicFilteringLevel = 1, a.updateSamplingMode(BABYLON.Texture.NEAREST_SAMPLINGMODE), a.wrapU = 1, a.wrapV = 1,a.alpha=0.7;
            var s = a.getContext(),
                c = new ImageData(o, 16, 16),
                u = 0;
            noa.on("tick", function(e) {
                ++u % 2 != 0 && l.redraw()
            });
            var l = {
                texture: a,
                tick: function() {},
                redraw: function() {
                    l.update(), s.clearRect(0, 0, 16, 16), s.putImageData(c, 0, 0), a.update()
                },
                update: function() {
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) {
							
                            for (var s = 0, c = e - 1; c <= e + 1; c++) {
                                var u = 15 & c,
                                    l = 15 & a;
                                s += t[u + 16 * l]
                            }
                            i[e + 16 * a] = s / 3.3 + .8 * n[e + 16 * a]
                        }
                    for (var e = 0; e < 16; e++)
                        for (var a = 0; a < 16; a++) n[e + 16 * a] += .05 * r[e + 16 * a], n[e + 16 * a] < 0 && (n[e + 16 * a] = 0), r[e + 16 * a] -= .1, Math.random() < .05 && (r[e + 16 * a] = .5);
                    var h = i;
                    i = t, t = h;
                    for (var f = 0; f < 256; f++) {
                        var s = t[f];
                        s > 1 && (s = 1), s < 0 && (s = 0);
                        var d = s * s,
                            p = 32 + 32 * d,
                            m = 50 + 64 * d,
                            g = 196 + 50 * d;
                        o[4 * f + 0] = p, o[4 * f + 1] = m, o[4 * f + 2] = 255, o[4 * f + 3] = g
                    }
                }
            };
			return a;*/
	
	
	
	
}

function makePlantSpriteMesh(noa, scene, url, name) {

	
	

	var matname = name || 'sprite-mat'
	/*if ( (url.startsWith('http://') || url.startsWith('https://') ) && game.allowCustom == true)*/ 
	/*var tex = new BABYLON.Texture(url, scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	else*/ var tex = new BABYLON.Texture('texPack/'+funpack+url+'.png', scene, true, true, BABYLON.Texture.NEAREST_SAMPLINGMODE)
	tex.hasAlpha = true
	
	var mesh = BABYLON.Mesh.CreatePlane('sprite-' + matname, 1, scene)
	
	
		var shaderMaterial = new BABYLON.ShaderMaterial("shader1", scene, {
                    vertex: "custom",
                    fragment: "custom",
                },
                    {
                needAlphaBlending: true,

                        attributes: ["position", "normal", "uv"],
                        uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
                    });




	shaderMaterial.backFaceCulling=false


	 shaderMaterial.setFloat("time", 0);
shaderMaterial.setTexture("textureSampler", tex);
shaderMaterial.diffuseTexture=tex
	shaderMaterial.diffuseColor = BABYLON.Color3.White()
	shaderMaterial.ambientColor = BABYLON.Color3.White()

	var time = 0;
	
	
		setInterval(function(){ 
    var shaderMaterial = scene.getMaterialByName("shader1");
                shaderMaterial.setFloat("time", time);
                time += 0.02;

                shaderMaterial.setVector3("cameraPosition", scene.activeCamera.position);
				
        scene.render();
     }, 100);
	
	
	
	
	
	var mat = noa.rendering.makeStandardMaterial(matname)
	mat.backFaceCulling = false
	mat.diffuseTexture = tex
	mat.diffuseTexture.vOffset = 0.99	
	
	
	
	
	mesh.material =mat
	mesh.rotation.y += 0.81

	var offset = BABYLON.Matrix.Translation(0, 0.5, 0)
	mesh.bakeTransformIntoVertices(offset)
	var clone = mesh.clone()
	clone.rotation.y += 1.62
	
    //var newmesh=BABYLON.Mesh.MergeMeshes([mesh, clone], true, true, undefined, false, false)
	return BABYLON.Mesh.MergeMeshes([mesh, clone], true, true, undefined, false, false)//newmesh*/
}


/***/ }),

/***/ "./rtc.js":
/*!****************!*\
  !*** ./rtc.js ***!
  \****************/
/*! exports provided: rtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtc", function() { return rtc; });
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle */ "./particle.js");
/* harmony import */ var _nametag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nametag */ "./nametag.js");
/* harmony import */ var _chestWars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chestWars */ "./chestWars.js");
/* harmony import */ var _punchBreak__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./punchBreak */ "./punchBreak.js");
/* harmony import */ var _armor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./armor */ "./armor.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes */ "./shapes.js");







function rtc(){
	setTimeout(function(){  

	Object(_chestWars__WEBPACK_IMPORTED_MODULE_2__["chestWars"])()
	itemStack[0]=jsonItems["bearhat"]
	 }, 10000);
	var scene=noa.rendering.getScene()
	noa.inputs.down.on('menu', function () {
		
		rtcblocklist['pos']=pos
	
		if(socketo!==null){
socketo.emit('save',JSON.stringify(rtcblocklist)) 
		}
})
var user=null;
let str = document.location.toString();

function makevig(id,name){
var entmesh=entMeshes[name].clone(name)
listofmobs[id]= noa.entities.add( [0,120,0], 0.5, 1,entmesh, [0.2,0,0.2], false, false,true,null )
noa.entities.addComponent(listofmobs[id], noa.entities.names.rtcMove, {
					   mesh: entmesh
})
}

function makestatic(name,po,id){
	
	if(name=='none'){
		noa.ents.deleteEntity(listofmobs[id])
		
		return true;
	}
	var entmesh=entMeshes[name].clone(name)

listofmobs[id]= noa.entities.add(po,0.5,1,entmesh,[0.2,0,0.2],false,false,false,null)

			var hitboxMesh = new BABYLON.MeshBuilder.CreateBox('hitbox:'+name+':'+id, {
				height:0.6,
				width: 1.2,
				depth: 1.7,
			}, scene)

			hitboxMesh.setParent(entmesh)
			hitboxMesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.5/2, 0) )
			hitboxMesh.material = noa.rendering.makeStandardMaterial()
			hitboxMesh.material.wireframe = true
            hitboxMesh.isVisible=true;
            hitboxMesh.isPickable=false
			noa.rendering.addMeshToScene(hitboxMesh, false)

}
var playerNames={}
function makeent(id){
	
	playerMeshes[id]=playermesh.clone('player')
	var busmaty = new BABYLON.StandardMaterial("busmaty", scene);
	busmaty.diffuseTexture=playermesh._children[0].material.diffuseTexture
	busmaty.specularColor = BABYLON.Color3.Black()
 for (var i=0;i<playerMeshes[id].getChildren().length;i++){
	playerMeshes[id]._children[i].material=busmaty
	
 }
	Object(_nametag__WEBPACK_IMPORTED_MODULE_1__["nametag"])(playerMeshes[id], 'narrr', 1)
	
	
	playerMeshes[id]._children[5].name='hitbox:evil:'+id
	
listofplayers[id]= noa.entities.add( [0,120,0], 0.6, 1.8,playerMeshes[id], [0,0,0], false, false,true,null )
console.log(Object.keys(playerNames).length+"wooooooooooooooooooo")
var num=Object.keys(playerNames).length////
playerNames[id]="player"+(num+1)//////////////

console.log(playerNames)
bigSign="player"+(num+1)+"joined"
	bigSignTime=300
	Object(_armor__WEBPACK_IMPORTED_MODULE_4__["addHat"])(noa,playerMeshes[id],'santa_hat'/*rtcblocklist.armor[0]*/)
	console.log(Object.keys(listofplayers).length)
	
	bigSign=''// Object.keys(listofplayers).length+1+':players'
	
	
	if(Object.keys(listofplayers).length+1>2){
		bigSign=gameState[2]
	bigSignTime=300
    datablock.message=gameState[2]


					/*for (var i=-10; i<10; i++){
						
						for (var j=-10;j<10; j++){
						//noa.setBlock(0, i,42, j)
						noa.setBlock(0, i,41, j)
					}
					}*/

}

}

var timer=Math.round(160);

var channelisopen=false;
var cleanplayers=false;
var named=false;
var adminplayer=false;
var multiready=false;
// prompt("Please enter your name", "");
//var mystorage=window.localStorage;
    // var localstorageName=mystorage.getItem('name');
	
	
var ischanneloff=true;
var conplayers = {}



var litofp={}
function startchannel(action){
channel = new DataChannel();
channel.direction = 'many-to-many';

                // https://github.com/muaz-khan/WebRTC-Experiment/tree/master/socketio-over-nodejs
            // var SIGNALING_SERVER = 'https://socketio-over-nodejs2.herokuapp.com:443/';
			 var SIGNALING_SERVER ='http://localhost:9559/';
			  //var SIGNALING_SERVER ='ws://' + 'localhost:3000';
			//var SIGNALING_SERVER ='http://18.118.171.121:9559/';
                channel.openSignalingChannel = function(config) {
                   var channel = config.channel || this.channel || 'default-namespace';
                   var sender = Math.round(Math.random() * 9999999999) + 9999999999;
                   
                   
                    
                   io.connect(SIGNALING_SERVER).emit('new-channel', {
                      channel: channel,
                      sender : sender,
					  reconnection: false
                   });
                   
                 var socket = io.connect(SIGNALING_SERVER + channel);
				 
                   socket.channel = channel;
                     // console.log(socket);
                   socket.on('connect', function (userid) {
					   
					
					   socketo=socket
                      if (config.callback) config.callback(socket);
					  
					  console.log('wathhhhh')
					  ischanneloff=false;
					
                   });
				 socket.emit('getworlds','')
				 socket.once('getingworlds',async function(data) {
					 console.log(data)
					for(const key in data){
						
						console.log(key)
					 uis['worldinfo'].push({type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:data[key],action:"naming", x: 0, y:uis['worldinfo'][uis['worldinfo'].length-1].y+30, width: 200, height: 20})
					}
					 ///
					 })
				
						//socket.emit('createworld','dave')
				//uis['worldinfo'].push({type: "button", path:"./texPack/"+funpack+"/maingui/button-normal.png",textt:"dave ",action:"naming", x: 0, y:90, width: 200, height: 20})
						
				
							
				   socket.once('worldinfo', async function(data) {
					   
					   
				console.log('chump')
				
				
					//console.log(JSON.parse(data))
				Object(_armor__WEBPACK_IMPORTED_MODULE_4__["addHat"])(noa,playermesh,JSON.parse(data).armor[0])
				rtcblocklist=JSON.parse(data)
				noa.entities.setPosition(noa.playerEntity,rtcblocklist['pos'][0],rtcblocklist['pos'][1],rtcblocklist['pos'][2]);
				//rtcblocklist['worldname']='macaque'
					
					   
			})
			
						
				   
				   
						
						
				   
				   
				  
					
					socket.on('macaqueskin', function (data) {
						
                     // if (config.callback) config.callback(socket);
					 console.log(JSON.parse(data));
					 
					 Object(_armor__WEBPACK_IMPORTED_MODULE_4__["addHat"])(noa,playermesh,JSON.parse(data).armor[0])
                   });
				   
				     socket.on('sendingchunk',data => {
						storage[data.id]=JSON.parse(data.datas)
					         //clerk[data.id]=JSON.parse(data.datas)
					         // localStorage.setItem(rtcblocklist.worldname,JSON.stringify(clerk))
					          // storage=JSON.parse(localStorage.getItem(rtcblocklist.worldname))

                         });
                      
				   socket.on('close', function () {
                      if (config.callback) config.callback(socket);
					 console.log('wooo');
                   });
                   
                   socket.send = function (message) {
                        socket.emit('message', {
                            sender: sender,
                            data  : message
                        });
                    };
                   
                   socket.on('message', config.onmessage);
                };
		
                channel.onmessage = function(data, userid, latency) {
				
				
				if(JSON.parse(data).terminate==true){
					
					/*if(dominator){
					console.log('his dead')
					channel.eject(userid)
					return;
					}*/
				}
				if(litofp[channel.userid]==undefined){
					 litofp[channel.userid]='yo'
				}
				   if(litofp[userid]==undefined){
					  	
					   //console.log(channel)
						   litofp[userid]='yo'
						  // console.log(litofp)
						checknumplayers(2)
					   }
				
					actionrtcplayer(JSON.parse(data))
                   
                };

                channel.onopen = function(userid) {
				console.log('channel open yo'+userid)
					channelisopen=true;
					
		
               
				if(named==false && adminplayer==false){
					setTimeout(function() {
				 	//user='player'+(Object.keys(conplayers).length+1);	
					user=Object.keys(conplayers).length;	
				
							//debuginfo=teams[user]
					
			
				named=true;
				multiready=true
				console.log(user);
				
				 
				 }, 3000);
			
				}
                  
                };
				
				channel.onjoin = function(userid) {
				console.log(userid+' : testu');
			
                  
                };
				
				
           var str=action.split(' ');
	
	if(str[0]==='server'){
		adminplayer=true
		multiready=true;
		    channel.open(str[1]);
			    //user='player1'
				user=1
				
			
				// debuginfo=teams[user]
	
				
			
					
	}
	
	if(str[0]==='join'){
	
		
			 channel.connect(str[1]);
	
		
		
	}
           
    /* users presence detection */
                channel.onleave = function(userid) {
                    var message = 'A user whose id is ' + userid + ' left you!';
					ischanneloff=true;
					
                     console.log(message);
					 hideplayers();
					 
					 if(adminplayer){
						  var str=action.split(' ');
					channel.open(str[1]);
					 }else{
					 setTimeout(function(){ 
					  var str=action.split(' ');
					channel.connect(str[1]);
					
					 }, 3000);
					 }
                };
				
				
				
				
		
				
				}
				
				
				

function hideplayers(){
	
	for (const key in  listofplayers){
		
		noa.entities.setPosition( listofplayers[key],0,-300,0);
	}
	 
	
}

		
		


noa.on('beforeRender', async function() {

	if(ischanneloff===true){
		return;
	}
	
	
	if(playermesh==null){
		return;
	}
	datablock.content=pos
	datablock.content2=[playermesh.rotation.x,playermesh.rotation.y,playermesh.rotation.z,
	playermesh._children[0].rotation.x,playermesh._children[0].rotation.y,playermesh._children[0].rotation.z,
	playermesh._children[1].rotation.x,playermesh._children[1].rotation.y,playermesh._children[1].rotation.z,
	playermesh._children[2].rotation.x,playermesh._children[2].rotation.y,playermesh._children[2].rotation.z,
	playermesh._children[3].rotation.x,playermesh._children[3].rotation.y,playermesh._children[3].rotation.z,
	playermesh._children[4].rotation.x,playermesh._children[4].rotation.y,playermesh._children[4].rotation.z,
	playermesh._children[5].rotation.x,playermesh._children[5].rotation.y,playermesh._children[5].rotation.z]
    datablock.content5=[hitting,mainplayerid,rideNameRtc,spawnedEnt,rtcHand,rtcPart]
	datablock.clean=entToRemove
	datablock.terminate=isDead
	datablock.shaper=shapers
    const youString = JSON.stringify(datablock)
   //////////////////

   channel.send(youString);
	//////////////////
	datablock.content3=null
	datablock.content4=null
	datablock.message=null
	hitting=false
	rideNameRtc=null
	spawnedEnt=null
	rtcHand=null
    rtcPart=null	
datablock.clean=null	
datablock.terminate=false
datablock.shaper=null
	})
                        
                        
                    
   
	 
	 function actionrtcplayer(options){  
	 
	  if(options.shaper!==null){
		
		 Object(_shapes__WEBPACK_IMPORTED_MODULE_5__["crater"])(options.shaper[0],options.shaper[1],options.shaper[2],noa,options.shaper[3])
		
	 }
	
	 if(options.clean!==null){
		 
		 
		 noa.ents.deleteEntity(listofmobs[options.clean])//
	 }
	 if(options.message!==null){
		
		
		if(options.message.startsWith('!^!')){
			console.log('secret message:'+options.message)
			
			bigSign=options.message.substring(3,options.message.length)
			bigSignTime=3
			bigSignColor='red'
			
			 noa.entities.setPosition(noa.playerEntity,rtcblocklist.meeting[0],rtcblocklist.meeting[1]+1,rtcblocklist.meeting[2]);
		}
		if(options.message=="IWON"){
			bigSign=playerNames[options.content5[1]]+" has  Won"
	          bigSignTime=300
		}
		else if(options.message==gameState[2] && !dominator ){
			bigSign=gameState[2]
	          bigSignTime=300
		}
		 
		 chatMessage="player says:"+options.message
	 }
	 
	 if(options.entcontent!==undefined){
		
					 if(!dominator){
						 
						 if(listofmobs[options.entcontent[0]]==undefined){
							  makevig(options.entcontent[0],options.entcontent[4])
						 }else{
						 
						 
						 var pos=noa.ents.getState(listofmobs[options.entcontent[0]],'position').position
				var newPos=[options.entcontent[1][0],options.entcontent[1][1],options.entcontent[1][2]]
					var move = vec3.create()	
										vec3.lerp(move, pos, newPos, 0.1)
					noa.entities.setPosition(listofmobs[options.entcontent[0]],move);
					
					var l=noa.ents.getState(listofmobs[options.entcontent[0]],'mesh').mesh
					l.rotation.y=options.entcontent[2]
				
					noa.ents.getState(listofmobs[options.entcontent[0]],'rtcMove').moving=options.entcontent[3]
					
						 }
					 }
					 return;
	 }
	 
	 if(listofplayers[options.content5[1]]==undefined){
		makeent(options.content5[1])
	 }
	 
var pos=noa.ents.getState(listofplayers[options.content5[1]],'position').position
var newPos=[options.content[0],options.content[1],options.content[2]]
	var move = vec3.create()	
						vec3.lerp(move, pos, newPos, 0.1)
	noa.entities.setPosition(listofplayers[options.content5[1]],move);
	
	playerMeshes[options.content5[1]].rotation={x:options.content2[0],y:options.content2[1],z:options.content2[2]}
	playerMeshes[options.content5[1]]._children[0].rotation={x:options.content2[3],y:options.content2[4],z:options.content2[5]}
playerMeshes[options.content5[1]]._children[1].rotation={x:options.content2[6],y:options.content2[7],z:options.content2[8]}
playerMeshes[options.content5[1]]._children[2].rotation={x:options.content2[9],y:options.content2[10],z:options.content2[11]}
playerMeshes[options.content5[1]]._children[3].rotation={x:options.content2[12],y:options.content2[13],z:options.content2[14]}
playerMeshes[options.content5[1]]._children[4].rotation={x:options.content2[15],y:options.content2[16],z:options.content2[17]}
playerMeshes[options.content5[1]]._children[5].rotation={x:options.content2[18],y:options.content2[19],z:options.content2[20]}
if(options.content5[2]!==null){
	addEquip(noa,playerMeshes[options.content5[1]],options.content5[2])
	
	Object(_particle__WEBPACK_IMPORTED_MODULE_0__["makeparticle"])('lol',playermesh._children[5],scene,1.5,0.3)
}

if(options.content5[3]!==null){
	
	makestatic(options.content5[3].name,options.content5[3].po,options.content5[3].id)
	//makevig(options.entcontent[0],options.entcontent[4])
}
if(options.content5[4]!==null){
getHand(noa,options.content5[4],playerMeshes[options.content5[1]])

}
if(options.content5[5]!==null){
console.log(options.content5[5])
Object(_particle__WEBPACK_IMPORTED_MODULE_0__["makeparticle"])('lol',options.content5[5],scene,1.5,0.3)

}

	if(options.content3!==undefined){
		
		if(options.content3!==null){
		
		
		var id=noa.world._getChunkByCoords(options.content3[1], options.content3[2], options.content3[3]).requestID
		if(!!rtcblocklist[id]){
			if(!!rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]){
		rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]=[options.content3[0],options.content3[1], options.content3[2], options.content3[3],options.content3[4]]
			}else{
				//delete rtcblocklist[id][pos[0]+'|'+pos[1]+'|'+pos[2]]
				rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]=[options.content3[0],options.content3[1], options.content3[2], options.content3[3],options.content3[4]]
			}
		
		}else{
			
			
			rtcblocklist[id]={}
			rtcblocklist[id][options.content3[1]+'|'+options.content3[2]+'|'+options.content3[3]]=[options.content3[0],options.content3[1], options.content3[2], options.content3[3],options.content3[4]]
		}
		
		
		
		
		//rtcblocklist.push([options.content3[0], options.content3[1], options.content3[2], options.content3[3]])
		//localStorage.setItem('blockss',JSON.stringify(rtcblocklist))
		
		if(options.content3[4]!==null){
			
			console.log('ridiculous  :'+options.content3[4])
		}
		
		noa.setBlock(options.content3[0], options.content3[1], options.content3[2], options.content3[3]) 
		}
	}
	
	if(options.content4!==null){
	drop(options)
	
			  
			  
	}
	
	
	if(options.content5[0]==true){
		
		var body=noa.ents.getPhysicsBody(noa.playerEntity)
						body.applyImpulse([0,7,0])
						
					health--
	}
	
			
		}
       
	   
	   
	  function commandator(message){
		  
		
console.log(message);
		   var str=message.split(' ');
		   
			 
	
	if(str[0]==='startserver'){
		dominator=true
		startchannel('server '+str[1]) 
		
	
	
	}
	
	if(str[0]==='joinserver'){
	
		startchannel('join '+str[1]) 
		
	
	
	}
		   
		
	   }


	
function chatmessage(data,channel,name){
  const chatdata = {messenger:name+':'+data};
  var chatblock= JSON.stringify(chatdata);
	  channel.send(chatblock)
}

/*function kickplayer(id){
	console.log(id);
	console.log(num);
	channel.eject(parseInt(id));
	 for (var i=0;i<listofplayers.length;i++){
						listofplayers[i].position.y=-300;
					
				 }

}*/

		function kickeverybody(){
			
			
for (const [key, value] of Object.entries(conplayers)) {
	// console.log(`${key}: ${value}`);
	if(`${value}`!=='player1'){
	
				  console.log(`${key}`);
				   channel.eject(`${key}`);
				   
				   for (var i=0;i<listofplayers.length;i++){
					 
					 listofplayers[i].position.y=-300;
				 }
	}
}
			
		}
	
		
		function nameplayers(data){

//  console.log( Object.keys(conplayers).length+'cool') 
			                  setTimeout(function() {
								 conplayers[data.substring(1)] = 'player'+Object.keys(conplayers).length
								  console.log(conplayers);
									 }, 3000);


		}		
var rtcspawns={1:[-30,2,30],2:[-30,2,-30],3:[30,2,-30]

}	
function checknumplayers(num){
	
	//setTimeout(function() {
		
		 if(Object.keys(litofp).length==num){
			                     
								noa.entities.setPosition(noa.playerEntity,10,50,10)/*rtcspawns[user][0],rtcspawns[user][1],rtcspawns[user][2]);*/
								  
	
							 }
										
				// }, 3000);
	
	
}
	
				 

			 if (location.hash.includes('start')) {
				 var word=location.hash.split('_');
				  commandator('startserver '+word[1]);
				
			 }
			 
			 if (location.hash.includes('join')) {
				 var word=location.hash.split('_');
				  commandator('joinserver '+word[1]);
				
			 }
			 
			
			 


var transport=null
function addEquip(noa,mainp,name){
	
	if(mainp._children[5].getChildren().length>0){
		mainp._children[5]._children[0].dispose()
		
	}

	if(name=='none'){
		if(transport!==null){
			transport.dispose()
			transport=null;
			
			
		
			return;
		}
	 return true;
	}
	
	
	var bustex = new BABYLON.Texture("./texPack/"+funpack+"/models/"+name+"/"+name+".png", scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);

var busmat = new BABYLON.StandardMaterial("face0", scene);
busmat.diffuseTexture=bustex;
busmat.backFaceCulling = false;
busmat.specularColor = BABYLON.Color3.Black()
busmat.emissiveColor = BABYLON.Color3.White()
bustex.hasAlpha=true;


  BABYLON.SceneLoader.ImportMesh(null,"./texPack/"+funpack+"/models/"+name+"/", name+".babylon", scene, function (meshes) {
            
			for (var i=0;i<meshes.length;i++){
	
	transport= meshes[0]
	transport.material=busmat;
	  transport.parent=mainp._children[5];
	  
	  noa.rendering.addMeshToScene(transport, false)

 }
 
		transport.position.y-=1
		transport.scaling.x=1.1
		transport.scaling.z=1.1
		
	
	
	})
	
}



function drop(options){

	
	
			
	var tap=itemList[options.content4[3]].clone(options.content4[3])
	tap.scaling=new BABYLON.Vector3(jsonItems[options.content4[3]].held.hand.scale[0], jsonItems[options.content4[3]].held.hand.scale[1], jsonItems[options.content4[3]].held.hand.scale[2]);
	 listofmobs[options.content4[4]] = noa.entities.add(options.content4[0], 0.5, 0.5, tap, [0.2,1/2,0.2], true, false,true,null )
	 var vec=options.content4[1]
	 	 vec3.normalize(vec, vec)//
			 vec3.scale(vec, vec,options.content4[2])//strength was 40
			  
			  var body = noa.entities.getPhysicsBody(listofmobs[options.content4[4]] )
			  body.applyImpulse(vec);
			  
			  var onCollideEnt = function(ownID, otherID) {
				  otherID=listofmobs[options.content4[4]]
    collideEnti(noa, ownID, otherID)
  }
				setTimeout(function(){ 
				   noa.entities.addComponent(listofmobs[options.content4[4]], noa.entities.names.collideEntities, {
					callback: onCollideEnt
				  })
				  
				  }, 500);
				  
				  
				  	  function collideEnti(noa, otherID, ownID){
						  
						
						
					
					if(otherID==noa.playerEntity){
						entToRemove=options.content4[4]
						noa.ents.deleteEntity(ownID)
						
						for (var i=0;i<itemStack.length;i++){
							 if(itemStack[i]==jsonItems[options.content4[3]]){
								countStack[i]+=1
								break;
								
							}else if(itemStack[i]==null){
								itemStack[i]=jsonItems[options.content4[3]]
								countStack[i]+=1
								break;
							}
							
							
							
							
						}
					}
						
						
                     }
	
	
}


function getHand(noa,item,mesh){
	
	
	if(mesh._children[1].getChildren().length>0){
		mesh._children[1]._children[0].dispose()
		
	}
	
	if(item=='none'){
		return;
	}

	
	var c=itemList[item].clone(item)
	c.parent=mesh._children[1]
	c.position.x=mesh._children[1].position._x-0.25
	c.position.y=mesh._children[1].position._y-2
	c.position.z=mesh._children[1].position._z+0.2
	
	noa.rendering.addMeshToScene(c, false)
	noa.rendering.addMeshToScene(c._children[0], false)
	noa.rendering.addMeshToScene(c._children[1], false)
	c.scaling=new BABYLON.Vector3(0.5,0.5,0.5)
	
}


}




/***/ }),

/***/ "./shapes.js":
/*!*******************!*\
  !*** ./shapes.js ***!
  \*******************/
/*! exports provided: stairsup, wall, crater */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsup", function() { return stairsup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wall", function() { return wall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crater", function() { return crater; });
/* harmony import */ var _blocklook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocklook.js */ "./blocklook.js");


function stairsup(){
	
	
	var side=Object(_blocklook_js__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
	console.log(side+ ':Sqid games fan game')
	
	
	if(side=='east'){
	
	for (var i=0;i<7;i++){
	noa.setBlock(blocks['stone'],pos[0]+2+i,pos[1]+i,pos[2])
	noa.setBlock(blocks['stone'],pos[0]+2+i,pos[1]+i,pos[2]+1)
	}
	}
	
	if(side=='west'){
	for (var i=0;i<7;i++){
    noa.setBlock(blocks['stone'],pos[0]-2-i,pos[1]+i,pos[2])
	noa.setBlock(blocks['stone'],pos[0]-2-i,pos[1]+i,pos[2]+1)
	}
	
	}
	
	if(side=='north'){
		
		   for (var i=0;i<7;i++){
		   noa.setBlock(blocks['stone'],pos[0],pos[1]+i,pos[2]+2+i)
		   noa.setBlock(blocks['stone'],pos[0]+1,pos[1]+i,pos[2]+2+i)
		   }
	}
	
	if(side=='south'){
		
		 for (var i=0;i<7;i++){
		noa.setBlock(blocks['stone'],pos[0]-1,pos[1]+i,pos[2]-2-i)
		noa.setBlock(blocks['stone'],pos[0],pos[1]+i,pos[2]-2-i)
		
		 }
		   
		   
	}
		
		
}  


function wall(h ,floor){
	
	
	var side=Object(_blocklook_js__WEBPACK_IMPORTED_MODULE_0__["blocklook"])(noa)
	console.log(side+ ':Sqid games fan game')
	
	var po=noa.targetedBlock.adjacent
	if(side=='east'){
	
		   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0],po[1]+j,po[2]+i)
		}
	
    
	}
	}
	
	if(side=='west'){
	
		
			   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0],po[1]+j,po[2]+i)
		}
	
    
	}
	
	}
	
	if(side=='north'){
		
		   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0]+i,po[1]+j,po[2])
		}
	} 
	}
	
	if(side=='south'){
		
		 	   	for (var i=-5;i<5;i++){
		for (var j=0;j<h;j++){
	   noa.setBlock(blocks['stone'],po[0]+i,po[1]+j,po[2])
		}
	} 
		   
		   
	}
		
		
}  


	function crater(x,y,z,noa,p){////

	
	var radius=5;
	var rad = Math.ceil(radius)
//	console.log('wasgggg');
	for (var i=-rad-1;i<=rad+1;i++){
		for (var k=-rad-1;k<=rad+1;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
								
											noa.setBlock(blocks['stone'],Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k );
												
												
												
									
								
						}
					}
				}
			}
			
			
			radius=12;
	rad = Math.ceil(radius)
//	console.log('wasgggg');
	for (var i=-rad-1+3;i<=rad+1-3;i++){
		for (var k=-rad-1+3;k<=rad+1-3;k++){
		for (var j=-rad-1;j<=0;j++){
			if (i*i + j*j+k*k <= radius*radius) {
				var a=Math.floor(x)+i
				var b=Math.floor(y)+j
				var c=Math.floor(z)+k
			
				
								
											
												noa.setBlock(blocks['stone'],Math.floor(x)+i ,Math.floor(y)+j ,Math.floor(z)+k +12);
												
												
												
									
								
						}
					}
				}
			}
				  
		
	  }

     

/***/ }),

/***/ "./sign.js":
/*!*****************!*\
  !*** ./sign.js ***!
  \*****************/
/*! exports provided: sign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony import */ var _sound_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound.js */ "./sound.js");

var num=15
function sign(noa){
	
	
	var scene=noa.rendering.getScene()
			var name='cool'
			var mesh = BABYLON.MeshBuilder.CreatePlane('sprite-' + name, {width:10,height:5}, scene)//makeBigMesh(noa, scene, texture, 'lol')//BABYLON.MeshBuilder.CreateBox(name, uvoptions, noa.rendering.getScene())
			//var mat= noa.rendering.makeStandardMaterial(name)
			
	   
    //Set font type
    var font_type = "myFirstFont";
	
	//Set width an height for plane
    var planeWidth = 10;
    var planeHeight = 5;

    //Create plane
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", {width:planeWidth, height:planeHeight}, scene);

    //Set width and height for dynamic texture using same multiplier
    var DTWidth = planeWidth * 60;
    var DTHeight = planeHeight * 60;

    //Set text
    var text = "Some words to fit";
    
    //Create dynamic texture
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", {width:DTWidth, height:DTHeight}, scene);

    //Check width of text for given font type at any size of font
    var ctx = dynamicTexture.getContext();
	var size = 12; //any value will work
    ctx.font = size + "px " + font_type;
    var textWidth = ctx.measureText(text).width;
    
    //Calculate ratio of text width to size of font used
    var ratio = textWidth/size;
	
	//set font to be actually used to write text on dynamic texture
    var font_size = Math.floor(DTWidth / (ratio * 1)); //size of multiplier (1) can be adjusted, increase for smaller text
    var font = font_size + "px " + font_type;
	
	//Draw text
    dynamicTexture.drawText(text, null, null, font, "#000000", "#ffffff", true);

    //create material
    var mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseTexture = dynamicTexture;
   dynamicTexture.hasAlpha=true
    //apply material
   mesh.material = mat;
   
   
 

noa.rendering.addMeshToScene(mesh)
	var inter=setInterval(function(){ 
	
	if(bigSign!==gameState[2]){
		return;
	}
	num--
 dynamicTexture.drawText("Game starts in :"+num+" seconds", null, null, font, "#000000", "#ffffff", true);
 
    var img = new Image();
	img.src = 'texPack/'+funpack+'/blocks/sand.png';
	//mesh.material.diffuseTexture.clear()
	img.onload = function() {
	mesh.material.diffuseTexture._context.drawImage(img,300-32,0,64,64)
	//mesh.material.diffuseTexture.drawText('  fudu', null, null, font, "#eeeeee", "#00000066", true)
	mesh.material.diffuseTexture.update()
	}
 
 
 if(num<1){
	// noa.setPaused(true)
	// currentUI=uis.menu
	 var message =null
	 if(pos[2]>25){
	 message="You Won!"
	 }else {
		 message="You Lost"
	 }
	  dynamicTexture.drawText(message, null, null, font, "#000000", "#ffffff", true);
 
    var img = new Image();
	img.src = 'texPack/'+funpack+'/blocks/dirt.png';
	//mesh.material.diffuseTexture.clear()
	img.onload = function() {
	mesh.material.diffuseTexture._context.drawImage(img,300-32,0,64,64)
	//mesh.material.diffuseTexture.drawText('  fudu', null, null, font, "#eeeeee", "#00000066", true)
	mesh.material.diffuseTexture.update()
	}
	debug=true
	 bigSign=message
	  bigSignTime=1000
	 setTimeout(function(){ 
	 
	 if(message=="You Lost"){
	//bigSign=message="Game:"+gameState[3]
Object(_sound_js__WEBPACK_IMPORTED_MODULE_0__["playsound"])('blop',0.1)
	 }
	 else{
		 currentUI=uis.menu
		 datablock.message="IWON"
		 
		 
	 }
	 }, 3000);
	 
	 clearInterval(inter)
 }
 

	}, 1000);
		
		mesh.position.y=25
	mesh.position.z=50
}

/***/ }),

/***/ "./sound.js":
/*!******************!*\
  !*** ./sound.js ***!
  \******************/
/*! exports provided: initSound, playsound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSound", function() { return initSound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playsound", function() { return playsound; });
var c=null
console.log('were musicians!!')
global.sounds={}
global.realSounds={}
function initSound(noa){
	BABYLON.Engine.audioEngine.setGlobalVolume(0.1);
	//sounds['blop']=
	var scene=noa.rendering.getScene()
	sounds['blop']=new BABYLON.Sound("blop", "./texPack/"+funpack+"/audio/blop.ogg", scene,null)
	sounds['chestOpen']=new BABYLON.Sound("chestOpen", "./texPack/"+funpack+"/audio/chestOpen.ogg", scene,null)
	sounds['doorOpen']=new BABYLON.Sound("doorOpen", "./texPack/"+funpack+"/audio/dooropen.ogg", scene,null)
	sounds['hurt']=new BABYLON.Sound("hurt", "./texPack/"+funpack+"/audio/hurt.ogg", scene,null)
	sounds['bell']=new BABYLON.Sound("bell", "./texPack/"+funpack+"/audio/bell.ogg", scene,null)
	sounds['click']=new BABYLON.Sound("click", "./texPack/"+funpack+"/audio/click.ogg", scene,null)
	sounds['garbage']=new BABYLON.Sound("garbage", "./texPack/"+funpack+"/audio/garbage.ogg", scene,null)
	sounds['ventilate']=new BABYLON.Sound("ventilate", "./texPack/"+funpack+"/audio/ventilate.ogg", scene,null)
	sounds['swim']=new BABYLON.Sound("swim",  "./texPack/"+funpack+"/audio/swim.ogg",scene, null, { loop: true, autoplay: false ,volume:0.1 })//new


	sounds['splash']=new BABYLON.Sound("splash",  "./texPack/"+funpack+"/audio/splash.ogg",scene, null, { loop: false, autoplay: false,volume:0.05 })//new BABYLON.Sound("splash", "./texPack/audio/splash.ogg", scene)

	//sounds['splash1']=new BABYLON.Sound("splash1", "./texPack/audio/splash1.ogg", scene)
	//sounds['splash2']=new BABYLON.Sound("splash2", "./texPack/audio/splash2.ogg", scene)

	

	
}
function playsound(sound, volume) {

	sounds[sound].volume=0.5
c=sounds[sound]
c.play()
//console.log('played sound:'+sound)

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./spawner.js":
/*!********************!*\
  !*** ./spawner.js ***!
  \********************/
/*! exports provided: spawner, buildspawner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawner", function() { return spawner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildspawner", function() { return buildspawner; });
/* harmony import */ var _ent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ent */ "./ent.js");
/* harmony import */ var _builds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builds */ "./builds.js");


function getHighestEntBlock( x, z) {
	for (var y = 120- 1; y >= 0; y = y - 1) {
		var val = noa.world.getBlockID(x, y, z)
		if (val != 0 && val != 9) return {level: y, block: val}
	}
	return null
}



function spawner(id){
	
	
	var l=id.split('|')
		
       
		
		
		var k=getHighestEntBlock(l[0]*24,l[2]*24)
		 
		if(k==null)
			return;
		
		if(k.block==blocks['sand']){
			
			 
			
			Object(_ent__WEBPACK_IMPORTED_MODULE_0__["makeEnt"])(noa,'cow',1,[l[0]*24,k.level+1,l[2]*24])
			
			
		}
	
	
	
	
}
var facings=['north','south','east','west']
function buildspawner(id){
	
	
	setTimeout(function(){ 
	var l=id.split('|')
		
       
		
		
		var k=getHighestEntBlock(l[0]*24,l[2]*24)
		 
		if(k==null)
			return;
		
		
		
		if(k.block==blocks['grass'] && noa.getBlock(l[0]*24,k.level,l[2]*24+10)==blocks['grass']){
			
			 
			
			
			
			Object(_builds__WEBPACK_IMPORTED_MODULE_1__["pasteBuild"])(l[0]*24,k.level,l[2]*24,facings[Math.floor(Math.random()*3)])
			//console.log([l[0]*24,k.level,l[2]*24])
			
			
			
			
		}
	
	}, 6000);
	
	
}


/***/ }),

/***/ "./structures.js":
/*!***********************!*\
  !*** ./structures.js ***!
  \***********************/
/*! exports provided: OakTree, Pond, OakTreessss, Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OakTree", function() { return OakTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pond", function() { return Pond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OakTreessss", function() { return OakTreessss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
var hash = __webpack_require__(/*! murmur-numbers */ "../../node_modules/murmur-numbers/index.js")
var ndarray = __webpack_require__(/*! ndarray */ "../../node_modules/ndarray/ndarray.js")


function OakTree(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	for (var y = 0; y < height; y++) {
		gen.set(8, y, 8, blocks['log'])
	}

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 5; y++) {
			for (var z = -5; z <= 5; z++) {
				if (gen.get(x+8, y+height, z+8) == 0 && hash(x, y, z, seed*2) > 0.3 && dist(x, y, z) <= 4 + size - Math.round( hash(x, y, z, seed*7) )) gen.set(x+8, y+height, z+8, blocks['leaves'])
			}
		}
	}

	return gen
}

function Pond(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = 3//Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	for (var y = 0; y < height; y++) {
		//gen.set(8, y, 8, blocks['log'])
	}

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 5; y++) {
			for (var z = -5; z <= 5; z++) {
				if (gen.get(x+8, y+height-height-8, z+8) == 0 /*&& hash(x, y, z, seed*2)*/ > 0.3 && dist(x, y, z) <= 4 + size /*- Math.round( hash(x, y, z, seed*7))*/) gen.set(x+8, y+height, z+8, blocks['caveair'])
			}
		}
	}

	return gen
}

function OakTreessss(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = 3//Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 0; y++) {
			for (var z = -5; z <= 5; z++) {
				if (gen.get(x+8, y+height, z+8) == 0 && dist(x, y, z) <= 4  ) 
				if(x==-5|| x==5 || z==-5||z==5){
            gen.set(x+8, y+height, z+8, blocks['stone'])
				}else{
				gen.set(x+8, y+height, z+8, blocks['water'])
				}
					//gen.set(x+8, y+height, z+8, blockIDs.grass_snow)
			}
		}
	}

	return gen
}

function Box(seed) {
	var gen = new ndarray( new Uint16Array(16 * 16 * 16), [16, 16, 16])

	var size = 3//Math.round( hash(seed*3) )

	var height = 5 + Math.round( hash(seed) ) + size*2

	

	for (var x = -5 ; x <= 5; x++) {
		for (var y = -5; y <= 5; y++) {
			for (var z = -5; z <= 5; z++) {
				
            gen.set(x, y+height, z, blocks['caveair'])
				
					//gen.set(x+8, y+height, z+8, blockIDs.grass_snow)
			}
		}
	}

	return gen
}


function dist(x, y, z) {
	return Math.sqrt(x*x + y*y + z*z)
}

/***/ }),

/***/ "./worldgen.js":
/*!*********************!*\
  !*** ./worldgen.js ***!
  \*********************/
/*! exports provided: makeWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeWorld", function() { return makeWorld; });
const { makeNoise2D, makeNoise3D } = __webpack_require__(/*! open-simplex-noise */ "../../node_modules/open-simplex-noise/lib/mod.js")
const {OakTree,Box,Pond} =__webpack_require__ (/*! ./structures */ "./structures.js")
const ndarray = __webpack_require__(/*! ndarray */ "../../node_modules/ndarray/ndarray.js")
const {spawner,buildspawner} = __webpack_require__(/*! ./spawner */ "./spawner.js")
const {builds,pasteBuild} = __webpack_require__(/*! ./builds */ "./builds.js")

//15425763
//var myWorker = new Worker('worldgen_worker.js');
//import Worker from "./worldgen_worker.js";
//var worldgenWorker = require('worker-loader!./worldgen_worker')
var num=0;
var chunkList={}
var cruncher = __webpack_require__(/*! voxel-crunch */ "../../node_modules/voxel-crunch/index.js")
var hash = __webpack_require__(/*! murmur-numbers */ "../../node_modules/murmur-numbers/index.js")
//storage ={}//JSON.parse(localStorage.getItem('chunks'))//{}
var chunkIsStored = (id) => { return !!storage[id] }
var storeChunk = (id, arr) => { storage[id] = cruncher.encode(arr.data) 



/*var k=storage[id]
console.log(k)

var l=[JSON.stringify(k)]

console.log(Object.values(JSON.parse(l)))*/

}
var retrieveChunk = (id, arr) => { cruncher.decode(storage[id], arr.data)}



var seed,heightNoise,caveNoise,biomeNoise1,biomeNoise2,biomeNoise3,plantSeed,waterLevel,seedheight,seedSpacing;





	function getBlock(x, y, z) {
		var m = biomeNoise2((x)/180, (z)/180)
		
		
		var r = getHeightMap(x, y, z, m/2)
		
		var k = getHeightMap(x/3, y, z/3, m/2)
		//if (y <= r ) return blocks['stone']
		//else if(m>0.2 && m<0.4) return  0// blocks['leaves']
		
		if (y <= r ) return blocks['stone']
		
		/*{
		if(r<100 && m>0.2  && m<0.23  && getBiome(x, z)!=='iceland' ) {
			
			 if (y == waterLevel-1 ) return blocks['lava']
		else if (y < waterLevel-1) return blocks['lava']
		  else return  0
		}else{
			return blocks['stone']
		}
		}*/
		else if (y == waterLevel-1) return blocks['watertop']
		else if (y < waterLevel-1) return blocks['water']
		
		else return 0
	}
	
	function getHeightMap(x, y, z, mountaines) {
		var dim = (caveNoise(x/180, y/180, z/180)+0.3)*140
		var dim2 = (caveNoise(x/20, y/20, z/20))*50
		var layer1 = heightNoise(x/140, z/140)*mountaines*2
		var layer2 = heightNoise(x/40, z/40)*20//
			
		return Math.floor((dim*30+dim2*20+layer1*20+layer2*10-3)/65) + parseInt(seedheight)//30
	}
	
	function getHighestBlock(chunk, x, z) {
	for (var y = 120 - 1; y >= 0; y = y - 1) {
		var val = chunk.get(x, y, z)
		if (val != 0 && val != 9) return {level: y, block: val}
	}
	return null
}

function getBiome(x, z/*, temperature, biomerng*/) {
		
		var temperature=heightNoise(x/seedSpacing , z/seedSpacing )*20
		var biomerng=heightNoise(x/20, z/20)*30
		if (0.2 < temperature && biomerng < 0.3) return 'desert'
		else if ( 1 < temperature < 0.2 && biomerng < 0.1) return 'iceland'
		else if ( 0.5 < temperature < 0.2 && biomerng < 0.1) return 'iceland'
		else if ( 0.3 < temperature < 0.3 && biomerng < 0.2) return 'plants'
		else return 'plants'
	}


/*const worker = new Worker("worldgen_worker.js");

worker.postMessage({
	              msg:'init'
                
                });*/
				
				
			/*function saveWokie(){
				if(socket!==null && storage!=={}){
					
					
				//socket.emit('saveChunk',storage)
				console.log(socket)
				}
					//console.log(storage)
					
				}*/
				
				//setInterval(function(){ saveWokie() }, 15000);
function makeWorld(noa) {
	//setTimeout(function(){  
	//storage=JSON.parse(localStorage.getItem('cool'))
	//}, 3000);
	
	
	    heightNoise = makeNoise2D(Math.round(seed * Math.sin(seed^1) * 10000)),
        seed=parseInt(rtcblocklist['seed']),
		caveNoise = makeNoise3D(Math.round(seed * Math.sin(seed^2) * 10000)),
		biomeNoise1 = makeNoise2D(Math.round(seed * Math.sin(seed^3) * 10000)),
		biomeNoise2 = makeNoise2D(Math.round(seed * Math.sin(seed^4) * 10000)),
		biomeNoise3 = makeNoise2D(Math.round(seed * Math.sin(seed^5) * 10000)),
		plantSeed = Math.round(seed * Math.sin(seed^6) * 10000),waterLevel=40,seedheight=seed.toString().slice(0, 2),seedSpacing=seed.toString().slice(2, 5);

 /* 
 *      World generation
 * 
 *  The world is divided into chunks, and `noa` will emit an 
 *  `worldDataNeeded` event for each chunk of data it needs.
 *  The game client should catch this, and call 
 *  `noa.world.setChunkData` whenever the world data is ready.
 *  (The latter can be done asynchronously.)
 * 
*/



// register for world events

    // catch engine's chunk removal event, and store the data
    noa.world.on('chunkBeingRemoved', function (id, array, userData) {
	  
	  
	 
       storeChunk(id, array)
	 
	   
	   if(rtcblocklist.worldname==undefined){
		   return;
	   }
	
	  /* if(socketo!==null){
	   var k=JSON.stringify(storage[id])
	   socketo.emit('chunk',{ids:id,chk:k,name:rtcblocklist.worldname});
	   }*/
	 
	  
    })


  

    // catch worldgen requests, and queue them to handle asynchronously
    var requestQueue = []
    noa.world.on('worldDataNeeded', function (id, array, x, y, z, worldName) {
		
        requestQueue.push({ id, array, x, y, z, worldName })
		
		 if(rtcblocklist.worldname==undefined){
		   return;
	   }
	
	
			  if(socketo!==null){
	   socketo.emit('getchunk',{ids:id,name:rtcblocklist.worldname});
	  }
    })



    // process the worldgen request queue:
    setInterval(function () {
        if (requestQueue.length === 0) return
        var req = requestQueue.shift()
		
	

		
        if (chunkIsStored(req.id)) {
			
			
			var k=storage[req.id]
			
			
			var l=[JSON.stringify(k)]



           storage[req.id]=Object.values(JSON.parse(l))
		
			
           retrieveChunk(req.id, req.array)
		
        } else {
			
			if(worldtype=='normal'){
           generateChunk(req.id,req.array, req.x, req.y, req.z, req.worldName)
		   	buildspawner(req.id)
			}else{
				  generateFlatChunk(req.id,req.array, req.x, req.y, req.z, req.worldName)
			}
			
        }
        // pass the finished data back to the game engine
		
		 noa.world.setChunkData(req.id, req.array)
		// spawner(req.id)
	
		/*if(!!storage[req.id]){
			return;
		}
		if(!!rtcblocklist[req.id]){
			
			
			for (const i in rtcblocklist[req.id]){
				
				noa.setBlock(rtcblocklist[req.id][i][0],rtcblocklist[req.id][i][1], rtcblocklist[req.id][i][2], rtcblocklist[req.id][i][3])
			}
		
		}*/
		
    }, 50)

function generateFlatChunk(id,array, x, y, z) {
	
	 var l=id.split("|")

	 var xoff = l[0]*24
		var zoff = l[2]*24
		var yoff = l[1]*24
        for (var i = 0; i < 24; ++i) {
			 for (var j = 0; j <24; ++j) {
                for (var k = 0; k < 24; ++k) {
            
               
				
							
							   
								
								if ( j+yoff<=0 ) {
									 array.set(i,j,k, blocks['grass'])
							
								}else{
									
									array.set(i,j,k, 0)
								}
								    
						
						
						
					
                }
				
				
				
				
				
				
				
				
				
				
				
            }
        }
		
		
		
	
}
 function generateChunk(id,array, x, y, z) {
	 var l=id.split("|")

	 var xoff = l[0]*24
		var zoff = l[2]*24
		var yoff = l[1]*24
        for (var i = 0; i < 24; ++i) {
			 for (var j = 0; j <24; ++j) {
                for (var k = 0; k < 24; ++k) {
            
               
				
						var block = getBlock(i+xoff,j+yoff, k+zoff)
						var biome = getBiome(i+xoff,k+zoff )
						if (block != 0 ) {
							
							   
								
								if ( 0 < j < 50 && getBlock(i+xoff, j+yoff, k+zoff) == blocks['stone'] && getBlock(i+xoff, j+yoff+1, k+zoff) == 0 ) {
									if (biome == 'plants' || biome == 'forest') array.set(i,j,k, blocks['grass'])
										

										
									 if (biome == 'desert' ) array.set(i,j,k, blocks['sand'])
										 
									 if (biome == 'iceland' ) array.set(i,j,k, blocks['sand'])
							
								}else{
						
						array.set(i,j,k,block)
								}
								
								    
						
						
						}
					
                }
				
				
				
				
				
				
				
				
				
				
				
            }
        }
	
		//storeChunk(id, array)
		
		
				for (var x = 0; x < array.shape[0]; x++) {
		   for (var z = 0; z <   array.shape[2]; z++) {
			   if (5 < x && x < 17 && 5 < z && z < 17) {
				 
			
				
			 if ( hash( (x+xoff), (z+zoff), seed) < 0.2) {
				
				var high = {...getHighestBlock(array, x, z)}
				if (high.block !== blocks['leaves']) {
						//var gen = OakTree( hash( (x+xoff), (z+zoff), seed)*1 )
						var gen = Pond( hash( (x+xoff), (z+zoff), seed)*1 )
				       // var gen1 = Box( hash( (x+xoff), (z+zoff), seed)*1 )
				if(high.level <=waterLevel+2){
				//pasteStructure(array, gen, x, high.level+1, z)
				
				//setTimeout(function(){ 
				//pasteBuild(x,high.level,z,'north')
				
				//console.log([x,high.level,z])
					//console.log('castle')
					
				//	}, 3000);
				//pasteStructure(array, gen1, x, high.level-40, z)
				}
				
				
				}
				
			}
			
			if ( hash( (x+xoff), (z+zoff), seed) < 0.1) {
				
				var high = {...getHighestBlock(array, x, z)}
				if (high.block !== blocks['leaves']) {
						//var gen = OakTree( hash( (x+xoff), (z+zoff), seed)*1 )
							var gen = Pond( hash( (x+xoff), (z+zoff), seed)*1 )
				       // var gen1 = Box( hash( (x+xoff), (z+zoff), seed)*1 )
				if(high.level <=waterLevel+2){
					
					//pasteBuild(x,high.level,z,'north')
					//console.log('castle')
				//pasteStructure(array, gen, x, high.level+1, z)
				
				//pasteStructure(array, gen1, x, high.level-40, z)
				}
				
				
				}
				
			}
			
			  if(hash( (x+xoff), (z+zoff), plantSeed*2) < 0.1 ){
				
			   	var high = {...getHighestBlock(array, x, z)}
				if (high.block == blocks['grass']) {
				array.set(x, high.level+1,z, blocks['poppy'] ) 
				}
				}
			
				   }
			   }
		   }
		   
		    
		

 }
 
 

		
 
}
		
 
		
		
		/*for (var x = 0; x < array.shape[0]; x++) {
		   for (var z = 0; z <   array.shape[2]; z++) {
			   if (5 < x && x < 17 && 5 < z && z < 17) {
				   //if (15< x && x < 17 && 15 < z && z < 17) {
			 if(hash( (x+xoff), (z+zoff), plantSeed*2) < 0.1 ){
				
			   	var high = {...getHighestBlock(array, x, z)}
				if (high.block == blocks['grass']) {
				array.set(x, high.level+1,z, blocks['poppy'] ) 
				}
				}
				
				else if ( hash( (x+xoff), (z+zoff), seed) < 10) {
				
				var high = {...getHighestBlock(array, x, z)}
				if (high.block !== blocks['leaves']) {
						var gen = OakTree( hash( (x+xoff), (z+zoff), seed)*100 )
				
				if(high.level <=waterLevel+20){
				pasteStructure(array, gen, x, high.level+1, z)
				}
				}
				
			}
				
				
			   
			   
			
			
			   
				
				
			
			   
		   }
		   
		}
		
		
		
		
		
		
    }
	//return array
	
}*/

 


function pasteStructure(chunk, gen, x, y, z) {
		var xm = Math.round(gen.shape[0]/2)
		var zm = Math.round(gen.shape[2]/2)

		for (var i = 0; i < gen.shape[0]; i++) {
			for (var j = 0; j < gen.shape[1]; j++) {
				for (var k = 0; k < gen.shape[2]; k++) {
					if (gen.get(i, j, k) != 0) { 
					
					var val = chunk.get(x-xm+i, y+j, z-zm+k)
					//if(val!==9){
						chunk.set(x-xm+i, y+j, z-zm+k, gen.get(i, j, k) ) 
					//}
						
					}
				}
			}
		}
	}
	


/***/ }),

/***/ "./xhr.js":
/*!****************!*\
  !*** ./xhr.js ***!
  \****************/
/*! exports provided: getUuid, getName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUuid", function() { return getUuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
var vxhr=null
function getUuid(name){
	
	
	
	  var xhr = new XMLHttpRequest();
    const url = 'https://galacticau.fun/getuuid.php';


    xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
    xhr.send("username=" + name);


    xhr.onreadystatechange = (e) => {
		
           if(vxhr==null){
			  
		

        if (xhr.responseText !== "") {
			
			 vxhr= xhr.responseText
				
            console.log(vxhr)
			getName(vxhr)
           localStorage.setItem('uuid', vxhr);
				}
			
              
			  
			  
		   
			  

        }
		
	}
    


    
	
	
	
}


function getName(uid){
	
	vxhr=null
	  var xhr = new XMLHttpRequest();
    const url = 'https://galacticau.fun/getname.php';


    xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
    xhr.send("uid=" + uid);


    xhr.onreadystatechange = (e) => {
		
           if(vxhr==null){
			  
		

        if (xhr.responseText !== "") {
			
			 vxhr= xhr.responseText
				
            console.log(vxhr)
			rtcName=vxhr
           //localStorage.setItem('uuid', vxhr);
				}
			
              
			  
			  
		   
			  

        }
		
	}
	
	
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map