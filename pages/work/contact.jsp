<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>www.adam-marsh.com - contact</title>
    <%@ include file="/sitewide/globals.jsp" %>
    <script src="${assetPath}/js/components/slidenav.js"></script>
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
                        <section class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
                            <h2>Contact Me&nbsp;</h2>
                            <div class="map">
                                <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
                                <div style='overflow:hidden;height:400px;width:auto;'>
                                    <div id='gmap_canvas' style='height:400px;width:auto;'></div>
                                    <style>#gmap_canvas img {
                                        max-width: none !important;
                                        background: none !important
                                    }</style>
                                </div>
                                <a href='https://mapswebsite.net/'>embed a google map</a>
                                <script type='text/javascript'
                                        src='https://embedmaps.com/google-maps-authorization/script.js?id=f379a234a92dbc39638425bd9672039ff32c29f3'></script>
                                <script type='text/javascript'>function init_map() {
                                    var myOptions = {zoom: 10, center: new google.maps.LatLng(37.730719, -122.191506), mapTypeId: google.maps.MapTypeId.ROADMAP};
                                    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
                                    marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(37.730719, -122.191506)});
                                    infowindow = new google.maps.InfoWindow({content: '<strong>Adam Marsh [ui-design-engineering.com]</strong><br>9794 Coral Rd<br>94603 <br>'});
                                    google.maps.event.addListener(marker, 'click', function () {
                                        infowindow.open(map, marker);
                                    });
                                    infowindow.open(map, marker);
                                }
                                google.maps.event.addDomListener(window, 'load', init_map);</script>
                            </div>
                            <div class="uk-grid" data-uk-grid-margin>
                                <div class="uk-width-medium-4-10">
                                    <div class="uk-panel-box mt10">
                                        <h3>Contact Details</h3>
                                        <p> 9794 Coral Rd<br>
                                            Oakland, CA 94603<br>
                                        </p>
                                        <p><i class="fa fa-phone"></i> <abbr title="Phone">P</abbr>: (510) 877-0763</p>
                                        <p><i class="fa fa-envelope-o"></i> <abbr title="Email">E</abbr>: <a
                                                href="mailto:adam@ui-design-engineering.com">adam@ui-design-engineering.com</a></p>
                                        <p><i class="fa fa-clock-o"></i> <abbr title="Hours">H</abbr>: Monday - Friday: 11:00 to 8:00</p>
                                        <ul class="list-unstyled list-inline list-social-icons">
                                            <li><a href="https://www.facebook.com/kungfurufus"><i class="fa fa-facebook-square fa-2x"></i></a>
                                            </li>
                                            <li><a href="https://www.linkedin.com/in/sassmaster"><i class="fa fa-linkedin-square fa-2x"></i></a>
                                            </li>
                                            <li><a href="https://github.com/zom-b-food"><i class="fa fa-github-square fa-2x"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="uk-width-medium-6-10">
                                    <p>Have a job opportunity you want to discuss? Or maybe ideas about creating your own site? Maybe a
                                        redesign? Some new functionality? Or something new altogether? I'd love to help you spruce up, or create
                                        from scratch, a web identity and presence that tells the world who you really are.</p>
                                    <form class="cmxform" id="commentForm1" name="commentForm1" method="post"
                                          action="${contextPath}/authenticate.authEmail">
                                        <input type="hidden" class="MEDformField" name="text2" id="text2" value="adam@ui-design-engineering.com"
                                               readonly="readonly"/>
                                        <table>
                                            <tr>
                                                <th colspan="2">* Required</th>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><span id="emailError" style="display: none;">You must enter a valid email address</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td width="30%" align="right"><label for="text1">* Sender's email:&nbsp; </label></td>
                                                <td width="70%"><input name="text1" id="text1" class="text required email"
                                                                       onblur="validateEmail(value)" type="text"/></td>
                                            </tr>
                                            <tr>
                                                <td align="right"><label for="cc">CC:&nbsp; </label></td>
                                                <td><input type="text" class="text email" name="cc" id="cc"/></td>
                                            </tr>
                                            <tr>
                                                <td align="right"><label for="subject">* Subject:&nbsp; </label></td>
                                                <td><input type="text" class="text required" name="subject" id="subject"/></td>
                                            </tr>
                                            <tr>
                                                <td align="right"><label for="area1">* Message:&nbsp; </label></td>
                                                <td><textarea name="area1" id="area1" class="required comments" rows="4" cols="20">Enter message here... </textarea></td>
                                            </tr>
                                            <tr>
                                                <!--<td><input type="submit" value="Submit"></td>-->
                                                <td colspan="2" align="right"><input id="submitBtn" type="submit" value="Submit"
                                                                                     class="disabled"/></td>
                                            </tr>
                                        </table>
                                    </form>
                                </div>
                            </div>
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
<script src="${assetPath}/js/components/email.js"></script>
</body>
</html>
