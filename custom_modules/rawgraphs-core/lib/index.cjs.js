'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var d3Format = require('d3-format');
var d3Array = require('d3-array');
var d3TimeFormat = require('d3-time-format');
var d3Color = require('d3-color');
var d3ScaleChromatic = require('d3-scale-chromatic');
var d3Scale = require('d3-scale');
var d3Interpolate = require('d3-interpolate');
var d3Legend = require('d3-svg-legend');
var d3Selection = require('d3-selection');
var d3Quadtree = require('d3-quadtree');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
}

var isString_1 = isString;

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike_1(value) && _baseGetTag(value) == numberTag);
}

var isNumber_1 = isNumber;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$3 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$2.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var RawGraphsError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(RawGraphsError, _Error);

  function RawGraphsError(message) {
    var _this;

    _this = _Error.call(this, message) || this;
    _this.name = "RawGraphsError";
    _this.message = message;
    return _this;
  }

  return RawGraphsError;
}(_wrapNativeSuper(Error));
var ValidationError =
/*#__PURE__*/
function (_Error2) {
  _inheritsLoose(ValidationError, _Error2);

  function ValidationError(errors) {
    var _this2;

    _this2 = _Error2.call(this, "validation error") || this;
    _this2.name = "ValidationError";
    _this2.message = Object.values(errors).join("\n");
    _this2.errors = errors;
    return _this2;
  }

  return ValidationError;
}(_wrapNativeSuper(Error));
function getType(dataType) {
  if (isPlainObject_1(dataType)) {
    return getType(dataType.type);
  }

  if (isString_1(dataType)) {
    switch (dataType.toLowerCase()) {
      case "string":
        return String;

      case "number":
        return Number;

      case "boolean":
        return Boolean;

      case "date":
        return Date;

      default:
        return String;
    }
  }

  return dataType;
}
function getTypeName(dataType) {
  var type = getType(dataType);
  return type && type.name ? type.name.toLowerCase() : undefined;
} // taken from: https://observablehq.com/@mbostock/localized-number-parsing
var NumberParser =
/*#__PURE__*/
function () {
  function NumberParser(_ref, useLocale) {
    var locale = _ref.locale,
        decimal = _ref.decimal,
        group = _ref.group,
        numerals = _ref.numerals;

    if (useLocale === void 0) {
      useLocale = false;
    }

    var parts = new Intl.NumberFormat(locale).formatToParts(12345.6);
    var defaultGroup = "";
    var defaultDecimal = ".";
    this.numerals = numerals || Array.from(new Intl.NumberFormat(locale, {
      useGrouping: false
    }).format(9876543210)).reverse();
    this.group = group || (useLocale ? parts.find(function (d) {
      return d.type === "group";
    }).value : defaultGroup);
    this.decimal = decimal || (useLocale ? parts.find(function (d) {
      return d.type === "decimal";
    }).value : defaultDecimal);
    var index = new Map(this.numerals.map(function (d, i) {
      return [d, i];
    })); //#todo: infer from locale in NumberParser

    var groupingChars = 3;
    this._groupRegexp = new RegExp("[" + this.group + "}](\\d{" + groupingChars + "})", "g");
    this._decimalRegexp = new RegExp("[" + this.decimal + "]");
    this._numeralRegexp = new RegExp("[" + this.numerals.join("") + "]", "g");

    this._index = function (d) {
      return index.get(d);
    };

    this.formatter = d3Format.formatLocale({
      decimal: this.decimal,
      grouping: [groupingChars],
      thousands: this.group,
      numerals: this.numerals
    }).format(",");
  }

  var _proto2 = NumberParser.prototype;

  _proto2.parse = function parse(string) {
    if (isNumber_1(string)) {
      return string;
    }

    var trimmedString = string.trim ? string.trim() : string.toString().trim();
    var parsed = trimmedString.replace(this._groupRegexp, function (match, captured) {
      return captured;
    }).replace(this._decimalRegexp, ".").replace(this._numeralRegexp, this._index);
    var out = parsed ? +parsed : NaN;
    return out;
  };

  _proto2.format = function format(n) {
    return this.formatter(n);
  };

  return NumberParser;
}(); // https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6

function mergeStyles(target, source) {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    if (source[key] instanceof Object) Object.assign(source[key], mergeStyles(target[key], source[key]));
  } // Join `target` and modified `source`


  Object.assign(target || {}, source);
  return target;
}

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

var _baseSum = baseSum;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (_baseSum(array, iteratee) / length) : NAN;
}

var _baseMean = baseMean;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * Computes the mean of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the mean.
 * @example
 *
 * _.mean([4, 2, 8, 6]);
 * // => 5
 */
function mean(array) {
  return _baseMean(array, identity_1);
}

var mean_1 = mean;

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol_1(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

var _baseExtremum = baseExtremum;

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

var _baseGt = baseGt;

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity_1, _baseGt)
    : undefined;
}

var max_1 = max;

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

var _baseLt = baseLt;

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity_1, _baseLt)
    : undefined;
}

var min_1 = min;

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
function sum(array) {
  return (array && array.length)
    ? _baseSum(array, identity_1)
    : 0;
}

var sum_1 = sum;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY$2) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? _baseUniq(array) : [];
}

var uniq_1 = uniq;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

var _baseRange = baseRange;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN$1;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN$1 : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$3 || value === -INFINITY$3) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite_1(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite_1(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite_1(step);
    return _baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = _createRange();

var range_1 = range;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE$1 - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$2] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$2] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$9;

  return value === proto;
}

var _isPrototype = isPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$2 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;

  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_1(collection)) {
      var iteratee = _baseIteratee(predicate);
      collection = keys_1(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
  if (index < 0) {
    index = nativeMax$1(length + index, 0);
  }
  return _baseFindIndex(array, _baseIteratee(predicate), index);
}

var findIndex_1 = findIndex;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = _createFind(findIndex_1);

var find_1 = find;

// import last from 'lodash/last'

var aggregationsRegister = {};
function registerAggregation(name, fun) {
  aggregationsRegister[name] = fun;
}
function unregisterAggregation(name) {
  delete aggregationsRegister[name];
}
function getAggregatorNames() {
  return Object.keys(aggregationsRegister);
}
function getAggregator(aggregatorExpression) {
  if (isFunction_1(aggregatorExpression)) {
    return aggregatorExpression;
  }

  if (isString_1(aggregatorExpression)) {
    if (aggregationsRegister[aggregatorExpression]) {
      return aggregationsRegister[aggregatorExpression];
    } else {
      throw new RawGraphsError("Aggregator \"" + aggregatorExpression + "\" is is not registered in RawGraphs.");
    }
  }
}
function getAggregatorArray(aggregator, length) {
  return function (items) {
    return range_1(length).map(function (idx) {
      var aggregatorExpression = Array.isArray(aggregator) ? get_1(aggregator, idx, aggregator[0]) : aggregator;
      var aggr = getAggregator(aggregatorExpression);
      return aggr(items.map(function (i) {
        return i[idx];
      }));
    });
  };
} // Aggregators available in RAW
// general purpose

registerAggregation("count", function (items) {
  return items.length;
});
registerAggregation("countDistinct", function (items) {
  return uniq_1(items).length;
}); // #TODO understand if we must add these
// registerAggregation("last", last)
// registerAggregation("first", first)
// numbers

registerAggregation("mean", mean_1);
registerAggregation("max", max_1);
registerAggregation("min", min_1);
registerAggregation("sum", sum_1);
registerAggregation("median", d3Array.median); //string

var commaSeparated = function commaSeparated(items) {
  return items.join(",");
}; // #TODO understand if we must add these
// const tabSeparated = items => items.join("\t")
// const newLineSeparated = items => items.join("\n")
// const itemsList = items => items
// const itemsUniq = items => uniq(items)


registerAggregation("csv", commaSeparated);
registerAggregation("csvDistinct", function (items) {
  return commaSeparated(uniq_1(items));
}); // #TODO understand if we must add these
// registerAggregation("commaSeparated", commaSeparated)
// registerAggregation("tsv", tabSeparated)
// registerAggregation("tsvDistinct", items => tabSeparated(uniq(items)))
// registerAggregation("tabSeparated", tabSeparated)
// registerAggregation("newLineSeparated", newLineSeparated)
// registerAggregation("list", itemsList)
// registerAggregation("distinct", itemsUniq)

function getDefaultDimensionAggregation(dimension, dataType) {
  if (!dimension.aggregation) {
    throw new RawGraphsError("Dimension " + dimension.id + " is not aggregable");
  }

  var names = getAggregatorNames();
  var typeName = getTypeName(dataType);
  var defaultAggregation = get_1(dimension, "aggregationDefault"); //#TODO check that default aggregation exists in registered ones

  if (defaultAggregation) {
    if (isPlainObject_1(defaultAggregation)) {
      return get_1(defaultAggregation, typeName, names[0]);
    } else {
      return defaultAggregation;
    }
  }

  return names[0];
}
function getDimensionAggregator(dimensionId, mapping, dataTypes, dimensions) {
  var dimension = find_1(dimensions, function (x) {
    return x.id === dimensionId;
  });
  var mappingValue = get_1(mapping[dimensionId], "value", dimension.multiple ? [] : undefined); //#TODO: this is done to return function returning a scalar in any case
  // works well with undefined "size" dimensions (See matrix plot at rawgraphs-charts at commit 04013f633e32f4c630a5db2b855c6cf270b3af03),
  // but this needs investigation

  if (!dimension.multiple && !mappingValue) {
    return function () {
      return 1;
    };
  }

  function getSingleDim(dimension, columnName, index) {
    var dataType = get_1(dataTypes, columnName);
    var defaultAggregation = getDefaultDimensionAggregation(dimension, dataType);
    var aggregation = get_1(mapping[dimension.id], "config.aggregation", defaultAggregation);

    if (index !== undefined) {
      aggregation = aggregation[index];
    }

    var aggregator = getAggregator(aggregation);
    return aggregator;
  }

  if (Array.isArray(mappingValue)) {
    var out = mappingValue.map(function (columnName, i) {
      return getSingleDim(dimension, columnName, i);
    });
    return out;
  } else {
    return getSingleDim(dimension, mappingValue);
  }
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$2 = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = _arrayMap(values, _baseUnary(iteratee));
  }
  if (comparator) {
    includes = _arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE$2) {
    includes = _cacheHas;
    isCommon = false;
    values = new _SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

var _baseDifference = baseDifference;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$2(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$2(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = _baseRest(function(array, values) {
  return isArrayLikeObject_1(array)
    ? _baseDifference(array, _baseFlatten(values, 1, isArrayLikeObject_1, true))
    : [];
});

var difference_1 = difference;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$d = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$d.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

var set_1 = set;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

var _arrayAggregator = arrayAggregator;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

var _baseAggregator = baseAggregator;

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, _baseIteratee(iteratee), accumulator);
  };
}

var _createAggregator = createAggregator;

/** Used for built-in method references. */
var objectProto$e = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$e.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = _createAggregator(function(result, value, key) {
  if (hasOwnProperty$b.call(result, key)) {
    result[key].push(value);
  } else {
    _baseAssignValue(result, key, [value]);
  }
});

var groupBy_1 = groupBy;

function groupByAsMap(arr, getter) {
  return arr.reduce(function (obj, item) {
    var groupKey = get_1(item, getter);

    if (!obj.has(groupKey)) {
      obj.set(groupKey, []);
    }

    obj.set(groupKey, obj.get(groupKey).concat([item]));
    return obj;
  }, new Map());
}

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee);

  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var mapValues_1 = mapValues;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */
