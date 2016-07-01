<!doctype html>
<html lang="en" class="no-js">
<head>
	<title>ui-design-engineering.com [RESOURCES]</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link rel="stylesheet" href="${contextPath}/resources/css/pages/articles.css">
	<link rel="stylesheet" type="text/css" href="${contextPath}/resources/css/components/accordion.css"/>
</head>
<body>
<div class="wrap">
	<%@ include file="/sitewide/pages-primary-nav.jsp" %>
	<%@ include file="/sitewide/header.jsp" %>
	<%@ include file="/sitewide/pages-secondary-nav.jsp" %>
	<div id="mq-cont" class="container-fluid cd-main-content">
		<!-- Main Split Column -->
		<div class="col-md-9">
			<section>
				<%@ include file="/sitewide/page-header.jsp" %>
			</section>
			<div class="col-md-3">
				<section id="sidenav" class="leftbar">
					<%@ include file="/sitewide/sidenav.jsp" %>
				</section>
			</div>
			<div class="col-md-9">
				<section class="frame">
					<h2>&nbsp;Resources&nbsp;</h2>
					<br class="clear"/>
					<ul class="collapsible popout collapsible-accordion" id="popAccordion" data-collapsible="accordion">

						<li class="row">

							<div class="collapsible-header">Articles</div>

							<div class="collapsible-body open">
								<ul>
									<li><a href="selectors.jsp" class="popupwindow">The 30 CSS
									                                                Selectors You Must Memorize - by Jeffrey Way </a></li>
									<li><a href="CSSbestPractices.jsp" class="popupwindow">10 CSS
									                                                       Best Practices - by Jeff Couturier </a></li>
									<li><a href="jqMethods.jsp" class="popupwindow">20
									                                                jQuery Methods you Should be Using - by Andrew Burgess </a></li>
									<li><a href="jqPE.jsp" class="popupwindow">Extending
									                                           jQuery - by Kevin Liew of www.queness.com </a></li>
								</ul>
							</div>

						</li>

						<li class="row">

							<div class="collapsible-header">Cheatsheets</div>

							<div class="collapsible-body open">
								<ul>
									<li><a href="CSSReference.jsp" class="popupwindow">CSS
									                                                   Cheatsheet - by W3schools.com </a></li>
									<li><a href="xbrowserCSS.jsp" class="popupwindow">Cross-Browser
									                                                  CSS Cheatsheet - by Paul Irish </a></li>

								</ul>
							</div>

						</li>

						<li class="row">

							<div class="collapsible-header">Style Guides</div>

							<div class="collapsible-body open">
								<ul>
									<li><a href="${contextPath}/sources/medialoot.zip">Medialoot Style Guide</a></li>
									<li><a href="${contextPath}/sources/TypographyStyleGuide.zip">Typography Style Guide</a></li>
									<li><a href="${contextPath}/sources/WireframeKit.zip">Wireframe Kit</a></li>
								</ul>
							</div>

						</li>

						<li class="row">

							<div class="collapsible-header">Templates</div>

							<div class="collapsible-body open">
								<ul>
									<li><a href="${contextPath}/templates/index.html" class="popupwindow" rel="windowCenter">Bootstrap templates</a></li>
									<li><a href="${contextPath}/sources/StarterTemplate.zip">Photoshop templates</a></li>
								</ul>
							</div>

						</li>

						<li class="row">

							<div class="collapsible-header">More</div>

							<div class="collapsible-body open">
								<ul>
									<li><a href="js_questions.jsp" class="popupwindow">Javascript
									                                                   Interview Questions - from theprofessionalspoint.blogspot.com </a></li>
									<li><a href="FEQ.jsp" class="popupwindow">Front-end Developer
									                                          Interview Questions - from github.com </a></li>
									<li><a href="js_callbacks.jsp" class="popupwindow">Javascript Callback Functions </a></li>
								</ul>
							</div>

						</li>


					</ul>
					<%--<section class="ac-container">
						<div>
							<input id="ac-1" name="accordion-1" type="checkbox"/>
							<label for="ac-1">Articles</label>
							<article class="ac-articles">
								<ul>
									<li><a href="selectors.jsp" class="popupwindow">The 30 CSS
									                                                Selectors You Must Memorize - by Jeffrey Way </a></li>
									<li><a href="CSSbestPractices.jsp" class="popupwindow">10 CSS
									                                                       Best Practices - by Jeff Couturier </a></li>
									<li><a href="jqMethods.jsp" class="popupwindow">20
									                                                jQuery Methods you Should be Using - by Andrew Burgess </a></li>
									<li><a href="jqPE.jsp" class="popupwindow">Extending
									                                           jQuery - by Kevin Liew of www.queness.com </a></li>
								</ul>
							</article>
						</div>
						<div>
							<input id="ac-2" name="accordion-1" type="checkbox"/>
							<label for="ac-2">Cheatsheets</label>
							<article class="ac-cheatsheets">
								<ul>
									<li><a href="CSSReference.jsp" class="popupwindow">CSS
									                                                   Cheatsheet - by W3schools.com </a></li>
									<li><a href="xbrowserCSS.jsp" class="popupwindow">Cross-Browser
									                                                  CSS Cheatsheet - by Paul Irish </a></li>

								</ul>
							</article>
						</div>
						<div>
							<input id="ac-3" name="accordion-1" type="checkbox"/>
							<label for="ac-3">Style Guides</label>
							<article class="ac-styleguides">
								<ul>
									<li><a href="${contextPath}/sources/medialoot.zip">Medialoot Style Guide</a></li>
									<li><a href="${contextPath}/sources/TypographyStyleGuide.zip">Typography Style Guide</a></li>
									<li><a href="${contextPath}/sources/WireframeKit.zip">Wireframe Kit</a></li>
								</ul>
							</article>
						</div>
						<div>
							<input id="ac-4" name="accordion-1" type="checkbox"/>
							<label for="ac-4">Templates</label>
							<article class="ac-templates">
								<ul>
									<li><a href="${contextPath}/templates/index.html" class="popupwindow" rel="windowCenter">Bootstrap templates</a></li>
									<li><a href="${contextPath}/sources/StarterTemplate.zip">Photoshop templates</a></li>
								</ul>
							</article>
						</div>
						<div>
							<input id="ac-5" name="accordion-1" type="checkbox"/>
							<label for="ac-5">More</label>
							<article class="ac-more">
								<ul>
									<li><a href="js_questions.jsp" class="popupwindow">Javascript
									                                                   Interview Questions - from theprofessionalspoint.blogspot.com </a></li>
									<li><a href="FEQ.jsp" class="popupwindow">Front-end Developer
									                                          Interview Questions - from github.com </a></li>
									<li><a href="js_callbacks.jsp" class="popupwindow">Javascript Callback Functions </a></li>
								</ul>
							</article>
						</div>
					</section>--%>


					<br class="clear">

				</section>
				<br class="clear">
			</div>
		</div>
		<!-- Sidebar Column -->
		<div class="col-md-3">
			<section id="sidebar" class="rightbar">
				<div class="wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="960ms">
					<%@ include file="/sitewide/sidebar.jsp" %>
				</div>
			</section>
		</div>
	</div>
</div>
<%@ include file="/sitewide/footer.jsp" %>
<script>
	(function (i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function () {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-76825466-1', 'auto');
	ga('send', 'pageview');

</script>
</body>
</html>
