/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document)throw new Error("jQuery requires a window with a document");
		return b(a)
	} : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
	var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.1", m = function (a, b) {return new m.fn.init(a, b)}, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {return b.toUpperCase()};
	m.fn = m.prototype = {
		jquery: l, constructor: m, selector: "", length: 0, toArray: function () {return d.call(this)}, get: function (a) {return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)}, pushStack: function (a) {
			var b = m.merge(this.constructor(), a);
			return b.prevObject = this, b.context = this.context, b
		}, each: function (a, b) {return m.each(this, a, b)}, map: function (a) {return this.pushStack(m.map(this, function (b, c) {return a.call(b, c, b)}))}, slice: function () {return this.pushStack(d.apply(this, arguments))}, first: function () {return this.eq(0)}, last: function () {return this.eq(-1)}, eq: function (a) {
			var b = this.length, c = +a + (0 > a ? b : 0);
			return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
		}, end: function () {return this.prevObject || this.constructor(null)}, push: f, sort: c.sort, splice: c.splice
	}, m.extend = m.fn.extend = function () {
		var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
		for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
		return g
	}, m.extend({
		expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {throw new Error(a)}, noop: function () {}, isFunction: function (a) {return "function" === m.type(a)}, isArray: Array.isArray || function (a) {return "array" === m.type(a)}, isWindow: function (a) {return null != a && a == a.window}, isNumeric: function (a) {return !m.isArray(a) && a - parseFloat(a) >= 0}, isEmptyObject: function (a) {
			var b;
			for (b in a)return !1;
			return !0
		}, isPlainObject: function (a) {
			var b;
			if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
			try {if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return !1}
			catch (c) {return !1}
			if (k.ownLast)for (b in a)return j.call(a, b);
			for (b in a);
			return void 0 === b || j.call(a, b)
		}, type: function (a) {return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a}, globalEval: function (b) {b && m.trim(b) && (a.execScript || function (b) {a.eval.call(a, b)})(b)}, camelCase: function (a) {return a.replace(o, "ms-").replace(p, q)}, nodeName: function (a, b) {return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()}, each: function (a, b, c) {
			var d, e = 0, f = a.length, g = r(a);
			if (c) {
				if (g) {for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break}
				else for (e in a)if (d = b.apply(a[e], c), d === !1)break
			}
			else if (g) {for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break}
			else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
			return a
		}, trim: function (a) {return null == a ? "" : (a + "").replace(n, "")}, makeArray: function (a, b) {
			var c = b || [];
			return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
		}, inArray: function (a, b, c) {
			var d;
			if (b) {
				if (g)return g.call(b, a, c);
				for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
			}
			return -1
		}, merge: function (a, b) {
			var c = +b.length, d = 0, e = a.length;
			while (c > d)a[e++] = b[d++];
			if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
			return a.length = e, a
		}, grep: function (a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
			return e
		}, map: function (a, b, c) {
			var d, f = 0, g = a.length, h = r(a), i = [];
			if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d);
			else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
			return e.apply([], i)
		}, guid: 1, proxy: function (a, b) {
			var c, e, f;
			return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {return a.apply(b || this, c.concat(d.call(arguments)))}, e.guid = a.guid = a.guid || m.guid++, e) : void 0
		}, now: function () {return +new Date}, support: k
	}), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {h["[object " + b + "]"] = b.toLowerCase()});
	function r(a) {
		var b = a.length, c = m.type(a);
		return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
	}

	var s = function (a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {return a === b && (l = !0), 0}, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
					for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
					return -1
				}, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
			ID: new RegExp("^#(" + N + ")"),
			CLASS: new RegExp("^\\.(" + N + ")"),
			TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
			ATTR: new RegExp("^" + P),
			PSEUDO: new RegExp("^" + Q),
			CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
			bool: new RegExp("^(?:" + L + ")$", "i"),
			needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
		}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
			var d = "0x" + b - 65536;
			return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
		};
		try {I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType}
		catch (eb) {
			I = {
				apply: F.length ? function (a, b) {H.apply(a, J.call(b))} : function (a, b) {
					var c = a.length, d = 0;
					while (a[c++] = b[d++]);
					a.length = c - 1
				}
			}
		}
		function fb(a, b, d, e) {
			var f, h, j, k, l, o, r, s, w, x;
			if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
			if (1 !== (k = b.nodeType) && 9 !== k)return [];
			if (p && !e) {
				if (f = _.exec(a))if (j = f[1]) {
					if (9 === k) {
						if (h = b.getElementById(j), !h || !h.parentNode)return d;
						if (h.id === j)return d.push(h), d
					}
					else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
				}
				else {
					if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
					if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
				}
				if (c.qsa && (!q || !q.test(a))) {
					if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
						o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
						while (l--)o[l] = s + qb(o[l]);
						w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
					}
					if (x)try {return I.apply(d, w.querySelectorAll(x)), d}
					catch (y) {}
					finally {r || b.removeAttribute("id")}
				}
			}
			return i(a.replace(R, "$1"), b, d, e)
		}

		function gb() {
			var a = [];

			function b(c, e) {return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e}

			return b
		}

		function hb(a) {return a[u] = !0, a}

		function ib(a) {
			var b = n.createElement("div");
			try {return !!a(b)}
			catch (c) {return !1}
			finally {b.parentNode && b.parentNode.removeChild(b), b = null}
		}

		function jb(a, b) {
			var c = a.split("|"), e = a.length;
			while (e--)d.attrHandle[c[e]] = b
		}

		function kb(a, b) {
			var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
			if (d)return d;
			if (c)while (c = c.nextSibling)if (c === b)return -1;
			return a ? 1 : -1
		}

		function lb(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return "input" === c && b.type === a
			}
		}

		function mb(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();
				return ("input" === c || "button" === c) && b.type === a
			}
		}

		function nb(a) {
			return hb(function (b) {
				return b = +b, hb(function (c, d) {
					var e, f = a([], c.length, b), g = f.length;
					while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
				})
			})
		}

		function ob(a) {return a && typeof a.getElementsByTagName !== C && a}

		c = fb.support = {}, f = fb.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;
			return b ? "HTML" !== b.nodeName : !1
		}, m = fb.setDocument = function (a) {
			var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
			return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {m()}, !1) : g.attachEvent && g.attachEvent("onunload", function () {m()})), c.attributes = ib(function (a) {return a.className = "i", !a.getAttribute("className")}), c.getElementsByTagName = ib(function (a) {return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length}), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length}), c.getById = ib(function (a) {return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length}), c.getById ? (d.find.ID = function (a, b) {
				if (typeof b.getElementById !== C && p) {
					var c = b.getElementById(a);
					return c && c.parentNode ? [c] : []
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(cb, db);
				return function (a) {return a.getAttribute("id") === b}
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(cb, db);
				return function (a) {
					var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
					return c && c.value === b
				}
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0} : function (a, b) {
				var c, d = [], e = 0, f = b.getElementsByTagName(a);
				if ("*" === a) {
					while (c = f[e++])1 === c.nodeType && d.push(c);
					return d
				}
				return f
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0}, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")}), ib(function (a) {
				var b = e.createElement("input");
				b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
			})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
				return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
			} : function (a, b) {
				if (b)while (b = b.parentNode)if (b === a)return !0;
				return !1
			}, B = b ? function (a, b) {
				if (a === b)return l = !0, 0;
				var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
				return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
			} : function (a, b) {
				if (a === b)return l = !0, 0;
				var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
				if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
				if (f === g)return kb(a, b);
				c = a;
				while (c = c.parentNode)h.unshift(c);
				c = b;
				while (c = c.parentNode)i.unshift(c);
				while (h[d] === i[d])d++;
				return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
			}, e) : n
		}, fb.matches = function (a, b) {return fb(a, null, null, b)}, fb.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
				var d = s.call(a, b);
				if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
			}
			catch (e) {}
			return fb(b, n, null, [a]).length > 0
		}, fb.contains = function (a, b) {return (a.ownerDocument || a) !== n && m(a), t(a, b)}, fb.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);
			var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
			return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
		}, fb.error = function (a) {throw new Error("Syntax error, unrecognized expression: " + a)}, fb.uniqueSort = function (a) {
			var b, d = [], e = 0, f = 0;
			if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++])b === a[f] && (e = d.push(f));
				while (e--)a.splice(d[e], 1)
			}
			return k = null, a
		}, e = fb.getText = function (a) {
			var b, c = "", d = 0, f = a.nodeType;
			if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent)return a.textContent;
					for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
				}
				else if (3 === f || 4 === f)return a.nodeValue
			}
			else while (b = a[d++])c += e(b);
			return c
		}, d = fb.selectors = {
			cacheLength: 50, createPseudo: hb, match: X, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {
				ATTR: function (a) {return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)}, CHILD: function (a) {return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a}, PSEUDO: function (a) {
					var b, c = !a[6] && a[2];
					return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
				}
			}, filter: {
				TAG: function (a) {
					var b = a.replace(cb, db).toLowerCase();
					return "*" === a ? function () {return !0} : function (a) {return a.nodeName && a.nodeName.toLowerCase() === b}
				}, CLASS: function (a) {
					var b = y[a + " "];
					return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")})
				}, ATTR: function (a, b, c) {
					return function (d) {
						var e = fb.attr(d, a);
						return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
					}
				}, CHILD: function (a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
					return 1 === d && 0 === e ? function (a) {return !!a.parentNode} : function (b, c, i) {
						var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
						if (q) {
							if (f) {
								while (p) {
									l = b;
									while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
									o = p = "only" === a && !o && "nextSibling"
								}
								return !0
							}
							if (o = [g ? q.firstChild : q.lastChild], g && s) {
								k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
								while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
									k[a] = [w, n, m];
									break
								}
							}
							else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1];
							else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
							return m -= e, m === d || m % d === 0 && m / d >= 0
						}
					}
				}, PSEUDO: function (a, b) {
					var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
					return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
						var d, f = e(a, b), g = f.length;
						while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
					}) : function (a) {return e(a, 0, c)}) : e
				}
			}, pseudos: {
				not: hb(function (a) {
					var b = [], c = [], d = h(a.replace(R, "$1"));
					return d[u] ? hb(function (a, b, c, e) {
						var f, g = d(a, null, e, []), h = a.length;
						while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
					}) : function (a, e, f) {return b[0] = a, d(b, null, f, c), !c.pop()}
				}), has: hb(function (a) {return function (b) {return fb(a, b).length > 0}}), contains: hb(function (a) {return function (b) {return (b.textContent || b.innerText || e(b)).indexOf(a) > -1}}), lang: hb(function (a) {
					return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
						var c;
						do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
						return !1
					}
				}), target: function (b) {
					var c = a.location && a.location.hash;
					return c && c.slice(1) === b.id
				}, root: function (a) {return a === o}, focus: function (a) {return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)}, enabled: function (a) {return a.disabled === !1}, disabled: function (a) {return a.disabled === !0}, checked: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && !!a.checked || "option" === b && !!a.selected
				}, selected: function (a) {return a.parentNode && a.parentNode.selectedIndex, a.selected === !0}, empty: function (a) {
					for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
					return !0
				}, parent: function (a) {return !d.pseudos.empty(a)}, header: function (a) {return Z.test(a.nodeName)}, input: function (a) {return Y.test(a.nodeName)}, button: function (a) {
					var b = a.nodeName.toLowerCase();
					return "input" === b && "button" === a.type || "button" === b
				}, text: function (a) {
					var b;
					return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
				}, first: nb(function () {return [0]}), last: nb(function (a, b) {return [b - 1]}), eq: nb(function (a, b, c) {return [0 > c ? c + b : c]}), even: nb(function (a, b) {
					for (var c = 0; b > c; c += 2)a.push(c);
					return a
				}), odd: nb(function (a, b) {
					for (var c = 1; b > c; c += 2)a.push(c);
					return a
				}), lt: nb(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
					return a
				}), gt: nb(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
					return a
				})
			}
		}, d.pseudos.nth = d.pseudos.eq;
		for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
		for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
		function pb() {}

		pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
			var c, e, f, g, h, i, j, k = z[a + " "];
			if (k)return b ? 0 : k.slice(0);
			h = a, i = [], j = d.preFilter;
			while (h) {
				(!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(R, " ")}), h = h.slice(c.length));
				for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
				if (!c)break
			}
			return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
		};
		function qb(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
			return d
		}

		function rb(a, b, c) {
			var d = b.dir, e = c && "parentNode" === d, f = x++;
			return b.first ? function (b, c, f) {while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)} : function (b, c, g) {
				var h, i, j = [w, f];
				if (g) {while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0}
				else while (b = b[d])if (1 === b.nodeType || e) {
					if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
					if (i[d] = j, j[2] = a(b, c, g))return !0
				}
			}
		}

		function sb(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;
				while (e--)if (!a[e](b, c, d))return !1;
				return !0
			} : a[0]
		}

		function tb(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
			return c
		}

		function ub(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
			return g
		}

		function vb(a, b, c, d, e, f) {
			return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
				var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
				if (c && c(q, r, h, i), d) {
					j = ub(r, n), d(j, [], h, i), k = j.length;
					while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
				}
				if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;
							while (k--)(l = r[k]) && j.push(q[k] = l);
							e(null, r = [], j, i)
						}
						k = r.length;
						while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
					}
				}
				else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
			})
		}

		function wb(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {return a === b}, h, !0), l = rb(function (a) {return K.call(b, a) > -1}, h, !0), m = [function (a, c, d) {return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))}]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)];
			else {
				if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
					for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
					return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
				}
				m.push(c)
			}
			return sb(m)
		}

		function xb(a, b) {
			var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
				var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
				for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
					if (e && l) {
						m = 0;
						while (o = a[m++])if (o(l, g, h)) {
							i.push(l);
							break
						}
						k && (w = v)
					}
					c && ((l = !o && l) && p--, f && r.push(l))
				}
				if (p += q, c && q !== p) {
					m = 0;
					while (o = b[m++])o(r, s, g, h);
					if (f) {
						if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
						s = ub(s)
					}
					I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
				}
				return k && (w = v, j = t), r
			};
			return c ? hb(f) : f
		}

		return h = fb.compile = function (a, b) {
			var c, d = [], e = [], f = A[a + " "];
			if (!f) {
				b || (b = g(a)), c = b.length;
				while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
				f = A(a, xb(e, d)), f.selector = a
			}
			return f
		}, i = fb.select = function (a, b, e, f) {
			var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
			if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
					n && (b = b.parentNode), a = a.slice(j.shift().value.length)
				}
				i = X.needsContext.test(a) ? 0 : j.length;
				while (i--) {
					if (k = j[i], d.relative[l = k.type])break;
					if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
						break
					}
				}
			}
			return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {return 1 & a.compareDocumentPosition(n.createElement("div"))}), ib(function (a) {return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")}) || jb("type|href|height|width", function (a, b, c) {return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)}), c.attributes && ib(function (a) {return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")}) || jb("value", function (a, b, c) {return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue}), ib(function (a) {return null == a.getAttribute("disabled")}) || jb(L, function (a, b, c) {
			var d;
			return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
		}), fb
	}(a);
	m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
	var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

	function w(a, b, c) {
		if (m.isFunction(b))return m.grep(a, function (a, d) {return !!b.call(a, d, a) !== c});
		if (b.nodeType)return m.grep(a, function (a) {return a === b !== c});
		if ("string" == typeof b) {
			if (v.test(b))return m.filter(b, a, c);
			b = m.filter(b, a)
		}
		return m.grep(a, function (a) {return m.inArray(a, b) >= 0 !== c})
	}

	m.filter = function (a, b, c) {
		var d = b[0];
		return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {return 1 === a.nodeType}))
	}, m.fn.extend({
		find: function (a) {
			var b, c = [], d = this, e = d.length;
			if ("string" != typeof a)return this.pushStack(m(a).filter(function () {for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0}));
			for (b = 0; e > b; b++)m.find(a, d[b], c);
			return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
		}, filter: function (a) {return this.pushStack(w(this, a || [], !1))}, not: function (a) {return this.pushStack(w(this, a || [], !0))}, is: function (a) {return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length}
	});
	var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
		var c, d;
		if (!a)return this;
		if ("string" == typeof a) {
			if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
			if (c[1]) {
				if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
				return this
			}
			if (d = y.getElementById(c[2]), d && d.parentNode) {
				if (d.id !== c[2])return x.find(a);
				this.length = 1, this[0] = d
			}
			return this.context = y, this.selector = a, this
		}
		return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
	};
	A.prototype = m.fn, x = m(y);
	var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
	m.extend({
		dir: function (a, b, c) {
			var d = [], e = a[b];
			while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
			return d
		}, sibling: function (a, b) {
			for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
			return c
		}
	}), m.fn.extend({
		has: function (a) {
			var b, c = m(a, this), d = c.length;
			return this.filter(function () {for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0})
		}, closest: function (a, b) {
			for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
				f.push(c);
				break
			}
			return this.pushStack(f.length > 1 ? m.unique(f) : f)
		}, index: function (a) {return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1}, add: function (a, b) {return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))}, addBack: function (a) {return this.add(null == a ? this.prevObject : this.prevObject.filter(a))}
	});
	function D(a, b) {
		do a = a[b]; while (a && 1 !== a.nodeType);
		return a
	}

	m.each({
		parent: function (a) {
			var b = a.parentNode;
			return b && 11 !== b.nodeType ? b : null
		}, parents: function (a) {return m.dir(a, "parentNode")}, parentsUntil: function (a, b, c) {return m.dir(a, "parentNode", c)}, next: function (a) {return D(a, "nextSibling")}, prev: function (a) {return D(a, "previousSibling")}, nextAll: function (a) {return m.dir(a, "nextSibling")}, prevAll: function (a) {return m.dir(a, "previousSibling")}, nextUntil: function (a, b, c) {return m.dir(a, "nextSibling", c)}, prevUntil: function (a, b, c) {return m.dir(a, "previousSibling", c)}, siblings: function (a) {return m.sibling((a.parentNode || {}).firstChild, a)}, children: function (a) {return m.sibling(a.firstChild)}, contents: function (a) {return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)}
	}, function (a, b) {
		m.fn[a] = function (c, d) {
			var e = m.map(this, b, c);
			return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
		}
	});
	var E = /\S+/g, F = {};

	function G(a) {
		var b = F[a] = {};
		return m.each(a.match(E) || [], function (a, c) {b[c] = !0}), b
	}

	m.Callbacks = function (a) {
		a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
		var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
			for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
				c = !1;
				break
			}
			b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
		}, k = {
			add: function () {
				if (h) {
					var d = h.length;
					!function f(b) {
						m.each(b, function (b, c) {
							var d = m.type(c);
							"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
						})
					}(arguments), b ? e = h.length : c && (g = d, j(c))
				}
				return this
			}, remove: function () {
				return h && m.each(arguments, function (a, c) {
					var d;
					while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
				}), this
			}, has: function (a) {return a ? m.inArray(a, h) > -1 : !(!h || !h.length)}, empty: function () {return h = [], e = 0, this}, disable: function () {return h = i = c = void 0, this}, disabled: function () {return !h}, lock: function () {return i = void 0, c || k.disable(), this}, locked: function () {return !i}, fireWith: function (a, c) {return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this}, fire: function () {return k.fireWith(this, arguments), this}, fired: function () {return !!d}
		};
		return k
	}, m.extend({
		Deferred: function (a) {
			var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
				state: function () {return c}, always: function () {return e.done(arguments).fail(arguments), this}, then: function () {
					var a = arguments;
					return m.Deferred(function (c) {
						m.each(b, function (b, f) {
							var g = m.isFunction(a[b]) && a[b];
							e[f[1]](function () {
								var a = g && g.apply(this, arguments);
								a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
							})
						}), a = null
					}).promise()
				}, promise: function (a) {return null != a ? m.extend(a, d) : d}
			}, e = {};
			return d.pipe = d.then, m.each(b, function (a, f) {
				var g = f[2], h = f[3];
				d[f[1]] = g.add, h && g.add(function () {c = h}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {return e[f[0] + "With"](this === e ? d : this, arguments), this}, e[f[0] + "With"] = g.fireWith
			}), d.promise(e), a && a.call(e, e), e
		}, when: function (a) {
			var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {return function (e) {b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)}}, i, j, k;
			if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
			return f || g.resolveWith(k, c), g.promise()
		}
	});
	var H;
	m.fn.ready = function (a) {return m.ready.promise().done(a), this}, m.extend({
		isReady: !1, readyWait: 1, holdReady: function (a) {a ? m.readyWait++ : m.ready(!0)}, ready: function (a) {
			if (a === !0 ? !--m.readyWait : !m.isReady) {
				if (!y.body)return setTimeout(m.ready);
				m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
			}
		}
	});
	function I() {y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))}

	function J() {(y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())}

	m.ready.promise = function (b) {
		if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(m.ready);
		else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
		else {
			y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
			var c = !1;
			try {c = null == a.frameElement && y.documentElement}
			catch (d) {}
			c && c.doScroll && !function e() {
				if (!m.isReady) {
					try {c.doScroll("left")}
					catch (a) {return setTimeout(e, 50)}
					I(), m.ready()
				}
			}()
		}
		return H.promise(b)
	};
	var K = "undefined", L;
	for (L in m(k))break;
	k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
		var a, b, c, d;
		c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
	}), function () {
		var a = y.createElement("div");
		if (null == k.deleteExpando) {
			k.deleteExpando = !0;
			try {delete a.test}
			catch (b) {k.deleteExpando = !1}
		}
		a = null
	}(), m.acceptData = function (a) {
		var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
		return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
	};
	var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

	function O(a, b, c) {
		if (void 0 === c && 1 === a.nodeType) {
			var d = "data-" + b.replace(N, "-$1").toLowerCase();
			if (c = a.getAttribute(d), "string" == typeof c) {
				try {c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c}
				catch (e) {}
				m.data(a, b, c)
			}
			else c = void 0
		}
		return c
	}

	function P(a) {
		var b;
		for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
		return !0
	}

	function Q(a, b, d, e) {
		if (m.acceptData(a)) {
			var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
			if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
		}
	}

	function R(a, b, c) {
		if (m.acceptData(a)) {
			var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
			if (g[h]) {
				if (b && (d = c ? g[h] : g[h].data)) {
					m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
					while (e--)delete d[b[e]];
					if (c ? !P(d) : !m.isEmptyObject(d))return
				}
				(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
			}
		}
	}

	m.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (a) {return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)}, data: function (a, b, c) {return Q(a, b, c)}, removeData: function (a, b) {return R(a, b)}, _data: function (a, b, c) {return Q(a, b, c, !0)}, _removeData: function (a, b) {return R(a, b, !0)}}), m.fn.extend({
		data: function (a, b) {
			var c, d, e, f = this[0], g = f && f.attributes;
			if (void 0 === a) {
				if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
					c = g.length;
					while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
					m._data(f, "parsedAttrs", !0)
				}
				return e
			}
			return "object" == typeof a ? this.each(function () {m.data(this, a)}) : arguments.length > 1 ? this.each(function () {m.data(this, a, b)}) : f ? O(f, a, m.data(f, a)) : void 0
		}, removeData: function (a) {return this.each(function () {m.removeData(this, a)})}
	}), m.extend({
		queue: function (a, b, c) {
			var d;
			return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
		}, dequeue: function (a, b) {
			b = b || "fx";
			var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {m.dequeue(a, b)};
			"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
		}, _queueHooks: function (a, b) {
			var c = b + "queueHooks";
			return m._data(a, c) || m._data(a, c, {empty: m.Callbacks("once memory").add(function () {m._removeData(a, b + "queue"), m._removeData(a, c)})})
		}
	}), m.fn.extend({
		queue: function (a, b) {
			var c = 2;
			return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = m.queue(this, a, b);
				m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
			})
		}, dequeue: function (a) {return this.each(function () {m.dequeue(this, a)})}, clearQueue: function (a) {return this.queue(a || "fx", [])}, promise: function (a, b) {
			var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {--d || e.resolveWith(f, [f])};
			"string" != typeof a && (b = a, a = void 0), a = a || "fx";
			while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			return h(), e.promise(b)
		}
	});
	var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)}, V = m.access = function (a, b, c, d, e, f, g) {
		var h = 0, i = a.length, j = null == c;
		if ("object" === m.type(c)) {
			e = !0;
			for (h in c)m.access(a, b, h, c[h], !0, f, g)
		}
		else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {return j.call(m(a), c)})), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
	}, W = /^(?:checkbox|radio)$/i;
	!function () {
		var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
		if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {k.noCloneEvent = !1}), b.cloneNode(!0).click()), null == k.deleteExpando) {
			k.deleteExpando = !0;
			try {delete b.test}
			catch (d) {k.deleteExpando = !1}
		}
	}(), function () {
		var b, c, d = y.createElement("div");
		for (b in{submit: !0, change: !0, focusin: !0})c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
		d = null
	}();
	var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

	function ab() {return !0}

	function bb() {return !1}

	function cb() {
		try {return y.activeElement}
		catch (a) {}
	}

	m.event = {
		global: {}, add: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
			if (r) {
				c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)}, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
				while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".")}, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
				a = null
			}
		}, remove: function (a, b, c, d, e) {
			var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
			if (r && (k = r.events)) {
				b = (b || "").match(E) || [""], j = b.length;
				while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
					l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
					while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
					i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
				}
				else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
				m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
			}
		}, trigger: function (b, c, d, e) {
			var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
			if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
				if (!e && !k.noBubble && !m.isWindow(d)) {
					for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
					l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
				}
				n = 0;
				while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
				if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
					l = d[g], l && (d[g] = null), m.event.triggered = p;
					try {d[p]()}
					catch (r) {}
					m.event.triggered = void 0, l && (d[g] = l)
				}
				return b.result
			}
		}, dispatch: function (a) {
			a = m.event.fix(a);
			var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
			if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
				h = m.event.handlers.call(this, a, j), b = 0;
				while ((f = h[b++]) && !a.isPropagationStopped()) {
					a.currentTarget = f.elem, g = 0;
					while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
				}
				return k.postDispatch && k.postDispatch.call(this, a), a.result
			}
		}, handlers: function (a, b) {
			var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
			if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
				for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
				e.length && g.push({elem: i, handlers: e})
			}
			return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
		}, fix: function (a) {
			if (a[m.expando])return a;
			var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
			g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
			while (b--)c = d[b], a[c] = f[c];
			return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
		}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a}}, mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
				var c, d, e, f = b.button, g = b.fromElement;
				return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
			}
		}, special: {
			load: {noBubble: !0}, focus: {
				trigger: function () {
					if (this !== cb() && this.focus)try {return this.focus(), !1}
					catch (a) {}
				}, delegateType: "focusin"
			}, blur: {trigger: function () {return this === cb() && this.blur ? (this.blur(), !1) : void 0}, delegateType: "focusout"}, click: {trigger: function () {return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0}, _default: function (a) {return m.nodeName(a.target, "a")}}, beforeunload: {postDispatch: function (a) {void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)}}
		}, simulate: function (a, b, c, d) {
			var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
			d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
		}
	}, m.removeEvent = y.removeEventListener ? function (a, b, c) {a.removeEventListener && a.removeEventListener(b, c, !1)} : function (a, b, c) {
		var d = "on" + b;
		a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
	}, m.Event = function (a, b) {return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)}, m.Event.prototype = {
		isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function () {
			var a = this.originalEvent;
			this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		}, stopPropagation: function () {
			var a = this.originalEvent;
			this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		}, stopImmediatePropagation: function () {
			var a = this.originalEvent;
			this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
		}
	}, m.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
		m.event.special[a] = {
			delegateType: b, bindType: b, handle: function (a) {
				var c, d = this, e = a.relatedTarget, f = a.handleObj;
				return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
			}
		}
	}), k.submitBubbles || (m.event.special.submit = {
		setup: function () {
			return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
				var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
				c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {a._submit_bubble = !0}), m._data(c, "submitBubbles", !0))
			})
		}, postDispatch: function (a) {a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))}, teardown: function () {return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")}
	}), k.changeBubbles || (m.event.special.change = {
		setup: function () {
			return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {"checked" === a.originalEvent.propertyName && (this._just_changed = !0)}), m.event.add(this, "click._change", function (a) {this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)})), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
				var b = a.target;
				X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)}), m._data(b, "changeBubbles", !0))
			})
		}, handle: function (a) {
			var b = a.target;
			return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
		}, teardown: function () {return m.event.remove(this, "._change"), !X.test(this.nodeName)}
	}), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
		var c = function (a) {m.event.simulate(b, a.target, m.event.fix(a), !0)};
		m.event.special[b] = {
			setup: function () {
				var d = this.ownerDocument || this, e = m._data(d, b);
				e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
			}, teardown: function () {
				var d = this.ownerDocument || this, e = m._data(d, b) - 1;
				e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
			}
		}
	}), m.fn.extend({
		on: function (a, b, c, d, e) {
			var f, g;
			if ("object" == typeof a) {
				"string" != typeof b && (c = c || b, b = void 0);
				for (f in a)this.on(f, b, c, a[f], e);
				return this
			}
			if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = bb;
			else if (!d)return this;
			return 1 === e && (g = d, d = function (a) {return m().off(a), g.apply(this, arguments)}, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {m.event.add(this, a, d, c, b)})
		}, one: function (a, b, c, d) {return this.on(a, b, c, d, 1)}, off: function (a, b, c) {
			var d, e;
			if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
			if ("object" == typeof a) {
				for (e in a)this.off(e, b, a[e]);
				return this
			}
			return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {m.event.remove(this, a, c, b)})
		}, trigger: function (a, b) {return this.each(function () {m.event.trigger(a, b, this)})}, triggerHandler: function (a, b) {
			var c = this[0];
			return c ? m.event.trigger(a, b, c, !0) : void 0
		}
	});
	function db(a) {
		var b = eb.split("|"), c = a.createDocumentFragment();
		if (c.createElement)while (b.length)c.createElement(b.pop());
		return c
	}

	var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	}, sb = db(y), tb = sb.appendChild(y.createElement("div"));
	rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
	function ub(a, b) {
		var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
		if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
		return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
	}

	function vb(a) {W.test(a.type) && (a.defaultChecked = a.checked)}

	function wb(a, b) {return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a}

	function xb(a) {return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a}

	function yb(a) {
		var b = pb.exec(a.type);
		return b ? a.type = b[1] : a.removeAttribute("type"), a
	}

	function zb(a, b) {for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))}

	function Ab(a, b) {
		if (1 === b.nodeType && m.hasData(a)) {
			var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
			if (h) {
				delete g.handle, g.events = {};
				for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
			}
			g.data && (g.data = m.extend({}, g.data))
		}
	}

	function Bb(a, b) {
		var c, d, e;
		if (1 === b.nodeType) {
			if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
				e = m._data(b);
				for (d in e.events)m.removeEvent(b, d, e.handle);
				b.removeAttribute(m.expando)
			}
			"script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
		}
	}

	m.extend({
		clone: function (a, b, c) {
			var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
			if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)d[g] && Bb(e, d[g]);
			if (b)if (c)for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)Ab(e, d[g]);
			else Ab(a, f);
			return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
		}, buildFragment: function (a, b, c, d) {
			for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p, f.nodeType ? [f] : f);
			else if (lb.test(f)) {
				h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
				while (e--)h = h.lastChild;
				if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
					f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
					while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
				}
				m.merge(p, h.childNodes), h.textContent = "";
				while (h.firstChild)h.removeChild(h.firstChild);
				h = o.lastChild
			}
			else p.push(b.createTextNode(f));
			h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
			while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
				e = 0;
				while (f = h[e++])ob.test(f.type || "") && c.push(f)
			}
			return h = null, o
		}, cleanData: function (a, b) {
			for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
				if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
				j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
			}
		}
	}), m.fn.extend({
		text: function (a) {return V(this, function (a) {return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))}, null, a, arguments.length)}, append: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = wb(this, a);
					b.appendChild(a)
				}
			})
		}, prepend: function () {
			return this.domManip(arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = wb(this, a);
					b.insertBefore(a, b.firstChild)
				}
			})
		}, before: function () {return this.domManip(arguments, function (a) {this.parentNode && this.parentNode.insertBefore(a, this)})}, after: function () {return this.domManip(arguments, function (a) {this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)})}, remove: function (a, b) {
			for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
			return this
		}, empty: function () {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && m.cleanData(ub(a, !1));
				while (a.firstChild)a.removeChild(a.firstChild);
				a.options && m.nodeName(a, "select") && (a.options.length = 0)
			}
			return this
		}, clone: function (a, b) {return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {return m.clone(this, a, b)})}, html: function (a) {
			return V(this, function (a) {
				var b = this[0] || {}, c = 0, d = this.length;
				if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
				if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
					a = a.replace(ib, "<$1></$2>");
					try {
						for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
						b = 0
					}
					catch (e) {}
				}
				b && this.empty().append(a)
			}, null, a, arguments.length)
		}, replaceWith: function () {
			var a = arguments[0];
			return this.domManip(arguments, function (b) {a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)}), a && (a.length || a.nodeType) ? this : this.remove()
		}, detach: function (a) {return this.remove(a, !0)}, domManip: function (a, b) {
			a = e.apply([], a);
			var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
			if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))return this.each(function (c) {
				var d = n.eq(c);
				q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
			});
			if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
				for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
				if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
				i = c = null
			}
			return this
		}
	}), m.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
		m.fn[a] = function (a) {
			for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
			return this.pushStack(e)
		}
	});
	var Cb, Db = {};

	function Eb(b, c) {
		var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
		return e.detach(), f
	}

	function Fb(a) {
		var b = y, c = Db[a];
		return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
	}

	!function () {
		var a;
		k.shrinkWrapBlocks = function () {
			if (null != a)return a;
			a = !1;
			var b, c, d;
			return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
		}
	}();
	var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
	a.getComputedStyle ? (Ib = function (a) {return a.ownerDocument.defaultView.getComputedStyle(a, null)}, Jb = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
	}) : y.documentElement.currentStyle && (Ib = function (a) {return a.currentStyle}, Jb = function (a, b, c) {
		var d, e, f, g, h = a.style;
		return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
	});
	function Lb(a, b) {
		return {
			get: function () {
				var c = a();
				if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
			}
		}
	}

	!function () {
		var b, c, d, e, f, g, h;
		if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
			c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {reliableHiddenOffsets: function () {return null == g && i(), g}, boxSizingReliable: function () {return null == f && i(), f}, pixelPosition: function () {return null == e && i(), e}, reliableMarginRight: function () {return null == h && i(), h}});
			function i() {
				var b, c, d, i;
				c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
			}
		}
	}(), m.swap = function (a, b, c, d) {
		var e, f, g = {};
		for (f in b)g[f] = a.style[f], a.style[f] = b[f];
		e = c.apply(a, d || []);
		for (f in b)a.style[f] = g[f];
		return e
	};
	var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {position: "absolute", visibility: "hidden", display: "block"}, Sb = {letterSpacing: "0", fontWeight: "400"}, Tb = ["Webkit", "O", "Moz", "ms"];

	function Ub(a, b) {
		if (b in a)return b;
		var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
		while (e--)if (b = Tb[e] + c, b in a)return b;
		return d
	}

	function Vb(a, b) {
		for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
		for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
		return a
	}

	function Wb(a, b, c) {
		var d = Pb.exec(b);
		return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
	}

	function Xb(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
		return g
	}

	function Yb(a, b, c) {
		var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
		if (0 >= e || null == e) {
			if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))return e;
			d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
		}
		return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
	}

	m.extend({
		cssHooks: {
			opacity: {
				get: function (a, b) {
					if (b) {
						var c = Jb(a, "opacity");
						return "" === c ? "1" : c
					}
				}
			}
		}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e, f, g, h = m.camelCase(b), i = a.style;
				if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
				if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {i[b] = c}
				catch (j) {}
			}
		}, css: function (a, b, c, d) {
			var e, f, g, h = m.camelCase(b);
			return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
		}
	}), m.each(["height", "width"], function (a, b) {
		m.cssHooks[b] = {
			get: function (a, c, d) {return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {return Yb(a, b, d)}) : Yb(a, b, d) : void 0}, set: function (a, c, d) {
				var e = d && Ib(a);
				return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
			}
		}
	}), k.opacity || (m.cssHooks.opacity = {
		get: function (a, b) {return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""}, set: function (a, b) {
			var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
			c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
		}
	}), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {return b ? m.swap(a, {display: "inline-block"}, Jb, [a, "marginRight"]) : void 0}), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
		m.cssHooks[a + b] = {
			expand: function (c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
				return e
			}
		}, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
	}), m.fn.extend({
		css: function (a, b) {
			return V(this, function (a, b, c) {
				var d, e, f = {}, g = 0;
				if (m.isArray(b)) {
					for (d = Ib(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
					return f
				}
				return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
			}, a, b, arguments.length > 1)
		}, show: function () {return Vb(this, !0)}, hide: function () {return Vb(this)}, toggle: function (a) {return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {U(this) ? m(this).show() : m(this).hide()})}
	});
	function Zb(a, b, c, d, e) {return new Zb.prototype.init(a, b, c, d, e)}

	m.Tween = Zb, Zb.prototype = {
		constructor: Zb, init: function (a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
		}, cur: function () {
			var a = Zb.propHooks[this.prop];
			return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
		}, run: function (a) {
			var b, c = Zb.propHooks[this.prop];
			return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
		}
	}, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
		_default: {
			get: function (a) {
				var b;
				return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
			}, set: function (a) {m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now}
		}
	}, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {set: function (a) {a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)}}, m.easing = {linear: function (a) {return a}, swing: function (a) {return .5 - Math.cos(a * Math.PI) / 2}}, m.fx = Zb.prototype.init, m.fx.step = {};
	var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = {
		"*": [function (a, b) {
			var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
			if (g && g[3] !== f) {
				f = f || g[3], e = e || [], g = +d || 1;
				do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
			}
			return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
		}]
	};

	function fc() {return setTimeout(function () {$b = void 0}), $b = m.now()}

	function gc(a, b) {
		var c, d = {height: a}, e = 0;
		for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
		return b && (d.opacity = d.width = a), d
	}

	function hc(a, b, c) {for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d}

	function ic(a, b, c) {
		var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
		c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {h.unqueued || i()}), h.unqueued++, n.always(function () {n.always(function () {h.unqueued--, m.queue(a, "fx").length || h.empty.fire()})})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]}));
		for (d in b)if (e = b[d], ac.exec(e)) {
			if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
				if ("show" !== e || !r || void 0 === r[d])continue;
				q = !0
			}
			o[d] = r && r[d] || m.style(a, d)
		}
		else j = void 0;
		if (m.isEmptyObject(o))"inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
		else {
			r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {m(a).hide()}), n.done(function () {
				var b;
				m._removeData(a, "fxshow");
				for (b in o)m.style(a, b, o[b])
			});
			for (d in o)g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
		}
	}

	function jc(a, b) {
		var c, d, e, f, g;
		for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
			f = g.expand(f), delete a[d];
			for (c in f)c in a || (a[c] = f[c], b[c] = e)
		}
		else b[d] = e
	}

	function kc(a, b, c) {
		var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {delete i.elem}), i = function () {
			if (e)return !1;
			for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
			return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
		}, j = h.promise({
			elem: a, props: m.extend({}, b), opts: m.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function (b, c) {
				var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
				return j.tweens.push(d), d
			}, stop: function (b) {
				var c = 0, d = b ? j.tweens.length : 0;
				if (e)return this;
				for (e = !0; d > c; c++)j.tweens[c].run(1);
				return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
			}
		}), k = j.props;
		for (jc(k, j.opts.specialEasing); g > f; f++)if (d = dc[f].call(j, a, k, j.opts))return d;
		return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
	}

	m.Animation = m.extend(kc, {
		tweener: function (a, b) {
			m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
			for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
		}, prefilter: function (a, b) {b ? dc.unshift(a) : dc.push(a)}
	}), m.speed = function (a, b, c) {
		var d = a && "object" == typeof a ? m.extend({}, a) : {complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b};
		return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)}, d
	}, m.fn.extend({
		fadeTo: function (a, b, c, d) {return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)}, animate: function (a, b, c, d) {
			var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
				var b = kc(this, m.extend({}, a), f);
				(e || m._data(this, "finish")) && b.stop(!0)
			};
			return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
		}, stop: function (a, b, c) {
			var d = function (a) {
				var b = a.stop;
				delete a.stop, b(c)
			};
			return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
				if (e)g[e] && g[e].stop && d(g[e]);
				else for (e in g)g[e] && g[e].stop && cc.test(e) && d(g[e]);
				for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				(b || !c) && m.dequeue(this, a)
			})
		}, finish: function (a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
				for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
				delete c.finish
			})
		}
	}), m.each(["toggle", "show", "hide"], function (a, b) {
		var c = m.fn[b];
		m.fn[b] = function (a, d, e) {return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)}
	}), m.each({slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {m.fn[a] = function (a, c, d) {return this.animate(b, a, c, d)}}), m.timers = [], m.fx.tick = function () {
		var a, b = m.timers, c = 0;
		for ($b = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
		b.length || m.fx.stop(), $b = void 0
	}, m.fx.timer = function (a) {m.timers.push(a), a() ? m.fx.start() : m.timers.pop()}, m.fx.interval = 13, m.fx.start = function () {_b || (_b = setInterval(m.fx.tick, m.fx.interval))}, m.fx.stop = function () {clearInterval(_b), _b = null}, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
		return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
			var d = setTimeout(b, a);
			c.stop = function () {clearTimeout(d)}
		})
	}, function () {
		var a, b, c, d, e;
		b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
	}();
	var lc = /\r/g;
	m.fn.extend({
		val: function (a) {
			var b, c, d, e = this[0];
			{
				if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {return null == a ? "" : a + ""})), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				});
				if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
			}
		}
	}), m.extend({
		valHooks: {
			option: {
				get: function (a) {
					var b = m.find.attr(a, "value");
					return null != b ? b : m.trim(m.text(a))
				}
			}, select: {
				get: function (a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
						if (b = m(c).val(), f)return b;
						g.push(b)
					}
					return g
				}, set: function (a, b) {
					var c, d, e = a.options, f = m.makeArray(b), g = e.length;
					while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {d.selected = c = !0}
					catch (h) {d.scrollHeight}
					else d.selected = !1;
					return c || (a.selectedIndex = -1), e
				}
			}
		}
	}), m.each(["radio", "checkbox"], function () {m.valHooks[this] = {set: function (a, b) {return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0}}, k.checkOn || (m.valHooks[this].get = function (a) {return null === a.getAttribute("value") ? "on" : a.value})});
	var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
	m.fn.extend({attr: function (a, b) {return V(this, m.attr, a, b, arguments.length > 1)}, removeAttr: function (a) {return this.each(function () {m.removeAttr(this, a)})}}), m.extend({
		attr: function (a, b, c) {
			var d, e, f = a.nodeType;
			if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
		}, removeAttr: function (a, b) {
			var c, d, e = 0, f = b && b.match(E);
			if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
		}, attrHooks: {
			type: {
				set: function (a, b) {
					if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
						var c = a.value;
						return a.setAttribute("type", b), c && (a.value = c), b
					}
				}
			}
		}
	}), nc = {set: function (a, b, c) {return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c}}, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = oc[b] || m.find.attr;
		oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
			var e, f;
			return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
		} : function (a, b, c) {return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null}
	}), rc && qc || (m.attrHooks.value = {set: function (a, b, c) {return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)}}), qc || (mc = {
		set: function (a, b, c) {
			var d = a.getAttributeNode(c);
			return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
		}
	}, oc.id = oc.name = oc.coords = function (a, b, c) {
		var d;
		return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
	}, m.valHooks.button = {
		get: function (a, b) {
			var c = a.getAttributeNode(b);
			return c && c.specified ? c.value : void 0
		}, set: mc.set
	}, m.attrHooks.contenteditable = {set: function (a, b, c) {mc.set(a, "" === b ? !1 : b, c)}}, m.each(["width", "height"], function (a, b) {m.attrHooks[b] = {set: function (a, c) {return "" === c ? (a.setAttribute(b, "auto"), c) : void 0}}})), k.style || (m.attrHooks.style = {get: function (a) {return a.style.cssText || void 0}, set: function (a, b) {return a.style.cssText = b + ""}});
	var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
	m.fn.extend({
		prop: function (a, b) {return V(this, m.prop, a, b, arguments.length > 1)}, removeProp: function (a) {
			return a = m.propFix[a] || a, this.each(function () {
				try {this[a] = void 0, delete this[a]}
				catch (b) {}
			})
		}
	}), m.extend({
		propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
			var d, e, f, g = a.nodeType;
			if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
		}, propHooks: {
			tabIndex: {
				get: function (a) {
					var b = m.find.attr(a, "tabindex");
					return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
				}
			}
		}
	}), k.hrefNormalized || m.each(["href", "src"], function (a, b) {m.propHooks[b] = {get: function (a) {return a.getAttribute(b, 4)}}}), k.optSelected || (m.propHooks.selected = {
		get: function (a) {
			var b = a.parentNode;
			return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
		}
	}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {m.propFix[this.toLowerCase()] = this}), k.enctype || (m.propFix.enctype = "encoding");
	var uc = /[\t\r\n\f]/g;
	m.fn.extend({
		addClass: function (a) {
			var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
			if (m.isFunction(a))return this.each(function (b) {m(this).addClass(a.call(this, b, this.className))});
			if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
				f = 0;
				while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
				g = m.trim(d), c.className !== g && (c.className = g)
			}
			return this
		}, removeClass: function (a) {
			var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
			if (m.isFunction(a))return this.each(function (b) {m(this).removeClass(a.call(this, b, this.className))});
			if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
				f = 0;
				while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
				g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
			}
			return this
		}, toggleClass: function (a, b) {
			var c = typeof a;
			return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {m(this).toggleClass(a.call(this, c, this.className, b), b)} : function () {
				if ("string" === c) {
					var b, d = 0, e = m(this), f = a.match(E) || [];
					while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
				}
				else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
			})
		}, hasClass: function (a) {
			for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)return !0;
			return !1
		}
	}), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {m.fn[b] = function (a, c) {return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)}}), m.fn.extend({hover: function (a, b) {return this.mouseenter(a).mouseleave(b || a)}, bind: function (a, b, c) {return this.on(a, null, b, c)}, unbind: function (a, b) {return this.off(a, null, b)}, delegate: function (a, b, c, d) {return this.on(b, a, c, d)}, undelegate: function (a, b, c) {return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)}});
	var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	m.parseJSON = function (b) {
		if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
		var c, d = null, e = m.trim(b + "");
		return e && !m.trim(e.replace(xc, function (a, b, e, f) {return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")})) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
	}, m.parseXML = function (b) {
		var c, d;
		if (!b || "string" != typeof b)return null;
		try {a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))}
		catch (e) {c = void 0}
		return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
	};
	var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
	try {zc = location.href}
	catch (Kc) {zc = y.createElement("a"), zc.href = "", zc = zc.href}
	yc = Gc.exec(zc.toLowerCase()) || [];
	function Lc(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");
			var d, e = 0, f = b.toLowerCase().match(E) || [];
			if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
		}
	}

	function Mc(a, b, c, d) {
		var e = {}, f = a === Ic;

		function g(h) {
			var i;
			return e[h] = !0, m.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);
				return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
			}), i
		}

		return g(b.dataTypes[0]) || !e["*"] && g("*")
	}

	function Nc(a, b) {
		var c, d, e = m.ajaxSettings.flatOptions || {};
		for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
		return c && m.extend(!0, a, c), a
	}

	function Oc(a, b, c) {
		var d, e, f, g, h = a.contents, i = a.dataTypes;
		while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
		if (e)for (g in h)if (h[g] && h[g].test(e)) {
			i.unshift(g);
			break
		}
		if (i[0] in c)f = i[0];
		else {
			for (g in c) {
				if (!i[0] || a.converters[g + " " + i[0]]) {
					f = g;
					break
				}
				d || (d = g)
			}
			f = f || d
		}
		return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
	}

	function Pc(a, b, c, d) {
		var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
		if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
		f = k.shift();
		while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i;
		else if ("*" !== i && i !== f) {
			if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
				g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
				break
			}
			if (g !== !0)if (g && a["throws"])b = g(b);
			else try {b = g(b)}
				catch (l) {return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}}
		}
		return {state: "success", data: b}
	}

	m.extend({
		active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)}, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function (a, b) {
			"object" == typeof a && (b = a, a = void 0), b = b || {};
			var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
				readyState: 0, getResponseHeader: function (a) {
					var b;
					if (2 === t) {
						if (!j) {
							j = {};
							while (b = Cc.exec(f))j[b[1].toLowerCase()] = b[2]
						}
						b = j[a.toLowerCase()]
					}
					return null == b ? null : b
				}, getAllResponseHeaders: function () {return 2 === t ? f : null}, setRequestHeader: function (a, b) {
					var c = a.toLowerCase();
					return t || (a = s[c] = s[c] || a, r[a] = b), this
				}, overrideMimeType: function (a) {return t || (k.mimeType = a), this}, statusCode: function (a) {
					var b;
					if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]];
					else v.always(a[v.status]);
					return this
				}, abort: function (a) {
					var b = a || u;
					return i && i.abort(b), x(0, b), this
				}
			};
			if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)return v;
			h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
			for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
			if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
			u = "abort";
			for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
			if (i = Mc(Ic, k, b, v)) {
				v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {v.abort("timeout")}, k.timeout));
				try {t = 1, i.send(r, x)}
				catch (w) {
					if (!(2 > t))throw w;
					x(-1, w)
				}
			}
			else x(-1, "No Transport");
			function x(a, b, c, d) {
				var j, r, s, u, w, x = b;
				2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
			}

			return v
		}, getJSON: function (a, b, c) {return m.get(a, b, c, "json")}, getScript: function (a, b) {return m.get(a, void 0, b, "script")}
	}), m.each(["get", "post"], function (a, b) {m[b] = function (a, c, d, e) {return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({url: a, type: b, dataType: e, data: c, success: d})}}), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {m.fn[b] = function (a) {return this.on(b, a)}}), m._evalUrl = function (a) {return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})}, m.fn.extend({
		wrapAll: function (a) {
			if (m.isFunction(a))return this.each(function (b) {m(this).wrapAll(a.call(this, b))});
			if (this[0]) {
				var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
					var a = this;
					while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
					return a
				}).append(this)
			}
			return this
		}, wrapInner: function (a) {
			return this.each(m.isFunction(a) ? function (b) {m(this).wrapInner(a.call(this, b))} : function () {
				var b = m(this), c = b.contents();
				c.length ? c.wrapAll(a) : b.append(a)
			})
		}, wrap: function (a) {
			var b = m.isFunction(a);
			return this.each(function (c) {m(this).wrapAll(b ? a.call(this, c) : a)})
		}, unwrap: function () {return this.parent().each(function () {m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)}).end()}
	}), m.expr.filters.hidden = function (a) {return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))}, m.expr.filters.visible = function (a) {return !m.expr.filters.hidden(a)};
	var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;

	function Vc(a, b, c, d) {
		var e;
		if (m.isArray(b))m.each(b, function (b, e) {c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)});
		else if (c || "object" !== m.type(b))d(a, b);
		else for (e in b)Vc(a + "[" + e + "]", b[e], c, d)
	}

	m.param = function (a, b) {
		var c, d = [], e = function (a, b) {b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)};
		if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {e(this.name, this.value)});
		else for (c in a)Vc(c, a[c], b, e);
		return d.join("&").replace(Qc, "+")
	}, m.fn.extend({
		serialize: function () {return m.param(this.serializeArray())}, serializeArray: function () {
			return this.map(function () {
				var a = m.prop(this, "elements");
				return a ? m.makeArray(a) : this
			}).filter(function () {
				var a = this.type;
				return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
			}).map(function (a, b) {
				var c = m(this).val();
				return null == c ? null : m.isArray(c) ? m.map(c, function (a) {return {name: b.name, value: a.replace(Sc, "\r\n")}}) : {name: b.name, value: c.replace(Sc, "\r\n")}
			}).get()
		}
	}), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()} : Zc;
	var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
	a.ActiveXObject && m(a).on("unload", function () {for (var a in Xc)Xc[a](void 0, !0)}), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
		if (!a.crossDomain || k.cors) {
			var b;
			return {
				send: function (c, d) {
					var e, f = a.xhr(), g = ++Wc;
					if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
					a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
					for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
					f.send(a.hasContent && a.data || null), b = function (c, e) {
						var h, i, j;
						if (b && (e || 4 === f.readyState))if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)4 !== f.readyState && f.abort();
						else {
							j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
							try {i = f.statusText}
							catch (k) {i = ""}
							h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
						}
						j && d(h, i, j, f.getAllResponseHeaders())
					}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
				}, abort: function () {b && b(void 0, !0)}
			}
		}
	});
	function Zc() {
		try {return new a.XMLHttpRequest}
		catch (b) {}
	}

	function $c() {
		try {return new a.ActiveXObject("Microsoft.XMLHTTP")}
		catch (b) {}
	}

	m.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {return m.globalEval(a), a}}}), m.ajaxPrefilter("script", function (a) {void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)}), m.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, c = y.head || m("head")[0] || y.documentElement;
			return {send: function (d, e) {b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))}, c.insertBefore(b, c.firstChild)}, abort: function () {b && b.onload(void 0, !0)}}
		}
	});
	var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
	m.ajaxSetup({
		jsonp: "callback", jsonpCallback: function () {
			var a = _c.pop() || m.expando + "_" + vc++;
			return this[a] = !0, a
		}
	}), m.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
		return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {return g || m.error(e + " was not called"), g[0]}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {g = arguments}, d.always(function () {a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0}), "script") : void 0
	}), m.parseHTML = function (a, b, c) {
		if (!a || "string" != typeof a)return null;
		"boolean" == typeof b && (c = b, b = !1), b = b || y;
		var d = u.exec(a), e = !c && [];
		return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
	};
	var bd = m.fn.load;
	m.fn.load = function (a, b, c) {
		if ("string" != typeof a && bd)return bd.apply(this, arguments);
		var d, e, f, g = this, h = a.indexOf(" ");
		return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({url: a, type: f, dataType: "html", data: b}).done(function (a) {e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)}).complete(c && function (a, b) {g.each(c, e || [a.responseText, b, a])}), this
	}, m.expr.filters.animated = function (a) {return m.grep(m.timers, function (b) {return a === b.elem}).length};
	var cd = a.document.documentElement;

	function dd(a) {return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1}

	m.offset = {
		setOffset: function (a, b, c) {
			var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
			"static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
		}
	}, m.fn.extend({
		offset: function (a) {
			if (arguments.length)return void 0 === a ? this : this.each(function (b) {m.offset.setOffset(this, a, b)});
			var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
			if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : d
		}, position: function () {
			if (this[0]) {
				var a, b, c = {top: 0, left: 0}, d = this[0];
				return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0)}
			}
		}, offsetParent: function () {
			return this.map(function () {
				var a = this.offsetParent || cd;
				while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
				return a || cd
			})
		}
	}), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
		var c = /Y/.test(b);
		m.fn[a] = function (d) {
			return V(this, function (a, d, e) {
				var f = dd(a);
				return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
			}, a, d, arguments.length, null)
		}
	}), m.each(["top", "left"], function (a, b) {m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0})}), m.each({Height: "height", Width: "width"}, function (a, b) {
		m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
			m.fn[d] = function (d, e) {
				var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
				return V(this, function (b, c, d) {
					var e;
					return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
				}, b, f ? d : void 0, f, null)
			}
		})
	}), m.fn.size = function () {return this.length}, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {return m});
	var ed = a.jQuery, fd = a.$;
	return m.noConflict = function (b) {return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m}, typeof b === K && (a.jQuery = a.$ = m), m
});
/**
 * jQuery iLightBox - Revolutionary Lightbox Plugin
 * http://www.ilightbox.net/
 *
 * @version: 2.2.0 - September 23, 2014
 *
 * @author: Hemn Chawroka
 *          http://www.iprodev.com/
 *
 */
