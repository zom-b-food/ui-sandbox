<!DOCTYPE html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link href="jqMethods/style.css" rel="stylesheet" type="text/css" media="screen"/>
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

<h1>20 Most-Helpful jQuery Methods</h1>

<div style="float:right; margin-top:14px; padding-right:22px;">
	<a href="javascript:window.close()">Close Window</a>
</div>
<!-- Page -->
<div id="page">

<div class="post">
	<div class="tut_top">
		<!-- Post Image -->
		<div class="post_image"><a href="http://net.tutsplus.com/tutorials/javascript-ajax/20-helpful-jquery-methods-you-should-be-using/"><img src="${contextPath}/articles/jqMethods/200.jpg" alt="20 Helpful jQuery Methods you Should be Using" height="200" width="200"/></a></div>
		<div class="preview">
			<!-- Post Taxonomies -->
			<div class="post_taxonomy">
				<ul>
					<li><a href="http://net.tutsplus.com/category/tutorials/">Tutorials</a><span>\</span></li>
					<li><a href="http://net.tutsplus.com/category/articles/web-roundups/">Web Roundups</a></li>
				</ul>
			</div>
			<!-- Post Title -->
			<h1 class="post_title"> 20 jQuery Methods you Should be Using </h1>
			<!-- Post Meta -->
			<div class="post_meta"><a href="http://net.tutsplus.com/author/andrewburgess/" title="Posts by Andrew Burgess" rel="author">Andrew Burgess</a> on Jun 9th 2011.
				<h4>The article in its entirety can be found here:<br/><a href="http://http://net.tutsplus.com/tutorials/javascript-ajax/20-helpful-jquery-methods-you-should-be-using/">20 Helpful jQuery Methods you Should be Using<br/> - by Andrew Burgess</a></h4>
			</div>

		</div>
	</div>
</div>

<p>So you've been playing with jQuery for a while now, you're
   starting to get the hang of it, and you're really liking it! Are you
   ready to take your jQuery knowledge to level two? Today, I'll
   demonstrate twenty functions and features you probably haven't seen
   before!</p>
<hr/>
<h2><span>1)</span> after() / before()</h2>

<p>Sometimes you want to insert something into the DOM, but you don't have any good hooks to do it with; <code>append()</code> or <code>prepend()</code> aren't going to cut it and you don't want to add an extra element or
   id. These two functions might be what you need. They allow you to insert
   elements into the DOM just before or after another element, so the new
   element is a sibling of the older one. </p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#child'</span><span>).after($(</span><span class="string">'&lt;p&nbsp;/&gt;'</span><span>)).text(</span><span class="string">'This&nbsp;becomes&nbsp;a&nbsp;sibling&nbsp;of&nbsp;#child'</span><span>));&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'#child'</span><span>).before($(</span><span class="string">'&lt;p&nbsp;/&gt;'</span><span>)).text(</span><span class="string">'Same&nbsp;here,&nbsp;but&nbsp;this&nbsp;is&nbsp;go&nbsp;about&nbsp;#child'</span><span>));&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#child').after($('&lt;p /&gt;')).text('This becomes a sibling of #child'));
$('#child').before($('&lt;p /&gt;')).text('Same here, but this is go about #child'));
</pre>
<p>You can also do this if you're working primarily with the element you want to insert; just use the <code>insertAfter()</code> or <code>insertBefore</code> functions.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'&lt;p&gt;I\'ll&nbsp;be&nbsp;a&nbsp;sibling&nbsp;of&nbsp;#child&lt;/p&gt;'</span><span>).insertAfter($(</span><span class="string">'#child'</span><span>));&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('&lt;p&gt;I\'ll be a sibling of #child&lt;/p&gt;').insertAfter($('#child'));
</pre>
<hr/>
<h2><span>2)</span> change()</h2>

<p>The <code>change()</code> method is an event handler, just like <code>click()</code> or <code>hover()</code>.
   The change event is for textareas, text inputs, and select boxes, and
   it will fire when the value of the target element is changed; note that
   this is different from the <code>focusOut()</code> or <code>blur()</code> event handlers, which fire when the element loses focus, whether its value has changed or not.</p>

<p>The <code>change()</code> event is perfect for client-side validation; it's much better than <code>blur()</code>, because you won't be re-validating fields if the user doesn't change the value.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'input[type=text]'</span><span>).change(</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">switch</span><span>&nbsp;(</span><span class="keyword">this</span><span>.id)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">/*&nbsp;some&nbsp;validation&nbsp;code&nbsp;here&nbsp;*/</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li>
		<li class="alt"><span>});??????????&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('input[type=text]').change(function () {
    switch (this.id) {
        /* some validation code here */
    }
});??????????
</pre>
<hr/>
<h2><span>3)</span> Context</h2>

<p>Context is both a parameter and a property in jQuery. When collecting
   elements, you can pass in a second parameter to the jQuery function.
   This parameter, the context, will usually be a DOM element, and it
   limits the elements returned to item matching your selector that are
   children of the context element. That might sound a bit confusing, so
   check out this example:</p>

<div class="dp-highlighter">

	<ol class="dp-xml" start="1">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">p</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"hello"</span><span class="tag">&gt;</span><span>Hello&nbsp;World</span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;</span><span class="tag-name">div</span><span>&nbsp;</span><span class="attribute">id</span><span>=</span><span class="attribute-value">"wrap"</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">p</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"hello"</span><span class="tag">&gt;</span><span>Hello&nbsp;World</span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="html">&lt;p class="hello"&gt;Hello World&lt;/p&gt;
