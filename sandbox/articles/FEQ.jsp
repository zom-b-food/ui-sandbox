<!doctype html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>

	<SCRIPT TYPE="text/javascript">
		<!--
		function targetopener(mylink, article, closeonly) {
			if (!(window.focus && window.opener))return true;
			window.opener.focus();
			if (!closeonly)window.opener.location.href = mylink.href;
			if (article)window.close();
			return false;
		}
		//-->
	</SCRIPT>
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

		div.content {
			width: 746px;
		}

		p.js {
			font-weight: normal;
			line-height: 17px;
			margin-bottom: 4px;
			width: 700px;
			padding: 2px 0 4px 0;
			font-size: 1.35em;
		}

		span.strong {
			font-size: 1em;
		}

		pre {
			font-family: "Courier", Candara, monospace;
			font-size: 1.2em;
			line-height: 15px;
		}

		span.code {
			font-family: "Courier", Candara, monospace;
			font-size: 1em;
			line-height: 15px;
		}

		.content h2 {
			border-bottom: none;
			padding: 3px 0 6px;
		}

		.content h3 {
			border-top: 1px solid #CCCCCC;
			border-bottom: none;
			padding: 3px 0 6px;
		}

		h3+ul {
			margin-top: 12px;
		}

		ul {
			line-height: 20px;
			list-style-type: disc;
			list-style-position: outside;
			margin-left: 10px;
			padding-left: 10px;
			text-align: left;
		}

		li {
			font-size: 1.4em;
			font-weight: bold;
		}

		p.js:last-of-type {
			margin-bottom: 16px;
		}

		h4 {
			font-size: 1.7em;
		}

		span.right {
			float: right;
			padding-right: 10px;
		}

	</style>
</head>
<body>
<div id="container-page">
<img src="../../resources/images/banner2Fade.jpg"/>

<div class="popDiv">
<h1>Front-end Interview Questions</h1>

<div style="float:right; margin-top:14px; padding-right:22px;"><a href="javascript:window.close()">Close Window</a></div>


<p>Some of these questions are downright rediculous that I doubt "Web Jesus" himself could answer, mostly because they are not task-specific or part of a front-end dev's day-to-day duties. But if you're in the middle of an obscure javascript/jquery trivia war and don't have any real work to do, here are some whoppers to ask the other devs. Other questions, however, touch on issues any seasoned front-end web dev has to deal with every day. They are here to help you assess your own skills and to help you become a better developer (or quizmaster purely for entertainment purposes only). :)</p>
<br/>

<p>Swiped from <a href="https://github.com/johnpolacek/Front-end-Developer-Interview-Questions/blob/master/README.md" target="_blank"> John Polacek on github.com</a><span class="right">August 23, 2012</span></p>


<hr/>
<h4><a name="contributors" class="anchor" href="#contributors"><span class="mini-icon mini-icon-link"></span></a>Contributors</h4>

