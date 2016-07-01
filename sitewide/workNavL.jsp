<section id="am-fixed">
    <div class="header">
        <table class="rufus">
            <tr>
                <td style="width:25%;">
                    <a href="#0">
                        <img id="am-logo" class="true" src="${assetPath}/images/scrollNav/logo.png" alt="logo" style="width:223px; height:46px;">
                    </a>
                </td>
                <td style="width:50%;">
                    <div class="uk-hidden-small" id="cd-linkedin"><a class="am-btn1 linkedin" href="https://www.linkedin.com/in/sassmaster">LinkedIn</a></div>
                    <button class="uk-button uk-hidden-large" data-uk-offcanvas="{target:'#offcanvas-L'}">Menu</button>
                    <div class="uk-hidden-small" id="cd-res"><a class="am-btn2" href="${contextPath}/sources/almResume.doc">Resume/CV</a></div>
                </td>
                <td style="width:25%;">
                     <a href="#0" class="uk-hidden-small">
                        <img class="true" src="${assetPath}/images/scrollNav/nametag.png" alt="nametag" style="width:223px; height:46px;">
                    </a>
                </td>
            </tr>
        </table>
    </div>
 </section>
<section id="overlay">
    <div class="uk-grid">
        <div class="uk-width-2-10">
        </div>
        <div class="uk-width-7-10 white">
            <div class="title">
                <h2>Adam L Marsh</h2>
                <h3>HTML5, SASS, & JS Building Blocks<br/>for Responsive Website Production</h3>
                <div class="iconset uk-hidden-small">
                    <div class="responsive">
                        Responsive<br/>
                        <i class="fa fa-mobile fa-3x"></i>
                    </div>
                    <div class="modular">
                        Modular<br/>
                        <i class="fa fa-cubes fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-width-1-10">
        </div>
    </div>
</section>
<div class="am-fixed-nav uk-hidden-small">
    <nav class="am-nav1">
        <ul class="am-top-nav">
            <li>
                <a class="link1" href="${contextPath}/pages/work/home.jsp">About </a>
                <span class="lsf-icon home hide-for-small"></span>
                <!-- icon -->
            </li>
            <li>
                <a class="link1" href="${contextPath}/pages/work/sandbox.jsp">sandbox </a>
                <span class="lsf-icon sns hide-for-small"></span>
                <!-- icon -->
            </li>
            <li>
                <a class="link1" href="${contextPath}/pages/work/resources.jsp">resources </a><!-- icon -->
                <span class="lsf-icon magic hide-for-small"></span>
            </li>
            <li>
                <a class="link1" href="${contextPath}/pages/work/contact.jsp">contact</a><!-- icon -->
                <span class="lsf-icon param hide-for-small"></span>
            </li>
            <li>
                <a class="link1" href="${contextPath}/pages/work/clients/login.jsp">login</a><!-- icon -->
                <span class="lsf-icon sitemap hide-for-small"></span>
            </li>
                <%--<li>
                    <a class="link1" href="${contextPath}/pages/work/template.jsp">template</a><!-- icon -->
                    <span class="lsf-icon sitemap hide-for-small"></span>
                </li>--%>
        </ul>
    </nav>
</div>
<%@ include file="/sitewide/offcanvas.jsp" %>