&lt;div id="wrap"&gt;
    &lt;p class="hello"&gt;Hello World&lt;/p&gt;
&lt;/div&gt;
</pre>
<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span class="keyword">var</span><span>&nbsp;hi1&nbsp;=&nbsp;$(</span><span class="string">'.hello'</span><span>),&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;hi2&nbsp;=&nbsp;$(<span class="string">'.hello'</span><span>,&nbsp;$(</span><span class="string">'#wrap'</span><span>).get(0));&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;</span></li>
		<li class=""><span>console.group(<span class="string">'hi1'</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>console.log(<span class="string">"Number&nbsp;of&nbsp;elements&nbsp;in&nbsp;collection:"</span><span>,&nbsp;hi1.length);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>console.log(<span class="string">"Context&nbsp;of&nbsp;the&nbsp;collection:"</span><span>,&nbsp;hi1.context);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>console.groupEnd();&nbsp;&nbsp;</span></li>
		<li class=""><span>console.group(<span class="string">'hi2'</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>console.log(<span class="string">"Number&nbsp;of&nbsp;elements&nbsp;in&nbsp;collection:"</span><span>,&nbsp;hi2.length);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>console.log(<span class="string">"Context&nbsp;of&nbsp;the&nbsp;collection:"</span><span>,&nbsp;hi2.context);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>console.groupEnd();&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">var hi1 = $('.hello'),
    hi2 = $('.hello', $('#wrap').get(0));

console.group('hi1');
console.log("Number of elements in collection:", hi1.length);
console.log("Context of the collection:", hi1.context);
console.groupEnd();
console.group('hi2');
console.log("Number of elements in collection:", hi2.length);
console.log("Context of the collection:", hi2.context);
console.groupEnd();
</pre>
<div class="tutorial_image"><img style="display: inline;" src="context.jpg" alt="context example"/></div>
<p>So where would this be useful? One place might be inside an event
   handler function. If you'd like to get an element within the one the
   event was fired on, you could pass <code>this</code> as the context:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'ul#options&nbsp;li'</span><span>).click(</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="string">'a'</span><span>,&nbsp;</span><span class="keyword">this</span><span>)&nbsp;.&nbsp;.&nbsp;.&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>});&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('ul#options li').click(function () {
    $('a', this) . . .
});
</pre>
<hr/>
<h2><span>4)</span> data() / removeData()</h2>

<p>Have you ever wanted to store some bit of information about an element? You can do that easily with the <code>data()</code> method. To set a value, you can pass in two parameters (a key and a value) or just one (an object).</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#wrap'</span><span>).data(</span><span class="string">'myKey'</span><span>,&nbsp;</span><span class="string">'myValue'</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'#container'</span><span>).data({&nbsp;myOtherKey&nbsp;:&nbsp;</span><span class="string">'myOtherValue'</span><span>,&nbsp;year&nbsp;:&nbsp;2010&nbsp;});&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#wrap').data('myKey', 'myValue');
$('#container').data({ myOtherKey : 'myOtherValue', year : 2010 });
</pre>
<p>To get your data back, just call the method with the key of value you want.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#container'</span><span>).data(</span><span class="string">'myOtherKey'</span><span>);&nbsp;</span><span class="comment">//returns&nbsp;'myOtherValue'</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'#container'</span><span>).data(</span><span class="string">'year'</span><span>);&nbsp;</span><span class="comment">//returns&nbsp;2010</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#container').data('myOtherKey'); //returns 'myOtherValue'
$('#container').data('year'); //returns 2010
</pre>
<p>To get all the data that corresponds with an element, call data
   without any parameters; you'll get an object with all the keys and
   values you've given to that item.<br/>
   If you want to delete a key/value pair after you've added it to an element, just call <code>removeData()</code>, passing in the correct key.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#container'</span><span>).removeData(</span><span class="string">'myOtherKey'</span><span>);&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#container').removeData('myOtherKey');
</pre>
<hr/>
<h2><span>5)</span> queue() / dequeue()</h2>

<p>The <code>queue()</code> and <code>dequeue()</code> functions deal
   with animations. A queue is list of animations to be executed on an
   element; be default, an element's queue is named ?fx.' Let's set up a
   scenario:</p>

<h4>HTML</h4>

<div class="dp-highlighter">

	<ol class="dp-xml" start="1">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">ul</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">li</span><span>&nbsp;</span><span class="attribute">id</span><span>=</span><span class="attribute-value">"start"</span><span class="tag">&gt;</span><span>Start&nbsp;Animating</span><span class="tag">&lt;/</span><span class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">li</span><span>&nbsp;</span><span class="attribute">id</span><span>=</span><span class="attribute-value">"reset"</span><span class="tag">&gt;</span><span>Stop&nbsp;Animating</span><span class="tag">&lt;/</span><span class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">li</span><span>&nbsp;</span><span class="attribute">id</span><span>=</span><span class="attribute-value">"add"</span><span class="tag">&gt;</span><span>Add&nbsp;to&nbsp;Queue</span><span class="tag">&lt;/</span><span class="tag-name">li</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span><span class="tag">&lt;/</span><span class="tag-name">ul</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;</span><span class="tag-name">div</span><span>&nbsp;</span><span class="attribute">style</span><span>=</span><span class="attribute-value">"width:150px;&nbsp;height:150px;&nbsp;background:#ececec;"</span><span class="tag">&gt;</span><span class="tag">&lt;/</span><span class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="html">&lt;ul&gt;
  &lt;li id="start"&gt;Start Animating&lt;/li&gt;
  &lt;li id="reset"&gt;Stop Animating&lt;/li&gt;
  &lt;li id="add"&gt;Add to Queue&lt;/li&gt;
