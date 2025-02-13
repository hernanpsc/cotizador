function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    })(obj)
}

function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    })(obj)
}

function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    })(obj)
}! function(factory) {
    var registeredInModuleLoader = !1;
    if ("function" == typeof define && define.amd && (define(factory), registeredInModuleLoader = !0), "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && (module.exports = factory(), registeredInModuleLoader = !0), !registeredInModuleLoader) {
        var OldCookies = window.Cookies,
            api = window.Cookies = factory();
        api.noConflict = function() {
            return window.Cookies = OldCookies, api
        }
    }
}(function() {
    function extend() {
        for (var i = 0, result = {}; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) result[key] = attributes[key]
        }
        return result
    }
    return function init(converter) {
        function api(key, value, attributes) {
            var result;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if ("number" == typeof(attributes = extend({
                            path: "/"
                        }, api.defaults, attributes)).expires) {
                        var expires = new Date;
                        expires.setMilliseconds(expires.getMilliseconds() + 864e5 * attributes.expires), attributes.expires = expires
                    }
                    attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
                    try {
                        result = JSON.stringify(value), /^[\{\[]/.test(result) && (value = result)
                    } catch (e) {}
                    value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = (key = (key = encodeURIComponent(String(key))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var stringifiedAttributes = "";
                    for (var attributeName in attributes) attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, !0 !== attributes[attributeName] && (stringifiedAttributes += "=" + attributes[attributeName]));
                    return document.cookie = key + "=" + value + stringifiedAttributes
                }
                key || (result = {});
                for (var cookies = document.cookie ? document.cookie.split("; ") : [], rdecode = /(%[0-9A-Z]{2})+/g, i = 0; i < cookies.length; i++) {
                    var parts = cookies[i].split("="),
                        cookie = parts.slice(1).join("=");
                    this.json || '"' !== cookie.charAt(0) || (cookie = cookie.slice(1, -1));
                    try {
                        var name = parts[0].replace(rdecode, decodeURIComponent);
                        if (cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent), this.json) try {
                            cookie = JSON.parse(cookie)
                        } catch (e) {}
                        if (key === name) {
                            result = cookie;
                            break
                        }
                        key || (result[name] = cookie)
                    } catch (e) {}
                }
                return result
            }
        }
        return (api.set = api).get = function(key) {
            return api.call(api, key)
        }, api.getJSON = function() {
            return api.apply({
                json: !0
            }, [].slice.call(arguments))
        }, api.defaults = {}, api.remove = function(key, attributes) {
            api(key, "", extend(attributes, {
                expires: -1
            }))
        }, api.withConverter = init, api
    }(function() {})
}),
function(window, undefined) {
    var readyList, rootjQuery, core_strundefined = _typeof(undefined),
        location = window.location,
        document = window.document,
        docElem = document.documentElement,
        _jQuery = window.jQuery,
        _$ = window.$,
        class2type = {},
        core_deletedIds = [],
        core_concat = core_deletedIds.concat,
        core_push = core_deletedIds.push,
        core_slice = core_deletedIds.slice,
        core_indexOf = core_deletedIds.indexOf,
        core_toString = class2type.toString,
        core_hasOwn = class2type.hasOwnProperty,
        core_trim = "1.10.2".trim,
        jQuery = function jQuery(selector, context) {
            return new jQuery.fn.init(selector, context, rootjQuery)
        },
        core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        core_rnotwhite = /\S+/g,
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        rvalidchars = /^[\],:{}\s]*$/,
        rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
        rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        rmsPrefix = /^-ms-/,
        rdashAlpha = /-([\da-z])/gi,
        fcamelCase = function(all, letter) {
            return letter.toUpperCase()
        },
        completed = function(event) {
            (document.addEventListener || "load" === event.type || "complete" === document.readyState) && (detach(), jQuery.ready())
        },
        detach = function() {
            document.addEventListener ? (document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1)) : (document.detachEvent("onreadystatechange", completed), window.detachEvent("onload", completed))
        };

    function isArraylike(obj) {
        var length = obj.length,
            type = jQuery.type(obj);
        return !jQuery.isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === type || "function" !== type && (0 === length || "number" == typeof length && 0 < length && length - 1 in obj)))
    }
    jQuery.fn = jQuery.prototype = {
            jquery: "1.10.2",
            constructor: jQuery,
            init: function(selector, context, rootjQuery) {
                var match, elem;
                if (!selector) return this;
                if ("string" != typeof selector) return selector.nodeType ? (this.context = this[0] = selector, this.length = 1, this) : jQuery.isFunction(selector) ? rootjQuery.ready(selector) : (selector.selector !== undefined && (this.selector = selector.selector, this.context = selector.context), jQuery.makeArray(selector, this));
                if (!(match = "<" === selector.charAt(0) && ">" === selector.charAt(selector.length - 1) && 3 <= selector.length ? [null, selector, null] : rquickExpr.exec(selector)) || !match[1] && context) return !context || context.jquery ? (context || rootjQuery).find(selector) : this.constructor(context).find(selector);
                if (match[1]) {
                    if (context = context instanceof jQuery ? context[0] : context, jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, !0)), rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
                        for (match in context) jQuery.isFunction(this[match]) ? this[match](context[match]) : this.attr(match, context[match]);
                    return this
                }
                if ((elem = document.getElementById(match[2])) && elem.parentNode) {
                    if (elem.id !== match[2]) return rootjQuery.find(selector);
                    this.length = 1, this[0] = elem
                }
                return this.context = document, this.selector = selector, this
            },
            selector: "",
            length: 0,
            toArray: function() {
                return core_slice.call(this)
            },
            get: function(num) {
                return null == num ? this.toArray() : num < 0 ? this[this.length + num] : this[num]
            },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                return ret.prevObject = this, ret.context = this.context, ret
            },
            each: function(callback, args) {
                return jQuery.each(this, callback, args)
            },
            ready: function(fn) {
                return jQuery.ready.promise().done(fn), this
            },
            slice: function() {
                return this.pushStack(core_slice.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(0 <= j && j < len ? [this[j]] : [])
            },
            map: function(callback) {
                return this.pushStack(jQuery.map(this, function(elem, i) {
                    return callback.call(elem, i, elem)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: core_push,
            sort: [].sort,
            splice: [].splice
        }, jQuery.fn.init.prototype = jQuery.fn, jQuery.extend = jQuery.fn.extend = function() {
            var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = !1;
            for ("boolean" == typeof target && (deep = target, target = arguments[1] || {}, i = 2), "object" === _typeof(target) || jQuery.isFunction(target) || (target = {}), length === i && (target = this, --i); i < length; i++)
                if (null != (options = arguments[i]))
                    for (name in options) src = target[name], target !== (copy = options[name]) && (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))) ? (clone = copyIsArray ? (copyIsArray = !1, src && jQuery.isArray(src) ? src : []) : src && jQuery.isPlainObject(src) ? src : {}, target[name] = jQuery.extend(deep, clone, copy)) : copy !== undefined && (target[name] = copy));
            return target
        }, jQuery.extend({
            expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
            noConflict: function(deep) {
                return window.$ === jQuery && (window.$ = _$), deep && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(hold) {
                hold ? jQuery.readyWait++ : jQuery.ready(!0)
            },
            ready: function(wait) {
                if (!0 === wait ? !--jQuery.readyWait : !jQuery.isReady) {
                    if (!document.body) return setTimeout(jQuery.ready);
                    (jQuery.isReady = !0) !== wait && 0 < --jQuery.readyWait || (readyList.resolveWith(document, [jQuery]), jQuery.fn.trigger && jQuery(document).trigger("ready").off("ready"))
                }
            },
            isFunction: function(obj) {
                return "function" === jQuery.type(obj)
            },
            isArray: Array.isArray || function(obj) {
                return "array" === jQuery.type(obj)
            },
            isWindow: function(obj) {
                return null != obj && obj == obj.window
            },
            isNumeric: function(obj) {
                return !isNaN(parseFloat(obj)) && isFinite(obj)
            },
            type: function(obj) {
                return null == obj ? String(obj) : "object" === _typeof(obj) || "function" == typeof obj ? class2type[core_toString.call(obj)] || "object" : _typeof(obj)
            },
            isPlainObject: function(obj) {
                var key;
                if (!obj || "object" !== jQuery.type(obj) || obj.nodeType || jQuery.isWindow(obj)) return !1;
                try {
                    if (obj.constructor && !core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (jQuery.support.ownLast)
                    for (key in obj) return core_hasOwn.call(obj, key);
                for (key in obj);
                return key === undefined || core_hasOwn.call(obj, key)
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) return !1;
                return !0
            },
            error: function(msg) {
                throw new Error(msg)
            },
            parseHTML: function(data, context, keepScripts) {
                if (!data || "string" != typeof data) return null;
                "boolean" == typeof context && (keepScripts = context, context = !1), context = context || document;
                var parsed = rsingleTag.exec(data),
                    scripts = !keepScripts && [];
                return parsed ? [context.createElement(parsed[1])] : (parsed = jQuery.buildFragment([data], context, scripts), scripts && jQuery(scripts).remove(), jQuery.merge([], parsed.childNodes))
            },
            parseJSON: function(data) {
                return window.JSON && window.JSON.parse ? window.JSON.parse(data) : null === data ? data : "string" == typeof data && (data = jQuery.trim(data)) && rvalidchars.test(data.replace(rvalidescape, "@").replace(rvalidtokens, "]").replace(rvalidbraces, "")) ? new Function("return " + data)() : void jQuery.error("Invalid JSON: " + data)
            },
            parseXML: function(data) {
                var xml;
                if (!data || "string" != typeof data) return null;
                try {
                    window.DOMParser ? xml = (new DOMParser).parseFromString(data, "text/xml") : ((xml = new ActiveXObject("Microsoft.XMLDOM")).async = "false", xml.loadXML(data))
                } catch (e) {
                    xml = undefined
                }
                return xml && xml.documentElement && !xml.getElementsByTagName("parsererror").length || jQuery.error("Invalid XML: " + data), xml
            },
            noop: function() {},
            globalEval: function(data) {
                data && jQuery.trim(data) && (window.execScript || function(data) {
                    window.eval.call(window, data)
                })(data)
            },
            camelCase: function(string) {
                return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
            },
            nodeName: function(elem, name) {
                return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
            },
            each: function(obj, callback, args) {
                var i = 0,
                    length = obj.length,
                    isArray = isArraylike(obj);
                if (args) {
                    if (isArray)
                        for (; i < length && !1 !== callback.apply(obj[i], args); i++);
                    else
                        for (i in obj)
                            if (!1 === callback.apply(obj[i], args)) break
                } else if (isArray)
                    for (; i < length && !1 !== callback.call(obj[i], i, obj[i]); i++);
                else
                    for (i in obj)
                        if (!1 === callback.call(obj[i], i, obj[i])) break;
                return obj
            },
            trim: core_trim && !core_trim.call("\ufeff ") ? function(text) {
                return null == text ? "" : core_trim.call(text)
            } : function(text) {
                return null == text ? "" : (text + "").replace(rtrim, "")
            },
            makeArray: function(arr, results) {
                var ret = results || [];
                return null != arr && (isArraylike(Object(arr)) ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr) : core_push.call(ret, arr)), ret
            },
            inArray: function(elem, arr, i) {
                var len;
                if (arr) {
                    if (core_indexOf) return core_indexOf.call(arr, elem, i);
                    for (len = arr.length, i = i ? i < 0 ? Math.max(0, len + i) : i : 0; i < len; i++)
                        if (i in arr && arr[i] === elem) return i
                }
                return -1
            },
            merge: function(first, second) {
                var l = second.length,
                    i = first.length,
                    j = 0;
                if ("number" == typeof l)
                    for (; j < l; j++) first[i++] = second[j];
                else
                    for (; second[j] !== undefined;) first[i++] = second[j++];
                return first.length = i, first
            },
            grep: function(elems, callback, inv) {
                var ret = [],
                    i = 0,
                    length = elems.length;
                for (inv = !!inv; i < length; i++) inv !== !!callback(elems[i], i) && ret.push(elems[i]);
                return ret
            },
            map: function(elems, callback, arg) {
                var value, i = 0,
                    length = elems.length,
                    ret = [];
                if (isArraylike(elems))
                    for (; i < length; i++) null != (value = callback(elems[i], i, arg)) && (ret[ret.length] = value);
                else
                    for (i in elems) null != (value = callback(elems[i], i, arg)) && (ret[ret.length] = value);
                return core_concat.apply([], ret)
            },
            guid: 1,
            proxy: function(fn, context) {
                var args, proxy, tmp;
                return "string" == typeof context && (tmp = fn[context], context = fn, fn = tmp), jQuery.isFunction(fn) ? (args = core_slice.call(arguments, 2), proxy = function() {
                    return fn.apply(context || this, args.concat(core_slice.call(arguments)))
                }, proxy.guid = fn.guid = fn.guid || jQuery.guid++, proxy) : undefined
            },
            access: function(elems, fn, key, value, chainable, emptyGet, raw) {
                var i = 0,
                    length = elems.length,
                    bulk = null == key;
                if ("object" === jQuery.type(key))
                    for (i in chainable = !0, key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw);
                else if (value !== undefined && (chainable = !0, jQuery.isFunction(value) || (raw = !0), bulk && (fn = raw ? (fn.call(elems, value), null) : (bulk = fn, function(elem, key, value) {
                        return bulk.call(jQuery(elem), value)
                    })), fn))
                    for (; i < length; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(elem, options, callback, args) {
                var ret, name, old = {};
                for (name in options) old[name] = elem.style[name], elem.style[name] = options[name];
                for (name in ret = callback.apply(elem, args || []), options) elem.style[name] = old[name];
                return ret
            }
        }), jQuery.ready.promise = function(obj) {
            if (!readyList)
                if (readyList = jQuery.Deferred(), "complete" === document.readyState) setTimeout(jQuery.ready);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1);
            else {
                document.attachEvent("onreadystatechange", completed), window.attachEvent("onload", completed);
                var top = !1;
                try {
                    top = null == window.frameElement && document.documentElement
                } catch (e) {}
                top && top.doScroll && function doScrollCheck() {
                    if (!jQuery.isReady) {
                        try {
                            top.doScroll("left")
                        } catch (e) {
                            return setTimeout(doScrollCheck, 50)
                        }
                        detach(), jQuery.ready()
                    }
                }()
            }
            return readyList.promise(obj)
        }, jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase()
        }), rootjQuery = jQuery(document),
        function(window, undefined) {
            var i, support, cachedruns, Expr, getText, isXML, compile, outermostContext, sortInput, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + -new Date,
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                hasDuplicate = !1,
                sortOrder = function(a, b) {
                    return a === b && (hasDuplicate = !0), 0
                },
                strundefined = _typeof(void 0),
                hasOwn = {}.hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
                indexOf = arr.indexOf || function(elem) {
                    for (var i = 0, len = this.length; i < len; i++)
                        if (this[i] === elem) return i;
                    return -1
                },
                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                whitespace = "[\\x20\\t\\r\\n\\f]",
                characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                identifier = characterEncoding.replace("w", "w#"),
                attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
                pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                rsibling = new RegExp(whitespace + "*[+~]"),
                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                    ID: new RegExp("^#(" + characterEncoding + ")"),
                    CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
                    TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + attributes),
                    PSEUDO: new RegExp("^" + pseudos),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + booleans + ")$", "i"),
                    needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },
                rnative = /^[^{]+\{\s*\[native \w/,
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                rescape = /'|\\/g,
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function(_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 65536;
                    return high != high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, 1023 & high | 56320)
                };
            try {
                push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes), arr[preferredDoc.childNodes.length].nodeType
            } catch (e) {
                push = {
                    apply: arr.length ? function(target, els) {
                        push_native.apply(target, slice.call(els))
                    } : function(target, els) {
                        for (var j = target.length, i = 0; target[j++] = els[i++];);
                        target.length = j - 1
                    }
                }
            }

            function Sizzle(selector, context, results, seed) {
                var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
                if ((context ? context.ownerDocument || context : preferredDoc) !== document && setDocument(context), results = results || [], !selector || "string" != typeof selector) return results;
                if (1 !== (nodeType = (context = context || document).nodeType) && 9 !== nodeType) return [];
                if (documentIsHTML && !seed) {
                    if (match = rquickExpr.exec(selector))
                        if (m = match[1]) {
                            if (9 === nodeType) {
                                if (!(elem = context.getElementById(m)) || !elem.parentNode) return results;
                                if (elem.id === m) return results.push(elem), results
                            } else if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) return results.push(elem), results
                        } else {
                            if (match[2]) return push.apply(results, context.getElementsByTagName(selector)), results;
                            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) return push.apply(results, context.getElementsByClassName(m)), results
                        } if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                        if (nid = old = expando, newContext = context, newSelector = 9 === nodeType && selector, 1 === nodeType && "object" !== context.nodeName.toLowerCase()) {
                            for (groups = tokenize(selector), (old = context.getAttribute("id")) ? nid = old.replace(rescape, "\\$&") : context.setAttribute("id", nid), nid = "[id='" + nid + "'] ", i = groups.length; i--;) groups[i] = nid + toSelector(groups[i]);
                            newContext = rsibling.test(selector) && context.parentNode || context, newSelector = groups.join(",")
                        }
                        if (newSelector) try {
                            return push.apply(results, newContext.querySelectorAll(newSelector)), results
                        } catch (qsaError) {} finally {
                            old || context.removeAttribute("id")
                        }
                    }
                }
                return function(selector, context, results, seed) {
                    var i, tokens, token, type, find, match = tokenize(selector);
                    if (!seed && 1 === match.length) {
                        if (2 < (tokens = match[0] = match[0].slice(0)).length && "ID" === (token = tokens[0]).type && support.getById && 9 === context.nodeType && documentIsHTML && Expr.relative[tokens[1].type]) {
                            if (!(context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0])) return results;
                            selector = selector.slice(tokens.shift().value.length)
                        }
                        for (i = matchExpr.needsContext.test(selector) ? 0 : tokens.length; i-- && (token = tokens[i], !Expr.relative[type = token.type]);)
                            if ((find = Expr.find[type]) && (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context))) {
                                if (tokens.splice(i, 1), !(selector = seed.length && toSelector(tokens))) return push.apply(results, seed), results;
                                break
                            }
                    }
                    return compile(selector, match)(seed, context, !documentIsHTML, results, rsibling.test(selector)), results
                }(selector.replace(rtrim, "$1"), context, results, seed)
            }

            function createCache() {
                var keys = [];
                return function cache(key, value) {
                    return keys.push(key += " ") > Expr.cacheLength && delete cache[keys.shift()], cache[key] = value
                }
            }

            function markFunction(fn) {
                return fn[expando] = !0, fn
            }

            function assert(fn) {
                var div = document.createElement("div");
                try {
                    return !!fn(div)
                } catch (e) {
                    return !1
                } finally {
                    div.parentNode && div.parentNode.removeChild(div), div = null
                }
            }

            function addHandle(attrs, handler) {
                for (var arr = attrs.split("|"), i = attrs.length; i--;) Expr.attrHandle[arr[i]] = handler
            }

            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || 1 << 31) - (~a.sourceIndex || 1 << 31);
                if (diff) return diff;
                if (cur)
                    for (; cur = cur.nextSibling;)
                        if (cur === b) return -1;
                return a ? 1 : -1
            }

            function createInputPseudo(type) {
                return function(elem) {
                    return "input" === elem.nodeName.toLowerCase() && elem.type === type
                }
            }

            function createButtonPseudo(type) {
                return function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return ("input" === name || "button" === name) && elem.type === type
                }
            }

            function createPositionalPseudo(fn) {
                return markFunction(function(argument) {
                    return argument = +argument, markFunction(function(seed, matches) {
                        for (var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length; i--;) seed[j = matchIndexes[i]] && (seed[j] = !(matches[j] = seed[j]))
                    })
                })
            }
            for (i in isXML = Sizzle.isXML = function(elem) {
                    var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                    return !!documentElement && "HTML" !== documentElement.nodeName
                }, support = Sizzle.support = {}, setDocument = Sizzle.setDocument = function(node) {
                    var doc = node ? node.ownerDocument || node : preferredDoc,
                        parent = doc.defaultView;
                    return doc !== document && 9 === doc.nodeType && doc.documentElement ? (docElem = (document = doc).documentElement, documentIsHTML = !isXML(doc), parent && parent.attachEvent && parent !== parent.top && parent.attachEvent("onbeforeunload", function() {
                        setDocument()
                    }), support.attributes = assert(function(div) {
                        return div.className = "i", !div.getAttribute("className")
                    }), support.getElementsByTagName = assert(function(div) {
                        return div.appendChild(doc.createComment("")), !div.getElementsByTagName("*").length
                    }), support.getElementsByClassName = assert(function(div) {
                        return div.innerHTML = "<div class='a'></div><div class='a i'></div>", div.firstChild.className = "i", 2 === div.getElementsByClassName("i").length
                    }), support.getById = assert(function(div) {
                        return docElem.appendChild(div).id = expando, !doc.getElementsByName || !doc.getElementsByName(expando).length
                    }), support.getById ? (Expr.find.ID = function(id, context) {
                        if (_typeof(context.getElementById) !== strundefined && documentIsHTML) {
                            var m = context.getElementById(id);
                            return m && m.parentNode ? [m] : []
                        }
                    }, Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            return elem.getAttribute("id") === attrId
                        }
                    }) : (delete Expr.find.ID, Expr.filter.ID = function(id) {
                        var attrId = id.replace(runescape, funescape);
                        return function(elem) {
                            var node = _typeof(elem.getAttributeNode) !== strundefined && elem.getAttributeNode("id");
                            return node && node.value === attrId
                        }
                    }), Expr.find.TAG = support.getElementsByTagName ? function(tag, context) {
                        if (_typeof(context.getElementsByTagName) !== strundefined) return context.getElementsByTagName(tag)
                    } : function(tag, context) {
                        var elem, tmp = [],
                            i = 0,
                            results = context.getElementsByTagName(tag);
                        if ("*" !== tag) return results;
                        for (; elem = results[i++];) 1 === elem.nodeType && tmp.push(elem);
                        return tmp
                    }, Expr.find.CLASS = support.getElementsByClassName && function(className, context) {
                        if (_typeof(context.getElementsByClassName) !== strundefined && documentIsHTML) return context.getElementsByClassName(className)
                    }, rbuggyMatches = [], rbuggyQSA = [], (support.qsa = rnative.test(doc.querySelectorAll)) && (assert(function(div) {
                        div.innerHTML = "<select><option selected=''></option></select>", div.querySelectorAll("[selected]").length || rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"), div.querySelectorAll(":checked").length || rbuggyQSA.push(":checked")
                    }), assert(function(div) {
                        var input = doc.createElement("input");
                        input.setAttribute("type", "hidden"), div.appendChild(input).setAttribute("t", ""), div.querySelectorAll("[t^='']").length && rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"), div.querySelectorAll(":enabled").length || rbuggyQSA.push(":enabled", ":disabled"), div.querySelectorAll("*,:x"), rbuggyQSA.push(",.*:")
                    })), (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) && assert(function(div) {
                        support.disconnectedMatch = matches.call(div, "div"), matches.call(div, "[s!='']:x"), rbuggyMatches.push("!=", pseudos)
                    }), rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|")), rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|")), contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? function(a, b) {
                        var adown = 9 === a.nodeType ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !(!bup || 1 !== bup.nodeType || !(adown.contains ? adown.contains(bup) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(bup)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, sortOrder = docElem.compareDocumentPosition ? function(a, b) {
                        if (a === b) return hasDuplicate = !0, 0;
                        var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                        return compare ? 1 & compare || !support.sortDetached && b.compareDocumentPosition(a) === compare ? a === doc || contains(preferredDoc, a) ? -1 : b === doc || contains(preferredDoc, b) ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0 : 4 & compare ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                    } : function(a, b) {
                        var cur, i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];
                        if (a === b) return hasDuplicate = !0, 0;
                        if (!aup || !bup) return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                        if (aup === bup) return siblingCheck(a, b);
                        for (cur = a; cur = cur.parentNode;) ap.unshift(cur);
                        for (cur = b; cur = cur.parentNode;) bp.unshift(cur);
                        for (; ap[i] === bp[i];) i++;
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0
                    }, doc) : document
                }, Sizzle.matches = function(expr, elements) {
                    return Sizzle(expr, null, null, elements)
                }, Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document && setDocument(elem), expr = expr.replace(rattributeQuotes, "='$1']"), support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                        var ret = matches.call(elem, expr);
                        if (ret || support.disconnectedMatch || elem.document && 11 !== elem.document.nodeType) return ret
                    } catch (e) {}
                    return 0 < Sizzle(expr, document, null, [elem]).length
                }, Sizzle.contains = function(context, elem) {
                    return (context.ownerDocument || context) !== document && setDocument(context), contains(context, elem)
                }, Sizzle.attr = function(elem, name) {
                    (elem.ownerDocument || elem) !== document && setDocument(elem);
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                    return void 0 === val ? support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null : val
                }, Sizzle.error = function(msg) {
                    throw new Error("Syntax error, unrecognized expression: " + msg)
                }, Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [],
                        j = 0,
                        i = 0;
                    if (hasDuplicate = !support.detectDuplicates, sortInput = !support.sortStable && results.slice(0), results.sort(sortOrder), hasDuplicate) {
                        for (; elem = results[i++];) elem === results[i] && (j = duplicates.push(i));
                        for (; j--;) results.splice(duplicates[j], 1)
                    }
                    return results
                }, getText = Sizzle.getText = function(elem) {
                    var node, ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (nodeType) {
                        if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                            if ("string" == typeof elem.textContent) return elem.textContent;
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) ret += getText(elem)
                        } else if (3 === nodeType || 4 === nodeType) return elem.nodeValue
                    } else
                        for (; node = elem[i]; i++) ret += getText(node);
                    return ret
                }, (Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(match) {
                            return match[1] = match[1].replace(runescape, funescape), match[3] = (match[4] || match[5] || "").replace(runescape, funescape), "~=" === match[2] && (match[3] = " " + match[3] + " "), match.slice(0, 4)
                        },
                        CHILD: function(match) {
                            return match[1] = match[1].toLowerCase(), "nth" === match[1].slice(0, 3) ? (match[3] || Sizzle.error(match[0]), match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * ("even" === match[3] || "odd" === match[3])), match[5] = +(match[7] + match[8] || "odd" === match[3])) : match[3] && Sizzle.error(match[0]), match
                        },
                        PSEUDO: function(match) {
                            var excess, unquoted = !match[5] && match[2];
                            return matchExpr.CHILD.test(match[0]) ? null : (match[3] && void 0 !== match[4] ? match[2] = match[4] : unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, !0)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length) && (match[0] = match[0].slice(0, excess), match[2] = unquoted.slice(0, excess)), match.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(nodeNameSelector) {
                            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                            return "*" === nodeNameSelector ? function() {
                                return !0
                            } : function(elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName
                            }
                        },
                        CLASS: function(className) {
                            var pattern = classCache[className + " "];
                            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
                                return pattern.test("string" == typeof elem.className && elem.className || _typeof(elem.getAttribute) !== strundefined && elem.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                return null == result ? "!=" === operator : !operator || (result += "", "=" === operator ? result === check : "!=" === operator ? result !== check : "^=" === operator ? check && 0 === result.indexOf(check) : "*=" === operator ? check && -1 < result.indexOf(check) : "$=" === operator ? check && result.slice(-check.length) === check : "~=" === operator ? -1 < (" " + result + " ").indexOf(check) : "|=" === operator && (result === check || result.slice(0, check.length + 1) === check + "-"))
                            }
                        },
                        CHILD: function(type, what, argument, first, last) {
                            var simple = "nth" !== type.slice(0, 3),
                                forward = "last" !== type.slice(-4),
                                ofType = "of-type" === what;
                            return 1 === first && 0 === last ? function(elem) {
                                return !!elem.parentNode
                            } : function(elem, context, xml) {
                                var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType;
                                if (parent) {
                                    if (simple) {
                                        for (; dir;) {
                                            for (node = elem; node = node[dir];)
                                                if (ofType ? node.nodeName.toLowerCase() === name : 1 === node.nodeType) return !1;
                                            start = dir = "only" === type && !start && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (start = [forward ? parent.firstChild : parent.lastChild], forward && useCache) {
                                        for (nodeIndex = (cache = (outerCache = parent[expando] || (parent[expando] = {}))[type] || [])[0] === dirruns && cache[1], diff = cache[0] === dirruns && cache[2], node = nodeIndex && parent.childNodes[nodeIndex]; node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop();)
                                            if (1 === node.nodeType && ++diff && node === elem) {
                                                outerCache[type] = [dirruns, nodeIndex, diff];
                                                break
                                            }
                                    } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) diff = cache[1];
                                    else
                                        for (;
                                            (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) && ((ofType ? node.nodeName.toLowerCase() !== name : 1 !== node.nodeType) || !++diff || (useCache && ((node[expando] || (node[expando] = {}))[type] = [dirruns, diff]), node !== elem)););
                                    return (diff -= last) === first || diff % first == 0 && 0 <= diff / first
                                }
                            }
                        },
                        PSEUDO: function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            return fn[expando] ? fn(argument) : 1 < fn.length ? (args = [pseudo, pseudo, "", argument], Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                for (var idx, matched = fn(seed, argument), i = matched.length; i--;) seed[idx = indexOf.call(seed, matched[i])] = !(matches[idx] = matched[i])
                            }) : function(elem) {
                                return fn(elem, 0, args)
                            }) : fn
                        }
                    },
                    pseudos: {
                        not: markFunction(function(selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                for (var elem, unmatched = matcher(seed, null, xml, []), i = seed.length; i--;)(elem = unmatched[i]) && (seed[i] = !(matches[i] = elem))
                            }) : function(elem, context, xml) {
                                return input[0] = elem, matcher(input, null, xml, results), !results.pop()
                            }
                        }),
                        has: markFunction(function(selector) {
                            return function(elem) {
                                return 0 < Sizzle(selector, elem).length
                            }
                        }),
                        contains: markFunction(function(text) {
                            return function(elem) {
                                return -1 < (elem.textContent || elem.innerText || getText(elem)).indexOf(text)
                            }
                        }),
                        lang: markFunction(function(lang) {
                            return ridentifier.test(lang || "") || Sizzle.error("unsupported lang: " + lang), lang = lang.replace(runescape, funescape).toLowerCase(),
                                function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) return (elemLang = elemLang.toLowerCase()) === lang || 0 === elemLang.indexOf(lang + "-")
                                    } while ((elem = elem.parentNode) && 1 === elem.nodeType);
                                    return !1
                                }
                        }),
                        target: function(elem) {
                            var hash = window.location && window.location.hash;
                            return hash && hash.slice(1) === elem.id
                        },
                        root: function(elem) {
                            return elem === docElem
                        },
                        focus: function(elem) {
                            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex)
                        },
                        enabled: function(elem) {
                            return !1 === elem.disabled
                        },
                        disabled: function(elem) {
                            return !0 === elem.disabled
                        },
                        checked: function(elem) {
                            var nodeName = elem.nodeName.toLowerCase();
                            return "input" === nodeName && !!elem.checked || "option" === nodeName && !!elem.selected
                        },
                        selected: function(elem) {
                            return elem.parentNode && elem.parentNode.selectedIndex, !0 === elem.selected
                        },
                        empty: function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                                if ("@" < elem.nodeName || 3 === elem.nodeType || 4 === elem.nodeType) return !1;
                            return !0
                        },
                        parent: function(elem) {
                            return !Expr.pseudos.empty(elem)
                        },
                        header: function(elem) {
                            return rheader.test(elem.nodeName)
                        },
                        input: function(elem) {
                            return rinputs.test(elem.nodeName)
                        },
                        button: function(elem) {
                            var name = elem.nodeName.toLowerCase();
                            return "input" === name && "button" === elem.type || "button" === name
                        },
                        text: function(elem) {
                            var attr;
                            return "input" === elem.nodeName.toLowerCase() && "text" === elem.type && (null == (attr = elem.getAttribute("type")) || attr.toLowerCase() === elem.type)
                        },
                        first: createPositionalPseudo(function() {
                            return [0]
                        }),
                        last: createPositionalPseudo(function(matchIndexes, length) {
                            return [length - 1]
                        }),
                        eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                            return [argument < 0 ? argument + length : argument]
                        }),
                        even: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        odd: createPositionalPseudo(function(matchIndexes, length) {
                            for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; 0 <= --i;) matchIndexes.push(i);
                            return matchIndexes
                        }),
                        gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                            for (var i = argument < 0 ? argument + length : argument; ++i < length;) matchIndexes.push(i);
                            return matchIndexes
                        })
                    }
                }).pseudos.nth = Expr.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) Expr.pseudos[i] = createInputPseudo(i);
            for (i in {
                    submit: !0,
                    reset: !0
                }) Expr.pseudos[i] = createButtonPseudo(i);

            function setFilters() {}

            function tokenize(selector, parseOnly) {
                var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                if (cached) return parseOnly ? 0 : cached.slice(0);
                for (soFar = selector, groups = [], preFilters = Expr.preFilter; soFar;) {
                    for (type in matched && !(match = rcomma.exec(soFar)) || (match && (soFar = soFar.slice(match[0].length) || soFar), groups.push(tokens = [])), matched = !1, (match = rcombinators.exec(soFar)) && (matched = match.shift(), tokens.push({
                            value: matched,
                            type: match[0].replace(rtrim, " ")
                        }), soFar = soFar.slice(matched.length)), Expr.filter) !(match = matchExpr[type].exec(soFar)) || preFilters[type] && !(match = preFilters[type](match)) || (matched = match.shift(), tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    }), soFar = soFar.slice(matched.length));
                    if (!matched) break
                }
                return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0)
            }

            function toSelector(tokens) {
                for (var i = 0, len = tokens.length, selector = ""; i < len; i++) selector += tokens[i].value;
                return selector
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    checkNonElements = base && "parentNode" === dir,
                    doneName = done++;
                return combinator.first ? function(elem, context, xml) {
                    for (; elem = elem[dir];)
                        if (1 === elem.nodeType || checkNonElements) return matcher(elem, context, xml)
                } : function(elem, context, xml) {
                    var data, cache, outerCache, dirkey = dirruns + " " + doneName;
                    if (xml) {
                        for (; elem = elem[dir];)
                            if ((1 === elem.nodeType || checkNonElements) && matcher(elem, context, xml)) return !0
                    } else
                        for (; elem = elem[dir];)
                            if (1 === elem.nodeType || checkNonElements)
                                if ((cache = (outerCache = elem[expando] || (elem[expando] = {}))[dir]) && cache[0] === dirkey) {
                                    if (!0 === (data = cache[1]) || data === cachedruns) return !0 === data
                                } else if ((cache = outerCache[dir] = [dirkey])[1] = matcher(elem, context, xml) || cachedruns, !0 === cache[1]) return !0
                }
            }

            function elementMatcher(matchers) {
                return 1 < matchers.length ? function(elem, context, xml) {
                    for (var i = matchers.length; i--;)
                        if (!matchers[i](elem, context, xml)) return !1;
                    return !0
                } : matchers[0]
            }

            function condense(unmatched, map, filter, context, xml) {
                for (var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = null != map; i < len; i++)(elem = unmatched[i]) && (filter && !filter(elem, context, xml) || (newUnmatched.push(elem), mapped && map.push(i)));
                return newUnmatched
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                return postFilter && !postFilter[expando] && (postFilter = setMatcher(postFilter)), postFinder && !postFinder[expando] && (postFinder = setMatcher(postFinder, postSelector)), markFunction(function(seed, results, context, xml) {
                    var temp, i, elem, preMap = [],
                        postMap = [],
                        preexisting = results.length,
                        elems = seed || function(selector, contexts, results) {
                            for (var i = 0, len = contexts.length; i < len; i++) Sizzle(selector, contexts[i], results);
                            return results
                        }(selector || "*", context.nodeType ? [context] : context, []),
                        matcherIn = !preFilter || !seed && selector ? elems : condense(elems, preMap, preFilter, context, xml),
                        matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                    if (matcher && matcher(matcherIn, matcherOut, context, xml), postFilter)
                        for (temp = condense(matcherOut, postMap), postFilter(temp, [], context, xml), i = temp.length; i--;)(elem = temp[i]) && (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                for (temp = [], i = matcherOut.length; i--;)(elem = matcherOut[i]) && temp.push(matcherIn[i] = elem);
                                postFinder(null, matcherOut = [], temp, xml)
                            }
                            for (i = matcherOut.length; i--;)(elem = matcherOut[i]) && -1 < (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) && (seed[temp] = !(results[temp] = elem))
                        }
                    } else matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut)
                })
            }

            function matcherFromTokens(tokens) {
                for (var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                        return elem === checkContext
                    }, implicitRelative, !0), matchAnyContext = addCombinator(function(elem) {
                        return -1 < indexOf.call(checkContext, elem)
                    }, implicitRelative, !0), matchers = [function(elem, context, xml) {
                        return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml))
                    }]; i < len; i++)
                    if (matcher = Expr.relative[tokens[i].type]) matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    else {
                        if ((matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches))[expando]) {
                            for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                            return setMatcher(1 < i && elementMatcher(matchers), 1 < i && toSelector(tokens.slice(0, i - 1).concat({
                                value: " " === tokens[i - 2].type ? "*" : ""
                            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens))
                        }
                        matchers.push(matcher)
                    } return elementMatcher(matchers)
            }
            setFilters.prototype = Expr.filters = Expr.pseudos, Expr.setFilters = new setFilters, compile = Sizzle.compile = function(selector, group) {
                var i, setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];
                if (!cached) {
                    for (group || (group = tokenize(selector)), i = group.length; i--;)(cached = matcherFromTokens(group[i]))[expando] ? setMatchers.push(cached) : elementMatchers.push(cached);
                    cached = compilerCache(selector, function(elementMatchers, setMatchers) {
                        var matcherCachedRuns = 0,
                            bySet = 0 < setMatchers.length,
                            byElement = 0 < elementMatchers.length,
                            superMatcher = function(seed, context, xml, results, expandContext) {
                                var elem, j, matcher, setMatched = [],
                                    matchedCount = 0,
                                    i = "0",
                                    unmatched = seed && [],
                                    outermost = null != expandContext,
                                    contextBackup = outermostContext,
                                    elems = seed || byElement && Expr.find.TAG("*", expandContext && context.parentNode || context),
                                    dirrunsUnique = dirruns += null == contextBackup ? 1 : Math.random() || .1;
                                for (outermost && (outermostContext = context !== document && context, cachedruns = matcherCachedRuns); null != (elem = elems[i]); i++) {
                                    if (byElement && elem) {
                                        for (j = 0; matcher = elementMatchers[j++];)
                                            if (matcher(elem, context, xml)) {
                                                results.push(elem);
                                                break
                                            } outermost && (dirruns = dirrunsUnique, cachedruns = ++matcherCachedRuns)
                                    }
                                    bySet && ((elem = !matcher && elem) && matchedCount--, seed && unmatched.push(elem))
                                }
                                if (matchedCount += i, bySet && i !== matchedCount) {
                                    for (j = 0; matcher = setMatchers[j++];) matcher(unmatched, setMatched, context, xml);
                                    if (seed) {
                                        if (0 < matchedCount)
                                            for (; i--;) unmatched[i] || setMatched[i] || (setMatched[i] = pop.call(results));
                                        setMatched = condense(setMatched)
                                    }
                                    push.apply(results, setMatched), outermost && !seed && 0 < setMatched.length && 1 < matchedCount + setMatchers.length && Sizzle.uniqueSort(results)
                                }
                                return outermost && (dirruns = dirrunsUnique, outermostContext = contextBackup), unmatched
                            };
                        return bySet ? markFunction(superMatcher) : superMatcher
                    }(elementMatchers, setMatchers))
                }
                return cached
            }, support.sortStable = expando.split("").sort(sortOrder).join("") === expando, support.detectDuplicates = hasDuplicate, setDocument(), support.sortDetached = assert(function(div1) {
                return 1 & div1.compareDocumentPosition(document.createElement("div"))
            }), assert(function(div) {
                return div.innerHTML = "<a href='#'></a>", "#" === div.firstChild.getAttribute("href")
            }) || addHandle("type|href|height|width", function(elem, name, isXML) {
                if (!isXML) return elem.getAttribute(name, "type" === name.toLowerCase() ? 1 : 2)
            }), support.attributes && assert(function(div) {
                return div.innerHTML = "<input/>", div.firstChild.setAttribute("value", ""), "" === div.firstChild.getAttribute("value")
            }) || addHandle("value", function(elem, name, isXML) {
                if (!isXML && "input" === elem.nodeName.toLowerCase()) return elem.defaultValue
            }), assert(function(div) {
                return null == div.getAttribute("disabled")
            }) || addHandle(booleans, function(elem, name, isXML) {
                var val;
                if (!isXML) return (val = elem.getAttributeNode(name)) && val.specified ? val.value : !0 === elem[name] ? name.toLowerCase() : null
            }), jQuery.find = Sizzle, jQuery.expr = Sizzle.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = Sizzle.uniqueSort, jQuery.text = Sizzle.getText, jQuery.isXMLDoc = Sizzle.isXML, jQuery.contains = Sizzle.contains
        }(window);
    var optionsCache = {};
    jQuery.Callbacks = function(options) {
        options = "string" == typeof options ? optionsCache[options] || function(options) {
            var object = optionsCache[options] = {};
            return jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
                object[flag] = !0
            }), object
        }(options) : jQuery.extend({}, options);
        var firing, memory, _fired, firingLength, firingIndex, firingStart, list = [],
            stack = !options.once && [],
            fire = function fire(data) {
                for (memory = options.memory && data, _fired = !0, firingIndex = firingStart || 0, firingStart = 0, firingLength = list.length, firing = !0; list && firingIndex < firingLength; firingIndex++)
                    if (!1 === list[firingIndex].apply(data[0], data[1]) && options.stopOnFalse) {
                        memory = !1;
                        break
                    } firing = !1, list && (stack ? stack.length && fire(stack.shift()) : memory ? list = [] : self.disable())
            },
            self = {
                add: function() {
                    if (list) {
                        var start = list.length;
                        ! function add(args) {
                            jQuery.each(args, function(_, arg) {
                                var type = jQuery.type(arg);
                                "function" === type ? options.unique && self.has(arg) || list.push(arg) : arg && arg.length && "string" !== type && add(arg)
                            })
                        }(arguments), firing ? firingLength = list.length : memory && (firingStart = start, fire(memory))
                    }
                    return this
                },
                remove: function() {
                    return list && jQuery.each(arguments, function(_, arg) {
                        for (var index; - 1 < (index = jQuery.inArray(arg, list, index));) list.splice(index, 1), firing && (index <= firingLength && firingLength--, index <= firingIndex && firingIndex--)
                    }), this
                },
                has: function(fn) {
                    return fn ? -1 < jQuery.inArray(fn, list) : !(!list || !list.length)
                },
                empty: function() {
                    return list = [], firingLength = 0, this
                },
                disable: function() {
                    return list = stack = memory = undefined, this
                },
                disabled: function() {
                    return !list
                },
                lock: function() {
                    return stack = undefined, memory || self.disable(), this
                },
                locked: function() {
                    return !stack
                },
                fireWith: function(context, args) {
                    return !list || _fired && !stack || (args = [context, (args = args || []).slice ? args.slice() : args], firing ? stack.push(args) : fire(args)), this
                },
                fire: function() {
                    return self.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!_fired
                }
            };
        return self
    }, jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                    ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", jQuery.Callbacks("memory")]
                ],
                _state = "pending",
                _promise = {
                    state: function() {
                        return _state
                    },
                    always: function() {
                        return deferred.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var fns = arguments;
                        return jQuery.Deferred(function(newDefer) {
                            jQuery.each(tuples, function(i, tuple) {
                                var action = tuple[0],
                                    fn = jQuery.isFunction(fns[i]) && fns[i];
                                deferred[tuple[1]](function() {
                                    var returned = fn && fn.apply(this, arguments);
                                    returned && jQuery.isFunction(returned.promise) ? returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify) : newDefer[action + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments)
                                })
                            }), fns = null
                        }).promise()
                    },
                    promise: function(obj) {
                        return null != obj ? jQuery.extend(obj, _promise) : _promise
                    }
                },
                deferred = {};
            return _promise.pipe = _promise.then, jQuery.each(tuples, function(i, tuple) {
                var list = tuple[2],
                    stateString = tuple[3];
                _promise[tuple[1]] = list.add, stateString && list.add(function() {
                    _state = stateString
                }, tuples[1 ^ i][2].disable, tuples[2][2].lock), deferred[tuple[0]] = function() {
                    return deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments), this
                }, deferred[tuple[0] + "With"] = list.fireWith
            }), _promise.promise(deferred), func && func.call(deferred, deferred), deferred
        },
        when: function(subordinate) {
            var progressValues, progressContexts, resolveContexts, i = 0,
                resolveValues = core_slice.call(arguments),
                length = resolveValues.length,
                remaining = 1 !== length || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
                deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
                updateFunc = function(i, contexts, values) {
                    return function(value) {
                        contexts[i] = this, values[i] = 1 < arguments.length ? core_slice.call(arguments) : value, values === progressValues ? deferred.notifyWith(contexts, values) : --remaining || deferred.resolveWith(contexts, values)
                    }
                };
            if (1 < length)
                for (progressValues = new Array(length), progressContexts = new Array(length), resolveContexts = new Array(length); i < length; i++) resolveValues[i] && jQuery.isFunction(resolveValues[i].promise) ? resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues)) : --remaining;
            return remaining || deferred.resolveWith(resolveContexts, resolveValues), deferred.promise()
        }
    }), jQuery.support = function(support) {
        var all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement("div");
        if (div.setAttribute("className", "t"), div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", all = div.getElementsByTagName("*") || [], !(a = div.getElementsByTagName("a")[0]) || !a.style || !all.length) return support;
        opt = (select = document.createElement("select")).appendChild(document.createElement("option")), input = div.getElementsByTagName("input")[0], a.style.cssText = "top:1px;float:left;opacity:.5", support.getSetAttribute = "t" !== div.className, support.leadingWhitespace = 3 === div.firstChild.nodeType, support.tbody = !div.getElementsByTagName("tbody").length, support.htmlSerialize = !!div.getElementsByTagName("link").length, support.style = /top/.test(a.getAttribute("style")), support.hrefNormalized = "/a" === a.getAttribute("href"), support.opacity = /^0.5/.test(a.style.opacity), support.cssFloat = !!a.style.cssFloat, support.checkOn = !!input.value, support.optSelected = opt.selected, support.enctype = !!document.createElement("form").enctype, support.html5Clone = "<:nav></:nav>" !== document.createElement("nav").cloneNode(!0).outerHTML, support.inlineBlockNeedsLayout = !1, support.shrinkWrapBlocks = !1, support.pixelPosition = !1, support.deleteExpando = !0, support.noCloneEvent = !0, support.reliableMarginRight = !0, support.boxSizingReliable = !0, input.checked = !0, support.noCloneChecked = input.cloneNode(!0).checked, select.disabled = !0, support.optDisabled = !opt.disabled;
        try {
            delete div.test
        } catch (e) {
            support.deleteExpando = !1
        }
        for (i in (input = document.createElement("input")).setAttribute("value", ""), support.input = "" === input.getAttribute("value"), input.value = "t", input.setAttribute("type", "radio"), support.radioValue = "t" === input.value, input.setAttribute("checked", "t"), input.setAttribute("name", "t"), (fragment = document.createDocumentFragment()).appendChild(input), support.appendChecked = input.checked, support.checkClone = fragment.cloneNode(!0).cloneNode(!0).lastChild.checked, div.attachEvent && (div.attachEvent("onclick", function() {
                support.noCloneEvent = !1
            }), div.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) div.setAttribute(eventName = "on" + i, "t"), support[i + "Bubbles"] = eventName in window || !1 === div.attributes[eventName].expando;
        for (i in div.style.backgroundClip = "content-box", div.cloneNode(!0).style.backgroundClip = "", support.clearCloneStyle = "content-box" === div.style.backgroundClip, jQuery(support)) break;
        return support.ownLast = "0" !== i, jQuery(function() {
            var container, marginDiv, tds, divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                body = document.getElementsByTagName("body")[0];
            body && ((container = document.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", body.appendChild(container).appendChild(div), div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (tds = div.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", isSupported = 0 === tds[0].offsetHeight, tds[0].style.display = "", tds[1].style.display = "none", support.reliableHiddenOffsets = isSupported && 0 === tds[0].offsetHeight, div.innerHTML = "", div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", jQuery.swap(body, null != body.style.zoom ? {
                zoom: 1
            } : {}, function() {
                support.boxSizing = 4 === div.offsetWidth
            }), window.getComputedStyle && (support.pixelPosition = "1%" !== (window.getComputedStyle(div, null) || {}).top, support.boxSizingReliable = "4px" === (window.getComputedStyle(div, null) || {
                width: "4px"
            }).width, (marginDiv = div.appendChild(document.createElement("div"))).style.cssText = div.style.cssText = divReset, marginDiv.style.marginRight = marginDiv.style.width = "0", div.style.width = "1px", support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight)), _typeof(div.style.zoom) !== core_strundefined && (div.innerHTML = "", div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1", support.inlineBlockNeedsLayout = 3 === div.offsetWidth, div.style.display = "block", div.innerHTML = "<div></div>", div.firstChild.style.width = "5px", support.shrinkWrapBlocks = 3 !== div.offsetWidth, support.inlineBlockNeedsLayout && (body.style.zoom = 1)), body.removeChild(container), container = div = tds = marginDiv = null)
        }), all = select = fragment = opt = a = input = null, support
    }({});
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        rmultiDash = /([A-Z])/g;

    function internalData(elem, name, data, pvt) {
        if (jQuery.acceptData(elem)) {
            var ret, thisCache, internalKey = jQuery.expando,
                isNode = elem.nodeType,
                cache = isNode ? jQuery.cache : elem,
                id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
            if (id && cache[id] && (pvt || cache[id].data) || data !== undefined || "string" != typeof name) return id || (id = isNode ? elem[internalKey] = core_deletedIds.pop() || jQuery.guid++ : internalKey), cache[id] || (cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            }), "object" !== _typeof(name) && "function" != typeof name || (pvt ? cache[id] = jQuery.extend(cache[id], name) : cache[id].data = jQuery.extend(cache[id].data, name)), thisCache = cache[id], pvt || (thisCache.data || (thisCache.data = {}), thisCache = thisCache.data), data !== undefined && (thisCache[jQuery.camelCase(name)] = data), "string" == typeof name ? null == (ret = thisCache[name]) && (ret = thisCache[jQuery.camelCase(name)]) : ret = thisCache, ret
        }
    }

    function internalRemoveData(elem, name, pvt) {
        if (jQuery.acceptData(elem)) {
            var thisCache, i, isNode = elem.nodeType,
                cache = isNode ? jQuery.cache : elem,
                id = isNode ? elem[jQuery.expando] : jQuery.expando;
            if (cache[id]) {
                if (name && (thisCache = pvt ? cache[id] : cache[id].data)) {
                    i = (name = jQuery.isArray(name) ? name.concat(jQuery.map(name, jQuery.camelCase)) : name in thisCache ? [name] : (name = jQuery.camelCase(name)) in thisCache ? [name] : name.split(" ")).length;
                    for (; i--;) delete thisCache[name[i]];
                    if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) return
                }(pvt || (delete cache[id].data, isEmptyDataObject(cache[id]))) && (isNode ? jQuery.cleanData([elem], !0) : jQuery.support.deleteExpando || cache != cache.window ? delete cache[id] : cache[id] = null)
            }
        }
    }

    function dataAttr(elem, key, data) {
        if (data === undefined && 1 === elem.nodeType) {
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            if ("string" == typeof(data = elem.getAttribute(name))) {
                try {
                    data = "true" === data || "false" !== data && ("null" === data ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data)
                } catch (e) {}
                jQuery.data(elem, key, data)
            } else data = undefined
        }
        return data
    }

    function isEmptyDataObject(obj) {
        var name;
        for (name in obj)
            if (("data" !== name || !jQuery.isEmptyObject(obj[name])) && "toJSON" !== name) return !1;
        return !0
    }
    jQuery.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(elem) {
            return !!(elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando]) && !isEmptyDataObject(elem)
        },
        data: function(elem, name, _data) {
            return internalData(elem, name, _data)
        },
        removeData: function(elem, name) {
            return internalRemoveData(elem, name)
        },
        _data: function(elem, name, data) {
            return internalData(elem, name, data, !0)
        },
        _removeData: function(elem, name) {
            return internalRemoveData(elem, name, !0)
        },
        acceptData: function(elem) {
            if (elem.nodeType && 1 !== elem.nodeType && 9 !== elem.nodeType) return !1;
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            return !noData || !0 !== noData && elem.getAttribute("classid") === noData
        }
    }), jQuery.fn.extend({
        data: function(key, value) {
            var attrs, name, data = null,
                i = 0,
                elem = this[0];
            if (key !== undefined) return "object" === _typeof(key) ? this.each(function() {
                jQuery.data(this, key)
            }) : 1 < arguments.length ? this.each(function() {
                jQuery.data(this, key, value)
            }) : elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
            if (this.length && (data = jQuery.data(elem), 1 === elem.nodeType && !jQuery._data(elem, "parsedAttrs"))) {
                for (attrs = elem.attributes; i < attrs.length; i++) 0 === (name = attrs[i].name).indexOf("data-") && dataAttr(elem, name = jQuery.camelCase(name.slice(5)), data[name]);
                jQuery._data(elem, "parsedAttrs", !0)
            }
            return data
        },
        removeData: function(key) {
            return this.each(function() {
                jQuery.removeData(this, key)
            })
        }
    }), jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) return type = (type || "fx") + "queue", queue = jQuery._data(elem, type), data && (!queue || jQuery.isArray(data) ? queue = jQuery._data(elem, type, jQuery.makeArray(data)) : queue.push(data)), queue || []
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type);
            "inprogress" === fn && (fn = queue.shift(), startLength--), fn && ("fx" === type && queue.unshift("inprogress"), delete hooks.stop, fn.call(elem, function() {
                jQuery.dequeue(elem, type)
            }, hooks)), !startLength && hooks && hooks.empty.fire()
        },
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    jQuery._removeData(elem, type + "queue"), jQuery._removeData(elem, key)
                })
            })
        }
    }), jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            return "string" != typeof type && (data = type, type = "fx", setter--), arguments.length < setter ? jQuery.queue(this[0], type) : data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                jQuery._queueHooks(this, type), "fx" === type && "inprogress" !== queue[0] && jQuery.dequeue(this, type)
            })
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type)
            })
        },
        delay: function(time, type) {
            return time = jQuery.fx && jQuery.fx.speeds[time] || time, type = type || "fx", this.queue(type, function(next, hooks) {
                var timeout = setTimeout(next, time);
                hooks.stop = function() {
                    clearTimeout(timeout)
                }
            })
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", [])
        },
        promise: function(type, obj) {
            var tmp, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() {
                    --count || defer.resolveWith(elements, [elements])
                };
            for ("string" != typeof type && (obj = type, type = undefined), type = type || "fx"; i--;)(tmp = jQuery._data(elements[i], type + "queueHooks")) && tmp.empty && (count++, tmp.empty.add(resolve));
            return resolve(), defer.promise(obj)
        }
    });
    var nodeHook, boolHook, rclass = /[\t\r\n\f]/g,
        rreturn = /\r/g,
        rfocusable = /^(?:input|select|textarea|button|object)$/i,
        rclickable = /^(?:a|area)$/i,
        ruseDefault = /^(?:checked|selected)$/i,
        getSetAttribute = jQuery.support.getSetAttribute,
        getSetInput = jQuery.support.input;
    jQuery.fn.extend({
        attr: function(name, value) {
            return jQuery.access(this, jQuery.attr, name, value, 1 < arguments.length)
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name)
            })
        },
        prop: function(name, value) {
            return jQuery.access(this, jQuery.prop, name, value, 1 < arguments.length)
        },
        removeProp: function(name) {
            return name = jQuery.propFix[name] || name, this.each(function() {
                try {
                    this[name] = undefined, delete this[name]
                } catch (e) {}
            })
        },
        addClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0,
                len = this.length,
                proceed = "string" == typeof value && value;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).addClass(value.call(this, j, this.className))
            });
            if (proceed)
                for (classes = (value || "").match(core_rnotwhite) || []; i < len; i++)
                    if (cur = 1 === (elem = this[i]).nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ")) {
                        for (j = 0; clazz = classes[j++];) cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
                        elem.className = jQuery.trim(cur)
                    } return this
        },
        removeClass: function(value) {
            var classes, elem, cur, clazz, j, i = 0,
                len = this.length,
                proceed = 0 === arguments.length || "string" == typeof value && value;
            if (jQuery.isFunction(value)) return this.each(function(j) {
                jQuery(this).removeClass(value.call(this, j, this.className))
            });
            if (proceed)
                for (classes = (value || "").match(core_rnotwhite) || []; i < len; i++)
                    if (cur = 1 === (elem = this[i]).nodeType && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "")) {
                        for (j = 0; clazz = classes[j++];)
                            for (; 0 <= cur.indexOf(" " + clazz + " ");) cur = cur.replace(" " + clazz + " ", " ");
                        elem.className = value ? jQuery.trim(cur) : ""
                    } return this
        },
        toggleClass: function(value, stateVal) {
            var type = _typeof(value);
            return "boolean" == typeof stateVal && "string" === type ? stateVal ? this.addClass(value) : this.removeClass(value) : jQuery.isFunction(value) ? this.each(function(i) {
                jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal)
            }) : this.each(function() {
                if ("string" === type)
                    for (var className, i = 0, self = jQuery(this), classNames = value.match(core_rnotwhite) || []; className = classNames[i++];) self.hasClass(className) ? self.removeClass(className) : self.addClass(className);
                else type !== core_strundefined && "boolean" !== type || (this.className && jQuery._data(this, "__className__", this.className), this.className = this.className || !1 === value ? "" : jQuery._data(this, "__className__") || "")
            })
        },
        hasClass: function(selector) {
            for (var className = " " + selector + " ", i = 0, l = this.length; i < l; i++)
                if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(rclass, " ").indexOf(className)) return !0;
            return !1
        },
        val: function(value) {
            var ret, hooks, isFunction, elem = this[0];
            return arguments.length ? (isFunction = jQuery.isFunction(value), this.each(function(i) {
                var val;
                1 === this.nodeType && (null == (val = isFunction ? value.call(this, i, jQuery(this).val()) : value) ? val = "" : "number" == typeof val ? val += "" : jQuery.isArray(val) && (val = jQuery.map(val, function(value) {
                    return null == value ? "" : value + ""
                })), (hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]) && "set" in hooks && hooks.set(this, val, "value") !== undefined || (this.value = val))
            })) : elem ? (hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]) && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined ? ret : "string" == typeof(ret = elem.value) ? ret.replace(rreturn, "") : null == ret ? "" : ret : void 0
        }
    }), jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return null != val ? val : elem.text
                }
            },
            select: {
                get: function(elem) {
                    for (var value, option, options = elem.options, index = elem.selectedIndex, one = "select-one" === elem.type || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0; i < max; i++)
                        if (((option = options[i]).selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : null === option.getAttribute("disabled")) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            if (value = jQuery(option).val(), one) return value;
                            values.push(value)
                        } return values
                },
                set: function(elem, value) {
                    for (var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length; i--;)((option = options[i]).selected = 0 <= jQuery.inArray(jQuery(option).val(), values)) && (optionSet = !0);
                    return optionSet || (elem.selectedIndex = -1), values
                }
            }
        },
        attr: function(elem, name, value) {
            var hooks, ret, nType = elem.nodeType;
            if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return _typeof(elem.getAttribute) === core_strundefined ? jQuery.prop(elem, name, value) : (1 === nType && jQuery.isXMLDoc(elem) || (name = name.toLowerCase(), hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook)), value === undefined ? hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : null == (ret = jQuery.find.attr(elem, name)) ? undefined : ret : null !== value ? hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : (elem.setAttribute(name, value + ""), value) : void jQuery.removeAttr(elem, name))
        },
        removeAttr: function(elem, value) {
            var name, propName, i = 0,
                attrNames = value && value.match(core_rnotwhite);
            if (attrNames && 1 === elem.nodeType)
                for (; name = attrNames[i++];) propName = jQuery.propFix[name] || name, jQuery.expr.match.bool.test(name) ? getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem[propName] = !1 : elem[jQuery.camelCase("default-" + name)] = elem[propName] = !1 : jQuery.attr(elem, name, ""), elem.removeAttribute(getSetAttribute ? name : propName)
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!jQuery.support.radioValue && "radio" === value && jQuery.nodeName(elem, "input")) {
                        var val = elem.value;
                        return elem.setAttribute("type", value), val && (elem.value = val), value
                    }
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (elem && 3 !== nType && 8 !== nType && 2 !== nType) return (1 !== nType || !jQuery.isXMLDoc(elem)) && (name = jQuery.propFix[name] || name, hooks = jQuery.propHooks[name]), value !== undefined ? hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value : hooks && "get" in hooks && null !== (ret = hooks.get(elem, name)) ? ret : elem[name]
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1
                }
            }
        }
    }), boolHook = {
        set: function(elem, value, name) {
            return !1 === value ? jQuery.removeAttr(elem, name) : getSetInput && getSetAttribute || !ruseDefault.test(name) ? elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name) : elem[jQuery.camelCase("default-" + name)] = elem[name] = !0, name
        }
    }, jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? function(elem, name, isXML) {
            var fn = jQuery.expr.attrHandle[name],
                ret = isXML ? undefined : (jQuery.expr.attrHandle[name] = undefined) != getter(elem, name, isXML) ? name.toLowerCase() : null;
            return jQuery.expr.attrHandle[name] = fn, ret
        } : function(elem, name, isXML) {
            return isXML ? undefined : elem[jQuery.camelCase("default-" + name)] ? name.toLowerCase() : null
        }
    }), getSetInput && getSetAttribute || (jQuery.attrHooks.value = {
        set: function(elem, value, name) {
            if (!jQuery.nodeName(elem, "input")) return nodeHook && nodeHook.set(elem, value, name);
            elem.defaultValue = value
        }
    }), getSetAttribute || (nodeHook = {
        set: function(elem, value, name) {
            var ret = elem.getAttributeNode(name);
            return ret || elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name)), ret.value = value += "", "value" === name || value === elem.getAttribute(name) ? value : undefined
        }
    }, jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = function(elem, name, isXML) {
        var ret;
        return isXML ? undefined : (ret = elem.getAttributeNode(name)) && "" !== ret.value ? ret.value : null
    }, jQuery.valHooks.button = {
        get: function(elem, name) {
            var ret = elem.getAttributeNode(name);
            return ret && ret.specified ? ret.value : undefined
        },
        set: nodeHook.set
    }, jQuery.attrHooks.contenteditable = {
        set: function(elem, value, name) {
            nodeHook.set(elem, "" !== value && value, name)
        }
    }, jQuery.each(["width", "height"], function(i, name) {
        jQuery.attrHooks[name] = {
            set: function(elem, value) {
                if ("" === value) return elem.setAttribute(name, "auto"), value
            }
        }
    })), jQuery.support.hrefNormalized || jQuery.each(["href", "src"], function(i, name) {
        jQuery.propHooks[name] = {
            get: function(elem) {
                return elem.getAttribute(name, 4)
            }
        }
    }), jQuery.support.style || (jQuery.attrHooks.style = {
        get: function(elem) {
            return elem.style.cssText || undefined
        },
        set: function(elem, value) {
            return elem.style.cssText = value + ""
        }
    }), jQuery.support.optSelected || (jQuery.propHooks.selected = {
        get: function(elem) {
            var parent = elem.parentNode;
            return parent && (parent.selectedIndex, parent.parentNode && parent.parentNode.selectedIndex), null
        }
    }), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    }), jQuery.support.enctype || (jQuery.propFix.enctype = "encoding"), jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (jQuery.isArray(value)) return elem.checked = 0 <= jQuery.inArray(jQuery(elem).val(), value)
            }
        }, jQuery.support.checkOn || (jQuery.valHooks[this].get = function(elem) {
            return null === elem.getAttribute("value") ? "on" : elem.value
        })
    });
    var rformElems = /^(?:input|select|textarea)$/i,
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|contextmenu)|click/,
        rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

    function returnTrue() {
        return !0
    }

    function returnFalse() {
        return !1
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (err) {}
    }
    jQuery.event = {
        global: {},
        add: function(elem, types, handler, data, selector) {
            var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
            if (elemData) {
                for (handler.handler && (handler = (handleObjIn = handler).handler, selector = handleObjIn.selector), handler.guid || (handler.guid = jQuery.guid++), (events = elemData.events) || (events = elemData.events = {}), (eventHandle = elemData.handle) || ((eventHandle = elemData.handle = function(e) {
                        return _typeof(jQuery) === core_strundefined || e && jQuery.event.triggered === e.type ? undefined : jQuery.event.dispatch.apply(eventHandle.elem, arguments)
                    }).elem = elem), t = (types = (types || "").match(core_rnotwhite) || [""]).length; t--;) type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1], namespaces = (tmp[2] || "").split(".").sort(), type && (special = jQuery.event.special[type] || {}, type = (selector ? special.delegateType : special.bindType) || type, special = jQuery.event.special[type] || {}, handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn), (handlers = events[type]) || ((handlers = events[type] = []).delegateCount = 0, special.setup && !1 !== special.setup.call(elem, data, namespaces, eventHandle) || (elem.addEventListener ? elem.addEventListener(type, eventHandle, !1) : elem.attachEvent && elem.attachEvent("on" + type, eventHandle))), special.add && (special.add.call(elem, handleObj), handleObj.handler.guid || (handleObj.handler.guid = handler.guid)), selector ? handlers.splice(handlers.delegateCount++, 0, handleObj) : handlers.push(handleObj), jQuery.event.global[type] = !0);
                elem = null
            }
        },
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
            if (elemData && (events = elemData.events)) {
                for (t = (types = (types || "").match(core_rnotwhite) || [""]).length; t--;)
                    if (type = origType = (tmp = rtypenamespace.exec(types[t]) || [])[1], namespaces = (tmp[2] || "").split(".").sort(), type) {
                        for (special = jQuery.event.special[type] || {}, handlers = events[type = (selector ? special.delegateType : special.bindType) || type] || [], tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"), origCount = j = handlers.length; j--;) handleObj = handlers[j], !mappedTypes && origType !== handleObj.origType || handler && handler.guid !== handleObj.guid || tmp && !tmp.test(handleObj.namespace) || selector && selector !== handleObj.selector && ("**" !== selector || !handleObj.selector) || (handlers.splice(j, 1), handleObj.selector && handlers.delegateCount--, special.remove && special.remove.call(elem, handleObj));
                        origCount && !handlers.length && (special.teardown && !1 !== special.teardown.call(elem, namespaces, elemData.handle) || jQuery.removeEvent(elem, type, elemData.handle), delete events[type])
                    } else
                        for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, !0);
                jQuery.isEmptyObject(events) && (delete elemData.handle, jQuery._removeData(elem, "events"))
            }
        },
        trigger: function(event, data, elem, onlyHandlers) {
            var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document],
                type = core_hasOwn.call(event, "type") ? event.type : event,
                namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            if (cur = tmp = elem = elem || document, 3 !== elem.nodeType && 8 !== elem.nodeType && !rfocusMorph.test(type + jQuery.event.triggered) && (0 <= type.indexOf(".") && (type = (namespaces = type.split(".")).shift(), namespaces.sort()), ontype = type.indexOf(":") < 0 && "on" + type, (event = event[jQuery.expando] ? event : new jQuery.Event(type, "object" === _typeof(event) && event)).isTrigger = onlyHandlers ? 2 : 3, event.namespace = namespaces.join("."), event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, event.result = undefined, event.target || (event.target = elem), data = null == data ? [event] : jQuery.makeArray(data, [event]), special = jQuery.event.special[type] || {}, onlyHandlers || !special.trigger || !1 !== special.trigger.apply(elem, data))) {
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    for (bubbleType = special.delegateType || type, rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode); cur; cur = cur.parentNode) eventPath.push(cur), tmp = cur;
                    tmp === (elem.ownerDocument || document) && eventPath.push(tmp.defaultView || tmp.parentWindow || window)
                }
                for (i = 0;
                    (cur = eventPath[i++]) && !event.isPropagationStopped();) event.type = 1 < i ? bubbleType : special.bindType || type, (handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle")) && handle.apply(cur, data), (handle = ontype && cur[ontype]) && jQuery.acceptData(cur) && handle.apply && !1 === handle.apply(cur, data) && event.preventDefault();
                if (event.type = type, !onlyHandlers && !event.isDefaultPrevented() && (!special._default || !1 === special._default.apply(eventPath.pop(), data)) && jQuery.acceptData(elem) && ontype && elem[type] && !jQuery.isWindow(elem)) {
                    (tmp = elem[ontype]) && (elem[ontype] = null), jQuery.event.triggered = type;
                    try {
                        elem[type]()
                    } catch (e) {}
                    jQuery.event.triggered = undefined, tmp && (elem[ontype] = tmp)
                }
                return event.result
            }
        },
        dispatch: function(event) {
            event = jQuery.event.fix(event);
            var i, ret, handleObj, matched, j, handlerQueue, args = core_slice.call(arguments),
                handlers = (jQuery._data(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};
            if ((args[0] = event).delegateTarget = this, !special.preDispatch || !1 !== special.preDispatch.call(this, event)) {
                for (handlerQueue = jQuery.event.handlers.call(this, event, handlers), i = 0;
                    (matched = handlerQueue[i++]) && !event.isPropagationStopped();)
                    for (event.currentTarget = matched.elem, j = 0;
                        (handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped();) event.namespace_re && !event.namespace_re.test(handleObj.namespace) || (event.handleObj = handleObj, event.data = handleObj.data, (ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args)) !== undefined && !1 === (event.result = ret) && (event.preventDefault(), event.stopPropagation()));
                return special.postDispatch && special.postDispatch.call(this, event), event.result
            }
        },
        handlers: function(event, _handlers) {
            var sel, handleObj, matches, i, handlerQueue = [],
                delegateCount = _handlers.delegateCount,
                cur = event.target;
            if (delegateCount && cur.nodeType && (!event.button || "click" !== event.type))
                for (; cur != this; cur = cur.parentNode || this)
                    if (1 === cur.nodeType && (!0 !== cur.disabled || "click" !== event.type)) {
                        for (matches = [], i = 0; i < delegateCount; i++) matches[sel = (handleObj = _handlers[i]).selector + " "] === undefined && (matches[sel] = handleObj.needsContext ? 0 <= jQuery(sel, this).index(cur) : jQuery.find(sel, this, null, [cur]).length), matches[sel] && matches.push(handleObj);
                        matches.length && handlerQueue.push({
                            elem: cur,
                            handlers: matches
                        })
                    } return delegateCount < _handlers.length && handlerQueue.push({
                elem: this,
                handlers: _handlers.slice(delegateCount)
            }), handlerQueue
        },
        fix: function(event) {
            if (event[jQuery.expando]) return event;
            var i, prop, copy, type = event.type,
                originalEvent = event,
                fixHook = this.fixHooks[type];
            for (fixHook || (this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}), copy = fixHook.props ? this.props.concat(fixHook.props) : this.props, event = new jQuery.Event(originalEvent), i = copy.length; i--;) event[prop = copy[i]] = originalEvent[prop];
            return event.target || (event.target = originalEvent.srcElement || document), 3 === event.target.nodeType && (event.target = event.target.parentNode), event.metaKey = !!event.metaKey, fixHook.filter ? fixHook.filter(event, originalEvent) : event
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(event, original) {
                return null == event.which && (event.which = null != original.charCode ? original.charCode : original.keyCode), event
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(event, original) {
                var body, eventDoc, doc, button = original.button,
                    fromElement = original.fromElement;
                return null == event.pageX && null != original.clientX && (doc = (eventDoc = event.target.ownerDocument || document).documentElement, body = eventDoc.body, event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)), !event.relatedTarget && fromElement && (event.relatedTarget = fromElement === event.target ? original.toElement : fromElement), event.which || button === undefined || (event.which = 1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0), event
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== safeActiveElement() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === safeActiveElement() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (jQuery.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(event) {
                    return jQuery.nodeName(event.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    event.result !== undefined && (event.originalEvent.returnValue = event.result)
                }
            }
        },
        simulate: function(type, elem, event, bubble) {
            var e = jQuery.extend(new jQuery.Event, event, {
                type: type,
                isSimulated: !0,
                originalEvent: {}
            });
            bubble ? jQuery.event.trigger(e, null, elem) : jQuery.event.dispatch.call(elem, e), e.isDefaultPrevented() && event.preventDefault()
        }
    }, jQuery.removeEvent = document.removeEventListener ? function(elem, type, handle) {
        elem.removeEventListener && elem.removeEventListener(type, handle, !1)
    } : function(elem, type, handle) {
        var name = "on" + type;
        elem.detachEvent && (_typeof(elem[name]) === core_strundefined && (elem[name] = null), elem.detachEvent(name, handle))
    }, jQuery.Event = function(src, props) {
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        src && src.type ? (this.originalEvent = src, this.type = src.type, this.isDefaultPrevented = src.defaultPrevented || !1 === src.returnValue || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse) : this.type = src, props && jQuery.extend(this, props), this.timeStamp = src && src.timeStamp || jQuery.now(), this[jQuery.expando] = !0
    }, jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue, this.stopPropagation()
        }
    }, jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, related = event.relatedTarget,
                    handleObj = event.handleObj;
                return related && (related === this || jQuery.contains(this, related)) || (event.type = handleObj.origType, ret = handleObj.handler.apply(this, arguments), event.type = fix), ret
            }
        }
    }), jQuery.support.submitBubbles || (jQuery.event.special.submit = {
        setup: function() {
            if (jQuery.nodeName(this, "form")) return !1;
            jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                var elem = e.target,
                    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                form && !jQuery._data(form, "submitBubbles") && (jQuery.event.add(form, "submit._submit", function(event) {
                    event._submit_bubble = !0
                }), jQuery._data(form, "submitBubbles", !0))
            })
        },
        postDispatch: function(event) {
            event._submit_bubble && (delete event._submit_bubble, this.parentNode && !event.isTrigger && jQuery.event.simulate("submit", this.parentNode, event, !0))
        },
        teardown: function() {
            if (jQuery.nodeName(this, "form")) return !1;
            jQuery.event.remove(this, "._submit")
        }
    }), jQuery.support.changeBubbles || (jQuery.event.special.change = {
        setup: function() {
            if (rformElems.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (jQuery.event.add(this, "propertychange._change", function(event) {
                "checked" === event.originalEvent.propertyName && (this._just_changed = !0)
            }), jQuery.event.add(this, "click._change", function(event) {
                this._just_changed && !event.isTrigger && (this._just_changed = !1), jQuery.event.simulate("change", this, event, !0)
            })), !1;
            jQuery.event.add(this, "beforeactivate._change", function(e) {
                var elem = e.target;
                rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles") && (jQuery.event.add(elem, "change._change", function(event) {
                    !this.parentNode || event.isSimulated || event.isTrigger || jQuery.event.simulate("change", this.parentNode, event, !0)
                }), jQuery._data(elem, "changeBubbles", !0))
            })
        },
        handle: function(event) {
            var elem = event.target;
            if (this !== elem || event.isSimulated || event.isTrigger || "radio" !== elem.type && "checkbox" !== elem.type) return event.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return jQuery.event.remove(this, "._change"), !rformElems.test(this.nodeName)
        }
    }), jQuery.support.focusinBubbles || jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        var attaches = 0,
            handler = function(event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), !0)
            };
        jQuery.event.special[fix] = {
            setup: function() {
                0 == attaches++ && document.addEventListener(orig, handler, !0)
            },
            teardown: function() {
                0 == --attaches && document.removeEventListener(orig, handler, !0)
            }
        }
    }), jQuery.fn.extend({
        on: function(types, selector, data, fn, one) {
            var type, origFn;
            if ("object" === _typeof(types)) {
                for (type in "string" != typeof selector && (data = data || selector, selector = undefined), types) this.on(type, selector, data, types[type], one);
                return this
            }
            if (null == data && null == fn ? (fn = selector, data = selector = undefined) : null == fn && ("string" == typeof selector ? (fn = data, data = undefined) : (fn = data, data = selector, selector = undefined)), !1 === fn) fn = returnFalse;
            else if (!fn) return this;
            return 1 === one && (origFn = fn, (fn = function(event) {
                return jQuery().off(event), origFn.apply(this, arguments)
            }).guid = origFn.guid || (origFn.guid = jQuery.guid++)), this.each(function() {
                jQuery.event.add(this, types, fn, data, selector)
            })
        },
        one: function(types, selector, data, fn) {
            return this.on(types, selector, data, fn, 1)
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) return handleObj = types.handleObj, jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler), this;
            if ("object" !== _typeof(types)) return !1 !== selector && "function" != typeof selector || (fn = selector, selector = undefined), !1 === fn && (fn = returnFalse), this.each(function() {
                jQuery.event.remove(this, types, fn, selector)
            });
            for (type in types) this.off(type, selector, types[type]);
            return this
        },
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this)
            })
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, !0)
        }
    });
    var isSimple = /^.[^:#\[\.,]*$/,
        rparentsprev = /^(?:parents|prev(?:Until|All))/,
        rneedsContext = jQuery.expr.match.needsContext,
        guaranteedUnique = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function sibling(cur, dir) {
        for (;
            (cur = cur[dir]) && 1 !== cur.nodeType;);
        return cur
    }

    function winnow(elements, qualifier, not) {
        if (jQuery.isFunction(qualifier)) return jQuery.grep(elements, function(elem, i) {
            return !!qualifier.call(elem, i, elem) !== not
        });
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not
        });
        if ("string" == typeof qualifier) {
            if (isSimple.test(qualifier)) return jQuery.filter(qualifier, elements, not);
            qualifier = jQuery.filter(qualifier, elements)
        }
        return jQuery.grep(elements, function(elem) {
            return 0 <= jQuery.inArray(elem, qualifier) !== not
        })
    }

    function createSafeFragment(document) {
        var list = nodeNames.split("|"),
            safeFrag = document.createDocumentFragment();
        if (safeFrag.createElement)
            for (; list.length;) safeFrag.createElement(list.pop());
        return safeFrag
    }
    jQuery.fn.extend({
        find: function(selector) {
            var i, ret = [],
                self = this,
                len = self.length;
            if ("string" != typeof selector) return this.pushStack(jQuery(selector).filter(function() {
                for (i = 0; i < len; i++)
                    if (jQuery.contains(self[i], this)) return !0
            }));
            for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
            return (ret = this.pushStack(1 < len ? jQuery.unique(ret) : ret)).selector = this.selector ? this.selector + " " + selector : selector, ret
        },
        has: function(target) {
            var i, targets = jQuery(target, this),
                len = targets.length;
            return this.filter(function() {
                for (i = 0; i < len; i++)
                    if (jQuery.contains(this, targets[i])) return !0
            })
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], !0))
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], !1))
        },
        is: function(selector) {
            return !!winnow(this, "string" == typeof selector && rneedsContext.test(selector) ? jQuery(selector) : selector || [], !1).length
        },
        closest: function(selectors, context) {
            for (var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || "string" != typeof selectors ? jQuery(selectors, context || this.context) : 0; i < l; i++)
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
                    if (cur.nodeType < 11 && (pos ? -1 < pos.index(cur) : 1 === cur.nodeType && jQuery.find.matchesSelector(cur, selectors))) {
                        cur = ret.push(cur);
                        break
                    } return this.pushStack(1 < ret.length ? jQuery.unique(ret) : ret)
        },
        index: function(elem) {
            return elem ? "string" == typeof elem ? jQuery.inArray(this[0], jQuery(elem)) : jQuery.inArray(elem.jquery ? elem[0] : elem, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(selector, context) {
            var set = "string" == typeof selector ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
                all = jQuery.merge(this.get(), set);
            return this.pushStack(jQuery.unique(all))
        },
        addBack: function(selector) {
            return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
        }
    }), jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null
        },
        parents: function(elem) {
            return jQuery.dir(elem, "parentNode")
        },
        parentsUntil: function(elem, i, until) {
            return jQuery.dir(elem, "parentNode", until)
        },
        next: function(elem) {
            return sibling(elem, "nextSibling")
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling")
        },
        nextAll: function(elem) {
            return jQuery.dir(elem, "nextSibling")
        },
        prevAll: function(elem) {
            return jQuery.dir(elem, "previousSibling")
        },
        nextUntil: function(elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until)
        },
        prevUntil: function(elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until)
        },
        siblings: function(elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem)
        },
        children: function(elem) {
            return jQuery.sibling(elem.firstChild)
        },
        contents: function(elem) {
            return jQuery.nodeName(elem, "iframe") ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes)
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var ret = jQuery.map(this, fn, until);
            return "Until" !== name.slice(-5) && (selector = until), selector && "string" == typeof selector && (ret = jQuery.filter(selector, ret)), 1 < this.length && (guaranteedUnique[name] || (ret = jQuery.unique(ret)), rparentsprev.test(name) && (ret = ret.reverse())), this.pushStack(ret)
        }
    }), jQuery.extend({
        filter: function(expr, elems, not) {
            var elem = elems[0];
            return not && (expr = ":not(" + expr + ")"), 1 === elems.length && 1 === elem.nodeType ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                return 1 === elem.nodeType
            }))
        },
        dir: function(elem, _dir, until) {
            for (var matched = [], cur = elem[_dir]; cur && 9 !== cur.nodeType && (until === undefined || 1 !== cur.nodeType || !jQuery(cur).is(until));) 1 === cur.nodeType && matched.push(cur), cur = cur[_dir];
            return matched
        },
        sibling: function(n, elem) {
            for (var r = []; n; n = n.nextSibling) 1 === n.nodeType && n !== elem && r.push(n);
            return r
        }
    });
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
        rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
        rleadingWhitespace = /^\s+/,
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rtbody = /<tbody/i,
        rhtml = /<|&#?\w+;/,
        rnoInnerhtml = /<(?:script|style|link)/i,
        manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rscriptType = /^$|\/(?:java|ecma)script/i,
        rscriptTypeMasked = /^true\/(.*)/,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        wrapMap = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        fragmentDiv = createSafeFragment(document).appendChild(document.createElement("div"));

    function manipulationTarget(elem, content) {
        return jQuery.nodeName(elem, "table") && jQuery.nodeName(1 === content.nodeType ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem
    }

    function disableScript(elem) {
        return elem.type = (null !== jQuery.find.attr(elem, "type")) + "/" + elem.type, elem
    }

    function restoreScript(elem) {
        var match = rscriptTypeMasked.exec(elem.type);
        return match ? elem.type = match[1] : elem.removeAttribute("type"), elem
    }

    function setGlobalEval(elems, refElements) {
        for (var elem, i = 0; null != (elem = elems[i]); i++) jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"))
    }

    function cloneCopyEvent(src, dest) {
        if (1 === dest.nodeType && jQuery.hasData(src)) {
            var type, i, l, oldData = jQuery._data(src),
                curData = jQuery._data(dest, oldData),
                events = oldData.events;
            if (events)
                for (type in delete curData.handle, curData.events = {}, events)
                    for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
            curData.data && (curData.data = jQuery.extend({}, curData.data))
        }
    }

    function fixCloneNodeIssues(src, dest) {
        var nodeName, e, data;
        if (1 === dest.nodeType) {
            if (nodeName = dest.nodeName.toLowerCase(), !jQuery.support.noCloneEvent && dest[jQuery.expando]) {
                for (e in (data = jQuery._data(dest)).events) jQuery.removeEvent(dest, e, data.handle);
                dest.removeAttribute(jQuery.expando)
            }
            "script" === nodeName && dest.text !== src.text ? (disableScript(dest).text = src.text, restoreScript(dest)) : "object" === nodeName ? (dest.parentNode && (dest.outerHTML = src.outerHTML), jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML) && (dest.innerHTML = src.innerHTML)) : "input" === nodeName && manipulation_rcheckableType.test(src.type) ? (dest.defaultChecked = dest.checked = src.checked, dest.value !== src.value && (dest.value = src.value)) : "option" === nodeName ? dest.defaultSelected = dest.selected = src.defaultSelected : "input" !== nodeName && "textarea" !== nodeName || (dest.defaultValue = src.defaultValue)
        }
    }

    function getAll(context, tag) {
        var elems, elem, i = 0,
            found = _typeof(context.getElementsByTagName) !== core_strundefined ? context.getElementsByTagName(tag || "*") : _typeof(context.querySelectorAll) !== core_strundefined ? context.querySelectorAll(tag || "*") : undefined;
        if (!found)
            for (found = [], elems = context.childNodes || context; null != (elem = elems[i]); i++) !tag || jQuery.nodeName(elem, tag) ? found.push(elem) : jQuery.merge(found, getAll(elem, tag));
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found
    }

    function fixDefaultChecked(elem) {
        manipulation_rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked)
    }
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.fn.extend({
        text: function(value) {
            return jQuery.access(this, function(value) {
                return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value))
            }, null, value, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(elem) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || manipulationTarget(this, elem).appendChild(elem)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(elem) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(elem) {
                this.parentNode && this.parentNode.insertBefore(elem, this.nextSibling)
            })
        },
        remove: function(selector, keepData) {
            for (var elem, elems = selector ? jQuery.filter(selector, this) : this, i = 0; null != (elem = elems[i]); i++) keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)), elem.parentNode && (keepData && jQuery.contains(elem.ownerDocument, elem) && setGlobalEval(getAll(elem, "script")), elem.parentNode.removeChild(elem));
            return this
        },
        empty: function() {
            for (var elem, i = 0; null != (elem = this[i]); i++) {
                for (1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1)); elem.firstChild;) elem.removeChild(elem.firstChild);
                elem.options && jQuery.nodeName(elem, "select") && (elem.options.length = 0)
            }
            return this
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            return dataAndEvents = null != dataAndEvents && dataAndEvents, deepDataAndEvents = null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents, this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
            })
        },
        html: function(value) {
            return jQuery.access(this, function(value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;
                if (value === undefined) return 1 === elem.nodeType ? elem.innerHTML.replace(rinlinejQuery, "") : undefined;
                if ("string" == typeof value && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; i < l; i++) 1 === (elem = this[i] || {}).nodeType && (jQuery.cleanData(getAll(elem, !1)), elem.innerHTML = value);
                        elem = 0
                    } catch (e) {}
                }
                elem && this.empty().append(value)
            }, null, value, arguments.length)
        },
        replaceWith: function() {
            var args = jQuery.map(this, function(elem) {
                    return [elem.nextSibling, elem.parentNode]
                }),
                i = 0;
            return this.domManip(arguments, function(elem) {
                var next = args[i++],
                    parent = args[i++];
                parent && (next && next.parentNode !== parent && (next = this.nextSibling), jQuery(this).remove(), parent.insertBefore(elem, next))
            }, !0), i ? this : this.remove()
        },
        detach: function(selector) {
            return this.remove(selector, !0)
        },
        domManip: function(args, callback, allowIntersection) {
            args = core_concat.apply([], args);
            var first, node, hasScripts, scripts, doc, fragment, i = 0,
                l = this.length,
                set = this,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction(value);
            if (isFunction || !(l <= 1 || "string" != typeof value || jQuery.support.checkClone) && rchecked.test(value)) return this.each(function(index) {
                var self = set.eq(index);
                isFunction && (args[0] = value.call(this, index, self.html())), self.domManip(args, callback, allowIntersection)
            });
            if (l && (first = (fragment = jQuery.buildFragment(args, this[0].ownerDocument, !1, !allowIntersection && this)).firstChild, 1 === fragment.childNodes.length && (fragment = first), first)) {
                for (hasScripts = (scripts = jQuery.map(getAll(fragment, "script"), disableScript)).length; i < l; i++) node = fragment, i !== iNoClone && (node = jQuery.clone(node, !0, !0), hasScripts && jQuery.merge(scripts, getAll(node, "script"))), callback.call(this[i], node, i);
                if (hasScripts)
                    for (doc = scripts[scripts.length - 1].ownerDocument, jQuery.map(scripts, restoreScript), i = 0; i < hasScripts; i++) node = scripts[i], rscriptType.test(node.type || "") && !jQuery._data(node, "globalEval") && jQuery.contains(doc, node) && (node.src ? jQuery._evalUrl(node.src) : jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, "")));
                fragment = first = null
            }
            return this
        }
    }), jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            for (var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1; i <= last; i++) elems = i === last ? this : this.clone(!0), jQuery(insert[i])[original](elems), core_push.apply(ret, elems.get());
            return this.pushStack(ret)
        }
    }), jQuery.extend({
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">") ? clone = elem.cloneNode(!0) : (fragmentDiv.innerHTML = elem.outerHTML, fragmentDiv.removeChild(clone = fragmentDiv.firstChild)), !(jQuery.support.noCloneEvent && jQuery.support.noCloneChecked || 1 !== elem.nodeType && 11 !== elem.nodeType || jQuery.isXMLDoc(elem)))
                for (destElements = getAll(clone), srcElements = getAll(elem), i = 0; null != (node = srcElements[i]); ++i) destElements[i] && fixCloneNodeIssues(node, destElements[i]);
            if (dataAndEvents)
                if (deepDataAndEvents)
                    for (srcElements = srcElements || getAll(elem), destElements = destElements || getAll(clone), i = 0; null != (node = srcElements[i]); i++) cloneCopyEvent(node, destElements[i]);
                else cloneCopyEvent(elem, clone);
            return 0 < (destElements = getAll(clone, "script")).length && setGlobalEval(destElements, !inPage && getAll(elem, "script")), destElements = srcElements = node = null, clone
        },
        buildFragment: function(elems, context, scripts, selection) {
            for (var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0; i < l; i++)
                if ((elem = elems[i]) || 0 === elem)
                    if ("object" === jQuery.type(elem)) jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
                    else if (rhtml.test(elem)) {
                for (tmp = tmp || safe.appendChild(context.createElement("div")), tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(), wrap = wrapMap[tag] || wrapMap._default, tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2], j = wrap[0]; j--;) tmp = tmp.lastChild;
                if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem) && nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0])), !jQuery.support.tbody)
                    for (j = (elem = "table" !== tag || rtbody.test(elem) ? "<table>" !== wrap[1] || rtbody.test(elem) ? 0 : tmp : tmp.firstChild) && elem.childNodes.length; j--;) jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length && elem.removeChild(tbody);
                for (jQuery.merge(nodes, tmp.childNodes), tmp.textContent = ""; tmp.firstChild;) tmp.removeChild(tmp.firstChild);
                tmp = safe.lastChild
            } else nodes.push(context.createTextNode(elem));
            for (tmp && safe.removeChild(tmp), jQuery.support.appendChecked || jQuery.grep(getAll(nodes, "input"), fixDefaultChecked), i = 0; elem = nodes[i++];)
                if ((!selection || -1 === jQuery.inArray(elem, selection)) && (contains = jQuery.contains(elem.ownerDocument, elem), tmp = getAll(safe.appendChild(elem), "script"), contains && setGlobalEval(tmp), scripts))
                    for (j = 0; elem = tmp[j++];) rscriptType.test(elem.type || "") && scripts.push(elem);
            return tmp = null, safe
        },
        cleanData: function(elems, acceptData) {
            for (var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special; null != (elem = elems[i]); i++)
                if ((acceptData || jQuery.acceptData(elem)) && (data = (id = elem[internalKey]) && cache[id])) {
                    if (data.events)
                        for (type in data.events) special[type] ? jQuery.event.remove(elem, type) : jQuery.removeEvent(elem, type, data.handle);
                    cache[id] && (delete cache[id], deleteExpando ? delete elem[internalKey] : _typeof(elem.removeAttribute) !== core_strundefined ? elem.removeAttribute(internalKey) : elem[internalKey] = null, core_deletedIds.push(id))
                }
        },
        _evalUrl: function(url) {
            return jQuery.ajax({
                url: url,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
    }), jQuery.fn.extend({
        wrapAll: function(html) {
            if (jQuery.isFunction(html)) return this.each(function(i) {
                jQuery(this).wrapAll(html.call(this, i))
            });
            if (this[0]) {
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && wrap.insertBefore(this[0]), wrap.map(function() {
                    for (var elem = this; elem.firstChild && 1 === elem.firstChild.nodeType;) elem = elem.firstChild;
                    return elem
                }).append(this)
            }
            return this
        },
        wrapInner: function(html) {
            return jQuery.isFunction(html) ? this.each(function(i) {
                jQuery(this).wrapInner(html.call(this, i))
            }) : this.each(function() {
                var self = jQuery(this),
                    contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html)
            })
        },
        wrap: function(html) {
            var isFunction = jQuery.isFunction(html);
            return this.each(function(i) {
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i,
        ropacity = /opacity\s*=\s*([^)]*)/,
        rposition = /^(top|right|bottom|left)$/,
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rmargin = /^margin/,
        rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
        rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
        rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
        elemdisplay = {
            BODY: "block"
        },
        cssShow = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cssNormalTransform = {
            letterSpacing: 0,
            fontWeight: 400
        },
        cssExpand = ["Top", "Right", "Bottom", "Left"],
        cssPrefixes = ["Webkit", "O", "Moz", "ms"];

    function vendorPropName(style, name) {
        if (name in style) return name;
        for (var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length; i--;)
            if ((name = cssPrefixes[i] + capName) in style) return name;
        return origName
    }

    function isHidden(elem, el) {
        return elem = el || elem, "none" === jQuery.css(elem, "display") || !jQuery.contains(elem.ownerDocument, elem)
    }

    function showHide(elements, show) {
        for (var display, elem, hidden, values = [], index = 0, length = elements.length; index < length; index++)(elem = elements[index]).style && (values[index] = jQuery._data(elem, "olddisplay"), display = elem.style.display, show ? (values[index] || "none" !== display || (elem.style.display = ""), "" === elem.style.display && isHidden(elem) && (values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName)))) : values[index] || (hidden = isHidden(elem), (display && "none" !== display || !hidden) && jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"))));
        for (index = 0; index < length; index++)(elem = elements[index]).style && (show && "none" !== elem.style.display && "" !== elem.style.display || (elem.style.display = show ? values[index] || "" : "none"));
        return elements
    }

    function setPositiveNumber(elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value
    }

    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        for (var i = extra === (isBorderBox ? "border" : "content") ? 4 : "width" === name ? 1 : 0, val = 0; i < 4; i += 2) "margin" === extra && (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)), isBorderBox ? ("content" === extra && (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)), "margin" !== extra && (val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles))) : (val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles), "padding" !== extra && (val += jQuery.css(elem, "border" + cssExpand[i] + "Width", !0, styles)));
        return val
    }

    function getWidthOrHeight(elem, name, extra) {
        var valueIsBorderBox = !0,
            val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
            styles = getStyles(elem),
            isBorderBox = jQuery.support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
        if (val <= 0 || null == val) {
            if (((val = curCSS(elem, name, styles)) < 0 || null == val) && (val = elem.style[name]), rnumnonpx.test(val)) return val;
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]), val = parseFloat(val) || 0
        }
        return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px"
    }

    function css_defaultDisplay(nodeName) {
        var doc = document,
            display = elemdisplay[nodeName];
        return display || ("none" !== (display = actualDisplay(nodeName, doc)) && display || ((doc = ((iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(doc.documentElement))[0].contentWindow || iframe[0].contentDocument).document).write("<!doctype html><html><body>"), doc.close(), display = actualDisplay(nodeName, doc), iframe.detach()), elemdisplay[nodeName] = display), display
    }

    function actualDisplay(name, doc) {
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
            display = jQuery.css(elem[0], "display");
        return elem.remove(), display
    }
    jQuery.fn.extend({
        css: function(name, value) {
            return jQuery.access(this, function(elem, name, value) {
                var len, styles, map = {},
                    i = 0;
                if (jQuery.isArray(name)) {
                    for (styles = getStyles(elem), len = name.length; i < len; i++) map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                    return map
                }
                return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name)
            }, name, value, 1 < arguments.length)
        },
        show: function() {
            return showHide(this, !0)
        },
        hide: function() {
            return showHide(this)
        },
        toggle: function(state) {
            return "boolean" == typeof state ? state ? this.show() : this.hide() : this.each(function() {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide()
            })
        }
    }), jQuery.extend({
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        var ret = curCSS(elem, "opacity");
                        return "" === ret ? "1" : ret
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(elem, name, value, extra) {
            if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
                var ret, type, hooks, origName = jQuery.camelCase(name),
                    style = elem.style;
                if (name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName)), hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName], value === undefined) return hooks && "get" in hooks && (ret = hooks.get(elem, !1, extra)) !== undefined ? ret : style[name];
                if (!("string" === (type = _typeof(value)) && (ret = rrelNum.exec(value)) && (value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name)), type = "number"), null == value || "number" === type && isNaN(value) || ("number" !== type || jQuery.cssNumber[origName] || (value += "px"), jQuery.support.clearCloneStyle || "" !== value || 0 !== name.indexOf("background") || (style[name] = "inherit"), hooks && "set" in hooks && (value = hooks.set(elem, value, extra)) === undefined))) try {
                    style[name] = value
                } catch (e) {}
            }
        },
        css: function(elem, name, extra, styles) {
            var num, val, hooks, origName = jQuery.camelCase(name);
            return name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName)), (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]) && "get" in hooks && (val = hooks.get(elem, !0, extra)), val === undefined && (val = curCSS(elem, name, styles)), "normal" === val && name in cssNormalTransform && (val = cssNormalTransform[name]), "" === extra || extra ? (num = parseFloat(val), !0 === extra || jQuery.isNumeric(num) ? num || 0 : val) : val
        }
    }), window.getComputedStyle ? (getStyles = function(elem) {
        return window.getComputedStyle(elem, null)
    }, curCSS = function(elem, name, _computed) {
        var width, minWidth, maxWidth, computed = _computed || getStyles(elem),
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
            style = elem.style;
        return computed && ("" !== ret || jQuery.contains(elem.ownerDocument, elem) || (ret = jQuery.style(elem, name)), rnumnonpx.test(ret) && rmargin.test(name) && (width = style.width, minWidth = style.minWidth, maxWidth = style.maxWidth, style.minWidth = style.maxWidth = style.width = ret, ret = computed.width, style.width = width, style.minWidth = minWidth, style.maxWidth = maxWidth)), ret
    }) : document.documentElement.currentStyle && (getStyles = function(elem) {
        return elem.currentStyle
    }, curCSS = function(elem, name, _computed) {
        var left, rs, rsLeft, computed = _computed || getStyles(elem),
            ret = computed ? computed[name] : undefined,
            style = elem.style;
        return null == ret && style && style[name] && (ret = style[name]), rnumnonpx.test(ret) && !rposition.test(name) && (left = style.left, (rsLeft = (rs = elem.runtimeStyle) && rs.left) && (rs.left = elem.currentStyle.left), style.left = "fontSize" === name ? "1em" : ret, ret = style.pixelLeft + "px", style.left = left, rsLeft && (rs.left = rsLeft)), "" === ret ? "auto" : ret
    }), jQuery.each(["height", "width"], function(i, name) {
        jQuery.cssHooks[name] = {
            get: function(elem, computed, extra) {
                if (computed) return 0 === elem.offsetWidth && rdisplayswap.test(jQuery.css(elem, "display")) ? jQuery.swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, name, extra)
                }) : getWidthOrHeight(elem, name, extra)
            },
            set: function(elem, value, extra) {
                var styles = extra && getStyles(elem);
                return setPositiveNumber(0, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && "border-box" === jQuery.css(elem, "boxSizing", !1, styles), styles) : 0)
            }
        }
    }), jQuery.support.opacity || (jQuery.cssHooks.opacity = {
        get: function(elem, computed) {
            return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : computed ? "1" : ""
        },
        set: function(elem, value) {
            var style = elem.style,
                currentStyle = elem.currentStyle,
                opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + 100 * value + ")" : "",
                filter = currentStyle && currentStyle.filter || style.filter || "";
            ((style.zoom = 1) <= value || "" === value) && "" === jQuery.trim(filter.replace(ralpha, "")) && style.removeAttribute && (style.removeAttribute("filter"), "" === value || currentStyle && !currentStyle.filter) || (style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + " " + opacity)
        }
    }), jQuery(function() {
        jQuery.support.reliableMarginRight || (jQuery.cssHooks.marginRight = {
            get: function(elem, computed) {
                if (computed) return jQuery.swap(elem, {
                    display: "inline-block"
                }, curCSS, [elem, "marginRight"])
            }
        }), !jQuery.support.pixelPosition && jQuery.fn.position && jQuery.each(["top", "left"], function(i, prop) {
            jQuery.cssHooks[prop] = {
                get: function(elem, computed) {
                    if (computed) return computed = curCSS(elem, prop), rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed
                }
            }
        })
    }), jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.hidden = function(elem) {
        return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && "none" === (elem.style && elem.style.display || jQuery.css(elem, "display"))
    }, jQuery.expr.filters.visible = function(elem) {
        return !jQuery.expr.filters.hidden(elem)
    }), jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                for (var i = 0, expanded = {}, parts = "string" == typeof value ? value.split(" ") : [value]; i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                return expanded
            }
        }, rmargin.test(prefix) || (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber)
    });
    var r20 = /%20/g,
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (jQuery.isArray(obj)) jQuery.each(obj, function(i, v) {
            traditional || rbracket.test(prefix) ? add(prefix, v) : buildParams(prefix + "[" + ("object" === _typeof(v) ? i : "") + "]", v, traditional, add)
        });
        else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
        else
            for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add)
    }
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this
            }).filter(function() {
                var type = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type))
            }).map(function(i, elem) {
                var val = jQuery(this).val();
                return null == val ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) {
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    }
                }) : {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                }
            }).get()
        }
    }), jQuery.param = function(a, traditional) {
        var prefix, s = [],
            add = function(key, value) {
                value = jQuery.isFunction(value) ? value() : null == value ? "" : value, s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value)
            };
        if (traditional === undefined && (traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional), jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, function() {
            add(this.name, this.value)
        });
        else
            for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
        return s.join("&").replace(r20, "+")
    }, jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(i, name) {
        jQuery.fn[name] = function(data, fn) {
            return 0 < arguments.length ? this.on(name, null, data, fn) : this.trigger(name)
        }
    }), jQuery.fn.extend({
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
        },
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn)
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn)
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn)
        },
        undelegate: function(selector, types, fn) {
            return 1 === arguments.length ? this.off(selector, "**") : this.off(types, selector || "**", fn)
        }
    });
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(),
        ajax_rquery = /\?/,
        rhash = /#.*$/,
        rts = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        _load = jQuery.fn.load,
        prefilters = {},
        transports = {},
        allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href
    } catch (e) {
        (ajaxLocation = document.createElement("a")).href = "", ajaxLocation = ajaxLocation.href
    }

    function addToPrefiltersOrTransports(structure) {
        return function(dataTypeExpression, func) {
            "string" != typeof dataTypeExpression && (func = dataTypeExpression, dataTypeExpression = "*");
            var dataType, i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(func))
                for (; dataType = dataTypes[i++];) "+" === dataType[0] ? (dataType = dataType.slice(1) || "*", (structure[dataType] = structure[dataType] || []).unshift(func)) : (structure[dataType] = structure[dataType] || []).push(func)
        }
    }

    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {},
            seekingTransport = structure === transports;

        function inspect(dataType) {
            var selected;
            return inspected[dataType] = !0, jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                return "string" != typeof dataTypeOrTransport || seekingTransport || inspected[dataTypeOrTransport] ? seekingTransport ? !(selected = dataTypeOrTransport) : void 0 : (options.dataTypes.unshift(dataTypeOrTransport), inspect(dataTypeOrTransport), !1)
            }), selected
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*")
    }

    function ajaxExtend(target, src) {
        var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
        for (key in src) src[key] !== undefined && ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
        return deep && jQuery.extend(!0, target, deep), target
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.fn.load = function(url, params, callback) {
        if ("string" != typeof url && _load) return _load.apply(this, arguments);
        var selector, response, type, self = this,
            off = url.indexOf(" ");
        return 0 <= off && (selector = url.slice(off, url.length), url = url.slice(0, off)), jQuery.isFunction(params) ? (callback = params, params = undefined) : params && "object" === _typeof(params) && (type = "POST"), 0 < self.length && jQuery.ajax({
            url: url,
            type: type,
            dataType: "html",
            data: params
        }).done(function(responseText) {
            response = arguments, self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText)
        }).complete(callback && function(jqXHR, status) {
            self.each(callback, response || [jqXHR.responseText, status, jqXHR])
        }), this
    }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn)
        }
    }), jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ajaxLocation,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ajaxLocParts[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": jQuery.parseJSON,
                "text xml": jQuery.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(target, settings) {
            return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target)
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function(url, options) {
            "object" === _typeof(url) && (options = url, url = undefined), options = options || {};
            var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options),
                callbackContext = s.context || s,
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
                _statusCode = s.statusCode || {},
                requestHeaders = {},
                requestHeadersNames = {},
                state = 0,
                strAbort = "canceled",
                jqXHR = {
                    readyState: 0,
                    getResponseHeader: function(key) {
                        var match;
                        if (2 === state) {
                            if (!responseHeaders)
                                for (responseHeaders = {}; match = rheaders.exec(responseHeadersString);) responseHeaders[match[1].toLowerCase()] = match[2];
                            match = responseHeaders[key.toLowerCase()]
                        }
                        return null == match ? null : match
                    },
                    getAllResponseHeaders: function() {
                        return 2 === state ? responseHeadersString : null
                    },
                    setRequestHeader: function(name, value) {
                        var lname = name.toLowerCase();
                        return state || (name = requestHeadersNames[lname] = requestHeadersNames[lname] || name, requestHeaders[name] = value), this
                    },
                    overrideMimeType: function(type) {
                        return state || (s.mimeType = type), this
                    },
                    statusCode: function(map) {
                        var code;
                        if (map)
                            if (state < 2)
                                for (code in map) _statusCode[code] = [_statusCode[code], map[code]];
                            else jqXHR.always(map[jqXHR.status]);
                        return this
                    },
                    abort: function(statusText) {
                        var finalText = statusText || strAbort;
                        return transport && transport.abort(finalText), done(0, finalText), this
                    }
                };
            if (deferred.promise(jqXHR).complete = completeDeferred.add, jqXHR.success = jqXHR.done, jqXHR.error = jqXHR.fail, s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), s.type = options.method || options.type || s.method || s.type, s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""], null == s.crossDomain && (parts = rurl.exec(s.url.toLowerCase()), s.crossDomain = !(!parts || parts[1] === ajaxLocParts[1] && parts[2] === ajaxLocParts[2] && (parts[3] || ("http:" === parts[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))), s.data && s.processData && "string" != typeof s.data && (s.data = jQuery.param(s.data, s.traditional)), inspectPrefiltersOrTransports(prefilters, s, options, jqXHR), 2 === state) return jqXHR;
            for (i in (fireGlobals = s.global) && 0 == jQuery.active++ && jQuery.event.trigger("ajaxStart"), s.type = s.type.toUpperCase(), s.hasContent = !rnoContent.test(s.type), cacheURL = s.url, s.hasContent || (s.data && (cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data, delete s.data), !1 === s.cache && (s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++)), s.ifModified && (jQuery.lastModified[cacheURL] && jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]), jQuery.etag[cacheURL] && jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])), (s.data && s.hasContent && !1 !== s.contentType || options.contentType) && jqXHR.setRequestHeader("Content-Type", s.contentType), jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]), s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
            if (s.beforeSend && (!1 === s.beforeSend.call(callbackContext, jqXHR, s) || 2 === state)) return jqXHR.abort();
            for (i in strAbort = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) jqXHR[i](s[i]);
            if (transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR)) {
                jqXHR.readyState = 1, fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]), s.async && 0 < s.timeout && (timeoutTimer = setTimeout(function() {
                    jqXHR.abort("timeout")
                }, s.timeout));
                try {
                    state = 1, transport.send(requestHeaders, done)
                } catch (e) {
                    if (!(state < 2)) throw e;
                    done(-1, e)
                }
            } else done(-1, "No Transport");

            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                2 !== state && (state = 2, timeoutTimer && clearTimeout(timeoutTimer), transport = undefined, responseHeadersString = headers || "", jqXHR.readyState = 0 < status ? 4 : 0, isSuccess = 200 <= status && status < 300 || 304 === status, responses && (response = function(s, jqXHR, responses) {
                    var firstDataType, ct, finalDataType, type, contents = s.contents,
                        dataTypes = s.dataTypes;
                    for (;
                        "*" === dataTypes[0];) dataTypes.shift(), ct === undefined && (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
                    if (ct)
                        for (type in contents)
                            if (contents[type] && contents[type].test(ct)) {
                                dataTypes.unshift(type);
                                break
                            } if (dataTypes[0] in responses) finalDataType = dataTypes[0];
                    else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break
                            }
                            firstDataType || (firstDataType = type)
                        }
                        finalDataType = finalDataType || firstDataType
                    }
                    if (finalDataType) return finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType), responses[finalDataType]
                }(s, jqXHR, responses)), response = function(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {},
                        dataTypes = s.dataTypes.slice();
                    if (dataTypes[1])
                        for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    for (; current;)
                        if (s.responseFields[current] && (jqXHR[s.responseFields[current]] = response), !prev && isSuccess && s.dataFilter && (response = s.dataFilter(response, s.dataType)), prev = current, current = dataTypes.shift())
                            if ("*" === current) current = prev;
                            else if ("*" !== prev && prev !== current) {
                        if (!(conv = converters[prev + " " + current] || converters["* " + current]))
                            for (conv2 in converters)
                                if ((tmp = conv2.split(" "))[1] === current && (conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]])) {
                                    !0 === conv ? conv = converters[conv2] : !0 !== converters[conv2] && (current = tmp[0], dataTypes.unshift(tmp[1]));
                                    break
                                } if (!0 !== conv)
                            if (conv && s.throws) response = conv(response);
                            else try {
                                response = conv(response)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: response
                    }
                }(s, response, jqXHR, isSuccess), isSuccess ? (s.ifModified && ((modified = jqXHR.getResponseHeader("Last-Modified")) && (jQuery.lastModified[cacheURL] = modified), (modified = jqXHR.getResponseHeader("etag")) && (jQuery.etag[cacheURL] = modified)), 204 === status || "HEAD" === s.type ? statusText = "nocontent" : 304 === status ? statusText = "notmodified" : (statusText = response.state, success = response.data, isSuccess = !(error = response.error))) : (error = statusText, !status && statusText || (statusText = "error", status < 0 && (status = 0))), jqXHR.status = status, jqXHR.statusText = (nativeStatusText || statusText) + "", isSuccess ? deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) : deferred.rejectWith(callbackContext, [jqXHR, statusText, error]), jqXHR.statusCode(_statusCode), _statusCode = undefined, fireGlobals && globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]), completeDeferred.fireWith(callbackContext, [jqXHR, statusText]), fireGlobals && (globalEventContext.trigger("ajaxComplete", [jqXHR, s]), --jQuery.active || jQuery.event.trigger("ajaxStop")))
            }
            return jqXHR
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json")
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script")
        }
    }), jQuery.each(["get", "post"], function(i, method) {
        jQuery[method] = function(url, data, callback, type) {
            return jQuery.isFunction(data) && (type = type || callback, callback = data, data = undefined), jQuery.ajax({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            })
        }
    }), jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(text) {
                return jQuery.globalEval(text), text
            }
        }
    }), jQuery.ajaxPrefilter("script", function(s) {
        s.cache === undefined && (s.cache = !1), s.crossDomain && (s.type = "GET", s.global = !1)
    }), jQuery.ajaxTransport("script", function(s) {
        if (s.crossDomain) {
            var script, head = document.head || jQuery("head")[0] || document.documentElement;
            return {
                send: function(_, callback) {
                    (script = document.createElement("script")).async = !0, s.scriptCharset && (script.charset = s.scriptCharset), script.src = s.url, script.onload = script.onreadystatechange = function(_, isAbort) {
                        (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) && (script.onload = script.onreadystatechange = null, script.parentNode && script.parentNode.removeChild(script), script = null, isAbort || callback(200, "success"))
                    }, head.insertBefore(script, head.firstChild)
                },
                abort: function() {
                    script && script.onload(undefined, !0)
                }
            }
        }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            return this[callback] = !0, callback
        }
    }), jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = !1 !== s.jsonp && (rjsonp.test(s.url) ? "url" : "string" == typeof s.data && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        if (jsonProp || "jsonp" === s.dataTypes[0]) return callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback, jsonProp ? s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName) : !1 !== s.jsonp && (s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName), s.converters["script json"] = function() {
            return responseContainer || jQuery.error(callbackName + " was not called"), responseContainer[0]
        }, s.dataTypes[0] = "json", overwritten = window[callbackName], window[callbackName] = function() {
            responseContainer = arguments
        }, jqXHR.always(function() {
            window[callbackName] = overwritten, s[callbackName] && (s.jsonpCallback = originalSettings.jsonpCallback, oldCallbacks.push(callbackName)), responseContainer && jQuery.isFunction(overwritten) && overwritten(responseContainer[0]), responseContainer = overwritten = undefined
        }), "script"
    });
    var xhrCallbacks, xhrSupported, xhrId = 0,
        xhrOnUnloadAbort = window.ActiveXObject && function() {
            var key;
            for (key in xhrCallbacks) xhrCallbacks[key](undefined, !0)
        };

    function createStandardXHR() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
    }
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? function() {
        return !this.isLocal && createStandardXHR() || function() {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    } : createStandardXHR, xhrSupported = jQuery.ajaxSettings.xhr(), jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported, (xhrSupported = jQuery.support.ajax = !!xhrSupported) && jQuery.ajaxTransport(function(s) {
        var _callback;
        if (!s.crossDomain || jQuery.support.cors) return {
            send: function(headers, complete) {
                var handle, i, xhr = s.xhr();
                if (s.username ? xhr.open(s.type, s.url, s.async, s.username, s.password) : xhr.open(s.type, s.url, s.async), s.xhrFields)
                    for (i in s.xhrFields) xhr[i] = s.xhrFields[i];
                s.mimeType && xhr.overrideMimeType && xhr.overrideMimeType(s.mimeType), s.crossDomain || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (i in headers) xhr.setRequestHeader(i, headers[i])
                } catch (err) {}
                xhr.send(s.hasContent && s.data || null), _callback = function(_, isAbort) {
                    var status, responseHeaders, statusText, responses;
                    try {
                        if (_callback && (isAbort || 4 === xhr.readyState))
                            if (_callback = undefined, handle && (xhr.onreadystatechange = jQuery.noop, xhrOnUnloadAbort && delete xhrCallbacks[handle]), isAbort) 4 !== xhr.readyState && xhr.abort();
                            else {
                                responses = {}, status = xhr.status, responseHeaders = xhr.getAllResponseHeaders(), "string" == typeof xhr.responseText && (responses.text = xhr.responseText);
                                try {
                                    statusText = xhr.statusText
                                } catch (e) {
                                    statusText = ""
                                }
                                status || !s.isLocal || s.crossDomain ? 1223 === status && (status = 204) : status = responses.text ? 200 : 404
                            }
                    } catch (firefoxAccessException) {
                        isAbort || complete(-1, firefoxAccessException)
                    }
                    responses && complete(status, statusText, responses, responseHeaders)
                }, s.async ? 4 === xhr.readyState ? setTimeout(_callback) : (handle = ++xhrId, xhrOnUnloadAbort && (xhrCallbacks || (xhrCallbacks = {}, jQuery(window).unload(xhrOnUnloadAbort)), xhrCallbacks[handle] = _callback), xhr.onreadystatechange = _callback) : _callback()
            },
            abort: function() {
                _callback && _callback(undefined, !0)
            }
        }
    });
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
        rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
        rrun = /queueHooks$/,
        animationPrefilters = [function(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHidden(elem),
                dataShow = jQuery._data(elem, "fxshow");
            opts.queue || (null == (hooks = jQuery._queueHooks(elem, "fx")).unqueued && (hooks.unqueued = 0, oldfire = hooks.empty.fire, hooks.empty.fire = function() {
                hooks.unqueued || oldfire()
            }), hooks.unqueued++, anim.always(function() {
                anim.always(function() {
                    hooks.unqueued--, jQuery.queue(elem, "fx").length || hooks.empty.fire()
                })
            }));
            1 === elem.nodeType && ("height" in props || "width" in props) && (opts.overflow = [style.overflow, style.overflowX, style.overflowY], "inline" === jQuery.css(elem, "display") && "none" === jQuery.css(elem, "float") && (jQuery.support.inlineBlockNeedsLayout && "inline" !== css_defaultDisplay(elem.nodeName) ? style.zoom = 1 : style.display = "inline-block"));
            opts.overflow && (style.overflow = "hidden", jQuery.support.shrinkWrapBlocks || anim.always(function() {
                style.overflow = opts.overflow[0], style.overflowX = opts.overflow[1], style.overflowY = opts.overflow[2]
            }));
            for (prop in props)
                if (value = props[prop], rfxtypes.exec(value)) {
                    if (delete props[prop], toggle = toggle || "toggle" === value, value === (hidden ? "hide" : "show")) continue;
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop)
                } if (!jQuery.isEmptyObject(orig))
                for (prop in dataShow ? "hidden" in dataShow && (hidden = dataShow.hidden) : dataShow = jQuery._data(elem, "fxshow", {}), toggle && (dataShow.hidden = !hidden), hidden ? jQuery(elem).show() : anim.done(function() {
                        jQuery(elem).hide()
                    }), anim.done(function() {
                        var prop;
                        for (prop in jQuery._removeData(elem, "fxshow"), orig) jQuery.style(elem, prop, orig[prop])
                    }), orig) tween = createTween(hidden ? dataShow[prop] : 0, prop, anim), prop in dataShow || (dataShow[prop] = tween.start, hidden && (tween.end = tween.start, tween.start = "width" === prop || "height" === prop ? 1 : 0))
        }],
        tweeners = {
            "*": [function(prop, value) {
                var tween = this.createTween(prop, value),
                    target = tween.cur(),
                    parts = rfxnum.exec(value),
                    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                    start = (jQuery.cssNumber[prop] || "px" !== unit && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
                    scale = 1,
                    maxIterations = 20;
                if (start && start[3] !== unit)
                    for (unit = unit || start[3], parts = parts || [], start = +target || 1; start /= scale = scale || ".5", jQuery.style(tween.elem, prop, start + unit), scale !== (scale = tween.cur() / target) && 1 !== scale && --maxIterations;);
                return parts && (start = tween.start = +start || +target || 0, tween.unit = unit, tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2]), tween
            }]
        };

    function createFxNow() {
        return setTimeout(function() {
            fxNow = undefined
        }), fxNow = jQuery.now()
    }

    function createTween(value, prop, animation) {
        for (var tween, collection = (tweeners[prop] || []).concat(tweeners["*"]), index = 0, length = collection.length; index < length; index++)
            if (tween = collection[index].call(animation, prop, value)) return tween
    }

    function Animation(elem, properties, options) {
        var result, stopped, index = 0,
            length = animationPrefilters.length,
            deferred = jQuery.Deferred().always(function() {
                delete tick.elem
            }),
            tick = function() {
                if (stopped) return !1;
                for (var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), percent = 1 - (remaining / animation.duration || 0), index = 0, length = animation.tweens.length; index < length; index++) animation.tweens[index].run(percent);
                return deferred.notifyWith(elem, [animation, percent, remaining]), percent < 1 && length ? remaining : (deferred.resolveWith(elem, [animation]), !1)
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(!0, {
                    specialEasing: {}
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function(prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                    return animation.tweens.push(tween), tween
                },
                stop: function(gotoEnd) {
                    var index = 0,
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) return this;
                    for (stopped = !0; index < length; index++) animation.tweens[index].run(1);
                    return gotoEnd ? deferred.resolveWith(elem, [animation, gotoEnd]) : deferred.rejectWith(elem, [animation, gotoEnd]), this
                }
            }),
            props = animation.props;
        for (! function(props, specialEasing) {
                var index, name, easing, value, hooks;
                for (index in props)
                    if (name = jQuery.camelCase(index), easing = specialEasing[name], value = props[index], jQuery.isArray(value) && (easing = value[1], value = props[index] = value[0]), index !== name && (props[name] = value, delete props[index]), (hooks = jQuery.cssHooks[name]) && "expand" in hooks)
                        for (index in value = hooks.expand(value), delete props[name], value) index in props || (props[index] = value[index], specialEasing[index] = easing);
                    else specialEasing[name] = easing
            }(props, animation.opts.specialEasing); index < length; index++)
            if (result = animationPrefilters[index].call(animation, elem, props, animation.opts)) return result;
        return jQuery.map(props, createTween, animation), jQuery.isFunction(animation.opts.start) && animation.opts.start.call(elem, animation), jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        })), animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always)
    }

    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing)
    }

    function genFx(type, includeWidth) {
        var which, attrs = {
                height: type
            },
            i = 0;
        for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth) attrs["margin" + (which = cssExpand[i])] = attrs["padding" + which] = type;
        return includeWidth && (attrs.opacity = attrs.width = type), attrs
    }

    function getWindow(elem) {
        return jQuery.isWindow(elem) ? elem : 9 === elem.nodeType && (elem.defaultView || elem.parentWindow)
    }
    jQuery.Animation = jQuery.extend(Animation, {
        tweener: function(props, callback) {
            for (var prop, index = 0, length = (props = jQuery.isFunction(props) ? (callback = props, ["*"]) : props.split(" ")).length; index < length; index++) prop = props[index], tweeners[prop] = tweeners[prop] || [], tweeners[prop].unshift(callback)
        },
        prefilter: function(callback, prepend) {
            prepend ? animationPrefilters.unshift(callback) : animationPrefilters.push(callback)
        }
    }), ((jQuery.Tween = Tween).prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem, this.prop = prop, this.easing = easing || "swing", this.options = options, this.start = this.now = this.cur(), this.end = end, this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this)
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration) : this.pos = eased = percent, this.now = (this.end - this.start) * eased + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), hooks && hooks.set ? hooks.set(this) : Tween.propHooks._default.set(this), this
        }
    }).init.prototype = Tween.prototype, (Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                return null == tween.elem[tween.prop] || tween.elem.style && null != tween.elem.style[tween.prop] ? (result = jQuery.css(tween.elem, tween.prop, "")) && "auto" !== result ? result : 0 : tween.elem[tween.prop]
            },
            set: function(tween) {
                jQuery.fx.step[tween.prop] ? jQuery.fx.step[tween.prop](tween) : tween.elem.style && (null != tween.elem.style[jQuery.cssProps[tween.prop]] || jQuery.cssHooks[tween.prop]) ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit) : tween.elem[tween.prop] = tween.now
            }
        }
    }).scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            tween.elem.nodeType && tween.elem.parentNode && (tween.elem[tween.prop] = tween.now)
        }
    }, jQuery.each(["toggle", "show", "hide"], function(i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return null == speed || "boolean" == typeof speed ? cssFn.apply(this, arguments) : this.animate(genFx(name, !0), speed, easing, callback)
        }
    }), jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({
                opacity: to
            }, speed, easing, callback)
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function() {
                    var anim = Animation(this, jQuery.extend({}, prop), optall);
                    (empty || jQuery._data(this, "finish")) && anim.stop(!0)
                };
            return doAnimation.finish = doAnimation, empty || !1 === optall.queue ? this.each(doAnimation) : this.queue(optall.queue, doAnimation)
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop, stop(gotoEnd)
            };
            return "string" != typeof type && (gotoEnd = clearQueue, clearQueue = type, type = undefined), clearQueue && !1 !== type && this.queue(type || "fx", []), this.each(function() {
                var dequeue = !0,
                    index = null != type && type + "queueHooks",
                    timers = jQuery.timers,
                    data = jQuery._data(this);
                if (index) data[index] && data[index].stop && stopQueue(data[index]);
                else
                    for (index in data) data[index] && data[index].stop && rrun.test(index) && stopQueue(data[index]);
                for (index = timers.length; index--;) timers[index].elem !== this || null != type && timers[index].queue !== type || (timers[index].anim.stop(gotoEnd), dequeue = !1, timers.splice(index, 1));
                !dequeue && gotoEnd || jQuery.dequeue(this, type)
            })
        },
        finish: function(type) {
            return !1 !== type && (type = type || "fx"), this.each(function() {
                var index, data = jQuery._data(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;
                for (data.finish = !0, jQuery.queue(this, type, []), hooks && hooks.stop && hooks.stop.call(this, !0), index = timers.length; index--;) timers[index].elem === this && timers[index].queue === type && (timers[index].anim.stop(!0), timers.splice(index, 1));
                for (index = 0; index < length; index++) queue[index] && queue[index].finish && queue[index].finish.call(this);
                delete data.finish
            })
        }
    }), jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback)
        }
    }), jQuery.speed = function(speed, easing, fn) {
        var opt = speed && "object" === _typeof(speed) ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        return opt.duration = jQuery.fx.off ? 0 : "number" == typeof opt.duration ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default, null != opt.queue && !0 !== opt.queue || (opt.queue = "fx"), opt.old = opt.complete, opt.complete = function() {
            jQuery.isFunction(opt.old) && opt.old.call(this), opt.queue && jQuery.dequeue(this, opt.queue)
        }, opt
    }, jQuery.easing = {
        linear: function(p) {
            return p
        },
        swing: function(p) {
            return .5 - Math.cos(p * Math.PI) / 2
        }
    }, jQuery.timers = [], jQuery.fx = Tween.prototype.init, jQuery.fx.tick = function() {
        var timer, timers = jQuery.timers,
            i = 0;
        for (fxNow = jQuery.now(); i < timers.length; i++)(timer = timers[i])() || timers[i] !== timer || timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), fxNow = undefined
    }, jQuery.fx.timer = function(timer) {
        timer() && jQuery.timers.push(timer) && jQuery.fx.start()
    }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    }, jQuery.fx.stop = function() {
        clearInterval(timerId), timerId = null
    }, jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, jQuery.fx.step = {}, jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem
        }).length
    }), jQuery.fn.offset = function(options) {
        if (arguments.length) return options === undefined ? this : this.each(function(i) {
            jQuery.offset.setOffset(this, options, i)
        });
        var docElem, win, box = {
                top: 0,
                left: 0
            },
            elem = this[0],
            doc = elem && elem.ownerDocument;
        return doc ? (docElem = doc.documentElement, jQuery.contains(docElem, elem) ? (_typeof(elem.getBoundingClientRect) !== core_strundefined && (box = elem.getBoundingClientRect()), win = getWindow(doc), {
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        }) : box) : void 0
    }, jQuery.offset = {
        setOffset: function(elem, options, i) {
            var position = jQuery.css(elem, "position");
            "static" === position && (elem.style.position = "relative");
            var curTop, curLeft, curElem = jQuery(elem),
                curOffset = curElem.offset(),
                curCSSTop = jQuery.css(elem, "top"),
                curCSSLeft = jQuery.css(elem, "left"),
                props = {},
                curPosition = {};
            curLeft = ("absolute" === position || "fixed" === position) && -1 < jQuery.inArray("auto", [curCSSTop, curCSSLeft]) ? (curTop = (curPosition = curElem.position()).top, curPosition.left) : (curTop = parseFloat(curCSSTop) || 0, parseFloat(curCSSLeft) || 0), jQuery.isFunction(options) && (options = options.call(elem, i, curOffset)), null != options.top && (props.top = options.top - curOffset.top + curTop), null != options.left && (props.left = options.left - curOffset.left + curLeft), "using" in options ? options.using.call(elem, props) : curElem.css(props)
        }
    }, jQuery.fn.extend({
        position: function() {
            if (this[0]) {
                var offsetParent, offset, parentOffset = {
                        top: 0,
                        left: 0
                    },
                    elem = this[0];
                return "fixed" === jQuery.css(elem, "position") ? offset = elem.getBoundingClientRect() : (offsetParent = this.offsetParent(), offset = this.offset(), jQuery.nodeName(offsetParent[0], "html") || (parentOffset = offsetParent.offset()), parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", !0), parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", !0)), {
                    top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", !0),
                    left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var offsetParent = this.offsetParent || docElem; offsetParent && !jQuery.nodeName(offsetParent, "html") && "static" === jQuery.css(offsetParent, "position");) offsetParent = offsetParent.offsetParent;
                return offsetParent || docElem
            })
        }
    }), jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = /Y/.test(prop);
        jQuery.fn[method] = function(val) {
            return jQuery.access(this, function(elem, method, val) {
                var win = getWindow(elem);
                if (val === undefined) return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
                win ? win.scrollTo(top ? jQuery(win).scrollLeft() : val, top ? val : jQuery(win).scrollTop()) : elem[method] = val
            }, method, val, arguments.length, null)
        }
    }), jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || "boolean" != typeof margin),
                    extra = defaultExtra || (!0 === margin || !0 === value ? "margin" : "border");
                return jQuery.access(this, function(elem, type, value) {
                    var doc;
                    return jQuery.isWindow(elem) ? elem.document.documentElement["client" + name] : 9 === elem.nodeType ? (doc = elem.documentElement, Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name])) : value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra)
                }, type, chainable ? margin : undefined, chainable, null)
            }
        })
    }), jQuery.fn.size = function() {
        return this.length
    }, jQuery.fn.andSelf = jQuery.fn.addBack, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && "object" === _typeof(module.exports) ? module.exports = jQuery : (window.jQuery = window.$ = jQuery, "function" == typeof define && define.amd && define("jquery", [], function() {
        return jQuery
    }))
}(window),
function(factory) {
    "function" == typeof define && define.amd ? define(["jquery"], factory) : factory(jQuery)
}(function($) {
    var uuid, removeData, eventType, orig;

    function _focusable(element, isTabIndexNotNaN) {
        var map, mapName, img, nodeName = element.nodeName.toLowerCase();
        return "area" === nodeName ? (mapName = (map = element.parentNode).name, !(!element.href || !mapName || "map" !== map.nodeName.toLowerCase()) && (!!(img = $("img[usemap=#" + mapName + "]")[0]) && visible(img))) : (/input|select|textarea|button|object/.test(nodeName) ? !element.disabled : "a" === nodeName && element.href || isTabIndexNotNaN) && visible(element)
    }

    function visible(element) {
        return $.expr.filters.visible(element) && !$(element).parents().addBack().filter(function() {
            return "hidden" === $.css(this, "visibility")
        }).length
    }
    $.ui = $.ui || {}, $.extend($.ui, {
        version: "1.11.0",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), $.fn.extend({
        scrollParent: function() {
            var position = this.css("position"),
                excludeStaticParent = "absolute" === position,
                scrollParent = this.parents().filter(function() {
                    var parent = $(this);
                    return (!excludeStaticParent || "static" !== parent.css("position")) && /(auto|scroll)/.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"))
                }).eq(0);
            return "fixed" !== position && scrollParent.length ? scrollParent : $(this[0].ownerDocument || document)
        },
        uniqueId: (uuid = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++uuid)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id")
            })
        }
    }), $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) {
            return function(elem) {
                return !!$.data(elem, dataName)
            }
        }) : function(elem, i, match) {
            return !!$.data(elem, match[3])
        },
        focusable: function(element) {
            return _focusable(element, !isNaN($.attr(element, "tabindex")))
        },
        tabbable: function(element) {
            var tabIndex = $.attr(element, "tabindex"),
                isTabIndexNaN = isNaN(tabIndex);
            return (isTabIndexNaN || 0 <= tabIndex) && _focusable(element, !isTabIndexNaN)
        }
    }), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(i, name) {
        var side = "Width" === name ? ["Left", "Right"] : ["Top", "Bottom"],
            type = name.toLowerCase(),
            orig = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };

        function reduce(elem, size, border, margin) {
            return $.each(side, function() {
                size -= parseFloat($.css(elem, "padding" + this)) || 0, border && (size -= parseFloat($.css(elem, "border" + this + "Width")) || 0), margin && (size -= parseFloat($.css(elem, "margin" + this)) || 0)
            }), size
        }
        $.fn["inner" + name] = function(size) {
            return void 0 === size ? orig["inner" + name].call(this) : this.each(function() {
                $(this).css(type, reduce(this, size) + "px")
            })
        }, $.fn["outer" + name] = function(size, margin) {
            return "number" != typeof size ? orig["outer" + name].call(this, size) : this.each(function() {
                $(this).css(type, reduce(this, size, !0, margin) + "px")
            })
        }
    }), $.fn.addBack || ($.fn.addBack = function(selector) {
        return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
    }), $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = (removeData = $.fn.removeData, function(key) {
        return arguments.length ? removeData.call(this, $.camelCase(key)) : removeData.call(this)
    })), $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), $.fn.extend({
        focus: (orig = $.fn.focus, function(delay, fn) {
            return "number" == typeof delay ? this.each(function() {
                var elem = this;
                setTimeout(function() {
                    $(elem).focus(), fn && fn.call(elem)
                }, delay)
            }) : orig.apply(this, arguments)
        }),
        disableSelection: (eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(eventType + ".ui-disableSelection", function(event) {
                event.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(_zIndex) {
            if (void 0 !== _zIndex) return this.css("zIndex", _zIndex);
            if (this.length)
                for (var position, value, elem = $(this[0]); elem.length && elem[0] !== document;) {
                    if (("absolute" === (position = elem.css("position")) || "relative" === position || "fixed" === position) && (value = parseInt(elem.css("zIndex"), 10), !isNaN(value) && 0 !== value)) return value;
                    elem = elem.parent()
                }
            return 0
        }
    }), $.ui.plugin = {
        add: function(module, option, set) {
            var i, proto = $.ui[module].prototype;
            for (i in set) proto.plugins[i] = proto.plugins[i] || [], proto.plugins[i].push([option, set[i]])
        },
        call: function(instance, name, args, allowDisconnected) {
            var i, set = instance.plugins[name];
            if (set && (allowDisconnected || instance.element[0].parentNode && 11 !== instance.element[0].parentNode.nodeType))
                for (i = 0; i < set.length; i++) instance.options[set[i][0]] && set[i][1].apply(instance.element, args)
        }
    };
    var widget_uuid = 0,
        widget_slice = Array.prototype.slice;
    $.cleanData = function(orig) {
        return function(elems) {
            for (var elem, i = 0; null != (elem = elems[i]); i++) try {
                $(elem).triggerHandler("remove")
            } catch (e) {}
            orig(elems)
        }
    }($.cleanData), $.widget = function(name, base, prototype) {
        var fullName, existingConstructor, constructor, basePrototype, proxiedPrototype = {},
            namespace = name.split(".")[0];
        return name = name.split(".")[1], fullName = namespace + "-" + name, prototype || (prototype = base, base = $.Widget), $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName)
        }, $[namespace] = $[namespace] || {}, existingConstructor = $[namespace][name], constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) return new constructor(options, element);
            arguments.length && this._createWidget(options, element)
        }, $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        }), (basePrototype = new base).options = $.widget.extend({}, basePrototype.options), $.each(prototype, function(prop, value) {
            var _super, _superApply;
            $.isFunction(value) ? proxiedPrototype[prop] = (_super = function() {
                return base.prototype[prop].apply(this, arguments)
            }, _superApply = function(args) {
                return base.prototype[prop].apply(this, args)
            }, function() {
                var returnValue, __super = this._super,
                    __superApply = this._superApply;
                return this._super = _super, this._superApply = _superApply, returnValue = value.apply(this, arguments), this._super = __super, this._superApply = __superApply, returnValue
            }) : proxiedPrototype[prop] = value
        }), constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor && basePrototype.widgetEventPrefix || name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        }), existingConstructor ? ($.each(existingConstructor._childConstructors, function(i, child) {
            var childPrototype = child.prototype;
            $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto)
        }), delete existingConstructor._childConstructors) : base._childConstructors.push(constructor), $.widget.bridge(name, constructor), constructor
    }, $.widget.extend = function(target) {
        for (var key, value, input = widget_slice.call(arguments, 1), inputIndex = 0, inputLength = input.length; inputIndex < inputLength; inputIndex++)
            for (key in input[inputIndex]) value = input[inputIndex][key], input[inputIndex].hasOwnProperty(key) && void 0 !== value && ($.isPlainObject(value) ? target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value) : target[key] = value);
        return target
    }, $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = "string" == typeof options,
                args = widget_slice.call(arguments, 1),
                returnValue = this;
            return options = !isMethodCall && args.length ? $.widget.extend.apply(null, [options].concat(args)) : options, isMethodCall ? this.each(function() {
                var methodValue, instance = $.data(this, fullName);
                return "instance" === options ? (returnValue = instance, !1) : instance ? $.isFunction(instance[options]) && "_" !== options.charAt(0) ? (methodValue = instance[options].apply(instance, args)) !== instance && void 0 !== methodValue ? (returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue, !1) : void 0 : $.error("no such method '" + options + "' for " + name + " widget instance") : $.error("cannot call methods on " + name + " prior to initialization; attempted to call method '" + options + "'")
            }) : this.each(function() {
                var instance = $.data(this, fullName);
                instance ? (instance.option(options || {}), instance._init && instance._init()) : $.data(this, fullName, new object(options, this))
            }), returnValue
        }
    }, $.Widget = function() {}, $.Widget._childConstructors = [], $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0], this.element = $(element), this.uuid = widget_uuid++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options), this.bindings = $(), this.hoverable = $(), this.focusable = $(), element !== this && ($.data(element, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(event) {
                    event.target === element && this.destroy()
                }
            }), this.document = $(element.style ? element.ownerDocument : element.document || element), this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: $.noop,
        widget: function() {
            return this.element
        },
        option: function(key, value) {
            var parts, curOption, i, options = key;
            if (0 === arguments.length) return $.widget.extend({}, this.options);
            if ("string" == typeof key)
                if (options = {}, key = (parts = key.split(".")).shift(), parts.length) {
                    for (curOption = options[key] = $.widget.extend({}, this.options[key]), i = 0; i < parts.length - 1; i++) curOption[parts[i]] = curOption[parts[i]] || {}, curOption = curOption[parts[i]];
                    if (key = parts.pop(), 1 === arguments.length) return void 0 === curOption[key] ? null : curOption[key];
                    curOption[key] = value
                } else {
                    if (1 === arguments.length) return void 0 === this.options[key] ? null : this.options[key];
                    options[key] = value
                } return this._setOptions(options), this
        },
        _setOptions: function(options) {
            var key;
            for (key in options) this._setOption(key, options[key]);
            return this
        },
        _setOption: function(key, value) {
            return this.options[key] = value, "disabled" === key && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!value), value && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement, instance = this;
            "boolean" != typeof suppressDisabledCheck && (handlers = element, element = suppressDisabledCheck, suppressDisabledCheck = !1), handlers ? (element = delegateElement = $(element), this.bindings = this.bindings.add(element)) : (handlers = element, element = this.element, delegateElement = this.widget()), $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    if (suppressDisabledCheck || !0 !== instance.options.disabled && !$(this).hasClass("ui-state-disabled")) return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments)
                }
                "string" != typeof handler && (handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++);
                var match = event.match(/^([\w:-]*)\s*(.*)$/),
                    eventName = match[1] + instance.eventNamespace,
                    selector = match[2];
                selector ? delegateElement.delegate(selector, eventName, handlerProxy) : element.bind(eventName, handlerProxy)
            })
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, element.unbind(eventName).undelegate(eventName)
        },
        _delay: function(handler, delay) {
            var instance = this;
            return setTimeout(function() {
                return ("string" == typeof handler ? instance[handler] : handler).apply(instance, arguments)
            }, delay || 0)
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element), this._on(element, {
                mouseenter: function(event) {
                    $(event.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(event) {
                    $(event.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element), this._on(element, {
                focusin: function(event) {
                    $(event.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(event) {
                    $(event.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(type, event, data) {
            var prop, orig, callback = this.options[type];
            if (data = data || {}, (event = $.Event(event)).type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(), event.target = this.element[0], orig = event.originalEvent)
                for (prop in orig) prop in event || (event[prop] = orig[prop]);
            return this.element.trigger(event, data), !($.isFunction(callback) && !1 === callback.apply(this.element[0], [event].concat(data)) || event.isDefaultPrevented())
        }
    }, $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            "string" == typeof options && (options = {
                effect: options
            });
            var hasOptions, effectName = options ? !0 === options || "number" == typeof options ? defaultEffect : options.effect || defaultEffect : method;
            "number" == typeof(options = options || {}) && (options = {
                duration: options
            }), hasOptions = !$.isEmptyObject(options), options.complete = callback, options.delay && element.delay(options.delay), hasOptions && $.effects && $.effects.effect[effectName] ? element[method](options) : effectName !== method && element[effectName] ? element[effectName](options.duration, options.easing, callback) : element.queue(function(next) {
                $(this)[method](), callback && callback.call(element[0]), next()
            })
        }
    });
    $.widget;
    var mouseHandled = !1;
    $(document).mouseup(function() {
        mouseHandled = !1
    });
    $.widget("ui.mouse", {
        version: "1.11.0",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;
            this.element.bind("mousedown." + this.widgetName, function(event) {
                return that._mouseDown(event)
            }).bind("click." + this.widgetName, function(event) {
                if (!0 === $.data(event.target, that.widgetName + ".preventClickEvent")) return $.removeData(event.target, that.widgetName + ".preventClickEvent"), event.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(event) {
            if (!mouseHandled) {
                this._mouseStarted && this._mouseUp(event), this._mouseDownEvent = event;
                var that = this,
                    btnIsLeft = 1 === event.which,
                    elIsCancel = !("string" != typeof this.options.cancel || !event.target.nodeName) && $(event.target).closest(this.options.cancel).length;
                return !(btnIsLeft && !elIsCancel && this._mouseCapture(event)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(event) && this._mouseDelayMet(event) && (this._mouseStarted = !1 !== this._mouseStart(event), !this._mouseStarted) ? (event.preventDefault(), !0) : (!0 === $.data(event.target, this.widgetName + ".preventClickEvent") && $.removeData(event.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(event) {
                    return that._mouseMove(event)
                }, this._mouseUpDelegate = function(event) {
                    return that._mouseUp(event)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), event.preventDefault(), mouseHandled = !0))
            }
        },
        _mouseMove: function(event) {
            return $.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button ? this._mouseUp(event) : event.which ? this._mouseStarted ? (this._mouseDrag(event), event.preventDefault()) : (this._mouseDistanceMet(event) && this._mouseDelayMet(event) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, event), this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event)), !this._mouseStarted) : this._mouseUp(event)
        },
        _mouseUp: function(event) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, event.target === this._mouseDownEvent.target && $.data(event.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(event)), mouseHandled = !1
        },
        _mouseDistanceMet: function(event) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    ! function() {
        $.ui = $.ui || {};
        var cachedScrollbarWidth, supportsOffsetFractions, max = Math.max,
            abs = Math.abs,
            round = Math.round,
            rhorizontal = /left|center|right/,
            rvertical = /top|center|bottom/,
            roffset = /[\+\-]\d+(\.[\d]+)?%?/,
            rposition = /^\w+/,
            rpercent = /%$/,
            _position = $.fn.position;

        function getOffsets(offsets, width, height) {
            return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)]
        }

        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0
        }
        $.position = {
                scrollbarWidth: function() {
                    if (void 0 !== cachedScrollbarWidth) return cachedScrollbarWidth;
                    var w1, w2, div = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        innerDiv = div.children()[0];
                    return $("body").append(div), w1 = innerDiv.offsetWidth, div.css("overflow", "scroll"), w1 === (w2 = innerDiv.offsetWidth) && (w2 = div[0].clientWidth), div.remove(), cachedScrollbarWidth = w1 - w2
                },
                getScrollInfo: function(within) {
                    var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"),
                        overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"),
                        hasOverflowX = "scroll" === overflowX || "auto" === overflowX && within.width < within.element[0].scrollWidth;
                    return {
                        width: "scroll" === overflowY || "auto" === overflowY && within.height < within.element[0].scrollHeight ? $.position.scrollbarWidth() : 0,
                        height: hasOverflowX ? $.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(element) {
                    var withinElement = $(element || window),
                        isWindow = $.isWindow(withinElement[0]);
                    return {
                        element: withinElement,
                        isWindow: isWindow,
                        isDocument: !!withinElement[0] && 9 === withinElement[0].nodeType,
                        offset: withinElement.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: withinElement.scrollLeft(),
                        scrollTop: withinElement.scrollTop(),
                        width: isWindow ? withinElement.width() : withinElement.outerWidth(),
                        height: isWindow ? withinElement.height() : withinElement.outerHeight()
                    }
                }
            }, $.fn.position = function(options) {
                if (!options || !options.of) return _position.apply(this, arguments);
                options = $.extend({}, options);
                var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, elem, raw, target = $(options.of),
                    within = $.position.getWithinInfo(options.within),
                    scrollInfo = $.position.getScrollInfo(within),
                    collision = (options.collision || "flip").split(" "),
                    offsets = {};
                return dimensions = 9 === (raw = (elem = target)[0]).nodeType ? {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : $.isWindow(raw) ? {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {
                        top: elem.scrollTop(),
                        left: elem.scrollLeft()
                    }
                } : raw.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: raw.pageY,
                        left: raw.pageX
                    }
                } : {
                    width: elem.outerWidth(),
                    height: elem.outerHeight(),
                    offset: elem.offset()
                }, target[0].preventDefault && (options.at = "left top"), targetWidth = dimensions.width, targetHeight = dimensions.height, targetOffset = dimensions.offset, basePosition = $.extend({}, targetOffset), $.each(["my", "at"], function() {
                    var horizontalOffset, verticalOffset, pos = (options[this] || "").split(" ");
                    1 === pos.length && (pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"]), pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center", pos[1] = rvertical.test(pos[1]) ? pos[1] : "center", horizontalOffset = roffset.exec(pos[0]), verticalOffset = roffset.exec(pos[1]), offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0], options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]]
                }), 1 === collision.length && (collision[1] = collision[0]), "right" === options.at[0] ? basePosition.left += targetWidth : "center" === options.at[0] && (basePosition.left += targetWidth / 2), "bottom" === options.at[1] ? basePosition.top += targetHeight : "center" === options.at[1] && (basePosition.top += targetHeight / 2), atOffset = getOffsets(offsets.at, targetWidth, targetHeight), basePosition.left += atOffset[0], basePosition.top += atOffset[1], this.each(function() {
                    var collisionPosition, using, elem = $(this),
                        elemWidth = elem.outerWidth(),
                        elemHeight = elem.outerHeight(),
                        marginLeft = parseCss(this, "marginLeft"),
                        marginTop = parseCss(this, "marginTop"),
                        collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width,
                        collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height,
                        position = $.extend({}, basePosition),
                        myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
                    "right" === options.my[0] ? position.left -= elemWidth : "center" === options.my[0] && (position.left -= elemWidth / 2), "bottom" === options.my[1] ? position.top -= elemHeight : "center" === options.my[1] && (position.top -= elemHeight / 2), position.left += myOffset[0], position.top += myOffset[1], supportsOffsetFractions || (position.left = round(position.left), position.top = round(position.top)), collisionPosition = {
                        marginLeft: marginLeft,
                        marginTop: marginTop
                    }, $.each(["left", "top"], function(i, dir) {
                        $.ui.position[collision[i]] && $.ui.position[collision[i]][dir](position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        })
                    }), options.using && (using = function(props) {
                        var left = targetOffset.left - position.left,
                            right = left + targetWidth - elemWidth,
                            top = targetOffset.top - position.top,
                            bottom = top + targetHeight - elemHeight,
                            feedback = {
                                target: {
                                    element: target,
                                    left: targetOffset.left,
                                    top: targetOffset.top,
                                    width: targetWidth,
                                    height: targetHeight
                                },
                                element: {
                                    element: elem,
                                    left: position.left,
                                    top: position.top,
                                    width: elemWidth,
                                    height: elemHeight
                                },
                                horizontal: right < 0 ? "left" : 0 < left ? "right" : "center",
                                vertical: bottom < 0 ? "top" : 0 < top ? "bottom" : "middle"
                            };
                        targetWidth < elemWidth && abs(left + right) < targetWidth && (feedback.horizontal = "center"), targetHeight < elemHeight && abs(top + bottom) < targetHeight && (feedback.vertical = "middle"), max(abs(left), abs(right)) > max(abs(top), abs(bottom)) ? feedback.important = "horizontal" : feedback.important = "vertical", options.using.call(this, props, feedback)
                    }), elem.offset($.extend(position, {
                        using: using
                    }))
                })
            }, $.ui.position = {
                fit: {
                    left: function(position, data) {
                        var newOverRight, within = data.within,
                            withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
                            outerWidth = within.width,
                            collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                            overLeft = withinOffset - collisionPosLeft,
                            overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
                        data.collisionWidth > outerWidth ? 0 < overLeft && overRight <= 0 ? (newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset, position.left += overLeft - newOverRight) : position.left = 0 < overRight && overLeft <= 0 ? withinOffset : overRight < overLeft ? withinOffset + outerWidth - data.collisionWidth : withinOffset : 0 < overLeft ? position.left += overLeft : 0 < overRight ? position.left -= overRight : position.left = max(position.left - collisionPosLeft, position.left)
                    },
                    top: function(position, data) {
                        var newOverBottom, within = data.within,
                            withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
                            outerHeight = data.within.height,
                            collisionPosTop = position.top - data.collisionPosition.marginTop,
                            overTop = withinOffset - collisionPosTop,
                            overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
                        data.collisionHeight > outerHeight ? 0 < overTop && overBottom <= 0 ? (newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset, position.top += overTop - newOverBottom) : position.top = 0 < overBottom && overTop <= 0 ? withinOffset : overBottom < overTop ? withinOffset + outerHeight - data.collisionHeight : withinOffset : 0 < overTop ? position.top += overTop : 0 < overBottom ? position.top -= overBottom : position.top = max(position.top - collisionPosTop, position.top)
                    }
                },
                flip: {
                    left: function(position, data) {
                        var newOverRight, newOverLeft, within = data.within,
                            withinOffset = within.offset.left + within.scrollLeft,
                            outerWidth = within.width,
                            offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
                            collisionPosLeft = position.left - data.collisionPosition.marginLeft,
                            overLeft = collisionPosLeft - offsetLeft,
                            overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
                            myOffset = "left" === data.my[0] ? -data.elemWidth : "right" === data.my[0] ? data.elemWidth : 0,
                            atOffset = "left" === data.at[0] ? data.targetWidth : "right" === data.at[0] ? -data.targetWidth : 0,
                            offset = -2 * data.offset[0];
                        overLeft < 0 ? ((newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset) < 0 || newOverRight < abs(overLeft)) && (position.left += myOffset + atOffset + offset) : 0 < overRight && (0 < (newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft) || abs(newOverLeft) < overRight) && (position.left += myOffset + atOffset + offset)
                    },
                    top: function(position, data) {
                        var newOverTop, newOverBottom, within = data.within,
                            withinOffset = within.offset.top + within.scrollTop,
                            outerHeight = within.height,
                            offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
                            collisionPosTop = position.top - data.collisionPosition.marginTop,
                            overTop = collisionPosTop - offsetTop,
                            overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
                            top = "top" === data.my[1],
                            myOffset = top ? -data.elemHeight : "bottom" === data.my[1] ? data.elemHeight : 0,
                            atOffset = "top" === data.at[1] ? data.targetHeight : "bottom" === data.at[1] ? -data.targetHeight : 0,
                            offset = -2 * data.offset[1];
                        overTop < 0 ? (newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset, position.top + myOffset + atOffset + offset > overTop && (newOverBottom < 0 || newOverBottom < abs(overTop)) && (position.top += myOffset + atOffset + offset)) : 0 < overBottom && (newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop, position.top + myOffset + atOffset + offset > overBottom && (0 < newOverTop || abs(newOverTop) < overBottom) && (position.top += myOffset + atOffset + offset))
                    }
                },
                flipfit: {
                    left: function() {
                        $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var testElement, testElementParent, testElementStyle, offsetLeft, i, body = document.getElementsByTagName("body")[0],
                    div = document.createElement("div");
                for (i in testElement = document.createElement(body ? "div" : "body"), testElementStyle = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, body && $.extend(testElementStyle, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }), testElementStyle) testElement.style[i] = testElementStyle[i];
                testElement.appendChild(div), (testElementParent = body || document.documentElement).insertBefore(testElement, testElementParent.firstChild), div.style.cssText = "position: absolute; left: 10.7432222px;", offsetLeft = $(div).offset().left, supportsOffsetFractions = 10 < offsetLeft && offsetLeft < 11, testElement.innerHTML = "", testElementParent.removeChild(testElement)
            }()
    }();
    $.ui.position;
    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.11.0",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(key, value) {
            this._super(key, value), "handle" === key && this._setHandleClassName()
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy())
        },
        _mouseCapture: function(event) {
            var document = this.document[0],
                o = this.options;
            try {
                document.activeElement && "body" !== document.activeElement.nodeName.toLowerCase() && $(document.activeElement).blur()
            } catch (error) {}
            return !(this.helper || o.disabled || 0 < $(event.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(event), !!this.handle && ($(!0 === o.iframeFix ? "iframe" : o.iframeFix).each(function() {
                $("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css($(this).offset()).appendTo("body")
            }), !0))
        },
        _mouseStart: function(event) {
            var o = this.options;
            return this.helper = this._createHelper(event), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, $.extend(this.offset, {
                click: {
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(event, !1), this.originalPageX = event.pageX, this.originalPageY = event.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this._setContainment(), !1 === this._trigger("start", event) ? (this._clear(), !1) : (this._cacheHelperProportions(), $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, event), this._mouseDrag(event, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, event), !0)
        },
        _mouseDrag: function(event, noPropagation) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(event, !0), this.positionAbs = this._convertPositionTo("absolute"), !noPropagation) {
                var ui = this._uiHash();
                if (!1 === this._trigger("drag", event, ui)) return this._mouseUp({}), !1;
                this.position = ui.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", $.ui.ddmanager && $.ui.ddmanager.drag(this, event), !1
        },
        _mouseStop: function(event) {
            var that = this,
                dropped = !1;
            return $.ui.ddmanager && !this.options.dropBehaviour && (dropped = $.ui.ddmanager.drop(this, event)), this.dropped && (dropped = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !dropped || "valid" === this.options.revert && dropped || !0 === this.options.revert || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped) ? $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== that._trigger("stop", event) && that._clear()
            }) : !1 !== this._trigger("stop", event) && this._clear(), !1
        },
        _mouseUp: function(event) {
            return $("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, event), this.element.focus(), $.ui.mouse.prototype._mouseUp.call(this, event)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(event) {
            return !this.options.handle || !!$(event.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this._removeHandleClassName(), $(this.options.handle || this.element).addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.element.find(".ui-draggable-handle").addBack().removeClass("ui-draggable-handle")
        },
        _createHelper: function(event) {
            var o = this.options,
                helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : "clone" === o.helper ? this.element.clone().removeAttr("id") : this.element;
            return helper.parents("body").length || helper.appendTo("parent" === o.appendTo ? this.element[0].parentNode : o.appendTo), helper[0] === this.element[0] || /(fixed|absolute)/.test(helper.css("position")) || helper.css("position", "absolute"), helper
        },
        _adjustOffsetFromHelper: function(obj) {
            "string" == typeof obj && (obj = obj.split(" ")), $.isArray(obj) && (obj = {
                left: +obj[0],
                top: +obj[1] || 0
            }), "left" in obj && (this.offset.click.left = obj.left + this.margins.left), "right" in obj && (this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left), "top" in obj && (this.offset.click.top = obj.top + this.margins.top), "bottom" in obj && (this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top)
        },
        _isRootNode: function(element) {
            return /(html|body)/i.test(element.tagName) || element === this.document[0]
        },
        _getParentOffset: function() {
            var po = this.offsetParent.offset(),
                document = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) && (po.left += this.scrollParent.scrollLeft(), po.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (po = {
                top: 0,
                left: 0
            }), {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (scrollIsRootNode ? 0 : this.scrollParent.scrollTop()),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (scrollIsRootNode ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var over, c, ce, o = this.options,
                document = this.document[0];
            this.relative_container = null, o.containment ? "window" !== o.containment ? "document" !== o.containment ? o.containment.constructor !== Array ? ("parent" === o.containment && (o.containment = this.helper[0].parentNode), (ce = (c = $(o.containment))[0]) && (over = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c)) : this.containment = o.containment : this.containment = [0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
        },
        _convertPositionTo: function(d, pos) {
            pos || (pos = this.position);
            var mod = "absolute" === d ? 1 : -1,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ("fixed" === this.cssPosition ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ("fixed" === this.cssPosition ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
            }
        },
        _generatePosition: function(event, constrainPosition) {
            var containment, co, top, left, o = this.options,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]),
                pageX = event.pageX,
                pageY = event.pageY;
            return scrollIsRootNode && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), constrainPosition && (this.containment && (containment = this.relative_container ? (co = this.relative_container.offset(), [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top]) : this.containment, event.pageX - this.offset.click.left < containment[0] && (pageX = containment[0] + this.offset.click.left), event.pageY - this.offset.click.top < containment[1] && (pageY = containment[1] + this.offset.click.top), event.pageX - this.offset.click.left > containment[2] && (pageX = containment[2] + this.offset.click.left), event.pageY - this.offset.click.top > containment[3] && (pageY = containment[3] + this.offset.click.top)), o.grid && (top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top, left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left), "y" === o.axis && (pageX = this.originalPageX), "x" === o.axis && (pageY = this.originalPageY)), {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function(type, event, ui) {
            return ui = ui || this._uiHash(), $.ui.plugin.call(this, type, [event, ui, this], !0), "drag" === type && (this.positionAbs = this._convertPositionTo("absolute")), $.Widget.prototype._trigger.call(this, type, event, ui)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), $.ui.plugin.add("draggable", "connectToSortable", {
        start: function(event, ui, inst) {
            var o = inst.options,
                uiSortable = $.extend({}, ui, {
                    item: inst.element
                });
            inst.sortables = [], $(o.connectToSortable).each(function() {
                var sortable = $(this).sortable("instance");
                sortable && !sortable.options.disabled && (inst.sortables.push({
                    instance: sortable,
                    shouldRevert: sortable.options.revert
                }), sortable.refreshPositions(), sortable._trigger("activate", event, uiSortable))
            })
        },
        stop: function(event, ui, inst) {
            var uiSortable = $.extend({}, ui, {
                item: inst.element
            });
            $.each(inst.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, inst.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(event), this.instance.options.helper = this.instance.options._helper, "original" === inst.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", event, uiSortable))
            })
        },
        drag: function(event, ui, inst) {
            var that = this;
            $.each(inst.sortables, function() {
                var innermostIntersecting = !1,
                    thisSortable = this;
                this.instance.positionAbs = inst.positionAbs, this.instance.helperProportions = inst.helperProportions, this.instance.offset.click = inst.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (innermostIntersecting = !0, $.each(inst.sortables, function() {
                    return this.instance.positionAbs = inst.positionAbs, this.instance.helperProportions = inst.helperProportions, this.instance.offset.click = inst.offset.click, this !== thisSortable && this.instance._intersectsWith(this.instance.containerCache) && $.contains(thisSortable.instance.element[0], this.instance.element[0]) && (innermostIntersecting = !1), innermostIntersecting
                })), innermostIntersecting ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = $(that).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return ui.helper[0]
                }, event.target = this.instance.currentItem[0], this.instance._mouseCapture(event, !0), this.instance._mouseStart(event, !0, !0), this.instance.offset.click.top = inst.offset.click.top, this.instance.offset.click.left = inst.offset.click.left, this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top, inst._trigger("toSortable", event), inst.dropped = this.instance.element, inst.currentItem = inst.element, this.instance.fromOutside = inst), this.instance.currentItem && this.instance._mouseDrag(event)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", event, this.instance._uiHash(this.instance)), this.instance._mouseStop(event, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), inst._trigger("fromSortable", event), inst.dropped = !1)
            })
        }
    }), $.ui.plugin.add("draggable", "cursor", {
        start: function(event, ui, instance) {
            var t = $("body"),
                o = instance.options;
            t.css("cursor") && (o._cursor = t.css("cursor")), t.css("cursor", o.cursor)
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            o._cursor && $("body").css("cursor", o._cursor)
        }
    }), $.ui.plugin.add("draggable", "opacity", {
        start: function(event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;
            t.css("opacity") && (o._opacity = t.css("opacity")), t.css("opacity", o.opacity)
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            o._opacity && $(ui.helper).css("opacity", o._opacity)
        }
    }), $.ui.plugin.add("draggable", "scroll", {
        start: function(event, ui, i) {
            i.scrollParent[0] !== i.document[0] && "HTML" !== i.scrollParent[0].tagName && (i.overflowOffset = i.scrollParent.offset())
        },
        drag: function(event, ui, i) {
            var o = i.options,
                scrolled = !1,
                document = i.document[0];
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (o.axis && "x" === o.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity ? i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed : event.pageY - i.overflowOffset.top < o.scrollSensitivity && (i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity ? i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed : event.pageX - i.overflowOffset.left < o.scrollSensitivity && (i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (event.pageY - $(document).scrollTop() < o.scrollSensitivity ? scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed) : $(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity && (scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (event.pageX - $(document).scrollLeft() < o.scrollSensitivity ? scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed) : $(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity && (scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed)))), !1 !== scrolled && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(i, event)
        }
    }), $.ui.plugin.add("draggable", "snap", {
        start: function(event, ui, i) {
            var o = i.options;
            i.snapElements = [], $(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                var $t = $(this),
                    $o = $t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: $t.outerWidth(),
                    height: $t.outerHeight(),
                    top: $o.top,
                    left: $o.left
                })
            })
        },
        drag: function(event, ui, inst) {
            var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left,
                x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top,
                y2 = y1 + inst.helperProportions.height;
            for (i = inst.snapElements.length - 1; 0 <= i; i--) r = (l = inst.snapElements[i].left) + inst.snapElements[i].width, b = (t = inst.snapElements[i].top) + inst.snapElements[i].height, x2 < l - d || r + d < x1 || y2 < t - d || b + d < y1 || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item) ? (inst.snapElements[i].snapping && inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
                snapItem: inst.snapElements[i].item
            })), inst.snapElements[i].snapping = !1) : ("inner" !== o.snapMode && (ts = Math.abs(t - y2) <= d, bs = Math.abs(b - y1) <= d, ls = Math.abs(l - x2) <= d, rs = Math.abs(r - x1) <= d, ts && (ui.position.top = inst._convertPositionTo("relative", {
                top: t - inst.helperProportions.height,
                left: 0
            }).top - inst.margins.top), bs && (ui.position.top = inst._convertPositionTo("relative", {
                top: b,
                left: 0
            }).top - inst.margins.top), ls && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: l - inst.helperProportions.width
            }).left - inst.margins.left), rs && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - inst.margins.left)), first = ts || bs || ls || rs, "outer" !== o.snapMode && (ts = Math.abs(t - y1) <= d, bs = Math.abs(b - y2) <= d, ls = Math.abs(l - x1) <= d, rs = Math.abs(r - x2) <= d, ts && (ui.position.top = inst._convertPositionTo("relative", {
                top: t,
                left: 0
            }).top - inst.margins.top), bs && (ui.position.top = inst._convertPositionTo("relative", {
                top: b - inst.helperProportions.height,
                left: 0
            }).top - inst.margins.top), ls && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - inst.margins.left), rs && (ui.position.left = inst._convertPositionTo("relative", {
                top: 0,
                left: r - inst.helperProportions.width
            }).left - inst.margins.left)), !inst.snapElements[i].snapping && (ts || bs || ls || rs || first) && inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                snapItem: inst.snapElements[i].item
            })), inst.snapElements[i].snapping = ts || bs || ls || rs || first)
        }
    }), $.ui.plugin.add("draggable", "stack", {
        start: function(event, ui, instance) {
            var min, o = instance.options,
                group = $.makeArray($(o.stack)).sort(function(a, b) {
                    return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0)
                });
            group.length && (min = parseInt($(group[0]).css("zIndex"), 10) || 0, $(group).each(function(i) {
                $(this).css("zIndex", min + i)
            }), this.css("zIndex", min + group.length))
        }
    }), $.ui.plugin.add("draggable", "zIndex", {
        start: function(event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;
            t.css("zIndex") && (o._zIndex = t.css("zIndex")), t.css("zIndex", o.zIndex)
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            o._zIndex && $(ui.helper).css("zIndex", o._zIndex)
        }
    });
    $.ui.draggable;
    $.widget("ui.droppable", {
        version: "1.11.0",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var proportions, o = this.options,
                accept = o.accept;
            this.isover = !1, this.isout = !0, this.accept = $.isFunction(accept) ? accept : function(d) {
                return d.is(accept)
            }, this.proportions = function() {
                if (!arguments.length) return proportions || (proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
                proportions = arguments[0]
            }, this._addToManager(o.scope), o.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(scope) {
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [], $.ui.ddmanager.droppables[scope].push(this)
        },
        _splice: function(drop) {
            for (var i = 0; i < drop.length; i++) drop[i] === this && drop.splice(i, 1)
        },
        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[this.options.scope];
            this._splice(drop), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(key, value) {
            if ("accept" === key) this.accept = $.isFunction(value) ? value : function(d) {
                return d.is(value)
            };
            else if ("scope" === key) {
                var drop = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(drop), this._addToManager(value)
            }
            this._super(key, value)
        },
        _activate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), draggable && this._trigger("activate", event, this.ui(draggable))
        },
        _deactivate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), draggable && this._trigger("deactivate", event, this.ui(draggable))
        },
        _over: function(event) {
            var draggable = $.ui.ddmanager.current;
            draggable && (draggable.currentItem || draggable.element)[0] !== this.element[0] && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", event, this.ui(draggable)))
        },
        _out: function(event) {
            var draggable = $.ui.ddmanager.current;
            draggable && (draggable.currentItem || draggable.element)[0] !== this.element[0] && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", event, this.ui(draggable)))
        },
        _drop: function(event, custom) {
            var draggable = custom || $.ui.ddmanager.current,
                childrenIntersection = !1;
            return !(!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var inst = $(this).droppable("instance");
                if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && $.ui.intersect(draggable, $.extend(inst, {
                        offset: inst.element.offset()
                    }), inst.options.tolerance)) return !(childrenIntersection = !0)
            }), !childrenIntersection && (!!this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", event, this.ui(draggable)), this.element)))
        },
        ui: function(c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            }
        }
    }), $.ui.intersect = function() {
        function isOverAxis(x, reference, size) {
            return reference <= x && x < reference + size
        }
        return function(draggable, droppable, toleranceMode) {
            if (!droppable.offset) return !1;
            var draggableLeft, x1 = (draggable.positionAbs || draggable.position.absolute).left,
                y1 = (draggable.positionAbs || draggable.position.absolute).top,
                x2 = x1 + draggable.helperProportions.width,
                y2 = y1 + draggable.helperProportions.height,
                l = droppable.offset.left,
                t = droppable.offset.top,
                r = l + droppable.proportions().width,
                b = t + droppable.proportions().height;
            switch (toleranceMode) {
                case "fit":
                    return l <= x1 && x2 <= r && t <= y1 && y2 <= b;
                case "intersect":
                    return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;
                case "pointer":
                    return draggableLeft = (draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left, isOverAxis((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top, t, droppable.proportions().height) && isOverAxis(draggableLeft, l, droppable.proportions().width);
                case "touch":
                    return (t <= y1 && y1 <= b || t <= y2 && y2 <= b || y1 < t && b < y2) && (l <= x1 && x1 <= r || l <= x2 && x2 <= r || x1 < l && r < x2);
                default:
                    return !1
            }
        }
    }(), $.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, event) {
            var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [],
                type = event ? event.type : null,
                list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (i = 0; i < m.length; i++)
                if (!(m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element))) {
                    for (j = 0; j < list.length; j++)
                        if (list[j] === m[i].element[0]) {
                            m[i].proportions().height = 0;
                            continue droppablesLoop
                        } m[i].visible = "none" !== m[i].element.css("display"), m[i].visible && ("mousedown" === type && m[i]._activate.call(m[i], event), m[i].offset = m[i].element.offset(), m[i].proportions({
                        width: m[i].element[0].offsetWidth,
                        height: m[i].element[0].offsetHeight
                    }))
                }
        },
        drop: function(draggable, event) {
            var dropped = !1;
            return $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance) && (dropped = this._drop.call(this, event) || dropped), !this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, event)))
            }), dropped
        },
        dragStart: function(draggable, event) {
            draggable.element.parentsUntil("body").bind("scroll.droppable", function() {
                draggable.options.refreshPositions || $.ui.ddmanager.prepareOffsets(draggable, event)
            })
        },
        drag: function(draggable, event) {
            draggable.options.refreshPositions && $.ui.ddmanager.prepareOffsets(draggable, event), $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var parentInstance, scope, parent, intersects = $.ui.intersect(draggable, this, this.options.tolerance),
                        c = !intersects && this.isover ? "isout" : intersects && !this.isover ? "isover" : null;
                    c && (this.options.greedy && (scope = this.options.scope, (parent = this.element.parents(":data(ui-droppable)").filter(function() {
                        return $(this).droppable("instance").options.scope === scope
                    })).length && ((parentInstance = $(parent[0]).droppable("instance")).greedyChild = "isover" === c)), parentInstance && "isover" === c && (parentInstance.isover = !1, parentInstance.isout = !0, parentInstance._out.call(parentInstance, event)), this[c] = !0, this["isout" === c ? "isover" : "isout"] = !1, this["isover" === c ? "_over" : "_out"].call(this, event), parentInstance && "isout" === c && (parentInstance.isout = !1, parentInstance.isover = !0, parentInstance._over.call(parentInstance, event)))
                }
            })
        },
        dragStop: function(draggable, event) {
            draggable.element.parentsUntil("body").unbind("scroll.droppable"), draggable.options.refreshPositions || $.ui.ddmanager.prepareOffsets(draggable, event)
        }
    };
    $.ui.droppable;
    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.11.0",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(value) {
            return parseInt(value, 10) || 0
        },
        _isNumber: function(value) {
            return !isNaN(parseInt(value, 10))
        },
        _hasScroll: function(el, a) {
            if ("hidden" === $(el).css("overflow")) return !1;
            var has, scroll = a && "left" === a ? "scrollLeft" : "scrollTop";
            return 0 < el[scroll] || (el[scroll] = 1, has = 0 < el[scroll], el[scroll] = 0, has)
        },
        _create: function() {
            var n, i, handle, axis, that = this,
                o = this.options;
            if (this.element.addClass("ui-resizable"), $.extend(this, {
                    _aspectRatio: !!o.aspectRatio,
                    aspectRatio: o.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = o.handles || ($(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) handle = $.trim(n[i]), (axis = $("<div class='ui-resizable-handle " + ("ui-resizable-" + handle) + "'></div>")).css({
                    zIndex: o.zIndex
                }), "se" === handle && axis.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[handle] = ".ui-resizable-" + handle, this.element.append(axis);
            this._renderAxis = function(target) {
                var i, axis, padPos, padWrapper;
                for (i in target = target || this.element, this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (axis = $(this.handles[i], this.element), padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth(), padPos = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), target.css(padPos, padWrapper), this._proportionallyResize()), $(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = $(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                that.resizing || (this.className && (axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), that.axis = axis && axis[1] ? axis[1] : "se")
            }), o.autoHide && (this._handles.hide(), $(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                o.disabled || ($(this).removeClass("ui-resizable-autohide"), that._handles.show())
            }).mouseleave(function() {
                o.disabled || that.resizing || ($(this).addClass("ui-resizable-autohide"), that._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var wrapper, _destroy = function(exp) {
                $(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (_destroy(this.element), wrapper = this.element, this.originalElement.css({
                position: wrapper.css("position"),
                width: wrapper.outerWidth(),
                height: wrapper.outerHeight(),
                top: wrapper.css("top"),
                left: wrapper.css("left")
            }).insertAfter(wrapper), wrapper.remove()), this.originalElement.css("resize", this.originalResizeStyle), _destroy(this.originalElement), this
        },
        _mouseCapture: function(event) {
            var i, handle, capture = !1;
            for (i in this.handles)((handle = $(this.handles[i])[0]) === event.target || $.contains(handle, event.target)) && (capture = !0);
            return !this.options.disabled && capture
        },
        _mouseStart: function(event) {
            var curleft, curtop, cursor, o = this.options,
                el = this.element;
            return this.resizing = !0, this._renderProxy(), curleft = this._num(this.helper.css("left")), curtop = this._num(this.helper.css("top")), o.containment && (curleft += $(o.containment).scrollLeft() || 0, curtop += $(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: curleft,
                top: curtop
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            }, this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            }, this.originalPosition = {
                left: curleft,
                top: curtop
            }, this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            }, this.originalMousePosition = {
                left: event.pageX,
                top: event.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, cursor = $(".ui-resizable-" + this.axis).css("cursor"), $("body").css("cursor", "auto" === cursor ? this.axis + "-resize" : cursor), el.addClass("ui-resizable-resizing"), this._propagate("start", event), !0
        },
        _mouseDrag: function(event) {
            var data, el = this.helper,
                props = {},
                smp = this.originalMousePosition,
                a = this.axis,
                dx = event.pageX - smp.left || 0,
                dy = event.pageY - smp.top || 0,
                trigger = this._change[a];
            return this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }, trigger && (data = trigger.apply(this, [event, dx, dy]), this._updateVirtualBoundaries(event.shiftKey), (this._aspectRatio || event.shiftKey) && (data = this._updateRatio(data, event)), data = this._respectSize(data, event), this._updateCache(data), this._propagate("resize", event), this.position.top !== this.prevPosition.top && (props.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (props.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (props.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (props.height = this.size.height + "px"), el.css(props), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), $.isEmptyObject(props) || this._trigger("resize", event, this.ui())), !1
        },
        _mouseStop: function(event) {
            this.resizing = !1;
            var pr, ista, soffseth, soffsetw, s, left, top, o = this.options;
            return this._helper && (soffseth = (ista = (pr = this._proportionallyResizeElements).length && /textarea/i.test(pr[0].nodeName)) && this._hasScroll(pr[0], "left") ? 0 : this.sizeDiff.height, soffsetw = ista ? 0 : this.sizeDiff.width, s = {
                width: this.helper.width() - soffsetw,
                height: this.helper.height() - soffseth
            }, left = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, top = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, o.animate || this.element.css($.extend(s, {
                top: top,
                left: left
            })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !o.animate && this._proportionallyResize()), $("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", event), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options;
            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || forceAspectRatio) && (pMinWidth = b.minHeight * this.aspectRatio, pMinHeight = b.minWidth / this.aspectRatio, pMaxWidth = b.maxHeight * this.aspectRatio, pMaxHeight = b.maxWidth / this.aspectRatio, pMinWidth > b.minWidth && (b.minWidth = pMinWidth), pMinHeight > b.minHeight && (b.minHeight = pMinHeight), pMaxWidth < b.maxWidth && (b.maxWidth = pMaxWidth), pMaxHeight < b.maxHeight && (b.maxHeight = pMaxHeight)), this._vBoundaries = b
        },
        _updateCache: function(data) {
            this.offset = this.helper.offset(), this._isNumber(data.left) && (this.position.left = data.left), this._isNumber(data.top) && (this.position.top = data.top), this._isNumber(data.height) && (this.size.height = data.height), this._isNumber(data.width) && (this.size.width = data.width)
        },
        _updateRatio: function(data) {
            var cpos = this.position,
                csize = this.size,
                a = this.axis;
            return this._isNumber(data.height) ? data.width = data.height * this.aspectRatio : this._isNumber(data.width) && (data.height = data.width / this.aspectRatio), "sw" === a && (data.left = cpos.left + (csize.width - data.width), data.top = null), "nw" === a && (data.top = cpos.top + (csize.height - data.height), data.left = cpos.left + (csize.width - data.width)), data
        },
        _respectSize: function(data) {
            var o = this._vBoundaries,
                a = this.axis,
                ismaxw = this._isNumber(data.width) && o.maxWidth && o.maxWidth < data.width,
                ismaxh = this._isNumber(data.height) && o.maxHeight && o.maxHeight < data.height,
                isminw = this._isNumber(data.width) && o.minWidth && o.minWidth > data.width,
                isminh = this._isNumber(data.height) && o.minHeight && o.minHeight > data.height,
                dw = this.originalPosition.left + this.originalSize.width,
                dh = this.position.top + this.size.height,
                cw = /sw|nw|w/.test(a),
                ch = /nw|ne|n/.test(a);
            return isminw && (data.width = o.minWidth), isminh && (data.height = o.minHeight), ismaxw && (data.width = o.maxWidth), ismaxh && (data.height = o.maxHeight), isminw && cw && (data.left = dw - o.minWidth), ismaxw && cw && (data.left = dw - o.maxWidth), isminh && ch && (data.top = dh - o.minHeight), ismaxh && ch && (data.top = dh - o.maxHeight), data.width || data.height || data.left || !data.top ? data.width || data.height || data.top || !data.left || (data.left = null) : data.top = null, data
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var i, j, borders, paddings, prel, element = this.helper || this.element;
                for (i = 0; i < this._proportionallyResizeElements.length; i++) {
                    if (prel = this._proportionallyResizeElements[i], !this.borderDif)
                        for (this.borderDif = [], borders = [prel.css("borderTopWidth"), prel.css("borderRightWidth"), prel.css("borderBottomWidth"), prel.css("borderLeftWidth")], paddings = [prel.css("paddingTop"), prel.css("paddingRight"), prel.css("paddingBottom"), prel.css("paddingLeft")], j = 0; j < borders.length; j++) this.borderDif[j] = (parseInt(borders[j], 10) || 0) + (parseInt(paddings[j], 10) || 0);
                    prel.css({
                        height: element.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: element.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var el = this.element,
                o = this.options;
            this.elementOffset = el.offset(), this._helper ? (this.helper = this.helper || $("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++o.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(event, dx) {
                return {
                    width: this.originalSize.width + dx
                }
            },
            w: function(event, dx) {
                var cs = this.originalSize;
                return {
                    left: this.originalPosition.left + dx,
                    width: cs.width - dx
                }
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize;
                return {
                    top: this.originalPosition.top + dy,
                    height: cs.height - dy
                }
            },
            s: function(event, dx, dy) {
                return {
                    height: this.originalSize.height + dy
                }
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]))
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]))
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]))
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]))
            }
        },
        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [event, this.ui()]), "resize" !== n && this._trigger(n, event, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition,
                prevSize: this.prevSize,
                prevPosition: this.prevPosition
            }
        }
    }), $.ui.plugin.add("resizable", "animate", {
        stop: function(event) {
            var that = $(this).resizable("instance"),
                o = that.options,
                pr = that._proportionallyResizeElements,
                ista = pr.length && /textarea/i.test(pr[0].nodeName),
                soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height,
                soffsetw = ista ? 0 : that.sizeDiff.width,
                style = {
                    width: that.size.width - soffsetw,
                    height: that.size.height - soffseth
                },
                left = parseInt(that.element.css("left"), 10) + (that.position.left - that.originalPosition.left) || null,
                top = parseInt(that.element.css("top"), 10) + (that.position.top - that.originalPosition.top) || null;
            that.element.animate($.extend(style, top && left ? {
                top: top,
                left: left
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {
                    var data = {
                        width: parseInt(that.element.css("width"), 10),
                        height: parseInt(that.element.css("height"), 10),
                        top: parseInt(that.element.css("top"), 10),
                        left: parseInt(that.element.css("left"), 10)
                    };
                    pr && pr.length && $(pr[0]).css({
                        width: data.width,
                        height: data.height
                    }), that._updateCache(data), that._propagate("resize", event)
                }
            })
        }
    }), $.ui.plugin.add("resizable", "containment", {
        start: function() {
            var element, p, co, ch, cw, width, height, that = $(this).resizable("instance"),
                o = that.options,
                el = that.element,
                oc = o.containment,
                ce = oc instanceof $ ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;
            ce && (that.containerElement = $(ce), /document/.test(oc) || oc === document ? (that.containerOffset = {
                left: 0,
                top: 0
            }, that.containerPosition = {
                left: 0,
                top: 0
            }, that.parentData = {
                element: $(document),
                left: 0,
                top: 0,
                width: $(document).width(),
                height: $(document).height() || document.body.parentNode.scrollHeight
            }) : (element = $(ce), p = [], $(["Top", "Right", "Left", "Bottom"]).each(function(i, name) {
                p[i] = that._num(element.css("padding" + name))
            }), that.containerOffset = element.offset(), that.containerPosition = element.position(), that.containerSize = {
                height: element.innerHeight() - p[3],
                width: element.innerWidth() - p[1]
            }, co = that.containerOffset, ch = that.containerSize.height, cw = that.containerSize.width, width = that._hasScroll(ce, "left") ? ce.scrollWidth : cw, height = that._hasScroll(ce) ? ce.scrollHeight : ch, that.parentData = {
                element: ce,
                left: co.left,
                top: co.top,
                width: width,
                height: height
            }))
        },
        resize: function(event, ui) {
            var woset, hoset, isParent, isOffsetRelative, that = $(this).resizable("instance"),
                o = that.options,
                co = that.containerOffset,
                cp = that.position,
                pRatio = that._aspectRatio || event.shiftKey,
                cop = {
                    top: 0,
                    left: 0
                },
                ce = that.containerElement,
                continueResize = !0;
            ce[0] !== document && /static/.test(ce.css("position")) && (cop = co), cp.left < (that._helper ? co.left : 0) && (that.size.width = that.size.width + (that._helper ? that.position.left - co.left : that.position.left - cop.left), pRatio && (that.size.height = that.size.width / that.aspectRatio, continueResize = !1), that.position.left = o.helper ? co.left : 0), cp.top < (that._helper ? co.top : 0) && (that.size.height = that.size.height + (that._helper ? that.position.top - co.top : that.position.top), pRatio && (that.size.width = that.size.height * that.aspectRatio, continueResize = !1), that.position.top = that._helper ? co.top : 0), that.offset.left = that.parentData.left + that.position.left, that.offset.top = that.parentData.top + that.position.top, woset = Math.abs((that._helper ? that.offset.left - cop.left : that.offset.left - co.left) + that.sizeDiff.width), hoset = Math.abs((that._helper ? that.offset.top - cop.top : that.offset.top - co.top) + that.sizeDiff.height), isParent = that.containerElement.get(0) === that.element.parent().get(0), isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position")), isParent && isOffsetRelative && (woset -= Math.abs(that.parentData.left)), woset + that.size.width >= that.parentData.width && (that.size.width = that.parentData.width - woset, pRatio && (that.size.height = that.size.width / that.aspectRatio, continueResize = !1)), hoset + that.size.height >= that.parentData.height && (that.size.height = that.parentData.height - hoset, pRatio && (that.size.width = that.size.height * that.aspectRatio, continueResize = !1)), continueResize || (that.position.left = ui.prevPosition.left, that.position.top = ui.prevPosition.top, that.size.width = ui.prevSize.width, that.size.height = ui.prevSize.height)
        },
        stop: function() {
            var that = $(this).resizable("instance"),
                o = that.options,
                co = that.containerOffset,
                cop = that.containerPosition,
                ce = that.containerElement,
                helper = $(that.helper),
                ho = helper.offset(),
                w = helper.outerWidth() - that.sizeDiff.width,
                h = helper.outerHeight() - that.sizeDiff.height;
            that._helper && !o.animate && /relative/.test(ce.css("position")) && $(this).css({
                left: ho.left - cop.left - co.left,
                width: w,
                height: h
            }), that._helper && !o.animate && /static/.test(ce.css("position")) && $(this).css({
                left: ho.left - cop.left - co.left,
                width: w,
                height: h
            })
        }
    }), $.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var o = $(this).resizable("instance").options,
                _store = function(exp) {
                    $(exp).each(function() {
                        var el = $(this);
                        el.data("ui-resizable-alsoresize", {
                            width: parseInt(el.width(), 10),
                            height: parseInt(el.height(), 10),
                            left: parseInt(el.css("left"), 10),
                            top: parseInt(el.css("top"), 10)
                        })
                    })
                };
            "object" !== _typeof(o.alsoResize) || o.alsoResize.parentNode ? _store(o.alsoResize) : o.alsoResize.length ? (o.alsoResize = o.alsoResize[0], _store(o.alsoResize)) : $.each(o.alsoResize, function(exp) {
                _store(exp)
            })
        },
        resize: function(event, ui) {
            var that = $(this).resizable("instance"),
                o = that.options,
                os = that.originalSize,
                op = that.originalPosition,
                delta = {
                    height: that.size.height - os.height || 0,
                    width: that.size.width - os.width || 0,
                    top: that.position.top - op.top || 0,
                    left: that.position.left - op.left || 0
                },
                _alsoResize = function(exp, c) {
                    $(exp).each(function() {
                        var el = $(this),
                            start = $(this).data("ui-resizable-alsoresize"),
                            style = {},
                            css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        $.each(css, function(i, prop) {
                            var sum = (start[prop] || 0) + (delta[prop] || 0);
                            sum && 0 <= sum && (style[prop] = sum || null)
                        }), el.css(style)
                    })
                };
            "object" !== _typeof(o.alsoResize) || o.alsoResize.nodeType ? _alsoResize(o.alsoResize) : $.each(o.alsoResize, function(exp, c) {
                _alsoResize(exp, c)
            })
        },
        stop: function() {
            $(this).removeData("resizable-alsoresize")
        }
    }), $.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var that = $(this).resizable("instance"),
                o = that.options,
                cs = that.size;
            that.ghost = that.originalElement.clone(), that.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof o.ghost ? o.ghost : ""), that.ghost.appendTo(that.helper)
        },
        resize: function() {
            var that = $(this).resizable("instance");
            that.ghost && that.ghost.css({
                position: "relative",
                height: that.size.height,
                width: that.size.width
            })
        },
        stop: function() {
            var that = $(this).resizable("instance");
            that.ghost && that.helper && that.helper.get(0).removeChild(that.ghost.get(0))
        }
    }), $.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var that = $(this).resizable("instance"),
                o = that.options,
                cs = that.size,
                os = that.originalSize,
                op = that.originalPosition,
                a = that.axis,
                grid = "number" == typeof o.grid ? [o.grid, o.grid] : o.grid,
                gridX = grid[0] || 1,
                gridY = grid[1] || 1,
                ox = Math.round((cs.width - os.width) / gridX) * gridX,
                oy = Math.round((cs.height - os.height) / gridY) * gridY,
                newWidth = os.width + ox,
                newHeight = os.height + oy,
                isMaxWidth = o.maxWidth && o.maxWidth < newWidth,
                isMaxHeight = o.maxHeight && o.maxHeight < newHeight,
                isMinWidth = o.minWidth && o.minWidth > newWidth,
                isMinHeight = o.minHeight && o.minHeight > newHeight;
            o.grid = grid, isMinWidth && (newWidth += gridX), isMinHeight && (newHeight += gridY), isMaxWidth && (newWidth -= gridX), isMaxHeight && (newHeight -= gridY), /^(se|s|e)$/.test(a) ? (that.size.width = newWidth, that.size.height = newHeight) : /^(ne)$/.test(a) ? (that.size.width = newWidth, that.size.height = newHeight, that.position.top = op.top - oy) : /^(sw)$/.test(a) ? (that.size.width = newWidth, that.size.height = newHeight, that.position.left = op.left - ox) : (0 < newHeight - gridY ? (that.size.height = newHeight, that.position.top = op.top - oy) : (that.size.height = gridY, that.position.top = op.top + os.height - gridY), 0 < newWidth - gridX ? (that.size.width = newWidth, that.position.left = op.left - ox) : (that.size.width = gridX, that.position.left = op.left + os.width - gridX))
        }
    });
    $.ui.resizable, $.widget("ui.selectable", $.ui.mouse, {
        version: "1.11.0",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var selectees, that = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                (selectees = $(that.options.filter, that.element[0])).addClass("ui-selectee"), selectees.each(function() {
                    var $this = $(this),
                        pos = $this.offset();
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: !1,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = selectees.addClass("ui-selectee"), this._mouseInit(), this.helper = $("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(event) {
            var that = this,
                options = this.options;
            this.opos = [event.pageX, event.pageY], this.options.disabled || (this.selectees = $(options.filter, this.element[0]), this._trigger("start", event), $(options.appendTo).append(this.helper), this.helper.css({
                left: event.pageX,
                top: event.pageY,
                width: 0,
                height: 0
            }), options.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = !0, event.metaKey || event.ctrlKey || (selectee.$element.removeClass("ui-selected"), selectee.selected = !1, selectee.$element.addClass("ui-unselecting"), selectee.unselecting = !0, that._trigger("unselecting", event, {
                    unselecting: selectee.element
                }))
            }), $(event.target).parents().addBack().each(function() {
                var doSelect, selectee = $.data(this, "selectable-item");
                if (selectee) return doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass("ui-selected"), selectee.$element.removeClass(doSelect ? "ui-unselecting" : "ui-selected").addClass(doSelect ? "ui-selecting" : "ui-unselecting"), selectee.unselecting = !doSelect, selectee.selecting = doSelect, (selectee.selected = doSelect) ? that._trigger("selecting", event, {
                    selecting: selectee.element
                }) : that._trigger("unselecting", event, {
                    unselecting: selectee.element
                }), !1
            }))
        },
        _mouseDrag: function(event) {
            if (this.dragged = !0, !this.options.disabled) {
                var tmp, that = this,
                    options = this.options,
                    x1 = this.opos[0],
                    y1 = this.opos[1],
                    x2 = event.pageX,
                    y2 = event.pageY;
                return x2 < x1 && (tmp = x2, x2 = x1, x1 = tmp), y2 < y1 && (tmp = y2, y2 = y1, y1 = tmp), this.helper.css({
                    left: x1,
                    top: y1,
                    width: x2 - x1,
                    height: y2 - y1
                }), this.selectees.each(function() {
                    var selectee = $.data(this, "selectable-item"),
                        hit = !1;
                    selectee && selectee.element !== that.element[0] && ("touch" === options.tolerance ? hit = !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) : "fit" === options.tolerance && (hit = selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2), hit ? (selectee.selected && (selectee.$element.removeClass("ui-selected"), selectee.selected = !1), selectee.unselecting && (selectee.$element.removeClass("ui-unselecting"), selectee.unselecting = !1), selectee.selecting || (selectee.$element.addClass("ui-selecting"), selectee.selecting = !0, that._trigger("selecting", event, {
                        selecting: selectee.element
                    }))) : (selectee.selecting && ((event.metaKey || event.ctrlKey) && selectee.startselected ? (selectee.$element.removeClass("ui-selecting"), selectee.selecting = !1, selectee.$element.addClass("ui-selected"), selectee.selected = !0) : (selectee.$element.removeClass("ui-selecting"), selectee.selecting = !1, selectee.startselected && (selectee.$element.addClass("ui-unselecting"), selectee.unselecting = !0), that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    }))), selectee.selected && (event.metaKey || event.ctrlKey || selectee.startselected || (selectee.$element.removeClass("ui-selected"), selectee.selected = !1, selectee.$element.addClass("ui-unselecting"), selectee.unselecting = !0, that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(event) {
            var that = this;
            return this.dragged = !1, $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-unselecting"), selectee.unselecting = !1, selectee.startselected = !1, that._trigger("unselected", event, {
                    unselected: selectee.element
                })
            }), $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.$element.removeClass("ui-selecting").addClass("ui-selected"), selectee.selecting = !1, selectee.selected = !0, selectee.startselected = !0, that._trigger("selected", event, {
                    selected: selectee.element
                })
            }), this._trigger("stop", event), this.helper.remove(), !1
        }
    }), $.widget("ui.sortable", $.ui.mouse, {
        version: "1.11.0",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(x, reference, size) {
            return reference <= x && x < reference + size
        },
        _isFloating: function(item) {
            return /left|right/.test(item.css("float")) || /inline|table-cell/.test(item.css("display"))
        },
        _create: function() {
            var o = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === o.axis || this._isFloating(this.items[0].item)), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(key, value) {
            this._super(key, value), "handle" === key && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), $.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var i = this.items.length - 1; 0 <= i; i--) this.items[i].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null,
                validHandle = !1,
                that = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(event), $(event.target).parents().each(function() {
                if ($.data(this, that.widgetName + "-item") === that) return currentItem = $(this), !1
            }), $.data(event.target, that.widgetName + "-item") === that && (currentItem = $(event.target)), !!currentItem && (!(this.options.handle && !overrideHandle && ($(this.options.handle, currentItem).find("*").addBack().each(function() {
                this === event.target && (validHandle = !0)
            }), !validHandle)) && (this.currentItem = currentItem, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(event, overrideHandle, noActivation) {
            var i, body, o = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(event), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, $.extend(this.offset, {
                    click: {
                        left: event.pageX - this.offset.left,
                        top: event.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(event), this.originalPageX = event.pageX, this.originalPageY = event.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (body = this.document.find("body"), this.storedCursor = body.css("cursor"), body.css("cursor", o.cursor), this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", event, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !noActivation)
                for (i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("activate", event, this._uiHash(this));
            return $.ui.ddmanager && ($.ui.ddmanager.current = this), $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, event), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(event), !0
        },
        _mouseDrag: function(event) {
            var i, item, itemElement, intersection, o = this.options,
                scrolled = !1;
            for (this.position = this._generatePosition(event), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed : event.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed : event.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (event.pageY - $(document).scrollTop() < o.scrollSensitivity ? scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed) : $(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity && (scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed)), event.pageX - $(document).scrollLeft() < o.scrollSensitivity ? scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed) : $(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity && (scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed))), !1 !== scrolled && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, event)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; 0 <= i; i--)
                if (itemElement = (item = this.items[i]).item[0], (intersection = this._intersectsWithPointer(item)) && item.instance === this.currentContainer && !(itemElement === this.currentItem[0] || this.placeholder[1 === intersection ? "next" : "prev"]()[0] === itemElement || $.contains(this.placeholder[0], itemElement) || "semi-dynamic" === this.options.type && $.contains(this.element[0], itemElement))) {
                    if (this.direction = 1 === intersection ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(item)) break;
                    this._rearrange(event, item), this._trigger("change", event, this._uiHash());
                    break
                } return this._contactContainers(event), $.ui.ddmanager && $.ui.ddmanager.drag(this, event), this._trigger("sort", event, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(event, noPropagation) {
            if (event) {
                if ($.ui.ddmanager && !this.options.dropBehaviour && $.ui.ddmanager.drop(this, event), this.options.revert) {
                    var that = this,
                        cur = this.placeholder.offset(),
                        axis = this.options.axis,
                        animation = {};
                    axis && "x" !== axis || (animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), axis && "y" !== axis || (animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function() {
                        that._clear(event)
                    })
                } else this._clear(event, noPropagation);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var i = this.containers.length - 1; 0 <= i; i--) this.containers[i]._trigger("deactivate", null, this._uiHash(this)), this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, this._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), $.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? $(this.domPosition.prev).after(this.currentItem) : $(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected),
                str = [];
            return o = o || {}, $(items).each(function() {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[\-=_](.+)/);
                res && str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]))
            }), !str.length && o.key && str.push(o.key + "="), str.join("&")
        },
        toArray: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected),
                ret = [];
            return o = o || {}, items.each(function() {
                ret.push($(o.item || this).attr(o.attribute || "id") || "")
            }), ret
        },
        _intersectsWith: function(item) {
            var x1 = this.positionAbs.left,
                x2 = x1 + this.helperProportions.width,
                y1 = this.positionAbs.top,
                y2 = y1 + this.helperProportions.height,
                l = item.left,
                r = l + item.width,
                t = item.top,
                b = t + item.height,
                dyClick = this.offset.click.top,
                dxClick = this.offset.click.left,
                isOverElementHeight = "x" === this.options.axis || t < y1 + dyClick && y1 + dyClick < b,
                isOverElementWidth = "y" === this.options.axis || l < x1 + dxClick && x1 + dxClick < r,
                isOverElement = isOverElementHeight && isOverElementWidth;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"] ? isOverElement : l < x1 + this.helperProportions.width / 2 && x2 - this.helperProportions.width / 2 < r && t < y1 + this.helperProportions.height / 2 && y2 - this.helperProportions.height / 2 < b
        },
        _intersectsWithPointer: function(item) {
            var isOverElementHeight = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
                isOverElementWidth = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
                isOverElement = isOverElementHeight && isOverElementWidth,
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();
            return !!isOverElement && (this.floating ? horizontalDirection && "right" === horizontalDirection || "down" === verticalDirection ? 2 : 1 : verticalDirection && ("down" === verticalDirection ? 2 : 1))
        },
        _intersectsWithSides: function(item) {
            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height),
                isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width),
                verticalDirection = this._getDragVerticalDirection(),
                horizontalDirection = this._getDragHorizontalDirection();
            return this.floating && horizontalDirection ? "right" === horizontalDirection && isOverRightHalf || "left" === horizontalDirection && !isOverRightHalf : verticalDirection && ("down" === verticalDirection && isOverBottomHalf || "up" === verticalDirection && !isOverBottomHalf)
        },
        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== delta && (0 < delta ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== delta && (0 < delta ? "right" : "left")
        },
        refresh: function(event) {
            return this._refreshItems(event), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith
        },
        _getItemsAsjQuery: function(connected) {
            var i, j, cur, inst, items = [],
                queries = [],
                connectWith = this._connectWith();
            if (connectWith && connected)
                for (i = connectWith.length - 1; 0 <= i; i--)
                    for (j = (cur = $(connectWith[i])).length - 1; 0 <= j; j--)(inst = $.data(cur[j], this.widgetFullName)) && inst !== this && !inst.options.disabled && queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]);

            function addItems() {
                items.push(this)
            }
            for (queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = queries.length - 1; 0 <= i; i--) queries[i][0].each(addItems);
            return $(items)
        },
        _removeCurrentsFromItems: function() {
            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = $.grep(this.items, function(item) {
                for (var j = 0; j < list.length; j++)
                    if (list[j] === item.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(event) {
            this.items = [], this.containers = [this];
            var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items,
                queries = [
                    [$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
                        item: this.currentItem
                    }) : $(this.options.items, this.element), this]
                ],
                connectWith = this._connectWith();
            if (connectWith && this.ready)
                for (i = connectWith.length - 1; 0 <= i; i--)
                    for (j = (cur = $(connectWith[i])).length - 1; 0 <= j; j--)(inst = $.data(cur[j], this.widgetFullName)) && inst !== this && !inst.options.disabled && (queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
                        item: this.currentItem
                    }) : $(inst.options.items, inst.element), inst]), this.containers.push(inst));
            for (i = queries.length - 1; 0 <= i; i--)
                for (targetData = queries[i][1], j = 0, queriesLength = (_queries = queries[i][0]).length; j < queriesLength; j++)(item = $(_queries[j])).data(this.widgetName + "-item", targetData), items.push({
                    item: item,
                    instance: targetData,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(fast) {
            var i, item, t, p;
            for (this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; 0 <= i; i--)(item = this.items[i]).instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0] || (t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item, fast || (item.width = t.outerWidth(), item.height = t.outerHeight()), p = t.offset(), item.left = p.left, item.top = p.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; 0 <= i; i--) p = this.containers[i].element.offset(), this.containers[i].containerCache.left = p.left, this.containers[i].containerCache.top = p.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(that) {
            var className, o = (that = that || this).options;
            o.placeholder && o.placeholder.constructor !== String || (className = o.placeholder, o.placeholder = {
                element: function() {
                    var nodeName = that.currentItem[0].nodeName.toLowerCase(),
                        element = $("<" + nodeName + ">", that.document[0]).addClass(className || that.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === nodeName ? that.currentItem.children().each(function() {
                        $("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(element)
                    }) : "img" === nodeName && element.attr("src", that.currentItem.attr("src")), className || element.css("visibility", "hidden"), element
                },
                update: function(container, p) {
                    className && !o.forcePlaceholderSize || (p.height() || p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10)), p.width() || p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10)))
                }
            }), that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem)), that.currentItem.after(that.placeholder), o.placeholder.update(that, that.placeholder)
        },
        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null,
                innermostIndex = null;
            for (i = this.containers.length - 1; 0 <= i; i--)
                if (!$.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) continue;
                        innermostContainer = this.containers[i], innermostIndex = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", event, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (innermostContainer)
                if (1 === this.containers.length) this.containers[innermostIndex].containerCache.over || (this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)), this.containers[innermostIndex].containerCache.over = 1);
                else {
                    for (dist = 1e4, itemWithLeastDistance = null, posProperty = (floating = innermostContainer.floating || this._isFloating(this.currentItem)) ? "left" : "top", sizeProperty = floating ? "width" : "height", axis = floating ? "clientX" : "clientY", j = this.items.length - 1; 0 <= j; j--) $.contains(this.containers[innermostIndex].element[0], this.items[j].item[0]) && this.items[j].item[0] !== this.currentItem[0] && (cur = this.items[j].item.offset()[posProperty], nearBottom = !1, event[axis] - cur > this.items[j][sizeProperty] / 2 && (nearBottom = !0), Math.abs(event[axis] - cur) < dist && (dist = Math.abs(event[axis] - cur), itemWithLeastDistance = this.items[j], this.direction = nearBottom ? "up" : "down"));
                    if (!itemWithLeastDistance && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[innermostIndex]) return;
                    itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, !0) : this._rearrange(event, null, this.containers[innermostIndex].element, !0), this._trigger("change", event, this._uiHash()), this.containers[innermostIndex]._trigger("change", event, this._uiHash(this)), this.currentContainer = this.containers[innermostIndex], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)), this.containers[innermostIndex].containerCache.over = 1
                }
        },
        _createHelper: function(event) {
            var o = this.options,
                helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : "clone" === o.helper ? this.currentItem.clone() : this.currentItem;
            return helper.parents("body").length || $("parent" !== o.appendTo ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]), helper[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), helper[0].style.width && !o.forceHelperSize || helper.width(this.currentItem.width()), helper[0].style.height && !o.forceHelperSize || helper.height(this.currentItem.height()), helper
        },
        _adjustOffsetFromHelper: function(obj) {
            "string" == typeof obj && (obj = obj.split(" ")), $.isArray(obj) && (obj = {
                left: +obj[0],
                top: +obj[1] || 0
            }), "left" in obj && (this.offset.click.left = obj.left + this.margins.left), "right" in obj && (this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left), "top" in obj && (this.offset.click.top = obj.top + this.margins.top), "bottom" in obj && (this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) && (po.left += this.scrollParent.scrollLeft(), po.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && $.ui.ie) && (po = {
                top: 0,
                left: 0
            }), {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var p = this.currentItem.position();
            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var ce, co, over, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), "document" !== o.containment && "window" !== o.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, $("document" === o.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ($("document" === o.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (ce = $(o.containment)[0], co = $(o.containment).offset(), over = "hidden" !== $(ce).css("overflow"), this.containment = [co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(d, pos) {
            pos || (pos = this.position);
            var mod = "absolute" === d ? 1 : -1,
                scroll = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
            }
        },
        _generatePosition: function(event) {
            var top, left, o = this.options,
                pageX = event.pageX,
                pageY = event.pageY,
                scroll = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (event.pageX - this.offset.click.left < this.containment[0] && (pageX = this.containment[0] + this.offset.click.left), event.pageY - this.offset.click.top < this.containment[1] && (pageY = this.containment[1] + this.offset.click.top), event.pageX - this.offset.click.left > this.containment[2] && (pageX = this.containment[2] + this.offset.click.left), event.pageY - this.offset.click.top > this.containment[3] && (pageY = this.containment[3] + this.offset.click.top)), o.grid && (top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1], pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top, left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0], pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left)), {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
            }
        },
        _rearrange: function(event, i, a, hardRefresh) {
            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? i.item[0] : i.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;
            this._delay(function() {
                counter === this.counter && this.refreshPositions(!hardRefresh)
            })
        },
        _clear: function(event, noPropagation) {
            this.reverting = !1;
            var i, delayedTriggers = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();

            function delayEvent(type, instance, container) {
                return function(event) {
                    container._trigger(type, event, instance._uiHash(instance))
                }
            }
            for (this.fromOutside && !noPropagation && delayedTriggers.push(function(event) {
                    this._trigger("receive", event, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || noPropagation || delayedTriggers.push(function(event) {
                    this._trigger("update", event, this._uiHash())
                }), this !== this.currentContainer && (noPropagation || (delayedTriggers.push(function(event) {
                    this._trigger("remove", event, this._uiHash())
                }), delayedTriggers.push(function(c) {
                    return function(event) {
                        c._trigger("receive", event, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), delayedTriggers.push(function(c) {
                    return function(event) {
                        c._trigger("update", event, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) noPropagation || delayedTriggers.push(delayEvent("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (delayedTriggers.push(delayEvent("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!noPropagation) {
                    for (this._trigger("beforeStop", event, this._uiHash()), i = 0; i < delayedTriggers.length; i++) delayedTriggers[i].call(this, event);
                    this._trigger("stop", event, this._uiHash())
                }
                return this.fromOutside = !1
            }
            if (noPropagation || this._trigger("beforeStop", event, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) delayedTriggers[i].call(this, event);
                this._trigger("stop", event, this._uiHash())
            }
            return !(this.fromOutside = !1)
        },
        _trigger: function() {
            !1 === $.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            }
        }
    }), $.widget("ui.accordion", {
        version: "1.11.0",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), options.collapsible || !1 !== options.active && null != options.active || (options.active = 0), this._processPanels(), options.active < 0 && (options.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : $()
            }
        },
        _createIcons: function() {
            var icons = this.options.icons;
            icons && ($("<span>").addClass("ui-accordion-header-icon ui-icon " + icons.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(icons.header).addClass(icons.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var contents;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), contents = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && contents.css("height", "")
        },
        _setOption: function(key, value) {
            "active" !== key ? ("event" === key && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(value)), this._super(key, value), "collapsible" !== key || value || !1 !== this.options.active || this._activate(0), "icons" === key && (this._destroyIcons(), value && this._createIcons()), "disabled" === key && (this.element.toggleClass("ui-state-disabled", !!value).attr("aria-disabled", value), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!value))) : this._activate(value)
        },
        _keydown: function(event) {
            if (!event.altKey && !event.ctrlKey) {
                var keyCode = $.ui.keyCode,
                    length = this.headers.length,
                    currentIndex = this.headers.index(event.target),
                    toFocus = !1;
                switch (event.keyCode) {
                    case keyCode.RIGHT:
                    case keyCode.DOWN:
                        toFocus = this.headers[(currentIndex + 1) % length];
                        break;
                    case keyCode.LEFT:
                    case keyCode.UP:
                        toFocus = this.headers[(currentIndex - 1 + length) % length];
                        break;
                    case keyCode.SPACE:
                    case keyCode.ENTER:
                        this._eventHandler(event);
                        break;
                    case keyCode.HOME:
                        toFocus = this.headers[0];
                        break;
                    case keyCode.END:
                        toFocus = this.headers[length - 1]
                }
                toFocus && ($(event.target).attr("tabIndex", -1), $(toFocus).attr("tabIndex", 0), toFocus.focus(), event.preventDefault())
            }
        },
        _panelKeyDown: function(event) {
            event.keyCode === $.ui.keyCode.UP && event.ctrlKey && $(event.currentTarget).prev().focus()
        },
        refresh: function() {
            var options = this.options;
            this._processPanels(), !1 === options.active && !0 === options.collapsible || !this.headers.length ? (options.active = !1, this.active = $()) : !1 === options.active ? this._activate(0) : this.active.length && !$.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (options.active = !1, this.active = $()) : this._activate(Math.max(0, options.active - 1)) : options.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var maxHeight, options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();
            this.active = this._findActive(options.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                var header = $(this),
                    headerId = header.uniqueId().attr("id"),
                    panel = header.next(),
                    panelId = panel.uniqueId().attr("id");
                header.attr("aria-controls", panelId), panel.attr("aria-labelledby", headerId)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(options.event), "fill" === heightStyle ? (maxHeight = parent.height(), this.element.siblings(":visible").each(function() {
                var elem = $(this),
                    position = elem.css("position");
                "absolute" !== position && "fixed" !== position && (maxHeight -= elem.outerHeight(!0))
            }), this.headers.each(function() {
                maxHeight -= $(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()))
            }).css("overflow", "auto")) : "auto" === heightStyle && (maxHeight = 0, this.headers.next().each(function() {
                maxHeight = Math.max(maxHeight, $(this).css("height", "").height())
            }).height(maxHeight))
        },
        _activate: function(index) {
            var active = this._findActive(index)[0];
            active !== this.active[0] && (active = active || this.active[0], this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            }))
        },
        _findActive: function(selector) {
            return "number" == typeof selector ? this.headers.eq(selector) : $()
        },
        _setupEvents: function(event) {
            var events = {
                keydown: "_keydown"
            };
            event && $.each(event.split(" "), function(index, eventName) {
                events[eventName] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, events), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(event) {
            var options = this.options,
                active = this.active,
                clicked = $(event.currentTarget),
                clickedIsActive = clicked[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                    oldHeader: active,
                    oldPanel: toHide,
                    newHeader: collapsing ? $() : clicked,
                    newPanel: toShow
                };
            event.preventDefault(), clickedIsActive && !options.collapsible || !1 === this._trigger("beforeActivate", event, eventData) || (options.active = !collapsing && this.headers.index(clicked), this.active = clickedIsActive ? $() : clicked, this._toggle(eventData), active.removeClass("ui-accordion-header-active ui-state-active"), options.icons && active.children(".ui-accordion-header-icon").removeClass(options.icons.activeHeader).addClass(options.icons.header), clickedIsActive || (clicked.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), options.icons && clicked.children(".ui-accordion-header-icon").removeClass(options.icons.header).addClass(options.icons.activeHeader), clicked.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(data) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = toShow, this.prevHide = toHide, this.options.animate ? this._animate(toShow, toHide, data) : (toHide.hide(), toShow.show(), this._toggleComplete(data)), toHide.attr({
                "aria-hidden": "true"
            }), toHide.prev().attr("aria-selected", "false"), toShow.length && toHide.length ? toHide.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : toShow.length && this.headers.filter(function() {
                return 0 === $(this).attr("tabIndex")
            }).attr("tabIndex", -1), toShow.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(toShow, toHide, data) {
            var total, easing, duration, that = this,
                adjust = 0,
                down = toShow.length && (!toHide.length || toShow.index() < toHide.index()),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function() {
                    that._toggleComplete(data)
                };
            return "number" == typeof options && (duration = options), "string" == typeof options && (easing = options), easing = easing || options.easing || animate.easing, duration = duration || options.duration || animate.duration, toHide.length ? toShow.length ? (total = toShow.show().outerHeight(), toHide.animate(this.hideProps, {
                duration: duration,
                easing: easing,
                step: function(now, fx) {
                    fx.now = Math.round(now)
                }
            }), void toShow.hide().animate(this.showProps, {
                duration: duration,
                easing: easing,
                complete: complete,
                step: function(now, fx) {
                    fx.now = Math.round(now), "height" !== fx.prop ? adjust += fx.now : "content" !== that.options.heightStyle && (fx.now = Math.round(total - toHide.outerHeight() - adjust), adjust = 0)
                }
            })) : toHide.animate(this.hideProps, duration, easing, complete) : toShow.animate(this.showProps, duration, easing, complete)
        },
        _toggleComplete: function(data) {
            var toHide = data.oldPanel;
            toHide.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), toHide.length && (toHide.parent()[0].className = toHide.parent()[0].className), this._trigger("activate", null, data)
        }
    }), $.widget("ui.menu", {
        version: "1.11.0",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function(event) {
                    event.preventDefault()
                },
                "click .ui-menu-item": function(event) {
                    var target = $(event.target);
                    !this.mouseHandled && target.not(".ui-state-disabled").length && (this.select(event), event.isPropagationStopped() || (this.mouseHandled = !0), target.has(".ui-menu").length ? this.expand(event) : !this.element.is(":focus") && $(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(event) {
                    var target = $(event.currentTarget);
                    target.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(event, target)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(event, keepActiveItem) {
                    var item = this.active || this.element.find(this.options.items).eq(0);
                    keepActiveItem || this.focus(event, item)
                },
                blur: function(event) {
                    this._delay(function() {
                        $.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(event)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(event) {
                    this._closeOnDocumentClick(event) && this.collapseAll(event), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var elem = $(this);
                elem.data("ui-menu-submenu-carat") && elem.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(event) {
            var match, prev, character, skip, regex, preventDefault = !0;

            function escape(value) {
                return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            switch (event.keyCode) {
                case $.ui.keyCode.PAGE_UP:
                    this.previousPage(event);
                    break;
                case $.ui.keyCode.PAGE_DOWN:
                    this.nextPage(event);
                    break;
                case $.ui.keyCode.HOME:
                    this._move("first", "first", event);
                    break;
                case $.ui.keyCode.END:
                    this._move("last", "last", event);
                    break;
                case $.ui.keyCode.UP:
                    this.previous(event);
                    break;
                case $.ui.keyCode.DOWN:
                    this.next(event);
                    break;
                case $.ui.keyCode.LEFT:
                    this.collapse(event);
                    break;
                case $.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(event);
                    break;
                case $.ui.keyCode.ENTER:
                case $.ui.keyCode.SPACE:
                    this._activate(event);
                    break;
                case $.ui.keyCode.ESCAPE:
                    this.collapse(event);
                    break;
                default:
                    preventDefault = !1, prev = this.previousFilter || "", character = String.fromCharCode(event.keyCode), skip = !1, clearTimeout(this.filterTimer), character === prev ? skip = !0 : character = prev + character, regex = new RegExp("^" + escape(character), "i"), match = this.activeMenu.find(this.options.items).filter(function() {
                        return regex.test($(this).text())
                    }), (match = skip && -1 !== match.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : match).length || (character = String.fromCharCode(event.keyCode), regex = new RegExp("^" + escape(character), "i"), match = this.activeMenu.find(this.options.items).filter(function() {
                        return regex.test($(this).text())
                    })), match.length ? (this.focus(event, match), 1 < match.length ? (this.previousFilter = character, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            preventDefault && event.preventDefault()
        },
        _activate: function(event) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(event) : this.select(event))
        },
        refresh: function() {
            var items, that = this,
                icon = this.options.icons.submenu,
                submenus = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), submenus.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var menu = $(this),
                    item = menu.parent(),
                    submenuCarat = $("<span>").addClass("ui-menu-icon ui-icon " + icon).data("ui-menu-submenu-carat", !0);
                item.attr("aria-haspopup", "true").prepend(submenuCarat), menu.attr("aria-labelledby", item.attr("id"))
            }), (items = submenus.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var item = $(this);
                that._isDivider(item) && item.addClass("ui-widget-content ui-menu-divider")
            }), items.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), items.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !$.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(key, value) {
            "icons" === key && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(value.submenu), "disabled" === key && this.element.toggleClass("ui-state-disabled", !!value).attr("aria-disabled", value), this._super(key, value)
        },
        focus: function(event, item) {
            var nested, focused;
            this.blur(event, event && "focus" === event.type), this._scrollIntoView(item), this.active = item.first(), focused = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", focused.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), event && "keydown" === event.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), (nested = item.children(".ui-menu")).length && event && /^mouse/.test(event.type) && this._startOpening(nested), this.activeMenu = item.parent(), this._trigger("focus", event, {
                item: item
            })
        },
        _scrollIntoView: function(item) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            this._hasScroll() && (borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0, paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0, offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop, scroll = this.activeMenu.scrollTop(), elementHeight = this.activeMenu.height(), itemHeight = item.outerHeight(), offset < 0 ? this.activeMenu.scrollTop(scroll + offset) : elementHeight < offset + itemHeight && this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight))
        },
        blur: function(event, fromFocus) {
            fromFocus || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", event, {
                item: this.active
            }))
        },
        _startOpening: function(submenu) {
            clearTimeout(this.timer), "true" === submenu.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(submenu)
            }, this.delay))
        },
        _open: function(submenu) {
            var position = $.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true"), submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position)
        },
        collapseAll: function(event, all) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu"));
                currentMenu.length || (currentMenu = this.element), this._close(currentMenu), this.blur(event), this.activeMenu = currentMenu
            }, this.delay)
        },
        _close: function(startMenu) {
            startMenu || (startMenu = this.active ? this.active.parent() : this.element), startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(event) {
            return !$(event.target).closest(".ui-menu").length
        },
        _isDivider: function(item) {
            return !/[^\-\u2014\u2013\s]/.test(item.text())
        },
        collapse: function(event) {
            var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            newItem && newItem.length && (this._close(), this.focus(event, newItem))
        },
        expand: function(event) {
            var newItem = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            newItem && newItem.length && (this._open(newItem.parent()), this._delay(function() {
                this.focus(event, newItem)
            }))
        },
        next: function(event) {
            this._move("next", "first", event)
        },
        previous: function(event) {
            this._move("prev", "last", event)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(direction, filter, event) {
            var next;
            this.active && (next = "first" === direction || "last" === direction ? this.active["first" === direction ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[direction + "All"](".ui-menu-item").eq(0)), next && next.length && this.active || (next = this.activeMenu.find(this.options.items)[filter]()), this.focus(event, next)
        },
        nextPage: function(event) {
            var item, base, height;
            this.active ? this.isLastItem() || (this._hasScroll() ? (base = this.active.offset().top, height = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (item = $(this)).offset().top - base - height < 0
            }), this.focus(event, item)) : this.focus(event, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(event)
        },
        previousPage: function(event) {
            var item, base, height;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (base = this.active.offset().top, height = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (item = $(this)).offset().top - base + height
            }), this.focus(event, item)) : this.focus(event, this.activeMenu.find(this.options.items).first())) : this.next(event)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(event) {
            this.active = this.active || $(event.target).closest(".ui-menu-item");
            var ui = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(event, !0), this._trigger("select", event, ui)
        }
    });
    $.widget("ui.autocomplete", {
        version: "1.11.0",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(),
                isTextarea = "textarea" === nodeName,
                isInput = "input" === nodeName;
            this.isMultiLine = !!isTextarea || !isInput && this.element.prop("isContentEditable"), this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(event) {
                    if (this.element.prop("readOnly")) suppressKeyPressRepeat = suppressInput = suppressKeyPress = !0;
                    else {
                        suppressKeyPressRepeat = suppressInput = suppressKeyPress = !1;
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                            case keyCode.PAGE_UP:
                                suppressKeyPress = !0, this._move("previousPage", event);
                                break;
                            case keyCode.PAGE_DOWN:
                                suppressKeyPress = !0, this._move("nextPage", event);
                                break;
                            case keyCode.UP:
                                suppressKeyPress = !0, this._keyEvent("previous", event);
                                break;
                            case keyCode.DOWN:
                                suppressKeyPress = !0, this._keyEvent("next", event);
                                break;
                            case keyCode.ENTER:
                                this.menu.active && (suppressKeyPress = !0, event.preventDefault(), this.menu.select(event));
                                break;
                            case keyCode.TAB:
                                this.menu.active && this.menu.select(event);
                                break;
                            case keyCode.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(event), event.preventDefault());
                                break;
                            default:
                                suppressKeyPressRepeat = !0, this._searchTimeout(event)
                        }
                    }
                },
                keypress: function(event) {
                    if (suppressKeyPress) return suppressKeyPress = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || event.preventDefault());
                    if (!suppressKeyPressRepeat) {
                        var keyCode = $.ui.keyCode;
                        switch (event.keyCode) {
                            case keyCode.PAGE_UP:
                                this._move("previousPage", event);
                                break;
                            case keyCode.PAGE_DOWN:
                                this._move("nextPage", event);
                                break;
                            case keyCode.UP:
                                this._keyEvent("previous", event);
                                break;
                            case keyCode.DOWN:
                                this._keyEvent("next", event)
                        }
                    }
                },
                input: function(event) {
                    if (suppressInput) return suppressInput = !1, void event.preventDefault();
                    this._searchTimeout(event)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(event) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(event), this._change(event))
                }
            }), this._initSource(), this.menu = $("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(event) {
                    event.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var menuElement = this.menu.element[0];
                    $(event.target).closest(".ui-menu-item").length || this._delay(function() {
                        var that = this;
                        this.document.one("mousedown", function(event) {
                            event.target === that.element[0] || event.target === menuElement || $.contains(menuElement, event.target) || that.close()
                        })
                    })
                },
                menufocus: function(event, ui) {
                    var label, item;
                    if (this.isNewMenu && (this.isNewMenu = !1, event.originalEvent && /^mouse/.test(event.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        $(event.target).trigger(event.originalEvent)
                    });
                    item = ui.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", event, {
                        item: item
                    }) && event.originalEvent && /^key/.test(event.originalEvent.type) && this._value(item.value), (label = ui.item.attr("aria-label") || item.value) && jQuery.trim(label).length && (this.liveRegion.children().hide(), $("<div>").text(label).appendTo(this.liveRegion))
                },
                menuselect: function(event, ui) {
                    var item = ui.item.data("ui-autocomplete-item"),
                        previous = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = previous, this._delay(function() {
                        this.previous = previous, this.selectedItem = item
                    })), !1 !== this._trigger("select", event, {
                        item: item
                    }) && this._value(item.value), this.term = this._value(), this.close(event), this.selectedItem = item
                }
            }), this.liveRegion = $("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(key, value) {
            this._super(key, value), "source" === key && this._initSource(), "appendTo" === key && this.menu.element.appendTo(this._appendTo()), "disabled" === key && value && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            return element && (element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0)), element && element[0] || (element = this.element.closest(".ui-front")), element.length || (element = this.document[0].body), element
        },
        _initSource: function() {
            var array, url, that = this;
            $.isArray(this.options.source) ? (array = this.options.source, this.source = function(request, response) {
                response($.ui.autocomplete.filter(array, request.term))
            }) : "string" == typeof this.options.source ? (url = this.options.source, this.source = function(request, response) {
                that.xhr && that.xhr.abort(), that.xhr = $.ajax({
                    url: url,
                    data: request,
                    dataType: "json",
                    success: function(data) {
                        response(data)
                    },
                    error: function() {
                        response([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(event) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var equalValues = this.term === this._value(),
                    menuVisible = this.menu.element.is(":visible"),
                    modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
                equalValues && (!equalValues || menuVisible || modifierKey) || (this.selectedItem = null, this.search(null, event))
            }, this.options.delay)
        },
        search: function(value, event) {
            return value = null != value ? value : this._value(), this.term = this._value(), value.length < this.options.minLength ? this.close(event) : !1 !== this._trigger("search", event) ? this._search(value) : void 0
        },
        _search: function(value) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: value
            }, this._response())
        },
        _response: function() {
            var index = ++this.requestIndex;
            return $.proxy(function(content) {
                index === this.requestIndex && this.__response(content), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(content) {
            content && (content = this._normalize(content)), this._trigger("response", null, {
                content: content
            }), !this.options.disabled && content && content.length && !this.cancelSearch ? (this._suggest(content), this._trigger("open")) : this._close()
        },
        close: function(event) {
            this.cancelSearch = !0, this._close(event)
        },
        _close: function(event) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", event))
        },
        _change: function(event) {
            this.previous !== this._value() && this._trigger("change", event, {
                item: this.selectedItem
            })
        },
        _normalize: function(items) {
            return items.length && items[0].label && items[0].value ? items : $.map(items, function(item) {
                return "string" == typeof item ? {
                    label: item,
                    value: item
                } : $.extend({}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                })
            })
        },
        _suggest: function(items) {
            var ul = this.menu.element.empty();
            this._renderMenu(ul, items), this.isNewMenu = !0, this.menu.refresh(), ul.show(), this._resizeMenu(), ul.position($.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(ul, items) {
            var that = this;
            $.each(items, function(index, item) {
                that._renderItemData(ul, item)
            })
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data("ui-autocomplete-item", item)
        },
        _renderItem: function(ul, item) {
            return $("<li>").text(item.label).appendTo(ul)
        },
        _move: function(direction, event) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[direction](event);
            this.search(null, event)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(keyEvent, event) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(keyEvent, event), event.preventDefault())
        }
    }), $.extend($.ui.autocomplete, {
        escapeRegex: function(value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(array, term) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
            return $.grep(array, function(value) {
                return matcher.test(value.label || value.value || value)
            })
        }
    }), $.widget("ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(amount) {
                    return amount + (1 < amount ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(content) {
            var message;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (message = content && content.length ? this.options.messages.results(content.length) : this.options.messages.noResults, this.liveRegion.children().hide(), $("<div>").text(message).appendTo(this.liveRegion))
        }
    });
    $.ui.autocomplete;
    var lastActive, baseClasses = "ui-button ui-widget ui-state-default ui-corner-all",
        typeClasses = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        formResetHandler = function() {
            var form = $(this);
            setTimeout(function() {
                form.find(":ui-button").button("refresh")
            }, 1)
        },
        radioGroup = function(radio) {
            var name = radio.name,
                form = radio.form,
                radios = $([]);
            return name && (name = name.replace(/'/g, "\\'"), radios = form ? $(form).find("[name='" + name + "'][type=radio]") : $("[name='" + name + "'][type=radio]", radio.ownerDocument).filter(function() {
                return !this.form
            })), radios
        };
    $.widget("ui.button", {
        version: "1.11.0",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, formResetHandler), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var that = this,
                options = this.options,
                toggleButton = "checkbox" === this.type || "radio" === this.type,
                activeClass = toggleButton ? "" : "ui-state-active";
            null === options.label && (options.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(baseClasses).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                options.disabled || this === lastActive && $(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                options.disabled || $(this).removeClass(activeClass)
            }).bind("click" + this.eventNamespace, function(event) {
                options.disabled && (event.preventDefault(), event.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), toggleButton && this.element.bind("change" + this.eventNamespace, function() {
                that.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (options.disabled) return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (options.disabled) return !1;
                $(this).addClass("ui-state-active"), that.buttonElement.attr("aria-pressed", "true");
                var radio = that.element[0];
                radioGroup(radio).not(radio).map(function() {
                    return $(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (options.disabled) return !1;
                $(this).addClass("ui-state-active"), lastActive = this, that.document.one("mouseup", function() {
                    lastActive = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (options.disabled) return !1;
                $(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(event) {
                if (options.disabled) return !1;
                event.keyCode !== $.ui.keyCode.SPACE && event.keyCode !== $.ui.keyCode.ENTER || $(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                $(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(event) {
                event.keyCode === $.ui.keyCode.SPACE && $(this).click()
            })), this._setOption("disabled", options.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var ancestor, labelSelector, checked;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (ancestor = this.element.parents().last(), labelSelector = "label[for='" + this.element.attr("id") + "']", this.buttonElement = ancestor.find(labelSelector), this.buttonElement.length || (ancestor = ancestor.length ? ancestor.siblings() : this.element.siblings(), this.buttonElement = ancestor.filter(labelSelector), this.buttonElement.length || (this.buttonElement = ancestor.find(labelSelector))), this.element.addClass("ui-helper-hidden-accessible"), (checked = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", checked)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(baseClasses + " ui-state-active " + typeClasses).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(key, value) {
            if (this._super(key, value), "disabled" === key) return this.widget().toggleClass("ui-state-disabled", !!value), this.element.prop("disabled", !!value), void(value && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")));
            this._resetButton()
        },
        refresh: function() {
            var isDisabled = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            isDisabled !== this.options.disabled && this._setOption("disabled", isDisabled), "radio" === this.type ? radioGroup(this.element[0]).each(function() {
                $(this).is(":checked") ? $(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : $(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" !== this.type) {
                var buttonElement = this.buttonElement.removeClass(typeClasses),
                    buttonText = $("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(buttonElement.empty()).text(),
                    icons = this.options.icons,
                    multipleIcons = icons.primary && icons.secondary,
                    buttonClasses = [];
                icons.primary || icons.secondary ? (this.options.text && buttonClasses.push("ui-button-text-icon" + (multipleIcons ? "s" : icons.primary ? "-primary" : "-secondary")), icons.primary && buttonElement.prepend("<span class='ui-button-icon-primary ui-icon " + icons.primary + "'></span>"), icons.secondary && buttonElement.append("<span class='ui-button-icon-secondary ui-icon " + icons.secondary + "'></span>"), this.options.text || (buttonClasses.push(multipleIcons ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || buttonElement.attr("title", $.trim(buttonText)))) : buttonClasses.push("ui-button-text-only"), buttonElement.addClass(buttonClasses.join(" "))
            } else this.options.label && this.element.val(this.options.label)
        }
    }), $.widget("ui.buttonset", {
        version: "1.11.0",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(key, value) {
            "disabled" === key && this.buttons.button("option", key, value), this._super(key, value)
        },
        refresh: function() {
            var rtl = "rtl" === this.element.css("direction"),
                allButtons = this.element.find(this.options.items),
                existingButtons = allButtons.filter(":ui-button");
            allButtons.not(":ui-button").button(), existingButtons.button("refresh"), this.buttons = allButtons.map(function() {
                return $(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(rtl ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(rtl ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return $(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    var datepicker_instActive;
    $.ui.button;

    function Datepicker() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.regional.en = $.extend(!0, {}, this.regional[""]), this.regional["en-US"] = $.extend(!0, {}, this.regional.en), this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.delegate(selector, "mouseout", function() {
            $(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(selector, "mouseover", function() {
            $.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? dpDiv.parent()[0] : datepicker_instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function datepicker_extendRemove(target, props) {
        for (var name in $.extend(target, props), props) null == props[name] && (target[name] = props[name]);
        return target
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.11.0"
        }
    }), $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(settings) {
            return datepicker_extendRemove(this._defaults, settings || {}), this
        },
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            inline = "div" === (nodeName = target.nodeName.toLowerCase()) || "span" === nodeName, target.id || (this.uuid += 1, target.id = "dp" + this.uuid), (inst = this._newInst($(target), inline)).settings = $.extend({}, settings || {}), "input" === nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function(target, inline) {
            return {
                id: target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: inline ? datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]), inst.trigger = $([]), input.hasClass(this.markerClassName) || (this._attachments(input, inst), input.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(inst), $.data(target, "datepicker", inst), inst.settings.disabled && this._disableDatepicker(target))
        },
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"),
                isRTL = this._get(inst, "isRTL");
            inst.append && inst.append.remove(), appendText && (inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>"), input[isRTL ? "before" : "after"](inst.append)), input.unbind("focus", this._showDatepicker), inst.trigger && inst.trigger.remove(), "focus" !== (showOn = this._get(inst, "showOn")) && "both" !== showOn || input.focus(this._showDatepicker), "button" !== showOn && "both" !== showOn || (buttonText = this._get(inst, "buttonText"), buttonImage = this._get(inst, "buttonImage"), inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                src: buttonImage,
                alt: buttonText,
                title: buttonText
            }) : $("<button type='button'></button>").addClass(this._triggerClass).html(buttonImage ? $("<img/>").attr({
                src: buttonImage,
                alt: buttonText,
                title: buttonText
            }) : buttonText)), input[isRTL ? "before" : "after"](inst.trigger), inst.trigger.click(function() {
                return $.datepicker._datepickerShowing && $.datepicker._lastInput === input[0] ? $.datepicker._hideDatepicker() : ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0] && $.datepicker._hideDatepicker(), $.datepicker._showDatepicker(input[0])), !1
            }))
        },
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i, date = new Date(2009, 11, 20),
                    dateFormat = this._get(inst, "dateFormat");
                dateFormat.match(/[DM]/) && (findMax = function(names) {
                    for (i = maxI = max = 0; i < names.length; i++) names[i].length > max && (max = names[i].length, maxI = i);
                    return maxI
                }, date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort"))), date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay())), inst.input.attr("size", this._formatDate(inst, date).length)
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            divSpan.hasClass(this.markerClassName) || (divSpan.addClass(this.markerClassName).append(inst.dpDiv), $.data(target, "datepicker", inst), this._setDate(inst, this._getDefaultDate(inst), !0), this._updateDatepicker(inst), this._updateAlternate(inst), inst.settings.disabled && this._disableDatepicker(target), inst.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
            return inst || (this.uuid += 1, id = "dp" + this.uuid, this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), (inst = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], "datepicker", inst)), datepicker_extendRemove(inst.settings, settings || {}), date = date && date.constructor === Date ? this._formatDate(inst, date) : date, this._dialogInput.val(date), this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null, this._pos || (browserWidth = document.documentElement.clientWidth, browserHeight = document.documentElement.clientHeight, scrollX = document.documentElement.scrollLeft || document.body.scrollLeft, scrollY = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), inst.settings.onSelect = onSelect, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], "datepicker", inst), this
        },
        _destroyDatepicker: function(target) {
            var nodeName, $target = $(target),
                inst = $.data(target, "datepicker");
            $target.hasClass(this.markerClassName) && (nodeName = target.nodeName.toLowerCase(), $.removeData(target, "datepicker"), "input" === nodeName ? (inst.append.remove(), inst.trigger.remove(), $target.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== nodeName && "span" !== nodeName || $target.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(target) {
            var nodeName, inline, $target = $(target),
                inst = $.data(target, "datepicker");
            $target.hasClass(this.markerClassName) && ("input" === (nodeName = target.nodeName.toLowerCase()) ? (target.disabled = !1, inst.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== nodeName && "span" !== nodeName || ((inline = $target.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return value === target ? null : value
            }))
        },
        _disableDatepicker: function(target) {
            var nodeName, inline, $target = $(target),
                inst = $.data(target, "datepicker");
            $target.hasClass(this.markerClassName) && ("input" === (nodeName = target.nodeName.toLowerCase()) ? (target.disabled = !0, inst.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== nodeName && "span" !== nodeName || ((inline = $target.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return value === target ? null : value
            }), this._disabledInputs[this._disabledInputs.length] = target)
        },
        _isDisabledDatepicker: function(target) {
            if (!target) return !1;
            for (var i = 0; i < this._disabledInputs.length; i++)
                if (this._disabledInputs[i] === target) return !0;
            return !1
        },
        _getInst: function(target) {
            try {
                return $.data(target, "datepicker")
            } catch (err) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate, inst = this._getInst(target);
            if (2 === arguments.length && "string" == typeof name) return "defaults" === name ? $.extend({}, $.datepicker._defaults) : inst ? "all" === name ? $.extend({}, inst.settings) : this._get(inst, name) : null;
            settings = name || {}, "string" == typeof name && ((settings = {})[name] = value), inst && (this._curInst === inst && this._hideDatepicker(), date = this._getDateDatepicker(target, !0), minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), datepicker_extendRemove(inst.settings, settings), null !== minDate && void 0 !== settings.dateFormat && void 0 === settings.minDate && (inst.settings.minDate = this._formatDate(inst, minDate)), null !== maxDate && void 0 !== settings.dateFormat && void 0 === settings.maxDate && (inst.settings.maxDate = this._formatDate(inst, maxDate)), "disabled" in settings && (settings.disabled ? this._disableDatepicker(target) : this._enableDatepicker(target)), this._attachments($(target), inst), this._autoSize(inst), this._setDate(inst, date), this._updateAlternate(inst), this._updateDatepicker(inst))
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value)
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            inst && this._updateDatepicker(inst)
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            inst && (this._setDate(inst, date), this._updateDatepicker(inst), this._updateAlternate(inst))
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            return inst && !inst.inline && this._setDateFromField(inst, noDefault), inst ? this._getDate(inst) : null
        },
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel, inst = $.datepicker._getInst(event.target),
                handled = !0,
                isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            if (inst._keyEvent = !0, $.datepicker._datepickerShowing) switch (event.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), handled = !1;
                    break;
                case 13:
                    return (sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv))[0] && $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]), (onSelect = $.datepicker._get(inst, "onSelect")) ? (dateStr = $.datepicker._formatDate(inst), onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst])) : $.datepicker._hideDatepicker(), !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                    break;
                case 35:
                    (event.ctrlKey || event.metaKey) && $.datepicker._clearDate(event.target), handled = event.ctrlKey || event.metaKey;
                    break;
                case 36:
                    (event.ctrlKey || event.metaKey) && $.datepicker._gotoToday(event.target), handled = event.ctrlKey || event.metaKey;
                    break;
                case 37:
                    (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, isRTL ? 1 : -1, "D"), handled = event.ctrlKey || event.metaKey, event.originalEvent.altKey && $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                    break;
                case 38:
                    (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, -7, "D"), handled = event.ctrlKey || event.metaKey;
                    break;
                case 39:
                    (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, isRTL ? -1 : 1, "D"), handled = event.ctrlKey || event.metaKey, event.originalEvent.altKey && $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                    break;
                case 40:
                    (event.ctrlKey || event.metaKey) && $.datepicker._adjustDate(event.target, 7, "D"), handled = event.ctrlKey || event.metaKey;
                    break;
                default:
                    handled = !1
            } else 36 === event.keyCode && event.ctrlKey ? $.datepicker._showDatepicker(this) : handled = !1;
            handled && (event.preventDefault(), event.stopPropagation())
        },
        _doKeyPress: function(event) {
            var chars, chr, inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) return chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat")), chr = String.fromCharCode(null == event.charCode ? event.keyCode : event.charCode), event.ctrlKey || event.metaKey || chr < " " || !chars || -1 < chars.indexOf(chr)
        },
        _doKeyUp: function(event) {
            var inst = $.datepicker._getInst(event.target);
            if (inst.input.val() !== inst.lastVal) try {
                $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst)) && ($.datepicker._setDateFromField(inst), $.datepicker._updateAlternate(inst), $.datepicker._updateDatepicker(inst))
            } catch (err) {}
            return !0
        },
        _showDatepicker: function(input) {
            var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
            ("input" !== (input = input.target || input).nodeName.toLowerCase() && (input = $("input", input.parentNode)[0]), $.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) || (inst = $.datepicker._getInst(input), $.datepicker._curInst && $.datepicker._curInst !== inst && ($.datepicker._curInst.dpDiv.stop(!0, !0), inst && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])), !1 !== (beforeShowSettings = (beforeShow = $.datepicker._get(inst, "beforeShow")) ? beforeShow.apply(input, [input, inst]) : {}) && (datepicker_extendRemove(inst.settings, beforeShowSettings), inst.lastVal = null, $.datepicker._lastInput = input, $.datepicker._setDateFromField(inst), $.datepicker._inDialog && (input.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(input), $.datepicker._pos[1] += input.offsetHeight), isFixed = !1, $(input).parents().each(function() {
                return !(isFixed |= "fixed" === $(this).css("position"))
            }), offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            }, $.datepicker._pos = null, inst.dpDiv.empty(), inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), $.datepicker._updateDatepicker(inst), offset = $.datepicker._checkOffset(inst, offset, isFixed), inst.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : isFixed ? "fixed" : "absolute",
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            }), inst.inline || (showAnim = $.datepicker._get(inst, "showAnim"), duration = $.datepicker._get(inst, "duration"), inst.dpDiv.css("z-index", function(elem) {
                for (var position, value; elem.length && elem[0] !== document;) {
                    if (("absolute" === (position = elem.css("position")) || "relative" === position || "fixed" === position) && (value = parseInt(elem.css("zIndex"), 10), !isNaN(value) && 0 !== value)) return value;
                    elem = elem.parent()
                }
                return 0
            }($(input)) + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects.effect[showAnim] ? inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration) : inst.dpDiv[showAnim || "show"](showAnim ? duration : null), $.datepicker._shouldFocusInput(inst) && inst.input.focus(), $.datepicker._curInst = inst)))
        },
        _updateDatepicker: function(inst) {
            this.maxRows = 4, (datepicker_instActive = inst).dpDiv.empty().append(this._generateHTML(inst)), this._attachHandlers(inst), inst.dpDiv.find("." + this._dayOverClass + " a");
            var origyearshtml, numMonths = this._getNumberOfMonths(inst),
                cols = numMonths[1];
            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < cols && inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", 17 * cols + "em"), inst.dpDiv[(1 !== numMonths[0] || 1 !== numMonths[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst) && inst.input.focus(), inst.yearshtml && (origyearshtml = inst.yearshtml, setTimeout(function() {
                origyearshtml === inst.yearshtml && inst.yearshtml && inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml), origyearshtml = inst.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(inst) {
            return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus")
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(),
                dpHeight = inst.dpDiv.outerHeight(),
                inputWidth = inst.input ? inst.input.outerWidth() : 0,
                inputHeight = inst.input ? inst.input.outerHeight() : 0,
                viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
                viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
            return offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0, offset.left -= isFixed && offset.left === inst.input.offset().left ? $(document).scrollLeft() : 0, offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0, offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && dpWidth < viewWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0), offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && dpHeight < viewHeight ? Math.abs(dpHeight + inputHeight) : 0), offset
        },
        _findPos: function(obj) {
            for (var position, inst = this._getInst(obj), isRTL = this._get(inst, "isRTL"); obj && ("hidden" === obj.type || 1 !== obj.nodeType || $.expr.filters.hidden(obj));) obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            return [(position = $(obj).offset()).left, position.top]
        },
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose, inst = this._curInst;
            !inst || input && inst !== $.data(input, "datepicker") || this._datepickerShowing && (showAnim = this._get(inst, "showAnim"), duration = this._get(inst, "duration"), postProcess = function() {
                $.datepicker._tidyDialog(inst)
            }, $.effects && ($.effects.effect[showAnim] || $.effects[showAnim]) ? inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess) : inst.dpDiv["slideDown" === showAnim ? "slideUp" : "fadeIn" === showAnim ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess), showAnim || postProcess(), this._datepickerShowing = !1, (onClose = this._get(inst, "onClose")) && onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : "", inst]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(event) {
            if ($.datepicker._curInst) {
                var $target = $(event.target),
                    inst = $.datepicker._getInst($target[0]);
                ($target[0].id === $.datepicker._mainDivId || 0 !== $target.parents("#" + $.datepicker._mainDivId).length || $target.hasClass($.datepicker.markerClassName) || $target.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!$target.hasClass($.datepicker.markerClassName) || $.datepicker._curInst === inst) || $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id),
                inst = this._getInst(target[0]);
            this._isDisabledDatepicker(target[0]) || (this._adjustInstDate(inst, offset + ("M" === period ? this._get(inst, "showCurrentAtPos") : 0), period), this._updateDatepicker(inst))
        },
        _gotoToday: function(id) {
            var date, target = $(id),
                inst = this._getInst(target[0]);
            this._get(inst, "gotoCurrent") && inst.currentDay ? (inst.selectedDay = inst.currentDay, inst.drawMonth = inst.selectedMonth = inst.currentMonth, inst.drawYear = inst.selectedYear = inst.currentYear) : (date = new Date, inst.selectedDay = date.getDate(), inst.drawMonth = inst.selectedMonth = date.getMonth(), inst.drawYear = inst.selectedYear = date.getFullYear()), this._notifyChange(inst), this._adjustDate(target)
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id),
                inst = this._getInst(target[0]);
            inst["selected" + ("M" === period ? "Month" : "Year")] = inst["draw" + ("M" === period ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10), this._notifyChange(inst), this._adjustDate(target)
        },
        _selectDay: function(id, month, year, td) {
            var inst, target = $(id);
            $(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0]) || ((inst = this._getInst(target[0])).selectedDay = inst.currentDay = $("a", td).html(), inst.selectedMonth = inst.currentMonth = month, inst.selectedYear = inst.currentYear = year, this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear)))
        },
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, "")
        },
        _selectDate: function(id, dateStr) {
            var onSelect, target = $(id),
                inst = this._getInst(target[0]);
            dateStr = null != dateStr ? dateStr : this._formatDate(inst), inst.input && inst.input.val(dateStr), this._updateAlternate(inst), (onSelect = this._get(inst, "onSelect")) ? onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]) : inst.input && inst.input.trigger("change"), inst.inline ? this._updateDatepicker(inst) : (this._hideDatepicker(), this._lastInput = inst.input[0], "object" !== _typeof(inst.input[0]) && inst.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr, altField = this._get(inst, "altField");
            altField && (altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat"), date = this._getDate(inst), dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst)), $(altField).each(function() {
                $(this).val(dateStr)
            }))
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [0 < day && day < 6, ""]
        },
        iso8601Week: function(date) {
            var time, checkDate = new Date(date.getTime());
            return checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)), time = checkDate.getTime(), checkDate.setMonth(0), checkDate.setDate(1), Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1
        },
        parseDate: function(format, value, settings) {
            if (null == format || null == value) throw "Invalid arguments";
            if ("" === (value = "object" === _typeof(value) ? value.toString() : value + "")) return null;
            var iFormat, dim, extra, date, iValue = 0,
                shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                shortYearCutoff = "string" != typeof shortYearCutoffTemp ? shortYearCutoffTemp : (new Date).getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10),
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = !1,
                lookAhead = function(match) {
                    var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                    return matches && iFormat++, matches
                },
                getNumber = function(match) {
                    var isDoubled = lookAhead(match),
                        digits = new RegExp("^\\d{1," + ("@" === match ? 14 : "!" === match ? 20 : "y" === match && isDoubled ? 4 : "o" === match ? 3 : 2) + "}"),
                        num = value.substring(iValue).match(digits);
                    if (!num) throw "Missing number at position " + iValue;
                    return iValue += num[0].length, parseInt(num[0], 10)
                },
                getName = function(match, shortNames, longNames) {
                    var index = -1,
                        names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
                            return [
                                [k, v]
                            ]
                        }).sort(function(a, b) {
                            return -(a[1].length - b[1].length)
                        });
                    if ($.each(names, function(i, pair) {
                            var name = pair[1];
                            if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) return index = pair[0], iValue += name.length, !1
                        }), -1 !== index) return index + 1;
                    throw "Unknown name at position " + iValue
                },
                checkLiteral = function() {
                    if (value.charAt(iValue) !== format.charAt(iFormat)) throw "Unexpected literal at position " + iValue;
                    iValue++
                };
            for (iFormat = 0; iFormat < format.length; iFormat++)
                if (literal) "'" !== format.charAt(iFormat) || lookAhead("'") ? checkLiteral() : literal = !1;
                else switch (format.charAt(iFormat)) {
                    case "d":
                        day = getNumber("d");
                        break;
                    case "D":
                        getName("D", dayNamesShort, dayNames);
                        break;
                    case "o":
                        doy = getNumber("o");
                        break;
                    case "m":
                        month = getNumber("m");
                        break;
                    case "M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;
                    case "y":
                        year = getNumber("y");
                        break;
                    case "@":
                        year = (date = new Date(getNumber("@"))).getFullYear(), month = date.getMonth() + 1, day = date.getDate();
                        break;
                    case "!":
                        year = (date = new Date((getNumber("!") - this._ticksTo1970) / 1e4)).getFullYear(), month = date.getMonth() + 1, day = date.getDate();
                        break;
                    case "'":
                        lookAhead("'") ? checkLiteral() : literal = !0;
                        break;
                    default:
                        checkLiteral()
                }
            if (iValue < value.length && (extra = value.substr(iValue), !/^\s+/.test(extra))) throw "Extra/unparsed characters found in date: " + extra;
            if (-1 === year ? year = (new Date).getFullYear() : year < 100 && (year += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100)), -1 < doy)
                for (month = 1, day = doy;;) {
                    if (day <= (dim = this._getDaysInMonth(year, month - 1))) break;
                    month++, day -= dim
                }
            if ((date = this._daylightSavingAdjust(new Date(year, month - 1, day))).getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) throw "Invalid date";
            return date
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(format, date, settings) {
            if (!date) return "";
            var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
                lookAhead = function(match) {
                    var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                    return matches && iFormat++, matches
                },
                formatNumber = function(match, value, len) {
                    var num = "" + value;
                    if (lookAhead(match))
                        for (; num.length < len;) num = "0" + num;
                    return num
                },
                formatName = function(match, value, shortNames, longNames) {
                    return lookAhead(match) ? longNames[value] : shortNames[value]
                },
                output = "",
                literal = !1;
            if (date)
                for (iFormat = 0; iFormat < format.length; iFormat++)
                    if (literal) "'" !== format.charAt(iFormat) || lookAhead("'") ? output += format.charAt(iFormat) : literal = !1;
                    else switch (format.charAt(iFormat)) {
                        case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;
                        case "D":
                            output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                            break;
                        case "o":
                            output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;
                        case "M":
                            output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                            break;
                        case "y":
                            output += lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100;
                            break;
                        case "@":
                            output += date.getTime();
                            break;
                        case "!":
                            output += 1e4 * date.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            lookAhead("'") ? output += "'" : literal = !0;
                            break;
                        default:
                            output += format.charAt(iFormat)
                    }
            return output
        },
        _possibleChars: function(format) {
            var iFormat, chars = "",
                literal = !1,
                lookAhead = function(match) {
                    var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                    return matches && iFormat++, matches
                };
            for (iFormat = 0; iFormat < format.length; iFormat++)
                if (literal) "'" !== format.charAt(iFormat) || lookAhead("'") ? chars += format.charAt(iFormat) : literal = !1;
                else switch (format.charAt(iFormat)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        chars += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        lookAhead("'") ? chars += "'" : literal = !0;
                        break;
                    default:
                        chars += format.charAt(iFormat)
                }
            return chars
        },
        _get: function(inst, name) {
            return void 0 !== inst.settings[name] ? inst.settings[name] : this._defaults[name]
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() !== inst.lastVal) {
                var dateFormat = this._get(inst, "dateFormat"),
                    dates = inst.lastVal = inst.input ? inst.input.val() : null,
                    defaultDate = this._getDefaultDate(inst),
                    date = defaultDate,
                    settings = this._getFormatConfig(inst);
                try {
                    date = this.parseDate(dateFormat, dates, settings) || defaultDate
                } catch (event) {
                    dates = noDefault ? "" : dates
                }
                inst.selectedDay = date.getDate(), inst.drawMonth = inst.selectedMonth = date.getMonth(), inst.drawYear = inst.selectedYear = date.getFullYear(), inst.currentDay = dates ? date.getDate() : 0, inst.currentMonth = dates ? date.getMonth() : 0, inst.currentYear = dates ? date.getFullYear() : 0, this._adjustInstDate(inst)
            }
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date))
        },
        _determineDate: function(inst, date, defaultDate) {
            var newDate = null == date || "" === date ? defaultDate : "string" == typeof date ? function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst))
                } catch (e) {}
                for (var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date, year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset); matches;) {
                    switch (matches[2] || "d") {
                        case "d":
                        case "D":
                            day += parseInt(matches[1], 10);
                            break;
                        case "w":
                        case "W":
                            day += 7 * parseInt(matches[1], 10);
                            break;
                        case "m":
                        case "M":
                            month += parseInt(matches[1], 10), day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                        case "y":
                        case "Y":
                            year += parseInt(matches[1], 10), day = Math.min(day, $.datepicker._getDaysInMonth(year, month))
                    }
                    matches = pattern.exec(offset)
                }
                return new Date(year, month, day)
            }(date) : "number" == typeof date ? isNaN(date) ? defaultDate : function(offset) {
                var date = new Date;
                return date.setDate(date.getDate() + offset), date
            }(date) : new Date(date.getTime());
            return (newDate = newDate && "Invalid Date" === newDate.toString() ? defaultDate : newDate) && (newDate.setHours(0), newDate.setMinutes(0), newDate.setSeconds(0), newDate.setMilliseconds(0)), this._daylightSavingAdjust(newDate)
        },
        _daylightSavingAdjust: function(date) {
            return date ? (date.setHours(12 < date.getHours() ? date.getHours() + 2 : 0), date) : null
        },
        _setDate: function(inst, date, noChange) {
            var clear = !date,
                origMonth = inst.selectedMonth,
                origYear = inst.selectedYear,
                newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date));
            inst.selectedDay = inst.currentDay = newDate.getDate(), inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth(), inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear(), origMonth === inst.selectedMonth && origYear === inst.selectedYear || noChange || this._notifyChange(inst), this._adjustInstDate(inst), inst.input && inst.input.val(clear ? "" : this._formatDate(inst))
        },
        _getDate: function(inst) {
            return !inst.currentYear || inst.input && "" === inst.input.val() ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay))
        },
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths"),
                id = "#" + inst.id.replace(/\\\\/g, "\\");
            inst.dpDiv.find("[data-handler]").map(function() {
                var handler = {
                    prev: function() {
                        $.datepicker._adjustDate(id, -stepMonths, "M")
                    },
                    next: function() {
                        $.datepicker._adjustDate(id, +stepMonths, "M")
                    },
                    hide: function() {
                        $.datepicker._hideDatepicker()
                    },
                    today: function() {
                        $.datepicker._gotoToday(id)
                    },
                    selectDay: function() {
                        return $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return $.datepicker._selectMonthYear(id, this, "M"), !1
                    },
                    selectYear: function() {
                        return $.datepicker._selectMonthYear(id, this, "Y"), !1
                    }
                };
                $(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date,
                today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())),
                isRTL = this._get(inst, "isRTL"),
                showButtonPanel = this._get(inst, "showButtonPanel"),
                hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
                navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
                numMonths = this._getNumberOfMonths(inst),
                showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
                stepMonths = this._get(inst, "stepMonths"),
                isMultiMonth = 1 !== numMonths[0] || 1 !== numMonths[1],
                currentDate = this._daylightSavingAdjust(inst.currentDay ? new Date(inst.currentYear, inst.currentMonth, inst.currentDay) : new Date(9999, 9, 9)),
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                drawMonth = inst.drawMonth - showCurrentAtPos,
                drawYear = inst.drawYear;
            if (drawMonth < 0 && (drawMonth += 12, drawYear--), maxDate)
                for (maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate())), maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw; this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw;) --drawMonth < 0 && (drawMonth = 11, drawYear--);
            for (inst.drawMonth = drawMonth, inst.drawYear = drawYear, prevText = this._get(inst, "prevText"), prevText = navigationAsDateFormat ? this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst)) : prevText, prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>", nextText = this._get(inst, "nextText"), nextText = navigationAsDateFormat ? this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst)) : nextText, next = this._canAdjustMonth(inst, 1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>", currentText = this._get(inst, "currentText"), gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today, currentText = navigationAsDateFormat ? this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)) : currentText, controls = inst.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>", buttonPanel = showButtonPanel ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "", firstDay = parseInt(this._get(inst, "firstDay"), 10), firstDay = isNaN(firstDay) ? 0 : firstDay, showWeek = this._get(inst, "showWeek"), dayNames = this._get(inst, "dayNames"), dayNamesMin = this._get(inst, "dayNamesMin"), monthNames = this._get(inst, "monthNames"), monthNamesShort = this._get(inst, "monthNamesShort"), beforeShowDay = this._get(inst, "beforeShowDay"), showOtherMonths = this._get(inst, "showOtherMonths"), selectOtherMonths = this._get(inst, "selectOtherMonths"), defaultDate = this._getDefaultDate(inst), html = "", row = 0; row < numMonths[0]; row++) {
                for (group = "", this.maxRows = 4, col = 0; col < numMonths[1]; col++) {
                    if (selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay)), cornerClass = " ui-corner-all", calender = "", isMultiMonth) {
                        if (calender += "<div class='ui-datepicker-group", 1 < numMonths[1]) switch (col) {
                            case 0:
                                calender += " ui-datepicker-group-first", cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                break;
                            case numMonths[1] - 1:
                                calender += " ui-datepicker-group-last", cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                break;
                            default:
                                calender += " ui-datepicker-group-middle", cornerClass = ""
                        }
                        calender += "'>"
                    }
                    for (calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && 0 === row ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && 0 === row ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, 0 < row || 0 < col, monthNames, monthNamesShort) + "</div><table class='ui-datepicker-calendar'><thead><tr>", thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "", dow = 0; dow < 7; dow++) thead += "<th scope='col'" + (5 <= (dow + firstDay + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + dayNames[day = (dow + firstDay) % 7] + "'>" + dayNamesMin[day] + "</span></th>";
                    for (calender += thead + "</tr></thead><tbody>", daysInMonth = this._getDaysInMonth(drawYear, drawMonth), drawYear === inst.selectedYear && drawMonth === inst.selectedMonth && (inst.selectedDay = Math.min(inst.selectedDay, daysInMonth)), leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7, curRows = Math.ceil((leadDays + daysInMonth) / 7), numRows = isMultiMonth && this.maxRows > curRows ? this.maxRows : curRows, this.maxRows = numRows, printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays)), dRow = 0; dRow < numRows; dRow++) {
                        for (calender += "<tr>", tbody = showWeek ? "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>" : "", dow = 0; dow < 7; dow++) daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [!0, ""], unselectable = (otherMonth = printDate.getMonth() !== drawMonth) && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && maxDate < printDate, tbody += "<td class='" + (5 <= (dow + firstDay + 6) % 7 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + (printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + (otherMonth && !showOtherMonths || !daySettings[2] ? "" : " title='" + daySettings[2].replace(/'/g, "&#39;") + "'") + (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + "' href='#'>" + printDate.getDate() + "</a>") + "</td>", printDate.setDate(printDate.getDate() + 1), printDate = this._daylightSavingAdjust(printDate);
                        calender += tbody + "</tr>"
                    }
                    11 < ++drawMonth && (drawMonth = 0, drawYear++), group += calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (0 < numMonths[0] && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                html += group
            }
            return html += buttonPanel, inst._keyEvent = !1, html
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"),
                changeYear = this._get(inst, "changeYear"),
                showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
                html = "<div class='ui-datepicker-title'>",
                monthHtml = "";
            if (secondary || !changeMonth) monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            else {
                for (inMinYear = minDate && minDate.getFullYear() === drawYear, inMaxYear = maxDate && maxDate.getFullYear() === drawYear, monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", month = 0; month < 12; month++)(!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth()) && (monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>");
                monthHtml += "</select>"
            }
            if (showMonthAfterYear || (html += monthHtml + (!secondary && changeMonth && changeYear ? "" : "&#xa0;")), !inst.yearshtml)
                if (inst.yearshtml = "", secondary || !changeYear) html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                else {
                    for (years = this._get(inst, "yearRange").split(":"), thisYear = (new Date).getFullYear(), year = (determineYear = function(value) {
                            var year = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
                            return isNaN(year) ? thisYear : year
                        })(years[0]), endYear = Math.max(year, determineYear(years[1] || "")), year = minDate ? Math.max(year, minDate.getFullYear()) : year, endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear, inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; year <= endYear; year++) inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
                    inst.yearshtml += "</select>", html += inst.yearshtml, inst.yearshtml = null
                } return html += this._get(inst, "yearSuffix"), showMonthAfterYear && (html += (!secondary && changeMonth && changeYear ? "" : "&#xa0;") + monthHtml), html += "</div>"
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.drawYear + ("Y" === period ? offset : 0),
                month = inst.drawMonth + ("M" === period ? offset : 0),
                day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + ("D" === period ? offset : 0),
                date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate(), inst.drawMonth = inst.selectedMonth = date.getMonth(), inst.drawYear = inst.selectedYear = date.getFullYear(), "M" !== period && "Y" !== period || this._notifyChange(inst)
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                newDate = minDate && date < minDate ? minDate : date;
            return maxDate && maxDate < newDate ? maxDate : newDate
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            onChange && onChange.apply(inst.input ? inst.input[0] : null, [inst.selectedYear, inst.selectedMonth + 1, inst])
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return null == numMonths ? [1, 1] : "number" == typeof numMonths ? [1, numMonths] : numMonths
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null)
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate()
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay()
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst),
                date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            return offset < 0 && date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth())), this._isInRange(inst, date)
        },
        _isInRange: function(inst, date) {
            var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                minYear = null,
                maxYear = null,
                years = this._get(inst, "yearRange");
            return years && (yearSplit = years.split(":"), currentYear = (new Date).getFullYear(), minYear = parseInt(yearSplit[0], 10), maxYear = parseInt(yearSplit[1], 10), yearSplit[0].match(/[+\-].*/) && (minYear += currentYear), yearSplit[1].match(/[+\-].*/) && (maxYear += currentYear)), (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear)
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            return {
                shortYearCutoff: shortYearCutoff = "string" != typeof shortYearCutoff ? shortYearCutoff : (new Date).getFullYear() % 100 + parseInt(shortYearCutoff, 10),
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            }
        },
        _formatDate: function(inst, day, month, year) {
            day || (inst.currentDay = inst.selectedDay, inst.currentMonth = inst.selectedMonth, inst.currentYear = inst.selectedYear);
            var date = day ? "object" === _typeof(day) ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst))
        }
    }), $.fn.datepicker = function(options) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick), $.datepicker.initialized = !0), 0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof options || "isDisabled" !== options && "getDate" !== options && "widget" !== options ? "option" === options && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs)) : this.each(function() {
            "string" == typeof options ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options)
        }) : $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.11.0";
    $.datepicker, $.widget("ui.dialog", {
        version: "1.11.0",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(pos) {
                    var topOffset = $(this).css(pos).offset().top;
                    topOffset < 0 && $(this).css("top", pos.top - topOffset)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && $.fn.draggable && this._makeDraggable(), this.options.resizable && $.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            return element && (element.jquery || element.nodeType) ? $(element) : this.document.find(element || "body").eq(0)
        },
        _destroy: function() {
            var next, originalPosition = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (next = originalPosition.parent.children().eq(originalPosition.index)).length && next[0] !== this.element[0] ? next.before(this.element) : originalPosition.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: $.noop,
        enable: $.noop,
        close: function(event) {
            var activeElement, that = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", event)) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    (activeElement = this.document[0].activeElement) && "body" !== activeElement.nodeName.toLowerCase() && $(activeElement).blur()
                } catch (error) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    that._trigger("close", event)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(event, silent) {
            var moved = !1,
                zIndicies = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +$(this).css("z-index")
                }).get(),
                zIndexMax = Math.max.apply(null, zIndicies);
            return zIndexMax >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", zIndexMax + 1), moved = !0), moved && !silent && this._trigger("focus", event), moved
        },
        open: function() {
            var that = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = $(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                that._focusTabbable(), that._trigger("focus")
            }), this._trigger("open"))
        },
        _focusTabbable: function() {
            var hasFocus = this._focusedElement;
            hasFocus || (hasFocus = this.element.find("[autofocus]")), hasFocus.length || (hasFocus = this.element.find(":tabbable")), hasFocus.length || (hasFocus = this.uiDialogButtonPane.find(":tabbable")), hasFocus.length || (hasFocus = this.uiDialogTitlebarClose.filter(":tabbable")), hasFocus.length || (hasFocus = this.uiDialog), hasFocus.eq(0).focus()
        },
        _keepFocus: function(event) {
            function checkFocus() {
                var activeElement = this.document[0].activeElement;
                this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement) || this._focusTabbable()
            }
            event.preventDefault(), checkFocus.call(this), this._delay(checkFocus)
        },
        _createWrapper: function() {
            this.uiDialog = $("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(event) {
                    if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) return event.preventDefault(), void this.close(event);
                    if (event.keyCode === $.ui.keyCode.TAB && !event.isDefaultPrevented()) {
                        var tabbables = this.uiDialog.find(":tabbable"),
                            first = tabbables.filter(":first"),
                            last = tabbables.filter(":last");
                        event.target !== last[0] && event.target !== this.uiDialog[0] || event.shiftKey ? event.target !== first[0] && event.target !== this.uiDialog[0] || !event.shiftKey || (this._delay(function() {
                            last.focus()
                        }), event.preventDefault()) : (this._delay(function() {
                            first.focus()
                        }), event.preventDefault())
                    }
                },
                mousedown: function(event) {
                    this._moveToTop(event) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var uiDialogTitle;
            this.uiDialogTitlebar = $("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(event) {
                    $(event.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(event) {
                    event.preventDefault(), this.close(event)
                }
            }), uiDialogTitle = $("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(uiDialogTitle), this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr("id")
            })
        },
        _title: function(title) {
            this.options.title || title.html("&#160;"), title.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = $("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = $("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var that = this,
                buttons = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), $.isEmptyObject(buttons) || $.isArray(buttons) && !buttons.length ? this.uiDialog.removeClass("ui-dialog-buttons") : ($.each(buttons, function(name, props) {
                var click, buttonOptions;
                props = $.isFunction(props) ? {
                    click: props,
                    text: name
                } : props, props = $.extend({
                    type: "button"
                }, props), click = props.click, props.click = function() {
                    click.apply(that.element[0], arguments)
                }, buttonOptions = {
                    icons: props.icons,
                    text: props.showText
                }, delete props.icons, delete props.showText, $("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            var that = this,
                options = this.options;

            function filteredUi(ui) {
                return {
                    position: ui.position,
                    offset: ui.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(event, ui) {
                    $(this).addClass("ui-dialog-dragging"), that._blockFrames(), that._trigger("dragStart", event, filteredUi(ui))
                },
                drag: function(event, ui) {
                    that._trigger("drag", event, filteredUi(ui))
                },
                stop: function(event, ui) {
                    var left = ui.offset.left - that.document.scrollLeft(),
                        top = ui.offset.top - that.document.scrollTop();
                    options.position = {
                        my: "left top",
                        at: "left" + (0 <= left ? "+" : "") + left + " top" + (0 <= top ? "+" : "") + top,
                        of: that.window
                    }, $(this).removeClass("ui-dialog-dragging"), that._unblockFrames(), that._trigger("dragStop", event, filteredUi(ui))
                }
            })
        },
        _makeResizable: function() {
            var that = this,
                options = this.options,
                handles = options.resizable,
                position = this.uiDialog.css("position"),
                resizeHandles = "string" == typeof handles ? handles : "n,e,s,w,se,sw,ne,nw";

            function filteredUi(ui) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function(event, ui) {
                    $(this).addClass("ui-dialog-resizing"), that._blockFrames(), that._trigger("resizeStart", event, filteredUi(ui))
                },
                resize: function(event, ui) {
                    that._trigger("resize", event, filteredUi(ui))
                },
                stop: function(event, ui) {
                    var offset = that.uiDialog.offset(),
                        left = offset.left - that.document.scrollLeft(),
                        top = offset.top - that.document.scrollTop();
                    options.height = that.uiDialog.height(), options.width = that.uiDialog.width(), options.position = {
                        my: "left top",
                        at: "left" + (0 <= left ? "+" : "") + left + " top" + (0 <= top ? "+" : "") + top,
                        of: that.window
                    }, $(this).removeClass("ui-dialog-resizing"), that._unblockFrames(), that._trigger("resizeStop", event, filteredUi(ui))
                }
            }).css("position", position)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(event) {
                    this._untrackInstance(), this._trackingInstances().unshift(this), this._focusedElement = $(event.target)
                }
            })
        },
        _untrackInstance: function() {
            var instances = this._trackingInstances(),
                exists = $.inArray(this, instances); - 1 !== exists && instances.splice(exists, 1)
        },
        _trackingInstances: function() {
            var instances = this.document.data("ui-dialog-instances");
            return instances || (instances = [], this.document.data("ui-dialog-instances", instances)), instances
        },
        _minHeight: function() {
            var options = this.options;
            return "auto" === options.height ? options.minHeight : Math.min(options.minHeight, options.height)
        },
        _position: function() {
            var isVisible = this.uiDialog.is(":visible");
            isVisible || this.uiDialog.show(), this.uiDialog.position(this.options.position), isVisible || this.uiDialog.hide()
        },
        _setOptions: function(options) {
            var that = this,
                resize = !1,
                resizableOptions = {};
            $.each(options, function(key, value) {
                that._setOption(key, value), key in that.sizeRelatedOptions && (resize = !0), key in that.resizableRelatedOptions && (resizableOptions[key] = value)
            }), resize && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", resizableOptions)
        },
        _setOption: function(key, value) {
            var isDraggable, isResizable, uiDialog = this.uiDialog;
            "dialogClass" === key && uiDialog.removeClass(this.options.dialogClass).addClass(value), "disabled" !== key && (this._super(key, value), "appendTo" === key && this.uiDialog.appendTo(this._appendTo()), "buttons" === key && this._createButtons(), "closeText" === key && this.uiDialogTitlebarClose.button({
                label: "" + value
            }), "draggable" === key && ((isDraggable = uiDialog.is(":data(ui-draggable)")) && !value && uiDialog.draggable("destroy"), !isDraggable && value && this._makeDraggable()), "position" === key && this._position(), "resizable" === key && ((isResizable = uiDialog.is(":data(ui-resizable)")) && !value && uiDialog.resizable("destroy"), isResizable && "string" == typeof value && uiDialog.resizable("option", "handles", value), isResizable || !1 === value || this._makeResizable()), "title" === key && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var nonContentHeight, minContentHeight, maxContentHeight, options = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), options.minWidth > options.width && (options.width = options.minWidth), nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            }).outerHeight(), minContentHeight = Math.max(0, options.minHeight - nonContentHeight), maxContentHeight = "number" == typeof options.maxHeight ? Math.max(0, options.maxHeight - nonContentHeight) : "none", "auto" === options.height ? this.element.css({
                minHeight: minContentHeight,
                maxHeight: maxContentHeight,
                height: "auto"
            }) : this.element.height(Math.max(0, options.height - nonContentHeight)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var iframe = $(this);
                return $("<div>").css({
                    position: "absolute",
                    width: iframe.outerWidth(),
                    height: iframe.outerHeight()
                }).appendTo(iframe.parent()).offset(iframe.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(event) {
            return !!$(event.target).closest(".ui-dialog").length || !!$(event.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var isOpening = !0;
                this._delay(function() {
                    isOpening = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(event) {
                        isOpening || this._allowInteraction(event) || (event.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = $("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var overlays = this.document.data("ui-dialog-overlays") - 1;
                overlays ? this.document.data("ui-dialog-overlays", overlays) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), $.widget("ui.progressbar", {
        version: "1.11.0",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = $("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(newValue) {
            if (void 0 === newValue) return this.options.value;
            this.options.value = this._constrainedValue(newValue), this._refreshValue()
        },
        _constrainedValue: function(newValue) {
            return void 0 === newValue && (newValue = this.options.value), this.indeterminate = !1 === newValue, "number" != typeof newValue && (newValue = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, newValue))
        },
        _setOptions: function(options) {
            var value = options.value;
            delete options.value, this._super(options), this.options.value = this._constrainedValue(value), this._refreshValue()
        },
        _setOption: function(key, value) {
            "max" === key && (value = Math.max(this.min, value)), "disabled" === key && this.element.toggleClass("ui-state-disabled", !!value).attr("aria-disabled", value), this._super(key, value)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var value = this.options.value,
                percentage = this._percentage();
            this.valueDiv.toggle(this.indeterminate || value > this.min).toggleClass("ui-corner-right", value === this.options.max).width(percentage.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = $("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": value
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== value && (this.oldValue = value, this._trigger("change")), value === this.options.max && this._trigger("complete")
        }
    }), $.widget("ui.selectmenu", {
        version: "1.11.0",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var selectmenuId = this.element.uniqueId().attr("id");
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
        },
        _drawButton: function() {
            var that = this,
                tabindex = this.element.attr("tabindex");
            this.label = $("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                click: function(event) {
                    this.button.focus(), event.preventDefault()
                }
            }), this.element.hide(), this.button = $("<span>", {
                class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: tabindex || this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element), $("<span>", {
                class: "ui-icon " + this.options.icons.button
            }).prependTo(this.button), this.buttonText = $("<span>", {
                class: "ui-selectmenu-text"
            }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._setOption("width", this.options.width), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                that.menuItems || that._refreshMenu()
            }), this._hoverable(this.button), this._focusable(this.button)
        },
        _drawMenu: function() {
            var that = this;
            this.menu = $("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = $("<div>", {
                class: "ui-selectmenu-menu ui-front"
            }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function(event, ui) {
                    event.preventDefault(), that._select(ui.item.data("ui-selectmenu-item"), event)
                },
                focus: function(event, ui) {
                    var item = ui.item.data("ui-selectmenu-item");
                    null != that.focusIndex && item.index !== that.focusIndex && (that._trigger("focus", event, {
                        item: item
                    }), that.isOpen || that._select(item, event)), that.focusIndex = item.index, that.button.attr("aria-activedescendant", that.menuItems.eq(item.index).attr("id"))
                }
            }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }, this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this._setOption("width", this.options.width)
        },
        _refreshMenu: function() {
            this.menu.empty();
            var item, options = this.element.find("option");
            options.length && (this._parseOptions(options), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), item = this._getSelectedItem(), this.menuInstance.focus(null, item), this._setAria(item.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(event) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", event))
        },
        _position: function() {
            this.menuWrap.position($.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(event) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", event))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderMenu: function(ul, items) {
            var that = this,
                currentOptgroup = "";
            $.each(items, function(index, item) {
                item.optgroup !== currentOptgroup && ($("<li>", {
                    class: "ui-selectmenu-optgroup ui-menu-divider" + (item.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: item.optgroup
                }).appendTo(ul), currentOptgroup = item.optgroup), that._renderItemData(ul, item)
            })
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data("ui-selectmenu-item", item)
        },
        _renderItem: function(ul, item) {
            var li = $("<li>");
            return item.disabled && li.addClass("ui-state-disabled"), this._setText(li, item.label), li.appendTo(ul)
        },
        _setText: function(element, value) {
            value ? element.text(value) : element.html("&#160;")
        },
        _move: function(direction, event) {
            var item, next, filter = ".ui-menu-item";
            this.isOpen ? item = this.menuItems.eq(this.focusIndex) : (item = this.menuItems.eq(this.element[0].selectedIndex), filter += ":not(.ui-state-disabled)"), (next = "first" === direction || "last" === direction ? item["first" === direction ? "prevAll" : "nextAll"](filter).eq(-1) : item[direction + "All"](filter).eq(0)).length && this.menuInstance.focus(event, next)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function(event) {
            this[this.isOpen ? "close" : "open"](event)
        },
        _documentClick: {
            mousedown: function(event) {
                this.isOpen && ($(event.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(event))
            }
        },
        _buttonEvents: {
            click: "_toggle",
            keydown: function(event) {
                var preventDefault = !0;
                switch (event.keyCode) {
                    case $.ui.keyCode.TAB:
                    case $.ui.keyCode.ESCAPE:
                        this.close(event), preventDefault = !1;
                        break;
                    case $.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(event);
                        break;
                    case $.ui.keyCode.UP:
                        event.altKey ? this._toggle(event) : this._move("prev", event);
                        break;
                    case $.ui.keyCode.DOWN:
                        event.altKey ? this._toggle(event) : this._move("next", event);
                        break;
                    case $.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(event) : this._toggle(event);
                        break;
                    case $.ui.keyCode.LEFT:
                        this._move("prev", event);
                        break;
                    case $.ui.keyCode.RIGHT:
                        this._move("next", event);
                        break;
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.PAGE_UP:
                        this._move("first", event);
                        break;
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_DOWN:
                        this._move("last", event);
                        break;
                    default:
                        this.menu.trigger(event), preventDefault = !1
                }
                preventDefault && event.preventDefault()
            }
        },
        _selectFocusedItem: function(event) {
            var item = this.menuItems.eq(this.focusIndex);
            item.hasClass("ui-state-disabled") || this._select(item.data("ui-selectmenu-item"), event)
        },
        _select: function(item, event) {
            var oldIndex = this.element[0].selectedIndex;
            this.element[0].selectedIndex = item.index, this._setText(this.buttonText, item.label), this._setAria(item), this._trigger("select", event, {
                item: item
            }), item.index !== oldIndex && this._trigger("change", event, {
                item: item
            }), this.close(event)
        },
        _setAria: function(item) {
            var id = this.menuItems.eq(item.index).attr("id");
            this.button.attr({
                "aria-labelledby": id,
                "aria-activedescendant": id
            }), this.menu.attr("aria-activedescendant", id)
        },
        _setOption: function(key, value) {
            "icons" === key && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(value.button), this._super(key, value), "appendTo" === key && this.menuWrap.appendTo(this._appendTo()), "disabled" === key && (this.menuInstance.option("disabled", value), this.button.toggleClass("ui-state-disabled", value).attr("aria-disabled", value), this.element.prop("disabled", value), value ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === key && (value || (value = this.element.outerWidth()), this.button.outerWidth(value))
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            return element && (element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0)), element && element[0] || (element = this.element.closest(".ui-front")), element.length || (element = this.document[0].body), element
        },
        _toggleAttr: function() {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            return {
                disabled: this.element.prop("disabled")
            }
        },
        _parseOptions: function(options) {
            var data = [];
            options.each(function(index, item) {
                var option = $(item),
                    optgroup = option.parent("optgroup");
                data.push({
                    element: option,
                    index: index,
                    value: option.attr("value"),
                    label: option.text(),
                    optgroup: optgroup.attr("label") || "",
                    disabled: optgroup.prop("disabled") || option.prop("disabled")
                })
            }), this.items = data
        },
        _destroy: function() {
            this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
        }
    }), $.widget("ui.slider", $.ui.mouse, {
        version: "1.11.0",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var i, handleCount, options = this.options,
                existingHandles = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                handles = [];
            for (handleCount = options.values && options.values.length || 1, existingHandles.length > handleCount && (existingHandles.slice(handleCount).remove(), existingHandles = existingHandles.slice(0, handleCount)), i = existingHandles.length; i < handleCount; i++) handles.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = existingHandles.add($(handles.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(i) {
                $(this).data("ui-slider-handle-index", i)
            })
        },
        _createRange: function() {
            var options = this.options,
                classes = "";
            options.range ? (!0 === options.range && (options.values ? options.values.length && 2 !== options.values.length ? options.values = [options.values[0], options.values[0]] : $.isArray(options.values) && (options.values = options.values.slice(0)) : options.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = $("<div></div>").appendTo(this.element), classes = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(classes + ("min" === options.range || "max" === options.range ? " ui-slider-range-" + options.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(event) {
            var position, normValue, distance, closestHandle, index, offset, mouseOverHandle, that = this,
                o = this.options;
            return !o.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), position = {
                x: event.pageX,
                y: event.pageY
            }, normValue = this._normValueFromMouse(position), distance = this._valueMax() - this._valueMin() + 1, this.handles.each(function(i) {
                var thisDistance = Math.abs(normValue - that.values(i));
                (thisDistance < distance || distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min)) && (distance = thisDistance, closestHandle = $(this), index = i)
            }), !1 !== this._start(event, index) && (this._mouseSliding = !0, this._handleIndex = index, closestHandle.addClass("ui-state-active").focus(), offset = closestHandle.offset(), mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0
            } : {
                left: event.pageX - offset.left - closestHandle.width() / 2,
                top: event.pageY - offset.top - closestHandle.height() / 2 - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(event, index, normValue), this._animateOff = !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(event) {
            var position = {
                    x: event.pageX,
                    y: event.pageY
                },
                normValue = this._normValueFromMouse(position);
            return this._slide(event, this._handleIndex, normValue), !1
        },
        _mouseStop: function(event) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(event, this._handleIndex), this._change(event, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(position) {
            var pixelTotal, percentMouse, valueTotal, valueMouse;
            return 1 < (percentMouse = ("horizontal" === this.orientation ? (pixelTotal = this.elementSize.width, position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (pixelTotal = this.elementSize.height, position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))) / pixelTotal) && (percentMouse = 1), percentMouse < 0 && (percentMouse = 0), "vertical" === this.orientation && (percentMouse = 1 - percentMouse), valueTotal = this._valueMax() - this._valueMin(), valueMouse = this._valueMin() + percentMouse * valueTotal, this._trimAlignValue(valueMouse)
        },
        _start: function(event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (uiHash.value = this.values(index), uiHash.values = this.values()), this._trigger("start", event, uiHash)
        },
        _slide: function(event, index, newVal) {
            var otherVal, newValues, allowed;
            this.options.values && this.options.values.length ? (otherVal = this.values(index ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === index && otherVal < newVal || 1 === index && newVal < otherVal) && (newVal = otherVal), newVal !== this.values(index) && ((newValues = this.values())[index] = newVal, allowed = this._trigger("slide", event, {
                handle: this.handles[index],
                value: newVal,
                values: newValues
            }), otherVal = this.values(index ? 0 : 1), !1 !== allowed && this.values(index, newVal))) : newVal !== this.value() && !1 !== (allowed = this._trigger("slide", event, {
                handle: this.handles[index],
                value: newVal
            })) && this.value(newVal)
        },
        _stop: function(event, index) {
            var uiHash = {
                handle: this.handles[index],
                value: this.value()
            };
            this.options.values && this.options.values.length && (uiHash.value = this.values(index), uiHash.values = this.values()), this._trigger("stop", event, uiHash)
        },
        _change: function(event, index) {
            if (!this._keySliding && !this._mouseSliding) {
                var uiHash = {
                    handle: this.handles[index],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (uiHash.value = this.values(index), uiHash.values = this.values()), this._lastChangedValue = index, this._trigger("change", event, uiHash)
            }
        },
        value: function(newValue) {
            return arguments.length ? (this.options.value = this._trimAlignValue(newValue), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(index, newValue) {
            var vals, newValues, i;
            if (1 < arguments.length) return this.options.values[index] = this._trimAlignValue(newValue), this._refreshValue(), void this._change(null, index);
            if (!arguments.length) return this._values();
            if (!$.isArray(index)) return this.options.values && this.options.values.length ? this._values(index) : this.value();
            for (vals = this.options.values, newValues = index, i = 0; i < vals.length; i += 1) vals[i] = this._trimAlignValue(newValues[i]), this._change(null, i);
            this._refreshValue()
        },
        _setOption: function(key, value) {
            var i, valsLength = 0;
            switch ("range" === key && !0 === this.options.range && ("min" === value ? (this.options.value = this._values(0), this.options.values = null) : "max" === value && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), $.isArray(this.options.values) && (valsLength = this.options.values.length), "disabled" === key && this.element.toggleClass("ui-state-disabled", !!value), this._super(key, value), key) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = 0; i < valsLength; i += 1) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var val = this.options.value;
            return val = this._trimAlignValue(val)
        },
        _values: function(index) {
            var val, vals, i;
            if (arguments.length) return val = this.options.values[index], val = this._trimAlignValue(val);
            if (this.options.values && this.options.values.length) {
                for (vals = this.options.values.slice(), i = 0; i < vals.length; i += 1) vals[i] = this._trimAlignValue(vals[i]);
                return vals
            }
            return []
        },
        _trimAlignValue: function(val) {
            if (val <= this._valueMin()) return this._valueMin();
            if (val >= this._valueMax()) return this._valueMax();
            var step = 0 < this.options.step ? this.options.step : 1,
                valModStep = (val - this._valueMin()) % step,
                alignValue = val - valModStep;
            return 2 * Math.abs(valModStep) >= step && (alignValue += 0 < valModStep ? step : -step), parseFloat(alignValue.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range,
                o = this.options,
                that = this,
                animate = !this._animateOff && o.animate,
                _set = {};
            this.options.values && this.options.values.length ? this.handles.each(function(i) {
                valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100, _set["horizontal" === that.orientation ? "left" : "bottom"] = valPercent + "%", $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate), !0 === that.options.range && ("horizontal" === that.orientation ? (0 === i && that.range.stop(1, 1)[animate ? "animate" : "css"]({
                    left: valPercent + "%"
                }, o.animate), 1 === i && that.range[animate ? "animate" : "css"]({
                    width: valPercent - lastValPercent + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === i && that.range.stop(1, 1)[animate ? "animate" : "css"]({
                    bottom: valPercent + "%"
                }, o.animate), 1 === i && that.range[animate ? "animate" : "css"]({
                    height: valPercent - lastValPercent + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), lastValPercent = valPercent
            }) : (value = this.value(), valueMin = this._valueMin(), valueMax = this._valueMax(), valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0, _set["horizontal" === this.orientation ? "left" : "bottom"] = valPercent + "%", this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate), "min" === oRange && "horizontal" === this.orientation && this.range.stop(1, 1)[animate ? "animate" : "css"]({
                width: valPercent + "%"
            }, o.animate), "max" === oRange && "horizontal" === this.orientation && this.range[animate ? "animate" : "css"]({
                width: 100 - valPercent + "%"
            }, {
                queue: !1,
                duration: o.animate
            }), "min" === oRange && "vertical" === this.orientation && this.range.stop(1, 1)[animate ? "animate" : "css"]({
                height: valPercent + "%"
            }, o.animate), "max" === oRange && "vertical" === this.orientation && this.range[animate ? "animate" : "css"]({
                height: 100 - valPercent + "%"
            }, {
                queue: !1,
                duration: o.animate
            }))
        },
        _handleEvents: {
            keydown: function(event) {
                var curVal, newVal, step, index = $(event.target).data("ui-slider-handle-index");
                switch (event.keyCode) {
                    case $.ui.keyCode.HOME:
                    case $.ui.keyCode.END:
                    case $.ui.keyCode.PAGE_UP:
                    case $.ui.keyCode.PAGE_DOWN:
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (event.preventDefault(), !this._keySliding && (this._keySliding = !0, $(event.target).addClass("ui-state-active"), !1 === this._start(event, index))) return
                }
                switch (step = this.options.step, curVal = newVal = this.options.values && this.options.values.length ? this.values(index) : this.value(), event.keyCode) {
                    case $.ui.keyCode.HOME:
                        newVal = this._valueMin();
                        break;
                    case $.ui.keyCode.END:
                        newVal = this._valueMax();
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        newVal = this._trimAlignValue(curVal + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        newVal = this._trimAlignValue(curVal - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.RIGHT:
                        if (curVal === this._valueMax()) return;
                        newVal = this._trimAlignValue(curVal + step);
                        break;
                    case $.ui.keyCode.DOWN:
                    case $.ui.keyCode.LEFT:
                        if (curVal === this._valueMin()) return;
                        newVal = this._trimAlignValue(curVal - step)
                }
                this._slide(event, index, newVal)
            },
            keyup: function(event) {
                var index = $(event.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(event, index), this._change(event, index), $(event.target).removeClass("ui-state-active"))
            }
        }
    });

    function spinner_modifier(fn) {
        return function() {
            var previous = this.element.val();
            fn.apply(this, arguments), this._refresh(), previous !== this.element.val() && this._trigger("change")
        }
    }
    var rhash, baseEasings;
    $.widget("ui.spinner", {
        version: "1.11.0",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var options = {},
                element = this.element;
            return $.each(["min", "max", "step"], function(i, option) {
                var value = element.attr(option);
                void 0 !== value && value.length && (options[option] = value)
            }), options
        },
        _events: {
            keydown: function(event) {
                this._start(event) && this._keydown(event) && event.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(event) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", event))
            },
            mousewheel: function(event, delta) {
                if (delta) {
                    if (!this.spinning && !this._start(event)) return !1;
                    this._spin((0 < delta ? 1 : -1) * this.options.step, event), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(event)
                    }, 100), event.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(event) {
                var previous;

                function checkFocus() {
                    this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = previous, this._delay(function() {
                        this.previous = previous
                    }))
                }
                previous = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), event.preventDefault(), checkFocus.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, checkFocus.call(this)
                }), !1 !== this._start(event) && this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(event) {
                if ($(event.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(event) && void this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var uiSpinner = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = uiSpinner.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * uiSpinner.height()) && 0 < uiSpinner.height() && uiSpinner.height(uiSpinner.height()), this.options.disabled && this.disable()
        },
        _keydown: function(event) {
            var options = this.options,
                keyCode = $.ui.keyCode;
            switch (event.keyCode) {
                case keyCode.UP:
                    return this._repeat(null, 1, event), !0;
                case keyCode.DOWN:
                    return this._repeat(null, -1, event), !0;
                case keyCode.PAGE_UP:
                    return this._repeat(null, options.page, event), !0;
                case keyCode.PAGE_DOWN:
                    return this._repeat(null, -options.page, event), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(event) {
            return !(!this.spinning && !1 === this._trigger("start", event)) && (this.counter || (this.counter = 1), this.spinning = !0)
        },
        _repeat: function(i, steps, event) {
            i = i || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, steps, event)
            }, i), this._spin(steps * this.options.step, event)
        },
        _spin: function(step, event) {
            var value = this.value() || 0;
            this.counter || (this.counter = 1), value = this._adjustValue(value + step * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", event, {
                value: value
            }) || (this._value(value), this.counter++)
        },
        _increment: function(i) {
            var incremental = this.options.incremental;
            return incremental ? $.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 5e4 - i * i / 500 + 17 * i / 200 + 1) : 1
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            return null !== this.options.min && (precision = Math.max(precision, this._precisionOf(this.options.min))), precision
        },
        _precisionOf: function(num) {
            var str = num.toString(),
                decimal = str.indexOf(".");
            return -1 === decimal ? 0 : str.length - decimal - 1
        },
        _adjustValue: function(value) {
            var base, aboveMin, options = this.options;
            return aboveMin = value - (base = null !== options.min ? options.min : 0), value = base + (aboveMin = Math.round(aboveMin / options.step) * options.step), value = parseFloat(value.toFixed(this._precision())), null !== options.max && value > options.max ? options.max : null !== options.min && value < options.min ? options.min : value
        },
        _stop: function(event) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", event))
        },
        _setOption: function(key, value) {
            if ("culture" === key || "numberFormat" === key) {
                var prevValue = this._parse(this.element.val());
                return this.options[key] = value, void this.element.val(this._format(prevValue))
            }
            "max" !== key && "min" !== key && "step" !== key || "string" == typeof value && (value = this._parse(value)), "icons" === key && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(value.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(value.down)), this._super(key, value), "disabled" === key && (this.widget().toggleClass("ui-state-disabled", !!value), this.element.prop("disabled", !!value), this.buttons.button(value ? "disable" : "enable"))
        },
        _setOptions: spinner_modifier(function(options) {
            this._super(options)
        }),
        _parse: function(val) {
            return "string" == typeof val && "" !== val && (val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val), "" === val || isNaN(val) ? null : val
        },
        _format: function(value) {
            return "" === value ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var value = this.value();
            return null !== value && value === this._adjustValue(value)
        },
        _value: function(value, allowAny) {
            var parsed;
            "" !== value && null !== (parsed = this._parse(value)) && (allowAny || (parsed = this._adjustValue(parsed)), value = this._format(parsed)), this.element.val(value), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: spinner_modifier(function(steps) {
            this._stepUp(steps)
        }),
        _stepUp: function(steps) {
            this._start() && (this._spin((steps || 1) * this.options.step), this._stop())
        },
        stepDown: spinner_modifier(function(steps) {
            this._stepDown(steps)
        }),
        _stepDown: function(steps) {
            this._start() && (this._spin((steps || 1) * -this.options.step), this._stop())
        },
        pageUp: spinner_modifier(function(pages) {
            this._stepUp((pages || 1) * this.options.page)
        }),
        pageDown: spinner_modifier(function(pages) {
            this._stepDown((pages || 1) * this.options.page)
        }),
        value: function(newVal) {
            if (!arguments.length) return this._parse(this.element.val());
            spinner_modifier(this._value).call(this, newVal)
        },
        widget: function() {
            return this.uiSpinner
        }
    }), $.widget("ui.tabs", {
        version: "1.11.0",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (rhash = /#.*$/, function(anchor) {
            var anchorUrl, locationUrl;
            anchorUrl = (anchor = anchor.cloneNode(!1)).href.replace(rhash, ""), locationUrl = location.href.replace(rhash, "");
            try {
                anchorUrl = decodeURIComponent(anchorUrl)
            } catch (error) {}
            try {
                locationUrl = decodeURIComponent(locationUrl)
            } catch (error) {}
            return 1 < anchor.hash.length && anchorUrl === locationUrl
        }),
        _create: function() {
            var that = this,
                options = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", options.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(event) {
                $(this).is(".ui-state-disabled") && event.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                $(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), options.active = this._initialActive(), $.isArray(options.disabled) && (options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(li) {
                return that.tabs.index(li)
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(options.active) : this.active = $(), this._refresh(), this.active.length && this.load(options.active)
        },
        _initialActive: function() {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring(1);
            return null === active && (locationHash && this.tabs.each(function(i, tab) {
                if ($(tab).attr("aria-controls") === locationHash) return active = i, !1
            }), null === active && (active = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== active && -1 !== active || (active = !!this.tabs.length && 0)), !1 !== active && -1 === (active = this.tabs.index(this.tabs.eq(active))) && (active = !collapsible && 0), !collapsible && !1 === active && this.anchors.length && (active = 0), active
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : $()
            }
        },
        _tabKeydown: function(event) {
            var focusedTab = $(this.document[0].activeElement).closest("li"),
                selectedIndex = this.tabs.index(focusedTab),
                goingForward = !0;
            if (!this._handlePageNav(event)) {
                switch (event.keyCode) {
                    case $.ui.keyCode.RIGHT:
                    case $.ui.keyCode.DOWN:
                        selectedIndex++;
                        break;
                    case $.ui.keyCode.UP:
                    case $.ui.keyCode.LEFT:
                        goingForward = !1, selectedIndex--;
                        break;
                    case $.ui.keyCode.END:
                        selectedIndex = this.anchors.length - 1;
                        break;
                    case $.ui.keyCode.HOME:
                        selectedIndex = 0;
                        break;
                    case $.ui.keyCode.SPACE:
                        return event.preventDefault(), clearTimeout(this.activating), void this._activate(selectedIndex);
                    case $.ui.keyCode.ENTER:
                        return event.preventDefault(), clearTimeout(this.activating), void this._activate(selectedIndex !== this.options.active && selectedIndex);
                    default:
                        return
                }
                event.preventDefault(), clearTimeout(this.activating), selectedIndex = this._focusNextTab(selectedIndex, goingForward), event.ctrlKey || (focusedTab.attr("aria-selected", "false"), this.tabs.eq(selectedIndex).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", selectedIndex)
                }, this.delay))
            }
        },
        _panelKeydown: function(event) {
            this._handlePageNav(event) || event.ctrlKey && event.keyCode === $.ui.keyCode.UP && (event.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(event) {
            return event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;
            for (; - 1 !== $.inArray((lastTabIndex < index && (index = 0), index < 0 && (index = lastTabIndex), index), this.options.disabled);) index = goingForward ? index + 1 : index - 1;
            return index
        },
        _focusNextTab: function(index, goingForward) {
            return index = this._findNextTab(index, goingForward), this.tabs.eq(index).focus(), index
        },
        _setOption: function(key, value) {
            "active" !== key ? "disabled" !== key ? (this._super(key, value), "collapsible" === key && (this.element.toggleClass("ui-tabs-collapsible", value), value || !1 !== this.options.active || this._activate(0)), "event" === key && this._setupEvents(value), "heightStyle" === key && this._setupHeightStyle(value)) : this._setupDisabled(value) : this._activate(value)
        },
        _sanitizeSelector: function(hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var options = this.options,
                lis = this.tablist.children(":has(a[href])");
            options.disabled = $.map(lis.filter(".ui-state-disabled"), function(tab) {
                return lis.index(tab)
            }), this._processTabs(), !1 !== options.active && this.anchors.length ? this.active.length && !$.contains(this.tablist[0], this.active[0]) ? this.tabs.length === options.disabled.length ? (options.active = !1, this.active = $()) : this._activate(this._findNextTab(Math.max(0, options.active - 1), !1)) : options.active = this.tabs.index(this.active) : (options.active = !1, this.active = $()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var that = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return $("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = $(), this.anchors.each(function(i, anchor) {
                var selector, panel, panelId, anchorId = $(anchor).uniqueId().attr("id"),
                    tab = $(anchor).closest("li"),
                    originalAriaControls = tab.attr("aria-controls");
                that._isLocal(anchor) ? (panelId = (selector = anchor.hash).substring(1), panel = that.element.find(that._sanitizeSelector(selector))) : (selector = "#" + (panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id), (panel = that.element.find(selector)).length || (panel = that._createPanel(panelId)).insertAfter(that.panels[i - 1] || that.tablist), panel.attr("aria-live", "polite")), panel.length && (that.panels = that.panels.add(panel)), originalAriaControls && tab.data("ui-tabs-aria-controls", originalAriaControls), tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                }), panel.attr("aria-labelledby", anchorId)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(id) {
            return $("<div>").attr("id", id).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(disabled) {
            $.isArray(disabled) && (disabled.length ? disabled.length === this.anchors.length && (disabled = !0) : disabled = !1);
            for (var li, i = 0; li = this.tabs[i]; i++) !0 === disabled || -1 !== $.inArray(i, disabled) ? $(li).addClass("ui-state-disabled").attr("aria-disabled", "true") : $(li).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = disabled
        },
        _setupEvents: function(event) {
            var events = {};
            event && $.each(event.split(" "), function(index, eventName) {
                events[eventName] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(event) {
                    event.preventDefault()
                }
            }), this._on(this.anchors, events), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(heightStyle) {
            var maxHeight, parent = this.element.parent();
            "fill" === heightStyle ? (maxHeight = parent.height(), maxHeight -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var elem = $(this),
                    position = elem.css("position");
                "absolute" !== position && "fixed" !== position && (maxHeight -= elem.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                maxHeight -= $(this).outerHeight(!0)
            }), this.panels.each(function() {
                $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()))
            }).css("overflow", "auto")) : "auto" === heightStyle && (maxHeight = 0, this.panels.each(function() {
                maxHeight = Math.max(maxHeight, $(this).height("").height())
            }).height(maxHeight))
        },
        _eventHandler: function(event) {
            var options = this.options,
                active = this.active,
                tab = $(event.currentTarget).closest("li"),
                clickedIsActive = tab[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab(tab),
                toHide = active.length ? this._getPanelForTab(active) : $(),
                eventData = {
                    oldTab: active,
                    oldPanel: toHide,
                    newTab: collapsing ? $() : tab,
                    newPanel: toShow
                };
            event.preventDefault(), tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || clickedIsActive && !options.collapsible || !1 === this._trigger("beforeActivate", event, eventData) || (options.active = !collapsing && this.tabs.index(tab), this.active = clickedIsActive ? $() : tab, this.xhr && this.xhr.abort(), toHide.length || toShow.length || $.error("jQuery UI Tabs: Mismatching fragment identifier."), toShow.length && this.load(this.tabs.index(tab), event), this._toggle(event, eventData))
        },
        _toggle: function(event, eventData) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            function complete() {
                that.running = !1, that._trigger("activate", event, eventData)
            }

            function show() {
                eventData.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), toShow.length && that.options.show ? that._show(toShow, that.options.show, complete) : (toShow.show(), complete())
            }
            this.running = !0, toHide.length && this.options.hide ? this._hide(toHide, this.options.hide, function() {
                eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), show()
            }) : (eventData.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), toHide.hide(), show()), toHide.attr("aria-hidden", "true"), eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), toShow.length && toHide.length ? eventData.oldTab.attr("tabIndex", -1) : toShow.length && this.tabs.filter(function() {
                return 0 === $(this).attr("tabIndex")
            }).attr("tabIndex", -1), toShow.attr("aria-hidden", "false"), eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(index) {
            var anchor, active = this._findActive(index);
            active[0] !== this.active[0] && (active.length || (active = this.active), anchor = active.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            }))
        },
        _findActive: function(index) {
            return !1 === index ? $() : this.tabs.eq(index)
        },
        _getIndex: function(index) {
            return "string" == typeof index && (index = this.anchors.index(this.anchors.filter("[href$='" + index + "']"))), index
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                $.data(this, "ui-tabs-destroy") ? $(this).remove() : $(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var li = $(this),
                    prev = li.data("ui-tabs-aria-controls");
                prev ? li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls") : li.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(index) {
            var disabled = this.options.disabled;
            !1 !== disabled && (disabled = void 0 !== index && (index = this._getIndex(index), $.isArray(disabled) ? $.map(disabled, function(num) {
                return num !== index ? num : null
            }) : $.map(this.tabs, function(li, num) {
                return num !== index ? num : null
            })), this._setupDisabled(disabled))
        },
        disable: function(index) {
            var disabled = this.options.disabled;
            if (!0 !== disabled) {
                if (void 0 === index) disabled = !0;
                else {
                    if (index = this._getIndex(index), -1 !== $.inArray(index, disabled)) return;
                    disabled = $.isArray(disabled) ? $.merge([index], disabled).sort() : [index]
                }
                this._setupDisabled(disabled)
            }
        },
        load: function(index, event) {
            index = this._getIndex(index);
            var that = this,
                tab = this.tabs.eq(index),
                anchor = tab.find(".ui-tabs-anchor"),
                panel = this._getPanelForTab(tab),
                eventData = {
                    tab: tab,
                    panel: panel
                };
            this._isLocal(anchor[0]) || (this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData)), this.xhr && "canceled" !== this.xhr.statusText && (tab.addClass("ui-tabs-loading"), panel.attr("aria-busy", "true"), this.xhr.success(function(response) {
                setTimeout(function() {
                    panel.html(response), that._trigger("load", event, eventData)
                }, 1)
            }).complete(function(jqXHR, status) {
                setTimeout(function() {
                    "abort" === status && that.panels.stop(!1, !0), tab.removeClass("ui-tabs-loading"), panel.removeAttr("aria-busy"), jqXHR === that.xhr && delete that.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(anchor, event, eventData) {
            var that = this;
            return {
                url: anchor.attr("href"),
                beforeSend: function(jqXHR, settings) {
                    return that._trigger("beforeLoad", event, $.extend({
                        jqXHR: jqXHR,
                        ajaxSettings: settings
                    }, eventData))
                }
            }
        },
        _getPanelForTab: function(tab) {
            var id = $(tab).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + id))
        }
    }), $.widget("ui.tooltip", {
        version: "1.11.0",
        options: {
            content: function() {
                var title = $(this).attr("title") || "";
                return $("<a>").text(title).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(elem, id) {
            var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
            describedby.push(id), elem.data("ui-tooltip-id", id).attr("aria-describedby", $.trim(describedby.join(" ")))
        },
        _removeDescribedBy: function(elem) {
            var id = elem.data("ui-tooltip-id"),
                describedby = (elem.attr("aria-describedby") || "").split(/\s+/),
                index = $.inArray(id, describedby); - 1 !== index && describedby.splice(index, 1), elem.removeData("ui-tooltip-id"), (describedby = $.trim(describedby.join(" "))) ? elem.attr("aria-describedby", describedby) : elem.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = $("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        },
        _setOption: function(key, value) {
            var that = this;
            if ("disabled" === key) return this[value ? "_disable" : "_enable"](), void(this.options[key] = value);
            this._super(key, value), "content" === key && $.each(this.tooltips, function(id, element) {
                that._updateContent(element)
            })
        },
        _disable: function() {
            var that = this;
            $.each(this.tooltips, function(id, element) {
                var event = $.Event("blur");
                event.target = event.currentTarget = element[0], that.close(event, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var element = $(this);
                element.is("[title]") && element.data("ui-tooltip-title", element.attr("title")).removeAttr("title")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var element = $(this);
                element.data("ui-tooltip-title") && element.attr("title", element.data("ui-tooltip-title"))
            })
        },
        open: function(event) {
            var that = this,
                target = $(event ? event.target : this.element).closest(this.options.items);
            target.length && !target.data("ui-tooltip-id") && (target.attr("title") && target.data("ui-tooltip-title", target.attr("title")), target.data("ui-tooltip-open", !0), event && "mouseover" === event.type && target.parents().each(function() {
                var blurEvent, parent = $(this);
                parent.data("ui-tooltip-open") && ((blurEvent = $.Event("blur")).target = blurEvent.currentTarget = this, that.close(blurEvent, !0)), parent.attr("title") && (parent.uniqueId(), that.parents[this.id] = {
                    element: this,
                    title: parent.attr("title")
                }, parent.attr("title", ""))
            }), this._updateContent(target, event))
        },
        _updateContent: function(target, event) {
            var content, contentOption = this.options.content,
                that = this,
                eventType = event ? event.type : null;
            if ("string" == typeof contentOption) return this._open(event, target, contentOption);
            (content = contentOption.call(target[0], function(response) {
                target.data("ui-tooltip-open") && that._delay(function() {
                    event && (event.type = eventType), this._open(event, target, response)
                })
            })) && this._open(event, target, content)
        },
        _open: function(event, target, content) {
            var tooltip, events, delayedShow, a11yContent, positionOption = $.extend({}, this.options.position);

            function position(event) {
                positionOption.of = event, tooltip.is(":hidden") || tooltip.position(positionOption)
            }
            content && ((tooltip = this._find(target)).length ? tooltip.find(".ui-tooltip-content").html(content) : (target.is("[title]") && (event && "mouseover" === event.type ? target.attr("title", "") : target.removeAttr("title")), tooltip = this._tooltip(target), this._addDescribedBy(target, tooltip.attr("id")), tooltip.find(".ui-tooltip-content").html(content), this.liveRegion.children().hide(), content.clone ? (a11yContent = content.clone()).removeAttr("id").find("[id]").removeAttr("id") : a11yContent = content, $("<div>").html(a11yContent).appendTo(this.liveRegion), this.options.track && event && /^mouse/.test(event.type) ? (this._on(this.document, {
                mousemove: position
            }), position(event)) : tooltip.position($.extend({
                of: target
            }, this.options.position)), tooltip.hide(), this._show(tooltip, this.options.show), this.options.show && this.options.show.delay && (delayedShow = this.delayedShow = setInterval(function() {
                tooltip.is(":visible") && (position(positionOption.of), clearInterval(delayedShow))
            }, $.fx.interval)), this._trigger("open", event, {
                tooltip: tooltip
            }), events = {
                keyup: function(event) {
                    if (event.keyCode === $.ui.keyCode.ESCAPE) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0], this.close(fakeEvent, !0)
                    }
                }
            }, target[0] !== this.element[0] && (events.remove = function() {
                this._removeTooltip(tooltip)
            }), event && "mouseover" !== event.type || (events.mouseleave = "close"), event && "focusin" !== event.type || (events.focusout = "close"), this._on(!0, target, events)))
        },
        close: function(event) {
            var that = this,
                target = $(event ? event.currentTarget : this.element),
                tooltip = this._find(target);
            this.closing || (clearInterval(this.delayedShow), target.data("ui-tooltip-title") && !target.attr("title") && target.attr("title", target.data("ui-tooltip-title")), this._removeDescribedBy(target), tooltip.stop(!0), this._hide(tooltip, this.options.hide, function() {
                that._removeTooltip($(this))
            }), target.removeData("ui-tooltip-open"), this._off(target, "mouseleave focusout keyup"), target[0] !== this.element[0] && this._off(target, "remove"), this._off(this.document, "mousemove"), event && "mouseleave" === event.type && $.each(this.parents, function(id, parent) {
                $(parent.element).attr("title", parent.title), delete that.parents[id]
            }), this.closing = !0, this._trigger("close", event, {
                tooltip: tooltip
            }), this.closing = !1)
        },
        _tooltip: function(element) {
            var tooltip = $("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                id = tooltip.uniqueId().attr("id");
            return $("<div>").addClass("ui-tooltip-content").appendTo(tooltip), tooltip.appendTo(this.document[0].body), this.tooltips[id] = element, tooltip
        },
        _find: function(target) {
            var id = target.data("ui-tooltip-id");
            return id ? $("#" + id) : $()
        },
        _removeTooltip: function(tooltip) {
            tooltip.remove(), delete this.tooltips[tooltip.attr("id")]
        },
        _destroy: function() {
            var that = this;
            $.each(this.tooltips, function(id, element) {
                var event = $.Event("blur");
                event.target = event.currentTarget = element[0], that.close(event, !0), $("#" + id).remove(), element.data("ui-tooltip-title") && (element.attr("title") || element.attr("title", element.data("ui-tooltip-title")), element.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    });
    $.effects = {
            effect: {}
        },
        function(jQuery, undefined) {
            var colors, rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
                stringParsers = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(execResult) {
                        return [execResult[1], execResult[2], execResult[3], execResult[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(execResult) {
                        return [2.55 * execResult[1], 2.55 * execResult[2], 2.55 * execResult[3], execResult[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(execResult) {
                        return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(execResult) {
                        return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(execResult) {
                        return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]
                    }
                }],
                color = jQuery.Color = function(color, green, blue, alpha) {
                    return new jQuery.Color.fn.parse(color, green, blue, alpha)
                },
                spaces = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                propTypes = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                support = color.support = {},
                supportElem = jQuery("<p>")[0],
                each = jQuery.each;

            function clamp(value, prop, allowEmpty) {
                var type = propTypes[prop.type] || {};
                return null == value ? allowEmpty || !prop.def ? null : prop.def : (value = type.floor ? ~~value : parseFloat(value), isNaN(value) ? prop.def : type.mod ? (value + type.mod) % type.mod : value < 0 ? 0 : type.max < value ? type.max : value)
            }

            function stringParse(string) {
                var inst = color(),
                    rgba = inst._rgba = [];
                return string = string.toLowerCase(), each(stringParsers, function(i, parser) {
                    var parsed, match = parser.re.exec(string),
                        values = match && parser.parse(match),
                        spaceName = parser.space || "rgba";
                    if (values) return parsed = inst[spaceName](values), inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache], rgba = inst._rgba = parsed._rgba, !1
                }), rgba.length ? ("0,0,0,0" === rgba.join() && jQuery.extend(rgba, colors.transparent), inst) : colors[string]
            }

            function hue2rgb(p, q, h) {
                return 6 * (h = (h + 1) % 1) < 1 ? p + (q - p) * h * 6 : 2 * h < 1 ? q : 3 * h < 2 ? p + (q - p) * (2 / 3 - h) * 6 : p
            }
            supportElem.style.cssText = "background-color:rgba(1,1,1,.5)", support.rgba = -1 < supportElem.style.backgroundColor.indexOf("rgba"), each(spaces, function(spaceName, space) {
                space.cache = "_" + spaceName, space.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), color.fn = jQuery.extend(color.prototype, {
                parse: function(red, green, blue, alpha) {
                    if (void 0 === red) return this._rgba = [null, null, null, null], this;
                    (red.jquery || red.nodeType) && (red = jQuery(red).css(green), green = void 0);
                    var inst = this,
                        type = jQuery.type(red),
                        rgba = this._rgba = [];
                    return void 0 !== green && (red = [red, green, blue, alpha], type = "array"), "string" === type ? this.parse(stringParse(red) || colors._default) : "array" === type ? (each(spaces.rgba.props, function(key, prop) {
                        rgba[prop.idx] = clamp(red[prop.idx], prop)
                    }), this) : "object" === type ? (each(spaces, red instanceof color ? function(spaceName, space) {
                        red[space.cache] && (inst[space.cache] = red[space.cache].slice())
                    } : function(spaceName, space) {
                        var cache = space.cache;
                        each(space.props, function(key, prop) {
                            if (!inst[cache] && space.to) {
                                if ("alpha" === key || null == red[key]) return;
                                inst[cache] = space.to(inst._rgba)
                            }
                            inst[cache][prop.idx] = clamp(red[key], prop, !0)
                        }), inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0 && (inst[cache][3] = 1, space.from && (inst._rgba = space.from(inst[cache])))
                    }), this) : void 0
                },
                is: function(compare) {
                    var is = color(compare),
                        same = !0,
                        inst = this;
                    return each(spaces, function(_, space) {
                        var localCache, isCache = is[space.cache];
                        return isCache && (localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [], each(space.props, function(_, prop) {
                            if (null != isCache[prop.idx]) return same = isCache[prop.idx] === localCache[prop.idx]
                        })), same
                    }), same
                },
                _space: function() {
                    var used = [],
                        inst = this;
                    return each(spaces, function(spaceName, space) {
                        inst[space.cache] && used.push(spaceName)
                    }), used.pop()
                },
                transition: function(other, distance) {
                    var end = color(other),
                        spaceName = end._space(),
                        space = spaces[spaceName],
                        startColor = 0 === this.alpha() ? color("transparent") : this,
                        start = startColor[space.cache] || space.to(startColor._rgba),
                        result = start.slice();
                    return end = end[space.cache], each(space.props, function(key, prop) {
                        var index = prop.idx,
                            startValue = start[index],
                            endValue = end[index],
                            type = propTypes[prop.type] || {};
                        null !== endValue && (null === startValue ? result[index] = endValue : (type.mod && (endValue - startValue > type.mod / 2 ? startValue += type.mod : startValue - endValue > type.mod / 2 && (startValue -= type.mod)), result[index] = clamp((endValue - startValue) * distance + startValue, prop)))
                    }), this[spaceName](result)
                },
                blend: function(opaque) {
                    if (1 === this._rgba[3]) return this;
                    var rgb = this._rgba.slice(),
                        a = rgb.pop(),
                        blend = color(opaque)._rgba;
                    return color(jQuery.map(rgb, function(v, i) {
                        return (1 - a) * blend[i] + a * v
                    }))
                },
                toRgbaString: function() {
                    var prefix = "rgba(",
                        rgba = jQuery.map(this._rgba, function(v, i) {
                            return null == v ? 2 < i ? 1 : 0 : v
                        });
                    return 1 === rgba[3] && (rgba.pop(), prefix = "rgb("), prefix + rgba.join() + ")"
                },
                toHslaString: function() {
                    var prefix = "hsla(",
                        hsla = jQuery.map(this.hsla(), function(v, i) {
                            return null == v && (v = 2 < i ? 1 : 0), i && i < 3 && (v = Math.round(100 * v) + "%"), v
                        });
                    return 1 === hsla[3] && (hsla.pop(), prefix = "hsl("), prefix + hsla.join() + ")"
                },
                toHexString: function(includeAlpha) {
                    var rgba = this._rgba.slice(),
                        alpha = rgba.pop();
                    return includeAlpha && rgba.push(~~(255 * alpha)), "#" + jQuery.map(rgba, function(v) {
                        return 1 === (v = (v || 0).toString(16)).length ? "0" + v : v
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), color.fn.parse.prototype = color.fn, spaces.hsla.to = function(rgba) {
                if (null == rgba[0] || null == rgba[1] || null == rgba[2]) return [null, null, null, rgba[3]];
                var h, s, r = rgba[0] / 255,
                    g = rgba[1] / 255,
                    b = rgba[2] / 255,
                    a = rgba[3],
                    max = Math.max(r, g, b),
                    min = Math.min(r, g, b),
                    diff = max - min,
                    add = max + min,
                    l = .5 * add;
                return h = min === max ? 0 : r === max ? 60 * (g - b) / diff + 360 : g === max ? 60 * (b - r) / diff + 120 : 60 * (r - g) / diff + 240, s = 0 === diff ? 0 : l <= .5 ? diff / add : diff / (2 - add), [Math.round(h) % 360, s, l, null == a ? 1 : a]
            }, spaces.hsla.from = function(hsla) {
                if (null == hsla[0] || null == hsla[1] || null == hsla[2]) return [null, null, null, hsla[3]];
                var h = hsla[0] / 360,
                    s = hsla[1],
                    l = hsla[2],
                    a = hsla[3],
                    q = l <= .5 ? l * (1 + s) : l + s - l * s,
                    p = 2 * l - q;
                return [Math.round(255 * hue2rgb(p, q, h + 1 / 3)), Math.round(255 * hue2rgb(p, q, h)), Math.round(255 * hue2rgb(p, q, h - 1 / 3)), a]
            }, each(spaces, function(spaceName, space) {
                var props = space.props,
                    cache = space.cache,
                    to = space.to,
                    from = space.from;
                color.fn[spaceName] = function(value) {
                    if (to && !this[cache] && (this[cache] = to(this._rgba)), void 0 === value) return this[cache].slice();
                    var ret, type = jQuery.type(value),
                        arr = "array" === type || "object" === type ? value : arguments,
                        local = this[cache].slice();
                    return each(props, function(key, prop) {
                        var val = arr["object" === type ? key : prop.idx];
                        null == val && (val = local[prop.idx]), local[prop.idx] = clamp(val, prop)
                    }), from ? ((ret = color(from(local)))[cache] = local, ret) : color(local)
                }, each(props, function(key, prop) {
                    color.fn[key] || (color.fn[key] = function(value) {
                        var match, vtype = jQuery.type(value),
                            fn = "alpha" === key ? this._hsla ? "hsla" : "rgba" : spaceName,
                            local = this[fn](),
                            cur = local[prop.idx];
                        return "undefined" === vtype ? cur : ("function" === vtype && (value = value.call(this, cur), vtype = jQuery.type(value)), null == value && prop.empty ? this : ("string" === vtype && (match = rplusequals.exec(value)) && (value = cur + parseFloat(match[2]) * ("+" === match[1] ? 1 : -1)), local[prop.idx] = value, this[fn](local)))
                    })
                })
            }), color.hook = function(hook) {
                var hooks = hook.split(" ");
                each(hooks, function(i, hook) {
                    jQuery.cssHooks[hook] = {
                        set: function(elem, value) {
                            var parsed, curElem, backgroundColor = "";
                            if ("transparent" !== value && ("string" !== jQuery.type(value) || (parsed = stringParse(value)))) {
                                if (value = color(parsed || value), !support.rgba && 1 !== value._rgba[3]) {
                                    for (curElem = "backgroundColor" === hook ? elem.parentNode : elem;
                                        ("" === backgroundColor || "transparent" === backgroundColor) && curElem && curElem.style;) try {
                                        backgroundColor = jQuery.css(curElem, "backgroundColor"), curElem = curElem.parentNode
                                    } catch (e) {}
                                    value = value.blend(backgroundColor && "transparent" !== backgroundColor ? backgroundColor : "_default")
                                }
                                value = value.toRgbaString()
                            }
                            try {
                                elem.style[hook] = value
                            } catch (e) {}
                        }
                    }, jQuery.fx.step[hook] = function(fx) {
                        fx.colorInit || (fx.start = color(fx.elem, hook), fx.end = color(fx.end), fx.colorInit = !0), jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos))
                    }
                })
            }, color.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), jQuery.cssHooks.borderColor = {
                expand: function(value) {
                    var expanded = {};
                    return each(["Top", "Right", "Bottom", "Left"], function(i, part) {
                        expanded["border" + part + "Color"] = value
                    }), expanded
                }
            }, colors = jQuery.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            var orig, classAnimationActions = ["add", "remove", "toggle"],
                shorthandStyles = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };

            function getElementStyles(elem) {
                var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle,
                    styles = {};
                if (style && style.length && style[0] && style[style[0]])
                    for (len = style.length; len--;) "string" == typeof style[key = style[len]] && (styles[$.camelCase(key)] = style[key]);
                else
                    for (key in style) "string" == typeof style[key] && (styles[key] = style[key]);
                return styles
            }
            $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(_, prop) {
                $.fx.step[prop] = function(fx) {
                    ("none" !== fx.end && !fx.setAttr || 1 === fx.pos && !fx.setAttr) && (jQuery.style(fx.elem, prop, fx.end), fx.setAttr = !0)
                }
            }), $.fn.addBack || ($.fn.addBack = function(selector) {
                return this.add(null == selector ? this.prevObject : this.prevObject.filter(selector))
            }), $.effects.animateClass = function(value, duration, easing, callback) {
                var o = $.speed(duration, easing, callback);
                return this.queue(function() {
                    var applyClassChange, animated = $(this),
                        baseClass = animated.attr("class") || "",
                        allAnimations = o.children ? animated.find("*").addBack() : animated;
                    allAnimations = allAnimations.map(function() {
                        return {
                            el: $(this),
                            start: getElementStyles(this)
                        }
                    }), (applyClassChange = function() {
                        $.each(classAnimationActions, function(i, action) {
                            value[action] && animated[action + "Class"](value[action])
                        })
                    })(), allAnimations = allAnimations.map(function() {
                        return this.end = getElementStyles(this.el[0]), this.diff = function(oldStyle, newStyle) {
                            var name, value, diff = {};
                            for (name in newStyle) value = newStyle[name], oldStyle[name] !== value && (shorthandStyles[name] || !$.fx.step[name] && isNaN(parseFloat(value)) || (diff[name] = value));
                            return diff
                        }(this.start, this.end), this
                    }), animated.attr("class", baseClass), allAnimations = allAnimations.map(function() {
                        var styleInfo = this,
                            dfd = $.Deferred(),
                            opts = $.extend({}, o, {
                                queue: !1,
                                complete: function() {
                                    dfd.resolve(styleInfo)
                                }
                            });
                        return this.el.animate(this.diff, opts), dfd.promise()
                    }), $.when.apply($, allAnimations.get()).done(function() {
                        applyClassChange(), $.each(arguments, function() {
                            var el = this.el;
                            $.each(this.diff, function(key) {
                                el.css(key, "")
                            })
                        }), o.complete.call(animated[0])
                    })
                })
            }, $.fn.extend({
                addClass: (orig = $.fn.addClass, function(classNames, speed, easing, callback) {
                    return speed ? $.effects.animateClass.call(this, {
                        add: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments)
                }),
                removeClass: function(orig) {
                    return function(classNames, speed, easing, callback) {
                        return 1 < arguments.length ? $.effects.animateClass.call(this, {
                            remove: classNames
                        }, speed, easing, callback) : orig.apply(this, arguments)
                    }
                }($.fn.removeClass),
                toggleClass: function(orig) {
                    return function(classNames, force, speed, easing, callback) {
                        return "boolean" == typeof force || void 0 === force ? speed ? $.effects.animateClass.call(this, force ? {
                            add: classNames
                        } : {
                            remove: classNames
                        }, speed, easing, callback) : orig.apply(this, arguments) : $.effects.animateClass.call(this, {
                            toggle: classNames
                        }, force, speed, easing)
                    }
                }($.fn.toggleClass),
                switchClass: function(remove, add, speed, easing, callback) {
                    return $.effects.animateClass.call(this, {
                        add: add,
                        remove: remove
                    }, speed, easing, callback)
                }
            })
        }(),
        function() {
            function _normalizeArguments(effect, options, speed, callback) {
                return $.isPlainObject(effect) && (effect = (options = effect).effect), effect = {
                    effect: effect
                }, null == options && (options = {}), $.isFunction(options) && (callback = options, speed = null, options = {}), ("number" == typeof options || $.fx.speeds[options]) && (callback = speed, speed = options, options = {}), $.isFunction(speed) && (callback = speed, speed = null), options && $.extend(effect, options), speed = speed || options.duration, effect.duration = $.fx.off ? 0 : "number" == typeof speed ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default, effect.complete = callback || options.complete, effect
            }

            function standardAnimationOption(option) {
                return !(option && "number" != typeof option && !$.fx.speeds[option]) || ("string" == typeof option && !$.effects.effect[option] || (!!$.isFunction(option) || "object" === _typeof(option) && !option.effect))
            }
            var orig;
            $.extend($.effects, {
                version: "1.11.0",
                save: function(element, set) {
                    for (var i = 0; i < set.length; i++) null !== set[i] && element.data("ui-effects-" + set[i], element[0].style[set[i]])
                },
                restore: function(element, set) {
                    var val, i;
                    for (i = 0; i < set.length; i++) null !== set[i] && (void 0 === (val = element.data("ui-effects-" + set[i])) && (val = ""), element.css(set[i], val))
                },
                setMode: function(el, mode) {
                    return "toggle" === mode && (mode = el.is(":hidden") ? "show" : "hide"), mode
                },
                getBaseline: function(origin, original) {
                    var y, x;
                    switch (origin[0]) {
                        case "top":
                            y = 0;
                            break;
                        case "middle":
                            y = .5;
                            break;
                        case "bottom":
                            y = 1;
                            break;
                        default:
                            y = origin[0] / original.height
                    }
                    switch (origin[1]) {
                        case "left":
                            x = 0;
                            break;
                        case "center":
                            x = .5;
                            break;
                        case "right":
                            x = 1;
                            break;
                        default:
                            x = origin[1] / original.width
                    }
                    return {
                        x: x,
                        y: y
                    }
                },
                createWrapper: function(element) {
                    if (element.parent().is(".ui-effects-wrapper")) return element.parent();
                    var props = {
                            width: element.outerWidth(!0),
                            height: element.outerHeight(!0),
                            float: element.css("float")
                        },
                        wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        size = {
                            width: element.width(),
                            height: element.height()
                        },
                        active = document.activeElement;
                    try {
                        active.id
                    } catch (e) {
                        active = document.body
                    }
                    return element.wrap(wrapper), (element[0] === active || $.contains(element[0], active)) && $(active).focus(), wrapper = element.parent(), "static" === element.css("position") ? (wrapper.css({
                        position: "relative"
                    }), element.css({
                        position: "relative"
                    })) : ($.extend(props, {
                        position: element.css("position"),
                        zIndex: element.css("z-index")
                    }), $.each(["top", "left", "bottom", "right"], function(i, pos) {
                        props[pos] = element.css(pos), isNaN(parseInt(props[pos], 10)) && (props[pos] = "auto")
                    }), element.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), element.css(size), wrapper.css(props).show()
                },
                removeWrapper: function(element) {
                    var active = document.activeElement;
                    return element.parent().is(".ui-effects-wrapper") && (element.parent().replaceWith(element), (element[0] === active || $.contains(element[0], active)) && $(active).focus()), element
                },
                setTransition: function(element, list, factor, value) {
                    return value = value || {}, $.each(list, function(i, x) {
                        var unit = element.cssUnit(x);
                        0 < unit[0] && (value[x] = unit[0] * factor + unit[1])
                    }), value
                }
            }), $.fn.extend({
                effect: function() {
                    var args = _normalizeArguments.apply(this, arguments),
                        mode = args.mode,
                        queue = args.queue,
                        effectMethod = $.effects.effect[args.effect];
                    if ($.fx.off || !effectMethod) return mode ? this[mode](args.duration, args.complete) : this.each(function() {
                        args.complete && args.complete.call(this)
                    });

                    function run(next) {
                        var elem = $(this),
                            complete = args.complete,
                            mode = args.mode;

                        function done() {
                            $.isFunction(complete) && complete.call(elem[0]), $.isFunction(next) && next()
                        }(elem.is(":hidden") ? "hide" === mode : "show" === mode) ? (elem[mode](), done()) : effectMethod.call(elem[0], args, done)
                    }
                    return !1 === queue ? this.each(run) : this.queue(queue || "fx", run)
                },
                show: (orig = $.fn.show, function(option) {
                    if (standardAnimationOption(option)) return orig.apply(this, arguments);
                    var args = _normalizeArguments.apply(this, arguments);
                    return args.mode = "show", this.effect.call(this, args)
                }),
                hide: function(orig) {
                    return function(option) {
                        if (standardAnimationOption(option)) return orig.apply(this, arguments);
                        var args = _normalizeArguments.apply(this, arguments);
                        return args.mode = "hide", this.effect.call(this, args)
                    }
                }($.fn.hide),
                toggle: function(orig) {
                    return function(option) {
                        if (standardAnimationOption(option) || "boolean" == typeof option) return orig.apply(this, arguments);
                        var args = _normalizeArguments.apply(this, arguments);
                        return args.mode = "toggle", this.effect.call(this, args)
                    }
                }($.fn.toggle),
                cssUnit: function(key) {
                    var style = this.css(key),
                        val = [];
                    return $.each(["em", "px", "%", "pt"], function(i, unit) {
                        0 < style.indexOf(unit) && (val = [parseFloat(style), unit])
                    }), val
                }
            })
        }(), baseEasings = {}, $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) {
            baseEasings[name] = function(p) {
                return Math.pow(p, i + 2)
            }
        }), $.extend(baseEasings, {
            Sine: function(p) {
                return 1 - Math.cos(p * Math.PI / 2)
            },
            Circ: function(p) {
                return 1 - Math.sqrt(1 - p * p)
            },
            Elastic: function(p) {
                return 0 === p || 1 === p ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin((80 * (p - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(p) {
                return p * p * (3 * p - 2)
            },
            Bounce: function(p) {
                for (var pow2, bounce = 4; p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11;);
                return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((3 * pow2 - 2) / 22 - p, 2)
            }
        }), $.each(baseEasings, function(name, easeIn) {
            $.easing["easeIn" + name] = easeIn, $.easing["easeOut" + name] = function(p) {
                return 1 - easeIn(1 - p)
            }, $.easing["easeInOut" + name] = function(p) {
                return p < .5 ? easeIn(2 * p) / 2 : 1 - easeIn(-2 * p + 2) / 2
            }
        });
    $.effects, $.effects.effect.blind = function(o, done) {
        var wrapper, distance, margin, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "height", "width"],
            mode = $.effects.setMode(el, o.mode || "hide"),
            direction = o.direction || "up",
            vertical = /up|down|vertical/.test(direction),
            ref = vertical ? "height" : "width",
            ref2 = vertical ? "top" : "left",
            motion = /up|left|vertical|horizontal/.test(direction),
            animation = {},
            show = "show" === mode;
        el.parent().is(".ui-effects-wrapper") ? $.effects.save(el.parent(), props) : $.effects.save(el, props), el.show(), distance = (wrapper = $.effects.createWrapper(el).css({
            overflow: "hidden"
        }))[ref](), margin = parseFloat(wrapper.css(ref2)) || 0, animation[ref] = show ? distance : 0, motion || (el.css(vertical ? "bottom" : "right", 0).css(vertical ? "top" : "left", "auto").css({
            position: "absolute"
        }), animation[ref2] = show ? margin : distance + margin), show && (wrapper.css(ref, 0), motion || wrapper.css(ref2, margin + distance)), wrapper.animate(animation, {
            duration: o.duration,
            easing: o.easing,
            queue: !1,
            complete: function() {
                "hide" === mode && el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
            }
        })
    }, $.effects.effect.bounce = function(o, done) {
        var i, upAnim, downAnim, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "height", "width"],
            mode = $.effects.setMode(el, o.mode || "effect"),
            hide = "hide" === mode,
            show = "show" === mode,
            direction = o.direction || "up",
            distance = o.distance,
            times = o.times || 5,
            anims = 2 * times + (show || hide ? 1 : 0),
            speed = o.duration / anims,
            easing = o.easing,
            ref = "up" === direction || "down" === direction ? "top" : "left",
            motion = "up" === direction || "left" === direction,
            queue = el.queue(),
            queuelen = queue.length;
        for ((show || hide) && props.push("opacity"), $.effects.save(el, props), el.show(), $.effects.createWrapper(el), distance || (distance = el["top" === ref ? "outerHeight" : "outerWidth"]() / 3), show && ((downAnim = {
                opacity: 1
            })[ref] = 0, el.css("opacity", 0).css(ref, motion ? 2 * -distance : 2 * distance).animate(downAnim, speed, easing)), hide && (distance /= Math.pow(2, times - 1)), i = (downAnim = {})[ref] = 0; i < times; i++)(upAnim = {})[ref] = (motion ? "-=" : "+=") + distance, el.animate(upAnim, speed, easing).animate(downAnim, speed, easing), distance = hide ? 2 * distance : distance / 2;
        hide && ((upAnim = {
            opacity: 0
        })[ref] = (motion ? "-=" : "+=") + distance, el.animate(upAnim, speed, easing)), el.queue(function() {
            hide && el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
        }), 1 < queuelen && queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1))), el.dequeue()
    }, $.effects.effect.clip = function(o, done) {
        var wrapper, animate, distance, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "height", "width"],
            show = "show" === $.effects.setMode(el, o.mode || "hide"),
            vert = "vertical" === (o.direction || "vertical"),
            size = vert ? "height" : "width",
            position = vert ? "top" : "left",
            animation = {};
        $.effects.save(el, props), el.show(), wrapper = $.effects.createWrapper(el).css({
            overflow: "hidden"
        }), distance = (animate = "IMG" === el[0].tagName ? wrapper : el)[size](), show && (animate.css(size, 0), animate.css(position, distance / 2)), animation[size] = show ? distance : 0, animation[position] = show ? 0 : distance / 2, animate.animate(animation, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                show || el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
            }
        })
    }, $.effects.effect.drop = function(o, done) {
        var distance, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            mode = $.effects.setMode(el, o.mode || "hide"),
            show = "show" === mode,
            direction = o.direction || "left",
            ref = "up" === direction || "down" === direction ? "top" : "left",
            motion = "up" === direction || "left" === direction ? "pos" : "neg",
            animation = {
                opacity: show ? 1 : 0
            };
        $.effects.save(el, props), el.show(), $.effects.createWrapper(el), distance = o.distance || el["top" === ref ? "outerHeight" : "outerWidth"](!0) / 2, show && el.css("opacity", 0).css(ref, "pos" === motion ? -distance : distance), animation[ref] = (show ? "pos" === motion ? "+=" : "-=" : "pos" === motion ? "-=" : "+=") + distance, el.animate(animation, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                "hide" === mode && el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
            }
        })
    }, $.effects.effect.explode = function(o, done) {
        var i, j, left, top, mx, my, rows = o.pieces ? Math.round(Math.sqrt(o.pieces)) : 3,
            cells = rows,
            el = $(this),
            show = "show" === $.effects.setMode(el, o.mode || "hide"),
            offset = el.show().css("visibility", "hidden").offset(),
            width = Math.ceil(el.outerWidth() / cells),
            height = Math.ceil(el.outerHeight() / rows),
            pieces = [];

        function childComplete() {
            pieces.push(this), pieces.length === rows * cells && function() {
                el.css({
                    visibility: "visible"
                }), $(pieces).remove(), show || el.hide();
                done()
            }()
        }
        for (i = 0; i < rows; i++)
            for (top = offset.top + i * height, my = i - (rows - 1) / 2, j = 0; j < cells; j++) left = offset.left + j * width, mx = j - (cells - 1) / 2, el.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -j * width,
                top: -i * height
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: width,
                height: height,
                left: left + (show ? mx * width : 0),
                top: top + (show ? my * height : 0),
                opacity: show ? 0 : 1
            }).animate({
                left: left + (show ? 0 : mx * width),
                top: top + (show ? 0 : my * height),
                opacity: show ? 1 : 0
            }, o.duration || 500, o.easing, childComplete)
    }, $.effects.effect.fade = function(o, done) {
        var el = $(this),
            mode = $.effects.setMode(el, o.mode || "toggle");
        el.animate({
            opacity: mode
        }, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: done
        })
    }, $.effects.effect.fold = function(o, done) {
        var wrapper, distance, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "height", "width"],
            mode = $.effects.setMode(el, o.mode || "hide"),
            show = "show" === mode,
            hide = "hide" === mode,
            size = o.size || 15,
            percent = /([0-9]+)%/.exec(size),
            horizFirst = !!o.horizFirst,
            widthFirst = show !== horizFirst,
            ref = widthFirst ? ["width", "height"] : ["height", "width"],
            duration = o.duration / 2,
            animation1 = {},
            animation2 = {};
        $.effects.save(el, props), el.show(), wrapper = $.effects.createWrapper(el).css({
            overflow: "hidden"
        }), distance = widthFirst ? [wrapper.width(), wrapper.height()] : [wrapper.height(), wrapper.width()], percent && (size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1]), show && wrapper.css(horizFirst ? {
            height: 0,
            width: size
        } : {
            height: size,
            width: 0
        }), animation1[ref[0]] = show ? distance[0] : size, animation2[ref[1]] = show ? distance[1] : 0, wrapper.animate(animation1, duration, o.easing).animate(animation2, duration, o.easing, function() {
            hide && el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
        })
    }, $.effects.effect.highlight = function(o, done) {
        var elem = $(this),
            props = ["backgroundImage", "backgroundColor", "opacity"],
            mode = $.effects.setMode(elem, o.mode || "show"),
            animation = {
                backgroundColor: elem.css("backgroundColor")
            };
        "hide" === mode && (animation.opacity = 0), $.effects.save(elem, props), elem.show().css({
            backgroundImage: "none",
            backgroundColor: o.color || "#ffff99"
        }).animate(animation, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                "hide" === mode && elem.hide(), $.effects.restore(elem, props), done()
            }
        })
    }, $.effects.effect.size = function(o, done) {
        var original, baseline, factor, el = $(this),
            props0 = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            props2 = ["width", "height", "overflow"],
            cProps = ["fontSize"],
            vProps = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            hProps = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            mode = $.effects.setMode(el, o.mode || "effect"),
            restore = o.restore || "effect" !== mode,
            scale = o.scale || "both",
            origin = o.origin || ["middle", "center"],
            position = el.css("position"),
            props = restore ? props0 : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            zero = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === mode && el.show(), original = {
            height: el.height(),
            width: el.width(),
            outerHeight: el.outerHeight(),
            outerWidth: el.outerWidth()
        }, "toggle" === o.mode && "show" === mode ? (el.from = o.to || zero, el.to = o.from || original) : (el.from = o.from || ("show" === mode ? zero : original), el.to = o.to || ("hide" === mode ? zero : original)), factor = {
            from: {
                y: el.from.height / original.height,
                x: el.from.width / original.width
            },
            to: {
                y: el.to.height / original.height,
                x: el.to.width / original.width
            }
        }, "box" !== scale && "both" !== scale || (factor.from.y !== factor.to.y && (props = props.concat(vProps), el.from = $.effects.setTransition(el, vProps, factor.from.y, el.from), el.to = $.effects.setTransition(el, vProps, factor.to.y, el.to)), factor.from.x !== factor.to.x && (props = props.concat(hProps), el.from = $.effects.setTransition(el, hProps, factor.from.x, el.from), el.to = $.effects.setTransition(el, hProps, factor.to.x, el.to))), "content" !== scale && "both" !== scale || factor.from.y !== factor.to.y && (props = props.concat(cProps).concat(props2), el.from = $.effects.setTransition(el, cProps, factor.from.y, el.from), el.to = $.effects.setTransition(el, cProps, factor.to.y, el.to)), $.effects.save(el, props), el.show(), $.effects.createWrapper(el), el.css("overflow", "hidden").css(el.from), origin && (baseline = $.effects.getBaseline(origin, original), el.from.top = (original.outerHeight - el.outerHeight()) * baseline.y, el.from.left = (original.outerWidth - el.outerWidth()) * baseline.x, el.to.top = (original.outerHeight - el.to.outerHeight) * baseline.y, el.to.left = (original.outerWidth - el.to.outerWidth) * baseline.x), el.css(el.from), "content" !== scale && "both" !== scale || (vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps), hProps = hProps.concat(["marginLeft", "marginRight"]), props2 = props0.concat(vProps).concat(hProps), el.find("*[width]").each(function() {
            var child = $(this),
                c_original_height = child.height(),
                c_original_width = child.width(),
                c_original_outerHeight = child.outerHeight(),
                c_original_outerWidth = child.outerWidth();
            restore && $.effects.save(child, props2), child.from = {
                height: c_original_height * factor.from.y,
                width: c_original_width * factor.from.x,
                outerHeight: c_original_outerHeight * factor.from.y,
                outerWidth: c_original_outerWidth * factor.from.x
            }, child.to = {
                height: c_original_height * factor.to.y,
                width: c_original_width * factor.to.x,
                outerHeight: c_original_height * factor.to.y,
                outerWidth: c_original_width * factor.to.x
            }, factor.from.y !== factor.to.y && (child.from = $.effects.setTransition(child, vProps, factor.from.y, child.from), child.to = $.effects.setTransition(child, vProps, factor.to.y, child.to)), factor.from.x !== factor.to.x && (child.from = $.effects.setTransition(child, hProps, factor.from.x, child.from), child.to = $.effects.setTransition(child, hProps, factor.to.x, child.to)), child.css(child.from), child.animate(child.to, o.duration, o.easing, function() {
                restore && $.effects.restore(child, props2)
            })
        })), el.animate(el.to, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                0 === el.to.opacity && el.css("opacity", el.from.opacity), "hide" === mode && el.hide(), $.effects.restore(el, props), restore || ("static" === position ? el.css({
                    position: "relative",
                    top: el.to.top,
                    left: el.to.left
                }) : $.each(["top", "left"], function(idx, pos) {
                    el.css(pos, function(_, str) {
                        var val = parseInt(str, 10),
                            toRef = idx ? el.to.left : el.to.top;
                        return "auto" === str ? toRef + "px" : val + toRef + "px"
                    })
                })), $.effects.removeWrapper(el), done()
            }
        })
    }, $.effects.effect.scale = function(o, done) {
        var el = $(this),
            options = $.extend(!0, {}, o),
            mode = $.effects.setMode(el, o.mode || "effect"),
            percent = parseInt(o.percent, 10) || (0 === parseInt(o.percent, 10) ? 0 : "hide" === mode ? 0 : 100),
            direction = o.direction || "both",
            origin = o.origin,
            original = {
                height: el.height(),
                width: el.width(),
                outerHeight: el.outerHeight(),
                outerWidth: el.outerWidth()
            },
            factor_y = "horizontal" !== direction ? percent / 100 : 1,
            factor_x = "vertical" !== direction ? percent / 100 : 1;
        options.effect = "size", options.queue = !1, options.complete = done, "effect" !== mode && (options.origin = origin || ["middle", "center"], options.restore = !0), options.from = o.from || ("show" === mode ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : original), options.to = {
            height: original.height * factor_y,
            width: original.width * factor_x,
            outerHeight: original.outerHeight * factor_y,
            outerWidth: original.outerWidth * factor_x
        }, options.fade && ("show" === mode && (options.from.opacity = 0, options.to.opacity = 1), "hide" === mode && (options.from.opacity = 1, options.to.opacity = 0)), el.effect(options)
    }, $.effects.effect.puff = function(o, done) {
        var elem = $(this),
            mode = $.effects.setMode(elem, o.mode || "hide"),
            hide = "hide" === mode,
            percent = parseInt(o.percent, 10) || 150,
            factor = percent / 100,
            original = {
                height: elem.height(),
                width: elem.width(),
                outerHeight: elem.outerHeight(),
                outerWidth: elem.outerWidth()
            };
        $.extend(o, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: mode,
            complete: done,
            percent: hide ? percent : 100,
            from: hide ? original : {
                height: original.height * factor,
                width: original.width * factor,
                outerHeight: original.outerHeight * factor,
                outerWidth: original.outerWidth * factor
            }
        }), elem.effect(o)
    }, $.effects.effect.pulsate = function(o, done) {
        var i, elem = $(this),
            mode = $.effects.setMode(elem, o.mode || "show"),
            show = "show" === mode,
            hide = "hide" === mode,
            showhide = show || "hide" === mode,
            anims = 2 * (o.times || 5) + (showhide ? 1 : 0),
            duration = o.duration / anims,
            animateTo = 0,
            queue = elem.queue(),
            queuelen = queue.length;
        for (!show && elem.is(":visible") || (elem.css("opacity", 0).show(), animateTo = 1), i = 1; i < anims; i++) elem.animate({
            opacity: animateTo
        }, duration, o.easing), animateTo = 1 - animateTo;
        elem.animate({
            opacity: animateTo
        }, duration, o.easing), elem.queue(function() {
            hide && elem.hide(), done()
        }), 1 < queuelen && queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1))), elem.dequeue()
    }, $.effects.effect.shake = function(o, done) {
        var i, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "height", "width"],
            mode = $.effects.setMode(el, o.mode || "effect"),
            direction = o.direction || "left",
            distance = o.distance || 20,
            times = o.times || 3,
            anims = 2 * times + 1,
            speed = Math.round(o.duration / anims),
            ref = "up" === direction || "down" === direction ? "top" : "left",
            positiveMotion = "up" === direction || "left" === direction,
            animation = {},
            animation1 = {},
            animation2 = {},
            queue = el.queue(),
            queuelen = queue.length;
        for ($.effects.save(el, props), el.show(), $.effects.createWrapper(el), animation[ref] = (positiveMotion ? "-=" : "+=") + distance, animation1[ref] = (positiveMotion ? "+=" : "-=") + 2 * distance, animation2[ref] = (positiveMotion ? "-=" : "+=") + 2 * distance, el.animate(animation, speed, o.easing), i = 1; i < times; i++) el.animate(animation1, speed, o.easing).animate(animation2, speed, o.easing);
        el.animate(animation1, speed, o.easing).animate(animation, speed / 2, o.easing).queue(function() {
            "hide" === mode && el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
        }), 1 < queuelen && queue.splice.apply(queue, [1, 0].concat(queue.splice(queuelen, anims + 1))), el.dequeue()
    }, $.effects.effect.slide = function(o, done) {
        var distance, el = $(this),
            props = ["position", "top", "bottom", "left", "right", "width", "height"],
            mode = $.effects.setMode(el, o.mode || "show"),
            show = "show" === mode,
            direction = o.direction || "left",
            ref = "up" === direction || "down" === direction ? "top" : "left",
            positiveMotion = "up" === direction || "left" === direction,
            animation = {};
        $.effects.save(el, props), el.show(), distance = o.distance || el["top" === ref ? "outerHeight" : "outerWidth"](!0), $.effects.createWrapper(el).css({
            overflow: "hidden"
        }), show && el.css(ref, positiveMotion ? isNaN(distance) ? "-" + distance : -distance : distance), animation[ref] = (show ? positiveMotion ? "+=" : "-=" : positiveMotion ? "-=" : "+=") + distance, el.animate(animation, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function() {
                "hide" === mode && el.hide(), $.effects.restore(el, props), $.effects.removeWrapper(el), done()
            }
        })
    }, $.effects.effect.transfer = function(o, done) {
        var elem = $(this),
            target = $(o.to),
            targetFixed = "fixed" === target.css("position"),
            body = $("body"),
            fixTop = targetFixed ? body.scrollTop() : 0,
            fixLeft = targetFixed ? body.scrollLeft() : 0,
            endPosition = target.offset(),
            animation = {
                top: endPosition.top - fixTop,
                left: endPosition.left - fixLeft,
                height: target.innerHeight(),
                width: target.innerWidth()
            },
            startPosition = elem.offset(),
            transfer = $("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(o.className).css({
                top: startPosition.top - fixTop,
                left: startPosition.left - fixLeft,
                height: elem.innerHeight(),
                width: elem.innerWidth(),
                position: targetFixed ? "fixed" : "absolute"
            }).animate(animation, o.duration, o.easing, function() {
                transfer.remove(), done()
            })
    }
}),
function(window) {
    var $ = window.jQuery || window.me || (window.me = {}),
        throttle = function(fn, timeout, callback, delayed, trailing, debounce) {
            timeout || (timeout = 100);
            var timer = !1,
                lastCall = !1,
                hasCallback = "function" == typeof callback,
                wrapper = function() {
                    timer && !debounce || (timer || delayed || (!trailing || +new Date - lastCall > timeout) && (fn.apply(this, arguments), trailing && (lastCall = +new Date)), !debounce && trailing || clearTimeout(timer), function(wrapper, args) {
                        timer = setTimeout(function() {
                            timer = !1, (delayed || trailing) && (fn.apply(wrapper, args), trailing && (lastCall = +new Date)), hasCallback && callback.apply(wrapper, args)
                        }, timeout)
                    }(this, arguments))
                };
            return $.guid && (wrapper.guid = fn.guid = fn.guid || $.guid++), wrapper
        };
    $.throttle = throttle, $.debounce = function(fn, timeout, callback, delayed, trailing) {
        return throttle(fn, timeout, callback, delayed, trailing, !0)
    }
}(this);