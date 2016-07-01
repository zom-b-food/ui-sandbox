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

		table.reference {
			background-color: #FFFFFF;
			border: 1px solid #15410C;
			border-collapse: collapse;
			width: 720px;
		}

		.reference th {
			font-size: 14px;
		}

		.reference td:first-child {
			color: #444d39;
			font-weight: bold;
		}

		.reference td {
			font-size: 13px;
			color: #15410C;
		}

		.reference td a:link {
			font-size: 22px;
		}

		em {
			font-size: 13px;
		}

	</style>
</head>
<body>
<div id="container-page">
<img src="../../resources/images/banner2Fade.jpg"/>

<div class="popDiv">
<h1>CSS Selectors Cheat Sheet</h1>

<div style="float:right; margin-top:14px; padding-right:22px;">
	<a href="javascript:window.close()">Close Window</a>
</div>
<h4>In CSS, selectors are patterns used to select the element(s) you want to style.</h4>

<p>Swiped from <a href="http://www.w3schools.com/cssref/css_selectors.asp" target="_blank"> W3Schools.com</a></p>

<p>The &quot;CSS&quot; column indicates in which CSS version the property is defined (CSS1, CSS2, or CSS3).</p>
<table class="reference">
<tr>
	<th width="22%" align="left">Selector</th>
	<th width="17%" align="left">Example</th>
	<th width="56%" align="left">Example description</th>
	<th align="left">CSS</th>
</tr>
<tr>
	<td>.<em>class</em></td>
	<td class="notranslate">.intro</td>
	<td>Selects all elements with class=&quot;intro&quot;</td>
	<td>1</td>
</tr>
<tr>
	<td>#<em>id</em></td>
	<td class="notranslate">#firstname</td>
	<td>Selects the element with id=&quot;firstname&quot;</td>
	<td>1</td>
</tr>
<tr>
	<td>*</td>
	<td class="code notranslate">*</td>
	<td>Selects all elements</td>
	<td>2</td>
</tr>
<tr>
	<td><em>element</em></td>
	<td class="notranslate">p</td>
	<td>Selects all &lt;p&gt; elements</td>
	<td>1</td>
</tr>
<tr>
	<td><em>element,element</em></td>
	<td class="notranslate">div,p</td>
	<td>Selects all &lt;div&gt; elements and all &lt;p&gt; elements</td>
	<td>1</td>
</tr>
<tr>
	<td><em>element</em> <em>element</em></td>
	<td class="notranslate">div p</td>
	<td>Selects all &lt;p&gt; elements inside &lt;div&gt; elements</td>
	<td>1</td>
</tr>
<tr>
	<td><em>element</em>&gt;<em>element</em></td>
	<td class="notranslate">div&gt;p</td>
	<td>Selects all &lt;p&gt; elements where the parent is a &lt;div&gt; element</td>
	<td>2</td>
</tr>
<tr>
	<td><em>element</em>+<em>element</em></td>
	<td class="notranslate">div+p</td>
	<td>Selects the first &lt;p&gt; element that immediately follows &lt;div&gt; elements</td>
	<td>2</td>
</tr>
<tr>
	<td><em>element1</em>~<em>element2</em></td>
	<td>p~ul</td>
	<td>Selects every &lt;ul&gt; element that follows a &lt;p&gt; element</td>
	<td>3</td>
</tr>
<tr>
	<td>:link</td>
	<td class="notranslate">a:link</td>
	<td>Selects all unvisited links</td>
	<td>1</td>
</tr>
<tr>
	<td>:visited</td>
	<td class="notranslate">a:visited</td>
	<td>Selects all visited links</td>
	<td>1</td>
</tr>
<tr>
	<td>:active</td>
	<td class="notranslate">a:active</td>
	<td>Selects the active link</td>
	<td>1</td>
</tr>
<tr>
	<td>:hover</td>
	<td class="notranslate">a:hover</td>
	<td>Selects links on mouse over</td>
	<td>1</td>
</tr>
<tr>
	<td>:focus</td>
	<td class="notranslate">input:focus</td>
	<td>Selects the input element which has focus</td>
	<td>2</td>
</tr>
<tr>
	<td>:first-letter</td>
	<td class="notranslate">p:first-letter</td>
	<td>Selects the first letter of every &lt;p&gt; element</td>
	<td>1</td>
</tr>
<tr>
	<td>:first-line</td>
	<td class="notranslate">p:first-line</td>
	<td>Selects the first line of every &lt;p&gt; element</td>
	<td>1</td>
</tr>
<tr>
	<td>:first-child</td>
	<td class="notranslate">p:first-child</td>
	<td>Selects every &lt;p&gt; element that is the first child of its parent</td>
	<td>2</td>
</tr>
<tr>
	<td>:before</td>
	<td class="notranslate">p:before</td>
	<td>Insert content before&nbsp; the content of every &lt;p&gt; element</td>
	<td>2</td>
</tr>
<tr>
	<td>:after</td>
	<td class="notranslate">p:after</td>
	<td>Insert content after every &lt;p&gt; element</td>
	<td>2</td>
</tr>
<tr>
	<td>:lang(<em>language</em>)</td>
	<td class="notranslate">p:lang(it)</td>
	<td>Selects every &lt;p&gt; element with a lang attribute value starting
	    with &quot;it&quot;</td>
	<td>2</td>