&lt;/ul&gt;
&lt;div style="width:150px; height:150px; background:#ececec;"&gt;&lt;/div&gt;
</pre>
<h4>JavaScript</h4>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#start'</span><span>).click(animateBox);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>$(<span class="string">'#reset'</span><span>).click(</span><span class="keyword">function</span><span>()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="string">'div'</span><span>).queue(</span><span class="string">'fx'</span><span>,&nbsp;[]);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>});&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>$(<span class="string">'#add'</span><span>).click(</span><span class="keyword">function</span><span>()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="string">'div'</span><span>).queue(&nbsp;</span><span class="keyword">function</span><span>(){&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="keyword">this</span><span>).animate({&nbsp;height&nbsp;:&nbsp;</span><span class="string">'-=25'</span><span>},&nbsp;2000);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="keyword">this</span><span>).dequeue();&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;});&nbsp;&nbsp;</span></li>
		<li class=""><span>});&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;</span></li>
		<li class=""><span><span class="keyword">function</span><span>&nbsp;animateBox()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;$(<span class="string">'div'</span><span>).slideUp(2000)&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.slideDown(2000)&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.hide(2000)&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.show(2000,&nbsp;animateBox);&nbsp;&nbsp;</span></li>
		<li class="alt"><span>}&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#start').click(animateBox);

$('#reset').click(function() {
    $('div').queue('fx', []);
});

$('#add').click(function() {
    $('div').queue( function(){
        $(this).animate({ height : '-=25'}, 2000);
        $(this).dequeue();
    });
});

function animateBox() {
  $('div').slideUp(2000)
           .slideDown(2000)
           .hide(2000)
           .show(2000, animateBox);
}
</pre>
<p>So, here's what's going on: in the <code>animateBox</code> function,
   we're setting up a queue of animations; notice that the last one calls
   back to the function, so this will continually repeat the queue. When we
   click <code>li#start</code>, the function is called and the queue begins. When we click <code>li#reset</code>, the current animation finishes, and then the <code>div</code> stops animating. What we've done with jQuery is set the queue named
   ?fx' (remember, the default queue) to an empty array; essentially, we've
   emptied the queue. And what about when we click <code>li#add</code>? First, we're calling the <code>queue</code> function on the <code>div</code>;
   this adds the function we pass into it to the end of the queue; since
   we didn't specify a queue as the first parameter, ?fx' is used. In that
   function, we animate the <code>div</code>, and then call <code>dequeue()</code> on the div, which removes this function from the queue and continues
   the queue; the queue will continue repeating, but this function will not
   be part of it.</p>
<hr/>
<h2><span>6)</span> delay()</h2>

<p>When you're queuing up a chain of animations, you can use the <code>delay()</code> method to pause the animation for a length of time; pass that time as a parameter in milliseconds.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'div'</span><span>).hide().delay(2000).show();&nbsp;</span><span class="comment">//&nbsp;div&nbsp;will&nbsp;stay&nbsp;hidden&nbsp;for&nbsp;2&nbsp;seconds&nbsp;before&nbsp;showing.</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('div').hide().delay(2000).show(); // div will stay hidden for 2 seconds before showing.
</pre>
<hr/>
<h2><span>7)</span> bind(), unbind(), live(), and die()</h2>

<p>Did you know that when you add a click event to an element like this . . . </p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#el'</span><span>).click(</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;</span><span class="comment">/*******/</span><span>&nbsp;});&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#el').click(function () { /*******/ });
</pre>
<p>. . . you're really just using a wrapper for the <code>bind()</code> method? To use the <code>bind()</code> method itself, you can pass the event type as the first parameter and then the function as the second.</p>

<p> If you use a lot of events, you can categorize them with namespacing;
    just add a period after the event name and add your namespace.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#el'</span><span>).bind(</span><span class="string">'click'</span><span>,&nbsp;</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;</span><span class="comment">/*******/</span><span>&nbsp;});&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'#el'</span><span>).bind(</span><span class="string">'click.toolbarEvents'</span><span>,&nbsp;</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;</span><span class="comment">/*******/</span><span>&nbsp;});&nbsp;</span><span class="comment">//&nbsp;namespaced</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#el').bind('click', function () { /*******/ });
$('#el').bind('click.toolbarEvents', function () { /*******/ }); // namespaced
</pre>
<p>You can also assign the same function to multiple events at the same
   time, by separating them with spaces. So if you wanted to make a hover
   effect, you could start this way:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#el'</span><span>).bind(</span><span class="string">'mouseover&nbsp;mouseout'</span><span>,&nbsp;</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;</span><span class="comment">/*******/</span><span>&nbsp;});&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#el').bind('mouseover mouseout', function () { /*******/ });
