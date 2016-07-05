(function (h, g, k) {
    h.SPR || (h.SPR = {provide: function (a, b) {
        d[a] || (d[a] = b, "function" === typeof d[a].init && d[a].init())
    }});
    var d = h.SPR;
    d.provide("Common", {random: function () {
        return Math.floor(Math.random() * 8675309)
    }, isArray: function (a) {
        return Array.isArray ? Array.isArray(a) : Object.prototype.toString.call(a) === "[object Array]"
    }, isString: function (a) {
        return Object.prototype.toString.call(a) === "[object String]"
    }, hasOwnProperty: function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }});
    d.provide("DOM", {init: function () {
        function a() {
            d.DOM.flush();
            h.removeEventListener("DOMContentLoaded", a, false)
        }

        function b() {
            if (/loaded|interactive|complete/.test(g.readyState)) {
                g.detachEvent("onreadystatechange", b);
                if (c) {
                    c = false;
                    d.DOM.flush()
                }
            }
        }

        d.DOM.on = d.DOM.attachEvent;
        d.DOM.off = d.DOM.detachEvent;
        var c = true;
        h.addEventListener && h.addEventListener("DOMContentLoaded", a);
        g.attachEvent && g.attachEvent("onreadystatechange", b)
    }, addScript: function (a) {
        var b = g.createElement("script");
        b.type = "text/javascript";
        b.setAttribute("async", true);
        b.setAttribute("name", "spr");
        b.src = a;
        d.DOM.onReady(function () {
            setTimeout(function () {
                d.DOM.$("HEAD")[0].appendChild(b)
            }, 1)
        });
        return b
    }, queue: [], ready: /loaded|interactive|complete/.test(g.readyState), flush: function () {
        var a = d.DOM.queue.shift();
        for (d.DOM.ready = true; a;) {
            a();
            a = d.DOM.queue.shift()
        }
    }, onReady: function (a) {
        if (d.DOM.ready) {
            d.DOM.queue.push(a);
            d.DOM.flush()
        } else g.documentElement.doScroll ? h.self === h.top ? function () {
            if (!g.uniqueID && g.expando)return d.DOM.queue.push(a);
            try {
                g.documentElement.doScroll("left");
                a()
            } catch (b) {
                setTimeout(arguments.callee,
                    0)
            }
        }() : d.DOM.queue.push(a) : d.DOM.queue.push(a)
    }, attachEvent: function (a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, false) : a.attachEvent("on" + b, c);
        return a
    }, detachEvent: function (a, b, c) {
        a.addEventListener ? a.removeEventListener(b, c, false) : a.detachEvent("on" + b, c);
        return a
    }, top: function (a) {
        return a ? a.y ? a.y : a.offsetTop + d.DOM.top(a.offsetParent) : 0
    }, left: function (a) {
        return a ? a.x ? a.x : a.offsetLeft + d.DOM.left(a.offsetParent) : 0
    }, height: function (a) {
        return Math.max(a.scrollHeight || 0, a.offsetHeight || 0, a.clientHeight ||
            0)
    }, width: function (a) {
        return Math.max(a.scrollWidth || 0, a.offsetWidth || 0, a.clientWidth || 0)
    }, scroll: function () {
        var a = 0;
        return a = h.pageYOffset ? h.pageYOffset : g.documentElement ? g.documentElement.scrollTop : 0
    }, viewport: function () {
        var a = 0, b = 0, b = g.documentElement;
        if (h.innerWidth) {
            a = h.innerWidth;
            b = h.innerHeight
        } else {
            if (!b || !b.clientWidth)b = d.$("BODY")[0];
            a = b.clientWidth;
            b = b.clientHeight
        }
        return{w: a, h: b}
    }, getsupportedprop: function (a) {
        for (var b = g.documentElement, c = 0; c < a.length; c++)if (typeof b.style[a[c]] == "string")return a[c]
    },
        $: function (a) {
            var b = [], c, d = 0, f;
            if (!a)return[];
            if (typeof a !== "string")return[a];
            switch (a.charAt(0)) {
                case "#":
                    b.push(g.getElementById(a.substring(1)));
                    break;
                case ".":
                    c = g.getElementsByTagName("*");
                    for (f = " " + a.substring(1) + " "; d < c.length; d = d + 1) {
                        a = (" " + c[d].className + " ").replace(/[\n\t\r]/g, " ");
                        a.indexOf(f) > -1 && b.push(c[d])
                    }
                    break;
                default:
                    b = g.getElementsByTagName(a)
            }
            return b
        }});
    d.provide("QS", {escape: function (a) {
        return encodeURIComponent(a)
    }, unescape: function (a) {
        return decodeURIComponent(a)
    }, encode: function (a, b) {
        var c = d.QS, e = [];
        if (d.Common.isArray(a))for (var f = 0, i; f < a.length; f = f + 1) {
            i = a[f];
            /\[\]$/.test(b) ? e.push(c.escape(b) + "=" + c.escape(i)) : e.push(c.encode(i, b + "[" + (typeof i === "object" ? f : "") + "]"))
        } else if (typeof a === "object" && a !== null && !("nodeType"in a))for (f in a)Object.prototype.hasOwnProperty.call(a, f) && (b ? e.push(c.encode(a[f], b + "[" + f + "]")) : e.push(c.encode(a[f], f))); else e.push(c.escape(b) + "=" + c.escape(a));
        return e.join("&")
    }, decode: function (a) {
        for (var b = {}, c = 0, e = {"true": true, "false": false, "null": null},
                 a = a.replace(/\+/g, " ").split("&"); c < a.length; c = c + 1) {
            var f = a[c].split("="), i = d.QS.unescape(f[0]), j = b, g = 0, h = i.split("]["), l = h.length - 1;
            if (/\[/.test(h[0]) && /\]$/.test(h[l])) {
                h[l] = h[l].replace(/\]$/, "");
                h = h.shift().split("[").concat(h);
                l = h.length - 1
            } else l = 0;
            if (f.length === 2) {
                f = (f = d.QS.unescape(f[1])) && !isNaN(f) ? +f : f === "undefined" ? void 0 : e[f] !== void 0 ? e[f] : f;
                if (l)for (; g <= l; g = g + 1) {
                    i = h[g] === "" ? j.length : h[g];
                    j = j[i] = g < l ? j[i] || (h[g + 1] && isNaN(h[g + 1]) ? {} : []) : f
                } else d.Common.isArray(b[i]) ? b[i].push(f) : b[i] = b[i] !== void 0 ? [b[i], f] : f
            } else i && (b[i] = void 0)
        }
        return b
    }});
    d.provide("API", {callbacks: {}, jsonp: function (a, b, c, e, f) {
        e = e || k;
        f || (f = "cb");
        var i = "cb" + d.Common.random(), j = d.API;
        c[f] = "SPR.API.callbacks." + i;
        f = g.location.protocol + "//";
        f === "file://" && (f = "http://");
        var c = d.QS.encode(c), h = d.DOM.addScript(f + a + b + "?" + c);
        j.callbacks[i] = function (a) {
            setTimeout(function () {
                h.parentNode.removeChild(h)
            }, 0);
            e(a);
            try {
                delete j.callbacks[i]
            } catch (b) {
                j.callbacks[i] = null
            }
        }
    }});
    d.provide("XD", {callbacks: {}, xport: null, init: function () {
        d.XD.xport =
            h.postMessage ? d.XD.PM : d.XD.Fragment;
        d.XD.xport.init()
    }, send: function (a, b, c, e) {
        e = e || {};
        e.__message__ = c;
        d.XD.xport.send(a, b, d.QS.encode(e))
    }, recv: function (a) {
        var a = d.QS.decode(a), b = d.XD.callbacks[a.__message__], c = 0;
        if (b)for (; c < b.length; c = c + 1)if (typeof b[c] === "function")b[c](a)
    }, on: function (a, b) {
        b = b || k;
        d.XD.callbacks[a] = d.XD.callbacks[a] || [];
        d.XD.callbacks[a].push(b)
    }, once: function (a, b) {
        b = b || k;
        d.XD.on(a, function (a) {
            b(a);
            b = k
        })
    }, PM: {init: function () {
        d.DOM.attachEvent(h, "message", function (a) {
            d.XD.recv(a.data)
        })
    },
        send: function (a, b, c) {
            a.postMessage(c, g.location.protocol + "//" + (b.host || b))
        }}, Fragment: {init: function () {
        function a() {
            var f = g.location.hash;
            if (f !== c && b.test(f)) {
                d.XD.recv(f.replace(b, ""));
                g.location.hash = c
            }
            (f = e.queue.shift()) && e.setHash.apply(null, f);
            e.interval = setTimeout(a, e.delay)
        }

        var b, c, e = d.XD.Fragment;
        c = g.location.hash;
        b = /.*&\d{11,15}data:/;
        a()
    }, delay: 100, queue: [], send: function (a) {
        d.XD.Fragment.queue.push(arguments)
    }, setHash: function (a, b, c) {
        var d;
        d = (b.hash || "").replace(/^#+/, "");
        b = b.location ||
            "";
        d = d + "&" + +new Date + "data:" + c;
        a.location = b + "#" + d
    }}});
    d.provide("Cookie", {patterns: {}, get: function (a) {
        var b = g.cookie || "", c = d.Cookie.patterns[a];
        if (!c) {
            c = a.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1");
            c = RegExp("(?:^|;)\\s?" + c + "=(.*?)(?:;|$)", "i");
            d.Cookie.patterns[a] = c
        }
        return(a = b.match(c)) && d.QS.unescape(a[1])
    }, set: function (a, b, c) {
        var d = "";
        c && (d = "; expires=" + c.toGMTString());
        g.cookie = a + "=" + b + d + "; path=/"
    }, del: function (a) {
        d.Cookie.set(a, "", new Date(1982, 5, 13))
    }});
    d.provide("FX", {init: function () {
        d.FX.Animation.prototype =
        {add: function (a) {
            for (var b, c, e = 0; e < a.length; e = e + 1) {
                c = a[e];
                b = c.fx ? d.FX.Easing[c.fx] : d.FX.Easing.ease;
                this.queue.push(new d.FX.Tween(this.el.style, c.type, b, c.from, c.to, c.duration, "px"))
            }
        }, run: function (a) {
            for (var b = 0, c = this.queue, d = 0, f = function () {
                d = d + 1;
                d === c.length && typeof a === "function" && a()
            }; b < c.length; b = b + 1)c[b].start(f)
        }};
        d.FX.Tween.prototype = {func: function (a, b, c, d) {
            return c * a / d + b
        }, setTime: function (a) {
            this.prevTime = this._time;
            if (a > this._duration)if (this.looping) {
                this.rewind(a - this._duration);
                this.update()
            } else {
                this._time =
                    this._duration;
                this.update();
                this.stop();
                this.callback()
            } else {
                a < 0 ? this.rewind() : this._time = a;
                this.update()
            }
        }, setPosition: function (a) {
            var b = this.suffixe !== "" ? this.suffixe : "";
            this.prevPos = this._pos;
            this.obj[this.prop] = Math.round(a) + b;
            this._pos = a
        }, getPosition: function (a) {
            if (!a)a = this._time;
            return this.func(a, this.begin, this.change, this._duration)
        }, init: function (a, b, c, e, f, i, j) {
            if (arguments.length) {
                if (j)this.suffixe = j;
                this.callback = k;
                this.obj = a;
                this.prop = b;
                this.begin = e;
                this.finish = f;
                this._pos = e;
                this._duration =
                    !i || i <= 0 ? 1E5 : i;
                this.func = c || d.FX.Easing.none;
                this.change = f - this.begin
            }
        }, start: function (a) {
            if (typeof a === "function")this.callback = a;
            if (!this.begin) {
                this._pos = this.begin = parseInt(this.obj[this.prop], 10);
                this.change = this.finish - this.begin
            }
            this.rewind();
            this.stop();
            this.isPlaying = true;
            this.onEnterFrame()
        }, rewind: function (a) {
            this.stop();
            this._time = !a ? 0 : a;
            this.fixTime();
            this.update()
        }, update: function () {
            this.setPosition(this.getPosition(this._time))
        }, onEnterFrame: function () {
            var a = this;
            if (a.isPlaying) {
                a.nextFrame();
                setTimeout(function () {
                    a.onEnterFrame()
                }, 0)
            }
        }, nextFrame: function () {
            this.setTime((this.getTimer() - this._startTime) / 1E3)
        }, stop: function () {
            this.isPlaying = false
        }, fixTime: function () {
            this._startTime = this.getTimer() - this._time * 1E3
        }, getTimer: function () {
            return(new Date).getTime() - this._time
        }}
    }, Animation: function (a, b) {
        this.queue = [];
        this.el = a;
        this.add(b)
    }, Tween: function (a, b, c, d, f, i, j) {
        this.obj = {};
        this.prop = "";
        this.prevPos = this.prevTime = this.change = 0;
        this.looping = false;
        this._finish = this._startTime = this._position =
            this._pos = this._time = this._duration = 0;
        this.suffixe = this.name = "";
        this.init(a, b, c, d, f, i, j)
    }, Easing: {none: function (a, b, c, d) {
        return c * a / d + b
    }, ease: function (a, b, c, d) {
        return(a = a / (d / 2)) < 1 ? c / 2 * a * a * a * a * a + b : c / 2 * ((a = a - 2) * a * a * a * a + 2) + b
    }, bounce: function (a, b, c, d) {
        var f = 0.867;
        return(a = a / (d / 2)) < 1 ? c / 2 * a * a * (((f = f * 1.525) + 1) * a - f) + b : c / 2 * ((a = a - 2) * a * (((f = f * 1.525) + 1) * a + f) + 2) + b
    }}});
    d.provide("de", {api: "feeds.delicious.com", apiPath: "/v2/json/urlinfo/data", collect: function (a) {
        var b = d.de, c = d.Reach.config;
        d.API.jsonp(b.api, b.apiPath,
            {url: c.url}, function (b) {
                d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "de", data: b})
            }, "callback")
    }});
    d.provide("dg", {api: "services.digg.com", apiPath: "/stories/", collect: function (a) {
        var b = d.dg, c = d.Reach.config;
        d.API.jsonp(b.api, b.apiPath, {type: "javascript", link: c.url}, function (b) {
            d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "dg", data: b})
        }, "callback")
    }});
    d.provide("fb", {api: "graph.facebook.com", apiPath: "/fql", collect: function (a) {
        var b =
            d.fb, c = d.Reach.config;
        d.API.jsonp(b.api, b.apiPath, {q: 'SELECT url,total_count,share_count,comment_count,like_count,click_count,commentsbox_count FROM link_stat WHERE url in ("' + c.url + '")'}, function (b) {
            d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "fb", data: b})
        }, "callback")
    }});
    d.provide("gp", {api: "clients6.google.com", apiPath: "rpc", collect: function () {
    }});
    d.provide("li", {api: "www.linkedin.com", apiPath: "/countserv/count/share", collect: function (a) {
        var b = d.li, c = d.Reach.config;
        d.API.jsonp(b.api, b.apiPath, {url: c.url}, function (b) {
            d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "li", data: b})
        }, "callback")
    }});
    d.provide("rd", {api: "www.reddit.com", apiPath: "/api/info.json", collect: function (a) {
        var b = d.rd, c = d.Reach.config;
        d.API.jsonp(b.api, b.apiPath, {url: c.url}, function (b) {
            d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "rd", data: b})
        }, "jsonp")
    }});
    d.provide("pi", {api: "api.pinterest.com", apiPath: "/v1/urls/count.json",
        collect: function (a) {
            var b = d.pi, c = d.Reach.config;
            d.API.jsonp(b.api, b.apiPath, {url: c.url}, function (b) {
                d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "pi", data: b})
            }, "callback")
        }});
    d.provide("su", {api: "www.stumbleupon.com", apiPath: "/services/1.01/badge.getinfo", collect: function (a) {
        var b = d.su, c = d.Reach.config;
        d.API.jsonp(b.api, b.apiPath, {url: c.url}, function (b) {
            d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "su", data: b})
        })
    }});
    d.provide("tw",
        {api: "urls.api.twitter.com", apiPath: "/1/urls/count.json", collect: function (a) {
            var b = d.tw, c = d.Reach.config;
            d.API.jsonp(b.api, b.apiPath, {url: c.url}, function (b) {
                d.API.jsonp("cc.simplereach.com", "/event", {event: "s", url: c.url, cid: a.id, pid: c.pid, sn: "tw", data: b})
            }, "callback")
        }});
    d.provide("Reach", {api: "cc.simplereach.com", cdn: "d8rk54i4mohrb.cloudfront.net", config: {}, init: function () {
        if (h.location.host !== d.Reach.cdn)try {
            var a = d.Reach, b = h.__reach_config || h.__spr_config, c = a.config || {}, e;
            for (e in b)c[e] === void 0 &&
            (c[e] = b[e]);
            if (c.ckw)c.tags = c.ckw.split(" ");
            if (c.pub)c.date = c.pub;
            if (c.cat)c.channels = c.cat.split(" ");
            if (c.no_slide === true || c.no_slide === 1)c.slide_active = false;
            a.config = c;
            a.collect(c)
        } catch (f) {
            d.DOM.onReady(function () {
                var a = g.createElement("img");
                a.src = "http://cc.simplereach.com/pixel?bad=true&error=" + f.message;
                a.setAttribute("width", "1px");
                g.body.appendChild(a)
            })
        }
    }, collect: function (a) {
        function b(a) {
            typeof a === "string" && (a = a.split(","));
            if (d.Common.isArray(a)) {
                for (var b = 0; b < a.length; b = b + 1)typeof a[b] ===
                    "string" && (a[b] = a[b].replace(/^\s*/, "").replace(/\s*$/, "").replace(/\|/, ""));
                return a.join("|")
            }
            return a
        }

        var c = d.Reach, e = {};
        e.pid = a.pid;
        e.url = a.url;
        e.title = a.title;
        e.date = a.date;
        e.referrer = g.referrer;
        if (a.authors)e.authors = b(a.authors);
        if (a.channels)e.channels = b(a.channels);
        if (a.tags)e.tags = b(a.tags);
        if (a.date && typeof a.date !== "string")e.date = a.date.toString();
        if (!e.pid || !e.url || !e.date)try {
            console.log("SPR-ERROR: Please provide pid, url and date in the configuration")
        } catch (f) {
        } else d.API.jsonp(c.api,
            "/n", e, function (a) {
                if (a.slide !== false) {
                    var b = false;
                    c.config.slide_active === true ? b = true : c.config.slide_active !== false && a.slide === true && (b = true);
                    d.Slide && (b === true && d.Slide.enabled === false) && d.Slide.enable(a.id)
                }
                a.de && d.de.collect(a);
                a.dg && d.dg.collect(a);
                a.fb && d.fb.collect(a);
                a.gp && d.gp.collect(a);
                a.li && d.li.collect(a);
                a.rd && d.rd.collect(a);
                a.su && d.su.collect(a);
                a.tw && d.tw.collect(a);
                a.pi && d.pi.collect(a)
            })
    }});
    d.provide("Slide", {domain: d.Reach.cdn, api: "slide.simplereach.com", template: "/slides/slide.html?" +
        d.Common.random(), cookie: "__sruid", optOutCookie: "__spr_opt_out", config: {}, isHost: !0, recommendations: null, remote: null, hasOpened: !1, evtopts: {}, debug: !1, enabled: !1, cid: null, fx: {}, init: function () {
        function a(a) {
            d.XD.on(a, function (c) {
                b[a](c)
            })
        }

        var b = d.Slide, c = d.Cookie;
        h.location.host !== b.domain && b.createConfig();
        if (!b.config.no_slide && c.get(b.optOutCookie) !== "true") {
            h.location.host === b.domain && b.localInit();
            for (var c = ["recommend", "setState", "help", "setOptOut", "run", "setCookie", "setOptOutCookie", "open",
                "close", "slideIn", "toggleHelp", "showShares"], e = 0; e < c.length; e = e + 1)a(c[e])
        }
    }, createConfig: function () {
        for (var a = h.__reach_config || h.__spr_config || {}, b = d.Reach.config, c = {}, e = ["pid", "offset", "disallow_opt_out", "slide_logo", "header", "css", "uid", "no_slide", "loc", "bg_color_code", "header_color_code", "box_shadow_opacity"], f, g, j = e.length - 1; j >= 0; j--) {
            f = e[j];
            g = void 0;
            b[f] !== void 0 ? g = b[f] : a[f] !== void 0 ? g = a[f] : f === "slide_logo" ? g = true : f === "uid" && (g = d.Cookie.get(d.Slide.cookie));
            g !== void 0 && (c[f] = g)
        }
        d.Slide.config =
            c
    }, enable: function (a) {
        d.DOM.onReady(function () {
            d.Slide.remoteInit(a)
        })
    }, localInit: function () {
        var a = d.Slide, b = d.QS.decode(h.location.hash.substring(1));
        a.isHost = false;
        a.domain = b.host;
        a.hash = b.hash;
        a.location = b.location;
        a.remote = h.parent
    }, remoteInit: function (a) {
        var b = d.DOM, c = d.Slide, e = c.config.loc, f = b.$("body")[0];
        typeof e === "string" && (e.indexOf("#") === -1 && e.indexOf(".") === -1) && (e = "#" + e);
        c.enabled = true;
        c.content = b.$(e)[0] || f;
        c.mult = c.content === f ? 0.55 : 0.95;
        c.cid = a;
        c.recommend()
    }, xd: function (a, b) {
        d.XD.send(d.Slide.remote,
            {location: d.Slide.location, host: d.Slide.domain, hash: d.Slide.hash}, a, b)
    }, recommend: function (a) {
        var b = d.Slide, c = d.QS, e = d.DOM, f = d.XD, i = d.API;
        if (b.isHost)i.jsonp(b.api, "/p/n", {pid: b.config.pid, cid: b.cid}, function (a) {
            var d;
            if (a.hl && a.hl.length !== 0) {
                var e = c.encode({host: h.location.host, hash: h.location.hash, location: h.location.href});
                d = g.location.protocol + "//" + b.domain + b.template;
                b.frame = b.createFrame(d + "#" + e);
                b.remote = b.frame.contentWindow;
                b.location = d;
                f.once("slide-init", function (c) {
                    var d = {};
                    if (b.config.offset) {
                        var e =
                            parseInt(b.config.offset, 10);
                        if (typeof c.start.top !== "undefined")c.start.top = e + "px";
                        if (typeof c.start.bottom !== "undefined")c.start.bottom = e + "px"
                    }
                    b.fx = c;
                    if (!b.setCookie(a.uid))d.setCookie = {uid: a.uid};
                    a.pid = b.config.pid;
                    b.evtopts = {uid: a.uid, tid: a.tid, pid: b.config.pid, a: a.hl[0].id};
                    d.recommend = {res: a, config: b.config};
                    b.xd("run", d);
                    b.bindEvents()
                })
            }
        }); else e.onReady(function () {
            var c = a.res.hl[0];
            b.config = a.config;
            b.hl = c;
            b.evtopts = {uid: a.res.uid, tid: a.res.tid, pid: a.config.pid, a: c.id};
            e.$("#simplereach-slide-link")[0].href =
                c.u;
            e.$("#simplereach-slide-link")[0].innerHTML = c.t;
            if (b.config.disallow_opt_out)e.$("#simplereach-slide-help-button")[0].style.display = "none";
            b.config.slide_logo === false ? e.$("#logo")[0].style.display = "none" : e.$("#logo")[0].style.display = "block";
            if (b.config.header)e.$("#simplereach-slide-title")[0].innerHTML = b.config.header;
            if (b.config.css) {
                c = g.createElement("link");
                c.rel = "stylesheet";
                c.type = "text/css";
                c.href = b.config.css;
                e.$("HEAD")[0].appendChild(c)
            }
            if (b.config.bg_color_code)e.$("#simplereach-slide-element")[0].style.backgroundColor =
                b.config.bg_color_code;
            if (b.config.header_color_code)e.$("#simplereach-slide-title")[0].style.color = b.config.header_color_code;
            b.bindEvents()
        })
    }, createFrame: function (a) {
        var b = g.createElement("iframe"), c = g.createElement("div"), e = d.DOM.getsupportedprop(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"]);
        c.setAttribute("id", "simplereach-slide-element");
        c.style.position = "fixed";
        c.style.left = 0;
        c.style.right = 0;
        c.style.width = "100%";
        c.style.height = 0;
        c.style.zIndex = 8675309;
        c.style.overflow = "visible";
        c.style.bottom =
            0;
        b.scrolling = "no";
        b.frameBorder = "0";
        b.src = a;
        b.style.position = "absolute";
        b.style.display = "none";
        b.style.border = "none";
        b.style[e] = "0px 0px 10px #000";
        d.Slide.config.box_shadow_opacity && (b.style[e] = "0px 0px 10px rgba(0,0,0," + d.Slide.config.box_shadow_opacity + ")");
        b.allowtransparency = "true";
        c.appendChild(b);
        d.DOM.$("BODY")[0].appendChild(c);
        return b
    }, bindEvents: function () {
        var a = d.Slide, b = d.DOM;
        if (a.isHost) {
            b.on(h, "scroll", a.onScroll);
            if (d.Cookie.get(a.optOutCookie) === "true")a.optedOut = true
        } else {
            b.on(b.$("#simplereach-slide-close-button")[0],
                "click", function () {
                    a.close({detach: true})
                });
            b.on(b.$("#simplereach-slide-open-button")[0], "click", function () {
                a.open()
            });
            b.on(b.$("#simplereach-slide-help-button")[0], "click", function () {
                a.help()
            });
            b.on(b.$("#simplereach-slide-link")[0], "click", function () {
                var c = "?u=" + a.hl.eu + "&" + d.QS.encode(a.evtopts);
                b.$("#simplereach-slide-link")[0].href = g.location.protocol + "//" + a.api + "/p/c" + c
            });
            if (a.config.slide_logo !== false) {
                b.$("#logo-link")[0].href = "http://simplereach.com?ref=" + a.domain;
                b.$("#logo-link-f")[0].href =
                    "http://simplereach.com?ref=" + a.domain
            }
            b.on(b.$("#save")[0], "click", function () {
                var c = b.$("#opt-out-n")[0].checked;
                a.setOptOutCookie({tf: c});
                a.setOptOut();
                d.API.jsonp(a.api, c ? "/p/oo" : "/p/oi", a.evtopts)
            });
            a.setOptOut()
        }
    }, setOptOut: function (a) {
        var b = d.Slide, c = d.DOM;
        if (b.isHost) {
            a = d.Cookie.get(b.optOutCookie) === "true";
            b.xd("setOptOut", {oo: a})
        } else if (a) {
            b.optedOut = a.oo;
            c.$("#opt-out-y")[0].checked = !b.optedOut;
            c.$("#opt-out-n")[0].checked = b.optedOut;
            b.close({detach: true}, function () {
                b.optedOut || b.open()
            })
        } else b.xd("setOptOut",
            {})
    }, show_fb: function () {
        if (!(navigator.appVersion.indexOf("MSIE 7.") !== -1 || navigator.appVersion.indexOf("MSIE 8.") !== -1)) {
            var a = d.Slide;
            if (!a.isHost) {
                var b = d.DOM, c = b.$("#fb-root")[0];
                b.addScript(g.location.protocol + "//connect.facebook.net/en_US/all.js");
                c.style.display = "block";
                c.innerHTML = '<fb:like href="' + a.hl.u + '" layout="button_count" show-faces="false" action="like" colorscheme="light"></fb:like>';
                h.fbAsyncInit = function () {
                    h.FB.init({appId: "200433859985229", status: true, cookie: true, xfbml: true})
                }
            }
        }
    },
        show_tw: function () {
            var a = d.Slide;
            if (!a.isHost) {
                var b = d.DOM, c = b.$("#tw-root")[0], e = g.createElement("a");
                c.style.display = "block";
                b.addScript(g.location.protocol + "//platform.twitter.com/widgets.js", true);
                e.setAttribute("href", "http://twitter.com/share");
                e.setAttribute("class", "twitter-share-button");
                e.setAttribute("data-url", a.hl.su || a.hl.u);
                e.setAttribute("data-counturl", a.hl.u);
                e.setAttribute("data-text", a.hl.t);
                c.appendChild(e)
            }
        }, show_goog: function () {
            if (!d.Slide.isHost) {
                var a = d.DOM, b = a.$("#goog-root")[0];
                b.style.display = "block";
                b.innerHTML = '<g:plusone size="medium" href="' + d.Slide.hl.u + '"></g:plusone>';
                a.addScript(g.location.protocol + "//apis.google.com/js/plusone.js", true)
            }
        }, show_img: function () {
            var a = d.Slide;
            if (!a.isHost && a.hl.i) {
                var b = d.DOM, c = b.$("#icon-link")[0], e = b.$("#simplereach-slide-image")[0];
                c.style.display = "block";
                c.href = a.hl.u;
                c.alt = a.hl.t;
                e.src = g.location.protocol + "//" + d.Reach.cdn + a.hl.i;
                b.on(c, "click", function () {
                    var c = "?u=" + a.hl.eu + "&" + d.QS.encode(a.evtopts);
                    b.$("#simplereach-slide-link")[0].href =
                        g.location.protocol + "//" + a.api + "/p/c" + c
                })
            }
        }, help: function () {
            var a = d.Slide, b = d.DOM;
            if (a.isHost)a.close({detach: true}, function () {
                (new d.FX.Animation(a.frame, a.fx.slideHelp)).run();
                a.setState({state: "open", toggleHelp: {state: "visible"}})
            }); else {
                b.$("#simplereach-slide-help-header")[0].innerHTML = "OPTIONS FOR " + a.domain.toUpperCase();
                a.xd("help")
            }
        }, onScroll: function () {
            var a = d.Slide, b = d.DOM, c = b.height(a.content) + b.top(a.content);
            b.viewport().h * a.mult + b.scroll() > c * a.mult ? a.open() : a.close()
        }, showShares: function () {
            var a =
                d.Slide;
            if (a.isHost)a.xd("showShares"); else for (var b = 0; b < a.hl.st.length; b = b + 1)a["show_" + a.hl.st[b]]()
        }, slideIn: function () {
            var a = d.Slide;
            if (a.isHost) {
                if (!a.inMotion) {
                    var b, c = new d.FX.Animation(a.frame, a.fx.slideIn), e = "open";
                    if (a.optedOut) {
                        c.add(a.fx.slideClose);
                        e = "closed"
                    }
                    a.frame.style.display = "block";
                    for (b in a.fx.start)Object.prototype.hasOwnProperty.call(a.fx.start, b) && (a.frame.style[b] = a.fx.start[b]);
                    a.inMotion = true;
                    c.run(function () {
                        a.inMotion = false;
                        a.hasShown = true;
                        a.setState({state: e});
                        if (a.optedOut)d.DOM.off(h,
                            "scroll", a.onScroll); else {
                            d.API.jsonp(a.api, "/p/i", a.evtopts);
                            a.impression = true;
                            a.showShares()
                        }
                    })
                }
            } else a.xd("slideIn")
        }, open: function (a, b) {
            var c = d.Slide;
            if (c.isHost)if (c.hasShown) {
                if (!c.inMotion && c.isClosed && !c.isOpen) {
                    var e = new d.FX.Animation(c.frame, c.fx.slideOpen);
                    c.inMotion = true;
                    e.run(function () {
                        c.inMotion = false;
                        c.setState({state: "open"});
                        a && a.detach && d.DOM.off(h, "scroll", c.onScroll);
                        if (!c.impression) {
                            d.API.jsonp(c.api, "/p/i", c.evtopts);
                            c.impression = true
                        }
                        b && b()
                    })
                }
            } else c.slideIn(); else c.xd("open")
        },
        close: function (a, b) {
            var c = d.Slide;
            if (c.isHost)if (!c.inMotion && !c.isClosed && c.isOpen) {
                var e = new d.FX.Animation(c.frame, c.fx.slideClose);
                c.inMotion = true;
                e.run(function () {
                    c.inMotion = false;
                    c.setState({state: "closed"});
                    a && a.detach && d.DOM.off(h, "scroll", c.onScroll);
                    b && b()
                })
            } else c.inMotion || b && b(); else c.xd("close", a)
        }, toggleHelp: function (a) {
            var b = d.Slide, c = d.DOM;
            if (b.isHost && !a.noSend)b.xd("toggleHelp", a); else {
                var e = c.$("#simplereach-slide-content")[0].style, f = c.$("#simplereach-slide-help-button")[0].style,
                    g = c.$("#simplereach-slide-footer")[0].style, h = c.$("#simplereach-slide-help")[0].style, k = c.$("#simplereach-slide-help-header")[0].style, c = c.$("#simplereach-slide-title")[0].style;
                if (a.state === "hidden") {
                    e.display = "block";
                    if (!b.config.disallow_opt_out)f.display = "block";
                    h.display = "none";
                    g.display = "block";
                    k.display = "none";
                    c.display = "block"
                } else {
                    e.display = "none";
                    f.display = "none";
                    h.display = "block";
                    g.display = "none";
                    k.display = "block";
                    c.display = "none"
                }
            }
        }, setState: function (a) {
            var b = d.Slide, c = d.DOM.$, e = a.state;
            if (b.isHost) {
                c = {setState: {state: e}};
                if (e === "closed") {
                    b.isClosed = true;
                    b.isOpen = false;
                    c.toggleHelp = {state: "hidden"}
                } else if (e === "open") {
                    b.isClosed = false;
                    b.isOpen = true
                }
                if (a.toggleHelp)c.toggleHelp = a.toggleHelp;
                if (c.toggleHelp)c.toggleHelp.noSend = true;
                b.xd("run", c)
            } else {
                a = c("#simplereach-slide-close-button")[0];
                b = c("#simplereach-slide-open-button")[0];
                if (e === "closed") {
                    a.style.display = "none";
                    b.style.display = "block"
                } else if (e === "open") {
                    b.style.display = "none";
                    a.style.display = "block"
                }
            }
        }, run: function (a) {
            var b =
                d.Slide, c, e;
            for (e in a)if (d.Common.hasOwnProperty(a, e))(c = b[e]) && c(a[e])
        }, setCookie: function (a) {
            var b = d.Slide;
            d.Cookie.set(b.cookie, a.uid || a, new Date(2032, 5, 13));
            return!b.isHost
        }, setOptOutCookie: function (a) {
            var b = d.Slide, c = d.Cookie;
            b.isHost ? a.tf ? c.set(b.optOutCookie, "true") : c.del(b.optOutCookie) : b.xd("setOptOutCookie", a)
        }})
})(window, document, function () {
});
