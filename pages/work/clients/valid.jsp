<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>

<html>
<head>
	<title>Process</title>


</head>
<body>
<form action="" name="showGallery" method="post">
	Yay
	<input type="hidden" name="userName" id="userName" value="${fn:escapeXml(param.userName)}">
	<input type="hidden" name="emailAddress" id="emailAddress" value="${fn:escapeXml(param.emailAddress)}"/>
	<input type="hidden" name="userName" id="userName" value="<%=request.getParameter("userName")%>">
	<input type="hidden" name="emailAddress" id="emailAddress" value="<%=request.getParameter("emailAddress")%>"/>
	<!--  <input style="float:right;" class="mbtn" type="submit" value="Confirm" onClick="redir()"> -->
</form>
</body>
</html>


<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>
<!DOCTYPE html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>
	<link rel="stylesheet" href="${assetPath}/css/pages/jdbc.css">
</head>
<body class="popDiv">

wetertrew
<jsp:setProperty name="addusers" property="*"/>
<div class="col-lg-12">


	<h3>Registration and login servlet</h3>
	<h4>Data from the database is displayed.</h4>

	<p>This servlet uses MySQL database to store user info. It then captures form data, checks it against the database for existing info and then creates a new database row.</p>

	<h4>Thanks for registering.</h4>

	<p>Here is the information that you entered:</p>

	<%--<ul>
		<li>Username: <jsp:getProperty name="addusers" property="emailAddress"/></li>
		<li>Password: <jsp:getProperty name="addusers" property="userName"/> </li>
	</ul>--%>
	<h4><a href="${contextPath}/pages/clients/clients.jsp">Return to previous page to check the database for your user info.</a></h4>
</div>
<input type="text" name="userName" id="userName" value="${fn:escapeXml(param.userName)}">
<input type="text" name="emailAddress" id="emailAddress" value="${fn:escapeXml(param.emailAddress)}"/>
<input type="text" name="userName" id="userName" value="<%=request.getParameter("userName")%>">
<input type="text" name="emailAddress" id="emailAddress" value="<%=request.getParameter("emailAddress")%>"/>
</body>
</html>