</pre>
<p>You can also pass data to the function if you'd like, by adding a third parameter (in the second position).</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#el'</span><span>).bind(</span><span class="string">'click'</span><span>,&nbsp;{&nbsp;status&nbsp;:&nbsp;</span><span class="string">'user-ready'</span><span>&nbsp;},&nbsp;</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">switch</span><span>(event.data.status)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">/********/</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></li>
		<li class="alt"><span>});&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#el').bind('click', { status : 'user-ready' }, function () {
    switch(event.data.status) {
    /********/
    }
});
</pre>
<p>Sooner or later, you'll find yourself inserting element into the DOM
   via an event handler; however, you'll find that the event handlers
   you've made with bind (or its wrappers) don't work for inserted
   elements. In cases like this, you'll need to use the <code>live()</code> (or delegate) method; this will add the event handlers to the appropriate inserted elements.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'.toggle'</span><span>).live(</span><span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">/*&nbsp;code&nbsp;*/</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="string">'&lt;span&nbsp;class="toggle"&gt;Enable&nbsp;Beta&nbsp;Features&lt;/span&gt;'</span><span>).appendTo($(</span><span class="string">'#optionsPanel'</span><span>));&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="comment">/*&nbsp;more&nbsp;code&nbsp;*/</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>});&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('.toggle').live(function () {
    /* code */
    $('&lt;span class="toggle"&gt;Enable Beta Features&lt;/span&gt;').appendTo($('#optionsPanel'));
    /* more code */
});
</pre>
<p>To remove event handlers created with <code>bind()</code>, use the <code>unbind()</code> method. If you don't pass it any parameters, it will remove all the
   handlers; you can pass in the event type to only remove event handlers
   of that type; to remove events from a specific namespace, add the
   namespace, or use it alone. If you just want to remove a certain
   function, pass its name along as the second parameter.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'button'</span><span>).unbind();&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;all</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'button'</span><span>).unbind(</span><span class="string">'click'</span><span>);&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;all&nbsp;clicks</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">'button'</span><span>).unbind(</span><span class="string">'.toolbarEvents'</span><span>);&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;all&nbsp;events&nbsp;from&nbsp;the&nbsp;toolbarEvents&nbsp;namespace</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'button'</span><span>).unbind(</span><span class="string">'click.toolbarEvents'</span><span>);&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;all&nbsp;clicks&nbsp;from&nbsp;the&nbsp;toolbarEvents&nbsp;namespace</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">'button'</span><span>).unbind(</span><span class="string">'click'</span><span>,&nbsp;myFunction);&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;that&nbsp;one&nbsp;handler</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('button').unbind(); // removes all
$('button').unbind('click'); // removes all clicks
$('button').unbind('.toolbarEvents'); // removes all events from the toolbarEvents namespace
$('button').unbind('click.toolbarEvents'); // removes all clicks from the toolbarEvents namespace
$('button').unbind('click', myFunction); // removes that one handler
</pre>
<p>Note that you can bind/unbind functions you've passed in anonymously; this only works with the functions name.<br/>
   If you're trying to unbind an event from inside the function called by the event, just pass <code>unbind()</code> the <code>event</code> object.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'p'</span><span>).bind(</span><span class="string">'click'</span><span>,&nbsp;</span><span class="keyword">function</span><span>&nbsp;(event)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;$(<span class="string">'p'</span><span>).unbind(event);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>}&nbsp;);&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('p').bind('click', function (event) {
    $('p').unbind(event);
} );
</pre>
<p>You can't use <code>unbind()</code> for <code>live</code> events; instead, use the <code>die()</code>. Without parameters, it will remove all <code>live</code> events from the element collection; you can also pass it just the event type, of the event type and the function. </p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'span'</span><span>).die();&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;all</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'span'</span><span>).die(</span><span class="string">'mouseover'</span><span>);&nbsp;</span><span class="comment">//&nbsp;removes&nbsp;all&nbsp;mouseovers</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">'span'</span><span>).die(</span><span class="string">'mouseover'</span><span>,&nbsp;fn);&nbsp;</span><span class="comment">//&nbsp;remove&nbsp;that&nbsp;one&nbsp;handler</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('span').die(); // removes all
$('span').die('mouseover'); // removes all mouseovers
$('span').die('mouseover', fn); // remove that one handler
</pre>
<p>And now, you can wield jQuery events with deftness and power!</p>

<p><strong>You should also <a href="http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-the-difference-between-live-and-delegate/">review the delegate() method</a>, as there can be substantial performance benefits to using it over live(). </strong></p>
<hr/>
<h2><span>8)</span> eq()</h2>

<p>If you're looking for a specific element within a set of elements, you can pass the index of the element to the <code>eq()</code> method and get a single jQuery element. Pass in a negative index to count back from the end of the set.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span class="keyword">var</span><span>&nbsp;ps&nbsp;=&nbsp;$(</span><span class="string">'p'</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>console.log(ps.length);&nbsp;<span class="comment">//&nbsp;logs&nbsp;3;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>ps.eq(1).addClass(<span class="string">'emphasis'</span><span>);&nbsp;</span><span class="comment">//&nbsp;just&nbsp;adds&nbsp;the&nbsp;class&nbsp;to&nbsp;the&nbsp;second&nbsp;item&nbsp;(index&nbsp;in&nbsp;zero-based)</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">var ps = $('p');
console.log(ps.length); // logs 3;
ps.eq(1).addClass('emphasis'); // just adds the class to the second item (index in zero-based)
</pre>
<p>You can also use <code>:eq()</code> in your selectors; so the previous example could have been done like this:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'p:eq(1)'</span><span>).addClass(</span><span class="string">'emphasis'</span><span>);&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('p:eq(1)').addClass('emphasis');
</pre>
<hr/>
<h2><span>9)</span> get()</h2>

