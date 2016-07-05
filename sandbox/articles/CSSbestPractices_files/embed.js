var DISQUS = function (a) {
    var h = {AssertionError: function (a) {
        this.message = a
    }};
    h.AssertionError.prototype.toString = function () {
        return"Assertion Error: " + (this.message || "[no message]")
    };
    h.assert = function (a, e) {
        if (!a)throw new h.AssertionError(e);
    };
    var e = [];
    h.define = function (k, j) {
        typeof k === "function" && (j = k, k = "");
        for (var d = k.split("."), c = d.shift(), f = h, r = (j || function () {
            return{}
        }).call({overwrites: function (c) {
            c.__overwrites__ = !0;
            return c
        }}, a); c;)f = f[c] ? f[c] : f[c] = {}, c = d.shift();
        for (var q in r)r.hasOwnProperty(q) &&
        (r.__overwrites__ || f[q] !== null && h.assert(!f.hasOwnProperty(q), "Unsafe attempt to redefine existing module with " + q), f[q] = r[q], e.push(function (c, d) {
            return function () {
                delete c[d]
            }
        }(f, q)));
        return f
    };
    h.use = function (a) {
        return h.define(a)
    };
    h.cleanup = function () {
        for (var a = 0; a < e.length; a++)e[a]()
    };
    return h
}(this);
DISQUS.define(function (a, h) {
    var e = a.document, k = e.getElementsByTagName("head")[0] || e.body, j = {running: !1, timer: null, queue: []};
    DISQUS.defer = function (d, c) {
        function f() {
            var c = j.queue;
            if (c.length === 0)j.running = !1, clearInterval(j.timer);
            for (var d = 0, f; f = c[d]; d++)f[0]() && (c.splice(d--, 1), f[1]())
        }

        j.queue.push([d, c]);
        f();
        if (!j.running)j.running = !0, j.timer = setInterval(f, 100)
    };
    DISQUS.each = function (d, c) {
        var f = d.length, a = Array.prototype.forEach;
        if (isNaN(f))for (var e in d)d.hasOwnProperty(e) && c(d[e], e, d); else if (a)a.call(d,
            c); else for (a = 0; a < f; a++)c(d[a], a, d)
    };
    DISQUS.extend = function (d) {
        DISQUS.each(Array.prototype.slice.call(arguments, 1), function (c) {
            for (var f in c)d[f] = c[f]
        });
        return d
    };
    DISQUS.serializeArgs = function (d) {
        var c = [];
        DISQUS.each(d, function (d, a) {
            d !== h && c.push(a + (d !== null ? "=" + encodeURIComponent(d) : ""))
        });
        return c.join("&")
    };
    DISQUS.isString = function (d) {
        return Object.prototype.toString.call(d) === "[object String]"
    };
    DISQUS.serialize = function (d, c, f) {
        c && (d += ~d.indexOf("?") ? d.charAt(d.length - 1) == "&" ? "" : "&" : "?", d += DISQUS.serializeArgs(c));
        if (f)return c = {}, c[(new Date).getTime()] = null, DISQUS.serialize(d, c);
        c = d.length;
        return d.charAt(c - 1) == "&" ? d.slice(0, c - 1) : d
    };
    DISQUS.require = function (d, c, f, a, h) {
        function j(b) {
            if (b.type == "load" || /^(complete|loaded)$/.test(b.target.readyState))a && a(), n && clearTimeout(n), DISQUS.bean.remove(b.target, s, j)
        }

        var m = e.createElement("script"), s = m.addEventListener ? "load" : "readystatechange", n = null;
        m.src = DISQUS.serialize(d, c, f);
        m.async = !0;
        m.charset = "UTF-8";
        (a || h) && DISQUS.bean.add(m, s, j);
        h && (n = setTimeout(function () {
                h()
            },
            2E4));
        k.appendChild(m);
        return DISQUS
    };
    DISQUS.requireStylesheet = function (d, c, f) {
        var a = e.createElement("link");
        a.rel = "stylesheet";
        a.type = "text/css";
        a.href = DISQUS.serialize(d, c, f);
        k.appendChild(a);
        return DISQUS
    };
    DISQUS.requireSet = function (d, c, f) {
        var a = d.length;
        DISQUS.each(d, function (d) {
            DISQUS.require(d, {}, c, function () {
                --a === 0 && f()
            })
        })
    };
    DISQUS.injectCss = function (d) {
        var c = e.createElement("style");
        c.setAttribute("type", "text/css");
        d = d.replace(/\}/g, "}\n");
        a.location.href.match(/^https/) && (d = d.replace(/http:\/\//g,
            "https://"));
        c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(e.createTextNode(d));
        k.appendChild(c)
    }
});
DISQUS.define(function (a, h) {
    var e = a.document, k = 0, j = {"0.0": {}, "1.0": {}};
    DISQUS.config = {};
    DISQUS.blocks = {theme: {}, defaults: {}};
    DISQUS.status = null;
    DISQUS.settings = {store_: {}, schema_: {"disqus.version": {type: "str"}, "disqus.domain": {type: "str"}, "disqus.debug": {type: "bool"}, "disqus.minified": {type: "bool"}, "disqus.readonly": {type: "bool"}, "disqus.recaptcha.key": {type: "str"}, "disqus.facebook.appId": {type: "str"}, "disqus.facebook.apiKey": {type: "str"}, "disqus.urls.main": {type: "str"}, "disqus.urls.media": {type: "str"},
        "disqus.urls.sslMedia": {type: "str"}, "disqus.urls.realtime": {type: "str"}, "disqus.urls.uploads": {type: "str"}, "disqus.urls.unmerged": {type: "str"}}};
    DISQUS.settings.store_ = {"disqus.recaptcha.key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "disqus.urls.media": "http://mediacdn.disqus.com/1347059056", "disqus.urls.main": "http://disqus.com", "disqus.urls.uploads": "http://media.disqus.com/uploads", "disqus.urls.realtime": "http://rt.disqus.com/forums/realtime-cached.js", "disqus.urls.unmerged": "http://disqus.com/embed/profile/unmerged_profiles/",
        "disqus.urls.sslMedia": "https://securecdn.disqus.com/1347059056", "disqus.domain": "disqus.com", "disqus.version": "1347059056", "disqus.debug": !1, "disqus.minified": !0};
    DISQUS.settings.add = function (d, c, f) {
        DISQUS.assert(DISQUS.settings.schema_[d] == null || f, "Unsafe attempt to update settings schema.");
        DISQUS.assert(c.type != null, "Missing required property 'key'.");
        DISQUS.settings.schema_[d] = c;
        return DISQUS.settings
    };
    DISQUS.settings.get = function (d, c) {
        var f = DISQUS.settings.schema_[d];
        DISQUS.assert(f != null, "Undefined key '" +
            d + "'.");
        var a = DISQUS.settings.store_[d];
        if (a == null)return c;
        if (f.values && !f.values.length) {
            var e = {};
            DISQUS.each(f.values, function (c, d) {
                e[c] = d
            });
            return e[a]
        }
        return a
    };
    DISQUS.settings.set = function (d, c) {
        var f = DISQUS.settings.schema_[d], a;
        DISQUS.assert(f != null, "Undefined key '" + d + "'.");
        a = function (d) {
            for (var a = 0, f; f = d[a]; a++) {
                if (f == "str" && typeof c == "string")return!0;
                if (f == "bool" && typeof c == "boolean")return!0;
                if (f == "int" && typeof c == "number")return!0;
                if (f == "obj" && typeof c == "object")return!0
            }
            return!1
        }(typeof f.type ==
            "string" ? [f.type] : f.type);
        DISQUS.assert(a, "Invalid type for rule '" + d + "'.");
        f.values && DISQUS.assert(DISQUS.contains(f.values, c), "Value is not acceptable.");
        f.rule && DISQUS.assert(f.rule(c, d), "Value didn't pass schema's rule.");
        DISQUS.settings.store_[d] = f.values && !f.values.length ? f.values[c] : c
    };
    DISQUS.isBrowser = function (d) {
        var c = a.navigator.userAgent, f = /(iPhone|Android|iPod|iPad|webOS|Mobile Safari|Windows Phone)/i;
        switch (d) {
            case "ie":
                return/msie/i.test(c) && !/opera/i.test(c);
            case "ie6":
                return!a.XMLHttpRequest;
            case "ie7":
                return/msie/i.test(c) && !/opera/i.test(c) && parseInt(/MSIE\s(\d+\.\d+)/.exec(c)[1], 10) == 7;
            case "webkit":
                return~c.indexOf("AppleWebKit/");
            case "opera":
                return!(!a.opera || !a.opera.buildNumber);
            case "gecko":
                return~c.indexOf("Gecko/");
            case "safari":
                return~c.indexOf("Safari/");
            case "chrome":
                return~c.indexOf("Chrome/");
            case "mobile":
                return f.test(c);
            case "quirks":
                return e.compatMode === "BackCompat";
            default:
                return!1
        }
    };
    DISQUS.api = function (d, c) {
        var f = DISQUS.comm && DISQUS.comm.Default.recover();
        if (f) {
            if (!c.type)c.type =
                "GET";
            if (!c.success)c.success = function () {
            };
            if (!c.failure)c.failure = function () {
            };
            if (!c.data)c.data = {};
            f.api(d, c.data, c.type, c.success, c.failure)
        } else DISQUS.once("loader.onDefaultChannelReady", function () {
            DISQUS.api(d, c)
        })
    };
    DISQUS.each(["bind", "once", "unbind", "unbindAll", "trigger"], function (d) {
        DISQUS[d] = function (c, f) {
            var a;
            c && (c = c.replace(".", "_"));
            switch (d) {
                case "bind":
                    DISQUS.bean.add(DISQUS, c, f);
                    break;
                case "once":
                    a = function () {
                        DISQUS.unbind(c, a);
                        f.apply(this, arguments)
                    };
                    DISQUS.bind(c, a);
                    break;
                case "unbind":
                    DISQUS.bean.remove(DISQUS,
                        c, f);
                    break;
                case "unbindAll":
                    DISQUS.bean.remove(DISQUS, c);
                    break;
                case "trigger":
                    DISQUS.bean.fire(DISQUS, c, [f])
            }
        }
    });
    DISQUS.contains = function (d, c) {
        if (d.length) {
            for (var a = 0, e = d.length; a < e; a++)if (d[a] == c)return!0;
            return!1
        }
        for (a in d)if (d.hasOwnProperty(a) && a == c)return!0;
        return!1
    };
    DISQUS.empty = function (d) {
        for (var c in d)if (d.hasOwnProperty(c))return!1;
        return!0
    };
    DISQUS.extend = function () {
        var d, c;
        arguments.length <= 1 ? (d = DISQUS, c = [arguments[0] || {}]) : (d = arguments[0] || {}, c = Array.prototype.slice.call(arguments,
            1));
        DISQUS.each(c, function (c) {
            DISQUS.each(c, function (c, a) {
                d[a] = c
            })
        });
        return d
    };
    DISQUS.getGuid = function () {
        return k++
    };
    DISQUS.partial = function () {
        var d = arguments[0], c = Array.prototype.slice.call(arguments, 1);
        return function () {
            for (var a = Array.prototype.slice.call(arguments), e = [], j = 0, k = c.length; j < k; j++)e.push(c[j] === h ? a.shift() : c[j]);
            for (; a.length > 0;)e.push(a.shift());
            return d.apply(this, e)
        }
    };
    DISQUS.sdk = function (d) {
        function c(c) {
            return function () {
                function a(e) {
                    c != e.name || d != e.version || (e.func.apply({},
                        f), DISQUS.unbind("loader.onSDKMethodReady", a))
                }

                var f = Array.prototype.slice.call(arguments);
                DISQUS.bind("loader.onSDKMethodReady", a)
            }
        }

        var a = j[d || "1.0"];
        DISQUS.assert(a !== h, "version is not supported.");
        if (!DISQUS.empty(a))return a;
        a = DISQUS.settings.get("disqus.debug") ? "/js/src/sdk/" : "/build/system/sdk/";
        DISQUS.require(DISQUS.settings.get("disqus.urls.media") + a + d + ".js");
        return{getThread: c("getThread"), getSession: c("getSession")}
    };
    DISQUS.sdk.add = function (d, c, a) {
        DISQUS.assert(j[c] !== h, "version is not supported.");
        j[c][d] = a;
        DISQUS.trigger("loader.onSDKMethodReady", {name: d, version: c, func: a})
    };
    DISQUS.useSSL = function (d) {
        var c, f, e;
        if (a.location.href.match(/^https/))if (d) {
            c = ["disqus_url", "realtime_url", "uploads_url"];
            for (e = 0; f = c[e]; e++)d[f] = d[f].replace(/^http/, "https");
            d.media_url = d.ssl_media_url
        } else {
            c = ["disqus.urls.main", "disqus.urls.realtime", "disqus.urls.uploads"];
            for (e = 0; f = c[e]; e++)DISQUS.settings.set(f, DISQUS.settings.get(f).replace(/^http/, "https"));
            DISQUS.settings.set("disqus.urls.media", DISQUS.settings.get("disqus.urls.sslMedia"))
        }
    };
    DISQUS.useSSL();
    DISQUS.ready = function (a) {
        function c() {
            var c = DISQUS.settings.get("disqus.urls.media"), a = c + "/js/src/embed/custom/", d = c + "/build/system/", e = DISQUS.settings.get("disqus.debug"), h = DISQUS.settings.get("disqus.urls.media"), j;
            DISQUS.status = "loading";
            e ? (j = c + "/styles/dtpl/defaults.css", c = [a + "strings.js", a + "dtpl.js", a + "actions.js", a + "validators.js", a + "utils.js", a + "db.js", a + "nodes.js", a + "sandbox.js", a + "tooltip.js", a + "comm.js", a + "ui.js", a + "sso.js", a + "compat.js", a + "facebook.js", a + "tracking.js", d +
                "defaults.js", c + "/js/src/lib/easyxdm.js", c + "/js/src/json.js", c + "/js/src/sdk/1.0.js"], DISQUS.config.includeStacktrace && c.push(h + "/js/src/lib/stacktrace.js")) : (j = d + "/defaults.css", c = [d + "disqus.js"]);
            DISQUS.requireStylesheet(j);
            DISQUS.requireSet(c, e, function () {
                DISQUS.status = "ready";
                DISQUS.trigger("loader.onFilesReady")
            })
        }

        if (DISQUS.status == "ready")a(); else DISQUS.once("loader.onFilesReady", function () {
            a()
        });
        DISQUS.status === null && c()
    };
    DISQUS.addBlocks = function (a, c) {
        if (c)return function () {
            var a = DISQUS.blocks;
            DISQUS.blocks = {};
            c();
            DISQUS.blocks = DISQUS.extend(a, {theme: DISQUS.blocks})
        }();
        var e = {Builder: DISQUS.strings.Builder, renderBlock: DISQUS.renderBlock, each: DISQUS.each, extend: DISQUS.extend, blocks: DISQUS.blocks[a || "defaults"], interpolate: DISQUS.strings.interpolate};
        return function (a) {
            a(e)
        }
    };
    DISQUS.renderBlock = function (a, c) {
        var e = a;
        typeof a === "string" && (e = DISQUS.getBlock(a));
        if (e === h)throw"Block " + a + " was not found!";
        return DISQUS.sandbox.wrap(a, e, c)
    };
    DISQUS.getBlock = function (a) {
        return DISQUS.blocks.theme[a] ||
            DISQUS.blocks.defaults[a]
    };
    DISQUS.window = {getSize: function () {
        return typeof a.innerWidth == "number" ? [a.innerWidth, a.innerHeight] : e.documentElement ? [e.documentElement.clientWidth || e.body.clientWidth, e.documentElement.clientHeight || e.body.clientHeight] : [-1, -1]
    }, getScrollPosition: function () {
        var a = e.documentElement;
        return a && (a.scrollTop || a.scrollWidth) ? [a.scrollWidth, a.scrollTop || e.body.scrollTop] : [e.body.scrollWidth, e.body.scrollTop]
    }}
});
(function (a) {
    function h(a) {
        a = a.relatedTarget;
        if (!a)return a === null;
        var b;
        if (b = a != this)if (b = a.prefix != "xul")if (b = !/document/.test(this.toString())) {
            var c;
            a:for (a = a.parentNode; a !== null;) {
                if (a == this) {
                    c = !0;
                    break a
                }
                a = a.parentNode
            }
            b = !c
        }
        return b
    }

    var e = 1, k = {}, j = {}, d = /over|out/, c = /[^\.]*(?=\..*)\.|.*/, f = /\..*/, r = ((a.document || {}).documentElement || {}).addEventListener, q = r ? "addEventListener" : "attachEvent", y = function (a, b) {
        return a.__uid = b || a.__uid || e++
    }, m = function (a) {
        a = y(a);
        return k[a] = k[a] || {}
    }, s = r ? function (a, b, c, d) {
        a[d ? "addEventListener" : "removeEventListener"](b, c, !1)
    } : function (a, b, c, d, g) {
        g && d && (a["_on" + g] = a["_on" + g] || 0);
        a[d ? "attachEvent" : "detachEvent"]("on" + b, c)
    }, n = function (b, c, d) {
        return function (i) {
            i = g(i || ((this.ownerDocument || this.document || this).parentWindow || a).event);
            return c.apply(b, [i].concat(d))
        }
    }, b = function (a, b, c, d, g) {
        return function (i) {
            if (d ? d.apply(this, arguments) : r || i && i.propertyName == "_on" + c || !i)b.apply(a, Array.prototype.slice.call(arguments, i ? 0 : 1).concat(g))
        }
    }, p = function (a, d, g, e) {
        var h =
            d.replace(f, ""), B = m(a), B = B[h] || (B[h] = {}), k = g, d = y(g, d.replace(c, ""));
        if (B[d])return a;
        var l = o[h];
        l && (g = l.condition ? b(a, g, h, l.condition) : g, h = l.base || h);
        g = (l = i[h]) ? n(a, g, e) : b(a, g, h, !1, e);
        l = r || l;
        if (h == "unload")var w = g, g = function () {
            t(a, h, g) && w()
        };
        a[q] && s(a, l ? h : "propertychange", g, !0, !l && h);
        B[d] = g;
        g.__uid = d;
        g.__originalFn = k;
        return h == "unload" ? a : j[y(a)] = a
    }, t = function (a, b, d) {
        var x;
        var g, e, h = m(a), j = b.replace(f, "");
        if (!h || !h[j])return a;
        x = (b = b.replace(c, "")) ? b.split(".") : [d.__uid], b = x;
        for (e = b.length; e--;)g =
            b[e], d = h[j][g], delete h[j][g], a[q] && (j = o[j] ? o[j].base : j, g = r || i[j], s(a, g ? j : "propertychange", d, !1, !g && j));
        return a
    }, u = function (a, b, c) {
        return function (d) {
            for (var g = typeof a == "string" ? c(a, this) : a, i = d.target; i && i != this; i = i.parentNode)for (var e = g.length; e--;)if (g[e] == i)return b.apply(i, arguments)
        }
    }, v = function (a, b, c, d, g) {
        if (typeof b == "object" && !c)for (var i in b)b.hasOwnProperty(i) && v(a, i, b[i]); else {
            i = typeof c == "string";
            for (var e = (i ? c : b).split(" "), c = i ? u(b, d, g) : c, h = e.length; h--;)p(a, e[h], c, Array.prototype.slice.call(arguments,
                i ? 4 : 3))
        }
        return a
    }, z = function (a, b, d) {
        var g, i, e, h = typeof b == "string", j = h && b.replace(c, ""), o = t, l = m(a);
        if (h && /\s/.test(b)) {
            b = b.split(" ");
            for (e = b.length - 1; z(a, b[e]) && e--;);
            return a
        }
        i = h ? b.replace(f, "") : b;
        if (!l || h && !l[i]) {
            if (l && j)for (g in l)if (l.hasOwnProperty(g))for (e in l[g])l[g].hasOwnProperty(e) && e === j && o(a, [g, j].join("."));
            return a
        }
        if (typeof d == "function")o(a, i, d); else if (j)o(a, b); else for (g in o = i ? o : z, b = h && i, i = i ? d || l[i] || i : l, i)i.hasOwnProperty(g) && (o(a, b || g, i[g]), delete i[g]);
        return a
    }, C = r ? function (b, c, g) {
        evt = document.createEvent(b ? "HTMLEvents" : "UIEvents");
        evt[b ? "initEvent" : "initUIEvent"](c, !0, !0, a, 1);
        g.dispatchEvent(evt)
    } : function (a, b, c) {
        a ? c.fireEvent("on" + b, document.createEventObject()) : c["_on" + b]++
    }, A = function (a, b, c) {
        var g = m(b), d;
        y(a);
        g = c ? g[c] : g;
        for (d in g)g.hasOwnProperty(d) && (c ? v : A)(a, c || b, c ? g[d].__originalFn : d);
        return a
    }, g = function (a) {
        var b = {};
        if (!a)return b;
        var c = a.type, i = a.target || a.srcElement;
        b.preventDefault = g.preventDefault(a);
        b.stopPropagation = g.stopPropagation(a);
        b.target = i && i.nodeType ==
            3 ? i.parentNode : i;
        if (~c.indexOf("key"))b.keyCode = a.which || a.keyCode; else if (/click|mouse|menu/i.test(c)) {
            b.rightClick = a.which == 3 || a.button == 2;
            b.pos = {x: 0, y: 0};
            if (a.pageX || a.pageY)b.clientX = a.pageX, b.clientY = a.pageY; else if (a.clientX || a.clientY)b.clientX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, b.clientY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            d.test(c) && (b.relatedTarget = a.relatedTarget || a[(c == "mouseover" ? "from" : "to") + "Element"])
        }
        for (var e in a)e in
            b || (b[e] = a[e]);
        return b
    };
    g.preventDefault = function (a) {
        return function () {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        }
    };
    g.stopPropagation = function (a) {
        return function () {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
        }
    };
    var i = {click: 1, dblclick: 1, mouseup: 1, mousedown: 1, contextmenu: 1, mousewheel: 1, DOMMouseScroll: 1, mouseover: 1, mouseout: 1, mousemove: 1, selectstart: 1, selectend: 1, keydown: 1, keypress: 1, keyup: 1, orientationchange: 1, touchstart: 1, touchmove: 1, touchend: 1, touchcancel: 1, gesturestart: 1, gesturechange: 1,
        gestureend: 1, focus: 1, blur: 1, change: 1, reset: 1, select: 1, submit: 1, load: 1, unload: 1, beforeunload: 1, resize: 1, move: 1, DOMContentLoaded: 1, readystatechange: 1, error: 1, abort: 1, scroll: 1}, o = {mouseenter: {base: "mouseover", condition: h}, mouseleave: {base: "mouseout", condition: h}, mousewheel: {base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"}}, l = {add: v, remove: z, clone: A, fire: function (a, b, g) {
        var d, e, h = b.split(" ");
        for (e = h.length; e--;) {
            var b = h[e].replace(f, ""), j = i[b], o = h[e].replace(c, ""), l = m(a)[b];
            if (o) {
                o =
                    o.split(".");
                for (d = o.length; d--;)l && l[o[d]] && l[o[d]].apply(a, [!1].concat(g))
            } else if (!g && a[q])C(j, b, a); else for (d in l)l.hasOwnProperty(d) && l[d].apply(a, [!1].concat(g))
        }
        return a
    }};
    a.attachEvent && v(a, "unload", function () {
        for (var b in j)if (j.hasOwnProperty(b)) {
            var c = z(j[b]).__uid;
            c && (delete j[c], delete k[c])
        }
        a.CollectGarbage && CollectGarbage()
    });
    var w = a.bean;
    l.noConflict = function () {
        a.bean = w;
        return this
    };
    a.bean = l
})(this);
(function (a, h) {
    function e() {
        this.c = {}
    }

    function k(a) {
        u = [];
        s = 0;
        for (z = a.length; s < z; s++)u[s] = a[s];
        return u
    }

    function j(a) {
        for (; a = a.previousSibling;)if (a.nodeType == 1)break;
        return a
    }

    function d(a, b, c, g, d, i, e, h, j, k, w) {
        var n, q;
        if (b && this.tagName.toLowerCase() !== b)return!1;
        if (c && (n = c.match(o)) && n[1] !== this.id)return!1;
        if (c && (A = c.match(l)))for (s = A.length; s--;)if (a = A[s].slice(1), !(D.g(a) || D.s(a, RegExp("(^|\\s+)" + a + "(\\s+|$)"))).test(this.className))return!1;
        if (j && m.pseudos[j] && !m.pseudos[j](this, w))return!1;
        if (g && !e)for (q in t = this.attributes, t)if (Object.prototype.hasOwnProperty.call(t, q) && (t[q].name || q) == d)return this;
        if (g && !f(i, this.getAttribute(d) || "", e))return!1;
        return this
    }

    function c(a) {
        return G.g(a) || G.s(a, a.replace(P, "\\$1"))
    }

    function f(a, b, g) {
        switch (a) {
            case "=":
                return b == g;
            case "^=":
                return b.match(x.g("^=" + g) || x.s("^=" + g, RegExp("^" + c(g))));
            case "$=":
                return b.match(x.g("$=" + g) || x.s("$=" + g, RegExp(c(g) + "$")));
            case "*=":
                return b.match(x.g(g) || x.s(g, RegExp(c(g))));
            case "~=":
                return b.match(x.g("~=" + g) ||
                    x.s("~=" + g, RegExp("(?:^|\\s+)" + c(g) + "(?:\\s+|$)")));
            case "|=":
                return b.match(x.g("|=" + g) || x.s("|=" + g, RegExp("^" + c(g) + "(-|$)")))
        }
        return 0
    }

    function r(a) {
        var b = [], c = [], g, i = 0, e, f, j, o, l, k = H.g(a) || H.s(a, a.split(O)), a = a.match(N), k = k.slice(0);
        if (!k.length)return b;
        f = k.pop();
        o = k.length && (g = k[k.length - 1].match(w)) ? h.getElementById(g[1]) : h;
        if (!o)return b;
        l = f.match(F);
        e = a && /^[+~]$/.test(a[a.length - 1]) ? function (a) {
            for (; o = o.nextSibling;)o.nodeType == 1 && (l[1] ? l[1] == o.tagName.toLowerCase() : 1) && a.push(o);
            return a
        }([]) :
            o.getElementsByTagName(l[1] || "*");
        g = 0;
        for (f = e.length; g < f; g++)if (j = d.apply(e[g], l))b[i++] = j;
        if (!k.length)return b;
        i = 0;
        f = b.length;
        for (e = 0; i < f; i++) {
            j = b[i];
            for (g = k.length; g--;)for (; j = Q[a[g]](j, b[i]);)if (C = d.apply(j, k[g].match(F)))break;
            C && (c[e++] = b[i])
        }
        return c
    }

    function q(a, b, c) {
        c = typeof b == "string" ? c(b)[0] : b || h;
        if (a === window || a && a.nodeType && (a.nodeType == 1 || a.nodeType == 9))return!b || a !== window && c && c.nodeType && (c.nodeType == 1 || c.nodeType == 9) && I(a, c) ? [a] : [];
        if (a && typeof a === "object" && isFinite(a.length))return k(a);
        if (p = a.match(w))return(v = h.getElementById(p[1])) ? [v] : [];
        if (p = a.match(K))return k(c.getElementsByTagName(p[1]));
        return!1
    }

    function y(a) {
        var b = [], c, g;
        c = 0;
        a:for (; c < a.length; c++) {
            for (g = 0; g < b.length; g++)if (b[g] == a[c])continue a;
            b[b.length] = a[c]
        }
        return b
    }

    function m(a, b) {
        var c = typeof b == "string" ? m(b)[0] : b || h;
        if (!c || !a)return[];
        if (p = q(a, b, m))return p;
        return R(a, c)
    }

    var s, n, b, p, t, u, v, z, C, A, g, i = h.documentElement, o = /#([\w\-]+)/, l = /\.[\w\-]+/g, w = /^#([\w\-]+$)/, J = /^\.([\w\-]+)$/, K = /^([\w\-]+)$/, L = /^([\w]+)?\.([\w\-]+)$/,
        M = /\s*([\s\+\~>])\s*/g, E = /[\s\>\+\~]/, B = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\])/, N = RegExp("(" + E.source + ")" + B.source, "g"), O = RegExp(E.source + B.source), P = /([.*+?\^=!:${}()|\[\]\/\\])/g, F = RegExp(/^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/.source + "(" + /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/.source + ")?(" + /:([\w\-]+)(\(['"]?(\w+)['"]?\))?/.source + ")?"), Q = {" ": function (a) {
            return a && a !== i && a.parentNode
        }, ">": function (a, b) {
            return a && a.parentNode == b.parentNode &&
                a.parentNode
        }, "~": function (a) {
            return a && a.previousSibling
        }, "+": function (a, b, c, g) {
            if (!a)return!1;
            c = j(a);
            g = j(b);
            return c && g && c == g && c
        }};
    e.prototype = {g: function (a) {
        return this.c[a] || void 0
    }, s: function (a, b) {
        return this.c[a] = b
    }};
    var D = new e, G = new e, x = new e, H = new e, I = "compareDocumentPosition"in i ? function (a, b) {
        return(b.compareDocumentPosition(a) & 16) == 16
    } : "contains"in i ? function (a, b) {
        b = b == h || b == window ? i : b;
        return b !== a && b.contains(a)
    } : function (a, b) {
        for (; a = a.parentNode;)if (a === b)return 1;
        return 0
    }, R = h.querySelector &&
        h.querySelectorAll ? function (a, b) {
        if (b.getElementsByClassName && (p = a.match(J)))return k(b.getElementsByClassName(p[1]));
        return k(b.querySelectorAll(a))
    } : function (a, c) {
        var a = a.replace(M, "$1"), d = [], i, e = [], f;
        if (p = a.match(L)) {
            g = c.getElementsByTagName(p[1] || "*");
            u = D.g(p[2]) || D.s(p[2], RegExp("(^|\\s+)" + p[2] + "(\\s+|$)"));
            f = 0;
            b = g.length;
            for (n = 0; f < b; f++)u.test(g[f].className) && (d[n++] = g[f]);
            return d
        }
        f = 0;
        g = a.split(",");
        for (b = g.length; f < b; f++)e[f] = r(g[f]);
        f = 0;
        for (b = e.length; f < b && (i = e[f]); f++) {
            var j = i;
            if (c !== h) {
                j =
                    [];
                n = 0;
                for (p = i.length; n < p && (element = i[n]); n++)I(element, c) && j.push(element)
            }
            d = d.concat(j)
        }
        return y(d)
    };
    m.uniq = y;
    m.pseudos = {};
    var S = a.qwery;
    m.noConflict = function () {
        a.qwery = S;
        return this
    };
    a.qwery = m
})(this, document);
(function () {
    DISQUS.extend({bean: bean.noConflict(), qwery: qwery.noConflict(), throttle: function (a, h, e, k) {
        var j = (new Date).getTime();
        DISQUS.bean.add(a, h, function (a) {
            var c = (new Date).getTime();
            c - j >= k && (j = c, e(a))
        })
    }, debounce: function (a, h, e, k) {
        function j(a) {
            d && clearTimeout(d);
            d = setTimeout(function () {
                e(a, c)
            }, k)
        }

        var d, c;
        c = function () {
            DISQUS.bean.remove(a, h, j)
        };
        DISQUS.bean.add(a, h, j)
    }})
})();
DISQUS.modules = {};
DISQUS.addJob = DISQUS.defer;
DISQUS.getResourceURL = DISQUS.serialize;
DISQUS.lang = {contains: DISQUS.contains, forEach: DISQUS.each, extend: DISQUS.extend, trim: function (a) {
    for (var a = a.replace(/^\s\s*/, ""), h = /\s/, e = a.length; h.test(a.charAt(--e)););
    return a.slice(0, e + 1)
}, partial: DISQUS.partial};
DISQUS.events = {add: DISQUS.bean.add, remove: DISQUS.bean.remove, debounce: DISQUS.debounce};
DISQUS.browser = {ie: DISQUS.isBrowser("ie"), ie6: DISQUS.isBrowser("ie6"), ie7: DISQUS.isBrowser("ie7"), webkit: DISQUS.isBrowser("webkit"), opera: DISQUS.isBrowser("opera"), gecko: DISQUS.isBrowser("gecko"), mobile: DISQUS.isBrowser("mobile"), quirks: DISQUS.isBrowser("quirks")};
DISQUS.define("cookies", function () {
    return{create: function (a, h, e) {
        a = a + "=" + h + "; path=/";
        e.domain && (a += "; domain=." + e.domain);
        e.expiresIn && (h = new Date, h.setTime(h.getTime() + e.expiresIn), a += "; expires=" + h.toGMTString());
        document.cookie = a
    }, read: function (a) {
        a += "=";
        for (var h = document.cookie.split(";"), e, k = 0; k < h.length; k++) {
            for (e = h[k]; e.charAt(0) == " ";)e = e.substring(1, e.length);
            if (e.indexOf(a) === 0)return e.substring(a.length, e.length)
        }
        return null
    }, erase: function (a, h) {
        var e = new Date;
        e.setTime(e.getTime() + -864E5);
        e = a + "=; path=/;expires=" + e.toGMTString();
        h.domain && (e += "; domain=." + h.domain);
        document.cookie = e
    }}
});
DISQUS.define("ga", function (a) {
    var h, e = function (e) {
        h ? h(e) : a._gaq.push(e)
    }, k = {component: 1, "package": 2, forum: 3, version: 4, userType: 5};
    return{setCaller: function (a) {
        h = a
    }, setAccount: function (a) {
        e(["_setAccount", a])
    }, setCustomVar: function (a, d) {
        e(["_setCustomVar", k[a], a, d])
    }, trackPageview: function () {
        e(["_trackPageview"])
    }, trackEvent: function (a, d, c) {
        e(["_trackEvent", d, a, c, 1])
    }, setDomainName: function (a) {
        e(["_setDomainName", a])
    }}
});
DISQUS.define("juggler", function (a) {
    var h, e, k = {}, j = ["thread", "forum", "forum_id"], d = j.slice().concat(["imp", "event", "prev_imp"]), c = [], f = (new Date).getTime().toString(10) + Math.floor(Math.random() * 1E6).toString(10);
    return{load: function (d) {
        a.location.href.slice(0, 5) == "https" ? h = function () {
        } : (e = d.url, DISQUS.each(j, function (a) {
            k[a] = d[a]
        }), k.imp = f, k.prev_imp = DISQUS.cookies.read("__jid"), DISQUS.cookies.create("__jid", f, {expiresIn: 18E5}), h = function (a) {
            DISQUS.each(k, function (c, d) {
                a[d] = k[d]
            });
            DISQUS.require(e,
                a, !1)
        }, DISQUS.each(c, function (a) {
            h(a)
        }))
    }, emit: function (a, e) {
        DISQUS.each(d, function (a) {
            if (e[a] != null)throw"Error: cannot overwrite event context '" + a + "'";
        });
        e.event = a;
        h == null ? c.push(e) : h(e)
    }, impId: f}
});
(function (a) {
    function h(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }

    function e() {
        for (var a = 0, b = t.length; a < b; a++)if (h(t[a], "name") && t[a].getAttribute("name") == "generator" && h(t[a], "content") && t[a].getAttribute("content") == "blogger")return!0;
        a = n.getElementById("Attribution1");
        if (a != null && a.innerHTML.indexOf("http://www.blogger.com") > 0)return!0;
        return!1
    }

    function k() {
        var a;
        if (e()) {
            a = n.getElementsByTagName("A");
            for (var b = 0, c = a.length; b < c; b++)if (!h(a[b], "src") && h(a[b], "name") &&
                parseInt(a[b].getAttribute("name"), 10) && a[b].innerHTML === "")return a[b].getAttribute("name")
        }
        return null
    }

    function j(a) {
        var b = 0, c = 0;
        if (!a.offsetParent)return[0, 0];
        do b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent; while (a);
        return[b, c]
    }

    function d(a) {
        var c = b.window.getScrollPosition()[1], d = c + b.window.getSize()[1];
        return a >= c && a <= d
    }

    function c(a) {
        if (!(typeof p != "function" && typeof a != "function")) {
            var c = {preData: "loader.onReady", preInit: "loader.onDataReady", onInit: "loader.onLibraryReady", afterRender: "loader.onTemplateReady",
                onReady: "thread.onReady", onPaginate: "thread.onPaginate", onNewComment: "comment.onCreate", preReset: "thread.beforeReset"};
            b.config.callbacks = {};
            b.config.page = {};
            b.each(c, function (a, c) {
                b.config.callbacks[c] = []
            });
            try {
                (a || p).call(b.config)
            } catch (d) {
            }
            b.each(b.config.callbacks, function (a, d) {
                a.length !== 0 && b.each(a, function (a) {
                    b.bind(c[d], a)
                })
            });
            b.config.callbacks = c
        }
    }

    function f() {
        var c = {url: "thread.url", title: "thread.title", slug: "thread.slug", category_id: "thread.category", identifier: "thread.identifier", remote_auth_s3: "request.sso.data",
            author_s3: "thread.author.sig", api_key: "forum.apiKey"};
        b.each({disqus_domain: "disqus.domain", disqus_category_id: "thread.category", disqus_thread_slug: "thread.slug", disqus_title: "thread.title", disqus_url: "thread.url", disqus_identifier: "thread.identifier", disqus_per_page: "thread.postsPerPage", disqus_require_moderation_s: "thread.moderatePosts", disqus_skip_auth: "thread.skipAuthRequest", disqus_def_email: "thread.defaults.email", disqus_def_name: "thread.defaults.name", disqus_default_text: "thread.defaults.placeholder",
            disqus_shortname: "forum.shortname", disqus_facebook_key: "forum.facebook.key", disqus_custom_strings: "ui.translations", disqus_container_id: "ui-fluid", DsqLocal: "legacy.trackbacks", disqus_remote_auth_s2: "legacy.sso.data", disqus_author_s2: "legacy.thread.author.sig"
        }, function (c, d) {
            a[d] != null && b.settings.set(c, a[d])
        });
        if (a.disqus_sort != null)b.settings.store_["thread.sort"] = a.disqus_sort;
        a.disqus_developer != null && b.settings.set("disqus.developer", !!a.disqus_developer);
        b.config && b.config.page && (b.config.page.remote_auth_s3 !=
            null && b.settings.set("request.sso.data", b.config.page.remote_auth_s3), b.config.page.api_key != null && b.settings.set("forum.apiKey", b.config.page.api_key), b.each(c, function (a, c) {
            b.config.page[c] != null && b.settings.set(a, b.config.page[c])
        }))
    }

    function r() {
        var c = a.location.hash, i = b.settings.get, f = i("legacy.trackbacks", {});
        b.extend(b.config, {container_id: i("ui-fluid", "disqus_thread"), trackback_url: f.trackback_url || null, trackbacks: f.trackbacks || null, absorbStyles: !1});
        b.config.page = {
            url: i("thread.url",
                a.location.href), title: i("thread.title", ""), slug: i("thread.slug"), sort: i("thread.sort", ""), per_page: i("thread.postsPerPage", null), category_id: i("thread.category", ""), developer: +i("disqus.developer", 0), identifier: i("thread.identifier", ""), require_mod_s: i("thread.moderatePosts"), remote_auth_s3: i("request.sso.data"), author_s3: i("thread.author.sig"), api_key: i("forum.apiKey"), disqus_version: i("disqus.version"), remote_auth_s2: i("legacy.sso.data"), author_s2: i("legacy.thread.author.sig")};
        if (~c.search(/comment\-\d+/))b.config.page.lazy =
            "0";
        else {
            var h, f = n.getElementById(b.config - fluid_id);
            h = j(f)[1];
            if (f && d(h))b.config.page.lazy = "0"
        }
        if (e())b.config.page.blogger_id = k(), b.config.page.url = b.config.page.url.replace(/\?.*$/, "");
        if (c && (c = c.match(/comment\-([0-9]+)/)))b.config.page.anchor_post_id = c[1];
        var w = a.disqus_callback;
        typeof w == "function" && b.bind("thread.onReady", function () {
            w(a.disqus_callback_params || null)
        });
        b.config.custom_strings = i("ui.translations", {});
        b.extend(b.config, {
            domain: i("disqus.domain"), shortname: i("forum.shortname") ||
                b.getShortname(), facebook_key: i("forum.facebook.key", null), def_name: i("thread.defaults.name"), def_email: i("thread.defaults.email"), def_text: i("thread.defaults.placeholder", ""), skip_auth: i("thread.skipAuthRequest", !1)});
        i = b.config.shortname + "." + b.config.domain + "/thread.js";
        b.config.json_url = a.location.href.match(/^https/) ? "https://" + i : "http://" + i
    }

    function q(a) {
        return Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds())
    }

    function y() {
        b.bind("thread.onReady", function () {
            function c() {
                f && d(f) && b.trigger("comments.replyViewed");
                h && d(h) && b.trigger("thread.bottomViewed")
            }

            var e = n.getElementById("dsq-reply") || n.getElementById("dsq-new-post"), f = e ? b.nodes.getPosition(e)[1] + e.offsetHeight : null, e = n.getElementById("dsq-comments"), h = b.nodes.getPosition(e)[1] + e.offsetHeight;
            c();
            b.events.debounce(a, "scroll", c, 250);
            b.resettable = !0;
            b.trigger("thread.onResetReady")
        });
        b.bind("thread.onReady", function () {
            var c = b.comm.Default.recover(),
                d = q(new Date);
            c.log("load:start", A);
            c.log("load:length", d - A);
            try {
                a.jQuery && jQuery.ui ? c.log("jslib", "jqueryui:" + jQuery.ui.version) : a.jQuery ? c.log("jslib", "jquery:" + jQuery().jquery) : a.Prototype ? c.log("jslib", "prototype:" + Prototype.Version) : a.dojo ? c.log("jslib", "dojo:" + dojo.version.toString()) : a.MooTools ? c.log("jslib", "mootools:" + MooTools.version) : a.Ext ? c.log("jslib", "ext:" + Ext.version) : a.YUI ? c.log("jslib", "yui:" + YUI.version) : c.log("jslib", "none")
            } catch (e) {
                c.log("jslib", "error")
            }
            c.flushLog(null)
        });
        b.bind("loader.onTemplateReady",
            function () {
                var a = b.comm.Default.recover(), c = b.jsonData;
                c.context.switches.sigma && a.enable(c.context.sigma_chance);
                a.log("hit", 1);
                c.forum.id && a.addMeta("info:forum_id", c.forum.id);
                c.thread.id && a.addMeta("info:thread_id", c.thread.id);
                c.request.user_type && a.addMeta("info:user_type", c.request.user_type);
                c.request.user_id && a.addMeta("info:user_id", c.request.user_id)
            });
        b.once("thread.bottomViewed", function () {
            b.comm.Default.recover().log("viewed:comments", 1)
        });
        b.once("comments.replyViewed", function () {
            b.comm.Default.recover().log("viewed:comment_box",
                1)
        })
    }

    function m() {
        function a(b, c, d, e, g, f) {
            return'<img width="' + b + '" height="' + c + '" alt="' + e + '" src="data:image/' + d + ";base64," + g + '"' + (f ? 'style="' + f + '"' : "") + "/>"
        }

        b.jsonData = {ready: !1};
        var c;
        b.require(b.config.json_url, b.config.page, !0, null, function () {
            c.innerHTML = 'There was a problem loading Disqus. For more information, please visit <a href="http://status.disqus.com">status.disqus.com</a>.'
        });
        var d = b.qwery("#dsq-content")[0] || n.createElement("div");
        d.id = "dsq-content";
        d.style.display = "none";
        c = b.qwery("#dsq-content-stub")[0] ||
            n.createElement("div");
        c.id = "dsq-content-stub";
        c.innerHTML = b.browser.ie6 ? "..." : a(71, 17, "png", "DISQUS", z.join("")) + a(16, 11, "gif", "...", C.join(""), "margin:0 0 3px 5px");
        var e = b.qwery("#" + b.config - fluid_id)[0];
        e.appendChild(d);
        e.appendChild(c);
        y();
        b.ready(function () {
            b.initThread(function () {
                c.style.display = "none"
            })
        })
    }

    function s(c) {
        function d() {
            b.trigger("loader.onDefaultChannelReady")
        }

        var e = n.getElementById("dsq-content"), f = b.settings.get("disqus.urls.media"), h = f + "/build/system/", j = f + "/build/lang/",
            k = b.jsonData.forum.template.css, m = b.jsonData.forum.template.url, q = b.jsonData.context.switches, p = b.settings.get("disqus.debug"), r = b.settings.get("disqus.preview");
        b.trigger("loader.onDataReady");
        if (b.browser.mobile && !b.jsonData.forum.mobile_theme_disabled)k = b.jsonData.forum.template.mobile.css, m = b.jsonData.forum.template.mobile.url, b.states.isMobile = !0; else if (r)k = r.styles, m = r.source;
        !a.disqus_no_style && k && b.requireStylesheet(k, {}, p);
        k = b.jsonData.forum.stylesUrl;
        if (!b.jsonData.context.switches.static_styles ||
            p)k = "http://" + b.config.domain + "/forums/" + b.config.shortname + "/reset_base.css";
        b.jsonData.forum.hasCustomStyles && b.requireStylesheet(k, {u: b.jsonData.forum.lastUpdate});
        m = [m];
        q.new_toolbar && (m.push(h + "/defaults.toolbar.js"), b.requireStylesheet(p ? f + "/styles/dtpl/defaults.toolbar.css" : h + "/defaults.toolbar.css", {}, p));
        ~a.location.search.indexOf("fb_xd_fragment") ? b.require("http://connect.facebook.net/en_US/all.js") : (b.config.language ? b.config.language != "en" && m.push(j + b.config.language + ".js") : b.jsonData.forum.language !=
            "en" && m.push(j + b.jsonData.forum.language + ".js"), b.comm.Default.recover() || b.comm.Default.create(d).setApiKey(b.jsonData.forum.apiKey), b.requireSet(m, p, function () {
            b.config.custom_strings && b.lang.extend(b.strings.translations, b.config.custom_strings);
            if (b.config.def_text === "")b.config.def_text = b.strings.get("Type your comment here.");
            b.registerActions();
            b.trigger("loader.onActionsReady");
            b.nodes.addClass(e, "clearfix");
            var a = e.parentNode;
            a.removeChild(e);
            e.innerHTML = b.renderBlock("thread");
            a.appendChild(e);
            b.trigger("loader.onLibraryReady");
            b.dtpl.actions.fire("thread.initialize");
            b.trigger("loader.onTemplateReady");
            b.bean.add(e, "click change", function (a) {
                for (var c = a.target, d; c && c != e;) {
                    if (d = b.dtpl.getAction(c, a)) {
                        a.preventDefault();
                        d();
                        break
                    }
                    c = c.parentNode
                }
            });
            b.nodes - fluid = b.nodes.get("#dsq-content");
            e.style.display = "block";
            c();
            b.config.page.anchor_post_id && b.nodes.scrollTo("#dsq-comment-" + b.config.page.anchor_post_id);
            b.dtpl.actions.fire("thread.ready")
        }))
    }

    var n = a.document, b = a.DISQUS, p = a.disqus_config;
    b.qwery("head")[0] || b.qwery("#disqus_thread");
    var t = b.qwery("meta"), u = !1, v = [], z = ["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", "TkSuQmCC"],
        C = ["R0lGODlhEAALAPQAAP///z2LqeLt8dvp7u7090GNqz2LqV+fuJ/F1IW2ycrf51aatHWs", "waXJ14i4ys3h6FmctUCMqniuw+vz9eHs8fb5+meku+Tu8vT4+cfd5bbT3tbm7PH2+AAA", "AAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQu", "aW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27if", "DgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeR", "vsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjoth", "LOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh", "+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+",
            "YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY", "5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAs", "AAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00k", "j5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpy", "HCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAA", "BS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7", "AAAAAAAAAAAA"];
    b.settings.add("disqus.developer", {type: "bool"}).add("disqus.preview",
        {type: "obj", rule: function (a) {
            return a != null && typeof a.source == "string" && typeof a.styles == "string"
        }}).add("thread.category", {type: ["str", "int"]}).add("thread.slug", {type: "str"}).add("thread.title", {type: "str"}).add("thread.url", {type: "str"}).add("thread.identifier", {type: ["str", "int"]}).add("thread.postsPerPage", {type: ["str", "int"]}).add("thread.moderatePosts", {type: "str", values: ["all", "none", "anon"]}).add("thread.skipAuthRequest", {type: "bool"}).add("thread.sort", {type: "str", values: {oldest: 1, newest: 2,
            best: 3, hot: 4, highlighted: 5
        }
        }).add("thread.defaults.name", {type: "str"}).add("thread.defaults.email", {type: "str"}).add("thread.defaults.placeholder", {type: "str"}).add("thread.author.sig", {type: "str"}).add("forum.shortname", {type: "str"}).add("forum.apiKey", {type: "str"}).add("forum.facebook.key", {type: "str"}).add("ui.translations", {type: "obj"}).add("ui-fluid", {type: "str"}).add("request.sso.data", {type: "str"}).add("legacy.trackbacks", {type: "obj"}).add("legacy.thread.author.sig", {type: "str"}).add("legacy.sso.data",
        {type: "str"}).add("realtime.host", {type: "str"}).add("realtime.port", {type: "int"});
    var A = q(new Date);
    b.extend({cache: {postboxBusy: {}, buttonsToRestore: [], popupProfileCache: {}, popupStatusCache: {}, toggledReplies: {}, postSharing: {}, realtime: {interval: null, ongoing_request: null, prev_script: null, last_checked: null, newPosts: []}}, states: {edit: {}, realtime: !1, noThirdPartyCookies: null, useLoginWindow: !1, loginDisabled: !1, metaViewport: function () {
        for (var a = 0, b = t.length; a < b; a++)if (t[a].getAttribute("name") == "viewport")return!0;
        return!1
    }(), isMobile: !1}, curPageId: "dsq-comments", frames: {}, config: {template: null}, jsonData: null, isReady: !1, getShortname: function () {
        function a(b) {
            var b = b.getAttribute ? b.getAttribute("src") : b.src, c = [/https?:\/\/(www\.)?disqus\.com\/forums\/([\w_\-]+)/i, /https?:\/\/(www\.)?([\w_\-]+)\.disqus\.com/i, /https?:\/\/(www\.)?dev\.disqus\.org\/forums\/([\w_\-]+)/i, /https?:\/\/(www\.)?([\w_\-]+)\.dev\.disqus\.org/i], d = c.length;
            if (!b || b.substring(b.length - 8) != "embed.js")return null;
            for (var e = 0; e < d; e++) {
                var g =
                    b.match(c[e]);
                if (g && g.length && g.length == 3)return g[2]
            }
            return null
        }

        for (var b = n.getElementsByTagName("script"), c = b.length - 1; c >= 0; c--) {
            var d = a(b[c]);
            if (d !== null)return d
        }
        return null
    }, callback: function (a) {
        var c = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : [];
        b.trigger(a, {args: c})
    }, reset: function (a) {
        v.push(a);
        b.defer(function () {
            return b.resettable
        }, function () {
            var a = b.nodes.get("#" + b.config - fluid_id), d = v.pop();
            if (d)v = [], b.comm.reset(!0), b.jsonData = null, b.sandbox.invalidateGlobals(), b.resettable = !1, b.config.page = {}, a.innerHTML = "", b.trigger("thread.beforeReset"), b.unbindAll(), d.reload && (c(d.config), f(), r(), m())
        })
    }, updatePost: function (a, c) {
        var d = b.jsonData.posts[a] || {};
        if (c)c.id = a, b.jsonData.posts[a] = b.extend(d, c), b.trigger("data.onPostUpdate", {id: a, data: c})
    }, reload: function (a) {
        b.require(b.config.json_url, b.config.page, !0, function () {
            u = !0;
            typeof a == "function" && a()
        })
    }, redraw: function (a) {
        if (u || a)b.sandbox.invalidateGlobals(), a = b.nodes.get("#dsq-content"), a.innerHTML = b.renderBlock("thread"), b.frames =
            [], b.dtpl.actions.fire("thread.initialize"), u = !1
    }, initThread: function (c) {
        function d(b) {
            var c = a.onload;
            a.onload = typeof a.onload != "function" ? b : function () {
                c && c();
                b()
            }
        }

        function e() {
            var c, d;
            if (b.isReady) {
                if (h && clearInterval(h), n.getElementById(b.settings.get("ui-fluid")), c = n.getElementsByTagName("iframe"), d = n.getElementById("dsq-content"))for (var f = 0, g = c.length; f < g; f++)c[f].style.width = d.offsetWidth
            }
            else h || (h = a.setInterval(e, 500))
        }

        var f, h;
        b.browser.ie && b.config.frame_theme !== "cnn2" && d(e);
        b.trigger("loader.onReady");
        f = n.getElementById("dsq-content") || n.createElement("div");
        f.id = "dsq-content";
        f.style.display = "none";
        n.getElementById(b.config - fluid_id).appendChild(f);
        b - fluid = n.getElementById("dsq-content");
        try {
            b.browser.ie6 && n.execCommand("BackgroundImageCache", !1, !0)
        }
        catch (j) {
        }
        b.config.page.lazy = "0";
        var k = b.partial(s, c), m = b.partial(b.require, b.config.json_url, b.config.page, !0, k);
        if (b.jsonData == null)return void m();
        b.defer(function () {
            var a = b.jsonData;
            return a && (a.ready || a.lazy)
        }, function () {
            if (b.jsonData.ready)return void k();
            b.once("thread.topViewed", function () {
                m()
            })
        })
    }
    });
    c();
    f();
    r();
    m();
    (function () {
        function c(a, f) {
            var g = j(e)[1];
            if (e && d(g))return b.ready(function () {
                b.trigger("thread.topViewed")
            }), typeof f == "function" ? f() : !0;
            return !1
        }

        var e = n.getElementById(b.config - fluid_id);
        c() || b.events.debounce(a, "scroll", c, 250)
    })()
})(this);