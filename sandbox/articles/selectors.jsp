<!doctype html>
<html lang="en" class="no-js">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link href="css_selectors/selectors.css" rel="stylesheet" type="text/css" media="screen"/>
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
	</style>
</head>
<body>
<div id="container-page">
<img src="../../resources/images/banner2Fade.jpg"/>

<div class="popDiv">
<h1>30 CSS Selectors to Memorize</h1>

<div style="float:right; margin-top:14px; padding-right:22px;">
	<a href="javascript:window.close()">Close Window</a>
</div>
<div id="page">
<div class="post">
<div class="tut_top">
	<!-- Post Image -->
	<div class="post_image"><img src="css_selectors/30_css_selectors.png" alt="The 30 CSS Selectors you Must Memorize"
	                             height="200" width="200"/></div>
	<div class="preview">
		<!-- Post Taxonomies -->
		<div class="post_taxonomy">
			<ul>
				<li><a href="http://net.tutsplus.com/category/tutorials/">Tutorials</a><span>\</span></li>
				<li><a href="http://net.tutsplus.com/category/tutorials/html-css-techniques/">HTML &amp; CSS</a></li>
			</ul>
		</div>
		<!-- Post Title -->
		<h1 class="post_title"> The 30 CSS Selectors You Must Memorize </h1>
		<!-- Post Meta -->
		<div class="post_meta"><a href="http://net.tutsplus.com/author/jeffreyway/" title="Posts by Jeffrey Way"
		                          rel="author">Jeffrey Way</a> on Jun 9th 2011.
			<h4>The article in its entirety can be found here:<br/><a
					href="http://net.tutsplus.com/tutorials/html-css-techniques/the-30-css-selectors-you-must-memorize/">30
				CSS Selectors You Must Memorize - by Jeffrey Way</a></h4>
		</div>
	</div>
</div>
<p><strong>Twice a month, we revisit some of our readers?
	favorite posts from throughout the history of Nettuts+. This tutorial
	was first published in November, 2010.</strong></p>

<p>So you learned the base <code>id</code>, <code>class</code>, and <code>descendant</code> selectors and then called it
	a day? If so, you're missing out on an
	enormous level of flexibility. While many of the selectors mentioned in
	this article are part of the CSS3 spec, and are, consequently, only
	available in modern browsers, you owe it to yourself to commit these to
	memory.<br/>
</p>
<hr/>
<h2><span>1)</span> *</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span>*&nbsp;{&nbsp;&nbsp;</span></li>
		<li class=""><span class="keyword">margin</span><span>:&nbsp;0;&nbsp;&nbsp;</span></li>
		<li class="alt"><span class="keyword">padding</span><span>:&nbsp;0;&nbsp;&nbsp;</span></li>
		<li class=""><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">* {
 margin: 0;
 padding: 0;
}
</pre>
<p>Let's knock the obvious ones out, for the beginners, before we move onto the more advanced selectors.</p>

<p>The star symbol will target every single element on the page. Many developers will use this trick to zero out the
	<code>margin</code>s and <code>padding</code>. While this is certainly fine for quick tests, I'd advise you to never
	use this in production code. It adds too much <em>weight</em> on the browser, and is unnecessary.</p>

<p>The <code>*</code> can also be used with child selectors. </p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span class="colors">#container&nbsp;*&nbsp;{&nbsp;&nbsp;</span></li>
		<li class=""><span class="keyword">border:&nbsp;</span><span class="string">1px&nbsp;</span><span
				class="string">solid black;</span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">#container * {
 border: 1px solid black;
}
</pre>
<p>This will target every single element that is a child of the <code>#container</code> <code>div</code>. Again, try not
	to use this technique very much, if ever.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/star.html">View Demo </a></h5>
<hr/>
<h2><span>2)</span> #X</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span class="colors">#container&nbsp;{&nbsp;&nbsp;</span></li>
		<li class=""><span class="keyword">width</span><span>:&nbsp;</span><span class="string">960px;</span></li>
		<li class="alt"><span class="keyword">margin</span><span>:&nbsp;</span><span class="string">auto;</span></li>
		<li class=""><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">#container {
   width: 960px;
   margin: auto;
}
</pre>
<p>Prefixing the hash symbol to a selector allows us to target by <code>id</code>. This is easily the most common usage,
	however be cautious when using <code>id</code> selectors.</p>
<blockquote>
	<p>Ask yourself: do I absolutely need to apply an <code>id</code> to this element in order to target it?</p>
</blockquote>
<p><code>id</code> selectors are rigid and don't allow for reuse. If
	possible, first try to use a tag name, one of the new HTML5 elements, or
	even a pseudo-class.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/id.html">View Demo </a></h5>