<p>When getting a collection of element, jQuery returns them as a jQuery
   object, so you have access to all the methods. If you just want the raw
   DOM elements, you can use the <code>get()</code> method. </p>

<p>You can specify an index to get only one element.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>alert(&nbsp;$(</span><span class="string">'p'</span><span>)&nbsp;);&nbsp;</span><span class="comment">//&nbsp;[object&nbsp;Object]&nbsp;-&nbsp;the&nbsp;jquery&nbsp;object</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>alert(&nbsp;$(<span class="string">'p'</span><span>).get(1)&nbsp;);&nbsp;</span><span class="comment">//&nbsp;[object&nbsp;HTMLParagraphElement]</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">alert( $('p') ); // [object Object] - the jquery object
alert( $('p').get(1) ); // [object HTMLParagraphElement]
</pre>
<hr/>
<h2><span>10)</span> grep()</h2>

<p>If you're not familiar with Unix/Linix shells, you might not have heard the term <code>grep</code>.
   In a terminal, it's a text search utility; but here in jQuery, we use
   it to filter an array of elements. It's not a method of a jQuery
   collection; you pass in the array as the first parameter and the
   filtering function as the second parameter. That filter function takes
   two parameters itself: an element from the array and its index. That
   filter function should perform its work and return a true or false
   value. Be default, all the items that return true will be kept. You can
   add a third parameter, a boolean, to invert the results and kept the
   items that return false.</p>

<p><strong>Jeffrey Way did <a href="http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-fully-understanding-grep/">a great quick tip</a> about the <code>$.grep</code> not long ago; check that out to see how to use it!</strong></p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span class="keyword">var</span><span>&nbsp;nums&nbsp;=&nbsp;</span><span class="string">'1,2,3,4,5,6,7,8,9,10'</span><span>.split(</span><span class="string">','</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>nums&nbsp;=&nbsp;$.grep(nums,&nbsp;<span class="keyword">function</span><span>(num,&nbsp;index)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="comment">//&nbsp;num&nbsp;=&nbsp;the&nbsp;current&nbsp;value&nbsp;for&nbsp;the&nbsp;item&nbsp;in&nbsp;the&nbsp;array</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;<span class="comment">//&nbsp;index&nbsp;=&nbsp;the&nbsp;index&nbsp;of&nbsp;the&nbsp;item&nbsp;in&nbsp;the&nbsp;array</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">return</span><span>&nbsp;num&nbsp;&gt;&nbsp;5;&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;a&nbsp;boolean</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>});&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;</span></li>
		<li class="alt"><span>console.log(nums)&nbsp;<span class="comment">//&nbsp;6,7,8,9,10</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">var nums = '1,2,3,4,5,6,7,8,9,10'.split(',');

nums = $.grep(nums, function(num, index) {
  // num = the current value for the item in the array
  // index = the index of the item in the array
  return num &gt; 5; // returns a boolean
});

console.log(nums) // 6,7,8,9,10
</pre>
<hr/>
<h2><span>11)</span> Pseudo-Selectors</h2>

<p>Sizzle, the CSS Selector engine inside jQuery, offers quite a few
   pseudo-selectors to make the job of selecting the elements you want
   easy. Check out these interesting ones:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">':animated'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;elements&nbsp;currently&nbsp;animating</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">':contains(me)'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;elements&nbsp;with&nbsp;the&nbsp;text&nbsp;'me'</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">':empty'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;elements&nbsp;with&nbsp;no&nbsp;child&nbsp;nodes&nbsp;or&nbsp;text</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">':parent'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;elements&nbsp;with&nbsp;child&nbsp;nodes&nbsp;or&nbsp;text</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">'li:even'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;even-index&nbsp;elements&nbsp;(in&nbsp;this&nbsp;case,&nbsp;&lt;li&gt;s)</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'li:odd'</span><span>);&nbsp;</span><span class="comment">//&nbsp;can&nbsp;you&nbsp;guess?</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">':header'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;h1&nbsp;-&nbsp;h6s.</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">'li:gt(4)'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;elements&nbsp;with&nbsp;an&nbsp;(zero-based)&nbsp;index&nbsp;greater&nbsp;than&nbsp;the&nbsp;given&nbsp;number</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$(<span class="string">'li:lt(4)'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;element&nbsp;with&nbsp;an&nbsp;index&nbsp;less&nbsp;than&nbsp;the&nbsp;given&nbsp;number</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$(<span class="string">':only-child'</span><span>);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;all&nbsp;.&nbsp;.&nbsp;.&nbsp;well,&nbsp;it&nbsp;should&nbsp;be&nbsp;obvious</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$(':animated'); // returns all elements currently animating
$(':contains(me)'); // returns all elements with the text 'me'
$(':empty'); // returns all elements with no child nodes or text
$(':parent'); // returns all elements with child nodes or text
$('li:even'); // returns all even-index elements (in this case, &lt;li&gt;s)
$('li:odd'); // can you guess?
$(':header'); // returns all h1 - h6s.
$('li:gt(4)'); // returns all elements with an (zero-based) index greater than the given number
$('li:lt(4)'); // returns all element with an index less than the given number
$(':only-child'); // returns all . . . well, it should be obvious
</pre>
<p>There are more, of course, but these are the unique ones.</p>
<hr/>
<h2><span>12)</span> isArray() / isEmptyObject() / isFunction() / isPlainObject()</h2>