var keyBy = _createAggregator(function(result, value, key) {
  _baseAssignValue(result, key, value);
});

var keyBy_1 = keyBy;

/**
 * dimensions validator
 *
 * @param {array} dimensions
 */

function validateMapperDefinition(dimensions) {
  if (!Array.isArray(dimensions)) {
    throw new RawGraphsError("dimesions must be an array");
  }

  if (dimensions.length === 0) {
    throw new RawGraphsError("empty dimensions");
  }
}
function validateDeclarativeMapperDefinition(dimensions) {
  if (dimensions.length === 0) {
    throw new RawGraphsError("empty dimensions");
  }

  var getters = dimensions.filter(function (d) {
    return d.operation === "get";
  });
  var grouperTypes = ["rollup", "rollups"];
  var grouperDimension = dimensions.filter(function (d) {
    return grouperTypes.indexOf(d.operation) !== -1;
  });

  if (grouperDimension.length > 1) {
    throw new RawGraphsError("only one operation among " + grouperTypes.join(",") + " is allowed");
  }

  if (getters.length === 0 && !grouperDimension.length) {
    throw new RawGraphsError("at least one get operation must be present in a dimension set, or an operation among " + grouperTypes.join(",") + " must be specified");
  }

  if (getters.length > 0 && grouperDimension.length) {
    throw new RawGraphsError("'" + grouperDimension[0].operation + "' operation was specified, you cannot define other get operations");
  }
}
/**
 * mapping validator
 *
 * @param {array} mapper definition
 * @param {object} mapping configuration
 * @param {object} types column datatypes
 *
 */

function validateMapping(dimensions, _mapping, types) {
  //mapping values must be column names
  var mapping = mapValues_1(_mapping, function (v) {
    return _extends({}, v, {
      value: Array.isArray(v.value) ? v.value : isString_1(v.value) ? [v.value] : []
    });
  });
  var dimensionsById = keyBy_1(dimensions, "id"); // validating that all required dimensions are provided to mapping

  var requiredDimensions = dimensions.filter(function (d) {
    return d.required;
  }).map(function (d) {
    return d.id;
  }).sort();
  var providedDimensions = Object.keys(mapping).filter(function (k) {
    return get_1(mapping[k], "value") && mapping[k].value.length > 0;
  }).sort();
  var missing = difference_1(requiredDimensions, providedDimensions);
  var errors = [];

  if (missing.length > 0) {
    var err = "Some required dimensions were not mapped. Missing ids are: " + missing.join(", ");
    errors.push(err);
  } // validating that provided dimensions are mapped to correct types ("validTypes" attibute of dimension)
  // validating multiple attribute


  providedDimensions.forEach(function (d) {
    var values = mapping[d].value || [];
    var dim = dimensionsById[d];
    var validTypes = get_1(dim, "validTypes");

    if (validTypes && types) {
      validTypes = Array.isArray(validTypes) ? validTypes : [validTypes];
      validTypes = validTypes.map(function (item) {
        return item.toLowerCase();
      });
      values.forEach(function (v) {
        var type = getTypeName(types[v]);

        if (validTypes && validTypes.indexOf(type.toLowerCase()) === -1) {
          errors.push("Invalid type: column " + v + " of type " + type + " cannot be used on dimension with id " + d + ", accepting " + validTypes.join(", "));
        }
      });
    }

    var multiple = get_1(dim, "multiple", false);

    if (!multiple && values && values.length > 1) {
      errors.push("dimension " + d + " does not support multiple columns in mapping");
    }

    var minValues = get_1(dim, "minValues");

    if (minValues !== undefined && (!values || values.length < minValues)) {
      errors.push("dimension " + d + " requires at least " + minValues + " columns in mappung");
    }

    var maxValues = get_1(dim, "maxValues");

    if (maxValues !== undefined && (!values || values.length > maxValues)) {
      errors.push("dimension " + d + " accepts at most " + maxValues + " columns in mappung");
    }
  }); // #TODO: [future] if using registered functions check for existence
  // #TODO: [future] if using expressions check for existence
  // #TODO: check for multiple, minValues, maxValues

  if (errors.length) {
    throw new RawGraphsError(errors.join("\n"));
  }
}
function annotateMapping(dimensions, _mapping, types) {
  var dimensionsById = keyBy_1(dimensions, "id");
  var mapping = {};
  var dimensionsIds = Object.keys(dimensionsById);
  Object.keys(_mapping).forEach(function (id) {
    mapping[id] = _extends({}, _mapping[id]);
    var dim = dimensionsById[id]; //dimension not mapped: set value to empty

    if (!mapping[id].value || mapping[id].value === undefined) {
      mapping[id].value = [];
    } else {
      //not-multiple values back to scalar
      if (!dim.multiple) {
        var v = Array.isArray(mapping[id].value) ? mapping[id].value[0] : mapping[id].value;
        mapping[id].value = v;

        if (dim.aggregation) {
          var aggregationConfig = get_1(mapping[id], "config.aggregation", []);
          var aggregationForDimension = Array.isArray(aggregationConfig) ? aggregationConfig[0] : aggregationConfig;
          mapping[id].config = _extends({}, mapping[id].config || {}, {
            aggregation: aggregationForDimension
          });
        } //setting data type


        mapping[id].dataType = get_1(types, v);
      } else {
        //setting data types for multiple dimensions
        mapping[id].dataType = mapping[id].value.map(function (v) {
          return get_1(types, v);
        });
      }
    }
  });
  dimensionsIds.forEach(function (dimId) {
    if (!mapping[dimId]) {
      mapping[dimId] = {
        value: dimensionsById[dimId].multiple ? [] : undefined
      };
    }
  });
  return mapping;
}

function hydrateProxies(dimensions, mapping) {
  var m = mapValues_1(mapping, function (v) {
    return _extends({}, v, {
      value: Array.isArray(v.value) ? v.value : [v.value]
    });
  });
  var proxiesDimensions = dimensions.filter(function (dim) {
    return dim.operation === "proxy";
  });
  proxiesDimensions.forEach(function (dimension) {
    var targets = get_1(dimension, "targets");

    if (!targets) {
      return;
    }

    var targetDimensions = Object.keys(targets);
    targetDimensions.forEach(function (targetDimensionId) {
      var targetsMap = targets[targetDimensionId]; //should be an obj with keys as target expressions and values as source expressions

      Object.keys(targetsMap).forEach(function (targetExpression) {
        var sourceExpression = targetsMap[targetExpression];
        var value = get_1(mapping, "[" + dimension.id + "][" + sourceExpression + "]");

        if (!m[targetDimensionId]) {
          m[targetDimensionId] = {};
        }

        set_1(m[targetDimensionId], targetExpression, value);
      });
    });
  });
  return m;
}

function arrayGetter(names) {
  if (Array.isArray(names)) {
    return names.length === 1 ? function (item) {
      return get_1(item, names[0]);
    } : function (item) {
      return names.map(function (name) {
        return get_1(item, name);
      });
    };
  }

  return function (item) {
    return get_1(item, names);
  };
}
/**
 * mapper generator
 *
 * @param {array} dimensions mapper definition
 * @param {object} mapping mapping configuration
 * @param {types} types column types
 * @return {function} the mapper function
 */
// #TODO: REFACTOR

