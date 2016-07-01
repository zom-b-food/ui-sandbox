<!DOCTYPE html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>

</head>
<body class="popDiv">
<jsp:useBean id="addusers" scope="session" class="demopool.AddUsers"/>
<jsp:setProperty name="addusers" property="*"/>
<div class="uk-container-center">
    <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-1-1">


	<h3>Registration and login servlet</h3>
	<h4>Data from the database is displayed.</h4>

	<p>This servlet uses MySQL database to store user info. It then captures form data, checks it against the database for existing info and then creates a new database row.</p>

	<h4>Thanks for registering and logging in.</h4>

	<p>Here is the information that you entered:</p>

	<ul class="fancybulletBig bold">
		<li>Username:
			<jsp:getProperty name="addusers" property="emailAddress"/>
		</li>
		<li>Password:
			<jsp:getProperty name="addusers" property="userName"/>
		</li>
	</ul>
 </div>
        </div>
</div>

</body>
</html>
