<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>
<sql:query var="mop" scope="request">SELECT * FROM login
	WHERE userName LIKE ?
	ORDER BY userName
	<sql:param value="%${param.userName}%"/>
</sql:query>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<title>Welcome to Healthypainting.com - Home</title>
		<script language="JavaScript" src="${contextPath}/resources/js/components/show_hide.js"></script>
		<link rel="stylesheet" href="${contextPath}/clients/darryl/styles/hp.css" type="text/css">
		<style type="text/css" media="screen">
			#extimage {
				width: 168px;
				height: 166px;
				background: URL("${contextPath}/clients/darryl/images/pixel.gif");
			}

			#extimage:hover {
				background: URL("${contextPath}/clients/darryl/images/ext_over.jpg");
			}

			#intimage {
				width: 168px;
				height: 166px;
				background: URL("${contextPath}/clients/darryl/images/pixel.gif");
			}

			#intimage:hover {
				background: URL("${contextPath}/clients/darryl/images/int_over.jpg");
			}

			#aboutimage {
				width: 168px;
				height: 162px;
				background: URL("${contextPath}/clients/darryl/images/pixel.gif");
			}

			#aboutimage:hover {
				background: URL("${contextPath}/clients/darryl/images/about_over.jpg");
			}

			#moreimage {
				width: 168px;
				height: 162px;
				background: URL("${contextPath}/clients/darryl/images/pixel.gif");
			}

			#moreimage:hover {
				background: URL("${contextPath}/clients/darryl/images/more_over.jpg");
			}

			#contactimage {
				width: 168px;
				height: 162px;
				background: URL("${contextPath}/clients/darryl/images/pixel.gif");
			}

			#contactimage:hover {
				background: URL("${contextPath}/clients/darryl/images/contact_over.jpg");
			}
		</style>
	</head>
	<body class="splash">
		<%--
		<%
			if (request.getSession(false).getAttribute("emailAddress") == null ){
				response.sendRedirect(request.getContextPath() + "/pages/clients/clients.jsp");

			}
		%>--%>
		<a class="main" href="${contextPath}/home.jsp">Back to Home Page</a><br/>
		Welcome&nbsp;${fn:escapeXml(param.emailAddress)}&nbsp;to your site....
		<div id="box-page">
			<table id="home-table-box" cellpadding="0" cellspacing="0" border="0">
				<tr>
					<td align="center" valign="middle" height="150" width="160" style="background-color:#ffffff;"><img
							src="${contextPath}/clients/darryl/images/hpLogo.jpg" width="160px" height="150px"
							style="padding-top:0px; padding-left:0px;"/></td>
					<td width="160" height="150" align="center" valign="middle"><br/>
						<a href="ext.jsp" class="box">Exteriors</a></td>
					<td width="160" height="150" align="center" valign="middle"><br/>
						<a href="int.jsp" class="box">Interiors</a></td>
					<td width="160" height="150" align="center" valign="middle"><br/>
						&nbsp;</td>
				</tr>
				<tr>
					<td width="160" height="152" align="center" valign="middle"><br/>
						<a href="about.jsp" class="box">About<br/>&amp;<br/>Philosophy</a></td>
					<td width="160" height="152" align="center" valign="middle"><br/>
						<a href="blog.jsp" class="box">Blog</a></td>
					<td width="160" height="152" align="center" valign="middle"><br/>
						<a href="coach.jsp" class="box">Consultation<br/>&amp;<br/>Coaching</a></td>
					<td width="160" height="150" align="center" valign="middle"><br/>
						&nbsp;</td>
				</tr>
			</table>
			<p><a href="contact.jsp" class="box">Contact</a><br/><a href="links.jsp" class="box">Links</a><br/><a
					href="outreach.jsp" class="box">Community Outreach</a></p>

			<div id="foot">
				<%@ include file="inc/footer.jsp" %>
			</div>
		</div>
	</body>
</html>