function makeMapper(dimensionsWithOperations, _mapping, types) {
  validateDeclarativeMapperDefinition(dimensionsWithOperations);
  var mapping = hydrateProxies(dimensionsWithOperations, _mapping);
  validateMapping(dimensionsWithOperations, mapping, types);
  mapping = mapValues_1(_mapping, function (v) {
    return _extends({}, v, {
      value: Array.isArray(v.value) ? v.value : isString_1(v.value) ? [v.value] : []
    });
  });
  var mappingValues = mapValues_1(mapping, function (v) {
    return v.value;
  });
  var mappingConfigs = mapValues_1(mapping, function (v) {
    return get_1(v, "config");
  });
  var getDimensions = dimensionsWithOperations.filter(function (d) {
    return d.operation === "get" && mappingValues[d.id] !== undefined;
  }).map(function (g) {
    return g.id;
  });
  var groupAggregateDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "groupAggregate" && mappingValues[d.id] !== undefined;
  }), "id");
  var groupByDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "groupBy" && mappingValues[d.id] !== undefined;
  }), "id");
  var groupDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "group" && mappingValues[d.id] !== undefined;
  }), "id");
  var groupsDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "groups" && mappingValues[d.id] !== undefined;
  }), "id");
  var rollupDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "rollup" && mappingValues[d.id] !== undefined;
  }), "id");
  var rollupsDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "rollups" && mappingValues[d.id] !== undefined;
  }), "id");
  var rollupLeafDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "rollupLeaf" && mappingValues[d.id] !== undefined;
  }), "id"); //#TODO ... is this still needed?

  var hierarchyDimension = get_1(find_1(dimensionsWithOperations, function (d) {
    return d.operation === "hierarchy" && mappingValues[d.id] !== undefined;
  }), "id"); //#TODO: TAKE IN ACCOUNT GROUP AGGREGATE DUE TO FORMATS

  var formatAggregateDimensions = getDimensions.filter(function (id) {
    return get_1(mappingConfigs[id], "format");
  });
  var candidateGroupers = [groupByDimension, groupDimension, groupsDimension, rollupDimension, rollupsDimension].filter(function (x) {
    return !!x;
  });

  if (candidateGroupers.length > 1) {
    throw new RawGraphsError("only one of these operations is allowed in a mapper definition: 'group', 'groups', 'groupBy', 'rollup', 'rollups'");
  }

  var grouperDimension;

  if (candidateGroupers.length) {
    grouperDimension = candidateGroupers[0];
  }

  var rollupGrouperDimension = rollupDimension || rollupsDimension;
  return function (data) {
    if (!data) {
      return;
    }

    var tabularData; //apply grouping operations if any

    if (groupAggregateDimension) {
      // #todo: this is complex. allow only strings in this case
      var identifiers = flatten_1([mappingValues[groupAggregateDimension]]);
      var dataGroups = groupBy_1(data, function (row) {
        var labelPieces = identifiers.map(function (x) {
          return get_1(row, x);
        });
        return JSON.stringify(labelPieces);
      });
      tabularData = Object.keys(dataGroups).map(function (label) {
        var item = {};
        var group = dataGroups[label];
        item[groupAggregateDimension] = JSON.parse(label);

        if (item[groupAggregateDimension].length === 1) {
          item[groupAggregateDimension] = item[groupAggregateDimension][0];
        }

        getDimensions.forEach(function (getter) {
          var getterColumn = mappingValues[getter]; //#GET HERE

          var getterFunction = arrayGetter(getterColumn);
          var allData = group.map(function (d) {
            return getterFunction(d);
          });
          var getterInAggregator = identifiers.indexOf(getterColumn) !== -1;
          var aggregator = get_1(mappingConfigs[getter], "aggregation", getterInAggregator ? function (data) {
            return data[0];
          } : function (data) {
            return data.length;
          });
          var aggregatorFunction = Array.isArray(getterColumn) && getterColumn.length > 1 ? getAggregatorArray(aggregator, getterColumn.length) : getAggregator(aggregator);
          item[getter] = aggregatorFunction(allData);
        });

        if (groupDimension || groupsDimension) {
          if (Array.isArray(mappingValues[groupDimension])) {
            item[groupDimension] = mappingValues[groupDimension].map(function (v) {
              return get_1(group[0], v);
            });
          } else {
            item[groupDimension] = get_1(group[0], mappingValues[groupDimension]);
          }
        }

        return item;
      });
    } else {
      var getterFunctionsById = getDimensions.reduce(function (acc, id) {
        acc[id] = arrayGetter(mappingValues[id]);
        return acc;
      }, {});

      var itemFiller = function itemFiller(row) {
        return mapValues_1(getterFunctionsById, function (f) {
          return f(row);
        });
      };

      tabularData = data.map(function (row) {
        var item = itemFiller(row);

        if (grouperDimension && mappingValues[grouperDimension]) {
          if (Array.isArray(mappingValues[grouperDimension])) {
            item[grouperDimension] = mappingValues[grouperDimension].map(function (v) {
              return get_1(row, v);
            });
          } else {
            item[grouperDimension] = get_1(row, mappingValues[grouperDimension]);
          }
        } // getter for rollup aggregation
        // notice that the name __leaf is used only internally.


        if (rollupGrouperDimension && mappingConfigs[rollupGrouperDimension] || rollupLeafDimension) {
          var rollupConfigAggregationTarget;

          if (rollupLeafDimension) {
            rollupConfigAggregationTarget = get_1(mappingValues, rollupLeafDimension);
          } else {
            rollupConfigAggregationTarget = get_1(mappingConfigs, "[" + rollupGrouperDimension + "].leafAggregation[1]");
          }

          var getterFunction = arrayGetter(rollupConfigAggregationTarget);
          item["__leaf"] = getterFunction(row);
        }

        return item;
      });
    } //#TODO
    //apply hierarchy operation if any
    // if (hierarchyDimension) {
    //   // ...
    // }


    if (grouperDimension) {
      if (groupByDimension) {
        return groupByAsMap(tabularData, groupByDimension);
      }

      var grouperDims = Array.isArray(mappingValues[grouperDimension]) ? mappingValues[grouperDimension] : [mappingValues[grouperDimension]];
      var grouperGetters = range_1(grouperDims.length).map(function (idx) {
        return function (item) {
          return item[grouperDimension][idx];
        };
      });

      if (groupDimension) {
        return d3Array.group.apply(void 0, [tabularData].concat(grouperGetters));
      }

      if (groupsDimension) {
        return d3Array.groups.apply(void 0, [tabularData].concat(grouperGetters));
      }

      if (rollupGrouperDimension) {
        var rollupAggregation = function rollupAggregation(v) {
          return v.length;
        };

        var aggregatorFunction;

        if (rollupLeafDimension) {
          var _ref = [get_1(mappingConfigs, "[" + rollupLeafDimension + "].aggregation"), get_1(mappingValues, rollupLeafDimension)],
              aggName = _ref[0],
              targetColumn = _ref[1];
          aggregatorFunction = Array.isArray(targetColumn) && targetColumn.length > 1 ? getAggregatorArray(aggName, targetColumn.length) : getAggregator(aggName);
        } else {
          var rollupConfigAggregation = get_1(mappingConfigs, "[" + rollupGrouperDimension + "].leafAggregation");

          if (rollupConfigAggregation) {
            if (!Array.isArray(rollupConfigAggregation) || rollupConfigAggregation.length !== 2) {
              throw new RawGraphsError("Rollup aggregation should be an array with aggregation function and target column");
            }

            var _aggName = rollupConfigAggregation[0],
                _targetColumn = rollupConfigAggregation[1];
            aggregatorFunction = Array.isArray(_targetColumn) && _targetColumn.length > 1 ? getAggregatorArray(_aggName, _targetColumn.length) : getAggregator(_aggName);
          }
        }

        if (aggregatorFunction) {
          var leafGetter = arrayGetter("__leaf");

          var wrappedAggregatorFunction = function wrappedAggregatorFunction(items) {
            return aggregatorFunction(items.map(leafGetter));
          };

          rollupAggregation = wrappedAggregatorFunction;
        }

        var finalRollupFunction = rollupDimension ? d3Array.rollup : d3Array.rollups;
        return finalRollupFunction.apply(void 0, [tabularData, rollupAggregation].concat(grouperGetters));
      }
    }

    return tabularData;
  };
} //#TODO: SHOULD NOT BE DEFAULT

/** `Object#toString` result references. */
var dateTag$2 = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == dateTag$2;
}

var _baseIsDate = baseIsDate;

/* Node.js helper references. */
var nodeIsDate = _nodeUtil && _nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? _baseUnary(nodeIsDate) : _baseIsDate;

var isDate_1 = isDate;

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber_1(value) && value != +value;
}

var _isNaN = isNaN;

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, _baseIteratee(iteratee), _baseGt)
    : undefined;
}

var maxBy_1 = maxBy;

//date formats mapping

/*

%a - abbreviated weekday name.*
%A - full weekday name.*
%b - abbreviated month name.*
%B - full month name.*
%c - the locale’s date and time, such as %x, %X.*
%d - zero-padded day of the month as a decimal number [01,31].
%e - space-padded day of the month as a decimal number [ 1,31]; equivalent to %_d.
%f - microseconds as a decimal number [000000, 999999].
%g - ISO 8601 week-based year without century as a decimal number [00,99].
%G - ISO 8601 week-based year with century as a decimal number.
%H - hour (24-hour clock) as a decimal number [00,23].
%I - hour (12-hour clock) as a decimal number [01,12].
%j - day of the year as a decimal number [001,366].
%m - month as a decimal number [01,12].
%M - minute as a decimal number [00,59].
%L - milliseconds as a decimal number [000, 999].
%p - either AM or PM.*
%q - quarter of the year as a decimal number [1,4].
%Q - milliseconds since UNIX epoch.
%s - seconds since UNIX epoch.
%S - second as a decimal number [00,61].
%u - Monday-based (ISO 8601) weekday as a decimal number [1,7].
%U - Sunday-based week of the year as a decimal number [00,53].
%V - ISO 8601 week of the year as a decimal number [01, 53].
%w - Sunday-based weekday as a decimal number [0,6].
%W - Monday-based week of the year as a decimal number [00,53].
%x - the locale’s date, such as %-m/%-d/%Y.*
%X - the locale’s time, such as %-I:%M:%S %p.*
%y - year without century as a decimal number [00,99].
%Y - year with century as a decimal number, such as 1999.
%Z - time zone offset, such as -0700, -07:00, -07, or Z.
%% - a literal percent sign (%).

*/

/* 

Input	Example	Description
YY	18	Two-digit year
YYYY	2018	Four-digit year
M	1-12	Month, beginning at 1
MM	01-12	Month, 2-digits
MMM	Jan-Dec	The abbreviated month name
MMMM	January-December	The full month name
D	1-31	Day of month
DD	01-31	Day of month, 2-digits
H	0-23	Hours
HH	00-23	Hours, 2-digits
h	1-12	Hours, 12-hour clock
hh	01-12	Hours, 12-hour clock, 2-digits
m	0-59	Minutes
mm	00-59	Minutes, 2-digits
s	0-59	Seconds
ss	00-59	Seconds, 2-digits
S	0-9	Hundreds of milliseconds, 1-digit
SS	00-99	Tens of milliseconds, 2-digits
SSS	000-999	Milliseconds, 3-digits
Z	-05:00	Offset from UTC
ZZ	-0500	Compact offset from UTC, 2-digits
A	AM PM	Post or ante meridiem, upper-case
a	am pm	Post or ante meridiem, lower-case
Do	1st... 31st	Day of Month with ordinal

*/
//#TODO: HANDLE DATEFORMATS WITH REGISTRATION APPROACH + DEFAULT
var dateTokensMap = {
  YYYY: "%Y",
  MM: "%m",
  DD: "%d",
  YY: "%y",
  Month: "%B",
  HH: "%H",
  mm: "%M",
  ss: "%S"
};
var translateDateFormat = function translateDateFormat(df) {
  var out = new String(df);
  Object.keys(dateTokensMap).forEach(function (token) {
    var reg = new RegExp(token, "g");
    out = out.replace(reg, dateTokensMap[token]);
  });
  return out;
}; // actual dateFormats export

var formatsLabels = ["YYYY-MM-DD", "DD/MM/YYYY", "YYYY-MM", "YY-MM", "MM/YY", "MM/YYYY", "DD Month YYYY", "YYYY", "YYYY-MM-DD HH:mm:ss", "YYYY-MM-DDTHH:mm:ss"];
var dateFormats = {};
formatsLabels.forEach(function (label) {
  dateFormats[label] = translateDateFormat(label);
});

var EMPTY_DATE_MARKER = "__||_||_||__";

function getFormatter(dataType, parsingOptions) {
  if (parsingOptions === void 0) {
    parsingOptions = {};
  }

  if (!isPlainObject_1(dataType)) {
    //we have no format, just trying to parse the date with Date.
    if (getType(dataType) === Date) {
      return function (value) {
        if (!value) {
          return EMPTY_DATE_MARKER;
        }

        return new Date(value);
      };
    }
  }

  if (isFunction_1(dataType.decode)) {
    return dataType.decode;
  } //as our date parsers return 'null' when failing parsing we need another marker. see https://github.com/d3/d3-time-format


  if (getType(dataType) === Date) {
    if (isString_1(dataType.dateFormat) && !!dateFormats[dataType.dateFormat]) {
      var mappedFormat = dateFormats[dataType.dateFormat];
      var parser = parsingOptions.dateLocale ? d3TimeFormat.timeFormatLocale(parsingOptions.dateLocale).parse(mappedFormat) : d3TimeFormat.timeParse(mappedFormat);
      return function (value) {
        if (!value) {
          return EMPTY_DATE_MARKER;
        }

        var parsedValue = parser(value);
        return parsedValue;
      };
    }
  }

  if (getType(dataType) === Number) {
    var _parsingOptions = parsingOptions,
        locale = _parsingOptions.locale,
        decimal = _parsingOptions.decimal,
        group = _parsingOptions.group,
        numerals = _parsingOptions.numerals;

    if (locale || decimal || group || numerals) {
      var numberParser = new NumberParser({
        locale: locale,
        decimal: decimal,
        group: group,
        numerals: numerals
      });
      return function (value) {
        return value !== "" ? numberParser.parse(value) : null;
      };
    }
  }

  return undefined;
}

