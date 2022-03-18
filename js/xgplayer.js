window.Player = function(e) { var t = {};

    function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports } return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i)); return r }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 79) }([function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.util = t.PresentationMode = void 0, t.createDom = o, t.hasClass = l, t.addClass = s, t.removeClass = u, t.toggleClass = c, t.findDom = p, t.padStart = d, t.format = f, t.event = g, t.typeOf = h, t.deepCopy = y, t.getBgImage = v, t.copyDom = x, t._setInterval = m, t._clearInterval = b, t.createImgBtn = k, t.isWeiXin = w, t.isUc = _, t.computeWatchDur = E, t.offInDestroy = T, t.on = C, t.once = S, t.getBuffered2 = P, t.checkIsBrowser = O, t.setStyle = L, t.checkWebkitSetPresentationMode = function(e) { return "function" == typeof e.webkitSetPresentationMode }; var r, i = n(7),
        a = (r = i) && r.__esModule ? r : { default: r };

    function o() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            i = document.createElement(e); return i.className = r, i.innerHTML = t, Object.keys(n).forEach((function(t) { var r = t,
                a = n[t]; "video" === e || "audio" === e ? a && i.setAttribute(r, a) : i.setAttribute(r, a) })), i }

    function l(e, t) { return !!e && (e.classList ? Array.prototype.some.call(e.classList, (function(e) { return e === t })) : !!e.className && !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))) }

    function s(e, t) { e && (e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach((function(t) { t && e.classList.add(t) })) : l(e, t) || (e.className += " " + t)) }

    function u(e, t) { e && (e.classList ? t.split(/\s+/g).forEach((function(t) { e.classList.remove(t) })) : l(e, t) && t.split(/\s+/g).forEach((function(t) { var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " ") }))) }

    function c(e, t) { e && t.split(/\s+/g).forEach((function(t) { l(e, t) ? u(e, t) : s(e, t) })) }

    function p() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            t = arguments[1],
            n = void 0; try { n = e.querySelector(t) } catch (r) { 0 === t.indexOf("#") && (n = e.getElementById(t.slice(1))) } return n }

    function d(e, t, n) { for (var r = String(n), i = t >> 0, a = Math.ceil(i / r.length), o = [], l = String(e); a--;) o.push(r); return o.join("").substring(0, i - l.length) + l }

    function f(e) { if (window.isNaN(e)) return ""; var t = d(Math.floor(e / 3600), 2, 0),
            n = d(Math.floor((e - 3600 * t) / 60), 2, 0),
            r = d(Math.floor(e - 3600 * t - 60 * n), 2, 0); return ("00" === t ? [n, r] : [t, n, r]).join(":") }

    function g(e) { if (e.touches) { var t = e.touches[0] || e.changedTouches[0];
            e.clientX = t.clientX || 0, e.clientY = t.clientY || 0, e.offsetX = t.pageX - t.target.offsetLeft, e.offsetY = t.pageY - t.target.offsetTop }
        e._target = e.target || e.srcElement }

    function h(e) { return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0] }

    function y(e, t) { if ("Object" === h(t) && "Object" === h(e)) return Object.keys(t).forEach((function(n) { "Object" !== h(t[n]) || t[n] instanceof Node ? "Array" === h(t[n]) ? e[n] = "Array" === h(e[n]) ? e[n].concat(t[n]) : t[n] : e[n] = t[n] : e[n] ? y(e[n], t[n]) : e[n] = t[n] })), e }

    function v(e) { var t = (e.currentStyle || window.getComputedStyle(e, null)).backgroundImage; if (!t || "none" === t) return ""; var n = document.createElement("a"); return n.href = t.replace(/url\("|"\)/g, ""), n.href }

    function x(e) { if (e && 1 === e.nodeType) { var t = document.createElement(e.tagName); return Array.prototype.forEach.call(e.attributes, (function(e) { t.setAttribute(e.name, e.value) })), e.innerHTML && (t.innerHTML = e.innerHTML), t } return "" }

    function m(e, t, n, r) { e._interval[t] || (e._interval[t] = setInterval(n.bind(e), r)) }

    function b(e, t) { clearInterval(e._interval[t]), e._interval[t] = null }

    function k(e, t, n, r) { var i = o("xg-" + e, "", {}, "xgplayer-" + e + "-img"); if (i.style.backgroundImage = 'url("' + t + '")', n && r) { var a = void 0,
                l = void 0,
                s = void 0;
            ["px", "rem", "em", "pt", "dp", "vw", "vh", "vm", "%"].every((function(e) { return !(n.indexOf(e) > -1 && r.indexOf(e) > -1) || (a = Number(n.slice(0, n.indexOf(e)).trim()), l = Number(r.slice(0, r.indexOf(e)).trim()), s = e, !1) })), i.style.width = "" + a + s, i.style.height = "" + l + s, i.style.backgroundSize = "" + a + s + " " + l + s, i.style.margin = "start" === e ? "-" + l / 2 + s + " auto auto -" + a / 2 + s : "auto 5px auto 5px" } return i }

    function w() { return window.navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1 }

    function _() { return window.navigator.userAgent.toLowerCase().indexOf("ucbrowser") > -1 }

    function E() { for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = [], n = 0; n < e.length; n++)
            if (!(!e[n].end || e[n].begin < 0 || e[n].end < 0 || e[n].end < e[n].begin))
                if (t.length < 1) t.push({ begin: e[n].begin, end: e[n].end });
                else
                    for (var r = 0; r < t.length; r++) { var i = e[n].begin,
                            a = e[n].end; if (a < t[r].begin) { t.splice(r, 0, { begin: i, end: a }); break } if (!(i > t[r].end)) { var o = t[r].begin,
                                l = t[r].end;
                            t[r].begin = Math.min(i, o), t[r].end = Math.max(a, l); break } if (r > t.length - 2) { t.push({ begin: i, end: a }); break } }
                for (var s = 0, u = 0; u < t.length; u++) s += t[u].end - t[u].begin;
        return s }

    function T(e, t, n, r) { e.once(r, (function i() { e.off(t, n), e.off(r, i) })) }

    function C(e, t, n, r) { if (r) e.on(t, n), T(e, t, n, r);
        else { e.on(t, (function r(i) { n(i), e.off(t, r) })) } }

    function S(e, t, n, r) { if (r) e.once(t, n), T(e, t, n, r);
        else { e.once(t, (function r(i) { n(i), e.off(t, r) })) } }

    function P(e) { for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5, n = [], r = 0; r < e.length; r++) n.push({ start: e.start(r) < .5 ? 0 : e.start(r), end: e.end(r) });
        n.sort((function(e, t) { var n = e.start - t.start; return n || t.end - e.end })); var i = []; if (t)
            for (var o = 0; o < n.length; o++) { var l = i.length; if (l) { var s = i[l - 1].end;
                    n[o].start - s < t ? n[o].end > s && (i[l - 1].end = n[o].end) : i.push(n[o]) } else i.push(n[o]) } else i = n; return new a.default(i) }

    function O() { return !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) }

    function L(e, t, n) { var r = e.style; try { r[t] = n } catch (e) { r.setProperty(t, n) } }
    t.PresentationMode = { PIP: "picture-in-picture", INLINE: "inline", FULLSCREEN: "fullscreen" };
    t.util = { createDom: o, hasClass: l, addClass: s, removeClass: u, toggleClass: c, findDom: p, padStart: d, format: f, event: g, typeOf: h, deepCopy: y, getBgImage: v, copyDom: x, setInterval: m, clearInterval: b, createImgBtn: k, isWeiXin: w, isUc: _, computeWatchDur: E, offInDestroy: T, on: C, once: S, getBuffered2: P, checkIsBrowser: O, setStyle: L } }, function(e, t) { e.exports = function(e) { var t = []; return t.toString = function() { return this.map((function(t) { var n = function(e, t) { var n = e[1] || "",
                        r = e[3]; if (!r) return n; if (t && "function" == typeof btoa) { var i = (o = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                            a = r.sources.map((function(e) { return "/*# sourceURL=" + r.sourceRoot + e + " */" })); return [n].concat(a).concat([i]).join("\n") } var o; return [n].join("\n") }(t, e); return t[2] ? "@media " + t[2] + "{" + n + "}" : n })).join("") }, t.i = function(e, n) { "string" == typeof e && (e = [
                [null, e, ""]
            ]); for (var r = {}, i = 0; i < this.length; i++) { var a = this[i][0]; "number" == typeof a && (r[a] = !0) } for (i = 0; i < e.length; i++) { var o = e[i]; "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o)) } }, t } }, function(e, t, n) { var r, i, a = {},
        o = (r = function() { return window && document && document.all && !window.atob }, function() { return void 0 === i && (i = r.apply(this, arguments)), i }),
        l = function(e) { return document.querySelector(e) },
        s = function(e) { var t = {}; return function(e) { if ("function" == typeof e) return e(); if (void 0 === t[e]) { var n = l.call(this, e); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }
                    t[e] = n } return t[e] } }(),
        u = null,
        c = 0,
        p = [],
        d = n(36);

    function f(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n],
                i = a[r.id]; if (i) { i.refs++; for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]); for (; o < r.parts.length; o++) i.parts.push(m(r.parts[o], t)) } else { var l = []; for (o = 0; o < r.parts.length; o++) l.push(m(r.parts[o], t));
                a[r.id] = { id: r.id, refs: 1, parts: l } } } }

    function g(e, t) { for (var n = [], r = {}, i = 0; i < e.length; i++) { var a = e[i],
                o = t.base ? a[0] + t.base : a[0],
                l = { css: a[1], media: a[2], sourceMap: a[3] };
            r[o] ? r[o].parts.push(l) : n.push(r[o] = { id: o, parts: [l] }) } return n }

    function h(e, t) { var n = s(e.insertInto); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var r = p[p.length - 1]; if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), p.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else { if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var i = s(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i) } }

    function y(e) { if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e); var t = p.indexOf(e);
        t >= 0 && p.splice(t, 1) }

    function v(e) { var t = document.createElement("style"); return e.attrs.type = "text/css", x(t, e.attrs), h(e, t), t }

    function x(e, t) { Object.keys(t).forEach((function(n) { e.setAttribute(n, t[n]) })) }

    function m(e, t) { var n, r, i, a; if (t.transform && e.css) { if (!(a = t.transform(e.css))) return function() {};
            e.css = a } if (t.singleton) { var o = c++;
            n = u || (u = v(t)), r = w.bind(null, n, o, !1), i = w.bind(null, n, o, !0) } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) { var t = document.createElement("link"); return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", x(t, e.attrs), h(e, t), t }(t), r = E.bind(null, n, t), i = function() { y(n), n.href && URL.revokeObjectURL(n.href) }) : (n = v(t), r = _.bind(null, n), i = function() { y(n) }); return r(e),
            function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t) } else i() } }
    e.exports = function(e, t) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom"); var n = g(e, t); return f(n, t),
            function(e) { for (var r = [], i = 0; i < n.length; i++) { var o = n[i];
                    (l = a[o.id]).refs--, r.push(l) }
                e && f(g(e, t), t); for (i = 0; i < r.length; i++) { var l; if (0 === (l = r[i]).refs) { for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                        delete a[l.id] } } } }; var b, k = (b = [], function(e, t) { return b[e] = t, b.filter(Boolean).join("\n") });

    function w(e, t, n, r) { var i = n ? "" : r.css; if (e.styleSheet) e.styleSheet.cssText = k(t, i);
        else { var a = document.createTextNode(i),
                o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a) } }

    function _(e, t) { var n = t.css,
            r = t.media; if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
        else { for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n)) } }

    function E(e, t, n) { var r = n.css,
            i = n.sourceMap,
            a = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || a) && (r = d(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"); var o = new Blob([r], { type: "text/css" }),
            l = e.href;
        e.href = URL.createObjectURL(o), l && URL.revokeObjectURL(l) } }, function(e, t, n) { "use strict"; var r = n(24)();
    e.exports = function(e) { return e !== r && null !== e } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(8);

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } var a = { network: { code: 1, msg: "视频下载错误", remark: "只要视频下载错误就使用此类型，无论是video本身的超时还是xhr的分段请求超时或者资源不存在" }, mse: { code: 2, msg: "流追加错误", remark: "追加流的时候如果类型不对、无法被正确解码则会触发此类错误" }, parse: { code: 3, msg: "解析错误", remark: "mp4、hls、flv我们都是使用js进行格式解析，如果解析失败则会触发此类错误" }, format: { code: 4, msg: "格式错误", remark: "如果浏览器不支持的格式导致播放错误" }, decoder: { code: 5, msg: "解码错误", remark: "浏览器解码异常会抛出此类型错误" }, runtime: { code: 6, msg: "语法错误", remark: "播放器语法错误" }, timeout: { code: 7, msg: "播放超时", remark: "播放过程中无法正常请求下一个分段导致播放中断" }, other: { code: 8, msg: "其他错误", remark: "不可知的错误或被忽略的错误类型" } };
    t.default = function e(t, n, o, l, s, u, c, p) { var d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : { line: "", handle: "", msg: "", version: "" },
            f = arguments[9],
            g = arguments[10];
        i(this, e); var h = {}; if (arguments.length > 1) h.playerVersion = r.version, h.errorType = t, h.domain = document.domain, h.duration = o, h.currentTime = n, h.networkState = l, h.readyState = s, h.currentSrc = c, h.src = u, h.ended = p, h.errd = d, h.ex = (a[t] || {}).msg, h.errorCode = f, h.mediaError = g;
        else { var y = arguments[0];
            Object.keys(y).map((function(e) { h[e] = y[e] })), h.ex = (y.type && a[y.type] || {}).msg } return h }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = {};
    Object.defineProperty(r, "device", { get: function() { return r.os.isPc ? "pc" : "mobile" } }), Object.defineProperty(r, "browser", { get: function() { var e = navigator.userAgent.toLowerCase(),
                t = { ie: /rv:([\d.]+)\) like gecko/, firfox: /firefox\/([\d.]+)/, chrome: /chrome\/([\d.]+)/, opera: /opera.([\d.]+)/, safari: /version\/([\d.]+).*safari/ }; return [].concat(Object.keys(t).filter((function(n) { return t[n].test(e) })))[0] || "" } }), Object.defineProperty(r, "os", { get: function() { var e = navigator.userAgent,
                t = /(?:Windows Phone)/.test(e),
                n = /(?:SymbianOS)/.test(e) || t,
                r = /(?:Android)/.test(e),
                i = /(?:Firefox)/.test(e),
                a = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || i && /(?:Tablet)/.test(e),
                o = /(?:iPhone)/.test(e) && !a; return { isTablet: a, isPhone: o, isAndroid: r, isPc: !(o || r || n || a), isSymbian: n, isWindowsPhone: t, isFireFox: i } } }), t.default = r, e.exports = t.default }, function(e, t, n) { "use strict";
    e.exports = function(e) { return null != e } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(); var i = function() {
        function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.bufferedList = t } return r(e, [{ key: "start", value: function(e) { return this.bufferedList[e].start } }, { key: "end", value: function(e) { return this.bufferedList[e].end } }, { key: "length", get: function() { return this.bufferedList.length } }]), e }();
    t.default = i, e.exports = t.default }, function(e) { e.exports = JSON.parse('{"version":"2.31.2"}') }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
        i = function e(t, n, r) { null === t && (t = Function.prototype); var i = Object.getOwnPropertyDescriptor(t, n); if (void 0 === i) { var a = Object.getPrototypeOf(t); return null === a ? void 0 : e(a, n, r) } if ("value" in i) return i.value; var o = i.get; return void 0 !== o ? o.call(r) : void 0 },
        a = f(n(11)),
        o = n(0),
        l = f(n(5)),
        s = f(n(7)),
        u = f(n(4)),
        c = f(n(31)),
        p = f(n(10));
    n(34); var d = n(8);

    function f(e) { return e && e.__esModule ? e : { default: e } }

    function g(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } var h = function(e) {
        function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = g(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); if (n.config = (0, o.deepCopy)({ width: 600, height: 337.5, ignores: [], whitelist: [], lang: (document.documentElement.getAttribute("lang") || navigator.language || "zh-cn").toLocaleLowerCase(), inactive: 3e3, volume: .6, controls: !0, controlsList: ["nodownload"] }, e), n.version = d.version, n.userTimer = null, n.waitTimer = null, n.history = [], n.isProgressMoving = !1, n.root = (0, o.findDom)(document, "#" + n.config.id), n.controls = (0, o.createDom)("xg-controls", "", { unselectable: "on", onselectstart: "return false" }, "xgplayer-controls"), n.config.isShowControl && (n.controls.style.display = "none"), !n.root) { var r = n.config.el; if (!r || 1 !== r.nodeType) return n.emit("error", new u.default({ type: "use", errd: { line: 45, handle: "Constructor", msg: "container id can't be empty" }, vid: n.config.vid })), console.error("container id can't be empty"), !1, g(n, !1);
                n.root = r } if ((0, o.addClass)(n.root, "xgplayer xgplayer-" + l.default.device + " xgplayer-nostart xgplayer-pause " + (n.config.controls ? "" : "xgplayer-no-controls")), n.root.appendChild(n.controls), n.config.fluid ? (n.root.style["max-width"] = "100%", n.root.style.width = "100%", n.root.style.height = "0", n.root.style["padding-top"] = 100 * n.config.height / n.config.width + "%", n.video.style.position = "absolute", n.video.style.top = "0", n.video.style.left = "0") : (n.config.width && ("number" != typeof n.config.width ? n.root.style.width = n.config.width : n.root.style.width = n.config.width + "px"), n.config.height && ("number" != typeof n.config.height ? n.root.style.height = n.config.height : n.root.style.height = n.config.height + "px")), n.config.execBeforePluginsCall && n.config.execBeforePluginsCall.forEach((function(e) { e.call(n, n) })), n.config.closeI18n || t.install(p.default.name, p.default.method), n.config.controlStyle && "String" === (0, o.typeOf)(n.config.controlStyle)) { var i = n;
                fetch(i.config.controlStyle, { method: "GET", headers: { Accept: "application/json" } }).then((function(e) { e.ok && e.json().then((function(e) { for (var t in e) e.hasOwnProperty(t) && (i.config[t] = e[t]);
                        i.pluginsCall() })) })).catch((function(e) { console.log("Fetch错误:" + e) })) } else n.pluginsCall();
            n.config.controlPlugins && t.controlsRun(n.config.controlPlugins, n), n.ev.forEach((function(e) { var t = Object.keys(e)[0],
                    r = n[e[t]];
                r && n.on(t, r) })), ["focus", "blur"].forEach((function(e) { n.on(e, n["on" + e.charAt(0).toUpperCase() + e.slice(1)]) })); var a = n; return n.mousemoveFunc = function() { a.emit("focus"), a.config.closeFocusVideoFocus || a.video.focus() }, n.root.addEventListener("mousemove", n.mousemoveFunc), n.playFunc = function() { a.emit("focus"), a.config.closePlayVideoFocus || a.video.focus() }, a.once("play", n.playFunc), n.getVideoSize = function() { if (this.video.videoWidth && this.video.videoHeight) { var e = a.root.getBoundingClientRect(); "auto" === a.config.fitVideoSize ? e.width / e.height > this.video.videoWidth / this.video.videoHeight ? a.root.style.height = this.video.videoHeight / this.video.videoWidth * e.width + "px" : a.root.style.width = this.video.videoWidth / this.video.videoHeight * e.height + "px" : "fixWidth" === a.config.fitVideoSize ? a.root.style.height = this.video.videoHeight / this.video.videoWidth * e.width + "px" : "fixHeight" === a.config.fitVideoSize && (a.root.style.width = this.video.videoWidth / this.video.videoHeight * e.height + "px") } }, a.once("loadeddata", n.getVideoSize), setTimeout((function() { n.emit("ready"), n.isReady = !0 }), 0), n.config.videoInit && (0, o.hasClass)(n.root, "xgplayer-nostart") && n.start(), a.config.rotate && (a.on("requestFullscreen", n.updateRotateDeg), a.on("exitFullscreen", n.updateRotateDeg)), a.once("destroy", (function e() { a.root.removeEventListener("mousemove", a.mousemoveFunc), a.off("destroy", e) })), n } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "attachVideo", value: function() { var e = this;
                this.video && 1 === this.video.nodeType && this.root.insertBefore(this.video, this.root.firstChild), setTimeout((function() { e.emit("complete"), e.danmu && "function" == typeof e.danmu.resize && e.danmu.resize() }), 1) } }, { key: "start", value: function() { var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.url; if (this.video) { var n = this;
                    t && "" !== t ? (this.canPlayFunc = function() { n.off("canplay", n.canPlayFunc); var e = n.video.play();
                        void 0 !== e && e && e.then((function() { n.emit("autoplay started") })).catch((function() { n.emit("autoplay was prevented"), (0, o.addClass)(n.root, "xgplayer-is-autoplay") })) }, "Array" !== (0, o.typeOf)(t) ? "String" === (0, o.typeOf)(t) && t.indexOf("blob:") > -1 && t === this.video.src || (this.video.src = t) : t.forEach((function(t) { e.video.appendChild((0, o.createDom)("source", "", { src: "" + t.src, type: "" + (t.type || "") })) })), this.config.autoplay && (l.default.os.isPhone ? this.canPlayFunc() : this.on("canplay", this.canPlayFunc)), this.config.disableStartLoad || this.video.load(), this.attachVideo()) : this.emit("urlNull") } } }, { key: "reload", value: function() { this.video.load(), this.reloadFunc = function() { var e = this.play();
                    void 0 !== e && e && e.catch((function(e) {})) }, this.once("loadeddata", this.reloadFunc) } }, { key: "destroy", value: function() { var e = this,
                    n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    r = this; for (var a in clearInterval(this.bulletResizeTimer), this._interval) clearInterval(this._interval[a]), this._interval[a] = null;

                function o() { if (this.emit("destroy"), this.video.removeAttribute("src"), this.video.load(), n) { this.root.innerHTML = ""; var e = this.root.className.split(" ");
                        e.length > 0 ? this.root.className = e.filter((function(e) { return e.indexOf("xgplayer") < 0 })).join(" ") : this.root.className = "" } for (var t in this) delete this[t];
                    (0, c.default)(this) }
                this.checkTimer && clearInterval(this.checkTimer), this.waitTimer && clearTimeout(this.waitTimer), this.ev.forEach((function(t) { var n = Object.keys(t)[0],
                        r = e[t[n]];
                    r && e.off(n, r) })), this.loadeddataFunc && this.off("loadeddata", this.loadeddataFunc), this.reloadFunc && this.off("loadeddata", this.reloadFunc), this.replayFunc && this.off("play", this.replayFunc), this.playFunc && this.off("play", this.playFunc), this.getVideoSize && this.off("loadeddata", this.getVideoSize), ["focus", "blur"].forEach((function(t) { e.off(t, e["on" + t.charAt(0).toUpperCase() + t.slice(1)]) })), this.config.keyShortcut && "on" !== this.config.keyShortcut || ["video", "controls"].forEach((function(t) { e[t] && e[t].removeEventListener("keydown", (function(e) { r.onKeydown(e, r) })) })), this.paused ? o.call(this) : (this.pause(), this.once("pause", o)), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this) } }, { key: "replay", value: function() { var e = this._replay; if ((0, o.removeClass)(this.root, "xgplayer-ended"), l.default.browser.indexOf("ie") > -1 && (this.emit("play"), this.emit("playing")), e && e instanceof Function) e();
                else { this.currentTime = 0; var t = this.play();
                    void 0 !== t && t && t.catch((function(e) {})) } } }, { key: "userGestureTrigEvent", value: function(e, t) { var n = this,
                    r = function(e, t) { n.emit(e, t) };
                this.config.userGestureEventMiddleware && "function" == typeof this.config.userGestureEventMiddleware[e] ? this.config.userGestureEventMiddleware[e].call(this, this, e, t, r) : r.call(this, e, t) } }, { key: "pluginsCall", value: function() { var e = this;
                t.plugins.s_i18n && t.plugins.s_i18n.call(this, this); var n = this; if (t.plugins) { var r = this.config.ignores;
                    Object.keys(t.plugins).forEach((function(i) { var a = t.plugins[i];
                        a && "function" == typeof a ? r.some((function(e) { return i === e || i === "s_" + e })) || "s_i18n" === i || (["pc", "tablet", "mobile"].some((function(e) { return e === i })) ? i === l.default.device && setTimeout((function() { n.video && a.call(n, n) }), 0) : a.call(e, e)) : console.warn("plugin name", i, "is invalid") })) } } }, { key: "onFocus", value: function() { var e = this;
                (0, o.hasClass)(this.root, "xgplayer-inactive") && e.emit("controlShow"), (0, o.removeClass)(this.root, "xgplayer-inactive"), e.userTimer && clearTimeout(e.userTimer), e.userTimer = setTimeout((function() { e.emit("blur") }), e.config.inactive) } }, { key: "onBlur", value: function() {!this.config.enablePausedInactive && this.paused || this.ended || this.config.closeInactive || ((0, o.hasClass)(this.root, "xgplayer-inactive") || this.emit("controlHide"), (0, o.addClass)(this.root, "xgplayer-inactive")) } }, { key: "onPlay", value: function() {
                (0, o.addClass)(this.root, "xgplayer-isloading"), (0, o.addClass)(this.root, "xgplayer-playing"), (0, o.removeClass)(this.root, "xgplayer-pause") } }, { key: "onPause", value: function() {
                (0, o.addClass)(this.root, "xgplayer-pause"), this.userTimer && clearTimeout(this.userTimer), this.emit("focus") } }, { key: "onEnded", value: function() {
                (0, o.addClass)(this.root, "xgplayer-ended"), (0, o.removeClass)(this.root, "xgplayer-playing") } }, { key: "onSeeking", value: function() { this.isSeeking = !0, this.onWaiting() } }, { key: "onSeeked", value: function() { var e = this;
                this.once("timeupdate", (function() { e.isSeeking = !1 })), this.waitTimer && clearTimeout(this.waitTimer), (0, o.removeClass)(this.root, "xgplayer-isloading") } }, { key: "onWaiting", value: function() { var e = this;
                e.waitTimer && clearTimeout(e.waitTimer), e.checkTimer && (clearInterval(e.checkTimer), e.checkTimer = null); var t = e.currentTime;
                e.waitTimer = setTimeout((function() {
                    (0, o.addClass)(e.root, "xgplayer-isloading"), e.checkTimer = setInterval((function() { e.currentTime !== t && ((0, o.removeClass)(e.root, "xgplayer-isloading"), clearInterval(e.checkTimer), e.checkTimer = null) }), 1e3) }), 500) } }, { key: "onPlaying", value: function() { this.paused || (this.isSeeking = !1, this.waitTimer && clearTimeout(this.waitTimer), (0, o.removeClass)(this.root, "xgplayer-isloading xgplayer-nostart xgplayer-pause xgplayer-ended xgplayer-is-error xgplayer-replay"), (0, o.addClass)(this.root, "xgplayer-playing")) } }], [{ key: "install", value: function(e, n) {
                (0, o.checkIsBrowser)() && (t.plugins || (t.plugins = {}), t.plugins[e] || (t.plugins[e] = n)) } }, { key: "installAll", value: function(e) { for (var n = 0; n < e.length; n++) t.install(e[n].name, e[n].method) } }, { key: "use", value: function(e, n) { t.plugins || (t.plugins = {}), t.plugins[e] = n } }, { key: "useAll", value: function(e) { for (var n in e) t.use(e[n].name, e[n].method) } }, { key: "controlsRun", value: function(e, t) { e.forEach((function(e) { e.method.call(t) })) } }]), t }(a.default);
    h.util = o.util, h.sniffer = l.default, h.Errors = u.default, h.XgplayerTimeRange = s.default, t.default = h, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "s_i18n", method: function() { var e = this,
                t = { en: { HAVE_NOTHING: "There is no information on whether audio/video is ready", HAVE_METADATA: "Audio/video metadata is ready ", HAVE_CURRENT_DATA: "Data about the current play location is available, but there is not enough data to play the next frame/millisecond", HAVE_FUTURE_DATA: "Current and at least one frame of data is available", HAVE_ENOUGH_DATA: "The available data is sufficient to start playing", NETWORK_EMPTY: "Audio/video has not been initialized", NETWORK_IDLE: "Audio/video is active and has been selected for resources, but no network is used", NETWORK_LOADING: "The browser is downloading the data", NETWORK_NO_SOURCE: "No audio/video source was found", MEDIA_ERR_ABORTED: "The fetch process is aborted by the user", MEDIA_ERR_NETWORK: "An error occurred while downloading", MEDIA_ERR_DECODE: "An error occurred while decoding", MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/video is not supported", REPLAY: "Replay", ERROR: "Network is offline", PLAY_TIPS: "Play", PAUSE_TIPS: "Pause", PLAYNEXT_TIPS: "Play next", DOWNLOAD_TIPS: "Download", ROTATE_TIPS: "Rotate", RELOAD_TIPS: "Reload", FULLSCREEN_TIPS: "Fullscreen", EXITFULLSCREEN_TIPS: "Exit fullscreen", CSSFULLSCREEN_TIPS: "Cssfullscreen", EXITCSSFULLSCREEN_TIPS: "Exit cssfullscreen", TEXTTRACK: "Caption", PIP: "Pip", MINIPLAYER: "Miniplayer", SCREENSHOT: "Screenshot", LIVE: "LIVE", OFF: "Off", MINIPLAYER_DRAG: "Click and hold to drag", AIRPLAY_TIPS: "Airplay" }, "zh-cn": { HAVE_NOTHING: "没有关于音频/视频是否就绪的信息", HAVE_METADATA: "音频/视频的元数据已就绪", HAVE_CURRENT_DATA: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒", HAVE_FUTURE_DATA: "当前及至少下一帧的数据是可用的", HAVE_ENOUGH_DATA: "可用数据足以开始播放", NETWORK_EMPTY: "音频/视频尚未初始化", NETWORK_IDLE: "音频/视频是活动的且已选取资源，但并未使用网络", NETWORK_LOADING: "浏览器正在下载数据", NETWORK_NO_SOURCE: "未找到音频/视频来源", MEDIA_ERR_ABORTED: "取回过程被用户中止", MEDIA_ERR_NETWORK: "当下载时发生错误", MEDIA_ERR_DECODE: "当解码时发生错误", MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音频/视频格式", REPLAY: "重播", ERROR: "网络连接似乎出现了问题", PLAY_TIPS: "播放", PAUSE_TIPS: "暂停", PLAYNEXT_TIPS: "下一集", DOWNLOAD_TIPS: "下载", ROTATE_TIPS: "旋转", RELOAD_TIPS: "重新载入", FULLSCREEN_TIPS: "进入全屏", EXITFULLSCREEN_TIPS: "退出全屏", CSSFULLSCREEN_TIPS: "进入样式全屏", EXITCSSFULLSCREEN_TIPS: "退出样式全屏", TEXTTRACK: "字幕", PIP: "画中画", MINIPLAYER: "迷你播放器", SCREENSHOT: "截图", LIVE: "正在直播", OFF: "关闭", MINIPLAYER_DRAG: "点击按住可拖动视频", AIRPLAY_TIPS: "隔空播放" }, "zh-hk": { HAVE_NOTHING: "沒有關於音頻/視頻是否就緒的信息", HAVE_METADATA: "音頻/視頻的元數據已就緒", HAVE_CURRENT_DATA: "關於當前播放位置的數據是可用的，但沒有足夠的數據來播放下壹幀/毫秒", HAVE_FUTURE_DATA: "當前及至少下壹幀的數據是可用的", HAVE_ENOUGH_DATA: "可用數據足以開始播放", NETWORK_EMPTY: "音頻/視頻尚未初始化", NETWORK_IDLE: "音頻/視頻是活動的且已選取資源，但並未使用網絡", NETWORK_LOADING: "瀏覽器正在下載數據", NETWORK_NO_SOURCE: "未找到音頻/視頻來源", MEDIA_ERR_ABORTED: "取回過程被用戶中止", MEDIA_ERR_NETWORK: "當下載時發生錯誤", MEDIA_ERR_DECODE: "當解碼時發生錯誤", MEDIA_ERR_SRC_NOT_SUPPORTED: "不支持的音頻/視頻格式", REPLAY: "重播", ERROR: "網絡連接似乎出現了問題", PLAY_TIPS: "播放", PAUSE_TIPS: "暫停", PLAYNEXT_TIPS: "下壹集", DOWNLOAD_TIPS: "下載", ROTATE_TIPS: "旋轉", RELOAD_TIPS: "重新載入", FULLSCREEN_TIPS: "進入全屏", EXITFULLSCREEN_TIPS: "退出全屏", CSSFULLSCREEN_TIPS: "進入樣式全屏", EXITCSSFULLSCREEN_TIPS: "退出樣式全屏", TEXTTRACK: "字幕", PIP: "畫中畫", MINIPLAYER: "迷妳播放器", SCREENSHOT: "截圖", LIVE: "正在直播", OFF: "關閉", MINIPLAYER_DRAG: "點擊按住可拖動視頻", AIRPLAY_TIPS: "隔空播放" }, jp: { HAVE_NOTHING: "オーディオ/ビデオが準備できているか情報がありません", HAVE_METADATA: "オーディオ/ビデオのメタデータは準備できています", HAVE_CURRENT_DATA: "現在の再生位置に関するデータは利用可能ですが、次のフレーム/ミリ秒を再生するのに十分なデータがありません", HAVE_FUTURE_DATA: "現在、少なくとも次のフレームのデータが利用可能です", HAVE_ENOUGH_DATA: "利用可能なデータは再生を開始するのに十分です", NETWORK_EMPTY: "オーディオ/ビデオが初期化されていません", NETWORK_IDLE: "オーディオ/ビデオはアクティブでリソースが選択されていますが、ネットワークが使用されていません", NETWORK_LOADING: "ブラウザーはデータをダウンロードしています", NETWORK_NO_SOURCE: "オーディオ/ビデオ のソースが見つかりません", MEDIA_ERR_ABORTED: "ユーザーによってフェッチプロセスが中止されました", MEDIA_ERR_NETWORK: "ダウンロード中にエラーが発生しました", MEDIA_ERR_DECODE: "デコード中にエラーが発生しました", MEDIA_ERR_SRC_NOT_SUPPORTED: "オーディオ/ビデオ の形式がサポートされていません", REPLAY: "リプレイ", ERROR: "ネットワークの接続に問題が発生しました", PLAY_TIPS: "プレイ", PAUSE_TIPS: "一時停止", PLAYNEXT_TIPS: "次をプレイ", DOWNLOAD_TIPS: "ダウンロード", ROTATE_TIPS: "回転", RELOAD_TIPS: "再読み込み", FULLSCREEN_TIPS: "フルスクリーン", EXITFULLSCREEN_TIPS: "フルスクリーンを終了", CSSFULLSCREEN_TIPS: "シアターモード", EXITCSSFULLSCREEN_TIPS: "シアターモードを終了", TEXTTRACK: "字幕", PIP: "ミニプレーヤー", MINIPLAYER: "ミニプレーヤー", SCREENSHOT: "スクリーンショット", LIVE: "生放送", OFF: "オフ", MINIPLAYER_DRAG: "ボタンを押して働画をドラッグする", AIRPLAY_TIPS: "隔空放送" } };
            Object.defineProperty(e, "lang", { get: function() { return e.config && t[e.config.lang] || t.en }, set: function(e) { "Object" === (0, r.typeOf)(e) && Object.keys(e).forEach((function(n) { t[n] = e[n] })) } }) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
        i = l(n(12)),
        a = n(0),
        o = l(n(4));

    function l(e) { return e && e.__esModule ? e : { default: e } } var s = function() {
        function e(t) { var n = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this._hasStart = !1, this.videoConfig = { controls: !!t.isShowControl, autoplay: t.autoplay, playsinline: t.playsinline, "webkit-playsinline": t.playsinline, "x5-playsinline": t.playsinline, "x5-video-player-type": t["x5-video-player-type"] || t.x5VideoPlayerType, "x5-video-player-fullscreen": t["x5-video-player-fullscreen"] || t.x5VideoPlayerFullscreen, "x5-video-orientation": t["x5-video-orientation"] || t.x5VideoOrientation, airplay: t.airplay, "webkit-airplay": t.airplay, tabindex: 2, mediaType: t.mediaType || "video" }, t.muted && (this.videoConfig.muted = "muted"), t.loop && (this.videoConfig.loop = "loop"); var r = ""; if (this.textTrackShowDefault = !0, t.nativeTextTrack && Array.isArray(t.nativeTextTrack) && (t.nativeTextTrack.length > 0 && !t.nativeTextTrack.some((function(e) { return e.default })) && (t.nativeTextTrack[0].default = !0, this.textTrackShowDefault = !1), t.nativeTextTrack.some((function(e) { if (e.src && e.label && e.default) return r += '<track src="' + e.src + '" ', e.kind && (r += 'kind="' + e.kind + '" '), r += 'label="' + e.label + '" ', e.srclang && (r += 'srclang="' + e.srclang + '" '), r += (e.default ? "default" : "") + ">", !0 })), this.videoConfig.crossorigin = "anonymous"), t.textTrackStyle) { var o = document.createElement("style");
                this.textTrackStyle = o, document.head.appendChild(o); var l = ""; for (var s in t.textTrackStyle) l += s + ": " + t.textTrackStyle[s] + ";"; var u = t.id ? "#" + t.id : t.el.id ? "#" + t.el.id : "." + t.el.className;
                o.sheet.insertRule ? o.sheet.insertRule(u + " video::cue { " + l + " }", 0) : o.sheet.addRule && o.sheet.addRule(u + " video::cue", l) } var c = t.el ? t.el : (0, a.findDom)(document, "#" + t.id),
                p = this.constructor.XgVideoProxy;
            (p && this.videoConfig.mediaType === p.mediaType ? this.video = new p(c, t) : this.video = (0, a.createDom)(this.videoConfig.mediaType, r, this.videoConfig, ""), t.videoStyle && Object.keys(t.videoStyle).forEach((function(e) {
                (0, a.setStyle)(n.video, e, t.videoStyle[e]) })), !this.textTrackShowDefault && r) && (this.video.getElementsByTagName("Track")[0].track.mode = "hidden");
            t.autoplay && (this.video.autoplay = !0, t.autoplayMuted && (this.video.muted = !0)), this.ev = ["play", "playing", "pause", "ended", "error", "seeking", "seeked", "progress", "timeupdate", "waiting", "canplay", "canplaythrough", "durationchange", "volumechange", "ratechange", "loadedmetadata", "loadeddata", "loadstart"].map((function(e) { return t = {}, n = e, r = "on" + e.charAt(0).toUpperCase() + e.slice(1), n in t ? Object.defineProperty(t, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[n] = r, t; var t, n, r })), (0, i.default)(this), this._interval = {}; var d = "0,0",
                f = this,
                g = function(e) { n && ("play" === e ? n.hasStart = !0 : "canplay" === e ? (0, a.removeClass)(n.root, "xgplayer-is-enter") : "waiting" === e ? n.inWaitingStart = (new Date).getTime() : "playing" === e && ((0, a.removeClass)(n.root, "xgplayer-is-enter"), n.inWaitingStart && (n.inWaitingStart = void 0)), "error" === e ? n._onError(e) : n.emit(e, n), n.hasOwnProperty("_interval") && (["ended", "error", "timeupdate"].indexOf(e) < 0 ? ((0, a._clearInterval)(n, "bufferedChange"), (0, a._setInterval)(n, "bufferedChange", (function() { if (this.video && this.video.buffered) { for (var e = [], t = 0, n = this.video.buffered.length; t < n; t++) e.push([this.video.buffered.start(t), this.video.buffered.end(t)]);
                            e.toString() !== d && (d = e.toString(), this.emit("bufferedChange", e)) } }), 200)) : "timeupdate" !== e && (0, a._clearInterval)(n, "bufferedChange"))) },
                h = function(e) { t.videoEventMiddleware && "function" == typeof t.videoEventMiddleware[e] ? t.videoEventMiddleware[e].call(n, n, e, g) : g.call(n, e) };
            this.ev.forEach((function(e) { f.evItem = Object.keys(e)[0]; var t = Object.keys(e)[0];
                f.video.addEventListener(Object.keys(e)[0], h.bind(f, t)) })) } return r(e, [{ key: "_onError", value: function(e) { this.video && this.video.error && this.emit(e, new o.default("other", this.currentTime, this.duration, this.networkState, this.readyState, this.currentSrc, this.src, this.ended, { line: 162, msg: this.error, handle: "Constructor" }, this.video.error.code, this.video.error)) } }, { key: "destroy", value: function() { this.textTrackStyle && this.textTrackStyle.parentNode.removeChild(this.textTrackStyle) } }, { key: "play", value: function() { return this.video.play() } }, { key: "pause", value: function() { this.video.pause() } }, { key: "canPlayType", value: function(e) { return this.video.canPlayType(e) } }, { key: "getBufferedRange", value: function(e) { var t = [0, 0],
                    n = this.video;
                e || (e = n.buffered); var r = n.currentTime; if (e)
                    for (var i = 0, a = e.length; i < a && (t[0] = e.start(i), t[1] = e.end(i), !(t[0] <= r && r <= t[1])); i++); return t[0] - r <= 0 && r - t[1] <= 0 ? t : [0, 0] } }, { key: "proxyOn", value: function(e, t) {
                (0, a.on)(this, e, t, "destroy") } }, { key: "proxyOnce", value: function(e, t) {
                (0, a.once)(this, e, t, "destroy") } }, { key: "hasStart", get: function() { return this._hasStart }, set: function(e) { "boolean" != typeof e || !0 !== e || this._hasStart || (this._hasStart = !0, this.emit("hasstart")) } }, { key: "autoplay", set: function(e) { this.video && (this.video.autoplay = e) }, get: function() { return !!this.video && this.video.autoplay } }, { key: "buffered", get: function() { return this.video ? this.video.buffered : void 0 } }, { key: "buffered2", get: function() { return (0, a.getBuffered2)(this.video.buffered) } }, { key: "crossOrigin", get: function() { return !!this.video && this.video.crossOrigin }, set: function(e) { this.video && (this.video.crossOrigin = e) } }, { key: "currentSrc", get: function() { return this.video ? this.video.currentSrc : void 0 } }, { key: "currentTime", get: function() { return this.video && this.video.currentTime || 0 }, set: function(e) { var t = this;
                ("function" != typeof isFinite || isFinite(e)) && ((0, a.hasClass)(this.root, "xgplayer-ended") ? (this.once("playing", (function() { t.video.currentTime = e })), this.replay()) : this.video.currentTime = e, this.emit("currentTimeChange", e)) } }, { key: "defaultMuted", get: function() { return !!this.video && this.video.defaultMuted }, set: function(e) { this.video && (this.video.defaultMuted = e) } }, { key: "duration", get: function() { return this.config.duration ? this.video ? Math.min(this.config.duration, this.video.duration) : this.config.duration : this.video ? this.video.duration : null } }, { key: "ended", get: function() { return !this.video || (this.video.ended || !1) } }, { key: "error", get: function() { var e = this.video.error; if (!e) return null; var t = [{ en: "MEDIA_ERR_ABORTED", cn: "取回过程被用户中止" }, { en: "MEDIA_ERR_NETWORK", cn: "当下载时发生错误" }, { en: "MEDIA_ERR_DECODE", cn: "当解码时发生错误" }, { en: "MEDIA_ERR_SRC_NOT_SUPPORTED", cn: "不支持音频/视频" }]; return this.lang ? this.lang[t[e.code - 1].en] : t[e.code - 1].en } }, { key: "loop", get: function() { return !!this.video && this.video.loop }, set: function(e) { this.video && (this.video.loop = e) } }, { key: "muted", get: function() { return !!this.video && this.video.muted }, set: function(e) { this.video && (this.video.muted = e) } }, { key: "networkState", get: function() { var e = [{ en: "NETWORK_EMPTY", cn: "音频/视频尚未初始化" }, { en: "NETWORK_IDLE", cn: "音频/视频是活动的且已选取资源，但并未使用网络" }, { en: "NETWORK_LOADING", cn: "浏览器正在下载数据" }, { en: "NETWORK_NO_SOURCE", cn: "未找到音频/视频来源" }]; return this.lang ? this.lang[e[this.video.networkState].en] : e[this.video.networkState].en } }, { key: "paused", get: function() { return (0, a.hasClass)(this.root, "xgplayer-pause") } }, { key: "playbackRate", get: function() { return this.video ? this.video.playbackRate : 1 }, set: function(e) { this.video && (this.video.playbackRate = e) } }, { key: "played", get: function() { return this.video ? this.video.played : void 0 } }, { key: "preload", get: function() { return !!this.video && this.video.preload }, set: function(e) { this.video && (this.video.preload = e) } }, { key: "readyState", get: function() { var e = [{ en: "HAVE_NOTHING", cn: "没有关于音频/视频是否就绪的信息" }, { en: "HAVE_METADATA", cn: "关于音频/视频就绪的元数据" }, { en: "HAVE_CURRENT_DATA", cn: "关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧/毫秒" }, { en: "HAVE_FUTURE_DATA", cn: "当前及至少下一帧的数据是可用的" }, { en: "HAVE_ENOUGH_DATA", cn: "可用数据足以开始播放" }]; return this.lang ? this.lang[e[this.video.readyState].en] : e[this.video.readyState] } }, { key: "seekable", get: function() { return !!this.video && this.video.seekable } }, { key: "seeking", get: function() { return !!this.video && this.video.seeking } }, { key: "src", get: function() { return this.video ? this.video.src : void 0 }, set: function(e) {
                (0, a.hasClass)(this.root, "xgplayer-ended") || this.emit("urlchange", this.video.src), (0, a.removeClass)(this.root, "xgplayer-ended xgplayer-is-replay xgplayer-is-error"), this.video.pause(), this.emit("pause"), this.video.src = e, this.emit("srcChange") } }, { key: "poster", set: function(e) { var t = (0, a.findDom)(this.root, ".xgplayer-poster");
                t && (t.style.backgroundImage = "url(" + e + ")") } }, { key: "volume", get: function() { return this.video ? this.video.volume : 1 }, set: function(e) { this.video && (this.video.volume = e) } }, { key: "fullscreen", get: function() { return (0, a.hasClass)(this.root, "xgplayer-is-fullscreen") || (0, a.hasClass)(this.root, "xgplayer-fullscreen-active") } }, { key: "bullet", get: function() { return !!(0, a.findDom)(this.root, "xg-danmu") && (0, a.hasClass)((0, a.findDom)(this.root, "xg-danmu"), "xgplayer-has-danmu") } }, { key: "textTrack", get: function() { return (0, a.hasClass)(this.root, "xgplayer-is-textTrack") } }, { key: "pip", get: function() { return (0, a.hasClass)(this.root, "xgplayer-pip-active") } }]), e }();
    t.default = s, e.exports = t.default }, function(e, t, n) { "use strict"; var r, i, a, o, l, s, u, c = n(13),
        p = n(30),
        d = Function.prototype.apply,
        f = Function.prototype.call,
        g = Object.create,
        h = Object.defineProperty,
        y = Object.defineProperties,
        v = Object.prototype.hasOwnProperty,
        x = { configurable: !0, enumerable: !1, writable: !0 };
    i = function(e, t) { var n, i; return p(t), i = this, r.call(this, e, n = function() { a.call(i, e, n), d.call(t, this, arguments) }), n.__eeOnceListener__ = t, this }, l = { on: r = function(e, t) { var n; return p(t), v.call(this, "__ee__") ? n = this.__ee__ : (n = x.value = g(null), h(this, "__ee__", x), x.value = null), n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this }, once: i, off: a = function(e, t) { var n, r, i, a; if (p(t), !v.call(this, "__ee__")) return this; if (!(n = this.__ee__)[e]) return this; if ("object" == typeof(r = n[e]))
                for (a = 0; i = r[a]; ++a) i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[a ? 0 : 1] : r.splice(a, 1));
            else r !== t && r.__eeOnceListener__ !== t || delete n[e]; return this }, emit: o = function(e) { var t, n, r, i, a; if (v.call(this, "__ee__") && (i = this.__ee__[e]))
                if ("object" == typeof i) { for (n = arguments.length, a = new Array(n - 1), t = 1; t < n; ++t) a[t - 1] = arguments[t]; for (i = i.slice(), t = 0; r = i[t]; ++t) d.call(r, this, a) } else switch (arguments.length) {
                    case 1:
                        f.call(i, this); break;
                    case 2:
                        f.call(i, this, arguments[1]); break;
                    case 3:
                        f.call(i, this, arguments[1], arguments[2]); break;
                    default:
                        for (n = arguments.length, a = new Array(n - 1), t = 1; t < n; ++t) a[t - 1] = arguments[t];
                        d.call(i, this, a) } } }, s = { on: c(r), once: c(i), off: c(a), emit: c(o) }, u = y({}, s), e.exports = t = function(e) { return null == e ? g(u) : y(Object(e), s) }, t.methods = l }, function(e, t, n) { "use strict"; var r = n(6),
        i = n(14),
        a = n(18),
        o = n(26),
        l = n(27);
    (e.exports = function(e, t) { var n, i, s, u, c; return arguments.length < 2 || "string" != typeof e ? (u = t, t = e, e = null) : u = arguments[2], r(e) ? (n = l.call(e, "c"), i = l.call(e, "e"), s = l.call(e, "w")) : (n = s = !0, i = !1), c = { value: t, configurable: n, enumerable: i, writable: s }, u ? a(o(u), c) : c }).gs = function(e, t, n) { var s, u, c, p; return "string" != typeof e ? (c = n, n = t, t = e, e = null) : c = arguments[3], r(t) ? i(t) ? r(n) ? i(n) || (c = n, n = void 0) : n = void 0 : (c = t, t = n = void 0) : t = void 0, r(e) ? (s = l.call(e, "c"), u = l.call(e, "e")) : (s = !0, u = !1), p = { get: t, set: n, configurable: s, enumerable: u }, c ? a(o(c), p) : p } }, function(e, t, n) { "use strict"; var r = n(15),
        i = /^\s*class[\s{/}]/,
        a = Function.prototype.toString;
    e.exports = function(e) { return !!r(e) && !i.test(a.call(e)) } }, function(e, t, n) { "use strict"; var r = n(16);
    e.exports = function(e) { if ("function" != typeof e) return !1; if (!hasOwnProperty.call(e, "length")) return !1; try { if ("number" != typeof e.length) return !1; if ("function" != typeof e.call) return !1; if ("function" != typeof e.apply) return !1 } catch (e) { return !1 } return !r(e) } }, function(e, t, n) { "use strict"; var r = n(17);
    e.exports = function(e) { if (!r(e)) return !1; try { return !!e.constructor && e.constructor.prototype === e } catch (e) { return !1 } } }, function(e, t, n) { "use strict"; var r = n(6),
        i = { object: !0, function: !0, undefined: !0 };
    e.exports = function(e) { return !!r(e) && hasOwnProperty.call(i, typeof e) } }, function(e, t, n) { "use strict";
    e.exports = n(19)() ? Object.assign : n(20) }, function(e, t, n) { "use strict";
    e.exports = function() { var e, t = Object.assign; return "function" == typeof t && (t(e = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy") } }, function(e, t, n) { "use strict"; var r = n(21),
        i = n(25),
        a = Math.max;
    e.exports = function(e, t) { var n, o, l, s = a(arguments.length, 2); for (e = Object(i(e)), l = function(r) { try { e[r] = t[r] } catch (e) { n || (n = e) } }, o = 1; o < s; ++o) r(t = arguments[o]).forEach(l); if (void 0 !== n) throw n; return e } }, function(e, t, n) { "use strict";
    e.exports = n(22)() ? Object.keys : n(23) }, function(e, t, n) { "use strict";
    e.exports = function() { try { return Object.keys("primitive"), !0 } catch (e) { return !1 } } }, function(e, t, n) { "use strict"; var r = n(3),
        i = Object.keys;
    e.exports = function(e) { return i(r(e) ? Object(e) : e) } }, function(e, t, n) { "use strict";
    e.exports = function() {} }, function(e, t, n) { "use strict"; var r = n(3);
    e.exports = function(e) { if (!r(e)) throw new TypeError("Cannot use null or undefined"); return e } }, function(e, t, n) { "use strict"; var r = n(3),
        i = Array.prototype.forEach,
        a = Object.create,
        o = function(e, t) { var n; for (n in e) t[n] = e[n] };
    e.exports = function(e) { var t = a(null); return i.call(arguments, (function(e) { r(e) && o(Object(e), t) })), t } }, function(e, t, n) { "use strict";
    e.exports = n(28)() ? String.prototype.contains : n(29) }, function(e, t, n) { "use strict"; var r = "razdwatrzy";
    e.exports = function() { return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo")) } }, function(e, t, n) { "use strict"; var r = String.prototype.indexOf;
    e.exports = function(e) { return r.call(this, e, arguments[1]) > -1 } }, function(e, t, n) { "use strict";
    e.exports = function(e) { if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e } }, function(e, t, n) { "use strict"; var r = n(32),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e) { var t, n = arguments[1]; if (r(e), void 0 === n) i.call(e, "__ee__") && delete e.__ee__;
        else { if (!(t = i.call(e, "__ee__") && e.__ee__)) return;
            t[n] && delete t[n] } } }, function(e, t, n) { "use strict"; var r = n(33);
    e.exports = function(e) { if (!r(e)) throw new TypeError(e + " is not an Object"); return e } }, function(e, t, n) { "use strict"; var r = n(3),
        i = { function: !0, object: !0 };
    e.exports = function(e) { return r(e) && i[typeof e] || !1 } }, function(e, t, n) { var r = n(35); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default{background:#000;width:100%;height:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.xgplayer-skin-default *{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.xgplayer-skin-default.xgplayer-rotate-fullscreen{position:absolute;top:0;left:100%;bottom:0;right:0;height:100vw!important;width:100vh!important;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.xgplayer-skin-default.xgplayer-is-fullscreen{width:100%!important;height:100%!important;padding-top:0!important;z-index:9999}.xgplayer-skin-default.xgplayer-is-fullscreen.xgplayer-inactive{cursor:none}.xgplayer-skin-default video{width:100%;height:100%;outline:none}.xgplayer-skin-default .xgplayer-none{display:none}@-webkit-keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadingRotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}@keyframes loadingDashOffset{0%{stroke-dashoffset:236}to{stroke-dashoffset:0}}.xgplayer-skin-default .xgplayer-controls{display:-webkit-flex;display:-moz-box;display:flex;position:absolute;bottom:0;left:0;right:0;height:40px;background-image:linear-gradient(180deg,transparent,rgba(0,0,0,.37),rgba(0,0,0,.75),rgba(0,0,0,.75));z-index:10}.xgplayer-skin-default.xgplayer-inactive .xgplayer-controls,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-progress,.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-time,.xgplayer-skin-default.xgplayer-no-controls .xgplayer-controls,.xgplayer-skin-default.xgplayer-nostart .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer-is-live .xgplayer-controls .xgplayer-live{display:block}.xgplayer-skin-default .xgplayer-live{display:block;font-size:12px;color:#fff;line-height:40px;-webkit-order:1;-moz-box-ordinal-group:2;order:1}.xgplayer-skin-default .xgplayer-icon{display:block;width:40px;height:40px;overflow:hidden;fill:#fff}.xgplayer-skin-default .xgplayer-icon svg{position:absolute}.xgplayer-skin-default .xgplayer-tips{background:rgba(0,0,0,.54);border-radius:1px;display:none;position:absolute;font-family:PingFangSC-Regular;font-size:11px;color:#fff;padding:2px 4px;text-align:center;top:-30px;left:50%;margin-left:-16px;width:auto;white-space:nowrap}.xgplayer-skin-default.xgplayer-mobile .xgplayer-tips{display:none!important}.xgplayer-skin-default .xgplayer-screen-container{display:block;width:100%}", ""]) }, function(e, t) { e.exports = function(e) { var t = "undefined" != typeof window && window.location; if (!t) throw new Error("fixUrls requires window.location"); if (!e || "string" != typeof e) return e; var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/"); return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) { var i, a = t.trim().replace(/^"(.*)"$/, (function(e, t) { return t })).replace(/^'(.*)'$/, (function(e, t) { return t })); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")") })) } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "mobile", method: function() { var e = this,
                t = e.root,
                n = 0,
                i = void 0,
                a = { first: "", second: "" };

            function o(t) { e.video.addEventListener("touchend", (function(t) { e.onElementTouchend(t, e.video) })), e.video.addEventListener("touchstart", (function() { e.isTouchMove = !1 })), e.video.addEventListener("touchmove", (function() { e.isTouchMove = !0 })), e.config.autoplay && e.start() }
            e.onElementTouchend = function(e, o) { this.config.closeVideoPreventDefault || e.preventDefault(), this.config.closeVideoStopPropagation || e.stopPropagation(); var l = this; if ((0, r.hasClass)(t, "xgplayer-inactive") ? l.emit("focus") : l.emit("blur"), !l.config.closeVideoTouch && !l.isTouchMove) { var s = function() { i = setTimeout((function() { if ((0, r.hasClass)(l.root, "xgplayer-nostart")) return !1; if (!l.ended)
                                if (l.paused) { var e = l.play();
                                    void 0 !== e && e && e.catch((function(e) {})) } else l.pause();
                            n = 0 }), 200) };
                    l.config.closeVideoClick || (n++, i && clearTimeout(i), 1 === n ? l.config.enableVideoDbltouch ? a.first = new Date : s() : 2 === n && l.config.enableVideoDbltouch ? (a.second = new Date, Math.abs(a.first - a.second) < 400 ? s() : (a.first = new Date, n = 1)) : n = 0) } }, e.once("ready", o), e.once("destroy", (function t() { e.off("ready", o), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "pc", method: function() { var e = this; if (e.controls && e.video) { var t = e.controls,
                    n = e.root,
                    i = 0,
                    a = void 0;
                e.onElementClick = function(e, t) { this.config.closeVideoPreventDefault || e.preventDefault(), this.config.closeVideoStopPropagation || e.stopPropagation(); var n = this;
                    n.config.closeVideoClick || (i++, a && clearTimeout(a), 1 === i ? a = setTimeout((function() { if ((0, r.hasClass)(n.root, "xgplayer-nostart")) return !1; if (!n.ended)
                            if (n.paused) { var e = n.play();
                                void 0 !== e && e && e.catch((function(e) {})) } else n.pause();
                        i = 0 }), 200) : i = 0) }, e.video.addEventListener("click", (function(t) { e.onElementClick(t, e.video) }), !1), e.onElementDblclick = function(e, n) { this.config.closeVideoPreventDefault || e.preventDefault(), this.config.closeVideoStopPropagation || e.stopPropagation(); if (!this.config.closeVideoDblclick) { var r = t.querySelector(".xgplayer-fullscreen"); if (r) { var i = void 0;
                            document.createEvent ? (i = document.createEvent("Event")).initEvent("click", !0, !0) : i = new Event("click"), r.dispatchEvent(i) } } }, e.video.addEventListener("dblclick", (function(t) { e.onElementDblclick(t, e.video) }), !1), n.addEventListener("mouseenter", o), n.addEventListener("mouseleave", l), t.addEventListener("mouseenter", (function(t) { e.userTimer && clearTimeout(e.userTimer) })), t.addEventListener("mouseleave", (function(t) { e.config.closeControlsBlur || e.emit("focus", e) })), t.addEventListener("click", (function(e) { e.preventDefault(), e.stopPropagation() })), e.once("ready", s), e.once("destroy", (function t() { n.removeEventListener("mouseenter", o), n.removeEventListener("mouseleave", l), e.off("ready", s), e.off("destroy", t) })) }

            function o() { clearTimeout(e.leavePlayerTimer), e.emit("focus", e) }

            function l() { e.config.closePlayerBlur || (e.leavePlayerTimer = setTimeout((function() { e.emit("blur", e) }), e.config.leavePlayerTime || 0)) }

            function s(t) { e.config.autoplay && e.start() } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "start", method: function() { var e = this,
                t = e.root;

            function n() { e.off("canplay", n); var t = e.play();
                void 0 !== t && t && t.catch((function(e) {})) }

            function i() {
                (0, r.hasClass)(t, "xgplayer-nostart") ? ((0, r.removeClass)(t, "xgplayer-nostart"), (0, r.addClass)(t, "xgplayer-is-enter"), "function" == typeof t.contains ? e.video && 1 === e.video.nodeType && !t.contains(e.video) || e.video && 1 !== e.video.nodeType && void 0 === e.video.mediaSource ? (e.once("canplay", n), e.start()) : n() : e.video && 1 === e.video.nodeType && !t.querySelector(this.videoConfig.mediaType) || e.video && 1 !== e.video.nodeType && void 0 === e.video.mediaSource ? (e.once("canplay", n), e.start()) : n()) : e.paused && ((0, r.removeClass)(t, "xgplayer-nostart xgplayer-isloading"), setTimeout((function() { var t = e.play();
                    void 0 !== t && t && t.catch((function(e) {})) }), 10)) }
            e.on("startBtnClick", i), e.once("destroy", (function t() { e.off("startBtnClick", i), e.off("canplay", n), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
        i = o(n(41)),
        a = o(n(42));

    function o(e) { return e && e.__esModule ? e : { default: e } }
    n(43);
    t.default = { name: "s_start", method: function() { var e = this,
                t = e.root,
                n = (0, r.createDom)("xg-start", '<div class="xgplayer-icon-play">' + i.default+'</div>\n                                      <div class="xgplayer-icon-pause">' + a.default+"</div>", {}, "xgplayer-start");

            function o(e) {
                (0, r.addClass)(e.root, "xgplayer-skin-default"), e.config && (e.config.autoplay && !(0, r.isWeiXin)() && !(0, r.isUc)() && (0, r.addClass)(e.root, "xgplayer-is-enter"), e.config.lang && "en" === e.config.lang ? (0, r.addClass)(e.root, "xgplayer-lang-is-en") : "jp" === e.config.lang && (0, r.addClass)(e.root, "xgplayer-lang-is-jp"), e.config.enableContextmenu || e.video.addEventListener("contextmenu", (function(e) { e.preventDefault(), e.stopPropagation() }))) }
            e.config && e.config.hideStartBtn && (0, r.addClass)(t, "xgplayer-start-hide"), e.isReady ? (t.appendChild(n), o(e)) : e.once("ready", (function() { t.appendChild(n), o(e) })), e.once("autoplay was prevented", (function() {
                (0, r.removeClass)(e.root, "xgplayer-is-enter"), (0, r.addClass)(e.root, "xgplayer-nostart") })), e.once("canplay", (function() {
                (0, r.removeClass)(e.root, "xgplayer-is-enter") })), n.onclick = function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("startBtnClick") } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04,0.04)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n' }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70">\n  <path transform="translate(15,15) scale(0.04 0.04)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(44); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-start{border-radius:50%;display:inline-block;width:70px;height:70px;background:rgba(0,0,0,.38);overflow:hidden;text-align:center;line-height:70px;vertical-align:middle;position:absolute;left:50%;top:50%;z-index:115;margin:-35px auto auto -35px;cursor:pointer}.xgplayer-skin-default .xgplayer-start div{position:absolute}.xgplayer-skin-default .xgplayer-start div svg{fill:hsla(0,0%,100%,.7)}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-start:hover{opacity:.85}.xgplayer-skin-default.xgplayer-pause.xgplayer-start-hide .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start,.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-start-hide .xgplayer-start{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-start .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start{display:inline-block}.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start,.xgplayer-skin-default.xgplayer-pause .xgplayer-start .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-play{display:block}.xgplayer-skin-default.xgplayer-is-replay .xgplayer-start .xgplayer-icon-pause{display:none}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "fullscreen", method: function() { var e = this,
                t = e.root;

            function n() { e.config.rotateFullscreen ? (0, r.hasClass)(t, "xgplayer-rotate-fullscreen") ? e.exitRotateFullscreen() : e.getRotateFullscreen() : (0, r.hasClass)(t, "xgplayer-is-fullscreen") ? e.exitFullscreen(t) : e.getFullscreen(t) }

            function i() { var n = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                n && n === t ? ((0, r.addClass)(t, "xgplayer-is-fullscreen"), e.emit("requestFullscreen")) : (0, r.hasClass)(t, "xgplayer-is-fullscreen") && ((0, r.removeClass)(t, "xgplayer-is-fullscreen"), e.emit("exitFullscreen")), e.danmu && "function" == typeof e.danmu.resize && e.danmu.resize() }

            function a(n) { e.video.webkitPresentationMode !== r.PresentationMode.FULLSCREEN && ((0, r.removeClass)(t, "xgplayer-is-fullscreen"), e.emit("exitFullscreen")) }
            e.on("fullscreenBtnClick", n), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach((function(e) { document.addEventListener(e, i) })), e.video.addEventListener("webkitbeginfullscreen", (function() {
                (0, r.addClass)(t, "xgplayer-is-fullscreen"), e.emit("requestFullscreen") })), e.video.addEventListener("webkitendfullscreen", (function() {
                (0, r.removeClass)(t, "xgplayer-is-fullscreen"), e.emit("exitFullscreen") })), (0, r.checkWebkitSetPresentationMode)(e.video) && e.video.addEventListener("webkitpresentationmodechanged", a), e.once("destroy", (function t() { e.off("fullscreenBtnClick", n), ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].forEach((function(e) { document.removeEventListener(e, i) })), (0, r.checkWebkitSetPresentationMode)(e.video) && e.video.removeEventListener("webkitpresentationmodechanged", a), e.off("destroy", t) })), e.getFullscreen = function(e) { var t = this; if (e.requestFullscreen) { var n = e.requestFullscreen();
                    n && n.catch((function() { t.emit("fullscreen error") })) } else e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(window.Element.ALLOW_KEYBOARD_INPUT) : t.video.webkitSupportsFullscreen ? t.video.webkitEnterFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : (0, r.addClass)(e, "xgplayer-is-cssfullscreen") }, e.exitFullscreen = function(e) { document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), (0, r.removeClass)(e, "xgplayer-is-cssfullscreen") }, e.getRotateFullscreen = function() { document.documentElement.style.width = "100%", document.documentElement.style.height = "100%", this.config.fluid && (this.root.style["padding-top"] = "", this.root.style["max-width"] = "unset"), this.root && !(0, r.hasClass)(this.root, "xgplayer-rotate-fullscreen") && (0, r.addClass)(this.root, "xgplayer-rotate-fullscreen"), this.emit("getRotateFullscreen") }, e.exitRotateFullscreen = function() { document.documentElement.style.width = "unset", document.documentElement.style.height = "unset", this.config.fluid && (this.root.style.width = "100%", this.root.style.height = "0", this.root.style["padding-top"] = 100 * this.config.height / this.config.width + "%", this.root.style["max-width"] = "100%"), this.root && (0, r.hasClass)(this.root, "xgplayer-rotate-fullscreen") && (0, r.removeClass)(this.root, "xgplayer-rotate-fullscreen"), this.emit("exitRotateFullscreen") } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "play", method: function() { var e = this;

            function t() { if (e.config.allowPlayAfterEnded || !e.ended)
                    if ((0, r.hasClass)(e.root, "xgplayer-nostart") && e.start(), e.paused) { var t = e.play();
                        void 0 !== t && t && t.catch((function(e) {})) } else e.pause() }
            e.on("playBtnClick", t), e.once("destroy", (function n() { e.off("playBtnClick", t), e.off("destroy", n) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "replay", method: function() { var e = this,
                t = e.root;

            function n() {
                (0, r.removeClass)(t, "xgplayer-is-replay"), e.replay() }
            e.on("replayBtnClick", n), e.on("ended", (function() { e.config.loop || (0, r.addClass)(t, "xgplayer-is-replay") })), e.once("destroy", (function t() { e.off("replayBtnClick", n), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
        i = o(n(49)),
        a = o(n(50));

    function o(e) { return e && e.__esModule ? e : { default: e } }
    n(51);
    t.default = { name: "s_play", method: function() { var e = this,
                t = e.config.playBtn ? e.config.playBtn : {},
                n = void 0;
            n = "img" === t.type ? (0, r.createImgBtn)("play", t.url.play, t.width, t.height) : (0, r.createDom)("xg-play", '<xg-icon class="xgplayer-icon">\n                                      <div class="xgplayer-icon-play">' + i.default+'</div>\n                                      <div class="xgplayer-icon-pause">' + a.default+"</div>\n                                     </xg-icon>", {}, "xgplayer-play"); var o = {};
            o.play = e.lang.PLAY_TIPS, o.pause = e.lang.PAUSE_TIPS; var l = (0, r.createDom)("xg-tips", '<span class="xgplayer-tip-play">' + o.play + '</span>\n                                        <span class="xgplayer-tip-pause">' + o.pause + "</span>", {}, "xgplayer-tips");
            n.appendChild(l), e.once("ready", (function() { e.controls && e.controls.appendChild(n) })), ["click", "touchend"].forEach((function(t) { n.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("playBtnClick") })) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M576,363L810,512L576,661zM342,214L576,363L576,661L342,810z"></path>\n</svg>\n' }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="translate(2,2) scale(0.0320625 0.0320625)" d="M598,214h170v596h-170v-596zM256 810v-596h170v596h-170z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(52); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-play,.xgplayer-skin-default .xgplayer-play-img{width:40px;position:relative;-webkit-order:0;-moz-box-ordinal-group:1;order:0;display:block;cursor:pointer;margin-left:3px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-play .xgplayer-icon{margin-top:3px;width:32px}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-play .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}.xgplayer-skin-default .xgplayer-play-img:hover,.xgplayer-skin-default .xgplayer-play:hover{opacity:.85}.xgplayer-skin-default .xgplayer-play-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-play:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-play{display:none}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:block}.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-play,.xgplayer-skin-default.xgplayer-playing .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-playing .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-icon .xgplayer-icon-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-icon .xgplayer-icon-pause{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-play,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-play{display:block}.xgplayer-skin-default.xgplayer-pause .xgplayer-play-img .xgplayer-tips .xgplayer-tip-pause,.xgplayer-skin-default.xgplayer-pause .xgplayer-play .xgplayer-tips .xgplayer-tip-pause{display:none}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(54);
    t.default = { name: "s_poster", method: function() { var e = this.root; if (this.config.poster) { var t = (0, r.createDom)("xg-poster", "", {}, "xgplayer-poster");
                t.style.backgroundImage = "url(" + this.config.poster + ")", e.appendChild(t) } } }, e.exports = t.default }, function(e, t, n) { var r = n(55); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-poster{display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:100;background-size:cover;background-position:50%}.xgplayer-skin-default.xgplayer-nostart .xgplayer-poster{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(57);
    t.default = { name: "s_flex", method: function() { var e = (0, r.createDom)("xg-placeholder", "", {}, "xgplayer-placeholder");
            this.controls.appendChild(e) } }, e.exports = t.default }, function(e, t, n) { var r = n(58); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-placeholder{-webkit-flex:1;-moz-box-flex:1;flex:1;-webkit-order:3;-moz-box-ordinal-group:4;order:3;display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
        i = o(n(60)),
        a = o(n(61));

    function o(e) { return e && e.__esModule ? e : { default: e } }
    n(62);
    t.default = { name: "s_fullscreen", method: function() { var e = this,
                t = e.config.fullscreenBtn ? e.config.fullscreenBtn : {},
                n = void 0;
            n = "img" === t.type ? (0, r.createImgBtn)("fullscreen", t.url.request, t.width, t.height) : (0, r.createDom)("xg-fullscreen", '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + i.default+'</div>\n                                             <div class="xgplayer-icon-exitfull">' + a.default+"</div>\n                                           </xg-icon>", {}, "xgplayer-fullscreen"); var o = {};
            o.requestfull = e.lang.FULLSCREEN_TIPS, o.exitfull = e.lang.EXITFULLSCREEN_TIPS; var l = (0, r.createDom)("xg-tips", '<span class="xgplayer-tip-requestfull">' + o.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + o.exitfull + "</span>", {}, "xgplayer-tips");
            n.appendChild(l), e.once("ready", (function() { e.controls && e.controls.appendChild(n) })), ["click", "touchend"].forEach((function(t) { n.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("fullscreenBtnClick") })) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M598 214h212v212h-84v-128h-128v-84zM726 726v-128h84v212h-212v-84h128zM214 426v-212h212v84h-128v128h-84zM298 598v128h128v84h-212v-212h84z"></path>\n</svg>\n' }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.0320625 0.0320625)" d="M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(63); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-fullscreen,.xgplayer-skin-default .xgplayer-fullscreen-img{position:relative;-webkit-order:13;-moz-box-ordinal-group:14;order:13;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-fullscreen-img:hover,.xgplayer-skin-default .xgplayer-fullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-fullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-fullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-rotate-fullscreen .xgplayer-fullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(65),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(66);
    t.default = { name: "s_loading", method: function() { var e = this.root,
                t = (0, i.createDom)("xg-loading", "" + o.default, {}, "xgplayer-loading");
            this.once("ready", (function() { e.appendChild(t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewbox="0 0 100 100">\n  <path d="M100,50A50,50,0,1,1,50,0"></path>\n</svg>\n' }, function(e, t, n) { var r = n(67); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-loading{display:none;width:100px;height:100px;overflow:hidden;-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);position:absolute;left:50%;top:50%;margin:-50px auto auto -50px}.xgplayer-skin-default .xgplayer-loading svg{border-radius:50%;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:loadingRotate 1s linear infinite;animation:loadingRotate 1s linear infinite}.xgplayer-skin-default .xgplayer-loading svg path{stroke:#ddd;stroke-dasharray:236;-webkit-animation:loadingDashOffset 2s linear infinite;animation:loadingDashOffset 2s linear infinite;animation-direction:alternate-reverse;fill:none;stroke-width:12px}.xgplayer-skin-default.xgplayer-nostart .xgplayer-loading{display:none}.xgplayer-skin-default.xgplayer-pause .xgplayer-loading{display:none!important}.xgplayer-skin-default.xgplayer-isloading .xgplayer-loading{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(5),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(69); var l = function(e) { return (0, i.hasClass)(e.root, "xgplayer-rotate-fullscreen") };
    t.default = { name: "s_progress", method: function() { var e = this,
                t = (0, i.createDom)("xg-progress", '<xg-outer class="xgplayer-progress-outer">\n                                                   <xg-cache class="xgplayer-progress-cache"></xg-cache>\n                                                   <xg-played class="xgplayer-progress-played">\n                                                     <xg-progress-btn class="xgplayer-progress-btn"></xg-progress-btn>\n                                                     <xg-point class="xgplayer-progress-point xgplayer-tips"></xg-point>\n                                                     <xg-thumbnail class="xgplayer-progress-thumbnail xgplayer-tips"></xg-thumbnail>\n                                                   </xg-played>\n                                                 </xg-outer>', { tabindex: 1 }, "xgplayer-progress"),
                n = void 0;
            e.controls.appendChild(t); var r = t.querySelector(".xgplayer-progress-played"),
                a = t.querySelector(".xgplayer-progress-outer"),
                s = t.querySelector(".xgplayer-progress-cache"),
                u = t.querySelector(".xgplayer-progress-point"),
                c = t.querySelector(".xgplayer-progress-thumbnail");

            function p(n, r) { n.addEventListener("mouseenter", (function(e) { r && ((0, i.addClass)(n, "xgplayer-progress-dot-show"), (0, i.addClass)(t, "xgplayer-progress-dot-active")) })), n.addEventListener("mouseleave", (function(e) { r && ((0, i.removeClass)(n, "xgplayer-progress-dot-show"), (0, i.removeClass)(t, "xgplayer-progress-dot-active")) })), n.addEventListener("touchend", (function(a) { a.stopPropagation(), r && ((0, i.hasClass)(n, "xgplayer-progress-dot-show") || Object.keys(e.dotArr).forEach((function(t) { e.dotArr[t] && (0, i.removeClass)(e.dotArr[t], "xgplayer-progress-dot-show") })), (0, i.toggleClass)(n, "xgplayer-progress-dot-show"), (0, i.toggleClass)(t, "xgplayer-progress-dot-active")) })) }

            function d() { e.config.progressDot && "Array" === (0, i.typeOf)(e.config.progressDot) && e.config.progressDot.forEach((function(t) { if (t.time >= 0 && t.time <= e.duration) { var n = (0, i.createDom)("xg-progress-dot", t.text ? '<span class="xgplayer-progress-tip">' + t.text + "</span>" : "", {}, "xgplayer-progress-dot"); if (n.style.left = t.time / e.duration * 100 + "%", t.duration >= 0 && (n.style.width = Math.min(t.duration, e.duration - t.time) / e.duration * 100 + "%"), t.style)
                            for (var r in t.style) n.style[r] = t.style[r];
                        a.appendChild(n), e.dotArr[t.time] = n, p(n, t.text) } })) }
            e.dotArr = {}, e.once("canplay", d), e.addProgressDot = function(t, n, r, o) { if (!e.dotArr[t] && t >= 0 && t <= e.duration) { var l = (0, i.createDom)("xg-progress-dot", n ? '<span class="xgplayer-progress-tip">' + n + "</span>" : "", {}, "xgplayer-progress-dot"); if (l.style.left = t / e.duration * 100 + "%", r >= 0 && (l.style.width = Math.min(r, e.duration - t) / e.duration * 100 + "%"), o)
                        for (var s in o) l.style[s] = o[s];
                    a.appendChild(l), e.dotArr[t] = l, p(l, n) } }, e.removeProgressDot = function(t) { if (t >= 0 && t <= e.duration && e.dotArr[t]) { var n = e.dotArr[t];
                    n.parentNode.removeChild(n), n = null, e.dotArr[t] = null } }, e.removeAllProgressDot = function() { Object.keys(e.dotArr).forEach((function(t) { if (e.dotArr[t]) { var n = e.dotArr[t];
                        n.parentNode.removeChild(n), n = null, e.dotArr[t] = null } })) }; var f = 0,
                g = 0,
                h = 0,
                y = 0,
                v = 0,
                x = 0,
                m = [],
                b = void 0,
                k = void 0,
                w = function() { e.config.thumbnail && (e.config.thumbnail.isShowCoverPreview && !b && (r.removeChild(c), b = (0, i.createDom)("xg-coverpreview", '<xg-outer class="xgplayer-coverpreview-outer">\n            <xg-thumbnail class="xgplayer-coverpreview-thumbnail"></xg-thumbnail>\n            <xg-point class="xgplayer-coverpreview-point"></xg-point>\n          </xg-outer>', { tabindex: 1 }, "xgplayer-coverpreview"), b.querySelector(".xgplayer-coverpreview-outer"), k = b.querySelector(".xgplayer-coverpreview-point"), c = b.querySelector(".xgplayer-coverpreview-thumbnail"), e.root.appendChild(b)), f = e.config.thumbnail.pic_num, g = e.config.thumbnail.width, h = e.config.thumbnail.height, y = e.config.thumbnail.col, v = e.config.thumbnail.row, m = e.config.thumbnail.urls, c.style.width = g + "px", c.style.height = h + "px") };
            e.on("loadedmetadata", w), "function" == typeof e.config.disableSwipeHandler && "function" == typeof e.config.enableSwipeHandler && (e.root.addEventListener("touchmove", (function(t) { t.preventDefault(), e.disableSwipe || (e.disableSwipe = !0, e.config.disableSwipeHandler.call(e)) })), e.root.addEventListener("touchstart", (function(t) { e.disableSwipe = !0, e.config.disableSwipeHandler.call(e) })), e.root.addEventListener("touchend", (function(t) { e.disableSwipe = !1, e.config.enableSwipeHandler.call(e) }))), ["touchstart", "mousedown"].forEach((function(a) { t.addEventListener(a, (function(a) { if (!e.config.disableProgress) { if (a.stopPropagation(), (0, i.event)(a), a._target === u || !e.config.allowSeekAfterEnded && e.ended) return !0;
                        t.focus(); var s = r.getBoundingClientRect().left,
                            p = l(e);
                        p ? (s = r.getBoundingClientRect().top, n = t.getBoundingClientRect().height) : (n = t.getBoundingClientRect().width, s = r.getBoundingClientRect().left); var d = function(t) { t.stopPropagation(), (0, i.event)(t), e.isProgressMoving = !0; var a = (p ? t.clientY : t.clientX) - s;
                                a > n && (a = n); var o = a / n * e.duration; if (o < 0 && (o = 0), e.config.allowSeekPlayed && Number(o).toFixed(1) > e.maxPlayedTime);
                                else if (r.style.width = 100 * a / n + "%", "video" !== e.videoConfig.mediaType || e.dash || e.config.closeMoveSeek) { var l = (0, i.findDom)(e.controls, ".xgplayer-time");
                                    l && (l.innerHTML = '<span class="xgplayer-time-current">' + (0, i.format)(o || 0) + "</span><span>" + (0, i.format)(e.duration) + "</span>") } else e.currentTime = Number(o).toFixed(1); if (e.config.thumbnail && e.config.thumbnail.isShowCoverPreview) { k.innerHTML = "<span>" + (0, i.format)(o) + "</span> / " + (0, i.format)(e.duration || 0), x = e.duration / f; var u = Math.floor(o / x);
                                    c.style.backgroundImage = "url(" + m[Math.ceil((u + 1) / (y * v)) - 1] + ")"; var d = u + 1 - y * v * (Math.ceil((u + 1) / (y * v)) - 1),
                                        w = Math.ceil(d / v) - 1,
                                        _ = d - w * v - 1;
                                    c.style["background-position"] = "-" + _ * g + "px -" + w * h + "px", b.style.display = "block" }
                                e.emit("focus") },
                            w = function a(l) { if (l.stopPropagation(), (0, i.event)(l), window.removeEventListener("mousemove", d), window.removeEventListener("touchmove", d, { passive: !1 }), window.removeEventListener("mouseup", a), window.removeEventListener("touchend", a), o.default.browser.indexOf("ie") < 0 && t.blur(), !e.isProgressMoving || e.videoConfig && "audio" === e.videoConfig.mediaType || e.dash || e.config.closeMoveSeek) { var u = (p ? l.clientY : l.clientX) - s;
                                    u > n && (u = n); var c = u / n * e.duration;
                                    c < 0 && (c = 0), e.config.allowSeekPlayed && Number(c).toFixed(1) > e.maxPlayedTime || (r.style.width = 100 * u / n + "%", e.currentTime = Number(c).toFixed(1)) }
                                e.config.thumbnail && e.config.thumbnail.isShowCoverPreview && (b.style.display = "none"), e.emit("focus"), e.isProgressMoving = !1 }; return window.addEventListener("mousemove", d), window.addEventListener("touchmove", d, { passive: !1 }), window.addEventListener("mouseup", w), window.addEventListener("touchend", w), !0 } })) })), t.addEventListener("mouseenter", (function(n) { if (!e.config.allowSeekAfterEnded && e.ended) return !0; var r = l(e),
                    a = r ? t.getBoundingClientRect().top : t.getBoundingClientRect().left,
                    o = r ? t.getBoundingClientRect().height : t.getBoundingClientRect().width,
                    s = function(n) { var l = ((r ? n.clientY : n.clientX) - a) / o * e.duration;
                        l = l < 0 ? 0 : l, u.textContent = (0, i.format)(l); var s = u.getBoundingClientRect().width; if (e.config.thumbnail && !e.config.thumbnail.isShowCoverPreview) { x = e.duration / f; var p = Math.floor(l / x);
                            c.style.backgroundImage = "url(" + m[Math.ceil((p + 1) / (y * v)) - 1] + ")"; var d = p + 1 - y * v * (Math.ceil((p + 1) / (y * v)) - 1),
                                b = Math.ceil(d / v) - 1,
                                k = d - b * v - 1;
                            c.style["background-position"] = "-" + k * g + "px -" + b * h + "px"; var w = (r ? n.clientY : n.clientX) - a - g / 2;
                            w = (w = w > 0 ? w : 0) < o - g ? w : o - g, c.style.left = w + "px", c.style.top = -10 - h + "px", c.style.display = "block", u.style.left = w + g / 2 - s / 2 + "px" } else { var _ = n.clientX - a - s / 2;
                            _ = (_ = _ > 0 ? _ : 0) > o - s ? o - s : _, u.style.left = _ + "px" }(0, i.hasClass)(t, "xgplayer-progress-dot-active") ? u.style.display = "none": u.style.display = "block" },
                    p = function(e) { s(e) };
                t.addEventListener("mousemove", p, !1), t.addEventListener("mouseleave", (function n(r) { t.removeEventListener("mousemove", p, !1), t.removeEventListener("mouseleave", n, !1), s(r), u.style.display = "none", e.config.thumbnail && !e.config.thumbnail.isShowCoverPreview && (c.style.display = "none") }), !1), s(n) }), !1); var _ = function() { if (void 0 === e.maxPlayedTime && (e.maxPlayedTime = 0), e.maxPlayedTime < e.currentTime && (e.maxPlayedTime = e.currentTime), !n && t && (n = t.getBoundingClientRect().width), !e.isProgressMoving && !e.isSeeking && !e.seeking) { var i = e.currentTime / e.duration,
                        a = Number(r.style.width.replace("%", "") || "0") / Number(t.style.width || "100");
                    Math.abs(i - a) <= 1 && (r.style.width = 100 * e.currentTime / e.duration + "%") } };
            e.on("timeupdate", _); var E = function(t) { r.style.width = 100 * t / e.duration + "%" };
            e.on("currentTimeChange", E); var T = function() { r.style.width = "0%" };
            e.on("srcChange", T); var C = function() { var t = e.buffered; if (t && t.length > 0) { for (var n = t.end(t.length - 1), r = 0, i = t.length; r < i; r++)
                            if (e.currentTime >= t.start(r) && e.currentTime <= t.end(r)) { n = t.end(r); for (var a = r + 1; a < t.length; a++)
                                    if (t.start(a) - t.end(a - 1) >= 2) { n = t.end(a - 1); break }
                                break }
                        s.style.width = n / e.duration * 100 + "%" } },
                S = ["bufferedChange", "cacheupdate", "ended", "timeupdate"];
            S.forEach((function(t) { e.on(t, C) })), e.once("destroy", (function t() { e.removeAllProgressDot(), e.off("canplay", d), e.off("timeupdate", _), e.off("currentTimeChange", E), e.off("srcChange", T), e.off("loadedmetadata", w), S.forEach((function(t) { e.off(t, C) })), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { var r = n(70); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-progress{display:block;position:absolute;height:20px;line-height:20px;left:12px;right:12px;outline:none;top:-15px;z-index:35}.xgplayer-skin-default .xgplayer-progress-outer{background:hsla(0,0%,100%,.3);display:block;height:3px;line-height:3px;margin-top:8.5px;width:100%;position:relative;cursor:pointer}.xgplayer-skin-default .xgplayer-progress-cache,.xgplayer-skin-default .xgplayer-progress-played{display:block;height:100%;line-height:1;position:absolute;left:0;top:0}.xgplayer-skin-default .xgplayer-progress-cache{width:0;background:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-progress-played{display:block;width:0;background-image:linear-gradient(-90deg,#fa1f41,#e31106);border-radius:0 1.5px 1.5px 0}.xgplayer-skin-default .xgplayer-progress-btn{display:none;position:absolute;left:0;top:-5px;width:13px;height:13px;border-radius:30px;background:#fff;box-shadow:0 0 2px 0 rgba(0,0,0,.26);left:100%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);z-index:36}.xgplayer-skin-default .xgplayer-progress-point{position:absolute}.xgplayer-skin-default .xgplayer-progress-point.xgplayer-tips{margin-left:0;top:-25px;display:none;z-index:100}.xgplayer-skin-default .xgplayer-progress-dot{display:inline-block;position:absolute;height:3px;width:5px;top:0;background:#fff;border-radius:6px;z-index:16}.xgplayer-skin-default .xgplayer-progress-dot .xgplayer-progress-tip{position:absolute;bottom:200%;right:50%;-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);height:auto;line-height:30px;width:auto;background:rgba(0,0,0,.3);border-radius:6px;border:1px solid rgba(0,0,0,.8);cursor:default;white-space:nowrap;display:none}.xgplayer-skin-default .xgplayer-progress-dot-show .xgplayer-progress-tip{display:block}.xgplayer-skin-default .xgplayer-progress-thumbnail{position:absolute;-moz-box-sizing:border-box;box-sizing:border-box}.xgplayer-skin-default .xgplayer-progress-thumbnail.xgplayer-tips{margin-left:0;display:none;z-index:99}.xgplayer-skin-default .xgplayer-coverpreview{position:absolute;width:100%;height:100%;top:0;left:0;display:none}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer{position:absolute;display:block;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-thumbnail{display:block}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point{display:block;text-align:center;font-family:PingFangSC-Regular;font-size:11px;color:#ccc;padding:2px 4px}.xgplayer-skin-default .xgplayer-coverpreview .xgplayer-coverpreview-outer .xgplayer-coverpreview-point span{color:#fff}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-outer{height:6px;margin-top:7px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-dot,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-dot{height:6px}.xgplayer-skin-default .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default .xgplayer-progress:hover .xgplayer-progress-btn{display:block;top:-3px}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-progress,.xgplayer-skin-default.xgplayer-volume-active .xgplayer-progress{z-index:15}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress-btn{display:block!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-outer,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-outer{height:3px!important;margin-top:8.5px!important}.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:focus .xgplayer-progress-btn,.xgplayer-skin-default.xgplayer-mobile .xgplayer-progress:hover .xgplayer-progress-btn{display:block!important;top:-5px!important}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(72);
    t.default = { name: "s_time", method: function() { var e = this,
                t = (0, r.createDom)("xg-time", '<span class="xgplayer-time-current">' + (e.currentTime || (0, r.format)(0)) + "</span>\n                                           <span>" + (e.duration || (0, r.format)(0)) + "</span>", {}, "xgplayer-time");
            e.once("ready", (function() { e.controls && e.controls.appendChild(t) })); var n = function() { "audio" === e.videoConfig.mediaType && e.isProgressMoving && e.dash || (t.innerHTML = '<span class="xgplayer-time-current">' + (0, r.format)(e.currentTime || 0) + "</span><span>" + (0, r.format)(e.duration) + "</span>") };
            e.on("durationchange", n), e.on("timeupdate", n), e.once("destroy", (function t() { e.off("durationchange", n), e.off("timeupdate", n), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { var r = n(73); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, '.xgplayer-skin-default .xgplayer-time{-webkit-order:2;-moz-box-ordinal-group:3;order:2;font-family:ArialMT;font-size:13px;color:#fff;line-height:40px;height:40px;text-align:center;display:inline-block;margin:auto 8px}.xgplayer-skin-default .xgplayer-time span{color:hsla(0,0%,100%,.5)}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current{color:#fff}.xgplayer-skin-default .xgplayer-time .xgplayer-time-current:after{content:"/";display:inline-block;padding:0 3px}', ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(75),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(76);
    t.default = { name: "s_replay", method: function() { var e = this,
                t = e.root,
                n = e.lang.REPLAY,
                r = (0, i.createDom)("xg-replay", o.default+'\n                                         <xg-replay-txt class="xgplayer-replay-txt">' + n + "</xg-replay-txt>\n                                        ", {}, "xgplayer-replay");

            function a() { var e = r.querySelector("path"); if (e) { var t = window.getComputedStyle(e).getPropertyValue("transform"); if ("string" == typeof t && t.indexOf("none") > -1) return;
                    e.setAttribute("transform", t) } }
            e.once("ready", (function() { t.appendChild(r) })), e.on("ended", a), r.addEventListener("click", (function(e) { e.preventDefault(), e.stopPropagation() })); var l = r.querySelector("svg");
            ["click", "touchend"].forEach((function(t) { l.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("replayBtnClick") })) })), e.once("destroy", (function t() { e.off("ended", a), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg class="xgplayer-replay-svg" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewbox="0 0 78 78">\n  <path d="M8.22708362,13.8757234 L11.2677371,12.6472196 C11.7798067,12.4403301 12.3626381,12.6877273 12.5695276,13.1997969 L12.9441342,14.1269807 C13.1510237,14.6390502 12.9036264,15.2218816 12.3915569,15.4287712 L6.8284538,17.6764107 L5.90126995,18.0510173 C5.38920044,18.2579068 4.80636901,18.0105096 4.5994795,17.49844 L1.97723335,11.0081531 C1.77034384,10.4960836 2.0177411,9.91325213 2.52981061,9.70636262 L3.45699446,9.33175602 C3.96906396,9.12486652 4.5518954,9.37226378 4.75878491,9.88433329 L5.67885163,12.1615783 C7.99551726,6.6766934 13.3983951,3 19.5,3 C27.7842712,3 34.5,9.71572875 34.5,18 C34.5,26.2842712 27.7842712,33 19.5,33 C15.4573596,33 11.6658607,31.3912946 8.87004692,28.5831991 C8.28554571,27.9961303 8.28762719,27.0463851 8.87469603,26.4618839 C9.46176488,25.8773827 10.4115101,25.8794641 10.9960113,26.466533 C13.2344327,28.7147875 16.263503,30 19.5,30 C26.127417,30 31.5,24.627417 31.5,18 C31.5,11.372583 26.127417,6 19.5,6 C14.4183772,6 9.94214483,9.18783811 8.22708362,13.8757234 Z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(77); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-replay{position:absolute;left:0;top:0;width:100%;height:100%;z-index:105;display:none;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center;background:rgba(0,0,0,.54);-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;flex-direction:column}.xgplayer-skin-default .xgplayer-replay svg{background:rgba(0,0,0,.58);border-radius:100%;cursor:pointer}.xgplayer-skin-default .xgplayer-replay svg path{-webkit-transform:translate(20px,21px);-ms-transform:translate(20px,21px);transform:translate(20px,21px);fill:#ddd}.xgplayer-skin-default .xgplayer-replay svg:hover{background:rgba(0,0,0,.38)}.xgplayer-skin-default .xgplayer-replay svg:hover path{fill:#fff}.xgplayer-skin-default .xgplayer-replay .xgplayer-replay-txt{display:inline-block;font-family:PingFangSC-Regular;font-size:14px;color:#fff;line-height:34px}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-controls{display:none}.xgplayer-skin-default.xgplayer.xgplayer-ended .xgplayer-replay{display:-webkit-flex;display:-moz-box;display:flex}", ""]) }, function(e, t, n) { var r = n(161); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) { e.exports = n(80) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = P(n(9)),
        i = P(n(81)),
        a = P(n(82)),
        o = P(n(83)),
        l = P(n(84)),
        s = P(n(85)),
        u = P(n(88)),
        c = P(n(45)),
        p = P(n(89)),
        d = P(n(90)),
        f = P(n(91)),
        g = P(n(92)),
        h = P(n(37)),
        y = P(n(38)),
        v = P(n(98)),
        x = P(n(46)),
        m = P(n(99)),
        b = P(n(100)),
        k = P(n(47)),
        w = P(n(101)),
        _ = P(n(102)),
        E = P(n(103)),
        T = P(n(39)),
        C = P(n(104)),
        S = P(n(105));

    function P(e) { return e && e.__esModule ? e : { default: e } }
    n(107), r.default.installAll([i.default, a.default, o.default, l.default, s.default, u.default, c.default, p.default, d.default, f.default, g.default, h.default, y.default, v.default, x.default, m.default, b.default, k.default, w.default, _.default, E.default, T.default, C.default, S.default]), t.default = r.default, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = { name: "airplay", method: function() { var e = this;

            function t() { e.video.webkitShowPlaybackTargetPicker() }
            e.config.airplay && window.WebKitPlaybackTargetAvailabilityEvent && (e.on("airplayBtnClick", t), e.once("destroy", (function n() { e.off("airplayBtnClick", t), e.off("destroy", n) }))) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "cssFullscreen", method: function() { var e = this,
                t = e.root;

            function n() {
                (0, r.hasClass)(t, "xgplayer-is-cssfullscreen") ? e.exitCssFullscreen(): e.getCssFullscreen() }
            e.on("cssFullscreenBtnClick", n), e.on("exitFullscreen", (function() {
                (0, r.removeClass)(t, "xgplayer-is-cssfullscreen") })), e.once("destroy", (function t() { e.off("cssFullscreenBtnClick", n), e.off("destroy", t) })), e.getCssFullscreen = function() { this.config.fluid && (this.root.style["padding-top"] = ""), (0, r.addClass)(this.root, "xgplayer-is-cssfullscreen"), this.emit("requestCssFullscreen") }, e.exitCssFullscreen = function() { this.config.fluid && (this.root.style.width = "100%", this.root.style.height = "0", this.root.style["padding-top"] = 100 * this.config.height / this.config.width + "%"), (0, r.removeClass)(this.root, "xgplayer-is-cssfullscreen"), this.emit("exitCssFullscreen") } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "danmu", method: function() { var e = this;
            e.on("initDefaultDanmu", (function(t) { var n = e.root.querySelector("xg-danmu"); if ((0, r.addClass)(n, "xgplayer-has-danmu"), !e.config.danmu.closeDefaultBtn) { var i = function() { t.start() },
                        a = function() {
                            (0, r.hasClass)(e.danmuBtn, "danmu-switch-active") && t.pause() },
                        o = function() {
                            (0, r.hasClass)(e.danmuBtn, "danmu-switch-active") && t.play() },
                        l = function() {
                            (0, r.hasClass)(e.danmuBtn, "danmu-switch-active") && (t.stop(), t.start()) };
                    e.danmuBtn = (0, r.copyDom)(t.bulletBtn.createSwitch(!0)), e.controls.appendChild(e.danmuBtn), ["click", "touchend"].forEach((function(a) { e.danmuBtn.addEventListener(a, (function(a) { a.preventDefault(), a.stopPropagation(), (0, r.toggleClass)(e.danmuBtn, "danmu-switch-active"), (0, r.hasClass)(e.danmuBtn, "danmu-switch-active") ? (e.emit("danmuBtnOn"), (0, r.addClass)(n, "xgplayer-has-danmu"), e.once("timeupdate", i)) : (e.emit("danmuBtnOff"), (0, r.removeClass)(n, "xgplayer-has-danmu"), t.stop()) })) })), e.onElementClick && n.addEventListener("click", (function(t) { e.onElementClick(t, n) }), !1), e.onElementDblclick && n.addEventListener("dblclick", (function(t) { e.onElementDblclick(t, n) }), !1), e.on("pause", a), e.on("play", o), e.on("seeked", l), e.once("destroy", (function t() { e.off("timeupdate", i), e.off("pause", a), e.off("play", o), e.off("seeked", l), e.off("destroy", t) })) } })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = { name: "definition", method: function() { var e = this;
            e.once("destroy", (function t() { e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(86),
        a = (r = i) && r.__esModule ? r : { default: r },
        o = n(87);
    t.default = { name: "download", method: function() { var e = this;

            function t() { e.download() }
            e.on("downloadBtnClick", t), e.once("destroy", (function n() { e.off("downloadBtnClick", t), e.off("destroy", n) })), e.download = function() { var e = (0, o.getAbsoluteURL)(this.config.url);
                (0, a.default)(e) } } }, e.exports = t.default }, function(e, t, n) { var r, i, a;
    i = [], void 0 === (a = "function" == typeof(r = function() { return function e(t, n, r) { var i, a, o = window,
                l = "application/octet-stream",
                s = r || l,
                u = t,
                c = !n && !r && u,
                p = document.createElement("a"),
                d = function(e) { return String(e) },
                f = o.Blob || o.MozBlob || o.WebKitBlob || d,
                g = n || "download"; if (f = f.call ? f.bind(o) : Blob, "true" === String(this) && (s = (u = [u, s])[0], u = u[1]), c && c.length < 2048 && (g = c.split("/").pop().split("?")[0], p.href = c, -1 !== p.href.indexOf(c))) { var h = new XMLHttpRequest; return h.open("GET", c, !0), h.responseType = "blob", h.onload = function(t) { e(t.target.response, g, l) }, setTimeout((function() { h.send() }), 0), h } if (/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(u)) { if (!(u.length > 2096103.424 && f !== d)) return navigator.msSaveBlob ? navigator.msSaveBlob(m(u), g) : b(u);
                s = (u = m(u)).type || l } else if (/([\x80-\xff])/.test(u)) { for (var y = 0, v = new Uint8Array(u.length), x = v.length; y < x; ++y) v[y] = u.charCodeAt(y);
                u = new f([v], { type: s }) }

            function m(e) { for (var t = e.split(/[:;,]/), n = t[1], r = ("base64" == t[2] ? atob : decodeURIComponent)(t.pop()), i = r.length, a = 0, o = new Uint8Array(i); a < i; ++a) o[a] = r.charCodeAt(a); return new f([o], { type: n }) }

            function b(e, t) { if ("download" in p) return p.href = e, p.setAttribute("download", g), p.className = "download-js-link", p.innerHTML = "downloading...", p.style.display = "none", document.body.appendChild(p), setTimeout((function() { p.click(), document.body.removeChild(p), !0 === t && setTimeout((function() { o.URL.revokeObjectURL(p.href) }), 250) }), 66), !0; if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) return /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, l)), window.open(e) || confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.") && (location.href = e), !0; var n = document.createElement("iframe");
                document.body.appendChild(n), !t && /^data:/.test(e) && (e = "data:" + e.replace(/^data:([\w\/\-\+]+)/, l)), n.src = e, setTimeout((function() { document.body.removeChild(n) }), 333) } if (i = u instanceof f ? u : new f([u], { type: s }), navigator.msSaveBlob) return navigator.msSaveBlob(i, g); if (o.URL) b(o.URL.createObjectURL(i), !0);
            else { if ("string" == typeof i || i.constructor === d) try { return b("data:" + s + ";base64," + o.btoa(i)) } catch (e) { return b("data:" + s + "," + encodeURIComponent(i)) }(a = new FileReader).onload = function(e) { b(this.result) }, a.readAsDataURL(i) } return !0 } }) ? r.apply(t, i) : r) || (e.exports = a) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.getAbsoluteURL = function(e) { if (!e.match(/^https?:\/\//)) { var t = document.createElement("div");
            t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href } return e } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(4),
        a = (r = i) && r.__esModule ? r : { default: r }; var o = { maxCount: 3, backupUrl: "", isFetch: !0, fetchTimeout: 100 };
    t.default = { name: "errorretry", method: function() { var e = this,
                t = this; if (t.config.errorConfig && !(t.src.indexOf("blob:") > -1)) { var n = {},
                    r = t.config.errorConfig; for (var i in o) void 0 === r[i] ? n[i] = o[i] : n[i] = r[i];
                t.retryData = { count: 0, errfTimer: null, isFetchReturn: !1, currentTime: 0 }; var l = t._onError;
                t._onError = function(r) { var i = e.retryData.count; if (i > n.maxCount) n.isFetch ? function(e, t, n) { var r = function(t, n) { e.retryData.isFetchReturn || (e.retryData.isFetchReturn = !0, t(n)) }; return new Promise((function(i, a) { try { var o = new window.XMLHttpRequest;
                                o.open("get", t), o.onload = function() { r(i, { status: o.status, statusText: o.statusText, xhr: o }) }, o.onerror = function() { r(i, { status: o.status, statusText: o.statusText || "The network environment is disconnected or the address is invalid", xhr: o }) }, o.onabort = function() {}, e.retryData.errfTimer = window.setTimeout((function() { var t = e.retryData.errfTimer;
                                    window.clearTimeout(t), e.retryData.errfTimer = null, r(i, { status: -1, statusText: "request timeout" }) }), n), o.send() } catch (t) { e.retryData.isFetchReturn = !0, r(i, { status: -2, statusText: "request error" }) } })) }(e, e.currentSrc, n.fetchTimeout).then((function(t) { e.emit("error", new a.default({ type: "network", currentTime: e.currentTime, duration: e.duration || 0, networkState: e.networkState, readyState: e.readyState, currentSrc: e.currentSrc, src: e.src, ended: e.ended, httpCode: t.status, httpMsg: t.statusText, errd: { line: 101, msg: e.error, handle: "plugin errorRetry" }, errorCode: e.video && e.video.error.code, mediaError: e.video && e.video.error })), l.call(e, t) })) : l.call(e, r);
                    else { 0 === i && (e.retryData.currentTime = e.currentTime, e.once("canplay", s.bind(e))); var o = "";
                        o = n.count < 2 ? n.backupUrl ? n.backupUrl : t.currentSrc : n.backupUrl && i > 1 ? n.backupUrl : t.currentSrc, e.retryData.count++, e.src = o } } }

            function s() { this.currentTime = this.retryData.currentTime, this.play(), this.retryData.retryCode = 0, this.retryData.isFetchReturn = !1, this.retryData.currentTime = 0 } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
        i = n(0); var a = function() {
        function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.player = t, this.state = { playbackRate: 0, isRepeat: !1, keyCode: 0, repeat: 0, isBody: !1 }, this.timer = null, this.initEvents() } return r(e, [{ key: "initEvents", value: function() { var e = this,
                    t = this.player,
                    n = t.root,
                    r = t.config; if (this.player.onBodyKeydown = this.onBodyKeydown.bind(this), this.player.onKeydown = this.onKeydown.bind(this), this.player.onKeyup = this.onKeyup.bind(this), !r.keyShortcut || "on" === r.keyShortcut) { document.addEventListener("keydown", this.player.onBodyKeydown), n.addEventListener("keydown", this.player.onKeydown);
                    (0, i.on)(this.player, "destroy", (function() { document.removeEventListener("keydown", e.player.onBodyKeydown), n.removeEventListener("keydown", e.player.onKeydown), clearTimeout(e.timer), e.timer = null })) } } }, { key: "checkTarget", value: function(e) { var t = this.player; return e.target === t.root || e.target === t.video || e.target === t.controls } }, { key: "onBodyKeydown", value: function(e) { var t = e || window.event,
                    n = t.keyCode; if (t.target === document.body && (37 === n || 39 === n || 32 === n)) return t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1, t.repeat || document.addEventListener("keyup", this.player.onKeyup), this.handler(t), !1 } }, { key: "onKeydown", value: function(e) { var t = e || window.event,
                    n = t.keyCode; if (this.checkTarget(t) && (37 === n || 38 === n || 39 === n || 40 === n || 32 === n || 27 === n)) return t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1, this.player.emit("focus"), t.repeat || this.player.root.addEventListener("keyup", this.player.onKeyup), this.handler(t), !1 } }, { key: "onKeyup", value: function() { var e = this.state,
                    t = this.player;
                document.removeEventListener("keyup", this.player.onKeyup), t.root.removeEventListener("keyup", this.player.onKeyup), e.keyCode && (0 !== e.playbackRate && (t.playbackRate = e.playbackRate), e.isRepeat || this.handlerKeyCode(e.keyCode, !1), e.playbackRate = 0, e.isRepeat = !1, e.keyCode = 0, e.repeat = 0, this.changeVolumeSlide()) } }, { key: "handler", value: function(e) { var t = this.state,
                    n = this.player;
                t.keyCode = e.keyCode, t.isRepeat = e.repeat, e.repeat && (n.config.disableLongPress ? this.handlerKeyCode(t.keyCode, !1) : t.repeat % 2 == 0 && this.handlerKeyCode(t.keyCode, !0), t.repeat++) } }, { key: "handlerKeyCode", value: function(e, t) { var n = this.player,
                    r = this.state; switch (e) {
                    case 39:
                        t ? 0 === r.repeat && this.changeRate() : this.seek(!1, t); break;
                    case 37:
                        this.seek(!0, t); break;
                    case 38:
                        this.changeVolume(!0); break;
                    case 40:
                        this.changeVolume(!1); break;
                    case 32:
                        t || (n.paused ? n.play() : n.pause()); break;
                    case 27:
                        (0, i.hasClass)(n.root, "xgplayer-is-cssfullscreen") && n.exitCssFullscreen() } } }, { key: "seek", value: function(e, t) { var n = this.player,
                    r = (n.config.keyShortcutStep || {}).currentTime || 10;
                n.isLoading || n.isSeeking || t && this.state.repeat % 8 > 0 || (e ? n.currentTime - r >= 0 ? n.currentTime -= r : n.currentTime = 0 : n.maxPlayedTime && n.config.allowSeekPlayed && n.currentTime + r > n.maxPlayedTime ? n.currentTime = n.maxPlayedTime : n.currentTime + r <= n.duration ? n.currentTime += r : n.currentTime = n.duration + 1) } }, { key: "changeRate", value: function() { this.state.playbackRate = this.player.playbackRate, this.player.playbackRate = this.player.config.keyboardRate || 5 } }, { key: "changeVolumeSlide", value: function(e) { var t = this.player;
                t.controls && (e ? (t.emit("focus"), (0, i.hasClass)(t.root, "xgplayer-volume-active") || (0, i.addClass)(t.root, "xgplayer-volume-active")) : (clearTimeout(this.timer), this.timer = setTimeout((function() {
                    (0, i.removeClass)(t.root, "xgplayer-volume-active") }), 1e3))) } }, { key: "changeVolume", value: function(e) { var t = this.player,
                    n = (t.config.keyShortcutStep || {}).volume || .1;
                this.changeVolumeSlide(!0); var r = t.volume;
                e && r + n <= 1 ? t.volume = r + n : !e && r - n >= 0 && (t.volume = r - n) } }]), e }();
    t.default = { name: "keyboard", method: function() { this.keyboard = new a(this) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "localPreview", method: function() { var e = this,
                t = e.root;

            function n(n) { e.uploadFile = n.files[0]; var i = URL.createObjectURL(e.uploadFile); if ((0, r.hasClass)(t, "xgplayer-nostart")) e.config.url = i, e.start();
                else { e.src = i; var a = e.play();
                    void 0 !== a && a && a.catch((function(e) {})) } }
            e.on("upload", n), e.once("destroy", (function t() { e.off("upload", n), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = { name: "memoryPlay", method: function() { var e = this;
            e.on("memoryPlayStart", (function(t) { e.currentTime = t })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(93),
        o = (r = a) && r.__esModule ? r : { default: r };
    t.default = { name: "miniplayer", method: function() { var e = this,
                t = e.root;

            function n() {
                (0, i.hasClass)(t, "xgplayer-miniplayer-active") ? e.exitMiniplayer(): e.getMiniplayer() }
            e.on("miniplayerBtnClick", n), e.once("destroy", (function t() { e.off("miniplayerBtnClick", n), e.off("destroy", t) })), e.getMiniplayer = function() {
                (0, i.hasClass)(t, "xgplayer-is-fullscreen") && this.exitFullscreen(t), (0, i.hasClass)(t, "xgplayer-is-cssfullscreen") && this.exitCssFullscreen(), (0, i.hasClass)(t, "xgplayer-rotate-fullscreen") && this.exitRotateFullscreen(); var e = (0, i.createDom)("xg-miniplayer-lay", "<div></div>", {}, "xgplayer-miniplayer-lay");
                this.root.appendChild(e); var n = (0, i.createDom)("xg-miniplayer-drag", '<div class="drag-handle"><span>' + this.lang.MINIPLAYER_DRAG + "</span></div>", { tabindex: 9 }, "xgplayer-miniplayer-drag");
                this.root.appendChild(n);
                new o.default(".xgplayer", { handle: ".drag-handle" });
                (0, i.addClass)(this.root, "xgplayer-miniplayer-active"), this.root.style.right = 0, this.root.style.bottom = "200px", this.root.style.top = "", this.root.style.left = "", this.root.style.width = "320px", this.root.style.height = "180px", this.config.miniplayerConfig && (void 0 !== this.config.miniplayerConfig.top && (this.root.style.top = this.config.miniplayerConfig.top + "px", this.root.style.bottom = ""), void 0 !== this.config.miniplayerConfig.bottom && (this.root.style.bottom = this.config.miniplayerConfig.bottom + "px"), void 0 !== this.config.miniplayerConfig.left && (this.root.style.left = this.config.miniplayerConfig.left + "px", this.root.style.right = ""), void 0 !== this.config.miniplayerConfig.right && (this.root.style.right = this.config.miniplayerConfig.right + "px"), void 0 !== this.config.miniplayerConfig.width && (this.root.style.width = this.config.miniplayerConfig.width + "px"), void 0 !== this.config.miniplayerConfig.height && (this.root.style.height = this.config.miniplayerConfig.height + "px")), this.config.fluid && (this.root.style["padding-top"] = ""); var r = this;
                ["click", "touchend"].forEach((function(t) { e.addEventListener(t, (function(e) { e.preventDefault(), e.stopPropagation(), r.exitMiniplayer() })) })) }, e.exitMiniplayer = function() {
                (0, i.removeClass)(this.root, "xgplayer-miniplayer-active"), this.root.style.right = "", this.root.style.bottom = "", this.root.style.top = "", this.root.style.left = "", this.config.fluid ? (this.root.style.width = "100%", this.root.style.height = "0", this.root.style["padding-top"] = 100 * this.config.height / this.config.width + "%") : (this.config.width && ("number" != typeof this.config.width ? this.root.style.width = this.config.width : this.root.style.width = this.config.width + "px"), this.config.height && ("number" != typeof this.config.height ? this.root.style.height = this.config.height : this.root.style.height = this.config.height + "px")); var e = (0, i.findDom)(this.root, ".xgplayer-miniplayer-lay");
                e && e.parentNode && e.parentNode.removeChild(e); var t = (0, i.findDom)(this.root, ".xgplayer-miniplayer-drag");
                t && t.parentNode && t.parentNode.removeChild(t) } } }, e.exports = t.default }, function(e, t, n) { var r, i;
    /*!
     * Draggabilly v2.3.0
     * Make that shiz draggable
     * https://draggabilly.desandro.com
     * MIT license
     */
    ! function(a, o) { r = [n(94), n(95)], void 0 === (i = function(e, t) { return function(e, t, n) {
                function r(e, t) { for (var n in t) e[n] = t[n]; return e } var i = e.jQuery;

                function a(e, t) { this.element = "string" == typeof e ? document.querySelector(e) : e, i && (this.$element = i(this.element)), this.options = r({}, this.constructor.defaults), this.option(t), this._create() } var o = a.prototype = Object.create(n.prototype);
                a.defaults = {}, o.option = function(e) { r(this.options, e) }; var l = { relative: !0, absolute: !0, fixed: !0 };

                function s(e, t, n) { return n = n || "round", t ? Math[n](e / t) * t : e }
                o._create = function() { this.position = {}, this._getPosition(), this.startPoint = { x: 0, y: 0 }, this.dragPoint = { x: 0, y: 0 }, this.startPosition = r({}, this.position); var e = getComputedStyle(this.element);
                    l[e.position] || (this.element.style.position = "relative"), this.on("pointerMove", this.onPointerMove), this.on("pointerUp", this.onPointerUp), this.enable(), this.setHandles() }, o.setHandles = function() { this.handles = this.options.handle ? this.element.querySelectorAll(this.options.handle) : [this.element], this.bindHandles() }, o.dispatchEvent = function(e, t, n) { var r = [t].concat(n);
                    this.emitEvent(e, r), this.dispatchJQueryEvent(e, t, n) }, o.dispatchJQueryEvent = function(t, n, r) { var i = e.jQuery; if (i && this.$element) { var a = i.Event(n);
                        a.type = t, this.$element.trigger(a, r) } }, o._getPosition = function() { var e = getComputedStyle(this.element),
                        t = this._getPositionCoord(e.left, "width"),
                        n = this._getPositionCoord(e.top, "height");
                    this.position.x = isNaN(t) ? 0 : t, this.position.y = isNaN(n) ? 0 : n, this._addTransformPosition(e) }, o._getPositionCoord = function(e, n) { if (-1 != e.indexOf("%")) { var r = t(this.element.parentNode); return r ? parseFloat(e) / 100 * r[n] : 0 } return parseInt(e, 10) }, o._addTransformPosition = function(e) { var t = e.transform; if (0 === t.indexOf("matrix")) { var n = t.split(","),
                            r = 0 === t.indexOf("matrix3d") ? 12 : 4,
                            i = parseInt(n[r], 10),
                            a = parseInt(n[r + 1], 10);
                        this.position.x += i, this.position.y += a } }, o.onPointerDown = function(e, t) { this.element.classList.add("is-pointer-down"), this.dispatchJQueryEvent("pointerDown", e, [t]) }, o.pointerDown = function(e, t) { this.okayPointerDown(e) && this.isEnabled ? (this.pointerDownPointer = { pageX: t.pageX, pageY: t.pageY }, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.element.classList.add("is-pointer-down"), this.dispatchEvent("pointerDown", e, [t])) : this._pointerReset() }, o.dragStart = function(e, t) { this.isEnabled && (this._getPosition(), this.measureContainment(), this.startPosition.x = this.position.x, this.startPosition.y = this.position.y, this.setLeftTop(), this.dragPoint.x = 0, this.dragPoint.y = 0, this.element.classList.add("is-dragging"), this.dispatchEvent("dragStart", e, [t]), this.animate()) }, o.measureContainment = function() { var e = this.getContainer(); if (e) { var n = t(this.element),
                            r = t(e),
                            i = this.element.getBoundingClientRect(),
                            a = e.getBoundingClientRect(),
                            o = r.borderLeftWidth + r.borderRightWidth,
                            l = r.borderTopWidth + r.borderBottomWidth,
                            s = this.relativeStartPosition = { x: i.left - (a.left + r.borderLeftWidth), y: i.top - (a.top + r.borderTopWidth) };
                        this.containSize = { width: r.width - o - s.x - n.width, height: r.height - l - s.y - n.height } } }, o.getContainer = function() { var e = this.options.containment; if (e) return e instanceof HTMLElement ? e : "string" == typeof e ? document.querySelector(e) : this.element.parentNode }, o.onPointerMove = function(e, t, n) { this.dispatchJQueryEvent("pointerMove", e, [t, n]) }, o.dragMove = function(e, t, n) { if (this.isEnabled) { var r = n.x,
                            i = n.y,
                            a = this.options.grid,
                            o = a && a[0],
                            l = a && a[1];
                        r = s(r, o), i = s(i, l), r = this.containDrag("x", r, o), i = this.containDrag("y", i, l), r = "y" == this.options.axis ? 0 : r, i = "x" == this.options.axis ? 0 : i, this.position.x = this.startPosition.x + r, this.position.y = this.startPosition.y + i, this.dragPoint.x = r, this.dragPoint.y = i, this.dispatchEvent("dragMove", e, [t, n]) } }, o.containDrag = function(e, t, n) { if (!this.options.containment) return t; var r = "x" == e ? "width" : "height",
                        i = s(-this.relativeStartPosition[e], n, "ceil"),
                        a = this.containSize[r]; return a = s(a, n, "floor"), Math.max(i, Math.min(a, t)) }, o.onPointerUp = function(e, t) { this.element.classList.remove("is-pointer-down"), this.dispatchJQueryEvent("pointerUp", e, [t]) }, o.dragEnd = function(e, t) { this.isEnabled && (this.element.style.transform = "", this.setLeftTop(), this.element.classList.remove("is-dragging"), this.dispatchEvent("dragEnd", e, [t])) }, o.animate = function() { if (this.isDragging) { this.positionDrag(); var e = this;
                        requestAnimationFrame((function() { e.animate() })) } }, o.setLeftTop = function() { this.element.style.left = this.position.x + "px", this.element.style.top = this.position.y + "px" }, o.positionDrag = function() { this.element.style.transform = "translate3d( " + this.dragPoint.x + "px, " + this.dragPoint.y + "px, 0)" }, o.staticClick = function(e, t) { this.dispatchEvent("staticClick", e, [t]) }, o.setPosition = function(e, t) { this.position.x = e, this.position.y = t, this.setLeftTop() }, o.enable = function() { this.isEnabled = !0 }, o.disable = function() { this.isEnabled = !1, this.isDragging && this.dragEnd() }, o.destroy = function() { this.disable(), this.element.style.transform = "", this.element.style.left = "", this.element.style.top = "", this.element.style.position = "", this.unbindHandles(), this.$element && this.$element.removeData("draggabilly") }, o._init = function() {}, i && i.bridget && i.bridget("draggabilly", a); return a }(a, e, t) }.apply(t, r)) || (e.exports = i) }(window) }, function(e, t, n) { var r, i;
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */
    window, void 0 === (i = "function" == typeof(r = function() { "use strict";

        function e(e) { var t = parseFloat(e); return -1 == e.indexOf("%") && !isNaN(t) && t } var t = "undefined" == typeof console ? function() {} : function(e) { console.error(e) },
            n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = n.length;

        function i(e) { var n = getComputedStyle(e); return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n } var a, o = !1;

        function l(t) { if (function() { if (!o) { o = !0; var t = document.createElement("div");
                        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box"; var n = document.body || document.documentElement;
                        n.appendChild(t); var r = i(t);
                        a = 200 == Math.round(e(r.width)), l.isBoxSizeOuter = a, n.removeChild(t) } }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) { var s = i(t); if ("none" == s.display) return function() { for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; t < r; t++) e[n[t]] = 0; return e }(); var u = {};
                u.width = t.offsetWidth, u.height = t.offsetHeight; for (var c = u.isBorderBox = "border-box" == s.boxSizing, p = 0; p < r; p++) { var d = n[p],
                        f = s[d],
                        g = parseFloat(f);
                    u[d] = isNaN(g) ? 0 : g } var h = u.paddingLeft + u.paddingRight,
                    y = u.paddingTop + u.paddingBottom,
                    v = u.marginLeft + u.marginRight,
                    x = u.marginTop + u.marginBottom,
                    m = u.borderLeftWidth + u.borderRightWidth,
                    b = u.borderTopWidth + u.borderBottomWidth,
                    k = c && a,
                    w = e(s.width);!1 !== w && (u.width = w + (k ? 0 : h + m)); var _ = e(s.height); return !1 !== _ && (u.height = _ + (k ? 0 : y + b)), u.innerWidth = u.width - (h + m), u.innerHeight = u.height - (y + b), u.outerWidth = u.width + v, u.outerHeight = u.height + x, u } } return l }) ? r.call(t, n, t, e) : r) || (e.exports = i) }, function(e, t, n) { var r, i;
    /*!
     * Unidragger v2.3.1
     * Draggable base class
     * MIT license
     */
    ! function(a, o) { r = [n(96)], void 0 === (i = function(e) { return function(e, t) { "use strict";

                function n() {} var r = n.prototype = Object.create(t.prototype);
                r.bindHandles = function() { this._bindHandles(!0) }, r.unbindHandles = function() { this._bindHandles(!1) }, r._bindHandles = function(t) { for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", r = t ? this._touchActionValue : "", i = 0; i < this.handles.length; i++) { var a = this.handles[i];
                        this._bindStartEvent(a, t), a[n]("click", this), e.PointerEvent && (a.style.touchAction = r) } }, r._touchActionValue = "none", r.pointerDown = function(e, t) { this.okayPointerDown(e) && (this.pointerDownPointer = { pageX: t.pageX, pageY: t.pageY }, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])) }; var i = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                    a = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 }; return r.okayPointerDown = function(e) { var t = i[e.target.nodeName],
                        n = a[e.target.type],
                        r = !t || n; return r || this._pointerReset(), r }, r.pointerDownBlur = function() { var e = document.activeElement;
                    e && e.blur && e != document.body && e.blur() }, r.pointerMove = function(e, t) { var n = this._dragPointerMove(e, t);
                    this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n) }, r._dragPointerMove = function(e, t) { var n = { x: t.pageX - this.pointerDownPointer.pageX, y: t.pageY - this.pointerDownPointer.pageY }; return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n }, r.hasDragStarted = function(e) { return Math.abs(e.x) > 3 || Math.abs(e.y) > 3 }, r.pointerUp = function(e, t) { this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t) }, r._dragPointerUp = function(e, t) { this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t) }, r._dragStart = function(e, t) { this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t) }, r.dragStart = function(e, t) { this.emitEvent("dragStart", [e, t]) }, r._dragMove = function(e, t, n) { this.isDragging && this.dragMove(e, t, n) }, r.dragMove = function(e, t, n) { e.preventDefault(), this.emitEvent("dragMove", [e, t, n]) }, r._dragEnd = function(e, t) { this.isDragging = !1, setTimeout(function() { delete this.isPreventingClicks }.bind(this)), this.dragEnd(e, t) }, r.dragEnd = function(e, t) { this.emitEvent("dragEnd", [e, t]) }, r.onclick = function(e) { this.isPreventingClicks && e.preventDefault() }, r._staticClick = function(e, t) { this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function() { delete this.isIgnoringMouseUp }.bind(this), 400))) }, r.staticClick = function(e, t) { this.emitEvent("staticClick", [e, t]) }, n.getPointerPoint = t.getPointerPoint, n }(a, e) }.apply(t, r)) || (e.exports = i) }(window) }, function(e, t, n) { var r, i;
    /*!
     * Unipointer v2.3.0
     * base class for doing one thing with pointer event
     * MIT license
     */
    ! function(a, o) { r = [n(97)], void 0 === (i = function(e) { return function(e, t) { "use strict";

                function n() {} var r = n.prototype = Object.create(t.prototype);
                r.bindStartEvent = function(e) { this._bindStartEvent(e, !0) }, r.unbindStartEvent = function(e) { this._bindStartEvent(e, !1) }, r._bindStartEvent = function(t, n) { var r = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
                        i = "mousedown";
                    e.PointerEvent ? i = "pointerdown" : "ontouchstart" in e && (i = "touchstart"), t[r](i, this) }, r.handleEvent = function(e) { var t = "on" + e.type;
                    this[t] && this[t](e) }, r.getTouch = function(e) { for (var t = 0; t < e.length; t++) { var n = e[t]; if (n.identifier == this.pointerIdentifier) return n } }, r.onmousedown = function(e) { var t = e.button;
                    t && 0 !== t && 1 !== t || this._pointerDown(e, e) }, r.ontouchstart = function(e) { this._pointerDown(e, e.changedTouches[0]) }, r.onpointerdown = function(e) { this._pointerDown(e, e) }, r._pointerDown = function(e, t) { e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t)) }, r.pointerDown = function(e, t) { this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]) }; var i = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] }; return r._bindPostStartEvents = function(t) { if (t) { var n = i[t.type];
                        n.forEach((function(t) { e.addEventListener(t, this) }), this), this._boundPointerEvents = n } }, r._unbindPostStartEvents = function() { this._boundPointerEvents && (this._boundPointerEvents.forEach((function(t) { e.removeEventListener(t, this) }), this), delete this._boundPointerEvents) }, r.onmousemove = function(e) { this._pointerMove(e, e) }, r.onpointermove = function(e) { e.pointerId == this.pointerIdentifier && this._pointerMove(e, e) }, r.ontouchmove = function(e) { var t = this.getTouch(e.changedTouches);
                    t && this._pointerMove(e, t) }, r._pointerMove = function(e, t) { this.pointerMove(e, t) }, r.pointerMove = function(e, t) { this.emitEvent("pointerMove", [e, t]) }, r.onmouseup = function(e) { this._pointerUp(e, e) }, r.onpointerup = function(e) { e.pointerId == this.pointerIdentifier && this._pointerUp(e, e) }, r.ontouchend = function(e) { var t = this.getTouch(e.changedTouches);
                    t && this._pointerUp(e, t) }, r._pointerUp = function(e, t) { this._pointerDone(), this.pointerUp(e, t) }, r.pointerUp = function(e, t) { this.emitEvent("pointerUp", [e, t]) }, r._pointerDone = function() { this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone() }, r._pointerReset = function() { this.isPointerDown = !1, delete this.pointerIdentifier }, r.pointerDone = function() {}, r.onpointercancel = function(e) { e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e) }, r.ontouchcancel = function(e) { var t = this.getTouch(e.changedTouches);
                    t && this._pointerCancel(e, t) }, r._pointerCancel = function(e, t) { this._pointerDone(), this.pointerCancel(e, t) }, r.pointerCancel = function(e, t) { this.emitEvent("pointerCancel", [e, t]) }, n.getPointerPoint = function(e) { return { x: e.pageX, y: e.pageY } }, n }(a, e) }.apply(t, r)) || (e.exports = i) }(window) }, function(e, t, n) { var r, i; "undefined" != typeof window && window, void 0 === (i = "function" == typeof(r = function() { "use strict";

        function e() {} var t = e.prototype; return t.on = function(e, t) { if (e && t) { var n = this._events = this._events || {},
                    r = n[e] = n[e] || []; return -1 == r.indexOf(t) && r.push(t), this } }, t.once = function(e, t) { if (e && t) { this.on(e, t); var n = this._onceEvents = this._onceEvents || {}; return (n[e] = n[e] || {})[t] = !0, this } }, t.off = function(e, t) { var n = this._events && this._events[e]; if (n && n.length) { var r = n.indexOf(t); return -1 != r && n.splice(r, 1), this } }, t.emitEvent = function(e, t) { var n = this._events && this._events[e]; if (n && n.length) { n = n.slice(0), t = t || []; for (var r = this._onceEvents && this._onceEvents[e], i = 0; i < n.length; i++) { var a = n[i];
                    r && r[a] && (this.off(e, a), delete r[a]), a.apply(this, t) } return this } }, t.allOff = function() { delete this._events, delete this._onceEvents }, e }) ? r.call(t, n, t, e) : r) || (e.exports = i) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "pip", method: function() { var e = this,
                t = this;

            function n() { t.video !== document.pictureInPictureElement ? t.video.requestPictureInPicture() : document.exitPictureInPicture() }
            t.on("pipBtnClick", n); var i = function(n) { var i = t.video.webkitPresentationMode;
                e.pMode = i, i === r.PresentationMode.PIP ? t.emit("requestPictureInPicture", n.pictureInPictureWindow) : i === r.PresentationMode.INLINE && t.emit("exitPictureInPicture") };
            t.video.addEventListener("enterpictureinpicture", (function(e) { t.emit("requestPictureInPicture", e) })), t.video.addEventListener("leavepictureinpicture", (function() { t.emit("exitPictureInPicture") })), (0, r.checkWebkitSetPresentationMode)(t.video) && t.video.addEventListener("webkitpresentationmodechanged", i), t.once("destroy", (function e() { t.off("pipBtnClick", n), t.off("destroy", e), (0, r.checkWebkitSetPresentationMode)(t.video) && t.video.removeEventListener("webkitpresentationmodechanged", i) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = { name: "playNext", method: function() { var e = this,
                t = e.config.playNext;

            function n() { e.currentVideoIndex + 1 < t.urlList.length && (e.currentVideoIndex++, e.video.autoplay = !0, e.src = t.urlList[e.currentVideoIndex], e.emit("playerNext", e.currentVideoIndex + 1), e.currentVideoIndex + 1 === t.urlList.length && e.emit("urlListEnd")) }
            e.currentVideoIndex = -1, e.on("playNextBtnClick", n), e.once("destroy", (function t() { e.off("playNextBtnClick", n), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "reload", method: function() { var e = this;

            function t() {
                (0, r.removeClass)(e.root, "xgplayer-is-error"), e.src = e.config.url }
            e.config.reload && (e.on("reloadBtnClick", t), e.once("destroy", (function n() { e.off("reloadBtnClick", t), e.off("destroy", n) }))) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = { name: "rotate", method: function() { var e = this,
                t = e.config.rotate;

            function n() { e.rotate(t.clockwise, t.innerRotate) }
            t && (e.on("rotateBtnClick", n), e.once("destroy", (function t() { e.off("rotateBtnClick", n), e.off("destroy", t) })), e.updateRotateDeg = function() { this.rotateDeg || (this.rotateDeg = 0); var e = this.root.offsetWidth,
                    t = this.root.offsetHeight,
                    n = this.video.videoWidth,
                    r = this.video.videoHeight;!this.config.rotate.innerRotate && this.config.rotate.controlsFix && (this.root.style.width = t + "px", this.root.style.height = e + "px"); var i = void 0; if (.25 === this.rotateDeg || .75 === this.rotateDeg) { if (this.config.rotate.innerRotate)
                        if (n / r > t / e) { i = t / (r / n > t / e ? t * n / r : e) } else { i = e / (r / n > t / e ? t : e * r / n) }
                    else i = e >= t ? e / t : t / e;
                    i = Number(i.toFixed(5)) } else i = 1;
                this.config.rotate.innerRotate || this.config.rotate.controlsFix ? (this.video.style.transformOrigin = "center center", this.video.style.transform = "rotate(" + this.rotateDeg + "turn) scale(" + i + ")", this.video.style.webKitTransform = "rotate(" + this.rotateDeg + "turn) scale(" + i + ")") : (this.root.style.transformOrigin = "center center", this.root.style.transform = "rotate(" + this.rotateDeg + "turn) scale(1)", this.root.style.webKitTransform = "rotate(" + this.rotateDeg + "turn) scale(1)") }, e.rotate = function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    n = this;
                n.rotateDeg || (n.rotateDeg = 0); var r = e ? 1 : -1;
                n.rotateDeg = (n.rotateDeg + 1 + .25 * r * t) % 1, this.updateRotateDeg(), n.emit("rotate", 360 * n.rotateDeg) }) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = { name: "screenShot", method: function() { var e = this,
                t = e.config.screenShot; if (t) { e.video.setAttribute("crossOrigin", "anonymous"); var n = .92;
                (t.quality || 0 === t.quality) && (n = t.quality); var r = void 0 === t.type ? "image/png" : t.type,
                    i = void 0 === t.format ? ".png" : t.format,
                    a = document.createElement("canvas"),
                    o = a.getContext("2d"),
                    l = new Image;
                a.width = this.config.width || 600, a.height = this.config.height || 337.5; var s = function(e, t) { var n = document.createElement("a");
                    n.href = e, n.download = t; var r = document.createEvent("MouseEvents");
                    r.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), n.dispatchEvent(r) };
                e.screenShot = function() { var u = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    u = void 0 === t.saveImg ? u : t.saveImg, a.width = e.video.videoWidth || 600, a.height = e.video.videoHeight || 337.5, l.onload = function() { o.drawImage(e.video, 0, 0, a.width, a.height), l.src = a.toDataURL(r, n).replace(r, "image/octet-stream"); var t = l.src.replace(/^data:image\/[^;]+/, "data:application/octet-stream");
                        e.emit("screenShot", t), u && s(t, "截图" + i) }() }, e.on("screenShotBtnClick", e.screenShot), e.once("destroy", (function t() { e.off("screenShotBtnClick", e.screenShot), e.off("destroy", t) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(4),
        a = (r = i) && r.__esModule ? r : { default: r };
    t.default = { name: "stallCheck", method: function() { var e = this; if (e.config.enableStallCheck) { var t = 0,
                    n = void 0,
                    r = void 0;
                e.once("complete", (function() { setInterval((function() { e.currentTime - (t || 0) > .1 || e.paused ? 1 !== n && 2 !== n || (n = 0, clearTimeout(r), r = null) : n || (n = 1, r = setTimeout((function() { 1 === n && (n = 2, e.emit("error", new a.default("STALL"))), r = null }), 2e4)), t = e.currentTime }), 1e3) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(5),
        o = (r = a) && r.__esModule ? r : { default: r };
    t.default = { name: "volume", method: function() { var e = this,
                t = e.root,
                n = void 0,
                r = void 0,
                a = void 0,
                l = void 0;

            function s() { e.controls && (e.volume = e.config.volume, (n = e.controls.querySelector(".xgplayer-volume")) && (r = n.querySelector(".xgplayer-slider"), a = n.querySelector(".xgplayer-bar"), l = n.querySelector(".xgplayer-drag"), "mobile" === o.default.device && (0 === e.volume && (e.video.muted = !0), g()))) }

            function u(t) { if (r) { e.video.muted = !1, r.focus(), (0, i.event)(t); var n = a.getBoundingClientRect(),
                        o = (t.clientX, t.clientY),
                        s = l.getBoundingClientRect().height,
                        u = !1,
                        c = function(t) { t.preventDefault(), t.stopPropagation(), (0, i.event)(t), u = !0; var r = s - t.clientY + o,
                                a = r / n.height;
                            l.style.height = r + "px", e.volume = Math.max(Math.min(a, 1), 0) },
                        p = function t(a) { if (a.preventDefault(), a.stopPropagation(), (0, i.event)(a), window.removeEventListener("mousemove", c), window.removeEventListener("touchmove", c), window.removeEventListener("mouseup", t), window.removeEventListener("touchend", t), !u) { var o = n.height - (a.clientY - n.top),
                                    s = o / n.height;
                                l.style.height = o + "px", s <= 0 && (e.volume > 0 ? l.volume = e.video.volume : s = l.volume), e.volume = Math.max(Math.min(s, 1), 0) }
                            r.volume = e.volume, u = !1 }; return window.addEventListener("mousemove", c), window.addEventListener("touchmove", c), window.addEventListener("mouseup", p), window.addEventListener("touchend", p), !1 } }

            function c() { if ("mobile" === o.default.device) e.video.muted ? (e.video.muted = !1, e.emit("unmute"), e.volume = 1) : (e.video.muted = !0, e.emit("mute"), e.volume = 0);
                else { if (!r) return;
                    e.video.muted = !1, e.volume < .1 ? (r.volume < .1 ? e.volume = .6 : e.volume = r.volume, e.emit("unmute")) : (e.volume = 0, e.emit("mute")) } }

            function p() {
                (0, i.addClass)(t, "xgplayer-volume-active"), n && n.focus() }

            function d() {
                (0, i.removeClass)(t, "xgplayer-volume-active") }
            e.once("canplay", s), e.on("volumeBarClick", u), e.on("volumeIconClick", c), e.on("volumeIconEnter", p), e.on("volumeIconLeave", d); var f = null;

            function g() { f && clearTimeout(f), f = setTimeout((function() { if ("mobile" === o.default.device)(0, i.removeClass)(t, "xgplayer-volume-muted"), (0, i.removeClass)(t, "xgplayer-volume-large"), e.video.muted || e.video.defaultMuted ? (e.video.muted || (e.video.muted = !0), e.video.defaultMuted = !1, (0, i.addClass)(t, "xgplayer-volume-muted")) : (0, i.addClass)(t, "xgplayer-volume-large");
                    else { if ((0, i.removeClass)(t, "xgplayer-volume-muted"), (0, i.removeClass)(t, "xgplayer-volume-small"), (0, i.removeClass)(t, "xgplayer-volume-large"), 0 === e.volume || e.muted ? (0, i.addClass)(t, "xgplayer-volume-muted") : e.volume < .5 ? (0, i.addClass)(t, "xgplayer-volume-small") : (0, i.addClass)(t, "xgplayer-volume-large"), !a) return; var n = a.getBoundingClientRect().height || 76;
                        l.style.height = e.volume * n + "px" } }), 50) }
            e.on("volumechange", g), e.once("destroy", (function t() { e.off("canplay", s), e.off("volumeBarClick", u), e.off("volumeIconClick", c), e.off("volumeIconEnter", p), e.off("volumeIconLeave", d), e.off("volumechange", g), e.off("destroy", t), f && (clearTimeout(f), f = null) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = function() {
            function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
        a = n(106),
        o = (r = a) && r.__esModule ? r : { default: r }; var l = { follow: !0, mode: "stroke", followBottom: 50, fitVideo: !0, offsetBottom: 2, baseSizeX: 49, baseSizeY: 28, minSize: 16, minMobileSize: 13, line: "double", fontColor: "#fff" },
        s = function() {
            function e(t, n, r) { var i = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e); var a = this.create(n, r, t.textTrackShowDefault);
                a.attachPlayer(t), this.subtitle = a, this.player = t, this.positionData = { vBottom: 0, marginBottom: 0 }, this.isActive = !1, this.followBottom = r.followBottom, ["onSubtitleResize", "onFocus", "onBlur"].map((function(e) { i[e] = i[e].bind(i) })), t.controls && r.follow && (this.subtitle.on("resize", this.onSubtitleResize), t.on("focus", this.onFocus), t.on("blur", this.onBlur)) } return i(e, [{ key: "create", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = { subTitles: e, defaultOpen: n }; return Object.keys(t).map((function(e) { r[e] = t[e] })), new o.default(r) } }, { key: "switch", value: function(e) { return this.subtitle.switch(e) } }, { key: "switchOff", value: function() { return this.subtitle.switchOff() } }, { key: "setSubTitles", value: function(e, t, n) { return this.subtitle.setSubTitles(e, t, n) } }, { key: "onFocus", value: function() { var e = this.positionData,
                        t = e.marginBottom,
                        n = e.vBottom; if (!this.isActive && t) { this.isActive = !0; var r = t + n;
                        this.followBottom > r && (r = this.followBottom), this.subtitle && (this.subtitle.root.style.bottom = r + "px") } } }, { key: "onBlur", value: function() { this.isActive = !1; var e = this.positionData.vBottom + this.positionData.marginBottom;
                    this.subtitle && (this.subtitle.root.style.bottom = e + "px") } }, { key: "onSubtitleResize", value: function(e) { this.positionData.vBottom = e.vBottom, this.positionData.marginBottom = e.marginBottom } }, { key: "destroy", value: function() { this.subtitle.off("resize", this.onSubtitleResize), this.player.off("focus", this.onFocus), this.player.off("blur", this.onBlur), this.subtitle.destroy(), this.subtitle = null } }]), e }();
    t.default = { name: "textTrack", method: function() { var e = this,
                t = this,
                n = t.config.textTrack; if (n) { var r = t.config.textTrackStyle || {};
                Object.keys(l).map((function(e) { void 0 === r[e] && (r[e] = l[e]) })), t.textTrackShowDefault = !1, t.config.textTrack.map((function(e, n) { e.id || e.language || (e.id = n), !e.url && (e.url = e.src), !e.language && (e.language = e.srclang), void 0 === e.isDefault && (e.isDefault = e.default), !t.textTrackShowDefault && (t.textTrackShowDefault = e.isDefault || e.default) })), this.subTitles = new s(t, t.config.textTrack, r), t.setSubTitles = function(n) { var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !1;
                    n.map((function(e, t) { e.id || e.language || (e.id = t), !e.url && (e.url = e.src), !e.language && (e.language = e.srclang), void 0 === e.isDefault && (e.isDefault = e.default), e.isDefault && (i = !0) })), t.textTrackShowDefault = i, e.subTitles.setSubTitles(n, i, r), t.emit("subtitle_change", { off: !1, isListUpdate: !0, list: n }) }, t.switchSubTitle = function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { id: "", language: "" };
                    e.subTitles.switch(n).then((function(e) { 0 === e.code && (n.off = !1, n.isListUpdate = !1, n.list = [], t.emit("subtitle_change", n)) })) }, t.switchOffSubtile = function() { e.subTitles.switchOff(), t.emit("subtitle_change", { off: !0, isListUpdate: !1, list: [] }) }, t.once("destroy", (function() { this.subTitles.destroy(), this.subTitles = null })) } } }, e.exports = t.default }, function(e, t, n) { e.exports = function() { "use strict";

        function e(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e }

        function t(e, t) { return e(t = { exports: {} }, t.exports), t.exports }

        function n(e) { var t, n;
            this.promise = new e((function(e, r) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r })), this.resolve = P(t), this.reject = P(n) }

        function r(e) { var t = e.length; return 3 === t ? (60 * (60 * Number(e[0]) + Number(e[1])) * 1e3 + 1e3 * Number(e[2])) / 1e3 : 2 === t ? (60 * Number(e[0]) * 1e3 + 1e3 * Number(e[1])) / 1e3 : Number(e[0]) }

        function i(e) { return /^(\-|\+)?\d+(\.\d+)?$/.test(e) }

        function a(e, t) { return e >= 0 && e < t.length ? t[e] : "" }

        function o(e, t) { if (!e) return !1; if (e.classList) return Array.prototype.some.call(e.classList, (function(e) { return e === t })); var n = e.className && "object" === Dt(e.className) ? e.getAttribute("class") : e.className; return n && !!n.match(new RegExp("(\\s|^)" + t + "(\\s|$)")) }

        function l(e, t) { e && (e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach((function(t) { t && e.classList.add(t) })) : o(e, t) || (e.className && "object" === Dt(e.className) ? e.setAttribute("class", e.getAttribute("class") + " " + t) : e.className += " " + t)) }

        function s() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                i = document.createElement(e); return i.className = r, i.innerHTML = t, ir(n).forEach((function(t) { var r = t,
                    a = n[t]; "video" === e || "audio" === e || "live-video" === e ? a && i.setAttribute(r, a) : i.setAttribute(r, a) })), i }

        function u(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = { code: mr[e].code, msg: mr[e].msg }; return ir(t).map((function(e) { n[e] = t[e] })), n }

        function c(e, t, n, r, i) { i ? n(u(2, i), { format: r.format }) : r.format ? (e.list = r.list, e.format = r.format, e.styles = r.styles, t(e)) : n(u(3)) }

        function p(e) { return new nr((function(t, n) { if (e.list) t(e);
                else { if (e.json) { var r = yr.parseJson(e.json); return e.list = r, e.format = "json", void t(e) } if (e.stringContent && !e.url) yr.parse(e.stringContent, (function(r, i) { c(e, t, n, r, i) }));
                    else if (e.url) new or({ url: e.url, type: "text" }).then((function(r) { yr.parse(r.res.response, (function(r, i) { c(e, t, n, r, i) })) })).catch((function(t) { var r = u(1, { statusText: t.statusText, status: t.status, type: t.type, message: "http load error", url: e.url });
                        n(r) }));
                    else { var i = u(8);
                        n(i) } } })) }

        function d(e, t) { return !!(e.id && e.id === t.id || e.language && e.language === t.language) } var f = function(e) { if (null == e) throw TypeError("Can't call method on  " + e); return e },
            g = function(e) { return Object(f(e)) },
            h = {}.hasOwnProperty,
            y = function(e, t) { return h.call(e, t) },
            v = t((function(e) { var t = e.exports = { version: "2.6.12" }; "number" == typeof __e && (__e = t) })),
            x = (v.version, t((function(e) { var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = t) }))),
            m = t((function(e) { var t = x["__core-js_shared__"] || (x["__core-js_shared__"] = {});
                (e.exports = function(e, n) { return t[e] || (t[e] = void 0 !== n ? n : {}) })("versions", []).push({ version: v.version, mode: "pure", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" }) })),
            b = 0,
            k = Math.random(),
            w = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++b + k).toString(36)) },
            _ = m("keys"),
            E = function(e) { return _[e] || (_[e] = w(e)) },
            T = E("IE_PROTO"),
            C = Object.prototype,
            S = Object.getPrototypeOf || function(e) { return e = g(e), y(e, T) ? e[T] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? C : null },
            P = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e },
            O = function(e, t, n) { if (P(e), void 0 === t) return e; switch (n) {
                    case 1:
                        return function(n) { return e.call(t, n) };
                    case 2:
                        return function(n, r) { return e.call(t, n, r) };
                    case 3:
                        return function(n, r, i) { return e.call(t, n, r, i) } } return function() { return e.apply(t, arguments) } },
            L = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e },
            M = function(e) { if (!L(e)) throw TypeError(e + " is not an object!"); return e },
            R = function(e) { try { return !!e() } catch (e) { return !0 } },
            D = !R((function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a })),
            A = x.document,
            j = L(A) && L(A.createElement),
            I = function(e) { return j ? A.createElement(e) : {} },
            z = !D && !R((function() { return 7 != Object.defineProperty(I("div"), "a", { get: function() { return 7 } }).a })),
            B = function(e, t) { if (!L(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !L(r = n.call(e))) return r; if ("function" == typeof(n = e.valueOf) && !L(r = n.call(e))) return r; if (!t && "function" == typeof(n = e.toString) && !L(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") },
            N = Object.defineProperty,
            F = { f: D ? Object.defineProperty : function(e, t, n) { if (M(e), t = B(t, !0), M(n), z) try { return N(e, t, n) } catch (e) {}
                    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } },
            q = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } },
            H = D ? function(e, t, n) { return F.f(e, t, q(1, n)) } : function(e, t, n) { return e[t] = n, e },
            U = function(e, t, n) { var r, i, a, o = e & U.F,
                    l = e & U.G,
                    s = e & U.S,
                    u = e & U.P,
                    c = e & U.B,
                    p = e & U.W,
                    d = l ? v : v[t] || (v[t] = {}),
                    f = d.prototype,
                    g = l ? x : s ? x[t] : (x[t] || {}).prototype; for (r in l && (n = t), n)(i = !o && g && void 0 !== g[r]) && y(d, r) || (a = i ? g[r] : n[r], d[r] = l && "function" != typeof g[r] ? n[r] : c && i ? O(a, x) : p && g[r] == a ? function(e) { var t = function(t, n, r) { if (this instanceof e) { switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n) } return new e(t, n, r) } return e.apply(this, arguments) }; return t.prototype = e.prototype, t }(a) : u && "function" == typeof a ? O(Function.call, a) : a, u && ((d.virtual || (d.virtual = {}))[r] = a, e & U.R && f && !f[r] && H(f, r, a))) };
        U.F = 1, U.G = 2, U.S = 4, U.P = 8, U.B = 16, U.W = 32, U.U = 64, U.R = 128; var W = U,
            V = function(e, t) { var n = (v.Object || {})[e] || Object[e],
                    r = {};
                r[e] = t(n), W(W.S + W.F * R((function() { n(1) })), "Object", r) };
        V("getPrototypeOf", (function() { return function(e) { return S(g(e)) } })); var Y = v.Object.getPrototypeOf,
            K = e(t((function(e) { e.exports = { default: Y, __esModule: !0 } }))),
            X = e(t((function(e, t) { t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }))),
            G = Math.ceil,
            $ = Math.floor,
            J = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? $ : G)(e) },
            Z = H,
            Q = {},
            ee = {}.toString,
            te = function(e) { return ee.call(e).slice(8, -1) },
            ne = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == te(e) ? e.split("") : Object(e) },
            re = function(e) { return ne(f(e)) },
            ie = Math.min,
            ae = function(e) { return e > 0 ? ie(J(e), 9007199254740991) : 0 },
            oe = Math.max,
            le = Math.min,
            se = function(e, t, n) { for (var r = re(e), i = ae(r.length), a = function(e, t) { return (e = J(e)) < 0 ? oe(e + t, 0) : le(e, t) }(n, i); i > a; a++)
                    if (a in r && r[a] === t) return a || 0;
                return -1 },
            ue = E("IE_PROTO"),
            ce = function(e, t) { var n, r = re(e),
                    i = 0,
                    a = []; for (n in r) n != ue && y(r, n) && a.push(n); for (; t.length > i;) y(r, n = t[i++]) && (~se(a, n) || a.push(n)); return a },
            pe = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
            de = Object.keys || function(e) { return ce(e, pe) },
            fe = D ? Object.defineProperties : function(e, t) { M(e); for (var n, r = de(t), i = r.length, a = 0; i > a;) F.f(e, n = r[a++], t[n]); return e },
            ge = x.document,
            he = ge && ge.documentElement,
            ye = E("IE_PROTO"),
            ve = function() {},
            xe = function() { var e, t = I("iframe"),
                    n = pe.length; for (t.style.display = "none", he.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), xe = e.F; n--;) delete xe.prototype[pe[n]]; return xe() },
            me = Object.create || function(e, t) { var n; return null !== e ? (ve.prototype = M(e), n = new ve, ve.prototype = null, n[ye] = e) : n = xe(), void 0 === t ? n : fe(n, t) },
            be = t((function(e) { var t = m("wks"),
                    n = x.Symbol,
                    r = "function" == typeof n;
                (e.exports = function(e) { return t[e] || (t[e] = r && n[e] || (r ? n : w)("Symbol." + e)) }).store = t })),
            ke = F.f,
            we = be("toStringTag"),
            _e = function(e, t, n) { e && !y(e = n ? e : e.prototype, we) && ke(e, we, { configurable: !0, value: t }) },
            Ee = {};
        H(Ee, be("iterator"), (function() { return this })); var Te = be("iterator"),
            Ce = !([].keys && "next" in [].keys()),
            Se = function() { return this },
            Pe = function(e, t, n, r, i, a, o) {! function(e, t, n) { e.prototype = me(Ee, { next: q(1, n) }), _e(e, t + " Iterator") }(n, t, r); var l, s, u, c = function(e) { if (!Ce && e in g) return g[e]; switch (e) {
                            case "keys":
                            case "values":
                                return function() { return new n(this, e) } } return function() { return new n(this, e) } },
                    p = t + " Iterator",
                    d = "values" == i,
                    f = !1,
                    g = e.prototype,
                    h = g[Te] || g["@@iterator"] || i && g[i],
                    y = h || c(i),
                    v = i ? d ? c("entries") : y : void 0,
                    x = "Array" == t && g.entries || h; if (x && (u = S(x.call(new e))) !== Object.prototype && u.next && _e(u, p, !0), d && h && "values" !== h.name && (f = !0, y = function() { return h.call(this) }), o && (Ce || f || !g[Te]) && H(g, Te, y), Q[t] = y, Q[p] = Se, i)
                    if (l = { values: d ? y : c("values"), keys: a ? y : c("keys"), entries: v }, o)
                        for (s in l) s in g || Z(g, s, l[s]);
                    else W(W.P + W.F * (Ce || f), t, l);
                return l },
            Oe = function(e, t) { var n, r, i = String(f(e)),
                    a = J(t),
                    o = i.length; return a < 0 || a >= o ? "" : (n = i.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === o || (r = i.charCodeAt(a + 1)) < 56320 || r > 57343 ? i.charAt(a) : i.slice(a, a + 2) };
        Pe(String, "String", (function(e) { this._t = String(e), this._i = 0 }), (function() { var e, t = this._t,
                n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = Oe(t, n), this._i += e.length, { value: e, done: !1 }) })); var Le = function(e, t) { return { value: t, done: !!e } };
        Pe(Array, "Array", (function(e, t) { this._t = re(e), this._i = 0, this._k = t }), (function() { var e = this._t,
                t = this._k,
                n = this._i++; return !e || n >= e.length ? (this._t = void 0, Le(1)) : Le(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]) }), "values"), Q.Arguments = Q.Array; for (var Me = be("toStringTag"), Re = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), De = 0; De < Re.length; De++) { var Ae = Re[De],
                je = x[Ae],
                Ie = je && je.prototype;
            Ie && !Ie[Me] && H(Ie, Me, Ae), Q[Ae] = Q.Array } var ze = { f: be },
            Be = ze.f("iterator"),
            Ne = t((function(e) { e.exports = { default: Be, __esModule: !0 } }));
        e(Ne); var Fe = t((function(e) { var t = w("meta"),
                    n = F.f,
                    r = 0,
                    i = Object.isExtensible || function() { return !0 },
                    a = !R((function() { return i(Object.preventExtensions({})) })),
                    o = function(e) { n(e, t, { value: { i: "O" + ++r, w: {} } }) },
                    l = e.exports = { KEY: t, NEED: !1, fastKey: function(e, n) { if (!L(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!y(e, t)) { if (!i(e)) return "F"; if (!n) return "E";
                                o(e) } return e[t].i }, getWeak: function(e, n) { if (!y(e, t)) { if (!i(e)) return !0; if (!n) return !1;
                                o(e) } return e[t].w }, onFreeze: function(e) { return a && l.NEED && i(e) && !y(e, t) && o(e), e } } })),
            qe = (Fe.KEY, Fe.NEED, Fe.fastKey, Fe.getWeak, Fe.onFreeze, F.f),
            He = function(e) { var t = v.Symbol || (v.Symbol = {}); "_" == e.charAt(0) || e in t || qe(t, e, { value: ze.f(e) }) },
            Ue = { f: Object.getOwnPropertySymbols },
            We = { f: {}.propertyIsEnumerable },
            Ve = Array.isArray || function(e) { return "Array" == te(e) },
            Ye = pe.concat("length", "prototype"),
            Ke = { f: Object.getOwnPropertyNames || function(e) { return ce(e, Ye) } },
            Xe = Ke.f,
            Ge = {}.toString,
            $e = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            Je = { f: function(e) { return $e && "[object Window]" == Ge.call(e) ? function(e) { try { return Xe(e) } catch (e) { return $e.slice() } }(e) : Xe(re(e)) } },
            Ze = Object.getOwnPropertyDescriptor,
            Qe = { f: D ? Ze : function(e, t) { if (e = re(e), t = B(t, !0), z) try { return Ze(e, t) } catch (e) {}
                    if (y(e, t)) return q(!We.f.call(e, t), e[t]) } },
            et = Fe.KEY,
            tt = Qe.f,
            nt = F.f,
            rt = Je.f,
            it = x.Symbol,
            at = x.JSON,
            ot = at && at.stringify,
            lt = be("_hidden"),
            st = be("toPrimitive"),
            ut = {}.propertyIsEnumerable,
            ct = m("symbol-registry"),
            pt = m("symbols"),
            dt = m("op-symbols"),
            ft = Object.prototype,
            gt = "function" == typeof it && !!Ue.f,
            ht = x.QObject,
            yt = !ht || !ht.prototype || !ht.prototype.findChild,
            vt = D && R((function() { return 7 != me(nt({}, "a", { get: function() { return nt(this, "a", { value: 7 }).a } })).a })) ? function(e, t, n) { var r = tt(ft, t);
                r && delete ft[t], nt(e, t, n), r && e !== ft && nt(ft, t, r) } : nt,
            xt = function(e) { var t = pt[e] = me(it.prototype); return t._k = e, t },
            mt = gt && "symbol" == typeof it.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof it },
            bt = function(e, t, n) { return e === ft && bt(dt, t, n), M(e), t = B(t, !0), M(n), y(pt, t) ? (n.enumerable ? (y(e, lt) && e[lt][t] && (e[lt][t] = !1), n = me(n, { enumerable: q(0, !1) })) : (y(e, lt) || nt(e, lt, q(1, {})), e[lt][t] = !0), vt(e, t, n)) : nt(e, t, n) },
            kt = function(e, t) { M(e); for (var n, r = function(e) { var t = de(e),
                            n = Ue.f; if (n)
                            for (var r, i = n(e), a = We.f, o = 0; i.length > o;) a.call(e, r = i[o++]) && t.push(r); return t }(t = re(t)), i = 0, a = r.length; a > i;) bt(e, n = r[i++], t[n]); return e },
            wt = function(e, t) { if (e = re(e), t = B(t, !0), e !== ft || !y(pt, t) || y(dt, t)) { var n = tt(e, t); return !n || !y(pt, t) || y(e, lt) && e[lt][t] || (n.enumerable = !0), n } },
            _t = function(e) { for (var t, n = rt(re(e)), r = [], i = 0; n.length > i;) y(pt, t = n[i++]) || t == lt || t == et || r.push(t); return r },
            Et = function(e) { for (var t, n = e === ft, r = rt(n ? dt : re(e)), i = [], a = 0; r.length > a;) !y(pt, t = r[a++]) || n && !y(ft, t) || i.push(pt[t]); return i };
        gt || (Z((it = function() { if (this instanceof it) throw TypeError("Symbol is not a constructor!"); var e = w(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) { this === ft && t.call(dt, n), y(this, lt) && y(this[lt], e) && (this[lt][e] = !1), vt(this, e, q(1, n)) }; return D && yt && vt(ft, e, { configurable: !0, set: t }), xt(e) }).prototype, "toString", (function() { return this._k })), Qe.f = wt, F.f = bt, Ke.f = Je.f = _t, We.f = function(e) { var t = ut.call(this, e = B(e, !0)); return !(this === ft && y(pt, e) && !y(dt, e)) && (!(t || !y(this, e) || !y(pt, e) || y(this, lt) && this[lt][e]) || t) }, Ue.f = Et, ze.f = function(e) { return xt(be(e)) }), W(W.G + W.W + W.F * !gt, { Symbol: it }); for (var Tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Ct = 0; Tt.length > Ct;) be(Tt[Ct++]); for (var St = de(be.store), Pt = 0; St.length > Pt;) He(St[Pt++]);
        W(W.S + W.F * !gt, "Symbol", { for: function(e) { return y(ct, e += "") ? ct[e] : ct[e] = it(e) }, keyFor: function(e) { if (!mt(e)) throw TypeError(e + " is not a symbol!"); for (var t in ct)
                    if (ct[t] === e) return t }, useSetter: function() { yt = !0 }, useSimple: function() { yt = !1 } }), W(W.S + W.F * !gt, "Object", { create: function(e, t) { return void 0 === t ? me(e) : kt(me(e), t) }, defineProperty: bt, defineProperties: kt, getOwnPropertyDescriptor: wt, getOwnPropertyNames: _t, getOwnPropertySymbols: Et }); var Ot = R((function() { Ue.f(1) }));
        W(W.S + W.F * Ot, "Object", { getOwnPropertySymbols: function(e) { return Ue.f(g(e)) } }), at && W(W.S + W.F * (!gt || R((function() { var e = it(); return "[null]" != ot([e]) || "{}" != ot({ a: e }) || "{}" != ot(Object(e)) }))), "JSON", { stringify: function(e) { for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); if (n = t = r[1], (L(t) || void 0 !== e) && !mt(e)) return Ve(t) || (t = function(e, t) { if ("function" == typeof n && (t = n.call(this, e, t)), !mt(t)) return t }), r[1] = t, ot.apply(at, r) } }), it.prototype[st] || H(it.prototype, st, it.prototype.valueOf), _e(it, "Symbol"), _e(Math, "Math", !0), _e(x.JSON, "JSON", !0), He("asyncIterator"), He("observable"); var Lt = v.Symbol,
            Mt = t((function(e) { e.exports = { default: Lt, __esModule: !0 } }));
        e(Mt); var Rt = t((function(e, t) {
                function n(e) { return e && e.__esModule ? e : { default: e } }
                t.__esModule = !0; var r = n(Ne),
                    i = n(Mt),
                    a = "function" == typeof i.default && "symbol" == typeof r.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : typeof e };
                t.default = "function" == typeof i.default && "symbol" === a(r.default) ? function(e) { return void 0 === e ? "undefined" : a(e) } : function(e) { return e && "function" == typeof i.default && e.constructor === i.default && e !== i.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e) } })),
            Dt = e(Rt),
            At = e(t((function(e, t) { t.__esModule = !0; var n = function(e) { return e && e.__esModule ? e : { default: e } }(Rt);
                t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t } })));
        W(W.S + W.F * !D, "Object", { defineProperty: F.f }); var jt = v.Object,
            It = function(e, t, n) { return jt.defineProperty(e, t, n) },
            zt = t((function(e) { e.exports = { default: It, __esModule: !0 } }));
        e(zt); var Bt = e(t((function(e, t) { t.__esModule = !0; var n = function(e) { return e && e.__esModule ? e : { default: e } }(zt);
                t.default = function() {
                    function e(e, t) { for (var r = 0; r < t.length; r++) { var i = t[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, n.default)(e, i.key, i) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }() }))),
            Nt = function(e, t) { if (M(e), !L(t) && null !== t) throw TypeError(t + ": can't set as prototype!") },
            Ft = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, n) { try {
                        (n = O(Function.call, Qe.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function(e, r) { return Nt(e, r), t ? e.__proto__ = r : n(e, r), e } }({}, !1) : void 0), check: Nt };
        W(W.S, "Object", { setPrototypeOf: Ft.set }); var qt = v.Object.setPrototypeOf,
            Ht = t((function(e) { e.exports = { default: qt, __esModule: !0 } }));
        e(Ht), W(W.S, "Object", { create: me }); var Ut = v.Object,
            Wt = function(e, t) { return Ut.create(e, t) },
            Vt = t((function(e) { e.exports = { default: Wt, __esModule: !0 } }));
        e(Vt); var Yt, Kt, Xt, Gt = e(t((function(e, t) {
                function n(e) { return e && e.__esModule ? e : { default: e } }
                t.__esModule = !0; var r = n(Ht),
                    i = n(Vt),
                    a = n(Rt);
                t.default = function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
                    e.prototype = (0, i.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (r.default ? (0, r.default)(e, t) : e.__proto__ = t) } }))),
            $t = be("toStringTag"),
            Jt = "Arguments" == te(function() { return arguments }()),
            Zt = function(e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (e) {} }(t = Object(e), $t)) ? n : Jt ? te(t) : "Object" == (r = te(t)) && "function" == typeof t.callee ? "Arguments" : r },
            Qt = function(e, t, n, r) { try { return r ? t(M(n)[0], n[1]) : t(n) } catch (t) { var i = e.return; throw void 0 !== i && M(i.call(e)), t } },
            en = be("iterator"),
            tn = Array.prototype,
            nn = be("iterator"),
            rn = v.getIteratorMethod = function(e) { if (null != e) return e[nn] || e["@@iterator"] || Q[Zt(e)] },
            an = t((function(e) { var t = {},
                    n = {},
                    r = e.exports = function(e, r, i, a, o) { var l, s, u, c, p = o ? function() { return e } : rn(e),
                            d = O(i, a, r ? 2 : 1),
                            f = 0; if ("function" != typeof p) throw TypeError(e + " is not iterable!"); if (function(e) { return void 0 !== e && (Q.Array === e || tn[en] === e) }(p)) { for (l = ae(e.length); l > f; f++)
                                if ((c = r ? d(M(s = e[f])[0], s[1]) : d(e[f])) === t || c === n) return c } else
                            for (u = p.call(e); !(s = u.next()).done;)
                                if ((c = Qt(u, d, s.value, r)) === t || c === n) return c };
                r.BREAK = t, r.RETURN = n })),
            on = be("species"),
            ln = function(e, t) { var n, r = M(e).constructor; return void 0 === r || null == (n = M(r)[on]) ? t : P(n) },
            sn = function(e, t, n) { var r = void 0 === n; switch (t.length) {
                    case 0:
                        return r ? e() : e.call(n);
                    case 1:
                        return r ? e(t[0]) : e.call(n, t[0]);
                    case 2:
                        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                    case 3:
                        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                    case 4:
                        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) },
            un = x.process,
            cn = x.setImmediate,
            pn = x.clearImmediate,
            dn = x.MessageChannel,
            fn = x.Dispatch,
            gn = 0,
            hn = {},
            yn = function() { var e = +this; if (hn.hasOwnProperty(e)) { var t = hn[e];
                    delete hn[e], t() } },
            vn = function(e) { yn.call(e.data) };
        cn && pn || (cn = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return hn[++gn] = function() { sn("function" == typeof e ? e : Function(e), t) }, Yt(gn), gn }, pn = function(e) { delete hn[e] }, "process" == te(un) ? Yt = function(e) { un.nextTick(O(yn, e, 1)) } : fn && fn.now ? Yt = function(e) { fn.now(O(yn, e, 1)) } : dn ? (Xt = (Kt = new dn).port2, Kt.port1.onmessage = vn, Yt = O(Xt.postMessage, Xt, 1)) : x.addEventListener && "function" == typeof postMessage && !x.importScripts ? (Yt = function(e) { x.postMessage(e + "", "*") }, x.addEventListener("message", vn, !1)) : Yt = "onreadystatechange" in I("script") ? function(e) { he.appendChild(I("script")).onreadystatechange = function() { he.removeChild(this), yn.call(e) } } : function(e) { setTimeout(O(yn, e, 1), 0) }); var xn = { set: cn, clear: pn },
            mn = xn.set,
            bn = x.MutationObserver || x.WebKitMutationObserver,
            kn = x.process,
            wn = x.Promise,
            _n = "process" == te(kn),
            En = { f: function(e) { return new n(e) } },
            Tn = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } },
            Cn = x.navigator,
            Sn = Cn && Cn.userAgent || "",
            Pn = function(e, t) { if (M(e), L(t) && t.constructor === e) return t; var n = En.f(e); return (0, n.resolve)(t), n.promise },
            On = be("species"),
            Ln = be("iterator"),
            Mn = !1; try { var Rn = [7][Ln]();
            Rn.return = function() { Mn = !0 }, Array.from(Rn, (function() { throw 2 })) } catch (e) {} var Dn, An, jn, In, zn = xn.set,
            Bn = function() { var e, t, n, r = function() { var r, i; for (_n && (r = kn.domain) && r.exit(); e;) { i = e.fn, e = e.next; try { i() } catch (r) { throw e ? n() : t = void 0, r } }
                    t = void 0, r && r.enter() }; if (_n) n = function() { kn.nextTick(r) };
                else if (!bn || x.navigator && x.navigator.standalone)
                    if (wn && wn.resolve) { var i = wn.resolve(void 0);
                        n = function() { i.then(r) } } else n = function() { mn.call(x, r) };
                else { var a = !0,
                        o = document.createTextNode("");
                    new bn(r).observe(o, { characterData: !0 }), n = function() { o.data = a = !a } } return function(r) { var i = { fn: r, next: void 0 };
                    t && (t.next = i), e || (e = i, n()), t = i } }(),
            Nn = x.TypeError,
            Fn = x.process,
            qn = Fn && Fn.versions,
            Hn = qn && qn.v8 || "",
            Un = x.Promise,
            Wn = "process" == Zt(Fn),
            Vn = function() {},
            Yn = An = En.f,
            Kn = !! function() { try { var e = Un.resolve(1),
                        t = (e.constructor = {})[be("species")] = function(e) { e(Vn, Vn) }; return (Wn || "function" == typeof PromiseRejectionEvent) && e.then(Vn) instanceof t && 0 !== Hn.indexOf("6.6") && -1 === Sn.indexOf("Chrome/66") } catch (e) {} }(),
            Xn = function(e) { var t; return !(!L(e) || "function" != typeof(t = e.then)) && t },
            Gn = function(e, t) { if (!e._n) { e._n = !0; var n = e._c;
                    Bn((function() { for (var r = e._v, i = 1 == e._s, a = 0; n.length > a;) ! function(t) { var n, a, o, l = i ? t.ok : t.fail,
                                s = t.resolve,
                                u = t.reject,
                                c = t.domain; try { l ? (i || (2 == e._h && Zn(e), e._h = 1), !0 === l ? n = r : (c && c.enter(), n = l(r), c && (c.exit(), o = !0)), n === t.promise ? u(Nn("Promise-chain cycle")) : (a = Xn(n)) ? a.call(n, s, u) : s(n)) : u(r) } catch (e) { c && !o && c.exit(), u(e) } }(n[a++]);
                        e._c = [], e._n = !1, t && !e._h && $n(e) })) } },
            $n = function(e) { zn.call(x, (function() { var t, n, r, i = e._v,
                        a = Jn(e); if (a && (t = Tn((function() { Wn ? Fn.emit("unhandledRejection", i, e) : (n = x.onunhandledrejection) ? n({ promise: e, reason: i }) : (r = x.console) && r.error && r.error("Unhandled promise rejection", i) })), e._h = Wn || Jn(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v })) },
            Jn = function(e) { return 1 !== e._h && 0 === (e._a || e._c).length },
            Zn = function(e) { zn.call(x, (function() { var t;
                    Wn ? Fn.emit("rejectionHandled", e) : (t = x.onrejectionhandled) && t({ promise: e, reason: e._v }) })) },
            Qn = function(e) { var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Gn(t, !0)) },
            er = function(e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw Nn("Promise can't be resolved itself");
                        (t = Xn(e)) ? Bn((function() { var r = { _w: n, _d: !1 }; try { t.call(e, O(er, r, 1), O(Qn, r, 1)) } catch (e) { Qn.call(r, e) } })): (n._v = e, n._s = 1, Gn(n, !1)) } catch (e) { Qn.call({ _w: n, _d: !1 }, e) } } };
        Kn || (Un = function(e) {
                (function(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!") })(this, Un, "Promise", "_h"), P(e), Dn.call(this); try { e(O(er, this, 1), O(Qn, this, 1)) } catch (e) { Qn.call(this, e) } }, (Dn = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }).prototype = function(e, t, n) { for (var r in t) H(e, r, t[r]); return e }(Un.prototype, { then: function(e, t) { var n = Yn(ln(this, Un)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Wn ? Fn.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Gn(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), jn = function() { var e = new Dn;
                this.promise = e, this.resolve = O(er, e, 1), this.reject = O(Qn, e, 1) }, En.f = Yn = function(e) { return e === Un || e === In ? new jn(e) : An(e) }), W(W.G + W.W + W.F * !Kn, { Promise: Un }), _e(Un, "Promise"),
            function(e) { var t = "function" == typeof v[e] ? v[e] : x[e];
                D && t && !t[On] && F.f(t, On, { configurable: !0, get: function() { return this } }) }("Promise"), In = v.Promise, W(W.S + W.F * !Kn, "Promise", { reject: function(e) { var t = Yn(this); return (0, t.reject)(e), t.promise } }), W(W.S + !0 * W.F, "Promise", { resolve: function(e) { return Pn(this === In ? Un : this, e) } }), W(W.S + W.F * !(Kn && function(e, t) { if (!Mn) return !1; var n = !1; try { var r = [7],
                        i = r[Ln]();
                    i.next = function() { return { done: n = !0 } }, r[Ln] = function() { return i },
                        function(e) { Un.all(e).catch(Vn) }(r) } catch (e) {} return n }()), "Promise", { all: function(e) { var t = this,
                        n = Yn(t),
                        r = n.resolve,
                        i = n.reject,
                        a = Tn((function() { var n = [],
                                a = 0,
                                o = 1;
                            an(e, !1, (function(e) { var l = a++,
                                    s = !1;
                                n.push(void 0), o++, t.resolve(e).then((function(e) { s || (s = !0, n[l] = e, --o || r(n)) }), i) })), --o || r(n) })); return a.e && i(a.v), n.promise }, race: function(e) { var t = this,
                        n = Yn(t),
                        r = n.reject,
                        i = Tn((function() { an(e, !1, (function(e) { t.resolve(e).then(n.resolve, r) })) })); return i.e && r(i.v), n.promise } }), W(W.P + W.R, "Promise", { finally: function(e) { var t = ln(this, v.Promise || x.Promise),
                        n = "function" == typeof e; return this.then(n ? function(n) { return Pn(t, e()).then((function() { return n })) } : e, n ? function(n) { return Pn(t, e()).then((function() { throw n })) } : e) } }), W(W.S, "Promise", { try: function(e) { var t = En.f(this),
                        n = Tn(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } }); var tr = v.Promise,
            nr = e(t((function(e) { e.exports = { default: tr, __esModule: !0 } })));
        V("keys", (function() { return function(e) { return de(g(e)) } })); var rr = v.Object.keys,
            ir = e(t((function(e) { e.exports = { default: rr, __esModule: !0 } }))),
            ar = t((function(e) {
                function t() {}

                function n(e, t, n) { this.fn = e, this.context = t, this.once = n || !1 }

                function r(e, t, r, i, a) { if ("function" != typeof r) throw new TypeError("The listener must be a function"); var o = new n(r, i || e, a),
                        s = l ? l + t : t; return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], o] : e._events[s].push(o) : (e._events[s] = o, e._eventsCount++), e }

                function i(e, n) { 0 == --e._eventsCount ? e._events = new t : delete e._events[n] }

                function a() { this._events = new t, this._eventsCount = 0 } var o = Object.prototype.hasOwnProperty,
                    l = "~";
                Object.create && (t.prototype = Object.create(null), (new t).__proto__ || (l = !1)), a.prototype.eventNames = function() { var e, t, n = []; if (0 === this._eventsCount) return n; for (t in e = this._events) o.call(e, t) && n.push(l ? t.slice(1) : t); return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n }, a.prototype.listeners = function(e) { var t = l ? l + e : e,
                        n = this._events[t]; if (!n) return []; if (n.fn) return [n.fn]; for (var r = 0, i = n.length, a = new Array(i); r < i; r++) a[r] = n[r].fn; return a }, a.prototype.listenerCount = function(e) { var t = l ? l + e : e,
                        n = this._events[t]; return n ? n.fn ? 1 : n.length : 0 }, a.prototype.emit = function(e, t, n, r, i, a) { var o = l ? l + e : e; if (!this._events[o]) return !1; var s, u, c = this._events[o],
                        p = arguments.length; if (c.fn) { switch (c.once && this.removeListener(e, c.fn, void 0, !0), p) {
                            case 1:
                                return c.fn.call(c.context), !0;
                            case 2:
                                return c.fn.call(c.context, t), !0;
                            case 3:
                                return c.fn.call(c.context, t, n), !0;
                            case 4:
                                return c.fn.call(c.context, t, n, r), !0;
                            case 5:
                                return c.fn.call(c.context, t, n, r, i), !0;
                            case 6:
                                return c.fn.call(c.context, t, n, r, i, a), !0 } for (u = 1, s = new Array(p - 1); u < p; u++) s[u - 1] = arguments[u];
                        c.fn.apply(c.context, s) } else { var d, f = c.length; for (u = 0; u < f; u++) switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), p) {
                            case 1:
                                c[u].fn.call(c[u].context); break;
                            case 2:
                                c[u].fn.call(c[u].context, t); break;
                            case 3:
                                c[u].fn.call(c[u].context, t, n); break;
                            case 4:
                                c[u].fn.call(c[u].context, t, n, r); break;
                            default:
                                if (!s)
                                    for (d = 1, s = new Array(p - 1); d < p; d++) s[d - 1] = arguments[d];
                                c[u].fn.apply(c[u].context, s) } } return !0 }, a.prototype.on = function(e, t, n) { return r(this, e, t, n, !1) }, a.prototype.once = function(e, t, n) { return r(this, e, t, n, !0) }, a.prototype.removeListener = function(e, t, n, r) { var a = l ? l + e : e; if (!this._events[a]) return this; if (!t) return i(this, a), this; var o = this._events[a]; if (o.fn) o.fn !== t || r && !o.once || n && o.context !== n || i(this, a);
                    else { for (var s = 0, u = [], c = o.length; s < c; s++)(o[s].fn !== t || r && !o[s].once || n && o[s].context !== n) && u.push(o[s]);
                        u.length ? this._events[a] = 1 === u.length ? u[0] : u : i(this, a) } return this }, a.prototype.removeAllListeners = function(e) { var n; return e ? (n = l ? l + e : e, this._events[n] && i(this, n)) : (this._events = new t, this._eventsCount = 0), this }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = l, a.EventEmitter = a, e.exports = a })),
            or = function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.url,
                    r = t.method,
                    i = void 0 === r ? "GET" : r,
                    a = t.type,
                    o = void 0 === a ? "arraybuffer" : a,
                    l = t.timeout,
                    s = void 0 === l ? 1e4 : l,
                    u = t.data,
                    c = void 0 === u ? {} : u,
                    p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return X(this, e), new nr((function(e, t) { var r = new window.XMLHttpRequest,
                        a = i.toUpperCase(),
                        l = []; for (var u in o && (r.responseType = o), s && (r.timeout = s), c) l.push("k=" + c[u]); if (r.onload = function() { 200 === r.status || 206 === r.status ? e({ context: p, res: r }) : t(new Error({ context: p, res: r, type: "error" })) }, r.onerror = function(e) { t(new Error({ context: p, res: r, type: "error" })) }, r.ontimeout = function(e) { t(new Error({ context: p, res: r, type: "error" })) }, r.onabort = function() { t(new Error({ context: p, res: r, type: "error" })) }, "GET" === a) r.open(a, "" + n), r.send();
                    else { if ("post" !== a) throw new Error("xhr " + a + " is not supported");
                        r.open(a, n), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(l.join("&")) } })) },
            lr = /^WEBVTT/,
            sr = /^STYLE+$/,
            ur = /^\:\:cue/,
            cr = /^}+$/,
            pr = /^\[Script Info\].*/,
            dr = [/[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}-->[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}/, /[0-9]{2}:[0-9]{2}\.[0-9]{3}-->[0-9]{2}:[0-9]{2}\.[0-9]{3}/, /[0-9]{2}\.[0-9]{3}-->[0-9]{2}\.[0-9]{3}/],
            fr = /^Format:\s/,
            gr = /^Style:\s/,
            hr = /^Dialogue:\s/,
            yr = function() {
                function e() { X(this, e) } return Bt(e, null, [{ key: "parseJson", value: function(e) { for (var t = [], n = 0, r = 0; r < e.length; r++) { if (n >= 50 && (n = 0), 0 === n) { var i = { start: e[r].start, list: [e[r]], end: e[r].end };
                                t.push(i) } else t[t.length - 1].list.push(e[r]), t[t.length - 1].end = e[r].end;
                            n++ } return t } }, { key: "parse", value: function(t, n) { var r = e.checkFormat(t);
                        r || n({ format: r }); try { var i = []; "ass" === r ? i = e.parseASS(t) : "vtt" === r && (i = e.parseVTT(t)), n({ format: r, list: i.list, styles: i.styles }) } catch (e) { console.error(e), n({ format: r }, e) } } }, { key: "parseASSItem", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = e.split(","),
                            i = {},
                            a = ""; try { var o = n.length - t.length; return a = a = (a = o > 0 ? n.splice(t.length - 1, o + 1).join(",") + "" : n[n.length - 1] + "").replace(/\\n+/g, ""), n[t.length - 1] = a, t.map((function(e, t) { "end" === e || "start" === e ? i[e] = r(n[t].split(":")) : "text" === e ? i[e] = [n[t]] : "layer" === e ? (i[e] = [n[t]], i.textTag = [n[t]]) : i[e] = "style" === e ? [n[t]] : Number(n[t]) ? Number(n[t]) : n[t] })), i } catch (e) { return console.error(e), {} } } }, { key: "parseASS", value: function(t) { for (var n = t.split("\n"), r = [], i = 0, a = 0, o = [], l = [], s = null; i < n.length;) { if (fr.test(n[i])) l = (l = n[i].replace(fr, "").replace(/\s+/g, "").split(",")).map((function(e) { return e.toLocaleLowerCase() }));
                            else if (gr.test(n[i])) o.push(n[i].replace(gr, "").replace(/\s+/g, ""));
                            else if (hr.test(n[i])) { var u = e.parseASSItem(n[i].replace(hr, ""), l); if (s && u.start === s.start && u.end === s.end) try { var c = s,
                                        p = c.text,
                                        d = c.textTag,
                                        f = c.style;
                                    p.push(u.text[0]), d.push(u.textTag[0]), f.push(u.style[0]) } catch (e) { console.error(e) } else { s = u; var g = null;
                                    a % 50 == 0 ? ((g = { start: s.start, end: s.end, list: [] }).list.push(s), r.push(g)) : ((g = r[r.length - 1]).end = s.end, g.list.push(s)), a++ } }
                            i++ } return { list: r, style: {} } } }, { key: "parseVTTStyle", value: function(e, t) { var n = e.split(":"); if (n.length > 1) { var r = n[0].trim().split("-"),
                                i = "";
                            r.length > 1 ? r.map((function(e, t) { i += 0 === t ? e : e.charAt(0).toUpperCase() + e.slice(1) })) : i = r[0], t[i] = n[1].trim().replace(/;$/, "") } return t } }, { key: "parseVTT", value: function(e) { for (var t = (e = e.replace(lr, "")).split("\n"), n = [], r = 0, o = 0, l = null, s = !1, u = !1, c = null, p = null, d = []; r < t.length;) { var f = a(r, t).trim(); if (!f || s && i(f)) s = !f;
                            else if (ur.test(f) && sr.test(a(r - 1, t).trim())) { u = !0; var g = /\((.+?)\)/g.exec(f);
                                p = g ? g[1] : "", c = "" } else if (u) cr.test(f) ? (d.push({ key: p, style: c }), c = null, p = null, u = !1) : c += f;
                            else if (f) { s = !1; var h = this.checkIsTime(t[r]); if (h) { var y = this.parseVttTime(h); if (!l || y.start !== l.start || y.end !== l.end) {
                                        (l = y).text = [], l.textTag = []; var v = null;
                                        o % 50 == 0 ? ((v = { start: l.start, end: l.end, list: [] }).list.push(l), n.push(v)) : ((v = n[n.length - 1]).end = l.end, v.list.push(l)), o++ } } else if (l) { var x = l,
                                        m = x.text,
                                        b = x.textTag,
                                        k = this.parseVttText(t[r]);
                                    m.push(k.text), b.push(k.tag) }
                                s = !1 }
                            r++ } return { list: n, styles: d } } }, { key: "checkIsTime", value: function(e) { e = e.replace(/\s+/g, ""); for (var t = 0, n = null; t < dr.length && !(n = dr[t].exec(e));) t++; return n ? n[0] : null } }, { key: "parseVttText", value: function(e) { var t = /^(<?.+?>)/g.exec(e),
                            n = "",
                            r = "default"; if (t) { r = t[0].replace(/\<|\>|\&/g, ""); var i = RegExp("^<" + r + ">(([\\s\\S])*?)</" + r + ">$").exec(e);
                            i ? n = i[1] : (n = e, r = "") } else n = e; for (var a = /<(\w+).(\w+)>/g, o = a.exec(n); o && o.length > 2;) n = n.replace(o[0], "<" + o[1] + ' class="' + o[2] + '">'), o = a.exec(n); return { tag: r, text: n.replace(/\\n+/g, "<br/>") } } }, { key: "parseVttTime", value: function(e) { var t = e.split("--\x3e"),
                            n = void 0,
                            i = 0; if (2 === t.length) { var a = t[0].split(":"),
                                o = t[1].split(":");
                            n = r(a), i = r(o) } return { start: n, end: i, time: e } } }, { key: "isVTT", value: function(e) { return lr.test(e) } }, { key: "isASS", value: function(e) { return pr.test(e) } }, { key: "checkFormat", value: function(e) { return e ? lr.test(e) ? "vtt" : pr.test(e) ? "ass" : null : null } }]), e }(),
            vr = function() {
                function e() { var t = this;
                    X(this, e), this.__handlers = [], window.ResizeObserver && (this.observer = new window.ResizeObserver((function(e) { t.__trigger(e) }))) } return Bt(e, [{ key: "addObserver", value: function(e, t) { if (this.observer) { this.observer && this.observer.observe(e); for (var n = this.__handlers, r = -1, i = 0; i < n.length; i++) n[i] && e === n[i].target && (r = i);
                            r > -1 ? this.__handlers[r].handler.push(t) : this.__handlers.push({ target: e, handler: [t] }) } } }, { key: "unObserver", value: function(e) { var t = -1;
                        this.__handlers.map((function(n, r) { e === n.target && (t = r) })), this.observer && this.observer.unobserve(e), t > -1 && this.__handlers.splice(t, 1) } }, { key: "destroyObserver", value: function() { this.observer && this.observer.disconnect(), this.observer = null, this.__handlers = null } }, { key: "__runHandler", value: function(e, t) { for (var n = this.__handlers, r = 0; r < n.length; r++)
                            if (n[r] && e === n[r].target) { n[r].handler && n[r].handler.map((function(n) { try { n(e, t) } catch (e) { console.error(e) } })); break } } }, { key: "__trigger", value: function(e) { var t = this;
                        e.map((function(e) { var n = e.contentRect;
                            t.__runHandler(e.target, n) })) } }]), e }(),
            xr = null;! function(e, t) { void 0 === t && (t = {}); var n = t.insertAt; if ("undefined" != typeof document) { var r = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("style");
                i.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)) } }('xg-text-track.xg-text-track {\n  font-family: "PingFang SC","SF Pro SC","SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  xg-text-track.xg-text-track.text-track-no-fitvideo {\n    margin-bottom: 2%; }\n  xg-text-track.xg-text-track.text-track-hide {\n    opacity: 0;\n    visibility: hidden; }\n  xg-text-track.xg-text-track.text-track-show {\n    opacity: 1;\n    visibility: visible; }\n  xg-text-track.xg-text-track xg-text-track-inner {\n    display: block;\n    max-width: 92%; }\n  xg-text-track.xg-text-track xg-text-track-span {\n    display: -webkit-box;\n    text-align: center;\n    text-overflow: ellipsis;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    padding: 1px 4px;\n    -webkit-line-clamp: 1;\n    line-height: 120%;\n    word-break: break-word; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-deputy {\n      font-size: 75%; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-single {\n      -webkit-line-clamp: 1; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-double {\n      -webkit-line-clamp: 2; }\n    xg-text-track.xg-text-track xg-text-track-span.text-track-three {\n      -webkit-line-clamp: 3; }\n  xg-text-track.xg-text-track.text-track-bg xg-text-track-inner {\n    background-color: rgba(0, 0, 0, .54);\n    border-radius: 2px; }\n  xg-text-track.xg-text-track.text-track-stroke xg-text-track-inner {\n    background-color: none;\n    border-radius: 0;\n    text-shadow: -1px 1px 0 rgba(0, 0, 0, .7), 1px 1px 0 rgba(0, 0, 0, .7), 1px -1px 0 rgba(0, 0, 0, .7), -1px -1px 0 rgba(0, 0, 0, .7); }\n'); var mr = [{ code: 0, msg: "SUCCESS" }, { code: 1, msg: "LOAD_ERROR" }, { code: 2, msg: "PARSER_ERROR" }, { code: 3, msg: "FORMAT_NOT_SUPPORTED" }, { code: 4, msg: "ID_OR_LANGUAGE_NOT_EXIST" }, { code: 5, msg: "PARAMETERS_ERROR" }, { code: 6, msg: "ABORT" }, { code: 7, msg: "UNKNOWN" }, { code: 8, msg: "DATA_ERROR:subtitle.url is null" }],
            br = "resize",
            kr = !1; return function(e) {
            function t(e) { X(this, t); var n = At(this, (t.__proto__ || K(t)).call(this)); return kr = function() { var e = navigator.userAgent,
                        t = /(?:Windows Phone)/.test(e),
                        n = /(?:SymbianOS)/.test(e) || t,
                        r = /(?:Android)/.test(e),
                        i = /(?:Firefox)/.test(e),
                        a = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || i && /(?:Tablet)/.test(e); return /(?:iPhone)/.test(e) && !a || r || n || a }(), n.currentText = null, n.textTrack = [], n._cid = -1, n._gid = -1, n._cids = [], n._iId = null, n._iC = 0, n.player = null, n.root = null, n.config = { line: "double", bottom: 0, mode: "stroke", defaultOpen: !1, baseSizeX: 49, baseSizeY: 28, minSize: 16, minMobileSize: 13, fitVideo: !0, offsetBottom: 2, fontColor: "#fff" }, n._ctime = 0, n._loadingTrack = {}, ir(n.config).map((function(t) { void 0 !== e[t] && null !== e[t] && (n.config[t] = e[t]) })), n._isOpen = !1, n._videoMeta = { scale: 0, videoHeight: 0, videoWidth: 0, lwidth: 0, lheight: 0, vWidth: 0, vHeight: 0, vBottom: 0, vLeft: 0, marginBottom: 0 }, e.subTitles && "Array" === function(e) { return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0] }(e.subTitles) ? (e.player && n.attachPlayer(e.player), n.setSubTitles(e.subTitles, n.config.defaultOpen), n) : At(n) } return Gt(t, e), Bt(t, [{ key: "version", get: function() { return "1.0.12" } }]), Bt(t, [{ key: "setSubTitles", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = this._isOpen || n;
                    r && this.innerRoot && this.switchOff(), this.currentText = null, this.textTrack = [], e.map((function(e) { var n = {};
                        ir(e).map((function(t) { n[t] = e[t] })), n.isDefault && (t.currentText = n), t.textTrack.push(n) })), this.currentText && p(this.currentText).then((function(e) { t.addStyles(e), i && t.switch() })) } }, { key: "addStyles", value: function(e) { var t = e.styles,
                        n = e.format;
                    t && "vtt" === n && (t.map((function(e) { e.key || (e.key = "xg-text-track-span") })), function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = "";
                        e.map((function(e) { n += " " + t + " " + e.key + " {" + e.style + "}" })); var r = document.createElement("style"),
                            i = document.head || document.getElementsByTagName("head")[0]; if (r.type = "text/css", r.id = "ssss", r.styleSheet) { var a = function() { try { r.styleSheet.cssText = n } catch (e) {} };
                            r.styleSheet.disabled ? setTimeout(a, 10) : a() } else { var o = document.createTextNode(n);
                            r.appendChild(o) }
                        i.appendChild(r) }(t, "xg-text-track")) } }, { key: "attachPlayer", value: function(e) { var t = this; if (e) { this.player && this.detachPlayer(); var n = this.config,
                            r = n.fontColor,
                            i = n.mode,
                            a = n.fitVideo;
                        this.player = e, this.root = document.createElement("xg-text-track"), this.root.className = "xg-text-track", !this._isOpen && l(this.root, "text-track-hide"), !a && l(this.root, "text-track-no-fitvideo"), i && l(this.root, "text-track-" + i), this.innerRoot = document.createElement("xg-text-track-inner"), this.root.appendChild(this.innerRoot), r && (this.root.style.color = r), this.currentText && ["language", "id", "label"].map((function(e) { t.root.setAttribute("data-" + e, t.currentText[e] || "") })), this.player.root.appendChild(this.root), ["destroy", "__onTimeupdate", "_onResize"].map((function(e) { t[e] = t[e].bind(t) })), this.player.on("destroy", this.destroy), this.player.on("timeupdate", this.__onTimeupdate), this._isOpen && this.switch(),
                            function(e, t) { xr || (xr = new vr), xr.addObserver(e, t) }(e.root, this._onResize) } } }, { key: "detachPlayer", value: function() { var e = this.player;
                    e && (e.off("destroy", this.destroy), e.off("timeupdate", this.__onTimeupdate), e.root && (function(e, t) { xr && xr.unObserver(e, t) }(e.root, this._onResize), e.root.removeChild(this.root)), this.innerRoot = null, this.root = null, this.player = null) } }, { key: "switch", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { id: "", language: "" }; return this._loadingTrack = t, new nr((function(n, r) { if (t.id || t.language)
                            if (e.currentText && d(t, e.currentText)) e._loadingTrack = {}, e._updateCurrent(e.currentText), e._isOpen = !0, e.show(), n(u(0));
                            else { for (var i = null, a = 0; a < e.textTrack.length; a++)
                                    if (d(t, e.textTrack[a])) { i = e.textTrack[a]; break }
                                if (i) i.list ? (e._loadingTrack = {}, e._updateCurrent(i), e._isOpen = !0, e.show(), n(u(0))) : p(i).then((function(t) { if (e.addStyles(t), e._loadingTrack.id === i.id || e._loadingTrack.language === t.language) e._loadingTrack = {}, e._updateCurrent(t), e._isOpen = !0, e.show(), n(u(0));
                                    else { var a = u(6, { message: "check _loadingTrack fail id: " + e._loadingTrack.id + "  nextSubtitle:" + t.id });
                                        console.trace(a), r(a) } })).catch((function(e) { r(e) }));
                                else { var o = u(4, new Error("The is no subtitle with id:[{" + t.id + "}] or language:[" + t.language + "]"));
                                    console.trace(o), r(o) } }
                        else { if (e.currentText) { e._loadingTrack = {}, e._updateCurrent(e.currentText), e._isOpen = !0, e.show(); var l = u(0, { message: "switch default subtitle success" }); return void n(l) } var s = u(5, { message: "no default subtitle" });
                            r(s) } })) } }, { key: "switchOff", value: function() { this._isOpen = !1, this.hide() } }, { key: "_updateCurrent", value: function(e) { var t = this; if (this.root) { this.currentText = e, ["language", "id", "label"].map((function(e) { t.root.setAttribute("data-" + e, t.currentText[e] || "") })), this.__remove(this._cids); var n = this.player.currentTime;
                        this._cids = [], this._gid = -1, this._cid = -1, this._update(n) } } }, { key: "__loadAll", value: function() { this.textTrack.map((function(e) { p(e) })) } }, { key: "getDelCid", value: function(e, t) { for (var n = [], r = 0; r < e.length; r++) t.includes(e[r]) || n.push(e[r]); return n } }, { key: "getNewCid", value: function(e, t) { for (var n = [], r = 0; r < t.length; r++) e.includes(t[r]) || n.push(t[r]); return n } }, { key: "_update", value: function(e) { var t = this,
                        n = function(e, t, n) { var r = t.length; if (r < 1) return -1; if (t[n = n < 0 ? 0 : n >= r ? r - 1 : n].start <= e && e < t[n].end) return n; for (var i = t[n].end <= e ? n + 1 : 0; i < r; i++) { if (t[i].start <= e && e < t[i].end) return i; if (e > t[i].end && i + 1 < r && e < t[i + 1].start) return -1; if (e > t[i].end && i + 1 >= r) return -1 } return -1 }(e, this.currentText.list, this._gid),
                        r = []; if (n > -1 && (r = function(e, t, n) { var r = t.length; if (r < 1) return []; var i = []; if ((n = n < 0 ? 0 : n >= r ? r - 1 : n) < r)
                                for (var a = t[n].end <= e ? n : 0; a < r && (t[a].start <= e && e < t[a].end && i.push(a), !(e < t[a].start)); a++); return i }(e, this.currentText.list[n].list, this._cid)), r.length < 1) return this._cids.length > 0 && this.__remove(this._cids), void(this._cids = []); if (this._cids !== r || n !== this._gid) { this._gid = n, this._cid = r[0]; var i = this.getDelCid(this._cids, r),
                            a = this.getNewCid(this._cids, r);
                        this._cids = r, this.__remove(i); var o = [];
                        a.map((function(e) { var r = t.currentText.list[n].list[e];
                            r.index = e, o.push(r) })), this.__render(o, e) } } }, { key: "__onTimeupdate", value: function() { if (this._isOpen) { var e = this.player.video,
                            t = e.videoWidth,
                            n = e.videoHeight;!this._videoMeta.scale && t && n && this._onResize(this.player.root); var r = this.player.currentTime;
                        Math.round(Math.abs(1e3 * r - this._ctime)) < 200 || (this._ctime = 1e3 * r, this.currentText && this.currentText.list && this._update(r)) } } }, { key: "_onResize", value: function(e) { var t = this._videoMeta; if (e && e instanceof window.Element || (e = this.player.root), this._iId && (clearTimeout(this._iId), this._iId = null), !t.scale) { if (!this.player.video) return; var n = this.player.video,
                            r = n.videoWidth,
                            i = n.videoHeight; if (!r || !i) return;
                        t.videoWidth = r, t.videoHeight = i, t.scale = parseInt(i / r * 100, 10) }
                    this.__startResize(e) } }, { key: "resize", value: function(e, t) { var n = this,
                        r = this.config,
                        i = r.baseSizeX,
                        a = r.baseSizeY,
                        o = r.minMobileSize,
                        l = r.minSize,
                        s = r.fitVideo,
                        u = r.offsetBottom,
                        c = this._videoMeta.scale;
                    this._videoMeta.lwidth = e, this._videoMeta.lheight = t; var p = void 0,
                        d = 0;
                    t / e * 100 >= c ? (d = parseInt(c * e, 10) / 100, p = e) : (d = t, p = parseInt(t / c * 100, 10)), this._videoMeta.vWidth = p, this._videoMeta.vHeight = d; var f = 0,
                        g = 0;
                    c > 120 ? (f = a, g = parseInt(f * d / 1080, 10)) : (f = i, g = parseInt(f * p / 1920, 10)); var h = kr ? o : l,
                        y = { fontSize: g = g < h ? h : g > f ? f : g },
                        v = parseInt((t - d) / 2, 10),
                        x = parseInt((e - p) / 2, 10),
                        m = parseInt(d * u, 10) / 100;
                    this._videoMeta.vBottom = v, this._videoMeta.vLeft = x, this._videoMeta.marginBottom = m, s && (y.bottom = v + m, y.left = y.right = x), ir(y).map((function(e) { n.root.style[e] = y[e] + "px" })), this.emit(br, { vLeft: x, vBottom: v, marginBottom: m, vWidth: p, vHeight: d, fontSize: g, scale: c }) } }, { key: "__startResize", value: function(e) { var t = this,
                        n = e.getBoundingClientRect(),
                        r = this._videoMeta,
                        i = n.width,
                        a = n.height; if (this._iId && (clearTimeout(this._iId), this._iId = null), i > 0 && a > 0 && (i !== r.lwidth || a !== r.lheight)) this._iC = 0, this.resize(i, a);
                    else { if (this._iC >= 5) return void(this._iC = 0);
                        this._iC++, this._iId = setTimeout((function() { t.__startResize(e) }), 50) } } }, { key: "__remove", value: function(e) { var t = this; if (e && !(e.length < 1)) { for (var n = this.innerRoot.children, r = [], i = 0; i < n.length; i++) { var a = Number(n[i].getAttribute("data-index"));
                            e.includes(a) && r.push(n[i]) }
                        r.map((function(e) { t.innerRoot.removeChild(e) })) } } }, { key: "__render", value: function() { var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    t.length > 0 && t.map((function(t) { var n = "text-track-" + e.config.line;
                        t.text.map((function(r, i) { i > 0 && (n += " text-track-deputy"); var a = { "data-start": t.start, "data-end": t.end, "data-index": t.index };
                            e.innerRoot.appendChild(s("xg-text-track-span", r, a, n)) })) })) } }, { key: "show", value: function() {! function(e, t) { e && (e.classList ? t.split(/\s+/g).forEach((function(t) { e.classList.remove(t) })) : o(e, t) && t.split(/\s+/g).forEach((function(t) { var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                            e.className && "object" === Dt(e.className) ? e.setAttribute("class", e.getAttribute("class").replace(n, " ")) : e.className = e.className.replace(n, " ") }))) }(this.root, "text-track-hide") } }, { key: "hide", value: function() { l(this.root, "text-track-hide"), this.innerRoot.innerHTML = "" } }, { key: "destroy", value: function() { this.detachPlayer(), this.removeAllListeners(), this.player = null, this.textTrack = null } }, { key: "marginBottom", get: function() { var e = this._videoMeta,
                        t = e.bottom,
                        n = e.marginBottom; return this.config.fitVideo ? t + n : n } }]), t }(ar) }() }, function(e, t, n) { "use strict"; var r = D(n(9)),
        i = D(n(10)),
        a = D(n(108)),
        o = D(n(48)),
        l = D(n(40)),
        s = D(n(53)),
        u = D(n(56)),
        c = D(n(59)),
        p = D(n(111)),
        d = D(n(116)),
        f = D(n(122)),
        g = D(n(64)),
        h = D(n(68)),
        y = D(n(71)),
        v = D(n(74)),
        x = D(n(125)),
        m = D(n(128)),
        b = D(n(129)),
        k = D(n(133)),
        w = D(n(139)),
        _ = D(n(142)),
        E = D(n(145)),
        T = D(n(149)),
        C = D(n(153)),
        S = D(n(157)),
        P = D(n(160)),
        O = D(n(162)),
        L = D(n(163)),
        M = D(n(166)),
        R = D(n(169));

    function D(e) { return e && e.__esModule ? e : { default: e } }
    r.default.installAll([i.default, a.default, o.default, l.default, s.default, u.default, c.default, p.default, d.default, f.default, g.default, h.default, y.default, v.default, x.default, m.default, b.default, k.default, w.default, _.default, E.default, T.default, C.default, S.default, P.default, O.default, L.default, M.default, R.default]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(109);
    t.default = { name: "s_enter", method: function() { for (var e = this.root, t = "", n = 1; n <= 12; n++) t += '<div class="xgplayer-enter-bar' + n + '"></div>'; var i = (0, r.createDom)("xg-enter", '<div class="xgplayer-enter-spinner">\n                                                  ' + t + "\n                                                </div>", {}, "xgplayer-enter");
            e.appendChild(i) } }, e.exports = t.default }, function(e, t, n) { var r = n(110); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-enter{display:none;position:absolute;left:0;top:0;width:100%;height:100%;background:#000;z-index:120}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner{display:block;position:absolute;left:50%;top:50%;height:100px;width:100px;position:relative;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div{width:12%;height:26%;background-color:hsla(0,0%,100%,.7);position:absolute;left:44%;top:37%;opacity:0;border-radius:30px;-webkit-animation:fade 1s linear infinite;animation:fade 1s linear infinite}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar1{-webkit-transform:rotate(0deg) translateY(-142%);-ms-transform:rotate(0deg) translateY(-142%);transform:rotate(0deg) translateY(-142%);-webkit-animation-delay:0s;animation-delay:0s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar2{-webkit-transform:rotate(30deg) translateY(-142%);-ms-transform:rotate(30deg) translateY(-142%);transform:rotate(30deg) translateY(-142%);-webkit-animation-delay:-.9163s;animation-delay:-.9163s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar3{-webkit-transform:rotate(60deg) translateY(-142%);-ms-transform:rotate(60deg) translateY(-142%);transform:rotate(60deg) translateY(-142%);-webkit-animation-delay:-.833s;animation-delay:-.833s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar4{-webkit-transform:rotate(90deg) translateY(-142%);-ms-transform:rotate(90deg) translateY(-142%);transform:rotate(90deg) translateY(-142%);-webkit-animation-delay:-.7497s;animation-delay:-.7497s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar5{-webkit-transform:rotate(120deg) translateY(-142%);-ms-transform:rotate(120deg) translateY(-142%);transform:rotate(120deg) translateY(-142%);-webkit-animation-delay:-.6664s;animation-delay:-.6664s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar6{-webkit-transform:rotate(150deg) translateY(-142%);-ms-transform:rotate(150deg) translateY(-142%);transform:rotate(150deg) translateY(-142%);-webkit-animation-delay:-.5831s;animation-delay:-.5831s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar7{-webkit-transform:rotate(180deg) translateY(-142%);-ms-transform:rotate(180deg) translateY(-142%);transform:rotate(180deg) translateY(-142%);-webkit-animation-delay:-.4998s;animation-delay:-.4998s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar8{-webkit-transform:rotate(210deg) translateY(-142%);-ms-transform:rotate(210deg) translateY(-142%);transform:rotate(210deg) translateY(-142%);-webkit-animation-delay:-.4165s;animation-delay:-.4165s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar9{-webkit-transform:rotate(240deg) translateY(-142%);-ms-transform:rotate(240deg) translateY(-142%);transform:rotate(240deg) translateY(-142%);-webkit-animation-delay:-.3332s;animation-delay:-.3332s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar10{-webkit-transform:rotate(270deg) translateY(-142%);-ms-transform:rotate(270deg) translateY(-142%);transform:rotate(270deg) translateY(-142%);-webkit-animation-delay:-.2499s;animation-delay:-.2499s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar11{-webkit-transform:rotate(300deg) translateY(-142%);-ms-transform:rotate(300deg) translateY(-142%);transform:rotate(300deg) translateY(-142%);-webkit-animation-delay:-.1666s;animation-delay:-.1666s}.xgplayer-skin-default .xgplayer-enter .xgplayer-enter-spinner div.xgplayer-enter-bar12{-webkit-transform:rotate(330deg) translateY(-142%);-ms-transform:rotate(330deg) translateY(-142%);transform:rotate(330deg) translateY(-142%);-webkit-animation-delay:-.0833s;animation-delay:-.0833s}@-webkit-keyframes fade{0%{opacity:1}to{opacity:.25}}@keyframes fade{0%{opacity:1}to{opacity:.25}}.xgplayer-skin-default.xgplayer-is-enter .xgplayer-enter{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
        i = o(n(112)),
        a = o(n(113));

    function o(e) { return e && e.__esModule ? e : { default: e } }
    n(114);
    t.default = { name: "s_cssFullscreen", method: function() { var e = this; if (e.config.cssFullscreen) { var t = (0, r.createDom)("xg-cssfullscreen", '<xg-icon class="xgplayer-icon">\n                                             <div class="xgplayer-icon-requestfull">' + i.default+'</div>\n                                             <div class="xgplayer-icon-exitfull">' + a.default+"</div>\n                                           </xg-icon>", {}, "xgplayer-cssfullscreen"),
                    n = {};
                n.requestfull = e.lang.CSSFULLSCREEN_TIPS, n.exitfull = e.lang.EXITCSSFULLSCREEN_TIPS; var o = (0, r.createDom)("xg-tips", '<span class="xgplayer-tip-requestfull">' + n.requestfull + '</span>\n                                        <span class="xgplayer-tip-exitfull">' + n.exitfull + "</span>", {}, "xgplayer-tips");
                t.appendChild(o), e.once("ready", (function() { e.controls.appendChild(t) })), ["click", "touchend"].forEach((function(n) { t.addEventListener(n, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("cssFullscreenBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.028 0.028)" d="M843.617212 67.898413 175.411567 67.898413c-61.502749 0-111.367437 49.856501-111.367437 111.367437l0 668.205645c0 61.510936 49.864688 111.367437 111.367437 111.367437L843.617212 958.838931c61.510936 0 111.367437-49.856501 111.367437-111.367437L954.984648 179.26585C954.984648 117.754914 905.12917 67.898413 843.617212 67.898413zM398.146441 736.104057c15.380292 0 27.842115 12.461823 27.842115 27.842115 0 15.379269-12.461823 27.841092-27.842115 27.841092L259.725858 791.787264c-7.785314 0-14.781658-3.217275-19.838837-8.365528-5.383614-4.577249-8.791224-11.228739-8.791224-19.475564L231.095797 624.736621c0-15.371082 12.471033-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115l-0.61603 71.426773 133.036969-133.037992 39.378869 39.378869L324.962651 736.113267 398.146441 736.104057zM419.199942 463.611943 286.162974 330.565764l0.61603 71.435982c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.371082 0-27.842115-12.461823-27.842115-27.842115L231.094774 262.791172c0-8.256034 3.40761-14.908548 8.791224-19.476587 5.057179-5.148253 12.053524-8.374738 19.838837-8.374738l138.420583 0.00921c15.380292 0 27.842115 12.461823 27.842115 27.842115s-12.461823 27.842115-27.842115 27.842115l-73.175603-0.00921 133.607974 133.607974L419.199942 463.611943zM787.932981 763.946172c0 8.247848-3.40761 14.899338-8.791224 19.475564-5.057179 5.148253-12.053524 8.365528-19.839861 8.365528L620.881314 791.787264c-15.379269 0-27.841092-12.461823-27.841092-27.841092 0-15.380292 12.461823-27.842115 27.841092-27.842115l73.185836 0.00921L560.449967 602.50427l39.378869-39.378869L732.875015 696.163393l-0.62524-71.426773c0-15.371082 12.462846-27.842115 27.842115-27.842115 15.380292 0 27.842115 12.471033 27.842115 27.842115L787.934005 763.946172zM787.932981 402.000724c0 15.380292-12.461823 27.842115-27.842115 27.842115-15.379269 0-27.842115-12.461823-27.842115-27.842115l0.62524-71.435982L599.828836 463.611943l-39.378869-39.378869 133.617184-133.607974-73.185836 0.00921c-15.379269 0-27.841092-12.461823-27.841092-27.842115s12.461823-27.842115 27.841092-27.842115l138.421606-0.00921c7.785314 0 14.781658 3.226484 19.839861 8.374738 5.383614 4.568039 8.791224 11.219529 8.791224 19.476587L787.934005 402.000724z"></path>\n</svg>\n' }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.028 0.028)" d="M834.56 81.92H189.44c-59.392 0-107.52 48.128-107.52 107.52v645.12c0 59.392 48.128 107.52 107.52 107.52h645.12c59.392 0 107.52-48.128 107.52-107.52V189.44c0-59.392-48.128-107.52-107.52-107.52zM458.24 727.04c0 14.848-12.288 26.624-26.624 26.624S404.48 741.888 404.48 727.04v-69.632L289.28 773.12c-10.752 10.24-27.648 10.24-37.888 0-10.24-10.752-10.24-27.648 0-37.888L366.592 619.52H296.96c-14.848 0-26.624-12.288-26.624-26.624s12.288-26.624 26.624-26.624h134.144c14.848 0 26.624 12.288 26.624 26.624V727.04z m0-295.936c0 14.848-12.288 26.624-26.624 26.624H296.96c-14.848 0-26.624-12.288-26.624-26.624S282.112 404.48 296.96 404.48h69.632L251.392 289.28c-10.24-10.752-10.24-27.648 0-37.888 5.12-5.12 12.288-7.68 18.944-7.68 6.656 0 13.824 2.56 18.944 7.68L404.48 366.592V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v134.144zM773.12 773.12c-10.752 10.24-27.648 10.24-37.888 0L619.52 657.408V727.04c0 14.848-12.288 26.624-26.624 26.624s-26.624-11.776-26.624-26.624v-134.144c0-14.848 12.288-26.624 26.624-26.624H727.04c14.848 0 26.624 12.288 26.624 26.624s-12.288 26.624-26.624 26.624h-69.632l115.2 115.2c10.752 10.752 10.752 27.648 0.512 38.4z m0-483.84L657.408 404.48H727.04c14.848 0 26.624 12.288 26.624 26.624 0 14.848-12.288 26.624-26.624 26.624h-134.144c-14.848 0-26.624-12.288-26.624-26.624V296.96c0-14.848 12.288-26.624 26.624-26.624s26.624 12.288 26.624 26.624v69.632L734.72 250.88c5.12-5.12 12.288-7.68 18.944-7.68s13.824 2.56 18.944 7.68c10.752 10.752 10.752 27.648 0.512 38.4z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(115); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-cssfullscreen,.xgplayer-skin-default .xgplayer-cssfullscreen-img{position:relative;-webkit-order:12;-moz-box-ordinal-group:13;order:12;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon{width:32px;margin-top:5px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon div,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-40px}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:block}.xgplayer-skin-default .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:none}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover,.xgplayer-skin-default .xgplayer-cssfullscreen:hover{opacity:.85}.xgplayer-skin-default .xgplayer-cssfullscreen-img:hover .xgplayer-tips,.xgplayer-skin-default .xgplayer-cssfullscreen:hover .xgplayer-tips{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-icon .xgplayer-icon-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-icon .xgplayer-icon-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-47px}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-requestfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-requestfull{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips .xgplayer-tip-exitfull,.xgplayer-skin-default.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips .xgplayer-tip-exitfull{display:block}.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen,.xgplayer-skin-default.xgplayer-is-fullscreen .xgplayer-cssfullscreen-img{display:none}.xgplayer-skin-default.xgplayer-is-cssfullscreen{position:fixed!important;left:0!important;top:0!important;width:100%!important;height:100%!important;z-index:99999!important}.xgplayer-lang-is-en .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-lang-is-en .xgplayer-cssfullscreen .xgplayer-tips,.xgplayer-lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.xgplayer-lang-is-en.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-46px}.lang-is-jp .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-120px}.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen-img .xgplayer-tips,.lang-is-jp.xgplayer-is-cssfullscreen .xgplayer-cssfullscreen .xgplayer-tips{margin-left:-60px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
        i = l(n(117)),
        a = l(n(118)),
        o = l(n(119));

    function l(e) { return e && e.__esModule ? e : { default: e } }
    n(120);
    t.default = { name: "s_volume", method: function() { var e = this,
                t = (0, r.createDom)("xg-volume", '<xg-icon class="xgplayer-icon">\n                                         <div class="xgplayer-icon-large">' + o.default+'</div>\n                                         <div class="xgplayer-icon-small">' + a.default+'</div>\n                                         <div class="xgplayer-icon-muted">' + i.default+'</div>\n                                       </xg-icon>\n                                       <xg-slider class="xgplayer-slider" tabindex="2">\n                                         <xg-bar class="xgplayer-bar">\n                                           <xg-drag class="xgplayer-drag"></xg-drag>\n                                         </xg-bar>\n                                       </xg-slider>', {}, "xgplayer-volume");
            e.once("ready", (function() { e.controls && e.controls.appendChild(t) })); var n = t.querySelector(".xgplayer-slider"),
                l = t.querySelector(".xgplayer-bar"),
                s = t.querySelector(".xgplayer-drag"),
                u = t.querySelector(".xgplayer-icon");
            s.style.height = 100 * e.config.volume + "%", n.volume = e.config.volume, l.addEventListener("mousedown", (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("volumeBarClick", t) })), ["click", "touchend"].forEach((function(t) { u.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("volumeIconClick") })) })), u.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("volumeIconEnter") })), ["blur", "mouseleave"].forEach((function(n) { t.addEventListener(n, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("volumeIconLeave") })) })) } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M920.4 439.808l-108.544-109.056-72.704 72.704 109.568 108.544-109.056 108.544 72.704 72.704 108.032-109.568 108.544 109.056 72.704-72.704-109.568-108.032 109.056-108.544-72.704-72.704-108.032 109.568z"></path>\n</svg>\n' }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n' }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n  <path transform="scale(0.0220625 0.0220625)" d="M358.4 358.4h-204.8v307.2h204.8l256 256v-819.2l-256 256z"></path>\n  <path transform="scale(0.0220625 0.0220625)" d="M940.632 837.632l-72.192-72.192c65.114-64.745 105.412-154.386 105.412-253.44s-40.299-188.695-105.396-253.424l-0.016-0.016 72.192-72.192c83.639 83.197 135.401 198.37 135.401 325.632s-51.762 242.434-135.381 325.612l-0.020 0.020zM795.648 693.248l-72.704-72.704c27.756-27.789 44.921-66.162 44.921-108.544s-17.165-80.755-44.922-108.546l0.002 0.002 72.704-72.704c46.713 46.235 75.639 110.363 75.639 181.248s-28.926 135.013-75.617 181.227l-0.021 0.021z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(121); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, '.xgplayer-skin-default .xgplayer-volume{outline:none;-webkit-order:4;-moz-box-ordinal-group:5;order:4;width:40px;height:40px;display:block;position:relative;z-index:18}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon{margin-top:8px;cursor:pointer;position:absolute;bottom:-9px}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:none}.xgplayer-skin-default .xgplayer-slider{display:none;position:absolute;width:28px;height:92px;background:rgba(0,0,0,.54);border-radius:1px;bottom:42px;outline:none}.xgplayer-skin-default .xgplayer-slider:after{content:" ";display:block;height:15px;width:28px;position:absolute;bottom:-15px;left:0;z-index:20}.xgplayer-skin-default .xgplayer-bar,.xgplayer-skin-default .xgplayer-drag{display:block;position:absolute;bottom:6px;left:12px;background:hsla(0,0%,100%,.3);border-radius:100px;width:4px;height:76px;outline:none;cursor:pointer}.xgplayer-skin-default .xgplayer-drag{bottom:0;left:0;background:#fa1f41;max-height:76px}.xgplayer-skin-default .xgplayer-drag:after{content:" ";display:inline-block;width:8px;height:8px;background:#fff;box-shadow:0 0 5px 0 rgba(0,0,0,.26);position:absolute;border-radius:50%;left:-2px;top:-6px}.xgplayer-skin-default.xgplayer-volume-active .xgplayer-slider,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:block}.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted,.xgplayer-skin-default.xgplayer-volume-large .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-large{display:none}.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-small{display:block}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-large,.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-small,.xgplayer-skin-default.xgplayer-volume-small .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:none}.xgplayer-skin-default.xgplayer-volume-muted .xgplayer-volume .xgplayer-icon .xgplayer-icon-muted{display:block}.xgplayer-skin-default.xgplayer-mobile .xgplayer-volume .xgplayer-slider{display:none}', ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(5),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(123);
    t.default = { name: "s_definition", method: function() { var e = this,
                t = e.root,
                n = void 0,
                r = (0, i.createDom)("xg-definition", "", { tabindex: 3 }, "xgplayer-definition");

            function a() { var n = e.definitionList,
                    a = ["<ul>"],
                    o = e.config.url,
                    l = document.createElement("a");
                e.switchURL ? ["mp4", "hls", "__flv__", "dash"].every((function(t) { return !e[t] || (e[t].url && (l.href = e[t].url), "__flv__" === t && (e[t]._options ? l.href = e[t]._options.url : l.href = e[t]._mediaDataSource.url), "hls" === t && (l.href = e[t].originUrl || e[t].url, o = l.href), o = l.href, !1) })) : o = e.currentSrc || e.src, n.forEach((function(t) { l.href = t.url, e.dash ? a.push("<li url='" + t.url + "' cname='" + t.name + "' class='" + (t.selected ? "selected" : "") + "'>" + t.name + "</li>") : a.push("<li url='" + t.url + "' cname='" + t.name + "' class='" + (l.href === o ? "selected" : "") + "'>" + t.name + "</li>") })); var s = n.filter((function(t) { return l.href = t.url, e.dash ? !0 === t.selected : l.href === o }));
                a.push("</ul><p class='name'>" + (s[0] || { name: "" }).name + "</p>"); var u = t.querySelector(".xgplayer-definition"); if (u) { u.innerHTML = a.join(""); var c = u.querySelector(".name");
                    e.config.definitionActive && "hover" !== e.config.definitionActive || c.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), (0, i.addClass)(e.root, "xgplayer-definition-active"), u.focus() })) } else { r.innerHTML = a.join(""); var p = r.querySelector(".name");
                    e.config.definitionActive && "hover" !== e.config.definitionActive || p.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), (0, i.addClass)(e.root, "xgplayer-definition-active"), r.focus() })), e.controls.appendChild(r) } }

            function l(n) { e.definitionList = n, n && n instanceof Array && n.length > 0 && ((0, i.addClass)(t, "xgplayer-is-definition"), e.once("canplay", a)) }

            function s() { if (e.currentTime = e.curTime, n) e.pause();
                else { var t = e.play();
                    void 0 !== t && t && t.catch((function(e) {})) } }

            function u() { e.once("timeupdate", s) }

            function c() {
                (0, i.removeClass)(t, "xgplayer-definition-active") } "mobile" === o.default.device && (e.config.definitionActive = "click"), e.on("resourceReady", l), ["touchend", "click"].forEach((function(t) { r.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(); var a = e.definitionList,
                        l = t.target || t.srcElement,
                        c = document.createElement("a"); if (l && "li" === l.tagName.toLocaleLowerCase()) { var p, d = void 0; if (Array.prototype.forEach.call(l.parentNode.childNodes, (function(t) {
                                (0, i.hasClass)(t, "selected") && (d = t.getAttribute("cname"), (0, i.removeClass)(t, "selected"), e.emit("beforeDefinitionChange", t.getAttribute("url"))) })), e.dash && a.forEach((function(e) { e.selected = !1, e.name === l.innerHTML && (e.selected = !0) })), (0, i.addClass)(l, "selected"), p = l.getAttribute("cname"), l.parentNode.nextSibling.innerHTML = "" + l.getAttribute("cname"), c.href = l.getAttribute("url"), n = e.paused, e.switchURL) { var f = document.createElement("a");
                            ["mp4", "hls", "__flv__", "dash"].every((function(t) { return !e[t] || (e[t].url && (f.href = e[t].url), "__flv__" === t && (e[t]._options ? f.href = e[t]._options.url : f.href = e[t]._mediaDataSource.url), "hls" === t && (f.href = e[t].originUrl || e[t].url), !1) })), f.href === c.href || e.ended || e.switchURL(c.href) } else { if (e.hls) { document.createElement("a");
                                e.hls.url }
                            c.href !== e.currentSrc && (e.curTime = e.currentTime, e.ended || (e.src = c.href)) }
                        navigator.userAgent.toLowerCase().indexOf("android") > -1 ? e.once("timeupdate", u) : e.once("loadedmetadata", s), e.emit("definitionChange", { from: d, to: p }), "mobile" === o.default.device && (0, i.removeClass)(e.root, "xgplayer-definition-active") } else "click" !== e.config.definitionActive || !l || "p" !== l.tagName.toLocaleLowerCase() && "em" !== l.tagName.toLocaleLowerCase() || ("mobile" === o.default.device ? (0, i.toggleClass)(e.root, "xgplayer-definition-active") : (0, i.addClass)(e.root, "xgplayer-definition-active"), r.focus());
                    e.emit("focus") }), !1) })), r.addEventListener("mouseleave", (function(e) { e.preventDefault(), e.stopPropagation(), (0, i.removeClass)(t, "xgplayer-definition-active") })), e.on("blur", c), e.once("destroy", (function t() { e.off("resourceReady", l), e.off("canplay", a), navigator.userAgent.toLowerCase().indexOf("android") > -1 ? (e.off("timeupdate", u), e.off("timeupdate", s)) : e.off("loadedmetadata", s), e.off("blur", c), e.off("destroy", t) })), e.getCurrentDefinition = function() { for (var t = e.controls.querySelectorAll(".xgplayer-definition ul li"), n = 0; n < t.length; n++)
                    if (t[n].className && t[n].className.indexOf("selected") > -1) return { name: t[n].getAttribute("cname"), url: t[n].getAttribute("url") };
                return { name: t[0].getAttribute("cname"), url: t[0].getAttribute("url") } }, e.switchDefinition = function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.controls.querySelectorAll(".xgplayer-definition ul li"), r = 0; r < n.length; r++) n[r].getAttribute("cname") !== t.name && n[r].getAttribute("url") !== t.url && r !== t.index || n[r].click() } } }, e.exports = t.default }, function(e, t, n) { var r = n(124); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-definition{-webkit-order:5;-moz-box-ordinal-group:6;order:5;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-left:10px;margin-top:-119px}.xgplayer-skin-default .xgplayer-definition ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:0;text-align:center;white-space:nowrap;margin-left:-10px;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-definition ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);padding:6px 13px}.xgplayer-skin-default .xgplayer-definition ul li.selected,.xgplayer-skin-default .xgplayer-definition ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-definition .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default.xgplayer-definition-active .xgplayer-definition ul,.xgplayer-skin-default.xgplayer-is-definition .xgplayer-definition{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(5),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(126);
    t.default = { name: "s_playbackRate", method: function() { var e = this,
                t = []; if (!e.config.playbackRate) return !1;
            (t = [].concat(e.config.playbackRate)).sort((function(e, t) { return t - e })); var n = void 0 !== e.config.playbackRateUnit ? e.config.playbackRateUnit : "x",
                r = (0, i.createDom)("xg-playbackrate", " ", {}, "xgplayer-playbackrate"); "mobile" === o.default.device && (e.config.playbackRateActive = "click"); var a = [];
            t.forEach((function(e) { a.push({ name: "" + e, rate: "" + e + n, selected: !1 }) })); var l = 1,
                s = ["<ul>"];
            a.forEach((function(t) { e.config.defaultPlaybackRate && e.config.defaultPlaybackRate.toString() === t.name ? (t.selected = !0, l = e.config.defaultPlaybackRate, e.once("playing", (function() { e.video.playbackRate = e.config.defaultPlaybackRate }))) : "1.0" !== t.name && "1" !== t.name || e.config.defaultPlaybackRate && 1 !== e.config.defaultPlaybackRate || (t.selected = !0), s.push("<li cname='" + t.name + "' class='" + (t.selected ? "selected" : "") + "'>" + t.rate + "</li>") })), s.push("</ul><p class='name'>" + l + n + "</p>"); var u = e.root.querySelector(".xgplayer-playbackrate"); if (u) { u.innerHTML = s.join(""); var c = u.querySelector(".name");
                e.config.playbackRateActive && "hover" !== e.config.playbackRateActive || c.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), (0, i.addClass)(e.root, "xgplayer-playbackrate-active"), u.focus() })) } else { r.innerHTML = s.join(""); var p = r.querySelector(".name");
                e.config.playbackRateActive && "hover" !== e.config.playbackRateActive || p.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), (0, i.addClass)(e.root, "xgplayer-playbackrate-active"), r.focus() })), e.once("ready", (function() { e.controls.appendChild(r) })) }["touchend", "click"].forEach((function(t) { r.addEventListener(t, (function(t) { t.stopPropagation(), t.preventDefault(); var s = t.target; if (s && "li" === s.tagName.toLocaleLowerCase()) { var u, c = void 0;
                        a.forEach((function(t) { t.selected = !1, s.textContent.replace(/\s+/g, "") === t.rate && (Array.prototype.forEach.call(s.parentNode.childNodes, (function(e) {
                                (0, i.hasClass)(e, "selected") && (c = Number(e.getAttribute("cname")), (0, i.removeClass)(e, "selected")) })), t.selected = !0, e.video.playbackRate = 1 * t.name, l = 1 * t.name) })), (0, i.addClass)(s, "selected"), u = Number(s.getAttribute("cname")), s.parentNode.nextSibling.innerHTML = "" + s.getAttribute("cname") + n, e.emit("playbackrateChange", { from: c, to: u }), "mobile" === o.default.device && (0, i.removeClass)(e.root, "xgplayer-playbackrate-active") } else "click" !== e.config.playbackRateActive || !s || "p" !== s.tagName.toLocaleLowerCase() && "span" !== s.tagName.toLocaleLowerCase() || ("mobile" === o.default.device ? (0, i.toggleClass)(e.root, "xgplayer-playbackrate-active") : (0, i.addClass)(e.root, "xgplayer-playbackrate-active"), r.focus());
                    e.emit("focus") }), !1) })), r.addEventListener("mouseleave", (function(t) { t.preventDefault(), t.stopPropagation(), (0, i.removeClass)(e.root, "xgplayer-playbackrate-active") })), e.on("blur", (function() {
                (0, i.removeClass)(e.root, "xgplayer-playbackrate-active") })), e.on("play", (function() { e.video.playbackRate.toFixed(1) !== l.toFixed(1) && (e.video.playbackRate = l) })), e.switchPlaybackRate = function() { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.controls.querySelectorAll(".xgplayer-playbackrate ul li"), r = 0; r < n.length; r++)(0, i.hasClass)(n[r], "selected") || n[r].getAttribute("cname") !== "" + t.playbackRate && r !== t.index || n[r].click() }, e.on("ratechange", (function() { e.switchPlaybackRate({ playbackRate: e.playbackRate }) })) } }, e.exports = t.default }, function(e, t, n) { var r = n(127); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-playbackrate{-webkit-order:8;-moz-box-ordinal-group:9;order:8;width:60px;height:150px;z-index:18;position:relative;display:inline-block;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-playbackrate ul{display:none;list-style:none;width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);text-align:left;white-space:nowrap;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-playbackrate ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);position:relative;padding:4px 0;text-align:center}.xgplayer-skin-default .xgplayer-playbackrate ul li.selected,.xgplayer-skin-default .xgplayer-playbackrate ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-playbackrate ul li:first-child{position:relative;margin-top:12px}.xgplayer-skin-default .xgplayer-playbackrate ul li:last-child{position:relative;margin-bottom:12px}.xgplayer-skin-default .xgplayer-playbackrate .name{width:60px;height:20px;position:absolute;bottom:0;text-align:center;font-family:PingFangSC-Regular;font-size:13px;background:rgba(0,0,0,.38);color:hsla(0,0%,100%,.8);border-radius:10px;line-height:20px}.xgplayer-skin-default .xgplayer-playbackrate span{position:relative;top:19px;font-weight:700;text-shadow:0 0 4px rgba(0,0,0,.6)}.xgplayer-skin-default .xgplayer-playbackrate:hover{opacity:1}.xgplayer-skin-default.xgplayer-playbackrate-active .xgplayer-playbackrate ul{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    t.default = { name: "s_localPreview", method: function() { var e = this; if (e.config.preview && e.config.preview.uploadEl) { var t = (0, r.createDom)("xg-preview", '<input type="file">', {}, "xgplayer-preview"),
                    n = t.querySelector("input");
                e.config.preview.uploadEl.appendChild(t), n.onchange = function() { e.emit("upload", n) } } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(130),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(131);
    t.default = { name: "s_download", method: function() { var e = this; if (e.config.download) { var t = (0, i.createDom)("xg-download", '<xg-icon class="xgplayer-icon">' + o.default+"</xg-icon>", {}, "xgplayer-download"),
                    n = e.lang.DOWNLOAD_TIPS,
                    r = (0, i.createDom)("xg-tips", '<span class="xgplayer-tip-download">' + n + "</span>", {}, "xgplayer-tips");
                t.appendChild(r), e.once("ready", (function() { e.controls.appendChild(t) })), ["click", "touchend"].forEach((function(n) { t.addEventListener(n, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("downloadBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">\n  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n    <g transform="translate(-488.000000, -340.000000)" fill="#FFFFFF">\n      <g id="Group-2">\n        <g id="volme_big-copy" transform="translate(488.000000, 340.000000)">\n          <rect id="Rectangle-18" x="11" y="4" width="2" height="12" rx="1"></rect>\n          <rect id="Rectangle-2" x="3" y="18" width="18" height="2" rx="1"></rect>\n          <rect id="Rectangle-2" transform="translate(4.000000, 17.500000) rotate(90.000000) translate(-4.000000, -17.500000) " x="1.5" y="16.5" width="5" height="2" rx="1"></rect><rect id="Rectangle-2-Copy-3" transform="translate(20.000000, 17.500000) rotate(90.000000) translate(-20.000000, -17.500000) " x="17.5" y="16.5" width="5" height="2" rx="1"></rect>\n          <path d="M9.48791171,8.26502656 L9.48791171,14.2650266 C9.48791171,14.8173113 9.04019646,15.2650266 8.48791171,15.2650266 C7.93562696,15.2650266 7.48791171,14.8173113 7.48791171,14.2650266 L7.48791171,7.26502656 C7.48791171,6.71274181 7.93562696,6.26502656 8.48791171,6.26502656 L15.4879117,6.26502656 C16.0401965,6.26502656 16.4879117,6.71274181 16.4879117,7.26502656 C16.4879117,7.81731131 16.0401965,8.26502656 15.4879117,8.26502656 L9.48791171,8.26502656 Z" id="Combined-Shape" transform="translate(11.987912, 10.765027) scale(1, -1) rotate(45.000000) translate(-11.987912, -10.765027) "></path>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n' }, function(e, t, n) { var r = n(132); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-download{position:relative;-webkit-order:9;-moz-box-ordinal-group:10;order:9;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-download .xgplayer-icon{margin-top:3px}.xgplayer-skin-default .xgplayer-download .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-download .xgplayer-icon svg{position:relative;top:5px;left:5px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips{margin-left:-20px}.xgplayer-skin-default .xgplayer-download .xgplayer-tips .xgplayer-tip-download{display:block}.xgplayer-skin-default .xgplayer-download:hover{opacity:.85}.xgplayer-skin-default .xgplayer-download:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-download .xgplayer-tips{margin-left:-32px}.xgplayer-lang-is-jp .xgplayer-download .xgplayer-tips{margin-left:-40px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0),
        i = o(n(134)),
        a = o(n(136));

    function o(e) { return e && e.__esModule ? e : { default: e } }
    n(137);
    t.default = { name: "s_danmu", method: function() { var e = this,
                t = e.root; if (e.config.danmu) { var n = (0, r.createDom)("xg-danmu", "", {}, "xgplayer-danmu");
                e.once("ready", (function() { t.appendChild(n) })); var o = (0, r.deepCopy)({ container: n, player: e.video, comments: [], area: { start: 0, end: 1 } }, e.config.danmu),
                    l = void 0;
                e.config.danmu.panel && (l = (0, r.createDom)("xg-panel", '<xg-panel-icon class="xgplayer-panel-icon">\n                                                ' + a.default+'\n                                              </xg-panel-icon>\n                                              <xg-panel-slider class="xgplayer-panel-slider">\n                                                <xg-hidemode class="xgplayer-hidemode">\n                                                  <p class="xgplayer-hidemode-font">屏蔽类型</p>\n                                                  <ul class="xgplayer-hidemode-radio">\n                                                    <li class="xgplayer-hidemode-scroll" id="false">滚动</li><li class="xgplayer-hidemode-top" id="false">顶部</li><li class="xgplayer-hidemode-bottom" id="false">底部</li><li class="xgplayer-hidemode-color" id="false">色彩</li>\n                                                  </ul>\n                                                </xg-hidemode>\n                                                <xg-transparency class="xgplayer-transparency">\n                                                  <span>不透明度</span>\n                                                  <input class="xgplayer-transparency-line xgplayer-transparency-color xgplayer-transparency-bar xgplayer-transparency-gradient" type="range" min="0" max="100" step="0.1" value="50"></input>\n                                                </xg-transparency>\n                                                <xg-showarea class="xgplayer-showarea">\n                                                  <div class="xgplayer-showarea-name">显示区域</div>\n                                                  <div class="xgplayer-showarea-control">\n                                                    <div class="xgplayer-showarea-control-up">\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-onequarters">1/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-twoquarters selected-color">1/2</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-threequarters">3/4</span>\n                                                      <span class="xgplayer-showarea-control-up-item xgplayer-showarea-full">1</span>\n                                                    </div>\n                                                    <div class="xgplayer-showarea-control-down">\n                                                      <div class="xgplayer-showarea-control-down-dots">\n                                                        <span class="xgplayer-showarea-onequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-twoquarters-dot"></span>\n                                                        <span class="xgplayer-showarea-threequarters-dot"></span>\n                                                        <span class="xgplayer-showarea-full-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-showarea-line xgplayer-showarea-color xgplayer-showarea-bar xgplayer-gradient" type="range" min="1" max="4" step="1" value="1">\n                                                    </div>\n                                                  </div>\n                                                </xg-showarea>\n                                                <xg-danmuspeed class="xgplayer-danmuspeed">\n                                                  <div class="xgplayer-danmuspeed-name">弹幕速度</div>\n                                                  <div class="xgplayer-danmuspeed-control">\n                                                    <div class="xgplayer-danmuspeed-control-up">\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-small">慢</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-middle selected-color">中</span>\n                                                      <span class="xgplayer-danmuspeed-control-up-item xgplayer-danmuspeed-large">快</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmuspeed-control-down">\n                                                      <div class="xgplayer-danmuspeed-control-down-dots">\n                                                        <span class="xgplayer-danmuspeed-small-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-middle-dot"></span>\n                                                        <span class="xgplayer-danmuspeed-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmuspeed-line xgplayer-danmuspeed-color xgplayer-danmuspeed-bar xgplayer-gradient" type="range" min="50" max="150" step="50" value="100">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmuspeed>\n                                                <xg-danmufont class="xgplayer-danmufont">\n                                                  <div class="xgplayer-danmufont-name">字体大小</div>\n                                                  <div class="xgplayer-danmufont-control">\n                                                    <div class="xgplayer-danmufont-control-up">\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-small">小</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-middle">中</span>\n                                                      <span class="xgplayer-danmufont-control-up-item xgplayer-danmufont-large selected-color">大</span>\n                                                    </div>\n                                                    <div class="xgplayer-danmufont-control-down">\n                                                      <div class="xgplayer-danmufont-control-down-dots">\n                                                        <span class="xgplayer-danmufont-small-dot"></span>\n                                                        <span class="xgplayer-danmufont-middle-dot"></span>\n                                                        <span class="xgplayer-danmufont-large-dot"></span>\n                                                      </div>\n                                                      <input class="xgplayer-danmufont-line xgplayer-danmufont-color xgplayer-danmufont-bar xgplayer-gradient" type="range" min="20" max="30" step="5" value="25">\n                                                    </div>\n                                                  </div>\n                                                </xg-danmufont>\n                                              </xg-panel-slider>', { tabindex: 7 }, "xgplayer-panel"), e.once("ready", (function() { e.controls.appendChild(l) }))), e.once("complete", (function() { var t = new i.default(o); if (e.emit("initDefaultDanmu", t), e.danmu = t, e.config.danmu.panel) { var n = l.querySelector(".xgplayer-panel-slider"),
                            a = void 0;
                        ["mouseenter", "touchend", "click"].forEach((function(e) { l.addEventListener(e, (function(e) { e.preventDefault(), e.stopPropagation(), (0, r.addClass)(n, "xgplayer-panel-active"), l.focus(), a = !0 })) })), l.addEventListener("mouseleave", (function(e) { e.preventDefault(), e.stopPropagation(), (0, r.removeClass)(n, "xgplayer-panel-active"), a = !1 })), n.addEventListener("mouseleave", (function(e) { e.preventDefault(), e.stopPropagation(), !1 === a && (0, r.removeClass)(n, "xgplayer-panel-active") })); var s = e.config.danmu,
                            u = { scroll: l.querySelector(".xgplayer-hidemode-scroll"), top: l.querySelector(".xgplayer-hidemode-top"), bottom: l.querySelector(".xgplayer-hidemode-bottom"), color: l.querySelector(".xgplayer-hidemode-color") },
                            c = function(t) { var n = t;
                                ["touchend", "click"].forEach((function(t) { u[n].addEventListener(t, (function(t) { "true" !== u[n].getAttribute("id") ? (u[n].style.color = "#f85959", u[n].setAttribute("id", "true"), e.danmu.hide(n)) : (u[n].style.color = "#aaa", u[n].setAttribute("id", "false"), e.danmu.show(n)) })) })) }; for (var p in u) c(p); var d = l.querySelector(".xgplayer-transparency-line"),
                            f = l.querySelector(".xgplayer-transparency-gradient"),
                            g = 50; if (f.style.background = "linear-gradient(to right, #f85959 0%, #f85959 " + g + "%, #aaa " + g + "%, #aaa)", d.addEventListener("input", (function(e) { e.preventDefault(), e.stopPropagation(), g = e.target.value, f.style.background = "linear-gradient(to right, #f85959 0%, #f85959 " + g + "%, #aaa " + g + "%, #aaa)", s.comments.forEach((function(e) { e.style.opacity = g / 100 })) })), l.querySelector(".xgplayer-showarea-line").addEventListener("input", (function(t) { t.preventDefault(), t.stopPropagation(); var n = t.target.value;
                                e.danmu.config.area.end = n / 100, e.config.danmu.area.end = n / 100, e.danmu.bulletBtn.main.channel.resize() })), l.querySelector(".xgplayer-danmuspeed-line").addEventListener("input", (function(e) { e.preventDefault(), e.stopPropagation(); var t = e.target.value;
                                s.comments.forEach((function(e) { e.duration = 100 * (200 - t) })) })), l.querySelector(".xgplayer-danmufont-line").addEventListener("input", (function(e) { e.preventDefault(), e.stopPropagation(); var t = e.target.value;
                                s.comments.forEach((function(e) { e.style.fontSize = t + "px" })) })), navigator.userAgent.indexOf("Firefox") > -1)
                            for (var h = 0; h < n.querySelectorAll("input").length; h++) n.querySelectorAll("input")[h].style.marginTop = "10px" } })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    (function(e) { var n, r, i, a, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
        window, a = function() { return function(e) { var t = {};

                function n(r) { if (t[r]) return t[r].exports; var i = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports } return n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == (void 0 === e ? "undefined" : o(e)) && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                        for (var i in e) n.d(r, i, function(t) { return e[t] }.bind(null, i)); return r }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 4) }([function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = { createDom: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            i = document.createElement(e); return i.className = r, i.innerHTML = t, Object.keys(n).forEach((function(t) { var r = t,
                                a = n[t]; "video" === e || "audio" === e ? a && i.setAttribute(r, a) : i.setAttribute(r, a) })), i }, hasClass: function(e, t) { return e.classList ? Array.prototype.some.call(e.classList, (function(e) { return e === t })) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)")) }, addClass: function(e, t) { e.classList ? t.replace(/(^\s+|\s+$)/g, "").split(/\s+/g).forEach((function(t) { t && e.classList.add(t) })) : r.hasClass(e, t) || (e.className += " " + t) }, removeClass: function(e, t) { e.classList ? t.split(/\s+/g).forEach((function(t) { e.classList.remove(t) })) : r.hasClass(e, t) && t.split(/\s+/g).forEach((function(t) { var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                            e.className = e.className.replace(n, " ") })) }, toggleClass: function(e, t) { t.split(/\s+/g).forEach((function(t) { r.hasClass(e, t) ? r.removeClass(e, t) : r.addClass(e, t) })) }, findDom: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            t = arguments[1],
                            n = void 0; try { n = e.querySelector(t) } catch (r) { t.startsWith("#") && (n = e.getElementById(t.slice(1))) } return n }, deepCopy: function(e, t) { if ("Object" === r.typeOf(t) && "Object" === r.typeOf(e)) return Object.keys(t).forEach((function(n) { "Object" !== r.typeOf(t[n]) || t[n] instanceof Node ? "Array" === r.typeOf(t[n]) ? e[n] = "Array" === r.typeOf(e[n]) ? e[n].concat(t[n]) : t[n] : e[n] = t[n] : e[n] ? r.deepCopy(e[n], t[n]) : e[n] = t[n] })), e }, typeOf: function(e) { return Object.prototype.toString.call(e).match(/([^\s.*]+)(?=]$)/g)[0] }, copyDom: function(e) { if (e && 1 === e.nodeType) { var t = document.createElement(e.tagName); return Array.prototype.forEach.call(e.attributes, (function(e) { t.setAttribute(e.name, e.value) })), e.innerHTML && (t.innerHTML = e.innerHTML), t } return "" }, formatTime: function(e) { var t = Math.floor(e); return 1e3 * t + (e - t) }, offInDestroy: function(e, t, n, r) { e.once(r, (function i() { e.off(t, n), e.off(r, i) })) }, on: function(e, t, n, i) { i ? (e.on(t, n), r.offInDestroy(e, t, n, i)) : e.on(t, (function r(i) { n(i), e.off(t, r) })) }, style: function(e, t, n) { var r = e.style; try { r[t] = n } catch (e) { r.setProperty(t, n) } } };
                t.default = r, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    a = (r = n(26)) && r.__esModule ? r : { default: r },
                    o = function() {
                        function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e) } return i(e, [{ key: "setLogger", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                this.logger = new a.default(e + ".js") } }]), e }();
                t.default = o, e.exports = t.default }, function(e, t, n) { var r = n(19)();
                e.exports = function(e) { return e !== r && null !== e } }, function(e, t, n) { e.exports = function(e) { return null != e } }, function(e, t, n) { e.exports = n(5) }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = (r = n(6)) && r.__esModule ? r : { default: r };
                n(34), t.default = i.default, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = d(n(7)),
                    a = d(n(1)),
                    l = d(n(27)),
                    s = d(n(31)),
                    u = d(n(0)),
                    c = n(32),
                    p = n(33);

                function d(e) { return e && e.__esModule ? e : { default: e } }

                function f(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t } var g = function(e) {
                    function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        n.setLogger("danmu"), n.logger && n.logger.info("danmu.js version: " + c.version); var r = n; if (r.config = u.default.deepCopy({ overlap: !1, area: { start: 0, end: 1 }, live: !1, comments: [], direction: "r2l", needResizeObserver: !1 }, e), r.hideArr = [], r.domObj = new s.default, (0, i.default)(r), r.config.comments.forEach((function(e) { e.duration = e.duration ? e.duration : 5e3, e.mode || (e.mode = "scroll") })), !r.config.container || 1 !== r.config.container.nodeType) return r.emit("error", "container id can't be empty"), f(n, !1); if (r.container = r.config.container, r.config.containerStyle) { var a = r.config.containerStyle;
                            Object.keys(a).forEach((function(e) { r.container.style[e] = a[e] })) } return r.live = r.config.live, r.player = r.config.player, r.direction = r.config.direction, u.default.addClass(r.container, "danmu"), r.bulletBtn = new l.default(r), r.isReady = !0, r.emit("ready"), n.logger && n.logger.info("ready"), n.addResizeObserver(), n } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "addResizeObserver", value: function() { var e = this;
                            this.config.needResizeObserver && (0, p.addObserver)(this.container, (function() { e.logger && e.logger.info("needResizeObserver"), e.resize() })) } }, { key: "start", value: function() { this.logger && this.logger.info("start"), this.bulletBtn.main.start() } }, { key: "pause", value: function() { this.logger && this.logger.info("pause"), this.bulletBtn.main.pause() } }, { key: "play", value: function() { this.logger && this.logger.info("play"), this.bulletBtn.main.play() } }, { key: "stop", value: function() { this.logger && this.logger.info("stop"), this.bulletBtn.main.stop() } }, { key: "clear", value: function() { this.logger && this.logger.info("clear"), this.bulletBtn.main.clear() } }, { key: "destroy", value: function() { for (var e in (0, p.unObserver)(this.container), this.logger && this.logger.info("destroy"), this.stop(), this.bulletBtn.destroy(), this.domObj.destroy(), this) delete this[e];
                            this.emit("destroy") } }, { key: "sendComment", value: function(e) { this.logger && this.logger.info("sendComment: " + (e.txt || "[DOM Element]")), e.duration || (e.duration = 15e3), e && e.id && e.duration && (e.el || e.txt) && (e.duration = e.duration ? e.duration : 5e3, e.style || (e.style = { opacity: void 0, fontSize: void 0 }), e.style && (this.opacity && this.opacity !== e.style.opacity && (e.style.opacity = this.opacity), this.fontSize && this.fontSize !== e.style.fontSize && (e.style.fontSize = this.fontSize), this.like && (e.like = e.like ? e.like : this.like)), e.prior || e.realTime ? (this.bulletBtn.main.data.unshift(e), e.realTime && (this.bulletBtn.main.readData(), this.bulletBtn.main.dataHandle())) : this.bulletBtn.main.data.push(e)) } }, { key: "setCommentID", value: function(e, t) { var n = this;
                            this.logger && this.logger.info("setCommentID: oldID " + e + " newID " + t); var r = this.container.getBoundingClientRect();
                            e && t && (this.bulletBtn.main.data.some((function(n) { return n.id === e && (n.id = t, !0) })), this.bulletBtn.main.queue.some((function(i) { return i.id === e && (i.id = t, i.pauseMove(r), "paused" !== n.bulletBtn.main.status && i.startMove(r), !0) }))) } }, { key: "setCommentDuration", value: function(e, t) { var n = this;
                            this.logger && this.logger.info("setCommentDuration: id " + e + " duration " + t); var r = this.container.getBoundingClientRect();
                            e && t && (t = t || 5e3, this.bulletBtn.main.data.some((function(n) { return n.id === e && (n.duration = t, !0) })), this.bulletBtn.main.queue.some((function(i) { return i.id === e && (i.duration = t, i.pauseMove(r), "paused" !== n.bulletBtn.main.status && i.startMove(r), !0) }))) } }, { key: "setCommentLike", value: function(e, t) { this.logger && this.logger.info("setCommentLike: id " + e + " like " + t); var n = this.container.getBoundingClientRect();
                            this.like = t, e && t && (this.bulletBtn.main.data.some((function(n) { return n.id === e && (n.like = t, !0) })), this.bulletBtn.main.queue.some((function(r) { return r.id === e && (r.pauseMove(n), r.setLikeDom(t.el, t.style), "paused" !== r.danmu.bulletBtn.main.status && r.startMove(n), !0) }))) } }, { key: "restartComment", value: function(e) { this.logger && this.logger.info("restartComment: id " + e), this.mouseControl = !1; var t = this.container.getBoundingClientRect();
                            e && this.bulletBtn.main.queue.some((function(n) { return n.id === e && ("paused" !== n.danmu.bulletBtn.main.status ? n.startMove(t, !0) : n.status = "paused", !0) })) } }, { key: "freezeComment", value: function(e) { this.logger && this.logger.info("freezeComment: id " + e), this.mouseControl = !0; var t = this.container.getBoundingClientRect();
                            e && this.bulletBtn.main.queue.some((function(n) { return n.id === e && (n.status = "forcedPause", n.pauseMove(t), n.el && n.el.style && u.default.style(n.el, "zIndex", 10), !0) })) } }, { key: "removeComment", value: function(e) { this.logger && this.logger.info("removeComment: id " + e), e && (this.bulletBtn.main.queue.some((function(t) { return t.id === e && (t.remove(), !0) })), this.bulletBtn.main.data = this.bulletBtn.main.data.filter((function(t) { return t.id !== e }))) } }, { key: "updateComments", value: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            t && (this.bulletBtn.main.data = []), this.bulletBtn.main.data = this.bulletBtn.main.data.concat(e) } }, { key: "setAllDuration", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll",
                                t = arguments[1],
                                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            this.logger && this.logger.info("setAllDuration: mode " + e + " duration " + t + " force " + n); var r = this.container.getBoundingClientRect();
                            t && (t = t || 5e3, n && (this.bulletBtn.main.forceDuration = t), this.bulletBtn.main.data.forEach((function(n) { e === n.mode && (n.duration = t) })), this.bulletBtn.main.queue.forEach((function(n) { e === n.mode && (n.duration = t, n.pauseMove(r), "paused" !== n.danmu.bulletBtn.main.status && n.startMove(r)) }))) } }, { key: "setOpacity", value: function(e) { this.logger && this.logger.info("setOpacity: opacity " + e), this.container.style.opacity = e } }, { key: "setFontSize", value: function(e, t) { var n = this;
                            this.logger && this.logger.info("setFontSize: size " + e + " channelSize " + t), this.fontSize = e + "px", e && (this.bulletBtn.main.data.forEach((function(e) { e.style && (e.style.fontSize = n.fontSize) })), this.bulletBtn.main.queue.forEach((function(e) { e.options.style || (e.options.style = {}), e.options.style.fontSize = n.fontSize, e.setFontSize(n.fontSize), t && (e.top = e.channel_id[0] * t, e.topInit()) }))), t && (this.config.channelSize = t, this.bulletBtn.main.channel.resize(!0)) } }, { key: "setArea", value: function(e) { this.logger && this.logger.info("setArea: area " + e), this.config.area = e, this.bulletBtn.main.channel.resize(!0) } }, { key: "hide", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";
                            this.logger && this.logger.info("hide: mode " + e), this.hideArr.indexOf(e) < 0 && this.hideArr.push(e); var t = this.bulletBtn.main.queue.filter((function(t) { return e === t.mode || "color" === e && t.color }));
                            t.forEach((function(e) { return e.remove() })) } }, { key: "show", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "scroll";
                            this.logger && this.logger.info("show: mode " + e); var t = this.hideArr.indexOf(e);
                            t > -1 && this.hideArr.splice(t, 1) } }, { key: "setDirection", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "r2l";
                            this.logger && this.logger.info("setDirection: direction " + e), this.emit("changeDirection", e) } }, { key: "resize", value: function() { this.logger && this.logger.info("resize"), this.emit("channel_resize") } }]), t }(a.default);
                t.default = g, e.exports = t.default }, function(e, t, n) { var r, i, a, l, s, u, c, p = n(8),
                    d = n(25),
                    f = Function.prototype.apply,
                    g = Function.prototype.call,
                    h = Object.create,
                    y = Object.defineProperty,
                    v = Object.defineProperties,
                    x = Object.prototype.hasOwnProperty,
                    m = { configurable: !0, enumerable: !1, writable: !0 };
                i = function(e, t) { var n, i; return d(t), i = this, r.call(this, e, n = function() { a.call(i, e, n), f.call(t, this, arguments) }), n.__eeOnceListener__ = t, this }, s = { on: r = function(e, t) { var n; return d(t), x.call(this, "__ee__") ? n = this.__ee__ : (n = m.value = h(null), y(this, "__ee__", m), m.value = null), n[e] ? "object" == o(n[e]) ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this }, once: i, off: a = function(e, t) { var n, r, i, a; if (d(t), !x.call(this, "__ee__")) return this; if (!(n = this.__ee__)[e]) return this; if ("object" == o(r = n[e]))
                            for (a = 0; i = r[a]; ++a) i !== t && i.__eeOnceListener__ !== t || (2 === r.length ? n[e] = r[a ? 0 : 1] : r.splice(a, 1));
                        else r !== t && r.__eeOnceListener__ !== t || delete n[e]; return this }, emit: l = function(e) { var t, n, r, i, a; if (x.call(this, "__ee__") && (i = this.__ee__[e]))
                            if ("object" == (void 0 === i ? "undefined" : o(i))) { for (n = arguments.length, a = new Array(n - 1), t = 1; t < n; ++t) a[t - 1] = arguments[t]; for (i = i.slice(), t = 0; r = i[t]; ++t) f.call(r, this, a) } else switch (arguments.length) {
                                case 1:
                                    g.call(i, this); break;
                                case 2:
                                    g.call(i, this, arguments[1]); break;
                                case 3:
                                    g.call(i, this, arguments[1], arguments[2]); break;
                                default:
                                    for (n = arguments.length, a = new Array(n - 1), t = 1; t < n; ++t) a[t - 1] = arguments[t];
                                    f.call(i, this, a) } } }, u = { on: p(r), once: p(i), off: p(a), emit: p(l) }, c = v({}, u), e.exports = t = function(e) { return null == e ? h(c) : v(Object(e), u) }, t.methods = s }, function(e, t, n) { var r = n(3),
                    i = n(9),
                    a = n(13),
                    o = n(21),
                    l = n(22);
                (e.exports = function(e, t) { var n, i, s, u, c; return arguments.length < 2 || "string" != typeof e ? (u = t, t = e, e = null) : u = arguments[2], r(e) ? (n = l.call(e, "c"), i = l.call(e, "e"), s = l.call(e, "w")) : (n = s = !0, i = !1), c = { value: t, configurable: n, enumerable: i, writable: s }, u ? a(o(u), c) : c }).gs = function(e, t, n) { var s, u, c, p; return "string" != typeof e ? (c = n, n = t, t = e, e = null) : c = arguments[3], r(t) ? i(t) ? r(n) ? i(n) || (c = n, n = void 0) : n = void 0 : (c = t, t = n = void 0) : t = void 0, r(e) ? (s = l.call(e, "c"), u = l.call(e, "e")) : (s = !0, u = !1), p = { get: t, set: n, configurable: s, enumerable: u }, c ? a(o(c), p) : p } }, function(e, t, n) { var r = n(10),
                    i = /^\s*class[\s{/}]/,
                    a = Function.prototype.toString;
                e.exports = function(e) { return !!r(e) && !i.test(a.call(e)) } }, function(e, t, n) { var r = n(11);
                e.exports = function(e) { if ("function" != typeof e) return !1; if (!hasOwnProperty.call(e, "length")) return !1; try { if ("number" != typeof e.length) return !1; if ("function" != typeof e.call) return !1; if ("function" != typeof e.apply) return !1 } catch (e) { return !1 } return !r(e) } }, function(e, t, n) { var r = n(12);
                e.exports = function(e) { if (!r(e)) return !1; try { return !!e.constructor && e.constructor.prototype === e } catch (e) { return !1 } } }, function(e, t, n) { var r = n(3),
                    i = { object: !0, function: !0, undefined: !0 };
                e.exports = function(e) { return !!r(e) && hasOwnProperty.call(i, void 0 === e ? "undefined" : o(e)) } }, function(e, t, n) { e.exports = n(14)() ? Object.assign : n(15) }, function(e, t, n) { e.exports = function() { var e, t = Object.assign; return "function" == typeof t && (t(e = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e.foo + e.bar + e.trzy === "razdwatrzy") } }, function(e, t, n) { var r = n(16),
                    i = n(20),
                    a = Math.max;
                e.exports = function(e, t) { var n, o, l, s = a(arguments.length, 2); for (e = Object(i(e)), l = function(r) { try { e[r] = t[r] } catch (e) { n || (n = e) } }, o = 1; o < s; ++o) r(t = arguments[o]).forEach(l); if (void 0 !== n) throw n; return e } }, function(e, t, n) { e.exports = n(17)() ? Object.keys : n(18) }, function(e, t, n) { e.exports = function() { try { return Object.keys("primitive"), !0 } catch (e) { return !1 } } }, function(e, t, n) { var r = n(2),
                    i = Object.keys;
                e.exports = function(e) { return i(r(e) ? Object(e) : e) } }, function(e, t, n) { e.exports = function() {} }, function(e, t, n) { var r = n(2);
                e.exports = function(e) { if (!r(e)) throw new TypeError("Cannot use null or undefined"); return e } }, function(e, t, n) { var r = n(2),
                    i = Array.prototype.forEach,
                    a = Object.create,
                    o = function(e, t) { var n; for (n in e) t[n] = e[n] };
                e.exports = function(e) { var t = a(null); return i.call(arguments, (function(e) { r(e) && o(Object(e), t) })), t } }, function(e, t, n) { e.exports = n(23)() ? String.prototype.contains : n(24) }, function(e, t, n) { var r = "razdwatrzy";
                e.exports = function() { return "function" == typeof r.contains && !0 === r.contains("dwa") && !1 === r.contains("foo") } }, function(e, t, n) { var r = String.prototype.indexOf;
                e.exports = function(e) { return r.call(this, e, arguments[1]) > -1 } }, function(e, t, n) { e.exports = function(e) { if ("function" != typeof e) throw new TypeError(e + " is not a function"); return e } }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = "undefined" != typeof window && window.location.href.indexOf("danmu-debug") > -1,
                    a = function() {
                        function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.constructorName = t || "" } return r(e, [{ key: "info", value: function(e) { for (var t, n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                                i && (t = console).log.apply(t, ["[Danmu Log][" + this.constructorName + "]", e].concat(r)) } }]), e }();
                t.default = a, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = s(n(1)),
                    a = s(n(0)),
                    l = s(n(28));

                function s(e) { return e && e.__esModule ? e : { default: e } } var u = function(e) {
                    function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)); return n.setLogger("control"), n.danmu = e, n.main = new l.default(e), e.config.defaultOff || n.main.start(), n } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "createSwitch", value: function() { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this.logger && this.logger.info("createSwitch"), this.switchBtn = a.default.createDom("dk-switch", '<span class="txt">弹</span>', {}, "danmu-switch " + (e ? "danmu-switch-active" : "")), this.switchBtn } }, { key: "destroy", value: function() { for (var e in this.logger && this.logger.info("destroy"), this.main.destroy(), this) delete this[e] } }]), t }(i.default);
                t.default = u, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = u(n(1)),
                    a = u(n(29)),
                    l = u(n(30)),
                    s = u(n(0));

                function u(e) { return e && e.__esModule ? e : { default: e } } var c = function(e) {
                    function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        n.setLogger("main"), n.danmu = e, n.container = e.container, n.channel = new a.default(e), n.data = [].concat(e.config.comments), n.playedData = [], n.queue = [], n.timer = null, n.retryTimer = null, n.retryStatus = "normal", n.interval = e.config.interval || 2e3, n.status = "idle", s.default.on(e, "bullet_remove", n.updateQueue.bind(n), "destroy"); var r = n; return s.default.on(n.danmu, "changeDirection", (function(e) { r.danmu.direction = e }), "destroy"), n.nums = 0, n } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "destroy", value: function() { for (var e in this.logger && this.logger.info("destroy"), clearTimeout(this.dataHandleTimer), this.channel.destroy(), this.data = [], this) delete this[e] } }, { key: "updateQueue", value: function(e) { this.logger && this.logger.info("updateQueue"); var t = this;
                            t.queue.some((function(n, r) { return n.id === e.bullet.id && (t.queue.splice(r, 1), !0) })), t.data.some((function(t, n) { return t.id === e.bullet.id && (t.hasAttached = !1, !0) })) } }, { key: "init", value: function(e, t) { t.logger && t.logger.info("init"), t || (t = this), t.retryStatus = "normal", t.data.sort((function(e, t) { return e.start - t.start })), t.retryTimer || function e() { "closed" === t.status && "stop" === t.retryStatus || ("playing" === t.status && (t.readData(), t.dataHandle()), "stop" === t.retryStatus && "paused" !== t.status || (t.dataHandleTimer = setTimeout((function() { e() }), t.interval - 1e3))) }() } }, { key: "start", value: function() { this.logger && this.logger.info("start"), this.status = "playing", this.queue = [], this.container.innerHTML = "", this.channel.resetWithCb(this.init, this) } }, { key: "stop", value: function() { this.logger && this.logger.info("stop"), this.status = "closed", this.retryTimer = null, this.retryStatus = "stop", this.channel.reset(), this.queue = [], this.container.innerHTML = "" } }, { key: "clear", value: function() { this.logger && this.logger.info("clear"), this.channel.reset(), this.data = [], this.queue = [], this.container.innerHTML = "" } }, { key: "play", value: function() { var e = this;
                            this.logger && this.logger.info("play"), this.status = "playing"; var t = this.channel.channels,
                                n = this.danmu.container.getBoundingClientRect();
                            t && t.length > 0 && ["scroll", "top", "bottom"].forEach((function(r) { e.queue.forEach((function(e) { e.startMove(n), e.resized = !0 })); for (var i = 0; i < t.length; i++) t[i].queue[r].forEach((function(e) { e.resized = !1 })) })) } }, { key: "pause", value: function() { this.logger && this.logger.info("pause"), this.status = "paused"; var e = this.channel.channels,
                                t = this.danmu.container.getBoundingClientRect();
                            e && e.length > 0 && this.queue.forEach((function(e) { e.pauseMove(t) })) } }, { key: "dataHandle", value: function() { var e = this; "paused" !== this.status && "closed" !== this.status && e.queue.length && e.queue.forEach((function(t) { "waiting" === t.status && t.startMove(e.channel.containerPos) })) } }, { key: "readData", value: function() { var e = this,
                                t = this.danmu; if (t.isReady) { var n = 0;
                                t.player && t.player.currentTime && (n = s.default.formatTime(t.player.currentTime)); var r = void 0,
                                    i = e.interval,
                                    a = e.channel,
                                    o = void 0;
                                t.player ? (o = e.data.filter((function(t) { return !t.start && e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0) && (t.start = n), e.danmu.hideArr.indexOf(t.mode) < 0 && (!t.color || e.danmu.hideArr.indexOf("color") < 0) && t.start - i <= n && n <= t.start + i })), t.live && (e.data = [])) : 0 === (o = e.data.splice(0, 1)).length && (o = e.playedData.splice(0, 1)), o.length > 0 && o.forEach((function(n) { if (e.forceDuration && e.forceDuration != n.duration && (n.duration = e.forceDuration), r = new l.default(t, n), n.hasAttached) { for (var i in r.detach(), r) delete r[i];
                                        r = null, n.hasAttached = !1, n.noDiscard && (n.prior ? e.data.unshift(n) : e.data.push(n)) } else if (r.attach(), n.hasAttached = !0, a.addBullet(r).result) e.queue.push(r), e.nums++, r.topInit();
                                    else { for (var o in r.detach(), r) delete r[o];
                                        r = null, n.hasAttached = !1, n.noDiscard && (n.prior ? e.data.unshift(n) : e.data.push(n)) } })) } } }]), t }(i.default);
                t.default = c, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = l(n(1)),
                    a = l(n(0));

                function l(e) { return e && e.__esModule ? e : { default: e } } var s = function(e) {
                    function t(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var n = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        n.setLogger("channel"), n.danmu = e, n.reset(!0); var r = n; return a.default.on(n.danmu, "bullet_remove", (function(e) { r.removeBullet(e.bullet) }), "destroy"), n.direction = e.direction, a.default.on(n.danmu, "changeDirection", (function(e) { r.direction = e }), "destroy"), n.containerPos = n.danmu.container.getBoundingClientRect(), n.containerWidth = n.containerPos.width, n.containerHeight = n.containerPos.height, n.containerLeft = n.containerPos.left, n.containerRight = n.containerPos.right, a.default.on(n.danmu, "channel_resize", (function() { r.containerPos = r.danmu.container.getBoundingClientRect(), r.resizing || (r.containerWidth = r.containerPos.width, r.containerHeight = r.containerPos.height, r.containerLeft = r.containerPos.left, r.containerRight = r.containerPos.right, r.resize(!0)) }), "destroy"), n } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "destroy", value: function() { for (var e in this.logger && this.logger.info("destroy"), clearTimeout(this.resizeTimer), this.channels = [], this) delete this[e] } }, { key: "resize", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.logger && this.logger.info("resize"); var t = this.danmu.container,
                                n = this;
                            n.resizing || (n.resizing = !0, this.resizeTimer = setTimeout((function() { n.danmu.bulletBtn.main.data && n.danmu.bulletBtn.main.data.forEach((function(e) { e.bookChannelId && (delete e.bookChannelId, n.logger && n.logger.info("resize导致" + e.id + "号优先弹幕预定取消")) })), n.logger && n.logger.info("resize导致所有轨道恢复正常使用"); var r = t.getBoundingClientRect();
                                n.width = r.width, n.height = r.height, n.danmu.config.area && n.danmu.config.area.start >= 0 && n.danmu.config.area.end >= n.danmu.config.area.start && ("b2t" === n.direction ? n.width = n.width * (n.danmu.config.area.end - n.danmu.config.area.start) : n.height = n.height * (n.danmu.config.area.end - n.danmu.config.area.start)), n.container = t; var i, a = n.danmu.config.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
                                i = "b2t" === n.direction ? Math.floor(n.width / a) : Math.floor(n.height / a); for (var o = [], l = 0; l < i; l++) o[l] = { id: l, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }; if (n.channels && n.channels.length <= o.length) { for (var s = function(t) { o[t] = { id: t, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top"].forEach((function(r) { n.channels[t].queue[r].forEach((function(i) { i.el && (o[t].queue[r].push(i), i.resized || (i.pauseMove(n.containerPos, e), "paused" !== i.danmu.bulletBtn.main.status && i.startMove(n.containerPos), i.resized = !0)) })) })), n.channels[t].queue.bottom.forEach((function(r) { if (r.el) { if (o[t + o.length - n.channels.length].queue.bottom.push(r), r.channel_id[0] + r.channel_id[1] - 1 === t) { var i = [].concat(r.channel_id);
                                                        r.channel_id = [i[0] - n.channels.length + o.length, i[1]], r.top = r.channel_id[0] * a, n.danmu.config.area && n.danmu.config.area.start && (r.top += n.containerHeight * n.danmu.config.area.start), r.topInit() }
                                                    r.resized || (r.pauseMove(n.containerPos, e), "paused" !== r.danmu.bulletBtn.main.status && r.startMove(n.containerPos), r.resized = !0) } })) }, u = 0; u < n.channels.length; u++) s(u); for (var c = function(e) {
                                            ["scroll", "top", "bottom"].forEach((function(t) { o[e].queue[t].forEach((function(e) { e.resized = !1 })) })) }, p = 0; p < o.length; p++) c(p);
                                    n.channels = o, "b2t" === n.direction ? n.channelWidth = a : n.channelHeight = a } else if (n.channels && n.channels.length > o.length) { for (var d = function(t) { o[t] = { id: t, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top", "bottom"].forEach((function(r) { if ("top" === r && t > Math.floor(o.length / 2));
                                                else if ("bottom" === r && t <= Math.floor(o.length / 2));
                                                else { var i = "bottom" === r ? t - o.length + n.channels.length : t;
                                                    n.channels[i].queue[r].forEach((function(l, s) { if (l.el) { if (o[t].queue[r].push(l), "bottom" === r && l.channel_id[0] + l.channel_id[1] - 1 === i) { var u = [].concat(l.channel_id);
                                                                l.channel_id = [u[0] - n.channels.length + o.length, u[1]], l.top = l.channel_id[0] * a, n.danmu.config.area && n.danmu.config.area.start && (l.top += n.containerHeight * n.danmu.config.area.start), l.topInit() }
                                                            l.pauseMove(n.containerPos, e), "paused" !== l.danmu.bulletBtn.main.status && l.startMove(n.containerPos), l.resized || (l.resized = !0) }
                                                        n.channels[i].queue[r].splice(s, 1) })) } })) }, f = 0; f < o.length; f++) d(f); for (var g = function(e) {
                                            ["scroll", "top", "bottom"].forEach((function(t) { o[e].queue[t].forEach((function(e) { e.resized = !1 })) })) }, h = 0; h < o.length; h++) g(h);
                                    n.channels = o, "b2t" === n.direction ? n.channelWidth = a : n.channelHeight = a }
                                n.resizing = !1 }), 10)) } }, { key: "addBullet", value: function(e) { var t = this,
                                n = this.danmu,
                                r = this.channels,
                                i = void 0,
                                a = void 0,
                                o = void 0; if ("b2t" === t.direction ? (a = this.channelWidth, o = Math.ceil(e.width / a)) : (i = this.channelHeight, o = Math.ceil(e.height / i)), o > r.length) return { result: !1, message: "exceed channels.length, occupy=" + o + ",channelsSize=" + r.length }; for (var l = !0, s = void 0, u = -1, c = 0, p = r.length; c < p; c++)
                                if (r[c].queue[e.mode].some((function(t) { return t.id === e.id }))) return { result: !1, message: "exsited, channelOrder=" + c + ",danmu_id=" + e.id };
                            if ("scroll" === e.mode)
                                for (var d = 0, f = r.length - o; d <= f; d++) { l = !0; for (var g = d; g < d + o; g++) { if ((s = r[g]).operating.scroll) { l = !1; break } if (s.bookId.scroll && s.bookId.scroll !== e.id) { l = !1; break }
                                        s.operating.scroll = !0; var h = s.queue.scroll[0]; if (h) { var y = h.el.getBoundingClientRect(); if ("b2t" === t.direction) { if (y.bottom > t.containerPos.bottom) { l = !1, s.operating.scroll = !1; break } } else if (y.right > t.containerPos.right) { l = !1, s.operating.scroll = !1; break } var v, x = void 0,
                                                m = void 0,
                                                b = void 0,
                                                k = void 0; if ("b2t" === t.direction ? (m = (y.top - t.containerPos.top + y.height) / (x = (t.containerPos.height + y.height) / h.duration), b = t.containerPos.height, k = (t.containerPos.height + e.height) / e.duration) : (m = (y.left - t.containerPos.left + y.width) / (x = (t.containerPos.width + y.width) / h.duration), b = t.containerPos.width, k = (t.containerPos.width + e.width) / e.duration), v = b / k, n.config.bOffset || (n.config.bOffset = 0), x < k && m + n.config.bOffset > v) { l = !1, s.operating.scroll = !1; break } }
                                        s.operating.scroll = !1 } if (l) { u = d; break } } else if ("top" === e.mode)
                                    for (var w = 0, _ = r.length - o; w <= _; w++) { l = !0; for (var E = w; E < w + o; E++) { if (E > Math.floor(r.length / 2)) { l = !1; break } if ((s = r[E]).operating[e.mode]) { l = !1; break } if ((s.bookId[e.mode] || e.prior) && s.bookId[e.mode] !== e.id) { l = !1; break } if (s.operating[e.mode] = !0, s.queue[e.mode].length > 0) { l = !1, s.operating[e.mode] = !1; break }
                                            s.operating[e.mode] = !1 } if (l) { u = w; break } } else if ("bottom" === e.mode)
                                        for (var T = r.length - o; T >= 0; T--) { l = !0; for (var C = T; C < T + o; C++) { if (C <= Math.floor(r.length / 2)) { l = !1; break } if ((s = r[C]).operating[e.mode]) { l = !1; break } if ((s.bookId[e.mode] || e.prior) && s.bookId[e.mode] !== e.id) { l = !1; break } if (s.operating[e.mode] = !0, s.queue[e.mode].length > 0) { l = !1, s.operating[e.mode] = !1; break }
                                                s.operating[e.mode] = !1 } if (l) { u = T; break } }
                                    if (-1 !== u) { for (var S = u, P = u + o; S < P; S++)(s = r[S]).operating[e.mode] = !0, s.queue[e.mode].unshift(e), e.prior && (delete s.bookId[e.mode], t.logger && t.logger.info(S + "号轨道恢复正常使用")), s.operating[e.mode] = !1; return e.prior && (t.logger && t.logger.info(e.id + "号优先弹幕运行完毕"), delete e.bookChannelId, n.player && n.bulletBtn.main.data.some((function(t) { return t.id === e.id && (delete t.bookChannelId, !0) }))), e.channel_id = [u, o], "b2t" === t.direction ? (e.top = u * a, t.danmu.config.area && t.danmu.config.area.start && (e.top += t.containerWidth * t.danmu.config.area.start)) : (e.top = u * i, t.danmu.config.area && t.danmu.config.area.start && (e.top += t.containerHeight * t.danmu.config.area.start)), { result: e, message: "success" } }
                            if (e.options.realTime) { var O = 0,
                                    L = -1,
                                    M = null; if (t.danmu.bulletBtn.main.queue.forEach((function(e, n) {!e.prior && !e.options.realTime && e.el && e.el.getBoundingClientRect().left > t.containerPos.right && e.start >= O && (O = e.start, L = n, M = e) })), M) { M.remove(), t.removeBullet(M), t.danmu.bulletBtn.main.queue.splice(L, 1), e.channel_id = M.channel_id; for (var R = M.channel_id[0], D = M.channel_id[0] + M.channel_id[1]; R < D; R++)(s = r[R]).operating[e.mode] = !0, s.queue[e.mode].unshift(e), e.prior && delete s.bookId[e.mode], s.operating[e.mode] = !1; return e.top = M.top, t.danmu.config.area && t.danmu.config.area.start && (e.top += t.containerHeight * t.danmu.config.area.start), { result: e, message: "success" } } } if (e.prior)
                                if (e.bookChannelId || t.danmu.live) n.player && n.bulletBtn.main.data.some((function(n) { return n.id === e.id && (t.logger && t.logger.info(e.id + "号优先弹幕将于2秒后再次请求注册"), n.start += 2e3, !0) }));
                                else { u = -1; for (var A = 0, j = r.length - o; A <= j; A++) { l = !0; for (var I = A; I < A + o; I++)
                                            if (r[I].bookId[e.mode]) { l = !1; break }
                                        if (l) { u = A; break } } if (-1 !== u) { for (var z = u; z < u + o; z++) r[z].bookId[e.mode] = e.id, t.logger && t.logger.info(z + "号轨道被" + e.id + "号优先弹幕预定");
                                        n.player && n.bulletBtn.main.data.some((function(n) { return n.id === e.id && (t.logger && t.logger.info(e.id + "号优先弹幕将于2秒后再次请求注册"), n.start += 2e3, n.bookChannelId = [u, o], t.logger && t.logger.info(e.id + "号优先弹幕预定了" + u + "~" + (u + o - 1) + "号轨道"), !0) })) } }
                            return { result: !1, message: "no surplus will right" } } }, { key: "removeBullet", value: function(e) { this.logger && this.logger.info("removeBullet " + (e.options.txt || "[DOM Element]")); for (var t = this.channels, n = e.channel_id, r = void 0, i = n[0], a = n[0] + n[1]; i < a; i++)
                                if (r = t[i]) { r.operating[e.mode] = !0; var o = -1;
                                    r.queue[e.mode].some((function(t, n) { return t.id === e.id && (o = n, !0) })), o > -1 && r.queue[e.mode].splice(o, 1), r.operating[e.mode] = !1 }
                            e.options.loop && this.danmu.bulletBtn.main.playedData.push(e.options) } }, { key: "resetArea", value: function() { this.logger && this.logger.info("resetArea"); var e = this.danmu.container,
                                t = this,
                                n = e.getBoundingClientRect();
                            t.width = n.width, t.height = n.height, t.danmu.config.area && t.danmu.config.area.start >= 0 && t.danmu.config.area.end >= t.danmu.config.area.start && ("b2t" === t.direction ? t.width = t.width * (t.danmu.config.area.end - t.danmu.config.area.start) : t.height = t.height * (t.danmu.config.area.end - t.danmu.config.area.start)), t.container = e; var r, i = t.danmu.config.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
                            r = "b2t" === t.direction ? Math.floor(t.width / i) : Math.floor(t.height / i); for (var a = [], o = 0; o < r; o++) a[o] = { id: o, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }; if (t.channels && t.channels.length <= a.length) { for (var l = function(e) { a[e] = { id: e, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top"].forEach((function(n) { t.channels[e].queue[n].forEach((function(r) { r.el && (a[e].queue[n].push(r), r.resized || (r.pauseMove(t.containerPos, !1), r.startMove(t.containerPos), r.resized = !0)) })) })), t.channels[e].queue.bottom.forEach((function(n) { if (n.el) { if (a[e + a.length - t.channels.length].queue.bottom.push(n), n.channel_id[0] + n.channel_id[1] - 1 === e) { var r = [].concat(n.channel_id);
                                                    n.channel_id = [r[0] - t.channels.length + a.length, r[1]], n.top = n.channel_id[0] * i, t.danmu.config.area && t.danmu.config.area.start && (n.top += t.containerHeight * t.danmu.config.area.start), n.topInit() }
                                                n.resized || (n.pauseMove(t.containerPos, !1), n.startMove(t.containerPos), n.resized = !0) } })) }, s = 0; s < t.channels.length; s++) l(s); for (var u = function(e) {
                                        ["scroll", "top", "bottom"].forEach((function(t) { a[e].queue[t].forEach((function(e) { e.resized = !1 })) })) }, c = 0; c < a.length; c++) u(c);
                                t.channels = a, "b2t" === t.direction ? t.channelWidth = i : t.channelHeight = i } else if (t.channels && t.channels.length > a.length) { for (var p = function(e) { a[e] = { id: e, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} }, ["scroll", "top", "bottom"].forEach((function(n) { if ("top" === n && e > Math.floor(a.length / 2));
                                            else if ("bottom" === n && e <= Math.floor(a.length / 2));
                                            else { var r = "bottom" === n ? e - a.length + t.channels.length : e;
                                                t.channels[r].queue[n].forEach((function(o, l) { if (o.el) { if (a[e].queue[n].push(o), "bottom" === n && o.channel_id[0] + o.channel_id[1] - 1 === r) { var s = [].concat(o.channel_id);
                                                            o.channel_id = [s[0] - t.channels.length + a.length, s[1]], o.top = o.channel_id[0] * i, t.danmu.config.area && t.danmu.config.area.start && (o.top += t.containerHeight * t.danmu.config.area.start), o.topInit() }
                                                        o.resized || (o.pauseMove(t.containerPos, !1), o.startMove(t.containerPos), o.resized = !0) }
                                                    t.channels[r].queue[n].splice(l, 1) })) } })) }, d = 0; d < a.length; d++) p(d); for (var f = function(e) {
                                        ["scroll", "top", "bottom"].forEach((function(t) { a[e].queue[t].forEach((function(e) { e.resized = !1 })) })) }, g = 0; g < a.length; g++) f(g);
                                t.channels = a, "b2t" === t.direction ? t.channelWidth = i : t.channelHeight = i } } }, { key: "reset", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.logger && this.logger.info("reset"); var t = this.danmu.container,
                                n = this;

                            function r() { var e = t.getBoundingClientRect();
                                n.width = e.width, n.height = e.height, n.danmu.config.area && n.danmu.config.area.start >= 0 && n.danmu.config.area.end >= n.danmu.config.area.start && ("b2t" === n.direction ? n.width = n.width * (n.danmu.config.area.end - n.danmu.config.area.start) : n.height = n.height * (n.danmu.config.area.end - n.danmu.config.area.start)), n.container = t; var r, i = n.danmu.config.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
                                r = "b2t" === n.direction ? Math.floor(n.width / i) : Math.floor(n.height / i); for (var a = [], o = 0; o < r; o++) a[o] = { id: o, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} };
                                n.channels = a, "b2t" === n.direction ? n.channelWidth = i : n.channelHeight = i }
                            n.danmu.bulletBtn && n.danmu.bulletBtn.main && n.danmu.bulletBtn.main.queue.forEach((function(e) { e.pauseMove(n.containerPos), e.remove() })), n.channels && n.channels.length > 0 && ["scroll", "top", "bottom"].forEach((function(e) { for (var t = 0; t < n.channels.length; t++) n.channels[t].queue[e].forEach((function(e) { e.pauseMove(n.containerPos), e.remove() })) })), n.danmu.bulletBtn && n.danmu.bulletBtn.main && n.danmu.bulletBtn.main.data && n.danmu.bulletBtn.main.data.forEach((function(e) { e.hasAttached = !1 })), e ? this.resetTimer = setTimeout(r, 200) : r() } }, { key: "resetWithCb", value: function(e, t) { this.logger && this.logger.info("resetWithCb"); var n = this.danmu.container,
                                r = this;
                            r.channels && r.channels.length > 0 && ["scroll", "top", "bottom"].forEach((function(e) { for (var t = 0; t < r.channels.length; t++) r.channels[t].queue[e].forEach((function(e) { e.pauseMove(r.containerPos), e.remove() })) })); var i = n.getBoundingClientRect();
                            r.width = i.width, r.height = i.height, r.danmu.config.area && r.danmu.config.area.start >= 0 && r.danmu.config.area.end >= r.danmu.config.area.start && ("b2t" === r.direction ? r.width = r.width * (r.danmu.config.area.end - r.danmu.config.area.start) : r.height = r.height * (r.danmu.config.area.end - r.danmu.config.area.start)), r.container = n; var a, o = r.danmu.config.channelSize || (/mobile/gi.test(navigator.userAgent) ? 10 : 12);
                            a = "b2t" === r.direction ? Math.floor(r.width / o) : Math.floor(r.height / o); for (var l = [], s = 0; s < a; s++) l[s] = { id: s, queue: { scroll: [], top: [], bottom: [] }, operating: { scroll: !1, top: !1, bottom: !1 }, bookId: {} };
                            r.channels = l, r.channelHeight = o, e && e(!0, t) } }]), t }(i.default);
                t.default = s, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = l(n(1)),
                    a = l(n(0));

                function l(e) { return e && e.__esModule ? e : { default: e } } var s = function(e) {
                    function t(e, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, t); var r = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != (void 0 === t ? "undefined" : o(t)) && "function" != typeof t ? e : t }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        r.setLogger("bullet"), r.danmu = e, r.options = n, r.duration = n.duration, r.moveV = n.moveV, r.id = n.id, r.container = e.container, r.start = n.start, r.prior = n.prior, r.color = n.color, r.bookChannelId = n.bookChannelId, r.direction = e.direction; var i = r;
                        r.onChangeDirection = function(e) { i.direction = e }, r.danmu.on("changeDirection", r.onChangeDirection); var l = void 0; if (r.domObj = e.domObj, n.el && 1 === n.el.nodeType) { l = r.domObj.use(); var s = a.default.copyDom(n.el);
                            n.eventListeners && n.eventListeners.length > 0 && n.eventListeners.forEach((function(e) { s.addEventListener(e.event, e.listener, e.useCapture || !1) })), l.appendChild(s) } else(l = r.domObj.use()).textContent = n.txt; if (n.style) { var u = n.style;
                            Object.keys(u).forEach((function(e) { a.default.style(l, e, u[e]) })) } "top" === n.mode || "bottom" === n.mode ? r.mode = n.mode : r.mode = "scroll", r.el = l, n.like && n.like.el && r.setLikeDom(n.like.el, n.like.style), r.status = "waiting"; var c = r.container.getBoundingClientRect(),
                            p = Math.floor(Math.random() * (c.width / 10 > 100 ? 200 : c.width / 10));
                        n.realTime && (p = 0); var d = c.width + p + "px"; return a.default.style(r.el, "left", d), r.containerPos = c, r } return function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : o(t)));
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), r(t, [{ key: "attach", value: function() { if (this.container.appendChild(this.el), this.elPos = this.el.getBoundingClientRect(), "b2t" === this.direction ? (this.width = this.elPos.height, this.height = this.elPos.width) : (this.width = this.elPos.width, this.height = this.elPos.height), this.moveV) { var e = this.containerPos;
                                this.duration = (e.width + this.width) / this.moveV * 1e3 }
                            this.danmu.config && this.danmu.config.mouseControl && (this.mouseoverFunWrapper = this.mouseoverFun.bind(this), this.el.addEventListener("mouseover", this.mouseoverFunWrapper, !1)), this.danmu.config && this.danmu.config.mouseEnterControl && (this.mouseEnterFunWrapper = this.mouseoverFun.bind(this), this.el.addEventListener("mouseenter", this.mouseEnterFunWrapper, !1)) } }, { key: "mouseoverFun", value: function(e) { this.danmu && this.danmu.mouseControl && this.danmu.config.mouseControlPause || "waiting" === this.status || "end" === this.status || this.danmu && this.danmu.emit("bullet_hover", { bullet: this, event: e }) } }, { key: "detach", value: function() { this.el && (this.danmu.config && this.danmu.config.mouseControl && this.el.removeEventListener("mouseover", this.mouseoverFunWrapper, !1), this.danmu.config && this.danmu.config.mouseEnterControl && this.el.removeEventListener("mouseenter", this.mouseEnterFunWrapper, !1), this.el.parentNode && this.el.parentNode.removeChild(this.el), this.domObj.unuse(this.el), this.el = null), this.danmu.off("changeDirection", this.onChangeDirection) } }, { key: "topInit", value: function() { if (this.logger && this.logger.info("topInit #" + (this.options.txt || "[DOM Element]") + "#"), "b2t" === this.direction) { var e = this.containerPos;
                                a.default.style(this.el, "transformOrigin", "left top"), a.default.style(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + e.height + "px) translateZ(0px) rotate(90deg)"), a.default.style(this.el, "transition", "transform 0s linear 0s") } else a.default.style(this.el, "top", this.top + "px") } }, { key: "pauseMove", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.logger && this.logger.info("pauseMove #" + (this.options.txt || "[DOM Element]") + "#"); var n = this; if ("paused" !== this.status && ("forcedPause" !== n.status && (this.status = "paused"), clearTimeout(n.removeTimer), this.el))
                                if (a.default.style(this.el, "willChange", "auto"), "scroll" === this.mode) { if (t) { var r = ((new Date).getTime() - n.moveTime) / 1e3,
                                            i = r * this.moveV,
                                            o = 0;
                                        o = n.moveMoreS - i >= 0 ? "b2t" === this.direction ? (n.moveMoreS - i) / n.moveContainerHeight * e.height : (n.moveMoreS - i) / n.moveContainerWidth * e.width : n.moveMoreS - i, "b2t" === this.direction ? a.default.style(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + o + "px) translateZ(0px) rotate(90deg)") : a.default.style(this.el, "left", o + "px") } else "b2t" === this.direction ? a.default.style(this.el, "transform", "translateX(-" + this.top + "px) translateY(" + (this.el.getBoundingClientRect().top - e.top) + "px) translateZ(0px) rotate(90deg)") : a.default.style(this.el, "left", this.el.getBoundingClientRect().left - e.left + "px"); "b2t" === this.direction || a.default.style(this.el, "transform", "translateX(0px) translateY(0px) translateZ(0px)"), a.default.style(this.el, "transition", "transform 0s linear 0s") } else this.pastDuration && this.startTime ? this.pastDuration = this.pastDuration + (new Date).getTime() - this.startTime : this.pastDuration = 1 } }, { key: "startMove", value: function(e, t) { this.logger && this.logger.info("startMove #" + (this.options.txt || "[DOM Element]") + "#"); var n = this; if (n.hasMove || (n.danmu.emit("bullet_start", n), n.hasMove = !0), ("forcedPause" !== n.status || t) && this.el && "start" !== this.status)
                                if (this.status = "start", a.default.style(this.el, "willChange", "transform"), "scroll" === this.mode)
                                    if ("b2t" === this.direction) { this.moveV = (e.height + this.height) / this.duration * 1e3; var r = (n.el.getBoundingClientRect().bottom - e.top) / this.moveV;
                                        a.default.style(this.el, "transition", "transform " + r + "s linear 0s"), this.startMoveTimer = setTimeout((function() { n.el && (a.default.style(n.el, "transform", "translateX(-" + n.top + "px) translateY(-" + n.height + "px) translateZ(0px) rotate(90deg)"), n.moveTime = (new Date).getTime(), n.moveMoreS = n.el.getBoundingClientRect().top - e.top, n.moveContainerHeight = e.height, n.removeTimer = setTimeout(s, 1e3 * r)) }), 20) } else { var i = this.el.getBoundingClientRect();
                                        this.moveV = (e.width + this.width) / this.duration * 1e3; var o = (i.right - e.left) / this.moveV;
                                        a.default.style(this.el, "transition", "transform " + o + "s linear 0s"), this.startMoveTimer = setTimeout((function() { if (n.el) { var t = n.el.getBoundingClientRect(),
                                                    r = (t.right - e.left) / o;
                                                t.right > e.left && r > n.moveV - 1 && r < n.moveV + 1 ? (a.default.style(n.el, "transform", "translateX(-" + (t.right - e.left) + "px) translateY(0px) translateZ(0px)"), n.moveTime = (new Date).getTime(), n.moveMoreS = t.left - e.left, n.moveContainerWidth = e.width, n.removeTimer = setTimeout(s, 1e3 * o)) : (n.status = "end", n.remove()) } }), 0) }
                            else { a.default.style(this.el, "left", "50%"), a.default.style(this.el, "margin", "0 0 0 -" + this.width / 2 + "px"), this.pastDuration || (this.pastDuration = 1); var l = this.duration >= this.pastDuration ? this.duration - this.pastDuration : 0;
                                this.removeTimer = setTimeout(s, l), this.startTime = (new Date).getTime() }

                            function s() { if (n.el)
                                    if ("scroll" === n.mode) { var e = n.containerPos,
                                            t = n.el.getBoundingClientRect(); "b2t" === n.direction ? t && t.bottom <= e.top + 100 ? (n.status = "end", n.remove()) : (n.pauseMove(e), "paused" !== n.danmu.bulletBtn.main.status && n.startMove(e)) : t && t.right <= e.left + 100 ? (n.status = "end", n.remove()) : (n.pauseMove(e), "paused" !== n.danmu.bulletBtn.main.status && n.startMove(e)) } else n.status = "end", n.remove() } } }, { key: "remove", value: function() { this.logger && this.logger.info("remove #" + (this.options.txt || "[DOM Element]") + "#"), this.removeTimer && clearTimeout(this.removeTimer), this.startMoveTimer && clearTimeout(this.startMoveTimer), this.el && this.el.parentNode && (a.default.style(this.el, "willChange", "auto"), this.detach(), this.danmu.emit("bullet_remove", { bullet: this })) } }, { key: "setFontSize", value: function(e) { this.el && (this.el.style.fontSize = e) } }, { key: "setLikeDom", value: function(e, t) { if (e && (Object.keys(t).forEach((function(n) { e.style[n] = t[n] })), e.className = "danmu-like", this.el)) { var n = this.el.querySelector(".danmu-like");
                                n && this.el.removeChild(n), this.el.innerHTML = "" + this.el.innerHTML + e.outerHTML } return e } }]), t }(i.default);
                t.default = s, e.exports = t.default }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    a = (r = n(0)) && r.__esModule ? r : { default: r },
                    o = function() {
                        function e(t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), t = { initDOM: function() { return document.createElement("div") }, initSize: 10 }, this.init(t) } return i(e, [{ key: "init", value: function(e) { this.idleList = [], this.usingList = [], this._id = 0, this.options = e, this._expand(e.initSize) } }, { key: "use", value: function() { this.idleList.length || this._expand(1); var e = this.idleList.shift(); return this.usingList.push(e), e } }, { key: "unuse", value: function(e) { var t = this.usingList.indexOf(e);
                                t < 0 || (this.usingList.splice(t, 1), e.innerHTML = "", e.textcontent = "", this.clearElementStyle(e), this.idleList.push(e)) } }, { key: "_expand", value: function(e) { for (var t = 0; t < e; t++) this.idleList.push(this.options.initDOM(this._id++)) } }, { key: "destroy", value: function() { for (var e = 0; e < this.idleList.length; e++) this.idleList[e].innerHTML = "", this.idleList[e].textcontent = "", this.clearElementStyle(this.idleList[e]); for (var t = 0; t < this.usingList.length; t++) this.usingList[t].innerHTML = "", this.usingList[t].textcontent = "", this.clearElementStyle(this.usingList[t]); for (var n in this) delete this[n] } }, { key: "clearElementStyle", value: function(e) { var t = "undefined" != typeof window ? window.navigator.userAgent : null;
                                t && (t.indexOf("MSIE ") > -1 || t.indexOf("Trident/") > -1 ? a.default.style(e, "transform", "none") : e.setAttribute("style", "")) } }]), e }();
                t.default = o, e.exports = t.default }, function(e) { e.exports = JSON.parse('{"version":"0.5.10"}') }, function(e, t, n) { Object.defineProperty(t, "__esModule", { value: !0 }); var r = function() {
                        function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(),
                    i = new(function() {
                        function e() { var t = this; if (function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.__handlers = [], window.ResizeObserver) try { this.observer = new window.ResizeObserver((function(e) { var n = (new Date).getTime();
                                    n - t.timeStampe < 200 || (t.timeStampe = n, t.__trigger(e)) })), this.timeStampe = (new Date).getTime() } catch (e) {} } return r(e, [{ key: "addObserver", value: function(e, t) { if (this.observer) { this.observer && this.observer.observe(e); for (var n = this.__handlers, r = -1, i = 0; i < n.length; i++) n[i] && e === n[i].target && (r = i);
                                    r > -1 ? this.__handlers[r].handler.push(t) : this.__handlers.push({ target: e, handler: [t] }) } } }, { key: "unObserver", value: function(e) { var t = -1;
                                this.__handlers.map((function(n, r) { e === n.target && (t = r) })), this.observer && this.observer.unobserve(e), t > -1 && this.__handlers.splice(t, 1) } }, { key: "destroyObserver", value: function() { this.observer && this.observer.disconnect(), this.observer = null, this.__handlers = null } }, { key: "__runHandler", value: function(e) { for (var t = this.__handlers, n = 0; n < t.length; n++)
                                    if (t[n] && e === t[n].target) { t[n].handler && t[n].handler.map((function(e) { try { e() } catch (e) { console.error(e) } })); break } } }, { key: "__trigger", value: function(e) { var t = this;
                                e.map((function(e) { t.__runHandler(e.target) })) } }]), e }());
                t.addObserver = function(e, t) { i.addObserver(e, t) }, t.unObserver = function(e, t) { i.unObserver(e, t) }, t.destroyObserver = function(e, t) { i.destroyObserver(e, t) } }, function(e, t, n) { var r = n(35); "string" == typeof r && (r = [
                    [e.i, r, ""]
                ]), n(37)(r, { hmr: !0, transform: void 0, insertInto: void 0 }), r.locals && (e.exports = r.locals) }, function(e, t, n) {
                (e.exports = n(36)(!1)).push([e.i, ".danmu{overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none;-ms-user-select:none}.danmu>*{position:absolute;white-space:nowrap}.danmu-switch{width:32px;height:20px;border-radius:100px;background-color:#ccc;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;cursor:pointer;position:relative;text-align:center;margin:10px auto}.danmu-switch.danmu-switch-active{padding-left:12px;background-color:#f85959}.danmu-switch span.txt{width:20px;height:20px;line-height:20px;text-align:center;display:block;border-radius:100px;background-color:#ffffff;-webkit-box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);box-shadow:-2px 0 0 0 rgba(0, 0, 0, .04);font-family:PingFangSC;font-size:10px;font-weight:500;color:#f44336}\n", ""]) }, function(e, t) { e.exports = function(e) { var t = []; return t.toString = function() { return this.map((function(t) { var n = function(e, t) { var n, r = e[1] || "",
                                    i = e[3]; if (!i) return r; if (t && "function" == typeof btoa) { var a = (n = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                        o = i.sources.map((function(e) { return "/*# sourceURL=" + i.sourceRoot + e + " */" })); return [r].concat(o).concat([a]).join("\n") } return [r].join("\n") }(t, e); return t[2] ? "@media " + t[2] + "{" + n + "}" : n })).join("") }, t.i = function(e, n) { "string" == typeof e && (e = [
                            [null, e, ""]
                        ]); for (var r = {}, i = 0; i < this.length; i++) { var a = this[i][0]; "number" == typeof a && (r[a] = !0) } for (i = 0; i < e.length; i++) { var o = e[i]; "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o)) } }, t } }, function(e, t, n) { var r, i, a = {},
                    l = (r = function() { return window && document && document.all && !window.atob }, function() { return void 0 === i && (i = r.apply(this, arguments)), i }),
                    s = function(e) { return document.querySelector(e) },
                    u = function(e) { var t = {}; return function(e) { if ("function" == typeof e) return e(); if (void 0 === t[e]) { var n = s.call(this, e); if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try { n = n.contentDocument.head } catch (e) { n = null }
                                t[e] = n } return t[e] } }(),
                    c = null,
                    p = 0,
                    d = [],
                    f = n(38);

                function g(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n],
                            i = a[r.id]; if (i) { i.refs++; for (var o = 0; o < i.parts.length; o++) i.parts[o](r.parts[o]); for (; o < r.parts.length; o++) i.parts.push(b(r.parts[o], t)) } else { var l = []; for (o = 0; o < r.parts.length; o++) l.push(b(r.parts[o], t));
                            a[r.id] = { id: r.id, refs: 1, parts: l } } } }

                function h(e, t) { for (var n = [], r = {}, i = 0; i < e.length; i++) { var a = e[i],
                            o = t.base ? a[0] + t.base : a[0],
                            l = { css: a[1], media: a[2], sourceMap: a[3] };
                        r[o] ? r[o].parts.push(l) : n.push(r[o] = { id: o, parts: [l] }) } return n }

                function y(e, t) { var n = u(e.insertInto); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var r = d[d.length - 1]; if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), d.push(t);
                    else if ("bottom" === e.insertAt) n.appendChild(t);
                    else { if ("object" != o(e.insertAt) || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); var i = u(e.insertInto + " " + e.insertAt.before);
                        n.insertBefore(t, i) } }

                function v(e) { if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e); var t = d.indexOf(e);
                    t >= 0 && d.splice(t, 1) }

                function x(e) { var t = document.createElement("style"); return void 0 === e.attrs.type && (e.attrs.type = "text/css"), m(t, e.attrs), y(e, t), t }

                function m(e, t) { Object.keys(t).forEach((function(n) { e.setAttribute(n, t[n]) })) }

                function b(e, t) { var n, r, i, a; if (t.transform && e.css) { if (!(a = t.transform(e.css))) return function() {};
                        e.css = a } if (t.singleton) { var o = p++;
                        n = c || (c = x(t)), r = _.bind(null, n, o, !1), i = _.bind(null, n, o, !0) } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) { var t = document.createElement("link"); return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), y(e, t), t }(t), r = T.bind(null, n, t), i = function() { v(n), n.href && URL.revokeObjectURL(n.href) }) : (n = x(t), r = E.bind(null, n), i = function() { v(n) }); return r(e),
                        function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                                r(e = t) } else i() } }
                e.exports = function(e, t) { if ("undefined" != typeof DEBUG && DEBUG && "object" != ("undefined" == typeof document ? "undefined" : o(document))) throw new Error("The style-loader cannot be used in a non-browser environment");
                    (t = t || {}).attrs = "object" == o(t.attrs) ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = l()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom"); var n = h(e, t); return g(n, t),
                        function(e) { for (var r = [], i = 0; i < n.length; i++) { var o = n[i];
                                (l = a[o.id]).refs--, r.push(l) } for (e && g(h(e, t), t), i = 0; i < r.length; i++) { var l; if (0 === (l = r[i]).refs) { for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                                    delete a[l.id] } } } }; var k, w = (k = [], function(e, t) { return k[e] = t, k.filter(Boolean).join("\n") });

                function _(e, t, n, r) { var i = n ? "" : r.css; if (e.styleSheet) e.styleSheet.cssText = w(t, i);
                    else { var a = document.createTextNode(i),
                            o = e.childNodes;
                        o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a) } }

                function E(e, t) { var n = t.css,
                        r = t.media; if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;
                    else { for (; e.firstChild;) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n)) } }

                function T(e, t, n) { var r = n.css,
                        i = n.sourceMap,
                        a = void 0 === t.convertToAbsoluteUrls && i;
                    (t.convertToAbsoluteUrls || a) && (r = f(r)), i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"); var o = new Blob([r], { type: "text/css" }),
                        l = e.href;
                    e.href = URL.createObjectURL(o), l && URL.revokeObjectURL(l) } }, function(e, t) { e.exports = function(e) { var t = "undefined" != typeof window && window.location; if (!t) throw new Error("fixUrls requires window.location"); if (!e || "string" != typeof e) return e; var n = t.protocol + "//" + t.host,
                        r = n + t.pathname.replace(/\/[^\/]*$/, "/"); return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) { var i, a = t.trim().replace(/^"(.*)"$/, (function(e, t) { return t })).replace(/^'(.*)'$/, (function(e, t) { return t })); return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (i = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : r + a.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")") })) } }]) }, "object" == o(t) && "object" == o(e) ? e.exports = a() : (r = [], void 0 === (i = "function" == typeof(n = a) ? n.apply(t, r) : n) || (e.exports = i)) }).call(this, n(135)(e)) }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M36.5,18.73a1.19,1.19,0,0,0,1-1.14V16.33a1.2,1.2,0,0,0-1-1.13l-.61-.08a1.75,1.75,0,0,1-1.3-.86l-.21-.36-.2-.36A1.72,1.72,0,0,1,34,12l.23-.58a1.18,1.18,0,0,0-.5-1.42l-1.1-.62a1.18,1.18,0,0,0-1.47.3l-.39.51a1.82,1.82,0,0,1-1.41.72c-.44,0-1.88-.27-2.22-.7l-.39-.49a1.18,1.18,0,0,0-1.48-.28l-1.09.64a1.19,1.19,0,0,0-.47,1.43l.25.59a1.87,1.87,0,0,1-.08,1.58c-.26.37-1.17,1.5-1.71,1.58l-.63.09a1.19,1.19,0,0,0-1,1.14l0,1.27a1.17,1.17,0,0,0,1,1.12l.61.08a1.74,1.74,0,0,1,1.3.87l.21.36.2.35A1.69,1.69,0,0,1,24,22.08l-.23.59a1.19,1.19,0,0,0,.5,1.42l1.1.62a1.19,1.19,0,0,0,1.48-.31l.38-.5a1.83,1.83,0,0,1,1.41-.72c.44,0,1.88.25,2.22.69l.39.49a1.18,1.18,0,0,0,1.48.28L33.86,24a1.19,1.19,0,0,0,.47-1.43L34.09,22a1.84,1.84,0,0,1,.07-1.58c.26-.37,1.17-1.5,1.72-1.58ZM31,18.94a2.76,2.76,0,0,1-4.65-1.2A2.71,2.71,0,0,1,27,15.13a2.76,2.76,0,0,1,4.64,1.2A2.7,2.7,0,0,1,31,18.94Z"/>\n  <path fill="#f85959" transform="scale(0.8 0.8)" d="M32,0H3.59A3.59,3.59,0,0,0,0,3.59v17A3.59,3.59,0,0,0,3.59,24.2H19.72a12.59,12.59,0,0,1-.81-1.2A11.73,11.73,0,0,1,35.54,7.28V3.59A3.59,3.59,0,0,0,32,0ZM13,14.18H4.29a1.52,1.52,0,0,1,0-3H13a1.52,1.52,0,0,1,0,3ZM16.45,8H4.29a1.51,1.51,0,0,1,0-3H16.45a1.51,1.51,0,1,1,0,3Z"/>\n</svg>\n' }, function(e, t, n) { var r = n(138); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .danmu-switch{-webkit-order:6;-moz-box-ordinal-group:7;order:6;z-index:26}.xgplayer-skin-default .xgplayer-danmu{display:none;position:absolute;top:0;left:0;right:0;height:100%;overflow:hidden;z-index:9;outline:none}.xgplayer-skin-default .xgplayer-danmu>*{position:absolute;white-space:nowrap;z-index:9}.xgplayer-skin-default .xgplayer-danmu.xgplayer-has-danmu{display:block}.xgplayer-skin-default .xgplayer-panel{outline:none;-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:40px;height:40px;display:inline-block;position:relative;font-family:PingFangSC-Regular;font-size:13px;color:hsla(0,0%,100%,.8);z-index:36}.xgplayer-skin-default .xgplayer-panel .xgplayer-panel-icon{cursor:pointer;position:absolute;margin-left:5px;top:10px}.xgplayer-skin-default .xgplayer-panel-active{display:block!important;bottom:30px}.xgplayer-skin-default .xgplayer-panel-slider{z-index:36;display:none;position:absolute;width:230px;height:230px;background:rgba(0,0,0,.54);border-radius:1px;padding:10px 20px;outline:none;left:-115px;bottom:40px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode{padding-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-radio li{display:inline;list-style:none;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode ul{display:-webkit-flex;display:-moz-box;display:flex;-webkit-justify-content:space-around;justify-content:space-around}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode li{margin:0 12px;font-size:11px;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-hidemode-font{margin-bottom:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency{display:block;margin-top:10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-transparency .xgplayer-transparency-bar::-moz-range-progress{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;height:4px;border-radius:4px;background:linear-gradient(90deg,#f85959,#f85959 100%,#aaa)}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea{display:block;margin-top:8px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-threequarters,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-twoquarters{margin-left:-6px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea-full{margin-right:3px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-full-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-onequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-threequarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-twoquarters-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-showarea .xgplayer-showarea-zero-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmuspeed .xgplayer-danmuspeed-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont{display:block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-name{display:inline-block;position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control{display:inline-block}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-up{width:150px;margin-left:10px;display:-moz-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between;color:#aaa}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down{position:relative;top:-10px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont-control-down-dots{display:-webkit-flex;display:-moz-box;display:flex;width:150px;margin-left:10px;-webkit-justify-content:space-between;-moz-box-pack:justify;justify-content:space-between}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;outline:none;width:150px;height:4px;background:#aaa;border-radius:4px;border-style:none;margin-left:10px;margin-top:-2px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-line::-moz-focus-outer{border:0!important}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-webkit-slider-runnable-track{outline:none;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-moz-range-track{outline:none;background-color:#aaa;border-color:transparent;cursor:pointer;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-color::-ms-track{outline:none;background-color:#aaa;color:transparent;border-color:transparent;width:150px;height:4px;border-radius:4px}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-webkit-slider-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;margin-top:-4px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-moz-range-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:0;width:0;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-bar::-ms-thumb{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:6px solid #f85959;height:6px;width:6px;border-radius:6px;cursor:pointer}.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-large-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-middle-dot,.xgplayer-skin-default .xgplayer-panel-slider .xgplayer-danmufont .xgplayer-danmufont-small-dot{width:3px;height:3px;border:3px solid #aaa;border-radius:50%;background-color:#aaa;position:relative;top:16px;z-index:-1}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(140);
    t.default = { name: "s_pip", method: function() { var e = this; if (e.config.pip && "function" == typeof e.video.requestPictureInPicture) { var t = e.lang.PIP,
                    n = (0, r.createDom)("xg-pip", '<p class="name"><span>' + t + "</span></p>", { tabindex: 9 }, "xgplayer-pip");
                e.once("ready", (function() { e.controls.appendChild(n) })), ["click", "touchend"].forEach((function(t) { n.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("pipBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { var r = n(141); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-pip{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-pip .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-pip .name span{width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.lang-is-jp .xgplayer-pip .name span{width:70px;height:20px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(143);
    t.default = { name: "s_miniplayer", method: function() { var e = this; if (e.config.miniplayer) { var t = e.lang.MINIPLAYER,
                    n = (0, r.createDom)("xg-miniplayer", '<p class="name"><span>' + t + "</span></p>", { tabindex: 9 }, "xgplayer-miniplayer");
                e.once("ready", (function() { e.controls.appendChild(n) })), ["click", "touchend"].forEach((function(t) { n.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("miniplayerBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { var r = n(144); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-miniplayer{-webkit-order:9;-moz-box-ordinal-group:10;order:9;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-miniplayer .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-miniplayer .name span{width:80px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-miniplayer-lay{position:absolute;top:26px;left:0;width:100%;height:100%;z-index:130;cursor:pointer;background-color:transparent;display:none}.xgplayer-skin-default .xgplayer-miniplayer-lay div{width:100%;height:100%}.xgplayer-skin-default .xgplayer-miniplayer-drag{cursor:move;position:absolute;top:0;left:0;width:100%;height:26px;line-height:26px;background-image:linear-gradient(rgba(0,0,0,.3),transparent);z-index:130;display:none}.xgplayer-skin-default .xgplayer-miniplayer-drag .drag-handle{width:100%}.xgplayer-skin-default.xgplayer-miniplayer-active{position:fixed;right:0;bottom:200px;width:320px;height:180px;z-index:110}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-controls,.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-danmu{display:none}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-miniplayer-lay{display:block}.xgplayer-skin-default.xgplayer-miniplayer-active .xgplayer-miniplayer-drag{display:-webkit-flex;display:-moz-box;display:flex}.xgplayer-skin-default.xgplayer-inactive .xgplayer-miniplayer-drag{display:none}.lang-is-jp .xgplayer-miniplayer .name span{width:70px;height:20px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(146),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(147);
    t.default = { name: "s_playNext", method: function() { var e = this,
                t = e.config.playNext; if (t && t.urlList) { var n = (0, i.createDom)("xg-playnext", '<xg-icon class="xgplayer-icon">' + o.default+"</xg-icon>", {}, "xgplayer-playnext"),
                    r = e.lang.PLAYNEXT_TIPS,
                    a = (0, i.createDom)("xg-tips", '<span class="xgplayer-tip-playnext">' + r + "</span>", {}, "xgplayer-tips");
                n.appendChild(a), e.once("ready", (function() { e.controls.appendChild(n) })), ["click", "touchend"].forEach((function(t) { n.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), (0, i.addClass)(e.root, "xgplayer-is-enter"), e.userGestureTrigEvent("playNextBtnClick") })) })); var l = function() {
                    (0, i.addClass)(e.root, "xgplayer-playnext-inactive") };
                e.on("urlListEnd", l), e.once("destroy", (function t() { e.off("urlListEnd", l), e.off("destroy", t) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">\n  <path transform="scale(0.038 0.028)" d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z"></path>\n</svg>\n' }, function(e, t, n) { var r = n(148); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-playnext{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;cursor:pointer;top:-2px}.xgplayer-skin-default .xgplayer-playnext .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-playnext .xgplayer-tips .xgplayer-tip-playnext{display:block}.xgplayer-skin-default .xgplayer-playnext:hover{opacity:.85}.xgplayer-skin-default .xgplayer-playnext:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-playnext .xgplayer-tips{margin-left:-25px}.xgplayer-lang-is-jp .xgplayer-playnext .xgplayer-tips{margin-left:-38px}.xgplayer-skin-default.xgplayer-playnext-inactive .xgplayer-playnext{display:none}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(150),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(151);
    t.default = { name: "s_rotate", method: function() { var e = this; if (e.config.rotate) { var t = (0, i.createDom)("xg-rotate", '<xg-icon class="xgplayer-icon">' + o.default+"</xg-icon>", {}, "xgplayer-rotate"),
                    n = e.lang.ROTATE_TIPS,
                    r = (0, i.createDom)("xg-tips", '<span class="xgplayer-tip-rotate">' + n + "</span>", {}, "xgplayer-tips");
                t.appendChild(r), e.once("ready", (function() { e.controls.appendChild(t) })), ["click", "touchend"].forEach((function(n) { t.addEventListener(n, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("rotateBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40" fill="none">\n  <g clip-path="url(#clip0)">\n    <path transform="scale(1.5 1.5)" d="M11.6665 9.16663H4.1665C2.78579 9.16663 1.6665 10.2859 1.6665 11.6666V15.8333C1.6665 17.214 2.78579 18.3333 4.1665 18.3333H11.6665C13.0472 18.3333 14.1665 17.214 14.1665 15.8333V11.6666C14.1665 10.2859 13.0472 9.16663 11.6665 9.16663Z" fill="white"/>\n    <path transform="scale(1.5 1.5)" fill-rule="evenodd" clip-rule="evenodd" d="M3.88148 4.06298C3.75371 4.21005 3.67667 4.40231 3.67749 4.61242C3.67847 4.87253 3.79852 5.10435 3.98581 5.25646L6.99111 8.05895C7.32771 8.37283 7.85502 8.35443 8.16891 8.01782C8.48279 7.68122 8.46437 7.15391 8.12778 6.84003L6.62061 5.43457L9.8198 5.4224C9.82848 5.42239 9.8372 5.42221 9.84591 5.4219C10.9714 5.38233 12.0885 5.6285 13.0931 6.13744C14.0976 6.64635 14.957 7.40148 15.5908 8.33234C16.2246 9.2632 16.6122 10.3394 16.7177 11.4606C16.823 12.5819 16.6427 13.7115 16.1934 14.7442C16.0098 15.1661 16.203 15.6571 16.6251 15.8408C17.0471 16.0243 17.5381 15.8311 17.7216 15.4091C18.2833 14.1183 18.5087 12.7063 18.3771 11.3047C18.2453 9.90318 17.7607 8.55792 16.9684 7.39433C16.1761 6.23073 15.1021 5.28683 13.8463 4.65065C12.5946 4.01651 11.203 3.70872 9.80072 3.75583L6.43415 3.76862L7.96326 2.12885C8.27715 1.79225 8.25872 1.26494 7.92213 0.951061C7.58553 0.63718 7.05822 0.655585 6.74433 0.99219L3.90268 4.0395C3.89545 4.04724 3.88841 4.05509 3.88154 4.06303L3.88148 4.06298Z" fill="white"/>\n  </g>\n  <defs>\n    <clipPath id="clip0">\n      <rect width="40" height="40" fill="white"/>\n    </clipPath>\n  </defs>\n</svg>\n' }, function(e, t, n) { var r = n(152); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-rotate{position:relative;-webkit-order:10;-moz-box-ordinal-group:11;order:10;display:block;cursor:pointer}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-rotate .xgplayer-tips .xgplayer-tip-rotate{display:block}.xgplayer-skin-default .xgplayer-rotate:hover{opacity:.85}.xgplayer-skin-default .xgplayer-rotate:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-rotate .xgplayer-tips{margin-left:-26px}.xgplayer-lang-is-jp .xgplayer-rotate .xgplayer-tips{margin-left:-38px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(154),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(155);
    t.default = { name: "s_reload", method: function() { var e = this; if (e.config.reload) { var t = (0, i.createDom)("xg-reload", '<xg-icon class="xgplayer-icon">' + o.default+"</xg-icon>", {}, "xgplayer-reload"),
                    n = e.lang.RELOAD_TIPS,
                    r = (0, i.createDom)("xg-tips", '<span class="xgplayer-tip-reload">' + n + "</span>", {}, "xgplayer-tips");
                t.appendChild(r), e.once("ready", (function() { e.controls.appendChild(t) })), ["click", "touchend"].forEach((function(n) { t.addEventListener(n, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("reloadBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">\n    <path fill="#FFF" fill-opacity="1" fill-rule="nonzero" d="M18.17 19.988a7.182 7.182 0 0 1-4.256 1.318 7.806 7.806 0 0 1-.595-.03c-.08-.008-.16-.021-.242-.031a8.004 8.004 0 0 1-.458-.071c-.094-.018-.185-.042-.276-.063a7.743 7.743 0 0 1-.439-.113c-.068-.022-.136-.047-.205-.07a7.03 7.03 0 0 1-.492-.181c-.037-.015-.072-.032-.108-.049a7.295 7.295 0 0 1-.554-.269l-.025-.012a7.347 7.347 0 0 1-2.111-1.753c-.03-.036-.057-.074-.086-.11a7.305 7.305 0 0 1-1.594-4.557h1.686a.123.123 0 0 0 .108-.064.119.119 0 0 0-.006-.125L5.684 9.532a.123.123 0 0 0-.103-.056.123.123 0 0 0-.102.056l-2.834 4.276a.121.121 0 0 0-.005.125c.022.04.064.064.107.064h1.687c0 2.025.627 3.902 1.693 5.454.013.021.022.044.037.066.11.159.233.305.352.455.043.057.085.116.13.171.175.213.36.413.55.61.02.018.036.038.054.055a9.447 9.447 0 0 0 2.91 1.996c.058.026.115.054.175.079.202.084.41.158.619.228.098.034.196.069.296.1.183.054.37.1.558.145.125.029.249.06.376.085.052.01.102.027.155.035.177.032.355.05.533.071.064.007.128.018.19.026.32.03.639.052.956.052a9.46 9.46 0 0 0 5.47-1.746 1.16 1.16 0 0 0 .282-1.608 1.143 1.143 0 0 0-1.6-.283zm5.397-5.991a9.604 9.604 0 0 0-1.685-5.441c-.016-.027-.026-.054-.043-.078-.132-.19-.276-.366-.419-.543-.017-.022-.032-.044-.05-.065a9.467 9.467 0 0 0-3.571-2.7l-.114-.051a11.2 11.2 0 0 0-.673-.248c-.082-.027-.163-.057-.247-.082a9.188 9.188 0 0 0-.6-.156c-.113-.026-.224-.055-.337-.077-.057-.011-.109-.028-.164-.037-.151-.027-.304-.039-.455-.058-.104-.013-.208-.03-.313-.04a10.05 10.05 0 0 0-.759-.039c-.045 0-.09-.007-.136-.007l-.025.003a9.45 9.45 0 0 0-5.46 1.737 1.16 1.16 0 0 0-.284 1.608c.363.523 1.08.65 1.6.284a7.182 7.182 0 0 1 4.222-1.32c.217.002.429.013.639.033.065.007.129.017.193.025.173.021.344.046.513.08.075.014.149.033.221.05.166.037.331.077.494.127l.152.051c.185.061.366.127.545.201l.054.025a7.308 7.308 0 0 1 2.741 2.067l.013.018a7.302 7.302 0 0 1 1.652 4.633h-1.686a.123.123 0 0 0-.108.064.12.12 0 0 0 .006.124l2.834 4.277c.022.033.06.054.103.054.042 0 .08-.021.102-.054l2.833-4.277a.12.12 0 0 0 .005-.124.123.123 0 0 0-.108-.064h-1.685z"/>\n</svg>\n' }, function(e, t, n) { var r = n(156); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-reload{position:relative;-webkit-order:1;-moz-box-ordinal-group:2;order:1;display:block;width:40px;height:40px;cursor:pointer}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon{margin-top:7px;width:26px}.xgplayer-skin-default .xgplayer-reload .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips{margin-left:-22px}.xgplayer-skin-default .xgplayer-reload .xgplayer-tips .xgplayer-tip-reload{display:block}.xgplayer-skin-default .xgplayer-reload:hover{opacity:.85}.xgplayer-skin-default .xgplayer-reload:hover .xgplayer-tips{display:block}.xgplayer-lang-is-en .xgplayer-reload .xgplayer-tips{margin-left:-26px}.xgplayer-lang-is-jp .xgplayer-reload .xgplayer-tips{margin-left:-38px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(158);
    t.default = { name: "s_screenShot", method: function() { var e = this; if (e.config.screenShot && !e.config.screenShot.hideButton) { var t = e.lang.SCREENSHOT,
                    n = (0, r.createDom)("xg-screenshot", '<p class="name"><span>' + (e.config.screenShot.iconText || t) + "</span></p>", { tabindex: 11 }, "xgplayer-screenshot");
                e.once("ready", (function() { e.controls.appendChild(n) })), ["click", "touchend"].forEach((function(t) { n.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("screenShotBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { var r = n(159); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-screenshot{-webkit-order:11;-moz-box-ordinal-group:12;order:11;position:relative;outline:none;display:block;cursor:pointer;height:20px;top:10px}.xgplayer-skin-default .xgplayer-screenshot .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;line-height:20px;height:20px;color:hsla(0,0%,100%,.8)}.xgplayer-skin-default .xgplayer-screenshot .name span{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:0 10px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-lang-is-en .xgplayer-screenshot .name span,.xgplayer-lang-is-jp .xgplayer-screenshot .name span{width:75px;height:20px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(9),
        a = (r = i) && r.__esModule ? r : { default: r };
    n(78);
    t.default = { name: "s_nativeTextTrack", method: function() { if (this.config.nativeTextTrack) { var e = this,
                    t = e.root,
                    n = a.default.util,
                    r = n.createDom("xg-texttrack", "", { tabindex: 7 }, "xgplayer-texttrack"),
                    i = e.config.nativeTextTrack;
                i && Array.isArray(i) && i.length > 0 && (n.addClass(e.root, "xgplayer-is-texttrack"), e.once("canplay", (function() { var a = this,
                        o = ["<ul>"];
                    o.push("<li class='" + (this.textTrackShowDefault ? "" : "selected") + "'}'>" + e.lang.OFF + "</li>"), i.forEach((function(e) { o.push("<li class='" + (e.default && a.textTrackShowDefault ? "selected" : "") + "'>" + e.label + "</li>") })); var l = e.lang.TEXTTRACK;
                    o.push('</ul><p class="name">' + l + "</p>"); var s = t.querySelector(".xgplayer-texttrack"); if (s) { s.innerHTML = o.join(""); var u = s.querySelector(".name");
                        e.config.textTrackActive && "hover" !== e.config.textTrackActive || u.addEventListener("mouseenter", (function(e) { e.preventDefault(), e.stopPropagation(), n.addClass(t, "xgplayer-texttrack-active"), s.focus() })) } else { r.innerHTML = o.join(""); var c = r.querySelector(".name");
                        e.config.textTrackActive && "hover" !== e.config.textTrackActive || c.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), n.addClass(e.root, "xgplayer-texttrack-active"), r.focus() })), e.controls.appendChild(r) } }))), ["touchend", "click"].forEach((function(t) { r.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(); var a = t.target || t.srcElement; if (a && "li" === a.tagName.toLocaleLowerCase()) { Array.prototype.forEach.call(a.parentNode.childNodes, (function(e) { n.removeClass(e, "selected") })), n.addClass(a, "selected"); var o = e.root.getElementsByTagName("Track");
                            a.innerHTML === e.lang.OFF ? (o[0].track.mode = "hidden", o[0].src = "", n.removeClass(e.root, "xgplayer-texttrack-active")) : (o[0].style.display = "block", n.addClass(e.root, "xgplayer-texttrack-active"), o[0].track.mode = "showing", i.some((function(e) { if (e.label === a.innerHTML) return o[0].src = e.src, e.kind && (o[0].kind = e.kind), o[0].label = e.label, e.srclang && (o[0].srclang = e.srclang), !0 })), e.emit("textTrackChange", a.innerHTML)) } else "click" !== e.config.textTrackActive || !a || "p" !== a.tagName.toLocaleLowerCase() && "em" !== a.tagName.toLocaleLowerCase() || (n.addClass(e.root, "xgplayer-texttrack-active"), r.focus()) }), !1) })), e.on("play", (function() { var r = t.querySelector(".xgplayer-texttrack ul"),
                        a = t.getElementsByTagName("Track");
                    e.hls && r && a && (a[0].src = "", Array.prototype.forEach.call(r.childNodes, (function(t) { n.hasClass(t, "selected") && (t.innerHTML === e.lang.OFF ? (a[0].track.mode = "hidden", a[0].src = "") : (a[0].track.mode = "hidden", i.some((function(e) { if (e.label !== t.innerHTML) return a[0].src = e.src, e.kind && (a[0].kind = e.kind), a[0].label = e.label, e.srclang && (a[0].srclang = e.srclang), !0 })), i.some((function(e) { if (e.label === t.innerHTML) return setTimeout((function() { a[0].src = e.src, e.kind && (a[0].kind = e.kind), a[0].label = e.label, e.srclang && (a[0].srclang = e.srclang), a[0].track.mode = "showing" })), !0 })))) })), n.removeClass(e.root, "xgplayer-texttrack-active")) })), r.addEventListener("mouseleave", (function(t) { t.preventDefault(), t.stopPropagation(), n.removeClass(e.root, "xgplayer-texttrack-active") })) } } }, e.exports = t.default }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-texttrack{-webkit-order:7;-moz-box-ordinal-group:8;order:7;width:60px;height:150px;z-index:18;position:relative;outline:none;display:none;cursor:default;margin-top:-119px}.xgplayer-skin-default .xgplayer-texttrack ul{display:none;list-style:none;min-width:78px;background:rgba(0,0,0,.54);border-radius:1px;position:absolute;bottom:30px;text-align:center;white-space:nowrap;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:26;cursor:pointer}.xgplayer-skin-default .xgplayer-texttrack ul li{opacity:.7;font-family:PingFangSC-Regular;font-size:11px;color:hsla(0,0%,100%,.8);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto;padding:6px 13px}.xgplayer-skin-default .xgplayer-texttrack ul li.selected,.xgplayer-skin-default .xgplayer-texttrack ul li:hover{color:#fff;opacity:1}.xgplayer-skin-default .xgplayer-texttrack .name{text-align:center;font-family:PingFangSC-Regular;font-size:13px;cursor:pointer;color:hsla(0,0%,100%,.8);position:absolute;bottom:0;width:60px;height:20px;line-height:20px;background:rgba(0,0,0,.38);border-radius:10px;display:inline-block;vertical-align:middle}.xgplayer-skin-default .xgplayer-texttrack.xgplayer-texttrack-hide{display:none}xg-text-track{transition:bottom .3s ease}.xgplayer-skin-default.xgplayer-is-texttrack .xgplayer-texttrack,.xgplayer-skin-default.xgplayer-texttrack-active .xgplayer-texttrack ul{display:block}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);

    function i(e, t, n, r) { if (0 !== t.length) { var i = [];
            i.push('<li data-type="off" class="' + (r ? "" : "selected") + '">' + n + "</li>"), t.forEach((function(e) { i.push("<li data-id=" + e.id + " data-language=" + e.language + ' class="' + (e.isDefault && r ? "selected" : "") + '">' + e.label + "</li>") })), e.innerHTML = i.join("") } else e.innerHTML = "" }
    n(78);
    t.default = { name: "s_textTrack", method: function() { var e = this; if (this.config.textTrack) { var t = this.config.textTrack,
                    n = e.lang.TEXTTRACK,
                    a = (0, r.createDom)("xg-texttrack", '<ul></ul><p class="name">' + n + "</p>", { tabindex: 7 }, "xgplayer-texttrack");
                t && Array.isArray(t) && (t.length > 0 && (0, r.addClass)(e.root, "xgplayer-is-texttrack"), e.once("canplay", (function() { if (!e.root.querySelector(".xgplayer-texttrack")) { e.controls.appendChild(a); var n = a.querySelector(".name");
                        e.config.textTrackActive && "hover" !== e.config.textTrackActive ? n.addEventListener("click", (function(t) { t.preventDefault(), t.stopPropagation(), (0, r.hasClass)(e.root, "xgplayer-texttrack-active") ? (0, r.removeClass)(e.root, "xgplayer-texttrack-active") : (0, r.addClass)(e.root, "xgplayer-texttrack-active") })) : (n.addEventListener("mouseenter", (function(t) { t.preventDefault(), t.stopPropagation(), (0, r.addClass)(e.root, "xgplayer-texttrack-active"), a.focus() })), a.addEventListener("mouseleave", (function(t) { t.preventDefault(), t.stopPropagation(), (0, r.removeClass)(e.root, "xgplayer-texttrack-active") }))) }["touchend", "click"].forEach((function(t) { a.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(); var n = t.target || t.srcElement; if (n && "li" === n.tagName.toLocaleLowerCase()) { var i = n.getAttribute("data-id"),
                                    a = n.getAttribute("data-type"),
                                    o = n.getAttribute("data-language");
                                Array.prototype.forEach.call(n.parentNode.childNodes, (function(e) {
                                    (0, r.removeClass)(e, "selected") })), (0, r.addClass)(n, "selected"), "off" === a ? (e.switchOffSubtile(), (0, r.removeClass)(e.root, "xgplayer-texttrack-active")) : (e.switchSubTitle({ id: i, language: o }), (0, r.addClass)(e.root, "xgplayer-texttrack-active")) } })) })), i(a.getElementsByTagName("ul")[0], t, e.lang.OFF, e.textTrackShowDefault), 0 === t.length ? (0, r.addClass)(a, "xgplayer-texttrack-hide") : (0, r.removeClass)(a, "xgplayer-texttrack-hide") })), e.on("subtitle_change", (function(n) { if (n.isListUpdate) { var o = a.getElementsByTagName("ul")[0];
                        t = n.list, i(o, n.list, e.lang.OFF, e.textTrackShowDefault), n.list.length > 0 ? (0, r.addClass)(e.root, "xgplayer-is-texttrack") : (0, r.removeClass)(e.root, "xgplayer-is-texttrack"), 0 === n.list.length ? (0, r.addClass)(a, "xgplayer-texttrack-hide") : (0, r.removeClass)(a, "xgplayer-texttrack-hide") } }))) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(164);
    t.default = { name: "s_error", method: function() { var e = this,
                t = e.root,
                n = (0, r.createDom)("xg-error", '<span class="xgplayer-error-text">请<span class="xgplayer-error-refresh">刷新</span>试试</span>', {}, "xgplayer-error");
            e.once("ready", (function() { t.appendChild(n) })); var i = n.querySelector(".xgplayer-error-text");
            e.config.lang && "zh-cn" === e.config.lang ? i.innerHTML = e.config.errorTips || '请<span class="xgplayer-error-refresh">刷新</span>试试' : i.innerHTML = e.config.errorTips || 'please try to <span class="xgplayer-error-refresh">refresh</span>'; var a = null;

            function o() {
                (0, r.addClass)(e.root, "xgplayer-is-error"), (a = n.querySelector(".xgplayer-error-refresh")) && ["touchend", "click"].forEach((function(t) { a.addEventListener(t, (function(t) { t.preventDefault(), t.stopPropagation(), e.autoplay = !0; var n = e.currentTime;
                        e.once("playing", (function() { e.currentTime = n, (0, r.removeClass)(e.root, "xgplayer-is-error") })), e.src = e.config.url })) })) }
            e.on("error", o), e.once("destroy", (function t() { e.off("error", o), e.off("destroy", t) })) } }, e.exports = t.default }, function(e, t, n) { var r = n(165); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-error{background:#000;display:none;position:absolute;left:0;top:0;width:100%;height:100%;z-index:125;font-family:PingFangSC-Regular;font-size:14px;color:#fff;text-align:center;line-height:100%;-webkit-justify-content:center;-moz-box-pack:center;justify-content:center;-webkit-align-items:center;-moz-box-align:center;align-items:center}.xgplayer-skin-default .xgplayer-error .xgplayer-error-refresh{color:#fa1f41;padding:0 3px;cursor:pointer}.xgplayer-skin-default .xgplayer-error .xgplayer-error-text{line-height:18px;margin:auto 6px}.xgplayer-skin-default.xgplayer-is-error .xgplayer-error{display:-webkit-flex;display:-moz-box;display:flex}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = n(0);
    n(167);
    t.default = { name: "s_memoryPlay", method: function() { var e = this,
                t = e.config.lastPlayTime || 0,
                n = e.config.lastPlayTimeHideDelay || 0,
                i = null; if (!(t <= 0)) {
                (i = (0, r.createDom)("xg-memoryplay", '<div class="xgplayer-memoryplay-spot"><div class="xgplayer-progress-tip">您上次观看到 <span class="xgplayer-lasttime">' + (0, r.format)(t) + '</span> ，为您自动续播 <span class="btn-close"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></div></div>', {}, "xgplayer-memoryplay")).addEventListener("mouseover", (function(e) { e.stopPropagation() })); var a = function() { i && i.parentNode && i.parentNode.removeChild(i), i = null };
                i.querySelector(".xgplayer-progress-tip .btn-close").addEventListener("click", a);
                e.once("play", (function() { n > 0 && e.root.appendChild(i), e.emit("memoryPlayStart", t), n > 0 && setTimeout((function() { a() }), 1e3 * n) })), e.once("ended", a) } } }, e.exports = t.default }, function(e, t, n) { var r = n(168); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-memoryplay-spot{position:absolute;height:32px;left:10px;bottom:46px;background:rgba(0,0,0,.5);border-radius:32px;line-height:32px;color:#ddd;z-index:15;padding:0 32px 0 16px}.xgplayer-skin-default .xgplayer-memoryplay-spot .xgplayer-lasttime{color:red;font-weight:700}.xgplayer-skin-default .xgplayer-memoryplay-spot .btn-close{position:absolute;width:16px;height:16px;right:10px;top:2px;cursor:pointer;color:#fff;font-size:16px}", ""]) }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r, i = n(0),
        a = n(170),
        o = (r = a) && r.__esModule ? r : { default: r };
    n(171);
    t.default = { name: "s_airplay", method: function() { var e = this; if (e.config.airplay && window.WebKitPlaybackTargetAvailabilityEvent) { var t = (0, i.createDom)("xg-airplay", '<xg-icon class="xgplayer-icon">\n    <div class="xgplayer-icon-airplay">' + o.default+"</div>\n  </xg-icon>", {}, "xgplayer-airplay"),
                    n = (0, i.createDom)("xg-tips", '<span class="xgplayer-tip-airplay">' + e.lang.AIRPLAY_TIPS + "</span>", {}, "xgplayer-tips");
                t.appendChild(n), e.once("ready", (function() { e.controls.appendChild(t), e.video.addEventListener("webkitplaybacktargetavailabilitychanged", (function(e) { switch (e.availability) {
                            case "available":
                                t.hidden = !1, t.disabled = !1; break;
                            case "not-available":
                                t.hidden = !0, t.disabled = !0 } })) })), ["click", "touchend"].forEach((function(n) { t.addEventListener(n, (function(t) { t.preventDefault(), t.stopPropagation(), e.userGestureTrigEvent("airplayBtnClick") })) })) } } }, e.exports = t.default }, function(e, t, n) { "use strict";
    n.r(t), t.default = '<svg t="1600422191774" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3100" width="28" height="28"><path d="M256 938.666667h512L512 597.333333 256 938.666667z m170.666667-85.333334l85.333333-113.781333L597.333333 853.333333H426.666667zM853.333333 85.333333H170.666667C99.946667 85.333333 42.666667 142.613333 42.666667 213.333333v426.666667c0 70.72 57.28 128 128 128h106.666666l64-85.333333H170.666667c-23.573333 0-42.666667-19.093333-42.666667-42.666667V213.333333c0-23.573333 19.093333-42.666667 42.666667-42.666666h682.666666c23.573333 0 42.666667 19.093333 42.666667 42.666666v426.666667c0 23.573333-19.093333 42.666667-42.666667 42.666667H682.666667l64 85.333333h106.666666c70.72 0 128-57.28 128-128V213.333333c0-70.72-57.28-128-128-128z" p-id="3101" fill="#ffffff"></path></svg>' }, function(e, t, n) { var r = n(172); "string" == typeof r && (r = [
        [e.i, r, ""]
    ]); var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    n(2)(r, i);
    r.locals && (e.exports = r.locals) }, function(e, t, n) {
    (e.exports = n(1)(!1)).push([e.i, ".xgplayer-skin-default .xgplayer-airplay{position:relative;-webkit-order:11;-moz-box-ordinal-group:12;order:11;display:block;cursor:pointer;margin-left:5px;margin-right:3px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon{margin-top:6px;margin-left:6px}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon div{position:absolute}.xgplayer-skin-default .xgplayer-airplay .xgplayer-icon .xgplayer-icon-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips{position:absolute;right:0;left:auto}.xgplayer-skin-default .xgplayer-airplay .xgplayer-tips .xgplayer-tip-airplay{display:block}.xgplayer-skin-default .xgplayer-airplay:hover{opacity:.85}.xgplayer-skin-default .xgplayer-airplay:hover .xgplayer-tips{display:block}", ""]) }]);
//# sourceMappingURL=index.js.map