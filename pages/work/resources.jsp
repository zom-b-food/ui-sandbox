<!DOCTYPE html>
<html lang="en-gb" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>www.adam-marsh.com - contact</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<script src="${assetPath}/js/components/slidenav.js"></script>
		<script src="${assetPath}/js/components/popAccordion.js"></script>
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

							<h2><img class="true" src="${assetPath}/images/rule2.gif" alt=""
							         style="width:12px; height:4px;"/>&nbsp;ui-design-engineering.com&nbsp;<img
									class="true" src="${assetPath}/images/rule.gif" alt=""
									style="width:208px; height:9px;"/></h2>
							<h4><img class="true" src="${assetPath}/images/rule2.gif" alt=""
							         style="width:12px; height:4px;"/>&nbsp;[Interested in remote/telecommute
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
										<h2>UI/UX Resources</h2>

										<p style="margin-left:14px;">Resources for UI/UX Designers and Developers</p>
										<br class="clear"/>
										<ul class="collapsible popout collapsible-accordion" id="popAccordion"
										    data-collapsible="accordion">
											<li class="clean">
												<div class="collapsible-header">&nbsp;&nbsp;<i
														class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Articles
												</div>
												<div class="collapsible-body open">
													<ul>
														<li><a href="../../sandbox/articles/selectors.jsp"
														       class="popupwindow">The 30 CSS
															Selectors You Must Memorize - by Jeffrey Way </a></li>
														<li><a href="../../sandbox/articles/CSSbestPractices.jsp"
														       class="popupwindow">10 CSS
															Best Practices - by Jeff Couturier </a></li>
														<li><a href="../../sandbox/articles/jqMethods.jsp"
														       class="popupwindow">20
															jQuery Methods you Should be Using - by Andrew Burgess </a>
														</li>
														<li><a href="../../sandbox/articles/jqPE.jsp"
														       class="popupwindow">Extending
															jQuery - by Kevin Liew of www.queness.com </a></li>
													</ul>
												</div>
											</li>
											<li class="clean">
												<div class="collapsible-header">&nbsp;&nbsp;<i
														class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Cheatsheets
												</div>
												<div class="collapsible-body open">
													<ul>
														<li><a href="../../sandbox/articles/CSSReference.jsp"
														       class="popupwindow">CSS
															Cheatsheet - by W3schools.com </a></li>
														<li><a href="../../sandbox/articles/xbrowserCSS.jsp"
														       class="popupwindow">Cross-Browser
															CSS Cheatsheet - by Paul Irish </a></li>
													</ul>
												</div>
											</li>
											<li class="clean">
												<div class="collapsible-header">&nbsp;&nbsp;<i
														class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Style
													Guides
												</div>
												<div class="collapsible-body open">
													<ul>
														<li><a href="${contextPath}/sources/medialoot.zip">Medialoot
															Style Guide</a></li>
														<li><a href="${contextPath}/sources/TypographyStyleGuide.zip">Typography
															Style Guide</a></li>
														<li><a href="${contextPath}/sources/WireframeKit.zip">Wireframe
															Kit</a></li>
													</ul>
												</div>
											</li>
											<li class="clean">
												<div class="collapsible-header">&nbsp;&nbsp;<i
														class="fa fa-star-o rotate" style="opacity:.7;"></i>&nbsp;&nbsp;Templates
												</div>
												<div class="collapsible-body open">
													<ul class="fancybullet medium-up">
														<li><a href="${contextPath}/templates/index.html"
														       class="popupwindow" rel="windowCenter">Bootstrap
															templates</a></li>
														<li><a href="${contextPath}/sources/StarterTemplate.zip">Photoshop
															templates</a></li>
													</ul>
												</div>
											</li>
										</ul>
										<br class="clear"/>
									</section>
								</div>
							</div>
						</div>
						<div class="uk-width-medium-2-10 uk-hidden-small">
							<%@ include file="/sitewide/sidebar.jsp" %>
						</div>
					</div>
				</div>
			</div>
		</main>
		<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
			<%@ include file="/sitewide/footer.jsp" %>
		</footer>
		<script src="${contextPath}/resources/js/ilightbox/css_browser_selector.min.js"></script>
		<script src="${contextPath}/resources/js/ilightbox/jquery.js"></script>
		<script src="${contextPath}/resources/js/ilightbox/jquery.requestAnimationFrame.js"></script>
		<script type="text/javascript" async defer src="http://iprodev.com/projects.php?p=ilightbox"></script>
		<script src="${contextPath}/resources/js/ilightbox/jquery.mousewheel.js"></script>
		<script src="${contextPath}/resources/js/ilightbox/ilightbox.packed.js"></script>
		<script src="${contextPath}/resources/js/ilightbox/init.js"></script>
		<script src="${contextPath}/resources/js/components/jquery.popWin.js"></script>
		<script>
			$('.collapsible-header').click(function () {

				$(this).find('i').toggleClass('down')
			});
		</script>
		<script type="text/javascript">
			<!--
			document.write('<img src="/axs/ax.pl?mode=img&ref=');
			document.write(escape(document.referrer));
			document.write('" height="1" width="1" style="display:none" alt="" />');
			// -->
		</script>
		<noscript>
			<img src="/axs/ax.pl?mode=img" height="1" width="1" style="display:none" alt=""/>
		</noscript>
	</body>
</html>
