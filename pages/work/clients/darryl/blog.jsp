<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<title>healthypainting.com - Blog</title>
	<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
	<script language="JavaScript" src="${contextPath}/clients/darryl/resources/js/components/buttons.js"></script>
	<script language="javascript" type="text/javascript">
		function showImage() {
			document.getElementById("mainpic").src = "${contextPath}/clients/darryl/slides/more2.jpg";
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
				        width="410px" height="300px" src="${contextPath}/clients/darryl/slides/more1.jpg"></iframe>
			</div>
			<div class="righttext"><span class="pagehead">Blog</span>

				<p> Welcome family and friends! With a stand up paddle board over his shoulder, Jim Doherty walks across
					the lawn at Gas Works Park to launch his board and join others in the first annual Polar Paddle,
					which departed from the park this morning. About a dozen stand-up paddle boarders Paddle, which
					departed from the park this morning. About a dozen stand-up paddle boarders participated in the trek
					to Lake Washington and back. With a stand up paddle board over his shoulder, Jim Doherty walks
					across the lawn at Gas Works Park to launch his board and join others in the first annual Polar
					Paddle, which departed from the park this morning. About a dozen stand-up paddle boarders
					participated in the trek to Lake Washington and back. With a stand up paddle board over his
					shoulder, Jim Doherty walks across the lawn at Gas Works </p>
			</div>
			<div class="thumbframe">
				<iframe frameBorder="1" scrolling="auto" id="thumbframe" name="thumbframe" height="100px" width="100%"
				        src="${contextPath}/clients/darryl/slides/more_strip.jsp"></iframe>
			</div>
			<br/>
		</div>
		<div id="foot">
			<%@ include file="inc/footer.jsp" %>
		</div>
	</div>
</body>
</html>
