<!doctype html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>

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
			width: 710px;
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
			line-height: 25px;
			padding-left: 0;
			width: 722px;
		}

		#page h4 {
			font-size: 1.25em;
			margin-bottom: 0;
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

		pre {
			overflow: auto;
			width: 715px;
			margin-bottom: 21px;
			padding: 9px;
			background: #f9f9f9;
			border: 1px solid #ccc;
			font: 1.1em Monaco, monospace, Candara, "Courier";
			line-height: 21px;
		}

		code {
			font: 1.1em Monaco, monospace, Candara, "Courier";
			padding: 0 3px;
			background: #eee;
		}

		pre code {
			background: transparent;
		}

	</style>
</head>
<body>
<div id="container-page">
	<img src="../../resources/images/banner2Fade.jpg"/>

	<div class="popDiv">
		<h1>Understanding Callback Functions in Javascript</h1>

		<div style="float:right; margin-top:14px; padding-right:22px;">
			<a href="javascript:window.close()">Close Window</a>
		</div>
		<div id="page">
			<div class="post">
				<div class="tut_top">
					<!-- Post Image -->
					<div class="post_image"><a href="#">
						<img class="alignleft" src="CSSbestPractices_files/best_css_practices.jpg" alt="" height="160" width="200"/></a></div>
					<div class="preview">
						<!-- Post Title -->
						<h1 class="post_title">Understanding Callback Functions<br/> in Javascript</h1>
						<!-- Post Meta -->
						<div class="post_meta">by Mike Vollmer
							<h4>The article in its entirety can be found here:<br/><a href="http://recurial.com/author/mike/">Understanding Callback Functions in Javascript<br/>- by Mike Vollmer</a></h4>
						</div>
					</div>
				</div>

				<br class="clear"/>


				<p>Callback functions are extremely important in Javascript. They&#8217;re pretty much everywhere. Originally coming from a more traditional C/Java background I had trouble with this (and the whole idea of asynchronous programming), but I&#8217;m starting to get the hang of it. Strangely, I haven&#8217;t found any good introductions to callback functions online &#8212; I mainly found bits of documentation on the call() and apply() functions, or brief code snippits demonstrating their use &#8212; so, after learning the hard way I decided to try to write a simple introduction to callbacks myself.<span id="more-244"></span></p>
				<h4>Functions are objects</h4>

				<p>To understand callback functions you first have to understand regular functions. This might seen like a &#8220;duh&#8221; thing to say, but functions in Javascript are a bit odd.</p>

				<p>Functions in Javascript are actually objects. Specifically, they&#8217;re <code>Function</code> objects created with the <code>Function</code> constructor. A <code>Function</code> object contains a string which contains the Javascript code of the function. If you&#8217;re coming from a language like C or Java that might seem strange (how can code be a string?!) but it&#8217;s actually run-of-the-mill for Javascript. The distinction between code and data is sometimes blurred.</p>
<pre>
// you can create a function by passing the
// Function constructor a string of code
var func_multiply = new Function(&quot;arg1&quot;, &quot;arg2&quot;, &quot;return arg1 * arg2;&quot;);
func_multiply(5,10); // =&gt; 50
</pre>
				<p>One benefit of this function-as-object concept is that you can pass code to another function in the same way you would pass a regular variable or object (because the code is literally just an object).</p>
				<h4>Passing a function as a callback</h4>

				<p>Passing a function as an argument is easy.</p>