(function ($, window, undefined) {

	var extensions = {
				flash: ['swf'],
				image: ['bmp', 'gif', 'jpeg', 'jpg', 'png', 'tiff', 'tif', 'jfif', 'jpe'],
				iframe: ['asp', 'aspx', 'cgi', 'cfm', 'htm', 'html', 'jsp', 'php', 'pl', 'php3', 'php4', 'php5', 'phtml', 'rb', 'rhtml', 'shtml', 'txt'],
				video: ['avi', 'mov', 'mpg', 'mpeg', 'movie', 'mp4', 'webm', 'ogv', 'ogg', '3gp', 'm4v']
			},

	// Global DOM elements
			$win = $(window),
			$doc = $(document),

	// Support indicators
			browser,
			transform,
			gpuAcceleration,
			fullScreenApi = '',
			supportTouch = !!('ontouchstart' in window) && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),

	// Events
			clickEvent = supportTouch ? "itap.iLightBox" : "click.iLightBox",
			touchStartEvent = supportTouch ? "touchstart.iLightBox" : "mousedown.iLightBox",
			touchStopEvent = supportTouch ? "touchend.iLightBox" : "mouseup.iLightBox",
			touchMoveEvent = supportTouch ? "touchmove.iLightBox" : "mousemove.iLightBox",

	// Math shorthands
			abs = Math.abs,
			sqrt = Math.sqrt,
			round = Math.round,
			max = Math.max,
			min = Math.min,
			floor = Math.floor,
			random = Math.random,

			pluginspages = {
				quicktime: 'http://www.apple.com/quicktime/download',
				flash: 'http://www.adobe.com/go/getflash'
			},

			iLightBox = function (el, options, items, instant) {
				var iL = this;

				iL.options = options,
						iL.selector = el.selector || el,
						iL.context = el.context,
						iL.instant = instant;

				if (items.length < 1) iL.attachItems();
				else iL.items = items;

				iL.vars = {
					total: iL.items.length,
					start: 0,
					current: null,
					next: null,
					prev: null,
					BODY: $('body'),
					loadRequests: 0,
					overlay: $('<div class="ilightbox-overlay"></div>'),
					loader: $('<div class="ilightbox-loader"><div></div></div>'),
					toolbar: $('<div class="ilightbox-toolbar"></div>'),
					innerToolbar: $('<div class="ilightbox-inner-toolbar"></div>'),
					title: $('<div class="ilightbox-title"></div>'),
					closeButton: $('<a class="ilightbox-close" title="' + iL.options.text.close + '"></a>'),
					fullScreenButton: $('<a class="ilightbox-fullscreen" title="' + iL.options.text.enterFullscreen + '"></a>'),
					innerPlayButton: $('<a class="ilightbox-play" title="' + iL.options.text.slideShow + '"></a>'),
					innerNextButton: $('<a class="ilightbox-next-button" title="' + iL.options.text.next + '"></a>'),
					innerPrevButton: $('<a class="ilightbox-prev-button" title="' + iL.options.text.previous + '"></a>'),
					holder: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					nextPhoto: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					prevPhoto: $('<div class="ilightbox-holder' + (supportTouch ? ' supportTouch' : '') + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					nextButton: $('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + iL.options.text.next + '"><span></span></a>'),
					prevButton: $('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + iL.options.text.previous + '"><span></span></a>'),
					thumbnails: $('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
					thumbs: false,
					nextLock: false,
					prevLock: false,
					hashLock: false,
					isMobile: false,
					mobileMaxWidth: 980,
					isInFullScreen: false,
					isSwipe: false,
					mouseID: 0,
					cycleID: 0,
					isPaused: 0
				};

				// Hideable elements with mousemove event
				iL.vars.hideableElements = iL.vars.nextButton.add(iL.vars.prevButton);

				iL.normalizeItems();

				//Check necessary plugins
				iL.availPlugins();

				//Set startFrom
				iL.options.startFrom = (iL.options.startFrom > 0 && iL.options.startFrom >= iL.vars.total) ? iL.vars.total - 1 : iL.options.startFrom;

				//If randomStart
				iL.options.startFrom = (iL.options.randomStart) ? floor(random() * iL.vars.total) : iL.options.startFrom;
				iL.vars.start = iL.options.startFrom;

				if (instant) iL.instantCall();
				else iL.patchItemsEvents();

				if (iL.options.linkId) {
					iL.hashChangeHandler();
					$win.iLightBoxHashChange(function () {
						iL.hashChangeHandler();
					});
				}

				if (supportTouch) {
					var RegExp = /(click|mouseenter|mouseleave|mouseover|mouseout)/ig,
							replace = "itap";
					iL.options.caption.show = iL.options.caption.show.replace(RegExp, replace),
							iL.options.caption.hide = iL.options.caption.hide.replace(RegExp, replace),
							iL.options.social.show = iL.options.social.show.replace(RegExp, replace),
							iL.options.social.hide = iL.options.social.hide.replace(RegExp, replace);
				}

				if (iL.options.controls.arrows) {
					$.extend(iL.options.styles, {
						nextOffsetX: 0,
						prevOffsetX: 0,
						nextOpacity: 0,
						prevOpacity: 0
					});
				}
			};

	//iLightBox helpers
	iLightBox.prototype = {
		showLoader: function () {
			var iL = this;
			iL.vars.loadRequests += 1;
			if (iL.options.path.toLowerCase() == "horizontal") iL.vars.loader.stop().animate({
				top: '-30px'
			}, iL.options.show.speed, 'easeOutCirc');
			else iL.vars.loader.stop().animate({
				left: '-30px'
			}, iL.options.show.speed, 'easeOutCirc');
		},

		hideLoader: function () {
			var iL = this;
			iL.vars.loadRequests -= 1;
			iL.vars.loadRequests = (iL.vars.loadRequests < 0) ? 0 : iL.vars.loadRequests;
			if (iL.options.path.toLowerCase() == "horizontal") {
				if (iL.vars.loadRequests <= 0) iL.vars.loader.stop().animate({
					top: '-192px'
				}, iL.options.show.speed, 'easeInCirc');
			}
			else {
				if (iL.vars.loadRequests <= 0) iL.vars.loader.stop().animate({
					left: '-192px'
				}, iL.options.show.speed, 'easeInCirc');
			}
		},

		createUI: function () {
			var iL = this;

			iL.ui = {
				currentElement: iL.vars.holder,
				nextElement: iL.vars.nextPhoto,
				prevElement: iL.vars.prevPhoto,
				currentItem: iL.vars.current,
				nextItem: iL.vars.next,
				prevItem: iL.vars.prev,
				hide: function () {
					iL.closeAction();
				},
				refresh: function () {
					(arguments.length > 0) ? iL.repositionPhoto(true) : iL.repositionPhoto();
				},
				fullscreen: function () {
					iL.fullScreenAction();
				}
			};
		},

		attachItems: function () {
			var iL = this,
					itemsObject = [],
					items = [];

			$(iL.selector, iL.context).each(function () {
				var t = $(this),
						URL = t.attr(iL.options.attr) || null,
						options = t.data("options") && eval("({" + t.data("options") + "})") || {},
						caption = t.data('caption'),
						title = t.data('title'),
						type = t.data('type') || getTypeByExtension(URL);

				items.push({
					URL: URL,
					caption: caption,
					title: title,
					type: type,
					options: options
				});

				if (!iL.instant) itemsObject.push(t);
			});

			iL.items = items,
					iL.itemsObject = itemsObject;
		},

		normalizeItems: function () {
			var iL = this,
					newItems = [];

			$.each(iL.items, function (key, val) {

				if (typeof val == "string") val = {
					url: val
				};

				var URL = val.url || val.URL || null,
						options = val.options || {},
						caption = val.caption || null,
						title = val.title || null,
						type = (val.type) ? val.type.toLowerCase() : getTypeByExtension(URL),
						ext = (typeof URL != 'object') ? getExtension(URL) : '';

				options.thumbnail = options.thumbnail || ((type == "image") ? URL : null),
						options.videoType = options.videoType || null,
						options.skin = options.skin || iL.options.skin,
						options.width = options.width || null,
						options.height = options.height || null,
						options.mousewheel = (typeof options.mousewheel != 'undefined') ? options.mousewheel : true,
						options.swipe = (typeof options.swipe != 'undefined') ? options.swipe : true,
						options.social = (typeof options.social != 'undefined') ? options.social : iL.options.social.buttons && $.extend({}, {}, iL.options.social.buttons);

				if (type == "video") {
					options.html5video = (typeof options.html5video != 'undefined') ? options.html5video : {};

					options.html5video.webm = options.html5video.webm || options.html5video.WEBM || null;
					options.html5video.controls = (typeof options.html5video.controls != 'undefined') ? options.html5video.controls : "controls";
					options.html5video.preload = options.html5video.preload || "metadata";
					options.html5video.autoplay = (typeof options.html5video.autoplay != 'undefined') ? options.html5video.autoplay : false;
				}

				if (!options.width || !options.height) {
					if (type == "video") options.width = 1280, options.height = 720;
					else if (type == "iframe") options.width = '100%', options.height = '90%';
					else if (type == "flash") options.width = 1280, options.height = 720;
				}

				delete val.url;
				val.index = key;
				val.URL = URL;
				val.caption = caption;
				val.title = title;
				val.type = type;
				val.options = options;
				val.ext = ext;

				newItems.push(val);
			});

			iL.items = newItems;
		},

		instantCall: function () {
			var iL = this,
					key = iL.vars.start;

			iL.vars.current = key;
			iL.vars.next = (iL.items[key + 1]) ? key + 1 : null;
			iL.vars.prev = (iL.items[key - 1]) ? key - 1 : null;

			iL.addContents();
			iL.patchEvents();
		},

		addContents: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					viewport = getViewport(),
					path = opts.path.toLowerCase(),
					recognizingItems = vars.total > 0 && iL.items.filter(function (e, i, arr) {
								return ['image', 'flash', 'video'].indexOf(e.type) === -1 && typeof e.recognized === 'undefined' && (opts.smartRecognition || e.options.smartRecognition);
							}),
					needRecognition = recognizingItems.length > 0;

			if (opts.mobileOptimizer && !opts.innerToolbar)
				vars.isMobile = viewport.width <= vars.mobileMaxWidth;

			vars.overlay.addClass(opts.skin).hide().css('opacity', opts.overlay.opacity);

			if (opts.linkId)
				vars.overlay[0].setAttribute('linkid', opts.linkId);

			//Add Toolbar Buttons
			if (opts.controls.toolbar) {
				vars.toolbar.addClass(opts.skin).append(vars.closeButton);
				if (opts.controls.fullscreen)
					vars.toolbar.append(vars.fullScreenButton);
				if (opts.controls.slideshow)
					vars.toolbar.append(vars.innerPlayButton);
				if (vars.total > 1)
					vars.toolbar.append(vars.innerPrevButton).append(vars.innerNextButton);
			}

			//Append elements to body
			vars.BODY.addClass('ilightbox-noscroll').append(vars.overlay).append(vars.loader).append(vars.holder).append(vars.nextPhoto).append(vars.prevPhoto);

			if (!opts.innerToolbar)
				vars.BODY.append(vars.toolbar);
			if (opts.controls.arrows)
				vars.BODY.append(vars.nextButton).append(vars.prevButton);

			if (opts.controls.thumbnail && vars.total > 1) {
				vars.BODY.append(vars.thumbnails);
				vars.thumbnails.addClass(opts.skin).addClass('ilightbox-' + path);
				$('div.ilightbox-thumbnails-grid', vars.thumbnails).empty();
				vars.thumbs = true;
			}

			//Configure loader and arrows
			var loaderCss = (opts.path.toLowerCase() == "horizontal") ? {
				left: parseInt((viewport.width / 2) - (vars.loader.outerWidth() / 2))
			} : {
				top: parseInt((viewport.height / 2) - (vars.loader.outerHeight() / 2))
			};
			vars.loader.addClass(opts.skin).css(loaderCss);
			vars.nextButton.add(vars.prevButton).addClass(opts.skin);
			if (path == "horizontal")
				vars.loader.add(vars.nextButton).add(vars.prevButton).addClass('horizontal');

			// Configure arrow buttons
			vars.BODY[vars.isMobile ? 'addClass' : 'removeClass']('isMobile');

			if (!opts.infinite) {
				vars.prevButton.add(vars.prevButton).add(vars.innerPrevButton).add(vars.innerNextButton).removeClass('disabled');

				if (vars.current == 0)
					vars.prevButton.add(vars.innerPrevButton).addClass('disabled');
				if (vars.current >= vars.total - 1)
					vars.nextButton.add(vars.innerNextButton).addClass('disabled');
			}

			if (opts.show.effect) {
				vars.overlay.stop().fadeIn(opts.show.speed);
				vars.toolbar.stop().fadeIn(opts.show.speed);
			}
			else {
				vars.overlay.show();
				vars.toolbar.show();
			}

			var length = recognizingItems.length;
			if (needRecognition) {
				iL.showLoader();

				$.each(recognizingItems, function (key, val) {
					var resultFnc = function (result) {
						var key = -1,
								filter = iL.items.filter(function (e, i, arr) {
									if (e.URL == result.url)
										key = i;

									return e.URL == result.url;
								}),
								self = iL.items[key];

						if (result)
							$.extend(true, self, {
								URL: result.source,
								type: result.type,
								recognized: true,
								options: {
									html5video: result.html5video,
									width: (result.type == "image") ? 0 : (result.width || self.width),
									height: (result.type == "image") ? 0 : (result.height || self.height),
									thumbnail: self.options.thumbnail || result.thumbnail
								}
							});

						length--;

						if (length == 0) {
							iL.hideLoader();

							vars.dontGenerateThumbs = false;
							iL.generateThumbnails();

							if (opts.show.effect)
								setTimeout(function () {
									iL.generateBoxes();
								}, opts.show.speed);
							else
								iL.generateBoxes();
						}
					};

					iL.ogpRecognition(this, resultFnc);
				});
			}
			else {
				if (opts.show.effect)
					setTimeout(function () {
						iL.generateBoxes();
					}, opts.show.speed);
				else
					iL.generateBoxes();
			}

			iL.createUI();

			window.iLightBox = {
				close: function () {
					iL.closeAction();
				},
				fullscreen: function () {
					iL.fullScreenAction();
				},
				moveNext: function () {
					iL.moveTo('next');
				},
				movePrev: function () {
					iL.moveTo('prev');
				},
				goTo: function (index) {
					iL.goTo(index);
				},
				refresh: function () {
					iL.refresh();
				},
				reposition: function () {
					(arguments.length > 0) ? iL.repositionPhoto(true) : iL.repositionPhoto();
				},
				setOption: function (options) {
					iL.setOption(options);
				},
				destroy: function () {
					iL.closeAction();
					iL.dispatchItemsEvents();
				}
			};

			if (opts.linkId) {
				vars.hashLock = true;
				window.location.hash = opts.linkId + '/' + vars.current;
				setTimeout(function () {
					vars.hashLock = false;
				}, 55);
			}

			if (!opts.slideshow.startPaused) {
				iL.resume();
				vars.innerPlayButton.removeClass('ilightbox-play').addClass('ilightbox-pause');
			}

			//Trigger the onOpen callback
			if (typeof iL.options.callback.onOpen == 'function') iL.options.callback.onOpen.call(iL);
		},

		loadContent: function (obj, opt, speed) {
			var iL = this,
					holder, item;

			iL.createUI();

			obj.speed = speed || iL.options.effects.loadedFadeSpeed;

			if (opt == 'current') {
				if (!obj.options.mousewheel) iL.vars.lockWheel = true;
				else iL.vars.lockWheel = false;

				if (!obj.options.swipe) iL.vars.lockSwipe = true;
				else iL.vars.lockSwipe = false;
			}

			switch (opt) {
				case 'current':
					holder = iL.vars.holder, item = iL.vars.current;
					break;
				case 'next':
					holder = iL.vars.nextPhoto, item = iL.vars.next;
					break;
				case 'prev':
					holder = iL.vars.prevPhoto, item = iL.vars.prev;
					break;
			}

			holder.removeAttr('style class').addClass('ilightbox-holder' + (supportTouch ? ' supportTouch' : '')).addClass(obj.options.skin);
			$('div.ilightbox-inner-toolbar', holder).remove();

			if (obj.title || iL.options.innerToolbar) {
				var innerToolbar = iL.vars.innerToolbar.clone();
				if (obj.title && iL.options.show.title) {
					var title = iL.vars.title.clone();
					title.empty().html(obj.title);
					innerToolbar.append(title);
				}
				if (iL.options.innerToolbar) {
					innerToolbar.append((iL.vars.total > 1) ? iL.vars.toolbar.clone() : iL.vars.toolbar);
				}
				holder.prepend(innerToolbar);
			}

			iL.loadSwitcher(obj, holder, item, opt);
		},

		loadSwitcher: function (obj, holder, item, opt) {
			var iL = this,
					opts = iL.options,
					api = {
						element: holder,
						position: item
					};

			switch (obj.type) {
				case 'image':
					//Trigger the onBeforeLoad callback
					if (typeof opts.callback.onBeforeLoad == 'function') opts.callback.onBeforeLoad.call(iL, iL.ui, item);
					if (typeof obj.options.onBeforeLoad == 'function') obj.options.onBeforeLoad.call(iL, api);

					iL.loadImage(obj.URL, function (img) {
						//Trigger the onAfterLoad callback
						if (typeof opts.callback.onAfterLoad == 'function') opts.callback.onAfterLoad.call(iL, iL.ui, item);
						if (typeof obj.options.onAfterLoad == 'function') obj.options.onAfterLoad.call(iL, api);

						var width = (img) ? img.width : 400,
								height = (img) ? img.height : 200;

						holder.data({
							naturalWidth: width,
							naturalHeight: height
						});
						$('div.ilightbox-container', holder).empty().append((img) ? '<img src="' + obj.URL + '" class="ilightbox-image" />' : '<span class="ilightbox-alert">' + opts.errors.loadImage + '</span>');

						//Trigger the onRender callback
						if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
						if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

						iL.configureHolder(obj, opt, holder);
					});

					break;

				case 'video':
					holder.data({
						naturalWidth: obj.options.width,
						naturalHeight: obj.options.height
					});

					iL.addContent(holder, obj);

					//Trigger the onRender callback
					if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
					if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

					iL.configureHolder(obj, opt, holder);

					break;

				case 'iframe':
					iL.showLoader();
					holder.data({
						naturalWidth: obj.options.width,
						naturalHeight: obj.options.height
					});
					var el = iL.addContent(holder, obj);

					//Trigger the onRender callback
					if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
					if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

					//Trigger the onBeforeLoad callback
					if (typeof opts.callback.onBeforeLoad == 'function') opts.callback.onBeforeLoad.call(iL, iL.ui, item);
					if (typeof obj.options.onBeforeLoad == 'function') obj.options.onBeforeLoad.call(iL, api);

					el.bind('load', function () {
						//Trigger the onAfterLoad callback
						if (typeof opts.callback.onAfterLoad == 'function') opts.callback.onAfterLoad.call(iL, iL.ui, item);
						if (typeof obj.options.onAfterLoad == 'function') obj.options.onAfterLoad.call(iL, api);

						iL.hideLoader();
						iL.configureHolder(obj, opt, holder);
						el.unbind('load');
					});

					break;

				case 'inline':
					var el = $(obj.URL),
							content = iL.addContent(holder, obj),
							images = findImageInElement(holder);

					holder.data({
						naturalWidth: (iL.items[item].options.width || el.outerWidth()),
						naturalHeight: (iL.items[item].options.height || el.outerHeight())
					});
					content.children().eq(0).show();

					//Trigger the onRender callback
					if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
					if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

					//Trigger the onBeforeLoad callback
					if (typeof opts.callback.onBeforeLoad == 'function') opts.callback.onBeforeLoad.call(iL, iL.ui, item);
					if (typeof obj.options.onBeforeLoad == 'function') obj.options.onBeforeLoad.call(iL, api);

					iL.loadImage(images, function () {
						//Trigger the onAfterLoad callback
						if (typeof opts.callback.onAfterLoad == 'function') opts.callback.onAfterLoad.call(iL, iL.ui, item);
						if (typeof obj.options.onAfterLoad == 'function') obj.options.onAfterLoad.call(iL, api);

						iL.configureHolder(obj, opt, holder);
					});

					break;

				case 'flash':
					var el = iL.addContent(holder, obj);

					holder.data({
						naturalWidth: (iL.items[item].options.width || el.outerWidth()),
						naturalHeight: (iL.items[item].options.height || el.outerHeight())
					});

					//Trigger the onRender callback
					if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
					if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

					iL.configureHolder(obj, opt, holder);

					break;

				case 'ajax':
					var ajax = obj.options.ajax || {};
					//Trigger the onBeforeLoad callback
					if (typeof opts.callback.onBeforeLoad == 'function') opts.callback.onBeforeLoad.call(iL, iL.ui, item);
					if (typeof obj.options.onBeforeLoad == 'function') obj.options.onBeforeLoad.call(iL, api);

					iL.showLoader();
					$.ajax({
						url: obj.URL || opts.ajaxSetup.url,
						data: ajax.data || null,
						dataType: ajax.dataType || "html",
						type: ajax.type || opts.ajaxSetup.type,
						cache: ajax.cache || opts.ajaxSetup.cache,
						crossDomain: ajax.crossDomain || opts.ajaxSetup.crossDomain,
						global: ajax.global || opts.ajaxSetup.global,
						ifModified: ajax.ifModified || opts.ajaxSetup.ifModified,
						username: ajax.username || opts.ajaxSetup.username,
						password: ajax.password || opts.ajaxSetup.password,
						beforeSend: ajax.beforeSend || opts.ajaxSetup.beforeSend,
						complete: ajax.complete || opts.ajaxSetup.complete,
						success: function (data, textStatus, jqXHR) {
							iL.hideLoader();

							var el = $(data),
									container = $('div.ilightbox-container', holder),
									elWidth = iL.items[item].options.width || parseInt(el[0].getAttribute('width')),
									elHeight = iL.items[item].options.height || parseInt(el[0].getAttribute('height')),
									css = (el[0].getAttribute('width') && el[0].getAttribute('height')) ? {
										'overflow': 'hidden'
									} : {};

							container.empty().append($('<div class="ilightbox-wrapper"></div>').css(css).html(el));
							holder.show().data({
								naturalWidth: (elWidth || container.outerWidth()),
								naturalHeight: (elHeight || container.outerHeight())
							}).hide();

							//Trigger the onRender callback
							if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
							if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

							var images = findImageInElement(holder);
							iL.loadImage(images, function () {
								//Trigger the onAfterLoad callback
								if (typeof opts.callback.onAfterLoad == 'function') opts.callback.onAfterLoad.call(iL, iL.ui, item);
								if (typeof obj.options.onAfterLoad == 'function') obj.options.onAfterLoad.call(iL, api);

								iL.configureHolder(obj, opt, holder);
							});

							opts.ajaxSetup.success(data, textStatus, jqXHR);
							if (typeof ajax.success == 'function') ajax.success(data, textStatus, jqXHR);
						},
						error: function (jqXHR, textStatus, errorThrown) {
							//Trigger the onAfterLoad callback
							if (typeof opts.callback.onAfterLoad == 'function') opts.callback.onAfterLoad.call(iL, iL.ui, item);
							if (typeof obj.options.onAfterLoad == 'function') obj.options.onAfterLoad.call(iL, api);

							iL.hideLoader();
							$('div.ilightbox-container', holder).empty().append('<span class="ilightbox-alert">' + opts.errors.loadContents + '</span>');
							iL.configureHolder(obj, opt, holder);

							opts.ajaxSetup.error(jqXHR, textStatus, errorThrown);
							if (typeof ajax.error == 'function') ajax.error(jqXHR, textStatus, errorThrown);
						}
					});

					break;

				case 'html':
					var object = obj.URL,
							el;
					;
					container = $('div.ilightbox-container', holder);

					if (object[0].nodeName) el = object.clone();
					else {
						var dom = $(object);
						if (dom.selector) el = $('<div>' + dom + '</div>');
						else el = dom;
					}

					var elWidth = iL.items[item].options.width || parseInt(el.attr('width')),
							elHeight = iL.items[item].options.height || parseInt(el.attr('height'));

					iL.addContent(holder, obj);

					el.appendTo(document.documentElement).hide();

					//Trigger the onRender callback
					if (typeof opts.callback.onRender == 'function') opts.callback.onRender.call(iL, iL.ui, item);
					if (typeof obj.options.onRender == 'function') obj.options.onRender.call(iL, api);

					var images = findImageInElement(holder);

					//Trigger the onBeforeLoad callback
					if (typeof opts.callback.onBeforeLoad == 'function') opts.callback.onBeforeLoad.call(iL, iL.ui, item);
					if (typeof obj.options.onBeforeLoad == 'function') obj.options.onBeforeLoad.call(iL, api);

					iL.loadImage(images, function () {
						//Trigger the onAfterLoad callback
						if (typeof opts.callback.onAfterLoad == 'function') opts.callback.onAfterLoad.call(iL, iL.ui, item);
						if (typeof obj.options.onAfterLoad == 'function') obj.options.onAfterLoad.call(iL, api);

						holder.show().data({
							naturalWidth: (elWidth || container.outerWidth()),
							naturalHeight: (elHeight || container.outerHeight())
						}).hide();
						el.remove();

						iL.configureHolder(obj, opt, holder);
					});

					break;
			}
		},

		configureHolder: function (obj, opt, holder) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			if (opt != "current")(opt == "next") ? holder.addClass('ilightbox-next') : holder.addClass('ilightbox-prev');

			if (opt == "current")
				var item = vars.current;
			else if (opt == "next")
				var opacity = opts.styles.nextOpacity,
						item = vars.next;
			else
				var opacity = opts.styles.prevOpacity,
						item = vars.prev;

			var api = {
				element: holder,
				position: item
			};

			iL.items[item].options.width = iL.items[item].options.width || 0,
					iL.items[item].options.height = iL.items[item].options.height || 0;

			if (opt == "current") {
				if (opts.show.effect) holder.css(transform, gpuAcceleration).fadeIn(obj.speed, function () {
					holder.css(transform, '');
					if (obj.caption) {
						iL.setCaption(obj, holder);
						var caption = $('div.ilightbox-caption', holder),
								percent = parseInt((caption.outerHeight() / holder.outerHeight()) * 100);
						if (opts.caption.start & percent <= 50) caption.fadeIn(opts.effects.fadeSpeed);
					}

					var social = obj.options.social;
					if (social) {
						iL.setSocial(social, obj.URL, holder);
						if (opts.social.start) $('div.ilightbox-social', holder).fadeIn(opts.effects.fadeSpeed);
					}

					//Generate thumbnails
					iL.generateThumbnails();

					//Trigger the onShow callback
					if (typeof opts.callback.onShow == 'function') opts.callback.onShow.call(iL, iL.ui, item);
					if (typeof obj.options.onShow == 'function') obj.options.onShow.call(iL, api);
				});
				else {
					holder.show();

					//Generate thumbnails
					iL.generateThumbnails();

					//Trigger the onShow callback
					if (typeof opts.callback.onShow == 'function') opts.callback.onShow.call(iL, iL.ui, item);
					if (typeof obj.options.onShow == 'function') obj.options.onShow.call(iL, api);
				}
			}
			else {
				if (opts.show.effect) holder.fadeTo(obj.speed, opacity, function () {
					if (opt == "next") vars.nextLock = false;
					else vars.prevLock = false;

					//Generate thumbnails
					iL.generateThumbnails();

					//Trigger the onShow callback
					if (typeof opts.callback.onShow == 'function') opts.callback.onShow.call(iL, iL.ui, item);
					if (typeof obj.options.onShow == 'function') obj.options.onShow.call(iL, api);
				});
				else {
					holder.css({
						opacity: opacity
					}).show();
					if (opt == "next") vars.nextLock = false;
					else vars.prevLock = false;

					//Generate thumbnails
					iL.generateThumbnails();

					//Trigger the onShow callback
					if (typeof opts.callback.onShow == 'function') opts.callback.onShow.call(iL, iL.ui, item);
					if (typeof obj.options.onShow == 'function') obj.options.onShow.call(iL, api);
				}
			}

			setTimeout(function () {
				iL.repositionPhoto();
			}, 0);
		},

		generateBoxes: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			if (opts.infinite && vars.total >= 3) {
				if (vars.current == vars.total - 1) vars.next = 0;
				if (vars.current == 0) vars.prev = vars.total - 1;
			}
			else opts.infinite = false;

			iL.loadContent(iL.items[vars.current], 'current', opts.show.speed);

			if (iL.items[vars.next]) iL.loadContent(iL.items[vars.next], 'next', opts.show.speed);
			if (iL.items[vars.prev]) iL.loadContent(iL.items[vars.prev], 'prev', opts.show.speed);
		},

		generateThumbnails: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					timeOut = null;

			if (vars.thumbs && !iL.vars.dontGenerateThumbs) {
				var thumbnails = vars.thumbnails,
						container = $('div.ilightbox-thumbnails-container', thumbnails),
						grid = $('div.ilightbox-thumbnails-grid', container),
						i = 0;

				grid.removeAttr('style').empty();

				$.each(iL.items, function (key, val) {
					var isActive = (vars.current == key) ? 'ilightbox-active' : '',
							opacity = (vars.current == key) ? opts.thumbnails.activeOpacity : opts.thumbnails.normalOpacity,
							thumb = val.options.thumbnail,
							thumbnail = $('<div class="ilightbox-thumbnail"></div>'),
							icon = $('<div class="ilightbox-thumbnail-icon"></div>');

					thumbnail.css({
						opacity: 0
					}).addClass(isActive);

					if ((val.type == "video" || val.type == "flash") && typeof val.options.icon == 'undefined') {
						icon.addClass('ilightbox-thumbnail-video');
						thumbnail.append(icon);
					}
					else if (val.options.icon) {
						icon.addClass('ilightbox-thumbnail-' + val.options.icon);
						thumbnail.append(icon);
					}

					if (thumb) iL.loadImage(thumb, function (img) {
						i++;
						if (img) thumbnail.data({
							naturalWidth: img.width,
							naturalHeight: img.height
						}).append('<img src="' + thumb + '" border="0" />');
						else thumbnail.data({
							naturalWidth: opts.thumbnails.maxWidth,
							naturalHeight: opts.thumbnails.maxHeight
						});

						clearTimeout(timeOut);
						timeOut = setTimeout(function () {
							iL.positionThumbnails(thumbnails, container, grid);
						}, 20);
						setTimeout(function () {
							thumbnail.fadeTo(opts.effects.loadedFadeSpeed, opacity);
						}, i * 20);
					});

					grid.append(thumbnail);
				});
				iL.vars.dontGenerateThumbs = true;
			}
		},

		positionThumbnails: function (thumbnails, container, grid) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					viewport = getViewport(),
					path = opts.path.toLowerCase();

			if (!thumbnails) thumbnails = vars.thumbnails;
			if (!container) container = $('div.ilightbox-thumbnails-container', thumbnails);
			if (!grid) grid = $('div.ilightbox-thumbnails-grid', container);

			var thumbs = $('.ilightbox-thumbnail', grid),
					widthAvail = (path == 'horizontal') ? viewport.width - opts.styles.pageOffsetX : thumbs.eq(0).outerWidth() - opts.styles.pageOffsetX,
					heightAvail = (path == 'horizontal') ? thumbs.eq(0).outerHeight() - opts.styles.pageOffsetY : viewport.height - opts.styles.pageOffsetY,
					gridWidth = (path == 'horizontal') ? 0 : widthAvail,
					gridHeight = (path == 'horizontal') ? heightAvail : 0,
					active = $('.ilightbox-active', grid),
					gridCss = {},
					css = {};

			if (arguments.length < 3) {
				thumbs.css({
					opacity: opts.thumbnails.normalOpacity
				});
				active.css({
					opacity: opts.thumbnails.activeOpacity
				});
			}

			thumbs.each(function (i) {
				var t = $(this),
						data = t.data(),
						width = (path == 'horizontal') ? 0 : opts.thumbnails.maxWidth;
				height = (path == 'horizontal') ? opts.thumbnails.maxHeight : 0;
				dims = iL.getNewDimenstions(width, height, data.naturalWidth, data.naturalHeight, true);

				t.css({
					width: dims.width,
					height: dims.height
				});
				if (path == 'horizontal') t.css({
					'float': 'left'
				});

				(path == 'horizontal') ? (
						gridWidth += t.outerWidth()
				) : (
						gridHeight += t.outerHeight()
				);
			});

			gridCss = {
				width: gridWidth,
				height: gridHeight
			};

			grid.css(gridCss);

			gridCss = {};

			var gridOffset = grid.offset(),
					activeOffset = (active.length) ? active.offset() : {
						top: parseInt(heightAvail / 2),
						left: parseInt(widthAvail / 2)
					};

			gridOffset.top = (gridOffset.top - $doc.scrollTop()),
					gridOffset.left = (gridOffset.left - $doc.scrollLeft()),
					activeOffset.top = (activeOffset.top - gridOffset.top - $doc.scrollTop()),
					activeOffset.left = (activeOffset.left - gridOffset.left - $doc.scrollLeft());

			(path == 'horizontal') ? (
					gridCss.top = 0,
							gridCss.left = parseInt((widthAvail / 2) - activeOffset.left - (active.outerWidth() / 2))
			) : (
					gridCss.top = parseInt(((heightAvail / 2) - activeOffset.top - (active.outerHeight() / 2))),
							gridCss.left = 0
			);

			if (arguments.length < 3) grid.stop().animate(gridCss, opts.effects.repositionSpeed, 'easeOutCirc');
			else grid.css(gridCss);
		},

		loadImage: function (image, callback) {
			if (!$.isArray(image)) image = [image];

			var iL = this,
					length = image.length;

			if (length > 0) {
				iL.showLoader();
				$.each(image, function (index, value) {
					var img = new Image();
					img.onload = function () {
						length -= 1;
						if (length == 0) {
							iL.hideLoader();
							callback(img);
						}
					};
					img.onerror = img.onabort = function () {
						length -= 1;
						if (length == 0) {
							iL.hideLoader();
							callback(false);
						}
					};
					img.src = image[index];
				});
			}
			else callback(false);
		},

		patchItemsEvents: function () {
			var iL = this,
					vars = iL.vars,
					clickEvent = supportTouch ? "itap.iL" : "click.iL",
					vEvent = supportTouch ? "click.iL" : "itap.iL";

			if (iL.context && iL.selector) {
				var $items = $(iL.selector, iL.context);

				$(iL.context).on(clickEvent, iL.selector, function () {
					var $this = $(this),
							key = $items.index($this);

					vars.current = key;
					vars.next = iL.items[key + 1] ? key + 1 : null;
					vars.prev = iL.items[key - 1] ? key - 1 : null;

					iL.addContents();
					iL.patchEvents();

					return false;
				}).on(vEvent, iL.selector, function () {
					return false;
				});
			}
			else
				$.each(iL.itemsObject, function (key, val) {
					val.on(clickEvent, function () {
						vars.current = key;
						vars.next = iL.items[key + 1] ? key + 1 : null;
						vars.prev = iL.items[key - 1] ? key - 1 : null;

						iL.addContents();
						iL.patchEvents();

						return false;
					}).on(vEvent, function () {
						return false;
					});
				});
		},

		dispatchItemsEvents: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			if (iL.context && iL.selector)
				$(iL.context).off('.iL', iL.selector);
			else
				$.each(iL.itemsObject, function (key, val) {
					val.off('.iL');
				});
		},

		refresh: function () {
			var iL = this;

			iL.dispatchItemsEvents();
			iL.attachItems();
			iL.normalizeItems();
			iL.patchItemsEvents();
		},

		patchEvents: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					path = opts.path.toLowerCase(),
					holders = $('.ilightbox-holder'),
					fullscreenEvent = fullScreenApi.fullScreenEventName + '.iLightBox',
					durationThreshold = 1000,
					horizontalDistanceThreshold =
							verticalDistanceThreshold = 100,
					buttonsArray = [vars.nextButton[0], vars.prevButton[0], vars.nextButton[0].firstChild, vars.prevButton[0].firstChild];

			$win.bind('resize.iLightBox', function () {
				var viewport = getViewport();

				if (opts.mobileOptimizer && !opts.innerToolbar) vars.isMobile = viewport.width <= vars.mobileMaxWidth;
				vars.BODY[vars.isMobile ? 'addClass' : 'removeClass']('isMobile');

				iL.repositionPhoto(null);
				if (supportTouch) {
					clearTimeout(vars.setTime);
					vars.setTime = setTimeout(function () {
						var scrollTop = getScrollXY().y;
						window.scrollTo(0, scrollTop - 30);
						window.scrollTo(0, scrollTop + 30);
						window.scrollTo(0, scrollTop);
					}, 2000);
				}
				if (vars.thumbs) iL.positionThumbnails();
			}).bind('keydown.iLightBox', function (event) {
				if (opts.controls.keyboard) {
					switch (event.keyCode) {
						case 13:
							if (event.shiftKey && opts.keyboard.shift_enter) iL.fullScreenAction();
							break;
						case 27:
							if (opts.keyboard.esc) iL.closeAction();
							break;
						case 37:
							if (opts.keyboard.left && !vars.lockKey) iL.moveTo('prev');
							break;
						case 38:
							if (opts.keyboard.up && !vars.lockKey) iL.moveTo('prev');
							break;
						case 39:
							if (opts.keyboard.right && !vars.lockKey) iL.moveTo('next');
							break;
						case 40:
							if (opts.keyboard.down && !vars.lockKey) iL.moveTo('next');
							break;
					}
				}
			});

			if (fullScreenApi.supportsFullScreen) $win.bind(fullscreenEvent, function () {
				iL.doFullscreen();
			});

			var holderEventsArr = [opts.caption.show + '.iLightBox', opts.caption.hide + '.iLightBox', opts.social.show + '.iLightBox', opts.social.hide + '.iLightBox'].filter(function (e, i, arr) {
						return arr.lastIndexOf(e) === i;
					}),
					holderEvents = "";

			$.each(holderEventsArr, function (key, val) {
				if (key != 0) holderEvents += ' ';
				holderEvents += val;
			});

			$doc.on(clickEvent, '.ilightbox-overlay', function () {
				if (opts.overlay.blur) iL.closeAction();
			}).on(clickEvent, '.ilightbox-next, .ilightbox-next-button', function () {
				iL.moveTo('next');
			}).on(clickEvent, '.ilightbox-prev, .ilightbox-prev-button', function () {
				iL.moveTo('prev');
			}).on(clickEvent, '.ilightbox-thumbnail', function () {
				var t = $(this),
						thumbs = $('.ilightbox-thumbnail', vars.thumbnails),
						index = thumbs.index(t);

				if (index != vars.current) iL.goTo(index);
			}).on(holderEvents, '.ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)', function (e) {
				var caption = $('div.ilightbox-caption', vars.holder),
						social = $('div.ilightbox-social', vars.holder),
						fadeSpeed = opts.effects.fadeSpeed;

				if (vars.nextLock || vars.prevLock) {
					if (e.type == opts.caption.show && !caption.is(':visible')) caption.fadeIn(fadeSpeed);
					else if (e.type == opts.caption.hide && caption.is(':visible')) caption.fadeOut(fadeSpeed);

					if (e.type == opts.social.show && !social.is(':visible')) social.fadeIn(fadeSpeed);
					else if (e.type == opts.social.hide && social.is(':visible')) social.fadeOut(fadeSpeed);
				}
				else {
					if (e.type == opts.caption.show && !caption.is(':visible')) caption.stop().fadeIn(fadeSpeed);
					else if (e.type == opts.caption.hide && caption.is(':visible')) caption.stop().fadeOut(fadeSpeed);

					if (e.type == opts.social.show && !social.is(':visible')) social.stop().fadeIn(fadeSpeed);
					else if (e.type == opts.social.hide && social.is(':visible')) social.stop().fadeOut(fadeSpeed);
				}
			}).on('mouseenter.iLightBox mouseleave.iLightBox', '.ilightbox-wrapper', function (e) {
				if (e.type == 'mouseenter') vars.lockWheel = true;
				else vars.lockWheel = false;
			}).on(clickEvent, '.ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause', function () {
				var t = $(this);

				if (t.hasClass('ilightbox-fullscreen')) iL.fullScreenAction();
				else if (t.hasClass('ilightbox-play')) {
					iL.resume();
					t.addClass('ilightbox-pause').removeClass('ilightbox-play');
				}
				else if (t.hasClass('ilightbox-pause')) {
					iL.pause();
					t.addClass('ilightbox-play').removeClass('ilightbox-pause');
				}
				else iL.closeAction();
			}).on(touchMoveEvent, '.ilightbox-overlay, .ilightbox-thumbnails-container', function (e) {
				// prevent scrolling
				e.preventDefault();
			});

			function mouseMoveHandler(e) {
				if (!vars.isMobile) {
					if (!vars.mouseID) {
						vars.hideableElements.show();
					}

					vars.mouseID = clearTimeout(vars.mouseID);

					if (buttonsArray.indexOf(e.target) === -1)
						vars.mouseID = setTimeout(function () {
							vars.hideableElements.hide();
							vars.mouseID = clearTimeout(vars.mouseID);
						}, 3000);
				}
			}

			if (opts.controls.arrows && !supportTouch) $doc.on('mousemove.iLightBox', mouseMoveHandler);

			if (opts.controls.slideshow && opts.slideshow.pauseOnHover) $doc.on('mouseenter.iLightBox mouseleave.iLightBox', '.ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)', function (e) {
				if (e.type == 'mouseenter' && vars.cycleID) iL.pause();
				else if (e.type == 'mouseleave' && vars.isPaused) iL.resume();
			});

			var switchers = $('.ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails');

			if (opts.controls.mousewheel) switchers.on('mousewheel.iLightBox', function (event, delta) {
				if (!vars.lockWheel) {
					event.preventDefault();
					if (delta < 0) iL.moveTo('next');
					else if (delta > 0) iL.moveTo('prev');
				}
			});

			if (opts.controls.swipe) holders.on(touchStartEvent, function (event) {
				if (vars.nextLock || vars.prevLock || vars.total == 1 || vars.lockSwipe) return;

				vars.BODY.addClass('ilightbox-closedhand');

				var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event,
						scrollTop = $doc.scrollTop(),
						scrollLeft = $doc.scrollLeft(),
						offsets = [
							holders.eq(0).offset(),
							holders.eq(1).offset(),
							holders.eq(2).offset()
						],
						offSet = [{
							top: offsets[0].top - scrollTop,
							left: offsets[0].left - scrollLeft
						}, {
							top: offsets[1].top - scrollTop,
							left: offsets[1].left - scrollLeft
						}, {
							top: offsets[2].top - scrollTop,
							left: offsets[2].left - scrollLeft
						}],
						start = {
							time: (new Date()).getTime(),
							coords: [data.pageX - scrollLeft, data.pageY - scrollTop]
						},
						stop;

				function moveEachHandler(i) {
					var t = $(this),
							offset = offSet[i],
							scroll = [(start.coords[0] - stop.coords[0]), (start.coords[1] - stop.coords[1])];

					t[0].style[path == "horizontal" ? 'left' : 'top'] = (path == "horizontal" ? offset.left - scroll[0] : offset.top - scroll[1]) + 'px';
				}

				function moveHandler(event) {

					if (!start) return;

					var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;

					stop = {
						time: (new Date()).getTime(),
						coords: [data.pageX - scrollLeft, data.pageY - scrollTop]
					};

					holders.each(moveEachHandler);

					// prevent scrolling
					event.preventDefault();
				}

				function repositionHolders() {
					holders.each(function () {
						var t = $(this),
								offset = t.data('offset') || {
											top: t.offset().top - scrollTop,
											left: t.offset().left - scrollLeft
										},
								top = offset.top,
								left = offset.left;

						t.css(transform, gpuAcceleration).stop().animate({
							top: top,
							left: left
						}, 500, 'easeOutCirc', function () {
							t.css(transform, '');
						});
					});
				}

				holders.bind(touchMoveEvent, moveHandler);
				$doc.one(touchStopEvent, function (event) {
					holders.unbind(touchMoveEvent, moveHandler);

					vars.BODY.removeClass('ilightbox-closedhand');

					if (start && stop) {
						if (path == "horizontal" && stop.time - start.time < durationThreshold && abs(start.coords[0] - stop.coords[0]) > horizontalDistanceThreshold && abs(start.coords[1] - stop.coords[1]) < verticalDistanceThreshold) {
							if (start.coords[0] > stop.coords[0]) {
								if (vars.current == vars.total - 1 && !opts.infinite) repositionHolders();
								else {
									vars.isSwipe = true;
									iL.moveTo('next');
								}
							}
							else {
								if (vars.current == 0 && !opts.infinite) repositionHolders();
								else {
									vars.isSwipe = true;
									iL.moveTo('prev');
								}
							}
						}
						else if (path == "vertical" && stop.time - start.time < durationThreshold && abs(start.coords[1] - stop.coords[1]) > horizontalDistanceThreshold && abs(start.coords[0] - stop.coords[0]) < verticalDistanceThreshold) {
							if (start.coords[1] > stop.coords[1]) {
								if (vars.current == vars.total - 1 && !opts.infinite) repositionHolders();
								else {
									vars.isSwipe = true;
									iL.moveTo('next');
								}
							}
							else {
								if (vars.current == 0 && !opts.infinite) repositionHolders();
								else {
									vars.isSwipe = true;
									iL.moveTo('prev');
								}
							}
						}
						else repositionHolders();
					}
					start = stop = undefined;
				});
			});

		},

		goTo: function (index) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					diff = (index - vars.current);

			if (opts.infinite) {
				if (index == vars.total - 1 && vars.current == 0) diff = -1;
				if (vars.current == vars.total - 1 && index == 0) diff = 1;
			}

			if (diff == 1) iL.moveTo('next');
			else if (diff == -1) iL.moveTo('prev');
			else {

				if (vars.nextLock || vars.prevLock) return false;

				//Trigger the onBeforeChange callback
				if (typeof opts.callback.onBeforeChange == 'function') opts.callback.onBeforeChange.call(iL, iL.ui);

				if (opts.linkId) {
					vars.hashLock = true;
					window.location.hash = opts.linkId + '/' + index;
				}

				if (iL.items[index]) {
					if (!iL.items[index].options.mousewheel) vars.lockWheel = true;
					else iL.vars.lockWheel = false;

					if (!iL.items[index].options.swipe) vars.lockSwipe = true;
					else vars.lockSwipe = false;
				}

				$.each([vars.holder, vars.nextPhoto, vars.prevPhoto], function (key, val) {
					val.css(transform, gpuAcceleration).fadeOut(opts.effects.loadedFadeSpeed);
				});

				vars.current = index;
				vars.next = index + 1;
				vars.prev = index - 1;

				iL.createUI();

				setTimeout(function () {
					iL.generateBoxes();
				}, opts.effects.loadedFadeSpeed + 50);

				$('.ilightbox-thumbnail', vars.thumbnails).removeClass('ilightbox-active').eq(index).addClass('ilightbox-active');
				iL.positionThumbnails();

				if (opts.linkId) setTimeout(function () {
					vars.hashLock = false;
				}, 55);

				// Configure arrow buttons
				if (!opts.infinite) {
					vars.nextButton.add(vars.prevButton).add(vars.innerPrevButton).add(vars.innerNextButton).removeClass('disabled');

					if (vars.current == 0) {
						vars.prevButton.add(vars.innerPrevButton).addClass('disabled');
					}
					if (vars.current >= vars.total - 1) {
						vars.nextButton.add(vars.innerNextButton).addClass('disabled');
					}
				}

				// Reset next cycle timeout
				iL.resetCycle();

				//Trigger the onAfterChange callback
				if (typeof opts.callback.onAfterChange == 'function') opts.callback.onAfterChange.call(iL, iL.ui);
			}
		},

		moveTo: function (side) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					path = opts.path.toLowerCase(),
					viewport = getViewport(),
					switchSpeed = opts.effects.switchSpeed;

			if (vars.nextLock || vars.prevLock) return false;
			else {

				var item = (side == "next") ? vars.next : vars.prev;

				if (opts.linkId) {
					vars.hashLock = true;
					window.location.hash = opts.linkId + '/' + item;
				}

				if (side == "next") {
					if (!iL.items[item]) return false;
					var firstHolder = vars.nextPhoto,
							secondHolder = vars.holder,
							lastHolder = vars.prevPhoto,
							firstClass = 'ilightbox-prev',
							secondClass = 'ilightbox-next';
				}
				else if (side == "prev") {
					if (!iL.items[item]) return false;
					var firstHolder = vars.prevPhoto,
							secondHolder = vars.holder,
							lastHolder = vars.nextPhoto,
							firstClass = 'ilightbox-next',
							secondClass = 'ilightbox-prev';
				}

				//Trigger the onBeforeChange callback
				if (typeof opts.callback.onBeforeChange == 'function')
					opts.callback.onBeforeChange.call(iL, iL.ui);

				(side == "next") ? vars.nextLock = true : vars.prevLock = true;

				var captionFirst = $('div.ilightbox-caption', secondHolder),
						socialFirst = $('div.ilightbox-social', secondHolder);

				if (captionFirst.length)
					captionFirst.stop().fadeOut(switchSpeed, function () {
						$(this).remove();
					});
				if (socialFirst.length)
					socialFirst.stop().fadeOut(switchSpeed, function () {
						$(this).remove();
					});

				if (iL.items[item].caption) {
					iL.setCaption(iL.items[item], firstHolder);
					var caption = $('div.ilightbox-caption', firstHolder),
							percent = parseInt((caption.outerHeight() / firstHolder.outerHeight()) * 100);
					if (opts.caption.start && percent <= 50) caption.fadeIn(switchSpeed);
				}

				var social = iL.items[item].options.social;
				if (social) {
					iL.setSocial(social, iL.items[item].URL, firstHolder);
					if (opts.social.start) $('div.ilightbox-social', firstHolder).fadeIn(opts.effects.fadeSpeed);
				}

				$.each([firstHolder, secondHolder, lastHolder], function (key, val) {
					val.removeClass('ilightbox-next ilightbox-prev');
				});

				var firstOffset = firstHolder.data('offset'),
						winW = (viewport.width - (opts.styles.pageOffsetX)),
						winH = (viewport.height - (opts.styles.pageOffsetY)),
						width = firstOffset.newDims.width,
						height = firstOffset.newDims.height,
						thumbsOffset = firstOffset.thumbsOffset,
						diff = firstOffset.diff,
						top = parseInt((winH / 2) - (height / 2) - diff.H - (thumbsOffset.H / 2)),
						left = parseInt((winW / 2) - (width / 2) - diff.W - (thumbsOffset.W / 2));

				firstHolder.css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: 1
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function () {
					firstHolder.css(transform, '');
				});

				$('div.ilightbox-container', firstHolder).animate({
					width: width,
					height: height
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc');

				var secondOffset = secondHolder.data('offset'),
						object = secondOffset.object;

				diff = secondOffset.diff;

				width = secondOffset.newDims.width,
						height = secondOffset.newDims.height;

				width = parseInt(width * opts.styles[side == 'next' ? 'prevScale' : 'nextScale']),
						height = parseInt(height * opts.styles[side == 'next' ? 'prevScale' : 'nextScale']),
						top = (path == 'horizontal') ? parseInt((winH / 2) - object.offsetY - (height / 2) - diff.H - (thumbsOffset.H / 2)) : parseInt(winH - object.offsetX - diff.H - (thumbsOffset.H / 2));

				if (side == 'prev')
					left = (path == 'horizontal') ? parseInt(winW - object.offsetX - diff.W - (thumbsOffset.W / 2)) : parseInt((winW / 2) - (width / 2) - diff.W - object.offsetY - (thumbsOffset.W / 2));
				else {
					top = (path == 'horizontal') ? top : parseInt(object.offsetX - diff.H - height - (thumbsOffset.H / 2)),
							left = (path == 'horizontal') ? parseInt(object.offsetX - diff.W - width - (thumbsOffset.W / 2)) : parseInt((winW / 2) - object.offsetY - (width / 2) - diff.W - (thumbsOffset.W / 2));
				}

				$('div.ilightbox-container', secondHolder).animate({
					width: width,
					height: height
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc');

				secondHolder.addClass(firstClass).css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: opts.styles.prevOpacity
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function () {
					secondHolder.css(transform, '');

					$('.ilightbox-thumbnail', vars.thumbnails).removeClass('ilightbox-active').eq(item).addClass('ilightbox-active');
					iL.positionThumbnails();

					if (iL.items[item]) {
						if (!iL.items[item].options.mousewheel) vars.lockWheel = true;
						else vars.lockWheel = false;

						if (!iL.items[item].options.swipe) vars.lockSwipe = true;
						else vars.lockSwipe = false;
					}

					vars.isSwipe = false;

					if (side == "next") {
						vars.nextPhoto = lastHolder,
								vars.prevPhoto = secondHolder,
								vars.holder = firstHolder;

						vars.nextPhoto.hide();

						vars.next = vars.next + 1,
								vars.prev = vars.current,
								vars.current = vars.current + 1;

						if (opts.infinite) {
							if (vars.current > vars.total - 1) vars.current = 0;
							if (vars.current == vars.total - 1) vars.next = 0;
							if (vars.current == 0) vars.prev = vars.total - 1;
						}

						iL.createUI();

						if (!iL.items[vars.next])
							vars.nextLock = false;
						else
							iL.loadContent(iL.items[vars.next], 'next');
					}
					else {
						vars.prevPhoto = lastHolder;
						vars.nextPhoto = secondHolder;
						vars.holder = firstHolder;

						vars.prevPhoto.hide();

						vars.next = vars.current;
						vars.current = vars.prev;
						vars.prev = vars.current - 1;

						if (opts.infinite) {
							if (vars.current == vars.total - 1) vars.next = 0;
							if (vars.current == 0) vars.prev = vars.total - 1;
						}

						iL.createUI();

						if (!iL.items[vars.prev])
							vars.prevLock = false;
						else
							iL.loadContent(iL.items[vars.prev], 'prev');
					}

					if (opts.linkId) setTimeout(function () {
						vars.hashLock = false;
					}, 55);

					// Configure arrow buttons
					if (!opts.infinite) {
						vars.nextButton.add(vars.prevButton).add(vars.innerPrevButton).add(vars.innerNextButton).removeClass('disabled');

						if (vars.current == 0)
							vars.prevButton.add(vars.innerPrevButton).addClass('disabled');
						if (vars.current >= vars.total - 1)
							vars.nextButton.add(vars.innerNextButton).addClass('disabled');
					}

					iL.repositionPhoto();

					// Reset next cycle timeout
					iL.resetCycle();

					//Trigger the onAfterChange callback
					if (typeof opts.callback.onAfterChange == 'function')
						opts.callback.onAfterChange.call(iL, iL.ui);
				});

				top = (path == 'horizontal') ? getPixel(lastHolder, 'top') : ((side == "next") ? parseInt(-(winH / 2) - lastHolder.outerHeight()) : parseInt(top * 2)),
						left = (path == 'horizontal') ? ((side == "next") ? parseInt(-(winW / 2) - lastHolder.outerWidth()) : parseInt(left * 2)) : getPixel(lastHolder, 'left');

				lastHolder.css(transform, gpuAcceleration).animate({
					top: top,
					left: left,
					opacity: opts.styles.nextOpacity
				}, switchSpeed, (vars.isSwipe) ? 'easeOutCirc' : 'easeInOutCirc', function () {
					lastHolder.css(transform, '');
				}).addClass(secondClass);
			}
		},

		setCaption: function (obj, target) {
			var iL = this,
					caption = $('<div class="ilightbox-caption"></div>');

			if (obj.caption) {
				caption.html(obj.caption);
				$('div.ilightbox-container', target).append(caption);
			}
		},

		normalizeSocial: function (obj, url) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					baseURL = window.location.href;

			$.each(obj, function (key, value) {
				if (!value)
					return true;

				var item = key.toLowerCase(),
						source, text;

				switch (item) {
					case 'facebook':
						source = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}",
								text = "Share on Facebook";
						break;
					case 'twitter':
						source = "http://twitter.com/home?status={URL}",
								text = "Share on Twitter";
						break;
					case 'googleplus':
						source = "https://plus.google.com/share?url={URL}",
								text = "Share on Google+";
						break;
					case 'delicious':
						source = "http://delicious.com/post?url={URL}",
								text = "Share on Delicious";
						break;
					case 'digg':
						source = "http://digg.com/submit?phase=2&url={URL}",
								text = "Share on Digg";
						break;
					case 'reddit':
						source = "http://reddit.com/submit?url={URL}",
								text = "Share on reddit";
						break;
				}

				obj[key] = {
					URL: value.URL && absolutizeURI(baseURL, value.URL) || opts.linkId && window.location.href || typeof url !== 'string' && baseURL || url && absolutizeURI(baseURL, url) || baseURL,
					source: value.source || source || value.URL && absolutizeURI(baseURL, value.URL) || url && absolutizeURI(baseURL, url),
					text: value.text || text || "Share on " + key,
					width: (typeof(value.width) != 'undefined' && !isNaN(value.width)) ? parseInt(value.width) : 640,
					height: value.height || 360
				};

			});

			return obj;
		},

		setSocial: function (obj, url, target) {
			var iL = this,
					socialBar = $('<div class="ilightbox-social"></div>'),
					buttons = '<ul>';

			obj = iL.normalizeSocial(obj, url);

			$.each(obj, function (key, value) {
				var item = key.toLowerCase(),
						source = value.source.replace(/\{URL\}/g, encodeURIComponent(value.URL).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+'));
				buttons += '<li class="' + key + '"><a href="' + source + '" onclick="window.open(this.href' + ((value.width <= 0 || value.height <= 0) ? '' : ', \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=' + value.height + ',width=' + value.width + ',left=40,top=40\'') + ');return false;" title="' + value.text + '" target="_blank"></a></li>';
			});

			buttons += '</ul>';

			socialBar.html(buttons);
			$('div.ilightbox-container', target).append(socialBar);
		},

		fullScreenAction: function () {
			var iL = this,
					vars = iL.vars;

			if (fullScreenApi.supportsFullScreen) {
				if (fullScreenApi.isFullScreen()) fullScreenApi.cancelFullScreen(document.documentElement);
				else fullScreenApi.requestFullScreen(document.documentElement);
			}
			else {
				iL.doFullscreen();
			}
		},

		doFullscreen: function () {
			var iL = this,
					vars = iL.vars,
					viewport = getViewport(),
					opts = iL.options;

			if (opts.fullAlone) {
				var currentHolder = vars.holder,
						current = iL.items[vars.current],
						windowWidth = viewport.width,
						windowHeight = viewport.height,
						elements = [currentHolder, vars.nextPhoto, vars.prevPhoto, vars.nextButton, vars.prevButton, vars.overlay, vars.toolbar, vars.thumbnails, vars.loader],
						hideElements = [vars.nextPhoto, vars.prevPhoto, vars.nextButton, vars.prevButton, vars.loader, vars.thumbnails];

				if (!vars.isInFullScreen) {
					vars.isInFullScreen = vars.lockKey = vars.lockWheel = vars.lockSwipe = true;
					vars.overlay.css({
						opacity: 1
					});

					$.each(hideElements, function (i, element) {
						element.hide();
					});

					vars.fullScreenButton.attr('title', opts.text.exitFullscreen);

					if (opts.fullStretchTypes.indexOf(current.type) != -1) currentHolder.data({
						naturalWidthOld: currentHolder.data('naturalWidth'),
						naturalHeightOld: currentHolder.data('naturalHeight'),
						naturalWidth: windowWidth,
						naturalHeight: windowHeight
					});
					else {
						var viewport = current.options.fullViewPort || opts.fullViewPort || '',
								newWidth = windowWidth,
								newHeight = windowHeight,
								width = currentHolder.data('naturalWidth'),
								height = currentHolder.data('naturalHeight');

						if (viewport.toLowerCase() == 'fill') {
							newHeight = (newWidth / width) * height;

							if (newHeight < windowHeight) {
								newWidth = (windowHeight / height) * width,
										newHeight = windowHeight;
							}
						}
						else if (viewport.toLowerCase() == 'fit') {
							var dims = iL.getNewDimenstions(newWidth, newHeight, width, height, true);

							newWidth = dims.width,
									newHeight = dims.height;
						}
						else if (viewport.toLowerCase() == 'stretch') {
							newWidth = newWidth,
									newHeight = newHeight;
						}
						else {
							var scale = (width > newWidth || height > newHeight) ? true : false,
									dims = iL.getNewDimenstions(newWidth, newHeight, width, height, scale);
							newWidth = dims.width,
									newHeight = dims.height;
						}

						currentHolder.data({
							naturalWidthOld: currentHolder.data('naturalWidth'),
							naturalHeightOld: currentHolder.data('naturalHeight'),
							naturalWidth: newWidth,
							naturalHeight: newHeight
						});
					}

					$.each(elements, function (key, val) {
						val.addClass('ilightbox-fullscreen');
					});

					//Trigger the onEnterFullScreen callback
					if (typeof opts.callback.onEnterFullScreen == 'function') opts.callback.onEnterFullScreen.call(iL, iL.ui);
				}
				else {
					vars.isInFullScreen = vars.lockKey = vars.lockWheel = vars.lockSwipe = false;
					vars.overlay.css({
						opacity: iL.options.overlay.opacity
					});

					$.each(hideElements, function (i, element) {
						element.show();
					});

					vars.fullScreenButton.attr('title', opts.text.enterFullscreen);

					currentHolder.data({
						naturalWidth: currentHolder.data('naturalWidthOld'),
						naturalHeight: currentHolder.data('naturalHeightOld'),
						naturalWidthOld: null,
						naturalHeightOld: null
					});

					$.each(elements, function (key, val) {
						val.removeClass('ilightbox-fullscreen');
					});

					//Trigger the onExitFullScreen callback
					if (typeof opts.callback.onExitFullScreen == 'function') opts.callback.onExitFullScreen.call(iL, iL.ui);
				}
			}
			else {
				if (!vars.isInFullScreen) vars.isInFullScreen = true;
				else vars.isInFullScreen = false;
			}
			iL.repositionPhoto(true);
		},

		closeAction: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			$win.unbind('.iLightBox');
			$doc.off('.iLightBox');

			if (vars.isInFullScreen) fullScreenApi.cancelFullScreen(document.documentElement);

			$('.ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails').off('.iLightBox');

			if (opts.hide.effect) vars.overlay.stop().fadeOut(opts.hide.speed, function () {
				vars.overlay.remove();
				vars.BODY.removeClass('ilightbox-noscroll').off('.iLightBox');
			});
			else {
				vars.overlay.remove();
				vars.BODY.removeClass('ilightbox-noscroll').off('.iLightBox');
			}

			var fadeOuts = [vars.toolbar, vars.holder, vars.nextPhoto, vars.prevPhoto, vars.nextButton, vars.prevButton, vars.loader, vars.thumbnails];

			$.each(fadeOuts, function (i, element) {
				element.removeAttr('style').remove();
			});

			vars.dontGenerateThumbs = vars.isInFullScreen = false;

			window.iLightBox = null;

			if (opts.linkId) {
				vars.hashLock = true;
				removeHash();
				setTimeout(function () {
					vars.hashLock = false;
				}, 55);
			}

			//Trigger the onHide callback
			if (typeof opts.callback.onHide == 'function') opts.callback.onHide.call(iL, iL.ui);
		},

		repositionPhoto: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					path = opts.path.toLowerCase(),
					viewport = getViewport(),
					winWidth = viewport.width,
					winHeight = viewport.height;

			var thumbsOffsetW = (vars.isInFullScreen && opts.fullAlone || vars.isMobile) ? 0 : ((path == 'horizontal') ? 0 : vars.thumbnails.outerWidth()),
					thumbsOffsetH = vars.isMobile ? vars.toolbar.outerHeight() : ((vars.isInFullScreen && opts.fullAlone) ? 0 : ((path == 'horizontal') ? vars.thumbnails.outerHeight() : 0)),
					width = (vars.isInFullScreen && opts.fullAlone) ? winWidth : (winWidth - (opts.styles.pageOffsetX)),
					height = (vars.isInFullScreen && opts.fullAlone) ? winHeight : (winHeight - (opts.styles.pageOffsetY)),
					offsetW = (path == 'horizontal') ? parseInt((iL.items[vars.next] || iL.items[vars.prev]) ? ((opts.styles.nextOffsetX + opts.styles.prevOffsetX)) * 2 : (((width / 10) <= 30) ? 30 : (width / 10))) : parseInt(((width / 10) <= 30) ? 30 : (width / 10)) + thumbsOffsetW,
					offsetH = (path == 'horizontal') ? parseInt(((height / 10) <= 30) ? 30 : (height / 10)) + thumbsOffsetH : parseInt((iL.items[vars.next] || iL.items[vars.prev]) ? ((opts.styles.nextOffsetX + opts.styles.prevOffsetX)) * 2 : (((height / 10) <= 30) ? 30 : (height / 10)));

			var elObject = {
				type: 'current',
				width: width,
				height: height,
				item: iL.items[vars.current],
				offsetW: offsetW,
				offsetH: offsetH,
				thumbsOffsetW: thumbsOffsetW,
				thumbsOffsetH: thumbsOffsetH,
				animate: arguments.length,
				holder: vars.holder
			};

			iL.repositionEl(elObject);

			if (iL.items[vars.next]) {
				elObject = $.extend(elObject, {
					type: 'next',
					item: iL.items[vars.next],
					offsetX: opts.styles.nextOffsetX,
					offsetY: opts.styles.nextOffsetY,
					holder: vars.nextPhoto
				});

				iL.repositionEl(elObject);
			}

			if (iL.items[vars.prev]) {
				elObject = $.extend(elObject, {
					type: 'prev',
					item: iL.items[vars.prev],
					offsetX: opts.styles.prevOffsetX,
					offsetY: opts.styles.prevOffsetY,
					holder: vars.prevPhoto
				});

				iL.repositionEl(elObject);
			}

			var loaderCss = (path == "horizontal") ? {
				left: parseInt((width / 2) - (vars.loader.outerWidth() / 2))
			} : {
				top: parseInt((height / 2) - (vars.loader.outerHeight() / 2))
			};
			vars.loader.css(loaderCss);
		},

		repositionEl: function (obj) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					path = opts.path.toLowerCase(),
					widthAvail = (obj.type == 'current') ? ((vars.isInFullScreen && opts.fullAlone) ? obj.width : (obj.width - obj.offsetW)) : (obj.width - obj.offsetW),
					heightAvail = (obj.type == 'current') ? ((vars.isInFullScreen && opts.fullAlone) ? obj.height : (obj.height - obj.offsetH)) : (obj.height - obj.offsetH),
					itemParent = obj.item,
					item = obj.item.options,
					holder = obj.holder,
					offsetX = obj.offsetX || 0,
					offsetY = obj.offsetY || 0,
					thumbsOffsetW = obj.thumbsOffsetW,
					thumbsOffsetH = obj.thumbsOffsetH;

			if (obj.type == 'current') {
				if (typeof item.width == 'number' && item.width) widthAvail = ((vars.isInFullScreen && opts.fullAlone) && (opts.fullStretchTypes.indexOf(itemParent.type) != -1 || item.fullViewPort || opts.fullViewPort)) ? widthAvail : ((item.width > widthAvail) ? widthAvail : item.width);
				if (typeof item.height == 'number' && item.height) heightAvail = ((vars.isInFullScreen && opts.fullAlone) && (opts.fullStretchTypes.indexOf(itemParent.type) != -1 || item.fullViewPort || opts.fullViewPort)) ? heightAvail : ((item.height > heightAvail) ? heightAvail : item.height);
			}
			else {
				if (typeof item.width == 'number' && item.width) widthAvail = (item.width > widthAvail) ? widthAvail : item.width;
				if (typeof item.height == 'number' && item.height) heightAvail = (item.height > heightAvail) ? heightAvail : item.height;
			}

			heightAvail = parseInt(heightAvail - $('.ilightbox-inner-toolbar', holder).outerHeight());

			var width = (typeof item.width == 'string' && item.width.indexOf('%') != -1) ? percentToValue(parseInt(item.width.replace('%', '')), obj.width) : holder.data('naturalWidth'),
					height = (typeof item.height == 'string' && item.height.indexOf('%') != -1) ? percentToValue(parseInt(item.height.replace('%', '')), obj.height) : holder.data('naturalHeight');

			var dims = ((typeof item.width == 'string' && item.width.indexOf('%') != -1 || typeof item.height == 'string' && item.height.indexOf('%') != -1) ? {
						width: width,
						height: height
					} : iL.getNewDimenstions(widthAvail, heightAvail, width, height)),
					newDims = $.extend({}, dims, {});

			if (obj.type == 'prev' || obj.type == 'next')
				width = parseInt(dims.width * ((obj.type == 'next') ? opts.styles.nextScale : opts.styles.prevScale)),
						height = parseInt(dims.height * ((obj.type == 'next') ? opts.styles.nextScale : opts.styles.prevScale));
			else
				width = dims.width,
						height = dims.height;

			var widthDiff = parseInt((getPixel(holder, 'padding-left') + getPixel(holder, 'padding-right') + getPixel(holder, 'border-left-width') + getPixel(holder, 'border-right-width')) / 2),
					heightDiff = parseInt((getPixel(holder, 'padding-top') + getPixel(holder, 'padding-bottom') + getPixel(holder, 'border-top-width') + getPixel(holder, 'border-bottom-width') + $('.ilightbox-inner-toolbar', holder).outerHeight()) / 2);

			switch (obj.type) {
				case 'current':
					var top = parseInt((obj.height / 2) - (height / 2) - heightDiff - (thumbsOffsetH / 2)),
							left = parseInt((obj.width / 2) - (width / 2) - widthDiff - (thumbsOffsetW / 2));
					break;

				case 'next':
					var top = (path == 'horizontal') ? parseInt((obj.height / 2) - offsetY - (height / 2) - heightDiff - (thumbsOffsetH / 2)) : parseInt(obj.height - offsetX - heightDiff - (thumbsOffsetH / 2)),
							left = (path == 'horizontal') ? parseInt(obj.width - offsetX - widthDiff - (thumbsOffsetW / 2)) : parseInt((obj.width / 2) - (width / 2) - widthDiff - offsetY - (thumbsOffsetW / 2));
					break;

				case 'prev':
					var top = (path == 'horizontal') ? parseInt((obj.height / 2) - offsetY - (height / 2) - heightDiff - (thumbsOffsetH / 2)) : parseInt(offsetX - heightDiff - height - (thumbsOffsetH / 2)),
							left = (path == 'horizontal') ? parseInt(offsetX - widthDiff - width - (thumbsOffsetW / 2)) : parseInt((obj.width / 2) - offsetY - (width / 2) - widthDiff - (thumbsOffsetW / 2));
					break;
			}

			holder.data('offset', {
				top: top,
				left: left,
				newDims: newDims,
				diff: {
					W: widthDiff,
					H: heightDiff
				},
				thumbsOffset: {
					W: thumbsOffsetW,
					H: thumbsOffsetH
				},
				object: obj
			});

			if (obj.animate > 0 && opts.effects.reposition) {
				holder.css(transform, gpuAcceleration).stop().animate({
					top: top,
					left: left
				}, opts.effects.repositionSpeed, 'easeOutCirc', function () {
					holder.css(transform, '');
				});
				$('div.ilightbox-container', holder).stop().animate({
					width: width,
					height: height
				}, opts.effects.repositionSpeed, 'easeOutCirc');
				$('div.ilightbox-inner-toolbar', holder).stop().animate({
					width: width
				}, opts.effects.repositionSpeed, 'easeOutCirc', function () {
					$(this).css('overflow', 'visible');
				});
			}
			else {
				holder.css({
					top: top,
					left: left
				});
				$('div.ilightbox-container', holder).css({
					width: width,
					height: height
				});
				$('div.ilightbox-inner-toolbar', holder).css({
					width: width
				});
			}
		},

		resume: function (priority) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			if (!opts.slideshow.pauseTime || opts.controls.slideshow && vars.total <= 1 || priority < vars.isPaused) {
				return;
			}

			vars.isPaused = 0;

			if (vars.cycleID) {
				vars.cycleID = clearTimeout(vars.cycleID);
			}

			vars.cycleID = setTimeout(function () {
				if (vars.current == vars.total - 1) iL.goTo(0);
				else iL.moveTo('next');
			}, opts.slideshow.pauseTime);
		},

		pause: function (priority) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			if (priority < vars.isPaused) {
				return;
			}

			vars.isPaused = priority || 100;

			if (vars.cycleID) {
				vars.cycleID = clearTimeout(vars.cycleID);
			}
		},

		resetCycle: function () {
			var iL = this,
					vars = iL.vars,
					opts = iL.options;

			if (opts.controls.slideshow && vars.cycleID && !vars.isPaused) {
				iL.resume();
			}
		},

		getNewDimenstions: function (width, height, width_old, height_old, thumb) {
			var iL = this;

			if (!width) factor = height / height_old;
			else if (!height) factor = width / width_old;
			else factor = min(width / width_old, height / height_old);

			if (!thumb) {
				if (factor > iL.options.maxScale) factor = iL.options.maxScale;
				else if (factor < iL.options.minScale) factor = iL.options.minScale;
			}

			var final_width = (iL.options.keepAspectRatio) ? round(width_old * factor) : width,
					final_height = (iL.options.keepAspectRatio) ? round(height_old * factor) : height;

			return {
				width: final_width,
				height: final_height,
				ratio: factor
			};
		},

		setOption: function (options) {
			var iL = this;

			iL.options = $.extend(true, iL.options, options || {});
			iL.refresh();
		},

		availPlugins: function () {
			var iL = this,
					testEl = document.createElement("video");

			iL.plugins = {
				flash: (parseInt(PluginDetect.getVersion("Shockwave")) >= 0 || parseInt(PluginDetect.getVersion("Flash")) >= 0) ? true : false,
				quicktime: (parseInt(PluginDetect.getVersion("QuickTime")) >= 0) ? true : false,
				html5H264: !!(testEl.canPlayType && testEl.canPlayType('video/mp4').replace(/no/, '')),
				html5WebM: !!(testEl.canPlayType && testEl.canPlayType('video/webm').replace(/no/, '')),
				html5Vorbis: !!(testEl.canPlayType && testEl.canPlayType('video/ogg').replace(/no/, '')),
				html5QuickTime: !!(testEl.canPlayType && testEl.canPlayType('video/quicktime').replace(/no/, ''))
			};
		},

		addContent: function (element, obj) {
			var iL = this,
					el;

			switch (obj.type) {
				case 'video':
					var HTML5 = false,
							videoType = obj.videoType,
							html5video = obj.options.html5video;

					if (((videoType == 'video/mp4' || obj.ext == 'mp4' || obj.ext == 'm4v') || html5video.h264) && iL.plugins.html5H264)
						obj.ext = 'mp4',
								obj.URL = html5video.h264 || obj.URL;
					else if (html5video.webm && iL.plugins.html5WebM)
						obj.ext = 'webm',
								obj.URL = html5video.webm || obj.URL;
					else if (html5video.ogg && iL.plugins.html5Vorbis)
						obj.ext = 'ogv',
								obj.URL = html5video.ogg || obj.URL;

					if (iL.plugins.html5H264 && (videoType == 'video/mp4' || obj.ext == 'mp4' || obj.ext == 'm4v')) HTML5 = true, videoType = "video/mp4";
					else if (iL.plugins.html5WebM && (videoType == 'video/webm' || obj.ext == 'webm')) HTML5 = true, videoType = "video/webm";
					else if (iL.plugins.html5Vorbis && (videoType == 'video/ogg' || obj.ext == 'ogv')) HTML5 = true, videoType = "video/ogg";
					else if (iL.plugins.html5QuickTime && (videoType == 'video/quicktime' || obj.ext == 'mov' || obj.ext == 'qt')) HTML5 = true, videoType = "video/quicktime";

					if (HTML5) {
						el = $('<video />', {
							"width": "100%",
							"height": "100%",
							"preload": html5video.preload,
							"autoplay": html5video.autoplay,
							"poster": html5video.poster,
							"controls": html5video.controls
						}).append($('<source />', {
							"src": obj.URL,
							"type": videoType
						}));
					}
					else {
						if (!iL.plugins.quicktime) el = $('<span />', {
							"class": "ilightbox-alert",
							html: iL.options.errors.missingPlugin.replace('{pluginspage}', pluginspages.quicktime).replace('{type}', 'QuickTime')
						});
						else {

							el = $('<object />', {
								"type": "video/quicktime",
								"pluginspage": pluginspages.quicktime
							}).attr({
								"data": obj.URL,
								"width": "100%",
								"height": "100%"
							}).append($('<param />', {
								"name": "src",
								"value": obj.URL
							})).append($('<param />', {
								"name": "autoplay",
								"value": "false"
							})).append($('<param />', {
								"name": "loop",
								"value": "false"
							})).append($('<param />', {
								"name": "scale",
								"value": "tofit"
							}));

							if (browser.msie) el = QT_GenerateOBJECTText(obj.URL, '100%', '100%', '', 'SCALE', 'tofit', 'AUTOPLAY', 'false', 'LOOP', 'false');
						}
					}

					break;

				case 'flash':
					if (!iL.plugins.flash) el = $('<span />', {
						"class": "ilightbox-alert",
						html: iL.options.errors.missingPlugin.replace('{pluginspage}', pluginspages.flash).replace('{type}', 'Adobe Flash player')
					});
					else {
						var flashvars = "",
								i = 0;

						if (obj.options.flashvars) $.each(obj.options.flashvars, function (k, v) {
							if (i != 0) flashvars += "&";
							flashvars += k + "=" + encodeURIComponent(v);
							i++;
						});
						else flashvars = null;

						el = $('<embed />').attr({
							"type": "application/x-shockwave-flash",
							"src": obj.URL,
							"width": (typeof obj.options.width == 'number' && obj.options.width && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.width : "100%",
							"height": (typeof obj.options.height == 'number' && obj.options.height && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.height : "100%",
							"quality": "high",
							"bgcolor": "#000000",
							"play": "true",
							"loop": "true",
							"menu": "true",
							"wmode": "transparent",
							"scale": "showall",
							"allowScriptAccess": "always",
							"allowFullScreen": "true",
							"flashvars": flashvars,
							"fullscreen": "yes"
						});
					}

					break;

				case 'iframe':
					el = $('<iframe />').attr({
						"width": (typeof obj.options.width == 'number' && obj.options.width && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.width : "100%",
						"height": (typeof obj.options.height == 'number' && obj.options.height && iL.options.minScale == '1' && iL.options.maxScale == '1') ? obj.options.height : "100%",
						src: obj.URL,
						frameborder: 0,
						'hspace': 0,
						'vspace': 0,
						'scrolling': supportTouch ? 'auto' : 'scroll',
						'webkitAllowFullScreen': '',
						'mozallowfullscreen': '',
						'allowFullScreen': ''
					});

					break;

				case 'inline':
					el = $('<div class="ilightbox-wrapper"></div>').html($(obj.URL).clone(true));

					break;

				case 'html':
					var object = obj.URL,
							el;

					if (object[0].nodeName) {
						el = $('<div class="ilightbox-wrapper"></div>').html(object);
					}
					else {
						var dom = $(obj.URL),
								html = (dom.selector) ? $('<div>' + dom + '</div>') : dom;
						el = $('<div class="ilightbox-wrapper"></div>').html(html);
					}

					break;
			}

			$('div.ilightbox-container', element).empty().html(el);

			// For fixing Chrome about just playing the video for first time
			if (el[0].tagName.toLowerCase() === 'video' && browser.webkit) setTimeout(function () {
				var src = el[0].currentSrc + '?' + floor(random() * 30000);
				el[0].currentSrc = src;
				el[0].src = src;
			});

			return el;
		},

		ogpRecognition: function (obj, callback) {
			var iL = this,
					url = obj.URL;

			iL.showLoader();
			doAjax(url, function (data) {
				iL.hideLoader();

				if (data) {
					var object = {};

					object.length = false,
							object.url = data.url;

					if (data.status == 200) {
						var result = data.results,
								type = result.type,
								source = result.source;

						object.source = source.src,
								object.width = source.width && parseInt(source.width) || 0,
								object.height = source.height && parseInt(source.height) || 0,
								object.type = type,
								object.thumbnail = source.thumbnail || result.images[0],
								object.html5video = result.html5video || {},
								object.length = true;

						if (source.type == 'application/x-shockwave-flash') object.type = "flash";
						else if (source.type.indexOf("video/") != -1) object.type = "video";
						else if (source.type.indexOf("/html") != -1) object.type = "iframe";
						else if (source.type.indexOf("image/") != -1) object.type = "image";

					}
					else if (typeof data.response != 'undefined')
						throw data.response;

					callback.call(this, object.length ? object : false);
				}
			});
		},

		hashChangeHandler: function (url) {
			var iL = this,
					vars = iL.vars,
					opts = iL.options,
					URL = url || window.location.href,
					hash = parseURI(URL).hash,
					split = hash.split('/'),
					index = split[1];

			if (vars.hashLock || ('#' + opts.linkId != split[0] && hash.length > 1)) return;

			if (index) {
				var target = split[1] || 0;
				if (iL.items[target]) {
					var overlay = $('.ilightbox-overlay');
					if (overlay.length && overlay.attr('linkid') == opts.linkId) {
						iL.goTo(target);
					}
					else {
						iL.itemsObject[target].trigger(supportTouch ? 'itap' : 'click');
					}
				}
				else {
					var overlay = $('.ilightbox-overlay');
					if (overlay.length) iL.closeAction();
				}
			}
			else {
				var overlay = $('.ilightbox-overlay');
				if (overlay.length) iL.closeAction();
			}
		}
	};

	/**
	 * Parse style to pixels.
	 *
	 * @param {Object}   $element   jQuery object with element.
	 * @param {Property} property   CSS property to get the pixels from.
	 *
	 * @return {Int}
	 */
	function getPixel($element, property) {
		return parseInt($element.css(property), 10) || 0;
	}

	/**
	 * Make sure that number is within the limits.
	 *
	 * @param {Number} number
	 * @param {Number} min
	 * @param {Number} max
	 *
	 * @return {Number}
	 */
	function within(number, min, max) {
		return number < min ? min : number > max ? max : number;
	}

	/**
	 * Get viewport/window size (width and height).
	 *
	 * @return {Object}
	 */
	function getViewport() {
		var e = window,
				a = 'inner';
		if (!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return {
			width: e[a + 'Width'],
			height: e[a + 'Height']
		}
	}

	/**
	 * Remove hash tag from the URL
	 *
	 * @return {Void}
	 */
	function removeHash() {
		var scroll = getScrollXY();

		window.location.hash = "";

		// Restore the scroll offset, should be flicker free
		window.scrollTo(scroll.x, scroll.y);
	}

	/**
	 * Do the ajax requests with callback.
	 *
	 * @param {String}   url
	 * @param {Function} callback
	 *
	 * @return {Void}
	 */
	function doAjax(url, callback) {
		var url = "http://ilightbox.net/getSource/jsonp.php?url=" + encodeURIComponent(url).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
		$.ajax({
			url: url,
			dataType: 'jsonp'
		});

		iLCallback = function (data) {
			callback.call(this, data);
		};
	}

	/**
	 * Find image from DOM elements
	 *
	 * @param {Element} element
	 *
	 * @return {Void}
	 */
	function findImageInElement(element) {
		var elements = $('*', element),
				imagesArr = [];

		elements.each(function () {
			var url = "",
					element = this;

			if ($(element).css("background-image") != "none") {
				url = $(element).css("background-image");
			}
			else if (typeof($(element).attr("src")) != "undefined" && element.nodeName.toLowerCase() == "img") {
				url = $(element).attr("src");
			}

			if (url.indexOf("gradient") == -1) {
				url = url.replace(/url\(\"/g, "");
				url = url.replace(/url\(/g, "");
				url = url.replace(/\"\)/g, "");
				url = url.replace(/\)/g, "");

				var urls = url.split(",");

				for (var i = 0; i < urls.length; i++) {
					if (urls[i].length > 0 && $.inArray(urls[i], imagesArr) == -1) {
						var extra = "";
						if (browser.msie && browser.version < 9) {
							extra = "?" + floor(random() * 3000);
						}
						imagesArr.push(urls[i] + extra);
					}
				}
			}
		});

		return imagesArr;
	}

	/**
	 * Get file extension.
	 *
	 * @param {String} URL
	 *
	 * @return {String}
	 */
	function getExtension(URL) {
		var ext = URL.split('.').pop().toLowerCase(),
				extra = ext.indexOf('?') !== -1 ? ext.split('?').pop() : '';

		return ext.replace(extra, '');
	}

	/**
	 * Get type via extension.
	 *
	 * @param {String} URL
	 *
	 * @return {String}
	 */
	function getTypeByExtension(URL) {
		var type,
				ext = getExtension(URL);

		if (extensions.image.indexOf(ext) !== -1) type = 'image';
		else if (extensions.flash.indexOf(ext) !== -1) type = 'flash';
		else if (extensions.video.indexOf(ext) !== -1) type = 'video';
		else type = 'iframe';

		return type;
	}

	/**
	 * Return value from percent of a number.
	 *
	 * @param {Number} percent
	 * @param {Number} total
	 *
	 * @return {Number}
	 */
	function percentToValue(percent, total) {
		return parseInt((total / 100) * percent);
	}

	/**
	 * A JavaScript equivalent of PHP’s parse_url.
	 *
	 * @param {String} url           The URL to parse.
	 *
	 * @return {Mixed}
	 */
	function parseURI(url) {
		var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
		// authority = '//' + user + ':' + pass '@' + hostname + ':' port
		return (m ? {
			href: m[0] || '',
			protocol: m[1] || '',
			authority: m[2] || '',
			host: m[3] || '',
			hostname: m[4] || '',
			port: m[5] || '',
			pathname: m[6] || '',
			search: m[7] || '',
			hash: m[8] || ''
		} : null);
	}

	/**
	 * Gets the absolute URI.
	 *
	 * @param {String} href     The relative URL.
	 * @param {String} base     The base URL.
	 *
	 * @return {String}         The absolute URL.
	 */
	function absolutizeURI(base, href) { // RFC 3986
		var iL = this;

		function removeDotSegments(input) {
			var output = [];
			input.replace(/^(\.\.?(\/|$))+/, '')
					.replace(/\/(\.(\/|$))+/g, '/')
					.replace(/\/\.\.$/, '/../')
					.replace(/\/?[^\/]*/g, function (p) {
						if (p === '/..') {
							output.pop();
						}
						else {
							output.push(p);
						}
					});
			return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
		}

		href = parseURI(href || '');
		base = parseURI(base || '');

		return !href || !base ? null : (href.protocol || base.protocol) +
		(href.protocol || href.authority ? href.authority : base.authority) +
		removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
		(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
		href.hash;
	}

	/**
	 * A JavaScript equivalent of PHP’s version_compare.
	 *
	 * @param {String} v1
	 * @param {String} v2
	 * @param {String} operator
	 *
	 * @return {Boolean}
	 */
	function version_compare(v1, v2, operator) {
		this.php_js = this.php_js || {};
		this.php_js.ENV = this.php_js.ENV || {};
		var i = 0,
				x = 0,
				compare = 0,
				vm = {
					'dev': -6,
					'alpha': -5,
					'a': -5,
					'beta': -4,
					'b': -4,
					'RC': -3,
					'rc': -3,
					'#': -2,
					'p': 1,
					'pl': 1
				},
				prepVersion = function (v) {
					v = ('' + v).replace(/[_\-+]/g, '.');
					v = v.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.');
					return (!v.length ? [-8] : v.split('.'));
				},
				numVersion = function (v) {
					return !v ? 0 : (isNaN(v) ? vm[v] || -7 : parseInt(v, 10));
				};
		v1 = prepVersion(v1);
		v2 = prepVersion(v2);
		x = max(v1.length, v2.length);
		for (i = 0; i < x; i++) {
			if (v1[i] == v2[i]) {
				continue;
			}
			v1[i] = numVersion(v1[i]);
			v2[i] = numVersion(v2[i]);
			if (v1[i] < v2[i]) {
				compare = -1;
				break;
			}
			else if (v1[i] > v2[i]) {
				compare = 1;
				break;
			}
		}
		if (!operator) {
			return compare;
		}

		switch (operator) {
			case '>':
			case 'gt':
				return (compare > 0);
			case '>=':
			case 'ge':
				return (compare >= 0);
			case '<=':
			case 'le':
				return (compare <= 0);
			case '==':
			case '=':
			case 'eq':
				return (compare === 0);
			case '<>':
			case '!=':
			case 'ne':
				return (compare !== 0);
			case '':
			case '<':
			case 'lt':
				return (compare < 0);
			default:
				return null;
		}
	}


	// Begin the iLightBox plugin
	$.fn.iLightBox = function () {

		var args = arguments,
				opt = ($.isPlainObject(args[0])) ? args[0] : args[1],
				items = ($.isArray(args[0]) || typeof args[0] == 'string') ? args[0] : args[1];

		if (!opt) opt = {};

		// Default options. Play carefully.
		var options = $.extend(true, {
			attr: 'href',
			path: 'vertical',
			skin: 'dark',
			linkId: false,
			infinite: false,
			startFrom: 0,
			randomStart: false,
			keepAspectRatio: true,
			maxScale: 1,
			minScale: .2,
			innerToolbar: false,
			smartRecognition: false,
			mobileOptimizer: true,
			fullAlone: true,
			fullViewPort: null,
			fullStretchTypes: 'flash, video',
			overlay: {
				blur: true,
				opacity: .85
			},
			controls: {
				arrows: false,
				slideshow: false,
				toolbar: true,
				fullscreen: true,
				thumbnail: true,
				keyboard: true,
				mousewheel: true,
				swipe: true
			},
			keyboard: {
				left: true, // previous
				right: true, // next
				up: true, // previous
				down: true, // next
				esc: true, // close
				shift_enter: true // fullscreen
			},
			show: {
				effect: true,
				speed: 300,
				title: true
			},
			hide: {
				effect: true,
				speed: 300
			},
			caption: {
				start: true,
				show: 'mouseenter',
				hide: 'mouseleave'
			},
			social: {
				start: true,
				show: 'mouseenter',
				hide: 'mouseleave',
				buttons: false
			},
			styles: {
				pageOffsetX: 0,
				pageOffsetY: 0,
				nextOffsetX: 45,
				nextOffsetY: 0,
				nextOpacity: 1,
				nextScale: 1,
				prevOffsetX: 45,
				prevOffsetY: 0,
				prevOpacity: 1,
				prevScale: 1
			},
			thumbnails: {
				maxWidth: 120,
				maxHeight: 80,
				normalOpacity: 1,
				activeOpacity: .6
			},
			effects: {
				reposition: true,
				repositionSpeed: 200,
				switchSpeed: 500,
				loadedFadeSpeed: 180,
				fadeSpeed: 200
			},
			slideshow: {
				pauseTime: 5000,
				pauseOnHover: false,
				startPaused: true
			},
			text: {
				close: "Press Esc to close",
				enterFullscreen: "Enter Fullscreen (Shift+Enter)",
				exitFullscreen: "Exit Fullscreen (Shift+Enter)",
				slideShow: "Slideshow",
				next: "Next",
				previous: "Previous"
			},
			errors: {
				loadImage: "An error occurred when trying to load photo.",
				loadContents: "An error occurred when trying to load contents.",
				missingPlugin: "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin<\/a>."
			},
			ajaxSetup: {
				url: '',
				beforeSend: function (jqXHR, settings) {},
				cache: false,
				complete: function (jqXHR, textStatus) {},
				crossDomain: false,
				error: function (jqXHR, textStatus, errorThrown) {},
				success: function (data, textStatus, jqXHR) {},
				global: true,
				ifModified: false,
				username: null,
				password: null,
				type: 'GET'
			},
			callback: {}
		}, opt);

		var instant = ($.isArray(items) || typeof items == 'string') ? true : false;

		items = $.isArray(items) ? items : [];

		if (typeof args[0] == 'string') items[0] = args[0];

		if (version_compare($.fn.jquery, '1.8', '>=')) {
			var iLB = new iLightBox($(this), options, items, instant);
			return {
				close: function () {
					iLB.closeAction();
				},
				fullscreen: function () {
					iLB.fullScreenAction();
				},
				moveNext: function () {
					iLB.moveTo('next');
				},
				movePrev: function () {
					iLB.moveTo('prev');
				},
				goTo: function (index) {
					iLB.goTo(index);
				},
				refresh: function () {
					iLB.refresh();
				},
				reposition: function () {
					(arguments.length > 0) ? iLB.repositionPhoto(true) : iLB.repositionPhoto();
				},
				setOption: function (options) {
					iLB.setOption(options);
				},
				destroy: function () {
					iLB.closeAction();
					iLB.dispatchItemsEvents();
				}
			};
		}
		else {
			throw "The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+";
		}

	};


	$.iLightBox = function () {
		return $.fn.iLightBox(arguments[0], arguments[1]);
	};


	$.extend($.easing, {
		easeInCirc: function (x, t, b, c, d) {
			return -c * (sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function (x, t, b, c, d) {
			return c * sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function (x, t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (sqrt(1 - t * t) - 1) + b;
			return c / 2 * (sqrt(1 - (t -= 2) * t) + 1) + b;
		}
	});

	function getScrollXY() {
		var scrOfX = 0,
				scrOfY = 0;
		if (typeof(window.pageYOffset) == 'number') {
			//Netscape compliant
			scrOfY = window.pageYOffset;
			scrOfX = window.pageXOffset;
		}
		else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
			//DOM compliant
			scrOfY = document.body.scrollTop;
			scrOfX = document.body.scrollLeft;
		}
		else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
			//IE6 standards compliant mode
			scrOfY = document.documentElement.scrollTop;
			scrOfX = document.documentElement.scrollLeft;
		}
		return {
			x: scrOfX,
			y: scrOfY
		};
	}

	(function () {
		// add new event shortcuts
		$.each(("touchstart touchmove touchend " +
		"tap taphold " +
		"swipe swipeleft swiperight " +
		"scrollstart scrollstop").split(" "), function (i, name) {

			$.fn[name] = function (fn) {
				return fn ? this.bind(name, fn) : this.trigger(name);
			};

			// jQuery < 1.8
			if ($.attrFn) {
				$.attrFn[name] = true;
			}
		});

		var tapSettings = {
			startEvent: 'touchstart.iTap',
			endEvent: 'touchend.iTap'
		};

		// tap Event:
		$.event.special.itap = {
			setup: function () {

				var self = this,
						$self = $(this),
						start, stop;

				$self.bind(tapSettings.startEvent, function (event) {
					start = getScrollXY();

					$self.one(tapSettings.endEvent, function (event) {
						stop = getScrollXY();

						var orgEvent = event || window.event;
						event = $.event.fix(orgEvent);
						event.type = "itap";

						if ((start && stop) && (start.x == stop.x && start.y == stop.y))($.event.dispatch || $.event.handle).call(self, event);

						start = stop = undefined;
					});
				});
			},

			teardown: function () {
				$(this).unbind(tapSettings.startEvent);
			}
		};
	}());


	//Fullscreen API
	(function () {
		fullScreenApi = {
			supportsFullScreen: false,
			isFullScreen: function () {
				return false;
			},
			requestFullScreen: function () {},
			cancelFullScreen: function () {},
			fullScreenEventName: '',
			prefix: ''
		},
				browserPrefixes = 'webkit moz o ms khtml'.split(' ');

		// check for native support
		if (typeof document.cancelFullScreen != 'undefined') {
			fullScreenApi.supportsFullScreen = true;
		}
		else {
			// check for fullscreen support by vendor prefix
			for (var i = 0, il = browserPrefixes.length; i < il; i++) {
				fullScreenApi.prefix = browserPrefixes[i];

				if (typeof document[fullScreenApi.prefix + 'CancelFullScreen'] != 'undefined') {
					fullScreenApi.supportsFullScreen = true;

					break;
				}
			}
		}

		// update methods to do something useful
		if (fullScreenApi.supportsFullScreen) {
			fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';

			fullScreenApi.isFullScreen = function () {
				switch (this.prefix) {
					case '':
						return document.fullScreen;
					case 'webkit':
						return document.webkitIsFullScreen;
					default:
						return document[this.prefix + 'FullScreen'];
				}
			};
			;
			fullScreenApi.requestFullScreen = function (el) {
				return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
			};
			;
			fullScreenApi.cancelFullScreen = function (el) {
				return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
			}
		}
	}());

	// Browser detect
	(function () {
		function uaMatch(ua) {
			ua = ua.toLowerCase();

			var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
					/(webkit)[ \/]([\w.]+)/.exec(ua) ||
					/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
					/(msie) ([\w.]+)/.exec(ua) ||
					ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

			return {
				browser: match[1] || "",
				version: match[2] || "0"
			};
		}

		var matched = uaMatch(navigator.userAgent);
		browser = {};

		if (matched.browser) {
			browser[matched.browser] = true;
			browser.version = matched.version;
		}

		// Chrome is Webkit, but Webkit is also Safari.
		if (browser.chrome) {
			browser.webkit = true;
		}
		else if (browser.webkit) {
			browser.safari = true;
		}
	}());

	// Feature detects
	(function () {
		var prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
		var el = document.createElement('div');

		function testProp(prop) {
			for (var p = 0, pl = prefixes.length; p < pl; p++) {
				var prefixedProp = prefixes[p] ? prefixes[p] + prop.charAt(0).toUpperCase() + prop.slice(1) : prop;
				if (el.style[prefixedProp] !== undefined) {
					return prefixedProp;
				}
			}
		}

		// Global support indicators
		transform = testProp('transform') || '';
		gpuAcceleration = testProp('perspective') ? 'translateZ(0) ' : '';
	}());


	/*
	 PluginDetect v0.7.9
	 www.pinlady.net/PluginDetect/license/
	 [ getVersion onWindowLoaded BetterIE ]
	 [ Flash QuickTime Shockwave ]
	 */
	var PluginDetect = {
		version: "0.7.9", name: "PluginDetect", handler: function (c, b, a) {return function () {c(b, a)}}, openTag: "<", isDefined: function (b) {return typeof b != "undefined"}, isArray: function (b) {return (/array/i).test(Object.prototype.toString.call(b))}, isFunc: function (b) {return typeof b == "function"}, isString: function (b) {return typeof b == "string"}, isNum: function (b) {return typeof b == "number"}, isStrNum: function (b) {return (typeof b == "string" && (/\d/).test(b))}, getNumRegx: /[\d][\d\.\_,-]*/, splitNumRegx: /[\.\_,-]/g, getNum: function (b, c) {
			var d = this, a = d.isStrNum(b) ? (d.isDefined(c) ? new RegExp(c) : d.getNumRegx).exec(b) : null;
			return a ? a[0] : null
		}, compareNums: function (h, f, d) {
			var e = this, c, b, a, g = parseInt;
			if (e.isStrNum(h) && e.isStrNum(f)) {
				if (e.isDefined(d) && d.compareNums) {return d.compareNums(h, f)}
				c = h.split(e.splitNumRegx);
				b = f.split(e.splitNumRegx);
				for (a = 0; a < min(c.length, b.length); a++) {
					if (g(c[a], 10) > g(b[a], 10)) {return 1}
					if (g(c[a], 10) < g(b[a], 10)) {return -1}
				}
			}
			return 0
		}, formatNum: function (b, c) {
			var d = this, a, e;
			if (!d.isStrNum(b)) {return null}
			if (!d.isNum(c)) {c = 4}
			c--;
			e = b.replace(/\s/g, "").split(d.splitNumRegx).concat(["0", "0", "0", "0"]);
			for (a = 0; a < 4; a++) {
				if (/^(0+)(.+)$/.test(e[a])) {e[a] = RegExp.$2}
				if (a > c || !(/\d/).test(e[a])) {e[a] = "0"}
			}
			return e.slice(0, 4).join(",")
		}, $$hasMimeType: function (a) {
			return function (c) {
				if (!a.isIE && c) {
					var f, e, b, d = a.isArray(c) ? c : (a.isString(c) ? [c] : []);
					for (b = 0; b < d.length; b++) {
						if (a.isString(d[b]) && /[^\s]/.test(d[b])) {
							f = navigator.mimeTypes[d[b]];
							e = f ? f.enabledPlugin : 0;
							if (e && (e.name || e.description)) {return f}
						}
					}
				}
				return null
			}
		}, findNavPlugin: function (l, e, c) {
			var j = this, h = new RegExp(l, "i"), d = (!j.isDefined(e) || e) ? /\d/ : 0, k = c ? new RegExp(c, "i") : 0, a = navigator.plugins, g = "", f, b, m;
			for (f = 0; f < a.length; f++) {
				m = a[f].description || g;
				b = a[f].name || g;
				if ((h.test(m) && (!d || d.test(RegExp.leftContext + RegExp.rightContext))) || (h.test(b) && (!d || d.test(RegExp.leftContext + RegExp.rightContext)))) {if (!k || !(k.test(m) || k.test(b))) {return a[f]}}
			}
			return null
		}, getMimeEnabledPlugin: function (k, m, c) {
			var e = this, f, b = new RegExp(m, "i"), h = "", g = c ? new RegExp(c, "i") : 0, a, l, d, j = e.isString(k) ? [k] : k;
			for (d = 0; d < j.length; d++) {
				if ((f = e.hasMimeType(j[d])) && (f = f.enabledPlugin)) {
					l = f.description || h;
					a = f.name || h;
					if (b.test(l) || b.test(a)) {if (!g || !(g.test(l) || g.test(a))) {return f}}
				}
			}
			return 0
		}, getPluginFileVersion: function (f, b) {
			var h = this, e, d, g, a, c = -1;
			if (h.OS > 2 || !f || !f.version || !(e = h.getNum(f.version))) {return b}
			if (!b) {return e}
			e = h.formatNum(e);
			b = h.formatNum(b);
			d = b.split(h.splitNumRegx);
			g = e.split(h.splitNumRegx);
			for (a = 0; a < d.length; a++) {
				if (c > -1 && a > c && d[a] != "0") {return b}
				if (g[a] != d[a]) {
					if (c == -1) {c = a}
					if (d[a] != "0") {return b}
				}
			}
			return e
		}, AXO: window.ActiveXObject, getAXO: function (a) {
			var f = null, d, b = this, c = {};
			try {f = new b.AXO(a)}
			catch (d) {}
			return f
		}, convertFuncs: function (f) {
			var a, g, d, b = /^[\$][\$]/, c = this;
			for (a in f) {
				if (b.test(a)) {
					try {
						g = a.slice(2);
						if (g.length > 0 && !f[g]) {
							f[g] = f[a](f);
							delete f[a]
						}
					}
					catch (d) {}
				}
			}
		}, initObj: function (e, b, d) {
			var a, c;
			if (e) {
				if (e[b[0]] == 1 || d) {for (a = 0; a < b.length; a = a + 2) {e[b[a]] = b[a + 1]}}
				for (a in e) {
					c = e[a];
					if (c && c[b[0]] == 1) {this.initObj(c, b)}
				}
			}
		}, initScript: function () {
			var d = this, a = navigator, h, i = document, l = a.userAgent || "", j = a.vendor || "", b = a.platform || "", k = a.product || "";
			d.initObj(d, ["$", d]);
			for (h in d.Plugins) {if (d.Plugins[h]) {d.initObj(d.Plugins[h], ["$", d, "$$", d.Plugins[h]], 1)}}
			d.convertFuncs(d);
			d.OS = 100;
			if (b) {
				var g = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
				for (h = g.length - 2; h >= 0; h = h - 2) {
					if (g[h] && new RegExp(g[h], "i").test(b)) {
						d.OS = g[h + 1];
						break
					}
				}
			}
			;
			d.head = i.getElementsByTagName("head")[0] || i.getElementsByTagName("body")[0] || i.body || null;
			d.isIE = new Function("return/*@cc_on!@*/!1")();
			d.verIE = d.isIE && (/MSIE\s*(\d+\.?\d*)/i).test(l) ? parseFloat(RegExp.$1, 10) : null;
			d.verIEfull = null;
			d.docModeIE = null;
			if (d.isIE) {
				var f, n, c = document.createElement("div");
				try {
					c.style.behavior = "url(#default#clientcaps)";
					d.verIEfull = (c.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}", "componentid")).replace(/,/g, ".")
				}
				catch (f) {}
				n = parseFloat(d.verIEfull || "0", 10);
				d.docModeIE = i.documentMode || ((/back/i).test(i.compatMode || "") ? 5 : n) || d.verIE;
				d.verIE = n || d.docModeIE
			}
			;
			d.ActiveXEnabled = false;
			if (d.isIE) {
				var h, m = ["Msxml2.XMLHTTP", "Msxml2.DOMDocument", "Microsoft.XMLDOM", "ShockwaveFlash.ShockwaveFlash", "TDCCtl.TDCCtl", "Shell.UIHelper", "Scripting.Dictionary", "wmplayer.ocx"];
				for (h = 0; h < m.length; h++) {
					if (d.getAXO(m[h])) {
						d.ActiveXEnabled = true;
						break
					}
				}
			}
			;
			d.isGecko = (/Gecko/i).test(k) && (/Gecko\s*\/\s*\d/i).test(l);
			d.verGecko = d.isGecko ? d.formatNum((/rv\s*\:\s*([\.\,\d]+)/i).test(l) ? RegExp.$1 : "0.9") : null;
			d.isChrome = (/Chrome\s*\/\s*(\d[\d\.]*)/i).test(l);
			d.verChrome = d.isChrome ? d.formatNum(RegExp.$1) : null;
			d.isSafari = ((/Apple/i).test(j) || (!j && !d.isChrome)) && (/Safari\s*\/\s*(\d[\d\.]*)/i).test(l);
			d.verSafari = d.isSafari && (/Version\s*\/\s*(\d[\d\.]*)/i).test(l) ? d.formatNum(RegExp.$1) : null;
			d.isOpera = (/Opera\s*[\/]?\s*(\d+\.?\d*)/i).test(l);
			d.verOpera = d.isOpera && ((/Version\s*\/\s*(\d+\.?\d*)/i).test(l) || 1) ? parseFloat(RegExp.$1, 10) : null;
			d.addWinEvent("load", d.handler(d.runWLfuncs, d))
		}, init: function (d) {
			var c = this, b, d, a = {status: -3, plugin: 0};
			if (!c.isString(d)) {return a}
			if (d.length == 1) {
				c.getVersionDelimiter = d;
				return a
			}
			d = d.toLowerCase().replace(/\s/g, "");
			b = c.Plugins[d];
			if (!b || !b.getVersion) {return a}
			a.plugin = b;
			if (!c.isDefined(b.installed)) {
				b.installed = null;
				b.version = null;
				b.version0 = null;
				b.getVersionDone = null;
				b.pluginName = d
			}
			c.garbage = false;
			if (c.isIE && !c.ActiveXEnabled && d !== "java") {
				a.status = -2;
				return a
			}
			a.status = 1;
			return a
		}, fPush: function (b, a) {
			var c = this;
			if (c.isArray(a) && (c.isFunc(b) || (c.isArray(b) && b.length > 0 && c.isFunc(b[0])))) {a.push(b)}
		}, callArray: function (b) {
			var c = this, a;
			if (c.isArray(b)) {
				for (a = 0; a < b.length; a++) {
					if (b[a] === null) {return}
					c.call(b[a]);
					b[a] = null
				}
			}
		}, call: function (c) {
			var b = this, a = b.isArray(c) ? c.length : -1;
			if (a > 0 && b.isFunc(c[0])) {c[0](b, a > 1 ? c[1] : 0, a > 2 ? c[2] : 0, a > 3 ? c[3] : 0)}
			else {if (b.isFunc(c)) {c(b)}}
		}, getVersionDelimiter: ",", $$getVersion: function (a) {
			return function (g, d, c) {
				var e = a.init(g), f, b, h = {};
				if (e.status < 0) {return null}
				;
				f = e.plugin;
				if (f.getVersionDone != 1) {
					f.getVersion(null, d, c);
					if (f.getVersionDone === null) {f.getVersionDone = 1}
				}
				a.cleanup();
				b = (f.version || f.version0);
				b = b ? b.replace(a.splitNumRegx, a.getVersionDelimiter) : b;
				return b
			}
		}, cleanup: function () {
			var a = this;
			if (a.garbage && a.isDefined(window.CollectGarbage)) {window.CollectGarbage()}
		}, isActiveXObject: function (d, b) {
			var f = this, a = false, g, c = '<object width="1" height="1" style="display:none" ' + d.getCodeBaseVersion(b) + ">" + d.HTML + f.openTag + "/object>";
			if (!f.head) {return a}
			f.head.insertBefore(document.createElement("object"), f.head.firstChild);
			f.head.firstChild.outerHTML = c;
			try {f.head.firstChild.classid = d.classID}
			catch (g) {}
			try {if (f.head.firstChild.object) {a = true}}
			catch (g) {}
			try {if (a && f.head.firstChild.readyState < 4) {f.garbage = true}}
			catch (g) {}
			f.head.removeChild(f.head.firstChild);
			return a
		}, codebaseSearch: function (f, b) {
			var c = this;
			if (!c.ActiveXEnabled || !f) {return null}
			if (f.BIfuncs && f.BIfuncs.length && f.BIfuncs[f.BIfuncs.length - 1] !== null) {c.callArray(f.BIfuncs)}
			var d, o = f.SEARCH, k = {};
			if (c.isStrNum(b)) {
				if (o.match && o.min && c.compareNums(b, o.min) <= 0) {return true}
				if (o.match && o.max && c.compareNums(b, o.max) >= 0) {return false}
				d = c.isActiveXObject(f, b);
				if (d && (!o.min || c.compareNums(b, o.min) > 0)) {o.min = b}
				if (!d && (!o.max || c.compareNums(b, o.max) < 0)) {o.max = b}
				return d
			}
			;
			var e = [0, 0, 0, 0], l = [].concat(o.digits), a = o.min ? 1 : 0, j, i, h, g, m, n = function (p, r) {
				var q = [].concat(e);
				q[p] = r;
				return c.isActiveXObject(f, q.join(","))
			};
			if (o.max) {
				g = o.max.split(c.splitNumRegx);
				for (j = 0; j < g.length; j++) {g[j] = parseInt(g[j], 10)}
				if (g[0] < l[0]) {l[0] = g[0]}
			}
			if (o.min) {
				m = o.min.split(c.splitNumRegx);
				for (j = 0; j < m.length; j++) {m[j] = parseInt(m[j], 10)}
				if (m[0] > e[0]) {e[0] = m[0]}
			}
			if (m && g) {
				for (j = 1; j < m.length; j++) {
					if (m[j - 1] != g[j - 1]) {break}
					if (g[j] < l[j]) {l[j] = g[j]}
					if (m[j] > e[j]) {e[j] = m[j]}
				}
			}
			if (o.max) {
				for (j = 1; j < l.length; j++) {
					if (g[j] > 0 && l[j] == 0 && l[j - 1] < o.digits[j - 1]) {
						l[j - 1] += 1;
						break
					}
				}
			}
			;
			for (j = 0; j < l.length; j++) {
				h = {};
				for (i = 0; i < 20; i++) {
					if (l[j] - e[j] < 1) {break}
					d = round((l[j] + e[j]) / 2);
					if (h["a" + d]) {break}
					h["a" + d] = 1;
					if (n(j, d)) {
						e[j] = d;
						a = 1
					}
					else {l[j] = d}
				}
				l[j] = e[j];
				if (!a && n(j, e[j])) {a = 1}
				;
				if (!a) {break}
			}
			;
			return a ? e.join(",") : null
		}, addWinEvent: function (d, c) {
			var e = this, a = window, b;
			if (e.isFunc(c)) {
				if (a.addEventListener) {a.addEventListener(d, c, false)}
				else {
					if (a.attachEvent) {a.attachEvent("on" + d, c)}
					else {
						b = a["on" + d];
						a["on" + d] = e.winHandler(c, b)
					}
				}
			}
		}, winHandler: function (d, c) {
			return function () {
				d();
				if (typeof c == "function") {c()}
			}
		}, WLfuncs0: [], WLfuncs: [], runWLfuncs: function (a) {
			var b = {};
			a.winLoaded = true;
			a.callArray(a.WLfuncs0);
			a.callArray(a.WLfuncs);
			if (a.onDoneEmptyDiv) {a.onDoneEmptyDiv()}
		}, winLoaded: false, $$onWindowLoaded: function (a) {
			return function (b) {
				if (a.winLoaded) {a.call(b)}
				else {a.fPush(b, a.WLfuncs)}
			}
		}, div: null, divID: "plugindetect", divWidth: 50, pluginSize: 1, emptyDiv: function () {
			var d = this, b, h, c, a, f, g;
			if (d.div && d.div.childNodes) {
				for (b = d.div.childNodes.length - 1; b >= 0; b--) {
					c = d.div.childNodes[b];
					if (c && c.childNodes) {
						for (h = c.childNodes.length - 1; h >= 0; h--) {
							g = c.childNodes[h];
							try {c.removeChild(g)}
							catch (f) {}
						}
					}
					if (c) {
						try {d.div.removeChild(c)}
						catch (f) {}
					}
				}
			}
			if (!d.div) {
				a = document.getElementById(d.divID);
				if (a) {d.div = a}
			}
			if (d.div && d.div.parentNode) {
				try {d.div.parentNode.removeChild(d.div)}
				catch (f) {}
				d.div = null
			}
		}, DONEfuncs: [], onDoneEmptyDiv: function () {
			var c = this, a, b;
			if (!c.winLoaded) {return}
			if (c.WLfuncs && c.WLfuncs.length && c.WLfuncs[c.WLfuncs.length - 1] !== null) {return}
			for (a in c) {
				b = c[a];
				if (b && b.funcs) {
					if (b.OTF == 3) {return}
					if (b.funcs.length && b.funcs[b.funcs.length - 1] !== null) {return}
				}
			}
			for (a = 0; a < c.DONEfuncs.length; a++) {c.callArray(c.DONEfuncs)}
			c.emptyDiv()
		}, getWidth: function (c) {
			if (c) {
				var a = c.scrollWidth || c.offsetWidth, b = this;
				if (b.isNum(a)) {return a}
			}
			return -1
		}, getTagStatus: function (m, g, a, b) {
			var c = this, f, k = m.span, l = c.getWidth(k), h = a.span, j = c.getWidth(h), d = g.span, i = c.getWidth(d);
			if (!k || !h || !d || !c.getDOMobj(m)) {return -2}
			if (j < i || l < 0 || j < 0 || i < 0 || i <= c.pluginSize || c.pluginSize < 1) {return 0}
			if (l >= i) {return -1}
			try {
				if (l == c.pluginSize && (!c.isIE || c.getDOMobj(m).readyState == 4)) {
					if (!m.winLoaded && c.winLoaded) {return 1}
					if (m.winLoaded && c.isNum(b)) {
						if (!c.isNum(m.count)) {m.count = b}
						if (b - m.count >= 10) {return 1}
					}
				}
			}
			catch (f) {}
			return 0
		}, getDOMobj: function (g, a) {
			var f, d = this, c = g ? g.span : 0, b = c && c.firstChild ? 1 : 0;
			try {if (b && a) {d.div.focus()}}
			catch (f) {}
			return b ? c.firstChild : null
		}, setStyle: function (b, g) {
			var f = b.style, a, d, c = this;
			if (f && g) {
				for (a = 0; a < g.length; a = a + 2) {
					try {f[g[a]] = g[a + 1]}
					catch (d) {}
				}
			}
		}, insertDivInBody: function (i, g) {
			var f, c = this, h = "pd33993399", b = null, d = g ? window.top.document : window.document, a = d.getElementsByTagName("body")[0] || d.body;
			if (!a) {
				try {
					d.write('<div id="' + h + '">.' + c.openTag + "/div>");
					b = d.getElementById(h)
				}
				catch (f) {}
			}
			a = d.getElementsByTagName("body")[0] || d.body;
			if (a) {
				a.insertBefore(i, a.firstChild);
				if (b) {a.removeChild(b)}
			}
		}, insertHTML: function (f, b, g, a, k) {
			var l, m = document, j = this, p, o = m.createElement("span"), n, i;
			var c = ["outlineStyle", "none", "borderStyle", "none", "padding", "0px", "margin", "0px", "visibility", "visible"];
			var h = "outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;";
			if (!j.isDefined(a)) {a = ""}
			if (j.isString(f) && (/[^\s]/).test(f)) {
				f = f.toLowerCase().replace(/\s/g, "");
				p = j.openTag + f + ' width="' + j.pluginSize + '" height="' + j.pluginSize + '" ';
				p += 'style="' + h + 'display:inline;" ';
				for (n = 0; n < b.length; n = n + 2) {if (/[^\s]/.test(b[n + 1])) {p += b[n] + '="' + b[n + 1] + '" '}}
				p += ">";
				for (n = 0; n < g.length; n = n + 2) {if (/[^\s]/.test(g[n + 1])) {p += j.openTag + 'param name="' + g[n] + '" value="' + g[n + 1] + '" />'}}
				p += a + j.openTag + "/" + f + ">"
			}
			else {p = a}
			if (!j.div) {
				i = m.getElementById(j.divID);
				if (i) {j.div = i}
				else {
					j.div = m.createElement("div");
					j.div.id = j.divID
				}
				j.setStyle(j.div, c.concat(["width", j.divWidth + "px", "height", (j.pluginSize + 3) + "px", "fontSize", (j.pluginSize + 3) + "px", "lineHeight", (j.pluginSize + 3) + "px", "verticalAlign", "baseline", "display", "block"]));
				if (!i) {
					j.setStyle(j.div, ["position", "absolute", "right", "0px", "top", "0px"]);
					j.insertDivInBody(j.div)
				}
			}
			if (j.div && j.div.parentNode) {
				j.setStyle(o, c.concat(["fontSize", (j.pluginSize + 3) + "px", "lineHeight", (j.pluginSize + 3) + "px", "verticalAlign", "baseline", "display", "inline"]));
				try {o.innerHTML = p}
				catch (l) {}
				;
				try {j.div.appendChild(o)}
				catch (l) {}
				return {span: o, winLoaded: j.winLoaded, tagName: f, outerHTML: p}
			}
			return {span: null, winLoaded: j.winLoaded, tagName: "", outerHTML: p}
		}, Plugins: {
			quicktime: {
				mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"], progID: "QuickTimeCheckObject.QuickTimeCheck.1", progID0: "QuickTime.QuickTime", classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", minIEver: 7, HTML: '<param name="src" value="" /><param name="controller" value="false" />', getCodeBaseVersion: function (a) {return 'codebase="#version=' + a + '"'}, SEARCH: {min: 0, max: 0, match: 0, digits: [16, 128, 128, 0]}, getVersion: function (c) {
					var f = this, d = f.$, a = null, e = null, b;
					if (!d.isIE) {
						if (d.hasMimeType(f.mimeType)) {
							e = d.OS != 3 ? d.findNavPlugin("QuickTime.*Plug-?in", 0) : null;
							if (e && e.name) {a = d.getNum(e.name)}
						}
					}
					else {
						if (d.isStrNum(c)) {
							b = c.split(d.splitNumRegx);
							if (b.length > 3 && parseInt(b[3], 10) > 0) {b[3] = "9999"}
							c = b.join(",")
						}
						if (d.isStrNum(c) && d.verIE >= f.minIEver && f.canUseIsMin() > 0) {
							f.installed = f.isMin(c);
							f.getVersionDone = 0;
							return
						}
						f.getVersionDone = 1;
						if (!a && d.verIE >= f.minIEver) {a = f.CDBASE2VER(d.codebaseSearch(f))}
						if (!a) {
							e = d.getAXO(f.progID);
							if (e && e.QuickTimeVersion) {
								a = e.QuickTimeVersion.toString(16);
								a = parseInt(a.charAt(0), 16) + "." + parseInt(a.charAt(1), 16) + "." + parseInt(a.charAt(2), 16)
							}
						}
					}
					f.installed = a ? 1 : (e ? 0 : -1);
					f.version = d.formatNum(a, 3)
				}, cdbaseUpper: ["7,60,0,0", "0,0,0,0"], cdbaseLower: ["7,50,0,0", null], cdbase2ver: [function (c, b) {
					var a = b.split(c.$.splitNumRegx);
					return [a[0], a[1].charAt(0), a[1].charAt(1), a[2]].join(",")
				}, null], CDBASE2VER: function (f) {
					var e = this, c = e.$, b, a = e.cdbaseUpper, d = e.cdbaseLower;
					if (f) {
						f = c.formatNum(f);
						for (b = 0; b < a.length; b++) {if (a[b] && c.compareNums(f, a[b]) < 0 && d[b] && c.compareNums(f, d[b]) >= 0 && e.cdbase2ver[b]) {return e.cdbase2ver[b](e, f)}}
					}
					return f
				}, canUseIsMin: function () {
					var f = this, d = f.$, b, c = f.canUseIsMin, a = f.cdbaseUpper, e = f.cdbaseLower;
					if (!c.value) {
						c.value = -1;
						for (b = 0; b < a.length; b++) {
							if (a[b] && d.codebaseSearch(f, a[b])) {
								c.value = 1;
								break
							}
							if (e[b] && d.codebaseSearch(f, e[b])) {
								c.value = -1;
								break
							}
						}
					}
					f.SEARCH.match = c.value == 1 ? 1 : 0;
					return c.value
				}, isMin: function (c) {
					var b = this, a = b.$;
					return a.codebaseSearch(b, c) ? 0.7 : -1
				}
			}, flash: {
				mimeType: "application/x-shockwave-flash", progID: "ShockwaveFlash.ShockwaveFlash", classID: "clsid:D27CDB6E-AE6D-11CF-96B8-444553540000", getVersion: function () {
					var b = function (i) {
						if (!i) {return null}
						var e = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(i);
						return e ? e[0].replace(/[rRdD\.]/g, ",").replace(/\s/g, "") : null
					};
					var j = this, g = j.$, k, h, l = null, c = null, a = null, f, m, d;
					if (!g.isIE) {
						m = g.hasMimeType(j.mimeType);
						if (m) {
							f = g.getDOMobj(g.insertHTML("object", ["type", j.mimeType], [], "", j));
							try {l = g.getNum(f.GetVariable("$version"))}
							catch (k) {}
						}
						if (!l) {
							d = m ? m.enabledPlugin : null;
							if (d && d.description) {l = b(d.description)}
							if (l) {l = g.getPluginFileVersion(d, l)}
						}
					}
					else {
						for (h = 15; h > 2; h--) {
							c = g.getAXO(j.progID + "." + h);
							if (c) {
								a = h.toString();
								break
							}
						}
						if (!c) {c = g.getAXO(j.progID)}
						if (a == "6") {
							try {c.AllowScriptAccess = "always"}
							catch (k) {return "6,0,21,0"}
						}
						try {l = b(c.GetVariable("$version"))}
						catch (k) {}
						if (!l && a) {l = a}
					}
					j.installed = l ? 1 : -1;
					j.version = g.formatNum(l);
					return true
				}
			}, shockwave: {
				mimeType: "application/x-director", progID: "SWCtl.SWCtl", classID: "clsid:166B1BCA-3F9C-11CF-8075-444553540000", getVersion: function () {
					var a = null, b = null, g, f, d = this, c = d.$;
					if (!c.isIE) {
						f = c.findNavPlugin("Shockwave\\s*for\\s*Director");
						if (f && f.description && c.hasMimeType(d.mimeType)) {a = c.getNum(f.description)}
						if (a) {a = c.getPluginFileVersion(f, a)}
					}
					else {
						try {b = c.getAXO(d.progID).ShockwaveVersion("")}
						catch (g) {}
						if (c.isString(b) && b.length > 0) {a = c.getNum(b)}
						else {
							if (c.getAXO(d.progID + ".8")) {a = "8"}
							else {
								if (c.getAXO(d.progID + ".7")) {a = "7"}
								else {if (c.getAXO(d.progID + ".1")) {a = "6"}}
							}
						}
					}
					d.installed = a ? 1 : -1;
					d.version = c.formatNum(a)
				}
			}, zz: 0
		}
	};
	PluginDetect.initScript();
	var gArgCountErr = 'The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...', gTagAttrs = null, gQTGeneratorVersion = 1;

	function AC_QuickTimeVersion() {return gQTGeneratorVersion}

	function _QTComplain(a, b) {
		b = b.replace("%%", a);
		alert(b)
	}

	function _QTAddAttribute(a, b, c) {
		var d;
		d = gTagAttrs[a + b];
		null == d && (d = gTagAttrs[b]);
		return null != d ? (0 == b.indexOf(a) && null == c && (c = b.substring(a.length)), null == c && (c = b), c + '="' + d + '" ') : ""
	}

	function _QTAddObjectAttr(a, b) {
		if (0 == a.indexOf("emb#"))return "";
		0 == a.indexOf("obj#") && null == b && (b = a.substring(4));
		return _QTAddAttribute("obj#", a, b)
	}

	function _QTAddEmbedAttr(a, b) {
		if (0 == a.indexOf("obj#"))return "";
		0 == a.indexOf("emb#") && null == b && (b = a.substring(4));
		return _QTAddAttribute("emb#", a, b)
	}

	function _QTAddObjectParam(a, b) {
		var c, d = "", e = b ? " />" : ">";
		-1 == a.indexOf("emb#") && (c = gTagAttrs["obj#" + a], null == c && (c = gTagAttrs[a]), 0 == a.indexOf("obj#") && (a = a.substring(4)), null != c && (d = '  <param name="' + a + '" value="' + c + '"' + e + "\n"));
		return d
	}

	function _QTDeleteTagAttrs() {
		for (var a = 0; a < arguments.length; a++) {
			var b = arguments[a];
			delete gTagAttrs[b];
			delete gTagAttrs["emb#" + b];
			delete gTagAttrs["obj#" + b]
		}
	}

	function _QTGenerate(a, b, c) {
		if (4 > c.length || 0 != c.length % 2)return _QTComplain(a, gArgCountErr), "";
		gTagAttrs = [];
		gTagAttrs.src = c[0];
		gTagAttrs.width = c[1];
		gTagAttrs.height = c[2];
		gTagAttrs.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B";
		gTagAttrs.pluginspage = "http://www.apple.com/quicktime/download/";
		a = c[3];
		if (null == a || "" == a)a = "6,0,2,0";
		gTagAttrs.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=" + a;
		for (var d, e = 4; e < c.length; e += 2)d = c[e].toLowerCase(), a = c[e + 1], "name" == d || "id" == d ? gTagAttrs.name = a : gTagAttrs[d] = a;
		c = "<object " + _QTAddObjectAttr("classid") + _QTAddObjectAttr("width") + _QTAddObjectAttr("height") + _QTAddObjectAttr("codebase") + _QTAddObjectAttr("name", "id") + _QTAddObjectAttr("tabindex") + _QTAddObjectAttr("hspace") + _QTAddObjectAttr("vspace") + _QTAddObjectAttr("border") + _QTAddObjectAttr("align") + _QTAddObjectAttr("class") + _QTAddObjectAttr("title") + _QTAddObjectAttr("accesskey") + _QTAddObjectAttr("noexternaldata") + ">\n" + _QTAddObjectParam("src", b);
		e = "  <embed " + _QTAddEmbedAttr("src") + _QTAddEmbedAttr("width") + _QTAddEmbedAttr("height") + _QTAddEmbedAttr("pluginspage") + _QTAddEmbedAttr("name") + _QTAddEmbedAttr("align") + _QTAddEmbedAttr("tabindex");
		_QTDeleteTagAttrs("src", "width", "height", "pluginspage", "classid", "codebase", "name", "tabindex", "hspace", "vspace", "border", "align", "noexternaldata", "class", "title", "accesskey");
		for (d in gTagAttrs)a = gTagAttrs[d], null != a && (e += _QTAddEmbedAttr(d), c += _QTAddObjectParam(d, b));
		return c + e + "> </embed>\n</object>"
	}

	function QT_GenerateOBJECTText() {return _QTGenerate("QT_GenerateOBJECTText", !1, arguments)}

	/*
	 jQuery hashchange event v1.3
	 https://github.com/cowboy/jquery-hashchange
	 Copyright (c) 2010 "Cowboy" Ben Alman
	 Dual licensed under the MIT and GPL licenses.
	 */
	(function () {
		function e(a) {
			a = a || location.href;
			return "#" + a.replace(/^[^#]*#?(.*)$/, "$1")
		}

		var k = document, b, f = $.event.special, p = k.documentMode, m = "oniLightBoxHashChange" in window && (void 0 === p || 7 < p);
		$.fn.iLightBoxHashChange = function (a) {return a ? this.bind("iLightBoxHashChange", a) : this.trigger("iLightBoxHashChange")};
		$.fn.iLightBoxHashChange.delay = 50;
		f.iLightBoxHashChange = $.extend(f.iLightBoxHashChange, {
			setup: function () {
				if (m)return !1;
				$(b.start)
			}, teardown: function () {
				if (m)return !1;
				$(b.stop)
			}
		});
		b = function () {
			function a() {
				var c =
						e(), d = f(l);
				c !== l ? (n(l = c, d), $(window).trigger("iLightBoxHashChange")) : d !== l && (location.href = location.href.replace(/#.*/, "") + d);
				g = setTimeout(a, $.fn.iLightBoxHashChange.delay)
			}

			var h = {}, g, l = e(), b = function (c) {return c}, n = b, f = b;
			h.start = function () {g || a()};
			h.stop = function () {
				g && clearTimeout(g);
				g = void 0
			};
			browser.msie && !m && function () {
				var c, d;
				h.start = function () {
					c || (d = (d = $.fn.iLightBoxHashChange.src) && d + e(), c = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
						d || n(e());
						a()
					}).attr("src", d ||
							"javascript:0").insertAfter("body")[0].contentWindow, k.onpropertychange = function () {
						try {"title" === event.propertyName && (c.document.title = k.title)}
						catch (a) {}
					})
				};
				h.stop = b;
				f = function () {return e(c.location.href)};
				n = function (a, d) {
					var b = c.document, e = $.fn.iLightBoxHashChange.domain;
					a !== d && (b.title = k.title, b.open(), e && b.write('<script>document.domain="' + e + '"\x3c/script>'), b.close(), c.location.hash = a)
				}
			}();
			return h
		}()
	})();

	if (!Array.prototype.filter) {
		Array.prototype.filter = function (fun /*, thisp */) {
			"use strict";

			if (this == null)
				throw new TypeError();

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun != "function")
				throw new TypeError();

			var res = [];
			var thisp = arguments[1];
			for (var i = 0; i < len; i++) {
				if (i in t) {
					var val = t[i]; // in case fun mutates this
					if (fun.call(thisp, val, i, t))
						res.push(val);
				}
			}

			return res;
		};
	}

	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function (searchElement, fromIndex) {
			var k;

			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}

			var O = Object(this);

			var len = O.length >>> 0;

			if (len === 0) {
				return -1;
			}

			var n = +fromIndex || 0;

			if (abs(n) === Infinity) {
				n = 0;
			}

			if (n >= len) {
				return -1;
			}

			k = max(n >= 0 ? n : len - abs(n), 0);

			while (k < len) {
				var kValue;
				if (k in O && O[k] === searchElement) {
					return k;
				}
				k++;
			}
			return -1;
		};
	}

	if (!Array.prototype.lastIndexOf) {
		Array.prototype.lastIndexOf = function (searchElement /*, fromIndex*/) {
			"use strict";

			if (this == null)
				throw new TypeError();

			var t = Object(this);
			var len = t.length >>> 0;
			if (len === 0)
				return -1;

			var n = len;
			if (arguments.length > 1) {
				n = Number(arguments[1]);
				if (n != n)
					n = 0;
				else if (n != 0 && n != (1 / 0) && n != -(1 / 0))
					n = (n > 0 || -1) * floor(abs(n));
			}

			var k = n >= 0 ? min(n, len - 1) : len - abs(n);

			for (; k >= 0; k--) {
				if (k in t && t[k] === searchElement)
					return k;
			}
			return -1;
		};
	}
})(jQuery, this);