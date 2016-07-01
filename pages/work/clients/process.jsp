<%@ page contentType="text/html" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sql:setDataSource dataSource="jdbc/demo"/>

<html>
<head>
<title>Process</title>
<script type="text/javascript">
function redir(){
var name = document.getElementById("userName").value;
var email = document.getElementById("emailAddress").value;
	if ((name == " " ) && (email == " " )) { document.showGallery.action = "/ui-design-engineering/pages/clients/clients/home.jsp"; }


	else if ((name != " " ) && (email != " " )) {
		{ document.showGallery.action = "/ui-design-engineering/pages/clients/darryl/home.jsp"; }
	}
	document.showGallery.submit();
}

</script>
</head>
<body onLoad="redir()">
<form action="" name="showGallery" method="post" >
  <input type="hidden" name="userName" id="userName" value="${fn:escapeXml(param.userName)}">
  <input type="hidden" name="emailAddress" id="emailAddress" value="${fn:escapeXml(param.emailAddress)}" />
  <input type="hidden" name="userName" id="userName" value="<%=request.getParameter("userName")%>">
  <input type="hidden" name="emailAddress" id="emailAddress" value="<%=request.getParameter("emailAddress")%>" />
  <!--  <input style="float:right;" class="mbtn" type="submit" value="Confirm" onClick="redir()"> -->
</form> 
</body>
</html>
