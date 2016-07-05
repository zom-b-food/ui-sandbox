<!DOCTYPE html>
<html lang="en">
<head>
	<title>Extending jQuery</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link type="text/css" rel="stylesheet" href="jqPE_files/shCore.css"/>
	<link type="text/css" rel="stylesheet" href="jqPE_files/shThemeDefault.css"/>
	<link href="css_selectors/selectors.css" rel="stylesheet" type="text/css" media="screen"/>
	<script type="text/javascript">
		(function ($) {
			$.fn.extend({
				//plugin name - animatemenu
				animateMenu: function (options) {

					var defaults = {
						animatePadding: 60,
						defaultPadding: 10,
						evenColor: '#ccc',
						oddColor: '#eee'
					};

					var options = $.extend(defaults, options);

					return this.each(function () {
						var o = options;
						var obj = $(this);
						var items = $("li", obj);

						$("li:even", obj).css('background-color', o.evenColor);
						$("li:odd", obj).css('background-color', o.oddColor);

						items.mouseover(
								function () {
									$(this).animate({paddingLeft: o.animatePadding}, 300);

								}).mouseout(function () {
									$(this).animate({paddingLeft: o.defaultPadding}, 300);

								});
					});
				}
			});
		})(jQuery);

		$(document).ready(function () {
			$('#menu').animateMenu({animatePadding: 30, defaultPadding: 10});
		});
	</script>
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

		.post_image h4 {
			width: 100px;
		}

		#menu {
			list-style: none;
			width: 160px;
			padding-left: 10px;
		}

		#menu li {
			margin: 0;
			padding: 5px;
			line-height: 18px;
			cursor: hand;
			cursor: pointer;
		}
	</style>
</head>
<body>
<div id="container-page">
<img src="../../resources/images/banner2Fade.jpg"/>

<div class="popDiv">
<h1>Writing a jQuery Plugin</h1>

<div style="float:right; margin-top:14px; padding-right:22px;"><a href="javascript:window.close()">Close Window</a>
</div>
<div id="page">
<div class="post">
<div class="tut_top">
	<!-- Post Image -->
	<div class="preview">
		<h1 class="post_title">A Really Simple jQuery Plugin Tutorial</h1>
		<!-- Post Meta -->
		<div class="post_meta"><a href="http://www.queness.com/post/112/a-really-simple-jquery-plugin-tutorial"
		                          title="Tutorial by Kevin Liew" rel="author">Kevin Liew</a>
			<h4>The tutorial in its entirety can be found here:<br/>
				<a href="http://www.queness.com/post/112/a-really-simple-jquery-plugin-tutorial">A Really Simple jQuery
					Plugin Tutorial - by Kevin Liew</a></h4>
		</div>
	</div>
</div>
<div id="content">
<div class="article">
<hr/>
<h2><span>1)</span> Introduction</h2>

<p>Creating a jQuery Plugin is an advanced topic for a jQuery beginner.
	This month, I have been playing with jQuery intensively. Though I have
	learnt how to separate the javascript code from html document, I ain't
	satisfy yet. Whenever I look at my javascript file, it's messy. So, I
	have decided to go one step further - learn how to write a jQuery plugin
	to tidy up the javascript file.</p>

<p>This plugin is based on my previous tutorial - <a
		href="http://www.queness.com/post/68/navigation-list-menujquery-animate-effect-tutorial">Navigation List menu +
	jQuery Animate Effect Tutorial </a>. Last time, I wrote the script and chucked in all the code in the document.ready
	section, like this: </p>

