<!DOCTYPE html>
<head>
	<title>Demo - parallax scrolling</title>
	<%--Site specific files--%>
	<c:import url="../_deps/deps.jsp"/>
	<%--Demo specific files--%>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<div class="header">
		<div class="grid">
			<h3>Parallax Widget</h3>
			<h4>Welcome to the UI/UX Sandbox</h4>

			<div class="clear"></div>
			<br/>
			<a class="button blue medium" href="https://github.com/kpath/UX-Framework"><i
					class="fa fa-cloud-download"></i> Download (Github)</a>
		</div>
	</div>
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.</p>

		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
			dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
			magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
			ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
			nulla pariatur?</p>
	</div>
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.</p>

		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
			dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
			magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
			ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
			nulla pariatur?</p>
	</div>
	<div id="parallaxWrapper" class="parallax">
		<section id="slide-1" class="homeSlide">
			<div class="bcg"
			     data-center="background-position: 50% 0px;"
			     data-top-bottom="background-position: 50% -100px;"
			     data-anchor-target="#slide-1"
					>
				<div class="hsContainer">
					<div class="hsContent" data-center="bottom: 200px; opacity: 1" data-top="bottom: 1200px; opacity: 0"
					     data-anchor-target="#slide-1 h2">
						<h2>Simple parallax scrolling is...</h2>
					</div>
				</div>
			</div>
		</section>
		<section id="slide-2" class="homeSlide">
			<div class="bcg"
			     data-center="background-position: 50% 10px;"
			     data-top-bottom="background-position: 50% -50px;"
			     data-bottom-top="background-position: 50% 10px;"
			     data-anchor-target="#slide-2"
					>
				<div class="hsContainer">
					<div class="hsContent"
					     data--10-bottom="opacity: 0;"
					     data--60-bottom="opacity: 1;"
					     data-center="opacity: 1"
					     data-20-top="opacity: 0"
					     data-anchor-target="#slide-2"
							>
						<h2>great for story telling websites.</h2>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.</p>

		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
			dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
			magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
			ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
			nulla pariatur?</p>
	</div>
	<div class="content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
			magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
			nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
			anim id est laborum.</p>

		<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
			aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
			dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
			sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
			magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
			suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
			ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
			nulla pariatur?</p>
	</div>
	<div class="footer">
		<div class="grid">
			<h3>Please Come Again</h3>
			<h4>Our Widget Repository for Rapid Website Production</h4>

			<div class="clear"></div>
			<br/>
			<a class="button blue medium" href="https://github.com/kpath/UX-Framework"><i
					class="fa fa-cloud-download"></i> Download (Github)</a>
		</div>
	</div>
	<script src="js/pageloaded.js"></script>
	<script src="js/skrollr.js"></script>
	<script src="js/_main.js"></script>
</body>
</html>
