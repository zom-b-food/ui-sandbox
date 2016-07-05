/*1348454300,173217321*/

if (window.CavalryLogger) {
    CavalryLogger.start_js(["PXjzW"]);
}


window.__DEV__ = window.__DEV__ || 0;


if (JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]')JSON.stringify = function (a) {
    var b = /\u2028/g, c = /\u2029/g;
    return function (d, e, f) {
        var g = a.call(this, d, e, f);
        if (g) {
            if (-1 < g.indexOf('\u2028'))g = g.replace(b, '\\u2028');
            if (-1 < g.indexOf('\u2029'))g = g.replace(c, '\\u2029');
        }
        return g;
    };
}(JSON.stringify);


(function (a) {
    if (a.require)return;
    var b = Object.prototype.toString, c = {}, d = {}, e = {}, f = 0, g = 1, h = 2, i = Object.prototype.hasOwnProperty;

    function j(u) {
        if (a.ErrorUtils && !a.ErrorUtils.inGuard())return ErrorUtils.applyWithGuard(j, this, arguments);
        var v = c[u], w, x, y;
        if (!c[u]) {
            y = 'Requiring unknown module "' + u + '"';
            throw new Error(y);
        }
        if (v.waiting && v.special & h)m();
        if (v.waiting) {
            y = 'Requiring module "' + u + '" with unresolved dependencies';
            throw new Error(y);
        }
        if (!v.exports) {
            var z = v.exports = {}, aa = v.factory;
            if (typeof aa === 'string') {
                var ba = '(' + aa + ')';
                aa = eval.apply(window, [ba]);
            }
            if (b.call(aa) === '[object Function]') {
                var ca = [], da = v.dependencies, ea = da.length;
                if (v.special & h)ea = Math.min(ea, aa.length);
                for (x = 0; x < ea; x++) {
                    w = da[x];
                    ca.push(w === 'module' ? v : (w === 'exports' ? z : j(w)));
                }
                var fa = aa.apply(v.context || a, ca);
                if (fa)v.exports = fa;
            } else v.exports = aa;
        }
        if (v.refcount-- === 1)delete c[u];
        return v.exports;
    }

    function k(u, v, w, x, y, z) {
        if (v === undefined) {
            v = [];
            w = u;
            u = o();
        } else if (w === undefined) {
            w = v;
            if (b.call(u) === '[object Array]') {
                v = u;
                u = o();
            } else v = [];
        }
        var aa = c[u];
        if (aa) {
            if (z)aa.refcount += z;
            return;
        } else if (!v && !w && z) {
            e[u] = (e[u] || 0) + z;
            return;
        } else {
            aa = {id: u};
            aa.refcount = (e[u] || 0) + (z || 0);
            delete e[u];
        }
        aa.factory = w;
        aa.dependencies = v;
        aa.context = y;
        aa.special = x;
        c[u] = aa;
        p(u);
    }

    function l(u, v, w) {
        k(u, v, undefined, g, w, 1);
    }

    function m() {
        var u = {}, v;
        for (v in d)if (i.call(d, v))if (c[v] && !u[v] && c[v].special & h)n({}, v, u);
    }

    function n(u, v, w) {
        w[v] = 1;
        var x = d[v], y;
        if (!x)return;
        u[v] = 1;
        for (y in x)if (i.call(x, y)) {
            if (!c[y] || !c[y].special & h)continue;
            if (u[y]) {
                delete x[y];
                c[y].waiting--;
                if (!c[y].waiting)q(y);
            } else n(u, y, w);
        }
        u[v] = 0;
    }

    function o() {
        return '__mod__' + f++;
    }

    function p(u) {
        var v = c[u], w = 0;
        for (var x = 0; x < v.dependencies.length; x++) {
            var y = v.dependencies[x];
            if (!c[y] || c[y].waiting) {
                d[y] || (d[y] = {});
                if (!d[y][u])w++;
                d[y][u] = 1;
            }
        }
        v.waiting = w;
        if (!w)q(u);
    }

    function q(u) {
        var v = c[u];
        if (v.special & g)j(u);
        var w = d[u], x = [];
        if (w) {
            delete d[u];
            for (var y in w)if (i.call(w, y))if (!--c[y].waiting)x.push(y);
        }
        for (var z = 0; z < x.length; z++)q(x[z]);
    }

    function r(u, v) {
        c[u] = {id: u};
        c[u].exports = v;
    }

    r('module', 0);
    r('exports', 0);
    r('define', k);
    r('global', a);
    r('require', j);
    r('requireDynamic', j);
    r('requireLazy', l);
    k.amd = {};
    a.define = k;
    a.require = j;
    a.requireDynamic = j;
    a.requireLazy = l;
    j.__debug = {modules: c, deps: d};
    var s = false, t = function (u, v, w, x) {
        k(u, v, w, x || h);
        if (c[u].waiting && !s)s = setTimeout(function () {
            m();
            s = false;
        }, 9);
    };
    a.__d = function (u, v, w, x) {
        v = ['global', 'require', 'requireDynamic', 'requireLazy', 'module', 'exports'].concat(v);
        t(u, v, w, x);
    };
    a.__e = a.__d;
})(this);
function bagofholding() {
}
function bagof(a) {
    return function () {
        return a;
    };
}
Array.prototype.reduce = null;
Array.prototype.reduceRight = null;
document.documentElement.className = document.documentElement.className.replace('no_js', '');
__d("SidebarPrelude", [], function (a, b, c, d, e, f) {
    var g = {addSidebarMode: function (h) {
        var i = document.documentElement;
        if (i.clientWidth > h)i.className = i.className + ' sidebarMode';
    }};
    e.exports = g;
});
__d("copyProperties", [], function (a, b, c, d, e, f) {
    function g(h, i, j, k, l, m, n) {
        h = h || {};
        var o = [i, j, k, l, m], p = 0, q;
        while (o[p]) {
            q = o[p++];
            for (var r in q)h[r] = q[r];
            if (q.hasOwnProperty && q.hasOwnProperty('toString') && (typeof q.toString != 'undefined') && (h.toString !== q.toString))h.toString = q.toString;
        }
        return h;
    }

    e.exports = g;
});
__d("Env", ["copyProperties"], function (a, b, c, d, e, f) {
    var g = b('copyProperties'), h = {start: Date.now()};
    if (a.Env) {
        g(h, a.Env);
        a.Env = undefined;
    }
    e.exports = h;
});
__d("ErrorUtils", ["Env"], function (a, b, c, d, e, f) {
    var g = b('Env'), h = [], i = [], j = 10, k = window.chrome && 'type' in new Error();

    function l(w) {
        if (!w) {
            return {};
        } else if (w._originalError)return w;
        var x = {line: w.lineNumber || w.line, message: w.message, name: w.name, script: w.fileName || w.sourceURL || w.script, stack: w.stackTrace || w.stack};
        x._originalError = w;
        if (k && /(\w{3,5}:\/\/[^:]+):(\d+)/.test(w.stack)) {
            x.script = RegExp.$1;
            x.line = parseInt(RegExp.$2, 10);
        }
        for (var y in x)(x[y] == null && delete x[y]);
        return x;
    }

    function m() {
        try {
            throw new Error();
        } catch (w) {
            var x = l(w).stack;
            return x && x.replace(/[\s\S]*__getTrace__.*\n/, '');
        }
    }

    function n(w, x) {
        w = l(w);
        !x;
        if (i.length < j)i.push(w);
        for (var y = 0; y < h.length; y++)try {
            h[y](w);
        } catch (z) {
        }
    }

    var o = false;

    function p() {
        return o;
    }

    function q() {
        o = false;
    }

    function r(w, x, y, z) {
        var aa = !o;
        if (aa)o = true;
        var ba;
        if (g.nocatch || (/nocatch/).test(location.search)) {
            ba = w.apply(x, y || []);
            if (aa)q();
            return ba;
        }
        try {
            ba = w.apply(x, y || []);
            if (aa)q();
            return ba;
        } catch (ca) {
            if (aa)q();
            var da = l(ca);
            if (z)z(da);
            if (w)da.callee = w.toString().substring(0, 100);
            if (y)da.args = String(y).substring(0, 100);
            n(da);
        }
    }

    function s(w) {
        return function () {
            return r(w, this, arguments);
        };
    }

    function t(w, x, y) {
        n({message: w, script: x, line: y}, true);
    }

    window.onerror = t;
    function u(w, x) {
        h.push(w);
        if (!x)i.forEach(w);
    }

    var v = {addListener: u, applyWithGuard: r, getTrace: m, guard: s, history: i, inGuard: p, normalizeError: l, onerror: t, reportError: n};
    e.exports = a.ErrorUtils = v;
});
__d("hasArrayNature", [], function (a, b, c, d, e, f) {
    function g(h) {
        return (!!h && (typeof h == 'object' || typeof h == 'function') && ('length' in h) && !('setInterval' in h) && (Object.prototype.toString.call(h) === "[object Array]" || ('callee' in h) || ('item' in h)));
    }

    e.exports = g;
});
__d("createArrayFrom", ["hasArrayNature"], function (a, b, c, d, e, f) {
    var g = b('hasArrayNature');

    function h(i) {
        if (!g(i))return [i];
        if (i.item) {
            var j = i.length, k = new Array(j);
            while (j--)k[j] = i[j];
            return k;
        }
        return Array.prototype.slice.call(i);
    }

    e.exports = h;
});
__d("Arbiter", ["ErrorUtils", "copyProperties", "createArrayFrom", "hasArrayNature"], function (a, b, c, d, e, f) {
    var g = b('ErrorUtils'), h = b('copyProperties'), i = b('createArrayFrom'), j = b('hasArrayNature');
    if (!window.async_callback)window.async_callback = function (m, n) {
        return m;
    };
    function k() {
        h(this, {_listeners: [], _events: {}, _callbacks: {}, _last_id: 1, _listen: {}, _index: {}});
        h(this, k);
    }

    h(k, {SUBSCRIBE_NEW: 'new', SUBSCRIBE_ALL: 'all', BEHAVIOR_EVENT: 'event', BEHAVIOR_PERSISTENT: 'persistent', BEHAVIOR_STATE: 'state', LIVEMESSAGE: 'livemessage', BOOTLOAD: 'bootload', FUNCTION_EXTENSION: 'function_ext', subscribe: function (m, n, o) {
        m = i(m);
        var p = m.some(function (x) {
            return !x || typeof(x) != 'string';
        });
        if (p)return null;
        o = o || k.SUBSCRIBE_ALL;
        var q = k._getInstance(this);
        q._listeners.push({callback: n, types: m});
        var r = q._listeners.length - 1;
        for (var s = 0; s < m.length; s++) {
            var t = m[s];
            if (!q._index[t])q._index[t] = [];
            q._index[t].push(r);
            if (o == k.SUBSCRIBE_ALL)if (t in q._events)for (var u = 0; u < q._events[t].length; u++) {
                var v = q._events[t][u], w = g.applyWithGuard(n, null, [t, v]);
                if (w === false) {
                    q._events[t].splice(u, 1);
                    u--;
                }
            }
        }
        return new l(q, r);
    }, unsubscribe: function (m) {
        m.unsubscribe();
    }, inform: g.guard(function (m, n, o) {
        var p = j(m);
        m = i(m);
        var q = k._getInstance(this), r = {};
        o = o || k.BEHAVIOR_EVENT;
        for (var s = 0; s < m.length; s++) {
            var t = m[s], u = null;
            if (o == k.BEHAVIOR_PERSISTENT) {
                u = q._events.length;
                if (!(t in q._events))q._events[t] = [];
                q._events[t].push(n);
                q._events[t]._stateful = false;
            } else if (o == k.BEHAVIOR_STATE) {
                u = 0;
                q._events[t] = [n];
                q._events[t]._stateful = true;
            } else if (t in q._events)q._events[t]._stateful = false;
            a.ArbiterMonitor && a.ArbiterMonitor.record('event', t, n, q);
            var v;
            if (q._index[t]) {
                var w = i(q._index[t]);
                for (var x = 0; x < w.length; x++) {
                    var y = q._listeners[w[x]];
                    if (y) {
                        v = g.applyWithGuard(y.callback, null, [t, n]);
                        if (v === false) {
                            if (u !== null)q._events[t].splice(u, 1);
                            break;
                        }
                    }
                }
            }
            q._updateCallbacks(t, n);
            a.ArbiterMonitor && a.ArbiterMonitor.record('done', t, n, q);
            r[t] = v;
        }
        return p ? r : r[m[0]];
    }), query: function (m) {
        var n = k._getInstance(this);
        if (!(m in n._events))return null;
        if (n._events[m].length)return n._events[m][0];
        return null;
    }, _instance: null, _getInstance: function (m) {
        if (m instanceof k)return m;
        if (!k._instance)k._instance = new k();
        return k._instance;
    }, registerCallback: function (m, n) {
        var o, p = 0, q = k._getInstance(this), r = false;
        if (typeof m == 'function') {
            o = q._last_id;
            q._last_id++;
            r = true;
        } else {
            if (!q._callbacks[m])return null;
            o = m;
        }
        if (j(n)) {
            var s = {};
            for (var t = 0; t < n.length; t++)s[n[t]] = 1;
            n = s;
        }
        for (var u in n) {
            try {
                if (q.query(u))continue;
            } catch (v) {
            }
            p += n[u];
            if (q._listen[u] === undefined)q._listen[u] = {};
            q._listen[u][o] = (q._listen[u][o] || 0) + n[u];
        }
        if (p === 0 && r) {
            g.applyWithGuard(m);
            return null;
        }
        if (!r) {
            q._callbacks[o].depnum += p;
        } else q._callbacks[o] = {callback: window.async_callback(m, 'arbiter'), depnum: p};
        return o;
    }, _updateCallbacks: function (m, n) {
        if (n === null || !this._listen[m])return;
        for (var o in this._listen[m]) {
            this._listen[m][o]--;
            if (this._listen[m][o] <= 0)delete this._listen[m][o];
            this._callbacks[o].depnum--;
            if (this._callbacks[o].depnum <= 0) {
                var p = this._callbacks[o].callback;
                delete this._callbacks[o];
                g.applyWithGuard(p);
            }
        }
    }});
    function l(m, n) {
        this._instance = m;
        this._id = n;
    }

    h(l.prototype, {unsubscribe: function () {
        var m = this._instance._listeners, n = m[this._id];
        if (!n)return;
        for (var o = 0; o < n.types.length; o++) {
            var p = n.types[o], q = this._instance._index[p];
            if (q)for (var r = 0; r < q.length; r++)if (q[r] == this._id) {
                q.splice(r, 1);
                if (q.length === 0)delete q[p];
                break;
            }
        }
        delete m[this._id];
    }});
    e.exports = k;
});
__d("ArbiterMixin", ["Arbiter"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = {_getArbiterInstance: function () {
        return this._arbiter || (this._arbiter = new g());
    }, inform: function (i, j, k) {
        return this._getArbiterInstance().inform(i, j, k);
    }, subscribe: function (i, j, k) {
        return this._getArbiterInstance().subscribe(i, j, k);
    }, unsubscribe: function (i) {
        this._getArbiterInstance().unsubscribe(i);
    }, registerCallback: function (i, j) {
        this._getArbiterInstance().registerCallback(i, j);
    }};
    e.exports = h;
});
__d("legacy:ArbiterMixin", ["ArbiterMixin"], function (a, b, c, d) {
    a.ArbiterMixin = b('ArbiterMixin');
}, 3);
__d("function-extensions", ["createArrayFrom"], function (a, b, c, d, e, f) {
    var g = b('createArrayFrom');
    Function.prototype.curry = function () {
        var h = g(arguments);
        return this.bind.apply(this, [null].concat(h));
    };
    Function.prototype.shield = function (h) {
        if (typeof this != 'function')throw new TypeError();
        var i = this.bind.apply(this, g(arguments));
        return function () {
            return i();
        };
    };
    Function.prototype.defer = function (h, i) {
        if (typeof this != 'function')throw new TypeError();
        h = h || 0;
        return setTimeout(this, h, i);
    };
}, 3);
__d("isEmpty", [], function (a, b, c, d, e, f) {
    function g(h) {
        if (h instanceof Array) {
            return h.length === 0;
        } else if (h instanceof Object) {
            for (var i in h)return false;
            return true;
        } else return !h;
    }

    e.exports = g;
});
__d("CSSLoader", ["isEmpty"], function (a, b, c, d, e, f) {
    var g = b('isEmpty'), h = 20, i = 5000, j, k, l = {}, m = [], n, o = {};

    function p(t) {
        if (k)return;
        k = true;
        var u = document.createElement('link');
        u.onload = function () {
            j = true;
            u.parentNode.removeChild(u);
        };
        u.rel = 'stylesheet';
        u.href = 'data:text/css;base64,';
        t.appendChild(u);
    }

    function q() {
        var t, u = [], v = [];
        if (Date.now() >= n) {
            for (t in o) {
                v.push(o[t].signal);
                u.push(o[t].error);
            }
            o = {};
        } else for (t in o) {
            var w = o[t].signal, x = window.getComputedStyle ? getComputedStyle(w, null) : w.currentStyle;
            if (x && parseInt(x.height, 10) > 1) {
                u.push(o[t].load);
                v.push(w);
                delete o[t];
            }
        }
        for (var y = 0; y < v.length; y++)v[y].parentNode.removeChild(v[y]);
        if (!g(u)) {
            for (y = 0; y < u.length; y++)u[y]();
            n = Date.now() + i;
        }
        return g(o);
    }

    function r(t, u, v, w) {
        var x = document.createElement('meta');
        x.id = 'bootloader_' + t.replace(/[^a-z0-9]/ig, '_');
        u.appendChild(x);
        var y = !g(o);
        n = Date.now() + i;
        o[t] = {signal: x, load: v, error: w};
        if (!y)var z = setInterval(function aa() {
            if (q())clearInterval(z);
        }, h, false);
    }

    var s = {loadStyleSheet: function (t, u, v, w, x) {
        if (l[t])throw new Error('CSS component ' + t + ' has already been requested.');
        if (document.createStyleSheet) {
            var y;
            for (var z = 0; z < m.length; z++)if (m[z].imports.length < 31) {
                y = z;
                break;
            }
            if (y === undefined) {
                m.push(document.createStyleSheet());
                y = m.length - 1;
            }
            m[y].addImport(u);
            l[t] = {styleSheet: m[y], uri: u};
            r(t, v, w, x);
            return;
        }
        var aa = document.createElement('link');
        aa.rel = 'stylesheet';
        aa.type = 'text/css';
        aa.href = u;
        l[t] = {link: aa};
        if (j) {
            aa.onload = function () {
                aa.onload = aa.onerror = null;
                w();
            };
            aa.onerror = function () {
                aa.onload = aa.onerror = null;
                x();
            };
        } else {
            r(t, v, w, x);
            if (j === undefined)p(v);
        }
        v.appendChild(aa);
    }, registerLoadedStyleSheet: function (t, u) {
        if (l[t])throw new Error('CSS component ' + t + ' has been requested and should not be ' + 'loaded more than once.');
        l[t] = {link: u};
    }, unloadStyleSheet: function (t) {
        if (!t in l)return;
        var u = l[t], v = u.link;
        if (v) {
            v.onload = v.onerror = null;
            v.parentNode.removeChild(v);
        } else {
            var w = u.styleSheet;
            for (var x = 0; x < w.imports.length; x++)if (w.imports[x].href == u.uri) {
                w.removeImport(x);
                break;
            }
        }
        delete o[t];
        delete l[t];
    }};
    e.exports = s;
});
__d("Bootloader", ["function-extensions", "Arbiter", "CSSLoader", "Env", "createArrayFrom", "isEmpty"], function (a, b, c, d, e, f) {
    b('function-extensions');
    var g = b('Arbiter'), h = b('CSSLoader'), i = b('Env'), j = b('createArrayFrom'), k = b('isEmpty'), l = {}, m = {}, n = {}, o = null, p = {}, q = {}, r = false, s = [];

    function t(x, y, z, aa) {
        var ba = w.done.curry([z], x == 'css');
        if (x == 'js') {
            var ca = document.createElement('script');
            ca.src = y;
            ca.async = true;
            var da = p[z];
            if (da && da.crossOrigin && i.crossorigin_attribute)ca.crossOrigin = 'anonymous';
            ca.onload = ca.onerror = ba;
            ca.onreadystatechange = function () {
                if (this.readyState in {loaded: 1, complete: 1})ba();
            };
            aa.appendChild(ca);
        } else if (x == 'css')h.loadStyleSheet(z, y, aa, ba, function () {
            ba();
        });
    }

    function u(x) {
        if (!p[x])return;
        if (p[x].type == 'css') {
            h.unloadStyleSheet(x);
            delete l[x];
            g.inform(g.BOOTLOAD + '/' + x, null, g.BEHAVIOR_STATE);
        }
    }

    function v(x, y) {
        if (!r) {
            s.push([x, y]);
            return;
        }
        x = j(x);
        var z = [];
        for (var aa = 0; aa < x.length; ++aa) {
            if (!x[aa])continue;
            var ba = n[x[aa]];
            if (ba) {
                var ca = ba.resources;
                for (var da = 0; da < ca.length; ++da)z.push(ca[da]);
            }
        }
        w.loadResources(z, y);
    }

    var w = {configurePage: function (x) {
        var y = {}, z = w.resolveResources(x), aa;
        for (aa = 0; aa < z.length; aa++) {
            y[z[aa].src] = z[aa];
            w.requested(z[aa].name);
        }
        var ba = document.getElementsByTagName('link');
        for (aa = 0; aa < ba.length; ++aa) {
            if (ba[aa].rel != 'stylesheet')continue;
            for (var ca in y)if (ba[aa].href.indexOf(ca) !== -1) {
                var da = y[ca].name;
                if (y[ca].permanent)m[da] = true;
                delete y[ca];
                h.registerLoadedStyleSheet(da, ba[aa]);
                w.done([da], true);
                break;
            }
        }
    }, loadComponents: function (x, y) {
        x = j(x);
        var z = [], aa = [];
        for (var ba = 0; ba < x.length; ba++) {
            var ca = n[x[ba]];
            if (ca && !ca.module)continue;
            var da = 'legacy:' + x[ba];
            if (n[da]) {
                x[ba] = da;
                z.push(da);
            } else if (ca && ca.module) {
                z.push(x[ba]);
                if (!ca.runWhenReady)aa.push(x[ba]);
            }
        }
        v(x, z.length ? d.curry(z, y) : y);
    }, loadModules: function (x, y) {
        var z = [], aa = [];
        for (var ba = 0; ba < x.length; ba++) {
            var ca = n[x[ba]];
            if (!ca || ca.module)z.push(x[ba]);
        }
        v(x, d.curry(z, y));
    }, loadResources: function (x, y, z, aa) {
        var ba;
        x = w.resolveResources(j(x));
        if (z) {
            var ca = {};
            for (ba = 0; ba < x.length; ++ba)ca[x[ba].name] = true;
            for (var da in l)if (!(da in m) && !(da in ca) && !(da in q))u(da);
            q = {};
        }
        var ea = [], fa = [];
        for (ba = 0; ba < x.length; ++ba) {
            var ga = x[ba];
            if (ga.permanent)m[ga.name] = true;
            var ha = g.BOOTLOAD + '/' + ga.name;
            if (g.query(ha) !== null)continue;
            if (!ga.nonblocking)fa.push(ha);
            if (!l[ga.name]) {
                w.requested(ga.name);
                ea.push(ga);
                window.CavalryLogger && window.CavalryLogger.getInstance().measureResources(ga, aa);
            }
        }
        if (y)y = g.registerCallback(y, fa);
        var ia = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1], ja = w.getHardpoint(), ka = ia ? ja : document.createDocumentFragment();
        for (ba = 0; ba < ea.length; ++ba)t(ea[ba].type, ea[ba].src, ea[ba].name, ka);
        if (ja !== ka)ja.appendChild(ka);
        return y;
    }, requestResource: function (x, y, z) {
        var aa = w.getHardpoint();
        t(x, y, z, aa);
    }, done: function (x, y) {
        w.requested(x);
        if (!y) {
            var z = {sender: this};
            g.inform(g.BOOTLOAD, z, g.BEHAVIOR_EVENT);
        }
        for (var aa = 0; aa < x.length; ++aa) {
            var ba = x[aa];
            g.inform(g.BOOTLOAD + '/' + ba, true, g.BEHAVIOR_STATE);
        }
    }, requested: function (x) {
        x = j(x);
        for (var y = 0; y < x.length; ++y)l[x[y]] = true;
    }, enableBootload: function (x) {
        for (var y in x)if (!n[y])n[y] = x[y];
        if (!r) {
            r = true;
            for (var z = 0; z < s.length; z++)v.apply(null, s[z]);
            s = [];
        }
    }, getHardpoint: function () {
        if (!o) {
            var x = document.getElementsByTagName('head');
            o = x.length && x[0] || document.body;
        }
        return o;
    }, setResourceMap: function (x) {
        if (!x)return;
        var y = [];
        for (var z in x)if (!p[z]) {
            if (!x[z].name)x[z].name = z;
            p[z] = x[z];
            if (p[z].preloadable)y.push(p[z]);
        }
        w.loadResources(y);
    }, resolveResources: function (x) {
        if (!x)return [];
        var y = [];
        for (var z = 0; z < x.length; ++z)if (typeof x[z] == 'string') {
            if (x[z] in p)y.push(p[x[z]]);
        } else y.push(x[z]);
        return y;
    }, loadEarlyResources: function (x) {
        w.setResourceMap(x);
        var y = [];
        for (var z in x) {
            var aa = p[z];
            y.push(aa);
            if (!aa.permanent)q[aa.name] = aa;
        }
        w.loadResources(y);
    }};
    e.exports = w;
});
__d("ge", [], function (a, b, c, d, e, f) {
    function g(h) {
        return typeof h == 'string' ? document.getElementById(h) : h;
    }

    e.exports = g;
});
__d("$", ["ge"], function (a, b, c, d, e, f) {
    var g = b('ge');

    function h(i) {
        var j = g(i);
        return j;
    }

    e.exports = h;
});
__d("CSS", ["$"], function (a, b, c, d, e, f) {
    var g = b('$'), h = 'hidden_elem', i = {setClass: function (j, k) {
        g(j).className = k || '';
        return j;
    }, hasClass: function (j, k) {
        j = g(j);
        if (j.classList)return !!k && j.classList.contains(k);
        return (' ' + j.className + ' ').indexOf(' ' + k + ' ') > -1;
    }, addClass: function (j, k) {
        j = g(j);
        if (k)if (j.classList) {
            j.classList.add(k);
        } else if (!i.hasClass(j, k))j.className = j.className + ' ' + k;
        return j;
    }, removeClass: function (j, k) {
        j = g(j);
        if (k)if (j.classList) {
            j.classList.remove(k);
        } else if (i.hasClass(j, k))j.className = j.className.replace(new RegExp('(^|\\s)' + k + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
        return j;
    }, conditionClass: function (j, k, l) {
        return (l ? i.addClass : i.removeClass)(j, k);
    }, toggleClass: function (j, k) {
        return i.conditionClass(j, k, !i.hasClass(j, k));
    }, shown: function (j) {
        return !i.hasClass(j, h);
    }, hide: function (j) {
        return i.addClass(j, h);
    }, show: function (j) {
        return i.removeClass(j, h);
    }, toggle: function (j) {
        return i.toggleClass(j, h);
    }, conditionShow: function (j, k) {
        return i.conditionClass(j, h, !k);
    }};
    e.exports = i;
});
__d("BlueBarController", ["Bootloader", "CSS"], function (a, b, c, d, e, f) {
    var g = b('Bootloader'), h = b('CSS');
    f.init = function (i) {
        if ('getBoundingClientRect' in i) {
            var j = function () {
                var k = i.getBoundingClientRect(), l = Math.round(k.top) - document.documentElement.clientTop;
                h.conditionClass(i.firstChild, 'fixed_elem', l <= 0);
            };
            j();
            g.loadModules(['event-extensions'], function () {
                Event.listen(window, 'scroll', j);
            });
        }
    };
});
__d("legacy:css-core", ["CSS"], function (a, b, c, d) {
    a.CSS = b('CSS');
}, 3);
__d("legacy:dom-core", ["$", "ge"], function (a, b, c, d) {
    a.$ = b('$');
    a.ge = b('ge');
}, 3);
__d("Parent", ["CSS"], function (a, b, c, d, e, f) {
    var g = b('CSS'), h = {byTag: function (i, j) {
        j = j.toUpperCase();
        while (i && i.nodeName != j)i = i.parentNode;
        return i;
    }, byClass: function (i, j) {
        while (i && !g.hasClass(i, j))i = i.parentNode;
        return i;
    }, byAttribute: function (i, j) {
        while (i && (!i.getAttribute || !i.getAttribute(j)))i = i.parentNode;
        return i;
    }};
    e.exports = h;
});
__d("legacy:parent", ["Parent"], function (a, b, c, d) {
    a.Parent = b('Parent');
}, 3);
__d("legacy:arbiter", ["Arbiter"], function (a, b, c, d) {
    a.Arbiter = b('Arbiter');
}, 3);
__d("event-form-bubbling", [], function (a, b, c, d, e, f) {
    a.Event = a.Event || function () {
    };
    a.Event.__inlineSubmit = function (g, event) {
        var h = (a.Event.__getHandler && a.Event.__getHandler(g, 'submit'));
        return h ? null : a.Event.__bubbleSubmit(g, event);
    };
    a.Event.__bubbleSubmit = function (g, event) {
        if (document.documentElement.attachEvent) {
            var h;
            while (h !== false && (g = g.parentNode))h = g.onsubmit ? g.onsubmit(event) : a.Event.__fire && a.Event.__fire(g, 'submit', event);
            return h;
        }
    };
}, 3);
__d("OnloadEvent", [], function (a, b, c, d, e, f) {
    var g = {ONLOAD: 'onload/onload', ONLOAD_CALLBACK: 'onload/onload_callback', ONLOAD_DOMCONTENT: 'onload/dom_content_ready', ONLOAD_DOMCONTENT_CALLBACK: 'onload/domcontent_callback', ONBEFOREUNLOAD: 'onload/beforeunload', ONUNLOAD: 'onload/unload'};
    e.exports = g;
});
__d("Run", ["Arbiter", "OnloadEvent"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = b('OnloadEvent'), i = g.BEHAVIOR_STATE;

    function j(x) {
        var y = a.CavalryLogger;
        y && y.getInstance().setTimeStamp(x);
    }

    function k() {
        return !window.loading_page_chrome;
    }

    function l(x) {
        var y = a.OnloadHooks;
        if (window.loaded && y) {
            y.runHook(x, 'onlateloadhooks');
        } else q('onloadhooks', x);
    }

    function m(x) {
        var y = a.OnloadHooks;
        if (window.afterloaded && y) {
            setTimeout(function () {
                y.runHook(x, 'onlateafterloadhooks');
            }, 0);
        } else q('onafterloadhooks', x);
    }

    function n(x, y) {
        if (y === undefined)y = k();
        y ? q('onbeforeleavehooks', x) : q('onbeforeunloadhooks', x);
    }

    function o(x) {
        if (!window.onunload)window.onunload = function () {
            g.inform(h.ONUNLOAD, true, i);
        };
        q('onunloadhooks', x);
    }

    function p(x) {
        q('onleavehooks', x);
    }

    function q(x, y) {
        window[x] = (window[x] || []).concat(y);
    }

    function r(x) {
        window[x] = [];
    }

    function s() {
        g.inform(h.ONLOAD_DOMCONTENT, true, i);
    }

    a._domcontentready = s;
    function t() {
        var x = document, y = window;
        if (x.addEventListener) {
            var z = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (z && z[1] < 525) {
                var aa = setInterval(function () {
                    if (/loaded|complete/.test(x.readyState)) {
                        s();
                        clearInterval(aa);
                    }
                }, 10);
            } else x.addEventListener("DOMContentLoaded", s, true);
        } else {
            var ba = 'javascript:void(0)';
            if (y.location.protocol == 'https:')ba = '//:';
            x.write('<script onreadystatechange="if (this.readyState==\'complete\') {' + 'this.parentNode.removeChild(this);_domcontentready();}" ' + 'defer="defer" src="' + ba + '"><\/script\>');
        }
        var ca = y.onload;
        y.onload = function () {
            j('t_layout');
            ca && ca();
            g.inform(h.ONLOAD, true, i);
        };
        y.onbeforeunload = function () {
            var da = {};
            g.inform(h.ONBEFOREUNLOAD, da, i);
            if (!da.warn)g.inform('onload/exit', true);
            return da.warn;
        };
    }

    var u = g.registerCallback(function () {
        j('t_onload');
        g.inform(h.ONLOAD_CALLBACK, true, i);
    }, [h.ONLOAD]), v = g.registerCallback(function () {
        j('t_domcontent');
        g.inform(h.ONLOAD_DOMCONTENT_CALLBACK, true, i);
    }, [h.ONLOAD_DOMCONTENT]);
    t();
    var w = {onLoad: l, onAfterLoad: m, onLeave: p, onBeforeUnload: n, onUnload: o, __domContentCallback: v, __onloadCallback: u, __removeHook: r};
    e.exports = w;
});
__d("legacy:onload", ["Run", "OnloadEvent"], function (a, b, c, d) {
    var e = b('Run');
    a.OnloadEvent = b('OnloadEvent');
    a.onloadRegister_DEPRECATED = e.onLoad;
    a.onloadRegister = function () {
        return e.onLoad.apply(this, arguments);
    };
    a.onafterloadRegister_DEPRECATED = e.onAfterLoad;
    a.onafterloadRegister = function () {
        return e.onAfterLoad.apply(this, arguments);
    };
    a.onleaveRegister = e.onLeave;
    a.onbeforeunloadRegister = e.onBeforeUnload;
    a.onunloadRegister = e.onUnload;
}, 3);
__d("wait_for_load", ["Bootloader", "Run"], function (a, b, c, d, e, f) {
    var g = b('Bootloader'), h = b('Run');

    function i(l, m) {
        return window.loaded && m.call(l);
    }

    function j(l, m, n) {
        g.loadComponents.call(g, m, n.bind(l));
        return false;
    }

    function k(l, m, n) {
        n = n.bind(l, m);
        if (window.loaded)return n();
        switch ((m || event).type) {
            case 'load':
            case 'focus':
                h.onAfterLoad(n);
                return;
            case 'click':
                var o = l.style, p = document.body.style;
                o.cursor = p.cursor = 'progress';
                h.onAfterLoad(function () {
                    o.cursor = p.cursor = '';
                    if (l.tagName.toLowerCase() == 'a') {
                        if (false !== n() && l.href)window.location.href = l.href;
                    } else if (l.click)l.click();
                });
                break;
        }
        return false;
    }

    a.run_if_loaded = i;
    a.run_with = j;
    a.wait_for_load = k;
}, 3);
__d("Intl", [], function (a, b, c, d, e, f) {
    var g;

    function h(j) {
        if (typeof j != 'string')return false;
        return j.match(new RegExp(h.punct_char_class + '[' + ')"' + "'" + '\u00BB' + '\u0F3B' + '\u0F3D' + '\u2019' + '\u201D' + '\u203A' + '\u3009' + '\u300B' + '\u300D' + '\u300F' + '\u3011' + '\u3015' + '\u3017' + '\u3019' + '\u301B' + '\u301E' + '\u301F' + '\uFD3F' + '\uFF07' + '\uFF09' + '\uFF3D' + '\s' + ']*$'));
    }

    h.punct_char_class = '[' + '.!?' + '\u3002' + '\uFF01' + '\uFF1F' + '\u0964' + '\u2026' + '\u0EAF' + '\u1801' + '\u0E2F' + '\uFF0E' + ']';
    function i(j) {
        if (g) {
            var k = [], l = [];
            for (var m in g.patterns) {
                var n = g.patterns[m];
                for (var o in g.meta) {
                    var p = new RegExp(o.slice(1, -1), 'g'), q = g.meta[o];
                    m = m.replace(p, q);
                    n = n.replace(p, q);
                }
                k.push(m);
                l.push(n);
            }
            for (var r = 0; r < k.length; r++) {
                var s = new RegExp(k[r].slice(1, -1), 'g');
                if (l[r] == 'javascript') {
                    j.replace(s, function (t) {
                        return t.slice(1).toLowerCase();
                    });
                } else j = j.replace(s, l[r]);
            }
        }
        return j.replace(/\x01/g, '');
    }

    e.exports = {endsInPunct: h, applyPhonologicalRules: i, setPhonologicalRules: function (j) {
        g = j;
    }};
});
__d("tx", ["Intl"], function (a, b, c, d, e, f) {
    var g = b('Intl');

    function h(j, k) {
        if (!k)return j;
        var l = '\\{([^}]+)\\}(' + g.endsInPunct.punct_char_class + '*)', m = new RegExp(l, 'g'), n = [], o = j.replace(m,function (r, s, t) {
            var u = k[s];
            if (u && typeof u === 'object') {
                n.push(u);
                return '\x17' + t;
            }
            return u + (g.endsInPunct(u) ? '' : t);
        }).split('\x17').map(g.applyPhonologicalRules);
        if (o.length === 1)return o[0];
        var p = [o[0]];
        for (var q = 0; q < n.length; q++)p.push(n[q], o[q + 1]);
        return p;
    }

    function i(j, k) {
        if (typeof _string_table == 'undefined')return;
        j = _string_table[j];
        return h(j, k);
    }

    i._ = h;
    e.exports = i;
});
__d("legacy:intl-core", ["tx"], function (a, b, c, d) {
    var e = b('tx');
    a.tx = e;
    a._tx = e._;
}, 3);
__d("array-extensions", [], function (a, b, c, d, e, f) {
    Array.prototype.contains = function (g) {
        return this.indexOf(g) != -1;
    };
    Array.prototype.remove = function (g) {
        var h = this.indexOf(g);
        if (h != -1)this.splice(h, 1);
    };
}, 3);
__d("JSCC", ["isEmpty"], function (a, b, c, d, e, f) {
    var g = b('isEmpty'), h = {}, i = {};

    function j(m) {
        var n, o = false;
        return function () {
            if (!o) {
                n = m();
                o = true;
            }
            return n;
        };
    }

    function k(m, n) {
        if (g(m))return;
        for (var o in m) {
            h[o] = j(m[o]);
            if (n) {
                if (!i[n])i[n] = [];
                i[n].push(o);
            }
        }
    }

    var l = {get: function (m) {
        if (!h[m])throw new Error('JSCC entry is missing');
        return h[m]();
    }, init: function (m) {
        k(m);
    }, initForPagelet: function (m, n) {
        k(n, m);
    }, clearForPagelet: function (m) {
        if (i[m]) {
            for (var n = 0; n < i[m].length; n++) {
                var o = i[m][n];
                delete h[o];
            }
            delete i[m];
        }
    }};
    e.exports = l;
});
__d("ServerJS", ["function-extensions", "ErrorUtils", "copyProperties"], function (a, b, c, d, e, f) {
    b('function-extensions');
    var g = b('ErrorUtils'), h = b('copyProperties');

    function i() {
        this._moduleMap = {};
        this._relativeTo = null;
    }

    h(i.prototype, {handle: g.guard(function (o) {
        if (o.__guard)throw new Error('ServerJS.handle called on data that has already been handled');
        o.__guard = true;
        l(o.define || [], this._handleDefine, this);
        l(o.markup || [], this._handleMarkup, this);
        l(o.elements || [], this._handleElement, this);
        l(o.instances || [], this._handleInstance, this);
        l(o.require || [], this._handleRequire, this);
    }), handlePartial: function (o) {
        (o.instances || []).forEach(m.curry(this._moduleMap, 3));
        (o.markup || []).forEach(m.curry(this._moduleMap, 2));
        this.handle(o);
    }, cleanup: function () {
        var o = [];
        for (var p in this._moduleMap)o.push(p);
        d.call(null, o, n);
        this._moduleMap = {};
    }, setRelativeTo: function (o) {
        this._relativeTo = o;
        return this;
    }, _handleDefine: function (o, p, q) {
        define(o, p, function () {
            this._replaceTransportMarkers(q);
            return q;
        }.bind(this));
    }, _handleRequire: function (o, p, q, r) {
        var s = [o].concat(q || []);
        d(s, function (t) {
            r && this._replaceTransportMarkers(r);
            if (p) {
                if (!t[p])throw new TypeError('Module ' + o + ' has no method ' + p);
                t[p].apply(t, r || []);
            }
        }.bind(this));
    }, _handleInstance: function (o, p, q, r) {
        var s = null;
        if (p)s = function (t) {
            this._replaceTransportMarkers(q);
            var u = Object.create(t.prototype);
            t.apply(u, q);
            return u;
        }.bind(this);
        define(o, p, s, 0, null, r);
    }, _handleMarkup: function (o, p, q) {
        define(o, ['HTML'], function (r) {
            return r.replaceJSONWrapper(p).getRootNode();
        }, 0, null, q);
    }, _handleElement: function (o, p, q, r) {
        var s = [], t = 0;
        if (r) {
            s.push(r);
            t = 1;
            q++;
        }
        define(o, s, function (u) {
            var v = k(p, u);
            return v;
        }, t, null, q);
    }, _replaceTransportMarkers: function (o, p) {
        var q = (typeof p !== 'undefined') ? o[p] : o, r;
        if (Array.isArray(q)) {
            for (r = 0; r < q.length; r++)this._replaceTransportMarkers(q, r);
        } else if (q && typeof q == 'object')if (q.__m) {
            o[p] = b(q.__m);
        } else if (q.__e) {
            o[p] = k(q.__e);
        } else if (q.__rel) {
            o[p] = this._relativeTo;
        } else for (var s in q)this._replaceTransportMarkers(q, s);
    }});
    function j(o) {
        var p = o.getAttributeNode && o.getAttributeNode('id');
        return p ? p.value : null;
    }

    function k(o, p) {
        var q, r, s;
        if (p) {
            if (j(p) == o) {
                q = p;
            } else if (p.getElementsByTagName) {
                r = p.getElementsByTagName('*');
                for (s = 0; s < r.length; s++)if (j(r[s]) == o) {
                    q = r[s];
                    break;
                }
            } else {
                r = p.childNodes;
                for (s = 0; s < r.length; s++) {
                    q = k(o, r[s]);
                    if (q)break;
                }
            }
        } else q = document.getElementById(o);
        return q;
    }

    function l(o, p, q) {
        for (var r = 0; r < o.length; r++)p.apply(q, [].concat(o[r]));
    }

    function m(o, p, q) {
        var r = q[0];
        if (!(r in o))q[p] = (q[p] || 0) + 1;
        o[r] = true;
    }

    function n() {
        return {};
    }

    e.exports = i;
});
__d("invokeCallbacks", ["ErrorUtils"], function (a, b, c, d, e, f) {
    var g = b('ErrorUtils');

    function h(i, j) {
        if (i)for (var k = 0; k < i.length; k++)g.applyWithGuard(new Function(i[k]), j);
    }

    e.exports = h;
});
__d("BigPipe", ["Arbiter", "Bootloader", "Env", "ErrorUtils", "JSCC", "OnloadEvent", "Run", "ServerJS", "$", "copyProperties", "ge", "hasArrayNature", "invokeCallbacks"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = b('Bootloader'), i = b('Env'), j = b('ErrorUtils'), k = b('JSCC'), l = b('OnloadEvent'), m = b('Run'), n = b('ServerJS'), o = b('$'), p = b('copyProperties'), q = b('ge'), r = b('hasArrayNature'), s = b('invokeCallbacks'), t = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1], u = g.BEHAVIOR_STATE, v = g.BEHAVIOR_PERSISTENT;

    function w(ba) {
        return (!ba || r(ba) && ba.length === 0) ? {} : ba;
    }

    function x(ba) {
        if (!ba || typeof ba === 'string')return ba;
        if (ba - fluid_id) {
            var ca = o(ba - fluid_id);
            ba = y(ca) || '';
            ca.parentNode.removeChild(ca);
            return ba;
        }
        return null;
    }

    function y(ba) {
        if (!ba.firstChild) {
            h.loadModules(['ErrorSignal'], function (da) {
                da.sendErrorSignal('bigpipe', 'Pagelet markup container is empty.');
            });
            return null;
        }
        if (ba.firstChild.nodeType !== 8)return null;
        var ca = ba.firstChild.nodeValue;
        ca = ca.substring(1, ca.length - 1);
        return ca.replace(/\\([\s\S]|$)/g, '$1');
    }

    function z(ba, ca) {
        var da = document.createElement('div'), ea = t < 7;
        if (ea)ba.appendChild(da);
        da.innerHTML = ca;
        var fa = document.createDocumentFragment();
        while (da.firstChild)fa.appendChild(da.firstChild);
        ba.appendChild(fa);
        if (ea)ba.removeChild(da);
    }

    function aa(ba) {
        p(this, {arbiter: g, rootNodeID: 'content', lid: 0, isAjax: false, domContentCallback: m.__domContentCallback, onloadCallback: m.__onloadCallback, domContentEvt: l.ONLOAD_DOMCONTENT_CALLBACK, onloadEvt: l.ONLOAD_CALLBACK, forceFinish: false, _phaseDoneCallbacks: [], _currentPhase: 0, _lastPhase: -1});
        p(this, ba);
        if (this.automatic) {
            this._relevant_instance = aa._current_instance;
        }
        else aa._current_instance = this;
        this._serverJS = new n();
        g.inform('BigPipe/init', {lid: this.lid, arbiter: this.arbiter}, v);
        this.arbiter.registerCallback(this._serverJS.cleanup.bind(this._serverJS), ['pagelet_displayed_all']);
        this.arbiter.registerCallback(this.domContentCallback, ['pagelet_displayed_all']);
        this._informEventExternal('phase_begin', {phase: 0});
        this.arbiter.inform('phase_begin_0', true, u);
        this.onloadCallback = this.arbiter.registerCallback(this.onloadCallback, ['pagelet_displayed_all']);
    }

    p(aa.prototype, {
        _displayPageletHandler: function (ba) {
            if (this.displayCallback) {
                this.displayCallback(this._displayPagelet.bind(this, ba));
            }
            else this._displayPagelet(ba);
        }, _displayPagelet: function (ba) {
            this._informPageletEvent('display_start', ba.id);
            ba.content = w(ba.content);
            for (var ca in ba.content) {
                var da = ba.content[ca];
                if (ba.append)ca = this._getAppendTargetID(ba);
                var ea = q(ca);
                if (ea) {
                    da = x(da);
                    if (da)if (ba.append || t < 8) {
                        if (!ba.append)while (ea.firstChild)ea.removeChild(ea.firstChild);
                        z(ea, da);
                    }
                    else ea.innerHTML = da;
                    var fa = ea.getAttribute('data-referrer');
                    if (!fa)ea.setAttribute('data-referrer', ca);
                    if (ba.cache_hit && i.pc_debug)ea.style.border = '1px red solid';
                }
            }
            if (ba.jsmods) {
                var ga = JSON.parse(JSON.stringify(ba.jsmods));
                this._serverJS.handlePartial(ga);
            }
            this._informPageletEvent('display', ba.id);
            this.arbiter.inform(ba.id + '_displayed', true, u);
        }, _getAppendTargetID: function (ba) {
            if (!ba.append)return null;
            return (ba.append === 'bigpipe_root') ? this.rootNodeID : ba.append;
        }, _downloadJsForPagelet: function (ba) {
            this._informPageletEvent('jsstart', ba.id);
            h.loadResources(ba.js || [], function () {
                this._informPageletEvent('jsdone', ba.id);
                ba.requires = ba.requires || [];
                if (!this.isAjax || ba.phase >= 1)ba.requires.push('uipage_onload');
                var ca = function () {
                    this._informPageletEvent('preonload', ba.id);
                    this._isRelevantPagelet(ba) && s(ba.onload);
                    this._informPageletEvent('onload', ba.id);
                    this.arbiter.inform('pagelet_onload', true, g.BEHAVIOR_EVENT);
                    ba.provides && this.arbiter.inform(ba.provides, true, u);
                }.bind(this), da = function () {
                    this._isRelevantPagelet(ba) && s(ba.onafterload);
                }.bind(this);
                this.arbiter.registerCallback(ca, ba.requires);
                this.arbiter.registerCallback(da, [this.onloadEvt]);
            }.bind(this), false, ba.id);
        }, _downloadDisplayDependenciesAndDisplayPagelet: function (ba) {
            this._informPageletEvent('css', ba.id);
            var ca = (ba.css || []).concat(ba.displayJS || []);
            h.loadResources(ca, function () {
                var da = ba.display_dependency || [], ea = [];
                for (var fa = 0; fa < da.length; fa++)ea.push(da[fa] + '_displayed');
                this.arbiter.registerCallback(this._displayPageletHandler.bind(this, ba), ea);
            }.bind(this), false, ba.id);
        }, onPageletArrive: j.guard(function (ba) {
            this._informPageletEvent('arrive', ba.id, ba.phase);
            var ca = ba.phase;
            if (!this._phaseDoneCallbacks[ca])this._phaseDoneCallbacks[ca] = this.arbiter.registerCallback(this._onPhaseDone.bind(this), ['phase_complete_' + ca]);
            this.arbiter.registerCallback(this._phaseDoneCallbacks[ca], [ba.id + '_displayed']);
            var da = a.PageletCache;
            if (da)if (ba.cache_hit) {
                ba = da.loadFromCache(ba, this.arbiter);
            }
            else da.write(ba, this.arbiter);
            this._processPagelet(ba);
        }), _processPagelet: function (ba) {
            var ca = ba.phase, da = this._getAppendTargetID(ba) || ba.id;
            aa.pageletIDs[da] = da;
            if (ba.the_end)this._lastPhase = ba.phase;
            if (ba.tti_phase !== undefined)this._ttiPhase = ba.tti_phase;
            if (ba.is_second_to_last_phase)this._secondToLastPhase = ba.phase;
            if (ba.jscc_map) {
                var ea = (eval)(ba.jscc_map);
                k.initForPagelet(da, ea);
            }
            h.setResourceMap(ba.resource_map);
            h.enableBootload(w(ba.bootloadable));
            var fa = 'phase_begin_' + ca;
            this.arbiter.registerCallback(this._downloadDisplayDependenciesAndDisplayPagelet.bind(this, ba), [fa]);
            var ga = [ba.id + '_displayed'];
            if (!this.jsNonBlock)ga.push(this.domContentEvt);
            this.arbiter.registerCallback(this.onloadCallback, ['pagelet_onload']);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, ba), ga);
            ba.is_last && this.arbiter.inform('phase_complete_' + ca, true, u);
        }, _onPhaseDone: function () {
            if (this._currentPhase === this._ttiPhase)this._informEventExternal('tti_bigpipe', {phase: this._ttiPhase});
            var ba = this._currentPhase + 1, ca = (function () {
                this._informEventExternal('phase_begin', {phase: ba});
                this.arbiter.inform('phase_begin_' + ba, true, u);
            }).bind(this);
            if (this._currentPhase === this._lastPhase && this._isRelevant())this.arbiter.inform('pagelet_displayed_all', true, u);
            this._currentPhase++;
            if (t) {
                setTimeout(ca, 20);
            }
            else ca();
        }, _isRelevant: function () {
            return this == aa._current_instance || (this.automatic && this._relevant_instance == aa._current_instance) || this.jsNonBlock || this.forceFinish;
        }, _isRelevantPagelet: function (ba) {
            if (!this._isRelevant())return false;
            var ca = this._getAppendTargetID(ba) || ba.id;
            return aa.pageletIDs.hasOwnProperty(ca);
        }, _informEventExternal: function (ba, ca) {
            ca = ca || {};
            ca.ts = Date.now();
            ca.lid = this.lid;
            this.arbiter.inform(ba, ca, v);
        }, _informPageletEvent: function (ba, ca, da) {
            var ea = {event: ba, id: ca};
            if (da)ea.phase = da;
            this._informEventExternal('pagelet_event', ea);
        }
    });
    aa.pageletIDs = {};
    e.exports = aa;
});
__d("legacy:bootloader", ["Bootloader"], function (a, b, c, d) {
    a.Bootloader = b('Bootloader');
}, 3);
__d("Class", ["function-extensions", "Arbiter", "copyProperties", "createArrayFrom"], function (a, b, c, d, e, f) {
    b('function-extensions');
    var g = b('Arbiter'), h = b('copyProperties'), i = b('createArrayFrom'), j = {}, k = null, l = {extend: function (t, u) {
        if (!k)k = g.subscribe(g.BOOTLOAD, n);
        if (typeof u == 'string') {
            m(t, u);
        } else o(t, u);
    }};

    function m(t, u) {
        t.__class_extending = true;
        var v = g.registerCallback(o.curry(t, u), [g.FUNCTION_EXTENSION + '/' + u, g.BOOTLOAD]);
        if (v !== null)j[u] = true;
    }

    function n() {
        for (var t in j)if (!!a[t]) {
            delete j[t];
            if (!a[t].__class_extending) {
                g.inform(g.FUNCTION_EXTENSION + '/' + t, true, g.BEHAVIOR_STATE);
            } else a[t].__class_name = t;
        }
    }

    function o(t, u) {
        delete t.__class_extending;
        u = typeof u == 'string' ? a[u] : u;
        var v = p(u, 0), w = p(t, v.prototype.__level + 1);
        w.parent = v;
        if (!!t.__class_name)g.inform(g.FUNCTION_EXTENSION + '/' + t.__class_name, true, g.BEHAVIOR_STATE);
    }

    function p(t, u) {
        if (t._metaprototype)return t._metaprototype;
        var v = new Function();
        v.construct = q;
        v.prototype.construct = s(t, u, true);
        v.prototype.__level = u;
        v.base = t;
        t.prototype.parent = v;
        t._metaprototype = v;
        return v;
    }

    function q(t) {
        r(t.parent);
        var u = [], v = t;
        while (v.parent) {
            var w = new v.parent();
            u.push(w);
            w.__instance = t;
            v = v.parent;
        }
        t.parent = u[1];
        u.reverse();
        u.pop();
        t.__parents = u;
        t.__instance = t;
        return t.parent.construct.apply(t.parent, arguments);
    }

    function r(t) {
        if (t.initialized)return;
        var u = t.base.prototype;
        if (t.parent) {
            r(t.parent);
            var v = t.parent.prototype;
            for (var w in v)if (w != '__level' && w != 'construct' && u[w] === undefined)u[w] = t.prototype[w] = v[w];
        }
        t.initialized = true;
        var x = t.prototype.__level;
        for (var w in u)if (w != 'parent')u[w] = t.prototype[w] = s(u[w], x);
    }

    function s(t, u, v) {
        if (typeof t != 'function' || t.__prototyped)return t;
        var w = function () {
            var x = this.__instance;
            if (x) {
                var y = x.parent;
                x.parent = u ? x.__parents[u - 1] : null;
                var z = arguments;
                if (v) {
                    z = [];
                    for (var aa = 1; aa < arguments.length; aa++)z.push(arguments[aa]);
                }
                var ba = t.apply(x, z);
                x.parent = y;
                return ba;
            } else return t.apply(this, arguments);
        };
        w.__prototyped = true;
        return w;
    }

    e.exports = l;
});
__d("legacy:Class", ["Class"], function (a, b, c, d) {
    a.Class = b('Class');
}, 3);
__d("legacy:constructor-cache", ["JSCC"], function (a, b, c, d) {
    a.JSCC = b('JSCC');
}, 3);
__d("goURI", [], function (a, b, c, d, e, f) {
    function g(h, i, j) {
        h = h.toString();
        if (!i && a.PageTransitions && PageTransitions.isInitialized()) {
            PageTransitions.go(h, j);
        } else if (window.location.href == h) {
            window.location.reload();
        } else window.location.href = h;
    }

    e.exports = g;
});
__d("legacy:goURI", ["goURI"], function (a, b, c, d) {
    a.goURI = b('goURI');
}, 3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "OnloadEvent"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = b('Bootloader'), i = b('OnloadEvent'), j = {INITIAL_JS_READY: 'BOOTLOAD/JSREADY', loadOnDOMContentReady: function (k, l) {
        g.subscribe(i.ONLOAD_DOMCONTENT_CALLBACK, function () {
            function m() {
                h.loadResources(k, function () {
                    g.inform(j.INITIAL_JS_READY, true, g.BEHAVIOR_STATE);
                });
            }

            if (l) {
                setTimeout(m, l);
            } else m();
        });
    }};
    e.exports = j;
});
__d("lowerDomain", [], function (a, b, c, d, e, f) {
    if (document.domain.toLowerCase().match(/(^|\.)facebook\..*/))document.domain = window.location.hostname.replace(/^.*(facebook\..*)$/i, '$1');
});
__d("legacy:object-core-utils", ["copyProperties", "isEmpty"], function (a, b, c, d) {
    var e = b('copyProperties');

    function f(g, h) {
        return e(window[g] || (window[g] = {}), h);
    }

    a.is_empty = b('isEmpty');
    a.add_properties = f;
    a.copyProperties = e;
}, 3);
__d("PlaceholderListener", ["Arbiter", "CSS", "Parent"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = b('CSS'), i = b('Parent'), j = document.documentElement, k = function (l) {
        l = l || window.event;
        var m = l.target || l.srcElement, n = m.getAttribute('placeholder');
        if (n) {
            var o = i.byClass(m, 'focus_target');
            if ('focus' == l.type || 'focusin' == l.type) {
                var p = m.value.replace(/\r\n/g, '\n'), q = n.replace(/\r\n/g, '\n');
                if (p == q && h.hasClass(m, 'DOMControl_placeholder')) {
                    m.value = '';
                    h.removeClass(m, 'DOMControl_placeholder');
                }
                if (o) {
                    h.addClass(o, 'child_is_active');
                    h.addClass(o, 'child_is_focused');
                    h.addClass(o, 'child_was_focused');
                    g.inform('reflow');
                }
            } else {
                if (m.value === '') {
                    h.addClass(m, 'DOMControl_placeholder');
                    m.value = n;
                    o && h.removeClass(o, 'child_is_active');
                    m.style.direction = '';
                }
                o && h.removeClass(o, 'child_is_focused');
            }
        }
    };
    if (j.addEventListener) {
        j.addEventListener('focus', k, true);
        j.addEventListener('blur', k, true);
    } else {
        j.attachEvent('onfocusin', k);
        j.attachEvent('onfocusout', k);
    }
});
__d("clickRefAction", ["Arbiter"], function (a, b, c, d, e, f) {
    var g = b('Arbiter');

    function h(l, m, n, o, p) {
        var q = l + '/' + m;
        this.ue = q;
        this._ue_ts = l;
        this._ue_count = m;
        this._context = n;
        this._ns = null;
        this._node = o;
        this._type = p;
    }

    h.prototype.set_namespace = function (l) {
        this._ns = l;
        return this;
    };
    h.prototype.coalesce_namespace = function (l) {
        if (this._ns === null)this._ns = l;
        return this;
    };
    h.prototype.add_event = function () {
        return this;
    };
    var i = 0, j = [];

    function k(l, m, event, n, o) {
        var p = Date.now(), q = event && event.type;
        o = o || {};
        if (!m && event)m = event.getTarget();
        var r = 50;
        if (m && n != "FORCE")for (var s = j.length - 1; s >= 0 && ((p - j[s]._ue_ts) < r); --s)if (j[s]._node == m && j[s]._type == q)return j[s];
        var t = new h(p, i, l, m, q);
        j.push(t);
        while (j.length > 10)j.shift();
        g.inform("ClickRefAction/new", {cfa: t, node: m, mode: n, event: event, extra_data: o}, g.BEHAVIOR_PERSISTENT);
        i++;
        return t;
    }

    e.exports = a.clickRefAction = k;
});
__d("trackReferrer", ["Parent"], function (a, b, c, d, e, f) {
    var g = b('Parent');

    function h(i, j) {
        i = g.byAttribute(i, 'data-referrer');
        if (i) {
            var k = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/.exec(j)[1] || '';
            if (!k)return;
            var l = k + '|' + i.getAttribute('data-referrer'), m = new Date();
            m.setTime(Date.now() + 1000);
            document.cookie = "x-src=" + encodeURIComponent(l) + "; " + "expires=" + m.toGMTString() + ";path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
        }
        return i;
    }

    e.exports = h;
});
__d("BanzaiCommon", ["BanzaiConfig"], function (a, b, c, d, e, f) {
    var g = c('BanzaiConfig'), h = {store: true, delay: g.MIN_WAIT || 1000}, i = {store: false, delay: g.MAX_WAIT || 60000}, j, k, l, m, n, o;

    function p() {
        k = [];
        l = [];
    }

    function q(w) {
        var x = Date.now() + w;
        if (!o || x < o) {
            o = x;
            clearTimeout(n);
            n = setTimeout(s, w, false);
            return true;
        }
    }

    function r(w, x, y) {
        y = y || i;
        var z = [w, x];
        k.push(z);
        if (y.store)l.push(z);
        if (q(y.delay || 60000))m = w;
    }

    function s() {
        o = null;
        q(i.delay);
        if (j.isSending())return;
        j.inform(v.SEND);
        if (k.length <= 0) {
            j.inform(v.OK);
            return;
        }
        var w = {trigger: m || null, posts: k};
        m = null;
        p();
        j.send(w);
    }

    function t(w) {
        j = w;
        j.onUnload(function () {
            j.inform(v.SHUTDOWN);
            u.store();
        });
    }

    var u = a.sessionStorage ? {store: function w() {
        a.sessionStorage.setItem('Banzai', JSON.stringify(k));
    }, restore: function w() {
        if ('Banzai' in a.sessionStorage) {
            k = [].concat(JSON.parse(a.sessionStorage.getItem('Banzai')));
            l = [].concat(k);
            a.sessionStorage.removeItem('Banzai');
        }
    }} : {store: function () {
    }, restore: function () {
    }}, v = {SEND: 'Banzai:SEND', OK: 'Banzai:OK', ERROR: 'Banzai:ERROR', SHUTDOWN: 'Banzai:SHUTDOWN', VITAL: h, SEND_TIMEOUT: 15000, isEnabled: function (w) {
        return g.gks && g.gks[w];
    }, post: r, setAdapter: t, subscribe: function (w, x) {
        j.subscribe(w, x);
    }};
    p();
    u.restore();
    q(i.delay);
    e.exports = v;
});
__d("Miny", [], function (a, b, c, d, e, f) {
    var g = 'Miny1', h = {encode: [], decode: {}}, i = 'wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'.split('');

    function j(n) {
        for (var o = h.encode.length; o < n; o++) {
            var p = o.toString(32).split('');
            p[p.length - 1] = i[parseInt(p[p.length - 1], 32)];
            p = p.join('');
            h.encode[o] = p;
            h.decode[p] = o;
        }
        return h;
    }

    function k(n) {
        var o = n.match(/\w+|\W+/g), p = {};
        for (var q = 0; q < o.length; q++)p[o[q]] = (p[o[q]] || 0) + 1;
        var r = Object.keys(p);
        r.sort(function (u, v) {
            return p[u] < p[v] ? 1 : (p[v] < p[u] ? -1 : 0);
        });
        var s = j(r.length).encode;
        for (q = 0; q < r.length; q++)p[r[q]] = s[q];
        var t = [];
        for (q = 0; q < o.length; q++)t[q] = p[o[q]];
        for (q = 0; q < r.length; q++)r[q] = r[q].replace(/'~'/g, '\\~');
        return [g, r.length].concat(r).concat(t.join('')).join('~');
    }

    function l(n) {
        var o = n.split('~');
        if (o.shift() != g)throw new Error('Not a Miny stream');
        var p = parseInt(o.shift(), 10), q = o.pop();
        q = q.match(/[0-9a-v]*[\-w-zA-Z_]/g);
        var r = o, s = j(p).decode, t = [];
        for (var u = 0; u < q.length; u++)t[u] = r[s[q[u]]];
        return t.join('');
    }

    var m = {encode: k, decode: l};
    e.exports = m;
});
__d("QueryString", [], function (a, b, c, d, e, f) {
    var g = {encode: function (h) {
        var i = [];
        Object.keys(h).forEach(function (j) {
            var k = h[j];
            if (typeof k === 'undefined')return;
            if (k === null) {
                i.push(j);
                return;
            }
            i.push(encodeURIComponent(j) + '=' + encodeURIComponent(k));
        });
        return i.join('&');
    }, decode: function (h) {
        var i = {};
        if (h === '')return i;
        var j = h.split('&'), k = j.length;
        while (k--) {
            var l = j[k].split('=', 2);
            i[decodeURIComponent(l[0])] = l.length === 2 ? decodeURIComponent(l[1]) : null;
        }
        return i;
    }, appendToUrl: function (h, i) {
        return h + (~h.indexOf('?') ? '&' : '?') + (typeof i === 'string' ? i : g.encode(i));
    }};
    e.exports = g;
});
__d("XHR", ["Env"], function (a, b, c, d, e, f) {
    var g = b('Env'), h = {create: function () {
        try {
            return a.XMLHttpRequest ? new a.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (i) {
        }
    }, getAsyncParams: function (i) {
        var j = {__user: g.user, __a: 1};
        if (i == 'POST' && g.fb_dtsg)j.fb_dtsg = g.fb_dtsg;
        if (g.fb_isb)j.fb_isb = g.fb_isb;
        if (g.fbtrace_id)j.fbtrace_id = g.fbtrace_id;
        return j;
    }};
    e.exports = h;
});
__d("BanzaiDesktop", ["Arbiter", "BanzaiCommon", "Miny", "QueryString", "Run", "XHR"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = b('BanzaiCommon'), i = b('Miny'), j = b('QueryString'), k = b('Run'), l = b('XHR'), m = null, n = new g(), o = '/ajax/banzai/banzai.php', p = {inform: function q(r) {
        n.inform(r);
    }, subscribe: function (q, r) {
        n.subscribe(q, r);
    }, cleanup: function q() {
        if (m && m.readyState < 4)m.abort();
        if (m) {
            delete m.onreadystatechange;
            m = null;
        }
    }, isSending: function q() {
        return !!m;
    }, send: function q(r) {
        var s = 'POST';
        m = l.create();
        m.open(s, o, true);
        m.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        m.onreadystatechange = function () {
            if (m.readyState >= 4) {
                var w = m.status;
                p.cleanup();
                p.inform(w == 200 ? h.OK : h.ERROR);
            }
        };
        setTimeout(p.cleanup, h.SEND_TIMEOUT, false);
        var t = l.getAsyncParams(s);
        t.q = JSON.stringify(r);
        if (h.isEnabled('miny_compression')) {
            var u = Date.now(), v = i.encode(t.q);
            if (v.length < t.q.length) {
                t.q = v;
                t.miny_encode_ms = Date.now() - u;
            }
        }
        m.send(j.encode(t));
    }, onUnload: function q(r) {
        k.onUnload(r);
    }};
    h.setAdapter(p);
    e.exports = h;
});
__d("userAction", ["Arbiter", "BanzaiDesktop", "copyProperties"], function (a, b, c, d, e, f) {
    var g = b('Arbiter'), h = b('BanzaiDesktop'), i = b('copyProperties'), j = 50, k = [], l = {}, m = {};

    function n(u, v, w, x, event) {
        var y = u + '/' + v, z = t(x);
        i(this, {ue: y, _uai_logged: false, _uai_timeout: null, _primary: {}, _fallback: {}, _default_ua_id: z || '-', _default_action_type: event ? event.type : '-', _ts: u, _ns: w, _start_ts: u, _prev_event: 's', _ue_ts: u, _ue_count: v, _data_version: 1, _event_version: 2, _info_version: 2});
        this._log('uan', [1, y]);
    }

    var o = {store: true, delay: 3000};
    i(n.prototype, {_log: function (u, v) {
        var w = l[u] !== undefined ? l[u] : true, x = m[u], y = x ? x[this._ns] : {}, z = y ? y[this._ua_id] : undefined;
        if (h.isEnabled('useraction') && (z !== undefined ? z : w))h.post(u, v, o);
    }, _get_action_type: function () {
        return (this._primary._action_type || this._fallback._action_type || this._default_action_type);
    }, _get_ua_id: function () {
        return (this._primary._ua_id || this._fallback._ua_id || this._default_ua_id);
    }, _log_uai: function () {
        var u = [this._info_version, this.ue, this._ns, this._get_ua_id(), this._get_action_type()];
        this._log('uai', u);
        this._uai_logged = true;
        this._uai_timeout = null;
    }, uai: function (u, v, w) {
        if (!this._uai_logged) {
            this._uai_timeout && clearTimeout(this._uai_timeout);
            this._primary._ua_id = v;
            this._primary._action_type = u;
            if (w === undefined) {
                this._log_uai();
            } else if (w === false) {
                this._uai_logged = true;
            } else {
                var x = this;
                w = w || 0;
                this._uai_timeout = setTimeout(function () {
                    x._log_uai.apply(x);
                }, w);
            }
        }
        return this;
    }, uai_fallback: function (u, v, w) {
        if (!this._uai_logged) {
            var x = this;
            this._uai_timeout && clearTimeout(this._uai_timeout);
            this._fallback._ua_id = v;
            this._fallback._action_type = u;
            w = (w === undefined) ? j : w;
            this._uai_timeout = setTimeout(function () {
                x._log_uai.apply(x);
            }, w);
        }
        return this;
    }, add_event: function (u, v, w) {
        v = v || 0;
        var x = (Date.now() - v), y = x - this._ts, z = x - (w ? w : this._ue_ts), aa = [this._event_version, this.ue, this._ns, this._get_ua_id(), this._prev_event, u, y, z];
        if (this._get_ua_id()) {
            this._log('uae', aa);
            this._ts = x;
            this._prev_event = u;
        }
        return this;
    }, add_data: function (u) {
        var v = [this._data_version, this.ue, u];
        this._log('uad', v);
        return this;
    }});
    var p = 0, q = 0, r = null;

    function s(u, v, event, w) {
        w = w || {};
        var x = Date.now();
        if (!v && event)v = event.getTarget();
        if (v && r)if (x - q < j && v == r && w.mode == "DEDUP")return k[k.length - 1];
        var y = new n(x, p, u, v, event);
        r = v;
        k.push(y);
        while (k.length > 10)k.shift();
        g.inform("UserAction/new", {ua: y, node: v, mode: w.mode, event: event});
        q = x;
        p++;
        return y;
    }

    function t(u) {
        if (!u || !u.nodeName)return null;
        return u.nodeName.toLowerCase();
    }

    s.setUATypeConfig = function (u) {
        i(l, u);
    };
    s.setCustomSampleConfig = function (u) {
        i(m, u);
    };
    s.getCurrentUECount = function () {
        return p;
    };
    e.exports = a.userAction = s;
});
__d("Primer", ["function-extensions", "Bootloader", "CSS", "ErrorUtils", "Parent", "clickRefAction", "trackReferrer", "userAction"], function (a, b, c, d, e, f) {
    b('function-extensions');
    var g = b('Bootloader'), h = b('CSS'), i = b('ErrorUtils'), j = b('Parent'), k = b('clickRefAction'), l = b('trackReferrer'), m = b('userAction'), n = null, o = /async(?:-post)?|dialog(?:-post)?|theater|toggle/, p = document.documentElement;

    function q(t, u) {
        t = j.byAttribute(t, u);
        if (!t)return;
        do {
            var v = t.getAttribute(u);
            JSON.parse(v).forEach(function (w) {
                var x = t;
                g.loadModules.call(g, [w[0]], function (y) {
                    y[w[1]](x);
                });
            });
        } while (t = j.byAttribute(t.parentNode, u));
        return false;
    }

    p.onclick = i.guard(function (t) {
        t = t || window.event;
        n = t.target || t.srcElement;
        var u = q(n, 'data-onclick'), v = j.byTag(n, 'A');
        if (!v)return u;
        var w = v.getAttribute('ajaxify'), x = v.href, y = w || x;
        if (y) {
            k('a', v, t).coalesce_namespace('primer');
            var z = m('primer', v, t, {mode: 'DEDUP'}).uai_fallback('click');
            if (a.ArbiterMonitor)a.ArbiterMonitor.initUA(z, [v]);
        }
        if (w && x && !(/#$/).test(x)) {
            var aa = t.which && t.which === 2, ba = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
            if (aa || ba)return;
        }
        l(v, y);
        var ca = v.rel && v.rel.match(o);
        ca = ca && ca[0];
        switch (ca) {
            case 'dialog':
            case 'dialog-post':
                g.loadModules(['AsyncDialog'], function (da) {
                    da.bootstrap(y, v, ca);
                });
                break;
            case 'async':
            case 'async-post':
                g.loadModules(['AsyncRequest'], function (da) {
                    da.bootstrap(y, v);
                });
                break;
            case 'theater':
                g.loadModules(['PhotoSnowlift'], function (da) {
                    da.bootstrap(y, v);
                });
                break;
            case 'toggle':
                h.toggleClass(v.parentNode, 'openToggler');
                g.loadModules(['Toggler'], function (da) {
                    da.bootstrap(v);
                });
                break;
            default:
                return u;
        }
        return false;
    });
    p.onsubmit = i.guard(function (t) {
        t = t || window.event;
        var u = t.target || t.srcElement;
        if (u && u.nodeName == 'FORM' && u.getAttribute('rel') == 'async') {
            k('f', u, t).coalesce_namespace('primer');
            var v = m('primer', u, t, {mode: 'DEDUP'}).uai_fallback('submit');
            if (a.ArbiterMonitor)a.ArbiterMonitor.initUA(v, [u]);
            var w = n;
            g.loadModules(['Form'], function (x) {
                x.bootstrap(u, w);
            });
            return false;
        }
    });
    var r = null, s = i.guard(function (t, u) {
        u = u || window.event;
        r = u.target || u.srcElement;
        q(r, 'data-on' + t);
        var v = j.byAttribute(r, 'data-hover');
        if (!v)return;
        switch (v.getAttribute('data-hover')) {
            case 'tooltip':
                g.loadModules(['Tooltip'], function (w) {
                    w.process(v, r);
                });
                break;
        }
    });
    p.onmouseover = s.curry('mouseover');
    if (p.addEventListener) {
        p.addEventListener('focus', s.curry('focus'), true);
    } else p.attachEvent('onfocusin', s.curry('focus'));
});
__d("QuicklingPrelude", [], function (a, b, c, d, e, f) {
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/, h = '';
    window.location.href.replace(g, function (i, j, k, l) {
        var m, n, o;
        m = n = j + (k ? '?' + k : '');
        if (l) {
            l = l.replace(/^(!|%21)/, '');
            o = l.charAt(0);
            if (o == '/' || o == '\\')m = l.replace(/^[\\\/]+/, '/');
        }
        if (m != n) {
            if (window._script_path)document.cookie = "rdir=" + window._script_path + "; path=/; domain=" + window.location.hostname.replace(/^.*(\.facebook\..*)$/i, '$1');
            window.location.replace(h + m);
        }
    });
});
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], function (a, b, c, d, e, f) {
    var g = b('Bootloader'), h = b('CSS');
    document.documentElement.onkeydown = function (i) {
        i = i || window.event;
        var j = i.target || i.srcElement, k = i.keyCode == 13 && !i.altKey && !i.ctrlKey && !i.metaKey && !i.shiftKey && h.hasClass(j, 'enter_submit');
        if (k) {
            g.loadModules(['DOM', 'Input', 'trackReferrer', 'Form'], function (l, m, n, o) {
                if (!m.isEmpty(j)) {
                    var p = j.form, q = l.scry(p, '.enter_submit_target')[0] || l.scry(p, '[type="submit"]')[0];
                    if (q) {
                        var r = o.getAttribute(p, 'ajaxify') || o.getAttribute(p, 'action');
                        if (r)n(p, r);
                        q.click();
                    }
                }
            });
            return false;
        }
    };
});
__d("CommentPrelude", ["CSS", "Parent", "clickRefAction", "userAction"], function (a, b, c, d, e, f) {
    var g = b('CSS'), h = b('Parent'), i = b('clickRefAction'), j = b('userAction');

    function k(o, p) {
        j('ufi', o).uai('click');
        i('ufi', o, null, 'FORCE');
        return l(o, p);
    }

    function l(o, p) {
        var q = h.byTag(o, 'form');
        m(q);
        var r = g.removeClass.curry(q, 'hidden_add_comment');
        if (window.ScrollAwareDOM) {
            window.ScrollAwareDOM.monitor(q, r);
        } else r();
        if (p !== false)(q.add_comment_text_text || q.add_comment_text).focus();
        return false;
    }

    function m(o) {
        var p = g.removeClass.curry(o, 'collapsed_comments');
        if (window.ScrollAwareDOM) {
            window.ScrollAwareDOM.monitor(o, p);
        } else p();
    }

    var n = {click: k, expand: l, uncollapse: m};
    e.exports = n;
});
__d("legacy:ufi-comment-prelude-js", ["CommentPrelude"], function (a, b, c, d) {
    var e = b('CommentPrelude');
    a.fc_click = e.click;
    a.fc_expand = e.expand;
}, 3);
void(0);