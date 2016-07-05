<!DOCTYPE html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
	<title>healthypainting.com - Interiors</title>
	<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
	<script language="JavaScript" src="${contextPath}/clients/darryl/resources/js/components/buttons.js"></script>
	<script language="javascript" type="text/javascript">
		function showImage() {
			document.getElementById("mainpic").src = "${contextPath}/clients/darryl/slides/int2.jpg";
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
				        width="410px" height="300px" src="${contextPath}/clients/darryl/slides/int1.jpg"></iframe>
			</div>
			<div class="righttext"><span class="pagehead">Interiors</span>

				<h3>About Colors:</h3>

				<p>Colors are a very personal choice. There is an unlimited amount of choices and variances in color.
					Choice of color will alter the look and feel of an area. Color will change emotions shared in a
					room. Color will create different types of maintenance. Certain colors are easier to apply, have
					better coverage, and are easier to clean than others. It is a real blessing to now reside and work
					in a place with a different attitude toward color. People in our area are not afraid of color and
					realize it can always change! </p>

				<p>Proper color choices do a tremendous service, complementing our quality paint job. We are comfortable
					in the knowledge that making or helping to make decisions in this area is not our strong suit, and
					something we believe should be left up to the experts. </p>

				<p>We have several of the area�s top designers, which we will gladly recommend with confidence, for
					superior color consultations. </p>
			</div>
			<div class="thumbframe">
				<iframe frameBorder="1" scrolling="auto" id="thumbframe" name="thumbframe" height="100px" width="100%"
				        src="${contextPath}/clients/darryl/slides/int_strip.jsp"></iframe>
			</div>
			<br/>
		</div>
		<div id="foot">
			<%@ include file="inc/footer.jsp" %>
		</div>
	</div>
</body>
</html>