function getValueType(value, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      strict = _options.strict,
      locale = _options.locale,
      numberParser = _options.numberParser,
      dateParser = _options.dateParser;
  var jsonValue = value;

  if (!strict) {
    try {
      jsonValue = JSON.parse(value);
    } catch (err) {}
  }

  if (numberParser) {
    var numberFromParser = numberParser.parse(jsonValue);

    if (isNumber_1(numberFromParser) && !_isNaN(numberFromParser)) {
      return {
        type: "number",
        locale: locale,
        decimal: numberParser.decimal,
        group: numberParser.group,
        numerals: numberParser.numerals
      };
    }
  }

  if (isNumber_1(jsonValue)) {
    return "number";
  } // #TODO: understand if we should handle boolean type
  // if (isBoolean(jsonValue)) {
  //   return {
  //     type: 'string',
  //     formatBoolean: true,
  //   }
  // }


  if (isDate_1(value)) {
    return "date";
  } //testing "YYYY-MM-DD" date format


  if (dateParser) {
    var dateFormatTest = dateFormats["YYYY-MM-DD"];
    var testDateWithFormat = dateParser(dateFormatTest)(value);

    if (testDateWithFormat !== null) {
      return {
        type: "date",
        dateFormat: "YYYY-MM-DD"
      };
    }
  } //testing "YYYY-MM-DDTHH:mm:ss" date format


  if (dateParser) {
    var _dateFormatTest = dateFormats["YYYY-MM-DDTHH:mm:ss"];

    var _testDateWithFormat = dateParser(_dateFormatTest)(value);

    if (_testDateWithFormat !== null) {
      return {
        type: "date",
        dateFormat: "YYYY-MM-DDTHH:mm:ss"
      };
    }
  }

  return "string";
}

function castTypeToString(type) {
  return type.name ? type.name.toLowerCase() : type;
}
/**
 * Types guessing
 *
 * @param {array} data data to be parsed (list of objects)
 * @param {parsingOptions} parsingOptions 
 * @return {DataTypes} the types guessed (object with column names as keys and value type as value)
 */


function inferTypes(data, parsingOptions) {
  if (parsingOptions === void 0) {
    parsingOptions = {};
  }

  var candidateTypes = {};

  if (!Array.isArray(data)) {
    return candidateTypes;
  }

  var _parsingOptions2 = parsingOptions,
      strict = _parsingOptions2.strict,
      locale = _parsingOptions2.locale,
      decimal = _parsingOptions2.decimal,
      group = _parsingOptions2.group,
      numerals = _parsingOptions2.numerals,
      dateLocale = _parsingOptions2.dateLocale;
  var numberParser;

  if (locale || decimal || group || numerals) {
    numberParser = new NumberParser({
      locale: locale,
      decimal: decimal,
      group: group,
      numerals: numerals
    });
  }

  var dateParser;

  if (dateLocale) {
    dateParser = d3TimeFormat.timeFormatLocale(dateLocale).parse;
  } else {
    dateParser = d3TimeFormat.timeParse;
  }

  data.forEach(function (datum, rowIndex) {
    Object.keys(datum).forEach(function (key) {
      if (candidateTypes[key] === undefined) {
        candidateTypes[key] = [];
      }

      var inferredType = getValueType(datum[key], {
        strict: strict,
        numberParser: numberParser,
        locale: locale,
        dateParser: dateParser
      });
      candidateTypes[key].push(castTypeToString(inferredType));
    });
  });
  var inferredTypes = {};
  Object.keys(candidateTypes).map(function (k) {
    var counts = {};
    candidateTypes[k].forEach(function (type) {
      if (!counts[type]) {
        counts[type] = {
          count: 0,
          value: type
        };
      }

      counts[type].count += 1;
    });
    var mostFrequentTypeKey = maxBy_1(Object.keys(counts), function (t) {
      return counts[t].count;
    });
    inferredTypes[k] = counts[mostFrequentTypeKey].value;
  });
  return inferredTypes;
}

function basicGetter(rowValue, dataType) {
  if (rowValue === null || rowValue === undefined) {
    return null;
  }

  return dataType(rowValue);
}

function checkTypeAndGetFinalValue(value, type) {
  if (type === Number && value !== null && _isNaN(value)) {
    throw new RawGraphsError("invalid type number for value " + value);
  } //as our date parsers return 'null' when failing parsing we need another marker. see https://github.com/d3/d3-time-format


  if (type === Date) {
    if (value === EMPTY_DATE_MARKER) {
      return null;
    } else {
      if (!(value instanceof Date)) {
        throw new RawGraphsError("invalid type date for value " + value);
      }
    }
  }

  return value;
} // builds a parser function


function rowParser(types, parsingOptions, onError) {
  if (parsingOptions === void 0) {
    parsingOptions = {};
  }

  var propGetters = {};
  Object.keys(types).forEach(function (k) {
    var dataType = types[k];
    var type = getType(dataType);
    var formatter = getFormatter(dataType, parsingOptions);

    propGetters[k] = function (row) {
      var rowValue = get_1(row, k);
      var formattedValue = formatter ? formatter(rowValue) : rowValue;
      var out = basicGetter(formattedValue, formatter ? function (x) {
        return x;
      } : type);
      out = checkTypeAndGetFinalValue(out, type);
      return out;
    };
  });
  return function (row, i) {
    var error = {};
    var out = {};
    Object.keys(propGetters).forEach(function (k) {
      var getter = propGetters[k];

      try {
        out[k] = getter(row);
      } catch (err) {
        out[k] = undefined;
        error[k] = err.toString();
      }
    });

    if (Object.keys(error).length) {
      onError && onError(error, i);
    }

    return out;
  };
}

function filterEmpty(row) {
  return Object.values(row).filter(function (x) {
    return x !== null && x !== "";
  }).length > 0;
}

function parseRows(data, dataTypes, parsingOptions) {
  //#TODO: eventually add a sentinel to stop parsing
  var errors = [];
  var parser = rowParser(dataTypes, parsingOptions, function (error, i) {
    errors.push({
      row: i,
      error: error
    });
  });
  var dataset = data.map(parser).filter(filterEmpty);
  return [dataset, errors];
}
/**
 * Dataset parser
 *
 * @param {array} data data to be parsed (list of objects)
 * @param {DataTypes} [types] optional column types
 * @param {ParsingOptions} [parsingOptions] optional parsing options
 * @return {ParserResult} dataset, dataTypes, errors
 */


function parseDataset(data, types, parsingOptions) {
  var dataTypes = types || inferTypes(data, parsingOptions);

  var _parseRows = parseRows(data, dataTypes, parsingOptions),
      dataset = _parseRows[0],
      errors = _parseRows[1];

  return {
    dataset: dataset,
    dataTypes: dataTypes,
    errors: errors
  };
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, _baseIteratee(iteratee)) : [];
}

var uniqBy_1 = uniqBy;

var NO_COLOR = "#cccccc";
var sequential = {
  interpolateBlues: {
    value: d3ScaleChromatic.interpolateBlues,
    label: "Blues (sequential)"
  },
  interpolateGreens: {
    value: d3ScaleChromatic.interpolateGreens,
    label: "Greens (sequential)"
  },
  interpolateReds: {
    value: d3ScaleChromatic.interpolateReds,
    label: "Reds (sequential)"
  }
};
var diverging = {
  interpolateRdBu: {
    value: d3ScaleChromatic.interpolateRdBu,
    label: "RdBu (diverging)"
  },
  interpolateBrBG: {
    value: d3ScaleChromatic.interpolateBrBG,
    label: "BrBG (diverging)"
  },
  interpolatePiYG: {
    value: d3ScaleChromatic.interpolatePiYG,
    label: "PiYG (diverging)"
  }
};
var ordinal = {
  schemeCategory10: {
    value: d3ScaleChromatic.schemeCategory10,
    label: "Category10 (ordinal)"
  },
  interpolateTurbo: {
    value: d3ScaleChromatic.interpolateTurbo,
    label: "Interpolate Turbo (ordinal)"
  },
  interpolateSpectral: {
    value: d3ScaleChromatic.interpolateSpectral,
    label: "Interpolate Spectral (ordinal)"
  }
};
/**
 * @constant
 * @description Color presets objects
 */

var colorPresets = {
  sequential: sequential,
  diverging: diverging,
  ordinal: ordinal
};
/**
 * @constant
 * @description Scale types (names)
 */

var scaleTypes = Object.keys(colorPresets);
/**
 *
 * @param {*} scaleType
 * @param {*} domain
 * @param {*} interpolator
 * @returns {function} a d3 scale
 */

function getPresetScale(scaleType, domain, interpolator) {
  if (scaleType === "sequential") {
    if (!colorPresets.sequential[interpolator]) {
      throw new RawGraphsError("interpolator " + interpolator + " not valid for sequential scaletype");
    }

    return d3Scale.scaleSequential(colorPresets.sequential[interpolator].value).domain(domain).unknown(NO_COLOR).clamp(true);
  } else if (scaleType === "diverging") {
    if (!colorPresets.diverging[interpolator]) {
      throw new RawGraphsError("interpolator " + interpolator + " not valid for diverging scaletype");
    }

    return d3Scale.scaleDiverging(colorPresets.diverging[interpolator].value).domain(domain).unknown(NO_COLOR).clamp(true);
  } else {
    if (!colorPresets.ordinal[interpolator]) {
      throw new RawGraphsError("interpolator " + interpolator + " not valid for ordinal scaletype");
    }

    var interpolatorValue = colorPresets.ordinal[interpolator].value;
    var scaleRange = Array.isArray(interpolatorValue) ? interpolatorValue : d3Interpolate.quantize(interpolatorValue, domain.length);
    var finalDomain = domain;

    if (scaleRange.length < domain.length) {
      finalDomain = domain.slice(0, scaleRange.length);
    }

    return d3Scale.scaleOrdinal().domain(finalDomain).range(scaleRange).unknown(NO_COLOR);
  }
}
/**
 * Extracts the color domain, given a color dataset, a color data type and a scale type
 * for sequential scales will return 2 points domain (min and max values)
 * for diverging scales will have 3 points domain (min value, mid value and max value)
 * for ordinal scales the domain consists of all unique values found in the color dataset
 * @param {*} colorDataset
 * @param {*} colorDataType
 * @param {*} scaleType
 * @returns {Array}
 */

