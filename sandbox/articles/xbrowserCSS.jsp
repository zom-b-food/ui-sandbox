<!doctype html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com - X-browser CSS Demo</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link href="css_selectors/selectors.css" rel="stylesheet" type="text/css"
	      media="screen"/>
	<style type="text/css">
		#container-page {
			margin-right: auto;
			margin-left: auto;
			padding-left: 0 !important;
			padding-right: 0 !important; /*--Bottom rounded corners--*/
		}

		.popDiv {
			/*background: #ffffff url(../../resources/images/banner2Fade.jpg) no-repeat top left;*/

			height: auto;
			text-align: left;

			padding-left: 12px;
		}

		* html #uno {
			background: #ffdece;
			border: 2px solid red;
		}

		p {
			padding-bottom: 8px;
		}

		*:first-child+html #dos {
			background: #ffdece;
			border: 2px solid red;
		}

		html>body #tres {
			background: #ffdece;
			border: 2px solid red;
		}

		html>body #cuatro {
			background: #ffdece;
			border: 2px solid red;
		}

		html:first-child #cinco {
			background: #ffdece;
			border: 2px solid red;
		}

		html[xmlns*=""] body:last-child #seis {
			background: #ffdece;
			border: 2px solid red;
		}

		body:nth-of-type(1) #siete {
			background: #ffdece;
			border: 2px solid red;
		}

		#sietepointfive:nth-of-type(1n) {
			background: #ffdece;
			border: 2px solid red;
		}

		body:first-of-type #ocho {
			background: #ffdece;
			border: 2px solid red;
		}

		@media screen and (-webkit-min-device-pixel-ratio:0) {
			#diez {
				background: #ffdece;
				border: 2px solid red;
			}
		}

		html[xmlns*=""]:root #trece {
			background: #ffdece;
			border: 2px solid red;
		}

		*|html[xmlns*=""] #catorce {
			background: #ffdece;
			border: 2px solid red;
		}

		:root *>#quince {
			background: #ffdece;
			border: 2px solid red;
		}

		*+html #dieciocho {
			background: #ffdece;
			border: 2px solid red;
		}

		@media all and (min-width:0px) {
			#veintitres {
				background: #ffdece;
				border: 2px solid red;
			}
		}

		body:nth-of-type(1) #veintidos {
			background: #ffdece;
			border: 2px solid red;
		}

		#veinticuatro, x:-moz-any-link {
			background: #ffdece;
			border: 2px solid red;
		}

		#veinticinco, x:-moz-any-link, x:default {
			background: #ffdece;
			border: 2px solid red;
		}

		*>#dieciseis {
			background: #ffdece;
			border: 2px solid red;
		}

		html:only-child #nueve {
			background: #ffdece;
			border: 2px solid red;
		}

		#once {
			_background: #c4d6fd;
			_border: 2px solid #00f;
		}

		#doce {
			*background: #c4d6fd;
			*border: 2px solid #00f;
		}

		#veintiseis {
			background: #C4D6FD;
			border: 2px solid #0000FF;
		}

		#diecisiete {
			background: #c4d6fd;
			border: 2px solid #00f;
		}

		#diecinueve {
			background: #c4d6fd    \9 ;
			border: 2px solid #00f    \9;
		}

		#veinte {
			background: #c4d6fd    \9 ;
			border: 2px solid #00f    \9;
		}

		#veintisiete {
			background: #c4d6fd;
			border: 2px solid #00f;
		}

		.test {
			margin: 4px;
			width: 500px;
			padding: 2px;
		}

		hr {
			background: none repeat scroll 0 0 #DFDFDF;
			border: medium none;
			clear: both;
			display: block;
			height: 1px;
			margin: 20px 0;
			width: 100%;
		}
	</style>
</head>
<!--[if lt IE 7 ]>
<body class="ie6 "> <![endif]-->
<!--[if IE 7 ]>
<body class="ie7 "> <![endif]-->
<!--[if IE 8 ]>
<body class="ie8 "> <![endif]-->
<!--[if !IE]>-->
<body class=""> <!--<![endif]-->
	<!-- wondering wtf that ^^^ is?
