if (!window.__DBW)var __DBW = function () {
    var h = {api: "http://widgets.digg.com/buttons/count?url=", analytics: "http://a.digg.com/", css: "http://widgets.digg.com/css/buttons3.css", popup: "http://digg.com/tools/diggthis/", submit: "http://digg.com/submit?"}, z = {impression: 5, click: 100}, s = {source: "source", submitted: "submitted", event: "event", diggs: "diggs", storyId: "storyId", buttons: "buttons"}, i, j, l = {}, A = function (a, b) {
            var c, d = parseInt(b.diggs), e = a.firstChild.firstChild.firstChild.firstChild;
            if (d > 9999)d = Math.floor(data.diggs /
                1E3) + "K"; else if (d > 999) {
                c = (d += "").charAt(0);
                d = d.replace(c, c + ",")
            }
            e.appendChild(document.createTextNode(d));
            e.nextSibling.appendChild(document.createTextNode(d == 1 ? "digg" : "diggs"));
            if (b.id)a.firstChild.firstChild.className = "db-container"
        }, v = function (a) {
            function b() {
                for (var f in e)return f
            }

            var c = i.cloneNode(true), d = B(a), e = {}, g, k;
            c.className += " db-" + d;
            c.getElementsByTagName("SPAN")[2].className += " db-" + d;
            g = C(a);
            if (g.style === false)c.className = "db-clean";
            c.firstChild.onclick = function () {
                var f = this.firstChild;
                f.className = "db-container db-dugg";
                if (!k) {
                    f = f.firstChild.firstChild;
                    j.ie ? t(f) : u(f, 0, function () {
                        t(f);
                        setTimeout(function () {
                            u(f, 100)
                        }, 175)
                    });
                    k = 1
                }
                b() ? n(e, "click") : setTimeout(function () {
                    n(e, "click")
                }, 1E3);
                D(g, e)
            };
            a.parentNode.replaceChild(c, a);
            l[g.url] = l[g.url] || [];
            l[g.url].push(function (f) {
                if (!b()) {
                    e = f;
                    n(f, "impression");
                    A(c, f)
                }
            });
            E(g.url)
        }, o = function () {
            var a = document.createElement("link"), b = document.getElementsByTagName("head")[0] || document.documentElement, c = b.firstChild;
            a.setAttribute("rel", "stylesheet");
            a.setAttribute("type", "text/css");
            a.setAttribute("href", h.css);
            c ? b.insertBefore(a, c) : b.appendChild(a);
            o = 0
        }, u = function (a, b, c) {
            var d, e, g = function (f) {
                e = f;
                a.style.opacity = f / 100;
                a.style.filter = "alpha(opacity=" + f + ")"
            }, k = function () {
                if (e == b)c && c(); else {
                    g(e + d);
                    setTimeout(k, 15)
                }
            };
            (function () {
                d = b ? 5 : -5;
                e = b ? 0 : 100;
                g(e);
                setTimeout(k, 15)
            })()
        }, F = function (a) {
            var b = document.createElement("script"), c = document.getElementsByTagName("head")[0] || document.documentElement, d = c.firstChild;
            b.setAttribute("type", "text/javascript");
            b.setAttribute("async", "true");
            b.setAttribute("src", a);
            d ? c.insertBefore(b, d) : c.appendChild(b)
        }, E = function (a) {
            F(h.api + a)
        }, B = function (a) {
            var b = "large", c = " " + a.className + " ", d = "";
            if (c.match(/( DiggThisButtonMedium | DiggMedium )/))b = "medium"; else if (c.match(/ DiggLarge /))b = "large"; else if (c.match(/ DiggCompact /))b = "compact"; else if (c.match(/ DiggIcon /))b = "digger"; else if (c.match(/ DiggWide /))b = "wide";
            a = a.getElementsByTagName("IMG");
            if (a[0])d = a[0].src; else return b;
            if (d.match(/diggThis\.(gif|png)/i))return"large";
            else if (d.match(/diggThisMedium\.(gif|png)/i))return"medium"; else if (d.match(/diggThisCompact\.(gif|png)/i))return"compact"; else if (d.match(/digg-guy-icon.(gif|png)/i))return"digger"; else if (d.match(/diggThisWide.(gif|png)/i))return"wide"; else if (d.match(/diggThisIcon.(gif|png)/i))return"digger";
            return b
        }, t = function (a) {
            var b = a.firstChild, c = b.nodeValue;
            if (c.indexOf(",") >= 0)b.nodeValue = +c.replace(/,/g, "") + 1; else if (!c.match(/k/i)) {
                c = +c + 1;
                b.nodeValue = c;
                a.nextSibling.firstChild.nodeValue = c == 1 ? "digg" :
                    "diggs"
            }
        }, D = function (a, b) {
            var c = 480;
            if (b.id)a.storyId = b.id;
            if (a.related === false)c = 335;
            a = h.popup + "confirm" + w(a);
            window.open(a, "diggAction", "status=0,toolbar=0,location=0,menubar=0,directories=0,resizable=0,scrollsbars=0,height=" + c + ",width=700")
        }, G = function (a) {
            var b, c, d, e = {};
            b = a.indexOf("?");
            if (b > -1) {
                a = a.substr(b + 1).replace(/\&amp;/g, "&").split("&");
                b = 0;
                for (c = a.length; b < c; b++) {
                    d = a[b].split("=");
                    e[d[0]] = d[1]
                }
            }
            return e
        }, C = function (a) {
            var b = {}, c;
            if (a.href)b = G(a.href);
            b.title = escape(unescape(b.url ? b.title ||
                "" : document.title));
            b.url = escape(unescape(b.url || location.href)).replace(/\+/g, "%2b");
            b.related = b.related || true;
            b.style = b.style != "no";
            if (a.rev) {
                c = a.rev.split(",");
                if (c.length > 1) {
                    b.rev = c[0].replace("(", "").replace(")", "").replace(/\'/g, "");
                    b.topic = H(c[1])
                }
            }
            b.bodytext = null;
            if (a = a.getElementsByTagName("span")[0])b.bodytext = a.innerHTML;
            return b
        }, I = function () {
            var a, b, c, d, e, g;
            j = j || {ie: !!document.all, ie6: typeof document.body.style.maxHeight === "undefined"};
            i = document.createElement("SPAN");
            i.className = "db-wrapper db-clear";
            a = document.createElement("SPAN");
            if (j.ie) {
                a.className = "db-ie";
                if (j.ie6)a.className = "db-ie db-ie6"
            }
            b = document.createElement("SPAN");
            b.className = "db-container db-submit";
            c = document.createElement("SPAN");
            c.className = "db-body";
            d = document.createElement("SPAN");
            d.className = "db-count";
            e = document.createElement("SPAN");
            e.className = "db-copy";
            g = document.createElement("A");
            g.className = "db-anchor";
            i.appendChild(a);
            a.appendChild(b);
            b.appendChild(c);
            c.appendChild(d);
            c.appendChild(e);
            c.appendChild(g);
            g.appendChild(document.createTextNode("digg"))
        },
        w = function (a) {
            var b = [];
            for (prop in a)a[prop] !== null && b.push(prop + "=" + a[prop]);
            return"?" + b.join("&")
        }, J = function (a) {
            var b;
            for (prop in a)if (s[prop]) {
                b = a[prop];
                delete a[prop];
                a[s[prop]] = b
            }
            return a
        }, n = function (a, b) {
            a = J({chan: "button-v4", submitted: !!a.id, event: b, diggs: a.diggs, storyId: a.id || 0, buttons: p});
            a = h.analytics + w(a);
            if (Math.floor(Math.random() * 100) + 1 <= z[b])(new Image).src = a
        }, H = function (a) {
            return a.replace(/^\s+|\s+$/g, "")
        }, q, x, p = 0, y, r = function () {
            o && o();
            i || I();
            y();
            x || setTimeout(r, 500)
        }, m = function () {
            x =
                1
        };
    y = function (a) {
        return a && (a += "").substr(a.indexOf("{")).replace(/\s/g, "") == "{[nativecode]}"
    }(document.getElementsByClassName) ? function () {
        for (var a = document.getElementsByClassName("DiggThisButton"); a.length;) {
            v(a[0]);
            p++
        }
    } : function () {
        for (var a = document.getElementsByTagName("A"), b = a.length, c = 0, d; c < b; c++) {
            d = " " + a[c].className + " ";
            if (d.indexOf(" DiggThisButton ") >= 0) {
                v(a[c]);
                p++
            }
        }
    };
    r();
    if (window.addEventListener)window.addEventListener("load", m, true); else if (window.attachEvent)window.attachEvent("onload",
        m); else {
        q = window.onload;
        window.onload = q ? function () {
            q();
            m()
        } : m
    }
    return{writeLink: function () {
        var a = ['<a class="DiggThisButton'];
        if (window.digg_skin == "compact")a.push(' DiggCompact"'); else window.digg_skin == "icon" ? a.push(' DiggIcon"') : a.push('"');
        if (window.digg_title)a.push(' href="', h.submit, "url=", escape(digg_url || DIGG_URL || location.href).replace(/\+/g, "%2b"), "&title=", escape(digg_title), '"'); else if (window.digg_url || window.DIGG_URL)a.push(' href="', h.submit, "url=", escape(digg_url || DIGG_URL).replace(/\+/g,
            "%2b"), '"');
        window.digg_media && window.digg_topic && a.push(' rev="', digg_media, ", ", digg_topic, '"');
        a.push(">");
        window.digg_bodytext && a.push("<span>", digg_bodytext, "</span>");
        a.push("</a>");
        document.write(a.join(""))
    }, addButtons: r, collectDiggs: function (a) {
        for (var b = l[escape(a.url).replace(/\+/g, "%2b")], c = b.length, d = 0; d < c; d++)b[d](a)
    }}
}();