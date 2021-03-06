/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

(function (l) {
    var w = function (j) {
        function l(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function r(a) {
            this.tail = this.string = a;
            this.pos = 0
        }

        function m(a, b) {
            this.view = a || {};
            this.parent = b;
            this._cache = {}
        }

        function k() {
            this.clearCache()
        }

        function t(a, b, c, f) {
            for (var d = "", g, e, k = 0, l = a.length; k < l; ++k)switch (g = a[k], e = g[1], g[0]) {
                case "#":
                    e = c.lookup(e);
                    if ("object" === typeof e)if (x(e))for (var n = 0, h = e.length; n < h; ++n)d += t(g[4], b, c.push(e[n]), f); else e && (d += t(g[4], b, c.push(e), f)); else"function" === typeof e ?
                        (g = null == f ? null : f.slice(g[3], g[5]), e = e.call(c.view, g, function (a) {
                            return b.render(a, c)
                        }), null != e && (d += e)) : e && (d += t(g[4], b, c, f));
                    break;
                case "^":
                    e = c.lookup(e);
                    if (!e || x(e) && 0 === e.length)d += t(g[4], b, c, f);
                    break;
                case ">":
                    e = b.getPartial(e);
                    "function" === typeof e && (d += e(c));
                    break;
                case "&":
                    e = c.lookup(e);
                    null != e && (d += e);
                    break;
                case "name":
                    e = c.lookup(e);
                    null != e && (d += j.escape(e));
                    break;
                case "text":
                    d += e
            }
            return d
        }

        function s(a) {
            return[RegExp(l(a[0]) + "\\s*"), RegExp("\\s*" + l(a[1]))]
        }

        var w = /\s*/, y = /\s+/, A = /\S/, z = /\s*=/,
            B = /\s*\}/, C = /#|\^|\/|>|\{|&|=|!/, D = RegExp.prototype.test, E = Object.prototype.toString, x = Array.isArray || function (a) {
                return"[object Array]" === E.call(a)
            }, F = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;"};
        r.prototype.eos = function () {
            return"" === this.tail
        };
        r.prototype.scan = function (a) {
            return(a = this.tail.match(a)) && 0 === a.index ? (this.tail = this.tail.substring(a[0].length), this.pos += a[0].length, a[0]) : ""
        };
        r.prototype.scanUntil = function (a) {
            var b = this.tail.search(a);
            switch (b) {
                case -1:
                    a =
                        this.tail;
                    this.pos += this.tail.length;
                    this.tail = "";
                    break;
                case 0:
                    a = "";
                    break;
                default:
                    a = this.tail.substring(0, b), this.tail = this.tail.substring(b), this.pos += b
            }
            return a
        };
        m.make = function (a) {
            return a instanceof m ? a : new m(a)
        };
        m.prototype.push = function (a) {
            return new m(a, this)
        };
        m.prototype.lookup = function (a) {
            var b = this._cache[a];
            if (!b) {
                if ("." == a)b = this.view; else for (var c = this; c;) {
                    if (0 < a.indexOf("."))for (var b = c.view, f = a.split("."), d = 0; b && d < f.length;)b = b[f[d++]]; else b = c.view[a];
                    if (null != b)break;
                    c = c.parent
                }
                this._cache[a] =
                    b
            }
            "function" === typeof b && (b = b.call(this.view));
            return b
        };
        k.prototype.clearCache = function () {
            this._cache = {};
            this._partialCache = {}
        };
        k.prototype.compile = function (a, b) {
            var c = this._cache[a];
            c || (c = j.parse(a, b), c = this._cache[a] = this.compileTokens(c, a));
            return c
        };
        k.prototype.compilePartial = function (a, b, c) {
            b = this.compile(b, c);
            return this._partialCache[a] = b
        };
        k.prototype.getPartial = function (a) {
            !(a in this._partialCache) && this._loadPartial && this.compilePartial(a, this._loadPartial(a));
            return this._partialCache[a]
        };
        k.prototype.compileTokens = function (a, b) {
            var c = this;
            return function (f, d) {
                if (d)if ("function" === typeof d)c._loadPartial = d; else for (var g in d)c.compilePartial(g, d[g]);
                return t(a, c, m.make(f), b)
            }
        };
        k.prototype.render = function (a, b, c) {
            return this.compile(a)(b, c)
        };
        j.name = "mustache.js";
        j.version = "0.7.2";
        j.tags = ["{{", "}}"];
        j.Scanner = r;
        j.Context = m;
        j.Writer = k;
        j.parse = function (a, b) {
            a = a || "";
            b = b || j.tags;
            "string" === typeof b && (b = b.split(y));
            if (2 !== b.length)throw Error("Invalid tags: " + b.join(", "));
            for (var c = s(b),
                     f = new r(a), d = [], g = [], e = [], k = !1, m = !1, n, h, p, u; !f.eos();) {
                n = f.pos;
                if (p = f.scanUntil(c[0])) {
                    u = 0;
                    for (var t = p.length; u < t; ++u)if (h = p.charAt(u), D.call(A, h) ? m = !0 : e.push(g.length), g.push(["text", h, n, n + 1]), n += 1, "\n" == h) {
                        if (k && !m)for (; e.length;)delete g[e.pop()]; else e = [];
                        m = k = !1
                    }
                }
                if (!f.scan(c[0]))break;
                k = !0;
                h = f.scan(C) || "name";
                f.scan(w);
                "=" === h ? (p = f.scanUntil(z), f.scan(z), f.scanUntil(c[1])) : "{" === h ? (p = f.scanUntil(RegExp("\\s*" + l("}" + b[1]))), f.scan(B), f.scanUntil(c[1]), h = "&") : p = f.scanUntil(c[1]);
                if (!f.scan(c[1]))throw Error("Unclosed tag at " +
                    f.pos);
                u = [h, p, n, f.pos];
                g.push(u);
                if ("#" === h || "^" === h)d.push(u); else if ("/" === h) {
                    if (0 === d.length)throw Error('Unopened section "' + p + '" at ' + n);
                    h = d.pop();
                    if (h[1] !== p)throw Error('Unclosed section "' + h[1] + '" at ' + n);
                } else if ("name" === h || "{" === h || "&" === h)m = !0; else if ("=" === h) {
                    b = p.split(y);
                    if (2 !== b.length)throw Error("Invalid tags at " + n + ": " + b.join(", "));
                    c = s(b)
                }
            }
            if (h = d.pop())throw Error('Unclosed section "' + h[1] + '" at ' + f.pos);
            for (var c = g, f = [], q, g = 0, e = c.length; g < e; ++g)if (d = c[g])"text" === d[0] && q && "text" ===
                q[0] ? (q[1] += d[1], q[3] = d[3]) : (q = d, f.push(d));
            q = f;
            f = c = [];
            d = [];
            e = 0;
            for (k = q.length; e < k; ++e)switch (g = q[e], g[0]) {
                case "#":
                case "^":
                    d.push(g);
                    f.push(g);
                    f = g[4] = [];
                    break;
                case "/":
                    d.pop()[5] = g[2];
                    f = 0 < d.length ? d[d.length - 1][4] : c;
                    break;
                default:
                    f.push(g)
            }
            return c
        };
        j.escape = function (a) {
            return String(a).replace(/[&<>"'\/]/g, function (a) {
                return F[a]
            })
        };
        var v = new k;
        j.clearCache = function () {
            return v.clearCache()
        };
        j.compile = function (a, b) {
            return v.compile(a, b)
        };
        j.compilePartial = function (a, b, c) {
            return v.compilePartial(a,
                b, c)
        };
        j.compileTokens = function (a, b) {
            return v.compileTokens(a, b)
        };
        j.render = function (a, b, c) {
            return v.render(a, b, c)
        };
        j.to_html = function (a, b, c, f) {
            a = j.render(a, b, c);
            if ("function" === typeof f)f(a); else return a
        }
    };
    if ("object" === typeof exports && exports)w(exports); else {
        var s = {};
        w(s);
        "function" === typeof define && define.amd ? define(s) : this.Mustache = s
    }
    l.mustache = function (j, l, r) {
        return Mustache.render(j, l, r)
    };
    l.fn.mustache = function (j, s) {
        return l(this).map(function (r, m) {
            var k = l.trim(l(m).html()), k = l.mustache(k, j,
                s);
            return l(k).get()
        })
    }
})(jQuery);