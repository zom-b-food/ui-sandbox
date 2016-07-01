<%--
	- File Name: head.jsp
  - Author(s): KnowledgePath Solutions UX Team
	- Copyright Notice:
	- Description: Outputs the contents of the <head>. Includes the meta tags, js and css includes.
	- Parameters:
	-	 section - string for section the page falls in
	-	 subsection - string for subsection the page falls in
	-	 metaKeywords (optional) - Page keywords
	-	 metaDescription (optional) - Page Description
	-	 pageTitle (optional) - Page title that appears in the title bar of your browser.
	- 
	- Facebook Open Graph Notes:
	-	Tags appear in several sections of this file, search for og: and fb: to find them.	
	--%>
<meta charset="utf-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="ui-design-engineering.com">
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW"> <!-- Remove this Robots Meta Tag, to allow indexing of site -->

<%-- JSTL --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%-- DSP
<%@ taglib prefix="dsp" uri="http://www.atg.com/taglibs/daf/dspjspTaglib1_1" %>
--%>

<%-- JSON Rendering Taglib --%>
<%@ taglib prefix="json" uri="http://www.atg.com/taglibs/json" %>

<%-- static --%>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta charset="utf-8" />
<%--viewport size for responsive --%>
<meta name="viewport" content="width=device-width, initial-scale=1.0">



<%-- Asset Params --%>
<c:set var="assetPath" value="${contextPath}/schnoodles/_deps"/>


<script src="${assetPath}/js/jquery-1.11.1.min.js"></script>

<link href="${assetPath}/css/tiptip.css" rel="stylesheet">
<link href="${assetPath}/css/schnoodles.css" rel="stylesheet">

<link rel="stylesheet" href="${assetPath}/css/topnav.css">

<script src="${assetPath}/js/modernizr.js"></script> <!-- Modernizr -->
<script src="${assetPath}/js/popAccordion.js"></script> <!-- Modernizr -->
<!-- Fonts -->
<link rel="stylesheet" href="${assetPath}/css/fonts/font-awesome-4.2.0/css/font-awesome.min.css">


<link href="http://fonts.googleapis.com/css?family=Syncopate" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Abel" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Pontano+Sans" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet" type="text/css">

<script type="text/javascript" src="${assetPath}/js/schnoodles.js"></script>
