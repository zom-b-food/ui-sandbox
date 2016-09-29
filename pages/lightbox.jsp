<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Lightbox component - UIkit documentation</title>
        <%@ include file="/sitewide/globals.jsp" %>
        <script src="../resources/js/core/modal.js"></script>
        <script src="../resources/js/components/lightbox.js"></script>
    </head>

    <body>
<%--    <div id="work-in-progress">
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

                            <h1 class="uk-article-title">Lightbox</h1>

                            <p class="uk-article-lead">Create a fancy lightbox for images and videos utilizing the <a href="modal.html">Modal component</a>.</p>

                            <h2 id="usage"><a href="#usage" class="uk-link-reset">Usage</a></h2>

                            <p>To apply this component, add the <code>data-uk-lightbox</code> attribute to an anchor linking to the image you wish to display. If a title attribute exists it will be displayed as a caption for the lightbox.</p>

                            <h3 class="am-article-subtitle">Example</h3>

                            <a class="uk-button" href="../resources/images/placeholder_800x400_1.jpg" data-uk-lightbox title="Title">Open lightbox</a>

                            <h3 class="am-article-subtitle">Markup</h3>

<pre><code>&lt;a href="my-image.jpg" data-uk-lightbox title=""&gt;...&lt;/a&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="groups"><a href="#groups" class="uk-link-reset">Groups</a></h2>

                            <p>You can link multiple images to the same lightbox and switch between them from within the lightbox, thus creating a gallery. Just add the <code>{group:'my-group'}</code> option to the data attribute of each item using the same name on all items that you want to group. Make sure to include the CSS from the <a href="slidenav.html">Slidenav component</a>, so you can navigate between the items.</p>

                            <h3 class="am-article-subtitle">Example</h3>

                            <div class="uk-grid uk-grid-width-medium-1-4" data-uk-grid-margin>
                                <div>

                                    <a href="../resources/images/placeholder_800x600_1.jpg" data-uk-lightbox="{group:'group1'}" title="Title">
                                        <img src="../resources/images/placeholder_800x600_1.jpg" width="800" height="600" alt="">
                                    </a>

                                </div>
                                <div>

                                    <a href="../resources/images/placeholder_800x600_2.jpg" data-lightbox-type="image" data-uk-lightbox="{group:'group1'}" title="Title">
                                        <img src="../resources/images/placeholder_800x600_2.jpg" width="800" height="600" alt="">
                                    </a>

                                </div>
                                <div>

                                    <a href="../resources/images/placeholder_800x600_3.jpg" data-lightbox-type="image" data-uk-lightbox="{group:'group1'}" title="Title">
                                        <img src="../resources/images/placeholder_800x600_3.jpg" width="800" height="600" alt="">
                                    </a>

                                </div>
                                <div>

                                    <a href="../resources/images/placeholder_800x600_4.jpg" data-lightbox-type="image" data-uk-lightbox="{group:'group1'}" title="Title">
                                        <img src="../resources/images/placeholder_800x600_4.jpg" width="800" height="600" alt="">
                                    </a>

                                </div>

                            </div>

                            <h3 class="am-article-subtitle">Markup</h3>


<pre><code>&lt;a href="" data-uk-lightbox="{group:'my-group'}"&gt;...&lt;/a&gt;</code></pre>

                            <hr class="uk-article-divider">

                            <h2 id="different-content-sources"><a href="#different-content-sources" class="uk-link-reset">Different content sources</a></h2>

                            <p>A lightbox is not restricted to images. Other media, like videos, can be displayed inside a lightbox and it will automatically generate the correct output by evaluating your path.</p>

                            <h3 class="am-article-subtitle">Example</h3>

                            <p>
                                <a class="uk-button" href="../resources/images/placeholder_800x600_1.jpg" data-uk-lightbox="{group:'group2'}" title="Title">Image</a>
                                <a class="uk-button" href="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4" data-uk-lightbox="{group:'group2'}">MP4</a>
                                <a class="uk-button" href="http://vimeo.com/1084537" data-uk-lightbox="{group:'group2'}">Vimeo</a>
                                <a class="uk-button" href="https://www.youtube.com/watch?v=YE7VzlLtp-4" data-uk-lightbox="{group:'group2'}">YouTube</a>
                                <a class="uk-button" href="http://getuikit.com/docs/lightbox.html" data-uk-lightbox="{group:'group2'}">Iframe</a>
                            </p>

                            <hr class="uk-article-divider">

                            <h3 id="content-types"><a href="#different-content-sources" class="uk-link-reset">Content types</a></h3>

                            <p>If no filename extension is defined in the image path, just add the <code>data-lightbox-type="image"</code> attribute. This works for videos as well. The iframe content type will be automatically detected for urls ending in <code>.html</code> or <code>.php</code>. To force the iframe, add the <code>data-lightbox-type="iframe"</code> attribute.</p>

                            <hr class="uk-article-divider">

                            <h2 id="javascript-options"><a href="#javascript-options" class="uk-link-reset">JavaScript options</a></h2>

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
                                            <td><code>group</code></td>
                                            <td>string</td>
                                            <td>false</td>
                                            <td>Group name to group elements as a gallery to show</td>
                                        </tr>
                                        <tr>
                                            <td><code>duration</code></td>
                                            <td>integer</td>
                                            <td>400</td>
                                            <td>Animation duration between gallery item change</td>
                                        </tr>
                                        <tr>
                                            <td><code>keyboard</code></td>
                                            <td>boolean</td>
                                            <td>true</td>
                                            <td>Allow keyboard navigation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 class="am-article-subtitle">Init element manually</h3>

                            <pre><code>var lightbox = UIkit.lightbox(element, { /* options */ });</code></pre>

                            <h3 class="am-article-subtitle">Create dynamic lightbox</h3>

                            <pre><code>
                                var lightbox = UIkit.lightbox.create([
                                    {'source': 'http://url/to/video.mp4', 'type':'video'},
                                    {'source': 'http://url/to/image.jpg', 'type':'image'}
                                ]);

                                lightbox.show();
                            </code></pre>

                            <h3>Events</h3>

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
                                            <td><code>showitem.uk.lightbox</code></td>
                                            <td>event, data</td>
                                            <td>On lightbox show</td>
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


    </body>
</html>
