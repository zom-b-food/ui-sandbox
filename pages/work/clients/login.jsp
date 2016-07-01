<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>www.adam-marsh.com - login</title>
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





                            <h2>Client Login</h2>

                            <p style="margin-left:14px;">Please login or register here</p>
                            <div class="uk-grid" data-uk-grid-margin>
                                <div class="uk-width-medium-1-2">
                                    <form action="${contextPath}/registerlogin.clientLogin" method="get" id="login" name="login">
                                        <table>
                                            <th colspan="2">Login Here</th>
                                            <%
                                                String oops1 = (String) session.getAttribute("oops1");
                                                if (oops1 == null)
                                                    oops1 = "";
                                            %>

							<span class="error"><%= oops1 %>
							</span>
                                            <%--value="${fn:escapeXml(emailAddress)}"--%>

                                            <tr>
                                                <td><label for="emailAddress">Email Address:</label></td>
                                                <td><input name="emailAddress" id="emailAddress" class="MEDformField email text required" value="${emailAddress}"
                                                           type="text"/></td>
                                            </tr>
                                            <tr>
                                                <td><label for="userName">Password:</label></td>
                                                <td><input type="password" name="userName" id="userName" class="MEDformField text required" value="${userName}"/></td>
                                            </tr>

                                            <tr>
                                                <td colspan="2"><input id="submitBtn1" class="mbtn" type="submit" value="Log in"/></td>
                                            </tr>
                                        </table>


                                    </form>
                                    <p>&nbsp;</p>
                                </div>
                                <div class="uk-width-medium-1-2">
                                    <form action="${contextPath}/registerlogin.clientRegister" method="get" id="register" name="register">
                                        <table>
                                            <th colspan="2">Register Here</th>
                                            <%
                                                String sorry1 = (String) session.getAttribute("sorry1");
                                                if (sorry1 == null)
                                                    sorry1 = "";
                                            %>

							<span class="error"><%= sorry1 %>
							</span>


                                            <tr>
                                                <td><label for="emailAddress">Email Address:</label></td>
                                                <td><input name="emailAddress" id="emailAddress" class="MEDformField text email required"
                                                           type="text" placeholder="email"/></td>
                                            </tr>
                                            <tr>
                                                <td><label for="userName">Password:</label></td>
                                                <td><input type="password" name="userName" id="userName" class="MEDformField text required" placeholder="password"/></td>
                                            </tr>

                                            <tr>
                                                <td colspan="2"><input id="submitBtn2" class="mbtn" type="submit" value="Register Now"/></td>
                                            </tr>
                                        </table>

                                    </form>
                                    <br class="clear"/>
                                </div>
                            </div>


                            <br class="clear"/>



                        </section>

                    </div>
                </div>
            </div>
            <div class="uk-width-medium-2-10 uk-hidden-small">
                <%@ include file="/sitewide/sidebar-alt.jsp" %>
            </div>
        </div>
    </div>
        </div>
</main>


<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
    <%@ include file="/sitewide/footer.jsp" %>
</footer>


</body>
</html>
