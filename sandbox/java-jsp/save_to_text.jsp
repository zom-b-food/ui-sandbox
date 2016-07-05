<!DOCTYPE html>
<html lang="en">
	<head>
		<title>www.ui-design-engineering.com</title>
		<%@ include file="/sitewide/globals.jsp" %>
		<script type="text/javascript" src="${contextPath}/sandbox/java-jsp/js/jquery.validate.min.js"
		        charset="utf-8"></script>
		<style type="text/css">
			h3 {
				color: #000033;
				font-family: Candara, sans-serif;
				font-size: 1rem;
				font-weight: bold;
				text-align: left;
				padding: 1px 0 4px 12px;
				background-color: #cccccc;
				border-bottom: 1px solid #000033;
				border-top: 1px solid #000033;
			}

			table {
				border-collapse: collapse;
				border-spacing: 0;
				display: table;
				width: 100%;
				max-width: 526px !important;
				padding: 4px;
				border: 1px solid #96aab1 !important;
				margin: 0 auto;
			}

			td {
				white-space: nowrap;
			}

			td:first-of-type {
				white-space: nowrap;
				width: 25%;
			}

			#SayWhat label.error {
				clear: both;
				float: left;
				color: red;
				text-align: left;
				font-weight: normal;
				width: 180px !important;

			}

			.back-to-top {
				display: none;
			}
		</style>
		<script type="text/javascript">
			$(document).ready(function () {

				$("#SayWhat").validate();

			});
		</script>
	</head>
	<body class="popDiv">
		<div class="uk-container-center">
			<div class="uk-grid" data-uk-grid-margin>
				<div class="uk-width-1-1">
					<h3>Form data is saved to a servlet then converted into an text file.</h3>
					<h4>Saving form data to a text file on the server</h4>

					<p>This form uses a servlet to save all form data to a text file on the server. Good to use if you
						do not have a database setup or simply gathering form data that doesn't need to be stored in a
						database.</p>

					<form action="${contextPath}/feedback.SayWhatServer" name="SayWhat" method="post" id="SayWhat">
						<br/>
						<table>
							<tr>
								<th colspan="2">Let me know what you think.</th>
							</tr>
							<tr>
								<td><label for="name">Your Name:</label></td>
								<td><input name="name" type="text" class="MEDformField text required" id="name"
								           placeholder="Reveille"/></td>
							</tr>
							<tr>
								<td><label for="email">Your Alma Mater:</label></td>
								<td><input name="email" type="text" class="MEDformField text required" id="email"
								           placeholder="Gig em"/></td>
							</tr>
							<tr>
								<td><label for="comments">Comments:</label></td>
								<td><textarea class="textArea required" name="comments" cols="30" rows="3" id="comments"
								              placeholder="Just wanted to say..."></textarea></td>
							</tr>
							<tr>
								<td colspan="2" align="right"><input type="submit" name="Submit" value="Submit"
								                                     class="mbtn"/> &nbsp; </td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
	</body>
</html>

