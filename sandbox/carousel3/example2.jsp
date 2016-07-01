<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">

<title>Slider Pro</title>

<link rel="stylesheet" type="text/css" href="css/slider-pro.min.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox.css" media="screen"/>
<link rel="stylesheet" type="text/css" href="css/examples.css" media="screen"/>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>

<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery.sliderPro.min.js"></script>
<script type="text/javascript" src="fancybox/jquery.fancybox.pack.js"></script>

<script type="text/javascript">
	$( document ).ready(function( $ ) {
		$( '#example2' ).sliderPro({
			width: '50%',
			height: 500,
			aspectRatio: 1.5,
			visibleSize: '100%',
			forceSize: 'fullWidth'
		});

		// instantiate fancybox when a link is clicked
		$( '#example2 .sp-image' ).parent( 'a' ).on( 'click', function( event ) {
			event.preventDefault();

			// check if the clicked link is also used in swiping the slider
			// by checking if the link has the 'sp-swiping' class attached.
			// if the slider is not being swiped, open the lightbox programmatically,
			// at the correct index
			if ( $( '#example2' ).hasClass( 'sp-swiping' ) === false ) {
				$.fancybox.open( $( '#example2 .sp-image' ).parent( 'a' ), { index: $( this ).parents( '.sp-slide' ).index() } );
			}
		});
	});
</script>

</head>

<body>

	<div id="example2" class="slider-pro">
		<div class="sp-slides">
			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image1_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image1_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image1_large.jpg"/>
				</a>
				<p class="sp-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
			</div>

	        <div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image2_large.jpg">
	        		<img class="sp-image" src="css/images/blank.gif"
	        			data-src="http://bqworks.com/slider-pro/images/image2_medium.jpg" 
	        			data-retina="http://bqworks.com/slider-pro/images/image2_large.jpg"/>
	        	</a>
	        	<p class="sp-caption">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image3_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image3_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image3_large.jpg"/>
				</a>
				<p class="sp-caption">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image4_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image4_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image4_large.jpg"/>
				</a>
				<p class="sp-caption">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image5_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image5_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image5_large.jpg"/>
				</a>
				<p class="sp-caption">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image6_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image6_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image6_large.jpg"/>
				</a>
				<p class="sp-caption">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image7_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image7_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image7_large.jpg"/>
				</a>
				<p class="sp-caption">Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image8_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image8_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image8_large.jpg"/>
				</a>
				<p class="sp-caption">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image9_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image9_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image9_large.jpg"/>
				</a>
				<p class="sp-caption">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
			</div>

			<div class="sp-slide">
				<a href="http://bqworks.com/slider-pro/images/image10_large.jpg">
					<img class="sp-image" src="css/images/blank.gif"
						data-src="http://bqworks.com/slider-pro/images/image10_medium.jpg" 
						data-retina="http://bqworks.com/slider-pro/images/image10_large.jpg"/>
				</a>
				<p class="sp-caption">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
			</div>
		</div>
    </div>

</body>
</html>