function getColorDomain(colorDataset, colorDataType, scaleType) {
  var sample = get_1(colorDataset, "[0]");
  var sampleDataType = sample !== undefined ? getValueType(sample) : colorDataType;

  if (sampleDataType === "string" || scaleType === "ordinal") {
    return uniqBy_1([].concat(colorDataset), function (item) {
      return item && item.toString();
    }).sort();
  } else {
    var typedDataset = colorDataset;

    if (scaleType === "diverging") {
      var minValue = d3Array.min(typedDataset);
      var maxValue = d3Array.max(typedDataset);
      var midValue = 0;

      if (sampleDataType === "date") {
        midValue = new Date((minValue.getTime() + maxValue.getTime()) / 2);
      } else {
        midValue = (minValue + maxValue) / 2;
      }

      return [minValue, midValue, maxValue];
    } else {
      return d3Array.extent(typedDataset);
    }
  }
}

function finalizeScale(inputScale, userScaleValuesMapped, scaleType) {
  if (inputScale.range && isEqual_1(inputScale.range().map(function (d) {
    return d3Color.color(d).formatHex();
  }), userScaleValuesMapped.range)) {
    return inputScale.copy().domain(userScaleValuesMapped.domain);
  } else {
    if (scaleType === "ordinal") {
      return inputScale.copy().domain(userScaleValuesMapped.domain).range(userScaleValuesMapped.range);
    } else {
      return inputScale.copy().domain(userScaleValuesMapped.domain).interpolator(d3Interpolate.interpolateRgbBasis(userScaleValuesMapped.range));
    }
  }
}

function getUserScaleValuesMapped(userScaleValues) {
  return {
    range: userScaleValues.map(function (item) {
      return item.range;
    }),
    domain: userScaleValues.map(function (item) {
      return item.domain;
    })
  };
}
/**
 * Compute the initial ranges and domains, given a domain, a scale type and an interpolator. Used to initialize the values that can be overridden by the user
 * @param {*} domain
 * @param {*} scaleType
 * @param {*} interpolator
 * @returns {Array.<Object>}
 */


function getInitialScaleValues(domain, scaleType, interpolator) {
  var inputScale = getPresetScale(scaleType, domain, interpolator);
  return domain.map(function (d, i) {
    return {
      domain: d,
      range: d3Color.color(inputScale(d)).formatHex(),
      index: i
    };
  });
}
/**
 *
 * @param {Array} colorDataset the array of values of the dataset mapped on the color dimension
 * @param {'number'|'string'|'date'|DataTypeObject} colorDataType the type of the
 * @param {string} scaleType the name of the scale type used
 * @param {string} interpolator the name of the interpolator used (must be compatible with scaleType)
 * @param {Array.<Object>} userScaleValues overrides of ranges/domains points provided by the user
 * @returns {function} The d3 color scale
 */

function getColorScale(colorDataset, colorDataType, scaleType, interpolator, userScaleValues) {
  if (!colorDataset || !colorDataset.length || !colorDataType) {
    return getDefaultColorScale(NO_COLOR);
  }

  var domain = getColorDomain(colorDataset, colorDataType, scaleType);
  var presetScale = getPresetScale(scaleType, domain, interpolator);
  var scaleValues = userScaleValues || getInitialScaleValues(domain, scaleType, interpolator);
  var scaleValuesMapped = getUserScaleValuesMapped(scaleValues);
  var finalScale = finalizeScale(presetScale, scaleValuesMapped, scaleType);
  return finalScale;
}
/**
 * @param {*} defaultColor
 * @returns A d3 scale that map any value to the default color.
 */

function getDefaultColorScale(defaultColor) {
  return d3Scale.scaleOrdinal().unknown(defaultColor);
}
/**
 * @description gets the array of names of available scale types, given the color data type and color dataset
 * @param {*} colorDataType
 * @param {*} colorDataset
 * @returns {Array.<string>}
 */

function getAvailableScaleTypes(colorDataType, colorDataset) {
  if (!colorDataset || !Array.isArray(colorDataset) || !colorDataset.length) {
    return ["ordinal"];
  }

  if (colorDataType === "number" || colorDataType === "date") {
    var sample = colorDataset[0];
    var valueType = getValueType(sample);

    if (valueType === "number" || valueType === "date") {
      return scaleTypes;
    }
  }

  return ["ordinal"];
}

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

var negate_1 = negate;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$f = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$f.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$c.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap(_getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1 = pickBy;

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy_1(object, negate_1(_baseIteratee(predicate)));
}

var omitBy_1 = omitBy;

/**
 * @constant
 * @global
 * @description base options that are injected in all charts and extended by the visualOptions declared by the chart implementation
 * @type {Object}
 * @default
 */

exports.baseOptions = {
  width: {
    type: "number",
    label: "Largeur (px)",
    "default": 805,
    container: "width",
    group: "artboard"
  },
  height: {
    type: "number",
    label: "Hauteur (px)",
    "default": 600,
    container: "height",
    group: "artboard"
  },
  background: {
    type: "color",
    label: "Couleur de fond",
    "default": "#FFFFFF",
    group: "artboard"
  }
};
/**
 *
 * @param {*} newOptions options that will be merged with baseOptions
 */

function overrideBaseOptions(newOptions) {
  exports.baseOptions = _extends({}, exports.baseOptions, {}, newOptions);
}
function getDefaultOptionsValues(definition, mapping) {
  //repeated options are empy at beginning
  return mapValues_1(definition, function (field) {
    if (!field.repeatFor) {
      return field["default"];
    }

    var mappingItem = get_1(mapping, field.repeatFor);
    var mappingValue = get_1(mappingItem, "value", []);
    var repeatDefault = get_1(field, repeatDefault);

    var getDefaultValue = function getDefaultValue(field, idx) {
      return field["default"];
    };

    if (Array.isArray(repeatDefault)) {
      getDefaultValue = function getDefaultValue(field, idx) {
        return get_1(repeatDefault, "[" + idx + "]", field["default"]);
      };
    }

    return mappingValue.map(function (v, i) {
      return getDefaultValue(field, i);
    });
  });
}
function getOptionsConfig(visualModelOptions) {
  return _extends({}, exports.baseOptions, {}, visualModelOptions || {});
}
/**
 * Helper function for checking predicates, used in getEnabledOptions
 *
 * @param {*} conditionObject
 * @param {*} values
 */

function checkPredicates(conditionObject, values) {
  var tests = Object.keys(conditionObject).map(function (key) {
    return values[key] === conditionObject[key];
  });

  if (tests.filter(function (x) {
    return !!x;
  }).length) {
    return false;
  } else {
    return true;
  }
}

function checkMapping(requiredDimensions, mapping, optionName) {
  if (!requiredDimensions) {
    return true;
  }

  if (requiredDimensions && !Array.isArray(requiredDimensions)) {
    throw new RawGraphsError("the property \"requiredDimensions\" on " + optionName + " option definition must be an array, if present");
  }

  var unmappedDimensions = requiredDimensions.map(function (r) {
    return get_1(mapping[r], "value", []);
  }).filter(function (x) {
    return !x.length;
  });
  return unmappedDimensions.length === 0;
}

function getEnabledOptions(definition, values, mapping) {
  var out = {};
  Object.keys(definition).forEach(function (optionName) {
    out[optionName] = true;

    if (isPlainObject_1(definition[optionName].disabled)) {
      out[optionName] = out[optionName] && checkPredicates(definition[optionName].disabled, values);
    }

    if (Array.isArray(definition[optionName].requiredDimensions)) {
      out[optionName] = out[optionName] && checkMapping(definition[optionName].requiredDimensions, mapping, optionName);
    }
  });
  return out;
}

function getContainerOptionValue(item, optionsConfig, optionsValues) {
  var currentConfig = optionsConfig[item];
  var modifier = optionsValues[item] || 0;

  if (isPlainObject_1(currentConfig.containerCondition)) {
    var tests = Object.keys(currentConfig.containerCondition).map(function (key) {
      return optionsValues[key] === currentConfig.containerCondition[key];
    });

    if (tests.filter(function (x) {
      return !!x;
    }).length) {
      return modifier;
    }

    return 0;
  } else {
    return modifier;
  }
}

function getContainerOptions(optionsConfig, optionsValues) {
  var widthOptions = Object.keys(optionsConfig).filter(function (name) {
    return get_1(optionsConfig[name], "container") === "width";
  });
  var heightOptions = Object.keys(optionsConfig).filter(function (name) {
    return get_1(optionsConfig[name], "container") === "height";
  });
  var backgroundOptions = Object.keys(optionsConfig).filter(function (name) {
    var container = get_1(optionsConfig[name], "container");
    return get_1(container, "style") === "background";
  });
  var width = widthOptions.reduce(function (acc, item) {
    var modifier = getContainerOptionValue(item, optionsConfig, optionsValues);
    return acc + modifier;
  }, 0);
  var height = heightOptions.reduce(function (acc, item) {
    var modifier = getContainerOptionValue(item, optionsConfig, optionsValues);
    return acc + modifier;
  }, 0);
  var style = {};

  if (backgroundOptions.length) {
    style["background"] = optionsValues[backgroundOptions[0]];
  }

  return {
    width: width,
    height: height,
    style: style
  };
}

function validateEnum(def, value) {
  var validValues = get_1(def, "options", []);

  if (validValues.length && validValues.indexOf(value) === -1) {
    throw new RawGraphsError(value + " is not a valid option");
  }

  return value;
}

function validateText(def, value) {
  if (!isString_1(value)) {
    throw new RawGraphsError("String expected");
  }

  validateEnum(value);
  var len = get_1(value, "length");
  var minLength = get_1(def, "minLength");

  if (minLength !== undefined && len < minLength) {
    throw new RawGraphsError("Min length is " + minLength);
  }

  var maxLength = get_1(def, "maxLength");

  if (maxLength !== undefined && len > maxLength) {
    throw new RawGraphsError("Max length is " + maxLength);
  }

  return value;
}

function validateNumber(def, value) {
  if (!isNumber_1(value)) {
    throw new RawGraphsError("Number expected");
  }

  validateEnum(value);
  return value;
}

function validateRange(def, value) {
  return value;
}

function validateColor(def, value) {
  validateEnum(value);
  return value;
}

function simplifyDataType(dataType) {
  return dataType ? dataType.type || dataType : dataType;
}

