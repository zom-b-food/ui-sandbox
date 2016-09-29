<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Accordion component - UIkit documentation</title>
        <%@ include file="/sitewide/globals.jsp" %>
        <script src="../resources/js/components/popAccordion.js"></script>
        <script src="../resources/js/components/accordion.js"></script>

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
   <%-- <div id="work-in-progress">
        <div class="sk-chasing-dots">
            <div class="sk-child sk-dot1"></div>
            <div class="sk-child sk-dot2"></div>
        </div>
    </div>--%>
    <header>
        <%@ include file="/sitewide/header.jsp" %>
    </header>

    <main id="content">

            <div class="uk-container uk-container-center middle">

                <div class="uk-grid" data-uk-grid-margin>
                    <div class="am-sidebar uk-width-medium-1-4 uk-hidden-small">

                        <%@ include file="/sitewide/sidenav.jsp" %>

                    </div>
                    <div class="uk-width-medium-3-4">





                        <article>

                            <h1 class="uk-article-title">Accordion</h1>



                            <p class="uk-article-lead">Create a list of items, allowing each item's content to be expanded and collapsed by clicking its header.</p>



                            <section class="frame">

                                <ul class="collapsible popout collapsible-accordion" id="popAccordion" data-collapsible="accordion">
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Articles</div>
                                        <div class="collapsible-body open">
                                            <ul>
                                                <li><a href="../../sandbox/articles/selectors.jsp" class="popupwindow">The 30 CSS
                                                    Selectors You Must Memorize - by Jeffrey Way </a></li>
                                                <li><a href="../../sandbox/articles/CSSbestPractices.jsp" class="popupwindow">10 CSS
                                                    Best Practices - by Jeff Couturier </a></li>
                                                <li><a href="../../sandbox/articles/jqMethods.jsp" class="popupwindow">20
                                                    jQuery Methods you Should be Using - by Andrew Burgess </a></li>
                                                <li><a href="../../sandbox/articles/jqPE.jsp" class="popupwindow">Extending
                                                    jQuery - by Kevin Liew of www.queness.com </a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Cheatsheets</div>
                                        <div class="collapsible-body open">
                                            <ul>
                                                <li><a href="../../sandbox/articles/CSSReference.jsp" class="popupwindow">CSS
                                                    Cheatsheet - by W3schools.com </a></li>
                                                <li><a href="../../sandbox/articles/xbrowserCSS.jsp" class="popupwindow">Cross-Browser
                                                    CSS Cheatsheet - by Paul Irish </a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Style Guides</div>
                                        <div class="collapsible-body open">
                                            <ul>
                                                <li><a href="${contextPath}/sources/medialoot.zip">Medialoot Style Guide</a></li>
                                                <li><a href="${contextPath}/sources/TypographyStyleGuide.zip">Typography Style Guide</a></li>
                                                <li><a href="${contextPath}/sources/WireframeKit.zip">Wireframe Kit</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="clean">
                                        <div class="collapsible-header">&nbsp;&nbsp;<i class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Templates</div>
                                        <div class="collapsible-body open">
                                            <ul class="fancybullet medium-up">
                                                <li><a href="${contextPath}/templates/index.html" class="popupwindow" rel="windowCenter">Bootstrap templates</a></li>
                                                <li><a href="${contextPath}/sources/StarterTemplate.zip">Photoshop templates</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <br class="clear"/>
                            </section>

                            <hr class="uk-article-divider">



                            <h3 class="am-article-subtitle" id="usage">Usage</h3>

                            <p>To apply the Accordion component, add the <code>uk-accordion</code> class and the <code>data-uk-accordion</code> attribute to a container element. Add the <code>uk-accordion-content</code> class to each of the content sections within the container. Finally, add the <code>uk-accordion-title</code> class to any element, like a heading, above the content section to create a toggle.</p>

                            <h3 class="am-article-subtitle">Example</h3>

                            <div class="uk-accordion" data-uk-accordion>

                                <h4 class="uk-accordion-title">Heading 1</h4>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>

                                <h4 class="uk-accordion-title">Heading 2</h4>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>

                                <h4 class="uk-accordion-title">Heading 3</h4>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>

                            </div>

                            <h3 class="am-article-subtitle">Markup</h3>

