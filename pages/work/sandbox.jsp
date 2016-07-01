<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>www.adam-marsh.com - contact</title>
    <%@ include file="/sitewide/globals.jsp" %>
    <script src="${assetPath}/js/components/slidenav.js"></script>
    <script src="${assetPath}/js/components/popAccordion.js"></script>
    <script src="${assetPath}/js/components/jquery.popWin.js"></script>

    <style type="text/css">
        .rotate {
            -moz-transition: all 1s linear;
            -webkit-transition: all 1s linear;
            transition: all 1s linear;
        }
        .rotate.down {
            -moz-transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    </style>
</head>
<body>
<div id="work-in-progress">
    <div class="sk-chasing-dots">
        <div class="sk-child sk-dot1"></div>
        <div class="sk-child sk-dot2"></div>
    </div>
</div>
<header>
    <%@ include file="/sitewide/workNavL.jsp" %>
</header>
<main id="content">
    <div class="am-middle">
        <div class="uk-container uk-container-center noPad">
            <div class="uk-grid" data-uk-grid-margin>
                <div class="uk-width-medium-8-10">
                    <h1>Adam L Marsh</h1>
                    <h2><img class="true" src="${assetPath}/images/rule2.gif" alt="" style="width:12px; height:4px;"/>&nbsp;ui-design-engineering.com&nbsp;<img
                            class="true" src="${assetPath}/images/rule.gif" alt="" style="width:208px; height:9px;"/></h2>
                    <h4><img class="true" src="${assetPath}/images/rule2.gif" alt="" style="width:12px; height:4px;"/>&nbsp;[Interested in remote/telecommute
                        opportunities]</h4>
                    <div class="uk-grid" data-uk-grid-margin>
                        <div class="uk-width-medium-2-10 uk-hidden-small noPad">
                            <section data-uk-sticky="{top:100}">
                                <nav class="am-nav2">
                                    <%@ include file="/sitewide/sidenavLinks.jsp" %>
                                </nav>
                            </section>
                        </div>
                        <div class="uk-width-medium-8-10">
                            <section class="frame">
                                <h2>UI Development Sandbox</h2>
                                 <p style="margin-left:14px;">Welcome to my sandbox where I try out new js libraries,
                                    widgets, and much, much more. :)</p>
                                <br class="clear"/>
                                <ul class="collapsible popout collapsible-accordion" id="popAccordion"
                                    data-collapsible="accordion">
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate"
                                                                                       style="opacity:.7;"></i>&nbsp;&nbsp;Forms
                                        </div>
                                        <div class="collapsible-body open">
                                            <div class="uk-grid" data-uk-grid-margin>
                                                <div class="uk-width-medium-1-2">
                                                    <ul>
                                                        <li><a href="${contextPath}/sandbox/forms/html5.html"
                                                               class="flash_simple_1"
                                                               data-options="width:600, height:660">HTML5</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/validators.html"
                                                               class="flash_simple_2"
                                                               data-options="width:600, height:660">Validators</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/invisible.html"
                                                               class="flash_simple_3"
                                                               data-options="width:600, height:660">Invisible</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/attribute.html"
                                                               class="flash_simple_4"
                                                               data-options="width:600, height:660">Attribute</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/file.html"
                                                               class="flash_simple_5"
                                                               data-options="width:600, height:660">File</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/ajaxSubmit.html"
                                                               class="flash_simple_6"
                                                               data-options="width:600, height:660">Ajax PHP Submit</a>
                                                        </li>
                                                        <li><a href="${contextPath}/sandbox/forms/choice.html"
                                                               class="flash_simple_7"
                                                               data-options="width:600, height:660">Choice</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/collapse.html"
                                                               class="flash_simple_8"
                                                               data-options="width:600, height:660">Collapse</a></li>

                                                    </ul>
                                                </div>
                                                <div class="uk-width-medium-1-2">
                                                    <ul>
                                                        <li><a href="${contextPath}/sandbox/forms/mailgun.html"
                                                               class="flash_simple_9"
                                                               data-options="width:600, height:660">Mailgun</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/tab.html"
                                                               class="flash_simple_10"
                                                               data-options="width:600, height:660">Tab</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/dynamic.html"
                                                               class="flash_simple_11"
                                                               data-options="width:600, height:660">Dynamic 1</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/dynamic2.html"
                                                               class="flash_simple_12"
                                                               data-options="width:600, height:660">Dynamic 2</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/dynamic4.html"
                                                               class="flash_simple_13"
                                                               data-options="width:600, height:660">Dynamic 3</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/selector2.html"
                                                               class="flash_simple_14"
                                                               data-options="width:600, height:660">Selector 2</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/typehead.html"
                                                               class="flash_simple_15"
                                                               data-options="width:600, height:660">Typehead</a></li>
                                                        <li><a href="${contextPath}/sandbox/forms/event3.html"
                                                               class="flash_simple_16"
                                                               data-options="width:600, height:660">Captcha</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                     </li>
                                    <li class="clean">
                                         <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate"
                                                                                       style="opacity:.7;"></i>&nbsp;&nbsp;Javascript [DOM]
                                        </div>
                                        <div class="collapsible-body open">
                                            <ul class="fancybullet medium-up">
                                                <li><a href="${contextPath}/sandbox/dom/widget2.jsp"
                                                       class="flash_simple_17" data-options="width:820, height:740">Dynamic
                                                    DOM js</a></li>
                                                <li><a href="${contextPath}/sandbox/dom/js.jsp" class="flash_simple_18"
                                                       data-options="width:820, height:740">Random js Functions</a></li>
                                            </ul>
                                         </div>
                                    </li>
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate"
                                                                                       style="opacity:.7;"></i>&nbsp;&nbsp;AJAX
                                        </div>
                                        <div class="collapsible-body open">
                                            <ul class="fancybullet">
                                                <li><a href="${contextPath}/sandbox/ajax/getxml.jsp"
                                                       class="flash_simple_24" data-options="width:600, height:660">Get XML</a></li>
                                                <li><a href="${contextPath}/sandbox/ajax/getphp.jsp"
                                                       class="flash_simple_25" data-options="width:600, height:660">Get PHP</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate"
                                                                                       style="opacity:.7;"></i>&nbsp;&nbsp;Angular.js Applications
                                        </div>
                                         <div class="collapsible-body open">
                                            <ul class="fancybullet">
                                                <li class="medium-up"><a
                                                        href="${contextPath}/sandbox/angular-demo/app/angular.jsp"
                                                        class="flash_simple_19" data-options="width:820, height:740">Angular.js
                                                    JSON Application</a></li>
                                                <li><a href="${contextPath}/sandbox/angular-form/messages.jsp"
                                                       class="wide">Angular.js Dynamic Form</a></li>
                                             </ul>
                                        </div>
                                    </li>

                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate"
                                                                                       style="opacity:.7;"></i>&nbsp;&nbsp;Java
                                            &amp; JSP
                                        </div>
                                        <div class="collapsible-body open">
                                            <ul class="fancybullet medium-up">
                                                <li><a href="${contextPath}/sandbox/java-jsp/registerEntry.jsp"
                                                       class="flash_simple_20" data-options="width:600, height:660">Registration
                                                    Servlet</a></li>

                                                <li><a href="${contextPath}/sandbox/java-jsp/enter_email.jsp"
                                                       class="flash_simple_23" data-options="width:600, height:660">Java
                                                    Mail Servlet</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <br class="clear"/>
                            </section>
                        </div>
                    </div>
                </div>
                <div class="uk-width-medium-2-10 uk-hidden-small">
                    <%@ include file="/sitewide/sidebar.jsp" %>
                </div>
            </div>
        </div>
    </div>