<p>Sometimes you want to make sure the parameter that was passed to a
   function was the corrent type; these functions make it easy to do. The
   first three are pretty self explanatory:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$.isArray([1,&nbsp;2,&nbsp;3]);&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;true</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$.isEmptyObject({});&nbsp;<span class="comment">//&nbsp;returns&nbsp;true</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$.isFunction(<span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;</span><span class="comment">/****/</span><span>&nbsp;});&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;true</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$.isArray([1, 2, 3]); // returns true
$.isEmptyObject({}); // returns true
$.isFunction(function () { /****/ }); // returns true
</pre>
<p>The next one isn't as obvious; <code>isPlainObject()</code> will return true if the parameter passed in was created as an object literal, or with <code>new Object()</code>.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span class="keyword">function</span><span>&nbsp;Person(name)&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">this</span><span>.name&nbsp;=&nbsp;name&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span><span>&nbsp;</span><span class="keyword">this</span><span>;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>}&nbsp;&nbsp;</span></li>
		<li class="alt"><span>$.isPlainObject({}));&nbsp;<span class="comment">//&nbsp;returns&nbsp;true</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$.isPlainObject(<span class="keyword">new</span><span>&nbsp;Object());&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;true</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>$.isPlainObject(<span class="keyword">new</span><span>&nbsp;Person());&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;false</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">function Person(name) {
	this.name = name
	return this;
}
$.isPlainObject({})); // returns true
$.isPlainObject(new Object()); // returns true
$.isPlainObject(new Person()); // returns false
</pre>
<hr/>
<h2><span>13)</span> makeArray()</h2>

<p>When you create a collection of DOM elements with jQuery, you're
   returned a jQuery object; in some situations, you might prefer that this
   be an array or regular DOM elements; the <code>makeArray()</code> function can do just that.</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span class="keyword">var</span><span>&nbsp;ps&nbsp;=&nbsp;$(</span><span class="string">'p'</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class=""><span>$.isArray(ps);&nbsp;<span class="comment">//returns&nbsp;false;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>ps&nbsp;=&nbsp;$.makeArray(ps);&nbsp;&nbsp;</span></li>
		<li class=""><span>$.isArray(ps);&nbsp;<span class="comment">//&nbsp;returns&nbsp;true;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">var ps = $('p');
$.isArray(ps); //returns false;
ps = $.makeArray(ps);
$.isArray(ps); // returns true;
</pre>
<hr/>
<h2><span>14)</span> map()</h2>

<p>The <code>map()</code> method is remotely similar to <code>grep()</code>.
   As you might expect, it takes one parameter, a function. That function
   can have two parameters: the index of the current element and the
   element itself. Here's what happens: the function that you pass in will
   be run once for each item in the collection; whatever value is returned
   from that function takes the place of the item it was run for in the
   collection. </p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'ul#nav&nbsp;li&nbsp;a'</span><span>).map(</span><span class="keyword">function</span><span>()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;<span class="keyword">return</span><span>&nbsp;$(</span><span class="keyword">this</span><span>).attr(</span><span class="string">'title'</span><span>);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>});&nbsp;&nbsp;<span class="comment">//&nbsp;now&nbsp;the&nbsp;collection&nbsp;is&nbsp;the&nbsp;link&nbsp;titles</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="comment">//&nbsp;this&nbsp;could&nbsp;be&nbsp;the&nbsp;beginning&nbsp;of&nbsp;a&nbsp;tooltip&nbsp;plugin.</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('ul#nav li a').map(function() {
  return $(this).attr('title');
});  // now the collection is the link titles
// this could be the beginning of a tooltip plugin.
</pre>
<hr/>
<h2><span>15)</span> parseJSON()</h2>

<p>If you're using <code>$.post</code> or <code>$.get</code>?and in other situations that you work with JSON strings?you'll find the <code>parseJSON</code> function useful. It's nice that this function uses the browsers
   built-in JSON parser if it has one (which will obviously be faster).</p>
            <pre class="">$.post('somePage.php', function (data) {
    /*****/
data =  $.parseJSON(data);
    /*****/
});
</pre>
<hr/>
<h2><span>16)</span> proxy()</h2>

<p>If you have a function as a property of an object, and that function
   uses other properties of the object, you can't call that function from
   within other functions and get the right results. I know that was
   confusing, so let's look at a quick example:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span class="keyword">var</span><span>&nbsp;person&nbsp;=&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;name&nbsp;:&nbsp;<span class="string">"Andrew"</span><span>,&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;meet&nbsp;:&nbsp;<span class="keyword">function</span><span>&nbsp;()&nbsp;{&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;alert(<span class="string">'Hi!&nbsp;My&nbsp;name&nbsp;is&nbsp;'</span><span>&nbsp;+&nbsp;</span><span class="keyword">this</span><span>.name);&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;}&nbsp;&nbsp;</span></li>
		<li class=""><span>};&nbsp;&nbsp;</span></li>
		<li class="alt"><span>person.meet();&nbsp;&nbsp;</span></li>
		<li class=""><span>$(<span class="string">'#test'</span><span>).click(person.meet);&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">var person = {
  name : "Andrew",
  meet : function () {
    alert('Hi! My name is ' + this.name);
  }
};
person.meet();
$('#test').click(person.meet);
</pre>
<p>By itself, <code>person.meet()</code> will alert correctly; but when
   it's called by the event handler, it will alert ?Hi! My name is
   undefined.? This is because the function is not being called in the
   right context. To fix this, we can use the <code>proxy()</code> function:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'#test'</span><span>).click($.proxy(person.meet,&nbsp;person));&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="comment">//&nbsp;we&nbsp;could&nbsp;also&nbsp;do&nbsp;$.proxy(person,&nbsp;"meet")</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('#test').click($.proxy(person.meet, person));
