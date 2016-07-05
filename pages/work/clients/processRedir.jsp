<%@page contentType="text/html" %>
<%@page pageEncoding="UTF-8" %>
<%@page import="java.util.*" %>
<jsp:useBean id="idHandler" class="pool.LoginDatabase" scope="request">
	<jsp:setProperty name="idHandler" property="*"/>
</jsp:useBean>
<!DOCTYPE html>
<html>
	<head>
		<body>
			<%
				String userName = request.getParameter("userName");
				String emailAddress = request.getParameter("emailAddress");
				if (idHandler.authenticate(userName, emailAddress)) {
					response.sendRedirect("../gallery/amber/home.jsp");
				} else {
					response.sendRedirect("LoginError.jsp");
				}
			%>
		</body>
	</head>
</html>