</main>

<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
    <%@ include file="/sitewide/footer.jsp" %>
</footer>

<script src="${contextPath}/resources/js/ilightbox/css_browser_selector.min.js"></script>
<script src="${contextPath}/resources/js/ilightbox/jquery.js"></script>
<script src="${contextPath}/resources/js/ilightbox/jquery.requestAnimationFrame.js"></script>
<script type="text/javascript" async defer src="http://iprodev.com/projects.php?p=ilightbox"></script>
<script src="${contextPath}/resources/js/ilightbox/jquery.mousewheel.js"></script>
<script src="${contextPath}/resources/js/ilightbox/ilightbox.packed.js"></script>
<script src="${contextPath}/resources/js/ilightbox/init.js"></script>
<script src="${contextPath}/resources/js/components/jquery.popWin.js"></script>
<script>
    $('.collapsible-header').click(function () {
        $(this).find('i').toggleClass('down')
    });
</script>
<script type="text/javascript">
    <!--
    document.write('<img src="/axs/ax.pl?mode=img&ref=');
    document.write( escape( document.referrer ) );
    document.write('" height="1" width="1" style="display:none" alt="" />');
    // -->
</script><noscript>
    <img src="/axs/ax.pl?mode=img" height="1" width="1" style="display:none" alt="" />
</noscript>
</body>
</html>