function validateColorScale(def, value, mapping, dataTypes, data, vizData, chartImplementation, visualOptions) {
  var colorDataset, colorDataType, mappingValue, isDimension;
  var domainFunction = def.domain;

  if (domainFunction) {
    var annotatedMapping = annotateMapping(chartImplementation.dimensions, mapping, dataTypes);
    Object.keys(annotatedMapping).forEach(function (k) {
      if (Array.isArray(annotatedMapping[k].dataType)) {
        annotatedMapping[k].dataType = annotatedMapping[k].dataType.map(simplifyDataType);
      } else {
        annotatedMapping[k].dataType = simplifyDataType(annotatedMapping[k].dataType);
      }
    });

    var _chartImplementation$ = chartImplementation[domainFunction](vizData, annotatedMapping, visualOptions),
        domain = _chartImplementation$.domain,
        type = _chartImplementation$.type;

    colorDataset = domain;
    colorDataType = type;
    isDimension = false;
  } else {
    var dimension = def.dimension;
    isDimension = !!dataTypes[mappingValue];
    mappingValue = get_1(mapping, "[" + dimension + "].value");
    colorDataset = vizData.map(function (d) {
      return get_1(d, def.dimension);
    });
    colorDataType = dataTypes[mappingValue] ? getTypeName(dataTypes[mappingValue]) : "string";
  }

  var scaleType = value.scaleType,
      interpolator = value.interpolator,
      userScaleValues = value.userScaleValues,
      _value$defaultColor = value.defaultColor,
      defaultColor = _value$defaultColor === void 0 ? "#cccccc" : _value$defaultColor;

  if (!scaleType || !interpolator) {
    return getDefaultColorScale(defaultColor);
  }

  var typedUserScaleValues = colorDataType === "date" ? userScaleValues.map(function (x) {
    return {
      domain: new Date(x.domain),
      range: x.range
    };
  }) : userScaleValues; //#TODO CHECK condition

  var filledDataset = colorDataset ? colorDataset.filter(function (x) {
    return x !== undefined;
  }) : colorDataset; // const scaleCondition = ((!domainFunction && (!isDimension || (mappingValue && mappingValue.length > 0))) || (domainFunction && colorDataset.length > 0))

  var scaleCondition = colorDataType && filledDataset && filledDataset.length > 0;
  var scale = scaleCondition ? getColorScale(colorDataset, colorDataType, scaleType, interpolator, typedUserScaleValues) : getDefaultColorScale(defaultColor);
  return scale;
}

function validateBoolean(def, value) {
  return value;
}
/**
 * default validators.
 */


var validators = {
  text: validateText,
  number: validateNumber,
  range: validateRange,
  color: validateColor,
  colorScale: validateColorScale,
  "boolean": validateBoolean
};
/**
 * options validation and deserialization
 *
 * @param {object} optionsConfig
 * @param {object} optionsValues
 */

function validateOptions(optionsConfig, optionsValues, mapping, dataTypes, data, vizData, chartImplementation) {
  var validated = {};
  var errors = {}; //validating not undefined values

  Object.keys(optionsValues).filter(function (k) {
    return optionsValues[k] !== undefined;
  }).map(function (name) {
    var optionConfig = optionsConfig[name];

    if (!optionConfig) {
      throw new ValidationError("Visual option " + name + " is not available");
    }

    var validator = get_1(validators, optionConfig.type);
    var repeatFor = get_1(optionConfig, "repeatFor");

    if (validator) {
      if (!repeatFor) {
        //simple case: options is not repeated
        try {
          validated[name] = validator(optionConfig, optionsValues[name], mapping, dataTypes, data, vizData, chartImplementation, optionsValues);
        } catch (err) {
          process.env.NODE_ENV === "development" && console.error(err);
          errors[name] = err.message;
        }
      } else {
        // repeated option case
        // to ease work of rawgraphs frontend, the validation step takes care of integrating missing repeated
        // values with defaults, taking in account `repeatDefault` property if available, `default` otherwise
        var repeatValuesMapping = get_1(mapping, repeatFor);
        var repeatValues = get_1(repeatValuesMapping, "value", []);
        validated[name] = repeatValues.map(function (value, idx) {
          try {
            var _extends2;

            var partialMapping = _extends({}, mapping, (_extends2 = {}, _extends2[repeatFor] = _extends({}, mapping[repeatFor], {
              value: [value]
            }), _extends2));

            var hasValue = Array.isArray(optionsValues[name]) && optionsValues[name][idx] !== undefined;
            var partialValue;

            if (hasValue) {
              partialValue = optionsValues[name][idx];
            } else {
              if (Array.isArray(optionConfig.repeatDefault)) {
                partialValue = get_1(optionConfig.repeatDefault, "[" + idx + "]", optionConfig["default"]);
              } else {
                partialValue = optionConfig["default"];
              }
            }

            return validator(optionConfig, partialValue, partialMapping, dataTypes, data, vizData);
          } catch (err) {
            process.env.NODE_ENV === "development" && console.error(err);
            errors[name + idx] = err.message;
            return optionsValues[name][idx];
          }
        });
      }
    } else {
      validated[name] = optionsValues[name];
    }
  });
  var errorNames = Object.keys(errors);

  if (errorNames.length) {
    // console.error("error in validation", errors)
    throw new ValidationError(errors);
  }

  return validated;
}
function getOptionsValues(definition, values, mapping, dataTypes, data, vizData, chartImplementation) {
  var opts = getDefaultOptionsValues(definition, mapping);
  var valuesClean = omitBy_1(values, function (v, k) {
    return v == undefined;
  });

  var allValues = _extends({}, opts, {}, valuesClean); //removing disabled options


  var enabledOptions = getEnabledOptions(definition, allValues, mapping);
  var valuesCleanNoDisabled = omitBy_1(values, function (v, k) {
    return !enabledOptions[k];
  });

  var finalValues = _extends({}, opts, {}, valuesCleanNoDisabled);

  return validateOptions(definition, finalValues, mapping, dataTypes, data, vizData, chartImplementation);
}

/**
 * @class
 * @description Internal class used to represent a visual model with its actual configuration of data, dataTypes, mapping, visualOptions and styles.
 */

var Chart =
/*#__PURE__*/
function () {
  /**
   * @param {ChartImplementation} chartImplementation chart implementation
   * @param {Array.<Object>} data
   * @param {DataTypes} dataTypes
   * @param {Mapping} mapping
   * @param {VisualOptions} visualOptions
   * @param {Object} styles
   */
  function Chart(chartImplementation, data, dataTypes, mapping, visualOptions, styles) {
    this._chartImplementation = chartImplementation;
    this._data = data;

    if (data && (!dataTypes || typeof dataTypes === "object" && Object.keys(dataTypes).length === 0)) {
      this._dataTypes = inferTypes(data);
    } else {
      this._dataTypes = dataTypes;
    }

    this._mapping = mapping;
    this._visualOptions = visualOptions;
    this._styles = styles;
  }
  /**
   * @param {Array.<Object>} nextData
   * @returns {Chart}
   * @description Sets or updates new data and returns a new Chart instance.
   */


  var _proto = Chart.prototype;

  _proto.data = function data(nextData) {
    if (!arguments.length) {
      return this._data;
    }

    var dataTypes;

    if (!this._dataTypes || typeof this._dataType === "object" && Object.keys(this._dataTypes).length) {
      dataTypes = inferTypes(nextData);
    } else {
      dataTypes = this.dataTypes;
    }

    return new Chart(this._chartImplementation, nextData, dataTypes, this._mapping, this._visualOptions, this._styles);
  }
  /**
   * @param {DataTypes} nextDataTypes
   * @returns {Chart}
   * @description Sets or updates dataTypes and returns a new Chart instance.
   */
  ;

  _proto.dataTypes = function dataTypes(nextDataTypes) {
    if (!arguments.length) {
      return this._dataTypes;
    }

    return new RAWChart(this._chartImplementation, this._data, nextDataTypes, this._mapping, this._visualOptions, this._styles);
  }
  /**
   * @param {Mapping} nextMapping
   * @returns {Chart}
   * @description Sets or updates mapping and returns a new Chart instance.
   */
  ;

  _proto.mapping = function mapping(nextMapping) {
    if (!arguments.length) {
      return this._mapping;
    }

    return new RAWChart(this._chartImplementation, this._data, this._dataTypes, nextMapping, this._visualOptions, this._styles);
  }
  /**
   * @param {VisualOptions} nextVisualOptions
   * @returns {Chart}
   * @description Sets or updates visual options and returns a new Chart instance.
   */
  ;

  _proto.visualOptions = function visualOptions(nextVisualOptions) {
    if (!arguments.length) {
      return this._visualOptions;
    }

    return new RAWChart(this._chartImplementation, this._data, this._dataTypes, this._mapping, nextVisualOptions, this._styles);
  }
  /**
   * @param {styles} Object
   * @returns {Chart}
   * @description Sets or updates styles and returns a new Chart instance.
   */
  ;

  _proto.styles = function styles(_styles) {
    if (!arguments.length) {
      return this._styles;
    }

    return new RAWChart(this._chartImplementation, this._data, this._dataTypes, this._mapping, _visualOptions, _styles);
  }
  /**
   * @param {document} document
   * @param {containerType} string
   * @param {dataReady} (array|object)
   * @returns {Node}
   * @private
   * @description Creates the container node that will be passed to the actual chart implementation. In the current implementation, an svg node is always created.
   */
  ;

  _proto.getContainer = function getContainer(document, containerType, dataReady) {
    var container;

    switch (containerType.toLowerCase()) {
      case "canvas":
        container = document.createElement("canvas");
        break;

      case "div":
        container = document.createElement("div");
        break;

      case "svg":
        container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        break;

      default:
        throw new RawGraphsError("Container of type " + containerType + " is not supported.");
    }

    var _this$_getOptions = this._getOptions(dataReady),
        optionsConfig = _this$_getOptions.optionsConfig,
        optionsValues = _this$_getOptions.optionsValues;

    var _getContainerOptions = getContainerOptions(optionsConfig, optionsValues),
        width = _getContainerOptions.width,
        height = _getContainerOptions.height,
        style = _getContainerOptions.style;

    if (width) {
      container.setAttribute("width", width);
    }

    if (height) {
      container.setAttribute("height", height);
    }

    if (style) {
      Object.keys(style).forEach(function (k) {
        container.style[k] = style[k];
      });
    }

    return container;
  };

  _proto.mapData = function mapData() {
    var _this = this;

    var dimensions = this._chartImplementation.dimensions;
    validateMapperDefinition(dimensions);
    validateMapping(dimensions, this._mapping, this._dataTypes);

    if (isFunction_1(this._chartImplementation.mapData)) {
      var annotatedMapping = annotateMapping(dimensions, this._mapping, this._dataTypes);
      return this._chartImplementation.mapData(this._data, annotatedMapping, this._dataTypes, dimensions);
    } else if (isObject_1(this._chartImplementation.mapData)) {
      var dimensionsWithOperations = dimensions.map(function (dim) {
        return _extends({}, dim, {
          operation: _this._chartImplementation.mapData[dim.id]
        });
      });
      var mapFunction = makeMapper(dimensionsWithOperations, this._mapping, this._dataTypes);
      return mapFunction(this._data);
    } else {
      throw new RawGraphsError("mapData property of chartImplementation should be a function or an object");
    }
  };

  _proto._getOptions = function _getOptions(dataReady) {
    var optionsConfig = getOptionsConfig(this._chartImplementation.visualOptions);

    var vizData = dataReady || this._getVizData();

    var optionsValues = getOptionsValues(optionsConfig, this._visualOptions, this._mapping, this._dataTypes, this._data, vizData, this._chartImplementation);
    return {
      optionsConfig: optionsConfig,
      optionsValues: optionsValues
    };
  };

  _proto._getVizData = function _getVizData() {
    return this._chartImplementation.skipMapping ? this._data : this.mapData();
  };

  _proto._getVizStyles = function _getVizStyles() {
    var styles = this._chartImplementation.styles || {};
    var localStyles = this._styles || {};
    var mergedStyles = mergeStyles(styles, localStyles);
    return mergedStyles;
  }
  /**
   * @param {Node} node
   * @param {dataReady} (array|object) mapped data if available
   * @returns {DOMChart}
   */
  ;

  _proto.renderToDOM = function renderToDOM(node, dataReady) {
    if (!this._chartImplementation) {
      throw new RawGraphsError("cannot render: chartImplementation is not set");
    }

    var containerType = get_1(this._chartImplementation, "type", "svg");
    var container = this.getContainer(node.ownerDocument, containerType, dataReady);

    var vizData = dataReady || this._getVizData();

    var dimensions = this._chartImplementation.dimensions;
    var annotatedMapping = annotateMapping(dimensions, this._mapping, this._dataTypes);

    var styles = this._getVizStyles();

    var _this$_getOptions2 = this._getOptions(vizData),
        optionsConfig = _this$_getOptions2.optionsConfig,
        optionsValues = _this$_getOptions2.optionsValues;

    node.innerHTML = "";
    node.appendChild(container);

    this._chartImplementation.render(container, vizData, optionsValues, annotatedMapping, this._data, styles);

    return new DOMChart(node, this._chartImplementation, this._data, this._dataTypes, this._mapping, this._visualOptions, this._styles);
  }
  /**
   * @param {document} document HTML document context (optional if window is available)
   * @param {dataReady} (array|object) mapped data if available
   * @returns {string}
   */
  ;

  _proto.renderToString = function renderToString(document, dataReady) {
    if (!this._chartImplementation) {
      throw new RawGraphsError("cannot render: chartImplementation is not set");
    }

    if (!document && window === undefined) {
      throw new RawGraphsError("Document must be passed or window available");
    }

    var containerType = get_1(this._chartImplementation, "type", "svg");
    var container = this.getContainer(document || window.document, containerType, dataReady);

    var vizData = dataReady || this._getVizData();

    var dimensions = this._chartImplementation.dimensions;
    var annotatedMapping = annotateMapping(dimensions, this._mapping, this._dataTypes);

    var styles = this._getVizStyles();

    var _this$_getOptions3 = this._getOptions(vizData),
        optionsConfig = _this$_getOptions3.optionsConfig,
        optionsValues = _this$_getOptions3.optionsValues;

    this._chartImplementation.render(container, vizData, optionsValues, annotatedMapping, this._data, styles);

    return container.outerHTML;
  };

  return Chart;
}();
/**
 * @class
 * @description Internal class used to represent a Chart instance rendered to a DOM node.
 * The class has no extra methods for now, but il could be used to provide an "update" functionality in the future.
 */


