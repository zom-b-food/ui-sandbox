<!DOCTYPE html>
<html lang="en-gb" dir="ltr">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>www.adam-marsh.com - resources</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<script>
			$(window).bind("load", function () {
				$('#work-in-progress').fadeOut(900);
			});
		</script>
	</head>
	<body>
		<div id="work-in-progress">
			<div class="sk-chasing-dots">
				<div class="sk-child sk-dot1"></div>
				<div class="sk-child sk-dot2"></div>
			</div>
		</div>
		<header class="splash">
			<section id="am-fixed">
				<div class="header">
					<table class="rufus">
						<tr>
							<td style="width:20%;"><a href="#0"><img id="am-logo"
							                                         src="${assetPath}/images/scrollNav/nametag.png"
							                                         alt="Nametag"></a></td>
							<td style="width:60%;">
								<button class="uk-button uk-hidden-large" data-uk-offcanvas="{target:'#offcanvas-3'}">
									Left
								</button>
								<button class="uk-button uk-hidden-large" data-uk-offcanvas="{target:'#offcanvas-4'}">
									Right
								</button>
							</td>
							<td class="uk-hidden-small" style="width:20%;"><a href="#0"><img class="am-btn"
							                                                                 src="${assetPath}/images/scrollNav/logo.png"
							                                                                 alt="Logo"></a></td>
						</tr>
					</table>
				</div>
			</section>
			<section id="overlay">
				<div class="uk-grid">
					<div class="uk-width-2-10">
						uuuuu
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
						uiiioooo
						<%-- <a href="#0" class="cd-primary-nav-trigger">Menu<span></span></a>--%>
					</div>
				</div>
			</section>
			<div class="am-fixed-nav uk-hidden-small">
				<!-- button visible on small devices -->
				<nav class="am-nav1">
					<ul class="am-top-nav">
						<li></li>
					</ul>
				</nav>
			</div>
		</header>
		<main id="content">
			<div class="uk-container-center">
				<div class="uk-grid" data-uk-grid-margin>
					<div class="uk-width-1-1">
						content
					</div>
				</div>
			</div>
		</main>
		<footer>
			<%@ include file="/sitewide/footer.jsp" %>
		</footer>
		<div id="offcanvas-3" class="uk-offcanvas">
			<div class="uk-offcanvas-bar">
				<ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav>
					<li><a href="">Item</a></li>
					<li class="uk-active"><a href="">Active</a></li>
					<li class="uk-parent">
						<a href="#">Parent</a>
						<ul class="uk-nav-sub">
							<li><a href="">Sub item</a></li>
							<li><a href="">Sub item</a>
								<ul>
									<li><a href="">Sub item</a></li>
									<li><a href="">Sub item</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="uk-parent">
						<a href="#">Parent</a>
						<ul class="uk-nav-sub">
							<li><a href="">Sub item</a></li>
							<li><a href="">Sub item</a></li>
						</ul>
					</li>
					<li><a href="">Item</a></li>
					<li class="uk-nav-header">Header</li>
					<li class="uk-parent"><a href=""><i class="uk-icon-star"></i> Parent</a></li>
					<li><a href=""><i class="uk-icon-twitter"></i> Item</a></li>
					<li class="uk-nav-divider"></li>
					<li><a href=""><i class="uk-icon-rss"></i> Item</a></li>
				</ul>
			</div>
		</div>
		<div id="offcanvas-4" class="uk-offcanvas">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-flip">
				<div class="uk-panel">
					<h3 class="uk-panel-title">Panel title</h3>
					Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</div>
				<div class="uk-panel">
					<h3 class="uk-panel-title">Panel title</h3>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</div>
			</div>
		</div>
	</body>
</html>