<pre>
// define our function with the callback argument
function some_function(arg1, arg2, callback) {
	// this generates a random number between
	// arg1 and arg2
	var my_number = Math.ceil(Math.random() *
		(arg1 - arg2) + arg2);
	// then we're done, so we'll call the callback and
	// pass our result
	callback(my_number);
}
// call the function
some_function(5, 15, function(num) {
	// this anonymous function will run when the
	// callback is called
	console.log(&quot;callback called! &quot; + num);
});
</pre>
				<p>It might seem silly to go through all that trouble when the value could just be returned normally, but there are situations where that&#8217;s impractical and callbacks are necessary.</p>
				<h4>Don&#8217;t block the way</h4>

				<p>Traditionally functions work by taking input in the form of arguments and returning a value using a return statement (ideally a single return statement at the end of the function: one entry point and one exit point). This makes sense. Functions are essentially mappings between input and output.</p>

				<p>Javascript gives us an option to do things a bit differently. Rather than wait around for a function to finish by returning a value, we can use callbacks to do it asynchronously. This is useful for things that take a while to finish, like making an AJAX request, because we aren&#8217;t holding up the browser. We can keep on doing other things while waiting for the callback to be called. In fact, very often we are required (or, rather, strongly encouraged) to do things asynchronously in Javascript.</p>

				<p>Here&#8217;s a more comprehensive example that uses AJAX to load an XML file, and uses the call() function to call a callback function in the context of the requested object (meaning that when we call the <code>this</code> keyword inside the callback function it will refer to the requested object):</p>
<pre>
function some_function2(url, callback) {
	var httpRequest; // create our XMLHttpRequest object
	if (window.XMLHttpRequest) {
		httpRequest = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		// Internet Explorer is stupid
		httpRequest = new
			ActiveXObject(&quot;Microsoft.XMLHTTP&quot;);
 	}

	httpRequest.onreadystatechange = function() {
		// inline function to check the status
		// of our request
		// this is called on every state change
		if (httpRequest.readyState === 4 &amp;&amp;
				httpRequest.status === 200) {
			callback.call(httpRequest.responseXML);
			// call the callback function
		}
	};
	httpRequest.open('GET', url);
	httpRequest.send();
}
// call the function
some_function2(&quot;text.xml&quot;, function() {
	console.log(this);
});
console.log(&quot;this will run before the above callback&quot;);
</pre>
				<p>In this example we create the <code>httpRequest</code> object and load an XML file. The typical paradigm of returning a value at the bottom of the function no longer works here. Our request is handled asynchronously, meaning that we start the request and tell it to call our function when it finishes.</p>

				<p>We&#8217;re using two anonymous functions here. It&#8217;s important to remember that we could just as easily be using named functions, but for sake of brevity they&#8217;re just written inline. The first anonymous function is run every time there&#8217;s a state change in our <code>httpRequest</code> object. We ignore it until the state is 4 (meaning it&#8217;s done) and the status is 200 (meaning it was successful). In the real world you&#8217;d want to check if the request failed, but we&#8217;re assuming the file exists and can be loaded by the browser. This anonymous function is assigned to <code>httpRequest.onreadystatechange</code>, so it is not run right away but rather called every time there&#8217;s a state change in our request.</p>

				<p>When we finally finish our AJAX request, we not only run the callback function but we use the <code>call()</code> function. This is a different way of calling a callback function. The method we used before of just running the function would work fine here, but I thought it would be worth demonstrating the use of the <code>call()</code> function. Alternatively you could use the <code>apply()</code> function (the difference between the two is beyond the scope of this tutorial, but it involves how you pass arguments to the function).</p>

				<p>The neat thing about using <code>call()</code> is that we set the context in which the function is executed. This means that when we use the <code>this</code> keyword inside our callback function it refers to whatever we passed as the first argument for <code>call()</code>. In this case, when we refer to this inside our anonymous callback function we are referring to the <code>responseXML</code> from the AJAX request.</p>

				<p>Finally, the second console.log statement will run before the first, because the callback isn&#8217;t executed until the request is over, and until that happens the rest of the code goes right on ahead and keeps running.</p>
				<h4>Wrapping it up</h4>

				<p>Hopefully now you should understand callbacks well enough to use them in your own code. I still find it hard to structure code that is based around callbacks (it ends up looking like spaghetti&#8230; my mind is too accustomed to regular structured programming), but they&#8217;re a very powerful tool and one of the most interesting parts of the Javascript language.</p>

				<p>&nbsp;</p>
			</div>
		</div>
	</div>
</div>

</body>
</html>
