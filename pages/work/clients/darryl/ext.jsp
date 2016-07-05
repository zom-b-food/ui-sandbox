<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<title>healthypainting.com - Exteriors</title>
	<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
	<script language="JavaScript" src="${contextPath}/clients/darryl/resources/js/components/buttons.js"></script>
	<script language="javascript" type="text/javascript">
		function showImage() {
			document.getElementById("mainpic").src = "${contextPath}/clients/darryl/slides/ext2.jpg";
		}
	</script>
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
			<div class="slideframe">
				<iframe onload="IEsucks()" class="IEsucks" allowtransparency="true" frameBorder="0"
				        style="background-color:#ffffff" scrolling="no" id="viewerframe" name="viewerframe"
				        width="410px" height="300px" src="${contextPath}/clients/darryl/slides/ext1.jpg"></iframe>
			</div>
			<div class="righttext"><span class="pagehead">Exteriors</span>

				<h3>About Sheens:</h3>

				<p>As is color, sheen is a personal choice. Picking the right sheen can affect the look and feel of any
					project. Sheen being a glistening brightness, gloss, semi-gloss, or flat product! Admittedly not
					well suited for the responsibility of color selection, choosing the best sheen for the project is
					something we have a strong degree of experience and thought about. We know which sheens look and
					feel best, as well as truths behind some of the misconceptions; such as which sheens are the
					warmest, which look best in what areas and which ones need be in what areas? </p>
			</div>
			<div class="thumbframe">
				<iframe frameBorder="1" scrolling="auto" id="thumbframe" name="thumbframe" height="100px" width="100%"
				        src="${contextPath}/clients/darryl/slides/ext_strip.jsp"></iframe>
			</div>
			<br/>
		</div>
		<div id="foot">
			<%@ include file="inc/footer.jsp" %>
		</div>
	</div>
</body>
</html>
