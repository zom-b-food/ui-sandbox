<!DOCTYPE html>
<html lang="en-gb" dir="ltr">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Slideshow component - UIkit documentation</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link rel="stylesheet" href="../resources/css/components/amslides.css">
	<script src="../resources/js/components/slideshow.js"></script>
	<script src="../resources/js/components/slideshow-fx.js"></script>
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
<h1 class="uk-article-title">Slideshows</h1>

<p class="uk-article-lead">bla...</p>
<hr class="uk-article-divider">
<h4>Example</h4>

<div class="uk-slidenav-position" data-uk-slideshow>
	<ul class="uk-slideshow">
		<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
		<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
		<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
	</ul>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
	   style="color: rgba(255,255,255,0.4)"></a>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
	   style="color: rgba(255,255,255,0.4)"></a>
	<ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center">
		<li data-uk-slideshow-item="0"><a href="#">Item 1</a></li>
		<li data-uk-slideshow-item="1"><a href="#">Item 2</a></li>
		<li data-uk-slideshow-item="2"><a href="#">Item 3</a></li>
	</ul>
</div>
<h3>Example</h3>
<ul class="uk-grid uk-grid-width-1-1 uk-grid-width-medium-1-2" data-uk-grid-margin>
	<li>
		<h3>Scroll</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'scroll'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Scale</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'scale'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Swipe</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'swipe'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Slice Down</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'slice-down'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Slice Up</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'slice-up'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Slice Up Down</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'slice-up-down'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Fold</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'fold'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Puzzle</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'puzzle'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Boxes</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'boxes'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
	<li>
		<h3>Boxes Reverse</h3>

		<div class="uk-slidenav-position" data-uk-slideshow="{animation: 'boxes-reverse'}">
			<ul class="uk-slideshow">
				<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
				<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
			</ul>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
			   style="color: rgba(255,255,255,0.4)"></a>
			<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
			   style="color: rgba(255,255,255,0.4)"></a>
		</div>
	</li>
</ul>
<hr class="uk-article-divider">
<h2 id="ken-burns-effect"><a href="#ken-burns-effect" class="uk-link-reset">Ken Burns effect</a></h2>

<p>The Ken Burns effect can also be applied to slideshow items. Just add the <code>{kenburns:true}</code> option to the
	data attribute. This effect can also be applied to videos.</p>

<h3>Example</h3>

<div class="uk-slidenav-position" data-uk-slideshow="{kenburns:true, autoplay:true}">
	<ul class="uk-slideshow">
		<li><img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt=""></li>
		<li><img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt=""></li>
		<li><img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt=""></li>
	</ul>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
	   style="color: rgba(255,255,255,0.4)"></a>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
	   style="color: rgba(255,255,255,0.4)"></a>
</div>
<hr class="uk-article-divider">
<h3>Example</h3>

<div class="uk-slidenav-position" data-uk-slideshow>
	<ul class="uk-slideshow uk-overlay-active">
		<li>
			<img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt="">

			<div class="uk-overlay-panel uk-overlay-background uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">
				<div>
					<h3>Overlay</h3>

					<p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr,<br>sed diam nonumy
						eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
					<button class="uk-button uk-button-primary">Button</button>
				</div>
			</div>
		</li>
		<li>
			<img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt="">

			<div class="uk-overlay-panel uk-overlay-background uk-overlay-top uk-overlay-slide-top">
				<h3>Overlay Top</h3>

				<p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam.</p>
				<button class="uk-button uk-button-primary">Button</button>
			</div>
		</li>
		<li>
			<img src="../docs/images/placeholder_800x400_3.jpg" width="800" height="400" alt="">

			<div class="uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-overlay-slide-bottom">
				<h3>Overlay Bottom</h3>

				<p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam.</p>
				<button class="uk-button uk-button-primary">Button</button>
			</div>
		</li>
		<li>
			<img src="../docs/images/placeholder_800x400_1.jpg" width="800" height="400" alt="">

			<div class="uk-overlay-panel uk-overlay-background uk-overlay-left uk-overlay-slide-left uk-width-1-4">
				<h3>Overlay Left</h3>

				<p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam.</p>
				<button class="uk-button uk-button-primary">Button</button>
			</div>
		</li>
		<li>
			<img src="../docs/images/placeholder_800x400_2.jpg" width="800" height="400" alt="">

			<div class="uk-overlay-panel uk-overlay-background uk-overlay-right uk-overlay-slide-right uk-width-1-4">
				<h3>Overlay Right</h3>

				<p>Lorem <a href="#">ipsum dolor</a> sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
					tempor invidunt ut labore et dolore magna aliquyam.</p>
				<button class="uk-button uk-button-primary">Button</button>
			</div>
		</li>
	</ul>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"
	   style="color: rgba(255,255,255,0.4)"></a>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"
	   style="color: rgba(255,255,255,0.4)"></a>
</div>
<hr class="uk-article-divider">
<h3>Example</h3>

<div class="uk-slidenav-position" data-uk-slideshow>
	<ul class="uk-slideshow">
		<li>
			<video width="600" height="400" autoplay loop muted controls>
				<source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.mp4?test1" type="video/mp4">
				<source src="http://www.quirksmode.org/html5/videos/big_buck_bunny.ogv?test2" type="video/ogg">
			</video>
		</li>
		<li>
			<iframe src="http://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;autoplay=1&amp;loop=1&amp;setVolume=0"
			        width="500" height="281" frameborder="0" allowfullscreen></iframe>
		</li>
	</ul>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
</div>
<hr class="uk-article-divider">
<h3>Example</h3>

<div class="uk-slidenav-position" data-uk-slideshow>
	<ul class="uk-slideshow uk-text-center">
		<li>
			<div class="uk-panel uk-panel-box">
				<div class="uk-grid">
					<div class="uk-width-1-3">
						<img src="../docs/images/placeholder_200x200.svg" width="200" height="200" alt="">
					</div>
					<div class="uk-width-2-3">
						<h3 class="uk-panel-title">Headline 1</h3>

						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
							et justo duo dolores et ea rebum.</p>
						<button class="uk-button">Read more</button>
					</div>
				</div>
			</div>
		</li>
		<li>
			<div class="uk-panel uk-panel-box uk-panel-box-primary">
				<div class="uk-grid">
					<div class="uk-width-2-3">
						<h3 class="uk-panel-title">Headline 2</h3>

						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
							et justo duo dolores et ea rebum.</p>
						<button class="uk-button">Read more</button>
					</div>
					<div class="uk-width-1-3">
						<img src="../docs/images/placeholder_200x200.svg" width="200" height="200" alt="">
					</div>
				</div>
			</div>
		</li>
	</ul>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
	<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
</div>
<hr class="uk-article-divider">
</article>
</div>
</div>
</div>
</main>
<footer data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true}">
	<%@ include file="/sitewide/footer.jsp" %>
</footer>
<%@ include file="/sitewide/offcanvas.jsp" %>
<div class="uk-container uk-container-center">
	<div class="uk-grid" data-uk-grid-margin>
		<div class="uk-width-medium-3-4">
		</div>
	</div>
</div>
</body>
</html>