<div>
	<div id="highlighter_222587" class="syntaxhighlighter  javascript">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td class="gutter">
						<div class="line number1 index0 alt2">1</div>
						<div class="line number2 index1 alt1">2</div>
						<div class="line number3 index2 alt2">3</div>
						<div class="line number4 index3 alt1">4</div>
						<div class="line number5 index4 alt2">5</div>
						<div class="line number6 index5 alt1">6</div>
						<div class="line number7 index6 alt2">7</div>
						<div class="line number8 index7 alt1">8</div>
						<div class="line number9 index8 alt2">9</div>
						<div class="line number10 index9 alt1">10</div>
						<div class="line number11 index10 alt2">11</div>
						<div class="line number12 index11 alt1">12</div>
						<div class="line number13 index12 alt2">13</div>
						<div class="line number14 index13 alt1">14</div>
						<div class="line number15 index14 alt2">15</div>
						<div class="line number16 index15 alt1">16</div>
						<div class="line number17 index16 alt2">17</div>
						<div class="line number18 index17 alt1">18</div>
					</td>
					<td class="code">
						<div class="container">
							<div class="line number1 index0 alt2"><code
									class="javascript plain">$(document).ready(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number2 index1 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number3 index2 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript string">'ul#menu
								li:even'</code><code class="javascript plain">).addClass(</code><code
									class="javascript string">'even'</code><code class="javascript plain">);</code>
							</div>
							<div class="line number4 index3 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number5 index4 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript string">'ul#menu li
								a'</code><code class="javascript plain">).mouseover(</code><code
									class="javascript keyword">function</code><code class="javascript plain">() {</code>
							</div>
							<div class="line number6 index5 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number7 index6 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate( { paddingLeft:</code><code
									class="javascript string">"20px"</code> <code class="javascript plain">}, {
								queue:</code><code class="javascript keyword">false</code><code
									class="javascript plain">, duration:500 });</code></div>
							<div class="line number8 index7 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number9 index8 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}).mouseout(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number10 index9 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number11 index10 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate( { paddingLeft:</code><code
									class="javascript string">"0"</code> <code class="javascript plain">}, {
								queue:</code><code class="javascript keyword">true</code><code class="javascript plain">,
								duration:500 });</code></div>
							<div class="line number12 index11 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number13 index12 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}).click(</code><code
									class="javascript keyword">function</code><code class="javascript plain">() {</code>
							</div>
							<div class="line number14 index13 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number15 index14 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate( { fontSize:</code><code
									class="javascript string">"20px"</code> <code class="javascript plain">}, {
								queue:</code><code class="javascript keyword">false</code><code
									class="javascript plain">, duration:500 });</code></div>
							<div class="line number16 index15 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number17 index16 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number18 index17 alt1"><code
									class="javascript plain">});&nbsp;&nbsp; </code></div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<h4>But now, I want it to display something like this:</h4>

<div>
	<div id="highlighter_5203" class="syntaxhighlighter  javascript">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td class="gutter">
						<div class="line number1 index0 alt2">1</div>
						<div class="line number2 index1 alt1">2</div>
						<div class="line number3 index2 alt2">3</div>
						<div class="line number4 index3 alt1">4</div>
						<div class="line number5 index4 alt2">5</div>
						<div class="line number6 index5 alt1">6</div>
						<div class="line number7 index6 alt2">7</div>
					</td>
					<td class="code">
						<div class="container">
							<div class="line number1 index0 alt2"><code
									class="javascript plain">$(document).ready(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number2 index1 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number3 index2 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript preprocessor">#menu).animateMenu({</code>
							</div>
							<div class="line number4 index3 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">padding:20</code></div>
							<div class="line number5 index4 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">})</code></div>
							<div class="line number6 index5 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number7 index6 alt2"><code class="javascript plain">});&nbsp;&nbsp; </code>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<p>It looks much more better, and easier to reuse this script for another project.</p>
<hr/>
<h2><span>2)</span> Plugin Structure</h2>

<p>jQuery website has provided a very detailed explanation in <a target="_blank"
                                                                 href="http://docs.jquery.com/Plugins/Authoring"
                                                                 rel="external">Plugins/Authoring</a> page. However, I
	found it's hard to understand.</p>

<p>Alright, to make your life easier, I did some research online, the
	following snippet will be a good structure to write a plugin. </p>

