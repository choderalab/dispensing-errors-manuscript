/*
 * jQuery JavaScript Library v1.4.1
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 25 19:43:33 2010 -0500
 */
(function (aJ, C) {
    var a = function (aV, aW) {
            return new a.fn.init(aV, aW)
        },
        o = aJ.jQuery,
        R = aJ.$,
        ab = aJ.document,
        X, P = /^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,
        aT = /^.[^:#\[\.,]*$/,
        av = /\S/,
        M = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
        e = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        b = navigator.userAgent,
        v, J = false,
        ad = [],
        aD, ar = Object.prototype.toString,
        ao = Object.prototype.hasOwnProperty,
        g = Array.prototype.push,
        E = Array.prototype.slice,
        t = Array.prototype.indexOf;
    a.fn = a.prototype = {
        init: function (aV, aY) {
            var aX, aZ, aW, a0;
            if (!aV) {
                return this
            }
            if (aV.nodeType) {
                this.context = this[0] = aV;
                this.length = 1;
                return this
            }
            if (typeof aV === "string") {
                aX = P.exec(aV);
                if (aX && (aX[1] || !aY)) {
                    if (aX[1]) {
                        a0 = (aY ? aY.ownerDocument || aY : ab);
                        aW = e.exec(aV);
                        if (aW) {
                            if (a.isPlainObject(aY)) {
                                aV = [ab.createElement(aW[1])];
                                a.fn.attr.call(aV, aY, true)
                            } else {
                                aV = [a0.createElement(aW[1])]
                            }
                        } else {
                            aW = I([aX[1]], [a0]);
                            aV = (aW.cacheable ? aW.fragment.cloneNode(true) : aW.fragment).childNodes
                        }
                    } else {
                        aZ = ab.getElementById(aX[2]);
                        if (aZ) {
                            if (aZ.id !== aX[2]) {
                                return X.find(aV)
                            }
                            this.length = 1;
                            this[0] = aZ
                        }
                        this.context = ab;
                        this.selector = aV;
                        return this
                    }
                } else {
                    if (!aY && /^\w+$/.test(aV)) {
                        this.selector = aV;
                        this.context = ab;
                        aV = ab.getElementsByTagName(aV)
                    } else {
                        if (!aY || aY.jquery) {
                            return (aY || X).find(aV)
                        } else {
                            return a(aY).find(aV)
                        }
                    }
                }
            } else {
                if (a.isFunction(aV)) {
                    return X.ready(aV)
                }
            }
            if (aV.selector !== C) {
                this.selector = aV.selector;
                this.context = aV.context
            }
            return a.isArray(aV) ? this.setArray(aV) : a.makeArray(aV, this)
        },
        selector: "",
        jquery: "1.4.1",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return E.call(this, 0)
        },
        get: function (aV) {
            return aV == null ? this.toArray() : (aV < 0 ? this.slice(aV)[0] : this[aV])
        },
        pushStack: function (aW, aY, aV) {
            var aX = a(aW || null);
            aX.prevObject = this;
            aX.context = this.context;
            if (aY === "find") {
                aX.selector = this.selector + (this.selector ? " " : "") + aV
            } else {
                if (aY) {
                    aX.selector = this.selector + "." + aY + "(" + aV + ")"
                }
            }
            return aX
        },
        setArray: function (aV) {
            this.length = 0;
            g.apply(this, aV);
            return this
        },
        each: function (aW, aV) {
            return a.each(this, aW, aV)
        },
        ready: function (aV) {
            a.bindReady();
            if (a.isReady) {
                aV.call(ab, a)
            } else {
                if (ad) {
                    ad.push(aV)
                }
            }
            return this
        },
        eq: function (aV) {
            return aV === -1 ? this.slice(aV) : this.slice(aV, +aV + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
        },
        map: function (aV) {
            return this.pushStack(a.map(this, function (aX, aW) {
                return aV.call(aX, aW, aX)
            }))
        },
        end: function () {
            return this.prevObject || a(null)
        },
        push: g,
        sort: [].sort,
        splice: [].splice
    };
    a.fn.init.prototype = a.fn;
    a.extend = a.fn.extend = function () {
        var a0 = arguments[0] || {},
            aZ = 1,
            aY = arguments.length,
            a2 = false,
            a3, aX, aV, aW;
        if (typeof a0 === "boolean") {
            a2 = a0;
            a0 = arguments[1] || {};
            aZ = 2
        }
        if (typeof a0 !== "object" && !a.isFunction(a0)) {
            a0 = {}
        }
        if (aY === aZ) {
            a0 = this;
            --aZ
        }
        for (; aZ < aY; aZ++) {
            if ((a3 = arguments[aZ]) != null) {
                for (aX in a3) {
                    aV = a0[aX];
                    aW = a3[aX];
                    if (a0 === aW) {
                        continue
                    }
                    if (a2 && aW && (a.isPlainObject(aW) || a.isArray(aW))) {
                        var a1 = aV && (a.isPlainObject(aV) || a.isArray(aV)) ? aV : a.isArray(aW) ? [] : {};
                        a0[aX] = a.extend(a2, a1, aW)
                    } else {
                        if (aW !== C) {
                            a0[aX] = aW
                        }
                    }
                }
            }
        }
        return a0
    };
    a.extend({
        noConflict: function (aV) {
            aJ.$ = R;
            if (aV) {
                aJ.jQuery = o
            }
            return a
        },
        isReady: false,
        ready: function () {
            if (!a.isReady) {
                if (!ab.body) {
                    return setTimeout(a.ready, 13)
                }
                a.isReady = true;
                if (ad) {
                    var aW, aV = 0;
                    while ((aW = ad[aV++])) {
                        aW.call(ab, a)
                    }
                    ad = null
                }
                if (a.fn.triggerHandler) {
                    a(ab).triggerHandler("ready")
                }
            }
        },
        bindReady: function () {
            if (J) {
                return
            }
            J = true;
            if (ab.readyState === "complete") {
                return a.ready()
            }
            if (ab.addEventListener) {
                ab.addEventListener("DOMContentLoaded", aD, false);
                aJ.addEventListener("load", a.ready, false)
            } else {
                if (ab.attachEvent) {
                    ab.attachEvent("onreadystatechange", aD);
                    aJ.attachEvent("onload", a.ready);
                    var aV = false;
                    try {
                        aV = aJ.frameElement == null
                    } catch (aW) {}
                    if (ab.documentElement.doScroll && aV) {
                        x()
                    }
                }
            }
        },
        isFunction: function (aV) {
            return ar.call(aV) === "[object Function]"
        },
        isArray: function (aV) {
            return ar.call(aV) === "[object Array]"
        },
        isPlainObject: function (aW) {
            if (!aW || ar.call(aW) !== "[object Object]" || aW.nodeType || aW.setInterval) {
                return false
            }
            if (aW.constructor && !ao.call(aW, "constructor") && !ao.call(aW.constructor.prototype, "isPrototypeOf")) {
                return false
            }
            var aV;
            for (aV in aW) {}
            return aV === C || ao.call(aW, aV)
        },
        isEmptyObject: function (aW) {
            for (var aV in aW) {
                return false
            }
            return true
        },
        error: function (aV) {
            throw aV
        },
        parseJSON: function (aV) {
            if (typeof aV !== "string" || !aV) {
                return null
            }
            if (/^[\],:{}\s]*$/.test(aV.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return aJ.JSON && aJ.JSON.parse ? aJ.JSON.parse(aV) : (new Function("return " + aV))()
            } else {
                a.error("Invalid JSON: " + aV)
            }
        },
        noop: function () {},
        globalEval: function (aX) {
            if (aX && av.test(aX)) {
                var aW = ab.getElementsByTagName("head")[0] || ab.documentElement,
                    aV = ab.createElement("script");
                aV.type = "text/javascript";
                if (a.support.scriptEval) {
                    aV.appendChild(ab.createTextNode(aX))
                } else {
                    aV.text = aX
                }
                aW.insertBefore(aV, aW.firstChild);
                aW.removeChild(aV)
            }
        },
        nodeName: function (aW, aV) {
            return aW.nodeName && aW.nodeName.toUpperCase() === aV.toUpperCase()
        },
        each: function (aY, a2, aX) {
            var aW, aZ = 0,
                a0 = aY.length,
                aV = a0 === C || a.isFunction(aY);
            if (aX) {
                if (aV) {
                    for (aW in aY) {
                        if (a2.apply(aY[aW], aX) === false) {
                            break
                        }
                    }
                } else {
                    for (; aZ < a0;) {
                        if (a2.apply(aY[aZ++], aX) === false) {
                            break
                        }
                    }
                }
            } else {
                if (aV) {
                    for (aW in aY) {
                        if (a2.call(aY[aW], aW, aY[aW]) === false) {
                            break
                        }
                    }
                } else {
                    for (var a1 = aY[0]; aZ < a0 && a2.call(a1, aZ, a1) !== false; a1 = aY[++aZ]) {}
                }
            }
            return aY
        },
        trim: function (aV) {
            return (aV || "").replace(M, "")
        },
        makeArray: function (aX, aW) {
            var aV = aW || [];
            if (aX != null) {
                if (aX.length == null || typeof aX === "string" || a.isFunction(aX) || (typeof aX !== "function" && aX.setInterval)) {
                    g.call(aV, aX)
                } else {
                    a.merge(aV, aX)
                }
            }
            return aV
        },
        inArray: function (aX, aY) {
            if (aY.indexOf) {
                return aY.indexOf(aX)
            }
            for (var aV = 0, aW = aY.length; aV < aW; aV++) {
                if (aY[aV] === aX) {
                    return aV
                }
            }
            return -1
        },
        merge: function (aZ, aX) {
            var aY = aZ.length,
                aW = 0;
            if (typeof aX.length === "number") {
                for (var aV = aX.length; aW < aV; aW++) {
                    aZ[aY++] = aX[aW]
                }
            } else {
                while (aX[aW] !== C) {
                    aZ[aY++] = aX[aW++]
                }
            }
            aZ.length = aY;
            return aZ
        },
        grep: function (aW, a0, aV) {
            var aX = [];
            for (var aY = 0, aZ = aW.length; aY < aZ; aY++) {
                if (!aV !== !a0(aW[aY], aY)) {
                    aX.push(aW[aY])
                }
            }
            return aX
        },
        map: function (aW, a1, aV) {
            var aX = [],
                a0;
            for (var aY = 0, aZ = aW.length; aY < aZ; aY++) {
                a0 = a1(aW[aY], aY, aV);
                if (a0 != null) {
                    aX[aX.length] = a0
                }
            }
            return aX.concat.apply([], aX)
        },
        guid: 1,
        proxy: function (aX, aW, aV) {
            if (arguments.length === 2) {
                if (typeof aW === "string") {
                    aV = aX;
                    aX = aV[aW];
                    aW = C
                } else {
                    if (aW && !a.isFunction(aW)) {
                        aV = aW;
                        aW = C
                    }
                }
            }
            if (!aW && aX) {
                aW = function () {
                    return aX.apply(aV || this, arguments)
                }
            }
            if (aX) {
                aW.guid = aX.guid = aX.guid || aW.guid || a.guid++
            }
            return aW
        },
        uaMatch: function (aW) {
            aW = aW.toLowerCase();
            var aV = /(webkit)[ \/]([\w.]+)/.exec(aW) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(aW) || /(msie) ([\w.]+)/.exec(aW) || !/compatible/.test(aW) && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(aW) || [];
            return {
                browser: aV[1] || "",
                version: aV[2] || "0"
            }
        },
        browser: {}
    });
    v = a.uaMatch(b);
    if (v.browser) {
        a.browser[v.browser] = true;
        a.browser.version = v.version
    }
    if (a.browser.webkit) {
        a.browser.safari = true
    }
    if (t) {
        a.inArray = function (aV, aW) {
            return t.call(aW, aV)
        }
    }
    X = a(ab);
    if (ab.addEventListener) {
        aD = function () {
            ab.removeEventListener("DOMContentLoaded", aD, false);
            a.ready()
        }
    } else {
        if (ab.attachEvent) {
            aD = function () {
                if (ab.readyState === "complete") {
                    ab.detachEvent("onreadystatechange", aD);
                    a.ready()
                }
            }
        }
    }
    function x() {
        if (a.isReady) {
            return
        }
        try {
            ab.documentElement.doScroll("left")
        } catch (aV) {
            setTimeout(x, 1);
            return
        }
        a.ready()
    }
    function aS(aV, aW) {
        if (aW.src) {
            a.ajax({
                url: aW.src,
                async: false,
                dataType: "script"
            })
        } else {
            a.globalEval(aW.text || aW.textContent || aW.innerHTML || "")
        }
        if (aW.parentNode) {
            aW.parentNode.removeChild(aW)
        }
    }
    function am(aV, a3, a1, aX, a0, a2) {
        var aW = aV.length;
        if (typeof a3 === "object") {
            for (var aY in a3) {
                am(aV, aY, a3[aY], aX, a0, a1)
            }
            return aV
        }
        if (a1 !== C) {
            aX = !a2 && aX && a.isFunction(a1);
            for (var aZ = 0; aZ < aW; aZ++) {
                a0(aV[aZ], a3, aX ? a1.call(aV[aZ], aZ, a0(aV[aZ], a3)) : a1, a2)
            }
            return aV
        }
        return aW ? a0(aV[0], a3) : null
    }
    function aM() {
        return (new Date).getTime()
    }(function () {
        a.support = {};
        var a1 = ab.documentElement,
            a0 = ab.createElement("script"),
            aV = ab.createElement("div"),
            aW = "script" + aM();
        aV.style.display = "none";
        aV.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        var a3 = aV.getElementsByTagName("*"),
            a2 = aV.getElementsByTagName("a")[0];
        if (!a3 || !a3.length || !a2) {
            return
        }
        a.support = {
            leadingWhitespace: aV.firstChild.nodeType === 3,
            tbody: !aV.getElementsByTagName("tbody").length,
            htmlSerialize: !! aV.getElementsByTagName("link").length,
            style: /red/.test(a2.getAttribute("style")),
            hrefNormalized: a2.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(a2.style.opacity),
            cssFloat: !! a2.style.cssFloat,
            checkOn: aV.getElementsByTagName("input")[0].value === "on",
            optSelected: ab.createElement("select").appendChild(ab.createElement("option")).selected,
            checkClone: false,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        a0.type = "text/javascript";
        try {
            a0.appendChild(ab.createTextNode("window." + aW + "=1;"))
        } catch (aY) {}
        a1.insertBefore(a0, a1.firstChild);
        if (aJ[aW]) {
            a.support.scriptEval = true;
            delete aJ[aW]
        }
        a1.removeChild(a0);
        if (aV.attachEvent && aV.fireEvent) {
            aV.attachEvent("onclick", function a4() {
                a.support.noCloneEvent = false;
                aV.detachEvent("onclick", a4)
            });
            aV.cloneNode(true).fireEvent("onclick")
        }
        aV = ab.createElement("div");
        aV.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
        var aX = ab.createDocumentFragment();
        aX.appendChild(aV.firstChild);
        a.support.checkClone = aX.cloneNode(true).cloneNode(true).lastChild.checked;
        a(function () {
            var a5 = ab.createElement("div");
            a5.style.width = a5.style.paddingLeft = "1px";
            ab.body.appendChild(a5);
            a.boxModel = a.support.boxModel = a5.offsetWidth === 2;
            ab.body.removeChild(a5).style.display = "none";
            a5 = null
        });
        var aZ = function (a5) {
                var a7 = ab.createElement("div");
                a5 = "on" + a5;
                var a6 = (a5 in a7);
                if (!a6) {
                    a7.setAttribute(a5, "return;");
                    a6 = typeof a7[a5] === "function"
                }
                a7 = null;
                return a6
            };
        a.support.submitBubbles = aZ("submit");
        a.support.changeBubbles = aZ("change");
        a1 = a0 = aV = a3 = a2 = null
    })();
    a.props = {
        "for": "htmlFor",
        "class": "className",
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        colspan: "colSpan",
        tabindex: "tabIndex",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    var aF = "jQuery" + aM(),
        aE = 0,
        aQ = {};
    var L = {};
    a.extend({
        cache: {},
        expando: aF,
        noData: {
            embed: true,
            object: true,
            applet: true
        },
        data: function (aX, aW, aZ) {
            if (aX.nodeName && a.noData[aX.nodeName.toLowerCase()]) {
                return
            }
            aX = aX == aJ ? aQ : aX;
            var a0 = aX[aF],
                aV = a.cache,
                aY;
            if (!aW && !a0) {
                return null
            }
            if (!a0) {
                a0 = ++aE
            }
            if (typeof aW === "object") {
                aX[aF] = a0;
                aY = aV[a0] = a.extend(true, {}, aW)
            } else {
                if (aV[a0]) {
                    aY = aV[a0]
                } else {
                    if (typeof aZ === "undefined") {
                        aY = L
                    } else {
                        aY = aV[a0] = {}
                    }
                }
            }
            if (aZ !== C) {
                aX[aF] = a0;
                aY[aW] = aZ
            }
            return typeof aW === "string" ? aY[aW] : aY
        },
        removeData: function (aX, aW) {
            if (aX.nodeName && a.noData[aX.nodeName.toLowerCase()]) {
                return
            }
            aX = aX == aJ ? aQ : aX;
            var a0 = aX[aF],
                aV = a.cache,
                aY = aV[a0];
            if (aW) {
                if (aY) {
                    delete aY[aW];
                    if (a.isEmptyObject(aY)) {
                        a.removeData(aX)
                    }
                }
            } else {
                try {
                    delete aX[aF]
                } catch (aZ) {
                    if (aX.removeAttribute) {
                        aX.removeAttribute(aF)
                    }
                }
                delete aV[a0]
            }
        }
    });
    a.fn.extend({
        data: function (aV, aX) {
            if (typeof aV === "undefined" && this.length) {
                return a.data(this[0])
            } else {
                if (typeof aV === "object") {
                    return this.each(function () {
                        a.data(this, aV)
                    })
                }
            }
            var aY = aV.split(".");
            aY[1] = aY[1] ? "." + aY[1] : "";
            if (aX === C) {
                var aW = this.triggerHandler("getData" + aY[1] + "!", [aY[0]]);
                if (aW === C && this.length) {
                    aW = a.data(this[0], aV)
                }
                return aW === C && aY[1] ? this.data(aY[0]) : aW
            } else {
                return this.trigger("setData" + aY[1] + "!", [aY[0], aX]).each(function () {
                    a.data(this, aV, aX)
                })
            }
        },
        removeData: function (aV) {
            return this.each(function () {
                a.removeData(this, aV)
            })
        }
    });
    a.extend({
        queue: function (aW, aV, aY) {
            if (!aW) {
                return
            }
            aV = (aV || "fx") + "queue";
            var aX = a.data(aW, aV);
            if (!aY) {
                return aX || []
            }
            if (!aX || a.isArray(aY)) {
                aX = a.data(aW, aV, a.makeArray(aY))
            } else {
                aX.push(aY)
            }
            return aX
        },
        dequeue: function (aY, aX) {
            aX = aX || "fx";
            var aV = a.queue(aY, aX),
                aW = aV.shift();
            if (aW === "inprogress") {
                aW = aV.shift()
            }
            if (aW) {
                if (aX === "fx") {
                    aV.unshift("inprogress")
                }
                aW.call(aY, function () {
                    a.dequeue(aY, aX)
                })
            }
        }
    });
    a.fn.extend({
        queue: function (aV, aW) {
            if (typeof aV !== "string") {
                aW = aV;
                aV = "fx"
            }
            if (aW === C) {
                return a.queue(this[0], aV)
            }
            return this.each(function (aY, aZ) {
                var aX = a.queue(this, aV, aW);
                if (aV === "fx" && aX[0] !== "inprogress") {
                    a.dequeue(this, aV)
                }
            })
        },
        dequeue: function (aV) {
            return this.each(function () {
                a.dequeue(this, aV)
            })
        },
        delay: function (aW, aV) {
            aW = a.fx ? a.fx.speeds[aW] || aW : aW;
            aV = aV || "fx";
            return this.queue(aV, function () {
                var aX = this;
                setTimeout(function () {
                    a.dequeue(aX, aV)
                }, aW)
            })
        },
        clearQueue: function (aV) {
            return this.queue(aV || "fx", [])
        }
    });
    var an = /[\n\t]/g,
        S = /\s+/,
        au = /\r/g,
        aN = /href|src|style/,
        d = /(button|input)/i,
        z = /(button|input|object|select|textarea)/i,
        k = /^(a|area)$/i,
        H = /radio|checkbox/;
    a.fn.extend({
        attr: function (aV, aW) {
            return am(this, aV, aW, true, a.attr)
        },
        removeAttr: function (aV, aW) {
            return this.each(function () {
                a.attr(this, aV, "");
                if (this.nodeType === 1) {
                    this.removeAttribute(aV)
                }
            })
        },
        addClass: function (a0) {
            if (a.isFunction(a0)) {
                return this.each(function (a4) {
                    var a3 = a(this);
                    a3.addClass(a0.call(this, a4, a3.attr("class")))
                })
            }
            if (a0 && typeof a0 === "string") {
                var a1 = (a0 || "").split(S);
                for (var aX = 0, aW = this.length; aX < aW; aX++) {
                    var aZ = this[aX];
                    if (aZ.nodeType === 1) {
                        if (!aZ.className) {
                            aZ.className = a0
                        } else {
                            var aY = " " + aZ.className + " ";
                            for (var a2 = 0, aV = a1.length; a2 < aV; a2++) {
                                if (aY.indexOf(" " + a1[a2] + " ") < 0) {
                                    aZ.className += " " + a1[a2]
                                }
                            }
                        }
                    }
                }
            }
            return this
        },
        removeClass: function (a0) {
            if (a.isFunction(a0)) {
                return this.each(function (a4) {
                    var a3 = a(this);
                    a3.removeClass(a0.call(this, a4, a3.attr("class")))
                })
            }
            if ((a0 && typeof a0 === "string") || a0 === C) {
                var a1 = (a0 || "").split(S);
                for (var aX = 0, aW = this.length; aX < aW; aX++) {
                    var aZ = this[aX];
                    if (aZ.nodeType === 1 && aZ.className) {
                        if (a0) {
                            var aY = (" " + aZ.className + " ").replace(an, " ");
                            for (var a2 = 0, aV = a1.length; a2 < aV; a2++) {
                                aY = aY.replace(" " + a1[a2] + " ", " ")
                            }
                            aZ.className = aY.substring(1, aY.length - 1)
                        } else {
                            aZ.className = ""
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function (aY, aW) {
            var aX = typeof aY,
                aV = typeof aW === "boolean";
            if (a.isFunction(aY)) {
                return this.each(function (a0) {
                    var aZ = a(this);
                    aZ.toggleClass(aY.call(this, a0, aZ.attr("class"), aW), aW)
                })
            }
            return this.each(function () {
                if (aX === "string") {
                    var a1, a0 = 0,
                        aZ = a(this),
                        a2 = aW,
                        a3 = aY.split(S);
                    while ((a1 = a3[a0++])) {
                        a2 = aV ? a2 : !aZ.hasClass(a1);
                        aZ[a2 ? "addClass" : "removeClass"](a1)
                    }
                } else {
                    if (aX === "undefined" || aX === "boolean") {
                        if (this.className) {
                            a.data(this, "__className__", this.className)
                        }
                        this.className = this.className || aY === false ? "" : a.data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function (aV) {
            var aY = " " + aV + " ";
            for (var aX = 0, aW = this.length; aX < aW; aX++) {
                if ((" " + this[aX].className + " ").replace(an, " ").indexOf(aY) > -1) {
                    return true
                }
            }
            return false
        },
        val: function (a2) {
            if (a2 === C) {
                var aW = this[0];
                if (aW) {
                    if (a.nodeName(aW, "option")) {
                        return (aW.attributes.value || {}).specified ? aW.value : aW.text
                    }
                    if (a.nodeName(aW, "select")) {
                        var a0 = aW.selectedIndex,
                            a3 = [],
                            a4 = aW.options,
                            aZ = aW.type === "select-one";
                        if (a0 < 0) {
                            return null
                        }
                        for (var aX = aZ ? a0 : 0, a1 = aZ ? a0 + 1 : a4.length; aX < a1; aX++) {
                            var aY = a4[aX];
                            if (aY.selected) {
                                a2 = a(aY).val();
                                if (aZ) {
                                    return a2
                                }
                                a3.push(a2)
                            }
                        }
                        return a3
                    }
                    if (H.test(aW.type) && !a.support.checkOn) {
                        return aW.getAttribute("value") === null ? "on" : aW.value
                    }
                    return (aW.value || "").replace(au, "")
                }
                return C
            }
            var aV = a.isFunction(a2);
            return this.each(function (a7) {
                var a6 = a(this),
                    a8 = a2;
                if (this.nodeType !== 1) {
                    return
                }
                if (aV) {
                    a8 = a2.call(this, a7, a6.val())
                }
                if (typeof a8 === "number") {
                    a8 += ""
                }
                if (a.isArray(a8) && H.test(this.type)) {
                    this.checked = a.inArray(a6.val(), a8) >= 0
                } else {
                    if (a.nodeName(this, "select")) {
                        var a5 = a.makeArray(a8);
                        a("option", this).each(function () {
                            this.selected = a.inArray(a(this).val(), a5) >= 0
                        });
                        if (!a5.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = a8
                    }
                }
            })
        }
    });
    a.extend({
        attrFn: {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true
        },
        attr: function (aW, aV, a1, a4) {
            if (!aW || aW.nodeType === 3 || aW.nodeType === 8) {
                return C
            }
            if (a4 && aV in a.attrFn) {
                return a(aW)[aV](a1)
            }
            var aX = aW.nodeType !== 1 || !a.isXMLDoc(aW),
                a0 = a1 !== C;
            aV = aX && a.props[aV] || aV;
            if (aW.nodeType === 1) {
                var aZ = aN.test(aV);
                if (aV === "selected" && !a.support.optSelected) {
                    var a2 = aW.parentNode;
                    if (a2) {
                        a2.selectedIndex;
                        if (a2.parentNode) {
                            a2.parentNode.selectedIndex
                        }
                    }
                }
                if (aV in aW && aX && !aZ) {
                    if (a0) {
                        if (aV === "type" && d.test(aW.nodeName) && aW.parentNode) {
                            a.error("type property can't be changed")
                        }
                        aW[aV] = a1
                    }
                    if (a.nodeName(aW, "form") && aW.getAttributeNode(aV)) {
                        return aW.getAttributeNode(aV).nodeValue
                    }
                    if (aV === "tabIndex") {
                        var a3 = aW.getAttributeNode("tabIndex");
                        return a3 && a3.specified ? a3.value : z.test(aW.nodeName) || k.test(aW.nodeName) && aW.href ? 0 : C
                    }
                    return aW[aV]
                }
                if (!a.support.style && aX && aV === "style") {
                    if (a0) {
                        aW.style.cssText = "" + a1
                    }
                    return aW.style.cssText
                }
                if (a0) {
                    aW.setAttribute(aV, "" + a1)
                }
                var aY = !a.support.hrefNormalized && aX && aZ ? aW.getAttribute(aV, 2) : aW.getAttribute(aV);
                return aY === null ? C : aY
            }
            return a.style(aW, aV, a1)
        }
    });
    var A = function (aV) {
            return aV.replace(/[^\w\s\.\|`]/g, function (aW) {
                return "\\" + aW
            })
        };
    a.event = {
        add: function (aX, a2, a7, aZ) {
            if (aX.nodeType === 3 || aX.nodeType === 8) {
                return
            }
            if (aX.setInterval && (aX !== aJ && !aX.frameElement)) {
                aX = aJ
            }
            if (!a7.guid) {
                a7.guid = a.guid++
            }
            if (aZ !== C) {
                var a5 = a7;
                a7 = a.proxy(a5);
                a7.data = aZ
            }
            var a8 = a.data(aX, "events") || a.data(aX, "events", {}),
                a1 = a.data(aX, "handle"),
                a0;
            if (!a1) {
                a0 = function () {
                    return typeof a !== "undefined" && !a.event.triggered ? a.event.handle.apply(a0.elem, arguments) : C
                };
                a1 = a.data(aX, "handle", a0)
            }
            if (!a1) {
                return
            }
            a1.elem = aX;
            a2 = a2.split(/\s+/);
            var a4, aY = 0;
            while ((a4 = a2[aY++])) {
                var aV = a4.split(".");
                a4 = aV.shift();
                if (aY > 1) {
                    a7 = a.proxy(a7);
                    if (aZ !== C) {
                        a7.data = aZ
                    }
                }
                a7.type = aV.slice(0).sort().join(".");
                var aW = a8[a4],
                    a3 = this.special[a4] || {};
                if (!aW) {
                    aW = a8[a4] = {};
                    if (!a3.setup || a3.setup.call(aX, aZ, aV, a7) === false) {
                        if (aX.addEventListener) {
                            aX.addEventListener(a4, a1, false)
                        } else {
                            if (aX.attachEvent) {
                                aX.attachEvent("on" + a4, a1)
                            }
                        }
                    }
                }
                if (a3.add) {
                    var a6 = a3.add.call(aX, a7, aZ, aV, aW);
                    if (a6 && a.isFunction(a6)) {
                        a6.guid = a6.guid || a7.guid;
                        a6.data = a6.data || a7.data;
                        a6.type = a6.type || a7.type;
                        a7 = a6
                    }
                }
                aW[a7.guid] = a7;
                this.global[a4] = true
            }
            aX = null
        },
        global: {},
        remove: function (aX, a1, a7) {
            if (aX.nodeType === 3 || aX.nodeType === 8) {
                return
            }
            var a8 = a.data(aX, "events"),
                a2, a4, a5;
            if (a8) {
                if (a1 === C || (typeof a1 === "string" && a1.charAt(0) === ".")) {
                    for (a4 in a8) {
                        this.remove(aX, a4 + (a1 || ""))
                    }
                } else {
                    if (a1.type) {
                        a7 = a1.handler;
                        a1 = a1.type
                    }
                    a1 = a1.split(/\s+/);
                    var aZ = 0;
                    while ((a4 = a1[aZ++])) {
                        var aV = a4.split(".");
                        a4 = aV.shift();
                        var a6 = !aV.length,
                            aW = a.map(aV.slice(0).sort(), A),
                            aY = new RegExp("(^|\\.)" + aW.join("\\.(?:.*\\.)?") + "(\\.|$)"),
                            a3 = this.special[a4] || {};
                        if (a8[a4]) {
                            if (a7) {
                                a5 = a8[a4][a7.guid];
                                delete a8[a4][a7.guid]
                            } else {
                                for (var a0 in a8[a4]) {
                                    if (a6 || aY.test(a8[a4][a0].type)) {
                                        delete a8[a4][a0]
                                    }
                                }
                            }
                            if (a3.remove) {
                                a3.remove.call(aX, aV, a5)
                            }
                            for (a2 in a8[a4]) {
                                break
                            }
                            if (!a2) {
                                if (!a3.teardown || a3.teardown.call(aX, aV) === false) {
                                    if (aX.removeEventListener) {
                                        aX.removeEventListener(a4, a.data(aX, "handle"), false)
                                    } else {
                                        if (aX.detachEvent) {
                                            aX.detachEvent("on" + a4, a.data(aX, "handle"))
                                        }
                                    }
                                }
                                a2 = null;
                                delete a8[a4]
                            }
                        }
                    }
                }
                for (a2 in a8) {
                    break
                }
                if (!a2) {
                    var a0 = a.data(aX, "handle");
                    if (a0) {
                        a0.elem = null
                    }
                    a.removeData(aX, "events");
                    a.removeData(aX, "handle")
                }
            }
        },
        trigger: function (aV, aZ, aX) {
            var a3 = aV.type || aV,
                aY = arguments[3];
            if (!aY) {
                aV = typeof aV === "object" ? aV[aF] ? aV : a.extend(a.Event(a3), aV) : a.Event(a3);
                if (a3.indexOf("!") >= 0) {
                    aV.type = a3 = a3.slice(0, -1);
                    aV.exclusive = true
                }
                if (!aX) {
                    aV.stopPropagation();
                    if (this.global[a3]) {
                        a.each(a.cache, function () {
                            if (this.events && this.events[a3]) {
                                a.event.trigger(aV, aZ, this.handle.elem)
                            }
                        })
                    }
                }
                if (!aX || aX.nodeType === 3 || aX.nodeType === 8) {
                    return C
                }
                aV.result = C;
                aV.target = aX;
                aZ = a.makeArray(aZ);
                aZ.unshift(aV)
            }
            aV.currentTarget = aX;
            var a0 = a.data(aX, "handle");
            if (a0) {
                a0.apply(aX, aZ)
            }
            var a4 = aX.parentNode || aX.ownerDocument;
            try {
                if (!(aX && aX.nodeName && a.noData[aX.nodeName.toLowerCase()])) {
                    if (aX["on" + a3] && aX["on" + a3].apply(aX, aZ) === false) {
                        aV.result = false
                    }
                }
            } catch (a2) {}
            if (!aV.isPropagationStopped() && a4) {
                a.event.trigger(aV, aZ, a4, true)
            } else {
                if (!aV.isDefaultPrevented()) {
                    var a1 = aV.target,
                        aW, a5 = a.nodeName(a1, "a") && a3 === "click";
                    if (!a5 && !(a1 && a1.nodeName && a.noData[a1.nodeName.toLowerCase()])) {
                        try {
                            if (a1[a3]) {
                                aW = a1["on" + a3];
                                if (aW) {
                                    a1["on" + a3] = null
                                }
                                this.triggered = true;
                                a1[a3]()
                            }
                        } catch (a2) {}
                        if (aW) {
                            a1["on" + a3] = aW
                        }
                        this.triggered = false
                    }
                }
            }
        },
        handle: function (a1) {
            var a0, aV;
            a1 = arguments[0] = a.event.fix(a1 || aJ.event);
            a1.currentTarget = this;
            var a2 = a1.type.split(".");
            a1.type = a2.shift();
            a0 = !a2.length && !a1.exclusive;
            var aZ = new RegExp("(^|\\.)" + a2.slice(0).sort().join("\\.(?:.*\\.)?") + "(\\.|$)");
            aV = (a.data(this, "events") || {})[a1.type];
            for (var aX in aV) {
                var aY = aV[aX];
                if (a0 || aZ.test(aY.type)) {
                    a1.handler = aY;
                    a1.data = aY.data;
                    var aW = aY.apply(this, arguments);
                    if (aW !== C) {
                        a1.result = aW;
                        if (aW === false) {
                            a1.preventDefault();
                            a1.stopPropagation()
                        }
                    }
                    if (a1.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
            return a1.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (aY) {
            if (aY[aF]) {
                return aY
            }
            var aW = aY;
            aY = a.Event(aW);
            for (var aX = this.props.length, a0; aX;) {
                a0 = this.props[--aX];
                aY[a0] = aW[a0]
            }
            if (!aY.target) {
                aY.target = aY.srcElement || ab
            }
            if (aY.target.nodeType === 3) {
                aY.target = aY.target.parentNode
            }
            if (!aY.relatedTarget && aY.fromElement) {
                aY.relatedTarget = aY.fromElement === aY.target ? aY.toElement : aY.fromElement
            }
            if (aY.pageX == null && aY.clientX != null) {
                var aZ = ab.documentElement,
                    aV = ab.body;
                aY.pageX = aY.clientX + (aZ && aZ.scrollLeft || aV && aV.scrollLeft || 0) - (aZ && aZ.clientLeft || aV && aV.clientLeft || 0);
                aY.pageY = aY.clientY + (aZ && aZ.scrollTop || aV && aV.scrollTop || 0) - (aZ && aZ.clientTop || aV && aV.clientTop || 0)
            }
            if (!aY.which && ((aY.charCode || aY.charCode === 0) ? aY.charCode : aY.keyCode)) {
                aY.which = aY.charCode || aY.keyCode
            }
            if (!aY.metaKey && aY.ctrlKey) {
                aY.metaKey = aY.ctrlKey
            }
            if (!aY.which && aY.button !== C) {
                aY.which = (aY.button & 1 ? 1 : (aY.button & 2 ? 3 : (aY.button & 4 ? 2 : 0)))
            }
            return aY
        },
        guid: 100000000,
        proxy: a.proxy,
        special: {
            ready: {
                setup: a.bindReady,
                teardown: a.noop
            },
            live: {
                add: function (aV, aY, aX, aW) {
                    a.extend(aV, aY || {});
                    aV.guid += aY.selector + aY.live;
                    aY.liveProxy = aV;
                    a.event.add(this, aY.live, V, aY)
                },
                remove: function (aX) {
                    if (aX.length) {
                        var aV = 0,
                            aW = new RegExp("(^|\\.)" + aX[0] + "(\\.|$)");
                        a.each((a.data(this, "events").live || {}), function () {
                            if (aW.test(this.type)) {
                                aV++
                            }
                        });
                        if (aV < 1) {
                            a.event.remove(this, aX[0], V)
                        }
                    }
                },
                special: {}
            },
            beforeunload: {
                setup: function (aX, aW, aV) {
                    if (this.setInterval) {
                        this.onbeforeunload = aV
                    }
                    return false
                },
                teardown: function (aW, aV) {
                    if (this.onbeforeunload === aV) {
                        this.onbeforeunload = null
                    }
                }
            }
        }
    };
    a.Event = function (aV) {
        if (!this.preventDefault) {
            return new a.Event(aV)
        }
        if (aV && aV.type) {
            this.originalEvent = aV;
            this.type = aV.type
        } else {
            this.type = aV
        }
        this.timeStamp = aM();
        this[aF] = true
    };

    function aO() {
        return false
    }
    function f() {
        return true
    }
    a.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = f;
            var aV = this.originalEvent;
            if (!aV) {
                return
            }
            if (aV.preventDefault) {
                aV.preventDefault()
            }
            aV.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = f;
            var aV = this.originalEvent;
            if (!aV) {
                return
            }
            if (aV.stopPropagation) {
                aV.stopPropagation()
            }
            aV.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = f;
            this.stopPropagation()
        },
        isDefaultPrevented: aO,
        isPropagationStopped: aO,
        isImmediatePropagationStopped: aO
    };
    var Q = function (aW) {
            var aV = aW.relatedTarget;
            while (aV && aV !== this) {
                try {
                    aV = aV.parentNode
                } catch (aX) {
                    break
                }
            }
            if (aV !== this) {
                aW.type = aW.data;
                a.event.handle.apply(this, arguments)
            }
        },
        aw = function (aV) {
            aV.type = aV.data;
            a.event.handle.apply(this, arguments)
        };
    a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (aW, aV) {
        a.event.special[aW] = {
            setup: function (aX) {
                a.event.add(this, aV, aX && aX.selector ? aw : Q, aW)
            },
            teardown: function (aX) {
                a.event.remove(this, aV, aX && aX.selector ? aw : Q)
            }
        }
    });
    if (!a.support.submitBubbles) {
        a.event.special.submit = {
            setup: function (aX, aW, aV) {
                if (this.nodeName.toLowerCase() !== "form") {
                    a.event.add(this, "click.specialSubmit." + aV.guid, function (a0) {
                        var aZ = a0.target,
                            aY = aZ.type;
                        if ((aY === "submit" || aY === "image") && a(aZ).closest("form").length) {
                            return ay("submit", this, arguments)
                        }
                    });
                    a.event.add(this, "keypress.specialSubmit." + aV.guid, function (a0) {
                        var aZ = a0.target,
                            aY = aZ.type;
                        if ((aY === "text" || aY === "password") && a(aZ).closest("form").length && a0.keyCode === 13) {
                            return ay("submit", this, arguments)
                        }
                    })
                } else {
                    return false
                }
            },
            remove: function (aW, aV) {
                a.event.remove(this, "click.specialSubmit" + (aV ? "." + aV.guid : ""));
                a.event.remove(this, "keypress.specialSubmit" + (aV ? "." + aV.guid : ""))
            }
        }
    }
    if (!a.support.changeBubbles) {
        var ap = /textarea|input|select/i;

        function j(aW) {
            var aV = aW.type,
                aX = aW.value;
            if (aV === "radio" || aV === "checkbox") {
                aX = aW.checked
            } else {
                if (aV === "select-multiple") {
                    aX = aW.selectedIndex > -1 ? a.map(aW.options, function (aY) {
                        return aY.selected
                    }).join("-") : ""
                } else {
                    if (aW.nodeName.toLowerCase() === "select") {
                        aX = aW.selectedIndex
                    }
                }
            }
            return aX
        }
        function O(aX) {
            var aV = aX.target,
                aW, aY;
            if (!ap.test(aV.nodeName) || aV.readOnly) {
                return
            }
            aW = a.data(aV, "_change_data");
            aY = j(aV);
            if (aX.type !== "focusout" || aV.type !== "radio") {
                a.data(aV, "_change_data", aY)
            }
            if (aW === C || aY === aW) {
                return
            }
            if (aW != null || aY) {
                aX.type = "change";
                return a.event.trigger(aX, arguments[1], aV)
            }
        }
        a.event.special.change = {
            filters: {
                focusout: O,
                click: function (aX) {
                    var aW = aX.target,
                        aV = aW.type;
                    if (aV === "radio" || aV === "checkbox" || aW.nodeName.toLowerCase() === "select") {
                        return O.call(this, aX)
                    }
                },
                keydown: function (aX) {
                    var aW = aX.target,
                        aV = aW.type;
                    if ((aX.keyCode === 13 && aW.nodeName.toLowerCase() !== "textarea") || (aX.keyCode === 32 && (aV === "checkbox" || aV === "radio")) || aV === "select-multiple") {
                        return O.call(this, aX)
                    }
                },
                beforeactivate: function (aW) {
                    var aV = aW.target;
                    if (aV.nodeName.toLowerCase() === "input" && aV.type === "radio") {
                        a.data(aV, "_change_data", j(aV))
                    }
                }
            },
            setup: function (aY, aX, aW) {
                for (var aV in aP) {
                    a.event.add(this, aV + ".specialChange." + aW.guid, aP[aV])
                }
                return ap.test(this.nodeName)
            },
            remove: function (aX, aW) {
                for (var aV in aP) {
                    a.event.remove(this, aV + ".specialChange" + (aW ? "." + aW.guid : ""), aP[aV])
                }
                return ap.test(this.nodeName)
            }
        };
        var aP = a.event.special.change.filters
    }
    function ay(aW, aX, aV) {
        aV[0].type = aW;
        return a.event.handle.apply(aX, aV)
    }
    if (ab.addEventListener) {
        a.each({
            focus: "focusin",
            blur: "focusout"
        }, function (aX, aV) {
            a.event.special[aV] = {
                setup: function () {
                    this.addEventListener(aX, aW, true)
                },
                teardown: function () {
                    this.removeEventListener(aX, aW, true)
                }
            };

            function aW(aY) {
                aY = a.event.fix(aY);
                aY.type = aV;
                return a.event.handle.call(this, aY)
            }
        })
    }
    a.each(["bind", "one"], function (aW, aV) {
        a.fn[aV] = function (a0, a1, aZ) {
            if (typeof a0 === "object") {
                for (var aX in a0) {
                    this[aV](aX, a1, a0[aX], aZ)
                }
                return this
            }
            if (a.isFunction(a1)) {
                aZ = a1;
                a1 = C
            }
            var aY = aV === "one" ? a.proxy(aZ, function (a2) {
                a(this).unbind(a2, aY);
                return aZ.apply(this, arguments)
            }) : aZ;
            return a0 === "unload" && aV !== "one" ? this.one(a0, a1, aZ) : this.each(function () {
                a.event.add(this, a0, aY, a1)
            })
        }
    });
    a.fn.extend({
        unbind: function (aX, aW) {
            if (typeof aX === "object" && !aX.preventDefault) {
                for (var aV in aX) {
                    this.unbind(aV, aX[aV])
                }
                return this
            }
            return this.each(function () {
                a.event.remove(this, aX, aW)
            })
        },
        trigger: function (aV, aW) {
            return this.each(function () {
                a.event.trigger(aV, aW, this)
            })
        },
        triggerHandler: function (aV, aX) {
            if (this[0]) {
                var aW = a.Event(aV);
                aW.preventDefault();
                aW.stopPropagation();
                a.event.trigger(aW, aX, this[0]);
                return aW.result
            }
        },
        toggle: function (aX) {
            var aV = arguments,
                aW = 1;
            while (aW < aV.length) {
                a.proxy(aX, aV[aW++])
            }
            return this.click(a.proxy(aX, function (aY) {
                var aZ = (a.data(this, "lastToggle" + aX.guid) || 0) % aW;
                a.data(this, "lastToggle" + aX.guid, aZ + 1);
                aY.preventDefault();
                return aV[aZ].apply(this, arguments) || false
            }))
        },
        hover: function (aV, aW) {
            return this.mouseenter(aV).mouseleave(aW || aV)
        }
    });
    a.each(["live", "die"], function (aW, aV) {
        a.fn[aV] = function (aY, a1, a0) {
            var aZ, aX = 0;
            if (a.isFunction(a1)) {
                a0 = a1;
                a1 = C
            }
            aY = (aY || "").split(/\s+/);
            while ((aZ = aY[aX++]) != null) {
                aZ = aZ === "focus" ? "focusin" : aZ === "blur" ? "focusout" : aZ === "hover" ? aY.push("mouseleave") && "mouseenter" : aZ;
                if (aV === "live") {
                    a(this.context).bind(n(aZ, this.selector), {
                        data: a1,
                        selector: this.selector,
                        live: aZ
                    }, a0)
                } else {
                    a(this.context).unbind(n(aZ, this.selector), a0 ? {
                        guid: a0.guid + this.selector + aZ
                    } : null)
                }
            }
            return this
        }
    });

    function V(aV) {
        var a6, aW = [],
            a8 = [],
            a4 = arguments,
            a7, a3, a5, aY, a0, a2, aZ, a1, aX = a.extend({}, a.data(this, "events").live);
        if (aV.button && aV.type === "click") {
            return
        }
        for (a0 in aX) {
            a5 = aX[a0];
            if (a5.live === aV.type || a5.altLive && a.inArray(aV.type, a5.altLive) > -1) {
                a1 = a5.data;
                if (!(a1.beforeFilter && a1.beforeFilter[aV.type] && !a1.beforeFilter[aV.type](aV))) {
                    a8.push(a5.selector)
                }
            } else {
                delete aX[a0]
            }
        }
        a3 = a(aV.target).closest(a8, aV.currentTarget);
        for (a2 = 0, aZ = a3.length; a2 < aZ; a2++) {
            for (a0 in aX) {
                a5 = aX[a0];
                aY = a3[a2].elem;
                a7 = null;
                if (a3[a2].selector === a5.selector) {
                    if (a5.live === "mouseenter" || a5.live === "mouseleave") {
                        a7 = a(aV.relatedTarget).closest(a5.selector)[0]
                    }
                    if (!a7 || a7 !== aY) {
                        aW.push({
                            elem: aY,
                            fn: a5
                        })
                    }
                }
            }
        }
        for (a2 = 0, aZ = aW.length; a2 < aZ; a2++) {
            a3 = aW[a2];
            aV.currentTarget = a3.elem;
            aV.data = a3.fn.data;
            if (a3.fn.apply(a3.elem, a4) === false) {
                a6 = false;
                break
            }
        }
        return a6
    }
    function n(aW, aV) {
        return "live." + (aW ? aW + "." : "") + aV.replace(/\./g, "`").replace(/ /g, "&")
    }
    a.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error").split(" "), function (aW, aV) {
        a.fn[aV] = function (aX) {
            return aX ? this.bind(aV, aX) : this.trigger(aV)
        };
        if (a.attrFn) {
            a.attrFn[aV] = true
        }
    });
    if (aJ.attachEvent && !aJ.addEventListener) {
        aJ.attachEvent("onunload", function () {
            for (var aW in a.cache) {
                if (a.cache[aW].handle) {
                    try {
                        a.event.remove(a.cache[aW].handle.elem)
                    } catch (aV) {}
                }
            }
        });
        /*
         * Sizzle CSS Selector Engine - v1.0
         *  Copyright 2009, The Dojo Foundation
         *  Released under the MIT, BSD, and GPL Licenses.
         *  More information: http://sizzlejs.com/
         */
    }(function () {
        var a6 = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            a7 = 0,
            a9 = Object.prototype.toString,
            a1 = false,
            a0 = true;
        [0, 0].sort(function () {
            a0 = false;
            return 0
        });
        var aX = function (bi, bd, bl, bm) {
                bl = bl || [];
                var bo = bd = bd || ab;
                if (bd.nodeType !== 1 && bd.nodeType !== 9) {
                    return []
                }
                if (!bi || typeof bi !== "string") {
                    return bl
                }
                var bj = [],
                    bf, bq, bt, be, bh = true,
                    bg = aY(bd),
                    bn = bi;
                while ((a6.exec(""), bf = a6.exec(bn)) !== null) {
                    bn = bf[3];
                    bj.push(bf[1]);
                    if (bf[2]) {
                        be = bf[3];
                        break
                    }
                }
                if (bj.length > 1 && a2.exec(bi)) {
                    if (bj.length === 2 && a3.relative[bj[0]]) {
                        bq = ba(bj[0] + bj[1], bd)
                    } else {
                        bq = a3.relative[bj[0]] ? [bd] : aX(bj.shift(), bd);
                        while (bj.length) {
                            bi = bj.shift();
                            if (a3.relative[bi]) {
                                bi += bj.shift()
                            }
                            bq = ba(bi, bq)
                        }
                    }
                } else {
                    if (!bm && bj.length > 1 && bd.nodeType === 9 && !bg && a3.match.ID.test(bj[0]) && !a3.match.ID.test(bj[bj.length - 1])) {
                        var bp = aX.find(bj.shift(), bd, bg);
                        bd = bp.expr ? aX.filter(bp.expr, bp.set)[0] : bp.set[0]
                    }
                    if (bd) {
                        var bp = bm ? {
                            expr: bj.pop(),
                            set: a5(bm)
                        } : aX.find(bj.pop(), bj.length === 1 && (bj[0] === "~" || bj[0] === "+") && bd.parentNode ? bd.parentNode : bd, bg);
                        bq = bp.expr ? aX.filter(bp.expr, bp.set) : bp.set;
                        if (bj.length > 0) {
                            bt = a5(bq)
                        } else {
                            bh = false
                        }
                        while (bj.length) {
                            var bs = bj.pop(),
                                br = bs;
                            if (!a3.relative[bs]) {
                                bs = ""
                            } else {
                                br = bj.pop()
                            }
                            if (br == null) {
                                br = bd
                            }
                            a3.relative[bs](bt, br, bg)
                        }
                    } else {
                        bt = bj = []
                    }
                }
                if (!bt) {
                    bt = bq
                }
                if (!bt) {
                    aX.error(bs || bi)
                }
                if (a9.call(bt) === "[object Array]") {
                    if (!bh) {
                        bl.push.apply(bl, bt)
                    } else {
                        if (bd && bd.nodeType === 1) {
                            for (var bk = 0; bt[bk] != null; bk++) {
                                if (bt[bk] && (bt[bk] === true || bt[bk].nodeType === 1 && a4(bd, bt[bk]))) {
                                    bl.push(bq[bk])
                                }
                            }
                        } else {
                            for (var bk = 0; bt[bk] != null; bk++) {
                                if (bt[bk] && bt[bk].nodeType === 1) {
                                    bl.push(bq[bk])
                                }
                            }
                        }
                    }
                } else {
                    a5(bt, bl)
                }
                if (be) {
                    aX(be, bo, bl, bm);
                    aX.uniqueSort(bl)
                }
                return bl
            };
        aX.uniqueSort = function (be) {
            if (a8) {
                a1 = a0;
                be.sort(a8);
                if (a1) {
                    for (var bd = 1; bd < be.length; bd++) {
                        if (be[bd] === be[bd - 1]) {
                            be.splice(bd--, 1)
                        }
                    }
                }
            }
            return be
        };
        aX.matches = function (bd, be) {
            return aX(bd, null, null, be)
        };
        aX.find = function (bk, bd, bl) {
            var bj, bh;
            if (!bk) {
                return []
            }
            for (var bg = 0, bf = a3.order.length; bg < bf; bg++) {
                var bi = a3.order[bg],
                    bh;
                if ((bh = a3.leftMatch[bi].exec(bk))) {
                    var be = bh[1];
                    bh.splice(1, 1);
                    if (be.substr(be.length - 1) !== "\\") {
                        bh[1] = (bh[1] || "").replace(/\\/g, "");
                        bj = a3.find[bi](bh, bd, bl);
                        if (bj != null) {
                            bk = bk.replace(a3.match[bi], "");
                            break
                        }
                    }
                }
            }
            if (!bj) {
                bj = bd.getElementsByTagName("*")
            }
            return {
                set: bj,
                expr: bk
            }
        };
        aX.filter = function (bo, bn, br, bh) {
            var bf = bo,
                bt = [],
                bl = bn,
                bj, bd, bk = bn && bn[0] && aY(bn[0]);
            while (bo && bn.length) {
                for (var bm in a3.filter) {
                    if ((bj = a3.leftMatch[bm].exec(bo)) != null && bj[2]) {
                        var be = a3.filter[bm],
                            bs, bq, bg = bj[1];
                        bd = false;
                        bj.splice(1, 1);
                        if (bg.substr(bg.length - 1) === "\\") {
                            continue
                        }
                        if (bl === bt) {
                            bt = []
                        }
                        if (a3.preFilter[bm]) {
                            bj = a3.preFilter[bm](bj, bl, br, bt, bh, bk);
                            if (!bj) {
                                bd = bs = true
                            } else {
                                if (bj === true) {
                                    continue
                                }
                            }
                        }
                        if (bj) {
                            for (var bi = 0;
                            (bq = bl[bi]) != null; bi++) {
                                if (bq) {
                                    bs = be(bq, bj, bi, bl);
                                    var bp = bh ^ !! bs;
                                    if (br && bs != null) {
                                        if (bp) {
                                            bd = true
                                        } else {
                                            bl[bi] = false
                                        }
                                    } else {
                                        if (bp) {
                                            bt.push(bq);
                                            bd = true
                                        }
                                    }
                                }
                            }
                        }
                        if (bs !== C) {
                            if (!br) {
                                bl = bt
                            }
                            bo = bo.replace(a3.match[bm], "");
                            if (!bd) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (bo === bf) {
                    if (bd == null) {
                        aX.error(bo)
                    } else {
                        break
                    }
                }
                bf = bo
            }
            return bl
        };
        aX.error = function (bd) {
            throw "Syntax error, unrecognized expression: " + bd
        };
        var a3 = aX.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (bd) {
                    return bd.getAttribute("href")
                }
            },
            relative: {
                "+": function (bj, be) {
                    var bg = typeof be === "string",
                        bi = bg && !/\W/.test(be),
                        bk = bg && !bi;
                    if (bi) {
                        be = be.toLowerCase()
                    }
                    for (var bf = 0, bd = bj.length, bh; bf < bd; bf++) {
                        if ((bh = bj[bf])) {
                            while ((bh = bh.previousSibling) && bh.nodeType !== 1) {}
                            bj[bf] = bk || bh && bh.nodeName.toLowerCase() === be ? bh || false : bh === be
                        }
                    }
                    if (bk) {
                        aX.filter(be, bj, true)
                    }
                },
                ">": function (bj, be) {
                    var bh = typeof be === "string";
                    if (bh && !/\W/.test(be)) {
                        be = be.toLowerCase();
                        for (var bf = 0, bd = bj.length; bf < bd; bf++) {
                            var bi = bj[bf];
                            if (bi) {
                                var bg = bi.parentNode;
                                bj[bf] = bg.nodeName.toLowerCase() === be ? bg : false
                            }
                        }
                    } else {
                        for (var bf = 0, bd = bj.length; bf < bd; bf++) {
                            var bi = bj[bf];
                            if (bi) {
                                bj[bf] = bh ? bi.parentNode : bi.parentNode === be
                            }
                        }
                        if (bh) {
                            aX.filter(be, bj, true)
                        }
                    }
                },
                "": function (bg, be, bi) {
                    var bf = a7++,
                        bd = bb;
                    if (typeof be === "string" && !/\W/.test(be)) {
                        var bh = be = be.toLowerCase();
                        bd = aV
                    }
                    bd("parentNode", be, bf, bg, bh, bi)
                },
                "~": function (bg, be, bi) {
                    var bf = a7++,
                        bd = bb;
                    if (typeof be === "string" && !/\W/.test(be)) {
                        var bh = be = be.toLowerCase();
                        bd = aV
                    }
                    bd("previousSibling", be, bf, bg, bh, bi)
                }
            },
            find: {
                ID: function (be, bf, bg) {
                    if (typeof bf.getElementById !== "undefined" && !bg) {
                        var bd = bf.getElementById(be[1]);
                        return bd ? [bd] : []
                    }
                },
                NAME: function (bf, bi) {
                    if (typeof bi.getElementsByName !== "undefined") {
                        var be = [],
                            bh = bi.getElementsByName(bf[1]);
                        for (var bg = 0, bd = bh.length; bg < bd; bg++) {
                            if (bh[bg].getAttribute("name") === bf[1]) {
                                be.push(bh[bg])
                            }
                        }
                        return be.length === 0 ? null : be
                    }
                },
                TAG: function (bd, be) {
                    return be.getElementsByTagName(bd[1])
                }
            },
            preFilter: {
                CLASS: function (bg, be, bf, bd, bj, bk) {
                    bg = " " + bg[1].replace(/\\/g, "") + " ";
                    if (bk) {
                        return bg
                    }
                    for (var bh = 0, bi;
                    (bi = be[bh]) != null; bh++) {
                        if (bi) {
                            if (bj ^ (bi.className && (" " + bi.className + " ").replace(/[\t\n]/g, " ").indexOf(bg) >= 0)) {
                                if (!bf) {
                                    bd.push(bi)
                                }
                            } else {
                                if (bf) {
                                    be[bh] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (bd) {
                    return bd[1].replace(/\\/g, "")
                },
                TAG: function (be, bd) {
                    return be[1].toLowerCase()
                },
                CHILD: function (bd) {
                    if (bd[1] === "nth") {
                        var be = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(bd[2] === "even" && "2n" || bd[2] === "odd" && "2n+1" || !/\D/.test(bd[2]) && "0n+" + bd[2] || bd[2]);
                        bd[2] = (be[1] + (be[2] || 1)) - 0;
                        bd[3] = be[3] - 0
                    }
                    bd[0] = a7++;
                    return bd
                },
                ATTR: function (bh, be, bf, bd, bi, bj) {
                    var bg = bh[1].replace(/\\/g, "");
                    if (!bj && a3.attrMap[bg]) {
                        bh[1] = a3.attrMap[bg]
                    }
                    if (bh[2] === "~=") {
                        bh[4] = " " + bh[4] + " "
                    }
                    return bh
                },
                PSEUDO: function (bh, be, bf, bd, bi) {
                    if (bh[1] === "not") {
                        if ((a6.exec(bh[3]) || "").length > 1 || /^\w/.test(bh[3])) {
                            bh[3] = aX(bh[3], null, null, be)
                        } else {
                            var bg = aX.filter(bh[3], be, bf, true ^ bi);
                            if (!bf) {
                                bd.push.apply(bd, bg)
                            }
                            return false
                        }
                    } else {
                        if (a3.match.POS.test(bh[0]) || a3.match.CHILD.test(bh[0])) {
                            return true
                        }
                    }
                    return bh
                },
                POS: function (bd) {
                    bd.unshift(true);
                    return bd
                }
            },
            filters: {
                enabled: function (bd) {
                    return bd.disabled === false && bd.type !== "hidden"
                },
                disabled: function (bd) {
                    return bd.disabled === true
                },
                checked: function (bd) {
                    return bd.checked === true
                },
                selected: function (bd) {
                    bd.parentNode.selectedIndex;
                    return bd.selected === true
                },
                parent: function (bd) {
                    return !!bd.firstChild
                },
                empty: function (bd) {
                    return !bd.firstChild
                },
                has: function (bf, be, bd) {
                    return !!aX(bd[3], bf).length
                },
                header: function (bd) {
                    return /h\d/i.test(bd.nodeName)
                },
                text: function (bd) {
                    return "text" === bd.type
                },
                radio: function (bd) {
                    return "radio" === bd.type
                },
                checkbox: function (bd) {
                    return "checkbox" === bd.type
                },
                file: function (bd) {
                    return "file" === bd.type
                },
                password: function (bd) {
                    return "password" === bd.type
                },
                submit: function (bd) {
                    return "submit" === bd.type
                },
                image: function (bd) {
                    return "image" === bd.type
                },
                reset: function (bd) {
                    return "reset" === bd.type
                },
                button: function (bd) {
                    return "button" === bd.type || bd.nodeName.toLowerCase() === "button"
                },
                input: function (bd) {
                    return /input|select|textarea|button/i.test(bd.nodeName)
                }
            },
            setFilters: {
                first: function (be, bd) {
                    return bd === 0
                },
                last: function (bf, be, bd, bg) {
                    return be === bg.length - 1
                },
                even: function (be, bd) {
                    return bd % 2 === 0
                },
                odd: function (be, bd) {
                    return bd % 2 === 1
                },
                lt: function (bf, be, bd) {
                    return be < bd[3] - 0
                },
                gt: function (bf, be, bd) {
                    return be > bd[3] - 0
                },
                nth: function (bf, be, bd) {
                    return bd[3] - 0 === be
                },
                eq: function (bf, be, bd) {
                    return bd[3] - 0 === be
                }
            },
            filter: {
                PSEUDO: function (bj, bf, bg, bk) {
                    var be = bf[1],
                        bh = a3.filters[be];
                    if (bh) {
                        return bh(bj, bg, bf, bk)
                    } else {
                        if (be === "contains") {
                            return (bj.textContent || bj.innerText || aW([bj]) || "").indexOf(bf[3]) >= 0
                        } else {
                            if (be === "not") {
                                var bi = bf[3];
                                for (var bg = 0, bd = bi.length; bg < bd; bg++) {
                                    if (bi[bg] === bj) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                aX.error("Syntax error, unrecognized expression: " + be)
                            }
                        }
                    }
                },
                CHILD: function (bd, bg) {
                    var bj = bg[1],
                        be = bd;
                    switch (bj) {
                    case "only":
                    case "first":
                        while ((be = be.previousSibling)) {
                            if (be.nodeType === 1) {
                                return false
                            }
                        }
                        if (bj === "first") {
                            return true
                        }
                        be = bd;
                    case "last":
                        while ((be = be.nextSibling)) {
                            if (be.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        var bf = bg[2],
                            bm = bg[3];
                        if (bf === 1 && bm === 0) {
                            return true
                        }
                        var bi = bg[0],
                            bl = bd.parentNode;
                        if (bl && (bl.sizcache !== bi || !bd.nodeIndex)) {
                            var bh = 0;
                            for (be = bl.firstChild; be; be = be.nextSibling) {
                                if (be.nodeType === 1) {
                                    be.nodeIndex = ++bh
                                }
                            }
                            bl.sizcache = bi
                        }
                        var bk = bd.nodeIndex - bm;
                        if (bf === 0) {
                            return bk === 0
                        } else {
                            return (bk % bf === 0 && bk / bf >= 0)
                        }
                    }
                },
                ID: function (be, bd) {
                    return be.nodeType === 1 && be.getAttribute("id") === bd
                },
                TAG: function (be, bd) {
                    return (bd === "*" && be.nodeType === 1) || be.nodeName.toLowerCase() === bd
                },
                CLASS: function (be, bd) {
                    return (" " + (be.className || be.getAttribute("class")) + " ").indexOf(bd) > -1
                },
                ATTR: function (bi, bg) {
                    var bf = bg[1],
                        bd = a3.attrHandle[bf] ? a3.attrHandle[bf](bi) : bi[bf] != null ? bi[bf] : bi.getAttribute(bf),
                        bj = bd + "",
                        bh = bg[2],
                        be = bg[4];
                    return bd == null ? bh === "!=" : bh === "=" ? bj === be : bh === "*=" ? bj.indexOf(be) >= 0 : bh === "~=" ? (" " + bj + " ").indexOf(be) >= 0 : !be ? bj && bd !== false : bh === "!=" ? bj !== be : bh === "^=" ? bj.indexOf(be) === 0 : bh === "$=" ? bj.substr(bj.length - be.length) === be : bh === "|=" ? bj === be || bj.substr(0, be.length + 1) === be + "-" : false
                },
                POS: function (bh, be, bf, bi) {
                    var bd = be[2],
                        bg = a3.setFilters[bd];
                    if (bg) {
                        return bg(bh, bf, be, bi)
                    }
                }
            }
        };
        var a2 = a3.match.POS;
        for (var aZ in a3.match) {
            a3.match[aZ] = new RegExp(a3.match[aZ].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            a3.leftMatch[aZ] = new RegExp(/(^(?:.|\r|\n)*?)/.source + a3.match[aZ].source.replace(/\\(\d+)/g, function (be, bd) {
                return "\\" + (bd - 0 + 1)
            }))
        }
        var a5 = function (be, bd) {
                be = Array.prototype.slice.call(be, 0);
                if (bd) {
                    bd.push.apply(bd, be);
                    return bd
                }
                return be
            };
        try {
            Array.prototype.slice.call(ab.documentElement.childNodes, 0)
        } catch (bc) {
            a5 = function (bh, bg) {
                var be = bg || [];
                if (a9.call(bh) === "[object Array]") {
                    Array.prototype.push.apply(be, bh)
                } else {
                    if (typeof bh.length === "number") {
                        for (var bf = 0, bd = bh.length; bf < bd; bf++) {
                            be.push(bh[bf])
                        }
                    } else {
                        for (var bf = 0; bh[bf]; bf++) {
                            be.push(bh[bf])
                        }
                    }
                }
                return be
            }
        }
        var a8;
        if (ab.documentElement.compareDocumentPosition) {
            a8 = function (be, bd) {
                if (!be.compareDocumentPosition || !bd.compareDocumentPosition) {
                    if (be == bd) {
                        a1 = true
                    }
                    return be.compareDocumentPosition ? -1 : 1
                }
                var bf = be.compareDocumentPosition(bd) & 4 ? -1 : be === bd ? 0 : 1;
                if (bf === 0) {
                    a1 = true
                }
                return bf
            }
        } else {
            if ("sourceIndex" in ab.documentElement) {
                a8 = function (be, bd) {
                    if (!be.sourceIndex || !bd.sourceIndex) {
                        if (be == bd) {
                            a1 = true
                        }
                        return be.sourceIndex ? -1 : 1
                    }
                    var bf = be.sourceIndex - bd.sourceIndex;
                    if (bf === 0) {
                        a1 = true
                    }
                    return bf
                }
            } else {
                if (ab.createRange) {
                    a8 = function (bg, be) {
                        if (!bg.ownerDocument || !be.ownerDocument) {
                            if (bg == be) {
                                a1 = true
                            }
                            return bg.ownerDocument ? -1 : 1
                        }
                        var bf = bg.ownerDocument.createRange(),
                            bd = be.ownerDocument.createRange();
                        bf.setStart(bg, 0);
                        bf.setEnd(bg, 0);
                        bd.setStart(be, 0);
                        bd.setEnd(be, 0);
                        var bh = bf.compareBoundaryPoints(Range.START_TO_END, bd);
                        if (bh === 0) {
                            a1 = true
                        }
                        return bh
                    }
                }
            }
        }
        function aW(bd) {
            var be = "",
                bg;
            for (var bf = 0; bd[bf]; bf++) {
                bg = bd[bf];
                if (bg.nodeType === 3 || bg.nodeType === 4) {
                    be += bg.nodeValue
                } else {
                    if (bg.nodeType !== 8) {
                        be += aW(bg.childNodes)
                    }
                }
            }
            return be
        }(function () {
            var be = ab.createElement("div"),
                bf = "script" + (new Date).getTime();
            be.innerHTML = "<a name='" + bf + "'/>";
            var bd = ab.documentElement;
            bd.insertBefore(be, bd.firstChild);
            if (ab.getElementById(bf)) {
                a3.find.ID = function (bh, bi, bj) {
                    if (typeof bi.getElementById !== "undefined" && !bj) {
                        var bg = bi.getElementById(bh[1]);
                        return bg ? bg.id === bh[1] || typeof bg.getAttributeNode !== "undefined" && bg.getAttributeNode("id").nodeValue === bh[1] ? [bg] : C : []
                    }
                };
                a3.filter.ID = function (bi, bg) {
                    var bh = typeof bi.getAttributeNode !== "undefined" && bi.getAttributeNode("id");
                    return bi.nodeType === 1 && bh && bh.nodeValue === bg
                }
            }
            bd.removeChild(be);
            bd = be = null
        })();
        (function () {
            var bd = ab.createElement("div");
            bd.appendChild(ab.createComment(""));
            if (bd.getElementsByTagName("*").length > 0) {
                a3.find.TAG = function (be, bi) {
                    var bh = bi.getElementsByTagName(be[1]);
                    if (be[1] === "*") {
                        var bg = [];
                        for (var bf = 0; bh[bf]; bf++) {
                            if (bh[bf].nodeType === 1) {
                                bg.push(bh[bf])
                            }
                        }
                        bh = bg
                    }
                    return bh
                }
            }
            bd.innerHTML = "<a href='#'></a>";
            if (bd.firstChild && typeof bd.firstChild.getAttribute !== "undefined" && bd.firstChild.getAttribute("href") !== "#") {
                a3.attrHandle.href = function (be) {
                    return be.getAttribute("href", 2)
                }
            }
            bd = null
        })();
        if (ab.querySelectorAll) {
            (function () {
                var bd = aX,
                    bf = ab.createElement("div");
                bf.innerHTML = "<p class='TEST'></p>";
                if (bf.querySelectorAll && bf.querySelectorAll(".TEST").length === 0) {
                    return
                }
                aX = function (bj, bi, bg, bh) {
                    bi = bi || ab;
                    if (!bh && bi.nodeType === 9 && !aY(bi)) {
                        try {
                            return a5(bi.querySelectorAll(bj), bg)
                        } catch (bk) {}
                    }
                    return bd(bj, bi, bg, bh)
                };
                for (var be in bd) {
                    aX[be] = bd[be]
                }
                bf = null
            })()
        }(function () {
            var bd = ab.createElement("div");
            bd.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!bd.getElementsByClassName || bd.getElementsByClassName("e").length === 0) {
                return
            }
            bd.lastChild.className = "e";
            if (bd.getElementsByClassName("e").length === 1) {
                return
            }
            a3.order.splice(1, 0, "CLASS");
            a3.find.CLASS = function (be, bf, bg) {
                if (typeof bf.getElementsByClassName !== "undefined" && !bg) {
                    return bf.getElementsByClassName(be[1])
                }
            };
            bd = null
        })();

        function aV(be, bj, bi, bm, bk, bl) {
            for (var bg = 0, bf = bm.length; bg < bf; bg++) {
                var bd = bm[bg];
                if (bd) {
                    bd = bd[be];
                    var bh = false;
                    while (bd) {
                        if (bd.sizcache === bi) {
                            bh = bm[bd.sizset];
                            break
                        }
                        if (bd.nodeType === 1 && !bl) {
                            bd.sizcache = bi;
                            bd.sizset = bg
                        }
                        if (bd.nodeName.toLowerCase() === bj) {
                            bh = bd;
                            break
                        }
                        bd = bd[be]
                    }
                    bm[bg] = bh
                }
            }
        }
        function bb(be, bj, bi, bm, bk, bl) {
            for (var bg = 0, bf = bm.length; bg < bf; bg++) {
                var bd = bm[bg];
                if (bd) {
                    bd = bd[be];
                    var bh = false;
                    while (bd) {
                        if (bd.sizcache === bi) {
                            bh = bm[bd.sizset];
                            break
                        }
                        if (bd.nodeType === 1) {
                            if (!bl) {
                                bd.sizcache = bi;
                                bd.sizset = bg
                            }
                            if (typeof bj !== "string") {
                                if (bd === bj) {
                                    bh = true;
                                    break
                                }
                            } else {
                                if (aX.filter(bj, [bd]).length > 0) {
                                    bh = bd;
                                    break
                                }
                            }
                        }
                        bd = bd[be]
                    }
                    bm[bg] = bh
                }
            }
        }
        var a4 = ab.compareDocumentPosition ?
        function (be, bd) {
            return be.compareDocumentPosition(bd) & 16
        } : function (be, bd) {
            return be !== bd && (be.contains ? be.contains(bd) : true)
        };
        var aY = function (bd) {
                var be = (bd ? bd.ownerDocument || bd : 0).documentElement;
                return be ? be.nodeName !== "HTML" : false
            };
        var ba = function (bd, bk) {
                var bg = [],
                    bh = "",
                    bi, bf = bk.nodeType ? [bk] : bk;
                while ((bi = a3.match.PSEUDO.exec(bd))) {
                    bh += bi[0];
                    bd = bd.replace(a3.match.PSEUDO, "")
                }
                bd = a3.relative[bd] ? bd + "*" : bd;
                for (var bj = 0, be = bf.length; bj < be; bj++) {
                    aX(bd, bf[bj], bg)
                }
                return aX.filter(bh, bg)
            };
        a.find = aX;
        a.expr = aX.selectors;
        a.expr[":"] = a.expr.filters;
        a.unique = aX.uniqueSort;
        a.getText = aW;
        a.isXMLDoc = aY;
        a.contains = a4;
        return;
        aJ.Sizzle = aX
    })();
    var N = /Until$/,
        Y = /^(?:parents|prevUntil|prevAll)/,
        aI = /,/,
        E = Array.prototype.slice;
    var ah = function (aY, aX, aV) {
            if (a.isFunction(aX)) {
                return a.grep(aY, function (a0, aZ) {
                    return !!aX.call(a0, aZ, a0) === aV
                })
            } else {
                if (aX.nodeType) {
                    return a.grep(aY, function (a0, aZ) {
                        return (a0 === aX) === aV
                    })
                } else {
                    if (typeof aX === "string") {
                        var aW = a.grep(aY, function (aZ) {
                            return aZ.nodeType === 1
                        });
                        if (aT.test(aX)) {
                            return a.filter(aX, aW, !aV)
                        } else {
                            aX = a.filter(aX, aW)
                        }
                    }
                }
            }
            return a.grep(aY, function (a0, aZ) {
                return (a.inArray(a0, aX) >= 0) === aV
            })
        };
    a.fn.extend({
        find: function (aV) {
            var aX = this.pushStack("", "find", aV),
                a0 = 0;
            for (var aY = 0, aW = this.length; aY < aW; aY++) {
                a0 = aX.length;
                a.find(aV, this[aY], aX);
                if (aY > 0) {
                    for (var a1 = a0; a1 < aX.length; a1++) {
                        for (var aZ = 0; aZ < a0; aZ++) {
                            if (aX[aZ] === aX[a1]) {
                                aX.splice(a1--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return aX
        },
        has: function (aW) {
            var aV = a(aW);
            return this.filter(function () {
                for (var aY = 0, aX = aV.length; aY < aX; aY++) {
                    if (a.contains(this, aV[aY])) {
                        return true
                    }
                }
            })
        },
        not: function (aV) {
            return this.pushStack(ah(this, aV, false), "not", aV)
        },
        filter: function (aV) {
            return this.pushStack(ah(this, aV, true), "filter", aV)
        },
        is: function (aV) {
            return !!aV && a.filter(aV, this).length > 0
        },
        closest: function (a4, aV) {
            if (a.isArray(a4)) {
                var a1 = [],
                    a3 = this[0],
                    a0, aZ = {},
                    aX;
                if (a3 && a4.length) {
                    for (var aY = 0, aW = a4.length; aY < aW; aY++) {
                        aX = a4[aY];
                        if (!aZ[aX]) {
                            aZ[aX] = a.expr.match.POS.test(aX) ? a(aX, aV || this.context) : aX
                        }
                    }
                    while (a3 && a3.ownerDocument && a3 !== aV) {
                        for (aX in aZ) {
                            a0 = aZ[aX];
                            if (a0.jquery ? a0.index(a3) > -1 : a(a3).is(a0)) {
                                a1.push({
                                    selector: aX,
                                    elem: a3
                                });
                                delete aZ[aX]
                            }
                        }
                        a3 = a3.parentNode
                    }
                }
                return a1
            }
            var a2 = a.expr.match.POS.test(a4) ? a(a4, aV || this.context) : null;
            return this.map(function (a5, a6) {
                while (a6 && a6.ownerDocument && a6 !== aV) {
                    if (a2 ? a2.index(a6) > -1 : a(a6).is(a4)) {
                        return a6
                    }
                    a6 = a6.parentNode
                }
                return null
            })
        },
        index: function (aV) {
            if (!aV || typeof aV === "string") {
                return a.inArray(this[0], aV ? a(aV) : this.parent().children())
            }
            return a.inArray(aV.jquery ? aV[0] : aV, this)
        },
        add: function (aV, aW) {
            var aY = typeof aV === "string" ? a(aV, aW || this.context) : a.makeArray(aV),
                aX = a.merge(this.get(), aY);
            return this.pushStack(y(aY[0]) || y(aX[0]) ? aX : a.unique(aX))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });

    function y(aV) {
        return !aV || !aV.parentNode || aV.parentNode.nodeType === 11
    }
    a.each({
        parent: function (aW) {
            var aV = aW.parentNode;
            return aV && aV.nodeType !== 11 ? aV : null
        },
        parents: function (aV) {
            return a.dir(aV, "parentNode")
        },
        parentsUntil: function (aW, aV, aX) {
            return a.dir(aW, "parentNode", aX)
        },
        next: function (aV) {
            return a.nth(aV, 2, "nextSibling")
        },
        prev: function (aV) {
            return a.nth(aV, 2, "previousSibling")
        },
        nextAll: function (aV) {
            return a.dir(aV, "nextSibling")
        },
        prevAll: function (aV) {
            return a.dir(aV, "previousSibling")
        },
        nextUntil: function (aW, aV, aX) {
            return a.dir(aW, "nextSibling", aX)
        },
        prevUntil: function (aW, aV, aX) {
            return a.dir(aW, "previousSibling", aX)
        },
        siblings: function (aV) {
            return a.sibling(aV.parentNode.firstChild, aV)
        },
        children: function (aV) {
            return a.sibling(aV.firstChild)
        },
        contents: function (aV) {
            return a.nodeName(aV, "iframe") ? aV.contentDocument || aV.contentWindow.document : a.makeArray(aV.childNodes)
        }
    }, function (aV, aW) {
        a.fn[aV] = function (aZ, aX) {
            var aY = a.map(this, aW, aZ);
            if (!N.test(aV)) {
                aX = aZ
            }
            if (aX && typeof aX === "string") {
                aY = a.filter(aX, aY)
            }
            aY = this.length > 1 ? a.unique(aY) : aY;
            if ((this.length > 1 || aI.test(aX)) && Y.test(aV)) {
                aY = aY.reverse()
            }
            return this.pushStack(aY, aV, E.call(arguments).join(","))
        }
    });
    a.extend({
        filter: function (aX, aV, aW) {
            if (aW) {
                aX = ":not(" + aX + ")"
            }
            return a.find.matches(aX, aV)
        },
        dir: function (aX, aW, aZ) {
            var aV = [],
                aY = aX[aW];
            while (aY && aY.nodeType !== 9 && (aZ === C || aY.nodeType !== 1 || !a(aY).is(aZ))) {
                if (aY.nodeType === 1) {
                    aV.push(aY)
                }
                aY = aY[aW]
            }
            return aV
        },
        nth: function (aZ, aV, aX, aY) {
            aV = aV || 1;
            var aW = 0;
            for (; aZ; aZ = aZ[aX]) {
                if (aZ.nodeType === 1 && ++aW === aV) {
                    break
                }
            }
            return aZ
        },
        sibling: function (aX, aW) {
            var aV = [];
            for (; aX; aX = aX.nextSibling) {
                if (aX.nodeType === 1 && aX !== aW) {
                    aV.push(aX)
                }
            }
            return aV
        }
    });
    var T = / jQuery\d+="(?:\d+|null)"/g,
        Z = /^\s+/,
        G = /(<([\w:]+)[^>]*?)\/>/g,
        ak = /^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,
        c = /<([\w:]+)/,
        u = /<tbody/i,
        K = /<|&\w+;/,
        m = /checked\s*(?:[^=]|=\s*.checked.)/i,
        q = function (aW, aX, aV) {
            return ak.test(aV) ? aW : aX + "></" + aV + ">"
        },
        ac = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    ac.optgroup = ac.option;
    ac.tbody = ac.tfoot = ac.colgroup = ac.caption = ac.thead;
    ac.th = ac.td;
    if (!a.support.htmlSerialize) {
        ac._default = [1, "div<div>", "</div>"]
    }
    a.fn.extend({
        text: function (aV) {
            if (a.isFunction(aV)) {
                return this.each(function (aX) {
                    var aW = a(this);
                    aW.text(aV.call(this, aX, aW.text()))
                })
            }
            if (typeof aV !== "object" && aV !== C) {
                return this.empty().append((this[0] && this[0].ownerDocument || ab).createTextNode(aV))
            }
            return a.getText(this)
        },
        wrapAll: function (aV) {
            if (a.isFunction(aV)) {
                return this.each(function (aX) {
                    a(this).wrapAll(aV.call(this, aX))
                })
            }
            if (this[0]) {
                var aW = a(aV, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    aW.insertBefore(this[0])
                }
                aW.map(function () {
                    var aX = this;
                    while (aX.firstChild && aX.firstChild.nodeType === 1) {
                        aX = aX.firstChild
                    }
                    return aX
                }).append(this)
            }
            return this
        },
        wrapInner: function (aV) {
            if (a.isFunction(aV)) {
                return this.each(function (aW) {
                    a(this).wrapInner(aV.call(this, aW))
                })
            }
            return this.each(function () {
                var aW = a(this),
                    aX = aW.contents();
                if (aX.length) {
                    aX.wrapAll(aV)
                } else {
                    aW.append(aV)
                }
            })
        },
        wrap: function (aV) {
            return this.each(function () {
                a(this).wrapAll(aV)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                if (!a.nodeName(this, "body")) {
                    a(this).replaceWith(this.childNodes)
                }
            }).end()
        },
        append: function () {
            return this.domManip(arguments, true, function (aV) {
                if (this.nodeType === 1) {
                    this.appendChild(aV)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (aV) {
                if (this.nodeType === 1) {
                    this.insertBefore(aV, this.firstChild)
                }
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (aW) {
                    this.parentNode.insertBefore(aW, this)
                })
            } else {
                if (arguments.length) {
                    var aV = a(arguments[0]);
                    aV.push.apply(aV, this.toArray());
                    return this.pushStack(aV, "before", arguments)
                }
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (aW) {
                    this.parentNode.insertBefore(aW, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var aV = this.pushStack(this, "after", arguments);
                    aV.push.apply(aV, a(arguments[0]).toArray());
                    return aV
                }
            }
        },
        clone: function (aW) {
            var aV = this.map(function () {
                if (!a.support.noCloneEvent && !a.isXMLDoc(this)) {
                    var aY = this.outerHTML,
                        aX = this.ownerDocument;
                    if (!aY) {
                        var aZ = aX.createElement("div");
                        aZ.appendChild(this.cloneNode(true));
                        aY = aZ.innerHTML
                    }
                    return a.clean([aY.replace(T, "").replace(Z, "")], aX)[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (aW === true) {
                r(this, aV);
                r(this.find("*"), aV.find("*"))
            }
            return aV
        },
        html: function (aX) {
            if (aX === C) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(T, "") : null
            } else {
                if (typeof aX === "string" && !/<script/i.test(aX) && (a.support.leadingWhitespace || !Z.test(aX)) && !ac[(c.exec(aX) || ["", ""])[1].toLowerCase()]) {
                    aX = aX.replace(G, q);
                    try {
                        for (var aW = 0, aV = this.length; aW < aV; aW++) {
                            if (this[aW].nodeType === 1) {
                                a.cleanData(this[aW].getElementsByTagName("*"));
                                this[aW].innerHTML = aX
                            }
                        }
                    } catch (aY) {
                        this.empty().append(aX)
                    }
                } else {
                    if (a.isFunction(aX)) {
                        this.each(function (a1) {
                            var a0 = a(this),
                                aZ = a0.html();
                            a0.empty().append(function () {
                                return aX.call(this, a1, aZ)
                            })
                        })
                    } else {
                        this.empty().append(aX)
                    }
                }
            }
            return this
        },
        replaceWith: function (aV) {
            if (this[0] && this[0].parentNode) {
                if (!a.isFunction(aV)) {
                    aV = a(aV).detach()
                } else {
                    return this.each(function (aY) {
                        var aX = a(this),
                            aW = aX.html();
                        aX.replaceWith(aV.call(this, aY, aW))
                    })
                }
                return this.each(function () {
                    var aX = this.nextSibling,
                        aW = this.parentNode;
                    a(this).remove();
                    if (aX) {
                        a(aX).before(aV)
                    } else {
                        a(aW).append(aV)
                    }
                })
            } else {
                return this.pushStack(a(a.isFunction(aV) ? aV() : aV), "replaceWith", aV)
            }
        },
        detach: function (aV) {
            return this.remove(aV, true)
        },
        domManip: function (a0, a4, a3) {
            var aX, aZ, a2 = a0[0],
                aW = [];
            if (!a.support.checkClone && arguments.length === 3 && typeof a2 === "string" && m.test(a2)) {
                return this.each(function () {
                    a(this).domManip(a0, a4, a3, true)
                })
            }
            if (a.isFunction(a2)) {
                return this.each(function (a6) {
                    var a5 = a(this);
                    a0[0] = a2.call(this, a6, a4 ? a5.html() : C);
                    a5.domManip(a0, a4, a3)
                })
            }
            if (this[0]) {
                if (a0[0] && a0[0].parentNode && a0[0].parentNode.nodeType === 11) {
                    aX = {
                        fragment: a0[0].parentNode
                    }
                } else {
                    aX = I(a0, this, aW)
                }
                aZ = aX.fragment.firstChild;
                if (aZ) {
                    a4 = a4 && a.nodeName(aZ, "tr");
                    for (var aY = 0, aV = this.length; aY < aV; aY++) {
                        a3.call(a4 ? a1(this[aY], aZ) : this[aY], aX.cacheable || this.length > 1 || aY > 0 ? aX.fragment.cloneNode(true) : aX.fragment)
                    }
                }
                if (aW) {
                    a.each(aW, aS)
                }
            }
            return this;

            function a1(a5, a6) {
                return a.nodeName(a5, "table") ? (a5.getElementsByTagName("tbody")[0] || a5.appendChild(a5.ownerDocument.createElement("tbody"))) : a5
            }
        }
    });

    function r(aX, aV) {
        var aW = 0;
        aV.each(function () {
            if (this.nodeName !== (aX[aW] && aX[aW].nodeName)) {
                return
            }
            var a2 = a.data(aX[aW++]),
                a1 = a.data(this, a2),
                aY = a2 && a2.events;
            if (aY) {
                delete a1.handle;
                a1.events = {};
                for (var a0 in aY) {
                    for (var aZ in aY[a0]) {
                        a.event.add(this, a0, aY[a0][aZ], aY[a0][aZ].data)
                    }
                }
            }
        })
    }
    function I(a0, aY, aW) {
        var aZ, aV, aX, a1;
        if (a0.length === 1 && typeof a0[0] === "string" && a0[0].length < 512 && a0[0].indexOf("<option") < 0 && (a.support.checkClone || !m.test(a0[0]))) {
            aV = true;
            aX = a.fragments[a0[0]];
            if (aX) {
                if (aX !== 1) {
                    aZ = aX
                }
            }
        }
        if (!aZ) {
            a1 = (aY && aY[0] ? aY[0].ownerDocument || aY[0] : ab);
            aZ = a1.createDocumentFragment();
            a.clean(a0, a1, aZ, aW)
        }
        if (aV) {
            a.fragments[a0[0]] = aX ? aZ : 1
        }
        return {
            fragment: aZ,
            cacheable: aV
        }
    }
    a.fragments = {};
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (aV, aW) {
        a.fn[aV] = function (aX) {
            var a0 = [],
                a2 = a(aX);
            for (var a1 = 0, aY = a2.length; a1 < aY; a1++) {
                var aZ = (a1 > 0 ? this.clone(true) : this).get();
                a.fn[aW].apply(a(a2[a1]), aZ);
                a0 = a0.concat(aZ)
            }
            return this.pushStack(a0, aV, a2.selector)
        }
    });
    a.each({
        remove: function (aV, aW) {
            if (!aV || a.filter(aV, [this]).length) {
                if (!aW && this.nodeType === 1) {
                    a.cleanData(this.getElementsByTagName("*"));
                    a.cleanData([this])
                }
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
            }
        },
        empty: function () {
            if (this.nodeType === 1) {
                a.cleanData(this.getElementsByTagName("*"))
            }
            while (this.firstChild) {
                this.removeChild(this.firstChild)
            }
        }
    }, function (aV, aW) {
        a.fn[aV] = function () {
            return this.each(aW, arguments)
        }
    });
    a.extend({
        clean: function (aW, a0, aY, aV) {
            a0 = a0 || ab;
            if (typeof a0.createElement === "undefined") {
                a0 = a0.ownerDocument || a0[0] && a0[0].ownerDocument || ab
            }
            var aX = [];
            a.each(aW, function (a7, a4) {
                if (typeof a4 === "number") {
                    a4 += ""
                }
                if (!a4) {
                    return
                }
                if (typeof a4 === "string" && !K.test(a4)) {
                    a4 = a0.createTextNode(a4)
                } else {
                    if (typeof a4 === "string") {
                        a4 = a4.replace(G, q);
                        var a9 = (c.exec(a4) || ["", ""])[1].toLowerCase(),
                            a3 = ac[a9] || ac._default,
                            a6 = a3[0],
                            a1 = a0.createElement("div");
                        a1.innerHTML = a3[1] + a4 + a3[2];
                        while (a6--) {
                            a1 = a1.lastChild
                        }
                        if (!a.support.tbody) {
                            var a2 = u.test(a4),
                                a8 = a9 === "table" && !a2 ? a1.firstChild && a1.firstChild.childNodes : a3[1] === "<table>" && !a2 ? a1.childNodes : [];
                            for (var a5 = a8.length - 1; a5 >= 0; --a5) {
                                if (a.nodeName(a8[a5], "tbody") && !a8[a5].childNodes.length) {
                                    a8[a5].parentNode.removeChild(a8[a5])
                                }
                            }
                        }
                        if (!a.support.leadingWhitespace && Z.test(a4)) {
                            a1.insertBefore(a0.createTextNode(Z.exec(a4)[0]), a1.firstChild)
                        }
                        a4 = a.makeArray(a1.childNodes)
                    }
                }
                if (a4.nodeType) {
                    aX.push(a4)
                } else {
                    aX = a.merge(aX, a4)
                }
            });
            if (aY) {
                for (var aZ = 0; aX[aZ]; aZ++) {
                    if (aV && a.nodeName(aX[aZ], "script") && (!aX[aZ].type || aX[aZ].type.toLowerCase() === "text/javascript")) {
                        aV.push(aX[aZ].parentNode ? aX[aZ].parentNode.removeChild(aX[aZ]) : aX[aZ])
                    } else {
                        if (aX[aZ].nodeType === 1) {
                            aX.splice.apply(aX, [aZ + 1, 0].concat(a.makeArray(aX[aZ].getElementsByTagName("script"))))
                        }
                        aY.appendChild(aX[aZ])
                    }
                }
            }
            return aX
        },
        cleanData: function (aV) {
            for (var aW = 0, aX, aY;
            (aX = aV[aW]) != null; aW++) {
                a.event.remove(aX);
                a.removeData(aX)
            }
        }
    });
    var aq = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        U = /alpha\([^)]*\)/,
        aa = /opacity=([^)]*)/,
        ag = /float/i,
        ax = /-([a-z])/ig,
        w = /([A-Z])/g,
        aL = /^-?\d+(?:px)?$/i,
        aR = /^-?\d/,
        aH = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        W = ["Left", "Right"],
        aB = ["Top", "Bottom"],
        aj = ab.defaultView && ab.defaultView.getComputedStyle,
        aK = a.support.cssFloat ? "cssFloat" : "styleFloat",
        l = function (aV, aW) {
            return aW.toUpperCase()
        };
    a.fn.css = function (aV, aW) {
        return am(this, aV, aW, true, function (aY, aX, aZ) {
            if (aZ === C) {
                return a.curCSS(aY, aX)
            }
            if (typeof aZ === "number" && !aq.test(aX)) {
                aZ += "px"
            }
            a.style(aY, aX, aZ)
        })
    };
    a.extend({
        style: function (aZ, aW, a0) {
            if (!aZ || aZ.nodeType === 3 || aZ.nodeType === 8) {
                return C
            }
            if ((aW === "width" || aW === "height") && parseFloat(a0) < 0) {
                a0 = C
            }
            var aY = aZ.style || aZ,
                a1 = a0 !== C;
            if (!a.support.opacity && aW === "opacity") {
                if (a1) {
                    aY.zoom = 1;
                    var aV = parseInt(a0, 10) + "" === "NaN" ? "" : "alpha(opacity=" + a0 * 100 + ")";
                    var aX = aY.filter || a.curCSS(aZ, "filter") || "";
                    aY.filter = U.test(aX) ? aX.replace(U, aV) : aV
                }
                return aY.filter && aY.filter.indexOf("opacity=") >= 0 ? (parseFloat(aa.exec(aY.filter)[1]) / 100) + "" : ""
            }
            if (ag.test(aW)) {
                aW = aK
            }
            aW = aW.replace(ax, l);
            if (a1) {
                aY[aW] = a0
            }
            return aY[aW]
        },
        css: function (aY, aW, a0, aV) {
            if (aW === "width" || aW === "height") {
                var a2, aX = aH,
                    a1 = aW === "width" ? W : aB;

                function aZ() {
                    a2 = aW === "width" ? aY.offsetWidth : aY.offsetHeight;
                    if (aV === "border") {
                        return
                    }
                    a.each(a1, function () {
                        if (!aV) {
                            a2 -= parseFloat(a.curCSS(aY, "padding" + this, true)) || 0
                        }
                        if (aV === "margin") {
                            a2 += parseFloat(a.curCSS(aY, "margin" + this, true)) || 0
                        } else {
                            a2 -= parseFloat(a.curCSS(aY, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                if (aY.offsetWidth !== 0) {
                    aZ()
                } else {
                    a.swap(aY, aX, aZ)
                }
                return Math.max(0, Math.round(a2))
            }
            return a.curCSS(aY, aW, a0)
        },
        curCSS: function (a1, aW, aX) {
            var a4, aV = a1.style,
                aY;
            if (!a.support.opacity && aW === "opacity" && a1.currentStyle) {
                a4 = aa.test(a1.currentStyle.filter || "") ? (parseFloat(RegExp.$1) / 100) + "" : "";
                return a4 === "" ? "1" : a4
            }
            if (ag.test(aW)) {
                aW = aK
            }
            if (!aX && aV && aV[aW]) {
                a4 = aV[aW]
            } else {
                if (aj) {
                    if (ag.test(aW)) {
                        aW = "float"
                    }
                    aW = aW.replace(w, "-$1").toLowerCase();
                    var a3 = a1.ownerDocument.defaultView;
                    if (!a3) {
                        return null
                    }
                    var a5 = a3.getComputedStyle(a1, null);
                    if (a5) {
                        a4 = a5.getPropertyValue(aW)
                    }
                    if (aW === "opacity" && a4 === "") {
                        a4 = "1"
                    }
                } else {
                    if (a1.currentStyle) {
                        var a0 = aW.replace(ax, l);
                        a4 = a1.currentStyle[aW] || a1.currentStyle[a0];
                        if (!aL.test(a4) && aR.test(a4)) {
                            var aZ = aV.left,
                                a2 = a1.runtimeStyle.left;
                            a1.runtimeStyle.left = a1.currentStyle.left;
                            aV.left = a0 === "fontSize" ? "1em" : (a4 || 0);
                            a4 = aV.pixelLeft + "px";
                            aV.left = aZ;
                            a1.runtimeStyle.left = a2
                        }
                    }
                }
            }
            return a4
        },
        swap: function (aY, aX, aZ) {
            var aV = {};
            for (var aW in aX) {
                aV[aW] = aY.style[aW];
                aY.style[aW] = aX[aW]
            }
            aZ.call(aY);
            for (var aW in aX) {
                aY.style[aW] = aV[aW]
            }
        }
    });
    if (a.expr && a.expr.filters) {
        a.expr.filters.hidden = function (aY) {
            var aW = aY.offsetWidth,
                aV = aY.offsetHeight,
                aX = aY.nodeName.toLowerCase() === "tr";
            return aW === 0 && aV === 0 && !aX ? true : aW > 0 && aV > 0 && !aX ? false : a.curCSS(aY, "display") === "none"
        };
        a.expr.filters.visible = function (aV) {
            return !a.expr.filters.hidden(aV)
        }
    }
    var af = aM(),
        aG = /<script(.|\s)*?\/script>/gi,
        p = /select|textarea/i,
        az = /color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,
        s = /=\?(&|$)/,
        D = /\?/,
        aU = /(\?|&)_=.*?(&|$)/,
        B = /^(\w+:)?\/\/([^\/?#]+)/,
        h = /%20/g;
    a.fn.extend({
        _load: a.fn.load,
        load: function (aX, a0, a1) {
            if (typeof aX !== "string") {
                return this._load(aX)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var aZ = aX.indexOf(" ");
            if (aZ >= 0) {
                var aV = aX.slice(aZ, aX.length);
                aX = aX.slice(0, aZ)
            }
            var aY = "GET";
            if (a0) {
                if (a.isFunction(a0)) {
                    a1 = a0;
                    a0 = null
                } else {
                    if (typeof a0 === "object") {
                        a0 = a.param(a0, a.ajaxSettings.traditional);
                        aY = "POST"
                    }
                }
            }
            var aW = this;
            a.ajax({
                url: aX,
                type: aY,
                dataType: "html",
                data: a0,
                complete: function (a3, a2) {
                    if (a2 === "success" || a2 === "notmodified") {
                        aW.html(aV ? a("<div />").append(a3.responseText.replace(aG, "")).find(aV) : a3.responseText)
                    }
                    if (a1) {
                        aW.each(a1, [a3.responseText, a2, a3])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return a.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? a.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || p.test(this.nodeName) || az.test(this.type))
            }).map(function (aV, aW) {
                var aX = a(this).val();
                return aX == null ? null : a.isArray(aX) ? a.map(aX, function (aZ, aY) {
                    return {
                        name: aW.name,
                        value: aZ
                    }
                }) : {
                    name: aW.name,
                    value: aX
                }
            }).get()
        }
    });
    a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (aV, aW) {
        a.fn[aW] = function (aX) {
            return this.bind(aW, aX)
        }
    });
    a.extend({
        get: function (aV, aX, aY, aW) {
            if (a.isFunction(aX)) {
                aW = aW || aY;
                aY = aX;
                aX = null
            }
            return a.ajax({
                type: "GET",
                url: aV,
                data: aX,
                success: aY,
                dataType: aW
            })
        },
        getScript: function (aV, aW) {
            return a.get(aV, null, aW, "script")
        },
        getJSON: function (aV, aW, aX) {
            return a.get(aV, aW, aX, "json")
        },
        post: function (aV, aX, aY, aW) {
            if (a.isFunction(aX)) {
                aW = aW || aY;
                aY = aX;
                aX = {}
            }
            return a.ajax({
                type: "POST",
                url: aV,
                data: aX,
                success: aY,
                dataType: aW
            })
        },
        ajaxSetup: function (aV) {
            a.extend(a.ajaxSettings, aV)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: aJ.XMLHttpRequest && (aJ.location.protocol !== "file:" || !aJ.ActiveXObject) ?
            function () {
                return new aJ.XMLHttpRequest()
            } : function () {
                try {
                    return new aJ.ActiveXObject("Microsoft.XMLHTTP")
                } catch (aV) {}
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        etag: {},
        ajax: function (ba) {
            var a5 = a.extend(true, {}, a.ajaxSettings, ba);
            var bf, a9, be, bg = ba && ba.context || a5,
                aX = a5.type.toUpperCase();
            if (a5.data && a5.processData && typeof a5.data !== "string") {
                a5.data = a.param(a5.data, a5.traditional)
            }
            if (a5.dataType === "jsonp") {
                if (aX === "GET") {
                    if (!s.test(a5.url)) {
                        a5.url += (D.test(a5.url) ? "&" : "?") + (a5.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!a5.data || !s.test(a5.data)) {
                        a5.data = (a5.data ? a5.data + "&" : "") + (a5.jsonp || "callback") + "=?"
                    }
                }
                a5.dataType = "json"
            }
            if (a5.dataType === "json" && (a5.data && s.test(a5.data) || s.test(a5.url))) {
                bf = a5.jsonpCallback || ("jsonp" + af++);
                if (a5.data) {
                    a5.data = (a5.data + "").replace(s, "=" + bf + "$1")
                }
                a5.url = a5.url.replace(s, "=" + bf + "$1");
                a5.dataType = "script";
                aJ[bf] = aJ[bf] ||
                function (bh) {
                    be = bh;
                    a0();
                    a3();
                    aJ[bf] = C;
                    try {
                        delete aJ[bf]
                    } catch (bi) {}
                    if (aY) {
                        aY.removeChild(bc)
                    }
                }
            }
            if (a5.dataType === "script" && a5.cache === null) {
                a5.cache = false
            }
            if (a5.cache === false && aX === "GET") {
                var aV = aM();
                var bd = a5.url.replace(aU, "$1_=" + aV + "$2");
                a5.url = bd + ((bd === a5.url) ? (D.test(a5.url) ? "&" : "?") + "_=" + aV : "")
            }
            if (a5.data && aX === "GET") {
                a5.url += (D.test(a5.url) ? "&" : "?") + a5.data
            }
            if (a5.global && !a.active++) {
                a.event.trigger("ajaxStart")
            }
            var a8 = B.exec(a5.url),
                aZ = a8 && (a8[1] && a8[1] !== location.protocol || a8[2] !== location.host);
            if (a5.dataType === "script" && aX === "GET" && aZ) {
                var aY = ab.getElementsByTagName("head")[0] || ab.documentElement;
                var bc = ab.createElement("script");
                bc.src = a5.url;
                if (a5.scriptCharset) {
                    bc.charset = a5.scriptCharset
                }
                if (!bf) {
                    var a7 = false;
                    bc.onload = bc.onreadystatechange = function () {
                        if (!a7 && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                            a7 = true;
                            a0();
                            a3();
                            bc.onload = bc.onreadystatechange = null;
                            if (aY && bc.parentNode) {
                                aY.removeChild(bc)
                            }
                        }
                    }
                }
                aY.insertBefore(bc, aY.firstChild);
                return C
            }
            var a2 = false;
            var a1 = a5.xhr();
            if (!a1) {
                return
            }
            if (a5.username) {
                a1.open(aX, a5.url, a5.async, a5.username, a5.password)
            } else {
                a1.open(aX, a5.url, a5.async)
            }
            try {
                if (a5.data || ba && ba.contentType) {
                    a1.setRequestHeader("Content-Type", a5.contentType)
                }
                if (a5.ifModified) {
                    if (a.lastModified[a5.url]) {
                        a1.setRequestHeader("If-Modified-Since", a.lastModified[a5.url])
                    }
                    if (a.etag[a5.url]) {
                        a1.setRequestHeader("If-None-Match", a.etag[a5.url])
                    }
                }
                if (!aZ) {
                    a1.setRequestHeader("X-Requested-With", "XMLHttpRequest")
                }
                a1.setRequestHeader("Accept", a5.dataType && a5.accepts[a5.dataType] ? a5.accepts[a5.dataType] + ", */*" : a5.accepts._default)
            } catch (bb) {}
            if (a5.beforeSend && a5.beforeSend.call(bg, a1, a5) === false) {
                if (a5.global && !--a.active) {
                    a.event.trigger("ajaxStop")
                }
                a1.abort();
                return false
            }
            if (a5.global) {
                a6("ajaxSend", [a1, a5])
            }
            var a4 = a1.onreadystatechange = function (bh) {
                    if (!a1 || a1.readyState === 0 || bh === "abort") {
                        if (!a2) {
                            a3()
                        }
                        a2 = true;
                        if (a1) {
                            a1.onreadystatechange = a.noop
                        }
                    } else {
                        if (!a2 && a1 && (a1.readyState === 4 || bh === "timeout")) {
                            a2 = true;
                            a1.onreadystatechange = a.noop;
                            a9 = bh === "timeout" ? "timeout" : !a.httpSuccess(a1) ? "error" : a5.ifModified && a.httpNotModified(a1, a5.url) ? "notmodified" : "success";
                            var bj;
                            if (a9 === "success") {
                                try {
                                    be = a.httpData(a1, a5.dataType, a5)
                                } catch (bi) {
                                    a9 = "parsererror";
                                    bj = bi
                                }
                            }
                            if (a9 === "success" || a9 === "notmodified") {
                                if (!bf) {
                                    a0()
                                }
                            } else {
                                a.handleError(a5, a1, a9, bj)
                            }
                            a3();
                            if (bh === "timeout") {
                                a1.abort()
                            }
                            if (a5.async) {
                                a1 = null
                            }
                        }
                    }
                };
            try {
                var aW = a1.abort;
                a1.abort = function () {
                    if (a1) {
                        aW.call(a1)
                    }
                    a4("abort")
                }
            } catch (bb) {}
            if (a5.async && a5.timeout > 0) {
                setTimeout(function () {
                    if (a1 && !a2) {
                        a4("timeout")
                    }
                }, a5.timeout)
            }
            try {
                a1.send(aX === "POST" || aX === "PUT" || aX === "DELETE" ? a5.data : null)
            } catch (bb) {
                a.handleError(a5, a1, null, bb);
                a3()
            }
            if (!a5.async) {
                a4()
            }
            function a0() {
                if (a5.success) {
                    a5.success.call(bg, be, a9, a1)
                }
                if (a5.global) {
                    a6("ajaxSuccess", [a1, a5])
                }
            }
            function a3() {
                if (a5.complete) {
                    a5.complete.call(bg, a1, a9)
                }
                if (a5.global) {
                    a6("ajaxComplete", [a1, a5])
                }
                if (a5.global && !--a.active) {
                    a.event.trigger("ajaxStop")
                }
            }
            function a6(bi, bh) {
                (a5.context ? a(a5.context) : a.event).trigger(bi, bh)
            }
            return a1
        },
        handleError: function (aW, aY, aV, aX) {
            if (aW.error) {
                aW.error.call(aW.context || aW, aY, aV, aX)
            }
            if (aW.global) {
                (aW.context ? a(aW.context) : a.event).trigger("ajaxError", [aY, aW, aX])
            }
        },
        active: 0,
        httpSuccess: function (aW) {
            try {
                return !aW.status && location.protocol === "file:" || (aW.status >= 200 && aW.status < 300) || aW.status === 304 || aW.status === 1223 || aW.status === 0
            } catch (aV) {}
            return false
        },
        httpNotModified: function (aY, aV) {
            var aX = aY.getResponseHeader("Last-Modified"),
                aW = aY.getResponseHeader("Etag");
            if (aX) {
                a.lastModified[aV] = aX
            }
            if (aW) {
                a.etag[aV] = aW
            }
            return aY.status === 304 || aY.status === 0
        },
        httpData: function (a0, aY, aX) {
            var aW = a0.getResponseHeader("content-type") || "",
                aV = aY === "xml" || !aY && aW.indexOf("xml") >= 0,
                aZ = aV ? a0.responseXML : a0.responseText;
            if (aV && aZ.documentElement.nodeName === "parsererror") {
                a.error("parsererror")
            }
            if (aX && aX.dataFilter) {
                aZ = aX.dataFilter(aZ, aY)
            }
            if (typeof aZ === "string") {
                if (aY === "json" || !aY && aW.indexOf("json") >= 0) {
                    aZ = a.parseJSON(aZ)
                } else {
                    if (aY === "script" || !aY && aW.indexOf("javascript") >= 0) {
                        a.globalEval(aZ)
                    }
                }
            }
            return aZ
        },
        param: function (aV, aY) {
            var aW = [];
            if (aY === C) {
                aY = a.ajaxSettings.traditional
            }
            if (a.isArray(aV) || aV.jquery) {
                a.each(aV, function () {
                    a0(this.name, this.value)
                })
            } else {
                for (var aZ in aV) {
                    aX(aZ, aV[aZ])
                }
            }
            return aW.join("&").replace(h, "+");

            function aX(a1, a2) {
                if (a.isArray(a2)) {
                    a.each(a2, function (a4, a3) {
                        if (aY) {
                            a0(a1, a3)
                        } else {
                            aX(a1 + "[" + (typeof a3 === "object" || a.isArray(a3) ? a4 : "") + "]", a3)
                        }
                    })
                } else {
                    if (!aY && a2 != null && typeof a2 === "object") {
                        a.each(a2, function (a4, a3) {
                            aX(a1 + "[" + a4 + "]", a3)
                        })
                    } else {
                        a0(a1, a2)
                    }
                }
            }
            function a0(a1, a2) {
                a2 = a.isFunction(a2) ? a2() : a2;
                aW[aW.length] = encodeURIComponent(a1) + "=" + encodeURIComponent(a2)
            }
        }
    });
    var F = {},
        ae = /toggle|show|hide/,
        at = /^([+-]=)?([\d+-.]+)(.*)$/,
        aC, ai = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    a.fn.extend({
        show: function (aW, a4) {
            if (aW || aW === 0) {
                return this.animate(aA("show", 3), aW, a4)
            } else {
                for (var a1 = 0, aY = this.length; a1 < aY; a1++) {
                    var aV = a.data(this[a1], "olddisplay");
                    this[a1].style.display = aV || "";
                    if (a.css(this[a1], "display") === "none") {
                        var a3 = this[a1].nodeName,
                            a2;
                        if (F[a3]) {
                            a2 = F[a3]
                        } else {
                            var aX = a("<" + a3 + " />").appendTo("body");
                            a2 = aX.css("display");
                            if (a2 === "none") {
                                a2 = "block"
                            }
                            aX.remove();
                            F[a3] = a2
                        }
                        a.data(this[a1], "olddisplay", a2)
                    }
                }
                for (var a0 = 0, aZ = this.length; a0 < aZ; a0++) {
                    this[a0].style.display = a.data(this[a0], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (a0, a1) {
            if (a0 || a0 === 0) {
                return this.animate(aA("hide", 3), a0, a1)
            } else {
                for (var aZ = 0, aW = this.length; aZ < aW; aZ++) {
                    var aV = a.data(this[aZ], "olddisplay");
                    if (!aV && aV !== "none") {
                        a.data(this[aZ], "olddisplay", a.css(this[aZ], "display"))
                    }
                }
                for (var aY = 0, aX = this.length; aY < aX; aY++) {
                    this[aY].style.display = "none"
                }
                return this
            }
        },
        _toggle: a.fn.toggle,
        toggle: function (aX, aW) {
            var aV = typeof aX === "boolean";
            if (a.isFunction(aX) && a.isFunction(aW)) {
                this._toggle.apply(this, arguments)
            } else {
                if (aX == null || aV) {
                    this.each(function () {
                        var aY = aV ? aX : a(this).is(":hidden");
                        a(this)[aY ? "show" : "hide"]()
                    })
                } else {
                    this.animate(aA("toggle", 3), aX, aW)
                }
            }
            return this
        },
        fadeTo: function (aV, aX, aW) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: aX
            }, aV, aW)
        },
        animate: function (aZ, aW, aY, aX) {
            var aV = a.speed(aW, aY, aX);
            if (a.isEmptyObject(aZ)) {
                return this.each(aV.complete)
            }
            return this[aV.queue === false ? "each" : "queue"](function () {
                var a2 = a.extend({}, aV),
                    a4, a3 = this.nodeType === 1 && a(this).is(":hidden"),
                    a0 = this;
                for (a4 in aZ) {
                    var a1 = a4.replace(ax, l);
                    if (a4 !== a1) {
                        aZ[a1] = aZ[a4];
                        delete aZ[a4];
                        a4 = a1
                    }
                    if (aZ[a4] === "hide" && a3 || aZ[a4] === "show" && !a3) {
                        return a2.complete.call(this)
                    }
                    if ((a4 === "height" || a4 === "width") && this.style) {
                        a2.display = a.css(this, "display");
                        a2.overflow = this.style.overflow
                    }
                    if (a.isArray(aZ[a4])) {
                        (a2.specialEasing = a2.specialEasing || {})[a4] = aZ[a4][1];
                        aZ[a4] = aZ[a4][0]
                    }
                }
                if (a2.overflow != null) {
                    this.style.overflow = "hidden"
                }
                a2.curAnim = a.extend({}, aZ);
                a.each(aZ, function (a6, ba) {
                    var a9 = new a.fx(a0, a2, a6);
                    if (ae.test(ba)) {
                        a9[ba === "toggle" ? a3 ? "show" : "hide" : ba](aZ)
                    } else {
                        var a8 = at.exec(ba),
                            bb = a9.cur(true) || 0;
                        if (a8) {
                            var a5 = parseFloat(a8[2]),
                                a7 = a8[3] || "px";
                            if (a7 !== "px") {
                                a0.style[a6] = (a5 || 1) + a7;
                                bb = ((a5 || 1) / a9.cur(true)) * bb;
                                a0.style[a6] = bb + a7
                            }
                            if (a8[1]) {
                                a5 = ((a8[1] === "-=" ? -1 : 1) * a5) + bb
                            }
                            a9.custom(bb, a5, a7)
                        } else {
                            a9.custom(bb, ba, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (aW, aV) {
            var aX = a.timers;
            if (aW) {
                this.queue([])
            }
            this.each(function () {
                for (var aY = aX.length - 1; aY >= 0; aY--) {
                    if (aX[aY].elem === this) {
                        if (aV) {
                            aX[aY](true)
                        }
                        aX.splice(aY, 1)
                    }
                }
            });
            if (!aV) {
                this.dequeue()
            }
            return this
        }
    });
    a.each({
        slideDown: aA("show", 1),
        slideUp: aA("hide", 1),
        slideToggle: aA("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function (aV, aW) {
        a.fn[aV] = function (aX, aY) {
            return this.animate(aW, aX, aY)
        }
    });
    a.extend({
        speed: function (aX, aY, aW) {
            var aV = aX && typeof aX === "object" ? aX : {
                complete: aW || !aW && aY || a.isFunction(aX) && aX,
                duration: aX,
                easing: aW && aY || aY && !a.isFunction(aY) && aY
            };
            aV.duration = a.fx.off ? 0 : typeof aV.duration === "number" ? aV.duration : a.fx.speeds[aV.duration] || a.fx.speeds._default;
            aV.old = aV.complete;
            aV.complete = function () {
                if (aV.queue !== false) {
                    a(this).dequeue()
                }
                if (a.isFunction(aV.old)) {
                    aV.old.call(this)
                }
            };
            return aV
        },
        easing: {
            linear: function (aX, aY, aV, aW) {
                return aV + aW * aX
            },
            swing: function (aX, aY, aV, aW) {
                return ((-Math.cos(aX * Math.PI) / 2) + 0.5) * aW + aV
            }
        },
        timers: [],
        fx: function (aW, aV, aX) {
            this.options = aV;
            this.elem = aW;
            this.prop = aX;
            if (!aV.orig) {
                aV.orig = {}
            }
        }
    });
    a.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(a.fx.step[this.prop] || a.fx.step._default)(this);
            if ((this.prop === "height" || this.prop === "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function (aW) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var aV = parseFloat(a.css(this.elem, this.prop, aW));
            return aV && aV > -10000 ? aV : parseFloat(a.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (aZ, aY, aX) {
            this.startTime = aM();
            this.start = aZ;
            this.end = aY;
            this.unit = aX || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var aV = this;

            function aW(a0) {
                return aV.step(a0)
            }
            aW.elem = this.elem;
            if (aW() && a.timers.push(aW) && !aC) {
                aC = setInterval(a.fx.tick, 13)
            }
        },
        show: function () {
            this.options.orig[this.prop] = a.style(this.elem, this.prop);
            this.options.show = true;
            this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            a(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = a.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (aY) {
            var a3 = aM(),
                aZ = true;
            if (aY || a3 >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                for (var a0 in this.options.curAnim) {
                    if (this.options.curAnim[a0] !== true) {
                        aZ = false
                    }
                }
                if (aZ) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        var aX = a.data(this.elem, "olddisplay");
                        this.elem.style.display = aX ? aX : this.options.display;
                        if (a.css(this.elem, "display") === "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        a(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var aV in this.options.curAnim) {
                            a.style(this.elem, aV, this.options.orig[aV])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var aW = a3 - this.startTime;
                this.state = aW / this.options.duration;
                var a1 = this.options.specialEasing && this.options.specialEasing[this.prop];
                var a2 = this.options.easing || (a.easing.swing ? "swing" : "linear");
                this.pos = a.easing[a1 || a2](this.state, aW, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    a.extend(a.fx, {
        tick: function () {
            var aW = a.timers;
            for (var aV = 0; aV < aW.length; aV++) {
                if (!aW[aV]()) {
                    aW.splice(aV--, 1)
                }
            }
            if (!aW.length) {
                a.fx.stop()
            }
        },
        stop: function () {
            clearInterval(aC);
            aC = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (aV) {
                a.style(aV.elem, "opacity", aV.now)
            },
            _default: function (aV) {
                if (aV.elem.style && aV.elem.style[aV.prop] != null) {
                    aV.elem.style[aV.prop] = (aV.prop === "width" || aV.prop === "height" ? Math.max(0, aV.now) : aV.now) + aV.unit
                } else {
                    aV.elem[aV.prop] = aV.now
                }
            }
        }
    });
    if (a.expr && a.expr.filters) {
        a.expr.filters.animated = function (aV) {
            return a.grep(a.timers, function (aW) {
                return aV === aW.elem
            }).length
        }
    }
    function aA(aW, aV) {
        var aX = {};
        a.each(ai.concat.apply([], ai.slice(0, aV)), function () {
            aX[this] = aW
        });
        return aX
    }
    if ("getBoundingClientRect" in ab.documentElement) {
        a.fn.offset = function (a4) {
            var aX = this[0];
            if (a4) {
                return this.each(function (a5) {
                    a.offset.setOffset(this, a4, a5)
                })
            }
            if (!aX || !aX.ownerDocument) {
                return null
            }
            if (aX === aX.ownerDocument.body) {
                return a.offset.bodyOffset(aX)
            }
            var aZ = aX.getBoundingClientRect(),
                a3 = aX.ownerDocument,
                a0 = a3.body,
                aV = a3.documentElement,
                aY = aV.clientTop || a0.clientTop || 0,
                a1 = aV.clientLeft || a0.clientLeft || 0,
                a2 = aZ.top + (self.pageYOffset || a.support.boxModel && aV.scrollTop || a0.scrollTop) - aY,
                aW = aZ.left + (self.pageXOffset || a.support.boxModel && aV.scrollLeft || a0.scrollLeft) - a1;
            return {
                top: a2,
                left: aW
            }
        }
    } else {
        a.fn.offset = function (a6) {
            var a0 = this[0];
            if (a6) {
                return this.each(function (a7) {
                    a.offset.setOffset(this, a6, a7)
                })
            }
            if (!a0 || !a0.ownerDocument) {
                return null
            }
            if (a0 === a0.ownerDocument.body) {
                return a.offset.bodyOffset(a0)
            }
            a.offset.initialize();
            var aX = a0.offsetParent,
                aW = a0,
                a5 = a0.ownerDocument,
                a3, aY = a5.documentElement,
                a1 = a5.body,
                a2 = a5.defaultView,
                aV = a2 ? a2.getComputedStyle(a0, null) : a0.currentStyle,
                a4 = a0.offsetTop,
                aZ = a0.offsetLeft;
            while ((a0 = a0.parentNode) && a0 !== a1 && a0 !== aY) {
                if (a.offset.supportsFixedPosition && aV.position === "fixed") {
                    break
                }
                a3 = a2 ? a2.getComputedStyle(a0, null) : a0.currentStyle;
                a4 -= a0.scrollTop;
                aZ -= a0.scrollLeft;
                if (a0 === aX) {
                    a4 += a0.offsetTop;
                    aZ += a0.offsetLeft;
                    if (a.offset.doesNotAddBorder && !(a.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(a0.nodeName))) {
                        a4 += parseFloat(a3.borderTopWidth) || 0;
                        aZ += parseFloat(a3.borderLeftWidth) || 0
                    }
                    aW = aX, aX = a0.offsetParent
                }
                if (a.offset.subtractsBorderForOverflowNotVisible && a3.overflow !== "visible") {
                    a4 += parseFloat(a3.borderTopWidth) || 0;
                    aZ += parseFloat(a3.borderLeftWidth) || 0
                }
                aV = a3
            }
            if (aV.position === "relative" || aV.position === "static") {
                a4 += a1.offsetTop;
                aZ += a1.offsetLeft
            }
            if (a.offset.supportsFixedPosition && aV.position === "fixed") {
                a4 += Math.max(aY.scrollTop, a1.scrollTop);
                aZ += Math.max(aY.scrollLeft, a1.scrollLeft)
            }
            return {
                top: a4,
                left: aZ
            }
        }
    }
    a.offset = {
        initialize: function () {
            var aV = ab.body,
                aW = ab.createElement("div"),
                aZ, a1, a0, a2, aX = parseFloat(a.curCSS(aV, "marginTop", true)) || 0,
                aY = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            a.extend(aW.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            aW.innerHTML = aY;
            aV.insertBefore(aW, aV.firstChild);
            aZ = aW.firstChild;
            a1 = aZ.firstChild;
            a2 = aZ.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (a1.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (a2.offsetTop === 5);
            a1.style.position = "fixed", a1.style.top = "20px";
            this.supportsFixedPosition = (a1.offsetTop === 20 || a1.offsetTop === 15);
            a1.style.position = a1.style.top = "";
            aZ.style.overflow = "hidden", aZ.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (a1.offsetTop === -5);
            this.doesNotIncludeMarginInBodyOffset = (aV.offsetTop !== aX);
            aV.removeChild(aW);
            aV = aW = aZ = a1 = a0 = a2 = null;
            a.offset.initialize = a.noop
        },
        bodyOffset: function (aV) {
            var aX = aV.offsetTop,
                aW = aV.offsetLeft;
            a.offset.initialize();
            if (a.offset.doesNotIncludeMarginInBodyOffset) {
                aX += parseFloat(a.curCSS(aV, "marginTop", true)) || 0;
                aW += parseFloat(a.curCSS(aV, "marginLeft", true)) || 0
            }
            return {
                top: aX,
                left: aW
            }
        },
        setOffset: function (a0, aW, aX) {
            if (/static/.test(a.curCSS(a0, "position"))) {
                a0.style.position = "relative"
            }
            var aZ = a(a0),
                a2 = aZ.offset(),
                aV = parseInt(a.curCSS(a0, "top", true), 10) || 0,
                a1 = parseInt(a.curCSS(a0, "left", true), 10) || 0;
            if (a.isFunction(aW)) {
                aW = aW.call(a0, aX, a2)
            }
            var aY = {
                top: (aW.top - a2.top) + aV,
                left: (aW.left - a2.left) + a1
            };
            if ("using" in aW) {
                aW.using.call(a0, aY)
            } else {
                aZ.css(aY)
            }
        }
    };
    a.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var aX = this[0],
                aW = this.offsetParent(),
                aY = this.offset(),
                aV = /^body|html$/i.test(aW[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : aW.offset();
            aY.top -= parseFloat(a.curCSS(aX, "marginTop", true)) || 0;
            aY.left -= parseFloat(a.curCSS(aX, "marginLeft", true)) || 0;
            aV.top += parseFloat(a.curCSS(aW[0], "borderTopWidth", true)) || 0;
            aV.left += parseFloat(a.curCSS(aW[0], "borderLeftWidth", true)) || 0;
            return {
                top: aY.top - aV.top,
                left: aY.left - aV.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var aV = this.offsetParent || ab.body;
                while (aV && (!/^body|html$/i.test(aV.nodeName) && a.css(aV, "position") === "static")) {
                    aV = aV.offsetParent
                }
                return aV
            })
        }
    });
    a.each(["Left", "Top"], function (aW, aV) {
        var aX = "scroll" + aV;
        a.fn[aX] = function (a0) {
            var aY = this[0],
                aZ;
            if (!aY) {
                return null
            }
            if (a0 !== C) {
                return this.each(function () {
                    aZ = al(this);
                    if (aZ) {
                        aZ.scrollTo(!aW ? a0 : a(aZ).scrollLeft(), aW ? a0 : a(aZ).scrollTop())
                    } else {
                        this[aX] = a0
                    }
                })
            } else {
                aZ = al(aY);
                return aZ ? ("pageXOffset" in aZ) ? aZ[aW ? "pageYOffset" : "pageXOffset"] : a.support.boxModel && aZ.document.documentElement[aX] || aZ.document.body[aX] : aY[aX]
            }
        }
    });

    function al(aV) {
        return ("scrollTo" in aV && aV.document) ? aV : aV.nodeType === 9 ? aV.defaultView || aV.parentWindow : false
    }
    a.each(["Height", "Width"], function (aW, aV) {
        var aX = aV.toLowerCase();
        a.fn["inner" + aV] = function () {
            return this[0] ? a.css(this[0], aX, false, "padding") : null
        };
        a.fn["outer" + aV] = function (aY) {
            return this[0] ? a.css(this[0], aX, false, aY ? "margin" : "border") : null
        };
        a.fn[aX] = function (aY) {
            var aZ = this[0];
            if (!aZ) {
                return aY == null ? null : this
            }
            if (a.isFunction(aY)) {
                return this.each(function (a1) {
                    var a0 = a(this);
                    a0[aX](aY.call(this, a1, a0[aX]()))
                })
            }
            return ("scrollTo" in aZ && aZ.document) ? aZ.document.compatMode === "CSS1Compat" && aZ.document.documentElement["client" + aV] || aZ.document.body["client" + aV] : (aZ.nodeType === 9) ? Math.max(aZ.documentElement["client" + aV], aZ.body["scroll" + aV], aZ.documentElement["scroll" + aV], aZ.body["offset" + aV], aZ.documentElement["offset" + aV]) : aY === C ? a.css(aZ, aX) : this.css(aX, typeof aY === "string" ? aY : aY + "px")
        }
    });
    aJ.jQuery = aJ.$ = a
})(window);
(function (a) {
    a.fn.baseline = function (d) {
        if (!d) {
            d = ".baseline"
        }
        var c = this;
        var f = function (j) {
                var k = a(j).offset();
                var h = a(j).outerWidth();
                var g = a(j).outerHeight();
                return {
                    el: j,
                    width: h,
                    height: g,
                    left: k.left,
                    right: k.left + h,
                    top: k.top,
                    bottom: k.top + g
                }
            };
        var e = function (h, p) {
                var g = -1,
                    q = h.length;
                if (!q) {
                    return false
                }
                if (p == "rows") {
                    var l = "top";
                    var k = "bottom"
                } else {
                    var l = "left";
                    var k = "right"
                }
                var o = [];
                for (var j = 0; j < q; ++j) {
                    if (g == -1 || h[j][l] > o[g].max) {
                        o[++g] = {
                            max: h[j][k],
                            items: [h[j]]
                        }
                    } else {
                        o[g].max = Math.max(o[g].max, h[j][k]);
                        o[g].items.push(h[j])
                    }
                }
                return o
            };
        var b = function () {
                var g = (function () {
                    var h = [],
                        j = -1;
                    c.each(function () {
                        h[++j] = [];
                        a(this).find(d).each(function () {
                            h[j].push(f(this))
                        })
                    });
                    return h
                })();
                if (!g.length) {
                    return
                }
                a.each(g, function (n, p) {
                    p.sort(function (j, h) {
                        return j.bottom > h.bottom ? 1 : -1
                    });
                    var t = e(p, "rows");
                    for (var l = 0; l < t.length; ++l) {
                        rowItems = t[l].items;
                        rowItems.sort(function (j, h) {
                            return j.right > h.right ? 1 : -1
                        });
                        var q = e(rowItems, "cols");
                        for (var k = 0; k < q.length; ++k) {
                            var s = q[k].items;
                            s.sort(function (j, h) {
                                return j.bottom > h.bottom ? 1 : -1
                            });
                            var r = s.pop();
                            var o = t[l].max - r.bottom;
                            if (o > 0) {
                                var m = !a.boxModel ? a(r.el).outerHeight() : a(r.el).height();
                                a(r.el).height(m + o)
                            }
                        }
                    }
                })
            };
        a(window).bind("resize", b);
        setTimeout(function () {
            b()
        }, 100);
        return this
    }
})(jQuery);
(function (a) {
    a.fn.hitch = function (d, c, b) {
        return this.bind(d, function () {
            return c.apply(b || this, Array.prototype.slice.call(arguments))
        })
    };
    a.fn.liveHitch = function (d, c, b) {
        return this.live(d, function () {
            return c.apply(b || this, Array.prototype.slice.call(arguments))
        })
    }
})(jQuery);
(function (a) {
    a.fn.linkify = function () {
        return this.each(function () {
            var b = a(this);
            b.html('<a href="javascript:;" title="' + b.text() + '">' + b.html() + "</a>")
        })
    }
})(jQuery);
(function (a) {
    a.fn.colorFade = function (g, k) {
        var h = function (m) {
                var l;
                if (l = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(m)) {
                    return [parseInt(l[1], 16), parseInt(l[2], 16), parseInt(l[3], 16)]
                }
                if (l = /^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(m)) {
                    return [parseInt(l[1] + l[1], 16), parseInt(l[2] + l[2], 16), parseInt(l[3] + l[3], 16)]
                }
                if (l = /^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/i.exec(m)) {
                    return [parseInt(l[1], 10), parseInt(l[2], 10), parseInt(l[3], 10)]
                }
                return false
            };
        k = k || {};
        var c = this;
        var e = k.duration || 1000;
        var f = k.delay || 1000;
        var d = e / 20;
        var j = [];
        for (var b in g) {
            j.push({
                prop: b,
                from: h(c.css(b)),
                to: h(g[b])
            })
        }
        setTimeout(function () {
            var l = 1;
            var m = setInterval(function () {
                for (var n = 0; j[n]; ++n) {
                    var o = j[n];
                    if (!o.from || !o.to) {
                        continue
                    }
                    var p = [Math.min(Math.max(parseInt(l * ((o.to[0] - o.from[0]) / d) + o.from[0], 10), 0), 255), Math.min(Math.max(parseInt(l * ((o.to[1] - o.from[1]) / d) + o.from[1], 10), 0), 255), Math.min(Math.max(parseInt(l * ((o.to[2] - o.from[2]) / d) + o.from[2], 10), 0), 255)];
                    c.css(o.prop, "rgb(" + p.join(",") + ")")
                }
                if (++l > d) {
                    clearInterval(m);
                    c.trigger("fadeComplete")
                }
            }, 20)
        }, f);
        return this
    }
})(jQuery);
(function (a) {
    a.fn.scrollIntoView = function () {
        var c = Math.max(0, this.offset().top - 20);
        var e = null;
        var b = this;
        var d = setInterval(function () {
            var g = self.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            var f = c - g;
            if (Math.abs(f) < 5 || e && e == g) {
                e = null;
                window.scrollTo(0, g);
                clearInterval(d);
                d = null;
                b.trigger("scrollComplete")
            } else {
                e = g;
                window.scrollTo(0, Math.round(g + f / 5))
            }
        }, 20);
        return this
    }
})(jQuery);
(function (a) {
    a.fn.ellipsis = function (b) {
        var c = function (e) {
                this.IS_TEXT_NODE = 0;
                this.IS_START_ELEMENT_NODE = 1;
                this.IS_END_ELEMENT_NODE = 2;
                this.IS_ATTRIBUTE_NODE = 3;
                this.stack = this._parse(e)
            };
        c.prototype = {
            hasText: function () {
                for (var e = 0; this.stack[e]; ++e) {
                    if (this.stack[e].type == this.IS_TEXT_NODE && this.stack[e].content.length > 0) {
                        return true
                    }
                }
                return false
            },
            truncate: function (f) {
                var m = this._findLastTextNode();
                if (m == -1) {
                    return ""
                }
                this.stack[m].content = this.stack[m].content.substr(0, this.stack[m].content.length - 1);
                if (this.stack[m].content.length == 0) {
                    var k = null;
                    if (m > 0 && this.stack[m].depth == this.stack[m - 1].depth) {
                        this.stack.splice(m - 1, 3);
                        k = m - 2
                    } else {
                        this.stack.splice(m, 1);
                        k = m - 1
                    }
                    while (this.stack[k] && this.stack[k + 1]) {
                        if (this.stack[k].type == this.IS_START_ELEMENT_NODE && this.stack[k + 1].type == this.IS_END_ELEMENT_NODE) {
                            this.stack.splice(k, 2);
                            --k
                        } else {
                            break
                        }
                    }
                }
                var l = "";
                var e = this.stack.length;
                var g = this._findLastTextNode();
                for (var h = 0; h < e; ++h) {
                    l += this.stack[h].content;
                    if (h == g) {
                        l = l.replace(/\s+$/, "");
                        l += f
                    }
                }
                return l
            },
            _parse: function (l) {
                var g = this.IS_TEXT_NODE;
                var h = "";
                var j = 0;
                var n = [];
                var f = "";
                var m = l.length;
                for (var k = 0; k < m; ++k) {
                    var e = l.substr(k, 1);
                    if (g == this.IS_START_ELEMENT_NODE) {
                        h += e;
                        if (e == ">") {
                            n.push({
                                content: h,
                                depth: j,
                                type: g
                            });
                            h = "";
                            g = this.IS_TEXT_NODE
                        } else {
                            if (e == '"' || e == "'") {
                                f = e;
                                g = this.IS_ATTRIBUTE_NODE
                            }
                        }
                    } else {
                        if (g == this.IS_ATTRIBUTE_NODE) {
                            h += e;
                            if (e == f) {
                                g = this.IS_START_ELEMENT_NODE
                            }
                        } else {
                            if (g == this.IS_TEXT_NODE) {
                                if (e == "<") {
                                    if (h != "") {
                                        n.push({
                                            content: h,
                                            depth: j,
                                            type: g
                                        })
                                    }
                                    h = "<";
                                    if (l.substr(k + 1, 1) == "/") {
                                        g = this.IS_END_ELEMENT_NODE
                                    } else {
                                        g = this.IS_START_ELEMENT_NODE;
                                        ++j
                                    }
                                } else {
                                    h += e
                                }
                            } else {
                                if (g == this.IS_END_ELEMENT_NODE) {
                                    h += e;
                                    if (e == ">") {
                                        n.push({
                                            content: h,
                                            depth: j,
                                            type: g
                                        });
                                        h = "";
                                        g = this.IS_TEXT_NODE;
                                        --j
                                    }
                                }
                            }
                        }
                    }
                }
                if (h != "") {
                    n.push({
                        content: h,
                        depth: j,
                        type: g
                    })
                }
                return n
            },
            _findLastTextNode: function () {
                var e = this.stack.length;
                while (e--) {
                    if (this.stack[e].type == this.IS_TEXT_NODE) {
                        return e
                    }
                }
                return -1
            }
        };
        var d = document.documentElement.style;
        var b = b || "...";
        if ("textOverflow" in d || "OTextOverflow" in d) {
            return this
        }
        return this.each(function () {
            var h = a(this);
            if (h.css("overflow") == "hidden") {
                var g = a(this.cloneNode(true)).css({
                    position: "absolute",
                    visibility: "hidden",
                    width: "auto",
                    overflow: "visible"
                });
                h.after(g);
                var j = h.html();
                var e = new c(j);
                var f = h.width();
                while (e.hasText() && g.width() > f) {
                    g.html(e.truncate(b))
                }
                h.html(g.html());
                g.remove()
            }
        })
    }
})(jQuery);
(function (a) {
    a.fn.swapClasses = function (c, b) {
        return a(this).removeClass(c).addClass(b)
    }
})(jQuery);
(function (c) {
    var b = function () {};
    b.prototype = {
        parse: function (d) {
            var e = com.nature.StringUtils;
            return "<p>" + e.br(e.entities(d)) + "</p>"
        }
    };
    var a = function () {};
    a.prototype = {
        parse: function (j) {
            if (!j) {
                return ""
            }
            j = com.nature.StringUtils.entities(j);
            var k;
            if (j.indexOf("*")) {
                k = new RegExp("\\*([^ ][^\\r\\n]*?)\\*", "g");
                j = j.replace(k, "<b>$1</b>")
            }
            if (j.indexOf("_") != -1) {
                k = new RegExp("_(.+?)_", "g");
                j = j.replace(k, "<i>$1</i>")
            }
            if (j.indexOf("~") != -1) {
                k = new RegExp("~([^ ][^\\r\\n]*?)~", "g");
                j = j.replace(k, "<sub>$1</sub>")
            }
            if (j.indexOf("^") != -1) {
                k = new RegExp("\\^([^ ][^\\r\\n]*?)\\^", "g");
                j = j.replace(k, "<sup>$1</sup>")
            }
            if (j.indexOf('"') != -1) {
                k = new RegExp('"\\b(.+?)\\(\\b(.+?)\\b\\)":([^\\s]+)', "g");
                j = j.replace(k, '<a href="$3" title="$2">$1</a>');
                k = new RegExp('"\\b(.+?)\\b":([^\\s]+)', "g");
                j = j.replace(k, '<a href="$2">$1</a>')
            }
            if (j.indexOf("\n") != -1) {
                k = new RegExp("(.*)\n([^#*\n].*)", "gi");
                j = j.replace(k, "$1<br />$2");
                k = new RegExp("\n*<br */>", "gi");
                j = j.replace(k, "\n")
            }
            var m = j.split("\n");
            var e = m.length;
            for (var h = 0; h < e; ++h) {
                var n = m[h].replace(/\s*$/, "");
                var g = false;
                if (n.search(/^\s*bq\.\s+/) != -1) {
                    n = n.replace(/^\s*bq\.\s+/, "\t<blockquote>") + "</blockquote>";
                    g = true
                }
                if (n.search(/^\s*\*\s+/) != -1) {
                    n = n.replace(/^\s*\*\s+/, "\t<liu>") + "</liu>";
                    g = true
                }
                if (n.search(/^\s*#\s+/) != -1) {
                    n = n.replace(/^\s*#\s+/, "\t<lio>") + "</lio>";
                    g = true
                }
                if (!g && (n.replace(/\s/g, "").length > 0)) {
                    n = "<p>" + n + "</p>"
                }
                m[h] = n + "\n"
            }
            var d = false;
            var f = "";
            for (var h = 0; h < e; ++h) {
                n = m[h];
                if (d && f == "ul" && !n.match(/^\t<liu/)) {
                    n = "</ul>\n" + n;
                    d = false
                }
                if (d && f == "ol" && !n.match(/^\t<lio/)) {
                    n = "</ol>\n" + n;
                    d = false
                }
                if (!d && n.match(/^\t<liu/)) {
                    n = "<ul>" + n;
                    d = true;
                    f = "ul"
                }
                if (!d && n.match(/^\t<lio/)) {
                    n = "<ol>" + n;
                    d = true;
                    f = "ol"
                }
                m[h] = n
            }
            j = m.join("\n");
            j = j.replace(/li[o|u]>/g, "li>");
            return j
        }
    };
    c.fn.preview = function (h, g) {
        var j = function (n) {
                switch (n) {
                case "textile":
                    return new a();
                default:
                    return new b()
                }
            };
        var f = function (o) {
                var n = this.val();
                if (n == l && !o) {
                    return
                }
                e.html(d.parse(n));
                l = n
            };
        var e = (typeof h == "string") ? c(h) : h;
        var d = j(g);
        var k = null;
        var m = this;
        var l = this.val();
        this.bind("focus", function () {
            k = setInterval(function () {
                f.call(m)
            }, 200)
        });
        this.bind("blur", function () {
            clearInterval(k);
            f.call(m)
        });
        f.call(this, true);
        return this
    }
})(jQuery);
(function (a) {
    a.fn.grow = function () {
        var b = parseInt(this.css("height"), 10);
        this.bind("keyup", function () {
            a(this).css("height", 0);
            a(this).css("height", Math.max(b, this.scrollHeight) + "px")
        });
        return this
    }
})(jQuery);
(function (a) {
    a.fn.collidesWith = function (e) {
        var b = this;
        var d = a(e);
        var f = a([]);
        if (!b || !d) {
            return false
        }
        b.each(function () {
            var j = a(this);
            var g = j.offset();
            var h = g.left;
            var c = g.top;
            var l = h + j.outerWidth();
            var k = c + j.outerHeight();
            d.not(j).each(function () {
                var p = a(this);
                var m = p.offset();
                var r = m.left;
                var q = m.top;
                var o = r + p.outerWidth();
                var n = q + p.outerHeight();
                if (h >= o || l <= r || c >= n || k <= q) {
                    return true
                } else {
                    if (f.length == f.not(this).length) {
                        f.push(this)
                    }
                }
            })
        });
        return f
    }
})(jQuery);
(function (a) {
    a.fn.initPlaceholders = function () {
        var d, b, c;
        if ("placeholder" in document.createElement("input")) {
            return this
        }
        d = function (e) {
            if (!e.val().replace(/[\s]+/, "").length) {
                e.val(e.attr("placeholder"));
                e.addClass("placeholder")
            }
        };
        b = function (e) {
            if (e.val() == e.attr("placeholder")) {
                e.val("");
                e.removeClass("placeholder")
            }
        };
        c = this.find("input[placeholder]");
        c.focus(function () {
            b(a(this))
        }).blur(function () {
            d(a(this))
        }).each(function () {
            d(a(this))
        });
        this.submit(function () {
            c.each(function () {
                b(a(this))
            });
            setTimeout(function () {
                c.each(function () {
                    d(a(this))
                })
            }, 100)
        });
        return this
    }
})(jQuery);
(function (a) {
    a.event.special.imgpreload = {
        add: function (b) {
            if (this.nodeType === 1 && this.tagName.toLowerCase() === "img" && this.src !== "") {
                if (this.complete || this.readyState === 4) {
                    b.apply(this)
                } else {
                    if (this.readyState === "uninitialized" && this.src.indexOf("data:") === 0) {
                        a(this).trigger("error")
                    } else {
                        a(this).bind("load", b)
                    }
                }
            }
        }
    }
}(jQuery));
var com = com || {};
com.nature = com.nature || {};
com.nature.Css = {
    isImplemented: function (e) {
        var b = document.createElement("div");
        if (!b.style) {
            return false
        }
        if (typeof b.style[e] == "string") {
            return true
        }
        var a = ["Ms", "Moz", "Webkit", "O", "Khtml"];
        var c = a.length;
        e = e.substr(0, 1).toUpperCase() + e.substring(1);
        while (c--) {
            if (typeof b.style[a[c] + e] == "string") {
                return true
            }
        }
        return false
    }
};
var com = com || {};
com.nature = com.nature || {};
com.nature.StringUtils = {
    trim: function (a) {
        if (!a) {
            return ""
        }
        return a.replace(/^\s+/, "").replace(/\s+$/, "")
    },
    isEmpty: function (a) {
        return this.trim(a).length == 0
    },
    entities: function (b) {
        if (!b) {
            return ""
        }
        var a = [
            [">", "&gt;"],
            ["<", "&lt;"],
            ["&", "&amp;"]
        ];
        var c = a.length;
        while (c--) {
            if (b.indexOf(a[c][0]) != -1) {
                b = b.replace(new RegExp(a[c][0], "g"), a[c][1])
            }
        }
        return b
    },
    br: function (a) {
        if (!a) {
            return ""
        }
        if (a.indexOf("\n") != -1 || a.indexOf("\r") != -1) {
            return a.replace(/\r\n|\r|\n/g, "<br />")
        }
        return a
    }
};
var com = com || {};
com.nature = com.nature || {};
com.nature.Cookie = {
    set: function (a, b, g, c) {
        var f = [a + "=" + b];
        if (g) {
            var e = new Date();
            e.setTime(e.getTime() + (g * 24 * 60 * 60 * 1000));
            f.push("expires=" + e.toGMTString())
        }
        if (c) {
            f.push("path=" + c)
        }
        document.cookie = f.join(";")
    },
    get: function (b) {
        if (b) {
            var c = new RegExp("(^|;| )" + b + "=([^;]*)", "ig");
            var a = c.exec(document.cookie);
            if (a) {
                return a[2]
            }
            return false
        }
    },
    raw: function () {
        return document.cookie
    },
    remove: function (a) {
        for (var b = 0; arguments[b]; ++b) {
            this.set(arguments[b], "", -1)
        }
    }
};
var com = com || {};
com.nature = com.nature || {};
com.nature.Broadcaster = function () {
    var a = {};
    var b = function (c) {
            return typeof a[c] != "undefined"
        };
    this.subscribe = function (e, d, c) {
        if (!b(e)) {
            a[e] = []
        }
        a[e].push({
            fn: d,
            scope: c || null
        })
    };
    this.unsubscribe = function (e, d, c) {
        if (!b(e)) {
            return
        }
        c = c || null;
        var f = a[e].length;
        while (f--) {
            if (a[e][f].fn == d && a[e][f].scope == c) {
                a[e].splice(f, 1);
                return
            }
        }
    };
    this.notify = function (d) {
        if (!b(d)) {
            return
        }
        var e = a[d].length;
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this);
        c.unshift(d);
        while (e--) {
            a[d][e].fn.apply(a[d][e].scope, c)
        }
    };
    this.toString = function () {
        return "[object com.nature.Broadcaster]"
    }
};
com.nature.Popups = {
    _children: {},
    _open: [],
    add: function (a) {
        if (!(a.id in this._children)) {
            this._children[a.id] = a
        }
    },
    remove: function (a) {
        if (a.id in this._children) {
            delete this._children[a.id]
        }
    },
    redraw: function (b, a) {
        var d = this._open.length;
        while (d--) {
            var c = this._children[this._open[d]];
            if (b == "close" && c.parent == a) {
                c.close()
            } else {
                c.pos()
            }
        }
    },
    onOpen: function (b, a) {
        this._open.push(a.id)
    },
    onClose: function (b, a) {
        var c = this._open.length;
        while (c--) {
            if (a.id == this._open[c]) {
                this._open.splice(c, 1);
                break
            }
        }
    },
    onResize: function () {
        this.redraw("resize")
    }
};
com.nature.Popups.collapsableParents = ["div.section", "div.figure-preview"];
jQuery(window).resize(function () {
    com.nature.Popups.onResize()
});
com.nature.PopupGroup = function (c) {
    var b = {};
    var a = [];
    this.add = function (d) {
        if (!(d.id in b)) {
            b[d.id] = d
        }
    };
    this.remove = function (d) {
        if (d.id in b) {
            delete b[d.id]
        }
    };
    this.get = function (d) {
        var e = (typeof d == "string") ? d : d.id;
        if (e in b) {
            return b[e]
        }
        return null
    };
    this.onOpen = function (e, d) {
        if (c && a.length) {
            b[a.pop()].close()
        }
        a.push(d.id)
    };
    this.onClose = function (e, d) {
        var f = a.length;
        while (f--) {
            if (d.id == a[f]) {
                a.splice(f, 1);
                break
            }
        }
    };
    this.toString = function () {
        return "[object com.nature.PopupGroup]"
    }
};
com.nature.Popup = (function (c) {
    var b = 0;
    var a = function (f, e, d) {
            var g = {
                hasArrow: true,
                hasTitle: true,
                hasCloseButton: true,
                position: "above",
                title: f.html(),
                event: "click"
            };
            d = c.extend(g, d);
            for (var h in d) {
                this["_" + h] = d[h]
            }
            if (this._id) {
                this.id = this._id
            } else {
                this.id = "popup-" + e.attr("id") + "-" + ++b
            }
            this.isOpen = false;
            this.parent = null;
            this._$base = f;
            this._$content = e;
            this._$popup = null
        };
    a.cache = {};
    a.prototype = {
        init: function (e) {
            var d = this._$base;
            var j = false;
            if (d.is("a")) {
                if (!d.attr("href")) {
                    d.attr("href", "javascript:;")
                }
            } else {
                if (!d.attr("tabindex")) {
                    d.attr("tabindex", "0")
                }
                j = true
            }
            if (!e) {
                var f = this;
                if (this._event === "mouseover" || this._event === "mouseenter") {
                    var g = false;
                    var h = null;
                    d.hitch("mouseenter", function (k) {
                        g = true;
                        if (h !== null) {
                            clearTimeout(h)
                        }
                        this.open(k)
                    }, this).hitch("mouseleave", function (k) {
                        g = false;
                        h = setTimeout(function () {
                            if (!g) {
                                f.close(k)
                            }
                        }, 200)
                    }, this)
                } else {
                    if (this._event === "click" && j) {
                        d.hitch(this._event, this.toggle, this);
                        d.bind("keydown", function (k) {
                            if (k.keyCode == 13) {
                                f.toggle(k)
                            }
                        })
                    } else {
                        d.hitch(this._event, this.toggle, this)
                    }
                }
            }
        },
        build: function () {
            if (typeof com.nature.Popup.cache[this.id] != "undefined") {
                this._$popup = c("#" + this.id);
                return
            }
            com.nature.Popup.cache[this.id] = true;
            this.parent = this._$base.closest(com.nature.Popups.collapsableParents.join(",")).attr("id");
            com.nature.Popups.add(this);
            var d = "box popup " + this._$content.attr("class");
            var e = '<div id="' + this.id + '" class="' + d + '">';
            if (this._hasTitle || this._hasCloseButton) {
                e += '<div class="title-bar cleared">';
                if (this._hasTitle) {
                    e += "<h2>" + this._title + "</h2>"
                }
                if (this._hasCloseButton) {
                    e += '<button class="close">close</button>'
                }
                e += "</div>"
            }
            if (this._hasArrow) {
                e += '<div class="arrow arrow-' + ({
                    above: "bottom",
                    below: "top"
                }[this._position] || "bottom") + '"></div>'
            }
            e += '<div class="popup-content">';
            e += this._$content.html();
            e += "</div>";
            e += "</div>";
            c("body").append(e);
            this._$popup = c("#" + this.id);
            if (!com.nature.Css.isImplemented("boxShadow")) {
                this._$popup.addClass("popup-highlight")
            }
            this._$popup.find("button").hitch("click", this.toggle, this)
        },
        toggle: function (d) {
            if (this.isOpen) {
                return this.close(d)
            }
            return this.open(d)
        },
        open: function (f) {
            this.build();
            this.isOpen = true;
            this._$popup.addClass("popup-shown").css({
                display: "block"
            });
            this.pos(f);
            if (c("body").hasClass("ie6")) {
                var d = this._$popup.collidesWith("select");
                if (d.length > 0) {
                    c.each(d, function () {
                        c(this).css({
                            visibility: "hidden"
                        })
                    })
                }
            }
            com.nature.Popups.onOpen("open", this);
            if (typeof this.notify != "undefined") {
                this.notify("open")
            }
            return false
        },
        close: function () {
            var d = this;
            this._$popup.fadeOut("fast", function () {
                c(this).removeClass("popup-shown");
                d.isOpen = false
            });
            com.nature.Popups.onClose("close", this);
            if (c("body").hasClass("ie6")) {
                c("select").css({
                    visibility: "visible"
                })
            }
            if (typeof this.notify != "undefined") {
                this.notify("close")
            }
            return false
        },
        pos: function (l) {
            var j = this._$base.offset();
            var h = this._$base.outerWidth();
            var d = Math.min(Math.max(0, (h / 2) - 25), this._$popup.outerWidth() - 50);
            var m = false,
                n = 0,
                g = 0;
            if (l && this._$base.css("display") === "inline" && this._$base.height() > parseInt(this._$base.css("lineHeight"), 10)) {
                j.top = l.pageY - 5;
                j.left = l.pageX - 25;
                d = 0;
                m = true
            }
            if (this._hasArrow && (n = h - this._$popup.find("div.arrow").outerWidth() / 1.5) < 0) {
                j.left += n
            }
            g = j.left + this._$popup.outerWidth() - c(window).width() + 20;
            if (g > 0) {
                j.left -= g;
                d += g
            }
            var o = j.top - (this._$popup.height() + ((this._hasArrow) ? 32 : 0));
            var k = j.top + ((!m) ? this._$base.outerHeight() : 2);
            if (this._hasArrow) {
                k += 14
            }
            var f = (this._position == "above") ? o : k;
            if (this._position == "above" && f < c(document).scrollTop()) {
                this._$popup.find("div.arrow-bottom").removeClass("arrow-bottom").addClass("arrow-top");
                f = k
            } else {
                if (this._position == "above") {
                    this._$popup.find("div.arrow-top").removeClass("arrow-top").addClass("arrow-bottom")
                }
            }
            if (this._position == "below" && (f + this._$popup.height()) > (c(document).scrollTop() + c(window).height())) {
                this._$popup.find("div.arrow-top").removeClass("arrow-top").addClass("arrow-bottom");
                f = o
            } else {
                if (this._position == "below") {
                    this._$popup.find("div.arrow-bottom").removeClass("arrow-bottom").addClass("arrow-top")
                }
            }
            this._$popup.css({
                top: f + "px",
                left: j.left + "px"
            });
            this._$popup.find("div.arrow").css({
                left: d + "px"
            })
        },
        title: function (d) {
            if (typeof d != "undefined") {
                this._title = d
            }
            return this._title
        },
        position: function (d) {
            if (typeof d != "undefined") {
                this._position = d
            }
            return this._position
        },
        hasArrow: function (d) {
            if (typeof d != "undefined") {
                this._hasArrow = !! d
            }
            return this._hasArrow
        },
        hasTitle: function (d) {
            if (typeof d != "undefined") {
                this._hasTitle = !! d
            }
            return this._hasTitle
        },
        hasCloseButton: function (d) {
            if (typeof d != "undefined") {
                this._hasCloseButton = !! d
            }
            return this._hasCloseButton
        },
        toString: function () {
            return "[object com.nature.Popup]"
        }
    };
    return a
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.Truncator = (function (d) {
    var e = [];
    var f = [];
    var c = {
        img: true,
        br: true,
        hr: true
    };
    var h = false;
    var a = false;
    var j = function (m, y, x) {
            var u = false;
            var l = false;
            var v = false;
            var q = false;
            var t = [];
            var A = true;
            while (y > -1 && A) {
                var w = m.charAt(y);
                if (w == ">") {
                    var z = m.substring(m.lastIndexOf("<", y), y + 1).toLowerCase();
                    var s = /<\s*(\/)?([^\s>]+)/.exec(z);
                    var p = !! s[1];
                    var n = s[2];
                    if (!p) {
                        if (f.length) {
                            f.pop()
                        } else {
                            if (!(n in c)) {
                                e.unshift(n)
                            }
                        }
                        u = true
                    } else {
                        f.push(n);
                        l = true
                    }
                } else {
                    if (w == "<") {
                        u = false;
                        l = false
                    } else {
                        if (w == '"' && u && !v) {
                            v = true
                        } else {
                            if (w == '"' && u && v) {
                                v = false
                            } else {
                                if (w == "&" && q) {
                                    q = false
                                } else {
                                    if (!u && !l && !v && !q) {
                                        if (w == ";" && y > 0) {
                                            var r = m.substring(m.lastIndexOf("&", y), y + 1);
                                            if (r.match(/^&[#0-9a-z]+;$/)) {
                                                q = true
                                            }
                                        }
                                        if (x) {
                                            --x;
                                            if (x == 0) {
                                                A = false
                                            }
                                        } else {
                                            if (w == ".") {
                                                if (y > 2) {
                                                    var o = m.substring(0, y);
                                                    if (!o.match(/((et al(<\/i>)?)|(fig)|(ref))$/i)) {
                                                        A = false
                                                    }
                                                } else {
                                                    A = false
                                                }
                                            } else {
                                                if (w == "!" || w == "?") {
                                                    A = false
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                t.unshift(w);
                --y
            }
            if (A) {
                h = true
            }
            if (t[0] == "." || t[0] == "?" || t[0] == "!") {
                t.shift()
            }
            return t.join("")
        };
    var k = function (m, A, z) {
            var w = false;
            var l = false;
            var x = false;
            var s = false;
            var u = [];
            var v = m.length;
            var C = true;
            while (A < v && C) {
                var y = m.charAt(A);
                if (y == "<") {
                    var B = m.substring(A, m.indexOf(">", A) + 1).toLowerCase();
                    var t = /<\s*(\/)?([^\s>]+)/.exec(B);
                    var r = !! t[1];
                    var p = t[2];
                    if (r) {
                        if (e.length) {
                            e.pop()
                        } else {
                            f.unshift(p)
                        }
                        l = true
                    } else {
                        if (!(p in c)) {
                            e.push(p)
                        }
                        w = true
                    }
                } else {
                    if (y == ">") {
                        w = false;
                        l = false
                    } else {
                        if (y == '"' && w && !x) {
                            x = true
                        } else {
                            if (y == '"' && w && x) {
                                x = false
                            } else {
                                if (y == ";" && s) {
                                    s = false
                                } else {
                                    if (!w && !l && !x && !s) {
                                        if (y == "&") {
                                            s = true
                                        }
                                        if (z) {
                                            --z;
                                            if (z == 0) {
                                                C = false
                                            }
                                        } else {
                                            if (y == ".") {
                                                if (A > 2) {
                                                    var q = m.substring(0, A);
                                                    if (!q.match(/((et al(<\/i>)?)|(fig)|(ref))$/i)) {
                                                        C = false
                                                    }
                                                } else {
                                                    C = false
                                                }
                                            } else {
                                                if (y == "!" || y == "?") {
                                                    C = false
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                u.push(y);
                ++A
            }
            var o = u.length - 1;
            if (u[o] == "." || u[o] == "?" || u[o] == "!") {
                u.pop()
            }
            if (C) {
                a = true
            }
            return u.join("")
        };
    var b = function (m, t, q) {
            e = [];
            f = [];
            h = false;
            a = false;
            if (typeof q == "undefined") {
                q = null
            }
            var n = t.html();
            t.html("__" + n + "__");
            var s = m.html();
            t.html(n);
            var r = s.indexOf("__" + n + "__") - 1;
            var l = j(s, r, q);
            var p = k(s, r + n.length + 5, q);
            var o = "";
            if (f.length) {
                o = "<" + f.join("><") + ">"
            }
            o += l;
            o += n;
            o += p;
            if (e.length) {
                o += "</" + e.reverse().join("></") + ">"
            }
            if (!h) {
                o = o.replace(/^((\s*<[^>]+>\s*)*)/i, "$1&hellip;")
            }
            if (!a) {
                o = o.replace(/((\s*<\/[^>]+>\s*)*)$/i, "&hellip;$1")
            }
            return o
        };
    var g = function (n, m) {
            e = [];
            f = [];
            h = false;
            a = false;
            if (n.length <= m) {
                return n
            }
            var l = k(n, 0, m);
            if (e.length) {
                l += "</" + e.reverse().join("></") + ">"
            }
            if (!a) {
                l = l.replace(/((\s*<\/[^>]+>\s*)*)$/i, "&hellip;$1")
            }
            return l
        };
    return {
        truncate: g,
        getContextSnippet: b,
        toString: function () {
            return "[object com.nature.Truncator]"
        }
    }
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.Configuration = {
    _data: {},
    add: function (b) {
        var a = this;
        jQuery.each(b, function (d, c) {
            if (!a._data[d] && c != "") {
                a._data[d] = c
            }
        })
    },
    change: function (b) {
        var a = this;
        jQuery.each(b, function (d, c) {
            a._data[d] = c
        })
    },
    remove: function (a) {
        if (this._data[a]) {
            delete this._data[a]
        }
    },
    get: function (a) {
        return this._data[a] || false
    }
};
var com = com || {};
com.nature = com.nature || {};
com.nature.Bitstate = (function (b) {
    var a = function () {
            this.flagmasks = {};
            this.flags;
            this.init = function () {
                flagNames = ["highlightcompound"];
                for (var c = 0; c < flagNames.length; c++) {
                    this.flagmasks[flagNames[c]] = Math.pow(2, c)
                }
                this.flags = parseInt(com.nature.Cookie.get("bitstate")) || 0
            };
            this.isSet = function (c) {
                return !!(this.flags & this.flagmasks[c])
            };
            this.set = function (c, d) {
                if (this.flagmasks[c] && !this.isSet(c)) {
                    this.flags |= this.flagmasks[c];
                    this.save(d || "/")
                } else {
                    return false
                }
            };
            this.clear = function (c, d) {
                if (this.flagmasks[c]) {
                    this.flags &= ~this.flagmasks[c];
                    this.save(d || "/")
                } else {
                    return false
                }
            };
            this.save = function (c) {
                com.nature.Cookie.set("bitstate", this.flags, 365, c);
                return true
            }
        };
    return a
})(jQuery);
com.nature.Icb = (function (b) {
    var a = function (d, c) {
            this.pm = com.nature.PageManager;
            this.isOpen = false;
            this.datapack = c;
            this.mediaId = d;
            this.currentversion = 112;
            this.enabled = this.isPluginEnabled();
            this.$content;
            this.$container;
            this.$icbObj;
            this.lastLeft, this.lastTop;
            this.dimensions = {
                smallWidth: b("#content").width(),
                smallHeight: (this.enabled && this.currentversion > 0) ? 400 : 70,
                largeWidth: b("#constrain").width(),
                largeHeight: 700
            };
            this.status = ""
        };
    a.prototype = {
        init: function () {
            var c = this;
            this.build();
            b("span[class^=icb-" + this.mediaId.match(/\d+/)[0] + "-]").each(function () {
                $span = b(this);
                $span.linkify();
                $span.find("a").click(function (d) {
                    c.show(b(this))
                })
            })
        },
        build: function () {
            var c = this;
            var d = "<div id='icb-container-" + this.mediaId + "' class='popup box icb-box'>";
            d += "<div class='title-bar cleared'>";
            d += "<button class='close'>close</button>";
            if (this.enabled && this.currentversion > 0) {
                d += "<button class='grow'>Enlarge</button>"
            }
            if (this.enabled && this.currentversion > 0) {
                d += "<button class='shrink' style='display:none;'>Shrink</button></div>"
            }
            d += "<div class='arrow arrow-bottom'></div>";
            d += "<div class='popup-content'></div></div>";
            b("body").append(d);
            this.$container = b("#icb-container-" + this.mediaId);
            this.$content = this.$container.find(".popup-content");
            this.$container.find("button.close").click(function () {
                c.hide()
            });
            this.$container.find("button.grow").click(function () {
                c.grow()
            });
            this.$container.find("button.shrink").click(function () {
                c.shrink()
            })
        },
        show: function (d) {
            var c = this;
            if (!this.icbObj) {
                this.icbObj = document.getElementById("ActiveIcmCtl-" + this.mediaId)
            }
            this.$content.css({
                width: this.dimensions.smallWidth,
                height: this.dimensions.smallHeight
            });
            if (this.icbObj) {
                this.icbObj.width = (this.dimensions.smallWidth - 20) + "px";
                this.icbObj.height = this.dimensions.smallHeight + "px"
            }
            this.$container.find("button.grow").show();
            this.$container.find("button.shrink").hide();
            this.isOpen = true;
            this.position(d);
            if (b("#ActiveIcmCtl-" + this.mediaId).size() == 0) {
                setTimeout(function () {
                    c.composeICBdocument(d.parent().attr("class"), d)
                }, 100)
            } else {
                this.runCommand(d)
            }
        },
        runCommand: function (d) {
            var c = this;
            if (this.icbObj) {
                setTimeout(function () {
                    if ("RunCommands" in c.icbObj) {
                        c.icbObj.RunCommands(d.parent().attr("data-cmd"))
                    } else {
                        setTimeout(arguments.callee, 200)
                    }
                }, 100);
                this.pm.trackClick({
                    action: "iSee_view",
                    source: d.closest(".expanded, .collapsed").attr("id"),
                    destination: d.parent().attr("data-cmd")
                })
            } else {
                this.pm.trackClick({
                    action: "iSee_view",
                    source: d.closest(".expanded, .collapsed").attr("id"),
                    destination: "iSee download request"
                })
            }
        },
        runFirstCommand: function (d, f) {
            var e = document.getElementById("ActiveIcmCtl-" + f);
            var c = b("." + d);
            setTimeout(function () {
                e.RunCommands(c.attr("data-cmd"))
            }, 100);
            com.nature.PageManager.trackClick({
                action: "iSee_view",
                source: c.closest(".expanded, .collapsed").attr("id"),
                destination: c.attr("data-cmd")
            })
        },
        hide: function () {
            this.$container.css({
                visibility: "hidden"
            });
            this.isOpen = false
        },
        position: function (g) {
            var l = b(window).height();
            var c = b(window).width();
            var k, f;
            var e, h, d;
            var j = this.$container.find(".arrow");
            (g.offset().top - b(document).scrollTop()) < (l / 2) ? k = "below" : k = "above";
            (g.offset().left - b("#constrain").offset().left) < (b("#constrain").width() / 2) ? f = "right" : f = "left";
            e = g.offset().left;
            if (f == "left") {
                e -= this.dimensions.smallWidth - (g.width() / 2);
                j.addClass("arrow-right")
            } else {
                j.removeClass("arrow-right")
            }
            this.lastLeft = e;
            h = g.offset().top - this.dimensions.smallHeight - (this.$container.height() - this.$content.height()) - g.height() - j.height();
            if (k == "below") {
                h += this.$container.height() + (3 * j.height()) + g.height();
                j.swapClasses("arrow-bottom", "arrow-top")
            } else {
                j.swapClasses("arrow-top", "arrow-bottom")
            }
            this.lastTop = h;
            d = this.$content.width();
            this.$container.css({
                left: e,
                top: h,
                width: d,
                visibility: "visible"
            })
        },
        grow: function () {
            newTop = this.$content.offset().top - (this.dimensions.largeHeight - this.dimensions.smallHeight) - 10;
            if (newTop < 0) {
                newTop = 0
            }
            if (b(document).height() < (newTop + this.dimensions.largeHeight)) {
                newTop = b(document).height() - this.dimensions.largeHeight
            }
            this.$content.css({
                width: this.dimensions.largeWidth,
                height: this.dimensions.largeHeight
            });
            this.$container.css({
                top: newTop,
                left: b("#constrain").offset().left - 10,
                width: this.$content.width()
            });
            this.icbObj.width = (this.dimensions.largeWidth - 20) + "px";
            this.icbObj.height = this.dimensions.largeHeight + "px";
            this.$container.find("button.grow").hide();
            this.$container.find("button.shrink").show()
        },
        shrink: function () {
            this.$content.css({
                width: this.dimensions.smallWidth,
                height: this.dimensions.smallHeight
            });
            this.$container.css({
                top: this.lastTop,
                left: this.lastLeft,
                width: this.$content.width()
            });
            this.icbObj.width = (this.dimensions.smallWidth - 20) + "px";
            this.icbObj.height = this.dimensions.smallHeight + "px";
            this.$container.find("button.grow").show();
            this.$container.find("button.shrink").hide()
        },
        composeICBdocument: function (d, c) {
            if (this.enabled && this.currentversion > 0) {
                this.insertDatapackObject(d)
            } else {
                if (this.enabled && !this.currentversion && navigator.userAgent.indexOf("Safari") != -1) {
                    this.$content.html("<p>You appear to have installed the Molsoft plugin but are running Safari in 64-bit mode which is not supported. Please run Safari in 32-bit mode as <a href='http://www.molsoft.com/install-acticm-mac.html'>detailed here</a> and reload the page.</p>")
                } else {
                    this.$content.html("<p>In order to view this media you need to download the ActiveICM plugin from the <a href='http://www.molsoft.com/getbrowser.cgi?product=activeicm&act=list'>MolSoft downloads page</a> and restart your browser.</p><p>Please Note: this plugin may not work for versions of Mac OS X before 10.6</p>");
                    this.pm.trackClick({
                        action: "iSee_view",
                        source: c.closest(".expanded, .collapsed").attr("id"),
                        destination: "iSee download request"
                    })
                }
            }
        },
        isPluginEnabled: function () {
            if (b.browser.msie) {
                var f;
                try {
                    f = new ActiveXObject("ActiveIcm.ActiveIcmCtl")
                } catch (d) {}
                if (f) {
                    this.currentversion = f.pluginVersion
                }
                return !!f
            } else {
                if (navigator.plugins && navigator.plugins.length > 0) {
                    for (i = 0; i < navigator.plugins.length; i++) {
                        if (navigator.plugins[i].name.toLowerCase().indexOf("molsoft") != -1) {
                            var c = document.createElement("div");
                            c.setAttribute("style", "visibility:hidden");
                            c.innerHTML = "<object id='icbObjectVersion' type='application/x-molsoft-icb' width='0%' height='0%'></object>";
                            b("body").append(c);
                            this.currentversion = document.getElementById("icbObjectVersion").pluginVersion;
                            b("#icbObjectVersion").parent().remove();
                            return true
                        }
                    }
                }
                return false
            }
        },
        insertDatapackObject: function (c) {
            if (this.currentVersion <= 111) {
                this.$content.html('<object id="ActiveIcmCtl-' + this.mediaId + '" type="application/x-molsoft-icb" data="' + this.datapack + '" width="100%" height="100%" ></object>')
            } else {
                this.$content.html('<object id="ActiveIcmCtl-' + this.mediaId + '" type="application/x-molsoft-icb" width="' + this.dimensions.smallWidth + '" height="' + this.dimensions.smallHeight + '"><param name="projectFile" value="' + this.datapack + '" /><param name="onLoad" value="icbInit(\'' + c + "','" + this.mediaId + "')\"</object>")
            }
            this.icbObj = document.getElementById("ActiveIcmCtl-" + this.mediaId)
        },
        detectOS: function () {
            var d = "other";
            var c = navigator.userAgent.toLowerCase();
            if (c.indexOf("windows") != -1) {
                d = "windows"
            }
            if (c.indexOf("mac") != -1) {
                d = "mac"
            }
            if (c.indexOf("linux") != -1) {
                d = "linux"
            }
            return d
        }
    };
    return a
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.slideshow = (function (c) {
    var b = null,
        d = null,
        a = null;
    a = function (e) {
        return parseInt(e.split("-").pop(), 10)
    };
    b = function (p) {
        var y = p.find("ol.slides"),
            t = y.find("a.frame"),
            j = y.children("li"),
            w = j.find("img.slide"),
            m = null,
            z = null,
            f = null,
            v = null,
            A = null,
            x = null,
            e = null,
            s = null,
            k = null,
            h = null,
            q = null,
            o = null,
            r = null,
            B = null,
            l = null,
            g = null,
            u = j.filter("li:first").attr("id"),
            n = j.length;
        z = function () {
            var C = 0;
            j.each(function () {
                C = Math.max(C, c(this).outerHeight())
            });
            return C
        };
        f = function () {
            var C = 0;
            w.each(function () {
                C = Math.max(C, c(this).height())
            });
            return C
        };
        v = function () {
            var D = p.width(),
                E = D - 40,
                C = 0;
            w.each(function () {
                var F = c(this),
                    G = parseInt(F.css("maxWidth"), 10);
                if (isNaN(G)) {
                    G = Number.MAX_VALUE
                }
                F.css({
                    width: Math.min(E, G)
                })
            });
            C = f();
            t.css({
                width: D - 20,
                height: C
            });
            w.each(function () {
                var F = c(this);
                F.css({
                    marginTop: (C - F.height()) / 2
                })
            });
            y.css("height", z())
        };
        A = function () {
            var D = null,
                F = null,
                G = "",
                E, C;
            G = '<div class="nav cleared"><nav><ol class="pagination"><li class="prev inactive"><a href="javascript:;">Previous</a></li>';
            j.each(function (I) {
                var H = c(this);
                G += "<li" + ((I === 0) ? ' class="current"' : "") + '><a href="#' + H.attr("id") + '" title="' + H.find("img.slide").attr("alt") + '">' + (I + 1) + "</a></li>"
            });
            G += '<li class="next"><a href="javascript:;">Next</a></li></ol>';
            G += '<div class="controls"><span class="position">1/' + n + '</span> <a href="javascript:;" class="lightbox">Fullscreen</a></div></nav></div>';
            D = c(G);
            F = D.find("ol.pagination");
            F.click(function (J) {
                var H = c(J.target),
                    I = H.closest("li");
                if (!H.is("a")) {
                    return true
                }
                if (I.hasClass("inactive") || I.hasClass("current")) {
                    return false
                }
                if (I.hasClass("next") || I.hasClass("prev")) {
                    if (I.hasClass("next")) {
                        q()
                    } else {
                        o()
                    }
                } else {
                    B(a(H.attr("href")), H)
                }
                return false
            });
            x(1, F);
            D.hide();
            p.append(D);
            D.fadeIn("fast");
            return F
        };
        x = function (E, D) {
            var H = null,
                F = 0,
                G = 0,
                C = 0;
            if (n > 5) {
                H = D.children("li");
                F = typeof E == "number" ? E : E.index();
                G = Math.max(1, F - 2);
                C = Math.min(n + 1, F + 3);
                if (C - G < 5) {
                    if (F < 3) {
                        C += 3 - F
                    } else {
                        G -= 2 - (n - F)
                    }
                }
                H.slice(1, n + 1).css({
                    display: "none"
                });
                H.slice(G, C).css({
                    display: "inline"
                })
            }
        };
        l = function () {
            var E = a(u) + 1,
                D = u.replace(/-[0-9]+$/, "-" + E),
                C = p.find("#" + D);
            if (C.length) {
                q()
            } else {
                B(1)
            }
        };
        q = function () {
            return r(1)
        };
        o = function () {
            return r(-1)
        };
        r = function (C) {
            return B(a(u) + C)
        };
        B = function (D, C) {
            var G = null,
                F = null,
                E = null;
            $next = null;
            if (D < 1) {
                D = 1
            } else {
                if (D > n) {
                    D = n
                }
            }
            G = u.replace(/-[0-9]+$/, "-" + D);
            if (G === u) {
                return false
            }
            E = p.find("#" + u);
            $next = p.find("#" + G);
            E.find("img.slide").fadeOut(200, function () {
                E.removeClass("current");
                u = G;
                $next.addClass("current");
                $next.find("img.slide").hide().fadeIn(200)
            });
            p.find("span.position").html(D + "/" + n);
            m.find("li.current").removeClass("current");
            if (!C) {
                C = m.find('a[href*="#' + G + '"]')
            }
            F = C.closest("li");
            x(F, m);
            F.addClass("current");
            if (D === 1) {
                m.find("li.prev").addClass("inactive")
            } else {
                m.find("li.prev.inactive").removeClass("inactive")
            }
            if (D === n) {
                m.find("li.next").addClass("inactive")
            } else {
                m.find("li.next.inactive").removeClass("inactive")
            }
            return false
        };
        h = function () {
            p.find("li.current").find("a.frame").get(0).focus()
        };
        e = function (C) {
            if (com.nature.Keys.LEFT === C.keyCode) {
                o();
                h()
            } else {
                if (com.nature.Keys.RIGHT === C.keyCode) {
                    q();
                    h()
                }
            }
        };
        s = function () {
            c(document).bind("keyup.slideshow", e)
        };
        k = function () {
            c(document).unbind("keyup.slideshow")
        };
        this.init = function () {
            p.css("visibility", "visible");
            m = A();
            p.focusin(s).focusout(k);
            p.find("a.lightbox, a.frame").click(function (E) {
                var C = null,
                    D = document.activeElement;
                if (!g) {
                    C = new com.nature.Lightbox();
                    C.subscribe("close", function () {
                        s();
                        if (D) {
                            D.focus()
                        }
                    });
                    g = new com.nature.slideshow.Lightbox(p, C)
                }
                g.open(a(u));
                k();
                return false
            });
            v()
        };
        c(window).hitch("load", function () {
            this.init()
        }, this);
        c(window).resize(v)
    };
    d = function (t, g) {
        var r = null,
            x = null,
            h = null,
            m = null,
            s = null,
            w = null,
            o = null,
            e = null,
            u = null,
            k = null,
            y = null,
            z = null,
            v = null,
            q = 0,
            A = 200,
            n = 200,
            l = 200,
            f = 54,
            p = 3,
            j = 7;
        u = function () {
            var G = r.width(),
                C = 0,
                D = 0,
                B = 0,
                E = 0,
                F = null;
            h.each(function () {
                var H = c(this),
                    I = H.find("img.slide"),
                    J = I.attr("data-full-width") / I.attr("data-full-height");
                width = I.width(), height = width / J;
                I.height(height);
                D = Math.max(D, I.width());
                B = Math.max(B, height);
                E = Math.max(E, H.outerHeight())
            });
            x.css({
                height: E
            });
            h.each(function () {
                var H = c(this),
                    I = (B - H.find("img.slide").height()) / 2;
                H.css({
                    left: (G - H.width()) / 2
                });
                H.find("div.frame").css({
                    paddingTop: I,
                    height: B - I
                })
            });
            r.find("div.meta").css({
                width: D
            });
            o.css({
                left: ((G - D) / 2) - 50,
                height: B
            });
            e.css({
                left: ((G - D) / 2) + D,
                height: B
            });
            C = ((f + p) * Math.min(j, q)) - p;
            s.css({
                left: (G - C) / 2,
                width: C
            });
            m.css({
                visibility: "visible",
                width: (q * (f + p))
            });
            $leftButton.css({
                left: ((G - C) / 2) - 25
            });
            $rightButton.css({
                left: ((G - C) / 2) + s.outerWidth()
            });
            z(r.find("li.current"));
            g.redraw()
        };
        y = function (B) {
            return B.css({
                opacity: 0,
                visibility: "visible",
                display: "block"
            })
        };
        z = function (C) {
            var B = (!C.hasClass("slide")) ? C.find("img.slide") : C;
            c("#zoomer").css("visibility", "hidden");
            if (B.width() < B.attr("data-full-width")) {
                B.addpowerzoom()
            }
        };
        this.automove = function () {
            var D = a(v) + 1,
                C = v.replace(/-[0-9]+$/, "-" + D),
                B = r.find("#" + C);
            if (B.length) {
                this.next()
            } else {
                this.show(1)
            }
        };
        this.next = function () {
            return this.move(1)
        };
        this.prev = function () {
            return this.move(-1)
        };
        this.move = function (C) {
            var B = a(v) + C;
            return this.show(B)
        };
        this.show = function (C) {
            var D = null,
                B = null,
                E = "";
            if (C < 1) {
                C = 1
            } else {
                if (C > q) {
                    C = q
                }
            }
            if (v === "") {
                E = h.filter("li:first").attr("id").replace(/-[0-9]+$/, "-" + C);
                D = c("#" + E);
                setTimeout(function () {
                    y(D).addClass("current").animate({
                        opacity: 1
                    }, n, function () {
                        z(D)
                    });
                    v = E
                }, l)
            } else {
                E = v.replace(/-[0-9]+$/, "-" + C);
                if (v !== E) {
                    D = c("#" + v);
                    B = c("#" + E);
                    D.animate({
                        opacity: 0
                    }, A, function () {
                        v = E;
                        D.removeClass("current")
                    });
                    y(B).animate({
                        opacity: 1
                    }, n, function () {
                        B.addClass("current");
                        z(B)
                    })
                }
            }
            if (C === 1) {
                r.find("a.prev").addClass("inactive")
            } else {
                r.find("a.prev.inactive").removeClass("inactive")
            }
            if (C === q) {
                r.find("a.next").addClass("inactive")
            } else {
                r.find("a.next.inactive").removeClass("inactive")
            }
            m.find("li.current").removeClass("current");
            m.find('a[href*="#' + E + '"]').closest("li").addClass("current");
            this.scrollTo(a(E))
        };
        this.scrollTo = function (C, F) {
            var H = (typeof F === "undefined") ? m.position().left : F,
                G = H / (f + p),
                D = (G * -1) + 1,
                B = D + j - 1,
                E = 0;
            if (C === D && D > 1) {
                E = -1
            } else {
                if (C === B && B < q) {
                    E = 1
                }
            }
            if (C < D || C > B) {
                if (C > B) {
                    E = C - B
                } else {
                    E = (D - C) * -1
                }
            }
            if (E !== 0) {
                m.animate({
                    left: "-=" + E * (f + p)
                }, 150);
                B += E;
                D += E
            }
            if (D == 1) {
                $leftButton.filter("a:not(.inactive)").addClass("inactive")
            } else {
                $leftButton.filter("a.inactive").removeClass("inactive")
            }
            if (B === q) {
                $rightButton.filter("a:not(.inactive)").addClass("inactive")
            } else {
                $rightButton.filter("a.inactive").removeClass("inactive")
            }
        };
        this.init = function () {
            var D = t.find("ol.slides").children("li"),
                F = t.find("h1").text(),
                E = "",
                B, C = "";
            q = D.length;
            D.each(function (J) {
                var H = c(this),
                    I = H.find("img.slide"),
                    K = H.find("h2"),
                    M = H.find("p.caption"),
                    G = H.find("p.credit"),
                    L = H.attr("id").replace(/^s-/, "l-");
                E += '<li id="' + L + '"' + (J === 0 ? ' class="current"' : "") + ">";
                E += '<div class="frame" style="max-width:' + I.attr("data-full-width") + 'px;">';
                E += '<img src="' + I.attr("src").replace(/thumb-img-/, "full-img-") + '" alt="' + I.attr("alt") + '" class="slide" data-full-width="' + I.attr("data-full-width") + '" data-full-height="' + I.attr("data-full-height") + '" width="' + I.attr("data-full-width") + '" height="' + I.attr("data-full-height") + '"/>';
                E += "</div>";
                if (G.length || K.length || M.length) {
                    E += '<div class="meta">'
                }
                if (G.length) {
                    E += '<p class="credit">' + G.html() + "</p>"
                }
                E += '<div class="meta_inner cleared">';
                if (K.length || M.length) {
                    E += '<div class="title_n_caption">'
                }
                if (K.length) {
                    E += "<h2>" + K.html() + "</h2>"
                }
                if (M.length) {
                    E += '<p class="caption">' + M.html() + "</p>"
                }
                if (K.length || M.length) {
                    E += "</div>"
                }
                E += '<p class="position">' + (J + 1) + "/" + q + "</p>";
                E += "</div>";
                if (G.length || K.length || M.length) {
                    E += "</div>"
                }
                E += "</li>";
                C += '<li><a href="#' + L + '">';
                C += '<img src="' + I.attr("src").replace(/((landscape|box)_[0-9]+)|fullsize/, "box_60") + '" alt="Slide ' + (J + 1) + '"/>';
                C += "</a></li>"
            });
            C = '<div class="pagination-window"><ol class="pagination cleared">' + C + "</ol></div>";
            if (q > j) {
                C = '<a href="javascript:;" class="slider left"><span>Left</span></a>' + C + '<a href="javascript:;" class="slider right"><span>Right</span></a>'
            }
            C = '<div class="nav">' + C + "</div>";
            slideshow = '<div class="carosello"><ol class="slides">' + E + "</ol>" + C + "</div>";
            o = c('<a href="javascript:;" class="next-prev prev"><span>Prev</span></a>');
            e = c('<a href="javascript:;" class="next-prev next"><span>Next</span></a>');
            r = c(slideshow);
            x = r.find("ol.slides");
            h = x.children("li");
            $leftButton = r.find("a.left");
            $rightButton = r.find("a.right");
            s = r.find("div.pagination-window");
            m = s.find("ol.pagination");
            w = h.find("img.slide");
            h.css({
                display: "block",
                visibility: "hidden"
            });
            r.append(o).append(e);
            g.subscribe("close", this.unbindEvents, this);
            g.title(F).content(r);
            this.bindEvents()
        };
        this.unbindEvents = function () {
            c(document).unbind("keyup.lightboxSlideshow");
            o.unbind("click");
            e.unbind("click");
            m.unbind("click");
            r.find("a.slider").unbind("click");
            c(window).unbind("resize", u)
        };
        this.bindEvents = function () {
            c(document).hitch("keyup.lightboxSlideshow", function (B) {
                if (com.nature.Keys.LEFT === B.keyCode) {
                    this.prev();
                    return false
                } else {
                    if (com.nature.Keys.RIGHT === B.keyCode) {
                        this.next();
                        return false
                    }
                }
            }, this);
            o.hitch("click", function () {
                this.prev()
            }, this);
            e.hitch("click", function () {
                this.next()
            }, this);
            r.find("a.slider").hitch("click", function (D) {
                var C = c(D.target),
                    E = m.position().left,
                    B = 0;
                if (C.parent().is("a")) {
                    C = C.parent()
                }
                if (C.hasClass("right")) {
                    B = j + (E / (f + p) * -1) + 1;
                    if (B < q) {
                        ++B
                    }
                    if (B <= q) {
                        this.scrollTo(B, E)
                    }
                } else {
                    B = (E / (f + p) * -1);
                    if (B > 1) {
                        --B
                    }
                    if (B > 0) {
                        this.scrollTo(B, E)
                    }
                }
                return false
            }, this);
            m.hitch("click", function (D) {
                var B = c(D.target),
                    C = 0;
                if (B.parent().is("a")) {
                    B = B.parent()
                }
                if (B.is("a")) {
                    C = a(B.attr("href"));
                    this.show(C)
                }
                return false
            }, this);
            c(window).resize(u)
        };
        this.open = function (B) {
            if (!g.isOpen()) {
                g.content("").title("");
                if (r && r.length) {
                    r.hide()
                }
                v = "";
                g.open(function () {
                    this.init();
                    u();
                    this.show(B)
                }, this)
            }
        }
    };
    return {
        Inline: b,
        Lightbox: d
    }
})(jQuery);
com.nature.Lightbox = (function (f) {
    var h = null,
        c = null,
        g = null,
        a = null,
        e = null,
        b = null,
        d = null;
    h = function () {
        c = f("#lightbox");
        if (!c.length) {
            f("body").append('<div id="lightbox"><section><div id="lightbox-shade"></div><div id="lightbox-body" class="fixed"><div id="lightbox-constrain"><div id="lightbox-topbar" class="cleared"><a href="javascript:;" class="close">Close</a></div><div id="lightbox-content"></div></div></div></section></div>');
            c = f("#lightbox");
            g = c.find("#lightbox-shade");
            a = c.find("#lightbox-content");
            e = c.find("#lightbox-body");
            b = c.find("#lightbox-topbar");
            d = c.find("#lightbox-constrain")
        }
        this.redraw();
        c.hide()
    };
    h.prototype = {
        title: function (j) {
            b.find("h1").remove();
            b.prepend("<h1>" + (typeof j == "string" ? j : j.html()) + "</h1>");
            return this
        },
        content: function (j) {
            a.empty();
            a.append(j);
            return this
        },
        handleKeys: function (j) {
            if (com.nature.Keys.ESC === j.keyCode) {
                this.close()
            }
        },
        open: function (l, k) {
            var j = (arguments.length > 2) ? [].slice.call(arguments, 2) : [];
            d.css({
                maxWidth: "none"
            });
            this.hideElements();
            c.show();
            if (typeof l !== "undefined") {
                setTimeout(function () {
                    l.apply(k || null, j)
                }, 100)
            }
            this.redraw();
            f(window).resize(this.redraw);
            b.find("a.close").hitch("click.lightbox", this.close, this);
            f(document).hitch("keyup.lightbox", this.handleKeys, this);
            return this
        },
        close: function () {
            c.hide();
            this.showElements();
            f(window).unbind("resize", this.redraw);
            b.find("a.close").unbind("click.lightbox");
            f(document).unbind("keyup.lightbox");
            if (typeof this._broadcaster !== "undefined") {
                this.notify("close")
            }
            return this
        },
        redraw: function () {
            if (e.outerHeight() > f(window).height()) {
                if (e.hasClass("fixed")) {
                    e.removeClass("fixed")
                }
                e.css({
                    top: 0
                });
                window.scrollTo(0, 0)
            } else {
                if (!e.hasClass("fixed")) {
                    e.addClass("fixed")
                }
                e.css({
                    top: 0
                })
            }
            g.css("height", Math.max(f("body").outerHeight(), e.offset().top + e.outerHeight()))
        },
        hideElements: function () {
            this.setElementsVisibility("hidden")
        },
        showElements: function () {
            this.setElementsVisibility("visible")
        },
        setElementsVisibility: function (j) {
            f("object, embed, iframe, body.ie6 select").filter(function () {
                return f(this).closest("#lightbox-content").length === 0
            }).css({
                visibility: j
            })
        },
        subscribe: function (l, k, j) {
            if (!this.isBroadcaster()) {
                this._broadcaster = new com.nature.Broadcaster()
            }
            this._broadcaster.subscribe(l, k, j)
        },
        unsubscribe: function (l, k, j) {
            if (this.isBroadcaster()) {
                this._broadcaster.unsubscribe(l, k, j)
            }
        },
        notify: function () {
            var j = [].slice.call(arguments);
            if (this.isBroadcaster()) {
                this._broadcaster.notify.apply(this._broadcaster, j)
            }
        },
        isBroadcaster: function () {
            return typeof this._broadcaster !== "undefined"
        },
        isOpen: function () {
            return c.is(":visible")
        }
    };
    return h
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.TabGroup = (function (b) {
    var a = function (c) {
            this.id = c.attr("id");
            this.active = c.find("div.tab-box.active").attr("id");
            this.prev;
            this._el = c;
            this._numTabs = c.find("h3.tab").length
        };
    a.prototype = {
        init: function () {
            this._el.append('<div class="tab-bar"></div>');
            this._redraw();
            b("#" + this.id + " h3.tab").linkify();
            b("#" + this.id + " h3.tab a").hitch("click", this.click, this).ellipsis()
        },
        click: function (d) {
            var c = b(d.target);
            var f = c.parents("div.tab-box").attr("id");
            if (f != this.active) {
                this.switchTo(f)
            }
        },
        switchTo: function (d) {
            if (this.active != d) {
                var c = b("#" + d);
                if (!c.length) {
                    c = this._el.find("div.tab-box:first")
                }
                b("#" + this.active).removeClass("active");
                c.addClass("active");
                this.prev = this.active;
                this.active = d;
                this.notify("switch", this.prev, d)
            }
        },
        getTitle: function () {
            return b("#" + this.active + " h3.tab a").attr("title")
        },
        _redraw: function () {
            var f = b("#" + this.id + " h3.tab");
            var j = f.length;
            var d = this._el.find("div.tab-content").width() + 2;
            var k = Math.floor(d / j);
            var e = k + (d % j);
            var c = 0;
            var g = 0;
            f.each(function () {
                if (j < 3) {
                    var h = Math.round(d / 3)
                } else {
                    var h = (b(this).closest("div.tab-box").hasClass("active")) ? e : k
                }
                g = Math.max(g, b(this).outerHeight());
                b(this).closest("div.tab-box").find("div.tab-content").css("paddingTop", b(this).outerHeight() + 9 + "px");
                b(this).css({
                    left: c + "px",
                    top: 0,
                    width: (h == "auto") ? "auto" : h + "px"
                });
                c += h
            });
            if (j < 3) {
                this._el.find("div.tab-bar").css({
                    height: (g + 6) + "px"
                })
            }
        }
    };
    return a
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.History = (function (b) {
    var a = function () {
            var c = b.browser.msie && (!document.documentMode || document.documentMode < 8);
            var e = "onhashchange" in window && !c;
            var f = null,
                d = null;
            if (c) {
                f = b('<iframe src="javascript:0"/>').css({
                    display: "none"
                }).appendTo(document.body).get(0).contentWindow
            }
            var m = function (n) {
                    n = l(n);
                    if (f) {
                        f.document.open();
                        f.document.close();
                        f.location.hash = n
                    }
                    location.hash = n
                };
            var g = function (n) {
                    if (!n) {
                        n = (f) ? f.location.href : location.href
                    }
                    return l(n.replace(/^.*?#/, ""))
                };
            var l = function (n) {
                    if (n.indexOf("/") !== 0) {
                        n = "/" + n
                    }
                    return n
                };
            var j = function (n) {
                    return n.replace(/^\//, "")
                };
            var k = function () {
                    var n = g();
                    d = setInterval(function () {
                        var o = g();
                        if (o != n) {
                            n = o;
                            if (f) {
                                location.hash = o
                            }
                            b(window).trigger("hashchange")
                        }
                    }, 100)
                };
            var h = function () {
                    if (!f) {
                        clearInterval(d)
                    }
                };
            b.event.special.hashchange = {
                setup: function () {
                    if (e) {
                        return false
                    }
                    k()
                },
                teardown: function () {
                    if (e) {
                        return false
                    }
                    h()
                }
            };
            this.add = m;
            this.getHash = g;
            this.clean = j
        };
    return a
})(jQuery);
com.nature.Article = (function (b) {
    var a = function () {
            var f = new com.nature.History();
            var c = "";
            var e = b("body.ie6").length > 0;
            var d;
            this.init = function () {
                b("h1.toggle, h2.toggle, h3.toggle").linkify().find("a").hitch("click", this.toggle, this);
                if (b("div.article-template").length) {
                    b('a[href*="#"]').liveHitch("click", this.anchorLink, this);
                    b(window).hitch("hashchange", function (g) {
                        this.openAndScrollTo(f.getHash())
                    }, this);
                    if (location.hash) {
                        this.openAndScrollTo(f.getHash(location.href))
                    }
                }
            };
            this.anchorLink = function (m) {
                var l = m.target;
                d = b(l).parents("ul.figure-nav").size() > 0 ? b(l).parents(".figure").attr("id") : b(l).parents("section").find("h1").text().toLowerCase().replace(/\s/g, "-");
                while (l.nodeName.toLowerCase() != "a") {
                    l = l.parentNode
                }
                var g = l.hostname.replace(/:[0-9]+$/, "");
                var h = location.hostname.replace(/:[0-9]+$/, "");
                var j = l.pathname.replace(/^\//, "");
                var k = location.pathname.replace(/^\//, "");
                if (g != h || j != k) {
                    return true
                }
                this.openSection(b(l).attr("href"));
                return false
            };
            this.toggle = function (j) {
                var g = b(j.target);
                var h = g.closest(".expanded, .collapsed");
                if (h.hasClass("expanded")) {
                    if (e) {
                        var k = b(window).scrollTop();
                        this.close(h);
                        setTimeout(function () {
                            window.scrollTo(0, k)
                        }, 50)
                    } else {
                        this.close(h)
                    }
                } else {
                    c = "toggle";
                    this.openSection(h.attr("id"))
                }
                return false
            };
            this.openSection = function (j) {
                var h = f.getHash(j);
                var g = f.getHash();
                if (h != g) {
                    f.add(h)
                } else {
                    this.openAndScrollTo(h)
                }
            };
            this.openAndScrollTo = function (k) {
                var j = f.clean(k);
                if (j.length) {
                    var g = b("#" + j);
                    if (!g.length) {
                        return
                    }
                    var h = g.closest(".expanded, .collapsed");
                    this.open(h);
                    this.highlight(g);
                    if (c != "toggle" || e) {
                        if (e) {
                            if (g.parents("#extranav").length == 0) {
                                setTimeout(function () {
                                    window.scrollTo(0, Math.max(g.offset().top - 10, 0))
                                }, 50)
                            }
                        } else {
                            window.scrollTo(0, Math.max(g.offset().top - 10, 0))
                        }
                        this.notify("scroll", d, g.attr("id"))
                    }
                } else {
                    window.scrollTo(0, 0)
                }
                c = ""
            };
            this.highlight = function (g) {
                var j = null;
                if (!g || !g.length) {
                    return
                }
                if (g.hasClass("section")) {
                    j = g.find("h1.section-heading")
                } else {
                    if (g.hasClass("figure")) {
                        j = g.find("span.legend")
                    } else {
                        j = g.find("h2.toggle, h3.toggle");
                        if (!j.length) {
                            j = g
                        }
                    }
                }
                var h = j.css("backgroundColor");
                if (h == "transparent" || h.match(/rgba *\([0-9]{1,3} *, *[0-9]{1,3} *, *[0-9]{1,3} *, *0 *\)/i)) {
                    h = "#ffffff"
                }
                if (!j.hasClass("scroll-highlight")) {
                    j.addClass("scroll-highlight").colorFade({
                        backgroundColor: h
                    }, {
                        delay: 1000
                    }).bind("fadeComplete", function () {
                        b(this).removeClass("scroll-highlight").removeAttr("style").unbind("fadeComplete")
                    })
                }
            };
            this.open = function (h) {
                var g = typeof h == "string" ? b("#" + h) : h;
                if (g.hasClass("expanded")) {
                    return
                }
                g.swapClasses("collapsed", "expanded");
                this.notify("expand", g.attr("id"))
            };
            this.close = function (h) {
                var g = typeof h == "string" ? b("#" + h) : h;
                if (g.hasClass("collapsed")) {
                    return
                }
                g.swapClasses("expanded", "collapsed");
                this.notify("collapse", g.attr("id"))
            };
            this.getExpandedSections = function () {
                return this.getSections("expanded")
            };
            this.getCollapsedSections = function () {
                return this.getSections("collapsed")
            };
            this.getSections = function (j) {
                var g = ".section";
                if (typeof j != "undefined") {
                    g += "." + j
                }
                var h = [];
                b(g).each(function () {
                    h.push(b(this).attr("id"))
                });
                return h
            }
        };
    return a
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.Highlighter = (function (b) {
    var a = function (k) {
            var g = new com.nature.PopupGroup(true);
            var k = k || "highlighting-tool";
            var e = [];
            var c = this;
            var j = b("a[href*='fig_tab'], p.back a");
            var d = function (l) {
                    return l.replace(/^highlight-/, "")
                };
            var h = function (m) {
                    var l = [m];
                    if (m == "geneprot") {
                        l.push("protein")
                    } else {
                        if (m == "compound") {
                            l.push("chemical")
                        }
                    }
                    return l
                };
            var f = function (m, l) {
                    return m + " span.highlight-" + l.join(", " + m + " span.highlight-")
                };
            this.init = function (u) {
                var m = [],
                    s = ["#acknowledgments", "#author-information", "#author-contributions", "h1", "h2", "h3", "h4", "h5", "b", "span.legend", "div.figures-at-a-glance", ".section-nav", "#additional-information"];
                b("#" + k + ' input[type="checkbox"]').hitch("click", this.toggle, this).each(function () {
                    var n = b(this);
                    var w = d(n.attr("id"));
                    m.push(w);
                    e = e.concat(h(w));
                    if (n.is(":checked")) {
                        c.show(w)
                    } else {
                        n.attr({
                            checked: true
                        });
                        c.toggle({
                            target: n.get(0)
                        })
                    }
                });
                var t = [],
                    v = [];
                for (var q = 0; m[q]; ++q) {
                    v = h(m[q]);
                    for (var p = 0; s[p]; ++p) {
                        t.push(f(s[p], v))
                    }
                }
                b(t.join(", ")).attr("class", "");
                var o = f("body", e);
                var r = b(o);
                if (r.length) {
                    r.each(function () {
                        b(this).attr("title", "Click on the name for more options").attr("tabIndex", "0")
                    });
                    this.initPopups("body");
                    var l = m.length;
                    while (l--) {
                        if (!r.filter("span.highlight-" + h(m[l]).join(", span.highlight-")).length) {
                            b("#" + k).find("#highlight-" + m[l] + ", .highlight-" + m[l]).hide()
                        }
                    }
                    b("#" + k).slideDown("normal")
                }
            };
            this.show = function (l) {
                b(f("body", h(l))).removeClass("highlight-off")
            };
            this.hide = function (l) {
                b(f("body", h(l))).addClass("highlight-off")
            };
            this.toggle = function (o) {
                var m = b(o.target);
                var l = b("#" + k + ' label[for="' + m.attr("id") + '"]').attr("class");
                var n = d(m.attr("id"));
                if (m.is(":checked")) {
                    this.show(n)
                } else {
                    this.hide(n)
                }
                this.notify("toggle", l, m.is(":checked"))
            };
            this.initPopups = function (o) {
                var n = com.nature.PageManager;
                var o = o || "body";
                var l = f(o, e);
                var m = function (r) {
                        var t = function (u) {
                                return u.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, "-")
                            };
                        var p = r.parents(".section").find("h1");
                        if (p.length) {
                            return t(p.text())
                        }
                        var s = ["fig_tab", "compound"];
                        for (var q = 0; s[q]; ++q) {
                            if (document.location.href.indexOf("/" + s[q] + "/") != -1) {
                                return s[q] + "-page"
                            }
                        }
                        return r.closest("[id]").attr("id")
                    };
                b(l).each(function () {
                    var u = this.getAttribute("data-related-id");
                    var q = this.className;
                    var s = b("#" + u);
                    var r = s.clone();
                    var t = m(b(this));
                    r.find("h3").remove();
                    var p = new com.nature.Popup(b(this), r);
                    p = b.extend(p, new com.nature.Broadcaster());
                    if (s.find("h3").length) {
                        p.title(s.find("h3").html())
                    }
                    p.init();
                    p.subscribe("open", g.onOpen, g);
                    p.subscribe("close", g.onClose, g);
                    p.subscribe("open", function () {
                        var v = /highlight-([a-z]+)/i.exec(q.replace("highlight-off", ""))[1];
                        n.trackAnnotation(this, u, v, t)
                    }, n);
                    g.add(p)
                })
            }
        };
    return a
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.PageManager = {
    _cookie: com.nature.Cookie,
    _path: document.location.href.replace(/^https?:\/\/[^\/]+/i, ""),
    saveSectionState: function (a, b) {
        this._cookie.set("expsec", b.getExpandedSections().join("|"), null, this._path);
        this._cookie.set("colsec", b.getCollapsedSections().join("|"), null, this._path)
    },
    saveTabState: function (b, a) {
        this._cookie.set(a.id, a.active)
    },
    restoreTabState: function (a) {
        var b = this._cookie.get(a.id);
        if (b) {
            a.switchTo(b)
        }
    },
    trackAuthorPopup: function (b, a) {
        var c = {
            action: "author",
            source: a.id
        };
        this.track(c)
    },
    trackSharePopup: function (b, a) {
        var c = {
            action: "share",
            source: a.id.replace(/\d/g, "")
        };
        this.track(c)
    },
    trackCompoundPopup: function (b, a) {
        var c = {
            action: "compound",
            source: a.id
        };
        this.track(c)
    },
    trackSections: function (a, d, c, b) {
        var e = {
            action: a,
            source: c,
            destination: b || ""
        };
        this.track(e)
    },
    trackTabs: function (a, d, c, b) {
        var e = {
            action: a,
            source: c,
            destination: b
        };
        this.track(e)
    },
    trackNavigation: function (a, d, c, b) {
        var e = {
            action: "internal_navigation",
            source: c,
            destination: b
        };
        this.track(e)
    },
    trackHighlighting: function (d, a, b, c) {
        var b = b.replace(/-+/g, "_") + "s";
        var e = {
            action: (c) ? b : "un" + b
        };
        this.track(e)
    },
    trackFigureBrowser: function (b, a, d) {
        var c = {
            action: "figure_preview_scroll",
            direction: d > 0 ? "next" : "prev"
        };
        this.track(c)
    },
    trackFigurePopup: function (a, b, d) {
        var c = {
            action: "figure_preview",
            source: d
        };
        this.track(c)
    },
    trackPrint: function () {
        this.track({
            action: "print"
        })
    },
    trackAuthorListDisplay: function (a) {
        this.track({
            action: a + "_author_list"
        })
    },
    trackAnnotation: function (b, e, a, c) {
        var d = {
            action: "annotation_" + a,
            source: c,
            type: e
        };
        this.track(d)
    },
    trackClick: function (a) {
        this.track(a)
    },
    track: function (d) {
        var a = window._tag_ens || window._tag;
        if (com.nature.Configuration.get("webtrendsEnabled") == "true" && typeof a !== "undefined") {
            var c = ["action", "source", "destination", "type", "direction"];
            var f = c.length;
            while (f--) {
                if (!(c[f] in d)) {
                    d[c[f]] = ""
                }
            }
            if (!d.dl) {
                d.dl = "51"
            }
            if (!d.ndl) {
                d.ndl = "51"
            }
            var b = [];
            for (var e in d) {
                b.push("WT." + e);
                b.push(d[e])
            }
            a.dcsMultiTrack.apply(a, b)
        }
    },
    toString: function () {
        return "[object com.nature.PageManager]"
    }
};
com = com || {};
com.nature = com.nature || {};
com.nature.FigureBrowser = (function (b) {
    b.fn.reverse = [].reverse;
    var a = function (u, e) {
            var m = e || {},
                p = u.attr("id") || "figure-browser";
            var g = null,
                z = null,
                o = this;
            var h = {
                width: b("#content").width(),
                height: 120
            };
            var v = {
                width: h.width - 60,
                height: h.height,
                left: 30,
                right: 30
            };
            var r = null,
                f = 0,
                c = 0,
                d = 0,
                y = m.thumbSpacing || 10;
            var t = function () {
                    h.width = b("#content").width();
                    v.width = h.width - v.left - v.right;
                    z.css({
                        width: v.width + "px",
                        left: v.left + "px"
                    })
                };
            var s = function (B) {
                    var C = B.attr("src");
                    var A = C.substring(C.lastIndexOf("/") + 1);
                    return A.substring(0, A.lastIndexOf(".")).replace(/\./g, "-")
                };
            var j = function (A) {
                    return p + "-preview-" + s(A)
                };
            var x = function (A) {
                    return p + "-thumb-" + s(A)
                };
            var k = function () {
                    if (f === 0) {
                        u.find("a.nav.left:not(.inactive)").addClass("inactive").attr("tabindex", "-1")
                    } else {
                        u.find("a.nav.left.inactive").removeClass("inactive").removeAttr("tabindex")
                    }
                    if (v.width > d || Math.abs(v.width - (f + d)) < 1) {
                        u.find("a.nav.right:not(.inactive)").addClass("inactive").attr("tabindex", "-1")
                    } else {
                        u.find("a.nav.right.inactive").removeClass("inactive").removeAttr("tabindex")
                    }
                };
            var q = function (B) {
                    var C = f + B.closest("li").position().left;
                    var A = C + B.data("thumbWidth");
                    if (A > v.width) {
                        return A - v.width
                    } else {
                        if (C < 0) {
                            return C
                        }
                    }
                    return 0
                };
            var w = function (A) {
                    if (A != 0) {
                        f -= A;
                        g.animate({
                            left: f + "px"
                        }, "fast");
                        o.notify("scrolled", A)
                    }
                    k()
                };
            var n = function () {
                    if (r) {
                        b("#" + r).fadeOut("fast");
                        b("#" + r.replace("-preview-", "-thumb-")).parent().focus();
                        o.notify("close", r);
                        r = null
                    }
                };
            var l = function (A) {
                    n();
                    var H = j(A),
                        D = b("#" + H);
                    var C = A.data("previewWidth");
                    var B = false;
                    o.notify("popupShown", H);
                    if (!D.length) {
                        var E = b("<img />").attr({
                            src: A.attr("src"),
                            alt: A.attr("alt"),
                            title: A.attr("title"),
                            "class": A.attr("class"),
                            width: A.data("previewWidth"),
                            height: A.data("previewHeight")
                        });
                        var G = A.closest("li");
                        var F = '<div id="' + H + '" class="box no-padding figure-preview cleared">';
                        F += '<figure><figcaption><span class="legend cleared">' + G.find("span.legend").html();
                        if (b("body.ie6").length > 0) {
                            F += '<button class="close" title="close">x</button>'
                        } else {
                            F += '<button class="close" title="close">close</button>'
                        }
                        F += "</span></figcaption>";
                        F += '<div class="fig"></div><div class="description">';
                        F += com.nature.Truncator.truncate(G.find("div.description").html(), 250);
                        if ((G.find("div.larger").length) && ((com.nature.Configuration.get("isLoggedIn") == "yes") || (com.nature.Configuration.get("articleLevel") == "0"))) {
                            F += G.find("div.larger").html()
                        } else {
                            if ((com.nature.Configuration.get("isLoggedIn") == "no") && (com.nature.Configuration.get("articleLevel") !== "0")) {
                                var L = com.nature.Configuration.get("siteName") || "";
                                F += '<p class="subLinks"><a href="/register/' + L + '">Purchase Article</a><a href="https://secure.nature.com/subscribe/' + L + '">Subscribe</a><a href="/foxtrot/svc/login" class="login" title="Login to nature.com">Login</a>'
                            }
                        }
                        F += "</div></figure></div>";
                        var D = b(F);
                        E.bind("imgpreload", function (M) {
                            D.find("div.fig").append(b(this))
                        });
                        D.find("button.close").click(function () {
                            n()
                        });
                        D.find("p.fig-link").find("a").click(function () {
                            n()
                        });
                        if (!com.nature.Css.isImplemented("boxShadow")) {
                            D.addClass("popup-highlight")
                        }
                        b("body").append(D);
                        o.notify("created", H)
                    }
                    var K = Math.max(Math.min((C * 2), 725), 300);
                    if (K < C + 40) {
                        K = C + 40
                    }
                    var J = Math.max(5, z.offset().left + ((v.width - K) / 2));
                    var I = z.offset().top - ((D.outerHeight() - z.outerHeight()) / 2);
                    if (D.find("img.fig").length == 0) {
                        I -= A.data("previewHeight") / 2
                    }
                    D.css({
                        width: K + "px",
                        left: J + "px",
                        top: I + "px"
                    });
                    D.find("span.legend").css({
                        width: (K - 40) + "px"
                    });
                    D.fadeIn("fast");
                    D.find("button.close").focus();
                    r = H
                };
            this.init = function () {
                g = u.find("ol:first");
                z = g.wrap('<div class="thumbs masking"></div>').parent();
                g.css("visibility", "visible");
                z.before('<a href="javascript:;" class="nav left inactive" tabindex="-1"><span>left</span></a>').after('<a href="javascript:;" class="nav right"><span>right</span></a>');
                t();
                u.append('<div class="figure-browser-loading"><img src="/view/images/figure_browser_loading.gif" alt="Loading" class="figure-browser-loading-icon"/></div>').find("div.figure-browser-loading").css({
                    width: h.width + "px",
                    height: h.height + "px"
                })
            };
            this.start = function () {
                g.find("img.fig").each(function () {
                    var B = b(this),
                        C = B.width(),
                        E = B.height(),
                        A = C / 2,
                        D = E / 2;
                    B.data("previewWidth", C).data("previewHeight", E).data("thumbWidth", A).data("thumbHeight", D);
                    B.css({
                        width: A + "px",
                        height: D + "px"
                    });
                    B.closest("li").css({
                        left: c + "px",
                        top: "10px"
                    });
                    B.attr("id", x(B));
                    c += (A + y)
                }).wrap('<a href="javascript:;"></a>').parent().click(function () {
                    l(b(this).find("img.fig"))
                }).focus(function () {
                    var A = q(b(this).find("img.fig"));
                    w(A)
                });
                u.find("a.nav").click(function (A) {
                    if (g.is(":animated") || b(this).hasClass("inactive")) {
                        return false
                    }
                    n();
                    var B = 0;
                    if (b(this).hasClass("left")) {
                        g.find("img.fig").reverse().each(function () {
                            B = q(b(this));
                            if (B < (b(this).width() * -1)) {
                                return false
                            }
                        })
                    } else {
                        g.find("img.fig").each(function () {
                            B = q(b(this));
                            if (B > b(this).width()) {
                                return false
                            }
                        })
                    }
                    w(B)
                });
                d = c - y;
                k();
                b(window).bind("resize", function () {
                    t();
                    k()
                });
                setTimeout(function () {
                    u.find("img.figure-browser-loading-icon").animate({
                        top: "-32px",
                        opacity: 0.5
                    }, "medium", function () {
                        u.find("div.figure-browser-loading").fadeOut("fast")
                    })
                }, 10)
            }
        };
    return a
})(jQuery);
var com = com || {};
com.nature = com.nature || {};
com.nature.ArticleSetup = (function (a) {
    var b = function () {
            this.isAbstract = a('meta[name="abstract"]').attr("content") == "yes";
            this.PageManager = com.nature.PageManager;
            this.highlighter = null
        };
    b.prototype = {
        initTabBoxes: function () {
            var c = this.PageManager;
            a("#extranav div.tab-group").closest("div.box").css({
                border: 0,
                padding: 0
            });
            a("#extranav div.tab-group").each(function () {
                var d = new com.nature.TabGroup(a(this));
                d = a.extend(d, new com.nature.Broadcaster());
                d.init();
                d.subscribe("switch", c.saveTabState, c);
                d.subscribe("switch", c.trackTabs, c);
                c.restoreTabState(d)
            })
        },
        initHighlighting: function () {
            this.highlighter = new com.nature.Highlighter();
            this.highlighter = a.extend(this.highlighter, new com.nature.Broadcaster());
            this.highlighter.init();
            this.highlighter.subscribe("toggle", this.PageManager.trackHighlighting, this.PageManager)
        },
        initBookmarking: function () {
            var d = this.PageManager;
            var e = a("#toggle-bookmarking-links");
            if (e.length) {
                var c = new com.nature.Popup(e.linkify().find("a"), a("#bookmarking-links").addClass("bookmarking-popup"), {
                    hasArrow: false,
                    position: "below"
                });
                c.title("Bookmark &amp; Share");
                c = a.extend(c, new com.nature.Broadcaster());
                c.init();
                c.subscribe("open", d.trackSharePopup, d)
            }
        },
        initDeliveryServices: function () {
            var d = this.PageManager;
            var e = a(".toggle-delivery-services");
            if (e.length) {
                var c = new com.nature.Popup(e.linkify(), a(".document-delivery").addClass("delivery-popup"), {
                    hasArrow: false,
                    position: "below"
                });
                c.title("Available document delivery services");
                c = a.extend(c, new com.nature.Broadcaster());
                c.init();
                c.subscribe("open", d.trackSharePopup, d)
            }
        },
        initAuthors: function () {
            var f = function (r, n) {
                    var m = function (x) {
                            var u = x.attr("href").replace(/^[^#]*#/, ""),
                                w = "author-" + u,
                                y = "",
                                z = null,
                                A = null,
                                v = null,
                                s = "",
                                t = k.get(w);
                            if (t) {
                                return t
                            }
                            y = '<div id="' + w + '">';
                            A = a("#" + u).clone();
                            A.find("h3").remove();
                            $img = A.find("img.photo").remove();
                            s = A.html();
                            z = x.closest("li").children("sup").children("a");
                            if (z.length) {
                                y += '<ul class="author-affiliations';
                                if ($img.length) {
                                    y += ' author-img-wrapper" style="background-image:url(' + $img.attr("src") + ')">'
                                } else {
                                    y += '">'
                                }
                                z.each(function () {
                                    var C = this.href.replace(/^[^#]*/, ""),
                                        B = a(C);
                                    if (B.length) {
                                        y += "<li>" + B.find("h3").html() + "</li>"
                                    } else {
                                        B = a(C + "-c");
                                        if (B.length) {
                                            y += "<li>" + B.html() + "</li>"
                                        }
                                    }
                                });
                                y += "</ul>"
                            }
                            if (!com.nature.StringUtils.isEmpty(s)) {
                                y += '<div class="author-details">' + s + "</div>"
                            }
                            y += "</div>";
                            t = new com.nature.Popup(x, a(y), {
                                id: w
                            });
                            t = a.extend(t, new com.nature.Broadcaster());
                            t.init(true);
                            t.subscribe("open", k.onOpen, k);
                            t.subscribe("close", k.onClose, k);
                            k.add(t);
                            return t
                        };
                    var q = r.children("li"),
                        l = null,
                        p = null,
                        o = false;
                    if (q.length > 1) {
                        l = q.filter("li:gt(" + n + ")");
                        o = l.length != 0;
                        if (o) {
                            p = q.filter("li:eq(" + n + ")")
                        }
                        e(q, l, p)
                    }
                    r.bind("click", function (y) {
                        var v = a(y.target).closest("a"),
                            z = null,
                            A = "",
                            x = false,
                            s = false,
                            u = null,
                            t = null,
                            w = null;
                        if (!v.length) {
                            return false
                        }
                        if (v.parent().hasClass("group-name")) {
                            return true
                        }
                        z = v.get(0);
                        A = v.attr("class") || "";
                        x = A.indexOf("collapsed") != -1;
                        s = A.indexOf("expanded") != -1;
                        if (s || x) {
                            while (z.hasChildNodes()) {
                                z.removeChild(z.firstChild)
                            }
                            if (x) {
                                l.css({
                                    display: "inline"
                                });
                                p.find("span.comma").css({
                                    display: "inline"
                                });
                                v.removeClass("collapsed").addClass("expanded");
                                z.appendChild(document.createTextNode("Show fewer authors"));
                                h.trackAuthorListDisplay("expand")
                            } else {
                                l.each(function () {
                                    var C = "author-" + a(this).find("a").attr("href").replace(/^[^#]*#/, ""),
                                        B = k.get(C);
                                    if (B && B.isOpen) {
                                        B.close();
                                        return false
                                    }
                                });
                                l.hide();
                                p.find("span.comma").hide();
                                v.removeClass("expanded").addClass("collapsed");
                                w = document.createElement("i");
                                w.appendChild(document.createTextNode("et al."));
                                z.appendChild(w);
                                h.trackAuthorListDisplay("collapse")
                            }
                        } else {
                            m(v).toggle(y)
                        }
                        y.stopPropagation();
                        return false
                    })
                };
            var e = function (n, m, l) {
                    n.filter("li.last-in-group, li:last").each(function () {
                        var o = a(this);
                        o.addClass("no-comma");
                        o.prev("li").addClass("no-comma");
                        if (!o.hasClass("group-with-authors")) {
                            o.find('a.name, a[href*="#group-"]').before("&amp; ")
                        }
                    });
                    n.filter("li:not(.no-comma)").children('a.name, a[href*="#group-"]').after('<span class="comma">,</span>');
                    if (!m.length) {
                        return
                    }
                    m.hide();
                    l.find("span.comma").hide();
                    n.parent().append('<li class="authors-toggle"><a href="javascript:;" class="collapsed"><i>et al.</i></a></li>')
                };
            var h = this.PageManager,
                k = new com.nature.PopupGroup(true),
                j = [],
                d = a("#content.article-template ul.authors:first").remove();
            f(d, com.nature.Configuration.get("authorLimit") || 24);
            a("h1.article-heading").after(d);
            a("ul.authors:gt(0)").each(function () {
                f(a(this), 5)
            });
            a("#author-extra-details").find("p.email").each(function () {
                j.push(a(this).html().replace(/>contact\s+/i, ">"))
            });
            if (j.length) {
                var g = '<div id="author-correspondence-popup"><ul class="corresponding-authors">';
                g += "<li>" + j.join("</li><li>") + "</li>";
                g += "</ul></div>";
                var c = new com.nature.Popup(a("#author-links").find('a[href$="#corres-auth"]'), a(g));
                c = a.extend(c, new com.nature.Broadcaster());
                c.init();
                c.subscribe("open", k.onOpen, k);
                c.subscribe("close", k.onClose, k);
                k.add(c)
            }
        },
        initCommenting: function () {
            var f = null;
            var d = function (h) {
                    var g = a(h.target).closest("li[id]");
                    if (!g) {
                        return
                    }
                    e();
                    g.find("p.moderation").first().css({
                        position: "static",
                        left: "0"
                    });
                    f = g.attr("id")
                };
            var e = function () {
                    if (f) {
                        a("#" + f).find("p.moderation").css({
                            position: "absolute",
                            left: "-9999em"
                        })
                    }
                    f = null
                };
            a("#comments ol.comments").mouseover(d).mouseout(e).find("a").focus(d);
            if (!a("#comment-preview").length) {
                return
            }
            var c = true;
            a("#comment-help h3").linkify().find("a").click(function () {
                if (c) {
                    a("#comment-help ul").slideDown("fast");
                    a(this).addClass("collapse")
                } else {
                    a("#comment-help ul").slideUp("fast");
                    a(this).removeClass("collapse")
                }
                c = !c
            });
            a("#comment-body").preview("#comment-preview dd", "textile").grow()
        },
        initCompoundMouseovers: function (e) {
            var d = this.PageManager;
            var c = e ? e + ' a[class*="compound-ref-"]' : 'a[class*="compound-ref-"]';
            a(c).each(function () {
                var g = /compound-ref-[-a-z0-9]+/i.exec(this.className)[0];
                var f = new com.nature.Popup(a(this), a("#" + g), {
                    event: "mouseover",
                    hasTitle: false,
                    hasCloseButton: false
                });
                f = a.extend(f, new com.nature.Broadcaster());
                f.init();
                f.subscribe("open", d.trackCompoundPopup, d)
            })
        },
        initCompoundViewer: function () {
            a(window).load(function () {
                var d = a('#inside-article-compounds ol a[class*="compound-ref-"]');
                var g = 0,
                    f = d.length;
                var c = a("<ol></ol>");
                var h = 0,
                    j = [];
                d.each(function () {
                    var l = "";
                    if (g == 0) {
                        l = "start active"
                    } else {
                        if (g == f - 1) {
                            l = "end"
                        }
                    }++g;
                    var k = /compound-ref-[-a-z0-9]+/i.exec(this.className)[0];
                    var m = a("#" + k);
                    var n = m.outerHeight();
                    h = Math.max(h, n);
                    j.push(n);
                    var o = '<li class="' + l + " cmp-" + g + '">';
                    o += "<figure>";
                    o += '<div class="compound-img">';
                    o += '<a href="' + a(this).attr("href") + '" tabindex="-1">';
                    o += m.html();
                    o += "</a>";
                    o += "</div>";
                    o += '<figcaption class="compound-name">';
                    o += '<a href="' + a(this).attr("href") + '">';
                    o += a(this).html();
                    o += "</a>";
                    o += "</figcaption>";
                    o += "</figure>";
                    o += "</li>";
                    c.append(o)
                });
                a("#inside-article-compounds ol").replaceWith(c);
                var g = 0;
                a("#inside-article-compounds div.compound-img").each(function () {
                    a(this).css({
                        height: h + "px",
                        border: "1px solid #ccc"
                    });
                    a(this).find("img").css({
                        paddingTop: ((h - j[g]) / 2) + "px"
                    });
                    ++g
                });
                if (f > 1) {
                    a("#inside-article-compounds ol").before('<a href="javascript:;" class="prev compound-nav inactive" tabindex="-1"><span>Prev</span></a>');
                    a("#inside-article-compounds ol").after('<a href="javascript:;" class="next compound-nav"><span>Next</span></a>');
                    setTimeout(function () {
                        a("#inside-article-compounds a.compound-nav").css({
                            height: h + "px"
                        })
                    }, 100);
                    a("#inside-article-compounds p.box-footer").prepend('<span class="compound-pos"><span class="index">1</span>/<span class="total">' + f + "</span></span>");
                    var e = false;
                    a("#inside-article-compounds a.compound-nav").click(function () {
                        if (e || a(this).hasClass("inactive")) {
                            return
                        }
                        a("#inside-article-compounds a.compound-nav.inactive").removeClass("inactive").removeAttr("tabindex");
                        $current = a("#inside-article-compounds li.active");
                        if (a(this).hasClass("next")) {
                            $next = $current.next("li");
                            if ($next.hasClass("end")) {
                                a(this).addClass("inactive").attr("tabindex", "-1")
                            }
                        } else {
                            $next = $current.prev("li");
                            if ($next.hasClass("start")) {
                                a(this).addClass("inactive").attr("tabindex", "-1")
                            }
                        }
                        e = true;
                        $current.find("div.compound-img").find("img").fadeOut("fast", function () {
                            $next.find("div.compound-img").find("img").fadeIn("fast", function () {
                                $next.addClass("active");
                                $current.removeClass("active");
                                var k = /cmp-([0-9]+)/.exec($next.get(0).className)[1];
                                a("#inside-article-compounds span.index").html(k);
                                e = false
                            })
                        })
                    })
                }
            })
        },
        initSlideshow: function () {
            a("div.carosello").each(function () {
                var c = new com.nature.slideshow.Inline(a(this))
            })
        },
        initFigureBrowser: function () {
            var e = this.PageManager;
            var d = new com.nature.FigureBrowser(a("div.figure-browser"));
            d = a.extend(d, new com.nature.Broadcaster());
            d.subscribe("scrolled", e.trackFigureBrowser, e);
            d.subscribe("popupShown", e.trackFigurePopup, e);
            d.init();
            var c = this;
            d.subscribe("created", function (f, g, h) {
                c.initCompoundMouseovers("#" + h);
                c.highlighter.initPopups("#" + h)
            });
            d.subscribe("close", function (f, g, h) {
                com.nature.Popups.redraw("close", h)
            });
            a(window).load(function () {
                d.start()
            })
        },
        initReferenceContextLinks: function () {
            var c = this;
            var d = function () {
                    var h = a(this).closest('li[id^="ref"]');
                    var j = h.attr("id");
                    var f = a("#" + j + "-context");
                    if (f.length && f.css("display") != "none") {
                        f.css({
                            display: "none"
                        });
                        a(this).removeClass("collapse").text("Show context")
                    } else {
                        if (f.length) {
                            f.css({
                                display: "block"
                            })
                        } else {
                            var g = "";
                            a('#content a[href$="#' + j + '"]').each(function () {
                                if (a(this).parents("ol.references, div.figure-browser").length) {
                                    return true
                                }
                                var k = com.nature.Truncator.getContextSnippet(a(this).parent().parent(), a(this));
                                g += "<li>" + k + ' <a href="#' + a(this).attr("id") + '" title="Skip to this reference in the article" class="ref-return">in article</a></li>'
                            });
                            g = g.replace(/ id="[^"]+"/ig, "");
                            g = '<ul id="' + j + '-context" class="context">' + g + "</ul>";
                            h.append(g);
                            c.initCompoundMouseovers("#" + j + "-context");
                            c.highlighter.initPopups("#" + j + "-context")
                        }
                        a(this).addClass("collapse").text("Hide context")
                    }
                    c.PageManager.trackClick({
                        action: "context_link",
                        source: j
                    })
                };
            if (!this.isAbstract) {
                var e = a('#references ol.references li[id^="ref"]');
                e.each(function () {
                    if (a('#content a[href$="#' + a(this).attr("id") + '"]').length) {
                        var f = a(this).find("ul");
                        if (!f.length) {
                            a(this).append('<ul class="cleared has-ref-links"></ul>')
                        } else {
                            f.addClass("has-ref-links")
                        }
                    }
                });
                e.find("ul.has-ref-links").append('<li class="show-context-item"><a href="javascript:;">Show context</a></li>').find("li.show-context-item").find("a").click(d)
            }
        },
        initEdsumms: function () {
            a("#edsumm div.full-snippet").each(function () {
                if (a(this).text().length > 200) {
                    a(this).parent().append('<div class="snippet">' + com.nature.Truncator.truncate(a(this).html(), 200) + '</div><a href="javascript:;" class="toggle-bar"><span>Toggle</span></a>')
                } else {
                    a(this).css({
                        display: "block"
                    })
                }
            });
            a("#edsumm a.toggle-bar").click(function () {
                var e = a(this).closest("div.editors-summary");
                if (a(this).hasClass("collapse")) {
                    var d = e.find("div.full-snippet").height();
                    var c = e.find("div.snippet").css({
                        display: "block",
                        visibility: "hidden"
                    }).height();
                    e.find("div.full-snippet").css({
                        height: d + "px",
                        visibility: "visible",
                        overflow: "hidden"
                    }).animate({
                        height: c + "px"
                    }, "fast", function () {
                        e.find("div.snippet").css({
                            visibility: "visible"
                        });
                        e.find("div.full-snippet").css({
                            display: "none"
                        })
                    });
                    a(this).removeClass("collapse")
                } else {
                    var d = e.find("div.snippet").height();
                    var c = e.find("div.full-snippet").css({
                        display: "block",
                        visibility: "hidden",
                        height: "auto"
                    }).height();
                    e.find("div.snippet").css({
                        display: "none"
                    });
                    e.find("div.full-snippet").css({
                        height: d + "px",
                        visibility: "visible",
                        overflow: "hidden"
                    }).animate({
                        height: c + "px"
                    }, "fast");
                    a(this).addClass("collapse")
                }
            })
        },
        initBoxes: function () {
            a(".box-internal").each(function () {
                if (a(this).text().length > 200) {
                    a(this).append('<a href="javascript:;" class="toggle-bar collapse"><span>Reduce</span></a>')
                } else {
                    a(this).css({
                        display: "block"
                    })
                }
            });
            a(".box-internal a.toggle-bar").click(function () {
                var c = a(this).parent().find(".figure-content");
                if (a(this).hasClass("collapse")) {
                    if (!c.attr("data-startHeight")) {
                        var e = c.height(),
                            d = c.parents("div.content");
                        if (e === 0) {
                            d.addClass("calculateHeights");
                            e = c.height();
                            d.removeClass("calculateHeights")
                        }
                        c.attr("data-startHeight", e)
                    }
                    c.css({
                        overflow: "hidden"
                    }).animate({
                        height: "50px"
                    }, "fast");
                    a(this).removeClass("collapse");
                    a(this).find("span").text("Expand")
                } else {
                    c.animate({
                        height: c.attr("data-startHeight") + "px"
                    }, "fast");
                    a(this).addClass("collapse");
                    a(this).find("span").text("Reduce")
                }
            });
            a(".box-internal a.toggle-bar").click()
        },
        initArticleNavigation: function () {
            var c = new com.nature.Article();
            c = a.extend(c, new com.nature.Broadcaster());
            c.init();
            c.subscribe("expand", this.PageManager.saveSectionState, this.PageManager);
            c.subscribe("expand", this.PageManager.trackSections, this.PageManager);
            c.subscribe("expand", function (d, e, f) {
                com.nature.Popups.redraw("open", f)
            });
            c.subscribe("collapse", this.PageManager.saveSectionState, this.PageManager);
            c.subscribe("collapse", this.PageManager.trackSections, this.PageManager);
            c.subscribe("collapse", function (d, e, f) {
                com.nature.Popups.redraw("close", f)
            });
            c.subscribe("scroll", this.PageManager.trackNavigation, this.PageManager)
        },
        initToggleAll: function () {
            a("span.toggleAll").linkify();
            a("span.toggleAll a").addClass("toggleAll collapsed");
            a("a.toggleAll").click(function () {
                if (a(this).hasClass("expanded")) {
                    a(this).removeClass("expanded").addClass("collapsed").text("Expand all");
                    a(this).parent().parent().find(".sub-section").each(function () {
                        a(this).removeClass("expanded").addClass("collapsed")
                    })
                } else {
                    a(this).removeClass("collapsed").addClass("expanded").text("Collapse all");
                    a(this).parent().parent().find(".sub-section").each(function () {
                        a(this).removeClass("collapsed").addClass("expanded")
                    })
                }
            })
        },
        initClickTrack: function () {
            var c = this.PageManager;
            var d = {
                "print-link": {
                    action: "print",
                    source: "print-link"
                },
                "next-article": {
                    action: "next_article",
                    source: com.nature.Configuration.get("articleDoi"),
                    destination: com.nature.Configuration.get("nextDoi"),
                    dl: "1",
                    ndl: "1"
                },
                "prev-article": {
                    action: "prev_article",
                    source: com.nature.Configuration.get("articleDoi"),
                    destination: com.nature.Configuration.get("prevDoi"),
                    dl: "1",
                    ndl: "1"
                },
                "top-content": {
                    dl: "1",
                    ndl: "1"
                }
            };
            a(".track").click(function () {
                var e = d[a(this).attr("id")] || null;
                if (e) {
                    c.trackClick(e)
                }
            });
            a("#top-content ol a").click(function () {
                var e = d["top-content"];
                e.ti, e.destination = "link:" + a(this).text();
                e.action = a(this).parents(".tab-box").attr("id");
                e.source = com.nature.Configuration.get("articleDoi");
                c.trackClick(e)
            })
        },
        initBeanData: function () {
            var c = a("#bakedbean a");
            setTimeout(function () {
                a("#bakedbean .inner").slideDown(1000)
            }, 100);
            c.click(function (d) {
                a("#bakedbean .inner").slideToggle(1000);
                a("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: 0
                }, 500);
                d.preventDefault()
            })
        },
        initPlaceholders: function () {
            a("form").initPlaceholders()
        },
        initReshighCarousel: function () {
            var d = 4;
            var c = true;
            a(".reshigh-carousel").each(function () {
                var j = a(this),
                    p = a(".container", j),
                    k = a("> ul", p),
                    l = a("> li", k),
                    h = (this.className.match(/show-(\d)/) || [d]).pop();
                if (l.length <= h) {
                    l.width(Math.floor(p.width() / l.length));
                    return
                } else {
                    j.addClass("active")
                }
                var f = a('<a href="javascript:;" title="Scroll Left" class="left"><span></span></a>').prependTo(j),
                    n = a('<a href="javascript:;" title="Scroll Right" class="right"><span></span></a>').appendTo(j),
                    o = Math.floor(p.width() / h) + 1,
                    e, g;
                var m = {
                    left: function (s) {
                        var r = (parseInt(k.css("left")) || 0) - e;
                        a(".reshigh-carousel .left").show();
                        var q = -(parseInt(k.css("left")) / e) + d;
                        if (q >= l.length) {
                            r += e
                        } else {
                            a(".reshigh-carousel .right").show()
                        }
                        if (q + 1 >= l.length) {
                            a(".reshigh-carousel .right").hide()
                        }
                        if (s) {
                            k.animate({
                                left: r - 1
                            }, function () {
                                c = true
                            })
                        } else {
                            k.css("left", r);
                            c = true
                        }
                    },
                    right: function (r) {
                        var q = (parseInt(k.css("left")) || 0) + e;
                        a(".reshigh-carousel .right").show();
                        if (q >= 0) {
                            q = 0;
                            a(".reshigh-carousel .left").hide()
                        } else {
                            a(".reshigh-carousel .left").show()
                        }
                        k.animate({
                            left: q + 1
                        }, function () {
                            c = true
                        })
                    },
                    click: function (q) {
                        return function (r) {
                            if (c) {
                                c = false;
                                m[q](true)
                            }
                            r.preventDefault()
                        }
                    },
                    init: function () {
                        var r = k.find("li.current").index();
                        for (var q = 0; q < r; q++) {
                            m.left(false)
                        }
                    }
                };
                a(function () {
                    e = Math.min(o, k.outerWidth());
                    l.css("width", e);
                    k.css("width", l.length * e);
                    f.click(m.click("right"));
                    n.click(m.click("left"));
                    m.init()
                })
            })
        },
        initIcbViewer: function () {
            var d;
            var c = com.nature.Configuration.get("icb");
            a.each(c, function (e, g) {
                var f = new com.nature.Icb(e, g);
                f.init()
            })
        }
    };
    a(".sub-section-heading").linkify();
    a(".sub-section-heading").parent().addClass("collapsed");
    a(".sub-section-heading a").addClass("sub-title");
    a(".sub-section-heading a").click(function () {
        if (a(this).parent().parent().hasClass("collapsed")) {
            a(this).parent().parent().removeClass("collapsed");
            a(this).parent().parent().addClass("expanded");
            return false
        }
        if (a(this).parent().parent().hasClass("expanded")) {
            a(this).parent().parent().removeClass("expanded");
            a(this).parent().parent().addClass("collapsed");
            return false
        }
    });
    return b
})(jQuery);
(function (a) {
    a(function () {
        var b = new com.nature.ArticleSetup();
        b.initTabBoxes();
        b.initHighlighting();
        b.initBookmarking();
        b.initDeliveryServices();
        b.initAuthors();
        b.initCompoundMouseovers();
        b.initCompoundViewer();
        b.initFigureBrowser();
        b.initSlideshow();
        b.initReferenceContextLinks();
        b.initCommenting();
        b.initEdsumms();
        b.initBoxes();
        b.initArticleNavigation();
        b.initToggleAll();
        b.initClickTrack();
        b.initBeanData();
        b.initPlaceholders();
        b.initReshighCarousel();
        b.initIcbViewer()
    })
})(jQuery);
jQuery(window).load(function () {
    setTimeout(function () {
        jQuery("div.ad").each(function () {
            var a = jQuery(this);
            if (a.height() < 30) {
                a.css({
                    display: "none"
                })
            }
        })
    }, 500)
});
jQuery(window).load(function () {
    if (typeof adIdentifier !== "undefined") {
        if (typeof clickTAG !== "undefined") {
            if (clickTAG.indexOf(adIdentifier) >= 0) {
                com.nature.Cookie.set(adKeyword, "shown", 365, "/")
            }
        } else {
            var a = jQuery("div.ad a").attr("href");
            if (a.indexOf(adIdentifier) >= 0) {
                com.nature.Cookie.set(adKeyword, "shown", 365, "/")
            }
        }
        var b = "#" + adIdentifier;
        if (jQuery(b).length) {
            com.nature.Cookie.set(adKeyword, "shown", 365, "/")
        }
    }
});
(function (a) {
    a(document).ready(function () {
        a("body:not('.js-enabled')").addClass("js-enabled");
        a(".visible.global-message .persistent").text("Minimise this message");
        a(".visible.global-message a.remove").hide();
        a(".minimised.global-message .persistent").html("Find out more<span class='hidden'> about this message</span>");
        a(".visible.global-message .persistent").toggle(function () {
            c();
            a(".message-control").fadeIn("slow");
            return false
        }, function () {
            b();
            a(".message-control").fadeIn("slow");
            return false
        });
        a(".minimised.global-message .persistent").toggle(function () {
            b();
            a(".message-control").fadeIn("slow");
            return false
        }, function () {
            c();
            a(".message-control").fadeIn("slow");
            return false
        });
        a(".minimised.global-message .content h1").clone().insertAfter(".global-message .content").addClass("minimised");

        function c() {
            a(".message-control").hide();
            com.nature.Cookie.set("minimised", "true", 10, "/");
            a(".global-message .content").slideUp("slow", function () {
                a(".global-message").removeClass("visible");
                a(".global-message").addClass("minimised");
                a(".message-control a.remove").show();
                a(".global-message .content h1").clone().insertAfter(".global-message .content").addClass("minimised")
            });
            a(".message-control a.persistent").html("Find out more<span class='hidden'> about this message</span>")
        }
        function b() {
            a(".message-control").hide();
            com.nature.Cookie.set("minimised", "false", 10, "/");
            a(".global-message h1.minimised").remove();
            a(".global-message .content").slideDown("slow");
            a(".message-control a.remove").hide();
            a(".message-control a.persistent").text("Minimise this message");
            a(".global-message").removeClass("minimised");
            a(".global-message").addClass("visible")
        }
    })
})(jQuery);