<hr/>
<h2><span>3)</span> .X</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span>.error&nbsp;{&nbsp;&nbsp;</span></li>
		<li class=""><span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">.error {
  color: red;
}
</pre>
<p>This is a <code>class</code> selector. The difference between <code>id</code>s and <code>class</code>es is that, with
	the latter, you can target multiple elements. Use <code>class</code>es when you want your styling to apply to a
	group of elements. Alternatively, use <code>id</code>s to find a needle-in-a-haystack, and style only that specific
	element.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/class.html">View Demo </a></h5>
<hr/>
<h2><span>4)</span> X Y</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>li&nbsp;a&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">text-decoration</span><span>:&nbsp;</span><span
				class="string">none</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">li a {
  text-decoration: none;
}
</pre>
<p>The next most comment selector is the <code>descendant</code> selector. When you need to be more specific with your
	selectors, you use these. For example, what if, rather than targeting <em>all</em> anchor tags, you only need to
	target the anchors which are within an
	unordered list? This is specifically when you'd use a descendant
	selector. </p>
<blockquote>
	<p><strong>Pro-tip</strong> ? If your selector looks like <code>X Y Z A B.error</code>, you're doing it wrong.
		Always ask yourself if it's absolutely necessary to apply all of that <em>weight</em>.</p>
</blockquote>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/descend.html">View Demo </a></h5>
<hr/>
<h2><span>5)</span> X</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a&nbsp;{&nbsp;</span><span class="keyword">color</span><span>:&nbsp;</span><span
				class="string">red</span><span>;&nbsp;}&nbsp;&nbsp;</span></span></li>
		<li class=""><span>ul&nbsp;{&nbsp;<span class="keyword">margin-left</span><span>:&nbsp;0;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
		</li>
	</ol>
</div>
        <pre style="display: none;" class="css">a { color: red; }
ul { margin-left: 0; }
</pre>
<p>What if you want to target all elements on a page, according to their <code>type</code>, rather than an
	<code>id</code> or <code>class</code>name? Keep it simple, and use a type selector. If you need to target all
	unordered lists, use <code>ul {}</code>.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/tagName.html">View Demo </a></h5>
<hr/>
<h2><span>6)</span> X:visited and X:link</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a:link&nbsp;{&nbsp;</span><span
				class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;}&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>a:visted&nbsp;{&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span
				class="string">purple</span><span>;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a:link { color: red; }
a:visted { color: purple; }
</pre>
<p>We use the <code>:link</code> pseudo-class to target all anchors tags which have yet to be clicked on.</p>

<p>Alternatively, we also have the <code>:visited</code> pseudo class, which, as you'd expected, allows us to apply
	specific styling to only the anchor tags on the page which <em>have</em> been clicked on, or <em>visited</em>.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/links.html">View Demo </a></h5>
<hr/>
<h2><span>7)</span> X + Y</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul&nbsp;+&nbsp;p&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul + p {
   color: red;
}
</pre>
<p>This is referred to as an adjacent selector. It will select <em>only</em> the element that is immediately preceded by
	the former element. In this case, only the first paragraph after each <code>ul</code> will have red text.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/adjacent.html">View Demo </a></h5>
<hr/>
<h2><span>8)</span> X &gt; Y</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>div</span><span class="colors">#contai</span><span>ner&nbsp;&gt;&nbsp;ul&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">border</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">div#container &gt; ul {
  border: 1px solid black;
}
</pre>
<p>The difference between the standard <code>X Y</code> and <code>X &gt; Y</code> is that the latter will only select
	direct children. For example, consider the following markup.</p>

<div class="dp-highlighter">
	<ol class="dp-xml">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">div</span><span>&nbsp;</span><span
				class="attribute">id</span><span>=</span><span class="attribute-value">"container"</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">ul</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
				class="tag">&lt;</span><span class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;Child&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span
				class="tag-name">ul</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">div</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="html">   &lt;div id="container"&gt;
      &lt;ul&gt;
         &lt;li&gt; List Item
           &lt;ul&gt;
              &lt;li&gt; Child &lt;/li&gt;
           &lt;/ul&gt;
         &lt;/li&gt;
         &lt;li&gt; List Item &lt;/li&gt;
         &lt;li&gt; List Item &lt;/li&gt;
         &lt;li&gt; List Item &lt;/li&gt;
      &lt;/ul&gt;
   &lt;/div&gt;
</pre>
<p>A selector of <code>#container &gt; ul</code> will only target the <code>ul</code>s which are direct children of the
	<code>div</code> with an <code>id</code> of <code>container</code>. It will not target, for instance, the
	<code>ul</code> that is a child of the first <code>li</code>. </p>

<p>For this reason, there are performance benefits in using the child
	combinator. In fact, it's recommended particularly when working with
	JavaScript-based CSS selector engines.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/childcombinator.html">View Demo </a></h5>
