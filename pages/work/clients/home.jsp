<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>www.adam-marsh.com - contact</title>
    <%@ include file="/sitewide/globals.jsp" %>
    <script src="${assetPath}/js/components/slidenav.js"></script>


    <script>

    </script>
</head>

<body>
<jsp:useBean id="addusers" scope="session" class="registerlogin.AddUsers"/>
<jsp:setProperty name="addusers" property="*"/>
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

    <div class="uk-container-center">
        <div class="uk-grid" data-uk-grid-margin>
            <div class="uk-width-medium-8-10">


                <h1>Adam L Marsh</h1>
                <h2><img class="true" src="${assetPath}/images/rule2.gif" alt="" style="width:12px; height:4px;"/>&nbsp;ui-design-engineering.com&nbsp;<img
                        class="true" src="${assetPath}/images/rule.gif" alt="" style="width:208px; height:9px;"/></h2>

                <h4><img class="true" src="${assetPath}/images/rule2.gif" alt="" style="width:12px; height:4px;"/>&nbsp;[Interested in remote/telecommute
                    opportunities]</h4>



                <div class="uk-grid" data-uk-grid-margin>
                    <div class="uk-width-medium-1-4">
                        <div class="uk-hidden-small maxWidth">
                            <section data-uk-sticky="{top:100}">
                                <nav class="am-nav2">
                                    <%@ include file="/sitewide/sidenavLinks.jsp" %>
                                </nav>
                            </section>
                        </div>
                    </div>

                    <div class="uk-width-medium-3-4">

                            <section class="frame">
                                <h3>Thanks for registering and logging in.</h3>
                                <h4>Page under construction...Please be patient while I redo the client pages.</h4>


                                <p>Here is the information that you entered:</p>

                                <ul class="fancybulletBig bold">
                                    <li>Username:
                                        <jsp:getProperty name="addusers" property="emailAddress"/>
                                    </li>
                                    <li>Password:
                                        <jsp:getProperty name="addusers" property="userName"/>
                                    </li>
                                </ul>



                        </section>

                    </div>
                </div>
            </div>
            <div class="uk-width-medium-2-10">

                <section class="uk-hidden-small" id="sidebar-pages">

                    <%@ include file="/sitewide/sidebar.jsp" %>

                </section>

            </div>
        </div>
    </div>
</main>

<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
    <%@ include file="/sitewide/footer.jsp" %>
</footer>


</body>
</html>




