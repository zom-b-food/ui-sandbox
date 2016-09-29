<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Dynamic Grid component - UIkit documentation</title>
        <%@ include file="/sitewide/globals.jsp" %>
        <link rel="stylesheet" href="../resources/css/components/highlight.css">
        <script src="../resources/js/components/highlight.js"></script>
        <script src="../resources/js/components/grid.js"></script>
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

                        <h1 class="uk-article-title">Dynamic Grid</h1>

                         <p class="uk-article-lead">Create a multi-column, dynamic grid layout whose items can be sorted and filtered.</p>

                        <p>The Dynamic Grid component allows you to create a dynamic and responsive grid layout utilizing the <a href="grid.html">Grid component</a>. Grid items will arrange themselves fluently and seamlessly for a gap-free multi-column layout on all device sizes.</p>

                        <hr class="uk-article-divider">

                        <h2 id="usage"><a href="#usage" class="uk-link-reset">Usage</a></h2>

                        <p>To apply this component, add the <code>data-uk-grid</code> attribute to the container element. Set the width of the grid items by using the <code>uk-width-*</code> or <code>.uk-grid-width-*</code> classes from the <a href="grid.html">Grid component</a>.</p>

                        <h3 class="am-article-subtitle">Example</h3>

                        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 am-grid-colors am-grid-heights" data-uk-grid>
        <div><div class="uk-panel">1</div></div>
        <div><div class="uk-panel">2</div></div>
        <div><div class="uk-panel">3</div></div>
        <div><div class="uk-panel">4</div></div>
        <div><div class="uk-panel">5</div></div>
        <div><div class="uk-panel">6</div></div>
        <div><div class="uk-panel">7</div></div>
        <div><div class="uk-panel">8</div></div>
    </div>


                        <hr class="uk-article-divider">

                        <h3 id="grid-gutter"><a href="#grid-gutter" class="uk-link-reset">Grid Gutter</a></h3>

                        <p>Divide grid items with a gutter by adding the <code>{gutter: 20}</code> option to the data attribute. In this case the gutter will be 20px wide.</p>

                        <h3 class="am-article-subtitle">Example</h3>

                        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 am-grid-heights" data-uk-grid="{gutter: 20}">
        <div><div class="uk-panel-box">1</div></div>
        <div><div class="uk-panel-box">2</div></div>
        <div><div class="uk-panel-box">3</div></div>
        <div><div class="uk-panel-box">4</div></div>
        <div><div class="uk-panel-box">5</div></div>
        <div><div class="uk-panel-box">6</div></div>
        <div><div class="uk-panel-box">7</div></div>
        <div><div class="uk-panel-box">8</div></div>
    </div>



                        <hr class="uk-article-divider">

                        <h2 id="filtering"><a href="#filtering" class="uk-link-reset">Filtering</a></h2>

                        <p>You can also filter your grid so that only particular items will be displayed. To do so, add the <code>{controls: '#my-id'}</code> option to the data-attribute to target the id for the filter controls. Each control needs to have the <code>data-uk-filter</code> attribute to define the category you want to filter. Then you also need to add the <code>data-uk-filter</code> attribute to each grid item to define what category the item belongs to. Separate multiple categories by comma.</p>

                        <h3 class="am-article-subtitle">Example</h3>

                        <ul id="filter" class="uk-subnav uk-subnav-pill">
        <li class="uk-active" data-uk-filter=""><a href="#">All</a></li>
        <li data-uk-filter="filter-a"><a href="#">Filter A</a></li>
        <li data-uk-filter="filter-b"><a href="#">Filter B</a></li>
    </ul>

                        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 am-grid-heights" data-uk-grid="{gutter: 20, controls: '#filter'}">
        <div data-uk-filter="filter-a"><div class="uk-panel-box">A 1</div></div>
        <div data-uk-filter="filter-b"><div class="uk-panel-box">B 2</div></div>
        <div data-uk-filter="filter-a"><div class="uk-panel-box">A 3</div></div>
        <div data-uk-filter="filter-b"><div class="uk-panel-box">B 4</div></div>
        <div data-uk-filter="filter-b"><div class="uk-panel-box">B 5</div></div>
        <div data-uk-filter="filter-a"><div class="uk-panel-box">A 6</div></div>
        <div data-uk-filter="filter-b"><div class="uk-panel-box">B 7</div></div>
        <div data-uk-filter="filter-a,filter-b"><div class="uk-panel-box">A+B 8</div></div>
    </div>



                         <hr class="uk-article-divider">

                        <h2 id="sorting"><a href="#sorting" class="uk-link-reset">Sorting</a></h2>

                        <p>To sort grid items ascendingly, add the <code>{controls: '#my-id'}</code> option to the data-attribute to target the id for the sorting controls.</p>

                        <p>Each control needs to have the <code>data-uk-sort</code> attribute with a custom value that targets the category you want to be sorted, for example <code>data-uk-sort="my-category"</code>. You also need to add a data attribute to each grid item, using your target category's name. The value contains the data which should be sorted, for example <code>data-my-category="my-data"</code>.</p>

                        <p>Items are sorted ascendingly by default. To sort the items descendingly just add <code>:desc</code> to the value of the controls' data attribute, for example <code>data-uk-sort="my-category:desc"</code>.</p>

                        <h3 class="am-article-subtitle">Example</h3>

                        <ul id="sort1" class="uk-subnav uk-subnav-pill">
        <li class="uk-active" data-uk-sort="my-category"><a href="#">Ascending</a></li>
        <li data-uk-sort="my-category:desc"><a href="#">Descending</a></li>
    </ul>

                         <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 am-grid-heights" data-uk-grid="{gutter: 20, controls: '#sort1'}">
        <div data-my-category="a"><div class="uk-panel-box">A</div></div>
        <div data-my-category="b"><div class="uk-panel-box">B</div></div>
        <div data-my-category="c"><div class="uk-panel-box">C</div></div>
        <div data-my-category="d"><div class="uk-panel-box">D</div></div>
        <div data-my-category="e"><div class="uk-panel-box">E</div></div>
        <div data-my-category="f"><div class="uk-panel-box">F</div></div>
        <div data-my-category="g"><div class="uk-panel-box">G</div></div>
        <div data-my-category="h"><div class="uk-panel-box">H</div></div>
    </div>


                         <hr class="uk-article-divider">

                        <h3>Multiple categories</h3>

                        <p>To use more than one category to sort grid items, use a different name for each category.</p>

                        <ul id="sort2" class="uk-subnav uk-subnav-pill">
        <li class="uk-active" data-uk-sort="my-category"><a href="#">Character (Asc)</a></li>
        <li data-uk-sort="my-category:desc"><a href="#">Character (Desc)</a></li>
        <li data-uk-sort="my-category2"><a href="#">Number (Asc)</a></li>
        <li data-uk-sort="my-category2:desc"><a href="#">Number (Desc)</a></li>
    </ul>

                        <div class="uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 am-grid-heights" data-uk-grid="{gutter: 20, controls: '#sort2'}">
        <div data-my-category="a" data-my-category2="8"><div class="uk-panel-box">A 8</div></div>
        <div data-my-category="b" data-my-category2="7"><div class="uk-panel-box">B 7</div></div>
        <div data-my-category="c" data-my-category2="6"><div class="uk-panel-box">C 6</div></div>
        <div data-my-category="d" data-my-category2="1"><div class="uk-panel-box">D 1</div></div>
        <div data-my-category="e" data-my-category2="5"><div class="uk-panel-box">E 5</div></div>
        <div data-my-category="f" data-my-category2="3"><div class="uk-panel-box">F 3</div></div>
        <div data-my-category="g" data-my-category2="2"><div class="uk-panel-box">G 2</div></div>
        <div data-my-category="h" data-my-category2="4"><div class="uk-panel-box">H 4</div></div>
    </div>


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
                <td><code>colwidth</code></td>
                <td>integer</td>
                <td>auto</td>
                <td>Columns width</td>
            </tr>
            <tr>
                <td><code>animation</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Animate columns on update</td>
            </tr>
            <tr>
                <td><code>duration</code></td>
                <td>integer</td>
                <td>200</td>
                <td>Animation duration</td>
            </tr>
            <tr>
                <td><code>gutter</code></td>
                <td>integer</td>
                <td>0</td>
                <td>Gutter between columns</td>
            </tr>
            <tr>
                <td><code>controls</code></td>
                <td>string</td>
                <td>false</td>
                <td>Css selector to connect filter / order controls.</td>
            </tr>
            <tr>
                <td><code>filter</code></td>
                <td>string</td>
                <td>''</td>
                <td>Items filter</td>
            </tr>
            </tbody>
        </table>
    </div>

                    <h3 class="am-article-subtitle">Init element manually</h3>

                    <pre><code>var grid = UIkit.grid(element, { /* options */ });</code></pre>

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
                <td><code>beforeupdate.uk.grid</code></td>
                <td>event, children</td>
                <td>On before update grid</td>
            </tr>
            <tr>
                <td><code>afterupdate.uk.grid</code></td>
                <td>event, children</td>
                <td>On after update grid</td>
            </tr>
            </tbody>
        </table>
    </div>

                    <h3 class="am-article-subtitle">Example</h3>

                    <p>Listening for beforeupdate events with jQuery:</p>

                <pre><code>$(function() {
    $('[data-uk-grid]').on('beforeupdate.uk.grid', function(e, children) {
    // your event-handling goes here
    });
    });</code></pre>

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
