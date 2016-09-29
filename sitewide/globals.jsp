

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="ui-design-engineering.com">
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
<!-- Remove this Robots Meta Tag, to allow indexing of site -->

<%-- JSTL --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<%-- Session Time Out Refresh. --%>
<c:if test="${doSessionTimeout}">
    <noscript>
        <c:set var="errorTimeout" value="${contextPath}/error_timeout.jsp"/>
        <c:set var="refreshSecs" value="1800"/>
        <meta http-equiv="refresh" content="${refreshSecs};url=${errorTimeout}">
    </noscript>
</c:if>

<c:if test="${!empty seoRobots}">
    <meta name="robots" content="${seoRobots}"/>
</c:if>
<c:if test="${!empty lastModified}">
    <meta http-equiv="last-modified" content="${lastModified}"/>
</c:if>
<c:if test="${!empty metaDescription}">
    <meta name="description" content="${metaDescription}"/>
</c:if>
<c:if test="${!empty metaKeywords}">
    <meta name="keywords" content="${metaKeywords}"/>
</c:if>

<link rel="icon" href="${contextPath}/favicon.ico" type="image/x-icon">
<c:set var="assetPath" value="${contextPath}/resources"/>
<link rel="icon" href="${contextPath}/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="${contextPath}/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon-precomposed" href="${assetPath}/images/apple-touch-icon.png">
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<link rel="stylesheet" href="${assetPath}/css/normalize.css">
<link rel="stylesheet" href="${assetPath}/css/ie10-viewport-bug-workaround.css">
<link rel="stylesheet" href="${assetPath}/compiled/UI-SANDBOX.min.css">
<link rel="stylesheet" href="${assetPath}/css/components.css">

<script src="${assetPath}/compiled/UI-SANDBOX.min.js"></script>
<script src="${assetPath}/js/uikit.min.js"></script>
<script src="${assetPath}/js/components/sticky.js"></script>
