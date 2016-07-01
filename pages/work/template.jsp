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
                <div class="uk-width-medium-8-10" style="border:1px solid yellow;">
                    <h1>Adam L Marsh</h1>
                    <h2><img class="true" src="${assetPath}/images/rule2.gif" alt="" style="width:12px; height:4px;"/>&nbsp;ui-design-engineering.com&nbsp;<img
                            class="true" src="${assetPath}/images/rule.gif" alt="" style="width:208px; height:9px;"/></h2>

                    <h4><img class="true" src="${assetPath}/images/rule2.gif" alt="" style="width:12px; height:4px;"/>&nbsp;[Interested in remote/telecommute
                        opportunities]</h4>

                    <div class="uk-grid" data-uk-grid-margin style="border:1px solid blue;">
                        <div class="uk-width-medium-2-10 uk-hidden-small noPad">
                             <%@ include file="/sitewide/sidenavLinks.jsp" %>
                         </div>

                        <div class="uk-width-medium-8-10">
                         copy
                         </div>
                    </div>
                </div>
                <div class="uk-width-medium-2-10 uk-hidden-small" style="border:1px solid green;">
                    <%@ include file="/sitewide/sidebar.jsp" %>
                </div>
            </div>
        </div>
    </div>
</main>


<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
    <%@ include file="/sitewide/footer.jsp" %>
</footer>

<script src="${assetPath}/js/components/email.js"></script>
</body>
</html>
