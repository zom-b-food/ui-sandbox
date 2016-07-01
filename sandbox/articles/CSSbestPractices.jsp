<!doctype html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<%--<link rel="stylesheet" href="../../resources/css/pages/pops.css">    --%>
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

		.clear {
			clear: both;
		}

		#page {
			background-color: #FFFFFF;
			max-width: 710px;
		}

		#page .post {
			padding: 20px 30px 0 0;
		}

		#page .post .post_meta {
			background: none repeat scroll 0 0 #F3F3F3;
			color: #616161;
			float: left;
			font-size: 14px;
			font-style: italic;
			padding: 1px 4px;
		}

		.tut_top {
			margin-top: 10px;
			overflow: hidden;
		}

		#page .post .post_image {
			float: left;
			margin-right: 20px;
			position: relative;
		}

		#page .preview {
			overflow: hidden;
		}

		#page .preview h1 {
			font-size: 22px;
			line-height: 32px;
			padding-left: 0;
			width: 722px;
		}

		#page h4 {
			color: #616161;
			font-size: 1.25em;
			margin-bottom: 4px;
			padding-bottom: 0;
			padding-top: 0;
			text-shadow: 0 1px 0 #FFFFFF;
		}

		p {
			padding-bottom: 8px;
		}

		strong {
			font-size: 1em;
			font-weight: bold;
		}

			/* Headings */
		#page h2 {
			color: #074804;
			font-size: 23px;
			padding-bottom: 20px;
			text-shadow: 0 1px 0 #fff;
		}

		#page h2 span {
			font-size: 14px;
			color: #5f5f5f;
			font-weight: bold;
		}

		#page hr {
			width: 100%;
			height: 1px;
			background: #dfdfdf;
			margin: 20px 0;
			display: block;
			border: none;
			clear: both;
		}

		blockquote {
			border-top: 1px dashed #dfdfdf;
			border-bottom: 1px dashed #dfdfdf;
			display: block;
			width: 100%;
			margin: 30px 0;
			margin-top: 10px;
			clear: both;
			color: #414141;
			font-family: "Myriad Pro", Verdana, sans-serif;
			font-size: 1.25em;
			line-height: 23px;
			font-style: italic;
		}
	</style>
</head>
<body>
<div id="container-page">
<img src="../../resources/images/banner2Fade.jpg"/>

<div class="popDiv">
<h1>10 CSS Best Practices to Improve Your Code</h1>

<div style="float:right; margin-top:14px; padding-right:22px;">
	<a href="javascript:window.close()">Close Window</a>
