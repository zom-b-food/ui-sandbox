var DISQUSWIDGETS, disqus_domain, disqus_shortname;
typeof DISQUSWIDGETS == "undefined" && (DISQUSWIDGETS = function () {
    var c = {}, m = document.getElementsByTagName("HEAD")[0] || document.body, n = 0, h = {}, k = {identifier: 1, url: 2, slug: 3};
    c.domain = "disqus.com";
    c.forum = "";
    c.getCount = function () {
        var a, b, l = [], e = 0, g = 10;
        b = document.getElementsByTagName("A");
        for (var f = 0; f < b.length; f++)if (b[f].href.indexOf("#disqus_thread") >= 0) {
            var d = b[f], i = void 0, j = void 0;
            (d.hasAttribute ? d.hasAttribute("data-disqus-identifier") : d.getAttribute("data-disqus-identifier") !== null) ? (i = k.identifier,
                j = d.getAttribute("data-disqus-identifier")) : (d.hasAttribute ? d.hasAttribute("data-disqus-slug") : d.getAttribute("data-disqus-slug") !== null) ? (i = k.slug, j = d.getAttribute("data-disqus-slug")) : (i = k.url, j = d.href.replace("#disqus_thread", ""));
            h[n++] = {element: d, type: i, value: j}
        }
        for (a in h)h.hasOwnProperty(a) && l.push(encodeURIComponent(a) + "=" + encodeURIComponent(h[a].type) + "," + encodeURIComponent(h[a].value));
        for (a = l.slice(e, g); a.length > 0;)b = document.createElement("script"), b.type = "text/javascript", b.async = !0,
            b.src = document.location.protocol + "//" + c.forum + "." + c.domain + "/count.js?q=1&" + a.join("&"), m.appendChild(b), e += 10, g += 10, a = l.slice(e, g)
    };
    c.displayCount = function (a) {
        for (var b, c, e, g, f = 0; f < a.counts.length; f++)if (b = a.counts[f], c = h[b.uid])e = b.comments === 0 ? a.text.comments.zero : b.comments == 1 ? a.text.comments.one : a.text.comments.multiple, g = e.replace("{num}", b.comments), a.showReactions && (e = b.reactions === 0 ? a.text.reactions.zero : b.reactions == 1 ? a.text.reactions.one : a.text.reactions.multiple, e !== "" && (g += " " + a.text.and +
            " " + e.replace("{num}", b.reactions))), c.element.innerHTML = g
    };
    return c
}());
(function () {
    if (typeof disqus_domain != "undefined")DISQUSWIDGETS.domain = disqus_domain;
    DISQUSWIDGETS.forum = disqus_shortname;
    DISQUSWIDGETS.getCount()
})();