var DOMChart =
/*#__PURE__*/
function (_Chart) {
  _inheritsLoose(DOMChart, _Chart);

  function DOMChart(node) {
    var _this2;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    _this2 = _Chart.call.apply(_Chart, [this].concat(args)) || this;
    _this2._node = node;
    return _this2;
  }

  return DOMChart;
}(Chart);
/**
 * raw factory function
 * @description This is the entry point for creating a chart with raw. It will return an instance of the RAWChart class
 * @param {ChartImplementation} chartImplementation
 * @param {RawConfig} [config] Config object.
 * @returns {Chart}
 */


function chart(chartImplementation, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      data = _config.data,
      _config$dataTypes = _config.dataTypes,
      dataTypes = _config$dataTypes === void 0 ? {} : _config$dataTypes,
      mapping = _config.mapping,
      _config$visualOptions = _config.visualOptions,
      visualOptions = _config$visualOptions === void 0 ? {} : _config$visualOptions,
      _config$styles = _config.styles,
      styles = _config$styles === void 0 ? {} : _config$styles;
  return new Chart(chartImplementation, data, dataTypes, mapping, visualOptions, styles);
}

function scaleType(scale) {
  if (scale.interpolate) {
    return "continuous";
  } else if (scale.interpolator) {
    return "sequential";
  } else if (scale.invertExtent) {
    return "other";
  } else {
    return "ordinal";
  }
}

function legend(legendColor, legendSize, legendWidth, shapePadding, shapeWidth, shapeHeight, margin) {
  if (legendWidth === void 0) {
    legendWidth = 200;
  }

  if (shapePadding === void 0) {
    shapePadding = 5;
  }

  if (shapeWidth === void 0) {
    shapeWidth = 15;
  }

  if (margin === void 0) {
    margin = {
      top: 0,
      right: 5,
      bottom: 0,
      left: 5
    };
  }

  var legendFn = function legendFn(_selection) {
    var d3legendColor;
    var w = legendWidth - margin.left - margin.right;

    var legendContainer = _selection.append("g").attr("transform", "translate(" + margin.left + "," + 0 + ")"); //draw size scale


    if (legendSize && legendSize.title) {
      legendContainer.append("g").attr("class", "legendSize").attr("transform", "translate(0," + margin.top + ")");

      var _d3LegendSize = d3Legend.legendSize().scale(legendSize.scale).cells(legendSize.scale.domain()).shape(legendSize.shape ? legendSize.shape : "circle").title(legendSize.title).titleWidth(w).labelWrap(w - shapePadding - shapeWidth).labelOffset(5).shapePadding(legendSize.shape === "circle" ? legendSize.scale.range()[1] : shapePadding);

      legendContainer.select(".legendSize").call(_d3LegendSize);
    } //draw color scale


    if (legendColor && legendColor.title) {
      var legendColorHeight = legendContainer.select(".legendSize").empty() ? 0 : legendContainer.select(".legendSize").node().getBBox().height + 20;
      legendContainer.append("g").attr("class", "legendColor").attr("transform", "translate(0," + legendColorHeight + ")");
      d3legendColor = d3Legend.legendColor().shapePadding(shapePadding).title(legendColor.title).titleWidth(w).labelWrap(w - shapePadding - shapeWidth).labelOffset(5).scale(legendColor.scale);

      if (scaleType(legendColor.scale) !== "ordinal") {
        d3legendColor.shapePadding(0).orient("horizontal").shapeWidth(1).shapeHeight(10).cells(w).classPrefix("horizontal-").labelAlign("start").labels(function (_ref) {
          var i = _ref.i,
              genLength = _ref.genLength,
              generatedLabels = _ref.generatedLabels,
              domain = _ref.domain;

          if (i === 0 || i === genLength - 1) {
            return generatedLabels[i];
          }

          if (domain.length === 3 && i === genLength / 2 - 1) {
            return d3Format.format(".01f")((domain[0] + domain[2]) / 2);
          }
        });
      }

      legendContainer.select(".legendColor").call(d3legendColor);
    } //Hardcore style with much love


    legendContainer.selectAll("text").attr("font-family", '"Arial", sans-serif').attr("font-size", "10px");
    legendContainer.selectAll(".legendTitle").attr("font-size", "12px").attr("font-weight", "bold");
    legendContainer.selectAll(".horizontal-legendTitle").attr("font-size", "12px").attr("font-weight", "bold");
    legendContainer.selectAll(".horizontal-cell text").style("text-anchor", "middle").attr("text-anchor", "middle");
    legendContainer.selectAll(".horizontal-cell:first-of-type text").style("text-anchor", "start").attr("text-anchor", "start");
    legendContainer.selectAll(".horizontal-cell:last-of-type text").style("text-anchor", "end").attr("text-anchor", "end");
    legendContainer.selectAll(".legendSize circle").attr("fill", "none").attr("stroke", "#ccc");
    legendContainer.selectAll(".legendSize rect").attr("fill", "none").attr("stroke", "#ccc");
  };

  legendFn.addColor = function (_title, _scale) {
    if (!arguments.length) return legendColor;
    legendColor = {
      title: _title,
      scale: _scale
    };
    return legendFn;
  };

  legendFn.addSize = function (_title, _scale, _shape) {
    if (!arguments.length) return legendSize;
    legendSize = {
      title: _title,
      scale: _scale,
      shape: _shape
    };
    return legendFn;
  };

  legendFn.legendWidth = function (_legendWidth) {
    if (!arguments.length) return legendWidth;
    legendWidth = _legendWidth;
    return legendFn;
  };

  return legendFn;
}

function hasOverlaps(corners, compCorners) {
  return corners[2] < compCorners[3] && corners[3] > compCorners[2] && corners[0] < compCorners[1] && corners[1] > compCorners[0];
}

function insert_and_check(datum, quadtree) {
  var corners = datum._bbox;
  quadtree._max_width = quadtree._max_width || 0;
  quadtree._max_height = quadtree._max_height || 0;
  datum._occluded = false;
  quadtree["visit"](function (node, x0, y0, x1, y1) {
    if (datum._occluded) {
      return true;
    }

    if (node.length) {
      var box_intersects_quad = hasOverlaps(corners, [x0 - quadtree._max_width / 2, x1 + quadtree._max_width / 2, y0 - quadtree._max_height / 2, y1 + quadtree._max_height / 2]);

      if (!box_intersects_quad) {
        return true;
      } else {
        return undefined;
      }
    } else {
      if (hasOverlaps(corners, node.data._bbox)) {
        datum._occluded = true;
        return "break";
      }
    }
  }, [quadtree.x()(datum), quadtree.y()(datum)]);

  if (!datum._occluded) {
    quadtree.add(datum);

    if (quadtree._max_width < corners[1] - corners[0]) {
      quadtree._max_width = corners[1] - corners[0];
    }

    if (quadtree._max_height < corners[3] - corners[2]) {
      quadtree._max_height = corners[3] - corners[2];
    }
  }
}

function formatOcclusion(data) {
  var labels;
  labels = d3Quadtree.quadtree().x(function (d) {
    return (d._bbox[0] + d._bbox[1]) / 2;
  }).y(function (d) {
    return (d._bbox[2] + d._bbox[3]) / 2;
  }); //labels.extent([-80, -35], [width + 80, height + 35]);

  data.forEach(function (d, i) {
    insert_and_check(d, labels);
    d.order = i;
  });
}

function labelsOcclusion(d3Selection$1, priority) {
  if (priority === void 0) {
    priority = function priority(d) {
      return d.priority;
    };
  }

  if (!d3Selection$1.size()) return;
  var labels = [];
  d3Selection$1.each(function (d, i, e) {
    var bbox = e[i].getBoundingClientRect();
    labels.push({
      priority: priority(d) || 0,
      node: e[i],
      _bbox: [bbox.x, bbox.x + bbox.width, bbox.y, bbox.y + bbox.height]
    });
  });
  labels.sort(function (a, b) {
    return d3Array.descending(a.priority, b.priority);
  });
  formatOcclusion(labels);
  var filled = [];
  labels.forEach(function (d) {
    d3Selection.select(d.node).style("opacity", d._occluded ? 0 : 1);
    if (!d._occluded) filled.push(d);
  });
  return filled;
}

