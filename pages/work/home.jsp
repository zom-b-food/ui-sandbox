
<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>www.ui-design-engineering.com - home</title>
    <%@ include file="/sitewide/globals.jsp" %>
    <script src="${assetPath}/js/components/slidenav.js"></script>
    <script src="${assetPath}/js/components/accordion.js"></script>
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
                        <section id="cd-placeholder-1" class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:500}">
                            <h2>Career Summary</h2>
                            <p>Extensive design engineering experience producing scalable, flexible web apps, prototypes, design
                                documents/comps, Photoshop PSD's, wireframes, PoC's and usability roadmaps. Expertise in developing all
                                elements of the GUI, managing content and working as liaison between designers, engineers and content
                                experts. Proficient in responsive frameworks such as Bootstrap, Foundation, and UI-Kit. Experience
                                working with JSP/JSTL, .NET, SASS, jQuery, Javascript, Knockout.js, and Node.js within an MVC
                                framework (Spring/STRUTS). Experience working in an Agile/LEAN continuous-integration environment using
                                Apache/Tomcat, TeamCity, TeamSite CMS, IntelliJ, Grunt, SVN and Git. Some PHP and Angular.js experience. Limited
                                experience in OO Javascript but DOM scripting is a cakewalk for me. </p>
                        </section>
                        <section id="cd-placeholder-2" class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:500}">
                            <h2>Primary Skills &amp; Experience&nbsp;</h2>
                            <div class="uk-grid" data-uk-grid-margin>
                                <div class="uk-width-medium-1-2">
                                    <ul>
                                        <li>HTML5 Design & Development</li>
                                        <li>JQuery / Bootstrap / Sass (OOCSS)</li>
                                        <li>Javascript (DOM), Knockout.js, Angular.js</li>
                                        <li>Information Architecture</li>
                                    </ul>
                                </div>
                                <div class="uk-width-medium-1-2">
                                    <ul>
                                        <li>Functional JSP / .NET Prototyping</li>
                                        <li>JDBC / JSTL / Java Servlets / PHP</li>
                                        <li>Photoshop / Flash / iPlotz</li>
                                        <li>Usability Testing</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section id="cd-placeholder-3" class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:500}">
                        <h2>Work History</h2>
                        <div class="uk-accordion" data-uk-accordion="{collapse: false}">
                            <h4 class="uk-accordion-title">DMI; Lead UI/UX Developer; &#8212; 03/2015<span class="uk-hidden-small"> to present; &#8212;San Francisco, CA</span><i
                                    class="fa fa-star-o rotate" style="float:right; opacity:.7;"></i></h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Created responsive UIs for www.shoecarnival.com and www.bedbathandbeyond.com. Created Sass
                                            components, build scripts and reusable components for team. Managed team of 4 UI/UX Engineers.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Bootstrap/SASS</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>JQuery</li>
                                            <li>Adobe Creative Suite</li>
                                            <li>Angular.js</li>
                                            <li>Oracle VM</li>
                                            <li>JSP/ATG</li>
                                            <li>Ajax</li>
                                            <li>Knockout.js</li>
                                            <li>Grunt</li>
                                            <li>GitHub</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h4 class="uk-accordion-title">Ramsell Corp; Lead UI/UX Developer; &#8212; 03/2014<span class="uk-hidden-small"> to 03/2015; &#8212;Oakland, CA</span><i
                                    class="fa fa-star-o rotate" style="float:right; opacity:.7;"></i></h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Lead the team's HTML5/CSS-3 development efforts while creating two responsive (bootstrap) web
                                            apps. Produced style guides for web and mobile devices and implemented all UI functionality
                                            according to spec. Managed all aspects of front-end development and coordinated efforts between
                                            front and back-end developers.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Bootstrap/SASS</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>JQuery</li>
                                            <li>Adobe Creative Suite</li>
                                            <li>Ajax</li>
                                            <li>Visual Studio</li>
                                            <li>.NET templating</li>
                                            <li>Knockout.js</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h4 class="uk-accordion-title">Visa; UI/UX Developer; &#8212; 03/2013<span class="uk-hidden-small"> to 03/2014; &#8212;Foster City, CA</span><i
                                    class="fa fa-star-o rotate" style="float:right; opacity:.7;"></i></h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Built and maintained Visa merchant portals and customer service web applications. Created
                                            customer-facing UI with dynamic, data-driven functionality via JSP and GSP. Developed js/css
                                            framework.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>Angular.js</li>
                                            <li>JSP</li>
                                            <li>Grails</li>
                                            <li>Jason</li>
                                            <li>Ajax</li>
                                            <li>XML/XSLT</li>
                                            <li>Angular.js</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h4 class="uk-accordion-title">Group Health Coop; Sr. UI/UX Engineer; &#8212; 02/2010<span
                                    class="uk-hidden-small"> to 01/2013; &#8212;Seattle, WA </span><i class="fa fa-star-o rotate"
                                                                                                     style="float:right; opacity:.7;"></i>
                            </h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Delivered a dynamic and secure web experience for staff, service partners, and ghc members
                                            enabling them to make appointments with physicians and specialists, view lab results, and fill
                                            prescriptions and other integrated services.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>JQuery</li>
                                            <li>JSP/ATG</li>
                                            <li>Sitemesh</li>
                                            <li>Ajax</li>
                                            <li>Photoshop</li>
                                            <li>Teamsite CMS</li>
                                            <li>XML/XSLT</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h4 class="uk-accordion-title">Sotto Wireless; Web Developer<span class="uk-hidden-small">/Designer</span>;
                                &#8212; 02/2006<span class="uk-hidden-small"> to 10/2009; &#8212;Bellevue, WA</span><i
                                        class="fa fa-star-o rotate" style="float:right; opacity:.7;"></i></h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Gave www.sottowireless.com a Web site, Storefront, and Activation Portal from the ground up,
                                            literally. Created style guides, all graphical content, java servlets, usability testing
                                            scripts.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>Java Servlets</li>
                                            <li>Photoshop</li>
                                            <li>JSTL</li>
                                            <li>JSP</li>
                                            <li>MySql</li>
                                            <li>XML/XSLT</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h4 class="uk-accordion-title">AT&amp;T Wireless; Front-end Developer; &#8212; 02/2004<span
                                    class="uk-hidden-small"> to 02/2006; &#8212;Redmond, WA</span><i class="fa fa-star-o rotate"
                                                                                                    style="float:right; opacity:.7;"></i>
                            </h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Built and maintained the AT&T Wireless customer service web application. Created customer-facing
                                            UI with dynamic, data-driven functionality via JSP/JHTML. Managed the redesign efforts of user
                                            accounts and payments.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>Photoshop</li>
                                            <li>JSP/ATG</li>
                                            <li>XML/XSLT</li>
                                            <li>JSLT</li>
                                            <li>Teamsite</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h4 class="uk-accordion-title">Microsoft, Inc; Web Producer; &#8212; 01/2003<span class="uk-hidden-small"> to	01/2004; &#8212;Redmond, WA</span><i
                                    class="fa fa-star-o rotate" style="float:right; opacity:.7;"></i></h4>
                            <div class="uk-accordion-content">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <p>
                                            <strong>Accomplishments:</strong><br/>
                                            Created and edited textual and graphical content for www.microsoft.com/executivecircle (online
                                            magazine). Produced several DHTML applications for staff and management.
                                        </p>
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <ul class="tight">
                                            <li class="head">Skills, Tools &amp; Tech</li>
                                            <li>Javascript (DOM scripting)</li>
                                            <li>Dreamweaver</li>
                                            <li>Visio</li>
                                            <li>Visual Studio</li>
                                            <li>ASP</li>
                                            <li>.NET</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <section id="cd-placeholder-4" class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:500}">
                            <%--<span class="trans">&nbsp;</span>--%>
                            <h2>&nbsp;Sample URLs&nbsp;</h2>
                            <p><span class="note">Note:</span>
                                Since I am not an active "freelancer", the sample URLs I present here are screenshots of the web apps I have designed and developed while employed over the years. Of
                                course, I cannot list a current URL for Hilton.com, for example, since they have changed the UI since the one I produced in 2002.
                                These screenshots are of the UIs I actually worked on. Please download my
                                <a href="${contextPath}/sources/samples.zip">code and design samples</a> or simply
                                <a href="${contextPath}/samplesites/samples.jsp" class="popupwindow samples">&nbsp;view them here.</a>
                            </p>
                            <div>
                                <ul>
                                    <li><a href="http://www.shoecarnival.com" class="wide"> latest responsive site I built on this job (using Foundation/SASS).</a></li>
                                    <li><a href="../../sandbox/ramsell/partSMSummary.jsp" class="wide"> another responsive jsp prototype I built at my last job (using Bootstrap/SASS).</a></li>
                                </ul>
                            </div>
                        </section>
                        <section id="cd-placeholder-5" class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:500}">
                            <h2>Education &amp; Training</h2>
                            <p>Texas A&amp;M University; BA 1989<br/>
                                 Graduate studies in English Literature at Texas A&amp;M University; 1994-1995<br/>
                                Teamsite Component Developer Training (XML/XSL); 2011<br/>
                                Various UI Design/Development workshops; 2000-2012</p>
                        </section>
                        <section id="cd-placeholder-6" class="frame" data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:500}">
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
                     <section id="sidebar">
                         <object type="application/x-shockwave-flash" data="${assetPath}/images/almFlash.swf" width="266" height="122">
                             <param name="movie" value="${assetPath}/images/almFlash.swf"/>
                             <param name="quality" value="high"/>
                            <param name="wmode" value="transparent"/>
                            <param name="LOOP" value="false"/>
                        </object>
                        <hr/>
                        <div class="uk-panel-box">
                            <ul class="tight" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', repeat: true, delay:2000}">
                                 <li>HTML5 Design & Development -- 6 yrs</li>
                                 <li>JSP Middle-tier Integration -- 16 yrs</li>
                                 <li>Information Architecture -- 6 yrs</li>
                                <li>Wireframing, Usability -- 10 yrs</li>
                                <li>DHTML/XML/XSLT -- 16yrs</li>
                                <li>Javascript (DOM scripting) -- 11yrs</li>
                                 <li>Responsive Development -- 3yrs</li>
                                 <li>Adobe Creative Suite -- 10yrs</li>
                                 <li>Bootstrap, Foundation -- 3yrs</li>
                                 <li>JSTL/JDBC, Java Servlets -- 5 yrs</li>
                                 <li>Bower/Grunt -- 3yrs</li>
                                 <li>JQuery -- 8yrs</li>
                                 <li>SASS (OOCSS) -- 2yrs</li>
                                 <li>Knockout.js -- 2yrs</li>
                                 <li>Node.js, Angular.js -- 1yr
                                  <li>Ajax -- 3yrs
                                  <li>Hudson, TeamCity -- 8yrs
                                  <li>IntelliJ/Eclipse -- 14yrs
                                  <li>Agile, SEO -- 4yrs
                              </ul>
                          </div>
                          <br/>
                         <img src="${assetPath}/images/rule.gif" style="width:208px; height:9px;" alt=""/> <br/>
                         9794 Coral Rd<br/>
                         Oakland, CA 94603<br/>
                        510-877-0763<br/>
                        <a href="mailto:adam@ui-design-engineering.com">adam@ui-design-engineering.com</a>
                        <br class="clear"/>
                        <p>&nbsp;</p>
                     </section>
                </div>
            </div>
        </div>
    </div>
</main>

<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
    <%@ include file="/sitewide/footer.jsp" %>
</footer>
 <div style="visibility:hidden; z-index:1;">
     <%@ page import="java.io.*" %>
    <%

        String hm = "HHIT";
        String file = hm + "/home.txt";
        String cntfpath = application.getRealPath("/") + file;
        RandomAccessFile ffile;
        ffile = new RandomAccessFile(cntfpath, "rw");
        ffile.seek(0);
        int count = Integer.parseInt(ffile.readLine());
        out.println(count);
        ffile.seek(0);
        ffile.writeBytes(Integer.toString(count + 1));
        ffile.close();
    %>
</div>
 <script>
    $('.uk-accordion-title').click(function () {

        $(this).find('i').toggleClass('down')
    });
</script>
<script src="${assetPath}/js/components/email.js"></script>

</body>
</html>