<p>adam@ui-design-engineering.com (<a href="http://www.ui-design-engineering.com/" onClick="return targetopener(this)">http://www.ui-design-engineering.com/</a>), @bentruyman (<a href="http://bentruyman.com/">http://bentruyman.com/</a>), @roger_raymond (<a href="http://twitter.com/iansym">http://twitter.com/iansym</a>), @ajpiano (<a href="http://ajpiano.com/">http://ajpiano.com/</a>), @paul_irish (<a href="http://paulirish.com/">http://paulirish.com/</a>), @SlexAxton (<a href="http://alexsexton.com/">http://alexsexton.com/</a>), @boazsender (<a href="http://boazsender.com/">http://boazsender.com/</a>), @miketaylr (<a href="http://miketaylr.com/">http://miketaylr.com/</a>), @vladikoff (<a href="http://vladfilippov.com/">http://vladfilippov.com/</a>), @gf3 (<a href="http://gf3.ca/">http://gf3.ca/</a>), @jon_neal (<a href="http://twitter.com/jon_neal">http://twitter.com/jon_neal</a>), @wookiehangover (<a href="http://wookiehangover.com/">http://wookiehangover.com/</a>) and @darcy_clarke (<a href="http://darcyclarke.me">http://darcyclarke.me</a>)
</p>
<hr/>
<h4>General Questions:</h4>
<ul>
	<li>What blogs do you follow?</li>
	<p class="js">(Stack overflow, sitepoint, net.tutsplus.com, a list apart)</p>
	<li>Can you describe the difference between progressive enhancement and graceful degradation?</li>
	<p class="js">(Progressive enhancement is starting from a baseline and then building enhancements for new browser tech on top.
	              Graceful degradation is starting with designing the most optimal browser experience, then designing fallbacks for older browsers.)</p>
	<li>Explain a continuous integration environment?</li>
	<li>What tools do you use to test your code's performance?</li>
	<p class="js">(JSLitmus.js, YSlow, and Selenium IDE)</p>
	<li>Name 3 ways to decrease page load.</li>
	<p class="js">(Limit number of http requests, proper use of .gif vs .jpg, use sprites, put js at the bottom, minimize js, avoid redirects, reduce number of DOM elements, reduce number of cookies.)</p>
	<li>Why is it better to serve site assets from multiple domains?</li>
	<p class="js">(Browsers limit two 2 simultaneous downloads per domain. Use one domain or sub-domain for assets for better performance. Place assets on a cookie-free domain.)</p>
	<li>How many resources will a browser download from a given domain at a time?</li>
	<p class="js">(HTTP/1.1 specification says 2 simultaneous downloads)</p>
</ul>
<hr/>
<h4>HTML-Specific Questions:</h4>
<ul>
	<li>What&#8217;s a <span class="code">doctype</span> do, and how many can you name?</li>
	<li>What&#8217;s the difference between standards mode and quirks mode?</li>
	<li>What's the advantage of XHTML pages?</li>
	<p class="js">(You can use additional namespaces to create whatever element types you want.)</p>
	<li>How do you use XML in HTML5?</li>
	<p class="js">(XHTML5 must be served up using the application/xhtml+xml or application/xml MIME type. And you must use this header: Content-Type: "text/html; charset=UTF-8")
		<span class="code"> &lsaquo;!DOCTYPE html&rsaquo; and &lsaquo;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"&rsaquo; </span></p>
	<li>What are <span class="code">data-</span> attributes good for?</li>
	<p class="js">(Storing data in the DOM and adding more attributes to an element.)</p>
	<li>What is semantic html and what are the semantic elements of HTML5?</li>
	<p class="js">(It means the opposite of using divs for everything. Elements are section, nav, article, aside, hgroup, header, footer, time, mark.)</p>
	<li>Describe the difference between cookies, sessionStorage and localStorage.</li>
	<p class="js">(Cookies store user data in name/value pairs per domain. Session and local storage are HTML5 constructs. Session = temporary data. Local = persistant data.)</p>
	<li>Explain the Canvas Element in HTML5?</li>
	<p class="js">(It is a resolution-dependent bitmap canvas that can be used for rendering graphs and images on the fly using javascript.)</p>
	<li>What are some new Input types in HTML5?</li>
	<p class="js">(tel, search, url, email, datetime, number, range, placeholder, etc...)</p>
	<li>What are the new Media Elements in HTML5?</li>
	<p class="js">(audio, video, source, embed, track.)</p>
	<li>Name some of the HTML5 global attributes?</li>
	<p class="js">(contenteditable, contextmenu, data, draggable, hidden, itemprop, spellcheck, etc... )</p>
	<li>What's the difference between HTML5 application cache and regular browser cache?</li>
	<p class="js">(Application cache can prefetch pages not yet loaded; browser cache only caches pages that have once been loaded.)</p>
</ul>
<hr/>
<h4>JS-Specific Questions</h4>
<ul>
	<li>What are <span class="code">undefined</span> and <span class="code">undeclared</span> variables?</li>
	<p class="js">
	<pre>
	var x = {}; // empty object
	var u; // declared, but undefined
	var n = null; // declared, defined to be null </pre>
	</p>
	<li>What is a closure, and how/why would you use one?</li>
	<p class="js">(A 'wall' keeping private functions private. Used in the Module Pattern. Closures are references to variables or functions inside a function after it has executed. They are used to hide variables or functions from external code.)
	<pre>
function setupSomeGlobals() {
    var num = 123;  // Local variable that ends up within closure
    // Store some references to functions as global variables
    gAlertNumber = function() { alert(num); } // closure
    gIncreaseNumber = function() { num++; } // closure
    gSetNumber = function(x) { num = x; }  // closure
}
	</pre>

	</p>
	<li>What&#8217;s a hash table?</li>
	<p class="js">(A hashtable is an associative array of key/value pairs. Javascript Objects are hashtables.)</p>
	<li>What&#8217;s a typical use case for anonymous functions?</li>
	<p class="js">(A function that's only called inline, or once, and not extended or referenced in another function or method. No need polluting the namespace.)</p>
	<li>Explain the &#8220;Javascript module pattern&#8221; and when you&#8217;d use it.</li>
	<p class="js">(The Module Pattern is the use of closures to create, in essence, private functions that are only accessible by other functions created within that closure (inside an object). You cannot manipulate 'private' functions outside that closure.)</p>
	<li>What is javascript classical inheritance?</li>
	<p class="js">(A main class extended by a sub-class using 'this._super' method.) </p>
	<li>What&#8217;s the difference between host objects and native objects?</li>
	<p class="js">(Native object: Date, Math, parseInt, eval... Host object: document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName...)</p>
	<li>What's the difference between a function expression and a function declaration?</li>
	<p class="js">
	<pre>
	Function Expression -
	      alert(foo());
	      var foo = function()
	Function Declaration -
	      alert(foo());
	      function foo()  </pre>
	</p>
	<li>What&#8217;s the difference between <span class="code">.call()</span> and <span class="code">.apply()</span>?</li>
	<p class="js">(The apply() method is identical to call(), except apply() requires an array as the second parameter.)
	<pre>
	function theFunction(name, profession) {
	   alert("...blah");
	}
	   theFunction("John", "fireman");
	   theFunction.apply(undefined, ["Susan", "teacher"]);
	   theFunction.call(undefined, "Obama", "psident"); </pre>
	</p>
	<li>Explain <span class="code">Function.prototype.bind</span> .</li>
	<p class="js">(A function called with a particular <em>this</em> value.)
	<pre>
	function ClassAct() {
	  // say hello on click
	  // without .bind( this ), 'this' in sayHello() will not be ClassAct instance
	  document.addEventListener( 'mousedown', this.sayHello.bind( this ), false );
	} </pre>
	</p>
	<li>What is FOUC? How do you avoid FOUC?</li>
	<p class="js">(Sometimes occurs when applying styles with Javascript on page load.)
	<pre>
	&lsaquo;style type="text/css"&rsaquo;
	        #flash { display:none }
		&lsaquo;/style&rsaquo;
		&lsaquo;noscript&rsaquo;
		&lsaquo;style type="text/css"&rsaquo;
	        #flash { display: block }
		&lsaquo;/style&rsaquo;
		&lsaquo;/noscript&rsaquo; </pre>
	</p>
	<li>Describe event bubbling.</li>
	<p class="js">(Mechanism that propagates events from the target/nested tag or element upward through the DOM, e.g. using <em>this._</em>. Conversely, event capture travels down the DOM as when handlers trigger on parent elements, e.g. using addEventListener .) To turn bubbling off, use:
	<pre>
	function doSomething(e)	{
	  if (!e) var e = window.event;
	  e.cancelBubble = true;
	  if (e.stopPropagation) e.stopPropagation();
	}
	</pre>
	</p>
	<li>What&#8217;s the difference between an &#8220;attribute&#8221; and a &#8220;property&#8221;?</li>
	<p class="js">(An attribute carries information about an element in the form of a key value pair. A property is the key portion of that attribute.)</p>
	<li>What is the prototype chain?</li>
	<p class="js">(An object has an internal link to another object (or null) called its prototype. This object has a prototype as well and so on, until one object has null as its prototype. This chain of objects being prototypes of one another is called the prototype chain.)
	<pre>
	var Employee = function (name, company, title) {
            this.name = name;  //Employee.prototype.name
            this.company = company;  //Employee.prototype.company
            this.title = title;  //Employee.prototype.title
	};
	</pre>
	</p>
	<li>Why is extending built in Javascript objects not a good idea?</li>
	<p class="js">(Namespace pollution, too risky for collisions between properties inherited through prototype chain, no IE support, no X-browser support.)</p>
	<li>Explain &#8220;hoisting&#8221;.</li>
	<p class="js">(It's when a variable is automatically hoisted to the top of the function scope. Local variables supersede global variables of the same name.)</p>
	<li>What is the difference between <span class="code">==</span> and <span class="code">===</span>?</li>
	<p class="js">(== compares values while === compares values that are the same type.)</p>
	<li>What is the difference between innerHTML and append() in Javascript?</li>
	<p class="js">(InnerHTML is not standard, and its a String. The DOM is not, and although innerHTML is faster and less verbose, its better to use the DOM methods like appendChild(), firstChild.nodeValue, etc to alter innerHTML content.)</p>
	<li>What does "1" + 2 + 4 evaluate to? What about 5 + 4 + "3"?</li>
	<p class="js">(Since 1 is a string, everything is a string, so the result is 124. In the second case, its 93.)</p>
	<li>How do you change the style/class on any element?</li>
	<p class="js">
	<pre> document.getElementById("myText").style.fontSize = "20";
 -or-
 document.getElementById("myText").className = "anyclass";</pre>
	</p>
	<li>Explain how you would get a query string parameter from the browser window&#8217;s URL.</li>
	<p class="js">(I would look up how to do it on stackoverflow.)</p>
	<li>Make this work: &nbsp;&nbsp;&nbsp;&nbsp; [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]</li>
	<p class="js">
	<pre>
	Array.prototype.duplicator = function(){
	    return this.concat(this);
	}
	alert([1,2,3,4,5].duplicator()); </pre>
	</p>
	<li>Why is it called a Ternary statement, what does the word &#8220;Ternary&#8221; indicate?</li>
	<p class="js">(The ternary operator is a substitute for an if statement where both the if and else clauses assign different values to the same field.)
	<pre>
	if (condition)
	   do = 'something';
	      else do = 'somethingelse';
	 BECOMES:
	      do = (condition) ? 'something' : 'somethingelse'; </pre>
	</p>
</ul>
<hr/>
<h4>JS-Code Examples:</h4>
<ul>
	<li>Question: What value is returned from the below statement?</li>
	<p class="js"><span class="code">"i'm a lasagna hog".split("".)reverse(.)join("");</span> <span class="strong">~~Answer: &#8220;goh angasal a m&#8217;i&#8221;</span></p>
	<li>Question: What is the value of window.foo?</li>
	<p class="js"><span class="code">( window.foo || ( window.foo = "bar" ) );</span> <span class="strong">~~Answer: &#8220;bar&#8221;</span></p>
	<li>Question: What is the outcome of the two alerts below?</li>
	<p class="js">
	<span class="code">
	var foo = "Hello";<br/>
	     (function() {<br/>
	     var bar = " World"; <br/>
	        alert(foo + bar);<br/>
	     })(); alert(foo + bar) </span> <span class="strong">~~Answer: "Hello World" &amp; ReferenceError: bar is not defined</span></p>

	<li>Question: What is the value of foo.length?</li>
	<p class="js">
		<span class="code">
		var foo = [];<br/>
		foo.push(1);<br/>
		foo.push(2); </span> <span class="strong">~~Answer: 2</span></p>
</ul>
<hr/>
<h4>jQuery-Specific Questions:</h4>
<ul>
	<li>Explain &#8220;chaining&#8221;.</li>
	<p class="js">(jQuery methods return an object that run sequential methods on the same jQuery object so it won't need to traverse the DOM for every property of every element individually.)
	<pre>
	OLD SCHOOL:
	          $("input").val("123");
	          $("input").addClass("awesome");
	          $("input").attr("data-bind", "15");
	CHAINING:
	          $("input")
	          .val("123")
	          .addClass("awesome")
	          .attr("data-bind", "15"); </pre>
	</p>
	<li>What does <span class="code">.end()</span> do?</li>
	<p class="js">(Breaks the jquery chain while filtering/iterating variables or element properties. For example, if you do a .find() and then .end(), it reverts the selector back to its state before the .find() was executed. It enables you to do less DOM lookups.) </p>
	<li>What's the difference between <span class="code">.bind()</span>, <span class="code">.live()</span>, and <span class="code">.delegate()</span>?</li>
	<p class="js">(bind() is what click() uses and has to "bubble" the DOM on every click. live() is only attaching the event handler once to the document instead of multiple times. delegate() is even better because you can attach the listener to a root element that will catch events that bubble up from the designated element delegates.)</p>
	<li>What's the difference between<span class="code">.eq()</span> and <span class="code">.get()</span>?</li>
	<p class="js">(eq() returns a jQuery object and get() returns a DOM element.) </p>
	<li>Optimize this selector <span class="code">$(".foo div#bar:eq(0)")</span>:</li>
	<p class="js">$('#bar') </p>
	<li>What is <span class="code">$.fn</span>.</li>
	<p class="js">(It's an alias to the prototype property.) </p>
	<li>Write a simple slideshow script.</li>
	<p class="js">
	<pre>
	$(function() {
	      $('#slideshow'.)cycle({ fx: 'fade', pager: '#nav', slideExpr: 'img'});
	      $('#slideshow #nav a'.)click(function() { $('#slideshow'.)cycle('pause') });
	}); </pre>
	</p>
</ul>
<hr/>
<h4>CSS-Specific Questions:</h4>
<ul>
	<li>What are the various clearing techniques and which is appropriate for what context?</li>
	<p class="js">(The parent div doesn't span proper height and cuts off children divs.
	              overflow:auto; on the parent class.
	              :before - prevents top-margin collapse. :after - clears floats.)</p>

	<p class="js"><pre>
	.clearfix:after {
	     visibility: hidden;
	     display: block;
	     font-size: 0;
	     content: " ";
	     clear: both;
	     height: 0;
	}
	.clearfix { display: inline-block; }
	* html .clearfix { height:1%; }
	.clearfix { display: block; }</pre>
	</p>
	<li>What are the differences between the IE box model and the W3C box model?</li>
	<p class="js">(W3C box model excludes padding and border. IE includes it. Properties of the box model are margin, border, padding, width and height.)</p>
	<li>What are your favorite image replacement techniques and which do you use when?</li>
	<p class="js">(Sprites for UI behaviors. Content images in hidden divs or js arrays.)</p>
	<li>CSS property hacks, conditionally included .css files, or&#8230; something else?</li>
	<p class="js">(Use the min-height fast hack and the underscore hack for certain versions of IE. Use conditional commented code fragments for any version of IE as well. The snippet below is for all IE versions.)
	<pre> &lsaquo;!--[if IE]&rsaquo; put link to ie css here &lsaquo;![endif]--&rsaquo; </pre>
	</p>
	<li>How do you serve your pages for feature-constrained browsers?</li>
	<p class="js">(Graceful Degredation.) </p>
	<li>Describe a CSS framework.</li>
	<li>How would you implement a web design comp that uses non-standard fonts?</li>
	<p class="js">(Use embedded webfonts.) </p>
	<li>Explain how a browser determines what elements match a CSS selector.</li>
	<p class="js"><pre>
	<span class="strong">p</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:has a specificity of 1
	<span class="strong">div p</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:has a specificity of 2
	<span class="strong">.sith</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:has a specificity of 10
	<span class="strong">div p.sith</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:has a specificity of 12
	<span class="strong">#sith</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:has a specificity of 100
	<span class="strong">body #darkside .sith p</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:has a specificity of 112 </pre>
	</p>
</ul>
<hr/>
<h4>Ajax Questions:</h4>
<ul>
	<li>Explain AJAX in as much detail as possible.</li>
	<p class="js">(The XMLHttpRequest object is used to read or send data on the server asynchronously. Ajax can selectively modify a part of a page without the need to reload the whole document. For example, form fields may be processed and the result displayed immediately into the same page.)</p>
	<li>List out differences between AJAX and Javascript.</li>
	<p class="js">(<span class="strong">1.</span> Ajax is Asynchronous Javascript and XML. Here on sending request to the server, one needn�t wait for the response. Other operations on the page can be carried out. Hence, Asynchronous. On the other hand, Javascript sends an HTTPRequest to the server and waits for the XML response.
		<span class="strong">2.</span> E.g. populating State field. Using Javascript we need to use the �onchange� event where as using ajax, the request is just sent to populate the state list. Other operations can be carried out on the page.
		<span class="strong">3.</span> Ajax is a part of Javascript programming. Javascript is used to manage and control a web page once downloaded. Ajax does not need to wait for the whole page to download.
		<span class="strong">4.</span> Use of Ajax can reduce connections to the server since the script has to be requested once.)</p>
	<li>Explain how JSONP works (and how it&#8217;s not really AJAX).</li>
	<p class="js">(JSONP is script tag injection, passing the response from the server in to a user specified function. JSONP uses cross-domain requests; ajax doesn't. JSONP can only use POST method; no error handling.)</p>
	<li>Describe how to create AJAX objects.</li>
	<p class="js"><span class="code"> Var ajax= New ajaxObject('page path'). </span><br/>(Ajax Objects can be created by the above syntax. Here page path is the URL you want the Object to call. The URL must be of the same domain as the webpage.)</p>
	<li>How is encoding handled in AJAX?</li>
	<p class="js">(<span class="strong">1.</span> use "encodeActionURL()" method for full page refresh. Or,
		<span class="strong">2.</span> use "encodeResourceURL()" for partial page refresh.) </p>
	<li>How do you know that an AJAX request has completed?</li>
	<p class="js">(By determining the readyState property value of XMLHttpRequest. If the readyState value = 4, the request has been completed and the data is available.) </p>
	<li>Which request is better with AJAX, Get or Post?</li>
	<p class="js"> (AJAX requests should use an HTTP GET request while retrieving data where the data does not change for a given URL requested. An HTTP POST should be used when state is updated on the server. This is in line with HTTP idempotency recommendations and is highly recommended for a consistent web application architecture.) </p>
</ul>
</div>
</div>

</body>
</html>
