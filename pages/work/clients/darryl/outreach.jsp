<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<title>healthypainting.com - Outreach</title>
	<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
	<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/forms.css" type="text/css">
	<script language="JavaScript" src="${contextPath}/clients/darryl/resources/js/components/buttons.js"></script>
</head>
<body onload="change()">
	<%
		if (request.getSession(false).getAttribute("emailAddress") == null) {
			response.sendRedirect(request.getContextPath() + "/clients/login.jsp");

		}
	%>
	<div id="realnavbar">
		<%@ include file="inc/navbar.jsp" %>
	</div>
	<div id="container-page">
		<div class="navbar">&nbsp;</div>
		<div id="content">
			<div class="pagehead">Community Outreach</div>
			<p class="fade">Once I receive your order, I'll send you an email explaining the details of getting your
				site
				up and running. A follow-up phone call is often necessary to gather information and content for your
				site, discuss your design ideas and to give
				you the URL to my development server so you can check my progress whenever you wish. You can view
				wireframes of your site there as well.</p>
			<br/>&nbsp;<br/>&nbsp;
			<br/>
		</div>
		<br/>

		<div id="foot">
			<%@ include file="inc/footer.jsp" %>
		</div>
	</div>
</body>
</html>