/** Used for built-in method references. */
var objectProto$g = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$d = objectProto$g.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty$d.call(object, key);
}

var _baseHas = baseHas;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && _hasPath(object, path, _baseHas);
}

var has_1 = has;

var VERSION = "1";

function objectsToMatrix(listOfObjects, columns) {
  return listOfObjects.map(function (obj) {
    return columns.map(function (col) {
      return obj[col];
    });
  });
}

function matrixToObjects(matrix, columns) {
  return matrix.map(function (record) {
    var obj = {};

    for (var i = 0; i < columns.length; i++) {
      obj[columns[i]] = record[i];
    }

    return obj;
  });
}

function serializeProject(_ref) {
  var userInput = _ref.userInput,
      userData = _ref.userData,
      userDataType = _ref.userDataType,
      parseError = _ref.parseError,
      unstackedData = _ref.unstackedData,
      unstackedColumns = _ref.unstackedColumns,
      data = _ref.data,
      separator = _ref.separator,
      thousandsSeparator = _ref.thousandsSeparator,
      decimalsSeparator = _ref.decimalsSeparator,
      locale = _ref.locale,
      stackDimension = _ref.stackDimension,
      dataSource = _ref.dataSource,
      currentChart = _ref.currentChart,
      mapping = _ref.mapping,
      visualOptions = _ref.visualOptions;
  var project = {
    version: "1"
  };
  /* First stage: user input */

  project.userInput = userInput;
  project.userInputFormat = userDataType;
  project.dataSource = dataSource;
  /* Second stage: parsed */

  project.rawData = objectsToMatrix(userData, Object.keys(data.dataTypes));
  project.parseError = parseError;
  project.parseOptions = {
    separator: separator,
    thousandsSeparator: thousandsSeparator,
    decimalsSeparator: decimalsSeparator,
    locale: locale,
    stackDimension: stackDimension,
    unstackedData: unstackedData,
    unstackedColumns: unstackedColumns
  };
  /* Third stage: typed data ready for chart */

  project.dataTypes = data.dataTypes;
  /* Chart: mapping and visual options */

  project.chart = currentChart.metadata.name;
  project.mapping = mapping;
  project.visualOptions = visualOptions;
  return project;
}

function getOrError(object, path) {
  if (!has_1(object, path)) {
    console.log("IMPORT ERROR", object, path);
    throw new Error("Selected project is not valid");
  }

  return get_1(object, path);
}

function deserializeProject(project, charts) {
  if (project.version !== "1") {
    throw new Error("Invalid version number, please use a suitable deserializer");
  }

  var chartName = getOrError(project, "chart");
  var chart = charts.find(function (c) {
    return c.metadata.name === chartName;
  });

  if (!chart) {
    throw new Error("Unknown chart!");
  }

  return {
    userInput: getOrError(project, "userInput"),
    userData: matrixToObjects(getOrError(project, "rawData"), Object.keys(getOrError(project, "dataTypes"))),
    userDataType: getOrError(project, "userInputFormat"),
    parseError: getOrError(project, "parseError"),
    unstackedData: getOrError(project, "parseOptions.unstackedData"),
    unstackedColumns: getOrError(project, "parseOptions.unstackedColumns"),
    dataTypes: getOrError(project, "dataTypes"),
    separator: getOrError(project, "parseOptions.separator"),
    thousandsSeparator: getOrError(project, "parseOptions.thousandsSeparator"),
    decimalsSeparator: getOrError(project, "parseOptions.decimalsSeparator"),
    locale: getOrError(project, "parseOptions.locale"),
    stackDimension: get_1(project, "parseOptions.stackDimension", undefined),
    dataSource: getOrError(project, "dataSource"),
    currentChart: chart,
    mapping: getOrError(project, "mapping"),
    visualOptions: getOrError(project, "visualOptions")
  };
}

var V1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VERSION: VERSION,
  serializeProject: serializeProject,
  deserializeProject: deserializeProject
});

var VERSION$1 = "1.1";

function objectsToMatrix$1(listOfObjects, columns) {
  return listOfObjects.map(function (obj) {
    return columns.map(function (col) {
      return obj[col];
    });
  });
}

function matrixToObjects$1(matrix, columns) {
  return matrix.map(function (record) {
    var obj = {};

    for (var i = 0; i < columns.length; i++) {
      obj[columns[i]] = record[i];
    }

    return obj;
  });
}

function serializeProject$1(_ref) {
  var userInput = _ref.userInput,
      userData = _ref.userData,
      userDataType = _ref.userDataType,
      parseError = _ref.parseError,
      unstackedData = _ref.unstackedData,
      unstackedColumns = _ref.unstackedColumns,
      data = _ref.data,
      separator = _ref.separator,
      thousandsSeparator = _ref.thousandsSeparator,
      decimalsSeparator = _ref.decimalsSeparator,
      locale = _ref.locale,
      stackDimension = _ref.stackDimension,
      dataSource = _ref.dataSource,
      currentChart = _ref.currentChart,
      mapping = _ref.mapping,
      visualOptions = _ref.visualOptions;
  var project = {
    version: VERSION$1
  };
  /* First stage: user input */

  project.userInput = userInput;
  project.userInputFormat = userDataType;
  project.dataSource = dataSource;
  /* Second stage: parsed */

  project.rawData = objectsToMatrix$1(userData, Object.keys(data.dataTypes));
  project.parseError = parseError;
  project.parseOptions = {
    separator: separator,
    thousandsSeparator: thousandsSeparator,
    decimalsSeparator: decimalsSeparator,
    locale: locale,
    stackDimension: stackDimension,
    unstackedData: unstackedData,
    unstackedColumns: unstackedColumns
  };
  /* Third stage: typed data ready for chart */

  project.dataTypes = data.dataTypes;
  /* Chart: mapping and visual options */

  project.chart = currentChart.metadata.id;
  project.mapping = mapping;
  project.visualOptions = visualOptions;
  return project;
}

function getOrError$1(object, path) {
  if (!has_1(object, path)) {
    console.log("IMPORT ERROR", object, path);
    throw new Error("Selected project is not valid");
  }

  return get_1(object, path);
}

function deserializeProject$1(project, charts) {
  if (project.version !== VERSION$1) {
    throw new Error("Invalid version number, please use a suitable deserializer");
  }

  var chartId = getOrError$1(project, "chart");
  var chart = charts.find(function (c) {
    return c.metadata.id === chartId;
  });

  if (!chart) {
    throw new Error("Unknown chart!");
  }

  return {
    userInput: getOrError$1(project, "userInput"),
    userData: matrixToObjects$1(getOrError$1(project, "rawData"), Object.keys(getOrError$1(project, "dataTypes"))),
    userDataType: getOrError$1(project, "userInputFormat"),
    parseError: getOrError$1(project, "parseError"),
    unstackedData: getOrError$1(project, "parseOptions.unstackedData"),
    unstackedColumns: getOrError$1(project, "parseOptions.unstackedColumns"),
    dataTypes: getOrError$1(project, "dataTypes"),
    separator: getOrError$1(project, "parseOptions.separator"),
    thousandsSeparator: getOrError$1(project, "parseOptions.thousandsSeparator"),
    decimalsSeparator: getOrError$1(project, "parseOptions.decimalsSeparator"),
    locale: getOrError$1(project, "parseOptions.locale"),
    stackDimension: get_1(project, "parseOptions.stackDimension", undefined),
    dataSource: getOrError$1(project, "dataSource"),
    currentChart: chart,
    mapping: getOrError$1(project, "mapping"),
    visualOptions: getOrError$1(project, "visualOptions")
  };
}

var V1_1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VERSION: VERSION$1,
  serializeProject: serializeProject$1,
  deserializeProject: deserializeProject$1
});

var DESERIALIZERS = keyBy_1([V1, V1_1], "VERSION");
/**
 * Serializes a rawgraphs project to json format
 * @param {Object} project 
 * @param {string} [version="latest"] 
 * @returns {string}
 */

function serializeProject$2(project, version) {
  if (version === void 0) {
    version = "latest";
  }

  var defaultSerializer = version === "latest" ? DESERIALIZERS[VERSION$1].serializeProject : function () {
    throw new Error("No serializer found for version " + version);
  };
  var serializer = get_1(DESERIALIZERS, version + ".serializeProject", defaultSerializer);
  return serializer(project);
}
/**
 * Deserializes a project from JSON
 * @param {string} serializedProject 
 * @param {object} charts 
 * @returns 
 */

function deserializeProject$2(serializedProject, charts) {
  try {
    var parsedProject = JSON.parse(serializedProject);
    var version = get_1(parsedProject, "version", "unknown");

    if (DESERIALIZERS[version]) {
      try {
        return DESERIALIZERS[version].deserializeProject(parsedProject, charts);
      } catch (e) {
        throw new Error("Can't open your project. " + e.message);
      }
    } else {
      throw new Error("Can't open your project. Invalid file");
    }
  } catch (e) {
    throw new Error("Can't open your project. " + e.message);
  }
}
function registerSerializerDeserializer(version, serializer, deserializer) {
  DESERIALIZERS[version] = {
    serializeProject: serializer,
    deserializeProject: deserializer,
    VERSION: version
  };
}

exports.NumberParser = NumberParser;
exports.arrayGetter = arrayGetter;
exports.chart = chart;
exports.colorPresets = colorPresets;
exports.dateFormats = dateFormats;
exports.deserializeProject = deserializeProject$2;
exports.getAggregator = getAggregator;
exports.getAggregatorNames = getAggregatorNames;
exports.getAvailableScaleTypes = getAvailableScaleTypes;
exports.getColorDomain = getColorDomain;
exports.getColorScale = getColorScale;
exports.getContainerOptions = getContainerOptions;
exports.getDefaultColorScale = getDefaultColorScale;
exports.getDefaultDimensionAggregation = getDefaultDimensionAggregation;
exports.getDefaultOptionsValues = getDefaultOptionsValues;
exports.getDimensionAggregator = getDimensionAggregator;
exports.getEnabledOptions = getEnabledOptions;
exports.getInitialScaleValues = getInitialScaleValues;
exports.getOptionsConfig = getOptionsConfig;
exports.getPresetScale = getPresetScale;
exports.getTypeName = getTypeName;
exports.getValueType = getValueType;
exports.inferTypes = inferTypes;
exports.labelsOcclusion = labelsOcclusion;
exports.legend = legend;
exports.makeMapper = makeMapper;
exports.overrideBaseOptions = overrideBaseOptions;
exports.parseDataset = parseDataset;
exports.registerAggregation = registerAggregation;
exports.registerSerializerDeserializer = registerSerializerDeserializer;
exports.serializeProject = serializeProject$2;
exports.translateDateFormat = translateDateFormat;
exports.unregisterAggregation = unregisterAggregation;
exports.validateMapperDefinition = validateMapperDefinition;
exports.validateMapping = validateMapping;
