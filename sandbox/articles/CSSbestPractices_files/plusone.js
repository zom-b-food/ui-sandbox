var gapi = window.gapi = window.gapi || {};
gapi._bs = new Date().getTime();
(function () {
    var j = void 0, l = !0, m = null, n = !1, aa = encodeURIComponent, q = window, ba = Object, ca = parseInt, s = String, t = document, u = "push", w = "test", da = "exec", ea = "width", x = "replace", fa = "getElementById", y = "indexOf", ga = "readyState", A = "createElement", B = "setAttribute", ia = "getElementsByTagName", C = "length", ja = "size", F = "location", G = "style", ka = "call", H = "getAttribute", I = "href", la = "action", J = "apply", ma = "parentNode", na = "height", K = "join", L = "toLowerCase";
    var M = q, N = t, oa = M[F], pa = function () {
    }, qa = /\[native code\]/, O = function (a, b, c) {
        return a[b] = a[b] || c
    }, ra = function (a) {
        for (var b = 0; b < this[C]; b++)if (this[b] === a)return b;
        return-1
    }, sa = /&/g, ta = /</g, ua = />/g, va = /"/g, wa = /'/g, xa = function (a) {
        return s(a)[x](sa, "&amp;")[x](ta, "&lt;")[x](ua, "&gt;")[x](va, "&quot;")[x](wa, "&#39;")
    }, R = function () {
        var a;
        if ((a = ba.create) && qa[w](a))a = a(m); else {
            a = {};
            for (var b in a)a[b] = j
        }
        return a
    }, S = function (a, b) {
        return ba.prototype.hasOwnProperty[ka](a, b)
    }, T = function (a, b) {
        var a = a || {}, c;
        for (c in a)S(a,
            c) && (b[c] = a[c])
    }, U = O(M, "gapi", {});
    var ya = function (a, b, c) {
        var e = RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g"), b = RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
        if (a = a && (e[da](a) || b[da](a)))try {
            c = decodeURIComponent(a[2])
        } catch (d) {
        }
        return c
    }, za = /^([^?#]*)(\?([^#]*))?(\#(.*))?$/, Aa = function (a) {
        var b = [];
        if (a)for (var c in a)S(a, c) && a[c] != m && b[u](aa(c) + "=" + aa(a[c]));
        return b
    }, Ba = function (a, b, c) {
        var a = a.match(za), e = R();
        e.n = a[1];
        e.d = a[3] ? [a[3]] : [];
        e.c = a[5] ? [a[5]] : [];
        e.d[u][J](e.d, Aa(b));
        e.c[u][J](e.c, Aa(c));
        return e.n + (0 < e.d[C] ? "?" + e.d[K]("&") : "") +
            (0 < e.c[C] ? "#" + e.c[K]("&") : "")
    };
    var Ca = function (a, b, c) {
        if (M[b + "EventListener"])M[b + "EventListener"]("message", a, n); else if (M[c + "tachEvent"])M[c + "tachEvent"]("onmessage", a)
    };
    var V;
    V = O(M, "___jsl", R());
    O(V, "I", 0);
    O(V, "hel", 10);
    var Da = function (a) {
        return!V.dpo ? ya(a, "jsh", V.h) : V.h
    }, Ea = function (a) {
        return O(O(V, "H", R()), a, R())
    };
    var Fa = O(V, "perf", R()), Ha = O(Fa, "g", R());
    O(Fa, "i", R());
    var Ia = O(Fa, "r", []);
    R();
    R();
    var W = function (a, b, c) {
        Ha[a] = !b && Ha[a] || c || (new Date).getTime();
        "function" === typeof Ia ? Ia(a, j, j) : Ia[u]([a, j, j])
    };
    var Ja = R(), Ka = [], X;
    X = {b: "callback", l: "sync", j: "config", e: "_c", g: "h", o: "platform", i: "jsl", TIMEOUT: "timeout", k: "ontimeout"};
    Ka[u]([X.i, function (a) {
        for (var b in a)if (S(a, b)) {
            var c = a[b];
            "object" == typeof c ? V[b] = O(V, b, []).concat(c) : O(V, b, c)
        }
        if (a = a.u)b = O(V, "us", []), b[u](a), (c = /^https:(.*)$/[da](a)) && b[u]("http:" + c[1]), O(V, "u", a)
    }]);
    var La = decodeURI("%73cript");
    Ja.m = function (a) {
        var b = V.ms || "https://apis.google.com", a = a[0];
        if (!a || 0 <= a[y](".."))throw"Bad hint";
        return b + "/" + a[x](/^\//, "")
    };
    var Ma = function (a) {
        return a[K](",")[x](/\./g, "_")[x](/-/g, "_")
    }, Na = function (a, b) {
        for (var c = [], e = 0; e < a[C]; ++e) {
            var d = a[e];
            d && 0 > ra[ka](b, d) && c[u](d)
        }
        return c
    }, Oa = /[@"'<>#\?&%]/, Pa = /^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/, Qa = /\/cb=/g, Ra = function (a) {
        var b = N[A](La);
        b[B]("src", a);
        b.async = "true";
        a = N[ia](La)[0];
        a[ma].insertBefore(b, a)
    }, Ta = function (a, b) {
        var c = b || {};
        "function" == typeof b && (c = {}, c[X.b] = b);
        var e = c, d = e && e[X.e];
        if (d)for (var f = 0; f < Ka[C]; f++) {
            var g = Ka[f][0], h = Ka[f][1];
            h && S(d, g) && h(d[g],
                a, e)
        }
        if (!(e = c[X.g]))if (e = Da(oa[I]), !e)throw"Bad hint";
        var i = e, p = c[X.b], k = c[X.j], d = c[X.TIMEOUT], v = c[X.k], r = m, D = n;
        if (d && !v || !d && v)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
        var e = O(Ea(i), "r", []).sort(), z = O(Ea(i), "L", []).sort(), ha = function (a) {
            if (D)return 0;
            M.clearTimeout(r);
            z[u][J](z, E);
            var b = ((U || {}).config || {}).update;
            b ? b(k) : k && O(V, "cu", [])[u](k);
            a && Sa(function () {
                var b;
                b = i === Da(oa[I]) ? O(U, "_", R()) : R();
                b = O(Ea(i), "_", b);
                a(b)
            });
            p && p();
            return 1
        };
        0 < d && (r = M.setTimeout(function () {
            D =
                l;
            v()
        }, d));
        if (a) {
            d = a.split(":").sort();
            f = [];
            g = j;
            for (h = 0; h < d[C]; h++) {
                var Z = d[h];
                Z != g && f[u](Z);
                g = Z
            }
            d = f
        } else d = [];
        var E = Na(d, z);
        if (!E[C])return ha();
        var E = Na(d, e), P = O(V, "CP", []), Q = P[C];
        P[Q] = function (a) {
            if (!a)return 0;
            var b = function () {
                P[Q] = m;
                return ha(a)
            };
            if (Q > 0 && P[Q - 1])P[Q] = b; else for (b(); b = P[++Q];)if (!b())break
        };
        if (!E[C])return P[Q](pa);
        var Ga = "loaded_" + V.I++;
        U[Ga] = function (a) {
            P[Q](a);
            U[Ga] = m
        };
        d = i.split(";");
        d = (f = Ja[d.shift()]) && f(d);
        if (!d)throw"Bad hint:" + i;
        f = d = d[x]("__features__", Ma(E))[x](/\/$/,
            "") + (e[C] ? "/ed=1/exm=" + Ma(e) : "") + ("/cb=gapi." + Ga);
        g = f.match(Qa);
        if (!g || !(1 === g[C] && Pa[w](f) && !Oa[w](f)))throw"Bad URL " + d;
        e[u][J](e, E);
        c[X.l] || M.___gapisync ? (c = d, "loading" != N[ga] ? Ra(c) : N.write("<" + La + ' src="' + encodeURI(c) + '"></' + La + ">")) : Ra(d)
    };
    var Sa = function (a) {
        if (V.hee && 0 < V.hel)try {
            return a()
        } catch (b) {
            V.hel--, Ta("debug_error", function () {
                q.___jsl.hefn(b)
            })
        } else return a()
    };
    U.load = function (a, b) {
        return Sa(function () {
            return Ta(a, b)
        })
    };
    var Ua = function () {
        return q.___jsl = q.___jsl || {}
    }, Va = function (a) {
        var b = Ua();
        b[a] = b[a] || [];
        return b[a]
    }, Y = function (a) {
        var b = Ua();
        b.cfg = !a && b.cfg || {};
        return b.cfg
    }, Wa = function (a) {
        return"object" === typeof a && /\[native code\]/[w](a[u])
    }, Xa = function (a, b) {
        if (b)for (var c in b)b.hasOwnProperty(c) && (a[c] && b[c] && "object" === typeof a[c] && "object" === typeof b[c] && !Wa(a[c]) && !Wa(b[c]) ? Xa(a[c], b[c]) : b[c] && "object" === typeof b[c] ? (a[c] = Wa(b[c]) ? [] : {}, Xa(a[c], b[c])) : a[c] = b[c])
    }, $ = function (a) {
        if (!a)return Y();
        for (var a =
            a.split("/"), b = Y(), c = 0, e = a[C]; b && "object" === typeof b && c < e; ++c)b = b[a[c]];
        return c === a[C] && b !== j ? b : j
    };
    var Ya = ["left", "right"], Za = "inline bubble none only pp vertical-bubble".split(" "), $a = function (a) {
            var b = t[A]("div"), c = t[A]("a");
            c.href = a;
            b.appendChild(c);
            b.innerHTML = b.innerHTML;
            return b.firstChild[I]
        }, ab = function () {
            return q[F].origin || q[F].protocol + "//" + q[F].host
        }, bb = function (a, b, c, e) {
            if (a)a = $a(a); else a:{
                a = e || "canonical";
                b = t[ia]("link");
                c = 0;
                for (e = b[C]; c < e; c++) {
                    var d = b[c], f = d[H]("rel");
                    if (f && f[L]() == a && (d = d[H]("href")))if (d = $a(d)) {
                        a = d;
                        break a
                    }
                }
                a = q[F][I]
            }
            return a
        }, cb = function (a, b) {
            if ("string" == typeof a) {
                var c;
                for (c = 0; c < b[C]; c++)if (b[c] == a[L]())return a[L]()
            }
        }, db = function (a) {
            return cb(a, Ya)
        }, eb = function (a) {
            return cb(a, Za)
        }, fb = {tall: {"true": {width: 50, height: 60}, "false": {width: 50, height: 24}}, small: {"false": {width: 24, height: 15}, "true": {width: 70, height: 15}}, medium: {"false": {width: 32, height: 20}, "true": {width: 90, height: 20}}, standard: {"false": {width: 38, height: 24}, "true": {width: 106, height: 24}}}, gb = function (a) {
            return"string" == typeof a ? "" != a && "0" != a && "false" != a[L]() : !!a
        }, hb = function (a) {
            var b = ca(a, 10);
            if (b == a)return s(b)
        },
        ib = function (a) {
            if (gb(a))return"true"
        }, jb = function (a) {
            return"string" == typeof a && fb[a[L]()] ? a[L]() : "standard"
        }, kb = {href: [bb, "url"], width: [hb], size: [jb], resize: [ib], autosize: [ib], count: [function (a, b) {
            return"tall" == jb(b[ja]) ? "true" : b.count == m || gb(b.count) ? "true" : "false"
        }], db: [function (a, b, c) {
            a == m && c && (a = c.db, a == m && (a = c.gwidget && c.gwidget.db));
            return gb(a) ? 1 : j
        }], ecp: [function (a, b, c) {
            a == m && c && (a = c.ecp, a == m && (a = c.gwidget && c.gwidget.ecp));
            if (gb(a))return"true"
        }], textcolor: [function (a) {
            if ("string" == typeof a &&
                a.match(/^[0-9A-F]{6}$/i))return a
        }], drm: [ib], recommendations: [], fu: [], ad: [ib], cr: [hb], ag: [hb], "fr-ai": [], "fr-sigh": []};
    var lb = {badge: {width: 300, height: 131}, smallbadge: {width: 300, height: 69}}, mb = function (a) {
        return"string" == typeof a && lb[a[L]()] ? a[L]() : "badge"
    };
    var nb = {allowtransparency: "true", frameborder: "0", hspace: "0", marginheight: "0", marginwidth: "0", scrolling: "no", style: "", tabindex: "0", vspace: "0", width: "100%"}, ob = 0;
    var pb = /:([a-zA-Z_]+):/g, qb = {style: "position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"}, rb = "onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "), sb = {}, tb = m, ub = O(V, "WI", R()), vb = function () {
        var a = $("googleapis.config/sessionIndex");
        a == m && (a = q.__X_GOOG_AUTHUSER);
        if (a == m) {
            var b = q.google;
            b && (a = b.authuser)
        }
        a == m && (a = j, a == m && (a = q[F][I]), a = a ? ya(a, "authuser") || m : m);
        return a == m ? m : s(a)
    }, wb = function (a, b) {
        if (!tb) {
            var c = $("iframes/:socialhost:"), e = vb() || "0", d = vb();
            tb = {socialhost: c,
                session_index: e, session_prefix: d !== j && d !== m && "" !== d ? "u/" + d + "/" : ""}
        }
        return tb[b] || ""
    }, xb = function (a, b) {
        var c = {};
        T(b, c);
        c.hl = $("lang") || "en-US";
        c.origin = ab();
        if ("plus" === a) {
            var e;
            e = bb(c[I], 0, 0, b[la] ? m : "publisher");
            c.url = e;
            delete c[I];
            c.size = mb(b[ja]);
            e = b[ea];
            c.width = !e ? b[la] ? j : lb[mb(b[ja])][ea] : ca(e, 10);
            e = b[na];
            c.height = !e ? b[la] ? j : lb[mb(b[ja])][na] : ca(e, 10)
        }
        return c
    }, Ab = function (a, b, c, e) {
        if (!b[ma])return m;
        if (!e) {
            for (var e = R(), d = 0 != b.nodeName[L]()[y]("g:"), f = 0, g = b.attributes[C]; f < g; f++) {
                var h = b.attributes[f],
                    i = h.name, h = h.value;
                0 <= ra[ka](yb, i) || (d && 0 != i[y]("data-") || "null" === h) || (d && (i = i.substr(5)), e[i[L]()] = h)
            }
            d = b[G];
            (f = zb(d && d[na])) && (e.height = s(f));
            (d = zb(d && d[ea])) && (e.width = s(d))
        }
        d = a;
        "plus" == a && e[la] && (d = a + "_" + e[la]);
        (d = $("iframes/" + d + "/url")) || (d = ":socialhost:/_/widget/render/" + a);
        d = d[x](pb, wb);
        f = ((sb[a] || [])[0] || xb)(a, e);
        f.hl = $("lang") || "en-US";
        V.ILI && (f.iloader = "1");
        delete f["data-onload"];
        delete f.rd;
        g = $("inline/css");
        "undefined" !== typeof g && (0 < c && g >= c) && (f.ic = "1");
        var g = /^#|^fr-/, c = {}, p;
        for (p in f)S(f,
            p) && g[w](p) && (c[p[x](g, "")] = f[p], delete f[p]);
        p = [].concat(rb);
        g = $("iframes/" + a + "/methods");
        "object" === typeof g && qa[w](g[u]) && (p = p.concat(g));
        for (var k in e)if (S(e, k) && /^on/[w](k) && ("plus" != a || "onconnect" != k))p[u](k), delete f[k];
        c._methods = p[K](",");
        d = Ba(d, f, c);
        e.rd ? k = b : (k = t[A]("div"), b[B]("data-gapistub", l), k[G].cssText = "position:absolute;width:100px;left:-10000px;", b[ma].insertBefore(k, b));
        k.id || (b = k, O(ub, a, 0), p = "___" + a + "_" + ub[a]++, b.id = p);
        b = R();
        b[">type"] = a;
        T(e, b);
        k[B]("data-gwattr", Aa(b)[K](":"));
        var v;
        p = d;
        a = k;
        b = {attributes: qb};
        k = a.ownerDocument;
        f = 0;
        do c = b.id || ["I", ob++, "_", (new Date).getTime()][K](""); while (k[fa](c) && 5 > ++f);
        if (!(5 > f))throw Error("Error creating iframe id");
        g = k[F][I];
        f = R();
        (i = ya(g, "_bsh", V.bsh)) && (f._bsh = i);
        (g = Da(g)) && (f.jsh = g);
        var r, g = R();
        g.id = c;
        g.parent = k[F].protocol + "//" + k[F].host;
        b.hintInFragment ? T(f, g) : r = f;
        p = Ba(p, r, g);
        r = R();
        T(nb, r);
        r.name = r.id = c;
        T(b.attributes, r);
        r.src = p;
        try {
            v = k[A]('<iframe frameborder="' + xa(r.frameborder) + '" scrolling="' + xa(r.scrolling) + '" name="' + xa(r.name) +
                '"/>')
        } catch (D) {
            v = k[A]("iframe")
        }
        for (var z in r)b = r[z], "style" == z && "object" === typeof b ? T(b, v[G]) : v[B](z, r[z]);
        a.innerHTML = "";
        a.appendChild(v);
        r.allowtransparency && (v.allowTransparency = l);
        z = {};
        z.userParams = e;
        z.url = d;
        z.iframeNode = v;
        z.id = v[H]("id");
        return z
    }, yb = ["style", "data-gapiscan"], zb = function (a) {
        var b = j;
        "number" === typeof a ? b = a : "string" === typeof a && (b = ca(a, 10));
        return b
    }, Bb = function () {
    };
    sb.plusone = [function (a, b) {
        var c = {};
        T(kb, c);
        c.source = [m, "source"];
        c.expandTo = [m, "expandTo"];
        c.align = [db];
        c.annotation = [eb];
        c.origin = [ab];
        var e = {}, d = $(), f;
        for (f in c)c.hasOwnProperty(f) && (e[c[f][1] || f] = (c[f] && c[f][0] || function (a) {
            return a
        })(b[f[L]()], b, d));
        return e
    }];
    var Cb, Db = /(?:^|\s)g-((\S)*)(?:$|\s)/, Eb = R(), Fb = O(V, "FW", []), Hb = function (a, b) {
        Gb(j, n, a, b)
    }, Gb = function (a, b, c, e) {
        W("ps0", l);
        var c = ("string" === typeof c ? t[fa](c) : c) || N, d, f = N.documentMode;
        if (c.querySelectorAll && (!f || 8 < f)) {
            if (e)d = [e]; else if (qa[w](ba.keys))d = ba.keys(Eb); else {
                f = [];
                for (d in Eb)S(Eb, d) && f[u](d);
                d = f
            }
            for (var f = [], g = 0; g < d[C]; g++) {
                var h = d[g];
                f[u](".g-" + h, "g\\:" + h)
            }
            d = c.querySelectorAll(f[K](","))
        } else d = c[ia]("*");
        c = R();
        for (f = 0; f < d[C]; f++) {
            g = d[f];
            var i = g, h = e, p = i.nodeName[L](), k = j;
            i[H]("data-gapiscan") ?
                h = m : (0 == p[y]("g:") ? k = p.substr(2) : (i = (i = s(i.className || i[H]("class"))) && Db[da](i)) && (k = i[1]), h = k && Eb[k] && (!h || k === h) ? k : m);
            h && (g[B]("data-gapiscan", l), O(c, h, [])[u](g))
        }
        if (b)for (var v in c) {
            b = c[v];
            for (e = 0; e < b[C]; e++)b[e][B]("data-onload", l)
        }
        for (var r in c)Fb[u](r);
        W("ps1", l);
        v = Fb[K](":");
        U.load(v, a);
        if (Ib(Cb || {}))for (var D in c)Jb(D); else {
            a = [];
            for (D in c) {
                r = c[D];
                b = 0;
                for (e = r[C]; b < e; b++)if (d = Ab(D, r[b], e))(f = d.id) && a[u](f), Jb(D, d)
            }
            Kb(v, a)
        }
    }, Lb = function (a) {
        var b = O(U, a, {});
        b.go || (b.go = function (b) {
            return Hb(b,
                a)
        }, b.render = function (b, e) {
            var d = e || {};
            d.type = a;
            var f = d, d = f.type;
            delete f.type;
            if (!d || !Eb[d])throw Error("Unsupported widget " + d || "");
            var g = ("string" === typeof b ? t[fa](b) : b) || j;
            if (g && 1 === g.nodeType) {
                var h = {}, i;
                for (i in f)S(f, i) && (h[i[L]()] = f[i]);
                f = h;
                f.rd = 1;
                i = Ab(d, g, 0, f);
                Jb(d, i);
                (i = i.id) && Kb(d, [i])
            }
        })
    };
    var Jb = function (a, b) {
        var c = O(V, "watt", R())[a];
        b && c ? c(b) : U.load(a, function () {
            var c = O(V, "watt", R())[a], d = b && b.iframeNode;
            !d || !c ? (0, U[a].go)(d && d[ma]) : c(b)
        })
    }, Ib = function () {
        return n
    }, Kb = function () {
    };
    O(U, "platform", {}).go = Hb;
    Ib = function (a) {
        for (var b = [X.e, X.i, X.g], c = 0; c < b[C] && a; c++)a = a[b[c]];
        b = Da(oa[I]);
        return!a || 0 != a[y]("n;") && 0 != b[y]("n;") && a !== b
    };
    Kb = function (a, b) {
        var c = function () {
            Ca(e, "remove", "de")
        }, e = function (e) {
            var g = e.data, h = e.origin;
            if (Mb(g, b)) {
                var i = d;
                d = n;
                i && W("rqe");
                Ta(a, function () {
                    i && W("rqd");
                    c();
                    for (var a = O(V, "RPMQ", []), b = 0; b < a[C]; b++)a[b]({data: g, origin: h})
                })
            }
        };
        if (!(0 === b[C] || !q.JSON || !q.JSON.parse)) {
            var d = l;
            Ca(e, "add", "at");
            Ta(a, c)
        }
    };
    Ka[u]([X.o, function (a, b, c) {
        Cb = c;
        b && Fb[u](b);
        for (b = 0; b < a[C]; b++)Eb[a[b]] = 1;
        for (b = 0; b < a[C]; b++)Lb(a[b]);
        if (b = q.__GOOGLEAPIS)b.googleapis && !b["googleapis.config"] && (b["googleapis.config"] = b.googleapis), O(V, "ci", [])[u](b), q.__GOOGLEAPIS = j;
        Y(l);
        var e = q.___gcfg, b = Va("cu");
        if (e && e !== q.___gu) {
            var d = {};
            Xa(d, e);
            b[u](d);
            q.___gu = e
        }
        var e = Va("cu"), f = t.scripts || t[ia]("script") || [], d = [], g = [], h = Ua().u;
        h && g[u](h);
        Ua().us && g[u][J](g, Ua().us);
        for (h = 0; h < f[C]; ++h)for (var i = f[h], p = 0; p < g[C]; ++p)i.src && 0 == i.src[y](g[p]) &&
        d[u](i);
        0 == d[C] && f[f[C] - 1].src && d[u](f[f[C] - 1]);
        for (f = 0; f < d[C]; ++f)if (!d[f][H]("gapi_processed")) {
            d[f][B]("gapi_processed", l);
            (g = d[f]) ? (h = g.nodeType, g = 3 == h || 4 == h ? g.nodeValue : g.textContent || g.innerText || g.innerHTML || "") : g = j;
            if (g) {
                for (; 0 == g.charCodeAt(g[C] - 1);)g = g.substring(0, g[C] - 1);
                h = j;
                try {
                    h = (new Function("return (" + g + "\n)"))()
                } catch (k) {
                }
                if ("object" === typeof h)g = h; else {
                    try {
                        h = (new Function("return ({" + g + "\n})"))()
                    } catch (v) {
                    }
                    g = "object" === typeof h ? h : {}
                }
            } else g = j;
            g && e[u](g)
        }
        f = Va("cd");
        e = 0;
        for (d = f[C]; e <
            d; ++e)Xa(Y(), f[e]);
        f = Va("ci");
        e = 0;
        for (d = f[C]; e < d; ++e)Xa(Y(), f[e]);
        e = 0;
        for (d = b[C]; e < d; ++e)Xa(Y(), b[e]);
        if ("explicit" != $("parsetags")) {
            b = O(V, "sws", []);
            b[u][J](b, a);
            var r;
            if (c) {
                var D = c[X.b];
                D && (r = function () {
                    M.setTimeout(D, 0)
                }, delete c[X.b])
            }
            if ("complete" !== N[ga])try {
                Gb(j, l)
            } catch (z) {
            }
            var ha = function () {
                Gb(r, l)
            };
            if ("complete" === N[ga])ha(); else {
                var Z = n, E = function () {
                    if (!Z)return Z = l, ha[J](this, arguments)
                };
                M.addEventListener ? (M.addEventListener("load", E, n), M.addEventListener("DOMContentLoaded", E, n)) : M.attachEvent &&
                    (M.attachEvent("onreadystatechange", function () {
                        "complete" === N[ga] && E[J](this, arguments)
                    }), M.attachEvent("onload", E))
            }
        }
    }]);
    var Nb = /^\{h\:'/, Ob = /^!_/, Mb = function (a, b) {
        a = s(a);
        if (Nb[w](a))return l;
        a = a[x](Ob, "");
        if (!/^\{/[w](a))return n;
        try {
            var c = q.JSON.parse(a)
        } catch (e) {
            return n
        }
        if (!c)return n;
        var d = c.f;
        return c.s && d && -1 != ra[ka](b, d) ? ("_renderstart" === c.s && (c = c.a && c.a[1], d = N[fa](d), c && d && Bb(d[ma], d, c)), l) : n
    };
    Bb = function (a, b, c) {
        if (c[ea] && c[na]) {
            a[G].cssText = "";
            var e = c[ea], c = c[na], d = a[G];
            d.textIndent = "0";
            d.margin = "0";
            d.padding = "0";
            d.background = "transparent";
            d.borderStyle = "none";
            d.cssFloat = "none";
            d.styleFloat = "none";
            d.lineHeight = "normal";
            d.fontSize = "1px";
            d.verticalAlign = "baseline";
            a[G].display = "inline-block";
            a = b[G];
            a.position = "static";
            a.left = 0;
            a.top = 0;
            a.visibility = "visible";
            e && (a.width = e + "px");
            c && (a.height = c + "px");
            b["data-csi-wdt"] = (new Date).getTime()
        }
    };
    W("bs0", l, q.gapi._bs);
    W("bs1", l);
    delete q.gapi._bs;
})();
gapi.load("plusone", {callback: window["gapi_onload"], _c: {"platform": ["plusone", "plus", "additnow", "card"], "jsl": {"u": "https://apis.google.com/js/plusone.js", "dpo": false, "hee": false, "ci": {"services": {}, "inline": {"css": 2}, "lexps": [34, 69, 71, 65, 36, 76, 77, 40, 15, 45, 17, 51, 61, 60, 30], "oauth-flow": {}, "report": {}, "iframes": {"additnow": {"url": "https://apis.google.com/additnow/additnow.html?bsv=pr"}, "plus": {"methods": ["onauth"], "url": ":socialhost:/u/:session_index:/_/pages/badge?bsv=pr"}, ":socialhost:": "https://plusone.google.com", "plus_circle": {"params": {"url": ""}, "url": ":socialhost:/:session_prefix:_/widget/plus/circle?bsv=pr"}, "evwidget": {"params": {"url": ""}, "url": ":socialhost:/:session_prefix:_/events/widget?bsv=pr"}, ":signuphost:": "https://plus.google.com", "plusone": {"preloadUrl": ["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"], "params": {"count": "", "url": "", "size": ""}, "url": ":socialhost:/:session_prefix:_/+1/fastbutton?bsv=pr"}, "plus_share": {"params": {"url": ""}, "url": ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=pr"}}, "isPlusUser": false, "debug": {"host": "https://plusone.google.com", "reportExceptionRate": 0, "rethrowException": false}, "csi": {"rate": 0}, "googleapis.config": {"mobilesignupurl": "https://m.google.com/app/plus/oob?"}}, "h": "m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=jtaJmOBpUIw.en_US./sv=1/am=!CRLPOQbbTO-YhNdiPQ/d=1/rs=AItRSTNaTn_i9aG7AGnc0xpzrdIIxRG0aQ", "fp": "b74456a598570307fa98aca6b96f7b2cf1aaaff0"}, "fp": "b74456a598570307fa98aca6b96f7b2cf1aaaff0"}});