</div>
<div id="page">

	<div class="post">
		<div class="tut_top">
			<!-- Post Image -->
			<div class="post_image"><a href="http://www.webdesignerdepot.com/2009/05/10-best-css-practices-to-improve-your-code/">
				<img class="alignleft" src="CSSbestPractices_files/best_css_practices.jpg" alt="" height="160" width="200"/></a></div>
			<div class="preview">
				<!-- Post Title -->
				<h1 class="post_title"> 10 CSS Best Practices</h1>
				<!-- Post Meta -->
				<div class="post_meta">by Jeff Couturier
					<h4>The article in its entirety can be found here:<br/><a href="http://www.webdesignerdepot.com/2009/05/10-best-css-practices-to-improve-your-code/">10 CSS Best Practices to Improve Your Code<br/>- by Jeff Couturier</a></h4>
				</div>
			</div>
		</div>

		<br class="clear"/>

		<p>It's really easy to find yourself wondering how your CSS got to be such a mess. Sometimes it's the result of sloppy coding from the start, sometimes it's because of multiple hacks and changes over time. Whatever the cause, it doesn't have to be that way. Writing clean, super-manageable CSS is simple when you start off on the right foot and make your code easier to maintain and edit later on.</p>

		<p>Here are 10 tips for speeding up the process, writing CSS that is slimmer, faster and less likely to give you a headache.</p>
		<hr/>
		<h2><span>1)</span> Stay Organized</h2>

		<p>Just like anything else, it pays to keep yourself organized. Rather
		   than haphazardly dropping in id's and classes in the order in which they
		   come to mind, use a coherent structure.</p>

		<p>It will help you keep the cascading part of CSS in mind and sets your style sheet up to take advantage of style inheritance.</p>

		<p><strong>Declare your most generic items first, then the not-so-generic and so on.</strong>
			This lets your CSS properly inherit attributes and makes it much easier
			for you to override a specific style when you need to. You'll be faster
			at editing your CSS later because it will follow an easy to read,
			logical structure.</p>

		<p>Use a structure that works best for you while keeping future edits and other developers in mind.</p>
		<ul class="fancybulletBig">
			<li class="bold">Resets and overrides</li>
			<li class="bold">Links and type</li>
			<li class="bold">Main layout</li>
			<li class="bold">Secondary layout structures</li>
			<li class="bold">Form elements</li>
			<li class="bold">Miscellaneous</li>
		</ul>

		<p><img src="CSSbestPractices_files/best-css-02.jpg" alt="Screenshot"/></p>

		<hr/>

		<h2><span>2)</span> Title, Date and Sign</h2>

		<p>Let others know who wrote your CSS, when it was written and who to
		   contact if they have questions about it. This is especially useful when
		   designing templates or themes.</p>

		<p><img src="CSSbestPractices_files/best-css-03.jpg" alt="Screenshot"/></p>

		<p>Wait a minute? what's that bit about <strong>swatch colors</strong>?
		   Over the years, I've found that adding a simple list of common colors
		   used in my style sheets is extremely helpful during initial development
		   and when making edits later on.</p>

		<p>This saves you from having to open up Photoshop to sample a color from the design, or look up colors in the site's <a href="http://en.wikipedia.org/wiki/Style_guide">style guide</a> (if it has one). When you need the HTML code for that specific blue, just scroll up and copy it.</p>

		<hr/>

		<h2><span>3)</span> Keep a Template Library</h2>

		<p>Once you've settled on a structure to use, strip out everything that
		   isn't generic and save the file as a CSS template for later use.</p>

		<p>You can save multiple versions for multiple uses: a two-column layout, a blog layout, print, mobile and so on. <a href="http://www.panic.com/coda/">Coda</a> (the editor for OSX) has an awesome <strong>Clips</strong>
		   feature that lets you do this easily. Many other editors have a similar
		   feature, but even a simple batch of text files will work nicely.</p>

		<p>It's insane to re-write each and every one of your style sheets from
		   scratch, especially when you're using the same conventions and
		   methodologies in each.</p>

		<p><a href="http://www.flickr.com/photos/misterdna/49841409/"><img src="CSSbestPractices_files/best-css-04.jpg" alt="Screenshot"/></a></p>

		<hr/>

		<h2><span>4)</span> Use Useful Naming Conventions</h2>

		<p>You'll notice above where I declared a couple of column id's and I
		   called them col-alpha and col-beta. Why not just call them col-left and
		   col-right? Think of future edits, always.</p>

		<p>Next year you may need to redesign your site and move that left
		   column to the right. You shouldn't have to rename the element in your
		   HTML and rename the id in your style sheet just to change its position.</p>

		<p>Sure, you could just reposition that left column to the right and
		   keep the id as #col-left, but how confusing is that? If the id says
		   left, one should expect that it will always be on the left. This doesn't
		   leave you much room to move things around later on.</p>

		<p>One of the major advantages of CSS is the ability to separate styles
		   from content. You can totally redesign your site by just modifying the
		   CSS without ever touching the HTML. So <strong>don't muck up your CSS by using limiting names</strong>. Use more versatile naming conventions and stay consistent.</p>

		<p>Leave position or style specific words out of your styles and id's. A
		   class of .link-blue will either make more work for you, or make your
		   style sheet really messy when your client later asks you to change those
		   blue links to orange.</p>

		<p><strong>Name your elements based on what they are, not what they look like.</strong> For example, .comment-blue is much less versatile than .comment-beta, and .post-largefont is more limiting than .post-title.</p>

		<hr/>

		<h2><span>5)</span> Hyphens Instead of Underscores</h2>

		<p>Older browsers like to get glitchy with underscores in CSS, or don't
		   support them at all. For better backward compatibility, get into the
		   habit of using hyphens instead. Use #col-alpha rather than #col_alpha.</p>

		<hr/>

		<h2><span>6)</span> Don't Repeat Yourself</h2>

		<p>Re-use attributes whenever possible by grouping elements instead of
		   declaring the styles again. If your h1 and h2 elements both use the same
		   font size, color and margins, group them using a comma.</p>

		<h4>This:</h4>

		<p><img src="CSSbestPractices_files/best-css-05.jpg" alt="Screenshot"/></p>

		<p>You should also make use of shortcuts whenever possible. Always be on
		   the lookout for opportunities to group elements and use declaration
		   shortcuts.</p>

		<h4>You can accomplish all of this:</h4>

		<p><img src="CSSbestPractices_files/best-css-06.jpg" alt="Screenshot"/></p>

		<h4>with only this:</h4>

		<p><img src="CSSbestPractices_files/best-css-07.jpg" alt="Screenshot"/></p>

		<p>It's very important that you understand the order in which CSS
		   interprets these shortcuts: top, right, bottom, left. A big clockwise
		   circle, starting at noon.</p>

		<h4>Also, if your top and bottom, or left and right attributes are the same, you only need to use two:</h4>

		<p><img src="CSSbestPractices_files/best-css-08.jpg" alt="Screenshot"/></p>

		<p>This sets the top and bottom margins to 1em, and the left and right margins to 0.</p>
		<hr/>

		<h2><span>7)</span> Optimize for Lightweight Style Sheets</h2>

		<p>Using the above tips, you can really cut down the size of your style
		   sheets. Smaller loads faster, and smaller is easier to maintain and
		   update.</p>

		<p>Cut out what you don't need and consolidate wherever possible by
		   grouping. Use caution when using canned CSS frameworks as well. You're
		   likely to inherit lots of bulk that won't be used.</p>

		<p>Another quick tip for slim CSS: you don't need to specify a unit of
		   measure when using zero. If a margin is set to 0, you don't need to say
		   0px or 0em. Zero is zero regardless of the unit of measure, and CSS
		   understands this.</p>

		<hr/>

		<h2><span>8)</span> Write Your Base for Gecko, Then Tweak for Webkit and IE</h2>

		<p>Save yourself troubleshooting headaches and write CSS first for Gecko
		   browsers (Firefox, Mozilla, Netscape, Flock, Camino). If your CSS works
		   properly with Gecko, it's much more likely to be problem free in Webkit
		   (Safari, Chrome) and Internet Explorer.</p>

		<hr/>

		<h2><span>9)</span> Validate</h2>

		<p>Make use of <a href="http://jigsaw.w3.org/css-validator/">W3C's free CSS validator</a>.
		   If you're stuck and your layout isn't doing what you want it to do, the
		   CSS validator will be a big help in pointing out errors.</p>

		<hr/>

		<h2><span>10)</span> Keep a tidy house</h2>

		<p>Separate browser-specific CSS to its own individual style sheet, and include as needed with Javascript, server-side code or <a href="http://en.wikipedia.org/wiki/Conditional_comments">conditional comments</a>. Use this method to avoid dirty CSS hacks in your main style sheets. This will keep your base CSS clean and manageable.</p>


		<p><em>Written for WDD by Jeff Couturier</em><br/></p>

		<p><em><strong>Do you follow these methods when coding your websites? What other techniques do you use to create better code?</strong></em></p>

		<p>&nbsp;</p>
	</div>
</div>
</div>
</div>
</body>
</html>