<hr/>
<h2><span>9)</span> X ~ Y</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul&nbsp;~&nbsp;p&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul ~ p {
   color: red;
}
</pre>
<p>This sibling combinator is similar to <code>X + Y</code>, however, it's less strict. While an adjacent selector
	(<code>ul + p</code>) will only select the first element that is <em>immediately</em> preceded by the former
	selector, this one is more generalized. It will select, referring to our example above, any <code>p</code> elements,
	as long as they follow a <code>ul</code>. </p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/generalcombinator.html">View Demo </a></h5>
<hr/>
<h2><span>10)</span> X[title]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[title]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">green</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[title] {
   color: green;
}
</pre>
<p>Referred to as an <em>attributes selector</em>, in our example above, this will only select the anchor tags that have
	a <code>title</code> attribute. Anchor tags which do not will not receive this particular styling. But, what if you
	need to be more specific? Well?</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes.html">View Demo </a></h5>
<hr/>
<h2><span>11)</span> X[href="foo"]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[href=</span><span class="string">"http://net.tutsplus.com"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="colors">#1f6053</span><span>;&nbsp;</span><span
				class="comment">/*&nbsp;nettuts&nbsp;green&nbsp;*/</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[href="http://net.tutsplus.com"] {
  color: #1f6053; /* nettuts green */
}
</pre>
<p>The snippet above will style all anchor tags which link to <em>http://net.tutsplus.com</em>; they'll receive our
	branded green color. All other anchor tags will remain unaffected.</p>
<blockquote>
	<p> Note that we're wrapping the value in quotes. Remember to also do this
		when using a JavaScript CSS selector engine. When possible, always use
		CSS3 selectors over unofficial methods. </p>
</blockquote>
<p>This works well, though, it's a bit rigid. What if the link does indeed direct to Nettuts+, but, maybe, the path is
	<em>nettuts.com</em> rather than the full url? In those cases we can use a bit of the regular expressions syntax.
</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes2.html">View Demo </a></h5>
<hr/>
<h2><span>12)</span> X[href*="nettuts"]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[href*=</span><span
				class="string">"tuts"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="colors">#1f6053</span><span>;&nbsp;</span><span
				class="comment">/*&nbsp;nettuts&nbsp;green&nbsp;*/</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[href*="tuts"] {
  color: #1f6053; /* nettuts green */
}
</pre>
<p>There we go; that's what we need. The star designates that the proceeding value must appear <em>somewhere</em> in the
	attribute's value. That way, this covers <em>nettuts.com</em>, <em>net.tutsplus.com,</em> and even
	<em>tutsplus.com</em>. </p>

<p>Keep in mind that this is a broad statement. What if the anchor tag linked to some non-Envato site with the string
	<em>tuts</em> in the url? When you need to be more specific, use <code>^</code> and <code>&amp;</code>, to reference
	the beginning and end of a string, respectively.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes3.html">View Demo </a></h5>
<hr/>
<h2><span>13)</span> X[href^="http"]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[href^=</span><span
				class="string">"http"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">background</span><span>:&nbsp;</span><span
				class="string">url</span><span>(path/to/external/</span><span class="string">icon</span><span>.png)&nbsp;</span><span
				class="string">no-repeat</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="keyword">padding-left</span><span>:&nbsp;</span><span
				class="string">10px</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[href^="http"] {
   background: url(path/to/external/icon.png) no-repeat;
   padding-left: 10px;
}
</pre>
<p>Ever wonder how some websites are able to display a little icon next
	to the links which are external? I'm sure you've seen these before;
	they're nice reminders that the link will direct you to an entirely
	different website.</p>

<p>This is a cinch with the carat symbol. It's most commonly used in
	regular expressions to designate the beginning of a string. If we want
	to target all anchor tags that have a <code>href</code> which begins with <code>http</code>, we could use a selector
	similar to the snippet shown above.</p>
<blockquote>
	<p>Notice that we're not searching for <code>http://</code>; that's unnecessary, and doesn't account for the urls
		that begin with <code>https://</code>. </p>
</blockquote>
<p>Now, what if we wanted to instead style all anchors which link to, say, a photo? In those cases, let's search for the
	<em>end</em> of the string.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes4.html">View Demo </a></h5>
<hr/>
<h2><span>14)</span> X[href$=".jpg"]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[href$=</span><span
				class="string">".jpg"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[href$=".jpg"] {
   color: red;
}
</pre>
<p>Again, we use a regular expressions symbol, <code>$</code>, to refer
	to the end of a string. In this case, we're searching for all anchors
	which link to an image, or at least a url that ends with <code>.jpg</code>. Keep in mind that this certainly won't
	work for <code>gifs</code> and <code>pngs</code>.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes5.html">View Demo </a></h5>
<hr/>
<h2><span>15)</span> X[data-*="foo"]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[data-filetype=</span><span
				class="string">"image"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[data-filetype="image"] {
   color: red;
}
</pre>
<p>Refer back to number eight; how do we compensate for all of the various image types: <code>png</code>,
	<code>jpeg,</code><code>jpg</code>, <code>gif</code>? Well, we could create multiple selectors, such as:</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[href$=</span><span class="string">".jpg"</span><span>],&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>a[href$=<span class="string">".jpeg"</span><span>],&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>a[href$=<span class="string">".png"</span><span>],&nbsp;&nbsp;</span></span></li>
		<li class=""><span>a[href$=<span class="string">".gif"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span
				class="string">red</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[href$=".jpg"],
a[href$=".jpeg"],
a[href$=".png"],
a[href$=".gif"] {
   color: red;
}
</pre>
<p>But, that's a pain in the butt, and is inefficient. Another possible
	solution is to use custom attributes. What if we added our own <code>data-filetype</code> attribute to each anchor
	that links to an image?</p>

<div class="dp-highlighter">
	<ol class="dp-xml">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">a</span><span>&nbsp;</span><span
				class="attribute">href</span><span>=</span><span
				class="attribute-value">"path/to/image.jpg"</span><span>&nbsp;</span><span class="attribute">data-filetype</span><span>=</span><span
				class="attribute-value">"image"</span><span
				class="tag">&gt;</span><span>&nbsp;Image&nbsp;Link&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">a</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="html">&lt;a href="path/to/image.jpg" data-filetype="image"&gt; Image Link &lt;/a&gt;
</pre>
<p>Then, with that <em>hook</em> in place, we can use a standard attributes selector to target only those anchors. </p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a[data-filetype=</span><span
				class="string">"image"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a[data-filetype="image"] {
   color: red;
}
</pre>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes6.html">View Demo </a></h5>
<hr/>
<h2><span>16)</span> X[foo~="bar"]</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>&nbsp;a[data-info~=</span><span class="string">"external"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>a[data-info~=<span class="string">"image"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">border</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css"> a[data-info~="external"] {
   color: red;
}

a[data-info~="image"] {
   border: 1px solid black;
}
</pre>
<p>Here's a special one that'll impress your friends. Not too many people know about this trick. The tilda
	(<code>~</code>) symbol allows us to target an attribute which has a spaced-separated list of values. </p>

<p>Going along with our custom attribute from number fifteen, above, we could create a <code>data-info</code> attribute,
	which can receive a space-separated list of anything we need
	to make note of. In this case, we'll make note of external links and
	links to images, just for the example.</p>

<div class="dp-highlighter">
	<ol class="dp-xml">
		<li class="alt"><span><span>"</span><span class="tag">&lt;</span><span
				class="tag-name">a</span><span>&nbsp;</span><span class="attribute">href</span><span>=</span><span
				class="attribute-value">"path/to/image.jpg"</span><span>&nbsp;</span><span
				class="attribute">data-info</span><span>=</span><span
				class="attribute-value">"external&nbsp;image"</span><span class="tag">&gt;</span><span>&nbsp;Click&nbsp;Me,&nbsp;Fool&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">a</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="html">"&lt;a href="path/to/image.jpg" data-info="external image"&gt; Click Me, Fool &lt;/a&gt;
</pre>
<p>With that markup in place, now we can target any tags that have
	either of those values, by using the ~ attributes selector trick.</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span class="comment">/*&nbsp;Target&nbsp;data-info&nbsp;attr&nbsp;that&nbsp;contains&nbsp;the&nbsp;value&nbsp;"external"&nbsp;*/</span><span>&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>a[data-info~=<span class="string">"external"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span
				class="string">red</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>}&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;</span></li>
		<li class=""><span><span class="comment">/*&nbsp;And&nbsp;which&nbsp;contain&nbsp;the&nbsp;value&nbsp;"image"&nbsp;*/</span><span>&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>a[data-info~=<span class="string">"image"</span><span>]&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">border</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">/* Target data-info attr that contains the value "external" */
a[data-info~="external"] {
   color: red;
}

/* And which contain the value "image" */
a[data-info~="image"] {
  border: 1px solid black;
}
</pre>
<p>Pretty nifty, ay? </p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/attributes7.html">View Demo </a></h5>
<hr/>
<h2><span>17)</span> X:checked</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>input[type=radio]:checked&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">border</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">input[type=radio]:checked {
   border: 1px solid black;
}
</pre>
<p>This pseudo class will only target a user interface element that has been <em>checked</em> - like a radio button, or
	checkbox. It's as simple as that.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/checked.html">View Demo </a></h5>
<hr/>
<h2><span>18)</span> X:after</h2>

<p>The <code>before</code> and <code>after</code> pseudo classes kick
	butt. Every day, it seems, people are finding new and creative ways to
	use them effectively. They simply generate content around the selected
	element.</p>

<p>Many were first introduced to these classes when they encountered the clear-fix hack (way for an element to
	automatically clear after itself, so that you don't need to add additional markup such as an empty div).</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>.clearfix:after&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">content</span><span>:&nbsp;</span><span
				class="string">""</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">display</span><span>:&nbsp;</span><span
				class="string">block</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">clear</span><span>:&nbsp;</span><span
				class="string">both</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">visibility</span><span>:&nbsp;</span><span
				class="string">hidden</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span
				class="keyword">font-size</span><span>:&nbsp;0;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span
				class="keyword">height</span><span>:&nbsp;0;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;</span></li>
		<li class=""><span>.clearfix&nbsp;{&nbsp;&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;*<span class="keyword">display</span><span>:&nbsp;</span><span
				class="string">inline</span><span>-</span><span
				class="string">block</span><span>;&nbsp;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;_height:&nbsp;1%;&nbsp;&nbsp;</span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
    }

.clearfix {
   *display: inline-block;
   _height: 1%;
}
</pre>
<p>This <em>hack</em> uses the <code>:after</code> pseudo class to
	append a space after the element, and then clear it. It's an excellent
	trick to have in your tool bag, particularly in the cases when the <code>overflow: hidden;</code> method isn't
	possible.</p>

<p>For another creative use of this, <a
		href="http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-getting-clever-with-css3-shadows/">refer
	to my quick tip on creating shadows</a>. </p>
<blockquote>
	<p>According to the CSS3 Selectors specification, you should technically use the pseudo element syntax of two colons
		<code>::</code>.
		However, to remain compatible, the user-agent will accept a single
		colon usage as well. In fact, at this point, it's smarter to use the
		single-colon version in your projects.</p>
</blockquote>
<hr/>
<h2><span>19)</span> X:hover</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>div:hover&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">background</span><span>:&nbsp;</span><span class="colors">#e3e3e3</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">div:hover {
  background: #e3e3e3;
}
</pre>
<p>Oh come on. You know this one. The official term for this is <code>user action pseudo class</code>.
	It sounds confusing, but it really isn't. Want to apply specific
	styling when a user hovers over an element? This will get the job done!</p>
<blockquote>
	<p>Keep in mind that older version of Internet Explorer don't respond when the <code>:hover</code> pseudo class is
		applied to anything other than an anchor tag. </p>
</blockquote>
<p>You'll most often use this selector when applying, for example, a <code>border-bottom</code> to anchor tags, when
	hovered over.</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>a:hover&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;<span class="keyword">border-bottom</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">a:hover {
 border-bottom: 1px solid black;
}
</pre>
<blockquote>
	<p><strong>Pro-tip</strong> - <code>border-bottom: 1px solid black;</code> looks better than <code>text-decoration:
		underline;</code>. </p>
</blockquote>
<hr/>
<h2><span>20)</span> X:not(selector)</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>div:not(</span><span
				class="colors">#contai</span><span>ner)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">blue</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">div:not(#container) {
   color: blue;
}
</pre>
<p>The <code>negation</code> pseudo class is particularly helpful. Let's say I want to select all divs, except for the
	one which has an <code>id</code> of <code>container</code>. The snippet above will handle that task perfectly.</p>

