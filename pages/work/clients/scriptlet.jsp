<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<jsp:useBean id="LoginServlet" scope="session" class="pool.LoginDatabase"/>
<sql:setDataSource dataSource="jdbc/demo"/>
<sql:query var="searchList" scope="request">SELECT * FROM login
	WHERE userName LIKE ?
	ORDER BY userName
	<sql:param value="%${param.userName}%"/>
</sql:query>
<%
	String oops = (String) session.getAttribute("userName");
	if (oops == null) oops = "";
%>
<%
	String userName = request.getParameter("userName");
	String emailAddress = request.getParameter("emailAddress");
%>
<%= oops %>oops
<%= request.getParameter("userName") %> getPara
${fn:escapeXml(param.userName)} escape
<%
	if (request.getSession(false).getAttribute("userName") == null) {
		response.sendRedirect(request.getContextPath() + "/gallery/login.jsp");

	}
%>
<form action="" name="activate" method="post">
	<sql:query var="showList" dataSource="jdbc/demo"
	           sql="SELECT DISTINCT userName FROM login WHERE userName = '${fn:escapeXml(param.userName)}' ORDER BY userName"/>
	<input type="text" class="MEDformField" name="companyName" id="companyName"
	       value="<%= request.getParameter("emailAddress") %>">
	<input type="text" class="TINYformField" name="stringU1AC" id="stringU1AC"
	       value="<%= request.getParameter("stringU1AC") %>"/>
	<input type="text" class="TINYformField" name="stringU2AC" id="stringU2AC"
	       value="<%= request.getParameter("stringU2AC") %>"/>
	<input type="text" class="TINYformField" name="u1NoToPort" id="u1NoToPort"
	       value="<%= request.getParameter("u1NoToPort") %>"/>
	<input type="text" class="TINYformField" name="u2NoToPort" id="u2NoToPort"
	       value="<%= request.getParameter("u2NoToPort") %>"/>
	<!-- <input style="float:right;" class="mbtn" type="submit" value="Confirm" onClick="redir()"> -->
</form>