</tr>
<tr>
	<td>[<em>attribute</em>]</td>
	<td class="notranslate">[target]</td>
	<td>Selects all elements with a target attribute</td>
	<td>2</td>
</tr>
<tr>
	<td>[<em>attribute</em>=<em>value</em>]</td>
	<td class="notranslate">[target=_blank]</td>
	<td>Selects all elements with target=&quot;_blank&quot;</td>
	<td>2</td>
</tr>
<tr>
	<td>[<em>attribute</em>~=<em>value</em>]</td>
	<td class="notranslate">[title~=flower]</td>
	<td>Selects all elements with a title attribute containing the word &quot;flower&quot;</td>
	<td>2</td>
</tr>
<tr>
	<td>[<em>attribute</em>|=<em>value</em>]</td>
	<td class="notranslate">[lang|=en]</td>
	<td>Selects all elements with a lang attribute value starting with &quot;en&quot;</td>
	<td>2</td>
</tr>
<tr>
	<td>[<em>attribute</em>^=<em>value</em>]</td>
	<td>a[src^=&quot;https&quot;]</td>
	<td>Selects every &lt;a&gt; element whose src attribute value begins with &quot;https&quot;</td>
	<td>3</td>
</tr>
<tr>
	<td>[<em>attribute</em>$=<em>value</em>]</td>
	<td>a[src$=&quot;.pdf&quot;]</td>
	<td>Selects every &lt;a&gt; element whose src attribute value ends with &quot;.pdf&quot;</td>
	<td>3</td>
</tr>
<tr>
	<td>[<em>attribute</em>*=<em>value</em>]</td>
	<td>a[src*=&quot;w3schools&quot;]</td>
	<td>Selects every &lt;a&gt; element whose src attribute value contains the substring
	    &quot;w3schools&quot;</td>
	<td>3</td>
</tr>
<tr>
	<td>:first-of-type</td>
	<td>p:first-of-type</td>
	<td>Selects every &lt;p&gt; element that is the first &lt;p&gt; element of its parent</td>
	<td>3</td>
</tr>
<tr>
	<td>:last-of-type</td>
	<td>p:last-of-type</td>
	<td>Selects every &lt;p&gt; element that is the last &lt;p&gt; element of its parent</td>
	<td>3</td>
</tr>
<tr>
	<td>:only-of-type</td>
	<td>p:only-of-type</td>
	<td>Selects every &lt;p&gt; element that is the only &lt;p&gt; element of its
	    parent
	</td>
	<td>3</td>
</tr>
<tr>
	<td>:only-child</td>
	<td>p:only-child</td>
	<td>Selects every &lt;p&gt; element that is the only child of its parent</td>
	<td>3</td>
</tr>
<tr>
	<td>:nth-child(<em>n</em>)</td>
	<td>p:nth-child(2)</td>
	<td>Selects every &lt;p&gt; element that is the second child of its parent</td>
	<td>3</td>
</tr>
<tr>
	<td>:nth-last-child(<em>n</em>)</td>
	<td>p:nth-last-child(2)</td>
	<td>Selects every &lt;p&gt; element that is the second child of its parent, counting
	    from the last child
	</td>
	<td>3</td>
</tr>
<tr>
	<td>:nth-of-type(<em>n</em>)</td>
	<td>p:nth-of-type(2)</td>
	<td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent</td>
	<td>3</td>
</tr>
<tr>
	<td>:nth-last-of-type(<em>n</em>)</td>
	<td>p:nth-last-of-type(2)</td>
	<td>Selects every &lt;p&gt; element that is the second &lt;p&gt; element of its parent, counting
	    from the last child
	</td>
	<td>3</td>
</tr>
<tr>
	<td>:last-child</td>
	<td>p:last-child</td>
	<td>Selects every &lt;p&gt; element that is the last child of its parent</td>
	<td>3</td>
</tr>
<tr>
	<td>:root</td>
	<td>:root</td>
	<td>Selects the document's root element</td>
	<td>3</td>
</tr>
<tr>
	<td>:empty</td>
	<td>p:empty</td>
	<td>Selects every &lt;p&gt; element that has no children (including text nodes)</td>
	<td>3</td>
</tr>
<tr>
	<td>:target</td>
	<td>#news:target</td>
	<td>Selects the current active #news element (clicked on a URL containing that anchor name)</td>
	<td>3</td>
</tr>
<tr>
	<td>:enabled</td>
	<td>input:enabled</td>
	<td>Selects every enabled &lt;input&gt; element</td>
	<td>3</td>
</tr>
<tr>
	<td>:disabled</td>
	<td>input:disabled</td>
	<td>Selects every disabled &lt;input&gt; element</td>
	<td>3</td>
</tr>
<tr>
	<td>:checked</td>
	<td>input:checked</td>
	<td>Selects every checked &lt;input&gt; element</td>
	<td>3</td>
</tr>
<tr>
	<td>:not(<em>selector</em>)</td>
	<td>:not(p)</td>
	<td>Selects every element that is not a &lt;p&gt; element</td>
	<td>3</td>
</tr>
<tr>
	<td>::selection</td>
	<td>::selection</td>
	<td>Selects the portion of an element that is selected by a user</td>
	<td>3</td>
</tr>
</table>
<p>&nbsp;</p>
<br/>
</div>
</div>
</body>
</html>