<p>Or, if I wanted to select every single element (not advised) except for paragraph tags, we could do:</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>*:not(p)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span
				class="string">green</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">*:not(p) {
  color: green;
}
</pre>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/not.html">View Demo </a></h5>
<hr/>
<h2><span>21)</span> X::pseudoElement</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>p::first-line&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span
				class="keyword">font-size</span><span>:&nbsp;1.2em;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>}&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">p::first-line {
   font-weight: bold;
   font-size: 1.2em;
}
</pre>
<p>We can use pseudo elements (designated by <code>::</code>) to style
	fragments of an element, such as the first line, or the first letter.
	Keep in mind that these must be applied to block level elements in order
	to take effect.</p>
<blockquote>
	<p>A pseudo-element is composed of two colons: <code>::</code></p>
</blockquote>
<h4>Target the First Letter of a Paragraph</h4>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>p::first-letter&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">float</span><span>:&nbsp;</span><span class="string">left</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span
				class="keyword">font-size</span><span>:&nbsp;2em;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-family</span><span>:&nbsp;</span><span
				class="string">cursive</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">padding-right</span><span>:&nbsp;</span><span
				class="string">2px</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">p::first-letter {
   float: left;
   font-size: 2em;
   font-weight: bold;
   font-family: cursive;
   padding-right: 2px;
}
</pre>
<p>This snippet is an abstraction that will find all paragraphs on the
	page, and then sub-target only the first letter of that element. </p>

