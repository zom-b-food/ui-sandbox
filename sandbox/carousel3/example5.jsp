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
		$( '#example5' ).sliderPro({
			width: 670,
			height: 500,
			orientation: 'vertical',
			loop: false,
			arrows: true,
			buttons: false,
			thumbnailsPosition: 'right',
			thumbnailPointer: true,
			thumbnailWidth: 290,
			breakpoints: {
				800: {
					thumbnailsPosition: 'bottom',
					thumbnailWidth: 270,
					thumbnailHeight: 100
				},
				500: {
					thumbnailsPosition: 'bottom',
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
	<div id="example5" class="slider-pro">
		<div class="sp-slides">
			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image1_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image1_large.jpg"/>

				<div class="sp-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
			</div>

	        <div class="sp-slide">
	        	<img class="sp-image" src="css/images/blank.gif"
	        		data-src="http://bqworks.com/slider-pro/images/image2_medium.jpg"
	        		data-retina="http://bqworks.com/slider-pro/images/image2_large.jpg"/>

				<div class="sp-caption">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image3_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image3_large.jpg"/>

				<div class="sp-caption">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image4_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image4_large.jpg"/>

				<div class="sp-caption">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image5_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image5_large.jpg"/>

				<div class="sp-caption">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image6_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image6_large.jpg"/>

				<div class="sp-caption">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image7_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image7_large.jpg"/>

				<div class="sp-caption">Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image8_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image8_large.jpg"/>

				<div class="sp-caption">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image9_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image9_large.jpg"/>

				<div class="sp-caption">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
			</div>

			<div class="sp-slide">
				<img class="sp-image" src="css/images/blank.gif"
					data-src="http://bqworks.com/slider-pro/images/image10_medium.jpg"
					data-retina="http://bqworks.com/slider-pro/images/image10_large.jpg"/>

				<div class="sp-caption">Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</div>
			</div>
		</div>

		<div class="sp-thumbnails">
			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image1_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Lorem ipsum</div>
					<div class="sp-thumbnail-description">Dolor sit amet, consectetur adipiscing</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image2_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Do eiusmod</div>
					<div class="sp-thumbnail-description">Tempor incididunt ut labore et dolore magna</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image3_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Ut enim</div>
					<div class="sp-thumbnail-description">Ad minim veniam, quis nostrud exercitation</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image4_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Ullamco oris</div>
					<div class="sp-thumbnail-description">Nisi ut aliquip ex ea commodo consequat</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image5_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Duis aute</div>
					<div class="sp-thumbnail-description">Irure dolor in reprehenderit</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image6_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Esse cillum</div>
					<div class="sp-thumbnail-description">Dolore eu fugiat nulla pariatur excepteur</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image7_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Sint occaecat</div>
					<div class="sp-thumbnail-description">Cupidatat non proident, sunt in culpa</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image8_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Deserunt</div>
					<div class="sp-thumbnail-description">Mollit anim id est laborum sed ut</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image9_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Unde omnis</div>
					<div class="sp-thumbnail-description">Iste natus error sit voluptatem</div>
				</div>
			</div>

			<div class="sp-thumbnail">
				<div class="sp-thumbnail-image-container">
					<img class="sp-thumbnail-image" src="http://bqworks.com/slider-pro/images/image10_thumbnail.jpg"/>
				</div>
				<div class="sp-thumbnail-text">
					<div class="sp-thumbnail-title">Laudantium</div>
					<div class="sp-thumbnail-description">Totam rem aperiam, eaque ipsa quae ab illo</div>
				</div>
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