<div>
	<div id="highlighter_567793" class="syntaxhighlighter  javascript">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td class="gutter">
						<div class="line number1 index0 alt2">1</div>
						<div class="line number2 index1 alt1">2</div>
						<div class="line number3 index2 alt2">3</div>
						<div class="line number4 index3 alt1">4</div>
						<div class="line number5 index4 alt2">5</div>
						<div class="line number6 index5 alt1">6</div>
						<div class="line number7 index6 alt2">7</div>
						<div class="line number8 index7 alt1">8</div>
						<div class="line number9 index8 alt2">9</div>
						<div class="line number10 index9 alt1">10</div>
						<div class="line number11 index10 alt2">11</div>
						<div class="line number12 index11 alt1">12</div>
						<div class="line number13 index12 alt2">13</div>
						<div class="line number14 index13 alt1">14</div>
						<div class="line number15 index14 alt2">15</div>
						<div class="line number16 index15 alt1">16</div>
						<div class="line number17 index16 alt2">17</div>
						<div class="line number18 index17 alt1">18</div>
						<div class="line number19 index18 alt2">19</div>
						<div class="line number20 index19 alt1">20</div>
						<div class="line number21 index20 alt2">21</div>
						<div class="line number22 index21 alt1">22</div>
					</td>
					<td class="code">
						<div class="container">
							<div class="line number1 index0 alt2"><code class="javascript comments">//You need an
								anonymous function to wrap around your function to avoid conflict</code></div>
							<div class="line number2 index1 alt1"><code class="javascript plain">(</code><code
									class="javascript keyword">function</code><code class="javascript plain">($){</code>
							</div>
							<div class="line number3 index2 alt2">&nbsp;</div>
							<div class="line number4 index3 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Attach this new method to jQuery</code></div>
							<div class="line number5 index4 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$.fn.extend({ </code></div>
							<div class="line number6 index5 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number7 index6 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//This is where you write your plugin's name</code>
							</div>
							<div class="line number8 index7 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">pluginname: </code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number9 index8 alt2">&nbsp;</div>
							<div class="line number10 index9 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Iterate over the current set of matched
								elements</code></div>
							<div class="line number11 index10 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">return</code> <code
									class="javascript keyword">this</code><code
									class="javascript plain">.each(</code><code
									class="javascript keyword">function</code><code class="javascript plain">() {</code>
							</div>
							<div class="line number12 index11 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number13 index12 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//code to be inserted here</code></div>
							<div class="line number14 index13 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number15 index14 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number16 index15 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}</code></div>
							<div class="line number17 index16 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number18 index17 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number19 index18 alt2"><code class="javascript comments">//pass jQuery to
								the function, </code></div>
							<div class="line number20 index19 alt1"><code class="javascript comments">//So that we will
								able to use any valid Javascript variable name </code></div>
							<div class="line number21 index20 alt2"><code class="javascript comments">//to replace "$"
								SIGN. But, we'll stick to $ (I like dollar sign: )
								)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code></div>
							<div class="line number22 index21 alt1"><code class="javascript plain">})(jQuery);</code>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<hr/>
<h2><span>3)</span> Plugin With Options</h2>

<p>If you look at step one - Introduction, the "padding" value for this
	plugin is user configurable. It good to have some settings so that user
	able to chage it according to their own needs. Please make sure you
	specify the default values for each of the variables for good practise.
	Now, you'll need the following code: </p>