<p>This is most often used to create newspaper-like styling for the first-letter of an article.</p>
<h4>Target the First Line of a Paragraph</h4>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>p::first-line&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span
				class="keyword">font-size</span><span>:&nbsp;1.2em;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">p::first-line {
   font-weight: bold;
   font-size: 1.2em;
}
</pre>
<p>Similarly, the <code>::first-line</code> pseudo element will, as expected, style the first line of the element only.
</p>
<blockquote>
	<p>"For compatibility with existing style sheets, user agents must also
		accept the previous one-colon notation for pseudo-elements introduced in
		CSS levels 1 and 2 (namely, :first-line, :first-letter, :before and
		:after). This compatibility is not allowed for the new pseudo-elements
		introduced in this specification." - <a href="http://www.w3.org/TR/css3-selectors/">Source</a></p>
</blockquote>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/pseudoElements.html">View Demo </a></h5>
<hr/>
<h2><span>22)</span> X:nth-child(n)</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>li:nth-child(3)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">li:nth-child(3) {
   color: red;
}
</pre>
<p>Remember the days when we had no way to target specific elements in a stack? The <code>nth-child</code> pseudo class
	solves that!</p>

<p>Please note that <code>nth-child</code> accepts an integer as a parameter, however, this is not zero-based. If you
	wish to target the second list item, use <code>li:nth-child(2)</code>. </p>

