<!DOCTYPE html>
<html lang="en">
    <head>
        <title>sticky footer</title>
        <%@ include file="/sitewide/globals.jsp" %>
        <script type="text/javascript">
        </script>
    </head>
    <body>
        <%--<div id="work-in-progress">
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
                            <h1 class="uk-article-title">hello</h1>

                            <p class="uk-article-lead">bla...</p>
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
