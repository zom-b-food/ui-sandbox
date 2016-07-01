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
		$( '#example1' ).sliderPro({
			width: 960,
			height: 500,
			arrows: true,
			buttons: false,
			waitForLayers: true,
			thumbnailWidth: 200,
			thumbnailHeight: 100,
			thumbnailPointer: true,
			autoplay: false,
			autoScaleLayers: false,
			breakpoints: {
				500: {
					thumbnailWidth: 120,
					thumbnailHeight: 50
				}
			}
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

	<div id="example1" class="slider-pro">
		<div class="sp-slides">
			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image1_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image1_large.jpg"/>
				
				<p class="sp-layer sp-white sp-padding"
					data-horizontal="50" data-vertical="50"
					data-show-transition="left" data-hide-transition="up" data-show-delay="400" data-hide-delay="200">
					Lorem ipsum
				</p>

				<p class="sp-layer sp-black sp-padding hide-small-screen"
					data-horizontal="180" data-vertical="50"
					data-show-transition="left" data-hide-transition="up" data-show-delay="600" data-hide-delay="100">
					dolor sit amet
				</p>

				<p class="sp-layer sp-white sp-padding hide-medium-screen"
					data-horizontal="315" data-vertical="50"
					data-show-transition="left" data-hide-transition="up" data-show-delay="800">
					consectetur adipisicing elit.
				</p>
			</div>

	        <div class="sp-slide">
	        	<img class="sp-image" src="css/images/blank.gif"
	        		data-src="http://bqworks.com/slider-pro/images/image2_medium.jpg"
	        		data-retina="http://bqworks.com/slider-pro/images/image2_large.jpg"/>

				<h3 class="sp-layer sp-black sp-padding" 
					data-horizontal="40" data-vertical="10%" 
					data-show-transition="left" data-hide-transition="left">
					Lorem ipsum dolor sit amet
				</h3>

				<p class="sp-layer sp-white sp-padding hide-medium-screen" 
					data-horizontal="40" data-vertical="22%" 
					data-show-transition="left" data-show-delay="200" data-hide-transition="left" data-hide-delay="200">
					consectetur adipisicing elit
				</p>

				<p class="sp-layer sp-black sp-padding hide-small-screen" 
					data-horizontal="40" data-vertical="34%" data-width="350" 
					data-show-transition="left" data-show-delay="400" data-hide-transition="left" data-hide-delay="500">
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image3_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image3_large.jpg"/>

				<p class="sp-layer sp-white sp-padding" 
					data-position="centerCenter" data-vertical="-50" 
					data-show-transition="right" data-hide-transition="left" data-show-delay="500" >
					Lorem ipsum dolor sit amet
				</p>

				<p class="sp-layer sp-black sp-padding hide-small-screen" 
					data-position="centerCenter" data-vertical="50" 
					data-show-transition="left" data-show-delay="700" data-hide-transition="right" data-hide-delay="200">
					consectetur adipisicing elit
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image4_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image4_large.jpg"/>

				<p class="sp-layer sp-black sp-padding" 
					data-position="bottomLeft"
					data-show-transition="up" data-hide-transition="down">
					Lorem ipsum dolor sit amet <span class="hide-small-screen">, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <span class="hide-medium-screen">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image5_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image5_large.jpg"/>

				<p class="sp-layer sp-white sp-padding" 
					data-vertical="10" data-horizontal="2%" data-width="96%" 
					data-show-transition="down" data-show-delay="400" data-hide-transition="up">
					Lorem ipsum dolor sit amet <span class="hide-small-screen">, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <span class="hide-medium-screen">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image6_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image6_large.jpg"/>

				<p class="sp-layer sp-white sp-padding" 
					data-horizontal="10" data-vertical="10" data-width="35%">
					Lorem ipsum dolor sit amet <span class="hide-small-screen">, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <span class="hide-medium-screen">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image7_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image7_large.jpg"/>

				<p class="sp-layer sp-black sp-padding" 
					data-position="bottomLeft" data-vertical="10" data-horizontal="2%" data-width="96%" 
					data-show-transition="up" data-show-delay="400" data-hide-transition="down">
					Lorem ipsum dolor sit amet <span class="hide-small-screen">, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <span class="hide-medium-screen">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image8_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image8_large.jpg"/>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image9_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image9_large.jpg"/>

				<p class="sp-layer sp-black sp-padding" 
					data-position="bottomLeft" data-horizontal="50" data-vertical="100"
					data-show-transition="down" data-show-delay="500" data-hide-transition="up">
					Lorem ipsum dolor sit amet
				</p>

				<p class="sp-layer sp-white sp-padding hide-small-screen" 
					data-position="bottomLeft" data-horizontal="50" data-vertical="50"
					data-show-transition="up" data-show-delay="500" data-hide-transition="down">
					consectetur adipisicing elit <span class="hide-medium-screen">, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
				</p>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image10_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image10_large.jpg"/>
			</div>
		</div>

		<div class="sp-thumbnails">
			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Lorem ipsum</div>
				<div class="sp-thumbnail-description">Dolor sit amet, consectetur adipiscing elit sed</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Do eiusmod</div>
				<div class="sp-thumbnail-description">Tempor incididunt ut labore et dolore magna aliqua</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Ut enim</div>
				<div class="sp-thumbnail-description">Ad minim veniam, quis nostrud exercitation</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Ullamco oris</div>
				<div class="sp-thumbnail-description">Nisi ut aliquip ex ea commodo consequat</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Duis aute</div>
				<div class="sp-thumbnail-description">Irure dolor in reprehenderit in voluptate velit</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Esse cillum</div>
				<div class="sp-thumbnail-description">Dolore eu fugiat nulla pariatur excepteur</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Sint occaecat</div>
				<div class="sp-thumbnail-description">Cupidatat non proident, sunt in culpa qui officia</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Deserunt</div>
				<div class="sp-thumbnail-description">Mollit anim id est laborum sed ut perspiciatis</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Unde omnis</div>
				<div class="sp-thumbnail-description">Iste natus error sit voluptatem doloremque</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-title">Laudantium</div>
				<div class="sp-thumbnail-description">Totam rem aperiam, eaque ipsa quae ab illo</div>
			</div>
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