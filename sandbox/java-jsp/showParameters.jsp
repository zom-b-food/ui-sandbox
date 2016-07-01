
<!DOCTYPE html>
<html lang="en">
<head>
	<title>www.ui-design-engineering.com</title>
	<%@ include file="/sitewide/globals.jsp" %>

</head>
<body class="popDiv">

<% session.setAttribute("FileName", request.getParameter("FileName"));%>
<div class="uk-container-center">
    <div class="uk-grid" data-uk-grid-margin>
        <div class="uk-width-1-1">

	<h3>Passing and Viewing Form Params</h3>

	<h4>Here is the info you entered in the form on the previous page.</h4>

	<ul class="fancybulletBig bold">
		<li>
			Your hometown is: <%=request.getParameter("FileName")%>
			<br/>
		</li>
		<li>
			Your name is:<%=request.getParameter("FlightNumber") %>
			<br/>
		</li>
	</ul>

	<h4>Try adding more info and see it populate the area below the form.</h4>

	<%@ page language="java" session="true" %>
	<ul class="fancybulletBig bold">
		<li>Pet's Name :<%=request.getParameter("PetsName") %>
		</li>
		<li>Street Name :<%=request.getParameter("Address") %>
		</li>
	</ul>
	<br/>

	<form name="frm2" method="post" action="showParameters.jsp">
		<fieldset>
			<legend>Showing Form Values</legend>
			<table width="360" cellpadding="4" cellspacing="1" border="0">
				<tr>
					<th colspan="2"> Passing Form Parameters.</th>
				</tr>
				<tr>
					<td><label>Your Hometown:</label></td>
					<td><input name="FileName" class="LONGformField" type="text" align="left" size="38" value="<%=request.getParameter("FileName")%>"/></td>
				</tr>
				<tr>
					<td><label>Your Name:</label></td>
					<td><input name="FlightNumber" class="LONGformField" type="text" align="left" size="38" value="<%=request.getParameter("FlightNumber")%>"/></td>
				</tr>
				<tr>
					<td><label>Pet's Name:</label></td>
					<td><input name="PetsName" class="MEDformField" type="text" align="left" size="38" value=""/></td>
				</tr>
				<tr>
					<td><label>Street Address:</label></td>
					<td><input name="Address" class="MEDformField" type="text" align="left" value=""/></td>
				</tr>
				<tr>
					<td colspan="2" align="right"><input name="submit" class="mbtn" type="submit" align="left" value="Show"/>
					</td>
				</tr>
			</table>
		</fieldset>
	</form>

</div>
 </div>
    </div>

</body>
</html>