<div>
	<div id="highlighter_499199" class="syntaxhighlighter  javascript">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td class="gutter">
						<div class="line number1 index0 alt2">1</div>
						<div class="line number2 index1 alt1">2</div>
						<div class="line number3 index2 alt2">3</div>
						<div class="line number4 index3 alt1">4</div>
						<div class="line number5 index4 alt2">5</div>
						<div class="line number6 index5 alt1">6</div>
						<div class="line number7 index6 alt2">7</div>
						<div class="line number8 index7 alt1">8</div>
						<div class="line number9 index8 alt2">9</div>
						<div class="line number10 index9 alt1">10</div>
						<div class="line number11 index10 alt2">11</div>
						<div class="line number12 index11 alt1">12</div>
						<div class="line number13 index12 alt2">13</div>
						<div class="line number14 index13 alt1">14</div>
						<div class="line number15 index14 alt2">15</div>
						<div class="line number16 index15 alt1">16</div>
						<div class="line number17 index16 alt2">17</div>
						<div class="line number18 index17 alt1">18</div>
						<div class="line number19 index18 alt2">19</div>
						<div class="line number20 index19 alt1">20</div>
						<div class="line number21 index20 alt2">21</div>
						<div class="line number22 index21 alt1">22</div>
						<div class="line number23 index22 alt2">23</div>
						<div class="line number24 index23 alt1">24</div>
						<div class="line number25 index24 alt2">25</div>
						<div class="line number26 index25 alt1">26</div>
						<div class="line number27 index26 alt2">27</div>
						<div class="line number28 index27 alt1">28</div>
						<div class="line number29 index28 alt2">29</div>
					</td>
					<td class="code">
						<div class="container">
							<div class="line number1 index0 alt2"><code class="javascript plain">(</code><code
									class="javascript keyword">function</code><code class="javascript plain">($){</code>
							</div>
							<div class="line number2 index1 alt1">&nbsp;</div>
							<div class="line number3 index2 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$.fn.extend({ </code></div>
							<div class="line number4 index3 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number5 index4 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//pass the options variable to the function</code></div>
							<div class="line number6 index5 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">pluginname: </code><code class="javascript keyword">function</code><code
									class="javascript plain">(options) {</code></div>
							<div class="line number7 index6 alt2">&nbsp;</div>
							<div class="line number8 index7 alt1">&nbsp;</div>
							<div class="line number9 index8 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Set the default values, use comma to separate the
								settings, example:</code></div>
							<div class="line number10 index9 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">defaults =
								{</code></div>
							<div class="line number11 index10 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">padding: 20,</code></div>
							<div class="line number12 index11 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">mouseOverColor : </code><code class="javascript string">'#000000'</code><code
									class="javascript plain">,</code></div>
							<div class="line number13 index12 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">mouseOutColor : </code><code class="javascript string">'#ffffff'</code>
							</div>
							<div class="line number14 index13 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}</code></div>
							<div class="line number15 index14 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number16 index15 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">options =&nbsp;
								$.extend(defaults, options);</code></div>
							<div class="line number17 index16 alt2">&nbsp;</div>
							<div class="line number18 index17 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">return</code> <code
									class="javascript keyword">this</code><code
									class="javascript plain">.each(</code><code
									class="javascript keyword">function</code><code class="javascript plain">() {</code>
							</div>
							<div class="line number19 index18 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">o =
								options;</code></div>
							<div class="line number20 index19 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number21 index20 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//code to be inserted here</code></div>
							<div class="line number22 index21 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//you can access the value like this</code></div>
							<div class="line number23 index22 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">alert(o.padding);</code></div>
							<div class="line number24 index23 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number25 index24 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number26 index25 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}</code></div>
							<div class="line number27 index26 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number28 index27 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number29 index28 alt2"><code class="javascript plain">})(jQuery);</code>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<hr/>
<h2><span>4)</span> The animatePlugin Menu</h2>

<p>Now you have learnt the plugin structure. The following is the plugin
	I created based on my previous tutorial. I have successfull convert the
	standard jQuery script to a plugin that accepts 4 configurations:</p>
<ul class="fancybulletBig">
	<li><span class="bold">animatePadding : </span> Set the padding value for the animate effect</li>
	<li><span class="bold">defaultPadding : </span> Set the default padding value</li>
	<li><span class="bold">evenColor : </span>Set the color this color if index value is even number</li>
	<li><span class="bold">oddColor : </span> Set the color this color if index value is odd number</li>
</ul>
<div>
	<div id="highlighter_562060" class="syntaxhighlighter  javascript">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td class="gutter">
						<div class="line number1 index0 alt2">1</div>
						<div class="line number2 index1 alt1">2</div>
						<div class="line number3 index2 alt2">3</div>
						<div class="line number4 index3 alt1">4</div>
						<div class="line number5 index4 alt2">5</div>
						<div class="line number6 index5 alt1">6</div>
						<div class="line number7 index6 alt2">7</div>
						<div class="line number8 index7 alt1">8</div>
						<div class="line number9 index8 alt2">9</div>
						<div class="line number10 index9 alt1">10</div>
						<div class="line number11 index10 alt2">11</div>
						<div class="line number12 index11 alt1">12</div>
						<div class="line number13 index12 alt2">13</div>
						<div class="line number14 index13 alt1">14</div>
						<div class="line number15 index14 alt2">15</div>
						<div class="line number16 index15 alt1">16</div>
						<div class="line number17 index16 alt2">17</div>
						<div class="line number18 index17 alt1">18</div>
						<div class="line number19 index18 alt2">19</div>
						<div class="line number20 index19 alt1">20</div>
						<div class="line number21 index20 alt2">21</div>
						<div class="line number22 index21 alt1">22</div>
						<div class="line number23 index22 alt2">23</div>
						<div class="line number24 index23 alt1">24</div>
						<div class="line number25 index24 alt2">25</div>
						<div class="line number26 index25 alt1">26</div>
						<div class="line number27 index26 alt2">27</div>
						<div class="line number28 index27 alt1">28</div>
						<div class="line number29 index28 alt2">29</div>
						<div class="line number30 index29 alt1">30</div>
						<div class="line number31 index30 alt2">31</div>
						<div class="line number32 index31 alt1">32</div>
						<div class="line number33 index32 alt2">33</div>
						<div class="line number34 index33 alt1">34</div>
						<div class="line number35 index34 alt2">35</div>
						<div class="line number36 index35 alt1">36</div>
						<div class="line number37 index36 alt2">37</div>
						<div class="line number38 index37 alt1">38</div>
						<div class="line number39 index38 alt2">39</div>
						<div class="line number40 index39 alt1">40</div>
					</td>
					<td class="code">
						<div class="container">
							<div class="line number1 index0 alt2"><code class="javascript plain">(</code><code
									class="javascript keyword">function</code><code class="javascript plain">($){</code>
							</div>
							<div class="line number2 index1 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$.fn.extend({ </code></div>
							<div class="line number3 index2 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//plugin name - animatemenu</code></div>
							<div class="line number4 index3 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">animateMenu: </code><code class="javascript keyword">function</code><code
									class="javascript plain">(options) {</code></div>
							<div class="line number5 index4 alt2">&nbsp;</div>
							<div class="line number6 index5 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Settings list and the default values</code></div>
							<div class="line number7 index6 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">defaults =
								{</code></div>
							<div class="line number8 index7 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">animatePadding: 60,</code></div>
							<div class="line number9 index8 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">defaultPadding: 10,</code></div>
							<div class="line number10 index9 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">evenColor: </code><code
									class="javascript string">'#ccc'</code><code class="javascript plain">,</code></div>
							<div class="line number11 index10 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">oddColor: </code><code
									class="javascript string">'#eee'</code></div>
							<div class="line number12 index11 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">};</code></div>
							<div class="line number13 index12 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number14 index13 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">options =
								$.extend(defaults, options);</code></div>
							<div class="line number15 index14 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number16 index15 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">return</code> <code
									class="javascript keyword">this</code><code
									class="javascript plain">.each(</code><code
									class="javascript keyword">function</code><code class="javascript plain">() {</code>
							</div>
							<div class="line number17 index16 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">o
								=options;</code></div>
							<div class="line number18 index17 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number19 index18 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Assign current element to variable, in this case is UL
								element</code></div>
							<div class="line number20 index19 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">obj = $(</code><code
									class="javascript keyword">this</code><code class="javascript plain">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code>
							</div>
							<div class="line number21 index20 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number22 index21 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Get all LI in the UL</code></div>
							<div class="line number23 index22 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">items =
								$(</code><code class="javascript string">"li"</code><code class="javascript plain">,
								obj);</code></div>
							<div class="line number24 index23 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number25 index24 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Change the color according to odd and even rows</code>
							</div>
							<div class="line number26 index25 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code
									class="javascript string">"li:even"</code><code class="javascript plain">,
								obj).css(</code><code class="javascript string">'background-color'</code><code
									class="javascript plain">, o.evenColor);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code>
							</div>
							<div class="line number27 index26 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code
									class="javascript string">"li:odd"</code><code class="javascript plain">,
								obj).css(</code><code class="javascript string">'background-color'</code><code
									class="javascript plain">,
								o.oddColor);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code>
							</div>
							<div class="line number28 index27 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number29 index28 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//Attach mouseover and mouseout event to the
								LI&nbsp; </code></div>
							<div class="line number30 index29 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">items.mouseover(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number31 index30 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate({paddingLeft: o.animatePadding}, 300);</code>
							</div>
							<div class="line number32 index31 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number33 index32 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}).mouseout(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number34 index33 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate({paddingLeft: o.defaultPadding}, 300);</code>
							</div>
							<div class="line number35 index34 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number36 index35 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number37 index36 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number38 index37 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}</code></div>
							<div class="line number39 index38 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number40 index39 alt1"><code class="javascript plain">})(jQuery);</code>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<hr/>
<h2><span>5)</span> Full Source Code</h2>

<p>You can save the plugin in a separated file (for example,
	jquery.animatemenu.js). In this tutorial, I put the script in the html
	document.</p>

<div>
	<div id="highlighter_295622" class="syntaxhighlighter  javascript">
		<table border="0" cellpadding="0" cellspacing="0">
			<tbody>
				<tr>
					<td class="gutter">
						<div class="line number1 index0 alt2">1</div>
						<div class="line number2 index1 alt1">2</div>
						<div class="line number3 index2 alt2">3</div>
						<div class="line number4 index3 alt1">4</div>
						<div class="line number5 index4 alt2">5</div>
						<div class="line number6 index5 alt1">6</div>
						<div class="line number7 index6 alt2">7</div>
						<div class="line number8 index7 alt1">8</div>
						<div class="line number9 index8 alt2">9</div>
						<div class="line number10 index9 alt1">10</div>
						<div class="line number11 index10 alt2">11</div>
						<div class="line number12 index11 alt1">12</div>
						<div class="line number13 index12 alt2">13</div>
						<div class="line number14 index13 alt1">14</div>
						<div class="line number15 index14 alt2">15</div>
						<div class="line number16 index15 alt1">16</div>
						<div class="line number17 index16 alt2">17</div>
						<div class="line number18 index17 alt1">18</div>
						<div class="line number19 index18 alt2">19</div>
						<div class="line number20 index19 alt1">20</div>
						<div class="line number21 index20 alt2">21</div>
						<div class="line number22 index21 alt1">22</div>
						<div class="line number23 index22 alt2">23</div>
						<div class="line number24 index23 alt1">24</div>
						<div class="line number25 index24 alt2">25</div>
						<div class="line number26 index25 alt1">26</div>
						<div class="line number27 index26 alt2">27</div>
						<div class="line number28 index27 alt1">28</div>
						<div class="line number29 index28 alt2">29</div>
						<div class="line number30 index29 alt1">30</div>
						<div class="line number31 index30 alt2">31</div>
						<div class="line number32 index31 alt1">32</div>
						<div class="line number33 index32 alt2">33</div>
						<div class="line number34 index33 alt1">34</div>
						<div class="line number35 index34 alt2">35</div>
						<div class="line number36 index35 alt1">36</div>
						<div class="line number37 index36 alt2">37</div>
						<div class="line number38 index37 alt1">38</div>
						<div class="line number39 index38 alt2">39</div>
						<div class="line number40 index39 alt1">40</div>
						<div class="line number41 index40 alt2">41</div>
						<div class="line number42 index41 alt1">42</div>
						<div class="line number43 index42 alt2">43</div>
						<div class="line number44 index43 alt1">44</div>
						<div class="line number45 index44 alt2">45</div>
						<div class="line number46 index45 alt1">46</div>
						<div class="line number47 index46 alt2">47</div>
						<div class="line number48 index47 alt1">48</div>
						<div class="line number49 index48 alt2">49</div>
						<div class="line number50 index49 alt1">50</div>
						<div class="line number51 index50 alt2">51</div>
						<div class="line number52 index51 alt1">52</div>
						<div class="line number53 index52 alt2">53</div>
						<div class="line number54 index53 alt1">54</div>
						<div class="line number55 index54 alt2">55</div>
						<div class="line number56 index55 alt1">56</div>
						<div class="line number57 index56 alt2">57</div>
						<div class="line number58 index57 alt1">58</div>
						<div class="line number59 index58 alt2">59</div>
						<div class="line number60 index59 alt1">60</div>
						<div class="line number61 index60 alt2">61</div>
						<div class="line number62 index61 alt1">62</div>
						<div class="line number63 index62 alt2">63</div>
						<div class="line number64 index63 alt1">64</div>
						<div class="line number65 index64 alt2">65</div>
						<div class="line number66 index65 alt1">66</div>
						<div class="line number67 index66 alt2">67</div>
						<div class="line number68 index67 alt1">68</div>
						<div class="line number69 index68 alt2">69</div>
					</td>
					<td class="code">
						<div class="container">
							<div class="line number1 index0 alt2"><code class="javascript plain">&lt;!DOCTYPE html
								PUBLIC </code><code class="javascript string">"-//W3C//DTD XHTML 1.0
								Transitional//EN"</code></div>
							<div class="line number2 index1 alt1"><code class="javascript string">"<a
									href="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd</a>"</code><code
									class="javascript plain">&gt;</code></div>
							<div class="line number3 index2 alt2"><code class="javascript plain">&lt;html
								xmlns=</code><code class="javascript string">"<a href="http://www.w3.org/1999/xhtml">http://www.w3.org/1999/xhtml</a>"</code>
								<code class="javascript plain">lang=</code><code class="javascript string">"en"</code>
								<code class="javascript plain">xml:lang=</code><code
										class="javascript string">"en"</code><code class="javascript plain">&gt;</code>
							</div>
							<div class="line number4 index3 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number5 index4 alt2"><code class="javascript plain">&lt;head&gt;</code>
							</div>
							<div class="line number6 index5 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;title&gt;&lt;/title&gt;</code></div>
							<div class="line number7 index6 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;script type=</code><code class="javascript string">"text/javascript"</code>
								<code class="javascript plain">src=</code><code class="javascript string">"<a
										href="http://code.jquery.com/jquery-latest.js">http://code.jquery.com/jquery-latest.js</a>"</code><code
										class="javascript plain">&gt;&lt;/script&gt;</code></div>
							<div class="line number8 index7 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;script&gt;</code></div>
							<div class="line number9 index8 alt2">&nbsp;</div>
							<div class="line number10 index9 alt1"><code class="javascript plain">(</code><code
									class="javascript keyword">function</code><code class="javascript plain">($){</code>
							</div>
							<div class="line number11 index10 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$.fn.extend({ </code></div>
							<div class="line number12 index11 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript comments">//plugin name - animatemenu</code></div>
							<div class="line number13 index12 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">animateMenu: </code><code class="javascript keyword">function</code><code
									class="javascript plain">(options) {</code></div>
							<div class="line number14 index13 alt1">&nbsp;</div>
							<div class="line number15 index14 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">defaults =
								{</code></div>
							<div class="line number16 index15 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">animatePadding: 60,</code></div>
							<div class="line number17 index16 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">defaultPadding: 10,</code></div>
							<div class="line number18 index17 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">evenColor: </code><code
									class="javascript string">'#ccc'</code><code class="javascript plain">,</code></div>
							<div class="line number19 index18 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">oddColor: </code><code
									class="javascript string">'#eee'</code><code class="javascript plain">,</code></div>
							<div class="line number20 index19 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">};</code></div>
							<div class="line number21 index20 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number22 index21 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">options =
								$.extend(defaults, options);</code></div>
							<div class="line number23 index22 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number24 index23 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">return</code> <code
									class="javascript keyword">this</code><code
									class="javascript plain">.each(</code><code
									class="javascript keyword">function</code><code class="javascript plain">() {</code>
							</div>
							<div class="line number25 index24 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">o
								=options;</code></div>
							<div class="line number26 index25 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">obj = $(</code><code
									class="javascript keyword">this</code><code class="javascript plain">);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code>
							</div>
							<div class="line number27 index26 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript keyword">var</code> <code class="javascript plain">items =
								$(</code><code class="javascript string">"li"</code><code class="javascript plain">,
								obj);</code></div>
							<div class="line number28 index27 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number29 index28 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code
									class="javascript string">"li:even"</code><code class="javascript plain">,
								obj).css(</code><code class="javascript string">'background-color'</code><code
									class="javascript plain">, o.evenColor);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code>
							</div>
							<div class="line number30 index29 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code
									class="javascript string">"li:odd"</code><code class="javascript plain">,
								obj).css(</code><code class="javascript string">'background-color'</code><code
									class="javascript plain">, o.oddColor);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </code>
							</div>
							<div class="line number31 index30 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number32 index31 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">items.mouseover(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number33 index32 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate({paddingLeft: o.animatePadding}, 300);</code>
							</div>
							<div class="line number34 index33 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number35 index34 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}).mouseout(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number36 index35 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code class="javascript keyword">this</code><code
									class="javascript plain">).animate({paddingLeft: o.defaultPadding}, 300);</code>
							</div>
							<div class="line number37 index36 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number38 index37 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number39 index38 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number40 index39 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}</code></div>
							<div class="line number41 index40 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">});</code></div>
							<div class="line number42 index41 alt1"><code class="javascript plain">})(jQuery);</code>
							</div>
							<div class="line number43 index42 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number44 index43 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;/script&gt;</code></div>
							<div class="line number45 index44 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>&nbsp;
							</div>
							<div class="line number46 index45 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;script type=</code><code class="javascript string">"text/javascript"</code><code
									class="javascript plain">&gt;</code></div>
							<div class="line number47 index46 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(document).ready(</code><code class="javascript keyword">function</code><code
									class="javascript plain">() {</code></div>
							<div class="line number48 index47 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">$(</code><code
									class="javascript string">'#menu'</code><code class="javascript plain">).animateMenu({animatePadding:
								30, defaultPadding:10});</code></div>
							<div class="line number49 index48 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">}); </code></div>
							<div class="line number50 index49 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;/script&gt;</code></div>
							<div class="line number51 index50 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;style&gt;</code></div>
							<div class="line number52 index51 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">body {font-family:arial;font-style:bold}</code></div>
							<div class="line number53 index52 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">a {color:</code><code class="javascript preprocessor">#666;
								text-decoration:none}</code></div>
							<div class="line number54 index53 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript preprocessor">#menu
								{list-style:none;width:160px;padding-left:10px;}</code></div>
							<div class="line number55 index54 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript preprocessor">#menu li
								{margin:0;padding:5px;cursor:hand;cursor:pointer}</code></div>
							<div class="line number56 index55 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;/style&gt;</code></div>
							<div class="line number57 index56 alt2"><code class="javascript plain">&lt;/head&gt;&nbsp;&nbsp; </code>
							</div>
							<div class="line number58 index57 alt1"><code class="javascript plain">&lt;body&gt;</code>
							</div>
							<div class="line number59 index58 alt2">&nbsp;</div>
							<div class="line number60 index59 alt1"><code class="javascript plain">&lt;ul
								id=</code><code class="javascript string">"menu"</code><code class="javascript plain">
								&gt;</code></div>
							<div class="line number61 index60 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;li&gt;Home&lt;/li&gt;</code></div>
							<div class="line number62 index61 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;li&gt;Posts&lt;/li&gt;</code></div>
							<div class="line number63 index62 alt2"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;li&gt;About&lt;/li&gt;</code></div>
							<div class="line number64 index63 alt1"><code class="javascript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code
									class="javascript plain">&lt;li&gt;Contact&lt;/li&gt;</code></div>
							<div class="line number65 index64 alt2"><code class="javascript plain">&lt;/ul&gt;</code>
							</div>
							<div class="line number66 index65 alt1">&nbsp;</div>
							<div class="line number67 index66 alt2"><code class="javascript plain">&lt;/body&gt;</code>
							</div>
							<div class="line number68 index67 alt1"><code class="javascript plain">&lt;/html&gt;</code>
							</div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<hr/>
<h2><span>6)</span> Conclusion</h2>

<p>I hope this tutorial will give you a better understanding. It isn't
	too hard at all to create a jQuery plugin. I was reluctantly to learn at
	first, but now, I realized how simple it is. </p>

<p>I will be publishing another tutorial soon - How to create a simple Accordion jQuery Plugin. So, stay tuned.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
