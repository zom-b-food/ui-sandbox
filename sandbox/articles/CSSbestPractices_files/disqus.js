DISQUS.define("strings", function () {
    var b = {}, d = function () {
        this.value = (this.ie = DISQUS.isBrowser("ie")) ? [] : ""
    };
    d.prototype = {put: function (b) {
        this.ie ? this.value.push(b) : this.value += b
    }, esc: function (b) {
        return b
    }, compile: function () {
        if (this.ie)this.value = this.value.join("");
        return this.value
    }};
    return{translations: b, get: function (f) {
        return b[f] || f
    }, interpolate: function (b, a) {
        return b.replace(/%\(\w+\)s/g, function (b) {
            b = b.slice(2, -2);
            if (a[b] !== void 0)b = a[b].toString(); else throw"Key " + b + " not found in context";
            return b
        })
    }, pluralize: function (b, a, g) {
        return b != 1 ? g || "s" : a || ""
    }, trim: function (b) {
        for (var b = b.replace(/^\s\s*/, ""), a = /\s/, g = b.length; a.test(b.charAt(--g)););
        return b.slice(0, g + 1)
    }, capitalize: function (b) {
        return b.charAt(0).toUpperCase() + b.slice(1)
    }, isUTF8: function (b) {
        for (var a = 0, g = b.length; a < g; a++)if (b.charCodeAt(a) > 256)return !0;
        return !1
    }, Builder: d
    }
});
DISQUS.define("dtpl", function () {
    var b = function () {
    };
    b.prototype = {
        container: function () {
            return this._container
        }, textareaContainer: function () {
            return this._textareaContainer
        }, show: function () {
            var a = this - fluid();
            if (a)a.style.display = "block";
            this.rpc.show && this.rpc.show()
        }, hide: function () {
            var a = this - fluid();
            if (a)a.style.display = "none"
        }
    };
    var d = function (a, b) {
        var c = this;
        c.id = a;
        c.rpcReady = !1;
        c.focusCalled = !1;
        c._container = null;
        var e;
        e = a ? c.render(b) : DISQUS.jsonData.forum.template.api == "1.0" ? DISQUS.nodes.get("#dsq-textarea-wrapper") :
            DISQUS.nodes.get(".dsq-textarea-wrapper", DISQUS.nodes.get("#dsq-reply"))[0];
        c.rpc = DISQUS.comm.Reply.create(e, a, function () {
            DISQUS.dtpl.actions.fire("comments.reply.new.onLoadingEnd", a);
            c.rpcReady = !0;
            c.focusCalled && setTimeout(function () {
                c.focus()
            }, 0)
        });
        var f = DISQUS.nodes.get(".dsq-attach-media-container", c - fluid())[0];
        if (f && DISQUS.dtpl.actions.registered("comments.reply.media.upload.onSuccess") && DISQUS.jsonData.context.switches.upload_media)c.uploadrpc = DISQUS.comm.Upload.create(f, a);
        c._textareaContainer =
            e;
        DISQUS.dtpl.actions.fire("comments.reply.new.onLoadingStart", a)
    };
    d.instances = {};
    d.create = function (a, b) {
        var c = new d(a, b);
        return d.instances[a] = c
    };
    d.get = function (a) {
        return d.instances[a]
    };
    DISQUS.extend(d.prototype, b.prototype, {focus: function () {
        this.rpcReady ? this.rpc.focus() : this.focusCalled = !0
    }, render: function (a) {
        var b = this.id;
        if (typeof a === "string") {
            var c = document.createElement("div");
            c.innerHTML = a;
            a = c
        }
        c = DISQUS.nodes.get(DISQUS.dtpl.APPEND_REPLY_ID(this.id));
        this._container = a;
        DISQUS.jsonData.forum.template.api ==
            "1.0" ? (c.appendChild(a), a = DISQUS.nodes.get("#dsq-textarea-wrapper" + (b ? "-" + b : ""))) : (DISQUS.nodes.insertAfter(c, a), a = DISQUS.nodes.get(".dsq-textarea-wrapper", a)[0]);
        return a
    }});
    var f = function (a, b) {
        var c = this;
        if (typeof b === "string") {
            var e = document.createElement("div");
            e.innerHTML = b;
            b = e
        }
        if (DISQUS.jsonData.forum.template.api == "1.0")e = document.createElement("div"), e.appendChild(b), b = e, b.id = "dsq-edit-" + a, b.className = "dsq-edit dsq-textarea";
        e = DISQUS.nodes.get(DISQUS.dtpl.APPEND_EDIT_ID(a));
        DISQUS.jsonData.forum.template.api ==
            "1.0" ? (e.appendChild(b), e = DISQUS.nodes.get("#dsq-edit-iframe-" + a)) : (DISQUS.nodes.insertAfter(e, b), e = DISQUS.nodes.get(".dsq-textarea-wrapper", b)[0]);
        c.rpc = DISQUS.comm.Edit.create(e, a, function () {
            c.rpc.focus()
        });
        c._container = b;
        c._textareaContainer = e
    };
    f.instances = {};
    f.create = function (a, b) {
        var c = new f(a, b);
        return f.instances[a] = c
    };
    f.get = function (a) {
        return f.instances[a]
    };
    DISQUS.extend(f.prototype, d.prototype, {focus: function () {
    }});
    DISQUS.once("thread.onReady", function () {
        var a = DISQUS.jsonData, b = DISQUS.comm.Default.recover();
        DISQUS.dtpl.actions.fire("messagesx.render", a.messagesx);
        DISQUS.dtpl.actions.fire("messagesx.init", a.request);
        var c = a.context.switches.darkest_realtime ? 42 : a.thread.id, e = window.location ? window.location.protocol : "";
        a.context.switches.dark_realtime && e == "http:" && b.darkRealtimePoll(c);
        a.context.switches.embed_labs && DISQUS.requireSet(a.labs.files, !0, function () {
            DISQUS.trigger("labs.onReady")
        })
    });
    DISQUS.once("loader.onActionsReady", function () {
        DISQUS.dtpl.actions.fire("mentions.render", DISQUS.jsonData.posts);
        DISQUS.bind("loader.onDataReady", function () {
            DISQUS.dtpl.actions.fire("mentions.render", DISQUS.jsonData.posts)
        })
    });
    DISQUS.bind("data.onPostUpdate", function (a) {
        var b = {};
        typeof a.data.message === "string" && (b[a.id] = DISQUS.jsonData.posts[a.id], DISQUS.dtpl.actions.fire("mentions.render", b))
    });
    return{getAction: function (a, b) {
        function c() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(DISQUS.dtpl.actions.fire);
            return DISQUS.partial.apply({}, a)
        }

        function e(b) {
            return a.getAttribute("data-dsq-" + b)
        }

        var f =
            a.getAttribute("data-dsq-action"), d = DISQUS.jsonData.posts[a.getAttribute("data-dsq-comment")] || null, k = DISQUS.jsonData.request;
        if (b.type != "click") {
            if (b.type == "change" && f == "thread:sort")return c("thread.sort", a.value)
        } else switch (f) {
            case "media:expand":
                return c("thread.expandMediaEmbed", e("media"));
            case "reactions:showRetweets":
                return c("reactions.showRetweets", e("reaction"));
            case "reactions:hide":
                return c("reactions.hide", e("reaction"));
            case "reactions:more":
                return c("reactions.loadMore");
            case "thread:subscribe":
                return c("thread.subscribe");
            case "thread:unsubscribe":
                return c("thread.unsubscribe");
            case "thread:paginate":
                return c("thread.paginate", e("page"));
            case "session:login":
                return c("auth.login");
            case "session:help":
                return c("help.login");
            case "user:showProfile":
                return c("profile.show", d && d.id, e("username"));
            case "comments:edit":
                return c("comments.edit", d.id);
            case "comments:edit:send":
                return c("comments.edit.send", d.id);
            case "comments:edit:cancel":
                return c("comments.edit.cancel", d.id);
            case "comments:reply":
                return c("comments.reply",
                    d.id);
            case "comments:reply:send":
                if (k.is_authenticated)return c("comments.send", d && d.id, a);
                return c("comments.validate", d && d.id, a);
            case "comments:reply:toggleSharing":
                return f = a.getAttribute("type"), c("share.toggle", a, f, d && d.id);
            case "comments:text:collapse":
                return c("comments.text.collapse", d.id);
            case "comments:text:expand":
                return c("comments.text.expand", d.id);
            case "comments:like":
                return c("comments.like", a, d.id);
            case "comments:showParent":
                return c("comments.showParent", d.parent_post_id);
            case "comments:showLikes":
                return c("comments.showUserVotes",
                    d.id);
            case "comments:permalink":
                return c("comments.permalink", d.id);
            case "comments:moderate":
                return c("comments.moderate.options", d.id);
            case "comments:report":
                return c("comments.report", d.id);
            case "comments:collapse":
                return c("comments.collapse", d.id);
            case "comments:expand":
                return c("comments.expand", d.id)
        }
    }, append: function (a, b) {
        a.innerHTML = b
    }, replaceHtml: function (a, b) {
        a.innerHTML = b
    }, getGuestFields: function (a) {
        function b(c) {
            return DISQUS.nodes.get("#" + c + (a ? "-" + a : ""))
        }

        return{name: b("dsq-field-name"),
            email: b("dsq-field-email"), website: b("dsq-field-website"), username: b("dsq-field-username"), password: b("dsq-field-password"), subscribe: b("dsq-subscribe-on-post")}
    }, ReplyBox: d, EditBox: f}
});
DISQUS.define("dtpl.actions", function () {
    function b(a, b, c) {
        var e;
        typeof b === "string" ? (e = b, b = c) : e = ">= " + s[0];
        o[a] || (o[a] = {});
        o[a][e] = b
    }

    function d(a, b, c) {
        if (DISQUS.settings.get("disqus.debug"))return a.apply({}, b);
        try {
            return a.apply({}, b)
        } catch (e) {
            return window.console && window.console.log && (c && window.console.log("Exception in " + c), window.console.log(e), typeof printStackTrace !== "undefined" && window.console.log(printStackTrace({e: e}).join("\n"))), !1
        }
    }

    function f(a, b) {
        if (j[a])if (typeof b === "undefined")return delete j[a],
            !0; else DISQUS.lang.forEach(j[a], function (c, e) {
            if (b.guid && b.guid == c.guid)return delete j[a][e], !0
        });
        return!1
    }

    function a(a, b) {
        b = b || u;
        if (!o[a])return!1;
        var c = null;
        DISQUS.each(o[a], function (a, q) {
            var e = q.match(/(=|>=)\s*([0-9\.]+)/), f = e[1], e = e[2];
            f == "=" && b == e ? c = a : f == ">=" && b >= e && (c = a)
        });
        return c
    }

    function g(q, b) {
        return!!a(q, b)
    }

    function c(a, b, c) {
        return!!j[a] || (b ? !1 : g(a, c))
    }

    function e() {
        var q = arguments[0], b = [], e = !0, f;
        if (DISQUS.jsonData != null)if (DISQUS.status == "ready" && DISQUS.jsonData.ready !== !1)f = DISQUS.jsonData.forum.template.api;
        else return;
        typeof q === "object" && (f = q[1], q = q[0]);
        if (!c(q, !1, f))throw"Action " + q + " not found";
        for (var h = 1; h < arguments.length; h++)b.push(arguments[h]);
        j[q] && DISQUS.lang.forEach(j[q], function (a) {
            e = e && !!d(a, b, q)
        });
        g(q, f) && e && d(a(q, f), b, q);
        return!1
    }

    function i(a) {
        var b = function (b) {
            return"#" + a + (b ? "-" + b : "")
        };
        b.toString = function () {
            return b()
        };
        return b
    }

    function m(a) {
        var a = DISQUS.nodes.get("li", a), b;
        for (b = 0; b < a.length; ++b)if (DISQUS.nodes.hasClass(a[b], "dsq-mentions-highlighted"))return a[b];
        return null
    }

    function k(a, b) {
        if (!a)return!1;
        if (a.hasAttribute)return a.hasAttribute(b); else if (a.attributes)return!!a.attributes[b];
        return!1
    }

    function l(a, b, c) {
        if (b = b ? c == "up" ? b.previousSibling : b.nextSibling : a.firstChild) {
            do if (k(b, "data-dsq-username"))return b; while (b = c == "up" ? b.previousSibling : b.nextSibling)
        }
    }

    var o = {}, j = {}, h = null, p = 0, s = ["1.0", "1.1"], u = s[s.length - 1];
    b("__.comments.reply.media.upload", function (a) {
        e("comments.reply.media.upload.onLoadingStart", a)
    });
    b("__.comments.reply.media.upload.onResponse", function (a, b) {
        if (a &&
            a.constructor === Array)for (var c = a.length - 1; c >= 0; --c)e("comments.reply.media.upload.onLoadingEnd", b), e("comments.reply.media.upload.onSuccess", a[c], b); else a && a.success && a.media ? (b = b || "", c = DISQUS.comm.Upload.recover(b), a.forum_id = DISQUS.jsonData.forum.id, a.thread_id = DISQUS.jsonData.thread.id, a.id = b, c.media("set", a), e("comments.reply.media.upload.onLoadingEnd", b), e("comments.reply.media.upload.onSuccess", a.media, b)) : a.silence || (a.message && e("message.error", a.message, a.title || "Error"), e("comments.reply.media.upload.onLoadingEnd",
            b))
    });
    b("comments.reply.media.remove", function (a, b) {
        var c = {id: b, media: DISQUS.json.stringify(a.media)};
        DISQUS.request.get(DISQUS.jsonData.urls.upload_remove + "?ts=" + +new Date, c)
    });
    b("__.comments.reply.media.remove.onResponse", function (a) {
        delete a.success;
        a.id = a.id || "";
        a.forum_id = DISQUS.jsonData.forum.id;
        a.thread_id = DISQUS.jsonData.thread.id;
        DISQUS.comm.Upload.recover(a.id).media("remove", a, a.id);
        e("comments.reply.media.remove.onSuccess", a)
    });
    b("__.comments.reply.media.upload.clear", function (a) {
        var b =
            DISQUS.comm.Upload.recover(a);
        b && (b.media("clear", {forum_id: DISQUS.jsonData.forum.id, thread_id: DISQUS.jsonData.thread.id, id: a || ""}), e("comments.reply.media.upload.clear", a))
    });
    b("message.error", function (a, b) {
        DISQUS.popup.popModal(a, b || DISQUS.strings.get("Error"))
    });
    b("message.error.onField", function (a, b) {
        if (DISQUS.jsonData.forum.revert_new_login_flow)e("message.error", DISQUS.strings.get(a), DISQUS.strings.get("Oops...")); else if (b) {
            var c = DISQUS.nodes.get("#" + b + "-label");
            if (c)DISQUS.nodes.addClass(c,
                "dsq-error"), c.innerHTML = DISQUS.strings.get(a)
        } else alert(DISQUS.strings.get(a))
    });
    b("comments.reply.onCookieFailure", "= 1.0", function (a) {
        var b = document.createElement("div");
        b.innerHTML = DISQUS.renderBlock("cookieFailure");
        DISQUS.nodes.insertBefore(DISQUS.nodes.get("#dsq-form-area" + (a ? "-" + a : "")), b)
    });
    b("comments.reply.onCookieFailure", ">= 1.1", function () {
    });
    b("message.unapprovedComment", function (a, b) {
        DISQUS.popup.popModal(DISQUS.renderBlock("unapprovedCommentMessage", {mustVerify: a}), DISQUS.strings.get("Comment awaiting approval"),
            b, !0, "dsq-popup-unapproved")
    });
    b("share.toggle", function (a, b, c) {
        DISQUS.nodes.hasClass(a, "dsq-share-toggled") ? DISQUS.nodes.removeClass(a, "dsq-share-toggled") : DISQUS.nodes.addClass(a, "dsq-share-toggled");
        c = c || null;
        DISQUS.cache.postSharing[c] = DISQUS.cache.postSharing[c] || {twitter: null, facebook: null};
        a = DISQUS.cache.postSharing[c];
        a[b] = !a[b]
    });
    b("private.setLoadingButton", function (a, b) {
        var c = b ? "-" + b : "", e;
        if (a) {
            e = document.createElement("button");
            e.id = a.id + "-loading";
            e.className = a.className + " dsq-post-loading";
            e.innerHTML = DISQUS.strings.get("Just a moment...");
            a.style.display = "none";
            a.parentNode.appendChild(e);
            if (c = DISQUS.nodes.get("#dsq-cancel-button" + c))c.style.display = "none";
            DISQUS.cache.buttonsToRestore.push(a)
        } else DISQUS.lang.forEach(DISQUS.cache.buttonsToRestore, function (a) {
            a.style.display = "inline";
            DISQUS.nodes.remove(DISQUS.nodes.get("#" + a.id + "-loading"))
        })
    });
    b("comments.validate", function (a) {
        DISQUS.comm.Reply.recover(a).validate(function (b) {
            b ? DISQUS.comm.ensureLoggedIn(function () {
                e("comments.send",
                    a)
            }, "postas", {onGuest: function () {
                e("comments.send", a, null, {fields: DISQUS.dtpl.getGuestFields(null)})
            }}) : (e("message.error", DISQUS.strings.get("Please enter a comment to post.")), e("private.setLoadingButton"))
        })
    });
    b("auth.login", function () {
        DISQUS.comm.ensureLoggedIn(function () {
            DISQUS.redraw()
        })
    });
    b("auth.disqus", function () {
        DISQUS.comm.ensureLoggedIn(function () {
            DISQUS.redraw()
        }, "disqus")
    });
    b("auth.twitter", function () {
        DISQUS.comm.ensureLoggedIn(function () {
            DISQUS.redraw()
        }, "twitter")
    });
    b("auth.yahoo",
        function () {
            DISQUS.comm.ensureLoggedIn(function () {
                DISQUS.redraw()
            }, "yahoo")
        });
    b("auth.openid", function () {
        DISQUS.comm.ensureLoggedIn(function () {
            DISQUS.redraw()
        }, "openid")
    });
    b("auth.google", function () {
        DISQUS.comm.ensureLoggedIn(function () {
            DISQUS.redraw()
        }, "google")
    });
    b("auth.facebook", function () {
        DISQUS.comm.ensureLoggedIn(function () {
            DISQUS.redraw()
        }, "facebook")
    });
    b("auth.sso", function () {
        var a = window.open(DISQUS.config.sso.url, "ssoWindow", "location=0,status=0,width=" + (DISQUS.config.sso.width || 800) + ",height=" +
            (DISQUS.config.sso.height || 400)), b = setInterval(function () {
            DISQUS.window.isClosed(a) && (clearInterval(b), window.location.reload())
        }, 500)
    });
    b("comments.text.expand", function (a) {
        var b = DISQUS.nodes.get("#dsq-comment-message-" + a), c = DISQUS.nodes.get("#dsq-comment-text-" + a), e = DISQUS.nodes.get(".dsq-comment-truncate-expand", b)[0], b = DISQUS.nodes.get(".dsq-comment-truncate-collapse", b)[0];
        e.style.display = "none";
        b.style.display = "inline";
        c.innerHTML = DISQUS.jsonData.posts[a].message;
        return!1
    });
    b("comments.text.collapse",
        function (a) {
            var b = DISQUS.nodes.get("#dsq-comment-message-" + a), a = DISQUS.nodes.get("#dsq-comment-text-" + a), c = DISQUS.nodes.get(".dsq-comment-truncate-expand", b)[0], b = DISQUS.nodes.get(".dsq-comment-truncate-collapse", b)[0], e = DISQUS.jsonData.forum.comment_max_words;
            if (!a || e === 0)return!1;
            if (DISQUS.nodes.truncateComment(a, e, "...") && c && b)c.style.display = "inline", b.style.display = "none";
            return!1
        });
    b("comments.insert", function (a, b, c) {
        var f = {};
        DISQUS.redraw();
        var d = DISQUS.nodes.get("#dsq-comments"), g = document.createElement("div");
        f.comment = DISQUS.jsonData.posts[b];
        f.comment.id = b;
        f.comment.author = DISQUS.jsonData.users[f.comment.user_key];
        if (c && c.length)f.comment.media = c, DISQUS.jsonData.mediaembed = DISQUS.jsonData.mediaembed.concat(c);
        if (f.comment.parent_post_id) {
            f.comment.parent = DISQUS.jsonData.posts[f.comment.parent_post_id];
            f.comment.parent.author = DISQUS.jsonData.users[f.comment.parent.user_key];
            c = DISQUS.nodes.get("#dsq-comment-" + f.comment.parent_post_id);
            DISQUS.nodes.addClass(c, "dsq-comment-is-parent");
            c = f.comment.parent;
            do c.num_replies += 1, c = DISQUS.jsonData.posts[c.parent_post_id]; while (c !== void 0)
        }
        f.comment.stripped = function (a) {
            var b = f.comment.message.replace(/<.*?>/g, "");
            if (b.length > a)return b.substring(0, a);
            return null
        };
        DISQUS.dtpl.replaceHtml(g, DISQUS.renderBlock("comment", f));
        a === -1 ? d.appendChild(g) : a ? DISQUS.nodes.get("dsq-comment-" + a) && (d = DISQUS.nodes.get(DISQUS.dtpl.APPEND_COMMENT_ID(a)), DISQUS.nodes.insertAfter(d, g)) : d.insertBefore(g, d.firstChild);
        d = DISQUS.nodes.get("#dsq-avatar-" + b);
        d = DISQUS.nodes.get("img.dsq-deferred-avatar",
            d);
        DISQUS.lang.forEach(d, function (a) {
            a.setAttribute("src", a.getAttribute("data-src"));
            DISQUS.nodes.removeClass(a, "dsq-deferred-avatar")
        });
        e("comments.text.collapse", b);
        DISQUS.ui.applyTooltips(g);
        DISQUS.dtpl.actions.fire("__.comments.insert.onSuccess", a, b)
    });
    b("comments.insert.onSuccess", function () {
    });
    b("__.comments.insert.onSuccess", function (a, b) {
        DISQUS.dtpl.actions.fire("comments.insert.onSuccess", a, b)
    });
    b("comments.insert.onSuccess", function () {
    });
    b("comments.blacklist", function (a, b) {
        var c = {forum: DISQUS.jsonData.forum.url},
            e = {"dsq-blacklist-username": "user", "dsq-blacklist-email": "email", "dsq-blacklist-ip": "ip", "dsq-blacklist-retroactive": "retroactive"}, f = 0;
        if (b)if (DISQUS.lang.forEach(e, function (a, b) {
            var q = DISQUS.nodes.get("#" + b);
            if (q && q.checked)c[a] = q.value, f++
        }), f < 1)alert(DISQUS.strings.get("Please select something to add to the blacklist.")); else {
            if (c.user)c.user = "username:" + c.user;
            DISQUS.api("blacklists/add", {data: c, type: "POST", success: function () {
                DISQUS.popup.close(null, !0)
            }, failure: function () {
                DISQUS.popup.close(null,
                    !0)
            }})
        } else e = DISQUS.jsonData.posts[a], DISQUS.popup.close(null, !0), DISQUS.popup.popModal(DISQUS.renderBlock("blacklistPopup", {comment: e, user: DISQUS.jsonData.users[e.user_key]}), DISQUS.strings.get("Add to Blacklist"))
    });
    b("comments.outline", function (a) {
        var b = DISQUS.nodes.get("#dsq-comment-" + a);
        b && (DISQUS.nodes.addClass(b, "dsq-comment-outline"), setTimeout(function () {
            DISQUS.nodes.removeClass(b, "dsq-comment-outline")
        }, 3E3))
    });
    b("comments.permalink", function (a) {
        DISQUS.popup.popModal(DISQUS.renderBlock("permalinkPopup",
            {postId: a}), DISQUS.strings.get("Link to this comment"), a)
    });
    b("comments.send", function (a, b, c) {
        if (!DISQUS.cache.postboxBusy[a || null]) {
            DISQUS.cache.postboxBusy[a || null] = !0;
            var f = DISQUS.comm.Reply.recover(a), c = c || {}, d = function (b) {
                try {
                    return+(DISQUS.cache.postSharing[a || null][b] || 0)
                } catch (c) {
                    return 0
                }
            }, g = {tw: d("twitter"), fb: d("facebook"), tr: d("tumblr"), wp: d("wordpress"), mt: d("movabletype"), tp: d("typepad"), yh: d("yahoo")};
            DISQUS.trigger("comments.share", g);
            var d = function (b) {
                DISQUS.dtpl.actions.fire("comments.send.onSuccess",
                    b, a)
            }, h = function (e) {
                e = e.data;
                e.sendArguments = {postId: a, element: b, options: c};
                DISQUS.dtpl.actions.fire("comments.send.onFailure", e)
            };
            b && e("private.setLoadingButton", b, a);
            DISQUS.jsonData.request.is_authenticated ? f.post(g, c.captcha || null, d, h) : (g = c.fields || DISQUS.dtpl.getGuestFields(a), DISQUS.dtpl.validators.guestFields(g) && (DISQUS.trigger("comments.onGuestPost"), f.postAsGuest(g.name.value, g.email.value, g.website ? g.website.value : "", g.subscribe && g.subscribe.checked, c.captcha || null, d, h)));
            c.force && DISQUS.cookies.create("skipped_auth",
                !0)
        }
    });
    b("comments.send.onSuccess", function (a, b) {
        var c = DISQUS.jsonData.users, f = a.message.post_meta.user_key;
        DISQUS.cache.postboxBusy[b || null] = !1;
        a.succeeded && e("__.comments.reply.media.upload.clear", a.message.post_meta.parent_post_id);
        DISQUS.updatePost(a.message.id, a.message.post_meta);
        if (!c[f])c[f] = a.message.user_meta;
        c = typeof disqus_insert_wrt_sort == "undefined" ? DISQUS.jsonData.forum.reply_position ? -1 : null : DISQUS.jsonData.request.sort == "newest" ? null : -1;
        a.message.post_meta.approved && e("comments.insert",
            a.message.post_meta.parent_post_id || c, a.message.id, a.message.media_embed);
        b && e("comments.reply.cancel", b);
        DISQUS.popup.close(null, !0);
        a.message.post_meta.approved ? (e("thread.incrementCommentsCount"), e("comments.outline", a.message.id)) : (e("message.unapprovedComment", DISQUS.jsonData.request.missing_perm == "verify", a.message.id), DISQUS.redraw());
        a.message.fb_callback && a.message.fb_callback[0] && DISQUS.FB.init(function () {
            DISQUS.FB.streamPublish("", a.message.fb_callback[1])
        });
        e("private.setLoadingButton");
        DISQUS.trigger("comment.onCreate", {id: a.message.id, text: a.message.post_meta.message})
    });
    b("comments.showUserVotes", function (a) {
        DISQUS.request.get(DISQUS.jsonData.urls.show_user_votes, {post_id: a}, !0)
    });
    b("comments.highlight", function (a) {
        DISQUS.api("posts/highlight", {data: {post: a}, type: "POST", success: function (a) {
            DISQUS.dtpl.actions.fire("comments.highlight.onSuccess", a[0])
        }})
    });
    b("comments.highlight.onSuccess", function () {
    });
    b("comments.unhighlight", function (a) {
        DISQUS.api("posts/unhighlight", {data: {post: a},
            type: "POST", success: function (a) {
                DISQUS.dtpl.actions.fire("comments.unhighlight.onSuccess", a[0])
            }})
    });
    b("comments.unhighlight.onSuccess", function () {
    });
    b("comments.showParent", function (a) {
        var b = DISQUS.jsonData.posts[a], c = DISQUS.renderBlock("commentMessage", {comment: b, cls: ""});
        c += '<br/><br/><a href="#comment-' + a + '">' + DISQUS.strings.get("Jump to comment") + "</a>";
        DISQUS.popup.popModal(c, b.author.display_name + " " + DISQUS.strings.get("said") + "&hellip;", a)
    });
    b("captcha.init", function (a) {
        window.Recaptcha ||
        DISQUS.require("http://www.google.com/recaptcha/api/js/recaptcha_ajax.js");
        DISQUS.addJob(function () {
            return!!window.Recaptcha
        }, a)
    });
    b("captcha.open", function (a) {
        function b() {
            var c = DISQUS.lang.partial(DISQUS.dtpl.actions.fire, "captcha.submit", a), e = DISQUS.nodes.get("button", DISQUS.nodes.get("#dsq-captcha"))[0];
            DISQUS.events.add(e, "click", c);
            e = DISQUS.nodes.get("#recaptcha_response_field");
            DISQUS.events.add(e, "keypress", function (a) {
                (a.keyCode || a.which) == 13 && c()
            });
            DISQUS.nodes.get("#dsq-captcha-loading").style.display =
                "none";
            DISQUS.nodes.get("#dsq-captcha-container").style.display = "block";
            Recaptcha.focus_response_field()
        }

        DISQUS.popup.popModal(DISQUS.renderBlock("recaptcha"), DISQUS.strings.get("One More Step ..."), null, null, null, {onReady: function () {
            Recaptcha.create(DISQUS.jsonData.settings.recaptcha_public_key, "dsq-captcha-form", {theme: "clean", callback: b})
        }, onClose: function () {
            Recaptcha.destroy();
            e("private.setLoadingButton")
        }})
    });
    b("captcha.submit", function (a) {
        var b = a.options, c = DISQUS.nodes.get;
        b.captcha = {recaptcha_challenge_field: c("#recaptcha_challenge_field").value,
            recaptcha_response_field: c("#recaptcha_response_field").value};
        e("comments.send", a.postId, a.element, b);
        DISQUS.popup.close(null, !0)
    });
    b("comments.send.onFailure", function (a) {
        a.sendArguments && (DISQUS.cache.postboxBusy[a.sendArguments.postId || null] = !1);
        a.code == "captcha-required" ? DISQUS.dtpl.actions.fire("captcha.init", DISQUS.lang.partial(DISQUS.dtpl.actions.fire, "captcha.open", a.sendArguments)) : (e("message.error", a.message), e("private.setLoadingButton"))
    });
    b("comments.edit", function (a) {
        DISQUS.states.edit[a] ?
            e("comments.edit.cancel", a) : e("comments.edit.new", a);
        DISQUS.states.edit[a] = !DISQUS.states.edit[a]
    });
    b("comments.edit.new", function (a) {
        DISQUS.comm.Edit.recover(a) || e("comments.edit.render", a);
        e(["comments.edit.show", "1.1"], a)
    });
    b("comments.edit.render", function (a) {
        var b = DISQUS.renderBlock("editArea", {comment: DISQUS.jsonData.posts[a]});
        DISQUS.dtpl.EditBox.create(a, b)
    });
    b("comments.edit.show", ">= 1.1", function (a) {
        DISQUS.popup.close(null, !0);
        DISQUS.nodes.get("#dsq-comment-message-" + a).style.display = "none";
        var b = DISQUS.nodes.get("#dsq-media-embed-" + a);
        if (b)b.style.display = "none";
        b = DISQUS.nodes.get("#dsq-comment-" + a);
        b = DISQUS.nodes.get(".dsq-editedtxt", b);
        b.length && DISQUS.nodes.remove(b[0]);
        DISQUS.dtpl.EditBox.get(a).show()
    });
    b("comments.edit.show", "= 1.0", function (a) {
        return e("comments.edit", a)
    });
    b("comments.edit.cancel", function (a) {
        var b = DISQUS.nodes.get("#dsq-comment-message-" + a), c = DISQUS.nodes.get("#dsq-media-embed-" + a);
        b.style.display = "block";
        if (c)c.style.display = "block";
        DISQUS.dtpl.EditBox.get(a).hide()
    });
    b("comments.edit.send", function (a) {
        DISQUS.comm.Edit.recover(a).save(function (b) {
            DISQUS.updatePost(a, b.message);
            e("comments.edit.onSuccess", b, a)
        }, function (b) {
            e("comments.edit.onFailure", b, a)
        })
    });
    b("comments.edit.onSuccess", function (a, b) {
        var c = DISQUS.nodes.get("#dsq-comment-message-" + b);
        DISQUS.dtpl.replaceHtml(c, DISQUS.renderBlock("commentMessage", {comment: DISQUS.jsonData.posts[b], cls: "dsq-comment-message"}));
        for (var f = c.childNodes, d = f.length - 1; d >= 0; --d)if (RegExp("^dsq-comment-message-" + b).test(f[d].id)) {
            c.innerHTML =
                f[d].innerHTML;
            break
        }
        e("comments.edit.cancel", b);
        a.message.approved || e("message.error", DISQUS.renderBlock("unapprovedEditedComment"), DISQUS.strings.get("Comment awaiting approval"), b)
    });
    b("comments.edit.onFailure", function (a, b) {
        var c = DISQUS.strings.get("Can't post this comment.");
        a.message && a.message == "empty" ? e("message.error", DISQUS.strings.get("Comment can't be empty."), c, b) : e("message.error", DISQUS.strings.get("Something went wrong, try again later."), c, b)
    });
    b("comments.spam", function (a) {
        DISQUS.popup.close(null,
            !0);
        DISQUS.api("posts/spam", {data: {post: a}, type: "POST", success: function (a) {
            DISQUS.dtpl.actions.fire("comments.spam.onSuccess", a[0].id)
        }})
    });
    b("comments.spam.onSuccess", "= 1.0", function (a) {
        DISQUS.nodes.get("#comment-" + a).innerHTML = DISQUS.strings.get("Comment marked as spam.");
        DISQUS.nodes.get("#comment-" + a).className = "dsq-remove-message";
        DISQUS.nodes.get("#dsq-comment-" + a).style.display = "none"
    });
    b("comments.spam.onSuccess", ">= 1.1", function () {
    });
    b("comments.reply.onResize", function () {
    });
    b("comments.dislike",
        function (a) {
            var b = DISQUS.jsonData, c = b.posts[a].down_voted ? 0 : -1;
            b.request.is_authenticated || b.forum.allow_anon_votes ? (e("comments.dislike.onLoadingStart", a), DISQUS.request.get(b.urls.embed_vote, {post_id: a, vote: c}, !0)) : e("auth.disqus", DISQUS.strings.get("To vote please login"))
        });
    b("comments.dislike.onLoadingStart", function () {
    });
    b("comments.dislike.onLoadingEnd", function () {
    });
    b("comments.dislike.onSuccess", function () {
    });
    b("__.comments.dislike.onSuccess", function (a, b, c) {
        var f = DISQUS.jsonData.posts[a].dislikes,
            d = c == -1;
        DISQUS.updatePost(a, {user_voted: c !== 0, down_voted: d, dislikes: d ? f + 1 : f - 1, points: b});
        e("comments.dislike.onLoadingEnd", a);
        e("comments.dislike.onSuccess", a, b)
    });
    b("comments.like.loading", "= 1.0", function (a) {
        a = DISQUS.nodes.get("#dsq-like-" + a);
        DISQUS.nodes.get("button", a)[0].style.display = "none";
        var b = document.createElement("img");
        b.src = DISQUS.jsonData.settings.media_url + "/images/loading-small.gif";
        a.appendChild(b)
    });
    b("comments.like.onLoadingStart", "= 1.0", function (a) {
        e("comments.like.loading",
            a)
    });
    b("comments.like.onLoadingStart", ">= 1.1", function () {
    });
    b("comments.like.onLoadingEnd", function () {
    });
    b("comments.like", function (a, b) {
        var c = +!DISQUS.jsonData.posts[b].up_voted, e = DISQUS.jsonData, f = DISQUS.dtpl.actions.fire;
        e.request.is_authenticated || e.forum.allow_anon_votes ? (f("comments.like.onLoadingStart", b), DISQUS.api("posts/vote", {data: {post: b, vote: c}, type: "POST", success: function (a) {
            a = a.post;
            f("__.comments.like.onSuccess", a.id, a.points, c);
            f("comments.like.updateCache", a.id, a.points, c)
        }})) :
            f("auth.disqus", DISQUS.strings.get("To like please login"))
    });
    b("comments.like.updateCache", function (a, b, c) {
        DISQUS.updatePost(a, {up_voted: !!c})
    });
    b("comments.like.onSuccess", ">= 1.1", function () {
    });
    b("comments.like.onSuccess", "= 1.0", function (a, b) {
        var c = DISQUS.nodes.get("#dsq-like-pts-" + a), e;
        e = DISQUS.jsonData.posts[a].user_voted ? " and " + (b - 1 || 1) + " more" : b + DISQUS.strings.pluralize(b, " person", " people");
        if (c)c.innerHTML = e;
        DISQUS.nodes.get("#dsq-like-" + a).innerHTML = DISQUS.strings.get("You liked this.") +
            "&nbsp;&nbsp;"
    });
    b("__.comments.like.onSuccess", function (a, b, c) {
        e("comments.like.onLoadingEnd", a);
        e("comments.like.onSuccess", a, b, c)
    });
    b("comments.report", function (a, b) {
        function c() {
            DISQUS.popup.popModal(DISQUS.strings.get("Thank you. This comment has been flagged for moderator attention."), DISQUS.strings.get("Successfully flagged"));
            DISQUS.nodes.remove(DISQUS.nodes.get("#dsq-post-report-" + a))
        }

        b ? DISQUS.api("posts/report", {data: {post: a}, type: "POST", success: c}) : DISQUS.popup.popModal(DISQUS.renderBlock("reportConfirmation",
            {id: a}), DISQUS.strings.get("Report this comment to a moderator?"), a)
    });
    b("comments.reply", function (a, b) {
        DISQUS.cache.toggledReplies[a] ? (DISQUS.dtpl.actions.fire("comments.reply.cancel", a, b), DISQUS.cache.toggledReplies[a] = !1) : (DISQUS.dtpl.actions.fire("comments.reply.new", a, b), DISQUS.cache.toggledReplies[a] = !0)
    });
    b("comments.reply.new", function (a) {
        DISQUS.comm.Reply.recover(a) || e("comments.reply.render", a);
        e("comments.reply.show", a)
    });
    b("comments.reply.new.onLoadingStart", function () {
    });
    b("comments.reply.new.onLoadingEnd",
        function () {
        });
    b("comments.reply.render", function (a) {
        var b = DISQUS.renderBlock("postbox", {comment: DISQUS.jsonData.posts[a]});
        DISQUS.dtpl.ReplyBox.create(a, b)
    });
    b("comments.reply.show", function (a) {
        var b = DISQUS.dtpl.ReplyBox.get(a);
        b.show();
        var c = b - fluid();
        DISQUS.nodes.addClass(c, "dsq-append-post");
        (a = DISQUS.nodes.get("#dsq-comment-footer-reply-" + a)) && DISQUS.nodes.addClass(a, "dsq-comment-footer-reply-active");
        b.focus()
    });
    b("comments.reply.cancel", function (a) {
        var b = DISQUS.dtpl.ReplyBox.get(a);
        b.hide();
        b = b - fluid();
        DISQUS.nodes.removeClass(b, "dsq-append-post");
        (a = DISQUS.nodes.get("#dsq-comment-footer-reply-" + a)) && DISQUS.nodes.removeClass(a, "dsq-comment-footer-reply-active")
    });
    b("comments.moderate.options", function (a) {
        var b = DISQUS.jsonData.posts[a];
        b.author = DISQUS.jsonData.users[b.user_key];
        DISQUS.jsonData.request.is_moderator && DISQUS.popup.popModal(DISQUS.renderBlock("moderateOptionsPopup", {comment: b}), DISQUS.strings.get("Moderate Options"), a)
    });
    b("comments.delete", function (a) {
        DISQUS.popup.close(null,
            !0);
        DISQUS.api("posts/remove", {data: {post: a}, type: "POST", success: function (a) {
            DISQUS.each(a, function (a) {
                e("comments.delete.onSuccess", a.id)
            })
        }, failure: function () {
            var b = DISQUS.strings.get("Oops, something went wrong"), c = DISQUS.strings.get("We couldn't delete this post. Please try again later.");
            DISQUS.popup.popModal(c, b, a)
        }})
    });
    b("comments.delete.onSuccess", "= 1.0", function (a) {
        if (DISQUS.nodes.get("#comment-" + a) && DISQUS.nodes.get("#dsq-comment-" + a))DISQUS.nodes.get("#comment-" + a).innerHTML = DISQUS.strings.get("Comment removed.") +
            ' <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'comments.restore\', ' + a + ');">' + DISQUS.strings.get("Undo") + "</a>", DISQUS.nodes.get("#comment-" + a).className = "dsq-remove-message", DISQUS.nodes.get("#dsq-comment-" + a).style.display = "none"
    });
    b("comments.delete.onSuccess", ">= 1.1", function () {
    });
    b("comments.restore", function (a) {
        DISQUS.api("posts/restore", {data: {post: a}, type: "POST", success: function (a) {
            DISQUS.each(a, function (a) {
                e("comments.restore.onSuccess", a.id)
            })
        }})
    });
    b("comments.restore.onSuccess",
        "= 1.0", function (a) {
            if (DISQUS.nodes.get("#comment-" + a) && DISQUS.nodes.get("#dsq-comment-" + a))DISQUS.nodes.get("#comment-" + a).innerHTML = "", DISQUS.nodes.get("#comment-" + a).className = "", DISQUS.nodes.get("#dsq-comment-" + a).style.display = "block"
        });
    b("comments.restore.onSuccess", ">= 1.1", function () {
    });
    b("cookies.onFailure", function (a) {
        DISQUS.states.noThirdPartyCookies = !0;
        DISQUS.states.useLoginWindow = !DISQUS.isBrowser("safari");
        if (DISQUS.isBrowser("gecko") || DISQUS.isBrowser("chrome")) {
            var b = DISQUS.jsonData.request.is_remote;
            if (!DISQUS.jsonData.request.is_authenticated || b)DISQUS.states.loginDisabled = !0, e("comments.reply.onCookieFailure", a)
        } else if (DISQUS.isBrowser("safari") && DISQUS.jsonData.request.is_sso && (a = DISQUS.nodes.get("#dsq-sso-iframe"), !a)) {
            a = document.createElement("div");
            a.id = "dsq-sso-iframe";
            a.style.display = "none";
            DISQUS.nodes.get("body")[0].appendChild(a);
            var c = DISQUS.comm.SSO.create(function () {
                var a = {forum_url: DISQUS.jsonData.forum.url}, b = DISQUS.config.page;
                b.remote_auth_s2 ? a.remote_auth_s2 = b.remote_auth_s2 :
                    b.remote_auth_s3 && DISQUS.extend(a, {remote_auth_s3: b.remote_auth_s3, api_key: b.api_key});
                c.authenticate(a)
            })
        }
    });
    b("user.newUser.onSuccess", function () {
        function a() {
            if (DISQUS.getBlock("editProfileSuggestion")) {
                var b = document.createElement("div");
                b.innerHTML = DISQUS.renderBlock("editProfileSuggestion");
                var c = DISQUS.nodes.get("#dsq-comments"), e = DISQUS.nodes.get(".dsq-comment", c);
                c.insertBefore(b, e);
                (new DISQUS.tooltip.ManualTooltip(DISQUS.nodes.get(".dsq-avatar")[0], {contentId: "dsq-edit-profile-suggestion",
                    trigger: null})).show()
            }
            f("comments.insert", a);
            return!0
        }

        b("comments.insert", a)
    });
    b("user.remoteAccountSettings", function () {
        var a = DISQUS.nodes.createIframe(DISQUS.jsonData.urls.remote_settings, {}, {id: "dsq-popup-account-settings"}), b = document.createElement("div");
        b.appendChild(a);
        DISQUS.popup.popModal(b.innerHTML, DISQUS.strings.get("Account Settings"))
    });
    b("profile.show", function (a, b, c) {
        c === void 0 && (c = a == null ? DISQUS.jsonData.request.is_moderator : DISQUS.jsonData.posts[a].author_is_moderator);
        DISQUS.comm.Default.recover().log("profile:view",
            1);
        return DISQUS.popup.popProfile(a, b, c)
    });
    b("profile.dashboard", function () {
        window.location.href = "http://disqus.com/dashboard"
    });
    b("profile.edit", function () {
        (new (DISQUS.states.noThirdPartyCookies ? DISQUS.ui.ProfileEditNewWindow : DISQUS.ui.ProfileEditModal)).open({lang: DISQUS.jsonData.forum.language})
    });
    b("profile.displayDeferredAvatars", function () {
        function a(b) {
            var e = DISQUS.nodes.getPosition(b), q = e[1];
            return e[1] + b.offsetHeight <= g - c ? -1 : q >= g + h + c ? 1 : 0
        }

        function b(c) {
            c = f[c];
            if (a(c) === 0)return c.setAttribute("src",
                c.getAttribute("data-src")), DISQUS.nodes.removeClass(c, "dsq-deferred-avatar"), c.removeAttribute("data-src"), !0;
            return!1
        }

        for (var c = 200, e = DISQUS.nodes.get("img.dsq-deferred-avatar"), f = [], d = 0; d < e.length; d++)e[d].offsetParent && f.push(e[d]);
        if (f.length) {
            var g, h;
            DISQUS.browser.ie ? function () {
                var a = document.documentElement;
                g = a.scrollTop;
                h = a.clientHeight
            }() : (g = window.pageYOffset, h = window.innerHeight);
            e = function () {
                for (var b = f.length, c = 0, e, d; c < b;)if (d = parseInt((c + b) / 2, 10), e = a(f[d]), e === -1)c = d + 1; else if (e ===
                    1)b = d; else return d;
                return-1
            }();
            if (e !== -1) {
                for (d = e; d >= 0 && b(d); d--);
                for (d = e + 1; d < f.length && b(d); d++);
            }
        }
    });
    b("mentions.render", function (a) {
        var b = /@[\w\-]+:\w+/g, c, f = {disqus: "mentions.render.disqus", twitter: "mentions.render.twitter"};
        DISQUS.each(a, function (a) {
            a && a.message && (c = a.message.match(b)) && DISQUS.each(c, function (b) {
                var c = b.slice(1).split(":"), q = c[0], c = c[1];
                f.hasOwnProperty(c) || (c = "disqus");
                e(f[c], a, b, q)
            })
        })
    });
    b("mentions.render.disqus", function (a, b, c) {
        var e = DISQUS.jsonData.users[c] || DISQUS.jsonData.users[c.toLowerCase()] ||
            DISQUS.jsonData.users[c.toUpperCase()], c = '<span class="dsq-mention dsq-tt dsq-mention-disqus"original-title="Expand ' + (e ? e.display_name : c) + '\'s profile" data-dsq-username="' + c + '" data-dsq-remote="disqus"><a class="" href="' + DISQUS.settings.get("disqus.urls.main") + "/" + c + '" target="_blank" onclick="DISQUS.dtpl.actions.fire(\'profile.show\', undefined, \'' + c + "');return false;\">" + (e ? e.display_name : c) + "</a></span>";
        a.message = a.message.replace(b, c)
    });
    b("mentions.render.twitter", function (a, b, c) {
        a.message =
            a.message.replace(b, '<span class="dsq-mention dsq-tt dsq-mention-twitter"original-title="Expand @' + c + '\'s profile" data-dsq-username="' + c + '" data-dsq-remote="twitter"><a class="twitter-account" href="http://twitter.com/' + c + '" onclick="window.open(\'' + ("http://twitter.com/intent/user?screen_name=" + c) + "', 'Twitter Mention', 'height=420, width=550');return false;\">@" + c + "</a></span>")
    });
    b("messagesx.init", function () {
        var a = DISQUS.jsonData, b = DISQUS.comm.Default.recover();
        DISQUS.cache.messagesx = {count: a.messagesx.count,
            unread: a.messagesx.unread};
        if (a.context.switches.realtime && a.request.is_authenticated) {
            var c = !1, e = function () {
                c || (c = !0, b.realtimePoll(a.thread.id))
            };
            document.readyState != "complete" ? DISQUS.bean.add(window, "load", e) : e();
            setTimeout(function () {
                e()
            }, 15E3)
        }
    });
    b("messagesx.toggleBar", function () {
        var a = DISQUS.nodes.get("#dsq-messagesx-toolbar-icon"), b = DISQUS.nodes.get("#dsq-messagesx-toolbar-dropdown"), c = DISQUS.cache.messagesx;
        DISQUS.nodes.addClass(DISQUS.nodes.get("#dsq-alert"), "dsq-alert-hidden");
        DISQUS.nodes.hasClass(a,
            "dsq-dropdown-tab-active") ? (DISQUS.nodes.removeClass(b, "dsq-dropdown-visible"), DISQUS.nodes.removeClass(a, "dsq-dropdown-tab-active")) : (c && c.unread.length > 0 && DISQUS.dtpl.actions.fire("messagesx.markRead"), DISQUS.nodes.addClass(a, "dsq-dropdown-tab-active"), DISQUS.nodes.addClass(b, "dsq-dropdown-visible"));
        return!1
    });
    b("messagesx.newEvent", function (a) {
        a.type == "message" && e("messagesx.newMessage", a.message)
    });
    b("messagesx.newMessage", function (a) {
        var b = DISQUS.nodes.get("#dsq-messagesx-count"), c = DISQUS.nodes.get("#dsq-messagesx-toolbar-icon");
        if (b)DISQUS.cache.messagesx.unread.push(a), b.innerHTML = ++DISQUS.cache.messagesx.count, a.theme == "achievement" && DISQUS.nodes.removeClass(DISQUS.nodes.get("#dsq-alert"), "dsq-alert-hidden"), DISQUS.cache.messagesx.count > 0 ? DISQUS.nodes.addClass(c, "dsq-unread") : DISQUS.nodes.removeClass(c, "dsq-unread"), e("messagesx.renderMessage", a)
    });
    b("messagesx.renderMessage", function (a) {
        DISQUS.nodes.hide(DISQUS.nodes.get("#dsq-inbox-no-messages"));
        var b = document.createElement("li");
        b.id = "dsq-messagesx-message-" + a.id;
        DISQUS.nodes.addClass(b, "dsq-messagesx");
        DISQUS.nodes.addClass(b, "dsq-messagesx-" + a.theme);
        b.innerHTML = DISQUS.renderBlock("messagesxPopup", {message: a});
        DISQUS.nodes.get("#dsq-messagesx-inbox").appendChild(b)
    });
    b("messagesx.render", function (a) {
        if (DISQUS.nodes.get("#dsq-messagesx-count")) {
            var b = !1;
            DISQUS.each(a.unread, function (a) {
                a.theme == "achievement" && (b = !0);
                e("messagesx.renderMessage", a)
            });
            b && DISQUS.nodes.removeClass(DISQUS.nodes.get("#dsq-alert"), "dsq-alert-hidden")
        }
    });
    b("messagesx.markRead", function () {
        var a =
            [], b = DISQUS.nodes.get("#dsq-messagesx-count"), c = DISQUS.nodes.get("#dsq-messagesx-toolbar-icon");
        DISQUS.each(DISQUS.cache.messagesx.unread, function (b) {
            a.push(b.id)
        });
        DISQUS.api("messagesx/markRead", {data: {messages: a}, type: "POST", success: function () {
        }});
        DISQUS.cache.messagesx.count = 0;
        DISQUS.cache.messagesx.unread = [];
        b.innerHTML = DISQUS.cache.messagesx.count;
        DISQUS.nodes.removeClass(c, "dsq-unread");
        return!1
    });
    b("thread.initialize", function () {
        DISQUS.jsonData.forum.template.api == "1.1" ? DISQUS.extend(DISQUS.dtpl,
            {APPEND_REPLY_ID: i("dsq-append-reply"), APPEND_EDIT_ID: i("dsq-append-edit"), APPEND_COMMENT_ID: i("dsq-append-post")}) : DISQUS.extend(DISQUS.dtpl, {APPEND_REPLY_ID: i("dsq-append-post"), APPEND_EDIT_ID: i("dsq-comment-body"), APPEND_COMMENT_ID: i("dsq-append-post")});
        DISQUS.jsonData.context.forum_facebook_key && DISQUS.FB.init();
        e("toolbar.initialize");
        DISQUS.dtpl.actions.fire("profile.displayDeferredAvatars");
        DISQUS.events.debounce(window, "scroll", function () {
                DISQUS.dtpl.actions.fire("profile.displayDeferredAvatars")
            },
            250);
        if (DISQUS.jsonData.context.show_reply) {
            DISQUS.comm.Reply.reset();
            DISQUS.dtpl.ReplyBox.create();
            DISQUS.jsonData.realtime_enabled && c("realtime.initialize") && e("realtime.initialize");
            var a = document.createElement("div");
            a.innerHTML = DISQUS.renderBlock("pageInfo");
            var b = DISQUS.nodes.get("#disqus_thread");
            b.appendChild(a);
            DISQUS.ui.truncateComments(b);
            DISQUS.cache.toggledReplies = {}
        }
    });
    b("thread.ready", function () {
        setTimeout(function () {
            e("profile.displayDeferredAvatars");
            DISQUS.ui.applyTooltips()
        }, 0);
        DISQUS.defer(function () {
            var a = DISQUS.comm.Reply.recover();
            return DISQUS.comm.Default.recover().isReady && (typeof a == "undefined" || a.isReady)
        }, function () {
            DISQUS.trigger("thread.onReady")
        })
    });
    b("thread.incrementCommentsCount", function () {
        var a = DISQUS.nodes.get("#dsq-num-posts"), b = DISQUS.nodes.get("#dsq-total-posts");
        if (a) {
            var c = a.innerHTML.split("-");
            a.innerHTML = c.length == 1 ? parseInt(c[0], 10) + 1 : c[0] + "-" + (parseInt(c[1], 10) + 1)
        }
        if (b)b.innerHTML = parseInt(b.innerHTML, 10) + 1
    });
    b("thread.paginate", function (a, b, c) {
        a = {slug: DISQUS.jsonData.thread.slug, sort: DISQUS.jsonData.request.sort, p: a, per_page: c || DISQUS.config.page.per_page};
        DISQUS.dtpl.actions.fire("thread.paginate.onLoadingStart");
        if (b)b.style.display = "none";
        DISQUS.request.get(DISQUS.jsonData.urls.embed_thread, a, !0)
    });
    b("thread.paginate.onLoadingStart", "= 1.0", function () {
        DISQUS.jsonData.thread.pagination_type == "num" ? (DISQUS.window.anchor("disqus_thread"), DISQUS.nodes.get("#dsq-comments").innerHTML = '<img src="' + DISQUS.jsonData.settings.media_url + '/images/loading.gif"/>') :
            DISQUS.nodes.get("#dsq-pagination").innerHTML = '<img src="' + DISQUS.jsonData.settings.media_url + '/images/loading-small.gif"/>'
    });
    b("thread.paginate.onLoadingStart", ">= 1.1", function () {
    });
    b("thread.paginate.onLoadingEnd", function () {
    });
    b("thread.update", function () {
        function a(b) {
            if (c)c.innerHTML = b
        }

        var b = DISQUS.nodes.get("#dsq-comments"), c = DISQUS.nodes.get("#dsq-num-posts"), e = DISQUS.nodes.get("#dsq-pagination"), f, d = DISQUS.jsonData.thread.num_posts;
        DISQUS.trigger("loader.onDataReady");
        if (DISQUS.jsonData.thread.pagination_type ==
            "num")DISQUS.dtpl.replaceHtml(b, DISQUS.renderBlock("comments")), DISQUS.ui.applyTooltips(b), DISQUS.jsonData.thread.total_posts > d ? (f = DISQUS.jsonData.thread.offset_posts, a(f + 1 + "-" + (f + d))) : a(d); else if (DISQUS.jsonData.thread.pagination_type == "append")DISQUS.jsonData.request.page == 1 ? (b.innerHTML = DISQUS.renderBlock("comments"), a(d)) : (f = document.createElement("div"), f.innerHTML = DISQUS.renderBlock(function (a) {
            var b = "";
            DISQUS.each(a.comments, function (a) {
                b += DISQUS.renderBlock("comment", {comment: a})
            });
            return b
        }),
            b.appendChild(f), DISQUS.ui.applyTooltips(f), f = c ? parseInt(c.innerHTML, 10) : 0, a(f + d));
        e.innerHTML = DISQUS.renderBlock("pagination");
        DISQUS.trigger("thread.onPaginate");
        DISQUS.ui.truncateComments(b);
        DISQUS.dtpl.actions.fire("profile.displayDeferredAvatars");
        DISQUS.dtpl.actions.fire("thread.paginate.onLoadingEnd")
    });
    b("thread.sort.onLoadingStart", "= 1.0", function () {
        DISQUS.nodes.get("#dsq-comments").innerHTML = '<img src="' + DISQUS.jsonData.settings.media_url + '/images/loading.gif"/>'
    });
    b("thread.sort.onLoadingStart",
        ">= 1.1", function () {
        });
    b("thread.sort.onLoadingEnd", function () {
    });
    b("thread.sort", function (a) {
        var b;
        /hot|best|newest|oldest|highlighted/.test(a) && (b = {slug: DISQUS.jsonData.thread.slug, sort: a, p: 1}, DISQUS.dtpl.actions.fire("thread.sort.onLoadingStart"), DISQUS.dtpl.actions.fire("realtime.updateState", a), DISQUS.request.get(DISQUS.jsonData.urls.embed_thread, b, !0))
    });
    b("thread.subscribe", function (a) {
        var b = DISQUS.jsonData.urls.embed_subscribe, c = DISQUS.jsonData.request;
        c.is_authenticated && c.has_email || a ? (a &&
            DISQUS.popup.close(null, !0), DISQUS.request.get(b, {status: 1, slug: DISQUS.jsonData.thread.slug, email: a || ""}, !0)) : a || (DISQUS.popup.popModal(DISQUS.renderBlock("subscribeForm"), DISQUS.strings.get("Get notified of new comments by email")), DISQUS.nodes.get("input", DISQUS.nodes.get("#dsq-popup-message"))[0].focus())
    });
    b("__.thread.subscribe.onChange", function (a) {
        a = !!parseInt(a, 10);
        (DISQUS.jsonData.context.subscribed = a) ? e("thread.subscribe.onSuccess") : e("thread.unsubscribe.onSuccess")
    });
    b("thread.subscribe.onSuccess",
        "= 1.0", function () {
            var a = DISQUS.strings.get("Subscribed"), b = DISQUS.strings.get("You have subscribed to this comment thread. New comments will be sent directly to your email inbox, where you may read and respond by email.");
            DISQUS.nodes.get("#dsq-subscribe").innerHTML = '<a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.unsubscribe\');">' + DISQUS.strings.get("Unsubscribe") + "</a>";
            DISQUS.popup.popModal(b, a)
        });
    b("thread.subscribe.onSuccess", ">= 1.1", function () {
    });
    b("thread.unsubscribe", function () {
        var a =
            DISQUS.jsonData.urls.embed_subscribe;
        DISQUS.jsonData.request.is_authenticated && DISQUS.request.get(a, {status: 0, slug: DISQUS.jsonData.thread.slug}, !0)
    });
    b("thread.unsubscribe.onSuccess", "= 1.0", function () {
        var a = DISQUS.strings.get("Unsubscribed"), b = DISQUS.strings.get("You have unsubscribed from this comment thread. New comments will no longer be sent to your email inbox.");
        DISQUS.nodes.get("#dsq-subscribe").innerHTML = '<a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.subscribe\');">' + DISQUS.strings.get("Subscribe by email") +
            "</a>";
        DISQUS.popup.popModal(b, a)
    });
    b("thread.unsubscribe.onSuccess", ">= 1.1", function () {
    });
    b("thread.vote", function (a) {
        function b(c, e) {
            var f = DISQUS.nodes;
            f.hasClass(c, "dsq-toggled") ? (a = 0, f.removeClass(c, "dsq-toggled")) : f.addClass(c, "dsq-toggled");
            f.removeClass(e, "dsq-toggled")
        }

        var c = DISQUS.jsonData;
        if (c.request.is_authenticated || c.forum.allow_anon_votes) {
            var e = DISQUS.nodes.get("#dsq-like-thread-button"), f = DISQUS.nodes.get("#dsq-dislike-thread-button");
            a > 0 ? b(e, f) : b(f, e);
            DISQUS.api("threads/vote",
                {data: {thread: c.thread.id, vote: a}, type: "POST", success: function (b) {
                    DISQUS.dtpl.actions.fire("thread.vote.onSuccess", a, b.thread.likes)
                }})
        } else DISQUS.dtpl.actions.fire("auth.disqus", DISQUS.strings.get("To like please login"))
    });
    b("thread.vote.onSuccess", function (a, b) {
        a > 0 ? e("thread.share.new") : e("thread.share.cancel");
        DISQUS.jsonData.thread.user_vote = a;
        DISQUS.jsonData.thread.likes = b;
        if (DISQUS.jsonData.request.is_authenticated) {
            var c = DISQUS.jsonData.request.username;
            if (a == 1) {
                var f = {};
                f[c] = {username: c,
                    avatar: DISQUS.jsonData.urls.request_user_avatar, url: DISQUS.jsonData.urls.request_user_profile, name: DISQUS.jsonData.request.display_username};
                DISQUS.jsonData.thread.voters = DISQUS.lang.extend(f, DISQUS.jsonData.thread.voters)
            } else delete DISQUS.jsonData.thread.voters[c]
        }
        DISQUS.db.available && (c = new DISQUS.db.Store("disqus_embed"), f = c.get("thread_votes") || {}, f[DISQUS.jsonData.thread.id] = {value: a, timestamp: DISQUS.jsonData.request.timestamp}, c.set("thread_votes", f));
        c = DISQUS.nodes.get("#dsq-content");
        if (c =
            DISQUS.nodes.get("ul.dsq-like-faces", c)[0])c.innerHTML = DISQUS.renderBlock("likeActivity"), DISQUS.ui.applyTooltips(c)
    });
    b("thread.help", function () {
        DISQUS.jsonData.request.is_moderator && DISQUS.popup.popModal(DISQUS.renderBlock("moderatorHelpPopup"), DISQUS.strings.get("Help"))
    });
    b("thread.settings", function () {
        DISQUS.jsonData.request.is_moderator && DISQUS.popup.popModal(DISQUS.renderBlock("threadSettingsPopup"), DISQUS.strings.get("Moderator Settings"))
    });
    b("thread.moderatorActions", function () {
        DISQUS.jsonData.request.is_moderator &&
        DISQUS.popup.popModal(DISQUS.renderBlock("moderatorActionsPopup"), DISQUS.strings.get("Moderate Options"))
    });
    b("thread.close", function () {
        var a = DISQUS.jsonData;
        DISQUS.api("threads/close", {data: {forum: a.forum.url, thread: a.thread.id}, type: "POST", success: function () {
            DISQUS.ui.Modal.closeAll();
            DISQUS.reload(function () {
                DISQUS.redraw()
            })
        }})
    });
    b("thread.open", function () {
        var a = DISQUS.jsonData;
        DISQUS.api("threads/open", {data: {forum: a.forum.url, thread: a.thread.id}, type: "POST", success: function () {
            DISQUS.ui.Modal.closeAll();
            DISQUS.reload(function () {
                DISQUS.redraw()
            })
        }})
    });
    b("thread.updateModerationSettings", function (a) {
        var b = DISQUS.jsonData, b = {forum: b.forum.url, thread: b.thread.id};
        DISQUS.extend(b, a);
        DISQUS.api("threads/updateModerationSettings", {data: b, type: "POST", success: function (a) {
            DISQUS.dtpl.actions.fire("thread.updateModerationSettings.onSuccess", a)
        }})
    });
    b("thread.updateModerationSettings.onSuccess", function () {
    });
    b("thread.updateDaysAlive", function () {
        var a = DISQUS.nodes.get("#dsq-thread-settings-status"), b = DISQUS.nodes.get("#dsq-thread-days-alive").value;
        DISQUS.dtpl.actions.fire("thread.updateModerationSettings", {lifespan: b});
        a.innerHTML = DISQUS.strings.get("Saved!");
        setTimeout(function () {
            a.innerHTML = ""
        }, 1E3)
    });
    b("thread.updateModerateAll", function () {
        var a = DISQUS.nodes.get("#dsq-thread-settings-status"), b = +!!DISQUS.nodes.get("#dsq-thread-moderate-all").checked;
        DISQUS.dtpl.actions.fire("thread.updateModerationSettings", {moderate: b});
        a.innerHTML = DISQUS.strings.get("Saved!");
        setTimeout(function () {
            a.innerHTML = ""
        }, 1E3)
    });
    b("thread.expandMediaEmbed", function (a) {
        var b;
        DISQUS.lang.forEach(DISQUS.jsonData.mediaembed, function (c) {
            c.id == a && (b = c)
        });
        DISQUS.popup.popModal(DISQUS.renderBlock("mediaEmbedPopup", {media: b}), DISQUS.strings.get("Attached File"), null, !0, "dsq-media-embed")
    });
    b("thread.share.send", function () {
        function a(b) {
            DISQUS.addJob(function () {
                return!b || b.closed
            }, function () {
                DISQUS.dtpl.actions.fire("thread.share.nextJob")
            });
            p++
        }

        if (h) {
            var b = DISQUS.nodes.get("#dsq-share-thread-twitter"), c = DISQUS.nodes.get("#dsq-share-thread-facebook"), b = {facebook: c && c.checked,
                twitter: b && b.checked};
            DISQUS.trigger("thread.onShare", b);
            if (b.twitter || b.facebook) {
                c = DISQUS.nodes.get("#dsq-share-step-1");
                DISQUS.nodes.hide(c, !0);
                c = DISQUS.nodes.get("#dsq-share-step-2");
                DISQUS.nodes.show(c, !0);
                h.reposition();
                p = 0;
                c = DISQUS.settings.get("thread.title") || document.title;
                if (b.facebook) {
                    var e = window.open("http://www.facebook.com/sharer.php?u=" + encodeURIComponent(window.location) + "&t=" + encodeURIComponent(c), "_blank", "width=600,height=400");
                    a(e)
                }
                b.twitter && (b = window.open("https://twitter.com/intent/tweet?url=" +
                    encodeURIComponent(window.location) + "&text=" + encodeURIComponent(c), "_blank", "width=550,height=520"), a(b))
            }
        }
    });
    b("thread.share", function () {
        e("thread.share.send")
    });
    b("thread.share.new", function () {
        if (h) {
            var a = DISQUS.nodes.get("div.dsq-share-step", h - fluid);
            DISQUS.lang.forEach(a, function (a) {
                DISQUS.nodes.hide(a, !0)
            });
            DISQUS.nodes.show(a[0], !0);
            h.show()
        }
    });
    b("thread.share.cancel", function () {
        h && h.hide()
    });
    b("thread.share.nextJob", function () {
        h && (--p || DISQUS.dtpl.actions.fire("thread.share.onSuccess"))
    });
    b("thread.share.onSuccess", function () {
        if (h) {
            var a = DISQUS.nodes.get("#dsq-share-step-2");
            DISQUS.nodes.hide(a, !0);
            a = DISQUS.nodes.get("#dsq-share-step-3");
            DISQUS.nodes.show(a, !0);
            h.reposition()
        }
    });
    b("thread.share.onFailure", function () {
        if (h) {
            var a = DISQUS.nodes.get("#dsq-share-step-3");
            DISQUS.nodes.hide(a, !0);
            a = DISQUS.nodes.get("#dsq-share-step-2");
            DISQUS.nodes.show(a, !0);
            h.reposition()
        }
    });
    b("realtime.initialize", function () {
        var a = DISQUS.nodes.get("#dsq-realtime-toggle");
        if (!DISQUS.states.realtime && a)DISQUS.states.realtime = !0, DISQUS.cache.realtime.last_checked = DISQUS.jsonData.request.timestamp, a.onclick = function () {
            DISQUS.cache.realtime.interval ? e("realtime.disable") : e("realtime.enable");
            return!1
        }, DISQUS.jsonData.forum.streaming_realtime || e("realtime.updateCount"), DISQUS.jsonData.thread.realtime_rate === 0 || DISQUS.jsonData.realtime_paused ? e("realtime.disable", DISQUS.jsonData.request.sort != "oldest") : e("realtime.enable")
    });
    b("realtime.enable", function () {
        var a = DISQUS.nodes.get("#dsq-realtime-toggle"), b = DISQUS.nodes.get("#dsq-realtime-status"),
            c = setInterval(function () {
                var a = DISQUS.cache.realtime, b = DISQUS.jsonData.urls.realtime;
                b += "?timestamp=" + a.last_checked + "&thread_id=" + DISQUS.jsonData.thread.id + "&f=" + DISQUS.jsonData.forum.url + "&";
                if (!a.ongoing_request && DISQUS.jsonData.realtime_enabled)a.prev_script && a.prev_script.parentNode && DISQUS.nodes.remove(a.prev_script), a.ongoing_request = !0, a.prev_script = DISQUS.request.get(b, void 0, !0)
            }, DISQUS.jsonData.context.realtime_speed);
        DISQUS.cache.realtime.interval = c;
        b.innerHTML = DISQUS.strings.get("enabled");
        a.innerHTML = "(" + DISQUS.strings.get("Pause") + ")"
    });
    b("realtime.disable", function () {
        var a = DISQUS.nodes.get("#dsq-realtime-toggle"), b = DISQUS.nodes.get("#dsq-realtime-status"), c = DISQUS.cache.realtime.interval;
        if (c)clearInterval(c), DISQUS.cache.realtime.interval = null;
        b.innerHTML = DISQUS.strings.get("paused");
        a.innerHTML = "(" + DISQUS.strings.get("Resume") + ")"
    });
    b("realtime.updateState", function (a) {
        if (DISQUS.states.realtime) {
            var b = !!DISQUS.cache.realtime.interval;
            a == "oldest" ? DISQUS.dtpl.actions.fire("realtime.disable",
                !1) : DISQUS.jsonData.realtime_was_on && !b ? DISQUS.dtpl.actions.fire("realtime.enable") : DISQUS.dtpl.actions.fire("realtime.toggleResume");
            DISQUS.jsonData.realtime_was_on = b
        }
    });
    b("realtime.toggleResume", function () {
        var a = !DISQUS.cache.realtime.interval;
        DISQUS.nodes.get("#dsq-realtime-toggle").innerHTML = a ? "(" + DISQUS.strings.get("Resume") + ")" : "(" + DISQUS.strings.get("Pause") + ")"
    });
    b("realtime.updateCount", function () {
        var a = DISQUS.nodes.get("#dsq-content"), a = DISQUS.nodes.get("div.dsq-realtime-alert", a), b = DISQUS.cache.realtime.newPosts.length;
        if (function () {
            var a = 0, b;
            for (b in DISQUS.jsonData.posts)if (DISQUS.jsonData.posts.hasOwnProperty(b) && ++a > 5)return!1;
            return!0
        }())for (; a.length > 1;)a.pop();
        DISQUS.lang.forEach(a, function (a) {
            a.style.display = b ? "block" : "none";
            var c = DISQUS.strings.get("new comment was just posted."), f = DISQUS.strings.get("new comments were just posted.");
            a.innerHTML = b > 1 ? b + " " + f + " " : b + " " + c + " ";
            c = document.createElement("A");
            c.href = "#";
            DISQUS.events.add(c, "click", function (a) {
                a.preventDefault();
                return e("realtime.show")
            });
            c.innerHTML =
                DISQUS.strings.get("Show");
            a.appendChild(c)
        })
    });
    b("realtime.insertNewPosts", function () {
        var a = null, b = DISQUS.nodes.get("#dsq-sort-select");
        if (!b && DISQUS.jsonData.request.sort == "hot" || b && b.value == "oldest")a = -1;
        DISQUS.lang.forEach(DISQUS.cache.realtime.newPosts, function (b) {
            e("comments.insert", a, b);
            e("thread.incrementCommentsCount");
            e("comments.outline", b)
        });
        DISQUS.jsonData.forum.streaming_realtime || (a ? (b = DISQUS.nodes.get(".dsq-comment", DISQUS.nodes.get("#disqus_thread")), DISQUS.nodes.scrollTo(b[b.length -
            1])) : DISQUS.nodes.scrollTo("#disqus_thread"));
        DISQUS.cache.realtime.newPosts = []
    });
    b("realtime.show", function () {
        e("realtime.insertNewPosts");
        e("realtime.updateCount")
    });
    b("realtime.update", function (a, b, c) {
        var f = DISQUS.cache.realtime;
        f.ongoing_request = null;
        f.last_checked = a;
        c && DISQUS.lang.forEach(c, function (a, b) {
            DISQUS.jsonData.users[b] || (DISQUS.jsonData.users[b] = a)
        });
        b && (DISQUS.lang.forEach(b, function (a, b) {
            DISQUS.jsonData.posts[b] || (DISQUS.updatePost(b, a), f.newPosts.push(b))
        }), DISQUS.jsonData.forum.streaming_realtime ?
            e("realtime.insertNewPosts") : e("realtime.updateCount"))
    });
    b("community.show", function () {
        (new DISQUS.ui.ForumCommunityModal).open({url: DISQUS.jsonData.urls.community, lang: DISQUS.jsonData.forum.language})
    });
    b("reactions.hide", function (a) {
        DISQUS.api("reactions/remove", {data: {reaction: a, forum: DISQUS.jsonData.forum.url}, type: "POST", success: function (a) {
            DISQUS.dtpl.actions.fire("reactions.hide.onSuccess", a[0].id)
        }})
    });
    b("reactions.hide.onSuccess", function (a) {
        DISQUS.nodes.hide(DISQUS.nodes.get("#dsq-reaction-" +
            a))
    });
    b("reactions.hide.onSuccess", function (a) {
        DISQUS.nodes.get("#dsq-reaction-" + a).style.display = "none"
    });
    b("reactions.loadMore", function () {
        DISQUS.request.get(DISQUS.jsonData.urls.embed_more_reactions, {t: DISQUS.jsonData.thread.id, s: DISQUS.jsonData.reactions_start, l: DISQUS.jsonData.reactions_limit}, !0)
    });
    b("reactions.insert", function (a) {
        var b = DISQUS.nodes.get("#dsq-reactions"), c = DISQUS.nodes.get("#dsq-show-more-reactions");
        DISQUS.lang.forEach(a, function (a) {
            var a = {reaction: a}, c = document.createElement("div"),
                e = a.reaction.get_service_name;
            a.reaction.service_icon = e == "trackback" || e == "pingback" ? "rss" : e.replace(" ", "");
            c.innerHTML = DISQUS.renderBlock("reaction", a);
            b.appendChild(DISQUS.nodes.children(c)[0])
        });
        DISQUS.ui.applyTooltips(b);
        if (!DISQUS.jsonData.has_more_reactions)c.style.display = "none"
    });
    b("reactions.reportMissing", function () {
        var a = DISQUS.jsonData.urls.embed_queueurl;
        DISQUS.jsonData.request.is_moderator && DISQUS.jsonData.forum.reactions_enabled && (DISQUS.jsonData.thread.queued ? DISQUS.popup.popModal(DISQUS.strings.get("The system will automatically search for new reactions. If any are found, they will displayed on this comment thread."),
            DISQUS.strings.get("Thank you")) : DISQUS.request.get(a, {}, !0))
    });
    b("reactions.showRetweets", function (a) {
        var b;
        DISQUS.lang.forEach(DISQUS.jsonData.reactions, function (c) {
            c.id == a && (b = c)
        });
        DISQUS.popup.popModal(DISQUS.renderBlock("retweetsPopup", {reaction: b}), DISQUS.strings.get("Retweets"))
    });
    b("toolbar.initialize", function () {
        if (DISQUS.nodes.get("#dsq-global-toolbar")) {
            var a = DISQUS.nodes.get("#dsq-like-thread-button");
            h = new DISQUS.tooltip.ManualTooltip(a, {trigger: null, contentId: "dsq-like-tooltip"});
            var b =
                [DISQUS.nodes.get("#dsq-share-thread-twitter"), DISQUS.nodes.get("#dsq-share-thread-facebook")], c = function () {
                var a = !1;
                DISQUS.lang.forEach(b, function (b) {
                    b && (a = a || b.checked)
                });
                var c = DISQUS.nodes.get(".dsq-primary-action", h.content)[0];
                a ? (c.removeAttribute("disabled"), DISQUS.nodes.removeClass(c, "dsq-tooltip-disabled-button")) : (c.setAttribute("disabled", "disabled"), DISQUS.nodes.addClass(c, "dsq-tooltip-disabled-button"))
            };
            DISQUS.lang.forEach(b, function (a) {
                a && DISQUS.events.add(a, "click", c)
            });
            var a = DISQUS.nodes.get("#dsq-toolbar-dropdown"),
                a = DISQUS.nodes.get("a", a)[0], e = DISQUS.nodes.get("#dsq-toolbar-dropdown-wrap");
            DISQUS.events.add(a, "click", function (a) {
                a.preventDefault();
                e.style.display = e.style.display == "none" ? "block" : "none"
            })
        }
    });
    b("help.login", function () {
        DISQUS.popup.popModal(DISQUS.renderBlock("helpLogin"), DISQUS.strings.get("Help: Enabling cookies"))
    });
    b("comments.reply.mentions.selectUser", function (a, b) {
        var c = DISQUS.jsonData.users[b], e = DISQUS.comm.Reply.recover(a);
        c.identifier = b;
        e.selectUser(c);
        DISQUS.dtpl.actions.fire("comments.reply.mentions.clear",
            a)
    });
    b("comments.reply.mentions.selectActive", function (a) {
        var b = DISQUS.dtpl.ReplyBox.get(a).textareaContainer();
        if (b = DISQUS.nodes.get(".dsq-mentions", b.parentNode)[0])b = m(b).getAttribute("data-dsq-username"), DISQUS.dtpl.actions.fire("comments.reply.mentions.selectUser", a, b)
    });
    b("comments.reply.mentions.suggest", function (a, b) {
        function c(a) {
            a = DISQUS.nodes.get("li", a);
            DISQUS.each(a, function (a) {
                DISQUS.events.add(a, "click", function (a) {
                    if ((a = a.target || a.srcElement) && !DISQUS.nodes.hasClass(a, "dsq-mentions"))if (a =
                        k(a, "data-dsq-username") ? a : DISQUS.nodes.closest(a, "li"))(a = a.getAttribute("data-dsq-username")) && DISQUS.dtpl.actions.fire("comments.reply.mentions.selectUser", b, a)
                });
                DISQUS.events.add(a, "mouseover", function (a) {
                    var a = a.target || a.srcElement, b;
                    if (a && !DISQUS.nodes.hasClass(a, "dsq-mentions") && (a = k(a, "data-dsq-username") ? a : DISQUS.nodes.closest(a, "li")) && k(a, "data-dsq-username"))b = DISQUS.nodes.get("li", a.parentNode), DISQUS.each(b, function (a) {
                        DISQUS.nodes.removeClass(a, "dsq-mentions-highlighted")
                    }), DISQUS.nodes.addClass(a,
                        "dsq-mentions-highlighted")
                })
            })
        }

        function e(a) {
            var b = a.remote_domain_name.toLowerCase() || "disqus";
            return'<li data-dsq-username="' + a.identifier + '" class="dsq-mentions-' + b + '">  <img class="dsq-mentions-avatar" src="' + a.avatar + '" />  <p class="dsq-mentions-name"><span>' + a.display_name + "</span></p></li>"
        }

        function f(a, b) {
            var e = DISQUS.dtpl.ReplyBox.get(b).textareaContainer(), d = DISQUS.nodes.get(".dsq-mentions", e.parentNode)[0];
            if (!d)d = document.createElement("ul"), d.className = "dsq-mentions", DISQUS.nodes.insertAfter(e,
                d);
            a ? (d.innerHTML = a, c(d), DISQUS.nodes.show(d), (e = l(d, null, "down")) && DISQUS.nodes.addClass(e, "dsq-mentions-highlighted")) : DISQUS.nodes.hide(d)
        }

        if (!a || !a.sections)DISQUS.dtpl.actions.fire("comments.reply.mentions.clear", b); else {
            var d = !1, g = "", h, p, i, j;
            for (i = 0; i < a.sections.length; ++i)if (h = a.sections[i], (p = a[h]) && p.length) {
                g += '<li class="dsq-mention-section"><h5>' + h + "</h5></li>";
                for (j = 0; j < p.length; ++j)d || (d = !0), g += e(a[h][j]), DISQUS.jsonData.users[p[j].identifier] || (DISQUS.jsonData.users[p[j].identifier] =
                    p[j])
            }
            d ? f(g, b) : DISQUS.dtpl.actions.fire("comments.reply.mentions.clear", b)
        }
    });
    b("comments.reply.mentions.move", function (a, b) {
        var c = DISQUS.dtpl.ReplyBox.get(b).textareaContainer(), e = DISQUS.nodes.get(".dsq-mentions", c.parentNode)[0], c = m(e);
        if (e = l(e, c, a))DISQUS.nodes.removeClass(c, "dsq-mentions-highlighted"), DISQUS.nodes.addClass(e, "dsq-mentions-highlighted")
    });
    b("comments.reply.mentions.clear", function (a) {
        a = DISQUS.dtpl.ReplyBox.get(a).textareaContainer();
        (a = DISQUS.nodes.get(".dsq-mentions", a.parentNode)[0]) &&
        DISQUS.nodes.hide(a)
    });
    return{def: b, callAction: d, register: function (a, b) {
        j[a] = j[a] || [];
        b.guid = DISQUS.getGuid();
        j[a].push(b);
        return b
    }, remove: f, getDefault: a, hasDefault: g, registered: c, fire: e}
});
DISQUS.define("dtpl.validators", function () {
    return{email: function (b) {
        if (!/^[a-z0-9\-\_\+]+(\.[a-z0-9\-\_\+]+)*\@(([a-z0-9\-\_\+]+(\.[a-z0-9\-\_\+]+)*)+\.[a-z]{2,}|([0-9]+\.){3}[0-9]+)$/i.test(b.value))return DISQUS.dtpl.actions.fire("message.error.onField", DISQUS.strings.get("Please enter a valid email to comment."), b.id), !1;
        return!0
    }, name: function (b) {
        var d = DISQUS.strings.get("Name");
        if (b.value == d || b.value.length <= 1)return DISQUS.dtpl.actions.fire("message.error.onField", DISQUS.strings.get("Please enter a name to comment."),
            b.id), !1;
        return!0
    }, website: function (b) {
        var d = DISQUS.strings.get("Website") + " (" + DISQUS.strings.get("Optional") + ")";
        if (!b || !b.value)return!0; else if (b.value == d)return b.value = "", !0;
        if (b.value.indexOf(".") == -1)return DISQUS.dtpl.actions.fire("message.error.onField", DISQUS.strings.get("Please check your website URL (this field is optional)."), b.id), !1;
        return!0
    }, guestFields: function (b) {
        b = b && typeof b === "object" ? b : DISQUS.dtpl.getGuestFields(b);
        if (DISQUS.jsonData.request.is_authenticated)return!0;
        if (!DISQUS.dtpl.validators.email(b.email))return!1;
        if (!DISQUS.dtpl.validators.name(b.name))return!1;
        if (!DISQUS.dtpl.validators.website(b.website))return!1;
        return!0
    }}
});
DISQUS.define("events", function () {
    function b() {
        if (d.ready)return!0;
        if (document && document.getElementsByTagName && document.getElementById && document.body) {
            if (d.timer)clearInterval(d.timer), d.timer = null;
            for (var b = 0; b < d.queue.length; b++)d.queue[b]();
            d.queue = [];
            return d.ready = !0
        }
        return!1
    }

    var d = {ready: !1, timer: null, queue: []};
    return{execOnReady: function (f) {
        b() ? f() : d.timer ? d.queue.push(f) : (DISQUS.events.add(window, "load", b), d.queue.push(f), d.timer = setInterval(b, 13))
    }}
});
DISQUS.define("request", function () {
    return{get: function (b, d, f, a) {
        var g = document.createElement("script");
        g.src = DISQUS.getResourceURL(b, d, f);
        g.charset = "UTF-8";
        (a || DISQUS.nodes.body()).appendChild(g);
        return g
    }, post: function (b, d, f) {
        var a, g, c, e;
        a = document.createElement("div");
        c = "dsq-temp-iframe" + (new Date).getTime();
        g = document.createElement("form");
        g.method = "POST";
        g.action = b;
        if (!f)g.target = c;
        try {
            e = document.createElement('<iframe name="' + c + '">')
        } catch (i) {
            e = document.createElement("iframe"), e.name = c
        }
        e.style.display =
            "none";
        e.id = c;
        a.appendChild(e);
        DISQUS.lang.forEach(d, function (a, b) {
            var c = document.createElement("input");
            c.name = b;
            c.type = "hidden";
            c.value = a;
            g.appendChild(c)
        });
        DISQUS.nodes.body().appendChild(a);
        DISQUS.nodes.body().appendChild(g);
        g.submit()
    }}
});
DISQUS.define("popup", function () {
    return{popModal: function (b, d, f, a, g, c) {
        DISQUS.ui.Modal.closeAll();
        f = new DISQUS.ui.Modal;
        b = {title: d, body: b, extra: g};
        DISQUS.lang.extend(b, c || {});
        f.open(b)
    }, popProfile: function (b, d, f) {
        var a = DISQUS.jsonData.posts[b];
        if (a) {
            if (a.has_been_anonymized) {
                DISQUS.popup.popModal(DISQUS.strings.get("This message was anonymized by its previous owner"), DISQUS.strings.get("Anonymized"), b);
                return
            } else if (a.killed) {
                DISQUS.popup.popModal(DISQUS.strings.get("This comment was removed by a moderator"),
                    DISQUS.strings.get("Comment Removed"), b);
                return
            }
            d = DISQUS.jsonData.posts[b].user_key
        }
        b = {username: d, anonymous: !!d.match(/^[0-9a-f]{32}/i), isModerator: f, forum: DISQUS.getShortname(), lang: DISQUS.jsonData.forum.language};
        (new DISQUS.ui.ProfileModal).open(b);
        return!1
    }, close: function () {
        DISQUS.ui.Modal.closeAll()
    }, adjustPosition: function () {
        var b = DISQUS.ui.Modal.last();
        b && b.reposition()
    }}
});
DISQUS.define("window", function () {
    return {
        anchor: function (b) {
            window.location.hash = b
        }, isClosed: function (b) {
            if (!b)return !0;
            try {
                return b.closed || b.closed === void 0
            }
            catch (d) {
                return !0
            }
        }
    }
});
DISQUS.define("hacks.ie", function () {
    return {
        fixIframes: function (b) {
            var d = DISQUS.nodes.get("#" + DISQUS.config - fluid_id).getElementsByTagName("iframe");
            if (b = b ? DISQUS.nodes.get("#" + b) : DISQUS.nodes - fluid)for (var f = 0; f < d.length; f++)d[f].style.width = b.offsetWidth
        }
    }
});
DISQUS.define("db", function () {
    var b, d = DISQUS.json || window.JSON, f;
    try {
        f = !!window.localStorage
    }
    catch (a) {
        f = !1
    }
    f ? (b = function (a) {
        if (!a)throw new DISQUS.AssertionError("Database needs key.");
        this.key = a
    }, b.prototype._getObject = function () {
        var a = localStorage.getItem(this.key);
        try {
            return a ? d.parse(a) : {}
        }
        catch (b) {
            return {}
        }
    }, b.prototype._saveObject = function (a) {
        try {
            return localStorage.setItem(this.key, d.stringify(a))
        }
        catch (b) {
            return !1
        }
    }, b.prototype.set = function (a, b) {
        var e = this._getObject();
        e[a] = b;
        return this._saveObject(e)
    },
        b.prototype.get = function (a) {
            return this._getObject()[a]
        }) : (b = function () {
        this.store = {}
    }, b.prototype = {set: function (a, b) {
        this.store[a] = b
    }, get: function (a) {
        return this.store[a]
    }});
    return{available: f, Store: b}
});
DISQUS.define("nodes", function () {
    function b(a) {
        return RegExp("(^|\\s)" + a + "(\\s|$)")
    }

    function d(a, b) {
        var c = DISQUS.qwery(a, b);
        return a.slice(0, 1) == "#" && a.indexOf(" ") === -1 ? c[0] : c
    }

    function f(a) {
        for (var b = []; a; a = a.nextSibling)a.nodeType === 1 && b.push(a);
        return b
    }

    function a(a, c) {
        return a.nodeType !== 1 ? !1 : c.slice(0, 1) == "#" ? a.id == c.slice(1) : c.indexOf(".") != -1 ? b(c.slice(1)).test(a.className) : a.tagName.toLowerCase().indexOf(c) != -1
    }

    function g(a, b, c) {
        var e;
        if (a === document)return"";
        window.getComputedStyle ? e = document.defaultView.getComputedStyle(a,
            null).getPropertyValue(b) : a.currentStyle && (e = a.currentStyle[b] ? a.currentStyle[b] : a.currentStyle[c]);
        return e == "transparent" || e === "" || e == "rgba(0, 0, 0, 0)" ? g(a.parentNode, b, c) : e || ""
    }

    function c() {
        var a;
        a = d("body")[0];
        if (h)return h;
        h = {backgroundColor: null, fontColor: null, fontFamily: null, anchorColor: null, direction: null};
        a = d("#" + DISQUS.config - fluid_id) || a;
        h.fontColor = g(a, "color");
        h.backgroundColor = g(a, "background-color", "backgroundColor");
        h.fontFamily = g(a, "font-family", "fontFamily").replace(/['"]/g,
            "");
        h.direction = g(a, "direction");
        if (a = d("a")[0])h.anchorColor = g(a, "color");
        return h
    }

    function e() {
        var a = c(), a = {to_redirect: window.location, ff: a.fontFamily, fc: a.fontColor, ac: a.anchorColor};
        DISQUS.jsonData && DISQUS.lang.extend(a, {f: DISQUS.jsonData.forum.url, t: DISQUS.jsonData.thread.slug, cbp: DISQUS.config.callback_params, default_text: DISQUS.config.def_text});
        return a
    }

    function i(a, c) {
        return b(c).test(a.className)
    }

    function m(a, b) {
        var c = (b || "").split(u);
        if (a.className) {
            for (var e = " " + a.className + " ", f = a.className,
                     d = 0, g = c.length; d < g; d++)e.indexOf(" " + c[d] + " ") < 0 && (f += " " + c[d]);
            a.className = DISQUS.lang.trim(f)
        } else a.className = b
    }

    function k(a, b) {
        var c = (b || "").split(u);
        if (b) {
            for (var e = (" " + a.className + " ").replace(s, " "), f = 0, d = c.length; f < d; f++)e = e.replace(" " + c[f] + " ", " ");
            a.className = DISQUS.lang.trim(e)
        } else a.className = ""
    }

    function l(a) {
        var b, c;
        if (a) {
            b = a.childNodes;
            for (var e = b.length - 1; e >= 0;)c = b[e], c.hasChildNodes() && l(c), typeof c.outerHTML != "undefined" ? c.outerHTML = "" : a.removeChild(c), e -= 1
        }
    }

    var o = DISQUS.qwery("#dsq-content")[0],
        j = DISQUS.qwery("head")[0] || DISQUS.qwery("#disqus_thread")[0], h, p = null, s = /[\n\t]/g, u = /\s+/;
    return{container: o, head: j, query: DISQUS.qwery, get: d, siblings: f, children: function (a) {
        return f(a.firstChild)
    }, is: a, body: function () {
        if (p)return p;
        var a = DISQUS.qwery("body");
        a && a.length && (p = a[0]);
        return p
    }, closest: function (b, c) {
        for (var e = b.parentNode; e;) {
            if (a(e, c))return e;
            e = e.parentNode
        }
        return null
    }, createIframe: function (a, b, c) {
        var f, d, g;
        g = e();
        b && DISQUS.lang.forEach(b, function (a, b) {
            g[b] = a
        });
        d = {marginwidth: 0, marginheight: 0,
            hspace: 0, vspace: 0, frameborder: 0, allowtransparency: "true", src: DISQUS.getResourceURL(a, g, !0)};
        c && DISQUS.lang.forEach(c, function (a, b) {
            d[b] = a
        });
        f = document.createElement("iframe");
        DISQUS.lang.forEach(d, function (a, b) {
            f.setAttribute(b, a)
        });
        return f
    }, getPosition: function (a) {
        var b = 0, c = 0;
        if (a.offsetParent) {
            do b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent; while (a)
        }
        return[b, c]
    }, getStyle: g, getBasicStyles: c, hasClass: i, addClass: m, removeClass: k, toggleClass: function (a, b) {
        i(a, b) ? k(a, b) : m(a, b)
    }, remove: function (a) {
        if (a)l(a),
            typeof a.outerHTML != "undefined" ? a.outerHTML = "" : a.parentNode && a.parentNode.removeChild(a)
    }, removeChildren: l, insertBefore: function (a, b) {
        a.parentNode.insertBefore(b, a)
    }, insertAfter: function (a, b) {
        a.parentNode.insertBefore(b, a.nextSibling)
    }, firstChild: function (a) {
        var a = a.childNodes, b;
        for (b = 0; b < a.length; b++)if (a[b].nodeType === 1)return a[b];
        return null
    }, toHTML: function (a) {
        var b;
        b = document.createElement("div");
        b.appendChild(a);
        return b.innerHTML
    }, hide: function (a, b) {
        b ? a.style.cssText = "display:none !important" :
            a.style.display = "none"
    }, show: function (a, b) {
        b ? a.style.cssText = "display:block !important" : a.style.display = "block"
    }, scrollTo: function (a) {
        typeof a === "string" && (a = d(a));
        a && (a = DISQUS.nodes.getPosition(a), window.scrollTo(0, a[1]))
    }, truncateComment: function (a, b, c) {
        for (var e = a.childNodes[0], f = 0; e !== null;) {
            if (e.nodeType == 3 && (f += e.nodeValue.replace(/^\s+|\s+$/g, "").split(" ").length, f > b))break;
            if (e.childNodes.length > 0)e = e.childNodes[0]; else if (e.nextSibling !== null)e = e.nextSibling; else if (e.parentNode === a)break;
            else {
                for (e = e.parentNode; e.parentNode.nextSibling === null && e !== a;)e = e.parentNode;
                e = e == a ? null : e.nextSibling
            }
        }
        if (f <= b)return!1;
        var d = e.nodeValue.replace(/^\s+|\s+$/g, "").split(" "), d = d.slice(0, d.length - (f - b));
        if (e.nodeType === 3)e.nodeValue = d.join(" ") + c;
        for (; e !== a;) {
            for (; e.nextSibling !== null;)e.nextSibling.parentNode.removeChild(e.nextSibling);
            e = e.parentNode
        }
        return!0
    }, slide: function (a, b, c, e) {
        var e = 250, f = (new Date).getTime(), d = Math.max(b, c), g = c < b, h = g ? Math.max : Math.min;
        a.style.height = b + "px";
        a.style.overflow =
            "hidden";
        a.style.display = "block";
        var p = setInterval(function () {
            var b = (new Date).getTime() - f, k = b / e;
            g && (k = 1 - k);
            k = parseInt(d * k, 10);
            k = h(k, c);
            a.style.height = k + "px";
            if (b >= e) {
                if (k <= 0)a.style.display = "none", a.style.height = "";
                clearInterval(p)
            }
        }, 13)
    }, getIframeDefaults: e}
});
DISQUS.define("sandbox", function () {
    function b() {
        var a = {DISQUS: null, browser: DISQUS.browser, config: DISQUS.config, urls: {}, lang: {forEach: DISQUS.lang.forEach, interpolate: DISQUS.strings.interpolate, contains: function (a, b) {
            for (var c = 0, e = a.length; c < e; c++)if (a[c] == b)return!0;
            return!1
        }, pluralize: DISQUS.strings.pluralize, capitalize: DISQUS.strings.capitalize, extend: DISQUS.lang.extend}, states: DISQUS.states, trans: DISQUS.strings.get, settings: {}}, b = {debug: "disqus.debug", minify_js: "disqus.minified", read_only: "disqus.readonly",
            disqus_url: "disqus.urls.main", media_url: "disqus.urls.media", ssl_media_url: "disqus.urls.sslMedia", realtime_url: "disqus.urls.realtime", uploads_url: "disqus.urls.uploads", recaptcha_public_key: "disqus.recaptcha.key", facebook_app_id: "disqus.facebook.appId", facebook_api_key: "disqus.facebook.apiKey"};
        if (DISQUS.jsonData && DISQUS.jsonData.context.switches.realtime_setting_change)b.realtimeHost = "realtime.host", b.realtimePort = "realtime.port";
        for (var f in b)b.hasOwnProperty(f) && (a.settings[f] = DISQUS.settings.get(b[f]));
        if (!DISQUS.jsonData)return a;
        var d = DISQUS.jsonData, b = d.settings.media_url;
        DISQUS.lang.extend(a, {context: d.context, messagesx: d.messagesx, comments: [], highlighted: [], unapproved: [], comment: null, forum: d.forum, integration: d.integration, loginOptions: [
            {name: "disqus", button_url: b + "/images/themes/narcissus/login-disqus.gif", enabled: !d.forum.disqus_auth_disabled, action: "auth.disqus"},
            {name: "facebook", button_url: b + "/images/themes/narcissus/login-facebook.gif", enabled: d.context.use_fb_connect, action: "auth.facebook"},
            {name: "twitter", button_url: b + "/images/themes/narcissus/login-twitter.gif", enabled: d.context.use_twitter_signin, action: "auth.twitter"},
            {name: "google", button_url: b + "/images/themes/narcissus/login-twitter.gif", enabled: d.context.use_google_signin, action: "auth.google"},
            {name: "openid", button_url: b + "/images/themes/narcissus/login-openid.gif", enabled: d.context.use_openid, action: "auth.openid"},
            {name: "yahoo", button_url: b + "/images/themes/narcissus/login-yahoo.png", enabled: d.context.use_yahoo, action: "auth.yahoo"}
        ],
            ranks: d.ranks, request: d.request, reactions: d.reactions, session: d.session, sorting: [
                {value: "hot", label: DISQUS.strings.get("Popular now"), selected: d.request.sort == "hot"},
                {value: "best", label: DISQUS.strings.get("Best rating"), selected: d.request.sort == "best"},
                {value: "newest", label: DISQUS.strings.get("Newest first"), selected: d.request.sort == "newest"},
                {value: "oldest", label: DISQUS.strings.get("Oldest first"), selected: d.request.sort == "oldest"}
            ], thread: d.thread, urls: d.urls});
        DISQUS.config.sso && a.loginOptions.push({name: DISQUS.config.sso.name,
            button_url: DISQUS.config.sso.button, action: "auth.sso", enabled: !0, userDefined: !0});
        DISQUS.lang.extend(a.settings, d.settings);
        if (DISQUS.db.available && (c || (c = new DISQUS.db.Store("disqus_embed")), (f = c.get("thread_votes")) && f[d.thread.id]))b = f[d.thread.id], b.timestamp >= d.request.timestamp ? (f = b.value - a.thread.user_vote, a.thread.likes += f < 0 ? 0 : f, a.thread.user_vote = b.value) : (delete f[d.thread.id], c.set("thread_votes", f));
        a.context.realtime_enabled = d.realtime_enabled;
        a.context.has_more_reactions = d.has_more_reactions;
        DISQUS.config.trackback_url && DISQUS.config.trackbacks ? (a.context.trackback_url = DISQUS.config.trackback_url, a.context.trackbacks = DISQUS.config.trackbacks) : (a.context.trackback_url = d.settings.disqus_url + "/forums/" + d.forum.url + "/" + d.thread.slug + "/trackback/", a.context.trackbacks = d.trackbacks);
        a.context.sharing = [];
        DISQUS.lang.forEach(a.request.sharing, function (b, c) {
            if (!(a.request.is_remote && a.request.remote_domain != c))b.key = c, b.checked = b.auto === !0 || a.request.remote_domain == c, a.context.sharing.push(b)
        });
        a.request.display_sharing_options = d.request.is_authenticated;
        if (d.request.is_remote && !d.request.sharing.hasOwnProperty(d.request.remote_domain))a.request.display_sharing_options = !1;
        if (a.reactions && a.reactions.length > 0) {
            for (g = 0; g < a.reactions.length; g++)b = a.reactions[g].get_service_name, a.reactions[g].service_icon = b == "trackback" || b == "pingback" ? "rss" : b.replace(" ", "");
            if (a.reactions.retweets && a.reactions.retweets.length === 0)a.reactions.retweets = null
        } else a.reactions = null;
        DISQUS.lang.forEach(d.mediaembed,
            function (a) {
                a.thumbnailURL = d.settings.media_url + "/images/mediaembed-thumbnail.png";
                switch (a.type) {
                    case 1:
                    case 5:
                        if (a.metadata.thumbnail)a.thumbnailURL = d.settings.media_url.replace(/\/$/, "") + "/uploads/" + a.metadata.thumbnail.replace(/^\//, "");
                        break;
                    case 2:
                    case 4:
                        if (a.metadata.thumbnail)a.thumbnailURL = a.metadata.thumbnail
                }
                if (!d.posts[a.post].media)d.posts[a.post].media = [];
                d.posts[a.post].media.push(a)
            });
        var l = {avatar: DISQUS.jsonData.forum.default_avatar_url, display_name: "Guest"};
        DISQUS.each(d.ordered_highlighted,
            function (b) {
                var c = d.highlighted[b];
                c.author = d.users[c.user_key] || l;
                c.id = b;
                c.stripped = function (a) {
                    var b = c.message.replace(/<.*?>/g, "");
                    if (b.length > a)return b.substring(0, a);
                    return null
                };
                a.highlighted.push(c)
            });
        if (d && d.context.switches.show_unapproved) {
            var o = d.request;
            DISQUS.each(o.ordered_unapproved_posts, function (b) {
                var c = o.unapproved_posts[b];
                c.author = d.users[c.user_key] || l;
                c.id = b;
                a.unapproved.push(c)
            })
        }
        var j = 0;
        DISQUS.lang.forEach(d.ordered_posts, function (b) {
            var c = d.posts[b];
            c.isFirst = !1;
            c.isLast = !1;
            c.id = b;
            c.author = d.users[c.user_key] || l;
            c.even = j % 2 === 0;
            if (c.parent_post_id && d.posts[c.parent_post_id])c.parent = d.posts[c.parent_post_id], c.parent.author = d.users[c.parent.user_key] || l;
            c.stripped = function (a) {
                var b = c.message.replace(/<.*?>/g, "");
                if (b.length > a)return b.substring(0, a);
                return null
            };
            if (j === 0)c.isFirst = !0; else if (b = a.comments[j - 1], b.depth < c.depth)c.isFirst = !0; else if (b.depth > c.depth)b.isLast = !0;
            a.comments.push(c);
            j++
        });
        if (j > 0)a.comments[j - 1].isLast = !0;
        a.thread.page_numbers = [];
        for (g = a.request.page -
            2; g < a.request.page + 2; g++)g > 0 && g <= a.thread.num_pages && a.thread.page_numbers.push(g);
        a.thread.page_numbers[0] == 2 && a.thread.page_numbers.unshift(1);
        a.thread.page_numbers[a.thread.page_numbers.length - 1] == a.thread.num_pages - 1 && a.thread.page_numbers.push(a.thread.num_pages);
        return a
    }

    function d() {
        var b = {};
        DISQUS.lang.forEach(a, function (a) {
            typeof a != "undefined" && DISQUS.lang.extend(b, a)
        });
        return b
    }

    var f, a = {}, g, c = null;
    return{wrap: function (c, g, m) {
        typeof f == "undefined" && (f = b());
        m && (a[c] = m);
        m = d();
        g = g(f, m);
        a[c] &&
        (a[c] = void 0);
        return g
    }, invalidateGlobals: function () {
        f = void 0
    }}
});
DISQUS.define("tooltip", function () {
    var b = function (d, a) {
        a = DISQUS.lang.extend({}, b.defaults, a === void 0 ? {} : a);
        this.element = d;
        this.options = a;
        this.returnTo = this.content = null;
        this.enabled = !0;
        this.init()
    };
    b.prototype = {init: function () {
        var b = this, a = this.element, d = this.options;
        if (d.trigger === "click") {
            var c, e, i, m;
            i = function () {
                b.enter();
                DISQUS.events.remove(a, "click", c);
                setTimeout(function () {
                    e = DISQUS.events.add(document, "click", m)
                }, 0)
            };
            c = DISQUS.events.add(a, "click", i);
            m = function (d) {
                d = d || window.event;
                DISQUS.nodes.closest(d.target ||
                    d.srcElement, ".dsq-tooltip-outer") || (b.hide(), DISQUS.events.remove(document, "click", e), c = DISQUS.events.add(a, "click", i))
            }
        } else d.trigger && (DISQUS.events.add(a, "mouseout", function () {
            b.leave()
        }), DISQUS.events.add(a, "mouseover", function () {
            b.enter()
        }))
    }, show: function () {
        var b = this.getTitle();
        if (this.enabled && (b || this.options.contentId)) {
            var a = this.outer(), d = DISQUS.nodes.get(".dsq-tooltip-inner", a)[0], c;
            this.options.contentId ? (c = "big", this.content = DISQUS.nodes.get("#" + this.options.contentId), this.returnTo =
                this.content.parentNode, d.appendChild(this.content), this.content.setAttribute("style", "display:block !important")) : (c = "small", DISQUS.nodes.addClass(a, "dsq-tooltip-small"), this.options.html ? d.innerHTML = b : typeof d.innerText !== "string" ? d.textContent = b : d.textText = b);
            a.className = "";
            DISQUS.nodes.addClass(a, "dsq-tooltip-outer");
            DISQUS.nodes.addClass(a, "dsq-tooltip-" + c);
            a.style.visibility = "hidden";
            a.style.top = "0";
            a.style.left = "0";
            a.style.display = "block";
            document.body.appendChild(a);
            this.reposition()
        }
    }, reposition: function () {
        var b =
            this.outer(), a = DISQUS.nodes.getPosition(this.element), a = {left: a[0], top: a[1], width: this.element.offsetWidth, height: this.element.offsetHeight};
        b.style.top = a.top - b.offsetHeight + "px";
        b.style.left = a.left + "px";
        b.style.backgroundPosition = a.width / 2 + "px bottom";
        if (!this.options.fade)b.style.visibility = "visible", b.style.opacity = this.options.opacity
    }, hide: function () {
        if (!this.options.fade)this.content && (this.content.setAttribute("style", "display:none !important"), this.returnTo.appendChild(this.content)), this.outer().style.visibility =
            "hidden"
    }, getTitle: function () {
        var b, a = this.element, d = this.options;
        a.title && (a.setAttribute("original-title", a.title), a.removeAttribute("title"));
        typeof d.title == "string" ? b = a.getAttribute(d.title == "title" ? "original-title" : d.title) : typeof d.title == "function" && (b = d.title.call(a));
        return(b = b && b.replace(/(^\s*|\s*$)/, "")) || d.fallback
    }, outer: function () {
        if (!this._outer) {
            var b = this._outer = document.createElement("div");
            b.className = "dsq-tooltip-outer";
            b.style.position = "absolute";
            b.style.zIndex = "9999";
            b.innerHTML =
                '<div class="dsq-tooltip dsq-cleanslate">  <div class="dsq-tooltip-notch"></div>  <div class="dsq-tooltip-inner"></div></div>'
        }
        return this._outer
    }, validate: function () {
        this.$element[0].parentNode || this.hide()
    }, enable: function () {
        this.enabled = !0
    }, disable: function () {
        this.enabled = !1
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    }, leave: function () {
        if (this.hoverState !== "out")this.hoverState = "out", this.options.delayOut === 0 ? this.hide() : setTimeout(function () {
            this.hoverState == "out" && this.hide()
        }, this.options.delayOut)
    },
        enter: function () {
            if (this.hoverState !== "in")this.hoverState = "in", this.options.delayIn === 0 ? this.show() : setTimeout(function () {
                this.hoverState == "in" && this.show()
            }, this.options.delayIn)
        }};
    b.defaults = {delayIn: 0, delayOut: 0, fade: !1, fallback: "", gravity: "n", html: !1, live: !1, opacity: 0.95, title: "title", trigger: "hover", contentId: null, noclip: !1};
    var d = function (d, a) {
        b.call(this, d, a)
    };
    d.prototype = DISQUS.lang.extend({}, b.prototype);
    d.prototype.show = function () {
        var d = this;
        b.prototype.show.call(this);
        DISQUS.events.add(document,
            "click", function g(b) {
                b = b || window.event;
                DISQUS.nodes.closest(b.target || b.srcElement, ".dsq-tooltip-outer") || (d.hide(), DISQUS.events.remove(document, "click", g))
            })
    };
    return{Tooltip: b, ManualTooltip: d}
});
DISQUS.define("comm", function () {
    var b, d, f = {Default: null, Facebook: null, SSO: null, Reply: {}, Auth: {}, Edit: {}, Twitter: {}, Upload: {}};
    return{Default: {create: function (a) {
        if (f.Default !== null)return f.Default;
        var b, c = {remote: DISQUS.settings.get("disqus.debug") ? DISQUS.jsonData.urls.channels.def : DISQUS.settings.get("disqus.urls.media") + "/build/system/def.html#", onReady: function () {
            b.isReady = !0;
            a && a()
        }};
        b = DISQUS.net.rpc(c, {local: {realtimeNotify: function (a) {
            DISQUS.dtpl.actions.fire("messagesx.newEvent", a)
        }}, remote: {api: {},
            echo: {}, enable: {}, flushLog: {}, addMeta: {}, log: {}, setApiKey: {}, realtimePoll: {}, darkRealtimePoll: {}, gaPush: {}}});
        return f.Default = b
    }, recover: function () {
        return f.Default
    }}, Reply: {create: function () {
        var a = Array.prototype.slice.call(arguments), g = a.length, c = a[g - 1], e = arguments[0], i = Object.prototype.toString.call(c) == "[object Function]" ? c : null, m = g > 0 && a[1] != i ? a[1] : 0, m = m || null, a = {}, g = !1;
        if ((!DISQUS.browser.ie || !DISQUS.browser.quirks) && !DISQUS.browser.ie6 && !DISQUS.browser.ie7 && DISQUS.dtpl.actions.registered("comments.reply.onResize",
            !0))a.scrolling = "no", g = !0;
        if (typeof b == "undefined")b = DISQUS.jsonData, d = DISQUS.nodes.getBasicStyles();
        c = {f: b.forum.url, t: b.thread.slug, ff: d.fontFamily, d: d.direction, p: DISQUS.config.def_text, upload_media: DISQUS.jsonData.context.switches.upload_media, mentions: DISQUS.jsonData.context.switches.mentions && DISQUS.jsonData.forum.mentions_enabled, fp_beacon: DISQUS.jsonData.context.switches.fp_beacon};
        DISQUS.config.absorbStyles && DISQUS.extend(c, {fc: d.fontColor, bg: d.backgroundColor});
        c = b.urls.channels.reply + "#" +
            DISQUS.serializeArgs(c);
        if (DISQUS.browser.ie && window.postMessage == null) {
            var k = !1;
            if (typeof window.ActiveXObject != "undefined")try {
                var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (l) {
                    var o = l.GetVariable("$version");
                    o && (o = o.split(" ")[1].split(","), parseInt(o[0], 10) == 10 && (k = !0))
                }
            } catch (j) {
            }
            if (!k && !DISQUS.nodes.get("#dsq-old-flash-notice"))l = DISQUS.nodes.get("#disqus_thread"), o = document.createElement("div"), o.id = "dsq-old-flash-notice", o.className = "dsq-notice", o.innerHTML = DISQUS.renderBlock("oldFlashMessage"),
                l.insertBefore(o, l.firstChild)
        }
        var h = DISQUS.net.rpc({
            remote: c, container: e, props: a, onReady: function () {
                var a = DISQUS.nodes.get(".dsq-iframe-loading", e);
                a.length && e.removeChild(a[0]);
                a = b.posts[m] || {};
                h.setState(a.id || null, a.depth === void 0 ? null : a.depth, DISQUS.jsonData.forum.id, DISQUS.jsonData.thread.id);
                h.setData({users: DISQUS.jsonData.users, browser: DISQUS.browser, media_url: DISQUS.jsonData.media_url});
                h.isReady = !0;
                i && i();
                if (DISQUS.browser.ie && DISQUS.browser.quirks && this - fluid)a = DISQUS.nodes.get("iframe",
                    e)[0], a.style.width = parseInt(a.parentNode.offsetWidth, 10) + "px"
            }, appendElement: !0}, {local: {cookieFailure: function () {
            DISQUS.dtpl.actions.fire("cookies.onFailure")
        }, resizeFrame: function (a, b) {
            DISQUS.dtpl.actions.fire("comments.reply.onResize", b, a)
        }, onFocus: function () {
            DISQUS.dtpl.actions.fire("comments.reply.onFocus", m)
        }, onBlur: function () {
            DISQUS.dtpl.actions.fire("comments.reply.onBlur", m)
        }, onUploadAdd: function (a) {
            DISQUS.dtpl.actions.fire("__.comments.reply.media.upload.onResponse", a, m)
        }, onUploadRemove: function (a) {
            DISQUS.dtpl.actions.fire("__.comments.reply.media.remove.onResponse",
                a, m)
        }, onSuggest: function (a, b) {
            DISQUS.dtpl.actions.fire("comments.reply.mentions.suggest", a, b || void 0)
        }, onSuggestMove: function (a, b) {
            DISQUS.dtpl.actions.fire("comments.reply.mentions.move", a, b || void 0)
        }, onSuggestSelect: function (a) {
            DISQUS.dtpl.actions.fire("comments.reply.mentions.selectActive", a || void 0)
        }, onSuggestClear: function (a) {
            DISQUS.dtpl.actions.fire("comments.reply.mentions.clear", a || void 0)
        }}, remote: {show: {}, post: {}, postAsGuest: {}, validate: {}, setState: {}, focus: {}, setupResize: {}, setData: {}, selectUser: {}}});
        g && h.setupResize();
        return f.Reply[m] = h
    }, recover: function (a) {
        return f.Reply[a || null]
    }, reset: function () {
        f.Reply = {}
    }}, Auth: {create: function (a, g, c) {
        if (typeof b == "undefined")b = DISQUS.jsonData, d = DISQUS.nodes.getBasicStyles();
        var e = {f: b.forum.url, t: b.thread.slug, to_redirect: window.location, cbp: DISQUS.config.callback_params, ff: d.fontFamily, fc: d.fontColor, ac: d.anchorColor, lang: b.forum.language};
        if (DISQUS.config.frame_theme)e.theme = DISQUS.config.frame_theme;
        var e = DISQUS.getResourceURL(b.urls.channels.auth,
            e, !0), i = DISQUS.net.rpc({remote: e, onReady: function () {
            i.isReady = !0;
            c && c()
        }, container: a}, {local: {onAuth: function (a) {
            DISQUS.states.loginDisabled ? DISQUS.popup.close(null, !0) : DISQUS.reload(function () {
                g(a)
            })
        }, onSignupViewed: function () {
            DISQUS.trigger("signup.viewed")
        }}, remote: {focus: {}}});
        return f.Auth.def = i
    }, recover: function () {
        return f.Auth.def
    }}, Edit: {create: function (a, g, c) {
        if (typeof b == "undefined")b = DISQUS.jsonData, d = DISQUS.nodes.getBasicStyles();
        var e = DISQUS.getResourceURL(b.urls.channels.edit, {f: b.forum.url,
            t: b.thread.slug, p: g, ff: d.fontFamily}, !0), i = DISQUS.net.rpc({remote: e, container: a, onReady: function () {
            i.isReady = !0;
            c && c()
        }}, {local: {}, remote: {save: {}, focus: {}}});
        f.Edit[g] = i;
        if (a = DISQUS.nodes.get("#dsq-edit-textarea-" + g))if (a.style.display = "none", g = DISQUS.nodes.get("#dsq-edit-iframe-" + g))g.style.display = "block", a.parentNode.appendChild(g);
        return i
    }, recover: function (a) {
        return f.Edit[a]
    }}, Twitter: {create: function (a, b, c) {
        var d = DISQUS.net.rpc({remote: DISQUS.jsonData.urls.channels.tweetbox, container: a, onReady: function () {
            d.isReady = !0;
            b && b()
        }}, {local: {onTweet: function () {
            c && c()
        }}, remote: {setContent: {}}});
        return f.Twitter = d
    }, recover: function () {
        return f.Twitter
    }}, Facebook: {create: function (a, b) {
        var c = DISQUS.jsonData.urls.channels.facebook;
        c += "#" + DISQUS.serializeArgs({f: DISQUS.jsonData.forum.url});
        var d = DISQUS.net.rpc({remote: c, container: a, props: {scrolling: "no"}, onReady: function () {
            d.isReady = !0;
            if (b.onReady)b.onReady()
        }}, {local: {onSuccess: function () {
            if (b.onSuccess)b.onSuccess()
        }, onBusy: function () {
            if (b.onBusy)b.onBusy()
        }, onFailure: function () {
            if (b.onFailure)b.onFailure()
        }},
            remote: {authenticatePublisherSession: {}, authenticatePublicSessionData: {}, init: {}, streamPublish: {}}});
        return f.Facebook = d
    }, recover: function () {
        return f.Facebook
    }}, SSO: {create: function (a, b) {
        var c = DISQUS.net.rpc({remote: DISQUS.jsonData.urls.channels.sso, onReady: function () {
            c.isReady = !0;
            a !== void 0 && a()
        }}, {local: {onSuccess: function () {
            b !== void 0 && b()
        }}, remote: {authenticate: {}}});
        return f.SSO = c
    }, recover: function () {
        return f.SSO
    }}, Upload: {create: function (a, d) {
        if (a) {
            DISQUS.jsonData.request.display_sharing_options &&
            DISQUS.nodes.addClass(a, "dsq-attach-media-border");
            var d = d || null, c = DISQUS.jsonData.urls.channels.upload;
            c += "#" + DISQUS.serializeArgs({f: b.forum.url, t: b.thread.slug});
            var e = new DISQUS.net.rpc({remote: c, container: a, props: {scrolling: "no", allowTransparency: "true"}, onReady: function () {
                e.setupUpload(d || "", DISQUS.jsonData.forum.id, DISQUS.jsonData.thread.id);
                e.isReady = !0
            }}, {local: {onUploadStart: function () {
                DISQUS.dtpl.actions.fire("__.comments.reply.media.upload", d)
            }, onUpload: function (a) {
                DISQUS.dtpl.actions.fire("__.comments.reply.media.upload.onResponse",
                    a, d)
            }}, remote: {setupUpload: {}, media: {}}});
            return f.Upload[d] = e
        }
    }, recover: function (a) {
        return f.Upload[a || null]
    }}, reset: function (a) {
        function g(a) {
            a && a.destroy()
        }

        DISQUS.each(f, function (b, d) {
            d === "Default" && a || b !== null && (b.origin && b.destroy ? g(b) : DISQUS.each(b, g))
        });
        b = d = void 0
    }, ensureLoggedIn: function (a, b, c) {
        c = c || {};
        if (DISQUS.jsonData.request.is_authenticated)a(); else {
            switch (b) {
                case "disqus":
                    b = new DISQUS.ui.DisqusLoginBox;
                    break;
                case "twitter":
                    b = new DISQUS.ui.TwitterLoginBox;
                    break;
                case "yahoo":
                    b = new DISQUS.ui.YahooLoginBox;
                    break;
                case "openid":
                    b = new DISQUS.ui.OpenIDLoginBox;
                    break;
                case "google":
                    b = new DISQUS.ui.GoogleLoginBox;
                    break;
                case "facebook":
                    b = DISQUS.FB.publisherKeySupported() ? new DISQUS.ui.PublisherFacebookLoginBox : new DISQUS.ui.DefaultFacebookLoginBox;
                    break;
                case "sso":
                    b = new DISQUS.ui.SSOLoginBox;
                    break;
                case "postas":
                    b = new DISQUS.ui.LoginBox(c, {title: "Before we post this, who are you?", guestTab: !0});
                    break;
                default:
                    b = new DISQUS.ui.LoginBox(c)
            }
            b.onClose = function () {
                if (DISQUS.jsonData.request.is_authenticated)a(); else if (typeof c.onFailure ==
                    "function")c.onFailure()
            };
            b.open()
        }
    }
    }
});
DISQUS.define("ui", function () {
    var b = {}, d = 0, f = function () {
        this.guid = ++d;
        b[this.guid] = this
    };
    DISQUS.extend(f, {closeAll: function () {
        DISQUS.lang.forEach(b, function (a) {
            a.close()
        })
    }, last: function () {
        return b[d]
    }});
    f.prototype = {
        init: function () {
            var a = this, b = a - fluid;
            b.className = "dsq-popup dsq-popup-message " + (a.extra || "");
            DISQUS.browser.ie6 || DISQUS.browser.ie7 ? DISQUS.events.execOnReady(function () {
                a._onContentReady()
            }) : a._onContentReady();
            (b = DISQUS.nodes.get(".dsq-popup-close", b)) && b.length && DISQUS.events.add(b[0],
                "mouseup", function () {
                    a.close()
                });
            a.mouseUpListener = function (b) {
                DISQUS.nodes.closest(b.target || b.srcElement, "#" + a - fluid.id) || a.close()
            };
            a.keyUpListener = function (b) {
                b.keyCode == 27 && a.close()
            };
            DISQUS.bean.add(document, "mouseup", a.mouseUpListener);
            DISQUS.bean.add(document, "keyup", a.keyUpListener)
        }, _onContentReady: function () {
            var a = this - fluid;
            DISQUS.nodes.body().appendChild(a);
            a.style.display = "block";
            this.reposition();
            if (this.onReady)this.onReady()
        }, open: function (a) {
            f.closeAll();
            DISQUS.extend(this,
                a || {});
            var b = this.title || "", c = this.body || "", d = this - fluid = document.createElement("div");
            d.id = "dsq-popup-message";
            d.innerHTML = DISQUS.renderBlock("popup", {strict: a.strict, popupHeader: b, popupBody: c, popupClass: "", footer: typeof a.footer !== "undefined" ? a.footer : !0});
            this.init();
            return d
        }, close: function () {
            var a = this - fluid;
            if (a) {
                if (this.mouseUpListener)DISQUS.bean.remove(document, "mouseup", this.mouseUpListener), this.mouseUpListener = null;
                if (this.keyUpListener)DISQUS.bean.remove(document, "keyup", this.keyUpListener),
                    this.keyUpListener = null;
                var c = DISQUS.nodes.get("#dsq-overlay");
                c && DISQUS.nodes.remove(c);
                try {
                    DISQUS.nodes.remove(a)
                }
                catch (d) {
                    for (var c = a.getElementsByTagName("IFRAME"), e = 0; e < c.length; e++)c[e].parentNode.removeChild(c[e]);
                    a.parentNode.removeChild(a)
                }
                this - fluid = null;
                if (this.onClose)this.onClose();
                b[this.guid] = null;
                delete b[this.guid]
            }
        }, reposition: function () {
            var a = this - fluid;
            if (!a)return !1;
            var b = DISQUS.window.getSize(), c = (b[0] - a.offsetWidth) / 2, b = (b[1] - a.offsetHeight) / 2;
            DISQUS.browser.ie6 && (b =
                DISQUS.window.getScrollPosition()[1]);
            a.style.left = c + "px";
            a.style.top = b + "px";
            return !0
        }
    };
    var a = function () {
        f.call(this)
    };
    DISQUS.extend(a.prototype, f.prototype, {
        open: function (a) {
            DISQUS.extend(this, a || {});
            this.body = '<div class="dsq-border" style="width:' + a.width + "px; height:" + a.height + 'px"><a href="#" class="dsq-modal-close-btn" onclick="DISQUS.popup.close(null, true); return false">Close</a><div class="dsq-popup-raw-container"></div></div>';
            var b = this - fluid = document.createElement("div");
            b.id = "dsq-popup-message";
            b.innerHTML = this.body;
            this.extra = "dsq-popup-raw";
            this.init();
            var c = DISQUS.nodes.createIframe(a.url, {}, {width: "100%", height: "100%", scrolling: "no", frameBorder: "0", frameSpacing: "0", style: "visibility:hidden"}), b = DISQUS.nodes.get(".dsq-popup-raw-container", this - fluid)[0];
            b.appendChild(c);
            c.onreadystatechange = c.onload = function () {
                c.style.visibility = "visible"
            };
            return b
        }
    });
    var g = function () {
        f.call(this)
    };
    DISQUS.extend(g.prototype, a.prototype, {
        open: function (b) {
            b = b || {};
            typeof b === "string" && (b = {username: b});
            var c = DISQUS.config && DISQUS.config.domain ? "http://" + DISQUS.config.domain : DISQUS.settings.get("disqus.urls.main");
            c += (b.anonymous ? "/embed/u/guest/" : "/embed/u/") + b.username;
            var c = DISQUS.getResourceURL(c, {is_moderator: b.isModerator, forum: b.forum, lang: b.lang}), d = 570, e = 525, f = DISQUS.jsonData && DISQUS.jsonData.context.active_gargoyle_switches;
            f && DISQUS.contains(f, "new_embed_profile") && (d = 710, e = 399);
            a.prototype.open.call(this, {url: c, width: d, height: e, onClose: b.onClose})
        }});
    var c = function () {
        this.tabs = {};
        this.enabledTab =
            null
    };
    DISQUS.extend(c.prototype, f.prototype, {open: function (a) {
        var b = this, a = a || {};
        DISQUS.extend(a, {strict: !0, title: DISQUS.strings.get("Edit your profile"), extra: "dsq-profile-edit-modal", onClose: b.onClose, onReady: function () {
            b.onContentReady(a.selectedTab)
        }});
        b.lang = a.lang || "en";
        DISQUS.request.get(DISQUS.settings.get("disqus.urls.unmerged") || DISQUS.jsonData.urls.unmerged_profiles, {}, !0);
        var c = function (d) {
            DISQUS.dtpl.actions.remove("profile.getUnmerged.onSuccess", c);
            b.has_unmerged_users = d;
            f.prototype.open.call(b,
                DISQUS.extend(a, {body: DISQUS.renderBlock("profileEdit", {has_unmerged_users: d})}))
        };
        DISQUS.dtpl.actions.register("profile.getUnmerged.onSuccess", c)
    }, onContentReady: function (a) {
        var b = this.tabs, c = this.lang, d = DISQUS.ui, e = DISQUS.settings.get("disqus.urls.main"), f = DISQUS.config.page ? encodeURIComponent(DISQUS.config.page.url) : "";
        if (this.has_unmerged_users)b.merge = new d.LoginBoxTab(this, "dsq-tab-profile-merge", new d.iFrameContent("dsq-profile-merge", e + "/embed/profile/merge?thread_url=" + f + "&lang=" + c));
        b.edit =
            new d.LoginBoxTab(this, "dsq-tab-profile-edit", new d.iFrameContent("dsq-profile-edit", e + "/embed/profile/info?thread_url=" + f + "&lang=" + c));
        b.avatar = new d.LoginBoxTab(this, "dsq-tab-profile-avatar", new d.iFrameContent("dsq-profile-avatar", e + "/embed/profile/avatar?thread_url=" + f + "&lang=" + c));
        b.services = new d.LoginBoxTab(this, "dsq-tab-profile-services", new d.iFrameContent("dsq-profile-services", e + "/embed/profile/connections?thread_url=" + f + "&lang=" + c));
        b.notifications = new d.LoginBoxTab(this, "dsq-tab-profile-notifications",
            new d.iFrameContent("dsq-profile-notifications", e + "/embed/account/notifications?thread_url=" + f + "&lang=" + c));
        b.account = new d.LoginBoxTab(this, "dsq-tab-profile-account", new d.iFrameContent("dsq-profile-account", e + "/embed/account?thread_url=" + f + "&lang=" + c));
        b.apps = new d.LoginBoxTab(this, "dsq-tab-profile-apps", new d.iFrameContent("dsq-profile-apps", e + "/embed/account/apps/?lang=" + c));
        a && b[a] ? b[a].enable() : (b.merge || b.edit).enable()
    }});
    var e = function () {
        f.call(this)
    };
    DISQUS.extend(e.prototype, a.prototype,
        {open: function (b) {
            b = b || {url: DISQUS.jsonData.urls.community};
            typeof b === "string" && (b = {url: b});
            var c = DISQUS.getResourceURL(b.url, {lang: b.lang});
            a.prototype.open.call(this, {url: c, width: 700, height: 525, onClose: b.onClose})
        }});
    var i = function () {
        this.name = "disqus_edit_profile_" + DISQUS.getGuid()
    };
    i.prototype = {open: function (a) {
        a = DISQUS.getResourceURL(DISQUS.jsonData.urls.edit_profile_window, {lang: a.lang});
        this.window = window.open(a, "_blank", "location=no,status=no,width=650,height=440,menubar=no")
    }};
    var m = function (a) {
        this.name =
            "disqus_" + DISQUS.getGuid();
        DISQUS.extend(this, a || {})
    };
    m.prototype = {
        open: function () {
            var a = this;
            a.window = window.open(a.url, a.name, "location=0,status=0,width=" + (a.width || 800) + ",height=" + (a.height || 400));
            a.window && DISQUS.defer(function () {
                return DISQUS.window.isClosed(a.window)
            }, function () {
                a.reload()
            })
        }, reload: function () {
            var a = this;
            DISQUS.reload(function () {
                a.onClose()
            })
        }, close: function () {
            this.window && window.close()
        }
    };
    var k = function (a, b) {
        this.opts = b || {};
        this - fluid = DISQUS.nodes.get("#" + a)
    };
    k.prototype =
    {
        show: function () {
            DISQUS.nodes.show(this - fluid, !0);
            var a = DISQUS.nodes.get("input", this - fluid);
            a.length && !this.opts.noAutoFocus && a[0].focus()
        }, hide: function () {
        DISQUS.nodes.hide(this - fluid, !0)
    }
    };
    var l = function (a, b, c) {
        var d = a ? "-" + a : "";
        k.call(this, "dsq-login-guest" + d, c);
        DISQUS.events.add(DISQUS.nodes.get("#dsq-field-email" + d), "keyup", function (a) {
            var b = (a.target || a.srcElement).value, a = "";
            if (b) {
                for (var b = b.split("@")[0].split("."), c = 0; c < b.length; c++)a += b[c].charAt(0).toUpperCase() + b[c].slice(1) +
                    " ";
                a = DISQUS.lang.trim(a)
            } else a = void 0;
            if (a)DISQUS.nodes.get("#dsq-field-name" + d).value = a
        });
        var e = DISQUS.nodes.get("a", DISQUS.nodes.get(".dsq-login-add-url")[0])[0];
        e && DISQUS.events.add(e, "click", function (a) {
            DISQUS.nodes.hide(e.parentNode.parentNode, !0);
            DISQUS.nodes.show(DISQUS.nodes.get("#dsq-optional-field-website"), !0);
            a.preventDefault()
        });
        c = DISQUS.nodes.get("#dsq-submit-guest" + d);
        DISQUS.events.add(c, "click", function () {
            DISQUS.dtpl.validators.guestFields(a) && b(this)
        })
    };
    DISQUS.extend(l.prototype,
        k.prototype);
    var o = function (a, b, c) {
        var d = this;
        a ? parseInt(a, 10) && (a = "dsq-login-disqus-" + a) : a = "dsq-login-disqus";
        k.call(d, a, c);
        d.iframeReady = !1;
        d.focusOnReady = !1;
        var e = DISQUS.comm.Auth.create(d - fluid, b, function () {
            d.iframeReady = !0;
            d.focusOnReady && e.focus()
        })
    };
    DISQUS.extend(o.prototype, k.prototype, {
        show: function () {
            k.prototype.show.call(this);
            this.iframeReady ? this.opts.noAutoFocus || DISQUS.comm.Auth.recover().focus() : this.focusOnReady = !0
        }
    });
    var j = function (a, b) {
        var c = this, d = DISQUS.nodes.get, e = DISQUS.nodes.hide,
            f = DISQUS.nodes.show;
        k.call(this, b || "dsq-login-facebook-content");
        var g = DISQUS.nodes.get("#dsq-login-facebook-frame");
        c.rpc = DISQUS.comm.Facebook.create(g, {
            onReady: function () {
                c.rpc.init()
            }, onBusy: function () {
                e(d(".dsq-connect-msg", c - fluid)[0], !0);
                f(d(".dsq-remote-authentication", c - fluid)[0], !0)
            }, onFailure: function () {
                f(d(".dsq-connect-msg", c - fluid)[0], !0);
                e(d(".dsq-remote-authentication", c - fluid)[0], !0)
            }, onSuccess: function () {
                DISQUS.reload(function () {
                    a.close()
                })
            }
        })
    };
    DISQUS.extend(j.prototype,
        k.prototype);
    var h = function (a, b) {
        k.call(this, "dsq-login-" + b);
        var c = this, d = DISQUS.nodes.get(".dsq-external-launcher", this - fluid)[0];
        DISQUS.events.add(d, "click", function () {
            DISQUS.nodes.hide(DISQUS.nodes.get(".dsq-connect-msg", c - fluid)[0], !0);
            DISQUS.nodes.show(DISQUS.nodes.get(".dsq-remote-authentication", c - fluid)[0], !0);
            DISQUS.comm.ensureLoggedIn(function () {
                a.close()
            }, b, {
                onFailure: function () {
                    DISQUS.nodes.hide(DISQUS.nodes.get(".dsq-remote-authentication", c - fluid)[0], !0);
                    DISQUS.nodes.show(DISQUS.nodes.get(".dsq-connect-msg",
                        c - fluid)[0], !0)
                }
            })
        })
    };
    DISQUS.extend(h.prototype, k.prototype);
    var p = function (a) {
        h.call(this, a, "yahoo")
    };
    DISQUS.extend(p.prototype, h.prototype);
    var s = function (a) {
        h.call(this, a, "twitter")
    };
    DISQUS.extend(s.prototype, h.prototype);
    var u = function (a) {
        h.call(this, a, "facebook")
    };
    DISQUS.extend(u.prototype, h.prototype);
    var q = function (a) {
        h.call(this, a, "google")
    };
    DISQUS.extend(q.prototype, h.prototype);
    var C = function (a) {
        k.call(this, "dsq-login-openid");
        var b = DISQUS.nodes.get("#dsq-openid-submit-button");
        DISQUS.events.add(b,
            "click", function () {
                var b, c, d = DISQUS.jsonData.urls.openid_connect, e = DISQUS.nodes.get("#dsq-openid-url").value;
                /^\s*$/.test(e) || (d = DISQUS.getResourceURL(d, {url: e, username: DISQUS.nodes.get("#dsq-openid-username").value}), b = window.open(d, "openidWindow", "location=0,status=0,width=800,height=500"), c = setInterval(function () {
                    DISQUS.window.isClosed(b) && (clearInterval(c), DISQUS.reload(function () {
                        a.close()
                    }))
                }, 500))
            })
    };
    DISQUS.extend(C.prototype, k.prototype);
    var v = function (a) {
        h.call(this, a, "sso")
    };
    DISQUS.extend(v.prototype,
        h.prototype);
    var r = function (a, b) {
        k.call(this, a);
        this.url = DISQUS.serialize(b, {}, !0);
        this.iframe = null
    };
    DISQUS.extend(r.prototype, k.prototype, {show: function () {
        var a = this;
        if (!this.iframe)this.iframe = DISQUS.nodes.createIframe(this.url, {}, {style: "display:none !important;", frameBorder: "0", frameSpacing: "0", height: "100%", width: "100%"}), DISQUS.events.add(this.iframe, "load", function () {
            DISQUS.nodes.hide(a.spinner, !0);
            DISQUS.nodes.show(a.iframe, !0)
        }), this.spinner = document.createElement("img"), this.spinner.src =
            DISQUS.settings.get("disqus.urls.media") + "/images/dsq-loader.gif", this - fluid.appendChild(this.spinner), this - fluid.appendChild(this.iframe);
        k.prototype.show.call(this)
    }
    });
    var I = function (a, b, c) {
        var d = this;
        d.parent = a;
        d.tabNode = DISQUS.nodes.get("#" + b);
        d.content = c;
        a = DISQUS.nodes.get("a", d.tabNode)[0];
        DISQUS.events.add(a, "click", function (a) {
            d.enable();
            a.preventDefault();
            return !1
        })
    };
    I.prototype = {
        enable: function () {
            this.parent.enabledTab && this.parent.enabledTab.disable();
            DISQUS.nodes.addClass(this.tabNode,
                "dsq-active");
            this.content.show();
            this.parent.enabledTab = this
        }, disable: function () {
            DISQUS.nodes.removeClass(this.tabNode, "dsq-active");
            this.content.hide()
        }};
    var B = function (a, b) {
        this.events = a;
        this.tabs = {};
        this.tabsArray = [];
        this.enabledTab = null;
        b = b || {};
        this.title = DISQUS.strings.get(b.title || "Login or Register");
        this.guestTab = b.guestTab || !1
    };
    DISQUS.extend(B.prototype, f.prototype, {open: function (a) {
        var b = this, a = a || {};
        DISQUS.extend(a, {strict: !0, title: b.title, body: DISQUS.renderBlock("loginPopup", {guestTab: b.guestTab}),
            extra: "dsq-login-box", onClose: b.onClose, onReady: function () {
                b.onContentReady(a.selectedTab)
            }});
        f.prototype.open.call(b, a)
    }, onContentReady: function () {
        var a = this, b = DISQUS.ui;
        DISQUS.jsonData.forum.allow_anon_post && a.guestTab && a.add("guest", new b.LoginBoxTab(this, "dsq-login-tab-guest", new b.GuestLoginContent(null, function () {
            a.events.onGuest();
            a.close()
        })));
        var c;
        if (DISQUS.config.sso && (a.add("sso", new b.LoginBoxTab(this, "dsq-login-tab-sso", new b.SSOLoginContent(this))), DISQUS.config.sso.icon))c = DISQUS.nodes.get("span",
            DISQUS.nodes.get("#dsq-login-tab-sso"))[0], c.style.cssText = "background: url(" + DISQUS.config.sso.icon + ") !important;";
        DISQUS.jsonData.forum.disqus_auth_disabled || a.add("disqus", new b.LoginBoxTab(this, "dsq-login-tab-disqus", DISQUS.states.useLoginWindow ? new b.ExternalLoginContent(this, "disqus") : new b.DisqusLoginContent(null, function (b) {
            b.newUser && DISQUS.dtpl.actions.fire("user.newUser.onSuccess");
            a.close()
        })));
        c = null;
        (c = DISQUS.FB.publisherKeySupported() ? new b.PublisherFacebookLoginContent(this) : new b.DefaultFacebookLoginContent(this,
            "dsq-login-facebook")) && a.add("facebook", new b.LoginBoxTab(this, "dsq-login-tab-facebook", c));
        a.add("google", new b.LoginBoxTab(this, "dsq-login-tab-google", new b.GoogleLoginContent(this)));
        a.add("twitter", new b.LoginBoxTab(this, "dsq-login-tab-twitter", new b.TwitterLoginContent(this)));
        a.add("yahoo", new b.LoginBoxTab(this, "dsq-login-tab-yahoo", new b.YahooLoginContent(this)));
        a.add("openid", new b.LoginBoxTab(this, "dsq-login-tab-openid", new b.OpenIdLoginContent(this)));
        this.tabsArray[0].enable()
    }, add: function (a, b) {
        this.tabs[a] = b;
        this.tabsArray.push(b)
    }});
    var G = function () {
    };
    DISQUS.extend(G.prototype, f.prototype, {open: function (a) {
        var b = this, a = a || {};
        if (DISQUS.states.useLoginWindow) {
            a = DISQUS.nodes.getIframeDefaults();
            a.is_popup = !0;
            var c = window.open(DISQUS.getResourceURL(DISQUS.jsonData.urls.channels.auth, a, !0), "_blank", "height=420,width=400");
            window.focus && c.focus();
            var d = setInterval(function () {
                DISQUS.window.isClosed(c) && (clearInterval(d), DISQUS.reload(function () {
                    b.onClose()
                }))
            }, 500)
        } else DISQUS.extend(a, {strict: !1,
            title: DISQUS.strings.get("Login or Register"), body: '<div id="dsq-login-iframe-wrapper" style="height:320px;"></div>', extra: "dsq-popup-login", onClose: b.onClose, onReady: function () {
                b.content = new o("dsq-login-iframe-wrapper", function (a) {
                    a.newUser && DISQUS.dtpl.actions.fire("user.newUser.onSuccess");
                    b.close()
                });
                b.content.show()
            }}), f.prototype.open.call(b, a)
    }});
    var H = function () {
        m.call(this, {url: DISQUS.jsonData.urls.twitter_connect, width: 800, height: 698})
    };
    DISQUS.extend(H.prototype, m.prototype);
    var J = function () {
        m.call(this,
            {url: DISQUS.jsonData.urls.googleConnect, width: 800, height: 400})
    };
    DISQUS.extend(J.prototype, m.prototype);
    var A = function () {
        m.call(this, {url: DISQUS.jsonData.urls.yahoo_connect, width: 800, height: 400})
    };
    DISQUS.extend(A.prototype, m.prototype);
    var n = function () {
        var a = DISQUS.config.sso;
        m.call(this, {url: a.url, width: a.width || 800, height: a.height || 400})
    };
    DISQUS.extend(n.prototype, m.prototype, {reload: function () {
        window.location.reload()
    }});
    var K = function () {
    };
    DISQUS.extend(K.prototype, f.prototype, {open: function () {
        var a =
            this, b = {title: DISQUS.strings.get("Sign in with OpenID"), body: DISQUS.renderBlock("openidForm"), onClose: a.onClose, onReady: function () {
            a.content = new C(a)
        }};
        f.prototype.open.call(a, b)
    }});
    var x = function () {
    };
    DISQUS.extend(x.prototype, f.prototype, {open: function () {
        var a = this;
        f.prototype.open.call(this, {title: DISQUS.strings.get("Sign in using Facebook"), body: DISQUS.renderBlock("facebookLoginForm", {title: !1}), onClose: a.onClose, onReady: function () {
            a.content = new j(a)
        }})
    }});
    var D = function () {
    };
    D.prototype.open = function () {
        var a =
            this;
        DISQUS.FB.init(function () {
            DISQUS.FB.login(function () {
                DISQUS.FB.authenticateViaPublisherKey(function () {
                    DISQUS.reload(function () {
                        if (a.onClose)a.onClose()
                    })
                })
            }, function () {
                if (a.onClose)a.onClose()
            })
        })
    };
    return{Modal: f, IframeModal: a, ProfileModal: g, ProfileEditModal: c, ProfileEditNewWindow: i, ForumCommunityModal: e, NewWindowModal: m, ContentBase: k, GuestLoginContent: l, DisqusLoginContent: o, DefaultFacebookLoginContent: j, ExternalLoginContent: h, YahooLoginContent: p, TwitterLoginContent: s, PublisherFacebookLoginContent: u,
        GoogleLoginContent: q, OpenIdLoginContent: C, SSOLoginContent: v, iFrameContent: r, LoginBoxTab: I, LoginBox: B, DisqusLoginBox: G, TwitterLoginBox: H, GoogleLoginBox: J, YahooLoginBox: A, SSOLoginBox: n, OpenIDLoginBox: K, DefaultFacebookLoginBox: x, PublisherFacebookLoginBox: D, applyTooltips: function (a) {
            typeof a === "undefined" && (a = DISQUS.nodes.get("#disqus_thread"));
            a = DISQUS.nodes.get(".dsq-tt", a);
            DISQUS.lang.forEach(a, function (a) {
                new DISQUS.tooltip.Tooltip(a, {gravity: "s", trigger: "hover", opacity: 0.96, html: !0, contentId: a.getAttribute("data-dsq-content-id")})
            })
        },
        truncateComments: function (a) {
            var a = DISQUS.nodes.get(".dsq-comment-message", a), b = DISQUS.jsonData.forum.comment_max_words;
            DISQUS.lang.forEach(a, function (a) {
                (a = a.id.match(/\d+$/)) && a.length && b > 0 && DISQUS.dtpl.actions.fire("comments.text.collapse", a[0])
            })
        }
    }
});
(function () {
    DISQUS.ui.PublisherFacebookLoginBox.prototype.show = DISQUS.ui.PublisherFacebookLoginBox.prototype.open;
    DISQUS.ui.FacebookLoginBox = DISQUS.ui.PublisherFacebookLoginBox;
    DISQUS.api = DISQUS.api || {};
    DISQUS.api.FacebookLoginBox = DISQUS.ui.FacebookLoginBox
})();
DISQUS.define("sso", function () {
    return {auth: function (b) {
        var d = DISQUS.comm.SSO.create(function () {
            d.authenticate(b)
        }, function () {
            if (b.onSuccess)b.onSuccess()
        })
    }}
});
DISQUS.ReplyFrame = function (b, d) {
    this.frame = null;
    this - fluid = b;
    this.id = d;
    this._type = b.id && b.id.match(/edit/) ? "edit" : "reply"
};
DISQUS.ReplyFrame.prototype = {setState: function () {
}, init: function () {
    this.frame = this._type == "edit" ? DISQUS.comm.Edit.create(this - fluid.id, this.id) : DISQUS.comm.Reply.create(this - fluid.id, this.id)
}};
DISQUS.TweetFrame = function (b, d) {
    var f = DISQUS.comm.Twitter.create(b, d.onReady, d.onSuccess);
    this.init = function () {
    };
    this.setContent = function (a) {
        f.setContent(a)
    }
};
DISQUS.define("FB", function () {
    function b() {
        if (!DISQUS.nodes.get("#fb-root")) {
            var a = document.createElement("div");
            a.id = "fb-root";
            DISQUS.nodes.get("#disqus_thread").appendChild(a)
        }
    }

    function d(b) {
        return function () {
            a[b].apply(a, arguments)
        }
    }

    var f = [], a = null, g = function () {
        this.authResponse = null
    };
    g.prototype = {
        init: function (a, b) {
            FB.init({apiKey: a, channelUrl: b, status: !0, cookie: !0, oauth: !0})
        }, login: function (a, b) {
            var c = this;
            FB.login(function (d) {
                d.authResponse ? (c.authResponse = d.authResponse, a()) : (c.session = null,
                    b())
            })
        }, authenticateViaPublisherKey: function (a) {
            FB.login(function (b) {
                var c = DISQUS.comm.Facebook.create(null, {onReady: function () {
                    c.authenticatePublisherSession(b.authResponse)
                }, onSuccess: a})
            })
        }, streamPublish: function (a, b, c) {
            FB.ui({method: "stream.publish", message: a, attachment: b}, function (a, b) {
                typeof c === "function" && c(a, b)
            })
        }, streamShare: function (a, b, c) {
            FB.ui({method: "stream.share", u: b.href}, function (a) {
                typeof c === "function" && c(a.post_id)
            })
        }};
    var c = function (a) {
        this.rpc = a
    };
    c.prototype = {init: function () {
        this.rpc.init()
    },
        streamPublish: function (a, b, c) {
            this.rpc.streamPublish(a, b, c)
        }, streamShare: function (a, b, c) {
            this.rpc.streamPublish(a, b, c)
        }, authenticateViaPublisherKey: function () {
        }};
    return{init: function () {
        DISQUS.FB.init = function (b) {
            typeof b === "function" && f.push(b);
            if (a)for (; f.length;)f.shift()()
        };
        DISQUS.FB.init();
        if (DISQUS.FB.publisherKeySupported())b(), window.FB || DISQUS.require("http://connect.facebook.net/en_US/all.js"), DISQUS.addJob(function () {
            return window.FB && FB.init
        }, function () {
            a = new g;
            a.init(DISQUS.config.facebook_key ||
                DISQUS.jsonData.context.forum_facebook_key, window.facebookXdReceiverPath || null);
            DISQUS.FB.init()
        }); else var d = DISQUS.comm.Facebook.create(null, {onReady: function () {
            a = new c(d);
            a.init();
            DISQUS.FB.init()
        }})
    }, publisherKeySupported: function () {
        return(DISQUS.config.facebook_key || DISQUS.jsonData.context.forum_facebook_key) && !(window.FB && FB.dynData)
    }, authenticateViaPublisherKey: d("authenticateViaPublisherKey"), login: d("login"), streamShare: d("streamShare"), streamPublish: d("streamPublish")}
});
(function () {
    function b(a) {
        DISQUS.each(a, function (a) {
            k.push(a)
        })
    }

    function d() {
        var a = DISQUS.jsonData.request;
        return a.is_authenticated ? a.remote_domain || "disqus" : "not_logged_in"
    }

    function f() {
        var a = function (a, b) {
            DISQUS.dtpl.actions.register(a, function () {
                b.apply(this, arguments);
                return!0
            })
        };
        a("thread.vote", function (a) {
            a == 1 ? j("like_thread") : a == -1 && j("dislike_thread")
        });
        a("comments.like", function () {
            j("like_comment")
        });
        a("comments.report", function (a, b) {
            b && j("flag_comment")
        });
        a("comments.send", function (a) {
            e ==
                "not_logged_in" && l("userType", "guest");
            j(a === null ? "post_comment" : "post_comment_reply")
        });
        DISQUS.bind("thread.onShare", function (a) {
            DISQUS.each(a, function (a, b) {
                a && j("share_thread_" + b)
            })
        });
        DISQUS.bind("comments.share", function (a) {
            var b = {tw: "twitter", fb: "facebook", tr: "tumblr", wp: "wordpress", mt: "movabletype", tp: "typepad", yh: "yahoo"};
            DISQUS.each(a, function (a, c) {
                a && j("share_comment_" + b[c])
            })
        });
        DISQUS.once("thread.bottomViewed", function () {
            j("view_bottom_embed")
        });
        a("realtime.show", function () {
            j("load_rtcomments")
        });
        a("comments.moderate.options", function () {
            j("moderate_comment_open")
        });
        a("profile.show", function () {
            j("open_profile")
        });
        a("community.show", function () {
            j("open_community")
        });
        a("auth.login", function () {
            j("open_login")
        });
        DISQUS.bind("signup.viewed", function () {
            j("open_signup")
        });
        a("thread.paginate", function () {
            j("load_comments")
        });
        a("comments.edit.send", function () {
            j("edit_comment")
        });
        a("thread.subscribe", function (a) {
            (a || DISQUS.jsonData.request.is_authenticated) && j("subscribe_thread")
        });
        a("thread.initialize",
            function () {
                var a = e;
                e = d();
                a != null && a != e && (l("userType", e), j("login"))
            })
    }

    function a() {
        DISQUS.once("discovery.onDisplay", function () {
            for (var a = DISQUS.nodes.get("#dsq-related a.redirect"), b = 0; b < a.length; b++)DISQUS.bean.add(a[b], "click", function () {
                j("click_link_discovery")
            })
        });
        DISQUS.once("discovery.onView", function () {
            j("view_discovery")
        });
        DISQUS.once("discovery.onClose", function () {
            j("close_discovery")
        })
    }

    var g, c, e, i, m, k = [], l = DISQUS.ga.setCustomVar, o = DISQUS.ga.trackPageview, j = function (a) {
        !g || !c ? (j.queue.push(a),
            o = function (a) {
                return function () {
                    a();
                    for (var b; j.queue && (b = j.queue.shift());)j(b);
                    o = a
                }
            }(o)) : (j = function (a) {
            DISQUS.ga.trackEvent(a, g, c)
        }, j(a))
    };
    j.queue = [];
    DISQUS.ga.setCaller(function () {
        arguments.length !== 0 && (m ? m.apply(null, arguments) : b(arguments))
    });
    DISQUS.once("thread.topViewed", function () {
        j("view_embed")
    });
    DISQUS.once("loader.onFilesReady", function () {
        f()
    });
    DISQUS.once("loader.onDataReady", function () {
        l("component", "embed");
        var b = DISQUS.jsonData.forum.template.name;
        g = b = DISQUS.states.isMobile ? "mobile" :
            {Houdini: "houdini", Narcissus: "narcissus", "Discovery Preview": "houdini_discovery", "Discovery B": "houdini_discovery_b"}[b] || "custom";
        l("version", g);
        g.indexOf("houdini_discovery") > -1 && a();
        c = DISQUS.jsonData.forum.url || "?";
        l("forum", c);
        b = DISQUS.jsonData.forum.features;
        i = b.support_preferred ? "plus" : b.support_priority ? "pro" : b.support_vip ? "vip" : "free";
        l("package", i);
        e = d();
        l("userType", e);
        o();
        var b = DISQUS.jsonData, f = b.urls.juggler;
        f && b.context.switches.juggler_enabled && (f += "/event.js", DISQUS.juggler.load({url: f,
            thread: b.thread.id, forum: b.forum.url, forum_id: b.forum.id}))
    });
    DISQUS.once("loader.onDefaultChannelReady", function () {
        m = DISQUS.comm.Default.recover().gaPush;
        k.length !== 0 && (m.apply(null, k), k = [])
    });
    DISQUS.once("thread.onReady", function () {
        var a = DISQUS.jsonData;
        if (a.context.switches.juggler_thread_onReady) {
            var b = [];
            DISQUS.each(a.context.switches, function (a, c) {
                a === !0 && b.push(c)
            });
            DISQUS.juggler.emit("init_embed", {thread_slug: a.thread.slug, user_type: a.request.user_type, referrer: document.referrer, active_switches: DISQUS.json.stringify(b),
                theme: a.forum.template.name})
        }
    })
})();
(function (b, d, f, a, g, c) {
    function e(a, b) {
        var c = typeof a[b];
        return c == "function" || !!(c == "object" && a[b]) || c == "unknown"
    }

    function i() {
        i = B;
        F = !0;
        for (var a = 0; a < L.length; a++)L[a]();
        L.length = 0
    }

    function m(a, b) {
        F ? a.call(b) : L.push(function () {
            a.call(b)
        })
    }

    function k() {
        var a = parent;
        if (A !== "")for (var b = 0, c = A.split("."); b < c.length; b++)a = a[c[b]];
        return a.easyXDM
    }

    function l(a) {
        var b = a.match(G), a = b[2], c = b[3], b = b[4] || "";
        if (a == "http:" && b == ":80" || a == "https:" && b == ":443")b = "";
        return a + "//" + c + b
    }

    function o(a) {
        a = a.replace(J, "$1/");
        if (!a.match(/^(http||https):\/\//)) {
            var b = a.substring(0, 1) === "/" ? "" : f.pathname;
            b.substring(b.length - 1) !== "/" && (b = b.substring(0, b.lastIndexOf("/") + 1));
            a = f.protocol + "//" + f.host + b + a
        }
        for (; H.test(a);)a = a.replace(H, "");
        return a
    }

    function j(a, b) {
        var d = "", e = a.indexOf("#");
        e !== -1 && (d = a.substring(e).replace("#", "&"), a = a.substring(0, e));
        var e = [], f;
        for (f in b)b.hasOwnProperty(f) && e.push(f + "=" + c(b[f]));
        return a + (P ? "#" : a.indexOf("?") == -1 ? "?" : "&") + e.join("&") + d
    }

    function h(a) {
        return typeof a === "undefined"
    }

    function p() {
        var a =
        {}, b = {a: [1, 2, 3]};
        if (typeof JSON != "undefined" && typeof JSON.stringify === "function" && JSON.stringify(b).replace(/\s/g, "") === '{"a":[1,2,3]}')return JSON;
        if (Object.toJSON && Object.toJSON(b).replace(/\s/g, "") === '{"a":[1,2,3]}')a.stringify = Object.toJSON;
        if (typeof String.prototype.evalJSON === "function" && (b = '{"a":[1,2,3]}'.evalJSON(), b.a && b.a.length === 3 && b.a[2] === 3))a.parse = function (a) {
            return a.evalJSON()
        };
        if (a.stringify && a.parse)return p = function () {
            return a
        }, a;
        return null
    }

    function s(a, b, c) {
        var d, e;
        for (e in b)b.hasOwnProperty(e) &&
        (e in a ? (d = b[e], typeof d === "object" ? s(a[e], d, c) : c || (a[e] = b[e])) : a[e] = b[e]);
        return a
    }

    function u(a) {
        if (h(D)) {
            var c = d.createElement("iframe");
            c.name = x + "TEST";
            s(c.style, {position: "absolute", left: "-2000px", top: "0px"});
            d.body.appendChild(c);
            D = c.contentWindow !== b.frames[c.name];
            d.body.removeChild(c)
        }
        D && !~navigator.userAgent.indexOf("Firefox") ? c = d.createElement('<iframe name="' + a.props.name + '"/>') : (c = d.createElement("IFRAME"), c.name = a.props.name);
        c.id = c.name = a.props.name;
        delete a.props.name;
        a.onLoad && z(c,
            "load", a.onLoad);
        if (typeof a - fluid == "string")a - fluid = d.getElementById(a - fluid);
        if (!a - fluid)c.style.position = "absolute", c.style.top = "-2000px", c.style.left = "0px", a - fluid = d.body;
        var e = a.props.src;
        delete a.props.src;
        s(c, a.props);
        c.border = c.frameBorder = 0;
        a - fluid.appendChild(c);
        c.src = e;
        a.props.src = e;
        return c
    }

    function q(a) {
        var c = a.protocol, g;
        a.isHost = a.isHost || h(y.xdm_p);
        P = a.hash || !1;
        if (!a.props)a.props = {};
        if (a.isHost) {
            if (a.remote = o(a.remote), a.channel = a.channel || "default" + I++, a.secret =
                Math.random().toString(16).substring(2), h(c))if (r.parent == r && l(f.href) == l(a.remote))c = "4"; else if (e(b, "postMessage") || e(d, "postMessage"))c = "1"; else {
                if (c = e(b, "ActiveXObject"))try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), c = !0
                } catch (W) {
                    c = !1
                }
                c ? c = "6" : navigator.product === "Gecko" && "frameElement"in b && navigator.userAgent.indexOf("WebKit") == -1 ? c = "5" : a.remoteHelper ? (a.remoteHelper = o(a.remoteHelper), c = "2") : c = "0"
            }
        } else {
            a.channel = y.xdm_c;
            a.secret = y.xdm_s;
            a.remote = y.xdm_e;
            var c = y.xdm_p, w;
            if (w = a.acl) {
                a:{
                    w =
                        a.acl;
                    var N = a.remote;
                    typeof w == "string" && (w = [w]);
                    for (var t, Q = w.length; Q--;)if (t = w[Q], t = RegExp(t.substr(0, 1) == "^" ? t : "^" + t.replace(/(\*)/g, ".$1").replace(/\?/g, ".") + "$"), t.test(N)) {
                        w = !0;
                        break a
                    }
                    w = !1
                }
                w = !w
            }
            if (w)throw Error("Access denied for " + a.remote);
        }
        switch (c) {
            case "0":
                s(a, {interval: 100, delay: 2E3, useResize: !0, useParent: !1, usePolling: !1}, !0);
                if (a.isHost) {
                    if (!a.local) {
                        g = f.protocol + "//" + f.host;
                        c = d.body.getElementsByTagName("img");
                        for (N = c.length; N--;)if (w = c[N], w.src.substring(0, g.length) === g) {
                            a.local =
                                w.src;
                            break
                        }
                        if (!a.local)a.local = b
                    }
                    g = {xdm_c: a.channel, xdm_p: 0};
                    a.local === b ? (a.usePolling = !0, a.useParent = !0, a.local = f.protocol + "//" + f.host + f.pathname + f.search, g.xdm_e = a.local, g.xdm_pa = 1) : g.xdm_e = o(a.local);
                    if (a - fluid)a.useResize = !1, g.xdm_po = 1;
                    a.remote = j(a.remote, g)
                }
                else s(a, {channel: y.xdm_c, remote: y.xdm_e, useParent: !h(y.xdm_pa), usePolling: !h(y.xdm_po), useResize: a.useParent ? !1 : a.useResize});
                g = [new n.stack.HashTransport(a), new n.stack.ReliableBehavior({}), new n.stack.QueueBehavior({
                    encode: !0, maxLength: 4E3 -
                        a.remote.length}), new n.stack.VerifyBehavior({initiate: a.isHost})];
                break;
            case "1":
                g = [new n.stack.PostMessageTransport(a)];
                break;
            case "2":
                g = [new n.stack.NameTransport(a), new n.stack.QueueBehavior, new n.stack.VerifyBehavior({initiate: a.isHost})];
                break;
            case "3":
                g = [new n.stack.NixTransport(a)];
                break;
            case "4":
                g = [new n.stack.SameOriginTransport(a)];
                break;
            case "5":
                g = [new n.stack.FrameElementTransport(a)];
                break;
            case "6":
                if (!a.swf)a.swf = "../../tools/easyxdm.swf";
                g = [new n.stack.FlashTransport(a)]
        }
        g.push(new n.stack.QueueBehavior({lazy: a.lazy,
            remove: !0}));
        return g
    }

    function C(a) {
        for (var b, c = {incoming: function (a, b) {
            this.up.incoming(a, b)
        }, outgoing: function (a, b) {
            this.down.outgoing(a, b)
        }, callback: function (a) {
            this.up.callback(a)
        }, init: function () {
            this.down.init()
        }, destroy: function () {
            this.down.destroy()
        }}, d = 0, e = a.length; d < e; d++) {
            b = a[d];
            s(b, c, !0);
            if (d !== 0)b.down = a[d - 1];
            if (d !== e - 1)b.up = a[d + 1]
        }
        return b
    }

    function v(a) {
        a.up.down = a.down;
        a.down.up = a.up;
        a.up = a.down = null
    }

    var r = this, I = Math.floor(Math.random() * 1E4), B = Function.prototype, G = /^((http.?:)\/\/([^:\/\s]+)(:\d+)*)/,
        H = /[\-\w]+\/\.\.\//, J = /([^:])\/\//g, A = "", n = {}, K = b.easyXDM, x = "easyXDM_", D, P = !1, z, E;
    if (e(b, "addEventListener"))z = function (a, b, c) {
        a.addEventListener(b, c, !1)
    }, E = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    }; else if (e(b, "attachEvent"))z = function (a, b, c) {
        a.attachEvent("on" + b, c)
    }, E = function (a, b, c) {
        a.detachEvent("on" + b, c)
    }; else throw Error("Browser not supported");
    var F = !1, L = [], M;
    "readyState"in d ? (M = d.readyState, F = M == "complete" || ~navigator.userAgent.indexOf("AppleWebKit/") && (M == "loaded" || M == "interactive")) :
        F = !!d.body;
    F || (e(b, "addEventListener") ? z(d, "DOMContentLoaded", i) : (z(d, "readystatechange", function () {
        d.readyState == "complete" && i()
    }), d.documentElement.doScroll && b === top && function R() {
        if (!F) {
            try {
                d.documentElement.doScroll("left")
            } catch (b) {
                a(R, 1);
                return
            }
            i()
        }
    }()), z(b, "load", i));
    var y = function (a) {
        for (var a = a.substring(1).split("&"), b = {}, c, d = a.length; d--;)c = a[d].split("="), b[c[0]] = g(c[1]);
        return b
    }(/xdm_e=/.test(f.search) ? f.search : f.hash);
    s(n, {version: "2.4.12.1", query: y, stack: {}, apply: s, getJSONObject: p,
        whenReady: m, noConflict: function (a) {
            b.easyXDM = K;
            (A = a) && (x = "easyXDM_" + A.replace(".", "_") + "_");
            return n
        }});
    n.DomHelper = {on: z, un: E, requiresJSON: function (a) {
        typeof b.JSON == "object" && b.JSON || d.write('<script type="text/javascript" src="' + a + '"><\/script>')
    }};
    (function () {
        var a = {};
        n.Fn = {set: function (b, c) {
            a[b] = c
        }, get: function (b, c) {
            var d = a[b];
            c && delete a[b];
            return d
        }}
    })();
    n.Socket = function (a) {
        var b = C(q(a).concat([
            {incoming: function (b, c) {
                a.onMessage(b, c)
            }, callback: function (b) {
                if (a.onReady)a.onReady(b)
            }}
        ])), c =
            l(a.remote);
        this.origin = l(a.remote);
        this.destroy = function () {
            b.destroy()
        };
        this.postMessage = function (a) {
            b.outgoing(a, c)
        };
        b.init()
    };
    n.Rpc = function (a, b) {
        if (b.local)for (var c in b.local)if (b.local.hasOwnProperty(c)) {
            var d = b.local[c];
            typeof d === "function" && (b.local[c] = {method: d})
        }
        var e = C(q(a).concat([new n.stack.RpcBehavior(this, b), {callback: function (b) {
            if (a.onReady)a.onReady(b)
        }}]));
        this.origin = l(a.remote);
        this.destroy = function () {
            e.destroy()
        };
        e.init()
    };
    n.stack.SameOriginTransport = function (b) {
        var c, d, e,
            g;
        return c = {outgoing: function (a, b, c) {
            e(a);
            c && c()
        }, destroy: function () {
            d && (d.parentNode.removeChild(d), d = null)
        }, onDOMReady: function () {
            g = l(b.remote);
            b.isHost ? (s(b.props, {src: j(b.remote, {xdm_e: f.protocol + "//" + f.host + f.pathname, xdm_c: b.channel, xdm_p: 4}), name: x + b.channel + "_provider"}), d = u(b), n.Fn.set(b.channel, function (b) {
                e = b;
                a(function () {
                    c.up.callback(!0)
                }, 0);
                return function (a) {
                    c.up.incoming(a, g)
                }
            })) : (e = k().Fn.get(b.channel, !0)(function (a) {
                c.up.incoming(a, g)
            }), a(function () {
                c.up.callback(!0)
            }, 0))
        }, init: function () {
            m(c.onDOMReady,
                c)
        }}
    };
    n.stack.FlashTransport = function (b) {
        function c(b) {
            a(function () {
                f.up.incoming(b, h)
            }, 0)
        }

        function e(a) {
            var c = b.swf, f = "easyXDM_swf_" + Math.floor(Math.random() * 1E4);
            n.Fn.set("flash_loaded", function () {
                n.stack.FlashTransport.__swf = i = k.firstChild;
                a()
            });
            k = d.createElement("div");
            s(k.style, {height: "1px", width: "1px", postition: "absolute", left: 0, top: 0});
            d.body.appendChild(k);
            var g = "proto=" + r.location.protocol + "&domain=" + r.location.href.match(G)[3] + "&ns=" + A;
            k.innerHTML = "<object height='1' width='1' type='application/x-shockwave-flash' id='" +
                f + "' data='" + c + "'><param name='allowScriptAccess' value='always'></param><param name='wmode' value='transparent'><param name='movie' value='" + c + "'></param><param name='flashvars' value='" + g + "'></param><embed type='application/x-shockwave-flash' FlashVars='" + g + "' allowScriptAccess='always' wmode='transparent' src='" + c + "' height='1' width='1'></embed></object>"
        }

        var f, g, h, i, k;
        return f = {outgoing: function (a, c, d) {
            i.postMessage(b.channel, a);
            d && d()
        }, destroy: function () {
            try {
                i.destroyChannel(b.channel)
            } catch (a) {
            }
            i =
                null;
            g && (g.parentNode.removeChild(g), g = null)
        }, onDOMReady: function () {
            h = b.remote;
            i = n.stack.FlashTransport.__swf;
            n.Fn.set("flash_" + b.channel + "_init", function () {
                a(function () {
                    f.up.callback(!0)
                })
            });
            n.Fn.set("flash_" + b.channel + "_onMessage", c);
            var d = function () {
                i.createChannel(b.channel, b.secret, l(b.remote), b.isHost);
                b.isHost && (s(b.props, {src: j(b.remote, {xdm_e: l(r.location.href), xdm_c: b.channel, xdm_p: 6, xdm_s: b.secret}), name: x + b.channel + "_provider"}), g = u(b))
            };
            i ? d() : e(d)
        }, init: function () {
            m(f.onDOMReady, f)
        }}
    };
    n.stack.PostMessageTransport = function (c) {
        function d(a) {
            var b;
            if (a.origin)b = l(a.origin); else if (a.uri)b = l(a.uri); else if (a.domain)b = f.protocol + "//" + a.domain; else throw"Unable to retrieve the origin of the event";
            b == t && a.data.substring(0, c.channel.length + 1) == c.channel + " " && e.up.incoming(a.data.substring(c.channel.length + 1), b)
        }

        var e, g, h, t;
        return e = {outgoing: function (a, b, d) {
            h.postMessage(c.channel + " " + a, b || t);
            d && d()
        }, destroy: function () {
            E(b, "message", d);
            g && (h = null, g.parentNode.removeChild(g), g = null)
        },
            onDOMReady: function () {
                t = l(c.remote);
                c.isHost ? (z(b, "message", function S(f) {
                    f.data == c.channel + "-ready" && (h = "postMessage"in g.contentWindow ? g.contentWindow : g.contentWindow.document, E(b, "message", S), z(b, "message", d), a(function () {
                        e.up.callback(!0)
                    }, 0))
                }), s(c.props, {src: j(c.remote, {xdm_e: l(f.href), xdm_c: c.channel, xdm_p: 1}), name: x + c.channel + "_provider"}), g = u(c)) : (z(b, "message", d), h = "postMessage"in b.parent ? b.parent : b.parent.document, h.postMessage(c.channel + "-ready", t), a(function () {
                    e.up.callback(!0)
                }, 0))
            },
            init: function () {
                m(e.onDOMReady, e)
            }}
    };
    n.stack.FrameElementTransport = function (c) {
        var e, g, h, i;
        return e = {outgoing: function (a, b, c) {
            h.call(this, a);
            c && c()
        }, destroy: function () {
            g && (g.parentNode.removeChild(g), g = null)
        }, onDOMReady: function () {
            i = l(c.remote);
            if (c.isHost)s(c.props, {src: j(c.remote, {xdm_e: l(f.href), xdm_c: c.channel, xdm_p: 5}), name: x + c.channel + "_provider"}), g = u(c), g.fn = function (b) {
                delete g.fn;
                h = b;
                a(function () {
                    e.up.callback(!0)
                }, 0);
                return function (a) {
                    e.up.incoming(a, i)
                }
            }; else {
                if (d.referrer && l(d.referrer) !=
                    y.xdm_e)b.top.location = y.xdm_e;
                h = b.frameElement.fn(function (a) {
                    e.up.incoming(a, i)
                });
                e.up.callback(!0)
            }
        }, init: function () {
            m(e.onDOMReady, e)
        }}
    };
    n.stack.NixTransport = function (c) {
        var g, h, i, k, t;
        return g = {outgoing: function (a, b, c) {
            i(a);
            c && c()
        }, destroy: function () {
            t = null;
            h && (h.parentNode.removeChild(h), h = null)
        }, onDOMReady: function () {
            k = l(c.remote);
            if (c.isHost) {
                try {
                    e(b, "getNixProxy") || b.execScript("Class NixProxy\n    Private m_parent, m_child, m_Auth\n\n    Public Sub SetParent(obj, auth)\n        If isEmpty(m_Auth) Then m_Auth = auth\n        SET m_parent = obj\n    End Sub\n    Public Sub SetChild(obj)\n        SET m_child = obj\n        m_parent.ready()\n    End Sub\n\n    Public Sub SendToParent(data, auth)\n        If m_Auth = auth Then m_parent.send(CStr(data))\n    End Sub\n    Public Sub SendToChild(data, auth)\n        If m_Auth = auth Then m_child.send(CStr(data))\n    End Sub\nEnd Class\nFunction getNixProxy()\n    Set GetNixProxy = New NixProxy\nEnd Function\n",
                        "vbscript"), t = getNixProxy(), t.SetParent({send: function (a) {
                        g.up.incoming(a, k)
                    }, ready: function () {
                        a(function () {
                            g.up.callback(!0)
                        }, 0)
                    }}, c.secret), i = function (a) {
                        t.SendToChild(a, c.secret)
                    }
                } catch (m) {
                    throw Error("Could not set up VBScript NixProxy:" + m.message);
                }
                s(c.props, {src: j(c.remote, {xdm_e: l(f.href), xdm_c: c.channel, xdm_s: c.secret, xdm_p: 3}), name: x + c.channel + "_provider"});
                h = u(c);
                h.contentWindow.opener = t
            } else {
                if (d.referrer && l(d.referrer) != y.xdm_e)b.top.location = y.xdm_e;
                try {
                    t = b.opener
                } catch (p) {
                    throw Error("Cannot access window.opener");
                }
                t.SetChild({send: function (a) {
                    r.setTimeout(function () {
                        g.up.incoming(a, k)
                    }, 0)
                }});
                i = function (a) {
                    t.SendToParent(a, c.secret)
                };
                a(function () {
                    g.up.callback(!0)
                }, 0)
            }
        }, init: function () {
            m(g.onDOMReady, g)
        }}
    };
    n.stack.NameTransport = function (b) {
        function c(a) {
            i.contentWindow.sendMessage(a, b.remoteHelper + (h ? "#_3" : "#_2") + b.channel)
        }

        function d() {
            h ? (++p === 2 || !h) && g.up.callback(!0) : (c("ready"), g.up.callback(!0))
        }

        function e(a) {
            g.up.incoming(a, r)
        }

        function f() {
            O && a(function () {
                O(!0)
            }, 0)
        }

        var g, h, i, k, p, O, r, q;
        return g = {outgoing: function (a, b, d) {
            O = d;
            c(a)
        }, destroy: function () {
            i.parentNode.removeChild(i);
            i = null;
            h && (k.parentNode.removeChild(k), k = null)
        }, onDOMReady: function () {
            h = b.isHost;
            p = 0;
            r = l(b.remote);
            b.local = o(b.local);
            h ? (n.Fn.set(b.channel, function (a) {
                h && a === "ready" && (n.Fn.set(b.channel, e), d())
            }), q = j(b.remote, {xdm_e: b.local, xdm_c: b.channel, xdm_p: 2}), s(b.props, {src: q + "#" + b.channel, name: x + b.channel + "_provider"}), k = u(b)) : (b.remoteHelper = b.remote, n.Fn.set(b.channel, e));
            i = u({props: {src: b.local + "#_4" + b.channel}, onLoad: function T() {
                var c = i ||
                    this;
                E(c, "load", T);
                n.Fn.set(b.channel + "_load", f);
                (function V() {
                    typeof c.contentWindow.sendMessage == "function" ? d() : a(V, 50)
                })()
            }})
        }, init: function () {
            m(g.onDOMReady, g)
        }}
    };
    n.stack.HashTransport = function (c) {
        function d() {
            if (k) {
                var a = k.location.href, b = "", c = a.indexOf("#");
                c != -1 && (b = a.substring(c));
                b && b != j && (j = b, e.up.incoming(j.substring(j.indexOf("_") + 1), r))
            }
        }

        var e, f, g, h, j, i, k, p, n, r;
        return e = {outgoing: function (a) {
            if (p)a = c.remote + "#" + i++ + "_" + a, (f || !n ? p.contentWindow : p).location = a
        }, destroy: function () {
            b.clearInterval(g);
            (f || !n) && p.parentNode.removeChild(p);
            p = null
        }, onDOMReady: function () {
            f = c.isHost;
            h = c.interval;
            j = "#" + c.channel;
            i = 0;
            n = c.useParent;
            r = l(c.remote);
            if (f) {
                c.props = {src: c.remote, name: x + c.channel + "_provider"};
                if (n)c.onLoad = function () {
                    k = b;
                    g = setInterval(d, h);
                    e.up.callback(!0)
                }; else {
                    var m = 0, q = c.delay / 50;
                    (function U() {
                        if (++m > q)throw Error("Unable to reference listenerwindow");
                        try {
                            k = p.contentWindow.frames[x + c.channel + "_consumer"]
                        } catch (b) {
                        }
                        k ? (g = setInterval(d, h), e.up.callback(!0)) : a(U, 50)
                    })()
                }
                p = u(c)
            } else k = b, g = setInterval(d,
                h), n ? (p = parent, e.up.callback(!0)) : (s(c, {props: {src: c.remote + "#" + c.channel + new Date, name: x + c.channel + "_consumer"}, onLoad: function () {
                e.up.callback(!0)
            }}), p = u(c))
        }, init: function () {
            m(e.onDOMReady, e)
        }}
    };
    n.stack.ReliableBehavior = function () {
        var a, b, c = 0, d = 0, e = "";
        return a = {incoming: function (f, g) {
            var h = f.indexOf("_"), j = f.substring(0, h).split(","), f = f.substring(h + 1);
            j[0] == c && (e = "", b && b(!0));
            f.length > 0 && (a.down.outgoing(j[1] + "," + c + "_" + e, g), d != j[1] && (d = j[1], a.up.incoming(f, g)))
        }, outgoing: function (f, g, h) {
            e = f;
            b =
                h;
            a.down.outgoing(d + "," + ++c + "_" + f, g)
        }}
    };
    n.stack.QueueBehavior = function (b) {
        function d() {
            if (b.remove && f.length === 0)v(e); else if (!j && !(f.length === 0 || k)) {
                j = !0;
                var c = f.shift();
                e.down.outgoing(c.data, c.origin, function (b) {
                    j = !1;
                    c.callback && a(function () {
                        c.callback(b)
                    }, 0);
                    d()
                })
            }
        }

        var e, f = [], j = !0, i = "", k, m = 0, p = !1, l = !1;
        return e = {init: function () {
            h(b) && (b = {});
            if (b.maxLength)m = b.maxLength, l = !0;
            b.lazy ? p = !0 : e.down.init()
        }, callback: function (a) {
            j = !1;
            var b = e.up;
            d();
            b.callback(a)
        }, incoming: function (a, c) {
            if (l) {
                var d = a.indexOf("_"),
                    f = parseInt(a.substring(0, d), 10);
                i += a.substring(d + 1);
                f === 0 && (b.encode && (i = g(i)), e.up.incoming(i, c), i = "")
            } else e.up.incoming(a, c)
        }, outgoing: function (a, g, h) {
            b.encode && (a = c(a));
            var j = [], i;
            if (l) {
                for (; a.length !== 0;)i = a.substring(0, m), a = a.substring(i.length), j.push(i);
                for (; i = j.shift();)f.push({data: j.length + "_" + i, origin: g, callback: j.length === 0 ? h : null})
            } else f.push({data: a, origin: g, callback: h});
            p ? e.down.init() : d()
        }, destroy: function () {
            k = !0;
            e.down.destroy()
        }}
    };
    n.stack.VerifyBehavior = function (a) {
        function b() {
            d =
                Math.random().toString(16).substring(2);
            c.down.outgoing(d)
        }

        var c, d, e;
        return c = {incoming: function (f, g) {
            var h = f.indexOf("_");
            h === -1 ? f === d ? c.up.callback(!0) : e || (e = f, a.initiate || b(), c.down.outgoing(f)) : f.substring(0, h) === e && c.up.incoming(f.substring(h + 1), g)
        }, outgoing: function (a, b, e) {
            c.down.outgoing(d + "_" + a, b, e)
        }, callback: function () {
            a.initiate && b()
        }}
    };
    n.stack.RpcBehavior = function (a, b) {
        function c(a) {
            a.jsonrpc = "2.0";
            f.down.outgoing(g.stringify(a))
        }

        function d(a, b) {
            var e = Array.prototype.slice;
            return function () {
                var d =
                    arguments.length, f, g = {method: b};
                d > 0 && typeof arguments[d - 1] === "function" ? (d > 1 && typeof arguments[d - 2] === "function" ? (f = {success: arguments[d - 2], error: arguments[d - 1]}, g.params = e.call(arguments, 0, d - 2)) : (f = {success: arguments[d - 1]}, g.params = e.call(arguments, 0, d - 1)), i["" + ++j] = f, g.id = j) : g.params = e.call(arguments, 0);
                if (a.namedParams && g.params.length === 1)g.params = g.params[0];
                c(g)
            }
        }

        function e(a, b, d, f) {
            if (d) {
                var g, j;
                b ? (g = function (a) {
                    g = B;
                    c({id: b, result: a})
                }, j = function (a, d) {
                    j = B;
                    var e = {id: b, error: {code: -32099, message: a}};
                    if (d)e.error.data = d;
                    c(e)
                }) : g = j = B;
                Object.prototype.toString.call(f) === "[object Array]" || (f = [f]);
                try {
                    var i = d.method.apply(d.scope, f.concat([g, j]));
                    h(i) || g(i)
                } catch (k) {
                    j(k.message)
                }
            } else b && c({id: b, error: {code: -32601, message: "Procedure not found."}})
        }

        var f, g = b.serializer || p(), j = 0, i = {};
        return f = {incoming: function (a) {
            a = g.parse(a);
            if (a.method)b.handle ? b.handle(a, c) : e(a.method, a.id, b.local[a.method], a.params); else {
                var d = i[a.id];
                a.error ? d.error && d.error(a.error) : d.success && d.success(a.result);
                delete i[a.id]
            }
        },
            init: function () {
                if (b.remote)for (var c in b.remote)b.remote.hasOwnProperty(c) && (a[c] = d(b.remote[c], c));
                f.down.init()
            }, destroy: function () {
                for (var c in b.remote)b.remote.hasOwnProperty(c) && a.hasOwnProperty(c) && delete a[c];
                f.down.destroy()
            }}
    };
    r.easyXDM = n
})(window, document, location, window.setTimeout, decodeURIComponent, encodeURIComponent);
DISQUS.net = {easyXDM: easyXDM.noConflict("DISQUS.net"), rpc: function (b, d) {
    if (!b.swf)b.swf = DISQUS.settings.get("disqus.debug") ? DISQUS.settings.get("disqus.urls.main") + "/xdm.swf" : DISQUS.settings.get("disqus.urls.media") + "/xdm.swf";
    if (typeof b.hash == "undefined")b.hash = !DISQUS.settings.get("disqus.debug");
    DISQUS.extend(d, {serializer: {parse: DISQUS.json.parse, stringify: DISQUS.json.stringify}});
    var f = new DISQUS.net.easyXDM.Rpc(b, d);
    f.isReady = !1;
    return f
}};
(function () {
    function b(a) {
        return a < 10 ? "0" + a : a
    }

    function d(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, function (a) {
            var b = k[a];
            return typeof b === "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function f(a, b) {
        var c, e, k, q, o = i, v, r = b[a];
        r && typeof r === "object" && typeof r.toJSON === "function" && !g && (r = r.toJSON(a));
        typeof l === "function" && (r = l.call(b, a, r));
        switch (typeof r) {
            case "string":
                return d(r);
            case "number":
                return isFinite(r) ? String(r) : "null";
            case "boolean":
            case "null":
                return String(r);
            case "object":
                if (!r)return"null";
                i += m;
                v = [];
                if (Object.prototype.toString.apply(r) === "[object Array]") {
                    q = r.length;
                    for (c = 0; c < q; c += 1)v[c] = f(c, r) || "null";
                    k = v.length === 0 ? "[]" : i ? "[\n" + i + v.join(",\n" + i) + "\n" + o + "]" : "[" + v.join(",") + "]";
                    i = o;
                    return k
                }
                if (l && typeof l === "object") {
                    q = l.length;
                    for (c = 0; c < q; c += 1)e = l[c], typeof e === "string" && (k = f(e, r)) && v.push(d(e) + (i ? ": " : ":") + k)
                } else for (e in r)Object.hasOwnProperty.call(r, e) && (k = f(e, r)) && v.push(d(e) + (i ? ": " : ":") + k);
                k = v.length === 0 ? "{}" : i ? "{\n" + i + v.join(",\n" + i) + "\n" +
                    o + "}" : "{" + v.join(",") + "}";
                i = o;
                return k
        }
    }

    var a = {}, g = !1;
    if (typeof Date.prototype.toJSON !== "function")Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    };
    var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, i, m, k = {"\u0008": "\\b", "\t": "\\t", "\n": "\\n", "\u000c": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, l;
    a.stringify = function (a, b, c) {
        var d;
        m = i = "";
        if (typeof c === "number")for (d = 0; d < c; d += 1)m += " "; else typeof c === "string" && (m = c);
        if ((l = b) && typeof b !== "function" && (typeof b !== "object" || typeof b.length !== "number"))throw Error("JSON.stringify");
        return f("", {"": a})
    };
    a.parse = function (a, b) {
        function d(a, c) {
            var e, f, g = a[c];
            if (g && typeof g === "object")for (e in g)Object.hasOwnProperty.call(g, e) && (f = d(g, e), f !== void 0 ? g[e] = f : delete g[e]);
            return b.call(a, c, g)
        }

        var e, a = String(a);
        c.lastIndex = 0;
        c.test(a) && (a = a.replace(c, function (a) {
            return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return e = eval("(" + a + ")"),
            typeof b === "function" ? d({"": e}, "") : e;
        throw new SyntaxError("JSON.parse");
    };
    DISQUS.json = {};
    var o = {a: [1, 2, 3]};
    if (Object.toJSON && Object.toJSON(o).replace(/\s/g, "") === '{"a":[1,2,3]}')DISQUS.json.stringify = Object.toJSON;
    if (typeof String.prototype.evalJSON === "function" && (o = '{"a":[1,2,3]}'.evalJSON(), o.a && o.a.length === 3 && o.a[2] === 3))DISQUS.json.parse = function (a) {
        return a.evalJSON()
    };
    (function () {
        var a = [1, 2, 3];
        typeof a.toJSON === "function" && (a = a.toJSON(), g = !(a && a.length === 3 && a[2] === 3))
    })();
    if (!DISQUS.json.stringify || !DISQUS.json.parse)DISQUS.json = {stringify: a.stringify, parse: a.parse}
})();
DISQUS.sdk.add("getThread", "1.0", function (b) {
    var d = DISQUS.jsonData, f = [];
    DISQUS.each(d.ordered_posts, function (a) {
        var a = d.posts[a], b = d.users[a.user_key];
        f.push({id: a.id, date: a.real_date, prettyDate: a.date, contents: a.message, likesCount: a.likes, isApproved: a.approved, isDeleted: a.killed, isEdited: a.edited, author: {username: b.username, displayName: b.display_name, points: b.points || 0, isRegistered: b.registered, isModerator: a.author_is_moderator, isVerified: b.verified}})
    });
    b({id: d.thread.id, slug: d.thread.slug, isClosed: d.thread.closed,
        isDeleted: d.thread.killed, posts: f, forum: {id: d.forum.id, name: d.forum.name, shortname: d.forum.url, language: d.forum.language, apiKey: d.forum.apiKey}})
});
DISQUS.sdk.add("getSession", "1.0", function (b) {
    var d = DISQUS.jsonData;
    b({user: {username: d.request.username, profileUrl: d.request.profile_url, displayName: d.request.display_username, points: d.request.points, isAuthenticated: d.request.is_authenticated, isModerator: d.request.is_moderator, isVerified: d.request.is_verified}})
});
DISQUS.addBlocks("defaults")(function (b) {
    b.blocks.comment = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("    "), a.compile()
    };
    b.blocks.postSharingOptions = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g) {
            a.put("  ");
            if (request.is_authenticated) {
                a.put('<div class="dsq-sharing-options dsq-tt"');
                request.display_sharing_options || a.put('style="display:none;"');
                a.put('title="');
                a.put(trans("Toggle to share your comment"));
                a.put('">');
                if (request.sharing.twitter.enabled ||
                    request.sharing.facebook.enabled)a.put('<span class="dsq-sharing-options-label">'), a.put(trans("Share on")), a.put("</span>"), request.sharing.twitter.enabled && (a.put('<button type="button" class="dsq-share-toggle" id="dsq-share-twitter" onclick="DISQUS.dtpl.actions.fire(\'share.toggle\', this, \'twitter\''), comment && (a.put(","), a.put((a.esc || function (a) {
                    return a
                })(comment.id))), a.put(');"><span class="dsq-share-icon"></span><span class="dsq-share-status"></span></button>')), request.sharing.facebook.enabled &&
                    (a.put('<button type="button" class="dsq-share-toggle" id="dsq-share-facebook"onclick="DISQUS.dtpl.actions.fire(\'share.toggle\', this, \'facebook\''), comment && (a.put(","), a.put((a.esc || function (a) {
                        return a
                    })(comment.id))), a.put(');"><span class="dsq-share-icon"></span><span class="dsq-share-status"></span></button>')), a.put('<input style="display: none" type="checkbox" id="dsq-sharing-twitter'), comment && (a.put("-"), a.put((a.esc || function (a) {
                    return a
                })(comment.id))), a.put('" />    <input style="display: none" type="checkbox" id="dsq-sharing-facebook'),
                    comment && (a.put("-"), a.put((a.esc || function (a) {
                        return a
                    })(comment.id))), a.put('" />');
                a.put("</div>")
            }
            return a.compile()
        }
    };
    b.blocks.messagesxNotice = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('    <div class="dsq-messagesx-icon">    </div>    <p>        '), a.put((a.esc || function (a) {
            return a
        })(message.formatted.text)), a.put("    </p>"), a.compile()
    };
    b.blocks.googleForm = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div id="dsq-login-google-content" class="dsq-auth-form">    <div class="dsq-connect-msg">      <h3>'),
            a.put(trans("Sign in with your Google account")), a.put("</h3>      <p>"), a.put(trans("Click the button below to continue.")), a.put('</p>      <p><span class="dsq-google-connect dsq-external-launcher"></span></p>    </div>    <div class="dsq-remote-authentication" style="display:none !important">      <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/dsq-loader.gif">      <p>'), a.put(trans("Connecting to Google")), a.put("</p>    </div>    <p><small>"), a.put(trans("You might need to disable your popup blocker to sign in.")),
            a.put("</small></p>  </div>"), a.compile()
    };
    b.blocks.facebookLoginForm = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g) {
            a.put('  <div id="dsq-login-facebook-content" class="dsq-auth-form">    <div class="dsq-connect-msg">      ');
            if (typeof title === "undefined" || title)a.put("      <h3>"), a.put(trans("Sign in with your Facebook account")), a.put("</h3>      ");
            a.put("      <p>");
            a.put(trans("Click the button below to continue."));
            a.put('</p>      <p id="dsq-login-facebook-frame">        <\!-- frame goes here --\>      </p>    </div>    <div class="dsq-remote-authentication" style="display:none !important">      <img src="');
            a.put((a.esc || function (a) {
                return a
            })(settings.media_url));
            a.put('/images/dsq-loader.gif" />      <p>');
            a.put(trans("Connecting to Facebook"));
            a.put("</p>    </div>    <p><small>");
            a.put(trans("You might need to disable your popup blocker to sign in."));
            a.put("</small></p>  </div>");
            return a.compile()
        }
    };
    b.blocks.reportConfirmation = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div style="text-align: center">  <button type="button" class="dsq-button" onclick="DISQUS.dtpl.actions.fire(\'comments.report\', '),
            a.put((a.esc || function (a) {
                return a
            })(id)), a.put(', true);">     '), a.put(trans("Yes, flag as inappropriate")), a.put('  </button>  <a href="#" onclick="DISQUS.popup.close(null, true); return false;" style="margin: 0 0 0 10px">    '), a.put(trans("Cancel")), a.put("  </a>  <br/><br/>  </div>  "), a.put(trans("This will flag comments for moderators to take action.")), a.compile()
    };
    b.blocks.globalToolbarDropdown = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  "), a.put('  <div id="dsq-toolbar-dropdown">    <a href="#" class="dsq-toolbar-logo dsq-toolbar-item dsq-clearfix"><span class="dsq-toolbar-icon">Disqus</span></a>    <div id="dsq-toolbar-dropdown-wrap" style="display: none">      <ul class="dsq-clearfix">        '),
            request.is_authenticated ? (a.put("            "), !request.is_remote && !forum.disqus_auth_disabled ? (a.put('                <li class="dsq-dashboard-link"><a href="#" onclick="DISQUS.dtpl.actions.fire(\'profile.dashboard\'); return false"><span class="dsq-toolbar-icon"></span><span class="dsq-toolbar-label">'), a.put(trans("Dashboard")), a.put('</span></a></li>                <li class="dsq-editprofile-link"><a href="#" onclick="DISQUS.dtpl.actions.fire(\'profile.edit\'); return false"><span class="dsq-toolbar-icon"></span><span class="dsq-toolbar-label">'),
                a.put(trans("Edit Profile")), a.put("</span></a></li>            ")) : request.is_remote && request.has_email && (a.put('                <li class="dsq-editprofile-link"><a href="#" onclick="return DISQUS.dtpl.actions.fire(\'user.remoteAccountSettings\');"><span class="dsq-toolbar-icon"></span><span class="dsq-toolbar-label">'), a.put(trans("Settings")), a.put("</span></a></li>            ")), a.put("            "), request.is_sso && config.sso && config.sso.logout ? (a.put('              <li class="dsq-logout-link"><a href="'),
                a.put((a.esc || function (a) {
                    return a
                })(config.sso.logout))) : (a.put('              <li class="dsq-logout-link"><a href="'), a.put((a.esc || function (a) {
                return a
            })(urls.logout)), a.put("?ctkn="), a.put((a.esc || function (a) {
                return a
            })(context.csrf_token))), a.put('"><span class="dsq-toolbar-icon"></span><span class="dsq-toolbar-label">'), a.put(trans("Logout")), a.put("</span></a></li>            "), a.put("        ")) : (a.put('            <li class="dsq-login-link"><a href="#" onclick="DISQUS.dtpl.actions.fire(\'auth.login\'); return false"><span class="dsq-toolbar-icon"></span><span class="dsq-toolbar-label">'),
                a.put(trans("Login")), a.put("</span></a></li>        ")), a.put('            <li class="dsq-about-link"><a href="http://disqus.com" target="_blank"><span class="dsq-toolbar-icon"></span><span class="dsq-toolbar-label">'), a.put(trans("About Disqus")), a.put("</span></a></li>      </ul>    </div>  </div>"), a.compile()
    };
    b.blocks.messagesxReply = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('    <div class="dsq-messagesx-icon">        <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)),
            a.put('/img/disqus-bar/icons/reply.png" />    </div>   <p>        '), a.put((a.esc || function (a) {
            return a
        })(message.formatted.text)), a.put("    </p>"), a.compile()
    };
    b.blocks.moderatorActionsPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  "), a.put('<div class="dsq-moderate-options">    <table>      <tr>        <th>'), a.put(trans("Actions")), a.put("</th>        <td>          <ul>            <li>"), thread.closed ? (a.put('<a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.open\');">'),
            a.put(trans("Open thread"))) : (a.put('<a href="#" onclick="return DISQUS.dtlp.actions.fire(\'thread.close\');">'), a.put(trans("Close thread"))), a.put("</a>"), a.put("</li>          </ul>        </td>      </tr>    </table>  </div>  <p>"), a.put(trans("Go to the full")), a.put('<a href="'), a.put((a.esc || function (a) {
            return a
        })(urls.moderate_threads)), a.put('" target="_blank">'), a.put(trans("moderate panel")), a.put("</a>"), a.put(trans("for more options")), a.put(".</p>"), a.put("  "), a.compile()
    };
    b.blocks.comments =
        function (d, f) {
            var a = new b.Builder, g = DISQUS.extend({}, d, f);
            with (g)return a.put('    <div id="dsq-edit-profile-suggestion" style="display:none">        <p>'), a.put(trans("Thanks for posting.")), a.put(" "), a.put(trans("Would you like to")), a.put(' <a href="#" onclick="DISQUS.dtpl.actions.fire(\'profile.edit\'); return false">edit your profile</a>?</p>    </div>    '), b.each(comments, function (c, d) {
                var f = {comment: c, index: d};
                a.put("        ");
                (function () {
                    var c = {};
                    b.extend(c, f);
                    b.extend(c, {});
                    a.put(b.renderBlock("comment",
                        c))
                })();
                a.put("    ")
            }), a.compile()
        };
    b.blocks.oldFlashMessage = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put(trans("You are using an older browser. In order to comment, please upgrade to either Flash 10 or Internet Explorer 8.")), a.compile()
    };
    b.blocks.publisherFacebookLoginForm = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('    <div id="dsq-login-facebook-content" class="dsq-auth-form">      <div class="dsq-connect-msg">        <h3>'),
            a.put(trans("Sign in with your Facebook account")), a.put("</h3>        <p>"), a.put(trans("Click the button below to continue.")), a.put('</p>        <p><span class="dsq-facebook-connect dsq-external-launcher"></span></p>      </div>      <div class="dsq-remote-authentication" style="display:none !important">        <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/dsq-loader.gif" />        <p>'), a.put(trans("Connecting to Facebook")), a.put("</p>      </div>      <p><small>"),
            a.put(trans("You might need to disable your popup blocker to sign in.")), a.put("</small></p>    </div>"), a.compile()
    };
    b.blocks.permalinkPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('<div class="dsq-field">    <label>'), a.put(trans("You are anchored to")), a.put('</label>    <input type="text" readonly="true" class="dsq-anchored-to"       value="'), a.put((a.esc || function (a) {
            return a
        })(document.location.protocol)), a.put("//"), a.put((a.esc || function (a) {
            return a
        })(document.location.host)),
            a.put((a.esc || function (a) {
                return a
            })(document.location.pathname)), a.put((a.esc || function (a) {
            return a
        })(document.location.search)), a.put("#comment-"), a.put((a.esc || function (a) {
            return a
        })(postId)), a.put('"/></div>'), a.compile()
    };
    b.blocks.openidForm = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="dsq-auth-form">    <p class="dsq-field">      <label for="dsq-openid-url">'), a.put(trans("OpenID URL")), a.put('</label>      <input type="text" id="dsq-openid-url" value="http://"/>    </p>    <p class="dsq-field">      <label for="dsq-openid-url">'),
            a.put(trans("Your name")), a.put('</label>      <input type="text" id="dsq-openid-username"/>    </p>    <p><button class="dsq-button" id="dsq-openid-submit-button">'), a.put(trans("Sign in")), a.put("</button></p>  </div>"), a.compile()
    };
    b.blocks.loginPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="dsq-tabbed-modal" id="dsq-tabbed-login-modal">    <ul class="dsq-modal-tabs">      '), guestTab && (a.put('      <li id="dsq-login-tab-guest"><a href="#dsq-login-guest" '),
            forum.allow_anon_post || a.put(' style="display: none !important"'), a.put("><span></span>"), a.put(trans("Guest")), a.put("</a></li>      ")), a.put("      "), config.sso && (a.put('<li id="dsq-login-tab-sso"><a href="#dsq-login-sso"><span></span>'), a.put((a.esc || function (a) {
            return a
        })(config.sso.name)), a.put("</a></li>")), a.put("      "), forum.disqus_auth_disabled || a.put('      <li id="dsq-login-tab-disqus"><a href="#dsq-login-disqus"><span></span>Disqus</a></li>      '), a.put('      <li id="dsq-login-tab-google"><a href="#dsq-login-google"><span></span>Google</a></li>      <li id="dsq-login-tab-twitter"><a href="#dsq-login-twitter"><span></span>Twitter</a></li>      <li id="dsq-login-tab-facebook"><a href="#dsq-login-facebook"><span></span>Facebook</a></li>      <li id="dsq-login-tab-yahoo"><a href="#dsq-login-yahoo"><span></span>Yahoo</a></li>      <li id="dsq-login-tab-openid"><a href="#dsq-login-openid"><span></span>OpenID</a></li>    </ul>    <div class="dsq-tab-container">      <div id="dsq-login-guest" class="dsq-tab-content dsq-auth-form" style="display: none !important">        <p class="dsq-field">          <label for="dsq-field-email" id="dsq-field-email-label">'),
            a.put(trans("Your email")), a.put('</label>          <input type="text"            value="'), config.def_email ? a.put((a.esc || function (a) {
            return a
        })(config.def_email)) : session.email && a.put((a.esc || function (a) {
            return a
        })(session.email)), a.put('" id="dsq-field-email"/>          </span>        <p class="dsq-field">          <label for="dsq-field-name" id="dsq-field-name-label">'), a.put(trans("Your name")), a.put('</label>          <input type="text"            value="'), config.def_name ? a.put((a.esc || function (a) {
            return a
        })(config.def_name)) :
            session.name ? a.put((a.esc || function (a) {
                return a
            })(session.name)) : a.put(trans("Guest")), a.put('" id="dsq-field-name" />        </p>        <p>          <span class="dsq-login-add-url">'), a.put(trans("Optional")), a.put(': <a href="#">'), a.put(trans("Link to your website")), a.put('</a></span>        </p>        <p class="dsq-field" style="display:none !important" id="dsq-optional-field-website">          <label for="dsq-field-website" id="dsq-field-website-label">'), a.put(trans("Your website")), a.put('</label>          <input type="text" value="'),
            session.url && a.put((a.esc || function (a) {
                return a
            })(session.url)), a.put('" id="dsq-field-website" />        </p>        <p class="dsq-login-subscribe">          <span>            <input id="dsq-subscribe-on-post'), comment && (a.put("-"), a.put((a.esc || function (a) {
            return a
        })(comment.id))), a.put('" type="checkbox"              '), request.subscribe_on_post && a.put('checked="true"'), a.put('/>          </span>          <label for="dsq-subscribe-on-post'), comment && (a.put("-"), a.put((a.esc || function (a) {
            return a
        })(comment.id))),
            a.put('">'), a.put(trans("Subscribe to all comments by email")), a.put('</label>        </p>        <p>          <button type="button" id="dsq-submit-guest" class="dsq-button">'), a.put(trans("Post comment")), a.put("</button>        </p>      </div>        "), a.put("        "), typeof states.useLoginWindow !== "undefined" && !states.useLoginWindow ? a.put('            <div id="dsq-login-disqus" class="dsq-tab-content dsq-auth-form" style="display: none !important">              <\!-- disqus iframe gets inserted here dynamically --\>            </div>        ') :
            (a.put('        <div id="dsq-login-disqus" class="dsq-tab-content dsq-auth-form" style="display: none !important">              <div class="dsq-connect-msg">                <h3>'), a.put(trans("Sign in with your Disqus account")), a.put("</h3>                <p>"), a.put(trans("Click the button below to continue.")), a.put('</p>                <p><span class="dsq-disqus-connect dsq-external-launcher"></span></p>              </div>            <div class="dsq-remote-authentication" style="display:none !important">              <img src="'),
                a.put((a.esc || function (a) {
                    return a
                })(settings.media_url)), a.put('/images/dsq-loader.gif" />              <p>'), a.put(trans("Connecting to Disqus")), a.put("</p>            </div>            <p><small>"), a.put(trans("You might need to disable your popup blocker to sign in.")), a.put("</small></p>        </div>        ")), a.put('        <div id="dsq-login-facebook" class="dsq-tab-content" style="display:none !important">            '), a.put("            "), context.forum_facebook_key && (!window.FB || !window.FB.dynData) ?
            (a.put("                "), function () {
                var c = {};
                b.extend(c, f);
                b.extend(c, {});
                a.put(b.renderBlock("publisherFacebookLoginForm", c))
            }()) : (a.put(" "), a.put("                "), function () {
            var c = {};
            b.extend(c, f);
            b.extend(c, {});
            a.put(b.renderBlock("facebookLoginForm", c))
        }()), a.put("            "), a.put('        </div>        <div id="dsq-login-twitter" class="dsq-tab-content dsq-auth-form" style="display:none !important">          <div class="dsq-connect-msg">            <h3>'), a.put(trans("Sign in with your Twitter account")),
            a.put("</h3>            <p>"), a.put(trans("Click the button below to continue.")), a.put('</p>            <p><span class="dsq-twitter-connect dsq-external-launcher"></span></p>          </div>          <div class="dsq-remote-authentication" style="display:none !important">            <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/dsq-loader.gif" />            <p>'), a.put(trans("Connecting to Twitter")), a.put("</p>          </div>          <p><small>"), a.put(trans("You might need to disable your popup blocker to sign in.")),
            a.put('</small></p>        </div>        <div id="dsq-login-openid" class="dsq-tab-content" style="display:none !important">          '), function () {
            var c = {};
            b.extend(c, f);
            b.extend(c, {});
            a.put(b.renderBlock("openidForm", c))
        }(), a.put('        </div>        <div id="dsq-login-google" class="dsq-tab-content" style="display:none !important">          '), function () {
            var c = {};
            b.extend(c, f);
            b.extend(c, {});
            a.put(b.renderBlock("googleForm", c))
        }(), a.put('        </div>        <div id="dsq-login-yahoo" class="dsq-tab-content dsq-auth-form" style="display: none !important">          <div class="dsq-connect-msg">            <h3>'),
            a.put(trans("Sign in with your Yahoo account")), a.put("</h3>            <p>"), a.put(trans("Click the button below to continue.")), a.put('</p>            <p><span class="dsq-yahoo-connect dsq-external-launcher"></span></p>          </div>          <div class="dsq-remote-authentication" style="display:none !important">            <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/dsq-loader.gif" />            <p>'), a.put(trans("Connecting to Yahoo")), a.put("</p>          </div>          <p><small>"),
            a.put(trans("You might need to disable your popup blocker to sign in.")), a.put("</small></p>        </div>        "), config.sso && (a.put('        <div id="dsq-login-sso" class="dsq-tab-content dsq-auth-form" style="display:none !important">          <div class="dsq-connect-msg">            <h3>'), a.put(b.interpolate(trans("Sign in with your %(account)s account"), {account: config.sso.name})), a.put("</h3>            <p>"), a.put(trans("Click the button below to continue.")), a.put('</p>            <p><span class="dsq-sso-connect dsq-external-launcher"><img src="'),
            a.put((a.esc || function (a) {
                return a
            })(config.sso.button)), a.put('"/></span></p>          </div>          <div class="dsq-remote-authentication" style="display:none !important">            <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/dsq-loader.gif" />            <p>'), a.put(b.interpolate(trans("Connecting to %(account)s"), {account: config.sso.name})), a.put("</p>          </div>          <p><small>"), a.put(trans("You might need to disable your popup blocker to sign in.")),
            a.put("</small></p>        </div>        ")), a.put("    </div>  </div>"), a.compile()
    };
    b.blocks.profileEdit = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="dsq-tabbed-modal" id="dsq-profile-edit-modal">    <ul class="dsq-modal-tabs">      '), has_unmerged_users && (a.put('      <li id="dsq-tab-profile-merge">        <a href="#dsq-profile-merge">          <span></span>'), a.put(trans("Merging")), a.put("        </a>      </li>      ")), a.put('      <li id="dsq-tab-profile-edit">        <a href="#dsq-profile-edit">          <span></span>'),
            a.put(trans("Profile")), a.put('        </a>      </li>      <li id="dsq-tab-profile-avatar">        <a href="#dsq-profile-avatar">          <span></span>'), a.put(trans("Avatar")), a.put('        </a>      </li>      <li id="dsq-tab-profile-services">        <a href="#dsq-profile-services">          <span></span>'), a.put(trans("Services")), a.put('        </a>      </li>      <li id="dsq-tab-profile-notifications">        <a href="#dsq-profile-notifications">          <span></span>'), a.put(trans("Notifications")),
            a.put('        </a>      </li>      <li id="dsq-tab-profile-account">        <a href="#dsq-profile-account">          <span></span>'), a.put(trans("Account")), a.put('        </a>      </li>      <li id="dsq-tab-profile-apps">        <a href="#dsq-profile-apps">          <span></span>'), a.put(trans("Applications")), a.put('        </a>      </li>    </ul>    <div class="dsq-tab-container" style="height:90% !important;">        '), has_unmerged_users && a.put('        <div id="dsq-profile-merge" class="dsq-tab-content"></div>        '),
            a.put('        <div id="dsq-profile-edit" class="dsq-tab-content dsq-auth-form"></div>        <div id="dsq-profile-avatar" class="dsq-tab-content dsq-auth-form"></div>        <div id="dsq-profile-services" class="dsq-tab-content dsq-auth-form"></div>        <div id="dsq-profile-notifications" class="dsq-tab-content dsq-auth-form"></div>        <div id="dsq-profile-account" class="dsq-tab-content dsq-auth-form"></div>        <div id="dsq-profile-apps" class="dsq-tab-content dsq-auth-form"></div>    </div>  </div>'),
            a.compile()
    };
    b.blocks.commentMessage = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="'), a.put((a.esc || function (a) {
            return a
        })(cls)), a.put('" id="dsq-comment-message-'), a.put((a.esc || function (a) {
            return a
        })(comment.id)), a.put('">    '), comment.killed ? (a.put("      <em>"), a.put(trans("Comment removed.")), a.put("</em>    ")) : comment.approved ? (a.put("      "), a.put((a.esc || function (a) {
            return a
        })(comment.message)), a.put("      "), comment.last_modified_by == "moderator" ?
            (a.put('        <p class="dsq-editedtxt">('), a.put(trans("Edited by a moderator")), a.put(")</p>      ")) : comment.last_modified_by == "author" && comment.has_replies && (a.put('        <p class="dsq-editedtxt">('), a.put(trans("Edited by author")), a.put(" "), a.put((a.esc || function (a) {
            return a
        })(comment.last_modified_date)), a.put(")</p>      ")), a.put("    ")) : (a.put("      <em>"), a.put(trans("This comment was flagged for review.")), a.put("</em>    ")), a.put("  </div>"), a.compile()
    };
    b.blocks.popup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="dsq-popup-container '), strict && a.put("dsq-cleanslate "), a.put('">    <table>      <tbody>        <tr>          <td class="dsq-popup-tl"></td>          <td class="dsq-popup-b"></td>          <td class="dsq-popup-tr"></td>        </tr>        <tr>          <td class="dsq-popup-b"></td>          <td class="dsq-popup-body">            <div class="dsq-popup-wrapper">                <div class="dsq-popup-title">                    <button type="button" class="dsq-popup-close dsq-button-small" style="float:right; color: #fff">'),
            a.put(trans("Close")), a.put("</button>                    <h3>"), a.put((a.esc || function (a) {
            return a
        })(popupHeader)), a.put('</h3>                </div>                <div class="dsq-popup-content">                  '), a.put((a.esc || function (a) {
            return a
        })(popupBody)), a.put("                </div>                "), footer && (a.put('                <div class="powered-by">                  <a href="'), a.put((a.esc || function (a) {
            return a
        })(settings.disqus_url)), a.put('">                    <img src="'),
            a.put((a.esc || function (a) {
                return a
            })(settings.media_url)), a.put('/images/embed/disqus-logo-noborder.png" alt="Disqus Comments" style="margin-bottom:-5px;"/>                  </a>                </div>                ')), a.put('            </div>          </td>          <td class="dsq-popup-b"></td>        </tr>        <tr>          <td class="dsq-popup-bl"></td>          <td class="dsq-popup-b"></td>          <td class="dsq-popup-br"></td>        </tr>      </tbody>    </table>  </div>'), a.compile()
    };
    b.blocks.globalToolbar = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('    <div id="dsq-global-toolbar" class="dsq-clearfix">        <ul class="dsq-global-toolbar-right dsq-clearfix">        '), request.is_authenticated && (a.put('            <li class="dsq-messages">                <div id="dsq-messagesx-toolbar-icon" class="'), messagesx.count > 0 && a.put(" dsq-unread "), a.put(' dsq-dropdown-tab dsq-toolbar-item dsq-clearfix" onclick="DISQUS.dtpl.actions.fire(\'messagesx.toggleBar\'); return false;">                    <a href="#" class="dsq-message-count dsq-toolbar-label" id="dsq-messagesx-count">'),
            a.put((a.esc || function (a) {
                return a
            })(messagesx.count)), a.put('</a>                </div>                <div id="dsq-messagesx-toolbar-dropdown" class="dsq-dropdown">                    <h4>'), a.put(trans("Notifications")), a.put('</h4>                    <ul class="dsq-inbox" id="dsq-messagesx-inbox">                      <li id="dsq-inbox-no-messages">'), a.put(trans("You have no messages")), a.put('</li>                    </ul>                </div>                <div id="dsq-alert" class="dsq-alert dsq-alert-hidden">                  <div class="dsq-alert-notch"></div>                  <p>'),
            a.put(trans("You've received a new rank!")), a.put("</p>                </div>            </li>        ")), a.put("        "), context.switches.community_icon && (a.put('            <li class="dsq-community-box">                <a href="#" class="dsq-toolbar-item dsq-tt" onclick="DISQUS.dtpl.actions.fire(\'community.show\'); return false" title="'), a.put(trans("Expand Community Box")), a.put('"><span class="dsq-toolbar-icon"></span></a>            </li>        ')), a.put("        "), request.is_moderator &&
            (a.put('            <li class="dsq-admin-settings">                <a href="#" class="dsq-toolbar-item dsq-tt" onclick="DISQUS.dtpl.actions.fire(\'thread.settings\'); return false;"  title="'), a.put(trans("Settings")), a.put('"><span class="dsq-toolbar-icon"></span></a>            </li>        ')), a.put('            <li class="dsq-global-toolbar-dropdown-container">                '), function () {
            var c = {};
            b.extend(c, f);
            b.extend(c, {});
            a.put(b.renderBlock("globalToolbarDropdown", c))
        }(), a.put("            </li>        </ul>        "),
            forum.thread_votes_disabled || (a.put('        <ul class="dsq-global-toolbar-left dsq-clearfix">            <li class="dsq-like-thread">                <a href="#" id="dsq-like-thread-button" class="dsq-toolbar-item dsq-clearfix '), thread.user_vote == 1 && a.put("dsq-toggled"), a.put(' dsq-tt" onclick="DISQUS.dtpl.actions.fire(\'thread.vote\', 1); return false;" title="'), a.put(trans("I like this page")), a.put('">                    <span class="dsq-toolbar-icon"></span>                    <span class="dsq-toolbar-label">'),
                a.put(trans("Like")), a.put('</span>                </a>            </li>            <li class="dsq-dislike-thread">                <a href="#" id="dsq-dislike-thread-button" class="dsq-toolbar-item dsq-clearfix '), thread.user_vote == -1 && a.put("dsq-toggled"), a.put(' dsq-tt" onclick="DISQUS.dtpl.actions.fire(\'thread.vote\', -1); return false" title="'), a.put(trans("I don&#39;t like this page")), a.put('">                    <span class="dsq-toolbar-icon">'), a.put(trans("Dislike")), a.put('</span>                </a>            </li>            <li class="dsq-like-panel">                <ul class="dsq-like-faces dsq-clearfix">                    '),
                function () {
                    var c = {};
                    b.extend(c, f);
                    b.extend(c, {});
                    a.put(b.renderBlock("likeActivity", c))
                }(), a.put("                </ul>            </li>        </ul>        ")), a.put('    </div>    <div id="dsq-like-tooltip">      <div id="dsq-share-step-1" class="dsq-share-step">        <h3>'), a.put(trans("Glad you liked it. Would you like to share?")), a.put('</h3>        <p class="dsq-tooltip-checkbox"><input type="checkbox" id="dsq-share-thread-facebook" value="Facebook" /><label for="dsq-share-thread-facebook"><span class="dsq-facebook">Facebook</span></label></p>        <p class="dsq-tooltip-checkbox"><input type="checkbox" id="dsq-share-thread-twitter" value="Twitter" /><label for="dsq-share-thread-twitter"><span class="dsq-twitter">Twitter</span></label></p>        <ul id="dsq-tooltip-actions">          '),
            forum.template.api == "1.0" ? a.put('              <li><a href="#" onclick="DISQUS.dtpl.actions.fire(\'thread.share\'); return false" class="dsq-primary-action">') : a.put('              <li><a href="#" onclick="DISQUS.dtpl.actions.fire(\'thread.share.send\'); return false" class="dsq-primary-action">'), a.put(trans("Share")), a.put("</a></li>          "), a.put('          <li><a href="#" onclick="DISQUS.dtpl.actions.fire(\'thread.share.cancel\'); return false" class="dsq-secondary-action">'), a.put(trans("No thanks")),
            a.put('</a></li>        </ul>      </div>      <div id="dsq-share-step-2" class="dsq-share-step" style="display:none !important">        <p>'), a.put(trans("Sharing this page")), a.put(' &hellip;</p>      </div>      <div id="dsq-share-step-3" class="dsq-share-step" style="display:none !important">        <p>'), a.put(trans("Thanks!")), a.put(' <a href="#" class="dsq-tooltip-decline" onclick="DISQUS.dtpl.actions.fire(\'thread.share.cancel\'); return false">Close</a></p>      </div>    </div>    '), context.switches.show_unapproved &&
            unapproved.length && (a.put('    <div id="dsq-unapproved">      <h4>        '), unapproved.length > 1 ? (a.put("          "), a.put(b.interpolate(trans("You have %(unapproved)s unapproved comments"), {unapproved: unapproved.length}))) : (a.put("          "), a.put(trans("You have 1 unapproved comment"))), a.put("        "), a.put("      </h4>      <ul>      "), b.each(unapproved, function (b) {
            a.put('        <li><img src="');
            a.put((a.esc || function (a) {
                return a
            })(b.author.avatar));
            a.put('"/> ');
            a.put((a.esc || function (a) {
                return a
            })(b.raw_message.replace(/\n/,
                "")));
            a.put("</li>      ")
        }), a.put("      </ul>      <p>        "), unapproved.length > 1 ? (a.put("          "), a.put(trans("A moderator needs to approve these comments before they will be published."))) : (a.put("          "), a.put(trans("A moderator needs to approve this comment before it will be published."))), a.put("        "), a.put("      </p>    </div>    ")), a.compile()
    };
    b.blocks.recaptcha = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div id="dsq-captcha">      <div id="dsq-captcha-loading">          '),
            a.put('          <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/loading.gif"/>      </div>      <div id="dsq-captcha-container" style="display:none">          <p>'), a.put(trans("Please type in the following words to finish posting.")), a.put("</p>          "), a.put('          <div id="dsq-captcha-form"></div>          <button type="button" class="dsq-button">'), a.put(trans("Continue")), a.put("</button>      </div>  </div>"), a.compile()
    };
    b.blocks.messagesxPopup =
        function (d, f) {
            var a = new b.Builder, g = DISQUS.extend({}, d, f);
            with (g)return a.put("    "), message.theme == "notice" ? (a.put("        "), function () {
                var c = {};
                b.extend(c, f);
                b.extend(c, {});
                a.put(b.renderBlock("messagesxNotice", c))
            }(), a.put("    ")) : message.theme == "reply" ? (a.put("        "), function () {
                var c = {};
                b.extend(c, f);
                b.extend(c, {});
                a.put(b.renderBlock("messagesxReply", c))
            }(), a.put("    ")) : message.theme == "achievement" && (a.put("        "), function () {
                var c = {};
                b.extend(c, f);
                b.extend(c, {});
                a.put(b.renderBlock("messagesxAchievement",
                    c))
            }(), a.put("    ")), a.compile()
        };
    b.blocks.unapprovedEditedComment = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  <p>"), a.put(trans("Your comment must be approved by a moderator.")), a.put("</p>  <p>"), a.put(trans("Moderators of this website chose to explicitly approve all edits made by a comment's author.")), a.put("</p>"), a.compile()
    };
    b.blocks.likeActivity = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  "), b.each(thread.voters, function (b) {
            a.put('    <li class="dsq-tt" title="');
            a.put((a.esc || function (a) {
                return a
            })(b.name));
            a.put('"><a href="');
            a.put((a.esc || function (a) {
                return a
            })(b.url));
            a.put("\" onclick=\"return DISQUS.dtpl.actions.fire('profile.show', null, '");
            a.put((a.esc || function (a) {
                return a
            })(b.username));
            a.put("', ");
            a.put((a.esc || function (a) {
                return a
            })(b.is_moderator));
            a.put('); return false"><img src="');
            a.put((a.esc || function (a) {
                return a
            })(b.avatar));
            a.put('"/></a></li>  ')
        }), a.put('  <li class="dsq-like-activity">  '), thread.voters_count > 0 ? (a.put("      "),
            thread.likes - thread.voters_count > 0 ? (a.put("          "), a.put(b.interpolate(trans("and %(count)s %(other)s liked this."), {count: thread.likes - thread.voters_count, other: lang.pluralize(thread.likes - thread.voters_count, "other", "others")}))) : (a.put("          "), a.put((a.esc || function (a) {
                return a
            })("liked this."))), a.put("      "), a.put("  ")) : thread.likes > 0 && (a.put("      "), a.put(b.interpolate(trans("%(count)s %(person)s liked this."), {count: thread.likes, person: lang.pluralize(thread.likes, "person", "people")})),
            a.put("  ")), a.put("  </li>"), a.compile()
    };
    b.blocks.threadSettingsPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <span id="dsq-thread-settings-status" class="dsq-options-status"></span>  <p>'), a.put(trans("These settings only apply to this thread. To change settings site-wide,  visit the main")), a.put(' <a href="'), a.put((a.esc || function (a) {
            return a
        })(urls.settings)), a.put('" target="_blank">'), a.put(trans("settings page")), a.put('</a>.</p>  <div class="dsq-moderate-options">    <table class="dsq-moderator-settings">      <tr>        <td>          <h4>            '),
            thread.closed ? (a.put('            <a href="#" class="dsq-toggle-thread"               onclick="return DISQUS.dtpl.actions.fire(\'thread.open\');">'), a.put(trans("Open thread"))) : (a.put('            <a href="#" class="dsq-toggle-thread"               onclick="return DISQUS.dtpl.actions.fire(\'thread.close\');">'), a.put(trans("Close thread"))), a.put("</a>            "), a.put("          </h4>        </td>      </tr>      <tr>        <td>          <h4>"), a.put(trans("Automatic Closing")), a.put("</h4>          <p>"),
            a.put(trans("Do not allow comments after")), a.put('          <input size="3" id="dsq-thread-days-alive" value="'), a.put((a.esc || function (a) {
            return a
        })(thread.days_alive)), a.put('"                 type="text" /> '), a.put(trans("days")), a.put(".           "), a.put(trans("Using 0 days will disable this feature.")), a.put('</p>          <p class="dsq-form-actions">            <button type="button" onclick="DISQUS.dtpl.actions.fire(\'thread.updateDaysAlive\');" class="dsq-button-small">              <span>'),
            a.put(trans("Save")), a.put("</span>            </button>          </p>        </td>      </tr>      <tr>        <td>          <h4>"), a.put(trans("Moderate all comments")), a.put('</h4>          <ul class="dsq-moderator-radios">            <li><label><input type="radio" id="dsq-thread-moderate-all"                 name="moderate_all_comments" value="1" '), thread.moderate_all && a.put('checked="true" '), a.put("/>          "), a.put(trans("<strong>Yes</strong>, moderators must approve all comments before they are published.")),
            a.put('          </label></li>            <li><label><input type="radio" name="moderate_all_comments" value="0" '), thread.moderate_none && a.put('checked="true"'), a.put("/>          "), a.put(trans("<strong>No</strong>, comments don't need to be approved before they are published.")), a.put('</label></li>            <li><label><input type="radio" name="moderate_all_comments" value="2" '), !thread.moderate_all && !thread.moderate_none && a.put('checked="true"'), a.put("/>          "), a.put(trans("Use the <strong>default</strong> forum setting:")),
            a.put("&nbsp;"), forum.moderate_all ? a.put(trans("moderate all comments")) : a.put(trans("don't require moderation")), a.put('</label></li>          </ul>          <p class="dsq-form-actions">            <button type="button" onclick="DISQUS.dtpl.actions.fire(\'thread.updateModerateAll\');" class="dsq-button-small">              <span>'), a.put(trans("Save")), a.put("</span>            </button>          </p>        </td>      </tr>      "), thread.identifiers && (a.put("      <tr>        <td "), forum.reactions_enabled ||
            a.put('class="last"'), a.put(">          <h4>"), a.put(trans("Thread information:")), a.put("</h4>          <p><strong>"), a.put(trans("Shortname:")), a.put("</strong> "), a.put((a.esc || function (a) {
            return a
        })(forum.url)), a.put("</p>          <p><strong>"), a.put(trans("Thread ID:")), a.put("</strong> "), a.put((a.esc || function (a) {
            return a
        })(thread.id)), a.put('</p>          <p class="dsq-thread-identifiers">            <strong>'), thread.identifiers.length == 1 ? a.put(trans("Identifier:")) : a.put(trans("Identifiers:")),
            a.put("</strong> "), a.put((a.esc || function (a) {
            return a
        })(thread.identifiers.join(", "))), a.put("          </p>        </td>      </tr>      ")), a.put("      "), forum.reactions_enabled && (a.put('      <tr>        <td class="last">          <h4>'), a.put(trans("Manually scan reactions")), a.put("</h4>          <p>"), a.put(trans("Are you expecting Reactions for this thread, but do not see them? Click here to tell the system to search again.")), a.put('</p>          <p class="dsq-form-actions">            <button type="button" onclick="DISQUS.dtpl.actions.fire(\'reactions.reportMissing\');" class="dsq-button-small">              <span>'),
            a.put(trans("Scan")), a.put("</span>            </button>          </p>        </td>      </tr>      ")), a.put("    </table>  </div>"), a.compile()
    };
    b.blocks.moderatorOptions = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  "), request.is_moderator && (a.put('    <div id="dsq-thread-settings" class="dsq-thread-settings">'), a.put(trans("Moderator options")), a.put(':      <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.settings\');">'), a.put(trans("Settings")),
            a.put('</a>      <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.moderatorActions\');">'), a.put(trans("Moderate")), a.put('</a>      <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'thread.help\');">'), a.put(trans("Help")), a.put("</a>    </div>  ")), a.compile()
    };
    b.blocks.subscribeForm = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div style="width:350px">    <div class="dsq-field">        <label for="dsq-subscribe-email">'), a.put(trans("Your email")),
            a.put('</label>        <input type="text" id="dsq-subscribe-email"/>    </div>    <button type="button" class="dsq-button"            onclick="DISQUS.dtpl.actions.fire(\'thread.subscribe\', DISQUS.nodes.get(\'#dsq-subscribe-email\').value);">      '), a.put(trans("Subscribe")), a.put("    </button>  </div>"), a.compile()
    };
    b.blocks.moderateOptionsPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="dsq-moderate-options">    <table>      '), comment.email &&
            (a.put("      <tr>        <th>"), a.put(trans("Email")), a.put("</th>        <td>"), a.put((a.esc || function (a) {
                return a
            })(comment.email)), a.put("</td>      </tr>      ")), a.put("      "), comment.ip && (a.put("      <tr>        <th>"), a.put(trans("IP address")), a.put("</th>        <td>"), a.put((a.esc || function (a) {
            return a
        })(comment.ip)), a.put("</td>      </tr>      ")), a.put("      <tr>        <th>"), a.put(trans("Actions")), a.put("</th>        <td>          <ul>            "), request.moderator_can_edit &&
            (a.put('            <li>              <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'comments.edit.new\', '), a.put((a.esc || function (a) {
                return a
            })(comment.id)), a.put(');">'), a.put(trans("Edit Comment")), a.put("</a>            </li>            ")), a.put('            <li>              <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'comments.delete\', '), a.put((a.esc || function (a) {
            return a
        })(comment.id)), a.put(');">'), a.put(trans("Delete Comment")), a.put('</a>            </li>            <li>              <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'comments.spam\', '),
            a.put((a.esc || function (a) {
                return a
            })(comment.id)), a.put(');">'), a.put(trans("Mark Spam")), a.put('</a>            </li>            <li>              <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'comments.blacklist\', '), a.put((a.esc || function (a) {
            return a
        })(comment.id)), a.put(');">'), a.put(trans("Add to Blacklist")), a.put("</a>            </li>          </ul>        </td>      </tr>    </table>  </div>  <p>"), a.put(trans("Go to the full")), a.put(' <a href="'), a.put((a.esc || function (a) {
            return a
        })(urls.moderate)),
            a.put('" target="_blank">'), a.put(trans("moderate panel")), a.put("</a> "), a.put(trans("for more options.")), a.put("</p>"), a.compile()
    };
    b.blocks.pageInfo = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  "), request.is_global_moderator && (a.put('    <div class="dsq-global-moderator-extras"         style="display: block; margin-top: 10px; line-height: 20px; font-size: 14px; list-style-type: none; margin-left: 0;">      <strong>Shortname:</strong> '), a.put((a.esc || function (a) {
            return a
        })(forum.url)),
            a.put("<br/>      <strong>Thread ID:</strong> "), a.put((a.esc || function (a) {
            return a
        })(thread.id)), a.put("<br/>      <strong>Thread slug:</strong> "), a.put((a.esc || function (a) {
            return a
        })(thread.slug)), a.put("<br/>      <strong>Switches (Legacy):</strong> "), context.active_switches ? b.each(context.active_switches, function (b) {
            a.put(" ");
            a.put((a.esc || function (a) {
                return a
            })(b));
            a.put(", ")
        }) : a.put("<em>none</em>"), a.put("<br/>      <strong>Switches (Gargoyle):</strong> "), context.active_gargoyle_switches ?
            b.each(context.active_gargoyle_switches, function (b) {
                a.put(" ");
                a.put((a.esc || function (a) {
                    return a
                })(b));
                a.put(", ")
            }) : a.put("<em>none</em>"), a.put("<br/>      "), thread.topics && (a.put("        <strong>Thread topics:</strong> "), thread.topics.length ? b.each(thread.topics, function (b) {
            a.put(" ");
            a.put((a.esc || function (a) {
                return a
            })(b));
            a.put(", ")
        }) : a.put("<em>not classified</em>"), a.put("<br/>      ")), a.put("      "), forum.packages && (a.put("        <strong>Packages:</strong> "), forum.packages.length ?
            b.each(forum.packages, function (b) {
                a.put(" ");
                a.put((a.esc || function (a) {
                    return a
                })(b));
                a.put(", ")
            }) : a.put("<em>no packages</em>"), a.put("<br/>      ")), a.put("    </div>  ")), a.compile()
    };
    b.blocks.editProfileSuggestion = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div id="dsq-edit-profile-suggestion" style="display:none">    <p>'), a.put(trans("Thanks for posting.")), a.put(" "), a.put(trans("Would you like to")), a.put(' <a href="#" onclick="DISQUS.dtpl.actions.fire(\'profile.edit\'); return false">edit your profile</a>?  </div>'),
            a.compile()
    };
    b.blocks.editArea = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <div class="dsq-textarea-wrapper">    <textarea class="dsq-edit-textarea" id="dsq-edit-textarea-'), a.put((a.esc || function (a) {
            return a
        })(comment.id)), a.put('">      '), a.put((a.esc || function (a) {
            return a
        })(comment.message)), a.put('    </textarea>    <div id="dsq-edit-iframe-'), a.put((a.esc || function (a) {
            return a
        })(comment.id)), a.put('" style="display: none;"></div>  </div>  <div class="dsq-save-edit">    <button type="button" class="dsq-button"      onclick="DISQUS.dtpl.actions.fire(\'comments.edit.send\', '),
            a.put((a.esc || function (a) {
                return a
            })(comment.id)), a.put(', this);">      <span>'), a.put(trans("Save Edit")), a.put("</span>    </button>  </div>"), a.compile()
    };
    b.blocks.retweetsPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  <p><strong>"), a.put((a.esc || function (a) {
            return a
        })(reaction.author_name)), a.put(":</strong> "), a.put((a.esc || function (a) {
            return a
        })(reaction.body)), a.put('<br/><a href="'), a.put((a.esc || function (a) {
            return a
        })(reaction.url)), a.put('">'), a.put((a.esc ||
            function (a) {
                return a
            })(reaction.url)), a.put('<br/></p>  <ul class="dsq-retweets">    '), b.each(reaction.retweets, function (b) {
            a.put('    <li><a href="');
            a.put((a.esc || function (a) {
                return a
            })(b.url));
            a.put('">by ');
            a.put((a.esc || function (a) {
                return a
            })(b.author_name));
            a.put("</a></li>    ")
        }), a.put("  </ul>  "), a.compile()
    };
    b.blocks.mediaEmbedPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  "), media.type == 1 || media.type == 5 ? (a.put('  <p><img src="'), a.put((a.esc || function (a) {
            return a
        })(media.location)),
            a.put('" onload="DISQUS.popup.adjustPosition();"/></p>  <p><a href="'), a.put((a.esc || function (a) {
            return a
        })(media.location)), a.put('" target="_blank">'), a.put(trans("Original")), a.put("</a></p>  ")) : media.type == 2 ? (a.put('  <div style="width:480px !important;height:385px !important;">    <object width="480" height="385">      <param name="movie" value="http://www.youtube.com/v/'), a.put((a.esc || function (a) {
            return a
        })(media.location)), a.put('&hl=en_US&fs=1&"></param>      <param name="allowFullScreen" value="true"></param>      <param name="allowscriptaccess" value="always"></param>      <embed src="http://www.youtube.com/v/'),
            a.put((a.esc || function (a) {
                return a
            })(media.location)), a.put('&hl=en_US&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed>    </object>  </div>  ')) : media.type == 4 && (a.put('  <p><img src="'), a.put((a.esc || function (a) {
            return a
        })(media.metadata.medium)), a.put('" onload="DISQUS.popup.adjustPosition();"/></p>  <p><a href="'), a.put((a.esc || function (a) {
            return a
        })(media.metadata.url)), a.put('" target="_blank">'), a.put(trans("Original")),
            a.put("</a></p>  ")), a.compile()
    };
    b.blocks.postbox_login_options_dropdown = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('  <ul class="dsq-login-buttons">    '), b.each(loginOptions, function (b) {
            a.put("      ");
            b.enabled && (a.put("        "), b.userDefined ? (a.put('          <li class="dsq-login-button">            <a href="#" onclick="return DISQUS.dtpl.actions.fire(\''), a.put((a.esc || function (a) {
                return a
            })(b.action)), a.put('\');">              <img src="'), a.put((a.esc ||
                function (a) {
                    return a
                })(b.button_url)), a.put('">            </a>          </li>        ')) : (a.put('          <li class="dsq-login-button dsq-login-button-'), a.put((a.esc || function (a) {
                return a
            })(b.name)), a.put('">            <a href="#" onclick="return DISQUS.dtpl.actions.fire(\''), a.put((a.esc || function (a) {
                return a
            })(b.action)), a.put("');\"></a>          </li>        ")), a.put("      "));
            a.put("    ")
        }), a.put('    <li style="clear:both"></li>  </ul>'), a.compile()
    };
    b.blocks.unapprovedCommentMessage =
        function (d, f) {
            var a = new b.Builder, g = DISQUS.extend({}, d, f);
            with (g)return a.put("  "), mustVerify ? (a.put("  "), a.put(trans("You must finish verifying your Disqus Profile email address in order for your comment to appear here.")), a.put('<br/><br/>  <a href="'), a.put((a.esc || function (a) {
                return a
            })(urls.verify_email)), a.put('">'), a.put(trans("Click here to verify your email address")), a.put("</a>  ")) : (a.put("  "), a.put(trans("Your comment must be approved by a moderator before appearing here.")), a.put("  ")),
                a.compile()
        };
    b.blocks.userVotesPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  <ul>    "), b.each(users, function (b) {
            a.put('    <li class="dsq-liked-by-user">      <a href="');
            a.put((a.esc || function (a) {
                return a
            })(settings.disqus_url));
            a.put("/");
            a.put((a.esc || function (a) {
                return a
            })(b.username));
            a.put('" target="_blank">        <img src="');
            a.put((a.esc || function (a) {
                return a
            })(b.avatar_url));
            a.put('" alt=""/>        ');
            b.display_name ? a.put((a.esc || function (a) {
                return a
            })(b.display_name)) :
                a.put((a.esc || function (a) {
                    return a
                })(b.username));
            a.put("      </a>    </li>    ")
        }), a.put("  </ul>  "), anon_likes > 0 && (a.put("  <p>    "), users.length > 0 ? (a.put("      "), anon_likes < 2 ? (a.put("      "), a.put(b.interpolate(trans("and %(anon_likes)s guest"), {anon_likes: anon_likes}))) : (a.put("      "), a.put(b.interpolate(trans("and %(anon_likes)s guests"), {anon_likes: anon_likes})))) : (a.put("      "), anon_likes < 2 ? (a.put("      "), a.put(b.interpolate(trans("%(anon_likes)s guest"), {anon_likes: anon_likes}))) :
            (a.put("      "), a.put(b.interpolate(trans("%(anon_likes)s guests"), {anon_likes: anon_likes})))), a.put("      "), a.put("    "), a.put("  </p>  ")), a.compile()
    };
    b.blocks.helpLogin = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("<p>"), a.put(trans("In order to properly log you in, your browser needs to accept cookies from all domains.")), a.put("</p><p>"), a.put(trans("Open up Settings > Privacy. Then, make sure <strong>Accept cookies from sites</strong> is checked. Also, make sure <strong>Accept third-party</strong> is checked as well.")),
            a.put("</p><p>"), a.put(trans("After closing your settings, you may try logging in again.")), a.put("</p><p>"), a.put(trans("Optional: If you would rather add an exception just for Disqus, click &ldquo;Exceptions...&rdquo; and add disqus.com as an allowed domain.")), a.put("</p>"), a.compile()
    };
    b.blocks.moderatorHelpPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('<ul class="dsq-thread-help">  '), forum.reactions_enabled && (a.put('  <li>    <a href="#" onclick="return DISQUS.dtpl.actions.fire(\'reactions.reportMissing\');">'),
            a.put(trans("Report missing reactions")), a.put("</a>    <p>"), a.put(trans("Are you expecting Reactions for this thread, but do not see them? Select this option to tell the system to search again.")), a.put("</p>  </li>  ")), a.put('  <li>    <a href="http://help.disqus.com/forums/" target="_blank">'), a.put(trans("Knowledge Base")), a.put("</a>    <p>"), a.put(trans("Our Knowledge Base has the answers to the most common questions.")), a.put("</p>  </li></ul>"), a.compile()
    };
    b.blocks.messagesxAchievement =
        function (d, f) {
            var a = new b.Builder, g = DISQUS.extend({}, d, f);
            with (g)return a.put('    <div class="dsq-messagesx-icon">        '), message.formatted.icon ? (a.put('        <img src="'), a.put((a.esc || function (a) {
                return a
            })(message.formatted.icon)), a.put('" alt="" />        ')) : (a.put('        <img src="'), a.put((a.esc || function (a) {
                return a
            })(settings.media_url)), a.put('/img/disqus-bar/icons/trophey.png" alt="" />        ')), a.put("    </div>   <p>        "), a.put((a.esc || function (a) {
                return a
            })(message.formatted.text)),
                a.put("    </p>"), a.compile()
        };
    b.blocks.loadingPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put('<div style="text-align: center; padding: 5px 0 10px 0;">  <img src="'), a.put((a.esc || function (a) {
            return a
        })(settings.media_url)), a.put('/images/loading.gif" alt=""/></div>'), a.compile()
    };
    b.blocks.blacklistPopup = function (d, f) {
        var a = new b.Builder, g = DISQUS.extend({}, d, f);
        with (g)return a.put("  <p>    "), a.put(trans("Adding this person to the blacklist will block him or her from commenting on this site. Check the following types that you would like to add to the blacklist")),
            a.put(":  </p>  "), user.registered && (a.put('  <div class="dsq-blacklist-option">    <input id="dsq-blacklist-username" type="checkbox" checked="true" value="'), a.put((a.esc || function (a) {
            return a
        })(user.username)), a.put('"/>    <label for="dsq-blacklist-username"><strong>'), a.put(trans("Username")), a.put("</strong>: "), a.put((a.esc || function (a) {
            return a
        })(user.username)), a.put("</label>  </div>  ")), a.put("  "), comment.email && (a.put('  <div class="dsq-blacklist-option">    <input id="dsq-blacklist-email" type="checkbox" checked="true" value="'),
            a.put((a.esc || function (a) {
                return a
            })(comment.email)), a.put('"/>    <label for="dsq-blacklist-email"><strong>'), a.put(trans("Email address")), a.put("</strong>: "), a.put((a.esc || function (a) {
            return a
        })(comment.email)), a.put("</label>  </div>  ")), a.put('  <div class="dsq-blacklist-option">    <input id="dsq-blacklist-ip" type="checkbox" onclick="DISQUS.nodes.get(\'#dsq-blacklist-ip-warning\').style.display=\'block\';" value="'), a.put((a.esc || function (a) {
            return a
        })(comment.ip)), a.put('"/>    <label for="dsq-blacklist-ip"><strong>'),
            a.put(trans("IP address")), a.put("</strong>: "), a.put((a.esc || function (a) {
            return a
        })(comment.ip)), a.put('</label>    <p id="dsq-blacklist-ip-warning" style="display:none">      '), a.put(trans("Note: Blocking this person's IP address may also unintentionally      prevent others, who share his/her IP address, from commenting on      this site. This may include people who are sharing the same      computer, living in the same house, or using the same Internet      provider. Only block an IP address as a last resort.")),
            a.put('    </p>  </div>  <div class="dsq-blacklist-submit">    <span>      <input id="dsq-blacklist-retroactive" type="checkbox" value="1"/>      <label for="dsq-blacklist-retroactive">Apply to last 30 days of comments</label>    </span>    <button class="dsq-button" type="button" onclick="DISQUS.dtpl.actions.fire(\'comments.blacklist\', '), a.put((a.esc || function (a) {
            return a
        })(comment.id)), a.put(', true);">        '), a.put(trans("Add to Blacklist")), a.put("    </button>  </div>"), a.compile()
    }
});