// we could also do $.proxy(person, "meet")
</pre>
<p>The first parameter of the proxy function is the method to run; the
   second is the context we should run it in. Alternatively, we can pass
   the context first, and the method name as a string second. Now you'll
   find that the function alerts correctly.</p>

<p><strong><a href="http://net.tutsplus.com/tutorials/javascript-ajax/quick-tip-learning-jquery-1-4s-proxy/">Prefer a video quick tip on $.proxy?</a></strong></p>
<hr/>
<h2><span>17)</span> replaceAll() / replaceWith()</h2>

<p>If you'd like to replace DOM elements with other ones, here's how to do it. We can call <code>replaceAll()</code> on elements we've collected or created, passing in a selector for the
   elements we'd like to replace. In this example, all elements with the <code>error</code> class will be replaced with the <code>span</code> we've created. </p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'&lt;span&nbsp;class="fixed"&gt;The&nbsp;error&nbsp;has&nbsp;been&nbsp;corrected&lt;/span&gt;'</span><span>).replaceAll(</span><span class="string">'.error'</span><span>);&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('&lt;span class="fixed"&gt;The error has been corrected&lt;/span&gt;').replaceAll('.error');
</pre>
<p>The <code>replaceWith()</code> method just reverses the selectors; find the ones you want to replace first:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'.error'</span><span>).replaceWith(</span><span class="string">'&lt;span&nbsp;class="fixed"&gt;The&nbsp;error&nbsp;has&nbsp;been&nbsp;corrected&lt;/span&gt;'</span><span>);&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('.error').replaceWith('&lt;span class="fixed"&gt;The error has been corrected&lt;/span&gt;');
</pre>
<p>You can also pass these two methods functions that will return elements or HTML strings.</p>
<hr/>
<h2><span>18)</span> serialize() / serializeArray()</h2>

<p>The <code>serialize()</code> method is what to use for encoding the values in a form into a string. </p>

<h4>HTML</h4>

<div class="dp-highlighter">

	<ol class="dp-xml" start="1">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">form</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">input</span><span>&nbsp;</span><span class="attribute">type</span><span>=</span><span class="attribute-value">"text"</span><span>&nbsp;</span><span class="attribute">name</span><span>=</span><span class="attribute-value">"name"</span><span>&nbsp;</span><span class="attribute">value</span><span>=</span><span class="attribute-value">"John&nbsp;Doe"</span><span>&nbsp;</span><span class="tag">/&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">input</span><span>&nbsp;</span><span class="attribute">type</span><span>=</span><span class="attribute-value">"text"</span><span>&nbsp;</span><span class="attribute">name</span><span>=</span><span class="attribute-value">"url"</span><span>&nbsp;</span><span class="attribute">value</span><span>=</span><span class="attribute-value">"http://www.example.com"</span><span>&nbsp;</span><span class="tag">/&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">form</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="html">&lt;form&gt;
    &lt;input type="text" name="name" value="John Doe" /&gt;
    &lt;input type="text" name="url" value="http://www.example.com" /&gt;
&lt;/form&gt;
</pre>
<h4>JavaScript</h4>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>console.log($(</span><span class="string">'form'</span><span>).serialize());???&nbsp;</span><span class="comment">//&nbsp;logs&nbsp;:&nbsp;name=John+Doe&amp;url=http%3A%2F%2Fwww.example.com</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">console.log($('form').serialize());??? // logs : name=John+Doe&amp;url=http%3A%2F%2Fwww.example.com
</pre>
<p>You can use <code>serializeArray()</code> to turn the form values into an array of objects instead of a string:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>console.log($(</span><span class="string">'form'</span><span>).serializeArray());???&nbsp;&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="comment">//&nbsp;logs&nbsp;:&nbsp;[{&nbsp;name&nbsp;:&nbsp;'name',&nbsp;value&nbsp;:&nbsp;'John&nbsp;Doe'}&nbsp;,&nbsp;{&nbsp;name&nbsp;:&nbsp;'url',&nbsp;value&nbsp;:&nbsp;'http://www.example.com'&nbsp;}&nbsp;]</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">console.log($('form').serializeArray());???
// logs : [{ name : 'name', value : 'John Doe'} , { name : 'url', value : 'http://www.example.com' } ]
</pre>
<hr/>
<h2><span>19)</span> siblings()</h2>

<p>You can probably guess what the <code>siblings()</code> method does; it will return a collection of the siblings of the whatever items are in your original collections:</p>

<div class="dp-highlighter">

	<ol class="dp-xml" start="1">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="html">&lt;div&gt; . . . &lt;/div&gt;