<pre><code>&lt;div class="uk-accordion" data-uk-accordion&gt;

    &lt;h3 class="uk-accordion-title"&gt;...&lt;/h3&gt;
    &lt;div class="uk-accordion-content"&gt;...&lt;/div&gt;

    &lt;h3 class="uk-accordion-title"&gt;...&lt;/h3&gt;
    &lt;div class="uk-accordion-content"&gt;...&lt;/div&gt;

    &lt;h3 class="uk-accordion-title"&gt;...&lt;/h3&gt;
    &lt;div class="uk-accordion-content"&gt;...&lt;/div&gt;

    &lt;/div&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h3 class="am-article-subtitle" id="no-collapse">Muliple open items</h3>

                            <p>To display multiple content sections at the same time without one collapsing when the other one is opened, add the <code>{collapse: false}</code> option to the data attribute.</p>

                            <h3 class="am-article-subtitle" class="am-article-subtitle">Example</h3>

                            <div class="uk-accordion" data-uk-accordion="{collapse: false}">

                                <h4 class="uk-accordion-title">Heading 1</h4>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>

                                <h4 class="uk-accordion-title">Heading 2</h4>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>

                                <h4 class="uk-accordion-title">Heading 3</h4>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>

                            </div>

                            <hr class="uk-article-divider">

                            <h3 class="am-article-subtitle" id="javascript-options">JavaScript options</h3>

                            <div class="uk-overflow-container">
                                <table class="uk-table uk-table-striped uk-text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>Option</th>
                                        <th>Possible value</th>
                                        <th>Default</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><code>showfirst</code></td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Show first item on init</td>
                                    </tr>
                                    <tr>
                                        <td><code>collapse</code></td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Allow multiple open items</td>
                                    </tr>
                                    <tr>
                                        <td><code>animate</code></td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Animate toggle</td>
                                    </tr>
                                    <tr>
                                        <td><code>easing</code></td>
                                        <td>string</td>
                                        <td>swing</td>
                                        <td>Animation function</td>
                                    </tr>
                                    <tr>
                                        <td><code>duration</code></td>
                                        <td>integer</td>
                                        <td>300</td>
                                        <td>Animation duration</td>
                                    </tr>
                                    <tr>
                                        <td><code>toggle</code></td>
                                        <td>string</td>
                                        <td>.uk-accordion-title</td>
                                        <td>Css selector for toggles</td>
                                    </tr>
                                    <tr>
                                        <td><code>containers</code></td>
                                        <td>string</td>
                                        <td>.uk-accordion-content</td>
                                        <td>Css selector for content containers</td>
                                    </tr>

                                    <tr>
                                        <td><code>clsactive</code></td>
                                        <td>string</td>
                                        <td>uk-active</td>
                                        <td>Class to add when an item is active</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="am-article-subtitle">Init element manually</h3>

                            <pre><code>var accordion = UIkit.accordion(element, { /* options */ });</code></pre>

                            <h3 class="am-article-subtitle">Events</h3>

                            <div class="uk-overflow-container">
                                <table class="uk-table uk-table-striped uk-text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Parameter</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><code>toggle.uk.accordion</code></td>
                                        <td>event, active, toggle, content</td>
                                        <td>On item toggle</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </article>

                    </div>
                </div>

            </div>

    </main>
    <footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
        <%@ include file="/sitewide/footer.jsp" %>
    </footer>

        <%@ include file="/sitewide/offcanvas.jsp" %>
    <script>
        $('.collapsible-header').click(function () {

            $(this).find('i').toggleClass('down')
        });
    </script>
    </body>
</html>