<p>We can even use this to select a variable set of children. For example, we could do <code>li:nth-child(4n)</code> to
	select every fourth list item. </p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/nth.html">View Demo </a></h5>
<hr/>
<h2><span>23)</span> X:nth-last-child(n)</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>li:nth-last-child(2)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">li:nth-last-child(2) {
   color: red;
}
</pre>
<p>What if you had a huge list of items in a <code>ul</code>, and only needed to access, say, the third to the last
	item? Rather than doing <code>li:nth-child(397)</code>, you could instead use the <code>nth-last-child</code> pseudo
	class.</p>

<p>This technique works almost identically from number sixteen above,
	however, the difference is that it begins at the end of the collection,
	and works its way back.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/nthLast.html">View Demo </a></h5>
<hr/>
<h2><span>24)</span> X:nth-of-type(n)</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul:nth-of-type(3)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">border</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul:nth-of-type(3) {
   border: 1px solid black;
}
</pre>
<p>There will be times when, rather than selecting a <code>child</code>, you instead need to select according to the
	<code>type</code> of element. </p>

<p>Imagine mark-up that contains five unordered lists. If you wanted to style only the third <code>ul</code>, and didn't
	have a unique <code>id</code> to hook into, you could use the <code>nth-of-type(n)</code> pseudo class. In the
	snippet above, only the third <code>ul</code> will have a border around it.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/nthOfType.html">View Demo </a></h5>
<hr/>
<h2><span>25)</span> X:nth-last-of-type(n)</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul:nth-last-of-type(3)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">border</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul:nth-last-of-type(3) {
   border: 1px solid black;
}
</pre>
<p>And yes, to remain consistent, we can also use <code>nth-last-of-type</code> to begin at the end of the selectors
	list, and work our way back to target the desired element.</p>
<hr/>
<h2><span>26)</span> X:first-child</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul&nbsp;li:first-child&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">border-top</span><span>:&nbsp;</span><span
				class="string">none</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul li:first-child {
   border-top: none;
}
</pre>
<p>This structural pseudo class allows us to target only the first child
	of the element's parent. You'll often use this to remove borders from
	the first and last list items. </p>

<p>For example, let's say you have a list of rows, and each one has a <code>border-top</code> and a
	<code>border-bottom</code>. Well, with that arrangement, the first and last item in that set will look a bit odd.
</p>

<p>Many designers apply classes of <code>first</code> and <code>last</code> to compensate for this. Instead, you can use
	these pseudo classes.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/firstChild.html">View Demo </a></h5>
<hr/>
<h2><span>27)</span> X:last-child</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul&nbsp;&gt;&nbsp;li:last-child&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">green</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul &gt; li:last-child {
   color: green;
}
</pre>
<p>The opposite of <code>first-child</code>, <code>last-child</code> will target the last item of the element's parent.
</p>

<p><strong>Example:</strong></p>

<p>Let's build a simple example to demonstrate one possible use of these classes. We'll create a styled list item. </p>
<h4>Markup</h4>

<div class="dp-highlighter">
	<ol class="dp-xml">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">ul</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span><span class="tag">&lt;/</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="html">  &lt;ul&gt;
     &lt;li&gt; List Item &lt;/li&gt;
     &lt;li&gt; List Item &lt;/li&gt;
     &lt;li&gt; List Item &lt;/li&gt;
  &lt;/ul&gt;
