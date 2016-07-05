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

			#commentForm2 label.error {
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

				$("#commentForm2").validate();

			});
		</script>
	</head>
	<body class="popDiv">
		<div class="uk-container-center">
			<div class="uk-grid" data-uk-grid-margin>
				<div class="uk-width-1-1">
					<h3>Email form</h3>
					<h4>This is an email form based on the JavaMail API that uses the SMTPAuthenticator class.</h4>

					<form class="cmxform" id="commentForm2" name="commentForm2" method="post"
					      action="${contextPath}/authenticate.demoEmail">
						<br/>
						<table>
							<tr>
								<th colspan="2">Send me (or anyone) an email -</th>
							</tr>
							<tr>
								<td><label for="text1">Sender's email:</label></td>
								<td><input name="text1" id="text1" class="text required email" type="text"/></td>
							</tr>
							<tr>
								<td><label for="text2">To:</label></td>
								<td><input type="text" class="text required email" name="text2" id="text2"/></td>
							</tr>
							<tr>
								<td><label for="cc">CC:</label></td>
								<td><input type="text" class="text email" name="cc" id="cc"/></td>
							</tr>
							<tr>
								<td><label for="subject">Subject:</label></td>
								<td><input type="text" class="text required" name="subject" id="subject"/></td>
							</tr>
							<tr>
								<td><label for="area1" class="txtArea">Enter your comments:</label></td>
								<td><textarea class="textArea required" name="area1" cols="30" rows="3" id="area1"
								              placeholder="Just wanted to say..."></textarea>
								</td>
							</tr>
							<tr>
								<!--<td><input type="submit" value="Submit"></td>-->
								<td colspan="2" align="right"><input type="submit" value="Submit" class="mbtn"/></td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
	</body>
</html>

