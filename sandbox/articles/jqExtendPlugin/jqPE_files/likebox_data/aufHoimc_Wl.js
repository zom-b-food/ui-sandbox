/*1348460025,178142497*/

if (window.CavalryLogger) {
    CavalryLogger.start_js(["+USDd"]);
}

function fbpage_set_fan_status(a, b, c, d, e, f, g) {
    e = e ? e : function (j) {
        _fbpage_show_change_status_feedback(a, j.getPayload());
    };
    var h = {fbpage_id: b, add: c, reload: d};
    if (g != null)copyProperties(h, g);
    var i = new AsyncRequest().setURI('/ajax/pages/fan_status.php').setData(h).setNectarModuleDataSafe(a).setHandler(e);
    if (f)i.setErrorHandler(f);
    i.send();
    return false;
}
function fbpage_set_favorite_status(a, b, c) {
    var d = function () {
        _fbpage_show_change_status_feedback(a, this.getUserData());
    }, e = {fbpage_id: b, add: c}, f = new AsyncRequest().setMethod('POST').setURI('/ajax/pages/favorite_status.php').setData(e);
    new Dialog().setAsync(f).setCloseHandler(d).show();
    return false;
}
function _fbpage_show_change_status_feedback(a, b) {
    if (!b || !a)return;
    if (b.reload) {
        fbpage_reload_on_fan_status_changed(b.preserve_tab);
    } else fbpage_redraw_on_fan_status_changed(a, b.feedback);
}
function fbpage_reload_on_fan_status_changed(a) {
    var b = URI.getRequestURI();
    if (a) {
        var c = FutureSideNav.getInstance().selected.textKey;
        if (!b.getQueryData().sk && c)b.addQueryData({sk: c});
    }
    window.location.href = b;
}
function fbpage_redraw_on_fan_status_changed(a, b) {
    if (!b)return;
    if (Parent.byClass(a, 'fbTimelineEscapeSectionItem'))a = Parent.byClass(a, 'fan_status_inactive') || a;
    var c = DOM.create('span', {className: 'fan_status_inactive'}, b);
    a.parentNode.replaceChild(c, a);
    var d = function () {
        if (data.can_repeat_action)c.parentNode.replaceChild(a, c);
    };
    animation(c).duration(3000).checkpoint().to('backgroundColor', '#FFFFFF').duration(1000).ondone(d).go();
}
function fbpage_toggle_like_on_fan_status_changed(a, b) {
    var c = $('liked_pages_like_action_' + a), d = $('liked_pages_undo_action_' + a);
    CSS.conditionClass(c, 'hidden_elem', b);
    CSS.conditionClass(d, 'hidden_elem', !b);
}
function fbpage_inform_arbiter_on_change(a, b) {
    if (window.PageLikeButton)if (b) {
        PageLikeButton.informLike(a);
        PageLikeButton.informLikeSuccess(a);
    } else PageLikeButton.informUnlike(a);
}
__d("legacy:intl-locale", ["Locale"], function (a, b, c, d) {
    a.intl_locale_is_rtl = b('Locale').isRTL;
}, 3);
__d("legacy:placeholder-form-listener", ["PlaceholderListener"], function (a, b, c, d) {
    b('PlaceholderListener');
}, 3);
__d("legacy:placeholder-onsubmit-form-listener", ["PlaceholderOnsubmitFormListener"], function (a, b, c, d) {
    b('PlaceholderOnsubmitFormListener');
}, 3);
var ExternalNodeConnectWidget = function (a) {
    copyProperties(this, {widgetID: a.widgetID, widget: $(a.widgetID), viewerID: a.viewer, nodeType: a.nodeType, viewerIsAdmin: a.viewerIsAdmin && !a.userOptedOut, adminUrl: a.adminUrl, popupOptInParams: {}, nodeUri: new URI(a.nodeURL), externalUrl: a.externalURL, pageId: a.pageId, domainId: a.domainId, layout: a.layout, edgeType: a.edgeType, error: a.error, errorURI: new URI('/'), alreadyConnected: a.alreadyConnected, usingConnectLibrary: !!a.channelURL, commentWidgetMarkup: a.commentWidgetMarkup, commentWidgetOpen: false, commentWidgetVisible: false, userProfile: null, connectStoryFbid: 0, isAmbiguousText: a.isAmbiguousText, socialBar: a.socialbar, useDisconnectLink: a.useDisconnectLink, showError: a.showError, showConfirm: a.showConfirm, showFaces: a.showFaces, connectText: a.connectText, ref: a.ref, userOptedOut: a.userOptedOut, usingInlineCommenting: a.usingInlineCommenting, mobile: a.mobile, supportCommenting: !a.mobile && (!!a.channelURL || a.usingInlineCommenting), inlineCommentListenersInitialized: false, inlineCommentFocused: false, forceCommentHooks: a.forceCommentHooks, nux: a.nux, iframeReferer: a.iframeReferer, isBlocked: a.isBlocked, isPersonalized: a.isPersonalized, confirmedConnect: a.confirmedConnect, hasSend: a.send, colorScheme: a.colorScheme, grayOut: a.grayOut});
    if (this.usingConnectLibrary)UnverifiedXD.init({autoResize: a.autoResize, channelUrl: a.channelURL, resizeWidth: a.autoResize && a.layout !== ExternalNodeConnectWidget.STANDARD_LAYOUT});
    this.connectButtonSlider = DOM.scry(this.widget, 'div.connect_button_slider');
    this.connectButtonContainer = null;
    if (this.connectButtonSlider.length) {
        this.connectButtonSlider = this.connectButtonSlider[0];
        this.connectButtonContainer = DOM.find(this.connectButtonSlider, 'div.connect_button_container');
    } else this.connectButtonSlider = null;
    this.connectButton = DOM.find(this.widget, 'a.connect_widget_like_button');
    if (this.grayOut)this.tombstoneCross = DOM.find(this.widget, 'div.tombstone_cross');
    this.connectedMessage = DOM.scry(this.widget, 'span.connect_widget_connected_text');
    this.connectedMessage = this.connectedMessage.length ? this.connectedMessage[0] : null;
    this.notConnectedMessage = DOM.scry(this.widget, 'span.connect_widget_not_connected_text');
    this.notConnectedMessage = this.notConnectedMessage.length ? this.notConnectedMessage[0] : null;
    this.adminSpans = DOM.scry(this.widget, 'span.connect_widget_admin_span');
    if (this.adminSpans.length > 0) {
        this.adminLinks = [];
        for (var b = 0; b < this.adminSpans.length; b++)this.adminLinks[b] = DOM.find(this.adminSpans[b], 'a.connect_widget_admin_option');
    }
    if (this.layout == ExternalNodeConnectWidget.STANDARD_LAYOUT) {
        this.confirmationCell = DOM.find(this.widget, 'div.connect_confirmation_cell');
        this.userActionTextSpan = DOM.find(this.confirmationCell, 'span.connect_widget_user_action');
        this.summaryTextSpan = DOM.find(this.confirmationCell, 'span.connect_widget_summary');
        this.summaryText = DOM.find(this.confirmationCell, 'div.connect_widget_text_summary');
        var c = DOM.scry(this.widget, 'div.connect_widget_sample_connections');
        this.sampleConnections = c.length > 0 ? c[0] : null;
        if (a.showFaces && a.viewer > 0) {
            var d = DOM.scry(this.widget, 'div.connect_widget_logged_in_user');
            this.loggedInUserPhotoDiv = d.length > 0 ? d[0] : null;
        }
    }
    if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
        this.originalButtonWidth = this.computeButtonDimensions().width;
        this.summaryIncluding = DOM.find(this.widget, 'td.connect_widget_simple_including');
        this.supportCommenting = false;
        this.usingInlineCommenting = false;
    }
    this.setQueryData();
    if (this.pageId)copyProperties(this.popupOptInParams, {connect_id: this.pageId});
    this.errorSpans = DOM.scry(this.widget, 'span.connect_widget_error_span');
    if (this.errorSpans.length > 0) {
        this.errorLinks = [];
        for (var e = 0; e < this.errorSpans.length; e++)this.errorLinks[e] = DOM.find(this.errorSpans[e], 'a.connect_widget_error_text');
    }
    this.confirmSpans = DOM.scry(this.widget, 'span.connect_widget_confirm_span');
    if (this.confirmSpans.length > 0) {
        this.confirmLinks = [];
        for (var f = 0; f < this.confirmSpans.length; f++)this.confirmLinks[f] = DOM.find(this.confirmSpans[f], 'a.connect_widget_confirm_link');
    }
    this.unlikeSpans = DOM.scry(this.widget, 'span.unlike_span');
    this.unlikeLinks = [];
    for (var g = 0; g < this.unlikeSpans.length; g++) {
        this.unlikeLinks[g] = DOM.find(this.unlikeSpans[g], 'a.connect_widget_unlike_link');
        Event.listen(this.unlikeLinks[g], 'click', this.connectToNodeOnClick.bind(this));
    }
    var h = DOM.scry(this.widget, 'div.connect_widget_number_cloud');
    if (h.length == 1) {
        this.numberCloud = h[0];
        this.numberCloudNub = DOM.find(this.widget, 'div.connect_widget_number_cloud_nub');
        this.numberCloudExtension = DOM.find(this.numberCloud, 'div.connect_widget_number_cloud_extension');
        this.sizeNumberCloud();
        this.numberCloudUnlikeSpan = DOM.find(this.numberCloudExtension, 'span.unlike_span');
        this.numberCloudReminderSpan = DOM.find(this.numberCloudExtension, 'span.like_reminder');
        this.inAnimation = false;
        this.reminderIsVisible = CSS.hasClass(this.numberCloudUnlikeSpan, 'hidden_elem');
        Event.listen(this.numberCloud, 'mouseleave', this.restoreReminderSpan.bind(this));
        Event.listen(this.numberCloudExtension, 'mouseleave', this.restoreReminderSpan.bind(this));
        Event.listen(this.numberCloudExtension, 'mouseenter', this.exposeUnlikeSpan.bind(this));
        Event.listen(this.numberCloud, 'mouseenter', this.exposeUnlikeSpan.bind(this));
        Event.listen(this.numberCloudExtension, 'mouseleave', function (event) {
            this.requiresMouseLeaveEvent = false;
        }.bind(this));
    }
    if (this.usingInlineCommenting && !this.showFaces) {
        this.shareCommentSpans = DOM.scry(this.widget, 'span.connect_widget_share_comment_span');
        for (var i = 0; i < this.shareCommentSpans.length; i++) {
            var j = DOM.find(this.shareCommentSpans[i], 'a.connect_widget_share_comment_option');
            Event.listen(j, 'click', function (event) {
                Event.kill(event);
                for (var l = 0; l < this.shareCommentSpans.length; l++)CSS.addClass(this.shareCommentSpans[l], 'hidden_elem');
                this.presentCommentingOption();
            }.bind(this));
        }
    }
    if (this.layout === ExternalNodeConnectWidget.BUTTON_COUNT_LAYOUT) {
        XD.forced_min_width = this.getButtonCountWidgetWidth();
        this.numberExcluding = DOM.find(this.widget, 'td.connect_widget_button_count_excluding');
        this.summaryIncluding = DOM.find(this.widget, 'td.connect_widget_button_count_including');
        this.thumbsUpIcon = DOM.find(this.summaryIncluding, 'div.thumbs_up');
        this.undoRegion = DOM.find(this.summaryIncluding, 'div.undo');
        this.originalButtonWidth = this.computeButtonDimensions().width;
        Event.listen(this.thumbsUpIcon, 'mouseenter', function (event) {
            this.undoButton = DOM.find(this.undoRegion, 'label.undo_button input');
            Event.listen(this.undoButton, 'click', this.connectToNodeOnClick.bind(this));
            CSS.addClass(this.thumbsUpIcon, 'hidden_elem');
            CSS.removeClass(this.undoRegion, 'hidden_elem');
        }.bind(this));
        Event.listen(this.undoRegion, 'mouseleave', function (event) {
            CSS.removeClass(this.thumbsUpIcon, 'hidden_elem');
            CSS.addClass(this.undoRegion, 'hidden_elem');
        }.bind(this));
    }
    if (!this.isBlocked) {
        Event.listen(this.connectButton, 'click', this.primaryLikeButtonOnClick.bind(this));
        if (this.grayOut)Event.listen(this.tombstoneCross, 'click', this.connectToNodeOnClick.bind(this));
    }
    if (this.adminLinks)for (var b = 0; b < this.adminLinks.length; b++)Event.listen(this.adminLinks[b], 'click', this.presentAdminPage.bind(this));
    if (this.errorLinks)for (var b = 0; b < this.errorLinks.length; b++)Event.listen(this.errorLinks[b], 'click', this.presentErrorDialog.bind(this));
    if (this.confirmLinks)for (var k = 0; k < this.confirmLinks.length; k++)Event.listen(this.confirmLinks[k], 'click', this.presentConfirmDialog.bind(this));
    if (a.showCaptcha) {
        this.showCaptcha = true;
        this.connectToNode(true);
    }
    if (this.forceCommentHooks)this.setupCommentHooks($(this.forceCommentHooks));
    this.textInputMarginWithButton = 5;
    this.widthSyncArbiter = Arbiter.subscribe('platform/socialplugins/send/resize', this.syncSendWidgetWidth.bind(this));
    Arbiter.inform('platform/socialplugins/like/resize', {button_width: this.computeButtonDimensionsWithPadding().width, widget_width: Vector2.getElementDimensions(this.widget).x, layout: this.layout}, Arbiter.BEHAVIOR_STATE);
    Arbiter.subscribe('platform/socialplugins/dialog', function (l, m) {
        if (m.controllerID !== this.widgetID)this.otherCommentWidgetOpen = (m.event == 'open');
    }.bind(this));
    Arbiter.subscribe('platform/socialplugins/dialog', function (l, m) {
        if (m.controllerID !== this.divID && m.event == 'open')this.closeCommentWidget();
    }.bind(this));
    this.subscribeToSync(a);
};
copyProperties(ExternalNodeConnectWidget, {STANDARD_LAYOUT: 'standard', BOX_COUNT_LAYOUT: 'box_count', BUTTON_COUNT_LAYOUT: 'button_count', SIMPLE_LAYOUT: 'simple', COLOR_DARK: 0, COLOR_LIGHT: 1, OPT_IN_FACEBOOK_APP_ID: '127760087237610', updateLoggedInUser: function (a) {
    var b = ExternalNodeConnectWidget.controllerManagingLogin;
    b.setLoggedIn(a);
    b.connectToNode(true);
    b.userOptedOut = false;
    delete ExternalNodeConnectWidget.controllerManagingLogin;
    Arbiter.inform('platform/socialplugins/login', {user: a.user}, Arbiter.BEHAVIOR_STATE);
    WidgetArbiter.inform('platform/socialplugins/login', {user: a.user}, Arbiter.BEHAVIOR_STATE);
}, onCommentWidgetLoaded: function (a, b) {
    var c = ExternalNodeConnectWidget.self;
    delete ExternalNodeConnectWidget.self;
    c.injectCommentWidgetMarkup(a);
    setTimeout(function () {
        c.positionNub(b);
    }, 1000);
}});
copyProperties(ExternalNodeConnectWidget.prototype, {getSyncEndpointName: function () {
}, getConnectionEndpointName: function () {
}, getPluginName: function () {
}, subscribeToSync: function (a) {
    Arbiter.subscribe('platform/socialplugins/login', function (b, c) {
        if (this.viewerID && c.user !== this.viewerID)document.location.reload();
    }.bind(this));
    Arbiter.subscribe(this.getSyncEndpointName(), function (b, c) {
        if (c.externalUrl == a.externalURL) {
            this.userOptedOut = false;
            this.updateWidget(c.opts, true);
        }
    }.bind(this));
}, setQueryData: function () {
    copyProperties(this.popupOptInParams, {protocol: window.location.protocol, external_page_url: this.externalUrl});
    if (this.nux)copyProperties(this.popupOptInParams, {nux: this.nux, referer: this.iframeReferer});
}, updateWidget: function (a, b, c) {
    var d = (this.alreadyConnected != a.nowConnected) || (this.showConfirm != a.showConfirm);
    if (!b)Arbiter.inform(this.getConnectionEndpointName(), a, Arbiter.BEHAVIOR_STATE);
    this.alreadyConnected = a.nowConnected;
    this.viewerIsAdmin = a.isAdmin;
    this.showError = a.showError;
    this.showConfirm = a.showConfirm;
    this.adminUrl = a.adminUrl;
    this.userProfile = a.userProfile;
    this.connectStoryFbid = a.connectStoryFbid;
    this.error = a.error;
    if (!a.nowConnected)this.closeCommentWidget();
    if (d && !b || c) {
        var e = a.nowConnected ? 'edgeCreated' : 'edgeRemoved';
        UnverifiedXD.send({type: e});
    }
    if (d || this.error)this.syncWidgetDisplay();
    if (!b || c)WidgetArbiter.inform(this.getSyncEndpointName(), {externalUrl: this.externalUrl, opts: a}, Arbiter.BEHAVIOR_STATE);
}, presentOptIn: function () {
    ExternalNodeConnectWidget.controllerManagingLogin = this;
    PlatformOptInPopup.open(this.getPluginName(), 'opt.inlike', this.popupOptInParams);
    UnverifiedXD.send({type: 'authPrompted'});
}, setLoggedIn: function (a) {
    this.viewerID = a.user;
    this.newProfilePic = a.profilePic;
    this.placeDtsg(a.fbDtsg);
}, placeDtsg: function (a) {
    Env.fb_dtsg = a;
}, syncWidgetWithServer: function (a) {
    var b = a.getPayload();
    if (b.requires_login) {
        this.updateWidget({nowConnected: false, isAdmin: false}, false);
        this.presentOptIn();
        return;
    }
    var c = {nowConnected: b.success && b.already_connected, isAdmin: b.is_admin, showError: b.show_error, showConfirm: b.show_confirm, adminUrl: b.admin_url, userProfile: b.user_profile, connectStoryFbid: b.story_fbid, error: b.error_info};
    this.updateWidget(c, !b.success, b.success);
    if (b.success && this.showCaptcha) {
        window.opener.location.reload();
        window.close();
    }
}, getButtonCountWidgetWidth: function () {
    var a = DOM.find(this.widget, 'table.connect_widget_interactive_area'), b = Style.get(a, 'width');
    return parseInt(b, 10);
}, sizeNumberCloud: function () {
    this.collapsedNumberCloudHeight = this.getCollapsedNumberCloudHeight();
    this.expandedNumberCloudHeight = this.collapsedNumberCloudHeight + this.getNumberCloudExtensionHeight();
    if (this.alreadyConnected)Style.set(this.numberCloud, 'height', this.expandedNumberCloudHeight + 'px');
    var a = this.computeButtonDimensionsWithPadding().width;
    XD.forced_min_width = a;
    var b = intl_locale_is_rtl();
    a -= 2;
    Style.set(this.numberCloud, 'width', a + 'px');
    Style.set(this.numberCloud, 'visibility', 'visible');
    animation(this.numberCloud).from('opacity', 0).to('opacity', 1).duration(100).go();
}, getCollapsedNumberCloudHeight: function () {
    var a = Vector2.getElementDimensions(this.numberCloud).y, b = parseInt(Style.get(this.numberCloud, 'paddingTop'), 10), c = parseInt(Style.get(this.numberCloud, 'paddingBottom'), 10), d = parseInt(Style.get(this.numberCloud, 'border'), 10);
    return a - b - c - 2;
}, getNumberCloudExtensionHeight: function () {
    CSS.addClass(this.numberCloudExtension, 'connect_widget_offscreen');
    if (!this.alreadyConnected)CSS.removeClass(this.numberCloudExtension, 'hidden_elem');
    var a = Vector2.getElementDimensions(this.numberCloudExtension).y;
    if (!this.alreadyConnected)CSS.addClass(this.numberCloudExtension, 'hidden_elem');
    CSS.removeClass(this.numberCloudExtension, 'connect_widget_offscreen');
    return a;
}, restoreReminderSpan: function (event) {
    if (this.reminderIsVisible || this.inAnimation)return;
    this.animateReminderSpanReappearance();
}, animateReminderSpanReappearance: function () {
    if (this.reminderIsVisible || this.inAnimation)return;
    this.inAnimation = true;
    CSS.addClass(this.numberCloudUnlikeSpan, 'hidden_elem');
    Style.set(this.numberCloudReminderSpan, 'opacity', 0);
    CSS.removeClass(this.numberCloudReminderSpan, 'hidden_elem');
    animation(this.numberCloudReminderSpan).to('opacity', 1).duration(100).ondone(function () {
        this.inAnimation = false;
        this.reminderIsVisible = true;
    }.bind(this)).go();
}, exposeUnlikeSpan: function (event) {
    if (!this.alreadyConnected || this.requiresMouseLeaveEvent || !this.reminderIsVisible || this.inAnimation)return;
    this.inAnimation = true;
    CSS.addClass(this.numberCloudReminderSpan, 'hidden_elem');
    Style.set(this.numberCloudUnlikeSpan, 'opacity', 0);
    CSS.removeClass(this.numberCloudUnlikeSpan, 'hidden_elem');
    animation(this.numberCloudUnlikeSpan).to('opacity', 1).duration(100).ondone(function () {
        this.inAnimation = false;
        this.reminderIsVisible = false;
    }.bind(this)).go();
}, conditionallyActivateButton: function (event) {
    this.commentButtonIsActive = this.inlineCommentInput.value.trim().length > 0;
}, updateConnectionWithComment: function (event) {
    Event.kill(event);
    if (this.commentButtonIsActive) {
        this.postInlineComment();
        this.resetInlineComment();
        this.closeInlineComment();
    }
}, postInlineComment: function () {
    this.postUserComment(this.inlineCommentInput.value.trim(), false, 'iframe');
}, resetInlineComment: function () {
    this.concealCommentButton();
    this.inlineCommentInput.value = '';
}, showInlineComment: function (event) {
    Event.kill(event);
    if (!this.inlineCommentFlyoutOpen || this.inlineCommentFlyoutVisible || this.showConfirm || this.error)return;
    this.inlineCommentFlyoutVisible = true;
    CSS.show(this.inlineCommentFlyout);
}, hideInlineComment: function (event) {
    if (event)Event.kill(event);
    if (this.inlineCommentFocused || !this.inlineCommentFlyoutOpen || !this.inlineCommentFlyoutVisible)return;
    if (event && DOM.contains(this.inlineCommentFlyout, event.getRelatedTarget()))return;
    var a = this.inlineCommentInput.value.trim(), b = this.inlineCommentInput.getAttribute('placeholder');
    if (a.length > 0 && a != b)return;
    this.inlineCommentFlyoutVisible = false;
    CSS.hide(this.inlineCommentFlyout);
}, closeInlineComment: function () {
    this.inlineCommentFlyoutVisible = false;
    this.inlineCommentFlyoutOpen = false;
    CSS.hide(this.inlineCommentFlyout);
    this.resetInlineComment();
}, concealCommentButton: function () {
    CSS.addClass(this.inlineCommentButton, 'hidden_elem');
    Style.set(this.inlineCommentInput, 'width', this.textInputWidthWithoutButton + 'px');
    Style.set(this.inlineCommentInput, 'margin-right', 0);
}, positionInlineCommentFlyout: function () {
    CSS.addClass(this.inlineCommentFlyout, 'comment_widget_offscreen');
    CSS.removeClass(this.inlineCommentFlyout, 'hidden_elem');
    var a = 0, b = this.computeButtonDimensions(), c = b.height, d = this.grayOut ? a : a + 20, e = intl_locale_is_rtl() ? 'right' : 'left';
    if (this.showFaces) {
        var f = DOM.scry(this.widget, 'span.connect_widget_text')[0], g = intl_locale_is_rtl() ? 'paddingRight' : 'paddingLeft', h = Style.get(f, g);
        d = this.grayOut ? a : a + parseInt(h, 10);
        var i = Vector2.getElementDimensions(this.sampleConnections).y;
        c = i - 3;
    }
    var j = Vector2.getElementDimensions(this.summaryText).y;
    if (j > 15)c += 2;
    Style.set(this.inlineCommentFlyout, e, d + 'px');
    Style.set(this.inlineCommentFlyout, 'top', (-c) + 'px');
    var k = Vector2.getElementPosition(this.widget, 'document').x, l = Vector2.getElementDimensions(this.widget).x, m = k + l - d - 5;
    Style.set(this.inlineCommentFlyout, 'width', m + 'px');
    CSS.removeClass(this.inlineCommentButton, 'hidden_elem');
    var n = Vector2.getElementDimensions(this.inlineCommentButton).x;
    CSS.addClass(this.inlineCommentButton, 'hidden_elem');
    var o = (this.inlineCommentClose) ? 15 : 0;
    this.textInputWidthWithoutButton = m - 24 - o;
    this.textInputWidthWithButton = this.textInputWidthWithoutButton - n - this.textInputMarginWithButton - 1;
    Style.set(this.inlineCommentInput, 'width', this.textInputWidthWithoutButton + 'px');
    Style.set(this.inlineCommentInput, 'margin-right', 0);
    CSS.removeClass(this.inlineCommentFlyout, 'comment_widget_offscreen');
    CSS.addClass(this.inlineCommentFlyout, 'hidden_elem');
}, postUserComment: function (a, b, c) {
    var d = {href: this.externalUrl, node_type: this.nodeType, edge_type: this.edgeType, page_id: this.pageId, connect_text: this.connectText, story_fbid: this.connectStoryFbid, comment: a, widget_type: c || 'xfbml', own_product: b};
    new AsyncRequest().setURI(this.getCommentAjaxEndpoint()).setData(d).setNectarModuleDataSafe().setNectarImpressionIdSafe().send();
    this.closeCommentWidget();
}, closeCommentWidget: function () {
    if (this.commentWidgetOpen) {
        delete this.inGracePeriod;
        delete this.commentWidgetIsExpanded;
        this.commentWidgetVisible = false;
        this.commentWidgetOpen = false;
        UnverifiedXD.send({type: 'dismissEdgeCommentDialog'});
    }
}, presentAdminPage: function (event) {
    Event.kill(event);
    var a = '_blank';
    window.open(this.adminUrl.toString(), a);
}, presentErrorDialog: function (event) {
    Event.kill(event);
    if (!this.error.errorUri)return;
    var a = '_blank', b = 'toolbar=0, status=0, width=960, height=300';
    window.open(this.error.errorUri.toString(), a, b);
}, presentConfirmDialog: function (event) {
    Event.kill(event);
    var a = '_blank', b = 'toolbar=0,status=0,width=450,height=200,scrollbars=0,location=0,menubar=0';
    if (!window.confirmDialogReturn)window.confirmDialogReturn = {};
    window.confirmDialogReturn[this.widgetID] = this;
    var c = this.getConfirmURL();
    window.open(c, a, b);
}, returnFromConfirmDialog: function (a) {
    if (a) {
        this.showConfirm = null;
        this.confirmedConnect = a;
        this.connectToNode(!this.alreadyConnected);
    } else this.updateWidget({nowConnected: this.alreadyConnected, showConfirm: null, isAdmin: this.viewerIsAdmin}, false);
}, syncWidgetDisplay: function () {
    var a = this.alreadyConnected;
    this.setButtonState(a);
    this.showElementIf(this.connectedMessage, a);
    this.showElementIf(this.notConnectedMessage, !a);
    if (this.adminSpans)for (var b = 0; b < this.adminSpans.length; b++)this.showElementIf(this.adminSpans[b], this.viewerIsAdmin);
    if (this.errorSpans)for (var c = 0; c < this.errorSpans.length; c++)this.showElementIf(this.errorSpans[c], this.error && (this.viewerIsAdmin || this.showError));
    for (var d = 0; d < this.confirmSpans.length; d++)this.showElementIf(this.confirmSpans[d], !this.alreadyConnected && this.showConfirm);
    for (var e = 0; e < this.unlikeSpans.length; e++)this.showElementIf(this.unlikeSpans[e], this.alreadyConnected);
    if (this.shareCommentSpans)for (var f = 0; f < this.shareCommentSpans.length; f++)this.showElementIf(this.shareCommentSpans[f], a);
    this.showElementIf(this.connectButton, (!this.useDisconnectLink || !a) && !this.showConfirm);
    if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT) {
        this.manageBoxCountButtonAnimation(a);
    } else if (this.layout === ExternalNodeConnectWidget.BUTTON_COUNT_LAYOUT) {
        this.manageButtonCountButtonAnimation(a);
    } else if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
        this.manageSimpleButtonAnimation(a);
    } else this.manageStandardButtonAnimation(a);
    if (!this.loggedInUserPhotoDiv)return;
    if (a) {
        this.slideUserPhotoIn(this.loggedInUserPhotoDiv);
    } else this.slideUserPhotoOut(this.loggedInUserPhotoDiv);
}, manageStandardButtonAnimation: function (a) {
    if (this.grayOut)return;
    if (this.alreadyConnected || this.showConfirm) {
        this.hideButton(true);
    } else this.hideButton(false);
}, setButtonState: function (a) {
    if (a) {
        CSS.removeClass(this.connectButton, 'like_button_no_like');
        CSS.addClass(this.connectButton, 'like_button_like');
        this.fixIEButtonDoubleLineBug();
    } else {
        CSS.addClass(this.connectButton, 'like_button_no_like');
        CSS.removeClass(this.connectButton, 'like_button_like');
    }
}, fixIEButtonDoubleLineBug: function () {
    if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT && ua.ie() <= 7 && !this.hasBeenFixed) {
        var a = this.computeButtonDimensionsWithPadding();
        Style.set(this.connectButton, 'width', a.width + 1);
        this.hasBeenFixed = true;
    }
}, hideButton: function (a) {
    if (this.layout !== 'standard')return;
    if (this.oAnimateBlind)this.oAnimateBlind.stop();
    this.oAnimateBlind = animation(this.connectButtonSlider).duration(150);
    var b = 1, c = intl_locale_is_rtl(), d = c ? 'marginRight' : 'marginLeft', e = c ? 'marginLeft' : 'marginRight';
    if (a) {
        CSS.addClass(this.connectButtonContainer, 'hidden');
        this.oAnimateBlind.ondone(function () {
            Style.set(this.connectButtonContainer, d, '2px');
            Style.set(this.connectButtonContainer, 'visibility', 'hidden');
            CSS.addClass(this.confirmationCell, 'connect_confirmation_cell_like');
            CSS.removeClass(this.confirmationCell, 'connect_confirmation_cell_no_like');
            this.oAnimateBlind = null;
        }.bind(this));
    } else {
        Style.set(this.connectButtonContainer, d, '0px');
        b = Vector2.getElementDimensions(this.connectButton).x;
        this.oAnimateBlind.ondone(function () {
            Style.set(this.connectButtonSlider, 'overflow', 'visible');
            Style.set(this.connectButtonSlider, 'width', 'auto');
            CSS.removeClass(this.confirmationCell, 'connect_confirmation_cell_like');
            CSS.addClass(this.confirmationCell, 'connect_confirmation_cell_no_like');
            Style.set(this.connectButtonContainer, 'visibility', 'visible');
            CSS.removeClass(this.connectButtonContainer, 'hidden');
            this.oAnimateBlind = null;
        }.bind(this));
    }
    this.oAnimateBlind.to('width', b).blind().go();
}, showElementIf: function (a, b) {
    if (!a)return;
    if (b) {
        CSS.show(a);
    } else CSS.hide(a);
}, slideUserPhotoIn: function (a) {
    if (!CSS.hasClass(a, 'connect_widget_user_not_connected'))return;
    var b = Style.get(a, 'width');
    Style.set(a, 'width', 0);
    Style.set(a, 'opacity', 0);
    CSS.removeClass(a, 'connect_widget_user_not_connected');
    animation(a).to('width', b).duration(100).checkpoint().to('opacity', 1).duration(400).go();
}, slideUserPhotoOut: function (a) {
    if (CSS.hasClass(a, 'connect_widget_user_not_connected'))return;
    animation(a).to('opacity', 0).duration(100).checkpoint(.25).to('width', 0).duration(100).ondone(function () {
        CSS.addClass(a, 'connect_widget_user_not_connected');
        Style.set(a, 'width', null);
    }).go();
}, primaryLikeButtonOnClick: function (event) {
    if (this.grayOut && this.alreadyConnected && !this.mobile)return;
    this.connectToNodeOnClick(event);
    if (this.tombstoneCross && this.alreadyConnected)DOM.replace(this.tombstoneCross, HTML('<div class="tombstone_cross tombstone_cross_static" />'));
    setTimeout(function () {
        this.tombstoneCross = DOM.find(this.widget, 'div.tombstone_cross');
        CSS.removeClass(this.tombstoneCross, 'tombstone_cross_static');
        Event.listen(this.tombstoneCross, 'click', this.connectToNodeOnClick.bind(this));
    }.bind(this), 1000);
}, _clickLocked: false, connectToNodeOnClick: function (event) {
    Event.kill(event);
    if (!this._clickLocked) {
        this._clickLocked = true;
        setTimeout(function () {
            this._clickLocked = false;
        }.bind(this), 1000);
        if (this.viewerID == 0 || this.userOptedOut) {
            this.presentOptIn();
        } else this.connectToNode(!this.alreadyConnected);
    }
}, connectToNode: function (a) {
    if (!a) {
        if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT)return;
        if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT && !this.usingConnectLibrary) {
            CSS.addClass(this.userActionTextSpan, 'hidden_elem');
            CSS.removeClass(this.summaryTextSpan, 'hidden_elem');
            Style.set(this.summaryTextSpan, 'opacity', 1);
        }
        if (this.shareCommentSpans)for (var b = 0; b < this.shareCommentSpans.length; b++)CSS.addClass(this.shareCommentSpans[b], 'hidden_elem');
        if (this.commentWidgetOpen) {
            this.closeCommentWidget();
        } else if (this.inlineCommentFlyoutOpen)this.closeInlineComment();
    }
    this.updateWidget({nowConnected: !this.alreadyConnected, isAdmin: this.viewerIsAdmin}, true);
    var c = {href: this.externalUrl, node_type: this.nodeType, edge_type: this.edgeType, page_id: this.pageId, layout: this.layout, is_personalized: this.isPersonalized, show_captcha: this.showCaptcha, connect_text: this.connectText, ref: this.ref, now_connected: a, iframe_referer: this.iframeReferer};
    if (this.confirmedConnect)c.confirm = 1;
    new AsyncRequest().setURI(this.getAjaxEndpoint()).setHandler(this.syncWidgetWithServer.bind(this)).setData(c).setNectarModuleDataSafe().setNectarImpressionIdSafe().send();
    if (a) {
        if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT)this.requiresMouseLeaveEvent = true;
        if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT && !this.usingConnectLibrary) {
            Style.set(this.userActionTextSpan, 'opacity', 1);
            CSS.removeClass(this.userActionTextSpan, 'hidden_elem');
            CSS.addClass(this.summaryTextSpan, 'hidden_elem');
            Event.listen(this.widget, 'mouseleave', this.transitionBetweenMessages.bind(this));
        }
        if (this.shareCommentSpans) {
            for (var d = 0; d < this.shareCommentSpans; d++)CSS.removeClass(this.shareCommentSpans[d], 'hidden_elem');
        } else if (this.supportCommenting)this.presentCommentingOption();
        this.repositionFacepileVertically();
    }
}, transitionBetweenMessages: function (event) {
    if (!this.alreadyConnected || CSS.hasClass(this.userActionTextSpan, 'hidden_elem'))return;
    animation(this.userActionTextSpan).to('opacity', 0).duration(500).ondone(function () {
        CSS.addClass(this.userActionTextSpan, 'hidden_elem');
        Style.set(this.summaryTextSpan, 'opacity', 0);
        CSS.removeClass(this.summaryTextSpan, 'hidden_elem');
        animation(this.summaryTextSpan).to('opacity', 1).duration(500).ondone(function () {
            this.repositionFacepileVertically();
        }.bind(this)).go();
        this.positionInlineCommentFlyout();
    }.bind(this)).go();
}, presentCommentingOption: function () {
    Arbiter.inform('platform/socialplugins/dialog', {controllerID: this.widgetID, event: 'open'});
    if (this.usingConnectLibrary) {
        ExternalNodeConnectWidget.self = this;
        var a = {type: 'presentEdgeCommentDialog', masterFrameName: window.name, version: 2}, b = Vector2.getElementDimensions(this.connectButton), c = Vector2.getElementPosition(this.connectButton);
        a.anchorGeometry = {x: b.x, y: b.y};
        a.anchorPosition = {x: c.x, y: c.y};
        a.width = 400;
        a.height = 225;
        UnverifiedXD.send(a);
        this.commentWidgetOpen = true;
        this.commentWidgetVisible = true;
        this.commentWidgetExpanded = true;
    } else if (this.usingInlineCommenting)if (!this.inlineCommentListenersInitialized) {
        this.unwrapComment();
        this.initializeInlineCommentListeners();
        this.openInlineCommentFlyout();
        this.positionInlineCommentFlyout();
        this.inlineCommentListenersInitialized = true;
    } else {
        this.positionInlineCommentFlyout();
        this.openInlineCommentFlyout();
    }
}, unwrapComment: function () {
    if (this.unwrapComment.done)return;
    var a = $('connect-widget-comment-box-markup'), b = ExternalNodeConnectWidget.commentMarkup;
    a.innerHTML = b;
    this.unwrapComment.done = true;
}, initializeInlineCommentListeners: function () {
    this.inlineCommentFlyout = DOM.find(this.widget, '.connect_widget_comment_box');
    this.inlineCommentInput = DOM.find(this.inlineCommentFlyout, '.connect_widget_comment_textinput');
    this.inlineCommentButton = DOM.find(this.inlineCommentFlyout, '.connect_widget_comment_button');
    this.inlineCommentClose = DOM.scry(this.inlineCommentFlyout, '.connect_widget_comment_close_button');
    if (this.inlineCommentClose.length > 0)this.inlineCommentClose = this.inlineCommentClose[0];
    this.commentButtonIsActive = false;
    Event.listen(this.inlineCommentInput, 'keyup', this.conditionallyActivateButton.bind(this));
    Event.listen(this.inlineCommentInput, 'focus', function () {
        this.inlineCommentFocused = true;
        this.exposeCommentButton();
    }.bind(this));
    Event.listen(this.inlineCommentButton, 'click', this.updateConnectionWithComment.bind(this));
    Event.listen(this.inlineCommentInput, 'blur', function () {
        this.inlineCommentFocused = false;
        this.hideInlineComment();
    }.bind(this));
    Event.listen(this.widget, 'mouseout', this.hideInlineComment.bind(this));
    Event.listen(this.widget, 'mouseover', this.showInlineComment.bind(this));
    if (this.inlineCommentClose)Event.listen(this.inlineCommentClose, 'click', function (event) {
        for (var a = 0; a < this.shareCommentSpans.length; a++)CSS.removeClass(this.shareCommentSpans[a], 'hidden_elem');
        this.closeInlineComment();
    }.bind(this));
}, exposeCommentButton: function (event) {
    if (!CSS.hasClass(this.inlineCommentButton, 'hidden_elem'))return;
    CSS.removeClass(this.inlineCommentButton, 'hidden_elem');
    Style.set(this.inlineCommentInput, 'width', this.textInputWidthWithButton + 'px');
    Style.set(this.inlineCommentInput, 'margin-right', this.textInputMarginWithButton + 'px');
}, openInlineCommentFlyout: function () {
    CSS.show(this.inlineCommentFlyout);
    this.inlineCommentFlyoutOpen = true;
    this.inlineCommentFlyoutVisible = true;
}, manageBoxCountButtonAnimation: function (a) {
    if (a && !this.showConfirm) {
        this.animateBoxCountButtonDisappearance();
    } else this.animateBoxCountButtonReappearance();
}, animateBoxCountButtonDisappearance: function () {
    if (this.grayOut)return;
    CSS.addClass(this.connectButton, 'hidden_elem');
    Style.set(this.numberCloudExtension, 'opacity', 0);
    CSS.removeClass(this.numberCloudExtension, 'hidden_elem');
    CSS.addClass(this.numberCloudNub, 'hidden_elem');
    CSS.addClass(this.numberCloudUnlikeSpan, 'hidden_elem');
    CSS.removeClass(this.numberCloudReminderSpan, 'hidden_elem');
    animation(this.numberCloud).to('height', this.expandedNumberCloudHeight).duration(100).ondone(function () {
        animation(this.numberCloudExtension).from('opacity', 0).to('opacity', 1).duration(100).go();
    }.bind(this)).go();
}, animateBoxCountButtonReappearance: function () {
    CSS.addClass(this.numberCloudExtension, 'hidden_elem');
    animation(this.numberCloud).to('height', this.collapsedNumberCloudHeight).duration(75).ondone(function () {
        if (this.showConfirm) {
            for (var a = 0; a < this.confirmSpans.length; a++)CSS.removeClass(this.confirmSpans[a], 'hidden_elem');
        } else {
            Style.set(this.connectButton, 'opacity', 0);
            CSS.removeClass(this.connectButton, 'hidden_elem');
            animation(this.connectButton).from('opacity', 0).to('opacity', 1).duration(75).ondone(function () {
                Style.set(this.numberCloudNub, 'opacity', 0);
                CSS.removeClass(this.numberCloudNub, 'hidden_elem');
                animation(this.numberCloudNub).from('opacity', 0).to('opacity', 1).duration(50).go();
            }.bind(this)).go();
        }
    }.bind(this)).go();
}, manageButtonCountButtonAnimation: function (a) {
    if (a && !this.showConfirm) {
        this.animateButtonCountButtonDisappearance();
    } else this.animateButtonCountButtonReappearance();
    if (!this.grayOut) {
        CSS.removeClass(this.thumbsUpIcon, 'hidden_elem');
        CSS.addClass(this.undoRegion, 'hidden_elem');
    }
}, manageSimpleButtonAnimation: function (a) {
    if (this.grayOut)return;
    if (a && !this.showConfirm) {
        this.animateSimpleButtonDisappearance();
    } else this.animateSimpleButtonReappearance();
}, animateButtonCountButtonDisappearance: function () {
    if (!this.grayOut)animation(this.connectButton).from('opacity', 1).to('opacity', 0).from('width', this.originalButtonWidth).to('width', '0px').ondone(function () {
        CSS.addClass(this.connectButton, 'hidden_elem');
    }.bind(this)).duration(100).go();
    animation(this.numberExcluding).from('opacity', 1).to('opacity', 0).duration(100).ondone(function () {
        CSS.addClass(this.numberExcluding, 'hidden_elem');
        Style.set(this.summaryIncluding, 'opacity', 0);
        CSS.removeClass(this.summaryIncluding, 'hidden_elem');
        animation(this.summaryIncluding).from('opacity', 0).to('opacity', 1).duration(100).go();
    }.bind(this)).go();
    for (var a = 0; a < this.confirmSpans.length; a++)CSS.addClass(this.confirmSpans[a], 'hidden_elem');
    if (this.grayOut)CSS.removeClass(this.connectButton, 'hidden_elem');
}, animateSimpleButtonDisappearance: function () {
    animation(this.connectButton).from('opacity', 1).to('opacity', 0).from('width', this.originalButtonWidth).to('width', '0px').ondone(function () {
        CSS.addClass(this.connectButton, 'hidden_elem');
        Style.set(this.summaryIncluding, 'opacity', 0);
        CSS.removeClass(this.summaryIncluding, 'hidden_elem');
        animation(this.summaryIncluding).from('opacity', 0).to('opacity', 1).duration(100).go();
    }.bind(this)).duration(50).go();
    for (var a = 0; a < this.confirmSpans.length; a++)CSS.addClass(this.confirmSpans[a], 'hidden_elem');
    if (this.grayOut)CSS.removeClass(this.connectButton, 'hidden_elem');
}, computeButtonDimensions: function () {
    var a = CSS.hasClass(this.connectButton, 'hidden_elem');
    if (a) {
        CSS.addClass(this.connectButton, 'connect_widget_offscreen');
        CSS.removeClass(this.connectButton, 'hidden_elem');
    }
    var b = Vector2.getElementDimensions(this.connectButton), c = b.x, d = b.y, e = parseInt(Style.get(this.connectButton, 'paddingLeft'), 10), f = parseInt(Style.get(this.connectButton, 'paddingRight'), 10), g = parseInt(Style.get(this.connectButton, 'paddingTop'), 10), h = parseInt(Style.get(this.connectButton, 'paddingBottom'), 10);
    if (a) {
        CSS.addClass(this.connectButton, 'hidden_elem');
        CSS.removeClass(this.connectButton, 'connect_widget_offscreen');
    }
    return {width: c - e - f - 2, height: d};
}, computeButtonDimensionsWithPadding: function () {
    var a = CSS.hasClass(this.connectButton, 'hidden_elem');
    if (a) {
        CSS.addClass(this.connectButton, 'connect_widget_offscreen');
        CSS.removeClass(this.connectButton, 'hidden_elem');
    }
    var b = Vector2.getElementDimensions(this.connectButton), c = b.x, d = b.y;
    if (ua.ie())c += 3;
    if (a) {
        CSS.addClass(this.connectButton, 'hidden_elem');
        CSS.removeClass(this.connectButton, 'connect_widget_offscreen');
    }
    return {width: c, height: d};
}, animateButtonCountButtonReappearance: function () {
    if (this.showConfirm) {
        for (var a = 0; a < this.confirmSpans.length; a++)CSS.removeClass(this.confirmSpans[a], 'hidden_elem');
    } else if (!this.grayOut) {
        CSS.removeClass(this.connectButton, 'hidden_elem');
        animation(this.connectButton).from('width', '0px').to('width', this.originalButtonWidth).from('opacity', 0).to('opacity', 1).duration(100).go();
    }
    Style.set(this.summaryIncluding, 'opacity', 1);
    animation(this.summaryIncluding).from('opacity', 1).to('opacity', 0).duration(100).ondone(function () {
        CSS.addClass(this.summaryIncluding, 'hidden_elem');
        Style.set(this.numberExcluding, 'opacity', 0);
        CSS.removeClass(this.numberExcluding, 'hidden_elem');
        animation(this.numberExcluding).from('opacity', 0).to('opacity', 1).duration(100).go();
    }.bind(this)).go();
}, animateSimpleButtonReappearance: function () {
    if (this.showConfirm) {
        for (var a = 0; a < this.confirmSpans.length; a++)CSS.removeClass(this.confirmSpans[a], 'hidden_elem');
    } else {
        CSS.removeClass(this.connectButton, 'hidden_elem');
        animation(this.connectButton).from('width', '0px').to('width', this.originalButtonWidth).from('opacity', 0).to('opacity', 1).duration(100).go();
    }
    Style.set(this.summaryIncluding, 'opacity', 1);
    animation(this.summaryIncluding).from('opacity', 1).to('opacity', 0).duration(100).ondone(function () {
        CSS.addClass(this.summaryIncluding, 'hidden_elem');
    }.bind(this)).go();
}, injectCommentWidgetMarkup: function (a) {
    this.commentDocument = a;
    this.commentDocument.body.innerHTML = this.commentWidgetMarkup;
    this.transferCSSStyles();
    if (this.newProfilePic) {
        var b = DOM.find(this.commentDocument, 'img.connect_comment_widget_user_pic');
        b.src = this.newProfilePic;
        delete this.newProfilePic;
    }
    if (ua.ie()) {
        var c = DOM.scry(this.commentDocument, 'img.connect_comment_share_preview_pic');
        if (c.length > 0) {
            c = c[0];
            var d = 50, e = Vector2.getElementDimensions(c), f = d / e.x;
            if (f < 1) {
                Style.set(c, 'width', d);
                Style.set(c, 'height', e.y * f);
            }
        }
    }
    this.setupCommentHooks(this.commentDocument);
    this.commentWidgetIsExpanded = !this.inlineUnlikeLink;
    var g = this.getCommentActivatingComponent();
    g.onmouseout = this.commentDocument.body.onmouseout = this.onCommentMouseOut.bind(this);
    g.onmouseover = this.commentDocument.body.onmouseover = this.onCommentMouseOver.bind(this);
    this.inGracePeriod = false;
}, positionNub: function (a) {
    var b = DOM.find(this.connectButton, '.liketext'), c = Vector2.getElementPosition(b).x + 7, d = DOM.find(this.commentDocument.body, '.nub');
    if (intl_locale_is_rtl()) {
        c += b.offsetWidth - 14 - 7;
        left = c - parseFloat(a) + d.offsetWidth / 2;
    } else left = c - parseFloat(a) - d.offsetWidth / 2;
    d.style.left = left + 'px';
    d.style.visibility = 'visible';
}, onCommentMouseOut: function (a) {
    this.mouseOutside = true;
    return true;
}, onCommentMouseOver: function (a) {
    this.mouseOutside = false;
    return true;
}, setupCommentHooks: function (a) {
    this.placeholderInputRegion = DOM.find(a, 'div.connect_comment_widget_placeholder_input_region');
    this.placeholderInput = DOM.find(this.placeholderInputRegion, 'input.connect_comment_widget_placeholder_input');
    this.fullInputRegion = DOM.find(a, 'div.connect_comment_widget_full_input_region');
    this.fullInputTextarea = DOM.find(this.fullInputRegion, 'textarea.connect_comment_widget_full_input_textarea');
    this.ownProductCheckbox = DOM.scry(a, 'input.connect_comment_widget_own_product_checkbox');
    if (this.ownProductCheckbox.length > 0)this.ownProductCheckbox = this.ownProductCheckbox[0];
    this.widgetButtonRegion = DOM.find(a, 'div.connect_comment_widget_button_region');
    this.postToFacebookButton = DOM.scry(this.widgetButtonRegion, '.connect_comment_widget_post_button input');
    if (this.postToFacebookButton.length > 0) {
        this.postToFacebookButton = this.postToFacebookButton[0];
        this.postToFacebookButton.onclick = this.updateUserComment.bind(this);
    }
    this.closeButton = DOM.scry(this.widgetButtonRegion, '.connect_comment_widget_close_button input');
    if (this.closeButton.length > 0) {
        this.closeButton = this.closeButton[0];
        this.closeButton.onclick = this.closeCommentWidget.bind(this);
    }
    this.inlineUnlikeLink = DOM.scry(a, 'a.connect_comment_widget_unlike_link');
    if (this.inlineUnlikeLink.length > 0) {
        this.inlineUnlikeLink = this.inlineUnlikeLink[0];
        Event.listen(this.inlineUnlikeLink, 'click', this.connectToNodeOnClick.bind(this));
    }
    this.defaultInputText = this.placeholderInput.value;
    this.placeholderInput.onfocus = this.transitionToFullInputMode.bind(this);
    this.fullInputTextarea.onfocus = this.removePlaceholderText.bind(this);
    this.fullInputTextarea.onblur = (function (b) {
        this.restorePlaceholderText();
        if (this.mouseOutside)return this.hideCommentWidget();
    }).bind(this);
    if (this.closeButton) {
        this.closeButton.onclick = this.closeCommentWidget.bind(this);
        this.fullInputTextarea.onkeydown = (function (b) {
            b = b || window.event;
            if (!b)return true;
            if (b.keyCode == 13 && !(b.ctrlKey || b.shiftKey || b.altKey || b.metaKey)) {
                this.updateUserComment();
                return false;
            }
            if (this.didResetOnKeydown)return true;
            this.removePlaceholderText();
            this.didResetOnKeydown = true;
            return true;
        }).bind(this);
        this.transitionToFullInputMode();
    }
}, getCommentActivatingComponent: function () {
    if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT || this.layout === ExternalNodeConnectWidget.BUTTON_COUNT_LAYOUT) {
        return this.widget;
    } else if (this.layout === ExternalNodeConnectWidget.SIMPLE_LAYOUT) {
        return this.widget;
    } else if (this.grayOut) {
        return DOM.find(this.widget, 'table.connect_widget_interactive_area');
    } else return this.confirmationCell;
}, showCommentWidget: function (event) {
    if (this.otherCommentWidgetOpen)return false;
    this.inGracePeriod = true;
    this.killCloseThread();
    if (this.commentWidgetOpen && !this.commentWidgetVisible) {
        this.commentWidgetVisible = true;
        CSS.show(this.commentDocument.body);
        UnverifiedXD.send({type: 'showEdgeCommentDialog'});
    }
    return false;
}, hideCommentWidget: function (event) {
    if (this.otherCommentWidgetOpen)return false;
    this.inGracePeriod = false;
    if (this.commentWidgetOpen && this.commentWidgetVisible) {
        var a = function () {
            if (!this.inGracePeriod && this.shouldHideExpandedWidget()) {
                this.fullInputTextarea.blur();
                this.commentWidgetVisible = false;
                if (!this.socialBar)CSS.hide(this.commentDocument.body);
                UnverifiedXD.send({type: 'hideEdgeCommentDialog'});
            }
            this.inGracePeriod = false;
            this.killCloseThread();
        }.bind(this);
        this.closeThreadID = setTimeout(a, 100);
    }
    return false;
}, shouldHideExpandedWidget: function () {
    return !this.commentWidgetIsExpanded || this.fullInputTextarea.value === '' || this.fullInputTextarea.value === this.defaultInputText;
}, killCloseThread: function () {
    if (this.closeThreadID) {
        clearTimeout(this.closeThreadID);
        delete this.closeThreadID;
    }
}, transferCSSStyles: function () {
    var a = DOM.scry(window.document, 'link'), b = DOM.scry(window.document, 'style'), c = DOM.find(window.document, 'html'), d = DOM.find(this.commentDocument, 'html'), e = DOM.find(this.commentDocument, 'head');
    for (var f = 0; f < a.length; f++)if (a[f].rel == 'stylesheet') {
        var g = this.commentDocument.createElement('link');
        g.rel = a[f].rel;
        g.href = a[f].href;
        g.type = a[f].type;
        e.appendChild(g);
    }
    for (f = 0; f < b.length; f++) {
        var h = this.commentDocument.createElement('style'), i = b[f].innerText || b[f].textContent || b[f].innerHTML;
        h.setAttribute("type", "text/css");
        e.appendChild(h);
        if (h.styleSheet) {
            h.styleSheet.cssText = i;
        } else {
            var j = this.commentDocument.createTextNode(i);
            h.appendChild(j);
        }
    }
    d.id = c.id;
    d.className = c.className;
    this.commentDocument.body.className = window.document.body.className;
}, transitionToFullInputMode: function (event) {
    this.commentWidgetIsExpanded = true;
    CSS.hide(this.placeholderInputRegion);
    CSS.show(this.fullInputRegion);
    CSS.show(this.widgetButtonRegion);
    if (this.closeButton) {
        this.restorePlaceholderText();
        var a = this.fullInputTextarea;
        if (document.selection) {
            var b = a.createTextRange();
            b.collapse(true);
            b.moveEnd('character', 0);
            b.moveStart('character', 0);
            b.select();
        } else if (a.setSelectionRange) {
            a.focus();
            a.setSelectionRange(0, 0);
        }
    }
    return false;
}, removePlaceholderText: function (event) {
    if (CSS.hasClass(this.fullInputTextarea, 'connect_comment_widget_disabled')) {
        CSS.removeClass(this.fullInputTextarea, 'connect_comment_widget_disabled');
        this.fullInputTextarea.value = '';
    }
    return false;
}, restorePlaceholderText: function (event) {
    if (this.fullInputTextarea.value.trim() == '') {
        this.fullInputTextarea.value = this.defaultInputText;
        CSS.addClass(this.fullInputTextarea, 'connect_comment_widget_disabled');
    }
    return false;
}, updateUserComment: function (event) {
    var a = this.fullInputTextarea.value.trim(), b = this.ownProductCheckbox.checked;
    if (a === '' || a == this.defaultInputText) {
        if (b === false)return false;
        a = '';
    }
    this.postUserComment(a, b);
    return false;
}, getAjaxEndpoint: function () {
    return '/ajax/connect/external_node_connect.php';
}, getCommentAjaxEndpoint: function () {
    return '/ajax/connect/external_edge_comment.php';
}, getConfirmURL: function () {
    var a = {href: this.externalUrl, page_id: this.pageId, node_type: this.nodeType, edge_type: this.edgeType, widget_id: this.widgetID};
    if (this.ref)a.ref = this.ref;
    return URI('/plugins/like_confirm.php').addQueryData(a).toString();
}, updateLoggedInUser: function (a, b) {
    ExternalNodeConnectWidget.updateLoggedInUser(a, b);
}, syncSendWidgetWidth: function (a, b) {
    var c = this.computeButtonDimensionsWithPadding().width, d = b.button_width - c;
    if (this.layout === ExternalNodeConnectWidget.BOX_COUNT_LAYOUT && d > 0 && d <= 5) {
        Style.set(this.connectButton, 'width', (b.button_width - parseInt(Style.get(this.connectButton, 'paddingLeft')) - parseInt(Style.get(this.connectButton, 'paddingRight')) - parseInt(Style.get(this.connectButton, 'borderLeftWidth')) - parseInt(Style.get(this.connectButton, 'borderRightWidth'))) + 'px');
        this.sizeNumberCloud();
    }
    if (this.layout === ExternalNodeConnectWidget.STANDARD_LAYOUT) {
        var e = Vector2.getElementDimensions(this.widget).y;
        Style.set(this.widget, 'height', (e + 5) + 'px');
        var f = ua.ie(), g = intl_locale_is_rtl(), h = g ? 'right' : 'left';
        if (f && f < 9) {
            Style.set(this.connectButton, 'position', 'absolute');
            Style.set(this.connectButton, h, -(b.button_width + 10) + 'px');
        } else {
            Style.set(this.connectButton, 'position', 'fixed');
            Style.set(this.connectButton, h, '0px');
        }
        if (f && this.connectButtonSlider) {
            Style.set(this.connectButtonSlider, h, b.button_width + 'px');
            if (f <= 7)this.fixIEButtonDoubleLineBug();
        }
        Style.set(this.confirmationCell, 'position', 'absolute');
        Style.set(this.confirmationCell, h, (b.button_width + c + 5) + 'px');
        Style.set(this.confirmationCell, 'top', '5px');
        if (this.sampleConnections) {
            Style.set(this.sampleConnections, 'position', 'fixed');
            Style.set(this.sampleConnections, h, '0');
        }
        this.invertedButtons = true;
        this.repositionFacepileVertically();
    }
}, repositionFacepileVertically: function () {
    if (this.invertedButtons && this.sampleConnections) {
        var a = Vector2.getElementDimensions(this.summaryText).y;
        Style.set(this.sampleConnections, 'margin-top', (5 + a + 5) + 'px');
    }
}});
function ConnectWidget(a, b, c, d, e) {
    copyProperties(this, {channel_url: e, like_mode: d, profile_id: b, viewer_id: a, status: null, popup: null, busy: false, new_fan: null, user_profile: null});
    this.fan_hidden = [];
    this.fan_shown = [];
    var f = DOM.scry(document, 'div.connections');
    if (f.length > 0) {
        f = f[0];
        this.user_profile = DOM.find(f, 'div.user_profile');
        this.new_fan = DOM.find(f, 'div.grid_item_plus');
        this.fan_shown.push(this.new_fan);
        this.fan_shown.push(DOM.find(f, 'span.total_plus'));
        var g = DOM.scry(f, 'span.total'), h = DOM.scry(f, 'div.grid_item');
        if (h.length > 1)this.fan_hidden.push(h[1]);
        this.fan_hidden.push(g[g.length - 1]);
    }
    if (!this.like_mode) {
        this.button = $(c);
        this.popup_uri = new URI('/login.php');
        this.popup_uri.addQueryData({connect_id: this.profile_id, popup: true});
        Event.listen(this.button, 'click', this.connectClickHandler.bind(this));
    } else Arbiter.subscribe('platform/like/connection', this.updateWidgetFromLike.bind(this));
    ConnectWidget.instances[c] = this;
    if (this.channel_url)XD.init({channelUrl: this.channel_url});
}
ConnectWidget.instances = {};
ConnectWidget.is_connect = true;
ConnectWidget.prototype.setLoggedIn = function (a) {
    this.viewer_id = a;
    return this;
};
ConnectWidget.prototype.connectClickHandler = function (a) {
    a.kill();
    if (this.viewer_id != 0) {
        this.connect();
    } else this.popUpLogin();
};
ConnectWidget.prototype.connect = function () {
    if (!this.busy) {
        this.busy = true;
        fbpage_set_fan_status(this.button, this.profile_id, true, false, this.connectDoneHandler.bind(this), this.connectErrorHandler.bind(this), this.getAsyncData());
    }
};
ConnectWidget.prototype.disconnect = function () {
    if (!this.busy) {
        this.busy = true;
        fbpage_set_fan_status(this.button, this.profile_id, false, false, this.connectUndoneHandler.bind(this), function () {
        }, this.getAsyncData());
    }
};
ConnectWidget.prototype.getAsyncData = function () {
    var a = {source: 'connect', is_connect: ConnectWidget.is_connect, fan_origin: 'external_connect'};
    if (Env.fb_dtsg)a.fb_dtsg = Env.fb_dtsg;
    return a;
};
ConnectWidget.prototype.popUpLogin = function () {
    window.open(this.popup_uri.toString(), '_blank', 'toolbar=0,status=0,width=626,height=400');
};
ConnectWidget.prototype.updateWidgetFromLike = function (a, b) {
    if (!b.userProfile)return;
    if (this.user_profile) {
        var c = DOM.find(this.user_profile, 'img'), d = DOM.find(this.user_profile, 'a'), e = DOM.find(this.user_profile, 'div.name');
        c.src = b.userProfile.pic_square;
        d.href = b.userProfile.profile_url;
        DOM.setContent(e, b.userProfile.name);
    }
    var f;
    if (b.nowConnected) {
        f = 'likeboxLiked';
        this.showNewFan();
    } else {
        f = 'likeboxUnliked';
        this.hideNewFan();
    }
    if (this.channel_url)XD.send({type: f});
};
ConnectWidget.prototype.connectErrorHandler = function (a) {
    if (a.error == 1357001) {
        this.viewer_id = 0;
        this.popUpLogin();
    } else if (a.error == 1357013) {
        CSS.hide(this.button);
        var b = DOM.create('a', {href: DOM.find(document, 'div.name_block a').href, target: '_blank'}, "Verification is needed to connect.");
        this.status = DOM.create('span', {className: 'connect_span'}, b);
        DOM.insertAfter(this.button, this.status);
    } else {
        CSS.hide(this.button);
        if (a.error == 1431001) {
            this.status = DOM.create('span', {className: 'connect_span'}, "You like this.");
        } else this.status = DOM.create('span', {className: 'connect_span'}, a.getErrorSummary() + ': ' + a.getErrorDescription());
        animation(this.status).from('opacity', 0).to('opacity', 1).go();
        DOM.insertAfter(this.button, this.status);
    }
    this.busy = false;
};
ConnectWidget.prototype.connectDoneHandler = function (a) {
    var b = a.getPayload();
    if (!b || !b.feedback)return;
    this.status = DOM.create('span', {className: 'connect_span'}, HTML(b.feedback));
    var c = DOM.create('a', {className: 'undo'}, "Undo");
    Event.listen(c, 'click', function (e) {
        e.kill();
        this.disconnect();
    }.bind(this));
    DOM.appendContent(this.status, c);
    animation(this.status).from('opacity', 0).to('opacity', 1).go();
    DOM.insertAfter(this.button, this.status);
    CSS.hide(this.button);
    if (this.new_fan != null && b.connect_fan_div) {
        var d = DOM.create('div', null, HTML(b.connect_fan_div));
        DOM.setContent(this.new_fan, DOM.find(d, 'a'));
    }
    this.showNewFan();
    this.busy = false;
};
ConnectWidget.prototype.showNewFan = function () {
    this.fan_shown.forEach(function (a) {
        if (!CSS.hasClass(a, 'hidden_elem'))return;
        var b = Style.get(a, 'width');
        Style.set(a, 'width', 0);
        Style.set(a, 'opacity', 0);
        CSS.show(a);
        animation(a).to('width', b).duration(100).checkpoint().to('opacity', 1).duration(400).go();
    });
    this.fan_hidden.forEach(function (a) {
        CSS.hide(a);
    });
};
ConnectWidget.prototype.connectUndoneHandler = function (a) {
    var b = a.getPayload();
    DOM.remove(this.status);
    animation(this.button).from('opacity', 0).to('opacity', 1).go();
    CSS.show(this.button);
    this.hideNewFan();
    this.busy = false;
};
ConnectWidget.prototype.hideNewFan = function () {
    this.fan_shown.forEach(function (a) {
        if (CSS.hasClass(a, 'hidden_elem'))return;
        animation(a).to('opacity', 0).duration(100).checkpoint(.25).to('width', 0).duration(100).ondone(function () {
            Style.set(a, 'width', null);
            CSS.hide(a);
            this.fan_hidden.forEach(function (b) {
                CSS.show(b);
            });
        }.bind(this)).go();
    }.bind(this));
};
ConnectWidget.loadStream = function (a, b, c) {
    new AsyncRequest().setMethod('GET').setURI('/ajax/connect/connect_widget.php').setData({id: a, uniqid: b, force_wall: c}).setReadOnly(true).setErrorHandler(bagofholding).send();
};
ConnectWidget.loggedIn = function (a) {
    for (var b in ConnectWidget.instances) {
        ConnectWidget.instances[b].setLoggedIn(a);
        ConnectWidget.instances[b].connect();
    }
};
ConnectWidget.setIsConnect = function (a) {
    ConnectWidget.is_connect = a;
};
var ExternalPageLikeWidget = function (a) {
    a.edgeType = 'like';
    this.parent.construct(this, a);
    this.unactionLink = DOM.scry(this.widget, 'span.unlike_link')[0];
    if (this.unactionLink)Event.listen(this.unactionLink, 'click', this.connectToNodeOnClick.bind(this));
    this.hasShowedInsights = false;
    this.showInsights();
};
Class.extend(ExternalPageLikeWidget, 'ExternalNodeConnectWidget');
ExternalPageLikeWidget.LIKE_EDGE_TYPE = 0;
ExternalPageLikeWidget.RECOMMEND_EDGE_TYPE = 1;
copyProperties(ExternalPageLikeWidget.prototype, {getSyncEndpointName: function () {
    var a = this.connectText ? this.connectText : 'like';
    if (a == ExternalPageLikeWidget.RECOMMEND_EDGE_TYPE)a = 'like';
    return 'platform/' + a + '/sync';
}, getConnectionEndpointName: function () {
    return 'platform/like/connection';
}, getPluginName: function () {
    return 'like';
}, presentInsightsPage: function (event) {
    Event.kill(event);
    var a;
    a = '/insights/?inline_link=true&sk=';
    if (this.pageId) {
        a += 'po_' + this.pageId;
    } else a += 'lo_' + this.domainId;
    window.open(a, '_blank');
}, showInsights: function () {
    if (this.hasShowedInsights || (!this.pageId && !this.domainId))return;
    var a = DOM.scry(this.widget, 'a.connect_widget_insights_link');
    if (a)for (var b = 0; b < a.length; b++) {
        CSS.show(a[b].parentNode);
        Event.listen(a[b], 'click', this.presentInsightsPage.bind(this));
    }
    this.hasShowedInsights = true;
}, repositionFacepileVertically: function () {
    this.showInsights();
    this.parent.repositionFacepileVertically();
}});