&lt;p&gt; . . . &lt;/p&gt;
&lt;span&gt; . . . &lt;/span&gt;
</pre>
<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'p'</span><span>).siblings();&nbsp;</span><span class="comment">//&nbsp;returns&nbsp;&lt;div&gt;,&nbsp;&lt;span&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('p').siblings(); // returns &lt;div&gt;, &lt;span&gt;
</pre>
<hr/>
<h2><span>20)</span> wrap() / wrapAll() / wrapInner()</h2>

<p>These three functions make it easy to wrap elements in other
   elements. First off, I'll mention that all three take one parameter:
   either an element (which is an HTML string, a CSS selctor, a jQuery
   object, or a DOM element) or a function that returns an element.<br/>
   The <code>wrap()</code> method wraps each item in the collection with the assigned element:</p>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'p'</span><span>).wrap(</span><span class="string">'&lt;div&nbsp;class="warning"&nbsp;/&gt;'</span><span>);&nbsp;</span><span class="comment">//&nbsp;all&nbsp;paragraphs&nbsp;are&nbsp;now&nbsp;wrapped&nbsp;in&nbsp;a&nbsp;div.warning</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('p').wrap('&lt;div class="warning" /&gt;'); // all paragraphs are now wrapped in a div.warning
</pre>
<p>The <code>wrapAll()</code> will wrap one element around all the
   elements in the collection; this means that the elements in the
   collection will be moved to a new spot in the DOM; they'll line up at
   the place of the first element in the collection and be wrapped there:</p>

<h4>HTML - Before</h4>

<div class="dp-highlighter">

	<ol class="dp-xml" start="1">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="html">&lt;p&gt;
    &lt;span&gt; . . . &lt;/span&gt;
    &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
    &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
&lt;/p&gt;
&lt;p&gt;
    &lt;span&gt; . . . &lt;/span&gt;
    &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
    &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
&lt;/p&gt;
</pre>
<h4>JavaScript</h4>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'.moveMe'</span><span>).wrapAll(document.createElement(</span><span class="string">'div'</span><span>));&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('.moveMe').wrapAll(document.createElement('div'));
</pre>
<h4>HTML - After</h4>

<div class="dp-highlighter">

	<ol class="dp-xml" start="1">
		<li class="alt"><span><span class="tag">&lt;</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span>&nbsp;</span><span class="attribute">class</span><span>=</span><span class="attribute-value">"moveMe"</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;/</span><span class="tag-name">div</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tag">&lt;</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;.&nbsp;.&nbsp;.&nbsp;</span><span class="tag">&lt;/</span><span class="tag-name">span</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
		<li class=""><span><span class="tag">&lt;/</span><span class="tag-name">p</span><span class="tag">&gt;</span><span>&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="html">&lt;p&gt;
    &lt;span&gt; . . . &lt;/span&gt;
    &lt;div&gt;
        &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
        &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
        &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
        &lt;span class="moveMe"&gt; . . . &lt;/span&gt;
    &lt;/div&gt;
&lt;/p&gt;
&lt;p&gt;
    &lt;span&gt; . . . &lt;/span&gt;
&lt;/p&gt;
</pre>
<p>Finally, the <code>wrapInner</code> function wraps everything inside each element in the collecting with the given element:</p>

<h4>HTML - Before</h4>

<div class="dp-highlighter">
	<ol class="dp-c" start="1">
		<li class="alt"><span><span>&lt;p&gt;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;&nbsp;.&nbsp;.&nbsp;.&nbsp;&lt;/span&gt;&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;&nbsp;.&nbsp;.&nbsp;.&nbsp;&lt;/span&gt;&nbsp;&nbsp;</span></li>
		<li class=""><span>&lt;/p&gt;&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">&lt;p&gt;
    &lt;span&gt; . . . &lt;/span&gt;
    &lt;span&gt; . . . &lt;/span&gt;
&lt;/p&gt;
</pre>
<h4>JavaScript</h4>

<div class="dp-highlighter">

	<ol class="dp-c" start="1">
		<li class="alt"><span><span>$(</span><span class="string">'p'</span><span>).wrapInner($(</span><span class="string">'&lt;div&nbsp;/&gt;'</span><span>));&nbsp;&nbsp;</span></span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">$('p').wrapInner($('&lt;div /&gt;'));
</pre>
<h4>HTML - After</h4>

<div class="dp-highlighter">
	<ol class="dp-c" start="1">
		<li class="alt"><span><span>&lt;p&gt;&nbsp;&nbsp;</span></span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;&nbsp;.&nbsp;.&nbsp;.&nbsp;&lt;/span&gt;&nbsp;&nbsp;</span></li>
		<li class=""><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;&nbsp;.&nbsp;.&nbsp;.&nbsp;&lt;/span&gt;&nbsp;&nbsp;</span></li>
		<li class="alt"><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;&nbsp;&nbsp;</span></li>
		<li class=""><span>&lt;/p&gt;&nbsp;&nbsp;</span></li>
	</ol>
</div>
            <pre style="display: none;" class="js">&lt;p&gt;
    &lt;div&gt;
        &lt;span&gt; . . . &lt;/span&gt;
        &lt;span&gt; . . . &lt;/span&gt;
    &lt;/div&gt;
&lt;/p&gt;
</pre>
<hr/>
<h2>Conclusion</h2>

<p>Well, now you've got more than twenty new jQuery features to play with on your next project; have fun with them!</p>

<p style="text-align: center;">
	<!-- BuySellAds.com Zone Code -->
</p>


</div>
</div>

</div>

</body>
</html>
