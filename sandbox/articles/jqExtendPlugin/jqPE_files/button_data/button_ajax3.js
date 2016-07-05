var popup = false;
(function () {
    var Track = {links: function () {
        var match = "";
        for (var i = 0; i < urls.length; i++) {
            var link = document.createElement("a");
            link.href = urls[i];
            document.body.appendChild(link);
            if (document.defaultView != undefined) {
                var color = document.defaultView.getComputedStyle(link, "").getPropertyValue("color")
            } else {
                var color = link.currentStyle["color"]
            }
            if (color == "rgb(0, 0, 0)" || color == "#000000") {
                match != "" ? match += "," + escape(urls[i]) : match = escape(urls[i])
            }
        }
        var params = "url=" + escape(document.getElementById("url").value) + "&timing=" + timer + "&visited=" + match;
        Ajax.request("/track", params)
    }};
    var Button = {disable: function () {
        retweet.className = "retweet selected";
        if (document.getElementById("tweeted")) {
            retweet.innerHTML = '<span class="left"></span>' + document.getElementById("tweeted").value + '<span class="right"></span>'
        } else {
            retweet.innerHTML = '<span class="left"></span>tweeted<span class="right"></span>'
        }
    }, beenTweeted: function () {
        var data = Cookie.getData();
        for (var i = 0; i < data.length; i++) {
            if (data[i] == tweet.id.substr(1)) {
                Button.disable();
                return true
            }
        }
        return false
    }, createPopup: function (url, x, y, title) {
        popup = function () {
            var top = (window.screen.height / 2) - (y / 2);
            var left = (window.screen.width / 2) - (x / 2);
            window.open(url, "", "menubar=0,resizable=1,status=1,toolbar=0,location=0,width=" + x + ",height=" + y + ",top=" + top + ",left=" + left)
        };
        retweet.target = "";
        var old_href = retweet.href;
        retweet.href = "JavaScript: popup();"
    }, selector: function (classname, objects) {
        for (var i = 0; i < objects.length; i++) {
            var classes = objects[i].className.split(" ");
            for (j in classes) {
                if (classes[j] == classname) {
                    return objects[i]
                }
            }
        }
        return false
    }, buildParams: function () {
        var url = "";
        for (var i = 0; i < params.length; i++) {
            var input = document.getElementById(params[i]);
            if (input) {
                value = input.value;
                if (value != "") {
                    url += "&" + params[i] + "=" + encodeURIComponent(value)
                }
            }
        }
        return url
    }};
    var Cookie = {create: function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString()
        } else {
            var expires = ""
        }
        document.cookie = name + "=" + value + expires + "; path=/; domain=tweetmeme.com"
    }, erase: function (name) {
        this.create(name, "", -1)
    }, read: function (name) {
        try {
            var nameEQ = name + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1, c.length)
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length)
                }
            }
            return null
        } catch (err) {
            return null
        }
    }, getData: function () {
        var data = Cookie.read("tweetmeme_tweeted");
        if (data != null) {
            return data.split("-")
        } else {
            return new Array()
        }
    }, saveData: function (id) {
        var data = Cookie.getData();
        data.push(id);
        Cookie.create("tweetmeme_tweeted", data.join("-"), 7)
    }, getSettings: function () {
        if (Cookie.read("user_settings") != null) {
            var args = decodeURIComponent(Cookie.read("user_settings"));
            var args = args.split("&");
            var s = new Object;
            for (var i = 0; i < args.length; i++) {
                var dum = args[i].split("=");
                s[dum[0]] = dum[1]
            }
            return s
        } else {
            return false
        }
    }};
    var Event = {add: function (object, action, onSuccess) {
        if (object.addEventListener) {
            object.addEventListener(action, onSuccess, false)
        } else {
            if (object.attachEvent) {
                object.attachEvent("on" + action, onSucces)
            }
        }
    }};
    var Ajax = {request: function (url, params, onSuccess) {
        xmlhttp = null;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            if (window.ActiveXObject) {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        if (xmlhttp != null) {
            if (onSuccess != undefined) {
                xmlhttp.onreadystatechange = onSuccess
            }
            xmlhttp.open("POST", url, true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.setRequestHeader("Content-length", params.length);
            xmlhttp.setRequestHeader("Connection", "close");
            xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xmlhttp.send(params)
        }
    }};
    var params = new Array("source", "service", "service_api", "alias", "hashtags", "space", "advertid");
    var urls = new Array("http://twitter.com", "http://tweetmeme.com");
    var timer = 0;
    var xmlhttp;
    var tweet = Button.selector("tweetmemebutton", document.getElementsByTagName("div"));
    var a = document.getElementsByTagName("a");
    var count = Button.selector("count", a);
    var retweet = Button.selector("retweet", a);
    var c = Button.selector("c", document.getElementsByTagName("span"));
    var settings = Cookie.getSettings();
    var user = (Cookie.read("user") != null && Cookie.read("user_token") != null) ? true : false;
    setInterval(function () {
        timer++
    }, 1000);
    if (c.innerHTML != "?") {
        Button.beenTweeted();
        if (user) {
            var url = "http://tweetmeme.com/popup/tweet";
            url += "?url_id=" + tweet.id.substr(1);
            url += Button.buildParams();
            Button.createPopup(url, 500, 225, "Retweet")
        } else {
            var url = "http://tweetmeme.com/auth/login?autotweet=1&r=";
            url += escape("/popup/option" + "?url_id=" + tweet.id.substr(1));
            url += Button.buildParams();
            Button.createPopup(url, 800, 400)
        }
        var tweetedcheck = function () {
            if (!Button.beenTweeted()) {
                setTimeout(tweetedcheck, 1000)
            } else {
                if (timer > 1) {
                    if (c.innerHTML.indexOf("k") == -1) {
                        c.innerHTML = parseInt(c.innerHTML) + 1
                    }
                }
            }
        };
        setTimeout(tweetedcheck, 1000)
    }
})();