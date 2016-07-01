(function ($) {
    $.fn.popupWindow = function (instanceSettings) {

        return this.each(function () {

            $(this).click(function () {

                $.fn.popupWindow.defaultSettings = {
                    centerBrowser: 0, // center window over browser window? {1 (YES) or 0 (NO)}. overrides top and left
                    centerScreen: 0, // center window over entire screen? {1 (YES) or 0 (NO)}. overrides top and left
                    height: 500, // sets the height in pixels of the window.
                    width: 500, // sets the width in pixels of the window.
                    top: 0, // top position when the window appears.
                    left: 0, // left position when the window appears.
                    resizable: 1, // whether the window can be resized {1 (YES) or 0 (NO)}. Can also be overloaded using resizable.
                    scrollbars: 1, // determines whether scrollbars appear on the window {1 (YES) or 0 (NO)}.
                    toolbar: 1, // determines whether a toolbar (includes the forward and back buttons) is displayed {1 (YES) or 0 (NO)}.
                    location: 1, // determines whether the address bar is displayed {1 (YES) or 0 (NO)}.
                    menuBar: 1, // determines whether the menu bar is displayed {1 (YES) or 0 (NO)}.
                    status: 1, // whether a status line appears at the bottom of the window {1 (YES) or 0 (NO)}.
                    windowName: null, // name of window set from the name attribute of the element that invokes the click
                    windowURL: null // url used for the popup
                };

                var settings = $.extend({}, $.fn.popupWindow.defaultSettings, instanceSettings || {});

                var windowFeatures = 'height=' + settings.height +
                    ',width=' + settings.width +
                    ',toolbar=' + settings.toolbar +
                    ',scrollbars=' + settings.scrollbars +
                    ',status=' + settings.status +
                    ',resizable=' + settings.resizable +
                    ',location=' + settings.location +
                    ',menuBar=' + settings.menubar;

                settings.windowName = this.name || settings.windowName;
                settings.windowURL = this.href || settings.windowURL;
                var centeredY, centeredX;

                if (settings.centerBrowser) {

                    if ($.browser.msie) {//hacked together for IE browsers
                        centeredY = (window.screenTop - 120) + ((((document.documentElement.clientHeight + 120) / 2) - (settings.height / 2)));
                        centeredX = window.screenLeft + ((((document.body.offsetWidth + 20) / 2) - (settings.width / 2)));
                    }
                    else {
                        centeredY = window.screenY + (((window.outerHeight / 2) - (settings.height / 2)));
                        centeredX = window.screenX + (((window.outerWidth / 2) - (settings.width / 2)));
                    }
                    window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus();
                }
                else if (settings.centerScreen) {
                    centeredY = (screen.height - settings.height) / 2;
                    centeredX = (screen.width - settings.width) / 2;
                    window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + centeredX + ',top=' + centeredY).focus();
                }
                else {
                    window.open(settings.windowURL, settings.windowName, windowFeatures + ',left=' + settings.left + ',top=' + settings.top).focus();
                }
                return false;
            });

        });
    };
})(jQuery);


$(function () {
    $('.smallpop').popupWindow({
        height: 500,
        width: 640,
        top: 50,
        left: 50,
        toolbar: 1,
        location: 1,
        menuBar: 1
    });
    $('.medpop').popupWindow({
        height: 780,
        width: 900,
        top: 50,
        left: 50,
        toolbar: 1,
        location: 1,
        resizeable: 1,
        menuBar: 1
    });
    $('.popupwindow').popupWindow({
        height: 660,
        width: 775,
        top: 50,
        left: 50,
        toolbar: 1,
        location: 1,
        menuBar: 1
    });
    $(".samples").popupWindow({
        height: 780,
        width: 740,
        top: 30,
        left: 40,
        toolbar: 0,
        location: 0,
        menuBar: 0
    });

    $(".angular").popupWindow({
        height: 780,
        width: 865,
        top: 30,
        left: 40,
        toolbar: 0,
        location: 0,
        menuBar: 0
    });

    $(".standard").popupWindow({
        height: 780,
        width: 775,
        top: 30,
        left: 40,
        toolbar: 0,
        location: 0,
        menuBar: 0
    });

    $(".article").popupWindow({
        height: 780,
        width: 775,
        top: 30,
        left: 40,
        toolbar: 1,
        location: 1,
        menuBar: 0
    });

    $(".pop").popupWindow({
        height: 580,
        width: 775,
        top: 30,
        left: 40,
        toolbar: 1,
        location: 1,
        menuBar: 0
    });

    $(".wide").popupWindow({
        height: 910,
        width: 1220,
        top: 30,
        left: 40,
        toolbar: 0,
        location: 0,
        menuBar: 0
    });
});