</pre>
<p>Nothing special here; just a simple list.</p>
<h4>CSS</h4>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;<span class="keyword">width</span><span>:&nbsp;</span><span class="string">200px</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>&nbsp;<span class="keyword">background</span><span>:&nbsp;</span><span class="colors">#292929</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">white</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>&nbsp;<span class="keyword">list-style</span><span>:&nbsp;</span><span
				class="string">none</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;<span class="keyword">padding-left</span><span>:&nbsp;0;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>li&nbsp;{&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;<span class="keyword">padding</span><span>:&nbsp;</span><span
				class="string">10px</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;<span class="keyword">border-bottom</span><span>:&nbsp;</span><span class="string">1px</span><span>&nbsp;</span><span
				class="string">solid</span><span>&nbsp;</span><span
				class="string">black</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;<span class="keyword">border-top</span><span>:&nbsp;</span><span
				class="string">1px</span><span>&nbsp;</span><span class="string">solid</span><span>&nbsp;</span><span
				class="colors">#3c3c3c</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul {
 width: 200px;
 background: #292929;
 color: white;
 list-style: none;
 padding-left: 0;
}

li {
 padding: 10px;
 border-bottom: 1px solid black;
 border-top: 1px solid #3c3c3c;
}
</pre>
<p>This styling will set a background, remove the browser-default padding on the <code>ul</code>, and apply borders to
	each <code>li</code> to provide a bit of depth.</p>

<div class="tutorial_image"><img style="display: inline;" src="../demos/css_selectors/extraBorders.png"
                                 alt="Styled List"/></div>
<blockquote>
	<p>To add depth to your lists, apply a <code>border-bottom</code> to each <code>li</code> that is a shade or two
		darker than the <code>li</code>'s background color. Next, apply a <code>border-top</code> which is a couple
		shades <em>lighter</em>. </p>
</blockquote>
<p>The only problem, as shown in the image above, is that a border will
	be applied to the very top and bottom of the unordered list - which
	looks odd. Let's use the <code>:first-child</code> and <code>:last-child</code> pseudo classes to fix this.</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>li:first-child&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">border-top</span><span>:&nbsp;</span><span
				class="string">none</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>li:last-child&nbsp;{&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">border-bottom</span><span>:&nbsp;</span><span
				class="string">none</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">li:first-child {
    border-top: none;
}

li:last-child {
   border-bottom: none;
}
</pre>
<div class="tutorial_image"><img style="display: inline;" src="../demos/css_selectors/fixed.png" alt="Fixed"/></div>
<p>There we go; that fixes it!</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/firstChild.html">View Demo </a></h5>

<p><em>Yep - IE8 supported <code>:first-child</code>, but not <code>:last-child</code>. Go figure. </em></p>
<hr/>
<h2><span>28)</span> X:only-child</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>div&nbsp;p:only-child&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">color</span><span>:&nbsp;</span><span class="string">red</span><span>;&nbsp;&nbsp;</span></span>
		</li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">div p:only-child {
   color: red;
}
</pre>
<p>Truthfully, you probably won't find yourself using the <code>only-child</code> pseudo class too often. Nonetheless,
	it's available, should you need it.</p>

<p>It allows you to target elements which are the <em>only</em> child of its parent. For example, referencing the
	snippet above, only the paragraph that is the only child of the <code>div</code> will be colored, red.</p>

<p>Let's assume the following markup.</p>

<div class="dp-highlighter">
	<ol class="dp-xml">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">div</span><span
				class="tag">&gt;</span><span class="tag">&lt;</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;My&nbsp;paragraph&nbsp;here.&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span class="tag">&lt;/</span><span
				class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">div</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">p</span><span
				class="tag">&gt;</span><span>&nbsp;Two&nbsp;paragraphs&nbsp;total.&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">p</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">p</span><span
				class="tag">&gt;</span><span>&nbsp;Two&nbsp;paragraphs&nbsp;total.&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">p</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">div</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="html">&lt;div&gt;&lt;p&gt; My paragraph here. &lt;/p&gt;&lt;/div&gt;

&lt;div&gt;
   &lt;p&gt; Two paragraphs total. &lt;/p&gt;
   &lt;p&gt; Two paragraphs total. &lt;/p&gt;
&lt;/div&gt;
</pre>
<p>In this case, the second <code>div</code>'s paragraphs will not be targeted; only the first <code>div</code>. As soon
	as you apply more than one child to an element, the <code>only-child</code> pseudo class ceases to take effect.</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/onlyChild.html">View Demo </a></h5>
<hr/>
<h2><span>29)</span> X:only-of-type</h2>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>li:only-of-type&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">li:only-of-type {
   font-weight: bold;
}
</pre>
<p>This structural pseudo class can be used in some clever ways. It will
	target elements that do not have any siblings within its parent
	container. As an example, let's target all <code>ul</code>s, which have only a single list item. </p>

<p>First, ask yourself how you would accomplish this task? You could do <code>ul li</code>, but, this would target <em>all</em>
	list items. The only solution is to use <code>only-of-type</code>.</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul&nbsp;&gt;&nbsp;li:only-of-type&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul &gt; li:only-of-type {
   font-weight: bold;
}
</pre>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/onlyOfType.html">View Demo </a></h5>
<hr/>
<h2>30) X:first-of-type</h2>

