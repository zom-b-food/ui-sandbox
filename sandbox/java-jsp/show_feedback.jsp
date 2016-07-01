<!DOCTYPE html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>

</head>
<body class="popDiv">
<div class="uk-container-center">
    <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-1-1">


	<h3>You Have Saved Data to the Server</h3>

	<h4>You have successfully written your form data to a text file on the server. </h4>

	<p><a href="${contextPath}/sources/feedback.txt">View it here</a></p>

	<p>Name: <%= request.getParameter("name") %>
	</p>

	<p>Alma Mater: <%= request.getParameter("email") %>
	</p>

	<p>Comments: <%= request.getParameter("comments") %>
	</p>
</div>
 </div>
    </div>
</body>
</html>
