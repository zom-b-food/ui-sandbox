<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">

<title>Slider Pro</title>
    <%--Site specific files--%>
    <c:import url="../_deps/deps.jsp"/>
<link rel="stylesheet" type="text/css" href="css/slider-pro.min.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="css/examples.css" media="screen"/>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>

<script src="../_deps/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/jquery.sliderPro.min.js"></script>

<script type="text/javascript">
	$( document ).ready(function( $ ) {
		$( '#example3' ).sliderPro({
			width: 960,
			height: 500,
			fade: true,
			arrows: true,
			buttons: false,
			fullScreen: true,
			shuffle: true,
			smallSize: 500,
			mediumSize: 1000,
			largeSize: 3000,
			thumbnailArrows: true,
			autoplay: false
		});
	});
</script>

</head>

<body>
<div class="header">
    <div class="grid">
        <h3>Slideshow with Fading Text</h3>
        <h4>Welcome to the UI/UX Sandbox</h4>
        <div class="clear"></div><br />
        <a class="button blue medium" href="https://github.com/kpath/UX-Framework"><i class="fa fa-cloud-download"></i> Download (Github)</a>
    </div>
</div>
<div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
</div>
	<div id="example3" class="slider-pro">
		<div class="sp-slides">
			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image1_medium.jpg"
					data-small="http://bqworks.com/slider-pro/images/image1_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image1_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image1_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image1_large.jpg"/>

				<p class="sp-layer sp-white sp-padding"
					data-horizontal="50" data-vertical="50"
					data-show-transition="left" data-show-delay="400">
					Lorem ipsum
				</p>

				<p class="sp-layer sp-black sp-padding"
					data-horizontal="180" data-vertical="50"
					data-show-transition="left" data-show-delay="600">
					dolor sit amet
				</p>

				<p class="sp-layer sp-white sp-padding"
					data-horizontal="315" data-vertical="50"
					data-show-transition="left" data-show-delay="800">
					consectetur adipisicing elit.
				</p>
			</div>

	        <div class="sp-slide">
	        	<img class="sp-image" src="css/images/blank.gif"
	        		data-src="http://bqworks.com/slider-pro/images/image2_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image2_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image2_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image2_large.jpg"
	        		data-retina="http://bqworks.com/slider-pro/images/image2_large.jpg"/>

				<h3 class="sp-layer sp-black sp-padding" 
					data-horizontal="40" data-vertical="40" 
					data-show-transition="left">
					Lorem ipsum dolor sit amet
				</h3>

				<p class="sp-layer sp-white sp-padding" 
					data-horizontal="40" data-vertical="100" 
					data-show-transition="left" data-show-delay="200">
					consectetur adipisicing elit
				</p>

				<p class="sp-layer sp-black sp-padding" 
					data-horizontal="40" data-vertical="160" data-width="350" 
					data-show-transition="left" data-show-delay="400">
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image3_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image3_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image3_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image3_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image3_large.jpg"/>

				<p class="sp-layer sp-white sp-padding" 
					data-position="centerCenter" data-vertical="-50" 
					data-show-transition="right" data-show-delay="500" >
					Lorem ipsum dolor sit amet
				</p>

				<p class="sp-layer sp-black sp-padding" 
					data-position="centerCenter" data-vertical="50" 
					data-show-transition="left" data-show-delay="700">
					consectetur adipisicing elit
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image4_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image4_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image4_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image4_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image4_large.jpg"/>

				<p class="sp-layer sp-black sp-padding"
					data-position="bottomLeft" data-vertical="0" data-width="100%"
					data-show-transition="up">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image5_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image5_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image5_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image5_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image5_large.jpg"/>

				<p class="sp-layer sp-white sp-padding" 
					data-vertical="5%" data-horizontal="5%" data-width="90%" 
					data-show-transition="down" data-show-delay="400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image6_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image6_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image6_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image6_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image6_large.jpg"/>

				<p class="sp-layer sp-white sp-padding" 
					data-horizontal="10" data-vertical="10" data-width="300">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image7_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image7_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image7_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image7_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image7_large.jpg"/>

				<p class="sp-layer sp-black sp-padding" 
					data-position="bottomLeft" data-horizontal="5%" data-vertical="5%" data-width="90%" 
					data-show-transition="up" data-show-delay="400">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image8_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image8_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image8_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image8_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image8_large.jpg"/>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image9_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image9_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image9_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image9_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image9_large.jpg"/>

				<p class="sp-layer sp-black sp-padding" 
					data-horizontal="50" data-vertical="50"
					data-show-transition="down" data-show-delay="500">
					Lorem ipsum dolor sit amet
				</p>

				<p class="sp-layer sp-white sp-padding" 
					data-horizontal="50" data-vertical="100"
					data-show-transition="up" data-show-delay="500">
					consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image10_medium.jpg" 
					data-small="http://bqworks.com/slider-pro/images/image10_small.jpg"
					data-medium="http://bqworks.com/slider-pro/images/image10_medium.jpg"
					data-large="http://bqworks.com/slider-pro/images/image10_large.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image10_large.jpg"/>
			</div>
		</div>

		<div class="sp-thumbnails">
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image1_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image2_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image3_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image4_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image5_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image6_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image7_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image8_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image9_thumbnail.jpg"/>
			<img class="sp-thumbnail" src="http://bqworks.com/slider-pro/images/image10_thumbnail.jpg"/>
		</div>
    </div>
<div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
</div>

<div class="footer">

    <div class="grid">
        <h3>Please Come Again</h3>
        <h4>Our Widget Repository for Rapid Website Production</h4>

        <div class="clear"></div><br />
        <a class="button blue medium" href="https://github.com/kpath/UX-Framework"><i class="fa fa-cloud-download"></i> Download (Github)</a>

    </div>
</div>
</body>
</html>