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
		$(document).ready(function ($) {
			$('#example4').sliderPro({
				width: 960,
				height: 400,
				autoHeight: true,
				fade: true,
				updateHash: true
			});

			// instantiate fancybox when a link is clicked
			$('#example4 .sp-lightbox').on('click', function (event) {
				event.preventDefault();

				// check if the clicked link is also used in swiping the slider
				// by checking if the link has the 'sp-swiping' class attached.
				// if the slider is not being swiped, open the lightbox programmatically,
				// at the correct index
				if ($('#example4').hasClass('sp-swiping') === false) {
					$.fancybox.open(this);
				}
			});
		});
	</script>
</head>
<body>
	<div id="example4" class="slider-pro">
		<div class="sp-slides">
			<div class="sp-slide">
				<div class="sp-layer sp-static" data-horizontal="30" data-vertical="30">
					<a class="sp-video" href="//www.youtube.com/watch?v=oaDkph9yQBs">
						<img src="http://bqworks.com/slider-pro/images/nasa_video_poster.jpg" width="610" height="345"/>
					</a>
				</div>
				<div class="sp-layer sp-static" data-position="topRight" data-horizontal="30" data-vertical="30"
				     data-width="240">
					<h3>Lorem ipsum dolor sit amet</h3>

					<p>consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
						vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
						tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
						amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,
						vehicula eu diam.</p>
				</div>
			</div>
			<div class="sp-slide">
				<div class="sp-layer sp-static" data-horizontal="30" data-vertical="30" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image1_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image1_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Lorem ipsum</h3>

					<p>Dolor sit amet, consectetur adipiscing</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="260" data-vertical="30" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image2_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image2_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Do eiusmod</h3>

					<p>Tempor incididunt ut labore et dolore magna</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="490" data-vertical="30" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image3_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image3_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Ut enim</h3>

					<p>Ad minim veniam, quis nostrud exercitation</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="720" data-vertical="30" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image4_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image4_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Ullamco oris</h3>

					<p>Nisi ut aliquip ex ea commodo consequat</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="30" data-vertical="300" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image5_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image5_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Duis aute</h3>

					<p>Irure dolor in reprehenderit</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="260" data-vertical="300" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image6_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image6_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Esse cillum</h3>

					<p>Dolore eu fugiat nulla pariatur excepteur</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="490" data-vertical="300" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image7_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image7_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Sint occaecat</h3>

					<p>Cupidatat non proident, sunt in culpa</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="720" data-vertical="300" data-width="200">
					<div class="sp-image-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image8_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image8_thumbnail.jpg"/>
						</a>
					</div>
					<h3>Deserunt</h3>

					<p>Mollit anim id est laborum sed ut</p>
				</div>
			</div>
			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
				     data-src="http://bqworks.com/slider-pro/images/image3_medium.jpg"
				     data-retina="http://bqworks.com/slider-pro/images/image3_large.jpg"/>

				<div class="sp-layer sp-static sp-image-text" data-horizontal="30" data-vertical="30" data-width="350">
					<h3>Lorem ipsum dolor sit amet</h3>

					<p>consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
						vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
						tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
						amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,
						vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec
						vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet.
						Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu
						mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
				</div>
			</div>
			<div class="sp-slide">
				<div class="sp-layer sp-static" data-position="topLeft" data-horizontal="30" data-vertical="30"
				     data-width="430">
					<h3>Lorem ipsum dolor sit amet</h3>

					<p>consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
						vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
						tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
						amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,
						vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec
						vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet.
						Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu
						mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
				</div>
				<div class="sp-layer sp-static" data-horizontal="500" data-vertical="30" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image1_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image1_thumbnail.jpg"/>
						</a>
					</div>
				</div>
				<div class="sp-layer sp-static" data-horizontal="730" data-vertical="30" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image2_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image2_thumbnail.jpg"/>
						</a>
					</div>
				</div>
				<div class="sp-layer sp-static" data-horizontal="500" data-vertical="190" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image3_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image3_thumbnail.jpg"/>
						</a>
					</div>
				</div>
				<div class="sp-layer sp-static" data-horizontal="730" data-vertical="190" data-width="200">
					<div class="sp-thumbnail-container">
						<a class="sp-lightbox" href="http://bqworks.com/slider-pro/images/image4_large.jpg">
							<img src="http://bqworks.com/slider-pro/images/image4_thumbnail.jpg"/>
						</a>
					</div>
				</div>
			</div>
			<div class="sp-slide">
				<div class="sp-layer sp-static">
					<a class="sp-video" href="//www.youtube.com/watch?v=oaDkph9yQBs">
						<img src="http://bqworks.com/slider-pro/images/nasa_video_poster_big.jpg" width="960"
						     height="526"/>
					</a>
				</div>
			</div>
			<div class="sp-slide">
				<div class="sp-layer sp-static" data-horizontal="30" data-vertical="30" data-width="900">
					<h3>Lorem ipsum dolor sit amet</h3>

					<p>consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
						vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
						tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
						amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut,
						vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec
						vulputate justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet.
						Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque arcu
						mauris, malesuada quis ornare accumsan, blandit sed diam.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="links">Go to slide: <a href="#example4/0">1</a>, <a href="#example4/1">2</a>, <a
			href="#example4/2">3</a>, <a href="#example4/3">4</a>, <a href="#example4/4">5</a>, <a
			href="#example4/5">6</a></div>
</body>
</html>