check: http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/
-->
	<div id="container-page">
		<img src="../../resources/images/banner2Fade.jpg"/>

		<div class="popDiv">
			<h1>Cross-Browser CSS Cheat Sheet</h1>

			<div style="float:right; margin-top:14px; padding-right:22px;"><a href="javascript:window.close()">Close
				Window</a></div>
			<div id="page">
				<div class="post">
					<div class="tut_top">
						<!-- Post Image -->
						<div class="post_image"><a href="#">
							<img class="alignleft" src="CSSbestPractices_files/best_css_practices.jpg" alt=""
							     height="160"
							     width="200"/></a></div>
						<div class="preview">
							<!-- Post Title -->
							<h1 class="post_title">Cross-Browser CSS Cheat Sheet</h1>
							<!-- Post Meta -->
							<div class="post_meta">by Paul Irish
								<h4>Paul's Cross-browser CSS tips can be found here:<br/><a
										href="http://paulirish.com/2009/browser-specific-css-hacks/">Browser CSS Hacks -
									by Paul Irish</a></h4>
							</div>
						</div>
					</div>
				</div>
				<hr/>
				<div id="wrapper">
					<div id="content-wrapper">
						<div id="content">
							<div id="container">
								<h4>Selector hacks</h4>

								<div class="test" id="uno">Red if <code>* html</code> matches in this browser</div>
								<div class="test" id="dos">Red if <code>*:first-child+html </code> matches in this
									browser
								</div>
								<div class="test" id="tres">Red if <code>html&gt;body</code> matches in this browser
								</div>
								<div class="test" id="cuatro">Red if <code>html&gt;/**/body </code> matches in this
									browser
								</div>
								<div class="test" id="cinco">Red if <code>html:first-child</code> matches in this
									browser
								</div>
								<div class="test" id="seis">Red if <code>html[xmlns*=""] body:last-child</code> matches
									in
									this
									browser
								</div>
								<div class="test" id="siete">Red if <code>body:nth-of-type(1)</code> matches in this
									browser
								</div>
								<div class="test" id="sietepointfive">Red if <code>div:nth-of-type(1n)</code> matches in
									this
									browser
								</div>
								<div class="test" id="ocho">Red if <code>body:first-of-type</code> matches in this
									browser
								</div>
								<div class="test" id="diez">Red if <code>@media screen and
									(-webkit-min-device-pixel-ratio:0)</code> matches in this browser
								</div>
								<div class="test" id="trece">Red if <code>html[xmlns*=""]:root</code> matches in this
									browser
								</div>
								<div class="test" id="catorce">Red if <code>*|html[xmlns*=""]</code> matches in this
									browser
								</div>
								<div class="test" id="quince">Red if <code>:root *&gt;</code> matches in this browser
								</div>
								<div class="test" id="dieciocho">Red if <code>*+html</code> matches in this browser
								</div>
								<div class="test" id="deiciseis">Red if <code>* &gt;</code> matches in this browser
								</div>
								<div class="test" id="nueve">Red if <code>html:only-child</code> matches in this browser
								</div>
								<div class="test" id="veintitres">Red if <code>@media all and (min-width: 0px)</code>
									matches in
									this browser
								</div>
								<div class="test" id="veintiuno">Red if <code>html:lang(en)&gt;body </code> matches in
									this
									browser
								</div>
								<div class="test" id="veintidos">Red if <code>body:nth-of-type(1)</code> matches in this
									browser
								</div>
								<div class="test" id="veinticuatro">Red if <code> x:-moz-any-link</code> matches in this
									browser
								</div>
								<div class="test" id="veinticinco">Red if <code> x:-moz-any-link, x:default</code>
									matches
									in
									this browser
								</div>
								<h4>Attribute hacks</h4>

								<div class="test" id="once">Blue if <code>div { _background: blue}</code> matches in
									this
									browser
								</div>
								<div class="test" id="doce">Blue if <code>div { *background: blue}</code> matches in
									this
									browser
								</div>
								<div class="test" id="veintiseis">Blue if <code>div { .background: blue}</code> matches
									in
									this
									browser
								</div>
								<div class="test" id="diecisiete">Blue if <code>div { background/**/: blue}</code>
									matches
									in
									this browser
								</div>
								<div class="test" id="diecinueve">Blue if <code>div { background: blue\9;}</code>
									matches in
									this browser
								</div>
								<div class="test" id="veinte">Blue if <code>div { background/*\**/: blue\9;}</code>
									matches
									in
									this browser
								</div>
								<div class="test" id="veintisiete">Blue if <code>div { background: blue !ie;}</code>
									matches
									in
									this browser
								</div>
								<!--
								  <div class="test" id="trece">Blue if <code>div { _background: blue}</code> matches in this browser</div>
								-->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>