<p>The <code>first-of-type</code> pseudo class allows you to select the first siblings of its type. </p>

<p><strong>A Test:</strong></p>

<p>To better understand this, let's have a test. Copy the following mark-up into your code editor:</p>

<div class="dp-highlighter">
	<ol class="dp-xml">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">div</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">p</span><span
				class="tag">&gt;</span><span>&nbsp;My&nbsp;paragraph&nbsp;here.&nbsp;</span><span
				class="tag">&lt;/</span><span class="tag-name">p</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;1&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;2&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;3&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span
				class="tag-name">li</span><span
				class="tag">&gt;</span><span>&nbsp;List&nbsp;Item&nbsp;4&nbsp;</span><span class="tag">&lt;/</span><span
				class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">ul</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">div</span><span
				class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
        <pre style="display: none;" class="html">&lt;div&gt;
   &lt;p&gt; My paragraph here. &lt;/p&gt;
   &lt;ul&gt;
      &lt;li&gt; List Item 1 &lt;/li&gt;
      &lt;li&gt; List Item 2 &lt;/li&gt;
   &lt;/ul&gt;

   &lt;ul&gt;
      &lt;li&gt; List Item 3 &lt;/li&gt;
      &lt;li&gt; List Item 4 &lt;/li&gt;
   &lt;/ul&gt;
&lt;/div&gt;
</pre>
<p>Now, without reading further, try to figure out how to target only <em>"List Item 2"</em>. When you've figured it out
	(or given up), read on.</p>
<h4>Solution 1</h4>

<p>There are a variety of ways to solve this test. We'll review a handful of them. Let's begin by using <code>first-of-type</code>.
</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul:first-of-type&nbsp;&gt;&nbsp;li:nth-child(2)&nbsp;{&nbsp;&nbsp;</span></span>
		</li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul:first-of-type &gt; li:nth-child(2) {
   font-weight: bold;
}
</pre>
<p>This snippet essentially says, "find the first unordered list on the
	page, then find only the immediate children, which are list items. Next,
	filter that down to only the second list item in that set.</p>
<h4>Solution 2</h4>

<p>Another option is to use the adjacent selector.</p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>p&nbsp;+&nbsp;ul&nbsp;li:last-child&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">p + ul li:last-child {
   font-weight: bold;
}
</pre>
<p>In this scenario, we find the <code>ul</code> that immediately proceeds the <code>p</code> tag, and then find the
	very last child of the element.</p>
<h4>Solution 3</h4>

<p>We can be as obnoxious or as playful as we want with these selectors. </p>

<div class="dp-highlighter">
	<ol class="dp-css">
		<li class="alt"><span><span>ul:first-of-type&nbsp;li:nth-last-child(1)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;<span class="keyword">font-weight</span><span>:&nbsp;</span><span
				class="string">bold</span><span>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></li>
	</ol>
</div>
        <pre style="display: none;" class="css">ul:first-of-type li:nth-last-child(1) {
   font-weight: bold;
}
</pre>
<p>This time, we grab the first <code>ul</code> on the page, and then find the very first list item, but starting from
	the bottom! :)</p>
<h5><a href="http://d2o0t5hpnwv4c1.cloudfront.net/840_cssSelectors/selectors/firstOfType.html">View Demo </a></h5>
<hr/>
<h2> Conclusion </h2>

<p> If you're compensating for older browsers, like Internet Explorer 6, you
	still need to be careful when using these newer selectors. But, please
	don't let that deter you from learning these. You'd be doing a huge
	disservice to yourself. Be sure to <a href="http://www.quirksmode.org/css/contents.html"
	                                      onclick="javascript:_gaq.push(['_trackEvent','outbound-article','www.quirksmode.org']);">refer
		here for a browser-compatibility list.</a> Alternatively, you can use <a href="http://code.google.com/p/ie7-js/"
	                                                                             onclick="javascript:_gaq.push(['_trackEvent','outbound-article','code.google.com']);">Dean
		Edward's excellent IE9.js script</a> to bring support for these selectors to older browsers. </p>

<p>Secondly, when working with JavaScript libraries, like the popular
	jQuery, always try to use these native CSS3 selectors over the library's
	custom methods/selectors, when possible. I<a href="http://jsperf.com/jquery-css3-not-vs-not"
	                                             onclick="javascript:_gaq.push(['_trackEvent','outbound-article','jsperf.com']);">t'll
		make your code faster</a>, as the selector engine can use the browser's native parsing, rather than its own.
</p>

<p>Thanks for reading, and I hope you picked up a trick or two!</p>
</div>
</div>
</div>
</div>
</body>
</html>
